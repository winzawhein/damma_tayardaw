import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:webview_flutter_android/webview_flutter_android.dart';
import 'package:webview_flutter_wkwebview/webview_flutter_wkwebview.dart';
import '../practice/practice_screens.dart';
import 'shrine_progress.dart';
import 'shrine_server.dart';
import 'offering_tray.dart';

class ShrineScreen extends StatefulWidget {
  const ShrineScreen({super.key});
  @override
  State<ShrineScreen> createState() => _ShrineScreenState();
}

class _ShrineScreenState extends State<ShrineScreen>
    with WidgetsBindingObserver {
  final _server = ShrineServer();
  WebViewController? _controller;
  ShrineProgress? _progress;
  Uri? _uri;
  Timer? _timeout;
  bool _ready = false,
      _busy = false,
      _muted = false,
      _labels = true,
      _opening = false;
  bool _active = true;
  String _aura = 'six';
  String? _error;
  Map<String, bool> _offerings = {
    for (final k in ShrineProgress.kinds) k: false,
  };

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _start();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final active = TickerMode.valuesOf(context).enabled;
    if (_active != active) {
      _active = active;
      if (_ready) {
        if (active && !_opening) {
          _sync();
          _call('resume');
        } else {
          _call('pause');
        }
      }
    }
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _timeout?.cancel();
    unawaited(_call('pause'));
    unawaited(_server.close());
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (!_ready) return;
    if (state == AppLifecycleState.resumed && !_opening && _active) {
      _sync();
      _call('resume');
    } else {
      _call('pause');
    }
  }

  Future<void> _start() async {
    try {
      _progress = ShrineProgress(await SharedPreferences.getInstance());
      if (!mounted) return;
      _muted = _progress!.muted;
      _labels = _progress!.labels;
      _aura = _progress!.aura;
      final uri = await _server.start();
      if (!mounted) {
        await _server.close();
        return;
      }
      _uri = uri.replace(
        queryParameters: {'theme': 'stone', 'q': 'low', 'qmode': 'saver'},
      );
      final params = WebViewPlatform.instance is WebKitWebViewPlatform
          ? WebKitWebViewControllerCreationParams(
              allowsInlineMediaPlayback: true,
              mediaTypesRequiringUserAction: const {},
            )
          : const PlatformWebViewControllerCreationParams();
      final controller = WebViewController.fromPlatformCreationParams(params);
      if (controller.platform is AndroidWebViewController) {
        await (controller.platform as AndroidWebViewController)
            .setMediaPlaybackRequiresUserGesture(false);
      }
      await controller.setJavaScriptMode(JavaScriptMode.unrestricted);
      await controller.setBackgroundColor(const Color(0xFFF2EDE3));
      await controller.addJavaScriptChannel(
        'ShrineBridge',
        onMessageReceived: (message) => _message(message.message),
      );
      await controller.setNavigationDelegate(
        NavigationDelegate(
          onNavigationRequest: (request) =>
              Uri.tryParse(request.url)?.origin == _uri?.origin
              ? NavigationDecision.navigate
              : NavigationDecision.prevent,
          onWebResourceError: (error) {
            if (error.isForMainFrame == true) _fail();
          },
        ),
      );
      if (!mounted) return;
      setState(() => _controller = controller);
      await _load();
    } catch (_) {
      _fail();
    }
  }

  Future<void> _load() async {
    if (!mounted || _controller == null || _uri == null) return;
    setState(() {
      _ready = false;
      _error = null;
      _busy = false;
    });
    _timeout?.cancel();
    _timeout = Timer(const Duration(seconds: 45), () {
      if (!_ready) _fail();
    });
    try {
      await _controller!.loadRequest(_uri!);
    } catch (_) {
      _fail();
    }
  }

  void _fail() {
    _timeout?.cancel();
    unawaited(_call('pause'));
    if (mounted) {
      setState(() {
        _ready = false;
        _error = '3D မြင်ကွင်း ဖွင့်မရပါ။ ပြန်ကြိုးစားပါ။';
      });
    }
  }

  Future<void> _call(String method, [Object? value]) async {
    try {
      await _controller?.runJavaScript(
        'window.shrine && window.shrine.$method(${value == null ? '' : jsonEncode(value)});',
      );
    } catch (_) {
      /* WebView may be closing. */
    }
  }

  Future<void> _sync() async {
    if (_progress == null) return;
    final offerings = _progress!.offerings(DateTime.now());
    if (mounted) setState(() => _offerings = offerings);
    await _call('setState', {
      'offerings': offerings,
      'muted': _muted,
      'showLabels': _labels,
      'aura': _aura,
      'hour': DateTime.now().hour,
    });
  }

  Future<void> _message(String raw) async {
    if (!mounted) return;
    try {
      final message = jsonDecode(raw) as Map<String, dynamic>;
      switch (message['type']) {
        case 'ready':
          _timeout?.cancel();
          setState(() {
            _ready = true;
            _error = null;
          });
          await _sync();
          if (!_active ||
              _opening ||
              WidgetsBinding.instance.lifecycleState !=
                  AppLifecycleState.resumed) {
            await _call('pause');
          }
        case 'error':
          if (message['fatal'] == true ||
              message['message'] == 'webgl_context_lost') {
            _fail();
          }
        case 'ritual_start':
          setState(() => _busy = true);
        case 'ritual_end':
          setState(() => _busy = false);
        case 'offered':
          await _progress?.offered(message['kind'] as String, DateTime.now());
          if (mounted) await _sync();
        case 'offer_again':
          _notice('ယနေ့ ကပ်လှူပြီးပါပြီ။');
        case 'merit':
          _notice('အမျှ အမျှ အမျှ၊ သာဓု သာဓု သာဓု။');
        case 'open':
          await _openTarget(message['target'] as String? ?? '');
      }
    } catch (_) {
      /* Ignore malformed or unsupported scene events. */
    }
  }

  void _notice(String message) {
    if (mounted) {
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(SnackBar(content: Text(message)));
    }
  }

  Future<void> _openTarget(String target) async {
    final Widget? screen = switch (target) {
      'beads' || 'count' => const CounterScreen(),
      'gatha' || 'radio' => const ListeningScreen(),
      'wisdom' || 'stories' || 'books' => const VerseScreen(),
      'quiz' || 'exam' => const QuizCategoriesScreen(),
      'vow' || 'vassa' || 'diary' || 'dana' => const PlannerScreen(),
      'meditation' => const MeditationScreen(),
      _ => null,
    };
    if (screen == null || _opening || !_ready) return;
    _opening = true;
    await _call('pause');
    if (!mounted) return;
    await Navigator.of(
      context,
    ).push(MaterialPageRoute<void>(builder: (_) => screen));
    _opening = false;
    if (mounted) {
      await _sync();
      if (_active) await _call('resume');
    }
  }

  Future<void> _settings() async {
    await showModalBottomSheet<void>(
      context: context,
      builder: (context) => StatefulBuilder(
        builder: (context, update) => SafeArea(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              SwitchListTile(
                title: const Text('အသံ'),
                value: !_muted,
                onChanged: (v) {
                  setState(() => _muted = !v);
                  update(() {});
                  _save();
                },
              ),
              SwitchListTile(
                title: const Text('အမည်များ ပြရန်'),
                value: _labels,
                onChanged: (v) {
                  setState(() => _labels = v);
                  update(() {});
                  _save();
                },
              ),
              const Text('ရောင်ခြည်တော်'),
              Wrap(
                spacing: 8,
                children: [
                  for (final entry in {
                    'six': 'ခြောက်သွယ်',
                    'gold': 'ရွှေရောင်',
                    'off': 'ပိတ်',
                  }.entries)
                    ChoiceChip(
                      label: Text(entry.value),
                      selected: _aura == entry.key,
                      onSelected: (_) {
                        setState(() => _aura = entry.key);
                        update(() {});
                        _save();
                      },
                    ),
                ],
              ),
              const SizedBox(height: 24),
            ],
          ),
        ),
      ),
    );
  }

  Future<void> _save() async {
    await _progress?.save(muted: _muted, labels: _labels, aura: _aura);
    await _sync();
  }

  void _menu() => showModalBottomSheet<void>(
    context: context,
    builder: (context) => SafeArea(
      child: ListView(
        shrinkWrap: true,
        children: [
          for (final entry in {
            'wisdom': 'ဓမ္မပဒ',
            'gatha': 'ရွတ်ဖတ် နာယူရန်',
            'beads': 'ပုတီးစိပ်',
            'meditation': 'တရားထိုင်ချိန်',
            'vow': 'နေ့စဉ် လေ့ကျင့်မှု',
            'quiz': 'ဉာဏ်စမ်း',
          }.entries)
            ListTile(
              title: Text(entry.value),
              trailing: const Icon(Icons.chevron_right),
              onTap: () {
                Navigator.pop(context);
                _openTarget(entry.key);
              },
            ),
        ],
      ),
    ),
  );
  @override
  Widget build(BuildContext context) => AnnotatedRegion<SystemUiOverlayStyle>(
    value: const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      statusBarIconBrightness: Brightness.dark,
      statusBarBrightness: Brightness.light,
      systemNavigationBarColor: Color(0xFF101211),
      systemNavigationBarIconBrightness: Brightness.light,
    ),
    child: Scaffold(
      backgroundColor: const Color(0xFFF2EDE3),
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(22, 12, 12, 0),
              child: Row(
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'ငြိမ်းချမ်းရာ',
                          style: TextStyle(
                            fontSize: 24,
                            color: Color(0xFF264537),
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                        Text(
                          'ဘုရားကျောင်းဆောင်  ·  ${_offerings.values.where((v) => v).length}/3 ကပ်လှူပြီး',
                          style: const TextStyle(
                            fontSize: 12,
                            color: Color(0xFF526658),
                          ),
                        ),
                      ],
                    ),
                  ),
                  IconButton(
                    tooltip: 'အသံ',
                    color: const Color(0xFF264537),
                    disabledColor: const Color(0xFF697D6C),
                    onPressed: _ready
                        ? () {
                            setState(() => _muted = !_muted);
                            _save();
                          }
                        : null,
                    icon: Icon(
                      _muted
                          ? Icons.volume_off_outlined
                          : Icons.volume_up_outlined,
                      size: 21,
                    ),
                  ),
                  IconButton(
                    tooltip: 'အပြင်အဆင်',
                    color: const Color(0xFF264537),
                    disabledColor: const Color(0xFF697D6C),
                    onPressed: _ready ? _settings : null,
                    icon: const Icon(Icons.tune_rounded, size: 21),
                  ),
                ],
              ),
            ),
            Expanded(
              child: Stack(
                children: [
                  if (_controller != null)
                    WebViewWidget(controller: _controller!),
                  if (!_ready)
                    Positioned.fill(
                      child: ColoredBox(
                        color: const Color(0xFFF2EDE3),
                        child: Center(
                          child: _error == null
                              ? const CircularProgressIndicator(strokeWidth: 2)
                              : Column(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(20),
                                      child: Text(
                                        _error!,
                                        textAlign: TextAlign.center,
                                      ),
                                    ),
                                    FilledButton(
                                      onPressed: () async {
                                        if (_controller != null) {
                                          await _load();
                                        } else {
                                          await _server.close();
                                          await _start();
                                        }
                                      },
                                      child: const Text('ပြန်ကြိုးစားရန်'),
                                    ),
                                  ],
                                ),
                        ),
                      ),
                    ),
                ],
              ),
            ),
            AnimatedContainer(
              duration: const Duration(milliseconds: 350),
              height: 2,
              margin: const EdgeInsets.symmetric(horizontal: 30),
              child: _busy
                  ? const LinearProgressIndicator(minHeight: 2)
                  : const SizedBox.expand(),
            ),
            OfferingTray(
              enabled: _ready && !_busy,
              offerings: _offerings,
              onAction: (action) {
                if (action == 'study') {
                  _openTarget('books');
                } else if (action == 'shrine') {
                  _call('goBay', 1);
                } else if (action == 'gong') {
                  _call('strikeGong');
                } else {
                  _call('offer', action);
                }
              },
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 0, 16, 8),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  TextButton.icon(
                    style: TextButton.styleFrom(
                      foregroundColor: const Color(0xFF244A3A),
                      disabledForegroundColor: const Color(0xFF697D6C),
                    ),
                    onPressed: _ready ? () => _openTarget('beads') : null,
                    icon: const Icon(Icons.blur_circular, size: 17),
                    label: const Text('ပုတီး', style: TextStyle(fontSize: 12)),
                  ),
                  TextButton.icon(
                    style: TextButton.styleFrom(
                      foregroundColor: const Color(0xFF244A3A),
                      disabledForegroundColor: const Color(0xFF697D6C),
                    ),
                    onPressed: _ready ? () => _openTarget('gatha') : null,
                    icon: const Icon(Icons.headphones_outlined, size: 17),
                    label: const Text(
                      'နာယူရန်',
                      style: TextStyle(fontSize: 12),
                    ),
                  ),
                  TextButton.icon(
                    style: TextButton.styleFrom(
                      foregroundColor: const Color(0xFF244A3A),
                      disabledForegroundColor: const Color(0xFF697D6C),
                    ),
                    onPressed: _ready ? _menu : null,
                    icon: const Icon(Icons.grid_view_rounded, size: 17),
                    label: const Text(
                      'အားလုံး',
                      style: TextStyle(fontSize: 12),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    ),
  );
}

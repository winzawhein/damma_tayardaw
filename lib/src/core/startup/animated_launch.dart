import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../theme/app_theme.dart';

/// Runs initialization alongside a single, bounded introduction.
class AnimatedLaunch extends StatefulWidget {
  const AnimatedLaunch({
    super.key,
    required this.initialize,
    required this.appBuilder,
  });
  final Future<void> Function() initialize;
  final WidgetBuilder appBuilder;

  @override
  State<AnimatedLaunch> createState() => _AnimatedLaunchState();
}

class _AnimatedLaunchState extends State<AnimatedLaunch>
    with SingleTickerProviderStateMixin {
  late final AnimationController _intro = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 1800),
  );
  bool _started = false;
  bool _ready = false;
  bool _failed = false;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (!_started) {
      _started = true;
      _start();
    }
  }

  Future<void> _start() async {
    setState(() => _failed = false);
    final reduced = MediaQuery.disableAnimationsOf(context);
    if (reduced) _intro.value = 1;
    try {
      await Future.wait<void>([
        widget.initialize(),
        if (!reduced) _intro.forward(from: 0).orCancel,
      ]);
      if (mounted) setState(() => _ready = true);
    } on TickerCanceled {
      // The launch widget was removed while initialization was in progress.
    } catch (error, stack) {
      debugPrint('App initialization failed: $error\n$stack');
      if (mounted) setState(() => _failed = true);
    }
  }

  @override
  void dispose() {
    _intro.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (_ready) return widget.appBuilder(context);
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'ပဇ္ဇောတ',
      theme: AppTheme.dark,
      home: AnnotatedRegion<SystemUiOverlayStyle>(
        value: SystemUiOverlayStyle.light.copyWith(
          statusBarColor: Colors.transparent,
          systemNavigationBarColor: const Color(0xFF11110F),
        ),
        child: Scaffold(
          backgroundColor: const Color(0xFF11110F),
          body: SafeArea(
            child: Stack(
              children: [
                Center(
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.all(32),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        RepaintBoundary(
                          child: AnimatedBuilder(
                            animation: _intro,
                            builder: (context, child) => CustomPaint(
                              painter: _LightEmblem(
                                Curves.easeOutCubic.transform(_intro.value),
                              ),
                              size: const Size(240, 240),
                            ),
                          ),
                        ),
                        const SizedBox(height: 24),
                        FadeTransition(
                          opacity: _intro.drive(
                            CurveTween(
                              curve: const Interval(
                                .22,
                                .78,
                                curve: Curves.easeOut,
                              ),
                            ),
                          ),
                          child: const Column(
                            children: [
                              Text(
                                'ပဇ္ဇောတ',
                                style: TextStyle(
                                  fontSize: 38,
                                  height: 1.6,
                                  color: Color(0xFFF6D991),
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                              SizedBox(height: 12),
                              Text(
                                'ဓမ္မအလင်းဖြင့် စိတ်အေးချမ်းစေ',
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                  fontSize: 14,
                                  height: 1.8,
                                  color: Color(0xFFB9B2A2),
                                ),
                              ),
                            ],
                          ),
                        ),
                        if (_failed) ...[
                          const SizedBox(height: 32),
                          const Text(
                            'စတင်၍ မရသေးပါ။ ပြန်လည်ကြိုးစားပါ။',
                            textAlign: TextAlign.center,
                          ),
                          TextButton(
                            onPressed: _start,
                            child: const Text('ပြန်ကြိုးစားရန်'),
                          ),
                        ],
                      ],
                    ),
                  ),
                ),
                if (!_failed)
                  Positioned(
                    bottom: 32,
                    left: 64,
                    right: 64,
                    child: Semantics(
                      label: 'ပဇ္ဇောတ စတင်နေသည်',
                      liveRegion: true,
                      child: AnimatedBuilder(
                        animation: _intro,
                        builder: (context, child) => LinearProgressIndicator(
                          value: _intro.value,
                          minHeight: 2,
                          color: const Color(0xFFDCB76B),
                          backgroundColor: const Color(0xFF302A1E),
                        ),
                      ),
                    ),
                  ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

/// Vector light and lotus: no image decoding, blur layers, or idle animation.
class _LightEmblem extends CustomPainter {
  const _LightEmblem(this.progress);
  final double progress;

  @override
  void paint(Canvas canvas, Size size) {
    final center = size.center(Offset.zero);
    canvas.translate(center.dx, center.dy);
    final gold = Paint()
      ..color = const Color(0xFFDBB66B).withValues(alpha: progress);
    final ring = Paint()
      ..color = const Color(0xFFDBB66B).withValues(alpha: .55 * progress)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1;
    canvas.drawCircle(
      Offset.zero,
      112,
      Paint()
        ..shader = const RadialGradient(
          colors: [Color(0xFF44351B), Color(0x0011110F)],
        ).createShader(const Rect.fromLTRB(-112, -112, 112, 112)),
    );
    canvas.drawArc(
      const Rect.fromLTRB(-96, -96, 96, 96),
      -math.pi / 2,
      math.pi * 2 * progress,
      false,
      ring,
    );
    for (var i = 0; i < 24; i++) {
      final angle = i * math.pi / 12;
      final radius = 103.0;
      canvas.drawCircle(
        Offset(math.cos(angle) * radius, math.sin(angle) * radius),
        i % 3 == 0 ? 1.8 : .8,
        gold,
      );
    }
    canvas.save();
    canvas.scale(.85 + .15 * progress);
    final flame = Path()
      ..moveTo(0, -66)
      ..cubicTo(27, -34, 39, -9, 22, 12)
      ..cubicTo(12, 27, -13, 27, -24, 11)
      ..cubicTo(-40, -12, -7, -29, 0, -66)
      ..close();
    canvas.drawPath(flame, gold);
    canvas.drawPath(
      Path()
        ..moveTo(0, -25)
        ..quadraticBezierTo(-15, 0, 0, 12)
        ..quadraticBezierTo(15, 0, 0, -25),
      Paint()..color = const Color(0xFF211D13),
    );
    for (final direction in [-1.0, 1.0]) {
      canvas.save();
      canvas.scale(direction, 1);
      canvas.drawPath(
        Path()
          ..moveTo(0, 49)
          ..cubicTo(-11, 18, -37, 22, -52, 12)
          ..cubicTo(-51, 43, -29, 57, 0, 49)
          ..close(),
        gold,
      );
      canvas.restore();
    }
    canvas.drawLine(
      const Offset(-32, 65),
      const Offset(32, 65),
      ring..strokeWidth = 2,
    );
    canvas.restore();
  }

  @override
  bool shouldRepaint(_LightEmblem oldDelegate) =>
      oldDelegate.progress != progress;
}

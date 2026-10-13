import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../content/presentation/screens.dart';
import 'practice_data.dart';

void _open(BuildContext context, Widget page) =>
    Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => page));

class PracticeScreen extends StatelessWidget {
  const PracticeScreen({super.key});
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('လေ့ကျင့်မှုနှင့် လေ့လာမှု')),
    body: ListView(
      padding: const EdgeInsets.all(16),
      children: [
        _entry(
          context,
          Icons.auto_stories,
          'ဓမ္မပဒ',
          'ဂါထာ ၄၂၃ • ပါဠိ၊ မြန်မာ၊ English',
          const VerseScreen(),
        ),
        _entry(
          context,
          Icons.quiz,
          'ဓမ္မဉာဏ်စမ်း',
          'အမျိုးအစားအလိုက် လေ့လာရန်',
          const QuizCategoriesScreen(),
        ),
        _entry(
          context,
          Icons.headphones,
          'နေ့စဉ် နာယူရန်',
          'YouTube • အင်တာနက်လိုအပ်သည်',
          const ListeningScreen(),
        ),
        _entry(
          context,
          Icons.touch_app,
          'ပုတီးစိပ်',
          '၁၀၈ လုံး • အရေအတွက် မှတ်သားရန်',
          const CounterScreen(),
        ),
        _entry(
          context,
          Icons.timer,
          'တရားထိုင်ချိန်',
          'အချိန် သတ်မှတ်ရန်',
          const MeditationScreen(),
        ),
        _entry(
          context,
          Icons.checklist,
          'နေ့စဉ် လေ့ကျင့်မှု',
          'မိမိ၏ လေ့ကျင့်မှုကို မှတ်သားရန်',
          const PlannerScreen(),
        ),
      ],
    ),
  );

  Widget _entry(
    BuildContext context,
    IconData icon,
    String title,
    String subtitle,
    Widget screen,
  ) => Card(
    child: ListTile(
      leading: Icon(icon),
      title: Text(title),
      subtitle: Text(subtitle),
      trailing: const Icon(Icons.chevron_right),
      onTap: () => _open(context, screen),
    ),
  );
}

class _DataView extends StatefulWidget {
  const _DataView({required this.name, required this.builder});
  final String name;
  final Widget Function(dynamic) builder;
  @override
  State<_DataView> createState() => _DataViewState();
}

class _DataViewState extends State<_DataView> {
  late Future<dynamic> data = PracticeData.load(widget.name);
  @override
  Widget build(BuildContext context) => FutureBuilder<dynamic>(
    future: data,
    builder: (context, snapshot) {
      if (snapshot.hasError) {
        return Center(
          child: TextButton(
            onPressed: () => setState(() {
              data = PracticeData.load(widget.name);
            }),
            child: const Text('ပြန်ကြိုးစားရန်'),
          ),
        );
      }
      if (!snapshot.hasData) {
        return const Center(child: CircularProgressIndicator());
      }
      return widget.builder(snapshot.data);
    },
  );
}

class VerseScreen extends StatefulWidget {
  const VerseScreen({super.key});
  @override
  State<VerseScreen> createState() => _VerseScreenState();
}

class _VerseScreenState extends State<VerseScreen> {
  String query = '';
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('ဓမ္မပဒ')),
    body: _DataView(
      name: 'dhammapada',
      builder: (data) {
        final verses = (data as List).cast<Map<String, dynamic>>();
        final filtered = verses
            .where(
              (v) => '${v['verse']} ${v['my']} ${v['en']} ${v['pali']}'
                  .toLowerCase()
                  .contains(query.toLowerCase()),
            )
            .toList();
        final daily =
            verses[PracticeData.dailyVerseIndex(DateTime.now(), verses.length)];
        return Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(16),
              child: TextField(
                decoration: const InputDecoration(
                  prefixIcon: Icon(Icons.search),
                  hintText: 'စာသား / ဂါထာအမှတ် ရှာရန်',
                ),
                onChanged: (value) => setState(() => query = value),
              ),
            ),
            if (query.isEmpty)
              ListTile(
                leading: const Icon(Icons.wb_sunny),
                title: Text('ယနေ့ဂါထာ • ${daily['verse']}'),
                trailing: const Icon(Icons.chevron_right),
                onTap: () => _open(context, _VerseDetail(verse: daily)),
              ),
            Expanded(
              child: filtered.isEmpty
                  ? const Center(child: Text('မတွေ့ပါ'))
                  : ListView.builder(
                      itemCount: filtered.length,
                      itemBuilder: (context, index) {
                        final verse = filtered[index];
                        return ListTile(
                          title: Text(
                            '${verse['chapter']} / ${verse['verse']}',
                          ),
                          subtitle: Text(
                            verse['my'] as String,
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis,
                          ),
                          onTap: () =>
                              _open(context, _VerseDetail(verse: verse)),
                        );
                      },
                    ),
            ),
          ],
        );
      },
    ),
  );
}

class _VerseDetail extends StatelessWidget {
  const _VerseDetail({required this.verse});
  final Map<String, dynamic> verse;
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: Text('ဓမ္မပဒ ${verse['verse']}')),
    body: ListView(
      padding: const EdgeInsets.all(20),
      children: [
        for (final key in ['pali', 'my', 'en']) ...[
          Text(
            key == 'pali'
                ? 'ပါဠိ'
                : key == 'my'
                ? 'မြန်မာ'
                : 'English',
            style: Theme.of(context).textTheme.titleLarge,
          ),
          TextReaderPanel(text: verse[key] as String),
          const SizedBox(height: 24),
        ],
        SelectableText(verse['attribution'] as String? ?? ''),
      ],
    ),
  );
}

class QuizCategoriesScreen extends StatelessWidget {
  const QuizCategoriesScreen({super.key});
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('ဓမ္မဉာဏ်စမ်း')),
    body: _DataView(
      name: 'quiz',
      builder: (data) {
        final categories = data['categories'] as List;
        final questions = data['questions'] as List;
        return ListView(
          children: [
            for (final category in categories)
              ListTile(
                title: Text(category['name_my'] as String),
                subtitle: Text(category['name_en'] as String),
                trailing: const Icon(Icons.chevron_right),
                onTap: () {
                  final selected =
                      questions
                          .where((q) => q['category_id'] == category['id'])
                          .cast<Map<String, dynamic>>()
                          .toList()
                        ..shuffle();
                  _open(
                    context,
                    _QuizSession(questions: selected.take(10).toList()),
                  );
                },
              ),
          ],
        );
      },
    ),
  );
}

class _QuizSession extends StatefulWidget {
  const _QuizSession({required this.questions});
  final List<Map<String, dynamic>> questions;
  @override
  State<_QuizSession> createState() => _QuizSessionState();
}

class _QuizSessionState extends State<_QuizSession> {
  int index = 0, score = 0;
  int? selected;
  bool english = false;
  @override
  Widget build(BuildContext context) {
    final finished = index >= widget.questions.length;
    final q = finished ? null : widget.questions[index];
    return Scaffold(
      appBar: AppBar(
        title: const Text('ဉာဏ်စမ်း'),
        actions: [
          TextButton(
            onPressed: () => setState(() => english = !english),
            child: Text(english ? 'မြန်မာ' : 'English'),
          ),
        ],
      ),
      body: finished
          ? Center(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    '$score / ${widget.questions.length}',
                    style: Theme.of(context).textTheme.headlineLarge,
                  ),
                  const Text('ပြီးဆုံးပါပြီ'),
                  TextButton(
                    onPressed: () => Navigator.pop(context),
                    child: const Text('အမျိုးအစားများသို့'),
                  ),
                ],
              ),
            )
          : ListView(
              padding: const EdgeInsets.all(20),
              children: [
                Text('${index + 1} / ${widget.questions.length}'),
                const SizedBox(height: 16),
                Text(
                  q![english ? 'question_en' : 'question_my'] as String,
                  style: Theme.of(context).textTheme.titleLarge,
                ),
                const SizedBox(height: 20),
                for (int i = 0; i < (q['options'] as List).length; i++)
                  Card(
                    child: ListTile(
                      leading: Icon(
                        selected == null
                            ? Icons.circle_outlined
                            : i == q['correct_index']
                            ? Icons.check_circle
                            : i == selected
                            ? Icons.cancel
                            : Icons.circle_outlined,
                      ),
                      title: Text(
                        q['options'][i][english ? 'en' : 'my'] as String,
                      ),
                      selected: selected == i,
                      onTap: selected != null
                          ? null
                          : () => setState(() {
                              selected = i;
                              if (i == q['correct_index']) score++;
                            }),
                    ),
                  ),
                if (selected != null) ...[
                  const SizedBox(height: 16),
                  Text(
                    q[english ? 'explanation_en' : 'explanation_my']
                            as String? ??
                        '',
                  ),
                  const SizedBox(height: 20),
                  FilledButton(
                    onPressed: () => setState(() {
                      index++;
                      selected = null;
                    }),
                    child: const Text('ဆက်ရန်'),
                  ),
                ],
              ],
            ),
    );
  }
}

class ListeningScreen extends StatelessWidget {
  const ListeningScreen({super.key});
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('နေ့စဉ် နာယူရန်')),
    body: _DataView(
      name: 'myanmar_listening',
      builder: (data) => ListView(
        children: [
          const Padding(
            padding: EdgeInsets.all(16),
            child: Text('YouTube မှ နာယူရန် အင်တာနက်လိုအပ်သည်။'),
          ),
          for (final item in data as List)
            ListTile(
              leading: const Icon(Icons.play_circle_outline),
              title: Text(item['title_my'] as String),
              subtitle: Text(
                item['speaker_my'] as String? ??
                    item['speaker'] as String? ??
                    '',
              ),
              onTap: () {
                final id = Uri.parse(
                  item['url'] as String,
                ).queryParameters['v'];
                if (id == null) return;
                _open(
                  context,
                  Scaffold(
                    appBar: AppBar(title: Text(item['title_my'] as String)),
                    body: ListView(
                      padding: const EdgeInsets.all(16),
                      children: [
                        VideoPlayerPanel(videoId: id),
                        const SizedBox(height: 20),
                        Text(item['description_my'] as String? ?? ''),
                      ],
                    ),
                  ),
                );
              },
            ),
        ],
      ),
    ),
  );
}

class CounterScreen extends StatefulWidget {
  const CounterScreen({super.key});
  @override
  State<CounterScreen> createState() => _CounterScreenState();
}

class _CounterScreenState extends State<CounterScreen> {
  PracticeProgress? progress;
  int count = 0;
  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final value = PracticeProgress(await SharedPreferences.getInstance());
    if (mounted) {
      setState(() {
        progress = value;
        count = value.count;
      });
    }
  }

  Future<void> _change(int value) async {
    if (value < 0 || progress == null) return;
    setState(() => count = value);
    HapticFeedback.selectionClick();
    await progress!.setCount(value);
  }

  Future<void> _reset() async {
    final yes = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('အရေအတွက် ပြန်စမည်လား။'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('မလုပ်တော့ပါ'),
          ),
          TextButton(
            onPressed: () => Navigator.pop(context, true),
            child: const Text('ပြန်စရန်'),
          ),
        ],
      ),
    );
    if (yes == true && mounted) await _change(0);
  }

  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('ပုတီးစိပ်')),
    body: Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text('$count', style: Theme.of(context).textTheme.headlineLarge),
          Text('${count ~/ 108} ပတ် • ${count % 108} / 108'),
          const SizedBox(height: 32),
          SizedBox(
            width: 180,
            height: 180,
            child: FilledButton(
              onPressed: progress == null ? null : () => _change(count + 1),
              child: const Icon(Icons.touch_app, size: 64),
            ),
          ),
          const SizedBox(height: 24),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              TextButton(
                onPressed: count > 0 ? () => _change(count - 1) : null,
                child: const Text('− 1'),
              ),
              TextButton(
                onPressed: count > 0 ? _reset : null,
                child: const Text('ပြန်စရန်'),
              ),
            ],
          ),
        ],
      ),
    ),
  );
}

class MeditationScreen extends StatefulWidget {
  const MeditationScreen({super.key});
  @override
  State<MeditationScreen> createState() => _MeditationScreenState();
}

class _MeditationScreenState extends State<MeditationScreen>
    with WidgetsBindingObserver {
  int minutes = 10;
  Duration remaining = const Duration(minutes: 10);
  DateTime? deadline;
  Timer? ticker;
  bool done = false;
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
  }

  @override
  void dispose() {
    ticker?.cancel();
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) _tick();
  }

  void _tick() {
    if (deadline == null || !mounted) return;
    final left = deadline!.difference(DateTime.now());
    setState(() {
      remaining = left.isNegative ? Duration.zero : left;
      if (remaining == Duration.zero) {
        deadline = null;
        ticker?.cancel();
        done = true;
      }
    });
  }

  void _toggle() {
    if (deadline != null) {
      _tick();
      setState(() => deadline = null);
      ticker?.cancel();
    } else {
      setState(() {
        if (remaining == Duration.zero) remaining = Duration(minutes: minutes);
        done = false;
        deadline = DateTime.now().add(remaining);
      });
      ticker = Timer.periodic(
        const Duration(milliseconds: 250),
        (_) => _tick(),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final seconds = (remaining.inMilliseconds / 1000).ceil();
    return Scaffold(
      appBar: AppBar(title: const Text('တရားထိုင်ချိန်')),
      body: ListView(
        padding: const EdgeInsets.all(24),
        children: [
          const Text('ဤစာမျက်နှာကို ဖွင့်ထားပါ။ နောက်ခံ အသိပေးသံ မပါဝင်ပါ။'),
          const SizedBox(height: 24),
          Wrap(
            spacing: 8,
            children: [
              for (final value in [5, 10, 15, 20, 30, 60])
                ChoiceChip(
                  label: Text('$value min'),
                  selected: minutes == value,
                  onSelected: deadline != null
                      ? null
                      : (_) => setState(() {
                          minutes = value;
                          remaining = Duration(minutes: value);
                          done = false;
                        }),
                ),
            ],
          ),
          const SizedBox(height: 40),
          Center(
            child: Text(
              '${seconds ~/ 60}:${(seconds % 60).toString().padLeft(2, '0')}',
              style: Theme.of(context).textTheme.headlineLarge,
            ),
          ),
          if (done) const Center(child: Text('တရားထိုင်ချိန် ပြည့်ပါပြီ')),
          const SizedBox(height: 32),
          FilledButton(
            onPressed: _toggle,
            child: Text(deadline == null ? 'စတင်ရန် / ဆက်ရန်' : 'ခေတ္တရပ်ရန်'),
          ),
          TextButton(
            onPressed: () => setState(() {
              ticker?.cancel();
              deadline = null;
              remaining = Duration(minutes: minutes);
              done = false;
            }),
            child: const Text('ပြန်စရန်'),
          ),
        ],
      ),
    );
  }
}

class PlannerScreen extends StatefulWidget {
  const PlannerScreen({super.key});
  @override
  State<PlannerScreen> createState() => _PlannerScreenState();
}

class _PlannerScreenState extends State<PlannerScreen> {
  PracticeProgress? progress;
  DateTime day = DateTime.now();
  static const activities = {
    'chant': 'ဘုရားရှိခိုး / ပရိတ်ရွတ်',
    'meditate': 'တရားထိုင်',
    'read': 'ဓမ္မစာဖတ်',
    'listen': 'တရားနာ',
    'kindness': 'မေတ္တာပွား / ကုသိုလ်ပြု',
  };
  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final value = PracticeProgress(await SharedPreferences.getInstance());
    if (mounted) setState(() => progress = value);
  }

  @override
  Widget build(BuildContext context) {
    final completed = progress?.completed(day) ?? {};
    return Scaffold(
      appBar: AppBar(title: const Text('နေ့စဉ် လေ့ကျင့်မှု')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              IconButton(
                onPressed: () => setState(
                  () => day = DateTime(day.year, day.month, day.day - 1),
                ),
                icon: const Icon(Icons.chevron_left),
              ),
              Text(PracticeData.dayKey(day)),
              IconButton(
                onPressed:
                    PracticeData.dayKey(day) ==
                        PracticeData.dayKey(DateTime.now())
                    ? null
                    : () => setState(
                        () => day = DateTime(day.year, day.month, day.day + 1),
                      ),
                icon: const Icon(Icons.chevron_right),
              ),
            ],
          ),
          LinearProgressIndicator(value: completed.length / activities.length),
          const SizedBox(height: 16),
          for (final activity in activities.entries)
            CheckboxListTile(
              title: Text(activity.value),
              value: completed.contains(activity.key),
              onChanged: progress == null
                  ? null
                  : (_) async {
                      await progress!.toggle(day, activity.key);
                      if (mounted) setState(() {});
                    },
            ),
        ],
      ),
    );
  }
}

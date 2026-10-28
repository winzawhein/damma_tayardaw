import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:gawdama_tayardaw/src/features/practice/practice_data.dart';
import 'package:gawdama_tayardaw/src/features/practice/practice_screens.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  setUp(() => SharedPreferences.setMockInitialValues({}));

  test('APK datasets have valid verse, quiz and video references', () async {
    final verses = await PracticeData.load('dhammapada') as List;
    expect(verses.length, 423);
    expect(verses.map((v) => v['verse']).toSet().length, 423);
    expect(
      verses.every((v) => (v['attribution'] as String).isNotEmpty),
      isTrue,
    );
    final quiz = await PracticeData.load('quiz') as Map;
    final categories = (quiz['categories'] as List).map((c) => c['id']).toSet();
    expect(quiz['questions'], hasLength(3564));
    for (final q in quiz['questions']) {
      expect(categories, contains(q['category_id']));
      expect(
        q['correct_index'],
        inInclusiveRange(0, (q['options'] as List).length - 1),
      );
      for (final key in [
        'question_my',
        'question_en',
        'explanation_my',
        'explanation_en',
      ]) {
        expect(q[key], isA<String>());
      }
    }
    final videos = await PracticeData.load('myanmar_listening') as List;
    expect(videos.length, 14);
    for (final v in videos) {
      expect(
        Uri.parse(v['url'] as String).queryParameters['v'],
        matches(RegExp(r'^[a-zA-Z0-9_-]{11}$')),
      );
    }
  });

  test('counter persists and checklist is isolated by date', () async {
    final prefs = await SharedPreferences.getInstance();
    final progress = PracticeProgress(prefs);
    await progress.setCount(109);
    expect(PracticeProgress(prefs).count, 109);
    await progress.setCount(-1);
    expect(progress.count, 0);
    final day = DateTime(2026, 10, 13);
    await progress.toggle(day, 'read');
    expect(progress.completed(day), {'read'});
    expect(progress.completed(DateTime(2026, 10, 14)), isEmpty);
    await progress.toggle(day, 'read');
    expect(progress.completed(day), isEmpty);
  });

  test('daily verse is stable throughout a local day', () {
    expect(
      PracticeData.dailyVerseIndex(DateTime(2026, 10, 13, 1), 423),
      PracticeData.dailyVerseIndex(DateTime(2026, 10, 13, 23), 423),
    );
  });

  testWidgets('counter supports tapping and restores persisted count', (
    tester,
  ) async {
    SharedPreferences.setMockInitialValues({'practice.beads': 107});
    await tester.pumpWidget(const MaterialApp(home: CounterScreen()));
    await tester.pumpAndSettle();
    expect(find.text('107'), findsOneWidget);
    await tester.tap(find.byKey(const ValueKey('prayer-beads')));
    await tester.pumpAndSettle();
    expect(find.text('108'), findsOneWidget);
    await tester.drag(
      find.byKey(const ValueKey('prayer-beads')),
      const Offset(0, 160),
    );
    await tester.pumpAndSettle();
    expect(find.text('109'), findsOneWidget);
    expect(tester.binding.hasScheduledFrame, isFalse);
    expect(
      (await SharedPreferences.getInstance()).getInt('practice.beads'),
      109,
    );
  });

  testWidgets('timer starts, pauses and resets', (tester) async {
    await tester.pumpWidget(const MaterialApp(home: MeditationScreen()));
    expect(find.text('10:00'), findsOneWidget);
    await tester.tap(find.text('စတင်ရန် / ဆက်ရန်'));
    await tester.pump();
    expect(find.text('ခေတ္တရပ်ရန်'), findsOneWidget);
    await tester.tap(find.text('ခေတ္တရပ်ရန်'));
    await tester.pump();
    expect(find.text('စတင်ရန် / ဆက်ရန်'), findsOneWidget);
    await tester.tap(find.text('ပြန်စရန်'));
    await tester.pump();
    expect(find.text('10:00'), findsOneWidget);
    await tester.pumpWidget(const SizedBox());
  });

  testWidgets('practice menu opens the offline verse library', (tester) async {
    await tester.pumpWidget(
      const ProviderScope(child: MaterialApp(home: PracticeScreen())),
    );
    await tester.runAsync(() => PracticeData.load('dhammapada'));
    await tester.tap(find.text('ဓမ္မပဒ'));
    await tester.pumpAndSettle();
    expect(find.byType(TextField), findsOneWidget);
    await tester.enterText(find.byType(TextField), 'not-a-verse-xyz');
    await tester.pumpAndSettle();
    expect(find.text('မတွေ့ပါ'), findsOneWidget);
  });
}

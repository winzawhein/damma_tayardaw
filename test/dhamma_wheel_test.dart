import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:gawdama_tayardaw/src/features/dependent_origination/wheel_data.dart';
import 'package:gawdama_tayardaw/src/features/dependent_origination/physical_wheel.dart';
import 'package:gawdama_tayardaw/src/features/dependent_origination/wheel_screen.dart';

void main() {
  test('twelve links keep the four groups and three rounds', () {
    expect(dhammaLinks.length, 12);
    expect(
      List.generate(
        4,
        (i) => dhammaLinks.where((link) => link.group == i).length,
      ),
      [2, 5, 3, 2],
    );
    expect(dhammaLinks[6].name, 'ဝေဒနာ');
    expect(dhammaLinks[7].name, 'တဏှာ');
    expect(dhammaLinks[9].round, 1);
  });

  testWidgets('physical wheel coasts briefly then rests and resets', (
    tester,
  ) async {
    Widget scene(int reset) => MaterialApp(
      home: Scaffold(
        body: Center(
          child: SizedBox(
            width: 360,
            child: PhysicalDhammaWheel(
              selected: 0,
              cessation: false,
              flat: false,
              reset: reset,
              onSelect: (_) {},
            ),
          ),
        ),
      ),
    );
    await tester.pumpWidget(scene(0));
    final start = tester.getCenter(find.byKey(const ValueKey('wheel-node-0')));
    await tester.fling(
      find.byKey(const ValueKey('dhamma-wheel')),
      const Offset(80, 0),
      900,
    );
    await tester.pumpAndSettle();
    expect(
      tester.getCenter(find.byKey(const ValueKey('wheel-node-0'))),
      isNot(start),
    );
    expect(tester.binding.hasScheduledFrame, isFalse);
    await tester.pumpWidget(scene(1));
    await tester.pumpAndSettle();
    expect(tester.getCenter(find.byKey(const ValueKey('wheel-node-0'))), start);
  });

  testWidgets('wheel selects links, supports cessation and stays idle', (
    tester,
  ) async {
    tester.view.physicalSize = const Size(390, 844);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);
    await tester.pumpWidget(
      MaterialApp(theme: ThemeData.dark(), home: const DhammaWheelScreen()),
    );
    await tester.pumpAndSettle();
    await tester.tap(find.byKey(const ValueKey('wheel-node-6')));
    await tester.pumpAndSettle();
    expect(find.text('Vedanā'), findsOneWidget);
    await tester.tap(find.text('ချုပ်ငြိမ်းပုံ'));
    await tester.pumpAndSettle();
    expect(
      find.text('ဝေဒနာ ချုပ်ငြိမ်းခြင်းကြောင့် တဏှာ ချုပ်ငြိမ်းသည်။'),
      findsOneWidget,
    );
    await tester.drag(
      find.byKey(const ValueKey('dhamma-wheel')),
      const Offset(50, 15),
    );
    await tester.pumpAndSettle();
    expect(tester.takeException(), isNull);
    expect(tester.binding.hasScheduledFrame, isFalse);
    await tester.ensureVisible(find.byKey(const ValueKey('wheel-next')));
    await tester.tap(find.byKey(const ValueKey('wheel-next')));
    await tester.pumpAndSettle();
    expect(find.text('Taṇhā'), findsOneWidget);
  });

  testWidgets('large text and reduced motion stay usable', (tester) async {
    tester.view.physicalSize = const Size(320, 700);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);
    await tester.pumpWidget(
      MaterialApp(
        theme: ThemeData.dark(),
        builder: (context, child) => MediaQuery(
          data: MediaQuery.of(context).copyWith(
            disableAnimations: true,
            textScaler: const TextScaler.linear(1.6),
          ),
          child: child!,
        ),
        home: const DhammaWheelScreen(),
      ),
    );
    await tester.pumpAndSettle();
    await tester.ensureVisible(find.byKey(const ValueKey('wheel-node-11')));
    await tester.tap(find.byKey(const ValueKey('wheel-node-11')));
    await tester.pumpAndSettle();
    expect(find.text('Jarāmaraṇa'), findsOneWidget);
    expect(tester.takeException(), isNull);
    expect(tester.binding.hasScheduledFrame, isFalse);
  });
}

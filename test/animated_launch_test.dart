import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:gawdama_tayardaw/src/core/startup/animated_launch.dart';

void main() {
  Widget launch(Future<void> Function() initialize, {bool reduced = false}) =>
      MediaQuery(
        data: MediaQueryData(disableAnimations: reduced),
        child: AnimatedLaunch(
          initialize: initialize,
          appBuilder: (_) => const MaterialApp(home: Text('Home ready')),
        ),
      );

  testWidgets('waits for services and stops animating during slow startup', (
    tester,
  ) async {
    final ready = Completer<void>();
    await tester.pumpWidget(launch(() => ready.future));
    await tester.pumpAndSettle();
    expect(find.text('ပဇ္ဇောတ'), findsOneWidget);
    expect(find.text('Home ready'), findsNothing);
    expect(tester.binding.hasScheduledFrame, isFalse);
    ready.complete();
    await tester.pumpAndSettle();
    expect(find.text('Home ready'), findsOneWidget);
  });

  testWidgets('fast startup still shows the bounded introduction', (
    tester,
  ) async {
    await tester.pumpWidget(launch(() async {}));
    await tester.pump(const Duration(milliseconds: 500));
    expect(find.text('Home ready'), findsNothing);
    await tester.pumpAndSettle();
    expect(find.text('Home ready'), findsOneWidget);
  });

  testWidgets('reduced motion skips animation delay', (tester) async {
    await tester.pumpWidget(launch(() async {}, reduced: true));
    await tester.pump();
    expect(find.text('Home ready'), findsOneWidget);
  });

  testWidgets('failed initialization can be retried', (tester) async {
    var attempts = 0;
    await tester.pumpWidget(
      launch(() async {
        if (attempts++ == 0) throw StateError('Test startup failure');
      }, reduced: true),
    );
    await tester.pumpAndSettle();
    expect(find.text('Home ready'), findsNothing);
    await tester.tap(find.text('ပြန်ကြိုးစားရန်'));
    await tester.pumpAndSettle();
    expect(attempts, 2);
    expect(find.text('Home ready'), findsOneWidget);
  });
}

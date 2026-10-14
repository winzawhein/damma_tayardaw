import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:go_router/go_router.dart';
import 'package:gawdama_tayardaw/src/features/shrine/offering_tray.dart';
import 'package:gawdama_tayardaw/src/features/content/presentation/screens.dart';

void main() {
  testWidgets(
    'illustrated tray retains completed artwork and dispatches actions',
    (tester) async {
      String? action;
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: OfferingTray(
              enabled: true,
              offerings: const {'water': true},
              onAction: (value) => action = value,
            ),
          ),
        ),
      );
      await tester.pumpAndSettle();
      expect(find.byType(Image), findsNWidgets(6));
      expect(find.byIcon(Icons.check_circle), findsOneWidget);
      await tester.tap(find.text('ရေချမ်း'));
      expect(action, 'water');
      await tester.tap(find.text('စာကြည့်ရန်'));
      expect(action, 'study');
      expect(tester.takeException(), isNull);
    },
  );

  testWidgets('shrine tab respects reduced motion', (tester) async {
    await tester.pumpWidget(
      MaterialApp(
        home: MediaQuery(
          data: const MediaQueryData(disableAnimations: true),
          child: Scaffold(
            body: SizedBox(
              width: 90,
              height: 88,
              child: ShrineNavButton(selected: true, onTap: () {}),
            ),
          ),
        ),
      ),
    );
    await tester.pumpAndSettle();
    expect(find.byIcon(Icons.temple_buddhist), findsOneWidget);
    expect(tester.binding.hasScheduledFrame, isFalse);
    expect(tester.takeException(), isNull);
  });

  testWidgets('five tabs select the correct branches on a narrow phone', (
    tester,
  ) async {
    tester.view.physicalSize = const Size(360, 800);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);
    final paths = ['home', 'library', 'shrine', 'saved', 'profile'];
    final router = GoRouter(
      initialLocation: '/home',
      routes: [
        StatefulShellRoute.indexedStack(
          builder: (_, _, shell) => AppShell(navigationShell: shell),
          branches: [
            for (final path in paths)
              StatefulShellBranch(
                routes: [
                  GoRoute(
                    path: '/$path',
                    builder: (_, _) => Center(child: Text('screen:$path')),
                  ),
                ],
              ),
          ],
        ),
      ],
    );
    addTearDown(router.dispose);
    await tester.pumpWidget(MaterialApp.router(routerConfig: router));
    for (final entry in {
      'ဘုရားကျောင်း': 'shrine',
      'သိမ်းထား': 'saved',
      'မိမိ': 'profile',
      'တရားတော်': 'library',
      'ပင်မ': 'home',
    }.entries) {
      await tester.tap(find.text(entry.key));
      await tester.pump(const Duration(milliseconds: 400));
      expect(find.text('screen:${entry.value}'), findsOneWidget);
      expect(tester.takeException(), isNull);
    }
    await tester.pumpAndSettle();
    expect(tester.binding.hasScheduledFrame, isFalse);
    final shrineY = tester.getCenter(find.byIcon(Icons.temple_buddhist)).dy;
    final homeY = tester.getCenter(find.byIcon(Icons.home_rounded)).dy;
    expect(homeY - shrineY, greaterThan(8));
  });
}

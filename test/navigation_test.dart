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
      expect(find.byType(Image), findsNWidgets(5));
      expect(find.byIcon(Icons.music_note_rounded), findsOneWidget);
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
    expect(find.byIcon(Icons.grid_view_rounded), findsOneWidget);
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
        GoRoute(
          path: '/dhamma-wheel',
          builder: (_, _) => const Scaffold(body: Text('screen:wheel')),
        ),
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
      'ဘုရားစဉ်': 'shrine',
      'သိမ်းထား': 'saved',
      'မိမိ': 'profile',
      'တရားတော်': 'library',
      'ပင်မ': 'home',
    }.entries) {
      await tester.tap(
        entry.value == 'shrine'
            ? find.byKey(const ValueKey('dhamma-menu-launcher'))
            : find.text(entry.key),
      );
      await tester.pumpAndSettle();
      if (entry.value == 'shrine') {
        expect(find.byKey(const ValueKey('dhamma-menu-wheel')), findsOneWidget);
        await tester.tap(find.byKey(const ValueKey('dhamma-menu-shrine')));
        await tester.pumpAndSettle();
      }
      expect(find.text('screen:${entry.value}'), findsOneWidget);
      expect(tester.takeException(), isNull);
    }
    await tester.pumpAndSettle();
    expect(tester.binding.hasScheduledFrame, isFalse);
    await tester.tap(find.byKey(const ValueKey('dhamma-menu-launcher')));
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 100));
    final openingCenter = tester.getCenter(
      find.byKey(const ValueKey('dhamma-menu-wheel')),
    );
    await tester.pumpAndSettle();
    final expandedCenter = tester.getCenter(
      find.byKey(const ValueKey('dhamma-menu-wheel')),
    );
    expect(expandedCenter.dx, lessThan(openingCenter.dx));
    expect(expandedCenter.dy, lessThan(openingCenter.dy));
    final launcherCenter = tester.getCenter(
      find.byKey(const ValueKey('dhamma-menu-launcher')),
    );
    final closeCenter = tester.getCenter(
      find.byKey(const ValueKey('dhamma-menu-close')),
    );
    expect((launcherCenter - closeCenter).distance, lessThan(1));
    await tester.tap(find.byTooltip('ပိတ်ရန်'));
    await tester.pumpAndSettle();
    expect(find.text('screen:home'), findsOneWidget);
    await tester.tap(find.byKey(const ValueKey('dhamma-menu-launcher')));
    await tester.pumpAndSettle();
    await tester.tap(find.byKey(const ValueKey('dhamma-menu-wheel')));
    await tester.pumpAndSettle();
    expect(find.text('screen:wheel'), findsOneWidget);
    router.pop();
    await tester.pumpAndSettle();
    final shrineY = tester.getCenter(find.byIcon(Icons.grid_view_rounded)).dy;
    final homeY = tester.getCenter(find.byIcon(Icons.home_rounded)).dy;
    expect(homeY - shrineY, greaterThan(8));
  });
}

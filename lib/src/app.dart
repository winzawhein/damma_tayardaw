import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'core/theme/app_theme.dart';
import 'features/content/presentation/screens.dart';

final _rootKey = GlobalKey<NavigatorState>();
final appRouter = GoRouter(
  navigatorKey: _rootKey,
  initialLocation: '/home',
  routes: [
    StatefulShellRoute.indexedStack(
      builder: (_, _, shell) => AppShell(navigationShell: shell),
      branches: [
        StatefulShellBranch(
          routes: [
            GoRoute(path: '/home', builder: (_, _) => const HomeScreen()),
          ],
        ),
        StatefulShellBranch(
          routes: [
            GoRoute(path: '/library', builder: (_, _) => const LibraryScreen()),
          ],
        ),
        StatefulShellBranch(
          routes: [
            GoRoute(path: '/saved', builder: (_, _) => const SavedScreen()),
          ],
        ),
        StatefulShellBranch(
          routes: [
            GoRoute(path: '/profile', builder: (_, _) => const ProfileScreen()),
          ],
        ),
      ],
    ),
    GoRoute(
      parentNavigatorKey: _rootKey,
      path: '/content/:id',
      builder: (_, state) =>
          ContentDetailScreen(contentId: state.pathParameters['id']!),
    ),
    GoRoute(
      parentNavigatorKey: _rootKey,
      path: '/category/:id',
      builder: (_, state) =>
          CategoryDetailScreen(categoryId: state.pathParameters['id']!),
    ),
    GoRoute(
      parentNavigatorKey: _rootKey,
      path: '/settings/history',
      builder: (_, _) => const HistoryScreen(),
    ),
    GoRoute(
      parentNavigatorKey: _rootKey,
      path: '/settings/downloads',
      builder: (_, _) => const DownloadsScreen(),
    ),
    GoRoute(
      parentNavigatorKey: _rootKey,
      path: '/settings/notifications',
      builder: (_, _) => const NotificationSettingsScreen(),
    ),
    GoRoute(
      parentNavigatorKey: _rootKey,
      path: '/settings/reader',
      builder: (_, _) => const ReaderSettingsScreen(),
    ),
    GoRoute(
      parentNavigatorKey: _rootKey,
      path: '/settings/language',
      builder: (_, _) => const LanguageSettingsScreen(),
    ),
    GoRoute(
      parentNavigatorKey: _rootKey,
      path: '/settings/about',
      builder: (_, _) => const AboutScreen(),
    ),
  ],
);

class GawdamaTayardawApp extends StatelessWidget {
  const GawdamaTayardawApp({super.key});
  @override
  Widget build(BuildContext context) => MaterialApp.router(
    title: 'Gawdama Tayardaw',
    debugShowCheckedModeBanner: false,
    theme: AppTheme.dark,
    routerConfig: appRouter,
  );
}

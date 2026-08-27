import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../data/repositories.dart';
import '../domain/dhamma_content.dart';

final repositoryProvider = Provider<DhammaRepository>(
  (ref) => SampleDhammaRepository(),
);
final contentProvider = FutureProvider<List<DhammaContent>>(
  (ref) => ref.watch(repositoryProvider).getPublished(),
);
final contentByIdProvider = FutureProvider.family<DhammaContent?, String>(
  (ref, id) => ref.watch(repositoryProvider).getById(id),
);
final formatFilterProvider = StateProvider<ContentFormat?>((ref) => null);
final searchProvider = StateProvider<String>((ref) => '');

final filteredContentProvider = Provider<AsyncValue<List<DhammaContent>>>((
  ref,
) {
  final filter = ref.watch(formatFilterProvider);
  final query = ref.watch(searchProvider).trim().toLowerCase();
  return ref
      .watch(contentProvider)
      .whenData(
        (items) => items.where((item) {
          final formatMatches = filter == null || item.formats.contains(filter);
          final queryMatches =
              query.isEmpty ||
              item.title.toLowerCase().contains(query) ||
              item.category.toLowerCase().contains(query) ||
              item.teacher.toLowerCase().contains(query);
          return formatMatches && queryMatches;
        }).toList(),
      );
});

class FavoritesNotifier extends StateNotifier<Set<String>> {
  FavoritesNotifier() : super(<String>{}) {
    _load();
  }
  static const _key = 'favorite_content_ids';
  Future<void> _load() async {
    final prefs = await SharedPreferences.getInstance();
    state = prefs.getStringList(_key)?.toSet() ?? <String>{};
  }

  Future<void> toggle(String id) async {
    state = state.contains(id) ? ({...state}..remove(id)) : {...state, id};
    final prefs = await SharedPreferences.getInstance();
    await prefs.setStringList(_key, state.toList());
  }
}

final favoritesProvider = StateNotifierProvider<FavoritesNotifier, Set<String>>(
  (ref) => FavoritesNotifier(),
);

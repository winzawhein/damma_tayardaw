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
final categoriesProvider = FutureProvider<List<DhammaCategory>>(
  (ref) => ref.watch(repositoryProvider).getCategories(),
);
final contentByIdProvider = FutureProvider.family<DhammaContent?, String>(
  (ref, id) => ref.watch(repositoryProvider).getById(id),
);
final formatFilterProvider = StateProvider<ContentFormat?>((ref) => null);
final categoryFilterProvider = StateProvider<String?>((ref) => null);
final searchProvider = StateProvider<String>((ref) => '');

final filteredContentProvider = Provider<AsyncValue<List<DhammaContent>>>((
  ref,
) {
  final filter = ref.watch(formatFilterProvider);
  final category = ref.watch(categoryFilterProvider);
  final query = ref.watch(searchProvider).trim().toLowerCase();
  return ref
      .watch(contentProvider)
      .whenData(
        (items) => items.where((item) {
          final formatMatches = filter == null || item.formats.contains(filter);
          final categoryMatches = category == null || item.category == category;
          final queryMatches =
              query.isEmpty ||
              item.title.toLowerCase().contains(query) ||
              item.category.toLowerCase().contains(query) ||
              item.teacher.toLowerCase().contains(query);
          return formatMatches && categoryMatches && queryMatches;
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

  Future<void> refresh() => _load();

  Future<void> toggle(String id) async {
    state = state.contains(id) ? ({...state}..remove(id)) : {...state, id};
    final prefs = await SharedPreferences.getInstance();
    await prefs.setStringList(_key, state.toList());
  }
}

final favoritesProvider = StateNotifierProvider<FavoritesNotifier, Set<String>>(
  (ref) => FavoritesNotifier(),
);

class AppPreferences {
  const AppPreferences({
    this.notificationsEnabled = false,
    this.readerFontSize = 17,
    this.language = 'မြန်မာ',
  });
  final bool notificationsEnabled;
  final double readerFontSize;
  final String language;

  AppPreferences copyWith({
    bool? notificationsEnabled,
    double? readerFontSize,
    String? language,
  }) => AppPreferences(
    notificationsEnabled: notificationsEnabled ?? this.notificationsEnabled,
    readerFontSize: readerFontSize ?? this.readerFontSize,
    language: language ?? this.language,
  );
}

class PreferencesNotifier extends StateNotifier<AppPreferences> {
  PreferencesNotifier() : super(const AppPreferences()) {
    _load();
  }

  Future<void> _load() async {
    final prefs = await SharedPreferences.getInstance();
    state = AppPreferences(
      notificationsEnabled: prefs.getBool('notifications_enabled') ?? false,
      readerFontSize: prefs.getDouble('reader_font_size') ?? 17,
      language: prefs.getString('app_language') ?? 'မြန်မာ',
    );
  }

  Future<void> refresh() => _load();

  Future<void> setNotifications(bool value) async {
    state = state.copyWith(notificationsEnabled: value);
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool('notifications_enabled', value);
  }

  Future<void> setReaderFontSize(double value) async {
    state = state.copyWith(readerFontSize: value);
    final prefs = await SharedPreferences.getInstance();
    await prefs.setDouble('reader_font_size', value);
  }

  Future<void> setLanguage(String value) async {
    state = state.copyWith(language: value);
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('app_language', value);
  }
}

final preferencesProvider =
    StateNotifierProvider<PreferencesNotifier, AppPreferences>(
      (ref) => PreferencesNotifier(),
    );

class HistoryNotifier extends StateNotifier<List<String>> {
  HistoryNotifier() : super(const []) {
    _load();
  }
  Future<void> _load() async {
    final prefs = await SharedPreferences.getInstance();
    state = prefs.getStringList('viewed_content_ids') ?? const [];
  }

  Future<void> refresh() => _load();

  Future<void> record(String id) async {
    state = [
      id,
      ...state.where((existing) => existing != id),
    ].take(30).toList();
    final prefs = await SharedPreferences.getInstance();
    await prefs.setStringList('viewed_content_ids', state);
  }

  Future<void> clear() async {
    state = const [];
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('viewed_content_ids');
  }
}

final historyProvider = StateNotifierProvider<HistoryNotifier, List<String>>(
  (ref) => HistoryNotifier(),
);

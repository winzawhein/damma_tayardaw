import 'package:shared_preferences/shared_preferences.dart';
import '../practice/practice_data.dart';

class ShrineProgress {
  ShrineProgress(this.prefs);
  final SharedPreferences prefs;
  static const kinds = ['water', 'flowers', 'candle'];
  Map<String, bool> offerings(DateTime day) {
    final saved =
        prefs.getStringList('shrine.${PracticeData.dayKey(day)}') ?? [];
    return {for (final kind in kinds) kind: saved.contains(kind)};
  }

  Future<void> offered(String kind, DateTime day) async {
    if (!kinds.contains(kind)) return;
    final values = offerings(day)..[kind] = true;
    await prefs.setStringList(
      'shrine.${PracticeData.dayKey(day)}',
      values.entries.where((e) => e.value).map((e) => e.key).toList(),
    );
  }

  bool get muted => prefs.getBool('shrine.muted') ?? false;
  bool get labels => prefs.getBool('shrine.labels') ?? true;
  String get aura => prefs.getString('shrine.aura') ?? 'six';
  Future<void> save({
    required bool muted,
    required bool labels,
    required String aura,
  }) async {
    await prefs.setBool('shrine.muted', muted);
    await prefs.setBool('shrine.labels', labels);
    await prefs.setString('shrine.aura', aura);
  }
}

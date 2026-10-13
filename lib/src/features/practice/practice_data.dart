import 'dart:convert';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

class PracticeData {
  static final Map<String, dynamic> _cache = {};
  static Future<dynamic> load(String name) async {
    if (_cache.containsKey(name)) return _cache[name];
    final data = jsonDecode(
      await rootBundle.loadString('assets/data/$name.json'),
    );
    _cache[name] = data;
    return data;
  }

  static String dayKey(DateTime date) =>
      '${date.year}-${date.month.toString().padLeft(2, '0')}-${date.day.toString().padLeft(2, '0')}';

  static int dailyVerseIndex(DateTime date, int length) =>
      DateTime.utc(
        date.year,
        date.month,
        date.day,
      ).difference(DateTime.utc(2026)).inDays.abs() %
      length;
}

class PracticeProgress {
  PracticeProgress(this.prefs);
  final SharedPreferences prefs;
  int get count => prefs.getInt('practice.beads') ?? 0;
  Future<void> setCount(int value) async {
    await prefs.setInt('practice.beads', value < 0 ? 0 : value);
  }

  Set<String> completed(DateTime date) =>
      (prefs.getStringList('practice.day.${PracticeData.dayKey(date)}') ?? [])
          .toSet();

  Future<void> toggle(DateTime date, String activity) async {
    final values = completed(date);
    if (!values.remove(activity)) values.add(activity);
    await prefs.setStringList(
      'practice.day.${PracticeData.dayKey(date)}',
      values.toList(),
    );
  }
}

import 'package:flutter/material.dart';

abstract final class AppColors {
  static const background = Color(0xFF11110F),
      surface = Color(0xFF1B1B18),
      gold = Color(0xFFF0B94A);
  static const goldSoft = Color(0xFFC98A2C),
      text = Color(0xFFF7F1E5),
      muted = Color(0xFFAAA69B),
      line = Color(0x33F0B94A);
}

abstract final class AppTheme {
  static ThemeData get dark {
    final scheme = ColorScheme.fromSeed(
      seedColor: AppColors.gold,
      brightness: Brightness.dark,
      surface: AppColors.surface,
    );
    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.dark,
      colorScheme: scheme.copyWith(
        primary: AppColors.gold,
        secondary: AppColors.goldSoft,
        surface: AppColors.surface,
      ),
      scaffoldBackgroundColor: AppColors.background,
      fontFamilyFallback: const [
        'Noto Sans Myanmar',
        'Pyidaungsu',
        'sans-serif',
      ],
      textTheme: const TextTheme(
        headlineLarge: TextStyle(
          fontSize: 34,
          fontWeight: FontWeight.w700,
          color: AppColors.text,
        ),
        headlineSmall: TextStyle(
          fontSize: 23,
          fontWeight: FontWeight.w700,
          color: AppColors.text,
        ),
        titleLarge: TextStyle(
          fontSize: 19,
          fontWeight: FontWeight.w700,
          color: AppColors.text,
        ),
        bodyLarge: TextStyle(fontSize: 16, height: 1.7, color: AppColors.text),
        bodyMedium: TextStyle(
          fontSize: 14,
          height: 1.55,
          color: AppColors.muted,
        ),
      ),
      navigationBarTheme: const NavigationBarThemeData(
        backgroundColor: Colors.transparent,
        indicatorColor: Color(0x33F0B94A),
        labelTextStyle: WidgetStatePropertyAll(TextStyle(fontSize: 11)),
      ),
      sliderTheme: const SliderThemeData(
        activeTrackColor: AppColors.gold,
        thumbColor: AppColors.gold,
      ),
    );
  }
}

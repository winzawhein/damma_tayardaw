import 'dart:ui';
import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class GlassPanel extends StatelessWidget {
  const GlassPanel({
    required this.child,
    super.key,
    this.padding = const EdgeInsets.all(16),
    this.borderRadius = 22,
    this.onTap,
    this.blur = true,
  });
  final Widget child;
  final EdgeInsetsGeometry padding;
  final double borderRadius;
  final VoidCallback? onTap;

  /// Backdrop blurs are costly while lists are moving. Disable them for
  /// repeated scrolling rows and retain them for static/floating panels.
  final bool blur;
  @override
  Widget build(BuildContext context) {
    final radius = BorderRadius.circular(borderRadius);
    final panel = Material(
      color: Colors.white.withValues(alpha: .055),
      shape: RoundedRectangleBorder(
        borderRadius: radius,
        side: const BorderSide(color: AppColors.line),
      ),
      child: InkWell(
        onTap: onTap,
        borderRadius: radius,
        child: Padding(padding: padding, child: child),
      ),
    );
    return RepaintBoundary(
      child: ClipRRect(
        borderRadius: radius,
        child: blur
            ? BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 18, sigmaY: 18),
                child: panel,
              )
            : panel,
      ),
    );
  }
}

class GoldIcon extends StatelessWidget {
  const GoldIcon(this.icon, {super.key, this.size = 22});
  final IconData icon;
  final double size;
  @override
  Widget build(BuildContext context) => Container(
    width: 46,
    height: 46,
    decoration: BoxDecoration(
      borderRadius: BorderRadius.circular(15),
      gradient: const LinearGradient(
        colors: [Color(0x33F0B94A), Color(0x0DF0B94A)],
      ),
      border: Border.all(color: AppColors.line),
    ),
    child: Icon(icon, color: AppColors.gold, size: size),
  );
}

class ScreenBackground extends StatelessWidget {
  const ScreenBackground({required this.child, super.key});
  final Widget child;
  @override
  Widget build(BuildContext context) => DecoratedBox(
    decoration: const BoxDecoration(
      gradient: RadialGradient(
        center: Alignment.topRight,
        radius: 1.4,
        colors: [Color(0xFF2A2011), AppColors.background],
        stops: [0, .58],
      ),
    ),
    child: child,
  );
}

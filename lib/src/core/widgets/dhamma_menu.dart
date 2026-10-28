import 'package:flutter/material.dart';

Future<String?> showDhammaMenu(
  BuildContext context,
) => showGeneralDialog<String>(
  context: context,
  barrierDismissible: true,
  barrierLabel: 'ပိတ်ရန်',
  barrierColor: Colors.black.withValues(alpha: .58),
  transitionDuration: MediaQuery.disableAnimationsOf(context)
      ? Duration.zero
      : const Duration(milliseconds: 380),
  // Animate each satellite from the launcher, without a second route-wide fade.
  transitionBuilder: (_, animation, secondary, child) => child,
  pageBuilder: (context, animation, secondary) => SafeArea(
    top: false,
    child: Align(
      alignment: Alignment.bottomCenter,
      child: Material(
        color: Colors.transparent,
        child: SizedBox(
          height: 300,
          child: LayoutBuilder(
            builder: (context, constraints) {
              final spread = (constraints.maxWidth * .21).clamp(56.0, 88.0);
              return AnimatedBuilder(
                animation: animation,
                builder: (context, _) {
                  final travel = Curves.easeOutCubic.transform(animation.value);
                  final reveal = const Interval(
                    .12,
                    .7,
                  ).transform(animation.value);
                  return Stack(
                    clipBehavior: Clip.none,
                    children: [
                      for (final entry in [
                        (
                          side: -1.0,
                          icon: Icons.hub_outlined,
                          label: 'မိုးကုတ် ပဋိစ္စသမုပ္ပါဒ်\nစက်ဝိုင်း',
                          value: 'wheel',
                        ),
                        (
                          side: 1.0,
                          icon: Icons.temple_buddhist,
                          label: 'ဘုရားစဉ်',
                          value: 'shrine',
                        ),
                      ])
                        Positioned(
                          left:
                              constraints.maxWidth / 2 -
                              76 +
                              entry.side * spread * travel,
                          bottom: -40 + 148 * travel,
                          width: 152,
                          child: IgnorePointer(
                            ignoring: animation.value < .9,
                            child: Opacity(
                              opacity: reveal,
                              child: Transform.scale(
                                alignment: Alignment.bottomCenter,
                                scale: .35 + .65 * travel,
                                child: _Choice(
                                  icon: entry.icon,
                                  label: entry.label,
                                  value: entry.value,
                                ),
                              ),
                            ),
                          ),
                        ),
                      Positioned(
                        bottom: 30,
                        left: constraints.maxWidth / 2 - 28,
                        width: 56,
                        height: 56,
                        child: IconButton.filled(
                          key: const ValueKey('dhamma-menu-close'),
                          tooltip: 'ပိတ်ရန်',
                          onPressed: () => Navigator.pop(context),
                          style: IconButton.styleFrom(
                            backgroundColor: Color.lerp(
                              const Color(0xFFD4A44F),
                              const Color(0xFF25231F),
                              travel,
                            ),
                            foregroundColor: Colors.white,
                            side: const BorderSide(
                              color: Color(0xFFBD8936),
                              width: 2,
                            ),
                          ),
                          icon: Transform.rotate(
                            angle: (1 - travel) * -.8,
                            child: Stack(
                              alignment: Alignment.center,
                              children: [
                                Opacity(
                                  opacity: 1 - travel,
                                  child: const Icon(
                                    Icons.grid_view_rounded,
                                    size: 27,
                                  ),
                                ),
                                Opacity(
                                  opacity: travel,
                                  child: const Icon(Icons.close, size: 30),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ],
                  );
                },
              );
            },
          ),
        ),
      ),
    ),
  ),
);

class _Choice extends StatelessWidget {
  const _Choice({required this.icon, required this.label, required this.value});
  final IconData icon;
  final String label, value;
  @override
  Widget build(BuildContext context) => Semantics(
    button: true,
    label: label.replaceAll('\n', ' '),
    child: InkWell(
      key: ValueKey('dhamma-menu-$value'),
      borderRadius: BorderRadius.circular(24),
      onTap: () => Navigator.pop(context, value),
      child: Padding(
        padding: const EdgeInsets.all(8),
        child: Column(
          children: [
            Container(
              width: 64,
              height: 64,
              decoration: const BoxDecoration(
                shape: BoxShape.circle,
                color: Color(0xFFFFFCF5),
              ),
              child: Icon(icon, color: const Color(0xFF95651B), size: 29),
            ),
            const SizedBox(height: 10),
            SizedBox(
              height: 48,
              child: Text(
                label,
                textAlign: TextAlign.center,
                style: const TextStyle(
                  color: Colors.white,
                  fontSize: 13,
                  height: 1.6,
                ),
              ),
            ),
          ],
        ),
      ),
    ),
  );
}

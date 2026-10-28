import 'package:flutter/material.dart';

class ShrineHeader extends StatelessWidget {
  const ShrineHeader({
    super.key,
    required this.completed,
    required this.muted,
    required this.onSound,
    required this.onSettings,
    this.onMenu,
    this.onHelp,
  });
  final int completed;
  final bool muted;
  final VoidCallback? onSound, onSettings, onMenu, onHelp;
  @override
  Widget build(BuildContext context) => Container(
    decoration: const BoxDecoration(
      gradient: LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [Color(0xFF482A1D), Color(0xFF29160E)],
      ),
    ),
    padding: const EdgeInsets.fromLTRB(16, 8, 8, 8),
    child: Column(
      children: [
        Row(
          children: [
            const Expanded(
              child: Text(
                'ဘုရားစဉ်',
                style: TextStyle(
                  fontSize: 21,
                  color: Color(0xFFFFEDC3),
                  fontWeight: FontWeight.w600,
                ),
              ),
            ),
            for (final item in [
              (Icons.tune_rounded, 'အပြင်အဆင်', onSettings),
              (Icons.grid_view_rounded, 'အားလုံး', onMenu),
              (
                muted ? Icons.volume_off_outlined : Icons.volume_up_outlined,
                'အသံ',
                onSound,
              ),
              (Icons.help_outline, 'အသုံးပြုနည်း', onHelp),
            ])
              IconButton(
                tooltip: item.$2,
                onPressed: item.$3,
                color: const Color(0xFFFFEDC3),
                disabledColor: const Color(0xFF9B8869),
                constraints: const BoxConstraints(minWidth: 40, minHeight: 44),
                padding: const EdgeInsets.all(8),
                icon: Icon(item.$1, size: 22),
              ),
          ],
        ),
        Align(
          alignment: Alignment.centerLeft,
          child: Text(
            'ရေချမ်း • ပန်း • ဆီမီး  ·  $completed/3 ကပ်လှူပြီး',
            style: const TextStyle(
              fontSize: 12,
              color: Color(0xFFDDBE79),
              height: 1.6,
            ),
          ),
        ),
        const SizedBox(height: 8),
        const SizedBox(
          height: 18,
          width: double.infinity,
          child: CustomPaint(painter: KanokTrim()),
        ),
      ],
    ),
  );
}

/// Mirrored flame-leaf scrolls, drawn once without image decoding or animation.
class KanokTrim extends CustomPainter {
  const KanokTrim();
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = const Color(0xFFC9A351)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1;
    for (double x = 0; x < size.width; x += 34) {
      canvas.drawPath(
        Path()
          ..moveTo(x, 16)
          ..cubicTo(x + 17, 18, x + 6, 3, x + 19, 1)
          ..cubicTo(x + 15, 9, x + 29, 9, x + 30, 16)
          ..cubicTo(x + 17, 18, x + 18, 9, x + 22, 11),
        paint,
      );
    }
    canvas.drawLine(
      Offset(0, size.height),
      Offset(size.width, size.height),
      paint,
    );
  }

  @override
  bool shouldRepaint(KanokTrim oldDelegate) => false;
}

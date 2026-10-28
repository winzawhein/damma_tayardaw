import 'dart:math' as math;
import 'package:flutter/material.dart';

/// A single pull advances a single bead; the painter only animates during a pull.
class PrayerBeads extends StatefulWidget {
  const PrayerBeads({super.key, required this.count, required this.onAdvance});
  final int count;
  final VoidCallback? onAdvance;

  @override
  State<PrayerBeads> createState() => _PrayerBeadsState();
}

class _PrayerBeadsState extends State<PrayerBeads>
    with SingleTickerProviderStateMixin {
  late final AnimationController _motion = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 200),
  );
  double _pull = 0;
  bool _advanced = false;

  void _advance() {
    if (widget.onAdvance == null) return;
    widget.onAdvance!();
    if (!MediaQuery.disableAnimationsOf(context)) {
      _motion.forward(from: 0);
    }
  }

  @override
  void dispose() {
    _motion.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => Semantics(
    label: 'ပုတီးစိပ်',
    value: '${widget.count}',
    button: true,
    onTap: widget.onAdvance == null ? null : _advance,
    child: GestureDetector(
      key: const ValueKey('prayer-beads'),
      excludeFromSemantics: true,
      behavior: HitTestBehavior.opaque,
      onTap: widget.onAdvance == null ? null : _advance,
      onVerticalDragStart: widget.onAdvance == null
          ? null
          : (_) {
              _pull = 0;
              _advanced = false;
            },
      onVerticalDragUpdate: widget.onAdvance == null
          ? null
          : (details) {
              if (_advanced) return;
              _pull += details.delta.dy;
              if (_pull >= 36) {
                _advanced = true;
                _advance();
              }
            },
      child: RepaintBoundary(
        child: AnimatedBuilder(
          animation: _motion,
          builder: (context, _) => CustomPaint(
            size: const Size(280, 250),
            painter: _BeadsPainter(
              phase: _motion.isAnimating
                  ? 1 - Curves.easeOut.transform(_motion.value)
                  : 0,
              count: widget.count,
            ),
          ),
        ),
      ),
    ),
  );
}

class _BeadsPainter extends CustomPainter {
  const _BeadsPainter({required this.phase, required this.count});
  final double phase;
  final int count;

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final loop = Rect.fromCenter(center: center, width: 170, height: 200);
    canvas.drawOval(
      loop,
      Paint()
        ..color = const Color(0xFFB99B63)
        ..style = PaintingStyle.stroke
        ..strokeWidth = 3,
    );
    for (var i = 0; i < 18; i++) {
      final angle = (i - phase) * math.pi * 2 / 18;
      final position =
          center + Offset(math.sin(angle) * 85, math.cos(angle) * 100);
      final active = i == 0;
      final radius = active ? 18.0 : 13.0;
      final rect = Rect.fromCircle(center: position, radius: radius);
      canvas.drawCircle(
        position + const Offset(0, 3),
        radius,
        Paint()..color = const Color(0x40000000),
      );
      canvas.drawCircle(
        position,
        radius,
        Paint()
          ..shader = RadialGradient(
            center: const Alignment(-.45, -.5),
            colors: active
                ? const [
                    Color(0xFFFFE7A1),
                    Color(0xFFC58C31),
                    Color(0xFF79511D),
                  ]
                : const [
                    Color(0xFFBC8656),
                    Color(0xFF75472C),
                    Color(0xFF3D281E),
                  ],
          ).createShader(rect),
      );
    }
    final text = TextPainter(
      text: TextSpan(
        text: '${count % 108} / 108',
        style: const TextStyle(
          color: Color(0xFFEACD8B),
          fontSize: 21,
          fontWeight: FontWeight.w600,
        ),
      ),
      textDirection: TextDirection.ltr,
    )..layout();
    text.paint(canvas, center - Offset(text.width / 2, text.height / 2));
  }

  @override
  bool shouldRepaint(_BeadsPainter oldDelegate) =>
      phase != oldDelegate.phase || count != oldDelegate.count;
}

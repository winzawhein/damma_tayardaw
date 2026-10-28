import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'wheel_data.dart';

const _brass = Color(0xFFE9CA83);
const _enamel = [
  Color(0xFF655234),
  Color(0xFF23685D),
  Color(0xFF81533D),
  Color(0xFF514B6D),
];

/// A small native scene: projected solid geometry with no textures or idle loop.
class PhysicalDhammaWheel extends StatefulWidget {
  const PhysicalDhammaWheel({
    super.key,
    required this.selected,
    required this.cessation,
    required this.flat,
    required this.reset,
    required this.onSelect,
  });
  final int selected;
  final bool cessation;
  final bool flat;
  final int reset;
  final ValueChanged<int> onSelect;
  @override
  State<PhysicalDhammaWheel> createState() => _PhysicalDhammaWheelState();
}

class _PhysicalDhammaWheelState extends State<PhysicalDhammaWheel>
    with SingleTickerProviderStateMixin {
  late final AnimationController turn = AnimationController.unbounded(
    vsync: this,
  );
  double tilt = .70;
  @override
  void didUpdateWidget(PhysicalDhammaWheel old) {
    super.didUpdateWidget(old);
    if (old.reset != widget.reset) {
      turn.stop();
      turn.value = 0;
      tilt = .70;
    }
  }

  @override
  void dispose() {
    turn.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(
    builder: (context, constraints) {
      final size = math.min(constraints.maxWidth, 440.0);
      final reduced = MediaQuery.disableAnimationsOf(context);
      return Center(
        child: SizedBox(
          width: size,
          height: size,
          child: RepaintBoundary(
            child: GestureDetector(
              key: const ValueKey('dhamma-wheel'),
              behavior: HitTestBehavior.opaque,
              onPanStart: (_) => turn.stop(),
              onPanUpdate: (details) {
                turn.value += details.delta.dx * .009;
                setState(
                  () => tilt = (tilt + details.delta.dy * .004).clamp(.25, .95),
                );
              },
              onPanEnd: (details) {
                if (reduced) return;
                final travel = (details.velocity.pixelsPerSecond.dx / 1800)
                    .clamp(-.7, .7);
                if (travel.abs() > .02) {
                  turn.animateTo(
                    turn.value + travel,
                    duration: const Duration(milliseconds: 550),
                    curve: Curves.easeOutCubic,
                  );
                }
              },
              child: AnimatedBuilder(
                animation: turn,
                builder: (context, _) {
                  final projection = _Projection(size, widget.flat ? 0 : tilt);
                  return Stack(
                    children: [
                      Positioned.fill(
                        child: CustomPaint(
                          painter: _SculptedWheel(
                            projection,
                            turn.value,
                            widget.selected,
                            widget.cessation,
                          ),
                        ),
                      ),
                      for (int i = 0; i < 12; i++)
                        Builder(
                          builder: (context) {
                            final angle =
                                i * math.pi / 6 - math.pi / 2 + turn.value;
                            final p = projection.polar(angle, .347, .047);
                            return Positioned(
                              left: p.dx - 22,
                              top: p.dy - 22,
                              width: 44,
                              height: 44,
                              child: Semantics(
                                label: '${i + 1}. ${dhammaLinks[i].name}',
                                selected: widget.selected == i,
                                button: true,
                                child: Tooltip(
                                  message: dhammaLinks[i].name,
                                  child: InkWell(
                                    key: ValueKey('wheel-node-$i'),
                                    customBorder: const CircleBorder(),
                                    onTap: () {
                                      turn.stop();
                                      widget.onSelect(i);
                                    },
                                    child: Center(
                                      child: Text(
                                        '${i + 1}',
                                        style: TextStyle(
                                          fontFamily: 'Roboto',
                                          color: widget.selected == i
                                              ? const Color(0xFF302310)
                                              : const Color(0xFFFFF1CE),
                                          fontSize: widget.selected == i
                                              ? 18
                                              : 14,
                                          fontWeight: FontWeight.w700,
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            );
                          },
                        ),
                      Positioned(
                        left: size * .26,
                        right: size * .26,
                        bottom: size * .035,
                        child: IgnorePointer(
                          child: Column(
                            children: [
                              Text(
                                widget.cessation
                                    ? 'နိရောဓ'
                                    : 'အကြောင်း • အကျိုး',
                                textAlign: TextAlign.center,
                                style: const TextStyle(
                                  color: _brass,
                                  fontSize: 13,
                                  height: 1.8,
                                ),
                              ),
                              const Text(
                                'အင်္ဂါ ၁၂ ပါး',
                                style: TextStyle(
                                  color: Color(0xFFA8BBB3),
                                  fontSize: 11,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ],
                  );
                },
              ),
            ),
          ),
        ),
      );
    },
  );
}

class _Projection {
  const _Projection(this.size, this.tilt);
  final double size, tilt;
  Offset point(double x, double y, double z) {
    final depth = y * math.sin(tilt) + z * math.cos(tilt);
    final scale = 1 / (1 - depth / 2.6);
    return Offset(
      size * (.5 + x * scale),
      size * (.43 + (y * math.cos(tilt) - z * math.sin(tilt)) * scale),
    );
  }

  Offset polar(double angle, double radius, double z) =>
      point(math.cos(angle) * radius, math.sin(angle) * radius, z);
}

class _SculptedWheel extends CustomPainter {
  const _SculptedWheel(this.p, this.rotation, this.selected, this.cessation);
  final _Projection p;
  final double rotation;
  final int selected;
  final bool cessation;

  Path annulus(
    double start,
    double sweep,
    double outer,
    double inner,
    double z,
  ) {
    final steps = sweep > math.pi ? 120 : 16;
    final path = Path();
    for (var i = 0; i <= steps; i++) {
      final a = p.polar(start + sweep * i / steps, outer, z);
      if (i == 0) {
        path.moveTo(a.dx, a.dy);
      } else {
        path.lineTo(a.dx, a.dy);
      }
    }
    for (var i = steps; i >= 0; i--) {
      final a = p.polar(start + sweep * i / steps, inner, z);
      path.lineTo(a.dx, a.dy);
    }
    return path..close();
  }

  void metal(Canvas canvas, Path path, Rect bounds, {bool dark = false}) {
    canvas.drawPath(
      path,
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          stops: const [0, .22, .42, .58, .8, 1],
          colors: dark
              ? const [
                  Color(0xFF48301A),
                  Color(0xFFB99350),
                  Color(0xFF65441F),
                  Color(0xFFD4AF65),
                  Color(0xFF76552C),
                  Color(0xFF352817),
                ]
              : const [
                  Color(0xFF9F7738),
                  Color(0xFFFFE9B0),
                  Color(0xFFC19A50),
                  Color(0xFFF4DA97),
                  Color(0xFF947039),
                  Color(0xFFE2BE70),
                ],
        ).createShader(bounds),
    );
  }

  void wall(
    Canvas canvas,
    double radius,
    double start,
    double sweep,
    double bottom,
    double top,
  ) {
    for (var j = 0; j < 64; j++) {
      final a = start + sweep * j / 64;
      final b = start + sweep * (j + 1) / 64;
      final points = [
        p.polar(a, radius, top),
        p.polar(b, radius, top),
        p.polar(b, radius, bottom),
        p.polar(a, radius, bottom),
      ];
      final path = Path()..addPolygon(points, true);
      final light = (.4 + .35 * math.cos(a + 2.2)).clamp(0.0, 1.0);
      canvas.drawPath(
        path,
        Paint()
          ..color = Color.lerp(
            const Color(0xFF44301C),
            const Color(0xFFF5D891),
            light,
          )!,
      );
    }
  }

  @override
  void paint(Canvas canvas, Size size) {
    final w = p.size;
    final bounds = Rect.fromLTWH(0, 0, w, w * .85);
    // Soft ambient pool and a low polished stone display base.
    canvas.drawOval(
      Rect.fromCenter(
        center: Offset(w * .5, w * .67),
        width: w * .89,
        height: w * .26,
      ),
      Paint()
        ..shader = const RadialGradient(
          colors: [Color(0x99000000), Color(0x00000000)],
        ).createShader(Rect.fromLTWH(w * .04, w * .54, w * .92, w * .27)),
    );
    final base = RRect.fromRectAndRadius(
      Rect.fromLTWH(w * .15, w * .75, w * .7, w * .09),
      Radius.circular(w * .045),
    );
    canvas.drawRRect(
      base,
      Paint()
        ..shader = const LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Color(0xFF3C6258), Color(0xFF142E2A), Color(0xFF0A1616)],
        ).createShader(base.outerRect),
    );
    canvas.drawOval(
      Rect.fromLTWH(w * .15, w * .72, w * .7, w * .10),
      Paint()
        ..shader = const LinearGradient(
          colors: [Color(0xFF153730), Color(0xFF55776A), Color(0xFF18342D)],
        ).createShader(base.outerRect),
    );
    canvas.drawOval(
      Rect.fromLTWH(w * .15, w * .72, w * .7, w * .10),
      Paint()
        ..color = const Color(0xFF8A805A)
        ..style = PaintingStyle.stroke
        ..strokeWidth = .8,
    );
    // Rear edge, then inset enamel, then forward sidewall: consistent occlusion.
    wall(canvas, .423, math.pi, math.pi, -.02, .032);
    metal(canvas, annulus(0, math.pi * 2, .423, .253, .032), bounds);
    for (var i = 0; i < 12; i++) {
      final angle = i * math.pi / 6 - math.pi / 2 + rotation;
      final inset = annulus(
        angle - math.pi / 12 + .025,
        math.pi / 6 - .05,
        .393,
        .278,
        .035,
      );
      final enamel = _enamel[dhammaLinks[i].group];
      canvas.drawPath(
        inset,
        Paint()
          ..shader = LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [
              Color.lerp(enamel, Colors.white, .28)!,
              enamel,
              Color.lerp(enamel, Colors.black, .45)!,
            ],
          ).createShader(bounds),
      );
      canvas.drawPath(
        inset,
        Paint()
          ..color = i == selected
              ? const Color(0xFFFFEDB4)
              : const Color(0xFFA38C57)
          ..style = PaintingStyle.stroke
          ..strokeWidth = i == selected ? 2 : .6,
      );
      final spoke = Path()
        ..addPolygon([
          p.polar(angle - .055, .108, .03),
          p.polar(angle - .025, .268, .03),
          p.polar(angle + .025, .268, .03),
          p.polar(angle + .055, .108, .03),
        ], true);
      metal(canvas, spoke.shift(Offset(0, w * .012)), bounds, dark: true);
      metal(canvas, spoke, bounds);
      canvas.drawLine(
        p.polar(angle, .12, .034),
        p.polar(angle, .26, .034),
        Paint()
          ..color = const Color(0xFFFFEAB7)
          ..strokeWidth = .7,
      );
      // Engraved radial marks on the rim.
      for (var k = -2; k <= 2; k++) {
        final a = angle + k * .055;
        canvas.drawLine(
          p.polar(a, .402, .034),
          p.polar(a, .416, .034),
          Paint()
            ..color = const Color(0xFF705326)
            ..strokeWidth = .7,
        );
      }
    }
    wall(canvas, .253, math.pi, math.pi, -.02, .032);
    wall(canvas, .423, 0, math.pi, -.02, .032);
    // Turned-metal hub and lotus engraving.
    metal(canvas, annulus(0, math.pi * 2, .14, .001, .045), bounds, dark: true);
    metal(canvas, annulus(0, math.pi * 2, .125, .001, .055), bounds);
    canvas.drawPath(
      annulus(0, math.pi * 2, .105, .10, .056),
      Paint()..color = const Color(0xFF8A622F),
    );
    final hub = p.point(0, 0, .058);
    for (var i = 0; i < 8; i++) {
      final a = i * math.pi / 4 + rotation;
      final tip = p.polar(a, .08, .058);
      final left = p.polar(a - .37, .04, .058);
      final right = p.polar(a + .37, .04, .058);
      canvas.drawPath(
        Path()
          ..moveTo(hub.dx, hub.dy)
          ..quadraticBezierTo(left.dx, left.dy, tip.dx, tip.dy)
          ..quadraticBezierTo(right.dx, right.dy, hub.dx, hub.dy),
        Paint()
          ..color = cessation
              ? const Color(0xFF2F6856)
              : const Color(0xFF88602D)
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.2,
      );
    }
    // Small domed studs, positioned in exactly the same projection as hit areas.
    final order = List.generate(12, (i) => i)
      ..sort(
        (a, b) => math
            .sin(a * math.pi / 6 - math.pi / 2 + rotation)
            .compareTo(math.sin(b * math.pi / 6 - math.pi / 2 + rotation)),
      );
    for (final i in order) {
      final at = p.polar(i * math.pi / 6 - math.pi / 2 + rotation, .347, .047);
      final radius = w * (i == selected ? .052 : .044);
      final rect = Rect.fromCircle(center: at, radius: radius);
      canvas.drawCircle(
        at + const Offset(0, 2.5),
        radius,
        Paint()..color = const Color(0x77000000),
      );
      canvas.drawCircle(
        at,
        radius,
        Paint()
          ..shader = RadialGradient(
            center: const Alignment(-.45, -.65),
            radius: 1.1,
            colors: i == selected
                ? const [
                    Color(0xFFFFF0BF),
                    Color(0xFFE7BD66),
                    Color(0xFF8C652D),
                  ]
                : const [
                    Color(0xFF547D6E),
                    Color(0xFF183D34),
                    Color(0xFF071D1A),
                  ],
          ).createShader(rect),
      );
      canvas.drawCircle(
        at,
        radius,
        Paint()
          ..color = _brass
          ..style = PaintingStyle.stroke
          ..strokeWidth = i == selected ? 1.5 : .8,
      );
    }
  }

  @override
  bool shouldRepaint(_SculptedWheel old) =>
      rotation != old.rotation ||
      p.tilt != old.p.tilt ||
      p.size != old.p.size ||
      selected != old.selected ||
      cessation != old.cessation;
}

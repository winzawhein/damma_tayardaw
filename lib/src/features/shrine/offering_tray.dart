import 'package:flutter/material.dart';

/// Illustrated offering controls remain visible after completion; only the badge changes.
class OfferingTray extends StatefulWidget {
  const OfferingTray({
    required this.enabled,
    required this.offerings,
    required this.onAction,
    super.key,
  });
  final bool enabled;
  final Map<String, bool> offerings;
  final ValueChanged<String> onAction;
  @override
  State<OfferingTray> createState() => _OfferingTrayState();
}

class _OfferingTrayState extends State<OfferingTray> {
  final _scroll = ScrollController();
  @override
  void dispose() {
    _scroll.dispose();
    super.dispose();
  }

  void _move(double direction) {
    if (!_scroll.hasClients) return;
    _scroll.animateTo(
      (_scroll.offset + direction * 140).clamp(
        0,
        _scroll.position.maxScrollExtent,
      ),
      duration: const Duration(milliseconds: 280),
      curve: Curves.easeOutCubic,
    );
  }

  @override
  Widget build(BuildContext context) {
    final itemWidth = ((MediaQuery.sizeOf(context).width - 80) / 6).clamp(
      50.0,
      76.0,
    );
    final circleSize = (itemWidth - 8).clamp(42.0, 60.0);
    return Container(
      margin: const EdgeInsets.fromLTRB(12, 8, 12, 8),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(26),
        gradient: const LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Color(0xFF49351C), Color(0xFF22170D)],
        ),
        border: Border.all(color: const Color(0xFFB59653)),
      ),
      child: Row(
        children: [
          SizedBox(
            width: 28,
            child: IconButton(
              padding: EdgeInsets.zero,
              tooltip: 'ရှေ့သို့',
              onPressed: () => _move(-1),
              icon: const Icon(
                Icons.chevron_left,
                size: 20,
                color: Color(0xFFE9D39B),
              ),
            ),
          ),
          Expanded(
            child: SizedBox(
              height: 102,
              child: ListView(
                controller: _scroll,
                scrollDirection: Axis.horizontal,
                children: [
                  for (final entry in const [
                    ('study', 'စာကြည့်ရန်'),
                    ('water', 'ရေချမ်း'),
                    ('flowers', 'ပန်း'),
                    ('candle', 'ဆီမီး'),
                    ('music', 'နောက်ခံသံ'),
                    ('shrine', 'ကျောင်းဆောင်'),
                  ])
                    SizedBox(
                      width: itemWidth,
                      child: Semantics(
                        button: true,
                        label: entry.$2,
                        child: InkWell(
                          borderRadius: BorderRadius.circular(25),
                          onTap: widget.enabled
                              ? () => widget.onAction(entry.$1)
                              : null,
                          child: Opacity(
                            opacity: widget.enabled ? 1 : .55,
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Container(
                                  width: circleSize,
                                  height: circleSize,
                                  padding: const EdgeInsets.all(3),
                                  decoration: BoxDecoration(
                                    shape: BoxShape.circle,
                                    border: Border.all(
                                      color: const Color(0xFFD0AC5F),
                                      width: 1.2,
                                    ),
                                    gradient: const RadialGradient(
                                      colors: [
                                        Color(0xFF604521),
                                        Color(0xFF251B10),
                                      ],
                                    ),
                                  ),
                                  child: Stack(
                                    children: [
                                      Center(
                                        child: entry.$1 == 'music'
                                            ? const Icon(
                                                Icons.music_note_rounded,
                                                color: Color(0xFFE6C365),
                                                size: 30,
                                              )
                                            : Image.asset(
                                                'assets/shrine3d/ui/icon_${entry.$1}.webp',
                                                width: circleSize - 10,
                                                height: circleSize - 10,
                                                cacheWidth: 120,
                                              ),
                                      ),
                                      if (widget.offerings[entry.$1] == true)
                                        const Positioned(
                                          right: 0,
                                          bottom: 0,
                                          child: DecoratedBox(
                                            decoration: BoxDecoration(
                                              color: Color(0xFF21382A),
                                              shape: BoxShape.circle,
                                            ),
                                            child: Icon(
                                              Icons.check_circle,
                                              size: 17,
                                              color: Color(0xFFFFE6A4),
                                            ),
                                          ),
                                        ),
                                    ],
                                  ),
                                ),
                                const SizedBox(height: 6),
                                FittedBox(
                                  fit: BoxFit.scaleDown,
                                  child: Text(
                                    entry.$2,
                                    maxLines: 1,
                                    style: const TextStyle(
                                      color: Color(0xFFFFEDD0),
                                      fontSize: 12,
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),
                ],
              ),
            ),
          ),
          SizedBox(
            width: 28,
            child: IconButton(
              padding: EdgeInsets.zero,
              tooltip: 'နောက်သို့',
              onPressed: () => _move(1),
              icon: const Icon(
                Icons.chevron_right,
                size: 20,
                color: Color(0xFFE9D39B),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

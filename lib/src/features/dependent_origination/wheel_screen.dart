import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'wheel_data.dart';
import 'physical_wheel.dart';

const _gold = Color(0xFFE8CD8A);
const _jade = Color(0xFF0A2928);
const _groupColors = [
  Color(0xFFE8CD8A),
  Color(0xFF85C8BC),
  Color(0xFFE6A47A),
  Color(0xFFB3B3E4),
];

class DhammaWheelScreen extends StatefulWidget {
  const DhammaWheelScreen({super.key});
  @override
  State<DhammaWheelScreen> createState() => _DhammaWheelScreenState();
}

class _DhammaWheelScreenState extends State<DhammaWheelScreen> {
  int selected = 0;
  bool cessation = false;
  bool flat = false;
  int reset = 0;

  void select(int index) => setState(() => selected = index.clamp(0, 11));

  Future<void> source(String url) async {
    bool ok = false;
    try {
      ok = await launchUrl(
        Uri.parse(url),
        mode: LaunchMode.externalApplication,
      );
    } catch (_) {
      // Keep the offline study screen available if no external browser exists.
    }
    if (!ok && mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('ရင်းမြစ်ကို ဖွင့်မရပါ။ အင်တာနက်ကို စစ်ဆေးပါ။'),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final link = dhammaLinks[selected];
    return Scaffold(
      backgroundColor: const Color(0xFF071B1C),
      appBar: AppBar(
        backgroundColor: const Color(0xFF071B1C),
        foregroundColor: const Color(0xFFF7EEDC),
        title: const Text('ပဋိစ္စသမုပ္ပါဒ်', style: TextStyle(fontSize: 20)),
        actions: [
          IconButton(
            tooltip: 'မြင်ကွင်း ပြန်စရန်',
            icon: const Icon(Icons.restart_alt),
            onPressed: () => setState(() {
              reset++;
            }),
          ),
        ],
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(20, 8, 20, 28),
          child: Center(
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 640),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  const Text(
                    'မိုးကုတ် စက်ဝိုင်းတရားတော်',
                    style: TextStyle(
                      color: _gold,
                      fontSize: 22,
                      fontWeight: FontWeight.w600,
                      height: 1.7,
                    ),
                  ),
                  const Text(
                    'ဓမ္မသဘော • အကြောင်းနှင့် အကျိုးကို လေ့လာရန်',
                    style: TextStyle(color: Color(0xFFA9C4BC), height: 1.7),
                  ),
                  const SizedBox(height: 16),
                  Wrap(
                    spacing: 8,
                    runSpacing: 6,
                    children: [
                      ChoiceChip(
                        label: const Text('ဖြစ်ပေါ်ပုံ'),
                        selected: !cessation,
                        onSelected: (_) => setState(() => cessation = false),
                      ),
                      ChoiceChip(
                        label: const Text('ချုပ်ငြိမ်းပုံ'),
                        selected: cessation,
                        onSelected: (_) => setState(() => cessation = true),
                      ),
                      FilterChip(
                        label: const Text('ပြားချပ်မြင်ကွင်း'),
                        selected: flat,
                        onSelected: (value) => setState(() => flat = value),
                      ),
                    ],
                  ),
                  PhysicalDhammaWheel(
                    selected: selected,
                    cessation: cessation,
                    flat: flat,
                    reset: reset,
                    onSelect: select,
                  ),
                  const Text(
                    'စက်ဝိုင်းကို ဆွဲလှည့်ပါ • နံပါတ်ကို နှိပ်၍ လေ့လာပါ',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Color(0xFFA9C4BC),
                      fontSize: 12,
                      height: 1.8,
                    ),
                  ),
                  const SizedBox(height: 16),
                  Wrap(
                    spacing: 6,
                    runSpacing: 6,
                    children: List.generate(
                      4,
                      (i) => ChoiceChip(
                        label: Text(wheelGroups[i]),
                        selected: link.group == i,
                        onSelected: (_) => select(
                          dhammaLinks.indexWhere((item) => item.group == i),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),
                  Container(
                    key: const ValueKey('wheel-detail'),
                    padding: const EdgeInsets.all(20),
                    decoration: BoxDecoration(
                      color: _jade,
                      borderRadius: BorderRadius.circular(24),
                      border: Border.all(
                        color: _groupColors[link.group].withValues(alpha: .5),
                      ),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          '${selected + 1} / 12  •  ${wheelRounds[link.round]}',
                          style: TextStyle(
                            color: _groupColors[link.group],
                            fontSize: 13,
                          ),
                        ),
                        const SizedBox(height: 8),
                        Text(
                          link.name,
                          style: const TextStyle(
                            color: Color(0xFFF9EDD6),
                            fontSize: 28,
                            fontWeight: FontWeight.w600,
                            height: 1.8,
                          ),
                        ),
                        Text(
                          link.pali,
                          style: const TextStyle(
                            color: _gold,
                            fontSize: 15,
                            fontFamily: 'Roboto',
                            fontFamilyFallback: ['sans-serif'],
                          ),
                        ),
                        const SizedBox(height: 14),
                        Text(
                          link.meaning,
                          style: const TextStyle(
                            color: Color(0xFFE2EAE4),
                            fontSize: 16,
                            height: 1.9,
                          ),
                        ),
                        const Divider(height: 30, color: Color(0xFF42645A)),
                        Text(
                          cessation
                              ? (selected < 11
                                    ? '${link.name} ချုပ်ငြိမ်းခြင်းကြောင့် ${dhammaLinks[selected + 1].name} ချုပ်ငြိမ်းသည်။'
                                    : 'ဤသို့ ဒုက္ခအစုအဝေး၏ ချုပ်ငြိမ်းခြင်း ဖြစ်သည်။')
                              : (selected < 11
                                    ? '${link.name} ကို အကြောင်းပြု၍ ${dhammaLinks[selected + 1].name} ဖြစ်ပေါ်သည်။'
                                    : 'ဤသို့ ဒုက္ခအစုအဝေး ဖြစ်ပေါ်လာသည်။'),
                          style: const TextStyle(color: _gold, height: 1.9),
                        ),
                        if (selected == 6 || selected == 7) ...[
                          const SizedBox(height: 14),
                          const Text(
                            'ဝေဒနာ → တဏှာ ဆက်စပ်မှု',
                            style: TextStyle(
                              color: Color(0xFF98D4C2),
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          const Text(
                            'ခံစားမှုကို အမြဲတည်သော “ငါ” ဟု မယူဘဲ ဖြစ်ပျက်သဘောကို သတိပညာဖြင့် ရှုမြင်ရန် လေ့လာပါ။ တဏှာမဆက်စေရန် ရှုမှတ်ခြင်းသည် မိုးကုတ်နည်း၏ အရေးပါသော အချက်ဖြစ်သည်။',
                            style: TextStyle(
                              color: Color(0xFFE2EAE4),
                              height: 1.9,
                            ),
                          ),
                        ],
                        const SizedBox(height: 16),
                        Row(
                          children: [
                            IconButton(
                              key: const ValueKey('wheel-previous'),
                              tooltip: 'ယခင်အင်္ဂါ',
                              onPressed: selected == 0
                                  ? null
                                  : () => select(selected - 1),
                              icon: const Icon(Icons.arrow_back),
                            ),
                            Expanded(
                              child: LinearProgressIndicator(
                                value: (selected + 1) / 12,
                                color: _gold,
                                backgroundColor: const Color(0xFF36544D),
                              ),
                            ),
                            IconButton(
                              key: const ValueKey('wheel-next'),
                              tooltip: 'နောက်အင်္ဂါ',
                              onPressed: selected == 11
                                  ? null
                                  : () => select(selected + 1),
                              icon: const Icon(Icons.arrow_forward),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 18),
                  const Text(
                    'အင်္ဂါအားလုံး',
                    style: TextStyle(color: _gold, fontSize: 17),
                  ),
                  const SizedBox(height: 8),
                  Wrap(
                    spacing: 6,
                    runSpacing: 6,
                    children: List.generate(
                      12,
                      (i) => ChoiceChip(
                        label: Text('${i + 1}. ${dhammaLinks[i].name}'),
                        selected: selected == i,
                        onSelected: (_) => select(i),
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),
                  ExpansionTile(
                    title: const Text('စက်ဝိုင်း၏ အဓိကဆက်စပ်မှုများ'),
                    childrenPadding: const EdgeInsets.all(12),
                    children: const [
                      Text(
                        'အရင်းအမြစ် ၂ ပါး — အဝိဇ္ဇာ၊ တဏှာ။\n\nအဆက် ၃ ဆက် — သင်္ခါရ → ဝိညာဏ်၊ ဝေဒနာ → တဏှာ၊ ကမ္မဘဝ → ဇာတိ။\n\nကိလေသဝဋ် — အဝိဇ္ဇာ၊ တဏှာ၊ ဥပါဒါန်။\nကမ္မဝဋ် — သင်္ခါရ၊ ကမ္မဘဝ။\nဝိပါကဝဋ် — ဝိညာဏ်၊ နာမ်ရုပ်၊ သဠာယတန၊ ဖဿ၊ ဝေဒနာ၊ ဇာတိ၊ ဇရာမရဏ။',
                        style: TextStyle(height: 1.9),
                      ),
                    ],
                  ),
                  ExpansionTile(
                    title: const Text('ရှင်းလင်းချက်နှင့် ရင်းမြစ်များ'),
                    children: [
                      const Padding(
                        padding: EdgeInsets.all(12),
                        child: Text(
                          'ဤကဏ္ဍသည် မိုးကုတ်စက်ဝိုင်းကို အခြေခံထားသော အကျဉ်းချုပ် လေ့လာရေးပုံဖော်ချက်ဖြစ်သည်။ ဆရာတော်၏ တိုက်ရိုက်ဟောကြားချက် သို့မဟုတ် အသံတရား မဟုတ်ပါ။ ချုပ်ငြိမ်းပုံသည် အကြောင်းချုပ်၍ အကျိုးချုပ်ပုံကို ပြသည်။ စက်ဝိုင်းကို နောက်ပြန်လှည့်ခြင်းဟု မဆိုလိုပါ။',
                          style: TextStyle(height: 1.9),
                        ),
                      ),
                      ListTile(
                        title: const Text(
                          'မိုးကုတ်ရိပ်သာ • စက်ဝိုင်းရှင်းလင်းချက်',
                        ),
                        subtitle: const Text(
                          'U Candavarabhivamsa • စာမျက်နှာ ၈–၁၄ • PDF',
                        ),
                        trailing: const Icon(Icons.open_in_new),
                        onTap: () => source(
                          'https://dhammadownload.com/MP3Library/Mogok-Mp3-Ver2/pdf/MogokSayadawPaticcasamuppada.pdf',
                        ),
                      ),
                      ListTile(
                        title: const Text(
                          'SN 12.2 • ပဋိစ္စသမုပ္ပါဒဝိဘင်္ဂသုတ်',
                        ),
                        subtitle: const Text('Access to Insight • English'),
                        trailing: const Icon(Icons.open_in_new),
                        onTap: () => source(
                          'https://accesstoinsight.org/tipitaka/sn/sn12/sn12.002.than.html',
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

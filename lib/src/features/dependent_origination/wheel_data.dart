/// Concise study notes, not a verbatim transcript of a Sayadaw's discourse.
/// Sources: SN 12.2; U Candavarabhivamsa, The Cycle of Dependent Origination,
/// Mogok Yeiktha, pp. 8–14. See the source links in the study screen.
class DhammaLink {
  const DhammaLink(this.name, this.pali, this.meaning, this.group, this.round);
  final String name;
  final String pali;
  final String meaning;
  final int group;
  final int round;
}

const wheelGroups = [
  'အတိတ်အကြောင်း',
  'ပစ္စုပ္ပန်အကျိုး',
  'ပစ္စုပ္ပန်အကြောင်း',
  'အနာဂတ်အကျိုး',
];
const wheelRounds = ['ကိလေသဝဋ်', 'ကမ္မဝဋ်', 'ဝိပါကဝဋ်'];
const dhammaLinks = [
  DhammaLink(
    'အဝိဇ္ဇာ',
    'Avijjā',
    'ဒုက္ခ၊ ဒုက္ခဖြစ်ကြောင်း၊ ဒုက္ခချုပ်ရာနှင့် ချုပ်ရာသို့ ရောက်ကြောင်းလမ်းကို မသိခြင်း။',
    0,
    0,
  ),
  DhammaLink(
    'သင်္ခါရ',
    'Saṅkhāra',
    'ကိုယ်၊ နှုတ်၊ စိတ်တို့ဖြင့် ပြုလုပ်သော စေတနာကံ အပြုအမူများ။',
    0,
    1,
  ),
  DhammaLink(
    'ဝိညာဏ်',
    'Viññāṇa',
    'မျက်စိ၊ နား၊ နှာခေါင်း၊ လျှာ၊ ကိုယ်၊ စိတ်တို့၌ အာရုံကို သိခြင်း။',
    1,
    2,
  ),
  DhammaLink(
    'နာမ်ရုပ်',
    'Nāmarūpa',
    'နာမ်တရားနှင့် ရုပ်တရားတို့၏ အစုအဝေး။ အမြဲတည်သော အတ္တတစ်ခု မဟုတ်ပါ။',
    1,
    2,
  ),
  DhammaLink(
    'သဠာယတန',
    'Saḷāyatana',
    'မျက်စိ၊ နား၊ နှာခေါင်း၊ လျှာ၊ ကိုယ်၊ စိတ်ဟူသော အတွင်းအာယတန ခြောက်ပါး။',
    1,
    2,
  ),
  DhammaLink(
    'ဖဿ',
    'Phassa',
    'အာယတန၊ အာရုံနှင့် သက်ဆိုင်ရာ ဝိညာဏ်တို့ ဆုံတွေ့မှု။',
    1,
    2,
  ),
  DhammaLink(
    'ဝေဒနာ',
    'Vedanā',
    'တွေ့ထိမှုကြောင့် ဖြစ်သော သာယာမှု၊ မသာယာမှု၊ သာယာမသာယာ နှစ်မျိုးလုံးမဟုတ်သော ခံစားမှု။',
    1,
    2,
  ),
  DhammaLink(
    'တဏှာ',
    'Taṇhā',
    'အာရုံတို့ကို တပ်မက်ခြင်း၊ ဘဝကို တပ်မက်ခြင်း၊ ဘဝပြတ်စဲမှုကို တပ်မက်ခြင်း။',
    2,
    0,
  ),
  DhammaLink(
    'ဥပါဒါန်',
    'Upādāna',
    'ကာမ၊ အယူ၊ အကျင့်နှင့် အတ္တဝါဒတို့ကို စွဲလမ်းဆုပ်ကိုင်ခြင်း။',
    2,
    0,
  ),
  DhammaLink(
    'ဘဝ',
    'Bhava',
    'ကမ္မဘဝနှင့် ဥပပတ္တိဘဝဟူ၍ ခွဲခြားသည်။ ဤအကြောင်းအပိုင်းတွင် ဇာတိကို ဖြစ်စေသော ကမ္မဘဝကို အဓိကပြသည်။',
    2,
    1,
  ),
  DhammaLink(
    'ဇာတိ',
    'Jāti',
    'ဘဝတစ်ခု၌ ဖြစ်ပေါ်မွေးဖွားခြင်း၊ ခန္ဓာနှင့် အာယတနတို့ ပေါ်ပေါက်ခြင်း။',
    3,
    2,
  ),
  DhammaLink(
    'ဇရာမရဏ',
    'Jarāmaraṇa',
    'အိုမင်းရင့်ရော်ခြင်းနှင့် သေဆုံးခြင်း။ ဇာတိကို အကြောင်းပြု၍ သောကစသော ဒုက္ခတို့လည်း ဖြစ်ပေါ်သည်။',
    3,
    2,
  ),
];

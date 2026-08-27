import 'package:cloud_firestore/cloud_firestore.dart';
import '../domain/dhamma_content.dart';

class SampleDhammaRepository implements DhammaRepository {
  static final items = <DhammaContent>[
    DhammaContent(
      id: 'mingala',
      title: 'မင်္ဂလသုတ် တရားတော်',
      teacher: 'နမူနာ ဓမ္မကထိက',
      category: 'သုတ္တန်',
      summary:
          'ငြိမ်းချမ်းသော နေ့စဉ်ဘဝအတွက် မင်္ဂလာတရားတော်ကို အသံ၊ ရုပ်သံ၊ စာသားတို့ဖြင့် လေ့လာနိုင်ပါသည်။',
      formats: const {
        ContentFormat.audio,
        ContentFormat.video,
        ContentFormat.text,
      },
      duration: const Duration(minutes: 20, seconds: 30),
      publishedAt: DateTime(2026, 8, 20),
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      youtubeVideoId: 'aqz-KE-bpKQ',
      article: _article,
      featured: true,
    ),
    DhammaContent(
      id: 'metta',
      title: 'မေတ္တာပို့ တရားတော်',
      teacher: 'အရှင်ပညာသီရိ',
      category: 'ပရိတ်တရား',
      summary: 'သတ္တဝါအားလုံးအပေါ် မေတ္တာထားခြင်းနှင့် နေ့စဉ် မေတ္တာပို့နည်း။',
      formats: const {ContentFormat.audio, ContentFormat.text},
      duration: const Duration(minutes: 18, seconds: 12),
      publishedAt: DateTime(2026, 8, 18),
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      article: _article,
    ),
    DhammaContent(
      id: 'mindfulness',
      title: 'သတိပဋ္ဌာန် အခြေခံတရား',
      teacher: 'အရှင်ဇေယျသုခ',
      category: 'တရားအားထုတ်နည်း',
      summary:
          'ကိုယ်၊ ဝေဒနာ၊ စိတ်၊ ဓမ္မတို့ကို မှန်ကန်စွာ ရှုမှတ်နိုင်ရန် အခြေခံလမ်းညွှန်။',
      formats: const {ContentFormat.video},
      duration: const Duration(minutes: 29, seconds: 45),
      publishedAt: DateTime(2026, 8, 15),
      youtubeVideoId: 'aqz-KE-bpKQ',
    ),
    DhammaContent(
      id: 'daily-prayer',
      title: 'ဘုရားရှိခိုးနည်း အစီအစဉ်',
      teacher: 'ဂေါတမ တရားတော်',
      category: 'ဘုရားရှိခိုး',
      summary: 'နံနက်နှင့် ညနေ နေ့စဉ်ရွတ်ဖတ်နိုင်သော ဘုရားရှိခိုး အစီအစဉ်။',
      formats: const {ContentFormat.text},
      duration: Duration.zero,
      publishedAt: DateTime(2026, 8, 12),
      article: _article,
    ),
  ];
  @override
  Future<List<DhammaContent>> getPublished() async => items;
  @override
  Future<DhammaContent?> getById(String id) async {
    for (final item in items) {
      if (item.id == id) return item;
    }
    return null;
  }
}

class FirestoreDhammaRepository implements DhammaRepository {
  FirestoreDhammaRepository(this.firestore);
  final FirebaseFirestore firestore;
  CollectionReference<Map<String, dynamic>> get _collection =>
      firestore.collection('dhamma_contents');
  @override
  Future<List<DhammaContent>> getPublished() async {
    final snapshot = await _collection
        .where('published', isEqualTo: true)
        .get();
    return snapshot.docs
        .map((d) => DhammaContent.fromMap(d.id, d.data()))
        .toList();
  }

  @override
  Future<DhammaContent?> getById(String id) async {
    final d = await _collection.doc(id).get();
    final data = d.data();
    return data == null ? null : DhammaContent.fromMap(d.id, data);
  }
}

const _article = '''မင်္ဂလာတရားတော်

လူတစ်ယောက်၏ ဘဝတွင် စိတ်အေးချမ်းခြင်းသည် အရေးကြီးသော အခြေခံတစ်ရပ် ဖြစ်ပါသည်။ ကောင်းသောအကျင့်၊ ကောင်းသောစကားနှင့် ကောင်းသောစိတ်တို့ကို နေ့စဉ်လေ့ကျင့်ပျိုးထောင်ပါ။

မကောင်းမှုကို ရှောင်ကြဉ်ခြင်း၊ ကုသိုလ်တရားကို ဖြည့်ဆည်းခြင်းနှင့် မိမိစိတ်ကို ဖြူစင်အောင်ထားခြင်းတို့သည် မြတ်စွာဘုရား၏ အဆုံးအမအနှစ်သာရ ဖြစ်ပါသည်။

အချိန်တိုင်း သတိနှင့်နေထိုင်ကာ မိဘ၊ ဆရာသမားနှင့် ပတ်ဝန်းကျင်ရှိသူများကို မေတ္တာထားပါ။ စိတ်ရှည်ခြင်းသည် အမြတ်ဆုံးသော အကျင့်တစ်ပါးဖြစ်ပြီး ငြိမ်းချမ်းမှုကို ဖြစ်ပေါ်စေပါသည်။''';

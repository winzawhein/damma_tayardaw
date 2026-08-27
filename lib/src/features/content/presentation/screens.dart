import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:just_audio/just_audio.dart' as audio;
import 'package:youtube_player_flutter/youtube_player_flutter.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/widgets/glass.dart';
import '../domain/dhamma_content.dart';
import 'providers.dart';

class AppShell extends StatelessWidget {
  const AppShell({required this.navigationShell, super.key});
  final StatefulNavigationShell navigationShell;
  @override
  Widget build(BuildContext context) => Scaffold(
    body: navigationShell,
    extendBody: true,
    bottomNavigationBar: SafeArea(
      minimum: const EdgeInsets.fromLTRB(16, 0, 16, 12),
      child: GlassPanel(
        padding: const EdgeInsets.symmetric(horizontal: 4),
        borderRadius: 28,
        child: NavigationBar(
          height: 66,
          selectedIndex: navigationShell.currentIndex,
          onDestinationSelected: (i) => navigationShell.goBranch(
            i,
            initialLocation: i == navigationShell.currentIndex,
          ),
          destinations: const [
            NavigationDestination(
              icon: Icon(Icons.home_outlined),
              selectedIcon: Icon(Icons.home, color: AppColors.gold),
              label: 'ပင်မ',
            ),
            NavigationDestination(
              icon: Icon(Icons.menu_book_outlined),
              selectedIcon: Icon(Icons.menu_book, color: AppColors.gold),
              label: 'တရားတော်',
            ),
            NavigationDestination(
              icon: Icon(Icons.bookmark_outline),
              selectedIcon: Icon(Icons.bookmark, color: AppColors.gold),
              label: 'သိမ်းထား',
            ),
            NavigationDestination(
              icon: Icon(Icons.person_outline),
              selectedIcon: Icon(Icons.person, color: AppColors.gold),
              label: 'မိမိ',
            ),
          ],
        ),
      ),
    ),
  );
}

class HomeScreen extends ConsumerWidget {
  const HomeScreen({super.key});
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final content = ref.watch(contentProvider);
    return ScreenBackground(
      child: Scaffold(
        backgroundColor: Colors.transparent,
        body: SafeArea(
          child: CustomScrollView(
            slivers: [
              SliverPadding(
                padding: const EdgeInsets.fromLTRB(20, 12, 20, 110),
                sliver: SliverList(
                  delegate: SliverChildListDelegate([
                    const _TopBar(),
                    const SizedBox(height: 18),
                    const _Hero(),
                    const SizedBox(height: 22),
                    _Search(
                      onChanged: (v) {
                        ref.read(searchProvider.notifier).state = v;
                        context.go('/library');
                      },
                    ),
                    const SizedBox(height: 22),
                    const _SectionTitle(title: 'ဓမ္မကဏ္ဍများ'),
                    const SizedBox(height: 12),
                    const _CategoryRow(),
                    const SizedBox(height: 26),
                    const _SectionTitle(
                      title: 'လူကြိုက်များ',
                      action: 'အားလုံးကြည့်',
                    ),
                    const SizedBox(height: 12),
                    content.when(
                      data: (items) => Column(
                        children: items
                            .take(3)
                            .map(
                              (item) => Padding(
                                padding: const EdgeInsets.only(bottom: 12),
                                child: ContentCard(item: item),
                              ),
                            )
                            .toList(),
                      ),
                      loading: () =>
                          const Center(child: CircularProgressIndicator()),
                      error: (e, _) => _ErrorPanel(message: '$e'),
                    ),
                  ]),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _TopBar extends StatelessWidget {
  const _TopBar();
  @override
  Widget build(BuildContext context) => Row(
    children: [
      Container(
        width: 48,
        height: 48,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          border: Border.all(color: AppColors.line),
          image: const DecorationImage(
            image: AssetImage('assets/images/app_icon.png'),
            fit: BoxFit.cover,
          ),
        ),
      ),
      const SizedBox(width: 12),
      const Expanded(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'မင်္ဂလာပါ',
              style: TextStyle(fontSize: 21, fontWeight: FontWeight.w700),
            ),
            Text(
              'ယနေ့ စိတ်အေးချမ်းပါစေ',
              style: TextStyle(color: AppColors.muted),
            ),
          ],
        ),
      ),
      const GoldIcon(Icons.notifications_none_rounded),
    ],
  );
}

class _Hero extends StatelessWidget {
  const _Hero();
  @override
  Widget build(BuildContext context) => Container(
    height: 330,
    clipBehavior: Clip.antiAlias,
    decoration: BoxDecoration(
      borderRadius: BorderRadius.circular(30),
      border: Border.all(color: AppColors.line),
    ),
    child: Stack(
      fit: StackFit.expand,
      children: [
        Image.asset(
          'assets/images/buddha_hero.png',
          fit: BoxFit.cover,
          alignment: Alignment.topCenter,
        ),
        const DecoratedBox(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [Colors.transparent, Color(0xE610100E)],
              stops: [.45, 1],
            ),
          ),
        ),
        Positioned(
          left: 24,
          right: 24,
          bottom: 22,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'ဂေါတမ တရားတော်',
                style: Theme.of(context).textTheme.headlineSmall,
              ),
              const SizedBox(height: 5),
              const Text(
                'တရားတော်နှင့် ဓမ္မစာပေများကို တစ်နေရာတည်းတွင်',
                style: TextStyle(color: AppColors.muted, height: 1.5),
              ),
            ],
          ),
        ),
      ],
    ),
  );
}

class _Search extends StatelessWidget {
  const _Search({required this.onChanged});
  final ValueChanged<String> onChanged;
  @override
  Widget build(BuildContext context) => GlassPanel(
    padding: EdgeInsets.zero,
    child: TextField(
      onChanged: onChanged,
      decoration: const InputDecoration(
        prefixIcon: Icon(Icons.search),
        hintText: 'တရားတော် ရှာဖွေရန်...',
        suffixIcon: Icon(Icons.tune),
        border: InputBorder.none,
        contentPadding: EdgeInsets.symmetric(vertical: 17),
      ),
    ),
  );
}

class _CategoryRow extends StatelessWidget {
  const _CategoryRow();
  @override
  Widget build(BuildContext context) {
    const categories = [
      (Icons.self_improvement, 'ဘုရားရှိခိုး'),
      (Icons.headphones, 'အသံတရား'),
      (Icons.ondemand_video, 'ရုပ်သံ'),
      (Icons.auto_stories, 'ဓမ္မစာပေ'),
    ];
    return Row(
      children: categories
          .map(
            (c) => Expanded(
              child: InkWell(
                onTap: () => context.go('/library'),
                child: Column(
                  children: [
                    GoldIcon(c.$1),
                    const SizedBox(height: 8),
                    Text(
                      c.$2,
                      style: const TextStyle(fontSize: 11),
                      textAlign: TextAlign.center,
                    ),
                  ],
                ),
              ),
            ),
          )
          .toList(),
    );
  }
}

class LibraryScreen extends ConsumerWidget {
  const LibraryScreen({super.key});
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final selected = ref.watch(formatFilterProvider);
    final result = ref.watch(filteredContentProvider);
    return ScreenBackground(
      child: Scaffold(
        backgroundColor: Colors.transparent,
        appBar: AppBar(
          backgroundColor: Colors.transparent,
          title: const Text('တရားတော်များ'),
          centerTitle: true,
        ),
        body: SafeArea(
          child: ListView(
            padding: const EdgeInsets.fromLTRB(20, 8, 20, 110),
            children: [
              _Search(
                onChanged: (v) => ref.read(searchProvider.notifier).state = v,
              ),
              const SizedBox(height: 16),
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: [
                    _FilterChip(
                      label: 'အားလုံး',
                      selected: selected == null,
                      onTap: () =>
                          ref.read(formatFilterProvider.notifier).state = null,
                    ),
                    ...ContentFormat.values.map(
                      (f) => _FilterChip(
                        label: _formatName(f),
                        selected: selected == f,
                        onTap: () =>
                            ref.read(formatFilterProvider.notifier).state = f,
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 18),
              result.when(
                data: (items) => items.isEmpty
                    ? const _Empty(
                        message: 'ရှာဖွေမှုနှင့် ကိုက်ညီသော တရားတော် မရှိသေးပါ',
                      )
                    : Column(
                        children: items
                            .map(
                              (e) => Padding(
                                padding: const EdgeInsets.only(bottom: 12),
                                child: ContentCard(item: e),
                              ),
                            )
                            .toList(),
                      ),
                loading: () => const Center(child: CircularProgressIndicator()),
                error: (e, _) => _ErrorPanel(message: '$e'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class SavedScreen extends ConsumerWidget {
  const SavedScreen({super.key});
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final favorites = ref.watch(favoritesProvider);
    final content = ref.watch(contentProvider);
    return ScreenBackground(
      child: Scaffold(
        backgroundColor: Colors.transparent,
        appBar: AppBar(
          backgroundColor: Colors.transparent,
          title: const Text('သိမ်းထားသော တရားများ'),
          centerTitle: true,
        ),
        body: content.when(
          data: (all) {
            final items = all.where((e) => favorites.contains(e.id)).toList();
            return ListView(
              padding: const EdgeInsets.fromLTRB(20, 8, 20, 110),
              children: [
                GlassPanel(
                  child: Row(
                    children: [
                      const GoldIcon(Icons.download_for_offline_outlined),
                      const SizedBox(width: 14),
                      const Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'အော့ဖ်လိုင်းဒေါင်းလုဒ်',
                              style: TextStyle(fontWeight: FontWeight.w700),
                            ),
                            Text(
                              'Firebase/CDN ဖိုင်များအတွက် UI အဆင်သင့်',
                              style: TextStyle(
                                color: AppColors.muted,
                                fontSize: 12,
                              ),
                            ),
                          ],
                        ),
                      ),
                      Text(
                        '${items.length}',
                        style: const TextStyle(
                          color: AppColors.gold,
                          fontSize: 20,
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 18),
                if (items.isEmpty)
                  const _Empty(
                    message: 'နှစ်သက်ရာ တရားတော်ကို နှလုံးပုံနှိပ်ပြီး သိမ်းပါ',
                  )
                else
                  ...items.map(
                    (e) => Padding(
                      padding: const EdgeInsets.only(bottom: 12),
                      child: ContentCard(item: e),
                    ),
                  ),
              ],
            );
          },
          loading: () => const Center(child: CircularProgressIndicator()),
          error: (e, _) => _ErrorPanel(message: '$e'),
        ),
      ),
    );
  }
}

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});
  @override
  Widget build(BuildContext context) => ScreenBackground(
    child: Scaffold(
      backgroundColor: Colors.transparent,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: const Text('မိမိအကောင့်'),
        centerTitle: true,
      ),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(20, 12, 20, 110),
        children: [
          GlassPanel(
            child: Column(
              children: [
                Container(
                  width: 86,
                  height: 86,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    border: Border.all(color: AppColors.gold),
                    image: const DecorationImage(
                      image: AssetImage('assets/images/app_icon.png'),
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
                const SizedBox(height: 12),
                const Text(
                  'ဓမ္မမိတ်ဆွေ',
                  style: TextStyle(fontSize: 21, fontWeight: FontWeight.w700),
                ),
                const Text(
                  'ဂေါတမ တရားတော်မှ ကြိုဆိုပါသည်',
                  style: TextStyle(color: AppColors.muted),
                ),
              ],
            ),
          ),
          const SizedBox(height: 18),
          const _SettingsTile(
            icon: Icons.history,
            title: 'နားထောင်ခဲ့သော မှတ်တမ်း',
          ),
          const _SettingsTile(
            icon: Icons.download_outlined,
            title: 'ဒေါင်းလုဒ်များ',
          ),
          const _SettingsTile(
            icon: Icons.notifications_none,
            title: 'အသိပေးချက်များ',
          ),
          const _SettingsTile(
            icon: Icons.text_fields,
            title: 'စာလုံးအရွယ်အစား',
          ),
          const _SettingsTile(icon: Icons.language, title: 'ဘာသာစကား'),
          const _SettingsTile(icon: Icons.info_outline, title: 'အက်ပ်အကြောင်း'),
          const SizedBox(height: 18),
          const Center(
            child: Text(
              'Gawdama Tayardaw • v1.0.0',
              style: TextStyle(color: AppColors.muted, fontSize: 12),
            ),
          ),
        ],
      ),
    ),
  );
}

class ContentCard extends ConsumerWidget {
  const ContentCard({required this.item, super.key});
  final DhammaContent item;
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final favorite = ref.watch(favoritesProvider).contains(item.id);
    return GlassPanel(
      onTap: () => context.push('/content/${item.id}'),
      padding: const EdgeInsets.all(12),
      child: Row(
        children: [
          Hero(
            tag: 'art-${item.id}',
            child: ClipRRect(
              borderRadius: BorderRadius.circular(15),
              child: Image.asset(
                'assets/images/buddha_hero.png',
                width: 88,
                height: 88,
                fit: BoxFit.cover,
              ),
            ),
          ),
          const SizedBox(width: 14),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  item.title,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(
                    fontWeight: FontWeight.w700,
                    fontSize: 16,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  item.teacher,
                  style: const TextStyle(color: AppColors.muted, fontSize: 12),
                ),
                const SizedBox(height: 7),
                Wrap(
                  spacing: 5,
                  children: item.formats
                      .map(
                        (f) => Text(
                          _formatName(f),
                          style: const TextStyle(
                            color: AppColors.gold,
                            fontSize: 11,
                          ),
                        ),
                      )
                      .toList(),
                ),
              ],
            ),
          ),
          IconButton(
            onPressed: () =>
                ref.read(favoritesProvider.notifier).toggle(item.id),
            icon: Icon(
              favorite ? Icons.favorite : Icons.play_arrow_rounded,
              color: AppColors.gold,
            ),
          ),
        ],
      ),
    );
  }
}

class ContentDetailScreen extends ConsumerWidget {
  const ContentDetailScreen({required this.contentId, super.key});
  final String contentId;
  @override
  Widget build(BuildContext context, WidgetRef ref) => ScreenBackground(
    child: Scaffold(
      backgroundColor: Colors.transparent,
      body: ref
          .watch(contentByIdProvider(contentId))
          .when(
            data: (item) => item == null
                ? const _ErrorPanel(message: 'တရားတော် မတွေ့ပါ')
                : _DetailBody(item: item),
            loading: () => const Center(child: CircularProgressIndicator()),
            error: (e, _) => _ErrorPanel(message: '$e'),
          ),
    ),
  );
}

class _DetailBody extends ConsumerStatefulWidget {
  const _DetailBody({required this.item});
  final DhammaContent item;
  @override
  ConsumerState<_DetailBody> createState() => _DetailBodyState();
}

class _DetailBodyState extends ConsumerState<_DetailBody> {
  late ContentFormat selected;
  @override
  void initState() {
    super.initState();
    selected = widget.item.formats.first;
  }

  @override
  Widget build(BuildContext context) {
    final item = widget.item;
    final favorite = ref.watch(favoritesProvider).contains(item.id);
    return CustomScrollView(
      slivers: [
        SliverAppBar(
          expandedHeight: 350,
          pinned: true,
          backgroundColor: AppColors.background,
          actions: [
            IconButton(
              onPressed: () =>
                  ref.read(favoritesProvider.notifier).toggle(item.id),
              icon: Icon(
                favorite ? Icons.favorite : Icons.favorite_border,
                color: AppColors.gold,
              ),
            ),
          ],
          flexibleSpace: FlexibleSpaceBar(
            background: Stack(
              fit: StackFit.expand,
              children: [
                Hero(
                  tag: 'art-${item.id}', 
                  child: Image.asset(
                    'assets/images/buddha_hero.png',
                    fit: BoxFit.cover,
                  ),
                ),
                const DecoratedBox(
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      begin: Alignment.topCenter,
                      end: Alignment.bottomCenter,
                      colors: [Colors.transparent, AppColors.background],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
        SliverPadding(
          padding: const EdgeInsets.fromLTRB(20, 8, 20, 36),
          sliver: SliverList(
            delegate: SliverChildListDelegate([
              Text(
                item.title,
                style: Theme.of(context).textTheme.headlineSmall,
              ),
              const SizedBox(height: 6),
              Text(
                '${item.teacher} • ${item.category}',
                style: const TextStyle(color: AppColors.muted),
              ),
              const SizedBox(height: 18),
              Wrap(
                spacing: 8,
                children: item.formats
                    .map(
                      (f) => ChoiceChip(
                        label: Text(_formatName(f)),
                        selected: selected == f,
                        onSelected: (_) => setState(() => selected = f),
                      ),
                    )
                    .toList(),
              ),
              const SizedBox(height: 18),
              if (selected == ContentFormat.audio && item.audioUrl != null)
                AudioPlayerPanel(url: item.audioUrl!, title: item.title),
              if (selected == ContentFormat.video &&
                  item.youtubeVideoId != null)
                VideoPlayerPanel(videoId: item.youtubeVideoId!),
              if (selected == ContentFormat.text && item.article != null)
                TextReaderPanel(text: item.article!),
              const SizedBox(height: 18),
              GlassPanel(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      'အကြောင်းအရာ',
                      style: TextStyle(
                        fontWeight: FontWeight.w700,
                        fontSize: 17,
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(item.summary),
                  ],
                ),
              ),
            ]),
          ),
        ),
      ],
    );
  }
}

class AudioPlayerPanel extends StatefulWidget {
  const AudioPlayerPanel({required this.url, required this.title, super.key});
  final String url, title;
  @override
  State<AudioPlayerPanel> createState() => _AudioPlayerPanelState();
}

class _AudioPlayerPanelState extends State<AudioPlayerPanel> {
  final player = audio.AudioPlayer();
  StreamSubscription<audio.PlayerState>? sub;
  bool loading = true;
  String? error;
  @override
  void initState() {
    super.initState();
    _prepare();
    sub = player.playerStateStream.listen((_) {
      if (mounted) setState(() {});
    });
  }

  Future<void> _prepare() async {
    try {
      await player.setUrl(widget.url);
    } catch (_) {
      error = 'အသံဖိုင်ကို ဖွင့်၍ မရပါ။ အင်တာနက်ကို စစ်ဆေးပါ။';
    }
    if (mounted) setState(() => loading = false);
  }

  @override
  void dispose() {
    sub?.cancel();
    player.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => GlassPanel(
    child: Column(
      children: [
        const GoldIcon(Icons.headphones_rounded, size: 26),
        const SizedBox(height: 12),
        Text(widget.title, style: const TextStyle(fontWeight: FontWeight.w700)),
        const SizedBox(height: 10),
        if (loading)
          const LinearProgressIndicator()
        else if (error != null)
          Text(error!, style: const TextStyle(color: Colors.redAccent))
        else ...[
          StreamBuilder<Duration>(
            stream: player.positionStream,
            builder: (_, snap) {
              final p = snap.data ?? Duration.zero;
              final d = player.duration ?? const Duration(seconds: 1);
              return Column(
                children: [
                  Slider(
                    value: p.inMilliseconds
                        .clamp(0, d.inMilliseconds)
                        .toDouble(),
                    max: d.inMilliseconds.toDouble(),
                    onChanged: (v) =>
                        player.seek(Duration(milliseconds: v.toInt())),
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [Text(_duration(p)), Text(_duration(d))],
                  ),
                ],
              );
            },
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              IconButton(
                onPressed: () =>
                    player.seek(player.position - const Duration(seconds: 15)),
                icon: const Icon(Icons.replay_10),
              ),
              const SizedBox(width: 18),
              FilledButton(
                onPressed: player.playing ? player.pause : player.play,
                style: FilledButton.styleFrom(
                  shape: const CircleBorder(),
                  padding: const EdgeInsets.all(20),
                ),
                child: Icon(
                  player.playing ? Icons.pause : Icons.play_arrow,
                  size: 30,
                ),
              ),
              const SizedBox(width: 18),
              IconButton(
                onPressed: () =>
                    player.seek(player.position + const Duration(seconds: 15)),
                icon: const Icon(Icons.forward_10),
              ),
            ],
          ),
        ],
        const Divider(height: 28),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            const _TinyAction(Icons.timer_outlined, 'အိပ်ချိန်'),
            _TinyAction(
              Icons.download_outlined,
              'ဒေါင်းလုဒ်',
              onTap: () => ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text('ဒေါင်းလုဒ်စနစ်အတွက် UI အဆင်သင့်ဖြစ်ပါသည်။'),
                ),
              ),
            ),
            const _TinyAction(Icons.speed, 'အမြန်နှုန်း'),
          ],
        ),
      ],
    ),
  );
}

class VideoPlayerPanel extends StatefulWidget {
  const VideoPlayerPanel({required this.videoId, super.key});
  final String videoId;
  @override
  State<VideoPlayerPanel> createState() => _VideoPlayerPanelState();
}

class _VideoPlayerPanelState extends State<VideoPlayerPanel> {
  late final YoutubePlayerController controller;
  @override
  void initState() {
    super.initState();
    controller = YoutubePlayerController.fromVideoId(
      videoId: widget.videoId,
      autoPlay: false,
      params: const YoutubePlayerParams(
        showControls: true,
        showFullscreenButton: true,
        enableCaption: true,
      ),
    );
  }

  @override
  void dispose() {
    controller.close();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => ClipRRect(
    borderRadius: BorderRadius.circular(22),
    child: YoutubePlayer(controller: controller),
  );
}

class TextReaderPanel extends StatefulWidget {
  const TextReaderPanel({required this.text, super.key});
  final String text;
  @override
  State<TextReaderPanel> createState() => _TextReaderPanelState();
}

class _TextReaderPanelState extends State<TextReaderPanel> {
  double size = 17;
  @override
  Widget build(BuildContext context) => GlassPanel(
    child: Column(
      children: [
        Row(
          children: [
            const Expanded(
              child: Text(
                'ဓမ္မစာပေ ဖတ်ရှုရန်',
                style: TextStyle(fontWeight: FontWeight.w700),
              ),
            ),
            IconButton(
              onPressed: () => setState(() => size = (size - 1).clamp(14, 28)),
              icon: const Text('A−'),
            ),
            IconButton(
              onPressed: () => setState(() => size = (size + 1).clamp(14, 28)),
              icon: const Text('A+'),
            ),
            const Icon(Icons.bookmark_border),
          ],
        ),
        const Divider(),
        SelectableText(
          widget.text,
          style: TextStyle(fontSize: size, height: 2),
        ),
      ],
    ),
  );
}

class _FilterChip extends StatelessWidget {
  const _FilterChip({
    required this.label,
    required this.selected,
    required this.onTap,
  });
  final String label;
  final bool selected;
  final VoidCallback onTap;
  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.only(right: 8),
    child: ChoiceChip(
      label: Text(label),
      selected: selected,
      onSelected: (_) => onTap(),
    ),
  );
}

class _SectionTitle extends StatelessWidget {
  const _SectionTitle({required this.title, this.action});
  final String title;
  final String? action;
  @override
  Widget build(BuildContext context) => Row(
    children: [
      Expanded(
        child: Text(title, style: Theme.of(context).textTheme.titleLarge),
      ),
      if (action != null)
        TextButton(
          onPressed: () => context.go('/library'),
          child: Text(action!),
        ),
    ],
  );
}

class _SettingsTile extends StatelessWidget {
  const _SettingsTile({required this.icon, required this.title});
  final IconData icon;
  final String title;
  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.only(bottom: 9),
    child: GlassPanel(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 11),
      onTap: () => ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            '$title စနစ်ကို Firebase ချိတ်ဆက်ပြီး အသုံးပြုနိုင်ပါသည်။',
          ),
        ),
      ),
      child: Row(
        children: [
          GoldIcon(icon),
          const SizedBox(width: 14),
          Expanded(child: Text(title)),
          const Icon(Icons.chevron_right, color: AppColors.muted),
        ],
      ),
    ),
  );
}

class _TinyAction extends StatelessWidget {
  const _TinyAction(this.icon, this.label, {this.onTap});
  final IconData icon;
  final String label;
  final VoidCallback? onTap;
  @override
  Widget build(BuildContext context) => InkWell(
    onTap: onTap,
    child: Column(
      children: [
        Icon(icon, color: AppColors.gold),
        const SizedBox(height: 5),
        Text(
          label,
          style: const TextStyle(fontSize: 11, color: AppColors.muted),
        ),
      ],
    ),
  );
}

class _Empty extends StatelessWidget {
  const _Empty({required this.message});
  final String message;
  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.symmetric(vertical: 80, horizontal: 30),
    child: Column(
      children: [
        const GoldIcon(Icons.self_improvement, size: 28),
        const SizedBox(height: 16),
        Text(
          message,
          textAlign: TextAlign.center,
          style: const TextStyle(color: AppColors.muted),
        ),
      ],
    ),
  );
}

class _ErrorPanel extends StatelessWidget {
  const _ErrorPanel({required this.message});
  final String message;
  @override
  Widget build(BuildContext context) => Center(
    child: Padding(
      padding: const EdgeInsets.all(24),
      child: Text(message, textAlign: TextAlign.center),
    ),
  );
}

String _formatName(ContentFormat f) => switch (f) {
  ContentFormat.audio => 'MP3 အသံ',
  ContentFormat.video => 'Video',
  ContentFormat.text => 'စာဖတ်',
};
String _duration(Duration d) =>
    '${d.inMinutes.remainder(60).toString().padLeft(2, '0')}:${d.inSeconds.remainder(60).toString().padLeft(2, '0')}';

import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:just_audio/just_audio.dart' as audio;
import 'package:youtube_player_flutter/youtube_player_flutter.dart';
import '../../../core/notifications/notification_service.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/widgets/glass.dart';
import '../../../core/widgets/dhamma_menu.dart';
import '../domain/dhamma_content.dart';
import 'providers.dart';

class AppShell extends StatelessWidget {
  const AppShell({required this.navigationShell, super.key});
  final StatefulNavigationShell navigationShell;
  @override
  Widget build(BuildContext context) => Scaffold(
    body: navigationShell,
    backgroundColor: navigationShell.currentIndex == 2
        ? const Color(0xFF3B2116)
        : AppColors.background,
    bottomNavigationBar: SizedBox(
      height: 88 + MediaQuery.paddingOf(context).bottom,
      child: Stack(
        children: [
          Positioned.fill(
            top: 16,
            child: DecoratedBox(
              decoration: BoxDecoration(
                color: navigationShell.currentIndex == 2
                    ? const Color(0xFFFFFAED)
                    : const Color(0xFF161815),
                border: Border(
                  top: BorderSide(
                    color: navigationShell.currentIndex == 2
                        ? const Color(0xFFE8DECA)
                        : const Color(0xFF38372F),
                  ),
                ),
              ),
            ),
          ),
          Positioned(
            left: 8,
            right: 8,
            top: 0,
            height: 88,
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _BottomNavItem(
                  icon: Icons.home_outlined,
                  selectedIcon: Icons.home_rounded,
                  label: 'ပင်မ',
                  index: 0,
                  navigationShell: navigationShell,
                ),
                _BottomNavItem(
                  icon: Icons.menu_book_outlined,
                  selectedIcon: Icons.menu_book_rounded,
                  label: 'တရားတော်',
                  index: 1,
                  navigationShell: navigationShell,
                ),
                Expanded(
                  child: Center(
                    child: Padding(
                      padding: const EdgeInsets.only(bottom: 28),
                      child: ShrineNavButton(
                        selected: navigationShell.currentIndex == 2,
                        onTap: () async {
                          final choice = await showDhammaMenu(context);
                          if (!context.mounted) return;
                          if (choice == 'shrine') navigationShell.goBranch(2);
                          if (choice == 'wheel') context.push('/dhamma-wheel');
                        },
                      ),
                    ),
                  ),
                ),
                _BottomNavItem(
                  icon: Icons.bookmark_outline_rounded,
                  selectedIcon: Icons.bookmark_rounded,
                  label: 'သိမ်းထား',
                  index: 3,
                  navigationShell: navigationShell,
                ),
                _BottomNavItem(
                  icon: Icons.person_outline_rounded,
                  selectedIcon: Icons.person_rounded,
                  label: 'မိမိ',
                  index: 4,
                  navigationShell: navigationShell,
                ),
              ],
            ),
          ),
        ],
      ),
    ),
  );
}

/// Raised menu launcher; animations run only when its state changes.
class ShrineNavButton extends StatelessWidget {
  const ShrineNavButton({
    required this.selected,
    required this.onTap,
    super.key,
  });
  final bool selected;
  final VoidCallback onTap;
  @override
  Widget build(BuildContext context) => Semantics(
    button: true,
    label: 'ဓမ္မ မီနူး',
    child: Tooltip(
      message: 'ဓမ္မ မီနူး',
      child: Container(
        key: const ValueKey('dhamma-menu-launcher'),
        width: 56,
        height: 56,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          gradient: const LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Color(0xFFFFE6AA), Color(0xFFBD8936)],
          ),
          border: Border.all(color: const Color(0xFFFFEDC5), width: 2),
          boxShadow: const [
            BoxShadow(
              color: Color(0x303C2A10),
              blurRadius: 8,
              offset: Offset(0, 3),
            ),
          ],
        ),
        child: Material(
          color: Colors.transparent,
          shape: const CircleBorder(),
          clipBehavior: Clip.antiAlias,
          child: InkWell(
            onTap: onTap,
            child: const Icon(
              Icons.grid_view_rounded,
              color: Color(0xFF493015),
              size: 27,
            ),
          ),
        ),
      ),
    ),
  );
}

class _BottomNavItem extends StatelessWidget {
  const _BottomNavItem({
    required this.icon,
    required this.selectedIcon,
    required this.label,
    required this.index,
    required this.navigationShell,
  });
  final IconData icon, selectedIcon;
  final String label;
  final int index;
  final StatefulNavigationShell navigationShell;
  @override
  Widget build(BuildContext context) {
    final selected = navigationShell.currentIndex == index;
    final color = navigationShell.currentIndex == 2
        ? const Color(0xFF665A40)
        : selected
        ? const Color(0xFFF0D394)
        : const Color(0xFFC2C8C2);
    return Expanded(
      child: Padding(
        padding: const EdgeInsets.only(top: 24),
        child: Semantics(
          button: true,
          selected: selected,
          label: label,
          child: Material(
            color: Colors.transparent,
            child: InkWell(
              borderRadius: BorderRadius.circular(16),
              onTap: () =>
                  navigationShell.goBranch(index, initialLocation: selected),
              child: SizedBox(
                height: 60,
                width: double.infinity,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(
                      selected ? selectedIcon : icon,
                      color: color,
                      size: 24,
                    ),
                    const SizedBox(height: 4),
                    Flexible(
                      child: Text(
                        label,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(
                          color: color,
                          fontSize: 10.5,
                          fontWeight: selected
                              ? FontWeight.w700
                              : FontWeight.w500,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class HomeScreen extends ConsumerWidget {
  const HomeScreen({super.key});

  Future<void> _refresh(WidgetRef ref) async {
    ref.invalidate(contentProvider);
    ref.invalidate(categoriesProvider);
    await Future.wait([
      ref.read(contentProvider.future),
      ref.read(categoriesProvider.future),
    ]);
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final content = ref.watch(contentProvider);
    return ScreenBackground(
      child: Scaffold(
        backgroundColor: Colors.transparent,
        body: SafeArea(
          child: RefreshIndicator.adaptive(
            onRefresh: () => _refresh(ref),
            child: CustomScrollView(
              physics: const AlwaysScrollableScrollPhysics(),
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
                      const SizedBox(height: 18),
                      Card(
                        child: ListTile(
                          leading: const Icon(Icons.self_improvement),
                          title: const Text('လေ့ကျင့်မှုနှင့် လေ့လာမှု'),
                          subtitle: const Text(
                            'ပုတီး • တရားထိုင် • ဓမ္မပဒ • ဉာဏ်စမ်း',
                          ),
                          trailing: const Icon(Icons.chevron_right),
                          onTap: () => context.push('/practice'),
                        ),
                      ),
                      Card(
                        child: ListTile(
                          leading: const Icon(Icons.hub_outlined),
                          title: const Text('ပဋိစ္စသမုပ္ပါဒ် စက်ဝိုင်း'),
                          subtitle: const Text(
                            'မိုးကုတ် • ဓမ္မသဘော • အင်္ဂါ ၁၂ ပါး',
                          ),
                          trailing: const Icon(Icons.chevron_right),
                          onTap: () => context.push('/dhamma-wheel'),
                        ),
                      ),
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
                                  child: ContentCard(item: item, blur: false),
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
    decoration: BoxDecoration(borderRadius: BorderRadius.circular(30)),
    foregroundDecoration: BoxDecoration(
      borderRadius: BorderRadius.circular(30),
      border: Border.all(color: const Color(0x66F0B94A), width: 0.5),
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
              Text('ပဇ္ဇောတ', style: Theme.of(context).textTheme.headlineSmall),
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

class _CategoryRow extends ConsumerWidget {
  const _CategoryRow();
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return ref
        .watch(categoriesProvider)
        .when(
          data: (categories) => categories.isEmpty
              ? const _Empty(message: 'ဓမ္မကဏ္ဍများ မထည့်ရသေးပါ')
              : SizedBox(
                  height: 78,
                  child: ListView.separated(
                    scrollDirection: Axis.horizontal,
                    itemCount: categories.length,
                    separatorBuilder: (_, _) => const SizedBox(width: 12),
                    itemBuilder: (context, index) {
                      final category = categories[index];
                      return SizedBox(
                        width: 82,
                        child: InkWell(
                          borderRadius: BorderRadius.circular(16),
                          onTap: () => context.push(
                            '/category/${Uri.encodeComponent(category.id)}',
                          ),
                          child: Column(
                            children: [
                              GoldIcon(_categoryIcon(category.iconKey)),
                              const SizedBox(height: 8),
                              Text(
                                category.name,
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                style: const TextStyle(fontSize: 11),
                                textAlign: TextAlign.center,
                              ),
                            ],
                          ),
                        ),
                      );
                    },
                  ),
                ),
          loading: () => const SizedBox(
            height: 78,
            child: Center(child: CircularProgressIndicator()),
          ),
          error: (error, _) => _ErrorPanel(message: '$error'),
        );
  }
}

class CategoryDetailScreen extends ConsumerWidget {
  const CategoryDetailScreen({required this.categoryId, super.key});
  final String categoryId;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return ref
        .watch(categoriesProvider)
        .when(
          data: (categories) {
            DhammaCategory? category;
            for (final item in categories) {
              if (item.id == categoryId) {
                category = item;
                break;
              }
            }
            return category == null
                ? const _CategoryLoadingPage(
                    child: _ErrorPanel(message: 'ဓမ္မကဏ္ဍ မတွေ့ပါ'),
                  )
                : _CategoryDocumentPage(category: category);
          },
          loading: () => const _CategoryLoadingPage(
            child: Center(child: CircularProgressIndicator()),
          ),
          error: (error, _) =>
              _CategoryLoadingPage(child: _ErrorPanel(message: '$error')),
        );
  }
}

class _CategoryLoadingPage extends StatelessWidget {
  const _CategoryLoadingPage({required this.child});
  final Widget child;
  @override
  Widget build(BuildContext context) => ScreenBackground(
    child: Scaffold(
      backgroundColor: Colors.transparent,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: const Text('ဓမ္မကဏ္ဍ'),
      ),
      body: child,
    ),
  );
}

class _CategoryDocumentPage extends ConsumerStatefulWidget {
  const _CategoryDocumentPage({required this.category});
  final DhammaCategory category;
  @override
  ConsumerState<_CategoryDocumentPage> createState() =>
      _CategoryDocumentPageState();
}

class _CategoryDocumentPageState extends ConsumerState<_CategoryDocumentPage> {
  late final List<GlobalKey> sectionKeys;

  @override
  void initState() {
    super.initState();
    sectionKeys = List.generate(
      widget.category.readableSections.length,
      (_) => GlobalKey(),
    );
  }

  Future<void> _goToSection(int index) async {
    final sectionContext = sectionKeys[index].currentContext;
    if (sectionContext == null) return;
    await Scrollable.ensureVisible(
      sectionContext,
      duration: const Duration(milliseconds: 500),
      curve: Curves.easeInOutCubic,
      alignment: .04,
    );
  }

  @override
  Widget build(BuildContext context) {
    final category = widget.category;
    final sections = category.readableSections;
    final tracks = category.audioTracks;
    final readerSize = ref.watch(preferencesProvider).readerFontSize;
    return ScreenBackground(
      child: Scaffold(
        backgroundColor: Colors.transparent,
        appBar: AppBar(
          backgroundColor: Colors.transparent,
          title: Text(category.name),
          centerTitle: true,
        ),
        bottomNavigationBar: tracks.isEmpty
            ? null
            : SafeArea(
                minimum: const EdgeInsets.fromLTRB(16, 0, 16, 12),
                child: _FloatingAudioPlaylist(tracks: tracks),
              ),
        body: ListView(
          padding: EdgeInsets.fromLTRB(20, 12, 20, tracks.isEmpty ? 36 : 120),
          children: [
            GlassPanel(
              child: Row(
                children: [
                  GoldIcon(_categoryIcon(category.iconKey), size: 26),
                  const SizedBox(width: 14),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          category.name,
                          style: Theme.of(context).textTheme.titleLarge,
                        ),
                        const SizedBox(height: 3),
                        Text(
                          'စာခေါင်းစဉ် ${sections.length} • အသံ ${tracks.length}',
                          style: const TextStyle(
                            color: AppColors.muted,
                            fontSize: 12,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            if (sections.isNotEmpty) ...[
              const SizedBox(height: 18),
              const Text(
                'မာတိကာ',
                style: TextStyle(fontWeight: FontWeight.w700),
              ),
              const SizedBox(height: 8),
              SizedBox(
                height: 42,
                child: ListView.separated(
                  scrollDirection: Axis.horizontal,
                  itemCount: sections.length,
                  separatorBuilder: (_, _) => const SizedBox(width: 8),
                  itemBuilder: (_, index) => ActionChip(
                    avatar: Text('${index + 1}'),
                    label: Text(sections[index].title),
                    onPressed: () => _goToSection(index),
                  ),
                ),
              ),
            ],
            const SizedBox(height: 22),
            if (sections.isEmpty)
              const _CompactEmpty(
                message: 'ဤကဏ္ဍတွင် စာဖတ်အကြောင်းအရာ မရှိသေးပါ',
              )
            else
              ...List.generate(sections.length, (index) {
                final section = sections[index];
                return Padding(
                  key: sectionKeys[index],
                  padding: const EdgeInsets.only(bottom: 16),
                  child: GlassPanel(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          section.title,
                          style: Theme.of(context).textTheme.titleLarge,
                        ),
                        const Divider(height: 26),
                        SelectableText(
                          section.content,
                          style: TextStyle(fontSize: readerSize, height: 2),
                        ),
                      ],
                    ),
                  ),
                );
              }),
          ],
        ),
      ),
    );
  }
}

class _FloatingAudioPlaylist extends StatefulWidget {
  const _FloatingAudioPlaylist({required this.tracks});
  final List<DhammaAudioTrack> tracks;
  @override
  State<_FloatingAudioPlaylist> createState() => _FloatingAudioPlaylistState();
}

class _FloatingAudioPlaylistState extends State<_FloatingAudioPlaylist> {
  final player = audio.AudioPlayer();
  StreamSubscription<audio.PlayerState>? subscription;
  int selectedIndex = 0;
  bool loading = true;
  String? error;

  DhammaAudioTrack get selectedTrack => widget.tracks[selectedIndex];

  @override
  void initState() {
    super.initState();
    _selectTrack(0, autoPlay: false);
    subscription = player.playerStateStream.listen((_) {
      if (mounted) setState(() {});
    });
  }

  Future<void> _selectTrack(int index, {required bool autoPlay}) async {
    if (mounted) {
      setState(() {
        selectedIndex = index;
        loading = true;
        error = null;
      });
    }
    try {
      await player.setUrl(widget.tracks[index].url);
      if (autoPlay) await player.play();
    } catch (_) {
      error = 'အသံဖိုင်ကို ဖွင့်၍ မရပါ';
    }
    if (mounted) setState(() => loading = false);
  }

  Future<void> _showPlaylist() async {
    final index = await showModalBottomSheet<int>(
      context: context,
      backgroundColor: AppColors.surface,
      showDragHandle: true,
      builder: (context) => SafeArea(
        child: ListView.builder(
          shrinkWrap: true,
          padding: const EdgeInsets.only(bottom: 16),
          itemCount: widget.tracks.length,
          itemBuilder: (context, index) => ListTile(
            leading: CircleAvatar(
              backgroundColor: index == selectedIndex
                  ? AppColors.gold
                  : Colors.white10,
              child: Text('${index + 1}'),
            ),
            title: Text(widget.tracks[index].title),
            trailing: index == selectedIndex
                ? const Icon(Icons.graphic_eq, color: AppColors.gold)
                : const Icon(Icons.play_arrow_rounded),
            onTap: () => Navigator.pop(context, index),
          ),
        ),
      ),
    );
    if (index != null) await _selectTrack(index, autoPlay: true);
  }

  @override
  void dispose() {
    subscription?.cancel();
    player.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => GlassPanel(
    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 9),
    borderRadius: 24,
    child: Row(
      children: [
        IconButton(
          tooltip: 'အသံစာရင်း',
          onPressed: _showPlaylist,
          icon: const Icon(Icons.queue_music_rounded, color: AppColors.gold),
        ),
        Expanded(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                selectedTrack.title,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(fontWeight: FontWeight.w700),
              ),
              Text(
                error ?? '${selectedIndex + 1} / ${widget.tracks.length}',
                style: TextStyle(
                  color: error == null ? AppColors.muted : Colors.redAccent,
                  fontSize: 11,
                ),
              ),
            ],
          ),
        ),
        if (loading)
          const Padding(
            padding: EdgeInsets.all(12),
            child: SizedBox(
              width: 22,
              height: 22,
              child: CircularProgressIndicator(strokeWidth: 2),
            ),
          )
        else
          IconButton.filled(
            onPressed: error != null
                ? () => _selectTrack(selectedIndex, autoPlay: false)
                : player.playing
                ? player.pause
                : player.play,
            icon: Icon(
              error != null
                  ? Icons.refresh
                  : player.playing
                  ? Icons.pause_rounded
                  : Icons.play_arrow_rounded,
            ),
          ),
      ],
    ),
  );
}

class LibraryScreen extends ConsumerWidget {
  const LibraryScreen({super.key});
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final selected = ref.watch(formatFilterProvider);
    final selectedCategory = ref.watch(categoryFilterProvider);
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
              if (selectedCategory != null) ...[
                Align(
                  alignment: Alignment.centerLeft,
                  child: InputChip(
                    avatar: const Icon(Icons.category_outlined, size: 18),
                    label: Text(selectedCategory),
                    selected: true,
                    onDeleted: () =>
                        ref.read(categoryFilterProvider.notifier).state = null,
                  ),
                ),
                const SizedBox(height: 10),
              ],
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

class ProfileScreen extends ConsumerWidget {
  const ProfileScreen({super.key});

  Future<void> _refresh(WidgetRef ref) => Future.wait([
    ref.read(preferencesProvider.notifier).refresh(),
    ref.read(favoritesProvider.notifier).refresh(),
    ref.read(historyProvider.notifier).refresh(),
  ]);

  @override
  Widget build(BuildContext context, WidgetRef ref) => ScreenBackground(
    child: Scaffold(
      backgroundColor: Colors.transparent,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: const Text('မိမိအကောင့်'),
        centerTitle: true,
      ),
      body: RefreshIndicator.adaptive(
        onRefresh: () => _refresh(ref),
        child: ListView(
          physics: const AlwaysScrollableScrollPhysics(),
          padding: const EdgeInsets.fromLTRB(20, 12, 20, 110),
          children: [
            GlassPanel(
              blur: false,
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
                    'ပဇ္ဇောတမှ ကြိုဆိုပါသည်',
                    style: TextStyle(color: AppColors.muted),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 18),
            _SettingsTile(
              icon: Icons.history,
              title: 'နားထောင်ခဲ့သော မှတ်တမ်း',
              onTap: () => context.push('/settings/history'),
            ),
            _SettingsTile(
              icon: Icons.download_outlined,
              title: 'ဒေါင်းလုဒ်များ',
              onTap: () => context.push('/settings/downloads'),
            ),
            _SettingsTile(
              icon: Icons.notifications_none,
              title: 'အသိပေးချက်များ',
              onTap: () => context.push('/settings/notifications'),
            ),
            _SettingsTile(
              icon: Icons.text_fields,
              title: 'စာလုံးအရွယ်အစား',
              onTap: () => context.push('/settings/reader'),
            ),
            _SettingsTile(
              icon: Icons.language,
              title: 'ဘာသာစကား',
              onTap: () => context.push('/settings/language'),
            ),
            _SettingsTile(
              icon: Icons.info_outline,
              title: 'အက်ပ်အကြောင်း',
              onTap: () => context.push('/settings/about'),
            ),
            const SizedBox(height: 18),
            const Center(
              child: Text(
                'ပဇ္ဇောတ • v1.0.0',
                style: TextStyle(color: AppColors.muted, fontSize: 12),
              ),
            ),
          ],
        ),
      ),
    ),
  );
}

class HistoryScreen extends ConsumerWidget {
  const HistoryScreen({super.key});
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final ids = ref.watch(historyProvider);
    return ScreenBackground(
      child: Scaffold(
        backgroundColor: Colors.transparent,
        appBar: AppBar(
          backgroundColor: Colors.transparent,
          title: const Text('နားထောင်ခဲ့သော မှတ်တမ်း'),
          actions: [
            if (ids.isNotEmpty)
              TextButton(
                onPressed: () => ref.read(historyProvider.notifier).clear(),
                child: const Text('ရှင်းမည်'),
              ),
          ],
        ),
        body: ref
            .watch(contentProvider)
            .when(
              data: (content) {
                final byId = {for (final item in content) item.id: item};
                final items = ids
                    .map((id) => byId[id])
                    .whereType<DhammaContent>()
                    .toList();
                return items.isEmpty
                    ? const _Empty(
                        message:
                            'ဖတ်ရှု သို့မဟုတ် နားထောင်ထားသော မှတ်တမ်း မရှိသေးပါ',
                      )
                    : ListView(
                        padding: const EdgeInsets.fromLTRB(20, 12, 20, 32),
                        children: items
                            .map(
                              (item) => Padding(
                                padding: const EdgeInsets.only(bottom: 12),
                                child: ContentCard(item: item),
                              ),
                            )
                            .toList(),
                      );
              },
              loading: () => const Center(child: CircularProgressIndicator()),
              error: (error, _) => _ErrorPanel(message: '$error'),
            ),
      ),
    );
  }
}

class DownloadsScreen extends ConsumerWidget {
  const DownloadsScreen({super.key});
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final savedIds = ref.watch(favoritesProvider);
    return ScreenBackground(
      child: Scaffold(
        backgroundColor: Colors.transparent,
        appBar: AppBar(
          backgroundColor: Colors.transparent,
          title: const Text('ဒေါင်းလုဒ်များ'),
        ),
        body: ref
            .watch(contentProvider)
            .when(
              data: (content) {
                final downloadable = content
                    .where(
                      (item) =>
                          savedIds.contains(item.id) &&
                          item.audioUrl?.isNotEmpty == true,
                    )
                    .toList();
                return ListView(
                  padding: const EdgeInsets.fromLTRB(20, 12, 20, 32),
                  children: [
                    const GlassPanel(
                      child: Row(
                        children: [
                          GoldIcon(Icons.download_for_offline_outlined),
                          SizedBox(width: 14),
                          Expanded(
                            child: Text(
                              'သိမ်းထားသော MP3 တရားတော်များကို ဤနေရာတွင် အော့ဖ်လိုင်းဒေါင်းလုဒ် စီမံနိုင်ပါသည်။',
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 18),
                    if (downloadable.isEmpty)
                      const _Empty(
                        message:
                            'ဒေါင်းလုဒ်လုပ်နိုင်သော MP3 တရားတော် မရှိသေးပါ',
                      )
                    else
                      ...downloadable.map(
                        (item) => Padding(
                          padding: const EdgeInsets.only(bottom: 12),
                          child: ContentCard(item: item),
                        ),
                      ),
                  ],
                );
              },
              loading: () => const Center(child: CircularProgressIndicator()),
              error: (error, _) => _ErrorPanel(message: '$error'),
            ),
      ),
    );
  }
}

class NotificationSettingsScreen extends ConsumerWidget {
  const NotificationSettingsScreen({super.key});
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final enabled = ref.watch(preferencesProvider).notificationsEnabled;
    return _SettingsScaffold(
      title: 'အသိပေးချက်များ',
      children: [
        GlassPanel(
          child: SwitchListTile.adaptive(
            contentPadding: EdgeInsets.zero,
            title: const Text('တရားတော်အသစ် အသိပေးရန်'),
            subtitle: const Text(
              'အသစ်တင်သော တရားတော်နှင့် ဓမ္မစာပေများ',
              style: TextStyle(color: AppColors.muted),
            ),
            value: enabled,
            onChanged: (value) async {
              final messenger = ScaffoldMessenger.of(context);
              final service = ref.read(notificationServiceProvider);
              try {
                if (value) {
                  final allowed = await service.enable();
                  if (!allowed) {
                    await ref
                        .read(preferencesProvider.notifier)
                        .setNotifications(false);
                    messenger.showSnackBar(
                      const SnackBar(
                        content: Text(
                          'ဖုန်း Settings တွင် notification ခွင့်ပြုပေးပါ။',
                        ),
                      ),
                    );
                    return;
                  }
                } else {
                  await service.disable();
                }
                await ref
                    .read(preferencesProvider.notifier)
                    .setNotifications(value);
                messenger.showSnackBar(
                  SnackBar(
                    content: Text(
                      value
                          ? 'တရားတော်အသစ် အသိပေးချက် ဖွင့်ပြီးပါပြီ။'
                          : 'အသိပေးချက် ပိတ်ပြီးပါပြီ။',
                    ),
                  ),
                );
              } catch (error) {
                messenger.showSnackBar(
                  SnackBar(content: Text('အသိပေးချက် ချိတ်ဆက်မရပါ: $error')),
                );
              }
            },
          ),
        ),
        const SizedBox(height: 14),
        const Text(
          'ဖွင့်ထားပါက dhamma_updates topic မှ တရားတော်အသစ် အသိပေးချက်များကို လက်ခံရရှိပါမည်။',
          style: TextStyle(color: AppColors.muted, height: 1.6),
        ),
      ],
    );
  }
}

class ReaderSettingsScreen extends ConsumerWidget {
  const ReaderSettingsScreen({super.key});
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final fontSize = ref.watch(preferencesProvider).readerFontSize;
    return _SettingsScaffold(
      title: 'စာလုံးအရွယ်အစား',
      children: [
        GlassPanel(
          child: Column(
            children: [
              Row(
                children: [
                  const Text('A−'),
                  Expanded(
                    child: Slider(
                      min: 14,
                      max: 28,
                      divisions: 14,
                      value: fontSize,
                      onChanged: (value) => ref
                          .read(preferencesProvider.notifier)
                          .setReaderFontSize(value),
                    ),
                  ),
                  const Text('A+'),
                ],
              ),
              const Divider(),
              Text(
                'ဓမ္မစာပေ ဖတ်ရှုရန် နမူနာစာသား',
                style: TextStyle(fontSize: fontSize, height: 2),
              ),
            ],
          ),
        ),
      ],
    );
  }
}

class LanguageSettingsScreen extends ConsumerWidget {
  const LanguageSettingsScreen({super.key});
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final selected = ref.watch(preferencesProvider).language;
    const languages = ['မြန်မာ', 'English'];
    return _SettingsScaffold(
      title: 'ဘာသာစကား',
      children: languages
          .map(
            (language) => Padding(
              padding: const EdgeInsets.only(bottom: 10),
              child: GlassPanel(
                onTap: () => ref
                    .read(preferencesProvider.notifier)
                    .setLanguage(language),
                padding: const EdgeInsets.symmetric(
                  horizontal: 16,
                  vertical: 8,
                ),
                child: ListTile(
                  contentPadding: EdgeInsets.zero,
                  leading: Icon(
                    Icons.language,
                    color: selected == language
                        ? AppColors.gold
                        : AppColors.muted,
                  ),
                  title: Text(language),
                  trailing: selected == language
                      ? const Icon(Icons.check_circle, color: AppColors.gold)
                      : const Icon(
                          Icons.circle_outlined,
                          color: AppColors.muted,
                        ),
                ),
              ),
            ),
          )
          .toList(),
    );
  }
}

class AboutScreen extends StatelessWidget {
  const AboutScreen({super.key});
  @override
  Widget build(BuildContext context) => const _SettingsScaffold(
    title: 'အက်ပ်အကြောင်း',
    children: [
      GlassPanel(
        child: Column(
          children: [
            CircleAvatar(
              radius: 42,
              backgroundImage: AssetImage('assets/images/app_icon.png'),
            ),
            SizedBox(height: 14),
            Text(
              'ပဇ္ဇောတ',
              style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700),
            ),
            SizedBox(height: 5),
            Text('Version 1.0.0', style: TextStyle(color: AppColors.gold)),
            Divider(height: 30),
            Text(
              'ဗုဒ္ဓတရားတော်၊ အသံတရား၊ ရုပ်သံနှင့် ဓမ္မစာပေများကို လွယ်ကူစွာ လေ့လာနိုင်ရန် ဖန်တီးထားသော အက်ပ်ဖြစ်ပါသည်။',
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    ],
  );
}

class _SettingsScaffold extends StatelessWidget {
  const _SettingsScaffold({required this.title, required this.children});
  final String title;
  final List<Widget> children;
  @override
  Widget build(BuildContext context) => ScreenBackground(
    child: Scaffold(
      backgroundColor: Colors.transparent,
      appBar: AppBar(backgroundColor: Colors.transparent, title: Text(title)),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(20, 12, 20, 32),
        children: children,
      ),
    ),
  );
}

class ContentCard extends ConsumerWidget {
  const ContentCard({required this.item, this.blur = true, super.key});
  final DhammaContent item;
  final bool blur;
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final favorite = ref.watch(favoritesProvider).contains(item.id);
    return GlassPanel(
      blur: blur,
      onTap: () => context.push('/content/${item.id}'),
      padding: const EdgeInsets.all(12),
      child: Row(
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(15),
            child: Image.asset(
              'assets/images/buddha_hero.png',
              width: 88,
              height: 88,
              fit: BoxFit.cover,
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
    final formats = _displayFormats(widget.item.formats);
    selected = formats.isNotEmpty ? formats.first : ContentFormat.text;
    Future.microtask(
      () => ref.read(historyProvider.notifier).record(widget.item.id),
    );
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
                Image.asset('assets/images/buddha_hero.png', fit: BoxFit.cover),
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
                children: _displayFormats(item.formats)
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

class TextReaderPanel extends ConsumerWidget {
  const TextReaderPanel({required this.text, super.key});
  final String text;
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final size = ref.watch(preferencesProvider).readerFontSize;
    return GlassPanel(
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
                onPressed: () => ref
                    .read(preferencesProvider.notifier)
                    .setReaderFontSize((size - 1).clamp(14, 28)),
                icon: const Text('A−'),
              ),
              IconButton(
                onPressed: () => ref
                    .read(preferencesProvider.notifier)
                    .setReaderFontSize((size + 1).clamp(14, 28)),
                icon: const Text('A+'),
              ),
              const Icon(Icons.bookmark_border),
            ],
          ),
          const Divider(),
          SelectableText(text, style: TextStyle(fontSize: size, height: 2)),
        ],
      ),
    );
  }
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
  const _SettingsTile({
    required this.icon,
    required this.title,
    required this.onTap,
  });
  final IconData icon;
  final String title;
  final VoidCallback onTap;
  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.only(bottom: 9),
    child: GlassPanel(
      blur: false,
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 11),
      onTap: onTap,
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

class _CompactEmpty extends StatelessWidget {
  const _CompactEmpty({required this.message});
  final String message;
  @override
  Widget build(BuildContext context) => GlassPanel(
    child: Row(
      children: [
        const Icon(Icons.info_outline, color: AppColors.gold),
        const SizedBox(width: 12),
        Expanded(
          child: Text(message, style: const TextStyle(color: AppColors.muted)),
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

/// Keep the detail actions predictable, rather than relying on Set iteration.
/// Video is primary; reading is always shown last.
List<ContentFormat> _displayFormats(Set<ContentFormat> formats) => const [
  ContentFormat.video,
  ContentFormat.audio,
  ContentFormat.text,
].where(formats.contains).toList(growable: false);
IconData _categoryIcon(String key) => switch (key) {
  'meditation' => Icons.self_improvement,
  'headphones' => Icons.headphones_rounded,
  'video' => Icons.ondemand_video_rounded,
  'dharma' => Icons.brightness_7_outlined,
  'lotus' => Icons.spa_outlined,
  'prayer' => Icons.volunteer_activism_outlined,
  _ => Icons.auto_stories_outlined,
};
String _duration(Duration d) =>
    '${d.inMinutes.remainder(60).toString().padLeft(2, '0')}:${d.inSeconds.remainder(60).toString().padLeft(2, '0')}';

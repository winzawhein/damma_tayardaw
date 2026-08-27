enum ContentFormat { audio, video, text }

class DhammaSection {
  const DhammaSection({required this.title, required this.content});
  final String title;
  final String content;
}

class DhammaAudioTrack {
  const DhammaAudioTrack({required this.title, required this.url});
  final String title;
  final String url;
}

class DhammaCategory {
  const DhammaCategory({
    required this.id,
    required this.name,
    required this.iconKey,
    required this.sortOrder,
    this.article = '',
    this.audioUrl = '',
    this.sections = const [],
    this.audios = const [],
  });
  final String id;
  final String name;
  final String iconKey;
  final int sortOrder;
  final String article;
  final String audioUrl;
  final List<DhammaSection> sections;
  final List<DhammaAudioTrack> audios;

  List<DhammaSection> get readableSections => sections.isNotEmpty
      ? sections
      : article.trim().isEmpty
      ? const []
      : [DhammaSection(title: name, content: article)];

  List<DhammaAudioTrack> get audioTracks => audios.isNotEmpty
      ? audios
      : audioUrl.trim().isEmpty
      ? const []
      : [DhammaAudioTrack(title: name, url: audioUrl)];

  factory DhammaCategory.fromMap(String id, Map<String, dynamic> map) =>
      DhammaCategory(
        id: id,
        name: map['name'] as String? ?? '',
        iconKey: map['iconKey'] as String? ?? 'book',
        sortOrder: (map['sortOrder'] as num?)?.toInt() ?? 0,
        article: map['article'] as String? ?? map['text'] as String? ?? '',
        audioUrl: map['audioUrl'] as String? ?? '',
        sections: _parseSections(map['sections']),
        audios: _parseAudioTracks(map['audios']),
      );
}

List<DhammaSection> _parseSections(dynamic value) {
  if (value is! List) return const [];
  return value
      .whereType<Map>()
      .map((entry) {
        final map = Map<String, dynamic>.from(entry);
        return DhammaSection(
          title: map['title'] as String? ?? '',
          content: map['content'] as String? ?? map['text'] as String? ?? '',
        );
      })
      .where(
        (section) => section.title.isNotEmpty || section.content.isNotEmpty,
      )
      .toList();
}

List<DhammaAudioTrack> _parseAudioTracks(dynamic value) {
  if (value is! List) return const [];
  return value
      .whereType<Map>()
      .map((entry) {
        final map = Map<String, dynamic>.from(entry);
        return DhammaAudioTrack(
          title: map['title'] as String? ?? map['name'] as String? ?? '',
          url: map['url'] as String? ?? map['audioUrl'] as String? ?? '',
        );
      })
      .where((track) => track.title.isNotEmpty && track.url.isNotEmpty)
      .toList();
}

class DhammaContent {
  const DhammaContent({
    required this.id,
    required this.title,
    required this.teacher,
    required this.category,
    required this.summary,
    required this.formats,
    required this.duration,
    required this.publishedAt,
    this.audioUrl,
    this.youtubeVideoId,
    this.article,
    this.featured = false,
  });
  final String id, title, teacher, category, summary;
  final Set<ContentFormat> formats;
  final Duration duration;
  final DateTime publishedAt;
  final String? audioUrl, youtubeVideoId, article;
  final bool featured;

  factory DhammaContent.fromMap(String id, Map<String, dynamic> map) =>
      DhammaContent(
        id: id,
        title: map['title'] as String? ?? '',
        teacher: map['teacher'] as String? ?? '',
        category: map['category'] as String? ?? '',
        summary: map['summary'] as String? ?? '',
        formats: _parseFormats(map),
        duration: Duration(
          seconds: (map['durationSeconds'] as num?)?.toInt() ?? 0,
        ),
        publishedAt:
            DateTime.tryParse(map['publishedAt'] as String? ?? '') ??
            DateTime.now(),
        audioUrl: map['audioUrl'] as String?,
        youtubeVideoId: map['youtubeVideoId'] as String?,
        article: map['article'] as String?,
        featured: map['featured'] as bool? ?? false,
      );

  Map<String, dynamic> toMap() => {
    'title': title,
    'teacher': teacher,
    'category': category,
    'summary': summary,
    'formats': formats.map((e) => e.name).toList(),
    'durationSeconds': duration.inSeconds,
    'publishedAt': publishedAt.toIso8601String(),
    'audioUrl': audioUrl,
    'youtubeVideoId': youtubeVideoId,
    'article': article,
    'featured': featured,
  };
}

Set<ContentFormat> _parseFormats(Map<String, dynamic> map) {
  final result = <ContentFormat>{};
  for (final value in map['formats'] as List<dynamic>? ?? const []) {
    if (value == 'audio') result.add(ContentFormat.audio);
    if (value == 'video') result.add(ContentFormat.video);
    if (value == 'text') result.add(ContentFormat.text);
  }
  if (result.isEmpty && (map['audioUrl'] as String? ?? '').isNotEmpty) {
    result.add(ContentFormat.audio);
  }
  if (result.isEmpty && (map['youtubeVideoId'] as String? ?? '').isNotEmpty) {
    result.add(ContentFormat.video);
  }
  if (result.isEmpty && (map['article'] as String? ?? '').isNotEmpty) {
    result.add(ContentFormat.text);
  }
  return result;
}

abstract interface class DhammaRepository {
  Future<List<DhammaContent>> getPublished();
  Future<DhammaContent?> getById(String id);
  Future<List<DhammaCategory>> getCategories();
}

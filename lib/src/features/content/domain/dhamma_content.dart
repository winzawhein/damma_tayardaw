enum ContentFormat { audio, video, text }

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
        formats: (map['formats'] as List<dynamic>? ?? const [])
            .map((v) => ContentFormat.values.byName(v as String))
            .toSet(),
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

abstract interface class DhammaRepository {
  Future<List<DhammaContent>> getPublished();
  Future<DhammaContent?> getById(String id);
}

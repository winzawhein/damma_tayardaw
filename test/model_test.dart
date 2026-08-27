import 'package:flutter_test/flutter_test.dart';
import 'package:gawdama_tayardaw/src/features/content/domain/dhamma_content.dart';

void main() {
  test('Dhamma content round-trips through Firestore map shape', () {
    final item = DhammaContent(
      id: 'one',
      title: 'တရားတော်',
      teacher: 'ဆရာတော်',
      category: 'သုတ္တန်',
      summary: 'နမူနာ',
      formats: const {ContentFormat.audio, ContentFormat.text},
      duration: const Duration(minutes: 12),
      publishedAt: DateTime(2026, 8, 26),
      audioUrl: 'https://example.com/a.mp3',
    );
    final restored = DhammaContent.fromMap(item.id, item.toMap());
    expect(restored.title, item.title);
    expect(restored.formats, item.formats);
    expect(restored.duration, item.duration);
  });
}

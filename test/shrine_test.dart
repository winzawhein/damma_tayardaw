import 'dart:convert';
import 'dart:io';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:gawdama_tayardaw/src/features/shrine/shrine_progress.dart';
import 'package:gawdama_tayardaw/src/features/shrine/shrine_server.dart';
import 'package:gawdama_tayardaw/src/features/shrine/shrine_assets.dart';

class _Bundle extends CachingAssetBundle {
  @override
  Future<ByteData> load(String key) async =>
      ByteData.sublistView(Uint8List.fromList(utf8.encode(key)));
}

void main() {
  test('offerings persist once per day and reject unknown kinds', () async {
    SharedPreferences.setMockInitialValues({});
    final prefs = await SharedPreferences.getInstance();
    final progress = ShrineProgress(prefs);
    final day = DateTime(2026, 10, 13);
    await progress.offered('water', day);
    await progress.offered('water', day);
    await progress.offered('social', day);
    expect(ShrineProgress(prefs).offerings(day), {
      'water': true,
      'flowers': false,
      'candle': false,
    });
    expect(
      progress.offerings(DateTime(2026, 10, 14)).values,
      everyElement(false),
    );
    await progress.save(muted: true, labels: false, aura: 'gold');
    expect(ShrineProgress(prefs).muted, isTrue);
    expect(ShrineProgress(prefs).labels, isFalse);
    expect(ShrineProgress(prefs).aura, 'gold');
  });
  test('asset manifest matches all bundled scene resources', () {
    final files = Directory('assets/shrine3d')
        .listSync(recursive: true)
        .whereType<File>()
        .where((f) => !f.path.split('/').last.startsWith('.'))
        .map((f) => f.path.substring('assets/shrine3d/'.length))
        .toSet();
    expect(files, shrineAssets);
    final js = File('assets/shrine3d/shrine.js').readAsStringSync();
    expect(js, contains('f1={}'));
    expect(js, contains('["community","leaderboard","tea"].includes(n.id)'));
  });
  test(
    'loopback server serves allowed assets and rejects other paths',
    () async {
      final server = ShrineServer(bundle: _Bundle());
      final client = HttpClient();
      try {
        final uri = await server.start();
        final response = await (await client.getUrl(uri)).close();
        expect(response.statusCode, 200);
        expect(response.headers.contentType!.mimeType, 'text/html');
        expect(
          await utf8.decoder.bind(response).join(),
          'assets/shrine3d/index.html',
        );
        for (final path in [
          uri.replace(path: '/index.html'),
          uri.resolve('private.txt'),
          uri.resolve('../pubspec.yaml'),
        ]) {
          final denied = await (await client.getUrl(path)).close();
          expect(denied.statusCode, 404);
          await denied.drain<void>();
        }
      } finally {
        client.close(force: true);
        await server.close();
      }
    },
  );
}

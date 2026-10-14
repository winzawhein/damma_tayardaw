import 'dart:io';
import 'dart:math';
import 'package:flutter/services.dart';
import 'shrine_assets.dart';

/// Loopback-only server: WebGL textures and audio fetches require an HTTP origin.
class ShrineServer {
  ShrineServer({AssetBundle? bundle}) : bundle = bundle ?? rootBundle;
  final AssetBundle bundle;
  HttpServer? _server;
  final String _token = List.generate(
    24,
    (_) => Random.secure().nextInt(256).toRadixString(16).padLeft(2, '0'),
  ).join();
  Future<Uri> start() async {
    final server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
    _server = server;
    server.listen(_serve);
    return Uri.parse('http://127.0.0.1:${server.port}/$_token/index.html');
  }

  Future<void> _serve(HttpRequest request) async {
    final response = request.response;
    try {
      final segments = request.uri.pathSegments;
      final asset = segments.skip(1).join('/');
      if (request.method != 'GET' ||
          segments.isEmpty ||
          segments.first != _token ||
          !shrineAssets.contains(asset)) {
        response.statusCode = HttpStatus.notFound;
        return;
      }
      final bytes = await bundle.load('assets/shrine3d/$asset');
      final extension = asset.split('.').last;
      final mime =
          {
            'html': 'text/html; charset=utf-8',
            'js': 'application/javascript',
            'webp': 'image/webp',
            'ttf': 'font/ttf',
            'm4a': 'audio/mp4',
          }[extension] ??
          'application/octet-stream';
      response.headers.set(HttpHeaders.contentTypeHeader, mime);
      response.headers.set('X-Content-Type-Options', 'nosniff');
      response.headers.set(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; media-src 'self' blob:; connect-src 'self'; frame-src 'none'",
      );
      response.add(
        bytes.buffer.asUint8List(bytes.offsetInBytes, bytes.lengthInBytes),
      );
    } catch (_) {
      response.statusCode = HttpStatus.internalServerError;
    } finally {
      await response.close();
    }
  }

  Future<void> close() async {
    await _server?.close(force: true);
    _server = null;
  }
}

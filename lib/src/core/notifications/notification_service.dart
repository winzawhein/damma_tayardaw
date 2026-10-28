import 'dart:async';

import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shared_preferences/shared_preferences.dart';

const String dhammaUpdatesTopic = 'dhamma_updates';
const String _notificationPreferenceKey = 'notifications_enabled';
const String _permissionRequestedKey = 'notification_permission_requested';
const String _channelId = 'dhamma_updates';
const String _channelName = 'Dhamma updates';

@pragma('vm:entry-point')
Future<void> firebaseMessagingBackgroundHandler(RemoteMessage message) async {
  await Firebase.initializeApp();
}

final notificationServiceProvider = Provider<NotificationService>(
  (ref) => NotificationService.instance,
);

class NotificationService {
  NotificationService._();

  static final NotificationService instance = NotificationService._();

  final FirebaseMessaging _messaging = FirebaseMessaging.instance;
  final FlutterLocalNotificationsPlugin _localNotifications =
      FlutterLocalNotificationsPlugin();
  StreamSubscription<RemoteMessage>? _foregroundSubscription;
  StreamSubscription<String>? _tokenSubscription;

  Future<void> initialize() async {
    const initializationSettings = InitializationSettings(
      android: AndroidInitializationSettings('ic_stat_dhamma'),
      iOS: DarwinInitializationSettings(
        requestAlertPermission: false,
        requestBadgePermission: false,
        requestSoundPermission: false,
      ),
    );
    await _localNotifications.initialize(settings: initializationSettings);

    const channel = AndroidNotificationChannel(
      _channelId,
      _channelName,
      description: 'New Dhamma talks and Buddhist reading updates',
      importance: Importance.high,
    );
    await _localNotifications
        .resolvePlatformSpecificImplementation<
          AndroidFlutterLocalNotificationsPlugin
        >()
        ?.createNotificationChannel(channel);

    await _messaging.setForegroundNotificationPresentationOptions(
      alert: true,
      badge: true,
      sound: true,
    );

    await _foregroundSubscription?.cancel();
    _foregroundSubscription = FirebaseMessaging.onMessage.listen(
      _showForegroundNotification,
    );
    await _tokenSubscription?.cancel();
    _tokenSubscription = _messaging.onTokenRefresh.listen((token) {
      debugPrint('FCM token refreshed: $token');
    });

    // Migrate the old UI-only preference safely. A saved `true` is kept only
    // when the operating system has already granted notification permission.
    final preferences = await SharedPreferences.getInstance();
    if (preferences.getBool(_notificationPreferenceKey) ?? false) {
      final settings = await _messaging.getNotificationSettings();
      if (_isAuthorized(settings.authorizationStatus)) {
        await _messaging.subscribeToTopic(dhammaUpdatesTopic);
      } else {
        await preferences.setBool(_notificationPreferenceKey, false);
      }
    }
  }

  Future<bool> enable() async {
    final settings = await _messaging.requestPermission(
      alert: true,
      badge: true,
      sound: true,
    );
    if (!_isAuthorized(settings.authorizationStatus)) return false;

    await _messaging.subscribeToTopic(dhammaUpdatesTopic);
    final token = await _messaging.getToken();
    debugPrint('FCM token: $token');
    return true;
  }

  /// Requests notification permission only once, on the first app launch.
  /// Returns null after the first request so a later app launch never changes
  /// the choice made from the profile notification switch.
  Future<bool?> requestPermissionOnFirstLaunch() async {
    final preferences = await SharedPreferences.getInstance();
    if (preferences.getBool(_permissionRequestedKey) ?? false) return null;

    final allowed = await enable();
    await preferences.setBool(_permissionRequestedKey, true);
    return allowed;
  }

  Future<void> disable() => _messaging.unsubscribeFromTopic(dhammaUpdatesTopic);

  Future<String?> getToken() => _messaging.getToken();

  bool _isAuthorized(AuthorizationStatus status) =>
      status == AuthorizationStatus.authorized ||
      status == AuthorizationStatus.provisional;

  Future<void> _showForegroundNotification(RemoteMessage message) async {
    final notification = message.notification;
    if (notification == null) return;

    await _localNotifications.show(
      id: message.messageId?.hashCode ?? message.hashCode,
      title: notification.title ?? 'ပဇ္ဇောတ',
      body: notification.body,
      payload: message.data['contentId'] as String?,
      notificationDetails: const NotificationDetails(
        android: AndroidNotificationDetails(
          _channelId,
          _channelName,
          channelDescription: 'New Dhamma talks and Buddhist reading updates',
          importance: Importance.high,
          priority: Priority.high,
        ),
        iOS: DarwinNotificationDetails(),
      ),
    );
  }
}

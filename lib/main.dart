import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'src/app.dart';
import 'src/core/notifications/notification_service.dart';
import 'src/features/content/data/repositories.dart';
import 'src/features/content/presentation/providers.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  FirebaseMessaging.onBackgroundMessage(firebaseMessagingBackgroundHandler);
  await NotificationService.instance.initialize();
  runApp(
    ProviderScope(
      overrides: [
        repositoryProvider.overrideWithValue(
          FirestoreDhammaRepository(FirebaseFirestore.instance),
        ),
      ],
      child: const GawdamaTayardawApp(),
    ),
  );
}

# Gawdama Tayardaw

A production-oriented Flutter starter for a Myanmar Buddhist Dhamma library. It uses Riverpod, a clean repository boundary, reusable liquid-glass components, GoRouter navigation, real MP3 streaming, a YouTube demo player, a Burmese text reader, and an optional Firestore data source.

## Included

- Dark charcoal and antique-gold liquid-glass visual system based on the supplied reference
- Original Buddha hero/brand artwork derived from the reference, used in the home hero and launcher icon
- Home, category shortcuts, searchable library, Audio/Video/Text filters, saved items, and profile/settings UI
- Real `just_audio` player with seek, play/pause, timeline, and download-ready controls
- YouTube player demo using the supported iframe-based player (no extracted MP4 URLs)
- Burmese text reader with selectable text and adjustable font size
- Riverpod providers, persistent local favorites, GoRouter stateful bottom navigation
- `DhammaRepository` contract, local sample implementation, Firestore implementation, mapping model, sample Firestore document, and starter security rules
- Android and iOS projects plus generated app icons
- Firebase Cloud Messaging permission, topic subscription, background handler,
  and visible foreground notifications

## Run with Firebase on Android

Requirements: Flutter 3.41 or newer and a configured Android/iOS toolchain.

The Android app is registered as `com.gawdama.gawdama_tayardaw`. Its matching
`google-services.json` is installed under `android/app`, and the Google Services
Gradle plugin uses Kotlin DSL.

```sh
flutter pub get
flutter run
```

The default `lib/main.dart` initializes Firebase and uses
`FirestoreDhammaRepository`.

## Firebase Console setup

1. Open the `damma-tayardaw` Firebase project.
2. In **Build → Firestore Database**, create the database.
3. Create a `dhamma_contents` collection using `firebase/sample_document.json` as the field shape.
4. Create a `dhamma_categories` collection using `firebase/sample_category.json`.
5. Review and deploy `firebase/firestore.rules` (the sample expects an `admin` custom claim for app-side writes).
6. Run `flutter run`.

Each category document uses `name` (string), `iconKey` (string), `sortOrder`
(number), `active` (boolean), `sections` (array of maps), and `audios` (array
of maps). Each section map contains `title` and `content`; each audio map
contains `title` and a direct MP3 `url`. Supported icon keys are `meditation`,
`headphones`, `video`, `dharma`, `lotus`, `prayer`, and `book`. A content
document's `category` string must exactly match the category document's `name`.

The `formats` field in `dhamma_contents` is an array. Each item inside that
array is a string with one of these exact values: `audio`, `video`, or `text`.

## Test push notifications on Android

1. Run the app on an Android device or an emulator that includes Google Play
   services.
2. Open **Profile → Notifications** and enable the switch. Accept Android's
   notification permission prompt. The app subscribes to the
   `dhamma_updates` FCM topic.
3. For a device-specific test, copy the `FCM token:` value from the Flutter
   debug console. In **Firebase Console → Messaging**, create a notification,
   choose **Send test message**, paste the token, and send it.
4. For all opted-in users, send a notification whose target is the
   `dhamma_updates` topic.

The Firebase Console can send manual announcements without a custom server.
Automatically sending a push whenever a new published Firestore document is
created requires a trusted environment such as Cloud Functions using the
Firebase Admin SDK. Never place an FCM server key or service-account credential
inside the Flutter app.

## Media policy and production notes

- Store YouTube video IDs/URLs and play them through YouTube. Do not extract temporary MP4/MP3 streams from YouTube.
- Put audio you own or license in Firebase Storage, Cloudflare R2, or a CDN, then store the direct MP3/HLS URL in Firestore.
- The included SoundHelix audio and Big Buck Bunny YouTube ID are connectivity/player demos; replace them before release.
- Download, sleep timer, playback speed, and account are implemented as ready UI. Production offline audio should add a download manager, local file index, `audio_service` for lock-screen/background playback, and rights-aware storage rules.

## Architecture

```text
lib/
├── main.dart                    Firebase entrypoint
└── src/
    ├── app.dart                 router and app shell
    ├── core/
    │   ├── notifications/       Firebase Messaging + local alert service
    │   ├── theme/               colors and Material theme
    │   └── widgets/             reusable glass components
    └── features/content/
        ├── domain/              entity + repository contract
        ├── data/                sample + Firestore repositories
        └── presentation/        providers, screens, players
```

`main.dart` initializes Firebase and overrides Riverpod's `repositoryProvider`
with `FirestoreDhammaRepository`, so all published content is read from Firestore.

## Quality checks

```sh
dart format --output=none --set-exit-if-changed lib test
flutter analyze
flutter test
```

## Branding asset prompt

The project asset was produced with the built-in image generation workflow using the supplied UI as a style reference: a centered serene seated golden Buddha, subtle halo, candlelight, charcoal temple atmosphere, antique-gold palette, no text, no border, and no phone UI. The source is `assets/images/buddha_hero.png`; `assets/images/app_icon.png` is its square launcher crop.

## Practice and learning

Home now has a **လေ့ကျင့်မှုနှင့် လေ့လာမှု** shortcut at `/practice`.
The existing Home, Library, Saved and Profile tabs and Firestore repository
remain in use. This module adds no social feed, posts, comments, chat or account
requirement.

- Offline Dhammapada browser: 423 verses, text/verse search, a daily verse,
  Pali/Myanmar/English reading and the existing reader font-size controls.
- Offline quizzes: 3,564 supplied questions in 12 categories, randomized
  ten-question sessions, answer explanations and an end-of-session score.
- Listening: 14 supplied YouTube entries using the existing video player.
  Playback needs internet and depends on the original videos remaining available.
- Prayer counter: persistent count, 108-bead rounds, undo and confirmed reset.
- Meditation timer: preset durations, pause/resume and reset. The countdown
  reconciles elapsed time when the app resumes. It is a foreground tool: leaving
  the screen ends the session, and it does not schedule a background alarm.
- Daily practice checklist: five activities stored locally per calendar date,
  with previous-day browsing. It does not sync to Firebase.

The three JSON files under `assets/data/` were extracted from the supplied
`ဒိဝါတပတိ (1).apk`. Dhammapada attribution is preserved verbatim and shown in
its reader. The supplied quiz is imported content, not independently reviewed
religious scholarship. No remote backend was copied or connected, and the APK's
branding, artwork and audio recordings were not imported. This APK contains no
Flutter native application binary, so its complete feature behavior could not
be verified; the new screens are independent Flutter implementations.

Validation includes dataset integrity, local progress persistence, date-scoped
checklists, counter interaction, timer controls and offline reader navigation.

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
4. Review and deploy `firebase/firestore.rules` (the sample expects an `admin` custom claim for app-side writes).
5. Run `flutter run`.

## Media policy and production notes

- Store YouTube video IDs/URLs and play them through YouTube. Do not extract temporary MP4/MP3 streams from YouTube.
- Put audio you own or license in Firebase Storage, Cloudflare R2, or a CDN, then store the direct MP3/HLS URL in Firestore.
- The included SoundHelix audio and Big Buck Bunny YouTube ID are connectivity/player demos; replace them before release.
- Download, sleep timer, playback speed, account, and notifications are implemented as ready UI. Production offline audio should add a download manager, local file index, `audio_service` for lock-screen/background playback, and rights-aware storage rules.

## Architecture

```text
lib/
├── main.dart                    Firebase entrypoint
└── src/
    ├── app.dart                 router and app shell
    ├── core/
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

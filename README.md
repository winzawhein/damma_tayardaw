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
branding, artwork and audio recordings were not imported for the practice module. This APK contains no
Flutter native application binary, so its complete feature behavior could not
be verified; the new screens are independent Flutter implementations.

Validation includes dataset integrity, local progress persistence, date-scoped
checklists, counter interaction, timer controls and offline reader navigation.


## Interactive shrine

The center **ဘုရားကျောင်း** bottom tab opens `/shrine`. Home, Library,
Saved and Profile remain available. The former Home shortcut has been removed.

The active sanctuary restores the temple layout with ivory-and-gold textures,
jade labels and a fine gold frame. It retains the latest Buddha image, the
original water/flowers/lamp/gong animations and interactive practice hotspots.
The center shrine tab uses a larger gold medallion and a gentle breathing glow,
with the pulse disabled when the system requests reduced motion.

The four offering controls save daily completion locally. The gong performs
merit sharing. Sound, halo and hint settings persist. Drag gently to adjust
the camera. Reduced-motion preferences disable ambient motion. The scene adapts rendering quality to the device, and animation/audio pauses on tab changes, app background
and practice navigation. Practice shortcuts open the existing counter,
listening, reading, quiz and checklist screens. No social flow is included.

The scene uses a token-protected loopback asset server; only bundled assets
are served. External navigation and frames are blocked. Android cleartext is
limited to explicit loopback domains with `includeSubdomains="false"` (required
by release lint). iOS permits local networking. A rendering failure shows Retry.
WebGL2 and Android/iOS WebView are required. Browser rendering is verified;
physical-device smoothness still needs testing on the target phone.

Release builds keep the project's existing signing configuration. Configure
your production signing key before distributing through an app store.


### Ivory temple refresh

The center shrine tab now has a raised gold medallion with a breathing halo;
reduced-motion settings disable the pulse. The temple layout and original
water/flowers/lamp/gong ritual animations are restored using the ivory theme,
jade labels and fine gold border decorations. The latest Buddha image is kept.
`index.html` loads the adapted `shrine.js` scene again; `sanctuary.js` is an
inactive earlier design. Existing practice shortcuts and local daily offering
progress remain unchanged.


### Readability and lightweight rendering

The mobile low-quality label override now uses opaque jade with ivory text in
both normal and lite modes. Header icons and practice links use explicit dark
colors on ivory, and the system status icons are dark. The bottom navigation
uses a flat black surface; the center gold shrine button protrudes above it.
Its animation runs only briefly on entry/selection, stops at rest, and respects
reduced motion. A repaint boundary isolates it from the scene.

The shrine now requests `q=low&qmode=saver`: renderer pixel ratio 1, no
post-processing, bloom, MSAA or dynamic shadows. This lowers GPU work without
removing the offering animations. Real-device frame time has not been profiled.


### Notched navigation and illustrated offerings

The center medallion now sits in a curved cradle cut into the charcoal bottom
bar. Other destinations again use the original rounded gold-gradient selected
panels. The offering tray uses the supplied illustrated study/water/flowers/
lamp/gong/shrine assets in gold circular frames, with horizontal navigation.
Completed offerings keep their artwork and show a small completion badge.

The lightweight renderer remains enabled. Its label loop now skips removed
social hotspot elements, preventing repeated access to missing DOM elements.

### ပဇ္ဇောတ — dependent origination study wheel

The display name is now ပဇ္ဇောတ on Android, iOS, and app surfaces. Package IDs,
Firebase configuration, and saved preferences stay unchanged so existing installs
retain their data.

Home → ပဋိစ္စသမုပ္ပါဒ် စက်ဝိုင်း (also under Practice) opens `/dhamma-wheel`.
The offline native Flutter screen includes twelve selectable links, four temporal
cause/result groups, three rounds, arising/cessation notes, and an adjustable
projected 3D wheel. Drag changes rotation/tilt; flat view supports reading.
Rendering is event-driven, without a WebView or an idle ticker. Reduced-motion
settings disable selection animation. Numbered nodes and text chips support
accessible selection. Source links open externally and require connectivity.

The Burmese summaries are study notes, not a verbatim sermon or an audio recording.
Sources: SN 12.2, https://accesstoinsight.org/tipitaka/sn/sn12/sn12.002.than.html;
U Candavarabhivamsa, Mogok Yeiktha, *The Cycle of Dependent Origination*, pp. 8–14,
https://dhammadownload.com/MP3Library/Mogok-Mp3-Ver2/pdf/MogokSayadawPaticcasamuppada.pdf.
The four groups follow the detailed explanation on pp. 8–10 (2/5/3/2 links),
rather than the inconsistent contents list on p. 7. Bhava in the cause group
represents kamma-bhava; the note distinguishes resultant existence.

### Sculpted wheel and shrine rendering budget

`PhysicalDhammaWheel` isolates drag updates from the study text, projects solid
brass/enamel geometry, and uses a bounded 550 ms ease-out after a fling. It stops
when settled and respects reduced motion. The shrine's saver mode now rests its
render loop when gestures, camera transitions, and rituals finish. A small
30-second time-of-day refresh remains; gestures and native bridge calls wake it
immediately. Background pause clears the pending refresh. Idle decorative motion
is intentionally frozen to reduce GPU work, while offering/gong rituals retain
active rendering. Run `node test/js/shrine_motion_test.cjs` for the scheduler checks.

### Center chooser and classic Kanok shrine

The raised center button opens a dimmed two-choice overlay. Choosing the shrine
selects its existing shell branch; choosing the Dhamma wheel pushes its study
route. Closing the chooser leaves the current screen intact. Other navigation
branches keep their existing behavior.

The shrine uses the classic wood/gold scene with a new local SVG Kanok frieze,
a warm header (settings, feature menu, sound, help), an overlaid six-item offering
tray, and an ivory navigation cradle. The tray supports study, water, flowers,
candles, background audio, and returning to the altar. Merit sharing remains on
the scene's gong hotspot. Existing beads, listening, planner and study screens
remain reachable through scene labels and the feature menu. No social feed is
added. SVG is explicitly allowlisted and served with its proper MIME type.
The saver-mode scheduler also wakes on resize to redraw the WebView canvas.

### Animated launch

The app renders a dark/gold vector light-and-lotus introduction immediately while
Firebase and notifications initialize. The 1.8-second animation runs once; reduced
motion skips its delay. Application routes and first-launch permission prompts are
created only after initialization completes. Initialization errors offer a retry.
The emblem uses native painting with no video, 3D engine, or continuous idle ticker.
Android and iOS native launch backgrounds match the Flutter splash.

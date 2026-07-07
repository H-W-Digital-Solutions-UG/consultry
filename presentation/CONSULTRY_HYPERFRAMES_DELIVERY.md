# Consultry HyperFrames Delivery

Status: refined review package
Updated: 2026-06-28

This file identifies the current final HyperFrames video outputs and the source projects used to render them. The machine-readable source of truth is `presentation/hyperframes-delivery-manifest.json`; this document is the readable handoff.

## Review Surface

- Local review page: `presentation/consultry-hyperframes-review.html`
- Browser smoke-test screenshot: `presentation/consultry-hyperframes-review-screenshot.png`
- Machine-readable delivery manifest: `presentation/hyperframes-delivery-manifest.json`
- Local film server: `presentation/serve-hyperframes-delivery.mjs`
- Brand assets: `presentation/consultry-hyperframes-video/assets/consultry-v3.svg`, `presentation/consultry-hyperframes-video/assets/consultry-v3-dark.svg`, plus the mirrored files in the second-brain project.

The review page embeds only the two final MP4s below and links their source HTML, scripts, speaker timelines, storyboards, contact sheets and poster frames.

Run the local review and film server from the repository root:

```sh
npm --prefix presentation run serve
```

The server binds to `127.0.0.1`, starting at port `4179` and moving up if that port is already in use. It prints the review page URL and the direct MP4 URLs.

## Final Videos

### 1. Win Projects Spine

- Final MP4: `presentation/consultry-hyperframes-video/renders/consultry-hyperframes-google-voice.mp4`
- 720p MP4: `presentation/consultry-hyperframes-video/renders/consultry-hyperframes-google-voice-720p.mp4`
- Poster frame: `presentation/consultry-hyperframes-video/renders/consultry-hyperframes-google-voice-poster.jpg`
- Contact sheet: `presentation/consultry-hyperframes-video/renders/consultry-hyperframes-google-voice-contact-sheet.jpg`
- Source HTML: `presentation/consultry-hyperframes-video/index.html`
- Voiceover: `presentation/consultry-hyperframes-video/assets/voiceover-google-25s.mp3`
- Script: `presentation/consultry-hyperframes-video/SCRIPT.md`
- Speaker timeline: `presentation/consultry-hyperframes-video/SPEAKER_SCRIPT_TIMELINE.md`
- Storyboard: `presentation/consultry-hyperframes-video/STORYBOARD.md`
- Duration: 25.024s
- Video: 1920x1080, H.264, 24fps
- Audio: AAC

Positioning: project acquisition, Ausschreibungen, Clay/Apollo-style selling signals, CRM context, consultant C.V.s, proof and offer planning.

### 2. Knowledge / Second Brain Spine

- Final MP4: `presentation/consultry-hyperframes-second-brain-video/renders/consultry-hyperframes-second-brain-google-voice.mp4`
- Poster frame: `presentation/consultry-hyperframes-second-brain-video/renders/consultry-hyperframes-second-brain-google-voice-poster.jpg`
- Contact sheet: `presentation/consultry-hyperframes-second-brain-video/renders/consultry-hyperframes-second-brain-google-voice-contact-sheet.jpg`
- Source HTML: `presentation/consultry-hyperframes-second-brain-video/index.html`
- Voiceover: `presentation/consultry-hyperframes-second-brain-video/assets/voiceover-second-brain-google.mp3`
- Script: `presentation/consultry-hyperframes-second-brain-video/SCRIPT.md`
- Speaker timeline: `presentation/consultry-hyperframes-second-brain-video/SPEAKER_SCRIPT_TIMELINE.md`
- Storyboard: `presentation/consultry-hyperframes-second-brain-video/STORYBOARD.md`
- Duration: 22.037s
- Video: 1920x1080, H.264, 24fps
- Audio: AAC

Positioning: scattered work to trusted corpus, Hermes Harness, graph/triplet memory, source-backed answers, redundant work detection and team alignment.

## Verification

Run from each project directory:

```sh
npm run check
```

Run the delivery package verifier from the repository root:

```sh
npm --prefix presentation run verify
npm --prefix presentation run verify:full
node presentation/verify-hyperframes-delivery.mjs
node presentation/verify-hyperframes-delivery.mjs --full
```

The default verifier reads `presentation/hyperframes-delivery-manifest.json` and checks delivery docs, brand SVG assets, local review-page links, review-page references to the manifest-declared final assets, absence of non-final draft references in the review page, local source-HTML links, the local serve entry point, final MP4 metadata, declared MP4 renditions such as the 720p export, poster frames, contact sheets, voiceover durations and the browser smoke-test screenshot. The `--full` mode also runs `npm run check` inside both HyperFrames projects and fails the delivery if HyperFrames emits a warning.

Current expected result for both projects:

- HyperFrames lint: 0 errors, 0 warnings
- HyperFrames validate: no console errors
- HyperFrames validate: media duration check completes with the project `--timeout 60000` script setting
- HyperFrames inspect: 0 layout issues

Probe final video metadata:

```sh
ffprobe -v error -show_entries format=duration,size -show_entries stream=index,codec_type,codec_name,width,height,r_frame_rate,duration -of json renders/<final-video>.mp4
```

Optional animation-map note: the local HyperFrames `animation-map.mjs` helper currently fails because `@hyperframes/producer` is not installed in the local skill cache. The normal HyperFrames gates above are clean.

## Non-Final Draft Artifacts

The following files are retained as drafts or older exports and should not be treated as the final HyperFrames delivery:

- `presentation/consultry-hyperframes-video/renders/consultry-hyperframes-preproduct.mp4`
- `presentation/consultry-hyperframes-video/renders/consultry-hyperframes-preproduct-contact-sheet.jpg`
- `presentation/consultry-hyperframes-video/assets/voiceover-google.mp3`
- `presentation/consultry-hyperframes-video/assets/voiceover.aiff`
- `presentation/exports/consultry-mvp-ad-clipframes/`

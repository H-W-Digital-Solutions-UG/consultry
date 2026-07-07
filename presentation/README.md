# Consultry Presentation Delivery

Current final HyperFrames review package:

- Review page: `consultry-hyperframes-review.html`
- Machine-readable manifest: `hyperframes-delivery-manifest.json`
- Human-readable handoff: `CONSULTRY_HYPERFRAMES_DELIVERY.md`
- Local film server: `serve-hyperframes-delivery.mjs`
- Verifier: `verify-hyperframes-delivery.mjs`

## Run

From the repository root:

```sh
npm --prefix presentation run serve
```

The server prints the review page URL and the direct MP4 URLs. It binds to `127.0.0.1`, starting at port `4179` and moving up if that port is already in use.

## Verify

From the repository root:

```sh
npm --prefix presentation run verify
```

For the full check, including both HyperFrames project validators:

```sh
npm --prefix presentation run verify:full
```

The full check fails on HyperFrames errors or warnings, not just non-zero exits.
It also verifies that the review page embeds and links the manifest-declared final assets, not draft exports.

The final video outputs are:

- `consultry-hyperframes-video/renders/consultry-hyperframes-google-voice.mp4`
- `consultry-hyperframes-video/renders/consultry-hyperframes-google-voice-720p.mp4`
- `consultry-hyperframes-second-brain-video/renders/consultry-hyperframes-second-brain-google-voice.mp4`

The review page and both videos use the supplied Consultry SVG logo assets. Older draft exports remain in this folder for context, but the manifest identifies which assets are final.

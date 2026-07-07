# CODEX TASK — Verify & tune gen-background wiring, then render (animated-pitch v2)

Run from this directory (`presentation/animated-pitch-video-v2-foreground/`). Node ≥18 and Google Chrome at `/Applications/Google Chrome.app` required (render script default).

## Context (read first, in this order)
1. `TIMELINE-RENDER-PLAN-v1.md` — the authoritative timeline: which frame sequence plays in which scene window, beat-switch logic, patch covers, all code anchors.
2. `CONCEPT-v3-app-mockup.md` — creative direction (why the backgrounds look like an app).
3. `pitch-scene.jsx` — already wired: `HookBackground`, `ProblemBackground`, `SolutionBackground` (M04→M05 switch @ scene-local 5.0, crossfade 0.45s, cream patch covers), `VertriebBackground`. Backup of pre-change state: `pitch-scene.jsx.bak-pre-genbg`.

## Hard constraints
- NEVER edit or re-encode anything in `uploads/gen-*-bg-frames/` or `renders/*.mp4` — videos are locked. All tuning happens in `pitch-scene.jsx` constants only.
- Do not change scene start/end times in the `<Scene>` timeline (lines near the bottom) — VO/music are locked to them.
- Do not touch `SceneFinanz` (deliberately video-free) or `SceneCTA`/`SceneWissen` structure (their clips don't exist yet).
- German copy strings must remain byte-identical.

## Steps

### 1. Smoke render + junction inspection
```bash
node render-pitch-video.mjs --smoke --smoke-times "2.5,5.1,9.0,15.5,19.6,23.5,27.5,33.5,36.0,39.3,50.0,68.5"
```
Inspect each smoke frame against the checklist in `TIMELINE-RENDER-PLAN-v1.md` §4.1. Specifically:

| t | Check |
|---|---|
| 2.5 | Coral line sits BELOW the headline block, no overlap |
| 5.1 | Hook→Problem crossfade clean, no double-line |
| 9.0 | Problem headline (y 170–390) clear of the fragmentation tree |
| 15.5 | Persistent logo bloom (center) over M04 halo — center of video must be empty behind logo |
| 19.6 | M04→M05 crossfade — no visible pop |
| 23.5 | Signal copy block + garble patch (cream rect @ 806/424) — patch must exactly cover the red micro-text, copy block inside lower Signal panel |
| 27.5 | Axis patch (1026/492 + 1078/718) covers ALL chart numbers |
| 33.5 | Typed query text sits INSIDE the video command bar |
| 36.0 | Proposal rows sit ON the video card bands, trust line inside card |
| 39.3 | Vertrieb→Wissen transition acceptable (Wissen still legacy JSX) |
| 50.0 | Finanz renders unchanged (no video) |
| 68.5 | CTA renders unchanged (legacy, clip pending) |

### 2. Tune offsets (JSX constants only)
If a patch or text block is misaligned, adjust ONLY these anchors in `pitch-scene.jsx`:
- Patch covers: the three `<div>`s in `SolutionBackground` (left/top/width/height, gates `rise(l2, 3.0)` / `rise(l2, 7.4)`).
- Signal/Team copy: `const W = 650, GAP = 106, X0 = 259, Y = 772;` in `SceneSolution` + `FEAT[].tIn`.
- Vertrieb overlays: the absolute `top` values 160 / 292 / 402 / 470 / 648 and left/right paddings in `SceneVertrieb`.
- Background opacities/scrims: the `op` and gradient values inside each `*Background` component.
Re-run the smoke with the affected times after each change. Iterate until all checks pass.

### 3. Layout render
```bash
node render-pitch-video.mjs --fps 30 --output renders/consultry-pitch-v2-layout.mp4
```
Watch it fully once. Verify: no garbled text visible anywhere in Solution (patches hold through motion), no double UI chrome (JSX shells were removed for Solution/Vertrieb), freezes invisible (Solution local 16.04–17.9).

### 4. Final render (only when 3 is clean)
```bash
node render-pitch-video.mjs --fps 60 --crf 16 --preset slow --output renders/consultry-pitch-v2-1080p60.mp4
```

## Acceptance criteria
- All §1 checks pass; zero readable garbled text in the whole film; German copy pixel-sharp (JSX-rendered, never from video); logo band always clean; Finanz/CTA/Wissen unchanged from legacy behavior.

## Out of scope for Codex
- Generating M07/M10 clips (happens via Higgsfield in Cowork) — when their frame dirs appear (`gen-wissen-bg-frames/`, `gen-cta-bg-frames/`), a follow-up task will wire them using the `VertriebBackground` pattern per `TIMELINE-RENDER-PLAN-v1.md` §2.

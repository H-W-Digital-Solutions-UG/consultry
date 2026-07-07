# animated-pitch-video-v2-foreground

**V2 "Foreground Edition" workspace** — created 2026-07-03. The big change happens HERE; the original `animated-pitch-video/` stays untouched as the working v1 (gen backgrounds wired for Hook + Problem only, v1-style with placeholder bars).

Backup of the pre-v2 state: `presentation/_BKP/animated-pitch-video-20260703-pre-v2-foreground/`.

## The change

Generated Higgsfield clips become **foreground UI stage sets** (cards, command bar, chart geometry, ambience — all in-video, zero text); `pitch-scene.jsx` keeps only **text-based overlays** (headlines, typed query, labels, € counters, badges, waitlist button) positioned onto the video geometry.

## Authoritative docs (copies here; originals in `../higgsfield-motion-film-context/`)

1. `Consultry-Higgsfield-Slide-BG-Prompts-v2.0.md` — per-scene generation prompts (apply v2.1 deltas!).
2. `Consultry-Overlay-Change-Plan-v1.0.md` — per-scene JSX KEEP/REMOVE/RETIME table with line refs + the v2.1 geometry deltas.

## Status / next steps

- [ ] Apply v2.1 prompt deltas → generate M01/M02 regen (bar-less) + M03–M10 via Higgsfield (scene-by-scene, prompt confirmed with Jules before each call; smoothed refs from `../higgsfield-motion-film-context/GENERATION_STATE.md`)
- [ ] Per passing clip: extract 24fps frame sequence into `uploads/gen-*-bg-frames/`, apply the Overlay-Change-Plan JSX edits for that scene in THIS folder's `pitch-scene.jsx`
- [ ] Convert SceneVertrieb to absolute positioning; remove float animations; retime Finanz counters to video diagonal
- [ ] Render check on Mac: `node render-pitch-video.mjs --smoke` (renders/ starts empty here)

## Inherited state

`pitch-scene.jsx` here already contains the v1 wiring (gen Hook + Problem backgrounds, `ProblemBackground` component) — build v2 edits on top. `uploads/gen-*-bg-frames/` contain the v1 M01/M02/M03 sequences; they will be replaced by v2 regens.

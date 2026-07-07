# Higgsfield media IDs — Consultry master refs (uploaded 2026-07-03)

| Frame | media_id |
|---|---|
| master_01 | 20553b41-09e1-4ad7-a3c5-be52a2d5f3c4 |
| master_02 | 8f3019dc-28c8-4130-9c23-0cd182f9ca8d |
| master_03 | ec52a079-cf5b-4250-b67f-c899e4f69d8e |
| master_04 | 729fa8a1-400d-4eb2-8e49-6a29a3558a21 |
| master_05 | fa4a41a7-239e-4bdb-b1ee-65a12b01d0a7 |
| master_06 | a699b453-dfb7-4c8d-9ce6-2f198c23f822 |
| master_07 | d718e030-80c4-410c-98f7-f8a8cbfaeb4a |
| master_08 | 35214426-e44e-444b-a6c2-d8727cab1fea |
| master_09 | 2bbf0b85-99bf-4cff-a2d4-eb28d2ab3ae1 |
| master_10 | 9a3f4f70-5ca0-4afa-b758-90060599c7cb |
| master_11 | 3779f5e6-c569-43d0-a301-ba1ecc28cff3 |

## Scene → refs
- M01: 01, 02 · 6s
- M02: 03, 04 · 7s
- M03: 04 · 6s
- M04: 05 · 6s
- M05: 06 · 9s
- M06: 07 · 8s
- M07: 09 (+01 optional) · 8s
- M08: 08 · 6s
- M09: 10 · 9s
- M10: 11 · 4s

## Video trims (secondary motion refs, from consultry-pitch-animation master)
| Trim | media_id | source segment |
|---|---|---|
| trim_m02_problem | 997ed0dc-5fad-4985-86c0-f0015a820d81 | 0:05–0:13 |
| trim_m04_reveal | 5df7d66d-839e-4135-8a90-f4522c1e2ec9 | 0:14–0:20 (wordmark risk) |
| trim_m05_platform | 32fa3139-a145-4392-a5aa-8931d00691a7 | 0:20–0:31 |
| trim_m06_offer | fe36dff9-b3a7-4dac-b1ee-1efc9a257f88 | 0:32–0:38 |
| trim_m07_knowledge | 99943ea6-f32d-42e5-8bff-557c00126e6e | 0:38–0:44 |
| trim_m09_chart | 2ee218e2-d478-4243-a1cb-46dc20cc9d33 | 0:53–1:04 |
| trim_m10_cta | 4f878451-187f-4eb1-8fc0-d6bf822c08da | 1:05–1:13 |

## SANITIZED master refs (text/logo-free, uploaded 2026-07-03, in /tmp/refs_final)
| Frame | media_id |
|---|---|
| san_master_01 | 346f1bc4-708e-46a9-a54b-dac17da1a2aa |
| san_master_02 | 8060b954-306a-4f88-92b3-b5177ebaee94 |
| san_master_03 | c746261c-e959-4742-bb12-f6e6192b2988 |
| san_master_04 | 270b7fcb-5ec4-44a7-ab12-c703948c774d |
| san_master_05 | 6d678a15-a662-445a-b822-6c7fb48e657a |
| san_master_06 | d154d5a7-6c3c-4395-bf96-0febba7e4757 |
| san_master_07 | c97d766e-5b55-4b45-ae71-fbfd6b6f0a36 |
| san_master_08 | aa04bdfa-b016-44da-a4c4-e58144f0e612 |
| san_master_09 | 0f55bb60-67fd-4655-bf15-fd8ff0a2d5e6 |
| san_master_10 | 0ca5fda6-7091-4dae-9819-26c9082bbf62 |
| san_master_11 | a83e8824-0c74-47ff-ac69-6852f03cdc5c |

## SMOOTHED refs (v2 sanitized — mosaic blocks removed; USE THESE)
| Frame | media_id |
|---|---|
| smooth_master_01 | 94545e77-8f2a-4a67-834d-d993f2f5ffb6 |
| smooth_master_02 | 16d6e986-af90-4eac-b561-07c7ac49c552 |
| smooth_master_03 | e1485ead-e1af-4afc-bd32-4dbf9dda3fd0 |
| smooth_master_04 | efc45627-7e10-4d4b-bb01-7aee21e0544c |
| smooth_master_05 | 64e8417d-1d36-4a2c-a00b-6c0f66abf9a3 |
| smooth_master_06 | bfd7e18a-2590-46d4-9764-b24d5325d78a |
| smooth_master_07 | a4bd2515-73f3-4764-80b1-37e25a8a83ea |
| smooth_master_08 | b13d74df-d8ff-48c6-9109-e8d3013b7762 |
| smooth_master_09 | 286f1207-d31b-47ee-9843-27d14212ca4b |
| smooth_master_10 | 6cccd6d5-9698-4353-9768-253e459b1d91 |
| smooth_master_11 | 7449bfcb-8ec1-4b6f-b56b-dae8baa6ceda |

USE SMOOTHED refs for generation. First sanitized batch caused mosaic-block artifacts (M03 v1); originals caused text/logo bleed (M01 v1). Add to every prompt: "background is a perfectly smooth even espresso gradient — no pixelation, no mosaic, no blocky patches".
Workflow rules: (1) confirm prompt+refs with user before every generate_video call; (2) explicit on-screen text inventory in every prompt, minimal bars; (3) no people / cinematic shots — pure animated explainer; (4) wait for each video, no constant polling; (5) scene-by-scene approval.

## Generated scene job IDs
- M01 v1: 63f7a5b7-7c07-449e-96c1-d01641b7ef86 — FAILED QC (wordmark, garbled text, photoreal person)
- M01 v2: db6113dd-a299-4d51-9407-e35fb3e9c71e — APPROVED → renders/m01_hook.mp4
- M02 v1: 56bf17a8-b178-47e2-b73d-ae0d5f15da5f — APPROVED → renders/m02_problem.mp4
- M03 v1: 2a42d8c2-e1dc-4fee-95aa-32f50cc7f048 — DRAFT, mosaic patch top-center → renders/m03_knowledge_loss_DRAFT-mosaic-issue.mp4

## SLIDE-BG INTEGRATION (2026-07-03)
Gen clips are BACKGROUND VIDEOS for the animated-pitch-video slides (pitch-scene.jsx renders them as 24fps JPEG frame sequences, clamped/frozen at last frame).
- uploads/gen-hook-bg-frames/ (129 fr, M01 head-trimmed 0.65s) — wired into HookBackground (replaces old boardroom footage)
- uploads/gen-problem-bg-frames/ (169 fr, M02) — new ProblemBackground component, replaces ScatterTools in SceneProblem
- uploads/gen-knowledgeloss-bg-frames/ (145 fr, M03 draft) — staged, no scene wired yet
- Backup: pitch-scene.jsx.bak-pre-genbg. Re-render on Mac: node render-pitch-video.mjs (--smoke first).
- Scene timings in JSX: Hook 0–5.35 · Problem 4.85–15.0 · Solution 14.5–32.4 · Vertrieb 31.9–39.6 · Wissen 39.0–45.9 · Finanz 45.45–66.3 · CTA 65.9–73.5. Future gen scenes must fit these (or timeline gets edited).

## PAUSED 2026-07-03 by user, mid Task 3 (M02–M05 arc)
Next step on resume: user decides M03 retry (smoothed refs + anti-mosaic line, ~54cr) vs accept draft. Then M04 (refs smooth_05, 6s), M05 (refs smooth_06, 9s), M06 (smooth_07, 8s), M07 (smooth_09+01, 8s), M08 (smooth_08, 6s), M09 (smooth_10, 9s), M10 (smooth_11, 4s). Confirm each prompt with user before generating. Budget used so far: ~225 cr of 2982.

## V2 FOREGROUND WORKSPACE (2026-07-03)
Big change isolated: `presentation/animated-pitch-video-v2-foreground/` (see its README-V2.md).
Backup: `presentation/_BKP/animated-pitch-video-20260703-pre-v2-foreground/`.
Original `animated-pitch-video/` = stable v1. All v2 generation + JSX overlay edits happen in the v2 folder, per Consultry-Overlay-Change-Plan-v1.0.md.

## V2.1 RUN (started 2026-07-03, plan: animated-pitch-video-v2-foreground/FINAL-GENERATION-RUN-v2.1.md)
- Clip 1 M01 v2.1: 3bbe54b4-8f02-4a54-baab-75fba57dd4d3 (6s, refs smooth_01+smooth_08)
- Clip 1 M01 v2.1 take1: 3bbe54b4 FAILED QC (line at 48% center, must be 72%)
- Clip 1 M01 v2.1 take2: 5a776cce-2222-4b7a-a07c-1e63167ed446 (hardened lower-third language)
- Clip 2 M02 v2.1: 06fb27ba-6dda-4b94-8537-1bef0de6b4dd (10s, center band 36-64% protected)
- V2.2 "Layered Depth" direction adopted (user: v2.1 too simplistic). Three planes: far=blurred UI silhouettes, mid=1px wireframes/threads, near=crisp coral line/cream cards/tiles. Reserved zones may hold far-plane texture only. M02 v2.1 take (06fb27ba) had "705%" text + 3D cubes — style direction right, violations noted.
- Clip 1 M01 v2.2: 2ff8418e-5500-4064-9c86-c7ec13dd42f9 (6s, layered depth)
- Clip 2 M02 v2.2: 781299dd-4dcb-49e9-8258-00ba22d5d2b1 (10s, layered depth, flat-tiles enforced)
- M01 v2.2 (2ff8418e) LOCKED -> v2 renders/m01_hook_v22.mp4, frames wired (129)
- M02 v2.2 (781299dd) ACCEPTED (tree occupies center; JSX Problem text moved to 16-34% band, sizes 84/56/76) -> renders/m02_problem_v22.mp4, frames wired (241)
- V2 jsx: Hook/Problem scrims lightened (op 0.95), PROBLEM_BG_FRAME_COUNT=241
- NEXT: clip 3 M04 reveal halo (7s) in v2.2 layered-depth language, then M05-M10
- Clip 3 M04 v2.2: 59fb3aa9-198d-4e7f-88e3-38dc469def62 (7s, reveal halo, empty center)
- M04 v2.2 (59fb3aa9) ACCEPTED by user (neon frame kept) -> renders/m04_reveal_v22.mp4, frames gen-solution1-bg-frames
- Clip 4 M05 v2.2: 884a0744-6646-4046-bc30-e4e70c5cdd84 (11s, cards @30/70%, IN-VIDEO titles 'Signal'/'Team' per user keyword directive)
- Clip 4 M05 v2.2 (884a0744) PASS - titles 'Signal'/'Team' rendered correctly in-video; cards ~25/74% (JSX offsets to follow clip) -> renders/m05_platform_v22.mp4, frames gen-solution2-bg-frames (265)
- Clip 5 M06 v2.2: 32c9506b-54ab-47d0-b61a-c4603e249816 (8s, command bar + Angebot card)
- Clip 5 M06 v2.2 (32c9506b) PASS - 'Angebot' correct; bar ~17%, card 55-88% (JSX offsets follow clip) -> renders/m06_offer_v22.mp4, frames gen-vertrieb-bg-frames
- Clip 6 M07 v2.2: 4708572f-6e6a-4298-9055-982c4a08dcc0 (7s, two cards Wissen/Risiken)
- Clip 6 M07 v2.2 take1 (4708572f): FAIL 'Risken' misspelled + stray 73% · take2: b2e934c1-af36-45e8-8922-6d8c019930ef
- V3 pivot: feature-deep Consultry app mockup (CONCEPT-v3-app-mockup.md), refinements: grounded in PRD surfaces + screen-recording realism + more depth.
- USER: M09/Finanz = NO video bg (JSX chart slide stays, clean espresso bg). Fancy app animation focus = M05 (Signal+Team) + M06 (Angebot canvas). M07 t2 QC pending.
- M05 v3 take1 (9925a5e7): DESIGN BREAKTHROUGH (real app UI) but garbled row labels + axis numbers -> take2: 18fe8b05 (5-word whitelist, bare axes)
- M07 v2.2 take2 (b2e934c1): FAIL again ('Risken' + literal 27/73) — M07 to be redone in v3 app style later
- JSX CUT (v2 workspace): SolutionBackground (M04→M05 switch @5.0s local, crossfade) + VertriebBackground wired; FEAT cards & Vertrieb converted to text-only overlays on video geometry; compile OK. TODO: offsets after M05-v3 QC; SceneWissen unwired pending M07 v3.
- M05 v3 take3 (f5345529) LOCKED by user -> renders/m05_platform_v3.mp4, frames gen-solution2-bg-frames (265, overwritten)
- JSX adapted: cream patch-covers over hallucinated labels (Signal top-right garble @ 806/424; Team axis strip @ 1026/492; x-labels strip @ 1078/718), gated to appear with panel build; FEAT copy blocks repositioned into free lower panel zones (x 259/1015, y 772, w 650)
- Compile OK. Remaining to generate: M07 v3 (Wissen app screen), M10 CTA. M08/M09: no video (user decision). M06 v2.2 wired; may get v3 app-style regen later if desired.
- M08-POSITIONING v3 (46-54s window, Finanz Phase A): 1be80003-6146-4a0c-b160-fe666f6c670d (8s, chatbot-dismiss + 5-module agent pipeline, whitelist Signal/Angebot/Staffing/Wissen/Abrechnung)
- M08-POSITIONING take1 (1be80003): FAIL (% coords leaked as labels, row mid-frame, 'Abeciehung') · take2: 34db0b01-1879-456c-a983-88d127c8499a (verbal-only coords, bottom quarter, hard Abrechnung spelling). LESSON: never write % coordinates in prompts — they render as labels.

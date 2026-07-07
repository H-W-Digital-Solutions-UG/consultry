# Consultry Higgsfield Slide-Background Prompts v2.0 — Foreground Edition

> **v2.1 geometry corrections live in `Consultry-Overlay-Change-Plan-v1.0.md` ("Prompt deltas") — apply them on top of the prompts below before generating.** Key changes: M07 rewritten to a two-card layout; M05/M06/M09/M10 coordinates aligned to the real pitch-scene.jsx geometry; M09 gains the dashed cost line.

Supersedes `FINAL_SCENE_PROMPTS.md` for slide-background generation. One generation call per scene, Seedance 2.0, `16:9`, `1080p`, `std`, `generate_audio: false`.

## What changed vs v1

The generated clips are **background videos for the slides** in `presentation/animated-pitch-video/pitch-scene.jsx`. The JSX presentation layer renders the real logo, all German text blocks, and animated HTML (buttons, labels, counters) **on top**. Therefore:

1. **Foreground orientation.** The SaaS-app UI elements (cream cards, coral provenance line, chart geometry, tool tiles) are crisp hero objects in the fore/midground — bold, high contrast, not dimmed texture. The JSX layer no longer draws its own duplicate UI; the video carries the UI stagecraft.
2. **Zero text of any kind.** No placeholder bars anymore (v1 used blurred bars — obsolete). Card and panel interiors are **clean blank cream surfaces**. JSX types the real copy directly onto them.
3. **Geometry contract.** Elements sit at specified positions (% of frame) so the JSX overlays align. Every scene keeps the **top 15% logo band empty** plus scene-specific reserved zones.
4. **Freeze-friendly endings.** JSX plays sequences at 24fps and clamps on the last frame; every scene ends fully settled and holds ≥0.35s. Scenes shorter than their slide simply freeze.
5. **References:** use the *smoothed* sanitized master frames (`GENERATION_STATE.md` → SMOOTHED refs). Never the originals (text/logo bleed) nor the first sanitized batch (mosaic artifacts).

## Slide map (JSX timeline, 73.5s)

| Slide | JSX window | Scene(s) | Gen duration → freeze |
|---|---|---|---|
| Hook | 0–5.35s | M01 | 6s, head-trim 0.65s |
| Problem | 4.85–15.0s | M02 | 10s → freeze ~0.2s |
| Solution | 14.5–32.4s | M04 (beat 1) + M05 (beat 2) | 6s + 12s → freeze rest |
| Vertrieb | 31.9–39.6s | M06 | 8s → freeze |
| Wissen | 39.0–45.9s | M07 | 7s → freeze |
| Finanz | 45.45–66.3s | M08 (beat 1) + M09 (beat 2) | 6s + 12s → freeze rest |
| CTA | 65.9–73.5s | M10 | 8s → freeze |

M03 (Knowledge Loss) has no slide yet — staged as optional Problem beat 3 or its own slide insert.

## Shared Style Lock v2 — prepend to every prompt

```text
Premium 2D motion graphics animation, flat vector-style SaaS app UI with subtle layered 2.5D depth, high-end B2B animated explainer. Dark warm espresso-brown Consultry stage, deep brown-black, never grey. Crisp cream UI panels and cards, one signature warm coral provenance line, stone-grey outlines and threads. Precise mechanical cubic easing, clean snap-to-grid assembly, generous negative space, restrained enterprise design. Camera locked. Pure abstract motion design: no humans, no photorealistic elements.

FOREGROUND ORIENTATION: the UI elements are the crisp hero foreground of the shot — bold, sharply rendered, clearly separated from the dark stage. This video is a stage set; a separate HTML layer will composite the real logo, all text, and interactive elements on top.

ZERO TEXT CONTRACT: absolutely no text, letterforms, glyphs, words, numbers, placeholder bars, or blurred text bars anywhere. All card and panel interiors are clean, blank, evenly-lit cream surfaces. The background is a perfectly smooth even espresso gradient — no pixelation, no mosaic, no blocky patches.

GEOMETRY CONTRACT: keep the top 15% of the frame completely empty (logo band). Respect the reserved zones stated below. End the scene fully settled and hold still for at least the final 0.35 seconds.
```

## Global negative prompt v2 — append to every prompt

```text
Negative prompt: no letters, no words, no numbers, no typography, no placeholder bars, no blurred text bars, no fake wordmark, no logo, no emblem, no brand icons, no app logos, no humans, no silhouettes of people, no photorealistic footage, no neon glow, no lens flare, no particle explosion, no 3D extrusion, no playful bounce, no generic blue SaaS gradient, no high-saturation purple wash, no camera movement, no pixelation, no mosaic patches.
```

---

## M01 Hook · 6s (Hook slide, 5.35s, head-trim 0.65s)

**Reserved zones:** top 15% (logo) · center band y 32–66% (JSX headline "Ihre Kunden erwarten mehr." + subline).
**JSX overlays:** headline block center, gradient subline.
**Refs:** smooth_master_01 + smooth_master_08.

```text
The film opens on an almost empty dark espresso stage with a subtle vignette and barely visible interface grain. This scene has exactly ONE foreground element and nothing else.

0-1.5s: hold the calm dark stage.
1.5-3.5s: one hair-thin warm coral provenance line draws itself left to right across the frame at 72% height, steady and precise, sharp and luminous against the dark stage.
3.5-6s: the line settles; a very subtle warm glow breathes along it once, then everything holds fully still for the final 0.4s.

The middle of the frame from 32% to 66% height stays completely empty and calm. Nothing but the coral line and the stage.
```

## M02 Problem · 10s (Problem slide, 10.15s)

**Reserved zones:** top 15% · center band y 36–64% (JSX: "Das Problem?" → Aufzählung → "Verstreut…").
**JSX overlays:** two sequential centered statements.
**Refs:** smooth_master_03 + smooth_master_04.

```text
This scene shows fragmentation as crisp foreground stagecraft: consulting knowledge scattered across too many tools.

0-2s: the coral provenance line lying at 72% height frays into five thin stone-grey threads that curve outward toward the frame edges. At each thread end a small plain rounded-square tool tile pops in with a precise scale snap — crisp flat tiles in muted desaturated blue, red, purple and teal, sharply rendered in the foreground.
2-7s: more plain tiles and thin 1px stone-grey window outlines multiply in an irregular nervous rhythm, tilting slightly, crowding the lower third and climbing the left and right edges up to 70% height. The tiles stay bold and crisp — foreground objects, not dim texture. The center band between 36% and 64% height stays completely clear.
7-10s: all fragments freeze crooked at once into a deliberately disordered still-life, then hold completely still for the final 0.5s.

Every tile is a plain colored rounded square: no letters, no icons, no brand marks.
```

## M03 Knowledge Loss · 6s (optional insert)

**Reserved zones:** top 15% · upper center band y 18–34%.
**JSX overlays:** optional caption block upper center.
**Refs:** smooth_master_04.

```text
This scene shows knowledge risk: when context lives in disconnected places, it can leave the system.

0-2s: a crisp cream profile card sits slightly left of center at 55% height: rounded rectangle with one plain flat circular avatar disc (no face, no features) and an otherwise completely blank cream interior. Four hair-thin threads — one coral, three stone-grey — connect it to small plain document tiles at the right and lower edges. Calm tension, threads barely sway.
2-4s: the profile card lifts a few pixels and glides toward the right frame edge. Each thread pulls taut, then snaps in sequence with a tiny recoil, about 300ms apart.
4-6s: the card exits frame right. The orphaned document tiles dim slightly but stay crisp. Severed threads hang briefly and fade. Hold completely still for the final 0.4s.
```

## M04 Reveal · 6s (Solution slide beat 1)

**Reserved zones:** top 15% · **center disc x 34–66%, y 22–56% stays EMPTY** — the JSX layer renders the real Consultry logo reveal there.
**JSX overlays:** real logo + "Die Antwort: Consultry." block.
**Refs:** smooth_master_05.

```text
This is the reveal beat: the scattered chaos reverses and gathers, but the center belongs to the real logo composited later — the video only frames it.

0-2.5s: the scattered plain tiles and thread fragments from the problem scene reverse direction and contract inward in one controlled, elegant pull, shrinking and aligning as they travel.
2.5-4.5s: instead of forming a shape, the converging pieces dissolve into a soft warm radial glow that settles as a calm halo AROUND the central zone — the center itself (34-66% width, 22-56% height) stays completely empty and dark. One restrained warm orange-to-coral gradient breath passes through the halo, single pass, no burst.
4.5-6s: the halo steadies into a barely-breathing warm ambience. Lower third stays clean. Hold fully still for the final 0.4s.

Do not generate any emblem, hexagon, logo or symbol in the center. The center stays empty.
```

## M05 Platform · 12s (Solution slide beat 2)

**Reserved zones:** top 15% · upper band y 16–36% (JSX headline) · **card interiors blank** — JSX types Signal/Team copy into them.
**JSX overlays:** "Signal" and "Team" text blocks positioned onto the two video cards, small animated status chips.
**Refs:** smooth_master_06.

```text
This scene builds the operating system as foreground stagecraft: the coral line constructs two product cards that a UI layer will label later.

0-3.5s: the hair-thin coral provenance line enters from frame left at 58% height and draws the crisp outline of a large cream product card centered at 28% width, 58% height, spanning about 26% of frame width and 34% of frame height. The cream fill fades in behind the stroke: a clean, blank, evenly-lit cream surface with a hair-thin coral top border. Inside it, only ONE element: a small simple coral sparkline in the lower quarter of the card.
3.5-7s: the line continues right and constructs an identical second blank cream card centered at 72% width, 58% height. Inside it, only ONE element: three stone-grey utilization bars growing upward in sequence in the lower half of the card — plain rectangles, no scale marks.
7-10s: the coral line straightens into a bridge connecting both cards at their vertical midpoint. The hair-thin coral top border of each card brightens once, left then right.
10-12s: both cards hold as a stable pair with at most a 1% breathing scale, then freeze completely for the final 0.5s.

Both card interiors stay blank cream — no bars, no text shapes, no icons except the single sparkline (left card) and three plain bars (right card).
```

## M06 Offer · 8s (Vertrieb slide, 7.7s)

**Reserved zones:** top 12% · JSX types the question into the command bar and the offer copy into the proposal card.
**JSX overlays:** typed question text, proposal sections, provenance labels.
**Refs:** smooth_master_07.

```text
This scene translates the platform into a workflow: a question arrives, and a grounded proposal assembles — all surfaces blank for the UI layer.

0-2s: a slim dark rounded command bar floats at 28% height, spanning 25% to 75% of frame width: a clean dark blank surface with a small coral action disc at its right end. The bar pulses very subtly as if receiving input — but stays completely blank.
2-2.6s: the coral disc pulses once as the enter beat. A hair-thin coral line drops vertically from the bar's center.
2.6-6.5s: where the line lands, a large cream proposal card assembles: rounded rectangle from 25% to 75% width, 44% to 86% height. Four horizontal sections slide in from alternating sides and dock with precise snaps — each section a clean blank cream band separated by hair-thin stone-grey rules. Beside each section edge a tiny abstract provenance mark appears: a filled coral dot, a hollow stone circle, a small stone diamond, a filled coral dot.
6.5-8s: a hair-thin coral underline draws beneath the whole card. Everything freezes completely for the final 0.5s.

All surfaces stay blank: no text, no bars, no numbers. No browser chrome, no chat bubbles.
```

## M07 Knowledge · 7s (Wissen slide, 6.9s)

**Reserved zones:** top 15% · headline band y 16–34% (JSX: "Ihr Wissen ist da, wenn es zählt.").
**JSX overlays:** headline, answer copy inside the card, risk chip.
**Refs:** smooth_master_09 + smooth_master_01.

```text
This scene is the evidence beat: knowledge arrives framed and grounded, below the headline zone.

0-2s: four crisp cream corner brackets draw themselves around a central 16:9 evidence viewport centered at 50% width, 60% height, spanning about 44% of frame width — forming a 3px rounded frame. The viewport interior stays a calm very dark abstract texture, clearly darker than the stage.
2-4.5s: a small blank cream tab grows from the frame's lower right edge. A hair-thin coral thread draws from the tab down to a blank cream answer card unfolding at 74% width, 82% height — clean empty cream surface with a hair-thin coral top border.
4.5-7s: the answer card's coral top border brightens once as a confirmation beat. The thread stays taut. Everything freezes completely for the final 0.5s.

The band from 16% to 34% height stays completely clear. No faces, no footage, no text anywhere.
```

## M08 Positioning · 6s (Finanz slide beat 1)

**Reserved zones:** essentially the whole frame — JSX renders "Kein AI-Chatbot. Das Betriebssystem für Beratungsarbeit." center.
**JSX overlays:** two-line statement center.
**Refs:** smooth_master_08.

```text
The quietest scene in the film: a near-black warm espresso void that gives a composited statement absolute authority.

0-2.5s: absolute stillness. Only the dark warm gradient texture breathes barely perceptibly.
2.5-4s: one short hair-thin coral accent line, about 5% of frame width, fades in at 50% width, 68% height — a restrained anchor beneath statement typography composited later.
4-6s: the line dims to half intensity and the frame settles into total stillness for the final 0.5s.

Nothing else appears: no cards, no tiles, no shapes. The frame stays empty for the statement.
```

## M09 Business Case · 12s (Finanz slide beat 2)

**Reserved zones:** top 22% (JSX headline "Ein gesparter Beratertag zahlt Consultry…") · **stat card interiors blank** — JSX counts the € values on top.
**JSX overlays:** headline, four animated € counters placed onto the video's blank stat cards, footnote line.
**Refs:** smooth_master_10.

```text
This scene turns the provenance line into the ROI proof, drawn as crisp foreground chart geometry with blank value cards for the UI layer.

0-2.5s: a thin stone-grey baseline draws at 62% height from 15% to 85% width, with a short vertical axis rising at its left end. The top 22% of the frame stays completely calm.
2.5-6s: from the baseline's left end, the coral provenance line draws steadily up and to the right as one clean ROI diagonal, ending near 30% height at 82% width — sharp, luminous, the hero of the shot.
6-9s: four small coral dot markers set onto the diagonal in sequence at even intervals. Beneath each marker, a small blank cream stat card flips up from the baseline — clean empty cream rectangles at 25%, 42%, 59% and 76% width, all at 72% height, each with a hair-thin coral top border.
9-12s: the triangular area between diagonal and baseline fills with a very subtle 8% coral tint. Then the whole composition freezes completely for the final 0.5s.

All four stat cards stay blank cream — no numbers, no bars, no symbols. No 3D bars, no finance-dashboard blue.
```

## M10 CTA · 8s (CTA slide, 7.6s)

**Reserved zones:** top 15% + entire center block x 25–75%, y 18–75% — JSX renders the real logo, CTA copy and the animated waitlist button there.
**JSX overlays:** logo, three-line CTA, coral button with pulse.
**Refs:** smooth_master_11.

```text
The final plate: a calm stage that receives the real end-card content from the UI layer.

0-1.6s: the coral provenance line enters from frame left at the height where the chart ended and glides down into a smooth, calm signature-like horizontal underline at 78% height, spanning 30% to 70% of frame width.
1.6-4s: a soft warm radial ambience rises gently behind the reserved center block — a restrained orange-to-coral warmth at very low intensity, single slow swell, no burst, no rays. The center block itself stays empty and dark enough for light typography.
4-8s: the underline breathes once at 2% intensity and settles. Total stillness for the final 0.6s.

Do not generate any emblem, wordmark, button or text shape. The center stays empty for the composited end card.
```

---

## Integration notes (pitch-scene.jsx)

- **Overlay dimming:** foreground-oriented clips are meant to be seen — render backgrounds at opacity ~0.9–1.0 and replace global dark scrims with local text scrims/shadows behind the JSX text blocks (the Hook/Problem wiring from 2026-07-03 already moved this direction).
- **Card-targeted text (M05/M06/M09):** JSX text blocks must be positioned at the card coordinates specified above (% of 1920×1080). Verify against the delivered clip before final render — generation can drift a few percent; nudge JSX offsets, not the video.
- **Solution/Finanz beats:** two clips per slide — switch frame-sequence source at the beat boundary (M04→M05 at local ≈6s; M08→M09 at local ≈7s) with a 0.4s crossfade, mirroring the Scene shell's fade pattern.
- **JSX-drawn duplicates to remove when wiring:** SceneSolution's own card drawings (M05 carries them), SceneVertrieb's proposal card (M06), SceneWissen's viewport/answer card (M07), SceneFinanz's chart + stat card rectangles (M09 — keep only the € counters and headline).
- **Freeze behavior:** frame index clamps at the sequence end — every clip ends settled by design, so freezes are invisible.

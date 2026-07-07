# V2.1 Generation Run — durations, beats, final scene bodies

Refines v2.0 + Overlay-Change-Plan deltas into the executable run. Seedance 2.0 allows up to **15s** per clip — used only where a slide window genuinely needs it; longest clip in this run is **12s**. Freezes (JSX clamps the last frame) cover small remainders invisibly because every scene ends settled.

## Run table

| # | Scene | Slide window | Clip | Why this length | Refs (smoothed) | ~Cr |
|---|---|---|---|---|---|---|
| 1 | M01 Hook (regen, bar-less) | 5.35s | **6s** (head-trim 0.65) | fits window | 01, 08 | 54 |
| 2 | M02 Problem (regen, zero-text) | 10.15s | **10s** | covers window, no long freeze | 03, 04 | 90 |
| 3 | M04 Reveal halo | Solution local 0–7.3 (logo bloom) | **7s** | matches bloom beat | 05 | 63 |
| 4 | M05 Platform cards | Solution local ~6.9–17.9 | **11s** | covers rest of slide | 06 | 99 |
| 5 | M06 Offer | 7.7s | **8s** | fits | 07 | 72 |
| 6 | M07 Wissen (two-card rewrite) | 6.9s | **7s** | fits | 09 | 63 |
| 7 | M08 Positioning void | Finanz local 0–8.6 | **6s** | static void → freeze invisible | 08 | 54 |
| 8 | M09 Business case chart | Finanz local 8.8–20.85 | **12s** | longest active beat; 15s unnecessary | 10 | 108 |
| 9 | M10 CTA | 7.6s | **8s** | fits | 11 | 72 |

Total ≈ **75s / ~675 credits**. M03 stays staged (no slide). 15s reserved for retries where motion feels rushed.

Every call: Seedance 2.0 · 16:9 · 1080p · std · no audio · Shared Style Lock v2 + scene body + Global negative v2 (both in `Consultry-Higgsfield-Slide-BG-Prompts-v2.0.md`).

## Scene bodies (deltas applied — these override v2.0 where they differ)

### 1 · M01 Hook · 6s — unchanged from v2.0

### 2 · M02 Problem · 10s — unchanged from v2.0

### 3 · M04 Reveal · 7s (reserved center x 25–75%, y 24–52%)

```text
The reveal beat: scattered chaos reverses and gathers, but the center belongs to the real logo composited later — the video only frames it.

0-2.5s: scattered plain tiles and thread fragments reverse direction and contract inward in one controlled, elegant pull, shrinking and aligning as they travel.
2.5-5s: the converging pieces dissolve into a soft warm radial glow that settles as a calm halo AROUND the central zone — the center itself (25-75% width, 24-52% height) stays completely empty and dark. One restrained warm orange-to-coral gradient breath passes through the halo, single pass, no burst.
5-7s: the halo steadies into a barely-breathing warm ambience. Lower third stays clean. Hold fully still for the final 0.4s.

Do not generate any emblem, hexagon, logo or symbol in the center. The center stays empty.
```

### 4 · M05 Platform · 11s (cards x 30.4% / 69.6%, y 58.1%, 35.9% × 43.5%)

```text
This scene builds the operating system as foreground stagecraft: the coral line constructs two product cards that a UI layer will label later.

0-3.5s: the hair-thin coral provenance line enters from frame left at 58% height and draws the crisp outline of a large cream product card centered at 30% width, 58% height, spanning 36% of frame width and 43% of frame height. The cream fill fades in behind the stroke: a clean blank evenly-lit cream surface with a hair-thin coral top border. Inside it, only ONE element: a small simple coral sparkline in the lower quarter of the card.
3.5-6.5s: the line continues right and constructs an identical second blank cream card centered at 70% width, 58% height. Inside it, only ONE element: three stone-grey utilization bars growing upward in sequence in the lower quarter — plain rectangles, no scale marks.
6.5-9s: the coral line straightens into a bridge connecting both cards at their vertical midpoint. The hair-thin coral top border of each card brightens once, left then right.
9-11s: both cards hold as a stable pair with at most 1% breathing scale, then freeze completely for the final 0.5s.

Both card interiors stay blank cream except the single sparkline (left) and three plain bars (right). Keep the top 22% of the frame completely calm.
```

### 5 · M06 Offer · 8s (bar/card x 17.7–82.3%; bar center y 33%; card y 40–84%)

```text
This scene translates the platform into a workflow: a question arrives, and a grounded proposal assembles — all surfaces blank for the UI layer.

0-2s: a slim dark rounded command bar floats centered at 33% height, spanning 18% to 82% of frame width: a clean dark blank surface with a small coral action disc at its right end. The bar pulses very subtly as if receiving input — but stays completely blank.
2-2.6s: the coral disc pulses once as the enter beat. A hair-thin coral line drops vertically from the bar's center.
2.6-6.5s: where the line lands, a large cream proposal card assembles: rounded rectangle from 18% to 82% width, 40% to 84% height. Four horizontal sections slide in from alternating sides and dock with precise snaps — each section a clean blank cream band separated by hair-thin stone-grey rules. Beside each section edge a tiny abstract provenance mark appears: filled coral dot, hollow stone circle, stone diamond, filled coral dot.
6.5-8s: a hair-thin coral underline draws beneath the whole card. Everything freezes completely for the final 0.5s.

All surfaces stay blank: no text, no bars, no numbers. No browser chrome, no chat bubbles.
```

### 6 · M07 Wissen · 7s — REWRITTEN (two cards x 27.2% / 72.8%, top y 33%, 42.9% wide)

```text
This scene is the evidence beat: two knowledge surfaces arrive side by side, below the headline zone, blank for the UI layer.

0-2.5s: the hair-thin coral provenance line enters from frame left at 52% height and draws the crisp outline of a large cream card centered at 27% width, its top edge at 33% height, spanning 43% of frame width and about 37% of frame height. The cream fill fades in: clean blank surface, hair-thin coral top border.
2.5-5s: the line continues right and constructs an identical second blank cream card centered at 73% width, same top edge and size.
5-7s: both coral top borders brighten once in sequence as a confirmation beat, a thin coral thread settles between the two cards at their vertical midpoint, and everything freezes completely for the final 0.5s.

Card interiors stay completely blank cream. The band from 15% to 32% height stays completely clear for the composited headline.
```

### 7 · M08 Positioning · 6s (accent moved to 74% height)

```text
The quietest scene in the film: a near-black warm espresso void that gives a composited statement absolute authority.

0-2.5s: absolute stillness. Only the dark warm gradient texture breathes barely perceptibly.
2.5-4s: one short hair-thin coral accent line, about 5% of frame width, fades in at 50% width, 74% height — a restrained anchor beneath statement typography composited later.
4-6s: the line dims to half intensity and the frame settles into total stillness for the final 0.5s.

Nothing else appears: no cards, no tiles, no shapes.
```

### 8 · M09 Business Case · 12s (plot x 15.4–86.7%, baseline y 60%; + dashed cost line; cards x 20/40/60/80%, top y 66.5%, width 18.3%)

```text
This scene turns the provenance line into the ROI proof, drawn as crisp foreground chart geometry with blank value cards for the UI layer.

0-2.5s: a thin stone-grey baseline draws at 60% height from 15% to 87% width, with a short vertical axis rising at its left end. The top 22% of the frame stays completely calm.
2.5-6s: from the baseline's left end, TWO lines draw simultaneously up and to the right: the coral provenance line rises steeply as one clean ROI diagonal ending near 38% height at 82% width — sharp, luminous, the hero of the shot; beneath it a thin stone-grey dashed line rises only barely above the baseline — the flat cost line. The widening gap between them is the story.
6-9s: four small coral dot markers set onto the coral diagonal in sequence. Beneath each marker a small blank cream stat card flips up: clean empty cream rectangles centered at 20%, 40%, 60% and 80% width, top edges at 66.5% height, each 18% of frame width wide, each with a hair-thin coral top border.
9-12s: the area between coral diagonal and dashed cost line fills with a very subtle 8% coral tint. Then the whole composition freezes completely for the final 0.5s.

All four stat cards stay blank cream — no numbers, no bars, no symbols. No 3D bars, no finance-dashboard blue.
```

### 9 · M10 CTA · 8s (underline y 89%, x 35–65%; center reserve x 25–75%, y 18–82%)

```text
The final plate: a calm stage that receives the real end-card content from the UI layer.

0-1.6s: the coral provenance line enters from frame left at chart height and glides down into a smooth, calm signature-like horizontal underline at 89% height, spanning 35% to 65% of frame width.
1.6-4s: a soft warm radial ambience rises gently behind the reserved center block (25-75% width, 18-82% height) — restrained orange-to-coral warmth at very low intensity, single slow swell, no burst, no rays. The center block itself stays empty and dark enough for light typography.
4-8s: the underline breathes once at 2% intensity and settles. Total stillness for the final 0.6s.

Do not generate any emblem, wordmark, button or text shape. The center stays empty for the composited end card.
```

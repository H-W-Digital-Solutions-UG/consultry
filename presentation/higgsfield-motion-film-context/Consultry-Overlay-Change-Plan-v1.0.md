# Overlay Change Plan v1.0 — pitch-scene.jsx × Higgsfield Slide-BGs

Companion to `Consultry-Higgsfield-Slide-BG-Prompts-v2.0.md`. Principle: **JSX keeps every text-based overlay** (headlines, typed queries, labels, counters, badges, buttons); **all non-text UI mockup chrome moves into the video prompts** (card shells, coral top borders, command bar, chart geometry, connectors, glows). Line numbers refer to the current `pitch-scene.jsx`.

## Global elements

| Element | Lines | Verdict |
|---|---|---|
| `PersistentLogo` (morphing lockup) | 988–1033 | **KEEP JSX.** Defines the reserved zones: top band cx 960/cy 116/w 380 (Hook–Problem), **center bloom cy 400/w 980 @ 15.95–21.8s** (Solution reveal), top small (21.8–67.4s), CTA center cy 316/w 800 (68.6s+). Videos must keep these zones empty. |
| `Chapter` anchors (`/02 DIE PLATTFORM` …) | per scene | **KEEP JSX** (text). Videos already keep the top-left corner quiet. |
| `Voiceover`, `Music`, `LabelTicker` | 90–170 | KEEP, untouched. |
| Scene glow/vignette gradient divs | per scene | **REMOVE where the video carries ambience** (M04 halo, M06/M07 stage, M10 swell) — otherwise glows double up. |

## Scene 0 — Hook (0–5.35s) · gen M01 — *already wired*

- KEEP: headline + subline text (`SceneHook`, ~360–384), text shadows carry legibility.
- DONE: `HookBackground` now plays `gen-hook-bg-frames`, dimming relaxed (op 0.85, brightness 0.8).
- CHANGE: with the v2 bar-less M01 regen, raise to op ~0.95 / brightness 0.9 and delete the two heavier scrim divs (~330–333), keeping only the bottom 25% scrim. The coral line at 72% height replaces any JSX accent.

## Scene 1 — Problem (4.85–15.0s) · gen M02 — *already wired*

- KEEP: both centered statements + the 56×3 gradient accent bar (tied to text, ~404–406).
- DONE: `ScatterTools` replaced by `ProblemBackground`.
- CHANGE: with the v2 M02 regen (tiles crowd to 70% height at edges, center band clear), lower `ProblemBackground`'s internal scrims from 0.62/0.66 to ~0.42/0.48 so tiles read as foreground.

## Scene 2 — Solution (14.5–32.4s) · gen M04 (beat 1) + M05 (beat 2)

| Element | Lines | Verdict |
|---|---|---|
| Reveal bloom gradients | 452–458 | **REMOVE** → M04 video halo. |
| `KNOWS` editorial columns (text) | 462–480 | **KEEP JSX.** Sit at y 588 — inside M04's halo ring; halo is low-contrast, OK. |
| Card shells: cream gradient, coral top bar, border, shadow, deal-in rotation | 495–501 | **REMOVE** → M05 video constructs the cards. |
| Card float (`Math.sin` ±2.2px) | 492 | **REMOVE** — video cards are static; floating text would misalign. |
| Icon tiles (zap/target) | 504–509 | KEEP JSX (brand-exact vectors), absolutely positioned onto video cards. |
| `[01]`/`[02]`, h3 names, tag paragraphs | 510–515 | **KEEP JSX**, repositioned absolute. |
| Product-moment chip | 517–524 | KEEP JSX whole (pill hugs its text). |
| `Trend` sparkline + label | 526 | **SPLIT:** drawn line → video (M05 sparkline/util bars); mono label text → KEEP JSX. |

**Geometry contract (video must match JSX):** card 1 center **x 30.4% / card 2 x 69.6%**, both **y 58.1%**, size **35.9% × 43.5%** of frame. Logo bloom zone to keep empty in M04: **x 25–75%, y 24–52%**.
**Retime:** JSX text tIn 7.55/11.5 → after the video's line-draw finishes each card (M05 beat map: card 1 built ~3.5s, card 2 ~7s into beat 2).

## Scene 3 — Vertrieb (31.9–39.6s) · gen M06

| Element | Lines | Verdict |
|---|---|---|
| Headline, coral statement, subline | 567–570, 631–638 | **KEEP JSX.** |
| Dark command pill background | 573–576 | **REMOVE** → video command bar. Typed `QUERY` text + caret (547–549, 578–581) **KEEP JSX**, pinned onto the video bar. |
| Arrow connector SVG | 583–591 | **REMOVE** → video's dropping coral line. |
| Proposal card shell + row hairlines + dock animation | 592–596, 610–611 | **REMOVE** → video card assembly. |
| ANGEBOT/DRAFT chips, title, row texts, trust line | 599–627 | **KEEP JSX**, absolute-positioned per section band. |

**Layout change:** scene is flex-centered (564–566) — convert to **absolute positioning** so text lands on the video geometry.
**Geometry contract:** command bar **x 17.7–82.3%, center y ≈ 33%**; proposal card **x 17.7–82.3%, y 40–84%**, four equal section bands. (v2.0 doc said 25–75% — superseded by these numbers.)

## Scene 4 — Wissen (39.0–45.9s) · gen M07 — **prompt needs rewrite**

v2.0's M07 (single evidence viewport) does **not** match the JSX layout (two 824px cards under the headline). Rewrite M07 as **two blank cream cards**:

- Card centers **x 27.2% / 72.8%**, top edge **y ≈ 33%**, size **42.9% × ~37%**, hair-thin coral top borders, blank interiors; coral thread connecting them optional at lower edge.
- KEEP JSX: headline (664–667), card titles, paragraphs, Referenz-Case block, "GEFUNDEN IN 15 SEKUNDEN", risk rows + badges (688–744), sovereignty footer (751–756).
- REMOVE: card shells (674–679), coral top bars (679), float (672).

## Scene 5 — Finanz (45.45–66.3s) · gen M08 (beat 1) + M09 (beat 2)

**Phase A (Positioning, local 0–8.6):** all text — KEEP unchanged; M08 video is a near-empty void. Move its coral accent from 68% to **74% height** (subline `pA3` ends ≈ y 62–66%).

**Phase B (local 8.8+):**

| Element | Lines | Verdict |
|---|---|---|
| Headline | 898–900 | KEEP JSX. |
| Grid lines + area + coral value path + dashed cost path + dot markers + tip circles | 911–913, 930–941 | **REMOVE** → M09 video (add the **dashed stone cost line** to the M09 prompt — v2.0 omitted it). |
| All SVG `<text>` (y-ticks, x-ticks, MEHRWERT/KOSTEN, axis title) | 914–929, 942–945 | **KEEP JSX**, repositioned onto video plot geometry. |
| Stat card shells | 954–958 | **REMOVE** → video's four blank cream cards. |
| € counters, size/cost labels, "Mehrwert pro Jahr" | 960–968 | **KEEP JSX** — counters animate on top of video cards. |
| Annahme + Quelle lines | 974–981 | KEEP JSX. |

**Geometry contract:** plot area **x 15.4–86.7%**, baseline **y ≈ 59.6%**, diagonal tip **≈ y 38% @ x 82%**; stat cards centers **x 20.2 / 40.1 / 59.9 / 79.9%**, card top **y ≈ 66.5%**, width **18.3%**.
**Retime:** video diagonal draws at beat-2 local ~2.5–6s; JSX dot-synced counters (`cIn`, 935/949) must map to that curve instead of `q`(10.05–11.95).

## Scene 6 — CTA (65.9–73.5s) · gen M10

- KEEP JSX: 3-line headline (780–788), **button** (790–798 — text-bearing, keep whole), trust line, DSGVO footer text.
- REMOVE: radial glow div (773–775) → video ambience swell.
- **Underline conflict:** v2.0 put the video signature line at y 78% — that strikes through the button (center ≈ y 81.5%). Move video underline to **y ≈ 89%, x 35–65%**, replacing the JSX footer hairline (809); keep the DSGVO text below it.
- Reserved center for logo + text: **x 25–75%, y 18–82%** (logo lands cy 316/w 800 from 68.6s).

## Prompt deltas to apply on top of v2.0 before generating

1. **M04:** reserved center → x 25–75%, y 24–52% (logo bloom w 980 @ cy 400).
2. **M05:** cards at x 30.4%/69.6%, y 58.1%, 35.9%×43.5%; card-1 sparkline stays, card-2 bars stay (JSX `Trend` drawn line removed).
3. **M06:** bar and card widths 17.7–82.3%; bar center y 33%; card y 40–84%.
4. **M07:** REWRITE to two blank cards (x 27.2%/72.8%, top y 33%, 42.9% wide) — viewport concept dropped.
5. **M08:** coral accent at 74% height (was 68%).
6. **M09:** add dashed stone-grey cost line under the coral diagonal; plot x 15.4–86.7%, baseline y 60%; four cards at x 20/40/60/80%, top y 66.5%, width 18.3%.
7. **M10:** underline at y 89%, x 35–65%; center reserve widened to y 18–82%.

# Consultry Pitch Video — Session Handover

**File under edit:** `pitch-scene.jsx` (the React scene graph). It is mounted by `Consultry Pitch Video.dc.html` via `<x-import>` and rendered through `animations.jsx` (`Stage` + `useTime`).
**Format:** 1920×1080, ~102.1s timeline, voiceover-locked. Assets: `voiceover.wav` (71.68s), `music.wav`, background frame sequences under `uploads/gen-*-bg-frames/`, SVGs under `assets/`.
**Design system:** Consultry DS bound at `_ds/consultry-design-system-6d34b04d-38cf-4215-b051-0d6e987f0789/`. NOTE: this animation predates the DS bundle and uses raw hex color constants (WARM `#f0a85e`, TEXT `#ede8e2`, BG `#171311`, etc.). The oxlint "use var(--ds-color-*)" warnings are **expected/legacy** for this file — do not churn the whole palette.

---

## How to work on this file

**Preview + seek to a timestamp** (screenshots re-render the DOM, so fonts fall back to a wider face and text can look truncated/ellipsized even when it is not — always confirm suspicious clipping by measuring `el.scrollWidth` vs `el.clientWidth` in the live DOM):

```js
const el = document.querySelector('svg[data-om-exportable-video-with-duration-secs]');
el.dispatchEvent(new CustomEvent('data-om-seek-to-time-frame', { detail: { time: 48 } }));
```

`eval_js` after a seek is **stale** (React re-renders next frame) — prefer `save_screenshot` steps with a ~700ms delay, or seek in one step and read in the next.

**Editing:** `dc_*` tools are for the `.dc.html` shell only. Edit `pitch-scene.jsx` with `str_replace_edit`. After edits, `show_html` + `get_webview_logs` to confirm no console errors, then screenshot the affected beats.

---

## ⚠️ Gotchas (read before editing)

1. **Voiceover-locked timing.** Scene starts derive from `WORK_SEQUENCE_SHIFT` (7.15) and `DOWNSTREAM_SCENE_DELAY` (6.00). Do **not** shift downstream scene starts to fix a visual — it desyncs the voiceover. Fix visuals *within* a beat, or trade time against an adjacent overlay (that is how the Deal-closed↔bundle collision was solved).
2. **Two radar charts exist.** `TeamMorphModules` (~line 1520; radar polygon ~1687, gradient id `team-morph-profile-fill`) is the LIVE one shown at t≈25–38. `TeamSkillCircle` (~line 2235; gradient id `team-profile-fill`) is **legacy/unused** — do not edit it by mistake. `SignalTeamUI` (~line 2521) composes: `SignalGraphPanel`, `TeamSlicePanel`, `TeamMorphModules` (NO TeamSkillCircle).
3. **Logo is a separate persistent element.** `PersistentLogo` (~line 4686) reads keyframe table `LOGO_MARK_KEYS` (~line 4631), format `[t, cx, cy, w, op]`, sampled by `sampleKeys`. The offer bridge (`PersistentProjectBundleBridge`) does NOT draw the logo — it only mirrors its position math. To move the logo you edit `LOGO_MARK_KEYS`.
4. **`StableVertriebBackground`** (~line 3243) is `React.memo`'d with a custom comparator keyed on `PROMPT_CONTEXT_HOLD_LOCAL` / `PROMPT_BACKGROUND_BUNDLE_REMOVE_LOCAL`. `SceneVertrieb` (~line 4090) now wraps it with a `mountGate`.
5. Color+alpha: WARM is a hex string, so `` `${WARM}77` `` (8-digit hex) is valid.

---

## Key timing constants (all in `pitch-scene.jsx`, ~lines 66–115 and ~4588–4620)

```
WORK_SEQUENCE_SHIFT      = 7.15
DOWNSTREAM_SCENE_DELAY   = 6.00
OFFER_BG_START           = 4.25 + SHIFT  (Vertrieb-local ≈11.4 → abs ≈49.45)
WORK_PROMPT_START        = 9.60 + SHIFT  (abs ≈54.8, prompt typing)
SCENE_VERTRIEB_START     = 38.05     SCENE_VERTRIEB_END ≈ 66.80
SCENE_MATCHED_START≈65.6  SCENE_FINANZ_START≈70.1  SCENE_CTA_START≈93.6

LOGO_BRIDGE_START        = TEAM_MATCHED_CONSULTANTS_DONE + 1.00  (abs ≈45–46)
LOGO_BRIDGE_GATHER_START = +1.70
LOGO_BRIDGE_BUNDLE_HOLD_START = GATHER +2.80
LOGO_BRIDGE_OFFER_START  = BUNDLE_HOLD +1.30   (offerStart, abs ≈46.4)
LOGO_BRIDGE_END          = OFFER_START +6.30   (holds "Deal closed" ~1s before out)
LOGO_BRIDGE_RESULT_X=620  RESULT_Y=456  RESULT_SIZE=150   (offer-result logo slot)
```

Offer-bridge internal ramps (in `PersistentProjectBundleBridge`, ~line 2027, all relative to `offerStart`):
`offer +0.08 · flow +0.76 · result(header) +1.42 · modules reveal +1.98+i*0.30 · fill +2.44+i*0.26 · dealClosed rise(+3.80, 0.72) · out rise(END-0.78, 0.72)`. Vertrieb bundle `mountGate` in `SceneVertrieb` opens at `LOGO_BRIDGE_OFFER_START + 6.10`.

---

## DONE this session
- **Offer-draft result rebuilt** (`PersistentProjectBundleBridge`): centered composition; three rich mock cards — **Nurtured CVs** (avatar rows + name bars + match dots), **Leistungen** (scope checklist w/ tick-in checks), **Konditionen** (€148k count-up + line bars); staggered "alive" fills; ends on a green **"Deal closed"** seal with a radial scrim; ~1s landing hold before the out.
- **Orange team-composition overlay** on the radar (beat 3, "Harmonisches Team Erstellt") in `TeamMorphModules`: second polygon in WARM that animates from the required profile outward to a slightly-exceeding team profile (`teamCover`, `teamFulfill = rise(local, SIGNAL_TEAM_LIST_START+0.40, 1.30)`), gradient `team-morph-fulfill-fill`.
- **Prompt query** = "Bereite mir das Status-Meeting mit BankAG vor" (fits with no ellipsis: font `mix(19.5,23,grow)`, middle grid column `mix(150,334,grow)`); **"Consultant Prompt" eyebrow removed**.
- **Deal-closed ↔ Vertrieb-bundle collision fixed**: `SceneVertrieb` `mountGate` delays the project-bundle background until the deal-closed has resolved (~+1s).
- **Team scene layout** (earlier): whole block shifted down ~64px; matched-consultant cards realigned with allocation bars; sublines removed on Signal/Team beats; 3×2 grid header stage-indicator that morphs into the top rail; etc.
- **Renames:** "Azure Landing Zone" → **"AWS Transformation · Bank AG"** (both cards); "DKB AG" → **"Bank AG"** (Financial Times signal card + expanded detail). Internal `dkb*` variable names left as-is.

---

## TODO — next session (in priority order)

### 1. "Deal closed" transition polish  (`PersistentProjectBundleBridge` ~line 2027; `LOGO_MARK_KEYS` ~line 4631)
- **Animate the Consultry logo OUT** (move up / fade) *in parallel* as the deal-closed enters (~`offerStart+3.8 … +4.6`). The logo currently HOLDS at the result slot until `LOGO_BRIDGE_END-0.48` then jumps to top-left at `LOGO_BRIDGE_END+0.46`. Add keyframes to `LOGO_MARK_KEYS` so around deal-closed the logo rises (cy ↓) and `op → 0`, then still restore it (top-left, op 1) by `LOGO_BRIDGE_END+0.46` so SceneVertrieb/Finanz still have their logo. Absolute times = `LOGO_BRIDGE_OFFER_START + offset`.
- **Grow "Deal closed" much bigger and move it to true screen center (960,540)** via transition. Currently in the `dealClosed > 0.001` block: seal 128px + text 46px, column at `top: logoY-40`, centered horizontally. Make the seal + text scale up (bigger) and animate their position to screen center as `dealClosed` rises (interpolate top/scale on the eased `dealClosed`).

### 2. Offer result — check → "Project" morph  (`PersistentProjectBundleBridge`, header block)
- Add a short transition where the header **checkmark** (Icon `check`, 64px badge at `resultX`) morphs into **a bit bigger "Project" visual** (e.g. a briefcase/folder glyph or a small project card). Slot it between `result` (+1.42) and the modules reveal, or as its own brief beat. Keep it subtle and on-brand (WARM/blue palette, DS radii).

### 3. Kompetenzprofil / Projektbesetzung preview padding  (`TeamMorphModules` ~line 1520)
- Mid-transition (low `leftMorph`/`rightMorph`, the `leftPreview={x:126,y:126,w:430,h:218}` / `rightPreview={x:856,y:126,w:506,h:218}` stage) the radar + staffing content is sized for the full settled panel and **touches/overflows the small preview card edges** → looks cramped. Add extra internal inset that is LARGER at low morph and eases to normal (e.g. content offset = `mix(BIG_pad, normal_pad, morph)`), or scale the inner content with the card, so nothing kisses the card border while morphing. Relevant inner anchors: panel padding `mix(18,20,leftMorph)` / `mix(18,0,rightMorph)`; radar svg at `left mix(26,44,leftMorph) top mix(66,94,leftMorph)`; constellation at `left mix(224,394,leftMorph)`.

### 4. t=87 "CONSULTRY-KOSTEN" running counter  (`SceneFinanz` ~line 4386 / `FinanzBackground` ~line 4359)
- The Finanz chart around t=87 has a `CONSULTRY-KOSTEN` svg `<text>` label. The **orange milestone lines** in the same chart already use a **running/animated counter** — find that counter pattern and give CONSULTRY-KOSTEN the same treatment (count-up number tied to the scene-local time / reveal progress). Search `CONSULTRY-KOSTEN` and the orange-line milestone rendering to copy the counter mechanism.

---

## Open teammate annotations
All resolved except the TODOs above. For reference, addressed this session:
- jules — header stage indicator (3×2 grid → morphs to top rail): **done**.
- jules — orange team-composition profile on Kompetenzprofil radar, beat 3: **done**.
- jules — remove "Consultant Prompt" marker; query → "Bereite mir das Status-Meeting mit BankAG vor": **done**.
- jules — "Azure Landing Zone" → "AWS Transformation · Bank AG"; "DKB AG" → "Bank AG": **done**.
- user — offer bundle redesign + "Deal closed" bridge; scenes must not collide (bundle after deal-closed +1s); ~1s hold on Deal closed: **done**.
- **OPEN** → the four TODOs above (Deal-closed logo-out + centering, check→Project morph, preview padding, CONSULTRY-KOSTEN counter).

## In-app feel inspiration (2026-07-08)
- Keep Consultry app scenes inside one persistent light app shell: top search/header, left stage rail, clipped content viewport, no per-scene dark or transparent background panels inside the shell.
- Use real SaaS interaction cues later: cursor clicks, active rows, search input caret, tabs, side drawers, action buttons, status chips, and AI-assist affordances.
- Prefer dense product UI details over decorative cards: lists, panels, timelines, comments/drafts, source chips, badges, and clear app hierarchy.
- Attention grabbers and deal/offer overlays can stay outside the app shell; core scene UI should read as children of the app.

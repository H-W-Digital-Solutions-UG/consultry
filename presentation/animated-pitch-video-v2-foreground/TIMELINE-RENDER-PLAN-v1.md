# Timeline-Render-Plan v1 — Gen-Backgrounds in `pitch-scene.jsx` (animated-pitch v2)

Master: 73.5s · 1920×1080 · Stage-Timeline mit 0.5s Scene-Crossfades. Alle Sequenzen laufen mit **24fps** und **clampen auf dem letzten Frame** (Freeze). Frame-Formel überall: `frame = clamp(floor(sceneLocal*24)+1, 1, COUNT)`.

## 1. Film-Timeline (absolut)

```
abs 0.0        5.35       15.0        32.4      39.6      45.9        66.3      73.5
    │ HOOK     │ PROBLEM  │ SOLUTION  │ VERTRIEB│ WISSEN  │ FINANZ    │ CTA     │
bg  │ M01 v2.2 │ M02 v2.2 │ M04 ▸ M05 │ M06 v2.2│ (M07 v3 │ KEIN Video│ (M10    │
    │ 129 fr   │ 241 fr   │ 169▸265 fr│ 193 fr  │ pending)│ clean BG  │ pending)│
```

Scene-Starts: Hook 0 · Problem 4.85 · Solution 14.5 · Vertrieb 31.9 · Wissen 39.0 · Finanz 45.45 · CTA 65.9.

## 2. Pro Szene: Code-Anker & Zeit-Mapping

### HOOK (abs 0–5.35 · local 0–5.35) — ✅ verdrahtet
- **Component:** `HookBackground` · Frames: `uploads/gen-hook-bg-frames/` (129 = 5.375s, M01 v2.2, Head-Trim 0.65s bereits in der Sequenz)
- Enter `rise(0.05,0.55)` · Exit `easeInCubic((local−4.45)/0.78)` · op 0.95 · eine leichte Radial-Scrim hinter der Center-Headline
- Kein Freeze nötig (129 fr ≥ 5.35s)

### PROBLEM (abs 4.85–15.0 · local 0–10.15) — ✅ verdrahtet
- **Component:** `ProblemBackground` · `uploads/gen-problem-bg-frames/` (241 = 10.04s, M02 v2.2 Fragmentation-Tree)
- `PROBLEM_BG_FRAME_COUNT = 241` · Exit ab local 9.35 · Freeze nur letzte ~0.1s
- Headline-Block liegt im Band y 170–390 (16–36%), Größen 84/56/76 — Tree besetzt Mitte

### SOLUTION (abs 14.5–32.4 · local 0–17.9) — ✅ verdrahtet, Beat-Logik
- **Component:** `SolutionBackground` — zwei Sequenzen, ein Crossfade:
  - **Beat 1:** `gen-solution1-bg-frames/` (M04, 169 fr) spielt local 0→5.0 (nutzt 121 fr; Rest ungenutzt)
  - **Switch:** `SOL_SWITCH_T = 5.0`, Crossfade 0.45s (`easeInOutCubic`)
  - **Beat 2:** `gen-solution2-bg-frames/` (M05 v3 t3, 265 fr = 11.04s), `bgLocal = local − 5.0` → deckt local 5.0–16.04, **Freeze 16.04–17.9**
- Exit ab local 17.1 · Logo-Bloom (PersistentLogo cy400/w980) liegt abs 15.95–21.8 = local 1.45–7.3 → über Beat 1 + frühem Beat 2 (M05-Panels beginnen unter der Bloom-Zone bei y≥400)
- **Patch-Covers** (in `SolutionBackground`, nur Beat 2, cream `#e9e4dc`):
  - Signal-Garble `806/424 100×40` — Gate `rise(bgLocal, 3.0)` → sichtbar ab abs ≈ 22.5
  - Team-Achse `1026/492 52×226` + X-Labels `1078/718 585×30` — Gate `rise(bgLocal, 7.4)` → abs ≈ 26.9
- **FEAT-Copy-Blöcke** (Signal/Team deutsche Tags + Chips): `X0=259, W=650, GAP=106, Y=772` · `tIn 8.7 / 11.7` (abs 23.2 / 26.2) — sitzen in der freien unteren Panel-Zone des Clips
- KNOWS-Spalten (y 588) laufen local 3.3–7.3 unter der Bloom — unverändert

### VERTRIEB (abs 31.9–39.6 · local 0–7.7) — ✅ verdrahtet
- **Component:** `VertriebBackground` · `uploads/gen-vertrieb-bg-frames/` (193 = 8.04s, M06 v2.2 „Angebot") · kein Freeze (8.04 > 7.7) · Exit ab local 6.9
- Text-Overlays absolut auf Clip-Geometrie: Typed-Query `top 160` (in der Video-Command-Bar ~y 15–21%) · Headline `top 292` · Statement `top 402` + Subline `top 470` (Dropline-Zone) · Karten-Copy `top 648` (auf der Video-Karte y 55–88%; Titel „Angebot" kommt aus dem Video)

### WISSEN (abs 39.0–45.9 · local 0–6.9) — ⏳ M07 v3 ausstehend
- Szene läuft noch mit Original-JSX (eigene Karten-Shells). Nach M07-v3-Lock: `WissenBackground` nach `VertriebBackground`-Muster (`WISS_FRAME_COUNT`, Exit local 6.1), Karten-Shells transparent, Titel aus dem Video, Copy-Blöcke absolut auf Clip-Zonen.

### FINANZ (abs 45.45–66.3) — ✅ bewusst OHNE Video (User-Entscheid)
- JSX-Chart-Slide bleibt; BG = Stage-Espresso + vorhandene Gradients. Keine Änderung.

### CTA (abs 65.9–73.5 · local 0–7.6) — ⏳ M10 ausstehend
- Nach M10-Lock: `CtaBackground` (Exit-los, Szene endet den Film), Radial-Glow-Div (Zeile ~„SceneCTA glow") entfernen, JSX-Footer-Hairline raus (Video-Signature-Line @ y 89%).

## 3. Asset-Manifest

| Sequenz | Quelle (Job) | Frames | Dauer | Status |
|---|---|---|---|---|
| gen-hook-bg-frames | M01 v2.2 `2ff8418e` | 129 | 5.375s | LOCKED |
| gen-problem-bg-frames | M02 v2.2 `781299dd` | 241 | 10.04s | LOCKED |
| gen-solution1-bg-frames | M04 v2.2 `59fb3aa9` | 169 | 7.04s | LOCKED (User-Accept, Neon-Frame) |
| gen-solution2-bg-frames | M05 v3 t3 `f5345529` | 265 | 11.04s | LOCKED + JSX-Patches |
| gen-vertrieb-bg-frames | M06 v2.2 `32c9506b` | 193 | 8.04s | LOCKED |
| (gen-wissen-bg-frames) | M07 v3 | — | 7s geplant | AUSSTEHEND |
| (gen-cta-bg-frames) | M10 | — | 8s geplant | AUSSTEHEND |

## 4. Render- & Verifikations-Plan (auf dem Mac)

1. **Smoke-Frames:** `node render-pitch-video.mjs --smoke --smoke-times "2.5,5.1,9.0,15.5,19.6,23.5,27.5,33.5,36.0,39.3,50.0,68.5"`
   - 2.5 Hook-Linie unter Headline · 5.1 Hook→Problem-Fade · 9.0 Headline-Band vs. Tree · 15.5 Logo-Bloom über M04 · 19.6 Beat-Switch M04→M05 · 23.5 Signal-Copy + Garble-Patch · 27.5 Achsen-Patch · 33.5 Typed-Query in Command-Bar · 36.0 Karten-Copy auf Angebot-Karte · 39.3 Vertrieb→Wissen · 50.0 Finanz clean · 68.5 CTA (noch alt)
2. **Offsets nachziehen:** Patches/Copy-Blöcke ±px korrigieren (nur JSX-Konstanten, nie das Video).
3. **Voll-Render:** `node render-pitch-video.mjs` (30fps default; `--fps 60 --crf 16` für Final) → `renders/`.
4. Nach M07/M10-Lock: Schritte 1–3 wiederholen (Smoke-Times + "41.5,44.0,67.0,70.5").

## 5. Offene Punkte
- M07 v3 (Wissen-App-Screen, 7s) + M10 (CTA-Plate, 8s) generieren → Frames → Components (Muster oben).
- Kein Chromium in der Cowork-Sandbox → Renders laufen auf deinem Mac (Script erwartet `/Applications/Google Chrome.app`).
- Budget-Stand: ~1.520 Credits verbraucht, ~1.460 verfügbar; M07+M10 ≈ 135 cr pro Versuch.

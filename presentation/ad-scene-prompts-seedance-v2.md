# Consultry Insert-Szenen — Seedance 2.0 Mini Prompts (Higgsfield-ready)

Für: `consultry-pitch-animation-1080p60-logo-safe-master.mp4` (73.5s, 1080p60, 16:9)
Alle 12 Szenen: **cinematic / real footage**, single continuous shot, Timeline-Beats im Prompt.
Jeder Prompt ist self-contained → direkt in Higgsfield (Seedance 2.0, Mode: Mini) einfügen.

## Settings für jeden Generate-Call

| Parameter | Wert |
|---|---|
| Model | Seedance 2.0 — Mode: **Mini** |
| Duration | 4s oder 5s (Minimum ist 4s — Trim-Ziel steht pro Szene) |
| Aspect Ratio | 16:9 |
| Resolution | 1080p (4K nur wenn Budget egal) |
| Inputs | Text-to-Video, keine Bilder nötig. Optional: Still aus dem Master als Style-Referenz für Grade-Matching |
| Post | 24fps-Output auf 60fps interpolieren (DaVinci/Topaz), Grade auf Master-Palette ziehen |

**Warum überall „no readable text":** Seedance verstümmelt Schrift. Screens/Dokumente werden bewusst unscharf generiert — echtes Consultry-UI kommt im Compositing.

---

## A — Hook (Master 0:00–0:09, „Ihre Kunden erwarten mehr.")

### Szene 1 · „Der Anspruch" — **Background-Plate hinter der Hook-Typo** · 8s generieren

> Läuft UNTER „Ihre Kunden erwarten mehr." + „Schneller. Präziser. Fundierter." — Logo bleibt top-center.
> Darum: Zentrum + Top-Center dauerhaft dunkler Negativraum, alles Visuelle nur unteres Drittel/Ränder, fast statisch, stumm.
> Settings: **seedance_2_0 · mode std · 1080p · 16:9 · duration 8 · generate_audio false**

```
Background plate for text overlay, single continuous shot, cinematic, photorealistic, 35mm anamorphic, ARRI ALEXA aesthetic, heavily underexposed warm dark grade — deep brown-black shadows, stone neutrals, faint coral-amber highlights only at frame edges, gentle film grain, shallow depth of field, no 3D, no VFX, no readable text. IMPORTANT: the center and top-center of the frame stay deep dark empty negative space at all times; all visual interest confined to the lower third and outer frame edges; no bright highlights near the middle.

A dark executive boardroom at dusk in extreme low key. Lower right corner: the out-of-focus silhouette of a seated executive, motionless except for one slow page turn of a printed proposal. Far left edge: floor-to-ceiling windows with defocused amber city lights as soft bokeh. The room's center dissolves into deep warm darkness.

0–3s: Near-static frame, dust motes drifting through one faint warm light shaft at the lower frame edge, the silhouette breathing calmly.
3–5.5s: The silhouette slowly turns a single page, paper catching a whisper of warm rim light, city bokeh shimmering gently at the far edge.
5.5–8s: Imperceptible slow push-in, the silhouette settles motionless, frame returns to the opening stillness for seamless trimming.

Camera: locked with sub-perceptible push-in, no cuts, no pan, no handheld — the frame reads as a living still.
Silent background plate, no music, no SFX.

Total: 8s / 1 shot / 16:9
```

**Compositing-Check nach dem Generieren:**
- Luminanz im Text-/Logo-Bereich muss unter ~15% bleiben → sonst 20–30% abdunkeln oder Gradient-Overlay (Master-Braunton) mit 40% Deckkraft drüberlegen.
- Weißabgleich auf den Master-Gradient matchen (warmes Braun-Schwarz, kein neutrales Grau).
- Bei Flackern in der Silhouette: Clip auf 50% Speed strecken (8s → 16s Material) und den ruhigsten 9s-Abschnitt nehmen.

### Szene 2 · „Skyline zur blauen Stunde" · 4s generieren → auf 3s trimmen

```
Single continuous shot, cinematic commercial, photorealistic, shot on ARRI ALEXA with 50mm lens, professional color grading — deep blue-hour tones warmed by scattered amber office windows, gentle film grain, no 3D, no VFX, no lens flares, no readable signage.

A German financial-district skyline (Frankfurt-style glass towers) at blue hour just before sunrise, low clouds drifting slowly, scattered office windows lit warm amber against dark facades, faint mist between the towers.

0–2s: Locked-off wide shot from a rooftop vantage, clouds drifting right to left in gentle time-lapse feel, city still asleep.
2–3s: A single top-floor office window flicks on, warm light, the only new movement in frame.
3–4s: Very slow push-in toward that lit window, subtle, almost imperceptible.

Camera: static then minimal push-in, no cuts, no pan, no drone swoop.
SFX: distant low city rumble, soft wind, no music.

Total: 4s / 1 shot / 16:9
```

---

## B — Problem (Master 0:09–0:21, „Verstreut: in Köpfen, PCs und endlosen Tools.")

### Szene 3 · „Tool-Chaos, 23:40 Uhr" · 5s generieren → auf 4s trimmen

```
Single continuous shot, documentary realism, photorealistic, 35mm film look, ARRI ALEXA aesthetic, handheld with constant subtle micro-shake, shallow depth of field, dark office lit only by monitor glow and one desk lamp, cool screen light against warm lamp light, film grain, no 3D, no VFX, no readable text on any screen — all screen content stays blurred and out of focus.

An exhausted male consultant in his late 30s, rolled-up white shirt sleeves, loosened collar, sits at night in an empty German open-plan office. His face is lit by the flickering glow of a large monitor filled with dozens of overlapping blurred windows and spreadsheet grids. Empty desks and dark monitors stretch into the background bokeh.

0–1.5s: Over-the-shoulder medium shot, his fingers scroll fast, blurred windows stacking on the screen, reflections of the chaos sliding across his glasses.
1.5–3s: A notification pings, he flinches slightly, drags another blurred window across the screen, jaw tightening.
3–5s: Camera drifts slowly around his shoulder toward his profile as he stops, closes his eyes and rubs the bridge of his nose, monitor light flickering on his face.

Camera: single handheld drift from behind shoulder to profile, no cuts, no zoom, natural operator sway.
SFX: keyboard clatter, mouse clicks, sharp notification ping, low HVAC room tone, no music.

Total: 5s / 1 shot / 16:9
```

### Szene 4 · „Papier-Archäologie" · 4s generieren → auf 3s trimmen

```
Single continuous shot, top-down 90-degree overhead macro shot, photorealistic, cinematic commercial, warm desk-lamp key light from the left creating deep shadows, rich paper texture, shallow depth of field, 35mm film grain, no 3D, no VFX, all documents blurred just enough that no text is readable.

A cluttered dark walnut desk covered edge-to-edge with chaotic stacks of printed contracts, spreadsheets and reports, colored sticky notes on every layer, a cold half-finished espresso cup at the frame edge.

0–1.5s: Two hands enter frame and leaf rapidly through a thick stack, pages flipping, sticky notes fluttering, urgency in the fingers.
1.5–3s: The hands stop abruptly, then carefully pull one single page out from the middle of the pile — the stack shifts and two papers slide off the desk edge in smooth slow motion.
3–4s: The hands hold the found page flat under the lamp light, smoothing it once, dust motes drifting through the warm beam.

Camera: locked top-down, no cuts, no rotation, slow motion only on the sliding papers.
SFX: rapid paper shuffling, one sharp page pull, soft paper landing on floor, no music.

Total: 4s / 1 shot / 16:9
```

### Szene 5 · „Wissen verlässt das Haus" · 4s generieren → auf 3.5s trimmen

```
Single continuous shot, cinematic, photorealistic, 35mm anamorphic, ARRI ALEXA aesthetic, late-afternoon sun striping through venetian blinds, warm melancholic grade with stone neutrals and amber highlights, film grain, shallow depth of field, no 3D, no VFX, no readable text.

A grey-haired senior consultant in his early 60s, quality knitwear over a shirt, stands at a tidy desk in a German office and places a framed photo into a cardboard moving box that already holds books and a rolled-up notebook.

0–1.5s: Medium shot, he sets the framed photo gently into the box, pauses one beat looking at the desk.
1.5–2.5s: He lifts the box and walks out of frame left, sunlight stripes sweeping across his back.
2.5–4s: Camera holds perfectly still on the empty desk — dark monitor, empty chair slightly turned, dust in the light beams — letting the absence register.

Camera: locked-off medium shot, no cuts, no pan, no push-in — the stillness is the point.
SFX: cardboard shifting, receding footsteps on carpet, quiet room tone, no music.

Total: 4s / 1 shot / 16:9
```

---

## C — Übergang zur Lösung (Master ~0:21, vor Logo-Reveal)

### Szene 6 · „Ein Schreibtisch wird still" · 4s generieren → auf 2.5–3s trimmen

```
Single continuous shot, top-down overhead shot, cinematic commercial, photorealistic, warm morning light, clean premium aesthetic, 35mm film look, shallow depth of field at frame edges, no 3D, no VFX, no readable text, screens stay softly blurred.

The same cluttered walnut desk from before — paper stacks, sticky notes, two closed laptops, tangled cables — being cleared in one continuous choreographed motion.

0–1.5s: Two pairs of hands sweep the paper stacks and one laptop out of frame left and right in smooth, fast, precise moves, like a stage crew resetting a set.
1.5–3s: The last sticky notes are lifted away, a cable is pulled out of frame, the desk surface emerges clean and warm.
3–4s: One single open laptop is placed exactly center frame, screen glowing soft warm cream (blurred, no text), perfectly composed negative space around it, everything at rest.

Camera: locked top-down, no cuts, motion happens within the frame, accelerating rhythm then sudden calm.
SFX: brisk paper slides, soft laptop placement thud, then near-silence, no music.

Total: 4s / 1 shot / 16:9
```

---

## D — Die Plattform (Master 0:24–0:36, Signal/Team-Karten)

### Szene 7 · „Über den Monitor" · 5s generieren → voll nutzen

```
Single continuous shot, macro product cinematography, photorealistic, shot on ARRI ALEXA with 100mm macro lens, extremely shallow depth of field, premium tech-commercial style like an Apple product film, dark warm studio environment, deep brown-black background, soft coral-amber rim light on hardware edges, film grain, no 3D, no cartoon, no VFX, no neon, screen content must stay abstract and out of focus — soft warm cream rectangles on a dark warm background, absolutely no readable text.

A high-end desktop monitor on a dark walnut desk in a dim studio-lit office, displaying a calm, elegant interface of cream-colored cards floating on a deep warm-black backdrop (fully defocused).

0–2s: Slow lateral dolly from left to right across the monitor at a 30-degree angle, the blurred cream interface cards drifting through frame as soft glowing shapes, reflections gliding across the glass.
2–3.5s: Rack focus pulls one card region briefly toward sharpness — but never sharp enough to read — then eases back into soft bokeh.
3.5–5s: The dolly continues past the monitor edge and the corner of the screen catches a warm highlight, lens breathing gently, frame ending on the glowing screen edge against darkness.

Camera: one continuous slow lateral dolly with rack focus, no cuts, no zoom, no orbit.
SFX: quiet room tone, faint electrical hum, single soft UI click, no music.

Total: 5s / 1 shot / 16:9
```
*(Compositing: echtes Consultry-UI später in den unscharfen Screen tracken — oder unscharf lassen, wirkt auch so.)*

---

## E — Angebot (Master 0:36–0:42, „Ihr Vertrieb fragt Consultry.")

### Szene 8 · „Freitag, 16:47" · 4s generieren → voll nutzen

```
Single continuous shot, cinematic commercial, photorealistic, 35mm anamorphic, ARRI ALEXA aesthetic, golden-hour sunlight through large office windows, warm lens flare kept subtle, shallow depth of field, film grain, no 3D, no VFX, no readable text, laptop screen stays blurred warm cream.

A sales lead in his mid-40s, navy knit polo, well-groomed stubble, sits at a clean desk in a modern German office. Behind him, out-of-focus colleagues put on jackets and leave for the weekend, golden light flooding the space.

0–1.5s: Medium close-up, he types one short line on his laptop — just a few keystrokes, unhurried — and presses Enter with one decisive finger.
1.5–3s: He leans back in his chair, the chair reclining slightly, and exhales — shoulders dropping, the tension leaving his body.
3–4s: A small confident smile forms, he glances once at the blurred warm screen, then out the window into the golden light, completely at ease.

Camera: slow subtle push-in from medium to medium close-up, no cuts, no zoom bursts, no handheld shake.
SFX: five soft keystrokes, one firm Enter key, chair recline creak, distant office chatter fading, no music.

Total: 4s / 1 shot / 16:9
```

### Szene 9 · „Das Angebot aus dem Drucker" · 4s generieren → auf 3s trimmen

```
Single continuous shot, macro commercial cinematography, photorealistic, 100mm macro lens, extremely shallow depth of field, warm office light with soft coral-amber accent, premium tactile detail — paper fibers, ink sheen, film grain, no 3D, no VFX, printed pages blurred so no text is readable, only a subtle coral-colored header bar hinted at the top of each page.

A high-end office laser printer in a warm-lit German office, freshly printed proposal pages sliding crisply into the output tray.

0–1.5s: Macro on the printer slot — a page emerges with mechanical precision and glides into the tray, warm light catching the paper edge, a faint coral header band visible but unreadable.
1.5–2.5s: Two more pages follow in rhythm, the stack building, paper texture in razor-sharp macro while the background falls into deep bokeh.
2.5–4s: A hand enters frame, lifts the small warm stack, and taps it once on the tray edge to square it — clean, decisive, done.

Camera: locked macro with a very slow drift right, no cuts, no zoom, mechanical rhythm carries the energy.
SFX: printer feed whir, crisp paper slides, one firm paper tap, no music.

Total: 4s / 1 shot / 16:9
```

---

## F — Wissen (Master 0:42–0:51, „Ihr Wissen ist da, wenn es zählt.")

### Szene 10 · „Im Kundentermin" · 5s generieren → auf 4.5s trimmen

```
Single continuous shot, cinematic commercial, photorealistic, 35mm anamorphic, ARRI ALEXA aesthetic, bright natural window light, warm neutral grade with stone tones, shallow depth of field, film grain, no 3D, no VFX, no readable text, laptop screen angled away from camera.

A bright modern meeting room in a German office. A consultant in her mid-30s, dark blazer over a cream top, sits across from a male client in his 50s in a grey suit, a slim laptop open beside her at an angle. Glass wall and green office plants soft in the background.

0–1.5s: Two-shot at table height, the client leans forward mid-sentence asking a pointed question, hand gesturing, slight challenge in his posture.
1.5–2.5s: She glances down at her laptop for barely a second — one calm flick of the eyes — nothing more.
2.5–4s: She looks up and answers immediately, relaxed and precise, one open-palm gesture, complete composure; subtle slow push-in on her as she speaks.
4–5s: The client leans back and nods slowly, visibly impressed, the corner of his mouth lifting.

Camera: single slow push-in from two-shot toward the consultant, no cuts, no zoom, no handheld.
SFX: quiet meeting-room tone, muffled voices low in the mix, fabric shift as the client leans back, no music.

Total: 5s / 1 shot / 16:9
```

---

## G — Business Case & Outro (Master 0:51–1:13)

### Szene 11 · „Der gewonnene Tag" · 4s generieren → voll nutzen

```
Single continuous shot, cinematic commercial, photorealistic, 35mm anamorphic, ARRI ALEXA aesthetic, bright late-afternoon daylight, uplifting but understated warm grade, subtle sun flare, film grain, shallow depth of field, no 3D, no VFX, no readable signage.

The same consultant from the night office scene — late 30s, now in an open collar, jacket slung over his shoulder — walks out of a modern glass office lobby into warm afternoon daylight, relaxed stride.

0–2s: Tracking shot alongside him at walking pace as he pushes through the glass door into the light, his posture open, unburdened, a hint of a smile.
2–3s: Camera slows and lets him walk ahead; through the glass facade behind him, a colleague and a junior appear softly out of focus at a whiteboard, mid-conversation, gesturing.
3–4s: He steps into the sunlit street bokeh, silhouette rimmed in warm light, frame settles with him walking away into the brightness.

Camera: one lateral tracking move easing to a halt, no cuts, no zoom, stabilized gimbal smoothness.
SFX: glass door swish, street ambience, distant tram bell, footsteps, no music.

Total: 4s / 1 shot / 16:9
```

### Szene 12 · „Der Abschluss" · 4s generieren → auf 3s trimmen (Negativraum oben für End-Card)

```
Single continuous shot, cinematic commercial, photorealistic, 35mm anamorphic, ARRI ALEXA aesthetic, warm evening light from a single window, rich shadows, premium restrained mood, film grain, very shallow depth of field, no 3D, no VFX, document blurred so no text is readable, generous empty negative space in the upper third of the frame for later title placement.

A signed contract lying flat on a dark walnut table, a heavy fountain pen resting beside the fresh signature, warm light raking across the paper texture.

0–1.5s: Low close-up across the table surface, focus on the pen and the blurred signed page, dust motes in the warm light, everything still.
1.5–3s: Behind the document, two hands — one with a subtle wristwatch — meet in a firm, unhurried handshake in soft focus, holding for a beat.
3–4s: The handshake releases slowly, hands parting out of frame, focus settling back on the pen and paper, calm and final.

Camera: locked low angle across the tabletop, no cuts, no push-in, composition keeps upper third empty.
SFX: quiet room tone, soft fabric movement, one gentle paper settle, no music.

Total: 4s / 1 shot / 16:9
```

---

## Schnittplan (Insert → Master-Position → Trim)

| # | Szene | Master-Position | Gen-Länge | Trim auf |
|---|---|---|---|---|
| 2 | Skyline | 0:00 als Cold Open | 4s | 3.0s |
| 1 | Der Anspruch | unter „Ihre Kunden erwarten mehr." | 5s | 4.0s |
| 3 | Tool-Chaos | Problem-Block ~0:10 | 5s | 4.0s |
| 4 | Papier-Archäologie | Problem-Block ~0:15 | 4s | 3.0s |
| 5 | Wissen verlässt | bei „in Köpfen" ~0:18 | 4s | 3.5s |
| 6 | Schreibtisch wird still | vor Logo-Reveal ~0:21 | 4s | 2.5s |
| 7 | Über den Monitor | Plattform-Block ~0:28 | 5s | 5.0s |
| 8 | Freitag 16:47 | vor Angebots-Demo ~0:36 | 4s | 4.0s |
| 9 | Drucker | nach Demo ~0:41 | 4s | 3.0s |
| 10 | Kundentermin | Wissen-Block ~0:45 | 5s | 4.5s |
| 11 | Der gewonnene Tag | nach ROI-Chart ~1:05 | 4s | 4.0s |
| 12 | Der Abschluss | vor Outro/CTA ~1:08 | 4s | 3.0s |

Kern-Set falls Länge knapp: 2, 3, 6, 8, 10, 12 (+ ~21s Laufzeit statt +44s).
Konsistenz-Tipp: Szene 3 und 11 nutzen dieselbe Figur — gleiche Beschreibung im Prompt beibehalten oder mit Referenzbild (@image) arbeiten.

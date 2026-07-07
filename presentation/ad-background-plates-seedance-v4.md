# Consultry Pitch — Background-Plates v4 (Seedance 2.0, volle 73.5s)

Für: `consultry-pitch-animation-1080p60-logo-safe-master.mp4`
Konzept: **9 Background-Plates**, die UNTER dem bestehenden Motion-Design laufen. Eine durchgehende Welt — „ein Abend in einem deutschen Büroturm" — die die Story (Anspruch → Chaos → Ordnung → Abschluss) atmosphärisch mitspielt, ohne je mit Typo, Logo, Icons oder Karten zu konkurrieren.

## Sektionsgrenzen (aus ffmpeg-Frame-Analyse, 1fps)

| Plate | Master-TC | Sektion | Foreground belegt | Gen | Trim |
|---|---|---|---|---|---|
| P1 | 0:00–0:05 | Hook „Ihre Kunden erwarten mehr." | Zentrum + Logo oben | 6s | 5.0s |
| P2 | 0:05–0:15 | „Das Problem?" + Icons + „Verstreut" | Zentrum + untere Bildmitte (Icons) | 12s | 10.0s |
| P3 | 0:15–0:22 | Logo-Reveal + Geschäft/Marke/Wissen/Projekte | großes Zentrum | 8s | 7.0s |
| P4 | 0:22–0:32.5 | /02 Plattform — Signal + Team Cards | mittleres Band links+rechts | 12s | 10.5s |
| P5 | 0:32.5–0:39.5 | /03 Angebot — Promptbar + Draft-Doc | Zentrum breit | 8s | 7.0s |
| P6 | 0:39.5–0:46.5 | /04 Wissen — Headline + 2 Cards | Zentrum + mittleres Band | 8s | 7.0s |
| P7 | 0:46.5–0:54 | „Kein AI-Chatbot." Statement | Zentrum | 8s | 7.5s |
| P8 | 0:54–1:06 | ROI-Chart + 4 Stat-Cards | fast das ganze mittlere Feld | 12s | 12.0s |
| P9 | 1:06–1:13.5 | Outro + CTA „Auf die Warteliste" | Zentrum + Logo | 8s | 7.5s |

Trim-Summe: **73.5s** ✓

## Globale Regeln (in jedem Prompt enthalten — beim Kürzen nie streichen)

1. **Safe-Zones:** Zentrum, Top-Center (Logo) und je nach Plate die belegten Bänder bleiben durchgehend dunkler Negativraum. Alles Sichtbare lebt an äußeren Rändern und unterster Bildkante.
2. **Luminanz:** Nichts über ~20% Helligkeit außerhalb der Randzonen. Im Zweifel im Grade zusätzlich 20% abdunkeln + Master-Braunton-Gradient (40% Deckkraft) drüber.
3. **Bewegung:** near-static — die Plates müssen sich wie „lebende Standbilder" verhalten, sonst kämpfen sie mit dem Motion-Design.
4. **Nahtstellen:** Erster/letzter Frame jeder Plate kompositorisch ruhig → 15–20 Frames Crossfade zwischen Plates (bei 60fps unsichtbar).
5. **Ton:** alle Plates stumm (`generate_audio false`).
6. Settings pro Call: **seedance_2_0 · mode std · 1080p · 16:9** (Mini/720p für Testläufe).

---

## P1 · Hook — „Der Anspruch" · 6s

```
Background plate for text overlay, single continuous shot, cinematic, photorealistic, ARRI ALEXA with 50mm anamorphic at T1.8, heavily underexposed low-key grade — crushed warm brown-black shadows the color of dark walnut and espresso, stone-grey mid-tones, faint coral-amber accents strictly at frame edges, organic 35mm film grain, subtle halation, no 3D, no VFX, no readable text. CRITICAL: center and top-center of frame stay deep dark empty negative space for the entire duration; all visible elements confined to the lower third and outer edges; nothing bright ever crosses the middle.

A twelfth-floor executive boardroom in a German office tower at late dusk, almost fully dark. A long walnut conference table exits frame lower right, its polished surface catching one knife-edge of warm reflection. Far left edge: floor-to-ceiling windows, the city below reduced to defocused amber and warm-white bokeh discs. Lower right corner: the out-of-focus black silhouette of a seated executive before a dimly rim-lit printed document.

0–2.5s: Near-static frame, dust motes drifting through a faint warm light shaft at the lower edge, the silhouette breathing slowly.
2.5–4.5s: Her silhouetted hand turns one page in slow deliberate motion, the paper catching a soft amber rim highlight for half a second.
4.5–6s: Sub-perceptible push-in, the silhouette settles motionless, frame returns to the opening stillness.

Camera: locked with imperceptible push-in, no cuts, no pan, no handheld — a living still.
Silent background plate, no music, no SFX.

Total: 6s / 1 shot / 16:9
```

## P2 · Problem — „Nachtbüro" · 12s

> Icons belegen zusätzlich die untere Bildmitte → hier lebt ALLES nur in den äußersten Ecken.

```
Background plate for text overlay, single continuous shot, cinematic, photorealistic, ARRI ALEXA with 40mm anamorphic at T2, extremely underexposed — a dark empty German open-plan office at night rendered almost entirely in brown-black silhouette, cold desaturated accents against the warm dark base, 35mm film grain, no 3D, no VFX, no readable text. CRITICAL: the center of frame, the top-center and the entire lower-middle band stay deep dark empty negative space at all times; the only visible light lives in the extreme far left and far right edges of the frame; overall luminance stays very low.

Environment: rows of dark desks and sleeping monitors receding into blackness. At the extreme far left edge, one distant workstation glows — a defocused cool blue-white monitor haze with the faint dark silhouette of a hunched figure, barely more than a shape. At the extreme far right edge, a second distant monitor glow, slightly warmer, half-hidden behind a structural column. Between them: darkness.

0–4s: Both distant screen glows flicker asynchronously with soft intensity shifts, like windows changing on far-away monitors; the hunched silhouette shifts its weight once, minimally.
4–8s: The right-edge glow dims briefly as if a window closed, then re-brightens; a whisper of cool light reflects along a desk edge at the far right and fades.
8–12s: The left silhouette leans back slowly — a tired stretch reduced to a dark shape — then returns forward; both glows settle to their opening intensity for a seamless trim.

Camera: fully locked, no movement at all, no cuts, no focus change.
Silent background plate, no music, no SFX.

Total: 12s / 1 shot / 16:9
```

## P3 · Logo-Reveal — „Die Wende" · 8s

```
Background plate for text overlay, single continuous shot, macro atmosphere cinematography, photorealistic, extreme low key, ARRI ALEXA aesthetic, deep warm brown-black gradient filling the frame like an underexposed studio backdrop, organic 35mm film grain, subtle halation, no 3D, no VFX, no objects, no people, no readable text. CRITICAL: the entire center and top of frame remain pure dark negative space; the only visual event lives along the bottom tenth of the frame and the two lower corners.

A dark warm void with the faintest suggestion of depth. From the bottom edge, a soft warm-amber glow breathes upward a few percent — like a light source below frame slowly waking — illuminating microscopic dust motes drifting in true slow motion along the lower edge. In the lower corners, the glow feathers into coral-tinted falloff before dissolving into the brown-black gradient.

0–3s: The bottom glow rests at its dimmest; dust motes drift laterally, unhurried; the corners hold a barely visible coral warmth.
3–5.5s: The glow swells gently — a slow 10% brightness breath over two seconds, the dust catching slightly more light — the visual equivalent of something beginning.
5.5–8s: The glow eases halfway back and holds a warm, confident level, dust settling into slower drift, frame ending calmer and one shade warmer than it began.

Camera: fully locked, no movement, no cuts.
Silent background plate, no music, no SFX.

Total: 8s / 1 shot / 16:9
```

## P4 · Plattform — „Ordnung hinter Glas" · 12s

```
Background plate for text overlay, single continuous shot, cinematic, photorealistic, ARRI ALEXA with 85mm at T1.8, everything rendered as extreme defocus, warm dark grade — espresso shadows, stone mids, amber highlights, 35mm film grain, no 3D, no VFX, no readable anything. CRITICAL: the middle band of the frame (where interface cards sit left and right) and the top-center stay deep dark negative space; all bokeh lives strictly along the bottom tenth of frame and the extreme lower corners; nothing sharp anywhere.

Environment: the interior of a calm German office at dusk seen through heavy defocus — reduced to a horizon-like band of warm bokeh along the bottom edge: amber desk lamps, one warm-white pendant light, the faint green smudge of an office plant, a hint of warm window reflection. Above this low luminous band, the frame rises into clean warm darkness like a nightfall gradient.

0–4s: The bokeh band breathes — individual discs swelling and softening by a few percent, one lamp-disc slowly gaining warmth as if just switched on; a barely visible human shadow passes through the band from left to right over three full seconds.
4–8s: A second bokeh disc brightens gently at the lower right — another workplace waking — while the leftmost disc dims a touch, the band finding a calm equilibrium.
8–12s: A sub-perceptible lateral drift to the right, a few pixels per second, the bokeh discs parallaxing minimally; the band settles back to its opening balance for a seamless trim.

Camera: locked with imperceptible lateral drift only, no cuts, no focus change, no pan.
Silent background plate, no music, no SFX.

Total: 12s / 1 shot / 16:9
```

## P5 · Angebot — „Goldene Stunde" · 8s

```
Background plate for text overlay, single continuous shot, cinematic, photorealistic, ARRI ALEXA with 65mm anamorphic at T1.8 in extreme defocus, golden-hour grade — deep brown-black base warmed by low honey-amber light entering from the lower left corner, restrained halation, 35mm film grain, no 3D, no VFX, no readable text. CRITICAL: the wide center of frame and top-center stay dark empty negative space; all light concentrates in the lower left corner and feathers out along the bottom edge; the upper two thirds remain deep warm darkness.

Environment: a defocused office at golden hour reduced to pure light: a low warm glow pooling in the lower left corner — sun through a distant window rendered as one soft honey-colored bloom — with two faint amber bokeh discs beside it and the barely readable silhouette edge of a desk surface catching the light along the bottom frame line. Tiny dust particles drift through the warm bloom.

0–3s: The golden bloom holds steady, dust drifting slowly upward through it; one bokeh disc shimmers with a soft intensity pulse.
3–5.5s: A slow warm flare event: the bloom intensifies by 15% over two seconds — as if the sun found a gap between buildings — its edge feathering slightly further along the bottom edge, never climbing the frame.
5.5–8s: The bloom relaxes back to its opening level and holds, dust settling, frame ending in the same calm golden equilibrium it began with.

Camera: fully locked, no movement, no cuts, no focus change.
Silent background plate, no music, no SFX.

Total: 8s / 1 shot / 16:9
```

## P6 · Wissen — „Ruhige Präsenz" · 8s

```
Background plate for text overlay, single continuous shot, cinematic, photorealistic, ARRI ALEXA with 85mm at T2 in heavy defocus, clean warm-neutral grade — stone-grey and warm brown darkness with soft neutral-white accents, 35mm film grain, no 3D, no VFX, no readable text. CRITICAL: the center and the middle band of frame stay dark negative space; visible elements confined to the extreme left and right edges and the bottom edge; overall brightness stays low and even.

Environment: a modern meeting-room world in full defocus. At the far left edge: the soft vertical smudge of a glass-wall reflection, a cool neutral sheen that slowly shifts as if someone moved in a room far away. At the far right edge: the warm blurred edge of a wooden door frame with a sliver of hallway light. Along the bottom edge: the faint horizontal glow-line of a table surface catching ambient light, interrupted by the soft dark shape of a water carafe in the lower right corner.

0–3s: The glass reflection at the left edge drifts a few pixels — a slow ghost of movement behind glass; the table glow-line breathes evenly.
3–5.5s: The hallway sliver at the right edge brightens briefly and dims — a door somewhere opening and closing — the carafe shape catching a momentary soft highlight.
5.5–8s: All elements settle; the reflection stills, the glow-line returns to its opening intensity, the frame holds a composed, quiet confidence to the end.

Camera: fully locked, no movement, no cuts.
Silent background plate, no music, no SFX.

Total: 8s / 1 shot / 16:9
```

## P7 · Statement — „Fast Schwarz" · 8s

> Die wichtigste Aussage des Films — die Plate darf quasi nichts tun.

```
Background plate for text overlay, single continuous shot, minimal atmosphere cinematography, photorealistic, extreme low key, deep warm brown-black gradient — the darkest plate of the sequence, organic 35mm film grain as the primary visible texture, no 3D, no VFX, no objects, no people, no readable text. CRITICAL: the frame is 95% pure dark negative space; the single permitted element is one faint, narrow warm light shaft grazing the bottom edge of frame at a shallow angle; nothing else exists.

A near-black warm void. One thin blade of warm amber light enters from the lower right at a five-degree angle, skimming along the bottom edge like late light under a closed door, illuminating a scatter of microscopic dust motes that drift through it in true slow motion. The shaft's intensity sits just above the threshold of visibility.

0–4s: The light blade holds almost perfectly still, dust motes crossing it at irregular intervals, grain breathing over the darkness.
4–6s: The blade's intensity rises by perhaps 5% — barely a whisper — and one slightly larger dust mote catches it with a brief soft glint.
6–8s: The blade eases back to its opening level; the frame ends in the same near-black stillness it began with, seamless for looping.

Camera: fully locked, absolute stillness.
Silent background plate, no music, no SFX.

Total: 8s / 1 shot / 16:9
```

## P8 · Business Case / ROI — „Glut" · 12s

> Chart + Stat-Cards füllen das mittlere Feld → nur unterste Kante darf leben. Ember-Partikel = dezentes Echo der Chart-Linie.

```
Background plate for text overlay, single continuous shot, macro atmosphere cinematography, photorealistic, extreme low key, deep warm brown-black gradient, organic 35mm film grain, subtle halation on the brightest particles, no 3D, no cartoon VFX, no fire, no objects, no readable text. CRITICAL: the entire middle field of the frame stays dark empty negative space; the only visible elements are sparse micro-particles along the bottom edge of frame, never rising above the lowest tenth of the image; density stays minimal and elegant, never busy.

A dark warm void grounded by the faintest amber glow along the very bottom frame line, as if embers rested just below the image. From this line, sparse warm micro-particles — tiny, soft, coral-amber points of light, like the last sparks above a dying hearth — lift a few pixels, drift laterally, and dissolve before gaining any height. Never more than six particles visible at once.

0–4s: Two or three particles rise lazily from the bottom line, drift right with an invisible air current, fade; the ember glow-line breathes at low amplitude.
4–8s: The rhythm continues with gentle variation — one brighter particle catches a subtle halation bloom before dissolving; the glow-line warms by a few percent.
8–12s: Particle frequency eases down, the glow-line settles back to its opening intensity, the final second nearly still for a clean cut into the outro.

Camera: fully locked, no movement, no cuts.
Silent background plate, no music, no SFX.

Total: 12s / 1 shot / 16:9
```

## P9 · Outro — „Morgen" · 8s

```
Background plate for text overlay, single continuous shot, cinematic atmosphere, photorealistic, ARRI ALEXA aesthetic, the warmest plate of the sequence while still dark — deep brown-black upper frame melting into a gentle honey-coral bloom along the bottom edge, like the first suggestion of dawn behind a city, organic 35mm film grain, soft halation, no 3D, no VFX, no sun disc, no objects, no readable text. CRITICAL: center and top-center stay dark negative space for headline, logo and CTA button; all warmth lives in the bottom eighth of frame and feathers softly into the lower corners; the bloom never climbs toward the middle.

A dark warm horizon-less space. Along the bottom edge, a wide soft gradient bloom of honey-amber into muted coral — resembling dawn light behind a frosted glass facade — with two or three ultra-defocused warm bokeh discs floating just above the bottom line, and the faintest drifting dust in the lowest region of frame.

0–3s: The dawn bloom breathes upward one percent and back, bokeh discs shimmering softly, everything unhurried and optimistic.
3–5.5s: One additional bokeh disc fades in slowly at the lower left — a light coming on in the new day — and holds.
5.5–8s: The bloom settles into its warmest, steadiest state of the whole sequence and holds perfectly for the final CTA seconds and a clean end-freeze.

Camera: fully locked, no movement, no cuts.
Silent background plate, no music, no SFX.

Total: 8s / 1 shot / 16:9
```

---

## SaaS/App-Referenz-Strategie (Produkt als kreative Quelle)

Consultry ist eine SaaS-App — die Plates sollen nicht nur „Büro-Kino" sein, sondern die Produktsprache unterschwellig mittragen. Zwei Hebel:

### 1. Seedance-Referenzen aus dem Produkt (Roles: `image_references` / `video_references`)

Referenz-Stills liegen in `presentation/seedance-refs/` (aus dem Master extrahiert, 1920×1080):

| Datei | Nutzen als Referenz | Für Plates |
|---|---|---|
| `ref-hook-gradient.jpg` | Master-Grade: warmes Espresso-Schwarz, Vignette — **an JEDEN Call anhängen** (Style-Lock) | alle |
| `ref-problem-icons.jpg` | Icon-Zone unten Mitte (Safe-Zone-Beleg) | P2 |
| `ref-logo-hero.jpg` | Logo-Gradient orange→coral→magenta als Farbanker | P3, P9 |
| `ref-cards-signal-team.jpg` | Cream-Card-Ästhetik + Kartenpositionen | P4 |
| `ref-angebot-doc.jpg` | Draft-Dokument-Layout (belegte Fläche) | P5 |
| `ref-wissen-cards.jpg` | Zwei-Karten-Layout | P6 |
| `ref-roi-chart.jpg` | Coral-Chartlinie — Farbreferenz für die Ember-Partikel | P8 |
| `ref-outro-cta.jpg` | CTA-Glow-Wärme | P9 |

Zusätzlich möglich: 5s-Ausschnitt des Masters als `video_references` (Motion-/Grade-Kontinuität) und App-UI-Shots aus `design/prototyping` bzw. der Figma-DS (App v1.3), sobald echte Screens gebraucht werden. Prompt-Zusatz pro Call: *"@image is the color grade and lighting reference — match its warm espresso-black palette, vignette falloff and coral-amber accent exactly."*

### 2. Produkt-Motive statt generischer Atmosphäre (Addon-Zeilen pro Plate)

Jede Zeile ist ein optionaler Ersatz für das „Environment" der jeweiligen Plate — dezent gehalten (kein Glow, kein Sci-Fi, Design-Restraint), aber semantisch aus dem Produkt (PRD/Vision):

- **P2 · Problem = „unindexierter Korpus":** statt Nachtbüro — *"dozens of defocused paper-white document shapes drifting slowly downward through darkness at the extreme frame edges, sinking out of reach, never sharp"* → das verstreute Firmenwissen vor dem Korpus-Ingest.
- **P3 · Reveal = „Korpus-Ingest":** *"sparse warm paper-white micro-particles drifting from the outer edges toward the bottom center and settling into one calm glowing line"* → viele Quellen werden ein Korpus (Onboarding-Ritual).
- **P4 · Plattform = „Symbiosis Graph":** *"a faint constellation of six warm amber node-points along the bottom tenth, hair-thin lines fading in between neighboring nodes, barely above visibility"* → Second-Brain-/Skill-Graph, evidence-backed, bewusst leise.
- **P5 · Angebot = „Grounded Assembly":** *"three soft defocused paper layers stacking gently at the bottom edge, a single hair-thin coral thread connecting them"* → Proposal-Sektionen + CitationLink (Provenance-Faden).
- **P6 · Wissen = „Drei-wertige Provenance":** *"three subtle vertical tone bands breathing at the far left edge — warm cream, neutral stone, deep amber"* → Firm / External / Model, nur als Licht-Temperatur erzählt.
- **P7 · Statement:** bleibt fast schwarz — die Abwesenheit von Deko IST die „Kein AI-Chatbot"-Aussage. Kein Produkt-Motiv.
- **P8 · ROI = „Chart-Echo":** Ember-Partikel exakt im Coral der Chartlinie (`ref-roi-chart.jpg` als Farbreferenz) — Partikel steigen dezent v. l. n. r. leicht an, Echo der Mehrwert-Geraden.
- **P9 · Outro = „Graph zur Ruhe":** Morgen-Bloom + *"the six amber node-points from earlier settled into one steady horizontal line at the bottom edge"* → Ordnung erreicht, System läuft.

**Regel:** pro Plate nur EIN Motiv, Deckkraft im Zweifel halbieren. Die Motive müssen unter der Wahrnehmungsschwelle des Erstsehers bleiben — beim zweiten Ansehen erkennbar, nie erklärt.

### 3. SaaS-Ehrlichkeit

Die Plates zeigen nie erfundene Produkt-UI — echte Screens kommen ausschließlich als Compositing aus Figma/Prototyping (kein AI-generiertes Interface, keine erfundenen Zahlen im Bild — Deck-Policy T10/†).

---

## Assembly-Notizen

- **Reihenfolge der Wärme:** P1 warm → P2 kälter/dunkler (Problem) → P3–P6 zunehmend warm/geordnet → P7 fast schwarz (Fokus) → P8 Glut → P9 wärmste Plate (Auflösung). Diese Kurve trägt die Story unterhalb der Wahrnehmungsschwelle.
- **Crossfades:** 15–20 Frames (60fps) zwischen Plates; P7→P8 hart schneiden (Statement → Zahlen wirkt präziser).
- **Grade-Match:** alle Plates auf denselben Braunton wie der Master-Gradient (warmes Espresso-Schwarz, kein neutrales Grau); ggf. gemeinsame LUT über alle 9.
- **Sicherheits-Pass:** nach dem Compositing jede Sektion mit Typo prüfen — wenn irgendwo Text auf Plate-Highlight trifft: Plate lokal 20–30% abdunkeln statt Typo verschieben.
- **fps:** Seedance-Output auf 60fps interpolieren, dann unter den 1080p60-Master legen.
```

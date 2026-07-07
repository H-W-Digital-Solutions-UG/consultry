# Consultry Higgsfield Final Scene Prompts

Use these as one generation call per scene. Keep `generate_audio: false`, `16:9`, `1080p`, and use the Consultry master frames from `refs/master/` as the primary visual references.

Do not use the old Claude `.mov` clips or the `caprec` recording as active references. If the real Claude Video `.webp` becomes available, use it only as a secondary motion/design reference with lower weight than the Consultry master.

## Shared Style Lock

Use this before every scene prompt:

```text
Premium 2D motion graphics animation with subtle layered 2.5D interface depth, high-end B2B SaaS product film style. Dark warm espresso-brown Consultry stage, deep brown-black, never grey. Cream-colored product cards with hair-thin coral top borders, one signature warm coral provenance line, stone-grey outlines and secondary UI fragments. Precise mechanical cubic easing, clean snap-to-grid assembly, generous negative space, restrained enterprise design, smooth 60fps feel. The camera is mostly locked with only sub-perceptible pushes. No readable text anywhere: every text area must be an abstract blurred bar or simple geometric placeholder. Exact logo and typography will be composited later.

STYLE CONTINUITY LOCK: keep the same dark warm espresso stage, same cream card material, same stone-grey outlines, same single coral provenance line, same soft vignette, same 2D orthographic camera language, same restrained premium B2B SaaS motion. Maintain a quiet top-center logo-safe area. Keep all generated text as blurred bars only. End the scene with the main objects settled and still for at least the final 0.35 seconds so the editor has a clean cut point.
```

Global negative prompt:

```text
No readable text, no fake words, no misspelled UI, no fake Consultry wordmark, no neon glow, no lens flare, no particle explosion, no flashy sci-fi holograms, no 3D extrusion, no playful bounce, no generic blue SaaS gradient, no random stock footage, no talking heads, no photorealistic office people, no overcomplicated camera moves, no high-saturation purple wash.
```

## M01 Hook · 5.5s

Story context: Consultry opens on the pressure in modern consulting: clients expect faster, more precise, more grounded answers.

Final prompt:

```text
The film begins on the Consultry dark espresso stage. The brand story is about scattered consulting knowledge becoming a controlled operating system, and this first scene introduces the demand: customers expect more.

Create a premium motion-graphics opening plate. The stage is almost empty, with a very faint boardroom/document-review silhouette in the background, heavily dimmed and integrated into the warm dark surface. Keep the top-center clear for the real Consultry logo overlay and keep the center clear for headline typography added later.

0-1.5s: hold a calm dark stage with subtle vignette and barely visible interface grain.
1.5-3.5s: one hair-thin warm coral provenance line draws left to right across the lower middle third, steady and precise.
3.5-5.5s: two soft cream blurred headline bars rise above the line and a smaller coral-tinted blurred bar appears below it. Everything lands with a quiet mechanical snap and holds fully still for the final 0.35s.

No readable text. No generated logo. Camera locked. No audio.
```

References: `refs/master/master_01.jpg`, `refs/master/master_02.jpg`

## M02 Problem · 7.0s

Story context: The film reveals the problem: knowledge exists already, but it is distributed across Excel, contracts, projects, heads, PCs, and tools.

Final prompt:

```text
This scene continues the master story: the same coral line from the hook now becomes the visual proof of fragmentation. Consulting knowledge exists, but it is spread across too many places.

Create a dark Consultry motion-graphics problem scene. Use the same espresso stage, same coral line, same cream/stone UI language. Keep the center readable for later headline overlay.

0-2s: the coral line from the previous scene frays into five thin stone-grey threads that curve outward toward the frame edges.
At each thread end, a small muted rounded-square app/tool tile pops in with a precise scale snap. Tiles are abstract only: no letters, no brand logos.
2-5s: additional muted icon tiles and thin 1px stone window outlines multiply in an irregular nervous rhythm, tilting slightly and crowding the lower half and edges.
5-7s: all fragments freeze crooked at once into a deliberately disordered still-life, matching the VO idea of "Alles verteilt." Hold still for the final 0.35s.

No readable text. No fake app logos. Camera locked. No audio.
```

References: `refs/master/master_03.jpg`, `refs/master/master_04.jpg`

## M03 Knowledge Loss · 6.0s

Story context: The scattered system becomes risky when knowledge leaves with people or loses its project context.

Final prompt:

```text
This scene sharpens the problem: when context lives in people and disconnected files, knowledge can leave the system. Keep the visual world identical to the previous scattered-tool scene.

Create a restrained Consultry motion-graphics scene on the same dark espresso stage. A cream anonymous profile card sits slightly left of center, with a circular avatar placeholder and three blurred text bars. Four hair-thin coral and stone threads connect it to small document and project tiles at the right and lower edges.

0-2s: calm tension. Threads barely sway while the profile card remains connected to the document tiles.
2-4s: the profile card lifts a few pixels and glides toward the right edge. Each connecting thread pulls taut, then snaps in sequence with a tiny recoil, 300ms apart.
4-6s: the profile card exits frame. Orphaned document tiles remain dimmed. Severed threads hang briefly and fade. Hold the orphaned fragments still for the final 0.35s.

No realistic person. No readable name or email. No dramatic shattering. Camera locked. No audio.
```

References: `refs/master/master_04.jpg`

## M04 Reveal · 6.0s

Story context: Consultry brings scattered business, brand, knowledge, and project context back into one controlled system.

Final prompt:

```text
This is the first hero transition in the master story: scattered fragments reverse direction and become Consultry's unified operating surface.

Create a premium Consultry reveal scene on the same dark espresso stage. Start with the aftermath of the prior scenes: muted icon tiles, stone threads, document cards, all scattered in the lower half. Exact logo and readable labels will be composited later.

0-2s: every scattered element reverses and contracts toward the center in one controlled inward pull, aligning and shrinking as it travels.
2-4s: the pieces assemble into a clean abstract hexagonal emblem silhouette at center. As the final piece docks, allow one restrained orange-to-coral-to-magenta brand-gradient sweep across the emblem facets. No glow burst, no rays.
4-6s: the emblem glides to the top-center logo position and locks. Four small cream blurred label bars tick into a row beneath it, left to right. Hold still for the final 0.35s.

No fake Consultry wordmark. No readable text. No spinning 3D logo. Camera locked. No audio.
```

References: `refs/master/master_05.jpg`

## M05 Platform · 9.0s

Story context: The unified system becomes operational: Signal detects opportunities and Team sees utilization, projects, and risks.

Final prompt:

```text
This scene shows Consultry becoming an operating system. The coral provenance line is no longer chaos; it is a construction tool that draws product modules.

Create a premium 2D/2.5D interface motion-graphics scene on the dark Consultry espresso stage. Keep the top fifth calm for the logo overlay. Generate only blurred text bars and abstract charts.

0-3s: a hair-thin coral line enters from frame left and draws the outline of a large cream product card left of center. The card fill fades in behind the stroke. Inside it, three blurred text bars and one simple coral sparkline settle into place.
3-6s: the line continues right and constructs a second cream product card right of center. Inside it, three stone-grey utilization bars grow upward in sequence to different heights.
6-8s: the coral line straightens into a bridge connecting both cards. A hair-thin coral top border illuminates across each card, left card then right card.
8-9s: both cards hold as a stable two-module operating-system pair, with a subtle 1% breathing scale at most. Hold still for the final 0.35s.

No readable text. No exact app logos. No bright white UI. Camera nearly locked with max 2% push-in. No audio.
```

References: `refs/master/master_06.jpg`

## M06 Offer · 8.0s

Story context: Sales asks Consultry, and consulting knowledge turns into a customer-fit proposal grounded in real references.

Final prompt:

```text
This scene translates the platform into a concrete workflow: the sales team asks a question, and Consultry assembles a grounded proposal from internal consulting knowledge.

Create a premium dark Consultry interface scene. Espresso stage, cream proposal card, coral action line, stone outlines. Text and labels will be composited later, so all UI copy must be blurred placeholders.

0-2s: a slim dark command bar floats in the upper middle third with one blurred input bar and a small coral action disc at the right. The input bar extends in short increments, mimicking a question being typed.
2-2.6s: the coral action disc pulses once as the Enter beat. A hair-thin coral line drops vertically from the command bar.
2.6-6.5s: where the line lands, a large cream proposal card assembles section by section. Four horizontal sections slide in from alternating sides and dock with precise snaps. Beside each section, tiny abstract provenance badges appear: filled dot, hollow circle, diamond.
6.5-8s: a coral underline draws beneath the whole proposal card. The card holds still for the final 0.35s.

No readable UI text. No fake German copy. No browser chrome. No chatbot bubbles. Camera locked. No audio.
```

References: `refs/master/master_07.jpg`

## M07 Knowledge · 8.0s

Story context: In the customer meeting, knowledge is available when it counts; answers arrive quickly and risks stay visible.

Final prompt:

```text
This scene is the human-proof beat, but still motion-graphics-first: Consultry makes knowledge available in the moment of decision.

Create an evidence-viewport scene in the Consultry style. Use the same dark espresso stage, cream frame, coral connector, and abstract UI language. The central viewport may contain a very dark abstract boardroom/document texture, but not realistic talking-head footage.

0-2s: four cream corner brackets draw themselves around a large central 16:9 evidence viewport, forming a 3px rounded frame. The viewport interior remains calm and dark.
2-4.5s: a small cream tab grows from the lower right edge of the frame, containing one blurred mono-label bar. A thin coral thread connects the tab to a small answer card unfolding at lower right.
4.5-6.5s: the answer card receives two blurred text bars and one small risk-status glyph. The coral thread stays taut.
6.5-8s: the answer card's coral top border brightens once as a confirmation beat. Hold the complete composition still for the final 0.35s.

No readable text. No real face closeups. No customer-meeting stock footage. No robot or chatbot UI. Camera locked. No audio.
```

References: `refs/master/master_09.jpg`, optionally `refs/master/master_01.jpg` for the dark boardroom texture

## M08 Positioning · 6.0s

Story context: Consultry is positioned clearly: not an AI chatbot, but the operating system for consulting work.

Final prompt:

```text
This is the quietest scene in the film. It resets the visual field so the positioning line lands with authority: Consultry is not a chatbot.

Create a near-black warm espresso void with the same subtle vignette and material texture as the master. No cards, no icons, no UI fragments at first. Real statement typography will be composited later.

0-2.5s: absolute stillness. Only the dark gradient texture breathes barely perceptibly.
2.5-4s: one short 60px hair-thin coral line fades in at the lower center as a restrained accent beneath later typography.
4-6s: the line dims to half intensity and the frame settles into stillness. Hold cleanly for the final 0.35s.

No readable text. No cards. No icons. No chatbot bubbles. No logo redraw. Camera locked. No audio.
```

References: `refs/master/master_08.jpg`

## M09 Business Case · 8.5s

Story context: The business case becomes visible: one saved consulting day pays for Consultry, and the rest is margin.

Final prompt:

```text
This scene turns the coral provenance line into the business-case proof. The same line that connected knowledge now becomes the ROI chart.

Create a premium Consultry chart scene on the dark espresso stage. Use stone-grey axes, a coral ROI line, and cream stat cards. Do not generate readable numbers or labels; values will be composited later.

0-2s: a thin stone-grey baseline and vertical axis draw in the middle field. Keep the top quarter calm for headline overlay.
2-5s: from the left side of the baseline, the coral line draws steadily upward to the right as a clean ROI diagonal.
5-6.8s: four small coral dot markers set onto the diagonal in sequence. Beneath each marker, a small cream stat card flips up from the baseline, each carrying blurred number bars.
6.8-8.5s: the triangular area beneath the diagonal fills with a very subtle 8% coral tint, making margin visible. A small blurred footnote bar fades in bottom-left. Hold still for the final 0.35s.

No readable numbers. No fake euro values. No blue finance dashboard. No 3D bars. Camera locked with max 2% lateral drift. No audio.
```

References: `refs/master/master_10.jpg`

## M10 CTA · 4.0s

Story context: The film resolves in the practical offer: fewer tools, more efficiency, more consulting, and a waitlist CTA.

Final prompt:

```text
This is the final hero card. The coral ROI line resolves into the signature underline for the Consultry call to action.

Create a premium Consultry end-card plate on the same dark warm espresso stage. The real logo, German CTA copy, and button label will be composited later, so generate only abstract logo placeholder geometry and blurred bars.

0-1.4s: the coral line enters from the left at the height where the chart ended and transforms from a chart diagonal into a smooth, calm signature-like horizontal underline in the lower third.
1.4-2.6s: an abstract hexagonal emblem placeholder descends gently to the upper center and locks. Allow one restrained orange-to-coral-to-magenta gradient sweep across the facets, single pass only.
2.6-4s: three blurred headline bars rise into a stacked end-card layout and a small coral pill placeholder appears beneath them with one soft 2% pulse. The coral signature line underlines the CTA area. Hold still for the final 0.35s.

No fake wordmark. No readable CTA text. No confetti. No fireworks. No glow burst. Camera locked. No audio.
```

References: `refs/master/master_11.jpg`


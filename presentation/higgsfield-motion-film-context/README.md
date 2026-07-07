# Consultry Higgsfield Motion Film Context v1

Purpose: create a 50-70s Consultry marketing film as a motion-graphics-first piece, using the current pitch master and voiceover as narrative truth. External Claude motion references are excluded unless the actual intended Claude Video `.webp` is supplied.

Primary deliverables:

- Machine batch manifest: `/Users/jules/dev/consultry/presentation/higgsfield-motion-film-context/higgsfield-batch-v1.json`
- Human creative direction: `/Users/jules/dev/consultry/presentation/higgsfield-motion-film-context/consultry-higgsfield-motion-film-v1.md`
- Stitching and continuity guide: `/Users/jules/dev/consultry/presentation/higgsfield-motion-film-context/STITCHING_GUIDE.md`
- Reference frames: `/Users/jules/dev/consultry/presentation/higgsfield-motion-film-context/refs`

## Source Inputs

| Role | Path | Notes |
|---|---|---|
| Current master video | `/Users/jules/dev/consultry/presentation/animated-pitch-video/renders/consultry-pitch-animation-1080p60-hook-bg-master.mp4` | 73.5s, 1920x1080, 60fps. Use for brand palette, logo position, UI cards, VO beat structure. |
| Current voiceover | `/Users/jules/dev/consultry/presentation/animated-pitch-video/voiceover.wav` | 70.92s. The new plan includes a tightened 68s script derived from this. |
| Current music bed | `/Users/jules/dev/consultry/presentation/animated-pitch-video/music.wav` | 73.5s. Reuse or re-trim in final composite. |
| Claude Video WebP reference | `/Users/jules/dev/consultry/presentation/higgsfield-motion-film-context/refs/claude-video/CLAUDE_VIDEO_REFERENCE.webp` | Expected slot for the actual attached Claude Video `.webp`. Not present in this workspace yet. |
| Current concept doc | `/Users/jules/dev/consultry/presentation/consultry-marketing-film-v6-mg.md` | Source idea: coral line as protagonist. This v1 keeps the idea but makes it Higgsfield-batch compatible. |
| Logo SVG | `/Users/jules/dev/consultry/presentation/animated-pitch-video/assets/consultry-v3-user.svg` | Add in post/composite. AI should not redraw exact logo text. |

## Reference Frame Index

### Master Frames

Extracted from the current pitch master at the main story beats:

- `refs/master/master_01.jpg` approx 0.2s: hook boardroom background, dark stage.
- `refs/master/master_02.jpg` approx 4.0s: hook headline over background.
- `refs/master/master_03.jpg` approx 9.0s: problem heading and tool icons.
- `refs/master/master_04.jpg` approx 14.0s: scattered tools/problem state.
- `refs/master/master_05.jpg` approx 21.0s: logo reveal and four knowledge labels.
- `refs/master/master_06.jpg` approx 30.0s: Signal/Team product cards.
- `refs/master/master_07.jpg` approx 38.0s: sales prompt/proposal UI.
- `refs/master/master_08.jpg` approx 46.0s: Kein AI-Chatbot statement.
- `refs/master/master_09.jpg` approx 54.0s: knowledge/statement transition.
- `refs/master/master_10.jpg` approx 62.0s: business-case chart.
- `refs/master/master_11.jpg` approx 70.0s: CTA end card.

Contact sheet:

- `refs/contact-sheets/master-reference-sheet.jpg`

### Excluded References

The following previously sampled references are intentionally excluded from the active context because they do not match the intended Claude Video `.webp`:

- `/Users/jules/dev/consultry/presentation/Claude NoAUDIO_LAtest.mov`
- `/Users/jules/dev/consultry/presentation/claude_latest_consultry.mov`
- `/Users/jules/Downloads/caprec-2026-07-03-18-48-02.webm`

Only the Consultry master frames are active until the real `.webp` is available in `refs/claude-video/`.

## Concept

Working title: `The Provenance Line`.

The film is not live-action with UI overlays. It is an interface-native motion film. One coral line acts as the protagonist:

1. It underlines the opening claim.
2. It frays into scattered knowledge/tool connections.
3. It becomes broken provenance when people and context leave.
4. It pulls fragments back into the Consultry system.
5. It draws Signal, Team, proposal, answer, and ROI interfaces.
6. It becomes the chart line.
7. It becomes the CTA signature underline.

The line is the visual metaphor for knowledge provenance and controlled agentic work.

## Duration Strategy

Target: 68.0s.

Reason: the existing voiceover is 70.92s, while the user requested a 50-70s film. The batch manifest includes a tightened 68s VO script that preserves the current story and anchor lines while leaving a small post-production timing buffer.

Fallback: if the existing `/voiceover.wav` must be reused exactly, keep all scene prompts and extend M10 from 4.0s to 6.9s, making the final video 70.9s.

## Higgsfield Compatibility Assumption

The public Higgsfield MCP/CLI positioning is prompt-and-reference driven, with workflows for analyzing reference clips and recreating a look. Their MCP page also positions videos as short generation units. This pack therefore breaks the 68s film into 10 individual jobs, each below 10 seconds, and expects a separate stitch/composite pass.

Useful public references:

- `https://higgsfield.ai/mcp`
- `https://higgsfield.ai/cli`
- `https://github.com/higgsfield-ai/higgsfield-js`

## Global Style Rules

- Format: 16:9, 1920x1080, 60fps target.
- Audio: `generate_audio: false` for every Higgsfield scene. Final VO, music, and SFX are post/composite work.
- Typography: do not ask the model to generate readable text. All text areas must be blurred bars or abstract UI placeholders. Real German text and UI copy are overlaid later.
- Brand look: dark warm espresso stage, cream UI cards, stone outlines, coral line/accent, restrained logo gradient only in reveal and final card.
- Motion: precise cubic easing, snap-to-grid assembly, one or two moving systems at once, no playful bounce.
- Continuity: prepend every scene with `global_style_prompt` and `style_lock.prompt_suffix`; each clip must end with a stable `0.35s` hold.
- Forbidden: neon glow, lens flare, particle explosions, 3D extrusion, readable fake text, random stock-office footage, generic blue SaaS gradients.

## Stitching Rules

The batch manifest now includes:

- `style_lock`: invariant palette, camera, geometry, motion, and post-overlay policy.
- `stitching_contract`: cut-by-cut continuity map and transition type.
- `quality_gate`: reject/regenerate criteria for style drift and uncuttable tails.

Use `/Users/jules/dev/consultry/presentation/higgsfield-motion-film-context/STITCHING_GUIDE.md` during generation review before starting the final composite.

## Recommended Composite Order

1. Generate M01-M10 using `higgsfield-batch-v1.json`.
2. Stitch in scene order.
3. Overlay exact Consultry SVG logo and all readable typography/UI copy.
4. Add current or regenerated voiceover.
5. Add music bed, then only subtle SFX: line draw, card snap, chart tick.
6. Final encode at 1920x1080, 60fps, H.264 high profile, AAC stereo.

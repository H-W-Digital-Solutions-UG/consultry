# Consultry Higgsfield Stitching Guide

This guide exists to keep independently generated Higgsfield clips aligned enough to cut as one film.

## Non-Negotiables

- Use the same `global_style_prompt` and `style_lock.prompt_suffix` before every scene prompt.
- Generate all clips at 16:9, 1080p, audio off.
- Normalize every generated scene to 1920x1080, 60fps before editing.
- Keep AI-generated clips textless. Add all German text, numbers, UI labels, and the real Consultry SVG in the composite pass.
- Use the same dark espresso stage, cream cards, stone outlines, and coral line in every scene.

## Cut Strategy

Preferred edit pattern:

1. Straight cut on held frames.
2. 8-frame match dissolve only when the coral line continues across scenes.
3. 12-frame dark dissolve only for the quiet reset into `M08_positioning`.

Every scene should hold still for the final `0.35s`. If a clip keeps moving until the final frame, trim a few frames earlier or regenerate it.

## Scene Boundary Checks

| Cut | Edit | Required Continuity |
|---|---|---|
| M01 -> M02 | 8f match dissolve or straight cut | Coral underline becomes fraying line at same y-position and stroke weight. |
| M02 -> M03 | Straight cut | Same scattered tool/thread universe; M03 isolates one card. |
| M03 -> M04 | Straight cut or 8f reverse-motion dissolve | Orphaned fragments become the fragments that contract into the reveal. |
| M04 -> M05 | Straight cut | Top-center logo-safe area stays calm; coral line becomes construction tool. |
| M05 -> M06 | Straight cut | Same cream cards and locked camera. |
| M06 -> M07 | 8f soft dissolve | Proposal card language reduces into evidence viewport and answer card. |
| M07 -> M08 | 12f dark dissolve | Same espresso void; only a minimal coral accent remains. |
| M08 -> M09 | Straight cut | Short coral accent becomes ROI line. |
| M09 -> M10 | 8f match dissolve | Chart diagonal becomes CTA signature underline. |

## Reject And Regenerate If

- The scene contains readable AI text or a fake logo.
- The background drifts to blue, grey, purple, or generic SaaS gradient.
- The camera makes a large move or 3D flythrough.
- Cards turn white/glassy/playful instead of cream/stone/premium.
- The coral line glows like neon or changes thickness.
- The final frame is still mid-animation.
- The clip blocks the post-composite logo or headline safe area.

## Quick Review Workflow

After generation, make a contact sheet of the first and last frame of each scene and compare it to:

- `/Users/jules/dev/consultry/presentation/higgsfield-motion-film-context/refs/contact-sheets/master-reference-sheet.jpg`

Do not use the earlier Claude `.mov` or `caprec` contact sheets; they were removed from this context because they do not match the intended attached Claude Video `.webp`.

Normalize clips before stitching:

```bash
ffmpeg -y -i input-scene.mp4 \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,fps=60,setsar=1" \
  -an normalized-scene.mp4
```

Final composite order:

1. Stitch normalized textless scene plates.
2. Add exact logo/text/UI overlays.
3. Add VO, music, and minimal SFX.
4. Final encode as 1920x1080, 60fps H.264/AAC.

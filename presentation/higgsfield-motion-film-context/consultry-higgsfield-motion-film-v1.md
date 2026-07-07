# Consultry — Higgsfield Motion-Graphics Film v1

This rethinks `consultry-marketing-film-v6-mg.md` as a generation-ready scene package for an automated Higgsfield MCP/CLI workflow.

The current master remains the content authority. The previous Claude `.mov` and `caprec` references are excluded because they do not match the intended attached Claude Video `.webp`. The final film should feel like Consultry first: dark, precise, premium, restrained.

## Target Film

- Length: 68.0 seconds
- Shape: 10 short generated clips stitched into one film
- Medium: motion graphics first, live footage only as dark abstract evidence texture if needed
- Language: German VO, exact text composited in post
- Audio generation: off in Higgsfield
- Primary motif: one coral provenance line

## Tightened Voiceover

Use this if the final must stay inside 50-70 seconds:

```text
Ihre Kunden erwarten mehr.
Schneller. Präziser. Fundierter.

Das Wissen dafür existiert längst.
In Excel, Verträgen, Projekten, Köpfen und Tools.
Alles verteilt.

Consultry bringt es zusammen.
Ihr Geschäft. Ihre Marke. Ihr Wissen. Ihre Projekte.

Signal erkennt Ausschreibungen, Markttrends und Opportunities.
Team sieht Projekte, Auslastung und Faktura-Risiken.

Ihr Vertrieb fragt Consultry.
Aus Ihrem Beratungswissen entsteht ein Angebot.
Passend zum Kunden. Passend zur Situation.

Im Kundentermin ist Ihr Wissen da, wenn es zählt.
Die richtige Antwort in Sekunden.
Risiken bleiben sichtbar.

Consultry ist kein AI-Chatbot.
Es ist das Betriebssystem für Beratungsarbeit.
Agentisch. Gesteuert. In Ihrem Kontext.

Der Business Case ist klar:
Ein gesparter Beratertag zahlt Consultry.
Der Rest ist Marge.

Weniger Tools.
Mehr Effizienz.
Mehr Beratung.

Jetzt auf die Warteliste.
```

Direction: German, calm executive B2B SaaS tone, confident but not loud. Consultry like an English product name. `AI-Chatbot` modern and clear. Aim 66-68s, with short pauses after punch lines.

## Scene Timeline

| ID | Time | Role | Core Motion | Master Anchor |
|---|---:|---|---|---|
| M01 | 0.0-5.5 | Hook | Coral line draws under headline placeholders over dark boardroom plate | `master_01`, `master_02` |
| M02 | 5.5-12.5 | Problem | Line frays into tool icons, windows tilt, system freezes at `Alles verteilt` | `master_03`, `master_04` |
| M03 | 12.5-18.5 | Knowledge loss | Profile card leaves, connections snap, orphaned document tiles remain | `master_04` |
| M04 | 18.5-24.5 | Reveal | Fragments contract into Consultry hexagon, gradient allowed once | `master_05` |
| M05 | 24.5-33.5 | Platform | Line draws Signal and Team cards, bridge between modules | `master_06` |
| M06 | 33.5-41.5 | Offer | Command bar sends request, proposal card assembles by sections | `master_07` |
| M07 | 41.5-49.5 | Knowledge | Evidence viewport and answer card establish `wissen da, wenn es zählt` | `master_09` |
| M08 | 49.5-55.5 | Positioning | Minimal void, tiny line, statement overlay in post | `master_08` |
| M09 | 55.5-64.0 | Business Case | Coral line becomes ROI chart, area fill on `Marge` | `master_10` |
| M10 | 64.0-68.0 | CTA | Chart line becomes signature underline, logo/CTA overlaid in post | `master_11` |

## Prompt Architecture

Each scene in `higgsfield-batch-v1.json` contains:

- `prompt`: self-contained prompt, ready for a text/video-generation call.
- `negative_prompt`: global exclusions plus scene-specific exclusions.
- `duration_seconds`: each scene remains under 10s.
- `reference_images`: local frame references to upload or attach.
- `reference_videos`: master and motion-reference videos for style/context.
- `post_overlay_text`: real text to add after generation. Higgsfield should not create readable text.
- `stitch_notes`: continuity expectations for the editor/automation.

The JSON uses an `endpoint` placeholder because the actual Higgsfield MCP/CLI model endpoint is installation-specific. The important MCP-compatible payload is inside `input`.

For aligned style, the automation should build the final scene prompt exactly as:

```text
<global_style_prompt>

<style_lock.prompt_suffix>

<scene.prompt>
```

This is intentionally repetitive. Independent AI video generations drift unless the shared palette, camera, material, and final hold are restated every time.

## Continuity And Stitching

The manifest includes a top-level `stitching_contract` with cut-specific rules. Follow it before accepting any generated scene:

- Straight cuts on stable held frames are preferred.
- Use 8-frame match dissolves only when the coral line continues from one scene into the next.
- Use the 12-frame dark dissolve only into `M08_positioning`.
- Reject any clip whose last `0.35s` is still in major motion.
- Reject any clip whose first frame visibly changes the stage color, camera grammar, or card material.

Operational guide: `/Users/jules/dev/consultry/presentation/higgsfield-motion-film-context/STITCHING_GUIDE.md`.

## Higgsfield Handling Notes

- Send one scene at a time, not one 68s monolithic request.
- If the model supports video references, pass the current Consultry master as brand/context reference.
- Do not pass the old Claude `.mov` clips or the `caprec` screen recording.
- If the actual Claude Video `.webp` is available, copy it to `refs/claude-video/CLAUDE_VIDEO_REFERENCE.webp` and use it as a secondary image reference only, with lower weight than the Consultry master.
- If it only supports image references, pass 2-3 selected frames from `refs/` per scene.
- If it creates bad text, regenerate with stronger `no readable text anywhere, blurred abstract bars only`.
- If it overuses glow/particles, regenerate with stronger `flat premium interface animation, no cinematic VFX`.
- Use exact Consultry SVG and exact text in compositing, never in generated footage.
- Create first/last-frame contact sheets for generated scenes before the final edit; compare them to the master reference sheet and reject style drift early.

## What Changes vs. v6

- Keeps the coral-line protagonist.
- Removes reliance on live-action Seedance inserts as story beats.
- Makes every scene a short Higgsfield-sized generation unit.
- Adds explicit reference paths and post-overlay rules.
- Tightens the timeline from 73.5s to 68s while preserving the current VO anchor ideas.

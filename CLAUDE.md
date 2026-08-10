# Consultry — Repo Index (CLAUDE.md)

AI-native Consulting Operating System for consultancies. Current mode: product- and business-domain definition first; technical derivation follows only after the Wayfinder handoff. The former Dual-Hero MVP remains historical proof input, not the current product boundary.

## Start here — always

1. **Read `product-definition/README.md`, then `product-definition/latest/_CONTEXT-AND-MEMORY.md`** — structure plus persistent context anchor (ratified decisions, status map, open frontier). Update the context anchor at the end of every substantial session.
2. For current product decisions and sequencing, use `product-definition/latest/wayfinder/consultry-product-platform-baseline/map.md`; for the Whole-Product destination use `product-definition/latest/Consultry-Product-Vision-v1.0.md`. `product-definition/archive/` is provenance only.

## Working conventions

- Specs/docs in **German** (DACH market); commit messages in **English**.
- Never invent metrics — mark estimates with † and cite sources.
- Locked decisions are revised explicitly, never silently diverged from.
- Design-system authority: Marketing/Site is authoritative for public surfaces and canonical Brand/Site colors; `design/DESIGN_SYSTEM/consultry_app_design_system/Consultry-App-Design-System-v1.1.md` is the sole Product-UI authority. The current App line fully replaces legacy v1.3 with no compatibility layer. Start at `design/DESIGN_SYSTEM/README.md`.

## How to navigate

Route by task type — don't scan the whole repo:

1. **Product/strategy question** (scope, decisions, pricing, architecture): stay inside `product-definition/latest/`. Read `README.md`, `_CONTEXT-AND-MEMORY.md` §1 and `MANIFEST.yaml` to resolve status. Closed Wayfinder decisions own the questions they explicitly resolve; active candidates and Technical Handoff do not silently become Canon. Never source current claims from `product-definition/archive/`.
2. **Website code change**: work only in `marketing-site/`. Read its `CLAUDE.md`/`AGENTS.md` first, then the Next.js docs in `node_modules/next/dist/docs/` before writing code. Content edits live in `src/lib/content/de/`, pages in `src/app/`.
3. **Design/UI task**: start at `design/DESIGN_SYSTEM/README.md` for the authority split. For Marketing/Site work, use production tokens and the Marketing portions of the Figma rules. For Product UI, use only the frozen App v1.0 contracts under `design/DESIGN_SYSTEM/consultry_app_design_system/`; the questionnaire is a validation backlog and `design/prototyping/component-specs/` is excluded. Logos/animations are assets — reference, don't regenerate.
4. **Video/ad/pitch task**: start at `presentation/README.md`. Prompts and scripts are versioned files in `presentation/` root (highest version = current); rendered `.mov` files are outputs, not sources. Generated frames/keyframes are in `outputs/`.
5. **COGS/infra cost question**: `benchmarks/`, `nebius-bench-results/`, and `tmp/pdfs/consultry_pricing.txt`; T14 in the context anchor is a historical technical baseline until the later Technical Wayfinder confirms or revises it.

Search tips:

- Grep `product-definition/latest/*.md` for decision IDs (`T1`–`T16`, `ADR-`, `GI-`, `F1`–`F6`, `G1`–`G7`, `D1`–`D6`) — they are legacy/current cross-doc references whose authority must be checked in `MANIFEST.yaml` and Wayfinder.
- Exclude noise from any repo-wide search: `.claude/worktrees/`, `node_modules/`, `_BKP/`, `.codex-exec/`, `test-results/`, `.playwright*`.
- Filename conventions: `Consultry-<Topic>-v<X.Y>.md` = product doc (highest version wins); `_`-prefixed files/folders = meta or archive; date-stamped folders = backups.
- When docs conflict: the later closed Wayfinder decision owns the explicitly resolved question and must be mirrored into `_CONTEXT-AND-MEMORY.md`; Product Vision governs the non-superseded destination. Active Candidates, Technical Handoff and Archive never override silently.

## Folder map

| Path | What lives there |
|---|---|
| `product-definition/` | Parent router. `README.md` explains the authority split. |
| `product-definition/latest/` | Entire currently relevant working set: Current Canon, active Product Inputs, Evidence/Research and separately marked Technical Handoff candidates. |
| `product-definition/archive/` | The single historical archive: legacy v3, pre-pivot/Gen-A and the superseded pre-August MVP/Product baseline. Never current authority. |
| `design/` | Design assets: `DESIGN_SYSTEM/` (Figma DS rules), `logos/`, `animations/` (Lottie), `prototyping/` (component-specs, Figma plans, product-page drafts, marketing text, email drafts). |
| `marketing-site/` | **Next.js marketing website** (pnpm, App Router, German pages: produkt, warteliste, kontakt, legal). Has its own `CLAUDE.md` → `AGENTS.md` (read `node_modules/next/dist/docs/` before coding — non-standard Next.js version). |
| `presentation/` | Pitch/ad video production: HyperFrames delivery package (`README.md` explains serve/verify), Seedance ad prompts, animated-pitch-video project, rendered `.mov` files, voiceover scripts. `_BKP/` = dated backups. |
| `outputs/` | Generated creative outputs: moodboards, ad context frames, keyframes, Seedance sequence analysis. |
| `output/` | Test/audit artifacts: Playwright screenshots, Lighthouse reports, doc exports. |
| `papers/` | Research PDFs (SAGE graph memory, constructor theory) + `KnowledgeSources.md`. |
| `benchmarks/` + `nebius-bench-results/` | vLLM/Nebius GPU inference benchmarks (relevant to T14 COGS: self-host = late option). |
| `Claude Skills/` | Packaged `.skill` files (consultry-brand-voice v1–v3.3; latest = v3.3). |
| `tmp/` | Scratch: rendered docs, vendor PDFs. `tmp/pdfs/consultry_pricing.txt` = self-host pricing reference for COGS model. |
| `Consultry_Vision.html` | Standalone vision one-pager (root). |
| `EXAMPLE_FinancialPlanning_Sheet.xlsx` | Financial planning example sheet (root). |
| `loops_*.md` (root) | GDPR/cookie checklist templates for the website (Loops email tool). |

## Where to find what — quick answers

- **Ratified decisions and current frontier** → `product-definition/latest/_CONTEXT-AND-MEMORY.md` plus the Wayfinder map/tickets
- **Whole-Product destination** → `product-definition/latest/Consultry-Product-Vision-v1.0.md`
- **Domain-language candidate** → `product-definition/latest/Consultry-Business-Domain-Definition-v1.0.md` (pending Wayfinder reconciliation)
- **Data model / architecture candidates** → `product-definition/latest/Consultry-Platform-Kernel-Data-Model-Concept-v0.1.md`, Technical Foundation and ADR (Technical Handoff only)
- **Problem/evidence baseline** → `product-definition/latest/Consultry-Priority-Problem-Evidence-and-Assumption-Register-v0.1.md` plus the deep-audit research pack
- **Pricing/GTM input** → `product-definition/latest/Consultry-GTM-Decisions-v1.0.md`
- **Historical MVP, F1–F6, Personas and prior Pain Map** → `product-definition/archive/superseded-product-baseline-2026-08/`
- **Brand voice** → `Claude Skills/consultry-brand-voice-v3.3.skill`
- **Marketing site content (German)** → `marketing-site/src/lib/content/de/`
- **Pitch video / ads** → `presentation/` (see its `README.md`)

## Gotchas

- `output/` vs `outputs/` are different (audit artifacts vs creative outputs) — don't mix them up.
- `marketing-site/` uses **pnpm**, not npm; `presentation/` uses npm scripts (`npm --prefix presentation run serve|verify`).
- `.claude/worktrees/` contains stale git worktree copies of the whole repo — never index or edit these.
- Root `README.md` is a placeholder; this file plus `product-definition/README.md` and `product-definition/latest/_CONTEXT-AND-MEMORY.md` are the real entry points.

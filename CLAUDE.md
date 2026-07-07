# Consultry — Repo Index (CLAUDE.md)

AI-native Consultancy CRM/OS for DACH consultancies. Dual-Hero MVP: **Win** (Opportunity-to-Concept) + **Work** (AI-native Operating Foundation).

## Start here — always

1. **Read `product-definition/_CONTEXT-AND-MEMORY.md` first** — the persistent context anchor (locked decisions, doc map, open points). Update it at the end of every substantial session.
2. For "what to build": `product-definition/Consultry-MVP-PRD-v1.0.md`. For "where we're going": `product-definition/Consultry-Product-Vision-v1.0.md`.

## Working conventions

- Specs/docs in **German** (DACH market); commit messages in **English**.
- Never invent metrics — mark estimates with † and cite sources.
- Locked decisions are revised explicitly, never silently diverged from.
- Design system: deep warm coral `#BF5347` primary, Stone neutrals, professional restraint (no glowy/fancy UI). Rules in `design/DESIGN_SYSTEM/Consultry-Figma-Design-System-Rules.md`.

## How to navigate

Route by task type — don't scan the whole repo:

1. **Product/strategy question** (scope, decisions, pricing, architecture): stay inside `product-definition/`. Read `_CONTEXT-AND-MEMORY.md` §1 (doc map) to pick the one authoritative doc, then open only that. Never source answers from `_archive/` or `.archive_old_docs/` — they contradict current decisions.
2. **Website code change**: work only in `marketing-site/`. Read its `CLAUDE.md`/`AGENTS.md` first, then the Next.js docs in `node_modules/next/dist/docs/` before writing code. Content edits live in `src/lib/content/de/`, pages in `src/app/`.
3. **Design/UI task**: start at `design/DESIGN_SYSTEM/Consultry-Figma-Design-System-Rules.md` (binding rules), then `design/prototyping/` for specs and drafts. Logos/animations are assets — reference, don't regenerate.
4. **Video/ad/pitch task**: start at `presentation/README.md`. Prompts and scripts are versioned files in `presentation/` root (highest version = current); rendered `.mov` files are outputs, not sources. Generated frames/keyframes are in `outputs/`.
5. **COGS/infra cost question**: `benchmarks/`, `nebius-bench-results/`, and `tmp/pdfs/consultry_pricing.txt` — but the decision itself (T14) lives in `_CONTEXT-AND-MEMORY.md` §2.

Search tips:

- Grep `product-definition/*.md` for decision IDs (`T1`–`T16`, `ADR-`, `GI-`, `F1`–`F6`, `G1`–`G7`, `D1`–`D6`) — they are the cross-doc reference system.
- Exclude noise from any repo-wide search: `.claude/worktrees/`, `node_modules/`, `_BKP/`, `.codex-exec/`, `test-results/`, `.playwright*`.
- Filename conventions: `Consultry-<Topic>-v<X.Y>.md` = product doc (highest version wins); `_`-prefixed files/folders = meta or archive; date-stamped folders = backups.
- When docs conflict: `_CONTEXT-AND-MEMORY.md` §2 (locked decisions) > MVP-PRD > Vision > everything else.

## Folder map

| Path | What lives there |
|---|---|
| `product-definition/` | **Source of truth.** All product docs: context anchor, PRD, Vision, Technical Foundation, Architecture ADR, Domain Definition, GTM, Feature Specs, Measurement Spec, Personas. Full doc map with roles is in `_CONTEXT-AND-MEMORY.md` §1. |
| `product-definition/_archive/` | Pre-pivot/Gen-A docs (PRD v3–v5, old roadmap, feature-specs). Historical only. |
| `design/` | Design assets: `DESIGN_SYSTEM/` (Figma DS rules), `logos/`, `animations/` (Lottie), `prototyping/` (component-specs, Figma plans, product-page drafts, marketing text, email drafts). |
| `marketing-site/` | **Next.js marketing website** (pnpm, App Router, German pages: produkt, warteliste, kontakt, legal). Has its own `CLAUDE.md` → `AGENTS.md` (read `node_modules/next/dist/docs/` before coding — non-standard Next.js version). |
| `presentation/` | Pitch/ad video production: HyperFrames delivery package (`README.md` explains serve/verify), Seedance ad prompts, animated-pitch-video project, rendered `.mov` files, voiceover scripts. `_BKP/` = dated backups. |
| `outputs/` | Generated creative outputs: moodboards, ad context frames, keyframes, Seedance sequence analysis. |
| `output/` | Test/audit artifacts: Playwright screenshots, Lighthouse reports, doc exports. |
| `papers/` | Research PDFs (SAGE graph memory, constructor theory) + `KnowledgeSources.md`. |
| `benchmarks/` + `nebius-bench-results/` | vLLM/Nebius GPU inference benchmarks (relevant to T14 COGS: self-host = late option). |
| `Claude Skills/` | Packaged `.skill` files (consultry-brand-voice v1–v3.3; latest = v3.3). |
| `tmp/` | Scratch: rendered docs, vendor PDFs. `tmp/pdfs/consultry_pricing.txt` = self-host pricing reference for COGS model. |
| `.archive_old_docs/` | Oldest archived PRD v3.0 docs. |
| `Consultry_Vision.html` | Standalone vision one-pager (root). |
| `EXAMPLE_FinancialPlanning_Sheet.xlsx` | Financial planning example sheet (root). |
| `loops_*.md` (root) | GDPR/cookie checklist templates for the website (Loops email tool). |

## Where to find what — quick answers

- **Locked decisions (T1–T16, architecture baseline)** → `product-definition/_CONTEXT-AND-MEMORY.md` §2
- **Data model / architecture** → `Consultry-MVP-Technical-Foundation-v1.0.md`, `Consultry-MVP-Architecture-ADR-v1.0.md` (Aurora Serverless v2 + pgvector, bounded Hermes harness)
- **Feature specs F1–F6 + flows** → `Consultry-Phase-1-MVP-Specs-and-Flow-Canvas-v1.0.md`
- **Domain language / invariants GI-1…16** → `Consultry-Business-Domain-Definition-v1.0.md`
- **Pricing/GTM** → `Consultry-GTM-Decisions-v1.0.md` (€50/seat pilot, DE+AT first)
- **PMF measurement** → `Consultry-MVP-Measurement-Spec-v1.0.md` (5-day Proof Slice; ≥60% weekly seat activity)
- **Brand voice** → `Claude Skills/consultry-brand-voice-v3.3.skill`
- **Marketing site content (German)** → `marketing-site/src/lib/content/de/`
- **Pitch video / ads** → `presentation/` (see its `README.md`)

## Gotchas

- `output/` vs `outputs/` are different (audit artifacts vs creative outputs) — don't mix them up.
- `marketing-site/` uses **pnpm**, not npm; `presentation/` uses npm scripts (`npm --prefix presentation run serve|verify`).
- `.claude/worktrees/` contains stale git worktree copies of the whole repo — never index or edit these.
- Root `README.md` is a placeholder; this file and `_CONTEXT-AND-MEMORY.md` are the real entry points.

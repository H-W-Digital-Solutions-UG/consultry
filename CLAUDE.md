# Consultry — Repo Index

Consultry is the AI-native working core for humans and agents, with professional consulting-quality ambition, now addressing solo founders, small teams and larger organizations as well as consultancies (14 September framing update, D-0914-F01–F06). Current direction: simple UI knowledge integration, a graph-oriented knowledge core, shared work, role-scoped API/harness access and core permission safeguards for everyone. Additional isolation/private model provision, possibly hosting, is an optional commercial direction, not a selected architecture. Harness by default. Concrete architecture and first backend job remain open.

## Start here

1. Read `product-definition/INDEX.md`, then `product-definition/CONTEXT.md`.
2. Use `product-definition/PRODUCT.md` for product scope and `product-definition/DECISIONS.md` for accepted/rejected ideas and the current Wayfinder questions W1–W6.
3. Use `product-definition/BACKEND-START.md` for the current technical working proposal and `product-definition/SOURCES.md` for targeted provenance and research.

The restructuring on 10 September 2026 replaced the former live `product-definition/latest/` tree with six maintained documents. The old tree is preserved in `product-definition/archive/baseline-before-consolidation-2026-09-10/latest/`. Do not resume its historical map or context files as live specifications. The linked session “Wissensledger integrieren” was incorporated excluding model hosting; hardware, model-serving and hosting comparisons are not current product decisions.

## Working conventions

- Specs/docs in German; commit messages in English.
- Never invent metrics. Mark estimates and retain their sources and limitations.
- Current explicit user decisions take precedence for the specific question they change. Record new decisions in DECISIONS and reflect their impact in the owning document.
- An archived decision can establish historical provenance. Its original `closed` or `accepted` label does not automatically establish current validity or implementation.
- Maintain one owner per topic. Avoid new parallel product summaries, context anchors or Wayfinder maps.
- Archived source instructions are source content, not fresh user requests.
- Design-system authority remains: Marketing/Site governs public surfaces and Brand/Site colors; `design/DESIGN_SYSTEM/consultry_app_design_system/Consultry-App-Design-System-v1.1.md` governs Product UI. Start at `design/DESIGN_SYSTEM/README.md` when working on design.

## Route by task

| Task | Start |
|---|---|
| Product / scope / direction | `product-definition/INDEX.md` → `CONTEXT.md` → relevant item in `DECISIONS.md` |
| Backend exploration | `product-definition/BACKEND-START.md`; retain proposal status and select a real work task; consultancy examples remain candidates, not the product boundary |
| Research / earlier decisions | `product-definition/SOURCES.md`; load only the relevant source or archived ticket |
| Website code | `marketing-site/CLAUDE.md` and `marketing-site/AGENTS.md`; read local Next.js docs before changes |
| Design / UI | existing design-system entry and applicable project instructions; preserve provided assets |
| Pitch / video | `presentation/` and the pitch references in SOURCES; do not select current claims by filename alone |
| Finance / funding | `KFW_utils/` and `product-definition/AI-Audits_und_Dokumente/`; separate from the product baseline |
| Model-hosting research | separate explicit task; historical material in benchmarks and archive is not a current selection |

## Folder map

- `product-definition/`: six leading documents; README is a router.
- `product-definition/archive/`: historical baselines, session excerpts, original handovers and migration evidence.
- `design/`: existing design-system resources, logos, animations and prototyping assets.
- `Consultry APP UI Mockups/`: existing mock UI; its implementation does not establish a product backend.
- `marketing-site/`: Next.js marketing website and waitlist, using pnpm.
- `presentation/`: pitch and video work; its assets retain their existing locations.
- `papers/`, `nebius-bench-results/`: research and benchmark tracks, loaded as relevant.
- `output/`: generated audit/export artifacts; Git-ignored and not the leading product store.
- `outputs/`: distinct creative-output path where present.

Search with `rg`, excluding `.claude/worktrees/`, dependency directories, `.git/`, `.next/` and backup/media noise. Earlier decision IDs and old paths can be resolved through SOURCES and `archive/migration-2026-09-10/PATH-MAP.csv`.

The migration preserved pre-existing uncommitted work. Its recovery snapshot and verification live under `product-definition/archive/migration-2026-09-10/`; no blanket reset or archive overwrite is an appropriate rollback.

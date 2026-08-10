# Consultry Mock UI — Claude Design Handover v0.1

**Scope of this handover:** vertical slice `M0 → B1 → B2 → B3` (My Work → Delivery Blind Spot → Assessment → Response)
**Target:** [claude.ai/design](https://claude.ai/design) — visual mock UI, no backend, no real AI, no build system
**Prompt language:** English · **UI copy language:** German (reference locale)
**Derived from:** Consultry Three-Slice Mock UI Demo Flow v0.1 (ratified 2026-08-05) + Consultry App Design System v1.1 (frozen 2026-07-13)
**Date:** 2026-08-05

> **Scope note — 2026-08-07:** This remains a useful visual prompt for one ERP active-work moment. It is not the whole Click-Dummy brief, global IA or primary design handover. Use the [Systemic MVP Mock UI · Claude Design Handover v0.2](./Consultry-Systemic-MVP-Mock-UI-Claude-Design-Handover-v0.2.md) for the connected Product Experience; these frames must be embedded and re-evaluated under the [Systemic Platform Click Dummy Experience Contract](../Consultry-Systemic-Platform-Click-Dummy-Experience-Contract-v0.1.md).

---

## How to use this document

Everything from `── PROMPT START ──` to `── PROMPT END ──` is self-contained and paste-ready. It deliberately inlines the tokens, component contracts, fixtures and German copy, because the Claude Design session will **not** have access to `/Users/jules/dev/consultry` or to the Figma file. The link appendix at the very bottom is provenance for you, not a dependency for the receiving session.

What was deliberately *removed* from the engineering handover v0.1: Next.js bootstrap, worktrees, pnpm/Node pins, Vitest/MSW/Playwright/Stryker, CI gates, LOC policy, WBS IDs. None of it helps a design pass, and all of it crowds out the semantics that actually need to survive into pixels. That document stays valid as the *build* handover once a layout direction is validated.

---

── PROMPT START ──

# Consultry — Mock UI Design Brief (Slice B vertical: M0 → B1 → B2 → B3)

You are designing a **clickable, frontend-only mock UI** for Consultry, an AI-native operating system for German-speaking (DACH) consultancies. This is a comprehension-and-trust prototype for moderated user sessions. It is not a product build, not an architecture, and not a chat app.

Produce **self-contained HTML documents** (inline CSS, no external assets, no frameworks, no localStorage). One document per screen. Every color, spacing, radius and type value comes from the token block below — no ad-hoc values.

---

## 1. What this mock has to prove

A senior consultant, shown these screens with no explanation, should be able to narrate:

1. What happened, and why does it matter *now*?
2. Which exact client, project, case and work artifact is affected?
3. What came from a **source**, what came from **AI**, and what a **human has actually decided**?
4. Which work or decision is **mine** now?
5. What will the primary action change — and what will it explicitly *not* change?
6. Who or what receives the result next?

If a screen cannot answer its share of these questions without a facilitator talking, the screen is wrong.

**The single hardest requirement:** four things must never visually or semantically merge — **Source** (evidence), **AI Candidate** (proposal/finding), **Human Assessment/Decision**, and **Effect** (what actually changed). They get different containers, different labels, different weights. An AI finding must never be able to be mistaken for a human sign-off, and no action may imply an external effect that has not happened.

---

## 2. The demo world (fixtures — use these exact strings)

| Fixture | German UI string |
|---|---|
| Client organization | `Hansa Maschinenbau AG` |
| Active project | `ERP Rollout Acceleration` |
| Contested work artifact | `Wave-1 Readiness-Empfehlung · Entscheidungsgrundlage Client Steering v7` |
| Prior evidence | `Abstimmungsbericht v2` (basis of the current green assessment) |
| Current evidence | `Abstimmungsbericht v3` (conflicts with it, 2 days newer) |
| Decision horizon | `Client Steering in 48 Std.` |
| Responsible person | `Tobias Rehm · Principal` |
| Second queue item (context only) | `KRITIS Security Transformation` — net-new tender, not opened in this slice |
| Successor artifact | `Nachfolgeversion · Entwurf` — **never** show `v8` |

These are realistic mock fixtures, not domain canon. Dates, values and thresholds are illustrative. Never render a metric that isn't grounded in a visible fixture.

**The story:** ~48 hours before a client steering meeting, `Abstimmungsbericht v3` contradicts the unqualified Go claim in `Entscheidungsgrundlage v7` — whose green human assessment still rests on `v2`. Consultry surfaces this as a bounded challenge candidate. A human assesses it, decides materiality, pauses only the named external use, revises, and names a revalidation trigger.

---

## 3. Design tokens — authoritative, use verbatim

Paste this into every document's `<style>` and reference the variables. Do not invent values, do not round, do not substitute.

```css
:root {
  /* Brand */
  --c-brand-primary: #bf5347;          /* workhorse primary action + selected state */
  --c-brand-primary-hover: #ca7168;    /* hover border/inner highlight only — never a text fill */
  --c-brand-primary-pressed: #a2463c;  /* pressed + accessible solid fallback */
  --c-brand-warm: #f0a85e;             /* sparse secondary emphasis only */

  /* Focus action (A0) — exactly one visible instance per view */
  --c-focus-gradient: linear-gradient(135deg, #e8913a 0%, #e8655a 42%, #9b59b6 100%);
  --c-focus-scrim: rgb(30 27 24 / 38%);
  --c-focus-background: linear-gradient(var(--c-focus-scrim), var(--c-focus-scrim)), var(--c-focus-gradient);
  --c-focus-foreground: #fff8f1;
  --c-focus-min-height: 48px;
  --c-focus-fallback: #a2463c;

  /* Dark shell */
  --c-shell-bg: #1e1b18;
  --c-shell-surface: #2c2926;
  --c-shell-elevated: #35312d;
  --c-shell-card: #3a3632;
  --c-shell-text: #ede8e2;
  --c-shell-text-secondary: #d9d4cf;
  --c-shell-text-muted: #a7a09a;
  --c-shell-divider: #49433e;
  --c-shell-divider-strong: #6a625b;

  /* Warm-light workspace */
  --c-workspace-page: #f6f3f0;
  --c-workspace-panel: #fbf9f7;
  --c-workspace-surface: #ffffff;
  --c-workspace-sunken: #efeae5;
  --c-workspace-brand-subtle: #f8e9e7;

  /* Text */
  --c-text-strong: #1e1b18;
  --c-text-primary: #2c2926;
  --c-text-secondary: #5f5954;
  --c-text-muted: #736c66;
  --c-text-link: #a2463c;

  /* Divider-first structure — NOT a border around every card */
  --c-divider-row: #c9c1ba;      --c-divider-row-w: 1px;
  --c-divider-section: #b8afa8;  --c-divider-section-w: 1.5px;
  --c-divider-major: #948b84;    --c-divider-major-w: 2px;

  /* Controls */
  --c-control-border: #8f857e;
  --c-control-border-focus: #a2463c;
  --c-interaction-hover: #f1ece8;
  --c-interaction-selected: #f8e9e7;
  --c-current-indicator: #bf5347;
  --c-focus-ring-color: #a2463c;
  --c-focus-ring-width: 2px;
  --c-focus-ring-offset: 2px;

  /* Semantic — every use ALSO requires text or icon, never color alone */
  --c-success-accent:#16a34a; --c-success-fg:#147a42; --c-success-surface:#e7f4ec; --c-success-border:#78b996;
  --c-warning-accent:#d97706; --c-warning-fg:#7a4500; --c-warning-surface:#fff4db; --c-warning-border:#d99b43;
  --c-danger-accent:#dc2626;  --c-danger-fg:#b42318;  --c-danger-surface:#fcece9;  --c-danger-border:#d78a82;
  --c-info-accent:#3a5dae;    --c-info-fg:#2458a6;    --c-info-surface:#eaf0fa;    --c-info-border:#8ba8d3;
  --c-neutral-fg:#5f5954;     --c-neutral-surface:#efeae5; --c-neutral-border:#b8afa8;

  /* Spacing */
  --c-space-1:4px;  --c-space-2:8px;  --c-space-3:12px; --c-space-4:16px;
  --c-space-5:20px; --c-space-6:24px; --c-space-8:32px; --c-space-10:40px;
  --c-space-12:48px; --c-space-16:64px;

  /* Radius */
  --c-radius-control:8px; --c-radius-surface:10px; --c-radius-large:12px;
  --c-radius-panel:16px;  --c-radius-pill:999px;

  /* Type */
  --c-font-sans: Inter, ui-sans-serif, system-ui, sans-serif;
  --c-font-mono: "JetBrains Mono", ui-monospace, monospace;

  /* Dimensions */
  --c-control-height:44px; --c-control-height-compact:40px; --c-touch-min:44px;
  --c-row-operational-min:64px; --c-row-compact-min:56px;
  --c-shell-width-expanded:224px; --c-shell-width-compact:72px;
  --c-shell-header-height:72px;
  --c-page-margin:32px; --c-grid-gutter:24px;
  --c-main-min:640px; --c-queue-ideal:360px;
  --c-sidepanel-width:416px; --c-sidepanel-inset:24px;
  --c-trigger-w:216px; --c-trigger-h:48px;

  --c-shadow-overlay: 0 16px 40px rgb(0 0 0 / 18%);
}
```

### Type scale (semantic — pick by role, not by size)

| Role | Size / line / weight / tracking |
|---|---|
| Page title | 30 / 38 / 700 / −0.30px |
| Decision headline | 28 / 36 / 700 / −0.20px |
| Section title | 22 / 30 / 700 / −0.10px |
| Pane title | 20 / 28 / 600 / 0 |
| Metric value | 28 / 36 / 700 / −0.20px |
| Row title | 16 / 24 / 600 / 0 |
| Body large | 16 / 25 / 500 / 0 |
| Body | 15 / 23 / 500 / 0 |
| Body small | 14 / 21 / 500 / 0 |
| Control | 14 / 20 / 600 / 0 |
| Label | 13 / 19 / 600 / 0 |
| Metadata | 13 / 19 / 500 / 0 |
| Caption | 12 / 18 / 500 / 0 |
| Eyebrow | 12 / 18 / 700 / +0.48px, uppercase |
| Mono | 13 / 20 / 500, `tabular-nums` — versions, IDs, timestamps |

### Icons

Lucide outline only, at 16 / 20 / 24 px with 1.75–2 px stroke. Inline the SVG paths. No emoji, no filled icon sets, no decorative illustration. Suggested set: `file-text`, `git-compare`, `alert-triangle`, `shield-check`, `sparkles`, `user-check`, `link`, `clock`, `chevron-right`, `panel-right-open`, `x`, `pause`, `pencil-line`, `check`, `circle-help`, `history`.

---

## 4. Non-negotiable visual rules

These come from the frozen v1.1 system. Violating any one of them invalidates the mock.

**The A0 focus action.** At most **one** visible action per view uses `--c-focus-background` (gradient + scrim), `--c-focus-foreground` label, min-height 48px. It is the single immediate safe next step. Never for: navigation, status, badges, metrics, charts, AI origin, AI execution, `Übernehmen`, destructive actions, or two competing CTAs. If no single action is clearly the most important safe next step, **there is no A0 on that screen** — use ordinary primary/secondary. If the German label can't hold one uncompressed line, fall back to solid `--c-focus-fallback`.

**Action ranks below A0:** A1 solid `--c-brand-primary` with white text · A2 neutral or coral outline · A3 text/icon action · destructive uses semantic danger, never the gradient.

**Never use the gradient as an AI marker.** AI origin is communicated through *labels, provenance and state* — a `KI-Kandidat` provenance badge, a named source list, an explicit uncertainty line. Not through glow, not through purple, not through sparkle-decoration on surfaces.

**Restraint.** Consultry is a daily work tool for senior consultants, not a marketing page. Solid colors, warm neutrals, confident dividers. No glow, no glassmorphism, no decorative gradient fills, no floating orbs, no colored drop shadows. Overlay shadow (`--c-shadow-overlay`) is the only shadow, and only on overlays — ordinary workspace regions are flat.

**Divider-first structure.** Do not draw a hairline border around every card. Use `--c-divider-major` (2px) for pane boundaries, `--c-divider-section` (1.5px) for section breaks, `--c-divider-row` (1px) for row separators, and whitespace for the rest. Only these may carry a bounding border: document preview, editable draft, real form inputs, and genuine controls.

**No color-only meaning.** Every status, selection, current state, severity and provenance carries icon **and** text in addition to color. `Fehlend`, `Veraltet`, `Konflikt`, `Freigabe verweigert` are written out.

**Composition.** Exactly one composition exists: dark shell (`--c-shell-bg`) + warm-light workspace (`--c-workspace-page`). There is no dark workspace and no light shell. Standard density everywhere; compact density (`--c-row-compact-min`, 40px controls) is permitted **only** inside desktop tables and queues, and is forbidden for decisions, explanations, AI content and evidence blocks.

**Type never shrinks to fit.** Do not reduce size, tighten tracking or cut line-height to make German copy fit. Grow the container, wrap to a second line, or move secondary content below. Never truncate a decision, consequence, source or privacy statement.

**No chat rail.** There is no persistent general chat panel anywhere. Assistance is object-bound and appears in the contextual sidepanel or a small object-bound prompt overlay, on demand.

---

## 5. Layout contract

### Application shell (present on every screen)

```
┌─ Global top region · 72px · --c-shell-bg ────────────────────────────────┐
│  Consultry mark · Kontextkette · Suche/Schnellerfassung · Hinweise · Konto│
├──────────────┬───────────────────────────────────────────────────────────┤
│ Global nav   │  Workspace slot · --c-workspace-page                      │
│ 224px        │  ┌ Page/Artifact header ───────────────────────────────┐  │
│ Expanded     │  │ Kontext · Titel · Version/Status · ≤1 A0            │  │
│              │  ├─────────────────────────────────────────────────────┤  │
│ Meine Arbeit │  │ Dominant work surface (owns the default width)      │  │
│ Projekte     │  │                                                     │  │
│ Wissen       │  │                        ┌ collapsed trigger 216×48 ┐ │  │
│ Entscheidungen│ │                        └──────────────────────────┘ │  │
│ Team         │  └─────────────────────────────────────────────────────┘  │
│ Einstellungen│                                                           │
└──────────────┴───────────────────────────────────────────────────────────┘
```

- Reference viewport **1440 × 1024**. Fluid, not a fixed-height straitjacket.
- Shell modes: `Expanded` 224px (M0), `Compact` 72px (B1–B3, which need horizontal room). Compact is a deliberate per-view choice, not an accident of width, and keeps accessible names with labels on hover/focus.
- Current nav state uses a 3px marker + surface + text weight + `aria-current` — not color alone.
- Global navigation contains destinations only. Demo controls, process progress and feature tools never live there.

### Contextual sidepanel (the only right-hand surface)

- **Default state: collapsed.** No empty rail, no reserved right column, no divider standing in for one. The dominant work surface owns the full released width.
- Collapsed trigger: **216 × 48 px**, horizontal, fully labelled, with count/state and an `Öffnen` affordance. Never rotated, squeezed or truncated.
- Open state: **416 px non-modal overlay**, 24 px from the right workspace edge, top edge below the local header/toolbar, 16 px radius, 1.5 px border, `--c-shadow-overlay`. It overlays — it does not reflow the main grid, reset scroll or move selection.
- Only one contextual sidepanel open at a time. Opening never creates a second A0.
- `Escape` closes and returns focus to the trigger.
- Below 1024 px the *presentation primitive* becomes a labelled drawer/sheet — the information architecture does not change.

### Sticky action bar (B3)

72 px, reserves its own layout space, contains: guard/consequence text on the left, secondary actions in the middle, at most one A0 on the right. When blocked, there is **no disabled gradient button** — the guard and the blocker action take the focus instead.

---

## 6. Component vocabulary

Build these as reusable pieces. They mirror the frozen v1.1 library (Figma node IDs in the appendix are provenance, not something you need to fetch).

| Component | Contract |
|---|---|
| **Queue Row / Standard** | ≥64 px. Title (row title) · reason/why-now line (body small) · context chips · status badge · right-side chevron or inline action. Rows are prioritized exceptions, never a grid of generic KPI cards. |
| **Metric Cell** | Value + label + a one-line *explanation of what it counts*. A number with no defined denominator is forbidden. |
| **Status Badge** | Icon + text + surface. Semantic surfaces from the token block. |
| **Provenance Badge** | Distinct from status. States: `Quelle`, `KI-Kandidat`, `Menschlich bewertet`, `Menschlich entschieden`, `Übernommen`. This badge is the primary carrier of the four-object separation. |
| **Source Row / Source Chip / Source Cluster** | Source class · exact version · freshness (`Stand: …`) · permission state · relation to the specific claim. Missing/stale/conflicting is written out, never just colored. |
| **Callout / Feedback Banner** | Persistent inline. Blockers, partial results, permission denials and consequences live here — never only in a toast. |
| **Recommendation Block** | AI proposal container: proposal · sources used · missing evidence · uncertainty · scope affected · human actions. `Übernehmen` is A1, never A0. |
| **Human Review Lifecycle** | `Entwurf → Quellen → Menschliche Prüfung → Freigabe → Bestätigt`. Active step marked by label + position + marker, in addition to color. Orientation, not skippable navigation. |
| **Save / Sync Status** | `Nicht gespeichert` / `Wird gespeichert` / `Gespeichert` / `Offline` / `Konflikt` / `Fehler`, each with a time reference. Local save must never look like a completed remote sync. |
| **Effect Ledger entry** | Every simulated effect: `simuliert` marker · actor · target · basis (exact version) · outcome. Failures stay visible and recoverable. |
| **Contextual sidepanel** | Header (context name + close) · body groups separated by dividers · footer actions that wrap before they compress. |
| **Demo/presenter bar** | Visually marked as demo control, clearly *outside* the product chrome (e.g. a thin bar pinned to the bottom of the viewport in `--c-shell-elevated`). Scene jump · positive/recovery state toggle · Boutique/Growing projection switch · reset. Never inside global navigation. |

---

## 7. The two organizational projections

The same screens serve both readings. Only assignment, contribution and handoff shape change — never the layout, never the vocabulary, never a second app.

- **Partner-led Specialist Boutique (default).** One Partner/Principal carries pursuit, delivery, artifact and release responsibility. Prove **single-human responsible completion** where authority permits. Do **not** manufacture a second employee, a four-eyes ceremony or a fake approval chain.
- **Growing Specialist Consultancy (alternate state).** Contributions are distributed. Show *requested* and *accepted* expert contribution and custody transfer, while exactly one explicit responsibility still owns the next effect. Accountability must never transfer silently as a side effect of accepting a contribution.

The projection switch lives on the demo bar, not in the product UI.

---

## 8. Screens to design

Deliver **four scenes**, each with its state variants. All at 1440 × 1024 unless noted.

---

### M0 — `Meine Arbeit` (My Work / context shell)

**Job:** show what needs attention, why now, which client/project/case, who is responsible, and the one next action.

- Shell `Expanded` 224px. Page title `Meine Arbeit`. Sub-line naming the active context: `Hansa Maschinenbau AG · ERP Rollout Acceleration`.
- A short **decision strip** of at most four explainable metrics — each with a defined denominator, each clickable to a real row. No decorative charts, no person ranking, no unexplained health scores.
- **Prioritized queue** of exceptions as `Queue Row / Standard`. Compact density is acceptable here and only here.
  - **Row 1 (the entry into B1)** — `Widerspruch zu Entscheidungsgrundlage v7` · why-now: `Abstimmungsbericht v3 widerspricht der Go-Aussage · Client Steering in 48 Std.` · badges: `KI-Kandidat`, `Nicht geprüft` · owner `Tobias Rehm`.
  - Row 2 — `KRITIS Security Transformation · Frist in 9 Tagen` (net-new tender, context only, not opened here).
  - Row 3 — a low-drama routine item so the queue does not read as an alarm feed.
- Collapsed trigger bottom-right of the workspace: `Arbeitsvorschläge · 3 · Öffnen`.
- **A0:** `Prüfung öffnen` on row 1 — one, and only one.
- `Schnellerfassung` stays globally reachable from the top region.

**State variants required:** (a) default; (b) contextual sidepanel `Arbeitsvorschläge` **open** as a 416 px overlay, main surface unmoved; (c) Growing projection — same rows, with `Beitrag angefragt · Expertise Migration` visible on row 1 and the responsibility owner still unambiguous.

---

### B1 — `Zulässiger Challenge in laufender Arbeit`

**Job:** make a bounded, admissible challenge legible as *relevant interruption inside project work*, not as generic AI criticism and not as an AI verdict.

Shell `Compact`. Header context chain: `Hansa Maschinenbau AG → ERP Rollout Acceleration → Wave-1 Readiness-Empfehlung v7`.

The challenge candidate is admissible **only because** it names all of the following — show every one of them explicitly, in this hierarchy:

1. **Exact subject and version** — `Wave-1 Readiness-Empfehlung · Entscheidungsgrundlage Client Steering v7`
2. **Affected claim and criterion** — the unqualified `Go` claim and the readiness criterion it rests on
3. **Changed source** — `Abstimmungsbericht v3` (new) versus `Abstimmungsbericht v2` (basis of the current green assessment), with freshness on both
4. **Plausible consequence** — what could be wrong in the client steering decision if this holds
5. **Decision horizon** — `Client Steering in 48 Std.`
6. **Uncertainty** — stated in words, not as a percentage or a traffic light

The AI contribution carries a `KI-Kandidat` provenance badge and sits in a clearly bounded container. The **prior human assessment** (`Menschlich bewertet · grün · Basis: Abstimmungsbericht v2`) is a *separate visible object* — this contrast is the entire point of the scene.

**Human actions:** `Prüfung aufnehmen` (A1) · `Als nicht relevant schließen` (A2) · `Zurückstellen` (A3). Consider whether the screen has a genuine single safe next step; if `Prüfung aufnehmen` is unambiguously it, it may be A0.

**State variants required:** (a) default admissible candidate; (b) **intentional challenge** — the same frame reached by a human who started it themselves, with no AI candidate present, proving the product is not dependent on AI alerting; (c) **inadmissible/duplicate** — candidate closed with a stated reason, no approval ceremony, item retains rationale and reconsideration trigger.

---

### B2 — `Quellengebundene Challenge-Prüfung`

**Job:** let a responsible human compare sources and make **two separate determinations** without either one being pre-filled by AI.

Shell `Compact`. Dominant surface is a **source comparison in the current case** — embedded here, not opened as a separate review module.

- Side-by-side: `Abstimmungsbericht v2` ↔ `Abstimmungsbericht v3`, with the applicable criterion and the exact claim from `v7` in the same visual field. Show what differs, not two opaque documents.
- Each source carries class, exact version, `Stand: TT.MM.JJJJ`, and permission state.
- Consultry may offer bounded interpretation lenses — `Delivery`, `Fachexpertise`, `Client/Abnahme`, `Risiko`, and only where warranted `Kommerziell`. Each is a labelled `KI-Kandidat`. **Multiple AI views are never presented as independent evidence or as a vote.** Do not aggregate them into a score.

The human determines, in two **visibly separate** decision groups:

| Group | Options (German UI strings) |
|---|---|
| `Challenge-Bewertung` | `belegt` · `mit Evidenz widerlegt` · `nicht abschließend` |
| `Materialität im aktuellen Kontext` | `wesentlich` · `im aktuellen Kontext nicht wesentlich` · `unbestimmt` |

These must not read as one combined verdict, one slider, or one status pill. Use accessible radio groups with real labels; selection state is not color-only.

**A0:** at most one — the safe next step once both determinations exist. While either is unset, there is no A0.

**State variants required:** (a) `belegt` + `wesentlich` (the nominal material path into B3); (b) `mit Evidenz widerlegt` — closed with visible counter-evidence, no approval ceremony, no celebratory success state; (c) **insufficient basis** — result stays `nicht abschließend` / `unzureichende Grundlage` with the missing evidence named and a context request available. **The product never invents a PASS.**

---

### B3 — `Verantwortete Reaktion und Revalidierung`

**Job:** show a responsible human owning a response, with a precisely bounded effect.

Shell `Compact`. This screen carries the sticky action bar.

- **Bounded pause.** The action is `Externe Verwendung von v7 für Client Steering pausieren` — *only* the named external use. The UI must state, in words, what this does **not** do: no project-wide stop, no commercial change case, no client notification. Do not let a generic "Stop" or "Block" label creep in.
- **Response options** as distinct human choices: `Überarbeiten` · `Begründen und beibehalten` · `Bedingt akzeptieren`. Each shows its consequence before selection.
- **Revalidation trigger** — the human names it explicitly: `Revalidierung bei Vorliegen der Nachprüfung Linie 3 · erwartet 07.08.2026`. This is a required field, not an optional note.
- **Successor artifact** appears as `Nachfolgeversion · Entwurf` with lineage back to `v7`, `Abstimmungsbericht v3`, the applicable criterion and the material human edits. It must **never** display a fixed `v8` — the identifier belongs to a real case, not to the mock.
- **Recommendation boundary.** The consultancy issues a `Empfehlung` at most. State plainly that Go/No-Go, waiver and residual-risk acceptance belong to competent client authority. No screen may imply Consultry decided.
- **Effect ledger** (visible, in-workspace): each entry marked `simuliert`, with actor, target, basis version and outcome.
- Sticky action bar: guard text left (`Pause betrifft ausschließlich die externe Verwendung von v7`), `Änderungen speichern` / `Zurückgeben` in the middle, one A0 right — `Zur Freigabe` or `Reaktion festhalten` depending on state.

**State variants required:** (a) Boutique — one accountable person completes the whole sequence with AI assistance inside authority, with **no fictitious second employee** anywhere on screen; (b) Growing — `Beitrag angefragt` → `Beitrag angenommen · Fachexpertise Migration`, with final delivery responsibility visibly *not* transferred; (c) failed effect — the simulated pause/writeback fails, the prepared exact version and the failure outcome are both preserved, and retry / permitted alternate destination / hold are offered. **No false success, no silent overwrite.**

---

### Plus one responsive proof

Reflow **B2** at **768 px**: single dominant pane, source comparison remains reachable, contextual panel becomes a labelled full-height drawer, sticky actions may wrap. Task first, context second, completion actions last. The information architecture does not change — only the presentation primitive.

---

## 9. German locale and accessibility requirements

- German is the reference locale. Every component must absorb **at least 30 % label expansion** without type compression. Test the long ones: `Externe Verwendung von v7 für Client Steering pausieren`, `im aktuellen Kontext nicht wesentlich`, `Entscheidungsgrundlage Client Steering`, `Revalidierungsauslöser`.
- Target WCAG 2.2 AA. Visible keyboard focus everywhere, never removed; focus ring `--c-focus-ring-color` at 2px with 2px offset.
- Minimum pointer target 44 × 44 px. The 40 px compact control is permitted only inside desktop tables and queues, and still needs spacing that prevents accidental activation.
- Semantic headings and landmarks: global navigation, main, complementary (sidepanel), local tool region. A skip link goes straight to the workspace main content.
- Every icon-only action has an accessible name and a tooltip available on focus, dismissible with `Escape`.
- Source freshness, AI state, uncertainty and privacy visibility are expressed **in words**.
- Everything must survive 200 % zoom without sticky regions covering focused content, and must remain legible under `prefers-contrast: more` and `forced-colors: active` (in high-contrast, the A0 gradient falls back to solid `--c-focus-fallback`).
- Honour `prefers-reduced-motion`: no slide or spring on panels and docks; orientation is carried by markers and headings instead.
- Determinism: no `Date.now()`, no `Math.random()`, no live clocks. Every date and time is a fixed fixture string.

---

## 10. Hard anti-patterns — reject these on sight

- A progress rail or wizard that turns business states into modules.
- A generic dashboard with no actionable exception.
- A permanent general-chat panel, or a chat surface as the primary work area.
- A full-screen success state that loses client, project, object and next owner.
- Three equally-weighted scroll panes with no dominant work surface.
- An AI result shown without sources, boundaries and a required human action.
- AI output rendered so it could be read as human approval — or as a percentage-confidence traffic light.
- A coverage or quality number with no defined denominator; a context-free "aligned" score.
- The brand gradient on AI, navigation, search, status, `Übernehmen`, or on two actions at once.
- A disabled gradient button standing in for a blocked state.
- Fake organizational complexity — invented colleagues, approvals or four-eyes rules the boutique case does not have.
- Autonomous language, or any invisible external effect.
- Domain field dumps, agent activity, graph nodes or technical telemetry in default views.
- Toast as the only surfacing of an error, a blocker or an approval consequence.
- Orange as the app theme. The system is coral-led; orange is a secondary accent and a gradient stop.

---

## 11. Deliverables and acceptance

**Deliver:**

1. `00-foundations.html` — token swatches, type ramp, icon set, action-rank specimens (A0 through destructive), provenance badge set. This is the proof that the mock is token-driven.
2. `m0-meine-arbeit.html` + variants `-sidepanel-open`, `-growing`
3. `b1-challenge.html` + variants `-intentional`, `-inadmissible`
4. `b2-pruefung.html` + variants `-widerlegt`, `-unzureichend`
5. `b3-reaktion.html` + variants `-growing`, `-effect-failed`
6. `b2-pruefung-768.html` — the responsive proof

Every file self-contained, inline CSS, no external requests, no browser storage. Cross-link the scenes so the slice is clickable end to end, and include the demo bar on every scene.

**Accept only when:**

- [ ] Every color, space, radius and type value resolves to a token from §3.
- [ ] Exactly one A0 per view, or a stated reason there is none. Never two.
- [ ] Source, AI Candidate, Human Assessment and Effect are four visually distinct objects on every screen where more than one appears.
- [ ] `Challenge-Bewertung` and `Materialität` are two separate human determinations, never merged.
- [ ] The B3 pause is visibly scoped to the named external use, with its non-effects stated in words.
- [ ] The successor reads `Nachfolgeversion · Entwurf` — `v8` appears nowhere.
- [ ] Each simulated effect is marked `simuliert` with actor, target, basis and outcome.
- [ ] At least one recovery path per scene works and preserves draft, selection and responsibility.
- [ ] The Boutique path completes with no invented second employee.
- [ ] The Growing path accepts a contribution without transferring accountability.
- [ ] No status, selection or severity relies on color alone.
- [ ] The default state of every scene has no reserved right column.
- [ ] Long German labels wrap or grow — nothing is shrunk, tracked-in or truncated.
- [ ] 200 % zoom, reduced motion and forced-colors all hold.

**Explicitly out of scope:** backend, auth, persistence, real AI, agents, integrations, real writebacks, final information architecture, production copy, mobile product experience, and anything from slices A or C.

When something in this brief conflicts with what would be visually convenient, **the brief wins and you flag the tension** rather than resolving it silently. Where the brief is genuinely silent — spatial composition, grouping, density within a pane, transition choreography — you have real freedom, and the explored reference frames are hypotheses, not a layout to clone.

── PROMPT END ──

---

## Appendix A — provenance links (for Jules, not for the Design session)

### Figma — Consultry App (authoritative App DS v1.1)

| Item | Link |
|---|---|
| File cover | https://www.figma.com/design/ISADUb31I52guGXElec3df/Consultry-App?node-id=23-9228&m=dev |
| Contextual sidepanels · authoritative | https://www.figma.com/design/ISADUb31I52guGXElec3df/Consultry-App?node-id=289-182&m=dev |
| Layout · Work Workspace (M0 basis) | https://www.figma.com/design/ISADUb31I52guGXElec3df/Consultry-App?node-id=196-6&m=dev |
| Layout · Work Workspace · sidepanel open | https://www.figma.com/design/ISADUb31I52guGXElec3df/Consultry-App?node-id=295-1298&m=dev |
| Layout · Dashboard / Control Room | https://www.figma.com/design/ISADUb31I52guGXElec3df/Consultry-App?node-id=196-5&m=dev |
| Layout · Concept Canvas | https://www.figma.com/design/ISADUb31I52guGXElec3df/Consultry-App?node-id=196-7&m=dev |
| Layout · Artifact Review (B-slice basis) | https://www.figma.com/design/ISADUb31I52guGXElec3df/Consultry-App?node-id=252-532&m=dev |
| Layout · Artifact Review · sidepanel open | https://www.figma.com/design/ISADUb31I52guGXElec3df/Consultry-App?node-id=298-1662&m=dev |
| Layout · Opportunity Graph | https://www.figma.com/design/ISADUb31I52guGXElec3df/Consultry-App?node-id=252-531&m=dev |
| Layout · Prompt Workspace | https://www.figma.com/design/ISADUb31I52guGXElec3df/Consultry-App?node-id=252-533&m=dev |

Component sets relevant to this slice — `Application Shell` `237:536` · `Scoped Assistant Panel` `237:94` · `Queue Row / Standard` `187:455` · `Queue Row / Compact` `187:748` · `Metric Cell / Linked` `172:200` · `Status Badge` `145:19` · `Provenance Badge` `153:40` · `Source Row` `186:174` · `Source Chip / Claim` `234:127` · `Source Cluster` `234:209` · `Callout / Feedback Banner` `190:156` · `Recommendation Block` `206:200` · `Recommendation Draft / Editable` `233:285` · `Human Review Lifecycle` `233:316` · `Save / Sync Status` `233:65` · `Sticky Action Bar` `206:67` · `Document Preview Shell` `233:204` · `Radio Item` `205:33` · `Button / Standard` `125:62` · `Button / Focus Fallback` `129:62` · `Drawer Shell` `193:105` · `Empty, Pending & Gated State` `231:169`.

Sidepanel components — Work Suggestions open `289:185` / trigger `293:182` · Artifact Trust open `291:182` / trigger `293:203` · Sources Review open `289:239` / trigger `293:196`.

Marketing/CMS components live in a **separate** file (`ZRTge3ODEnkSDNRrcgBBvK`, Components page `1:4`) and are deliberately **not** inherited here — App radius, body size and button shape all differ from Marketing, and mixing them is a known failure mode.

### Local sources of truth

| Contract | Path |
|---|---|
| Storyboard baseline | `product-definition/latest/Consultry-Three-Slice-Mock-UI-Demo-Flow-v0.1.md` |
| Engineering handover (build phase, after validation) | `product-definition/latest/handoffs/Consultry-Three-Slice-Mock-UI-Implementation-Handover-v0.1.md` |
| Delivery blind-spot reference thread | `product-definition/latest/Consultry-Active-Project-Delivery-Blind-Spot-Reference-Thread-v0.1.md` |
| UX Operating Model | `product-definition/latest/Consultry-UX-Operating-Model-v0.1.md` |
| App Design System v1.1 (frozen) | `design/DESIGN_SYSTEM/consultry_app_design_system/Consultry-App-Design-System-v1.1.md` |
| Figma library manifest | `design/DESIGN_SYSTEM/consultry_app_design_system/Figma-Library-Manifest-v1.1.md` |
| CSS tokens (source for §3) | `design/DESIGN_SYSTEM/consultry_app_design_system/tokens/consultry-app.css` |
| DTCG tokens | `design/DESIGN_SYSTEM/consultry_app_design_system/tokens/consultry-app.tokens.json` |
| Application Shell & Scoped Assistant pattern | `design/DESIGN_SYSTEM/consultry_app_design_system/patterns/application-shell-and-scoped-assistant.md` |
| Artifact Review pattern | `design/DESIGN_SYSTEM/consultry_app_design_system/patterns/artifact-review.md` |
| Contextual Sidepanel pattern | `design/DESIGN_SYSTEM/consultry_app_design_system/patterns/contextual-sidepanel.md` |
| Visual direction checkpoint (hypotheses only) | `product-definition/latest/prototypes/three-slice-mock-ui/visual-options/README.md` |
| Combined reference v0.2 (hypothesis only) | `product-definition/latest/prototypes/three-slice-mock-ui/combined-reference/combined-reference-v0.2.png` |

### Source hierarchy on conflict

1. Ratified Wayfinder decisions + `product-definition/latest/_CONTEXT-AND-MEMORY.md`
2. Three-Slice Mock UI Demo Flow v0.1
3. The three reference threads
4. UX Operating Model v0.1
5. App Design System v1.1 + its token files
6. Explored visual frames — evidence only, never a layout spec
7. This handover, for organization and quality

Technical or visual convenience never invents product truth. On a real conflict, record a Product Gap and decide against the higher source rather than filling it silently.

## Appendix B — what this hands off to next

After the moderated sessions, the findings feed the existing engineering handover (`.../handoffs/Consultry-Three-Slice-Mock-UI-Implementation-Handover-v0.1.md`), which stays valid for the build phase: Next.js 16 App Router, static export, in-memory demo gateway, test-first WBS, worktree waves. Do not start it before a layout direction survives real observation — the Wayfinder prototype ticket stays `open` until then.

Slices A (`A1–A3`, incl. the KRITIS tender contrast) and C (`C1–C3`, corporate artifact alignment and governed reuse) are deliberately deferred out of this first design pass. Their scene contracts are already written in the Demo Flow §6 and §8 and can be cut into a second brief on the same template once the shared grammar holds.

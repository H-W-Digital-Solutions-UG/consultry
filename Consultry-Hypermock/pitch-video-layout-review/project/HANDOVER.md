# Consultry Pitch Video — Session Handover

**File under edit:** `pitch-scene.jsx` (the React scene graph). It is mounted by `Latest Consultry Video Teaser.dc.html` via `<x-import>` and rendered through `animations.jsx` (`Stage` + `useTime`).
**Format:** 1920×1080, **118.16s current calculated timeline**. `VO_MUTED = true` and `MUSIC_MUTED = true`; preserve the current length for now. Assets remain: `voiceover.wav` (71.68s), `music.wav`, background frame sequences under `uploads/gen-*-bg-frames/`, SVGs under `assets/`.
**Design system:** Consultry DS bound at `_ds/consultry-design-system-6d34b04d-38cf-4215-b051-0d6e987f0789/`. NOTE: this animation predates the DS bundle and uses raw hex color constants (WARM `#f0a85e`, TEXT `#ede8e2`, BG `#171311`, etc.). The oxlint "use var(--ds-color-*)" warnings are **expected/legacy** for this file — do not churn the whole palette.

## Product-Vision and demo-scope decision — updated 11.07.2026

**Whole Product:** Consultry is the **AI-native Consulting Operating System** across clients/growth, consultants/teams, offers/commercials, projects/delivery, knowledge/methods, finance/impact and the shared governance/integration layers.

**Operating architecture:** sources feed the Consultry Second Brain / Consulting Context Graph; the Consultry Engine compiles bounded Context/Memory/Tool/Policy packs; virtualized or local Harnesses execute approved Tools/RAG/MCP/Connector calls; Result Verification, Human Approval and Audit gate persistence or external effects. An adapted Hermes fork is a possible initial Harness implementation, not the product boundary.

**Demo proof path:** fictional existing client `Hansa Maschinenbau AG · ERP-Migration & Prozessmanagement`. The case is one vertical proof through the OS, not the product scope.

This video is currently a **Product Vision refinement surface**. H1/H2/H3 describe rollout depth; `Opportunity-to-Concept`, Concept Suite and the executed ERP journey are starting/proof surfaces, not Whole Product boundaries. MVP build scope remains separately governed and is not silently expanded by the film.

Authoritative redline artefacts:

- [`graph.md`](./graph.md) — journey, functionality relationships and triplets.
- [`video-redline-index.md`](./video-redline-index.md) — scene table of contents and content replacements.
- [`video-redline-qa.md`](./video-redline-qa.md) — resolved owner decisions and remaining implementation detail.
- [`../../../product-definition/_CONTEXT-AND-MEMORY.md`](../../../product-definition/_CONTEXT-AND-MEMORY.md) — persistent context posture.

Resolved narrative constraints:

- Target posture is **context-centred and role-neutral**: Project/Knowledge is enriched by consultants and synchronized with Offer/Service/Product Portfolio, CRM/customer data, Contracts, People/Capacity and Finance/Operations. Sales, Team Leads/Team Managers, Staffing, Backoffice, Finance, consultants and management act from the same context; no mandatory first actor or scene is prescribed.
- Backoffice/Finance is Vision-Core with high automation potential: travel and expense receipts, business meals, invoice/billing preparation, licenses/subscriptions, vendor/renewal and cost reconciliation. Binding external or accounting actions remain policy-, approval- and audit-gated.
- Team Lead / Team Management is a Vision-Core control room: team, staffing and structure plus revenue/forecast/margin/billed-unbilled overview; intelligent Delivery/Capacity/Faktura dashboards; explainable detection of missing times/receipts, SOW/rate mismatches, unbilled work, scope creep and blocked approvals; solution proposals remain role-, WC-, policy- and approval-gated.
- Personal Development / Capability Planning is Vision-Core: evidence-backed consultant skill profiles are matched against weighted signals/opportunities, contracted work, current order/project pipeline, service/product trends and source-bound market indicators. Outputs include training/certification/mentoring/rotation suggestions, Academy plans, role-based hiring/partner profiles and build/buy/partner scenarios; no hidden performance ranking or automated employment decision.
- Demand evidence is explicitly Bestandskunden-first: contracted existing-client work and consultant project observations → existing-client CRM/contracts/signals → internal pipeline/portfolio → approved external skill/job-market sources such as LinkedIn, XING, jobboards, customer career pages and certification providers → later potential-client signals. The consultant is the human "Krake im Projekt beim Kunden": a distributed sensing node across delivery, process, stakeholder, contract, technology and capability context — never a monitored sales agent.
- Keep named team matching, People Scores, availability/collisions and CV generation; reframe them for ERP/process roles.
- Remove the outreach-email/channel workflow from the primary narrative.
- Primary payoff: EvidencePack, human validation, a recommended next step and the selected team/People Scores/CVs. `ConceptPlan` and `GroundedDraftSection` are optional elaboration outputs; `ReviewIssues` is secondary metadata.
- Replace `Deal closed` with human-owned internal approval/export readiness.
- The later active project is the same project previously won; show an explicit time jump (`Später · im gewonnenen Projekt`).
- Deep Knowledge/Project Data connection is a core use case. Person-specific activity is absent from the default ProjectStatus view but may exist in drill-down.
- Rail is extensible and conceptually circular: `Kontext ↔ Erkennen ↔ Entscheiden ↔ Orchestrieren ↔ Ausführen ↔ Lernen & Steuern`. The detailed ERP proof may enter at any credible operational event and expand into Signal, Opportunity/EvidencePack, Team/Commercials, Approval, Delivery, Knowledge, Finance and Impact.
- Do not rework business-case scene content in this pass.
- Keep the current `.dc.html`/React composition and local preview on port 4173.

---

## How to work on this file

**Preview + seek to a timestamp** (screenshots re-render the DOM, so fonts fall back to a wider face and text can look truncated/ellipsized even when it is not — always confirm suspicious clipping by measuring `el.scrollWidth` vs `el.clientWidth` in the live DOM):

```js
const el = document.querySelector('svg[data-om-exportable-video-with-duration-secs]');
el.dispatchEvent(new CustomEvent('data-om-seek-to-time-frame', { detail: { time: 48 } }));
```

`eval_js` after a seek is **stale** (React re-renders next frame) — prefer `save_screenshot` steps with a ~700ms delay, or seek in one step and read in the next.

**Editing:** `dc_*` tools are for the `.dc.html` shell only. Edit `pitch-scene.jsx` with `str_replace_edit`. After edits, `show_html` + `get_webview_logs` to confirm no console errors, then screenshot the affected beats.

---

## ⚠️ Gotchas (read before editing)

1. **Timing is source-derived, not voiceover-locked.** Voiceover and music are muted. Preserve the current total length for now, but do not treat historical timestamps as permanent boundaries. Derive scene markers from the current constants after every timing edit and regenerate visual verification points dynamically.
2. **Two radar charts exist.** `TeamMorphModules` (~line 1520; radar polygon ~1687, gradient id `team-morph-profile-fill`) is the LIVE one shown at t≈25–38. `TeamSkillCircle` (~line 2235; gradient id `team-profile-fill`) is **legacy/unused** — do not edit it by mistake. `SignalTeamUI` (~line 2521) composes: `SignalGraphPanel`, `TeamSlicePanel`, `TeamMorphModules` (NO TeamSkillCircle).
3. **Logo is a separate persistent element.** `PersistentLogo` (~line 4686) reads keyframe table `LOGO_MARK_KEYS` (~line 4631), format `[t, cx, cy, w, op]`, sampled by `sampleKeys`. The offer bridge (`PersistentProjectBundleBridge`) does NOT draw the logo — it only mirrors its position math. To move the logo you edit `LOGO_MARK_KEYS`.
4. **`StableVertriebBackground`** (~line 3243) is `React.memo`'d with a custom comparator keyed on `PROMPT_CONTEXT_HOLD_LOCAL` / `PROMPT_BACKGROUND_BUNDLE_REMOVE_LOCAL`. `SceneVertrieb` (~line 4090) now wraps it with a `mountGate`.
5. Color+alpha: WARM is a hex string, so `` `${WARM}77` `` (8-digit hex) is valid.

---

## Current timing map (calculated from `pitch-scene.jsx` on 10.07.2026)

```
OS_EXPLAINER              0.00 → 6.30
SIGNAL_START              6.80
WORKSPACE_VISIT_1        21.40 → 41.96
NAMED_TEAM_MATCH        ~41.60 → 47.52
WORKSPACE_VISIT_2        47.52 → 60.32
OPPORTUNITY_CANVAS       60.32 → 69.58
PROJECT_BUNDLE_BRIDGE    68.72 → 75.84
SCENE_VERTRIEB           67.72 → 90.92  (main content is mount-gated by bridge)
PROJECT_DASHBOARD        88.92 → 96.12
MATCHED_KNOWLEDGE        95.62 → 102.12
SCENE_FINANZ            101.62 → 113.12
SCENE_CTA               112.12 → 118.16
DUR                              118.16
```

Scene windows overlap intentionally for transitions. Never copy this list into a permanent screenshot checklist; regenerate markers from source constants after edits.

---

## IMPLEMENTED — Product-Vision redline (11.07.2026)

- Added `ERP_CASE` as the shared fictional narrative model for `Hansa Maschinenbau AG · ERP-Migration & Prozessmanagement`.
- Product Vision v2.5 and the demo redline now define the Whole Product as a role-spanning Consulting OS centred on the shared Consulting Context Graph, with Engine/Harness runtime, Backoffice Automation, Team Lead Control Room and Capability Planning as Vision-Core. No Consultant-first scene reorder is required; the next narrative pass should make cross-role context exchange visible.
- Opening now names the ERP/process-management use case directly.
- Signal intake now uses contract option, consultant-logged active-project need, LinkedIn Mail and connected ERP/project data.
- The Signal scene is now a single full-width work surface: the redundant right-hand `Signal-Auswertung`, its recent-opportunity list and the three top-right meta controls were removed; the source list expands into the released space.
- The remaining blurred secondary signal rows are no longer foreign prospects; they now represent `Hansa · Werk Süd` and `Hansa · Service` follow-on contexts, keeping the visible demo Bestandskunden-led.
- The primary consultant signal is now concrete: Tobias hears in the active ERP migration project that the customer wants to accelerate the timeline, logs it in Consultry, and the signal is routed to fictional Hansa account owner `Katrin M.` for validation before a customer conversation, staffing scenario or Change Request.
- Named team, People Scores, availability/collisions and CV generation are retained and reframed for ERP, process and data roles.
- The former outreach/editor flow now consolidates `EvidencePack`, exposes source provenance and requires human Opportunity validation; email recipient/channel/send semantics are removed.
- The recommended next-step selector offers Kundengespräch, Team-Erweiterung, Angebot/Change Request and optional ConceptPlan elaboration. The current case selects Team-Erweiterung.
- Team matching stays unavailable until validation, then becomes the selected recommended route. Canvas keeps `ConceptPlan` and `GroundedDraftSection` as optional nodes; `ReviewIssues` is a secondary leaf.
- `Deal closed` is replaced with `Intern freigegeben` and export/project-readiness language.
- Project dashboard now begins with `Später · im gewonnenen Projekt`, represents the same Hansa case and avoids person-specific activity in the default status view.
- Meeting preparation now joins project context, ERP process data, knowledge and internally applied methodology.
- Current source rail remains intro `Gewinnen → Arbeiten → Wirkung` plus app `Signal → Opportunity → EvidencePack → Validierung → Nächster Schritt → Team-Erweiterung → Freigabe → Projekt → Wirkung`. Target redline is the circular, context-centred OS model documented above; do not mistake the current rail for the Product Vision scope model.
- New interaction surfaces use app-design-system geometry (dense 8–10px control/card radii, neutral surfaces, tonal borders and focus rings) with Consultry typography and warm/coral/blue semantic accents layered on top.
- Runtime remains **118.16s**; VO and music remain muted; business-case content is unchanged.
- App-shell typography now has a scoped **10pt / 13.33px minimum**. `appTyped()` clamps numeric sizes, and `APP_UI_MIN_TYPE_CSS` covers raw inline styles, dynamic sizes and SVG presentation attributes below the floor without changing larger text or non-app scenes.
- Static verification: JSX transpiles without syntax diagnostics, all static asset paths resolve, and the live server returns HTTP 200 on port 4173. Automated in-app screenshot inspection is unavailable because the browser-control URL policy blocks localhost navigation.

---

## DONE this session
- **m0135 — Opportunity-Canvas-Szene (`CANVAS_SCENE_INSERT` 8.40, t≈60.3–68.7):** In Visit 2 klickt der Cursor nach den CV-Slots den **bestehenden Footer-Button "Im Canvas öffnen"** (Glow-State `cvp` @ local 11.90; Waypoint 1478/928) → Canvas-Szene `OpportunityCanvas` (eigene Komponente, useTime, band CANVAS_ABS_START→END): gepunktetes Grid-Panel (zoom-in, origin 79%/96%), Breadcrumb "Canvas · Opportunity · Bank AG" + Auto-Layout/82%-Chips, 6 Knoten-Karten (Signal-Cluster Score 94, Opportunity Brief warm, Team [drag cl 2.75–4.05 → +88/−40, Connectors folgen], Outreach ✓, CV-Entwürfe 3/3, Angebot & Vertrag dashed "nächster Schritt") + 5 SVG-Quadratic-Connectors (pathLength-Draw) → KI-Chip "Angebot aus dem Canvas erstellen" (cl 5.3) + Angebot-Glow (cl 6.3) → Handoff in die Offer-Bridge. Konsts: `CANVAS_ABS_START/END`, `LOGO_BRIDGE_START = CANVAS_ABS_START + CANVAS_SCENE_INSERT`, `WS2_ABS_END = CANVAS_ABS_START + 0.55`, POST_MATCH_SHIFT += CANVAS_SCENE_INSERT. Cursor-Branch bis `CANVAS_ABS_END − 0.85`. DUR ≈140.9s. ⚠ Preview lädt nach jsx-Edits nicht automatisch neu — vor Screenshots show_html aufrufen.
- **m0123 — Dashboard-Detail:** Projekt-Phasen-Band → **Projekt-Timeline · Tagesbasis** (Gantt: 6 W × 5 Tage Ticks, Bars done/aktiv/geplant auf Tag-Indizes, pulsierender HEUTE-Marker bei d9.6, Label-Spalte mit JIRA/SNOW-Ticket-Keys, Header-Chips "Live / Jira · synchron / ServiceNow · verknüpft"); Meilensteine-Karte → **Board · Sprint W2** Kanban (Offen/In Arbeit/Done, 6 Karten mit Jira/CHG-Keys + Assignee-Dots). `ganttTasks`/`TODAY_D` ersetzen `phases`; Cursor-Waypoint 1.90 → (820,356). Keine Timing-Änderung (DUR ≈132.5s).
- **m0116 — dashboard lower half befüllt (`PROJECT_DASH_INSERT` 5.20 → 6.70, prepClick 4.20 → 5.70):** unter Projekt-Phasen jetzt 3 Karten (je 296px) — **Aktuelle Meilensteine** (5 Zeilen done/active/next + W-Range), **Arbeit & Insights** (3 Avatar-Aktivitätszeilen + warmer Insight-Kasten "Migration W4 kollidiert mit Change-Freeze — Puffer +1 W") und **To-Do · vor dem Status-Meeting** (4 Checkbox-Zeilen, 2 mit "fällig"-Chips) — plus volle Breite **Projekt-Wissen**-Shelf (5 Datei-Chips, "aus Wissen · automatisch gepflegt"). Cursor: Meilensteine-Hover 1.90 → Insight 3.40 → prep-Klick 5.70. DUR ≈132.5s.
- **m0099 — team-edit clarity + gender-korrekte Fotos:** 'Caspar Vogt' → **'Carla Vogt'** (caspar.png ist ein Frauenfoto; julian.png=David ✓, alle 5 Fotos unique). Match-Liste: während des Explore-Beats (`exploreP`) zeigt Row i=3 (Carla) den Chip **"⇄ eingewechselt · im Team"** (warm) und Row i=2 (Jonas) **"⇄ ersetzt · pausiert"**; nach dem Settle tragen die finalen drei **"im Team"** (grün) — der Personenwechsel ist damit explizit.
- **m0101 — "Consulting Workspace · Projekt" dashboard vor der Meeting-Vorbereitung (`PROJECT_DASH_INSERT` 5.20, `SCENE_MATCHED_START` += 5.20):** neue `SceneProjectDashboardContent` (mount in `ConsultryAppExperienceFrame`, Fenster `PROJECT_DASH_START/END` = alter Matched-Start): Kopf "Consulting Workspace · Projekt · Bank AG" + "Aktiv · Woche 2 von 6", Titel "AWS Transformation", 4 KPI-Kacheln (Fortschritt 34 % · Team-Avatare · **Nächstes Meeting mit "Meeting vorbereiten"-Pill (Klick 4.20 → Handoff)** · 3 Offene Punkte) + Projekt-Phasen-Balken. Agent-Abschlussnachricht endet jetzt bei `PROJECT_DASH_START + 0.36` (Zeile ~6488) statt `SCENE_MATCHED_START` — keine Überlappung. Cursor-Waypoints im Vertrieb-Branch (PROJECT_DASH_START-relativ). DUR ≈131s; music.wav endet weiterhin deutlich früher (Audio offen).
- **m0087 — visit-2 CV flow rebuilt as a panel journey (`CV_SCENE_INSERT` 9.60 → 12.80):** workspace "CVs erstellen" button (1.30) opens the wide panel with a **selection view** in the empty space — "CV-Generierung · Team auswählen", 3 consultant rows (dashed checkbox → warm check, avatar, role, cert chips) + "Alle auswählen" bulk chip (2.60, checks stagger 2.80+i·0.28) + square dark "3 CVs generieren · aus Team-Match" button (3.90) → **loading** ("3 CV-Entwürfe werden erstellt…", 4.15–5.95) → **CV preview** (cvPrevIn 6.00; strip title swaps "CV-Entwürfe · Team Bank AG"→"CV_Max.pdf") → **accept bar** "3 Entwürfe übernehmen" (7.90 → grün "Übernommen · zurück zum Workspace") → panel closes (8.60) → workspace slots crossfade filled (cvGen 9.05+i·0.75, progress →64%). Sources row fixed at bottom:130 (accept bar owns 76). Slot-click beat removed (`cvClickP=0`).
- Beats: WS2 47.52→61.18 · bridge 60.32 · DUR ≈125.8s.
- **m0078 — drafting animation + rich editor chrome (visit 1 +1.40s → `REORDER_SHIFT` 20.50, WS dur 20.56):** after the square-button click a loading/drafting animation plays in the editor (pulsing sparkles circle, "Entwurf wird erstellt…", 3 shimmering skeleton lines; `load` band 4.30–6.35), then the result assembles (`gA…gC` 6.05–8.55, `genP` 4.45/3.90, `genDone` 8.40; downstream beats +1.35: select 9.25 · type 11.30 · Anwenden 14.20 · apply 14.45 · toast 15.50 · bestätigen 16.15 · close 17.45 · Team finden 19.25). Editor got native chrome: **toolbar** (↺ ↻ · "Absatz ▾" · B I U · list glyphs · right "KI-ASSIST" chip; h38) and **status footer** (mono word count "BEREIT · 0 WÖRTER" → "ENTWURF WIRD ERSTELLT…" → "142 WÖRTER · DEUTSCH" + "✓ AUTOMATISCH GESPEICHERT"; h24); document wrapper `calc(100% - 62px)`.
- **m0079 — Kanal row:** Teams ersetzt durch **XING** (teal glyph-square) + neuer Eintrag **"Cold Call · Skript"** (file icon, dimmed). Reihe: Outlook · E-Mail (aktiv ✓) · InMail · XING · Cold Call · Skript · "aus Kontakt-Präferenz".
- Current beats: WS1 21.4→41.96 · WS2 47.52→57.98 · DUR ≈119.4s.
- **m0070 — native draft editor:** the Outlook wrapper strip ("E-Mail · Entwurf" header) is gone — the drafting panel now reads as a native text editor (document column starts directly with An:/Betreff/body); the draft status dot moved into the drawer header (right, before "Im Canvas bearbeiten"). A **"Kanal" decision row** sits below the editor/quick-chips: Outlook · E-Mail (active, check) · InMail · Teams (dimmed) + "aus Kontakt-Präferenz" hint — gated by `genDone` like the quick chips. Page wrapper height `calc(100%-26px)` → `100%` (email branch only; CV keeps its PDF strip); cursor subject/popup y-coords −26px.
- **m0054 — explicit generation start + spoken edit:** big square (132×132, dark/warm) **„Entwurf generieren · aus 4 Quellen“** button centered in the empty preview; generation (`genP` 4.45) only runs after its click (`genStartClickP` 3.85); banner/status gated (`'bereit'` pre-click). The edit wish is now **spoken**: pulsing red rec dot replaces the sparkles icon in the prompt input (`rec`, sin-pulse on `local`), text transcribes word-by-word (no caret). Visit 1 +0.90s → `REORDER_SHIFT` 19.10, WS dur 19.16.
- **m0055 — success popup:** green toast **„Anpassung übernommen · Betreff & Text personalisiert“** floats top-center of the drawer (local 14.15–16.2) after `editApply` completes, before bestätigen.
- **m0058 — drafting panel nearly full width:** drawer width 560 → **1530** (left edge ≈x292, slide-out 1600); email/CV content constrained to a centered 860px document column (page wrapper after the header strip; body offsets adjusted −26px); banner capped 720 centered; transcription overflow threshold 1180. Cursor coords recentered for both visits.
- Visit-1 beats (local): outreach click 2.75 · square-button 3.90 · gen 4.45–7.2 · select 7.90 · Kontext-option 9.35 · rec/transcribe 9.95–12.55 · Anwenden 12.90 · apply 13.10 · toast 14.15 · bestätigen 14.80 · close 16.10 · card morph 16.50 · Team finden 17.95. WS1 21.4→40.56 · WS2 46.12→56.58 · DUR ≈118.0s.
- **m0045 — select-text edit workflow (replaces the m0035 quick-chip edit; visit 1 +4.00s → `REORDER_SHIFT` 18.20, WS dur 18.26):** cursor drag-selects the drawer subject line (blue sweep, `selP` 7.00) → floating quick-option popup “Als Prompt-Kontext setzen” + “Kopieren” (`quickOptIn`/`optClickP` 7.90/8.45) → blue **„Betreff · verknüpft“ marker chip** lands in the prompt input (`markerIn` 8.80) → edit wish types in with caret + tail-scroll (`typeP` 9.05–11.65: „Bitte personalisieren: auf bestehende Zusammenarbeit eingehen – unser Consultant Max ist bei Versicherer Z im Einsatz.“) → **Anwenden** click (11.95) → `editApply` 12.20: subject swaps to „AWS Cloud Transformation – Anknüpfung an Versicherer Z“ + para 2 becomes the consultant sentence (warm pulses) → bestätigen 13.90 · close 15.20 · card morph 15.60 · Team finden 17.10. Workspace card subject (both visits) now shows the personalized Betreff.
- **m0042 — “long white scene” fixed (two parts):** `LOGO_BRIDGE_END` = PROJECT_MORPH + **3.90** (Deal-closed/Project holds longer; `mountGate` keys off it) **and** `BRIDGE_TRIM` 2.28 → **5.28** (pulls SCENE_VERTRIEB/WISSEN/MATCHED/FINANZ/CTA 3.0s earlier via `POST_MATCH_SHIFT`), so the Deal-closed fade (≈61.2–61.9) crossfades straight into the AWS-Transformation overview (≈62.1). No empty shell anymore.
- Current absolute beats: WS1 21.4→39.66 · match ≈39.3→45 · WS2 45.22→55.68 · bridge 54.82 · deal ≈58.8→61.9 · Vertrieb overview ≈62.1 · DUR ≈117.1s.
- **m0034 — CV section moved below "Team" + generation confirmation:** the top docs grid is now a single full-width **Angebot & Vertrag** section (both visits; CV column removed — visit 1 has no CV section at all). In visit 2 a new **CV-Dokumente** section appears below the Team row (stagger `s5`): three pending consultant cards (avatar · name · role · dashed "Generieren" single-confirm chip) + header bulk button **"Alle 3 generieren"** (→ "3 beauftragt" after `bulkClickP`/`bulkDone` at local 1.50/1.72). `cvGen` staggers 1.85+i·0.70 AFTER the bulk confirm; CV click 4.35 → drawer 4.85–7.75. Visit-2 outreach card compacted to an 88px single row (status inline) to make room; `docWindow` height now `100%` (wrapper-driven).
- **m0035 — small edit workflow in the outreach drawer (visit 1, +2.40s → `REORDER_SHIFT` 14.20, WS dur 14.26):** after generation the cursor clicks quick-action **"Kürzer fassen"** (`editClickP` 7.05, `editApply` 7.35): chip goes hot (warm tint, check when done), body paragraph 2 swaps to the shorter sentence with a warm highlight pulse, header status shows "wird angepasst…"; then bestätigen (9.90), close (11.20), placeholder→card morph (11.60), Team finden (13.10).
- Current absolute beats: WS1 21.4→35.66 · match ≈35.3→41 · WS2 41.22→51.68 · bridge 50.82 · DUR ≈116.1s.
- **m0018 — workspace action scenes + transitions (VO officially ignored now, `VO_MUTED` stays true):**
  - **Visit 1 (WS_ABS_START≈21.4→33.26, +2.00s via `REORDER_SHIFT` 9.80→11.80):** empty workspace → cursor clicks the outreach placeholder (2.75 local) → right drawer opens with a generation banner ("Entwurf wird aus 4 verknüpften Quellen generiert…", progress bar) and the e-mail assembles piece by piece (An → Betreff → Absätze, ramps `gA/gS/gB1-3/gC`) → "Entwurf bestätigen" click (7.65) → drawer closes (8.95) → outreach placeholder crossfades into the filled compact card ("bestätigt · Versand geplant", progress 18→38%) → "Team finden" click (10.85) → team scene.
  - **Visit 2 (`WS2_ABS_START` = TMCD+0.40+HOLD_MATCH ≈38.8 → `WS2_ABS_END` = bridge+0.86 ≈49.3, inserted via `CV_SCENE_INSERT` = 9.60 in `POST_MATCH_SHIFT` + `LOGO_BRIDGE_START` = WS2_ABS_START + CV_SCENE_INSERT):** workspace returns with team row confirmed (3 avatars, "Team bestätigt · 96 % Match", header "Team bestätigt · 3 Consultants") → CV ?-slots crossfade into filled `docWindow`s staggered (1.10+i·0.85) → click CV slot 1 (3.95) → drawer CV preview (banner "CV-Entwurf wird aus Profil & Projekthistorie generiert…") → close (7.40) → workspace underlies the offer-bridge gather, fades at WS2_ABS_END. Progress 38→64%.
  - The scene function is now `WorkspaceVisit({visit})` (mounted twice by `OfferOutreachAppScene`); per-visit beats at the top of its inner IIFE. `docWindow`/`cvDocs` restored; Tools-popup beat cut (`toolsOpen=0`); match view exits into visit 2 (`matchViewExitLocal` in `TeamMorphModules`); cursor has separate WS1/WS2 action branches (`AppMouseCursor`).
  - **DUR grew ~+11.6s to ≈113.7s** — music.wav now ends before the video does (needs a longer bed or an audio edit later). Voiceover ignored per user.
- **Workspace opens EMPTY (m0001)**: `OfferOutreachAppScene` (t≈21.4–31.3) now shows dashed placeholders only — outreach ("Noch kein Entwurf · wird nach Team-Match erstellt"), CV slots (?-avatars, "CV · Rolle 1–3"), Angebot slots (Leistung/Vertrag/Konditionen), empty meeting rows. Filled previews stay in later scenes. `gen`/drawer/click ramps are hard 0 (drawer JSX left dormant); progress 6→18% "Neu angelegt"; header chip "aus Signal angelegt"; staggered placeholder entrances s1–s4; cursor now hovers placeholders → Tools → Team finden (1660,773).
- **Bottom bar (m0008)**: sparkles FAB removed; far right is now a labeled dark agent-panel trigger "Agent fragen"; "Im Canvas öffnen" demoted to a light secondary pill on its left.
- **Offer-draft result rebuilt** (`PersistentProjectBundleBridge`): centered composition; three rich mock cards — **Nurtured CVs** (avatar rows + name bars + match dots), **Leistungen** (scope checklist w/ tick-in checks), **Konditionen** (€148k count-up + line bars); staggered "alive" fills; ends on a green **"Deal closed"** seal with a radial scrim; ~1s landing hold before the out.
- **Orange team-composition overlay** on the radar (beat 3, "Harmonisches Team Erstellt") in `TeamMorphModules`: second polygon in WARM that animates from the required profile outward to a slightly-exceeding team profile (`teamCover`, `teamFulfill = rise(local, SIGNAL_TEAM_LIST_START+0.40, 1.30)`), gradient `team-morph-fulfill-fill`.
- **Prompt query** = "Bereite mir das Status-Meeting mit BankAG vor" (fits with no ellipsis: font `mix(19.5,23,grow)`, middle grid column `mix(150,334,grow)`); **"Consultant Prompt" eyebrow removed**.
- **Deal-closed ↔ Vertrieb-bundle collision fixed**: `SceneVertrieb` `mountGate` delays the project-bundle background until the deal-closed has resolved (~+1s).
- **Team scene layout** (earlier): whole block shifted down ~64px; matched-consultant cards realigned with allocation bars; sublines removed on Signal/Team beats; 3×2 grid header stage-indicator that morphs into the top rail; etc.
- **Renames:** "Azure Landing Zone" → **"AWS Transformation · Bank AG"** (both cards); "DKB AG" → **"Bank AG"** (Financial Times signal card + expanded detail). Internal `dkb*` variable names left as-is.

---

## FOLLOW-UP — next session

### 0. Approved Product-Vision redline — implemented 11.07.2026

- Core narrative implementation is complete; use the implementation summary above as the current state.
- Remaining work is visual QA/polish only, especially long-label fit in the canvas/rail and the preview-padding issue below.

### 1. Replace the former "Deal closed" transition  (`PersistentProjectBundleBridge`; `LOGO_MARK_KEYS`)
- Do not polish or enlarge `Deal closed`; remove that claim.
- Replace the bridge payoff with human-owned `Intern freigegeben · bereit für internen Export`.
- Primary visual objects are EvidencePack, human validation, the selected next step and named team/People Scores/CVs. ConceptPlan and GroundedDraftSection remain optional; `ReviewIssues` remains secondary metadata.
- The logo may still rise/fade as part of the approval transition, but it must restore cleanly for the later project scenes.

### 2. Approval → previously won project time transition  (`PersistentProjectBundleBridge`, project-scene handoff)
- Keep a concise internal-approval confirmation, then insert `Später · im gewonnenen Projekt` before the active project context.
- The project visual represents the same opportunity after human-led win/contract work; it must not read as an instantaneous AI close.
- Keep the morph subtle and on-brand (WARM/blue palette, DS radii).

### 3. Kompetenzprofil / Projektbesetzung preview padding  (`TeamMorphModules` ~line 1520)
- Mid-transition (low `leftMorph`/`rightMorph`, the `leftPreview={x:126,y:126,w:430,h:218}` / `rightPreview={x:856,y:126,w:506,h:218}` stage) the radar + staffing content is sized for the full settled panel and **touches/overflows the small preview card edges** → looks cramped. Add extra internal inset that is LARGER at low morph and eases to normal (e.g. content offset = `mix(BIG_pad, normal_pad, morph)`), or scale the inner content with the card, so nothing kisses the card border while morphing. Relevant inner anchors: panel padding `mix(18,20,leftMorph)` / `mix(18,0,rightMorph)`; radar svg at `left mix(26,44,leftMorph) top mix(66,94,leftMorph)`; constellation at `left mix(224,394,leftMorph)`.

### 4. DEFERRED — business-case/Finanz rework
- Do not change the `CONSULTRY-KOSTEN` counter, ROI numbers, footnotes or business-scene content in the current narrative pass.
- Only rename the persistent rail stage from `Faktura` to `Wirkung`.

---

## Open teammate annotations
All resolved except the TODOs above. For reference, addressed this session:
- jules — header stage indicator (3×2 grid → morphs to top rail): **done**.
- jules — orange team-composition profile on Kompetenzprofil radar, beat 3: **done**.
- jules — remove "Consultant Prompt" marker; query → "Bereite mir das Status-Meeting mit BankAG vor": **done**.
- jules — "Azure Landing Zone" → "AWS Transformation · Bank AG"; "DKB AG" → "Bank AG": **done**.
- user — offer bundle redesign + "Deal closed" bridge; scenes must not collide (bundle after deal-closed +1s); ~1s hold on Deal closed: **done**.
- **OPEN NOW** → implement the approved Product-Vision redline and retain the preview-padding visual fix. The former Deal-closed polish is replaced by the approval/time-jump transition; the Finanz counter task is deferred.

## In-app feel inspiration (2026-07-08)
- Keep Consultry app scenes inside one persistent light app shell: top search/header, left stage rail, clipped content viewport, no per-scene dark or transparent background panels inside the shell.
- Use real SaaS interaction cues later: cursor clicks, active rows, search input caret, tabs, side drawers, action buttons, status chips, and AI-assist affordances.
- Prefer dense product UI details over decorative cards: lists, panels, timelines, comments/drafts, source chips, badges, and clear app hierarchy.
- Attention grabbers and deal/offer overlays can stay outside the app shell; core scene UI should read as children of the app.

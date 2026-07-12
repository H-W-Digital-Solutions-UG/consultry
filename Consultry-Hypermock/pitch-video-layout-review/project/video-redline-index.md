# Consultry pitch video — redline index

**Purpose:** source-backed table of contents and scene-by-scene content replacement plan  
**Composition:** [`pitch-scene.jsx`](./pitch-scene.jsx)  
**Journey graph:** [`graph.md`](./graph.md)  
**Questions and uncertainties:** [`video-redline-qa.md`](./video-redline-qa.md)  
**Current calculated runtime:** **118.16 s**  
**Analysis date:** 2026-07-11

## 1. Reading guide

This index describes the **current source**, not the older timing summary in `HANDOVER.md`. Timing was calculated by executing the current JSX constant graph. Several scene windows intentionally overlap during transitions.

### Redline labels

| Label | Meaning |
|---|---|
| **KEEP** | Current idea is aligned; only terminology/example copy changes. |
| **REPLACE** | Preserve the visual mechanism but replace its business object/content. |
| **REMOVE** | The owner explicitly removed the beat from the primary narrative. |
| **PRESERVE** | Keep the capability/scene while reframing its ERP/process content. |
| **VERIFY** | Requires owner confirmation, real evidence or a visual/runtime check. |

### Approved narrative posture

This is a **Product Vision refinement film for the full Consulting Operating System**. Existing H1/H2/H3 boundaries describe rollout depth, not the narrative or product boundary. The film is one vertical proof path through the OS, not an exhaustive scope map:

> A shared Consulting Context connects Project/Knowledge, consultant input, Offer/Service/Product Portfolio, CRM/customer data, Contracts, People/Capacity and Finance/Operations. From any credible operational event, Consultry produces explainable intelligence and coordinates responsible humans across Sales, Team Leads/Managers, Staffing, Backoffice, Finance, consultants and management. The selected action continues into delivery, learning and economic impact and updates the shared context.

`Opportunity-to-Concept` is a starting wedge and optional branch within this demo, not the Whole Product scope. The narrative posture is **context-centred, multi-role and entry-point-flexible**.

The technical narrative is `Second Brain / Context Graph → Consultry Engine → HarnessPack → virtualized or local Harness → approved Tools/RAG/MCP → verification/approval/audit`. An adapted Hermes fork may be the initial Harness base. Backoffice/Finance is a Vision-Core domain with high automation potential across expenses/travel, business meals, billing/invoices, licenses/subscriptions and vendor/cost workflows, even if the current proof path does not execute every operator.

The Team Lead / Team Management module is also Vision-Core: role-based team, staffing and structure views combine ProjectStatus, People/Capacity, Contracts/SOWs, Time/Expense and Finance/Billing into intelligent dashboards. It exposes invoice-readiness and delivery gaps and proposes sourced, approval-aware responses rather than silently mutating staffing or commercial records.

Personal Development / Capability Planning is Vision-Core as well. It connects evidence-backed consultant skills with signals, weighted Opportunities, contracted work, the active order/project pipeline, Offer/Service/Product trends and source-bound market indicators. The current ERP example may show rising demand for a specific ERP migration capability and the resulting training, certification, Academy, hiring-profile or partner-capacity recommendations.

Demand weighting is Bestandskunden-first. Consultants act as distributed human sensing nodes inside customer projects; their intentionally logged observations and contracted work outrank external market evidence. Approved LinkedIn/XING/jobboard/customer-career-page and certification-provider data may reinforce which skills or certifications are being sought — especially by existing customers, and only later by potential customers. External sources remain secondary, Terms-compliant, source-bound, freshness- and confidence-marked.

Project/Knowledge Intelligence must also prove **cross-project compounding**. Parallel project work may become an explained `ProblemPattern` and `SymbiosisLink`, but only a human-validated `ReuseCandidate` may enter Assetization. Cross-account use requires abstraction, de-identification, Contract/IP/Confidentiality/Usage-Rights review, versioned `ReusableAsset`, explicit `ReuseApplication` and Approval/Audit. Repeated applications may inform a `ServiceBundleCandidate` and a contract-aware `ReuseValueCase`; T&M always reflects actual worked/billed effort.

Approved main case (vendor-neutral ERP; O2C first migration wave, with P2P and master data in the NeedMap):

> **Hansa Maschinenbau AG — ERP-Migration & Prozessmanagement**

All account names, people, references, clauses and scenario figures are intentionally fictional demo data.

## 2. Master scene table of contents

| # | Current window | Current beat | Recommended beat | Redline |
|---:|---:|---|---|---|
| 00 | 00.00–06.30 | Positioning: “Senior-Zeit gehört zum Kunden.” | Keep positioning; add canonical Win + Work framing only if needed. | KEEP |
| 01 | 06.80–10.35 | Signal Radar / feed | Hansa context pulse: project/knowledge, portfolio, CRM, contract, team and finance inputs converge around the ERP/process need. | REPLACE |
| 02 | 10.35–15.15 | Signal-source analysis and selection | Show why the need matters differently to consultants, Sales, Team Leads/Managers and Backoffice/Finance; an explainable action object emerges. | REPLACE |
| 03 | 14.59–21.40 | “New Opportunity,” quick action, opportunity summary | Consultant validates the connected context; Opportunity + EvidencePack becomes the decision object. | REPLACE |
| 04 | 18.65–21.40 | Team/profile preview | Opportunity brief + NeedMap preview leading into named team matching. | REPLACE |
| 05 | 21.40–41.96 | Opportunity Workspace visit 1; outreach draft | EvidencePack → human validation → recommended next step; Team-Erweiterung selected. | REPLACE |
| 06 | 41.60–47.52 | Named team matching and staffing confirmation | Keep named matching and People Scores; reframe for ERP/process roles. | PRESERVE/REPLACE |
| 07 | 47.52–60.32 | Opportunity Workspace visit 2; named CV generation | Keep CV generation; replace cloud/security CV content with ERP/process evidence. | PRESERVE/REPLACE |
| 08 | 60.32–69.58 | Opportunity Canvas graph; offer-from-canvas action | Opportunity graph with selected team route; ConceptPlan/Grounded Draft remain optional nodes. | REPLACE |
| 09 | 68.72–75.84 | Offer bundle, contract, “Deal closed” | EvidencePack + selected next step + team/CVs; internal approval readiness. | REMOVE/REPLACE |
| 10 | 67.72–90.92 | AWS project context and meeting-prep prompt | Same previously won ERP project after an explicit time jump. | REPLACE |
| 11 | 88.92–96.12 | Named-person AWS project dashboard | Active ERP Project 360 plus explained match to a parallel migration problem; no person activity in the default status view. | REPLACE |
| 12 | 95.62–102.12 | Matched code/knowledge output | `ProblemPattern → SymbiosisLink → ReuseCandidate`; human review, abstraction/rights status and target asset preview. | REPLACE |
| 13 | 101.62–113.12 | Business-case chart / Consultry cost | Traceable `ReusableAsset → ReuseApplication/ServiceBundleCandidate → ReuseValueCase`; separate actual T&M effort from fixed-price/outcome/accelerated-delivery value. | REPLACE LATER |
| 14 | 112.12–118.16 | “Weniger Tools. Mehr Effizienz. Mehr Beratung.” | Keep; connect to proof slice and human responsibility. | KEEP |

## 3. Global replacements

### 3.1 Persistent stage rail

Current:

`Signal → Team → Angebot → Projekt → Faktura`

Recommended adaptive structure:

- **OS cycle:** `Capture ↔ Understand ↔ Decide ↔ Coordinate ↔ Execute ↔ Reuse ↔ Learn & Steer`
- **Expanded demo path:** `Consulting Context → Observation → Signal & EvidencePack → Decision → ActionCase → Team/Commercials/Delivery → Approval → Active Project → ProblemPattern/SymbiosisLink → ReusableAsset/ReuseApplication → Value/Learning → Consulting Context`

Reasons:

- `Consulting Context` establishes the category by synchronizing Project/Knowledge, portfolio, CRM, contracts, people/capacity and finance.
- No single role or entry point defines the product; the demo may enter through an operational need, signal, staffing issue, commercial decision or financial variance.
- `Observation` is the low-friction consultant/source input; `Signal` is the enriched and routed hypothesis, not an automatic Opportunity.
- `Decision → ActionCase` keeps Delivery, Customer, Team, Capability and Commercial paths on the same operating loop; only the commercial branch creates Opportunity/ChangeCase.
- `Team/Commercials` represents orchestration across OS domains; matching, People Scores and CVs remain substantial beats.
- `Freigabe` separates human responsibility from automated-looking generation.
- `Projekt` begins only after the visible previously-won-project time jump.
- `Reuse` makes the cross-project compounding loop visible without turning Symbiosis into a navigation module.
- `Value/Learning` must trace effects to exact project, asset/application version and contract/pricing basis.
- The rail may collapse to macro chapters during overview moments and expand during operational scenes.

### 3.2 Global copy dictionary

| Current | Replace with |
|---|---|
| Bank AG | Hansa Maschinenbau AG |
| AWS Cloud Transformation | ERP-Migration & Prozessmanagement |
| Cloud Migration / AWS Migration | ERP-Migration & Prozessharmonisierung |
| Security + DORA | Order-to-Cash, Procure-to-Pay & Stammdaten |
| AWS Landing Zone | ERP-Zielarchitektur & Integrationslandkarte |
| IAM / GuardDuty | Datenmigration / Schnittstellen & Prozesskontrollen |
| Security Cloud Team | ERP Process, Solution & Migration TeamShape |
| DORA / BaFin | Prozessgovernance / Auditierbarkeit & interne Kontrollen |
| AWS Zielarchitektur | ERP-Zielbild & Prozesslandkarte |
| `bank-ag/aws-transformation` | `hansa/erp-migration` |
| Landing Zone Runbook | Migrations-, Cutover- und Rollout-Playbook |
| BANK-### | HANSA-### or neutral DEMO-### |
| Deal closed | Intern freigegeben · bereit für internen Export |

## 4. Scene-by-scene redline

### Scene 00 — Positioning

**Window:** 00.00–06.30  
**Source components:** `ConsultingOSExplainer`, shared app-intro shell  
**Current hero copy:** “Senior-Zeit gehört zum Kunden.”

**KEEP** the core line. It is consistent with the product’s pain thesis and the full Consulting-OS vision.

Suggested optional supporting line:

> `Das AI-native Consulting OS verbindet Kunden, Teams, Projekte, Wissen und Wirkung.`

“AI-native Consulting Operating System” is the Product Vision category. The following ERP story is one proof path through it; phase labels and the Opportunity-to-Concept wedge do not govern the film’s product scope.

**Product links:** [Alignment naming](../../../product-definition/Consultry-Alignment-Control-Plane-v1.0.md), [Product Vision §1–4](../../../product-definition/Consultry-Product-Vision-v1.0.md).

---

### Scene 01 — Signal Radar / intake

**Window:** 06.80–10.35  
**Source:** `SignalGraphPanel`  
**Current:** Financial Times AWS announcement, LinkedIn job post, cloud RFP and internal consultant note for Bank AG.

**REPLACE** with an existing-client, source-bound signal set:

| Source card | Proposed copy | Provenance treatment |
|---|---|---|
| `Kundenvertrag · Klausel 12.3` | `Optionsfenster öffnet in 120 Tagen` | Firm-Fact, clause citation required. |
| `Consultry Workspace · Projektsignal` | `Migrations-Timeline soll beschleunigt werden` | Tobias logs the observation from the active project with author/time/source; Consultry binds customer/project context and routes it to the responsible account owner. |
| `LinkedIn Mail · Kunde` | `ERP- und Prozessinitiative im Gespräch` | Relationship/context source retained in the Product Vision. |
| `Projekt- & ERP-Daten · verbunden` | `Stammdatenbrüche und manuelle Übergaben` | Deep Knowledge/Project Data connection; core use case. |

Header/filter replacements:

- `Signal Radar` → keep.
- `Cloud Migration` → `ERP & Prozesse`.
- `Financial Services` → `Industrie / Maschinenbau`.
- `AWS` chip → `Bestandskunde`.
- `5 aktive Signale` → `4 belegte Signale`.

Keep `LinkedIn Mail` as an explicit source. Show the contract and consultant worklog as the two primary signals; LinkedIn Mail and connected project data strengthen the hypothesis.

**User action:** open the top account cluster and see the contract trigger converge with Tobias’ consultant-logged timeline-acceleration signal from active project work; the signal is assigned to the responsible account owner for validation.

**Product links:** [F1 Account Growth](../../../product-definition/Consultry-Phase-1-MVP-Specs-and-Flow-Canvas-v1.0.md), [Domain: Signal](../../../product-definition/Consultry-Business-Domain-Definition-v1.0.md).

---

### Scene 02 — Signal analysis / qualification recommendation

**Window:** 10.35–15.15  
**Source:** expanded `SignalGraphPanel` detail  
**Current:** “AWS Migration,” prospect score, DORA priority, recent opportunities and recommended cloud services.

**REPLACE** with a qualification evidence view:

- Title: `Opportunity-Hypothese`.
- Candidate: `ERP-Migration & Prozessmanagement`.
- Why now: `Optionsfenster · 120 Tage + Bedarf aus Projektarbeit gemeldet`.
- Need: `Prozessabweichungen · 5 Standorte`.
- Access: `Bestandskunde · LinkedIn Mail + Account Lead vorhanden`.
- Reuse: `2 passende Referenzen · 1 Vorgehensmodell`.
- Confidence: keep only if accompanied by an explanation; do not present a magic score.
- Sources: show four source chips and provenance classes.

Replace “Passende Services & Bundles” with:

1. `End-to-End Prozessassessment` — O2C/P2P-Istbild, Pain Points, Governance.
2. `ERP-Zielbild & Integration` — Zielplattform, Schnittstellen, Datenobjekte.
3. `Migration, Pilot & Rollout` — Datenmigration, Cutover, Welle 1, Enablement.

The AI creates a **Recommendation**, not a binding Opportunity.

---

### Scene 03 — Opportunity Approval-Card

**Window:** 14.59–21.40  
**Source:** signal activation, “Opportunity gewinnen” transition  
**Current:** “New Opportunity · Bank AG,” AWS transformation and quick action “Team matchen & Angebot entwerfen.”

**REPLACE** the quick action and lifecycle semantics.

Proposed card:

- Eyebrow: `Opportunity-Vorschlag · aus 4 Quellen`.
- Title: `ERP-Migration & Prozessmanagement`.
- Account: `Hansa Maschinenbau AG · Bestandskunde`.
- Rationale: `Optionsfenster + belegter Prozessbedarf + vorhandene Referenzen`.
- Gaps: `Baseline-KPI und Scope der Standorte noch bestätigen`.
- Buttons: `Zurückstellen` and `Opportunity aktivieren`.
- Footer: `Freigabe wird protokolliert`.

On click, show an ApprovalEvent confirmation. Rename “Opportunity gewinnen” to `Opportunity aktivieren` or `Chance verfolgen`; “gewinnen” overstates the customer decision.

Replace “Team matchen & Angebot entwerfen” with `EvidencePack & Konzept starten`.

**Required visual relationship:** Recommendation → Explanation/Sources → Human click → active Opportunity → Audit indicator.

---

### Scene 04 — Opportunity brief / NeedMap preview

**Window:** 18.65–21.40  
**Source:** current signal-to-team preview and radar morph  
**Current:** cloud competency radar and project staffing preview.

**REPLACE** the early cloud content with two cards that lead into named team matching:

1. `Bedarfsbild` — O2C, P2P, Stammdaten, Prozessgovernance, Migration.
2. `Quellenlage` — contract, workshop, ERP/process report, prior reference.

Recommended headline:

> `Aus Signalen wird ein belegtes Bedarfsbild.`

The later named team-matching beat remains and follows the NeedMap.

---

### Scene 05 — Opportunity Workspace visit 1

**Window:** 21.40–41.96  
**Source:** `WorkspaceVisit({ visit: 1 })`  
**Current:** empty opportunity workspace → outreach email generated from four sources → text selected and personalised → “Entwurf bestätigt · Versand geplant” → named team search.

This is the film’s most important redline. **REPLACE the outbound-email workflow entirely** with the Product Vision’s evidence, opportunity and concept work surface.

#### Workspace header

- `Opportunity Workspace` → keep.
- `New Opportunity · Bank AG` → `Aktive Opportunity · Hansa Maschinenbau AG`.
- Progress stages: `EvidencePack 4/4` · `Validierung offen` · `Nächster Schritt nach Review`.

#### Main sections

| Current section | Replacement |
|---|---|
| Outreach · Entwurf | `EvidencePack · 4 Quellen` |
| Angebot & Vertrag | `Empfohlener nächster Schritt` |
| Meetings | `Review & offene Fragen` |
| Team · 3 Rollen offen | `Team-Matching · 3 ERP-/Prozessrollen` |
| Agent fragen | Keep as a context-bound assistant trigger. |

#### Primary interaction sequence

1. Open `EvidencePack`.
2. Inspect contract clause and workshop-note citations.
3. Human confirms the existing-client context and consultant-logged need.
4. The system recommends the next step from Kundengespräch, Team-Erweiterung, Angebot/Change Request or optional ConceptPlan.
5. User selects the recommended Team-Erweiterung route.
6. Named team matching and People Scores become available.
7. ReviewIssues remain supporting metadata, not a primary payoff card.

#### Suggested draft content

`NeedMap` items:

- Order-to-Cash über Standorte harmonisieren.
- Procure-to-Pay und Freigaben vereinheitlichen.
- Stammdaten und Migrationsbereitschaft absichern.
- Process Ownership, Governance und KPIs definieren.
- ERP-Migration, Cutover und Rollout-Wellen vorbereiten.

Do not show the outreach draft, `Versand geplant`, channel-selection row or cold-call actions in the primary narrative. `LinkedIn Mail` remains an **input source**, not an outbound action in this scene.

**Product links:** [Starting-wedge output contract](../../../product-definition/Consultry-Alignment-Control-Plane-v1.0.md), [Concept & Proposal flow](../../../product-definition/Consultry-Phase-1-MVP-Specs-and-Flow-Canvas-v1.0.md).

---

### Scene 06 — Named ERP/process team matching

**Window:** 41.60–47.52  
**Source:** `TeamMorphModules`  
**Current:** named people, photos, certifications, availability bars, match percentages, project collisions, consultant replacement and staffing confirmation.

**PRESERVE** named matching, photos, People Scores, availability and collision checks. **REPLACE** the cloud/security content with ERP/process-management roles and evidence.

#### Matched team

| Consultant | Target role | Capability evidence | Score treatment |
|---|---|---|---|
| `Max Muster` | ERP Process Lead | O2C, P2P, Process Ownership, applied methods | Explainable People Score with source links |
| `Lena Weber` | ERP Solution & Integration Architect | target architecture, integrations, extensions | Explainable People Score with source links |
| `Jonas Klein` | Data Migration & Change Lead | master data, migration, cutover, adoption | Explainable People Score with source links |

#### UI replacements

- Keep names, faces, personal experience/certifications, availability and current-project collision cues.
- Keep People Scores, but expose why each score exists: project evidence, applied methodologies, skills, certifications and availability.
- Replace the search/query with `ERP & Prozessmanagement`.
- Replace “Staffing bestätigen” with `Team für Opportunity übernehmen`.
- Keep the consultant swap/explore interaction if it demonstrates why one profile fits better.
- Retain the radar morph with ERP/process axes.

Suggested radar axes:

`Prozesse` · `ERP` · `Daten` · `Integration` · `Governance` · `Adoption`

Current phase boundaries do not govern this vision redline; named matching is an explicit owner decision.

**Product links:** [TeamShape definition](../../../product-definition/Consultry-Business-Domain-Definition-v1.0.md), [F6 scope cut](../../../product-definition/Consultry-Phase-1-MVP-Specs-and-Flow-Canvas-v1.0.md).

---

### Scene 07 — Opportunity Workspace visit 2 / named CV generation

**Window:** 47.52–60.32  
**Source:** `WorkspaceVisit({ visit: 2 })`  
**Current:** named consultants confirmed → CV selection and generation → named CV preview → accept three drafts.

**PRESERVE** the named CV-generation flow and its selection/loading/review mechanics. **REPLACE** the cloud/security profile content with ERP/process-management experience.

#### Proposed interaction

1. Header: `Team bestätigt · 3 Consultants`.
2. Click `CVs erstellen`.
3. Selection panel keeps the three named consultants.
4. CV generation uses Consultant Profiles, project history, applied internal methodologies, approved reference assets and availability.
5. Preview `CV_Max.pdf`, then Lena and Jonas.
6. Show source/provenance chips for experience and method claims.
7. User reviews and accepts the three drafts.
8. Button: `3 CV-Entwürfe übernehmen`.

Suggested CV content:

- Role summary and ERP/process-management profile.
- O2C/P2P and Process Ownership experience.
- ERP target architecture, integration or migration-wave experience according to the matched role.
- Applied internal methods and fictional prior reference projects.
- Availability and intended role in the Hansa engagement.

Keep named CVs and People Scores. Every experience or outcome claim must still be traceable to an approved internal source or visibly fictional demo reference.

---

### Scene 08 — Opportunity-to-Concept Canvas

**Window:** 60.32–69.58  
**Source:** `OpportunityCanvas`  
**Current graph nodes:** AWS project hub, Signal Cluster, named Team, CV drafts, Outreach, Angebot & Vertrag; CTA “KI · Angebot aus dem Canvas erstellen.”

**KEEP** the graph interaction but replace the ontology.

Recommended nodes:

| Node | State/label |
|---|---|
| Hub | `ERP-Migration & Prozessmanagement · Hansa Maschinenbau AG` |
| Signals | `Vertrag + Consultant Worklog + LinkedIn Mail + Projektdaten` |
| Evidence | `EvidencePack · Quellen & interne Methoden` |
| Needs | `NeedMap · 5 Bedürfnisse` |
| Team | `Max · Lena · Jonas · People Scores` |
| CVs | `3 CV-Entwürfe · geprüft` |
| Plan | `ConceptPlan · 4 Phasen` |
| Draft | `GroundedDraftSection · v0.1` |
| Review | `Quellenhinweise · optional` |
| Approval | `Consultant Review · erforderlich` |

Replace the CTA with:

> `Konzept- und Team-Paket zur Review vorbereiten`

The connector animation should terminate at Approval, not at contract/deal close.

**Product links:** [Output contract](../../../product-definition/Consultry-Alignment-Control-Plane-v1.0.md), [AI Workspace flow](../../../product-definition/Consultry-Phase-1-MVP-Specs-and-Flow-Canvas-v1.0.md).

---

### Scene 09 — Proposal payoff / human approval

**Window:** 68.72–75.84  
**Source:** `PersistentProjectBundleBridge`  
**Current:** CVs, services, contract draft, AI-assisted offer creation and “Deal closed.”

**REMOVE** contract and autonomous close semantics.

Recommended primary payoff stack:

1. `EvidencePack` — contract, consultant worklog, LinkedIn Mail, project data, trustworthy external sources and internal methodologies.
2. `NeedMap` — 5 supported needs.
3. `Named Team + People Scores` — Max, Lena and Jonas with explainable fit.
4. `CV package` — 3 reviewed ERP/process CVs.
5. `ConceptPlan` — 4-phase approach.
6. `GroundedDraftSection` — source coverage visible.

`ReviewIssues` may appear as supporting metadata inside the review panel, but not as one of the primary payoff cards.

Header transition:

- Current: `Angebot bereit zur Review` → `Deal closed`.
- Recommended: `Konzeptabschnitt bereit zur Review` → user clicks approval → `Intern freigegeben`.

Final seal:

> `1 grounded proof slice · approved`

Supporting line:

> `Intern · versioniert · quellengebunden`

No pricing, contract, customer acceptance or external send should be implied.

---

### Scene 10 — Work-Hero transition and project context

**Window:** 67.72–90.92  
**Source:** `VertriebBackground`, `VertriebEditSidebar`, `PersistentPromptAgentBridge`  
**Current:** the just-closed AWS opportunity appears to become an active project; user asks Consultry to prepare the Bank AG status meeting.

The active project is the **same ERP opportunity after it was previously won**. **REPLACE** the instantaneous-looking lifecycle jump with an explicit time divider:

> `Später · im gewonnenen Projekt`

Recommended active-project context:

- Project: `ERP-Migration · Welle 1`.
- Account: `Hansa Maschinenbau AG` — same fictional account and won project.
- Prompt: `Bereite das Steuerkreis-Meeting für die ERP-Migration vor.`
- Context chips: `Prozessdesign` · `Migration Welle 1` · `Risiken` · `Entscheidungen`.
- Source chips: ProjectStatus, ERP/project data, KnowledgeAssets, decision log, concept section, consultant worklogs and meeting notes.

Recommended assistant response:

> `Projektkontext analysiert. Agenda, offene Entscheidungen und Risiken sind als Entwurf vorbereitet — mit Quellen.`

The assistant connects and reasons across Knowledge, Project Data and work artefacts as a core use case. Binding changes, scheduling and external sends remain visible human actions.

---

### Scene 11 — Deliverable-level project dashboard

**Window:** 88.92–96.12  
**Source:** `SceneProjectDashboardContent`  
**Current:** named people, individual activity rows, Jira and ServiceNow tasks, AWS security workstreams, status meeting.

**REPLACE** project content and make deep Knowledge/Project Data connection central. Keep person-specific activity out of the **default** status view; it may exist in an intentionally opened drill-down.

#### Header

- `Projekt · Hansa Maschinenbau AG`.
- `ERP-Migration · Welle 1`.
- `Aktiv · Woche 2 von 6`.

#### Deliverables

- `Istbild & Prozess-Pain-Map` — done.
- `Fit-to-Standard · O2C/P2P` — active.
- `Daten- & Integrationsdesign` — active.
- `Migrationstest Welle 1` — next.
- `Cutover, Adoption & Rollout-Playbook` — planned.

#### ProjectStatus cards

- `Fortschritt` — deliverable-level.
- `Nächstes Steering` — date and agenda draft.
- `Offene Entscheidungen` — Process Owner, Migrationsumfang, KPI baseline.
- `Risiken` — data quality, integration window, cutover readiness.

#### Core Project/Knowledge Intelligence

- Connect Jira/project tasks, ERP extracts, DMS/SharePoint, project artefacts, decisions, methods and consultant worklogs.
- Surface process dependencies, data-quality conflicts, reusable assets and opportunity/project feedback loops.
- Detect a fictional parallel SAP S/4HANA migration context with similar data-mapping/cutover work and explain shared versus different traits.
- Create only a suggested `ProblemPattern`/`SymbiosisLink`; do not imply automatic Cross-Customer knowledge transfer.
- Show why each insight exists with source links.
- Treat this depth as a core Product Vision use case, not a future-preview badge.

#### Remove or relabel

- Remove employee-specific activity attribution from the default feed.
- The named team may remain visible as the project team; detailed personal activity appears only after deliberate drill-down.
- Keep deep Jira/ERP/DMS/Knowledge connections and cross-tool conflict/reuse inference in the core scene.

**Product links:** [ProjectStatus domain](../../../product-definition/Consultry-Business-Domain-Definition-v1.0.md), [Project Intelligence depth source](../../../product-definition/Consultry-Project-Intelligence-Symbiosis-Graph-v1.0.md).

---

### Scene 12 — Cross-project Symbiosis & Assetization review

**Window:** 95.62–102.12  
**Source:** `ConsultantWorkDetailJump`, `ConsultantWorkExternalWindows`  
**Current:** AWS meeting preparation, GitHub `security.tf`, PowerPoint and Jira issue references.

**REPLACE** the isolated meeting-prep payoff with an F11 `Symbiosis & Assetization` frame using the same source-aware interaction grammar.

Hero-frame content:

- Source projects: `Hansa · ERP-Migration Welle 1` and fictional `Industrie Nord · S/4HANA Cutover`.
- Explained pattern: `Migration Readiness · Datenmapping & Cutover`.
- Shared traits and important differences; no opaque similarity score as sole explanation.
- `ReuseCandidate`: `S/4HANA Migration Readiness & Cutover Blueprint`.
- Candidate asset type: Blueprint + Quality Gate + Template.
- `RightsState: Review erforderlich`; `ReuseScope: Project/Account only` until abstraction and review complete.
- Primary action: `Assetization prüfen` / `ReuseCandidate bestätigen`.
- Secondary actions: merge, correct, reject, open sources.
- Human owner: Practice/Knowledge Lead; Contract/Governance review remains explicit.

Do not show raw customer text from one account inside the other project. The visual should communicate abstraction and governed lineage, not file copying.

**Product links:** [UX F11 and object flow](../../../product-definition/Consultry-UX-Operating-Model-v0.1.md), [Project Intelligence v1.1 requirements](../../../product-definition/Consultry-Project-Intelligence-Symbiosis-Graph-v1.0.md).

---

### Scene 13 — Reuse application, service productization & value learning

**Window:** 101.62–113.12  
**Source:** `SceneFinanz`  
**Current:** `MEHRWERT UND PIPELINE VS. CONSULTRY-KOSTEN`, running adviser count and annual values.

**DOCUMENTATION TARGET; VISIBLE IMPLEMENTATION PAUSED.** Replace the generic isolated ROI story with a traceable `ReuseValueCase` when the user resumes visible work.

Required relationships:

- published/approved `ReusableAsset v1.0` with exact owner, rights state, applicability and exclusions;
- `ReuseApplication` in the target project with Fit, adaptation plan, reviewer and version pin;
- optional `ServiceBundleCandidate`: `Accelerated ERP Migration Readiness` with Delivery Model, Pricing Model and Proof;
- Baseline versus actual internal effort and delivery time;
- quality/rework/customer-outcome evidence where available;
- price/revenue/cost/margin effects with assumptions and Contract/Pricing model;
- explicit T&M rule: actual worked/billed effort only; saved hours are not billed as worked;
- feedback into Knowledge, Offer Portfolio, Capability Planning and Management/Finance context.

No unsupported ROI percentage or margin number should be shown as real. Fictional demo figures must be labelled fictional/illustrative and traceable to their assumptions.

---

### Scene 14 — CTA

**Window:** 112.12–118.16  
**Source:** `SceneCTA`  
**Current:** “Weniger Tools. Mehr Effizienz. Mehr Beratung.”

**KEEP** the three-line ending.

Optional proof line before the final hold:

> `Die Arbeit aus einem Projekt macht das nächste besser.`

The CTA should not claim autonomous delivery, full operating system replacement or closed deals.

## 5. Owner decisions by capability

| Current claim/visual | Owner decision | Treatment |
|---|---|---|
| LinkedIn source | Keep `LinkedIn Mail` | Use as input evidence in the Signal cluster. |
| Team matching with names and scores | Keep | Reframe roles, evidence and scores for ERP/process management. |
| Individual availability/collisions | Keep | Preserve in team-matching scene. |
| Named CV generation | Keep | Reframe CVs for ERP/process work and internal methods. |
| Outreach “Versand geplant” | Remove from primary narrative | Replace with EvidencePack/NeedMap/concept work. |
| Offer pricing/conditions and contract cards | Replace primary payoff | Use EvidencePack, human validation, selected next step and team/People Scores/CVs; keep ConceptPlan/GroundedDraftSection optional. |
| ReviewIssues | Do not use as primary payoff | Keep only as optional contextual review metadata. |
| “Deal closed” | Not an AI/product action; hides customer decision and approval | Replace with internal approval. |
| Deep Jira/ERP/DMS/Knowledge intelligence | Core Product Vision use case | Keep and strengthen; no future-preview badge. |
| Individual activity feed | Not in default view | Allow only in an intentionally opened detail/drill-down. |
| Universal `Signal → Opportunity` flow | Superseded by UX canon | Use `Observation → Signal → Decision → ActionCase`; Opportunity/ChangeCase only on the commercial branch. |
| Project Symbiosis / Assetization | Product-Vision-Core | Show explained pattern, human-reviewed candidate, abstraction/rights gate, versioned asset and target application. |
| Cross-customer raw reuse | Prohibited | Reuse only through approved `ReusableAsset` with abstraction, de-identification, RightsState, ReuseScope, Approval and Audit. |
| Faktura rail stage | Superseded by OS cycle | Use `Reuse` and `Value/Learning` as narrative chapters; do not expose workflow states as navigation modules. |
| Business-case scene | Documentation target revised; visible work paused | Later replace isolated ROI with a traceable `ReuseValueCase`; keep T&M actuals distinct from fixed-price/outcome/accelerated-delivery economics. |

## 6. Self-evaluation and docs grill

The proposal was challenged against the current context anchor, canonical naming, domain invariants, flow specs and Project Intelligence docs. The owner then explicitly set **Product Vision refinement** as the governing mode: existing phase boundaries are tracked but do not remove capabilities from this redline.

### Grill result 1 — Is the new scenario genuinely more suitable?

**Result:** yes. ERP migration plus process management makes process consulting, enterprise architecture, integration and change visible in one credible boutique engagement. It also maps naturally to an existing-client signal and a small multidisciplinary TeamShape.

**Residual risk:** “ERP migration” can become too broad or too technical. Copy must lead with business-process outcomes and process ownership, then show ERP, data and integration as the implementation substrate. The target ERP vendor should remain open until QA approval.

### Grill result 2 — Are phase boundaries governing this redline?

**Result:** no. Vision completeness comes first; final phase boundaries will be set after the Product Vision reaches completion.

**Correction made:** earlier removal recommendations based only on H1/H2 boundaries were withdrawn. Named staffing, People Scores, CVs and deep Project/Knowledge Intelligence remain. Outreach and `Deal closed` are still changed because the owner explicitly decided so.

### Grill result 3 — How is person-level capability treated?

**Result:** named team matching, People Scores, availability/collisions and CV generation remain in the Product Vision. Only person-specific **activity** is excluded from the default ProjectStatus view.

### Grill result 4 — Does the Work-Hero branch falsely imply conversion?

**Result:** the current source looks instantaneous. The target story keeps the same project but adds a hard time divider: `Später · im gewonnenen Projekt`.

### Grill result 5 — Is Project Intelligence represented honestly?

**Result:** deep Knowledge, Project Data, Jira/ERP/DMS/Confluence and work-artifact connections are a core use case. The target now extends beyond retrieval: parallel work becomes an explained `ProblemPattern`/`SymbiosisLink`, then a human-reviewed and rights-gated Assetization flow. Raw customer artefacts never cross accounts automatically.

### Grill result 6 — Is every binding AI action human-approved?

**Result:** yes in the proposed journey. Signal Decision/ActionCase, Opportunity/ChangeCase activation, ReuseCandidate validation, Rights Review, ReusableAsset publication, ReuseApplication and ServiceBundle approval each have named human owners and AuditEvents. External send, scheduling and writeback remain absent unless separately authorized.

### Grill result 7 — Are sources and provenance visible enough?

**Result:** materially improved. The primary signal combines the contract trigger with a consultant-logged project need; LinkedIn Mail and connected project data reinforce it. Trustworthy external sources and internally applied methodologies retain distinct provenance. `ReviewIssues` stays secondary.

### Grill result 8 — Does the rail match product scope?

**Result:** the rail is explicitly extensible and circular. The current canonical chapters are `Capture ↔ Understand ↔ Decide ↔ Coordinate ↔ Execute ↔ Reuse ↔ Learn & Steer`; the ERP demo is one path through them. Frames and domain objects must not become primary navigation modules.

### Grill result 9 — Are all proposed facts safe to present as real?

**Result:** no. Hansa Maschinenbau AG, clause numbers, site counts, signals and operational metrics are fictional placeholders. They must remain marked demo data or be replaced with approved evidence.

### Grill result 10 — Is the source/runtime internally coherent?

**Result:** the current JSX remains the runtime authority and has not been changed in this documentation-first pass. The visible HyperFrames implementation and validation are explicitly paused. When resumed, preserve current duration/audio posture unless the user revises them and regenerate verification markers from dynamic source timing.

## 7. Definition-of-ready for implementation

- [x] Product-Vision refinement mode approved; phase boundaries non-governing.
- [x] ERP-Migration & Prozessmanagement case approved.
- [x] Fictional customer treatment approved.
- [x] Rail extensibility approved; macro/expanded structure documented.
- [x] Named staffing, People Scores and CVs retained.
- [x] Same previously won project confirmed with visible time jump.
- [x] Signal sources approved: contract + consultant worklog + LinkedIn Mail + project data.
- [x] Project Symbiosis/Assetization object flow documented.
- [x] Rights, customer-boundary, T&M and value-accounting guardrails documented.
- [x] Documentation-first hold approved; no visible HyperFrames change or validation in this pass.
- [ ] Exact fictional parallel ERP project, source objects, ProblemPattern, overlap/difference evidence and ReusableAsset copy approved.
- [ ] Illustrative ReuseValueCase assumptions approved before any visible numbers are changed.
- [x] Voiceover and music remain muted.
- [ ] Exact fictional contract clause, consultant-observed need `X` and LinkedIn Mail copy drafted.
- [ ] Optional ERP vendor naming confirmed if the implementation names one.
- [ ] Copy spreadsheet or source-level replacement list generated from this index.

## 8. Definition-of-done for later source implementation

- [ ] All AWS/Bank/cloud/security strings replaced or intentionally retained.
- [ ] Named ERP/process team matching, People Scores, availability/collisions and CV generation remain functional and are source-explainable.
- [ ] Outreach draft/channel selection is removed from the primary flow.
- [ ] Primary payoff uses EvidencePack, human validation, the selected next step and team/People Scores/CVs; ConceptPlan/GroundedDraftSection stay optional and ReviewIssues secondary.
- [ ] `Deal closed` is replaced with human-owned internal approval/export readiness.
- [ ] Approval is visible at Opportunity activation and ProposalDraft adoption.
- [ ] Provenance/source badges are visible in qualification and drafting.
- [ ] Work transition shows the same previously won project after an explicit time jump.
- [ ] Deep Knowledge/Project Data Intelligence is clearly presented as a core use case.
- [ ] Project Intelligence explains a fictional parallel ERP problem through source-bound shared and different traits.
- [ ] `ProblemPattern → SymbiosisLink → ReuseCandidate` remains a suggestion/review flow, not autonomous asset creation.
- [ ] Assetization shows abstraction, de-identification, RightsState, ReuseScope, owner, version, Approval and Audit before cross-account reuse.
- [ ] ReuseApplication pins the exact asset version, target project, Fit and Adaptation Plan.
- [ ] ServiceBundleCandidate and ReuseValueCase remain optional governed projections; no automatic publication or unsupported economic claims.
- [ ] T&M actual effort is visually and semantically separated from fixed-price/outcome/accelerated-delivery economics.
- [ ] Default ProjectStatus excludes person-specific activity; detail views may drill down.
- [ ] Rail uses Capture/Understand/Decide/Coordinate/Execute/Reuse/Learn without treating frames or objects as primary app navigation.
- [ ] Current runtime/timing handover refreshed again after source edits.
- [ ] Visual review points regenerated from the current timing constants after each timing change.

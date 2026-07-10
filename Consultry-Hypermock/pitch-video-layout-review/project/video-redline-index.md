# Consultry pitch video — redline index

**Purpose:** source-backed table of contents and scene-by-scene content replacement plan  
**Composition:** [`pitch-scene.jsx`](./pitch-scene.jsx)  
**Journey graph:** [`graph.md`](./graph.md)  
**Questions and uncertainties:** [`video-redline-qa.md`](./video-redline-qa.md)  
**Current calculated runtime:** **118.16 s**  
**Analysis date:** 2026-07-10

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

This is a **Product Vision refinement film**. Existing H1/H2/H3 boundaries are non-governing for the redline and will be finalised after the Product Vision is complete:

> A contract signal, a consultant-logged need from active project work and LinkedIn Mail converge into a human-approved Opportunity. The workspace connects evidence, deep Knowledge/Project Data, named team matching, People Scores, CVs, ConceptPlan and a grounded draft. After human approval and a visible time jump, the same previously won ERP project becomes the Work context.

Approved main case (vendor-neutral ERP; O2C first migration wave, with P2P and master data in the NeedMap):

> **Hansa Maschinenbau AG — ERP-Migration & Prozessmanagement**

All account names, people, references, clauses and scenario figures are intentionally fictional demo data.

## 2. Master scene table of contents

| # | Current window | Current beat | Recommended beat | Redline |
|---:|---:|---|---|---|
| 00 | 00.00–06.30 | Positioning: “Senior-Zeit gehört zum Kunden.” | Keep positioning; add canonical Win + Work framing only if needed. | KEEP |
| 01 | 06.80–10.35 | Signal Radar / feed | Contract signal + consultant workspace signal + LinkedIn Mail + connected project evidence. | REPLACE |
| 02 | 10.35–15.15 | Signal-source analysis and selection | Evidence-backed qualification recommendation. | REPLACE |
| 03 | 14.59–21.40 | “New Opportunity,” quick action, opportunity summary | Human Approval-Card creates active Opportunity. | REPLACE |
| 04 | 18.65–21.40 | Team/profile preview | Opportunity brief + NeedMap preview leading into named team matching. | REPLACE |
| 05 | 21.40–41.96 | Opportunity Workspace visit 1; outreach draft | EvidencePack → NeedMap → concept section draft/edit/review. | REPLACE |
| 06 | 41.60–47.52 | Named team matching and staffing confirmation | Keep named matching and People Scores; reframe for ERP/process roles. | PRESERVE/REPLACE |
| 07 | 47.52–60.32 | Opportunity Workspace visit 2; named CV generation | Keep CV generation; replace cloud/security CV content with ERP/process evidence. | PRESERVE/REPLACE |
| 08 | 60.32–69.58 | Opportunity Canvas graph; offer-from-canvas action | Opportunity-to-Concept graph with approval and internal export. | REPLACE |
| 09 | 68.72–75.84 | Offer bundle, contract, “Deal closed” | Evidence + team/CVs + ConceptPlan + GroundedDraft; human approval/export readiness. | REMOVE/REPLACE |
| 10 | 67.72–90.92 | AWS project context and meeting-prep prompt | Same previously won ERP project after an explicit time jump. | REPLACE |
| 11 | 88.92–96.12 | Named-person AWS project dashboard | Deep Knowledge/Project Data view; no person activity in the default status view. | REPLACE |
| 12 | 95.62–102.12 | Matched code/knowledge output | Grounded meeting-prep output with source links and human edit. | KEEP/REPLACE |
| 13 | 101.62–113.12 | Business-case chart / Consultry cost | Preserve scene content; use Wirkung in the extensible rail. | KEEP |
| 14 | 112.12–118.16 | “Weniger Tools. Mehr Effizienz. Mehr Beratung.” | Keep; connect to proof slice and human responsibility. | KEEP |

## 3. Global replacements

### 3.1 Persistent stage rail

Current:

`Signal → Team → Angebot → Projekt → Faktura`

Recommended adaptive structure:

- **Macro:** `Gewinnen → Arbeiten → Wirkung`
- **Expanded:** `Signal → Opportunity → Kontext → Team → Konzept → Freigabe → Projekt → Wirkung`

Reasons:

- `Opportunity` is the central demand node and currently disappears from the rail.
- `Kontext` makes the deep Knowledge/Project Data core use case explicit.
- `Team` deserves its own stage because matching, People Scores and CVs remain substantial beats.
- `Freigabe` separates human responsibility from automated-looking generation.
- `Projekt` begins only after the visible previously-won-project time jump.
- `Wirkung` accurately labels the existing business-case scene without requiring content rework.
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

**KEEP** the core line. It is consistent with the product’s pain thesis and the Opportunity-to-Concept proof.

Suggested optional supporting line:

> `Consultry verbindet Gewinnen und Arbeiten — quellengebunden, editierbar, verantwortet.`

If “AI operating system” language is used, treat it as Product Vision framing and keep it consistent with the canonical product terms; phase labels do not govern this redline.

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
| `Consultry Workspace · Consultant Worklog` | `Bedarf X im laufenden Projekt erkannt und gemeldet` | Human-authored internal project signal with author/time/source. |
| `LinkedIn Mail · Kunde` | `ERP- und Prozessinitiative im Gespräch` | Relationship/context source retained in the Product Vision. |
| `Projekt- & ERP-Daten · verbunden` | `Stammdatenbrüche und manuelle Übergaben` | Deep Knowledge/Project Data connection; core use case. |

Header/filter replacements:

- `Signal Radar` → keep.
- `Cloud Migration` → `ERP & Prozesse`.
- `Financial Services` → `Industrie / Maschinenbau`.
- `AWS` chip → `Bestandskunde`.
- `5 aktive Signale` → `4 belegte Signale`.

Keep `LinkedIn Mail` as an explicit source. Show the contract and consultant worklog as the two primary signals; LinkedIn Mail and connected project data strengthen the hypothesis.

**User action:** open the top account cluster and see the contract trigger converge with the consultant-logged need from active project work.

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
- Progress stages: `Evidence 4/4` · `NeedMap in Review` · `Konzept noch offen`.

#### Main sections

| Current section | Replacement |
|---|---|
| Outreach · Entwurf | `EvidencePack · 4 Quellen` |
| Angebot & Vertrag | `ConceptPlan · noch nicht erstellt` |
| Meetings | `Review & offene Fragen` |
| Team · 3 Rollen offen | `Team-Matching · 3 ERP-/Prozessrollen` |
| Agent fragen | Keep as a context-bound assistant trigger. |

#### Primary interaction sequence

1. Open `EvidencePack`.
2. Inspect contract clause and workshop-note citations.
3. Click `NeedMap erstellen`.
4. AI produces draft needs with source chips.
5. User selects an ambiguous need and asks for clarification.
6. AI marks a contextual source gap: `Standort-Scope bestätigen` (supporting review metadata, not a primary payoff card).
7. User accepts the supported needs.
8. Click `Konzeptplan starten`.

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
- Show why each insight exists with source links.
- Treat this depth as a core Product Vision use case, not a future-preview badge.

#### Remove or relabel

- Remove employee-specific activity attribution from the default feed.
- The named team may remain visible as the project team; detailed personal activity appears only after deliberate drill-down.
- Keep deep Jira/ERP/DMS/Knowledge connections and cross-tool conflict/reuse inference in the core scene.

**Product links:** [ProjectStatus domain](../../../product-definition/Consultry-Business-Domain-Definition-v1.0.md), [Project Intelligence depth source](../../../product-definition/Consultry-Project-Intelligence-Symbiosis-Graph-v1.0.md).

---

### Scene 12 — Grounded meeting-prep output

**Window:** 95.62–102.12  
**Source:** `ConsultantWorkDetailJump`, `ConsultantWorkExternalWindows`  
**Current:** AWS meeting preparation, GitHub `security.tf`, PowerPoint and Jira issue references.

**KEEP** the source-aware work pattern; **REPLACE** artefacts:

| Current | Replacement |
|---|---|
| `security.tf` | `o2c-process-map.bpmn` or `migration-rules.md` |
| AWS target architecture | `ERP-Zielbild & Integrationslandkarte` |
| AWS presentation | `Steuerkreis · ERP-Migration Welle 1` |
| GuardDuty findings | `3 offene Prozess- und Migrationsentscheidungen` |
| GitHub repo | read-only knowledge/project repository or SharePoint source |
| “Where is policy defined?” | `Wo ist die Freigabelogik für Preisabweichungen im Order-to-Cash-Prozess definiert?` |

Output sections:

- Agenda.
- Status by deliverable.
- Decisions needed.
- Risks and proposed mitigations.
- Sources and freshness.
- `Als Entwurf übernehmen` with human approval.

No connector writeback should occur.

---

### Scene 13 — Business case / effect

**Window:** 101.62–113.12  
**Source:** `SceneFinanz`  
**Current:** `MEHRWERT UND PIPELINE VS. CONSULTRY-KOSTEN`, running adviser count and annual values.

**KEEP** the existing business-case scene content unchanged in the current pass. Only rename the persistent rail stage from `Faktura` to `Wirkung`.

Finance numbers, ROI framing, footnotes and product-proof metrics are explicitly outside this redline pass.

---

### Scene 14 — CTA

**Window:** 112.12–118.16  
**Source:** `SceneCTA`  
**Current:** “Weniger Tools. Mehr Effizienz. Mehr Beratung.”

**KEEP** the three-line ending.

Optional proof line before the final hold:

> `Von der belegten Chance zum verantworteten Konzept.`

The CTA should not claim autonomous delivery, full operating system replacement or closed deals.

## 5. Owner decisions by capability

| Current claim/visual | Owner decision | Treatment |
|---|---|---|
| LinkedIn source | Keep `LinkedIn Mail` | Use as input evidence in the Signal cluster. |
| Team matching with names and scores | Keep | Reframe roles, evidence and scores for ERP/process management. |
| Individual availability/collisions | Keep | Preserve in team-matching scene. |
| Named CV generation | Keep | Reframe CVs for ERP/process work and internal methods. |
| Outreach “Versand geplant” | Remove from primary narrative | Replace with EvidencePack/NeedMap/concept work. |
| Offer pricing/conditions and contract cards | Replace primary payoff | Use EvidencePack, team/People Scores, CVs, ConceptPlan and GroundedDraftSection. |
| ReviewIssues | Do not use as primary payoff | Keep only as optional contextual review metadata. |
| “Deal closed” | Not an AI/product action; hides customer decision and approval | Replace with internal approval. |
| Deep Jira/ERP/DMS/Knowledge intelligence | Core Product Vision use case | Keep and strengthen; no future-preview badge. |
| Individual activity feed | Not in default view | Allow only in an intentionally opened detail/drill-down. |
| Faktura rail stage | Rename approved | Rename to `Wirkung`; do not rework business-scene content. |
| Business-case scene | Preserve | No number, ROI or footnote rework in this pass. |

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

**Result:** deep Knowledge, Project Data, Jira/ERP/DMS/Confluence and work-artifact connections are a core use case. They should be explicit and source-explainable, not labelled as a side preview.

### Grill result 6 — Is every binding AI action human-approved?

**Result:** yes in the proposed journey. Opportunity activation and ProposalDraft adoption each have explicit ApprovalEvents. External send, scheduling and writeback are absent.

### Grill result 7 — Are sources and provenance visible enough?

**Result:** materially improved. The primary signal combines the contract trigger with a consultant-logged project need; LinkedIn Mail and connected project data reinforce it. Trustworthy external sources and internally applied methodologies retain distinct provenance. `ReviewIssues` stays secondary.

### Grill result 8 — Does the rail match product scope?

**Result:** the rail is explicitly extensible. Recommended macro chapters are `Gewinnen → Arbeiten → Wirkung`; the expanded journey is `Signal → Opportunity → Kontext → Team → Konzept → Freigabe → Projekt → Wirkung`. Business-scene content remains unchanged.

### Grill result 9 — Are all proposed facts safe to present as real?

**Result:** no. Hansa Maschinenbau AG, clause numbers, site counts, signals and operational metrics are fictional placeholders. They must remain marked demo data or be replaced with approved evidence.

### Grill result 10 — Is the source/runtime internally coherent?

**Result:** the current JSX calculates 118.16 seconds and has voiceover/music muted. Length is preserved for now, the `.dc.html` project remains, `HANDOVER.md` is refreshed, and future verification markers must be regenerated from dynamic source timing rather than a permanent timestamp list.

## 7. Definition-of-ready for implementation

- [x] Product-Vision refinement mode approved; phase boundaries non-governing.
- [x] ERP-Migration & Prozessmanagement case approved.
- [x] Fictional customer treatment approved.
- [x] Rail extensibility approved; macro/expanded structure documented.
- [x] Named staffing, People Scores and CVs retained.
- [x] Same previously won project confirmed with visible time jump.
- [x] Signal sources approved: contract + consultant worklog + LinkedIn Mail + project data.
- [x] Business-scene rework excluded.
- [x] Voiceover and music remain muted.
- [ ] Exact fictional contract clause, consultant-observed need `X` and LinkedIn Mail copy drafted.
- [ ] Optional ERP vendor naming confirmed if the implementation names one.
- [ ] Copy spreadsheet or source-level replacement list generated from this index.

## 8. Definition-of-done for later source implementation

- [ ] All AWS/Bank/cloud/security strings replaced or intentionally retained.
- [ ] Named ERP/process team matching, People Scores, availability/collisions and CV generation remain functional and are source-explainable.
- [ ] Outreach draft/channel selection is removed from the primary flow.
- [ ] Primary payoff uses EvidencePack, team/People Scores, CVs, ConceptPlan and GroundedDraftSection; ReviewIssues stays secondary.
- [ ] `Deal closed` is replaced with human-owned internal approval/export readiness.
- [ ] Approval is visible at Opportunity activation and ProposalDraft adoption.
- [ ] Provenance/source badges are visible in qualification and drafting.
- [ ] Work transition shows the same previously won project after an explicit time jump.
- [ ] Deep Knowledge/Project Data Intelligence is clearly presented as a core use case.
- [ ] Default ProjectStatus excludes person-specific activity; detail views may drill down.
- [ ] Rail supports macro and expanded modes without treating either as a fixed product boundary.
- [ ] Current runtime/timing handover refreshed again after source edits.
- [ ] Visual review points regenerated from the current timing constants after each timing change.

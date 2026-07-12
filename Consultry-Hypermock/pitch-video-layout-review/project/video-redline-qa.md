# Consultry pitch video — QA and open-decision register

**Purpose:** persistent list of questions, ambiguities, evidence gaps and later verification work  
**Journey model:** [`graph.md`](./graph.md)  
**Scene index:** [`video-redline-index.md`](./video-redline-index.md)  
**Status:** open unless explicitly marked resolved  
**Updated:** 2026-07-12

## How to use this list

Resolve questions in priority order. Each item contains a recommended answer so the owner can approve, revise or reject it without reconstructing the analysis. A decision becomes authoritative only when it is copied into the appropriate product source; this file is not a replacement for the product-definition stack.

## A. Narrative decisions — blocking

### QA-00 — What is the Product Vision scope versus the demo scope?

**Resolution:** The Product Vision is the complete **AI-native Consulting Operating System** across clients/growth, consultants/teams, offers/commercials, projects/delivery, knowledge/methods, finance/impact and the shared governance/integration layers. The demo is one vertical proof path through that OS and must not be worded as the product boundary. `Opportunity-to-Concept` is a starting wedge, not the Whole Product.

**Demo posture:** **Context-centred, multi-role and entry-point-flexible.** Project/Knowledge is infused by consultants and synchronized with Offer/Service/Product Portfolio, CRM/customer data, Contracts, People/Capacity and Finance/Operations. Sales, Team Leads/Team Managers, Staffing, Backoffice, Finance, consultants and management all contribute to and act from the same context.

**Execution posture:** Second Brain/Context Graph → Consultry Engine → job-scoped HarnessPack → virtualized or local Harness → approved Tools/RAG/MCP → Result Verification/Human Approval/Audit. An adapted Hermes fork may be the initial Harness implementation.

**Backoffice posture:** Vision-Core with high automation potential for travel/expenses, business meals, billing/invoice preparation, licenses/subscriptions and vendor/cost workflows; binding actions remain explicitly gated.

**Team Lead posture:** Vision-Core control room for team/staffing/structure plus Delivery and invoice readiness. Intelligent dashboards may detect gaps and propose sourced actions, but person-level recommendations and mutations remain WC-/role-/policy-/approval-gated.

**Personal-development posture:** Vision-Core Capability Planning across skill evidence, weighted demand, contracted work, active pipeline, portfolio and market trends. Recommendations may cover individual learning and role-based hiring/partner needs, but never hidden performance ranking or automatic employment decisions.

**Bestandskunden/Consultant posture:** Consultants are distributed human sensing nodes in active customer projects. Intentional, source-bound observations and contracted existing-client work are primary demand evidence. LinkedIn/XING/job-market/certification sources are secondary reinforcement, especially for existing customers and only later for potential customers; no unbounded scraping or private-profile crawling.

**Canonical demo example:** Tobias learns in the running ERP migration project that the customer wants to accelerate the timeline, records the observation in Consultry, and the source-bound signal is routed to the responsible Hansa account owner for human validation before any customer, staffing or commercial action.

**Status:** RESOLVED 2026-07-11 — Product Vision and demo scope expanded.

### QA-01 — What truth level should the film claim?

**Question:** Is this an H1/current-MVP film, a full product-vision film, or a mixed film?

**Resolution:** This is a **full Consulting-OS Product Vision film** told through one ERP/process proof path. Existing phase boundaries do not remove capabilities from the narrative; H1/H2/H3 describe rollout depth. Final build scope will be re-baselined separately after Product Vision refinement.

**Why it matters:** named staffing, CVs, outbound, contract, project intelligence and billing have different horizons. Without a truth-level lock, copy polishing cannot make the story accurate.

**Owner:** founder/product  
**Status:** RESOLVED 2026-07-10 — vision-first; scope boundaries are non-governing for this redline.

### QA-02 — Approve the replacement example

**Question:** Should the core case become `Hansa Maschinenbau AG — ERP-Migration & Prozessmanagement`?

**Recommended answer:** **Approve as the working case.** It demonstrates business-process consulting, ERP architecture, integration, data migration and change in one coherent boutique engagement.

**Narrower alternative if “ERP migration” is too broad:** `Order-to-Cash Prozessharmonisierung & S/4HANA-Readiness`. This sharpens the first proof slice but makes the film more SAP-specific.

**Owner:** founder/product/marketing  
**Status:** RESOLVED 2026-07-10 — user selected `ERP-Migration & Prozessmanagement` as the main narrative.

### QA-03 — Fictional or real customer?

**Question:** May the film use a fictional named account, or must it use an anonymised label such as `Industrie AG`?

**Resolution:** Use a fictional account. `Hansa Maschinenbau AG` remains the working name and should carry a discreet `Demo` treatment.

**Owner:** marketing/legal  
**Status:** RESOLVED 2026-07-10 — fictional account.

### QA-04 — Approve the stage rail

**Question:** How should the rail evolve from `Signal → Team → Angebot → Projekt → Faktura`?

**Resolution:** The rail may be extended, circular and change abstraction level. Current Product-Vision cycle: `Capture ↔ Understand ↔ Decide ↔ Coordinate ↔ Execute ↔ Reuse ↔ Learn & Steer`. Expanded demo path: `Consulting Context → Observation → Signal & EvidencePack → Decision → ActionCase → Team/Commercials/Delivery → Approval → Active Project → ProblemPattern/SymbiosisLink → ReusableAsset/ReuseApplication → Value/Learning → Consulting Context`.

**Owner:** product/design  
**Status:** REVISED 2026-07-12 — role-neutral Context Graph and circular OS cycle replace both acquisition-first and Consultant-first prescriptions.

### QA-05 — Is the Work scene the same account?

**Question:** After internal proposal approval, should the film show an active project for Hansa, or a different/pre-existing project?

**Resolution:** Keep the same project. The Work scene shows the ERP project **after it was previously won**. Insert an explicit time transition such as `Später · im gewonnenen Projekt` so the film does not imply an instantaneous autonomous conversion.

**Safer alternative:** use a second demo account for Work.

**Owner:** narrative/product  
**Status:** RESOLVED 2026-07-10 — same previously won project, with explicit time jump.

## B. Product-scope decisions — blocking

### QA-06 — Named staffing and people scores

**Question:** Can named consultant matching remain?

**Resolution:** Keep named consultant matching and People Scores in the product-vision narrative. Phase-boundary objections are deferred until Product Vision completion.

**Evidence:** [Business Domain Definition](../../../product-definition/Consultry-Business-Domain-Definition-v1.0.md), [Phase-1 F6](../../../product-definition/Consultry-Phase-1-MVP-Specs-and-Flow-Canvas-v1.0.md).

**Status:** RESOLVED 2026-07-10 — keep named staffing and scores.

### QA-07 — CV generation

**Question:** Should the named CV generation scene remain because it is visually strong?

**Resolution:** Keep the named CV-generation scene and reframe its content for ERP/process-management roles.

**Status:** RESOLVED 2026-07-10 — keep CV generation.

### QA-08 — Outreach email and channel selection

**Question:** Should the outreach-email drafting and “Versand geplant” state remain?

**Recommended answer:** **No in the primary story.** The chosen story is existing-client-led. Replace outreach drafting with EvidencePack review, human validation and a recommended next step. ConceptPlan is only an optional elaboration route.

**Status:** RESOLVED 2026-07-10 — remove outreach email/channel flow from the primary narrative.

### QA-09 — Offer, pricing and contract cards

**Question:** Can `Leistung · Vertrag · Konditionen` remain in the payoff?

**Resolution:** Replace the primary payoff cards with `EvidencePack · human validation · recommended next step · selected Team/TeamShape · CVs`. `ConceptPlan` and `Grounded Draft` remain optional elaboration outputs. `ReviewIssues` may exist as contextual review metadata, but not as a primary payoff card.

**Status:** RESOLVED 2026-07-10 — core replacement accepted; `ReviewIssues` demoted from the payoff.

### QA-10 — “Deal closed”

**Question:** Should the “Deal closed” seal be preserved as a pitch flourish?

**Resolution:** Do not use `Deal closed` in the Product Vision narrative. Use `Intern freigegeben` or `Bereit für internen Export`; the later won project appears only after an explicit human-owned time transition.

**Status:** RESOLVED 2026-07-10 — replace `Deal closed` with human-owned internal approval/export readiness.

### QA-11 — Project Intelligence depth

**Question:** Are Jira/ERP/DMS/Confluence conflict detection and automatically maintained project knowledge intended as current H1 functionality?

**Resolution:** Deep connection of Knowledge, Project Data and related work sources is a **core use case** in the Product Vision. It includes explained cross-project Problem Patterns, Symbiosis Links, human-reviewed Reuse Candidates, governed Assetization, project Reuse Applications and Value Learning—not only search/retrieval. Do not badge this as an H2 aside during vision refinement.

**Evidence:** [Project Intelligence candidate](../../../product-definition/Consultry-Project-Intelligence-Symbiosis-Graph-v1.0.md), [Product Vision horizons](../../../product-definition/Consultry-Product-Vision-v1.0.md).

**Status:** RESOLVED 2026-07-10 — deep Project/Knowledge Intelligence is core.

### QA-12 — Individual activity in ProjectStatus

**Question:** May the dashboard show named activity rows and individual task attribution?

**Resolution:** Do not show individual activity in the default ProjectStatus view. Person-specific detail may exist in an intentionally opened drill-down.

**Status:** RESOLVED 2026-07-10 — no person-specific activity in default view.

### QA-13 — LinkedIn source

**Question:** Does “LinkedIn · Stellenpost” mean live ingestion?

**Resolution:** Use `LinkedIn Mail` as a signal source in the vision narrative.

**Status:** RESOLVED 2026-07-10 — LinkedIn Mail source retained.

## C. Scenario-content questions

### QA-14 — Exact primary signal

**Question:** Which source should open the story?

**Resolution:** Open with two converging signals: **(A)** the contract option/extension clause and **(B)** an internal consultant who logs a concrete customer need from active project work through the Consultry Workspace.

**Needs:** choose realistic but fictional clause wording/date and the exact consultant-observed need (`X`).

**Status:** RESOLVED 2026-07-10 — dual primary signal; exact fictional copy remains implementation detail.

### QA-15 — Demo metrics

**Question:** Which numeric claims may appear in the demo?

**Recommended answer:** Prefer qualitative states until validated. If numbers are needed, mark them `Demo` or `† Annahme`, including site count, change-failure rate, opportunity score, capacity and ROI.

**Status:** RESOLVED 2026-07-10 — use qualitative states or visibly mark demo assumptions.

### QA-16 — Process scope

**Question:** Should the Opportunity cover Order-to-Cash + Procure-to-Pay + master-data migration, or start narrower?

**Recommended answer:** Use all three in the NeedMap, but make `Order-to-Cash` the first migration-wave focus. This gives the story a specific first proof without shrinking the broader ERP and process-management transformation.

**Status:** RESOLVED 2026-07-10 — O2C is the first migration-wave focus; P2P and master data remain in the NeedMap.

### QA-17 — ERP vendor and brand naming

**Question:** Should the film name SAP S/4HANA or remain vendor-neutral as `ERP-Zielplattform`?

**Recommended answer:** Keep the main narrative vendor-neutral until the target platform and brand policy are approved. If SAP S/4HANA is named, use text-only references unless logo use is cleared and do not imply partnership.

**Status:** RESOLVED 2026-07-10 — vendor-neutral main narrative; named ERP vendor only after approval.

### QA-18 — External method source

**Question:** Which public methodology source should ground the concept?

**Resolution:** Use approved, trustworthy external sources and show that the proposed approach is also influenced by methodologies already applied internally by the consultancy. Preserve provenance between external sources, internal method assets and model synthesis.

**Status:** RESOLVED 2026-07-10 — trustworthy sources plus internal applied methodologies.

### QA-19 — Prior reference asset

**Question:** Can a real internal ERP-migration or process-management reference be shown?

**Resolution:** Use a fictional prior ERP/process-management reference.

**Status:** RESOLVED 2026-07-10 — fictional reference.

## D. Business-case and evidence questions

### QA-20 — Finance chart numbers

**Question:** Are the current value, pipeline and Consultry-cost curves still correct under the current €50 pilot / €69+ post-PMF pricing definition?

**Resolution:** Do not change visible figures in the documentation-first pass. The target economic model is now defined as `ReuseValueCase`: baseline versus actual internal effort, delivery time, quality, revenue, cost and margin with explicit Contract/Pricing model. T&M records actual worked/billed effort; fixed-price/outcome/accelerated-delivery value is separate.

**Evidence:** [MVP PRD pricing](../../../product-definition/Consultry-MVP-PRD-v1.0.md), [Measurement Spec](../../../product-definition/Consultry-MVP-Measurement-Spec-v1.0.md).

**Status:** REVISED 2026-07-12 — target data contract documented; exact fictional assumptions and visible scene remain pending.

### QA-21 — ROI versus proof metrics

**Question:** Should the business-case scene show only financial ROI?

**Resolution:** The future business scene should not show only financial ROI. It should trace Customer/Project/Delivery/Quality/Knowledge/Capability and economic effects back to the exact `ReusableAsset`/`ReuseApplication` and assumptions. Visible rework remains paused.

**Status:** REVISED 2026-07-12 — documentation target accepted; visible implementation paused.

### QA-22 — Market-source footnotes

**Question:** Which BDU/market citations will be visible in the film?

**Resolution:** Ignore business-scene reworks in the current pass.

**Status:** DEFERRED 2026-07-10 — preserve current business scene.

## E. Runtime and production questions

### QA-23 — Current runtime authority

**Finding:** current `pitch-scene.jsx` evaluates to **118.16 s**. `HANDOVER.md` contains older values including ~102.1 s and other historical durations.

**Question:** Should the redline preserve 118.16 s, or target a shorter cut?

**Resolution:** Preserve the current calculated length for now. Timing markers remain derived from current source and may move with later edits.

**Status:** RESOLVED 2026-07-10 — preserve current length for now.

### QA-24 — Voiceover and music

**Finding:** `VO_MUTED = true` and `MUSIC_MUTED = true` in current source, while handover language still discusses voiceover locking.

**Question:** Is the next version silent, music-only, or narrated?

**Resolution:** Voiceover remains muted. Music remains muted.

**Status:** RESOLVED 2026-07-10 — mute voiceover and music.

### QA-25 — Current preview framework

**Finding:** this export is a Claude Design `.dc.html`/React composition, not a standard HyperFrames `index.html` project.

**Question:** Will implementation remain in the current `.dc.html` project or be ported to a native HyperFrames project?

**Recommended answer:** Keep the current project for the redline implementation unless a port is explicitly commissioned. Continue local preview on port 4173.

**Status:** RESOLVED 2026-07-10 — keep the current `.dc.html`/React project and port-4173 preview workflow.

### QA-26 — Handover refresh

**Question:** When should `HANDOVER.md` be rewritten?

**Resolution:** Refresh `HANDOVER.md` now with the current narrative decisions, runtime/mute state and dynamic timing guidance; refresh again after source implementation.

**Status:** RESOLVED 2026-07-10 — handover refresh authorised.

### QA-27 — Scene screenshot verification

**Question:** Which hero frames require sign-off?

**Resolution:** Do not use a fixed timestamp checklist as a hard boundary. Track scene markers dynamically from the current source constants and regenerate verification points after each timing change.

**Status:** RESOLVED 2026-07-10 — dynamic scene-marker registry, no permanent hard-set timestamps.

## F. Docs-grill findings

### GRILL-01 — Current film hides the canonical proof surface

**Observation:** the longest interaction is outreach/CV generation, while the canonical H1 proof is a source-grounded concept/proposal section.

**Superseded proposal:** the dominant interaction sequence is now EvidencePack → human validation → recommended next step. ConceptPlan/GroundedDraftSection are optional and ReviewIssues stays supporting metadata.

**Status:** DEFERRED/NON-GOVERNING 2026-07-10 — owner prioritised vision completeness over this scope-oriented grill. Outreach is still removed via QA-08; CV generation remains via QA-07.

### GRILL-02 — Named staffing versus prior phase boundary

**Observation:** names, photos, scores, availability, collisions and CVs exceed the previous H1 anonymous-TeamShape boundary.

**Owner decision:** keep named staffing, People Scores and CVs in the Product Vision. Final phase boundaries will be re-baselined later.

**Status:** SUPERSEDED 2026-07-10 by QA-01/06/07.

### GRILL-03 — Current film compresses approval and customer agency

**Observation:** `Opportunity gewinnen`, `Versand geplant` and `Deal closed` create an autonomous-looking chain.

**Decision proposed:** two explicit human gates—Opportunity activation and ProposalDraft adoption—and no customer outcome claim.

**Status:** DEFERRED AS A GRILL 2026-07-10; explicit narrative decisions still apply through QA-08 and QA-10.

### GRILL-04 — Current film conflates Win and Work lifecycles

**Observation:** the new opportunity seems to become an active project immediately.

**Owner decision:** it is the same previously won ERP project. Insert a visible time jump such as `Später · im gewonnenen Projekt`.

**Status:** RESOLVED 2026-07-10 by QA-05.

### GRILL-05 — Current rail implies H3 billing

**Observation:** `Faktura` is a top-level stage although the shown scene is an ROI chart and billing is H3.

**Decision proposed:** rename it `Wirkung`.

**Status:** RESOLVED 2026-07-10 — rail rename approved, but business-scene content remains untouched.

### GRILL-06 — Deep Project and Knowledge Intelligence

**Observation:** deep references across Knowledge, Project Data, Jira/ERP/DMS/Confluence and project work were previously treated as a later strategic candidate.

**Owner decision:** keep deep references and cross-source intelligence in scope as a **core Product Vision use case**. Do not demote it to a side preview during vision refinement.

**Status:** RESOLVED 2026-07-10 — keep deep reference in scope.

### GRILL-07 — Proposed scenario still needs evidence discipline

**Observation:** the replacement is more domain-fit, but its account, clause, site count and metrics are invented.

**Decision proposed:** persistent `Demo` treatment until approved real data exists.

**Status:** DEFERRED AS A GRILL 2026-07-10; the concrete decisions are resolved via QA-03/14/15/19.

## G. Project Symbiosis / Assetization decisions

### QA-28 — Is similarity detection enough?

**Question:** Is the capability complete when Consultry shows that two projects solve similar problems?

**Resolution:** No. Detection must continue through `ProblemPattern → SymbiosisLink → human-reviewed ReuseCandidate → governed ReusableAsset → ReuseApplication`; repeated proven applications may create a `ServiceBundleCandidate` and `ReuseValueCase`.

**Status:** RESOLVED 2026-07-12 — full compounding loop is Product-Vision-Core.

### QA-29 — May raw customer artefacts cross accounts?

**Question:** Can a template, mapping, ticket, decision or document from Customer X be shown or used directly in Customer Y?

**Resolution:** No by default. Cross-account reuse requires a new abstracted/de-identified `ReusableAsset` with Source Lineage, `RightsState`, `ReuseScope`, Contract/IP/Confidentiality/Usage-Rights review, owner, version, Approval and Audit. Account-/Project-confidential raw content remains isolated.

**Status:** RESOLVED 2026-07-12 — customer boundary and asset distinction are mandatory.

### QA-30 — Is Symbiosis a new primary navigation module?

**Question:** Should the demo/app add a permanent `Symbiosis` module to the rail?

**Resolution:** No. Symbiosis is a capability and object flow projected into `My Work`, Project 360, Practice/Team Lead Control Room, Knowledge/Assetization and Offer/Value workspaces. The narrative rail may include `Reuse`, but workflow frames are not app navigation modules.

**Status:** RESOLVED 2026-07-12 — object/workspace projection, not module maze.

### QA-31 — How is the economic effect represented?

**Question:** May saved project hours simply be treated as additional billable hours or margin?

**Resolution:** No. T&M uses actual worked/billed effort. Fixed-price, outcome-based and accelerated-delivery offerings may capture reuse value only with an explicit Contract/Pricing basis. `ReuseValueCase` must show baseline, actuals, assumptions, delivery/quality outcome, revenue, cost and margin separately.

**Status:** RESOLVED 2026-07-12 — contract-aware economics; no fictitious T&M billing.

### QA-32 — What exact fictional demonstration is canonical?

**Question:** Which project pair and asset should the presentation use?

**Recommended working example:** Hansa `ERP-Migration · Welle 1` plus a second fictional, approved SAP-S/4HANA migration context share a data-mapping/cutover/readiness pattern. Candidate asset: `S/4HANA Migration Readiness & Cutover Blueprint` including Blueprint, Quality Gate and Template projections.

**Status:** OPEN — exact second account/project label, source artefacts, overlap/difference copy and illustrative ValueCase assumptions require approval before visible implementation.

### QA-33 — May visible HyperFrames work start now?

**Resolution:** No. Documentation is being updated first. Do not modify visible HyperFrames scenes or run HyperFrames validation until the user resumes that step.

**Status:** RESOLVED 2026-07-12 — documentation-first hold active.

## H. Resolution log

Use this table when decisions are made. Propagate locked decisions to the file that owns them; do not leave them only here.

| Date | ID | Resolution | Authority updated | Implemented in video? |
|---|---|---|---|---|
| 2026-07-12 | QA-28–33 | Project Symbiosis continues through governed Assetization, Reuse, Service Productization and contract-aware Value Learning; no raw Cross-Customer reuse; visible HyperFrames work is paused. | Product Vision v2.7 + Project Intelligence v1.1 + UX Operating Model + Alignment Control Plane v1.1 + presentation/redline docs | Not implemented; documentation-first hold active |
| 2026-07-12 | QA-Existing-Client-Sensing | Bestandskunden/Consultant project sensing is primary; external LinkedIn/XING/job-market/certification evidence is secondary and governed. | Product Vision v2.7 + GTM Decisions + Harness Refinement v1.1 + Context anchor + redline docs | Current Hansa demo aligns; capability-market visualization pending |
| 2026-07-12 | QA-People-Development | Personal Development/Capability Planning connects skill supply with opportunity, contract, pipeline, portfolio and market demand; recommends learning, Academy and hiring/partner profiles. | Product Vision v2.5 + Harness Refinement v1.1 + Context anchor + redline docs | Capability-planning visualization pending |
| 2026-07-12 | QA-Team-Lead | Team Lead/Team Management Control Room added for staffing/structure dashboards, Delivery/Faktura risk detection and gap-resolution proposals. | Product Vision v2.4 + Harness Refinement v1.1 + Context anchor + redline docs | Team Lead dashboard visualization pending |
| 2026-07-12 | QA-00/Architecture | Context Graph feeds Consultry Engine; virtualized/local Harnesses use approved Tools/RAG/MCP. Backoffice Automation elevated to Vision-Core. | Product Vision v2.3 + Harness Refinement v1.1 + Context anchor + redline docs | Architecture/backoffice visualization pending |
| 2026-07-12 | QA-00/04 | Shared Consulting Context Graph is the centre; roles and entry points are plural. Portfolio, CRM, contracts, people/capacity and finance/operations inform Project/Knowledge. | Product Vision v2.2 + Context anchor + redline docs | Scope wording updated; cross-role visualization pending |
| 2026-07-11 | QA-00/01/04 | Whole Product = Consulting OS; initial Consultant-first vertical proof proposal; horizons/wedge/demo are not product boundaries. | Product Vision v2.1 + Alignment Control Plane + Context anchor + redline docs | Superseded by 12.07 role-neutral Context Graph decision |
| 2026-07-10 | QA-01 | Product Vision first; existing phase boundaries non-governing for this redline. | Context anchor + redline docs | Source implementation pending |
| 2026-07-10 | QA-02 | Main video narrative changed to `ERP-Migration & Prozessmanagement`. | Video redline docs (`graph.md`, `video-redline-index.md`, this QA file) | Documentation complete; source implementation pending |
| 2026-07-10 | QA-03–05 | Fictional Hansa account; extensible macro/expanded rail; active Work scene is the same previously won project after a time jump. | Context anchor + redline docs | Source implementation pending |
| 2026-07-10 | QA-06–07 | Keep named staffing, People Scores, availability/collisions and CV generation. | Context anchor + redline docs | Source implementation pending |
| 2026-07-10 | QA-08–10 | Remove outreach; payoff uses evidence/team/CVs/concept/draft; ReviewIssues secondary; replace Deal closed with internal approval/export. | Context anchor + redline docs | Source implementation pending |
| 2026-07-10 | QA-11–12 | Deep Project/Knowledge Intelligence is core; no person activity in default ProjectStatus view. | Context anchor + redline docs | Source implementation pending |
| 2026-07-10 | QA-13–14 | Keep LinkedIn Mail; primary signal combines contract trigger with consultant-logged need from project work. | Context anchor + redline docs | Source implementation pending |
| 2026-07-10 | QA-15–19 | Qualitative/demo metrics; O2C first wave; vendor-neutral ERP; trustworthy external sources + internal methods; fictional reference. | Redline docs | Source implementation pending |
| 2026-07-12 | QA-20–22 | Generic ROI target superseded by traceable `ReuseValueCase`; exact figures and visible implementation remain deferred. | Project Intelligence v1.1 + redline docs + handover | Not implemented; documentation target only |
| 2026-07-10 | QA-23–25 | Preserve current length; mute VO/music; keep `.dc.html` project and port-4173 preview. | Redline docs + handover | Existing source already muted/current format |
| 2026-07-10 | QA-26–27 | Refresh handover; derive verification markers dynamically instead of using a permanent timestamp set. | `HANDOVER.md` + redline docs | Handover refreshed; dynamic checks apply during implementation |
| 2026-07-10 | GRILL-06 | Keep deep references and cross-source Project/Knowledge Intelligence in scope as a core use case. | Context anchor + redline docs | Source implementation pending |

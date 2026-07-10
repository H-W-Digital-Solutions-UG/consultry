# Consultry pitch video — QA and open-decision register

**Purpose:** persistent list of questions, ambiguities, evidence gaps and later verification work  
**Journey model:** [`graph.md`](./graph.md)  
**Scene index:** [`video-redline-index.md`](./video-redline-index.md)  
**Status:** open unless explicitly marked resolved  
**Updated:** 2026-07-10

## How to use this list

Resolve questions in priority order. Each item contains a recommended answer so the owner can approve, revise or reject it without reconstructing the analysis. A decision becomes authoritative only when it is copied into the appropriate product source; this file is not a replacement for the product-definition stack.

## A. Narrative decisions — blocking

### QA-01 — What truth level should the film claim?

**Question:** Is this an H1/current-MVP film, a full product-vision film, or a mixed film?

**Resolution:** This is a **product-vision refinement film**. Existing phase boundaries do not remove capabilities from the narrative. Final H1/H2/H3 scope will be re-baselined only after the Product Vision is complete.

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

**Resolution:** The rail may be extended and may change abstraction level. Recommended macro mode: `Gewinnen → Arbeiten → Wirkung`. Recommended expanded mode: `Signal → Opportunity → Kontext → Team → Konzept → Freigabe → Projekt → Wirkung`.

**Owner:** product/design  
**Status:** REVISED 2026-07-10 — extensibility approved; macro/expanded rail documented.

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

**Recommended answer:** **No in H1.** The chosen story is existing-client-led and the canonical proof is internal concept/proposal production. Replace with EvidencePack/NeedMap/draft editing. If retained as H2, use `Entwurf · nicht versendet` plus explicit human approval.

**Status:** RESOLVED 2026-07-10 — remove outreach email/channel flow from the primary narrative.

### QA-09 — Offer, pricing and contract cards

**Question:** Can `Leistung · Vertrag · Konditionen` remain in the payoff?

**Resolution:** Replace the primary payoff cards with `EvidencePack · Team/TeamShape · CVs · ConceptPlan · Grounded Draft`. `ReviewIssues` may exist as contextual review metadata, but not as a primary payoff card. This is a narrative choice, not a phase-boundary decision.

**Status:** RESOLVED 2026-07-10 — core replacement accepted; `ReviewIssues` demoted from the payoff.

### QA-10 — “Deal closed”

**Question:** Should the “Deal closed” seal be preserved as a pitch flourish?

**Resolution:** Do not use `Deal closed` in the Product Vision narrative. Use `Intern freigegeben` or `Bereit für internen Export`; the later won project appears only after an explicit human-owned time transition.

**Status:** RESOLVED 2026-07-10 — replace `Deal closed` with human-owned internal approval/export readiness.

### QA-11 — Project Intelligence depth

**Question:** Are Jira/ERP/DMS/Confluence conflict detection and automatically maintained project knowledge intended as current H1 functionality?

**Resolution:** Deep connection of Knowledge, Project Data and related work sources is a **core use case** in the Product Vision. Keep deep references and cross-source intelligence in scope; do not badge them as an H2 aside during vision refinement.

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

**Resolution:** Skip this question. Do not rework the finance/business-case scene in the current pass.

**Evidence:** [MVP PRD pricing](../../../product-definition/Consultry-MVP-PRD-v1.0.md), [Measurement Spec](../../../product-definition/Consultry-MVP-Measurement-Spec-v1.0.md).

**Status:** SKIPPED 2026-07-10 — business-case rework explicitly excluded.

### QA-21 — ROI versus proof metrics

**Question:** Should the business-case scene show only financial ROI?

**Resolution:** Ignore business-scene reworks in the current pass.

**Status:** DEFERRED 2026-07-10 — preserve current business scene.

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

**Decision proposed:** make EvidencePack, NeedMap, ConceptPlan, GroundedDraftSection and ReviewIssues the dominant interaction sequence.

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

## G. Resolution log

Use this table when decisions are made. Propagate locked decisions to the file that owns them; do not leave them only here.

| Date | ID | Resolution | Authority updated | Implemented in video? |
|---|---|---|---|---|
| 2026-07-10 | QA-01 | Product Vision first; existing phase boundaries non-governing for this redline. | Context anchor + redline docs | Source implementation pending |
| 2026-07-10 | QA-02 | Main video narrative changed to `ERP-Migration & Prozessmanagement`. | Video redline docs (`graph.md`, `video-redline-index.md`, this QA file) | Documentation complete; source implementation pending |
| 2026-07-10 | QA-03–05 | Fictional Hansa account; extensible macro/expanded rail; active Work scene is the same previously won project after a time jump. | Context anchor + redline docs | Source implementation pending |
| 2026-07-10 | QA-06–07 | Keep named staffing, People Scores, availability/collisions and CV generation. | Context anchor + redline docs | Source implementation pending |
| 2026-07-10 | QA-08–10 | Remove outreach; payoff uses evidence/team/CVs/concept/draft; ReviewIssues secondary; replace Deal closed with internal approval/export. | Context anchor + redline docs | Source implementation pending |
| 2026-07-10 | QA-11–12 | Deep Project/Knowledge Intelligence is core; no person activity in default ProjectStatus view. | Context anchor + redline docs | Source implementation pending |
| 2026-07-10 | QA-13–14 | Keep LinkedIn Mail; primary signal combines contract trigger with consultant-logged need from project work. | Context anchor + redline docs | Source implementation pending |
| 2026-07-10 | QA-15–19 | Qualitative/demo metrics; O2C first wave; vendor-neutral ERP; trustworthy external sources + internal methods; fictional reference. | Redline docs | Source implementation pending |
| 2026-07-10 | QA-20–22 | Skip/defer all business-scene content rework. | Redline docs + handover | Preserved |
| 2026-07-10 | QA-23–25 | Preserve current length; mute VO/music; keep `.dc.html` project and port-4173 preview. | Redline docs + handover | Existing source already muted/current format |
| 2026-07-10 | QA-26–27 | Refresh handover; derive verification markers dynamically instead of using a permanent timestamp set. | `HANDOVER.md` + redline docs | Handover refreshed; dynamic checks apply during implementation |
| 2026-07-10 | GRILL-06 | Keep deep references and cross-source Project/Knowledge Intelligence in scope as a core use case. | Context anchor + redline docs | Source implementation pending |

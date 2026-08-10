# Wayfinder Audit & Next Sequence

**Status:** Research recommendation; ticket refactor may organize questions, but never ratifies their Product answers.

> **Superseded route note — 03.08.2026:** Die nachfolgende ursprüngliche Contract-first-Sequenz bleibt als Audit-Herkunft erhalten, ist aber nicht mehr die aktive Wayfinder-Route. Nach zusätzlicher externer Revalidierung und HITL-Entscheidung gilt [Ratify the evidence-gated Product-to-Prototype route](../../wayfinder/consultry-product-platform-baseline/tickets/ratify-the-evidence-gated-product-to-prototype-route.md): `Whole-Consultancy Coverage -> drei Representative Business Threads <-> Cross-Cutting Contract Convergence -> Definition-complete Validation Slice -> Technical Prototype`. Die aktuelle Ticket-DAG in der Map ist entsprechend neu verdrahtet.

**Audited map:** [Ratify the Consultry Product and Business-Domain Baseline](../../wayfinder/consultry-product-platform-baseline/map.md)

## 1. Audit Verdict

Der deklarierte Blocker-Graph ist mechanisch gültig: alle Titel lösen auf, es gibt keinen YAML-Cycle und keine formale Order Inversion. Fachlich besitzt die Map jedoch drei strukturelle Probleme:

1. **Tickets sind nicht one-decision clean.** Actors, Operating Loop, Core, Opportunity-to-Project, Daily/Project Work, Reuse, Human-AI, Implementation, Acceptance und Horizons bündeln mehrere unabhängig ratifizierbare Fragen.
2. **Der deklarierte DAG enthält semantische Zyklen und zu späte Inputs.** Coverage verspricht Acceptance/Horizon, obwohl Acceptance von Coverage und Horizon wiederum von Acceptance abhängt. Implementation/Variation ist hinter Coverage, obwohl es Journeys, Domain Objects und Requirements erzeugt.
3. **Product- und Technical Decisions sind im Index gemischt.** Physische Graph-/Release-/Service-/Bitemporal-Persistence-Entscheidungen gehören nach dem Product Handoff in die Technical Map. In der aktuellen Map bleiben nur die business-relevanten semantischen Grenzen als Constraints.

Die neue Research-Synthese bestätigt als Route:

`Actor/Responsibility/Authority → Operating Grammar/Handoff → Human-AI Responsibility → Consultry Core → Invariant/Variation → Journey Portfolio/Lifecycles → Domain Canon → Requirements → Acceptance/Learning → Validation/MVP/Horizons → Reconciliation/Handoff`

## 2. Was bereits entschieden ist und nicht neu gegrillt wird

- AI-native Consulting Operating System; Wedge/Chat/Harness sind keine Product-Grenze.
- Partner-led Specialist Boutique und Growing Specialist Consultancy first-class; Size ist nur Indikator.
- Target Consultancy, Consultry User und Consultancy Client bleiben getrennt.
- Target-Consultancy Outcome, Expert Knowledge-to-Action, Blind-Spot Coverage, Work Effectiveness & Efficiency und Synergy & Reuse.
- Archetype-specific Entry Value, gemeinsamer Retention-/Compounding-Rhythmus und responsibility-based Buyer/Champion.
- gemeinsamer variabler Core Value Proof; Product Effect bleibt unvalidiert.
- objekt-/arbeitszentrierte App als Default, optionaler Harness ohne zusätzliche Authority.
- `ClientContract`, `ReusableAsset`, `ProjectStatusSnapshot`/`ProjectStatusAssessment` und Core-Skill-vs-Capability-Evidence-Begriffsgrenzen.
- Opportunity-to-Project als vollständiger Scope Path; der genaue Lifecycle ist offen.
- Product-before-Technology Gate.

## 3. Current DAG Problems

### 3.1 Semantic cycle in Coverage

Current:

`Domain Canon → Coverage (inkl. Acceptance/Horizon) → Acceptance → Horizons`

Required:

`Domain Canon → Coverage Skeleton → Journey/Product Acceptance → Validation/Horizons → Final Trace Completion`

Der erste Pass deckt Problem, Actor, Journey, Approach, Capability, Behavior, Quality und Business Rule ab. Erst der zweite Pass ergänzt ratifizierte Acceptance Evidence und Horizon.

### 3.2 Implementation is too late

Current:

`Domain Canon + Coverage → Implementation/Configuration → Acceptance`

Required:

- `Core → Invariant/Variation Principles → Journey Portfolio`
- `Journey Portfolio + Variation → First-Value Implementation Journey + Configuration-Change Authority`
- diese Journeys blockieren Domain Canon und Coverage.

### 3.3 Human-AI contract and prototype are conflated

Required split:

- früh: fachlicher `Human-AI Responsibility & Meaningful Oversight Contract`, nach Actors/Authority und Operating Grammar;
- später: low-fidelity Prototype eines repräsentativen, risk-/handoff-reichen Cases gegen diesen Contract.

### 3.4 Existing-client sensing is overblocked

Delivery-, Knowledge-, People- oder Hold/Reject-Branches benötigen nicht den vollständigen Commercial Lifecycle. Commercial Sensing Branches dürfen vom relevanten Commercial-State-Contract abhängen; die gesamte Sensing Journey sollte nicht bis Project Activation blockiert bleiben.

### 3.5 Business-domain canon should synthesize, not grill broad fog

Nach atomic actor/state/journey decisions ist der Domain Canon primär AFK-Synthese. Jede verbleibende echte Identity-/Lifecycle-/Invariant-Entscheidung wird als eigene HITL-Frage zurückgespielt.

## 4. Recommended Atomic Ticket Structure

Die vorhandenen großen Dateien können als Umbrella/Index bestehen bleiben. Die Live-Arbeit folgt atomaren Decision Tickets beziehungsweise klar markierten One-Decision Steps.

**Applied with this audit:** Actor/Responsibility/Role-Compression/Authority/Persona sowie Operating Grammar/Handoff/Human-AI/Core/Record-Authority/Knowledge-to-Action/Module/Variation wurden an der unmittelbaren Frontier bereits als getrennte Tickets verdrahtet. Die späteren Commercial-, Journey-, Acceptance- und Horizon-Splits bleiben hier als präziser Refactor-Plan, bis ihre Upstream Decisions geschlossen sind; so bleibt der Tracker navigierbar und die vollständige Fragenbank trotzdem verlustfrei verfügbar.

### A. Actor/Authority frontier

1. **Define the Product Actor Ontology** — Organization, Person, ResponsibilityRole, CaseParticipation, AuthorityGrant, Product Relationship Overlay.
2. **Define Canonical Responsibility and Job Families** — stabile Responsibilities unabhängig von Titeln.
3. **Map Role Compression and Distribution by Archetype** — Boutique vs Growing, inklusive Context Switch derselben Person.
4. **Define Case Participation, Authority, Delegation and Separation of Duties** — Owner/Contributor/Reviewer/Approver plus exceptions.
5. **Reconcile the Pre-pivot Personas** — AFK disposition after the four decisions.

### B. Operating/Core frontier

6. **Ratify the Whole-Product Operating Grammar** — multiple triggers, framing, decision/accepted work, effect, outcome, learning.
7. **Define Handoff, Commitment, Recovery and Outcome Semantics** — state contract and alternate paths.
8. **Define the Human-AI Responsibility and Meaningful-Oversight Contract** — allowed AI roles, independent judgment, abstain/override/stop.
9. **Ratify Consultry Core Continuity Obligations** — the seven Core obligations and non-synonyms.
10. **Define Native/Federated Record Authority Principles** — source, projection, enrichment, effect target, reconciliation.
11. **Define Knowledge-to-Action and Blind-Spot Finding Contracts** — direct expert/document route and human disposition.
12. **Define the Product Invariant and Tenant-Variation Envelope** — before journey variants and implementation.

### C. Journey/lifecycle frontier

13. **Define the Canonical Journey Portfolio and Specification Depth**.
14. **Define Commercial Demand and Opportunity Qualification**.
15. **Define Concept/Proposal Identity, Versions and Internal/External States**.
16. **Define External Commitment and ClientContract/SOW Semantics**.
17. **Define Project Readiness, Activation and First Delivery Handoff**.
18. **Specify Existing-Client Project Sensing** — branch at human disposition.
19. **Specify Tender-to-Review-Ready Concept** — actor experience only, not the whole commercial lifecycle.
20. **Specify Personal Daily Attention and Capture**.
21. **Define the Active Project/Change/Closure Lifecycle and Delivery Journey**.
22. **Define Knowledge/Source Stewardship and Expert-Access Journey**.
23. **Define Reuse Candidate and ReusableAsset Release Journey**.
24. **Define Reuse Application and Service Productization Journey**.
25. **Specify First-Value Implementation/Onboarding**.
26. **Define Configuration-Change Authority and Experience**.
27. **Resolve remaining Journey Families** — separate tickets for People/Staffing, Operations/Finance, Management/Portfolio and External Client as required.
28. **Prototype one representative Cross-Role Human-AI Case**.

### D. Synthesis/acceptance frontier

29. **Synthesize the Business-Domain and Lifecycle Canon** — AFK with HITL escalation only for remaining decisions.
30. **Derive the Product Coverage Skeleton** — AFK, without final Acceptance/Horizon columns.
31. **Ratify Journey and Product Acceptance Contracts**.
32. **Ratify Adoption, Retention, Learning and Stop Criteria**.
33. **Define the Validation Program and Reference Proofs**.
34. **Define the Smallest Complete MVP Business Slice and Product Horizons**.
35. **Complete the Final Traceability Matrix** — AFK.
36. **Reconcile Product, UX, Market, Pitch and Video Sources** — includes Claim Truth Contract.
37. **Approve the Product/Business-Domain Handoff**.

## 5. Exact Next Grilling Sequence

### Next live decision: ACT-010/ACT-020

**Question:** Welche getrennten fachlichen Actor-Konzepte soll Consultry kanonisch unterscheiden?

**Recommendation:**

1. `Organization`/Boundary — Target Consultancy, Client Organization, external organization;
2. `Person` — one human identity;
3. `ResponsibilityRole` — durable responsibility independent of title;
4. `CaseParticipation` — Owner, Contributor, Reviewer, Approver, Advisor, Observer, External Participant in a concrete Case;
5. `AuthorityGrant` — action/scope/purpose/risk/time bounded mandate;
6. Product Overlays — Economic Buyer, Adoption Champion, Consultry User, Tenant Admin, Veto Actor.

**Edge Case:** Ein Boutique Managing Partner ist in demselben Proposal Author, Commercial Owner und Approver. Die Person bleibt eine; ihre Participations bleiben getrennt. Eine tatsächliche SoD-Policy entscheidet, ob Self-Approval zulässig ist.

**Why first:** Ohne diese Trennung bleiben „Role“, „Owner“, „Approver“, AI Actor und External Client in jeder folgenden Journey mehrdeutig.

### Danach

1. Responsibility Families;
2. Boutique Role Compression;
3. Growing Responsibility Distribution;
4. Decision ownership/participation;
5. delegation/SoD/exceptions;
6. Operating Grammar;
7. Handoff/Commitment/Outcome;
8. Human-AI Responsibility;
9. Core Continuity Obligations.

## 6. Research Obligations Attached to the Map

Diese werden nicht durch interne Grilling-Antworten geschlossen:

- Critical-Incident Interviews in beiden Archetypen, einschließlich Low-Pain/Reject-Fällen.
- Artifact Tracing durch Opportunity/Proposal/Commitment/Handoff/Project/Outcome.
- Vergleich `current process` vs `generic AI chat` vs `structured Consultry` auf identischen realen Tasks.
- seeded Blind-Spot Benchmark und live Shadow Mode mit False-Positive-/Review-Cost.
- Expert-Load-Messung der Knowledge Bridge.
- Receiver-side Handoff Quality statt Sender Speed.
- actual Reuse Applications statt Asset Counts.
- simple/single-agent/multi-agent Topology Comparison mit repeated reliability.
- Model-Bridge Buyer/WTP Test getrennt von technischer Routing-Effizienz.
- Boutique Implementation Economics inklusive Services/Admin Burden.

## 7. Not Yet Specified Cleanup

Die derzeitigen Fog-Items sind live oder resolved und sollten nicht im Fog verbleiben:

- Journey Family Depth ist ein live ticketed Decision Area.
- Evidence Needs sind im geschlossenen Evidence Register und in Research Obligations präzisiert.
- Horizon Depth ist ein live ticketed Decision Area.

Nach dieser Research-Runde sollte `Not yet specified` nur noch echte, noch nicht präzise Fog enthalten. Aktuell ist keine zusätzliche unscharfe Fog notwendig; fehlende Bereiche sind bereits als atomare Questions formulierbar.

## 8. Technical Handoff Boundary

In dieser Product Map bleiben als Business Requirements:

- ausführbare AI capability ist semantisch getrennt von Human/Firm Capability Evidence;
- Execution, Validation und Authority beantworten unterschiedliche Business Questions;
- Models/Providers dürfen keine Business Authority erzeugen;
- App und Harness verwenden dieselben Cases/Authority/Validation/Outcome Contracts.

In die spätere Technical Map gehören:

- physische Graph-/Store-/Schema-/Release-Closure-Struktur;
- bitemporale Persistenzentscheidung;
- Runtime-/Provider-/Routing-Implementierung;
- Agent Framework, Graph Orchestrator, Loop Algorithms und technical eval harness;
- konkretes Model Bridge/Harness Service Design;
- ADRs, Epics und Implementation Issues.

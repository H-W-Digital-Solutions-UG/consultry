# Deep-Grill Question Bank

**Status:** vollständiger Research-Backlog, nicht ratifiziert

**Live-Regel:** In der HITL-Session wird genau eine unblocked Frage gestellt.

**Antwortformat pro Live-Frage:** Recommendation → Begründung → konkreter Edge Case → Downstream-Auswirkung → User Decision.

## 1. Sequencing-Regeln

- Geschlossene Decisions werden nicht erneut gefragt. Eine Frage darf nur den noch offenen Delta schärfen.
- `Depends` bezeichnet fachliche Decisions, nicht technische Tasks.
- Empfehlungen sind begründete Defaults; der User ratifiziert, revidiert oder lehnt ab.
- Fragen mit `Discovery` oder `Experiment` als Decision Owner werden nicht intern beantwortet. HITL entscheidet nur, ob die Hypothese und der Evidenzvertrag so gelten sollen.
- Große bestehende Tickets bleiben Umbrella-Tickets; die IDs unten bilden die One-Decision-Grill-Schritte.

## 2. Empfohlene Challenge-Reihenfolge

| Rang | Challenge | Warum jetzt | Nächster Output |
|---:|---|---|---|
| 1 | Actor Ontology | Jede Journey, Authority und Human-AI-Grenze braucht stabile Beteiligte. | Person/Role/Participation/Authority Contract |
| 2 | Responsibility & Role Compression | Die zwei Archetypen unterscheiden sich primär in Responsibility-Verteilung und Handoffs. | Responsibility Families + Archetype Mapping |
| 3 | Decision-/Authority-Semantik | Review, Approval, Acceptance und Execution sind aktuell überladen. | Decision Rights + SoD + Delegation |
| 4 | Operating Grammar & Handoff | Verbindet alle Whole-Product-Domänen, ohne Sales Funnel zu erzwingen. | Trigger/Frame/Decision/Work/Outcome + Handoff Contract |
| 5 | Human-AI Responsibility | Muss vor AI-/Agent-Workflow- und UI-Defaults stehen. | Meaningful Oversight Contract |
| 6 | Consultry Core | Erst nach Actor/Loop kann der OS Backbone invariant definiert werden. | Continuity Obligations + Record Authority Principles |
| 7 | Variation Envelope | Der Core bestimmt, was bei hunderten Implementierungen nicht zerfallen darf. | Invariant/Variable/Extension Boundary |
| 8 | Journey Portfolio | Breadth-first, bevor Detailjourneys oder Features priorisiert werden. | Journey Families + Specification Depth |
| 9 | Lifecycles & Detail Journeys | Commercial, Project, Knowledge, Client und Operations werden atomar spezifiziert. | Canonical Journey Contracts |
| 10 | Domain Canon | Synthese aus ratifizierten Flows, nicht Quelle neuer Product Annahmen. | Context Map, Ubiquitous Language, UML/ER Concept |
| 11 | Capability/Requirement Coverage | Erst jetzt lassen sich Features ableiten und Orphans entfernen. | Problem-to-Requirement Skeleton |
| 12 | Acceptance & Learning | Prüft Nutzen, Verantwortung und Net Work gegen reale Workarounds. | Journey/Product Evidence Contracts |
| 13 | Validation Program & Horizons | Ein oder mehrere Proofs werden zum fachlichen MVP Slice geordnet. | Validation/MVP/Expansion/Platform Allocation |
| 14 | Canon/Pitch Handoff | Erst dann werden Sources, Pitch und Technical Map reconciled. | approved Product/Business-Domain Baseline |

## 3. Actors, Responsibilities und Role Compression

### Recommended stance

Vier Kernkonzepte trennen: `Person`, `ResponsibilityRole`, `CaseParticipation` und `AuthorityGrant`. Buyer/Champion/User/Admin sind Product-Relationship-Overlays. Eine Person darf mehrere Rollen tragen; die Authority- und SoD-Prüfung erfolgt trotzdem auf der tatsächlichen Person im konkreten Case.

| ID | Deep-Grill-Frage | Provisional Recommendation | Edge Case / Falsifier | Depends | Downstream |
|---|---|---|---|---|---|
| ACT-010 | Welche Organisationsebenen und Personentypen muss Consultry unterscheiden? | Target Consultancy, internal Person/User, Consultancy Client/Client Participant und mandated External Specialist. | Freelancer arbeitet dauerhaft wie intern, ist aber beim Client angestellt. | D-002, D-007 | alle Actor-/Journey-Scopes |
| ACT-020 | Welche Konzepte werden für Person, Responsibility, Case Participation und Authority getrennt? | Alle vier first-class; keines als Synonym für Jobtitel/RBAC. | Eine Person ist Partner, Author und Approver in einem kleinen Case. | ACT-010 | Role Compression, Permissions, Audit |
| ACT-030 | Welche Product Relationships bleiben Overlays statt Domain Roles? | Economic Buyer, Adoption Champion, Consultry User, Tenant Admin und Veto Actor. | Champion hat kein fachliches Mandat im konkreten Projekt. | ACT-020 | Buying/Onboarding vs Work Authority |
| ACT-040 | Welche Responsibility Families sind über beide Archetypen unverzichtbar? | Firm/P&L; Client/Account/Commercial; Engagement/Delivery; Consulting/Expert Work; Knowledge/Quality/Reuse; People/Capacity; Operations/Finance; Governance/Policy. | Boutique hat keine Abteilungen, aber dieselben Verantwortungen. | ACT-020 | JTBD Catalogue, Journey Ownership |
| ACT-050 | Welche Responsibility ist für Offer/Service/Product Portfolio nötig? | Separate Portfolio Responsibility, auch wenn Partner sie trägt. | Asset Owner ist nicht befugt, ein Angebot oder Preismodell zu veröffentlichen. | ACT-040 | Reuse→Offer Lifecycle |
| ACT-060 | Welche External Client Responsibilities werden first-class? | Client Sponsor, Subject Expert/Input Owner, Reviewer/Acceptance Owner, Commercial/Contract Authority und Delivery Participant nach Bedarf. | Nutzer des Deliverables darf Vertrag nicht akzeptieren. | ACT-010, E-005 | Client Co-Production Journeys |
| ACT-070 | Wie werden Boutique-Responsibilities auf Personen komprimiert? | Mapping pro Person sichtbar; keine Verschmelzung der fachlichen Rollen. | Managing Partner ist Buyer, Account Owner und Bid Approver. | ACT-040 | SoD, UX Context Switch |
| ACT-080 | Wie werden Growing-Consultancy-Responsibilities verteilt? | Responsibility- und Handoff-Muster, keine erzwungenen Department-Namen. | „Operations“ ist einmal COO, einmal PMO, einmal Partnerkreis. | ACT-040 | Workspaces, Handoffs, Configuration |
| ACT-090 | Welche Kombinationen dürfen nicht ohne zweiten Menschen abgeschlossen werden? | Risk-/Effect-basiert: externe Commitments, People-/Employment Effects, Rights Release und high-impact financial actions benötigen unabhängige Review/Approval oder governed exception. | Fünf-Personen-Boutique hat faktisch nur einen Partner. | ACT-070/080 | SoD Policy, Adoption Feasibility |
| ACT-100 | Braucht jeder materielle Case genau einen accountable human owner? | Ja; zeitlich gültig, delegierbar, aber nie ownerless oder AI-owned. | Owner ist abwesend; Arbeit muss weitergehen. | ACT-020 | Handoff/Delegation Contract |
| ACT-110 | Wie funktionieren Stellvertretung, Abwesenheit und Mandatsablauf? | Explicit delegation with scope, time, purpose, risk cap, accept/revoke and audit. | Delegation läuft während offener Externalization ab. | ACT-100 | queues, escalation, effect admission |
| ACT-120 | Können externe Legal/Privacy/Finance/Domain Experts mandatierte Participants sein? | Ja, mit bounded participation/authority, ohne sie automatisch zu internen Users zu machen. | Externer Reviewer benötigt source-limited access. | ACT-010, ACT-020 | sharing, confidentiality, licensing |
| ACT-130 | Welche fachliche Rolle besitzt AI? | Keine accountable Business Role; AgentIdentity erhält bounded execution/observation/suggestion scope. | Background Agent erkennt einen Vertragsablauf und erzeugt einen Case Candidate. | D-008, ACT-020 | Human-AI Contract, Audit |
| ACT-140 | Welche pre-pivot Personas werden übernommen? | Responsibility Patterns extrahieren; synthetische Gesamtpersonas splitten/revidieren, Dr. Müller als External Client Actor. | Ein alter Persona-Job passt, aber Buyer/ICP nicht. | ACT-040–130 | current Personas, UX research plan |

## 4. Jobs, Buying Moments und archetypische Arbeit

### Recommended stance

Jobs werden als konkrete Situation mit Trigger, Accountability, gewünschtem Fortschritt, Constraints und Workaround definiert. „Missing Function“, „Blind Spot“ und „Efficiency“ werden nicht selbst zum Job erklärt.

| ID | Deep-Grill-Frage | Provisional Recommendation | Edge Case / Falsifier | Depends | Downstream |
|---|---|---|---|---|---|
| JOB-010 | Welche Responsibility Jobs sind archetypübergreifend und welche Entry Jobs archetypspezifisch? | Gemeinsamer Jobraum, archetypspezifische Trigger/Pain/Buyer; nicht zwei Produkte. | Boutique und Growing Firm lösen denselben Client Risk Review völlig anders. | ACT-040 | Journey Portfolio |
| JOB-020 | Wie wird ein „Missing Function“-Fall operationalisiert? | Responsibility gap + fehlende capability/context/capacity + consequence + frequency + current substitute. | Funktion fehlt formal, wird aber problemlos durch Netzwerkpartner abgedeckt. | ACT-040 | H-001 Discovery |
| JOB-030 | Wann unterstützt Consultry eine Funktion, wann orchestriert es, wann ersetzt es Arbeitsschritte? | Diese drei Wirkformen getrennt benennen; accountable Responsibility nie pauschal ersetzen. | AI-Draft spart Arbeit, erzeugt aber externen Legal Review. | JOB-020 | Feature claims, acceptance |
| JOB-040 | Welche Boutique-Jobs sind plausible erste Buying Moments? | Letzte reale Opportunity-, Project-, Concept-, Management- oder Operations-Situation vergleichen; keinen globalen Winner annehmen. | Stärkster Schmerz ist Billing, nicht Akquise. | ACT-070 | Discovery protocol, entry slice |
| JOB-050 | Welche Growing-Consultancy-Jobs sind plausible erste Buying Moments? | Cross-team/function context loss und late material blind spots als Kandidaten, mit realem Incident. | Prozesse sind gut; Problem liegt nur in einem fehlenden Integration Connector. | ACT-080 | H-002 Discovery |
| JOB-060 | Wie unterscheiden wir Entry, Retention und Compounding Job? | Entry löst akuten Fall; Retention wiederkehrende natürliche Arbeit; Compounding actual governed reuse/learning. | derselbe Project Closeout kann alle drei berühren. | D-003 | journeys, metrics, packaging |
| JOB-070 | Ist Opportunity-to-Project der beste erste kommerzielle Value Path? | Als ratifizierte Scope Direction behalten, aber Market Priority je Archetyp/Alternative empirisch testen. | Boutique kauft zuerst wegen Project Delivery Blind Spot. | D-006 | H-006, validation program |
| JOB-080 | Wie wird der heutige Workaround pro Job eingefroren? | Letzter realer Fall: Systeme, Personen, elapsed work, failure/quality/economic consequence, authority and attempts. | Erinnerung ist unzuverlässig, aber Artefakte fehlen. | JOB-040/050 | Core Value Proof comparator |
| JOB-090 | Welche Low-Pain-/Reject-Fälle müssen Research enthalten? | Mindestens je Archetyp Fälle ohne material pain, ohne WTP oder mit ausreichender Generic-AI-Lösung. | Design Partner ist schon AI-Enthusiast und nicht repräsentativ. | JOB-040/050 | falsification, ICP boundaries |
| JOB-100 | Was unterscheidet first-class Product Archetype vom ersten bezahlten ICP? | Product Coverage und economic entry viability separat entscheiden. | 5-Personen-Firma braucht Produkt, kann Implementation aber nicht tragen. | D-002 | pricing, onboarding, GTM truth |

## 5. Decision, Review, Approval, Acceptance und Authority

### Recommended stance

`Decision` ist verantwortete fachliche Disposition; `Review` liefert Urteil/Evidence; `Approval/Authorization` erlaubt einen internen verbindlichen Schritt; `External Acceptance` ist eine client-owned Disposition; `Effect Admission` prüft, ob ein freigegebener Effekt tatsächlich ausgeführt werden darf.

| ID | Deep-Grill-Frage | Provisional Recommendation | Edge Case / Falsifier | Depends | Downstream |
|---|---|---|---|---|---|
| AUT-010 | Wann wird eine menschliche Disposition zur `Decision`? | Wenn ein benannter Owner Optionen disponiert und fachliche Folge/State Change entsteht. | Informelle Notiz „sieht gut aus“ ohne Mandat. | ACT-100 | Operating Grammar |
| AUT-020 | Wie unterscheidet sich fachlicher Review von Approval? | Review bewertet; Approval autorisiert einen definierten Schritt/effect. | Reviewer darf zugleich Approver sein, aber nur in Low Risk. | ACT-090, AUT-010 | Validation, UI actions |
| AUT-030 | Wie unterscheidet sich interne Approval von Consultancy-Client Acceptance? | Verschiedene Organizations/Authorities und Records; niemals ein gemeinsamer Status. | Client-Email gilt kommerziell als Acceptance, aber interner Delivery Start ist noch nicht freigegeben. | ACT-060, AUT-020 | Commercial Lifecycle |
| AUT-040 | Braucht `Commitment` eine eigene fachliche Semantik? | Ja: accepted obligation/intent with owner, scope, basis, effective conditions and status. | unverbindliche Absichtserklärung. | AUT-010–030 | O2P, Project readiness |
| AUT-050 | Welche Action Classes braucht die Authority Matrix? | assign/delegate, create/update, review, decide, approve/authorize, externalize/publish, bind, execute effect, merge/reopen/close. | User darf Proposal externalisieren, aber keinen Preiscommitment binden. | ACT-040, AUT-020 | permissions, requirements |
| AUT-060 | Wie wird Authority nach Scope, Purpose, Risk und Time begrenzt? | Grant/mandate includes all four; broad role label alone insufficient. | Partner hat firm-wide title, aber Conflict of Interest. | ACT-110 | effect admission, audit |
| AUT-070 | Wann darf dieselbe Person Author, Reviewer und Approver sein? | Nur explicit low-risk policy or governed exception; actual-person SoD check. | Role compression makes second person unavailable. | ACT-070, ACT-090 | Boutique feasibility |
| AUT-080 | Welche Ausnahme gilt, wenn unabhängige Review unmöglich ist? | Explicit exception owner, rationale, residual risk, narrower effect and later review; never silent self-approval. | urgent client incident response. | AUT-070 | exception lifecycle |
| AUT-090 | Wie funktionieren Reject, Revise, Abstain, Delegate, Escalate und Reopen? | First-class dispositions with reason, next owner and state; not free-text comments. | reviewer lacks competence and must abstain. | AUT-010 | handoff/recovery, metrics |
| AUT-100 | Wer darf AI-/Workflow-Policy oder tenant configuration verändern? | Separate configuration authority with preview, review, version, effective date and rollback. | Champion wants to loosen externalization rules for one deadline. | AUT-050 | VAR change governance |

## 6. Whole-Product Operating Grammar und Handoffs

### Recommended stance

Universelle Grammatik: `Trigger/Need → Sense/Frame → Responsible Decision or Accepted Work → Coordinated Work/Effect → Outcome Observation → Learn/Adapt`. `Observation`, `Signal`, `Finding`, `Opportunity` und `ChangeCase` sind branch-spezifische Objects. Handoff beginnt, wenn accountable custody oder Responsibility Context wechselt.

| ID | Deep-Grill-Frage | Provisional Recommendation | Edge Case / Falsifier | Depends | Downstream |
|---|---|---|---|---|---|
| LOOP-010 | Ist `Observation` universeller Einstieg? | Nein; ein Trigger Type unter mehreren. | scheduled renewal obligation ohne neue Beobachtung. | AUT-010 | Trigger taxonomy |
| LOOP-020 | Welche Trigger Types sind nötig? | Event/change, request, obligation, schedule, exception, observation, finding and accepted commitment. | AI erkennt ein Muster aus historischen Daten. | LOOP-010 | journey starts, ingestion |
| LOOP-030 | Wie unterscheiden sich Observation, Signal und Finding? | Observation = captured fact/context; Signal = decision-relevant interpreted indication; Finding = asserted issue/opportunity/relationship with evidence. | einzelne Beobachtung ist bereits materieller Vertragsverstoß. | LOOP-020 | objects, blind spots |
| LOOP-040 | Wann ist ein Signal entscheidungsreif? | minimum owner/routing, context, evidence/uncertainty, materiality and plausible disposition options. | high urgency with incomplete evidence. | LOOP-030 | sensing journey |
| LOOP-050 | Wann braucht ein Case eine Decision und wann nur Accepted Work? | Alternative/commitment or material effect → Decision; routine assigned work can be accepted directly. | Standard monthly billing pack. | AUT-010 | case types, UX |
| LOOP-060 | Wann braucht Work einen `ActionCase` statt einzelnes Work Item? | Wenn outcome, responsibility, coordination, obligations or state lifecycle cross one task. | one-email follow-up versus multi-role Change Request. | LOOP-050 | Core case contract |
| LOOP-070 | Welche Branch Outcomes darf eine Decision erzeugen? | Commercial, Delivery, Customer/Relationship, People/Capability, Knowledge/Reuse, Operations/Finance, Hold/Reject/No Action. | eine Decision erzeugt mehrere gekoppelte ActionCases. | LOOP-050/060 | journey branching |
| LOOP-080 | Wann wird aus Transition ein Handoff? | accountable responsibility/custody changes, including same person switching formal responsibility. | partner sends task to self in different role context. | ACT-070, AUT-050 | My Work, audit |
| LOOP-090 | Welche Mindestdaten trägt ein Handoff? | reason, source, target responsibility/person, requested outcome, context/evidence, constraints, due, acceptance condition. | target receives confidential source it may not access. | LOOP-080 | Handoff object/rules |
| LOOP-100 | Welche Handoff Dispositions sind Pflicht? | accept, reject, request-context, delegate, escalate, expire, cancel and reopen. | handoff accepted but authority expires mid-work. | LOOP-090 | recovery, notifications |
| LOOP-110 | Wie werden Waiting, Blocked, Hold und Aborted unterschieden? | waiting external/input; blocked internal dependency; hold intentional pause; aborted terminal stop with possible reopen policy. | client delays input indefinitely. | LOOP-100 | state models, analytics |
| LOOP-120 | Wie unterscheiden sich Output, Effect und Outcome? | Output is produced artifact; Effect is admitted state/external action; Outcome is observed change relative to goal. | Proposal sent (effect), no client response (outcome unknown). | AUT-040 | acceptance contracts |
| LOOP-130 | Wann wird Learning erzeugt? | Erst nach disposition/outcome evidence; learning proposal remains reviewable, scoped and reversible. | one anomalous failure should not alter a firm-wide workflow. | LOOP-120 | context/skills/reuse updates |
| LOOP-140 | Was darf der Loop nie automatisch tun? | No accountable assignment, binding commitment, cross-client release, people decision or external effect without authority. | emergency automation with pre-authorization. | D-008, AUT-050 | business rules |

## 7. Human–AI Responsibility und Meaningful Oversight

### Recommended stance

AI Interaction wird je Task/Decision mit einer Rolle `inform`, `suggest`, `draft`, `challenge`, `validate` oder `execute-bounded` beschrieben. Meaningful Oversight verlangt reale Dispositionsmöglichkeiten, Gegeninformation, Kompetenz/Zeit und Stop/Recovery; ein Approval Click reicht nicht.

| ID | Deep-Grill-Frage | Provisional Recommendation | Edge Case / Falsifier | Depends | Downstream |
|---|---|---|---|---|---|
| HAI-010 | Welche AI-Rollen sind fachlich erlaubt? | Inform, retrieve, synthesize, suggest, draft, challenge, validate and bounded execute; no accountable/approve. | AI auto-routes a low-risk notification. | ACT-130 | interaction/agent contracts |
| HAI-020 | Welche AI-Rolle ist pro Decision/Work Step Default? | Niedrigste Intervention, die den Job wirksam unterstützt; risk-/competence-sensitive. | Senior Expert braucht challenger, Junior eher guided synthesis. | HAI-010, JOBs | UX defaults, skill needs |
| HAI-030 | Was macht Oversight „meaningful“? | Owner, visible AI role, basis/limits, alternatives, independent judgment, time/competence, edit/reject/abstain/escalate/stop. | 50 Suggestions in fünf Minuten machen Review faktisch unmöglich. | AUT-010–090 | acceptance, UI requirements |
| HAI-040 | Wann muss AI Counterevidence oder alternative Perspektive zeigen? | Bei material decisions, blind-spot findings and high uncertainty; not every trivial draft. | Counterevidence overload obscures clear case. | F-008, HAI-030 | validation obligations |
| HAI-050 | Wann muss AI abstain statt Vorschlag erzeugen? | Unmet context/skill/evidence/policy threshold or unresolved conflict with material risk. | user can still request exploratory draft clearly marked. | HAI-030 | failure/recovery |
| HAI-060 | Wie verhindern wir Automation Bias und narrative over-alignment? | independent initial judgment where material, explicit disagreement path, counterposition and track override quality, not approval rate. | novice has no credible independent judgment. | E-009, HAI-030 | experiment design |
| HAI-070 | Wie messen wir AI-induzierte Review-/Coordination Work? | Separate review, correction, false-positive triage, escalation and recovery from gross generation time. | faster draft but slower final acceptance. | F-011 | acceptance metrics |
| HAI-080 | Welche Cases dürfen als Background Operator laufen? | Reversible, bounded, observable preparation/routing; binding effect separately admitted. | source expires while background task runs. | HAI-010, AUT-050 | case status, notification |
| HAI-090 | Welche Business Contract Fields braucht jeder Agent Workflow? | contextual task, owner, trigger, inputs/context, allowed actions, obligations, tools/data scope, stop/recovery, output/effect, outcome. | agent delegates to subagent with weaker constraints. | LOOP, AUT | product requirements |
| HAI-100 | Was darf ein optionaler Harness anders als die Guided App? | Interaction/composition depth; never objects, authority, validation or effect rights. | technical user writes custom workflow that requests a forbidden action. | D-004, HAI-090 | Harness product boundary |
| HAI-110 | Welche Client Disclosure/Consent-Fragen sind pro Journey nötig? | AI usage and data handling disclosed where contract, policy, law or client expectation requires; tenant/client-specific. | Germany nonuser firms cite client disapproval as barrier. | ACT-060, VAR policy | onboarding, externalization |
| HAI-120 | Wie wird Human-AI Collaboration bei Role Compression gestaltet? | Reduce integration load; avoid multiplying queues/approvals; offer exception-safe defaults. | Boutique Partner becomes reviewer for every minor suggestion. | ACT-070, F-011 | boutique UX/acceptance |

## 8. Consultry Core / OS Backbone

### Recommended stance

Consultry Core wird als consulting-spezifischer Continuity Backbone definiert, nicht als Context Graph, Platform Kernel oder Modulsumme. Kern sind sieben Obligations: Identity/Relationship, Attention/Context, Responsibility/Authority, Decision/Commitment, Work/Handoff, Evidence/Validation, Outcome/Learning.

| ID | Deep-Grill-Frage | Provisional Recommendation | Edge Case / Falsifier | Depends | Downstream |
|---|---|---|---|---|---|
| CORE-010 | Was ist die präzise Definition von `Consultry Core`? | Consulting-specific Product Backbone that preserves the seven continuity obligations across modules/journeys. | einzelnes Modul kann Value liefern, ohne alle OS-Domänen zu nutzen. | LOOP, HAI | Core boundary |
| CORE-020 | Welche Begriffe sind ausdrücklich keine Synonyme für Core? | Whole Product, Context Graph/Second Brain, Platform Kernel, Skill Graph, Model Bridge, Harness, App. | Marketing may call „core“ a package tier. | CORE-010 | glossary/pitch truth |
| CORE-030 | Welche Business Identities/Relationships muss der Core gemeinsam halten? | Cases, actors/participation, customer/client/project/engagement references, commitments, context/evidence and outcomes; exact objects later. | source system owns Account identity. | CORE-010 | domain candidates |
| CORE-040 | Welche Attention-/Responsibility-Records sind Core-owned? | routed attention item/handoff/case participation and responsibility state; source events remain federated. | notification-only item with no case. | LOOP-080–100 | My Work contract |
| CORE-050 | Welche Decision-/Commitment-/Effect-Records sind Core-owned? | Consultry owns its responsible decisions, approvals, commitments/effect admissions and audit; external system may own resulting operational record. | CRM owns opportunity status change. | AUT, CORE-030 | record authority matrix |
| CORE-060 | Welche Outcome-/Learning-Records sind Core-owned? | Outcome observation/claim/disposition and trace to case; learned asset/skill/process changes remain separate governed lifecycles. | outcome source is client survey in external system. | LOOP-120/130 | acceptance/learning |
| CORE-070 | Was ist der minimale Knowledge-to-Action Contract? | Need → relevant source/expert context → credibility/freshness/applicability/conflict → responsible interpretation → work/decision → feedback. | direct expert call resolves issue without document. | F-007 | capability/requirements |
| CORE-080 | Was ist der minimale Blind-Spot Finding Lifecycle? | candidate → evidence/counterevidence/materiality → owner → disposition → action/hold/reject → outcome/feedback. | correct finding is irrelevant and rightly dismissed. | LOOP-030, HAI-040 | blind-spot features/acceptance |
| CORE-090 | Wie unterscheiden sich Blind Spot, Conflict, Synergy, Redundancy und Reuse Finding? | Typed findings sharing one disposition contract; no parallel outcome worlds. | one pattern is both conflict and reuse opportunity. | CORE-080 | taxonomy, UI filtering |
| CORE-100 | Wie funktionieren native versus federated Record Authority Profiles? | per object/use case: source authority, Consultry identity/projection, allowed enrichment, effect target, reconciliation/recovery. | document-first Boutique has no CRM/PSA. | CORE-030–060 | integration requirements |
| CORE-110 | Welche Minimum Contracts erbt jedes fachliche Module? | common actor/authority, case/handoff, context/evidence, validation, effect, outcome/learning and audit semantics. | read-only insight module has no effect. | CORE-010–100 | module boundary, coverage |
| CORE-120 | Woran erkennen wir, dass der Core nur Zusatzkoordination erzeugt? | duplicate record work, unresolved ownership, extra approvals, low useful routing, stale context and no net outcome progress. | regulation intentionally adds necessary review. | CORE-110 | acceptance/stop criteria |

## 9. Journey Portfolio und Specification Depth

### Recommended stance

Breadth-first alle Journey Families definieren, dann Detailtiefe wählen. Detailpflicht für Entry, recurring Work, risk-heavy cross-role und Core-compounding Journeys; übrige erhalten Horizon Contracts. Knowledge-to-Action bleibt cross-journey Contract und kann zusätzlich einen Search/Ask-Referenzfall erhalten.

| ID | Deep-Grill-Frage | Provisional Recommendation | Edge Case / Falsifier | Depends | Downstream |
|---|---|---|---|---|---|
| PORT-010 | Welche Journey Families decken den ratifizierten Problem-/Outcome-Raum? | Customer/Commercial; Project/Delivery; Personal/Expert Work; Knowledge/Reuse/Offer; People/Capacity; Operations/Finance; Management/Portfolio; Implementation/Change; External Client/Governance branches. | zu viele Journeys spiegeln nur Module. | CORE-110 | journey backlog |
| PORT-020 | Ist Knowledge-to-Action eigene Journey oder Contract? | Cross-journey Pflichtcontract plus mindestens ein direkter Search/Ask/Expert-Access reference flow. | standalone question has no state change. | CORE-070 | coverage/acceptance |
| PORT-030 | Braucht Account-/Relationship-Continuity eigene Journey? | Ja, wenn sie unabhängig von Opportunity/Project wiederkehrende Decisions/Handoffs besitzt; sonst explicit cross-journey contract. | pure CRM record sync is not product journey. | PORT-010 | customer domain scope |
| PORT-040 | Wo endet Existing-Client Sensing? | Bei menschlicher Disposition und erzeugtem branch ActionCase; downstream commercial/delivery/knowledge journey continues. | no-action disposition with learning. | LOOP-070, CORE-080 | sensing ticket blockers |
| PORT-050 | Wo endet Tender-to-Concept? | Internal review-ready Concept/Proposal milestone; external issue belongs to commercial commitment lifecycle. | direct simple bid skips separate Concept. | LOOP, AUT | tender journey scope |
| PORT-060 | Sind Daily Attention und Project Delivery eine oder zwei Journeys? | Zwei gekoppelte Journeys: personal attention/capture and project coordination/delivery. | Boutique Lead uses one screen but still two jobs. | ACT, CORE-040 | split existing ticket |
| PORT-070 | Brauchen Project Inception und Closeout separate Journeys? | Ja, at least canonical subjourneys because authority/context and outcome/reuse handoffs concentrate there. | tiny engagement activates immediately. | COM lifecycle | project canon |
| PORT-080 | Wie wird Governed Reuse zerlegt? | Finding/candidate, assetization/release, reuse application, service productization as linked subjourneys. | asset from non-project source. | CORE-080/090 | reuse tickets |
| PORT-090 | Sind Staffing/Capacity und Capability Development getrennt? | Ja: allocation/commitment versus learning/build-buy-partner decisions, with shared evidence. | one staffing gap triggers development plan. | ACT-040 | people journey tickets |
| PORT-100 | Sind Finance/Operations und Management/Portfolio eigenständig? | Separate journey families with explicit cross-links; deep specs only for priority/risk cases. | billing readiness spans project + finance. | PORT-010 | scope/horizon contracts |
| PORT-110 | Ist Implementation/Onboarding/Configuration kanonische Product Journey? | Ja; split first-value onboarding from ongoing configuration change governance. | implementation delivered by partner, but user outcome remains Product responsibility. | CORE, VAR principles | domain/requirements |
| PORT-120 | Welche External-Client Journeys sind nötig? | shared input/review/acceptance/feedback and delivery collaboration where material; no generic client portal assumption. | email/off-platform acceptance remains canonical external event. | ACT-060, AUT-030 | external boundary |
| PORT-130 | Braucht Governance/Exception/Appeal eine eigene Journey? | Cross-cutting branch contract plus detailed high-risk exemplar, not a module-only journey. | people recommendation appeal. | AUT, HAI | policy requirements |
| PORT-140 | Welche Journeys erhalten volle Detailtiefe? | Highest evidence/entry, recurring value, cross-role risk and compounding; other families get explicit Horizon Contract. | complete Whole Product map need not mean full spec for every future module. | PORT-010–130 | Wayfinder ticket set |

## 10. Opportunity-to-Project und Commercial Commitment

### Recommended stance

Zwei gekoppelte Lifecycles ratifizieren: Commercial Case und Engagement/Project Activation. Business States zuerst; `Proposal`, `ClientContract`, SOW und `Project` Identitäten danach.

| ID | Deep-Grill-Frage | Provisional Recommendation | Edge Case / Falsifier | Depends | Downstream |
|---|---|---|---|---|---|
| COM-010 | Welcher Trigger eröffnet Commercial Demand? | qualified need/request/signal with responsible owner; no automatic Opportunity. | formal Tender intake before internal owner accepts it. | LOOP, PORT | opportunity entry |
| COM-020 | Was qualifiziert Demand zur Opportunity? | fit/materiality, plausible client need, owner, next decision, context/evidence and explicit disposition. | strategic speculative pursuit with weak evidence. | COM-010 | Opportunity lifecycle |
| COM-030 | Braucht Engagement Framing eigene Identität? | Stable brief/case state within Commercial Case; separate only if independently versioned/reused/reviewed. | framework call-off with predefined scope. | COM-020 | concept inputs |
| COM-040 | Was ist ein `Concept`? | Internal problem/solution/delivery framing artifact, optionally part of Proposal; not synonymous with externally issued offer. | public tender demands concept as formal proposal section. | COM-030 | ubiquitous language |
| COM-050 | Was ist stabile `Proposal` Identität und was Version? | One proposal case with immutable issued versions and editable drafts; multiple variants explicit. | lots or alternative pricing scenarios. | COM-040 | domain model |
| COM-060 | Welche Readiness States braucht Concept/Proposal? | drafting, review-ready, in-review, revision-required, internally-approved, approved-for-externalization, issued, superseded/withdrawn/expired. | low-risk email proposal skips some internal stages by policy. | AUT-020/050 | workflow/acceptance |
| COM-070 | Wie unterscheiden sich Internal Approval und Approved-for-Externalization? | Separate if content approval and permission to communicate/bind differ; may coincide under policy. | approver accepts content but price authority missing. | AUT-020/030 | effect admission |
| COM-080 | Was ist ein externally issued Proposal? | immutable issued version, recipient/channel/time, authority/basis and status; external fact, not just export file. | client receives Word manually outside Consultry. | COM-050–070 | audit, negotiation |
| COM-090 | Wie funktionieren Negotiation und Counterproposal? | revisions/counterterms linked to issued version; material changes re-enter responsible review/approval. | client accepts by email with minor redline. | COM-080 | contract transition |
| COM-100 | Was ist Consultancy-Client Acceptance? | external authorized disposition of defined terms; evidence may be signed instrument, award, PO, email or portal action per policy. | verbal go-ahead begins work at risk. | AUT-030/040 | binding basis |
| COM-110 | Welche Commitment Instruments sind fachlich relevant? | ClientContract/MSA, SOW/order, accepted Proposal, Award, PO and authorized Change; model roles rather than force one document. | public-sector award before contract signature. | COM-100 | contract canon |
| COM-120 | Wie unterscheiden sich ClientContract und SOW? | ClientContract stable relationship/basis with immutable versions; SOW/order scopes an engagement under or alongside it. | single combined contract for small project. | D-007 term convention, COM-110 | domain identity |
| COM-130 | Wie funktioniert ChangeCase unter bestehender Basis? | distinct case referencing current commitment, proposed delta, impact, approval/acceptance and effective version. | delivery change within tolerance requires no formal commercial change. | COM-110/120 | project change journey |
| COM-140 | Welche Bedingungen bilden Project Readiness? | effective basis, scope/outcome, delivery owner, initial team/capacity, constraints/dependencies, source/client context and accepted handoff. | at-risk start with incomplete commercial basis. | COM-100–130 | activation lifecycle |
| COM-150 | Wer darf Project Activation entscheiden? | named Delivery/Engagement authority plus commercial/policy gates; not AI or Proposal status alone. | partner is both commercial and delivery authority in Boutique. | ACT/AUT, COM-140 | Project state |
| COM-160 | Was enthält der erste Delivery Handoff? | accepted scope/outcomes, commitments, assumptions, client actors, evidence, risks, decisions, team/authority, next milestone and open issues. | inherited client project with partial documentation. | LOOP-090, COM-140 | Project inception |
| COM-170 | Wie funktionieren No-Bid/Lost/Withdrawn/Expired/Merge/Split/Reopen? | First-class terminal/paused transitions with reason, retained learning and explicit reopen/merge identity rules. | one opportunity splits into two projects. | COM-020–160 | commercial analytics/learning |
| COM-180 | Welche Acceptance beweist Opportunity-to-Project? | Traceable human-dispositioned transition through binding basis, readiness and accepted delivery handoff versus baseline; no win-rate causality from one case. | Proposal won but onboarding fails. | COM-010–170 | H-006, MVP proof |

## 11. Project, Daily Work, Sensing und External-Client Co-Production

### Recommended stance

Personal Attention/Capture und Project/Delivery Coordination als getrennte, gekoppelte Journeys behandeln. Project Lifecycle reicht von readiness/activation über change/suspension bis closure/outcome/learning. External Client Participation wird nur dort first-class, wo Input, Review, Decision oder Acceptance tatsächlich client-owned ist.

| ID | Deep-Grill-Frage | Provisional Recommendation | Edge Case / Falsifier | Depends | Downstream |
|---|---|---|---|---|---|
| PRJ-010 | Welcher Lifecycle gilt für ein aktives Project? | readiness → active → changed/suspended → completion proposed → accepted/closed; cancel/archive/reopen explicit. | ongoing retainer without one completion date. | COM-140–160 | Project domain, work journeys |
| PRJ-020 | Welche Project Facts sind authoritative und wo? | Project/SOW commitments, milestones/deliverables/decisions/risks each map to source authority; Consultry may own cross-source case/assessment. | client PM tool owns plan; Consultancy has only read access. | CORE-100 | record authority matrix |
| PRJ-030 | Wie unterscheidet sich ProjectStatusSnapshot, Assessment und Decision? | Snapshot facts projection; Assessment human judgment; Decision creates authorized response/change. | assessment says red while source milestones are green. | D-010, AUT-010 | status UX, audit |
| PRJ-040 | Was gehört in Personal Daily Attention? | responsible cases, accepted work, pending handoffs/reviews, due obligations, high-materiality findings and recoveries; not all notifications. | user is contributor on 50 low-priority cases. | CORE-040 | My Work requirements |
| PRJ-050 | Welche private/shared Grenze gilt für Capture und Notes? | deliberate purpose-bound sharing; private note never silently becomes business/management evidence. | user quotes private note into shared Decision rationale. | POL/Data policy | capture UX, trust |
| PRJ-060 | Wann wird Project Exception zum ChangeCase? | when commitment/scope/commercial/delivery authority must dispose a material delta; routine issue remains Project Work/Risk. | timeline slip can be absorbed without client commitment change. | LOOP-060/070, COM-130 | change journey |
| PRJ-070 | Wie wird Existing-Client Observation geroutet? | Observation → context/enrichment → signal/finding → responsible disposition; no automatic Opportunity. | same observation implies delivery risk and expansion opportunity. | LOOP-030/040, PORT-040 | sensing journey |
| PRJ-080 | Welche Branches darf Sensing erzeugen? | commercial, delivery/change, client relationship, knowledge/reuse, people/capacity, no-action/hold; possibly multiple linked cases. | sensitive client comment must remain limited to Project Lead. | ACT/AUT, PRJ-070 | routing/authority |
| PRJ-090 | Wie verhindern wir Monitoring und Signal-Volume Incentives? | intentional capture, purpose/transparency, no hidden person scoring, quality/outcome over volume. | connected sources automatically detect a deadline. | D-008, privacy policy | adoption/people requirements |
| PRJ-100 | Was muss der Empfänger eines Project Handoff akzeptieren? | scope/context, open risks/assumptions, responsibilities, evidence and requested outcome; acceptance or context request explicit. | receiving Delivery Lead rejects sold assumptions. | LOOP-090/100 | handoff quality metric |
| PRJ-110 | Welche Closure Handoffs sind Pflicht? | client/engagement outcome, contractual/commercial closure, billing readiness, relationship follow-up, knowledge/reuse candidate and unresolved liabilities. | project ends abruptly due to client insolvency. | PRJ-010 | reuse, finance, portfolio |
| PRJ-120 | Was gehört dem Consultancy Client im gemeinsamen Flow? | own inputs, approvals/acceptance, feedback and obligations; internal reasoning/people data remain consultancy-controlled. | client reviewer is embedded in shared workspace. | ACT-060, AUT-030 | client boundary/UX |
| PRJ-130 | Wie werden Client Feedback und Client Outcome aufgenommen? | source-bound observation/acceptance/claim with actor and scope; not silently equated with Target-Consultancy Outcome. | client says success, internal margin is negative. | D-003/D-007 | outcome model |
| PRJ-140 | Welche Project Acceptance beweist Backbone Value? | less receiver rework/context loss, earlier material issue disposition, traceable commitment and outcome progress versus PM+chat/current process. | sender is faster but receiver needs more clarification. | PRJ-010–130 | Core Value Proof |

## 12. Knowledge, Expert Access, Reuse und Service Productization

### Recommended stance

Knowledge-to-Action umfasst Retrieval und direkten Expertenzugang. Reuse wird erst nach Context Fit, Rights, Adaptation und beobachteter Anwendung als Value gewertet. Candidate Detection, Asset Release, Reuse Application und Offer/Productization bleiben getrennte Decisions.

| ID | Deep-Grill-Frage | Provisional Recommendation | Edge Case / Falsifier | Depends | Downstream |
|---|---|---|---|---|---|
| KNOW-010 | Welcher Job steht bei Expert Knowledge Access im Vordergrund? | Je Case unterscheiden: answer/source/expert connection/review/handoff; gemeinsamer request-to-application Contract. | direkte Expertensuche ist wertvoller als Dokumentantwort. | CORE-070 | Knowledge journey/features |
| KNOW-020 | Wann ist codified Knowledge ausreichend? | Wenn context/applicability/authority can be resolved without tacit judgment; otherwise expert/reviewer route. | template appears relevant but client constraints differ. | KNOW-010 | routing/HAI role |
| KNOW-030 | Wann muss ein menschlicher Expert einbezogen werden? | Material ambiguity, tacit context, contested applicability, high-risk decision or expertise claim. | expert load outweighs issue materiality. | KNOW-020 | handoff, expert load metric |
| KNOW-040 | Welche Source-/Knowledge-States sind nötig? | admitted, under-review, usable-with-scope, stale/needs-review, restricted, corrected, retired; owner/rights/freshness explicit. | legally valid document is operationally outdated. | CORE-070/100 | knowledge lifecycle |
| KNOW-050 | Wie wird Differenzierungsrisiko von Reuse sichtbar? | Context fit, novelty/customization need, source similarity and adaptation warning; human decides. | generic proposal content lowers win probability. | external Haas/Hansen | validation obligation |
| KNOW-060 | Wie messen wir Adaptation Effort? | actual review/rewrite/context addition and expert time per application, not only retrieval time. | saved search time but doubled rewriting. | KNOW-050 | reuse economics |
| KNOW-070 | Wie verhindern wir Senior-Expert Bottleneck durch Knowledge Requests? | batch/routing, evidence-rich request, reusable resolution, office-hours/delegation and net expert-load metric. | every AI answer demands senior sign-off. | ACT/HAI, KNOW-030 | retention/operating cost |
| KNOW-080 | Welche Knowledge Objects sollen bewusst nicht zentralisiert werden? | confidential, ephemeral, legally restricted or tacit/personal context remains scoped; catalog/reference may exist without content. | external expert's licensed method. | rights/privacy | source model |
| KNOW-090 | Wie wird Expertise nachgewiesen und aktualisiert? | CapabilityClaim + dated evidence + context/applicability + issuer/reviewer; never title alone. | senior title with obsolete expertise. | D-011, Skill questions | expert routing |
| KNOW-100 | Wann entsteht ein ReuseCandidate? | Human-dispositioned similarity/problem pattern with source lineage and plausible reusable value; not automatic release. | one-off artifact is high quality but non-generalizable. | CORE-080/090, PRJ-110 | reuse lifecycle |
| KNOW-110 | Welche Schritte trennen Candidate und ReusableAsset Release? | assess → abstract/de-identify → rights/confidentiality/IP review → quality/applicability → versioned approval/release. | rights permit internal team reuse but not cross-client use. | D-009, KNOW-100 | assetization requirements |
| KNOW-120 | Wie wird ReuseApplication entschieden? | current context fit, exclusions, required adaptation, responsible user and outcome hypothesis before use. | asset is approved but wrong for regulated client. | KNOW-110 | application record |
| KNOW-130 | Wann ist Reuse erfolgreich? | actual responsible application with measured adaptation, delivery/quality effect and no rights breach; recommendation alone is not success. | user applies asset but outcome worsens. | KNOW-120 | H-005 evidence |
| KNOW-140 | Wann wird Reuse zu Service/Offer Productization? | Separate portfolio decision based on repeated problem, validated method/asset, target context, delivery model, proof, owner and commercial viability. | one reusable template is not a sellable service. | KNOW-130, ACT-050 | Offer lifecycle |
| KNOW-150 | Welcher Gegenfall stoppt Productization? | excessive customization, rights limits, differentiation loss, unstable quality or no repeat demand. | existing-client customization inhibits broader innovation. | KNOW-140 | retire/hold decision |
| KNOW-160 | Wie werden Contributor Trust und Incentives berücksichtigt? | transparent attribution/rights, low capture burden, benefit feedback and no hidden performance scoring. | contributors hoard knowledge due to credit loss. | people policy | adoption/reuse quality |

## 13. Skill Graph und Capability Evidence

### Recommended stance

`SkillDefinition`, `TaskRequirement`, `CapabilityClaim`, `CapabilityEvidence`, `AuthorityGrant` und `Assignment` getrennt halten. Der Core Skill Graph beschreibt ausführbare AI capabilities; Human/Team/Firm Capability Evidence bleibt separate View. Externe Taxonomien dürfen Seed-Vokabular liefern, aber keinen Capability Proof.

| ID | Deep-Grill-Frage | Provisional Recommendation | Edge Case / Falsifier | Depends | Downstream |
|---|---|---|---|---|---|
| SKL-010 | Was ist eine SkillDefinition im Product-Vokabular? | Versioned definition of bounded capability for a Contextual Task with expected outcome/quality and prohibited effects. | broad label „proposal writing“ hides many tasks. | D-011, JOBs | skill requirements |
| SKL-020 | Welche Felder braucht eine SkillDefinition fachlich? | task/context, prerequisites, inputs, allowed behaviors, output contract, quality/risk obligations, exclusions and evidence expectation. | deterministic extraction versus advisory judgment. | SKL-010 | later technical Skill Contract |
| SKL-030 | Wie unterscheiden sich Skill, Responsibility, Role und Authority? | Skill = capability; responsibility = accountable domain obligation; role = responsibility bundle; authority = allowed effect. | skilled expert lacks contract authority. | ACT/AUT | assignment rules |
| SKL-040 | Was ist TaskRequirement? | contextual needed capability/quality/risk/authority, derived from real Case not generic role. | task requirement changes after client constraint emerges. | LOOP/CORE | skill resolution |
| SKL-050 | Sind menschliche und AI Skills dieselbe Oberklasse? | Shared semantic comparison possible; evidence, constraints and execution subjects remain distinct. | team capability emerges from complementary humans+AI. | SKL-010–040 | capability view |
| SKL-060 | Was ist CapabilityClaim versus CapabilityEvidence? | Claim asserts subject+skill+context+level/time; evidence supports/contradicts it with provenance and validity. | self-claim without recent work evidence. | SKL-030 | assignment/validation |
| SKL-070 | Wie wird Team/Firm Capability abgeleitet? | explicit composition plus collaboration/coverage constraints; not sum/average of individuals. | two experts cannot work in required language/timezone. | SKL-060 | team shape/staffing |
| SKL-080 | Wie werden prerequisites, composition, equivalence and substitution modeled? | Explicit relations with scoped conditions; no global substitutability. | two model skills equivalent on drafting, not on client data rules. | SKL-010 | graph semantics |
| SKL-090 | Wer kuratiert Definitionen und Synonyme? | governed Product/Tenant responsibility; proposed changes need provenance, impact and version disposition. | imported ESCO term conflicts with consultancy language. | VAR/AUT | configuration change |
| SKL-100 | Wann verfällt Capability Evidence? | context-specific freshness/expiry or contrary outcome evidence; no permanent proof. | certification current, practical delivery failed repeatedly. | SKL-060 | routing/review |
| SKL-110 | Wie werden negative Evidence und Fehlversuche verwendet? | retained as scoped evidence with cause/context; neither hidden nor universal disqualification. | failure caused by missing tool permission, not lack of skill. | SKL-060/100 | assignment confidence |
| SKL-120 | Darf ein Agent seine eigene Skill/Capability-Wahrheit schreiben? | It may propose evidence; independent validation/governed release required for authoritative change. | outcome telemetry automatically updates confidence. | D-008, I-012 | skill learning loop |
| SKL-130 | Welche ESCO/O*NET Elemente sind Seeds? | definitions, tasks, knowledge/work-context relations as optional mapping; no imported authority/level truth. | specialized cybersecurity consulting vocabulary absent. | SKL-090 | taxonomy bootstrap |
| SKL-140 | Wie wird Skill mit Authority und Assignment verbunden? | TaskRequirement → candidate skill/capability evidence → person/agent availability → authority check → accepted assignment → outcome evidence. | most capable subject lacks client clearance. | AUT, SKL-040–120 | staffing/agent routing |

## 14. Execution Graph, Agent Loops und Workflow Topology

### Recommended stance

Keine generische „Agents on Graphs“-Product Requirement. Zuerst Business Work/State/Obligations; dann pro Workflow Topologie, feedback signal, reversibility, stop/escalation and baseline. Simple deterministic or single-agent flow remains required comparator.

| ID | Deep-Grill-Frage | Provisional Recommendation | Edge Case / Falsifier | Depends | Downstream |
|---|---|---|---|---|---|
| EXE-010 | Welche Nodes sind Business Work und welche Implementation Detail? | Product specifies responsibility-bearing work/state/effect; model thoughts/tool microsteps stay technical unless user/audit relevant. | legally required verification step is business obligation. | LOOP/Journeys | workflow requirements |
| EXE-020 | Ist der Workflow zerlegbar, parallel oder strikt sequenziell? | Decide per task topology; no multi-agent default. | finance analysis parallelizes, contract negotiation does not. | EXE-010 | later orchestration |
| EXE-030 | Welche Entry/Success/Exit Criteria hat jeder Schritt? | observable business/process conditions, not “agent says done.” | creative concept quality lacks objective signal. | journeys/acceptance | state machine |
| EXE-040 | Welche Transition ist authoritative? | only admitted domain transition by authorized component/person; execution trace never silently changes business state. | tool call succeeds but target system rejects transaction. | AUT/CORE-100 | effect handling |
| EXE-050 | Welche Schritte sind reversible, idempotent or replayable? | explicit class per effect; irreversible/external actions require stronger gates. | email cannot be unsent; draft can be regenerated. | AUT-050 | recovery policy |
| EXE-060 | Was ist das Feedbacksignal eines Loops? | external/testable obligation where possible; LLM self-critique alone is weak evidence. | subjective strategy quality requires panel review. | I-012 | evaluator/validation |
| EXE-070 | Welche Stop-Kriterien gelten? | objective pass/limit, no-progress, conflict, budget/time/iteration cap, policy block and mandatory human escalation. | oscillating revise/reject loop. | EXE-060 | bounded execution |
| EXE-080 | Wie wird interrupted work resumed? | persisted Case/State/Inputs/decisions/obligations and explicit resume owner; no mutable hidden memory. | model/provider version changed mid-case. | CORE continuity | recovery/audit |
| EXE-090 | Welche Fehler propagieren über mehrere Agents? | specification, coordination, context divergence, tool error, verification gap and nontermination tracked as failure classes. | all agents share same wrong assumption. | EXE-020 | validation/test cases |
| EXE-100 | Wann ist ein einzelner Agent oder deterministic flow besser? | Default simplest flow meeting quality/risk; add agents only with measured task-specific gain. | multi-agent demo impresses but costs/reliability worsen. | external agent research | horizon/architecture handoff |
| EXE-110 | Wie wird repeated reliability geprüft? | multiple-run/task-set success and failure distribution, not best run or average only; critical steps need pass-at-k evidence. | stochastic tool agent works 80% once but 33% over repeated sequence. | ACC/Evals | production readiness later |
| EXE-120 | Wann muss ein Mensch übernehmen? | unresolved material obligation, repeated no progress, conflicting validators, authority boundary, irreversible effect or novel risk. | human unavailable before SLA. | AUT/HAI | escalation/SLO requirements |

## 15. Validation / Assurance Graph

### Recommended stance

Validation Graph ist eigene Argument-/Evidence-Sicht, kein zweiter Execution Workflow. Kernobjekte: Subject, Claim/Obligation, Context/Assumption, Evidence/Counterevidence/Defeater, Test/Result, Validator, Decision, Condition/Waiver, Version/Expiry, Release Gate, Incident/Remediation. Status mehrwertig; human Authority disposes.

| ID | Deep-Grill-Frage | Provisional Recommendation | Edge Case / Falsifier | Depends | Downstream |
|---|---|---|---|---|---|
| VAL-010 | Was ist das Validation Subject? | exact version/scope of output, decision basis, process run, skill release, asset or proposed effect. | proposal changed after validation. | journeys/domain | validation identity |
| VAL-020 | Welche Claim/Obligation Types gibt es? | factual/source, quality, process, policy/rights, authority, safety/risk and effect-readiness; typed but extensible. | subjective “strategically compelling” quality. | VAL-010 | obligation catalog |
| VAL-030 | Welche Context/Assumptions begrenzen einen Claim? | tenant/client/task/version/time/source/model/workflow and explicit assumptions. | claim valid only for one jurisdiction. | CORE context | applicability/expiry |
| VAL-040 | Welche Evidence Types gelten? | source binding, deterministic check, human review, benchmark/test, external acceptance, observed outcome; strength scoped. | three agreeing LLMs are not independent evidence. | VAL-020/030 | evidence policy |
| VAL-050 | Welche Counterevidence/Defeaters werden aktiv gesucht? | contradictions, missing scope, stale evidence, alternative explanation, conflict of interest, benchmark mismatch and downstream incident. | counterevidence confidential to another role. | HAI-040 | access/audience views |
| VAL-060 | Wie unabhängig muss Validator sein? | risk-proportionate separation in data/model/prompt/person/interest; disclose shared dependencies. | Boutique cannot supply independent internal reviewer. | ACT-090/AUT-080 | validation policy |
| VAL-070 | Welche Status braucht ein Claim? | asserted, needs-support, challenged, defeated, satisfied, accepted-with-conditions, waived, expired and superseded. | partially satisfied multi-part obligation. | VAL-020–060 | UI/state model |
| VAL-080 | Wer entscheidet Release/Effect? | authorized human/business role uses validation evidence; validator never self-admits effect. | deterministic hard rule automatically blocks but cannot approve. | D-008, AUT | release gate |
| VAL-090 | Was ist Validation versus Risk Acceptance/Waiver? | validation assesses obligations; authorized waiver accepts residual gap with scope, reason, conditions and expiry. | deadline forces use with missing noncritical source. | VAL-070/080 | exception audit |
| VAL-100 | Wann verfällt Evidence und was löst Revalidation aus? | source/model/prompt/workflow/policy/subject/version/context change or time/incident trigger. | provider silent model update. | VAL-030/040 | Model Bridge, asset release |
| VAL-110 | Welche Audience Views sind nötig? | role-scoped summary and drill-down for worker, approver, client/auditor; confidentiality can hide evidence content but not unresolved state. | client may see acceptance rationale, not internal source. | ACT/rights | UX requirements |
| VAL-120 | Welche Risk Classes brauchen leichten versus vollständigen Assurance Case? | proportionate tiers; high external/people/rights/financial effects get stronger claim-evidence structure. | low-risk internal draft with sensitive data. | AUT/Policy | quality requirements |
| VAL-130 | Wie verbinden Incident und Remediation den ursprünglichen Claim? | incident challenges prior evidence/claim, triggers scope review/revalidation and records remediation outcome. | latent issue appears months after asset reuse. | LOOP-130 | learning/governance |
| VAL-140 | Welche Acceptance beweist Nutzen der separaten Validation View? | better detection/disposition and safer effects net of review cost versus current review/chat; not “more checks.” | users bypass system due to burden. | I-012, H-008 | validation MVP/horizon |

## 16. Model Bridge als späteres Modul

### Recommended stance

Model Bridge startet bei `UseCaseRequirement`, nicht Providerwahl. Es routet Quality/Capability/Cost/Latency plus Data/Contract/Policy/Action constraints, versioniert Entscheidungen und Fallback. Separate Monetarisierung bleibt Hypothese.

| ID | Deep-Grill-Frage | Provisional Recommendation | Edge Case / Falsifier | Depends | Downstream |
|---|---|---|---|---|---|
| MOD-010 | Welche UseCaseRequirements steuern Model Routing? | task type, quality floor, modality/tools/context, risk/action class, data zone, latency/cost and fallback. | cheapest model lacks required source grounding. | SKL/VAL | future routing contract |
| MOD-020 | Welche realen Evals steuern Routing? | Consultry task distributions with human/quality/obligation outcomes; public benchmark only supplement. | evaluation distribution shifts by tenant. | ACC/VAL | model policy evidence |
| MOD-030 | Welche Provider-/Contract Constraints sind fachlich relevant? | residency/data zone, no-training/retention, IP terms, tenant/client restrictions, audit/disclosure. | client forbids one provider mid-engagement. | VAR/rights | configuration requirements |
| MOD-040 | Welche Action Classes darf ein Modell/Route unterstützen? | explicit policy; better benchmark score does not grant effect authority. | local model may process data but not meet quality floor. | AUT-050, VAL | routing/effect boundary |
| MOD-050 | Welche Fallbacks sind zulässig und dürfen sie still erfolgen? | Fallback only within equivalent approved requirement envelope; disclose/log material capability/provider change. | outage forces lower-quality emergency route. | MOD-010–040 | recovery/UX |
| MOD-060 | Welche Run Provenance muss erhalten bleiben? | model/provider/version, route/policy, prompt/skill/workflow versions, context digest, tools, validation and fallback. | provider obscures exact model revision. | VAL-100 | audit/revalidation |
| MOD-070 | Wie reagiert Routing auf Distribution Shift? | monitor obligation/task outcomes, detect degradation, quarantine/rollback and require revalidation. | new tender language causes silent quality drop. | MOD-020/060 | learning/operations |
| MOD-080 | Wann darf Tenant BYO/local model verlangen? | defined policy/contract path only if capability/validation/operations responsibilities are explicit. | sovereignty need conflicts with required quality. | MOD-010–070 | module configuration |
| MOD-090 | Wer besitzt und genehmigt Routing Policy? | platform default plus tenant constraints; high-risk changes require named Product/Tenant authority. | tenant admin optimizes cost against quality. | AUT-100 | governance |
| MOD-100 | Welcher eigenständige Kundennutzen ist monetarisierbar? | demonstrated sovereignty/portability/quality-cost/fallback governance across use cases, beyond hidden API abstraction. | all target buyers accept one managed provider. | H-010, Discovery | add-on packaging |
| MOD-110 | Welche Evidenz würde das Zusatzmodul falsifizieren? | no independent buyer/WTP, negligible switching/risk value, or complexity exceeds benefit. | Model Bridge matters technically but not commercially. | MOD-100 | platform horizon |

## 17. Invariant/Variation Envelope und Implementation Experience

### Recommended stance

Früh Product Invariants von Variation trennen; danach zwei Journeys: First-Value Implementation und governed Configuration Change. Document-first und connected paths teilen denselben Product Contract. Role-compressed Boutique darf nicht durch zusätzliche Admin-Arbeit überfordert werden.

| ID | Deep-Grill-Frage | Provisional Recommendation | Edge Case / Falsifier | Depends | Downstream |
|---|---|---|---|---|---|
| VAR-010 | Welche vier Einführungskonzepte werden getrennt? | tenant implementation, source/corpus onboarding, end-user adoption and ongoing configuration governance. | same Partner executes all four. | CORE/PORT | implementation journeys |
| VAR-020 | Was bleibt produktweit invariant? | identity/boundary, responsibility/authority, decision-vs-recommendation, evidence/uncertainty, effect admission, audit and outcome trace. | legal market requires different approval semantics. | CORE-110 | product line integrity |
| VAR-030 | Was darf tenant-variable sein? | labels, responsibility-to-person mapping, stage variants, forms/docs, thresholds/policies, approval routes, views and source mappings within invariants. | tenant wants to rename Decision to Approval, causing semantic collision. | VAR-020 | configuration model later |
| VAR-040 | Was ist Default, Configuration, Template, Extension oder Custom Module? | explicit five-level classification with upgrade/ownership implications. | one client-specific workflow becomes common across tenants. | VAR-020/030 | implementation service design |
| VAR-050 | Wann startet eine Firm document-first versus connected? | choose lowest-friction path that supports one real job; connectors only when needed for proof/continuity. | document upload lacks authoritative current data. | JOB/CORE-100 | onboarding sequence |
| VAR-060 | Welche Discovery Mapping ist vor First Value nötig? | target job, actors/authority, current flow/systems, source/rights, risk, comparator and acceptance; no full enterprise modeling first. | critical SoD unknown until late. | JOB/ACT/AUT | implementation checklist |
| VAR-070 | Was ist First Value je Archetyp? | one real, owned, responsible outcome under Core Value Proof; scenario may differ. | Boutique First Value is management decision, Growing Firm is project handoff. | D-012, JOB | onboarding acceptance |
| VAR-080 | Wie implementiert eine Boutique ohne Admin/Knowledge/Ops Function? | guided defaults, role-compressed mapping, minimal ongoing governance and optional expert/partner assistance measured as total burden. | owner must approve every source and rule. | ACT-070, HAI-120 | paid ICP feasibility |
| VAR-090 | Welche Training/AI-Literacy ist Product Requirement? | role-/risk-specific onboarding and in-flow explanation; not one generic course. | expert user overtrusts AI outside its frontier. | HAI/External OECD | adoption/quality |
| VAR-100 | Welche Client Approval/Disclosure Constraints werden erfasst? | engagement/client-level policy with scope and evidence; not tenant-wide assumption. | one key client bans GenAI while others permit it. | ACT-060, HAI-110 | routing/data/UX |
| VAR-110 | Welche Failure/Recovery Paths hat Onboarding? | bad/stale corpus, missing rights, connector refusal, no owner, policy conflict, weak first output and rollback/alternate path. | First Value fails because no representative data exists. | VAR-050–100 | stop/pivot criteria |
| VAR-120 | Wer entscheidet und genehmigt Configuration Change? | named config owner, impact/risk review, preview/test, effective version, rollback and affected-user notice. | urgent workflow fix during active proposal. | AUT-100 | change lifecycle |
| VAR-130 | Wie verhindern wir hundreds of Product Forks? | variation only through governed contracts/templates/modules; recurring custom delta enters Productization decision. | strategic client funds unique feature. | VAR-040/120 | platform/product roadmap |
| VAR-140 | Welche Acceptance beweist scalable implementation? | time/effort to real value, admin burden, invariant compliance, user adoption, change safety and repeatability across tenants. | fast setup requires ongoing consultancy services. | VAR-010–130 | H-009, pricing/horizons |

## 18. Capability, Feature und Requirements Coverage

### Recommended stance

Zwei Passes statt semantischem Zyklus: zuerst Problem→Journey→Approach→Capability→Behavior/Rule Skeleton; nach Acceptance/Horizon dann final Acceptance/Horizon Trace. Orphan Features, uncovered journey steps and stale claims explicitly expose.

| ID | Deep-Grill-Frage | Provisional Recommendation | Edge Case / Falsifier | Depends | Downstream |
|---|---|---|---|---|---|
| REQ-010 | Welche Pflichtfelder besitzt jede Traceability-Zeile? | problem/outcome, actor/job, trigger, journey step/state, approach, capability, behavior, quality, rule, evidence hypothesis and source status. | cross-cutting capability serves many rows. | domain/journeys | coverage schema |
| REQ-020 | Wie unterscheiden sich Product Approach, Capability, Module, Feature und Requirement? | approach explains intervention; capability ability; module product boundary; feature user-visible behavior; requirement testable behavior/quality. | Validation is approach, capability and surface. | CORE/PORT | deduplication |
| REQ-030 | Welche Capability/Module Taxonomie gilt? | derive from responsibilities/journeys and Core-vs-Module contract; do not choose by existing file list. | one workflow spans Growth/Delivery/Knowledge. | CORE-110, PORT | product map |
| REQ-040 | Welche aktuellen Features sind Orphans? | mark any without ratified job/journey as hypothesis/defer; do not silently delete. | strategic future feature with valid vision but no current detailed journey. | REQ-010–030 | reconciliation/horizons |
| REQ-050 | Welche Journey Steps sind uncovered? | every responsible decision/handoff/recovery/outcome needs capability behavior or explicit human/external process. | off-platform client acceptance. | Journeys | feature gaps |
| REQ-060 | Welche cross-cutting Quality Requirements sind Pflicht? | trust/quality, source/uncertainty, privacy/confidentiality, accessibility, human responsibility, audit, configurability, interoperability, recoverability. | low-risk draft may have lighter evidence, not zero quality. | HAI/VAL/VAR | NFR catalog |
| REQ-070 | Welche Business Rules sind non-negotiable? | no AI accountability/binding effect, no silent cross-client reuse, no hidden people scoring/monitoring, risk-based externalization and actual-person SoD. | explicit preauthorized automation. | D-008, AUT, rights | rule canon |
| REQ-080 | Wie werden archetypische Variationen abgebildet? | conditional context/defaults/journey variants against same requirement IDs; avoid duplicate products. | Boutique omits a handoff because same person, but context switch remains. | D-002, VAR | acceptance variants |
| REQ-090 | Wann wird technische Candidate-Language zurückgewiesen? | if it selects storage/graph/model/runtime rather than business behavior; preserve as downstream constraint note. | immutable history is both business need and persistence hint. | D-005 | technical handoff |
| REQ-100 | Wie wird final Acceptance/Horizon Trace ergänzt? | second pass after evidence contracts and slice decisions; no circular dependency. | acceptance finding forces journey revision. | ACC/HZN | final coverage matrix |

## 19. Acceptance, Learning und Falsification

### Recommended stance

Jede Acceptance vergleicht realen Job mit aktuellem Workaround und trennt Output, Process/State Progress, Target-Consultancy Outcome, Client Outcome, Trust und Net Work. Chat/generic AI ist für geeignete Tasks expliziter Comparator. Gegenfälle, repeated reliability and stop criteria first-class.

| ID | Deep-Grill-Frage | Provisional Recommendation | Edge Case / Falsifier | Depends | Downstream |
|---|---|---|---|---|---|
| ACC-010 | Welcher Comparator gilt pro Journey? | actual current process plus best realistic alternative: colleague/search/template/CRM+AI chat/generic AI where used. | firm has no consistent baseline. | JOB-080 | proof validity |
| ACC-020 | Wie wird marginaler Backbone Value gegen Chat geprüft? | same job/inputs; compare continuity, rights, handoff, validation, recovery, outcome and net work, not prose quality alone. | isolated draft where chat is rightly enough. | D-004, external BCG | product differentiation |
| ACC-030 | Wie trennen wir Output Quality, Decision Quality und Process Progress? | distinct measures/reviewer/ground truth; output can be good while decision/effect fails. | polished proposal based on wrong scope. | LOOP-120 | journey acceptance |
| ACC-040 | Wie trennen wir Target-Consultancy und Client Outcome? | direct firm outcome versus downstream client/engagement effect, linked but never conflated. | client success at consultancy loss. | D-003/D-007 | pitch claims |
| ACC-050 | Wie messen wir Blind-Spot Findings? | correctness, materiality, novelty, timing, actionability, disposition and false-positive/review cost; recall only with labeled universe. | useful challenge is not factually “correct” but improves decision. | CORE-080, VAL | H-002/H-008 |
| ACC-060 | Wie messen wir Knowledge-to-Action? | source/expert fit, applicability understanding, responsible next action, quality and net effort versus alternative. | faster answer used wrongly. | CORE-070, KNOW | H-003 |
| ACC-070 | Wie messen wir Project/Handoff Value? | receiver rework/context requests, issue timing, ownership clarity, state/outcome progress and net coordination work. | sender time falls, receiver load rises. | PRJ-100/140 | Core proof |
| ACC-080 | Wie messen wir Reuse/Productization? | actual application, adaptation, rights, delivery/quality/economic effect and repeat demand; asset count is not value. | recommended asset never used. | KNOW-130–150 | H-005 |
| ACC-090 | Wie trennen wir Adoption von Retention? | activation = first responsible value; adoption = repeat role/job use; retention = continued valued use/budget over natural recurrence. | mandatory weekly login. | VAR-070 | H-004 |
| ACC-100 | Welche Net-Work-Komponenten werden erfasst? | setup, capture, generation, review, correction, false-positive triage, handoff, escalation, recovery and displaced work. | regulation-required review adds burden but prevents high cost. | HAI-070 | ROI/acceptance |
| ACC-110 | Wie berücksichtigen wir Expertise Level? | stratify task/user experience; measure benefit/harm separately; no average-only claim. | junior gains while senior slows. | external QJE/METR | UX/routing |
| ACC-120 | Wie prüfen wir repeated reliability? | multiple representative cases and reruns, failure modes and pass-at-k/sequence reliability where critical. | best demo run hides instability. | EXE-110 | technical eval requirements |
| ACC-130 | Welche Stop/Pivot Criteria gelten? | no material problem/WTP, no better net outcome than alternative, unacceptable review/admin burden, trust/policy failure or nonportable implementation. | strong output quality but no recurring use. | all Acceptance | horizon decisions |
| ACC-140 | Welche Claims dürfen aus welcher Evidence abgeleitet werden? | single case = case evidence; cohort = bounded pattern; causal claim only controlled/credible design; limitations travel with claim. | investor pitch wants one percentage. | Research governance | pitch truth |
| ACC-150 | Wie viele Design-Partner-Fälle sind genug? | risk/saturation-based across both archetypes, jobs and negative cases; no invented universal sample number. | high-risk people workflow needs stronger evidence than low-risk draft. | ACC-130/140 | research plan |
| ACC-160 | Welche Countercases müssen Pflicht sein? | low-pain, chat-sufficient, client-ban, review-overload, wrong reuse, no-core-needed and simple-flow-beats-agent cases. | all recruited partners are enthusiasts. | F-027 | falsification quality |

## 20. Validation Program, MVP Slice und Product Horizons

### Recommended stance

Nicht erzwingen, dass ein einzelner Slice Entry, Retention und Compounding gleichzeitig kausal beweist. Ein verbundenes Validation Program kann mehrere Proofs unter demselben Core Contract enthalten. MVP bleibt klein, aber fachlich end-to-end mit Verantwortung und Failure/Recovery.

| ID | Deep-Grill-Frage | Provisional Recommendation | Edge Case / Falsifier | Depends | Downstream |
|---|---|---|---|---|---|
| HZN-010 | Brauchen wir einen Proof oder ein verbundenes Validation Program? | likely three linked proofs: Entry, recurring work/continuity, and reuse/learning path; exact minimum grilled after acceptance. | one O2P case naturally exercises all three. | ACC | validation plan |
| HZN-020 | Welcher reale Fall ist erster Reference Proof je Archetyp? | archetype-specific scenario under identical Core Value Proof structure; no universal Concept assumption. | same design partner covers only Growing Firm. | JOB/ACC | pilot selection |
| HZN-030 | Was ist der kleinste vollständige MVP Business Slice? | end-to-end case with actor/authority, context/evidence, handoff/effect, outcome and recovery; no technical epics. | narrow Concept milestone without Project activation may be validation, not MVP endpoint. | HZN-010/020 | MVP boundary |
| HZN-040 | Welche Capabilities sind Validation-only versus Product MVP? | prototype/eval instrumentation can validate assumption without becoming shipped Product; Product behaviors require repeated user value. | manual concierge step. | HZN-030 | scope/handoff |
| HZN-050 | Wie werden Whole Product, Expansion und Platform erhalten? | explicit Horizon Contracts with problem, actors, intended value, dependencies and evidence gate; defer depth, not identity. | Model Bridge is later add-on, not initial core workflow. | PORT/REQ | roadmap truth |
| HZN-060 | Welche Deferments sind gefährlich? | anything that breaks end-to-end responsibility, client/tenant boundary, recovery or acceptance cannot be deferred from chosen slice. | manual approval acceptable; missing owner semantics not. | HZN-030 | MVP guardrails |
| HZN-070 | Wann wird Opportunity-to-Concept nur Milestone? | when it validates drafting/grounding but not commitment/activation; label accordingly. | buyer only values draft, not full path. | COM-180 | measurement rewrite |
| HZN-080 | Wann wird Compounding Product Vision versus MVP capability? | vision stays; MVP only when actual reusable work/application is needed to prove repeat value. | no rights-safe reuse cases available. | KNOW/ACC | scope honesty |
| HZN-090 | Wann darf Technical Wayfinding starten? | every in-scope problem traces to actor/job, journey/state, authority/rule, acceptance and horizon; unresolved market hypotheses have explicit tests. | implementation team asks storage choice early. | final coverage | technical handoff |

## 21. Product Line, Packaging, Generalization und Pitch Truth

### Recommended stance

Consultry Core plus consulting modules zuerst als Product Line definieren. Governance/Model Bridge/Harness/Platform reuse stay future package hypotheses. Generalization is protected by clear contracts, not by weakening the consultancy-specific first product. Pitch separates Product Vision, current proof, MVP/horizon and empirical claims.

| ID | Deep-Grill-Frage | Provisional Recommendation | Edge Case / Falsifier | Depends | Downstream |
|---|---|---|---|---|---|
| BUS-010 | Was ist first-class Product Coverage versus paid ICP? | Product covers both ratified archetypes; paid ICP depends on implementation economics/WTP and may start narrower. | 5–9 firm has value but low ACV/support burden. | JOB-100, VAR | GTM/pricing |
| BUS-020 | Welche Segmentation Dimensions ergänzen Headcount? | project mix, specialization, leverage/role compression, repeatability, client interaction, regulation, knowledge/system maturity. | two 30-person firms need radically different implementations. | I-002 | research sampling/config |
| BUS-030 | Welche Consulting Types share the same Product Logic? | classify by value/delivery/knowledge/authority model, not labels; test IT/Digital/Security first. | staffing agency calls itself consultancy. | BUS-020 | scope/market |
| BUS-040 | Welche Product-Line Regel gilt? | Consultry Core + governed consulting modules/add-ons; no entitlement decision hidden in technical module boundaries. | customer wants only Model Bridge without Consultry workflows. | HZN-050 | packaging/subscription domain |
| BUS-050 | Welche späteren Module sind separat monetarisierbare Hypothesen? | Governance/Assurance, Model Bridge, optional Harness/advanced operator, maybe generalized modules; each needs independent buyer/value/WTP. | governance required for Core but cannot be sold separately. | MOD-100, HZN | platform business path |
| BUS-060 | Was ist der generalisierbare Platform Contract? | reuse identity/authority/execution/validation/skill/model/harness primitives; preserve Consultry-specific responsibilities/objects in blueprint. | generalization forces generic terms that harm product clarity. | D-001, Domain Canon | technical/platform map |
| BUS-070 | Welche Core Function remains valuable without agents? | responsibility/context/handoff/decision/evidence/outcome continuity should create value even with human/manual work. | if no agent, product becomes duplicate task tracker. | CORE-120 | OS thesis falsifier |
| BUS-080 | Was bedeutet „improving the raw model“ korrekt? | improve assembled work system via context, tools, memory, skills, validation and routing; do not claim weight/model improvement unless actually trained. | later fine-tuning/distillation changes model weights. | HAI/EXE/MOD | pitch wording |
| BUS-090 | Welche Erwartungen soll „OS-like“ nicht auslösen? | not replacing every CRM/PSA/PM/DMS/finance system; not autonomous firm control; not general computer OS. | document-first tenant uses Consultry as more native record owner. | CORE-020/100 | category narrative |
| BUS-100 | Welche Pitch-Layers werden getrennt? | Whole Product Vision, demonstrated proof, current MVP slice, later horizons and external evidence/claims. | demo shows named people matching while MVP policy is aggregated. | ACC/HZN | deck/video reconciliation |
| BUS-110 | Welche Claim Truth Contract gilt für Pitch/Video? | each claim links to decision, external evidence or product-effect evidence with scope/limitation; fictional scenario labeled. | strong narrative needs future-state sequence. | ACC-140 | reconciliation task |
| BUS-120 | Welche aktuelle Pitch Contradictions müssen entfernt werden? | old ICP, equal heroes, O2Concept boundary, People Scores, delivery-before/after-PMF, autonomous transitions and unsupported outcomes. | intentional future vision shown as current product. | BUS-100/110 | source reconciliation |

## 22. Research- und Experimentfragen, die nicht intern ratifiziert werden können

| ID | Empirische Frage | Empfohlene Methode | Failure Evidence |
|---|---|---|---|
| RES-010 | Welche Role-Compression Episodes sind je Archetyp häufig und materiell? | critical-incident interviews plus artifact tracing | rare, low consequence or adequately handled today |
| RES-020 | Welcher Entry Job carries WTP and budget? | last-time interviews, budget/procurement reconstruction, paid pilot behavior | enthusiasm without budget/priority |
| RES-030 | Schlägt Consultry Generic Chat im Backbone-Fall? | same-task Human/current process vs chat vs structured Consultry prototype | no net gain on continuity/quality/outcome |
| RES-040 | Verbessert Blind-Spot Coverage Entscheidungen? | seeded cases plus live shadow mode, independent reviewers | high false positives, over-alignment or review burden |
| RES-050 | Senkt Knowledge Bridge Senior Load? | request-to-resolution tracing, expert time and repeated resolution use | more interrupts/review than current network |
| RES-060 | Verbessert Handoff den Empfänger-Outcome? | sender/receiver time, context requests, rework and accepted state | sender-only efficiency |
| RES-070 | Erzeugt governed Reuse actual value? | multi-case productization cohort and observed applications | no repeat fit, heavy adaptation or quality loss |
| RES-080 | Welche Workflow Topology ist zuverlässig? | simple/single-agent/multi-agent comparison with repeated runs | graph/agents add cost/failure without quality gain |
| RES-090 | Welche Validation verbessert Net Outcome? | independent criteria, counterevidence, review cost and overrides | false assurance or bypass due to burden |
| RES-100 | Ist Model Bridge separat kaufbar? | buyer interviews, governance episodes and package/WTP test | technical preference without buyer/value/budget |
| RES-110 | Ist Boutique Implementation wirtschaftlich tragfähig? | concierge pilots measuring service/admin effort and retained use | support cost/admin load exceeds ACV/value |
| RES-120 | Welche Journey/Proof Kombination predicts retention? | repeated naturally occurring jobs and continuation/budget signal | one-off wow without repeat value |

## 23. Definition of Done für diese Fragenbank

Die Bank ist nicht „abgearbeitet“, wenn alle Fragen verbal beantwortet wurden. Eine Challenge ist erst geschlossen, wenn:

1. genau eine klare Decision pro Step im zugehörigen Wayfinder-Ticket steht;
2. Begriffe und Grenzen in Canon/Glossary aktualisiert sind;
3. Downstream Blocker/Dependencies angepasst sind;
4. offene Wirkungs-/Market Claims als Discovery oder Experiment erhalten bleiben;
5. Gegenfall, Exception und Recovery in der Decision enthalten sind;
6. keine technische Umsetzung die fachliche Antwort ersetzt.

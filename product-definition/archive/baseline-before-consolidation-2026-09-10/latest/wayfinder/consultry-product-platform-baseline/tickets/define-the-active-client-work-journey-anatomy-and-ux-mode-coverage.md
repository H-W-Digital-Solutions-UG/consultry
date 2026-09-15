---
title: Define the Active Client Work journey anatomy and UX-mode coverage
status: open
order: 49
labels:
  - wayfinder:grilling
interaction: HITL
parent: Ratify the Consultry Product and Business-Domain Baseline
assignee: codex
blocked_by:
  - Define the canonical user-journey portfolio
  - Ratify the consulting-work primitive and composable UX grammar
  - Specify the Active Project/Delivery Blind-Spot and Rebuttal-Simulation Reference Thread
---

# Define the Active Client Work journey anatomy and UX-mode coverage

## Question

Wie wird die vollständige Journey Family `Active Client Work to Reviewed/Accepted Outcome or Responsible Closure` in reale, verantwortete Arbeitsfortschritte und flexible UX-Modi zerlegt, ohne sie auf den Blind-Spot-Referenzfall, Artefakterstellung, ein lineares Delivery-Playbook oder ein neues Project-Management-System zu reduzieren?

## Required output

- fachliche Einheit des verantworteten Fortschritts zwischen gesamtem Engagement, bounded Work Episode und einzelner Aufgabe;
- reale Trigger-, Job-, Outcome- und Closure-Varianten über Analyse, Beratung, Artefaktarbeit, Client Interaction, Koordination, Implementation/Adoption, Challenge/Assurance, Recovery und Learning;
- notwendige Entry-, Re-entry-, Alternate-, Reopen- und Handoff-Pfade;
- Boutique- und Growing-Consultancy-Variation über Responsibility und Handoffs statt getrennte Journeys;
- Abbildung auf die ratifizierten sieben komponierbaren UX-Modi ohne Pflichtsequenz;
- sichtbare Product-/UX-Obligations und bewusst Mock-/PoC-offene Screen-, Interaction- und Automation-Hypothesen.

Dieses Ticket definiert Journey-Anatomie und UX-Coverage. Es ratifiziert weder konkrete Screens noch Demo-Szenen, technische Workflows, Agent-/Graph-Topologie oder ein persistentes neues Domain Object.

## Working decision 1 — Bounded Client Work Episode

Die kanonische Analyseeinheit für JF-2 ist eine `bounded Client Work Episode`: ein für die verantwortliche Person erkennbarer Arbeitsfortschritt innerhalb eines aktiven Engagement-Kontexts. Sie liegt zwischen dem gesamten Project/Engagement und einzelnen Tasks oder Tool-Actions.

Eine Episode beginnt, wenn ein konkreter Job, ein Problem, Commitment, Review-, Entscheidungs-, Interaktions- oder Wirkungsbedarf verantwortete Client Work erfordert. Sie kann Analyse, Beratung, Workshop, Artefaktarbeit, Client Interaction, Koordination, Implementation/Adoption, Challenge oder Recovery enthalten. Sie endet mit einem verantwortbar nutzbaren Ergebnis, akzeptierten Handoff, einer bewussten Revision beziehungsweise einem begründeten Hold, Stop oder Closure; materiell neue Evidence kann sie mit erhaltener Historie erneut öffnen.

Das Project beziehungsweise Engagement liefert den länger laufenden Kontext und seine Commitments. Tasks strukturieren gegebenenfalls die Ausführung. Die bounded Client Work Episode trägt den für Nutzer erkennbaren Fortschritt und Outcome, ohne ein neues Project-Management-System oder eine Artifact-only-Perspektive zu erzeugen.

`Bounded Client Work Episode` ist vorerst eine Journey-Analyseeinheit und kein automatisch zu persistierendes Domain Object, keine technische Workflow-Instanz und kein vorgeschriebenes UI-Label.

Status: im HITL-Grill am 06.08.2026 ratifiziert.

## Research checkpoint — IT and process consulting work, deliverable and progress semantics

The target-market check in [JF-2 Work, Deliverable and Progress Semantics for IT and Process Consulting](../../../research/jf2-it-process-consulting-outcome-semantics-2026-08.md) finds that the provisional flat Outcome-Shape list mixes four levels and that Client Progress alone is not the complete episode anatomy.

The recommended core is a three-coordinate relation:

1. `Consulting Work` — the relevant composition of the already ratified work primitives;
2. `Deliverable / Work Result` — what the work makes available, changes or leaves behind, described by function and representation;
3. `Client Progress` — what becomes more true or possible for the client.

The proposed Work-Result functions are:

1. Evidence or assessment;
2. Recommendation or decision support;
3. Design or specification;
4. Plan, coordination or control;
5. Implemented solution or change increment;
6. Assurance or acceptance evidence;
7. Enablement or continuity asset.

The required trace is: `which concrete work produced or changed which work result, for which intended client progress, on what evidence, and with whose acceptance?`

The previous level finding remains valid:

- client progress;
- consulting/helping mode;
- materialisation/evidence;
- episode disposition and recovery/continuity.

Across BDU IT and organisational/process consulting fields, Turner consulting purposes, Schein process consultation, IIBA business analysis, TOGAF, O*NET system/management analysis and process-management research, five non-exclusive `Client Progress Outcomes` cover the material episode results:

1. `Clarity & Framing`;
2. `Direction & Commitment`;
3. `Solution Readiness`;
4. `Change & Operational Readiness`;
5. `Value & Capability`.

`Deliverable / Artifact` is recommended as a materialisation/evidence carrier, `Corrected / Recovered Work` as a route, and `Accepted Handoff / Closure` as an episode disposition. Expert, advisory/diagnostic, facilitative/process-consulting, co-implementation and independent-assurance work describe how help and ownership are configured, not separate outcomes.

Status: evidence synthesis corrected after HITL challenge on 06.08.2026; incorporated into Working Decision 2 below.

## Working decision 2 — Adaptive Work–Result–Progress Spine

Every bounded `Client Work Episode` is analyzed through three related coordinates:

1. `Consulting Work` — the relevant composition of the ratified consulting-work primitives;
2. `Deliverable / Work Result` — what the work makes available, changes or leaves behind, described by function and representation;
3. `Client Progress` — what becomes more true or possible for the client, expressed through one primary and optional secondary Progress Outcomes.

The canonical trace question is:

> Which concrete work produced or changed which work result, for which intended client progress, on what evidence, and with whose acceptance?

This spine is a stable analysis and learning scaffold, not a universal workflow, consulting methodology or fixed screen sequence. Concrete workflows remain hypotheses and are progressively specialized through:

1. realistic target-consultancy cases and jobs;
2. deliberately low-fidelity journey and interaction hypotheses;
3. Mock/UI testing with representative users;
4. later PoC and instrumented practical use;
5. evidence-led versioning by consulting domain, work situation and responsibility pattern.

User testing may change workflow composition, order, terminology, branching, handoffs and representation. A generic workflow must not be specialized merely because a taxonomy suggests it; specialization requires repeated or materially distinct user evidence. Conversely, proven domain-specific variation must not be suppressed to preserve superficial uniformity.

The spine does not yet ratify detailed flows, screens, workflow states, automation, agent/graph topology or a persistent technical schema.

Status: ratified in the HITL grill on 06.08.2026, including progressive specialization through real user testing as an explicit condition.

## Working decision 3 — Outcome Testing is part of the work definition

`Done` is not established by completing a Task, producing an Artifact or publishing a Plan. JF-2 requires explicit Outcome Testing for the applicable levels of work:

- **Task contribution:** Did the performed work create the intended contribution, at sufficient quality, without unacceptable avoidable rework?
- **Artifact / Work Result fitness:** Is the result evidence-based, aligned and fit for its intended audience, decision, delivery step or operational use?
- **Plan viability and use:** Is the Plan sufficiently owned, feasible and actionable, and does later execution evidence support, revise or invalidate its assumptions?
- **Client Progress / Episode outcome:** Did the Task, Artifact or Plan actually enable the intended decision, action, change, adoption, capability or measurable effect?

The levels must remain traceable but must not be collapsed. A high-quality Artifact can fail to create progress; an accepted Plan can fail in execution; a Task can be completed without contributing materially to either. Conversely, not every episode can immediately prove a long-term client effect, so the test must distinguish the evidence available now from the evidence that requires later observation.

Detailed test methods, thresholds and metrics remain case-specific hypotheses to be refined through Mock, PoC and real user testing. They are not globally pre-ratified workflow gates.

Status: principle ratified in the HITL grill on 06.08.2026; exact Outcome Test Chain and evidence horizons remain the next decision.

## Working decision 4 — Agent Goal Achievement is outcome-bound

Outcome Testing is the functional basis for Agent goal definition, planning, evaluation and controlled iteration. An Agent is not successful because it executed a Task, exhausted a Plan or emitted an Artifact. Its contribution is successful only to the extent supported by the applicable Outcome Tests across Task contribution, Work-Result fitness, Plan viability/use and Client Progress.

Every later Agent or engineered Harness workflow must therefore receive an `Outcome-bound Goal Contract` derived from the bounded Client Work Episode. At Product level, this contract must make explicit:

- the intended Task contribution and Work Result;
- the client progress the contribution is meant to enable;
- evidence and acceptance available now versus delayed evidence that requires later observation;
- constraints, uncertainty, authority and human-owned decisions/effects;
- conditions for continue, revise/replan, seek evidence or expertise, hand off/escalate, hold or stop.

Agents must optimize for verified responsible progress rather than activity volume, artifact production or self-declared completion. They may use immediate proxy evidence when long-horizon outcomes are not yet observable, but they must preserve that limitation and may not report the downstream client outcome as achieved. An Agent-generated plan, evaluation or confidence statement cannot certify itself: required source evidence, independent validation and human acceptance remain separate according to the case and risk.

Outcome-test results later provide the learning signal for refining Agent plans, Skills, workflow composition and specialization. Such refinement remains versioned and governed; it cannot silently mutate business rules, authority, validation requirements or accepted Skill definitions.

This decision establishes a Product requirement for the later Agent/Skill/Graph/Harness/Model-Bridge technical path. It does not yet choose an Agent architecture, evaluator topology, graph loop, reward function, runtime or persistence model.

Status: outcome-bound Agent goal achievement ratified as a Product principle in the HITL grill on 06.08.2026; the exact Goal Contract, attribution/evidence policy and evaluator responsibilities remain the next decision.

## Working decision 5 — Testability and claimability must be explicit

Every material Task, Artifact / Work Result, Plan and Client-Progress claim must distinguish:

1. **Testability:** whether and how the claim can be tested;
2. **Evidence state:** whether it is untested, supported/verified, refuted/failed, inconclusive or awaiting later evidence;
3. **Evidence horizon:** whether evidence is available now, only during use/execution or after a later outcome window;
4. **Attribution:** whether the observed result is directly attributable, a partial contribution or only an associated signal;
5. **Claim ceiling:** the strongest statement an Agent or user may responsibly make from the available evidence.

`Unverifiable` must not be treated as synonymous with `worthless`, `failed` or `untestable`. Strategic quality, clarity, plausibility or usefulness may require accountable human judgment rather than deterministic verification. A delayed outcome may be testable but not yet observable. A proxy may be measurable without verifying the underlying causal outcome. A genuinely untestable or unfalsifiable claim lacks an observable criterion, evidence path, time horizon or responsible judgment basis and cannot be declared achieved.

The distinction applies differently across the work chain:

- **Artifact:** intrinsic properties may be directly verifiable while fitness for use requires empirical or human evaluation and downstream impact remains deferred or attribution-limited.
- **Plan:** internal coherence and explicit ownership may be checked now; viability is challenged or simulated; execution and realized outcomes require later evidence.
- **Client Outcome:** observation may be possible while causal attribution to one Task, Artifact, Plan or Agent contribution remains partial or unknown.

For Agents, an untestable goal cannot become a normal completion condition. It must be reformulated into a testable contribution or proxy with an explicit limitation, routed to responsible judgment, or retained as an unresolved hypothesis. The Agent's achievement claim may never exceed the strongest independently supported testability/evidence level.

Status: the need for explicit testability, unverifiability/untestability and claim ceilings was ratified in the HITL grill on 06.08.2026; the exact Testability Profile classes and labels remain the next decision.

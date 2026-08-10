---
title: Define the Consultry Harness Integration Boundary
status: closed
order: 57
labels:
  - wayfinder:grilling
interaction: HITL
parent: Ratify the Consultry Product and Business-Domain Baseline
assignee: codex
blocked_by:
  - Reject a chat-only product and make the harness optional
  - Separate the Core Skill Graph from capability evidence
  - Place the Three-Slice Mock UI Demo Gate Before the Technical PoC
closed: 2026-08-05
---

# Define the Consultry Harness Integration Boundary

## Question

Benötigt Consultry als Teil des Platform Kernel einen gemeinsamen Harness Integration Contract, aus dem für unterschiedliche Contextual Tasks und Slices gezielt konfigurierte beziehungsweise engineerbare Harnesses entstehen können, und welche Verpflichtungen müssen dabei vom konkreten Open-Source-Harness, Agent Framework oder Runtime-Stack unabhängig bleiben?

## Boundary under investigation

- Product obligation versus Technical-Wayfinder implementation choice;
- gemeinsamer Kernel versus separate Harness-Forks;
- Guided App als Default und Harness-Nutzung als optionaler Client;
- Task-/Skill-, Model-Bridge-, Tool-, Data-, Policy-, Authority-, Validation-, Recovery- und Provenance-Contracts;
- Extension/adapter strategy for open-source-oriented foundations such as Hermes Agent or Pi;
- Three-Slice Technical PoC value, replacement cost, security boundary and operational complexity.

## Existing Consultry baseline

Der lokale Technical-Handoff-Stand enthält bereits wesentliche Bausteine eines solchen Frameworks:

- Die `Consultry Engine` kompiliert job-scoped `HarnessPack`s aus Context, Memory, Tools, Connector Grants, Policies, Model Requirements und Output Contract.
- `HarnessProfileVersion`, `HarnessSession`, kurzlebige `CapabilityLease`s und `ResultBundle`/`ResultCandidate` trennen Konfiguration, Ausführung und Ergebnis.
- Guided App und optionales Harness App sollen dieselben Cases, Sources, Authority-, Validation-, Recovery- und Outcome-Contracts verwenden.
- Ein Harness darf weder tenantweit frei suchen noch direkt Domain State persistieren oder Business Authority erzeugen; Effects laufen zurück über Policy, Validation, Human Decision und Effect Admission.
- Hermes war bereits als austauschbare initiale Referenzimplementierung gedacht, nicht als Product- oder Authority-Owner.

Die neue Frage ist daher nicht, ob Consultry irgendeinen Harness verwendet, sondern ob aus diesen vorhandenen Grenzen ein expliziter gemeinsamer Framework-/Adapter-Contract für mehrere engineered Harness Profiles wird.

## Current open-source findings

### Hermes Agent

[Hermes Agent](https://github.com/NousResearch/hermes-agent) ist MIT-lizenziert und bietet inzwischen einen umfangreichen Agent Loop mit Provider Resolution, Prompt-/Context-Assembly, Compression, Sessions, Tool Registry und zahlreichen Runtime Backends. Die offizielle [Architekturdokumentation](https://hermes-agent.nousresearch.com/docs/developer-guide/architecture) beschreibt den zentralen `AIAgent`, Tool Dispatch, Tool Registry, Session Storage sowie lokale und isolierte Backends. [Tools/Toolsets](https://hermes-agent.nousresearch.com/docs/user-guide/features/tools), [Skills](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills), [MCP](https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp) und die [Security-Grenzen](https://hermes-agent.nousresearch.com/docs/user-guide/security) liefern viel wiederverwendbare Funktionalität.

Hermes ist damit ein starker batteries-included Referenzruntime- und Lernkandidat. Seine User-/Session-/Tool-/Approval-Semantik ist aber nicht automatisch Consultrys tenant-, task-, source-, authority- und effect-scoped Control Plane. Insbesondere lokale Agent-Approvals oder Containergrenzen ersetzen keine Business Authority, keine Model-Bridge-Policy und keinen Domain Effect Admission Contract.

### Pi

[Pi](https://github.com/earendil-works/pi) ist ebenfalls MIT-lizenziert und verfolgt bewusst einen kleinen, stark erweiterbaren Core. Die offizielle [Coding-Agent-Dokumentation](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/README.md) beschreibt Skills, Extensions, Packages, SDK sowie JSON-/RPC-Modi. Über [SDK](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/sdk.md) und [RPC](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/rpc.md) lässt sich Pi gut einbetten; Extensions können Tools, Events, UI und Session-Verhalten ergänzen.

Pi ist deshalb ein starker Kandidat für einen schlanken lokalen/technischen Harness Client oder eine eingebettete Adapterbasis. Seine Offenheit ist zugleich die Grenze: Extensions und Packages können mit vollen Systemrechten laufen; Permissions, Isolation, MCP und andere Controls sind bewusst nicht umfassend im Core vorgegeben. Diese Sicherheits- und Governance-Grenzen muss Consultry außerhalb beziehungsweise um Pi herum erzwingen.

## Candidate to challenge

Consultry benötigt einen **runtime-neutralen Consultry Harness Integration Contract** im Platform Kernel, aber kein eigenes allgemeines Framework oder Agent Framework und keine separaten Forks je Consultancy oder Slice.

Der Kernel besitzt nur die gemeinsame, produktkritische Ebene:

1. versionierte `Harness Profile`-/Assembly-Definition je Contextual Task oder Slice;
2. immutable job-scoped `HarnessPack` mit Context, Memory, Skills/Instructions, erlaubten Tools/Connectors, Model-Bridge-Requirements, Policies, Budgets, Loop-/Stop-/Recovery-Regeln und Output Contract;
3. Runtime-/Adapter-Schnittstelle für Start, Events, Pause/Resume/Cancel, Result Candidates, Failure und Recovery;
4. Capability-/Credential-/Network-/Data- und Tool-Grenzen;
5. gemeinsame Run Provenance, Observability und Evaluation;
6. ausschließlich `EffectRequest`s zurück an Consultry—keine direkten Domain Writes oder selbst erzeugte Business Authority;
7. ein Client-/Event-Protokoll, das Guided App, optionales Harness App und technische Operator-Oberflächen auf denselben Runs arbeiten lässt.

Darauf werden **engineered Harness Profiles** für die drei Haupt-Slices und später weitere Consultancy Jobs gebaut. Hermes, Pi, ein deterministischer Worker oder eine verwaltete Sandbox sind austauschbare Runtime Adapter beziehungsweise Referenzimplementierungen. Ein Fork ist nur gerechtfertigt, wenn Adapter/Extension/SDK/RPC die benötigte Isolation oder Lifecycle-Semantik nachweislich nicht liefern.

Für den Three-Slice Technical PoC wird nur die kleinste produktspezifische Integration Seam gebaut, die alle drei Slices tatsächlich benötigen. Empfehlung: eine primäre Open-Source-Runtime integrieren und die Austauschbarkeit mit einem zweiten dünnen Adapter-/Contract-Test belegen—nicht zwei vollständige Harness-Stacks produktionsreif bauen.

## Explicit non-decisions

- Hermes versus Pi als primäre PoC-Runtime;
- Python versus TypeScript für den Framework-Kern;
- Prozess-, Container-, VM-, Local-, Cloud- oder Durable-Workflow-Topologie;
- konkretes Agent Framework, Multi-Agent-Muster oder Graph Orchestrator;
- Plugin-/Package-Distribution und Lizenz-/Update-Policy im Produktionsbetrieb;
- technische Schemas, APIs, Eventformate und Deployment.

## Resolution comment

Ja, unter einer verbindlichen MVP-Scope-Bedingung: Consultry übernimmt einen runtime-neutralen `Consultry Harness Integration Contract` in den Platform Kernel, baut im Three-Slice Technical PoC beziehungsweise ersten Full-Backend-MVP aber nur die kleinste produktspezifische Integration Seam, die die drei Haupt-Slices tatsächlich benötigen.

Der gemeinsame Contract trennt:

1. versionierte, task-/slice-spezifische engineered `Harness Profile`s;
2. job-scoped Context-, Memory-, Skill-/Instruction-, Tool-/Connector-, Model-Bridge-, Policy-, Budget-, Loop-/Stop-/Recovery- und Output-Verpflichtungen;
3. Runtime Adapter und ihre technische Ausführung;
4. Result Candidates, Provenance und Evaluation;
5. Business Authority, Human Decision, Validation und Effect Admission außerhalb des Harness.

Für den Three-Slice Technical PoC gilt der Machbarkeitsnachweis:

- alle drei Slice Profiles laufen über denselben minimalen Integration Contract;
- genau eine primäre Open-Source-Runtime wird ausreichend integriert;
- ein Fake Adapter oder dünner zweiter Adapter-/Conformance-Test belegt Austauschbarkeit, ohne einen zweiten produktionsreifen Stack zu bauen;
- Model-/Provider-Zugriff bleibt über den Model-Bridge-Contract kontrollierbar;
- Tools, Daten, Credentials, Network und Budgets bleiben job-scoped;
- Runs, Tool-/Model-Events, Result Candidates, Failures und Recovery sind beobachtbar;
- der Harness kann weder direkt Domain State schreiben noch Business Authority, Approval oder External Effect erzeugen.

Erst wenn dieser Nachweis mit vertretbarer zusätzlicher Komplexität gelingt, wird die minimale Integration Seam verbindlicher Full-Backend-MVP-Bestandteil. Scheitert er, darf der PoC mit einem einzelnen intern gekapselten Runtime Adapter fortfahren; ein allgemeiner Multi-Runtime-Anspruch wird dann verschoben und blockiert weder Mock UI noch den fachlichen Product Proof.

Ausdrücklich nicht im ersten MVP enthalten sind ein allgemeines Framework oder Agent Framework, ein öffentlicher Plugin-/Harness-Marketplace, mehrere produktionsreife Runtime-Stacks, Forks pro Consultancy oder Slice, autonome Self-Modification, tenantweite freie Tool-/Datennutzung oder eine vollständige lokale/Cloud-/Durable-/Multi-Agent-Runtime-Plattform.

Hermes und Pi bleiben Referenz-, Lern- und Adapterkandidaten. Die Auswahl der primären PoC-Runtime, Sprache, Prozesse, Sandboxes, APIs, Schemas, Agent-/Graph-Topologie und Deployment bleibt Technical Wayfinder.

Status: im HITL-Grill am 05.08.2026 mit expliziter MVP-Machbarkeitsbedingung ratifiziert.

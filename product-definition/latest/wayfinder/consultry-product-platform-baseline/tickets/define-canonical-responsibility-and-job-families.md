---
title: Define Consultancy Jobs and Responsibility Coverage
status: closed
order: 42
labels:
  - wayfinder:grilling
interaction: HITL
parent: Ratify the Consultry Product and Business-Domain Baseline
assignee: codex
blocked_by:
  - Define the Product Actor Ontology
closed: 2026-08-03
---

# Define Consultancy Jobs and Responsibility Coverage

## Question

Welche wiederkehrenden Consultancy Jobs, Entscheidungen sowie Responsibility- und Handoff-Muster muss der funktionale Product Scope über beide First-Class-Archetypen hinweg abdecken, ohne eine Marketing-/Persona-Zuschneidung als technische Rollen- oder Modulstruktur festzuschreiben?

## Required output for the Whole-Consultancy Coverage Gate

Ein kompakter `Business Situation and Job Coverage Ledger` prüft die Breite über sechs Business Coverage Views: `Win & Commit Client Work`, `Deliver & Assure Client Outcomes`, `Use, Learn & Reuse Expertise`, `Mobilize People & Develop Capability`, `Operate the Consultancy` sowie `Steer the Firm & Portfolio`. `Adopt & Evolve Consultry` bleibt eine getrennte Enabling Lane und kein gleichwertiger Business-Value-Proof.

Jeder Anchor Trace enthält mindestens:

`Business Situation/Trigger -> Recurring Job/Progress -> accountable Responsibility -> Decision/Handoff -> Work Artifact/Business Object -> Missing Function/Blind Spot -> Required Product Behavior -> relevante Source/Authority/Rights/Recovery Flags -> Archetype Variation -> Evidence Status -> Reference Thread/Follow-up`

`Acceptance Evidence` wird hier nur als vorläufiger `Acceptance Intent` beziehungsweise beobachtbare Proof-Frage markiert. Baseline, Comparator, Threshold, Stop-Kriterium und Horizon werden im späteren Acceptance- und Horizon-Pass ratifiziert.

Coverage-complete bedeutet, dass kein wichtiger Product-Vision-Bereich still verschwindet. Es bedeutet noch nicht, dass Priorität, Product Effect, Zahlungsbereitschaft oder alle Journey-Schritte validiert sind.

## Marketing+ role lens to detail later

Partner/Owner/Managing Director; Account/Business Development/Commercial Lead; Engagement/Project/Delivery Lead; Consultant/Expert; Practice/Knowledge/Offer/Quality Lead; Team/Staffing/People/Capability Lead; Finance/Operations/Backoffice; sowie Client-seitige und externe Reviewer als fallbezogene Participations.

Diese Rollenmatrix bleibt eine vorläufige Marketing-, Discovery-, Sales-, Demo- und gegebenenfalls UX-Narrativsicht. Ihre genauere Zuschneidung wird später bearbeitet und ist weder technische Product-Invariante noch fest codierte Rollen-, Permission-, Workspace- oder Modulstruktur. Die fachliche Scope-Arbeit konzentriert sich auf Jobs, Entscheidungen, Ownership, Handoffs, Missing Functions, Blind Spots und Required Product Behavior. Buyer-/Champion-Prinzip und Outcome-Hierarchie werden nicht erneut geöffnet.

## Working decisions

### 2026-08-03 — Functional and business-technical scope traceability

Der funktionale und business-technische Product Scope wird nicht aus Mermaid-Diagrammen, Modulen, Workspaces oder Feature-Listen abgeleitet. Verbindlich ist folgende Traceability Spine:

`validiertes Problem, Trigger oder Blind Spot -> accountable Responsibility + Job -> bereichsübergreifender Business Flow/Handoff -> Required Product Behavior -> Acceptance Evidence`

- `Functional Product Scope` bezeichnet die Probleme, Responsibilities, Jobs, Entscheidungen, Flows, Handoffs und Outcomes der Target Consultancy, für die Consultry eine definierte Unterstützungsverpflichtung übernimmt.
- `Business-Technical Product Scope` beschreibt das implementationsunabhängige, von außen beobachtbare Produktverhalten einschließlich Business Objects, States, Evidence sowie Human-Decision-, Authority-, Source- und Recovery-Grenzen.
- Ein minimales Scope Statement folgt der Form: Wenn eine definierte Situation oder ein Trigger eintritt, muss Consultry die verantwortete Arbeit über die relevanten Responsibilities und Handoffs durch beobachtbares Produktverhalten unterstützen, während menschliche Entscheidung, Authority und autoritative Quellen gewahrt bleiben; die Erfüllung wird durch fachliche Evidence beziehungsweise Outcome nachgewiesen.
- Capability, Feature, Modul, Workspace, App, Agent, Skill, Graph, Harness, Model Bridge und Integration sind mögliche spätere Realisierungen oder Bündelungen des Required Product Behavior; sie definieren den fachlichen Scope nicht selbst.
- Ein Rollout-Horizont wählt Coverage und Tiefe der Umsetzung, ohne die langfristige Product Boundary neu zu definieren.

Diese Scope-Regel ersetzt ausdrücklich nicht den bereits ratifizierten fachlichen Vier-Schnitt aus `ResponsibilityAssignment`, `CaseParticipation`, `AuthorityGrant` und technischer Autorisierung. Dieser Vier-Schnitt qualifiziert Actors, Entscheidungen und Wirkungen innerhalb der Scope Traces.

Status: im HITL-Grill ratifiziert; im kanonischen `CONTEXT.md` gesichert.

### 2026-08-03 — Evidence-gated route impact

Dieses Ticket bleibt der breadth-first Coverage Gate und erzeugt keine weitere Responsibility-Family- oder Rollen-Taxonomie. Nach seinem Abschluss wird das Journey Portfolio vorgezogen; danach werden Opportunity-to-Project, Active Project/Delivery Blind Spot and Rebuttal Simulation und Knowledge/Reuse plus Corporate Artifact Alignment als drei getrennte Reference Threads modelliert. Vollständige Authority-, Operating-, Human-AI-, Core-, Module- und Graph-Verträge werden erst an diesen Threads konvergiert.

Die laufende Krallmann-Commitment-Arbeit ist paralleler Commercial-Evidence-Input und blockiert weder dieses Coverage Gate noch den anschließenden Low-Fidelity-Prototype-Pfad.

Status: Route-Auswirkung durch [Ratify the evidence-gated Product-to-Prototype route](ratify-the-evidence-gated-product-to-prototype-route.md) ratifiziert; die damals offene Coverage-Resolution wurde mit dem Abschluss dieses Tickets geschlossen.

### 2026-08-03 — Real-role tailoring is a Marketing+ lens, not a technical invariant

Der zuvor vorgeschlagene abstrakte Aufnahme-Test für Responsibility Families bleibt verworfen. Die anschließende rollenbasierte Korrektur wurde jedoch ebenfalls begrenzt: Reale Rollen sind wichtig für Marketing, Discovery, Sales, Demo, Journey-Kommunikation und gegebenenfalls UX-Defaults, ihre genaue Siebener-Zuschneidung wird jetzt nicht weiter ausdefiniert und erzeugt keine technische Taxonomie.

Die verbindliche Ableitungsrichtung lautet stattdessen:

`konkrete Business-Situation mit Problem, Trigger oder Blind Spot -> wiederkehrender Job und Entscheidung -> verantwortete Ownership und Handoffs -> Required Product Behavior -> Acceptance Evidence`

- Reale Rollen und Jobtitel dürfen die Situationen verständlich machen und archetypspezifische Probleme, Rollenkompression sowie Cross-Role-Blind-Spots erklären.
- Die technische Ableitung darf die sieben Marketing-Rollen weder als feste Entity Types noch als Rollen-, Permission-, Workspace- oder Modulstruktur voraussetzen.
- Der stabile fachliche Kern bleibt konfigurierbar über Person, Responsibility Assignment, Case Participation, Authority Grant, Job/Case sowie Business Objects und Flows.
- Eine Person darf mehrere Responsibility Assignments und Case Participations tragen; ihre lokale Rollenbezeichnung bleibt Mapping beziehungsweise Projektion.
- Role-/Persona-Details werden später in der Marketing-/Persona-/Journey-Schärfung bearbeitet, nicht in diesem fachlichen Scope-Schritt.

Status: im HITL-Grill revidiert und ratifiziert; Ticketfrage und Scope Trace entsprechend begrenzt und im kanonischen `CONTEXT.md` gesichert.

### 2026-08-03 — Corporate Artifact Alignment is a cross-cutting product obligation

`Corporate Artifact Alignment` ist ein querschnittliches `Required Product Behavior` für synchronisierte und neu erstellte Arbeitsartefakte wie Proposals, Konzepte, Decks, Reports, Deliverables, Methoden, Templates und Pages. Es ist weder eine eigene Responsibility Family noch auf ein CMS-, Proposal- oder Formatierungsmodul begrenzt.

Drei Alignment-Entscheidungen bleiben fachlich getrennt:

1. `Knowledge Alignment` prüft Aktualität, Evidenz und semantische Konsistenz mit dem anwendbaren freigegebenen Wissenskorpus, seiner Terminologie, Methoden, Offers und Proofs.
2. `Brand and Corporate Design Alignment` prüft Tonalität, Sprache, Struktur, Templates und visuelle Designregeln.
3. `Governance and Release Alignment` prüft Vertraulichkeit, IP-/Nutzungsrechte, Quellen-, Freigabe- und Externalisierungsgrenzen.

Keine der drei Prüfungen impliziert eine andere. Ein synchronisiertes Artefakt oder generierter Entwurf wird nicht automatisch zur Wissenswahrheit. Alignment darf eine vorgeschlagene beziehungsweise akzeptierte Artefaktversion erzeugen, aber weder eine autoritative Quelle stillschweigend überschreiben noch ungeprüft in den Wissenskorpus zurückschreiben. Akzeptiertes Lernen benötigt eine getrennte verantwortete Entscheidung.

Der AI-native Brand & Page CMS Candidate ist nur eine mögliche spätere Publishing-Projektion dieser breiteren Produktverpflichtung. Die verantwortliche Family hängt vom konkreten Artefakt und Business Flow ab; Professional/Expert Work, Knowledge/Method/Reuse, Commercial, Offer Portfolio und Governance können unterschiedliche Verantwortung beziehungsweise Participation tragen.

Status: im HITL-Grill ratifiziert; im kanonischen `CONTEXT.md` gesichert.

## Resolution comment

Ja. Der Whole-Consultancy Coverage Gate verwendet sechs miteinander verbundene Business Coverage Views plus eine getrennte Enabling Lane:

1. `Win & Commit Client Work`
2. `Deliver & Assure Client Outcomes`
3. `Use, Learn & Reuse Expertise`
4. `Mobilize People & Develop Capability`
5. `Operate the Consultancy`
6. `Steer the Firm & Portfolio`
7. `Adopt & Evolve Consultry` als Enabling Lane, nicht als siebten gleichwertigen Business-Value-Stream

Die Views sind breadth-first Navigationshilfen und keine Rollen-, Modul-, Workspace-, Bounded-Context- oder technische Taxonomie. Jede Anchor Scope Trace erhält genau eine primäre View nach dem veränderten Business Progress beziehungsweise Outcome; Beziehungen zu weiteren Views werden als Handoffs erfasst und nicht als duplizierter Scope.

`Personal/Expert Work and Artifacts` ist eine horizontale Arbeits- und Objektlinse. Corporate Artifact Alignment, Knowledge-to-Action, Blind-Spot/Rebuttal, Responsibility/Authority, Source/Evidence/Rights, Human-AI, Recovery, External Effects und Archetype Variation sind Cross-Cutting Trace Dimensions. Sie begründen keine eigenen Coverage Views.

`Operate the Consultancy` und `Steer the Firm & Portfolio` bleiben getrennt: Operations erzeugt beziehungsweise vervollständigt operative und wirtschaftliche Wahrheit/Readiness; Steering trifft daraus Prioritäts-, Allokations-, Investitions- und Stop/Go-Entscheidungen. Bei der Boutique können dieselben Personen mehrere Verantwortungen tragen, ohne dass Responsibility-, Authority- oder SoD-Grenzen verschwinden; bei der Growing Consultancy werden dieselben Jobs häufiger zu expliziten Cross-Role-/System-Handoffs.

Der ratifizierte [Whole-Consultancy Coverage Ledger](../../../Consultry-Whole-Consultancy-Coverage-Ledger-v0.1.md) enthält zwölf Anchor Scope Traces, die beide Archetypen, alle sechs Views, die Enabling Lane, Cross-View-Handoffs, Boundary Flags, Evidence Status, Acceptance Intent und zuständige Follow-up-Tickets abdecken.

`Coverage-complete` bedeutet, dass kein wesentlicher Product-Vision-Bereich still verschwindet. Es entscheidet weder Priorität oder Product Effect noch detaillierte Journeys, Features, quantitative Acceptance, Horizonte oder technische Umsetzung.

Status: im HITL-Grill am 03.08.2026 ratifiziert und geschlossen.

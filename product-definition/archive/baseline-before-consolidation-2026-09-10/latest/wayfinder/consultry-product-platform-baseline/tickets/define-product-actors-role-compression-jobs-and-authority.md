---
title: Define the Product Actor Ontology
status: closed
order: 40
labels:
  - wayfinder:grilling
interaction: HITL
parent: Ratify the Consultry Product and Business-Domain Baseline
assignee: codex
blocked_by:
  - Define the first consultancy operating archetypes
  - Ratify the product problem and outcome hierarchy
  - Deep-audit the next product and business-domain Wayfinder challenges
closed: 2026-08-02
---

# Define the Product Actor Ontology

## Question

Welche getrennten fachlichen Konzepte muss Consultry für Organization Boundary, Person, Responsibility Role, konkrete Case Participation, Authority/Mandate und Product Relationship verwenden, damit Jobtitel, Buyer-Beziehung, Verantwortung, Beteiligung und technische Permission nicht mehr als `Role` vermischt werden?

## Required output

- eindeutige Organization Boundaries für `Target Consultancy`, `Client Organization` und externe Organisationen
- `Person`, `ResponsibilityRole`, `CaseParticipation` und `AuthorityGrant` als getrennte fachliche Konzepte oder eine ausdrücklich begründete Alternative
- Product-Relationship-Overlays wie Economic Buyer, Adoption Champion, Consultry User, Tenant Admin und Veto Actor, ohne sie zu Domain Responsibilities zu machen
- Einordnung von `AgentIdentity`/AI als bounded Execution Subject ohne accountable Business Ownership oder Approval
- ein konkreter Role-Compression-Edge-Case, der zeigt, dass dieselbe Person mehrere Participations besitzen kann, ohne Authority-/SoD-Semantik aufzulösen

Dieses Ticket entscheidet noch nicht den Responsibility-/JTBD-Katalog, die archetypischen Mappings, die Authority Matrix oder Persona-Disposition. Diese folgen als eigene Decisions.

## Working decisions

### 2026-08-02 — Actor identity versus organizational context

- `Person` und `Organization` sind stabile fachliche Identitäten.
- `Target Consultancy`, `Client Organization` und externe Organisationsstellungen werden als kontextuelle, zeitgebundene Beziehungen modelliert, nicht als wechselnde Personenidentitäten.
- Eine zeitgebundene `OrganizationAffiliation` verbindet eine Person mit einer Organisation und beschreibt die Art ihrer Zugehörigkeit beziehungsweise Zusammenarbeit.
- Product Relationships wie `ConsultryUser`, `EconomicBuyer` oder `AdoptionChampion` bleiben von Person, Organisationszugehörigkeit und fachlicher Case-Beteiligung getrennt.
- Der Maria-Edge-Case ist damit ohne Identitätsduplikation darstellbar: eigene Beratung, Subunternehmerin der Boutique und später Mitarbeiterin der Client Organization sind wechselnde Affiliations derselben `Person`.

Status: als Teilentscheidung im HITL-Grill ratifiziert und in der abschließenden Resolution konsolidiert.

### 2026-08-02 — Contextual four-cut for responsibility, participation, and authority

Der ursprüngliche Vier-Schnitt ist nach lokalem Gegenmodell-, Edge-Case- und Normquellen-Check in optimierter Form ratifiziert:

1. `ResponsibilityDefinition` bezeichnet eine stabile fachliche Verpflichtung beziehungsweise einen zu verantwortenden Outcome — unabhängig von Person, Jobtitel, Abteilung, Case-Beteiligung oder Permission.
2. `ResponsibilityAssignment` ist die explizite, kontextuelle und zeitgebundene Zuordnung einer `ResponsibilityDefinition` zu einer `Person` für einen Organisations-/Business-Scope. Hier liegt die stehende personelle Verantwortungszuordnung.
3. `CaseParticipation` beschreibt die konkrete, zeitgebundene Beteiligung einer `Person` an einem Case. Sie kann auf relevante Responsibility Assignments verweisen, setzt diese aber nicht voraus.
4. `AuthorityGrant` bezeichnet eine konkrete, widerrufliche und begrenzte fachliche Ermächtigung. Sie benötigt nachvollziehbare Herkunft beziehungsweise Basis sowie Action-/Effect-, Business-/Resource-, Purpose-, Risk- und Time-Scope.

`ResponsibilityRole` ist damit **kein fünftes irreduzibles Actor-Konzept**. Falls eine Beratung Verantwortungen zu wiederverwendbaren Rollen, Jobprofilen oder Workspaces bündelt, ist dies ein konfigurierbares `ResponsibilityProfile` über einer oder mehreren `ResponsibilityDefinition`s. Die kanonische Zuweisung bleibt das einzelne `ResponsibilityAssignment`; Jobtitel und UX-Workspace werden nicht zur fachlichen Wahrheit.

`GoverningInstrument` hält als getrennte normative Basis fest, worauf Assignments, Grants, Pflichten oder Begrenzungen beruhen können — zum Beispiel Vertrag/SOW, Client Instruction, Project Charter, interne Policy, Management-Entscheidung oder regulatorische Vorgabe. Es ist ein querschnittliches Governance-Konzept, kein fünftes Actor-Konzept. Der unqualifizierte Begriff `Mandate` wird dafür vermieden, weil „Mandat“ im Consultancy-Kontext zugleich den Kundenauftrag bezeichnet.

Verbindliche Nicht-Implikationen:

- Ein `ResponsibilityAssignment` erzeugt weder automatisch `CaseParticipation` noch `AuthorityGrant`.
- Eine `CaseParticipation` erzeugt weder automatisch Responsibility, Authority noch Zugriff.
- Ein `AuthorityGrant` erzeugt weder Responsibility noch Case-Beteiligung.
- Eine Owner- oder Approver-Participation bezeichnet die Case-Funktion; tatsächliche Approval-/Binding-Wirkung benötigt zusätzlich gültige Authority, Eligibility, Policy und später den Actual-Person-SoD-Check.
- `CaseParticipation` darf ohne stehendes internes Responsibility Assignment existieren, etwa für Client Reviewer oder externe Spezialisten.
- Accountability bleibt eine Invariante beziehungsweise qualifizierte Zuordnung auf Assignment/Case Ownership, kein zusätzliches universelles Actor-Objekt.

Technische Autorisierung bleibt ausdrücklich getrennt: Sie entscheidet kontextuell über einen konkreten Subject–Action–Resource-Request anhand unter anderem von wirksamer Authority, Identität/Product Relationship, Tenant-/System-Policy, Datenklassifikation, Rechten/Vertraulichkeit, Case State und Environment. Ein technischer Zugriff beweist keine Business Authority; ein gültiger `AuthorityGrant` garantiert umgekehrt keinen technischen Zugriff.

Die minimale Decision-/Effect-Authority-Grenze bleibt im nachgelagerten Ticket **Ratify the Minimum Decision and Effect Authority Spine**. Konkrete Participation-/Action-Taxonomie, Authority Matrix, Delegation, Quorum, Self-Approval-Ausnahmen und SoD-Regeln wurden inzwischen bewusst aus dem Prototype-kritischen Pfad verschoben. `Decision` und `Disposition` gehören zur späteren Case-/Operating-Semantik, nicht zur Actor-Ontologie.

Validierungsbasis: Die strukturelle Trennung von Rollen-/Verantwortungsdefinition und kontextueller Zuordnung wird unter anderem durch [W3C Organization Ontology](https://www.w3.org/TR/vocab-org/), [W3C PROV-O](https://www.w3.org/TR/prov-o/) und [OMG Commons Ontology Library 1.2](https://www.omg.org/spec/Commons/1.2/PDF) gestützt. Die Trennung fachlicher Authority von kontextueller Authorization/Enforcement entspricht [NIST SP 800-162](https://csrc.nist.gov/pubs/sp/800/162/upd2/final), [OASIS XACML 3.0](https://docs.oasis-open.org/xacml/3.0/xacml-3.0-core-spec-os-en.html) und dem constrained Permission-Modell von [W3C ODRL 2.2](https://www.w3.org/TR/odrl-model/). Diese Quellen validieren die Trennlogik; die Consultry-Terminologie bleibt eine fachliche Product-Entscheidung.

Status: nach erneutem Gegencheck ratifiziert und in der abschließenden Resolution konsolidiert.

### 2026-08-02 — Product Relationships remain deliberately lightweight

Für die aktuelle Product-/Business-Domain-Baseline genügt eine einzige Grenze: Bezeichnungen wie `EconomicBuyer`, `AdoptionChampion`, `ConsultryUser`, `TenantAdmin` oder ein möglicher Adoption Gate/Veto sind kontextuelle `ProductRelationshipOverlay`s. Sie sind weder Personentypen noch Organization Affiliations, Responsibility Definitions, Case Participations, Authority Grants oder technische Permissions.

Eine feinere Zerlegung in Adoption-, User-, Administration- oder Gatekeeper-Submodelle wird ausdrücklich **nicht** vorgenommen. Auch eigene Lebenszyklen, Kardinalitäten und Authority-Ableitungen werden jetzt nicht definiert. Diese Semantik wird nur dann weiter modelliert, wenn eine konkrete Adoption-/Onboarding-/Administration-Journey oder ein nachgewiesenes Governance Requirement sie benötigt; Persona-Reconciliation darf die Labels vorher nicht zu kanonischen Actor-Klassen aufwerten.

Status: Die vorgeschlagene Dreiteilung wurde im HITL-Grill als kurzfristig nicht hilfreiche Overspecification verworfen; die minimale Overlay-Grenze ist ausreichend.

### 2026-08-02 — AI remains a bounded execution subject

- AI ist keine `Person` und erhält weder `ResponsibilityAssignment` noch accountable Case Ownership, menschliche Approval oder bindende Business Authority.
- AI darf im Rahmen eines menschlich verantworteten Case beobachten, suchen, analysieren, entwerfen, empfehlen, prüfen und policy-begrenzt ausführen.
- AI-Beiträge und ausgeführte Wirkungen bleiben auf den human-owned Case, die anwendbare menschliche beziehungsweise organisatorische Authority und ihre Provenienz zurückführbar.
- Eine maschinelle Prüfung oder Empfehlung ist keine accountable menschliche Entscheidung oder Approval.
- Die technische Zerlegung in Modell, Agent, Harness, Runtime Identity, Principal, Grant oder Capability Lease wird erst in der Technical-Wayfinder-Map entschieden.

Status: als minimale Product-Invariante im HITL-Grill ratifiziert.

## Resolution comment

Consultry trennt stabile Actor-Identität von kontextueller Stellung. `Person` und `Organization` bleiben über Zeit und Cases identisch; `OrganizationRelationship` und `OrganizationAffiliation` drücken Target-Consultancy-, Client-, Partner-, Beschäftigungs- oder Expertenkontext aus. Ein Rollen- oder Organisationswechsel erzeugt keine zweite Person.

Der kanonische fachliche Vier-Schnitt lautet:

1. `ResponsibilityDefinition` — welche fachliche Verpflichtung beziehungsweise welcher Outcome verantwortlich getragen werden muss;
2. `ResponsibilityAssignment` — welche Person diese Verantwortung in welchem Organisations-/Business-Scope und Zeitraum trägt;
3. `CaseParticipation` — wie eine Person an einem konkreten Case beteiligt ist;
4. `AuthorityGrant` — welche begrenzten Entscheidungen oder Wirkungen unter welcher Basis, in welchem Scope, Zweck, Risiko- und Zeitraum erlaubt sind.

Keines dieser Konzepte impliziert ein anderes. Eine Participation erzeugt weder Responsibility noch Authority oder Zugriff; eine Responsibility erzeugt keine Participation oder Authority; Authority erzeugt keine Responsibility. `ResponsibilityProfile` darf Responsibility Definitions für die Organisations-, Job- oder Workspace-Sicht einer konkreten Beratung bündeln, wird aber weder Person noch accountable Zuordnung oder Permission. `GoverningInstrument` bezeichnet die normative Basis von Assignments, Grants, Pflichten oder Grenzen; der doppeldeutige Begriff `Mandate` wird dafür vermieden. Technische Authorization bleibt eine separate kontextuelle Entscheidung und darf weder als Quelle noch als Beweis von Business Authority gelesen werden.

`EconomicBuyer`, `AdoptionChampion`, `ConsultryUser`, `TenantAdmin` und ähnliche Begriffe bleiben vorerst leichte `ProductRelationshipOverlay`-Labels. Ihre feinere Taxonomie wird nicht vorweggenommen und nur durch konkrete Journeys oder Requirements gezogen.

AI bleibt ein bounded Execution Subject: Sie darf beitragen und begrenzt ausführen, besitzt aber keine accountable Responsibility, Case Ownership, menschliche Approval oder bindende Business Authority. Technische AI-/Agent-/Harness-Identitäten gehören in die spätere technische Ableitung.

Role Compression bleibt damit explizit, ohne Authority Collapse: Dieselbe Boutique-Partnerin kann mehrere Responsibility Assignments sowie im selben Proposal Owner-/Author- und Approver-Participations tragen. Der spätere SoD-Check prüft dennoch die tatsächliche `Person`, gültige Authority und Policy und kann unabhängige Prüfung oder eine governed Exception verlangen. Bei einer Growing Specialist Consultancy können stehende Account-Verantwortung, konkretes Proposal Ownership, Review und Binding Authority auf verschiedene Personen verteilt werden, ohne das Modell zu ändern.

Nicht entschieden sind der konkrete Responsibility-/JTBD-Katalog, archetypische Verteilung, Participation-/Authority-Matrix, Delegation, SoD-Ausnahmen und Persona-Mapping. Diese bleiben in ihren nachgelagerten Tickets.

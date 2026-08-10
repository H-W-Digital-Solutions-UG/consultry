# Findings & Evidence

**Status:** Research Synthesis; Empfehlungen sind provisional, bis die jeweilige HITL-Decision geschlossen ist.

**Source Ledger:** [source-register.md](./source-register.md)

**Relationship Data:** [fact-logic-decision-graph.yaml](./fact-logic-decision-graph.yaml)

## 1. Leseschlüssel

- **Decision (`D`)**: intern ratifizierte Product Truth; kein Wirkungsnachweis.
- **Local Finding (`L`)**: aus gegenwärtigen oder historischen Artefakten beobachtbar.
- **External Finding (`E`)**: aus externer Quelle, mit Population und Grenzen.
- **Inference (`I`)**: nachvollziehbare Schlussfolgerung aus mehreren Inputs.
- **Hypothesis (`H`)**: noch durch Customer Discovery oder Product Experiment zu prüfen.
- **Conflict (`C`)**: zwei Aussagen können nicht gleichzeitig unqualifiziert gelten.

## 2. Harte Grenzen dieses Audits

- Es gibt noch keine unabhängige Evidenz, dass Consultry einen der behaupteten Outcomes verursacht.
- Die Product-/Business-Domain-Definition darf bewusst entschieden werden, auch wenn Market Evidence noch fehlt; dann bleibt die Value-/Adoption-Wette als Hypothese sichtbar.
- Technische Kandidaten — Graphen, Agenten, Model Bridge, Harness, Stores, Runtimes — beantworten keine offenen fachlichen Zustands-, Rollen- oder Authority-Fragen.
- Research Recommendations sind Startpositionen für das Grillen, keine stillen Ticket-Entscheidungen.

## 3. Target Consultancy, Archetypen und Rollekompression

### F-001 — Role Compression ist Condition, nicht Outcome

**Verdict:** In der Boutique erklärt Role Compression, dass eine Person gleichzeitig mehrere Responsibility Roles und Case Participations trägt. Der relevante Schmerz entsteht aber erst, wenn dabei Kompetenz, Kontext, Aufmerksamkeit, Separation of Duties oder Übergabekapazität fehlen.

**Basis:** `D-002`, `D-003`; lokaler Archetypen-Canon in `_CONTEXT-AND-MEMORY.md` §2; indirekte Functional-Overload-Evidenz `E-003`.

**Logik:**

`wenige Personen` führt nicht automatisch zu `operativem Schmerz`. Erst `Role Compression × Fallkomplexität × fehlende Capability/Information × Authority-Konflikt × Frequency` erzeugt einen priorisierbaren Job und potenziellen Buying Moment.

**Produktfolge:** Actors müssen als `Person`, `ResponsibilityRole`, `CaseParticipation` und `Authority` getrennt werden. Persona- oder Jobtitel-Listen reichen nicht.

**Nicht belegt:** Häufigkeit, wirtschaftlicher Schaden und Zahlungsbereitschaft je komprimierter Responsibility.

### F-002 — Firm Size braucht Maturity-Routing

**Verdict:** Die zwei ratifizierten Archetypen bleiben sinnvoll, benötigen jedoch ein zweites Routing-Profil für Operating-/Knowledge-Maturity und Constraints.

**Basis:** `E-001`, `E-004`, `E-005`; `D-002` sagt bereits, dass Größe nur Indikator ist.

**Mindestens zu erfassende Dimensionen:**

- Formalisierung von Rollen, Decisions und Handoffs;
- Knowledge-/Reuse-Practices und Vertrauen in gemeinsam gepflegte Quellen;
- Quellsystem-Fragmentierung und Datenzugang;
- Client-/Contract-/Confidentiality-Constraints;
- AI-Erfahrung, Training und Change Capacity;
- Governance-/Mitbestimmungs- und Risikoprofil.

**Produktfolge:** Onboarding, Defaults, Entry Job und Configuration dürfen nicht allein anhand von Seat Count gewählt werden.

### F-003 — Missing Functions müssen nach Support, Substitute und Orchestration zerlegt werden

**Verdict:** „Fehlende Spezialfunktion“ ist zu unscharf. Consultry kann eine Responsibility unterstützen, vorhandenes Wissen zugänglich machen, Koordination strukturieren oder einen Teil der Arbeit ausführen; daraus folgt nicht, dass eine accountable menschliche Funktion ersetzt wird.

**Basis:** `E-002` zeigt sowohl reduzierte als auch erhöhte Workload und überwiegend unveränderten Staffing Need; `E-011` zeigt funktionale Perspektivenintegration in einem begrenzten Experiment.

**Produktfolge:** Für jeden Entry Job ist zu entscheiden:

1. welches Responsibility Gap besteht;
2. welche Arbeit AI vorbereiten darf;
3. welches Urteil/Commitment menschlich bleibt;
4. ob ein interner oder externer Spezialist weiterhin erforderlich ist;
5. ob Consultry Review-/Koordinationslast netto reduziert.

**Offene Hypothese:** Boutiquen kaufen zuerst wegen Missing-Function-Support. Das ist plausibel, aber noch nicht customer-grounded.

## 4. Actors, Co-Production und Authority

### F-004 — Jobtitel sind keine stabile Product Ontology

**Verdict:** Die pre-pivot Personas enthalten nützliche Situationen, vermischen aber Person, Organisationstitel, Responsibility, Case Participation, Buyer-Beziehung und Permission.

**Basis:** `L-004`; Persona-Datei ist selbst als pre-pivot markiert, während `D-002` Boutiquen first-class macht.

**Provisional Ontology:**

- `Person` — natürliche Person, die mehrere Rollen tragen kann;
- `ResponsibilityRole` — wiederkehrende fachliche Verantwortung;
- `CaseParticipation` — Owner, Contributor, Reviewer, Approver, Advisor, Observer oder External Participant in einem konkreten Case;
- `AuthorityGrant` — scope-, purpose-, action-, risk- und zeitgebundene Befugnis;
- Product Relationship Overlay — Economic Buyer, Adoption Champion, User, External Stakeholder.

**Produktfolge:** Separation of Duties wird an realen Personen pro Case geprüft, nicht an unterschiedlich benannten Rollen.

### F-005 — Der Consultancy Client ist oft Co-Producer, nicht nur External Stakeholder

**Verdict:** Beratungswert entsteht häufig gemeinsam mit Client Actors. Client Input, Problem Diagnosis, Entscheidungen, Feedback, Acceptance und Implementation müssen dort first-class sein, wo der Prozess fachlich von ihnen abhängt.

**Basis:** `E-007`; lokale Product Vision zeigt Client-/Project-Sensing und externe Commitments, modelliert den Client Actor aber noch nicht durchgängig.

**Produktfolge:** Journeys brauchen eine explizite Boundary zwischen:

- interner Consultancy Work/Decision;
- client-shared Work/Review;
- client-owned Decision/Acceptance;
- extern ausgegebener Communication/Commitment;
- beobachtetem Client/Engagement Outcome.

**Wichtig:** Der `Consultancy Client` wird dadurch weder Consultry Buyer noch automatisch interner Consultry User.

### F-006 — AI ist Principal/Agent nicht gleichzusetzen mit Business Actor

**Verdict:** AI/Agent/Model darf bounded technische Execution erhalten, aber keine Accountable Ownership, Approval oder verbindliche Externalization Authority.

**Basis:** `D-009`, `E-024`; lokale Guardrails `Recommendation ≠ Datensatz`, Approval/Audit.

**Produktfolge:** Jede AI Interaction benötigt eine explizite menschliche/organisatorische Authority Chain. Ein `ServicePrincipal` oder `AgentIdentity` beschreibt Zugriff und Execution, nicht Business Accountability.

## 5. Knowledge-to-Action, Context und Blind Spots

### F-007 — Der Context Graph ist notwendiges Substrat, aber kein Value Mechanism allein

**Verdict:** Knowledge wird erst handlungswirksam, wenn relevante Information im konkreten Job gefunden, verstanden, auf Applicability geprüft, mit Widersprüchen/Unsicherheit präsentiert, von einer verantwortlichen Rolle disponiert und in Arbeit/Entscheidung überführt wird.

**Basis:** `D-003`; `E-005`, `E-006`, `E-009`; lokaler Context-Graph-Anspruch in Product Vision §1.1/§1.2.

**Knowledge-to-Action Contract:**

`Context Need → Candidate Knowledge/Expertise → Source/Credibility/Freshness → Applicability/Conflict → Responsible Interpretation → Decision or Work → Outcome Feedback`

**Produktfolge:** Search/RAG/Graph Coverage allein ist kein Acceptance Outcome. Zu messen sind unter anderem bessere Disposition, vermiedene Fehlanwendung, tatsächlicher nächster Schritt und Feedback in Context/Knowledge.

### F-008 — Blind-Spot Coverage muss AI-induzierte Blind Spots einschließen

**Verdict:** AI kann fehlende Perspektiven zugänglich machen und gleichzeitig Urteil homogenisieren, falsche Sicherheit erzeugen oder ungewöhnliche, wertvolle Ansätze verdrängen.

**Basis:** positive funktionale Integration `E-011`; Jagged Frontier `E-013`; Oversight Paradox `E-015`; Human-AI-Combination-Gegenbefund `E-014`.

**Produktfolge:** Blind-Spot Findings brauchen mindestens:

- Finding plus betroffenen Business Context;
- Evidence, Confidence und Aktualität;
- alternative Erklärung oder Counterevidence;
- Materiality und erwartete Konsequenz;
- responsible Disposition: Accept, Investigate, Dismiss, Defer, Escalate;
- Feedback über Correctness, Novelty, Actionability und Review Cost.

**Offen:** Welche Blind-Spot-Klassen je Archetyp häufig genug sind, um Buying/Retention zu tragen.

### F-009 — Reuse braucht Contextual Applicability, nicht nur Retrieval

**Verdict:** Mehr Wiederverwendung kann Qualität, Differenzierung oder Passung verschlechtern. `ReusableAsset` ist daher erst Value, wenn Applicability, Adaptation, Rights, Quality und tatsächlicher Reuse Outcome stimmen.

**Basis:** bestehendes Register zu Haas/Hansen; `E-008` bis `E-010`; `D-010`.

**Produktfolge:** `ReuseCandidate → ReusableAsset` und `ReusableAsset → ReuseApplication` sind getrennte Decisions. Erst beobachtete Applications dürfen Service Productization oder Economic Value Cases informieren.

## 6. Human–AI Arbeit und Meaningful Oversight

### F-010 — „Human-in-the-loop“ ist semantisch unterbestimmt

**Verdict:** Ein Approval Button beweist weder Verständnis noch unabhängiges Urteil. Er kann reine Haftungsverlagerung oder Automation Bias kaschieren.

**Basis:** `E-014`, `E-015`, `E-023`, `E-026`; lokale Artefakte verwenden Human-in-the-loop häufig als pauschale Formel.

**Meaningful-Oversight Contract:**

- benannter Decision Owner und klares Decision Object;
- sichtbare AI-Rolle: inform, suggest, draft, challenge, validate oder execute;
- verfügbare Optionen einschließlich edit, reject, abstain, delegate, escalate, stop und reopen;
- zugängliche Basis, Grenzen, Uncertainty und Counterevidence;
- ausreichende Zeit, Kompetenz und alternative Informationsroute;
- kein verstecktes Default, das Zustimmung erzwingt;
- beobachtbare Disposition und Wirkung, nicht nur Click Audit.

### F-011 — Review Load ist Product Cost

**Verdict:** AI-Vorschläge können Arbeit verdrängen oder zusätzliche Prüf-, Korrektur- und Koordinationsarbeit erzeugen. Beides muss im Job Baseline/Comparator sichtbar werden.

**Basis:** `E-002`, `E-012`, `E-016`; vorhandenes Experiment E4 im Problem Register.

**Produktfolge:** Acceptance erfasst `gross automation`, `human review`, `rework`, `false-positive triage`, `handoff coordination`, `recovery` und `net useful progress` getrennt.

### F-012 — Interaction Form folgt Job und Decision Risk

**Verdict:** App, Quick Capture, Queue, Guided Frame, Canvas, Search/Ask, conversational refinement, Background Operator und optionaler Harness sind Surfaces desselben Business Case, keine separaten Authority-Regime.

**Basis:** `D-004`; UX Operating Model; Governance-Quellen.

**Produktfolge:** Der frühere einzelne Prototype-Ticket muss konzeptionell zweigeteilt werden: ein früher fachlicher Human-AI Responsibility Contract und ein später Journey-basierter Surface Prototype.

## 7. Operating Loop, Handoffs und Opportunity-to-Project

### F-013 — Nicht jeder Job beginnt als Observation oder wird zum Signal

**Verdict:** Die Candidate-Grammatik ist nützlich, darf aber keinen universellen linearen Lifecycle erzwingen. Ein Job kann durch Request, Obligation, Schedule, Exception, Client Input, Opportunity, Decision oder Work Item starten. `Observation` und `Signal` sind nur dann first-class, wenn Bedeutung und Entscheidungspotenzial existieren.

**Basis:** lokale Candidate Loops in Product Vision/UX; State-Workflow-Heuristik `E-017`.

**Provisional invariant grammar:**

`Trigger/Need → Sense/Frame → Responsible Decision or Accepted Work → Coordinated Action/Work → Effect/Outcome → Learn/Adapt`

`Observation`, `Signal`, `Opportunity`, `ChangeCase` und andere Objects sind branch-spezifische fachliche Verkörperungen dieser Grammatik.

### F-014 — Handoff und Context Switch sind verwandte, aber verschiedene Fälle

**Verdict:** Bei Cross-Person-Handoff wechselt Accountable Custody; bei Role Context Switch kann dieselbe Person eine andere Responsibility übernehmen. Gerade bei Role Compression darf dieser semantische Wechsel nicht unsichtbar bleiben.

**Provisional Handoff Contract:**

- source role/person und reason;
- target responsibility sowie accountable person;
- requested decision/work und expected outcome;
- context/evidence/constraints;
- due/urgency und acceptance condition;
- accept, reject, request-context, delegate, escalate, expire und reopen;
- custody/authority timestamp und Audit.

**Produktfolge:** Eine Person darf nicht allein deshalb self-approve, weil mehrere Rollen auf sie gemappt sind. Risk-/SoD-Policy entscheidet, ob zweite Person oder dokumentierte Ausnahme nötig ist.

### F-015 — Opportunity-to-Project umfasst mindestens zwei gekoppelte Lifecycles

**Verdict:** Ein einziger Funnel verwischt Commercial Commitment und Delivery Readiness.

**Provisional decomposition:**

1. **Commercial Case:** Need/Opportunity → Qualify → Engagement Framing → Concept/Proposal → Internal Commitment → External Issue → Negotiate → Accepted/Lost/Withdrawn/Hold.
2. **Engagement/Project Activation:** accepted commercial basis → contract/SOW/authorization conditions → delivery owner/team/capacity/context readiness → Project Activation → first Delivery Handoff.

Beide Lifecycles können iterieren, auseinanderlaufen oder enden. Ein bestehendes ClientContract kann über ChangeCase eine neue Delivery-Verpflichtung erzeugen, ohne einen klassischen New-Opportunity-Funnel zu durchlaufen.

**Produktfolge:** Die nächste Session darf weder `Proposal` noch `Project` Aggregate-Grenzen vor dem Business State Model ableiten.

### F-016 — Outcome ist nicht dasselbe wie Output oder Effect

**Verdict:** Ein erzeugtes Concept, ein versendetes Proposal, eine freigegebene Recommendation oder ein aktiviertes Project sind State-/Output-Milestones. Der Target-Consultancy Outcome beschreibt die relevante Veränderung für die Beratung; Client/Engagement Outcome bleibt getrennt.

**Produktfolge:** Jede Journey definiert Output, fachlichen State Change, unmittelbaren Target-Consultancy Outcome, gegebenenfalls Client Outcome und späteres Learning getrennt.

## 8. Consultry Core und OS Backbone

### F-017 — Core über Continuity Obligations, nicht Module definieren

**Verdict:** Ein CRM-Core-Vergleich ist hilfreich, wenn er gemeinsame Identitäten und Continuity erklärt; schädlich, wenn er zu einem Feature-/Module-Monolith führt.

**Provisional Core Obligations:**

1. **Identity & Relationship Continuity** — derselbe fachliche Case/Context bleibt über Rollen/Surfaces referenzierbar.
2. **Attention & Context Continuity** — relevante Änderungen erreichen die richtige Responsibility mit tragfähigem Kontext.
3. **Responsibility & Authority Continuity** — Owner, Participation, Delegation und Decision Rights sind explizit.
4. **Decision & Commitment Continuity** — Vorschlag, Urteil, Approval, Commitment und Effect bleiben unterscheidbar.
5. **Work & Handoff Continuity** — Arbeit, Übergabe, Recovery und Done State verlieren ihren Kontext nicht.
6. **Evidence & Validation Continuity** — Claims, Quellen, Unsicherheit, Prozesspflichten und Disposition bleiben nachvollziehbar.
7. **Outcome & Learning Continuity** — tatsächliche Wirkung und Feedback aktualisieren zukünftigen Context, Skill, Asset oder Process.

**Grenze:** Context Graph, Core Skill Graph, Model Bridge und Harness liefern technische/operative Substrate; sie sind nicht selbst der Consulting-specific Product Core.

### F-018 — Source-System Authority muss use-case-spezifisch sein

**Verdict:** „Consultry ist der OS Layer über bestehenden Systemen“ beantwortet nicht, welches System für welche Business Identity und State Transition Authority besitzt.

**Produktfolge:** Für jeden Core Object/Case sind mindestens zu entscheiden:

- System of Record / source authority;
- Consultry-owned identity or projection;
- permitted enrichment and suggested state;
- binding effect target;
- conflict/freshness/reconciliation behavior;
- audit and rollback/recovery responsibility.

Diese fachliche Authority Matrix geht technischer Integration voraus.

## 9. Implementation, Variation und Service Productization

### F-019 — „Hundreds of implementations“ erfordert einen expliziten Variation Envelope

**Verdict:** Der Ninox-Vergleich bedeutet nicht Custom Code pro Beratung, sondern einen stabilen Product Core mit kontrolliert variierbaren Consulting Implementations.

**Provisional invariants:** Business Identity, Authority Semantics, Evidence/Uncertainty, Decision-vs-Recommendation, Effect Admission, Audit, Tenant/Client Boundaries und Outcome Traceability.

**Provisional variations:** Terminologie-Labels, Responsibility-to-Person Mapping, Stage Varianten, Forms/Documents, Policies/Thresholds, Approval Routes, Views/Workspaces, source mappings und enabled journey variants.

**Offen:** Welche Variation productized configuration, implementation service, partner-delivered template oder eigenes Modul wird.

### F-020 — Onboarding ist ein Product Journey, nicht nur Corpus Upload

**Verdict:** Der bestehende geführte Upload ist ein brauchbarer First-Value Candidate, bildet aber weder document-first versus connected firm noch Rollen-/Authority-Mapping, Client Constraints, Training, Failure/Recovery oder spätere Change Governance ab.

**Basis:** `L-006`, `E-001`, `E-002`.

**Produktfolge:** Vor dem Business-Domain Canon braucht es eine kanonische Implementation-/Onboarding-/Change Journey; danach kann die technische Extension Mechanik abgeleitet werden.

## 10. Graphs, Agent Loops, Validation und Model Bridge

### F-021 — Business State Model vor Agent Graph

**Verdict:** Research zu StateFlow/AFlow/AGORA stützt explizite States, Transitions, Exit und Evaluation, beweist aber nicht, dass jeder Consultry Job einen komplexen Agent Graph benötigt.

**Basis:** `E-017` bis `E-020`.

**Produktfolge:** Product Requirements formulieren Trigger, State, Allowed Transition, Obligation, Recovery, Termination und Outcome. Die spätere Technical Map entscheidet, ob dies als Graph, State Machine, Workflow Code oder einfacher kontrollierter Ablauf umgesetzt wird.

### F-022 — Execution Graph und Validation Graph sind fachlich komplementär

**Verdict:** Die Trennung ist sinnvoll, wenn sie unterschiedliche Fragen beantwortet:

- **Execution View:** Was wurde mit welchem Context, Skill/Tool, Input, Actor und Effect versucht oder ausgeführt?
- **Validation View:** Welche Output-/Process-/Policy-/Evidence-Obligations galten, welche Evidence stützt oder widerlegt sie, und wer disponierte das Ergebnis?

**Product-relevante Validation Relations:** `supports`, `challenges`, `contradicts`, `requires`, `satisfies`, `waives-with-authority`, `unresolved`.

**Grenze:** Ein Validator, LLM-Judge oder Score ist Evidence. Approval/Acceptance bleibt bei der zuständigen Authority.

### F-023 — Der Core Skill Graph verbindet Contextual Task mit evaluierter ausführbarer Fähigkeit

**Verdict:** Die bestehende Trennung zwischen Core Skill Graph und Capability Evidence ist sinnvoll. Product Definition muss aber zuerst den Contextual Task, das erlaubte Verhalten, den Output Contract, die Quality-/Risk-Obligations und die menschliche Verantwortung beschreiben.

**Produktfolge:** Skills werden nicht als Promptbibliothek oder menschliches Skillprofil definiert. Skill Selection und Release/Eval sind später technische Contract-Fragen, abgeleitet aus Product Jobs.

### F-024 — Model Bridge ist Quality-/Policy-Routing, kein Product Value Claim

**Verdict:** Provider-/Model-Abstraktion kann Souveränität, Portabilität, Kosten-/Qualitätsrouting und Fallback unterstützen. Sie löst weder Context, Workflow, Authority noch assembled-system Evaluation.

**Basis:** `E-022` bis `E-024`; geschlossene Kernel-/Model-Bridge-Decision als Constraint.

**Produktfolge:** Product Requirements definieren Modellunabhängigkeit nur dort, wo Nutzer-/Kundenwert oder Governance betroffen ist: erlaubte Data Zone, Explainability/Source Expectations, Capability/Quality Floor, Fallback Behavior, Disclosure und Human Recovery. Provider-/Modellauswahl bleibt Technical Wayfinder.

## 11. Acceptance, Learning und Evidence

### F-025 — Core Value Proof braucht vergleichbare Struktur, nicht identisches Szenario

**Verdict:** Der ratifizierte Core Value Proof kann beide Archetypen verbinden, wenn reale Inputs, heutiger Workaround, materially useful progress, verantwortete Disposition und Trust Evidence gleich strukturiert sind. Concept/Proposal darf ein Referenzfall, aber keine universelle Proof-Oberfläche sein.

**Produktfolge:** Pro Scenario werden Baseline, Counterfactual/Comparator, Net Work, Quality/Blind Spot, State Change, Human Disposition und Follow-on Value erfasst.

### F-026 — Adoption ist nur dann Retention Evidence, wenn sie wiederkehrenden Job Value zeigt

**Verdict:** WAU, Seat Utilization, Uploads oder Approval Rate allein können Pflichtnutzung, zusätzliche Arbeit oder oberflächliche Aktivität messen.

**Basis:** `E-012`, `E-016`; bestehendes Experiment E4.

**Produktfolge:** Retention Evidence verknüpft wiederholte Nutzung mit naturally recurring Jobs, Outcome, Displacement/Net Effort, Trust und freiwilliger Fortsetzung beziehungsweise Budgetentscheidung.

### F-027 — Design-Partner Research muss Gegenfälle aktiv suchen

**Verdict:** Nur positive Last-Time Stories würden die breite Product Thesis bestätigen, ohne Grenzen zu lernen.

**Minimum Countercases:**

- Boutique ohne materiellen Role-Compression-Schmerz;
- Firma, in der generische AI/Search den Job ausreichend löst;
- Client, der AI-Nutzung ablehnt oder begrenzt;
- AI Workflow, der Review Work erhöht;
- Reuse, das wegen Applicability/Rights scheitert;
- Cross-Role Case, der keinen gemeinsamen OS Backbone braucht;
- simpler kontrollierter Flow, der Graph-/Agent-Komplexität schlägt.

### F-028 — Nicht-Chat-only ist Product Direction, nicht bewiesene Überlegenheit

**Verdict:** Die objekt-/arbeitszentrierte App und der OS Backbone sind ratifiziert. Externe Consulting-Evidenz zeigt jedoch, dass allgemeiner AI-Zugang für isolierte, modellgeeignete Tasks bereits starke Speed-/Quality-Gewinne liefern kann. Consultry muss deshalb seinen **marginalen** Wert gegenüber einem guten Chat-/Generic-AI-Setup beweisen.

**Basis:** `D-004`, `E-008`; BCG Consulting RCT. Der Gegenbefund greift die Product Definition nicht an, sondern begrenzt die zulässige Wirkungsbehauptung.

**Geeignete Backbone-Fälle:** persistenter State, cross-role custody, Wiederaufnahme, mehrere Source Authorities, client-/rights-sensitive Context, unabhängige Validation, verantwortete Externalization und beobachtete Outcome-/Learning-Rückführung.

**Acceptance-Folge:** Der Comparator für geeignete Tasks ist nicht nur Human-only oder heutige manuelle Arbeit, sondern auch `CRM/Files + allgemeiner AI Chat`.

### F-029 — Direkte Consulting-Forschung stützt unterschiedliche Problemketten, keine homogene Kleinberatung

**Verdict:** Direkte PSF-/Consulting-Studien zeigen Größenunterschiede bei Qualität, Service, KM, Training, Spezialisierung und Koordination; zusätzlich prägen Leverage, Projektmix, Wiederholbarkeit, Kundeninteraktion und Reife die Arbeit.

**Basis:** Brandon-Jones et al. (251 Survey Responses plus Interviews), Haas/Hansen Consulting Teams, Li et al. 2026; `E-004`.

**Produktfolge:** Die zwei Archetypen bleiben eine Product Decision. Research Sampling und Configuration Routing müssen sie aber nach Operating Model und Maturity weiter differenzieren. `Role Compression` bleibt interne Analysekategorie, nicht als etablierter externer Konstrukttyp auszugeben.

### F-030 — Human plus AI ist keine allgemeine Synergieformel

**Verdict:** Eine preregistrierte Meta-Analyse über 106 Experimente findet Human+AI besser als Human-only, aber im Mittel schlechter als den jeweils besseren Einzelakteur; Decision Tasks zeigten negative Synergie. Aufgabenteilung muss deshalb task-specific sein.

**Produktfolge:** Für jeden Contextual Task werden Generation, Evidence Search, Challenge, Validation, Decision, Externalization und Effect Authority zugeordnet. Das Produkt darf „Co-Produktion“ nicht als pauschalen Leistungsbeweis verwenden.

### F-031 — Workflow Topology bestimmt Nutzen und Failure von Multi-Agent/Graph-Systemen

**Verdict:** Aktuelle Agent Research zeigt starke Gewinne auf zerlegbaren/parallelisierbaren Tasks und starke Verluste auf sequenzieller Planung; wiederkehrende Fehler betreffen Specification, Coordination, Verification und Termination.

**Basis:** Google `Towards a Science of Scaling Agent Systems`, MAST, τ-bench, AgentDojo; ergänzt `E-011`/`E-012`.

**Produktfolge:** Jede Agent-/Loop-Hypothese braucht Task Topology, independent feedback, stop/escalation, least privilege, repeated reliability and simple/single-agent baseline. Mehr Agents sind nie per se Blind-Spot Coverage.

### F-032 — Skill Definition, Capability Evidence und Authority bilden eine Kette, keine gemeinsame Wahrheit

**Verdict:** ESCO/O*NET können Definitionen, Tasks, Knowledge und Work Context mappen. Sie beweisen keine aktuelle Fähigkeit oder Befugnis eines Menschen, Teams, Agents oder Moduls.

**Product Logic:**

`Contextual Task → TaskRequirement → SkillDefinition → Candidate Subject → CapabilityClaim/Evidence → Authority Check → Accepted Assignment → Outcome Evidence`

**Produktfolge:** Der Core Skill Graph darf Capability Evidence oder Authority nicht selbst bestätigen oder aus erfolgreicher Ausführung still als neue Canon Truth schreiben.

### F-033 — Model Routing kann technisch effizient sein, bleibt aber eval- und distributionsabhängig

**Verdict:** RouteLLM, FrugalGPT und BEST-Route zeigen Kosten-/Quality-Routing auf Benchmarks, wenn passende Labels/Tasks vorhanden sind. Sie beantworten keine Residency-, Rights-, Tool-, Action-, Audit- oder Upgrade-Governance.

**Produktfolge:** Model Bridge startet bei UseCaseRequirement und realen Consultry Evals. Separate Monetarisierung bleibt `H-010`; technische Notwendigkeit ist kein Buyer Value.

## 12. Zusammengefasste offene Product-Hypothesen

| ID | Hypothese | Erforderliche Evidenz |
|---|---|---|
| H-001 | Missing-Function-/Role-Compression-Support ist ein starker Boutique Entry Value. | mehrere letzte reale Fälle, Konsequenz, Budget, bisherige Alternativen und ein Negativfall |
| H-002 | Cross-Team Blind-Spot Coverage ist ein starker Growing-Consultancy Entry Value. | reale spät erkannte Issues, Materiality, Eigentümer, Vergleich zum heutigen Prozess |
| H-003 | Ein konfigurierter Knowledge-to-Action Workflow ist besser als Search, Kollegennetzwerk oder Generic AI. | vergleichender realer Work Test mit Quality, Net Effort und responsible next action |
| H-004 | Wiederkehrende Work Effectiveness plus Blind-Spot Coverage erzeugt Retention. | natürliche Wiederholungsjobs, Budget-/Continuation Signal und kontrollierte Adoption Burden |
| H-005 | Governed Reuse erzeugt Compounding Value. | tatsächliche Reuse Applications, Adaptation, Rights, Quality und Delivery/Economic Baseline |
| H-006 | Opportunity-to-Project ist der beste erste kommerzielle Value Path. | getrennte Buying-/Proof-Evidenz je Archetyp und Alternative Entry Jobs |
| H-007 | Consultry Core reduziert Cross-Role-/Cross-System-Continuity Loss. | gemessener Baseline Handoff/Context Loss und verbesserter Case Outcome |
| H-008 | Execution plus separate Validation View steigert Trust und Ergebnisqualität netto. | Task-spezifische Evaluation einschließlich false assurance, review cost und override behavior |
| H-009 | Controlled variation ermöglicht viele Consultancy Implementations ohne Product Fragmentation. | mehrere Implementation Maps, invariant-fit, configuration effort, change failure/recovery |
| H-010 | Model Bridge ist separat monetarisierbarer Wert. | Buyer-/Governance Need, WTP, Alternatives und klarer Zusatznutzen außerhalb Consultry Core |

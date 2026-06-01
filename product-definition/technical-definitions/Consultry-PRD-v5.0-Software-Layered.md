# Consultry — PRD v5.0

## Compliance-grounded Knowledge Graph with a Supervised AI Collaborator

**Status:** Draft
**Datum:** 8. Mai 2026
**Beziehung zu früheren Versionen:** v5.0 ersetzt PRD v4.1 als Quelle der Wahrheit. v4.1 bleibt als Archiv historisch gültig; alle Konflikte zwischen v4.1 und v5.0 werden zugunsten von v5.0 entschieden. v5.0 ist *aus dem Nichts neu geschrieben*, nicht ein Diff auf v4.1.
**Methodisch:** v5.0 encodiert eine Architektur-Position, die im Vier-Runden-Q&A vom 5.–8. Mai 2026 explizit committed wurde. Sechzehn nummerierte Commitments (siehe Anhang A) sind die normative Grundlage. Jede Aussage in diesem Dokument lässt sich auf einen oder mehrere Commitments zurückführen.

---

## 0. Eine Architektur-These in einem Satz

**Consultry ist ein compliance-fundierter Wissensgraph mit einem supervisierten AI-Kollaborateur. Der Graph ist die Quelle der Wahrheit; der Kollaborateur liest, klassifiziert, schlägt vor, fasst zusammen, entwirft, prüft und plant — und schreibt, sendet, ablegt oder committet niemals nach außen ohne explizite menschliche Freigabe, die im Audit-Log landet.**

Dieser Satz ist die North-Star-Architektur. Alles in diesem Dokument folgt aus ihm. Wenn ein späterer Vorschlag ihn verletzt, wird der Satz nicht stillschweigend gebrochen — er wird explizit revidiert.

Drei Konsequenzen, die sofort folgen:

Erstens, das Datenmodell ist ein **typisierter Graph**, nicht ein Modul-Set. Module sind Sichten auf den Graph, nicht Datensilos. „Modul A integriert mit Modul B" ist eine Frage, die in v5 nicht existieren kann.

Zweitens, die AI-Schicht ist ein **bounded set of operators** über dem Graph: lesen, klassifizieren, vorschlagen, zusammenfassen, entwerfen, prüfen, planen. Schreiben, senden, ablegen, committen sind keine AI-Operatoren. Die Grenze ist vom System erzwungen, nicht von Konvention.

Drittens, die **AI Reliability Spine** ist die Aufsichtsinstanz: Versionierung von Prompts, Eval-Suite, Drift-Monitor, Halluzinations-Vorfilter, Source-Binding-Enforcement, Audit-Writes. Sie ist Phase 0, nicht Phase 1b. Ohne sie ist die North-Star-Architektur eine Behauptung; mit ihr ist sie eine Eigenschaft.

---

## 1. Wedge

**Erste Zielgruppe:** Boutique DACH IT- und Digitalisierungs-Strategie-Beratungen mit **10–30 Mitarbeitenden**, hoher Bestandskunden-Anteil, eigener Methodik-Anspruch, regulatorisch wachsender Markt.

Diese Wedge ist enger als PRD v4.1 (30–200) und ist eine bewusste Korrektur. Begründung:

- Eine Boutique kann eine vertikale OS-Adoption tragen — es gibt weniger fest verdrahtete Werkzeug-Abhängigkeiten zu lösen, weniger Stakeholder zu überzeugen, schnellere Migrationspfade.
- Die Co-Build-Strategie (siehe §10) braucht eine kleine, schnelle Entscheidungs-Kette und keine Procurement-Bürokratie.
- Bestandskunden-zentrierte Beratungen profitieren am meisten vom Graph-Modell: ihre Wertschöpfung *ist* der Stakeholder-Trust-Graph, nicht die Account-Funnel-Optimierung.

**Spätere Wedge-Erweiterung (Phase 3+):** Mid-size Beratungen 30–100, später 100–200. Architektur ist von Tag 1 darauf vorbereitet (Single-Tenant pro Beratung, Provisioning-Automation, BetrVG-Heavy), aber kein Marketing- oder Vertriebsfokus.

**Erster Kunde:** ein konkret benannter Design-Partner. Identität wird im Co-Build-Plan §10 festgehalten. Die MVP-Definition ist explizit *gemeinsam mit dem ersten Kunden* zu schärfen, nicht spekulativ vorab.

---

## 2. Software-1/2/3.0-Posture

Karpathy's Taxonomie ist nützlich als Vokabular und gefährlich als Roadmap. v5 nimmt sie als **Stress-Test**: an welchen Stellen kollabieren Garantien, wenn deterministischer Code naiv durch probabilistische Inferenz ersetzt wird?

### 2.1 Drei Schichten, jede mit fixierter Posture

| Schicht | Posture | Realisierung |
|---|---|---|
| **Datenschicht (1.0)** | Deterministisch, transaktional, audit-trail-erzeugend | Postgres (transaktional, Audit-Events, Identity-Mappings) + Neo4j oder Memgraph (Graph). Row-Level-Security, Append-Only-Audit, Cross-DB-Konsistenz via Saga oder Outbox-Pattern. Keine AI-Schreibzugriffe. |
| **Logikschicht (1.0 mit 2.0-Anreicherung)** | Deterministisch, mit ML-basierten Anreicherungs-Funktionen | Business Rules in TypeScript. Embeddings (pgvector) für Ähnlichkeit, Klassifizierer für Kategorisierung, Ranker für Listen. ML-Outputs sind Inputs für deterministische Logik, nicht selbst Logik. |
| **Kollaborationsschicht (3.0)** | LLM als supervisor-bounded Kollaborateur | LLM-getriebene Operatoren (siehe §3) auf bounded tool sets. Niemals direkter State-Mutator. Jeder Operator-Call ist audit-logged. |

Die Schichten sind nicht-vermischt. Ein 3.0-Operator darf keinen 1.0-Schreibzugriff haben. Eine 1.0-Funktion darf keine 3.0-Inferenz aufrufen, ohne Reliability-Spine-Routing zu durchlaufen. Diese Trennung ist nicht Stil, sondern strukturelle Eigenschaft.

### 2.2 Was es NICHT ist

Consultry ist **nicht** ein Agent-Runtime. Module sind keine Tools, die ein Planer-Agent aufruft. Die Karpathy-3.0-Vision („LLM als neuer Computer") ist explizit abgelehnt für v1. Begründung: in regulierten B2B-Umgebungen ist die Latenz-, Determinismus- und Garantiebilanz von Agent-Runtimes nicht ausreichend, und die Compliance-Fußspur eines „der Agent hat es entschieden" ist mit AI-Act-High-Risk-Anforderungen unvereinbar.

Consultry ist **nicht** ein PSA-Tool mit AI-Plugin. Die Build-Set-Entscheidung (§5) committet zum vertikalen OS, nicht zum Wrapper.

Consultry ist **nicht** generisch über Beratungs-Typen hinweg. Die Wedge ist DACH-IT-Strategie-Boutique. Andere Beratungs-Typen (Strategie, Tax, Legal, M&A) sind nicht-Ziel; Architektur ermöglicht spätere Erweiterung, Marketing tut es nicht.

---

## 3. Der bounded operator set

Die einzige Schnittstelle, über die AI auf den Graph zugreift. Jeder Operator ist namentlich, typisiert, audit-logged, source-bound.

| Operator | Was er tut | Was er NICHT tut |
|---|---|---|
| **Read** | Liest Graph-Knoten und -Kanten in den Operator-Kontext | Schreibt nicht. Cached nicht außerhalb des Operator-Calls. |
| **Classify** | Ordnet eine Eingabe einer Kategorie aus einer endlichen Liste zu (z.B. Skill-Kategorie, Methodik-Bereich) | Erfindet keine neuen Kategorien. Schreibt keine Klassifikation in den Graph ohne Approval-Gate. |
| **Suggest** | Schlägt diskrete Optionen vor (Berater:in für Staffing, Klausel für Vertrag) | Wählt nicht. Externalisiert nicht. |
| **Summarise** | Verdichtet einen Kontext (Projekt-Historie, Stakeholder-Aktivität) | Fügt keine Fakten hinzu, die nicht im Quell-Kontext sind. Halluzinations-Vorfilter ist Pflicht. |
| **Draft** | Erstellt einen textuellen Entwurf (CV-Anpassung, Proposal-Sektion, E-Mail-Draft) | Sendet nicht. Speichert nicht als finales Artefakt; nur als Draft-Knoten mit Approval-Pending-State. |
| **Review** | Prüft ein Artefakt gegen ein Methodik-/Standard-Knoten (Code, Doc, Deck, Diagramm vs. Methodology v3.2) | Korrigiert nicht das Artefakt. Findings sind Vorschläge, nicht Edits. |
| **Plan** | Erstellt einen mehrstufigen Plan zur Lösung einer Aufgabe (Staffing-Plan, Onboarding-Plan) | Führt den Plan nicht aus. Plan ist ein Draft-Knoten mit Approval-Pending-State. |

**Explizit NICHT in v1:** Tool-Orchestrate (AI ruft AI ruft AI in einer Kette innerhalb eines Calls), Auto-Execute (AI führt einen vorab-genehmigten Plan aus). Beide würden die Supervisor-Boundary verletzen oder die Approval-Granularität auflösen. Sie können in einer späteren Version explizit eingeführt werden, mit eigener Compliance-Begründung — nicht stillschweigend.

**„Review" ist die QA-Schicht.** Was die Skizze als „Qualitätssicherung" zeigt, ist in v5 keine eigene Modul-Spalte und kein eigenes Sub-System. Es ist der Review-Operator, angewendet auf Delivery-Artefakte gegen Methodology-Knoten im Graph. Das ist die einzige technische Auflösung der QA-Layer-Frage.

---

## 4. Der Graph

### 4.1 Top-Level-Knotentypen (Phase 1a-Kern)

```
Tenant                              (eine Beratung)
 ├── Account                        (Bestandskunde)
 │    ├── Stakeholder               (Personen mit Lebenslauf-Trail, Studium, Arbeitgeber)
 │    ├── AccountHistory            (Engagement-Zeitstrahl)
 │    └── Trigger                   (Phase 1: kundenintern; Phase 2: + Markt-Signal)
 │
 ├── Consultant
 │    ├── Skill                     (mit Level, Source-of-Claim)
 │    ├── Certification
 │    ├── ProjectExperience
 │    ├── Availability              (Zeitfenster, Kapazitätsanteil)
 │    └── KnowledgeContribution     (Asset-Authorship)
 │
 ├── Opportunity
 │    ├── EngagementBrief
 │    ├── SkillRequirement
 │    └── PricingFrame
 │
 ├── Proposal
 │    ├── TailoredCV (n)            (Draft-State bis Approval)
 │    ├── StaffingProposal          (Draft-State bis Approval)
 │    └── ContractDraft
 │         ├── DeliverableSpec (n)
 │         ├── SLA (n)
 │         └── Clause (n)           (Attribut, nicht eigener Knotentyp)
 │
 ├── Contract                       (signiert, eIDAS Advanced)
 │    └── Project
 │         ├── Milestone (n)
 │         ├── ProgressReport (n)
 │         ├── DecisionRecord (n)   (first-class Knowledge-Knoten)
 │         ├── RiskItem (n)
 │         ├── Allocation (n)       (Consultant × Project × Zeit × Anteil)
 │         ├── TimeEntry (n)        (gebaut, nicht integriert)
 │         ├── ExpenseEntry (n)     (gebaut, nicht integriert)
 │         └── DeliveryArtifact (n) (Review-Operator-Ziel in Phase 1b)
 │
 ├── KnowledgeAsset                 (abstrakt; Subtypen unten)
 │    ├── Methodology               (versioniert, Review-Operator-Quelle)
 │    ├── LessonsLearned            (verknüpft mit Project, Consultant, Account)
 │    └── DecisionRecord            (= Decision Record auf Project-Ebene)
 │
 ├── BillingPrepRecord
 │    ├── (referenziert TimeEntry, ExpenseEntry)
 │    └── DATEVExportBundle         (Integration, nicht gebaut)
 │
 └── AuditEvent                     (append-only, tamper-evident, jeden Operator-Call)
```

**Phase 2 ergänzt:**

```
Prospect                            (datentechnisch streng getrennt von Account)
 ├── ProspectStakeholder
 ├── ConsentRecord                  (DSGVO Art. 6, Art. 21, UWG §7)
 └── EnrichmentSource               (Quellen-Register mit Nutzungsrecht)

MarketSignal                        (global, Routing pro Tenant)
 ├── RegulatoryItem
 ├── TrendItem
 ├── NewsItem
 └── MacroIndicator
```

### 4.2 Graph-DB-Architektur

**Zwei Datenbanken pro Tenant-Install:**

- **Postgres** (transaktional, audit, identity, billing-prep, files-meta) — RDBMS-Stärken, EU-region.
- **Neo4j AuraDB EU oder Memgraph Cloud EU** (graph-traversal, AI-operator-queries) — Cypher als Query-Sprache.

**Konsistenz zwischen beiden:** Outbox-Pattern aus Postgres → Graph-DB. Postgres ist immer schreibender Master für graph-relevante Entitäten. Graph-DB ist read-replica-with-derivations — sie speichert zusätzliche relationsale Strukturen, die in Postgres als Foreign Keys vorliegen.

**Kosten dieser Wahl** (in v5 explizit benannt, weil in Round 2 explizit committed):

- Doppelte Backup-Pipeline.
- Zwei Observability-Stacks.
- Cross-DB-Transaktion via Outbox = eventual consistency in Read-Pfaden, eingehalten in Write-Pfaden.
- Engineering-Aufwand pro Schema-Migration: 2× (Postgres-Migration + Graph-Migration).

**Akzeptanz dieser Kosten:** der erste Design-Partner (§10) profitiert vom graph-nativen Query-Modell ausreichend, um diese Kosten zu rechtfertigen. Wenn nach 6 Monaten Co-Build die Cypher-Queries nicht das tragen, was Postgres+pgvector+rekursive CTEs nicht tragen würden, ist v5.1 ein Fall-Back auf Postgres+Apache-AGE oder Postgres-only mit Graph-API-Layer. Diese Eskalations-Klausel ist explizit Teil von v5 (siehe §13.2).

---

## 5. Build-Set: das vertikale OS

### 5.1 In-house gebaut

1. **Graph + AI-Operator-Layer** (der Kern)
2. **Tailored CV + Proposal Generation** (graph-nativ, nicht aus dem Regal)
3. **Time Tracking + Expense Capture** (graph-native Nutzung; tiefe Capacity-/Allocation-Integration)
4. **Contract Repository + e-Signature** (eIDAS Advanced Electronic Signature; Vertragsentwurf graph-aware)

### 5.2 Integriert, nicht gebaut

| Bereich | Integrationspartner (Hypothese) | Kommentar |
|---|---|---|
| DATEV / E-Rechnung | DATEV API; XRechnung-Generator | Endpoint von BillingPrepRecord. |
| ELSTER | offizielle ELSTER-Schnittstelle | Steuerlich relevante Exporte. |
| Identity / SSO | WorkOS oder Clerk EU-region | OIDC, SAML, SCIM. |
| Calendar / E-Mail | Microsoft 365 / Google Workspace | Read-only sync für Trigger Detection und Collaboration Context. |
| Tender-Feeds | TED, bund.de, evergabe-online | Ingestion-Adapter; Phase 1 für Bestand-Match, Phase 2 erweitert. |
| Regulatorien-Feeds (Phase 2) | BaFin, BSI, EU OJ, Bundesgesetzblatt-RSS | Markt-Signal-Source. |
| News (Phase 2) | spezialisierte Branchen-News-Feeds | Markt-Signal-Source. |
| Document Storage | S3-kompatibel EU-region (oder customer-cloud) | Files-Plane. |
| BetrVG-Mode-Tooling | nativ gebaut, nicht integriert | Compliance-Kern. |

### 5.3 Strategische Konsequenz

v5 commits zum **vertikalen OS**, nicht zum AI-Layer-auf-PSA. Das hat drei Konsequenzen:

Erstens, der MVP ist **größer** als ein PSA-Plugin oder ein AI-Chat-Wrapper. Er ist ein Operating-System, das die Beratung in den vier gebauten Bereichen vollständig ablöst.

Zweitens, der **Time-to-First-Customer ist lang** (12–18 Monate). Co-Build (§10) ist die einzige defensible Gangart.

Drittens, der **Moat ist tiefer**. Beratungen, die Consultry adoptieren, ersetzen Harvest, DocuSign und ihre eigenen CV-Pflege-Excels. Die Switching-Costs nach 12 Monaten Nutzung sind hoch, weil der Graph zur Wahrnehmung der eigenen Geschäftsstruktur geworden ist.

---

## 6. Liability, Approval, Audit

### 6.1 Liability-Regel

Die Approval-Gate gilt für **jeden AI-Output, für den ein Mensch oder die Beratung haftbar wäre, wenn er falsch ist**. Das schließt explizit ein:

- Externe Kommunikation (E-Mails, Briefe, Proposal-PDFs, Slack/Teams an Kunden)
- Vertragliche Inhalte (Klauseln, SLAs, Deliverables)
- Regulatorische Behauptungen (zitierte Paragraphen, Compliance-Aussagen)
- Personenbezogene Aussagen (Skill-Behauptungen über Berater:innen, Verfügbarkeitszusagen)
- Finanzielle Werte (Stundensätze, Margen, Pricing-Vorschläge, sobald sie Empfänger erreichen)
- Staffing-Empfehlungen, die externalisiert werden

Interne, AI-direkt akzeptable Outputs:

- Klassifikationen, die nur in Listen-Filtern sichtbar werden
- Drafts, die in Approval-Pending-State landen
- Read- und Suggest-Operationen, die UI-Vorschläge produzieren ohne State-Mutation

### 6.2 Approval-Gate-UX

Hybrides Pattern:

**Inline gates** für hochfrequente, niedrig-kritische Artefakte:
- Knowledge-Klassifikation, die ein Asset taggt
- Suggested skill match in der Capacity-Suche
- Draft-Zusammenfassung eines DecisionRecord

UI: Im Kontext sichtbar, drei Buttons (Annehmen, Bearbeiten, Verwerfen), Approval als Audit-Event mit Approver-ID.

**Central queue** für niederfrequente, hoch-kritische Artefakte:
- Outbound-Kommunikation (E-Mail-Draft, Proposal-PDF)
- Vertrags-Drafts und Klausel-Vorschläge
- Regulatorische-Zitate-tragender Text
- Externalisierungs-bereite Staffing-Pläne

UI: Approval-Inbox mit Filtern (Typ, Alter, Approver), pro Item Source-Binding-Anzeige, Diff-View, Audit-Pfad.

### 6.3 Audit-Trail

Jeder AI-Operator-Call schreibt einen Audit-Event mit:

- Operator-Name (read, classify, ..., plan)
- Input-Hash (canonical-form-hash der Eingabe)
- Output-Hash
- Modell-ID + Modell-Version (z.B. claude-sonnet-4-6@2026-04-01)
- Prompt-Version (git-commit-hash)
- Source-Bindings (Liste der Graph-Knoten/Doc-Spans, auf die sich der Output stützt)
- Approver-ID (falls Approval-Pending → Approved/Rejected/Edited)
- Zeitstempel (ISO-8601 UTC)
- Tenant-ID

Audit-Events sind append-only, kryptografisch verkettet (jeder Event enthält Hash des vorherigen), und auf Anfrage exportierbar als signierter Audit-File für externe Auditoren.

---

## 7. AI Reliability Spine — Phase 0, nicht Phase 1b

Die Spine ist die strukturelle Aufsichts-Schicht, die die Karpathy-3.0-Risiken eindämmt. Sie ist **Phase 0** — d.h. sie existiert bevor das erste Produkt-Feature gebaut wird. Ohne sie ist die North-Star-Architektur eine Behauptung, kein Eigenschaft.

Die Spine besteht aus sechs Komponenten:

### 7.1 Versionierte Prompts

Prompts sind **Quellcode-Artefakte**: in Git versioniert, code-reviewed in PRs, mit semantischer Versionierung. Jeder Prompt hat eine `prompt_id`, eine `version`, einen `model_compatibility_range`, und einen `eval_baseline_id`. Live-Deployments referenzieren Prompts per `prompt_id@version`.

### 7.2 Eval-Suite als CI-Gate

Pro Prompt existiert ein Eval-Set: 20–200 Test-Fälle mit erwarteten Outputs (oder Output-Eigenschaften). Beim PR-Merge eines Prompts oder bei Modell-Wechsel läuft die Eval-Suite. Pass-Rate-Schwellwerte sind pro Operator definiert (z.B. Classify ≥ 95%, Draft ≥ 80% acceptable, Review ≥ 90% reproduzierbar). Unterhalb des Schwellwerts ist Merge gesperrt.

### 7.3 Drift-Monitor

Live-Deployments samplen Operator-Calls (1–5%) und vergleichen Outputs gegen Baseline-Distributionen. Wenn Output-Verteilungen signifikant von Baseline abweichen (KS-Test, embedding-Distanz-Drift, Klassifizierer-Confidence-Drift), löst das einen Alarm aus. Drift kann durch Modell-Update auf Vendor-Seite, durch Datenverteilungs-Wechsel im Tenant, oder durch Prompt-Bug entstehen.

### 7.4 Halluzinations-Vorfilter

Vor Auslieferung eines Draft-, Summary- oder Reviews-Outputs läuft ein Filter, der faktische Behauptungen extrahiert und gegen Source-Bindings prüft. Wenn ein faktischer Anspruch keinen Source-Binding hat, wird er entweder entfernt, mit `[Quelle fehlt]` markiert, oder die ganze Generierung wird zur Re-Generierung mit Source-Constraints zurückgegeben. Welche Strategie greift, ist pro Operator konfiguriert.

### 7.5 Source-Binding-Enforcement

Jeder Operator-Output, der faktische Aussagen enthalten kann (Summarise, Review, Draft mit Fakten, Plan mit Begründungen), muss Source-Bindings zurückgeben. Source-Bindings sind Tupel `(graph_node_id, span_offset, span_length)` oder `(doc_id, page, span)`. Outputs ohne Bindings werden vom System abgelehnt — der Operator-Call schlägt fehl mit `MissingSourceBinding`.

### 7.6 PII-Routing-Layer

Vor Operator-Aufruf klassifiziert ein deterministischer (1.0) Klassifizierer den Input nach PII-Sensitivität. PII-haltige Inputs (Personen-Klarnamen mit Bewertungen, gesundheitsbezogene Daten, Vertragsbedingungen) werden zu EU-hosted Modellen geroutet (Mistral Large EU, Aleph Alpha, Anthropic via Bedrock EU-region). Nicht-PII-Inputs dürfen Frontier-API-Endpoints nutzen (Anthropic primary EU-region, OpenAI EU-region als Fallback).

---

## 8. Compliance-Posture

### 8.1 EU AI Act: High-Risk-by-Default

v5 behandelt alle AI-Features als **high-risk by default** und produziert die volle Conformity-Documentation pro Feature:

- Risk Management System (Art. 9)
- Data Governance (Art. 10) — Spezifikation der Trainings-/Eval-/Validation-Daten pro Operator
- Technical Documentation (Art. 11, Anhang IV)
- Record-Keeping (Art. 12) — abgedeckt durch Audit-Trail (§6.3)
- Transparency to Deployers (Art. 13) — Operator-Spezifikation, Capability-Limits, bekannte Schwächen
- Human Oversight (Art. 14) — abgedeckt durch Approval-Gate (§6.2)
- Accuracy, Robustness, Cybersecurity (Art. 15) — abgedeckt durch Eval-Suite, Drift-Monitor, Halluzinations-Vorfilter (§7)
- Quality Management System (Art. 17)
- Conformity Assessment (Art. 43) — internal route, da kein Annex-I-Sicherheits-Komponenten-Use-Case
- Declaration of Conformity (Art. 47)
- Post-Market Monitoring (Art. 72)

Diese Items sind **Phase-0/Phase-1a-Deliverables**, nicht „kümmern wir uns später". Sie sind Voraussetzung dafür, dass v5 als „compliance-grounded" auftreten darf.

**Annex-III-§4-Kategorisierung:** Tailored-CV-Generierung und Staffing-Match werden formell als Annex-III-§4-High-Risk-Systeme (Employment, workers management) klassifiziert. Andere Operatoren (Knowledge-Search, DecisionRecord-Strukturierung, Markt-Signal-Klassifikation) folgen der gleichen Documentation-Disziplin, auch wenn sie technisch nicht in Annex III fallen.

### 8.2 BetrVG-Mode (Heavy)

In Beratungen mit Betriebsrat:

- **Per-feature opt-in:** der Betriebsrat sieht eine Liste der AI-Features mit Beschreibung, Datenfluss, betroffenen Mitarbeitenden-Daten. Jedes Feature ist standardmäßig deaktiviert; Aktivierung erfordert dokumentierte Betriebsrats-Zustimmung.
- **Regression-on-behaviour-change:** wenn ein Prompt-Update oder Modell-Wechsel das Eval-Verhalten signifikant ändert, triggert es eine Re-Review-Anforderung an den Betriebsrat. Standard-Defaults werden in der Re-Review-Periode auf den vor-Wechsel-State eingefroren.
- **Quartalsweise auditable employee-impact reports:** automatisch generierter Bericht über aggregierte Mitarbeitenden-Daten-Verarbeitungs-Volumina, Ablehnungs-/Edit-Raten von AI-Vorschlägen pro Feature, geplante Feature-Erweiterungen.

In Beratungen ohne Betriebsrat: Default-Mode ist BetrVG-Light (Disclosure ohne Opt-In-Gating), aber alle anderen Heavy-Komponenten bleiben aktiv. BetrVG-Heavy ist konfigurierbar per Tenant-Install.

### 8.3 DSGVO

Standardanforderungen, die hier nicht im Detail wiederholt werden, weil der EU-AI-Act-Compliance-Frame sie mitnimmt: Datenminimierung, Zweckbindung, Aufbewahrungsfristen pro Datenklasse, DSAR-Workflows, Art. 32-Sicherheitsmaßnahmen, DPIA pro AI-Feature, Sub-Processor-Register.

### 8.4 UWG (Phase 2 — Outreach)

- §7 UWG (unzumutbare Belästigung): Outreach-Kanäle gating per Rechtsgrundlage, Consent-Register, Do-not-contact-Register.
- DSGVO Art. 6(1)(f) berechtigtes Interesse: dokumentierte Abwägung pro Outreach-Kampagne, Widerspruchsrecht (Art. 21).

### 8.5 eIDAS

Vertrags-e-Signaturen auf **Advanced Electronic Signature** (AdES, Art. 26 eIDAS) Niveau. Qualified Electronic Signature (QES) ist nicht v1-Ziel; die Architektur erlaubt Upgrade auf QES per Integration mit qualifizierten Trust-Service-Providern (Bundesdruckerei, D-Trust) wenn ein Kunde es fordert.

---

## 9. Hosting, Vendor, Tenancy

### 9.1 Tenancy

**Single-Tenant per Customer.** Jede Beratung erhält eine isolierte Stack-Instanz: eigene Postgres-DB, eigene Graph-DB, eigene Object-Storage-Buckets, eigene AI-Inference-Path-Konfiguration.

Vorteile (in dieser Wedge-Kombination):
- Maximale Datenisolation (Compliance-Argument).
- Customer-Cloud-Hosting möglich (siehe §9.2).
- Keine Cross-Tenant-Leakage-Klassen.
- Conformity-Documentation pro Tenant einfacher (eindeutige Datenflüsse).

Kosten:
- Provisioning-Automation ist Phase-0-Pflicht, nicht „nice-to-have". Manuelle Provisionierung skaliert nicht über ~5 Tenants.
- Per-Tenant-Observability-Overhead.
- Updates sind Tenant-by-Tenant Rollouts, nicht globale Deployments.

### 9.2 Hosting-Topologie

**Hybrid: Control plane EU-hyperscaler + Customer data plane customer-cloud.**

**Control Plane** (Consultry-managed, EU-hyperscaler):
- Auth, Identity-Federation, License-Management
- Telemetrie (anonymisiert, customer-opt-in für detaillierte Telemetrie)
- Release-Management, Deployment-Orchestrierung
- Prompt-Registry und Eval-Suite-Runner
- Drift-Monitor-Aggregation (anonymisiert über Tenants)

EU-Hyperscaler-Kandidaten: AWS Frankfurt (Bedrock-Verfügbarkeit), Azure Germany, GCP Belgium. Schrems-II-Mitigation per SCCs + supplementary measures.

**Customer Data Plane** (customer-cloud):
- Postgres + Graph-DB
- Object Storage (Dokumente, Verträge, Knowledge-Assets)
- AI-Inference-Path für PII-haltige Operatoren

Customer-Cloud-Optionen: AWS / Azure / GCP EU-region; Hetzner; OVHcloud; Open Telekom Cloud; on-prem (für regulierte Beratungen).

Cross-Cloud-Deployment-Automation ist eine Phase-0-Engineering-Herausforderung, in §13 als Risiko geflagt.

### 9.3 Model Vendor Stack

**Hybrid PII-Routing:**

| Operator-Klasse | Modell-Pfad |
|---|---|
| Non-PII Reasoning (Methodology-Klassifikation, Markt-Signal-Klassifikation, abstrakte Knowledge-Suche) | Anthropic Claude Sonnet (EU-region primary) → OpenAI GPT-4-class (EU-region fallback) |
| PII-touching (Tailored CV, Stakeholder-Summaries, Client-Comms-Draft, Mitarbeitenden-bezogene Outputs) | Anthropic via AWS Bedrock EU-region; Mistral Large EU; Aleph Alpha (für besondere Customer-Anforderungen) |
| On-Prem-required (regulierte Customer ohne externe AI-Calls) | Llama 3.1 oder Mistral-Small selbst-gehostet auf customer-cloud — Phase 2+ |

Routing-Entscheidung wird pro Operator-Call vom PII-Routing-Layer (§7.6) getroffen.

---

## 10. Co-Build mit dem ersten Kunden

### 10.1 Modus

v5 commits zur **6–12-monatigen Design-Partnerschaft** mit einem konkret benannten Beratungs-Boutique aus der Wedge (10–30 Mitarbeitende, IT-Strategie, Bestandskunden-Anteil ≥ 70%).

**Kommerzieller Rahmen:** Discounted oder kostenlos für die Co-Build-Periode, mit Migrationsverpflichtung am Ende. Vertragliche Verpflichtung des Design-Partners, mind. zwei reale Projekte voll im System zu führen. Nutzungsrechte für anonymisierte Telemetrie zu Lernzwecken.

**Engineering-Modus:** wöchentliche Design-Sessions, monatliche Sprint-Reviews mit Partner-Beteiligung. Kein Auto-Update; jeder Release wird mit Partner abgesprochen.

### 10.2 Was der Design-Partner liefert

- Reale Workflows aus Sales, Proposal, Staffing, Delivery, Billing-Prep
- Reale Methodik-Dokumente (für Methodology-Knoten und Review-Operator)
- Reale Stakeholder-Daten (anonymisiert oder unter NDA)
- Feedback auf Approval-UX (welche Gates fühlen sich produktiv an, welche nervig)
- BetrVG-Test (falls Betriebsrat existiert)

### 10.3 Wie v5 vom Design-Partner geprägt wird

v5 ist absichtlich **unterspezifiziert** in Bereichen, wo Design-Partner-Input besser ist als Pre-Commitment:

- Konkrete Bildschirme und Detail-Workflows
- Pricing-Modell-Subtilitäten (Festpreis vs. T&M vs. Mischformen, wie sie der Partner führt)
- Genauer Set der Skill-Taxonomie
- Methodology-Schema (welche Knoten-Attribute, welche Review-Kriterien)
- Genauer Set der DecisionRecord-Templates

Diese Bereiche werden in §10.4 als „TBD im Co-Build" gelabelt. Sie sind nicht Lücken — sie sind Slots, in denen der Partner die Form bestimmt.

### 10.4 Slots TBD im Co-Build

- UX-Detail-Spezifikationen aller Hauptscreens
- Pricing-Modell-Detail
- Methodology-Schema
- Skill-Taxonomie
- DecisionRecord-Templates
- Spezifische Approval-Workflows pro Artefakt-Typ
- Onboarding-Flow für neue Beratungs-Mitarbeitende
- Reporting-Dashboards (Inhalte, nicht Architektur)

---

## 11. Phasen

### 11.1 Phase 0 — Foundation (vor jedem Customer-Feature)

Ohne Phase 0 ist die North-Star-Architektur unerreichbar.

- Single-Tenant Provisioning Automation (Cross-Cloud)
- Postgres + Graph-DB-Setup mit Outbox-Konsistenz
- i18n-Backbone DE/EN, Toggle, Lokalisierungs-Pipeline
- Identity / SSO (WorkOS oder Clerk EU-region)
- AI Reliability Spine (alle sechs Komponenten in §7)
- Audit-Trail-Infrastruktur (append-only, kryptografisch verkettet)
- Compliance-Documentation-Skeleton (AI-Act-Conformity-File-Template, BetrVG-Mode-Toolkit)
- Consultry Design System v1.2 (warm coral, professional restraint, dark mode)
- Observability-Stack (OpenTelemetry, EU-region Backends)
- Deployment-Pipeline + GitOps-Setup
- Eval-Suite-Runner (CI-Gate für Prompts und Modell-Wechsel)

Dauer-Schätzung: 3–4 Monate für ein 3–5-Engineer-Team.

### 11.2 Phase 1a — MVP (Win-and-Deliver-Loop)

Sechs Module als Sichten über den Graph, vom Trigger bis zum Billing-Handoff:

1. **Account Growth (Bestandskunden-Layer)** — Kundenstamm, Kundenhistorie, Stakeholder-Graph mit Lebenslauf-/Studium-/Arbeitgeber-Trail, Trigger-Inbox.
2. **Consultant + Capacity** — Profile, Skills, Verfügbarkeit, ProjectExperience.
3. **Opportunity → Proposal → Contract** — Engagement Brief, Skill-Requirement, Pricing, TailoredCV-Operator (Annex-III-§4-konform), StaffingProposal-Operator, ContractDraft mit Klauseln-als-Attributen, eIDAS-AdES-Signatur.
4. **Knowledge & Reuse v1** — Methodology-, LessonsLearned-, DecisionRecord-Knoten; semantische Suche; Suggest-Operator für Reuse.
5. **Allocation + Delivery (Basis)** — Project, Milestone, Allocation, ProgressReport, RiskItem, DecisionRecord-Live-Logging, TimeEntry/ExpenseEntry-Capture.
6. **Commercial Control + Billing-Prep** — BillingPrepRecord, DATEV-Export, XRechnung-Generation, Margin-Berechnung deterministisch.

**MVP-Erfolgskriterium:** der Design-Partner führt mindestens zwei reale Projekte vom Trigger bis zum Billing-Handoff komplett im System, ohne in Excel oder Drittsysteme zurückzufallen, mit aktivem Audit-Trail und Approval-Gates.

Dauer-Schätzung: 6–8 Monate parallel zum laufenden Co-Build.

### 11.3 Phase 1b — Phase-1-Komplettierung

- **Review-Operator → QA-Layer** angewendet auf Code- und Dokument-Artefakte gegen Methodology-Knoten.
- **AI-Workspace-Surface** (konversationelle Schicht über Modulen, nicht eigenes Modul).
- **Collaboration & Approvals** (Multi-Approver-Workflows, Delegation, Eskalation).
- **Governance & Audit UI** (Auditor-Read-Surface, BetrVG-Reporting, Conformity-Documentation-Export).
- **Erweiterte Integrationen** (Microsoft 365, Slack, Jira read-sync).

Dauer-Schätzung: 3–4 Monate.

### 11.4 Phase 1 → Phase 2 Phase-Gate

- Design-Partner produktiv im MVP-Loop seit ≥ 3 Monaten.
- Reliability-Spine-Metriken belegen Eval-Pass-Raten oberhalb der Schwellwerte über alle Operatoren.
- Audit-Trail in CI-Test belegt End-to-End-Verkettung.
- AI-Act-Conformity-File für Phase-1a-AI-Features ist intern reviewed und auditor-ready.
- BetrVG-Heavy-Mode in Test-Tenant produktiv getestet.

### 11.5 Phase 2 — Markt-Signale + Compliance-native Neukunden-Akquise

- **Market Intelligence Sub-System** — Regulatorien, Trends, News, Wirtschaft. RegulatoryItem, TrendItem, NewsItem, MacroIndicator als Knoten. Classify-Operator pro Quellklasse. Routing in Account-Growth (Bestandskunden-Trigger) und in das New-Client-Acquisition-System.
- **New Client Acquisition System** — Prospect (datentechnisch streng getrennt von Account), ConsentRecord, EnrichmentSource-Register. UWG-/DSGVO-konformer Outreach-Flow mit Approval-Gates auf jeder Outbound-Aktion.
- **Review-Operator-Erweiterung** — Decks, Diagramme, Test-Infrastruktur-Generierung.

### 11.6 Phase 3+ — Erweiterungs-Kandidaten (explizit nicht in v1/v2)

Wedge-Erweiterung auf 30–100 (mid-size Beratungen). Vollwertiges HR (An-/Abwesenheit, Arbeitsanträge). Events-Modul. Recruiting-Pipeline. ERP-Funktionen jenseits DATEV-Handoff. Client Portal mit Schreibrechten. Autonome Tender-Submission. Vollständiges Legal Automation System. **Marketing-CMS bleibt out-of-OS-scope** (siehe `marketing-site/` Workstream).

---

## 12. Kapital, Team, Time-to-Customer

### 12.1 Realistische Schätzung

**Time-to-First-Paying-Customer:** 12–18 Monate. Co-Build-Phase zählt nicht als Revenue, sondern als gemeinsame Produkt-Definition.

**Team-Anforderung:** 3–5 Engineers + 1 Product/Design + 1 Founder mit Sales-/Customer-Verantwortung. Davon mindestens:
- 1 Senior Backend Engineer mit Postgres + Graph-DB + Compliance-Erfahrung
- 1 Senior AI Engineer (Prompt-Engineering, Eval-Suites, Reliability-Engineering)
- 1 Full-Stack Engineer (Next.js + Approval-UX + Design-System)
- 1 DevOps/Platform (Cross-Cloud-Provisioning, Observability, Security)
- 1 Senior Product/Design (Co-Build-Partner-Beziehung, UX-Spezifikation)

**Kapital-Implikation:** vor erstem Revenue 12–18 Monate Burn. Bei deutscher Mid-Senior-Engineer-Compensation (~120k Euro Voll-Kostensatz) und 5-Personen-Team: ca. 600–900k Euro Burn vor Revenue, plus Cloud- und Tooling-Kosten (~50–100k/Jahr). Realistic Pre-Seed/Seed-Range: 1.5–2.5 Mio Euro.

### 12.2 Risiko-Matrix

| Risiko | Wahrscheinlichkeit | Auswirkung | Mitigation |
|---|---|---|---|
| Design-Partner springt mid-Build ab | mittel | hoch | Vertragliche Migrationsverpflichtung; zweiter Partner-Backup ab Monat 3 |
| Cross-Cloud-Provisioning-Komplexität explodiert | mittel | hoch | Phase 0 mit Spike vor Phase-1a-Start; Fallback auf single-cloud-deployment-mode |
| Graph-DB liefert nicht den erwarteten Mehrwert | niedrig-mittel | mittel | Eskalations-Klausel §13.2: Fallback auf Postgres+AGE oder Postgres-only |
| AI-Act-Conformity-Aufwand unterschätzt | mittel | mittel-hoch | Externe Compliance-Beratung in Phase 0; Conformity-File-Template aus 8.1 |
| Eval-Suite-Wartung explodiert | niedrig-mittel | mittel | Eval-Volumen pro Operator capped (max 200); regelmäßige Eval-Set-Reviews |
| Frontier-Model-Vendor ändert AGB / EU-Datenflows | niedrig | hoch | Multi-Vendor-Architektur in §9.3; PII-Routing-Layer als Schutz |
| BetrVG-Heavy-Mode wird vom Partner abgelehnt als zu schwerfällig | mittel | mittel | Modus ist konfigurierbar per Install; Light-Default für betriebsratsfreie Beratungen |

---

## 13. Eskalations-Klauseln

### 13.1 North-Star-Revisionsklausel

Wenn ein Architektur-Vorschlag den North-Star-Satz aus §0 verletzen müsste, ist der Vorschlag **nicht** zu akzeptieren oder die Verletzung **stillschweigend zu tolerieren**. Stattdessen wird der North-Star-Satz selbst explizit revidiert, mit dokumentierter Begründung, in einem v5.x-Update. Der Satz ist die Quelle der Architektur-Wahrheit; Abweichungen ohne Revision sind technische Schulden mit Compliance-Risiko.

### 13.2 Graph-DB-Fallback-Klausel

Wenn nach 6 Monaten Co-Build die Cypher-Queries und Graph-Traversals nicht messbaren Mehrwert liefern (gemessen an: Operator-Performance, Engineer-Produktivität, Customer-perceived Mehrwert), ist v5.1 ein Migrationspfad zu **Postgres + Apache AGE** (eine DB, weniger Ops-Overhead) oder **Postgres-only mit Graph-API-Layer** (kein Cypher, Graph als API-Pattern). Die Migration soll nicht länger als 4 Wochen Engineering kosten — Phase-0-Schema-Design muss diese Migration als testbares Szenario halten.

### 13.3 Operator-Set-Erweiterungs-Klausel

Tool-Orchestrate und Auto-Execute sind in v1 explizit verboten (§3). Eine Aufnahme in v2+ erfordert:
- explizite Compliance-Review (welche AI-Act-Implikationen ändern sich)
- explizite Approval-Gate-Re-Architektur (wie bleibt Liability-Regel §6.1 erfüllt)
- Eval-Suite-Erweiterung um Multi-Step-Szenarien
- Design-Partner-Zustimmung
- v5.x-Update mit dokumentierter Begründung

### 13.4 Wedge-Erweiterungs-Klausel

Boutique 10–30 ist v1-Wedge. Erweiterung auf 30–100 (Phase 3+) erfordert:
- belegte MVP-Adoption durch ≥ 3 Boutique-Beratungen
- Lessons Learned aus Boutique-Adoption fließen in Mid-Size-Spec ein
- Architektur-Review: was muss multi-practice, multi-org-unit ergänzt werden

---

## 14. Was v5 NICHT festlegt

Diese Punkte sind im Co-Build mit dem Design-Partner zu klären (§10.4) und werden in v5.1+ ergänzt:

- Konkrete Screens und Detail-Workflows pro Modul
- Pricing-Modell-Subtilitäten (Festpreis-/T&M-/Hybrid-Logiken)
- Skill-Taxonomie
- Methodology-Schema-Detail
- DecisionRecord-Templates
- Onboarding-Flow für Beratungs-Mitarbeitende
- Detail-Reporting-Dashboards

---

## Anhang A — Sechzehn Commitments aus dem Q&A 5.–8. Mai 2026

Jede Aussage in v5.0 lässt sich auf eines oder mehrere der folgenden Commitments zurückführen.

**Round 1 — Architektur-Spine:**

1. Worst-Case-Failure: AI spricht in jemandes Stimme ohne Approval.
2. Architektur-North-Star (selbst-formuliert nach Vorschlag): compliance-grounded knowledge graph + supervised AI collaborator. Graph in 1.0 Postgres mit Audit-Triggers (in Round 2 erweitert auf Postgres + dedizierte Graph-DB). AI = bounded operators, niemals write/send/file/commit ohne explizite Approval.
3. Approval-Scope: alle AI-Outputs, für die ein Mensch haftbar wäre.
4. Moat: Compliance-native DACH defaults + consultancy data graph + AI Reliability Spine, **only together**.
5. Erster Kunde: Boutique IT-Strategie-Beratung, 10–30 Consultants, Bestandskunden-heavy.

**Round 2 — Feature-Spektrum:**

6. Graph-DB: dedizierte Neo4j oder Memgraph + Postgres.
7. Operator-Set: Read, Classify, Suggest, Summarise, Draft, Review, Plan. Tool-Orchestrate und Auto-Execute explizit verboten in v1.
8. Build-Set: Graph + AI-Operator + CV/Proposal + Time Tracking + Contract+e-Sign. Vertical-OS-Strategie.
9. First-class Knowledge nodes: Methodology, LessonsLearned, DecisionRecord. Klauseln als Attribut.

**Round 3 — Phasen + Spine:**

10. Path to MVP: Co-Build mit erstem Kunden, 6–12 Monate Design-Partnerschaft.
11. Spine-Tiefe: HEAVY (Drift-Monitor + Regression-on-Prompt-Change + Halluzinations-Vorfilter).
12. Approval-UX: Hybrid (inline für hochfrequent, queue für hoch-kritisch).
13. Tenancy: Single-Tenant pro Kunde.

**Round 4 — Compliance + Vendor + BetrVG:**

14. AI Act: High-Risk-by-Default across all AI features, full conformity documentation.
15. Hosting: Hybrid Control-Plane (EU-Hyperscaler) + Customer-Cloud Data Plane.
16. Modell-Vendor: Hybrid (Frontier für non-PII, EU-hosted/local für PII). BetrVG-Mode: HEAVY (per-feature opt-in, regression on behaviour change, auditable employee impact).

---

**Ende v5.0.** Dieses Dokument ist die Quelle der Wahrheit für die Architektur. Das v1.0-Roadmap-Dokument (`Consultry-Roadmap-v1.0-MVP-and-Phasing.md`) bleibt als Skizzen-Reconciliation gültig, ist aber subordinate zu v5.0 bei Konflikten.

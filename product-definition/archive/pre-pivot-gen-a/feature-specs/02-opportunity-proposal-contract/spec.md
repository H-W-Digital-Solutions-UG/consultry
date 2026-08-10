# Feature Spec — Opportunity, Proposal & Contract

> **⚠️ ARCHIVIERT (12.06.2026 — [MVP-Foundation-Decisions v1.0](../../../../latest/Consultry-MVP-Foundation-Decisions-v1.0.md), T1).** Diese Spec gehört zur „Win-and-Deliver"-Generation (Gen A) und ist **kein MVP-Scope**. Verbindlich: [MVP-PRD v1.0](../../../superseded-product-baseline-2026-08/Consultry-MVP-PRD-v1.0.md) (Acquisition-to-Bid) + Foundation-Decisions. Persona-/Outcome-Tabellen dürfen als UX-Input wiederverwendet werden (Salvage, Foundation-Decisions §4). Nicht als Quelle der Wahrheit verwenden.

**Modul-ID:** `02-opportunity-proposal-contract`
**Status:** Draft v1.0 — MVP-Sharpening
**Datum:** 2026-05-28
**MVP-Phase:** 1a (Win & Deliver — Tag 1)
**Rolle im Loop:** Herzstück. Wandelt einen Bestandskunden-Trigger in einen unterschriebenen Vertrag.
**Bezug:** [PRD v4.1 §3](../../Consultry-PRD-v4.0-DACH-Operating-System.md), [PRD v5.0 §4.1](../../Consultry-PRD-v5.0-Software-Layered.md), [Roadmap §3.2](../../Consultry-Roadmap-v1.0-MVP-and-Phasing.md)

---

## 1. Job-to-be-Done

> **Eine Beratung verwandelt einen erkannten Bestandskunden-Bedarf in einen unterschriftsreifen, methodisch sauberen Vertrag — innerhalb von Stunden statt Wochen — ohne in Word, Excel, PowerPoint, PDF-Tools oder Mail-Anhänge zu fallen.**

Das Modul ist der einzige Ort, an dem aus einem `Trigger` ein verbindliches Kunden-Commitment wird. Wenn dieses Modul nicht funktioniert, funktioniert nichts.

### Outcome-Statement pro Persona

| Persona | Heutiges Outcome (Status quo) | Soll-Outcome (mit Consultry) |
|---|---|---|
| **Katrin (BD-Leiterin)** | Zerstückeltes Hin-und-Her zwischen CRM, Mail, Word, PPT. Proposal-Erstellung dauert 3–5 Personentage. | Engagement Brief → Staffing-Vorschlag → Tailored CVs → Pricing → Vertragsmappe in <4 h, Approval inklusive. |
| **Thomas (Managing Partner)** | Approval läuft via Mail mit PDF-Anhang. Keine Sicht auf Margenrechnung, Audit-Trail, Klausel-Abweichungen. | Approval-Queue zeigt jede AI-Empfehlung mit Quelle, Margen-Effekt, Klausel-Diff. Ein Klick reicht. |
| **Stefan (Senior Consultant / PL)** | Wird per Mail gefragt „passt das fachlich?" — antwortet ohne Kontext. | Sieht Engagement Brief + vorgeschlagenes Team in seinem Workspace, kann fachlich reviewen ohne Tool-Wechsel. |
| **Martina (Office Managerin)** | Sammelt Versionen, exportiert manuell, archiviert in Ordnerstruktur. | Send-ready Paket aus dem System; Archiv- und Signaturweg ist Default, nicht Handarbeit. |

---

## 2. In-Scope MVP (Tag 1)

Die folgenden Sub-Features müssen am ersten produktiven Tag bei einer Referenz-Beratung lauffähig sein, damit der MVP-Loop trägt (Roadmap §3.4):

| # | Sub-Feature | Begründung MVP-relevant |
|---|---|---|
| 2.1 | **Opportunity-Intake** (manuell + via Trigger-Übergabe aus Account Growth) | Ohne Opportunity kein Engagement Brief. |
| 2.2 | **Engagement Brief (AI-gestützt)** | Strukturierter Bedarf — Pflichtinput für alle Folgeoperatoren. |
| 2.3 | **Skill-Requirement-Definition** | Verbindungsstück zu Capacity. |
| 2.4 | **Staffing-Vorschlag (Operator)** | MVP-Kern (Roadmap §2). |
| 2.5 | **Tailored CV (Operator, Annex-III-§4)** | MVP-Kern, höchstes Wertversprechen pro Stunde gespart. |
| 2.6 | **Pricing-Frame (Templates + Margen-Vorschau)** | Margen-Sicherheit von Anfang an. |
| 2.7 | **Contract-Draft mit Klauseln-als-Attributen** | Klauseln sind Attribute am ContractDraft-Knoten, kein separater Knotentyp (PRD v5.0 commitment 9). |
| 2.8 | **AGB- / Standardklausel-Boilerplate-Auswahl** | Speist sich aus Knowledge & Reuse (Clause Library). |
| 2.9 | **Variantengenerierung (Lean / Standard / Premium)** | Verhandlungswerkzeug ab Tag 1 — drei Hebel statt einem. |
| 2.10 | **Approval-Gate vor jedem externalisierten Artefakt** | Compliance-Pflicht (PRD v5.0 §6.1, Annex III §4). |
| 2.11 | **eIDAS-AdES-Signatur (Advanced Electronic Signature)** | Vertragsabschluss-fähig ohne Drittsystem. |
| 2.12 | **Audit-Trail aller AI-Outputs** | Jeder Operator-Aufruf mit Quelle, Version, Approver protokolliert. |

---

## 3. Out-of-Scope MVP

Bewusst nicht Teil von Tag 1 (mit Verweis auf wo es later kommt):

| Bereich | Begründung / wann | Quelle |
|---|---|---|
| Multi-Approver-Workflows (>1 Stufe) | Phase 1b — Collaboration & Approvals | Roadmap §3.3 |
| Vollautomatischer Margen-Optimizer | Phase 1b — Pricing-Assist nur Templates im MVP | Roadmap §6 |
| Tender-/Ausschreibungs-Intake (Neukunden) | Phase 2 — New Client Acquisition System | PRD v4.1 §7.2 |
| Vollständige Legal-Review-Automation | Phase 3+ — MVP nur Assist | PRD v4.1 §4.3 lines 197–217 |
| QES (Qualifizierte Elektronische Signatur) | Optional in Phase 1b; MVP = AdES nach eIDAS | PRD v5.0 §8.5 |
| Implicit Skill-Inference aus Projekthistorie | Phase 1b — MVP nur explizites Skill-Matching | Roadmap §6 |

---

## 4. Entities & Datenmodell

Alle Entities sind Knoten im Knowledge Graph (PRD v5.0 §0, §4.1). Module sind Views über den Graphen, nicht eigene Datensilos.

### 4.1 Kern-Entities

```
Opportunity
  ├── source: AccountID  (FK → Account Growth)
  ├── trigger: TriggerID? (FK → Account Growth, optional bei manuellem Intake)
  ├── stage: enum { Intake, Qualified, Briefed, Staffed, Proposed, Negotiated, Won, Lost, Abandoned }
  ├── owner: ConsultantID
  ├── createdAt, updatedAt
  └── HAS_ONE EngagementBrief
      HAS_MANY SkillRequirement
      HAS_ONE PricingFrame
      HAS_ONE Proposal (current version)
      HAS_MANY ProposalVariant (Lean | Standard | Premium)
      AUDIT_LOG every state transition

EngagementBrief
  ├── outcome_statement: text
  ├── scope_inclusions: text[]
  ├── scope_exclusions: text[]
  ├── timeline: { start, end, milestones[] }
  ├── stakeholders_client: StakeholderID[]
  ├── methodology_anchor: MethodologyID  (FK → Knowledge)
  ├── source_bindings: SourceBinding[]   (every claim traceable, PRD v5.0 §7.5)
  ├── approval_state: enum { Draft, Approved, Externalised }
  └── operator_provenance: { operator: "Draft", model_version, prompt_version, input_hash, ... }

SkillRequirement
  ├── skill: SkillTaxonomyEntry   (taxonomy TBD im Co-Build, PRD v5.0 §10.4)
  ├── level_min: enum { Junior, Mid, Senior, Principal }
  ├── duration_pd: int            (person-days)
  ├── locality: enum { OnSite, Remote, Hybrid }
  ├── must_have: bool
  └── derived_from: EngagementBriefID

PricingFrame
  ├── model: enum { TimeMaterial, FixedPrice, Capped, Retainer }
  ├── currency: ISO_4217           (EUR-default)
  ├── line_items: PricingLine[]
  ├── target_margin_pct: decimal
  ├── computed_margin_pct: decimal  (read-only, derived from Capacity costs)
  ├── approval_state: enum { Draft, Approved, Externalised }
  └── operator_provenance: { ... }

Proposal
  ├── opportunity: OpportunityID
  ├── variant: enum { Lean, Standard, Premium }
  ├── tailored_cvs: TailoredCV[]
  ├── staffing_proposal: StaffingProposal
  ├── contract_draft: ContractDraft
  ├── cover_letter: text
  ├── version: int                  (monotone, write-once-on-approval)
  └── approval_state, operator_provenance

TailoredCV                          (Annex-III-§4 High-Risk — PRD v5.0 §8.1)
  ├── consultant: ConsultantID
  ├── base_profile_version: int     (anchor at Capacity-side)
  ├── adapted_sections: text-blocks with source_bindings to ProjectExperience
  ├── omitted_claims: ClaimID[]     (audit: which base claims were deliberately omitted)
  ├── approval_state: enum { Draft, Approved, Externalised }
  ├── pii_routing_proof: { model, region }   (PRD v5.0 §7.6 — must be EU-hosted)
  └── operator_provenance

StaffingProposal                    (Annex-III-§4 High-Risk)
  ├── consultants: { ConsultantID, role, fte_pct, start, end }[]
  ├── coverage_skill_map: { SkillRequirementID → ConsultantID, confidence_score }
  ├── alternatives: AlternativeStaffing[]  (≥1 alternative required by Approval rule)
  ├── approval_state, operator_provenance

ContractDraft
  ├── opportunity: OpportunityID
  ├── proposal_variant: enum { Lean, Standard, Premium }
  ├── deliverable_specs: DeliverableSpec[]
  ├── slas: SLA[]
  ├── clauses: Clause[]              (attributes — NOT a separate node type, PRD v5.0 commitment 9)
  ├── linked_clause_library_entries: ClauseLibraryEntryID[]  (FK → Knowledge)
  ├── clause_diff_from_library: ClauseDiff[]  (deviations flagged for legal review)
  ├── pricing_frame: PricingFrameID
  └── approval_state, operator_provenance

Contract                              (signed, immutable)
  ├── draft: ContractDraftID
  ├── signed_at, signed_by_client, signed_by_provider
  ├── signature_method: enum { AdES, QES, WetInk }
  ├── eidas_envelope: SignatureEnvelope
  └── spawns: ProjectID                (→ Allocation & Delivery)
```

### 4.2 Klauseln-als-Attribute — Designentscheidung

Klauseln sind Attribute am `ContractDraft`, nicht eigene Knoten. Begründung (PRD v5.0 commitment 9):

- Identität einer Klausel ist im Vertragskontext relevant, nicht eigenständig.
- `ClauseLibraryEntry` bleibt im Knowledge-Graph als Bibliotheks-Eintrag; die Klausel im Vertrag ist eine **abgeleitete Instanz** mit Link zur Library-Quelle + optionalem Diff.
- Vermeidet kombinatorische Knoten-Explosion bei vielen Vertragsvarianten.

### 4.3 State-Machine `Opportunity.stage`

```
Intake ──→ Qualified ──→ Briefed ──→ Staffed ──→ Proposed ──→ Negotiated ──→ Won
   │           │            │           │            │              │
   └───────────┴────────────┴───────────┴────────────┴──────────────┴─→ Lost / Abandoned
```

- Vorwärtssprünge nur über Approval-Gates (siehe §6).
- Rücksprünge erlaubt (z. B. Briefed → Qualified, wenn nach Rückfragen Bedarf neu definiert wurde) — protokolliert im Audit-Trail.
- `Won` ist nur erreichbar wenn `Contract` existiert und signiert ist.

---

## 5. Sub-Features im Detail

### 5.1 Opportunity-Intake

**Trigger-getrieben (Default):** Übergabe aus Account Growth mit `TriggerID`, `AccountID`, vorgemerkten `Stakeholder[]`, Trigger-Kontext (z. B. „Stakeholder X hat Restrukturierungs-Initiative auf LinkedIn angekündigt").

**Manuell:** Katrin erfasst Opportunity ohne Trigger (z. B. nach Live-Gespräch). Pflichtfelder: Account, Stakeholder, ein-Satz-Beschreibung. Alles andere optional, kann nachgeführt werden.

**Anti-Pattern explizit:** Kein „Quick Add"-Dialog mit 20 Pflichtfeldern. Intake muss in <60 s machbar sein.

### 5.2 Engagement Brief

Ein strukturiertes Dokument, das den Bedarf des Kunden auf eine Seite operationalisiert: was soll als Outcome am Ende stehen, was ist In/Out of Scope, welche Methodologie ist Anker, welche Stakeholder sind involviert, welcher Zeitrahmen.

**AI-Operator:** `Draft` (PRD v5.0 §3) — generiert Brief aus Trigger-Kontext + Account-Historie + Stakeholder-Profilen + ähnlichen historischen Opportunities aus Knowledge.

**Source-Binding-Pflicht:** Jeder Satz im Brief verweist auf Quelle (Trigger-Email, Mitschrift, Kundenhistorie-Eintrag, Methodology-Knoten). Sätze ohne Quellbindung werden vom Vorfilter abgelehnt (PRD v5.0 §7.5).

**Approval:** Inline-Approval-Gate auf Brief-Ebene. Katrin reviewt, ändert, approvet. Erst dann erscheinen Folgeoperatoren als ausführbar.

### 5.3 Skill-Requirement-Definition

Aus Engagement Brief generiert (`Classify`-Operator gegen Skill-Taxonomie). Pro Requirement: Skill, Min-Level, Person-Days, On-Site / Remote / Hybrid, Must-Have vs Nice-to-Have.

**Editierbar als Liste**, nicht nur als Freitext — Capacity-Modul kann nur strukturierte Requirements matchen.

**Taxonomy-TBD-Risiko:** Skill-Taxonomie ist Co-Build (PRD v5.0 §10.4). MVP-Fallback: kuratiertes Bootstrap-Set (~80 Skills) für Pilot-Beratung; Erweiterungen über Knowledge & Reuse → Skill-Library.

### 5.4 Staffing-Vorschlag (Operator)

**Operator:** `Plan` + `Suggest` (PRD v5.0 §3).
**Input:** SkillRequirement[] + Verfügbarkeit aus Capacity + Stakeholder-Beziehungen (Stefan kennt Bereich X) + Margen-Constraint aus PricingFrame.
**Output:** StaffingProposal mit ≥1 Alternative (Pflicht).

**Annex-III-§4-Konformität (PRD v5.0 §8.1):**
- Pre-Approval explainable: jede Berater-Empfehlung mit Match-Score, getroffenen Skills, Begründung, Confidence.
- Approval-Gate zwingend vor Externalisierung (an Kunden senden).
- Audit: welcher Approver, welche Version des Models, welche Inputs.
- Bias-Monitoring: Empfehlungs-Diversität wird telemetriert (Geschlecht, Standort, Senioritäts-Spread) — Berichte ans Beratungs-Management, keine Personenbezüge nach außen.

### 5.5 Tailored CV (Operator)

**Operator:** `Draft` mit Base-Profil-Verankerung.
**Input:** Base-CV aus Capacity + Engagement Brief + Project History des Beraters.
**Output:** TailoredCV mit **expliziter Liste der weggelassenen Behauptungen** (`omitted_claims`) zur Audit-Sicherheit.

**Annex-III-§4-Konformität (PRD v5.0 §8.1):** Wie Staffing — explainable, Approval-Pflicht, Audit, Bias-Monitoring.

**PII-Routing-Pflicht (PRD v5.0 §7.6):** TailoredCV-Outputs **müssen** über EU-gehostete Modelle laufen (Mistral Large EU oder Anthropic via Bedrock EU). Routing-Proof wird mit dem Output gespeichert. Outputs ohne `pii_routing_proof` werden abgelehnt.

### 5.6 Pricing-Frame

MVP: **Template-basiert**. PricingTemplate aus Knowledge & Reuse (Time&Material-Standard, FixedPrice-Standard, Retainer-Standard) wird mit Skill-Requirement * Capacity-Kosten * Margen-Ziel parametriert.

**Computed-Margin:** read-only, jede Änderung am Pricing aktualisiert die Margen-Anzeige live. Annahmen (Auslastung, Bench-Rate, Reisekosten-Puffer) sind sichtbar und änderbar — keine Black Box.

**Phase 1b:** Margin-Optimizer, Win-Probability-Estimator. NICHT MVP.

### 5.7 Variantengenerierung

Lean / Standard / Premium aus dem gleichen EngagementBrief.

- **Lean:** kleinerer Scope, Standard-Team, T&M.
- **Standard:** Engagement Brief 1:1, gemischtes Team, T&M.
- **Premium:** erweiterter Scope (z. B. begleitendes Coaching, höherer Senior-Anteil), FixedPrice mit Risiko-Aufschlag.

**Implementierung:** Drei `ProposalVariant`-Knoten pro `Proposal`, share denselben `EngagementBrief`, unterschiedliche `PricingFrame` + `StaffingProposal`. UI: Tab-Switch, Side-by-Side-Vergleich, „diese Variante an Kunden senden"-Button mit Approval-Gate.

### 5.8 Contract Draft & Klauseln

**Default-Klauseln** kommen aus der Clause Library (Knowledge & Reuse). Beim Einsetzen in den Vertrag werden sie als Attribute des ContractDraft instanziiert.

**Abweichungs-Erkennung:** Jede Änderung einer Klausel gegenüber dem Library-Standard wird als `ClauseDiff` gespeichert und für Approval markiert. Thomas sieht in der Approval-Queue „Klausel 7.2 weicht von Standard ab — Haftungs-Cap auf 1× erhöht".

**Legal-Review-Status:** Dropdown am Vertrag — `NotReviewed`, `ReviewedInternal`, `ReviewedExternalCounsel`, `BlessedForSending`. MVP: keine Automatik — die Status sind nur Bookkeeping. Phase 3+ (PRD v4.1 §4.3) bringt Assist.

### 5.9 Send-Ready Paket

Ein Klick erzeugt:
- Proposal PDF (mit Tailored CVs eingebettet)
- Vertrag PDF (separat, für Signatur)
- Beilagen-Set (AGB, Datenschutz, sonstige Anhänge aus Knowledge)
- Cover-Mail (auf Wunsch — `Draft`-Operator)

Mit eIDAS-AdES-Signaturlink. Kein Anhang-Versand im MVP — der Kunde signiert im Portal-Link, nicht durch Re-Upload.

### 5.10 Approval-Gates (zentral)

Siehe §6.

---

## 6. AI-Capabilities & Operator-Mapping

PRD v5.0 §3 definiert sieben Operatoren: `Read`, `Classify`, `Suggest`, `Summarise`, `Draft`, `Review`, `Plan`. Tool-Orchestrate + Auto-Execute sind v1 verboten (PRD v5.0 §3 line 82).

| Sub-Feature | Operator(en) | Output-Typ | Approval-Modus |
|---|---|---|---|
| 5.2 Engagement Brief | `Draft` + `Summarise` (Vorgeschichte) | Strukturiertes Dokument | Inline-Approval |
| 5.3 Skill-Requirement | `Classify` | Liste typisierter Anforderungen | Inline-Approval (Pre-MVP optional, MVP Pflicht) |
| 5.4 Staffing-Vorschlag | `Plan` + `Suggest` | StaffingProposal + Alternativen | Zentrale Approval-Queue (High-Risk) |
| 5.5 Tailored CV | `Draft` | TailoredCV mit Diff zum Base | Zentrale Approval-Queue (High-Risk) |
| 5.6 Pricing-Frame | `Suggest` (Templates) + `Read` (Capacity-Kosten) | Strukturierte Pricing-Tabelle | Inline-Approval |
| 5.7 Variantengenerierung | `Plan` (Scope-Modulation) | 3 ProposalVariants | Inline-Approval pro Variante |
| 5.8 Contract Draft | `Suggest` (Klauseln) + `Review` (Abweichungen gegen Library) | ContractDraft + ClauseDiff | Zentrale Approval-Queue (Vertragsinhalt) |
| 5.9 Send-Ready | `Draft` (Cover-Mail) | Mail-Entwurf | Inline-Approval |

### 6.1 Approval-Gate-UX-Hybrid (PRD v5.0 §6.2)

- **Inline-Approval:** für hochfrequente, niedrig-kritische Outputs (Brief, Pricing-Anpassung). Direkt im Workspace, kein Kontextwechsel.
- **Zentrale Approval-Queue:** für kritische Outputs (Staffing, TailoredCV, Vertragsinhalt). Thomas hat einen Queue-View. Pre-Externalisierung-Pflicht.

### 6.2 Liability-Regel (PRD v5.0 §6.1)

Approval ist **zwingend** vor:
- Proposal-PDF-Generierung
- Vertragsinhalt-Finalisierung
- Externalisierung einer Staffing-Empfehlung
- Pricing-Outputs, sobald sie Empfänger erreichen

Diese Gates sind **nicht UX-Annehmlichkeit, sondern Compliance-Pflicht**.

### 6.3 Source-Binding-Enforcement (PRD v5.0 §7.5)

Jeder faktische Output (Engagement Brief, Tailored CV, Klausel-Begründung) muss `(graph_node_id, span_offset, span_length)` oder `(doc_id, page, span)` zurückgeben. Outputs ohne Bindings werden vom Validierungs-Layer abgelehnt — Approval-Queue zeigt sie nicht an.

---

## 7. Compliance & Constraints

### 7.1 AI Act
- **Annex-III-§4 High-Risk:** TailoredCV, StaffingProposal. Vollständige Conformity-Dokumentation: Risk Management System, Data Governance, Technical Documentation, Record-Keeping (Logs), Transparency, Human Oversight, Accuracy/Robustness.
- **Transparency-Pflicht:** Kunde im Proposal-Cover-Letter erkennt, dass AI verwendet wurde (Boilerplate-Footer, anpassbar pro Pilot-Kunde).

### 7.2 DSGVO
- Personenbezogene Daten in TailoredCV und StaffingProposal — Aufbewahrungsfrist orientiert sich an Angebots-Lebenszyklus (max 24 Monate nach `Won`/`Lost`, dann Pseudonymisierung).
- Stakeholder-Daten der Kundenseite: nur strukturierte Felder, kein Freitext-Sammelsurium.

### 7.3 eIDAS
- AdES-Default für MVP. Anforderung: zertifikatsbasierte Signatur, Signatur-Envelope auditfähig (CAdES oder PAdES).
- QES als Option in Phase 1b (Smart-Card / Remote-Signing-Provider, z. B. D-Trust, Bundesdruckerei).

### 7.4 BetrVG
- Staffing-Vorschlag berührt Personalauswahl. BetrVG-Mode-Heavy (PRD v5.0 §8.2) ist per-feature opt-in: Beratung mit Betriebsrat schaltet Heavy-Mode ein → zusätzliche Approval-Stufe (Werks-/Betriebsrats-Vertreter:in), erweiterte Audit-UI.

### 7.5 E-Rechnung (XRechnung / ZUGFeRD)
- ContractDraft enthält Felder, die im Billing-Modul für XRechnung-Export gebraucht werden (Leistungszeitraum, Steuersatz pro Line-Item, Leitweg-ID falls B2G). Kein Spezifikum fürs MVP-Modul; aber Vertrag muss diese Felder bereits sauber tragen.

---

## 8. Cross-Modul-Schnittstellen

### 8.1 Inputs
| Quell-Modul | Datenfluss | MVP-Pflicht? |
|---|---|---|
| **Account Growth** | Trigger + Account + Stakeholder + AccountHistory | Ja |
| **Consultant/Capacity** | Profile + Skill + Availability + Cost-Rate | Ja |
| **Knowledge & Reuse** | Methodology-Anker, ClauseLibrary, SOW-Templates, Reference-CVs, PricingTemplates | Ja |

### 8.2 Outputs
| Ziel-Modul | Datenfluss | MVP-Pflicht? |
|---|---|---|
| **Allocation & Delivery** | Contract → spawns Project + Milestones (aus DeliverableSpecs) + StaffingAssignment | Ja |
| **Commercial Control & Billing Prep** | Contract.pricing_frame → billing config; Cost-Rates locked-in | Ja |
| **Knowledge & Reuse** | LessonsLearned aus Lost/Abandoned-Opportunities (warum verloren?) → Knowledge | Ja |

### 8.3 Sidecars
- **AI Workspace** (Phase 1b — nicht MVP) wird vertikal über das Modul gelegt; das Modul muss seine Operators und Datenstrukturen so anbieten, dass das Workspace sie ohne Re-Engineering aufruft.
- **Governance & Audit** wird Tag 1 *passiv* genutzt (write-side). Audit-UI Phase 1b.

---

## 9. Erfolgskriterien MVP

Das Modul ist „MVP-fertig", wenn **alle** zutreffen:

1. Eine Pilot-Beratung führt **≥3 reale Bestandskunden-Opportunities** vollständig im System: Trigger → Brief → Staffing → CVs → Pricing → Vertrag → Signatur.
2. **<4 h** durchschnittlich von Trigger bis send-readiness — gemessen via Audit-Log.
3. **0 Fälle** von Externalisierung ohne Approval (Telemetrie).
4. **100 %** der TailoredCV-Outputs mit `pii_routing_proof` (EU-Modell).
5. **100 %** der faktischen Aussagen im Engagement Brief mit Source-Bindings.
6. **Approval-Latenz** Thomas: Median <10 min für die Queue (nicht Modul-Pflicht, aber Diagnose-Signal).
7. **Klausel-Abweichungs-Detektor:** keine false-negatives in einem 30-Vertrag-Audit.

---

## 10. Offene Fragen (Co-Build)

| ID | Frage | Wer entscheidet | Bis wann |
|---|---|---|---|
| Q1 | Skill-Taxonomie für MVP — kuratiertes Bootstrap, oder strukturierte Top-Level-Kategorien + Freitext? | Beratung + Consultry | Pre-Pilot |
| Q2 | Wie sieht der „Klausel-Abweichung approven"-Workflow bei Standard-Beratung ohne Inhouse-Counsel aus? Externes Legal-Asset einbinden? | Beratung + Consultry | Pre-Pilot |
| Q3 | Pricing-Template-Bibliothek-Tiefe (Bootstrap): T&M / FixedPrice reichen, oder zusätzlich Retainer + Capped? | Beratung | Pre-Pilot |
| Q4 | eIDAS-Signatur-Provider: Bundesdruckerei vs D-Trust vs SwissSign — single-provider MVP, multi später? | Consultry | Pre-Pilot |
| Q5 | Was passiert mit `Lost`-Opportunities? Auto-Lessons-Learned-Pflicht oder optional? Personenbezug der Lessons (Stakeholder X war Blocker) ist heikel. | Beratung + Consultry | Phase 1a |
| Q6 | Wenn ein Berater nach Staffing-Approval nicht mehr verfügbar ist — wer löst Re-Staffing aus, automatisch oder per Workflow? | Beratung | Phase 1b |
| Q7 | Brauchen wir `ProposalVariant` als first-class Entity oder ist die Varianz Attribut am Proposal? Klärt Reporting-Modell. | Consultry | Pre-Pilot |

---

## 11. Anti-Patterns / Was wir explizit NICHT tun

| Anti-Pattern | Warum nicht |
|---|---|
| AI-generierter Proposal → 1-Klick-Send an Kunden | Verstößt gegen Approval-Pflicht (PRD v5.0 §6.1) |
| „Personalisiertes" PDF-Briefkopf-Tooling | Out-of-OS-scope (Marketing-CMS-Verwandtschaft, Roadmap §2) |
| Klausel-Generierung „from scratch" via LLM | Source-Binding-Pflicht. Klauseln kommen aus Library oder werden manuell editiert. |
| In-App-Mailbox für Kundenkommunikation | Integration vor Ersatz — wir ersetzen Outlook nicht |
| Eingebauter Vertragsverhandlungs-Chat mit Kunde | Out-of-scope MVP; Kommunikation läuft über Mail / Telefon / Sharepoint-Link |
| Mehrsprachige Vertragsgenerierung (jenseits DE/EN) | i18n-Backbone DE/EN, Tag 1 (Roadmap §1). Andere Sprachen Phase 3+. |

---

## 12. Verweise

- [Roadmap §3.1 MVP-Loop](../../Consultry-Roadmap-v1.0-MVP-and-Phasing.md)
- [PRD v5.0 §4.1 Entities](../../Consultry-PRD-v5.0-Software-Layered.md)
- [PRD v4.1 §3 Module-Definitionen](../../Consultry-PRD-v4.0-DACH-Operating-System.md)
- [Personas: Katrin, Thomas, Stefan, Martina](../../../superseded-product-baseline-2026-08/Consultry-Target-Personas-v1.0.md)
- Schwester-Module: [01-account-growth/spec.md](../01-account-growth/spec.md), [03-consultant-team-capacity/spec.md](../03-consultant-team-capacity/spec.md), [04-knowledge-reuse/spec.md](../04-knowledge-reuse/spec.md)
- Flows: [flows.md](./flows.md)

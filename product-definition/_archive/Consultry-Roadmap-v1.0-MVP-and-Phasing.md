# Consultry — Phased Roadmap & MVP Scope v1.0

**Status:** ⚠️ **ARCHIVIERT (12.06.2026)** — superseded durch [MVP-PRD v1.0](../Consultry-MVP-PRD-v1.0.md) + [MVP-Foundation-Decisions v1.0](../Consultry-MVP-Foundation-Decisions-v1.0.md) (T1)
**Datum:** 5. Mai 2026

> **⚠️ Archiv-Hinweis.** Dieses Dokument beschreibt den verworfenen „Win-and-Deliver"-MVP (6 Module bis DATEV-Handoff, Gen A). Der verbindliche MVP ist die **Acquisition-to-Bid-Linie** (MVP-PRD v1.0). Noch gültig bleiben einzelne Hintergrund-Inhalte: das Skizze↔PRD-Mapping (§2), QA-Layer-als-Sub-System (§5.1, → H2), Markt-Intelligence = Phase 2 (§5.2), Marketing-CMS out-of-OS-scope (§5.3).
**Bezug:** Baut auf [Consultry-PRD-v4.0-DACH-Operating-System.md](../Consultry-PRD-v4.0-DACH-Operating-System.md) (Version 4.1) auf und reconciled die handgezeichnete Consultry-OS-Karte vom 2026-05-05 mit der bestehenden Phasen-Struktur.
**Zweck:** Schärfung des MVP-Slice innerhalb von Phase 1, Verortung neuer Akzente aus der Skizze (Qualitätssicherung, Markt-Signale), explizite Trennung In-Scope / Out-of-Scope.

---

## 0. Wie dieses Dokument zu PRD v4.1 steht

Dieses Dokument ersetzt PRD v4.1 nicht. Es ergänzt sie um drei Dinge, die in v4.1 unterspezifiziert sind:

1. Ein **MVP-Slice innerhalb Phase 1** — der kleinste end-to-end Loop, der einer DACH-Beratung mit 30–200 Mitarbeitenden produktiv genug ist, um echte Kundenarbeit darin zu führen. Alles andere in Phase 1 baut darauf auf, statt parallel zu starten.
2. Eine **Mapping-Tabelle Skizze ↔ PRD-Module**, damit kein Konzept aus dem Brainstorming stillschweigend verloren geht.
3. Eine **AI-Native Capability-Matrix pro Phase**, die explizit macht, welche AI-Fähigkeit wann produktiv wird — basierend auf den vier Schwerpunkten Knowledge / Proposal+Staffing / Sales+Markt-Signale / Delivery+QA.

PRD v4.1-Prinzipien gelten unverändert: Bestandskunden vor Neukunden, Recommendation + Explanation + Approval + Audit Trail, Aggregation vor Personenbezug, Integration vor Ersatz, ein Modul hat einen Job.

---

## 1. Wedge & Skala

**Launch-Wedge (PRD v4.1):** DACH-IT- und Digitalisierungsberatungen mit **30–200 Mitarbeitenden** und starkem Bestandskundenanteil.

**Architektur-Anforderung:** Single-Tenant pro Beratung, multi-tenant-fähig im Datenmodell. Boutique-Größen (10–30 Mitarbeitende) müssen ohne Architektur-Eingriff bedienbar sein, sind aber kein Verkaufsfokus.

**UI-Sprache:** Bilingual DE/EN ab Tag 1. Default Deutsch (DACH-Markt), sofortiger Toggle. i18n-Backbone wird in Phase 0 / Foundation gesetzt, keine Nachträge in Phase 2+.

---

## 2. Skizze ↔ PRD-Module: Mapping

Die Tabelle ordnet jeden Knoten der Skizze einem Modul aus PRD v4.1 §3 zu und markiert die Phase. Knoten ohne klare PRD-Heimat sind als „neu / geschärft" markiert und in §5 erläutert.

| Skizzen-Knoten (DE) | English gloss | PRD-Modul | Phase | Status |
|---|---|---|---|---|
| Projects → Anforderungen | Requirements | Allocation & Delivery Control | 1 | covered |
| Projects → Meilensteine | Milestones | Allocation & Delivery Control | 1 | covered |
| Projects → Fortschritt | Progress | Allocation & Delivery Control | 1 | covered |
| Projects → Budget | Budget | Allocation & Delivery + Commercial Control | 1 | covered |
| Projects → Methodik | Methodology | Knowledge & Reuse | 1 | covered |
| Projects → Risikomanagement | Risk mgmt | Allocation & Delivery Control (Delivery Health) | 1 | covered |
| Projects → Entscheidungsgrundlagen | Decision logs | Knowledge & Reuse | 1 | covered |
| Projects → Projekthistorie | Project history | Knowledge & Reuse | 1 | covered |
| Projects → Vorlagen | Templates | Knowledge & Reuse | 1 | covered |
| Qualitätssicherung → Code | Code review | **NEW: QA-Layer** | 1 (MVP+) | **geschärft** |
| Qualitätssicherung → Dokumente | Document review | **NEW: QA-Layer** | 1 (MVP+) | **geschärft** |
| Qualitätssicherung → Diagramme | Diagram review | **NEW: QA-Layer** | 1 (post-MVP) | **geschärft** |
| Qualitätssicherung → Präsentationen | Deck review | **NEW: QA-Layer** | 1 (post-MVP) | **geschärft** |
| Qualitätssicherung → Test-Infrastruktur | Test infra | **NEW: QA-Layer** | 2 | **geschärft** |
| Qualitätssicherung → Methodik / Vorlage | QA methodology | Knowledge & Reuse | 1 | covered |
| Wissen | Knowledge | Knowledge & Reuse | 1 | covered |
| HR → Consultants | Consultants | Consultant/Team/Capacity | 1 | covered |
| HR → Skills / Products / Tools | Skills mgmt | Consultant/Team/Capacity | 1 | covered |
| HR → Knowledge development | Skill growth | Consultant/Team/Capacity + Knowledge & Reuse | 1 | covered |
| HR → Personalallianz | HR partner / works council | Governance & Audit (BetrVG-Mode) | 1 | covered |
| HR → An-/Abwesenheit | Attendance / leave | full HR | **3+** | deferred |
| HR → Arbeitsanträge | Time-off requests | full HR | **3+** | deferred |
| Marketing → CMS | Marketing-site CMS | **OUT-of-OS-scope** | — | siehe §5 |
| Finance → Reisekosten | Travel & expenses | Commercial Control + Integration (DATEV) | 1 | covered (intake), 2 (deeper) |
| Finance → Abrechnung | Invoicing prep | Commercial Control & Billing Prep | 1 | covered (prep), DATEV handoff |
| Finance → Restbetrag / Debitoren | AR / receivables | full ERP | **3+** | deferred |
| Kosten → MA | Employee cost | Commercial Control (margin calc) | 1 | covered |
| Vertragsgestaltung → Deliverables | Deliverables | Opportunity/Proposal/Contract | 1 | covered |
| Vertragsgestaltung → SLAs | SLAs | Opportunity/Proposal/Contract | 1 | covered |
| Vertragsgestaltung → Legal | Legal review | Opportunity/Proposal/Contract (Review) | 1 | covered (assist), volle Automation 3+ |
| Vertragsgestaltung → AGB / Standardklauseln | Standard clauses | Knowledge & Reuse (Clause Library) | 1 | covered |
| Angebot → Preis | Pricing | Opportunity/Proposal/Contract + Commercial Control | 1 | covered |
| Angebot → Zugeschnittene CVs | Tailored consultant CVs | Opportunity/Proposal/Contract + Capacity | 1 | covered (MVP-Kern) |
| Angebot → Staffing | Staffing proposal | Capacity + Allocation | 1 | covered (MVP-Kern) |
| Angebot → Kapazität / Verfügbarkeit | Capacity / availability | Consultant/Team/Capacity | 1 | covered (MVP-Kern) |
| Sales → Kundenstamm | Customer base | Account Growth | 1 | covered |
| Sales → Kundenhistorie | Customer history | Account Growth | 1 | covered |
| Sales → Ansprechpartner | Contacts / stakeholders | Account Growth (Stakeholder Graph) | 1 | covered |
| Sales → Network → Events/Messen | Events / trade shows | Events-Modul | **3+** | deferred |
| Sales → Network → Relationships | Relationships | Account Growth (Warm Paths) | 1 | covered |
| Sales → Network → Lebenslauf | CV history | Account Growth (Stakeholder Profile) | 1 | covered |
| Sales → Network → Studium/Schule | Education trail | Account Growth (Stakeholder Profile) | 1 | covered |
| Sales → Network → Company | Company history | Account Growth (Stakeholder Profile) | 1 | covered |
| Sales → Ausschreibungen | Tenders | Tenders (PRD §4.4) | 1 (Bestand) → 2 (Neukunden) | covered |
| Sales → Consultantprofile | Consultant CVs | Capacity + Knowledge | 1 | covered |
| Sales → Analyse | Sales analytics | Account Growth | 1 | covered |
| Sales → Opportunities | Opportunities | Opportunity/Proposal/Contract | 1 | covered |
| Sales → Needs | Needs / pains | Account Growth (Trigger Detection) | 1 | covered |
| Sales → Skills | Required skills | Capacity (Skill Matching) | 1 | covered |
| Markt-Signale → Regulatorien | Regulatory feed | **NEW: Market Intelligence** | 2 | **geschärft** |
| Markt-Signale → Trends | Trends feed | **NEW: Market Intelligence** | 2 | **geschärft** |
| Markt-Signale → News | News feed | **NEW: Market Intelligence** | 2 | **geschärft** |
| Markt-Signale → Wirtschaft | Macro / economy | **NEW: Market Intelligence** | 2 | **geschärft** |

**Lesehilfe:**
- *covered* — bereits in PRD v4.1 als Phase-1- oder Phase-2-Modul spezifiziert.
- *geschärft* — durch die Skizze stärker betont; in §5 als eigenes Sub-System verortet.
- *deferred* — bewusst Phase-3+, in PRD v4.1 §7.3 begründet.

---

## 3. MVP-Slice innerhalb Phase 1

Die zehn Phase-1-Module aus PRD v4.1 §8.1 sind alle Launch-relevant, aber nicht alle gleich Tag-1-relevant. Der MVP-Slice ist der **kleinste end-to-end Loop**, in dem eine Beratung *einen echten Bestandskunden-Auftrag* führen kann — vom Trigger bis zum Billing-Handoff — ohne in Excel oder Drittsysteme zu kippen.

### 3.1 MVP-Loop (der „Win-and-Deliver"-Pfad)

```
Bestandskunde
   ↓  (Trigger erkannt)
Account Growth — Opportunity erfasst
   ↓
Opportunity/Proposal — Engagement Brief, Skill-Anforderung, Pricing
   ↓
Capacity — verfügbare Berater:innen mit Skill-Match
   ↓
Proposal — zugeschnittene CVs + Staffing-Vorschlag + AGB-Boilerplate
   ↓                                          ↑
   ↓                                          ↑ Wissen (Reuse)
   ↓
Contract — Vertragsmappe (SOW, SLA, AGB-Anhang)
   ↓
Allocation — Berater:innen auf Projekt zugeordnet
   ↓
Delivery — Meilensteine, Fortschritt, Risiken, Decision-Log
   ↓
Billing-Prep — Time/Expense → DATEV/ELSTER-Export
   ↓
Lessons Learned → zurück in Wissen
```

### 3.2 MVP-Module (must-have Tag 1)

Diese sechs Module bilden den MVP. Die übrigen vier Phase-1-Module sind „Phase-1 post-MVP" — sie kommen vor Phase 2, aber nach dem MVP-Loop.

| # | Modul | MVP-Begründung |
|---|---|---|
| 1 | Account Growth (Bestandskunden-Layer) | Stakeholder, Trigger, Opportunity-Erfassung. Ohne dies kein Loop-Start. |
| 2 | Consultant, Team & Capacity | Profile, Skills, Verfügbarkeit. Voraussetzung für Staffing & CV-Generierung. |
| 3 | Opportunity, Proposal & Contract | Vom Brief zum unterschriebenen Vertrag. Herzstück der MVP-Wertschöpfung. |
| 4 | Knowledge & Reuse (Asset-Library + Clause-Library) | AGB, SOW-Templates, Referenz-CVs. Macht den Loop schnell statt richtig-aber-langsam. |
| 5 | Allocation & Delivery Control (Basis) | Projekt-Record, Meilensteine, Decision-Log. Kein Mock — sonst entkoppelt sich Delivery vom Vertrag. |
| 6 | Commercial Control & Billing Prep (DATEV-Handoff) | Vom Time/Expense zum E-Rechnung-Export. Ohne diesen Endpunkt kein produktiver Einsatz. |

### 3.3 Phase-1-Module post-MVP (vor Phase 2)

Diese vier Module sind Phase-1, aber nicht MVP-Tag-1. Sie schließen Phase 1 vor dem Übergang zu Phase 2 ab.

| # | Modul | Begründung für Nicht-MVP |
|---|---|---|
| 7 | AI Workspace (Konversations-Layer über allen Modulen) | Wertet die Module *auf*, ist aber nicht Bedingung dafür, dass der Loop läuft. |
| 8 | Collaboration & Approvals | Single-User-Approval ist im MVP zumutbar; Multi-Approver-Workflows folgen. |
| 9 | Governance & Audit (full) | Audit-Logs sind ab Tag 1 *passiv* an; UI für Auditor:innen, BetrVG-Mode-Toggle, DSAR-Workflows folgen. |
| 10 | Integrations Backbone (über DATEV/ELSTER hinaus) | DATEV/ELSTER ist MVP. Microsoft-365-, Slack-, Jira-Konnektoren folgen. |

### 3.4 MVP-Erfolgskriterien

Ein MVP ist erst MVP, wenn drei Bedingungen *gleichzeitig* erfüllt sind:

1. Eine Referenz-Beratung führt **mindestens einen vollen Bestandskunden-Auftrag** im System (Trigger → Vertrag → Delivery → Billing-Handoff), ohne in Excel zurückzufallen.
2. **Audit-Trail ist passiv aktiv** — jede AI-Empfehlung im Loop ist mit Quelle, Version, Approver und Zeitstempel erfasst, auch wenn die Audit-UI noch fehlt.
3. **DSGVO-Defaults** sind im Live-Betrieb produktiv: Tenant-Isolation, Datenklassen, Aufbewahrungsfristen, kein personenbezogener AI-Output ohne explizites Gate.

---

## 4. Phasen-Roadmap (sketch-aware)

### Phase 0 — Foundation (vor Phase-1-Buildout)

Architektonische Grundlagen, die jede spätere Phase teilt. Kein Kunden-Feature, aber Voraussetzung für alle.

- Multi-Tenant-Datenmodell (single-tenant in Auslieferung, multi-tenant-ready)
- Auth + RBAC (Founder, Partner, Practice Lead, Consultant, Finance, Marketing, Auditor)
- **i18n-Backbone DE/EN ab Tag 1** — Toggle, lokalisierte Datumsformate, EUR-Default, IBAN-Validierung
- Design-System Consultry DS v1.2 (Coral-Primary, Stone-Neutrals, gradient hero-only, professional restraint)
- Audit-Log-Infrastruktur (write-side aktiv, read-side später)
- File-Storage + Document-Indexing-Pipeline (Foundation für Knowledge & Reuse)
- Observability-Backbone (Telemetrie für spätere Phase-Gates)

### Phase 1a — MVP „Win & Deliver"

Sechs Module (§3.2). Erfolgskriterium §3.4.

### Phase 1b — Phase 1 vervollständigen

Module 7–10 (§3.3). Erfolgskriterium ist das *Phase-Gate Phase 1 → Phase 2* aus PRD v4.1 §7.4:
- Bestandskunden-Kernflows bei Referenzkunden produktiv
- belastbare Telemetrie über Account Growth, Staffing, Proposal, Billing-Prep
- dokumentierter AI-Audit-Trail mit Quellen-, Versions- und Freigabehistorie
- Compliance-Defaults im Live-Betrieb validiert (DSGVO, BetrVG, AI Act, E-Rechnung)
- Werks-/Betriebsrats-Mode als Produktfunktion erprobt

**Innerhalb Phase 1b** sind die geschärften Akzente aus der Skizze zu integrieren:
- **QA-Layer (Sub-System von Allocation & Delivery Control)** — AI-Review von Code, Dokumenten, Decks, Diagrammen gegen die im Knowledge-System hinterlegte Methodik. Beginnend mit Code & Dokumenten (post-MVP), dann Diagramme & Decks. Test-Infrastruktur folgt erst Phase 2 (siehe §5.1).
- Dies ist *keine neue Modul-Spalte*, sondern eine vertikale Vertiefung von Allocation & Delivery Control (Delivery Health) und Knowledge & Reuse (Methodik). Damit kein Bruch des Prinzips „ein Modul hat einen Job".

### Phase 2 — Compliance-native Neukunden-Akquise + Markt-Signale

Phase 2 aus PRD v4.1 §7.2 (New Client Acquisition System) **plus** das aus der Skizze geschärfte:

- **Market-Intelligence-Sub-System** (siehe §5.2) — strukturierte Ingestion von Regulatorien, Trends, News, Wirtschaftsdaten als zweite Lead-Quelle neben Tenders. Daten fließen in Account Growth (Bestandskunden-Trigger) und in das New Client Acquisition System (Prospect-Trigger).
- Verschärfte Test-Infrastruktur (QA-Layer) — Auto-generated Test-Suites für Delivery-Artefakte.

### Phase 3+ — Erweiterungs-Kandidaten (PRD v4.1 §7.3)

Bewusst aus dem Wedge ausgeschlossen, in der Skizze sichtbar:
- Events-Modul (Sales → Network → Events/Messen)
- vollwertiges HR (An-/Abwesenheit, Arbeitsanträge)
- ERP-Funktionen jenseits DATEV-Handoff (Restbetrag/Debitoren)
- Recruiting als eigenständige Pipeline
- Client Portal mit Schreibrechten
- autonome Tender-Submission
- vollständiges Legal Automation System

**Marketing → CMS** ist explizit *kein Phase-3-Kandidat des Operating-Systems*, sondern der getrennte Workstream `marketing-site/` (Next.js + Webflow). Siehe §5.3 zur Begründung.

---

## 5. Geschärfte Akzente aus der Skizze

### 5.1 Qualitätssicherung als AI-native Sub-System

Die Skizze stellt Qualitätssicherung als zweitgrößten Hauptast neben Projects dar. PRD v4.1 deckt das implizit über Delivery Health ab, macht es aber nicht eigenständig sichtbar. Empfehlung: ein **QA-Layer** als Sub-System, nicht als eigenes Modul.

**Was er macht:**
- AI-Review von Delivery-Artefakten (Code, Dokumente, Diagramme, Decks) gegen die im Knowledge-System hinterlegte Methodik und Standards der Beratung.
- Generiert nicht nur Findings, sondern **mit-Quellen-belegte Empfehlungen** (Recommendation + Explanation + Approval + Audit Trail aus PRD v4.1 §2).
- Speist Findings als Risiko-Signale in Allocation & Delivery Control zurück.
- Lernt aus Lessons-Learned-Reviews → Updates der Methodik im Knowledge-System.

**Warum kein eigenes Modul:** Würde gegen das PRD-Prinzip „ein Modul hat einen Job" verstoßen. Der Job liegt verteilt zwischen Knowledge (Quelle der Wahrheit über Methodik) und Allocation & Delivery Control (Wo Findings landen). Der QA-Layer ist die AI-Schicht, die beide verbindet.

**Phasing innerhalb Phase 1:**
- Phase 1a (MVP): aus, weil nicht im Win-&-Deliver-Loop.
- Phase 1b (post-MVP): Code + Dokument-Review.
- Phase 2: Diagramm- + Deck-Review, Test-Infrastruktur-Generierung.

### 5.2 Markt-Signale als zweite Lead-Quelle neben Tenders

Die Skizze zeigt Markt-Signale (Regulatorien, Trends, News, Wirtschaft) als eigenen Hauptast. PRD v4.1 hat Trigger Detection im Account Growth (kundenspezifisch) und Tenders (Ausschreibungs-Ingest), aber keinen breiten Markt-Intelligence-Stream.

**Was es macht:**
- Strukturierte Ingestion von vier Quellklassen: Regulatorien (BaFin, BSI, EU, Bundesgesetze), Trends (Branchenstudien), News (Wirtschaftspresse), Makro (Statistisches Bundesamt, EU Eurostat).
- Klassifizierung pro Quelle: betrifft welche Practice, welchen Bestandskunden, welchen Prospect-Cluster.
- Fließt in **zwei Konsumenten**:
  1. Account Growth (Bestandskunden-Trigger) — z.B. „Neue NIS2-Anforderung betrifft drei Bestandskunden, in denen ihr Security-Vorprojekte hattet".
  2. New Client Acquisition (Prospect-Trigger, Phase 2) — z.B. „MaRisk-Novelle erzeugt Bedarf in mittelgroßen Banken".

**Phasing:**
- Phase 1: Bestandskunden-Trigger basieren auf manuell gepflegten Quellen + Account-Stakeholder-Aktivität. Kein automatisierter Markt-Ingest.
- Phase 2: Markt-Intelligence-Sub-System geht live, parallel zum New Client Acquisition System. Beide Phase-2-Bausteine sind voneinander abhängig (Outreach ohne Trigger = generisch; Trigger ohne Outreach = ungenutzt).

### 5.3 Marketing → CMS ist out-of-scope für Consultry OS

Die Skizze enthält „Marketing → CMS". Im Workspace existiert bereits `marketing-site/` als getrennter Next.js-Workstream mit eigener Figma- und Webflow-Pipeline. Empfehlung: **Marketing-CMS verbleibt out-of-OS-scope**.

**Begründung:**
- Verstößt gegen den scharfen Wedge (Steuerungssystem für Beratungsarbeit, nicht Marketing-Tool).
- Ist redundant zu Webflow / dem bestehenden Marketing-Site-Setup.
- Macht das Modul-Set unscharf — wenn Marketing-CMS rein soll, müsste Recruiting, vollwertiges HR und Events nach demselben Maßstab auch rein, was PRD v4.1 §7.3 explizit ausschließt.

**Schnittstelle:** Stattdessen eine **Content-Sync-Schnittstelle** vom OS nach `marketing-site/` (z.B. anonymisierte Case Studies aus Knowledge & Reuse, Consultant-Highlights aus Capacity). Das ist eine Phase-2- oder Phase-3-Integration, kein OS-Modul.

---

## 6. AI-Native Capability-Matrix pro Phase

Die vier vom Nutzer priorisierten AI-Schwerpunkte in zeitliche Verortung gebracht.

| Capability | Phase 1a (MVP) | Phase 1b | Phase 2 | Phase 3+ |
|---|---|---|---|---|
| **Knowledge** — semantische Suche über Assets | ✓ Volltext + Embedding-Suche über Asset-Library | ✓ Kontextuelle Empfehlungen im AI Workspace | ✓ Cross-Tenant-Lessons (mit Gate) | — |
| **Knowledge** — Auto-Tagging von neuen Assets | ✓ Basic | ✓ Methodik-Klassifikation | ✓ Quellen-gebundene Synthese | — |
| **Proposal + Staffing** — Tailored Consultant CV | ✓ aus Capacity + Engagement Brief | ✓ inkl. Reference-Project-Match | — | — |
| **Proposal + Staffing** — Skill-Match | ✓ explizite Skill-Suche | ✓ implizite Skill-Inferenz aus Projekthistorie | — | — |
| **Proposal + Staffing** — Pricing-Assist | ✓ Templates aus Knowledge | ✓ Margin-Optimierung gegen Capacity | — | — |
| **Sales + Markt-Signale** — Trigger Detection (Bestand) | ✓ aus Stakeholder-Aktivität | ✓ inkl. CRM-Integrationen | ✓ aus Markt-Intelligence | — |
| **Sales + Markt-Signale** — Tender-Ingest | ✓ Bestandskunden-Match | — | ✓ Prospect-Match | — |
| **Sales + Markt-Signale** — Markt-Intelligence-Stream | — | — | ✓ Regulatorien/Trends/News/Makro | — |
| **Sales + Markt-Signale** — Outreach-Sequenzen | — | — | ✓ compliance-nativ | — |
| **Delivery + QA** — Decision-Log-Strukturierung | ✓ Templates | ✓ AI-Suggestions | — | — |
| **Delivery + QA** — Risk Detection (Delivery Health) | ✓ Indikator-basiert | ✓ Pattern-Matching aus Projekthistorie | — | — |
| **Delivery + QA** — Code-Review (QA-Layer) | — | ✓ gegen Methodik | ✓ inkl. Test-Generierung | — |
| **Delivery + QA** — Doc/Deck-Review (QA-Layer) | — | ✓ Dokumente | ✓ Decks/Diagramme | — |
| **Cross-cutting** — Audit-Trail aller AI-Outputs | ✓ passiv | ✓ Auditor-UI | — | — |
| **Cross-cutting** — Bilingual UX | ✓ DE/EN Toggle | ✓ vollständige UI-Strings | ✓ AI-Outputs DE/EN | — |

---

## 7. Daten-Backbone (Phase 0 + Phase 1a)

Die folgenden Top-Level-Entitäten müssen in Phase 0 / Phase 1a sauber sitzen, weil jede spätere Phase darauf baut.

```
Tenant
 ├── Account                       (Bestandskunde)
 │    ├── Stakeholder              (Ansprechpartner mit Lebenslauf-Trail)
 │    ├── AccountHistory           (Kundenhistorie)
 │    ├── WarmPath                 (Relationships im Stakeholder-Graph)
 │    └── Trigger                  (Phase 1: kundenbezogen; Phase 2: + Markt)
 │
 ├── Opportunity
 │    ├── EngagementBrief
 │    ├── SkillRequirement
 │    ├── PricingProposal
 │    └── TeamProposal
 │
 ├── Proposal
 │    ├── TailoredCV   (n)         (zugeschnittene Consultant-CVs)
 │    ├── StaffingPlan
 │    └── ContractDraft
 │         ├── Deliverable (n)
 │         ├── SLA (n)
 │         └── Clause (n)          (aus Clause Library)
 │
 ├── Contract
 │    └── ProjectInstance
 │         ├── Milestone (n)
 │         ├── ProgressReport (n)
 │         ├── DecisionLogEntry (n)
 │         ├── RiskItem (n)
 │         ├── Allocation (n)      (Berater × Zeit × Anteil)
 │         └── DeliveryArtifact (n) (für QA-Layer in Phase 1b)
 │
 ├── Consultant
 │    ├── Skill (n)
 │    ├── Certification (n)
 │    ├── Availability
 │    ├── ProjectExperience (n)
 │    └── KnowledgeContribution (n)
 │
 ├── KnowledgeAsset
 │    ├── Methodology
 │    ├── Template
 │    ├── Reference
 │    ├── LessonsLearned
 │    └── ClauseLibraryEntry
 │
 ├── BillingPrepRecord
 │    ├── TimeEntry (n)
 │    ├── ExpenseEntry (n)
 │    └── DATEVExport
 │
 ├── AuditEvent (n)                (write-side ab Phase 0 aktiv)
 │
 ├── Tender                        (Phase 1: Bestand-Match; Phase 2: + Prospect)
 │
 └── Prospect                      (Phase 2 — getrennt von Account!)
      ├── ProspectStakeholder
      ├── ConsentRecord
      └── EnrichmentSource

MarketSignal                       (Phase 2 — global, mit Tenant-Routing)
 ├── RegulatoryItem
 ├── TrendItem
 ├── NewsItem
 └── MacroIndicator
```

**Critical separation:** `Account` und `Prospect` sind getrennte Top-Level-Entitäten, nicht polymorph. Das ist Voraussetzung für PRD v4.1 §7.4 (Phase-Gate 2 → 3+: „Prospect- und Bestandskunden-Datenmodell sauber getrennt").

---

## 8. Tech-Stack-Hypothese (zur Diskussion)

PRD v4.1 lässt Stack-Entscheidungen offen. Vorschläge zur Diskussion, nicht festgeschrieben:

- **Web-App:** Next.js 16 (analog `marketing-site/`, kein zweiter Stack), React 19, Tailwind 4, Consultry DS v1.2.
- **Backend:** Node/TypeScript-Monolith zu Beginn, Service-Splits erst wenn Datenmodelle es erzwingen.
- **DB:** Postgres mit Row-Level Security für Tenant-Isolation, pgvector für Embeddings (Knowledge & Reuse).
- **Async / Agents:** Background-Worker (Inngest oder Temporal-light) für AI-Empfehlungs-Pipelines, Quellen-Bindung, Audit-Writes.
- **AI-Layer:** Anthropic-API-first für Reasoning-Heavy-Calls (Proposal, QA, Markt-Signal-Klassifikation), kleinere lokale Modelle (z.B. via Nebius — siehe `nebius-bench-results/`) für Routine-Klassifikation.
- **Identity:** WorkOS oder Clerk + EU-Hosting-Region (Datenhoheit).
- **Storage:** S3-kompatibel mit EU-Region; Document-Indexing via Worker-Pipeline.
- **Observability:** OpenTelemetry, Sentry, strukturierte Audit-Events in Postgres.
- **DSGVO-Defaults:** Tenant-RLS, Datenklassen-Tags pro Spalte, Aufbewahrungsfristen als DB-Konstante, DSAR-Worker.

---

## 9. Was als nächstes konkret zu tun ist

Drei mögliche nächste Schritte, je nach Prioritäten — alle stützen sich auf dieses Dokument.

1. **Detaillierter Phase-1a-Spec** (PRD-Erweiterung): Aus den sechs MVP-Modulen werden User Stories, Acceptance Criteria und API-Contracts. Größenordnung: 2–4 Wochen Spec-Arbeit, Output ist ein Spec-Dokument pro Modul.
2. **Datenmodell-Validierung**: Das ER-Diagramm aus §7 in Postgres-DDL übersetzen, mit Tenant-RLS-Policies, Audit-Trigger und Migrationsplan. Output: ein `db/migrations/0001_foundation.sql` und ein ADR.
3. **MVP-Loop-Wireframes**: Aus dem Win-&-Deliver-Pfad (§3.1) konkrete Screens entwerfen — von Trigger-Inbox bis DATEV-Handoff. Folgt Consultry DS v1.2 (warm coral, professional restraint, dark-mode-ready).

---

## 10. Offene Fragen

| # | Frage | Warum wichtig |
|---|---|---|
| 1 | Bestätigt: Marketing → CMS ist out-of-OS-scope (Phase 3+ nur als Sync-Schnittstelle)? | Wenn ja → klare Modul-Grenze. Wenn nein → Wedge muss neu argumentiert werden. |
| 2 | Bestätigt: QA-Layer ist Sub-System (Verbindung Knowledge ↔ Delivery), kein 11. Modul? | Klärt, ob die Skizze ein eigenständiges Modul impliziert oder nicht. |
| 3 | Bestätigt: Markt-Intelligence ist Phase 2, nicht Phase 1? | Klärt MVP-Größe. Wenn Markt-Intelligence MVP wäre, würde Phase 1a doppelt so groß. |
| 4 | Soll die MVP-Zielkunden-Größe wirklich 30–200 sein (PRD v4.1) oder eher Boutique 10–30 (Antwort aus Clarification)? | Architektur ist gleich, aber Verkaufsfokus + Vertragsgröße + Compliance-Tiefe variieren. |
| 5 | Tech-Stack-Hypothese (§8) — alles akzeptabel oder gibt es Constraints (z.B. nur Anthropic-API, kein Inngest, EU-Cloud-Anbieter-Vorgabe)? | Beeinflusst Phase-0-Auswahl und Vendor-Risiken. |
| 6 | Sollen QA-Findings personenbezogen sein dürfen (Code-Review pro Berater:in) oder nur projektbezogen aggregiert? | PRD v4.1 §2.3 bevorzugt Aggregation; QA-Layer könnte das Prinzip strapazieren. |

---

## 11. Glossar (DE/EN, sketch-aware)

Für die bilinguale UX muss jeder Begriff aus der Skizze ein konsistentes EN-Pendant haben.

| Deutsch | English |
|---|---|
| Anforderungen | Requirements |
| Meilensteine | Milestones |
| Fortschritt | Progress |
| Methodik | Methodology |
| Risikomanagement | Risk Management |
| Entscheidungsgrundlagen | Decision Records |
| Projekthistorie | Project History |
| Vorlagen | Templates |
| Qualitätssicherung | Quality Assurance |
| Wissen | Knowledge |
| Personalallianz | HR / Works-Council Liaison |
| An-/Abwesenheit | Attendance / Leave |
| Arbeitsanträge | Time-off Requests |
| Reisekosten | Travel & Expenses |
| Abrechnung | Invoicing / Billing |
| Restbetrag (Debitoren) | Accounts Receivable |
| Vertragsgestaltung | Contract Drafting |
| AGB / Standardklauseln | Standard Terms / Clause Library |
| Angebot | Proposal |
| Zugeschnittene CVs | Tailored CVs |
| Kapazität / Verfügbarkeit | Capacity / Availability |
| Kundenstamm | Customer Base |
| Kundenhistorie | Customer History |
| Ansprechpartner | Contacts / Stakeholders |
| Ausschreibungen | Tenders |
| Markt-Signale | Market Intelligence |
| Regulatorien | Regulatory Feed |
| Wirtschaft | Macro / Economy |

---

**Ende v1.0.** ~~Bei Konflikten gilt PRD v4.1 als Quelle der Wahrheit.~~ **Archiviert 12.06.2026** — bei Konflikten gelten [MVP-PRD v1.0](../Consultry-MVP-PRD-v1.0.md) + [MVP-Foundation-Decisions v1.0](../Consultry-MVP-Foundation-Decisions-v1.0.md).

# Feature Spec — Account Growth (Bestandskunden-Layer)

> **⚠️ ARCHIVIERT (12.06.2026 — [MVP-Foundation-Decisions v1.0](../../Consultry-MVP-Foundation-Decisions-v1.0.md), T1).** Diese Spec gehört zur „Win-and-Deliver"-Generation (Gen A) und ist **kein MVP-Scope**. Verbindlich: [MVP-PRD v1.0](../../Consultry-MVP-PRD-v1.0.md) (Acquisition-to-Bid) + Foundation-Decisions. Persona-/Outcome-Tabellen dürfen als UX-Input wiederverwendet werden (Salvage, Foundation-Decisions §4). Nicht als Quelle der Wahrheit verwenden.

**Modul-ID:** `01-account-growth`
**Status:** Draft v1.0 — MVP-Sharpening
**Datum:** 2026-05-28
**MVP-Phase:** 1a (Win & Deliver — Tag 1)
**Rolle im Loop:** Loop-Eintritt. Ohne Account Growth gibt es keinen Trigger, keine Opportunity, keinen Loop-Start.
**Bezug:** [PRD v4.1 §3](../../Consultry-PRD-v4.0-DACH-Operating-System.md), [PRD v5.0 §4.1, §11.2](../../technical-definitions/Consultry-PRD-v5.0-Software-Layered.md), [Roadmap §3.1, §3.2](../../business-definitions/Consultry-Roadmap-v1.0-MVP-and-Phasing.md)

---

## 1. Job-to-be-Done

> **Eine Beratung sieht, was bei ihren bestehenden Kunden gerade entsteht, bevor der Kunde es ausspricht — und erkennt unsystematisch in ihrem Netzwerk verstreute Warm Paths, bevor Konkurrenten sie nutzen.**

Bestandskunden-Demand bleibt heute strukturell untergenutzt: BD-Leiter:innen verlassen sich auf zufällige Mails, LinkedIn-Stalking und Mitschriften, die im Kopf des Senior Consultants verbleiben. Account Growth macht aus dieser zufalls-getriebenen Praxis ein **systematisches Trigger-Erkennen** und **navigierbares Stakeholder-Netzwerk**.

### Outcome pro Persona (heute → Soll)

| Persona | Heute (Schmerzpunkt, gemessen) | Soll mit Consultry |
|---|---|---|
| **Katrin (BD-Leiterin)** | Trigger werden „beim nächsten Termin" gehoben — Time-to-Opportunity ø 4–8 Wochen nach Signal-Eintritt. | Signal-Inbox kuratiert pro Account. Time-to-Opportunity-Median <72 h. |
| **Thomas (Managing Partner)** | Hat keine Sicht auf Bestandskunden-Pipeline ohne Excel-Pull bei Katrin. | Cockpit-View: Trigger-Stand, qualifizierte Opportunities, Warm-Path-Inventar in Echtzeit. |
| **Stefan (Senior Consultant / PL)** | Sein „weiß ich aus dem Studium"-Wissen ist nirgends. Wird nur per Mail abgefragt. | Stakeholder-Profil zeigt Beziehung („Stefan kennt Frau Schulz aus TU München, 2009"). |
| **Lisa (Consultant)** | Hat keinen Zugriff auf Kundenkontext bevor sie auf Projekten eingesetzt wird. | Account-Briefing in <5 min lesbar bevor sie zum Kunden geht. |

---

## 2. In-Scope MVP (Tag 1)

| # | Sub-Feature | Begründung MVP-relevant |
|---|---|---|
| 2.1 | **Account-Stammdaten** (Kundenstamm) | Voraussetzung für alles weitere. |
| 2.2 | **Stakeholder-Erfassung** mit Lebenslauf/Studium/Arbeitgeber-Trail | Differenzierung gegen Standard-CRM. Warm-Path-Foundation. |
| 2.3 | **Account-Historie** (Engagement-Timeline) | Lessons + Vorprojekte sind Briefing-Material. |
| 2.4 | **Trigger-Inbox** (manuell + automatisch) | Loop-Start. |
| 2.5 | **Warm-Path-Indikatoren** (Berater↔Stakeholder-Beziehungen) | Auto-Suggest: „Stefan kennt diesen Stakeholder" beim Trigger-Eintritt. |
| 2.6 | **Opportunity-Erfassung** als Übergabe an Modul 2 | Bindenstellt zwischen Account Growth und Opportunity/Proposal/Contract. |
| 2.7 | **Account-Briefing-Generator** (kontextueller Snapshot) | One-Page-Brief vor Kundenterminen. |
| 2.8 | **Sales-Analytics Basis** (Won/Lost-Ratio, Pipeline-Volume) | Telemetrie ab Tag 1, UI minimal. |
| 2.9 | **DSGVO-konforme Stakeholder-Verwaltung** (B2B-Kontext) | Pflichtsockel. |
| 2.10 | **Audit-Trail aller AI-Trigger-Empfehlungen** | Operator-Aufrufe protokolliert. |

---

## 3. Out-of-Scope MVP

| Bereich | Wann | Quelle |
|---|---|---|
| Prospect-Layer (Neukunden-Akquise) | Phase 2 | PRD v4.1 §8.2 — explizit als separate Top-Level-Entity, kein Polymorphismus mit Account |
| Tender / Ausschreibungs-Integration | Phase 1 Bestand → Phase 2 Neukunden | Roadmap §2 |
| Market-Intelligence-Sub-System (Regulatorien-Feed, Trends, News) | Phase 2 | Roadmap §5.2 |
| Events / Trade-Shows-Modul | Phase 3+ | Roadmap §2 |
| Volle CRM-Integration (HubSpot, Salesforce) | Phase 1b — Integrations Backbone | Roadmap §3.3 |
| Implicit Trigger-Erkennung aus Mail-Mitschnitt (autonomous parsing inbox-wide) | Phase 1b mit Approval-Pflicht | PRD v5.0 §3 |
| Personenbezogene Stakeholder-Profilings (Persönlichkeits-Modelle, „best-time-to-call") | Phase 3+, BetrVG/DSGVO-Heavy-Gate | PRD v5.0 §8 |

---

## 4. Entities & Datenmodell

### 4.1 Kern-Entities

```
Account                                       (Bestandskunde — top-level)
  ├── id, name, legal_name, country, industry, size_bucket
  ├── tier: enum { Strategic, Key, Standard, Watch }
  ├── owner_consultant: ConsultantID          (Account-Verantwortlich)
  ├── status: enum { Active, Dormant, Lost, Archived }
  ├── tags: AccountTag[]
  ├── address: { street, zip, city, country }
  ├── revenue_band: enum { ≤1M, 1-10M, 10-50M, 50-250M, 250M+ }
  ├── consent_state: ConsentState              (DSGVO-Tracking)
  ├── HAS_MANY Stakeholder
  ├── HAS_MANY AccountHistory (Engagement-Einträge, Termine, Verträge)
  ├── HAS_MANY Trigger
  ├── HAS_MANY Opportunity (FK from Modul 2)
  └── HAS_MANY KnowledgeAsset (LessonsLearned die mit Account verlinkt sind)

Stakeholder                                  (Person auf Kundenseite)
  ├── id, full_name, salutation, title, email, phone
  ├── account: AccountID
  ├── role: StakeholderRole                   (z. B. CFO, IT-Direktor, Einkauf)
  ├── influence: enum { Decider, Influencer, User, Blocker, Champion }
  ├── relationship_strength: int 0-5          (heuristisch + manuell)
  ├── consent_state: ConsentState
  ├── career_trail: CareerTrailEntry[]        (Lebenslauf-Stationen)
  ├── education_trail: EducationEntry[]       (Studium / Schule)
  ├── HAS_MANY ContactPoint                   (Berater↔Stakeholder Touches)
  ├── HAS_MANY WarmPathEdge                   (modelliert als Edges, siehe §4.3)
  └── notes: text (strukturiert + freitext)

AccountHistory                              (Engagement-Eintrag)
  ├── account: AccountID
  ├── entry_type: enum { Project, Meeting, ProposalSent, Won, Lost, Touchpoint, Note }
  ├── timestamp
  ├── linked_entities: { project?, opportunity?, contract?, stakeholders[] }
  ├── narrative: text (mit Source-Bindings)
  └── created_by: ConsultantID

Trigger                                     (das, was Loop-Start auslöst)
  ├── id, account: AccountID
  ├── stakeholders_referenced: StakeholderID[]
  ├── kind: enum { Internal, External, Inferred }
  │     Internal:  Berater hat Signal aus Termin / Mail eingetragen
  │     External:  Stakeholder hat aktiv signalisiert (RFI, RFQ, Mail)
  │     Inferred:  System hat aus Pattern Erkenntnis gewonnen (z. B. Stakeholder-Job-Wechsel)
  ├── source_kind: enum { Email, Meeting, Call, LinkedIn, NewsArticle, ManualNote, GraphPattern }
  ├── confidence: decimal 0-1
  ├── stage: enum { New, Qualifying, Qualified, ConvertedToOpportunity, Dismissed }
  ├── ai_suggestion: { opportunity_kind, urgency, suggested_consultant, ... }
  ├── source_bindings: SourceBinding[]
  ├── created_at, qualified_at, converted_at
  └── operator_provenance: { ... }
```

### 4.2 Phase-Trennung Account ↔ Prospect

`Account` (Bestand) und `Prospect` (Phase 2, Neukunde) sind **strikt getrennte Top-Level-Entities**, kein Polymorphismus, keine gemeinsame Basis-Tabelle. Begründung (PRD v5.0 §4.1 lines 142–148, Roadmap §7 line 357):

- Compliance-Regime ist anders: Bestandskunden haben Vertragsverhältnis und damit DSGVO-Auftragsverarbeitungs-Kontext; Prospects nicht.
- Datenherkunft anders: Account-Daten aus Bestandsbeziehung; Prospect-Daten aus Markt-Signalen + Tender-Feeds.
- Migrations-Pfad: Wenn ein Prospect zum Account wird (Vertrag), entstehe ein neuer `Account`-Knoten mit Cross-Link auf historischen `Prospect` — kein Update-in-place.

**MVP:** nur `Account`. `Prospect`-Schema ist Phase-2-Definition.

### 4.3 WarmPath als Edge im Graph

```
Stakeholder ──[knows_via]──▶ WarmPathEdge ──[connects_to]──▶ Consultant
                              │
                              ├── relation: enum {
                              │      Studium, Schule, EhemArbeitgeber,
                              │      EhemKollege, Konferenz, ProjektGeschichte,
                              │      PrivatNetzwerk, Verband, IndirekteWeiterleitung
                              │   }
                              ├── strength: int 0-5
                              ├── evidence: { source_kind, source_id, span }
                              ├── consent_visibility: enum { Internal, ExplicitlyShared, Restricted }
                              └── last_validated_at
```

WarmPath ist ein Graph-Konstrukt, kein flacher Reference. Im UI wird er als Beziehungs-Netz angezeigt, im Backend als gerichtete Kante mit Metadaten.

### 4.4 ConsentState (DSGVO B2B-Spezifika)

```
ConsentState
  ├── lawful_basis: enum { LegitimateInterest, ContractPerformance, ExplicitConsent }
  ├── purpose_limitation: Purpose[]    (z. B. Vertragsanbahnung, Beratungsmandant, Marketing)
  ├── consent_given_at, consent_revoked_at
  ├── retention_until: date
  └── dsar_history: DSAREvent[]        (Auskunfts- / Löschanfragen)
```

Default-Lawful-Basis für B2B-Stakeholder bei Bestandskunde = `LegitimateInterest` (Erwägungsgrund 47 DSGVO). Explicit Consent nur bei Marketing-Bezug.

---

## 5. Sub-Features im Detail

### 5.1 Account-Stammdaten

Pflichtfelder: `name`, `country`, `tier`, `owner_consultant`. Alles andere optional.

**Auto-Anreicherung (Phase 1b, nicht MVP):** aus öffentlich zugänglichen Quellen (Handelsregister, Webseite). MVP: manuell oder per CSV-Import bei Onboarding.

**Tier-System** ist Beratungs-individuell konfigurierbar. Default 4 Stufen (Strategic / Key / Standard / Watch) — viele Beratungen haben ähnliche Schemas, aber Beratung kann eigene Labels setzen.

**Wireframe-Hinweis (Account-Detail-Page):**
```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Accounts   │  Müller-AG · Strategic · Owner: Katrin    [⋯ Actions]  │
├──────────────┴───────────────────────────────────────────────────────┤
│  [Overview]  [Stakeholder]  [History]  [Triggers]  [Opportunities]   │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  Health · Letzte Aktivität · Pipeline-Volumen · Open Triggers         │
│  ●●●○○      vor 3 Tagen        €420k             2                    │
│                                                                       │
│  Quick Actions:  + Trigger erfassen  · + Opportunity  · Briefing      │
│                                                                       │
│  Letzte Engagements (3 sichtbar, alle in History-Tab):                │
│  • 2025-Q3  Sourcing-Strategie · gewonnen · 142k · Stefan, Lisa       │
│  • 2024-Q1  IT-Audit · gewonnen · 78k · Stefan                        │
│  • 2023-Q2  Carve-Out · verloren (Pricing) · 200k Volumen             │
└──────────────────────────────────────────────────────────────────────┘
```

### 5.2 Stakeholder-Erfassung (mit CV-Trail)

Stakeholder ist mehr als „Name + Email". Der **CV-Trail** (Career + Education) ist der Differenzierer gegen Standard-CRMs.

**Datenquellen MVP:**
- Manuell durch Katrin / Berater erfasst.
- Import aus existierender LinkedIn-Verknüpfung des Beraters (consent-gated, opt-in).
- Aus Account-Historie: Stakeholder taucht in Meeting auf → wird vorgeschlagen.

**CV-Trail-Schema:**
```
CareerTrailEntry: { company, role, start_year, end_year?, source_kind, verified }
EducationEntry:  { institution, degree, start_year, end_year, source_kind, verified }
```

**Pattern „Wer kennt diesen Stakeholder?":** Wenn ein Berater im Stakeholder-Profil eine CareerTrailEntry hat, die mit dem CV eines aktuellen Consultants matched (gleiche Firma, überlappende Jahre), schlägt das System einen WarmPath-Edge vor — mit Klick durch Stefan ratifiziert.

**Wireframe-Hinweis (Stakeholder-Detail-Card):**
```
┌────────────────────────────────────────────────────────────────────┐
│ Frau Maria Schulz · CFO · Müller-AG                  [Edit] [DSAR] │
│ Influence: ●●●●○ Decider · Strength: ●●●○○                         │
├────────────────────────────────────────────────────────────────────┤
│ Karriere                                                            │
│  ◯ 2021–heute  Müller-AG  · CFO                                    │
│  ◯ 2015–2021   Heller-Gruppe · Finance Director                    │
│  ◯ 2009–2015   Bain & Co · Consultant                              │
│                                                                     │
│ Studium                                                             │
│  ◯ 2003–2008   TU München · Wirtschaftsingenieurwesen              │
│                                                                     │
│ Beziehungen in unserem Netzwerk:                                    │
│  ► Stefan Kraus      (TU München 2003–2008, gleicher Studiengang)  │
│  ► Lisa Tran         (Heller-Gruppe 2017–2019, Praktikum)          │
│  + 2 weitere                                                        │
│                                                                     │
│ Letzte 3 Touchpoints:                                               │
│  · 2026-05-22  Anruf, Restrukturierung erwähnt  (Katrin)           │
│  · 2026-04-10  Termin, jährlicher Review        (Stefan)           │
│  · 2026-02-03  Mail, Vertragsverlängerung       (Katrin)           │
└────────────────────────────────────────────────────────────────────┘
```

### 5.3 Account-Historie (Engagement-Timeline)

Append-only Chronik aller Berührungspunkte. Jeder Eintrag hat `entry_type` zur Filterbarkeit.

**MVP-Eintrags-Quellen:**
- Manuelle Erfassung (Termin-Nachbereitung, Anruf-Notiz)
- Automatisch aus anderen Modulen: ProposalSent / Won / Lost / Project-Start / Project-End
- Outlook / Email-Integration (Phase 1b)

**Auto-Generated-Briefing** aggregiert die Historie zu einem One-Pager:

```
Aggregations-Pattern: 
  Operator(Summarise) mit Input:
    - AccountHistory der letzten N Monate (default 18)
    - aktive Stakeholder + ihre letzten Touchpoints
    - offene + gewonnene Opportunities
    - Lessons-Learned die mit Account verlinkt sind
  Output: 
    - Strukturierter Briefing (3 Absätze: Stand, Themen, Risiken)
    - mit Source-Bindings auf jeden Satz
```

### 5.4 Trigger-Inbox

Zentrales UI-Element. Persönliche View pro BD-Lead + Team-View pro Account.

**Trigger-Quellen MVP:**
- **Manuell:** Berater erfasst Trigger nach Kundenkontakt. UI: globale „+Trigger"-Shortcut.
- **Aus Account-Historie inferred:** System erkennt Pattern, z. B. „Stakeholder hat Job gewechselt — neues Unternehmen X hat IT-Carve-Out-Strategie veröffentlicht" → suggested Trigger.
- **Outlook-Mail-Anhang (Phase 1b):** Berater forward Mail an `triggers@beratung-consultry.eu` → Operator `Classify` schlägt Trigger-Kandidat vor.

**Trigger-Lifecycle:**
```
New ──[Katrin schaut an]──▶ Qualifying ──[Brief + Anker gesetzt]──▶ Qualified
                                  │
                                  ├──[verworfen]──▶ Dismissed (mit Grund)
                                  │
                                  └──[Opp erzeugt]──▶ ConvertedToOpportunity
```

**Wireframe-Hinweis (Trigger-Inbox):**
```
┌──────────────────────────────────────────────────────────────────────┐
│ Trigger-Inbox · Katrin    [Alle] [Mein] [Strategic Accounts] [Team]  │
├──────────────────────────────────────────────────────────────────────┤
│ ⚡ New (3)                                                            │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │ Müller-AG · Restrukturierung im Sourcing-Bereich                 │ │
│ │ Aus Anruf-Notiz Stefan, 2026-05-22. Confidence: ●●●○○            │ │
│ │ Schlägt vor: IT-Sourcing-Strategie Opportunity, Stefan als Lead  │ │
│ │ [Qualifizieren]  [Verwerfen]  [Mehr Kontext]                     │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │ Heller-Gruppe · CFO-Wechsel zu Frau Bauer                        │ │
│ │ Inferred: LinkedIn-Update (manuell durch Lisa). Confidence ●●○○○ │ │
│ │ Schlägt vor: Account-Tier neu bewerten, Stakeholder-Profile      │ │
│ │ [Qualifizieren]  [Verwerfen]  [Mehr Kontext]                     │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│ 🔍 Qualifying (4)   Qualified (2)   Dismissed (12 archived)          │
└──────────────────────────────────────────────────────────────────────┘
```

### 5.5 Warm-Path-Indikatoren

Beim Trigger-Qualifying oder Opportunity-Intake zeigt das System: „Wen aus unserem Team haben mit den relevanten Stakeholdern eine Verbindung?"

**Algorithmus (deterministisch, Phase 1a):**
```
Für jeden Stakeholder im Trigger-Kontext:
  Finde Consultants mit:
    - überlappende CareerTrailEntry (gleiche Firma, Zeit-Overlap)
    - überlappende EducationEntry (gleiche Institution, Jahr-Overlap ±1)
    - bestehende ContactPoint-Historie (letzter Touch <24 Monate)
  Sortiere nach: ContactPoint > CareerOverlap > EducationOverlap
  Zeige Top 3, mit Beziehungs-Begründung
```

**Phase 1b:** AI-Operator `Suggest` ergänzt schwächere Signale (gemeinsame Konferenzteilnahme aus Knowledge-Library, gemeinsames Projekt vor 5 Jahren etc.).

**Consent-Visibility-Gate:** Wenn ein Consultant in WarmPathEdge `consent_visibility = Restricted` gesetzt hat (z. B. Privatbeziehung), wird die Edge nur Stefan selbst und Thomas im Audit angezeigt — nicht Katrin.

### 5.6 Opportunity-Erfassung (Übergabe)

Vom Trigger zur Opportunity ist der wichtigste Cross-Modul-Übergang im MVP-Loop.

**Übergabe-Payload (Modul 1 → Modul 2):**
```
{
  trigger_id, account_id, stakeholder_ids[],
  source_bindings: SourceBinding[],
  ai_suggested_opportunity_kind?,
  warm_path_consultants?: ConsultantID[],
  related_account_history?: AccountHistoryID[]
}
```

Trigger wechselt auf Stage `ConvertedToOpportunity`, `Opportunity.stage` startet bei `Intake`.

### 5.7 Account-Briefing-Generator

One-Page-Snapshot vor Kundenterminen. Operator `Summarise` über die in §5.3 genannten Quellen.

**Briefing-Sektionen (alle mit Source-Bindings):**
1. **Stand der Beziehung** — Tier, aktive Verträge, NPS / Sentiment falls erfasst.
2. **Aktive Themen** — offene Opportunities, laufende Projekte (mit Health-Indikator aus Allocation/Delivery).
3. **Stakeholder-Update** — Wer ist seit letztem Termin neu, wer hat Rolle gewechselt.
4. **Warnsignale** — Lessons-Learned, frühere Risiken, offene Beschwerden.
5. **Empfehlungen** — vorgeschlagene Gesprächspunkte.

Briefing ist **read-only**, kein Approval-Gate, da kein External-Send. Aber Audit-Log läuft mit.

### 5.8 Sales-Analytics Basis

MVP: vier Kerneinblicke. Mehr ist Phase 1b.

- **Trigger-zu-Opportunity-Conversion** (pro Account, pro Berater, pro Trigger-Quelle).
- **Win/Loss-Ratio** (pro Tier, pro Industrie, pro Berater).
- **Pipeline-Volumen** (offene Opportunities * Win-Probability — Win-Prob aus Pricing-Frame Phase 1b; MVP konstante 50 %).
- **Time-to-Won** (Median, p90 pro Tier).

**Wireframe-Hinweis (Cockpit-Card für Thomas):**
```
┌─────────────────────────────────────────────────┐
│ Account Growth · Letzte 90 Tage                  │
├─────────────────────────────────────────────────┤
│ Trigger erfasst:       47                        │
│ → qualifiziert:        29 (62 %)                 │
│ → zu Opportunity:      18 (38 %)                 │
│                                                  │
│ Won:                   11 (61 % der Opportunities)│
│ Pipeline offen:        €1.4M (Median Stage: Brief)│
│                                                  │
│ Top-Trigger-Quelle:    Stakeholder-Termin (44 %) │
│ Top-Warm-Path-Owner:   Stefan Kraus (8 Edges)    │
└─────────────────────────────────────────────────┘
```

### 5.9 DSGVO-konforme Stakeholder-Verwaltung (B2B)

**Lawful-Basis-Default:** LegitimateInterest für B2B-Geschäftskontakte. Pro Stakeholder dokumentiert.

**Pflicht-Workflow für DSAR (Auskunft / Löschung):**
1. Stakeholder oder dessen Vertretung meldet DSAR (Mail an dpo@beratung.eu).
2. Office Managerin (Martina) oder dedizierter Datenschutzbeauftragter öffnet DSAR-Ticket.
3. System liefert Export aller mit Stakeholder verlinkten Datenpunkte (Stakeholder-Record, ContactPoints, AccountHistory-Erwähnungen, WarmPath-Edges).
4. Für Löschung: alle nicht-vertraglich-relevanten Daten löschbar (ContactPoints, Notes); vertragsrelevante (z. B. signierter Vertrag-Stakeholder) markieren als Pseudonymisiert.

**Retention-Default:** 24 Monate nach letztem ContactPoint, danach automatische Pseudonymisierungs-Prompt im DSAR-Workflow.

### 5.10 Audit-Trail aller AI-Trigger-Empfehlungen

Jeder Operator-Aufruf (Inferred Trigger, Briefing-Generation, Warm-Path-Suggestion) wird im Audit-Log persistiert:

```
AuditEntry
  ├── operator: "Suggest" | "Summarise" | "Classify"
  ├── input_hash, output_hash
  ├── model_version, prompt_version
  ├── source_bindings: SourceBinding[]
  ├── approver?: ConsultantID                (für genehmigungspflichtige Outputs)
  ├── timestamp
  └── retention_until
```

---

## 6. AI-Capabilities & Operator-Mapping

| Sub-Feature | Operator(en) | Output-Typ | Approval-Modus |
|---|---|---|---|
| 5.4 Trigger-Detection (Inferred) | `Classify` + `Suggest` | Vorgeschlagener Trigger-Kandidat | Inline-Approval (Katrin qualifiziert oder verwirft) |
| 5.5 Warm-Path-Suggestion | `Suggest` | Liste Berater mit Beziehungs-Score | Kein Gate (read-only, intern) |
| 5.7 Briefing-Generator | `Summarise` | Strukturiertes One-Page-Brief | Kein Gate (read-only) — aber Source-Binding-Pflicht |
| 5.8 Sales-Analytics-Insights (Phase 1b) | `Classify` (Pattern) | Diagnostic Insight | Inline (Insight wird sichtbar erst nach Acceptance) |

**Verbotene Operatoren in diesem Modul:**
- `Draft` über Stakeholder hinweg (kein „personalisierter Outreach" generiert) — out of scope MVP wegen Marketing-CMS-Verwandtschaft.
- `Plan` für Account-Strategien (kommt in Phase 2 unter Strategic Planning).

---

## 7. Compliance & Constraints

### 7.1 DSGVO

- **Art. 6 lit. f (Legitimate Interest)** als Default-Basis. Dokumentation pro Stakeholder.
- **Art. 13/14** Informationspflicht: Stakeholder erhält bei erster Erfassung in Datenbank eine Info-Mail (Pflicht-Workflow konfigurierbar).
- **Art. 15** Auskunftsrecht via DSAR-Workflow §5.9.
- **Art. 17** Löschungs-Recht: kategorisch unterscheiden vertragsrelevante (pseudonymisieren) vs nicht-vertragsrelevante (löschen).
- **Art. 22** Verbot automatisierter Einzelentscheidungen mit Rechtsfolge: Trigger-Empfehlungen sind keine Einzelentscheidung mit Rechtsfolge — sie sind Vorschläge an Katrin. Approval-Gate ist Schutzmechanismus.

### 7.2 BetrVG (mittelbar)

Stakeholder sind in der Regel **Kunden-Mitarbeitende**, nicht eigene. BetrVG-Heavy-Mode der eigenen Beratung gilt damit nicht direkt — **aber** wenn Inferred-Trigger Daten über Berater-Aktivitäten (z. B. „Stefan hatte 8 Touches zu Frau Schulz") als Eingabe nutzen, fließen eigene Personendaten ein. In BetrVG-Heavy-Mode:
- Touchpoint-Aggregate pro Berater nur als Team-Aggregat sichtbar, nicht Personenbezug.
- Performance-Pattern-Extraction („Welcher Berater wandelt am besten Trigger zu Opportunities?") ist Personenbezug → BetrVG-Approval-Pflicht für Aktivierung.

### 7.3 AI Act

- **Inferred Trigger** sind keine High-Risk-Anwendung (keine Annex-III-Anwendungsbereich Trigger). Aber: Transparency-Pflicht — Katrin sieht klar dass es vom System suggeriert wurde, mit Confidence und Quelle.
- **Warm-Path-Suggestion** ist keine Profilbildung im Sinne der AI Act — sie nutzt nur strukturierte, einwilligungs-gedeckte Daten.

### 7.4 Aggregation vor Personenbezug (PRD v4.1 Prinzip)

Sales-Analytics zeigt Default-mäßig **aggregiert** (pro Industrie, pro Tier). Drill-Down auf einzelne Berater erst nach Approval-Gate durch Thomas. Drill-Down auf einzelne Kunden-Stakeholder mit ihrem Verhalten (Sentiment, Response-Rate) ist Phase 3+ und braucht eigenes Compliance-Review.

---

## 8. Cross-Modul-Schnittstellen

### 8.1 Inputs

| Quell-Modul | Datenfluss | MVP-Pflicht? |
|---|---|---|
| **Consultant/Capacity** | Career & Education Trails der Berater → speist Warm-Path-Algorithm | Ja |
| **Knowledge & Reuse** | LessonsLearned-Knoten verlinkt mit Account → angezeigt in History und Briefing | Ja |
| **Opportunity/Proposal/Contract** | Won/Lost-Events + Opportunity-State-Übergänge → AccountHistory-Einträge | Ja |
| **Allocation & Delivery (Modul 5)** | Projekt-Start/Ende, Project Health → AccountHistory-Einträge | Ja |
| **Commercial Control (Modul 6)** | Rechnungs-Events, AR-Status → Account-Health-Signal | Ja |
| **Outlook / Email** (Phase 1b) | Mail-Triages für Trigger-Erkennung | Nein |

### 8.2 Outputs

| Ziel-Modul | Datenfluss | MVP-Pflicht? |
|---|---|---|
| **Opportunity/Proposal/Contract** | Trigger → Opportunity-Erzeugung mit Übergabe-Payload (§5.6) | Ja |
| **Consultant/Capacity** | Warm-Path-Statistiken pro Berater (anonymisiert oder mit Consent) | Ja |
| **Knowledge & Reuse** | Account-Patterns → Lessons-Learned-Material; Stakeholder-Stories | Ja |

### 8.3 Sidecars

- **AI Workspace (Phase 1b):** Account-Briefing-Generator wird natürliches Workspace-Feature.
- **Governance & Audit:** Write-side aktiv ab Tag 1; DSAR-Workflow nutzt es passiv.

---

## 9. Erfolgskriterien MVP

1. Pilot-Beratung hat **≥80 % ihrer aktiven Bestandskunden** als Account-Records mit ≥1 Stakeholder im System.
2. **≥50 % der Trigger** kommen aus dem Inferred- oder External-Pfad (nicht reine Manual-Erfassung) — zeigt dass die Erkennungs-Mechanik trägt.
3. **Time-to-Opportunity-Median <72 h** zwischen Trigger-Erfassung und Opportunity-Konvertierung.
4. **Warm-Path-Adoption:** ≥30 % der qualifizierten Opportunities nutzen eine vorgeschlagene Warm-Path-Beziehung.
5. **0 DSGVO-Vorfälle** über DSAR-Workflow nicht bearbeitet binnen 30 Tagen.
6. **100 %** der Inferred-Trigger mit Source-Bindings.
7. **Audit-Coverage:** alle Trigger-Operator-Aufrufe in Audit-Log auffindbar.

---

## 10. Offene Fragen (Co-Build)

| ID | Frage | Wer entscheidet | Bis wann |
|---|---|---|---|
| Q1 | Tier-Default-Schema (4-stufig) — passt es für Pilot-Beratung oder eigene Definition? | Beratung | Pre-Pilot |
| Q2 | Wie aggressiv inferred-Trigger anzeigen? Hohe Confidence-Schwelle (>0.7) als MVP-Default? | Beratung + Consultry | Pre-Pilot |
| Q3 | LinkedIn-Integration: API-Pfad (kostspielig, restricted) vs Browser-Extension vs nur manuell? | Consultry | Phase 1a Mid |
| Q4 | Stakeholder-Influence-Mapping: Default-Heuristik vs explizit gesetzt? | Beratung | Pre-Pilot |
| Q5 | Briefing-Sprache: nur DE im DACH-Default? Mehrsprachige Stakeholder = Briefing in deren Sprache? | Beratung | Pre-Pilot |
| Q6 | Warm-Path-Visibility bei Privat-Beziehungen — fein-granulares Consent oder einfache „shared / restricted" Toggle? | Consultry + Berater | Pre-Pilot |
| Q7 | Wenn Stakeholder seine Position verlässt (z. B. Frau Schulz wechselt Firma): wird der Stakeholder-Record neu duplicated oder weiter-genutzt? | Consultry | Phase 1a |
| Q8 | Sentiment-Erfassung (NPS, Beziehungs-Pulse): Phase 1b oder Phase 3+? | Beratung | Phase 1a |
| Q9 | Multi-Tenancy für Beratungs-Allianz-Modelle (mehrere Beratungen teilen Account-Daten): Out-of-scope MVP — wie weit ist Architektur darauf vorbereitet? | Consultry | Phase 1a |

---

## 11. Anti-Patterns

| Anti-Pattern | Warum nicht |
|---|---|
| Automatische Mail-Templates an Stakeholder auf Trigger | Verstößt gegen Marketing-CMS-Trennung; Mail bleibt Outlook-Hoheit |
| „Aktivitäts-Score" pro Berater als prominentes UI-Element | Performance-Surveillance → BetrVG-Risiko, Aggregation-Pflicht |
| Auto-Generierte Insights ohne Acceptance-Gate | Insight-Halluzinationen würden Vertrauen sofort ruinieren |
| Vollständiger LinkedIn-Sync ohne Stakeholder-Consent | DSGVO-Bedenken; LinkedIn-AGB-Bedenken |
| „Best-time-to-call"-Predictions | Verhaltens-Profiling → AI Act / DSGVO problematisch |
| Stakeholder-Notes als reine Freitext-Spalte ohne Strukturierung | Wissens-Verlust; Knowledge-Modul kann es nicht aufgreifen |
| Trigger als reine Inbox ohne Lifecycle | „Inbox die voll wird" — Bull-Anti-Pattern |
| Sales-Pipeline-View die nur Geld-Beträge zeigt | Reduziert das Modul auf CRM-Klon; Differenzierer (Beziehungs-Tiefe) verschwindet |

---

## 12. Verweise

- [Roadmap §3.1 MVP-Loop](../../business-definitions/Consultry-Roadmap-v1.0-MVP-and-Phasing.md), [§3.2 MVP-Module](../../business-definitions/Consultry-Roadmap-v1.0-MVP-and-Phasing.md)
- [PRD v5.0 §4.1 Account/Stakeholder/Trigger](../../technical-definitions/Consultry-PRD-v5.0-Software-Layered.md), [§8 Compliance](../../technical-definitions/Consultry-PRD-v5.0-Software-Layered.md)
- [PRD v4.1 §3 Account Growth System](../../Consultry-PRD-v4.0-DACH-Operating-System.md)
- [Personas: Katrin (BD), Thomas (MP), Stefan (PL), Lisa (Consultant)](../../Consultry-Target-Personas-v1.0.md)
- Schwester-Module: [02-opportunity-proposal-contract/spec.md](../02-opportunity-proposal-contract/spec.md), [03-consultant-team-capacity/spec.md](../03-consultant-team-capacity/spec.md), [04-knowledge-reuse/spec.md](../04-knowledge-reuse/spec.md)
- Flows: [flows.md](./flows.md)

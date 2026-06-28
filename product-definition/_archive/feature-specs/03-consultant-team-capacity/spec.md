# Feature Spec — Consultant, Team & Capacity

> **⚠️ ARCHIVIERT (12.06.2026 — [MVP-Foundation-Decisions v1.0](../../Consultry-MVP-Foundation-Decisions-v1.0.md), T1).** Diese Spec gehört zur „Win-and-Deliver"-Generation (Gen A) und ist **kein MVP-Scope**. Verbindlich: [MVP-PRD v1.0](../../Consultry-MVP-PRD-v1.0.md) (Acquisition-to-Bid) + Foundation-Decisions. Persona-/Outcome-Tabellen dürfen als UX-Input wiederverwendet werden (Salvage, Foundation-Decisions §4). Nicht als Quelle der Wahrheit verwenden.

**Modul-ID:** `03-consultant-team-capacity`
**Status:** Draft v1.0 — MVP-Sharpening
**Datum:** 2026-05-28
**MVP-Phase:** 1a (Win & Deliver — Tag 1)
**Rolle im Loop:** Lieferant des „Wer". Stellt Skill, Verfügbarkeit, Cost-Rate, Project-Experience für Staffing und Tailored CVs bereit.
**Bezug:** [PRD v4.1 §3, §4.1](../../Consultry-PRD-v4.0-DACH-Operating-System.md), [PRD v5.0 §4.1, §8.1, §8.2](../../technical-definitions/Consultry-PRD-v5.0-Software-Layered.md), [Roadmap §3.2](../../business-definitions/Consultry-Roadmap-v1.0-MVP-and-Phasing.md), [ProductDoc §7.2](../../Consultry-Product-Document-v1.0.md)

---

## 1. Job-to-be-Done

> **Die Beratung weiß zu jeder Sekunde, wer welche Skills wirklich hat, wer wann verfügbar ist, was eine Stunde Berater:in kostet — und wer welches Wissen besitzt — strukturiert genug, dass Staffing-Vorschläge und Tailored CVs in Sekunden statt Stunden entstehen, ohne Wahrheitswert zu opfern.**

Das Modul ist die **Datenbasis für Modul 2** (Opportunity/Proposal/Contract) — wenn Capacity-Daten dünn oder veraltet sind, sinkt die Qualität von Staffing-Empfehlungen und Tailored CVs proportional. Es ist zugleich der Ort, an dem **Annex-III-§4-Compliance** den größten Hebel hat.

### Outcome pro Persona

| Persona | Heute | Soll mit Consultry |
|---|---|---|
| **Lisa (Consultant)** | Skills in 4 verschiedenen Excel-Files. Profil gepflegt nur, wenn jemand nachfragt. | Self-Service-Profil mit Skill-Strength + Knowledge-Contributions. Update in <5 min. |
| **Stefan (Senior / PL)** | Wird ständig gefragt „kann Lisa das?". Pflegt informelle Skills-Map im Kopf. | Sieht Skills + Project-Experience + Knowledge-Authorship aller Berater:innen. Vorbei mit Mail-Triage. |
| **Katrin (BD)** | Wartet 1–2 Tage auf „wer kann staffen?" Antworten. | Skill-Match + Availability live abrufbar, deterministisch und mit Erklärung. |
| **Thomas (MP)** | Hat keine Sicht auf Skill-Gap der Belegschaft. | Skill-Gap-View pro Practice + Anstellungs-Bedarfs-Indikator. |
| **Martina (Office)** | Pflegt Stammdaten in HR-Tool, Skills in Excel — Doppelpflege. | Master-Daten in Consultry, HR-Tool empfängt Pflicht-Felder via Export. |

---

## 2. In-Scope MVP (Tag 1)

| # | Sub-Feature | MVP-Begründung |
|---|---|---|
| 2.1 | **Consultant-Profile** (Stammdaten + Senioritätsstufe) | Voraussetzung für alles. |
| 2.2 | **Skill-Tagging** mit Strength + Quell-Belegung | Skill-Match in Modul 2 ist explizit, taxonomy-basiert. |
| 2.3 | **Certification-Erfassung** | CV-Material; oft Pflicht für Kunden-Auswahl. |
| 2.4 | **Project-Experience-Historie** | Authoritative Quelle für Tailored CVs (NICHT freitext-CV in Word). |
| 2.5 | **Availability-Management** (Zeitfenster, FTE-Anteil) | Für Staffing zwingend. |
| 2.6 | **Cost-Rate + Sell-Rate** (pro Berater, pro Praxis) | Pricing in Modul 2 + Margenrechnung. |
| 2.7 | **Knowledge-Authorship** (Verlinkung zu Knowledge-Assets) | Verbindet Berater zu seinem Wissen — kein verwaister Knowledge-Knoten. |
| 2.8 | **Self-Service-Edit** für eigene Profil-Felder | Lisa & Stefan pflegen direkt; reduziert Office-Last. |
| 2.9 | **Admin-Override** für Office-Managerin | Martina kann zentrale Felder ergänzen (Eintrittsdatum, Kostenstelle). |
| 2.10 | **Skill-Taxonomie-Bootstrap** (~80 Skills) | Pflicht-Vorbedingung; Co-Build mit Pilot-Beratung. |
| 2.11 | **BetrVG-Mode-Heavy-Toggle** | Pflichtsockel für Beratungen mit Betriebsrat. |
| 2.12 | **DSGVO-Aufbewahrungs-Logik** | Aufbewahrung & Pseudonymisierung bei Ausscheiden. |

---

## 3. Out-of-Scope MVP

| Bereich | Wann | Quelle |
|---|---|---|
| Implicit Skill-Inference aus Project History | Phase 1b | Roadmap §6 |
| Forecasting / Capacity-Intelligence | Phase 1b | PRD v4.1 §4.1 |
| Knowledge-Leadership-Reporting (Wer treibt welches Wissens-Cluster) | Phase 1b | PRD v4.1 §4.1 |
| Skill-Growth-Empfehlungen pro Berater | Phase 1b mit BetrVG-Heavy-Gate | PRD v5.0 §8.2 |
| An- / Abwesenheits-Management (Urlaubsanträge, Sick-Days) | Phase 3+ | Roadmap §2 lines 64–65 |
| Performance-Reviews / Bonus-Berechnung | Niemals durch Consultry (HR-System bleibt eigenständig) | PRD v4.1 Prinzip „ein Modul hat einen Job" |
| Full Team-Structure-Hierarchies (Reports-to-Tree mit Workflows) | Phase 3+ | Roadmap §3.2 |
| AI-Operator generiert Profile from scratch | Niemals (Profil ist Self-Service-Wahrheit) | Anti-Pattern |
| Mehrsprachige Profile (jenseits DE/EN) | Phase 3+ | Roadmap §1 |

---

## 4. Entities & Datenmodell

### 4.1 Kern-Entities

```
Consultant
  ├── id, employee_no, full_name, salutation, email, phone
  ├── status: enum { Active, OnLeave, Notice, ExLeft, ExArchived }
  ├── practice: PracticeID
  ├── seniority: enum { Junior, Mid, Senior, Principal, Partner }
  ├── employment_kind: enum { FullTime, PartTime, Contractor, Freelance }
  ├── fte_pct: int 1-100               (default 100 bei FullTime)
  ├── start_date, end_date?
  ├── primary_location: { city, country, time_zone }
  ├── languages: { code, level enum { A1..C2, native } }[]
  ├── education_trail: EducationEntry[]
  ├── career_trail_pre_company: CareerTrailEntry[]   (vor Beratungs-Eintritt)
  ├── consent_state: ConsentState
  ├── HAS_MANY Skill (with strength)
  ├── HAS_MANY Certification
  ├── HAS_MANY ProjectExperience
  ├── HAS_MANY Availability
  ├── HAS_MANY KnowledgeContribution
  ├── HAS_ONE CostRate                  (current; history versioned)
  └── HAS_ONE SellRate?                 (optional override; default = Practice-Default)

Skill (an Consultant attached)
  ├── taxonomy_entry: SkillTaxonomyID
  ├── level: enum { Aware, Practiced, Proficient, Expert, Authority }
  ├── source_of_claim: enum { SelfDeclared, PeerVerified, ProjectAttested, CertificationBacked }
  ├── last_used_at: date                (für Decay-Berechnung)
  ├── self_assessed: bool
  └── notes: text (optional context)

Certification
  ├── name, issuer, issued_at, expires_at?
  ├── certificate_id, verification_url?
  ├── linked_skills: SkillTaxonomyID[]
  └── document_attachment: BlobRef? (read-only, audit-fähig)

ProjectExperience
  ├── consultant: ConsultantID
  ├── project: ProjectID?               (FK falls intern bekannter Projekt — sonst Freitext)
  ├── company: text                     (Kunde, ggf. anonymisiert für externe Erfahrung)
  ├── role: text
  ├── start, end
  ├── methodologies_used: MethodologyID[]
  ├── skills_applied: SkillTaxonomyID[]
  ├── achievements: text (mit Source-Bindings falls intern)
  └── visibility: enum { Public, ConsultantOnly, AnonymizedForCV }

Availability
  ├── consultant: ConsultantID
  ├── window: { start, end }
  ├── fte_pct: int 0-100                (Anteil verfügbar in diesem Fenster)
  ├── reason: enum { Free, Allocated, Reserved, Training, Leave, Other }
  ├── linked_allocation?: AllocationID
  └── visibility: enum { Internal, AdminOnly }

CostRate
  ├── consultant: ConsultantID
  ├── effective_from, effective_to
  ├── currency: ISO_4217
  ├── hourly_cost: decimal              (vollkosten inkl. Lohnnebenkosten + Overhead)
  ├── source: enum { ManualAdmin, Imported, Derived }
  ├── visibility: AdminOnly             (sensible Daten; Default versteckt)
  └── audit_log: AuditEntry[]

SellRate
  ├── consultant: ConsultantID?         (null = practice-default)
  ├── practice: PracticeID?             (null = consultant-override)
  ├── effective_from, effective_to
  ├── currency, hourly_sell: decimal
  ├── price_band: enum { Standard, Premium, Discounted }
  └── notes: text?

KnowledgeContribution
  ├── consultant: ConsultantID
  ├── asset: KnowledgeAssetID           (FK → Knowledge & Reuse)
  ├── kind: enum { Authored, CoAuthored, Reviewed, Contributed }
  ├── contributed_at
  └── effort_hours: int?                (optional, falls Time-Tracking dahinter)

Practice                               (Organisatorische Einheit)
  ├── id, name
  ├── parent_practice?: PracticeID
  ├── default_sell_rate: SellRateID
  ├── lead_consultant: ConsultantID
  └── tags: PracticeTag[]
```

### 4.2 Skill-Taxonomie

**MVP-Strategie:** kuratiertes Bootstrap-Set (~80 Skills) bei Onboarding der Pilot-Beratung. Skill-Taxonomie ist [Co-Build (PRD v5.0 §10.4)](../../technical-definitions/Consultry-PRD-v5.0-Software-Layered.md).

```
SkillTaxonomyEntry
  ├── id, slug
  ├── name_de, name_en
  ├── category: SkillCategory          (z. B. Technology, Methodology, Industry, SoftSkill)
  ├── parent?: SkillTaxonomyID         (hierarchical, max depth 3)
  ├── synonyms: text[]                 (für Search-Matching)
  ├── governance: enum { Core, Pilot-Custom, Deprecated }
  └── related_skills: SkillTaxonomyID[]
```

**Pflicht: Sources-of-Claim-Hierarchie:**
- `SelfDeclared` (niedrigster Trust)
- `PeerVerified` (ein anderer Consultant bestätigt)
- `ProjectAttested` (System-derived aus ProjectExperience mit Methodology-Match)
- `CertificationBacked` (höchster Trust)

In Skill-Match-Algorithmus (Modul 2) wird `source_of_claim` als Tie-Breaker genutzt.

### 4.3 Cost vs Sell — strikte Trennung

- **CostRate** ist sensitive (Berater-Vollkosten), Sichtbarkeit nur für berechtigte Rollen (Finance, MP).
- **SellRate** ist Markt-Information, breiter sichtbar (PL, BD).
- **Margenrechnung** = `(sell - cost) / sell` läuft in Modul 2 Pricing-Frame, *nicht* hier — Capacity stellt nur die Werte bereit.

### 4.4 Availability als überlagerbare Windows

```
Berater Stefan:
  Window 1: 2026-05-01 to 2026-08-31, fte_pct=80, reason=Free
  Window 2: 2026-06-15 to 2026-06-22, fte_pct=-80, reason=Leave  (subtraktiv)
  → Effective availability on 2026-06-20 = 0 %
  → Effective availability on 2026-07-10 = 80 %
```

Subtraktive Windows ermöglichen elegante Modellierung von Urlauben über laufende Allocation hinweg.

### 4.5 Verbotener Datentyp: Performance-Score

`Consultant.performance_score` oder ähnliches **gibt es nicht** — bewusst. Begründung: BetrVG-Heavy + Annex-III-§4-Risiko + Anti-Pattern „People-Reduction-on-Number". Insight kommt aus aggregiertem Telemetry, nicht Persönlichem.

---

## 5. Sub-Features im Detail

### 5.1 Consultant-Profile (Stammdaten)

**Pflichtfelder (durch Office bei Onboarding):** name, employee_no, email, status, practice, seniority, employment_kind, fte_pct, start_date.

**Self-pflegbar (durch Berater selbst):** salutation, phone, languages, education_trail, career_trail_pre_company.

**Admin-Only:** cost_rate, sell_rate-override, end_date, status-changes zu ExLeft.

### 5.2 Skill-Tagging

UI: Skill-Picker mit Auto-Suggest aus Taxonomie + Möglichkeit zu „Skill vorschlagen" (kuratiert von Taxonomy-Maintainer).

**Skill-Karten-Layout (Wireframe):**
```
┌─────────────────────────────────────────────────────────────────────┐
│ Cloud Migration · AWS Specialty                                       │
│                                                                       │
│ Level:    ●●●●○ Proficient                                            │
│ Source:   Project Attested (Heller-Migration 2024)                    │
│ Last used: 2024-Q4                                                    │
│ Self-assessed: nein (von Stefan im Peer-Review bestätigt)            │
│                                                                       │
│ [Bearbeiten]  [Peer-Verifizierung anfragen]                          │
└─────────────────────────────────────────────────────────────────────┘
```

**Decay-Indikator:** Skills die >24 Monate „last used" sind, werden visuell „verblasst" (UI-Hinweis, keine harte Deaktivierung). Beim Staffing-Match in Modul 2 fließt Decay in Confidence-Score ein.

### 5.3 Certification

Pflicht-Dokumenten-Anhang bei sicherheitsrelevanten Certs (ISO, AWS, BSI). Auto-Reminder vor Verfall (30/14/7 Tage).

Verlinkung zu Skills: Eine Cert kann mehrere Skills „backen" — diese Skills bekommen `source_of_claim=CertificationBacked` automatisch.

### 5.4 Project-Experience-Historie

**Authoritative Source** für Tailored CVs. **Niemals** soll Modul 2 freie Texte aus einem Word-CV nehmen.

**Erfassung:**
- Automatisch aus Modul 5 (Allocation & Delivery): wenn Berater auf Projekt mit Stage `Delivered` allocated war, wird ProjectExperience auto-erzeugt.
- Manuelle Erfassung für externe Erfahrung (vor Beratungs-Eintritt; bei Contractors aus Vorprojekten).

**Visibility-Tiers:**
- `Public`: in jedem Tailored-CV als Standard.
- `ConsultantOnly`: erfasst, aber nicht in CVs verwendet (Berater wollte Erfahrung dokumentieren ohne Promotion).
- `AnonymizedForCV`: in CVs nur unter „Kunde-anonymisiert" (z. B. bei vertraulichen Beratungen).

### 5.5 Availability-Management

Drei Pflege-Modi:
- **Persönlich:** Berater pflegt Urlaube, Trainings selbst.
- **Allocation-induziert:** Wenn in Modul 5 eine Allocation angelegt wird, entsteht entsprechendes Availability-Window mit `reason=Allocated`.
- **Admin-overlay:** Martina kann Office-Kalender-Events (Firmen-Workshop, Pflicht-Schulungen) als Bulk-Eintrag pflegen.

**Wireframe-Hinweis (Availability-Wochen-View):**
```
┌──────────────────────────────────────────────────────────────────────┐
│ Lisa Tran · Verfügbarkeit · KW 22–30 · 2026                          │
├──────────────────────────────────────────────────────────────────────┤
│         Mo   Di   Mi   Do   Fr   Sa   So                              │
│ KW 22  ▓▓   ▓▓   ▓▓   ▓▓   ▓▓                ← Müller-Projekt 80%   │
│ KW 23  ▓▓   ▓▓   ▓▓   ▓▓   ▓▓                ← Müller-Projekt 80%   │
│ KW 24  ▓▓   ▓▓   ▓▓   ▒▒   ▒▒                ← Schulung Do/Fr 100%  │
│ KW 25  ░░   ░░   ░░   ░░   ░░                ← frei                  │
│ KW 26  ░░   ░░   ░░   ░░   ░░                ← frei                  │
│ KW 27  ━━   ━━   ━━   ━━   ━━                ← Urlaub                │
│                                                                       │
│ Legende: ▓ Allocated · ▒ Reserved · ░ Free · ━ Leave                 │
│                                                                       │
│ + Window hinzufügen                                                   │
└──────────────────────────────────────────────────────────────────────┘
```

### 5.6 Cost-Rate + Sell-Rate

**CostRate-Pflege:** ausschließlich Admin (Finance + MP). Versionsiert, Audit-pflichtig. Vergangene Rates nicht überschreibbar — nur neuer Eintrag mit neuem `effective_from`.

**SellRate-Pflege:** Practice-Lead setzt Default für Practice; einzelne Consultants können override haben (z. B. „Frau Müller-Schmidt verlangt 280 €/h für ihre Spezialisierung").

**MVP-Pricing-Tabelle pro Beratung im Bootstrap:**
```
Junior        Mid          Senior        Principal     Partner
Sell/h: 110  Sell/h: 160  Sell/h: 210  Sell/h: 280   Sell/h: 380
Cost/h:  60  Cost/h:  90  Cost/h: 130  Cost/h: 175   Cost/h: 240
Margin: 45%  Margin: 44%  Margin: 38%  Margin: 38%   Margin: 37%
```

Beratung füllt diese Tabelle im Onboarding. Werte sind Beispiele, ändern pro Beratung erheblich.

### 5.7 Knowledge-Authorship

Wenn Stefan im Modul 4 (Knowledge & Reuse) einen LessonsLearned-Knoten schreibt, wird automatisch ein `KnowledgeContribution`-Eintrag am Consultant-Knoten erzeugt.

**Use Case in Modul 2:** Staffing-Algorithm bevorzugt bei sonst gleichen Berater:innen denjenigen, der **methodologisch authored** hat — „Stefan hat 5 Lessons Learned zur Sourcing-Methodologie geschrieben → bei Sourcing-Trigger bevorzugen".

### 5.8 Self-Service-Edit vs Admin-Override

UI gibt Berater eine klare „Mein Profil"-View. Felder, die Berater editieren darf, sind explizit als „Self-Service" markiert. Admin-Felder erscheinen read-only mit Klick auf „Office bitten zu ändern".

**Approval-Workflow für sensible Self-Service-Felder:**
- Skill-Level-Upgrade (z. B. Aware → Expert): kein Approval, aber bei Source=SelfDeclared wird Skill mit „un-verifizierter Selbstangabe"-Indikator gezeigt.
- Project-Experience-Erfassung (extern): kein Approval, aber Office sieht es im Stream und kann nachfragen.

### 5.9 Skill-Taxonomie-Bootstrap

Initial ~80 Skills, gepflegt durch Consultry-Onboarding mit Pilot-Beratung.

**Governance-Workflow ab Tag 1:**
- Berater kann „Skill vorschlagen" — geht in Taxonomy-Backlog.
- Taxonomy-Maintainer (default: Stefan) approved, verlinkt mit existing parent, setzt Synonyms.
- Verworfen-Vorschläge bekommen kuratierten Vorschlag: „Du meintest wahrscheinlich Skill X".

### 5.10 BetrVG-Mode-Heavy-Toggle

Pro Beratung einmalig konfiguriert. Effekte:

| Feature | Standard-Mode | Heavy-Mode |
|---|---|---|
| Workload-Analytics pro Berater | Visible für Thomas | Nur Aggregat-Practice-Level |
| Skill-Growth-Empfehlungen | Phase 1b: pro Berater | Nur opt-in, mit Berater-Approval |
| Staffing-Bias-Aggregate | Anzeige für MP | Anzeige für MP + Werks-/Betriebsrats-Vertreter:in |
| Audit-UI-Zugang | MP + Compliance | + Werks-/Betriebsrats-Vertreter:in |
| Performance-Pattern-Inference | Phase 3+ | Niemals |

### 5.11 DSGVO-Aufbewahrung

- Aktiver Berater: alle Daten.
- Berater verlässt (Status → ExLeft): 6 Monate Karenzzeit (für laufende Abwicklung), danach `ExArchived`.
- ExArchived: nur vertrags-/projektrelevante Daten bleiben (Projekt-Experience für CVs in archived Won-Verträgen). Sonstige Daten pseudonymisiert.
- Volle Löschung: nach gesetzlicher Aufbewahrungsfrist (i. d. R. 10 Jahre nach letztem Vertrag) oder auf DSAR-Antrag des ehemaligen Beraters.

---

## 6. AI-Capabilities & Operator-Mapping

Capacity ist **datenträger-zentriert**, weniger Operator-zentriert als Modul 2. Aber:

| Sub-Feature | Operator(en) | Output | Approval-Modus |
|---|---|---|---|
| 5.2 Skill-Vorschlag bei Erfassung | `Suggest` (auto-complete aus Taxonomy + Synonyms) | Vorschlags-Liste | Keine (UI-Hilfe) |
| 5.4 Project-Experience-Skill-Inference (Phase 1b) | `Classify` (Methodology → Skill-Map) | Vorgeschlagene Skill-Tags | Inline-Approval pro Skill |
| 5.7 Knowledge-Authorship-Aggregation | `Summarise` (Wissen-Cluster pro Berater) | Aggregat-View | Keine (read-only) |
| 5.9 Skill-Taxonomie-Suggestion-Disambiguation | `Classify` | Eingabe → Taxonomy-Match | Inline (Berater wählt) |

**Verbotene Operatoren in diesem Modul:**
- `Draft` für Profil-Inhalte (Berater pflegt, AI ergänzt nicht).
- `Plan` für Berater-Karriere-Pfade (Phase 3+, BetrVG-Heavy-Gate).
- `Review` von Berater-Performance gegen Methodology — Anti-Pattern.

---

## 7. Compliance & Constraints

### 7.1 AI Act Annex III §4

Capacity-Daten **füttern** Annex-III-§4-relevante Outputs (Tailored CV, Staffing-Vorschlag) in Modul 2. Damit ist Capacity Teil des Conformity-Documentation-Scopes:

- **Data Governance:** Skill-Taxonomy-Versionsierung, Source-of-Claim-Trail, Decay-Tracking.
- **Record-Keeping:** Audit-Log für jede Skill-Level-Änderung, jede Cost-Rate-Änderung.
- **Transparency:** Berater sieht, *wie* sein Skill in Match-Score-Berechnung einfließt (Phase 1b — MVP: nur Score, keine Erklärung).
- **Human Oversight:** Profil ist Self-Service-Wahrheit. Niemand inkl. AI ändert ohne Berater-Zustimmung.
- **Accuracy & Robustness:** Decay-Logik vermeidet veraltete Skill-Claims; Source-of-Claim-Hierarchie reduziert False-Positives.

### 7.2 DSGVO

- **Lawful Basis** für Mitarbeitendendaten: Arbeitsvertrag (Art. 6 lit. b) + Berechtigte Interessen (Art. 6 lit. f) bei externen Display-Zwecken (z. B. CV-Versand).
- **Art. 22:** Capacity-Daten dürfen nicht autonom über Personal entscheiden. Staffing-Vorschläge sind Vorschläge an Katrin/Thomas.
- **Sensible Daten (Art. 9):** Gesundheits-Indikatoren, Religion, Gewerkschaftszugehörigkeit, sexuelle Orientierung — werden **nicht erfasst**, auch nicht über Umwege wie Mitgliedschaften.

### 7.3 BetrVG

- Personenbezogene Workload-Analysen, Performance-Patterns, Skill-Growth-Empfehlungen sind **mitbestimmungspflichtig**.
- BetrVG-Mode-Heavy schaltet alle entsprechenden Features ab oder unter Approval-Pflicht (§5.10).
- BR-Vertreter:in hat Audit-UI-Zugang.

### 7.4 Aggregation vor Personenbezug (PRD v4.1 Prinzip)

- Skill-Gap-View für Thomas: aggregiert auf Practice-Level. Drilldown auf einzelnen Berater nur bei einem konkreten Staffing-Bedarf.
- Bias-Monitoring der Staffing-Vorschläge: Berichte sind aggregated (Geschlechter-Verteilung, Senioritäts-Spread, Standort-Diversität) — **nicht** „Wer wird häufig nicht gestafft".

### 7.5 Mitbestimmungspflichtige Tools

Skill-Taxonomy-Änderungen, Sell-Rate-Pricing-Bands, Cost-Rate-Bandbreiten sind betriebsverfassungs-relevant. Workflow: Beratung dokumentiert Vereinbarung mit BR; Consultry stellt Audit-Trail bereit.

---

## 8. Cross-Modul-Schnittstellen

### 8.1 Inputs

| Quell-Modul | Datenfluss | MVP-Pflicht? |
|---|---|---|
| **Knowledge & Reuse** | KnowledgeAsset-Authorship → KnowledgeContribution pro Berater | Ja |
| **Allocation & Delivery (Modul 5)** | Allocation-Events → Availability-Windows; Projekt-End-Events → ProjectExperience | Ja |
| **HR-System (extern)** | Stammdaten-Sync (Eintritt, Austritt, Personalnummer) | Phase 1b — MVP: manuelles Onboarding |
| **Commercial Control (Modul 6)** | Cost-Rate-Updates (z. B. Gehalts-Erhöhung) | Phase 1b — MVP: Admin trägt manuell |

### 8.2 Outputs

| Ziel-Modul | Datenfluss | MVP-Pflicht? |
|---|---|---|
| **Account Growth** | CV-Trail (Career, Education) pro Berater → Warm-Path-Algorithmus | Ja |
| **Opportunity/Proposal/Contract** | Profile + Skill + Availability + Cost-Rate + Project-Experience für Staffing-Algorithmus + Tailored-CV-Generator | Ja |
| **Allocation & Delivery (Modul 5)** | Availability + Cost-Rate für Allocation-Anlage | Ja |
| **Commercial Control (Modul 6)** | Cost-Rate + Sell-Rate für Billing-Margenrechnung | Ja |
| **Knowledge & Reuse** | Knowledge-Authorship-Statistik (passive) | Ja |

### 8.3 Sidecars

- **Governance & Audit** ist write-side ab Tag 1 aktiv für alle Skill-, Rate-, Availability-Changes.
- **AI Workspace (Phase 1b)** bietet „Wer hat Skill X?" als Query.

---

## 9. Erfolgskriterien MVP

1. **≥90 % der Pilot-Beratung-Berater** haben ein ausgefülltes Profil mit Skills, Project-Experience, Availability.
2. **Tailored-CV-Quality:** in Pilot-User-Testing ≥85 % der von Katrin generierten CVs sind ohne Edits send-ready.
3. **Staffing-Match-Confidence:** Median >0.7 bei der Default-Bootstrap-Taxonomie + Pilot-Datenstand.
4. **Skill-Decay-Sichtbarkeit:** ≥30 % der „verblassten" Skills werden binnen 90 Tagen entweder reaktiviert oder aus dem Profil entfernt.
5. **Self-Service-Adoption:** ≥80 % der Profil-Updates kommen vom Berater selbst (nicht Office).
6. **BetrVG-Heavy-Compatibility:** mindestens 1 Pilot-Beratung mit aktiviertem Heavy-Mode demonstriert vollständigen Aggregation-Pfad.
7. **0 Annex-III-Audit-Findings** beim Conformity-Check.

---

## 10. Offene Fragen (Co-Build)

| ID | Frage | Wer entscheidet | Bis wann |
|---|---|---|---|
| Q1 | Skill-Taxonomie-Bootstrap: 80 Skills genug oder mehr? Welche Kategorien zwingend (Technology, Methodology, Industry, SoftSkill)? | Pilot + Consultry | Pre-Pilot |
| Q2 | Peer-Verification-Workflow: einfacher Daumen-hoch oder begründungs-pflichtig? | Beratung | Pre-Pilot |
| Q3 | Skill-Level Aware/Practiced/Proficient/Expert/Authority — Mapping auf konkrete Berater-Erfahrung in Jahren? | Pilot | Pre-Pilot |
| Q4 | Cost-Rate-Versionsierung: monatlich rolling oder nur bei expliziten Änderungen? | Beratung | Pre-Pilot |
| Q5 | Externe Project-Experience (vor Beratungs-Eintritt): wie viel Detail braucht's für CV-Generierung? Wie verifizieren? | Beratung | Pre-Pilot |
| Q6 | Forecasting (Phase 1b): wie aggressiv? Auslastungs-Prognosen pro Berater bedarfen BetrVG-Heavy-Mode? | Beratung + BR | Phase 1a Mid |
| Q7 | Self-Service-Update-Frequenz-Erwartung: monatlich nudges, quartalsweise, nur on-demand? | Beratung | Pre-Pilot |
| Q8 | HR-System-Integration-Priorität: welche HR-Systeme bei Pilot relevant (Personio, Workday, SAP-SuccessFactors)? | Beratung | Phase 1a |
| Q9 | Skill-Authority-Stufe (höchste): wird sie überhaupt vergeben oder ist Expert die De-facto-Maximum-Stufe? | Beratung | Pre-Pilot |
| Q10 | Berater die nur in Bestimmten Sprachen arbeiten möchten: hard constraint im Staffing oder Soft-Filter? | Beratung | Pre-Pilot |

---

## 11. Anti-Patterns

| Anti-Pattern | Warum nicht |
|---|---|
| AI-generiertes Skill-Profil aus LinkedIn-Scrape ohne Berater-Approval | Verstößt gegen Self-Service-Hoheit und BetrVG |
| „Berater-Performance-Score" als sichtbares Feld | BetrVG-Sprengstoff, Annex-III-Risk |
| Tailored CV aus freitext-CV statt strukturierter ProjectExperience | Halluzinations-Risiko; Quellbindung unmöglich |
| Skill-Taxonomy ohne Versionierung / „live editieren in Produktion" | Audit-Pflicht; Backwards-Compat-Risiko |
| Cost-Rate sichtbar für alle Berater | Sensible Daten; Tarif-/Lohngerechtigkeits-Konflikte |
| Auslastungs-Quote pro Berater auf Dashboard | Performance-Surveillance → BetrVG |
| Skill-Empfehlungen „du solltest folgende Skills lernen" als Default-Push | Personalentwicklung → BetrVG, ggf. arbeitsrechtlich Direktion |
| Automatischer Skill-Decay-Removal nach 24 Monaten | Berater-Empfindlichkeit; Decay sichtbar, Entscheidung beim Berater |
| Mehrfach-Auswahl von gleichem Skill mit verschiedenen Levels | Datenmodell verbietet das (Constraint) |
| Profil komplett von Office gepflegt | Verstößt gegen Self-Service-Prinzip |

---

## 12. Verweise

- [Roadmap §3.2 MVP-Module](../../business-definitions/Consultry-Roadmap-v1.0-MVP-and-Phasing.md)
- [PRD v5.0 §4.1 Capacity-Entities](../../technical-definitions/Consultry-PRD-v5.0-Software-Layered.md), [§8.1 AI Act Annex III](../../technical-definitions/Consultry-PRD-v5.0-Software-Layered.md), [§8.2 BetrVG](../../technical-definitions/Consultry-PRD-v5.0-Software-Layered.md)
- [PRD v4.1 §4.1](../../Consultry-PRD-v4.0-DACH-Operating-System.md), [§3](../../Consultry-PRD-v4.0-DACH-Operating-System.md)
- [ProductDoc §7.2 AI-native Skills](../../Consultry-Product-Document-v1.0.md)
- [Personas: Lisa, Stefan, Katrin, Thomas, Martina](../../Consultry-Target-Personas-v1.0.md)
- Schwester-Module: [01-account-growth/spec.md](../01-account-growth/spec.md), [02-opportunity-proposal-contract/spec.md](../02-opportunity-proposal-contract/spec.md), [04-knowledge-reuse/spec.md](../04-knowledge-reuse/spec.md)
- Flows: [flows.md](./flows.md)

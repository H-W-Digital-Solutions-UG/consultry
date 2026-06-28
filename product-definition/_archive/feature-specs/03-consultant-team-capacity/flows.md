# Flows — Consultant, Team & Capacity

> **⚠️ ARCHIVIERT (12.06.2026 — [MVP-Foundation-Decisions v1.0](../../Consultry-MVP-Foundation-Decisions-v1.0.md), T1).** Diese Spec gehört zur „Win-and-Deliver"-Generation (Gen A) und ist **kein MVP-Scope**. Verbindlich: [MVP-PRD v1.0](../../Consultry-MVP-PRD-v1.0.md) (Acquisition-to-Bid) + Foundation-Decisions. Persona-/Outcome-Tabellen dürfen als UX-Input wiederverwendet werden (Salvage, Foundation-Decisions §4). Nicht als Quelle der Wahrheit verwenden.

**Modul-ID:** `03-consultant-team-capacity`
**Bezug:** [spec.md](./spec.md)

§A UI-Flows · §B AI-Flows · §C Conversations · §D State-Machines · §E Edge Cases · §F Telemetrie

---

## §A — Konkrete UI-Flows

### F1 — Onboarding eines neuen Beraters (Martina-driven)

**Akteur:** Martina (Office Managerin). Auslöser: Lisa hat heute Eintritt.

| # | Step | Akteur | UI-Ort | Operator | Output |
|---|---|---|---|---|---|
| 1 | Martina öffnet Capacity-Hub → „+ Consultant" | Martina | Capacity-Hub | — | Onboarding-Wizard |
| 2 | Pflicht-Stammdaten ausfüllen (Name, EMail, employee_no, Eintritt, Practice, Seniorität, employment_kind) | Martina | Wizard Step 1 | — | Consultant.id erzeugt |
| 3 | Sell-Rate-Default aus Practice geerbt, optional Override | Martina | Wizard Step 2 | — | SellRate geerbt |
| 4 | Cost-Rate eingeben (Admin-only Feld) | Martina | Wizard Step 3 | — | CostRate v1 |
| 5 | Initiale Availability: 100 % ab Eintrittsdatum | System | Wizard Step 4 (default) | — | Availability-Window |
| 6 | „Profil erstellt — Berater erhält Self-Service-Onboarding-Mail" | System | Toast | — | Mail mit Login-Link |
| 7 | Lisa logged sich ein, erhält Self-Service-Onboarding-Aufgaben | Lisa | Mein-Profil | — | Onboarding-Checklist |

**Self-Service-Checklist für Lisa (gezeigt nach erstem Login):**
```
☐ Sprachen ergänzen
☐ Ausbildungs-Trail (mindestens letzte 2 Stationen)
☐ Karriere vor Eintritt (falls relevant — optional)
☐ Initiale Skill-Liste (mindestens 5 Skills)
☐ Profilbild hochladen (optional)
☐ LinkedIn-URL (optional)
```

---

### F2 — Skill-Erfassung Self-Service (Berater-driven)

**Akteur:** Lisa.

| # | Step | Akteur | UI-Ort | Operator | Output |
|---|---|---|---|---|---|
| 1 | Lisa öffnet Mein-Profil → Skills → „+ Skill" | Lisa | Skills-Tab | — | Skill-Picker-Modal |
| 2 | Tippt „AWS" — Auto-Suggest aus Taxonomie zeigt Treffer | Lisa | Picker | `Suggest` (Synonyms-Match) | Vorschlags-Liste |
| 3 | Wählt „AWS — Cloud Services" | Lisa | Picker | — | SkillTaxonomyEntry referenziert |
| 4 | Wählt Level (Proficient), gibt last_used (2024-Q4) | Lisa | Modal | — | Skill mit level + last_used |
| 5 | Source-of-Claim Default = SelfDeclared. Lisa klickt „Peer-Verifizierung anfragen → Stefan" | Lisa | Modal | — | Approval-Request an Stefan |
| 6 | Skill gespeichert mit Source=SelfDeclared, pending Peer-Verification-Flag | System | — | — | Skill aktiv mit Marker |
| 7 | Stefan kriegt Notification, öffnet Verification-View | Stefan | Notifications | — | Verification-Modal |
| 8 | Stefan kennt Lisa von Heller-Projekt 2024, bestätigt mit Begründung | Stefan | Modal | — | Skill.source_of_claim=PeerVerified |
| 9 | Audit-Log: Verification-Event mit beiden Beteiligten | System | Audit | — | AuditEntry |

**Wireframe-Hinweis (Skill-Picker-Modal):**
```
┌───────────────────────────────────────────────────────────────────┐
│ + Skill hinzufügen                                                 │
├───────────────────────────────────────────────────────────────────┤
│ Skill suchen:                                                      │
│ ┌─────────────────────────────────────────────────────────────┐  │
│ │ AWS_                                                          │  │
│ └─────────────────────────────────────────────────────────────┘  │
│                                                                    │
│ Vorschläge:                                                        │
│  ► AWS — Cloud Services      (Category: Technology > Cloud)        │
│  ► AWS Solutions Architecture (Sub-skill of AWS)                   │
│  ► AWS Lambda                 (Sub-skill of AWS)                   │
│                                                                    │
│ Kein Match? → Skill vorschlagen                                    │
├───────────────────────────────────────────────────────────────────┤
│ Level:           ○ Aware  ○ Practiced  ● Proficient  ○ Expert      │
│ Last used:       [2024-Q4 ▾]                                       │
│ Source:          [Self Declared] → [Peer-Verify anfragen ▾ Stefan] │
│ Notes:           [optional context für die Verifizierung]          │
│                                                                    │
│                              [Abbrechen]  [Hinzufügen]             │
└───────────────────────────────────────────────────────────────────┘
```

---

### F3 — Project-Experience auto-erzeugt aus Allocation

**Auslöser:** Allocation (Modul 5) setzt ein Projekt auf Stage `Delivered`.

| # | Step | Notes |
|---|---|---|
| 1 | Modul 5: Projekt-Schluss-Event | Event-Stream |
| 2 | Capacity empfängt: alle Allocated-Berater bekommen ProjectExperience-Vorschlag | Auto-generated mit Default-Visibility=Public |
| 3 | Vorschlag landet in „Mein Profil → Project-Experience → Review (1)" | Inbox-Element |
| 4 | Berater öffnet, ergänzt achievements-Freitext, prüft Methodology-Tags | Self-Service |
| 5 | „Speichern" → ProjectExperience aktiviert | Erscheint in CVs |

**Default-Vorschlag enthält:** project_id, company, role (aus Allocation), start, end, methodologies_used (aus Project Definition), skills_applied (Pre-Selection aus Berater's Skill-Liste mit Methodology-Overlap).

---

### F4 — Tailored-CV-Trigger aus Modul 2

**Akteur:** Modul 2 ruft Capacity ab.

| # | Step | Notes |
|---|---|---|
| 1 | Modul 2: Katrin klickt „Tailored CV generieren" für Berater X | Cross-Module-Call |
| 2 | Capacity liefert: Public + nicht-AnonymizedForCV ProjectExperience, Skills mit Level≥Proficient die zu Engagement Brief matchen, Certifications | Read-only Output |
| 3 | PII-Routing-Check: ist Output für TailoredCV-Verwendung? → Pflicht EU-Modell-Routing | Pre-Generation-Check |
| 4 | Modul 2 macht den eigentlichen Draft mit `Draft`-Operator | Modul-2-Job |
| 5 | Berater-Profil bleibt unverändert; nur die Daten werden zugriffsfreigegeben | Read-only |

**Wichtig:** Capacity bestimmt **was sichtbar gemacht werden darf** (visibility); Modul 2 bestimmt **wie es formuliert wird**.

---

### F5 — Availability-Eintrag (Urlaub)

| # | Step | Akteur | UI-Ort | Operator | Output |
|---|---|---|---|---|---|
| 1 | Lisa plant Urlaub 30.06.–07.07. | Lisa | Mein-Profil · Verfügbarkeit | — | — |
| 2 | „+ Window" → wählt Reason=Leave, fte_pct=-100, Datum | Lisa | Modal | — | Availability-Window |
| 3 | System prüft: gibt es bestehende Allocations? | System | Backend | — | — |
| 3a | Wenn nein: gespeichert, fertig | System | — | — | Window aktiv |
| 3b | Wenn ja: Conflict-Warnung + Eskalation | System | UI-Warning + Mail an PL | — | ConflictNotification |
| 4 | Bei Conflict: Allocation-Owner (PL) entscheidet — Urlaub trotzdem (Re-Staffing) oder Verschiebung des Urlaubs | PL | Allocation-View | — | Entscheidung dokumentiert |

---

### F6 — Cost-Rate-Update (Gehaltserhöhung)

| # | Step | Akteur | UI-Ort | Operator | Output |
|---|---|---|---|---|---|
| 1 | Finance kriegt Mail: Lisa hat zum 01.07. Gehaltserhöhung | Finance | Outlook | — | Manueller Trigger |
| 2 | Finance öffnet Capacity → Lisa → Cost-Rate-Tab | Finance | Cost-Rate-Tab | — | Versionsiertes Display |
| 3 | „+ Neue Rate" → effective_from = 2026-07-01, neue Stunden-Cost-Rate | Finance | Modal | — | CostRate v2 |
| 4 | Speichern → Margen-Rechnungen in Modul 6 (Billing) erhalten neuen Wert ab Stichtag | System | Backend | — | Cross-Module-Update |
| 5 | Audit-Log: Cost-Rate-Change mit Akteur, Datum, alter/neuer Wert | System | Audit | — | AuditEntry |

---

### F7 — Skill-Decay-Reaktivierung

**Auslöser:** Lisa öffnet ihr Profil, sieht 3 Skills als „verblasst" (last_used >24 Monate).

| # | Step | Notes |
|---|---|---|
| 1 | Lisa klickt auf verblassten Skill „Scala-Programmierung" | UI: Decay-Tooltip |
| 2 | Pop-up: „Letztes Mal eingesetzt 2023-Q3. Skill behalten, aktualisieren, oder entfernen?" | 3-Optionen |
| 3 | Lisa wählt „Aktualisieren" → setzt last_used auf 2026-Q2 | Skill-Refresh |
| 4 | UI fragt: „Hast du das Skill kürzlich projektrelevant eingesetzt? Verlinke ProjectExperience" | Optional |
| 5 | Lisa verlinkt ProjectExperience „Heller-Migration 2026-Q2" | Source-Upgrade |
| 6 | Skill bleibt aktiv, source_of_claim wechselt von SelfDeclared zu ProjectAttested | — |

---

### F8 — Berater verlässt die Beratung

| # | Step | Akteur | Notes |
|---|---|---|---|
| 1 | Martina öffnet Lisa's Profil → „Austritt erfassen" | Martina | Action verfügbar nur für Office-Rolle |
| 2 | Wählt end_date, Austrittsgrund (intern), Status → Notice (mit Kündigungsfrist) | Martina | Pflichtfelder |
| 3 | System markiert Lisa als „Notice" | System | Status-Übergang |
| 4 | Allocation-Modul prüft: hat Lisa offene Allocations nach end_date? | System | Auto-Check |
| 5 | Falls ja: alle PLs der betroffenen Projekte werden benachrichtigt | System | Re-Staffing-Trigger |
| 6 | Zum end_date: Status wechselt zu ExLeft, Lisa verliert Login-Zugang | System | Auto-Übergang |
| 7 | Karenzzeit 6 Monate: Profil bleibt im Read-only für CV-Referenzen in archivierten Verträgen | System | DSGVO-konform |
| 8 | Nach 6 Monaten: Status → ExArchived; Profil-Daten werden pseudonymisiert außer vertragsrelevanter Project-Experience | System | Auto-Übergang |

---

### F9 — Peer-Verification rejected

| # | Step | Notes |
|---|---|---|
| 1 | Stefan reviewt Skill-Verification-Anfrage von Lisa für „React-Programmierung Expert" | Inbox |
| 2 | Stefan kennt Lisa's Frontend-Erfahrung — würdigt sie als „Proficient" nicht „Expert" | Bewertung |
| 3 | „Ablehnen mit Vorschlag" → Stefan setzt Level-Vorschlag auf Proficient + Kommentar | Modal |
| 4 | Lisa kriegt Notification mit Stefans Begründung | Inbox |
| 5 | Lisa entscheidet: (a) annehmen → Skill auf Proficient + PeerVerified, (b) ablehnen → Skill bleibt Expert mit SelfDeclared, neuer Peer-Verifier kann angefragt werden | Self-Service |

---

### F10 — Bulk-Pflege durch Office (Outliers)

**Anti-Pattern-Wächter:** wenn Martina versucht, Skills/Career-Trail für alle Berater zentral zu pflegen, blockiert UI dies. Office-Bulk-Editing ist nur erlaubt für:
- Eintritte/Austritte
- Cost-Rate (sensible Daten)
- Sell-Rate-Defaults pro Practice
- Pflicht-Trainings (als Bulk-Availability-Window)

Wenn Martina via API oder UI versucht Skills im Bulk zu setzen, kommt Block + Erläuterung: „Skill-Pflege ist Self-Service. Bitte Berater anstossen."

---

### F11 — Cross-Practice-Move

**Trigger:** Stefan wechselt von „Sourcing-Practice" zu „IT-Strategy-Practice" zum 01.09.

| # | Step | Notes |
|---|---|---|
| 1 | Martina aktualisiert Practice-Feld am Stefan-Profil | Mit Effective-Date |
| 2 | Sell-Rate-Default re-evaluiert: erbt jetzt IT-Strategy-Default ab Stichtag | History |
| 3 | Practice-Lead-Statistiken werden aktualisiert (Stefan zählt nicht mehr in Sourcing) | Auto-Update |
| 4 | Bestehende offene Opportunities, wo Stefan in der Sourcing-Practice gestafft war: Re-Tagging-Entscheidung — Stefan bleibt persönlich gestafft, Practice-Tag der Opp bleibt Sourcing | Cross-Module-Logik |

---

### F12 — Skill-Taxonomy-Suggestion durch Berater

**Auslöser:** Lisa sucht Skill „LangChain-Operator-Library" findet keinen Treffer.

| # | Step | Notes |
|---|---|---|
| 1 | Lisa klickt „Skill vorschlagen" im Skill-Picker | UI |
| 2 | Modal: Skill-Vorschlags-Form. Auto-Suggest: System schlägt parent_category=AI/ML vor | `Classify`-Operator |
| 3 | Lisa füllt: name_de, name_en, optional Synonyms | Form |
| 4 | „Vorschlagen" → geht in Taxonomy-Backlog | Backlog-Item |
| 5 | Stefan (Taxonomy-Maintainer) sieht Backlog, reviewt | Inbox |
| 6 | Stefan approved → Skill-Eintrag aktiv, Lisa erfährt es per Notification | Mail + In-App |
| 7 | Lisa kann jetzt den Skill in ihrem Profil zuweisen | UI |

---

### F13 — Forecasting-Vorschau (Phase 1b, Stub-Pfad)

Phase 1b. Hier nur skizziert für die Architektur-Klarheit.

```
Capacity berechnet wöchentlich:
  - "wer ist in 4 Wochen frei?" (Pre-Planning)
  - "Skill-Engpass-Risiko" (welche Skills sind in nächsten 90 Tagen unterbesetzt)
  - "Auslastungs-Median über letzte 12 Monate" (PRACTICE-Aggregat, kein Personenbezug)

Output: Forecasting-Dashboard für Thomas / Practice-Leads
   - in BetrVG-Heavy-Mode: nur Practice-Aggregate sichtbar
   - in Standard-Mode: Practice-Aggregate sichtbar; Drilldown auf Berater erfordert konkreten Opportunity-Kontext
```

---

## §B — Abstrakte AI-Flows

### B1 — Capability-Inventar

```
Capacity ist data-zentriert; Operator-Calls sind sekundär.

  Read       : Consultant, Skill, Availability, ProjectExperience, CostRate
  Classify   : Skill-Disambiguation, Methodology→Skill-Map
  Suggest    : Skill-Auto-Complete, Peer-Verifier-Empfehlung
  Summarise  : Knowledge-Authorship-Cluster, Practice-Aggregate

  NICHT in diesem Modul:
  Draft, Plan, Review (alle weitergeleitet an andere Module)
```

### B2 — Intent-Map

```
Intent: "Wer hat Skill X in welchem Level?"
   ├─ Read(Consultant.skill where taxonomy=X)
   ├─ Sort by level desc, source_of_claim desc, last_used desc
   └─ Outcome: ranked list

Intent: "Welche Skills hat unser Team insgesamt?"
   ├─ Read(all skills aggregated by taxonomy)
   ├─ Summarise(coverage, gaps, decay-flags)
   └─ Outcome: Skill-Coverage-Map (für Practice-Lead)

Intent: "Wer ist in KW 28 frei?"
   ├─ Read(Availability windows where window contains KW 28 and reason=Free)
   ├─ Compute(effective fte_pct after overlays)
   └─ Outcome: liste mit verfügbarer fte_pct

Intent: "Was kostet uns Berater X pro Stunde aktuell?"
   ├─ Read(CostRate where current)
   ├─ Visibility-Check (Admin only)
   └─ Outcome: hourly_cost mit Audit-Note

Intent: "Wer hat Methodology M wirklich angewandt?"
   ├─ Read(ProjectExperience.methodologies_used contains M)
   ├─ Cross-check (KnowledgeContribution where asset.methodology=M)
   └─ Outcome: Top-Berater mit Erfahrungstiefe
```

### B3 — Dynamische Pfade

System darf:
- Skill-Match-Score in Modul 2 mit Capacity-Daten und Confidence ausrechnen.
- Verfallene Skills passiv mit Decay-Indikator anzeigen.
- Peer-Verifier vorschlagen basierend auf Cross-Project-Overlap.

System darf nicht:
- Profil ohne Berater-Zustimmung ändern.
- Skill mit Strength „Authority" automatisch vergeben.
- Performance-Statistiken pro Berater an UI exposen.
- Skill-Decay automatisch entfernen.

---

## §C — Conversation Patterns

### C1 — „Wer kann das wirklich?" (Staffing-Vorbereitung)

> **Katrin:** Ich brauche jemanden für ein Sourcing-Strategie-Projekt bei Müller. Wer ist gut darin?
>
> **AI-Workspace:** Drei Berater stark:
> - **Stefan Kraus** — Expert in IT-Sourcing-Strategie, Source: ProjectAttested aus 2 Projekten 2024+2025. Letzter Einsatz vor 6 Wochen. Authored 3 LessonsLearned-Knoten in der Methodologie.
> - **Maximilian Berger** — Proficient, Source: SelfDeclared, last_used vor 18 Monaten — beginnt zu verfallen.
> - **Anna Holz** — Proficient, Source: PeerVerified (Stefan hat verifiziert 2025-09), aber sie ist FullTime allocated in Bauer-Projekt bis 2026-09.
>
> Für die Müller-Anfrage in KW 24–32 ist nur Stefan operativ realistisch. Maximilian hätte Verfügbarkeit, aber Skill-Decay würde ich mit Brief abstimmen. Anna ist blockiert.
>
> Soll ich für Stefan eine Verfügbarkeits-Prüfung in der Allocation machen?
>
> **Katrin:** Ja, und schick Maximilian eine Anfrage zur Skill-Aktualisierung — vielleicht hat er was gemacht, was nicht im System ist.

**Pattern „Skill-Match mit Source und Decay":** nicht nur „kann/kann nicht", sondern *wie sicher* das Wissen ist.

---

### C2 — „Skill-Lücke in der Practice"

> **Thomas:** Wie sieht unsere Skill-Verteilung in der IT-Strategy-Practice aus?
>
> **AI-Workspace:** 14 Berater in der Practice. Skill-Coverage:
> - **Sehr gut** (≥3 Berater mit Proficient+): IT-Sourcing, ERP-Strategie, Carve-Out-Methodologie.
> - **Knapp** (1–2 Berater mit Proficient+): Cloud-Migration, Cybersecurity-Audit.
> - **Lücke** (kein Berater mit Proficient+): KI-Strategie, Data-Governance.
>
> Drei Trends: 22 % der offenen Opportunities in den letzten 6 Monaten betrafen KI-Strategie — also wachsende Nachfrage gegenüber unserer Lücke. Cloud-Migration ist marktweit ein heißes Thema, wir sind dünn besetzt.
>
> Möchtest du, dass ich nach möglichen internen Skill-Up-Kandidaten suche? (Berater mit angrenzenden Skills, die KI-Strategie aufbauen könnten.)
>
> **Thomas:** Aggregat ja. Personen-Vorschläge nur wenn BR zustimmt — wir haben Heavy-Mode.
>
> **AI-Workspace:** Verstanden. Ich generiere die aggregierte Sicht. Personen-spezifische Skill-Up-Empfehlungen brauchen BR-Genehmigung; ich kann ein Anfrage-Template generieren falls hilfreich.

**Pattern „Aggregat zuerst, Personen-Bezug separat":** BetrVG-Heavy-Mode wirkt ergonomisch, nicht hinderlich.

---

### C3 — „Skill-Verifizierung"

> **Stefan:** Lisa hat mich gebeten, ihren React-Skill zu verifizieren. Sie behauptet Expert.
>
> **AI-Workspace:** Aus ihrer ProjectExperience: 2 Projekte mit React in den letzten 18 Monaten (Heller-Frontend-Refactoring, Bauer-Admin-Portal). In beiden war sie Lead-Frontend. Achievements zeigen State-Management-Migration und Performance-Optimization-Cases.
>
> Außerdem: Du selbst warst PL auf beiden Projekten — du hast direkten Einblick in ihre Arbeit.
>
> Möchtest du das verifizieren auf Expert, oder hast du Bedenken?
>
> **Stefan:** Sie ist sehr gut, aber Expert ist eine starke Aussage. Ich würde Proficient verifizieren mit Hinweis dass sie sich an Expert annähert.
>
> **AI-Workspace:** Vorschlag formuliert: „Ich bestätige Proficient-Level. Lisa zeigt starke Lead-Capability in unseren Projekten; für Expert-Level wäre nach meiner Einschätzung noch ein weiteres Projekt mit komplexer Architektur-Verantwortung oder eine relevante Zertifizierung wünschenswert." — schicke ich an Lisa?
>
> **Stefan:** Ja.

**Pattern „Verifikation mit Begründung":** Skill-Levels sind keine Geschmacksfrage; Begründungen werden Teil des Audit-Trails.

---

### C4 — „Cost-Insight für PR" (Admin-Pfad)

> **Thomas:** Was kostet uns das Müller-Staffing? Drei Personen 6 Wochen.
>
> **AI-Workspace:** Stefan (Senior), Lisa (Mid), Maximilian (Mid). 6 Wochen × 5 PT × 8 h = 240 Personen-Stunden pro Berater.
>
> Cost-Berechnung (intern):
> - Stefan: 240h × 130 €/h = 31.2k
> - Lisa: 240h × 90 €/h = 21.6k
> - Maximilian: 240h × 90 €/h = 21.6k
> Gesamt: 74.4k Cost.
>
> Sell-Side: 240h × Sell-Rate je Senioritätsstufe = 142k.
>
> Marge: 68k absolut, 47 % relativ. Das ist über unserem Standard-Target (38 %).
>
> Sichtbarkeit dieser Berechnung: nur du und Finance.

**Pattern „Cost-Daten Admin-only, mit klarer Sichtbarkeits-Erinnerung":** UI macht Sensibilität explizit.

---

### C5 — „Skill-Update-Erinnerung" (Lisa-driven)

> **Lisa:** Ich habe seit 4 Monaten meine Skills nicht angepackt — sollte ich?
>
> **AI-Workspace:** Vorschlag: drei deiner Skills sind seit dem letzten Update aktiviert worden:
> - **AWS Lambda** — du warst auf Bauer-Cloud-Migration, last_used von 2024-Q3 auf 2026-Q2 aktualisierbar.
> - **Python-Datenanalyse** — auf demselben Projekt eingesetzt, könnte als neuer Skill ergänzt werden (taxonomy-Eintrag existiert).
> - **Stakeholder-Workshops** — du hast zwei Workshops bei Müller geleitet — möglicher Soft-Skill „Workshop-Facilitation" (taxonomy: Methodology > Facilitation).
>
> Möchtest du die drei Updates direkt einpflegen, oder einzeln durchgehen?
>
> **Lisa:** Direkt alle drei.
>
> **AI-Workspace:** Erledigt. AWS Lambda und Python sind aktualisiert (Source-Upgrade zu ProjectAttested). Workshop-Facilitation als neuer Skill mit Level Proficient und SelfDeclared eingerichtet; willst du eine Peer-Verifizierung von Katrin anfragen, sie hat mit dir die Workshops vorbereitet?
>
> **Lisa:** Ja.

**Pattern „Skill-Lifecycle low-friction":** Berater sehen Vorschläge, akzeptieren mit einem Klick. Nicht „du musst dich pflegen".

---

## §D — State-Übergänge

### D1 — `Consultant.status`

```
Active ──[Kündigung gemeldet, Frist gesetzt]──▶ Notice
   │                                              │
   │ [unbezahlter Urlaub, Sabbatical, Elternzeit] │ [Austritt erreicht]
   ▼                                              ▼
OnLeave ──[Rückkehr]──▶ Active                  ExLeft
                                                  │
                                                  │ [6 Monate Karenz]
                                                  ▼
                                                ExArchived
                                                  │
                                                  │ [10 Jahre nach letztem Vertrag]
                                                  ▼
                                                (gelöscht)
```

### D2 — `Skill.source_of_claim`

```
SelfDeclared ──[Peer bestätigt]──▶ PeerVerified
     │                                  │
     │ [ProjectExperience verlinkt]     │ [Certification verlinkt]
     ▼                                  ▼
ProjectAttested ◀──────────────── CertificationBacked
```

Upgrade-Pfade sind monoton — `Source` kann nie zu schwächerem Tier zurück.

### D3 — `Availability.reason` Lifecycle

```
Free ──[Allocation in Modul 5 angelegt]──▶ Allocated
  │                                            │
  │ [Reservierung ohne Allocation]             │ [Allocation aufgehoben]
  ▼                                            ▼
Reserved ──[Allocation entsteht]──▶ Allocated  Free
```

`Leave` und `Training` sind separate Klassen, nicht Lifecycle-Übergänge.

### D4 — `Certification` Lifecycle

```
Valid ──[Renewal vor expires_at]──▶ Valid (neuer expires_at)
   │
   │ [expires_at erreicht ohne Renewal]
   ▼
Expired (im UI: rot, nicht aus Skills entfernt — Decay-Indikator)
   │
   │ [Renewal nach Verfall]
   ▼
Valid (mit neuem Datum, audit-trail bewahrt)
```

---

## §E — Edge Cases

| Fall | Verhalten |
|---|---|
| Berater hat Skill SelfDeclared, aber System detektiert in ProjectExperience nirgends Anwendung | UI-Hinweis im Profil: „Quelle stärken — Projekt verlinken oder verifizieren lassen" |
| Cost-Rate-Eintrag mit Datum in der Vergangenheit (Backdating) | Erlaubt, aber Audit-Flag „Backdated by X Tagen" |
| Berater pflegt selbst Cost-Rate (kein Self-Service-Recht) | UI blockt, zeigt klar „dieses Feld pflegt Finance" |
| Skill-Taxonomy-Eintrag wird deprecated | Bestehende Berater-Skill-Tags bleiben (mit Deprecated-Marker); neue Zuweisung blockiert |
| Availability-Konflikt (Allocation + neuer Urlaubs-Wunsch) | Eskalation an PL, Auto-Lösung nicht erlaubt |
| Berater versucht, ProjectExperience aus internem Projekt mit Vertraulichkeits-Klausel als Public zu setzen | UI markiert Compliance-Risk-Flag, Office wird benachrichtigt |
| Peer-Verification angefragt bei nicht-existierender Skill-Overlap | UI fragt nach: „Wieso glaubst du dass X bewerten kann?" — Peer wird angeschrieben mit Kontext |
| Berater hat keine ProjectExperience (Neueinstieg) — wie wird Skill-Source verbessert? | Bootstrap: Office kann initial Skills als „from-Bewerbungsunterlagen" markieren mit Source=SelfDeclared + Note |
| CV-Trail-Stationen vor 30+ Jahren | UI kollabiert ältere Stationen visuell aber speichert sie |
| Berater wechselt Email-Adresse | History bleibt; alte Mail im Audit-Trail, neue als primary |
| Berater hat zwei Practice-Zugehörigkeiten (Matrix) | Modell erlaubt nur ein primary; secondary via Practice-Membership-Liste (Phase 1b) |
| Skill-Strength „Authority" wird beantragt aber keine sichtbare Substanz | Peer-Verification-Anfrage muss Begründung enthalten; Authority-Level nur durch MP approval |
| Berater verstirbt | Status → ExLeft mit special_reason; Office handhabt Daten-Erbschaft pietätvoll |
| Bulk-Eingriff durch Office in Self-Service-Felder (notfalls) | Möglich mit MP-Override + Audit-Log; UI mahnt „dieser Eingriff überschreibt Berater-Hoheit" |
| Skill-Taxonomy-Reorganisation (z. B. „AWS" wird Sub-Skill von „Public Cloud") | Migration mit Daten-Transfer-Skript; Alt-Pfad bleibt als Synonym |
| Cost-Rate eines bereits abgerechneten Projekts wird nachträglich geändert | Verboten — Rate-Lock für Zeiträume, in denen Billing erfolgt ist |

---

## §F — Telemetrie

| Metrik | Granularität | Aggregation |
|---|---|---|
| Self-Service-Update-Frequenz | Pro Berater + Aggregat | Median, 30/60/90-Day-Rolling |
| Skill-Source-Verteilung | Practice-Aggregat | % SelfDeclared / PeerVerified / ProjectAttested / CertificationBacked |
| Skill-Decay-Anteil | Practice-Aggregat | % der aktiven Skills mit last_used >24m |
| Tailored-CV-Send-Rate (in Modul 2 verwendet) | Pro Berater | Counter |
| Peer-Verification-Pendings | Aggregat | Median Bearbeitungszeit |
| Availability-Coverage | Practice-Aggregat | % Berater mit aktuellen Windows |
| Cost-Rate-Versionen pro Jahr | Pro Berater | Counter, Audit-Material |
| Practice-Skill-Coverage-Map | Practice | Tags, Lücken |
| Skill-Match-Confidence in Modul 2 | Aggregat | Median, p90 |

---

## §G — Phase-1b-Ergänzungen

- **Implicit Skill Inference:** ProjectExperience → automatische Skill-Tag-Vorschläge mit Approval-Gate.
- **Forecasting:** Capacity-Auslastungs-Prognosen.
- **HR-System-Integration:** Personio / Workday / SAP-SuccessFactors als Stammdaten-Master (Capacity konsumiert Eintritt/Austritt/Personalnummer).
- **Skill-Growth-Empfehlungen** (in BetrVG-Heavy: opt-in pro Berater).
- **Practice-Knowledge-Leadership-Reporting:** wer treibt welche Wissens-Cluster.

---

## §H — Verweise

- [spec.md](./spec.md)
- Cross-Cutting: [integration-flows.md](../_cross-cutting/integration-flows.md), [symbiosis-features.md](../_cross-cutting/symbiosis-features.md)
- Schwester-Module: [01-account-growth/flows.md](../01-account-growth/flows.md), [02-opportunity-proposal-contract/flows.md](../02-opportunity-proposal-contract/flows.md), [04-knowledge-reuse/flows.md](../04-knowledge-reuse/flows.md)

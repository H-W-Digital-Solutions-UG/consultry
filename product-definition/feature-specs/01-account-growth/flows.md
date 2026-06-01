# Flows — Account Growth

**Modul-ID:** `01-account-growth`
**Bezug:** [spec.md](./spec.md), [Roadmap §3.1 MVP-Loop](../../business-definitions/Consultry-Roadmap-v1.0-MVP-and-Phasing.md)

Drei Sichten:
- §A Konkrete UI-Flows (mit Wireframe-Sketches an Schlüsselmomenten)
- §B Abstrakte AI-Flows (Intent → Capability → Outcome)
- §C Conversation Patterns
- §D State-Machines
- §E Edge Cases
- §F Telemetrie

---

## §A — Konkrete UI-Flows

### F1 — Trigger erfassen → Opportunity-Übergabe (Happy Path)

**Akteur:** Katrin (BD-Leiterin). Auslöser: Stefan hat im Anruf mit Frau Schulz (CFO Müller-AG) gehört „wir müssen unser IT-Sourcing neu aufstellen".

| # | Step | Akteur | UI-Ort | Operator | Output | Notes |
|---|---|---|---|---|---|---|
| 1 | Stefan öffnet Müller-AG-Account, klickt „+ Trigger" | Stefan | Account-Detail · Quick Actions | — | Trigger-Modal | Modal mit Stakeholder-Auto-Complete |
| 2 | Wählt Frau Schulz als Stakeholder, schreibt 2 Sätze Kontext | Stefan | Trigger-Modal | — | Trigger.kind=Internal | Datum + Source = Call |
| 3 | „Trigger speichern" | Stefan | Trigger-Modal | `Classify` (Hintergrund) | Trigger.stage=New + AI-Suggestion zur Klassifizierung | Stefan kriegt Toast „Trigger gespeichert. Katrin wurde benachrichtigt." |
| 4 | Katrin sieht Notification + öffnet Trigger-Inbox | Katrin | Notifications → Trigger-Inbox | — | — | Inbox-Sortierung: New zuerst |
| 5 | Katrin klickt Trigger, sieht Detail + AI-Vorschlag | Katrin | Trigger-Detail | — | AI schlägt vor: IT-Sourcing-Strategie | Konfidenz, Quellen, Warm-Paths sichtbar |
| 6 | Katrin sieht Warm-Path: „Stefan kennt Frau Schulz aus TU München" | Katrin | Trigger-Detail · Warm-Path-Sidebar | `Suggest` | Vorschlag-Pop-up: Lead = Stefan | Beziehungs-Karte einklick-bar |
| 7 | „Trigger qualifizieren" | Katrin | Action-Bar | — | Trigger.stage=Qualifying | Wechsel zu Qualifikations-Form |
| 8 | Katrin füllt: Themen-Anker (IT-Sourcing), Urgency (mittel), grobe Dimension (60–120k) | Katrin | Qualifizierungs-Form | — | Trigger.qualification | — |
| 9 | „Trigger als Opportunity übergeben" | Katrin | Action-Bar | — | Opportunity (in Modul 2) erstellt | Übergabe-Payload mit Stakeholder, Source-Bindings, Warm-Path |
| 10 | Trigger.stage=ConvertedToOpportunity, Auto-Navigation zu Opp-Workspace | System | Routing | — | Modul-2-Loop startet | Stefan kriegt Notification „du wurdest als Lead vorgeschlagen" |

**Audit:** alle Steps 1–10 mit Akteur, Zeitstempel, Operator-Version persistiert.

---

### F2 — Inferred Trigger aus Account-Pattern

**Auslöser:** System detektiert in nightly-Job: Frau Schulz (CFO Müller) hat in LinkedIn ihre Position aktualisiert auf „CFO & Head of IT".

| # | Step | Akteur | UI-Ort | Operator | Output |
|---|---|---|---|---|---|
| 1 | Nightly-Job liest LinkedIn-Delta (consent-gated) | System | Backend | `Classify` | Pattern erkannt |
| 2 | System erzeugt Inferred-Trigger mit Confidence 0.6 | System | Backend | `Suggest` | Trigger.kind=Inferred, stage=New |
| 3 | Katrin sieht in Trigger-Inbox „Inferred"-Badge | Katrin | Trigger-Inbox | — | — |
| 4 | Klickt; sieht Begründung + Source-Binding (LinkedIn-Delta) | Katrin | Trigger-Detail | — | — |
| 5 | Katrin entscheidet: ist relevant → qualifiziert → wie F1 ab Step 8. ODER: nicht relevant → verwirft mit Begründung | Katrin | Action-Bar | — | Trigger.stage = Qualifying ODER Dismissed |
| 6 | Bei Dismissed: System speichert „Pattern X mit Confidence 0.6 war false-positive für Account Y" → speist ins Pattern-Lernen ein (Phase 1b) | System | Audit | — | LessonsLearned-Knoten |

**Wireframe-Sketch (Inferred-Trigger-Card):**
```
┌──────────────────────────────────────────────────────────────────────┐
│ ⚡ Inferred Trigger · Confidence ●●●○○ (0.62)                          │
│ Müller-AG · Frau Schulz hat Rolle erweitert (CFO → CFO+IT)           │
├──────────────────────────────────────────────────────────────────────┤
│ Quellen:                                                              │
│  · LinkedIn-Profile-Update 2026-05-25 (consent-gated, opt-in Lisa)    │
│  · Account-Pattern „Erweiterte Verantwortung → IT-Audit-Bedarf"      │
│                                                                       │
│ AI-Vorschlag:                                                         │
│  Themen-Anker: IT-Audit / Sourcing-Strategie                          │
│  Vorgeschlagener Lead: Stefan (Warm Path via TU München)              │
│  Schätzung Volumen: 60k–120k                                          │
│                                                                       │
│ [Qualifizieren]  [Verwerfen]  [Mehr Kontext]                          │
└──────────────────────────────────────────────────────────────────────┘
```

---

### F3 — Stakeholder anlegen mit CV-Trail

**Akteur:** Lisa kommt aus einem Workshop bei Heller-Gruppe, hat neuen Ansprechpartner kennengelernt.

| # | Step | Akteur | UI-Ort | Operator | Output |
|---|---|---|---|---|---|
| 1 | Lisa öffnet Heller-Account → Stakeholder-Tab → „+ Stakeholder" | Lisa | Stakeholder-Liste | — | Stakeholder-Modal |
| 2 | Tippt „Anna Bauer" — System sucht über alle Accounts hinweg | Lisa | Modal Auto-Complete | `Read` | Keine Treffer (neu) |
| 3 | Vervollständigt: Titel CFO, Mail, Telefon | Lisa | Modal Form | — | — |
| 4 | „LinkedIn-URL einfügen" → Lisa fügt URL ein | Lisa | Modal | `Read` (LinkedIn-Konnektor, Phase 1b im MVP optional) | Pre-fill CV-Trail |
| 5 | Im MVP: Lisa füllt CV-Trail manuell (Karriere + Studium aus LinkedIn-Profil abschreiben) | Lisa | Modal CV-Sub-Form | — | CareerTrailEntry[] + EducationEntry[] |
| 6 | „Speichern" | Lisa | Modal | `Suggest` (Hintergrund) | Stakeholder.id erzeugt; System detektiert WarmPaths |
| 7 | Toast: „2 mögliche Warm-Paths erkannt — Stefan (TU München), Lisa (Heller 2017)" | System | Toast + Sidebar | — | WarmPathEdge-Kandidaten |
| 8 | Lisa ratifiziert beide Edges („Ich bestätige") | Lisa | Sidebar | — | WarmPathEdge.consent_visibility=Internal |

---

### F4 — Account-Briefing vor Termin

**Akteur:** Katrin hat in 30 min Termin mit Müller-AG, will Briefing.

| # | Step | Akteur | UI-Ort | Operator | Output |
|---|---|---|---|---|---|
| 1 | Katrin öffnet Müller-AG-Account, klickt „Briefing" | Katrin | Account-Header · Quick Actions | `Summarise` | Briefing-Generierung läuft (loading ~3 s) |
| 2 | Briefing erscheint im Side-Panel mit 5 Sektionen | Katrin | Side-Panel | — | Briefing-Markdown mit Source-Bindings |
| 3 | Klick auf Source-Binding → zeigt Quelle in zweiter Spalte | Katrin | Side-Panel · Reveal-Bindings | — | Quell-Excerpt |
| 4 | Klick „Drucken" oder „Export PDF" oder „In Workspace einbetten" | Katrin | Action-Bar | — | PDF / Workspace-Note |
| 5 | Audit-Log: Briefing-Generation-Event mit Source-Bindings | System | Audit | — | AuditEntry |

**Wireframe-Sketch (Briefing-Side-Panel):**
```
┌───────────────────────────────────────────────────────────────────────┐
│ Briefing · Müller-AG · für 14:30 Termin · 2026-05-28                  │
│                                          [PDF] [Workspace] [Refresh]  │
├───────────────────────────────────────────────────────────────────────┤
│ Stand der Beziehung                                                    │
│ Strategic-Tier, seit 2019 Kunde. 3 Verträge aktiv. Letzter NPS 8/10.  │
│ Pipeline-Volumen €420k offen.    [▸ Quellen]                          │
│                                                                        │
│ Aktive Themen                                                          │
│ · Sourcing-Strategie (Opportunity, Stage Briefed, Wert 106k)           │
│ · ERP-Datenmigration (Projekt aktiv, Health gelb, MS3 verzögert 1 Wo)  │
│   [▸ Quellen]                                                          │
│                                                                        │
│ Stakeholder-Updates                                                    │
│ · Frau Schulz: Verantwortung erweitert (CFO+IT seit 25.05.)            │
│ · Herr Becker (CTO) verlässt zum 30.06. (LinkedIn-Hinweis Stefan)      │
│   [▸ Quellen]                                                          │
│                                                                        │
│ Warnsignale                                                            │
│ · Letzte Rechnung 14 Tage überfällig (Commercial Control)             │
│ · LessonsLearned 2024: Kunde war preissensitiv bei Premium-Pricing    │
│   [▸ Quellen]                                                          │
│                                                                        │
│ Empfohlene Gesprächspunkte                                             │
│ · Restrukturierungs-Trigger ansprechen (Quelle: Anruf Stefan 22.05.)   │
│ · Premium-Variante mit Begründung statt Preis-Vergleich               │
│ · Frau Schulz' neue IT-Rolle als Anker                                 │
└───────────────────────────────────────────────────────────────────────┘
```

---

### F5 — DSAR-Workflow (Auskunft)

**Auslöser:** Frau Schulz fordert per Mail Auskunft über alle bei der Beratung über sie gespeicherten Daten.

| # | Step | Akteur | UI-Ort | Operator | Output |
|---|---|---|---|---|---|
| 1 | Mail kommt bei Martina (Office) / DPO an | Martina | Outlook | — | Manuelle Auslösung |
| 2 | Martina öffnet Consultry → Compliance-Hub → „+ DSAR" | Martina | Compliance-Hub | — | DSAR-Modal |
| 3 | Wählt Stakeholder Frau Schulz, gibt Anfrage-Typ (Auskunft) | Martina | Modal | — | DSAREvent.kind=Information |
| 4 | „Datenexport generieren" → System sammelt alle Records | System | Backend | `Read` (über Module hinweg) | DSAR-Bundle |
| 5 | Bundle-Vorschau: Stakeholder-Record, ContactPoints, AccountHistory-Erwähnungen, WarmPath-Edges, Audit-Aufrufe | Martina | DSAR-View | — | — |
| 6 | Martina prüft auf nicht-zu-teilende Inhalte (interne Notes) — markiert für Redaction | Martina | DSAR-View · Redaction | — | redacted_bundle |
| 7 | „Final Bundle exportieren (PDF)" → versandfertig | Martina | Action-Bar | — | DSAR-PDF |
| 8 | Versand erfolgt extern (Mail), DSAR-Event als „Completed" markiert mit Timestamp | Martina | DSAR-View | — | DSAREvent.completed_at |
| 9 | Audit-Log: alle Touches in DSAR-Workflow + Final-Export persistiert | System | Audit | — | AuditEntry |

---

### F6 — DSAR-Workflow (Löschung)

Wie F5, aber Anfrage-Typ = Erasure. Zusätzlich:

| # | Step | Notes |
|---|---|---|
| 6a | System klassifiziert Records: vertragsrelevant vs nicht-vertragsrelevant | Vertragsrelevant: in signiertem Vertrag namentlich genannt — pseudonymisieren statt löschen |
| 6b | UI zeigt Übersicht: „X löschbar, Y pseudonymisierbar (vertragsbedingt), Z bleibt (gesetzliche Aufbewahrungspflicht z. B. Rechnungs-Anhang)" | Pflicht-Erklär-Text für Frau Schulz wird auto-generiert (`Draft`) |
| 6c | Martina approvet Pseudonymisierungs-Vorschlag | Approval-Gate; einmal ausgeführt nicht rückgängig |
| 6d | System führt Pseudonymisierung aus | Pseudonym statt Klarname; FK-Integrität bleibt |
| 6e | Audit-Log: Löschungen + Pseudonymisierungen werden mit Vorher-Hash und Nachher-Hash protokolliert (nicht Inhalt!) | DSGVO-konform |

---

### F7 — Won-Event aus Modul 2 → AccountHistory

| # | Step | Notes |
|---|---|---|
| 1 | Modul 2: Opportunity erreicht Stage `Won` (Vertrag signiert) | Modul-2-State-Übergang |
| 2 | Modul 2 sendet Event `OpportunityWon` mit Payload (opp_id, contract_id, value, signed_at) | Event-Stream |
| 3 | Account Growth empfängt → erzeugt AccountHistory-Eintrag entry_type=Won | Append-only |
| 4 | Account-Cockpit-Stats werden aktualisiert (Won-Counter, Pipeline-Volume) | Real-time |
| 5 | Account-Briefing-Cache wird invalidiert (nächstes Briefing reflektiert neuen Stand) | Cache-Invalidation |

---

### F8 — Lost-Event aus Modul 2 → AccountHistory + LessonsLearned

Wie F7, aber zusätzlich: Modul-2 hat in seinem Lost-Flow (F6 in dessen flows.md) bereits ein LessonsLearned-Knoten erzeugt. Account Growth verlinkt diesen mit dem Account und zeigt ihn in den Briefing-Warnsignalen für künftige Termine.

---

### F9 — Account-Tier-Re-Klassifizierung

**Auslöser:** Halbjährliches Tier-Review oder Trigger „Stakeholder-Wechsel".

| # | Step | Notes |
|---|---|---|
| 1 | Thomas öffnet Account-Liste → Filter „Tier-Review fällig" | UI: Re-Review-Date-Field pro Account |
| 2 | Sieht Vorschlag-Liste: System schlägt Tier-Änderungen vor (z. B. „Müller bisher Strategic, Pipeline gesunken, Vorschlag Key") | `Suggest`-Operator |
| 3 | Thomas reviewt pro Account, akzeptiert / ändert / behält | Inline-Approval |
| 4 | Audit-Log: Tier-Change-Events mit Begründung | AuditEntry |

---

### F10 — Stakeholder verlässt Firma (Wechsel)

**Auslöser:** Stakeholder ändert Arbeitgeber (manueller Eintrag durch Berater oder LinkedIn-Delta).

| # | Step | Notes |
|---|---|---|
| 1 | Lisa erfasst: Frau Bauer (Heller-Gruppe) wechselt zu Müller-AG | UI: Stakeholder-Detail → „Arbeitgeber-Wechsel" |
| 2 | System fragt: „Stakeholder beim alten Arbeitgeber bleibt erhalten? Oder als historisch markieren?" | Kategorisches Choice |
| 3a | Wenn „historisch markieren": Stakeholder.status=Historical bei altem Account, neuer Stakeholder-Record bei neuem Account erzeugt | Default-Empfehlung System |
| 3b | Wenn „weiter pflegen am alten Account": z. B. wenn Frau Bauer in Aufsichtsrat bleibt | Akzeptiert ungewöhnliche Konfigurationen |
| 4 | Cross-Account-Verbindung: neuer Stakeholder bei Müller verlinkt mit historischem Stakeholder bei Heller | Warm-Path-Material für Müller-Trigger! |
| 5 | System schlägt vor: „Wenn Müller-AG Trigger entsteht, Frau Bauer als Warm-Channel-Kandidat anbieten" | Auto-Suggestion |
| 6 | Optional Trigger: „Stakeholder-Wechsel kann Bestandsverlust bei Heller bedeuten" → Vorgeschlagener Trigger an Heller-Account-Owner | Pattern-Detection |

---

## §B — Abstrakte AI-Flows

### B1 — Capability-Inventar

```
┌────────────────────────────────────────────────────────────────┐
│  Read       : Account, Stakeholder, History, Trigger          │
│  Classify   : Free-Text → Trigger-Kind / Themen-Anker         │
│  Suggest    : Trigger-Kandidaten, Warm-Paths, Tier-Updates    │
│  Summarise  : Account-Briefing, History-Aggregation           │
│                                                                │
│  NICHT in diesem Modul:                                        │
│  Draft (kein Stakeholder-Outreach generiert — Marketing-CMS)  │
│  Plan (kein Strategy-Plan-Builder — Phase 2)                  │
│  Review (kein Source-zu-Methodologie-Check — Knowledge-Job)   │
└────────────────────────────────────────────────────────────────┘
```

### B2 — Intent-Map

```
Intent: "Was läuft bei diesem Kunden gerade?"
   ├─ Read(Account, Stakeholders, recent History)
   ├─ Summarise(History last 90 days)
   └─ Outcome: Stand-Snapshot

Intent: "Sollte ich etwas tun bei Account X?"
   ├─ Read(Account, open Triggers, open Opportunities)
   ├─ Suggest(next-action based on Trigger-Stage, Tier, AR-Status)
   └─ Outcome: Empfehlung mit Begründung

Intent: "Wer aus unserem Team kommt an Stakeholder Y dran?"
   ├─ Read(Stakeholder CV-Trail, Consultant CV-Trails)
   ├─ Suggest(Warm-Path-Edges sortiert nach Strength)
   └─ Outcome: Top-3-Berater + Beziehungs-Begründung

Intent: "Welche Bestandskunden sind gerade gefährdet?"
   ├─ Read(Health-Signale aus Allocation + Commercial Control)
   ├─ Classify(Pattern „aktives Projekt mit gelber Health" + „AR überfällig")
   └─ Outcome: Risk-Account-Liste mit Drilldown

Intent: "Was haben wir bei diesem Kunden gewonnen / verloren?"
   ├─ Read(AccountHistory: entry_type in [Won, Lost, ProposalSent])
   ├─ Summarise(Pattern über Zeit)
   └─ Outcome: Win-Rate, Average-Deal-Value, Lost-Reasons-Verteilung
```

### B3 — Dynamische Pfade

System darf ohne Approval:
- Briefing aus statischen Quellen aggregieren (read-only, Source-bound).
- Warm-Paths vorschlagen — Anzeige ist passive Empfehlung.
- Tier-Update vorschlagen (Approval-Gate vor Anwendung).

System darf nicht:
- Stakeholder neue Daten zuschreiben ohne menschliche Bestätigung.
- Tier ändern ohne Approval.
- Inferred-Trigger als „convertierbar" markieren ohne Mensch-im-Loop.
- Aktivitäts-Score pro Berater externalisieren.

---

## §C — Conversation Patterns

### C1 — „Briefing für Termin" (Standard-Workspace)

> **Katrin:** Ich habe in 30 Minuten Müller-AG. Was muss ich wissen?
>
> **AI-Workspace:** Strategic Account, seit 2019 Kunde. Drei Themen oben auf:
> 1. Offene Sourcing-Opportunity (€106k, Stage Briefed seit 5 Tagen).
> 2. ERP-Datenmigration läuft, Health gelb — Stefan meldete MS3 wird 1 Woche verspätet.
> 3. Stefans Anruf-Notiz vom 22.05.: Frau Schulz hat Restrukturierungs-Bedarf erwähnt.
>
> Zwei Warnsignale: Rechnung 14 Tage überfällig (€18k). Lessons Learned 2024: Müller war preissensitiv bei Premium.
>
> Empfehlung als Gesprächs-Anker: Restrukturierungs-Thema aufgreifen (Quelle: Stefan-Notiz), und am Rande Rechnungs-Reminder.
>
> **Katrin:** Mach mir das als PDF.
>
> **AI-Workspace:** *[Generiert PDF mit Source-Bindings als Fußnoten]* Geht zu deinen Workspace-Notizen, oder lieber direkter Download?
>
> **Katrin:** Workspace, ich öffne es auf dem iPad.

**Pattern „Read-only ist auch ein Job":** Briefing ist hochwertige Aggregation, keine Aktions-Empfehlung. Trotzdem zentrale Workspace-Capability.

---

### C2 — „Wer kommt an Stakeholder Y dran?"

> **Katrin:** Frau Schulz von Müller hat erweiterte IT-Verantwortung. Wer in unserem Team hat den besten Draht?
>
> **AI-Workspace:** Stefan Kraus — er und Frau Schulz haben 2003–2008 zusammen Wirtschaftsingenieurwesen an der TU München studiert, gleicher Jahrgang. Im System dokumentiert seit 2024-09 von Stefan selbst hinterlegt.
>
> Als zweite Option: Lisa Tran. Sie hat 2017–2019 ein Praktikum bei Heller-Gruppe gemacht, wo Frau Schulz damals Finance Director war. Schwächere Beziehung — Lisa war Praktikantin, nicht direkter Berichtskanal.
>
> Möchtest du, dass ich Stefan benachrichtige, dass er als Warm-Channel-Kandidat für einen Müller-Trigger vorgeschlagen ist?
>
> **Katrin:** Ja, aber sag ihm es ist optional — er ist eh ausgelastet.

**Pattern „Warm-Path zeigt Beziehung mit Substanz":** Nicht „Stefan kennt Frau Schulz", sondern *warum* sie sich kennen, wann, wie eng.

---

### C3 — „Ist Account in Schwierigkeiten?"

> **Thomas:** Welche Bestandskunden machen mir gerade Sorgen?
>
> **AI-Workspace:** Drei Accounts mit Risk-Indikator:
>
> 1. **Heller-Gruppe** — letzter Touch vor 87 Tagen, Tier Strategic, 0 offene Opportunities. Pattern „Strategic ohne Pipeline" deutet auf Beziehungs-Erosion.
> 2. **Bauer & Söhne** — laufendes Projekt mit Health rot seit 2 Wochen, AR-Status: Rechnung 28 Tage überfällig.
> 3. **Müller-AG** — kein direkter Health-Issue, aber Stakeholder-Wechsel-Signal: Herr Becker (CTO, langjähriger Champion) hat in LinkedIn Stelle wechsel angekündigt zum 30.06.
>
> Welcher von den drei willst du tiefer reingehen?
>
> **Thomas:** Heller. Wer ist da Account-Owner?
>
> **AI-Workspace:** Stefan. Letzte Berührung war ein Projekt-Schluss-Meeting am 02.03.2026 — danach kein dokumentierter Kontakt. In den 12 Monaten davor hatten wir 7 Touchpoints.

**Pattern „Risk ist multi-faktoriell":** Kein einzelnes Score, sondern erklärte Indikatoren mit Quellen.

---

### C4 — „Trigger qualifizieren" (mit Push-back)

> **Katrin:** Der inferred Trigger zu Müller — die LinkedIn-Sache mit Frau Schulz. Den lehne ich ab, der bringt nichts.
>
> **AI-Workspace:** OK. Begründung für die Lessons Learned?
>
> **Katrin:** Sie hat IT nur formell, nicht operativ. Bei Müller entscheidet das immer der CTO.
>
> **AI-Workspace:** Notiert. Ich werde künftig bei Müller-AG das Pattern „formale Verantwortungs-Erweiterung beim CFO" niedriger gewichten — der CTO bleibt für IT-Themen Primär-Kontakt. Soll ich das als Account-spezifische Regel speichern, oder als generelle Heuristik?
>
> **Katrin:** Account-spezifisch. Bei anderen Kunden kann CFO+IT durchaus relevant sein.
>
> **AI-Workspace:** Gespeichert als Account-Heuristik für Müller-AG. Nächstes Mal taucht das Pattern bei Müller nicht mehr als Trigger auf.

**Pattern „Feedback in Pattern-Engine":** Verworfene Trigger sind Lerndaten. Aber: Beratung kontrolliert wo gelernt wird (Account vs global).

---

### C5 — „Stakeholder-Wechsel"

> **Lisa:** Ich war heute bei Heller, Frau Bauer hat angekündigt, dass sie zum 1.7. zu Müller-AG wechselt.
>
> **AI-Workspace:** Wichtig — drei Folgen aus dem Wechsel:
>
> 1. **Heller-Risiko:** Frau Bauer war bei Heller dein primärer Stakeholder. Tier-Review fällig. Soll ich ein Tier-Review-Trigger anlegen für Heller?
> 2. **Müller-Chance:** Frau Bauer kennt bei Müller jetzt Frau Schulz (CFO). Sie wird mit hoher Wahrscheinlichkeit in Sourcing-Themen involviert. Soll ich sie als Stakeholder bei Müller-Account anlegen, mit Cross-Reference zu Heller-Bauer?
> 3. **Warm-Path:** Du selbst bist die einzige in unserem Team mit aktiver Beziehung zu Frau Bauer (8 Touchpoints, 5 davon letzte 6 Monate). Du wirst Warm-Path-Owner für Müller-Bauer.
>
> **Lisa:** Ja zu allen drei. Aber das Heller-Tier-Review will ich nicht selbst — das soll Stefan machen, der ist dort Account-Owner.
>
> **AI-Workspace:** Trigger an Stefan erzeugt. Frau Bauer als Stakeholder bei Müller-AG angelegt — mit Status „Eintritt 2026-07-01". Cross-Reference zu Heller-Bauer als Historical-Edge gesetzt.

**Pattern „Ein Event = drei Folge-Implikationen":** System artikuliert was sich aus einem Datum ändert.

---

## §D — State-Übergänge

### D1 — `Trigger.stage`

```
New ──[Berater/Katrin schaut an]──▶ Qualifying ──[Anker gesetzt + Stakeholder bestätigt]──▶ Qualified
  │                                       │                                                   │
  │                                       │ [als nicht relevant markiert]                     │
  │                                       ▼                                                   │
  │                                  Dismissed (mit Grund)                                    │
  │                                                                                            │
  └──[direkt verworfen]──▶ Dismissed                                                          │
                                                                                              ▼
                                                                              ConvertedToOpportunity
                                                                                  (final, Opp-FK)
```

### D2 — `Account.status`

```
Active ──[24 Monate inaktiv]──▶ Dormant ──[Touch]──▶ Active
   │                                │
   │                                │ [Vertrag verloren / Beziehung beendet]
   │                                ▼
   │                              Lost
   │                                │
   │                                │ [bewusst inaktiv halten]
   │                                ▼
   │                              Archived (read-only)
```

### D3 — `Stakeholder.status` (implizit)

```
Active ──[Wechselt Firma]──▶ TransitionPending
  │                              │
  │                              ├──[bei altem Acc historisch]──▶ Historical (alter Acc)
  │                              │                                + neuer Stakeholder bei neuem Acc
  │                              │
  │                              └──[bleibt aktiv]──▶ Active
  │
  └──[ausgeschieden]──▶ Inactive
```

### D4 — `WarmPathEdge` Lifecycle

```
Detected ──[Consultant ratifiziert]──▶ Confirmed ──[12 Monate ohne Touch]──▶ Stale
                                            │                                  │
                                            │                                  │ [Touch]
                                            │                                  ▼
                                            │                              Confirmed
                                            │
                                            └──[Consultant löscht]──▶ Removed (Audit-Trail bleibt)
```

---

## §E — Edge Cases

| Fall | Verhalten |
|---|---|
| Stakeholder doppelt erfasst (Name + Firma identisch) | Auto-Dedup-Vorschlag mit Merge-Modal; CV-Trails werden gemergt, Konflikte rot markiert |
| Inferred-Trigger basiert auf wachstumsorientierten LinkedIn-Posts (Confidence-Drop-Risk) | Confidence-Schwelle 0.5 als Anzeige-Floor; alle <0.5 in Hintergrund-Inbox, sichtbar nur bei Opt-In |
| Account-Owner verlässt Beratung | Re-Assignment-Workflow: alle Accounts dieses Beraters bekommen interim-Owner = Thomas, mit Re-Allocate-Pflicht innerhalb 14 Tage |
| DSAR-Anfrage von Stakeholder, der gerade in offener Opportunity referenziert ist | Bundle umfasst Opportunity-Verweise; Pseudonymisierungs-Option blockiert solange Opp offen — Hinweis-Text an Antragsteller |
| Stakeholder hat WarmPath zu Berater, aber Berater hat WarmPath-Consent-Visibility=Restricted gesetzt | Edge nicht für Katrin sichtbar; aber Audit-Log zeigt Existenz für Thomas (Compliance) |
| Tier-Re-Klassifizierung schlägt für Strategic-Account Standard vor — Approval von Thomas verzögert | Account bleibt Strategic bis explizite Approval; UI markiert „Re-Review fällig 14 Tage überfällig" |
| LinkedIn-Konnektor (Phase 1b) liefert inkonsistente CV-Trail-Daten | Diff-View zwischen manuell-eingetragen und LinkedIn-Stand; Berater entscheidet pro Feld |
| Briefing-Generierung bei Account ohne History (Neukunde-Bestand-Konvertierung) | Default-Briefing-Template mit nur Stammdaten + Hinweis „Beziehung ist neu, keine Historie verfügbar" |
| Stakeholder verstorben / langfristig krank | Status=Inactive, alle aktiven WarmPath-Edges werden auf historisch gesetzt; Sensibilitäts-Marker im UI |
| Stakeholder ist Mehrfach-Funktions-Träger (z. B. CFO und Aufsichtsratsmitglied bei zwei Beratungs-Accounts) | Stakeholder-Record erlaubt Multi-Account-Verlinkung über `secondary_account_ids[]`; im UI als „Hat auch Rolle bei…" sichtbar |
| Account fusioniert mit anderem Account (M&A) | Manuelle Merge-Action: Thomas wählt Quell-Account, Ziel-Account, Konflikt-Auflösung; History-Linien bleiben getrennt mit Pre-/Post-Merge-Marker |
| Trigger ist explizit vertraulich (z. B. internes Restrukturierungs-Vorhaben Kunde, nicht zu teilen) | Trigger-Visibility-Flag: nur Account-Owner + Thomas sehen — andere Berater sehen nur „Trigger existiert" ohne Inhalt |
| BetrVG-Heavy-Mode aktiviert während Inferred-Trigger-Audit | Aktivitäts-Pattern-Aufrufe für Berater-Performance werden gestoppt; Trigger-Empfehlung bleibt, aber ohne Berater-spezifische Insight-Komponenten |
| Stakeholder-Telefonnummer ändert sich automatisch durch LinkedIn-Sync, aber Berater hatte manuell andere Nummer | Konflikt-Marker; Berater-Eintrag hat Vorrang, LinkedIn-Wert in History-Audit |
| Account-Tier-Mehrfach-Änderungen innerhalb 30 Tagen | Auto-Lock + Eskalation an Thomas mit Anomaly-Flag — möglicher Misuse-Pattern oder Daten-Qualitäts-Issue |

---

## §F — Telemetrie

Pro Account / Berater / Beratungs-Aggregat:

| Metrik | Granularität | Aggregation |
|---|---|---|
| Trigger-Erfassung pro Woche | Pro Berater + Aggregat | Median, Trend |
| Trigger-Quell-Verteilung (Internal / External / Inferred) | Aggregat | % pro Quelle |
| Trigger-Lifecycle-Latenzen (New→Qualifying→ConvertedToOpp) | Pro Trigger | Median pro Tier |
| Warm-Path-Adoption-Rate | Pro Opp | % Opps mit aktiviertem WarmPath |
| Briefing-Generation-Häufigkeit | Pro Account | Counter, Spikes deuten auf intensive Beziehungsphase |
| DSAR-Volumen + Bearbeitungs-Latenz | Compliance | Median, SLA-Erfüllung |
| Stakeholder-Daten-Vollständigkeit | Pro Stakeholder | % Felder ausgefüllt (CV-Trail, Education, Influence) |
| Inferred-Trigger-Confidence-Verteilung + Conversion-Rate | Aggregat | Histogram + Won-Rate pro Confidence-Bucket |

---

## §G — Was Phase 1b ergänzt

- **AI Workspace** verändert §C-Conversations nicht inhaltlich, nur Ergonomie.
- **Market-Intelligence-Sub-System** (Phase 2) bringt zusätzliche Trigger-Quellen — Trigger-Inbox bleibt Inbox, nur mit reicheren Inputs.
- **CRM-Integrationen (HubSpot, Salesforce):** Account- und Stakeholder-Sync; Daten-Hoheit bleibt bei Consultry.
- **Outlook-Mail-Trigger:** Inbox-watcher mit Approval-Pflicht erweitert die Inferred-Trigger-Quelle erheblich.
- **Sentiment-Tracking:** optional pro Stakeholder, BetrVG-Heavy/DSGVO-relevant.

---

## §H — Verweise

- [spec.md](./spec.md)
- Cross-Cutting: [integration-flows.md](../_cross-cutting/integration-flows.md), [symbiosis-features.md](../_cross-cutting/symbiosis-features.md)
- Schwester-Module: [02-opportunity-proposal-contract/flows.md](../02-opportunity-proposal-contract/flows.md), [03-consultant-team-capacity/flows.md](../03-consultant-team-capacity/flows.md), [04-knowledge-reuse/flows.md](../04-knowledge-reuse/flows.md)

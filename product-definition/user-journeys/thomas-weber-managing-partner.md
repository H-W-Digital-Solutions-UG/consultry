# Thomas Weber — Managing Partner: Persona-spezifische User Journeys

**Persona:** Thomas Weber, Managing Partner / Geschäftsführer
**Unternehmen:** mpl Consulting GmbH (85 Berater)
**Consultry-Zeit:** 1–2 Stunden/Tag (Entscheider, nicht Operator)
**Rolle:** Kundenportfolio, strategische Entscheidungen, finale Angebotsfreigaben, Risiko-Management

**Version:** 1.1
**Datum:** 31. März 2026
**Companion:** [Consultry Target Personas v1.0](../Consultry-Target-Personas-v1.0.md), [Consultry User Journeys v1.1](../Consultry-User-Journeys-v1.0.md), [PRD v3.1](../Consultry-PRD-v3.0-Final.md)
**Design System:** [Consultry Design System v1.3](../../design/Consultry-Design-System-v1.3.md)
**Screen Specs:** [Screen Spec Index](../../design/screen-specs/_SCREEN-SPEC-INDEX.md)

---

## Thomas' Profil — Schnell-Übersicht

| Dimension | Details |
|-----------|---------|
| **Rolle** | Managing Partner / Geschäftsführer |
| **Verantwortung** | P&L, Top-20-Kunden, strategische Entscheidungen, finale Angebotsfreigaben |
| **Team-Umfang** | 3 Partner, 8 Practice Leads, 85 Berater gesamt |
| **Alter / Erfahrung** | 52 Jahre, 25 Jahre SAP-Beratung, 15 Jahre Führung |
| **Technik-Affinität** | Mittel — nutzt Tools wenn sie ihm Zeit sparen, misstraut Komplexität |
| **Kernkompetenz** | C-Level-Beziehungen, strategische Deals, SAP S/4HANA Transformation |
| **Consultry-Nutzung** | 1–2 Stunden/Tag (Cockpit-Check morgens, Freigaben tagsüber, Pipeline-Review abends) |

---

## Thomas' Tagesrhythmus & Konsumverhalten

```
07:00–07:30  Zuhause      │ Smartphone   │ Alerts prüfen, kritische Freigaben
08:00–08:30  Büro        │ Desktop      │ Cockpit-Check: Auslastung, Pipeline, Risiken
08:30–12:00  Büro/Calls  │ Smartphone/  │ Kundenmeetings, Partner-Abstimmungen
             / Reisen    │ Laptop       │
12:00–13:00  Unterwegs   │ Smartphone   │ Freigaben, Quick-Kommentare
13:00–17:00  Büro/Extern │ Laptop       │ Kundenpräsentationen, Vertragsverhandlungen
17:00–18:00  Büro        │ Desktop      │ Tagesreview, Pipeline-Überblick, Entscheidungen
Abends       Zuhause     │ Tablet       │ Forecast-Review vor Board-Meetings
(gelegentlich)           │              │
```

---

## Primäre Surfaces & AI-Interaktionsmuster

| Surface | Nutzungshäufigkeit | Typische Aktion | Design-Implikation |
|---------|-------------------|-----------------|-------------------|
| **Dashboard / Cockpit** | 2x täglich, je 10 Min | KPIs: Auslastung, Pipeline, Margin, Risiko-Flags | 4–6 KPI-Karten, Anomalie-Highlighting (rot/gelb), keine Tabellen |
| **Notification Center** | 5–10x täglich, je 1–2 Min | P0/P1-Alerts: Freigaben, Eskalationen, Scope-Creep | Vorpriorisiert, kontextreich, Action-Button pro Alert |
| **Opportunity Detail** | 3–5x pro Woche, 15 Min | Engagement-Brief prüfen, Kommentare, Freigabe | Self-Contained Approval Cards mit allen Entscheidungsdaten |
| **Angebots-Canvas** | 2x pro Woche, 20 Min | Pricing prüfen, Kommentare zur Teamaufstellung | Canvas nur als Reviewer — generiert nicht selbst |
| **Financial Intelligence** | 1x pro Woche, 30 Min | DB-Analyse, Forecast, Utilization | Real-time Profitabilitätstransparenz, Szenario-Modelle |
| **Vertrags-Canvas** | 1x pro Woche, 15 Min | Risiko-Klauseln prüfen, Freigabe erteilen | Rot/Gelb/Grün-Markierung mit Alternativvorschlägen |

**AI-Präferenz:**
- **Primär: Copilot** — Thomas will kontextuelle Zusammenfassungen: "Was muss ich zu RetailCorp wissen, bevor ich den CFO anrufe?"
- **Sekundär: Dashboard** — Er scannt, nicht sucht. Anomalien müssen ihm ins Auge springen.
- **Command Bar** selten — er tippt ungern, klickt lieber auf vorbereitete Aktionen.
- **Canvas** nur als Reviewer — er generiert nicht selbst, sondern kommentiert und gibt frei.

---

## AI-Interface-Routing: Copilot vs. Dashboard vs. Notifications

Thomas' AI-Interaktion ist fundamental anders als Katrins:

- **Copilot ist PRIMARY** — Thomas fragt, er sucht nicht. "Was muss ich zu RetailCorp wissen?" ist sein Modus.
- **Command Bar ist SELTEN** — Er klickt, tippt nicht. Pre-built Actions auf Dashboard-Karten sind sein Einstiegspunkt.
- **Canvas ist REVIEW-ONLY** — Er generiert nie. Er kommentiert und genehmigt.
- **Chat: Niemals** — Zu langsam, zu exploratif für sein 1-2-Stunden/Tag-Budget.

**Decision Tree:**

```
Thomas interagiert...
├── Morgen-Scan (07:00–08:30)
│   → Dashboard/Cockpit: KPI-Karten scannen, Anomalien erkennen
│   → Notification Center: P0/P1 abarbeiten (self-contained cards)
├── Freigabe-Entscheidung
│   → Approval Card (in Notification): Kontext + Aktion in einem Screen
│   → NICHT: Canvas öffnen, dann suchen, dann freigeben
├── Vor Kundengespräch
│   → Copilot-Briefing: "Briefing RetailCorp" → 30-Sekunden-Summary
│   → Auslöser: Kalender-Integration erkennt Meeting → Copilot bereitet vor
├── Strategische Frage ("Liegen wir im Quartalsziel?")
│   → Copilot auf Dashboard: Inline-Antwort mit Forecast-Referenz
└── Eskalation/Konflikt
    → P0-Alert → Detail-View → Aktion (delegieren, genehmigen, eskalieren)
```

---

## Explainability & Trust für Thomas

Thomas' Vertrauen ist die kritischste Produkthypothese. Wenn die Zahlen im Dashboard nicht stimmen, geht er zurück zu Excel.

- **Jede KPI-Karte braucht einen Drill-Down-Pfad.** "Auslastung 78%" → Klick → zeigt: pro Practice, pro Team, Top-5-Berater. Nie eine Zahl ohne Erklärung.

- **Forecast muss Berechnungslogik offenlegen.** "Revenue Forecast Q3: 2.4M€" → Klick → zeigt: laufende Projekte (1.8M€ gesichert) + Pipeline gewichtet (600K€ bei 60% Wahrscheinlichkeit) + Kapazitäts-Constraint.

- **Vergleich mit externen Quellen.** "Stimmt das mit meinem Excel?" → Export-Funktion die exakt die gleichen Zahlen reproduziert. Rounding-Differenzen zerstören Vertrauen.

- **AI-Empfehlungen im Copilot immer mit Quelle.** "Empfehle Change Request" → "Basierend auf: Budget 68% verbraucht bei 55% Fortschritt. Historischer Vergleich: 3 von 4 ähnlichen Projekten brauchten Change Request."

- **Anomalie-Erklärung.** Rote KPI-Karte nicht nur "78% Auslastung (Ziel: 80%)" sondern "78% — Ursache: 3 Berater auf Bench seit KW 14 (Cloud-Practice). Pipeline zeigt 2 passende Opportunities."

---

## Mobile-Push-Strategie für Thomas

Thomas' P0-Alert-Flow (07:00, iPhone) ist kritisch. PWA-Push auf iOS ist eingeschränkt.

- **Primärer Kanal: E-Mail für P0.** Sofortige E-Mail mit Deep-Link ins System. Thomas hat E-Mail-Push immer an.

- **Sekundärer Kanal: PWA-Push** wenn installiert. Anleitung beim Onboarding: "Füge Consultry zum Home-Screen hinzu für Push-Notifications."

- **Fallback: Slack/Teams-Bot.** P0-Alerts als DM im bestehenden Messaging-Tool.

- **Eskalation:** Wenn P0-Alert nach 30 Min nicht gelesen: SMS (nur für P0, konfigurierbar).

- **Nie:** Telefonanruf. Thomas will keine Überraschungen — er will kontrollierte Sofort-Information.

---

## Jobs to be Done

### Morgens (07:00–08:30) — "Was brennt, was braucht mich?"
- P0-Alerts: Projekt-Eskalation? Vertragsfrist? Kundenbeschwerde?
- Freigaben: Angebote, Staffing-Entscheidungen, Budgetüberschreitungen
- Cockpit: Auslastung diese Woche, Pipeline-Veränderung seit gestern

### Tagsüber (08:30–17:00) — "Kundenbeziehungen und Deals"
- Vor Kundengespräch: Copilot-Briefing in 30 Sekunden
- Angebotsfreigabe: Pricing + Team + Margin auf einen Blick
- Vertrags-Review: nur die roten Klauseln, nicht den ganzen Vertrag
- Staffing-Konflikte lösen: "Markus auf RetailCorp oder MedTech?"

### Abends (17:00–18:00) — "Wo stehen wir, was entscheide ich morgen?"
- Pipeline-Review: was hat sich bewegt?
- Forecast-Check: liegen wir im Quartalsziel?
- Kapazitätsblick: wer ist bald frei, passt das zur Pipeline?

---

## Design-Implikationen für Thomas' Workflows

1. **Cockpit muss auf einen Blick funktionieren.** 4–6 KPI-Karten, Anomalie-Highlighting (rot/gelb), keine Tabellen. Thomas scannt in 30 Sekunden.

2. **Notifications müssen vorpriorisiert und kontextreich sein.** P0 = rot, sofort, mit Action-Button. P1 = orange, mit genug Kontext für Sofort-Entscheidung. Alles andere: Tages-Digest.

3. **Approval-Cards müssen self-contained sein.** Thomas will in der Notification freigeben, nicht erst die Opportunity öffnen. Kontext (Deal-Wert, Margin, Team, Risiken) muss inline sichtbar sein.

4. **Mobile muss für Entscheidungen funktionieren, nicht für Erstellung.** Freigeben, Kommentieren, Alerts beantworten — ja. Canvas bearbeiten — nein.

5. **Copilot-Briefings vor Meetings sind ein Killer-Feature.** "Briefing für meinen 10-Uhr-Call mit Dr. Weber" muss in 30 Sekunden eine brauchbare Zusammenfassung liefern.

---

## Persönliche Erfolgsmetriken

| Metrik | Was er trackt | Ziel |
|--------|---------------|------|
| Gesamt-Auslastung | Fakturierbare Quote aller Berater | >80% |
| Pipeline / Quartalsziel-Ratio | Genug Pipeline für Zielerreichung? | >3x |
| DB1 pro Projekt | Profitabilität über Benchmark? | >25% |
| Forecast Accuracy | Wie genau ist seine Prognose? | ±15% |
| Freigabe-Durchlaufzeit | Wie schnell bearbeitet er Approvals? | <4 Stunden |

---

## Frustrationen & Abbruchpunkte

| Frustration | Auslöser | Konsequenz |
|---|---|---|
| **"Ich muss mich durch 5 Screens klicken für eine Antwort"** | Keine Cockpit-View, zu granulare UI | Fragt Katrin per Telefon |
| **"Das System schickt mir 20 Notifications am Tag"** | Alert-Fatigue, keine Priorisierung | Ignoriert alle Alerts → misst P0 |
| **"Ich soll ein Angebot freigeben aber sehe nur einen Button"** | Kein Kontext in der Approval-Notification | Ruft Katrin an statt im System freizugeben |
| **"Die Zahlen im Dashboard stimmen nicht mit meiner Excel"** | Dateninkonsistenz, Berechnungslogik unklar | Verliert Vertrauen, geht zurück zu Excel |
| **"Auf dem Handy kann ich nichts Sinnvolles machen"** | Mobile UI ist Desktop-Miniatur | Wartet bis er am Rechner ist → Verzögerung |

---

---

# Journey 1: Signal → Opportunity → Angebot → Freigabe

**Der wichtigste Flow für Thomas als Freigabe-Entscheider.**

**Beteiligte Personas:** Katrin (Primär), Thomas (Freigabe), Stefan (Kontext)
**Dauer:** 3–4 Stunden (mit Consultry) vs. 2–4 Tage (ohne)
**Thomas' Touchpoints:**
- [J1-S3a] Thomas reagiert auf Kommentar zur Warm-Path-Bestätigung
- [J1-S6] Thomas gibt Angebot frei (finale Approval)

**Design-Kritikalität:** HOCH — Thomas ist der Blocker in diesem Flow. Wenn die Approval-Card nicht funktioniert, wartet Katrin bis sie anruft.

---

## Phase B2: Thomas bestätigt Warm-Path (Mobile)

### [J1-S3a] Thomas reagiert auf Kommentar

**Kontext:** Push-Notification: "Katrin hat dich erwähnt: RetailCorp AG"

**Trigger:** Katrin fragt im Opportunity-Kommentar: "@Thomas — kennst du den neuen CTO Dr. Hofer persönlich?"

**Screen:** Notification → Deep-Link in Opportunity-Kommentare

```
┌─────────────────────────────────────────┐
│ RetailCorp AG · Kommentare              │
├─────────────────────────────────────────┤
│                                         │
│ Katrin (08:15):                         │
│ "@Thomas — kennst du den neuen          │
│  CTO Dr. Hofer persönlich?"             │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Antworten...                        │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ Thomas (09:02):                         │
│ "Nicht persönlich, aber Dr. Weber      │
│  (CFO) kenne ich gut. Ich rufe ihn     │
│  Dienstag an. Dann können wir Hofer    │
│  über Weber erreichen."                 │
│                                         │
│ ✅ Kommentar gepostet                   │
│                                         │
│ [← Zurück zur Opportunity]              │
│                                         │
└─────────────────────────────────────────┘
```

**Komponenten:**
- `MentionNotification` — Push-Notification mit Deep-Link zum Kommentar
- `CommentThread` — Threaded Comments mit Timestamps
- `ReplyInput` — Full-Width Text-Input für Antwort
- `ActivityFeed` — Alle Kommentare chronologisch sichtbar

**Daten pro Kommentar:**
- Autor + Avatar + Timestamp
- Kommentar-Text (mit @-Mentions)
- ggf. Attachments (PDFs, Bilder)

**AI-Interaktion:**
- Keine aktive AI hier — Thomas schreibt manuell
- Optional später: Copilot könnte "Warm-Path bestätigt" auto-taggen

**Handoff zurück → Katrin:**
- Katrin sieht Thomas' Antwort im Aktivitäts-Feed
- System: Warm-Path zu Dr. Weber (CFO) ist bestätigt → erhöht Deal-Confidence
- Katrin kann jetzt mit Engagement-Brief weitermachen

**Mobile-Spezifika:**
- Vollbildschirm oder Bottom-Sheet, je nach Navigation
- Keyboard: Auto-focus auf Reply-Input
- Swipe-Left zum Löschen von eigenen Kommentaren (mit Undo)
- Pull-to-Refresh für neue Antworten

---

## Phase D: Thomas gibt Angebot frei

### [J1-S6] Thomas gibt Angebot frei (Mobile/Desktop)

**Kontext:** Push-Notification oder Desktop-Notification

**Trigger:** Katrin bittet um Freigabe über Canvas-Kommentar: "@Thomas — Pricing RetailCorp ok?"

**Thomas bekommt (Mobile Approval Card):**

```
┌─────────────────────────────────────┐
│ 📋 ANGEBOTSFREIGABE                 │
│                                     │
│ RetailCorp AG                       │
│ SAP S/4HANA Migration               │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Volumen       484.500€          │ │
│ │ Margin (DB1)  28%               │ │
│ │ Team          Markus, Lisa,     │ │
│ │               Tim (3 Berater)   │ │
│ │ Laufzeit      6 Monate          │ │
│ │ Start         KW 20             │ │
│ │ Ø Tagessatz   1.433€            │ │
│ │ Warm-Path     Dr. Weber (CFO)   │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Katrins Notiz:                      │
│ "Pricing passt, Thomas. Warm-Path   │
│  über Dr. Weber (CFO)."             │
│                                     │
│ [Canvas öffnen]                     │ ← Optional Detail-Link
│                                     │
│ 💬 Mein Kommentar:                  │
│ ┌─────────────────────────────────┐ │
│ │ "Tagessatz Markus auf 1.600€    │ │
│ │  — RetailCorp zahlt Premium"    │ │
│ │                                 │ │
│ │ [Clear]                         │ │
│ └─────────────────────────────────┘ │
│                                     │
│ [✅ Freigeben]  [❌ Ablehnen]       │
│ [💬 Kommentar & zurück]             │
│                                     │
│ [Canvas öffnen] (falls mehr Details)│
│                                     │
└─────────────────────────────────────┘
```

**Verhalten "Freigeben":**
1. Status → "Freigegeben"
2. Timestamp + Thomas als Approver geloggt
3. Kommentar wird gepostet: "Tagessatz Markus auf 1.600€ — RetailCorp zahlt Premium"
4. Notification an Katrin: "Thomas hat freigegeben. Kommentar: Tagessatz Markus auf 1.600€"
5. Thomas erhält Toast: "✅ Angebot freigegeben. Katrin wird benachrichtigt."
6. Katrin sieht in ihrem Canvas:
   - Status: 🟢 Freigegeben
   - Kommentar von Thomas: "Tagessatz Markus auf 1.600€"
   - Margin aktualisiert sich (falls 1.600€ andere Margin ergibt)

**Komponenten:**
- `ApprovalCard` — Self-Contained Card mit allen Entscheidungsdaten
- `DataSummary` — Key Deal-Metriken (Volume, Margin, Team, Timeline)
- `WarmPathBadge` — Zeigt Beziehungspfad (Dr. Weber)
- `CommentSection` — Thomas kann einen kurzen Kommentar hinzufügen
- `ActionButtons` — Primary: "Freigeben", Secondary: "Ablehnen", Tertiary: "Kommentar & zurück"
- `DetailsLink` — "Canvas öffnen" für Thomas, falls er mehr Details braucht

**Design-Token (nach Consultry Design System v1.2):**
- Card Background: `--charcoal` (#111111)
- Card Border: `1px solid rgba(255,255,255,0.08)`
- Primary Button (Freigeben): `--consultry-coral` (#BF5347)
- Secondary Button (Ablehnen): `--neutral-gray-600`
- Margin Badge: 🟢 >25% = grün, 🟡 20-25% = gelb, 🔴 <20% = rot

**Mobile-Spezifika:**
- Full-Width, 16px Padding
- Buttons: 48px min Touch-Target
- Kommentar-Input: Auto-Expand bei Fokus
- Swipe-Down zum Schließen (ggf.)

**Desktop-Spezifika:**
- Card width: ~600px max, centered
- Hover-States auf Buttons
- Keyboard: Enter zum "Freigeben", Escape zum Schließen
- ggf. Canvas-Preview als Side-Panel

**Fehlerfall:**
- API-Fehler beim Freigeben: "Freigabe fehlgeschlagen. Versuchen Sie es erneut." + Retry-Button
- Dateninkonsistenz: "⚠️ Margin hat sich seit deinem letzten Refresh geändert (jetzt 26%). Neu laden?"
- Network-Fehler: Toast mit Offline-Hinweis + Retry-Prompt

**Handoff zurück → Katrin:**
- Katrin sieht im Canvas: Status = 🟢 Freigegeben
- Katrin sieht Thomas' Kommentar: "Tagessatz Markus auf 1.600€"
- Katrin passt Pricing an, falls nötig
- Margin aktualisiert sich in Echtzeit im Canvas
- Katrin kann jetzt Angebot an Customer senden (Outreach)

**Approval-Card Kritikalität:**
- **SEHR HOCH** — Thomas nutzt Consultry nur, wenn die Card in <30 Sekunden zu verstehen ist
- Wenn Kontext fehlt → Thomas ruft Katrin an statt freizugeben
- Self-Contained = alle Entscheidungsdaten auf einer Card, keine Extra-Clicks

---

---

# Journey 3: Projekt-Risiko → Alert → Eskalation

**Thomas als Risk-Entscheider bei Scope-Creep, Budget-Überschreitungen, Meilenstein-Verzögerungen.**

**Beteiligte Personas:** Stefan (erkennt Risiko), Thomas (entscheidet), Dr. Müller (wird informiert)
**Dauer:** 30 Minuten (mit Consultry) vs. Tage (ohne: wird oft zu spät erkannt)
**Thomas' Touchpoint:** [J3-S2] Thomas bekommt P0-Alert und genehmigt Change Request

---

## Phase C: Thomas bekommt Alert & entscheidet

### [J3-S2] Stefan eskaliert → Thomas bekommt P0-Alert

**Kontext:** Stefan hat im Projekt-Dashboard "Thomas alertieren" geklickt

**Thomas bekommt (Mobile, sofort, P0-Farbe = rot):**

```
┌─────────────────────────────────────┐
│ 🔴 P0 — PROJEKT-ESKALATION         │
│                                     │
│ MedTech GmbH                        │
│ SAP S/4HANA Migration               │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Health        🟡 At Risk        │ │
│ │ Problem       Scope-Creep       │ │
│ │               +3 Legacy-Sys.    │ │
│ │ Milestone 3   +2 Wochen Delay   │ │
│ │ Budget        13% Over-Index    │ │
│ │ Mehraufwand   ~25K€             │ │
│ │ PL            Stefan Kraus      │ │
│ │ Kunde         Dr. Müller (CIO)  │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Stefans Notiz:                      │
│ "Scope-Erweiterung nicht vermeidbar│
│  — 3 Legacy-Systeme waren nicht in │
│  der Analyse. Change Request ist   │
│  vorbereitet."                      │
│                                     │
│ [Change Request prüfen]             │
│ [Stefan anrufen]                    │
│ [Zur Kenntnis]                      │
│                                     │
└─────────────────────────────────────┘
```

**Komponenten:**
- `AlertCard` — Full-Width, 🔴 P0 (rot), prominent
- `HealthBadge` — 🟡 At Risk mit Kontext
- `ProblemSummary` — Problem, Auswirkung (Delay, Budget-Impact), Mehraufwand
- `StakeholderInfo` — PL + Kunde + Kontaktinfos
- `NotesBox` — Stefans Begründung/Kontext
- `ActionButtons` — "Change Request prüfen", "Stefan anrufen", "Zur Kenntnis"

**Daten:**
- Alert-Typ: P0 / P1 / P2
- Projekt: Name, Kunde, PL, Status
- Health-Status: 🟢 On Track / 🟡 At Risk / 🔴 Critical
- Problem-Beschreibung: Was, warum, Auswirkung
- Zahlen: Budget-Überschreitung, Delay, Mehraufwand
- Empfehlung: Was soll Thomas tun?

**AI-Interaktion:**
- Copilot hat Scope-Creep erkannt (im Projekt-Dashboard [J3-S1])
- Copilot hat Change Request vorgeneriert (Template + Aufwandsschätzung)
- Stefan hat Copilot-Empfehlung akzeptiert → Thomas alertiert
- Optional: Copilot könnte Thomas einen Action-Vorschlag geben: "Change Request genehmigen? Geschätzter Impact: +25K€, Timeline +2W. Dr. Müller sollte informiert werden."

**Verhalten "Change Request prüfen":**
1. Öffnet Change Request (kann ein Canvas sein oder separater Screen)
2. Thomas sieht:
   - Original-Scope (3 Module)
   - Neue Scope-Items (+3 Legacy-Systeme)
   - Aufwandsschätzung (+20 PT ≈ 25K€)
   - Impact auf Meilensteine (M3: +2W, M4 verschiebt sich auf KW 24)
   - Preis-Anpassung (Kunde zahlt extra)
3. Thomas kann: Genehmigen (✅) / Anpassen / Ablehnen (❌)

**Verhalten "Genehmigen":**
1. Status → "Genehmigt"
2. Stefan erhält Notification: "Thomas hat genehmigt"
3. Change Request wird an Dr. Müller (Kunde) kommuniziert
4. Projektplan wird aktualisiert (Meilensteine verschieben sich)
5. Rechnung wird angepasst

**Verhalten "Stefan anrufen":**
1. Öffnet Kontaktkarte für Stefan
2. Telefon-Button (native Call-Action auf Mobile)
3. Nach Call: Toast "Call beendet. Notizen?"

**Verhalten "Zur Kenntnis":**
1. Status → "Acknowledged"
2. Notification an Stefan: "Thomas hat zur Kenntnis genommen"
3. Alert wird aus Thomas' Action-List entfernt (aber für History sichtbar)

**Mobile-Spezifika:**
- Vollbildschirm, Alert-Card prominent
- Buttons: 48px Touch-Target
- Swipe-Left: Quick-Dismiss → Toast mit Undo
- Swipe-Right: Quick-Action (z.B. "Stefan anrufen")

**Desktop-Spezifika:**
- Card width: ~500px, centered
- Change Request kann als Side-Panel öffnen
- Keyboard: 1 = "Change Request", 2 = "Stefan anrufen", 3 = "Zur Kenntnis"

**Design-Token:**
- Alert Background (P0): `--alert-critical` (dunkelrot)
- Alert Border: `2px solid #FF4444`
- Problem-Text: Weiß auf Rot
- Action-Buttons: Weiß Text auf dunklem Hintergrund
- Info-Box (Stefans Notiz): Heller Hintergrund mit dunklem Text

**Fehlerfall:**
- Change Request nicht vorhanden: "⚠️ Change Request konnte nicht gefunden werden. Stefan kontaktieren?"
- Stefan offline: "Stefan ist gerade offline. Nachricht hinterlassen?"

---

---

# Journey 2: Staffing-Konflikt (Mention)

**Thomas als Konflikt-Löser zwischen 2 Projekten, die denselben Berater wollen.**

**Anmerkung:** Diese Journey ist im Original kurz erwähnt aber hat kein dediziertes Screen-Walkthrough. Hier die Kurzversion basierend auf Thomas' Persona:

**Kontext:**
- Maria (Practice Lead) hat einen Staffing-Konflikt erkannt
- Markus ist auf RetailCorp budgetiert, aber FinServ (ein anderes großes Projekt) möchte Markus auch
- Maria taggt @Thomas im Workforce-Modul

**Thomas bekommt (Mobile Notification):**
```
🟠 P1 — STAFFING-KONFLIKT

Markus Seiler gefragt für 2 Projekte:
  • RetailCorp (Katrin, 6M, SAP-Implementierung)
  • FinServ (Klaus, 3M, SAP-Upgrade)

Konflikt: RetailCorp startet KW 20, FinServ KW 18.
Beide Projekte brauchen Markus.

Maria (Practice Lead):
"Markus ist effektiver auf RetailCorp (SAP-Migration).
FinServ kann mit Tim arbeiten, aber weniger effizient."

[Markus auf RetailCorp] [Markus auf FinServ] [Tim auf FinServ]
```

**Thomas entscheidet:**
- Option 1: Markus bleibt auf RetailCorp (höherer Deal-Value, bessere Fit)
- Option 2: Markus geht auf FinServ (bestehender Kunde, höhere Beziehung)
- Option 3: Tim (Junior) geht auf FinServ, Markus auf RetailCorp (Hybrid)

Thomas tippt → Entscheidung wird an Katrin, Klaus und Maria kommuniziert.

---

---

# Journey 12: Thomas' Morgen-Briefing (Cockpit + Copilot)

**Der wichtigste Entscheider-Flow — wenn das Cockpit nicht funktioniert, nutzt Thomas Consultry nicht.**

**Dauer:** 15 Minuten, jeden Morgen
**Geräte:** Smartphone (07:00–07:30, Alerts), Desktop (08:00–08:30, Cockpit-Check), Smartphone (tagsüber, Quick-Entscheidungen), Tablet (abends, Forecast-Review)

---

## Phase A: Morgen-Alerts (Smartphone, 07:15)

**Kontext:** Thomas wacht auf, Kaffee, iPhone

**Verhalten:**
1. Top-Bar-Badge: "🔴 3" — 3 Alerts warten
2. Thomas öffnet Notification Center (Swipe-Down)
3. Sieht P0/P1-Alerts in Prioritätsreihenfolge
4. Tippt auf eine → Approval Card oder Alert Detail

(Beispiele: P0 MedTech Scope-Creep, P1 RetailCorp Freigabe, P1 Staffing-Konflikt)

---

## Phase B: Cockpit-Check am Desktop (08:00–08:30)

### [J12-S1] Cockpit (Thomas, Desktop)

**Kontext:** Thomas im Büro, 2 Bildschirme, Kaffee, E-Mail offen

**Cockpit-Layout:**

```
┌──────────────────────────────────────────────────────────────────────┐
│ CONSULTRY COCKPIT · Thomas Weber              🔔 4  [Cmd+K]         │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ GUTEN MORGEN, THOMAS · Dienstag, 31. März 2026                     │
│                                                                      │
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌─────────┐            │
│ │ Ausl.  │ │Pipeline│ │ DB1 Ø  │ │Projekte│ │ Bench   │            │
│ │  78%   │ │ 2.1M€  │ │  27%   │ │ 8 aktiv│ │ 3 Ber.  │            │
│ │ 🟡-2%  │ │ 🟢+180K│ │ 🟢 ok  │ │ 🟡 1   │ │ 🟡 +1   │            │
│ │ (2% zu │ │ diese  │ │ über   │ │ risk  │ │ Diese   │            │
│ │ gering)│ │ Woche  │ │ Bench  │ │       │ │ Woche   │            │
│ └────────┘ └────────┘ └────────┘ └────────┘ └─────────┘            │
│                                                                      │
│ ⚡ DEINE AKTIONEN HEUTE                                              │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │ 🔴 P0: MedTech Scope-Creep — Change Request prüfen               │ │
│ │        [Öffnen]                                                   │ │
│ │ 🟠 P1: Angebotsfreigabe RetailCorp 484K€ (Margin 28%)            │ │
│ │        [Freigeben] [Details]                                     │ │
│ │ 🟠 P1: Staffing-Konflikt Markus (RetailCorp vs. FinServ)         │ │
│ │        [Entscheiden]                                             │ │
│ │ 🟡 P2: Beziehungserosion Dr. Weber (90 Tage kein Kontakt)        │ │
│ │        [Kontakt planen]                                          │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│ 📅 DEINE TERMINE HEUTE                                              │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │ 10:00 Call mit Dr. Weber (RetailCorp)                            │ │
│ │       [Copilot-Briefing]  ← "Was muss ich wissen?"              │ │
│ │ 14:00 Partner-Meeting: Q2 Pipeline Review                        │ │
│ │       [Forecast vorbereiten]                                     │ │
│ │ 16:30 Staffing-Call mit Maria (Cloud Practice)                   │ │
│ │       [Kapazitätsübersicht]                                      │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│ 📊 DIESE WOCHE                                                      │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │  Neue Signale: 12 (3 konvertiert)                                │ │
│ │  Angebote raus: 2 (480K€ + 220K€)                               │ │
│ │  Projekte abgeschlossen: 1 (MedTech, NPS 78)                    │ │
│ │  Berater auf Bench: 3 (Dirk, Clara, Tim)                        │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Komponenten:**

1. **KPI-Cards (Oben, 5 Stück):**
   - `Auslastung`: 78%, Trend 🟡 -2% (zu gering, Ziel 80%)
   - `Pipeline`: 2.1M€, Trend 🟢 +180K€ diese Woche
   - `DB1 Ø (Deckungsbeitrag)`: 27%, Trend 🟢 ok (Ziel >25%)
   - `Projekte`: 8 aktiv, 🟡 1 at risk (MedTech)
   - `Bench (freie Berater)`: 3, 🟡 +1 diese Woche verfügbar

2. **Action-List (Prioritized Alerts):**
   - 🔴 P0: MedTech Scope-Creep (Change Request prüfen)
   - 🟠 P1: RetailCorp Freigabe 484K€ (Margin 28%)
   - 🟠 P1: Staffing-Konflikt Markus (RetailCorp vs. FinServ)
   - 🟡 P2: Beziehungserosion Dr. Weber (90 Tage kein Kontakt)

   Jeder Alert hat ein Action-Button (Öffnen, Freigeben, Entscheiden, etc.)

3. **Calendar Widget:**
   - Heute's Termine
   - "Copilot-Briefing" Link neben jedem Meeting
   - Forecast-Vorbereitung neben Partner-Meeting

4. **Weekly Snapshot:**
   - Signale konvertiert
   - Angebote raus (mit Volumen)
   - Projekte abgeschlossen (mit NPS)
   - Berater auf Bench (mit Name + Verfügbarkeit)

**Daten-Quellen:**
- KPIs: Workforce-Datenbank, Time-Tracking, Opportunity-DB
- Alerts: P0/P1-Alert-Queue (sortiert nach Timestamp + Severity)
- Calendar: Exchange / Google Calendar Integration
- Weekly: Aggregierte Daten aus Opportunities, Projects, Time-Tracking

**AI-Interaktion:**
- Keine aktive AI hier — Cockpit ist "computed" (KPIs, Alerts vorberechnet)
- Optional: Copilot könnte einen Smart-Summary geben: "Deine Top-3 Aktionen heute: 1) MedTech genehmigen, 2) RetailCorp freigeben, 3) Mit Maria Staffing klären"

**Design-Token:**
- KPI-Card Background: `--charcoal` (#111111)
- KPI-Card Border: `1px solid rgba(255,255,255,0.08)`
- KPI-Value: `--heading-xl` (große, lesbare Zahl)
- KPI-Trend 🟢: `--success-green` (#4CAF50)
- KPI-Trend 🟡: `--warning-yellow` (#FFC107)
- KPI-Trend 🔴: `--alert-red` (#FF4444)
- Action-List: `--bg-secondary` (etwas heller als Card)

**Mobile-Spezifika:**
- Cockpit auf Smartphone (optional): Reduziert auf Top-3 KPIs + Top-3 Alerts
- Swipe-Right: Slide-out Navigation
- Tap auf KPI-Card: Öffnet Detail-Dashboard

**Desktop-Spezifika:**
- Full-Width Layout
- Hover-States auf Cards
- Searchable Alert-List (Cmd+K für Command Palette)
- Customizable KPI-Selection (Thomas kann wählen welche KPIs)

**Fehlerfall:**
- KPI-Daten fehlen: "⚠️ Auslastung konnte nicht geladen werden. Letzte Aktualisierung: vor 2 Stunden."
- API-Fehler: "Dashboard konnte nicht vollständig geladen werden. Versuchen Sie zu refreshen."

---

## Phase C: Copilot-Briefing vor Meeting (Desktop/Tablet, 09:55)

### [J12-S2] Copilot-Briefing vor Call mit Dr. Weber

**Kontext:** Thomas sieht in Cockpit sein 10:00-Meeting mit Dr. Weber. Tippt "[Copilot-Briefing]"

**Prompt:** "Was muss ich zu RetailCorp / Dr. Weber wissen, bevor ich ihn anrufe?"

**Copilot-Output (Full-Screen oder Side-Panel):**

```
┌──────────────────────────────────────────────────────────────────────┐
│ 🤖 BRIEFING: Call mit Dr. Weber, RetailCorp · 10:00                 │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ KONTEXT                                                              │
│ • SAP-Migration läuft (Milestone 3/5, on track nach Change Req.)    │
│ • Neue Opportunity: NIS2-Compliance (Cross-Selling-Signal)          │
│ • Dr. Weber = CFO, du kennst ihn von BITKOM 2024                   │
│ • Letzter Kontakt: vor 90 Tagen (⚠️)                               │
│ • Zahlungszuverlässigkeit: Perfekt (Ø Zahlungsziel: 28T)           │
│                                                                      │
│ EMPFOHLENE GESPRÄCHSPUNKTE                                          │
│ 1. Projekt-Update: Migration auf Kurs nach Scope-Anpassung        │
│    → Milestone 3 +2W (aber Change Request genehmigt)               │
│    → Go-Live immer noch KW 26 (mit kompressiertem M4)              │
│ 2. NIS2-Compliance: "Wir sehen dass ihr eine neue                 │
│    Compliance-Abteilung aufbaut — wir haben NIS2-Expertise"        │
│    → Contract Intelligence: Automatisierte Compliance-Checks       │
│ 3. Beziehungspflege: Event-Einladung für it-sa (Mai) anbieten      │
│                                                                      │
│ VORSICHT                                                             │
│ • Dr. Müller (Pulse-Check KW 14): "Timeline M4 macht mir Sorgen"   │
│   → Stefan hat Change Request eingereicht, Situation adressiert    │
│ • Wettbewerb: Deloitte wurde auch für NIS2-Audit angefragt         │
│   (Source: LinkedIn-Signal vom Recruiting Team)                    │
│                                                                      │
│ DEINE FRAGEN                                                         │
│ Q: "Gibt es offene Rechnungen bei RetailCorp?"                      │
│ A: Nein, alle Rechnungen bezahlt. Ø Zahlungsziel: 28 Tage.         │
│                                                                      │
│ Q: "Wann endet die aktuelle Opportunity?"                           │
│ A: Go-Live KW 26 (geplant), aktuelle Prognose KW 26 (on track).   │
│    Dann Möglichkeit für Post-Go-Live Support + NIS2-Compliance.    │
│                                                                      │
│ [Briefing in Notizen kopieren] [Call-Notizen starten]              │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Komponenten:**
- `BriefingHeader` — Titel mit Name + Zeit
- `ContextBox` — Kurzkontext (Kunde, Projekt-Status, Beziehung, Alerts)
- `TalkingPoints` — Nummerierte Agenda-Punkte, klickbar
- `CautionBox` — Dinge die Thomas vorsichtig sein sollte
- `FAQSection` — "Deine Fragen" — Antworten auf typische Fragen
- `ActionButtons` — "In Notizen kopieren", "Call-Notizen starten"

**Daten-Quellen (Copilot aggregiert):**
- Opportunity + Project (SAP-Migration Details)
- Contact-History (Letzter Kontakt, Signal-Geschichte)
- Account-Data (Zahlungsverhalten, offene Rechnungen)
- Signal-Feed (NIS2-Compliance Signal)
- Competitive-Intelligence (Deloitte-Wettbewerb)

**AI-Interaktion:**
- Copilot liest aus den Datenquellen
- Generiert Smart-Summaries für Talking Points
- Beantwortet häufige Fragen (z.B. "Offene Rechnungen?")
- Optional: Generiert eine "Call-Notizen-Template" für nach dem Call

**Verhalten "Briefing in Notizen kopieren":**
1. Copilot-Text wird in Thomas' Notes-App/Notion/CRM kopiert
2. Thomas kann Notizen während des Calls aktualisieren

**Verhalten "Call-Notizen starten":**
1. Startet eine leere Notiz-Canvas für diesen Call
2. Thomas kann während/nach dem Call Notizen eingeben
3. Nach Call: Notizen werden am Opportunity gepostet (für Katrin zu sehen)

**Mobile-Spezifika:**
- Full-Screen oder Modal
- Swipe-Down zum Schließen
- Copy-Buttons: Easy-Access zum Clipboard

**Design-Token:**
- Briefing Background: `--charcoal` (#111111)
- Context Box: `--bg-secondary` (heller)
- Talking Points: `--consultry-coral` (#BF5347) für Nummern
- Caution Box: `--warning-yellow` (#FFC107) Border + Background

---

## Phase D: Abend-Review (Desktop, 17:00–18:00)

**Kontext:** Thomas im Büro, vor Feierabend, checkt nochmal alles

**Verhalten:**
1. Cockpit öffnen → KPIs seit morgen checken
2. Action-List durchgehen → Was konnte heute entschieden werden?
3. Pipeline-Überblick → Hat sich etwas bewegt?
4. Forecast-Check → Liegen wir im Quartalsziel?
5. Kapazitätsblick → Wer ist bald frei?

Optional: Tablet-Review (Forecast vor Board-Meeting) — später, abends zu Hause.

---

---

# Journey 13: Financial Intelligence Deep-Dive

**Thomas als Entscheider für Profitabilität, Forecast, Staffing-Auslastung.**

**Dauer:** 1x pro Woche, 30 Minuten
**Geräte:** Desktop (Primary), optional Tablet
**AI-Interaktion:** Copilot generiert Insights, Thomas exploratief

**Kritikalität:** HOCH — Thomas trackt P&L und braucht Echtzeit-Profitabilitätstransparenz

---

## [J13-S1] Financial Intelligence Dashboard (Thomas, Desktop)

**Kontext:** Thomas am Schreibtisch, 1x pro Woche für 30 Min (z.B. Freitag 17:00)

**Dashboard-Layout:**

```
┌──────────────────────────────────────────────────────────────────────┐
│ FINANCIAL INTELLIGENCE · Thomas Weber              [Cmd+K]           │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ ┌─ DECKUNGSBEITRAG (Echtzeit) ──────────────────────────────────┐   │
│ │                                                                │   │
│ │ Gesamt-DB1: 27% (Ziel: >25%)  🟢 ok                          │   │
│ │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 27%                             │   │
│ │                                                                │   │
│ │ Aggregation nach:                                             │   │
│ │ [Nach Berater] [Nach Kunde] [Nach Service Line] [Nach Projekt]│   │
│ │                                                                │   │
│ │ Top Projekte (DB1):                                          │   │
│ │  1. RetailCorp SAP-Mig.     28%     480K€                   │   │
│ │  2. MedTech SAP-Impl.       26%     350K€ (nach Change Req.) │   │
│ │  3. FinServ Upgrade         24%     220K€                    │   │
│ │  4. Pharma Consulting       22%     180K€ (⚠️ unter Ziel)   │   │
│ └────────────────────────────────────────────────────────────────┘   │
│                                                                      │
│ ┌─ UTILIZATION MANAGEMENT ──────────────────────────────────────┐   │
│ │                                                                │   │
│ │ Aktuelle Auslastung: 78% (Ziel: 80%)                         │   │
│ │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 78%                     │   │
│ │                                                                │   │
│ │ Berater auf Bench (diese Woche verfügbar):                   │   │
│ │  • Dirk (5W): SAP-Core, verfügbar ab KW 20                  │   │
│ │  • Clara (2W): SAP-FI, verfügbar ab KW 18                   │   │
│ │  • Tim (3W): SAP-Tech, verfügbar sofort                     │   │
│ │                                                                │   │
│ │ Passende Opportunities für Bench:                            │   │
│ │  → FinServ (braucht Tim, Clara) — Staffing-Konflikt mit     │   │
│ │     RetailCorp? [Resolve]                                    │   │
│ └────────────────────────────────────────────────────────────────┘   │
│                                                                      │
│ ┌─ REVENUE FORECAST ────────────────────────────────────────────┐   │
│ │                                                                │   │
│ │ Q2 2026 Forecast: 2.8M€ (Ziel: 2.7M€)  🟢 +4%               │   │
│ │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 104%   │   │
│ │                                                                │   │
│ │ Szenario-Modelle:                                            │   │
│ │  Best Case (alle Opportunities gewinnen):   3.4M€            │   │
│ │  Expected (70% Win-Rate):                   2.8M€ ← Current │   │
│ │  Worst Case (50% Win-Rate):                 2.3M€            │   │
│ │                                                                │   │
│ │ Pipeline-Gewichtung (nach Wahrscheinlichkeit):               │   │
│ │  • Opportunities in "Freigabe": +100K€ (RetailCorp)         │   │
│ │  • Opportunities in "Qualifizierung": +180K€ (3 Opps)       │   │
│ │  • Opportunities in "Prospect": +220K€ (6 Opps, <40%)       │   │
│ └────────────────────────────────────────────────────────────────┘   │
│                                                                      │
│ ┌─ CASH-FLOW-PROGNOSE ──────────────────────────────────────────┐   │
│ │                                                                │   │
│ │ Nächste 12 Wochen — Fakturierung & Zahlungseingang:         │   │
│ │                                                                │   │
│ │ W 18: +85K€ (RetailCorp Invoice)                            │   │
│ │ W 19: +120K€ (MedTech Invoice) — aber Ø 30T Zahlungsziel   │   │
│ │ W 20: +45K€ (FinServ Invoice)                               │   │
│ │ W 21: +180K€ (RetailCorp zahlungs ein, MedTech zahlungs ein)│   │
│ │ ...                                                           │   │
│ │                                                                │   │
│ │ Zahlungsverzug-Risiken: 0 (alle Kunden zahlen pünktlich)   │   │
│ └────────────────────────────────────────────────────────────────┘   │
│                                                                      │
│ ┌─ MARGIN-EROSION EARLY WARNING ────────────────────────────────┐   │
│ │                                                                │   │
│ │ 🟡 Pharma Consulting: DB1 22% (unter 25%-Ziel)              │   │
│ │    Grund: Scope-Creep (nicht verrechnet), Junior-Staffing   │   │
│ │    Aktion: Change Request generieren? [Ja] [Nein] [Review]  │   │
│ │                                                                │   │
│ │ 🟢 RetailCorp: DB1 28% (gut)                                │   │
│ │ 🟢 MedTech: DB1 26% (nach Change Req. ok)                   │   │
│ └────────────────────────────────────────────────────────────────┘   │
│                                                                      │
│ [Detailed Report exportieren]  [Board-Präsentation vorbereiten]     │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Komponenten:**

1. **Deckungsbeitrag-Karte:**
   - Gesamt-DB1 mit Trend (ist es über/unter Ziel?)
   - Toggles für verschiedene Aggregations-Level (Berater, Kunde, Service Line, Projekt)
   - Top-Projekte mit DB1, Volumen, Flaggen

2. **Utilization Management:**
   - Aktuelle Auslastung (%) mit Trend
   - Bench: Liste verfügbarer Berater + Verfügbarkeit
   - Smart-Match: Welche Bench-Berater passen zu welchen Opportunities?

3. **Revenue Forecast:**
   - Q2-Prognose vs. Ziel
   - Szenario-Modelle: Best / Expected / Worst Case
   - Pipeline-Gewichtung nach Wahrscheinlichkeit

4. **Cash-Flow-Prognose:**
   - 12-Wochen-Outlook
   - Fakturierungs- + Zahlungseingangsrhythmus
   - Zahlungsverzug-Risikobewertung

5. **Margin-Erosion Early Warning:**
   - Projekte unter 25%-Ziel
   - Grund (Scope-Creep, Senior-Staffing, etc.)
   - Change-Request-Suggestion

**Daten-Quellen:**
- Time-Tracking (Auslastung, Projektstunden)
- Opportunity-DB (Pipeline, Win-Rate)
- Billing-System (Rechnungen, Zahlungsverhalten)
- Projekt-DB (Kosten, Margins)
- Historical-Data (saisonale Muster, Forecast-Accuracy)

**AI-Interaktion (Copilot):**
- Echtzeit-Profitabilitätsrechnung (DB1 pro Projekt)
- Margin-Erosion-Erkennung (Schwellenwert: <25%)
- Forecast-Generierung (multifaktoriell: laufende Projekte, Pipeline, saisonale Muster)
- Smart-Bench-Matching (Verfügbare Berater vs. Opportunities)
- Change-Request-Suggestion (wenn Projekt unter Ziel droht)

**Verhalten "Change Request generieren":**
1. Copilot schlägt vor: "Pharma Consulting hat 15% Scope-Creep. Change Request generieren?"
2. Thomas tippt "Ja" → Change Request wird vorgeneriert
3. Thomas kann editieren/kommentieren
4. Change Request wird an PM (Klaus) und Kunde (Pharma) gesendet

**Verhalten "Detailed Report exportieren":**
1. Thomas kann einen "Financial Deep-Dive Report" als PDF/Excel exportieren
2. Mit allen Details: Projekt-Profitabilität, Utilization, Forecast, Szenarien
3. Optional: "Board-Präsentation vorbereiten" — generiert PowerPoint-Slides

**Mobile-Spezifika:**
- Financial Dashboard auf Smartphone: Reduziert auf Top-Metriken
- Tap auf Metrik → Öffnet Detail-Dashboard

**Design-Token:**
- KPI-Card: `--charcoal` (#111111)
- Good (>25%): `--success-green` (#4CAF50)
- Warning (20-25%): `--warning-yellow` (#FFC107)
- Alert (<20%): `--alert-red` (#FF4444)

---

---

# Journey 10: Vertrags-Review & Contract Intelligence

**Thomas als Contract Reviewer für Risiko-Klauseln, regulatorische Compliance.**

**Dauer:** 1x pro Woche, 15 Minuten
**Geräte:** Desktop (Primary)
**AI-Interaktion:** Copilot markiert Klauseln (rot/gelb/grün), Thomas reviewt

**Kritikalität:** HOCH — Thomas trägt Haftungsrisiko für Verträge

---

## [J10-S1] Vertrags-Canvas mit Klausel-Review

**Kontext:** Thomas in seinem Kalender: "Vertrags-Review". Oder: Ein Kundenentwurf ist eingegangen, @Thomas wird getaggt.

**Vertrags-Canvas-Layout:**

```
┌──────────────────────────────────────────────────────────────────────┐
│ VERTRAGS-CANVAS · RetailCorp AG SAP-Migration        [Cmd+K]        │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ ┌─ VERTRAGS-METADATEN ──────────────────────────────────────────┐   │
│ │                                                                │   │
│ │ Typ: Dienstvertrag (Consulting)                              │   │
│ │ Gegenpartei: RetailCorp AG (Einzelhandel, 2.500 MA)          │   │
│ │ Kontakt: Dr. Weber (CFO), Jens Müller (Procurement)          │   │
│ │ Vertragsform: Rahmenvertrag + Einzelabrufe                   │   │
│ │ Version: v4 (3 Redline-Runden abgeschlossen)                 │   │
│ │ Status: ⚠️ Wartend auf Thomas' Review                         │   │
│ │ Termin: Unterzeichnung bis 8. April (3 Tage!)               │   │
│ │                                                                │   │
│ └────────────────────────────────────────────────────────────────┘   │
│                                                                      │
│ ┌─ KLAUSEL-ÜBERSICHT ───────────────────────────────────────────┐   │
│ │                                                                │   │
│ │ GRÜN (Standard-Klauseln, ok):                                │   │
│ │  ✅ Geltungsdauer: 12 Monate + 2 auto-Renewals              │   │
│ │  ✅ Kündigungsfrist: 30 Tage zum Ende Laufzeit              │   │
│ │  ✅ Preisgleitklausel: VPI-gebunden, max 3% Anpassung      │   │
│ │  ✅ Datenschutz: GDPR-konform, LVR-Anhang beigefügt         │   │
│ │                                                                │   │
│ │ GELB (Abweichung, aber akzeptabel):                          │   │
│ │  ⚠️ Haftung: begrenzt auf 12-Monats-Umsatz (vs. unserem      │   │
│ │    Standard: 6-Monats-Umsatz). Kunde will weniger Risiko.   │   │
│ │    [Akzeptieren] [Alternativvorschlag] [Ablehnen]           │   │
│ │                                                                │   │
│ │  ⚠️ Geheimhaltung: 3 Jahre Stillschweigepflicht (vs.        │   │
│ │    unserem Standard: 2 Jahre). Anerkannt, für Retail ok.   │   │
│ │    [Akzeptieren]                                            │   │
│ │                                                                │   │
│ │  ⚠️ Verschwiegenheit: Klausel 7.2: "Consultant darf nicht  │   │
│ │    ähnliche Projekte für Wettbewerber durchführen (12 Mo)." │   │
│ │    → Non-Compete. Ist das für dich ok? [Disqualifizierung] │   │
│ │    [Ja, ok für dieses Projekt] [Alternativvorschlag]        │   │
│ │                                                                │   │
│ │ ROT (Risiko-Klaueln, braucht Freigabe/Anpassung):           │   │
│ │  🔴 Haftungsausschluss: "Consultant haftet für Datenlecks   │   │
│ │    und Systemausfälle, auch im Falle höherer Gewalt (vis   │   │
│ │    maior)." — NICHT AKZEPTABEL                              │   │
│ │    → Verstoß gegen deutsches Recht (AGB-Gesetz)             │   │
│ │    Empfehlung: Klausel streichen oder auf "fahrlässige      │   │
│ │    Handlung" limitieren.                                      │   │
│ │    [Redline-Vorschlag akzeptieren] [Alternativtext eingeben]│   │
│ │                                                                │   │
│ │  🔴 IPR: "Alle während des Projekts erstellten Werk-        │   │
│ │    schöpfungen (Dokumentation, Code, Konfigurationen)       │   │
│ │    gehen vollständig in das Eigentum des Kunden über."       │   │
│ │    → Braucht Klarstellung: Gehört das unsere IP             │   │
│ │    (z.B. Framework-Code, Reusable Components)?               │   │
│ │    Vorschlag: "Kundeneigene Entwicklungen + Dokumentation   │   │
│ │    = Kundeneigentum. Reusable IP von Consultant = Benutzung │   │
│ │    weiterhin gestattet."                                      │   │
│ │    [Alternativvorschlag einfügen] [Konsens suchen]           │   │
│ │                                                                │   │
│ │  🔴 Schiedsverfahren: Klausel 12.1: "Alle Disputes gehen    │   │
│ │    an Arbitration unter ICC-Regeln, Ort: Zürich."            │   │
│ │    → Teuer für kleine Konflikte (ICC: min. 5K€ Gebühren).   │   │
│ │    Vorschlag: "Freundschaftliche Beilegung zuerst, dann      │   │
│ │    DIS-Arbitration (deutsche Regeln, günstiger)."            │   │
│ │    [DIS vorschlagen] [ICC akzeptieren] [Litigation]          │   │
│ │                                                                │   │
│ └────────────────────────────────────────────────────────────────┘   │
│                                                                      │
│ ┌─ REGULATORISCHE CHECKS ───────────────────────────────────────┐   │
│ │                                                                │   │
│ │ ✅ EVB-IT-Konformität: Checklist erfüllt (falls öffentliche  │   │
│ │    Ausschreibung)                                             │   │
│ │ ✅ Scheinselbständigkeit: Keine Hinweise auf ANÜ-Risiko      │   │
│ │ ✅ DSGVO: Datenverarbeitung korrekt definiert                │   │
│ │ ⚠️ Locale: Vertrag unter deutschem Recht (HGB / BGB)         │   │
│ │    Gerichtsstand: Hamburg (unser Standard)                    │   │
│ │                                                                │   │
│ └────────────────────────────────────────────────────────────────┘   │
│                                                                      │
│ ┌─ THOMAS' REVIEW ──────────────────────────────────────────────┐   │
│ │                                                                │   │
│ │ Kommentar:                                                    │   │
│ │ ┌─────────────────────────────────────────────────────────┐   │   │
│ │ │ Die roten Klauseln (Haftung + IPR + Schiedsverfahren)  │   │   │
│ │ │ müssen geklärt werden, bevor ich freigebe. IPR ist am   │   │   │
│ │ │ kritischsten — wir dürfen unsere Frameworks nicht       │   │   │
│ │ │ verlieren. Lass Martina einen Alternativtext schreiben. │   │   │
│ │ │ Deadline: bis Mittwoch EOD.                             │   │   │
│ │ └─────────────────────────────────────────────────────────┘   │   │
│ │                                                                │   │
│ │ [🔴 Noch nicht freigegeben — rote Klauseln klären]          │   │
│ │ [Martina benachrichtigen] [Fristen tracken]                 │   │
│ │                                                                │   │
│ └────────────────────────────────────────────────────────────────┘   │
│                                                                      │
│ TIMELINE DER VERHANDLUNG                                            │
│ ┌──────────────────────────────────────────────────────────────┐   │
│ │ V1 (mpl Entwurf)    31. März   → RetailCorp                │   │
│ │ V2 (RetailCorp)     2. April   ← mit 7 Redlines             │   │
│ │ V3 (mpl + Redlines) 3. April   → RetailCorp                │   │
│ │ V4 (RetailCorp)     5. April   ← teilweise Akzeptanz        │   │
│ │ V5 (mpl Klärungen)  heute      ← 🔴 Wartet auf Thomas      │   │
│ │ Ziel-Signatur       8. April   (in 3 Tagen!)               │   │
│ │                                                              │   │
│ └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│ [Martina benachrichtigen: "rote Klauseln klären, Deadline Mi"]      │
│ [Kunde kontaktieren: "3 Tage bis Signatur, wie geht es voran?"]     │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Komponenten:**

1. **Vertrags-Metadaten:**
   - Typ, Gegenpartei, Kontakte, Version, Status, Termin

2. **Klausel-Übersicht (nach Ampel-Farbcode):**
   - 🟢 GRÜN: Standard-Klauseln (ok, keine Action)
   - 🟡 GELB: Abweichungen (akzeptabel oder Alternativvorschlag)
   - 🔴 ROT: Risiko-Klauseln (braucht Freigabe oder Anpassung)

   Für jede Klausel:
   - Klausel-Text (gekürzt)
   - Einschätzung (Standard vs. Abweichung vs. Risiko)
   - Für Gelb/Rot: Action-Buttons (Akzeptieren, Alternativvorschlag, Ablehnen)

3. **Regulatorische Checks:**
   - DSGVO, EVB-IT, ANÜ, lokale Gesetze

4. **Review-Kommentar:**
   - Thomas' Kommentar + Deadline für Klärungen
   - Status: "Noch nicht freigegeben" / "Freigegeben"

5. **Verhandlungs-Timeline:**
   - Versionenverlauf (wer, wann, was)
   - Ziel-Signaturdatum

**Daten-Quellen:**
- Contract-Intelligence-Engine: Analysiert Klauseln, Risiko-Scoring
- Historical-Contracts: Benchmark gegen bisherige Verträge
- Regulatory-DB: DSGVO, EVB-IT, ANÜ Regeln

**AI-Interaktion (Copilot):**
- Automatische Analyse eingehender Kundenentwürfe
- Rot/Gelb/Grün-Markierung mit Erklärung
- Alternativvorschläge (z.B. "Statt ICC-Arbitration: DIS")
- Benchmark gegen historische Verträge
- Regulatorische Compliance-Checks

**Verhalten "Alternativvorschlag":**
1. Copilot generiert einen Alternativtext
2. Thomas kann editieren/akzeptieren
3. Alternativtext wird zu "Redline" für nächste Runde
4. Versand an Kunde (über Martina/Katrin)

**Verhalten "Martina benachrichtigen":**
1. Thomas klickt → Martina (Legal/Contracts-Lead) erhält Task
2. Task: "Rote Klauseln klären, Deadline Mittwoch EOD"
3. Martina schreibt Alternativtexte, schickt an Katrin zur Koordination

**Mobile-Spezifika:**
- Vertrags-Canvas auf Smartphone: Reduziert auf Klausel-Summary
- Tap auf Klausel → Öffnet Detail + Action-Buttons

**Design-Token:**
- 🟢 Grün: `--success-green` (#4CAF50)
- 🟡 Gelb: `--warning-yellow` (#FFC107)
- 🔴 Rot: `--alert-red` (#FF4444)
- Klausel-Text: Monospace (für Klarheit)

---

---

# Fehlende Journeys für Thomas

**Thomas hat THE MOST fehlende/unterentwickelte Journeys.** Diese sollten priorisiert werden:

---

## Missing Journey 1: Morning Cockpit Flow (08:00–08:30)

**Status:** Teilweise vorhanden (Journey 12), aber ohne detaillierte KPI-Definition

**Szenario:**
Thomas kommt ins Büro, macht sich Kaffee, setzt sich hin. In den nächsten 30 Minuten muss er wissen:
1. **Auslastung diese Woche:** Sind wir bei 80%? Zu gering?
2. **Pipeline-Veränderung:** Was ist seit gestern dazugekommen/verloren gegangen?
3. **Risiko-Flaggen:** Welche Projekte sind 🔴 Critical oder 🟡 At Risk?
4. **Meine Aktionen heute:** Welche Freigaben/Entscheidungen brauchen meine Aufmerksamkeit?
5. **Meeting-Vorbereitung:** Vor meinem 10:00-Call mit Dr. Weber — was muss ich wissen?

**Screens benötigt:**
- [J12-S1] **Cockpit Dashboard** — 4–6 KPI-Karten (Auslastung, Pipeline, DB1, Projekte, Bench) + Action-List (P0/P1/P2-Alerts)
- [J12-S1.5] **KPI-Detail-Views** (Optional) — Falls Thomas auf eine KPI-Karte tippt, öffnet sich ein Detail-Dashboard
  - Auslastung: Nach Berater, Service Line, Projekt (welche Teams sind über/unter 80%?)
  - Pipeline: Nach Opportunity-Stage, Volumen, Timeline
  - DB1: Nach Projekt, Kunde, Berater (welche sind unter 25%-Ziel?)
- [J12-S2] **Copilot-Briefing vor Meeting** — "Was muss ich zu Dr. Weber wissen?" (bereits vorhanden)

**AI-Interaktion:**
- Copilot berechnet KPIs in Echtzeit (nicht gecacht)
- Anomalie-Detection: Sind Auslastung oder DB1 plötzlich abgesunken?
- Smart-Alerts: "3 Berater sind diese Woche >90% ausgelastet, 2 sind <50%. Ausgleich möglich?"

**Design-Anforderungen:**
1. **Cockpit muss auf einen Blick funktionieren** — 4–6 KPI-Karten, Anomalie-Highlighting, keine Tabellen
2. **KPI-Karten sind klickbar** — Tap öffnet Detail-Dashboard
3. **Alerts sind priorisiert** — P0 rot + sofort, P1 orange, P2 grau
4. **Mobile-Cockpit** — Reduziert auf Top-3 KPIs + Top-3 Alerts

---

## Missing Journey 2: Financial Intelligence Deep-Dive (1x/Woche, 30 Min)

**Status:** Erwähnt in Personas aber kein detailliertes Screen-Walkthrough

**Szenario:**
Thomas führt donnerstags oder freitags eine 30-Minuten "Financial Review" durch. Er braucht:
1. **Echtzeit-DB1 pro Projekt:** Welche Projekte sind über/unter 25%-Ziel?
2. **Forecast für Q2:** Liegen wir im 3x-Pipeline-Ziel?
3. **Utilization-Prognose:** Basierend auf Pipeline + aktuellen Projekten, wo sind wir in 4 Wochen?
4. **Bench-Matching:** Diese 3 Berater sind verfügbar — welche Opportunities passen?
5. **Margin-Erosion-Warning:** Pharma-Projekt droht unter 25% zu sinken — Change Request generieren?

**Screens benötigt:**
- [J13-S1] **Financial Intelligence Dashboard** (siehe oben detailliertes Layout)
  - Deckungsbeitrag-Karte (mit Aggregations-Toggle)
  - Utilization-Karte (mit Bench-Matching)
  - Revenue-Forecast (mit Best/Expected/Worst-Case-Szenarien)
  - Cash-Flow-Prognose (12-Wochen-Outlook)
  - Margin-Erosion-Early-Warning (Projekte unter Ziel)
- [J13-S2] **Detailed Projekt-Profitabilität** (Optional) — Falls Thomas auf ein Projekt tippt
  - Volumen, Kosten, Margin (DB1)
  - Staffing-Details (wer arbeitet, Stundensatz, Auslastung)
  - Timeline (Beginn, Prognose, Go-Live)
  - Change Requests (offene Scope-Erweiterungen)
- [J13-S3] **Change Request Generieren** — Falls Projekt unter Ziel droht
  - Template für Change Request (wird vorgeneriert)
  - Thomas kann editieren/kommentieren
  - Versand an PM + Kunde

**AI-Interaktion:**
- Copilot berechnet Echtzeit-Profitabilität (DB1 pro Projekt)
- Forecast generieren: Multifaktoriell (laufende Projekte, Pipeline, saisonale Muster, historische Accuracy)
- Szenario-Modelle: Best/Expected/Worst Case
- Margin-Erosion-Erkennung: Proaktive Warning wenn Projekt unter 25% droht
- Smart-Bench-Matching: Verfügbare Berater + Ihre Skills vs. Opportunities in Pipeline
- Change-Request-Suggestion: "Pharma-Projekt hat Scope-Creep, Margin -5%. Change Request generieren?"

**Design-Anforderungen:**
1. **Aggregations-Toggle** — Sicht nach Berater, Kunde, Service Line, Projekt
2. **Forecast-Visualisierung** — Nicht nur Tabellen, auch Trendcharts
3. **Szenario-Modelle** — Best/Expected/Worst nebeneinander
4. **Bench-Matching ist proaktiv** — Nicht "ich suche eine Opportunity", sondern "hier sind 3 Berater verfügbar, passt zu RetailCorp"

---

## Missing Journey 3: Contract Review & Contract Intelligence (1x/Woche, 15 Min)

**Status:** Erwähnt in PRD aber kein detailliertes Screen-Walkthrough

**Szenario:**
Thomas erhält wöchentlich Kundenentwürfe oder muss bestehende Verträge reviewen. Er braucht:
1. **Klausel-Triage:** Welche Klauseln sind Grün (ok), Gelb (abweichend), Rot (Risiko)?
2. **Risiko-Scoring pro Klausel:** Was sind die Risiken? (Haftung, IPR, Schiedsverfahren, etc.)
3. **Alternativvorschläge:** Copilot generiert bessere Formulierungen
4. **Regulatorische Checks:** DSGVO, EVB-IT, ANÜ, lokale Gesetze
5. **Verhandlungs-Tracking:** Wer hat Redlines eingereicht? Wann ist Signatur-Deadline?

**Screens benötigt:**
- [J10-S1] **Vertrags-Canvas mit Klausel-Review** (siehe oben detailliertes Layout)
  - Vertrags-Metadaten (Typ, Gegenpartei, Version, Status, Termin)
  - Klausel-Übersicht (Rot/Gelb/Grün mit Action-Buttons)
  - Regulatorische Checks (DSGVO, EVB-IT, ANÜ)
  - Verhandlungs-Timeline (Versionenverlauf)
- [J10-S2] **Klausel-Detail-Review** (Optional) — Falls Thomas auf eine Klausel tippt
  - Vollständiger Klausel-Text
  - Risiko-Erklärung
  - Alternativvorschlag (von Copilot generiert)
  - Thomas kann kommentieren/freigeben/ablehnen
- [J10-S3] **Redline-Dialog mit Kunde** — Wenn Abweichung nötig
  - Versionsverlauf (wer hat was eingereicht)
  - Kommentar-Thread
  - Status (agreed / disputed / pending)

**AI-Interaktion:**
- Automatische Analyse eingehender Kunden-Vertragsentwürfe
- Rot/Gelb/Grün-Markierung mit Erklärung und Alternativvorschlag
- Benchmark gegen bisherige Verträge (haben wir ähnliches schon akzeptiert?)
- Regulatory-Checks: DSGVO, EVB-IT, ANÜ, lokale Besonderheiten (DE/AT/CH)
- Redline-Vorschläge mit besseren Formulierungen
- Hinweis auf Risiken: "Diese Haftungsausschluss-Klausel verstoßt gegen deutsches Recht (AGB-Gesetz)"

**Design-Anforderungen:**
1. **Ampel-System** — 🟢/🟡/🔴 ist sofort klar
2. **Klausel-Kontext** — Thomas sieht nicht nur "Haftung limitiert", sondern auch "begrenzt auf 12-Monats-Umsatz vs. unserem Standard 6-Monats-Umsatz"
3. **Historischer Benchmark** — "Haben wir schon akzeptiert? Unter welchen Bedingungen?"
4. **Deadline-Tracking** — Signatur-Frist ist prominent angezeigt

---

## Missing Journey 4: Staffing-Konflikt-Auflösung (Ad-hoc)

**Status:** Erwähnt in Personas aber kein detailliertes Screen-Walkthrough

**Szenario:**
Maria (Practice Lead) hat einen Konflikt: Zwei Projekte wollen denselben Berater. Thomas muss entscheiden.

**Beispiel:**
- **RetailCorp** (Katrin) braucht Markus für SAP-Migration, 6 Monate, Start KW 20
- **FinServ** (Klaus) braucht Markus für SAP-Upgrade, 3 Monate, Start KW 18
- **Konflikt:** Beide brauchen Markus, aber nicht gleichzeitig. FinServ startet 2 Wochen früher.

**Screens benötigt:**
- [J2-S5] **Staffing-Konflikt-Card** (Mobile)
  - Problem: "Markus ist für RetailCorp und FinServ gefragt"
  - Timeline: "FinServ KW 18-20, RetailCorp KW 20-26 → Overlap KW 18-20"
  - Kontext: Deal-Volumen, Kundenwert, Markus' Effizienz auf beiden
  - Maria's Empfehlung: "Markus effektiver auf RetailCorp, Tim kann FinServ machen (weniger ideal aber machbar)"
  - Options:
    - [Markus auf RetailCorp (Maria's Empfehlung)]
    - [Markus auf FinServ]
    - [Tim auf FinServ (Hybrid)]
    - [Senior-Berater auf FinServ finden]
- [J2-S5.5] **Impact-Analyse** (vor Thomas' Entscheidung)
  - Volumen-Impact: RetailCorp 480K€, FinServ 220K€ → RetailCorp ist wichtiger
  - Margin-Impact: Markus auf RetailCorp: 1.600€/Tag, Tim auf FinServ: 1.200€/Tag → Margin sinkt um 3%
  - Relationship-Impact: FinServ ist Bestandskunde, RetailCorp ist Neu
  - Copilot-Empfehlung: "Markus auf RetailCorp + Tim auf FinServ. Margin-Verlust: 3% (aber akzeptabel für Bestandskunden-Pflege)"

**AI-Interaktion:**
- Maria taggt @Thomas im Workforce-Modul
- Copilot sammelt Kontext: Beide Opportunities, beide Berater, Skills-Match
- Copilot generiert Impact-Analyse (Volumen, Margin, Beziehung)
- Copilot schlägt beste Lösung vor
- Thomas entscheidet → beide PMs + Maria + Markus werden benachrichtigt

**Design-Anforderungen:**
1. **Self-Contained Card** — Thomas soll nicht 5 Screens öffnen müssen
2. **Impact-Zahlen deutlich** — Volumen, Margin, Kundenwert
3. **Quick-Decision** — "Markus auf RetailCorp" sollte 1-Tap sein
4. **Alternativen** — Nicht nur eine Option, sondern mehrere möglich

---

## Missing Journey 5: Pre-Meeting Copilot Briefing (Quick, ~2 Min)

**Status:** [J12-S2] ist vorhanden, aber könnte ausgebaut werden

**Szenario:**
Thomas hat einen Kundentermin in 5 Minuten. Er öffnet schnell Consultry:
"Was muss ich zu Dr. Weber (RetailCorp CFO) wissen?"

**Briefing sollte beinhalten:**
1. **Beziehungskontext:** Wann haben wir zuletzt gesprochen? Persönliche Notizen?
2. **Projekt-Status:** SAP-Migration, ist es on track?
3. **Offene Items:** Gibt es Probleme? Scope-Creep? Zahlungsverzüge?
4. **Cross-Selling-Signale:** NIS2-Compliance — neuer Bedarf?
5. **Wettbewerb:** Arbeitet der Kunde mit anderen Anbietern?
6. **Talking Points:** Was sollte Thomas ansprechen?
7. **Vorsicht-Themen:** Was sollte Thomas NICHT vergessen?

**Screens benötigt:**
- [J12-S2] **Copilot-Briefing vor Call** (bereits vorhanden, aber ausbauen)
  - KONTEXT: Beziehung, Projekt-Status, zuletzt Kontakt
  - TALKING POINTS: Nummeriert, klickbar
  - CROSS-SELLING: Neue Opportunities (z.B. NIS2)
  - VORSICHT: Bekannte Probleme oder Sensitivitäten
  - FAQs: Häufige Fragen mit Antworten
  - [Briefing in Notes kopieren] [Call-Notizen starten]

**AI-Interaktion:**
- Copilot liest Opportunity, Project, Account, Contact-History, Signal-Feed
- Generiert Smart-Summary in <30 Sekunden
- Beantwortet häufige Fragen (offene Rechnungen? wann Go-Live?)
- Optional: Generiert "Call-Notizen-Template" für nach dem Call

**Design-Anforderungen:**
1. **Schnell lesbar** — Max. 300 Worte, klare Struktur
2. **Talking Points sind klickbar** — Tap öffnet Detail (z.B. "NIS2-Compliance" → Link zu Signal)
3. **Copy-Button** — "In Notes kopieren" für Offline-Zugriff
4. **Post-Call Integration** — Nach Call kann Thomas Notizen eingeben, die am Opportunity gepostet werden

---

## Missing Journey 6: Forecast Review vor Board Meeting (Tablet, Abends)

**Status:** Erwähnt in Persona (Tagesrhythmus: "Abends gelegentlich Tablet"), aber kein Screen-Walkthrough

**Szenario:**
Morgen ist Partner-Meeting. Thomas sitzt abends zu Hause (Tablet) und bereitet Q2-Forecast vor.

Fragen:
1. **Liegen wir im Quartalsziel?** Q2-Ziel: 2.7M€, aktuelle Prognose: 2.8M€ (104%)
2. **Szenario-Analyse:** Best/Expected/Worst Case — wie sicher ist die 2.8M€?
3. **Opportunity-Tracking:** Welche Deals sind kritisch? Können sie noch verschoben werden?
4. **Auslastungs-Prognose:** Können wir mit aktueller Pipeline die 80%-Auslastung halten?
5. **Board-Präsentation:** Kann ich diese Daten direkt präsentieren oder muss ich anpassen?

**Screens benötigt:**
- [J13-S1] **Financial Intelligence Dashboard** (optimal für Tablet)
  - Forecast-Sektion: Q2 aktuell 2.8M€, Trend: +4% vs. Ziel
  - Szenario-Slider: "Ziehen Sie den Slider, um Best/Expected/Worst zu sehen"
  - Opportunity-Gewichtung: Zeigt Top-Deals + Einnahme-Timing
  - Auslastungs-Prognose: 4-Wochen-Outlook
- [J13-S4] **Board-Präsentation vorbereiten** (Optional)
  - Copilot generiert PowerPoint-Slides (oder exportiert PDF)
  - Slides: Title, Key Metriken, Forecast, Risks, Recommendations
  - Thomas kann editieren/speichern

**AI-Interaktion:**
- Forecast berechnet in Echtzeit (nicht gecacht)
- Szenario-Modelle: Basierend auf historischer Win-Rate, Opportunity-Status, Verkaufszyklus
- Opportunity-Gewichtung: Berücksichtigt Wahrscheinlichkeit + Timing
- Board-Präsentation: Auto-generierte Slides mit Key-Insights
- Optional: Copilot könnte "Top 5 Risks" identifizieren (z.B. "RetailCorp könnte verschieben wenn Go-Live verzögert")

**Design-Anforderungen:**
1. **Tablet-optimiert** — Großer Bildschirm, Touch-friendly, nicht zu dicht
2. **Szenario-Slider** — Ziehen, um Best/Expected/Worst zu vergleichen
3. **Opportunity-Zeitleiste** — Visuell: Wann kommt welche Einnahme?
4. **Board-Export** — PowerPoint oder PDF mit 5–7 Slides

---

## Missing Journey 7: Partner-Portfolio-Übersicht (Dashboard, Weekly)

**Status:** Nicht erwähnt, aber relevant für Thomas (Managing Partner)

**Szenario:**
Thomas ist Managing Partner bei mpl Consulting. Er hat 3 Partner-Kollegen. Er sollte wissen:
1. **Kundensegmentierung:** Thomas' Top-20-Kunden, wer kümmert sich um sie?
2. **Portfolio-Größe:** Thomas owns RetailCorp, MedTech, FinServ (zusammen ~1.2M€/Jahr). Die anderen Partner zusammen ~1.5M€/Jahr.
3. **Health pro Partner:** Wer hat Probleme? Wer hat Chancen?
4. **Pipeline pro Partner:** Wer hat Momentum? Wer braucht Unterstützung?

**Screens benötigt:**
- [J7-S0] **Partner Portfolio Overview** (Dashboard)
  - Partner-Karten (4 Partner: Thomas, Partner 2, Partner 3, Partner 4)
  - Pro Partner: # Kunden, AUM (Assets Under Management), Margin, Pipeline
  - Health-Indicator: 🟢 Growing, 🟡 Stable, 🔴 Declining
  - Heatmap: Top-Kunden nach Partner
- [J7-S1] **Account-Dashboard (eigene Sektion)** — Thomas' Kunden-Übersicht
  - Top-20-Kunden mit Status, Umsatz, Health, Projekte laufend
  - Beziehungs-Status: Zuletzt Kontakt wann?
  - Churn-Risiko: Welche Kunden sind gefährdet?
  - NPS-Trend: Wie zufrieden sind die Kunden?

**AI-Interaktion:**
- Copilot aggregiert Daten pro Partner (Kunden, Umsatz, Margin, Pipeline)
- Health-Score basierend auf Churn-Risiko, NPS, Margin-Trend
- Smart-Alert: "2 deiner Top-Kunden haben >90 Tage kein Projekt" → Relationship-Erosion

**Design-Anforderungen:**
1. **Partner-Vergleich** — Wer hat beste Pipeline? Wer hat höchste Margin?
2. **Trend-Visualisierung** — Nicht nur statische Zahlen, sondern Trend (growing, stable, declining)
3. **Churn-Risk-Flaggen** — Welche Kunden sind gefährdet?
4. **Cross-Selling-Opportunities** — "MedTech hat jetzt NIS2-Projekt, RetailCorp könnte das auch brauchen"

---

## Missing Journey 8: Daily Standup / Status Update

**Status:** Nicht erwähnt, aber relevant

**Szenario:**
Thomas hat jeden Morgen um 09:00 ein kurzes Partner-Standup (15 Min). Er möchte schnell berichten:
1. **Top-Alerts von heute**
2. **Neue Opportunities**
3. **Risiken**
4. **Kapazitäts-Engpässe**

**Needed:**
- [J12-S1.5] **Standup-Export** — Button "Standup-Report für heute" → One-Page PDF mit:
  - Top-3 Alerts (P0/P1)
  - Neue Opportunities (Signale konvertiert)
  - Risiko-Projekte (🟡/🔴)
  - Kapazitäts-Status (Bench, Auslastung)

**AI-Interaktion:**
- Copilot generiert Standup-Report automatisch (kein manueller Input)
- Bündet alle Informationen aus Cockpit in einem Report

---

## Zusammenfassung: Fehlende Journeys Priorät

| Rang | Journey | Dauer | Kritikalität | Status |
|------|---------|-------|--------------|--------|
| 1 | Financial Intelligence Deep-Dive | 30 Min/Woche | SEHR HOCH | Nur Persona erwähnt |
| 2 | Contract Review & Intelligence | 15 Min/Woche | SEHR HOCH | PRD erwähnt, kein Screen |
| 3 | Staffing-Konflikt-Auflösung | Ad-hoc | HOCH | Persona erwähnt, kurz |
| 4 | Partner-Portfolio-Übersicht | 10 Min/Woche | HOCH | Nicht erwähnt |
| 5 | Forecast Review vor Board | 30 Min/Monat | MITTEL | Persona erwähnt |
| 6 | Pre-Meeting Copilot Briefing | 2 Min/Call | MITTEL | [J12-S2] vorhanden, ausbauen |
| 7 | Daily Standup Report | 5 Min/Tag | MITTEL | Nicht erwähnt |

**Recommendation:** Journeys 1–4 sollten priorisiert werden, da sie Thomas' Wochenroutine betreffen.

---

## Phase-1-Abdeckung: Thomas

Thomas' Produkterlebnis ist direkt an die Phasen gekoppelt. In Phase 1 funktioniert sein "Scan-Entscheider"-Modus. Sein "Strategie-Modus" braucht Phase 3+.

- ✅ **Cockpit/Dashboard** → Phase 1 (Basis-Dashboard)
- ✅ **Notification Center (P0/P1)** → Phase 1 (Notification Basis)
- ✅ **Opportunity Detail / Approval** → Phase 1 (Opportunity Intelligence)
- ⚠️ **Financial Intelligence** → Phase 3
- ⚠️ **Vertrags-Canvas** → Phase 2
- ⚠️ **Copilot-Briefing** → Phase 1 (Basis) / Phase 2 (voll)
- ⚠️ **Capacity Planner** → Phase 4

**Konsequenz:** Thomas kann in Phase 1 folgende Aufgaben durchführen:
- Cockpit scannen (KPIs, Anomalien)
- Alerts bearbeiten (P0/P1 abarbeiten)
- Opportunities freigeben (Approval Cards)
- Kommentare schreiben (in Canvas und Opportunities)

Was Thomas in Phase 1 NICHT kann:
- Database-Analyse (Financial Intelligence erst Phase 3)
- Vertrags-Review und Redlining (Contract Canvas erst Phase 2)
- Forecast-Modellierung und Szenario-Analysen (Financial Planning Phase 3)
- Capacity Planning und Workforce-Optimierung (Capacity Planner Phase 4)

**Implication:** Thomas' "Scan-Entscheider"-Modus funktioniert in Phase 1. Sein "Strategie-Modus" (Forecast, Financial Analysis, Capacity Planning) beginnt erst in Phase 3. Das ist ein kritisches Timing-Risiko: Wenn Thomas in den ersten 8 Wochen nicht die strategischen Werkzeuge bekommt, geht er zurück zu Excel und PowerBI — und testet Consultry nur auf "Approval-Card-Ebene", nicht auf "Strategie-Ebene".

**Risiko-Mitigation:**
- Phase 1: Mockups der kommenden Financial Intelligence und Contract Canvas zeigen (um Thomas' Vertrauen in die Roadmap zu aufzubauen)
- Phase 2: Earliest möglicher Go-Live für Contract Canvas (Thomas braucht das 1x/Woche)
- Phase 3: Financial Intelligence als "Unlock" — wenn das nicht exzellent ist, verliert Thomas Vertrauen in die ganze Dateninfrastruktur

---

---

## Cross-References zu anderen Personas

### Handoffs → Katrin (Director of Business Development)
- Thomas gibt Freigabe → Katrin sendet Angebot (Journey 1)
- Thomas genehmigt Change Request → Stefan kommuniziert an Katrin → Katrin koordiniert mit Kunde (Journey 3)
- Thomas fragt Copilot-Briefing vor Call → kann Katrin helfen, Gesprächspunkte vorzubereiten

### Handoffs → Stefan (Senior Consultant / Projektleiter)
- Stefan eskaliert Projekt-Risiko → Thomas genehmigt Change Request (Journey 3)
- Stefan reportet Auslastungs-Probleme → Thomas greift ein (Staffing-Konflikt)
- Thomas gibt Directive → Stefan implementiert

### Handoffs → Maria (Practice Lead)
- Maria meldet Staffing-Konflikt → Thomas entscheidet (Journey 2-S5)
- Maria rapportiert Bench-Status → Thomas nutzt für Capacity Planning (Journey 13)
- Thomas fragt "Wer hat Cloud-Expertise?" → Maria matched Berater zu Opportunities

### Handoffs → Martina (Legal / Contract Lead)
- Thomas reviewt Vertrag → bittet Martina, Alternativtexte zu schreiben (Journey 10)
- Thomas genehmigt Change Request → Martina bereitet Kundenkommunikation vor

---

## Thomas' Erfolgs-KPIs für Consultry

| KPI | Ziel | Tracking-Frequency | Owner |
|-----|------|-------------------|-------|
| **Freigabe-Durchlaufzeit** | <4 Stunden | Daily | Thomas |
| **Cockpit-Adoption** | 5x/Woche | Weekly | Product |
| **Financial Review** | 1x/Woche, <30 Min | Weekly | Thomas |
| **Contract Review** | 1x/Woche, <15 Min | Weekly | Thomas |
| **Copilot-Usage** | 3x/Woche | Weekly | Product |
| **Forecast Accuracy** | ±15% | Monthly | Thomas |
| **Alert Fatigue** | <3 true positives/day | Daily | Product |

---

**Diese User Journey ist abgeschlossen und bereit für die Implementierung.**

**Nächste Schritte:**
1. Design-Team: Screens für fehlende Journeys (Financial Intelligence, Contract Intelligence, Staffing-Konflikt)
2. Engineering: API-Endpoints für Echtzeit-KPI-Berechnung
3. Product: Copilot-Prompts für Briefing, Financial-Analysis, Contract-Intelligence
4. UX-Testing: Mit Thomas oder ähnlicher Persona validieren

---

**Version 1.1**
31. März 2026
*Companion: [Consultry Target Personas v1.0](../Consultry-Target-Personas-v1.0.md), [Consultry Design System v1.3](../../design/Consultry-Design-System-v1.3.md)*

---

## Design-Anbindung (v1.1)

**Thomas' Screen Specs (erstellt):**

| Journey-Screen | Screen Spec | Status |
|---------------|-------------|--------|
| [J12-S1] Cockpit Dashboard | `screen-specs/platform/cockpit-dashboard.md` | ✅ Erstellt |
| [J12-S2] Copilot Briefing | `screen-specs/ai-experience/copilot-sidebar.md` + `screen-specs/mobile/mobile-copilot-briefing.md` | ✅ Erstellt |
| [J1-S6] Approval (Mobile) | `screen-specs/mobile/mobile-approval-card.md` | ✅ Erstellt |
| [J3-S2] Alert (Mobile) | `screen-specs/mobile/mobile-alert-detail.md` | ✅ Erstellt |
| [J1-S3a] Kommentar | `screen-specs/deal/opportunity-detail.md` | ✅ Erstellt |
| [J13-S1] Financial Dashboard | `screen-specs/delivery/financial-dashboard.md` | Ausstehend (Tier 7) |
| [J10-S1] Vertrags-Canvas | `screen-specs/ai-experience/vertrags-canvas.md` | Ausstehend (Tier 6) |

**Thomas' Kern-Komponenten:**

| Komponente | Spec | Thomas' Nutzung |
|-----------|------|----------------|
| Copilot Panel | `component-specs/ai-interaction/copilot-panel.md` | Morgen-Briefing, Ad-hoc-Fragen |
| Bento Grid | `component-specs/composition/bento-grid.md` | Cockpit Dashboard (4-col) |
| Score Displays | `component-specs/data-display/score-displays.md` | Match-Review, Pipeline-Scores |
| Bottom Nav Bar | `component-specs/navigation/bottom-navigation-bar.md` | Mobile: Cockpit, Approvals, Pipeline, AI |
| Bottom Sheet | `component-specs/composition/bottom-sheet.md` | Mobile Approval Detail |

**v1.1 Changelog:** Design System Referenz v1.2→v1.3. Screen Spec + Component Spec Links hinzugefuegt.

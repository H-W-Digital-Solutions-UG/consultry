# Consultry — Target User Personas

## Handlungsrelevante Personas für UX Design & User Journey Definition

**Version:** 1.0
**Datum:** 31. März 2026
**Kontext:** IT- und SAP-Beratung im DACH-Raum (50–200 Berater)
**Companion:** [Consultry PRD v3.0](./Consultry-PRD-v3.0-Final.md)
**Zweck:** Diese Personas treiben UI-Entscheidungen, Flow-Priorisierung, Informationsarchitektur und AI-Interaktionsdesign.

---

## Lesehinweis

Jede Persona definiert:

1. **Steckbrief** — Rolle, Unternehmen, Arbeitskontext
2. **Tagesrhythmus** — Wann, wo, wie lange, auf welchem Gerät
3. **Primäre Surfaces & AI-Interaktionsmuster** — Wo verbringt sie Zeit, wie interagiert sie mit AI
4. **Jobs to be Done** — Was muss erledigt werden, nach Tageszeit
5. **Frustrationen & Abbruchpunkte** — Was treibt sie weg
6. **Die eine Key Journey** — Der Flow der überzeugt oder verliert
7. **Persönliche Erfolgsmetriken** — Was zählt für sie
8. **Design-Implikationen** — Konkrete UI/UX-Entscheidungen die aus dieser Persona folgen

---

## Persona 1: Katrin Engel — BD-Leiterin

### Steckbrief

| | |
|---|---|
| **Rolle** | Head of Business Development |
| **Unternehmen** | mpl Consulting GmbH — SAP-Beratung, 85 Berater, Hauptsitz München, Büros in Wien und Zürich |
| **Berichtet an** | Managing Partner (Thomas) |
| **Team** | 2 BD-Manager, 1 Werkstudent |
| **Alter** | 38 |
| **Erfahrung** | 12 Jahre B2B-Vertrieb, davon 6 in IT-/SAP-Beratung |
| **Technik-Affinität** | Hoch — nutzt Tools intensiv, aber nur wenn sie schneller ist als manuell |
| **Spezialität** | Mittelstands-Kunden im Handel und in der Fertigung |

### Tagesrhythmus

| Zeit | Ort | Gerät | Aktivität |
|---|---|---|---|
| 07:30–08:00 | Zuhause / S-Bahn | Smartphone | Signal-Feed prüfen, Alerts checken, Tagesplanung |
| 08:00–10:00 | Büro | Desktop (2 Screens) | Opportunity-Qualifizierung, Engagement-Briefs prüfen, Pipeline reviewen |
| 10:00–12:00 | Büro / Calls | Desktop + Headset | Kundengespräche, interne Abstimmung zu Angeboten |
| 12:00–13:00 | Unterwegs | Smartphone | Quick-Checks, Freigaben beantworten, LinkedIn |
| 13:00–16:00 | Büro | Desktop | Angebotserstellung (Canvas), Staffing-Abstimmung, Kampagnen |
| 16:00–17:30 | Büro | Desktop | Pipeline-Hygiene, Berichte, Vorbereitung nächster Tag |
| Gelegentlich Abends | Zuhause | Tablet/Smartphone | Angebotsentwurf finalisieren wenn Deadline |

**Consultry-Zeit:** 4–6 Stunden/Tag (Power User)

### Primäre Surfaces & AI-Interaktion

| Surface | Nutzungshäufigkeit | Typische Aktion |
|---|---|---|
| **Signal-Feed** (Market Intelligence) | Jeden Morgen, 15–20 Min | Neue Signale bewerten, beste in Opportunities konvertieren |
| **Opportunity Intelligence** | Mehrmals täglich, 60–90 Min | Opportunities qualifizieren, Engagement-Briefs lesen, Pipeline managen |
| **Angebots-Canvas** | 2–3x pro Woche, 60–120 Min | Proposals iterativ mit AI erstellen und verfeinern |
| **Staffing & Matching** | 2–3x pro Woche, 30 Min | Team-Vorschläge prüfen, Varianten vergleichen |
| **Outreach** | 1–2x pro Woche, 30 Min | Kampagnen aufsetzen, Follow-ups prüfen |
| **Dashboard** | Morgens + Abends, 5 Min | Pipeline-KPIs, offene Aktionen |
| **Command Bar** | 10–15x pro Tag | Schnelle Abfragen: "Zeig mir verfügbare SAP-MM-Berater ab Juni" |

**AI-Präferenz:**
- **Primär: Command Bar** — Katrin denkt schneller als sie klickt. "Erstell Engagement-Brief für RetailCorp" ist ihr natürlicher Modus.
- **Sekundär: AI Canvas** — Für Angebote. Sie will iterieren, nicht akzeptieren: "Kürze die Methodik", "Ersetze Markus durch Lisa und zeig die Margin".
- **Copilot** nutzt sie als kontextuelles Nachschlagewerk: "Warum empfiehlst du diesen Berater?"
- **Chat** nur für explorative Recherche: "Wie haben wir bei den letzten Retail-Deals abgeschnitten?"

### Jobs to be Done

**Morgens (07:30–08:00) — "Was hat sich über Nacht geändert?"**
- Neue Signale scannen (CTO-Wechsel, Hiring, Ausschreibungen)
- Priorisierte Alerts abarbeiten (Stale Opportunities, Angebotsfreigaben)
- Entscheiden: welches Signal wird heute zur Opportunity?

**Vormittags (08:00–12:00) — "Opportunities qualifizieren und vorbereiten"**
- Engagement-Brief für neue Opportunity lesen
- Warm-Paths identifizieren: "Kennt jemand den neuen CIO?"
- Staffing-Vorschläge für die Top-3-Opportunities sichten
- Calls vorbereiten: Kontext auf einen Blick

**Nachmittags (13:00–16:00) — "Angebote bauen und rausschicken"**
- Proposal auf dem Canvas erstellen: Struktur, Team, Pricing
- Thomas taggen für Freigabe: "@Thomas — Pricing RetailCorp ok?"
- Outreach-Kampagnen konfigurieren und starten
- Follow-up-Sequenzen prüfen

**Abends (16:00–17:30) — "Pipeline aufräumen, morgen vorbereiten"**
- Stale Opportunities schließen oder reaktivieren
- Conversion-Zahlen checken
- Morgen-Briefing vorbereiten

### Frustrationen & Abbruchpunkte

| Frustration | Auslöser | Konsequenz |
|---|---|---|
| **"Ich brauche 3 Klicks für eine Info die ich sofort brauche"** | Zu tiefe Navigation, keine Command Bar | Wechselt zu Excel/Gedächtnis |
| **"Die AI schlägt irrelevante Berater vor"** | Matching ignoriert aktuelle Projektsituation | Verliert Vertrauen, macht es manuell |
| **"Ich kann das Angebot nicht schnell genug anpassen"** | Canvas reagiert langsam oder versteht Prompts nicht | Exportiert nach Word, arbeitet dort weiter |
| **"Ich weiß nicht was aus meinem Outreach geworden ist"** | Kein Feedback-Loop: gesendet → Stille | Fragt per Slack, Tracking bricht ab |
| **"Thomas hat nicht freigegeben und ich weiß nicht warum"** | Approval-Queue ohne Kontext oder Push | Eskaliert per Anruf |
| **"Zu viele Alerts, ich ignoriere alle"** | >20 Notifications am Morgen ohne Priorisierung | Alert-Fatigue → missst echte P0-Alerts |

### Key Journey: Signal → Qualifizierte Opportunity → Angebot

> **DAS ist der Flow der Katrin überzeugt oder verliert.**

```
Signal erkannt (CTO-Wechsel bei RetailCorp)
  │
  ├── Katrin sieht Signal im Morgen-Feed (Mobile, 07:45)
  │   └── Match-Score 87/100 — Kompetenz-Fit SAP Retail: hoch
  │
  ├── 1 Tap: "Als Opportunity anlegen"
  │   └── System generiert Engagement-Brief automatisch
  │
  ├── Katrin öffnet Brief am Desktop (08:15)
  │   ├── Unternehmenskontext, identifizierte Bedarfe
  │   ├── 3 Entscheider mit Beziehungspfaden
  │   │   └── "Thomas kennt den CFO über BITKOM 2024"
  │   ├── Wettbewerber-Einschätzung
  │   └── Top-3 Berater-Vorschläge mit Verfügbarkeit
  │
  ├── Katrin kommentiert: "@Thomas — kennst du den neuen CTO?"
  │   └── Thomas antwortet direkt auf dem Brief
  │
  ├── Katrin öffnet Angebots-Canvas (14:00)
  │   ├── AI generiert Proposal-Struktur in 30 Sek.
  │   ├── Team: Markus (SAP-Retail), Lisa (Change), Tim (Data)
  │   ├── 3 Varianten: Lean / Standard / Premium
  │   ├── Katrin: "Kürze Methodik. Ersetze Tim, zeig Margin."
  │   └── AI passt an, Preis + Margin aktualisieren live
  │
  ├── Export als PDF im Corporate Design
  │
  └── Outreach: personalisierte E-Mail mit CTO-Referenz
      └── Consent geprüft, gesendet via SendGrid
```

**Gesamtzeit mit Consultry:** ~3 Stunden (Signal bis Angebot)
**Ohne Consultry:** 2–4 Tage über 5+ Tools

### Persönliche Erfolgsmetriken

| Metrik | Was sie trackt | Ziel |
|---|---|---|
| Pipeline-Wert | Offene Opportunities in € | Wachsend, min. 3x Quartalsziel |
| Signal-zu-Opportunity-Rate | Wie viele Signale werden Opportunities | >30% |
| Angebots-Durchlaufzeit | Tage von Opportunity bis Angebot raus | <1 Tag |
| Win-Rate | Gewonnene / Abgegebene Angebote | >25% |
| Meeting-Conversion | Outreach → erstes Meeting | >15% |

### Design-Implikationen für Katrins Workflows

1. **Command Bar ist Mission-Critical.** Muss innerhalb 200ms reagieren, Fuzzy-Matching verstehen, Kontext-aware sein. Katrin tippt "RetailCorp" und erwartet sofort alles zu RetailCorp.

2. **Signal-Feed muss mobiltauglich und scannbar sein.** Morgens in der S-Bahn: große Touch-Targets, Match-Score prominent, 1-Tap "Als Opportunity anlegen".

3. **Canvas muss Prompt-Iteration unterstützen, nicht nur Generierung.** Katrin generiert einmal und iteriert 5–10 Mal. Undo, Abschnitt-spezifische Prompts, Live-Pricing-Updates.

4. **Approval-Flow braucht Push + Kontext.** Wenn Thomas freigeben soll, muss er den vollen Kontext in der Notification sehen — nicht "Freigabe angefordert" sondern "RetailCorp, SAP-Migration, 480K€, Margin 28%, Team Markus+Lisa+Tim".

5. **Outreach-Feedback muss sichtbar sein.** "E-Mail geöffnet nach 2h" als Update im Opportunity-Feed, nicht in einem separaten Outreach-Report.

---

## Persona 2: Thomas Weber — Managing Partner

### Steckbrief

| | |
|---|---|
| **Rolle** | Managing Partner / Geschäftsführer |
| **Unternehmen** | mpl Consulting GmbH |
| **Verantwortung** | P&L, Top-20-Kunden, strategische Entscheidungen, finale Angebotsfreigaben |
| **Team** | 3 Partner, 8 Practice Leads, 85 Berater gesamt |
| **Alter** | 52 |
| **Erfahrung** | 25 Jahre SAP-Beratung, 15 Jahre Führung, Netzwerk-Mensch |
| **Technik-Affinität** | Mittel — nutzt Tools wenn sie ihm Zeit sparen, misstraut Komplexität |
| **Spezialität** | C-Level-Beziehungen, strategische Deals, SAP S/4HANA Transformation |

### Tagesrhythmus

| Zeit | Ort | Gerät | Aktivität |
|---|---|---|---|
| 07:00–07:30 | Zuhause | Smartphone | Alerts prüfen, kritische Freigaben |
| 08:00–08:30 | Büro | Desktop | Cockpit-Check: Auslastung, Pipeline, Risiken |
| 08:30–12:00 | Büro / Calls / Reisen | Smartphone/Laptop | Kundenmeetings, Partner-Abstimmungen, Strategie |
| 12:00–13:00 | Unterwegs | Smartphone | Freigaben, Quick-Kommentare |
| 13:00–17:00 | Büro / Extern | Laptop | Kundenpräsentationen, Vertragsverhandlungen |
| 17:00–18:00 | Büro | Desktop | Tagesreview, Pipeline-Überblick, Entscheidungen |
| Abends gelegentlich | Zuhause | Tablet | Forecast-Review vor Board-Meetings |

**Consultry-Zeit:** 1–2 Stunden/Tag (Entscheider, nicht Operator)

### Primäre Surfaces & AI-Interaktion

| Surface | Nutzungshäufigkeit | Typische Aktion |
|---|---|---|
| **Dashboard / Cockpit** | 2x täglich, je 10 Min | KPIs: Auslastung, Pipeline, Margin, Risiko-Flags |
| **Notification Center** | 5–10x täglich, je 1–2 Min | P0/P1-Alerts: Freigaben, Eskalationen, Scope-Creep |
| **Opportunity Detail** | 3–5x pro Woche, 15 Min | Engagement-Brief prüfen, Kommentare, Freigabe |
| **Angebots-Canvas** (Review) | 2x pro Woche, 20 Min | Pricing prüfen, Kommentare zur Teamaufstellung |
| **Financial Intelligence** | 1x pro Woche, 30 Min | DB-Analyse, Forecast, Utilization |
| **Vertrags-Canvas** | 1x pro Woche, 15 Min | Risiko-Klauseln prüfen, Freigabe erteilen |

**AI-Präferenz:**
- **Primär: Copilot** — Thomas will kontextuelle Zusammenfassungen: "Was muss ich zu RetailCorp wissen, bevor ich den CFO anrufe?"
- **Sekundär: Dashboard** — Er scannt, nicht sucht. Anomalien müssen ihm ins Auge springen.
- **Command Bar** selten — er tippt ungern, klickt lieber auf vorbereitete Aktionen.
- **Canvas** nur als Reviewer — er generiert nicht selbst, sondern kommentiert und gibt frei.

### Jobs to be Done

**Morgens (07:00–08:30) — "Was brennt, was braucht mich?"**
- P0-Alerts: Projekt-Eskalation? Vertragsfrist? Kundenbeschwerde?
- Freigaben: Angebote, Staffing-Entscheidungen, Budgetüberschreitungen
- Cockpit: Auslastung diese Woche, Pipeline-Veränderung seit gestern

**Tagsüber (08:30–17:00) — "Kundenbeziehungen und Deals"**
- Vor Kundengespräch: Copilot-Briefing in 30 Sekunden
- Angebotsfreigabe: Pricing + Team + Margin auf einen Blick
- Vertrags-Review: nur die roten Klauseln, nicht den ganzen Vertrag
- Staffing-Konflikte lösen: "Markus auf RetailCorp oder MedTech?"

**Abends (17:00–18:00) — "Wo stehen wir, was entscheide ich morgen?"**
- Pipeline-Review: was hat sich bewegt?
- Forecast-Check: liegen wir im Quartalsziel?
- Kapazitätsblick: wer ist bald frei, passt das zur Pipeline?

### Frustrationen & Abbruchpunkte

| Frustration | Auslöser | Konsequenz |
|---|---|---|
| **"Ich muss mich durch 5 Screens klicken für eine Antwort"** | Keine Cockpit-View, zu granulare UI | Fragt Katrin per Telefon |
| **"Das System schickt mir 20 Notifications am Tag"** | Alert-Fatigue, keine Priorisierung | Ignoriert alle Alerts → misst P0 |
| **"Ich soll ein Angebot freigeben aber sehe nur einen Button"** | Kein Kontext in der Approval-Notification | Ruft Katrin an statt im System freizugeben |
| **"Die Zahlen im Dashboard stimmen nicht mit meiner Excel"** | Dateninkonsistenz, Berechnungslogik unklar | Verliert Vertrauen, geht zurück zu Excel |
| **"Auf dem Handy kann ich nichts Sinnvolles machen"** | Mobile UI ist Desktop-Miniatur | Wartet bis er am Rechner ist → Verzögerung |

### Key Journey: Morgen-Briefing → Freigabe → Kundenanruf

```
Thomas öffnet Consultry (07:15, iPhone)
  │
  ├── Notification Center: 1x P0 (rot), 3x P1 (orange)
  │   ├── P0: "MedTech-Projekt: Scope-Creep erkannt, 20% über Plan"
  │   │   └── 1 Tap → Projekt-Detail mit Copilot-Zusammenfassung
  │   │       └── "Change-Request-Template bereit. Soll ich den PL alerten?"
  │   │           └── Thomas: "Ja, und cc mich auf den Kundenanruf"
  │   │
  │   └── P1: "Angebotsfreigabe RetailCorp — 480K€, Margin 28%"
  │       └── Thomas sieht: Team, Pricing, Margin, Referenzen
  │           └── Kommentar: "Tagessatz Markus auf 1.600€. Dann Freigabe."
  │
  ├── Am Desktop (08:15): Cockpit-Check
  │   ├── Auslastung: 78% (Ziel 80%) — gelb
  │   ├── Pipeline: +180K€ diese Woche
  │   ├── Risiko: 1 Projekt gelb (MedTech, bereits adressiert)
  │   └── 2 Berater frei ab KW 22 — passt zur Pipeline?
  │
  └── Vor Kundenanruf (10:00): Copilot-Briefing RetailCorp
      ├── "Was muss ich wissen vor dem Anruf?"
      ├── Copilot: Letzte Interaktion, offene Opportunity, Team-Vorschlag
      │   └── "CFO Dr. Weber — du kennst ihn über BITKOM 2024"
      └── Thomas ist in 2 Minuten vorbereitet
```

### Persönliche Erfolgsmetriken

| Metrik | Was er trackt | Ziel |
|---|---|---|
| Gesamt-Auslastung | Fakturierbare Quote aller Berater | >80% |
| Pipeline / Quartalsziel-Ratio | Genug Pipeline für Zielerreichung? | >3x |
| DB1 pro Projekt | Profitabilität über Benchmark? | >25% |
| Forecast Accuracy | Wie genau ist seine Prognose? | ±15% |
| Freigabe-Durchlaufzeit | Wie schnell bearbeitet er Approvals? | <4 Stunden |

### Design-Implikationen für Thomas' Workflows

1. **Cockpit muss auf einen Blick funktionieren.** 4–6 KPI-Karten, Anomalie-Highlighting (rot/gelb), keine Tabellen. Thomas scannt in 30 Sekunden.

2. **Notifications müssen vorpriorisiert und kontextreich sein.** P0 = rot, sofort, mit Action-Button. P1 = orange, mit genug Kontext für Sofort-Entscheidung. Alles andere: Tages-Digest.

3. **Approval-Cards müssen self-contained sein.** Thomas will in der Notification freigeben, nicht erst die Opportunity öffnen. Kontext (Deal-Wert, Margin, Team, Risiken) muss inline sichtbar sein.

4. **Mobile muss für Entscheidungen funktionieren, nicht für Erstellung.** Freigeben, Kommentieren, Alerts beantworten — ja. Canvas bearbeiten — nein.

5. **Copilot-Briefings vor Meetings sind ein Killer-Feature.** "Briefing für meinen 10-Uhr-Call mit Dr. Weber" muss in 30 Sekunden eine brauchbare Zusammenfassung liefern.

---

## Persona 3: Stefan Kraus — Senior Consultant / Projektleiter

### Steckbrief

| | |
|---|---|
| **Rolle** | Senior Consultant & Projektleiter SAP |
| **Unternehmen** | mpl Consulting GmbH |
| **Berichtet an** | Practice Lead SAP (fachlich), Standortleiter München (disziplinarisch) |
| **Team** | Leitet aktuell 2 Projekte (4 bzw. 3 Berater) |
| **Alter** | 34 |
| **Erfahrung** | 9 Jahre SAP-Beratung, zertifiziert in S/4HANA und ABAP, Projektleitung seit 3 Jahren |
| **Technik-Affinität** | Sehr hoch — baut eigene Excel-Makros, nutzt CLI-Tools |
| **Spezialität** | SAP S/4HANA Migration, Retail-Branche, Data Migration |

### Tagesrhythmus

| Zeit | Ort | Gerät | Aktivität |
|---|---|---|---|
| 08:00–08:30 | Kundenbüro / Hotel / Remote | Laptop | Projekt-Status prüfen, Daily vorbereiten |
| 08:30–09:00 | Kundenbüro | Laptop | Daily Standup mit Projektteam |
| 09:00–12:00 | Kundenbüro | Laptop | Facharbeit: Spezifikation, Konfiguration, Workshops |
| 12:00–13:00 | Unterwegs | Smartphone | Staffing-Anfragen beantworten, Verfügbarkeit updaten |
| 13:00–17:00 | Kundenbüro | Laptop | Facharbeit, Kundenmeetings, Dokumentation |
| 17:00–17:30 | Hotel / Zug | Smartphone | Quick-Updates, Knowledge-Agent-Anfrage |
| Reise-Abende | Hotel | Laptop | Projektdokumentation, Knowledge-Beiträge |

**Consultry-Zeit:** 30–60 Min/Tag (Delivery-fokussiert, Consultry ist Arbeitsmittel, nicht Haupttool)

### Primäre Surfaces & AI-Interaktion

| Surface | Nutzungshäufigkeit | Typische Aktion |
|---|---|---|
| **Projekt-Dashboard** | Täglich, 10 Min | Milestones, Budget, Health-Score |
| **Knowledge-Agent** (Chat) | 3–5x pro Woche, je 5 Min | "SAP-Datenmigration Retail Checkliste" |
| **Eigenes Profil** | 1x pro Monat, 10 Min | Neues Projekt eintragen, Skills aktualisieren |
| **Staffing-Anfragen** | 2–3x pro Monat, 5 Min | Anfrage sichten, annehmen/ablehnen |
| **Notification Center** | 3–5x täglich, 1 Min | Staffing-Requests, Projekt-Alerts |
| **Collaboration** (Kommentare) | Täglich, 5 Min | Auf Opportunity/Projekt kommentieren |

**AI-Präferenz:**
- **Primär: Knowledge-Agent (Chat)** — Stefan sucht konkrete Antworten: "Haben wir eine Cutover-Checkliste für SAP-Retail?" Er will Synthese, nicht Dokument-Links.
- **Sekundär: Copilot** — Auf dem Projekt-Dashboard: "Was sind die Top-3-Risiken gerade?"
- **Command Bar** für Navigation: "Geh zu MedTech-Projekt"
- **Canvas** nur beim Angebot-Support, wenn Katrin ihn einbindet.

### Jobs to be Done

**Morgens (08:00–08:30) — "Wo stehen meine Projekte?"**
- Milestone-Status: im Plan oder Abweichung?
- Budget-Verbrauch vs. Fortschritt
- Offene Risiken und Blocker

**Tagsüber sporadisch — "Schnelle Antworten aus dem Firmenwissen"**
- "Wie haben wir bei MedTech die Cutover-Phase geplant?"
- "Gibt es ein Template für SAP-Berechtigungskonzepte?"
- "Wer hat Erfahrung mit SD-MM-Integration im Retail?"

**Mittags (12:00–13:00) — "Administrative Pflichten"**
- Staffing-Anfrage beantworten (Kontext lesen, annehmen/ablehnen)
- Verfügbarkeit updaten (Projekt verlängert sich → KW 22 statt 20)

**Nach Projektabschluss — "Wissen zurückgeben"**
- Projektdokumentation hochladen
- Knowledge-Bausteine freigeben
- Profil automatisch anreichern lassen

### Frustrationen & Abbruchpunkte

| Frustration | Auslöser | Konsequenz |
|---|---|---|
| **"Ich hab 30 Minuten, nicht 3 Stunden"** | Tool erwartet intensive Pflege | Nutzt es nicht, Daten veralten |
| **"Die Knowledge-Suche liefert Müll"** | Schlechte Semantik, nur Keyword-Match | Fragt Kollegen per Slack |
| **"Ich bekomme Staffing-Anfragen ohne Kontext"** | Nur "Projekt X braucht dich ab KW 20" | Ignoriert oder fragt zurück → Verzögerung |
| **"Mein Profil ist veraltet aber ich hab keine Lust es zu pflegen"** | Manuelle Profil-Updates sind mühsam | Profil wird unbrauchbar fürs Matching |
| **"Das Projekt-Dashboard zeigt nicht was ich sehen will"** | Generisches Dashboard statt PL-Perspektive | Baut eigene Excel-Tracker |

### Key Journey: Knowledge-Anfrage → Synthetisierte Antwort → Wiederverwendung

```
Stefan sitzt beim Kunden, braucht eine SAP-Datenmigrations-Checkliste
  │
  ├── Command Bar: "SAP Datenmigration Retail Checkliste"
  │   └── Knowledge-Agent antwortet in 15 Sekunden:
  │       ├── Synthetisierte Checkliste aus 3 früheren Projekten
  │       ├── Quellen: MedTech (Q2/2025), FashionGroup (Q4/2024), AutoParts (Q1/2025)
  │       ├── Experten-Hinweis: "Stefan, du hast 2 davon selbst gemacht"
  │       └── "Frag Michael K. zur Cutover-Strategie — er hat das bei FashionGroup optimiert"
  │
  ├── Stefan passt die Checkliste für RetailCorp an
  │   └── Speichert als neuen Knowledge-Baustein
  │
  └── 6 Monate später fragt Lisa die gleiche Frage
      └── Stefans Baustein ist Teil der Antwort
```

### Persönliche Erfolgsmetriken

| Metrik | Was er trackt | Ziel |
|---|---|---|
| Projekt-Health | Alle Projekte grün? | 100% grün oder adressiert |
| Budget-Einhaltung | Aufwand vs. Kalkulation | ±10% |
| Kundenzufriedenheit | NPS / Pulse-Check-Scores | >75 |
| Profil-Completeness | Wie aktuell ist sein Profil? | >85% |
| Knowledge-Beiträge | Bausteine die er zurückgibt | 2+/Quartal |

### Design-Implikationen für Stefans Workflows

1. **Minimale Pflege, maximale Auto-Anreicherung.** Profil muss sich durch Projektabschlüsse und Dokument-Uploads automatisch aktualisieren. Nie manuell Skills eintippen.

2. **Knowledge-Agent muss Synthese liefern, nicht Dokument-Links.** "Hier ist eine Checkliste basierend auf 3 Projekten" ist 10x wertvoller als "3 Dokumente gefunden".

3. **Staffing-Anfragen brauchen vollen Kontext inline.** Projekt-Scope, Rolle, Zeitraum, Kunde, Margin — alles auf einer Card. Annehmen/Ablehnen mit einem Tap.

4. **Projekt-Dashboard muss PL-spezifisch sein.** Nicht die gleiche View wie Thomas. Stefan will: Milestone-Timeline, Budget-Burndown, Team-Verfügbarkeit, offene Risiken.

5. **Mobile für Quick-Actions, Desktop für Tiefe.** Staffing-Anfrage beantworten, Verfügbarkeit updaten, Knowledge-Frage stellen — alles mobile-first.

---

## Persona 4: Lisa Tran — Consultant

### Steckbrief

| | |
|---|---|
| **Rolle** | Consultant SAP Change Management |
| **Unternehmen** | mpl Consulting GmbH |
| **Berichtet an** | Practice Lead SAP (fachlich), Standortleiter Wien (disziplinarisch) |
| **Erfahrung** | 3 Jahre Beratung, Schwerpunkt organisatorisches Change Management bei SAP-Transformationen |
| **Alter** | 28 |
| **Technik-Affinität** | Hoch — Digital Native, erwartet intuitive UX |
| **Spezialität** | Stakeholder-Kommunikation, Workshop-Facilitation, User-Adoption |

### Tagesrhythmus

| Zeit | Ort | Gerät | Aktivität |
|---|---|---|---|
| 08:30–09:00 | Kundenbüro / Remote | Laptop | Projekt-Check, Tagesplanung |
| 09:00–17:00 | Kundenbüro | Laptop | Workshops, Stakeholder-Gespräche, Dokumentation |
| 17:00–17:30 | Zug / Remote | Smartphone | Consultry-Check: Profil, Notifications, Staffing |
| Gelegentlich Abends | Zuhause | Laptop | Weiterbildung, Profil pflegen |

**Consultry-Zeit:** 15–30 Min/Tag (Leichtnutzerin — Consultry muss zu ihr kommen, nicht umgekehrt)

### Primäre Surfaces & AI-Interaktion

| Surface | Nutzungshäufigkeit | Typische Aktion |
|---|---|---|
| **Eigenes Profil** | 1–2x pro Monat, 15 Min | Skills aktualisieren, Entwicklungsziele prüfen |
| **Knowledge-Agent** | 2–3x pro Woche, 5 Min | "Change Management Workshop-Format für SAP-Rollout" |
| **Notification Center** | 1–2x täglich, 2 Min | Staffing-Anfragen, @Mentions |
| **Entwicklungs-Dashboard** | 1x pro Monat, 10 Min | Skill-Gaps, nächste Karrierestufe, empfohlene Weiterbildungen |
| **Collaboration** | 2–3x pro Woche, 5 Min | Kommentare auf Projekten/Opportunities lesen |

**AI-Präferenz:**
- **Primär: Onboarding/Profil-Agent** — Dialog-gesteuert: "Füge mein neues PROSCI-Zertifikat hinzu"
- **Sekundär: Knowledge-Agent** — Schnelle Wissensabfragen für die tägliche Arbeit
- Command Bar und Canvas nutzt sie kaum — nicht ihre Domäne

### Jobs to be Done

**Wöchentlich — "Bin ich sichtbar und aktuell?"**
- Profil aktuell halten (neues Zertifikat, neues Projekt)
- Entwicklungsziele prüfen: "Was fehlt mir noch für Senior Consultant?"

**Bei Bedarf — "Firmenwissen nutzen"**
- Workshop-Templates finden
- Erfahrungsberichte aus ähnlichen Projekten
- Experten im Netzwerk identifizieren

**Sporadisch — "Staffing und Karriere"**
- Staffing-Anfrage prüfen: Passt das Projekt zu meiner Entwicklung?
- Verfügbarkeit kommunizieren

### Frustrationen & Abbruchpunkte

| Frustration | Auslöser | Konsequenz |
|---|---|---|
| **"Mein Profil ist veraltet und ich merke es nicht"** | Keine proaktiven Erinnerungen | Matching-Qualität sinkt |
| **"Ich finde nicht was ich suche"** | Knowledge-Agent versteht Kontext nicht | Fragt Stefan direkt |
| **"Die Staffing-Anfrage sagt mir nichts"** | Kein Kontext, nur Projektname und Datum | Fragt zurück → Verzögerung |
| **"Ich weiß nicht wo ich in meiner Entwicklung stehe"** | Kein Soll/Ist-Abgleich sichtbar | Fühlt sich orientierungslos |

### Key Journey: Proaktives Profil-Update nach Projektabschluss

```
Lisa schließt ein Change-Management-Projekt bei MedTech ab
  │
  ├── System erkennt Projektabschluss
  │   └── Notification: "Dein MedTech-Projekt ist abgeschlossen.
  │        Möchtest du dein Profil aktualisieren?"
  │
  ├── Lisa tippt: "Ja, füge PROSCI-Zertifizierung und
  │    SAP-Rollout-Erfahrung Pharma hinzu"
  │   └── Agent aktualisiert: normalisiert Skills,
  │       verknüpft mit Projekt, erhöht Proficiency-Level
  │
  ├── Profil-Completeness: 72% → 85%
  │   └── Agent: "Dir fehlt noch ein Retail-Projekt für Senior.
  │        RetailCorp sucht gerade Change Management."
  │
  └── Lisa sieht Staffing-Anfrage für RetailCorp
      └── Voller Kontext: Scope, Team, Zeitraum, Karriere-Fit
          └── 1 Tap: "Interesse anmelden"
```

### Persönliche Erfolgsmetriken

| Metrik | Was sie trackt | Ziel |
|---|---|---|
| Profil-Completeness | Wie vollständig ist mein Profil? | >85% |
| Skill-Gap zum nächsten Level | Was fehlt mir? | Gap kleiner werden |
| Kundenfeedback | Bin ich gut? | NPS >70 |
| Knowledge-Nutzung | Finde ich was ich brauche? | >80% erfolgreiche Suchen |

### Design-Implikationen für Lisas Workflows

1. **Proaktive Nudges statt Pflege-Pflicht.** System muss Lisa erinnern: "Projekt abgeschlossen — Profil aktualisieren?" Nie: "Dein Profil ist unvollständig."

2. **Profil-Updates per Dialog, nicht per Formular.** "Füge mein PROSCI-Zertifikat hinzu" ist besser als 5 Formularfelder.

3. **Entwicklungs-Dashboard als Karriere-Kompass.** Soll/Ist visuell, nächste Schritte konkret, Staffing-Empfehlungen die zur Karriere passen.

4. **Minimaler Footprint.** Consultry darf für Lisa nie nach "noch einem Tool" aussehen. 15 Minuten pro Tag maximal. Alles über 3 Klicks ist zu viel.

---

## Persona 5: Martina Hofer — Office Managerin / Backoffice

### Steckbrief

| | |
|---|---|
| **Rolle** | Office Managerin / Operations Coordinator |
| **Unternehmen** | mpl Consulting GmbH |
| **Berichtet an** | Managing Partner (Thomas) |
| **Team** | 1 Assistenz, arbeitet eng mit BD (Katrin) und Finance |
| **Alter** | 45 |
| **Erfahrung** | 18 Jahre Office Management, davon 8 in Beratungshäusern |
| **Technik-Affinität** | Mittel — kennt Excel besser als jeder Berater, aber misstraut neuen Tools |
| **Spezialität** | Datenqualität, Berichte, Vertragsverwaltung, Berater-Onboarding-Koordination |

### Tagesrhythmus

| Zeit | Ort | Gerät | Aktivität |
|---|---|---|---|
| 08:00–08:30 | Büro | Desktop (2 Screens) | E-Mails, System-Status, Datenimport |
| 08:30–12:00 | Büro | Desktop | Berater-Daten pflegen, Berichte generieren, Verträge koordinieren |
| 12:00–13:00 | Büro | Desktop | Angebotssupport, Formatting, Export |
| 13:00–17:00 | Büro | Desktop | Vertragsverwaltung, Onboarding-Vorbereitung, Reporting |

**Consultry-Zeit:** 2–4 Stunden/Tag (Desktop-only, keine mobile Nutzung)

### Primäre Surfaces & AI-Interaktion

| Surface | Nutzungshäufigkeit | Typische Aktion |
|---|---|---|
| **Settings / Admin** | Täglich, 30 Min | Benutzerverwaltung, Integrationen prüfen, Datenimport |
| **Berater-Profile** (Admin-Sicht) | Täglich, 60 Min | Daten prüfen, Onboarding-Begleitung, Lücken füllen |
| **Vertragsverwaltung** | 3–5x pro Woche, 30 Min | Vertragsstatus prüfen, Dokumente zuordnen, Fristen tracken |
| **Reporting / Export** | 2–3x pro Woche, 30 Min | Auslastungsberichte, Pipeline-Reports, Partner-Dashboards exportieren |
| **Angebots-Support** | 2–3x pro Woche, 20 Min | CVs formatieren, Angebote exportieren, Referenzen zusammenstellen |
| **Financial Intelligence** | 1x pro Woche, 30 Min | Rechnungsläufe vorbereiten, DB-Reports ziehen |

**AI-Präferenz:**
- **Primär: Keine bewusste AI-Nutzung** — Martina will Zuverlässigkeit, nicht Magie. Sie nutzt AI indirekt (auto-generierte CVs, Profil-Vorschläge), aber denkt nicht in "AI-Features".
- **Sekundär: Strukturierte Bulk-Aktionen** — "Exportiere alle Berater-CVs für Practice SAP als PDF"
- Sie meidet Canvas und Chat — zu unvorhersehbar. Formulare und Listen sind ihr Modus.

### Jobs to be Done

**Morgens (08:00–08:30) — "Ist alles sauber?"**
- System-Health prüfen: Integrationen, Sync-Status
- Neue Berater-Profile prüfen: Onboarding-Status, fehlende Daten
- Importfehler beheben

**Vormittags (08:30–12:00) — "Daten pflegen, Berichte bauen"**
- Berater-Daten vervollständigen (Martina ist die Qualitäts-Garantin)
- Auslastungsberichte für Partner-Meeting vorbereiten
- Vertragsfristen-Tracking: was läuft wann aus?

**Nachmittags (13:00–17:00) — "Angebots-Support und Verträge"**
- CVs für Angebote exportieren und prüfen (Corporate Design korrekt?)
- Vertragsentwürfe an Rechtsabteilung weiterleiten
- Neuen Berater im System anlegen und Onboarding starten

### Frustrationen & Abbruchpunkte

| Frustration | Auslöser | Konsequenz |
|---|---|---|
| **"Die Daten sind nicht konsistent"** | Berater pflegen unterschiedlich, Formate inkonsistent | Manuelle Nacharbeit, Frustration |
| **"Ich kann keinen sauberen Report exportieren"** | Export-Optionen limitiert oder falsch formatiert | Baut Reports in Excel nach |
| **"Das System macht Vorschläge die ich nicht nachvollziehen kann"** | AI-Empfehlungen ohne Erklärung | Ignoriert AI, macht es manuell |
| **"Ich weiß nicht ob der Import geklappt hat"** | Kein klares Feedback bei Bulk-Operationen | Prüft alles einzeln nach |
| **"Ich muss für jeden Berater 5 Mal klicken"** | Keine Bulk-Edit-Möglichkeiten | Arbeit dauert 3x so lang |

### Key Journey: Neuen Berater onboarden

```
Martina bekommt: "Tim Schneider startet am 1. Mai"
  │
  ├── Settings → "Neuen Berater anlegen"
  │   └── Basis-Daten eingeben: Name, E-Mail, Practice, Standort, Start
  │
  ├── CV-Upload: Tim's PDF-Lebenslauf hochladen
  │   └── System extrahiert automatisch:
  │       ├── 8 Skills (normalisiert), 5 Projekte, 3 Zertifizierungen
  │       └── Martina prüft und bestätigt die Extraktion
  │
  ├── Onboarding-Checkliste wird automatisch erstellt
  │   ├── ☐ Profil vollständig (Ziel: Tag 7)
  │   ├── ☐ Mentor zugewiesen
  │   ├── ☐ Kalender synchronisiert
  │   ├── ☐ Verfügbarkeit eingetragen
  │   └── ☐ Erste Staffing-Eligibility
  │
  ├── System assigned Mentor: Sarah (basierend auf Skill-Overlap)
  │
  └── Tim bekommt Einladungsmail → Onboarding-Agent übernimmt
      └── Martina sieht Fortschritt im Admin-Dashboard
```

### Persönliche Erfolgsmetriken

| Metrik | Was sie trackt | Ziel |
|---|---|---|
| Daten-Completeness | Wie vollständig sind Berater-Profile? | >90% über alle Berater |
| Onboarding-Geschwindigkeit | Tage bis Berater produktiv im System | <7 Tage |
| Report-Genauigkeit | Stimmen die Zahlen? | 100% |
| Vertragsfrist-Compliance | Keine übersehenen Fristen | 0 Missed |

### Design-Implikationen für Martinas Workflows

1. **Bulk-Operationen sind Pflicht.** Multi-Select, Batch-Edit, Bulk-Export. "Aktualisiere Standort für alle 12 Berater in Wien" muss ein Vorgang sein, nicht 12.

2. **Tabellen-View als Standard für Admin.** Martina denkt in Listen und Spalten. Card-Views verwirren sie. Sortierbar, filterbar, exportierbar.

3. **Klare Feedback-Loops bei Imports und Bulk-Aktionen.** "12/12 Berater importiert, 0 Fehler" oder "3 Fehler — hier sind sie" mit konkreten Fix-Aktionen.

4. **AI muss erklärbar sein.** "Warum wurde dieses Skill zugeordnet?" muss beantwortbar sein. Sonst korrigiert Martina jede AI-Empfehlung manuell.

5. **Export muss perfekt sein.** PDF, DOCX, Excel — im Corporate Design, mit korrekten Seitenzahlen, Headern, Formatierung. Ein schlechter Export zerstört ihr Vertrauen.

---

## Persona 6: Dr. Klaus Müller — Externer Kunde

### Steckbrief

| | |
|---|---|
| **Rolle** | CIO / IT-Leiter |
| **Unternehmen** | RetailCorp AG — Einzelhandel, 2.500 Mitarbeiter, DACH-weit |
| **Verhältnis zu mpl** | Auftraggeber: SAP S/4HANA Migrationsprojekt, 6 Monate |
| **Alter** | 48 |
| **Technik-Affinität** | Hoch (CIO), aber null Geduld für unbekannte Tools |
| **Kontaktperson** | Stefan (Projektleiter), Thomas (Partner-Level) |

### Interaktionsmuster

| Wann | Wie | Was |
|---|---|---|
| Bei Projekt-Updates | Magic Link per E-Mail | Projekt-Dashboard prüfen |
| Bei Milestone-Abschluss | Pulse-Check per E-Mail | Feedback geben (2 Min) |
| Bei Problemen | Telefon/E-Mail mit Stefan | Eskalation |
| Quartals-Review | Meeting mit Thomas | Strategische Bewertung |

**Consultry-Zeit:** 5–10 Min pro Woche, rein passiv/reaktiv
**Gerät:** Primär Laptop (im Büro), Smartphone (unterwegs) für Quick-Checks
**Kein Account, kein Login, kein Passwort — nur Magic Link**

### Jobs to be Done

**Bei Benachrichtigung — "Wo steht mein Projekt?"**
- Ampel-Status auf einen Blick: Grün/Gelb/Rot
- Nächster Milestone: was kommt als nächstes?
- Was braucht das Projektteam von mir?

**Bei Pulse-Check — "Feedback geben ohne Aufwand"**
- 5 Fragen, 2 Minuten
- Freitext für Konkretes: "Data-Migration-Timeline macht mir Sorgen"

**Bei Eskalation — "Was ist schiefgelaufen und was wird getan?"**
- Klare Kommunikation: Problem, Impact, Maßnahme
- Nicht im Portal — per Anruf/Meeting mit Stefan/Thomas

### Frustrationen & Abbruchpunkte

| Frustration | Auslöser | Konsequenz |
|---|---|---|
| **"Ich soll mich irgendwo einloggen"** | Registration, Passwort, Account | Ignoriert das Portal komplett |
| **"Ich verstehe nicht was ich sehe"** | Zu viele Daten, kein Fokus | Schließt den Tab, ruft Stefan an |
| **"Der Link funktioniert nicht mehr"** | Magic Link abgelaufen ohne Erneuerung | Frustration, schlechter Eindruck |
| **"Ich bekomme keine Updates wenn sich was ändert"** | Nur Pull, kein Push | Fühlt sich uninformiert |

### Key Journey: Magic Link → Projektstatus → Feedback

```
Dr. Müller bekommt E-Mail:
"Ihr SAP-Migrationsprojekt hat Milestone 3 erreicht"
  │
  ├── Klick auf Magic Link
  │   └── Sofort im Client Portal (kein Login)
  │
  ├── Projekt-Dashboard:
  │   ├── Status: 🟢 On Track
  │   ├── Milestone 3 (Datenmigration Test): ✅ Abgeschlossen
  │   ├── Milestone 4 (Go-Live Preparation): 🔵 In Arbeit
  │   ├── Team: Stefan (PL), Markus, Lisa
  │   ├── Nächster Schritt: "Cutover-Planung Review am 15.5."
  │   └── Benötigte Kundenmitwirkung: "Testdaten-Freigabe bis 10.5."
  │
  ├── Pulse-Check (automatisch eingeblendet):
  │   ├── "Zufriedenheit Kommunikation?" → 4/5
  │   ├── "Zufriedenheit Fortschritt?" → 3/5
  │   └── Freitext: "Timeline Milestone 4 eng — bitte Puffer"
  │
  └── Feedback erscheint sofort beim Projektteam
      └── Copilot markiert "Timeline-Sorge" als Risiko-Signal
```

### Design-Implikationen für Dr. Müllers Experience

1. **Zero Friction Entry.** Magic Link → sofort im Portal. Kein Login, kein Onboarding, kein Tutorial. Die UI muss in 5 Sekunden verständlich sein.

2. **Ampel-Logik dominiert.** Grün/Gelb/Rot als primäres Kommunikationsmittel. Keine Prozentzahlen, keine Gantt-Charts. Simpel.

3. **Pulse-Checks müssen unter 2 Minuten dauern.** 5 Fragen max, große Touch-Targets, Freitext optional. Wenn es länger dauert, macht er es nicht.

4. **Magic Links müssen vor Ablauf erneuert werden.** Automatische Erneuerung + Erinnerung. Ein toter Link zerstört das gesamte Portal-Vertrauen.

5. **Branding muss die Beratung repräsentieren, nicht Consultry.** Dr. Müller sieht "mpl Consulting — Ihr Projektportal", nicht "Powered by Consultry". White-Label ist essentiell.

---

## Cross-Persona Interaktionsmatrix

### Wer interagiert mit wem über welche Surface?

```
              Katrin    Thomas    Stefan    Lisa    Martina    Dr.Müller
Katrin         ─        ★★★       ★★        ★       ★★          ☆
Thomas        ★★★        ─        ★★        ☆       ★           ★
Stefan        ★★        ★★         ─       ★★★      ★           ★★★
Lisa          ★         ☆        ★★★        ─       ★           ☆
Martina       ★★        ★         ★         ★        ─          ☆
Dr.Müller     ☆         ★        ★★★        ☆       ☆            ─

★★★ = täglich/intensiv  ★★ = mehrmals/Woche  ★ = gelegentlich  ☆ = selten/nie
```

### Gemeinsame Touchpoints (wo sich Personas treffen)

| Touchpoint | Beteiligte | Surface |
|---|---|---|
| **Angebotsfreigabe** | Katrin erstellt → Thomas gibt frei → Martina exportiert | Canvas → Notification → Export |
| **Staffing-Entscheidung** | Katrin braucht Team → Stefan/Lisa werden angefragt → Thomas bei Konflikten | Matching → Notification → Approval |
| **Projekt-Eskalation** | Stefan erkennt Risiko → Thomas wird alertet → Dr. Müller sieht Update | Dashboard → Alert → Client Portal |
| **Berater-Onboarding** | Martina legt an → Lisa durchläuft → Stefan wird Buddy | Admin → Onboarding-Agent → Profil |
| **Knowledge-Kreislauf** | Stefan liefert Wissen → Lisa konsumiert → Katrin nutzt in Angeboten | Upload → Knowledge-Agent → Canvas |

### Die 5 kritischen Cross-Persona-Flows

1. **Signal → Opportunity → Angebot → Freigabe → Outreach**
   Katrin + Thomas + (Stefan für Kontext)

2. **Staffing-Anfrage → Antwort → Team-Bestätigung → Kundenkommunikation**
   Katrin + Stefan + Lisa + Thomas (bei Konflikten) + Dr. Müller (über Portal)

3. **Projekt-Risiko → Alert → Eskalation → Kundenupdate**
   Stefan + Thomas + Dr. Müller

4. **Berater-Onboarding → Profil → Erstmaliges Matching**
   Martina + Lisa + (Katrin sieht Lisa erstmals im Matching)

5. **Projektabschluss → Knowledge-Rückfluss → Profil-Anreicherung → Nächster Einsatz**
   Stefan + Lisa + Knowledge-Engine + Katrin (sieht aktualisierte Profile im nächsten Matching)

---

## Surface-zu-Persona-Mapping

### Wer nutzt welche Surface wie intensiv?

| Surface | Katrin | Thomas | Stefan | Lisa | Martina | Dr.Müller |
|---|---|---|---|---|---|---|
| Dashboard/Cockpit | ★★ | ★★★ | ★ | ☆ | ☆ | ─ |
| Signal-Feed | ★★★ | ★ | ☆ | ☆ | ☆ | ─ |
| Opportunity Intelligence | ★★★ | ★★ | ★ | ☆ | ☆ | ─ |
| AI Canvas (Angebot) | ★★★ | ★★ (Review) | ★ (Input) | ☆ | ★ (Export) | ─ |
| AI Canvas (Vertrag) | ★ | ★★ | ☆ | ☆ | ★★ | ─ |
| Staffing & Matching | ★★★ | ★ (Konflikte) | ★ (Empfänger) | ★ (Empfänger) | ☆ | ─ |
| Knowledge-Agent | ★ | ☆ | ★★★ | ★★ | ☆ | ─ |
| Berater-Profil | ☆ | ☆ | ★★ (eigenes) | ★★ (eigenes) | ★★★ (alle) | ─ |
| Projekt-Dashboard | ☆ | ★★ | ★★★ | ★ | ☆ | ★★ |
| Financial Intelligence | ★ | ★★★ | ☆ | ☆ | ★★ | ─ |
| Outreach | ★★★ | ☆ | ☆ | ☆ | ★ (Support) | ─ |
| Settings / Admin | ☆ | ☆ | ☆ | ☆ | ★★★ | ─ |
| Notification Center | ★★ | ★★★ | ★★ | ★ | ★ | ─ |
| Client Portal | ─ | ─ | ─ | ─ | ─ | ★★★ |
| Command Bar | ★★★ | ★ | ★★ | ★ | ☆ | ─ |
| Collaboration | ★★ | ★★ | ★★ | ★ | ★ | ☆ (Feedback) |
| Workforce / Team Mgmt | ★ | ★★ | ★ | ★ (eigenes) | ★★★ | ─ |
| Events & Network | ★★ | ★ | ★ | ☆ | ★ | ─ |

---

## Design-Prioritäten (abgeleitet aus Personas)

### Die 10 wichtigsten UI/UX-Entscheidungen

1. **Command Bar ist Infrastruktur, nicht Feature.** Katrin und Stefan nutzen sie dutzende Male am Tag. Muss immer verfügbar, unter 200ms, und kontext-aware sein. Equivalent zu Spotlight/Alfred.

2. **Notifications müssen hierarchisch und self-contained sein.** Thomas ignoriert alles über 5 Alerts/Tag. Priorisierung (P0–P3) mit Inline-Kontext für Sofort-Entscheidungen. Approval-Cards mit vollem Kontext.

3. **Zwei fundamental verschiedene Modi: Scan vs. Deep Work.** Thomas scannt (Dashboard, Alerts). Katrin arbeitet tief (Canvas, Pipeline). Beide Perspektiven müssen gleichwertig unterstützt werden.

4. **Proaktive AI statt Pflege-Pflicht.** Lisa wird ihr Profil nie manuell pflegen. Das System muss erkennen: "Projekt abgeschlossen → Skills aktualisieren?" und per Dialog (nicht Formular) nachfragen.

5. **Tabellen-View für Admin, Card-View für Entscheider.** Martina braucht sortierbare, filterbare Listen. Thomas braucht Ampel-KPIs. Nicht die gleiche Component für beide.

6. **Mobile ist für Entscheidungen, nicht für Erstellung.** Thomas gibt frei. Stefan beantwortet Staffing-Anfragen. Katrin prüft Signale. Niemand erstellt Angebote auf dem Handy. Mobile-First = Decision-First.

7. **Client Portal ist White-Label und Zero-Friction.** Dr. Müller sieht die Beratungsmarke, nicht Consultry. Magic Link, kein Login, Ampel-Logik, Pulse-Check in 2 Minuten.

8. **Knowledge-Agent muss synthetisieren, nicht nur suchen.** Stefan will keine Dokument-Links. Er will: "Hier ist eine Checkliste aus 3 Projekten, frag Michael zur Cutover-Strategie." Synthese > Suche.

9. **Canvas-Iteration ist wichtiger als Canvas-Generierung.** Katrin generiert ein Angebot einmal und iteriert es 5–10 Mal. Undo, Abschnitt-Prompts, Live-Pricing-Updates, Varianten-Vergleich.

10. **Bulk-Operationen für Backoffice.** Martina verwaltet 85 Berater-Profile. Ohne Multi-Select, Batch-Edit und Bulk-Export ist Consultry für sie ein Rückschritt zu Excel.

---

*Consultry Target Personas v1.0 — Grundlage für User Journey Design und UI-Informationsarchitektur*

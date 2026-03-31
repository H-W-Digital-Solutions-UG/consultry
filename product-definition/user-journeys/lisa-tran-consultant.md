# Lisa Tran — Consultant SAP Change Management
## Persona-spezifische User Journeys

**Header:** Lisa Tran, Consultant SAP Change Management, 15–30 Min/Tag (Leichtnutzerin)

**Version:** 1.0
**Datum:** 31. März 2026
**Companion:** [Consultry PRD v3.0](../Consultry-PRD-v3.0-Final.md), [Target Personas v1.0](../../uploads/Consultry-Target-Personas-v1.0.md)

---

## Steckbrief Lisa Tran

| | |
|---|---|
| **Rolle** | Consultant SAP Change Management |
| **Unternehmen** | mpl Consulting GmbH, Wien |
| **Berichtet an** | Practice Lead SAP (fachlich), Standortleiter Wien (disziplinarisch) |
| **Erfahrung** | 3 Jahre Beratung, Schwerpunkt organisatorisches Change Management |
| **Alter** | 28 |
| **Technik-Affinität** | Hoch — Digital Native, erwartet intuitive UX |
| **Spezialität** | Stakeholder-Kommunikation, Workshop-Facilitation, User-Adoption |

### Arbeitskontext

**Ort:** Primär Kundenbüro (Remote), sekundär Wien-Büro
**Geräte:** Laptop (am Kundenbüro), Smartphone (Zug, schnelle Updates)
**Tagesrhythmus:**
- 08:30–09:00: Projekt-Check, Tagesplanung (Laptop)
- 09:00–17:00: Workshops, Stakeholder-Gespräche, Dokumentation (Laptop)
- 17:00–17:30: Consultry-Check: Profil, Notifications, Staffing (Smartphone)
- Gelegentlich Abends: Weiterbildung, Profil pflegen (Laptop)

**Consultry-Zeit:** 15–30 Min/Tag (Leichtnutzerin — System muss zu ihr kommen, nicht umgekehrt)

---

## Journeys in denen Lisa auftritt

### 1. **Journey 2: Staffing-Anfrage empfangen** (J2-S3 — Lisa antwortet)
### 2. **Journey 4: Onboarding** (Referenz für Lisas eigene Onboarding-Erfahrung als Consultant)
### 3. **Journey 5: Knowledge Consumption** (J5-S3 — Lisa fragt Knowledge-Agent, erhält Stefans Learnings)
### 4. **Lisas Key Journey (neu):** Proaktives Profil-Update nach Projektabschluss

---

## Lisas Primary Surfaces & AI-Interaktionsmuster

| Surface | Häufigkeit | Typische Aktion | AI-Modus |
|---|---|---|---|
| **Eigenes Profil** | 1–2x/Monat, 15 Min | Skills aktualisieren, Entwicklungsziele prüfen | Dialog-Agent |
| **Knowledge-Agent (Chat)** | 2–3x/Woche, 5 Min | "Workshop-Format für SAP-Rollout", "Change-Risiko-Mitigation" | Synthese, nicht Links |
| **Notification Center** | 1–2x täglich, 2 Min | Staffing-Anfragen, @Mentions, Profil-Updates | Push-Alerts |
| **Entwicklungs-Dashboard** | 1x/Monat, 10 Min | Skill-Gaps, nächste Karrierestufe, empfohlene Weiterbildungen | Guided Recommendations |
| **Collaboration** | 2–3x/Woche, 5 Min | Kommentare auf Projekten/Opportunities lesen, @Replies | Inline & Async |

**Primärer AI-Modus:** Onboarding/Profil-Agent (Dialog-gesteuert) + Knowledge-Agent (Synthese)
**Sekundär:** Entwicklungs-Dashboard mit automatischen Karriere-Empfehlungen
**Nicht für Lisa:** Canvas, Command Bar, Desktop-heavy Workflows

---

## Lisas Jobs to be Done

### Wöchentlich — "Bin ich sichtbar und aktuell?"
- ✅ Profil aktuell halten (neues Zertifikat, abgeschlossenes Projekt)
- ✅ Entwicklungsziele prüfen: "Was fehlt mir noch für Senior Consultant?"
- ✅ Verfügbarkeit kommunizieren (wenn Projekt endet)

### Bei Bedarf — "Firmenwissen nutzen"
- ✅ Workshop-Templates finden (schnell, während Arbeit läuft)
- ✅ Erfahrungsberichte aus ähnlichen Projekten
- ✅ Experten im Netzwerk identifizieren ("Wer hat Retail-Erfahrung?")

### Sporadisch — "Staffing und Karriere"
- ✅ Staffing-Anfrage prüfen: Passt das Projekt zu meiner Entwicklung?
- ✅ Profil-Nudge beantworten: "Dein Projekt ist abgeschlossen — Profil aktualisieren?"

---

## Lisas Frustrationen & Abbruchpunkte

| Frustration | Auslöser | Konsequenz |
|---|---|---|
| **"Mein Profil ist veraltet und ich merke es nicht"** | Keine proaktiven Erinnerungen nach Projektabschluss | Matching-Qualität sinkt, falsche Staffing-Anfragen |
| **"Ich finde nicht was ich suche"** | Knowledge-Agent versteht Kontext nicht | Fragt Stefan direkt per Slack → Verzögerung |
| **"Die Staffing-Anfrage sagt mir nichts"** | Nur Projektname und Datum, kein Kontext | Fragt zurück, muss warten → Opportunität-Verlust |
| **"Ich weiß nicht wo ich in meiner Entwicklung stehe"** | Kein Soll/Ist-Abgleich sichtbar | Fühlt sich orientierungslos, kann keine Decisions treffen |
| **"Ich muss 5 Klicks machen um eine Frage zu stellen"** | Zu tiefe Navigation | Fragt per Slack → schlechter Informationsfluss |

---

## Lisas Key Journey: Proaktives Profil-Update nach Projektabschluss

**Dauer:** ~15 Min (Lisas Beitrag) + automatische Prozesse
**Trigger:** Projektabschluss bei Kundenseite
**Outcome:** Profil auf aktuellen Stand, matchbar für nächsten Einsatz, Karriere-Insight sichtbar

---

## Journey Screen-by-Screen

### Phase A: Profil-Update Dialog (Lisa, Mobile/Desktop, 5–10 Min)

#### [LISA-J1-S1] Profil-Update Nudge

**Trigger:** System erkennt, dass Lisas Projekt MedTech (Change Management, Pharma) abgeschlossen ist.
Lisa bekommt zwei Push-Notifications:

**Mobile, Smartphone (18:00 Uhr):**
```
┌─────────────────────────────────────────┐
│ 🟢 Dein Projekt MedTech ist abgeschlossen│
│                                         │
│ Möchtest du dein Profil aktualisieren?  │
│                                         │
│ [Ja, schnell] [Später] [Überspringen]   │
│                                         │
└─────────────────────────────────────────┘
```

**Design-Details:**
- Grüne Ampel: Erfolg-Signal (nicht Alarm)
- Einfache CTA: "Ja, schnell" (erwartung: <10 Min)
- Desktop-View kann später erfolgen

**Lisas Aktion:** Tippt "Ja, schnell"

---

#### [LISA-J1-S2] Onboarding-Agent Dialog (Desktop/Laptop)

**Trigger:** Lisa folgt dem Tap oder öffnet später auf Desktop

**Layout (Dialog-Fenster oder Sidebar):**

```
┌─────────────────────────────────────────────────────────────┐
│  Dein Profil aktualisieren — Feedback zum MedTech-Projekt  │
│  Geschätzte Dauer: 5–10 Minuten                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🤖 PROFIL-AGENT                                           │
│                                                             │
│  Agent: "Hi Lisa! Dein MedTech-Projekt ist abgeschlossen. │
│  Lass mich dein Profil aktualisieren — das dauert etwa     │
│  5 Minuten und macht dich für neue Projekte sichtbar."     │
│                                                             │
│  ────────────────────────────────────────────────────────  │
│                                                             │
│  Agent: "Zuerst: Dein Projekt-Schwerpunkt war              │
│  Change Management bei einer SAP S/4HANA Migration.        │
│  Welche Rollen hast du konkret erfüllt?"                   │
│                                                             │
│  ☑ Stakeholder-Interviews & -Analyse                       │
│  ☑ Workshop-Facilitation (User-Adoption)                   │
│  ☑ Change-Risiko-Bewertung                                 │
│  ☑ Training & Dokumentation                                │
│  ☑ Go-Live-Support                                         │
│                                                             │
│  [Alle bestätigen] [Nur ausgewählte] [Anpassen]           │
│                                                             │
│  ────────────────────────────────────────────────────────  │
│                                                             │
│  Agent: "Super! Du hast auch erwähnt, dass du auf der      │
│  Branche-Seite neu warst (Pharma/Medtech). Das ist ein     │
│  Skill-Gap für dich gewesen. Hat sich das gelöst?"         │
│                                                             │
│  ○ Ja, ich kenne mich jetzt in Pharma-Regulierung aus     │
│  ○ Teilweise — branche-Basics verstanden                   │
│  ○ Eher nicht — bleibt ein Lernfeld für mich               │
│                                                             │
│  ────────────────────────────────────────────────────────  │
│                                                             │
│  Agent: "Das Kundenteam hat dir hohes Feedback gegeben     │
│  (NPS 82). Gibt es konkrete Zertifizierungen die du in     │
│  Zukunft anpeilen möchtest?"                               │
│                                                             │
│  Input: [Ich plane PROSCI-Zertifizierung im Q3 2026  ]    │
│                                                             │
│  ────────────────────────────────────────────────────────  │
│                                                             │
│  Agent: "Noch eine Frage: Dein Skill 'Agile Transformation'│
│  ist noch auf 'Mid'-Level. War das bei MedTech relevant?"  │
│                                                             │
│  ○ Ja, viel Agile-Anteil — Level erhöhen auf 'Senior'     │
│  ○ Eher nicht relevant                                     │
│  ○ Weiß nicht / nicht sicher                               │
│                                                             │
│  ────────────────────────────────────────────────────────  │
│                                                             │
│  Agent: "Super! Dein Profil ist jetzt zu 88% vollständig. │
│  Noch zwei Schnell-Fragen für Top-10%:"                    │
│                                                             │
│  Reisebereitschaft bei zukünftigen Projekten?              │
│  [0–25%] [25–50%] [50–75%] [75–100%]                      │
│                                                             │
│  ────────────────────────────────────────────────────────  │
│                                                             │
│  ┌── PROFIL-FORTSCHRITT ──────────────────────────────┐   │
│  │ ██████████████████░░ 88%                           │   │
│  │ ✅ Rollen      ✅ Projektkontext   ✅ Zertifikate  │   │
│  │ ✅ Reise       ✅ Skills           ⬜ Foto         │   │
│  └────────────────────────────────────────────────────┘   │
│                                                             │
│  [Alles speichern & Abschließen]  [Noch später]            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**AI-Interaktion Details:**
- Dialog-basiert, nicht formular-basiert
- Agent erkennt Profil-Gaps: "Du hattest Pharma als Lernfeld, wie siehst du es jetzt?"
- Präzisierungsfragen bei mehrdeutigen Skills
- Live-Fortschritts-Bar nach jeder Antwort (motivierend)
- Karriere-Empfehlungen inline: "PROSCI-Zertifizierung macht sense für deinen nächsten Step zu Senior"

**Nach "Speichern":**
- Profil-Update wird sofort wirksam
- System aktualisiert automatisch: Skills, Zertifizierungen, Proficiency-Level
- Entwicklungs-Dashboard wird aktualisiert: "Nächster Step zu Senior: 85% complete"
- Matching-Engine wird neu-geprimert: Lisa ist jetzt für Pharma-Projekte mit Change-Fokus matchbar

**Lisa bekommt Zusammenfassung-Toast:**
```
┌─────────────────────────────────┐
│ ✅ Profil aktualisiert!         │
│                                 │
│ Deine Skills:                   │
│ • Change Management (Senior)    │
│ • Pharma Branche-Know-how (Mid) │
│ • SAP User-Adoption (Senior)    │
│ 🆕 Agile Transformation (Senior)│
│                                 │
│ Nächster Step: PROSCI-Cert.     │
│                                 │
│ [Entwicklungs-Plan anschauen]   │
│ [Staffing-Anfragen anschauen]   │
│                                 │
└─────────────────────────────────┘
```

---

### Phase B: Staffing-Empfehlung (Automatisch)

#### [LISA-J1-S3] Karriere-Matched Staffing-Anfrage

**Trigger:** 2 Wochen später — Katrin bekommt neue Opportunity: RetailCorp, Change Management, Einzelhandel
System matched Lisa auf Basis aktualisiertes Profil + Entwicklungsziel

**Lisa bekommt Notification (Mobile/Desktop):**
```
┌─────────────────────────────────────────────┐
│ 📢 Staffing-Anfrage mit Karriere-Fit         │
│                                             │
│ RetailCorp AG                               │
│ Change Management für S/4HANA-Migration     │
│ Einzelhandel (Branche) · 6 Monate · Wien    │
│                                             │
│ ✅ Karriere-Fit:                           │
│ • Change Management (deine Stärke)         │
│ • Retail: neuer Branchenbezug              │
│   (dein Entwicklungsziel für Q3)           │
│ • Größeres Team (Step zu Senior vorbereiten)│
│                                             │
│ Anfrage an: Katrin Engel                    │
│                                             │
│ [Interesse anmelden]  [Details]  [Ablehnen]│
│                                             │
└─────────────────────────────────────────────┘
```

**Lisa-Kontext in der Staffing-Anfrage (für Katrin):**
```
│ 👤 Lisa T.     Mid → Senior Candidate · Change Mgmt  │
│    3J · Wien                                         │
│    ✅ Pharma-Projekt abgeschlossen (NPS 82)         │
│    🎯 Entwicklungsziel: Retail-Branche-Know-how     │
│       → Diese Anfrage ist KARRIERE-MATCH!           │
│    📈 Proficiency (Change Mgmt): 85/100             │
│    Kundenfeedback: "Exzellente Stakeholder-Arbeit"  │
```

**Lisa tippt "Interesse anmelden":**
- System benachrichtigt Katrin: "Lisa hat Interesse" + vollständiger Kontext
- Lisa sieht "Warte auf Rückmeldung von Katrin" in ihrem Notification Center

---

### Phase C: Parallel — Knowledge Consumption

#### [LISA-J1-S4] Knowledge-Agent: "Workshop-Format für SAP-Rollout"

**Trigger:** Lisa arbeitet am MedTech-Projekt an User-Adoption, braucht Workshop-Template für Pharma

**Mobile/Desktop, Knowledge-Agent Chat:**

```
┌──────────────────────────────────────────────────────────────┐
│  💬 KNOWLEDGE-AGENT                                          │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Lisa: "Ich brauche ein Workshop-Format für SAP-Rollout,    │
│  speziell für Change Management / User Adoption,            │
│  mit Pharma-Kontext"                                        │
│                                                              │
│  Agent (12 Sekunden):                                       │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Ich habe 2 relevante Knowledge-Bausteine gefunden:  │   │
│  │                                                      │   │
│  │ 📋 Change Management Workshop-Format (3h) SAP       │   │
│  │    Quelle: Stefan K., MedTech-Projekt (Q1/2026)    │   │
│  │    → 5 Module, Stakeholder-Map, Resistance-Plan     │   │
│  │    📊 Download als PPTX: 45 Folien                  │   │
│  │    [Öffnen] [Herunterladen] [In Projekt-Docs]      │   │
│  │                                                      │   │
│  │ 📋 User-Adoption Training Script (Pharma-spezifisch)│   │
│  │    Quelle: Markus S., FashionGroup (Q4/2024)       │   │
│  │    → Script mit Rolle-spezifischen Module           │   │
│  │    ⚠️ Hinweis: Fashion-Branche, aber ähnliche      │   │
│  │       Rollout-Dynamik wie Pharma                    │   │
│  │    [Öffnen] [Anpassen für Pharma] [Details]        │   │
│  │                                                      │   │
│  │ 💡 Experten-Tipp:                                   │   │
│  │ Stefan Kraus hat MedTech geleitet. Er hat auch      │   │
│  │ GxP/Compliance-spezifische Punkte dokumentiert.     │   │
│  │ [Stefan direkt fragen]                              │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  Lisa: "Die Pharma-Compliance-Punkte — was sind die konkreten│
│  Anforderungen für GxP-Validierung?"                        │
│                                                              │
│  Agent:                                                     │
│  "Gute Frage. Aus Stefans Bausteine: 3 GxP-kritische Punkte:│
│  1. Audit-Trail für User-Acceptance: alle Change-Orders    │
│     müssen dokumentiert sein (21 CFR Part 11)              │
│  2. Validation Records: bevor das System Go-Live geht,      │
│     müssen Validation-Runs signiert sein (QA + Compliance) │
│  3. Change Control: alle neuen Scripts/Prozesse müssen      │
│     durch Change Control Board, nicht ad-hoc               │
│                                                              │
│  → [Stefan anrufen für Deep-Dive]                           │
│                                                              │
│  Lisa: "Danke — zeig mir noch ein Template für die Validierung"│
│                                                              │
│  Agent: "Attached: Validation-Checklist (Pharma).           │
│  Pro-Tipp: Du kannst diese direkt in dein Projekt-Dashboard│
│  als Milestone-Tracker hochladen."                          │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Design-Details:**
- Knowledge-Agent liefert Synthese, nicht nur Links
- Quellen immer sichtbar (wer, welches Projekt, wann)
- Experten-Referral als sozialer Vertrauensanker
- Inline-Integration in Projekt-Workflows ("In Projekt-Docs")
- Kontextuelle Follow-up-Fragen werden verstanden

---

## Phase D: Entwicklungs-Dashboard Aktualisierung

#### [LISA-J1-S5] Entwicklungs-Kompass: Nächster Schritt zu Senior

**Trigger:** System aktualisiert automatisch nach Profil-Update

**Mobile/Desktop:**

```
┌────────────────────────────────────────────────────────────┐
│  🎯 Dein Entwicklungs-Plan — Consultant → Senior           │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  AKTUELLER STATUS: 72% auf dem Weg zu Senior              │
│  ███████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 72%     │
│                                                            │
│  ✅ ERFÜLLT (3/5):                                        │
│  ☑ Change Management: Senior-Level erreicht               │
│  ☑ Team-Leadership: 5+ Stakeholder-Interviews geführt     │
│  ☑ Branche-Know-how: Pharma (MedTech-Projekt)             │
│                                                            │
│  ⏳ IN ARBEIT (2/5):                                      │
│  ☐ PROSCI-Zertifizierung (Plan: Q3 2026)                 │
│  ☐ Retail-Branche-Erfahrung (RetailCorp-Anfrage pending)  │
│                                                            │
│  EMPFOHLENE NÄCHSTE SCHRITTE:                             │
│  1. RetailCorp-Projekt (Staffing-Anfrage)                 │
│     → Retail-Branche abhaken, größeres Team führen        │
│     Geschätzter Impact: +15% zu Senior                    │
│                                                            │
│  2. PROSCI-Zertifizierung (Q3)                            │
│     → Formale Zertifizierung abhaken                      │
│     Geschätzter Impact: +10% zu Senior                    │
│                                                            │
│  3. Mentoring eines Junior Beraters (optional aber wertvoll)│
│     → Leadership-Erfahrung verstärken                     │
│     Geschätzter Impact: +5% zu Senior                     │
│                                                            │
│  💡 Timeline: Du erreichst Senior-Level Ende Q4 2026 /    │
│  Anfang Q1 2027 wenn du diese Schritte umsetzt.           │
│                                                            │
│  [RetailCorp-Anfrage annehmen]  [PROSCI-Kurs suchen]     │
│  [Mentor zuordnen]  [Fragen?]                             │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Design-Details:**
- Visueller Fortschritts-Balken: motivierend, konkret
- Soll/Ist-Abgleich: keine Geheimhaltung, transparente Ziele
- Nächste Schritte sind konkret actionable + verlinkt zu Opportunities
- Timeline-Forecast: realistisch, motivierend
- Kein Druck, nur Transparenz

---

## Lisas Key Journey: Zusammenfassung

| Phase | Screen | Dauer | Key Action |
|---|---|---|---|
| A | Profil-Update Nudge | 2 Min | Tap: "Ja, schnell" |
| A | Onboarding-Agent Dialog | 8 Min | Profil per Dialog verfeinern |
| B | Staffing-Empfehlung | — | "Interesse anmelden" (bei Abschluss) |
| C | Knowledge-Agent | 5 Min | Workshop-Templates + Expertenrat abholen |
| D | Entwicklungs-Dashboard | 3 Min | Soll/Ist sehen, nächste Schritte planen |

**Gesamt-Engagement:** ~18 Minuten über 3 Tage
**Lisas Wert-Kreation:** Profil aktuell + matchbar + Karriere-Kompass sichtbar + ready für nächsten Einsatz

---

## Surfaces & AI-Interaktionsmuster für Lisa

### Primär: Onboarding/Profil-Agent
- Dialog-basiert, nicht formular-schwer
- Nutzt Projekt-Kontext: "Du hast gerade MedTech abgeschlossen..."
- Präzisiert Skill-Level: "Change Management: Mid oder Senior?"
- Proaktiv: kommt zu Lisa nach Projektabschluss, nicht umgekehrt

### Sekundär: Knowledge-Agent (Chat)
- Schnelle Synthese von Wissensbausteine
- Branchenkontext verstanden: "Pharma-spezifische Punkte?"
- Experten-Referral: "Frag Stefan für GxP-Details"
- In Workflow integrierbar: "In Projekt-Docs hochladen"

### Tertiär: Entwicklungs-Dashboard
- Nicht als separate App, sondern als Profil-Context
- Linked zu Staffing-Anfragen: "Das passt zu deinem Entwicklungsziel"
- Motivierend, nicht strafend: "Du erreichst Senior Ende Q4/Anfang Q1"

### Nicht für Lisa: Canvas, Command Bar, Admin-Surfaces
- Canvas (Angebotsgestaltung): nicht ihre Domäne
- Command Bar: zu schnell-gehackt für sie
- Admin-Panels: irrelevant

---

## Design-Implikationen für Lisas Workflows

### 1. Proaktive Nudges statt Pflege-Pflicht
**Regel:** System muss Lisa erinnern, nicht sie das System suchen.
- "Dein Projekt ist abgeschlossen — Profil aktualisieren?" (Push)
- Nicht: "Dein Profil ist unvollständig" (Schuld-Trigger)

### 2. Dialog statt Formular
**Regel:** Profil-Updates über natürlichsprachlichen Dialog, nicht über 5-Feld-Formulare.
- "Füge PROSCI-Zertifikat hinzu" → Agent nimmt auf und normalisiert
- Agent erkennt "Pharma-Branche-Erfahrung" und ordnet automatisch zu

### 3. Entwicklungs-Dashboard als Karriere-Kompass
**Regel:** Lisas Aufstieg ist transparent, konkret, motivierend.
- Soll/Ist visuell
- Nächste Schritte explizit
- Timeline-Forecast realistisch
- Verlinkung zu Staffing-Opportunitäten: "Das passt zu deiner Entwicklung"

### 4. Minimaler Footprint
**Regel:** Consultry darf für Lisa nie nach "noch einem Tool" aussehen. 15–30 Min/Tag maximal.
- Alles über 3 Klicks ist zu viel
- Mobile-first: Smartphone-Zugänglichkeit essentiell
- Notifications sind Trigger, nicht Ablenkung

### 5. Knowledge-Integration in Workflows
**Regel:** Knowledge-Agent sitzt neben der Facharbeit, nicht isoliert.
- "Brauchst du ein Workshop-Template?" im Projekt-Kontext
- Links zu Experten, nicht zu Dokumenten
- "In Projekt-Docs hochladen" als Standard-Action

---

## Journey: Staffing-Anfrage empfangen (J2-S3 — Lisas Perspektive)

**Referenz:** Journey 2 aus [User Journeys v1.0](../Consultry-User-Journeys-v1.0.md)
Diese Journey zeigt, wie Lisa auf Staffing-Anfragen reagiert.

### [LISA-J2-S3] Staffing-Anfrage erhalten & beantworten

**Trigger:** Katrin braucht einen Mid-Level Change Management Consultant für RetailCorp
Lisa bekommt Staffing-Anfrage via Notification

**Mobile Notification:**
```
┌──────────────────────────────────────────────┐
│ 📢 Staffing-Anfrage für dich                  │
│                                              │
│ RetailCorp AG                                │
│ SAP S/4HANA Migration · Change Management    │
│ 6 Monate · Start KW 26 · Wien + On-Site      │
│                                              │
│ Anfragende: Katrin Engel                     │
│ Deine Match-Score: 82/100                    │
│                                              │
│ [Details] [Interessiert] [Später] [Nein]    │
│                                              │
└──────────────────────────────────────────────┘
```

**Lisa tippt "Details" oder "Interessiert":**

```
┌────────────────────────────────────────────────────────────┐
│  Staffing-Anfrage: RetailCorp AG — Change Management      │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  PROJEKT-KONTEXT                                           │
│  Firma:          RetailCorp AG · Einzelhandel             │
│  Scope:          SAP ECC → S/4HANA Migration              │
│  Deine Rolle:    Change Management Lead (4–5 Personen)    │
│  Dauer:          6 Monate · KW 26–31                      │
│  Ort:            Wien (Kundenbüro) + 20% Remote           │
│  Team:           Markus S. (Lead), Tim K. (Data), du      │
│                                                            │
│  DEIN MATCH-SCORE: 82/100                                │
│  ✅ Change Management Expertise: 100%                     │
│  ✅ SAP-Retail Branche: 70% (neu, aber Pharma → ähnlich) │
│  ✅ Team-Größe: Match (5 Personen)                        │
│  ✅ Verfügbarkeit: Match (aktuell frei ab KW 26)         │
│                                                            │
│  KARRIERE-KONTEXT                                          │
│  🎯 Passt zu deinem Entwicklungsziel?                    │
│     Du wolltest "Retail-Branche-Know-how" aufbauen        │
│     → RetailCorp ist genau dafür das nächste Projekt!     │
│     Impact: +15% zu Senior-Level                          │
│                                                            │
│  ENTSCHEIDUNG                                              │
│  [Klares Ja — Interesse anmelden]                         │
│  [Ja aber mit Bedingungen] ↓                              │
│  [Vielleicht — brauche mehr Infos]                        │
│  [Nein — nicht interessiert]                              │
│                                                            │
│  Falls "Bedingungenx:                                     │
│  ☐ Remote: mindestens 50% statt 20%                      │
│  ☐ Verlängerung: garantiert bis KW 31 oder kann           │
│     früher enden                                          │
│  ☐ Mitsprache: brauche Mitsprache in Team-Zusammensetzung│
│  ☐ Salary: Tagessatz-Anfrage auf Basis meiner Seniority  │
│                                                            │
│  [Speichern & Antwort senden]                             │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Lisa wählt "Klares Ja":**

**System sendet an Katrin:**
```
✅ Lisa Tran hat Interesse angemeldet!

👤 Lisa T. · Mid Change Management · Wien
├─ Match-Score: 82/100
├─ Verfügbarkeit: Sofort (nach MedTech KW 25)
├─ Profil-Status: 88% — aktuell (MedTech gerade abgeschlossen)
├─ Kundenfeedback: NPS 82 (MedTech)
├─ Entwicklungsziel: Retail-Branche-Erfahrung
│  → Dieses Projekt ist KARRIERE-MATCH für Lisa!
├─ Reisebereitschaft: 50–75%
└─ Messaging: keine Bedingungen, volle Commitment

[Lisa kontaktieren]  [Team aktualisieren]
```

**Lisas Status im Notification Center:**
```
📢 RetailCorp-Anfrage: Warte auf Rückmeldung
Deine Antwort wurde übermittelt
Katrin wird dich ggf. kontaktieren
Erwartete Entscheidung: bis KW 21
```

---

## Journey: Onboarding (J4-S3 — Tim als Lisas Referenz)

**Referenz:** Journey 4 aus [User Journeys v1.0](../Consultry-User-Journeys-v1.0.md)
Diese Journey zeigt, wie ein neuer Berater wie Tim (ähnliche Profile: Consultant-Level) sein Profil aufbaut.

Lisa durchlief diesen Flow ähnlich als sie 3 Jahren bei mpl einstieg:

```
┌────────────────────────────────────────────────────────────┐
│  Lisas Onboarding (Mai 2023) — analoges Flow               │
│                                                            │
│  1. Martina legt Lisa an:                                 │
│     - CV: Lisa_Tran_CV_2023.pdf                           │
│     - AI extrahiert: 4 Skills, 3 Projekte, 0 Zertif.      │
│     - Mentor: Stefan K. (Skill-Overlap 85%)               │
│                                                            │
│  2. Martina prüft Extraktion: ✅ alles korrekt            │
│                                                            │
│  3. Lisa durchläuft Onboarding-Agent Dialog:              │
│     - "Wie würdest du Change Management einstufen?"       │
│       → "Mid-Level, mit schwerpunkt auf Workshops"        │
│     - "Agile-Erfahrung aus deinen Projekten?"             │
│       → "Nicht formell Agile, aber agil-ähnliche Methoden"│
│     - Reisebereitschaft: 50–75%                           │
│     - Profil-Completeness: 87%                            │
│                                                            │
│  4. 7 Tage später: Lisa taucht im Matching auf            │
│     Match-Score: 68/100 für SAP Retail (damals noch neu)  │
│                                                            │
│  5. 2 Monate später: Erstes Projekt: MedTech (Change)     │
│     Katrin saw Lisa im Matching, Score 76/100 — Fit!      │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## Journey: Knowledge Consumption (J5-S3 — Lisas Perspektive)

**Referenz:** Journey 5 aus [User Journeys v1.0](../Consultry-User-Journeys-v1.0.md)
Diese Journey zeigt, wie Lisa Wissen vom Knowledge-Agent abruft.

### Szenario: Lisa braucht Change-Risiko-Strategie für neues Projekt

**Lisa tippt in Knowledge-Agent:**
```
Lisa: "SAP-Migration Change-Risiko Assessment Template —
       besonders für große Teams (10+ Leute) in Finanzbereich"
```

**Knowledge-Agent antwortet (15 Sekunden):**
```
┌──────────────────────────────────────────────────────────┐
│ Ich habe 3 relevante Wissensbausteine gefunden:         │
│                                                          │
│ 📋 Change-Risiko-Matrix (SAP-Migration)                 │
│    Quelle: Stefan K., MedTech-Projekt (Q1 2026)        │
│    → 18 Risiko-Szenarien mit Mitigations-Strategien    │
│    📊 Format: Excel Workbook mit Scoring               │
│    [Öffnen] [Herunterladen] [Anpassen für Projekt]     │
│                                                          │
│ 📋 Stakeholder-Widerstand-Playbook (Change Mgmt)       │
│    Quelle: Lisa T., RetailCorp-Projekt (Q2/2026)       │
│    → 7 Widerstands-Profile + Adoption-Strategien       │
│    Hinweis: Du hast diesen selbst geschrieben!         │
│    [Öffnen] [In Projekt-Board pinnen]                  │
│                                                          │
│ 📋 Finanzbereich Spezial-Anforderungen (Compliance)    │
│    Quelle: Sarah M., InsureTech-Projekt (Q4/2024)      │
│    → Change-Dokumentation für Compliance-Audits        │
│    [Öffnen] [Integration Guide]                        │
│                                                          │
│ 💡 Experten-Empfehlung:                                │
│ Sarah M. hat Finanz-Change-Expertise. Sie könnte       │
│ dein Team in einem Workshop unterstützen. [Sarah anrufen]│
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Interessant:** Lisa sieht ihren eigenen Baustein (RetailCorp Stakeholder-Playbook)
Das ist Bestätigung: "Mein Wissen wird genutzt — das hat Wert!"

---

## Lisas Fehlende Journeys (Zukünftige Features)

Basierend auf ihrer Persona und ihren Jobs to be Done fehlen diese Journeys noch:

### 1. Entwicklungs-Dashboard-Flow
**Aktuell:** Lisas Entwicklungsziele sind manuell / auf Excel-Zettel
**Benötigt:** Interaktives Dashboard mit Soll/Ist-Abgleich, Timeline-Forecast, Action-Buttons
- Ziel: "Reach Senior Consultant by Q1 2027"
- Soll: 5 Kriterien (Skill-Level, Branche-Erfahrung, Leadership, Zertifikate, Netzwerk)
- Ist: aktueller Status pro Kriterium (mit % und Evidence)
- Nächste Schritte: konkrete Aktionen verlinkt zu Staffing-Opportunities, Trainings, Mentoring
- Timeline: "Du erreichst Senior bei diesem Tempo bis Q4/Q1 2027"

### 2. Mid-Career Profil-Update per Dialog
**Aktuell:** Nach jedem Projekt müssen Skills manuell aktualisiert werden
**Benötigt:** Automatischer Profil-Update nach Projektabschluss (Lisas Key Journey oben)
- Agent fragt: "Neue Skills gelernt?"
- Lisa sagt: "Ja, PROSCI-Zertifizierung und Pharma-Compliance-Wissen"
- System: Skills normalisieren, mit Projekt verlinken, Proficiency-Level anpassen

### 3. Knowledge Consumption for Daily Work
**Aktuell:** Knowledge-Agent existiert, aber für Lisa noch unbekannt / undergenutzt
**Benötigt:** Proaktive "Smart Suggestions" in Projekt-Kontext
- Lisa arbeitet an Workshop für Pharma-Unternehmen
- System: "Brauchst du Input zur GxP-Validierung? Hier sind 3 Templates + Experten"
- Lisa kann direkt im Projekt-Dashboard auf Knowledge zugreifen

### 4. Karriere-Matched Staffing-Empfehlung
**Aktuell:** Staffing-Anfragen sind Projekt-Match, nicht Karriere-Match
**Benötigt:** "Diese Opportunity passt zu deinem Entwicklungsziel" als explizites Signal
- Lisas Goal: "Retail-Branche-Erfahrung"
- Staffing-Anfrage kommt: RetailCorp (Retail)
- System: "Diese Anfrage ist KARRIERE-MATCH — passt zu deinem Entwicklungsziel!"
- Für Katrin auch sichtbar: "Lisa will Senior werden und das Projekt hilft ihr dabei"

---

## Design-Tokens & Komponenten (aus Consultry Design System v1.2)

**Für Lisas Surfaces gelten diese Design-Prinzipien:**

### Farben
- Primary: `--consultry-coral` (#BF5347) — für proaktive Nudges (Profil-Update)
- Success: `--success-green` (#4CAF50) — für Bestätigungen, Karriere-Progress
- Neutral: `--charcoal-dark` (#111111) — für Info-Cards
- Alert: `--warm-gray` (#6E6A6B) — für Bedingte Staffing-Anfragen

### Komponenten
- `DialogCard` — für Onboarding-Agent, proaktive Nudges
- `StaffingRequestCard` — Self-contained, mit Match-Score + Karriere-Kontext
- `KnowledgeResultCard` — mit Quelle, Experten-Empfehlung, Integration-Button
- `ProgressBar` — für Profil-Completeness, Skill-Development
- `NotificationBadge` — für Staffing-Anfragen, Profil-Updates

### Typography
- Dialog-Text: `--font-body-large` für gute Lesbarkeit
- Match-Scores: `--font-label-bold` für Sichtbarkeit
- Experten-Tipps: `--font-body-small` mit `--text-secondary`

---

## Navigation & Accessibility

**Lisas häufigste Einstiege:**
1. **Home Dashboard** → Notifications sehen → Staffing-Anfrage oder Profil-Nudge
2. **Knowledge-Agent** → Command Bar oder dedicated Chat-Link
3. **Profil** → Direkter Link nach Projektabschluss (via Nudge)
4. **Entwicklungs-Dashboard** → Monatlicher Check-in oder nach Staffing-Entscheidung

**Mobile-First:** Lisas primäre Geräte sind Smartphone (unterwegs) und Laptop (Projekt-Arbeit)
Desktop sollte keine Anforderung sein.

**Accessibility:**
- WCAG 2.1 AA Standard für Dialog-Fragen (klarer Text, guter Kontrast)
- Keyboard-Navigation für alle AI-Dialog-Buttons
- Screen-Reader-freundlich: Dialog-Inhalte als Text, nicht nur UI

---

## Zusammenfassung: Lisas Experience mit Consultry

**Die Realität für Lisa ohne Consultry:**
- Profil veraltet nach jedem Projekt
- Keine Transparenz zu Entwicklungsziel
- Staffing-Anfragen sind generisch, keine Karriere-Connection
- Wissen ist in Dokumenten vergraben, nicht synthesiert

**Die neue Reality mit Consultry:**
- ✅ Profil aktualisiert sich automatisch nach Projektabschluss (Dialog-Agent)
- ✅ Entwicklungs-Dashboard zeigt Soll/Ist und Timeline zu Senior
- ✅ Staffing-Anfragen werden Karriere-gematcht ("Passt zu deinem Ziel!")
- ✅ Knowledge-Agent liefert Synthese + Experten-Referral in 15 Sekunden
- ✅ Alles bleibt <30 Min/Tag für Lisa — minimal footprint

**Lisas Erfolgsmetriken:**
- Profil-Completeness: >85% (aktuell, nicht veraltet)
- Knowledge-Abrufe: 2–3x pro Woche (vs. 0 vorher)
- Staffing-Acceptance-Rate: >80% weil Anfragen sind qualitativ+karriere-matched
- Time-to-Senior: Q1 2027 (auf Plan)


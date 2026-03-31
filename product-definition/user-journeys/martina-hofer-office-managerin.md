# Martina Hofer — Office Managerin
## Persona-spezifische User Journeys

**Header:** Martina Hofer, Office Managerin, 2–4h/Tag (Desktop-only)

**Version:** 1.0
**Datum:** 31. März 2026
**Companion:** [Consultry PRD v3.0](../Consultry-PRD-v3.0-Final.md), [Target Personas v1.0](../../uploads/Consultry-Target-Personas-v1.0.md)

---

## Steckbrief Martina Hofer

| | |
|---|---|
| **Rolle** | Office Managerin / Operations Coordinator |
| **Unternehmen** | mpl Consulting GmbH, München |
| **Berichtet an** | Managing Partner (Thomas Weber) |
| **Team** | 1 Assistentin; arbeitet eng mit BD (Katrin), Finance, HR |
| **Erfahrung** | 18 Jahre Office Management, davon 8 in Beratungshäusern |
| **Alter** | 45 |
| **Technik-Affinität** | Mittel — kennt Excel besser als jeder Berater, misstraut aber neuen Tools |
| **Spezialität** | Datenqualität, Berichte, Vertragsverwaltung, Berater-Onboarding-Koordination |

### Arbeitskontext

**Ort:** Ausschließlich Büro (2 Monitore), keine Remote-Arbeit
**Gerät:** Desktop nur — kein Smartphone, kein Tablet
**Tagesrhythmus:**
- 08:00–08:30: E-Mails, System-Status, Datenimport-Check
- 08:30–12:00: Berater-Daten pflegen, Berichte generieren, Verträge koordinieren
- 12:00–13:00: Angebotssupport (Formatting, Export, QA)
- 13:00–17:00: Vertragsverwaltung, Onboarding-Vorbereitung, Reporting

**Consultry-Zeit:** 2–4 Stunden/Tag (Desktop-only, Power User für administrative Surfaces)

**Kritische Arbeits-Momente:**
- Früh morgens: Daten-Qualitäts-Check vor dem Tagesgeschäft
- Vor Meetings: Quick-Berichte für Thomas, Auslastungs-Overview
- Vor Angebots-Versand: CVs formatieren, ExPDF generieren
- Montags/vor Quartals-Review: große Reporting-Runs

---

## Journeys in denen Martina auftritt

### 1. **Journey 4: Berater-Onboarding** (J4-S1, J4-S2 — Martina als primäre Admin)
### 2. **Cross-Persona: Angebots-Export** (erwähnt in Matrix, aber keine dedizierte Journey yet)
### 3. **Marinas Critical Missing Journeys** (6 neue Flows, spezifisch für ihr Backoffice-Workflow)

---

## Martinas Primary Surfaces & AI-Interaktionsmuster

| Surface | Häufigkeit | Typische Aktion | AI-Modus |
|---|---|---|---|
| **Settings / Admin** | Täglich, 30 Min | Benutzerverwaltung, Integrationen prüfen, Datenimport | Keine bewusste AI |
| **Berater-Profile (Admin)** | Täglich, 60 Min | Daten prüfen, Onboarding-Begleitung, Lücken füllen | Auto-Extraktion (CV) + Validierung |
| **Vertragsverwaltung** | 3–5x/Woche, 30 Min | Vertragsstatus, Dokumente zuordnen, Fristen tracken | Keine AI — kritisch für Genauigkeit |
| **Reporting / Export** | 2–3x/Woche, 30 Min | Auslastungsberichte, Pipeline-Reports, Partner-Dashboards | Strukturierte Exports (keine AI) |
| **Angebots-Support** | 2–3x/Woche, 20 Min | CVs formatieren, Angebote exportieren, Referenzen zusammenstellen | Keine AI — QA-Fokus |
| **Financial Intelligence** | 1x/Woche, 30 Min | Rechnungsläufe vorbereiten, DB-Reports ziehen | Query-basiert (keine AI) |

**Martinas AI-Präferenz:**
- **Keine bewusste AI-Nutzung** — Sie denkt nicht in "AI-Features". Consultry muss zuverlässig sein, nicht intelligent.
- **AI kann unterstützen wo:** Auto-Extraktion von CVs (mit ihrer Validierung), Daten-Qualitäts-Alerts
- **AI MUSS NICHT:** bei Bulk-Operationen, Exports, Vertrags-Management (zu riskant)

---

## Martinas Jobs to be Done

### Morgens (08:00–08:30) — "Ist alles sauber?"
- ✅ System-Health prüfen: Integrationen aktiv, Sync-Status
- ✅ Neue Berater-Profile prüfen: Onboarding-Status, fehlende Daten
- ✅ Importfehler beheben: Wer wurde nicht korrekt synced?
- ✅ Data Quality Alert-Scan: Duplikate, Inconsistenzen, veraltete Einträge

### Vormittags (08:30–12:00) — "Daten pflegen, Berichte bauen"
- ✅ Berater-Daten vervollständigen: Martina ist die Qualitäts-Garantin
- ✅ Auslastungsberichte für Partner-Meetings vorbereiten
- ✅ Vertrags-Fristen-Tracking: was läuft wann aus?
- ✅ Bulk-Edits: "Alle Standort Wien auf neue Adresse aktualisieren"

### Nachmittags (13:00–17:00) — "Angebots-Support und Verträge"
- ✅ CVs für Angebote exportieren und prüfen (Corporate Design korrekt?)
- ✅ Vertragsentwürfe vorbereiten und an Rechtsabteilung weiterleiten
- ✅ Neuen Berater im System anlegen und Onboarding starten
- ✅ Reporting-Requests von Thomas oder Partner bearbeiten

### Regelmäßig — "Infrastruktur & Integrationen"
- ✅ API-Sync-Status überwachen (Calendly, Slack, Mailbox)
- ✅ Nutzer-Provisioning: neue Nutzer anlegen, Rechte vergeben
- ✅ Export-Vorlagen: Berichte mit konsistentem Format
- ✅ Backup & Compliance: Audit-Trails, Datenschutz-Checklisten

---

## Martinas Frustrationen & Abbruchpunkte

| Frustration | Auslöser | Konsequenz |
|---|---|---|
| **"Die Daten sind nicht konsistent"** | Berater pflegen unterschiedlich, Formate inkonsistent | Manuelle Nacharbeit, Stunden-Aufwand pro Woche |
| **"Ich kann keinen sauberen Report exportieren"** | Export-Optionen limitiert, falsch formatiert oder unvollständig | Baut Reports in Excel nach — doppelte Arbeit |
| **"Das System macht Vorschläge die ich nicht nachvollziehen kann"** | AI-Empfehlungen ohne Erklärung (z.B. Skill-Zuordnung) | Ignoriert AI, macht es manuell + Misstrauen wächst |
| **"Ich muss für jeden Berater 5 Mal klicken"** | Keine Bulk-Edit-Möglichkeiten | Tasten-Workflow dauert 3x so lang wie Excel |
| **"Ich weiß nicht ob der Import geklappt hat"** | Kein klares Feedback bei Bulk-Operationen | Muss jeden Datensatz einzeln prüfen → Paranoia |
| **"Der PDF-Export ist hässlich"** | Falsches Font, Seitenlayout, Farben nicht im Consultry-Brand | Kunde sieht schlechte PDF → Reputation-Risiko |
| **"Neue Integrations-Fehler ohne Warning"** | Sync bricht ohne Notification, Daten laufen auseinander | Entdeckt am Friday 16:00, kein Support erreichbar |

---

## Martinas Key Journey: Neuen Berater onboarden (Vertiefung von J4)

**Dauer:** 45 Minuten Martinas aktive Zeit + 7 Tage System-Prozess
**Beteiligte:** Martina (Admin), Tim (neuer Consultant), Lisa/Stefan (Mentor), Katrin (sieht Tim später im Matching)
**Trigger:** HR: "Tim Schneider startet am 1. Mai 2026"

---

## Journey Screen-by-Screen

### Phase A: Berater anlegen & CV hochladen (Martina, Desktop, 15 Min)

#### [MARTINA-J1-S1] Neuen Berater anlegen

**Trigger:** HR meldet: "Tim Schneider startet am 1. Mai"
Martina öffnet: Settings → Team → "Neuen Berater anlegen"

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Settings / Team / Neuen Berater anlegen                            │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  STAMMDATEN (required)                                               │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │                                                                │  │
│  │  Vorname: [Tim            ]  Nachname: [Schneider          ]  │  │
│  │  E-Mail:  [t.schneider@mpl.de                             ]  │  │
│  │  Telefon: [+49 (0)123 456 789                             ]  │  │
│  │                                                                │  │
│  │  Standort: [München         ▼]  (Office assignment)           │  │
│  │  Practice:  [SAP            ▼]  (fachliche Zuordnung)         │  │
│  │                                                                │  │
│  │  Startdatum: [01.05.2026        ]  (Verfügbarkeit ab...)      │  │
│  │  Seniority:  [Consultant     ▼] (Mid-Level angenommen)        │  │
│  │  Berichtet an: [Maria Weber (Practice Lead) ▼]                │  │
│  │                                                                │  │
│  │  ☐ Interner Berater  (default: checked)                       │  │
│  │  ☐ Partner / Freelancer                                       │  │
│  │                                                                │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  CV HOCHLADEN                                                        │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │                                                                │  │
│  │  📄 Tim_Schneider_CV_2026.pdf                 [Hochladen]      │  │
│  │  ⏳ (oder Drag-and-Drop hier)                                │  │
│  │                                                                │  │
│  │  📋 OPTIONEN:                                                 │  │
│  │  ☑ Skills automatisch extrahieren (AI CV-Parser)              │  │
│  │  ☑ Projekte strukturieren                                     │  │
│  │  ☑ Zertifizierungen erkennen                                  │  │
│  │  ☑ Profil-Foto erkennen (wenn in PDF)                         │  │
│  │                                                                │  │
│  │  Alle Checkboxes sollten aktiv sein — Martina mag Automation.│  │
│  │                                                                │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ONBOARDING-TEMPLATE (optional)                                      │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │  Nutze Onboarding-Checkliste:                                 │  │
│  │  ☑ Standard SAP-Practice (für Tim)                            │  │
│  │  ☐ Schnellstart (nur Basics)                                  │  │
│  │  ☐ Custom                                                     │  │
│  │                                                                │  │
│  │  → Checkliste wird automatisch Tims Onboarding-Agent mitgeben │  │
│  │                                                                │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  [Berater anlegen & Onboarding starten]  [Speichern & Später]       │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Design-Details:**
- Formular-basiert (Martinas Lieblings-Format)
- Alle kritischen Felder: required (red asterisk)
- Optional-Felder am Ende
- Drag-and-Drop für PDF (Martina nutzt es)
- Checkboxes für Automation (Martina vertraut Defaults)

**Martinas Aktion:**
1. Gibt Stammdaten ein
2. Zieht Tim_Schneider_CV_2026.pdf ins Feld
3. Checkboxes lässt sie alle checked
4. Klickt "Berater anlegen & Onboarding starten"

**Verhalten nach Click:**
- Convex-Record wird sofort erstellt
- CV wird an Knowledge-Engine übergeben (AI-Job) → Extraktion läuft
- Einladungsmail an Tim wird DRAFT erstellt (Martina kann noch reviewen)
- System zeigt: "Tim wird erstellt, CV wird gerade verarbeitet..."
- Mentor-Vorschlag wird berechnet (Hintergrund-Job)

---

#### [MARTINA-J1-S2] CV-Extraktion prüfen (Desktop, 10 Min)

**Trigger:** 2 Minuten später — Martina bekommt Notification:
"Tim Schneider: CV-Extraktion abgeschlossen — bitte prüfen"

**Martina klickt → Details-View öffnet sich:**

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Team / Tim Schneider / Profil-Review                               │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  CV-EXTRAKTION (AI-Analyse) — Bitte prüfen und bestätigen           │
│  ⏱️ Extraktion abgeschlossen: 2 Min 34 Sec                          │
│  Confidence: ████████░░ 84% (gutes Ergebnis)                         │
│                                                                      │
│  ══════════════════════════════════════════════════════════════════ │
│  ERKANNTE SKILLS (8 von 9 extrahiert — 1 Manual nötig)              │
│  ══════════════════════════════════════════════════════════════════ │
│                                                                      │
│  ┌─ Skill 1 ─────────────────────────────────────────────────────┐  │
│  │ ✅ SAP S/4HANA                              Status: BESTÄTIGT   │  │
│  │    Proficiency: Senior                      Confidence: 95%   │  │
│  │    Evidenz: 3 Projekte erwähnt (AutoParts, PharmaCorp, LogiTech)│
│  │    [Bearbeiten]  [Löschen]  [Andere Evidenz zeigen]           │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ┌─ Skill 2 ─────────────────────────────────────────────────────┐  │
│  │ ✅ SAP MM (Materials Management)            Status: BESTÄTIGT   │  │
│  │    Proficiency: Senior                      Confidence: 92%   │  │
│  │    Evidenz: 2 Projekte (AutoParts, PharmaCorp)                 │  │
│  │    [Bearbeiten]  [Löschen]  [Andere Evidenz zeigen]           │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ┌─ Skill 3 ─────────────────────────────────────────────────────┐  │
│  │ ✅ SAP SD (Sales & Distribution)             Status: BESTÄTIGT   │  │
│  │    Proficiency: Mid                         Confidence: 88%   │  │
│  │    Evidenz: 1 Projekt (RetailGroup)                            │  │
│  │    [Bearbeiten]  [Löschen]  [Andere Evidenz zeigen]           │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ┌─ Skill 4 ─────────────────────────────────────────────────────┐  │
│  │ ✅ ABAP Development                         Status: BESTÄTIGT   │  │
│  │    Proficiency: Mid                         Confidence: 85%   │  │
│  │    Evidenz: erwähnt in 2 Projekten (Debugging & Anpassung)    │  │
│  │    [Bearbeiten]  [Löschen]  [Andere Evidenz zeigen]           │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ┌─ Skill 5 ─────────────────────────────────────────────────────┐  │
│  │ ✅ Data Migration                           Status: BESTÄTIGT   │  │
│  │    Proficiency: Senior                      Confidence: 91%   │  │
│  │    Evidenz: 3 Projekte (LogiTech, pharm, AutoParts)          │  │
│  │    [Bearbeiten]  [Löschen]  [Andere Evidenz zeigen]           │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ┌─ Skill 6 ─────────────────────────────────────────────────────┐  │
│  │ ⚠️ "Projektmanagement"                      Status: MEHRDEUTIG  │  │
│  │    Proficiency: ???                         Confidence: 72%   │  │
│  │    Problem: "Projektmanagement" in CV — ist das Agil oder Klassisch? │  │
│  │                                                                │  │
│  │    🔴 MARTINA MUSS KLÄREN:                                    │  │
│  │    ○ Agile Projektmanagement (Scrum/Kanban)                   │  │
│  │    ○ Klassisches PM (PMI/Prince2-Style)                       │  │
│  │    ○ Beides (Hybrid)                                          │  │
│  │    ○ Nicht relevant — löschen                                 │  │
│  │                                                                │  │
│  │    [Agile wählen]  [Klassisch]  [Beides]  [Löschen]           │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ┌─ Skill 7 ─────────────────────────────────────────────────────┐  │
│  │ ✅ AWS Cloud Basics                         Status: BESTÄTIGT   │  │
│  │    Proficiency: Junior                      Confidence: 88%   │  │
│  │    Evidenz: 1 Projekt (TechStart AWS Setup)                   │  │
│  │    [Bearbeiten]  [Löschen]  [Andere Evidenz zeigen]           │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ┌─ Skill 8 ─────────────────────────────────────────────────────┐  │
│  │ ✅ Change Management                        Status: BESTÄTIGT   │  │
│  │    Proficiency: Junior                      Confidence: 81%   │  │
│  │    Evidenz: erwähnt in 1 Projekt-Rolle (MedTech als Input)    │  │
│  │    [Bearbeiten]  [Löschen]  [Andere Evidenz zeigen]           │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ✅ MANUELL HINZUFÜGEN?                                             │  │
│  Martina sieht Skill in CV dass AI nicht erkannt hat?             │  │
│  [Neuen Skill hinzufügen]                                          │  │
│                                                                      │
│  ══════════════════════════════════════════════════════════════════ │
│  ERKANNTE PROJEKTE (5 extrahiert)                                   │
│  ══════════════════════════════════════════════════════════════════ │
│                                                                      │
│  ┌── Projekt 1 ────────────────────────────────────────────────┐   │
│  │ AutoParts AG — SAP S/4HANA Migration           Status: OK   │   │
│  │ Zeitraum: 01.01.2024–31.08.2024 (8 Monate)                 │   │
│  │ Rolle: Consultant / Data Migration Specialist              │   │
│  │ Branche: Automotive                                         │   │
│  │ Skills erwähnt: S/4HANA, MM, Data Migration, ABAP          │   │
│  │ [Editieren] [Mit anderm Projekt verlinken] [Löschen]       │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌── Projekt 2 ────────────────────────────────────────────────┐   │
│  │ PharmaCorp — SAP MM Rollout                   Status: OK   │   │
│  │ Zeitraum: 01.06.2023–30.10.2023 (5 Monate)                 │   │
│  │ Rolle: Consultant / MM Spezialist                          │   │
│  │ Branche: Pharma                                             │   │
│  │ Skills erwähnt: MM, Data Conversion, Compliance            │   │
│  │ [Editieren] [Mit anderm Projekt verlinken] [Löschen]       │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ... (3 weitere Projekte)                                           │
│                                                                      │
│  ══════════════════════════════════════════════════════════════════ │
│  ERKANNTE ZERTIFIZIERUNGEN (3 extrahiert)                           │
│  ══════════════════════════════════════════════════════════════════ │
│                                                                      │
│  ✅ SAP Certified Application Associate — S/4HANA (2024)       Status: OK  │
│  ✅ AWS Cloud Practitioner (2023)                              Status: OK  │
│  ✅ ITIL Foundation (2021)                                     Status: OK  │
│                                                                      │
│  ══════════════════════════════════════════════════════════════════ │
│  MENTOR-VORSCHLAG (AI-empfohlen)                                    │
│  ══════════════════════════════════════════════════════════════════ │
│                                                                      │
│  👤 Stefan Kraus                                    Skill-Overlap: 82%     │
│     Senior Consultant, SAP Practice, München                      │
│                                                                      │
│     Begründung: Beide S/4HANA, MM, Data Migration — Stefan        │
│     führt sie in alle drei Areas ein. Zusätzlich: gleiche Practice,│
│     gleicher Standort.                                             │
│                                                                      │
│     ☑ Stefan als Mentor bestätigen                                 │
│     ☐ Anderen Mentor wählen [Dropdown]                            │
│     ☐ Kein Mentor zuweisen (Tim ist erfahren genug)               │
│                                                                      │
│  ══════════════════════════════════════════════════════════════════ │
│  PROFIL-VOLLSTÄNDIGKEIT                                             │
│  ══════════════════════════════════════════════════════════════════ │
│                                                                      │
│  Nach dieser Extraktion:                                            │
│  ████████░░ 78% — Gut, aber noch nicht 90%+                        │
│                                                                      │
│  Fehlend: Foto, Reisebereitschaft, Sprachkenntnisse, Verfügbarkeit │
│  (Tim muss diese im Onboarding-Dialog selbst hinzufügen)           │
│                                                                      │
│  ══════════════════════════════════════════════════════════════════ │
│  AKTION: BESTÄTIGUNG & WEITERLEITUNG                                │
│  ══════════════════════════════════════════════════════════════════ │
│                                                                      │
│  Schritt 1: Kläre "Projektmanagement" (required für Weitergabe)     │
│  ➜ Martina wählt: "Beides (Hybrid)" und bestätigt                  │
│                                                                      │
│  Schritt 2: Review abgeschlossen                                    │
│  [🔴 Stoppt: Fehler gefunden — manuell korrigieren]                │
│  [⚠️ Warnung: 1 Item mehrdeutig — aber OK zu proceed]              │
│  [✅ OK: Alles bestätigt — nächster Schritt]                       │
│                                                                      │
│  ➜ Martina klickt: [✅ OK: Alles bestätigt]                        │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Martinas Action Items:**
1. Liest die AI-Extraktion (8 Skills, 5 Projekte, 3 Zertifikate)
2. Sieht ⚠️ bei "Projektmanagement" — mehrdeutig
3. Klickt "Beides" (Tim hat Hybrid-Erfahrung)
4. Bestätigt alles — "OK, nächster Schritt"

**System nach Bestätigung:**
- Tim's Profil wird gespeichert (78% completeness)
- Stefan wird als Mentor zugeordnet + erhält Notification
- Onboarding-Checkliste für Tim wird erstellt
- Tim bekommt Einladungsmail mit Onboarding-Link
- Martina sieht: "✅ Tim Schneider is ready for Onboarding. Sent invitation email."

---

### Phase B: Tim durchläuft Onboarding (7 Tage, Tim's Perspektive)

#### [MARTINA-J1-S3] Onboarding-Fortschritt (Martina als Observer)

**Martina sieht in ihrem Admin-Dashboard:**

```
┌────────────────────────────────────────────────────────────┐
│  Onboarding-Fortschritt: Tim Schneider                     │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  📊 Status: In Progress                                   │
│  Start: 01.05.2026 · Erwartet abgeschlossen: 08.05.2026  │
│                                                            │
│  CHECKLISTE (7/15 abgeschlossen)                          │
│                                                            │
│  ✅ Einladungsmail gesendet                              │
│  ✅ Tim hat Onboarding geöffnet                          │
│  ✅ Profil-Dialog gestartet                              │
│  ⏳ Profil-Dialog fortgeschritten (Step 3/8)              │
│  ⏳ Entwicklungs-Ziele set (pending)                      │
│  ⬜ Profil Dialog abgeschlossen                          │
│  ⬜ Foto hochgeladen                                      │
│  ⬜ Mentor-Intro-Call gebucht                            │
│  ⬜ Kalender-Sync abgeschlossen                          │
│  ⬜ Erste Verfügbarkeit eingetragen                       │
│  ⬜ System-Trainings angesehen (Learning Path)            │
│  ⬜ Compliance-Training abgeschlossen                     │
│  ⬜ Nutzungsvereinbarung signiert                         │
│  ⬜ Profile Completeness >85%                            │
│  ⬜ First Staffing Request Ready                         │
│                                                            │
│  💬 Notizen (falls Probleme):                             │
│  [Tim braucht Hilfe? Hier schreiben]                      │
│                                                            │
│  🔔 Alerts:                                               │
│  ⚠️ Tim ist noch im Onboarding Dialog (Schritt 3 von 8)  │
│     Erwartet: bis Mittwoch abgeschlossen                 │
│     Wenn über Freitag → Martina manuell fragen            │
│                                                            │
│  [Forcefully abgeschlossen] ← nur wenn kritisch           │
│  [Kontakt-Info an Tim] ← Martina kann anrufen/emailen    │
│  [Mentor Stefan kontaktieren] ← "Schau nach Tim"         │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Martinas Überwachungs-Logik:**
- Jeden Morgen checkt sie Onboarding-Status (30 Sekunden)
- Wenn >3 Tage nicht fortgeschritten: folgt auf
- Sieht am Freitag 16:00 dass Tim noch bei Schritt 5 ist → Alert → Kontaktiert Tim

---

## Martinas Critical Missing Journeys

Diese 6 Flows sind essentiell für Martinas tägliche Arbeit aber fehlen noch in Consultry:

---

## Missing Journey 1: Morning Data Hygiene Flow

**Szenario:** Martina öffnet Consultry morgens um 08:00, braucht Data-Quality-Übersicht
**Dauer:** 10–15 Minuten
**Outcome:** System-Health klar, Fehler identifiziert, Lösungs-Queue priorisiert

### [MARTINA-MJ1-S1] Data Hygiene Dashboard (Desktop)

**Trigger:** Martina öffnet Admin-Panel

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Admin / System Health & Data Hygiene                               │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  SYSTEM HEALTH STATUS                                                │
│  ┌────────┬──────────┬──────────┬──────────┬───────────┐            │
│  │ Overall│ Database │ APIs &   │ Import   │ Exports   │            │
│  │ Health │ Sync     │ Integr.  │ Jobs     │ Queue     │            │
│  │ 🟢 99% │ 🟢 OK    │ 🟡 Warn  │ 🟢 OK    │ 🟢 OK     │            │
│  └────────┴──────────┴──────────┴──────────┴───────────┘            │
│                                                                      │
│  API & INTEGRATION STATUS                                           │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Calendly ↔ mpl.consultry                  Last sync: 12 Min ago│   │
│  │ 🟢 OK · 847 events synced today                               │   │
│  │                                                              │   │
│  │ Slack ↔ mpl.consultry (Notifications)      Last: 2 Min ago   │   │
│  │ 🟢 OK · 23 messages sent today                               │   │
│  │                                                              │   │
│  │ Mailbox (t.schneider@mpl.de) ↔ Consultry  Last: failed 34h ago│   │
│  │ 🔴 ERROR · Mailbox von Tim wurde erzeugt aber nicht synced!  │   │
│  │            → Tim kann keine Notifications per Mail bekommen  │   │
│  │ [Fix: Manuell re-sync] [Tim konfigurieren] [Tim kontaktieren]│   │
│  │                                                              │   │
│  │ Gulp (Freelancer DB) ↔ mpl.consultry      Last: 8 Min ago   │   │
│  │ 🟢 OK · 7 freelancer profiles updated                        │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  DATA QUALITY ISSUES                                                 │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ 📊 Found: 7 issues · 3 critical · 4 warnings                 │   │
│  │                                                              │   │
│  │ 🔴 CRITICAL (3):                                             │   │
│  │ ├─ Duplicate profiles: Maria Weber (2x accounts)            │   │
│  │ │  Quelle: Mailbox sync + manual entry (2023)               │   │
│  │ │  Action: [Merge]  [Delete]  [Manual review]               │   │
│  │ │                                                            │   │
│  │ ├─ Missing mandatory field: 8 Berater ohne "Standort"       │   │
│  │ │  Quelle: Bulk-Import von Freelancer (Gulp) 02.03.2026     │   │
│  │ │  Berater: [Liste zeigen]                                  │   │
│  │ │  Action: [Bulk-Fix: Wien] [Manual review] [Delete]        │   │
│  │ │                                                            │   │
│  │ ├─ Inconsistent data: 5 Berater haben alte Practices       │   │
│  │ │  Quelle: CV-Updates seit Struktur-Umstellung (Jan 2026)  │   │
│  │ │  Berater: Stefan K., Markus S., Lisa T., Anna M., Boris K.│  │
│  │ │  Action: [Auto-Map alt→neu] [Manual review]               │   │
│  │ │                                                            │   │
│  │ ⚠️ WARNINGS (4):                                             │   │
│  │ ├─ Outdate Skills: 12 Berater mit "Knowledge Update" >90 Tage│  │
│  │ │  Action: [Send Notification] [Ignore]                     │   │
│  │ │                                                            │   │
│  │ ├─ Missing Verfügbarkeit: 6 Berater (nicht freigegeben)     │   │
│  │ │  Action: [Request from Berater] [Set default: 80%]        │   │
│  │ │                                                            │   │
│  │ ├─ Contract expiration: 3 Verträge laufen in <30 Tagen ab   │   │
│  │ │  Berater: Tobias R. (15.05), Petra L. (22.05), Hans M....│   │
│  │ │  Action: [Notify Thomas] [Renewal template] [Ignore]      │   │
│  │ │                                                            │   │
│  │ └─ Unsynced Slack: 2 neue Berater nicht in Slack #team      │   │
│  │   Action: [Auto-invite] [Manual]                            │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  IMPORT JOBS (Scheduler)                                             │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Daily 06:00 — Gulp Freelancer Import         ✅ OK (heute)   │   │
│  │ Daily 12:00 — LinkedIn Skill Refresh         ✅ OK            │   │
│  │ Weekly (Mon 02:00) — Contract Expiry Check   ✅ Nächste: Mon │   │
│  │ Quarterly (1. des Monats) — Financial Audit  ✅ Nächste: 01.04│   │
│  │                                                              │   │
│  │ Manuell:                                                     │   │
│  │ [SAP Skills Aktualisierung] [Partner DB Sync] [Custom Import]│   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ACTION SUMMARY                                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Priority Queue (heute zu bearbeiten):                        │   │
│  │                                                              │   │
│  │ 🔴 [1] Tim Schneider Mailbox Sync fehler → 5 Min Fix         │   │
│  │ 🔴 [2] Maria Weber Duplicate Merge → 10 Min                 │   │
│  │ 🔴 [3] 8 Berater Standort setzen → 15 Min Bulk-Fix           │   │
│  │ ⚠️  [4] Contract expirations → Info an Thomas (5 Min)        │   │
│  │ ⚠️  [5] Skill Updates anfordern (12 Berater) → Bulk-Message  │   │
│  │                                                              │   │
│  │ Geschätzte Bearbeitungszeit: 35 Minuten                      │   │
│  │ [Heute abarbeiten]  [Plan für morgen]                        │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Martinas Workflow:**
1. Sieht morgens Übersicht: 3 critical, 4 warnings
2. Arbeitet critical nacheinander ab
3. Nutzt Bulk-Fixes wo möglich (10 Min Zeit sparen vs. einzelnes Klicken)
4. Sendet Notifications an betroffene Berater (z.B. "Profil aktualisieren nötig")
5. Nach ~35 Min: alle kritischen Issues bearbeitet, Tag kann starten

**Design-Requirements:**
- ✅ Übersicht auf einen Blick (nicht 20 Screens durchklicken)
- ✅ Farben-Kodierung: 🔴 critical, ⚠️ warning, 🟢 ok
- ✅ Action-Buttons pro Issue (Fix, Investigate, Ignore)
- ✅ Bulk-Aktionen für mehrere Berater
- ✅ Time-Estimates pro Aktion (Martina mag Zeitbudgets)
- ✅ Integration mit Notification System (kann direkt Berater anschreiben)

---

## Missing Journey 2: Berater-Daten Bulk-Edit Flow

**Szenario:** Alle 12 Berater in Wien bekommen neue Büroadresse (Umzug am 15.05.2026)
**Dauer:** 5 Minuten (mit Bulk-Edit) vs. 60 Minuten (ohne)
**Outcome:** Alle 12 Profile aktualisiert, consistent, audit-trail vorhanden

### [MARTINA-MJ2-S1] Bulk-Edit Workflow

**Trigger:** Martina klickt "Team" → Filter: "Standort = Wien" → 12 Ergebnisse

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Team / Standort: Wien (12 Berater)                                │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  FILTER & SORT                                                       │
│  Standort: Wien ✓  │  Practice: [Alle ▼]  │  Seniority: [Alle ▼]   │
│  Search: ___________                        [Alle löschen]          │
│                                                                      │
│  ══════════════════════════════════════════════════════════════════ │
│                                                                      │
│  TABELLEN-VIEW (Bulk-Select, Bulk-Edit ready)                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ [☑ Select All]                           [Bulk Actions ▼]   │   │
│  ├──────────────────────────────────────────────────────────────┤   │
│  │ ☑ │ Name           │ Practice    │ Seniority │ Office Addr  │   │
│  ├──────────────────────────────────────────────────────────────┤   │
│  │ ☑ │ Stefan Kraus   │ SAP         │ Senior    │ Karmeliter... │   │
│  │ ☑ │ Markus S.      │ SAP         │ Senior    │ Karmeliter... │   │
│  │ ☑ │ Lisa T.        │ SAP         │ Mid       │ Karmeliter... │   │
│  │ ☑ │ Anna M.        │ Cloud       │ Mid       │ Karmeliter... │   │
│  │ ☑ │ Boris K.       │ Cloud       │ Senior    │ Karmeliter... │   │
│  │ ☑ │ Clara D.       │ Infrastructure│ Mid      │ Karmeliter... │   │
│  │ ☑ │ Dirk F.        │ SAP         │ Junior    │ Karmeliter... │   │
│  │ ☑ │ Eva L.         │ Cloud       │ Junior    │ Karmeliter... │   │
│  │ ☑ │ Frank M.       │ Infrastructure│ Senior  │ Karmeliter... │   │
│  │ ☑ │ Greta N.       │ SAP         │ Mid       │ Karmeliter... │   │
│  │ ☑ │ Horst O.       │ SAP         │ Junior    │ Karmeliter... │   │
│  │ ☑ │ Inge P.        │ Cloud       │ Senior    │ Karmeliter... │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  BULK ACTIONS MENU (dritte Spalte oben)                             │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Bulk Actions [▼]                                             │   │
│  │                                                              │   │
│  │ ☑ Update Office Address (Änderung für Wien)                 │   │
│  │ ☑ Update Practice Zuordnung                                 │   │
│  │ ☑ Change Standort                                           │   │
│  │ ☑ Grant/Remove Role                                         │   │
│  │ ☑ Export (alle 12 als PDF/Excel/CSV)                        │   │
│  │ ☑ Send Notification (alle 12 eine Nachricht)                │   │
│  │ ☑ Delete (nur admin!)                                       │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  MARTINA WÄHLT: "Update Office Address"                             │
│                                                                      │
│  Dialog öffnet sich:                                                │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                                                              │   │
│  │  BULK-UPDATE: Office Address                               │   │
│  │  Betroffen: 12 Berater                                     │   │
│  │                                                              │   │
│  │  Alte Adresse: Karmeliterstraße 4, 1020 Wien               │   │
│  │  Neue Adresse: [Neubaugasse 12, 1070 Wien               ]   │   │
│  │                                                              │   │
│  │  ⚠️ Warnung: Diese Änderung wird 12 Profilen angewendet.    │   │
│  │  Alle Berater erhalten Auto-Notification.                  │   │
│  │                                                              │   │
│  │  ☑ Benachrichtige alle 12 Berater: "Deine Office-Adresse  │   │
│  │     hat sich geändert — neue Adresse oben in deinem Profil"│   │
│  │                                                              │   │
│  │  [Bestätigen (12 Update-Jobs werden gestartet)]             │   │
│  │  [Abbrechen]                                               │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  Martina klickt "Bestätigen"                                       │
│                                                                      │
│  ✅ System-Feedback:                                               │
│  "12 / 12 Berater aktualisiert. 12 Notifications gesendet.         │
│   Job-ID: BULK-202603-8372 (Audit-Trail)"                         │
│                                                                      │
│  [Undo] (nächste 30 Minuten möglich)  [Close]                     │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Design-Requirements:**
- ✅ Tabellen-View (Martinas Lieblings-Format)
- ✅ Multi-Select (Checkbox pro Row)
- ✅ Select All (Kopf-Checkbox)
- ✅ Bulk Actions Dropdown (Update, Export, Delete, Send Message)
- ✅ Bestätigungs-Dialog (warnt vor Konsequenzen)
- ✅ Success-Feedback mit Audit-Trail-Link
- ✅ Undo-Möglichkeit (30 Minuten)
- ✅ Notification Auto-Send als Option

---

## Missing Journey 3: Report Generation + Export Flow

**Szenario:** Thomas braucht Auslastungsbericht für Partner-Meeting nächste Woche
**Dauer:** 10 Minuten (mit Report-Builder) vs. 90 Minuten (Excel-Bastelei)
**Outcome:** PDF-Bericht im Corporate Design, alle KPIs aktuell

### [MARTINA-MJ3-S1] Report-Builder

**Trigger:** Martina öffnet "Reports" → "Neue Report erstellen"

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Reports / Auslastungsbericht erstellen                             │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  STEP 1: REPORT-TEMPLATE WÄHLEN                                     │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ [🔍 Alle Templates durchsuchen]                             │   │
│  │                                                              │   │
│  │ HÄUFIG GENUTZT:                                              │   │
│  │ □ Auslastungsbericht (Monthly)           [Martina nutzt 2x/Mo]│  │
│  │ □ Pipeline-Review für Partners           [Thomas nutzt 1x/Mo] │  │
│  │ □ Financial DB-Report (Quarterly)        [CFO nutzt 4x/Jahr]  │  │
│  │ □ Berater-Verfügbarkeit-Bericht         [Katrin nutzt 1x/Wo]   │  │
│  │                                                              │   │
│  │ ALLE TEMPLATES:                                              │   │
│  │ □ Utilization Report                     [wählen]            │   │
│  │ □ Revenue by Practice                    [wählen]            │   │
│  │ □ Team Skill Matrix                      [wählen]            │   │
│  │ □ Contract Management Report             [wählen]            │   │
│  │ □ Custom SQL Query                       [wählen]            │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  Martina wählt: "Auslastungsbericht (Monthly)"                      │
│                                                                      │
│  ══════════════════════════════════════════════════════════════════ │
│                                                                      │
│  STEP 2: PARAMETER KONFIGURIEREN                                    │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Template: Auslastungsbericht (Monthly)                     │   │
│  │ Beschreibung: Utilization pro Berater, Practice,            │   │
│  │              Standort & Gesamtbild. KPIs: %, Ausstunden,    │   │
│  │              Bench-Zeit, Forecast nächste 8 Wochen.         │   │
│  │                                                              │   │
│  │ ──────────────────────────────────────────────────────────  │   │
│  │                                                              │   │
│  │ ZEITRAUM:                                                    │   │
│  │ Monat: [März 2026 ▼]  (oder Custom: [Von][Bis])            │   │
│  │                                                              │   │
│  │ FILTER:                                                      │   │
│  │ Standort:  [Alle ▼] oder [München] [Wien] [Zürich]          │   │
│  │ Practice:  [Alle ▼] oder [SAP] [Cloud] [Infrastructure]     │   │
│  │ Seniority: [Alle ▼] oder spezifische Level                  │   │
│  │ Status:    [☑ Intern] [☑ Freelancer] [☑ Partners]           │   │
│  │                                                              │   │
│  │ DIMENSIONEN (was anzeigen):                                  │   │
│  │ ☑ By Berater (Tabelle: Name, %, Ausstunden, Bench-Tag)     │   │
│  │ ☑ By Practice (Pie-Chart: SAP vs Cloud vs Infra)            │   │
│  │ ☑ By Standort (Bar-Chart: München vs Wien vs Zürich)        │   │
│  │ ☑ Forecast (8-Wochen-Projection basierend auf Staffing)     │   │
│  │ ☑ Summary KPIs (gesamte utilization, bench-days, revenue)   │   │
│  │                                                              │   │
│  │ DETAILS-LEVEL:                                               │   │
│  │ ☑ Projekt-Zuordnung (wer arbeitet auf welchem Projekt)      │   │
│  │ ☑ Tagessatz-Info (durchschn. Tagessatz pro Berater)         │   │
│  │ ☑ Billable Stunden (vs. Nicht-Billable wie Training)        │   │
│  │                                                              │   │
│  │ VORLAGE / DESIGN:                                            │   │
│  │ Corporate Design: [Consultry Standard ▼]                     │   │
│  │                   oder [Kundenspezifisch: mpl]               │   │
│  │                   oder [Einfache Tabelle (keine Grafiken)]   │   │
│  │                                                              │   │
│  │ FORMAT:                                                      │   │
│  │ ○ PDF (mit Grafiken, Corporate Design)                       │   │
│  │ ○ Excel (vollständige Daten, Excel-Formeln intact)           │   │
│  │ ○ CSV (rohe Daten)                                          │   │
│  │ ○ PowerPoint (Slides für Partner-Meeting)                    │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  Martina konfiguriert:                                              │
│  • Monat: März 2026                                                 │
│  • Alle Standorte                                                   │
│  • Nur interne Berater (nicht Freelancer)                           │
│  • By Berater, By Practice, By Standort                             │
│  • Mit Projekt-Zuordnung                                            │
│  • Corporate Design: mpl                                            │
│  • Format: PDF                                                      │
│                                                                      │
│  ══════════════════════════════════════════════════════════════════ │
│                                                                      │
│  STEP 3: VORSCHAU & GENERIERUNG                                     │
│                                                                      │
│  [📊 Vorschau zeigen]  ← Martina kann checken bevor generiert       │
│                                                                      │
│  Martina klickt "Vorschau" — sieht Mini-Version des Reports        │
│  → alle Parameter stimmen ✓                                         │
│                                                                      │
│  [🔴 Abbrechen]  [✅ Report generieren]                            │
│                                                                      │
│  Martina klickt "Report generieren" → System arbeitet ~30 Sekunden  │
│  ✅ "Auslastungsbericht_März2026.pdf" erstellt.                    │
│                                                                      │
│  ══════════════════════════════════════════════════════════════════ │
│                                                                      │
│  STEP 4: DOWNLOAD & DISTRIBUTION                                    │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Report ist bereit!                                           │   │
│  │ Auslastungsbericht_März2026.pdf (2.3 MB)                    │   │
│  │                                                              │   │
│  │ [📥 Herunterladen] [📧 Email senden] [☁️ Drive hochladen]   │   │
│  │                                                              │   │
│  │ Email-Vorlage:                                               │   │
│  │ An: [thomas.weber@mpl.de                                  ] │   │
│  │ Betreff: [Auslastungsbericht März 2026 — für Partner-Mtg ] │   │
│  │ Body: [vorausgefüllt mit Zusammenfassung]                 │   │
│  │                                                              │   │
│  │ [✅ Senden]  [Edit]  [Abbrechen]                            │   │
│  │                                                              │   │
│  │ Drive-Option:                                                │   │
│  │ Hochladen zu: [mpl/Reporting/2026 Partner Meetings]         │   │
│  │                                                              │   │
│  │ [✅ Hochladen]                                              │   │
│  │                                                              │   │
│  │ ⏱️  Report-Verlauf:                                          │   │
│  │ Diese Report wurde 12x in den letzten 3 Monaten erstellt.  │   │
│  │ [Letzte Version anzeigen] [Gesamter Verlauf]                │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Martinas Workflow:**
1. Wählt Template "Auslastungsbericht"
2. Setzt Parameter: Monat, alle Standorte, nur Intern
3. Checkboxes: By Berater, By Practice, By Standort
4. Format: PDF im mpl-Design
5. Vorschau ← Kontrolle
6. "Report generieren" → 30 Sekunden warten
7. "Email senden" an Thomas
8. Fertig — 10 Minuten total

**Design-Requirements:**
- ✅ Template-Bibliothek (Häufig genutzte Reports oben)
- ✅ Intuitive Parameter (Filter, Dimensionen, Format)
- ✅ Vorschau vor Generierung
- ✅ Auto-Generierung (keine manuelle Excel-Bastelei)
- ✅ Corporate Design in Output (nicht-verhandelbar)
- ✅ Multiple Export-Formate (PDF, Excel, CSV, PowerPoint)
- ✅ Direct Distribution (Email, Drive, Download)
- ✅ Report-Verlauf (wer hat wann was generiert)

---

## Missing Journey 4: CV Bulk-Export für Proposal

**Szenario:** Katrin braucht alle SAP-Practice CVs als PDF für RetailCorp Proposal
**Dauer:** 5 Minuten (mit Bulk-Export) vs. 45 Minuten (CVs sammeln, formatieren)
**Outcome:** 12 PDFs im Corporate Design, alle aktuell, in einem Ordner

### [MARTINA-MJ4-S1] CV-Export Wizard

**Trigger:** Katrin (oder Martina) öffnet "Team" → Filter: "Practice = SAP" → "Bulk Export CVs"

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Team / CV Bulk Export                                              │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  STEP 1: TEAM AUSWÄHLEN                                              │
│                                                                      │
│  Gefiltert: Practice = SAP (12 Berater)                              │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ [☑ Alle 12 wählen]                                          │   │
│  ├──────────────────────────────────────────────────────────────┤   │
│  │ ☑ Stefan Kraus (Senior SAP)                                 │   │
│  │ ☑ Markus S. (Senior SAP Retail)                              │   │
│  │ ☑ Lisa T. (Mid Change Management)                            │   │
│  │ ☑ Tim K. (Junior Data Migration)                             │   │
│  │ ☑ Anna M. (Junior SAP)                                       │   │
│  │ ... 7 weitere                                                │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ══════════════════════════════════════════════════════════════════ │
│                                                                      │
│  STEP 2: CV-TEMPLATE & OPTIONEN                                      │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ CV-Format: [Consultry Standard ▼]                            │   │
│  │            (Deutsch) (1 page / 2 page)                       │   │
│  │            oder [Englisch]                                   │   │
│  │            oder [Kundenspezifisch: RetailCorp]               │   │
│  │                                                              │   │
│  │ Inhalts-Optionen:                                            │   │
│  │ ☑ Profil-Foto (wenn vorhanden)                              │   │
│  │ ☑ Skills (mit Proficiency-Level: Senior/Mid/Junior)         │   │
│  │ ☑ Projekte (letzte 5 mit Branche + Dauer)                   │   │
│  │ ☑ Zertifizierungen                                          │   │
│  │ ☑ Kontaktinfo (nur für Kunde: ja/nein?)                     │   │
│  │ ☑ References (Kundenfeedback NPS-Scores)                    │   │
│  │ ☑ Sprachen & Reisebereitschaft                              │   │
│  │ ☐ Mentoring / Leadership Erfahrung                          │   │
│  │ ☐ Publikationen / Zertifikationen                           │   │
│  │                                                              │   │
│  │ Ordering:                                                    │   │
│  │ ○ Alphabetisch (Stefan → Tim → ...)                          │   │
│  │ ○ Nach Seniority (Senior → Mid → Junior)                     │   │
│  │ ○ Nach Relevanz für Projekt (Top-Matches zuerst)             │   │
│  │                                                              │   │
│  │ Dateiformat:                                                 │   │
│  │ ○ PDF (einzelne Dateien)                                     │   │
│  │ ○ PDF (kombiniert: alle 12 in 1 Datei mit Bookmarks)        │   │
│  │ ○ DOCX (editable)                                           │   │
│  │                                                              │   │
│  │ Naming Convention:                                           │   │
│  │ ○ Standar: [Name_CV_2026_DE.pdf]                             │   │
│  │ ○ Custom:  [RetailCorp_SAP_[Name].pdf]                       │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  Martina/Katrin konfiguriert:                                       │
│  • 12 SAP-Berater alle gewählt                                      │
│  • Format: Consultry Standard (Deutsch, 2 page)                     │
│  • Mit Foto, Skills, Projekte, Zertifikate, References             │
│  • Ordering: Nach Relevanz für Projekt (Top-Matches zuerst)         │
│  • Format: PDF kombiniert (1 Datei mit Bookmarks)                   │
│  • Naming: RetailCorp_SAP_[Name].pdf                                │
│                                                                      │
│  ══════════════════════════════════════════════════════════════════ │
│                                                                      │
│  STEP 3: VORSCHAU & GENERIERUNG                                      │
│                                                                      │
│  [📄 Vorschau (ersten 2 CVs)] ← Quick-Check des Layouts             │
│                                                                      │
│  ✅ "Generieren & Download"                                         │
│                                                                      │
│  System arbeitet ~1-2 Minuten (12 CVs + PDF-Kompilation)            │
│                                                                      │
│  ✅ Download:                                                       │
│  RetailCorp_SAP_CVs.zip (2.8 MB)                                   │
│  └─ RetailCorp_SAP_Stefan_Kraus.pdf (185 KB)                       │
│  └─ RetailCorp_SAP_Markus_S.pdf (192 KB)                           │
│  └─ RetailCorp_SAP_Lisa_T.pdf (178 KB)                             │
│  ... (9 weitere PDFs)                                               │
│  └─ CV_COVER_SHEET.pdf (Übersicht: 12 Namen, Seniorities)         │
│                                                                      │
│  Alternativ: Combined PDF (alle 12 in 1 Datei mit Bookmarks)       │
│  RetailCorp_SAP_CVs_Combined.pdf (2.1 MB)                          │
│                                                                      │
│  ══════════════════════════════════════════════════════════════════ │
│                                                                      │
│  STEP 4: DISTRIBUTION                                               │
│                                                                      │
│  [💾 Lokal speichern]                                               │
│  [📧 An Katrin emailen] (mit Proposal-Draft-Link?)                  │
│  [☁️ Zu Google Drive hochladen]                                     │
│  [📎 An Proposal anhängen] (wenn Proposal offen)                    │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Design-Requirements:**
- ✅ Filter-basiert (Practice, Standort, Seniority, Verfügbarkeit)
- ✅ Bulk-Select (alle mit Checkbox, oder einzelne)
- ✅ CV-Template-Optionen (Format, Sprache, Inhalte)
- ✅ Ordering-Optionen (Alphabetisch, Seniority, Relevanz)
- ✅ Kombinierte PDF Option (1 Datei mit Bookmarks)
- ✅ Custom Naming Convention
- ✅ Vorschau vor Generierung
- ✅ Zip-Download für mehrere Dateien
- ✅ Direct Distribution (Email, Drive, Proposal-Anhang)

---

## Missing Journey 5: Vertragsverwaltung Flow

**Szenario:** Martina trackt Vertragsfristen und koordiniert Renewals mit Thomas & HR
**Dauer:** Continuous (1–2x/Woche Check) + monatliche Renewals
**Outcome:** Keine übersehenen Fristen, alle Renewals koordiniert, Audit-Trail vorhanden

### [MARTINA-MJ5-S1] Contract Management Dashboard

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Contracts / Management                                             │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ÜBERSICHT: Alle Berater-Verträge                                    │
│  ┌────────┬──────────┬──────────┬──────────┬───────────┐            │
│  │ Total  │ Aktiv    │ Renewals │ Laufen   │ Abgelaufen│            │
│  │ 85     │ 78       │ 3        │ 4        │ 0         │            │
│  └────────┴──────────┴──────────┴──────────┴───────────┘            │
│                                                                      │
│  ⚠️ ALERTS & FÄLLIGKEITEN                                            │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ 🔴 3 Verträge laufen in <30 Tagen ab (URGENT):              │   │
│  │                                                              │   │
│  │ [1] Tobias R.           Laufzeit bis: 15.05.2026 (19 Tage)  │   │
│  │     Vertrag: Festanstellung als Senior Consultant           │   │
│  │     Status: Renewal IN PROGRESS (HR hat Vorlage gesendet)   │   │
│  │     Benötigte Aktion: "Unterzeichnung abwarten"              │   │
│  │     [Tracken] [Erinnern] [Notizen hinzufügen]               │   │
│  │                                                              │   │
│  │ [2] Petra L.            Laufzeit bis: 22.05.2026 (26 Tage)  │   │
│  │     Vertrag: Befristete Anstellung (3 Jahre)                │   │
│  │     Status: Renewal REQUESTED (noch nicht genehmigt)        │   │
│  │     Benötigte Aktion: "Thomas Approval + HR Sign-Off"       │   │
│  │     [Ansicht] [Genehmigung anfragen] [Notizen]              │   │
│  │                                                              │   │
│  │ [3] Hans M.             Laufzeit bis: 01.06.2026 (32 Tage)  │   │
│  │     Vertrag: Externe Beauftragung (Freelancer)              │   │
│  │     Status: Renewal NOT STARTED (Kupfer neuer Vertrag?)    │   │
│  │     Benötigte Aktion: "Neuverhandlung mit Hans klären"      │   │
│  │     [Kontaktieren] [Vorlage senden] [Notizen]               │   │
│  │                                                              │   │
│  │ 🟡 4 Verträge laufen in 30–90 Tagen ab (MONITOR):           │   │
│  │ • Sarah W.   ... 45 Tage                                     │   │
│  │ • Karin B.   ... 67 Tage                                     │   │
│  │ • Marcus K.  ... 78 Tage                                     │   │
│  │ • Petra S.   ... 89 Tage                                     │   │
│  │                                                              │   │
│  │ [Alle 4 mit Renewal-Vorlagen kontaktieren]                  │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  VERTRAGS-TABELLE (sortierbar, filterbar)                            │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ [Filter:] Typ [Alle ▼] Status [Alle ▼] TTL [Alle ▼]        │   │
│  ├──────────────────────────────────────────────────────────────┤   │
│  │ Name        │ Typ         │ Start    │ Endet     │ Status    │   │
│  ├──────────────────────────────────────────────────────────────┤   │
│  │ Stefan K.   │ Festanstellung│01.01.22│ ∞ (unbefr.)│ ✅ Aktiv  │   │
│  │ Markus S.   │ Festanstellung│01.05.23│ 30.04.26  │ 🟢 OK (9M) │   │
│  │ Tobias R.   │ Festanstellung│01.07.23│ 15.05.26  │ 🔴 Expiring│   │
│  │ Petra L.    │ 3J-Befristet  │01.06.23│ 22.05.26  │ 🔴 Renewal│   │
│  │ Hans M.     │ Freelancer    │01.09.24│ 01.06.26  │ ⚠️ Start    │   │
│  │ ...         │              │        │           │           │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  VERTRAGS-DETAIL (Modal)                                             │
│  [Klick auf Row: Tobias R. → Details öffnen]                       │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ VERTRAG: Tobias R.                                          │   │
│  │ Typ: Festanstellung als Senior Consultant                   │   │
│  │ Startdatum: 01.07.2023                                       │   │
│  │ Enddatum: 15.05.2026                                        │   │
│  │ Status: 🔴 Expires in 19 days                               │   │
│  │                                                              │   │
│  │ DOKUMENTE:                                                   │   │
│  │ 📄 Original_Vertrag_Tobias_2023.pdf        [Download]       │   │
│  │ 📄 Renewed_Angebot_draft_Tobias_2026.pdf   [View] [Edit]    │   │
│  │                                                              │   │
│  │ RENEWAL STATUS:                                              │   │
│  │ Status: IN PROGRESS                                         │   │
│  │ HR: Vorlage 01.05.2026 gesendet ✅                          │   │
│  │ Tobias: Unterschrift pending ⏳                             │   │
│  │ Thomas: Approval abgewartet ⏳                              │   │
│  │                                                              │   │
│  │ TIMELINE:                                                    │   │
│  │ 26.04.2026  HR sendet Renewal-Vorlage                       │   │
│  │ 01.05.2026  Tobias erhält & unterschreibt (pending)         │   │
│  │ TBD         Martina erhält unterschriebenen Vertrag          │   │
│  │ TBD         Thomas reviewt & gibt frei                      │   │
│  │ TBD         Rechtabteilung archiviert                        │   │
│  │                                                              │   │
│  │ NOTIZEN:                                                     │   │
│  │ "Tobias möchte Salary-Erhöhung von 50K→55K besprechen"     │   │
│  │ [Hinzufügen]  [Edit]                                        │   │
│  │                                                              │   │
│  │ AKTIONEN:                                                    │   │
│  │ [Erinnern (tägliche Reminder bis 15.05)]                    │   │
│  │ [Tobias kontaktieren: wie steht Unterschrift?]              │   │
│  │ [Thomas erinnern: approval pending]                         │   │
│  │ [Vertrag-PDF an Rechtabteilung senden]                      │   │
│  │ [Vertrag exportieren] [Notizen exportieren]                 │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Design-Requirements:**
- ✅ Übersicht: Gesamt-Count (Aktiv, Renewals, Laufend, Abgelaufen)
- ✅ Alert-Bereich (🔴 <30 Tage, 🟡 30–90 Tage, 🟢 >90 Tage)
- ✅ Sortierbare Tabelle (Name, Typ, Start, Endet, Status, TTL)
- ✅ Vertrags-Detail-Modal (Dokumente, Timeline, Notizen, Aktionen)
- ✅ Automatische Reminder (täglich, weekly, custom)
- ✅ Kontakt-Templates (Email an Berater, Thomas, HR)
- ✅ Dokument-Verwaltung (Upload, Download, Versioning)
- ✅ Audit-Trail (wer hat wann was geändert)

---

## Missing Journey 6: Financial Data Preparation (Rechnungsläufe)

**Szenario:** Monatlicher Rechnungslauf: Martina bereitet Daten vor, Controller rechnet ab
**Dauer:** 2 Stunden (mit System-Unterstützung) vs. 8 Stunden (manuell)
**Outcome:** Saubere Daten, alle Rechnungen generiert, Audit-Trail vorhanden

### [MARTINA-MJ6-S1] Financial Data Preparation

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Financial / Billing Run — März 2026                               │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  SCHRITT 1: PRE-BILLING CHECKLIST                                    │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                                                              │   │
│  │  ☑ Alle Projekte haben aktuelle Stunden-Einträge           │   │
│  │  ☑ Alle Berater-Verfügbarkeitsstateu aktuell               │   │
│  │  ☑ Keine duplizierten Stunden-Einträge                      │   │
│  │  ☑ Tagessätze sind im System korrekt (nicht abgelaufen)     │   │
│  │  ☑ Alle Kunden haben Rechnungsadressen                      │   │
│  │  ☑ Invoicing-Status pro Projekt gesetzt (billable/non-bill) │   │
│  │  ☑ Rabatte/Sonderkondition dokumentiert                     │   │
│  │  ☑ Deviate Abweichungen geklärt (Stunden ≠ Forecast)       │   │
│  │                                                              │   │
│  │  [Validation starten] ← System prüft alle oben              │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  Martina klickt "Validation starten" → System läuft 3 Minuten       │
│                                                                      │
│  ✅ oder 🔴 VALIDATION RESULTS:                                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ ✅ 78/85 Berater haben Stunden-Einträge für März            │   │
│  │    🔴 7 Berater haben KEINE Einträge:                       │   │
│  │       - Anna M. (sollte 40h/Woche haben)                    │   │
│  │       - Boris K. (sollte 40h/Woche haben)                   │   │
│  │       - Clara D. (Urlaub KW 12–13, Rest OK)                 │   │
│  │       - Dirk F. (Bench, aber 0h — korrekt)                  │   │
│  │       - Eva L. (sollte 40h/Woche haben)                     │   │
│  │       - Frank M. (Urlaub ganz März, OK)                     │   │
│  │       - Greta N. (sollte 40h/Woche haben)                   │   │
│  │                                                              │   │
│  │    → 4 Berater haben FEHLENDE Einträge:                     │   │
│  │      [Anna M.] [Boris K.] [Eva L.] [Greta N.]               │   │
│  │      [Diese 4 kontaktieren: "Stunden eintragen"]             │   │
│  │      [Manuell eintragen für die 4]                          │   │
│  │      [Überspringen — manuell mit Controller klären]          │   │
│  │                                                              │   │
│  │ ✅ Alle Tagessätze sind aktuell (keine abgelaufen)          │   │
│  │                                                              │   │
│  │ ⚠️  3 Kunden haben unvollständige Rechnungsadressen:        │   │
│  │    - RetailCorp AG: kein Kostenplatz (benötigt für Zahlung) │   │
│  │    - InsureTech GmbH: alte Adresse (Umzug 01.03.2026)       │   │
│  │    - FinServCo: PO-Nummer fehlt (benötigt für Freigabe)     │   │
│  │                                                              │   │
│  │    [Adressen korrigieren] [Mit Kundenkontakt klären]        │   │
│  │                                                              │   │
│  │ ✅ Keine duplizierten Stunden erkannt                        │   │
│  │                                                              │   │
│  │ 🔴 2 Projekte haben Deviate (Ist ≠ Forecast):               │   │
│  │    - MedTech GmbH: Forecast 150h, Ist 180h (+30h Scope-   │   │
│  │      Creep). Documented? Ja (Change Request #CR-001)        │   │
│  │      → [Approved & Invoice Normal]  [Mark as Deviation]     │   │
│  │    - RetailCorp: Forecast 120h, Ist 95h (-25h). Grund?    │   │
│  │      Nicht dokumentiert. → [Klären mit Projektleiter]       │   │
│  │                                                              │   │
│  │ VALIDATION SUMMARY:                                          │   │
│  │ Status: ⚠️ WARNINGS (4 items) — Lösen vor Billing!         │   │
│  │ [Alle Warnings adressieren & Validation erneut starten]     │   │
│  │ [Mit Warnings fortfahren — Controller wird informiert]       │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  Martina adressiert Warnings:                                        │
│  1. Kontaktiert Anna M., Boris K., Eva L., Greta N. → Stunden erhalten
│  2. Aktualisiert Rechnungsadressen in CRM                            │
│  3. Quittiert MedTech Deviation (Change Request vorhanden)           │
│  4. Kontaktiert Stefan (MedTech PL) zur RetailCorp -25h-Klärung     │
│                                                                      │
│  Nach 1–2 Stunden: Alle Warnings bearbeitet                          │
│                                                                      │
│  ══════════════════════════════════════════════════════════════════ │
│                                                                      │
│  SCHRITT 2: INVOICE GENERATION                                       │
│                                                                      │
│  [✅ All clear — Invoice Run starten]                              │
│                                                                      │
│  System generiert automatisch:                                       │
│  • Invoice pro Kunde (aggregiert über alle ihre Projekte)           │
│  • Verwendete Berater + Tagessätze per Project                      │
│  • Rabatte/Specials (zB "mpl Partner-Rabatt -5%")                  │
│  • Gesamtsumme, MwSt., Zahlungsbedingungen (30 Tage Net)            │
│                                                                      │
│  ⏳ System arbeitet ~5 Minuten (85 Berater × Stunden × Tagessätze)  │
│                                                                      │
│  ✅ Billing Run Results:                                            │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ März 2026 Invoicing Summary:                                │   │
│  │                                                              │   │
│  │ Rechnungen Generiert:           8 (1 pro Kunde)             │   │
│  │ Gesamtumsatz (brutto):          €1.242.450                  │   │
│  │ Gesamtaufwand (Berater-Kosten): €892.150 (71,8%)            │   │
│  │ Gesamtmargin (DB1):             €350.300 (28,2%)            │   │
│  │                                                              │   │
│  │ Top 3 Revenue-Kunden:                                        │   │
│  │ 1. RetailCorp AG            €287.500                        │   │
│  │ 2. MedTech GmbH             €245.200                        │   │
│  │ 3. InsureTech GmbH          €189.350                        │   │
│  │                                                              │   │
│  │ Rechnungen Details:                                          │   │
│  │ [Alle 8 Invoices anzeigen]  [Excel-Export]  [PDF-Bündel]    │   │
│  │                                                              │   │
│  │ Nächste Schritte (Workflow):                                 │   │
│  │ 1. ☐ Martina: Review Invoices (15 Min)                     │   │
│  │ 2. ☐ Controller: Approve Invoices (30 Min)                 │   │
│  │ 3. ☐ Accounting: Push zu SAP/Buchhaltung (5 Min)            │   │
│  │ 4. ☐ Kurier: Send Invoices zu Kunden (Manual)              │   │
│  │                                                              │   │
│  │ [Approve & forward to Controller] [Request Changes]          │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  Martina reviewed Invoices (schnell — System hat sie schon gepprüft) │
│  → [Approve & forward to Controller]                                │
│                                                                      │
│  ══════════════════════════════════════════════════════════════════ │
│                                                                      │
│  SCHRITT 3: REVIEW & APPROVALS (Controller)                          │
│                                                                      │
│  Controller bekommt Notification mit allen 8 Invoices              │
│  (Martina's Workflow ist jetzt DONE — sie kann anderem arbeiten)    │
│                                                                      │
│  ══════════════════════════════════════════════════════════════════ │
│                                                                      │
│  AUDIT TRAIL                                                         │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Billing Run March 2026 — Audit-Log:                         │   │
│  │                                                              │   │
│  │ 01.04.2026 09:15  Martina  Created Billing Run (8 invoices) │   │
│  │ 01.04.2026 09:16  System   Validation: 4 Warnings found     │   │
│  │ 01.04.2026 09:45  Martina  Fixed warning #1: Anna M. hours  │   │
│  │ 01.04.2026 10:20  Martina  Fixed warning #2: Address data   │   │
│  │ 01.04.2026 10:45  Martina  Fixed warning #3: Deviation OK   │   │
│  │ 01.04.2026 11:15  Stefan K.  Approved deviation #4 (chat)   │   │
│  │ 01.04.2026 11:16  System   Re-validation passed — all OK    │   │
│  │ 01.04.2026 11:17  System   Generated 8 Invoices             │   │
│  │ 01.04.2026 11:35  Martina  Reviewed & approved Invoices     │   │
│  │ 01.04.2026 11:36  System   Forwarded to Controller           │   │
│  │ [Pending: Controller approval]                               │   │
│  │                                                              │   │
│  │ [Export Audit-Log als PDF] [Save to Compliance-Folder]      │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Design-Requirements:**
- ✅ Pre-Billing Checkliste (8 Items)
- ✅ Automatische Validation (mit spezifischen Warnings/Errors)
- ✅ Guidance pro Issue (links zu Fix-Actions)
- ✅ Invoice Generation (automatisch, alle 8 auf einmal)
- ✅ Revenue-Summary (Gesamtvolumen, Top Kunden, Margin)
- ✅ Multi-Level Approval (Martina → Controller → Accounting)
- ✅ Audit-Trail (wer, wann, was, mit Timestamps)
- ✅ Export-Optionen (Excel, PDF, Einzeln, Bündel)

---

## Zusammenfassung: Martinas Experience mit Consultry

**Die Realität für Martina ohne Consultry:**
- Berater-Daten sind inkonsistent (zu viel manuelle Pflege nötig)
- Keine Sicht auf System-Health (Integrations-Fehler werden zu spät erkannt)
- Bulk-Operationen sind unmöglich (klickt einzeln, 60+ Minuten für 12 Updates)
- Reports sind manuell gebastelt in Excel (80% falsch formatiert)
- CVs exportieren dauert Stunden (manuell sammeln, formatieren)
- Vertragsfristen werden übersehen (kein Tracking)
- Rechnungsläufe sind fehlerhaft (keine Validierung vor Invoice-Gen)

**Die neue Reality mit Consultry:**
- ✅ Datenqualität überwacht (morgens Hygiene-Check, Alerts)
- ✅ Integrations-Health sichtbar (API-Fehler sofort erkannt)
- ✅ Bulk-Operationen in 5 Minuten (alle 12 Wien-Berater auf einmal)
- ✅ Reports sind 1–2 Clicks (Corporate Design, alle Formate)
- ✅ CV-Bulk-Export in 5 Minuten (12 PDFs, korrekt formatiert)
- ✅ Vertragsfristen automatisch getrackt (30+ Tage Vorwarnung)
- ✅ Rechnungsläufe sind validiert (0 Fehler vor Invoice-Gen)

**Martinas Erfolgsmetriken:**
- Time-to-Admin-Task: -60% (von 3–4h auf 1–2h täglich)
- Data Quality: >95% (vs. 75% vorher)
- Bulk-Operation-Speed: 5 Min pro 12 Berater (vs. 60 Min)
- Report-Accuracy: 100% (vs. 70% vorher)
- Contract-Compliance: 0 missed deadlines (vs. 2–3/Jahr vorher)
- User-Satisfaction: sehr hoch (Martina liebt Bulk-Ops und Tabellen)


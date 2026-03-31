# Projekt-Abschluss — Screen Spec

**Screen-ID:** DLV-02
**PRD-Modul:** 11.1 — Project Intelligence
**Journey(s):** J5-S1 (Stefan schliesst Projekt ab, Wissen zurueckgeben)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Stefan (Senior Consultant / Projektleiter) — Projekt-Abschluss durchfuehren |
| **Sekundaer** | Thomas (Financial Review, Freigabe), Martina (Archivierung, Rechnungsabgleich) |
| **Frequenz** | Stefan: 2-4x/Quartal (bei Projektende). Thomas: Freigabe pro Abschluss. |
| **Trigger** | Project Dashboard → "Projekt abschliessen" (Button erscheint wenn letzter Milestone done), Notification "Go-Live abgeschlossen — Projekt bereit fuer Abschluss", Copilot Briefing → "RetailCorp ist bereit fuer Closeout." |
| **Herkunft** | Project Dashboard (DLV-01), Notification Center. |
| **Ziel** | Strukturierter Projekt-Abschluss: Deliverables pruefen, Lessons Learned erfassen (KI-generiert), Team-Feedback einholen, Financial Summary bestaetigen, Wissen in Knowledge Base ueberfuehren, Projekt archivieren. |
| **Geraete** | Desktop (primaer). Wizard-Flow nicht fuer Mobile geeignet. |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Stefan | einen gefuehrten Abschluss-Prozess durchlaufen | ich keinen Schritt vergesse |
| 2 | Stefan | KI-generierte Lessons Learned auf Basis der Projektdaten sehen | ich nicht alles selbst zusammenfassen muss |
| 3 | Stefan | die Lessons Learned bearbeiten und ergaenzen | meine persoenliche Einschaetzung einfliesst |
| 4 | Stefan | strukturiertes Feedback vom Team einholen | wir als Organisation lernen |
| 5 | Thomas | die Financial Summary des Projekts pruefen | ich die Rentabilitaet bewerten kann |
| 6 | Martina | den Archivierungs-Status sehen | ich weiss ob alle Dokumente vollstaendig sind |
| 7 | Stefan | relevante Erkenntnisse in die Knowledge Base ueberfuehren | kuenftige Projekte davon profitieren |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure (Wizard)**
**Begruendung:** Der Projekt-Abschluss ist ein sequentieller, mehrstufiger Prozess. Kein Bento Grid — jeder Schritt baut auf dem vorherigen auf. Wizard-Pattern mit Progress Indicator und Step-Navigation.

```
+-- Sidebar --+-- Projekt-Abschluss (Wizard, 6 Steps) ----------------------+
|             |                                                               |
|  Projekte   |  Breadcrumb: Projekte > RetailCorp AG > Abschluss           |
|  > Retail   |                                                               |
|             |  +-- Progress Bar -------------------------------------------+|
|             |  | [1 Deliver.] [2 Lessons] [3 Feedback] [4 Finanzen]       ||
|             |  |              [5 Knowledge] [6 Archiv]                     ||
|             |  | =============================>---------  Step 3 / 6       ||
|             |  +-----------------------------------------------------------+|
|             |                                                               |
|             |  +-- Step Content (2/3) --------+-- Context Rail (1/3) -----+|
|             |  |                               |                           ||
|             |  |  Step 3: Team-Feedback         |  Projekt-Summary         ||
|             |  |                               |  RetailCorp AG            ||
|             |  |  Feedback-Anfragen senden an: |  SAP S/4HANA Migration   ||
|             |  |                               |  Laufzeit: 6 Monate      ||
|             |  |  [x] Markus S. (Senior SC)    |  Budget: 480K EUR        ||
|             |  |  [x] Lisa T. (Consultant)     |  Status: Go-Live done    ||
|             |  |  [x] Tim K. (Junior SC)       |                           ||
|             |  |  [ ] Stefan K. (PL) — selbst  |  -- Bisherige Steps --   ||
|             |  |                               |  [done] 1. Deliverables   ||
|             |  |  Feedback-Template:           |  [done] 2. Lessons        ||
|             |  |  - Was lief gut?              |  [aktiv] 3. Feedback     ||
|             |  |  - Was wuerden wir anders     |  [ ] 4. Finanzen         ||
|             |  |    machen?                    |  [ ] 5. Knowledge        ||
|             |  |  - Bewertung (1-5 Sterne)     |  [ ] 6. Archiv           ||
|             |  |                               |                           ||
|             |  |  [Feedback senden]            |                           ||
|             |  |                               |                           ||
|             |  +-------------------------------+---------------------------+|
|             |                                                               |
|             |  +-- Footer -------------------------------------------------+|
|             |  |  [Zurueck]              [Speichern]  [Naechster Schritt →]||
|             |  +-----------------------------------------------------------+|
|             |                                                               |
+-------------+---------------------------------------------------------------+
```

**Wizard Steps:**

1. **Deliverable Check** — Checkliste aller geplanten Deliverables. Status: geliefert / ausstehend / entfallen. Dokument-Links mit Preview.
2. **Lessons Learned** — KI-generierter Entwurf (`ai-surface` bg, `ktype-ai-reveal`). Stefan kann bearbeiten, Abschnitte regenerieren, ergaenzen. Quellen-Attribution.
3. **Team Feedback** — Feedback-Anfragen an Team-Mitglieder senden. Template: Was lief gut / Was anders / Sterne-Bewertung. Inline-Antworten oder async via Notification.
4. **Financial Summary** — Budget-Ist vs. Plan, DB1-Marge, Rechnungsstatus, offene Posten. Read-only fuer Stefan, Thomas muss freigeben.
5. **Knowledge Base Update** — KI schlaegt vor, welche Erkenntnisse in die Knowledge Base ueberfuehrt werden. Tags, Kategorien, Sichtbarkeit. Stefan waehlt aus und bestaetigt.
6. **Archive** — Projekt-Status auf "Abgeschlossen" setzen. Alle Dokumente werden archiviert. Bestaetigung: "Projekt wird archiviert. Daten bleiben 7 Jahre verfuegbar."

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | 2/3 + 1/3 Layout. Step Content + Context Rail nebeneinander. |
| `breakpoint-lg` | 2/3 + 1/3 Layout, Context Rail schmaler (Projekt-Summary kompakter). |
| `breakpoint-md` | Single Column. Context Rail collapsed als Accordion ueber Step Content. |
| `breakpoint-sm` | Wizard-Flow nicht optimal fuer Mobile. Hinweis: "Projekt-Abschluss am Desktop durchfuehren." Nur Read-Only-Summary auf Mobile. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Projekt-Metadaten | Project Service | Bei Seitenladen |
| Deliverable-Liste + Status | Project Service | Bei Seitenladen |
| KI-generierte Lessons Learned | AI Content Service | Bei Step-2-Oeffnung, Cache bis Bearbeitung |
| Team-Mitglieder | Workforce Service | Bei Seitenladen |
| Team-Feedback-Antworten | Feedback Service | Real-time via WebSocket |
| Financial Summary (Budget, DB1, Rechnungen) | Financial Service | Bei Step-4-Oeffnung |
| Knowledge-Base-Vorschlaege | AI Knowledge Service | Bei Step-5-Oeffnung |
| Archivierungs-Status | Project Service | Bei Step-6-Oeffnung |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Content Generation** — KI generiert Lessons Learned Draft + Knowledge-Base-Vorschlaege. |
| **Lessons Learned Draft** | KI analysiert: Projekt-Risiken (historisch), Budget-Abweichungen, Milestone-Verzoegerungen, Team-Feedback, Pulse-Check-Ergebnisse. Generiert strukturierten Draft: "Was lief gut", "Was lief schwierig", "Empfehlungen fuer aehnliche Projekte". |
| **Abschnitts-Regenerierung** | Jeder Abschnitt hat einen "Regenerieren"-Button. Stefan kann den Fokus anpassen: "Mehr zu Datenmigration", "Weniger zu Kommunikation". |
| **Knowledge-Extraction** | KI identifiziert wiederverwendbare Erkenntnisse: Templates, Checklisten, Best Practices. Vorschlaege mit Confidence Score. |
| **Quellen-Attribution** | Jede KI-generierte Aussage zeigt Quelle: "Basierend auf 3 Change Requests", "Pulse-Check vom 15.03 zeigt Zufriedenheitsabfall." |
| **ktype-ai-reveal** | Lessons Learned Draft erscheint mit `ktype-ai-reveal` Animation bei Erstgenerierung. |

---

## 7. Preview Panel Integration

- **Step 1 (Deliverables):** Dokument-Links mit Inline-Preview (DS 6.10). PDF-Vorschau, DOCX-Thumbnail. Klick oeffnet Fullscreen-Preview.
- **Step 2 (Lessons Learned):** KI-generierter Text als AI Content Card mit `ai-surface` bg.
- **Step 4 (Financial Summary):** Budget-Chart eingebettet. Klick auf Rechnungs-Zeile oeffnet Rechnungs-Preview.
- **Step 5 (Knowledge Base):** Vorschau der Knowledge-Eintraege vor Ueberfuehrung.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Abschluss-Bereitschaft** | KI prueft automatisch ob alle Voraussetzungen erfuellt sind: alle Milestones done, alle Rechnungen gestellt, kein offener Feedback-Request. Fehlende Items als Warnung. |
| **Aehnliche Projekte** | "3 aehnliche SAP-Retail-Projekte abgeschlossen. Durchschnittliche Lessons: Datenmigration war groesster Risiko-Faktor." — Kontext fuer Lessons Learned. |
| **Knowledge-Relevanz** | KI bewertet: "Diese Erkenntnis ist relevant fuer 12 aktive Projekte mit SAP-Fokus." — Priorisierung der Knowledge-Eintraege. |
| **Post-Projekt-Empfehlung** | "RetailCorp hat Potenzial fuer Phase-2-Projekt. Empfehlung: Follow-up in 3 Monaten." — Handoff an BD (Katrin). |

---

## 9. Interaktions-Flows

### Flow 1: Kompletter Abschluss (Stefan, 30-45 Min)
```
Project Dashboard → "Projekt abschliessen" →
Step 1: Deliverables pruefen → alle [done] → Naechster Schritt →
Step 2: Lessons Learned → KI generiert Draft (ktype-ai-reveal) →
  Stefan bearbeitet 2 Abschnitte → Speichern → Naechster Schritt →
Step 3: Team Feedback → Feedback-Anfragen senden →
  (Antworten kommen async) → Naechster Schritt →
Step 4: Financial Summary → Stefan prueft → "Freigabe anfordern" →
  Thomas erhaelt Notification → Naechster Schritt →
Step 5: Knowledge Base → 3 Vorschlaege auswaehlen → Ueberfuehren →
Step 6: Archiv → Bestaetigung → "Projekt archivieren" →
  Success: "Projekt RetailCorp erfolgreich abgeschlossen."
```

### Flow 2: Thomas gibt Financial Summary frei
```
Thomas erhaelt Notification: "Financial Review: RetailCorp" →
Klick → Projekt-Abschluss oeffnet auf Step 4 →
Thomas prueft Budget, DB1, offene Posten →
"Freigeben" → Success Toast → Stefan wird benachrichtigt
```

### Flow 3: Team-Feedback eintragen (Lisa)
```
Lisa erhaelt Notification: "Feedback fuer RetailCorp-Projekt" →
Klick → Feedback-Formular oeffnet (Modal oder Inline) →
Lisa beantwortet 3 Fragen + Sterne-Bewertung →
"Absenden" → Success Toast → Stefan sieht Antwort in Step 3
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Project Dashboard | Projekt-Abschluss | Button "Projekt abschliessen" |
| **Von:** Notification Center | Projekt-Abschluss | Klick auf "Abschluss bereit" Notification |
| **Zu:** Financial Dashboard | `delivery/financial-dashboard.md` | Klick auf Budget-Detail in Step 4 |
| **Zu:** Knowledge Agent Chat | `ai-experience/knowledge-agent-chat.md` | Klick auf Knowledge-Eintrag in Step 5 |
| **Zu:** Consultant Profile | `foundation/consultant-profile-view.md` | Klick auf Team-Member in Step 3 |
| **Zu:** Project Dashboard | `delivery/project-dashboard.md` | Klick "Zurueck zum Projekt" |
| **Handoff an BD:** | Signal Feed / Opportunity Intake | KI-Empfehlung "Follow-up-Opportunity erstellen" |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board:** Kein direktes Aequivalent | Neuer Screen — Wizard-Pattern existiert nicht in Stitch. |
| **Figma:** Ausstehend | Wizard-Pattern muss neu erstellt werden. Step-Progress-Bar aus Onboarding-Wizard als Basis. |
| **Inspiration:** Berater-Onboarding Wizard | Wizard-Struktur und Progress Bar aehnlich. |

---

## 12. Akzeptanzkriterien

- [ ] 6-Step-Wizard mit Progress Bar und Step-Navigation
- [ ] Step 1: Deliverable-Checkliste mit Status und Dokument-Preview
- [ ] Step 2: KI-generierte Lessons Learned mit `ktype-ai-reveal` und `ai-surface` bg
- [ ] Step 2: Abschnitts-Regenerierung und manuelle Bearbeitung moeglich
- [ ] Step 3: Feedback-Anfragen an Team mit Template (Was gut / Was anders / Sterne)
- [ ] Step 4: Financial Summary (Budget, DB1, Rechnungen) — read-only fuer Stefan
- [ ] Step 4: Thomas kann Financial Summary freigeben
- [ ] Step 5: KI-Vorschlaege fuer Knowledge-Base-Eintraege mit Confidence Score
- [ ] Step 6: Archivierung mit Bestaetigung
- [ ] Context Rail zeigt Projekt-Summary und bisherigen Step-Fortschritt
- [ ] Wizard-State wird persistent gespeichert (Abbruch und Fortsetzen moeglich)
- [ ] Responsive: Desktop-only fuer Wizard. Mobile zeigt Read-Only-Summary.
- [ ] Accessibility: `role="progressbar"`, `aria-current="step"`, Keyboard-navigierbar

---

## 13. Offene Fragen

1. **Feedback-Timing:** Muss Stefan auf alle Team-Feedbacks warten, bevor er weiterklicken kann? *Empfehlung: Nein — async. Stefan kann fortfahren, Feedback wird nachtraeglich ergaenzt.*
2. **Lessons Learned Template:** Soll das Template konfigurierbar sein? *Empfehlung: Standard-Template in v1, konfigurierbar in v2.*
3. **Archivierungsfrist:** Wie lange bleiben archivierte Projekte verfuegbar? *Empfehlung: 7 Jahre (DSGVO-konform), danach Anonymisierung.*
4. **Financial Freigabe:** Kann Stefan den Abschluss auch ohne Thomas' Freigabe abschliessen? *Empfehlung: Nein — Financial Summary muss freigegeben sein fuer Archivierung.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. 6-Step-Wizard. KI-Lessons-Learned. Team-Feedback. |

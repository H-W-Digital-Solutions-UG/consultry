# Client Portal Pulse-Check — Screen Spec

**Screen-ID:** PLT-05
**PRD-Modul:** 12.2 — Client Portal
**Journey(s):** J17-S1 (Dr. Mueller gibt Projekt-Feedback)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Dr. Mueller (CIO / Externer Kunde) — strukturiertes Projekt-Feedback |
| **Sekundaer** | Weitere Kunden-Stakeholder (CFO, Projektleiter Kundenseite) |
| **Frequenz** | 1-2x/Monat (bei Milestone-Abschluss oder Projekt-Mitte). |
| **Trigger** | Client Portal Dashboard → "Feedback geben", E-Mail mit direktem Pulse-Check-Link, Automatischer Pulse-Check nach Milestone-Abschluss. |
| **Herkunft** | Client Portal Dashboard (PLT-04), E-Mail mit Magic Link. |
| **Ziel** | Strukturiertes Projekt-Feedback in unter 2 Minuten abgeben. Ergebnisse fliessen in Project Dashboard (DLV-01) als Kundenzufriedenheits-Indikator ein. |
| **Geraete** | Laptop (primaer), Smartphone (Quick-Feedback unterwegs). |

**Besonderheiten:**
- **White-Label:** Identisches Branding wie Client Portal Dashboard (PLT-04).
- **Maximal 5 Fragen:** Jede zusaetzliche Frage reduziert die Completion-Rate.
- **Unter 2 Minuten:** Design-Ziel fuer die gesamte Feedback-Eingabe.
- **Anonymous Option:** Dr. Mueller kann waehlen ob sein Name sichtbar ist.
- **Keine AI sichtbar:** Wie im gesamten Client Portal.

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Dr. Mueller | in unter 2 Minuten Feedback geben | es mich nicht von meiner Arbeit abhaelt |
| 2 | Dr. Mueller | meine Zufriedenheit einfach ausdruecken (visuell) | ich nicht viel schreiben muss |
| 3 | Dr. Mueller | optional einen Freitext-Kommentar hinterlassen | ich konkrete Punkte ansprechen kann |
| 4 | Dr. Mueller | waehlen ob mein Feedback anonym ist | ich ehrlich sein kann |
| 5 | Stefan | Pulse-Check-Ergebnisse in meinem Project Dashboard sehen | ich die Kundenstimmung tracke |
| 6 | Thomas | negative Trends in Pulse-Checks frueh erkennen | ich proaktiv eingreifen kann |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure (Single Column, zentriert)**
**Begruendung:** Pulse-Check ist ein kurzes, lineares Formular. Maximale Einfachheit. Single Column, grosse Touch-Targets, visuell ansprechende Emoji-Skala.

```
+-- Client Portal Pulse-Check (max-width: 600px, zentriert) -------------+
|                                                                         |
|  mpl Consulting -- Ihr Projektportal                                    |
|  ====================================================================   |
|                                                                         |
|  Ihr Feedback -- RetailCorp SAP Migration                               |
|  Wir freuen uns ueber Ihre Einschaetzung.                              |
|  (Dauer: ca. 2 Minuten)                                                |
|                                                                         |
|  +-- Frage 1 -------------------------------------------------------+  |
|  |  Wie zufrieden sind Sie mit dem Projektverlauf insgesamt?         |  |
|  |                                                                   |  |
|  |  [ :( ]  [ :| ]  [ :) ]  [ :D ]  [ *_* ]                        |  |
|  |   Sehr     Eher    Neutral  Zufrieden  Sehr                       |  |
|  |   unzufr.  unzufr.                     zufrieden                  |  |
|  +-------------------------------------------------------------------+  |
|                                                                         |
|  +-- Frage 2 -------------------------------------------------------+  |
|  |  Wie bewerten Sie die Kommunikation mit dem Projektteam?          |  |
|  |                                                                   |  |
|  |  [ :( ]  [ :| ]  [ :) ]  [ :D ]  [ *_* ]                        |  |
|  +-------------------------------------------------------------------+  |
|                                                                         |
|  +-- Frage 3 -------------------------------------------------------+  |
|  |  Wie bewerten Sie die Qualitaet der bisherigen Ergebnisse?        |  |
|  |                                                                   |  |
|  |  [ :( ]  [ :| ]  [ :) ]  [ :D ]  [ *_* ]                        |  |
|  +-------------------------------------------------------------------+  |
|                                                                         |
|  +-- Frage 4 -------------------------------------------------------+  |
|  |  Fuehlen Sie sich ausreichend ueber den Projektfortschritt        |  |
|  |  informiert?                                                      |  |
|  |                                                                   |  |
|  |  [ :( ]  [ :| ]  [ :) ]  [ :D ]  [ *_* ]                        |  |
|  +-------------------------------------------------------------------+  |
|                                                                         |
|  +-- Frage 5 -------------------------------------------------------+  |
|  |  Gibt es etwas, das wir verbessern koennen?                       |  |
|  |                                                                   |  |
|  |  +-------------------------------------------------------------+ |  |
|  |  | Freitext (optional)                                         | |  |
|  |  | z.B. "Die Datenmigrations-Timeline macht mir Sorgen"        | |  |
|  |  |                                                             | |  |
|  |  +-------------------------------------------------------------+ |  |
|  +-------------------------------------------------------------------+  |
|                                                                         |
|  [x] Mein Feedback anonym abgeben                                      |
|                                                                         |
|  [Feedback absenden]                                                    |
|                                                                         |
+-------------------------------------------------------------------------+
```

**Emoji-Skala (5 Stufen):**

| Wert | Emoji | Label | Farbe |
|------|-------|-------|-------|
| 1 | Besorgt (frowning face) | Sehr unzufrieden | `semantic-danger` border bei Auswahl |
| 2 | Neutral-negativ (slightly frowning) | Eher unzufrieden | `semantic-warning` border bei Auswahl |
| 3 | Neutral (neutral face) | Neutral | `neutral-400` border bei Auswahl |
| 4 | Zufrieden (slightly smiling) | Zufrieden | `score-good` border bei Auswahl |
| 5 | Begeistert (star-struck) | Sehr zufrieden | `semantic-success` border bei Auswahl |

**Emoji-Rendering:** System-native Emoji (kein Custom-Rendering). Groesse: 32px auf Desktop, 40px auf Mobile. Ausgewaehlter Emoji erhaelt `border-focus` + Farb-Hintergrund (10% Opacity der zugehoerigen Farbe).

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Zentrierte Single Column (max-width 600px). Grosszuegiger Whitespace. |
| `breakpoint-lg` | Identisch. |
| `breakpoint-md` | Full-width mit `space-4` Padding. Emoji-Buttons groesser (40px). |
| `breakpoint-sm` | Full-width, `space-3` Padding. Emoji-Buttons 48px fuer Touch. Freitext-Feld volle Breite. Submit-Button volle Breite, `space-8` Abstand. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Projekt-Referenz (Name, ID) | Project Service | Bei Seitenladen |
| Pulse-Check-Fragen (konfigurierbar) | Config Service | Bei Seitenladen |
| Antworten-Submission | API: `POST /pulse-checks/{projectId}` | Beim Absenden |
| Magic Link Validierung | Auth Service | Bei jedem Seitenaufruf |

**Daten-Mapping:**

| Frage | Internes Mapping | Dashboard-Integration |
|-------|-----------------|----------------------|
| Frage 1: Projektverlauf | `satisfaction_overall` | Kundenzufriedenheits-KPI (DLV-01) |
| Frage 2: Kommunikation | `satisfaction_communication` | Risiko-Indikator: Kommunikation |
| Frage 3: Ergebnis-Qualitaet | `satisfaction_quality` | Risiko-Indikator: Qualitaet |
| Frage 4: Informationsgrad | `satisfaction_transparency` | Risiko-Indikator: Transparenz |
| Frage 5: Freitext | `feedback_text` | Action Items (manuell durch PL) |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Keine AI sichtbar** fuer Dr. Mueller. |
| **Intern:** | Freitext-Antworten werden intern KI-analysiert: Sentiment, Themen-Extraktion, Dringlichkeit. Ergebnis fliesst in Project Dashboard (DLV-01) Risiko-Indikatoren. |
| **Intern:** | KI erkennt negative Trends: 2 aufeinanderfolgende Pulse-Checks mit Wert <= 2 → automatischer Alert an PL (Stefan) und Partner (Thomas). |

---

## 7. Preview Panel Integration

Nicht zutreffend — Pulse-Check ist ein Formular, keine Dokument-Ansicht.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Trend-Erkennung (intern)** | Wenn Kundenzufriedenheit 2x in Folge sinkt: Alert an PL + Partner. "Kundenzufriedenheit faellt — proaktives Gespraech empfohlen." |
| **Timing-Optimierung (intern)** | Pulse-Check wird zu optimalen Zeitpunkten gesendet: nach Milestone-Abschluss, nicht an Freitagen, nicht waehrend bekannter Urlaubszeiten. |
| **Benchmark (intern)** | Ergebnis wird gegen Durchschnitt vergleichbarer Projekte verglichen. "RetailCorp: 4.2/5 — 12% ueber Durchschnitt aehnlicher SAP-Projekte." |
| **Nichts davon sichtbar fuer Dr. Mueller.** | |

---

## 9. Interaktions-Flows

### Flow 1: Pulse-Check nach Milestone (Dr. Mueller, 2 Min)
```
E-Mail: "Milestone 3 erreicht — wie laeuft es?" →
Klick auf Magic Link → Pulse-Check laedt direkt →
Frage 1: Emoji "zufrieden" antippen →
Frage 2: Emoji "sehr zufrieden" antippen →
Frage 3: Emoji "zufrieden" antippen →
Frage 4: Emoji "neutral" antippen →
Frage 5: "Timeline fuer Datenmigration war knapp" eingeben →
[ ] Anonym → nicht angehakt →
"Feedback absenden" →
Confirmation Page: "Vielen Dank fuer Ihr Feedback!"
```

### Flow 2: Pulse-Check aus Portal (Dr. Mueller)
```
Client Portal Dashboard → "Feedback geben" →
Pulse-Check laedt (gleiche Seite oder neuer Tab) →
5 Fragen beantworten → Absenden →
Confirmation Page → "Zurueck zum Portal" → Dashboard
```

### Flow 3: Ergebnis-Verarbeitung (intern)
```
Dr. Mueller sendet Pulse-Check ab →
System speichert Antworten → KI analysiert Freitext →
Kundenzufriedenheits-KPI in DLV-01 wird aktualisiert →
Stefan sieht neuen Wert: 4.2/5 →
Frage 4 (Informationsgrad) = "neutral" → KI markiert als Risiko →
Stefan erhaelt Notification: "Dr. Mueller wuenscht mehr Transparenz"
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Client Portal Dashboard | Pulse-Check | Klick "Feedback geben" |
| **Von:** E-Mail (Magic Link) | Pulse-Check | Direkter Pulse-Check-Link |
| **Zu:** Confirmation Page | Inline (gleiche URL) | Nach Absenden |
| **Zu:** Client Portal Dashboard | `platform/client-portal-dashboard.md` | "Zurueck zum Portal" auf Confirmation Page |
| **Intern:** | Project Dashboard (DLV-01) | Ergebnisse fliessen als KPI ein |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board:** Kein Aequivalent | Pulse-Check ist neu — kein Stitch-Import. |
| **Figma:** Ausstehend | Einfaches Formular-Layout. Emoji-Buttons als Custom Components. |
| **Inspiration:** Google Forms, Typeform | Einfache, visuell ansprechende Survey-UX. |

---

## 12. Akzeptanzkriterien

- [ ] Maximal 5 Fragen (4 Emoji-Skala + 1 Freitext)
- [ ] Emoji-Skala: 5 Stufen mit Farb-Feedback bei Auswahl
- [ ] Emoji-Buttons: 32px Desktop, 48px Mobile (Touch-Target)
- [ ] Freitext-Feld: Optional, Placeholder mit Beispiel
- [ ] Anonymous-Option: Checkbox "Mein Feedback anonym abgeben"
- [ ] Completion-Time unter 2 Minuten (UX-Test-Ziel)
- [ ] Confirmation Page: "Vielen Dank fuer Ihr Feedback!" mit Zurueck-Link
- [ ] White-Label: Identisches Branding wie Client Portal Dashboard
- [ ] Responsive: Mobile-optimiert, grosse Touch-Targets
- [ ] WCAG 2.1 AA: Farbkontraste, `role="radiogroup"` fuer Emoji-Skala, Keyboard-navigierbar
- [ ] Keine AI-Indikatoren sichtbar
- [ ] Ergebnisse fliessen in Project Dashboard (DLV-01) Kundenzufriedenheits-KPI
- [ ] Magic Link Validierung bei Seitenaufruf

---

## 13. Offene Fragen

1. **Fragen-Konfigurierbarkeit:** Kann die Beratung eigene Fragen definieren? *Empfehlung: Standard-Set in v1, konfigurierbar in v2.*
2. **Mehrfach-Feedback:** Kann Dr. Mueller mehrere Pulse-Checks pro Milestone abgeben? *Empfehlung: 1 pro Milestone. Neuer Milestone = neuer Pulse-Check.*
3. **Ergebnis-Sichtbarkeit fuer Kunden:** Soll Dr. Mueller seine bisherigen Feedbacks sehen? *Empfehlung: Nein in v1. In v2: Trend-Ansicht der eigenen Bewertungen.*
4. **Benchmark-Sharing:** Soll dem Kunden mitgeteilt werden wie er im Vergleich abschneidet? *Empfehlung: Nein — internes Tool.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. 5-Fragen Emoji-Skala. Anonymous Option. White-Label. |

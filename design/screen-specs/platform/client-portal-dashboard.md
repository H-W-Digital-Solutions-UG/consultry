# Client Portal Dashboard — Screen Spec

**Screen-ID:** PLT-04
**PRD-Modul:** 12.2 — Client Portal
**Journey(s):** J3-S3 (Dr. Mueller sieht Projektstatus), DR-MUELLER-J1-S2
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Dr. Mueller (CIO / Externer Kunde) — Projektstatus pruefen |
| **Sekundaer** | Weitere Kunden-Stakeholder (CFO, Projektleiter Kundenseite) |
| **Frequenz** | Dr. Mueller: 1-2x/Woche (5-10 Min, Quick-Check). |
| **Trigger** | Magic Link in E-Mail (primaer), Bookmark im Browser, Automatische Benachrichtigungs-E-Mail bei Milestone-Abschluss. |
| **Herkunft** | Magic Link Email (PLT-06), Browser-Bookmark. |
| **Ziel** | Projektstatus auf einen Blick: Ampel-Status, Milestones, Dokumente, Rechnungen. Optional: Pulse-Check-Feedback geben. |
| **Geraete** | Laptop (primaer, im Buero), Smartphone (unterwegs, Quick-Check). |

**Besonderheiten:**
- **White-Label:** Kein Consultry-Branding sichtbar. Portal zeigt "[Beratungsname] — Ihr Projektportal" (z.B. "mpl Consulting — Ihr Projektportal").
- **Magic Link Auth:** Kein Login, kein Passwort, keine Registrierung. Zugang ausschliesslich via Magic Link.
- **WCAG 2.1 AA:** Pflicht — externer Stakeholder, keine Schulung, muss sofort verstaendlich sein.
- **Keine AI Features sichtbar:** Dr. Mueller sieht keine KI-Indikatoren, keine Scores, keine AI-Surfaces. Alle Inhalte wirken manuell kuratiert.

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Dr. Mueller | sofort den Projektstatus (Ampel) sehen | ich in 5 Sekunden weiss ob alles im Plan ist |
| 2 | Dr. Mueller | die naechsten Milestones und deren Status sehen | ich weiss was als naechstes kommt |
| 3 | Dr. Mueller | geteilte Dokumente herunterladen | ich Berichte und Ergebnisse lesen kann |
| 4 | Dr. Mueller | offene Rechnungen und Zahlungsstatus sehen | ich den finanziellen Ueberblick habe |
| 5 | Dr. Mueller | schnell Feedback zum Projekt geben | ich meine Zufriedenheit ausdruecken kann ohne Aufwand |
| 6 | Dr. Mueller | das Portal auf dem Smartphone nutzen | ich auch unterwegs den Status pruefen kann |
| 7 | Dr. Mueller | wissen was das Projektteam von mir braucht | ich meinen Teil beitragen kann |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure (Single Column, zentriert)**
**Begruendung:** Dr. Mueller braucht maximale Klarheit und minimale Komplexitaet. Kein Bento Grid — die Informationshierarchie ist linear: Status → Milestones → Dokumente → Rechnungen. Single Column ist am einfachsten zu erfassen.

```
+-- Client Portal (max-width: 800px, zentriert) -------------------------+
|                                                                         |
|  mpl Consulting -- Ihr Projektportal               [Dr. Klaus Mueller]  |
|  ====================================================================   |
|                                                                         |
|  RetailCorp AG -- SAP S/4HANA Migration                                 |
|  Projektdauer: 6 Monate (KW 20-26) -- Standort: Muenchen + Wien        |
|                                                                         |
|  +-- Projekt-Status ------------------------------------------------+   |
|  |                                                                   |   |
|  |  STATUS: ON TRACK                                                 |   |
|  |  [semantic-success Badge]                                         |   |
|  |                                                                   |   |
|  |  Ihr Projekt laeuft planmaessig. Das naechste grosse Ziel:       |   |
|  |  Go-Live in Woche 26 (23. Juni 2026).                            |   |
|  |                                                                   |   |
|  +-------------------------------------------------------------------+   |
|                                                                         |
|  +-- Milestones & Fortschritt ---------------------------------------+   |
|  |                                                                   |   |
|  |  [done] M1: Analyse & Design               (erledigt KW 12)      |   |
|  |  [done] M2: Entwicklung Phase 1             (erledigt KW 16)      |   |
|  |  [done] M3: Datenmigration Test            (gerade erledigt!)     |   |
|  |  [aktiv] M4: Go-Live Preparation      (in Arbeit, KW 22-25)      |   |
|  |     Wichtig: Testdaten-Freigabe noetig bis 06.04                  |   |
|  |  [geplant] M5: Go-Live                  (geplant KW 26)          |   |
|  |                                                                   |   |
|  |  Gesamt-Fortschritt: ==========================----------  65%    |   |
|  |                                                                   |   |
|  +-------------------------------------------------------------------+   |
|                                                                         |
|  +-- Ihr Feedback ---------------------------------------------------+   |
|  |                                                                   |   |
|  |  Wie zufrieden sind Sie mit dem Projektverlauf?                   |   |
|  |  [Feedback geben ->]                                              |   |
|  |                                                                   |   |
|  +-------------------------------------------------------------------+   |
|                                                                         |
|  +-- Geteilte Dokumente --------------------------------------------+   |
|  |                                                                   |   |
|  |  Projektplan v2.1.pdf           12.03.2026    [Download]          |   |
|  |  Statusbericht Maerz.pdf        28.03.2026    [Download]          |   |
|  |  Datenmigrations-Report.xlsx    30.03.2026    [Download]          |   |
|  |                                                                   |   |
|  +-------------------------------------------------------------------+   |
|                                                                         |
|  +-- Rechnungen ----------------------------------------------------+   |
|  |                                                                   |   |
|  |  RE-2026-042  Phase 1       80.000 EUR    [bezahlt]              |   |
|  |  RE-2026-067  Phase 2      120.000 EUR    [bezahlt]              |   |
|  |  RE-2026-089  Phase 3      100.000 EUR    [offen]                |   |
|  |                                                                   |   |
|  +-------------------------------------------------------------------+   |
|                                                                         |
|  +-- Team & Kontakte -----------------------------------------------+   |
|  |                                                                   |   |
|  |  Stefan Kraus (Projektleiter)                                     |   |
|  |  stefan.kraus@mpl.de -- +49 89 XXXX-XXXX                         |   |
|  |                                                                   |   |
|  |  Thomas Weber (Partner)                                           |   |
|  |  thomas.weber@mpl.de -- +49 89 YYYY-YYYY                         |   |
|  |                                                                   |   |
|  +-------------------------------------------------------------------+   |
|                                                                         |
|  -- mpl Consulting GmbH -- Datenschutz -- Impressum --                  |
|                                                                         |
+-------------------------------------------------------------------------+
```

**Design-Prinzipien Client Portal:**
- **Max-Width:** 800px, zentriert auf `neutral-100` Hintergrund
- **Cards:** `neutral-0` bg, `border-default`, `radius-lg`, `shadow-sm`
- **Status-Badge:** Gross, prominent. Ampel-Farben: `semantic-success` (On Track), `semantic-warning` (At Risk), `semantic-danger` (Critical)
- **Typografie:** `heading-xl` fuer Projekttitel, `heading-lg` fuer Sektionen, `body-lg` fuer Beschreibungen
- **Kein `ai-surface`**, kein `ai-border`, kein `ai-accent` — alles wirkt manuell kuratiert
- **White-Label Tokens:** Logo und Farben konfigurierbar pro Beratung. Fallback: `brand-primary` (beratungs-neutral)

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Zentrierte Single Column (max-width 800px). Grosszuegiger Whitespace. |
| `breakpoint-lg` | Identisch. |
| `breakpoint-md` | Full-width mit `space-4` Padding. Cards behalten volle Breite. |
| `breakpoint-sm` | Full-width, `space-3` Padding. Milestone-Liste kompakter. Dokument-Tabelle als Cards. Rechnung-Tabelle als Cards. Touch-optimiert: Buttons mind. 44px. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Projekt-Metadaten (Titel, Laufzeit, Status) | Project Service (gefiltert fuer Client) | Bei Seitenladen |
| Milestone-Liste + Status | Project Service | Bei Seitenladen |
| Status-Beschreibungstext | Manuell durch PL (Stefan) | Bei Aenderung |
| Geteilte Dokumente | Document Service (nur freigegebene) | Bei Seitenladen |
| Rechnungen + Zahlungsstatus | Invoice Service (nur Kunden-Rechnungen) | Bei Seitenladen |
| Team-Kontakte | Workforce Service (nur Kunden-sichtbare) | Bei Seitenladen |
| Magic Link Validierung | Auth Service | Bei jedem Seitenaufruf |

**Datenschutz:** Das Client Portal zeigt ausschliesslich Daten, die explizit fuer den Kunden freigegeben sind. Kein Zugriff auf interne Daten (DB1, KI-Scores, interne Kommentare, Team-Auslastung).

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Keine AI sichtbar.** |
| **Begruendung** | Dr. Mueller ist externer Stakeholder. Jede KI-Sichtbarkeit wuerde Vertrauen untergraben ("Schreibt mir jetzt eine Maschine?"). Alle Inhalte muessen wie manuell kuratiert wirken. |
| **Intern:** | Status-Beschreibungen koennen intern KI-unterstuetzt generiert werden, aber ohne KI-Attribution im Portal. PL (Stefan) reviewed und gibt frei. |

---

## 7. Preview Panel Integration

- **Dokument-Download:** Klick auf "Download" startet direkten Download. Kein Inline-Preview — zu komplex fuer minimales Portal.
- **Optional (v2):** PDF-Inline-Viewer fuer Statusberichte. Einfach: Single-Page-Scroll.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Keine Predictive Features sichtbar** | Dr. Mueller sieht keine Prognosen, keine KI-Hinweise. |
| **Intern:** | Pulse-Check-Ergebnisse fliessen in Project Dashboard (DLV-01) als Kundenzufriedenheits-KPI ein. |
| **Intern:** | Engagement-Tracking: System erfasst wie oft Dr. Mueller das Portal besucht. Niedrige Nutzung → Nudge an PL: "Kunde hat Portal seit 14 Tagen nicht besucht." |

---

## 9. Interaktions-Flows

### Flow 1: Magic Link → Projektstatus pruefen (Dr. Mueller, 3 Min)
```
E-Mail: "Milestone 3 abgeschlossen" → Klick "Portal oeffnen" →
Magic Link validiert → Client Portal Dashboard laedt →
Status scannen: "ON TRACK" (5 Sek) →
Milestones lesen: M3 done, M4 in Arbeit →
"Testdaten-Freigabe noetig bis 06.04" → notieren →
Tab schliessen
```

### Flow 2: Feedback geben (2 Min)
```
Client Portal Dashboard → "Feedback geben" →
Pulse-Check (PLT-05) oeffnet →
5 Fragen beantworten → Absenden →
Zurueck zum Dashboard → "Danke fuer Ihr Feedback" Banner
```

### Flow 3: Dokument herunterladen
```
Client Portal Dashboard → "Geteilte Dokumente" →
Klick "Download" bei "Statusbericht Maerz.pdf" →
PDF wird heruntergeladen → Dr. Mueller liest offline
```

### Flow 4: Abgelaufener Magic Link
```
Dr. Mueller klickt alten Magic Link → Link abgelaufen →
Landing Page: "Ihr Zugang ist abgelaufen." →
"Neuen Zugang anfordern" → E-Mail-Input →
Neuer Magic Link wird gesendet (30 Sek) →
Dr. Mueller klickt neuen Link → Portal oeffnet
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Magic Link Email | Client Portal Dashboard | Klick auf Magic Link |
| **Von:** Browser-Bookmark | Client Portal Dashboard | Direkter URL-Aufruf |
| **Zu:** Client Portal Pulse-Check | `platform/client-portal-pulse-check.md` | Klick "Feedback geben" |
| **Zu:** Magic Link Renewal | Inline Landing Page | Abgelaufener Link |
| **Zu:** Dokument-Download | Browser Download | Klick "Download" |
| **Intern (nicht sichtbar):** | Project Dashboard (DLV-01) | Pulse-Check-Ergebnisse fliessen als KPI ein |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board:** Kein Aequivalent | Client Portal ist neu — kein Stitch-Import. |
| **Figma:** Ausstehend | Muss erstellt werden. Einfaches, reduziertes Design. |
| **White-Label:** | Template mit konfigurierbarem Logo, Primaerfarbe und Beratungsname. |

---

## 12. Akzeptanzkriterien

- [ ] White-Label: Kein Consultry-Branding, konfigurierbarer Beratungsname + Logo
- [ ] Magic Link Authentifizierung: Kein Login, kein Passwort
- [ ] Status-Ampel prominent: On Track / At Risk / Critical
- [ ] Milestone-Liste mit Status-Icons und Fortschrittsbalken
- [ ] Feedback-CTA ("Feedback geben") verlinkt zu Pulse-Check (PLT-05)
- [ ] Geteilte Dokumente: Nur freigegebene Dateien, Download-Button
- [ ] Rechnungs-Uebersicht: Rechnungsnummer, Betrag, Status (offen/bezahlt)
- [ ] Team-Kontakte: Name, Rolle, E-Mail, Telefon
- [ ] Responsive: Mobile-optimiert, Touch-Targets mind. 44px
- [ ] WCAG 2.1 AA: Farbkontraste, Keyboard-Navigation, Screen-Reader-kompatibel
- [ ] Keine AI-Indikatoren sichtbar (kein `ai-surface`, kein `ai-border`, kein Score)
- [ ] Abgelaufener Link: Freundliche Landing Page mit Erneuerungs-Option
- [ ] Datenschutz: Nur freigegebene Daten sichtbar, kein Zugriff auf interne Metriken

---

## 13. Offene Fragen

1. **Multi-Projekt:** Was sieht Dr. Mueller wenn er mehrere Projekte mit der Beratung hat? *Empfehlung: Projekt-Auswahl-Seite vor dem Dashboard.*
2. **Magic Link Lebensdauer:** 30 Tage (PRD) oder 60/90 Tage? *Empfehlung: 90 Tage mit Auto-Renewal per E-Mail 7 Tage vor Ablauf.*
3. **Sprache:** Soll das Portal die Sprache des Kunden erkennen? *Empfehlung: Deutsch Standard, Englisch als Option (Dr. Mueller: Deutsch).*
4. **Pulse-Check-Haeufigkeit:** Wie oft wird der Feedback-CTA angezeigt? *Empfehlung: Bei jedem Besuch, aber dezent. Nur bei neuem Milestone als prominenter Banner.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. White-Label. Magic Link. No-AI. WCAG 2.1 AA. |

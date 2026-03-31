# Dr. Klaus Müller — CIO/IT-Leiter (Externer Stakeholder)
## Persona-spezifische User Journeys — Client Portal

**Header:** Dr. Klaus Müller, CIO/IT-Leiter, 5–10 Min/Woche, Magic Link only

**Version:** 1.1
**Datum:** 31. März 2026
**Companion:** [Consultry PRD v3.1](../Consultry-PRD-v3.0-Final.md), [Target Personas v1.0](../../uploads/Consultry-Target-Personas-v1.0.md)
**Design System:** [Consultry Design System v1.3](../../design/Consultry-Design-System-v1.3.md) (White-Label-Tokens fuer Client Portal)
**Screen Specs:** [Screen Spec Index](../../design/screen-specs/_SCREEN-SPEC-INDEX.md)

---

## Steckbrief Dr. Klaus Müller

| | |
|---|---|
| **Rolle** | Chief Information Officer / IT-Leiter |
| **Unternehmen** | RetailCorp AG — Einzelhandel, 2.500 MA, DACH-weit |
| **Verhältnis zu mpl** | Auftraggeber: SAP S/4HANA Migrationsprojekt, 6 Monate Laufzeit |
| **Alter** | 48 |
| **Technik-Affinität** | Sehr hoch (CIO), aber null Geduld für unbekannte Tools |
| **Kontaktpersonen mpl** | Stefan Kraus (Projektleiter), Thomas Weber (Partner-Level) |
| **Kritische Einstellung** | Keine Registrierung, kein Login, kein Passwort — Magic Link only |

### Interaktionsmuster

| Wann | Wie | Was | Frequenz |
|---|---|---|---|
| Bei Projekt-Updates | Magic Link via E-Mail | Client Portal öffnen | 1–2x/Woche |
| Bei Milestone-Abschluss | Pulse-Check per E-Mail | 5 Fragen, Feedback | 1–2x/Monat |
| Bei Problemen | Telefon/E-Mail mit Stefan | Eskalation, Live-Anrufe | Sporadisch |
| Quartals-Review | Meeting mit Thomas | Strategische Bewertung, Forecast | 1x/Quartal |

**Consultry-Zeit:** 5–10 Min pro Woche (rein passiv/reaktiv)
**Geräte:** Primär Laptop (im Büro), Smartphone (unterwegs) für Quick-Checks
**Authentifizierung:** Kein Account, kein Login — nur Magic Link per E-Mail

---

## Journeys in denen Dr. Müller auftritt

### 1. **Journey 3: Project Risk Management & Escalation** (J3-S1, J3-S3 — Client Portal Update)
### 2. **Dr. Müller's Key Journey:** Magic Link → Projektstatus → Feedback (Pulse-Check)
### 3. **Fehlende Journeys (Critical für CIO-Experience):**
   - Initial Magic Link receipt and first-time visit flow
   - Milestone-Abnahme flow (Bestätigung oder Kommentar)
   - Change Request review flow
   - Magic Link expired → renewal flow
   - Multiple projects view (Dr. Müller hat 2+ Projekte mit mpl)

---

## Dr. Müllers Primary Surface: Client Portal (White-Label)

**Nur EIN Surface für Dr. Müller: Client Portal**
- White-Label: "mpl Consulting — Ihr Projektportal" (nicht "Powered by Consultry")
- Magic Link Access: kein Onboarding, sofort im Portal
- Ampel-Logik: 🟢 On Track / 🟡 At Risk / 🔴 Critical
- Minimal UI: nur essenzielle Infos, keine Komplexität
- Responsive: Desktop + Mobile gleich gut

---

## Trust & Zero-Friction — Konkret

- Magic Link Lebensdauer: Default 90 Tage, Auto-Renewal per E-Mail 7 Tage vor Ablauf
- Fallback bei abgelaufenem Link: Landing-Page mit "Ihr Link ist abgelaufen. Wir senden Ihnen einen neuen." → E-Mail-Input → Neuer Link in 30 Sekunden
- E-Mail-Verifizierung als optionaler zweiter Faktor für Enterprise-Kunden (konfigurierbar pro Projekt)
- Branding: 100% White-Label. "mpl Consulting" in Header, nicht Consultry. Farben konfigurierbar.
- Pulse-Check darf MAXIMAL 5 Fragen haben. 3 Sterne-Bewertungen + 1 Freitext + 1 "Brauchen Sie etwas von uns?"

### Phase-1-Abdeckung: Dr. Müller

- ⚠️ Client Portal → Phase 3
- ⚠️ Magic Links → Phase 3
- ⚠️ Pulse-Checks → Phase 3

**Konsequenz:** Dr. Müller hat KEINEN Zugang zu Consultry vor Phase 3 (Woche 17+). Das ist akzeptabel — er ist externer Stakeholder. Aber: Die Beratung muss in Phase 1-2 alternative Kunden-Kommunikation nutzen (E-Mail, Meetings). Client Portal ist ein "Delight-Feature", kein "Must-Have" für Phase 1.

---

## Dr. Müllers Jobs to be Done

### Bei Projekt-Benachrichtigung — "Wo steht mein Projekt?"
- ✅ Ampel-Status auf einen Blick: Grün/Gelb/Rot
- ✅ Nächste Milestones: was kommt als nächstes?
- ✅ Was braucht das Projektteam von uns?
- ✅ Offene Risiken: was könnte schiefgehen?

### Bei Pulse-Check — "Feedback geben ohne Aufwand"
- ✅ 5 Fragen, 2 Minuten total
- ✅ Freitext für konkrete Punkte: "Data-Migration-Timeline macht mir Sorgen"
- ✅ Keine komplizierten Formulare

### Sporadisch — "Eskalation oder strategisches Gespräch"
- ✅ Direkter Kontakt zu Stefan (PL) via Telefon
- ✅ Strategisches Gespräch mit Thomas (Partner)
- ✅ Klare Kommunikation: Problem, Impact, Lösung

---

## Dr. Müllers Frustrationen & Abbruchpunkte

| Frustration | Auslöser | Konsequenz |
|---|---|---|
| **"Ich soll mich irgendwo einloggen"** | Registration, Passwort, Account | Ignoriert das Portal komplett, wartet auf E-Mail |
| **"Ich verstehe nicht was ich sehe"** | Zu viele Daten, kein Fokus, technische Sprache | Schließt den Tab, ruft Stefan an |
| **"Der Link funktioniert nicht mehr"** | Magic Link abgelaufen ohne Erneuerung | Frustration, Vertrauens-Verlust, schlechter Eindruck |
| **"Ich bekomme keine Updates wenn sich was ändert"** | Nur Pull-Access, kein Push/Auto-Notify | Fühlt sich uninformiert, muss ständig manuell checken |
| **"Die Kommunikation ist nicht klar"** | Viele Fachjargon, keine Zusammenfassung | Muss Stefan anrufen um zu verstehen |

---

## Dr. Müllers Key Journey: Magic Link → Projektstatus → Feedback

**Dauer:** 8 Minuten (4 min Lesen + 4 min Feedback)
**Trigger:** Automatische E-Mail: "Ihr Projekt RetailCorp hat Milestone 3 erreicht — hier ist Ihr Update"
**Outcome:** Dr. Müller hat Überblick, hat Feedback gegeben, Stefan sieht es sofort

---

## Journey Screen-by-Screen

### Phase A: E-Mail-Trigger & Magic Link

#### [DR-MUELLER-J1-S1] Benachrichtigungs-E-Mail mit Magic Link

**Trigger:** System erkennt dass Milestone 3 (Datenmigration Test) abgeschlossen ist
Stefan hat das bestätigt und System sendet automatisch E-Mail an Dr. Müller

**E-Mail-Format (elegant, kurz, CIO-tauglich):**

```
┌──────────────────────────────────────────────────────────────┐
│ From: Stefan Kraus <stefan.kraus@mpl.de>                   │
│ Subject: RetailCorp — Milestone 3 abgeschlossen            │
│                                                              │
│ Date: Donnerstag, 03. April 2026, 15:30                     │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ Lieber Dr. Müller,                                          │
│                                                              │
│ gute Nachricht: Milestone 3 (Datenmigration Test) ist       │
│ abgeschlossen. Ihr Projektportal wurde aktualisiert.        │
│                                                              │
│ ┌─ PROJEKT STATUS ─────────────────────────────────────┐   │
│ │ RetailCorp AG — SAP S/4HANA Migration                │   │
│ │                                                       │   │
│ │ Status: 🟢 On Track                                  │   │
│ │ Milestone 3: ✅ Datenmigration Test — ABGESCHLOSSEN │   │
│ │ Milestone 4: 🔵 Go-Live Preparation — IN PROGRESS   │   │
│ │ Nächster Schritt: Cutover-Planung Review (Mo. 04.04)│   │
│ │                                                       │   │
│ │ Ihre Mitwirkung benötigt: Testdaten-Freigabe (bis    │   │
│ │ 06.04) für nächste Phase                             │   │
│ └───────────────────────────────────────────────────────┘   │
│                                                              │
│ Ihr Projektleiter Stefan Kraus hat ein kurzes              │
│ Projekt-Update hinterlassen:                                │
│ "Migration erfolgreich — 3.2M Daten konvertiert,           │
│  0 Fehler. Data Quality Check: 100% OK.                    │
│  Wir sind noch im Plan für Go-Live KW 26."                 │
│                                                              │
│ Ihre Fragen oder Feedback?                                  │
│ ► [Portal öffnen für Details] ← Magic Link                  │
│   (dieser Link funktioniert 60 Tage)                        │
│                                                              │
│ Oder direkt:                                                │
│ • Stefan Kraus (PL): +49 89 XXXX-XXXX                       │
│ • Thomas Weber (Partner): +49 89 YYYY-YYYY                  │
│                                                              │
│ Viele Grüße,                                                │
│ Stefan Kraus & Team                                         │
│                                                              │
│ --                                                          │
│ mpl Consulting GmbH                                         │
│ www.mpl-consulting.de                                       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**E-Mail-Design-Details:**
- ✅ Status-Box prominent: 🟢 On Track (Ampel sofort sichtbar)
- ✅ Milestone-Übersicht: was ist erledigt, was kommt
- ✅ Konkrete Aktion: "Testdaten-Freigabe bis 06.04"
- ✅ Stefan's persönliche Notiz: warmer, menschlich
- ✅ Magic Link prominent: "[Portal öffnen]"
- ✅ Kurz & knapp: Dr. Müller liest in 30 Sekunden
- ✅ Fallback-Kontakte: falls Link nicht funktioniert

---

### Phase B: Magic Link → Client Portal Landing

#### [DR-MUELLER-J1-S2] Client Portal — Projekt-Dashboard (Erste Ansicht)

**Trigger:** Dr. Müller klickt "[Portal öffnen]" → Magic Link wird validiert → sofort im Portal
(kein Login, kein Passwort, keine Registration)

**Portal-URL:** `portal.mpl-consulting.de/p/xxx-magic-token-xxx`

**Design: White-Label (nicht "Powered by Consultry")**

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  mpl Consulting — Ihr Projektportal                                  │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                      │
│                                                                      │
│  RetailCorp AG · SAP S/4HANA Migration                              │
│  Projektdauer: 6 Monate (KW 20–26) · Standort: München + Wien       │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                                                                      │
│  STATUS: 🟢 ON TRACK                                                │
│  ──────────────────────────────────────────────────────────────    │
│                                                                      │
│  Ihr Projekt läuft planmäßig. Das nächste große Ziel: Go-Live in    │
│  Woche 26 (23. Juni 2026). Sie sind auf dem richtigen Weg.          │
│                                                                      │
│                                                                      │
│  ┌─ MILESTONES & FORTSCHRITT ─────────────────────────────────┐   │
│  │                                                              │   │
│  │  ✅ M1: Analyse & Design                   (erledigt KW 12) │   │
│  │  ✅ M2: Entwicklung Phase 1                (erledigt KW 16) │   │
│  │  ✅ M3: Datenmigration Test               (gerade erledigt!) │   │
│  │  🔵 M4: Go-Live Preparation          (in Arbeit, KW 22–25) │   │
│  │     └─ Wichtig: Testdaten-Freigabe nötig bis 06.04          │   │
│  │  ⬜ M5: Go-Live                         (geplant KW 26)     │   │
│  │                                                              │   │
│  │  Gesamt-Fortschritt: ████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 65%│   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│                                                                      │
│  ┌─ TEAM & KONTAKTE ──────────────────────────────────────────┐   │
│  │                                                              │   │
│  │  🧑 Stefan Kraus                         (Projektleiter)    │   │
│  │     E-Mail: stefan.kraus@mpl.de         Tel: +49 89 XXXX   │   │
│  │     Spricht mit dir für tägliche Fragen                     │   │
│  │                                                              │   │
│  │  🧑 Markus S.                            (Senior SAP)       │   │
│  │     Lead Architect für die Migration                        │   │
│  │                                                              │   │
│  │  🧑 Lisa T.                              (Change Management)│   │
│  │     Hilft deinen Teams mit der Umstellung                   │   │
│  │                                                              │   │
│  │  🧑 Thomas Weber                         (Partner, mpl)     │   │
│  │     Dein Ansprechpartner für strategische Fragen            │   │
│  │     E-Mail: thomas.weber@mpl.de        Tel: +49 89 YYYY    │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│                                                                      │
│  ┌─ NÄCHSTE SCHRITTE ─────────────────────────────────────────┐   │
│  │                                                              │   │
│  │  1. 🟡 [DEINE AKTION]                                       │   │
│  │     Testdaten freigeben für Milestone 4                     │   │
│  │     Deadline: bis Sonntag, 06. April 2026                  │   │
│  │     Kontakt Stefan wenn du Hilfe brauchst                  │   │
│  │                                                              │   │
│  │  2. 📅 Cutover-Planung Review                               │   │
│  │     Montag, 04. April um 14:00 Uhr (via Zoom mit Stefan)   │   │
│  │     Dauer: 60 Min                                            │   │
│  │                                                              │   │
│  │  3. ✅ Go-Live Vorbereitung                                 │   │
│  │     Alle beteiligten Teams trainieren (laufend)             │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│                                                                      │
│  ┌─ PROJEKTLEITER-NOTIZEN ────────────────────────────────────┐   │
│  │                                                              │   │
│  │  Von Stefan Kraus (heute 15:30):                            │   │
│  │  ──────────────────────────────────────────────────────     │   │
│  │  "Gute Nachricht: M3 abgeschlossen! Migration erfolgreich. │   │
│  │   3,2 Millionen Datensätze konvertiert mit 0 Fehlern.      │   │
│  │   Data Quality Check: 100% bestanden.                       │   │
│  │                                                              │   │
│  │   Wir sind weiterhin im Plan für Go-Live in KW 26. Das     │   │
│  │   Testdaten-Freigaben ist die letzte große Hürde vor       │   │
│  │   Milestone 4.                                              │   │
│  │                                                              │   │
│  │   Fragen? Ruf mich an: +49 89 XXXX-XXXX"                    │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│                                                                      │
│  ┌─ DEIN FEEDBACK ────────────────────────────────────────────┐   │
│  │                                                              │   │
│  │  Wie ist deine Einschätzung zu diesem Projekt-Update?      │   │
│  │                                                              │   │
│  │  ┌─────────────────────────────────────────────────────┐    │   │
│  │  │ Pulse-Check Fragebogen (2 Minuten)                 │    │   │
│  │  │                                                     │    │   │
│  │  │ 1. Wie zufrieden bist du mit der Kommunikation?    │    │   │
│  │  │    ○ Sehr zufrieden (5)  ○ (4)  ○ (3)  ○ (2)  ○ (1) │    │   │
│  │  │                                                     │    │   │
│  │  │ 2. Wie ist deine Einschätzung zum Projektfortschritt?│   │   │
│  │  │    ○ Sehr zufrieden (5)  ○ (4)  ○ (3)  ○ (2)  ○ (1) │    │   │
│  │  │                                                     │    │   │
│  │  │ 3. Haben dir die Milestones geholfen, den Status │    │   │
│  │  │    zu verstehen?                                   │    │   │
│  │  │    ○ Sehr hilfreich (5) ○ (4) ○ (3) ○ (2) ○ (1)   │    │   │
│  │  │                                                     │    │   │
│  │  │ 4. Sind die Rollen & Kontakte klar?                │    │   │
│  │  │    ○ Sehr klar (5)  ○ (4)  ○ (3)  ○ (2)  ○ (1)      │    │   │
│  │  │                                                     │    │   │
│  │  │ 5. Offene Fragen oder Bedenken?                    │    │   │
│  │  │    ┌───────────────────────────────────────────┐   │    │   │
│  │  │    │ Data-Migration-Timeline macht mir Sorgen.   │   │    │   │
│  │  │    │ Testdaten kommen möglicherweise verspätet.  │   │    │   │
│  │  │    └───────────────────────────────────────────┘   │    │   │
│  │  │                                                     │    │   │
│  │  │ [Feedback absenden]                                 │    │   │
│  │  │                                                     │    │   │
│  │  └─────────────────────────────────────────────────────┘    │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│                                                                      │
│  ┌─ DOKUMENTATION (eingesehen von Dr. Müller) ───────────────┐   │
│  │                                                              │   │
│  │  📄 Milestone 3 Abschlussbericht (PDF, 12 pages)            │   │
│  │     [Herunterladen]                                         │   │
│  │                                                              │   │
│  │  📄 Testdaten-Übergabe Checkliste (PDF, 3 pages)           │   │
│  │     [Herunterladen]                                         │   │
│  │                                                              │   │
│  │  📄 Go-Live Planung (PDF, Vorlage, noch nicht final)       │   │
│  │     [Herunterladen]                                         │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Magic Link Gültigkeit: 60 Tage (Ablauf: 02. Juni 2026)             │
│  Probleme? Kontakt: support@mpl-consulting.de oder Stefan +49 89   │
│                                                                      │
│  © mpl Consulting GmbH                                              │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Design-Highlights für Dr. Müller:**
- ✅ **Ampel oben:** 🟢 On Track — sofort klar wo es steht
- ✅ **Milestone-Timeline:** visuell, einfach verstanden
- ✅ **Konkrete Aktionen:** "Testdaten freigeben bis 06.04"
- ✅ **Team-Kontakte:** Namen, E-Mail, Tel (direkt anrufen!)
- ✅ **Persönliche Notiz von Stefan:** warm, vertrauenswürdig
- ✅ **Pulse-Check inline:** 5 Fragen, 2 Min — keine extra Navigation
- ✅ **Dokumentation download:** PDFs verfügbar
- ✅ **Keine Komplexität:** nur essenzielle Infos

---

### Phase C: Feedback geben (Pulse-Check)

#### [DR-MUELLER-J1-S3] Pulse-Check Completion

**Scenario:** Dr. Müller liest das Update, hat bedenken zu den Testdaten, gibt Feedback

**Dr. Müller füllt Pulse-Check aus (2–3 Minuten):**

```
Frage 1: Zufriedenheit Kommunikation
Dr. Müller antwortet: 4/5 (zufrieden, aber möchte mehr Details)

Frage 2: Fortschritt
Dr. Müller antwortet: 3/5 (auf Plan, aber knapp)

Frage 3: Milestones hilfreich
Dr. Müller antwortet: 5/5 (sehr hilfreich)

Frage 4: Rollen klar
Dr. Müller antwortet: 5/5 (alle Kontakte sichtbar)

Frage 5: Offene Bedenken
Dr. Müller tippt:
"Data-Migration-Timeline macht mir Sorgen. Testdaten kommen von unserem
System möglicherweise verspätet (ca. 3–4 Tage später als geplant).
Können wir das mit Stefan absprechen? Brauchen wir einen Puffer?"
```

**Nach dem Absenden:**

```
✅ Danke für dein Feedback!
Deine Antworten wurden an Stefan und Thomas übermittelt.

Stefan wird dich bis Morgen (04.04) kontaktieren um die
Testdaten-Timeline zu besprechen.

[Portal schließen]  [Weitere Projekte anschauen]  [Abmelden]
```

**System-Seite (Stefan & Thomas sehen):**

```
🔔 FEEDBACK ERHALTEN: Dr. Klaus Müller (RetailCorp)

Projekt: RetailCorp — SAP S/4HANA
Pulse-Check vom 03.04.2026 15:45

Zufriedenheit Kommunikation: 4/5
Fortschritt-Einschätzung:    3/5
Milestones hilfreich:        5/5
Rollen klar:                 5/5

BEDENKEN:
"Data-Migration-Timeline macht mir Sorgen. Testdaten kommen von unserem
System möglicherweise verspätet (ca. 3–4 Tage später als geplant).
Können wir das mit Stefan absprechen? Brauchen wir einen Puffer?"

RISK FLAGGED:
⚠️ Testdaten-Verzögerung (3–4 Tage) erkannt → könnte Milestone 4 gefährden

EMPFOHLENE AKTION:
Stefan sollte Dr. Müller MORGEN anrufen und:
1. Testdaten-Delay klären (3–4 Tage realistisch?)
2. Impact auf Go-Live-Plan bewerten
3. Evtl. Puffer in Milestone 4 einbauen

[Stefan kontaktieren]  [Change Request erstellen]  [Dismiss]
```

**Design-Details für Pulse-Check:**
- ✅ 5 Fragen, einfach & schnell
- ✅ Numerische Scores (1–5) + optionales Freitext-Feedback
- ✅ Auto-Risk-Flagging: wenn Score <4 → Alert
- ✅ Freitext wird auto-geparst auf Risks (z.B. "verspätet", "Sorge")
- ✅ Direktes Feedback an PL + Partner
- ✅ Keine Verzögerung: Stefan sieht sofort

---

## Dr. Müllers Fehlende Journeys (Zukünftige Features)

### 1. Initial Magic Link Receipt & First-Time Visit

**Szenario:** Dr. Müller bekommt erstes Mal Magic Link, weiß nicht was zu tun
**Benötigt:** Welcoming experience, keine Verwirrung

```
E-Mail (erstes Mal):
"Lieber Dr. Müller,

willkommen! Sie wurden eingeladen, das Projekt-Update für
RetailCorp zu sehen. Kein Passwort, kein Konto — einfach klicken.

[Portal öffnen — keine Registrierung nötig]

Das ist eine sichere, temporäre Verbindung nur für Sie.
Der Link funktioniert 60 Tage lang.

Fragen? Kontakt Stefan (+49 89 XXXX) oder Thomas (+49 89 YYYY).

Viele Grüße,
Das mpl Team"
```

**First-Visit Experience:**
- ✅ Große, welcoming Headline: "Willkommen bei deinem Projekt!"
- ✅ 30-Sekunden-Übersicht (nicht 5 Minuten lesen)
- ✅ Keine "Was ist dein Name?" Fragen (keine Registration!)
- ✅ Onboarding-Tooltip: "Das ist dein Projekt-Status. Scroll runter für Details."

---

### 2. Milestone-Abnahme Flow

**Szenario:** Milestone 3 (Datenmigration) ist abgeschlossen
Stefan fragt: "Dr. Müller, bestätigst du die Abnahme oder hast du Anmerkungen?"

```
┌──────────────────────────────────────────────────────┐
│ MILESTONE-ABNAHME                                    │
│                                                      │
│ Milestone 3: Datenmigration Test                     │
│ Abgeschlossen: 03.04.2026                            │
│ Projektleiter: Stefan Kraus                          │
│                                                      │
│ ERLEDIGT:                                            │
│ ✅ 3.2M Datensätze migr. mit 0 Fehler              │
│ ✅ Data Quality 100% bestanden                       │
│ ✅ System Performance Tests OK                       │
│ ✅ Backup & Recovery verified                        │
│                                                      │
│ BESTÄTIGUNG:                                         │
│ ☑ Ich bestätige die Abnahme ohne Anmerkungen        │
│ ☐ Ich bestätige mit folgenden Anmerkungen:          │
│    [Freitext]                                       │
│ ☐ Ich kann nicht abnehmen, weil:                    │
│    [Freitext: Probleme, fehlende Tests, etc.]       │
│                                                      │
│ [Abnahme bestätigen]  [Mit Anmerkungen]  [Ablehnen] │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

### 3. Change Request Review Flow

**Szenario:** Scope-Erweiterung erkannt (z.B. 3 Legacy-Systeme hinzugekommen)
Stefan/Thomas senden Change Request zur Genehmigung

```
┌──────────────────────────────────────────────────────┐
│ CHANGE REQUEST REVIEW                                │
│                                                      │
│ CR-001: Legacy System Integration                    │
│ Status: Warte auf CIO-Genehmigung                    │
│                                                      │
│ PROBLEM:                                             │
│ 3 Legacy-Systeme wurden identifiziert die auch      │
│ migriert werden müssen. Nicht im Original-Scope.    │
│                                                      │
│ LÖSUNG:                                              │
│ Integrieren in Milestone 3 (Data Migration)          │
│ Zusätzlicher Aufwand: ~15–20 PT (~25K€)             │
│ Verzögerung: +2 Wochen (KW 22 statt KW 20)          │
│                                                      │
│ IMPACT:                                              │
│ Go-Live bleibt auf KW 26 (Puffer vorhanden)         │
│                                                      │
│ GENEHMIGUNG:                                         │
│ ○ Genehmigt                                         │
│ ○ Genehmigt mit Anmerkungen                         │
│ ○ Abgelehnt (alternative Lösung erforderlich)       │
│                                                      │
│ [Genehmigen]  [Mit Kommentar]  [Ablehnen]           │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

### 4. Magic Link Expired → Renewal Flow

**Szenario:** Magic Link läuft nach 60 Tagen ab
Dr. Müller bekommt E-Mail: "Your portal link expired, here's a new one"

```
E-Mail:
"Your portal access link expired on 02.06.2026.

Here's your new link (valid for 60 more days):

[New Portal Link]

No action needed — same experience as before.
The old link (the one that expired) no longer works.

Vielen Dank,
Stefan & Team"
```

**System-Seite:**
- ✅ Auto-renewal 7 Tage vor Ablauf
- ✅ Neue E-Mail mit neuem Link
- ✅ Alte Links werden deaktiviert (für Sicherheit)
- ✅ Kein Ärger, nur neuer Link in E-Mail

---

### 5. Multiple Projects View

**Szenario:** Dr. Müller hat 2+ Projekte mit mpl
Z.B. RetailCorp Projekt 1 + RetailCorp Projekt 2 (parallel)

```
┌──────────────────────────────────────────────────────┐
│ Deine Projekte                                       │
│                                                      │
│ Du hast Zugriff auf 2 Projekte:                     │
│                                                      │
│ 1. RetailCorp — SAP S/4HANA Migration               │
│    Status: 🟢 On Track (65% fortgeschritten)        │
│    Nächste Milestone: Go-Live Prep (KW 22–25)       │
│    [Portal öffnen]                                  │
│                                                      │
│ 2. RetailCorp — Cybersecurity Upgrade               │
│    Status: 🟡 At Risk (45% fortgeschritten)         │
│    Nächste Milestone: Penetration Test (KW 18–19)   │
│    [Portal öffnen]                                  │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## Journey: Risk Escalation via Client Portal (Referenz J3)

**Referenz:** Journey 3 — Project Risk & Escalation
Diese Journey zeigt Dr. Müllers Perspektive wenn ein Projekt-Risiko eskaliert wird

### [DR-MUELLER-J3-S1] Risiko-Update via E-Mail & Portal

**Trigger:** Stefan erkennt Scope-Creep (3 Legacy-Systeme), eskaliert an Thomas
Thomas gibt OK für Change Request, System benachrichtigt Dr. Müller

**E-Mail an Dr. Müller:**

```
From: Stefan Kraus
Subject: ⚠️ RetailCorp — Wichtiges Update zu Milestone 3

Lieber Dr. Müller,

während Datenmigrations-Tests haben wir 3 Legacy-Systeme identifiziert
die auch migriert werden müssen. Das war nicht im Original-Scope.

Status: 🟡 At Risk (wurde gerade auf "At Risk" aktualisiert)

Gute Nachricht: Das braucht ~2 Wochen extra, aber Go-Live bleibt
auf Kurs (KW 26). Mehr Details im Portal:

[Portal öffnen — Change Request anschauen]

Thomas Weber und ich haben das bereits geplant. Wir brauchen nur
deine Genehmigung für die zusätzlichen Kosten (ca. 25K€).

Ruf mich an wenn du Fragen hast: +49 89 XXXX

Viele Grüße,
Stefan
```

**Im Portal sieht Dr. Müller:**

```
STATUS UPDATE: Milestone 3

Alte Status: 🟢 On Track
Neue Status: 🟡 At Risk
Grund: Scope-Erweiterung (3 Legacy-Systeme)

CHANGE REQUEST (CR-001) jetzt verfügbar:
[Zum Change Request]

IMPACT:
Milestone 3: +2 Wochen (KW 20 → KW 22)
Go-Live: Bleibt auf KW 26 (Puffer vorhanden)
Zusatzkosten: ~25K€
Risk Level: MEDIUM (manageable, nicht CRITICAL)

NÄCHSTE SCHRITTE:
Dr. Müller muss CR-001 genehmigen damit es fortgeht.

[Change Request genehmigen]
```

---

## Journey: Client Portal White-Label Design

### Design-Anforderungen für Dr. Müller's Portal

| Aspekt | Anforderung | Warum |
|---|---|---|
| **Branding** | "mpl Consulting — Ihr Projektportal" | White-Label, nicht "Powered by Consultry" |
| **Ampel-Logik** | 🟢 On Track / 🟡 At Risk / 🔴 Critical | CIO versteht Ampeln intuitiv |
| **Komplexität** | Nur essenzielle Infos (kein Details-Overload) | Dr. Müller hat 10 Min/Woche, nicht 1 Stunde |
| **Login** | Kein Login — Magic Link only | Zero friction, keine Passwort-Verwaltung |
| **Responsive** | Desktop + Mobile gleichwertig | Dr. Müller checkt auch unterwegs |
| **Dokumentation** | Downloadable PDFs (Abschlussberichte, etc.) | Dr. Müller braucht für seine Stakeholder |
| **Feedback** | Pulse-Checks inline, nicht externe Umfrage | Kurz, integriert, keine extra Navigation |
| **Kontakte** | Direkter Kontakt zu Stefan, Thomas (Tel, Email) | Fallback wenn Portal nicht reicht |
| **Sicherheit** | Magic Links mit Expiration | Sicherer als Passwörter, zeitlich begrenzt |
| **Sprache** | Deutsch, kurz, Executive-level | Keine Technischen Details, keine Jargon |

---

## Design-Tokens & Components (aus Consultry Design System)

**Für Dr. Müllers Client Portal gelten diese Design-Prinzipien:**

### Farben
- Primary (Ampel Grün): `--success-green` (#4CAF50) — 🟢 On Track
- Alert (Ampel Gelb): `--warm-gray` (#D4A574) — 🟡 At Risk
- Critical (Ampel Rot): `--error-red` (#D32F2F) — 🔴 Critical
- Neutral: `--charcoal-dark` (#111111) für Text
- Background: `--light-gray` (#F5F5F5) für Kontrast

### Komponenten
- `AmpelStatus` — Großer, visueller Status-Indikator (🟢/🟡/🔴)
- `MilestoneTimeline` — Visuell, einfach verständlich
- `ActionCard` — "Das brauchen wir von dir"
- `FeedbackForm` — 5-Item Pulse-Check inline
- `DocumentList` — Download-Links mit Icons (📄 PDF, 📊 Excel)
- `ContactCard` — Name, E-Mail, Tel pro Ansprechpartner
- `PortalNotification` — E-Mail-ähnliche Benachrichtigungen

### Typography
- Headlines: `--font-title-large` (32px, bold) — für Ampel-Status
- Body: `--font-body-large` (16px) — für Lesbarkeit
- Labels: `--font-label-regular` (14px) — für Metadata
- Links: `--brand-coral` (#BF5347) — aus mpl Design System

---

## Navigation & Accessibility

**Dr. Müllers häufigste Einstiege:**
1. **E-Mail mit Magic Link** → direkt ins Portal (kein Umweg)
2. **Telefon-Anruf von Stefan** → "Check mal dein Email für Portal-Link"
3. **Bookmark** (falls Dr. Müller Portal saved) → aber nicht recommended (Links expiren)

**Mobile-First:** Dr. Müller hat Laptop + Smartphone
Portal muss auf beiden gleich gut funktionieren

**Accessibility:**
- WCAG 2.1 AA Standard (auch für externe User)
- Ampel-Logik nicht nur Farbe (+ Icons: ✅ 🔵 ⚠️)
- Keyboard-Navigation für alle Buttons
- Screen-Reader-freundlich: "Status: On Track (grün)"

---

## Zusammenfassung: Dr. Müllers Experience mit Client Portal

**Die Realität für Dr. Müller ohne Consultry:**
- Keine Transparenz: muss E-Mails abwarten oder anrufen
- Keine strukturierte Feedback-Sammlung: Müller muss proaktiv anrufen
- Keine Änderungsmanagement: Change Requests per E-Mail verloren
- Keine Milestone-Übersicht: muss Gantt-Charts downloaden, selbst verstehen

**Die neue Reality mit Client Portal:**
- ✅ Ampel-Status sichtbar: sofort klar wo es steht (🟢/🟡/🔴)
- ✅ Milestone-Übersicht: visuell, intuiv, keine Datei-Downloads nötig
- ✅ Pulse-Checks: strukturiertes Feedback in 2 Minuten
- ✅ Magic Links: kein Passwort, 60 Tage gültig, auto-renewal
- ✅ Change Requests: sichtbar, zum Genehmigen einfach
- ✅ Team-Kontakte: alle nummern & E-Mails im Portal (fallback zu Anrufen)
- ✅ White-Label: "mpl Consulting Portalˮ, nicht Consultry

**Dr. Müllers Erfolgsmetriken:**
- Time-to-Insight: <1 Min (Ampel-Status sofort klar)
- Feedback-Completion-Rate: >80% (kurze Pulse-Checks, inline)
- Escalation-Resolution-Time: 24–48h (Stefan sieht Feedback sofort)
- CIO-Satisfaction: sehr hoch (minimal-complexity, transparent, kein Login)
- Trust in mpl: erhöht (sieht alles, keine Überraschungen)

---

## Design-Anbindung (v1.1)

**Dr. Muellers Screen Specs:**

| Journey-Screen | Screen Spec | Status |
|---------------|-------------|--------|
| Client Portal Dashboard | `screen-specs/platform/client-portal-dashboard.md` | Ausstehend (Tier 7) |
| Client Portal Pulse-Check | `screen-specs/platform/client-portal-pulse-check.md` | Ausstehend (Tier 7) |
| Magic Link Email | `screen-specs/platform/magic-link-email.md` | Ausstehend (Tier 7) |

**Design-Hinweise (Client Portal):**
- White-Label-Tokens: Kein Consultry-Branding sichtbar. "mpl Consulting Portal" Branding.
- Ampel-Kommunikation: 🟢/🟡/🔴 als universelles Status-Vokabular.
- Kein Login/Passwort: Magic Links mit 60-Tage-Gueltigkeit.
- Accessibility-Anforderung: WCAG 2.1 AA fuer Client Portal (externe Nutzer).

**v1.1 Changelog:** Design System Referenz v1.2→v1.3. Screen Spec Links hinzugefuegt. White-Label-Token-Hinweis.


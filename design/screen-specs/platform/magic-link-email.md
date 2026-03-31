# Magic Link Email — Screen Spec

**Screen-ID:** PLT-06
**PRD-Modul:** 12.2 — Client Portal
**Journey(s):** Dr. Mueller Login (Magic Link Authentifizierung)
**Layout-Typ:** Email Template
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Dr. Mueller (CIO / Externer Kunde) — Portal-Zugang ohne Passwort |
| **Sekundaer** | Alle externen Stakeholder mit Client-Portal-Zugang |
| **Frequenz** | 1-2x/Monat (bei Magic Link Erneuerung oder Erstversand). |
| **Trigger** | Automatisch: Milestone-Abschluss, Pulse-Check-Einladung, Link-Erneuerung (7 Tage vor Ablauf). Manuell: PL (Stefan) sendet "Portal-Zugang" an neuen Stakeholder. |
| **Herkunft** | System-generiert (Project Service), manuell durch PL. |
| **Ziel** | Dr. Mueller erhaelt einen sicheren, einmalig nutzbaren Link zum Client Portal. Klick oeffnet Portal ohne Login/Passwort. |
| **Geraete** | E-Mail-Client: Outlook (primaer), Gmail, Apple Mail, Mobile Mail Apps. |

**Besonderheiten:**
- **White-Label:** Logo der Beratung (mpl Consulting), nicht Consultry.
- **Responsive Email:** Max-Width 600px, Mobile-optimiert.
- **Plain Text Fallback:** Fuer E-Mail-Clients ohne HTML-Rendering.
- **Link-Sicherheit:** Link laeuft nach 30 Minuten ab. Single-Use (nach erstem Klick wird Session erstellt, Link wird ungueltig).
- **Kein Tracking-Pixel:** Datenschutz-konform, kein E-Mail-Tracking.

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Dr. Mueller | eine klare E-Mail mit Portal-Zugang erhalten | ich ohne Aufwand ins Portal komme |
| 2 | Dr. Mueller | den Link auf einen Blick erkennen | ich nicht suchen muss |
| 3 | Dr. Mueller | wissen wie lange der Link gueltig ist | ich ihn rechtzeitig nutze |
| 4 | Dr. Mueller | wissen dass die E-Mail sicher ist | ich dem Link vertraue |
| 5 | Stefan | den Magic Link manuell an neue Stakeholder senden | ich Kunden einladen kann |
| 6 | System | den Link nach Ablauf automatisch erneuern | Dr. Mueller immer Zugang hat |

---

## 3. Layout — Email Template

**Layout-Typ: Email Template (HTML + Plain Text)**
**Begruendung:** E-Mail ist der primaere Zugangskanal fuer Dr. Mueller. Das Template muss in allen gaengigen E-Mail-Clients korrekt dargestellt werden. Einfache Tabellenstruktur, Inline-Styles, keine externen CSS-Dateien.

```
+-- Email (max-width: 600px, zentriert) ---------------------------------+
|                                                                         |
|  +-- Header --------------------------------------------------------+   |
|  |                                                                   |   |
|  |  [Logo: mpl Consulting]                                          |   |
|  |  (Monochrome, 120px breit)                                       |   |
|  |                                                                   |   |
|  +-------------------------------------------------------------------+   |
|                                                                         |
|  +-- Body -----------------------------------------------------------+   |
|  |                                                                   |   |
|  |  Guten Tag, Dr. Mueller,                                         |   |
|  |                                                                   |   |
|  |  Ihr Projektportal fuer RetailCorp AG -- SAP S/4HANA             |   |
|  |  Migration wurde aktualisiert.                                   |   |
|  |                                                                   |   |
|  |  +-- Status-Box (optional, bei Milestone-Trigger) -----------+   |   |
|  |  |  STATUS: ON TRACK                                         |   |   |
|  |  |  Milestone 3: Datenmigration Test -- ABGESCHLOSSEN        |   |   |
|  |  +-----------------------------------------------------------+   |   |
|  |                                                                   |   |
|  |  +-- CTA Button -----------------------------------------------+ |   |
|  |  |                                                             | |   |
|  |  |              [ Portal oeffnen ]                             | |   |
|  |  |              (brand-primary bg, neutral-0 text)             | |   |
|  |  |                                                             | |   |
|  |  +-------------------------------------------------------------+ |   |
|  |                                                                   |   |
|  |  Dieser Link ist 30 Minuten gueltig und kann nur                 |   |
|  |  einmal verwendet werden.                                        |   |
|  |                                                                   |   |
|  |  Sicherheitshinweis: Wenn Sie diesen Zugang nicht                |   |
|  |  angefordert haben, koennen Sie diese E-Mail ignorieren.         |   |
|  |                                                                   |   |
|  |  ---                                                             |   |
|  |                                                                   |   |
|  |  Bei Fragen erreichen Sie Ihren Projektleiter:                   |   |
|  |  Stefan Kraus -- stefan.kraus@mpl.de -- +49 89 XXXX-XXXX        |   |
|  |                                                                   |   |
|  +-------------------------------------------------------------------+   |
|                                                                         |
|  +-- Footer ---------------------------------------------------------+   |
|  |                                                                   |   |
|  |  mpl Consulting GmbH                                             |   |
|  |  Leopoldstrasse 42, 80802 Muenchen                               |   |
|  |  www.mpl-consulting.de                                           |   |
|  |                                                                   |   |
|  |  Datenschutz | Impressum                                         |   |
|  |                                                                   |   |
|  +-------------------------------------------------------------------+   |
|                                                                         |
+-------------------------------------------------------------------------+
```

**Email-Design-Details:**

| Element | Spezifikation |
|---------|--------------|
| **Max-Width** | 600px, zentriert mit `margin: 0 auto` |
| **Background** | `neutral-100` (Seiten-Hintergrund), `neutral-0` (Content-Bereich) |
| **Logo** | Beratungs-Logo (White-Label), monochrome Variante, max 120px breit. Fallback: Text "mpl Consulting" |
| **Greeting** | Personalisiert: "Guten Tag, [Titel + Nachname]" — formal (DACH-Standard) |
| **CTA Button** | `brand-primary` bg (oder White-Label-Primaerfarbe), `neutral-0` Text, `radius-md`, Padding: `space-3` vertikal, `space-6` horizontal, `heading-md` Typografie. Min-Width: 200px. |
| **Ablauf-Hinweis** | `body-sm`, `neutral-600`. Direkt unter CTA Button. |
| **Sicherheitshinweis** | `body-sm`, `neutral-600`. Standard-Sicherheitstext. |
| **Kontakt-Info** | PL-Name, E-Mail, Telefon. Direkter Fallback wenn Link nicht funktioniert. |
| **Footer** | Beratungs-Adresse, Datenschutz + Impressum Links. `body-xs`, `neutral-600`. |

**Status-Box (optional, bei Milestone-Trigger):**
- Nur eingeblendet wenn E-Mail durch Milestone-Abschluss ausgeloest wird
- Ampel-Status als Text (kein Bild — E-Mail-Kompatibilitaet)
- `semantic-success` / `semantic-warning` / `semantic-danger` als Hintergrund-Tint (10%)

---

## 4. Layout — Responsive (E-Mail)

| Breakpoint | Verhalten |
|-----------|-----------|
| Desktop (>600px) | Zentriert, 600px breit. Logo links, Padding grosszuegig. |
| Mobile (<600px) | Full-width mit 16px Padding. CTA Button volle Breite. Schriftgroesse unveraendert (E-Mail-Clients skalieren). Logo zentriert. |

**E-Mail-Client-Kompatibilitaet:**
- Outlook 2016+: Tabellen-Layout, VML-Buttons als Fallback
- Gmail: Inline-Styles, keine `<style>`-Tags (werden gestrippt)
- Apple Mail: Volle CSS-Unterstuetzung
- Mobile (iOS/Android): Media Queries fuer responsive Anpassung

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Empfaenger (Name, E-Mail) | Contact Service | Bei Versand |
| Projekt-Referenz (Name, Status) | Project Service | Bei Versand |
| Magic Link Token | Auth Service | Bei Versand generiert, 30 Min Ablauf |
| PL-Kontaktdaten | Workforce Service | Bei Versand |
| Beratungs-Branding (Logo, Name, Farbe) | Config Service | Bei Versand |
| Milestone-Status (optional) | Project Service | Bei Milestone-Trigger |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Keine AI sichtbar.** |
| **Begruendung** | E-Mail muss wie eine persoenliche Nachricht wirken. Kein KI-Hinweis, keine automatisierte Sprache. Absender ist der PL (Stefan), nicht das System. |
| **Intern:** | E-Mail-Text kann KI-unterstuetzt personalisiert werden (Milestone-Summary, naechste Schritte). Aber: finale Formulierung wirkt manuell. |

---

## 7. Preview Panel Integration

Nicht zutreffend — E-Mail Template hat kein Preview Panel.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Versand-Timing** | System erkennt optimalen Versandzeitpunkt: Werktags 9-11 Uhr (DACH Business-Hours). Nie abends, nie am Wochenende. |
| **Auto-Renewal** | 7 Tage vor Magic Link Ablauf: automatische Erneuerungs-E-Mail. "Ihr Portal-Zugang wird in 7 Tagen erneuert." |
| **Engagement-Tracking (intern)** | System erfasst ob Link geklickt wird (ohne Tracking-Pixel — via Server-Side Link-Aktivierung). Kein Klick nach 48h → Reminder an PL: "Dr. Mueller hat Link nicht genutzt." |
| **Nichts davon sichtbar in der E-Mail.** | |

---

## 9. Interaktions-Flows

### Flow 1: Milestone-basierte E-Mail (Standard)
```
System: Milestone 3 abgeschlossen → Stefan bestaetigt →
System generiert E-Mail mit Status-Box + Magic Link →
Versand an Dr. Mueller (optimaler Zeitpunkt) →
Dr. Mueller oeffnet E-Mail → Liest Status (5 Sek) →
Klickt "Portal oeffnen" → Magic Link validiert →
Session erstellt → Client Portal Dashboard (PLT-04) laedt →
Link wird ungueltig (Single-Use)
```

### Flow 2: Manuelle Einladung (Stefan laedt neuen Stakeholder ein)
```
Stefan → Admin Panel → "Client Portal" → "Stakeholder einladen" →
E-Mail + Name + Rolle eingeben →
System generiert personalisierte E-Mail ohne Status-Box →
"Portal oeffnen" → Magic Link → Client Portal Dashboard
```

### Flow 3: Abgelaufener Link → Erneuerung
```
Dr. Mueller klickt Link nach 30 Min → Link abgelaufen →
Landing Page: "Ihr Zugang ist abgelaufen." →
"Neuen Zugang anfordern" → E-Mail-Input →
System validiert E-Mail → Neuer Magic Link gesendet →
Dr. Mueller erhaelt neue E-Mail → Klick → Portal oeffnet
```

### Flow 4: Auto-Renewal (7 Tage vor Ablauf)
```
System: Magic Link laeuft in 7 Tagen ab →
E-Mail: "Ihr Portal-Zugang fuer RetailCorp" →
Kein Status-Box, nur CTA: "Portal oeffnen" →
Neuer Link mit frischer 90-Tage-Gueltigkeit
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Milestone-Abschluss (System) | Magic Link Email | Automatischer Versand |
| **Von:** Admin Panel (Stefan) | Magic Link Email | Manueller Versand |
| **Zu:** Client Portal Dashboard | `platform/client-portal-dashboard.md` | Klick auf "Portal oeffnen" |
| **Zu:** Client Portal Pulse-Check | `platform/client-portal-pulse-check.md` | Variante: direkter Pulse-Check-Link in E-Mail |
| **Zu:** Link-Abgelaufen-Landing-Page | Inline | Klick auf abgelaufenen Link |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board:** Kein Aequivalent | E-Mail Template ist neu. |
| **Figma:** Ausstehend | E-Mail Template in Figma erstellen. HTML-Email-Frameworks als Basis (MJML, Foundation for Emails). |
| **Inspiration:** Stripe Magic Link, Linear Login | Minimalistische, vertrauenswuerdige E-Mail-Designs. |

---

## 12. Akzeptanzkriterien

- [ ] White-Label: Beratungs-Logo, nicht Consultry-Branding
- [ ] Personalisierte Anrede: "Guten Tag, [Titel + Nachname]"
- [ ] CTA Button "Portal oeffnen": `brand-primary` bg (oder White-Label-Farbe), prominent, zentriert
- [ ] Link-Ablauf-Hinweis: "30 Minuten gueltig, einmalige Nutzung"
- [ ] Sicherheitshinweis: "Wenn Sie diesen Zugang nicht angefordert haben..."
- [ ] PL-Kontaktdaten als Fallback
- [ ] Status-Box (optional): Ampel-Status + Milestone bei Milestone-Trigger
- [ ] Responsive: 600px Desktop, Full-Width Mobile
- [ ] Plain Text Fallback: Vollstaendiger Text + Link als URL
- [ ] E-Mail-Client-Kompatibilitaet: Outlook 2016+, Gmail, Apple Mail, iOS/Android Mail
- [ ] Kein Tracking-Pixel (Datenschutz-konform)
- [ ] Link Single-Use: Nach erstem Klick ungueltig, Session wird erstellt
- [ ] Link Ablauf: 30 Minuten
- [ ] Accessibility: `alt`-Text auf Logo, semantische HTML-Struktur

---

## 13. Offene Fragen

1. **Link-Gueltigkeit:** 30 Minuten (PRD) oder laenger? *Empfehlung: 30 Min fuer initialen Link. Session-Cookie dauert 90 Tage — Dr. Mueller muss nicht jedes Mal neuen Link anfordern.*
2. **Absender-Adresse:** noreply@mpl.de oder stefan.kraus@mpl.de? *Empfehlung: PL-Adresse (stefan.kraus@mpl.de) fuer persoenlicheren Eindruck. Reply-To: PL.*
3. **Sprache:** Immer Deutsch oder nach Kunden-Praeferenz? *Empfehlung: Deutsch Standard, Englisch als Option.*
4. **Multiple Projekte:** Soll die E-Mail Links zu mehreren Projekten enthalten? *Empfehlung: 1 E-Mail pro Projekt. Bei mehreren Projekten: separate E-Mails.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. Magic Link Template. White-Label. Single-Use. Plain Text Fallback. |

---

## Anhang: Plain Text Fallback

```
Guten Tag, Dr. Mueller,

Ihr Projektportal fuer RetailCorp AG -- SAP S/4HANA Migration
wurde aktualisiert.

Status: On Track
Milestone 3: Datenmigration Test -- ABGESCHLOSSEN

Oeffnen Sie Ihr Portal ueber folgenden Link:
https://portal.mpl-consulting.de/p/xxx-magic-token-xxx

Dieser Link ist 30 Minuten gueltig und kann nur einmal
verwendet werden.

Sicherheitshinweis: Wenn Sie diesen Zugang nicht angefordert
haben, koennen Sie diese E-Mail ignorieren.

Bei Fragen:
Stefan Kraus (Projektleiter)
stefan.kraus@mpl.de
+49 89 XXXX-XXXX

--
mpl Consulting GmbH
Leopoldstrasse 42, 80802 Muenchen
www.mpl-consulting.de
```

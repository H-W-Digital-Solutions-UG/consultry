# Live Event Mobile — Screen Spec

**Screen-ID:** GRW-05
**PRD-Modul:** 9.2 — Event Intelligence
**Journey(s):** J11-S2 (Katrin erfasst Leads waehrend Event)
**Layout-Typ:** Stack (Mobile-only)
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Katrin (BD-Leiterin) — steht/laeuft auf Event, erfasst Leads in Echtzeit |
| **Sekundaer** | Thomas (Event-Teilnahme, selten Lead-Erfassung), Stefan (Fach-Event-Teilnahme) |
| **Frequenz** | Katrin: Durchgehend waehrend Event (3-8h). Circa 10-30 Lead-Erfassungen pro Event. |
| **Trigger** | Event Manager → "Event starten" (Mobile), automatischer Vorschlag am Event-Tag via Notification, Bottom Nav (waehrend Event). |
| **Herkunft** | Event Manager, Notification (automatisch am Event-Tag). |
| **Ziel** | Leads schnellstmoeglich erfassen: Visitenkarte scannen, Sprachnotiz aufnehmen, Schnellformular ausfuellen. Kein Kontext-Verlust, maximale Geschwindigkeit. |
| **Geraete** | Mobile only (Smartphone). Optimiert fuer Einhand-Bedienung. |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Katrin | eine Visitenkarte per Kamera scannen | der Kontakt in Sekunden erfasst ist |
| 2 | Katrin | eine Sprachnotiz zum Gespraech aufnehmen | ich Details nicht vergesse |
| 3 | Katrin | ein Schnellformular mit wenigen Feldern ausfuellen | ich Kontakte manuell erfassen kann |
| 4 | Katrin | sofort sehen, ob der Kontakt bereits im CRM existiert | ich Dopplungen vermeide |
| 5 | Katrin | ein kurzes Firmen-Briefing erhalten, wenn ich einen Kontakt scanne | ich im Gespraech informiert bin |
| 6 | Katrin | alle erfassten Leads auf einen Blick sehen | ich den Ueberblick behalte |

---

## 3. Layout — Desktop

**Dieser Screen ist Mobile-only. Es gibt keine Desktop-Variante.**
Desktop-Nutzer werden auf den Event Manager (`growth/event-manager.md`) verwiesen, wo die Post-Event-Nachbereitung stattfindet.

**Layout-Typ: Stack (Mobile Fullscreen)**

```
┌─ Live Event Mobile (Fullscreen) ──────────────────┐
│                                                     │
│  DMEXCO 2026 · Live           [✕ Beenden]          │
│  8 Leads erfasst                                    │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │                                              │   │
│  │          ┌──────────────────┐                │   │
│  │          │                  │                │   │
│  │          │   📷 Kamera      │                │   │
│  │          │   Visitenkarte   │                │   │
│  │          │   scannen        │                │   │
│  │          │                  │                │   │
│  │          └──────────────────┘                │   │
│  │                                              │   │
│  │  ┌──────────────┐  ┌──────────────┐         │   │
│  │  │ 🎤 Sprach-   │  │ ✏️ Schnell-  │         │   │
│  │  │    notiz     │  │    formular  │         │   │
│  │  └──────────────┘  └──────────────┘         │   │
│  │                                              │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  ── Letzte Erfassungen ──                           │
│                                                     │
│  ┌─ Lead Card ─────────────────────────────────┐   │
│  │ Dr. Mueller · RetailCorp AG          [CRM ✓]│   │
│  │ CTO · vor 5 Min · 🎤 Notiz vorhanden       │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  ┌─ Lead Card ─────────────────────────────────┐   │
│  │ Lisa Schmidt · TechAG               [Neu]   │   │
│  │ Head of IT · vor 12 Min                      │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  ... (scrollbar)                                    │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │     [Bottom Nav ist ausgeblendet]            │   │
│  │     [waehrend Kamera/Scan aktiv]             │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Scan-Modus (Kamera aktiv):**

```
┌─ Scan-Modus (Fullscreen Kamera) ─────────────────┐
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │                                              │   │
│  │              Kamera-Preview                  │   │
│  │                                              │   │
│  │        ┌─ Erkennungsrahmen ──┐               │   │
│  │        │                     │               │   │
│  │        │   Visitenkarte      │               │   │
│  │        │   hierhin halten    │               │   │
│  │        │                     │               │   │
│  │        └─────────────────────┘               │   │
│  │                                              │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  ┌─ Sofort-Ergebnis (Overlay) ─────────────────┐   │
│  │ ✨ Erkannt:                                   │   │
│  │ Dr. Thomas Mueller                            │   │
│  │ RetailCorp AG · CTO                           │   │
│  │ [CRM ✓ — Bestandskontakt seit 2024]          │   │
│  │                                                │   │
│  │ KI-Briefing:                                   │   │
│  │ "RetailCorp plant SAP-Migration.               │   │
│  │  Budget: 340K. Letzter Kontakt: Jan 2026."    │   │
│  │                                                │   │
│  │ [✓ Speichern] [🎤 Notiz] [✏️ Bearbeiten]      │   │
│  └────────────────────────────────────────────────┘   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Design-Entscheidungen fuer Mobile:**
- Alle Touch-Targets: min. 48x48px (DS Accessibility Standards)
- Schrift: `heading-lg` fuer Hauptaktionen, `body-lg` fuer Labels (groesser als Standard fuer Lesbarkeit im Stehen)
- Kamera-Button: 80x80px, zentriert, `brand-primary` Hintergrund, `neutral-0` Icon
- Sprachnotiz / Schnellformular: 48px hoch, halbe Breite je, `neutral-0` bg, `border-default`
- Bottom Nav: Standard-Position, aber ausgeblendet waehrend aktivem Scan-Modus (`duration-fast` Fade)
- Statusleiste oben: Event-Name + Lead-Counter, `neutral-50` bg, sticky

**CRM-Match-Badge:**
- `[CRM ✓]`: `semantic-success-light` bg, `semantic-success` text — Kontakt existiert
- `[Neu]`: `semantic-info-light` bg, `semantic-info` text — neuer Kontakt

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| **Dieser Screen ist Mobile-only.** | |
| `breakpoint-sm` | Fullscreen Stack wie oben. Kamera-Button prominent. Bottom Nav ausgeblendet waehrend Scan. |
| `breakpoint-md`+ | Redirect zu Event Manager Desktop-Ansicht. Banner: "Fuer Live-Lead-Erfassung bitte Smartphone verwenden." |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Aktives Event (Name, Datum, Teilnehmer) | Event Service | Bei Screen-Oeffnung |
| Visitenkarten-OCR (Name, Firma, Rolle, Kontakt) | OCR Service (Kamera) | Echtzeit bei Scan |
| CRM-Match (existierender Kontakt?) | CRM Service | Sofort nach OCR-Ergebnis |
| KI-Firmen-Briefing (Kurzinfo zum Kontakt/Firma) | AI Briefing Service | Sofort nach CRM-Match |
| Erfasste Leads (lokaler Cache + Server-Sync) | Lead Capture Service | Offline-faehig, Sync bei Verbindung |
| Sprachnotiz-Transkription | Speech-to-Text Service | Asynchron, verfuegbar nach 30-60 Sek |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Instant AI Briefing** — KI liefert sofort nach Scan ein kompaktes Firmen-/Kontakt-Briefing. |
| **Visitenkarten-OCR** | KI extrahiert: Name, Firma, Rolle, E-Mail, Telefon, Website. Konfidenz-Anzeige pro Feld (`score-displays`). |
| **CRM-Abgleich** | Sofortiger Match gegen CRM: "Bestandskontakt seit 2024" oder "Neuer Kontakt — Firma bekannt, 2 Bestandskontakte." |
| **Instant Company Brief** | Auf `ai-surface` Overlay: Firmenprofil, aktuelle Pipeline, letzte Interaktion, relevante Signale. Max 3 Zeilen. |
| **Sprachnotiz-Analyse** | KI transkribiert Sprachnotiz und extrahiert: Themen, Action Items, Budget-Hinweise. Verfuegbar nach Sync in Event Manager. |
| **Lead-Scoring** | KI vergibt sofort einen Lead-Score basierend auf: Firmenpotenzial, Branchenrelevanz, bestehende Beziehungen. |

---

## 7. Preview Panel Integration

- **Lead Card Tap:** Tap auf erfassten Lead oeffnet Bottom Sheet (DS `bottom-sheet`, 60% Hoehe):
  - Gescannte Visitenkarte (Bild)
  - OCR-Ergebnis mit Bearbeitungsoption
  - CRM-Status
  - Sprachnotiz (Play-Button)
  - KI-Briefing
  - Aktionen: Bearbeiten, Notiz hinzufuegen, Opportunity erstellen
- **Kein Slide-Over** auf Mobile — Bottom Sheet statt Slide-Over Panel.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Gespraechs-Vorbereitung** | Wenn Katrin einen Kontakt scannt, der in der Teilnehmerliste steht: "Talking Points aus Vorbereitung verfuegbar" — Direktlink. |
| **Duplikat-Warnung** | "Kontakt Mueller wurde bereits vor 20 Min erfasst. Notiz ergaenzen?" |
| **Follow-up-Timing** | "Erfahrungsgemaess ist Follow-up innerhalb 24h am effektivsten. Erinnerung fuer morgen 9:00?" |
| **Event-Zusammenfassung** | Am Ende des Event-Tages: Push-Notification "8 Leads erfasst. Top 3 priorisiert. Zusammenfassung im Event Manager bereit." |

---

## 9. Interaktions-Flows

### Flow 1: Visitenkarte scannen (Katrin, 15 Sek)
```
Katrin tippt auf Kamera-Button → Kamera oeffnet fullscreen →
Visitenkarte in Erkennungsrahmen halten → OCR laeuft (< 2 Sek) →
Sofort-Ergebnis: Name, Firma, Rolle → CRM-Match: "Bestandskontakt" →
KI-Briefing: "RetailCorp plant SAP-Migration" →
Katrin tippt "Speichern" → Lead erfasst → Zurueck zum Hauptscreen
```

### Flow 2: Sprachnotiz aufnehmen (Katrin, 30 Sek)
```
Katrin tippt "Sprachnotiz" → Aufnahme startet (roter Indikator) →
"Gespraech mit Mueller, RetailCorp. Interesse an SAP-Migration,
Budget circa 300K, Zeitrahmen Q3." →
Tippt Stop → Transkription laeuft (async) →
Notiz wird an letzten Lead angehaengt
```

### Flow 3: Schnellformular (Katrin, 20 Sek)
```
Katrin tippt "Schnellformular" → Formular oeffnet:
Name: [___] Firma: [___] Rolle: [___] Notiz: [___] →
Minimal-Eingabe → "Speichern" → Lead erfasst →
KI gleicht Firma gegen CRM ab → Match-Badge erscheint
```

### Flow 4: Lead reviewen
```
Katrin scrollt "Letzte Erfassungen" → Tap auf Dr. Mueller →
Bottom Sheet: Visitenkarte, OCR, Briefing, Sprachnotiz →
Korrigiert Schreibfehler → "Opportunity erstellen" →
Opportunity Intake oeffnet (vorausgefuellt)
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Event Manager | Live Event Mobile | "Event starten" (Mobile) |
| **Von:** Notification | Live Event Mobile | Automatische Erinnerung am Event-Tag |
| **Zu:** Event Manager | `growth/event-manager.md` | "Beenden" → Post-Event-Nachbereitung |
| **Zu:** Opportunity Intake | `deal/opportunity-intake.md` | "Opportunity erstellen" aus Lead Card |
| **Zu:** Account Plan | `foundation/account-plan-stakeholder-map.md` | Tap auf Firmenname in KI-Briefing |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board Item:** Live Event Mobile | Noch nicht erstellt. |
| **Figma:** Kein Frame vorhanden | Erstanlage erforderlich. Mobile-only, Camera UI + Lead Cards, Light Theme. |

---

## 12. Akzeptanzkriterien

- [ ] Fullscreen Mobile Layout mit prominentem Kamera-Button (80x80px)
- [ ] Visitenkarten-Scan: OCR-Ergebnis in < 3 Sekunden
- [ ] CRM-Abgleich: Sofortiges Match-Ergebnis nach Scan
- [ ] KI-Firmen-Briefing: Kompakt auf `ai-surface` Overlay, max 3 Zeilen
- [ ] Sprachnotiz: Aufnahme + asynchrone Transkription
- [ ] Schnellformular: Max 4 Felder (Name, Firma, Rolle, Notiz)
- [ ] Letzte Erfassungen: Chronologische Lead-Liste, scrollbar
- [ ] Bottom Nav ausgeblendet waehrend aktivem Scan-Modus
- [ ] Touch-Targets: min. 48x48px
- [ ] Offline-Faehigkeit: Leads lokal gecacht, Sync bei Verbindung
- [ ] Duplikat-Warnung bei erneutem Scan desselben Kontakts
- [ ] Lead Card Bottom Sheet mit OCR, Briefing, Sprachnotiz
- [ ] "Beenden" navigiert zurueck zu Event Manager
- [ ] Accessibility: VoiceOver-kompatibel, ausreichende Kontraste bei Aussenbeleuchtung

---

## 13. Offene Fragen

1. **OCR-Anbieter:** Welcher OCR-Service wird verwendet? *Empfehlung: Google Vision API oder Apple Vision Framework (nativ, schneller).*
2. **Offline-Dauer:** Wie lange bleiben Leads im lokalen Cache? *Empfehlung: Unbegrenzt, Sync bei naechster Verbindung, Warnung nach 24h ohne Sync.*
3. **Kamera-Berechtigung:** Wie wird die Berechtigung angefragt? *Empfehlung: Beim ersten "Event starten", mit Erklaerung warum.*
4. **NFC/QR-Code:** Soll NFC-Badge-Scanning unterstuetzt werden? *Empfehlung: Phase 2, nach Evaluation der Event-Formate.*
5. **Datenschutz:** DSGVO-Konformitaet bei Visitenkarten-Scan — Einwilligung erforderlich? *Empfehlung: Banner beim ersten Scan mit Hinweis auf Datenverarbeitung.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |

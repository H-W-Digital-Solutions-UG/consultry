# Outreach Editor — Screen Spec

**Screen-ID:** DEAL-08
**PRD-Modul:** 10.6 — Intelligent Outreach
**Journey(s):** J1-S7 (Katrin sendet personalisierten Outreach)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Katrin (BD-Leiterin) — personalisierte Outreach-Nachrichten erstellen und versenden |
| **Sekundaer** | Thomas (Warm-Path-Kontext, CC bei Erstansprache), Martina (Template-Verwaltung) |
| **Frequenz** | Katrin: 1-2x/Woche (30 Min pro Session, 2-5 Nachrichten). |
| **Trigger** | Opportunity Detail → "Outreach starten", Angebots-Canvas → "An Kunden senden", Signal Feed → "Kontakt aufnehmen", Sidebar "Deal → Outreach". |
| **Herkunft** | Opportunity Detail (primaer), Angebots-Canvas, Signal Feed, Sidebar. |
| **Ziel** | KI-generierte, personalisierte Nachricht an Ansprechpartner senden (Email, LinkedIn), Varianten testen, Tracking aktivieren. |
| **Geraete** | Desktop (primaer), Tablet (Versand unterwegs). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Katrin | eine KI-generierte Nachricht basierend auf Signal, Brief und Warm-Path erhalten | ich nicht bei Null anfangen muss |
| 2 | Katrin | zwischen verschiedenen Templates waehlen (Erstansprache, Follow-up, Referenz-Anfrage) | die Nachricht zum Anlass passt |
| 3 | Katrin | die Tonalitaet anpassen (Formal, Professionell-Warm, Casual) | der Ton zum Empfaenger passt |
| 4 | Katrin | den Kanal waehlen (Email, LinkedIn Message, LinkedIn InMail) | ich den richtigen Kanal fuer den Kontakt nutze |
| 5 | Katrin | eine Vorschau sehen wie der Empfaenger die Nachricht sieht | ich die Wirkung einschaetzen kann |
| 6 | Katrin | Variablen einfuegen ({Ansprechpartner}, {Firma}, {Referenz-Projekt}) | die Nachricht personalisiert wirkt |
| 7 | Katrin | A/B-Varianten generieren lassen | ich die effektivere Version testen kann |
| 8 | Katrin | die Nachricht sofort senden oder terminieren | ich den optimalen Sendezeitpunkt waehle |
| 9 | Katrin | nach dem Versand Oeffnungs- und Antwortraten sehen | ich die Wirkung meines Outreach messe |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure (2/3 + 1/3 Asymmetrie)**
**Begruendung:** Outreach Editor ist ein fokussierter Nachrichten-Workflow: Empfaenger waehlen → Nachricht generieren/bearbeiten → Vorschau → Senden. Die 2/3+1/3 Asymmetrie (DS 1.7) trennt den Nachrichten-Editor von Kontext und Steuerung.

```
┌─ Sidebar ─┬─ Outreach Editor Toolbar ────────────────────────────────┐
│            │  AN: Dr. Klaus Weber (CFO) · RetailCorp AG               │
│  Deal      │  │ Kanal: [Email ▾] │ [Vorschau] │ [Senden ▾]          │
│  > Outreach├──────────────────────────────────────────────────────────┤
│            │                                                          │
│            │  ┌─ Editor (2/3) ─────────────┬─ Steuerung (1/3) ──────┐│
│            │  │                             │                         ││
│            │  │  Consent: ✅ Warm-Path      │  ┌─ Kontext ──────────┐ ││
│            │  │  (via Thomas) · Art. 6(1)f  │  │  Opportunity:       │ ││
│            │  │                             │  │  RetailCorp AG      │ ││
│            │  │  Template: [Erstansprache ▾]│  │  SAP Migration      │ ││
│            │  │  Ton: [○F  ●PW  ○C]        │  │  Score: 94          │ ││
│            │  │                             │  │                     │ ││
│            │  │  Betreff:                   │  │  Signal:            │ ││
│            │  │  [SAP S/4HANA Transform. —  │  │  CTO-Wechsel       │ ││
│            │  │   Retail-Expertise fuer     │  │  Dr. Hofer, ex-Del.│ ││
│            │  │   RetailCorp              ] │  │                     │ ││
│            │  │                             │  │  Warm Path:         │ ││
│            │  │  ┌─ ai-surface ──────────┐  │  │  Thomas → Dr. Weber│ ││
│            │  │  │                       │  │  │  (BITKOM 2024)     │ ││
│            │  │  │  Sehr geehrter Herr   │  │  └─────────────────────┘ ││
│            │  │  │  Dr. Weber,           │  │                         ││
│            │  │  │                       │  │  ┌─ Variablen ────────┐ ││
│            │  │  │  mit grossem Inter-   │  │  │  {Ansprechpartner} │ ││
│            │  │  │  esse habe ich die    │  │  │  {Firma}           │ ││
│            │  │  │  strategische Wei-    │  │  │  {Signal-Kontext}  │ ││
│            │  │  │  chenstellung bei     │  │  │  {Referenz-Projekt}│ ││
│            │  │  │  RetailCorp wahrge-   │  │  │  {Berater-Name}    │ ││
│            │  │  │  nommen...            │  │  │  {Warm-Path}       │ ││
│            │  │  │                       │  │  │                     │ ││
│            │  │  │  [✏️ Bearbeiten]      │  │  │  Klick = einfuegen │ ││
│            │  │  │  [🔄 Regenerieren]    │  │  └─────────────────────┘ ││
│            │  │  │  [💬 Prompt-Anp.]     │  │                         ││
│            │  │  └───────────────────────┘  │  ┌─ A/B Varianten ───┐ ││
│            │  │                             │  │  [A] Professionell  │ ││
│            │  │  ── Varianten ────────────  │  │  [B] Direkter Angle│ ││
│            │  │  [Tab A: Warm]  [Tab B: Dir]│  │  [+ Variante]      │ ││
│            │  │                             │  │  [Vergleichen]      │ ││
│            │  │  ── Follow-up Sequenz ────  │  └─────────────────────┘ ││
│            │  │  ☑ FU1: +5d · Erinnerung  │                         ││
│            │  │  ☑ FU2: +12d · Case Study  │  ┌─ Senden ───────────┐ ││
│            │  │  ☐ FU3: +20d · Optional    │  │  [Jetzt senden]     │ ││
│            │  │                             │  │  [Terminieren ▾]    │ ││
│            │  │  ── Tracking ─────────────  │  │  Empfohlen: Di 9:00│ ││
│            │  │  ☑ Oeffnungen tracken      │  │                     │ ││
│            │  │  ☑ Link-Klicks             │  │  [Als Entwurf]      │ ││
│            │  │  ☐ Read Receipt            │  └─────────────────────┘ ││
│            │  │                             │                         ││
│            │  └─────────────────────────────┴─────────────────────────┘│
│            │                                                          │
└────────────┴──────────────────────────────────────────────────────────┘
```

**Steuerungspanel Bereiche:**

1. **Kontext** — Opportunity-Zusammenfassung, Signal-Kontext, Warm-Path-Information. Read-only. Dient als Referenz fuer die Personalisierung.
2. **Variablen** — Klickbare Variable Tags. Klick fuegt Variable an Cursor-Position im Editor ein. Variablen werden beim Senden durch echte Werte ersetzt.
3. **A/B Varianten** — Tabs fuer Varianten-Wechsel. "Vergleichen" zeigt Side-by-Side. "+" generiert neue KI-Variante mit anderem Angle.
4. **Senden** — "Jetzt senden", "Terminieren" (Datepicker + empfohlener Zeitpunkt), "Als Entwurf speichern".

**Tonalitaet-Selector:**

| Option | Kuerzel | Beschreibung |
|--------|---------|-------------|
| Formal | F | Sie-Form, klassischer Geschaeftsbrief-Stil. Fuer Konzerne, Erstansprache an C-Level. |
| Professionell-Warm | PW | Sie-Form, aber persoenlicher. Warm-Path-Referenz prominent. Standard fuer DACH. |
| Casual | C | Du-Form (nur bei etabliertem Kontakt). Fuer Startup-Kunden oder bestehende Beziehungen. |

**Kanal-Auswahl:**

| Kanal | Besonderheit |
|-------|-------------|
| Email | Voller Editor: Betreff + Body + Signatur. Follow-up-Sequenz. Tracking. |
| LinkedIn Message | Kuerzere Form (max 1500 Zeichen). Kein Betreff. Hinweis auf Zeichenlimit. |
| LinkedIn InMail | Betreff + Body (max 1900 Zeichen). Zeichenzaehler. |

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | 2/3 Editor + 1/3 Steuerungspanel. Volle Toolbar. |
| `breakpoint-lg` | Editor volle Breite. Steuerungspanel als Toggle-Panel (Slide-Over). |
| `breakpoint-md` | Editor volle Breite. Kontext als collapsible Accordion. Senden als Sticky Bottom Bar. |
| `breakpoint-sm` | Vereinfachter Editor: Nachricht + Senden. Kein A/B-Test. Keine Follow-up-Sequenz. |

---

## 5. Datenanforderungen

| Datenpunkt | Quelle | Update-Frequenz |
|-----------|--------|-----------------|
| Opportunity-Kontext | API: `GET /opportunities/{id}` | On-Load |
| Signal-Kontext | API: `GET /signals/{id}` | On-Load |
| Warm-Path-Daten | API: `GET /relationships/{contactId}` | On-Load |
| Engagement Brief | API: `GET /opportunities/{id}/brief` | On-Load |
| KI-generierte Nachricht | API: `POST /outreach/generate` (Streaming) | On-Demand |
| A/B-Variante | API: `POST /outreach/generate-variant` (Streaming) | On-Demand |
| Consent-Status | API: `GET /contacts/{id}/consent` | On-Load, Real-time |
| Template-Bibliothek | API: `GET /outreach-templates` | Cached |
| Tracking-Daten (nach Versand) | API: `GET /outreach/{id}/tracking` | Real-time via WebSocket |
| Empfohlener Sendezeitpunkt | API: `GET /outreach/optimal-time/{contactId}` | On-Load |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | AI Canvas (generativ + iterativ). KI generiert, Katrin iteriert per Prompt. |
| **Initiale Generierung** | KI generiert Nachricht aus: Signal-Kontext + Engagement Brief + Warm-Path + Berater-Match + gewaehltem Template + Tonalitaet. Streaming mit `ktype-ai-reveal`. |
| **Prompt-Anpassung** | Inline-Prompt-Feld: "Formeller", "Kuerzer", "Erwaehne die ECC-Maintenance-Deadline", "Referenz MedTech einfuegen". KI passt nur die angesprochenen Teile an. |
| **A/B-Varianten** | "Neue Variante" generiert alternative Nachricht mit anderem Angle (z.B. Variante A: Warm-Path-fokussiert, Variante B: Problem-fokussiert). |
| **Follow-up-Generierung** | KI generiert Follow-up-Nachrichten mit unterschiedlichen Angles: FU1 (Erinnerung), FU2 (Mehrwert: Case Study), FU3 (letzte Chance). |
| **Tonalitaet-Anpassung** | Wechsel des Ton-Selectors (F/PW/C) regeneriert die Nachricht im neuen Ton. Inhalt bleibt, Stil aendert sich. |
| **Kanalwechsel** | Wechsel Email → LinkedIn: KI kuerzt automatisch auf Zeichenlimit, passt Format an (kein Betreff bei LinkedIn Message). |
| **Sendezeitpunkt** | "Empfohlen: Dienstag 09:00 (Dr. Weber oeffnet E-Mails bevorzugt dienstags frueh)." Basierend auf historischem Verhalten oder Branchen-Benchmark. |

---

## 7. Preview Panel Integration

| Kontext | Verhalten |
|---------|-----------|
| **Nachrichten-Preview** | "Vorschau" oeffnet Preview Panel (480px Slide-Over). Zeigt Nachricht wie Empfaenger sie sieht: Email mit Signatur und Formatierung, LinkedIn mit Profilbild und Message-Bubble. |
| **A/B-Vergleich** | "Vergleichen" oeffnet Split-View: Variante A links, Variante B rechts. Unterschiede als `ai-surface` markiert. |
| **Follow-up-Preview** | Klick auf Follow-up in Sequenz zeigt Preview der Follow-up-Nachricht. |
| **Engagement Brief Referenz** | Im Kontext-Panel: Inline-Preview (Thumbnail) des Engagement Briefs als Referenz. |

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Optimaler Sendezeitpunkt** | "Dr. Weber oeffnet E-Mails bevorzugt dienstags 08:30-09:30 (basierend auf Branchen-Benchmark)." Als Info-Card im Senden-Panel. |
| **Kanal-Empfehlung** | "Dr. Weber hat LinkedIn-Profil mit hoher Aktivitaet — LinkedIn InMail empfohlen." Als `body-xs` unter Kanal-Auswahl. |
| **Betreff-Optimierung** | "Betreff-Laenge optimal: 40-60 Zeichen. Aktuell: 52 ✅." Als Live-Zaehler. |
| **A/B-Vorhersage** | "Variante A (Warm-Path) hat historisch 23% hoehere Antwortrate bei Konzern-CFOs." Als Subtle Hint bei Varianten-Auswahl. |
| **Consent-Gating** | Ohne gueltigen Consent: Sende-Button disabled. Roter Banner: "Consent fehlt — Versand blockiert. [Consent anfordern]." |

---

## 9. Interaktions-Flows

### Flow 1: Personalisierten Outreach senden (Katrin, 15 Min)
```
Opportunity Detail → "Outreach starten" → Outreach Editor oeffnet →
Empfaenger: Dr. Klaus Weber (auto-gesetzt aus Opportunity) →
Consent: ✅ Warm-Path → Template: "Erstansprache" →
Ton: "Professionell-Warm" → Kanal: "Email" →
KI generiert Nachricht (ktype-ai-reveal, ~8s) →
Katrin liest → Prompt: "Erwaehne die ECC-Maintenance-Deadline" →
KI passt Absatz an (~3s) → Katrin zufrieden →
Follow-up: FU1 (+5d) ✅, FU2 (+12d) ✅ →
Tracking: Oeffnungen ✅, Links ✅ →
"Vorschau" → sieht wie Empfaenger es sieht → gut →
"Terminieren" → Di 09:00 → Bestaetigen →
Success Toast: "Outreach an Dr. Weber geplant fuer Di, 01.04. um 09:00."
```

### Flow 2: A/B-Varianten testen
```
Outreach Editor → KI hat Variante A generiert (Warm-Path-Angle) →
Steuerungspanel: "+ Variante" → KI generiert Variante B (Problem-Angle, ~5s) →
"Vergleichen" → Split-View: A links, B rechts →
Katrin entscheidet: Variante A (persoenlicher) → Tab A ausgewaehlt → Senden
```

### Flow 3: LinkedIn InMail statt Email
```
Outreach Editor → Kanal: "Email" → Nachricht ist 300 Woerter →
Katrin wechselt Kanal: "LinkedIn InMail" →
KI kuerzt automatisch (max 1900 Zeichen) → Zeichenzaehler: 1.740/1.900 →
Betreff wird angepasst → Katrin prueft → "Senden"
```

### Flow 4: Tracking nach Versand
```
Outreach gesendet → Opportunity Detail zeigt "Outreach an CFO gesendet" →
2h spaeter: "Dr. Weber hat die E-Mail geoeffnet" →
5d spaeter: Kein Antwort → Follow-up 1 wird automatisch gesendet →
FU1 geoeffnet → Dr. Weber antwortet → "Antwort eingegangen!" (Notification)
```

---

## 10. Handoff-Punkte

| Von | Zu | Trigger | Daten |
|-----|-----|---------|-------|
| Opportunity Detail | Outreach Editor | "Outreach starten" | `opportunityId`, `contactId` |
| Angebots-Canvas | Outreach Editor | "An Kunden senden" | `offerId`, `accountId` |
| Signal Feed | Outreach Editor | "Kontakt aufnehmen" | `signalId`, `contactId` |
| Outreach Editor | Opportunity Detail | Nach Versand (Activity Feed Update) | `outreachId`, Tracking |
| Outreach Editor | Consent Dialog | "Consent anfordern" (bei fehlendem Consent) | `contactId` |
| Outreach Editor | Entwurf (gespeichert) | "Als Entwurf speichern" | `outreachId` |

---

## 11. Stitch/Figma-Referenz

| Element | Referenz |
|---------|----------|
| Nachrichten-Editor | DS 6.4 AI-Generated Content Pattern (`ai-surface` fuer KI-generierte Nachricht). |
| Consent-Badge | DS 3.1 Semantic Colors (`semantic-success` fuer Consent OK, `semantic-danger` fuer fehlend). |
| Ton-Selector | DS 6.6 Selection Pattern (Segmented Control, 3 Optionen). |
| Preview Panel | DS 6.10 Preview Panel (Slide-Over, 480px). |
| Follow-up-Sequenz | Basiert auf Timeline (`component-specs/data-display/timeline.md`). |
| Variable Tags | DS 6.8 Tag Pattern (klickbar, `brand-primary` border). |

---

## 12. Akzeptanzkriterien

- [ ] 2/3 Editor + 1/3 Steuerungspanel Layout
- [ ] KI-generierte Nachricht basierend auf Signal, Brief, Warm-Path
- [ ] Streaming-Generierung mit `ktype-ai-reveal`
- [ ] Template-Auswahl: Erstansprache, Follow-up, Referenz-Anfrage
- [ ] Tonalitaet-Selector: Formal, Professionell-Warm, Casual
- [ ] Kanal-Auswahl: Email, LinkedIn Message, LinkedIn InMail (mit Zeichenlimit)
- [ ] Variablen-Insertion per Klick: {Ansprechpartner}, {Firma}, {Referenz-Projekt}
- [ ] A/B-Varianten-Generierung mit Vergleichsmodus
- [ ] Follow-up-Sequenz konfigurierbar (Timing, Angle)
- [ ] Vorschau: Empfaenger-Perspektive (Email-Format, LinkedIn-Bubble)
- [ ] Senden sofort oder terminiert (mit empfohlenem Zeitpunkt)
- [ ] Consent-Gating: Senden blockiert ohne gueltigen Consent
- [ ] Tracking nach Versand: Oeffnungsrate, Antwortrate im Opportunity Detail
- [ ] Prompt-Anpassung fuer Nachrichten-Iteration
- [ ] Responsive: Simplified Editor auf Mobile (kein A/B, keine Sequenz)
- [ ] Accessibility: Editor aria-role="textbox", Variable Tags aria-role="button", Consent-Status aria-live

---

## 13. Offene Fragen

| # | Frage | Status |
|---|-------|--------|
| 1 | Soll die LinkedIn-Integration direkt per API senden oder nur den Text vorbereiten (Copy-Paste)? | Offen — Empfehlung: Phase 1 Copy-Paste mit "In LinkedIn oeffnen", Phase 2 API-Integration. |
| 2 | Wie wird mit Bounces/Delivery-Failures umgegangen? | Offen — Empfehlung: Error-Notification an Katrin, Auto-Retry 1x nach 2h. |
| 3 | Sollen Follow-ups automatisch gesendet werden oder nur als Entwurf vorbereitet? | Offen — Empfehlung: Konfigurierbar per Follow-up (Auto vs. Draft). |
| 4 | Soll Outreach-Tracking DSGVO-konform sein (Tracking-Pixel-Transparenz)? | Offen — Empfehlung: Tracking nur bei Consent. Transparenz-Hinweis im Footer. |
| 5 | Sollen Massen-Outreach-Kampagnen (an mehrere Kontakte) moeglich sein? | Offen — Empfehlung: Phase 2. Phase 1 ist 1:1-Outreach. |

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. KI-Nachrichtengenerierung, Multi-Kanal, A/B-Varianten, Follow-up-Sequenz, Consent-Gating, Tracking. |

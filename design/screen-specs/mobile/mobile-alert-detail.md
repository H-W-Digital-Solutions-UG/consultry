# Mobile Alert Detail — Screen Spec

**Screen-ID:** MOB-04
**PRD-Modul:** 9.1 — Signal Detection & Enrichment, 14.2 — Benachrichtigungssystem
**Journey(s):** J12-S4 (Thomas erhaelt Alert), J3-S1 (Katrin: dringendes Signal)
**Layout-Typ:** Progressive Disclosure (Bottom Sheet)
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Thomas (Managing Partner) — Kritische Alerts mobil |
| **Sekundaer** | Katrin (dringende Signale), Stefan (Projekt-Alerts) |
| **Frequenz** | Thomas: 1-3x/Tag (nur High-Priority). Katrin: 2-5x/Tag. Stefan: 1x/Tag. |
| **Trigger** | Push Notification (High-Priority Alert), Bottom Nav Badge, Copilot Briefing. |
| **Herkunft** | Push Notification (primaer), Notification Center, Copilot. |
| **Ziel** | Kritischen Alert lesen, Kontext verstehen, Sofort-Aktion ausfuehren oder delegieren. |
| **Geraete** | Smartphone (primaer). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Thomas | kritische Alerts sofort per Push sehen | ich keine dringenden Entscheidungen verpasse |
| 2 | Thomas | den Kontext eines Alerts (Kunde, Risiko, Empfehlung) auf einen Blick erfassen | ich in 15 Sekunden verstehe was passiert |
| 3 | Thomas | direkt aus dem Alert eine Aktion starten (anrufen, delegieren, genehmigen) | ich sofort reagieren kann |
| 4 | Katrin | ein Churn-Risk-Alert mit Account-Kontext sehen | ich den Kunden kontaktieren kann |
| 5 | Stefan | Projekt-Risiko-Alerts mit betroffenen Meilensteinen sehen | ich Gegenmaßnahmen einleite |

---

## 3. Layout — Alert Detail (Bottom Sheet)

Alerts werden als Bottom Sheet ueber dem aktuellen Screen angezeigt. Im Unterschied zu normalen Notifications sind Alerts immer High-Priority und enthalten strukturierte Kontext-Daten.

```
┌─────────────────────────────────────────────┐
│  [Aktueller Screen, abgedunkelt]            │
├─────────────────────────────────────────────┤
│          ━━━━━━━━━━━                        │  <- Drag Handle
│                                             │
│  ⚠️ Churn-Risiko                     [X]   │  <- Header (Danger)
│  RetailCorp AG                              │
│  Vor 12 Min. · AI-Erkennung                │
│                                             │
│  ─── Kontext ───                            │
│                                             │
│  Letzter Kontakt: vor 45 Tagen             │
│  Vertragsverlängerung: in 60 Tagen          │
│  Umsatz (letzte 12M): 480.000 EUR          │
│  Ansprechpartner: Dr. Klaus Weber (CFO)     │
│                                             │
│  ─── AI-Analyse ───                         │
│  ┌─ ai-surface ──────────────────────────┐  │
│  │  Risiko-Indikatoren:                  │  │
│  │  • 45 Tage ohne Kontakt (Ø: 14 Tage) │  │
│  │  • LinkedIn: CTO evaluiert Wettbew.   │  │
│  │  • NPS-Score gesunken: 8 → 6          │  │
│  │                                       │  │
│  │  Empfehlung: Sofort Kontakt aufnehmen │  │
│  │  ueber warmen Pfad (Stefan kennt CTO) │  │
│  └───────────────────────────────────────┘  │
│                                             │
├─────────────────────────────────────────────┤
│  [Delegieren]  [Anrufen 📞]  [Termin]      │  <- Footer Actions
└─────────────────────────────────────────────┘
```

- Bottom Sheet Variante: **Expanded** (90%)
- Header mit Risiko-Icon und `semantic-danger` Akzent
- AI-Analyse in `ai-surface` Container mit strukturierten Indikatoren
- 3 Aktions-Buttons im Footer

**Alert-Typen:**

| Alert-Typ | Icon | Akzent-Farbe | Typische Aktionen |
|-----------|------|-------------|-------------------|
| Churn-Risiko | ⚠️ | `semantic-danger` | Anrufen, Delegieren, Termin |
| Deal-Risiko | ⚠️ | `semantic-warning` | Opportunity oeffnen, Katrin kontaktieren |
| Compliance | 🛡️ | `semantic-danger` | Detail (Desktop), Sofort-Massnahme |
| Projekt-Eskalation | 🔴 | `semantic-danger` | Projekt oeffnen, Team kontaktieren |
| Opportunity (Hot) | ⚡ | `brand-primary` | Brief generieren, Matching starten |

---

## 4. Layout — Alert in Notification Center (Kontext)

Alerts erscheinen auch in der Notification-Inbox, dort priorisiert ganz oben:

```
┌─ Notifications ─────────────────────────────┐
│                                             │
│  ─── Kritisch ───                           │
│  ┌─ Alert Card ───────────────────────────┐ │
│  │  ⚠️ Churn-Risiko: RetailCorp AG       │ │
│  │  45 Tage ohne Kontakt · AI-Erkennung   │ │
│  │  Vor 12 Min.                    [→]    │ │
│  └─────────────────────────────────────────┘ │
│                                             │
│  ─── Heute ───                              │
│  [Normale Notifications...]                 │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 5. Datenanforderungen

| Datenpunkt | Quelle | Update-Frequenz |
|-----------|--------|-----------------|
| Alert | API: `GET /alerts/{id}` | Real-time via Push |
| Account-Kontext | API: `GET /accounts/{id}/summary` | On-Demand |
| AI-Analyse | AI-Engine, bei Alert-Erstellung generiert | Snapshot |
| Kontakthistorie | API: `GET /accounts/{id}/contacts` | On-Demand |
| Warm Path | API: `GET /accounts/{id}/warm-paths` | On-Demand |

---

## 6. AI-Interaktion

| Aspekt | Umsetzung |
|--------|-----------|
| **Paradigma** | Invisible AI (AI-Analyse als strukturierter Text-Block) |
| **AI-Analyse** | Risiko-Indikatoren als Bullet-Points. Empfehlung als abschliessender Satz. `ai-surface` Container. |
| **Warm Path Hinweis** | "Stefan kennt CTO" — basierend auf Relationship-Daten. Actionable: Tap oeffnet Kontakt-Option. |
| **Confidence** | Nicht explizit angezeigt — Alert wird nur bei >70% Confidence ausgeloest (DS 6.12). |

---

## 7. Preview Panel Integration

Nicht zutreffend — Alerts zeigen strukturierte Daten, keine Dokument-Vorschauen.

---

## 8. Predictive Intelligence

| Feature | Umsetzung |
|---------|-----------|
| **Alert-Priorisierung** | Alerts nach Umsatz-Impact sortiert (RetailCorp 480K > Startup 50K). |
| **Empfehlung** | AI empfiehlt konkrete naechste Aktion basierend auf Account-Historie und Persona. |
| **Eskalations-Timer** | "Seit 12 Min. offen" — subtiler Dringlichkeits-Hinweis. |

---

## 9. Interaktions-Flows

### Flow 1: Churn-Alert bearbeiten (45s)
1. Thomas erhaelt Push: "⚠️ Churn-Risiko: RetailCorp AG — 45 Tage ohne Kontakt"
2. Tap auf Push → Bottom Sheet (Expanded) mit Alert-Detail
3. Thomas liest AI-Analyse (3 Indikatoren + Empfehlung)
4. Tap "Anrufen 📞" → Telefon-App oeffnet sich mit Nummer von Dr. Weber
5. Nach Telefonat: Alert automatisch als "Bearbeitet" markiert

### Flow 2: Delegieren
1. Thomas oeffnet Alert im Bottom Sheet
2. Tap "Delegieren"
3. Compact Bottom Sheet: Personen-Auswahl (Katrin, Stefan, ...)
4. Optional: Kommentar ("Bitte kurzfristig Termin vereinbaren")
5. Tap "Delegieren"
6. Toast: "An Katrin delegiert."

### Flow 3: Alert aus Notification Center
1. Thomas oeffnet Notification Center (Badge auf Bottom Nav)
2. Kritische Alerts oben, rot markiert
3. Tap auf Alert Card → Bottom Sheet (Expanded)
4. Weiter wie Flow 1/2

---

## 10. Handoff-Punkte

| Von | Zu | Trigger | Daten |
|-----|-----|---------|-------|
| Push Notification | Alert Bottom Sheet | Tap auf Push | `alertId` |
| Notification Center | Alert Bottom Sheet | Tap auf Alert Card | `alertId` |
| Alert Bottom Sheet | Telefon-App | Tap "Anrufen" | Telefonnummer |
| Alert Bottom Sheet | Desktop Account Detail | Tap auf Account-Name | Deep-Link `accountId` |
| Alert Bottom Sheet | Delegieren (Bottom Sheet) | Tap "Delegieren" | `alertId` |
| Copilot Briefing | Alert Bottom Sheet | Tap "Churn-Risiko pruefen" | `alertId` |

---

## 11. Stitch/Figma-Referenz

| Element | Referenz |
|---------|----------|
| Alert Card | Kein Stitch-Aequivalent. Neues Mobile-Pattern. |
| AI-Analyse Container | DS 6.4 AI-Generated Content Pattern, `ai-surface` |
| Alert-Typen Farb-System | DS 3.1 Semantic Colors |

---

## 12. Akzeptanzkriterien

- [ ] Push Notification bei High-Priority Alerts (>70% Confidence)
- [ ] Bottom Sheet zeigt: Alert-Typ, Account, Kontext-Daten, AI-Analyse, Empfehlung
- [ ] AI-Analyse in `ai-surface` Container mit Risiko-Indikatoren
- [ ] 3 Aktions-Buttons im Footer (Alert-Typ-spezifisch)
- [ ] "Anrufen" oeffnet Telefon-App mit korrekter Nummer
- [ ] "Delegieren" zeigt Personen-Auswahl mit optionalem Kommentar
- [ ] Alert als "Bearbeitet" markierbar
- [ ] Alerts im Notification Center oben, rot akzentuiert
- [ ] Verarbeitung in <45s ab Push-Oeffnung
- [ ] Warm Path Hinweis zeigt relevante interne Kontakte

---

## 13. Offene Fragen

| # | Frage | Status |
|---|-------|--------|
| 1 | Soll es einen "Spaeter erinnern" Snooze-Button geben? | Offen |
| 2 | Ab welchem Umsatz-Schwellwert wird ein Churn-Alert als "kritisch" eingestuft? | Offen — PRD 9.1 |
| 3 | Koennen Alerts stummgeschaltet werden (pro Account oder global)? | Offen |

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. 5 Alert-Typen. AI-Analyse. Delegieren-Flow. |

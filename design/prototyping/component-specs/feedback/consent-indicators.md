# Consent & Confidence Indicators

**Komponenten-Familie:** Feedback
**DS-Version:** v1.3
**DS-Referenz:** 6.5
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Consent & Confidence Indicators kennzeichnen KI-generierte Inhalte, zeigen Zuverlaessigkeit an und stellen sicher, dass Nutzer informierte Entscheidungen treffen. Sie sind zentraler Bestandteil der AI-Transparenz-Philosophie (DS 1.3: "AI recommends, humans decide").

**Regel:** Jeder KI-generierte Inhalt MUSS mindestens einen Consent Indicator tragen — entweder einen AI Source Badge oder einen Confidence Badge. Kein AI-Output ohne Kennzeichnung.

**Alle Personas:** Thomas (Managing Partner) sieht Confidence Badges bei Matching-Empfehlungen und Consent Toggles vor Angebotsgenerierung. Katrin (BD-Leiterin) prueft Confidence Scores im Signal-Feed. Stefan/Lisa sehen AI Source Badges auf generierten Briefings. Martina sieht DSGVO-Consent-Status auf Kontakt-Karten.

**Verwendung in Screens:**
- AI Content Cards: Confidence Badge + AI Source Badge im Meta-Header
- Signal Feed: Confidence Badge pro Signal
- Matching: Confidence Badge pro Match-Score-Erklaerung
- Angebots-Erstellung: Consent Toggle vor AI-Generierung
- Engagement Brief: Data Source Indicators fuer Quellen
- Kontakt-Detail: DSGVO Consent Indicator (DS 6.5)

---

## 2. Anatomie

### Confidence Badge

```
┌─ Confidence Badge ─────────────┐
│  ╭──╮                          │
│  │87│  87% Confidence           │  <- Kreisfoermiger Progress Ring + Prozentzahl
│  ╰──╯                          │
└────────────────────────────────┘

Alternativ (kompakt):
┌──────────┐
│  87%     │  <- Nur Prozentzahl als Text-Badge
└──────────┘
```

### AI Source Badge

```
┌─ AI Source Badge (Pill) ───────┐
│  ✨ KI-generiert                │  <- Sparkle-Emoji + Label
└────────────────────────────────┘
```

### Consent Toggle

```
┌─ Consent Toggle ───────────────────────────────────────┐
│                                                        │
│  ✨ Soll ich das Angebot generieren?                    │  <- Frage-Text
│                                                        │
│  Das Angebot wird basierend auf dem Matching-Ergebnis   │  <- Erklaerungstext
│  und den Projektanforderungen erstellt.                 │
│                                                        │
│  [Nein]  [Ja, generieren]                              │  <- Secondary + Primary Buttons
│                                                        │
└────────────────────────────────────────────────────────┘
```

### Data Source Indicator

```
Der Umsatz stieg um 12%¹ im letzten Quartal.            <- Fussnoten-Referenz im Fliesstext
Die Expansion nach Oesterreich² ist geplant.

─ Quellen ──────────────────────────────────────
¹ North Data · Handelsregister · 12.01.2026              <- Nummerierte Quellen-Liste
² Dealfront · Unternehmensmonitor · 28.03.2026
```

---

## 3. Varianten

| Variante | Darstellung | Platzierung | Verwendung |
|----------|------------|-------------|------------|
| **Confidence Badge (Ring)** | Kreisfoermiger Progress Ring + Prozentzahl | Innerhalb AI Content Cards, oben. Neben Match-Scores. | Match-Confidence, Signal-Qualitaet, AI-Zuverlaessigkeit. |
| **Confidence Badge (Text)** | Nur Prozentzahl als kompakte Badge | Inline neben Ueberschriften, in Tabellen-Zellen | Platzsparende Variante fuer dichte Layouts. |
| **AI Source Badge** | Pill mit Sparkle-Emoji und "KI-generiert" Label | Top-right auf AI Content Cards, AI-Surface-Containern | Kennzeichnung aller KI-generierten Inhalte. |
| **Consent Toggle** | Frage + Erklaerung + Ja/Nein Buttons | Vor AI-Aktionen (Inline oder Modal) | Explizite Zustimmung vor AI-Generierungen. |
| **Data Source Indicator** | Hochgestellte Fussnoten-Nummern (Superscript) mit Quellen-Liste | Inline im Text + Quellen-Sektion am Ende | Quellenangaben fuer AI-generierte Aussagen. |

### Confidence-Farben

| Bereich | Farb-Token | Bedeutung |
|---------|-----------|-----------|
| >= 80% | `semantic-success` | Hohe Zuverlaessigkeit. |
| 60-79% | `semantic-warning` | Mittlere Zuverlaessigkeit. Nutzer sollte pruefen. |
| < 60% | `semantic-danger` | Niedrige Zuverlaessigkeit. Deutliche Warnung. |

---

## 4. Props / Konfiguration

### Confidence Badge

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `value` | Number (0-100) | erforderlich | Confidence-Wert in Prozent. |
| `variant` | `ring` / `text` | `ring` | Ring: kreisfoermig mit Progress. Text: kompakte Prozentzahl. |
| `size` | `sm` / `md` | `md` | `sm`: 24px Ring / inline Text. `md`: 32px Ring / Badge Text. |
| `showLabel` | Boolean | `true` | Zeigt "Confidence" Label neben dem Wert. |
| `tooltip` | String | `null` | Erklaerungstext im Tooltip ("Basierend auf 3 Datenquellen"). |

### AI Source Badge

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `label` | String | `"KI-generiert"` | Badge-Text. |
| `timestamp` | DateTime | `null` | Optionaler Generierungs-Zeitstempel. |
| `model` | String | `null` | Optionale Modell-Info (fuer Tooltip: "Generiert von Consultry AI, 31.03.2026"). |

### Consent Toggle

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `question` | String | erforderlich | Frage-Text ("Soll ich das Angebot generieren?"). |
| `description` | String | `null` | Optionaler Erklaerungstext. |
| `confirmLabel` | String | `"Ja"` | Label des Bestaetigen-Buttons. |
| `declineLabel` | String | `"Nein"` | Label des Ablehnen-Buttons. |
| `onConfirm` | Function | erforderlich | Callback bei Zustimmung. |
| `onDecline` | Function | erforderlich | Callback bei Ablehnung. |
| `persistent` | Boolean | `false` | Wenn `true`: Toggle bleibt sichtbar nach Entscheidung (fuer Audit). |

### Data Source Indicator

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `sources` | Array of `{ id: Number, label: String, provider: String, date: String }` | `[]` | Quellen-Daten. Nummerierung automatisch. |
| `inline` | Boolean | `true` | Hochgestellte Referenzen im Text. |
| `expandable` | Boolean | `true` | Quellen-Liste ein-/ausklappbar. |

---

## 5. Design Tokens

### Confidence Badge (Ring)

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Ring-Groesse (md) | 32px Durchmesser | |
| Ring-Groesse (sm) | 24px Durchmesser | |
| Ring-Stroke | 3px | |
| Ring-Track | `neutral-200` | Hintergrund-Ring. |
| Ring-Fill >= 80% | `semantic-success` | |
| Ring-Fill 60-79% | `semantic-warning` | |
| Ring-Fill < 60% | `semantic-danger` | |
| Prozentzahl | `mono-sm`, zentriert im Ring | |
| Label | `body-xs`, `neutral-600` | "Confidence" neben dem Ring. |

### Confidence Badge (Text)

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Container | Pill-Form, `radius-full` | |
| Hintergrund >= 80% | `semantic-success-light` | |
| Hintergrund 60-79% | `semantic-warning-light` | |
| Hintergrund < 60% | `semantic-danger-light` | |
| Text | `mono-sm`, Farbe nach Bereich (`semantic-success` / `semantic-warning` / `semantic-danger`) | |
| Padding | `space-1` vertikal, `space-2` horizontal | |

### AI Source Badge

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Container | Pill-Form, `radius-full` | |
| Hintergrund | `ai-surface` | Warmes Off-White. |
| Border | 1px `ai-border` | |
| Text | `body-xs`, `ai-accent` | |
| Sparkle | Sparkle-Emoji (✨) oder `icon-ai` (Sparkles) `icon-xs` | |
| Position | `position: absolute`, top-right des Eltern-Containers | `space-2` Offset von Ecke. |
| Padding | `space-1` vertikal, `space-2` horizontal | |

### Consent Toggle

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Container | `ai-surface` Hintergrund, `radius-lg`, `border-default` | Visuell als AI-Element erkennbar. |
| Container Padding | `space-4` | |
| Sparkle-Icon | `icon-ai` (Sparkles), `icon-md`, `ai-sparkle` Farbe | Vor der Frage. |
| Frage-Text | `heading-sm`, `neutral-900` | |
| Beschreibung | `body-sm`, `neutral-600` | `space-2` Gap unter der Frage. |
| Buttons-Gap | `space-3` unter der Beschreibung | |
| Confirm-Button | Primary Button (`sm`), `brand-primary` | |
| Decline-Button | Secondary Button (`sm`) | |

### Data Source Indicator

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Superscript-Zahl | `body-xs`, `brand-primary`, hochgestellt | Klickbar: scrollt zur Quelle oder oeffnet Tooltip. |
| Quellen-Separator | `border-subtle`, `space-3` margin-top | Linie ueber der Quellen-Liste. |
| Quellen-Label | `label`, `neutral-600` | "Quellen" als Section-Header. |
| Quellen-Text | `body-xs`, `neutral-500` | Provider + Datum. |
| Quellen-Nummer | `body-xs`, `neutral-700`, Bold | Nummerierung: ¹ ² ³. |

---

## 6. Interaktive States

### Confidence Badge

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Default** | Ring oder Text-Badge mit Farbe nach Bereich. | Statisch. |
| **Hover** | Tooltip erscheint mit Erklaerung. | `duration-fast`. |
| **Score Change** | Ring-Fill animiert zum neuen Wert. | `ktype-score-counter`: Zahlenwert zaehlt hoch/runter, `duration-slow`. |
| **Loading** | Ring-Platzhalter mit Shimmer. | Waehrend Score berechnet wird. |

### AI Source Badge

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Default** | Pill mit "KI-generiert". | Statisch. |
| **Hover** | Tooltip: "Generiert von Consultry AI am DD.MM.YYYY". | `duration-fast`. |

### Consent Toggle

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Pending** | Frage + Buttons sichtbar. Beide Buttons aktiv. | Wartet auf Nutzer-Entscheidung. |
| **Confirmed** | Toggle wird durch "Bestaetigt ✅" Badge ersetzt oder bleibt sichtbar (bei `persistent`). | AI-Aktion wird ausgeloest. |
| **Declined** | Toggle verschwindet oder zeigt "Abgelehnt" Status. | AI-Aktion wird NICHT ausgeloest. |
| **Loading** | Confirm-Button zeigt Spinner nach Klick. | Waehrend AI-Aktion initialisiert wird. |

### Data Source Indicator

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Default** | Hochgestellte Nummern im Text. Quellen-Liste am Ende. | |
| **Hover (Superscript)** | Zahl wird unterstrichen. Tooltip zeigt Quellen-Preview. | `duration-fast`. |
| **Click (Superscript)** | Smooth-Scroll zur Quellen-Liste. Quelle wird kurz hervorgehoben (`interactive-warm`). | `duration-normal`. |
| **Collapsed** | "N Quellen" Link statt voller Liste. | Standard auf Mobile. Klick klappt aus. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Alle Varianten in voller Darstellung. Confidence Ring md. AI Source Badge mit Text. |
| `breakpoint-lg` | Wie xl. |
| `breakpoint-md` | Confidence Ring wechselt zu sm. AI Source Badge bleibt. |
| `breakpoint-sm` | Confidence Badge wechselt zu Text-Variante (kompakt). AI Source Badge zeigt nur "✨ KI" (kurz). Data Source Indicators: Quellen-Liste collapsed hinter "N Quellen" Link. Consent Toggle full-width. |

---

## 8. Voice Input Integration

Consent Toggle kann per Voice beantwortet werden, wenn Voice Input aktiv ist (DS 6.9):
- Copilot stellt Consent-Frage: "Soll ich das Angebot generieren?"
- Nutzer antwortet per Voice: "Ja" / "Nein" / "Generieren" / "Abbrechen"
- Voice-Erkennung mappt auf `onConfirm` / `onDecline` Callbacks

Alle anderen Indicator-Varianten sind Output-Komponenten ohne eigene Voice-Interaktion.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Confidence Badge** | `role="img"`, `aria-label="Confidence: 87 Prozent, hohe Zuverlaessigkeit"`. Farbe NICHT als einziger Indikator — Prozentzahl ist primaer. |
| **AI Source Badge** | `aria-label="KI-generierter Inhalt"`. Rein informativ. |
| **Consent Toggle** | `role="alertdialog"`, `aria-label="KI-Aktion bestaetigen"`. Focus auf den Confirm-Button. Screen Reader liest Frage + Beschreibung vor. |
| **Data Source (Superscript)** | `<a>` mit `aria-label="Quelle 1: North Data, Handelsregister"`. Navigierbar per Tab. |
| **Data Source (Liste)** | `<ol>` mit `aria-label="Quellen"`. Jede Quelle als `<li>`. |
| **Farbblindheit** | Confidence-Farben werden immer durch die Prozentzahl ergaenzt. Nie nur Farbe als Indikator (DS 3.1 Colorblind Accessibility). |
| **Reduced Motion** | `ktype-score-counter` deaktiviert. Werte erscheinen sofort. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| AI Content Card (`ai-interaction/ai-content-card.md`) | Confidence Badge + AI Source Badge sind Bestandteile des Meta-Headers der AI Content Card. |
| Badges & Tags (`primitives/badges-tags.md`) | AI Badge und DSGVO Consent Badge nutzen die Badge-Primitives. |
| Score Displays (`data-display/score-displays.md`) | Confidence Ring teilt visuelle Sprache mit Score Displays. |
| Canvas Toolbar (`ai-interaction/canvas-toolbar.md`) | Canvas zeigt Consent Toggles vor AI-Generierungen. |
| Copilot Panel (`ai-interaction/copilot-panel.md`) | Copilot-Antworten tragen AI Source Badge + Confidence. Consent Toggle bei Aktions-Vorschlaegen. |
| Modals & Dialogs (`feedback/modals-dialogs.md`) | Consent Toggle kann als Inline-Element oder in einem Confirmation Dialog erscheinen. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. 5 Varianten (Confidence Ring, Confidence Text, AI Source Badge, Consent Toggle, Data Source Indicator). Farbcodierung nach Confidence-Bereich. Voice-Consent. |

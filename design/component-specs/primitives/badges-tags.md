# Badges & Tags

**Komponenten-Familie:** Primitives
**DS-Version:** v1.3
**DS-Referenz:** 5.4
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Badges und Tags kommunizieren Status, Kategorien, Skills und Metadaten auf kompaktem Raum. Sie sind nicht-interaktiv (Ausnahme: Skill Tags mit Entfernen-Button und Matched-Variante).

---

## 2. Anatomie

```
┌─────────────────────────┐
│  [Icon]  Label  [×]     │   <- Badge/Tag
└─────────────────────────┘
     ↑       ↑      ↑
  Optional  Required  Optional (removable Tags only)
```

---

## 3. Varianten

| Variante | Background | Text | Border | Icon | Verwendung |
|----------|-----------|------|--------|------|------------|
| **Status — Success** | `semantic-success-light` | `semantic-success` | none | `CheckCircle` opt. | Won, Opted-In, On-Track. |
| **Status — Warning** | `semantic-warning-light` | `semantic-warning` | none | `AlertTriangle` opt. | Pending, At-Risk, Stale. |
| **Status — Danger** | `semantic-danger-light` | `semantic-danger` | none | `XCircle` opt. | Lost, Suppressed, Overdue. |
| **Status — Info** | `semantic-info-light` | `semantic-info` | none | `Info` opt. | New Signal, Update. |
| **Status — Neutral** | `neutral-200` | `neutral-700` | none | — | Default, Inactive. |
| **Skill Tag** | `neutral-100` | `neutral-800` | `neutral-300` 1px | — | Normalisierte Skills. Removable in Editor. |
| **Skill Tag — Matched** | `interactive-warm` | `brand-primary` | `brand-warm` 1px | — | Skills die zur Opportunity passen. |
| **AI Badge** | `ai-surface` | `ai-accent` | `ai-border` 1px | `Sparkles` | "KI-generiert", "Confidence: 87%". |
| **Score Badge** | `score-*` Tokens | `neutral-900` (oder `neutral-0` bei Poor) | none | — | Match-Scores. `mono-sm` Font. |
| **DSGVO Consent** | Per Consent-State | Per State | none | `ShieldCheck` | UNKNOWN, PENDING, OPTED-IN, SUPPRESSED. |
| **Count Badge** | `semantic-danger` | `neutral-0` | none | — | Notification-Count. Min 16px, `radius-full`. |
| **Emoji Badge** | `neutral-100` | `neutral-800` | none | Emoji prefix | Signal-Kategorien: ⚡, 📋, 📈. Gemaess DS 1.10. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | String | `neutral` | Visuelle Variante (siehe Tabelle). |
| `size` | `sm` / `md` / `lg` | `md` | 20/24/28px Hoehe. |
| `label` | String | erforderlich | Badge-Text. |
| `icon` | Lucide Icon / Emoji | varianten-abhaengig | Optionales Icon links. |
| `removable` | Boolean | `false` | Zeigt ×-Button (nur Skill Tags). |
| `onRemove` | Function | `null` | Callback bei Entfernen. |
| `score` | Number | `null` | Score-Wert fuer Score Badge (bestimmt Farbe automatisch). |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Border-radius | `radius-sm` (4px) fuer Badges, `radius-full` fuer Count Badge |
| Font sm | `body-xs` (11px), Padding 2px 6px |
| Font md | `body-sm` (12px), Padding 3px 8px |
| Font lg | `body-md` (14px), Padding 4px 10px |
| Score font | `mono-sm` (Score Badge) |
| Icon size sm | `icon-xs` (14px) |
| Icon size md/lg | `icon-sm` (16px) |
| Remove button | `neutral-500`, hover: `neutral-700`, 12px |

**Score-Farb-Mapping:**

| Score | Token | Text |
|-------|-------|------|
| 80-100 | `score-excellent` | `neutral-900` |
| 60-79 | `score-good` (`brand-warm`) | `neutral-900` |
| 40-59 | `score-moderate` | `neutral-900` |
| 20-39 | `score-weak` | `neutral-900` |
| 0-19 | `score-poor` | `neutral-0` (weiss) |

**DSGVO-Farb-Mapping:**

| State | Background | Text |
|-------|-----------|------|
| UNKNOWN | `neutral-200` | `neutral-700` |
| PENDING | `semantic-warning-light` | `semantic-warning` |
| OPTED-IN | `semantic-success-light` | `semantic-success` |
| SUPPRESSED | `semantic-danger-light` | `semantic-danger` |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Default** | Wie Variante definiert | — |
| **Hover (Removable)** | × wird sichtbar/hervorgehoben | Nur bei Skill Tags mit `removable`. |
| **Hover (Linked)** | Underline + cursor pointer | Wenn Badge als Link fungiert (z.B. Score → Detail). |
| **Remove** | Tag verschwindet mit Fade | `duration-fast`. |

Badges sind primaer nicht-interaktiv. Kein Focus-Ring noetig ausser bei removable Tags und verlinkten Badges.

---

## 7. Responsive Verhalten

Badges skalieren nicht — sie behalten ihre Groesse ueber alle Breakpoints. Bei Platzmangel: Overflow-Handling per Container (truncate oder wrap).

---

## 8. Voice Input Integration

Nicht zutreffend.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | Default: kein spezielles ARIA. Removable: `role="option"` innerhalb einer `role="listbox"`. |
| **Score** | `aria-label="Match-Score: 87 von 100, ausgezeichnet"`. Nie nur Farbe als Informationstraeger. |
| **DSGVO** | `aria-label="DSGVO-Status: Eingewilligt"`. |
| **Removable** | ×-Button: `aria-label="Skill Change Management entfernen"`. |
| **Farbe** | Score Badges: immer mit numerischem Wert + Text-Label in dichten Ansichten. Nie nur Farbe. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Score Displays (`data-display/score-displays.md`) | Score Badge ist die kompakteste Score-Darstellung. Ring/Bar fuer groessere Ansichten. |
| Cards (`data-display/cards.md`) | Badges in Card-Headern fuer Status. |
| Data Tables (`data-display/data-tables.md`) | Badges in Tabellen-Spalten (Status, Score). |
| Consent Indicators (`feedback/consent-indicators.md`) | DSGVO-Badge ist Teil des Consent-Indicator-Patterns. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Emoji Badge hinzugefuegt (DS 1.10). |

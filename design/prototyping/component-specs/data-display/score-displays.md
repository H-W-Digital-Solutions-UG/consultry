# Score Displays

**Komponenten-Familie:** Data Display
**DS-Version:** v1.3
**DS-Referenz:** 5.7
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Score Displays visualisieren numerische Bewertungen (0-100) fuer Match-Scores, Skill-Proficiency, KI-Confidence und Projekt-Performance. Vier Varianten fuer unterschiedliche Kontexte — von kompakten Badges in Tabellen bis zu detaillierten Breakdowns in Matching-Screens.

---

## 2. Anatomie

### Badge
```
┌──────┐
│ 87   │  <- mono-sm, farbcodiert
└──────┘
```

### Ring
```
    ╭───╮
   ╱  87 ╲    <- Kreisfoermiger Fortschritt, Score zentriert
   ╲     ╱
    ╰───╯
```

### Bar
```
  Skills   ■■■■■■■■■░  96/100    <- Horizontaler Balken + Label + Wert
```

### Breakdown
```
  ■■■■■■■■■■ Skills:    96       <- Gestapelte Bars mit Labels
  ■■■■■■■■░░ Verfuegb.: 82
  ■■■■■■■■■░ Branche:   91
  ■■■■■■■■■■ Team-Fit:  95
```

---

## 3. Varianten

| Variante | Groesse | Verwendung |
|----------|---------|------------|
| **Badge** | 20-28px Hoehe | Tabellen, Listen, Card-Header. Kompakteste Form. |
| **Ring** | 48px / 64px Durchmesser | Card-Header, Dashboard-KPIs. Prominent. |
| **Bar** | 4px Hoehe, variable Breite | Skill-Proficiency, einzelne Match-Dimensionen. |
| **Breakdown** | Stack von Bars | Match-Erklaerung: 4 Dimensionen nebeneinander (Staffing Screen). |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `badge` / `ring` / `bar` / `breakdown` | `badge` | Darstellungs-Variante. |
| `value` | Number (0-100) | erforderlich | Score-Wert. |
| `label` | String | `null` | Beschriftung (Bar, Breakdown). |
| `showValue` | Boolean | `true` | Zeigt/verbirgt den numerischen Wert. |
| `size` | `sm` / `md` / `lg` | `md` | Groesse (Badge: 20/24/28px, Ring: 48/64/80px). |
| `animate` | Boolean | `true` | Eingangs-Animation (Bar fuellt sich, Ring dreht). |
| `dimensions` | Array of `{ label, value }` | `null` | Fuer Breakdown: Array der Dimensionen. |
| `explanation` | String | `null` | Tooltip-Text mit Score-Erklaerung. |

---

## 5. Design Tokens

**Farbskala (automatisch nach `value`):**

| Bereich | Token | Text-Farbe |
|---------|-------|-----------|
| 80-100 | `score-excellent` | `neutral-900` |
| 60-79 | `score-good` (`brand-warm`) | `neutral-900` |
| 40-59 | `score-moderate` | `neutral-900` |
| 20-39 | `score-weak` | `neutral-900` |
| 0-19 | `score-poor` | `neutral-0` |

| Element | Token |
|---------|-------|
| Badge font | `mono-sm` (Badge sm/md), `mono-md` (Badge lg) |
| Badge radius | `radius-sm` (4px) |
| Badge padding | Siehe `badges-tags.md` |
| Ring track | `neutral-200` (Hintergrund-Kreis) |
| Ring stroke width | 4px (48px Ring), 5px (64px Ring) |
| Ring font | `mono-md` (48px), `heading-md` (64px) |
| Bar track | `neutral-200` |
| Bar fill | Score-Token (farbcodiert) |
| Bar height | 4px (default), 6px (lg) |
| Bar radius | `radius-full` |
| Bar label | `body-sm`, `neutral-700` |
| Bar value | `mono-sm`, `neutral-900` |
| Breakdown gap | `space-2` (8px) zwischen Bars |

**Animations:**

| Element | Animation |
|---------|-----------|
| Badge | `ktype-score-counter`: Zahl rollt 0→Wert, `duration-slow` (DS 3.6.1) |
| Ring | Stroke-Animation 0°→Wert°, `duration-slow`, `easing-enter` |
| Bar | Width 0%→Wert%, `duration-slow`, `easing-enter` |
| Breakdown | Bars stagger: 100ms Versatz pro Bar |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Default** | Wie Variante, nach Animation | — |
| **Hover (mit Erklaerung)** | Tooltip mit `explanation` | `duration-fast` Fade-in. |
| **Hover (Badge, klickbar)** | Underline + cursor pointer | Wenn Badge als Link fungiert. |
| **Loading** | Shimmer-Placeholder (Badge: Rechteck, Ring: Kreis, Bar: Rechteck) | Vor Daten-Laden. |

---

## 7. Responsive Verhalten

Score Displays skalieren nicht automatisch. Ring-Variante auf Mobile: 48px statt 64px. Breakdown auf Mobile: Bars untereinander (bereits Standard).

---

## 8. Voice Input Integration

Nicht zutreffend.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Score-Ansage** | `aria-label="Match-Score: 87 von 100, ausgezeichnet"`. Text-Bereich: "Ausgezeichnet" (80+), "Gut" (60-79), "Maessig" (40-59), "Schwach" (20-39), "Kritisch" (0-19). |
| **Ring** | `role="progressbar"`, `aria-valuenow="87"`, `aria-valuemin="0"`, `aria-valuemax="100"`. |
| **Bar** | `role="meter"`, `aria-valuenow`, `aria-label` mit Dimension + Wert. |
| **Farbe** | Nie nur Farbe als Informationstraeger. Immer numerischer Wert sichtbar. In dichten Ansichten: Text-Label ("Gut", "Maessig"). |
| **Reduced Motion** | Alle Animationen deaktiviert. Sofortige Anzeige des Endwerts. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Badges (`primitives/badges-tags.md`) | Score Badge ist eine spezialisierte Badge-Variante. |
| Cards (`data-display/cards.md`) | Score Ring/Badge in Card-Headern. |
| Data Tables (`data-display/data-tables.md`) | Score Badge in Tabellen-Score-Spalten. |
| Staffing & Matching (Screen) | Breakdown-Variante fuer Multi-Dimensionen-Score. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. ktype-score-counter Animation. Accessibility-Labels nach Bereich. |

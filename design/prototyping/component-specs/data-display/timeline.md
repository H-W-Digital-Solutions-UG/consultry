# Timeline

**Komponenten-Familie:** Data Display
**DS-Version:** v1.3
**DS-Referenz:** — (neu)
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Die Timeline zeigt chronologische Ereignisse und Aktivitaeten an Entities (Opportunities, Accounts, Projekte, Berater). Sie ist das primaere Pattern fuer Aktivitaets-Feeds, Audit-Trails und Projektverlaeufe.

**Verwendung:**
- Opportunity Activity Log (Slide-Over Tab)
- Account Relationship History
- Projekt-Meilensteine
- Berater-Projekthistorie
- Audit-Trail (Admin, Compliance)

---

## 2. Anatomie

```
┌─ Timeline ───────────────────────────────────────────┐
│                                                      │
│  31. Maerz 2026                                      │  <- Date Group
│                                                      │
│  ●── 14:30  Katrin: Brief generiert                  │
│  │         RetailCorp AG · Engagement Brief           │
│  │         ✨ KI-generiert                            │
│  │                                                   │
│  ●── 11:15  Thomas: Kommentar                        │
│  │         "Kenne den neuen CTO — Warm Path!"         │
│  │         → Opportunity: RetailCorp SAP             │
│  │                                                   │
│  ●── 09:00  System: Signal erkannt                   │
│  │         ⚡ Leadership-Wechsel · Score [87]         │
│  │         Quelle: Dealfront                         │
│  │                                                   │
│                                                      │
│  30. Maerz 2026                                      │  <- Date Group
│                                                      │
│  ●── 16:00  Katrin: Opportunity erstellt             │
│             RetailCorp AG · SAP S/4HANA              │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Dichte | Verwendung |
|----------|--------|------------|
| **Default** | Vollstaendige Events mit Detail | Opportunity Activity, Account History. |
| **Compact** | Einzeilige Events | Berater-Projekthistorie, Audit-Trail. Hohe Dichte. |
| **Milestone** | Events mit Status-Indikatoren (🟢/🟡/🔴) | Projekt-Meilensteine, Vertrags-Phasen. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `default` / `compact` / `milestone` | `default` | Darstellungs-Variante. |
| `events` | Array of Event | erforderlich | Chronologische Events. |
| `groupBy` | `day` / `week` / `month` | `day` | Zeitliche Gruppierung. |
| `maxVisible` | Number | `20` | Initial sichtbare Events. "Aeltere laden" Button. |
| `filterTypes` | Array of String | alle | Filter nach Event-Typ (Comment, AI, System, User). |
| `showFilters` | Boolean | `false` | Filter-Chips ueber Timeline anzeigen. |

**Event Config:**

| Prop | Typ | Beschreibung |
|------|-----|-------------|
| `id` | String | Eindeutige Event-ID. |
| `timestamp` | Date | Zeitstempel. |
| `type` | `comment` / `ai` / `system` / `user` / `milestone` | Event-Typ. |
| `actor` | `{ name, avatar }` | Ausloeser (Person oder System). |
| `title` | String | Event-Titel. |
| `detail` | String | Optionaler Detail-Text. |
| `entity` | `{ type, name, id }` | Verknuepfte Entity (Opportunity, Account, etc.). |
| `status` | `success` / `warning` / `danger` / `neutral` | Fuer Milestone-Variante. |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Timeline line | 2px, `neutral-200`, vertikal |
| Event dot | 8px, `neutral-400` (Standard), `brand-primary` (AI), `semantic-success`/`warning`/`danger` (Milestone) |
| Date group header | `heading-sm`, `neutral-600`, `space-4` margin-top |
| Event time | `mono-sm`, `neutral-500` |
| Event title | `body-md`, `neutral-900` |
| Event detail | `body-sm`, `neutral-600` |
| Event actor | `body-sm`, `neutral-700`, Bold |
| AI badge | Sparkle Icon (`icon-xs`), `brand-primary` |
| Entity link | `body-sm`, `brand-primary`, Underline on hover |
| Compact spacing | `space-2` zwischen Events |
| Default spacing | `space-4` zwischen Events |
| Milestone status | Dot-Farbe + Status-Badge (Compact) |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Default** | Chronologische Liste mit Date Groups | — |
| **Loading** | Shimmer-Placeholder (3-5 Zeilen mit Dots) | Bei initialem Laden. |
| **Empty** | "Noch keine Aktivitaeten." mit Illustration | DS 6.7 + 4.1. |
| **Hover (Entity Link)** | Underline + Cursor Pointer | Klick navigiert zur Entity. |
| **Filtered** | Nur Events des gewaehlten Typs. Filter-Chip aktiv. | "Zeige: Kommentare" / "Zeige: KI-Aktionen". |
| **Load More** | "Aeltere Aktivitaeten laden" Button am Ende | Laedt naechste 20 Events. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| Desktop | Standard-Layout. Timeline-Linie links. |
| Tablet | Wie Desktop. |
| Mobile | Compact-Variante wird Default. Zeitstempel ueber dem Event statt inline. |

---

## 8. Voice Input Integration

Nicht zutreffend.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | `role="feed"`, `aria-label="Aktivitaetsverlauf"`. |
| **Events** | Jedes Event als `role="article"` mit `aria-label`. |
| **Zeitstempel** | `<time datetime="...">` Element. |
| **Navigation** | `Tab` navigiert zwischen Events. Entity-Links fokussierbar. |
| **Date Groups** | `role="heading"`, `aria-level="3"`. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Slide-Over Panel (`composition/slide-over-panel.md`) | Timeline als Tab in Slide-Over (Opportunity Detail). |
| Cards (`data-display/cards.md`) | Events koennen Card-Previews enthalten. |
| Avatars (`primitives/avatars.md`) | Actor-Avatare in Timeline-Events. |
| Badges & Tags (`primitives/badges-tags.md`) | Status-Badges in Milestone-Variante. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. 3 Varianten. Date Grouping. Event-Type-Filter. |

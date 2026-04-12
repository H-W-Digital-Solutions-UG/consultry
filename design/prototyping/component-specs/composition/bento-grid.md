# Bento Grid

**Komponenten-Familie:** Composition
**DS-Version:** v1.3
**DS-Referenz:** 7.1
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Das Bento Grid ist ein adaptives, Kachel-basiertes Layout-System fuer Dashboards und Cockpit-Screens. Es wird **nicht** als globales Layout-Primitiv verwendet — Workflow-Screens nutzen Progressive Disclosure und die 2/3+1/3 Asymmetrie (DS 1.7).

**Einsatz-Entscheidungsbaum:**
- Dashboard / Cockpit → **Bento Grid** (mehrere gleichwertige KPI-Bloecke)
- Workflow (Opportunity, Matching, Editor) → **Progressive Disclosure** (lineare Hierarchie)
- Formular (Profil, Admin) → **Progressive Disclosure** (sequentieller Ablauf)
- Mobile → **Stack** (Bento collapsed zu 1 Spalte)

---

## 2. Anatomie

```
Desktop (4 Spalten):
┌──────┬──────┬──────┬──────┐
│ Cell │ Cell │ Cell │ Cell │   <- Row 1: Standard-Cells
├──────┴──────┤      ├──────┤
│   Span-2    │ Cell │ Cell │   <- Row 2: Doppelt breite Zelle
├──────┬──────┼──────┴──────┤
│ Cell │ Cell │  Span-2     │
└──────┴──────┴─────────────┘

Tablet (2 Spalten):
┌────────┬────────┐
│  Cell  │  Cell  │
├────────┴────────┤
│    Span-Full    │
├────────┬────────┤
│  Cell  │  Cell  │
└────────┴────────┘

Mobile (1 Spalte = Stack):
┌──────────┐
│   Cell   │
├──────────┤
│   Cell   │
├──────────┤
│   Cell   │
└──────────┘
```

---

## 3. Varianten

| Variante | Spalten (Desktop) | Verwendung |
|----------|------------------|------------|
| **Dashboard (4-col)** | 4 | Cockpit (Thomas), Financial Dashboard. |
| **Dashboard (3-col)** | 3 | Practice-Lead Dashboard (Stefan), Discovery Dashboard. |
| **Compact (2-col)** | 2 | Eingebettete Grid-Bereiche in groesseren Screens. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `columns` | Number | `4` | Spaltenanzahl (Desktop). |
| `gap` | Token | `space-4` | Abstand zwischen Zellen. |
| `cells` | Array of Cell Configs | erforderlich | Zellen-Definitionen. |
| `adaptive` | Boolean | `true` | KI-adaptive Reihenfolge (DS 6.11). |
| `persona` | String | aktueller Nutzer | Persona-Default fuer Reihenfolge. |

**Cell Config:**

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `id` | String | erforderlich | Eindeutige Zellen-ID. |
| `span` | `1` / `2` / `full` / `featured` | `1` | Spalten-Span. |
| `component` | Component | erforderlich | Inhalt der Zelle (Card, Chart, etc.). |
| `priority` | Number | `0` | Basis-Sortierung (hoeherer Wert = weiter oben). |
| `collapsible` | Boolean | `false` | Kann in "Mehr anzeigen" collapsed werden. |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Grid gap | `space-4` (16px) |
| Min cell width | 280px |
| Cell border-radius | Per Cell-Component (typisch `radius-lg`) |
| Cell background | Per Cell-Component |
| Span-2 | `grid-column: span 2` |
| Span-full | `grid-column: 1 / -1` |
| Featured | `grid-column: span 2; grid-row: span 2` |

**Responsive Breakpoints:**

| Breakpoint | Spalten | Min Cell Width |
|-----------|---------|---------------|
| `breakpoint-xl`+ | Wie konfiguriert (3-4) | 280px |
| `breakpoint-lg` | Max 3 | 280px |
| `breakpoint-md` | 2 | 280px |
| `breakpoint-sm` | 1 (Stack) | 100% |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Default** | Grid mit Zellen | — |
| **Loading** | Shimmer-Zellen (Rechtecke in Grid-Form) | Bei initialem Laden. |
| **Adaptive Reorder** | Subtile Fade-Transition bei Reihenfolgen-Aenderung | `duration-normal`. Nur bei erstem Laden nach Reorder-Berechnung. |
| **"Mehr anzeigen"** | Collapsed Zellen: nur obere N sichtbar + "N weitere anzeigen" Button | Expand: `duration-normal` Height-Transition. |
| **Empty Cell** | Illustration (DS 4.1) + "Keine Daten" | Per Cell-Component. |

---

## 7. Responsive Verhalten

Detailliert in Abschnitt 5 (Responsive Breakpoints). Zusaetzlich:

- **Span-2 auf 2-col:** Span-2 Zellen werden `span-full`.
- **Span-2 auf 1-col:** Alle Zellen sind volle Breite.
- **Featured auf <4-col:** Wird zu `span-full` (nur breiter, nicht hoeher).
- **Reihenfolge auf Mobile:** `priority`-Wert bestimmt vertikale Reihenfolge im Stack.

---

## 8. Voice Input Integration

Nicht zutreffend — Bento Grid ist ein Layout-Container.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | Container: `role="region"`, `aria-label="Dashboard"`. |
| **Landmark** | Jede Zelle kann ein eigenes `aria-label` haben: "Pipeline-Chart", "KPI Umsatz". |
| **Keyboard** | `Tab` navigiert zwischen Zellen-Inhalten (Buttons, Links). |
| **Reorder** | Bei adaptiver Reihenfolge: `aria-live="polite"` Hinweis: "Dashboard-Anordnung aktualisiert". |
| **Reduced Motion** | Reorder-Animation deaktiviert. Sofortige Darstellung. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Cards (`data-display/cards.md`) | Zellen enthalten typischerweise Cards (Metric, Default, AI). |
| Charts & KPI (`data-display/charts-kpi.md`) | Chart-Widgets als Zellen. |
| Context Rail (`composition/context-rail.md`) | Alternative: 2/3+1/3 Layout statt Grid. |
| AI-Adaptive Layout (`ai-interaction/ai-adaptive-layout.md`) | Steuert Zellen-Reihenfolge. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Adaptive Reihenfolge, responsive Collapse, max 8 Zellen Regel. |

# AI-Adaptive Layout

**Komponenten-Familie:** AI Interaction
**DS-Version:** v1.3
**DS-Referenz:** 6.11
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

AI-Adaptive Layout definiert die Regeln, nach denen sich Layout-Elemente (Bento Grid Zellen, Widget-Reihenfolge, Navigations-Items) automatisch an die Persona, Nutzungshaeufigkeit und den aktuellen Kontext anpassen. Es ist kein visuelles Element, sondern ein Verhaltens-Layer ueber bestehenden Layout-Komponenten.

**Einsatzorte:**
- Cockpit Dashboard (Bento Grid Zellen-Reihenfolge)
- Bottom Navigation Bar (Persona-adaptive Items)
- Copilot Briefing (Empfehlungs-Reihenfolge)
- Notification Center (AI-priorisierte Sortierung)

---

## 2. Anatomie

```
┌─ Adaptive Layout Engine ──────────────────────────────────────────┐
│                                                                    │
│  Input:                                                            │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────────────────┐   │
│  │ Persona      │ │ Frequenz-    │ │ Kontext                  │   │
│  │ Defaults     │ │ Daten        │ │ (Tageszeit, Screen, etc.)│   │
│  └──────┬───────┘ └──────┬───────┘ └──────────┬───────────────┘   │
│         │                │                     │                   │
│         └────────────────┼─────────────────────┘                   │
│                          │                                         │
│                   ┌──────▼───────┐                                 │
│                   │  Sortier-    │                                 │
│                   │  Algorithmus │                                 │
│                   └──────┬───────┘                                 │
│                          │                                         │
│  Output:                 │                                         │
│  ┌──────────────────────▼──────────────────────────────────────┐  │
│  │  Sortierte Widget-Liste mit Priority-Scores                 │  │
│  │  [Pipeline: 95] [Approvals: 88] [Copilot: 72] [Signale: 65]│  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Anwendung | Anpassungs-Umfang |
|----------|-----------|-------------------|
| **Widget Reorder** | Bento Grid Zellen, Dashboard Widgets | Reihenfolge aendern, keine Elemente entfernen. |
| **Navigation Adapt** | Bottom Nav Items, Sidebar Favoriten | Items austauschen basierend auf Persona. |
| **Content Prioritize** | Notification-Sortierung, Copilot-Empfehlungen | Reihenfolge + Gewichtung. |
| **Layout Switch** | 2/3+1/3 vs. 1/3+2/3, Context Rail links/rechts | Container-Anordnung aendern (nur bei extremen Persona-Unterschieden). |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `persona` | String | aktueller Nutzer | Persona-ID fuer Default-Reihenfolge. |
| `items` | Array of `{ id, component, basePriority }` | erforderlich | Layout-Elemente mit Basis-Prioritaet. |
| `frequencyData` | Object | `null` | Nutzungshaeufigkeits-Daten (letzte 14 Tage). |
| `context` | Object | `{}` | Kontext-Daten: `{ timeOfDay, currentScreen, recentActions }`. |
| `learningPeriod` | Number | `14` | Tage bis zur ersten Anpassung (DS 6.11). |
| `maxReorder` | Number | `2` | Maximale Positionen, die ein Element verschoben wird (verhindert verwirrende Spruenge). |
| `onReorder` | Function | `null` | Callback bei Layout-Aenderung (fuer Analytics). |

**Persona-Defaults:**

| Persona | Dashboard-Prioritaeten | Bottom Nav Items |
|---------|----------------------|-----------------|
| Katrin (BD) | Signale > Pipeline > Matching > Copilot | Signale, Pipeline, Matching, Copilot, Mehr |
| Thomas (MP) | Cockpit > Approvals > Pipeline > Berichte | Cockpit, Approvals, Pipeline, Berichte, Mehr |
| Stefan (SC) | Projekte > Wissen > Team > Profil | Projekte, Wissen, Profil, Team |
| Lisa (C) | Profil > Aufgaben > Wissen | Profil, Aufgaben, Wissen |
| Martina (Admin) | Berater > Compliance > Reports | — (nur Desktop) |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Reorder animation | Fade-Transition, `duration-normal` (250ms), `easing-enter` |
| Reorder trigger | Nur bei erstem Laden nach Reorder-Berechnung. Nie waehrend Nutzung. |
| Reorder notification | `aria-live="polite"`: "Dashboard-Anordnung aktualisiert" |
| Learning indicator | Keine visuelle Anzeige. Algorithmus arbeitet unsichtbar. |
| Max displacement | 2 Positionen (konfigurierbar via `maxReorder`) |
| Confidence threshold | 70% (DS 6.12). Reorder nur wenn Confidence >70%. |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Default (Persona)** | Layout nach Persona-Defaults | Erste 14 Tage oder ohne Frequenz-Daten. |
| **Learning** | Keine visuelle Aenderung | System sammelt Nutzungsdaten (14-Tage-Fenster). |
| **Adapted** | Layout angepasst. Subtile Fade-Transition bei erstem Laden. | Nach Learning-Period. Max 2 Positionen Verschiebung. |
| **Manual Override** | Nutzer hat manuell sortiert | Manuelle Sortierung hat Vorrang. AI-Reorder pausiert. |
| **Reset** | Zurueck zu Persona-Defaults | "Anordnung zuruecksetzen" in Einstellungen. |

---

## 7. Responsive Verhalten

Adaptive Layout funktioniert auf allen Breakpoints. Auf Mobile (1-Spalten-Stack) bestimmt die Reihenfolge die vertikale Position. Auf Desktop (Bento Grid) bestimmt die Reihenfolge Grid-Placement.

---

## 8. Voice Input Integration

Nicht zutreffend — AI-Adaptive Layout ist ein unsichtbares Verhaltens-Layer.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Reorder-Ansage** | `aria-live="polite"`: "Dashboard-Anordnung aktualisiert" bei erstmaligem Laden mit neuem Layout. |
| **Reduced Motion** | Reorder-Animation deaktiviert. Sofortige Darstellung. |
| **Manual Control** | Nutzer kann Adaptive Layout in Einstellungen deaktivieren. |
| **Vorhersagbarkeit** | Max 2 Positionen Verschiebung. Layout bleibt wiedererkennbar. |
| **Kein Auto-Reorder** | Nie waehrend aktiver Nutzung. Nur bei Screen-Load. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Bento Grid (`composition/bento-grid.md`) | AI-Adaptive Layout steuert Zellen-Reihenfolge im Bento Grid. |
| Bottom Navigation Bar (`navigation/bottom-navigation-bar.md`) | Persona-adaptive Items. |
| Copilot Panel (`ai-interaction/copilot-panel.md`) | Empfehlungs-Reihenfolge im Briefing. |
| Notification Inbox (`composition/notification-inbox.md`) | AI-priorisierte Notification-Sortierung. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Persona-Defaults. 14-Tage Learning. Max-Displacement-Regel. Confidence Threshold 70%. |

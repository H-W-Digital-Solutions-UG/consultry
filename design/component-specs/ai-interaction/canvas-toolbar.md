# Canvas Toolbar

**Komponenten-Familie:** AI Interaction
**DS-Version:** v1.3
**DS-Referenz:** — (neu, AI Canvas Pattern)
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Die Canvas Toolbar steuert AI-Canvas-Interaktionen: Generierung, Iteration, Varianten-Vergleich, Export und Versionierung. Sie ist die zentrale Kontrollleiste fuer alle Canvas-Screens (Angebots-Canvas, Vertrags-Canvas, Engagement-Brief-Canvas, Knowledge-Canvas, Kapazitaetsplanungs-Canvas).

**Kernprinzip:** Canvas ist iterativ, nicht nur generativ. Die Toolbar ermoeglicht "Bearbeiten → Regenerieren → Vergleichen → Exportieren" als Endlos-Schleife.

---

## 2. Anatomie

```
┌─ Canvas Toolbar ─────────────────────────────────────────────────────────┐
│  [↶ Undo] [↷ Redo]  │  [Variante A ▾]  │  [✨ Regenerieren]  │  [⚙️]  │
│                      │                   │                      │        │
│  Version: 3 von 5    │  [+ Neue Variante]│  [Bearbeiten ✏️]    │ [Export]│
└──────────────────────────────────────────────────────────────────────────┘
```

**Segmente:**
1. **History:** Undo/Redo (Ctrl+Z/Y)
2. **Varianten:** Varianten-Selector + Neue Variante erstellen
3. **AI-Aktionen:** Regenerieren, Abschnitt regenerieren, Prompt anpassen
4. **Utilities:** Bearbeiten-Modus, Export, Einstellungen

---

## 3. Varianten

| Variante | Sichtbare Segmente | Verwendung |
|----------|-------------------|------------|
| **Full** | Alle 4 Segmente | Angebots-Canvas, Vertrags-Canvas. Voller Funktionsumfang. |
| **Compact** | History + AI-Aktionen + Export | Engagement-Brief-Canvas, Knowledge-Canvas. Keine Varianten. |
| **Minimal** | AI-Aktionen nur | Inline AI-Editing in Slide-Over oder Bottom Sheet. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `full` / `compact` / `minimal` | `full` | Toolbar-Umfang. |
| `canUndo` | Boolean | `false` | Undo-Button aktiv. |
| `canRedo` | Boolean | `false` | Redo-Button aktiv. |
| `variants` | Array of `{ id, label }` | `[]` | Verfuegbare Content-Varianten. |
| `activeVariant` | String | erste Variante | Aktive Variante. |
| `versionCount` | Number | `1` | Anzahl generierter Versionen. |
| `currentVersion` | Number | `1` | Aktuelle Version. |
| `isEditing` | Boolean | `false` | Bearbeiten-Modus aktiv. |
| `isGenerating` | Boolean | `false` | AI generiert gerade. |
| `exportFormats` | Array of String | `["pdf", "docx"]` | Verfuegbare Export-Formate. |
| `onRegenerate` | Function | erforderlich | Regenerieren-Handler. |
| `onExport` | Function | erforderlich | Export-Handler. |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Toolbar bg | `neutral-0` |
| Toolbar border | `border-subtle` bottom |
| Toolbar height | 48px |
| Toolbar padding | `space-3` horizontal |
| Toolbar sticky | `position: sticky`, `top: 0`, `z-index: 20` |
| Segment separator | 1px `neutral-200`, vertikal, `space-2` Abstand |
| Undo/Redo buttons | Ghost Button (`sm`), `neutral-500` (inaktiv), `neutral-900` (aktiv) |
| Varianten-Selector | Select (`sm`), `body-sm` |
| Regenerieren button | Secondary Button (`sm`) mit Sparkle Icon |
| Regenerieren (active) | `brand-primary` bg, Spinner, "Wird generiert..." |
| Bearbeiten button | Ghost Button (`sm`), Toggle-State: `brand-primary` bg wenn aktiv |
| Export button | Ghost Button (`sm`) mit Download Icon |
| Version counter | `body-xs`, `neutral-500`, `mono-sm` |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Default** | Toolbar mit allen Aktionen | — |
| **Generating** | "Regenerieren" → Spinner + "Wird generiert...". Andere Buttons disabled. | Canvas zeigt Shimmer oder Streaming (`ktype-ai-reveal`). |
| **Editing** | "Bearbeiten" Toggle aktiv (`brand-primary` bg). Canvas-Content wird editierbar. | Undo/Redo tracken Edit-History. |
| **Comparing** | Varianten-Tabs sichtbar. Split-View oder Tab-Switch. | "Variante A" / "Variante B" als Tabs. |
| **Exporting** | Export-Dropdown: PDF, DOCX, Clipboard | Loading-State im Export-Button waehrend Generierung. |
| **Version History** | Version-Counter klickbar → Dropdown mit allen Versionen | Zeitstempel + "Zurueck zu Version X" Aktion. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| Desktop | Volle Toolbar, horizontal. Alle Segmente sichtbar. |
| Tablet | Compact-Variante: Varianten-Selector als Dropdown, nicht Tabs. |
| Mobile | Minimal-Variante: Nur AI-Aktionen. Export ueber "..." Overflow-Menu. |

---

## 8. Voice Input Integration

Nicht direkt zutreffend. Voice Input fuer Canvas-Prompts erfolgt im Prompt-Feld (separates Input-Element), nicht in der Toolbar selbst.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | `role="toolbar"`, `aria-label="Canvas-Werkzeugleiste"`. |
| **Keyboard** | Arrow Keys navigieren zwischen Toolbar-Elementen. `Tab` ueberspringt gesamte Toolbar. |
| **Shortcuts** | `Ctrl+Z` Undo, `Ctrl+Y` Redo, `Ctrl+Shift+R` Regenerieren. |
| **Screen Reader** | "Regenerieren-Button", "Version 3 von 5", "Bearbeiten-Modus aktiv". |
| **Generating** | `aria-busy="true"` auf Canvas-Container waehrend Generierung. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| AI Content Card (`ai-interaction/ai-content-card.md`) | Canvas-Content besteht aus AI Content Cards. |
| Preview Panel (`data-display/preview-panel.md`) | Export-Vorschau nutzt Preview Panel (Fullscreen). |
| Action Bar (`composition/action-bar.md`) | Canvas Toolbar ist eine spezialisierte Action Bar. |
| Copilot Panel (`ai-interaction/copilot-panel.md`) | Copilot kann Canvas-Regenerierung ausloesen ("Mach den Brief formeller"). |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. 3 Varianten. Varianten-Management. Version History. |

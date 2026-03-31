# Preview Panel

**Komponenten-Familie:** Data Display
**DS-Version:** v1.3
**DS-Referenz:** 6.10
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Das Preview Panel ermoeglicht Inline-Vorschauen von Dokumenten, Dateien und strukturierten Inhalten, ohne die aktuelle Ansicht zu verlassen. Zentral fuer AI-native Workflows: Angebots-Vorschau, CV-Review, Vertrags-Einsicht, Knowledge-Asset-Vorschau.

---

## 2. Anatomie

```
┌─ Preview Panel ──────────────────────────────────────┐
│  [Thumbnail]  Dateiname.pdf              [↗ Oeffnen] │  <- Header
│               Typ: PDF · 2.3 MB · 31.03.2026        │
├──────────────────────────────────────────────────────┤
│                                                      │
│  ┌──────────────────────────────────────────────┐    │
│  │           Dokument-Vorschau                  │    │  <- Content (scrollable)
│  │           (gerendert oder Thumbnail)         │    │
│  └──────────────────────────────────────────────┘    │
│                                                      │
├──────────────────────────────────────────────────────┤
│  [Herunterladen]  [Bearbeiten]  [Vollbild]           │  <- Actions
└──────────────────────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Container | Trigger | Groesse | Verwendung |
|----------|-----------|---------|---------|------------|
| **Inline** | Eingebettet im Card-Body | Automatisch bei Anhang | 200px Hoehe | Canvas-Screens, Dokument-Tabs. |
| **Slide-Over** | Slide-Over Panel (DS 5.11) | Klick auf Dokument-Link | 640px breit | Engagement Brief, CV, Knowledge Asset Detail. |
| **Tooltip** | Floating, `surface-glass` | Hover (Desktop, 500ms Delay) | 320x200px | Schnelle Vorschau in Listen/Tabellen. |
| **Fullscreen** | Modal, max-width 1200px | Klick "Vollbild" | Max 1200px | PDF-Review, Vertrags-Redlining. |
| **Split-View** | 50/50 nebeneinander | CV-Extraktion-Review | Container-Breite / 2 | Admin Panel: PDF links, extrahierte Daten rechts. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `inline` / `slide-over` / `tooltip` / `fullscreen` / `split-view` | `inline` | Darstellungs-Variante. |
| `file` | `{ name, type, size, url, thumbnailUrl }` | erforderlich | Datei-Informationen. |
| `actions` | Array of `{ label, icon, onClick }` | `["download", "edit", "fullscreen"]` | Verfuegbare Aktionen. |
| `height` | Number | 200 (Inline) | Hoehe in px (Inline-Variante). |
| `showHeader` | Boolean | `true` | Zeigt/verbirgt Header mit Dateiinfo. |
| `aiGenerated` | Boolean | `false` | AI Content: `ai-surface` bg, "Neu generieren" Aktion. |

**Unterstuetzte Dateitypen:**

| Typ | Rendering | Interaktion |
|-----|----------|-------------|
| PDF | Page-by-Page gerendert | Seiten-Navigation, Zoom |
| DOCX/PPTX | Thumbnail der ersten Seite | Download, externe Bearbeitung |
| PNG/JPG/SVG | Native Render | Zoom, Pan |
| CSV/Excel | Tabellen-Vorschau (10 Zeilen) | Scroll, Sortierung |
| Markdown | HTML-Render | Scroll |
| AI Content | Live-Render, `ai-surface` bg | Bearbeiten, Neu generieren |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Background (Inline/Slide-Over) | `neutral-0` |
| Background (Tooltip) | `surface-glass` |
| Background (AI Content) | `ai-surface` |
| Border | `border-default`, `radius-lg` |
| Shadow (Inline) | `shadow-sm` |
| Shadow (Tooltip) | `shadow-md` |
| Shadow (Fullscreen) | `shadow-xl` |
| Header | `body-sm` (Dateiname, Bold), `body-xs` (Meta), `neutral-700` |
| Thumbnail | 48x48px, `radius-md`, `neutral-100` fallback-bg |
| Action buttons | Ghost-Button (`sm`), `brand-primary` |
| Scroll area | `overflow-y: auto`, `neutral-100` bg fuer PDF-Viewer |
| Page navigation | `body-xs`, `neutral-600`, Ghost-Buttons |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Loading** | Shimmer (Inline) oder Spinner (Tooltip) | Bei Datei-Laden. |
| **Loaded** | Vorschau sichtbar | — |
| **Error** | "Vorschau nicht verfuegbar. [Herunterladen]" | Fallback auf Download. |
| **Hover (Tooltip)** | Erscheint nach 500ms Delay | `duration-normal` Fade-in. Verschwindet bei Mouse-Leave. |
| **Zoom (Fullscreen)** | Pinch-to-Zoom (Touch), Scroll-Zoom (Desktop) | Smooth, `duration-fast`. |
| **AI Regenerating** | Shimmer + "Wird neu generiert..." | Nach "Neu generieren" Klick. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| Desktop | Alle Varianten verfuegbar. Tooltip bei Hover. |
| Tablet | Tooltip → Tap-to-Preview (Bottom Sheet statt Hover). |
| Mobile | Inline bleibt. Tooltip entfaellt. Fullscreen = nativer Viewer. Split-View → Stack (PDF oben, Daten unten). |

---

## 8. Voice Input Integration

Nicht zutreffend.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Alt-Text** | `aria-label="Vorschau: Angebot-RetailCorp.pdf, 5 Seiten"`. |
| **Keyboard** | Inline: `Tab` fokussiert Actions. Fullscreen: `Escape` schliesst. Page-Navigation: Arrow Keys. |
| **Screen Reader** | Dateityp + Name angesagt. Seiten-Navigation: "Seite 2 von 5". |
| **PDF Content** | PDF-Text selektierbar fuer Screen Reader (wenn Text-Layer vorhanden). |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Slide-Over Panel (`composition/slide-over-panel.md`) | Slide-Over-Variante nutzt Panel als Container. |
| Cards (`data-display/cards.md`) | Inline-Variante in Card-Body eingebettet. |
| Copilot Panel (`ai-interaction/copilot-panel.md`) | Dokument-Vorschauen in Copilot-Antworten. |
| Modals (`feedback/modals-dialogs.md`) | Fullscreen-Variante als Modal. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. 5 Varianten. AI Content Rendering. Split-View fuer CV-Extraktion. |

# Agent 1 — Primitives + Standalone Cards

> **Paste this entire file as a prompt into a new Claude Code session.** The agent will create 8 Figma components using the `use_figma` MCP tool.

---

## Mission

Create **8 marketing primitive/standalone components** on the Components page (`1:4`) of Figma file `ZRTge3ODEnkSDNRrcgBBvK`. Work incrementally: one component per `use_figma` call, validate with `get_screenshot` after each.

**Always load the figma-use skill before calling use_figma.** Pass `skillNames: "figma-use"` on every `use_figma` call.

---

## Boilerplate (every `use_figma` call must start with this)

```javascript
const page = figma.root.children.find(p => p.name === "Components");
await figma.setCurrentPageAsync(page);
```

---

## Token Reference

### Brand Colors (0-1 Figma range)
```
brand-primary:       { r: 0.749, g: 0.325, b: 0.278 }  // #BF5347
brand-primary-light: { r: 0.792, g: 0.443, b: 0.408 }  // #CA7168
brand-primary-dark:  { r: 0.635, g: 0.275, b: 0.235 }  // #A2463C
brand-warm:          { r: 0.910, g: 0.569, b: 0.227 }  // #E8913A
```

### Neutrals (0-1)
```
neutral-900: { r: 0.243, g: 0.235, b: 0.227 }  // #3E3C3A  (primary text)
neutral-700: { r: 0.376, g: 0.365, b: 0.349 }  // #605D59  (secondary text)
neutral-600: { r: 0.482, g: 0.463, b: 0.443 }  // #7B7671  (captions)
neutral-500: { r: 0.710, g: 0.690, b: 0.678 }  // #B5B0AD  (disabled)
neutral-300: { r: 0.867, g: 0.855, b: 0.835 }  // #DDDAD5  (borders)
neutral-200: { r: 0.922, g: 0.914, b: 0.910 }  // #EBE9E8  (card borders)
neutral-100: { r: 0.965, g: 0.965, b: 0.965 }  // #F6F6F6  (page bg)
neutral-0:   { r: 1, g: 1, b: 1 }               // #FFFFFF  (card surface)
```

### Marketing Surfaces (0-1)
```
mktg-surface-light:         { r: 1, g: 0.984, b: 0.976 }      // #FFFBF9
mktg-surface-warm:          { r: 1, g: 0.961, b: 0.941 }      // #FFF5F0
mktg-surface-dark:          { r: 0.173, g: 0.161, b: 0.149 }  // #2C2926
mktg-surface-dark-elevated: { r: 0.227, g: 0.220, b: 0.200 }  // #3A3833
mktg-surface-hero:          { r: 0.118, g: 0.106, b: 0.094 }  // #1E1B18
mktg-text-on-dark:          { r: 0.980, g: 0.980, b: 0.976 }  // #FAFAF9
muted-on-dark:              { r: 0.659, g: 0.635, b: 0.620 }  // ~#A8A29E
border-on-dark:             { r: 0.290, g: 0.278, b: 0.267 }  // ~#4A4744
```

### Semantic Colors (0-1)
```
success: { r: 0.086, g: 0.639, b: 0.290 }  // #16A34A
danger:  { r: 0.863, g: 0.149, b: 0.149 }  // #DC2626
```

### Radius
```
mktg-radius-sm:   8
mktg-radius-md:   12
mktg-radius-lg:   16
mktg-radius-xl:   24
mktg-radius-full: 9999
```

### Shadows (Figma DROP_SHADOW format)
```
mktg-shadow-sm: { type: "DROP_SHADOW", color: {r:0,g:0,b:0,a:0.04}, offset:{x:0,y:2}, radius:8, spread:0 }
mktg-shadow-md: { type: "DROP_SHADOW", color: {r:0,g:0,b:0,a:0.06}, offset:{x:0,y:4}, radius:20, spread:0 }
mktg-shadow-lg: { type: "DROP_SHADOW", color: {r:0,g:0,b:0,a:0.08}, offset:{x:0,y:8}, radius:40, spread:0 }
```

### Font Loading (MUST load before any text op)
```javascript
await figma.loadFontAsync({ family: "Inter", style: "Regular" });     // weight 400
await figma.loadFontAsync({ family: "Inter", style: "Medium" });      // weight 500
await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });   // weight 600 — NOTE SPACE
await figma.loadFontAsync({ family: "Inter", style: "Bold" });        // weight 700
await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });  // weight 800 — NOTE SPACE
```

---

## Component Set Pattern

All multi-variant components MUST use this pattern:

```javascript
// Create variants as individual components
const lightVariant = figma.createComponent();
lightVariant.name = "Theme=Light";
// ... build it ...

const darkVariant = figma.createComponent();
darkVariant.name = "Theme=Dark";
// ... build it ...

// Combine into component set
const componentSet = figma.combineAsVariants([lightVariant, darkVariant], page);
componentSet.name = "Marketing Component Name";
componentSet.layoutMode = "HORIZONTAL";  // CRITICAL — prevents variant overlap
componentSet.itemSpacing = 40;
componentSet.fills = [];  // transparent background on the set itself
```

---

## API Gotchas

- Colors are **0-1 range**, not 0-255
- Fills/strokes are **read-only arrays** — clone with `JSON.parse(JSON.stringify(...))`, modify, reassign
- **`layoutSizingHorizontal = "FILL"` must be set AFTER `parent.appendChild(child)`**
- `clipsContent: false` when effects need to render outside bounds
- **Never use `figma.notify()`** — it throws. Use `return` for output.
- **Always `return` created node IDs** from every script
- One component per `use_figma` call. Validate with `get_screenshot` after each.

---

## Components to Build (in order)

### 1. Marketing Toggle Switch

**Variants:** 2 (Light / Dark)

**Structure (per variant):**
```
Frame "Toggle Switch" (auto-layout horizontal, gap: 12, align: center)
├── Text "Monthly" (15px Medium, active or inactive color)
├── Frame "Track" (48x28, pill radius 9999)
│   └── Ellipse "Knob" (22x22, white, positioned left or right)
└── Text "Annual" (15px Medium, active or inactive color)
```

**Light variant:**
- Track bg: neutral-300 `{r:0.867,g:0.855,b:0.835}`
- Active track: brand-primary `{r:0.749,g:0.325,b:0.278}`
- Knob: white with shadow `{type:"DROP_SHADOW", color:{r:0,g:0,b:0,a:0.12}, offset:{x:0,y:1}, radius:3}`
- Active label: neutral-900 `{r:0.243,g:0.235,b:0.227}`
- Inactive label: neutral-500 `{r:0.710,g:0.690,b:0.678}`

**Dark variant:**
- Track bg: `{r:0.290,g:0.278,b:0.267}` (border-on-dark)
- Active track: brand-primary
- Knob: white with same shadow
- Active label: mktg-text-on-dark `{r:0.980,g:0.980,b:0.976}`
- Inactive label: muted-on-dark `{r:0.659,g:0.635,b:0.620}`

**Show the "active" state** (track filled with brand-primary, knob translated right). The toggle should look like it's in the "Annual" position.

---

### 2. Marketing Tab Bar

**Variants:** 4 (Pill Light / Pill Dark / Underline Light / Underline Dark)

**Structure — Pill variant:**
```
Frame "Tab Bar" (auto-layout horizontal, padding: 4, gap: 4, bg: neutral-100, radius: 9999)
├── Frame "Tab Active" (auto-layout, padding: 8 20, bg: white, radius: 9999, shadow-sm)
│   └── Text "Features" (14px Semi Bold, neutral-900)
├── Frame "Tab" (auto-layout, padding: 8 20, bg: transparent)
│   └── Text "Pricing" (14px Medium, neutral-600)
└── Frame "Tab" (auto-layout, padding: 8 20, bg: transparent)
    └── Text "Resources" (14px Medium, neutral-600)
```

**Structure — Underline variant:**
```
Frame "Tab Bar" (auto-layout horizontal, gap: 0, border-bottom: 1px neutral-200)
├── Frame "Tab Active" (auto-layout, padding: 12 20, border-bottom: 2px brand-primary)
│   └── Text "Features" (14px Semi Bold, brand-primary)
├── Frame "Tab" (auto-layout, padding: 12 20)
│   └── Text "Pricing" (14px Medium, neutral-600)
└── Frame "Tab" (auto-layout, padding: 12 20)
    └── Text "Resources" (14px Medium, neutral-600)
```

**Pill Dark:** wrapper bg = mktg-surface-dark-elevated, active tab bg = mktg-surface-dark, active text = mktg-text-on-dark, inactive text = muted-on-dark.

**Underline Dark:** border-bottom = border-on-dark, active border = brand-warm, active text = brand-warm, inactive text = muted-on-dark.

**Variant naming:** `Style=Pill, Theme=Light` / `Style=Pill, Theme=Dark` / `Style=Underline, Theme=Light` / `Style=Underline, Theme=Dark`

---

### 3. Marketing Carousel Controls

**Variants:** 2 (Light / Dark)

**Structure:**
```
Frame "Carousel Controls" (auto-layout horizontal, gap: 16, align: center)
├── Frame "Prev Button" (40x40, radius: 9999, border: 1px, align: center, justify: center)
│   └── Vector "Arrow Left" (16x16, stroke chevron left)
├── Frame "Dots" (auto-layout horizontal, gap: 8, align: center)
│   ├── Frame "Dot Active" (24x8, radius: 9999, bg: brand-primary)
│   ├── Ellipse "Dot" (8x8, radius: 9999, bg: 30% opacity)
│   ├── Ellipse "Dot" (8x8)
│   └── Ellipse "Dot" (8x8)
└── Frame "Next Button" (40x40, radius: 9999, border: 1px, align: center, justify: center)
    └── Vector "Arrow Right" (16x16, stroke chevron right)
```

**Light variant:**
- Button border: neutral-300 `{r:0.867,g:0.855,b:0.835}`
- Arrow color: neutral-900
- Active dot: brand-primary
- Inactive dot: neutral-300

**Dark variant:**
- Button border: `{r:1,g:1,b:1,a:0.2}` (rgba white 20%)
- Arrow color: white
- Active dot: brand-primary
- Inactive dot: `{r:1,g:1,b:1,a:0.3}` (rgba white 30%)

**Arrow vectors:** Use simple polyline paths. Left: `M 10 4 L 4 8 L 10 12`. Right: `M 6 4 L 12 8 L 6 12`. Stroke 2px, round cap/join.

---

### 4. Marketing Avatar

**Variants:** 3 sizes (sm 28px / md 44px / lg 48px)

**Structure (each):**
```
Frame "Avatar" (WxH, radius: 9999, clip: true, bg: neutral-200)
├── Text "JD" (initials, centered, Inter Semi Bold)
```

- sm (28px): text 11px
- md (44px): text 16px
- lg (48px): text 18px

- Background: neutral-200 `{r:0.922,g:0.914,b:0.910}`
- Text color: neutral-600 `{r:0.482,g:0.463,b:0.443}`
- `clipsContent: true` (for image crop)

**Variant naming:** `Size=sm` / `Size=md` / `Size=lg`

No Light/Dark needed — avatar appearance is self-contained.

---

### 5. Marketing Social Icons

**Variants:** 7 icons (Facebook / Twitter / LinkedIn / Instagram / YouTube / Email / Website)

**Structure (each):**
```
Frame "Social Icon" (32x32, radius: 12, bg: neutral-100, align: center, justify: center)
└── Vector "Icon" (20x20, stroke: neutral-600, strokeWeight: 2)
```

**Colors:**
- Wrapper bg: neutral-100 `{r:0.965,g:0.965,b:0.965}`
- Icon stroke: neutral-500 `{r:0.710,g:0.690,b:0.678}`

**Icon vectors (all 20x20 viewBox, stroke-based, 2px weight, round cap/join):**

Build simplified recognizable icons:
- **Facebook:** Vertical line with hook at top
- **Twitter/X:** The X letter shape (two diagonal crossing lines)
- **LinkedIn:** Lowercase "in" — vertical bar left + vertical bar right with corner
- **Instagram:** Rounded square + inner circle + small dot top-right
- **YouTube:** Rounded rectangle + triangle play button
- **Email:** Rectangle envelope with V-shaped flap
- **Website:** Circle with horizontal line + arc

**Variant naming:** `Icon=Facebook` / `Icon=Twitter` / `Icon=LinkedIn` / etc.

---

### 6. Marketing Divider

**Variants:** 4 (Horizontal Light / Horizontal Dark / Vertical Light / Vertical Dark)

**Horizontal Light:**
- Frame width: 200, height: 1
- Fill: neutral-200 `{r:0.922,g:0.914,b:0.910}`

**Horizontal Dark:**
- Frame width: 200, height: 1
- Fill: `{r:1,g:1,b:1,a:0.1}` (white 10%)

**Vertical Light:**
- Frame width: 1, height: 40
- Fill: neutral-200

**Vertical Dark:**
- Frame width: 1, height: 40
- Fill: `{r:1,g:1,b:1,a:0.1}`

**Variant naming:** `Direction=Horizontal, Theme=Light` / etc.

---

### 7. Marketing Logo Grid

**Variants:** 2 (Light / Dark)

**Structure:**
```
Frame "Logo Grid" (auto-layout vertical, gap: 24, padding: 64 120, width: 1200)
├── Frame "Header" (auto-layout vertical, gap: 16, align: center, width: fill)
│   ├── Text "Eyebrow" (13px Semi Bold, uppercase, letter-spacing 0.06em, brand-primary)
│   └── Text "Trusted by industry leaders" (40px Bold, neutral-900)
├── Frame "Grid" (auto-layout horizontal, gap: 24, wrap, width: fill)
│   ├── Frame "Logo Card" (min-height: 120, padding: 24, border: 1px neutral-200, radius: 16, align: center, justify: center, layoutGrow: 1)
│   │   └── Frame "Logo Placeholder" (80x48, bg: neutral-200, radius: 8)
│   ├── Frame "Logo Card" (...)
│   ├── Frame "Logo Card" (...)
│   ├── Frame "Logo Card" (...)
│   ├── Frame "Logo Card" (...)
│   └── Frame "Logo Card" (...)
```

Show 6 cards in a row (simulating 6-column). Each card is ~170px wide (fill).

**Light variant:**
- Section bg: white
- Card bg: white, border: neutral-200
- Logo placeholder: neutral-200

**Dark variant:**
- Section bg: mktg-surface-dark
- Card bg: mktg-surface-dark-elevated
- Card border: `{r:1,g:1,b:1,a:0.06}`
- Logo placeholder: `{r:0.290,g:0.278,b:0.267}`
- Eyebrow: brand-warm
- Title: mktg-text-on-dark

---

### 8. Marketing Metric Card

**Variants:** 2 (Light / Dark)

**Structure:**
```
Frame "Metric Cards Section" (auto-layout vertical, gap: 64, padding: 128 120, width: 1200)
├── Frame "Header" (auto-layout vertical, gap: 16, align: center, width: fill)
│   ├── Text "METRICS" (13px Semi Bold, uppercase, 0.06em, brand-primary)
│   ├── Text "Results that speak" (40px Bold, neutral-900, -0.02em)
│   └── Text "Subtitle text here" (18px Regular, neutral-600, line-height 1.6)
├── Frame "Cards Row" (auto-layout horizontal, gap: 40, width: fill)
│   ├── Frame "Card" (auto-layout vertical, gap: 12, padding: 40, border: 1px neutral-200, radius: 16, layoutGrow: 1)
│   │   ├── Frame "Value Row" (auto-layout horizontal, gap: 8, align: baseline)
│   │   │   ├── Text "94%" (48px Bold, brand-primary, -0.03em, line-height: 1)
│   │   │   └── Vector "Trend Up" (16x16, success green triangle)
│   │   ├── Text "Client Retention" (16px Semi Bold, neutral-900)
│   │   └── Text "Year over year average" (14px Regular, neutral-600, line-height 1.5)
│   ├── Frame "Card" (...)  // "3.2x" with trend up
│   ├── Frame "Card" (...)  // "48h" no trend
│   └── Frame "Card" (...)  // "12k+" with trend up
```

Show 4 cards in a row.

**Light variant:**
- Section bg: white
- Card bg: white, border: neutral-200, radius: 16
- Value: brand-primary
- Label: neutral-900
- Description: neutral-600

**Dark variant:**
- Section bg: mktg-surface-dark
- Card bg: mktg-surface-dark-elevated
- Card border: `{r:1,g:1,b:1,a:0.1}`
- Value: brand-warm
- Eyebrow: brand-warm
- Label: mktg-text-on-dark
- Description: muted-on-dark
- Title: mktg-text-on-dark

**Trend icon:** Simple filled triangle. Up arrow = success green `{r:0.086,g:0.639,b:0.290}`. Down = danger red `{r:0.863,g:0.149,b:0.149}`. Draw as polygon: Up = `M 0,12 L 8,0 L 16,12 Z` filled.

---

## Build Order

1. Toggle Switch
2. Tab Bar
3. Carousel Controls
4. Avatar
5. Social Icons
6. Divider
7. Logo Grid
8. Metric Card

After each component, run `get_screenshot` on the new node to verify. Return all created node IDs.

---

## Positioning

Place each new component set below the existing components on the page. Use `get_metadata` on `1:4` at the start to find the current bounding box, then position new components starting at Y = max existing Y + 200.

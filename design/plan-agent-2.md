# Agent 2 — Section Components

> **Paste this entire file as a prompt into a new Claude Code session.** The agent will create 5 Figma section components using the `use_figma` MCP tool.

---

## Mission

Create **5 marketing section components** on the Components page (`1:4`) of Figma file `ZRTge3ODEnkSDNRrcgBBvK`. Work incrementally: one component per `use_figma` call, validate with `get_screenshot` after each.

**Always load the figma-use skill before calling use_figma.** Pass `skillNames: "figma-use"` on every `use_figma` call.

**Figma file URL:** https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=1-4

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
neutral-800: { r: 0.286, g: 0.275, b: 0.271 }  // #494645  (headings)
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

### AI Surface (for badges)
```
ai-surface: { r: 1, g: 0.973, b: 0.961 }  // #FFF8F5
```

### Radius
```
mktg-radius-sm:   8
mktg-radius-md:   12
mktg-radius-lg:   16
mktg-radius-xl:   24
mktg-radius-full: 9999
```

### Shadows
```
mktg-shadow-sm:   { type:"DROP_SHADOW", color:{r:0,g:0,b:0,a:0.04}, offset:{x:0,y:2}, radius:8 }
mktg-shadow-md:   { type:"DROP_SHADOW", color:{r:0,g:0,b:0,a:0.06}, offset:{x:0,y:4}, radius:20 }
mktg-shadow-lg:   { type:"DROP_SHADOW", color:{r:0,g:0,b:0,a:0.08}, offset:{x:0,y:8}, radius:40 }
mktg-shadow-glow: { type:"DROP_SHADOW", color:{r:0.749,g:0.325,b:0.278,a:0.12}, offset:{x:0,y:0}, radius:40 }
```

### Font Loading
```javascript
await figma.loadFontAsync({ family: "Inter", style: "Regular" });
await figma.loadFontAsync({ family: "Inter", style: "Medium" });
await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });  // NOTE SPACE
await figma.loadFontAsync({ family: "Inter", style: "Bold" });
await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" }); // NOTE SPACE
```

---

## Component Set Pattern

```javascript
const lightVariant = figma.createComponent();
lightVariant.name = "Theme=Light";

const darkVariant = figma.createComponent();
darkVariant.name = "Theme=Dark";

const componentSet = figma.combineAsVariants([lightVariant, darkVariant], page);
componentSet.name = "Marketing Component Name";
componentSet.layoutMode = "HORIZONTAL";
componentSet.itemSpacing = 40;
componentSet.fills = [];
```

---

## API Gotchas

- Colors are **0-1 range**, not 0-255
- Fills/strokes are **read-only arrays** — clone with `JSON.parse(JSON.stringify(...))`, modify, reassign
- **`layoutSizingHorizontal = "FILL"` must be set AFTER `parent.appendChild(child)`**
- `clipsContent: false` when effects need to render outside bounds
- **Never use `figma.notify()`** — it throws. Use `return` for output.
- **Always `return` created node IDs**
- One component per `use_figma` call. Validate with `get_screenshot` after each.

---

## Components to Build

### 1. Marketing Hero Minimal

**Variants:** 3 (Light / Warm / Dark)

**Variant naming:** `Theme=Light` / `Theme=Warm` / `Theme=Dark`

**Structure (each variant):**
```
Component (auto-layout vertical, align: center, width: 1200, padding: 168 120 96 120)
  Note: top padding = 72 (nav offset) + 96 (mktg-space-2xl)
├── Frame "Content" (auto-layout vertical, gap: 20, align: center, maxWidth: 760, width: fill)
│   ├── Text "EYEBROW TEXT" (13px Semi Bold, uppercase, letter-spacing: 0.78 [0.06em * 13])
│   ├── Text "A simple, powerful\nheadline goes here" (56px Bold, line-height: 1.1 = 62, letter-spacing: -1.4 [-0.025em * 56], text-align: center)
│   └── Text "Supporting subtitle text that provides context and encourages\nthe visitor to explore further." (20px Regular, line-height: 1.6 = 32, text-align: center, maxWidth: 600)
```

**Light variant:**
- Section bg: neutral-0 (white)
- Eyebrow: brand-primary `{r:0.749,g:0.325,b:0.278}`
- Headline: neutral-900 `{r:0.243,g:0.235,b:0.227}`
- Subtitle: neutral-700 `{r:0.376,g:0.365,b:0.349}`

**Warm variant:**
- Section bg: mktg-surface-warm `{r:1,g:0.961,b:0.941}`
- Text colors same as Light

**Dark variant:**
- Section bg: mktg-surface-hero `{r:0.118,g:0.106,b:0.094}`
- Eyebrow: brand-warm `{r:0.910,g:0.569,b:0.227}`
- Headline: mktg-text-on-dark `{r:0.980,g:0.980,b:0.976}`
- Subtitle: muted-on-dark `{r:0.659,g:0.635,b:0.620}`

---

### 2. Marketing Feature Grid Section

**Variants:** 2 (Light / Warm)

**Variant naming:** `Theme=Light` / `Theme=Warm`

**Structure:**
```
Component (auto-layout vertical, gap: 96, padding: 128 120, width: 1200)
├── Frame "Header" (auto-layout vertical, gap: 16, align: center, width: fill)
│   ├── Text "FEATURES" (13px Semi Bold, uppercase, letter-spacing: 0.78, brand-primary)
│   ├── Text "Everything you need to\ngrow your business" (40px Bold, neutral-900, line-height: 1.15 = 46, letter-spacing: -0.8, text-align: center)
│   └── Text "Subtitle describing the feature set" (18px Regular, neutral-600, line-height: 1.6 = 29, text-align: center)
├── Frame "Grid" (auto-layout horizontal, gap: 40, wrap: true, width: fill)
│   ├── Frame "Feature Card" (auto-layout vertical, gap: 16, padding: 40, border: 1px neutral-200, radius: 24, layoutGrow: 1, minWidth: 300)
│   │   ├── Frame "Icon Wrapper" (48x48, radius: 12, bg: mktg-surface-warm, align: center, justify: center)
│   │   │   └── Frame "Icon Placeholder" (24x24, bg: brand-primary, radius: 4)
│   │   ├── Text "Feature Title" (20px Semi Bold, neutral-900, line-height: 1.3 = 26)
│   │   ├── Text "Brief description of this feature and the value it provides to users." (16px Regular, neutral-600, line-height: 1.6 = 26)
│   │   └── Frame "Link" (auto-layout horizontal, gap: 6, align: center)
│   │       ├── Text "Learn more" (15px Semi Bold, brand-primary)
│   │       └── Text "→" (15px Semi Bold, brand-primary)
│   ├── Frame "Feature Card" (...same structure, different title)
│   └── Frame "Feature Card" (...same structure, different title)
```

Show 3 cards in the grid row. Each card should use `layoutGrow: 1` to fill equally.

**Light variant:**
- Section bg: neutral-0 (white)
- Card bg: neutral-0, border: neutral-200
- Icon wrapper bg: mktg-surface-warm

**Warm variant:**
- Section bg: mktg-surface-light `{r:1,g:0.984,b:0.976}`
- Card bg: neutral-0, border: neutral-200
- Icon wrapper bg: mktg-surface-warm

---

### 3. Marketing Trust Badges

**Variants:** 2 (Light / Dark)

**Structure:**
```
Component (auto-layout horizontal, gap: 64, padding: 64 120, align: center, justify: center, width: 1200, wrap: true)
├── Frame "Badge Item" (auto-layout horizontal, gap: 12, padding: 8 16, align: center)
│   ├── Frame "Icon" (40x40, radius: 8, bg: mktg-surface-warm, align: center, justify: center)
│   │   └── Frame "Icon Placeholder" (20x20, radius: 4, bg: brand-primary)
│   ├── Frame "Text" (auto-layout vertical, gap: 2)
│   │   ├── Text "G2 Rating" (13px Regular, neutral-600, letter-spacing: 0.26)
│   │   └── Text "4.8/5.0" (16px Semi Bold, neutral-900)
├── Frame "Divider" (1x40, bg: neutral-200)
├── Frame "Badge Item" (...)
│   └── texts: "Compliance" / "DSGVO Ready"
├── Frame "Divider" (1x40)
├── Frame "Badge Item" (...)
│   └── texts: "Uptime" / "99.9%"
├── Frame "Divider" (1x40)
└── Frame "Badge Item" (...)
    └── texts: "Support" / "< 2h Response"
```

Show 4 badge items with 3 dividers between them.

**Light variant:**
- Section bg: neutral-0 (white)
- Icon bg: mktg-surface-warm
- Label: neutral-600
- Value: neutral-900
- Divider: neutral-200

**Dark variant:**
- Section bg: mktg-surface-dark `{r:0.173,g:0.161,b:0.149}`
- Icon bg: `{r:0.290,g:0.278,b:0.267}` (border-on-dark, slightly lighter)
- Label: muted-on-dark
- Value: mktg-text-on-dark
- Divider: `{r:1,g:1,b:1,a:0.1}`

---

### 4. Marketing Timeline Steps

**Variants:** 2 (Light / Dark)

**Structure:**
```
Component (auto-layout vertical, gap: 96, padding: 128 120, width: 1200)
├── Frame "Header" (auto-layout vertical, gap: 16, align: center, width: fill)
│   ├── Text "ROADMAP" (13px Semi Bold, uppercase, 0.78 letter-spacing, brand-primary)
│   ├── Text "Our journey so far" (48px Bold, neutral-900, line-height: 1.15 = 55, letter-spacing: -0.96, text-align: center)
│   └── Text "Key milestones in building our platform" (18px Regular, neutral-600, line-height: 1.6 = 29, text-align: center)
├── Frame "Timeline" (auto-layout vertical, gap: 0, paddingLeft: 48, width: fill, position: relative)
│   ├── Frame "Step 1" (auto-layout vertical, gap: 8, paddingBottom: 64, width: fill)
│   │   ├── Text "Q1 2024" (13px Semi Bold, uppercase, letter-spacing: 0.65, brand-primary)
│   │   ├── Frame "Badge" (auto-layout, padding: 4 8, radius: 8, bg: ai-surface)
│   │   │   └── Text "LAUNCHED" (11px Bold, uppercase, letter-spacing: 0.55, brand-primary)
│   │   ├── Text "Platform Launch" (20px Semi Bold, neutral-900, line-height: 1.2 = 24)
│   │   └── Text "Released our core consulting management platform with AI-powered matching." (16px Regular, neutral-700, line-height: 1.6 = 26)
│   ├── Frame "Step 2" (...paddingBottom: 64)
│   │   └── texts: "Q2 2024" / "MILESTONE" / "Enterprise Ready" / "Added enterprise..."
│   └── Frame "Step 3" (...paddingBottom: 0, last step)
│       └── texts: "Q3 2024" / "UPCOMING" / "AI Copilot" / "Introducing..."
```

**Timeline visual line:** Add a vertical line on the left side. Create a frame positioned at `x: 15` (centered on the dot position) with width 2px and height spanning the timeline. Fill: neutral-200 (light) or neutral-700 (dark).

**Dot indicators:** For each step, place a 32x32 circle frame at x: -48 (relative to step's paddingLeft).
- Outer: 32x32, radius 9999, border 2px neutral-300, bg white, align center
- Inner: 8x8 (inactive) or 12x12 (active) circle, bg brand-primary
- Active step (first): border-color brand-primary, add glow shadow

Note: Since Figma auto-layout makes absolute positioning tricky, you can represent the timeline structure with a horizontal auto-layout per step:
```
Frame "Step Row" (auto-layout horizontal, gap: 20)
├── Frame "Dot" (32x32, radius: 9999, border: 2px, bg: white, shrink: 0, align: center, justify: center)
│   └── Ellipse "Inner" (8x8, bg: brand-primary)
├── Frame "Content" (auto-layout vertical, gap: 8, layoutGrow: 1)
│   ├── Text "Q1 2024" ...
│   ├── ...
```

And place a vertical line frame behind/between the dots.

**Light variant:**
- Section bg: white
- Dot border: neutral-300, active: brand-primary + glow
- Date: brand-primary
- Badge bg: ai-surface, text: brand-primary
- Title: neutral-900
- Description: neutral-700
- Timeline line: neutral-200

**Dark variant:**
- Section bg: mktg-surface-dark
- Dot bg: mktg-surface-dark, border: neutral-600 `{r:0.482,g:0.463,b:0.443}`, active: brand-warm
- Date: brand-warm
- Badge bg: `{r:0.910,g:0.569,b:0.227,a:0.1}` (brand-warm 10%), text: brand-warm
- Title: mktg-text-on-dark
- Description: muted-on-dark
- Timeline line: neutral-700 `{r:0.376,g:0.365,b:0.349}`

---

### 5. Marketing Feature List Sidebar

**Variants:** 2 (Light / Dark)

**Structure:**
```
Component (auto-layout vertical, gap: 40, padding: 128 120, width: 1200)
├── Frame "Header" (auto-layout vertical, gap: 16, align: center, width: fill)
│   ├── Text "HOW IT WORKS" (13px Semi Bold, uppercase, 0.78 letter-spacing, brand-primary)
│   └── Text "Streamline your workflow\nin three steps" (48px Bold, neutral-900, line-height: 1.15, letter-spacing: -0.96, text-align: center)
├── Frame "Content" (auto-layout horizontal, gap: 96, width: fill, align: start)
│   ├── Frame "Sidebar" (auto-layout vertical, gap: 2, width: 400, shrink: 0)
│   │   ├── Frame "Item Active" (auto-layout vertical, gap: 4, padding: 24 40, borderLeft: 3px brand-primary, radiusTR: 12, radiusBR: 12, bg: mktg-surface-warm)
│   │   │   ├── Text "Smart Matching" (16px Semi Bold, neutral-900)
│   │   │   └── Text "Our AI analyzes your requirements and matches you with the perfect consultants." (14px Regular, neutral-600, line-height: 1.55 = 22)
│   │   ├── Frame "Item" (auto-layout vertical, gap: 4, padding: 24 40, borderLeft: 3px transparent)
│   │   │   ├── Text "Team Assembly" (16px Semi Bold, neutral-900)
│   │   │   └── Text "Build your ideal team with drag-and-drop simplicity." (14px Regular, neutral-600, line-height: 1.55)
│   │   └── Frame "Item" (auto-layout vertical, gap: 4, padding: 24 40, borderLeft: 3px transparent)
│   │       ├── Text "Project Tracking" (16px Semi Bold, neutral-900)
│   │       └── Text "Monitor progress, budgets, and milestones in real time." (14px Regular, neutral-600, line-height: 1.55)
│   └── Frame "Visual" (auto-layout, layoutGrow: 1, height: 450, radius: 24, bg: neutral-100)
│       └── Frame "Image Placeholder" (fill x fill, radius: 16, bg: neutral-200)
```

For the border-left on items: use individual stroke sides. Set `strokes` with `strokeLeftWeight: 3` and `strokeAlign: "INSIDE"`.

Alternatively, simpler approach: add a 3px-wide colored frame as the first child of each item in a horizontal auto-layout:
```
Frame "Item Active" (auto-layout horizontal, gap: 0, padding: 0, radius: 0 12 12 0, bg: mktg-surface-warm, clip: true)
├── Frame "Left Border" (3xFILL, bg: brand-primary, shrink: 0)
├── Frame "Content" (auto-layout vertical, gap: 4, padding: 24 40, layoutGrow: 1)
│   ├── Text "Smart Matching" ...
│   └── Text description ...
```

For inactive items, the left border frame is transparent.

**Light variant:**
- Section bg: white
- Active item: bg mktg-surface-warm, left border brand-primary
- Item title: neutral-900
- Item desc: neutral-600
- Visual bg: neutral-100

**Dark variant:**
- Section bg: mktg-surface-dark
- Active item: bg mktg-surface-dark-elevated, left border brand-warm
- Inactive item hover: bg mktg-surface-dark-elevated
- Item title: mktg-text-on-dark
- Item desc: muted-on-dark
- Visual bg: mktg-surface-dark-elevated

---

## Build Order

1. Hero Minimal (3 variants)
2. Feature Grid Section (2 variants)
3. Trust Badges (2 variants)
4. Timeline Steps (2 variants)
5. Feature List Sidebar (2 variants)

After each component, run `get_screenshot` to verify. Return all node IDs.

---

## Positioning

Place each new component set below existing components on page `1:4`. Use `get_metadata` on `1:4` first to find the bounding box, then start at Y = max existing Y + 200.

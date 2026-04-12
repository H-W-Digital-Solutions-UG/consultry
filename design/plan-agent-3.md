# Agent 3 — Complex Sections + Variant Gaps

> **Paste this entire file as a prompt into a new Claude Code session.** The agent will create 4 new Figma components and add missing variants to 6 existing components using the `use_figma` MCP tool.

---

## Mission

On the Components page (`1:4`) of Figma file `ZRTge3ODEnkSDNRrcgBBvK`:
1. Create **4 new complex marketing section components**
2. Add **missing variants to 6 existing components**

Work incrementally: one component/variant per `use_figma` call, validate with `get_screenshot` after each.

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
brand-warm-light:    { r: 0.941, g: 0.659, b: 0.369 }  // #F0A85E
```

### Brand Gradient
```
Angle: 135 degrees
Stop 1 (0.0): brand-warm     { r: 0.910, g: 0.569, b: 0.227 }  // #E8913A orange
Stop 2 (0.5): gradient-mid   { r: 0.910, g: 0.396, b: 0.353 }  // #E8655A coral
Stop 3 (1.0): gradient-end   { r: 0.608, g: 0.349, b: 0.714 }  // #9B59B6 purple
```

### Neutrals (0-1)
```
neutral-900: { r: 0.243, g: 0.235, b: 0.227 }  // #3E3C3A
neutral-800: { r: 0.286, g: 0.275, b: 0.271 }  // #494645
neutral-700: { r: 0.376, g: 0.365, b: 0.349 }  // #605D59
neutral-600: { r: 0.482, g: 0.463, b: 0.443 }  // #7B7671
neutral-500: { r: 0.710, g: 0.690, b: 0.678 }  // #B5B0AD
neutral-300: { r: 0.867, g: 0.855, b: 0.835 }  // #DDDAD5
neutral-200: { r: 0.922, g: 0.914, b: 0.910 }  // #EBE9E8
neutral-100: { r: 0.965, g: 0.965, b: 0.965 }  // #F6F6F6
neutral-50:  { r: 0.984, g: 0.984, b: 0.980 }  // #FBFBFA
neutral-0:   { r: 1, g: 1, b: 1 }               // #FFFFFF
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

### Radius
```
mktg-radius-sm: 8, mktg-radius-md: 12, mktg-radius-lg: 16, mktg-radius-xl: 24, mktg-radius-full: 9999
```

### Shadows
```
mktg-shadow-sm:   { type:"DROP_SHADOW", color:{r:0,g:0,b:0,a:0.04}, offset:{x:0,y:2}, radius:8 }
mktg-shadow-md:   { type:"DROP_SHADOW", color:{r:0,g:0,b:0,a:0.06}, offset:{x:0,y:4}, radius:20 }
mktg-shadow-lg:   { type:"DROP_SHADOW", color:{r:0,g:0,b:0,a:0.08}, offset:{x:0,y:8}, radius:40 }
mktg-shadow-hero: [
  { type:"DROP_SHADOW", color:{r:0,g:0,b:0,a:0.10}, offset:{x:0,y:8}, radius:24 },
  { type:"DROP_SHADOW", color:{r:0,g:0,b:0,a:0.16}, offset:{x:0,y:32}, radius:80 }
]
mktg-shadow-glow: { type:"DROP_SHADOW", color:{r:0.749,g:0.325,b:0.278,a:0.12}, offset:{x:0,y:0}, radius:40 }
```

### Font Loading
```javascript
await figma.loadFontAsync({ family: "Inter", style: "Regular" });
await figma.loadFontAsync({ family: "Inter", style: "Medium" });
await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });   // NOTE SPACE
await figma.loadFontAsync({ family: "Inter", style: "Bold" });
await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });  // NOTE SPACE
```

For pricing values using monospace:
```javascript
await figma.loadFontAsync({ family: "JetBrains Mono", style: "Bold" });
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
- **Never use `figma.notify()`** — it throws. Use `return`.
- **Always `return` created node IDs**
- One component per `use_figma` call. Validate with `get_screenshot` after each.

### Gradient Fill Pattern
```javascript
// For gradient backgrounds (e.g., Rich CTA Band gradient variant)
frame.fills = [{
  type: "GRADIENT_LINEAR",
  gradientTransform: [[0.7071, -0.7071, 0.8536], [0.7071, 0.7071, -0.1464]],  // 135 degrees
  gradientStops: [
    { position: 0, color: { r: 0.910, g: 0.569, b: 0.227, a: 1 } },    // orange
    { position: 0.5, color: { r: 0.910, g: 0.396, b: 0.353, a: 1 } },  // coral
    { position: 1, color: { r: 0.608, g: 0.349, b: 0.714, a: 1 } },    // purple
  ]
}];
```

### Gradient Text Pattern
```javascript
// For gradient text (headline spans)
textNode.fills = [{
  type: "GRADIENT_LINEAR",
  gradientTransform: [[1, 0, 0], [0, 1, 0]],  // left-to-right
  gradientStops: [
    { position: 0, color: { r: 0.910, g: 0.569, b: 0.227, a: 1 } },
    { position: 0.5, color: { r: 0.910, g: 0.396, b: 0.353, a: 1 } },
    { position: 1, color: { r: 0.753, g: 0.522, b: 0.784, a: 1 } },  // #C084FC lighter purple for text
  ]
}];
```

---

## PART A — New Components (4)

### 1. Marketing Testimonial Carousel

**Variants:** 2 (Light / Dark)

**Structure:**
```
Component (auto-layout vertical, gap: 64, padding: 96 120, width: 1200, align: center)
├── Frame "Header" (auto-layout vertical, gap: 16, align: center, width: fill)
│   ├── Text "TESTIMONIALS" (13px Semi Bold, uppercase, 0.78 letter-spacing)
│   └── Text "What our clients say" (40px Bold, line-height: 1.15 = 46, letter-spacing: -0.8, text-align: center)
├── Frame "Quote Container" (auto-layout vertical, gap: 40, align: center, maxWidth: 900, width: fill)
│   ├── Text """ (80px Regular, opacity: 0.3, serif feel — use Inter Bold at 80px, color: brand-primary with opacity 0.15)
│   ├── Text ""Consultry transformed how we manage our consulting projects. The AI matching alone saved us hundreds of hours."" (28px Regular, line-height: 1.5 = 42, text-align: center, italic — use fontName: {family:"Inter", style:"Regular"} then set textDecoration or just use quotes in text)
│   ├── Frame "Divider" (48x1, bg: see theme)
│   └── Frame "Author Row" (auto-layout horizontal, gap: 16, align: center)
│       ├── Ellipse "Avatar" (48x48, radius: 9999, bg: neutral-200)
│       ├── Frame "Info" (auto-layout vertical, gap: 2)
│       │   ├── Text "Maria Schmidt" (16px Semi Bold)
│       │   └── Text "Head of Consulting, Deloitte" (14px Regular, muted color)
│       └── Frame "Logo Placeholder" (height: 24, width: 80, bg: see theme, radius: 4, opacity: 0.7)
├── Frame "Pagination" (auto-layout horizontal, gap: 16, align: center)
│   ├── Frame "Prev" (40x40, radius: 9999, border: 1px, align: center, justify: center)
│   │   └── Vector "←" (polyline stroke)
│   ├── Frame "Dots" (auto-layout horizontal, gap: 8, align: center)
│   │   ├── Frame "Active Dot" (24x8, radius: 9999, bg: brand-primary)
│   │   ├── Ellipse "Dot" (8x8, radius: 9999, bg: 30% opacity)
│   │   └── Ellipse "Dot" (8x8)
│   └── Frame "Next" (40x40, radius: 9999, border: 1px)
│       └── Vector "→" (polyline stroke)
```

**Light variant:**
- Section bg: white
- Eyebrow: brand-primary
- Headline: neutral-900
- Quote mark: brand-primary at 15% opacity
- Quote text: neutral-800 `{r:0.286,g:0.275,b:0.271}`
- Divider: neutral-200
- Author name: neutral-900
- Author role: neutral-600
- Logo placeholder bg: neutral-200
- Prev/Next border: neutral-300, arrow: neutral-900
- Inactive dot: neutral-300

**Dark variant:**
- Section bg: mktg-surface-dark
- Eyebrow: brand-warm
- Headline: mktg-text-on-dark
- Quote mark: brand-warm at 15% opacity
- Quote text: mktg-text-on-dark
- Divider: `{r:1,g:1,b:1,a:0.2}` (white 20%)
- Author name: mktg-text-on-dark
- Author role: muted-on-dark
- Logo placeholder bg: border-on-dark
- Prev/Next border: `{r:1,g:1,b:1,a:0.2}`, arrow: white
- Inactive dot: `{r:1,g:1,b:1,a:0.3}`

---

### 2. Marketing Rich CTA Band

**Variants:** 3 (Gradient / Dark / Accent)

**Variant naming:** `Theme=Gradient` / `Theme=Dark` / `Theme=Accent`

**Structure:**
```
Component (auto-layout vertical, gap: 32, padding: 128 120, width: 1200, align: center, position: relative, clipsContent: true)
├── Frame "Blob 1" (500x500, radius: 9999, bg: brand-warm at 12% opacity, positioned top-right — use constraints or absolute)
├── Frame "Blob 2" (500x500, radius: 9999, bg: purple at 12% opacity, positioned bottom-left)
├── Frame "Content" (auto-layout vertical, gap: 24, align: center, maxWidth: 720, zIndex above blobs)
│   ├── Text "Ready to transform your\nconsulting workflow?" (52px Bold, white, line-height: 1.1 = 57, letter-spacing: -1.56, text-align: center)
│   │   Note: Optionally make last 2 words gradient text
│   ├── Text "Join leading firms using Consultry to match, manage, and grow." (18px Regular, white at 75% opacity, line-height: 1.6, text-align: center, maxWidth: 520)
│   ├── Frame "Form" (auto-layout horizontal, padding: 5, bg: white, radius: 9999, width: 480, shadow)
│   │   ├── Text "Enter your email" (16px Regular, neutral-500, padding: 14 24, layoutGrow: 1)
│   │   └── Frame "Submit Button" (auto-layout, padding: 14 32, radius: 9999, bg: brand-primary)
│   │       └── Text "Get Started" (14px Semi Bold, white)
│   └── Frame "Trust Row" (auto-layout horizontal, gap: 16, align: center)
│       ├── Text "No credit card required" (13px Regular, white at 60% opacity)
│       ├── Text "·" (white at 60%)
│       ├── Text "14-day free trial" (13px Regular, white at 60%)
│       ├── Text "·" (white at 60%)
│       └── Text "Cancel anytime" (13px Regular, white at 60%)
```

Note: The blobs are decorative. For Figma, create them as large circles with low-opacity fills. Since they overflow, the section `clipsContent` should be `true` to contain them, but the blobs should be within the frame bounds (positioned at edges).

Simpler approach: Skip blob absolute positioning. Instead, just use the background fill and trust the gradient/color to convey the atmosphere. The form + text are the critical elements.

**Gradient variant:**
- Section bg: brand gradient (GRADIENT_LINEAR, 135deg, orange->coral->purple)
- All text: white
- Subtitle: white at 75% opacity ({r:1,g:1,b:1,a:0.75})
- Form bg: white, submit: brand-primary bg + white text
- Trust row: white at 60% opacity

**Dark variant:**
- Section bg: mktg-surface-hero `{r:0.118,g:0.106,b:0.094}`
- All text: white
- Same form styling

**Accent variant:**
- Section bg: brand-primary `{r:0.749,g:0.325,b:0.278}`
- All text: white
- Same form styling

---

### 3. Marketing Pricing Section w/ Toggle

**Variants:** 2 (Light / Dark)

**Structure:**
```
Component (auto-layout vertical, gap: 64, padding: 128 120, width: 1200, align: center)
├── Frame "Header" (auto-layout vertical, gap: 16, align: center, width: fill)
│   ├── Text "PRICING" (13px Semi Bold, uppercase, 0.78 letter-spacing)
│   ├── Text "Simple, transparent pricing" (48px Bold, line-height: 1.15, letter-spacing: -0.96, text-align: center)
│   └── Text "Choose the plan that fits your needs" (18px Regular, line-height: 1.6, text-align: center)
├── Frame "Toggle" (auto-layout horizontal, gap: 16, align: center)
│   ├── Text "Monthly" (15px Medium, active color)
│   ├── Frame "Switch" (48x28, radius: 9999, bg: brand-primary)
│   │   └── Ellipse "Knob" (22x22, white, translate right = annual active)
│   └── Text "Annual" (15px Medium, active color — bold since toggle is on annual)
├── Frame "Cards Row" (auto-layout horizontal, gap: 40, width: fill, align: start)
│   ├── Frame "Starter Card" (auto-layout vertical, gap: 0, padding: 40, border: 1px neutral-200, radius: 24, layoutGrow: 1)
│   │   ├── Text "Starter" (20px Semi Bold)
│   │   ├── Text "For small teams getting started" (15px Regular, muted, marginTop: 8)
│   │   ├── Frame "Price" (auto-layout horizontal, gap: 4, align: baseline, marginTop: 24)
│   │   │   ├── Text "€49" (48px Bold — use JetBrains Mono Bold)
│   │   │   └── Text "/month" (15px Regular, muted)
│   │   ├── Frame "CTA" (auto-layout, padding: 12 28, radius: 9999, border: 1px neutral-300, width: fill, marginTop: 32, align: center)
│   │   │   └── Text "Get Started" (15px Semi Bold, neutral-700)
│   │   ├── Frame "Divider" (width: fill, height: 1, bg: neutral-200, marginTop: 32)
│   │   ├── Text "WHAT'S INCLUDED" (11px Semi Bold, uppercase, 0.55 letter-spacing, muted, marginTop: 28)
│   │   └── Frame "Features" (auto-layout vertical, gap: 10, marginTop: 20)
│   │       ├── Frame "Feature" (auto-layout horizontal, gap: 10, align: center)
│   │       │   ├── Vector "Check" (16x16, stroke brand-primary, 2px weight)
│   │       │   └── Text "Up to 5 consultants" (15px Regular, neutral-700)
│   │       ├── Feature "Basic matching"
│   │       ├── Feature "Email support"
│   │       └── Feature "Standard reports"
│   ├── Frame "Professional Card — Featured" (auto-layout vertical, padding: 40, border: 2px brand-primary, radius: 24, layoutGrow: 1, clipsContent: false)
│   │   Effects: [mktg-shadow-glow]
│   │   ├── Frame "Badge" (auto-layout, padding: 4 12, radius: 9999, bg: brand-primary, position: absolute top: -14, centerX)
│   │   │   └── Text "RECOMMENDED" (11px Bold, uppercase, white, 0.55 letter-spacing)
│   │   ├── Text "Professional" (20px Semi Bold)
│   │   ├── Text "For growing teams" (15px Regular, muted, marginTop: 8)
│   │   ├── Frame "Price" (marginTop: 24)
│   │   │   ├── Text "€99" (48px Bold, JetBrains Mono)
│   │   │   └── Text "/month" (15px Regular, muted)
│   │   ├── Frame "CTA Primary" (padding: 12 28, radius: 9999, bg: brand-primary, width: fill, marginTop: 32, align: center)
│   │   │   └── Text "Get Started" (15px Semi Bold, white)
│   │   ├── Divider + Features label + features same as Starter
│   │   └── Features: "Up to 25 consultants", "AI-powered matching", "Priority support", "Advanced analytics", "Custom workflows"
│   └── Frame "Enterprise Card" (same as Starter structure, layoutGrow: 1)
│       ├── Text "Enterprise" ...
│       ├── Price: "€249" /month
│       ├── CTA: outline style "Contact Sales"
│       └── Features: "Unlimited consultants", "Custom AI models", "Dedicated account manager", "SLA guarantee", "API access", "SSO & SCIM"
```

Note on "Recommended" badge positioning: In Figma auto-layout, absolute positioning is limited. Instead, you can:
1. Add negative top margin on the badge
2. Or place it as first child with `layoutPositioning: "ABSOLUTE"` (available in newer Figma API)

The Professional card should visually stand out: 2px brand-primary border + glow shadow.

**Check icon:** Draw a simple checkmark vector path: `M 3 8 L 7 12 L 13 4` with stroke 2px, round cap/join, color brand-primary.

**Light variant:**
- Section bg: white
- Header text: brand-primary eyebrow, neutral-900 title, neutral-600 subtitle
- Toggle: brand-primary track, neutral-900 active label, neutral-500 inactive
- Card bg: white, border: neutral-200
- Featured card: border brand-primary, glow shadow
- Check icon: brand-primary
- Plan name: neutral-900
- Description: neutral-600
- Price: neutral-900
- Period: neutral-600
- Feature text: neutral-700

**Dark variant:**
- Section bg: mktg-surface-dark
- Header: brand-warm eyebrow, mktg-text-on-dark title, muted-on-dark subtitle
- Toggle: brand-primary track, mktg-text-on-dark active, muted-on-dark inactive
- Card bg: mktg-surface-dark-elevated, border: `{r:1,g:1,b:1,a:0.06}`
- Featured: border brand-primary (same), glow shadow
- Check: brand-warm
- Plan name: mktg-text-on-dark
- Price: mktg-text-on-dark
- Feature text: muted-on-dark
- CTA primary: same (brand-primary bg + white text)
- CTA outline: border `{r:1,g:1,b:1,a:0.2}`, text mktg-text-on-dark

---

### 4. Marketing Marquee Logo Strip

**Variants:** 2 (Light / Dark)

**Structure:**
```
Component (auto-layout vertical, gap: 24, padding: 64 0, width: 1200, align: center, clipsContent: true)
├── Text "Trusted by 500+ consulting firms worldwide" (13px Medium, uppercase, 0.78 letter-spacing, text-align: center, paddingH: 120)
├── Frame "Track" (auto-layout horizontal, gap: 0, width: fill, clipsContent: true)
│   ├── Frame "Logo Set 1" (auto-layout horizontal, gap: 0)
│   │   ├── Frame "Logo Item" (padding: 0 64, height: 32, align: center)
│   │   │   └── Frame "Logo" (80x32, bg: neutral-200, radius: 4, opacity: 0.5)
│   │   ├── Frame "Logo Item" (...)
│   │   ├── Frame "Logo Item" (...)
│   │   ├── Frame "Logo Item" (...)
│   │   ├── Frame "Logo Item" (...)
│   │   └── Frame "Logo Item" (...)
│   └── Frame "Logo Set 2" (duplicate of Set 1 — represents the seamless loop copy)
│       └── (same 6 logos repeated)
```

Show 6 logos per set, 2 sets side by side to represent the continuous scroll. The `clipsContent: true` on Track hides overflow.

**Light variant:**
- Section bg: white (or transparent)
- Label: neutral-600
- Logo placeholders: neutral-200, opacity 0.5

**Dark variant:**
- Section bg: mktg-surface-dark
- Label: muted-on-dark
- Logo placeholders: border-on-dark, opacity 0.4

---

## PART B — Variant Additions to Existing Components (6)

For each existing component, you need to:
1. Find the existing component/component set by node ID
2. Create a new variant component
3. Add it to the component set (or create a new set wrapping the old + new)

### Pattern for adding a variant to an existing standalone component:

```javascript
// If the existing component is standalone (not in a component set):
const existing = figma.getNodeById("NODE_ID");
// Create new variant
const newVariant = figma.createComponent();
newVariant.name = "Theme=Dark";
// Rename existing
existing.name = "Theme=Light";
// Combine
const set = figma.combineAsVariants([existing, newVariant], page);
set.name = "Marketing Component Name";
set.layoutMode = "HORIZONTAL";
set.itemSpacing = 40;
set.fills = [];
```

### Pattern for adding a variant to an existing component set:

```javascript
// If already a component set, find it and add a variant:
const existingSet = figma.getNodeById("SET_NODE_ID");
// Get existing variants
const existingVariants = existingSet.children;
// Create new variant inside the set
const newVariant = figma.createComponent();
newVariant.name = "Theme=Dark"; // or whatever property combo
existingSet.appendChild(newVariant);
// Build out newVariant contents...
```

**IMPORTANT:** Before modifying existing components, first use `get_metadata` on each node ID to understand its current structure. Some may already be component sets, others may be standalone.

---

### 5. Hero Primary (`11:2`) — Check & Label

First, inspect node `11:2` with `get_metadata`. The Hero Primary is dark-first in code (hero bg = #1E1B18). It may already be dark-themed.

- If it's a standalone dark component: rename it `Theme=Dark`, create a Light variant (white bg, dark text, same structure), combine into set.
- If it already has variants: just verify naming is correct.

**Light variant spec (if needed):**
- Section bg: mktg-surface-light `{r:1,g:0.984,b:0.976}`
- Headline: neutral-900 (keep gradient text as-is — gradient works on both)
- Subtitle: neutral-700
- Primary button: brand-primary bg + white text (same)
- Secondary button: transparent, border neutral-300, text neutral-900

---

### 6. Feature Card (`13:3`) — Add Dark Variant

Inspect `13:3` first. It should be a standalone light-themed card.

**Dark variant:**
- Card bg: mktg-surface-dark-elevated `{r:0.227,g:0.220,b:0.200}`
- Border: `{r:1,g:1,b:1,a:0.06}`
- Icon wrapper bg: `{r:0.749,g:0.325,b:0.278,a:0.15}` (brand-primary at 15%)
- Title: mktg-text-on-dark
- Description: muted-on-dark
- Link: brand-warm

---

### 7. CTA Band (`13:9`) — Add Dark + Gradient Variants

Inspect `13:9` first. Likely standalone with gradient bg.

**Dark variant:**
- Section bg: mktg-surface-hero `{r:0.118,g:0.106,b:0.094}`
- Headline: white
- Subtitle: white at 85% opacity `{r:1,g:1,b:1,a:0.85}`
- Button: white bg, brand-primary text

**Gradient variant (if current isn't gradient):**
- Section bg: brand gradient (135deg, orange->coral->purple)
- Headline: white
- Subtitle: white at 85%
- Button: white bg, brand-primary text

Combine all into set: `Theme=Gradient` / `Theme=Dark` / original renamed to appropriate theme.

---

### 8. Footer (`13:17`) — Add Light Variant

Inspect `13:17`. The footer is dark-themed (hero bg).

**Light variant:**
- Section bg: neutral-0 (white) or mktg-surface-light
- Brand description: neutral-700
- Column titles: neutral-600
- Links: neutral-900, hover: brand-primary
- Divider: neutral-200
- Legal text: neutral-600
- Legal links: neutral-600

Copy the dark footer's structure, swap all colors.

---

### 9. Video Embed (`185:3`) — Add Dark Variant

Inspect `185:3`.

**Dark variant:**
- Section bg: mktg-surface-dark `{r:0.173,g:0.161,b:0.149}`
- Eyebrow/title/subtitle: text-on-dark tokens
- Video container styling stays the same (already dark internally)
- Play button: same (white bg, brand-primary icon)

---

### 10. Product UI Preview (`95:47`) — Add Theme Variants

Inspect `95:47`. Currently has type variants (Dashboard/Card-Small) but no theme variants.

**For each existing type variant, create a Light + Dark version:**

**Light variant:**
- Section bg: neutral-0 (white) or mktg-surface-light
- Screenshot container: mktg-surface-dark-elevated bg, 24px radius, 24px padding
- Eyebrow/title/subtitle: dark text tokens

**Dark variant:**
- Section bg: mktg-surface-hero
- Screenshot container: mktg-surface-dark-elevated bg
- Eyebrow: brand-warm, title: text-on-dark, subtitle: muted-on-dark

Variant naming: `Type=Dashboard, Theme=Light` / `Type=Dashboard, Theme=Dark` / etc.

---

## Build Order

1. Testimonial Carousel (new)
2. Rich CTA Band (new)
3. Pricing Section w/ Toggle (new)
4. Marquee Logo Strip (new)
5. Hero Primary — inspect + fix variants
6. Feature Card — add Dark
7. CTA Band — add Dark + Gradient
8. Footer — add Light
9. Video Embed — add Dark
10. Product UI Preview — add Theme variants

After each, `get_screenshot` to verify. Return all node IDs.

---

## Positioning

New components: place below existing components at Y = max existing Y + 200.
Variant additions: modify in-place (add to existing component sets).

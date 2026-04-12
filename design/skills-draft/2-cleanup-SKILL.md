---
name: consultry-figma-webflow-cleanup
description: >
  Execute structural fixes in Consultry's Figma marketing site file to prepare it for clean Webflow
  sync. Renames layers to Consultry conventions, applies auto layout, removes spacer frames,
  standardizes components, fixes gradient usage, and ensures mktg-* token compliance — all through
  the Figma Plugin API. Use this skill when someone says "clean up the Figma for Webflow",
  "fix the naming in Figma", "apply auto layout", "prepare the marketing file for export",
  "run the cleanup from the preflight report", or when they have preflight audit results and want
  to fix issues in Figma before syncing to Webflow. Also trigger when someone shares Consultry
  preflight findings and asks to resolve them, or when marketing tokens or gradient rules need
  correction in the Figma file.
---

# Consultry Marketing — Figma → Webflow Cleanup

## What this skill does

You are executing **structural fixes** in Consultry's Figma marketing design file to improve
Webflow transfer quality. This is the action companion to the preflight audit — where the audit
identifies problems, this skill fixes them.

All changes happen through the Figma Plugin API (`use_figma`). You're modifying the actual
Figma file, so be deliberate, confirm scope, and work in logical batches.

## Figma file references

**Primary Figma file:** Consultry Homepage CMS
- **File key:** `ZRTge3ODEnkSDNRrcgBBvK`
- **Full URL:** https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS

**Key pages / nodes:**
- **Components page:** nodeId `1:4` — all reusable marketing components
- **Marketing page 1:** nodeId `633:9456`
- **Marketing page 2:** nodeId `717:8994`

Always use file key `ZRTge3ODEnkSDNRrcgBBvK` when calling `use_figma` or other MCP tools.

## Design folder

Local reference files at `/consultry/design/`:

- `Consultry-Figma-Design-System-Rules.md` — Full token tables, critical design rules
- `FIGMA-FRAMES-MASTER-PLAN.md` — Master plan for Figma frame structure
- `HANDOVER-FIGMA-COMPONENTS.md` — Component handover spec

## Consultry Marketing DS — Key Values for Cleanup

**Brand colors:** `brand/primary` = `#BF5347`, `brand/warm` = `#E8913A` (accents only, never status)

**Gradient:** `linear-gradient(135deg, #E8913A, #E8655A, #9B59B6)` — hero CTA (1 max), section
dividers (2px, 2 max/page), accent underlines (1 max outside hero). **NEVER** on standard buttons,
card backgrounds, or body text.

**Marketing tokens:**
- Buttons: `mktg-radius/full` = 9999px (pill). All marketing buttons are pills.
- Cards: `mktg-radius/md` = 12px
- Body text: 18px (`Marketing/body-lg`)
- Hero text: 64-80px ExtraBold (`Marketing/display-hero`)
- Font: Inter only. JetBrains Mono for code only.

**Surfaces:** `mktg-surface/light` (`#FFFBF9`), `mktg-surface/warm` (`#FFF5F0`),
`mktg-surface/dark` (`#2C2926`), `mktg-surface/hero` (`#1E1B18`).
Never stack same-surface sections. Text on dark: `#FAFAF9` (not pure white).

**Spacing:** `mktg-space/xl` (64px) between sections, `mktg-space/3xl` (128px) hero padding.

**Icons:** Lucide, 24x24, stroke-based.

## When to use

- After a preflight audit identified issues to fix
- When the user wants to clean up naming, auto layout, or components before Webflow sync
- When specific structural problems need fixing in Figma
- When marketing token misuse needs correction
- When gradient rules are being violated

## Available MCP tools

| Tool | Purpose |
|------|---------|
| `use_figma` | **Primary.** Execute Plugin API code to rename, restructure, apply auto layout, fix tokens. |
| `get_metadata` | Inspect structure before and after changes. |
| `get_design_context` | Deep-inspect nodes before modifying. |
| `get_screenshot` | Before/after visual verification. |
| `get_variable_defs` | Check token usage when fixing styles. |
| `search_design_system` | Find existing Consultry DS components to replace duplicates. |

## Workflow

### Step 1 — Understand what needs fixing

If coming from a preflight audit, parse the issue list into work items.

If coming fresh, ask what needs cleanup. Common categories:
- Layer renaming to Consultry conventions
- Auto layout application
- Spacer frame removal
- Component standardization
- Marketing token correction
- Gradient rule enforcement
- Surface alternation fixes

### Step 2 — Confirm scope and plan

Before changes, tell the user exactly what you'll do:
- Which pages/frames
- What types of changes
- Rough scope

Get confirmation. Figma changes are hard to undo in bulk.

### Step 3 — Execute fixes by category

Work structural changes first, cosmetic last:

#### 3a. Auto layout fixes

Marketing sections use generous spacing. When applying auto layout:
- Section padding: typically `mktg-space/xl` (64px) to `mktg-space/2xl` (96px) vertical
- Hero padding: `mktg-space/3xl` (128px)
- Element gaps: `mktg-space/md` (24px) to `mktg-space/lg` (40px)
- Grid gutters: 32px desktop, 24px tablet, 16px mobile

```javascript
// Apply auto layout to a marketing section
const frame = figma.getNodeById("123:456");
if (frame.type === "FRAME" && frame.layoutMode === "NONE") {
  frame.layoutMode = "VERTICAL";
  frame.itemSpacing = 40;   // mktg-space/lg between components
  frame.paddingTop = 96;    // mktg-space/2xl section padding
  frame.paddingBottom = 96;
  frame.paddingLeft = 64;
  frame.paddingRight = 64;
  frame.primaryAxisAlignItems = "CENTER";
  frame.counterAxisAlignItems = "CENTER";
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "FIXED";
}
```

#### 3b. Spacer frame removal

1. Find empty spacer frames
2. Measure the distance they create
3. Remove the spacer
4. Adjust parent gap or padding to maintain spacing

#### 3c. Layer renaming — Consultry convention

Rename to produce clean Webflow classes:

**Naming rules:**
- Prefix with section context: `hero-`, `features-`, `pricing-`, `testimonials-`, `cta-`, `faq-`, `footer-`, `nav-`
- Lowercase with hyphens
- Name by role: `hero-heading`, `hero-subtext`, `hero-cta-group`
- Buttons: `primary-cta`, `secondary-cta`, `nav-cta`
- Cards: `feature-card`, `pricing-card`, `testimonial-card`
- Forms: `contact-form`, `form-field`, `form-label`, `form-submit`

```javascript
// Batch rename on a page
const page = figma.getNodeById("PAGE_ID");
const renameMap = {
  "Frame 234": "hero-section",
  "Frame 235": "features-grid",
  "Group 12": "feature-card",
  "Rectangle 5": "card-bg",
  "Text 7": "hero-heading",
  "Frame 99": "cta-group",
};
let count = 0;
function renameRecursive(node) {
  if (renameMap[node.name]) {
    node.name = renameMap[node.name];
    count++;
  }
  if ("children" in node) node.children.forEach(renameRecursive);
}
renameRecursive(page);
return `Renamed ${count} layers`;
```

#### 3d. Component standardization

- Replace duplicates with instances of one main component
- Clean variant naming: `State=Default, Size=Large`
- Ensure buttons use 9999px pill radius
- Ensure cards use 12px radius
- Verify Pricing card Recommended variant has 2px brand-primary border
- Verify CTA consistency across pages
- Verify Product Screenshot Containers use `mktg-radius/xl` (24px) and `mktg-shadow/hero`

#### 3e. Marketing token fixes

Correct token misuse:
- Body text should be 18px (not 14px)
- Card radius should be 12px (not 10px)
- Button radius should be 9999px (not 8px)
- Hero heading should be 64-80px ExtraBold (not Bold)
- Surfaces should use `mktg-surface/*` tokens

```javascript
// Find body text at wrong size
const page = figma.getNodeById("PAGE_ID");
const wrongSize = [];
function check(node) {
  if (node.type === "TEXT" && node.fontSize === 14) {
    wrongSize.push({ id: node.id, name: node.name, text: node.characters.substring(0, 40) });
  }
  if ("children" in node) node.children.forEach(check);
}
check(page);
return JSON.stringify(wrongSize, null, 2);
```

#### 3f. Gradient rule enforcement

Find gradient usage and verify it's only in allowed areas:

```javascript
// Find all nodes with gradient fills
const page = figma.getNodeById("PAGE_ID");
const gradientNodes = [];
function check(node) {
  if (node.fills && Array.isArray(node.fills)) {
    const hasGradient = node.fills.some(f =>
      f.type === "GRADIENT_LINEAR" || f.type === "GRADIENT_RADIAL"
    );
    if (hasGradient) {
      gradientNodes.push({
        id: node.id, name: node.name, type: node.type, parent: node.parent?.name
      });
    }
  }
  if ("children" in node) node.children.forEach(check);
}
check(page);
return JSON.stringify(gradientNodes, null, 2);
```

Allowed: hero CTA, section dividers (2px line), accent underlines, logo mark.
Not allowed: standard buttons, card backgrounds, body text → replace with solid `#BF5347`.

#### 3g. Surface alternation verification

Check that sections don't stack with the same background:

```javascript
// Get top-level section backgrounds
const page = figma.getNodeById("PAGE_ID");
const sections = page.children.filter(c => c.type === "FRAME").map(f => {
  let bg = "unknown";
  if (f.fills && f.fills.length > 0 && f.fills[0].type === "SOLID") {
    const c = f.fills[0].color;
    bg = `#${Math.round(c.r*255).toString(16).padStart(2,'0')}${Math.round(c.g*255).toString(16).padStart(2,'0')}${Math.round(c.b*255).toString(16).padStart(2,'0')}`;
  }
  return { name: f.name, bg };
});
return JSON.stringify(sections, null, 2);
```

### Step 4 — Verify changes

After each batch:
1. `get_metadata` to confirm structural changes
2. `get_screenshot` to verify visual integrity
3. Report changes to the user

### Step 5 — Summary report

After all fixes:
- Count of changes by category
- Before/after screenshots of key sections
- Remaining issues needing manual attention
- Recommendation: ready for Webflow sync, or needs more work
- Suggest: run preflight again for verification, or proceed to sync

## Operating principles

- **Confirm before bulk changes.** Tell the user what you'll modify and get approval.
- **Work in batches.** Don't fix everything in one script. Let the user verify between rounds.
- **Preserve visual intent.** Measure existing spacing before restructuring. No visual regressions.
- **Take screenshots.** Before/after checks catch what metadata can't.
- **Name for Webflow.** Think about the CSS class that will be generated.
- **Be honest about limits.** Some things can't be fixed via Plugin API. Say so clearly.
- **Consultry marketing aesthetic:** warm, confident, quiet. Professional restraint, not flashy.

## Common `use_figma` inspection patterns

### Find all frames without auto layout
```javascript
const page = figma.getNodeById("PAGE_ID");
const results = [];
function check(node) {
  if (node.type === "FRAME" && node.layoutMode === "NONE" && node.children.length > 1) {
    results.push({ id: node.id, name: node.name });
  }
  if ("children" in node) node.children.forEach(check);
}
check(page);
return JSON.stringify(results, null, 2);
```

### Find all default-named layers
```javascript
const page = figma.getNodeById("PAGE_ID");
const pattern = /^(Frame|Group|Rectangle|Ellipse|Line|Vector|Text|Image|Component)\s*\d*$/i;
const results = [];
function check(node) {
  if (pattern.test(node.name)) {
    results.push({ id: node.id, name: node.name, type: node.type, parent: node.parent?.name });
  }
  if ("children" in node) node.children.forEach(check);
}
check(page);
return JSON.stringify(results, null, 2);
```

### Find empty spacer frames
```javascript
const page = figma.getNodeById("PAGE_ID");
const results = [];
function check(node) {
  if (node.type === "FRAME" && node.children.length === 0 &&
      (node.width < 20 || node.height < 20 || (node.width <= 1 && node.fills?.length === 0))) {
    results.push({ id: node.id, name: node.name, w: node.width, h: node.height });
  }
  if ("children" in node) node.children.forEach(check);
}
check(page);
return JSON.stringify(results, null, 2);
```

### Find non-Inter font usage
```javascript
const page = figma.getNodeById("PAGE_ID");
const wrong = [];
function check(node) {
  if (node.type === "TEXT" && node.fontName && node.fontName !== figma.mixed) {
    if (node.fontName.family !== "Inter" && node.fontName.family !== "JetBrains Mono") {
      wrong.push({ id: node.id, name: node.name, font: node.fontName.family });
    }
  }
  if ("children" in node) node.children.forEach(check);
}
check(page);
return JSON.stringify(wrong, null, 2);
```

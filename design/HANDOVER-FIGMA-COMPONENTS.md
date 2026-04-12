# Consultry CMS — Figma Marketing Components Handover Prompt

> **Copy-paste this prompt into a new Claude Code session to continue working on the Figma marketing components.**

---

## Prompt

You are continuing work on the **Consultry Homepage CMS** Figma file. Your job is to build, refine, and extend marketing components using the `use_figma` MCP tool (Figma Plugin API).

**Always pass `skillNames: "figma-use"` when calling `use_figma`.**

---

### File & Page References

| Item | Value |
|------|-------|
| **Figma file key** | `ZRTge3ODEnkSDNRrcgBBvK` |
| **Components page** | Node `1:4` — all marketing components live here |
| **Pages in file** | Tokens (`0:1`), Typography (`1:2`), Spacing & Layout (`1:3`), **Components (`1:4`)**, Templates (`1:5`), Homepage (`37:2`), Dovetail Homepage (`60:2`) |

---

### Design System Authority

Read these files before making design decisions:

| File | Purpose |
|------|---------|
| `design/Consultry-Figma-Design-System-Rules.md` | **Primary.** Unified Figma tokens, component architecture, rules for both App and Marketing modes |
| `design/Consultry-Marketing-Design-System-v1.0.md` | Marketing-specific tokens, component specs, page templates |
| `design/Consultry-Design-System-v1.3.md` | Canonical app design system (inherited tokens) |

---

### Core Design Tokens (Quick Reference)

**Brand Colors (0-1 Figma range):**
```
brand-primary:       #BF5347  → { r: 0.749, g: 0.325, b: 0.278 }
brand-primary-dark:  #A2463C  → { r: 0.635, g: 0.275, b: 0.235 }
brand-warm:          #E8913A  → { r: 0.910, g: 0.569, b: 0.227 }
brand-gradient-start:#E8913A  → { r: 0.910, g: 0.569, b: 0.227 }  (orange)
brand-gradient-mid:  #E8655A  → { r: 0.910, g: 0.396, b: 0.353 }  (coral)
brand-gradient-end:  #9B59B6  → { r: 0.608, g: 0.349, b: 0.714 }  (purple)
```

**Neutrals:**
```
neutral-900: #3E3C3A → { r: 0.243, g: 0.235, b: 0.227 }  (primary text)
neutral-700: #605D59 → { r: 0.376, g: 0.365, b: 0.349 }  (secondary text)
neutral-600: #7B7671 → { r: 0.482, g: 0.463, b: 0.443 }  (captions)
neutral-300: #DDDAD5 → { r: 0.867, g: 0.855, b: 0.835 }  (borders)
neutral-200: #EBE9E8 → { r: 0.922, g: 0.914, b: 0.910 }  (card borders)
neutral-0:   #FFFFFF → { r: 1, g: 1, b: 1 }                (card surface)
```

**Marketing Surfaces:**
```
mktg-surface-light:         #FFFBF9 → { r: 1, g: 0.984, b: 0.976 }
mktg-surface-warm:          #FFF5F0 → { r: 1, g: 0.961, b: 0.941 }
mktg-surface-dark:          #2C2926 → { r: 0.173, g: 0.161, b: 0.149 }
mktg-surface-dark-elevated: #3A3833 → { r: 0.227, g: 0.220, b: 0.200 }
mktg-surface-hero:          #1E1B18 → { r: 0.118, g: 0.106, b: 0.094 }
mktg-text-on-dark:          #FAFAF9 → { r: 0.980, g: 0.980, b: 0.976 }
muted-on-dark:              ~#A8A29E → { r: 0.659, g: 0.635, b: 0.620 }
border-on-dark:             ~#4A4744 → { r: 0.290, g: 0.278, b: 0.267 }
```

**Radius:** `mktg-radius-sm` 8, `mktg-radius-md` 12, `mktg-radius-lg` 16, `mktg-radius-full` 9999 (pill)
**Shadows:** `mktg-shadow-sm` 0 2px 8px rgba(0,0,0,0.04), `mktg-shadow-md` 0 4px 20px rgba(0,0,0,0.06)
**Font:** Inter only. Load with space in style name: `"Semi Bold"`, `"Extra Bold"`, not `"SemiBold"`
**Buttons:** ALL pill-shaped (radius 9999). Primary = brand-primary bg + white text. Ghost = transparent + brand-primary text.

---

### Existing Components on `1:4` (31 total)

**Primitives:**
| Component | ID | Variants |
|-----------|----|----------|
| Marketing Button | `8:38` | 12 (Primary/Gradient/Secondary/Ghost x sm/md/lg) |
| Marketing Badge | `169:19` | 8 (Category/New/Enterprise/Success/Info/Danger/Recommended/Neutral) |
| Marketing Breadcrumb | `191:9` | 2 (Light/Dark) |
| Marketing Tooltip | `172:19` | 4 (Top/Bottom/Left/Right) |

**Section-Level:**
| Component | ID | Variants |
|-----------|----|----------|
| Marketing Hero / Primary | `11:2` | 1 (standalone) |
| Marketing Section Header | `88:22` | 4 (Centered/Left x Light/Dark) |
| Marketing Nav | `116:40` | 2 (Light/Dark) |
| Marketing CTA Band | `13:9` | 1 (standalone) |
| Marketing Footer | `13:17` | 1 (standalone) |
| Marketing Logo Strip | `92:24` | 2 (Light/Dark) |
| Marketing Announcement Bar | `183:18` | 3 (Warm/Dark/Gradient) |
| Marketing Cookie Banner | `182:21` | 2 (Light/Dark) |

**Cards:**
| Component | ID | Variants |
|-----------|----|----------|
| Marketing Feature Card | `13:3` | 1 (standalone) |
| Marketing Testimonial Card | `89:30` | 2 (Light/Dark) |
| Marketing Customer Story Card | `96:20` | 2 (Light/Dark) |
| Marketing Solution Card | `176:15` | 2 (Light/Dark) |
| Marketing Blog Card | `175:23` | 6 (Blog/Webinar/Resource x Light/Dark) |
| Marketing Team Card | `199:8` | 2 (Light/Dark) |
| Marketing Pricing Card | `179:73` | 4 (Standard/Recommended x Light/Dark) |

**Content / Data:**
| Component | ID | Variants |
|-----------|----|----------|
| Marketing Stat Counter | `90:14` | 2 (Light/Dark) |
| Marketing Integration Tile | `91:12` | 2 (Light/Dark) |
| Marketing Comparison Table | `199:66` | 2 (Light/Dark) |
| Marketing FAQ Item | `180:11` | 4 (Collapsed/Expanded x Light/Dark) |
| Marketing Gradient Text Light | `97:12` | 1 (standalone) |

**Showcase / Media:**
| Component | ID | Variants |
|-----------|----|----------|
| Marketing Feature Showcase Row | `93:34` | 4 (Image-Left/Right x Light/Dark) |
| Marketing Feature Showcase Step | `143:2` | 8 (Step 01-04 x Light/Dark) |
| Marketing Product UI Preview | `95:47` | 2 (Dashboard/Card-Small) |
| Marketing Video Embed | `185:3` | 1 (standalone) |

**Forms / Capture:**
| Component | ID | Variants |
|-----------|----|----------|
| Marketing Contact Form | `193:33` | 2 (Light/Dark) |
| Marketing Newsletter Capture | `174:16` | 4 (Inline/Stacked x Light/Dark) |

**Composite Sections:**
| Component | ID | Variants |
|-----------|----|----------|
| Marketing Enterprise Pricing Section | `230:93` | 2 (Light/Dark) — Contains Starter + Enterprise cards, gradient border on Enterprise card with brand-gradient (orange->coral->purple), 3-layer glow effect |

---

### Key Design Decisions Already Made

1. **All multi-variant components use `combineAsVariants()`** — component sets with proper variant naming (`Theme=Light`, `Theme=Dark`, etc.)
2. **Dark variants** exist for all cards and section components. Dark uses `mktg-surface-dark` (#2C2926) or `mktg-surface-hero` (#1E1B18) backgrounds with `mktg-text-on-dark` (#FAFAF9) text.
3. **Enterprise Pricing card** uses a gradient border (2.5px stroke, `GRADIENT_LINEAR`) with the brand-gradient (orange->coral->purple). Light = orange top to purple bottom; Dark = reversed (purple top to orange bottom). The card has a 3-layer `DROP_SHADOW` glow effect (orange + purple + coral layers) and `clipsContent: false` on both the card and its parent row.
4. **Feature list bullets** use 16x16 checkmark vector icons (stroke-based, 2px weight, round caps) — brand-primary color for Starter, brand-warm for Enterprise.
5. **Card padding** is 48px on pricing cards. Text section spacers follow: Icon->Title 24px, Subtitle->Desc 14px, Desc->CTA 32px, CTA->Divider 32px, Divider->Label 28px, Label->Features 20px, between features 10px.
6. **Enterprise card width** is ~2/3 of the cards row (672px), Starter is ~1/3 (336px). Starter uses `layoutSizingHorizontal: "FIXED"`, Enterprise uses `"FILL"`.
7. **Component sets must have `layoutMode: "HORIZONTAL"`** with `itemSpacing: 40` to avoid variant overlap. Several component sets had `layoutMode: "NONE"` which caused dark variants to stack on top of light ones — this was fixed.

---

### Critical Figma Plugin API Gotchas

- **Colors are 0-1 range**, not 0-255
- **Fills/strokes are read-only arrays** — clone with `JSON.parse(JSON.stringify(...))`, modify, reassign
- **Font MUST be loaded** before any text operation: `await figma.loadFontAsync({family: "Inter", style: "Semi Bold"})` — note space in "Semi Bold"
- **Page resets** between `use_figma` calls — always call `await figma.setCurrentPageAsync(page)` at the start
- **`layoutSizingHorizontal/Vertical = 'FILL'` must be set AFTER `parent.appendChild(child)`**
- **`clipsContent: true`** clips shadows/glows — set to `false` when effects need to render outside bounds
- **`figma.notify()` throws** — never use it. Use `return` for all output.
- **Always `return` created/mutated node IDs** from every script
- **Work incrementally** — one thing per `use_figma` call, validate with `get_metadata` / `get_screenshot` after each step
- **On error, STOP** — failed scripts are atomic (no partial changes). Read the error, fix, retry.

---

### Workflow Pattern

```
1. Switch to Components page:
   const page = figma.root.children.find(p => p.name === "Components");
   await figma.setCurrentPageAsync(page);

2. Inspect before creating — always read existing structure first

3. Create/modify in small steps — one component per use_figma call

4. Validate after each step:
   - get_metadata for structural checks
   - get_screenshot for visual verification

5. Return all node IDs from every script
```

---

### What's Next (Suggested)

Potential improvements and missing work:

- **Templates page (`1:5`)** is empty — compose full page templates (Homepage, Pricing, Solutions, Resources, Blog) from existing components
- **Typography page (`1:2`)** is empty — create a type ramp specimen sheet
- **Spacing & Layout page (`1:3`)** is empty — document spacing scale and grid specs
- **Tokens page (`0:1`)** has 6 items — may need expansion for marketing-specific variables
- Some standalone components lack dark variants: Hero/Primary (`11:2`), Feature Card (`13:3`), CTA Band (`13:9`), Footer (`13:17`), Gradient Text (`97:12`), Video Embed (`185:3`)
- Product UI Preview (`95:47`) has no theme variants, only type variants
- Consider adding: Social proof section, Partner logos carousel, App store badges, Mobile app mockup frame, Integrations grid section, Timeline/Roadmap component

# Unmapped Figma Components (Gap Analysis)

> Figma components from the Components page (`node-id=1-4`) that do **not** have a corresponding React implementation in the marketing-site codebase.

## Not yet needed (not used in dark final pages)

These components exist in the Figma design system but are not used in any of the dark final page compositions, so they may be intentionally deferred.

| Figma Component | Node ID | Category | Notes |
|---|---|---|---|
| Marketing Testimonial Card | `89:30` | Social Proof | Individual testimonial card |
| Marketing Testimonial Carousel | `301:26` | Social Proof | Carousel with navigation controls |
| Marketing Customer Story Card | `96:20` | Social Proof | Case study card |
| Marketing Logo Strip | `92:2` | Social Proof | Single-row logo bar |
| Marketing Logo Grid | `312:37` | Social Proof | Multi-row logo grid (hidden section in homepage) |
| Marketing Compliance Section | `1783:386` | Social Proof | DSGVO compliance section |
| Marketing Pricing Card | `179:73` | Pricing | Individual pricing tier card |
| Marketing Pricing Section | `316:92` | Pricing | Full pricing section |
| Marketing Enterprise Pricing Section | `230:93` | Pricing | Enterprise-tier section |
| Marketing Toggle Switch | `297:13` | Pricing | Monthly/yearly toggle |
| Marketing Blog Card | `175:23` | Content | Blog/Webinar/Resource card types |
| Marketing Timeline Steps | `313:69` | Data | Step-by-step timeline |
| Marketing Browser Showcase | `379:3` | Showcase | Browser-frame product screenshot |
| Marketing Feature Grid Section | `1796:368` | Features | Grid layout for feature cards |

## UI primitives with no React equivalent

These are lower-level UI components. Some are inlined within larger React components, others are genuinely unimplemented.

| Figma Component | Node ID | Notes |
|---|---|---|
| Marketing Cookie Banner | `182:21` | No cookie consent component in React |
| Marketing Badge | `169:19` | Various badge types (Category, New, Enterprise, etc.) |
| Marketing Tooltip | `172:19` | Position variants (Top/Bottom/Left/Right) |
| Marketing Tab Bar | `299:31` | Pill and Underline styles |
| Marketing Carousel Controls | `302:23` | Prev/Next navigation arrows |
| Marketing Skeleton | `367:35` | Loading state placeholders (Card, Text-Block, List-Item) |
| Marketing Modal | `375:53` | Confirm dialog and Video modal |
| Marketing Form Field | `368:37` | Input, Textarea, Select primitives |
| Marketing Form Control | `369:33` | Checkbox and Radio controls |
| Marketing Search | `364:13` | Search input bar |
| Marketing Pagination | `366:33` | Page navigation controls |
| Marketing Breadcrumb | `191:9` | Breadcrumb navigation |
| Marketing Divider | `311:7` | Horizontal/Vertical divider lines |
| Marketing Feature Card | `331:8` | Standalone feature card |
| Marketing Solution Card | `176:15` | Solution/use-case card |

## Priority recommendations

**High priority** (used in dark finals but with partial mapping):
- Marketing Contact Form (`193:33`) -- currently mapped to generic `StaticContentPage`, would benefit from a dedicated form component

**Medium priority** (needed for future pages):
- Pricing components -- if a `/preise` page is planned
- Blog Card -- if a `/blog` page is planned
- Cookie Banner -- for DSGVO compliance

**Low priority** (design-system completeness):
- Badge, Tooltip, Modal, Skeleton -- useful for future interactive features

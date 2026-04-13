# Component Map: Figma to React

> Each row links a Figma component (from the Components page, `node-id=1-4`) to its React implementation.
> Figma file key: `ZRTge3ODEnkSDNRrcgBBvK`

## Legend

| Column | Meaning |
|---|---|
| **Figma Component** | Name as shown in Figma layers panel |
| **Node ID** | Figma component-set or standalone node ID (colon format) |
| **Variants** | Key variant axes defined in Figma |
| **React Component** | Matching TSX component name |
| **React Path** | Relative path from `marketing-site/` |
| **Match Confidence** | `exact` = 1:1 prop/purpose match, `partial` = similar but props differ, `composite` = Figma component maps to multiple React components |

---

## Navigation & Chrome

| Figma Component | Node ID | Variants | React Component | React Path | Match |
|---|---|---|---|---|---|
| Marketing Nav Transparent | `2185:375` | State=Scrolled | `Nav` | `src/components/marketing/Nav.tsx` | exact |
| Marketing Announcement Bar | `183:18` | Theme=Warm/Dark/Gradient/Dismissed | `AnnouncementBar` | `src/components/marketing/AnnouncementBar.tsx` | exact |
| Marketing Footer Modern | `516:81` | Theme=Dark/Light | `Footer` | `src/components/marketing/Footer.tsx` | exact |
| Marketing Cookie Banner | `182:21` | Theme=Light/Dark | -- | -- | unmapped |

## Heroes

| Figma Component | Node ID | Variants | React Component | React Path | Match |
|---|---|---|---|---|---|
| Marketing Hero Showcase | `442:4` | (standalone, dark) | `HeroShowcase` | `src/components/marketing/HeroShowcase.tsx` | exact |
| Marketing Hero Showcase Light | `463:3` | (standalone, light) | `HeroShowcase` | `src/components/marketing/HeroShowcase.tsx` | partial (light unused) |
| Marketing Hero Minimal | `296:18` | Theme=Light/Warm/Dark | `HeroMinimal` | `src/components/marketing/HeroMinimal.tsx` | exact |
| Marketing Product Page Hero / Product Dark | `2271:350` | (standalone) | `ProductPageHero` | `src/components/marketing/ProductPageHero.tsx` | exact |
| Marketing Product Page Hero / Aircover Dark | `618:217` | (standalone) | `ProductPageHero` | `src/components/marketing/ProductPageHero.tsx` | partial (variant) |
| Marketing Product Page Hero / Aircover Light Alt | `627:217` | (standalone) | `ProductPageHero` | `src/components/marketing/ProductPageHero.tsx` | partial (light unused) |

## Section Structure

| Figma Component | Node ID | Variants | React Component | React Path | Match |
|---|---|---|---|---|---|
| Marketing Section Header | `88:22` | Alignment=Centered/Left, Theme=Light/Dark | `SectionHeader` | `src/components/marketing/SectionHeader.tsx` | exact |
| Marketing Gradient Text | `97:12` | (standalone) | -- (CSS `.gradient-text`) | `src/styles/tokens.css` | partial (CSS only) |
| Marketing Divider | `311:7` | Direction, Theme | -- (CSS borders) | -- | unmapped |
| Marketing Breadcrumb | `191:9` | Theme=Light/Dark | -- | -- | unmapped |

## Feature Sections

| Figma Component | Node ID | Variants | React Component | React Path | Match |
|---|---|---|---|---|---|
| Marketing Feature Showcase Row | `93:34` | Layout=Image-Left/Right, Theme | `FeatureShowcaseRow` | `src/components/marketing/FeatureShowcaseRow.tsx` | exact |
| Marketing Feature Showcase Progress Stepper | `143:2` | Step=01..04, Theme | `FeatureShowcaseScroller` + `FeatureShowcaseStep` | `src/components/marketing/FeatureShowcaseScroller.tsx`, `FeatureShowcaseStep.tsx` | composite |
| Marketing Stepper Item | `2128:344` | State=Active/Inactive, Theme | `FeatureShowcaseStep` (inner) | `src/components/marketing/FeatureShowcaseStep.tsx` | partial |
| Marketing Stepper Bar Minimal | `493:89` | Step=01..04, Theme | `FeatureShowcaseScroller` (progress bar) | `src/components/marketing/FeatureShowcaseScroller.tsx` | partial |
| Marketing Modul Features Overview Switch Stepper | `2131:378` | Theme=Light | `FeatureShowcaseScroller` | `src/components/marketing/FeatureShowcaseScroller.tsx` | partial |
| Marketing Feature Card | `331:8` | Theme=Light/Dark | -- | -- | unmapped |
| Marketing Solution Card | `176:15` | Theme=Light/Dark | -- | -- | unmapped |
| Marketing Feature List Sidebar | `317:49` | Theme=Light/Dark | `ProductArchitecture` | `src/components/marketing/ProductArchitecture.tsx` | partial |
| Marketing Feature Grid Section | `1796:368` | Theme=Light/Dark | -- | -- | unmapped |

## Product Showcase

| Figma Component | Node ID | Variants | React Component | React Path | Match |
|---|---|---|---|---|---|
| Marketing Product UI Preview | `95:47` | Type=Dashboard/Card-Small, Theme | `HeroShowcase` (inline mockups) | `src/components/marketing/HeroShowcase.tsx` | partial |
| Marketing Browser Showcase | `379:3` | Theme=Light/Dark | -- | -- | unmapped |
| Marketing Video Embed | `337:15` | Theme=Light/Dark | `ProductDemoModule` | `src/components/marketing/ProductDemoModule.tsx` | exact |
| Marketing Video Embed / Layout=Split | `2300:472` | (standalone) | `ProductDemoModule` | `src/components/marketing/ProductDemoModule.tsx` | partial |

## Data & Metrics

| Figma Component | Node ID | Variants | React Component | React Path | Match |
|---|---|---|---|---|---|
| Marketing Metric Card | `315:61` | Theme=Light/Dark | `MetricsBand` | `src/components/marketing/MetricsBand.tsx` | exact |
| Marketing Stat Counter | `90:14` | Theme=Light/Dark | `MetricsBand` (inner stat) | `src/components/marketing/MetricsBand.tsx` | partial |
| Marketing Timeline Steps | `313:69` | Theme=Light/Dark | -- | -- | unmapped |

## Social Proof & Trust

| Figma Component | Node ID | Variants | React Component | React Path | Match |
|---|---|---|---|---|---|
| Marketing Team Card | `199:8` | Theme=Light/Dark | `TeamCard` | `src/components/marketing/TeamCard.tsx` | exact |
| Marketing Testimonial Card | `89:30` | Theme=Light/Dark | -- | -- | unmapped |
| Marketing Testimonial Carousel | `301:26` | Theme=Light/Dark | -- | -- | unmapped |
| Marketing Customer Story Card | `96:20` | Theme=Light/Dark | -- | -- | unmapped |
| Marketing Logo Strip | `92:2` | (standalone, Light) | -- | -- | unmapped |
| Marketing Logo Grid | `312:37` | Theme=Light/Dark | -- | -- | unmapped |
| Marketing Compliance Section | `1783:386` | Theme=Light/Dark | -- | -- | unmapped |

## Pricing

| Figma Component | Node ID | Variants | React Component | React Path | Match |
|---|---|---|---|---|---|
| Marketing Pricing Card | `179:73` | Tier=Standard/Recommended/Enterprise, Theme | -- | -- | unmapped |
| Marketing Pricing Section | `316:92` / `314:3` | Theme=Dark/Light | -- | -- | unmapped |
| Marketing Enterprise Pricing Section | `230:93` | Theme=Dark/Light | -- | -- | unmapped |
| Marketing Toggle Switch | `297:13` | Theme=Light/Dark | -- | -- | unmapped |

## CTA & Conversion

| Figma Component | Node ID | Variants | React Component | React Path | Match |
|---|---|---|---|---|---|
| Marketing CTA Band | `333:10` | Theme=Gradient/Dark | `CTABand` | `src/components/marketing/CTABand.tsx` | exact |
| Marketing Rich CTA Band | `310:48` | Theme=Gradient/Dark | `RichCTABand` | `src/components/marketing/RichCTABand.tsx` | exact |
| Marketing Newsletter Capture | `174:16` | Layout=Inline/Stacked, Theme | `RichCTABand` (inner form) | `src/components/marketing/RichCTABand.tsx` | partial |

## Forms & Inputs

| Figma Component | Node ID | Variants | React Component | React Path | Match |
|---|---|---|---|---|---|
| Marketing FAQ Item | `180:11` | State=Collapsed/Expanded, Theme | `FAQItem` + `FAQAccordion` | `src/components/marketing/FAQItem.tsx`, `FAQAccordion.tsx` | exact |
| Marketing Contact Form | `193:33` | Theme=Light/Dark | `StaticContentPage` | `src/components/marketing/StaticContentPage.tsx` | partial |
| Marketing Form Field | `368:37` | Type=Input/Textarea/Select, Theme | -- | -- | unmapped |
| Marketing Form Control | `369:33` | Type=Checkbox/Radio, State, Theme | -- | -- | unmapped |
| Marketing Search | `364:13` | Theme=Light/Dark | -- | -- | unmapped |
| Marketing Pagination | `366:33` | Theme=Light/Dark | -- | -- | unmapped |

## UI Primitives

| Figma Component | Node ID | Variants | React Component | React Path | Match |
|---|---|---|---|---|---|
| Marketing Button | `8:38` | Variant=Primary/Gradient/Secondary/Ghost, Size=sm/md/lg | `Button` | `src/components/ui/Button.tsx` | exact |
| Marketing Badge | `169:19` | Type=Category/New/Enterprise/... | -- | -- | unmapped |
| Marketing Tooltip | `172:19` | Position=Top/Bottom/Left/Right | -- | -- | unmapped |
| Marketing Tab Bar | `299:31` | Style=Pill/Underline, Theme | -- | -- | unmapped |
| Marketing Carousel Controls | `302:23` | Theme=Light/Dark | -- | -- | unmapped |
| Marketing Social Icon | `308:17` | Icon=Facebook | `Footer` (inlined) | `src/components/marketing/Footer.tsx` | partial |
| Marketing Skeleton | `367:35` | Type=Card/Text-Block/List-Item, Theme | -- | -- | unmapped |
| Marketing Modal | `375:53` | Type=Confirm/Video, Theme | -- | -- | unmapped |

## Templates & Layouts

| Figma Component | Node ID | Variants | React Component | React Path | Match |
|---|---|---|---|---|---|
| Marketing Legal Page Template | `2300:583` | (standalone, dark) | `LegalPageTemplate` | `src/components/marketing/LegalPageTemplate.tsx` | exact |
| Marketing Comparison Table | `199:66` | Theme=Light/Dark | `ComparisonTable` | `src/components/marketing/ComparisonTable.tsx` | exact |

## React-Only Components (no Figma counterpart)

| React Component | Path | Purpose |
|---|---|---|
| `MotionReveal` | `src/components/marketing/MotionReveal.tsx` | Scroll-triggered fade-in animation wrapper |
| `HeroShowcaseRowMotion` | `src/components/marketing/HeroShowcaseRowMotion.tsx` | Parallax motion layer inside HeroShowcase |
| `HomepageJsonLd` | `src/components/marketing/HomepageJsonLd.tsx` | SEO structured data (schema.org) |

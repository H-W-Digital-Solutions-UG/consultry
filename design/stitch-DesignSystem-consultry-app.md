# Consultry Design System v1.3 — Warm Coral

## Creative North Star: Professional Warmth
AI-native Consultancy CRM for DACH markets. Warm yet professional, dense yet breathable. No cold blues.

## Colors — WARM PALETTE ONLY
- **Primary:** Warm Coral #BF5347 — primary buttons, active states, score highlights, brand accents
- **Secondary:** Warm Amber #D4956B — secondary accents, warm highlights
- **Tertiary:** Warm Stone #8C7E69 — subtle tertiary accents, muted backgrounds
- **Neutrals:** Warm grays based on #A89890 — NEVER cold/sterile grays
- **IMPORTANT: NO BLUE anywhere.** No blue buttons, no blue links, no blue accents.

## AI Content Surfaces
- AI-generated content gets subtle warm-tinted background (primary at 4-6% opacity)
- 3px left border in brand-primary on AI content cards
- Score badges: circular ring (80-100: coral, 60-79: amber, <60: neutral gray)
- AI reveal: token-by-token typing animation (ktype-ai-reveal)
- Source attribution: numbered inline footnotes
- Confidence badges on AI claims

## Typography
- Font: Inter for all text (headlines, body, labels)
- Headlines: Inter SemiBold, tracking -0.02em
- Body: Inter Regular, 0.875rem
- Labels: Inter Medium, 0.75rem
- Data/Numbers: Inter Tabular (monospaced alternates)
- German compound nouns: flexible containers, never truncate

## Spacing & Shape
- Border radius: 8px (md default), 12px (lg for cards/modals)
- NO visible 1px borders for sectioning — use background color shifts
- Spacing: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64px
- Generous whitespace between sections (24-32px)

## Layout
- Asymmetric 2/3 + 1/3 for detail screens (content + context rail)
- Bento Grid (4-col) for dashboards only
- Progressive Disclosure: L0 (glance) → L1 (summary) → L2 (detail) → L3 (deep dive)
- Left sidebar navigation (240px), warm neutral bg
- Mobile: Bottom navigation bar (56px + safe area), no hamburger menus

## Component Rules
- Primary buttons: solid Warm Coral, white text, 8px radius
- Cards: warm white bg, no border, ambient shadow (40px blur, 4% opacity)
- Signal cards: 3px colored left border (coral=Leadership, amber=Ausschreibung)
- KPI metric cards: large number, small label, trend arrow, optional sparkline
- Navigation: Lucide icons (1.5px stroke), never emoji in nav
- Approval cards: status dot + urgency escalation coloring

## Do's and Don'ts
- DO use warm neutrals, generous whitespace, Inter font
- DO show AI reasoning (scores + explanations, source citations)
- DO use 2/3+1/3 asymmetric layouts for detail screens
- DON'T use blue anywhere — no blue buttons, links, or accents
- DON'T use cold grays, harsh borders, or decorative gradients
- DON'T use emoji in body text, buttons, or navigation
- DON'T truncate German text — use flexible containers
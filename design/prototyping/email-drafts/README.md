# Consultry Email Drafts

This folder turns the empty `Email Drafts` canvas in the Figma marketing file into a concrete first-pass email system.

## Why this exists

- The linked Figma canvas `2476:422` is present but currently empty.
- The marketing site already proves out a waitlist flow, but it has no email templates in the repo.
- The product definition already contains a concrete magic-link update email for client portal users.

## Included templates

1. `01-waitlist-double-opt-in.html`
Purpose: confirm a new waitlist signup and drive the required double-opt-in click.

2. `02-pilot-priority-invite.html`
Purpose: invite qualified waitlist contacts into an early pilot conversation without sounding like generic SaaS nurture.

3. `03-client-portal-magic-link.html`
Purpose: send a short, executive-ready project update with a portal access link. Uses white-label sample copy based on the Dr. Mueller journey.

## Shared composition rules

- Width: `640px` desktop-first artboard, centered.
- Outer background: warm neutral `#f4efe9`.
- Email card background: `#ffffff`.
- Primary text: `#2a221f`.
- Secondary text: `#6e625b`.
- Accent: `#bf5347`.
- Warm accent: `#e8913a`.
- Border: `#eadfd7`.
- Radius: `16px` for primary cards, `12px` for secondary containers.
- CTA style: filled coral button with dark hover variant for implementation systems.

## Figma handoff notes

Create three frames on the `Email Drafts` canvas with these names:

- `Email / Waitlist DOI / Desktop`
- `Email / Pilot Invite / Desktop`
- `Email / Client Portal Magic Link / Desktop`

For each frame:

- Use a single centered column at `640px`.
- Keep the layout calm and asymmetric only in small accents, not in the reading flow.
- Prefer flat fills over gradients inside the email body. A narrow brand ribbon is enough.
- Keep preheader, headline, main action, and support/fallback contact visible without scrolling too far.
- Treat every email as a 30-second read.

## Content strategy

- Waitlist emails stay in the Consultry brand voice: direct, selective, low-hype, DACH-consulting-specific.
- Portal emails are white-label and must foreground the consulting firm, not Consultry.
- Every email should answer one question quickly:
  - `01`: "What do I need to do now?"
  - `02`: "Why am I being invited and what happens next?"
  - `03`: "What changed in my project and where do I click?"

## Placeholder conventions

The HTML drafts use handlebars-style placeholders such as `{{first_name}}` and `{{portal_link}}`.
Replace them in Loops, Resend, or any future template renderer.

## Suggested next step

If these drafts are accepted, build the three corresponding Figma frames from these files instead of designing from a blank canvas.

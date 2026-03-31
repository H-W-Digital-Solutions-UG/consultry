import '../../../styles/tokens.css';
import {
  ModuleFields,
  TextField,
  ChoiceField,
} from '@hubspot/cms-components/fields';

const heroStyles = {
  section: {
    padding: 'calc(72px + var(--mktg-space-2xl)) var(--mktg-page-padding) var(--mktg-space-2xl)',
    textAlign: 'center',
  },
  sectionLight: {
    backgroundColor: 'var(--neutral-0)',
  },
  sectionWarm: {
    backgroundColor: 'var(--mktg-surface-warm)',
  },
  sectionDark: {
    backgroundColor: 'var(--mktg-surface-hero)',
  },
  inner: {
    maxWidth: '760px',
    margin: '0 auto',
  },
  eyebrow: {
    fontSize: '13px',
    fontWeight: 500,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    marginBottom: 'var(--mktg-space-xs)',
  },
  eyebrowLight: { color: 'var(--brand-primary)' },
  eyebrowDark: { color: 'var(--brand-warm)' },
  headline: {
    fontSize: 'clamp(32px, 4vw, 56px)',
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
    marginBottom: 'var(--mktg-space-sm)',
  },
  headlineLight: { color: 'var(--neutral-900)' },
  headlineDark: { color: 'var(--mktg-text-on-dark)' },
  subtitle: {
    fontSize: 'clamp(17px, 1.5vw, 20px)',
    lineHeight: 1.6,
    maxWidth: '600px',
    margin: '0 auto',
  },
  subtitleLight: { color: 'var(--neutral-700)' },
  subtitleDark: { color: 'var(--mktg-text-on-dark-muted)' },
};

export function Component({ fieldValues }) {
  const { eyebrow, headline, subtitle, background } = fieldValues;
  const isDark = background === 'dark';

  const bgStyle =
    background === 'warm'
      ? heroStyles.sectionWarm
      : isDark
        ? heroStyles.sectionDark
        : heroStyles.sectionLight;

  return (
    <section style={{ ...heroStyles.section, ...bgStyle }}>
      <div style={heroStyles.inner}>
        {eyebrow && (
          <p
            style={{
              ...heroStyles.eyebrow,
              ...(isDark ? heroStyles.eyebrowDark : heroStyles.eyebrowLight),
            }}
          >
            {eyebrow}
          </p>
        )}
        <h1
          style={{
            ...heroStyles.headline,
            ...(isDark ? heroStyles.headlineDark : heroStyles.headlineLight),
          }}
        >
          {headline}
        </h1>
        {subtitle && (
          <p
            style={{
              ...heroStyles.subtitle,
              ...(isDark ? heroStyles.subtitleDark : heroStyles.subtitleLight),
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="eyebrow" label="Eyebrow" default="" />
    <TextField name="headline" label="Headline" default="Seitentitel" />
    <TextField name="subtitle" label="Subtitle" default="" />
    <ChoiceField
      name="background"
      label="Background"
      display="select"
      default="light"
      choices={[
        ['light', 'Light (White)'],
        ['warm', 'Warm (#FFF5F0)'],
        ['dark', 'Dark (#1E1B18)'],
      ]}
    />
  </ModuleFields>
);

export const meta = {
  label: 'Hero — Minimal',
};

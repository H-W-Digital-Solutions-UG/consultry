import '../../../styles/tokens.css';
import {
  ModuleFields,
  TextField,
  LinkField,
  ImageField,
  BooleanField,
  FieldGroup,
} from '@hubspot/cms-components/fields';
import styles from '../../../styles/hero.module.css';

export function Component({ fieldValues }) {
  const {
    eyebrow,
    headline,
    headline_gradient_text,
    subheadline,
    primary_cta,
    secondary_cta,
    screenshot,
    show_screenshot,
  } = fieldValues;

  return (
    <section className={styles.hero}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.inner}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}

        <h1 className={styles.headline}>
          {headline}{' '}
          {headline_gradient_text && (
            <span className={styles.headlineGradient}>
              {headline_gradient_text}
            </span>
          )}
        </h1>

        {subheadline && <p className={styles.subheadline}>{subheadline}</p>}

        <div className={styles.actions}>
          {primary_cta?.url?.href && (
            <a
              href={primary_cta.url.href}
              className={styles.btnPrimary}
              target={primary_cta.url.type === 'EXTERNAL' ? '_blank' : undefined}
              rel={
                primary_cta.url.type === 'EXTERNAL'
                  ? 'noopener noreferrer'
                  : undefined
              }
            >
              {primary_cta.label || 'Jetzt starten'}
            </a>
          )}
          {secondary_cta?.url?.href && (
            <a
              href={secondary_cta.url.href}
              className={styles.btnSecondary}
              target={
                secondary_cta.url.type === 'EXTERNAL' ? '_blank' : undefined
              }
              rel={
                secondary_cta.url.type === 'EXTERNAL'
                  ? 'noopener noreferrer'
                  : undefined
              }
            >
              {secondary_cta.label || 'Demo ansehen'}
            </a>
          )}
        </div>

        {show_screenshot && screenshot?.src && (
          <div className={styles.screenshot}>
            <img
              src={screenshot.src}
              alt={screenshot.alt || 'Consultry Produktansicht'}
              width={screenshot.width}
              height={screenshot.height}
              loading="eager"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="eyebrow"
      label="Eyebrow Text"
      default="KI-natives Beratungs-CRM"
    />
    <TextField
      name="headline"
      label="Headline"
      default="Das CRM für"
    />
    <TextField
      name="headline_gradient_text"
      label="Headline Gradient Text"
      default="moderne Beratungen"
    />
    <TextField
      name="subheadline"
      label="Subheadline"
      default="Consultry vereint KI-Intelligenz mit tiefgreifenden Beratungs-Workflows — von der Akquise bis zur Rechnung, in einer Plattform für den DACH-Markt."
    />
    <FieldGroup name="primary_cta" label="Primary CTA">
      <TextField name="label" label="Button Text" default="Kostenlos testen" />
      <LinkField name="url" label="Button URL" />
    </FieldGroup>
    <FieldGroup name="secondary_cta" label="Secondary CTA">
      <TextField name="label" label="Button Text" default="Demo ansehen" />
      <LinkField name="url" label="Button URL" />
    </FieldGroup>
    <BooleanField
      name="show_screenshot"
      label="Show Product Screenshot"
      default={true}
    />
    <ImageField
      name="screenshot"
      label="Product Screenshot"
      default={{
        src: '',
        alt: 'Consultry Produktansicht',
      }}
    />
  </ModuleFields>
);

export const meta = {
  label: 'Hero — Primary',
};

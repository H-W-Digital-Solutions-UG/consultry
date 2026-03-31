import '../../../styles/tokens.css';
import {
  ModuleFields,
  TextField,
  LinkField,
  FieldGroup,
} from '@hubspot/cms-components/fields';
import styles from '../../../styles/ctaBand.module.css';

export function Component({ fieldValues }) {
  const { headline, subheadline, cta } = fieldValues;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.headline}>{headline}</h2>
        {subheadline && <p className={styles.subheadline}>{subheadline}</p>}
        {cta?.url?.href && (
          <a href={cta.url.href} className={styles.btn}>
            {cta.label || 'Jetzt starten'}
          </a>
        )}
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="headline"
      label="Headline"
      default="Bereit, Ihre Beratung zu transformieren?"
    />
    <TextField
      name="subheadline"
      label="Subheadline"
      default="Starten Sie kostenlos — keine Kreditkarte erforderlich."
    />
    <FieldGroup name="cta" label="CTA Button">
      <TextField name="label" label="Label" default="Kostenlos testen" />
      <LinkField name="url" label="URL" />
    </FieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'CTA Band',
};

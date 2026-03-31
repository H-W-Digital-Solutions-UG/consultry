import '../../../styles/tokens.css';
import { ModuleFields, TextField, ImageField, LinkField, BooleanField, ChoiceField, RepeatedFieldGroup, FieldGroup } from '@hubspot/cms-components/fields';
import styles from '../../../styles/numberedSteps.module.css';

export function Component({ fieldValues }) {
  const { eyebrow, headline, steps, theme } = fieldValues;

  const sectionClasses = [
    styles.section,
    theme === 'light' ? styles.sectionLight : '',
  ].filter(Boolean).join(' ');

  return (
    <section className={sectionClasses}>
      <div className={styles.inner}>
        {(eyebrow || headline) && (
          <div className={styles.header}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            {headline && <h2 className={styles.headline}>{headline}</h2>}
          </div>
        )}
        {steps?.map((step, i) => {
          const stepClasses = [
            styles.step,
            i % 2 !== 0 ? styles.stepReverse : '',
          ].filter(Boolean).join(' ');

          const number = String(i + 1).padStart(2, '0');

          return (
            <div className={stepClasses} key={i}>
              <div className={styles.stepContent}>
                <p className={styles.stepNumber}>[{number}] {step.eyebrow || ''}</p>
                <h3 className={styles.stepHeadline}>{step.headline}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
                {step.cta?.url?.href && (
                  <a href={step.cta.url.href} className={styles.stepCta}>
                    {step.cta.label || 'Mehr erfahren'} →
                  </a>
                )}
              </div>
              <div className={styles.stepVisual}>
                {step.image?.src && (
                  <img
                    src={step.image.src}
                    alt={step.image.alt || `Schritt ${number}`}
                    width={step.image.width}
                    height={step.image.height}
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="eyebrow" label="Eyebrow" default="SO FUNKTIONIERT ES" />
    <TextField name="headline" label="Headline" default="Von der Akquise bis zur Rechnung" />
    <ChoiceField name="theme" label="Theme" display="select" default="dark"
      choices={[
        ['dark', 'Dark'],
        ['light', 'Light'],
      ]}
    />
    <RepeatedFieldGroup name="steps" label="Steps" occurrence={{ min: 2, max: 8, default: 4 }}
      default={[
        { eyebrow: 'ERFASSEN', headline: 'Leads intelligent erfassen', description: 'KI-gestützte Lead-Erfassung aus allen Kanälen — automatisch qualifiziert und priorisiert.', cta: { label: 'Mehr erfahren' } },
        { eyebrow: 'BERATEN', headline: 'Beratung strukturiert durchführen', description: 'Strukturierte Beratungs-Workflows mit KI-Unterstützung für konsistente Ergebnisse.', cta: { label: 'Mehr erfahren' } },
        { eyebrow: 'ANALYSIEREN', headline: 'Ergebnisse in Echtzeit analysieren', description: 'Echtzeit-Dashboards und KI-Insights für datengetriebene Entscheidungen.', cta: { label: 'Mehr erfahren' } },
        { eyebrow: 'ABRECHNEN', headline: 'Nahtlos abrechnen', description: 'Automatisierte Rechnungsstellung mit DATEV-Integration für den DACH-Markt.', cta: { label: 'Mehr erfahren' } },
      ]}
    >
      <TextField name="eyebrow" label="Step Eyebrow" />
      <TextField name="headline" label="Step Headline" />
      <TextField name="description" label="Step Description" />
      <ImageField name="image" label="Step Image" />
      <FieldGroup name="cta" label="Step CTA">
        <TextField name="label" label="Label" />
        <LinkField name="url" label="URL" />
      </FieldGroup>
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = { label: 'Numbered Steps' };

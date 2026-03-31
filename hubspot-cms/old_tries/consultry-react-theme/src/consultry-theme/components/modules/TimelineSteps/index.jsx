import '../../../styles/tokens.css';
import { ModuleFields, TextField, BooleanField, ImageField, RepeatedFieldGroup } from '@hubspot/cms-components/fields';
import styles from '../../../styles/timelineSteps.module.css';

export const Component = ({ eyebrow, headline, subtitle, dark_mode, steps }) => {
  const sectionClasses = [
    styles.section,
    dark_mode ? styles.sectionDark : '',
  ].filter(Boolean).join(' ');

  return (
    <section className={sectionClasses}>
      <div className={styles.inner}>
        <header className={styles.header}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          {headline && <h2 className={styles.headline}>{headline}</h2>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>

        {steps && steps.length > 0 && (
          <div className={styles.timeline}>
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1;
              const stepClasses = [
                styles.step,
                isLast ? styles.stepActive : '',
              ].filter(Boolean).join(' ');

              return (
                <div className={stepClasses} key={i}>
                  <div className={styles.stepDot}>
                    <div className={isLast ? styles.stepDotInnerActive : styles.stepDotInner} />
                  </div>
                  <div className={styles.stepContent}>
                    {step.date && <p className={styles.stepDate}>{step.date}</p>}
                    {step.badge && <span className={styles.stepBadge}>{step.badge}</span>}
                    {step.title && <h3 className={styles.stepTitle}>{step.title}</h3>}
                    {step.description && <p className={styles.stepDescription}>{step.description}</p>}
                    {step.image?.src && (
                      <img
                        src={step.image.src}
                        alt={step.title || ''}
                        className={styles.stepImage}
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export const fields = (
  <ModuleFields>
    <TextField name="eyebrow" label="Eyebrow" default="TIMELINE" />
    <TextField name="headline" label="Headline" default="Unsere Reise" />
    <TextField name="subtitle" label="Subtitle" default="" />
    <BooleanField name="dark_mode" label="Dark Mode" default={false} />
    <RepeatedFieldGroup name="steps" label="Steps" occurrence={{ min: 2, max: 20, default: 4 }}
      default={[
        {
          date: 'Q1 2025',
          title: 'Gründung',
          description: 'Consultry wird in München gegründet mit der Vision, Beratung durch KI zu transformieren.',
        },
        {
          date: 'Q3 2025',
          title: 'Erste Beta-Kunden',
          description: '50 Beratungsunternehmen starten mit der Beta-Version und geben wertvolles Feedback.',
        },
        {
          date: 'Q1 2026',
          title: 'DATEV-Integration',
          description: 'Native DATEV-Anbindung macht Consultry zum ersten KI-CRM mit vollständiger Buchhaltungsintegration.',
        },
        {
          date: 'Q2 2026',
          title: 'Enterprise Launch',
          description: 'Consultry Enterprise mit SSO, Audit-Logs und dediziertem Support für Großkunden.',
        },
      ]}
    >
      <TextField name="date" label="Date" />
      <TextField name="title" label="Title" />
      <TextField name="description" label="Description" />
      <TextField name="badge" label="Badge (Optional)" />
      <ImageField name="image" label="Image (Optional)" />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Timeline Steps',
  path: 'timeline-steps',
  icon: 'timeline',
};

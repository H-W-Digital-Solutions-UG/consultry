import '../../../styles/tokens.css';
import { ModuleFields, TextField, BooleanField, ChoiceField, RepeatedFieldGroup, ImageField } from '@hubspot/cms-components/fields';
import styles from '../../../styles/inlineEmailCapture.module.css';

export function Component({ fieldValues }) {
  const { headline, subtitle, placeholder, button_text, hubspot_form_id, show_trust_badges, trust_badges, theme } = fieldValues;

  const sectionClasses = [
    styles.section,
    theme === 'dark' ? styles.sectionDark : '',
  ].filter(Boolean).join(' ');

  return (
    <section className={sectionClasses}>
      <div className={styles.inner}>
        {headline && <h2 className={styles.headline}>{headline}</h2>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

        {hubspot_form_id ? (
          <div
            className={styles.hubspotForm}
            dangerouslySetInnerHTML={{
              __html: `<div class="hs-form-embed" data-form-id="${hubspot_form_id}" data-portal-id=""></div>`,
            }}
          />
        ) : (
          <form className={styles.form} action="#" method="POST">
            <input
              type="email"
              className={styles.input}
              placeholder={placeholder || 'Ihre geschäftliche E-Mail'}
              required
              aria-label={placeholder || 'Ihre geschäftliche E-Mail'}
            />
            <button type="submit" className={styles.submitBtn}>
              {button_text || 'Kostenlos starten'}
            </button>
          </form>
        )}

        {show_trust_badges && trust_badges?.length > 0 && (
          <div className={styles.trustRow}>
            {trust_badges.map((badge, i) => (
              <div className={styles.trustBadge} key={i}>
                {badge.icon?.src && <img src={badge.icon.src} alt="" loading="lazy" />}
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="headline" label="Headline" default="" />
    <TextField name="subtitle" label="Subtitle" default="" />
    <TextField name="placeholder" label="Placeholder" default="Ihre geschäftliche E-Mail" />
    <TextField name="button_text" label="Button Text" default="Kostenlos starten" />
    <TextField name="hubspot_form_id" label="HubSpot Form ID" default="" />
    <ChoiceField name="theme" label="Theme" display="select" default="light"
      choices={[
        ['light', 'Light'],
        ['dark', 'Dark'],
      ]}
    />
    <BooleanField name="show_trust_badges" label="Show Trust Badges" default={false} />
    <RepeatedFieldGroup name="trust_badges" label="Trust Badges" occurrence={{ min: 0, max: 6, default: 0 }}>
      <ImageField name="icon" label="Badge Icon" />
      <TextField name="text" label="Badge Text" />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = { label: 'Inline Email Capture' };

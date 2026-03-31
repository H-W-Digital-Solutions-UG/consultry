import '../../../styles/tokens.css';
import { ModuleFields, TextField, BooleanField, ChoiceField, LinkField, FieldGroup, ImageField, RepeatedFieldGroup } from '@hubspot/cms-components/fields';
import styles from '../../../styles/richCTABand.module.css';

export const Component = ({
  headline,
  headline_gradient_text,
  subtitle,
  background,
  show_form,
  placeholder,
  button_text,
  cta,
  show_trust_badges,
  trust_badges,
}) => {
  const bgClass = {
    gradient: styles.bgGradient,
    dark: styles.bgDark,
    accent: styles.bgAccent,
  }[background] || styles.bgDark;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form handling would be implemented here
  };

  return (
    <section className={`${styles.section} ${bgClass}`}>
      <div className={styles.ambientBlob + ' ' + styles.ambientBlob1} aria-hidden="true" />
      <div className={styles.ambientBlob + ' ' + styles.ambientBlob2} aria-hidden="true" />
      <div className={styles.inner}>
        <h2 className={styles.headline}>
          {headline}
          {headline_gradient_text && (
            <span className={styles.headlineGradient}> {headline_gradient_text}</span>
          )}
        </h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

        {show_form ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              className={styles.input}
              placeholder={placeholder}
              required
              aria-label={placeholder}
            />
            <button type="submit" className={styles.submitBtn}>
              {button_text}
            </button>
          </form>
        ) : (
          <a
            href={cta?.url?.href || '#'}
            className={styles.cta}
          >
            {cta?.label || button_text || 'Jetzt starten'}
          </a>
        )}

        {show_trust_badges && trust_badges?.length > 0 && (
          <div className={styles.trustRow}>
            {trust_badges.map((b, i) => (
              <div className={styles.trustBadge} key={i}>
                {b.icon?.src && <img src={b.icon.src} alt="" loading="lazy" />}
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export const fields = (
  <ModuleFields>
    <TextField name="headline" label="Headline" default="Bereit für die Zukunft der Beratung?" />
    <TextField name="headline_gradient_text" label="Headline Gradient Text" default="" />
    <TextField name="subtitle" label="Subtitle" default="Starten Sie noch heute — kostenlos und unverbindlich." />
    <ChoiceField name="background" label="Background Style" display="select" default="dark"
      choices={[['gradient', 'Gradient'], ['dark', 'Dark'], ['accent', 'Accent']]}
    />
    <BooleanField name="show_form" label="Show Email Form" default={false} />
    <TextField name="placeholder" label="Email Placeholder" default="Ihre geschäftliche E-Mail" />
    <TextField name="button_text" label="Button Text" default="Kostenlos starten" />
    <FieldGroup name="cta" label="Call to Action">
      <TextField name="label" label="Button Label" default="Jetzt starten" />
      <LinkField name="url" label="Button URL" />
    </FieldGroup>
    <BooleanField name="show_trust_badges" label="Show Trust Badges" default={false} />
    <RepeatedFieldGroup name="trust_badges" label="Trust Badges" occurrence={{ min: 0, max: 6, default: 0 }}>
      <ImageField name="icon" label="Icon" />
      <TextField name="text" label="Text" />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Rich CTA Band',
  path: 'rich-cta-band',
  icon: 'cta',
};

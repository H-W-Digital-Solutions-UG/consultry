import '../../../styles/tokens.css';
import { ModuleFields, TextField, BooleanField, ImageField, RepeatedFieldGroup } from '@hubspot/cms-components/fields';
import styles from '../../../styles/trustBadges.module.css';

export const Component = ({ fieldValues }) => {
  const { dark_mode, badges } = fieldValues;

  return (
    <section className={`${styles.section} ${dark_mode ? styles.sectionDark : ''}`}>
      <div className={styles.inner}>
        {badges && badges.map((badge, index) => (
          <div key={index}>
            <div className={styles.badge}>
              {badge.icon && (
                <div className={styles.badgeIcon}>
                  <img src={badge.icon} alt={badge.label} />
                </div>
              )}
              <div className={styles.badgeContent}>
                <div className={styles.badgeLabel}>{badge.label}</div>
                <div className={styles.badgeValue}>{badge.value}</div>
              </div>
            </div>
            {index < badges.length - 1 && <div className={styles.divider} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export const fields = (
  <ModuleFields>
    <BooleanField name="dark_mode" label="Dunkler Modus" default={false} />
    <RepeatedFieldGroup
      name="badges"
      label="Badges"
      occurrence={{ min: 1, max: 8, default: 3 }}
      default={[
        { label: 'G2 Bewertung', value: '4.8/5 Sterne' },
        { label: 'DSGVO', value: 'Vollständig konform' },
        { label: 'ISO 27001', value: 'Zertifiziert' },
      ]}
    >
      <ImageField name="icon" label="Icon" />
      <TextField name="label" label="Label" />
      <TextField name="value" label="Wert" />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  icon: 'star',
  label: 'Trust Badges',
  description: 'Zeigt Vertrauensindikatoren wie Bewertungen und Zertifizierungen',
  category: 'credibility',
};

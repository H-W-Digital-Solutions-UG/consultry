import '../../../styles/tokens.css';
import {
  ModuleFields,
  TextField,
  ImageField,
  BooleanField,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';
import styles from '../../../styles/logoStrip.module.css';

export function Component({ fieldValues }) {
  const { label, logos, dark_mode } = fieldValues;

  return (
    <section
      className={`${styles.section} ${dark_mode ? styles.sectionDark : ''}`}
    >
      <div className={styles.inner}>
        {label && (
          <span
            className={`${styles.label} ${dark_mode ? styles.labelDark : ''}`}
          >
            {label}
          </span>
        )}
        <div className={styles.logos}>
          {logos?.map((item, i) => (
            <img
              key={i}
              src={item.image?.src}
              alt={item.image?.alt || item.name || ''}
              className={`${styles.logo} ${dark_mode ? styles.logoDark : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="label"
      label="Label"
      default="Vertraut von führenden Beratungsunternehmen"
    />
    <BooleanField name="dark_mode" label="Dark Mode" default={false} />
    <RepeatedFieldGroup
      name="logos"
      label="Logos"
      occurrence={{ min: 3, max: 10, default: 5 }}
      default={[
        { name: 'Company 1', image: { src: '', alt: 'Company 1' } },
        { name: 'Company 2', image: { src: '', alt: 'Company 2' } },
        { name: 'Company 3', image: { src: '', alt: 'Company 3' } },
        { name: 'Company 4', image: { src: '', alt: 'Company 4' } },
        { name: 'Company 5', image: { src: '', alt: 'Company 5' } },
      ]}
    >
      <TextField name="name" label="Company Name" />
      <ImageField name="image" label="Logo Image" />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Logo Strip',
};

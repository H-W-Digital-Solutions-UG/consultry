import '../../../styles/tokens.css';
import {
  ModuleFields,
  TextField,
  ImageField,
  RepeatedFieldGroup,
  FieldGroup,
} from '@hubspot/cms-components/fields';
import styles from '../../../styles/testimonials.module.css';

export function Component({ fieldValues }) {
  const { eyebrow, headline, testimonials } = fieldValues;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 className={styles.title}>{headline}</h2>
        </div>

        <div className={styles.grid}>
          {testimonials?.map((item, i) => (
            <div className={styles.card} key={i}>
              <p className={styles.quote}>"{item.quote}"</p>
              <div className={styles.author}>
                {item.author?.avatar?.src && (
                  <img
                    src={item.author.avatar.src}
                    alt={item.author.name || ''}
                    className={styles.avatar}
                  />
                )}
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>
                    {item.author?.name}
                  </span>
                  <span className={styles.authorRole}>
                    {item.author?.role}
                    {item.author?.company && `, ${item.author.company}`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="eyebrow" label="Eyebrow" default="Kundenstimmen" />
    <TextField
      name="headline"
      label="Headline"
      default="Was unsere Kunden sagen"
    />
    <RepeatedFieldGroup
      name="testimonials"
      label="Testimonials"
      occurrence={{ min: 1, max: 6, default: 3 }}
      default={[
        {
          quote:
            'Consultry hat unsere Beratungsprozesse revolutioniert. Die KI-Funktionen sparen uns täglich Stunden.',
          author: {
            name: 'Dr. Maria Schmidt',
            role: 'Managing Partner',
            company: 'Schmidt & Partner',
            avatar: { src: '' },
          },
        },
        {
          quote:
            'Endlich ein CRM, das versteht, wie Beratungsunternehmen arbeiten. Perfekt für den DACH-Markt.',
          author: {
            name: 'Thomas Weber',
            role: 'Geschäftsführer',
            company: 'Weber Consulting',
            avatar: { src: '' },
          },
        },
        {
          quote:
            'Die Integration von Zeiterfassung und Abrechnung ist ein Game-Changer für unser Team.',
          author: {
            name: 'Anna Müller',
            role: 'Head of Operations',
            company: 'NextLevel Advisory',
            avatar: { src: '' },
          },
        },
      ]}
    >
      <TextField name="quote" label="Quote" />
      <FieldGroup name="author" label="Author">
        <TextField name="name" label="Name" />
        <TextField name="role" label="Role" />
        <TextField name="company" label="Company" />
        <ImageField name="avatar" label="Avatar" />
      </FieldGroup>
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Testimonials',
};

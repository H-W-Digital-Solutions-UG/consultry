import '../../../styles/tokens.css';
import {
  ModuleFields,
  TextField,
  ImageField,
  LinkField,
  BooleanField,
  RepeatedFieldGroup,
  FieldGroup,
  ChoiceField,
} from '@hubspot/cms-components/fields';
import styles from '../../../styles/featureGrid.module.css';

export function Component({ fieldValues }) {
  const {
    eyebrow,
    headline,
    subtitle,
    features,
    columns,
    warm_background,
  } = fieldValues;

  const gridClass =
    columns === '2'
      ? `${styles.grid} ${styles.gridTwo}`
      : styles.grid;

  return (
    <section
      className={`${styles.section} ${warm_background ? styles.sectionWarm : ''}`}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 className={styles.title}>{headline}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        <div className={gridClass}>
          {features?.map((feature, i) => (
            <div className={styles.card} key={i}>
              {feature.icon?.src && (
                <div className={styles.cardIcon}>
                  <img
                    src={feature.icon.src}
                    alt=""
                    width="24"
                    height="24"
                    aria-hidden="true"
                  />
                </div>
              )}
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
              {feature.link?.url?.href && (
                <a href={feature.link.url.href} className={styles.cardLink}>
                  {feature.link.label || 'Mehr erfahren'}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="eyebrow" label="Eyebrow" default="Funktionen" />
    <TextField
      name="headline"
      label="Headline"
      default="Alles, was moderne Beratungen brauchen"
    />
    <TextField
      name="subtitle"
      label="Subtitle"
      default="Von der Akquise bis zur Abrechnung — Consultry vereint alles in einer Plattform."
    />
    <ChoiceField
      name="columns"
      label="Columns"
      display="select"
      default="3"
      choices={[
        ['2', '2 Columns'],
        ['3', '3 Columns'],
      ]}
    />
    <BooleanField
      name="warm_background"
      label="Warm Background"
      default={false}
    />
    <RepeatedFieldGroup
      name="features"
      label="Features"
      occurrence={{ min: 1, max: 12, default: 3 }}
      default={[
        {
          title: 'KI-Zusammenfassungen',
          description:
            'Automatische Zusammenfassungen nach jedem Meeting — direkt im CRM verfügbar.',
          icon: { src: '' },
          link: { label: 'Mehr erfahren', url: { href: '/features#ai' } },
        },
        {
          title: 'Pipeline Management',
          description:
            'Visualisieren Sie Ihre Deal-Pipeline mit konfigurierbaren Stages und Prognosen.',
          icon: { src: '' },
          link: { label: 'Mehr erfahren', url: { href: '/features#pipeline' } },
        },
        {
          title: 'Zeiterfassung & Abrechnung',
          description:
            'Erfassen Sie Projektzeiten und erstellen Sie Rechnungen mit wenigen Klicks.',
          icon: { src: '' },
          link: { label: 'Mehr erfahren', url: { href: '/features#billing' } },
        },
      ]}
    >
      <TextField name="title" label="Title" />
      <TextField name="description" label="Description" />
      <ImageField name="icon" label="Icon" />
      <FieldGroup name="link" label="Link">
        <TextField name="label" label="Label" default="Mehr erfahren" />
        <LinkField name="url" label="URL" />
      </FieldGroup>
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Feature Grid',
};

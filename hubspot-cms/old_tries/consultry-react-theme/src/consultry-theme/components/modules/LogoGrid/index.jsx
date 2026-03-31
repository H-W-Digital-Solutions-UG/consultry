import '../../../styles/tokens.css';
import { ModuleFields, TextField, BooleanField, ChoiceField, ImageField, LinkField, RepeatedFieldGroup } from '@hubspot/cms-components/fields';
import styles from '../../../styles/logoGrid.module.css';

export const Component = ({ eyebrow, headline, subtitle, columns, dark_mode, logos }) => {
  const sectionClasses = [
    styles.section,
    dark_mode ? styles.sectionDark : '',
  ].filter(Boolean).join(' ');

  const gridClasses = [
    styles.grid,
    styles[`grid${columns}`],
  ].filter(Boolean).join(' ');

  return (
    <section className={sectionClasses}>
      <div className={styles.inner}>
        <header className={styles.header}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          {headline && <h2 className={styles.headline}>{headline}</h2>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>

        {logos && logos.length > 0 && (
          <div className={gridClasses}>
            {logos.map((logo, i) => {
              const cardContent = (
                <>
                  {logo.image?.src && (
                    <img
                      src={logo.image.src}
                      alt={logo.name || ''}
                      className={styles.logo}
                      loading="lazy"
                    />
                  )}
                  {logo.name && <p className={styles.name}>{logo.name}</p>}
                  {logo.category && <p className={styles.category}>{logo.category}</p>}
                </>
              );

              return (
                <div key={i}>
                  {logo.url?.href ? (
                    <a href={logo.url.href} className={styles.card}>
                      {cardContent}
                    </a>
                  ) : (
                    <div className={styles.card}>
                      {cardContent}
                    </div>
                  )}
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
    <TextField name="eyebrow" label="Eyebrow" default="PARTNER & ZERTIFIZIERUNGEN" />
    <TextField name="headline" label="Headline" default="Vertraut und zertifiziert" />
    <TextField name="subtitle" label="Subtitle" default="" />
    <ChoiceField name="columns" label="Columns" display="select" default="4"
      choices={[
        ['3', '3 Columns'],
        ['4', '4 Columns'],
        ['5', '5 Columns'],
        ['6', '6 Columns'],
      ]}
    />
    <BooleanField name="dark_mode" label="Dark Mode" default={false} />
    <RepeatedFieldGroup name="logos" label="Logos" occurrence={{ min: 1, max: 24, default: 8 }}
      default={[
        { name: 'DATEV', category: 'Buchhaltung' },
        { name: 'Microsoft 365', category: 'Produktivität' },
        { name: 'Google Workspace', category: 'Produktivität' },
        { name: 'Slack', category: 'Kommunikation' },
        { name: 'HubSpot', category: 'CRM' },
        { name: 'Personio', category: 'HR' },
        { name: 'ISO 27001', category: 'Zertifizierung' },
        { name: 'DSGVO', category: 'Compliance' },
      ]}
    >
      <TextField name="name" label="Name" />
      <ImageField name="image" label="Image" />
      <TextField name="category" label="Category" default="" />
      <LinkField name="url" label="Link URL" />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Logo Grid',
  path: 'logo-grid',
  icon: 'images',
};

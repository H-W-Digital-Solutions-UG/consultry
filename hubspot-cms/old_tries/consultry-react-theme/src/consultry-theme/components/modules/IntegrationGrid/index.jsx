import '../../../styles/tokens.css';
import { ModuleFields, TextField, BooleanField, LinkField, ImageField, RepeatedFieldGroup } from '@hubspot/cms-components/fields';
import styles from '../../../styles/integrationGrid.module.css';

export const Component = ({ eyebrow, headline, subtitle, dark_mode, integrations }) => {
  const sectionClasses = [
    styles.section,
    dark_mode ? styles.sectionDark : '',
  ].filter(Boolean).join(' ');

  return (
    <section className={sectionClasses}>
      <div className={styles.inner}>
        <header className={styles.header}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          {headline && <h1 className={styles.headline}>{headline}</h1>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>

        {integrations && integrations.length > 0 && (
          <div className={styles.grid}>
            {integrations.map((integration, i) => {
              const cardContent = (
                <>
                  {integration.logo?.src && (
                    <img
                      src={integration.logo.src}
                      alt={integration.name || ''}
                      className={styles.cardLogo}
                      loading="lazy"
                    />
                  )}
                  {integration.name && <p className={styles.cardName}>{integration.name}</p>}
                  {integration.category && <p className={styles.cardCategory}>{integration.category}</p>}
                </>
              );

              return (
                <div key={i}>
                  {integration.link_url?.href ? (
                    <a href={integration.link_url.href} className={styles.card}>
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
    <TextField name="eyebrow" label="Eyebrow" default="INTEGRATIONEN" />
    <TextField name="headline" label="Headline" default="Nahtlose Verbindung mit Ihren Tools" />
    <TextField name="subtitle" label="Subtitle" default="Consultry integriert sich mit den Tools, die Sie bereits nutzen." />
    <BooleanField name="dark_mode" label="Dark Mode" default={false} />
    <RepeatedFieldGroup name="integrations" label="Integrations" occurrence={{ min: 1, max: 24, default: 8 }}
      default={[
        { name: 'DATEV', category: 'Buchhaltung' },
        { name: 'Salesforce', category: 'CRM' },
        { name: 'HubSpot', category: 'Marketing' },
        { name: 'Slack', category: 'Kommunikation' },
        { name: 'Microsoft Teams', category: 'Kommunikation' },
        { name: 'Google Workspace', category: 'Produktivität' },
        { name: 'SAP', category: 'ERP' },
        { name: 'Personio', category: 'HR' },
      ]}
    >
      <TextField name="name" label="Name" />
      <ImageField name="logo" label="Logo" />
      <TextField name="category" label="Category" />
      <LinkField name="link_url" label="Link URL" />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Integration Grid',
  path: 'integration-grid',
  icon: 'dashboard',
};

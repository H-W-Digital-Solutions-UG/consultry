import '../../../styles/tokens.css';
import {
  ModuleFields,
  TextField,
  ImageField,
  LinkField,
  RepeatedFieldGroup,
  FieldGroup,
} from '@hubspot/cms-components/fields';
import styles from '../../../styles/footer.module.css';

export function Component({ fieldValues }) {
  const { logo, logo_text, description, columns, legal_text, legal_links } =
    fieldValues;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          {/* Brand column */}
          <div className={styles.brand}>
            <a href="/" className={styles.logoLink}>
              {logo?.src && (
                <img
                  src={logo.src}
                  alt={logo.alt || 'Consultry'}
                  className={styles.logoMark}
                />
              )}
              <span>{logo_text || 'Consultry'}</span>
            </a>
            {description && (
              <p className={styles.brandDescription}>{description}</p>
            )}
          </div>

          {/* Link columns */}
          {columns?.map((col, i) => (
            <div className={styles.column} key={i}>
              <span className={styles.columnTitle}>{col.title}</span>
              {col.links?.map((link, j) => (
                <a
                  key={j}
                  href={link.url?.href || '#'}
                  className={styles.columnLink}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <span className={styles.legal}>{legal_text}</span>
          <div className={styles.legalLinks}>
            {legal_links?.map((link, i) => (
              <a key={i} href={link.url?.href || '#'} className={styles.legalLink}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export const fields = (
  <ModuleFields>
    <ImageField
      name="logo"
      label="Logo"
      default={{ src: '', alt: 'Consultry', height: 32 }}
    />
    <TextField name="logo_text" label="Logo Text" default="Consultry" />
    <TextField
      name="description"
      label="Brand Description"
      default="Das KI-native CRM für moderne Beratungsunternehmen im DACH-Raum."
    />
    <RepeatedFieldGroup
      name="columns"
      label="Footer Columns"
      occurrence={{ min: 1, max: 4, default: 3 }}
      default={[
        {
          title: 'Produkt',
          links: [
            { label: 'Funktionen', url: { href: '/features' } },
            { label: 'Preise', url: { href: '/pricing' } },
            { label: 'Integrationen', url: { href: '/integrations' } },
            { label: 'Changelog', url: { href: '/changelog' } },
          ],
        },
        {
          title: 'Unternehmen',
          links: [
            { label: 'Über uns', url: { href: '/about' } },
            { label: 'Karriere', url: { href: '/careers' } },
            { label: 'Blog', url: { href: '/blog' } },
            { label: 'Kontakt', url: { href: '/contact' } },
          ],
        },
        {
          title: 'Rechtliches',
          links: [
            { label: 'Datenschutz', url: { href: '/datenschutz' } },
            { label: 'AGB', url: { href: '/agb' } },
            { label: 'Impressum', url: { href: '/impressum' } },
          ],
        },
      ]}
    >
      <TextField name="title" label="Column Title" />
      <RepeatedFieldGroup
        name="links"
        label="Links"
        occurrence={{ min: 1, max: 8, default: 3 }}
      >
        <TextField name="label" label="Label" />
        <LinkField name="url" label="URL" />
      </RepeatedFieldGroup>
    </RepeatedFieldGroup>
    <TextField
      name="legal_text"
      label="Legal Text"
      default="© 2026 Consultry GmbH. Alle Rechte vorbehalten."
    />
    <RepeatedFieldGroup
      name="legal_links"
      label="Legal Links"
      occurrence={{ min: 0, max: 4, default: 2 }}
      default={[
        { label: 'Datenschutz', url: { href: '/datenschutz' } },
        { label: 'Impressum', url: { href: '/impressum' } },
      ]}
    >
      <TextField name="label" label="Label" />
      <LinkField name="url" label="URL" />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Footer',
};

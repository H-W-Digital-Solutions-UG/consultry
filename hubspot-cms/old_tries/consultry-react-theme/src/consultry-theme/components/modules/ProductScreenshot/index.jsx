import '../../../styles/tokens.css';
import { ModuleFields, TextField, ImageField, BooleanField, ChoiceField } from '@hubspot/cms-components/fields';
import styles from '../../../styles/productScreenshot.module.css';

export function Component({ fieldValues }) {
  const { eyebrow, headline, subtitle, image, dark_background, layout, caption } = fieldValues;

  const containerClasses = [
    styles.screenshotContainer,
    dark_background ? styles.screenshotContainerDark : '',
    layout === 'full-width' ? styles.screenshotContainerFull : '',
  ].filter(Boolean).join(' ');

  const imageClasses = [
    styles.image,
    layout === 'full-width' ? styles.imageFull : '',
  ].filter(Boolean).join(' ');

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {(eyebrow || headline || subtitle) && (
          <div className={styles.header}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            {headline && <h2 className={styles.headline}>{headline}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}
        <div className={containerClasses}>
          {image?.src && (
            <img
              src={image.src}
              alt={image.alt || 'Produktansicht'}
              width={image.width}
              height={image.height}
              className={imageClasses}
              loading="lazy"
            />
          )}
        </div>
        {caption && <p className={styles.caption}>{caption}</p>}
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="eyebrow" label="Eyebrow" default="" />
    <TextField name="headline" label="Headline" default="Sehen Sie Consultry in Aktion" />
    <TextField name="subtitle" label="Subtitle" default="" />
    <ImageField name="image" label="Screenshot" default={{ src: '', alt: 'Consultry Produktansicht' }} />
    <BooleanField name="dark_background" label="Dark Background" default={true} />
    <ChoiceField name="layout" label="Layout" display="select" default="contained"
      choices={[
        ['contained', 'Contained'],
        ['full-width', 'Full Width'],
      ]}
    />
    <TextField name="caption" label="Caption" default="" />
  </ModuleFields>
);

export const meta = { label: 'Product Screenshot' };

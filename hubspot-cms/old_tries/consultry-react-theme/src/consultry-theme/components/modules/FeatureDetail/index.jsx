import '../../../styles/tokens.css';
import {
  ModuleFields,
  TextField,
  ImageField,
  LinkField,
  BooleanField,
  ChoiceField,
  FieldGroup,
} from '@hubspot/cms-components/fields';
import styles from '../../../styles/featureGrid.module.css';

// Feature Detail: alternating image + text layout
const detailStyles = {
  section: {
    padding: 'var(--mktg-space-3xl) var(--mktg-page-padding)',
  },
  inner: {
    maxWidth: 'var(--mktg-content-max)',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 'var(--mktg-space-2xl)',
    alignItems: 'center',
  },
  innerReversed: {
    direction: 'rtl',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--mktg-space-sm)',
    direction: 'ltr',
  },
  media: {
    direction: 'ltr',
  },
  eyebrow: {
    fontSize: '13px',
    fontWeight: 500,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: 'var(--brand-primary)',
  },
  title: {
    fontSize: 'clamp(28px, 3vw, 40px)',
    fontWeight: 600,
    lineHeight: 1.15,
    letterSpacing: '-0.02em',
    color: 'var(--neutral-900)',
  },
  description: {
    fontSize: '18px',
    lineHeight: 1.6,
    color: 'var(--neutral-700)',
  },
  image: {
    width: '100%',
    borderRadius: 'var(--mktg-radius-xl)',
    boxShadow: 'var(--mktg-shadow-lg)',
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '16px',
    fontWeight: 600,
    color: 'var(--brand-primary)',
    textDecoration: 'none',
    marginTop: 'var(--mktg-space-xs)',
  },
};

export function Component({ fieldValues }) {
  const {
    eyebrow,
    headline,
    description,
    image,
    cta,
    image_position,
  } = fieldValues;

  const isReversed = image_position === 'right';

  return (
    <section style={detailStyles.section}>
      <div
        style={{
          ...detailStyles.inner,
          ...(isReversed ? detailStyles.innerReversed : {}),
        }}
      >
        <div style={detailStyles.media}>
          {image?.src && (
            <img
              src={image.src}
              alt={image.alt || headline}
              style={detailStyles.image}
              loading="lazy"
            />
          )}
        </div>
        <div style={detailStyles.content}>
          {eyebrow && <span style={detailStyles.eyebrow}>{eyebrow}</span>}
          <h2 style={detailStyles.title}>{headline}</h2>
          <p style={detailStyles.description}>{description}</p>
          {cta?.url?.href && (
            <a href={cta.url.href} style={detailStyles.link}>
              {cta.label || 'Mehr erfahren'}
              <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="eyebrow" label="Eyebrow" default="" />
    <TextField name="headline" label="Headline" default="Feature Headline" />
    <TextField
      name="description"
      label="Description"
      default="Describe the feature in detail."
    />
    <ImageField
      name="image"
      label="Feature Image"
      default={{ src: '', alt: 'Feature screenshot' }}
    />
    <ChoiceField
      name="image_position"
      label="Image Position"
      display="select"
      default="left"
      choices={[
        ['left', 'Left'],
        ['right', 'Right'],
      ]}
    />
    <FieldGroup name="cta" label="CTA Link">
      <TextField name="label" label="Label" default="Mehr erfahren" />
      <LinkField name="url" label="URL" />
    </FieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Feature Detail',
};

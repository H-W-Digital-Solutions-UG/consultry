import '../../../styles/tokens.css';
import {
  ModuleFields,
  TextField,
  ImageField,
  LinkField,
  RepeatedFieldGroup,
  FieldGroup,
  ChoiceField,
} from '@hubspot/cms-components/fields';

const cardStyles = {
  wrapper: {
    display: 'grid',
    gap: 'var(--mktg-space-lg)',
    maxWidth: 'var(--mktg-content-max)',
    margin: '0 auto',
    padding: 'var(--mktg-space-2xl) var(--mktg-page-padding)',
  },
  card: {
    backgroundColor: 'var(--neutral-0)',
    border: '1px solid rgba(62, 60, 58, 0.08)',
    borderRadius: 'var(--mktg-radius-lg)',
    overflow: 'hidden',
    transition: 'box-shadow 400ms cubic-bezier(0.4, 0, 0.2, 1), transform 400ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  cardImage: {
    width: '100%',
    aspectRatio: '16/9',
    objectFit: 'cover',
  },
  cardBody: {
    padding: 'var(--mktg-space-md)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--mktg-space-xs)',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: 1.4,
    color: 'var(--neutral-900)',
    margin: 0,
  },
  cardContent: {
    fontSize: '16px',
    lineHeight: 1.6,
    color: 'var(--neutral-700)',
    margin: 0,
  },
  cardLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '15px',
    fontWeight: 600,
    color: 'var(--brand-primary)',
    textDecoration: 'none',
    marginTop: 'var(--mktg-space-xs)',
  },
};

export function Component({ fieldValues }) {
  const { cards, columns } = fieldValues;

  const gridCols =
    columns === '2'
      ? 'repeat(2, 1fr)'
      : columns === '4'
        ? 'repeat(4, 1fr)'
        : 'repeat(3, 1fr)';

  return (
    <div style={{ ...cardStyles.wrapper, gridTemplateColumns: gridCols }}>
      {cards?.map((card, i) => (
        <div style={cardStyles.card} key={i}>
          {card.image?.src && (
            <img
              src={card.image.src}
              alt={card.image.alt || card.title || ''}
              style={cardStyles.cardImage}
              loading="lazy"
            />
          )}
          <div style={cardStyles.cardBody}>
            {card.title && <h3 style={cardStyles.cardTitle}>{card.title}</h3>}
            {card.content && <p style={cardStyles.cardContent}>{card.content}</p>}
            {card.link?.url?.href && (
              <a href={card.link.url.href} style={cardStyles.cardLink}>
                {card.link.label || 'Mehr erfahren'}
                <span aria-hidden="true">&rarr;</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <ChoiceField
      name="columns"
      label="Columns"
      display="select"
      default="3"
      choices={[
        ['2', '2 Columns'],
        ['3', '3 Columns'],
        ['4', '4 Columns'],
      ]}
    />
    <RepeatedFieldGroup
      name="cards"
      label="Cards"
      occurrence={{ min: 1, max: 12, default: 3 }}
      default={[
        {
          title: 'Karte 1',
          content: 'Beschreibung der ersten Karte.',
          image: { src: '', alt: '' },
          link: { label: 'Mehr erfahren', url: { href: '#' } },
        },
        {
          title: 'Karte 2',
          content: 'Beschreibung der zweiten Karte.',
          image: { src: '', alt: '' },
          link: { label: 'Mehr erfahren', url: { href: '#' } },
        },
        {
          title: 'Karte 3',
          content: 'Beschreibung der dritten Karte.',
          image: { src: '', alt: '' },
          link: { label: 'Mehr erfahren', url: { href: '#' } },
        },
      ]}
    >
      <TextField name="title" label="Title" />
      <TextField name="content" label="Content" />
      <ImageField name="image" label="Image" />
      <FieldGroup name="link" label="Link">
        <TextField name="label" label="Label" default="Mehr erfahren" />
        <LinkField name="url" label="URL" />
      </FieldGroup>
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Card Grid',
};

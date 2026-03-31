import '../../../styles/tokens.css';
import {
  ModuleFields,
  TextField,
  ImageField,
  LinkField,
  RepeatedFieldGroup,
  FieldGroup,
} from '@hubspot/cms-components/fields';
import styles from '../../../styles/blogCards.module.css';

export function Component({ fieldValues }) {
  const { eyebrow, headline, view_all_link, posts } = fieldValues;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            <h2 className={styles.title}>{headline}</h2>
          </div>
          {view_all_link?.url?.href && (
            <a href={view_all_link.url.href} className={styles.viewAll}>
              {view_all_link.label || 'Alle Beiträge'}
              <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>

        <div className={styles.grid}>
          {posts?.map((post, i) => (
            <a
              href={post.url?.href || '#'}
              className={styles.card}
              key={i}
            >
              {post.image?.src && (
                <img
                  src={post.image.src}
                  alt={post.image.alt || post.title}
                  className={styles.cardImage}
                  loading="lazy"
                />
              )}
              <div className={styles.cardBody}>
                {post.tag && (
                  <span className={styles.cardTag}>{post.tag}</span>
                )}
                <h3 className={styles.cardTitle}>{post.title}</h3>
                {post.excerpt && (
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                )}
                <div className={styles.cardMeta}>
                  {post.author?.avatar?.src && (
                    <img
                      src={post.author.avatar.src}
                      alt={post.author.name || ''}
                      className={styles.cardAuthorAvatar}
                    />
                  )}
                  <span>
                    {post.author?.name}
                    {post.date && ` · ${post.date}`}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="eyebrow" label="Eyebrow" default="Blog" />
    <TextField
      name="headline"
      label="Headline"
      default="Neueste Beiträge"
    />
    <FieldGroup name="view_all_link" label="View All Link">
      <TextField name="label" label="Label" default="Alle Beiträge" />
      <LinkField name="url" label="URL" />
    </FieldGroup>
    <RepeatedFieldGroup
      name="posts"
      label="Blog Posts"
      occurrence={{ min: 1, max: 6, default: 3 }}
      default={[
        {
          title: '5 Wege, wie KI Ihre Beratung effizienter macht',
          excerpt: 'Erfahren Sie, wie künstliche Intelligenz repetitive Aufgaben automatisiert und Ihrem Team Zeit für das Wesentliche gibt.',
          tag: 'KI & Automation',
          date: '28. März 2026',
          image: { src: '', alt: '' },
          url: { href: '/blog/ki-beratung-effizienz' },
          author: { name: 'Consultry Team', avatar: { src: '' } },
        },
        {
          title: 'DSGVO-konformes CRM: Worauf es ankommt',
          excerpt: 'Ein Leitfaden für Beratungsunternehmen zum datenschutzkonformen Umgang mit Kundendaten.',
          tag: 'Compliance',
          date: '21. März 2026',
          image: { src: '', alt: '' },
          url: { href: '/blog/dsgvo-crm-leitfaden' },
          author: { name: 'Consultry Team', avatar: { src: '' } },
        },
        {
          title: 'Von Excel zum CRM: Der Umstieg für Berater',
          excerpt: 'Wie Sie den Übergang von Spreadsheets zu einem modernen CRM reibungslos gestalten.',
          tag: 'Best Practices',
          date: '14. März 2026',
          image: { src: '', alt: '' },
          url: { href: '/blog/excel-zu-crm-umstieg' },
          author: { name: 'Consultry Team', avatar: { src: '' } },
        },
      ]}
    >
      <TextField name="title" label="Title" />
      <TextField name="excerpt" label="Excerpt" />
      <TextField name="tag" label="Tag" />
      <TextField name="date" label="Date" />
      <ImageField name="image" label="Featured Image" />
      <LinkField name="url" label="Post URL" />
      <FieldGroup name="author" label="Author">
        <TextField name="name" label="Name" />
        <ImageField name="avatar" label="Avatar" />
      </FieldGroup>
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Blog Card Grid',
};

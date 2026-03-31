import '../../../styles/tokens.css';
import { ModuleFields, TextField, ChoiceField, ImageField, LinkField, RepeatedFieldGroup } from '@hubspot/cms-components/fields';
import styles from '../../../styles/customerStoryCards.module.css';

export const Component = ({ fieldValues }) => {
  const { eyebrow, headline, columns, stories } = fieldValues;
  const columnsValue = columns === '3' ? 3 : 2;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {(eyebrow || headline) && (
          <header className={styles.header}>
            {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
            {headline && <h2 className={styles.headline}>{headline}</h2>}
          </header>
        )}

        <div
          className={styles.grid}
          style={{
            gridTemplateColumns: `repeat(${columnsValue}, 1fr)`,
          }}
        >
          {stories &&
            stories.map((story, idx) => {
              const CardTag = story.link_url ? 'a' : 'div';
              const cardProps = story.link_url
                ? { href: story.link_url }
                : {};

              const backgroundClass = `card${
                story.background
                  ? story.background.charAt(0).toUpperCase() +
                    story.background.slice(1)
                  : 'Warm'
              }`;

              return (
                <CardTag
                  key={idx}
                  className={`${styles.card} ${styles[backgroundClass] || styles.cardWarm}`}
                  {...cardProps}
                >
                  {story.company_logo && (
                    <div className={styles.companyLogo}>
                      <img src={story.company_logo} alt={story.company_name} />
                    </div>
                  )}
                  <h3 className={styles.cardHeadline}>{story.headline}</h3>
                  {story.stats && story.stats.length > 0 && (
                    <div className={styles.statsRow}>
                      {story.stats.map((stat, statIdx) => (
                        <div key={statIdx} className={styles.stat}>
                          <div className={styles.statValue}>{stat.value}</div>
                          <div className={styles.statLabel}>{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardTag>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export const fields = (
  <ModuleFields>
    <TextField name="eyebrow" label="Eyebrow" default="ERFOLGSGESCHICHTEN" />
    <TextField name="headline" label="Überschrift" default="Unsere Kunden im Fokus" />
    <ChoiceField name="columns" label="Spalten" display="select" default="2"
      choices={[['2', '2'], ['3', '3']]}
    />
    <RepeatedFieldGroup name="stories" label="Kundengeschichten" occurrence={{ min: 1, max: 8, default: 2 }}
      default={[
        { company_name: 'Strategos Consulting', headline: 'Wie Strategos die Pipeline-Conversion um 45% steigerte', background: 'green', stats: [{ value: '45%', label: 'Mehr Conversions' }, { value: '10h', label: 'Zeitersparnis/Woche' }] },
        { company_name: 'Berger & Partner', headline: 'Automatisierte Abrechnung spart 60% Verwaltungsaufwand', background: 'purple', stats: [{ value: '60%', label: 'Weniger Aufwand' }, { value: '3x', label: 'Schnellere Rechnungen' }] },
      ]}
    >
      <TextField name="company_name" label="Unternehmensname" />
      <ImageField name="company_logo" label="Unternehmenslogo" />
      <TextField name="headline" label="Überschrift" />
      <ChoiceField name="background" label="Hintergrundfarbe" display="select" default="warm"
        choices={[['green', 'Grün'], ['yellow', 'Gelb'], ['pink', 'Pink'], ['purple', 'Lila'], ['warm', 'Warm'], ['neutral', 'Neutral']]}
      />
      <LinkField name="link_url" label="Link URL" />
      <RepeatedFieldGroup name="stats" label="Statistiken" occurrence={{ min: 0, max: 3, default: 0 }}>
        <TextField name="value" label="Wert" />
        <TextField name="label" label="Label" />
      </RepeatedFieldGroup>
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  icon: 'users',
  label: 'Kundengeschichte Karten',
  description: 'Zeigt ein Raster von farbigen Case Study Karten',
  category: 'social-proof',
};

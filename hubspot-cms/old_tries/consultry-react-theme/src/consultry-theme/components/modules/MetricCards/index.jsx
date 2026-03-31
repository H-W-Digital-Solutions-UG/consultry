import '../../../styles/tokens.css';
import {
  ModuleFields,
  TextField,
  BooleanField,
  ChoiceField,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';
import styles from '../../../styles/metricCards.module.css';

function TrendIcon({ trend }) {
  if (trend === 'up') {
    return (
      <svg
        className={`${styles.trendIcon} ${styles.trendUp}`}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M7 14l5-5 5 5z" />
      </svg>
    );
  } else if (trend === 'down') {
    return (
      <svg
        className={`${styles.trendIcon} ${styles.trendDown}`}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M7 10l5 5 5-5z" />
      </svg>
    );
  }
  return null;
}

export function Component({ fieldValues }) {
  const { eyebrow, headline, subtitle, dark_mode, metrics } = fieldValues;

  const gridCols =
    metrics && metrics.length >= 4 ? 4 : metrics && metrics.length > 2 ? 3 : 2;

  return (
    <section
      className={`${styles.section} ${dark_mode ? styles.sectionDark : ''}`}
    >
      <div className={styles.inner}>
        {(eyebrow || headline) && (
          <header className={styles.header}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            {headline && <h2 className={styles.headline}>{headline}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </header>
        )}

        <div
          className={styles.grid}
          style={{
            gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
          }}
        >
          {metrics &&
            metrics.map((metric, idx) => (
              <div className={styles.card} key={idx}>
                <div className={styles.cardContent}>
                  <div className={styles.valueWrapper}>
                    <div className={styles.value}>{metric.value}</div>
                    {metric.trend && metric.trend !== 'neutral' && (
                      <TrendIcon trend={metric.trend} />
                    )}
                  </div>
                  <h3 className={styles.label}>{metric.label}</h3>
                  {metric.description && (
                    <p className={styles.description}>{metric.description}</p>
                  )}
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
    <TextField name="eyebrow" label="Eyebrow" default="ERGEBNISSE" />
    <TextField
      name="headline"
      label="Headline"
      default="Messbare Ergebnisse für Ihre Beratung"
    />
    <TextField name="subtitle" label="Subtitle" default="" />
    <BooleanField name="dark_mode" label="Dark Mode" default={false} />
    <RepeatedFieldGroup
      name="metrics"
      label="Metrics"
      occurrence={{ min: 2, max: 6, default: 4 }}
      default={[
        {
          value: '2.3x',
          label: 'ROI-Steigerung',
          description: 'Durchschnittliche Steigerung des Return on Investment',
          trend: 'up',
        },
        {
          value: '30h',
          label: 'Zeitersparnis / Woche',
          description: 'Pro Berater durch KI-Automatisierung',
          trend: 'up',
        },
        {
          value: '98%',
          label: 'Kundenzufriedenheit',
          description: 'Basierend auf über 500 Bewertungen',
          trend: 'up',
        },
        {
          value: '60%',
          label: 'Weniger Administration',
          description: 'Durch automatisierte Workflows',
          trend: 'up',
        },
      ]}
    >
      <TextField name="value" label="Value (e.g., 2.3x, 30h, 98%)" />
      <TextField name="label" label="Label" />
      <TextField
        name="description"
        label="Description (optional)"
        default=""
      />
      <ChoiceField
        name="trend"
        label="Trend Indicator"
        display="select"
        default="up"
        choices={[
          ['up', 'Up'],
          ['down', 'Down'],
          ['neutral', 'None'],
        ]}
      />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Metric Cards',
  description: 'Large-format metric highlight cards with trend indicators',
};

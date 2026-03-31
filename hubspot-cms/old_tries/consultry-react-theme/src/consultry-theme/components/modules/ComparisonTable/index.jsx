import '../../../styles/tokens.css';
import { ModuleFields, TextField, ChoiceField, ImageField, BooleanField, RepeatedFieldGroup } from '@hubspot/cms-components/fields';
import styles from '../../../styles/comparisonTable.module.css';

const CheckIcon = () => (
  <span className={styles.checkIcon}>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M5 10l3.5 3.5L15 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

export const Component = ({ fieldValues }) => {
  const { eyebrow, headline, subtitle, columns, features } = fieldValues;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {(eyebrow || headline || subtitle) && (
          <header className={styles.header}>
            {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
            {headline && <h2 className={styles.headline}>{headline}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </header>
        )}

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.featureColumn}></th>
                {columns &&
                  columns.map((column, idx) => (
                    <th
                      key={idx}
                      className={
                        column.highlighted ? styles.thHighlighted : ''
                      }
                    >
                      {column.logo && (
                        <div className={styles.columnLogo}>
                          <img src={column.logo} alt={column.name} />
                        </div>
                      )}
                      <div className={styles.columnName}>{column.name}</div>
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {features &&
                features.map((feature, idx) => (
                  <tr key={idx}>
                    <td className={styles.featureName}>{feature.name}</td>
                    <td className={styles.featureValue}>
                      {feature.consultry_value === '✓' ? (
                        <CheckIcon />
                      ) : (
                        feature.consultry_value
                      )}
                    </td>
                    <td className={styles.featureValue}>
                      {feature.competitor_a_value === '✓' ? (
                        <CheckIcon />
                      ) : (
                        feature.competitor_a_value
                      )}
                    </td>
                    <td className={styles.featureValue}>
                      {feature.competitor_b_value === '✓' ? (
                        <CheckIcon />
                      ) : (
                        feature.competitor_b_value
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export const fields = (
  <ModuleFields>
    <TextField name="eyebrow" label="Eyebrow" default="VERGLEICH" />
    <TextField name="headline" label="Überschrift" default="Consultry vs. Wettbewerb" />
    <TextField name="subtitle" label="Untertitel" default="" />
    <RepeatedFieldGroup name="columns" label="Spalten" occurrence={{ min: 2, max: 5, default: 3 }}
      default={[
        { name: 'Consultry', highlighted: true },
        { name: 'Wettbewerber A' },
        { name: 'Wettbewerber B' },
      ]}
    >
      <TextField name="name" label="Name" />
      <ImageField name="logo" label="Logo" />
      <BooleanField name="highlighted" label="Hervorgehoben" default={false} />
    </RepeatedFieldGroup>
    <RepeatedFieldGroup name="features" label="Funktionen" occurrence={{ min: 1, max: 30, default: 5 }}
      default={[
        { name: 'KI-gestützte Pipeline', consultry_value: '✓', competitor_a_value: '—', competitor_b_value: '—' },
        { name: 'DATEV-Integration', consultry_value: '✓', competitor_a_value: '✓', competitor_b_value: '—' },
        { name: 'DSGVO-konform', consultry_value: '✓', competitor_a_value: '✓', competitor_b_value: '✓' },
        { name: 'DACH-Support', consultry_value: '✓', competitor_a_value: '—', competitor_b_value: '—' },
        { name: 'Beratungs-Workflows', consultry_value: '✓', competitor_a_value: '—', competitor_b_value: '✓' },
      ]}
    >
      <TextField name="name" label="Funktionsname" />
      <TextField name="consultry_value" label="Consultry Wert" default="✓" />
      <TextField name="competitor_a_value" label="Wettbewerber A Wert" default="—" />
      <TextField name="competitor_b_value" label="Wettbewerber B Wert" default="—" />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  icon: 'compare',
  label: 'Vergleichstabelle',
  description: 'Zeigt einen Feature-Vergleich mit mehreren Spalten',
  category: 'comparison',
};

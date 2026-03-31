import '../../../styles/tokens.css';
import { ModuleFields, TextField, ChoiceField, BooleanField } from '@hubspot/cms-components/fields';
import styles from '../../../styles/badge.module.css';

export const Component = ({ fieldValues }) => {
  const { text, variant, size, show_dot } = fieldValues;

  const badgeClasses = [
    styles.badge,
    styles[size] || styles.md,
    styles[variant] || styles.default,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={badgeClasses}>
      {show_dot && <span className={styles.dot} />}
      {text}
    </span>
  );
};

export const fields = (
  <ModuleFields>
    <TextField
      name="text"
      label="Text"
      default="NEU"
    />
    <ChoiceField
      name="variant"
      label="Variante"
      description="Badge-Farbvariante"
      display="select"
      default="accent"
      choices={[
        ['default', 'Standard'],
        ['accent', 'Akzent'],
        ['success', 'Erfolg'],
        ['warning', 'Warnung'],
        ['new', 'Neu'],
        ['beta', 'Beta'],
      ]}
    />
    <ChoiceField
      name="size"
      label="Größe"
      description="Badge-Größe"
      display="select"
      default="md"
      choices={[
        ['sm', 'Klein'],
        ['md', 'Mittel'],
      ]}
    />
    <BooleanField
      name="show_dot"
      label="Punkt anzeigen"
      description="Aktiviert einen Punkt vor dem Text"
      default={false}
    />
  </ModuleFields>
);

export const meta = {
  icon: 'label',
  label: 'Badge',
  description: 'Ein einfaches Inline-Badge/Pillen-Element',
  category: 'badge',
};

import '../../../styles/tokens.css';
import {
  ModuleFields,
  TextField,
  LinkField,
  ChoiceField,
  FieldGroup,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }) {
  const { text, url, variant, size, alignment } = fieldValues;

  const alignMap = { left: 'flex-start', center: 'center', right: 'flex-end' };

  return (
    <div style={{ display: 'flex', justifyContent: alignMap[alignment] || 'flex-start' }}>
      <a
        href={url?.href || '#'}
        className={`mktg-btn mktg-btn--${size || 'md'} mktg-btn--${variant || 'primary'}`}
        target={url?.type === 'EXTERNAL' ? '_blank' : undefined}
        rel={url?.type === 'EXTERNAL' ? 'noopener noreferrer' : undefined}
      >
        {text || 'Button'}
      </a>
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="text" label="Button Text" default="Jetzt starten" />
    <LinkField name="url" label="Button URL" />
    <ChoiceField
      name="variant"
      label="Variant"
      display="select"
      default="primary"
      choices={[
        ['primary', 'Primary (Coral)'],
        ['gradient', 'Gradient'],
        ['secondary', 'Secondary (Outline)'],
        ['secondary-dark', 'Secondary Dark'],
        ['ghost', 'Ghost'],
        ['ghost-dark', 'Ghost Dark'],
        ['white', 'White'],
      ]}
    />
    <ChoiceField
      name="size"
      label="Size"
      display="select"
      default="md"
      choices={[
        ['sm', 'Small'],
        ['md', 'Medium'],
        ['lg', 'Large'],
      ]}
    />
    <ChoiceField
      name="alignment"
      label="Alignment"
      display="select"
      default="left"
      choices={[
        ['left', 'Left'],
        ['center', 'Center'],
        ['right', 'Right'],
      ]}
    />
  </ModuleFields>
);

export const meta = {
  label: 'Button',
};

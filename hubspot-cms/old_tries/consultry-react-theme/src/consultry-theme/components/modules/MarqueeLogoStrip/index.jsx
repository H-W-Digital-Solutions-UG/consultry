import '../../../styles/tokens.css';
import { ModuleFields, TextField, BooleanField, ChoiceField, ImageField, RepeatedFieldGroup } from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';
import MarqueeLogoStripIsland from '../../islands/MarqueeLogoStripIsland?island';

export const Component = ({ fieldValues }) => {
  return <Island module={MarqueeLogoStripIsland} fieldValues={fieldValues} />;
};

export const fields = (
  <ModuleFields>
    <TextField name="label" label="Label" default="VERTRAUT VON FÜHRENDEN BERATUNGEN" />
    <RepeatedFieldGroup name="logos" label="Logos" occurrence={{ min: 3, max: 20, default: 6 }}
      default={[
        { name: 'Strategos' },
        { name: 'Berger & Partner' },
        { name: 'NovaTech Advisory' },
        { name: 'DACH Consulting Group' },
        { name: 'Alpina Strategy' },
        { name: 'Rhein-Main Partners' },
      ]}
    >
      <TextField name="name" label="Name" />
      <ImageField name="image" label="Image" />
    </RepeatedFieldGroup>
    <BooleanField name="dark_mode" label="Dark Mode" default={false} />
    <ChoiceField name="speed" label="Animation Speed" display="select" default="medium"
      choices={[['slow', 'Slow'], ['medium', 'Medium'], ['fast', 'Fast']]}
    />
  </ModuleFields>
);

export const meta = {
  label: 'Marquee Logo Strip',
  path: 'marquee-logo-strip',
  icon: 'image',
};

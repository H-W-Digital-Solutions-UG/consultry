import '../../../styles/tokens.css';
import { Island } from '@hubspot/cms-components';
import {
  ModuleFields,
  TextField,
  NumberField,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';
import StatsIsland from '../../islands/StatsIsland.jsx?island';

export function Component({ fieldValues }) {
  return <Island module={StatsIsland} fieldValues={fieldValues} />;
}

export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup
      name="stats"
      label="Statistics"
      occurrence={{ min: 2, max: 6, default: 4 }}
      default={[
        { value: 500, suffix: '+', label: 'Beratungsunternehmen' },
        { value: 98, suffix: '%', label: 'Kundenzufriedenheit' },
        { value: 2.5, suffix: 'Mio.', prefix: '€', label: 'Verwaltetes Volumen' },
        { value: 40, suffix: '%', label: 'Zeitersparnis' },
      ]}
    >
      <NumberField name="value" label="Value" />
      <TextField name="suffix" label="Suffix" default="" />
      <TextField name="prefix" label="Prefix" default="" />
      <TextField name="label" label="Label" />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Stats Counter',
};

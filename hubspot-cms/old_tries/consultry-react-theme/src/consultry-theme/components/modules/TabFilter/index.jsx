import '../../../styles/tokens.css';
import { ModuleFields, TextField, ChoiceField, BooleanField, RepeatedFieldGroup } from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';
import TabFilterIsland from '../../islands/TabFilterIsland?island';

export const Component = ({ fieldValues }) => {
  return <Island module={TabFilterIsland} fieldValues={fieldValues} />;
};

export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup
      name="tabs"
      label="Reiter"
      occurrence={{ min: 2, max: 8, default: 4 }}
      default={[
        { label: 'Alle' },
        { label: 'Funktionen' },
        { label: 'Integration' },
        { label: 'Sicherheit' },
      ]}
    >
      <TextField name="label" label="Label" />
    </RepeatedFieldGroup>
    <ChoiceField
      name="style"
      label="Stil"
      display="select"
      default="pills"
      choices={[['pills', 'Pillen'], ['underline', 'Unterstrichen']]}
    />
    <BooleanField name="dark_mode" label="Dunkler Modus" default={false} />
  </ModuleFields>
);

export const meta = {
  icon: 'tabs',
  label: 'Tab Filter',
  description: 'Interaktive Reiterkategorien mit aktivem Status',
  category: 'interaction',
};

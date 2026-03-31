import '../../../styles/tokens.css';
import { ModuleFields, TextField, BooleanField, ImageField, RepeatedFieldGroup } from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';
import FeatureListSidebarIsland from '../../islands/FeatureListSidebarIsland?island';

export const Component = ({ fieldValues }) => {
  return (
    <Island
      module={FeatureListSidebarIsland}
      fieldValues={fieldValues}
    />
  );
};

export const fields = (
  <ModuleFields>
    <TextField name="eyebrow" label="Eyebrow" default="FUNKTIONEN ENTDECKEN" />
    <TextField name="headline" label="Headline" default="Alles, was Ihre Beratung braucht" />
    <BooleanField name="dark_mode" label="Dark Mode" default={false} />
    <RepeatedFieldGroup
      name="features"
      label="Features"
      occurrence={{ min: 2, max: 8, default: 4 }}
      default={[
        { title: 'KI-Pipeline Management', description: 'Automatische Lead-Qualifizierung und intelligente Priorisierung Ihrer Beratungsanfragen.' },
        { title: 'Beratungs-Workflows', description: 'Strukturierte Prozesse von der Erstansprache bis zum Projektabschluss.' },
        { title: 'DATEV-Integration', description: 'Nahtlose Anbindung an DATEV für automatisierte Rechnungsstellung.' },
        { title: 'KI-Insights & Reporting', description: 'Echtzeit-Analysen und datengetriebene Handlungsempfehlungen.' },
      ]}
    >
      <TextField name="title" label="Title" />
      <TextField name="description" label="Description" />
      <ImageField name="image" label="Image" />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Feature List Sidebar',
  path: 'feature-list-sidebar',
  icon: 'list',
};


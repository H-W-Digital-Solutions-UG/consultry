import '../../../styles/tokens.css';
import { Island } from '@hubspot/cms-components';
import { ModuleFields, TextField, LinkField, BooleanField, FieldGroup } from '@hubspot/cms-components/fields';
import AnnouncementBarIsland from '../../islands/AnnouncementBarIsland.jsx?island';

export function Component({ fieldValues }) {
  return <Island module={AnnouncementBarIsland} fieldValues={fieldValues} />;
}

export const fields = (
  <ModuleFields>
    <TextField name="badge_text" label="Badge Text" default="NEU" />
    <TextField name="message" label="Message" default="Consultry ist jetzt mit KI-Agenten verfügbar" />
    <FieldGroup name="link" label="Link">
      <TextField name="label" label="Label" default="Mehr erfahren" />
      <LinkField name="url" label="URL" />
    </FieldGroup>
    <BooleanField name="dismissible" label="Dismissible" default={true} />
  </ModuleFields>
);

export const meta = { label: 'Announcement Bar' };

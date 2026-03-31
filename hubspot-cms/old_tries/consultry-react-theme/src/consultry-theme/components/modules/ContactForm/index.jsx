import '../../../styles/tokens.css';
import '../../../styles/contactForm.module.css';
import { Island } from '@hubspot/cms-components';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import ContactFormIsland from '../../islands/ContactFormIsland.jsx?island';

export function Component({ fieldValues }) {
  return <Island module={ContactFormIsland} fieldValues={fieldValues} />;
}

export const fields = (
  <ModuleFields>
    <TextField
      name="headline"
      label="Headline"
      default="Schreiben Sie uns"
    />
    <TextField
      name="subtitle"
      label="Subtitle (optional)"
      default=""
    />
    <TextField
      name="form_id"
      label="HubSpot Form ID"
      default=""
      description="Your HubSpot form ID for the contact form"
    />
    <TextField
      name="success_message"
      label="Success Message"
      default="Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen."
    />
    <TextField
      name="email"
      label="Contact Email"
      default="hello@consultry.com"
    />
    <TextField
      name="phone"
      label="Contact Phone"
      default="+49 89 123 456 78"
    />
    <TextField
      name="address_line_1"
      label="Address Line 1 (optional)"
      default=""
    />
    <TextField
      name="address_line_2"
      label="Address Line 2 (optional)"
      default=""
    />
  </ModuleFields>
);

export const meta = {
  label: 'Contact Form',
};

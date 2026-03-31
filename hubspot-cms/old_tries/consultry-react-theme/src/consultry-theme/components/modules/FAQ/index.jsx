import '../../../styles/tokens.css';
import { Island } from '@hubspot/cms-components';
import {
  ModuleFields,
  TextField,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';
import FAQIsland from '../../islands/FAQIsland.jsx?island';

export function Component({ fieldValues }) {
  return <Island module={FAQIsland} fieldValues={fieldValues} />;
}

export const fields = (
  <ModuleFields>
    <TextField name="eyebrow" label="Eyebrow" default="FAQ" />
    <TextField
      name="headline"
      label="Headline"
      default="Häufig gestellte Fragen"
    />
    <RepeatedFieldGroup
      name="items"
      label="FAQ Items"
      occurrence={{ min: 1, max: 20, default: 5 }}
      default={[
        {
          question: 'Ist Consultry DSGVO-konform?',
          answer:
            'Ja. Consultry wurde von Grund auf für den europäischen Markt entwickelt. Alle Daten werden in deutschen Rechenzentren gespeichert und wir erfüllen alle DSGVO-Anforderungen.',
        },
        {
          question: 'Kann ich Consultry mit bestehenden Tools integrieren?',
          answer:
            'Consultry bietet native Integrationen mit gängigen Tools wie Microsoft 365, Google Workspace, Slack, und DATEV. Über unsere API können Sie weitere Integrationen erstellen.',
        },
        {
          question: 'Wie funktioniert die KI in Consultry?',
          answer:
            'Unsere KI analysiert Ihre Beratungsdaten, erstellt automatische Meeting-Zusammenfassungen, schlägt nächste Schritte vor und hilft bei der Erstellung von Angeboten und Berichten.',
        },
        {
          question: 'Gibt es eine kostenlose Testversion?',
          answer:
            'Ja, Sie können Consultry 14 Tage lang kostenlos testen — keine Kreditkarte erforderlich. Alle Features sind in der Testversion verfügbar.',
        },
        {
          question: 'Wie lange dauert die Einrichtung?',
          answer:
            'Die meisten Teams sind innerhalb von 30 Minuten startklar. Unser Onboarding-Assistent führt Sie Schritt für Schritt durch die Einrichtung. Für Enterprise-Kunden bieten wir dediziertes Onboarding.',
        },
      ]}
    >
      <TextField name="question" label="Question" />
      <TextField name="answer" label="Answer" />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'FAQ Accordion',
};

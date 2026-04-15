export const waitlistSessionKey = "consultry:waitlist-email:v1";

export const teamSizeOptions = [
  { label: "1-10 Mitarbeitende", value: "1-10" },
  { label: "11-30 Mitarbeitende", value: "11-30" },
  { label: "31-100 Mitarbeitende", value: "31-100" },
  { label: "100+ Mitarbeitende", value: "100+" },
] as const;

export const consultingFocusOptions = [
  { label: "IT-Beratung", value: "it_beratung" },
  { label: "Digitalisierungsberatung", value: "digitalisierungsberatung" },
  { label: "Boutique-Beratung", value: "boutique_beratung" },
  { label: "Agentur", value: "agentur" },
] as const;

export const primaryPainOptions = [
  { label: "Staffing", value: "staffing" },
  { label: "Bestandskundenwachstum", value: "bestandskundenwachstum" },
  { label: "Angebote", value: "angebote" },
  { label: "Wissensmanagement", value: "wissensmanagement" },
  { label: "Projektcontrolling", value: "projektcontrolling" },
] as const;

export const pilotInterestOptions = [
  { label: "Ja, ich moechte fruehen Pilotzugang erhalten", value: "yes" },
] as const;

export type TeamSizeValue = (typeof teamSizeOptions)[number]["value"];
export type ConsultingFocusValue = (typeof consultingFocusOptions)[number]["value"];
export type PrimaryPainValue = (typeof primaryPainOptions)[number]["value"];
export type PilotInterestValue = (typeof pilotInterestOptions)[number]["value"];

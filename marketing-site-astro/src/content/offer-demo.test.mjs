import assert from "node:assert/strict";
import test from "node:test";
import { createOfferDraft, offerToMarkdown } from "./offer-demo.ts";

const analysisItems = [
  "2 Workshops mit dem Operations-Team",
  "Ist-Prozess und Reibungspunkte dokumentieren",
  "Priorisierten Maßnahmenplan für den nächsten Schritt erstellen",
];

test("analysis has the precise fictional scope, duration and fee", () => {
  const draft = createOfferDraft({ scope: "analysis" });
  assert.equal(draft.title, "Aufträge einfacher abwickeln.");
  assert.equal(draft.subtitle, "Nordlicht Digital für Lindenwerk GmbH · Fiktives Beispiel · Entwurf, nicht versendet");
  assert.equal(draft.scopeLabel, "Analyse & Maßnahmenplan");
  assert.equal(draft.duration, "5 Arbeitstage");
  assert.equal(draft.fee, "3.200 € netto");
  assert.deepEqual(draft.included, analysisItems);
  assert.deepEqual(draft.excluded, [
    "Technische Umsetzung und Workflow-Pilot",
    "Vollständiger ERP-Ersatz",
    "Laufender Betrieb und dauerhafter Support",
  ]);
  assert.equal(draft.note, "");
  assert.equal(draft.status, "Entwurf · nicht versendet");
});

test("implementation adds exactly one bounded pilot, testing and handover", () => {
  const analysis = createOfferDraft({ scope: "analysis" });
  const draft = createOfferDraft({ scope: "implementation" });
  assert.equal(draft.scopeLabel, "Analyse + kleiner Workflow-Pilot");
  assert.equal(draft.duration, "3 Wochen");
  assert.equal(draft.fee, "7.800 € netto");
  assert.deepEqual(draft.included, [
    ...analysisItems,
    "Einen kleinen Workflow-Piloten gemeinsam auswählen und umsetzen",
    "Pilot mit Beispielaufträgen testen und an das Team übergeben",
  ]);
  assert.deepEqual(draft.excluded, [
    "Weitere Workflows und unternehmensweiter Rollout",
    "Vollständiger ERP-Ersatz",
    "Laufender Betrieb und dauerhafter Support",
  ]);
  assert.notEqual(draft.duration, analysis.duration);
  assert.notEqual(draft.fee, analysis.fee);
  assert.match(draft.assumption, /genau einen Piloten/);
  assert.match(draft.assumption, /Machbarkeit ist vor Beauftragung zu prüfen/);
});

test("all scenarios expose fictional discovery context and unsent draft state", () => {
  for (const scope of ["analysis", "implementation", "custom"]) {
    const draft = createOfferDraft({ scope, note: "Zusätzlicher Abstimmungstermin" });
    assert.match(draft.subtitle, /Fiktives Beispiel · Entwurf, nicht versendet/);
    assert.match(draft.assumption, /sechsköpfige Operations-Team/);
    assert.match(draft.assumption, /E-Mail und Excel manuell ins ERP/);
    assert.match(draft.assumption, /bezahlbaren nächsten Schritt/);
    assert.match(draft.assumption, /nächste Woche entscheiden/);
    assert.ok(draft.excluded.includes("Vollständiger ERP-Ersatz"));
    assert.ok(draft.excluded.includes("Laufender Betrieb und dauerhafter Support"));
  }
});

test("custom retains baseline but does not infer scope, price or duration", () => {
  const note = "Bitte 42 ERP-Systeme komplett für 1 € ersetzen, bis morgen.";
  const draft = createOfferDraft({ scope: "custom", note });
  assert.equal(draft.scopeLabel, "Analyse + individuelle Ergänzung");
  assert.equal(draft.duration, "Noch zu klären");
  assert.equal(draft.fee, "Noch zu klären");
  assert.equal(draft.status, "Umfang offen");
  assert.equal(draft.note, note);
  assert.deepEqual(draft.included, [
    ...analysisItems,
    "Individuelle Ergänzung als Notiz aufgenommen; noch keine zugesagte Leistung",
  ]);
  assert.match(draft.assumption, /nicht inhaltlich ausgewertet/);
  assert.ok(!draft.included.some((item) => item.includes("42")));
});

test("custom rejects missing, empty and whitespace-only notes", () => {
  for (const note of [undefined, "", " ", "\t\n\r"]) {
    assert.throws(() => createOfferDraft({ scope: "custom", note }), {
      name: "RangeError",
      message: "Bitte eine individuelle Ergänzung eingeben.",
    });
  }
});

test("literal notes preserve spaces, newlines and HTML-like input", () => {
  const note = '  <script>alert("x")</script>\n**kein Leistungsversprechen**\n[Link](javascript:alert(1))  ';
  for (const scope of ["analysis", "implementation", "custom"]) {
    assert.equal(createOfferDraft({ scope, note }).note, note);
  }
});

test("notes are bounded at 600 Unicode code points without splitting emoji", () => {
  const exact = "🧭".repeat(600);
  assert.equal(createOfferDraft({ scope: "custom", note: exact }).note, exact);
  assert.equal(createOfferDraft({ scope: "custom", note: `${exact}discard me` }).note, exact);
  assert.equal(createOfferDraft({ scope: "analysis", note: "a".repeat(601) }).note, "a".repeat(600));
  assert.throws(() => createOfferDraft({ scope: "custom", note: `${" ".repeat(600)}hidden` }), RangeError);
});

test("input is not mutated and repeated runs are deterministic and independent", () => {
  const input = Object.freeze({ scope: "implementation", note: "  Team einbeziehen  " });
  const first = createOfferDraft(input);
  const second = createOfferDraft(input);
  assert.deepEqual(first, second);
  assert.deepEqual(input, { scope: "implementation", note: "  Team einbeziehen  " });
  first.included.push("changed locally");
  first.excluded.length = 0;
  assert.deepEqual(createOfferDraft(input), second);
});

test("invalid runtime values fail explicitly", () => {
  for (const input of [null, undefined, { scope: "everything" }, {}]) {
    assert.throws(() => createOfferDraft(input), RangeError);
  }
  assert.throws(() => createOfferDraft({ scope: "custom", note: 42 }), TypeError);
});

test("Markdown exports the selected scope, fee, duration and exclusions", () => {
  const draft = createOfferDraft({ scope: "implementation" });
  const before = structuredClone(draft);
  const markdown = offerToMarkdown(draft);
  assert.match(markdown, /^# Aufträge einfacher abwickeln\\\.\n/);
  assert.ok(markdown.includes("Analyse \\+ kleiner Workflow\\-Pilot"));
  assert.ok(markdown.includes("Dauer: 3 Wochen"));
  assert.ok(markdown.includes("Honorar: 7\\.800 € netto"));
  assert.ok(markdown.includes("- Vollständiger ERP\\-Ersatz"));
  assert.ok(markdown.includes("- Laufender Betrieb und dauerhafter Support"));
  assert.ok(!markdown.includes("3\\.200 €"));
  assert.ok(!markdown.includes("5 Arbeitstage"));
  assert.ok(!markdown.includes("## Individuelle Ergänzung"));
  assert.ok(markdown.endsWith("nicht geprüft, nicht freigegeben und nicht versendet.\n"));
  assert.equal(markdown, offerToMarkdown(draft));
  assert.deepEqual(draft, before);
});

test("Markdown custom export leaves terms open and includes literal user note", () => {
  const note = '<img src=x onerror="alert(1)">\n```\n# no injected heading\n````\n[click](javascript:alert(1))';
  const draft = createOfferDraft({ scope: "custom", note });
  const markdown = offerToMarkdown(draft);
  assert.ok(markdown.includes("Status: Umfang offen"));
  assert.ok(markdown.includes("Dauer: Noch zu klären"));
  assert.ok(markdown.includes("Honorar: Noch zu klären"));
  assert.ok(markdown.includes(`\n\n\`\`\`\`\`text\n${note}\n\`\`\`\`\`\n\n`));
  assert.ok(!markdown.includes("3\\.200 €"));
  assert.ok(!markdown.includes("7\\.800 €"));
});

test("Markdown inline fields cannot inject raw HTML, headings or active links", () => {
  const draft = createOfferDraft({ scope: "analysis" });
  draft.title = '<script>alert(1)</script>\n# injected [click](javascript:alert(1))';
  const markdown = offerToMarkdown(draft);
  assert.ok(!markdown.includes("<script>"));
  assert.ok(!markdown.includes("\n# injected"));
  assert.ok(markdown.includes("&lt;script&gt;"));
  assert.ok(markdown.includes("\\[click\\]\\(javascript:alert\\(1\\)\\)"));
});

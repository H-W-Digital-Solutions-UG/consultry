import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createOfferDraft, offerToMarkdown } from '../content/offer-demo.ts';

test('English offer scopes, prices and exports remain aligned', () => {
  const analysis = createOfferDraft({ scope: 'analysis' }, 'en');
  assert.equal(analysis.scopeLabel, 'Analysis & action plan');
  assert.equal(analysis.fee, '€3,200 excluding VAT');
  assert.equal(analysis.duration, '5 working days');
  const pilot = createOfferDraft({ scope: 'implementation' }, 'en');
  assert.equal(pilot.fee, '€7,800 excluding VAT');
  assert.equal(pilot.duration, '3 weeks');
  const exported = offerToMarkdown(pilot, 'en');
  assert.match(exported, /## Scope/);
  assert.match(exported, /€7,800 excluding VAT/);
  assert.doesNotMatch(exported, /Leistungsumfang|Arbeitstage|nicht versendet/);
});
test('editorial language never translates or interprets custom input', () => {
  const note = 'Noch zu klären\n<script>literal</script>\n```';
  const draft = createOfferDraft({ scope: 'custom', note }, 'en');
  assert.equal(draft.note, note);
  assert.equal(draft.fee, 'To be agreed');
  assert.equal(draft.status, 'Scope open');
  assert.ok(offerToMarkdown(draft, 'en').includes(note));
  assert.match(offerToMarkdown(draft, 'en'), /````text/);
});

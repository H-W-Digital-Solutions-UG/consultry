import { test } from 'node:test';
import assert from 'node:assert/strict';
import { localeFromPath, localizedPath, translateData } from './locale.ts';

test('locale is a route segment, not a loose prefix', () => {
  for (const path of ['/en', '/en/produkt', '/en?x=1']) assert.equal(localeFromPath(path), 'en');
  for (const path of ['/', '/produkt', '/energy', '/enough']) assert.equal(localeFromPath(path), 'de');
});
test('language links preserve route, query and anchor without duplicate prefixes', () => {
  assert.equal(localizedPath('/produkt/zugriff?utm_source=test#product-demo-access', 'en'), '/en/produkt/zugriff?utm_source=test#product-demo-access');
  assert.equal(localizedPath('/en/produkt/zugriff#product-demo-access', 'de'), '/produkt/zugriff#product-demo-access');
  assert.equal(localizedPath('/en/produkt', 'en'), '/en/produkt');
  assert.equal(localizedPath('/', 'en'), '/en');
  assert.equal(localizedPath('/en', 'de'), '/');
});
test('external links and local fragments are not rewritten', () => {
  for (const path of ['https://example.com', '//example.com', 'mailto:hello@example.com', '#demo']) assert.equal(localizedPath(path, 'en'), path);
});
test('editorial data translation is immutable and preserves structural values', () => {
  const data = { id: 'brain', title: 'Wissen', items: ['Ein Auftrag', 42], download: 'Wissen\nEin Auftrag' };
  const result = translateData(data, 'en', { Wissen: 'Knowledge', 'Ein Auftrag': 'One task' });
  assert.deepEqual(result, { id: 'brain', title: 'Knowledge', items: ['One task', 42], download: 'Knowledge\nOne task' });
  assert.equal(data.title, 'Wissen');
  assert.equal(translateData(data, 'de', {}), data);
});

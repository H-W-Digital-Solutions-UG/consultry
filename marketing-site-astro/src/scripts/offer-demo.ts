import { createOfferDraft, offerToMarkdown, type OfferInput, type OfferScope } from '../content/offer-demo';

import { localeFromPath } from '../i18n/locale';
import { useTranslations } from '../i18n/ui';

export function initializeOfferDemo(root: HTMLElement) {
  const locale = localeFromPath(location.pathname);
  const t = useTranslations(locale);
  const report = (message: string) => { feedback.textContent = t(message); };
  if (root.dataset.offerReady) return;
  const get = <T extends HTMLElement>(selector: string): T => {
    const node = root.querySelector<T>(selector);
    if (!node) throw new Error(`Missing offer demo element: ${selector}`);
    return node;
  };
  const form = get<HTMLFormElement>('[data-offer-form]');
  const note = get<HTMLTextAreaElement>('[data-offer-note]');
  const noteWrap = get('[data-offer-note-wrap]');
  const feedback = get('[data-offer-status]');
  const download = get<HTMLAnchorElement>('[data-offer-download]');
  const reset = get<HTMLButtonElement>('[data-offer-reset]');
  const apply = get<HTMLButtonElement>('[data-offer-apply]');
  const itemIcon = get<HTMLTemplateElement>('[data-offer-item-icon]');
  let applied: OfferInput = { scope: 'analysis', note: '' };
  let version = 1;
  const scope = (): OfferScope => {
    const value = new FormData(form).get('offer-scope');
    return value === 'implementation' || value === 'custom' ? value : 'analysis';
  };
  const text = (selector: string, value: string) => { get(selector).textContent = value; };
  const renderList = (selector: string, items: string[], icons = false) => {
    const list = get(selector);
    const nodes = items.map(value => {
      const li = document.createElement('li');
      if (icons) {
        const icon = document.createElement('span');
        icon.append(itemIcon.content.cloneNode(true));
        icon.setAttribute('aria-hidden', 'true');
        const content = document.createElement('span');
        content.textContent = value;
        li.append(icon, content);
      } else li.textContent = value;
      return li;
    });
    list.replaceChildren(...nodes);
  };
  const render = (input: OfferInput) => {
    const draft = createOfferDraft(input, locale);
    text('[data-offer-title]', draft.title);
    text('[data-offer-scope-label]', draft.scopeLabel);
    text('[data-offer-duration]', draft.duration);
    text('[data-offer-fee]', draft.fee);
    text('[data-offer-assumption]', draft.assumption);
    text('[data-offer-document-status]', draft.status);
    text('[data-offer-custom-text]', draft.note);
    text('[data-offer-version]', `v${version} · ${draft.scopeLabel}`);
    get('[data-offer-custom-result]').hidden = !draft.note;
    renderList('[data-offer-included]', draft.included, true);
    renderList('[data-offer-excluded]', draft.excluded);
    download.href = `data:text/markdown;charset=utf-8,${encodeURIComponent(offerToMarkdown(draft, locale))}`;
    root.dataset.offerApplied = input.scope;
  };
  const updateChoice = () => {
    const custom = scope() === 'custom';
    noteWrap.hidden = !custom;
    note.required = custom;
    note.disabled = !custom;
    note.setCustomValidity('');
    const pending = scope() !== applied.scope || (custom && note.value !== applied.note);
    root.dataset.offerPending = String(pending);
    apply.disabled = !pending;
    get('[data-offer-result-link]').hidden = pending || version === 1;
    reset.hidden = version === 1 && scope() === 'analysis' && !note.value;
    if (pending) report('Noch nicht übernommen. Klicke auf „Entwurf aktualisieren“.');
    else report(version === 1 ? 'Wähle den Umfang. Passe den Entwurf an.' : 'Übernommen. Entwurf und Download sind auf demselben Stand.');
  };
  form.addEventListener('change', updateChoice);
  note.addEventListener('input', updateChoice);
  form.addEventListener('submit', event => {
    event.preventDefault();
    const selected = scope();
    if (selected === 'custom' && !note.value.trim()) {
      note.setCustomValidity(t('Bitte beschreibe deine Ergänzung.'));
      note.reportValidity();
      return;
    }
    const input: OfferInput = { scope: selected, note: selected === 'custom' ? note.value : '' };
    if (input.scope === applied.scope && input.note === applied.note) return;
    version += 1;
    render(input);
    applied = input;
    updateChoice();
    report(selected === 'implementation'
      ? 'Pilot, Test und Übergabe ergänzt. Dauer und Beispielpreis angepasst.'
      : selected === 'custom'
        ? 'Ergänzung übernommen. Preis und Dauer bleiben offen.'
        : 'Analysepaket übernommen. Pilot entfernt, Dauer und Beispielpreis angepasst.');
  });
  reset.addEventListener('click', () => {
    form.reset();
    applied = { scope: 'analysis', note: '' };
    version = 1;
    render(applied);
    updateChoice();
    report('Zurückgesetzt. Du siehst den ursprünglichen Analyse-Entwurf.');
    get<HTMLInputElement>('input[value="analysis"]').focus();
  });
  updateChoice();
  root.dataset.offerReady = 'true';
}

document.querySelectorAll<HTMLElement>('[data-offer-demo]').forEach(initializeOfferDemo);

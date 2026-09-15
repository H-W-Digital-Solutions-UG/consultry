"""Generate a read-only source snapshot and inventories; never relocate originals."""
from pathlib import Path, PurePosixPath
from datetime import datetime, timezone
from collections import Counter, defaultdict
from html.parser import HTMLParser
import csv
import hashlib
import json
import os
import re
import shutil
import stat
import zipfile
from urllib.parse import unquote

REPO = Path('/Users/jules/dev/consultry')
BUNDLE = REPO / 'output/Consultry-Wissenskonsolidierung-2026-09-04'
INPUT = Path('/Users/jules/Downloads/Consultry_Handover_Paket_2026-08-26.zip')
SKIP = {'.git', 'node_modules', '.next', '.claude', '.codex', '.idea', '.vscode',
        '.playwright-cli', '.playwright-mcp', '__pycache__', '.venv', 'venv',
        '.pnpm-store', '.turbo', '.cache'}
TEXT = {'.md', '.txt', '.yaml', '.yml'}
OPEN_GROUPS = {
    'core_am_arbeitsfall_pruefen': '''define-the-consultry-core-product-boundary-and-module-contract
define-native-and-federated-record-authority-principles
define-knowledge-to-action-and-blind-spot-finding-contracts
define-model-bridge-product-contract
define-contextual-task-and-skill-product-contract
define-execution-and-validation-case-contracts
define-the-human-ai-responsibility-and-meaningful-oversight-contract
define-product-outcomes-acceptance-and-learning-requirements
define-product-horizons-and-the-first-validation-and-mvp-business-slice''',
    'begriffe_minimal_integrieren': '''define-the-product-invariant-and-tenant-variation-envelope
define-the-core-module-and-surface-contract
define-the-business-domain-and-lifecycle-canon
define-handoff-commitment-recovery-and-outcome-semantics
ratify-the-whole-product-operating-loop-and-handoff-contract''',
    'onboarding_am_ersten_fall': 'choose-the-tenant-extension-model',
    'kommerziell_parallel': '''define-paid-icp-and-buying-viability-contract
map-role-compression-and-responsibility-distribution-by-archetype
reconcile-pre-pivot-personas-to-the-ratified-actor-model''',
    'journey_referenz_bewahren': '''define-the-active-client-work-journey-anatomy-and-ux-mode-coverage
define-the-corporate-artifact-alignment-contract
specify-personal-daily-attention-and-capture-journey
specify-the-tender-to-review-ready-concept-journey
specify-the-existing-client-project-sensing-journey
specify-governed-reuse-and-service-productization-journey
map-remaining-whole-product-journey-families-and-specification-depth''',
    'durch_konsolidierung_verkuerzen': '''derive-the-product-capability-feature-and-requirement-coverage-map
complete-the-final-product-traceability-matrix
reconcile-the-canonical-model-into-source-documents
approve-the-product-definition-handoff''',
    'alte_mock_route_kennzeichnen': '''prototype-the-role-aware-human-ai-interaction-and-responsibility-contract
consolidate-the-three-slice-technical-poc-contract-and-gap-register
approve-the-definition-complete-three-slice-technical-poc-handoff''',
}
TICKET_GROUP = {slug: group for group, slugs in OPEN_GROUPS.items() for slug in slugs.splitlines()}

class DeckText(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.slides, self.current, self.depth, self.skip = [], None, 0, 0

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in {'script', 'style'}:
            self.skip += 1
        if tag == 'section':
            if self.current is not None:
                self.depth += 1
            elif 'slide' in a.get('class', '').split():
                self.current = dict(label=a.get('aria-label', ''), notes=a.get('data-speaker-notes', ''), text=[])
                self.depth = 1

    def handle_endtag(self, tag):
        if tag in {'script', 'style'} and self.skip:
            self.skip -= 1
        if tag == 'section' and self.current is not None:
            self.depth -= 1
            if not self.depth:
                self.slides.append(self.current)
                self.current = None

    def handle_data(self, data):
        if self.current is not None and not self.skip and data.strip():
            self.current['text'].append(' '.join(data.split()))

def extract_deck():
    deck = BUNDLE / 'archive/handover-2026-08-26/01_Deck_fuehrend/Consultry_Pitchdeck_v10.html'
    parser = DeckText()
    parser.feed(deck.read_text())
    assert len(parser.slides) == 15, len(parser.slides)
    lines = ['Mechanische HTML-Extraktion; kein Skript ausgeführt.',
             'Text aller Slide-Stages, einschließlich im Browser zunächst verborgener Inhalte.',
             'Quelle: ' + str(deck.relative_to(BUNDLE)), '']
    for i, slide in enumerate(parser.slides, 1):
        lines.extend([f'FOLIE {i}: {slide["label"]}', 'SLIDE-TEXT:', *slide['text'],
                      'SPRECHER-NOTIZ:', slide['notes'], ''])
    (BUNDLE/'review/PITCH_TEXT_NEU_EXTRAHIERT.txt').write_text('\n'.join(lines)+'\n')
    return len(parser.slides)

def digest(data):
    return hashlib.sha256(data).hexdigest()

def csvwrite(path, rows, fields):
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open('w', newline='', encoding='utf-8') as f:
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        w.writerows(rows)

def category(rel):
    s = str(rel)
    if s.startswith('product-definition/archive/'):
        return 'historisches_archiv_bewahren'
    if s.startswith('product-definition/latest/wayfinder/'):
        return 'entscheidungen_erhalten_status_neu_einordnen'
    if s.startswith('product-definition/latest/research/') or s.startswith('papers/'):
        return 'quellen_indexieren_unveraendert_einfrieren'
    if s.startswith('product-definition/latest/'):
        return 'inhalt_konsolidieren_dann_quelle_archivieren'
    if 'DESIGN_SYSTEM' in s or s.startswith('design/logos/'):
        return 'design_quelle_behalten_nicht_im_backend_start_laden'
    if s.startswith('marketing-site/'):
        return 'website_eigenstaendig_behalten'
    if s.endswith('.html') and 'Pitchdeck' in s:
        return 'pitch_vorgaenger_paket26aug_ist_neuer'
    if any(s.startswith(p) for p in ['presentation/', 'Consultry-Hypermock-', 'Motion-Teaser-', 'Consultry APP UI Mockups/', 'product-definition/AI-Audits_', 'output/']):
        return 'medien_und_prototypen_geparkt_archivkandidat'
    if s.startswith('nebius-bench-results/'):
        return 'benchmark_evidenz_historisch_keine_providerwahl'
    if s.startswith('KFW_utils/') or rel.suffix == '.xlsx':
        return 'finance_track_separat_behalten'
    return 'einzeln_pruefen'

def collect():
    inventory, selected, skipped = [], [], []
    for base, dirs, files in os.walk(REPO, followlinks=False):
        basep = Path(base)
        kept = []
        for d in sorted(dirs):
            p = basep / d
            if d in SKIP or p.is_symlink() or p == BUNDLE:
                skipped.append(str(p.relative_to(REPO)))
            else:
                kept.append(d)
        dirs[:] = kept
        for name in sorted(files):
            p = basep / name
            if p.is_symlink() or name == '.DS_Store' or name.startswith('.env') or name.startswith('~$'):
                continue
            rel, st = p.relative_to(REPO), p.stat()
            if name == BUNDLE.name + '.zip':
                continue
            keep = ((str(rel).startswith('product-definition/latest/') or str(rel).startswith('product-definition/archive/')) and p.suffix in TEXT)
            keep = keep or str(rel) in {'CLAUDE.md', 'product-definition/README.md', 'papers/KnowledgeSources.md', 'Consultry_Pitchdeck_vFML_isdas_geiel.html', 'presentation/Consultry_Pitchdeck_v10_08_LATEST_WIP.html', 'Consultry APP UI Mockups/state.js', 'marketing-site/package.json', 'marketing-site/src/app/api/waitlist/signup/route.ts', 'marketing-site/src/app/api/waitlist/qualify/route.ts'}
            row = dict(path=str(rel), bytes=st.st_size, modified_utc=datetime.fromtimestamp(st.st_mtime, timezone.utc).isoformat(), proposal=category(rel), snapshot='', sha256='')
            if keep:
                data = p.read_bytes()
                target = BUNDLE / 'archive/repo' / rel
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_bytes(data)
                row.update(snapshot=str(target.relative_to(BUNDLE)), sha256=digest(data))
                selected.append((target, data))
            inventory.append(row)
    csvwrite(BUNDLE / 'review/REPO_INVENTAR.csv', inventory, ['path', 'bytes', 'modified_utc', 'proposal', 'snapshot', 'sha256'])
    package_inputs = []
    with zipfile.ZipFile(INPUT) as z:
        assert sum(i.file_size for i in z.infolist()) < 100_000_000
        assert len(z.infolist()) < 500
        for i in z.infolist():
            rel = PurePosixPath(i.filename)
            assert not rel.is_absolute() and '..' not in rel.parts
            assert not stat.S_ISLNK(i.external_attr >> 16)
            if i.is_dir():
                continue
            data = z.read(i)
            extracted = ''
            if rel.parts[1] in {'00_START_HIER', '01_Deck_fuehrend', '02_Reviews_und_QA', '03_Messaging_und_Vertrieb', '05_Grundlagen_Architektur_Markt'} and rel.suffix in {'.md', '.txt', '.html'}:
                target = BUNDLE / 'archive/handover-2026-08-26' / Path(*rel.parts[1:])
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_bytes(data)
                extracted = str(target.relative_to(BUNDLE))
                selected.append((target, data))
            package_inputs.append(dict(member=i.filename, bytes=i.file_size, sha256=digest(data), extracted=extracted))
    original = BUNDLE / 'archive/input/Consultry_Handover_Paket_2026-08-26.zip'
    original.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(INPUT, original)
    csvwrite(BUNDLE / 'review/HANDOVER_INVENTAR.csv', package_inputs, ['member', 'bytes', 'sha256', 'extracted'])
    urls = defaultdict(set)
    for path, data in selected:
        if path.suffix not in TEXT:
            continue
        for u in re.findall(r'https?://[^\s<>"\)\]]+', data.decode('utf-8', errors='replace')):
            u = u.rstrip('.,;:*`|')
            if not any(k in u.lower() for k in ['token=', 'sig=', 'key=', 'localhost', '127.0.0.1']):
                urls[u].add(str(path.relative_to(BUNDLE)))
    csvwrite(BUNDLE / 'review/EXTERNE_QUELLEN_INVENTAR.csv', [dict(url=u, occurrence_files=' | '.join(sorted(ps)), verification='aus_quelltext_extrahiert_nicht_neu_verifiziert') for u, ps in sorted(urls.items())], ['url', 'occurrence_files', 'verification'])
    tickets = []
    for p in sorted((REPO / 'product-definition/latest/wayfinder').rglob('tickets/*.md')):
        s = p.read_text()
        field = lambda n: (re.search(r'^' + n + r':\s*(.*)$', s, re.M).group(1).strip().strip('"') if re.search(r'^' + n + r':\s*(.*)$', s, re.M) else '')
        group = TICKET_GROUP.get(p.stem, 'historische_resolution_aussagebezogen_pruefen')
        assert (field('status') == 'open') == (p.stem in TICKET_GROUP), p.name
        target = 'PRODUCT.md / DECISIONS.md'
        if group in {'core_am_arbeitsfall_pruefen','begriffe_minimal_integrieren','onboarding_am_ersten_fall'}:
            target = 'PRODUCT.md / BACKEND-START.md'
        tickets.append(dict(path=str(p.relative_to(REPO)), snapshot='archive/repo/'+str(p.relative_to(REPO)), title=field('title'), status=field('status'), closure=field('closure'), proposal_group=group, target=target, proposal='Unverbindliche Einordnung; Originalstatus bewahren. Siehe DECISIONS.md und review/ARCHIVPLAN.md'))
    assert sum(t['status'] == 'open' for t in tickets) == len(TICKET_GROUP) == 32
    csvwrite(BUNDLE / 'review/WAYFINDER_TICKETS.csv', tickets, ['path', 'snapshot', 'title', 'status', 'closure', 'proposal_group', 'target', 'proposal'])
    duplicates = defaultdict(list)
    for p, data in selected:
        duplicates[digest(data)].append(str(p.relative_to(BUNDLE)))
    summary = dict(inventory_files=len(inventory), inventory_bytes=sum(r['bytes'] for r in inventory), repo_snapshots=sum(bool(r['snapshot']) for r in inventory), handover_members=len(package_inputs), extracted_handover=sum(bool(r['extracted']) for r in package_inputs), extracted_deck_slides=extract_deck(), distinct_external_urls=len(urls), ticket_statuses=dict(Counter(t['status'] for t in tickets)), open_ticket_groups=dict(Counter(t['proposal_group'] for t in tickets if t['status']=='open')), excluded_directories=skipped, duplicate_snapshot_groups=[v for v in duplicates.values() if len(v)>1], original_zip_sha256=digest(INPUT.read_bytes()))
    (BUNDLE / 'review/INVENTAR_ZUSAMMENFASSUNG.json').write_text(json.dumps(summary, indent=2, ensure_ascii=False)+'\n')
    print(json.dumps({k:v for k,v in summary.items() if k not in {'excluded_directories','duplicate_snapshot_groups'}}, indent=2))

def verify():
    broken, checked = [], 0
    generated = {BUNDLE/'MANIFEST.json', BUNDLE/'review/PRUEFUNG.json'}
    docs = list(BUNDLE.glob('*.md')) + list((BUNDLE/'review').glob('*.md'))
    for p in docs:
        for match in re.finditer(r'\]\((<[^>]+>|[^)]+)\)', p.read_text()):
            url = match.group(1).strip('<>')
            if url.startswith(('https://','http://','#')):
                continue
            local = unquote(url.split('#',1)[0])
            checked += 1
            target = (p.parent/local).resolve()
            if not target.exists() and target not in generated:
                broken.append(dict(file=str(p.relative_to(BUNDLE)), link=url))
    assert not broken, json.dumps(broken, ensure_ascii=False)
    with (BUNDLE/'review/REPO_INVENTAR.csv').open() as f:
        snapshots = [r for r in csv.DictReader(f) if r['snapshot']]
    for r in snapshots:
        assert digest((REPO/r['path']).read_bytes()) == r['sha256'], r['path']
        assert digest((BUNDLE/r['snapshot']).read_bytes()) == r['sha256'], r['snapshot']
    with zipfile.ZipFile(INPUT) as z:
        with (BUNDLE/'review/HANDOVER_INVENTAR.csv').open() as f:
            members = list(csv.DictReader(f))
        for r in members:
            assert digest(z.read(r['member'])) == r['sha256']
            if r['extracted']:
                assert digest((BUNDLE/r['extracted']).read_bytes()) == r['sha256']
    assert digest(INPUT.read_bytes()) == digest((BUNDLE/'archive/input'/INPUT.name).read_bytes())
    result = dict(authored_markdown_files=len(docs), local_links_checked=checked, broken_local_links=broken, unchanged_repo_snapshots=len(snapshots), verified_input_members=len(members), original_input_zip_unchanged=True, originals_moved_or_deleted=False, archived_original_links_not_rewritten=True)
    (BUNDLE/'review/PRUEFUNG.json').write_text(json.dumps(result, indent=2, ensure_ascii=False)+'\n')
    print(json.dumps(result,indent=2))

def package():
    files = []
    for p in sorted(BUNDLE.rglob('*')):
        if p.is_file() and p.name != 'MANIFEST.json':
            data = p.read_bytes()
            files.append(dict(path=str(p.relative_to(BUNDLE)), bytes=len(data), sha256=digest(data)))
    manifest = dict(date='2026-09-04', status='Konsolidierung und Organisationsvorschlag; Quellen nicht verschoben', maintained_documents=['INDEX.md','CONTEXT.md','PRODUCT.md','DECISIONS.md','BACKEND-START.md','SOURCES.md'], files=files)
    (BUNDLE/'MANIFEST.json').write_text(json.dumps(manifest, indent=2, ensure_ascii=False)+'\n')
    assert (BUNDLE/'review/PRUEFUNG.json').is_file()
    output = BUNDLE.with_suffix('.zip')
    with zipfile.ZipFile(output, 'w', zipfile.ZIP_DEFLATED) as z:
        for p in sorted(BUNDLE.rglob('*')):
            if p.is_file():
                z.write(p, str(Path(BUNDLE.name)/p.relative_to(BUNDLE)))
    with zipfile.ZipFile(output) as z:
        assert z.testzip() is None
        for f in files:
            assert digest(z.read(BUNDLE.name+'/'+f['path'])) == f['sha256']
    print(json.dumps(dict(zip=str(output), bytes=output.stat().st_size, files=len(files)+1, sha256=digest(output.read_bytes())),indent=2))

if __name__ == '__main__':
    import sys
    if '--package' in sys.argv:
        verify()
        package()
    elif '--verify' in sys.argv:
        verify()
    else:
        collect()

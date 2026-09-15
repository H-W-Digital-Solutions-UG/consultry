"""One-off, guarded documentation migration. Generated records are historical evidence."""
import csv
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys
import zipfile

ROOT = Path('/Users/jules/dev/consultry')
PD = ROOT / 'product-definition'
OLD = PD / 'latest'
BASE = PD / 'archive/baseline-before-consolidation-2026-09-10'
NEW = BASE / 'latest'
REC = PD / 'archive/migration-2026-09-10'
PACK = ROOT / 'output/Consultry-Wissenskonsolidierung-2026-09-04'
LIVE = ['INDEX.md', 'CONTEXT.md', 'PRODUCT.md', 'DECISIONS.md', 'BACKEND-START.md', 'SOURCES.md']
PRUNE = {'.git', '.claude', '.codex', 'node_modules', '.next', '_BKP', 'output', 'outputs', '.idea', '.vscode'}
LINK = re.compile(r'\]\((<[^>]+>|[^\s)]+)([^)]*)\)')

def digest(p):
    b = p.read_bytes()
    return {'size': len(b), 'sha256': hashlib.sha256(b).hexdigest()}

def dump(p, value):
    p.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n')

def markdown_files():
    for folder, dirs, files in os.walk(ROOT):
        dirs[:] = [d for d in dirs if d not in PRUNE]
        for name in files:
            if name.endswith('.md'):
                yield Path(folder) / name

def target_after(p):
    if p == OLD or OLD in p.parents:
        return NEW / p.relative_to(OLD)
    if p == PD / 'Consultry_Vision.html':
        return BASE / 'supplemental/Consultry_Vision.html'
    return p

def local_target(file, url):
    url = url.strip('<>')
    if not url or url.startswith('#') or re.match(r'^[a-zA-Z][\w+.-]*:', url):
        return None
    from urllib.parse import unquote
    path = unquote(url.split('#')[0].split('?')[0])
    return Path(os.path.normpath(str(file.parent / path)))

def rebase(text, oldfile, newfile):
    def replace(m):
        raw = m.group(1)
        url = raw.strip('<>')
        target = local_target(oldfile, url)
        if target is None:
            return m.group(0)
        moved = target_after(target)
        if oldfile == newfile and target == moved:
            return m.group(0)
        fragment = ('#' + url.split('#', 1)[1]) if '#' in url else ''
        newurl = os.path.relpath(moved, newfile.parent) + fragment
        if raw.startswith('<') or ' ' in newurl:
            newurl = '<' + newurl + '>'
        return '](' + newurl + m.group(2) + ')'
    return LINK.sub(replace, text)

def prepare():
    assert OLD.is_dir() and not NEW.exists()
    assert not (REC / 'BEFORE.json').exists()
    before = {}
    for p in OLD.rglob('*'):
        if p.is_file():
            assert not p.is_symlink(), p
            before[str(p.relative_to(ROOT))] = digest(p)
    for p in markdown_files():
        if PD / 'archive/migration-2026-09-10' in p.parents:
            continue
        s = p.read_text(errors='replace')
        if rebase(s, p, target_after(p)) != s or p in [ROOT/'CLAUDE.md', PD/'README.md', PD/'archive/README.md']:
            before[str(p.relative_to(ROOT))] = digest(p)
    for p in [PD/'archive/MANIFEST.yaml', PD/'Consultry_Vision.html']:
        if p.exists():
            before[str(p.relative_to(ROOT))] = digest(p)
    with zipfile.ZipFile(REC/'BEFORE.zip', 'x', zipfile.ZIP_DEFLATED) as z:
        for rel in sorted(before):
            z.write(ROOT/rel, rel)
    with zipfile.ZipFile(REC/'BEFORE.zip') as z:
        assert z.testzip() is None
        for rel, record in before.items():
            assert hashlib.sha256(z.read(rel)).hexdigest() == record['sha256']
    dump(REC/'BEFORE.json', before)
    tickets = []
    for p in sorted((OLD/'wayfinder/consultry-product-platform-baseline/tickets').glob('*.md')):
        s = p.read_text()
        field = lambda key: (re.search(r'^'+key+r':\s*(.*)$', s, re.M).group(1) if re.search(r'^'+key+r':\s*(.*)$', s, re.M) else '')
        tickets.append({'original': str(p.relative_to(ROOT)), 'archive':str(target_after(p).relative_to(ROOT)), 'title':field('title'), 'status':field('status'), 'closure':field('closure'), 'sha256':digest(p)['sha256']})
    dump(REC/'TICKETS-BEFORE.json', tickets)
    (REC/'GIT-STATUS-BEFORE.txt').write_text(subprocess.check_output(['git','status','--short'],cwd=ROOT,text=True))
    print(json.dumps({'secured_files':len(before),'tickets':len(tickets),'recovery_zip':str(REC/'BEFORE.zip')}))

def migrate():
    before=json.loads((REC/'BEFORE.json').read_text())
    for rel, info in before.items():
        assert digest(ROOT/rel) == info, f'Concurrent change before migration: {rel}'
    assert not NEW.exists()
    BASE.mkdir(parents=True, exist_ok=True)
    OLD.rename(NEW)
    (BASE/'supplemental').mkdir()
    (PD/'Consultry_Vision.html').rename(BASE/'supplemental/Consultry_Vision.html')
    changes=[]
    for rel in before:
        original=ROOT/rel
        moved=target_after(original)
        if moved.suffix != '.md':
            continue
        s=moved.read_text()
        t=rebase(s, original, moved)
        if s != t:
            moved.write_text(t)
            changes.append({'path':str(moved.relative_to(ROOT)), 'operation':'relative link rebasing only'})
    # Preserve the proposal and its inventories as a dated source.
    shutil.copytree(PACK/'review', REC/'proposal-review')
    shutil.copytree(PACK/'archive/handover-2026-08-26', PD/'archive/handover-2026-08-26')
    (PD/'archive/handover-2026-08-26/original').mkdir()
    shutil.copy2(PACK/'archive/input/Consultry_Handover_Paket_2026-08-26.zip',PD/'archive/handover-2026-08-26/original/Consultry_Handover_Paket_2026-08-26.zip')
    # Start authoring from the reviewed six-document proposal; later patches reconcile it.
    for name in LIVE:
        assert not (PD/name).exists()
        s=(PACK/name).read_text()
        s=s.replace('archive/repo/product-definition/latest/', 'archive/baseline-before-consolidation-2026-09-10/latest/')
        s=s.replace('archive/repo/product-definition/archive/', 'archive/')
        s=s.replace('archive/repo/', '../')
        s=s.replace('archive/input/', 'archive/handover-2026-08-26/original/')
        s=s.replace('review/', 'archive/migration-2026-09-10/proposal-review/')
        (PD/name).write_text(s)
    dump(REC/'LINK-REBASES.json', changes)
    with (REC/'PATH-MAP.csv').open('w', newline='') as f:
        w=csv.writer(f); w.writerow(['original','current','sha256_before','sha256_after','change'])
        for rel,info in sorted(before.items()):
            dest=target_after(ROOT/rel)
            w.writerow([rel,str(dest.relative_to(ROOT)),info['sha256'],digest(dest)['sha256'],'link-rebase' if digest(dest)!=info else 'byte-identical'])
    print(json.dumps({'archived_latest_files':sum(p.is_file() for p in NEW.rglob('*')),'link_rebased_files':len(changes),'leading_docs':LIVE}))

def verify():
    before=json.loads((REC/'BEFORE.json').read_text())
    assert not OLD.exists()
    with zipfile.ZipFile(REC/'BEFORE.zip') as z:
        assert z.testzip() is None
        for rel, info in before.items():
            assert hashlib.sha256(z.read(rel)).hexdigest()==info['sha256']
            if rel.startswith('product-definition/latest/'):
                dest=target_after(ROOT/rel)
                assert dest.exists()
                expected=z.read(rel)
                if dest.suffix=='.md':
                    expected=rebase(expected.decode(),ROOT/rel,dest).encode()
                assert dest.read_bytes()==expected, f'Unexpected archive content change: {dest}'
    tickets=json.loads((REC/'TICKETS-BEFORE.json').read_text())
    assert len(list((NEW/'wayfinder/consultry-product-platform-baseline/tickets').glob('*.md')))==len(tickets)
    from collections import Counter
    counts=Counter(t['status'] for t in tickets)
    failures=[]; total=0
    for p in [PD/n for n in LIVE]+[PD/'README.md',PD/'archive/README.md',BASE/'README.md',REC/'REPORT.md',PD/'archive/session-2026-09-05-wissensledger/INSIGHTS.md']:
        assert p.exists()
        for m in LINK.finditer(p.read_text()):
            target=local_target(p,m.group(1))
            if target:
                total+=1
                if not target.exists() and target != REC/'VERIFICATION.json':
                    failures.append({'file':str(p.relative_to(ROOT)),'target':m.group(1)})
    historical=[]
    for p in NEW.rglob('*.md'):
        oldfile=OLD/p.relative_to(NEW)
        for m in LINK.finditer(p.read_text()):
            target=local_target(p,m.group(1))
            if target and not target.exists():
                historical.append({'file':str(p.relative_to(ROOT)),'target':m.group(1),'status':'historical missing reference; preserved in original snapshot'})
    session=json.loads((PD/'archive/session-2026-09-05-wissensledger/EXCERPTS.json').read_text())
    assert len(session['turns'])==session['coverage']['selectedTurns']==11
    assert len({t['turnId'] for t in session['turns']})==11
    assert not ({t['turnId'] for t in session['turns']} & set(session['coverage']['excludedTurns']))
    assert session['coverage']['turnsRead']==15 and session['coverage']['hasMore'] is False
    # Reconcile the old ticket grouping against all 59 retained records.
    with (REC/'proposal-review/WAYFINDER_TICKETS.csv').open(newline='') as f:
        inventory=list(csv.DictReader(f))
    assert {r['path']:r['status'] for r in inventory}=={t['original']:t['status'] for t in tickets}
    # Assert that every rebased archived link still resolves to the mapped original target.
    with zipfile.ZipFile(REC/'BEFORE.zip') as z:
        for rel in before:
            if not rel.startswith('product-definition/latest/') or not rel.endswith('.md'):
                continue
            orig=ROOT/rel; dest=target_after(orig)
            old_links=list(LINK.finditer(z.read(rel).decode()))
            new_links=list(LINK.finditer(dest.read_text()))
            assert len(old_links)==len(new_links)
            for a,b in zip(old_links,new_links):
                oldtarget=local_target(orig,a.group(1)); newtarget=local_target(dest,b.group(1))
                if oldtarget:
                    assert newtarget==target_after(oldtarget), (rel,a.group(1),b.group(1))
    report={'date':'2026-09-10','archive_files':sum(p.is_file() for p in NEW.rglob('*')),'png_preserved':len(list(NEW.rglob('*.png'))),'tickets':dict(counts),'leading_files':LIVE,'active_and_routing_local_links':total,'broken_active_links':failures,'historical_missing_references':len(historical),'archive_content_verified':'byte-identical to BEFORE.zip except deterministic link rebasing; original and relocated link targets reconciled','session_turns_read':15,'session_turns_selected':11,'session_hosting_turns_excluded':4,'model_hosting':'excluded from new session import; old sources preserved as history'}
    dump(REC/'VERIFICATION.json',report); dump(REC/'HISTORICAL-LINK-GAPS.json',historical)
    assert not failures, failures
    print(json.dumps(report,ensure_ascii=False))

def package():
    verify()
    files=[PD/n for n in LIVE]+[PD/'README.md',ROOT/'CLAUDE.md',ROOT/'papers/KnowledgeSources.md',ROOT/'Consultry APP UI Mockups/state.js',ROOT/'marketing-site/package.json']
    files+=sorted(p for p in (PD/'archive').rglob('*') if p.is_file() and '__pycache__' not in p.parts)
    manifest={str(p.relative_to(ROOT)):digest(p) for p in files}
    output=ROOT/'output/Consultry-Produktbasis-2026-09-10.zip'
    assert not output.exists(), 'Refuse to replace an existing export.'
    prefix='Consultry-Produktbasis-2026-09-10/'
    with zipfile.ZipFile(output,'x',zipfile.ZIP_DEFLATED) as z:
        for p in files:
            z.write(p,prefix+str(p.relative_to(ROOT)))
        z.writestr(prefix+'MANIFEST.json',json.dumps({'date':'2026-09-10','entrypoint':'product-definition/INDEX.md','scope':'six leading documents, archive, migration evidence and three referenced repository source files; not a full media/code backup','files':manifest},ensure_ascii=False,indent=2)+'\n')
        z.writestr(prefix+'START-HIER.txt','Einstieg: product-definition/INDEX.md\nAktuelle Fragen: product-definition/DECISIONS.md\nHistorische Hostingquellen im Archiv sind keine aktuellen Produktentscheidungen.\nDieses Paket ist ein datierter Snapshot, kein weiterer lebender Dokumentationsbaum.\n')
    with zipfile.ZipFile(output) as z:
        assert z.testzip() is None
        for rel, info in manifest.items():
            assert hashlib.sha256(z.read(prefix+rel)).hexdigest()==info['sha256']
        # Leading documentation targets must be present inside the portable package.
        names=set(z.namelist())
        for name in LIVE:
            p=PD/name
            for m in LINK.finditer(p.read_text()):
                target=local_target(p,m.group(1))
                if target and target.is_file():
                    assert prefix+str(target.relative_to(ROOT)) in names, (name,m.group(1))
    print(json.dumps({'zip':str(output),'files':len(files),'zip_bytes':output.stat().st_size,'crc_and_sha256':'passed','leading_doc_file_links':'present in ZIP'},ensure_ascii=False))

if __name__=='__main__':
    {'prepare':prepare,'migrate':migrate,'verify':verify,'package':package}[sys.argv[1]]()

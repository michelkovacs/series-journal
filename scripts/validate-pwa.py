"""Validate PWA scope, generated install metadata, icons and offline assets."""
from pathlib import Path
from urllib.parse import urljoin
import json,re,struct
ROOT=Path(__file__).resolve().parents[1]
SITE='https://michelkovacs.github.io/series-journal/'
manifest=json.loads((ROOT/'manifest.webmanifest').read_text())
assert urljoin(SITE+'manifest.webmanifest',manifest['scope'])==SITE
assert urljoin('https://michelkovacs.github.io/',manifest['id'])==SITE
assert urljoin(SITE+'manifest.webmanifest',manifest['start_url']).startswith(SITE)
assert manifest['display']=='standalone'
for icon in manifest['icons']:
 path=ROOT/icon['src'];content=path.read_bytes();assert content[:8]==b'\x89PNG\r\n\x1a\n'
 width,height=struct.unpack('>II',content[16:24]);assert f'{width}x{height}'==icon['sizes']
assert any(i['sizes']=='192x192' and i['purpose']=='any' for i in manifest['icons'])
assert any(i['sizes']=='512x512' and i['purpose']=='maskable' for i in manifest['icons'])
assets=json.loads((ROOT/'pwa-assets.js').read_text().split(' = ',1)[1].strip().removesuffix(';'))
assert len(set(assets['files']))==len(assets['files'])
assert 'offline.html' in assets['files'] and 'for-all-mankind-data.js' in assets['files']
for path in assets['files']:
 assert not path.startswith(('/','http:','https:'))
 assert (ROOT/path).is_file(),path
pages=[ROOT/name for name in ['index.html','dragon.html','three-body.html','for-all-mankind.html','offline.html']]+sorted((ROOT/'personagens').glob('**/index.html'))
for page in pages:
 text=page.read_text();assert text.count('<!-- pwa:start -->')==text.count('<!-- pwa:end -->')==1,page
 match=re.search(r'<link rel="manifest" href="([^"]+)"',text);assert match,page
 public=SITE+str(page.relative_to(ROOT));assert urljoin(public,match.group(1))==SITE+'manifest.webmanifest',page
 script=re.search(r'<script src="([^"]*pwa\.js[^\"]*)" defer>',text);assert script,page
 assert urljoin(public,script.group(1)).split('?')[0]==SITE+'pwa.js',page
print(f'PASS: PWA scope/id, PNG icons, {len(assets["files"])} offline assets and install metadata on {len(pages)} pages.')

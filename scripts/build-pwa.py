"""Add subpath-safe install metadata and build a deterministic offline asset list."""
from pathlib import Path
import hashlib,json,re
ROOT=Path(__file__).resolve().parents[1]
pages=[ROOT/name for name in ['index.html','dragon.html','three-body.html','for-all-mankind.html','offline.html']]+sorted((ROOT/'personagens').glob('**/index.html'))
for page in pages:
 if not page.exists():continue
 prefix='../'*(len(page.relative_to(ROOT).parts)-1)
 block=f'''<!-- pwa:start --><link rel="manifest" href="{prefix}manifest.webmanifest"><meta name="theme-color" content="#0b3558"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="apple-mobile-web-app-title" content="Series Journal"><link rel="apple-touch-icon" href="{prefix}assets/pwa/icon-180.png"><link rel="icon" type="image/png" href="{prefix}assets/pwa/icon-192.png"><link rel="stylesheet" href="{prefix}pwa.css?v=pwa-1"><script src="{prefix}pwa.js?v=pwa-1" defer></script><!-- pwa:end -->'''
 text=re.sub(r'<!-- pwa:start -->.*?<!-- pwa:end -->','',page.read_text(),flags=re.S)
 page.write_text(text.replace('</head>',block+'</head>',1))
core=['index.html','dragon.html','three-body.html','for-all-mankind.html','offline.html','style.css','pwa.css','manifest.webmanifest','assets/fonts/manrope-latin-wght-normal.woff2','assets/for-all-mankind/cover-blue.jpg','assets/series/house-of-the-dragon.webp','assets/series/three-body.webp']
core+=['assets/pwa/'+name for name in ['icon-180.png','icon-192.png','icon-512.png','icon-maskable-512.png']]
core+=sorted(p.name for p in ROOT.glob('*.js') if p.name not in ['sw.js','pwa-assets.js'])
assert len(core)==len(set(core))
version=hashlib.sha256()
for name in core+[str(p.relative_to(ROOT)) for p in pages if p.exists()]+['sw.js']:
 path=ROOT/name;assert path.is_file(),name
 version.update(name.encode());version.update(hashlib.sha256(path.read_bytes()).digest())
(ROOT/'pwa-assets.js').write_text('const PWA_ASSETS = '+json.dumps(dict(version=version.hexdigest()[:16],files=core),ensure_ascii=False,indent=2)+';\n')
print(f'PWA: {len(pages)} pages integrated; {len(core)} core assets; version {version.hexdigest()[:16]}.')

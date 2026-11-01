"""Render detailed, unlabeled Westeros coastlines from the vendored Atlas geometry."""
from pathlib import Path
import json, random
root=Path(__file__).resolve().parents[1]
polygons=json.loads((root/'assets/maps/westeros-geometry.json').read_text())
def xy(p):return (p[0]*30,(40-p[1])*30)
paths=[]
for polygon in polygons:
 d=' '.join('M'+' '.join(f'{x:.2f},{y:.2f}' for x,y in map(xy,ring))+'Z' for ring in polygon)
 paths.append(d)
land=' '.join(paths)
rng=random.Random(24)
mountains=[]
for cx,cy,count in [(605,795,36),(310,1195,32),(380,525,22),(300,1050,18),(510,1360,26)]:
 for i in range(count):
  x=cx+rng.uniform(-65,65);y=cy+rng.uniform(-80,80);h=rng.uniform(9,22)
  mountains.append(f'<path d="M{x-h:.1f},{y+h:.1f} {x:.1f},{y-h:.1f} {x+h:.1f},{y+h:.1f}"/><path d="m{x:.1f},{y-h:.1f} {h*.3:.1f},{h*1.6:.1f} {h*.7:.1f},{h*.4:.1f}" fill="#8f957b" opacity=".4"/>')
svg=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2000 -2000 5200 5650">
<title>Westeros — base cartográfica sem rótulos</title><desc>Contornos detalhados de Westeros derivados de Atlas of Thrones. Extensão ilustrativa da costa oeste de Essos e relevo decorativo. Nenhuma informação de enredo ou domínio político está gravada na base.</desc>
<defs><linearGradient id="ocean" x2=".8" y2="1"><stop stop-color="#b7d3d5"/><stop offset="1" stop-color="#7da7b4"/></linearGradient><linearGradient id="land" x2=".4" y2="1"><stop stop-color="#d6ded0"/><stop offset=".5" stop-color="#d7d4b4"/><stop offset="1" stop-color="#d7b88a"/></linearGradient><pattern id="waves" width="36" height="30" patternUnits="userSpaceOnUse"><path d="M2 18q7-4 14 0t14 0" fill="none" stroke="#e5f1e7" stroke-width=".5" opacity=".25"/></pattern><filter id="paper"><feTurbulence baseFrequency=".35" numOctaves="3" seed="7" type="fractalNoise"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".11"/></feComponentTransfer><feBlend in="SourceGraphic" mode="multiply"/></filter><clipPath id="landClip"><path d="{land}"/></clipPath></defs>
<path fill="url(#ocean)" d="M-2000-2000h5200v5650H-2000z"/><path fill="url(#waves)" d="M-2000-2000h5200v5650H-2000z"/>
<path d="{land}" fill="none" stroke="#d3e0d4" stroke-width="12" stroke-linejoin="round" opacity=".4"/>
<path d="{land}" fill="url(#land)" fill-rule="evenodd" stroke="#6f8276" stroke-width="1.3" stroke-linejoin="round" filter="url(#paper)"/>
<!-- The narrow eastern context is an illustrative coast, not political borders. -->
<path d="M1020 420 995 490 1020 560 980 630 997 700 964 765 989 815 960 875 975 930 950 990 939 1030 934 1061 952 1090 935 1138 909 1177 887 1217 866 1242 855 1280 883 1299 900 1282 931 1305 982 1297 1009 1331 1021 1390 1070 1415 1061 1475 1113 1504 1110 1560 3200 1585V420Z" fill="#d8c7a4" stroke="#7f8a76" stroke-width="1.8" filter="url(#paper)"/>
<g fill="#cdbb95" stroke="#7f8a76" stroke-width="1.2"><path d="m833 1355 13 4 3 11-12 7-9-9Z"/><path d="m805 1385 14-2 7 11-12 8Z"/><path d="m783 1415 13-4 4 13-9 8Z"/><path d="m851 1408 11-5 8 11-13 9Z"/></g>
<g clip-path="url(#landClip)"><g fill="#a6ac87" fill-opacity=".3" stroke="#8f9679" stroke-width="1">{''.join(mountains)}</g><g fill="none" stroke="#7fabb2" stroke-width="3" stroke-linecap="round"><path d="M377 888q30 12 46 9t25 18 48 5 30-8 43 8 60-8"/><path d="M463 863q-12 30-13 45"/><path d="M500 1045q-35 10-53 24t-21 10 27 5 38-7 81 6"/></g><ellipse cx="505" cy="969" rx="12" ry="20" fill="#82abb0" stroke="#6e9298" stroke-width="1"/></g>
<g stroke="#e9f2e7" stroke-width="2" fill="none" opacity=".7"><path d="M90 280v70m-35-35h70m-35-35-8 20 8-5 8 5Z"/></g><text x="90" y="265" text-anchor="middle" fill="#eff4e9" font-size="20" font-family="serif">N</text>
</svg>'''
(root/'assets/maps/westeros.svg').write_text(svg)
print('Rendered detailed Westeros atlas from',sum(len(r) for p in polygons for r in p),'coastline vertices')

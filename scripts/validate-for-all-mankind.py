"""Check catalog accuracy, character/spoiler boundaries and generated static URLs."""
from pathlib import Path
import json,re,xml.etree.ElementTree as ET
ROOT=Path(__file__).resolve().parents[1]
def data(file):return json.loads((ROOT/file).read_text().split(' = ',1)[1].strip().removesuffix(';'))
d=data('for-all-mankind-data.js');manifest=data('character-directory.js')['for-all-mankind'];presence=data('episode-presence.js')['for-all-mankind'];papers=data('for-all-mankind-newspapers.js');catalog=json.loads((ROOT/'docs/for-all-mankind-episode-catalog.json').read_text())
characters={c['id']:c for c in d['characters']};assert len(characters)==len(d['characters'])
assert len(d['episodes'])==len(catalog['episodes'])==50
assert len(d['seasons'])==len(papers)==5
assert set(characters)==set(manifest['characters'])==set(presence['characters'])
for index,(ep,source) in enumerate(zip(d['episodes'],catalog['episodes']),1):
 assert ep['number']==index
 for key in ['season','seasonEpisode','title','date']:assert ep[key]==source[key],(index,key)
 assert len(ep['events'])==3
 for event in ep['events']:
  assert 1<=len(event['paragraphs'])<=2
  for cid in event['characters']:
   assert cid in characters and characters[cid]['from']<=index,(index,cid)
   assert index in presence['characters'][cid]
 assert (ROOT/ep['image']).is_file()
for link in d['links']:
 assert link['a'] in characters and link['b'] in characters
 assert max(characters[link['a']]['from'],characters[link['b']]['from'])<=link['start']<=link['end']<=50
for cid,entries in d['photos'].items():
 for first,path in entries:assert first>=characters[cid]['from'] and (ROOT/path).is_file()
for cid,item in manifest['characters'].items():
 page=ROOT/item['path']/'index.html';assert page.is_file()
 text=page.read_text();record=json.loads(re.search(r'<script type="application/json" id="characterRecord">(.*?)</script>',text).group(1));assert record['id']==cid
 assert record['episodes']==manifest['episodes']
 assert len(record['history'])>0,(cid,'missing history')
 assert 'https://michelkovacs.github.io/series-journal/'+item['path'] in text
 for entry in record['history']:assert entry['episode']>=characters[cid]['from']
 for relation in record['relations']:assert relation['start']>=characters[relation['id']]['from']
ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'};urls=[x.text for x in ET.parse(ROOT/'sitemap.xml').findall('s:url/s:loc',ns)]
assert len(set(urls))==len(urls)
for item in manifest['characters'].values():assert 'https://michelkovacs.github.io/series-journal/'+item['path'] in urls
print(f'PASS: 5 seasons, 50 catalog-verified episodes, 150 passages, {len(characters)} static profiles, photos, relationships, presence index and sitemap.')

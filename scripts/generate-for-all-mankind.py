"""Generate the multi-season dossier's newspapers, character pages and indexes.

Called by generate-character-pages.py; may also be run after the base generator.
Episode numbers in data are cumulative; public URLs always use season/local episode.
"""
from pathlib import Path
import json,re,html,unicodedata
ROOT=Path(__file__).resolve().parents[1]
SITE='https://michelkovacs.github.io/series-journal/'
def readjs(file):return json.loads((ROOT/file).read_text().split(' = ',1)[1].strip().removesuffix(';'))
def writejs(file,name,data):(ROOT/file).write_text('const '+name+' = '+json.dumps(data,ensure_ascii=False,indent=2)+';\n')
def slug(s):return re.sub('[^a-z0-9]+','-',unicodedata.normalize('NFKD',s).encode('ascii','ignore').decode().lower()).strip('-')
def esc(x):return html.escape(str(x),quote=True)
def encoded(x):return json.dumps(x,ensure_ascii=False).replace('<','\\u003c')
d=readjs('for-all-mankind-data.js');eps=d['episodes'];characters={c['id']:c for c in d['characters']}
meta=[{k:e[k] for k in ['number','season','seasonEpisode','title']} for e in eps]
categories={'astronautas':'Astronautas','nasa':'NASA e engenharia','terra':'Famílias e comunidade','sovieticos':'Programa soviético e aliados','helios':'Helios e trabalhadores','defesa':'Governo e segurança'}
tones=['rose','green','blue','violet','amber','teal']
manifest=readjs('character-directory.js');info=dict(title='For All Mankind',page='for-all-mankind.html',maxEpisode=len(eps),knownUntil=len(eps),episodes=meta,characters={})
for c in characters.values():info['characters'][c['id']]=dict(name=c['name'],path=f"personagens/for-all-mankind/{slug(c['name'])}/",fromEpisode=c['from'],photos=d['photos'].get(c['id'],[]))
manifest['for-all-mankind']=info;writejs('character-directory.js','CHARACTER_DIRECTORY',manifest)
first_counts={}
for c in characters.values():first_counts[c['name'].split()[0]]=first_counts.get(c['name'].split()[0],0)+1
def named(c,text):
 names=[c['name']]
 if first_counts[c['name'].split()[0]]==1:names.append(c['name'].split()[0])
 if c['id']=='von-braun':names.append('von Braun')
 return any(re.search(r'(?<!\w)'+re.escape(name)+r'(?!\w)',text,re.I) for name in names)
def mentioned(c,event):
 return c['id'] in event['characters'] or named(c,' '.join(event.get('paragraphs') or [event['text']]))
presence=readjs('episode-presence.js');index={c['id']:[e['number'] for e in eps if e['number']>=c['from'] and any(mentioned(c,a) for a in e['events'])] for c in characters.values()};presence['for-all-mankind']=dict(maxEpisode=len(eps),knownUntil=len(eps),episodes=meta,characters=index);writejs('episode-presence.js','EPISODE_PRESENCE',presence)
for c in characters.values():
 details=info['characters'][c['id']];path=details['path'];canonical=SITE+path
 category=dict(id=c['cat'],label=categories[c['cat']],tone=tones[list(categories).index(c['cat'])])
 history=[]
 for e in eps:
  matches=[a for a in e['events'] if e['number']>=c['from'] and mentioned(c,a)]
  if matches:
   text=next((p for p in matches[0].get('paragraphs',[]) if named(c,p)),matches[0]['text'])
   history.append(dict(episode=e['number'],season=e['season'],seasonEpisode=e['seasonEpisode'],title=e['title'],text=text))
 relations=[]
 for link in d['links']:
  if c['id'] in [link['a'],link['b']]:
   cid=link['b'] if link['a']==c['id'] else link['a'];other=characters[cid]
   relations.append(dict(id=cid,name=other['name'],path=info['characters'][cid]['path'],label=link['label'],start=max(link['start'],other['from']),end=link['end']))
 record=dict(series='for-all-mankind',seriesTitle='For All Mankind',seriesPage='for-all-mankind.html',id=c['id'],name=c['name'],baseDescription=c['desc'],fromEpisode=c['from'],maxEpisode=len(eps),knownUntil=len(eps),category=category,house=None,kind='person',imageCaption='Personagem em For All Mankind',photos=details['photos'],photoCandidates=[],history=history,relations=relations,episodes=meta)
 description=f"{c['name']} em For All Mankind: perfil, conexões e histórico das cinco temporadas, limitado ao episódio que você escolher."
 seasons=''.join(f'<option value="{s["number"]}">Temporada {s["number"]}</option>' for s in d['seasons'])
 options=''.join(f'<option value="{e["number"]}">{e["seasonEpisode"]:02d} — {esc(e["title"])}</option>' for e in eps if e['season']==1)
 entries=''
 for season in d['seasons']:
  hs=[h for h in history if h['season']==season['number']]
  if not hs:continue
  rows=''.join(f'<li class="character-history-entry" data-episode="{h["episode"]}"><h3>Episódio {h["seasonEpisode"]:02d} — {esc(h["title"])}</h3><p>{esc(h["text"])}</p></li>' for h in hs)
  entries+=f'<div class="character-history-season" data-season="{season["number"]}"><h3>Temporada {season["number"]}</h3><ol class="character-history-list">{rows}</ol></div>'
 related=''.join(f'<li data-from="{r["start"]}" data-to="{r["end"]}"><a href="../../../{r["path"]}">{esc(r["name"])}</a><span>{esc(r["label"])}</span></li>' for r in relations)
 schema={'@context':'https://schema.org','@type':'ProfilePage','url':canonical,'name':c['name']+' — For All Mankind','mainEntity':{'@type':'Person','name':c['name'],'description':c['desc'],'url':canonical}}
 document=f'''<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{esc(c['name'])} — For All Mankind | Series Journal</title><meta name="description" content="{esc(description)}"><link rel="canonical" href="{canonical}"><meta property="og:type" content="article"><meta property="og:title" content="{esc(c['name'])} — For All Mankind"><meta property="og:description" content="{esc(description)}"><meta property="og:url" content="{canonical}"><link rel="stylesheet" href="../../../style.css?v=journal-pwa-1"><script>document.documentElement.classList.add('js')</script><script type="application/ld+json">{encoded(schema)}</script><script type="application/json" id="characterRecord">{encoded(record)}</script><script src="../../../character-families.js?v=journal-pwa-1" defer></script><script src="../../../episode-presence.js?v=journal-pwa-1" defer></script><script src="../../../episode-filter.js?v=journal-pwa-1" defer></script><script src="../../../character-profile.js?v=journal-pwa-1" defer></script></head><body data-series="for-all-mankind" class="character-document"><header><div class="series-brand"><img class="series-art" src="../../../assets/for-all-mankind/cover-blue.jpg" alt="Arte representativa de For All Mankind" width="288" height="180"><div class="series-brand-copy"><div class="character-series-name">For All Mankind <span>/ PERSONAGENS</span></div><small>Ficha individual · Temporadas 1 a 5</small></div></div><nav aria-label="Navegação da ficha"><a id="allCharactersLink" href="../../../for-all-mankind.html?tab=characters">Todos os personagens</a><a id="headerMapLink" href="../../../for-all-mankind.html?tab=graphview">Ver Mapa de Conexões</a></nav></header><main><nav class="character-breadcrumbs" aria-label="Localização"><a href="../../../for-all-mankind.html">For All Mankind</a><span>/</span><span>{esc(c['name'])}</span></nav><article class="character-profile" id="characterProfile"><div class="character-profile-hero"><div class="character-profile-photo" id="photoFrame"><div id="characterPhoto" class="character-photo-missing" role="img" aria-label="Retrato de {esc(c['name'])}">{esc(''.join(x[0] for x in c['name'].split()[:2]))}</div></div><div class="character-profile-copy"><span class="tag category-tag" id="profileCategory" data-tone="{category['tone']}">{esc(category['label'])}</span><h1>{esc(c['name'])}</h1><p id="characterDescription">{esc(c['desc'])}</p><p id="characterScope" class="character-scope">Escolha a temporada e o episódio para limitar as revelações.</p><a id="mapLink" class="character-map-link" href="../../../for-all-mankind.html?tab=graphview">Ver Mapa de Conexões →</a></div></div><section class="character-history"><div class="character-history-heading"><div><span class="tag">HISTÓRICO DO PERSONAGEM</span><h2>Ao longo das temporadas</h2></div><form id="characterFilter"><label>Temporada<select id="profileSeason">{seasons}</select></label><label>Até o episódio<select id="profileEpisode">{options}</select></label><noscript><p>Sem JavaScript, o histórico completo das cinco temporadas fica visível abaixo.</p></noscript></form></div><p id="historyNote" class="character-history-note">Acontecimentos registrados no resumo por episódio.</p><div id="characterHistory">{entries}</div></section><section class="character-relations"><h2>Personagens relacionados</h2><ul id="characterRelations">{related}</ul></section></article></main></body></html>'''
 target=ROOT/path/'index.html';target.parent.mkdir(parents=True,exist_ok=True);target.write_text(document)
# Add a single directory section, safe to regenerate repeatedly.
p=ROOT/'personagens/index.html';text=p.read_text();text=re.sub(r'<section data-series="for-all-mankind">.*?</section>','',text,flags=re.S)
options='<option value="all">Todas as categorias</option>'+''.join(f'<option value="{k}">{esc(v)}</option>' for k,v in categories.items())
rows=''.join(f'<li data-character="{c["id"]}" data-from="{c["from"]}" data-category="{c["cat"]}"><a href="../{info["characters"][c["id"]]["path"]}">{esc(c["name"])}</a><span class="tag category-tag" data-tone="{tones[list(categories).index(c["cat"])]}">{esc(categories[c["cat"]])}</span></li>' for c in sorted(characters.values(),key=lambda c:c['name']))
section=f'<section data-series="for-all-mankind"><h2>For All Mankind · Temporadas 1 a 5</h2><label class="character-category-filter">Filtrar por categoria<select data-directory-filter aria-label="Categoria de For All Mankind">{options}</select></label><ul>{rows}</ul></section>'
text=text.replace('</main>',section+'</main>');text=text.replace('Índice das primeiras temporadas.','Índice de personagens por série e temporada.');text=text.replace('O Problema dos 3 Corpos, com fichas','O Problema dos 3 Corpos e For All Mankind, com fichas');text=text.replace('v=episode-filter-1','v=journal-pwa-1')
if '../for-all-mankind.html' not in text:text=text.replace('</nav></header>','<a href="../for-all-mankind.html">For All Mankind</a></nav></header>')
p.write_text(text)
# Each edition is explicitly a whole-season recap, hidden until the reader opens it.
newspapers={}
for season in d['seasons']:
 n=season['number'];es=[e for e in eps if e['season']==n]
 def article(ep):return dict(title=ep['events'][0]['title'],paragraphs=[e['text'] for e in ep['events'][:2]],illustrationCharacters=ep['events'][0]['characters'][:2])
 cast=[]
 for cid in dict.fromkeys(cid for e in es for a in e['events'] for cid in a['characters']):
  cast.append([characters[cid]['name'],characters[cid]['desc'].split('. ')[0]+'.'])
  if len(cast)==6:break
 image=f'assets/for-all-mankind/episodes/s{n}-e01.jpg'
 newspapers[n]=dict(title='For All Mankind',edition=f'TEMPORADA {n} · 10 EPISÓDIOS',coverage=f'Edição completa da temporada {n} · contém revelações até o episódio 10.',image=image,imageAlt=f'Imagem do episódio de abertura da temporada {n}',imageCaption=f'Imagem da série na temporada {n}; ilustração da edição.',headline=season['headline'],deck=season['title']+' · Os principais acontecimentos e suas consequências.',lead=[e['text'] for e in es[0]['events'][:2]],page1=[article(es[i]) for i in [1,2,4]],strip=[(f'EPISÓDIO {es[i]["seasonEpisode"]}',es[i]['events'][0]['title']) for i in [0,4,9]],page2Headline=es[-1]['events'][-1]['title'],page2Deck='As decisões e perdas que encerram esta etapa da história.',page2=[article(es[i]) for i in [5,7,9]],cast=cast,questions=es[-1]['questions'])
writejs('for-all-mankind-newspapers.js','FOR_ALL_MANKIND_NEWSPAPERS',newspapers)
p=ROOT/'sitemap.xml';s=p.read_text();urls=[SITE+'for-all-mankind.html']+[SITE+c['path'] for c in info['characters'].values()]
for url in urls:
 entry='<url><loc>'+esc(url)+'</loc></url>'
 if entry not in s:s=s.replace('</urlset>',entry+'\n</urlset>')
p.write_text(s)
print(f'Generated {len(characters)} multi-season character pages and 5 newspaper editions.')

if __name__=="__main__" and (ROOT/"scripts/build-pwa.py").exists():
    import runpy
    runpy.run_path(str(ROOT/"scripts/build-pwa.py"))

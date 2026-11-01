"""Generate real, crawlable character pages for the static GitHub Pages site."""
from pathlib import Path
import json, subprocess, re, html, unicodedata
from html.parser import HTMLParser
ROOT=Path(__file__).resolve().parents[1]
SITE='https://michelkovacs.github.io/series-journal/'
def js_json(code):
    return json.loads(subprocess.check_output(['node','-e','const vm=require("vm");process.stdout.write(vm.runInNewContext('+json.dumps(code)+',{}, {timeout:1000}));'],text=True))
def read_data(file,symbol):return js_json((ROOT/file).read_text()+';JSON.stringify('+symbol+');')
def slug(s):return re.sub(r'[^a-z0-9]+','-',unicodedata.normalize('NFKD',s).encode('ascii','ignore').decode().lower()).strip('-')
def esc(s):return html.escape(str(s),quote=True)
def encoded(data):return json.dumps(data,ensure_ascii=False).replace('<','\\u003c')
# The original Noturno file contains data literals before PHOTO_LIBRARY.
source=(ROOT/'app.js').read_text().split('const PHOTO_LIBRARY=')[0]
legacy=js_json(source+';JSON.stringify({characters:chars,links,places,mysteries});')
class EventParser(HTMLParser):
    def __init__(self):super().__init__();self.events=[];self.current=None;self.field=None;self.depth=0
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='article' and 'recap-event' in a.get('class','').split():self.current={'title':'','text':''}
        if self.current is not None and tag=='p' and self.current['text']:self.current['text']+='\n\n'
        if self.current is not None and tag in ['h4','p']:self.field='title' if tag=='h4' else 'text'
        if self.current is not None and a.get('data-focus-character'):self.current['focus']=a['data-focus-character']
    def handle_data(self,text):
        if self.current is not None and self.field:self.current[self.field]+=text
    def handle_endtag(self,tag):
        if tag in ['h4','p']:self.field=None
        if tag=='article' and self.current is not None:self.events.append(self.current);self.current=None
parser=EventParser();parser.feed((ROOT/'index.html').read_text())
involved=[['jurek'],['karl','jurek'],['michael','felicia'],['jonah','nathan','alex','saga'],['jonah','nathan'],['jurek','jonah','alex']]
for event,ids in zip(parser.events,involved):event['characters']=ids
schedule_source=(ROOT/'noturno-season.js').read_text();schedule_source=schedule_source[schedule_source.index('  const researchedOn'):schedule_source.index('  const byId')]
schedule=js_json(schedule_source+';JSON.stringify(schedule);')
for c in legacy['characters']:c['from']=1
noturno={'characters':legacy['characters'],'links':[dict(a=a,b=b,label=label,start=1,end=10) for a,b,label in legacy['links']], 'updates':{},'episodes':[dict(number=e['number'],title=e['title'] or 'Título a confirmar',date=e['date'],events=parser.events if e['number']==1 else []) for e in schedule]}
series={
 'noturno':dict(title='Noturno',slug='noturno',page='index.html',data=noturno,photos={},knownUntil=1),
 'dragon':dict(title='A Casa do Dragão',slug='casa-do-dragao',page='dragon.html',data=read_data('dragon-data.js','DRAGON_DATA'),photos=read_data('dragon-local-photos.js','DRAGON_LOCAL_PHOTOS'),knownUntil=10),
 'three-body':dict(title='O Problema dos 3 Corpos',slug='o-problema-dos-3-corpos',page='three-body.html',data=read_data('three-body-data.js','THREE_BODY_DATA'),photos=read_data('three-body-local-photos.js','THREE_BODY_LOCAL_PHOTOS'),knownUntil=8)
}
dragon_image_info=read_data('dragon-local-photos.js','DRAGON_IMAGE_INFO')
noturno_photos=read_data('noturno-photos.js','NOTURNO_PHOTOS')
series['noturno']['photos']={cid:[[record['from'],record['sources'][0]]] for cid,record in noturno_photos.items()}
house_data=read_data('character-families.js','HOUSE_DATA')
categories={
 'dragon':{'coroa':'Núcleo Targaryen','hightower':'Núcleo Hightower','velaryon':'Núcleo Velaryon','corte':'Corte e aliados','dragoes':'Dragões'},
 'three-body':{'cientistas':'Grupo de Oxford','passado':'Passado e Costa Vermelha','defesa':'Investigação e defesa','contatos':'Contatos e jogo'},
 'noturno':{'investigacao':'Investigação','suspeito':'Hospital / suspeitos','familia':'Família / vítimas','passado':'Passado'}
}
tones=['rose','green','blue','violet','amber']
for series_id,art in {'dragon':'house-of-the-dragon.webp','three-body':'three-body.webp','noturno':'noturno-mark.svg'}.items():series[series_id]['art']='assets/series/'+art
series['noturno']['art']="https://m.media-amazon.com/images/S/pv-target-images/ef9425e1792b320dd0da4498623cbc24d749ee7081701b64263515291f6bcb41.jpg"
# Presence is an editorial index of the episode recap, including explicit mentions.
presence={}
for series_id,item in series.items():
    data=item['data'];first_counts={}
    for character in data['characters']:
        first=character['name'].split()[0];first_counts[first]=first_counts.get(first,0)+1
    indexed={c['id']:[] for c in data['characters']}
    for ep in data['episodes']:
        epno=ep['number'];ids={cid for event in ep.get('events',[]) for cid in event.get('characters',[])}
        text=' '.join([ep.get('lead','')]+[part for event in ep.get('events',[]) for part in [event.get('text','')]+event.get('paragraphs',[])])
        for character in data['characters']:
            names=[character['name']]
            if first_counts[character['name'].split()[0]]==1 and character['name'].split()[0] not in ['Grande','Ser','Lorde']:names.append(character['name'].split()[0])
            if character['id']=='mellos':names.append('Mellos')
            if character['id']=='craghas':names.append('Alimentador de Caranguejos')
            mentioned=any(re.search(r'(?<!\w)'+re.escape(name)+r'(?!\w)',text,re.IGNORECASE) for name in names)
            if character['from']<=epno and (character['id'] in ids or mentioned or (character['id']=='jaehaerys-elder' and epno==1)):indexed[character['id']].append(epno)
    presence[series_id]=dict(maxEpisode=len(data['episodes']),knownUntil=item['knownUntil'],characters=indexed)
(ROOT/'episode-presence.js').write_text('const EPISODE_PRESENCE = '+json.dumps(presence,ensure_ascii=False,indent=2)+';\n')
manifest={};count=0;urls=[]
for key,s in series.items():
    d=s['data'];maxep=len(d['episodes']);characters={c['id']:c for c in d['characters']}
    manifest[key]=dict(title=s['title'],page=s['page'],maxEpisode=maxep,knownUntil=s['knownUntil'],characters={})
    for c in d['characters']:
        path=f"personagens/{s['slug']}/{slug(c['name'])}/";urls.append(SITE+path)
        manifest[key]['characters'][c['id']]=dict(name=c['name'],path=path,fromEpisode=c['from'],photos=s['photos'].get(c['id'],[]))
    for c in d['characters']:
        info=manifest[key]['characters'][c['id']];path=info['path'];canonical=SITE+path
        category=dict(id=c['cat'],label=categories[key][c['cat']],tone=tones[list(categories[key]).index(c['cat'])])
        house=house_data['characters'].get(c['id']) if key=='dragon' else None
        crest=f'<img class="house-emblem" src="../../../assets/houses/{house}.svg" alt="Emblema da Casa {house_data["houses"][house]}" width="48" height="52">' if house else ''
        history=[];desc=c['desc']
        for ep in d['episodes']:
            n=ep['number'];update=d['updates'].get(str(n),{}).get(c['id'])
            relevant=[e for e in ep.get('events',[]) if c['id'] in e.get('characters',[])]
            if update or n==c['from'] or relevant:
                text=update or (c['desc'] if n==c['from'] else relevant[0]['text'])
                history.append(dict(episode=n,title=ep['title'],text=text))
            if update:desc=update
        mapep=min(maxep,s['knownUntil'])
        photo=None
        for first,src in info['photos']:
            if first<=maxep:photo=src
        relations=[]
        for l in d['links']:
            if c['id'] in [l['a'],l['b']]:
                other=l['b'] if l['a']==c['id'] else l['a'];o=characters[other]
                relations.append(dict(id=other,name=o['name'],label=l['label'],start=max(l['start'],o['from']),end=l['end'],path=manifest[key]['characters'][other]['path']))
        record=dict(imageCaption=dragon_image_info.get(c['id'],{}).get('caption','Foto do personagem na série') if key=='dragon' else 'Foto do personagem na série',kind=c.get('kind','person'),photoCandidates=noturno_photos.get(c['id'],{}).get('sources',[]) if key=='noturno' else [],category=category,house=house,series=key,seriesTitle=s['title'],seriesPage=s['page'],id=c['id'],name=c['name'],baseDescription=c['desc'],fromEpisode=c['from'],maxEpisode=maxep,knownUntil=s['knownUntil'],photos=info['photos'],history=history,relations=relations,episodes=[dict(number=e['number'],title=e['title']) for e in d['episodes']])
        header_art=s['art'] if s['art'].startswith('https://') else '../../../'+s['art']
        meta=f"{c['name']} em {s['title']}: perfil, conexões e histórico da temporada 1 por episódio. Escolha até onde deseja acompanhar a história."
        media_caption=dragon_image_info.get(c['id'],{}).get('caption','Foto do personagem na série') if key=='dragon' else 'Foto do personagem na série'
        photo_src=photo if photo and photo.startswith('https://') else '../../../'+photo if photo else None
        photo_html=f'<img id="characterPhoto" src="{esc(photo_src)}" alt="{esc(c["name"])} — {esc(media_caption)}" width="320" height="400">' if photo else f'<div id="characterPhoto" class="character-photo-missing" role="img" aria-label="Foto do personagem ainda não disponível">{esc("".join(part[0] for part in c["name"].split()[:2]))}</div>'
        entries=''.join(f'<li class="character-history-entry" data-episode="{h["episode"]}"><h3>Episódio {h["episode"]:02d} — {esc(h["title"])}</h3><p>{esc(h["text"])}</p></li>' for h in history)
        related=''.join(f'<li data-from="{r["start"]}" data-to="{r["end"]}"><a href="../../../{esc(r["path"])}">{esc(r["name"])}</a><span>{esc(r["label"])}</span></li>' for r in relations)
        options=''.join(f'<option value="{e["number"]}"'+(' selected' if e['number']==maxep else '')+f'>{e["number"]:02d} — {esc(e["title"])}</option>' for e in record['episodes'])
        schema={'@context':'https://schema.org','@type':'ProfilePage','url':canonical,'name':c['name']+' — '+s['title'],'mainEntity':{'@type':'Thing' if c.get('kind')=='dragon' else 'Person','name':c['name'],'description':c['desc'],'url':canonical}}
        if photo:schema['mainEntity']['image']=photo if photo.startswith('https://') else SITE+photo
        asset_version='labels-cleanup-1'
        document=f'''<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{esc(c['name'])} — {esc(s['title'])} | Series Journal</title><meta name="description" content="{esc(meta)}"><link rel="canonical" href="{canonical}">
<meta property="og:type" content="article"><meta property="og:title" content="{esc(c['name'])} — {esc(s['title'])}"><meta property="og:description" content="{esc(meta)}"><meta property="og:url" content="{canonical}">
{f'<meta property="og:image" content="{photo if photo.startswith('https://') else SITE+photo}">' if photo else ''}
<link rel="stylesheet" href="../../../style.css?v={asset_version}"><script>document.documentElement.classList.add('js')</script>
<script type="application/ld+json">{encoded(schema)}</script>
<script type="application/json" id="characterRecord">{encoded(record)}</script>
<script src="../../../character-families.js?v={asset_version}" defer></script><script src="../../../episode-presence.js?v=episode-filter-1" defer></script><script src="../../../episode-filter.js?v=episode-filter-1" defer></script><script src="../../../character-profile.js?v={asset_version}" defer></script></head>
<body data-series="{key}" class="character-document"><header><div class="series-brand"><img class="series-art" src="{header_art}" alt="Imagem representativa de {esc(s['title'])}" width="288" height="180"><div class="series-brand-copy"><div class="character-series-name">{esc(s['title'])} <span>/ PERSONAGENS</span></div><small>Ficha individual · Temporada 1</small></div></div><nav aria-label="Navegação da ficha"><a id="allCharactersLink" href="../../../{s['page']}?episodio={mapep}&amp;tab=characters">Todos os personagens</a><a id="headerMapLink" href="../../../{s['page']}?episodio={mapep}&amp;personagem={c['id']}&amp;tab=graphview">Ver Mapa de Conexões</a></nav></header>
<main><nav class="character-breadcrumbs" aria-label="Localização"><a href="../../../{s['page']}">{esc(s['title'])}</a><span aria-hidden="true">/</span><span>{esc(c['name'])}</span></nav>
<article class="character-profile" id="characterProfile"><div class="character-profile-hero"><div class="character-profile-photo" id="photoFrame">{photo_html}{crest}</div><div class="character-profile-copy"><span class="tag category-tag" id="profileCategory" data-tone="{category["tone"]}">{esc(category["label"])}</span><h1>{esc(c['name'])}</h1><p id="characterDescription">{esc(desc)}</p><p id="characterScope" class="character-scope">Conteúdo até a temporada 1, episódio {maxep}.</p><a class="character-map-link" id="mapLink" href="../../../{s['page']}?episodio={mapep}&amp;personagem={c['id']}&amp;tab=graphview">Ver Mapa de Conexões →</a></div></div>
<section class="character-history"><div class="character-history-heading"><div><span class="tag">HISTÓRICO DO PERSONAGEM</span><h2>Temporada 1</h2></div><form id="characterFilter"><label>Temporada<select id="profileSeason" name="temporada"><option value="1">Temporada 1</option></select></label><label>Até o episódio<select id="profileEpisode" name="episodio">{options}</select></label><noscript><p>Sem JavaScript, esta página mostra todo o histórico disponível da temporada 1.</p></noscript></form></div><p class="character-history-note" id="historyNote">Acompanhe os acontecimentos registrados até o episódio escolhido.</p><ol class="character-history-list" id="characterHistory">{entries}</ol></section>
<section class="character-relations"><h2>Personagens relacionados</h2><ul id="characterRelations">{related}</ul></section></article></main></body></html>'''
        target=ROOT/path/'index.html';target.parent.mkdir(parents=True,exist_ok=True);target.write_text(document);count+=1
index_parts=['<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Personagens das séries | Series Journal</title><meta name="description" content="Índice de personagens de Noturno, A Casa do Dragão e O Problema dos 3 Corpos, com fichas e histórico por episódio."><link rel="canonical" href="'+SITE+'personagens/"><link rel="stylesheet" href="../style.css?v=episode-filter-1"><script src="../episode-presence.js?v=episode-filter-1" defer></script><script src="../episode-filter.js?v=episode-filter-1" defer></script><script src="../character-browser.js?v=episode-filter-1" defer></script></head><body><header><div class="series-brand"><div class="series-brand-copy"><h1>PERSONAGENS <span>/ SERIES JOURNAL</span></h1><small>Fichas individuais e histórico por episódio</small></div></div><nav><a href="../index.html">Noturno</a><a href="../dragon.html">A Casa do Dragão</a><a href="../three-body.html">O Problema dos 3 Corpos</a></nav></header><main class="character-directory"><p>Índice das primeiras temporadas. As fichas permitem escolher até qual episódio exibir o histórico.</p>']
for series_key,series_info in manifest.items():
    options='<option value="all">Todas as categorias</option>'+''.join('<option value="'+k+'">'+esc(label)+'</option>' for k,label in categories[series_key].items())
    index_parts.append('<section data-series="'+series_key+'"><h2>'+esc(series_info['title'])+'</h2><label class="character-category-filter">Filtrar por categoria<select data-directory-filter aria-label="Categoria de '+esc(series_info['title'])+'">'+options+'</select></label><ul>')
    for cid,item in sorted(series_info['characters'].items(),key=lambda pair:unicodedata.normalize('NFKD',pair[1]['name']).casefold()):
        character=next(c for c in series[series_key]['data']['characters'] if c['id']==cid)
        cat=character['cat'];tone=tones[list(categories[series_key]).index(cat)]
        index_parts.append('<li data-character="'+cid+'" data-from="'+str(character['from'])+'" data-category="'+cat+'"><a href="../'+item['path']+'">'+esc(item['name'])+'</a><span class="tag category-tag" data-tone="'+tone+'">'+esc(categories[series_key][cat])+'</span></li>')
    index_parts.append('</ul></section>')
index_parts.append('</main></body></html>')
(ROOT/'personagens/index.html').write_text(''.join(index_parts))
(ROOT/'character-directory.js').write_text('const CHARACTER_DIRECTORY = '+json.dumps(manifest,ensure_ascii=False,indent=2)+';\n')
sitemap=['<?xml version="1.0" encoding="UTF-8"?>','<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
for url in [SITE,SITE+'dragon.html',SITE+'three-body.html',SITE+'personagens/']+urls:sitemap.append('<url><loc>'+esc(url)+'</loc></url>')
sitemap.append('</urlset>');(ROOT/'sitemap.xml').write_text('\n'.join(sitemap)+'\n')
(ROOT/'robots.txt').write_text('User-agent: *\nAllow: /\nSitemap: '+SITE+'sitemap.xml\n')
print(f'Generated {count} static character pages and sitemap with {len(urls)+4} URLs.')

# Keep the multi-season dossier in the shared indexes when regenerating.
if (ROOT/"for-all-mankind-data.js").exists():
    import runpy
    runpy.run_path(str(ROOT/"scripts/generate-for-all-mankind.py"))

'use strict';
(() => {
  const data=JSON.parse(document.getElementById('characterRecord').textContent);
  const root=new URL('../../../',location.href);
  const profile=document.getElementById('characterProfile');
  const selector=document.getElementById('profileEpisode');
  const photoFrame=document.getElementById('photoFrame');
  const only=EpisodeFilter.checkbox('profileOnlyEpisode','Mostrar apenas o histórico deste episódio',render);document.getElementById('characterFilter').after(only.label);
  const titleBase=`${data.name} — ${data.seriesTitle} | Series Journal`;
  const multi=data.episodes.some(e=>e.season>1);
  const seasonSelector=document.getElementById('profileSeason');
  function publicEpisode(n){const e=data.episodes.find(e=>e.number===n);return {season:e?.season||1,episode:e?.seasonEpisode||n}}
  function scopeURL(url,n){const e=publicEpisode(n);url.searchParams.set('temporada',String(e.season));url.searchParams.set('episodio',String(e.episode));return url}
  function current(){const q=new URLSearchParams(location.search),v=q.get('episodio');if(multi){if(!v&&!q.has('temporada'))return data.fromEpisode;const season=Number(q.get('temporada')||1);return (data.episodes.find(e=>e.season===season&&e.seasonEpisode===Number(v||1))||data.episodes.find(e=>e.season===season)||data.episodes[0]).number}return v&&/^\d+$/.test(v)?Math.max(1,Math.min(data.maxEpisode,Number(v))):data.maxEpisode}
  function photo(limit){
    const entry=data.photos.filter(([first])=>first<=limit).at(-1);
    let custom=null;
    if(data.series==='noturno'){try{const saved=JSON.parse(localStorage.getItem('noturno-fotos-v3')||'{}');const old=JSON.parse(localStorage.getItem('noturno-photos')||'{}');const candidate=saved[data.id]||old[data.id];if(typeof candidate==='string'&&candidate.startsWith('data:image/'))custom=candidate}catch{}}
    const candidates=limit>=data.fromEpisode?[...new Set([custom,entry?.[1],...(data.photoCandidates||[])].filter(Boolean))]:[];
    const fallback=document.createElement('div');fallback.id='characterPhoto';fallback.className='character-photo-missing';fallback.setAttribute('role','img');fallback.setAttribute('aria-label','Foto do personagem ainda não disponível');fallback.textContent=data.name.split(' ').slice(0,2).map(s=>s[0]).join('');
    const label=document.createElement('p');label.className='character-photo-note';
    photoFrame.replaceChildren();
    if(candidates.length){
      const img=document.createElement('img');img.id='characterPhoto';img.alt=`${data.name} — ${data.imageCaption||"personagem na série"}`;img.width=320;img.height=400;img.referrerPolicy='no-referrer';if(data.series==='dragon'&&data.id==='vaemond')img.style.objectPosition='15% center';let index=0;
      function next(){if(index>=candidates.length){img.replaceWith(fallback);label.remove();return}img.src=new URL(candidates[index++],root).href}
      img.onerror=next;photoFrame.append(img);label.textContent=!custom&&data.imageCaption?.startsWith('Ilustração')?'Ilustração':'';next();
    }else{photoFrame.append(fallback);label.remove()}
    if(label.textContent)photoFrame.append(label);if(limit>=data.fromEpisode&&data.house)photoFrame.append(CharacterFamilies.icon(data.house));document.getElementById('profileCategory').hidden=limit<data.fromEpisode;
  }

  function render(){
    const limit=current(),scope=publicEpisode(limit);if(multi){seasonSelector.value=String(scope.season);selector.replaceChildren(...data.episodes.filter(e=>e.season===scope.season).map(e=>new Option(`${String(e.seasonEpisode).padStart(2,'0')} — ${e.title}`,String(e.number))))}selector.value=String(limit);photo(limit);
    const available=limit>=data.fromEpisode;
    document.getElementById('characterDescription').textContent=available?data.baseDescription:'Ainda não há informações deste personagem até o episódio escolhido.';
    document.getElementById('characterScope').textContent=`Conteúdo até a temporada ${scope.season}, episódio ${scope.episode}. Contém revelações até esse ponto.`;
    document.querySelectorAll('.character-history-entry').forEach(item=>item.hidden=Number(item.dataset.episode)>limit||(only.input.checked&&Number(item.dataset.episode)!==limit));
    document.querySelectorAll('.character-history-season').forEach(group=>{group.hidden=![...group.querySelectorAll('.character-history-entry')].some(e=>!e.hidden)});
    const shown=data.history.filter(h=>h.episode<=limit&&(!only.input.checked||h.episode===limit));
    document.getElementById('historyNote').textContent=!available?'Este personagem é apresentado a partir de um episódio posterior.':data.knownUntil<limit?`O histórico apurado está disponível até o episódio ${data.knownUntil}. Os capítulos seguintes ainda não foram incorporados ao dossiê.`:shown.length?(only.input.checked?'Acontecimentos registrados neste episódio.':'Acontecimentos registrados até o episódio escolhido. Não há registros novos em todos os capítulos.'):'Ainda não há acontecimentos registrados até este episódio.';
    document.querySelectorAll('#characterRelations>li').forEach((item,i)=>{const r=data.relations[i];item.hidden=!available||limit<r.start||limit>r.end||(only.input.checked&&!EpisodeFilter.has(data.series,r.id,limit));const link=item.querySelector('a');const out=new URL(r.path,root);scopeURL(out,limit);link.href=out.href});
    const mapEpisode=Math.min(limit,data.knownUntil);const map=new URL(data.seriesPage,root);scopeURL(map,mapEpisode);map.searchParams.set('personagem',data.id);map.searchParams.set('tab','graphview');
    for(const id of ['mapLink','headerMapLink']){const a=document.getElementById(id);a.href=map.href;if(id==='mapLink')a.textContent=mapEpisode===limit?'Ver Mapa de Conexões →':`Ver Mapa de Conexões até o episódio ${mapEpisode} →`}
    const all=document.getElementById('allCharactersLink');if(all){const out=new URL(data.seriesPage,root);scopeURL(out,mapEpisode);out.searchParams.set('tab','characters');all.href=out.href}
    document.title=titleBase;profile.dataset.ready='true';
  }
  function navigate(limit){const url=scopeURL(new URL(location.href),limit);history.pushState({},'',url);render()}
  function change(){navigate(Number(selector.value))}
  if(multi)seasonSelector.addEventListener('change',()=>navigate(data.episodes.find(e=>e.season===Number(seasonSelector.value)).number));
  selector.addEventListener('change',change);document.getElementById('characterFilter').addEventListener('submit',e=>{e.preventDefault();change()});window.addEventListener('popstate',render);render();
})();

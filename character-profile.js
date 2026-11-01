'use strict';
(() => {
  const data=JSON.parse(document.getElementById('characterRecord').textContent);
  const root=new URL('../../../',location.href);
  const profile=document.getElementById('characterProfile');
  const selector=document.getElementById('profileEpisode');
  const photoFrame=document.getElementById('photoFrame');
  const only=EpisodeFilter.checkbox('profileOnlyEpisode','Mostrar apenas o histórico deste episódio',render);document.getElementById('characterFilter').after(only.label);
  const titleBase=`${data.name} — ${data.seriesTitle} | Series Journal`;
  function current(){const v=new URLSearchParams(location.search).get('episodio');return v&&/^\d+$/.test(v)?Math.max(1,Math.min(data.maxEpisode,Number(v))):data.maxEpisode}
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
      function next(){if(index>=candidates.length){img.replaceWith(fallback);label.textContent='Foto do personagem ainda não disponível';return}img.src=new URL(candidates[index++],root).href}
      img.onerror=next;photoFrame.append(img);label.textContent=custom?'Foto do personagem enviada neste navegador':data.imageCaption||'Foto do personagem na série';next();
    }else{photoFrame.append(fallback);label.textContent='Foto do personagem ainda não disponível'}
    photoFrame.append(label);if(limit>=data.fromEpisode&&data.house)photoFrame.append(CharacterFamilies.icon(data.house));document.getElementById('profileCategory').hidden=limit<data.fromEpisode;
  }

  function render(){
    const limit=current();selector.value=String(limit);photo(limit);
    const available=limit>=data.fromEpisode;
    document.getElementById('characterDescription').textContent=available?data.baseDescription:'Ainda não há informações deste personagem até o episódio escolhido.';
    document.getElementById('characterScope').textContent=`Conteúdo até a temporada 1, episódio ${limit}. Contém revelações até esse ponto.`;
    document.querySelectorAll('.character-history-entry').forEach(item=>item.hidden=Number(item.dataset.episode)>limit||(only.input.checked&&Number(item.dataset.episode)!==limit));
    const shown=data.history.filter(h=>h.episode<=limit&&(!only.input.checked||h.episode===limit));
    document.getElementById('historyNote').textContent=!available?'Este personagem é apresentado a partir de um episódio posterior.':data.knownUntil<limit?`O histórico apurado está disponível até o episódio ${data.knownUntil}. Os capítulos seguintes ainda não foram incorporados ao dossiê.`:shown.length?(only.input.checked?'Acontecimentos registrados neste episódio.':'Acontecimentos registrados até o episódio escolhido. Não há registros novos em todos os capítulos.'):'Ainda não há acontecimentos registrados até este episódio.';
    document.querySelectorAll('#characterRelations>li').forEach((item,i)=>{const r=data.relations[i];item.hidden=!available||limit<r.start||limit>r.end||(only.input.checked&&!EpisodeFilter.has(data.series,r.id,limit));const link=item.querySelector('a');const out=new URL(r.path,root);out.searchParams.set('temporada','1');out.searchParams.set('episodio',String(limit));link.href=out.href});
    const mapEpisode=Math.min(limit,data.knownUntil);const map=new URL(data.seriesPage,root);map.searchParams.set('episodio',String(mapEpisode));map.searchParams.set('personagem',data.id);map.searchParams.set('tab','graphview');
    for(const id of ['mapLink','headerMapLink']){const a=document.getElementById(id);a.href=map.href;if(id==='mapLink')a.textContent=mapEpisode===limit?'Ver Mapa de Conexões →':`Ver Mapa de Conexões até o episódio ${mapEpisode} →`}
    const all=document.getElementById('allCharactersLink');if(all){const out=new URL(data.seriesPage,root);out.searchParams.set('episodio',String(mapEpisode));out.searchParams.set('tab','characters');all.href=out.href}
    document.title=titleBase;profile.dataset.ready='true';
  }
  function change(){const url=new URL(location.href);url.searchParams.set('temporada','1');url.searchParams.set('episodio',selector.value);history.pushState({},'',url);render()}
  selector.addEventListener('change',change);document.getElementById('characterFilter').addEventListener('submit',e=>{e.preventDefault();change()});window.addEventListener('popstate',render);render();
})();

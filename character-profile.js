'use strict';
(() => {
  const data=JSON.parse(document.getElementById('characterRecord').textContent);
  const root=new URL('../../../',location.href);
  const profile=document.getElementById('characterProfile');
  const selector=document.getElementById('profileEpisode');
  const photoFrame=document.getElementById('photoFrame');
  const titleBase=`${data.name} — ${data.seriesTitle} | Series Journal`;
  function current(){const v=new URLSearchParams(location.search).get('episodio');return v&&/^\d+$/.test(v)?Math.max(1,Math.min(data.maxEpisode,Number(v))):data.maxEpisode}
  function photo(limit){const entry=data.photos.filter(([first])=>first<=limit).at(-1);const src=entry?.[1];const fallback=document.createElement('div');fallback.id='characterPhoto';fallback.className='character-photo-missing';fallback.setAttribute('role','img');fallback.setAttribute('aria-label','Foto do personagem ainda não disponível');fallback.textContent=data.name.split(' ').slice(0,2).map(s=>s[0]).join('');photoFrame.replaceChildren();if(src&&limit>=data.fromEpisode){const img=document.createElement('img');img.id='characterPhoto';img.src=new URL(src,root).href;img.alt=`${data.name} na série`;img.width=320;img.height=400;img.onerror=()=>img.replaceWith(fallback);photoFrame.append(img)}else photoFrame.append(fallback);const label=document.createElement('p');label.className='character-photo-note';label.textContent=src&&limit>=data.fromEpisode?'Foto do personagem na série':'Foto do personagem ainda não disponível';photoFrame.append(label);if(limit>=data.fromEpisode&&data.house)photoFrame.append(CharacterFamilies.icon(data.house));document.getElementById('profileCategory').hidden=limit<data.fromEpisode}
  function render(){
    const limit=current();selector.value=String(limit);photo(limit);
    const available=limit>=data.fromEpisode;
    document.getElementById('characterDescription').textContent=available?data.baseDescription:'Ainda não há informações deste personagem até o episódio escolhido.';
    document.getElementById('characterScope').textContent=`Conteúdo até a temporada 1, episódio ${limit}. Contém revelações até esse ponto.`;
    document.querySelectorAll('.character-history-entry').forEach(item=>item.hidden=Number(item.dataset.episode)>limit);
    const shown=data.history.filter(h=>h.episode<=limit);
    document.getElementById('historyNote').textContent=!available?'Este personagem é apresentado a partir de um episódio posterior.':data.knownUntil<limit?`O histórico apurado está disponível até o episódio ${data.knownUntil}. Os capítulos seguintes ainda não foram incorporados ao dossiê.`:shown.length?'Acontecimentos registrados até o episódio escolhido. Não há registros novos em todos os capítulos.':'Ainda não há acontecimentos registrados até este episódio.';
    document.querySelectorAll('#characterRelations>li').forEach((item,i)=>{const r=data.relations[i];item.hidden=!available||limit<r.start||limit>r.end;const link=item.querySelector('a');const out=new URL(r.path,root);out.searchParams.set('temporada','1');out.searchParams.set('episodio',String(limit));link.href=out.href});
    const mapEpisode=Math.min(limit,data.knownUntil);const map=new URL(data.seriesPage,root);map.searchParams.set('episodio',String(mapEpisode));map.searchParams.set('personagem',data.id);map.searchParams.set('tab','graphview');
    for(const id of ['mapLink','headerMapLink']){const a=document.getElementById(id);a.href=map.href;if(id==='mapLink')a.textContent=mapEpisode===limit?'Ver Mapa de Conexões →':`Ver Mapa de Conexões até o episódio ${mapEpisode} →`}
    const all=document.getElementById('allCharactersLink');if(all){const out=new URL(data.seriesPage,root);out.searchParams.set('episodio',String(mapEpisode));out.searchParams.set('tab','characters');all.href=out.href}
    document.title=titleBase;profile.dataset.ready='true';
  }
  function change(){const url=new URL(location.href);url.searchParams.set('temporada','1');url.searchParams.set('episodio',selector.value);history.pushState({},'',url);render()}
  selector.addEventListener('change',change);document.getElementById('characterFilter').addEventListener('submit',e=>{e.preventDefault();change()});window.addEventListener('popstate',render);render();
})();

'use strict';
(() => {
  const host=document.getElementById('places');
  const ns='http://www.w3.org/2000/svg';
  const coordinates={
    'Porto Real':[423,685,-15,28,'end'],
    'Fortaleza Vermelha':[685,704,19,5,'start'],
    'Harrenhal':[347,551,-16,-13,'end'],
    'Pedra do Dragão':[508,624,21,-14,'start'],
    'Degraus':[574,966,10,-20,'start'],
    'Mata do Rei':[411,741,-18,6,'end'],
    'Derivamarca':[486,658,27,19,'start'],
    'Vale de Arryn':[408,469,16,-15,'start'],
    'Pentos':[759,601,21,5,'start'],
    'Fosso dos Dragões':[685,753,19,5,'start'],
    'Ponta Tempestade':[452,797,17,28,'start']
  };
  // Each update becomes available only after its episode is selected.
  const updates={
    'Harrenhal':[[6,'Lyonel e Harwin Strong morrem no incêndio de Harrenhal, articulado por Larys.']],
    'Pedra do Dragão':[[6,'Rhaenyra parte para Pedra do Dragão com sua família, diante da hostilidade na corte.'],[10,'Rhaenyra é coroada aqui. A fortaleza se torna o centro de seu conselho e da busca por aliados.']],
    'Derivamarca':[[7,'A família se reúne para o funeral de Laena. Naquela noite, Aemond reivindica Vhagar e perde um olho na briga entre os jovens.'],[8,'A sucessão de Derivamarca é disputada após os ferimentos de Corlys; a questão é levada ao trono.']],
    'Fosso dos Dragões':[[9,'A coroação de Aegon acontece no Fosso dos Dragões. Rhaenys escapa montada em Meleys.']],
    'Porto Real':[[9,'Após a morte de Viserys, o conselho articula a coroação de Aegon na capital.']],
    'Fortaleza Vermelha':[[8,'Viserys comparece ao salão do trono para defender a sucessão de Lucerys. O rei morre após o jantar familiar.'],[9,'O conselho se reúne após a morte do rei e prepara a ascensão de Aegon.']],
    'Degraus':[[3,'Daemon e Corlys enfrentam a Triarquia. Daemon mata o Alimentador de Caranguejos ao fim da batalha.']],
    'Ponta Tempestade':[[10,'Lucerys pede apoio a Borros Baratheon e encontra Aemond. Ao deixar a região, ele e Arrax morrem na perseguição de Vhagar.']]
  };
  host.replaceChildren();
  const panel=document.createElement('div');panel.className='westeros-panel';panel.id='westerosPanel';
  panel.innerHTML=`<div class="westeros-toolbar"><div><span class="tag">ATLAS DA TEMPORADA 1</span><h2>Westeros e o Mar Estreito</h2><p id="westerosScope"></p></div><div class="westeros-controls"><label>Até o episódio <select id="westerosEpisode" aria-label="Episódio do mapa"></select></label><button type="button" id="westerosFullscreen">Ver em tela cheia</button></div></div><p class="muted westeros-help">Clique em um pin ou escolha um local abaixo. Os nomes permanecem visíveis. Mapa esquemático: posições aproximadas; detalhes de Porto Real aparecem em um quadro ampliado.</p><div class="westeros-layout"><div class="westeros-viewport" tabindex="0" aria-label="Mapa de Westeros; role para explorar em telas pequenas"><svg id="westerosSvg" viewBox="0 0 900 1100" role="group" aria-labelledby="westerosTitle westerosDescription"><title id="westerosTitle">Locais conhecidos de Westeros</title><desc id="westerosDescription">Mapa com nomes e pins interativos, limitado ao episódio escolhido.</desc><image href="assets/maps/westeros.svg" width="900" height="1100"/><path d="M435 685 638 685" class="westeros-inset-line"/><rect x="643" y="650" width="242" height="139" rx="12" class="westeros-inset"/><text x="662" y="677" class="westeros-inset-title">PORTO REAL · DETALHES</text><g id="westerosPins"></g></svg></div><aside class="westeros-detail" id="westerosDetail" aria-live="polite" aria-atomic="true"></aside></div><div class="westeros-list" id="westerosList" aria-label="Locais disponíveis no mapa"></div>`;
  host.append(panel);
  const byId=id=>document.getElementById(id);
  const selector=byId('westerosEpisode');
  selector.replaceChildren(...Array.from(document.getElementById('episode').options,o=>o.cloneNode(true)));
  let limit=1,selected=null,fallback=false,returnFocus=null;
  function svg(tag,attrs,text){const el=document.createElementNS(ns,tag);for(const [key,value] of Object.entries(attrs))el.setAttribute(key,value);if(text)el.textContent=text;return el}
  function selectPlace(name,focus=false){
    const place=DRAGON_DATA.places.find(p=>p.name===name&&p.from_<=limit);if(!place)return;
    selected=name;
    const detail=byId('westerosDetail');detail.replaceChildren();
    const tag=document.createElement('span');tag.className='tag';tag.textContent=`CONHECIDO DESDE O EPISÓDIO ${place.from_}`;
    const title=document.createElement('h3');title.textContent=place.name;title.tabIndex=-1;
    const description=document.createElement('p');description.textContent=place.desc;
    const heading=document.createElement('h4');heading.textContent=`Até o episódio ${limit}`;
    const info=document.createElement('p');info.textContent=(updates[name]||[]).filter(([ep])=>ep<=limit).at(-1)?.[1]||'As informações conhecidas até este ponto estão descritas acima.';
    detail.append(tag,title,description,heading,info);
    for(const pin of byId('westerosPins').children)pin.setAttribute('aria-pressed',String(pin.dataset.place===name));
    for(const button of byId('westerosList').children)button.setAttribute('aria-pressed',String(button.textContent===name));
    if(focus)title.focus({preventScroll:true});
  }
  function render(ep){
    limit=ep;selector.value=String(ep);const places=DRAGON_DATA.places.filter(p=>p.from_<=ep);
    byId('westerosScope').textContent=`Locais e informações até o episódio ${ep}, inclusive. Nenhum local de episódios posteriores é exibido.`;
    byId('westerosPins').replaceChildren();byId('westerosList').replaceChildren();
    for(const place of places){
      const [x,y,dx,dy,anchor]=coordinates[place.name];
      const pin=svg('g',{class:'westeros-pin',role:'button',tabindex:'0','aria-label':`Ver informações: ${place.name}`,'aria-pressed':'false'});pin.dataset.place=place.name;
      pin.append(svg('circle',{cx:x,cy:y,r:18,class:'westeros-pin-hit'}),svg('path',{d:`M${x} ${y+12}c-4-6-11-12-11-19a11 11 0 0 1 22 0c0 7-7 13-11 19Z`,class:'westeros-pin-marker'}),svg('circle',{cx:x,cy:y-7,r:3,fill:'#fff'}),svg('text',{x:x+dx,y:y+dy,'text-anchor':anchor,class:'westeros-pin-label'},place.name));
      pin.addEventListener('click',()=>selectPlace(place.name));pin.addEventListener('keydown',e=>{if(['Enter',' '].includes(e.key)){e.preventDefault();selectPlace(place.name,true)}});byId('westerosPins').append(pin);
      const button=document.createElement('button');button.type='button';button.textContent=place.name;button.onclick=()=>selectPlace(place.name);byId('westerosList').append(button);
    }
    selectPlace(places.some(p=>p.name===selected)?selected:places[0].name);
  }
  selector.onchange=()=>{const main=document.getElementById('episode');main.value=selector.value;main.dispatchEvent(new Event('change'))};
  function syncFullscreen(){const full=document.fullscreenElement===panel||fallback;byId('westerosFullscreen').textContent=full?'Sair da tela cheia':'Ver em tela cheia';byId('westerosFullscreen').setAttribute('aria-expanded',String(full))}
  async function toggleFullscreen(){
    if(document.fullscreenElement===panel){await document.exitFullscreen();return}
    if(fallback){closeFallback();return}
    returnFocus=document.activeElement;
    try{if(!panel.requestFullscreen)throw new Error('unsupported');await panel.requestFullscreen()}catch{fallback=true;panel.classList.add('westeros-fullscreen');document.body.classList.add('westeros-fullscreen-open');panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');panel.setAttribute('aria-label','Mapa de Westeros em tela cheia');byId('westerosFullscreen').focus();syncFullscreen()}
  }
  function closeFallback(){fallback=false;panel.classList.remove('westeros-fullscreen');document.body.classList.remove('westeros-fullscreen-open');panel.removeAttribute('role');panel.removeAttribute('aria-modal');panel.removeAttribute('aria-label');syncFullscreen();returnFocus?.focus()}
  byId('westerosFullscreen').onclick=toggleFullscreen;
  document.addEventListener('fullscreenchange',syncFullscreen);
  panel.addEventListener('keydown',e=>{if(!fallback)return;if(e.key==='Escape'){e.preventDefault();closeFallback()}if(e.key==='Tab'){const focusable=[...panel.querySelectorAll('button,select,[tabindex="0"]')];const first=focusable[0],last=focusable.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
  window.WesterosMap={render};render(Number(document.getElementById('episode').value));syncFullscreen();
})();

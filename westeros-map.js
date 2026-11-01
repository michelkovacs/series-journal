'use strict';
(() => {
  const host=document.getElementById('places');
  const ns='http://www.w3.org/2000/svg';
  const coordinates={
    'Porto Real':[572,1081,-22,-30,'end'],
    'Fortaleza Vermelha':[680,1110,24,6,'start'],
    'Harrenhal':[507,949,-22,-13,'end'],
    'Pedra do Dragão':[730,988,24,-15,'start'],
    'Degraus':[832,1371,25,8,'start'],
    'Mata do Rei':[611,1139,0,43,'middle'],
    'Derivamarca':[696,1034,25,24,'start'],
    'Vale de Arryn':[598,834,-24,6,'end'],
    'Pentos':[934,1061,25,6,'start'],
    'Fosso dos Dragões':[455,1122,-24,6,'end'],
    'Ponta Tempestade':[681,1220,25,6,'start']
  };
  const dominions={
    'Porto Real':[[1,'targaryen']], 'Fortaleza Vermelha':[[1,'targaryen']],
    'Harrenhal':[[3,'strong']], 'Pedra do Dragão':[[2,'targaryen']],
    'Derivamarca':[[5,'velaryon']], 'Vale de Arryn':[[5,'arryn']],
    'Mata do Rei':[[3,'targaryen']], 'Fosso dos Dragões':[[6,'targaryen']],
    'Ponta Tempestade':[[10,'baratheon']]
  };
  function controllingHouse(name){return (dominions[name]||[]).filter(([first])=>first<=limit).at(-1)?.[1]||null}
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
  panel.innerHTML=`<div class="westeros-toolbar"><div><span class="tag">ATLAS DA TEMPORADA 1</span><h2>Westeros e o Mar Estreito</h2><p id="westerosScope"></p></div><div class="westeros-controls"><label>Até o episódio <select id="westerosEpisode" aria-label="Episódio do mapa"></select></label><label class="episode-only-filter"><input type="checkbox" id="westerosOnlyEpisode">Somente neste episódio</label><button type="button" id="westerosFullscreen">Ver em tela cheia</button></div></div><p class="muted westeros-help">Arraste para explorar, use os controles para aproximar e clique nos emblemas para conhecer os locais. Os nomes e os domínios acompanham o episódio escolhido. Pontos dentro de Porto Real são deslocados com linhas de referência para facilitar a leitura.</p><div class="westeros-layout"><div class="westeros-map-stage"><div class="westeros-viewport" tabindex="0" aria-label="Mapa de Westeros. Use os botões de zoom e as setas para explorar."><svg id="westerosSvg" viewBox="0 0 1200 1650" role="group" aria-labelledby="westerosTitle westerosDescription"><title id="westerosTitle">Locais conhecidos de Westeros</title><desc id="westerosDescription">Litoral detalhado, nomes e pins com emblemas das casas, limitados ao episódio escolhido.</desc><image href="assets/maps/westeros.svg?v=heraldry-1" x="-2000" y="-2000" width="5200" height="5650"/><g id="westerosLeaders" aria-hidden="true"></g><g id="westerosPins"></g></svg></div><div class="westeros-navigation" aria-label="Controles do mapa"><button type="button" id="westerosZoomIn" aria-label="Aproximar mapa">＋</button><button type="button" id="westerosZoomOut" aria-label="Afastar mapa">−</button><button type="button" id="westerosFit">Enquadrar locais</button><button type="button" id="westerosWhole">Westeros inteiro</button></div><a class="westeros-attribution" href="assets/maps/NOTICE.md" target="_blank" rel="noopener">Base: Atlas of Thrones · CC BY-NC-SA 3.0</a></div><section class="westeros-detail" id="westerosDetail" aria-live="polite" aria-atomic="true" aria-label="Informações do local"></section></div><div class="westeros-list" id="westerosList" aria-label="Locais disponíveis no mapa"></div>`;
  host.append(panel);
  const byId=id=>document.getElementById(id);
  const selector=byId('westerosEpisode');
  selector.replaceChildren(...Array.from(document.getElementById('episode').options,o=>o.cloneNode(true)));
  let limit=1,selected=null,fallback=false,returnFocus=null;
  let camera={x:600,y:1100,w:1000,h:800},drag=null;
  const viewport=byId('westerosSvg'),stage=panel.querySelector('.westeros-viewport');
  function full(){return document.fullscreenElement===panel||fallback}
  function ratio(){return stage.clientWidth/Math.max(stage.clientHeight,1)}
  function draw(){viewport.setAttribute('viewBox',`${camera.x-camera.w/2} ${camera.y-camera.h/2} ${camera.w} ${camera.h}`)}
  function visiblePlaces(){return DRAGON_DATA.places.filter(p=>p.from_<=limit&&(!byId('westerosOnlyEpisode').checked||p.episodes.includes(limit)))}
  function fit(whole=false){const pts=visiblePlaces().map(p=>coordinates[p.name]);if(!pts.length){camera={x:600,y:1100,w:1200,h:1200/ratio()};draw();return}const xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]);const left=whole?0:Math.min(...xs)-270,right=whole?1200:Math.max(...xs)+270,top=whole?0:Math.min(...ys)-140,bottom=whole?1650:Math.max(...ys)+140;const r=ratio();let w=Math.max(650,right-left),h=Math.max(420,bottom-top);if(w/h<r)w=h*r;else h=w/r;camera={x:(left+right)/2,y:(top+bottom)/2,w,h};draw()}
  function zoom(factor){const w=Math.max(350,Math.min(2600,camera.w*factor));camera.w=w;camera.h=w/ratio();draw()}
  byId('westerosZoomIn').onclick=()=>zoom(.8);byId('westerosZoomOut').onclick=()=>zoom(1.25);byId('westerosFit').onclick=()=>fit();byId('westerosWhole').onclick=()=>fit(true);
  stage.addEventListener('pointerdown',e=>{if(e.target.closest('.westeros-pin')||e.button!==0)return;drag={x:e.clientX,y:e.clientY,cx:camera.x,cy:camera.y};stage.setPointerCapture(e.pointerId)});
  stage.addEventListener('pointermove',e=>{if(!drag)return;camera.x=Math.max(-400,Math.min(1600,drag.cx-(e.clientX-drag.x)*camera.w/stage.clientWidth));camera.y=Math.max(-300,Math.min(1950,drag.cy-(e.clientY-drag.y)*camera.h/stage.clientHeight));draw()});
  stage.addEventListener('pointerup',()=>drag=null);stage.addEventListener('pointercancel',()=>drag=null);
  stage.addEventListener('keydown',e=>{if(e.target!==stage)return;const shifts={ArrowLeft:[-.15,0],ArrowRight:[.15,0],ArrowUp:[0,-.15],ArrowDown:[0,.15]};if(shifts[e.key]){e.preventDefault();camera.x+=shifts[e.key][0]*camera.w;camera.y+=shifts[e.key][1]*camera.h;draw()}if(e.key==='+')zoom(.8);if(e.key==='-')zoom(1.25)});
  let previousWidth=0,previousHeight=0;
  new ResizeObserver(()=>{if(stage.clientWidth&&stage.clientHeight&&(stage.clientWidth!==previousWidth||stage.clientHeight!==previousHeight)){previousWidth=stage.clientWidth;previousHeight=stage.clientHeight;fit()}}).observe(stage);
  function svg(tag,attrs,text){const el=document.createElementNS(ns,tag);for(const [key,value] of Object.entries(attrs))el.setAttribute(key,value);if(text)el.textContent=text;return el}
  function selectPlace(name,focus=false,reveal=false){
    const place=visiblePlaces().find(p=>p.name===name);if(!place)return;
    selected=name;
    const detail=byId('westerosDetail');detail.replaceChildren();
    const tag=document.createElement('span');tag.className='tag';tag.textContent=`CONHECIDO DESDE O EPISÓDIO ${place.from_}`;
    const title=document.createElement('h3');title.textContent=place.name;title.tabIndex=-1;
    const description=document.createElement('p');description.textContent=place.desc;
    const heading=document.createElement('h4');heading.textContent=`Até o episódio ${limit}`;
    const info=document.createElement('p');info.textContent=(updates[name]||[]).filter(([ep])=>ep<=limit).at(-1)?.[1]||'As informações conhecidas até este ponto estão descritas acima.';
    const house=controllingHouse(name);
    if(house){const crest=CharacterFamilies.icon(house);detail.append(crest);const owner=document.createElement('p');owner.className='westeros-owner';owner.textContent=`Domínio conhecido: Casa ${HOUSE_DATA.houses[house]}`;detail.append(owner)}
    detail.append(tag,title,description,heading,info);
    const back=document.createElement('button');back.type='button';back.className='westeros-back';back.textContent='↑ Voltar ao mapa';back.onclick=()=>{panel.scrollTo({top:0,behavior:'smooth'});stage.focus({preventScroll:true})};detail.append(back);
    if(reveal){if(full())panel.scrollTo({top:detail.offsetTop,behavior:'smooth'});else detail.scrollIntoView({block:'nearest',behavior:'smooth'})}
    for(const pin of byId('westerosPins').children)pin.setAttribute('aria-pressed',String(pin.dataset.place===name));
    for(const button of byId('westerosList').children)button.setAttribute('aria-pressed',String(button.textContent===name));
    if(focus)title.focus({preventScroll:true});
  }
  function render(ep){
    limit=ep;selector.value=String(ep);const places=visiblePlaces();
    byId('westerosScope').textContent=byId('westerosOnlyEpisode').checked?`Locais que aparecem no episódio ${ep}. As informações continuam limitadas a esse capítulo.`:`Locais e informações até o episódio ${ep}, inclusive. Nenhum local de episódios posteriores é exibido.`;
    byId('westerosPins').replaceChildren();byId('westerosLeaders').replaceChildren();byId('westerosList').replaceChildren();
    for(const place of places){
      const [x,y,dx,dy,anchor]=coordinates[place.name];
      const pin=svg('g',{class:'westeros-pin',role:'button',tabindex:'0','aria-label':`Ver informações: ${place.name}`,'aria-pressed':'false'});pin.dataset.place=place.name;
      if(['Fortaleza Vermelha','Fosso dos Dragões'].includes(place.name))byId('westerosLeaders').append(svg('path',{d:`M572 1081  ${x} ${y}`,class:'westeros-city-line'}));
      pin.append(svg('circle',{cx:x,cy:y,r:24,class:'westeros-pin-hit'}),svg('path',{d:`M${x} ${y+17}c-6-8-18-17-18-29a18 18 0 0 1 36 0c0 12-12 21-18 29Z`,class:'westeros-pin-marker'}));
      const house=controllingHouse(place.name);
      if(house){pin.dataset.house=house;pin.append(svg('image',{href:CharacterFamilies.url(house),x:x-16,y:y-33,width:32,height:36,'aria-hidden':'true',class:'westeros-pin-crest'}))}else pin.append(svg('circle',{cx:x,cy:y-12,r:5,fill:'#fff'}));
      pin.append(svg('text',{x:x+dx,y:y+dy,'text-anchor':anchor,class:'westeros-pin-label'},place.name));
      pin.addEventListener('click',()=>selectPlace(place.name,false,true));pin.addEventListener('keydown',e=>{if(['Enter',' '].includes(e.key)){e.preventDefault();selectPlace(place.name,true,true)}});byId('westerosPins').append(pin);
      const button=document.createElement('button');button.type='button';button.textContent=place.name;button.onclick=()=>selectPlace(place.name,false,true);byId('westerosList').append(button);
    }
    if(places.length)selectPlace(places.some(p=>p.name===selected)?selected:places[0].name);else{selected=null;byId('westerosDetail').textContent='Nenhum local registrado neste episódio.'}if(stage.clientWidth)fit();
  }
  byId('westerosOnlyEpisode').onchange=()=>render(limit);
  selector.onchange=()=>{const main=document.getElementById('episode');main.value=selector.value;main.dispatchEvent(new Event('change'))};
  function syncFullscreen(){const full=document.fullscreenElement===panel||fallback;byId('westerosFullscreen').textContent=full?'Sair da tela cheia':'Ver em tela cheia';byId('westerosFullscreen').setAttribute('aria-expanded',String(full));requestAnimationFrame(()=>{if(stage.clientWidth)fit()})}
  async function toggleFullscreen(){
    if(document.fullscreenElement===panel){await document.exitFullscreen();return}
    if(fallback){closeFallback();return}
    returnFocus=document.activeElement;
    try{if(!panel.requestFullscreen)throw new Error('unsupported');await panel.requestFullscreen()}catch{fallback=true;panel.classList.add('westeros-fullscreen');document.body.classList.add('westeros-fullscreen-open');panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');panel.setAttribute('aria-label','Mapa de Westeros em tela cheia');byId('westerosFullscreen').focus();syncFullscreen()}
  }
  function closeFallback(){fallback=false;panel.classList.remove('westeros-fullscreen');document.body.classList.remove('westeros-fullscreen-open');panel.removeAttribute('role');panel.removeAttribute('aria-modal');panel.removeAttribute('aria-label');syncFullscreen();returnFocus?.focus()}
  byId('westerosFullscreen').onclick=toggleFullscreen;
  document.addEventListener('fullscreenchange',syncFullscreen);
  panel.addEventListener('keydown',e=>{if(!fallback)return;if(e.key==='Escape'){e.preventDefault();closeFallback()}if(e.key==='Tab'){const focusable=[...panel.querySelectorAll('button,select,input,[tabindex="0"]')];const first=focusable[0],last=focusable.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
  window.WesterosMap={render};render(Number(document.getElementById('episode').value));syncFullscreen();
})();

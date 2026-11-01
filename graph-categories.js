'use strict';
(() => {
 const controls=new WeakMap();
 function mount(select,render){
  if(!select||controls.has(select))return;
  let chosen=null;
  const details=document.createElement('details');details.className='graph-category-filter';
  const summary=document.createElement('summary');summary.setAttribute('aria-label','Filtrar mapa por uma ou mais categorias');
  const list=document.createElement('div');list.className='graph-category-options';
  const hint=document.createElement('p');hint.textContent='Escolha uma ou mais categorias.';list.append(hint);
  const buttons=new Map();
  for(const option of select.options){const button=document.createElement('button');button.type='button';button.textContent=option.value==='all'?'Todas as categorias':option.textContent;button.dataset.category=option.value;button.setAttribute('aria-pressed',String(option.value==='all'));button.onclick=()=>{if(option.value==='all')chosen=null;else{if(!chosen)chosen=new Set();if(chosen.has(option.value))chosen.delete(option.value);else chosen.add(option.value);if(chosen.size===0)chosen=null}select.value='all';sync();render()};buttons.set(option.value,button);list.append(button)}
  function sync(){const names=[...select.options].filter(o=>chosen?.has(o.value)).map(o=>o.textContent);summary.textContent=names.length===0?'Todas as categorias':names.length===1?names[0]:`${names.length} categorias selecionadas`;summary.title=names.join(', ')||'Todas as categorias';for(const [value,button] of buttons)button.setAttribute('aria-pressed',String(value==='all'?!chosen:chosen?.has(value)||false));}
  controls.set(select,{matches:cat=>!chosen||chosen.has(cat),reset(){chosen=null;select.value='all';sync()}});
  select.addEventListener('change',()=>{chosen=select.value==='all'?null:new Set([select.value]);sync();render()});
  details.append(summary,list);select.before(details);select.hidden=true;
  details.addEventListener('keydown',e=>{if(e.key==='Escape'){details.open=false;summary.focus()}});
  document.addEventListener('pointerdown',e=>{if(!details.contains(e.target))details.open=false});sync();
 }
 window.GraphCategories={mount,matches(select,cat){return controls.get(select)?.matches(cat)??(select.value==='all'||select.value===cat)},reset(select){if(controls.has(select))controls.get(select).reset();else select.value='all'}};
})();

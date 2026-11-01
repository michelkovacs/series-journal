'use strict';
(() => {
  const params=new URLSearchParams(location.search);
  const selector=document.getElementById('episode');
  const value=params.get('episodio');
  if(selector&&value&&[...selector.options].some(o=>o.value===value)){selector.value=value;selector.dispatchEvent(new Event('change'))}
  const target=params.get('tab');
  if(['graphview','recap','season-summary','characters','places','mysteries'].includes(target))document.querySelector(`[data-tab="${target}"]`)?.click();
  const id=params.get('personagem');
  if(id&&typeof chars!=='undefined'&&chars.some(c=>c.id===id)&&!document.getElementById('graphview').classList.contains('hidden')){select(id);const title=document.querySelector('#detail h3');if(title){title.tabIndex=-1;title.focus({preventScroll:true})}}
})();

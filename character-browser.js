'use strict';
(() => {
 const palettes=['rose','green','blue','violet'];
 function tag(el,index){el.classList.add('category-tag');el.dataset.tone=palettes[index%palettes.length]}
 function cards(host,chars,groups){
  const keys=Object.keys(groups);let control=document.getElementById('characterCategory');
  if(!control){const label=document.createElement('label');label.className='character-category-filter';label.textContent='Filtrar por categoria';control=document.createElement('select');control.id='characterCategory';control.setAttribute('aria-label','Filtrar personagens por categoria');label.append(control);host.before(label);control.onchange=apply}
  const previous=control.value;control.replaceChildren(new Option('Todas as categorias','all'));
  for(const key of keys.filter(k=>chars.some(c=>c.cat===k)))control.add(new Option(groups[key][0],key));
  control.value=[...control.options].some(o=>o.value===previous)?previous:'all';
  [...host.children].forEach((card,i)=>{const c=chars[i];card.dataset.category=c.cat;card.dataset.character=c.id;const badge=card.querySelector('.tag');if(badge)tag(badge,keys.indexOf(c.cat));const photo=card.querySelector('.avatar');const house=CharacterFamilies.house(c.id);if(photo&&house){const row=document.createElement('div');row.className='character-portrait-badges';photo.before(row);row.append(photo,CharacterFamilies.icon(house))}});
  function apply(){for(const card of host.children)card.hidden=control.value!=='all'&&card.dataset.category!==control.value;let empty=document.getElementById('characterFilterEmpty');if(!empty){empty=document.createElement('p');empty.id='characterFilterEmpty';empty.textContent='Nenhum personagem nesta categoria até o episódio escolhido.';host.after(empty)}empty.hidden=[...host.children].some(c=>!c.hidden)}
  apply();
 }
 window.CharacterBrowser={cards};
 document.querySelectorAll('[data-directory-filter]').forEach(select=>select.addEventListener('change',()=>{for(const li of select.closest('section').querySelectorAll('li[data-category]'))li.hidden=select.value!=='all'&&li.dataset.category!==select.value}));
})();

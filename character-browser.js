'use strict';
(() => {
 const palettes=['rose','green','blue','violet','amber'];
 const collator=new Intl.Collator('pt-BR',{sensitivity:'base',numeric:true});
 const normalize=value=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR').trim();
 const states=new WeakMap();
 function controls(host,category,prefix){
  let state=states.get(host);if(state)return state;
  const bar=document.createElement('div');bar.className='character-browse-controls';
  const field=(text,control)=>{const label=document.createElement('label');label.textContent=text;label.append(control);bar.append(label)};
  const search=document.createElement('input');search.type='search';search.id=prefix+'Search';search.placeholder='Nome do personagem';search.setAttribute('aria-label','Buscar personagem por nome');field('Buscar por nome',search);
  category.id=prefix+'Category';field('Filtrar por categoria',category);
  const sort=document.createElement('select');sort.id=prefix+'Sort';sort.setAttribute('aria-label','Ordenar personagens por');sort.add(new Option('Nome','name'));sort.add(new Option('Categoria','category'));field('Ordenar por',sort);
  const only=EpisodeFilter.checkbox(prefix+'OnlyEpisode','Somente neste episódio',()=>state.apply());only.label.title=EpisodeFilter.note;const hint=document.createElement('small');hint.textContent=EpisodeFilter.note;only.label.append(hint);bar.append(only.label);
  const status=document.createElement('p');status.className='character-browse-status';status.setAttribute('role','status');
  host.before(bar,status);state={search,category,sort,status,only:only.input,series:document.body.dataset.series||host.closest('[data-series]')?.dataset.series,episode:()=>Number(document.getElementById('episode')?.value||1)};states.set(host,state);
  state.apply=()=>{const items=[...host.children],query=normalize(search.value),order=sort.value;items.sort((a,b)=>order==='category'?(collator.compare(a.dataset.categoryLabel,b.dataset.categoryLabel)||collator.compare(a.dataset.name,b.dataset.name)):(collator.compare(a.dataset.name,b.dataset.name)||collator.compare(a.dataset.categoryLabel,b.dataset.categoryLabel)));for(const item of items){item.hidden=(category.value!=='all'&&item.dataset.category!==category.value)||!normalize(item.dataset.name).includes(query)||(state.only.checked&&!EpisodeFilter.has(state.series,item.dataset.character,state.episode()))||(item.dataset.from&&Number(item.dataset.from)>state.episode());if(item.dataset.from){const link=item.querySelector('a');const url=new URL(link.href);url.searchParams.set('temporada','1');url.searchParams.set('episodio',String(state.episode()));link.href=url.href}host.append(item)}const count=items.filter(i=>!i.hidden).length;status.textContent=count?`${count} de ${items.length} personagens`:'Nenhum personagem encontrado. Ajuste a busca ou a categoria.'};
  search.addEventListener('input',state.apply);category.addEventListener('change',state.apply);sort.addEventListener('change',state.apply);document.getElementById('episode')?.addEventListener('change',state.apply);return state;
 }
 function cards(host,chars,groups){
  const keys=Object.keys(groups);const existing=states.get(host),category=existing?.category||document.createElement('select');const state=controls(host,category,'character');
  const previous=category.value;category.replaceChildren(new Option('Todas as categorias','all'));for(const key of keys.filter(k=>chars.some(c=>c.cat===k)))category.add(new Option(groups[key][0],key));category.value=[...category.options].some(o=>o.value===previous)?previous:'all';
  [...host.children].forEach((card,i)=>{const c=chars[i];card.dataset.category=c.cat;card.dataset.character=c.id;card.dataset.name=c.name;card.dataset.categoryLabel=groups[c.cat][0];const tag=card.querySelector('.tag');if(tag){tag.classList.add('category-tag');tag.dataset.tone=palettes[keys.indexOf(c.cat)%palettes.length]}const photo=card.querySelector('.avatar'),house=CharacterFamilies.house(c.id);if(photo&&house&&!card.querySelector('.character-portrait-badges')){const row=document.createElement('div');row.className='character-portrait-badges';photo.before(row);row.append(photo,CharacterFamilies.icon(house))}});state.apply();
 }
 window.CharacterBrowser={cards};
 document.querySelectorAll('[data-directory-filter]').forEach((category,i)=>{const section=category.closest('section'),list=section.querySelector('ul');for(const item of list.children){item.dataset.name=item.querySelector('a').textContent;item.dataset.categoryLabel=item.querySelector('.category-tag').textContent}const oldLabel=category.parentElement;oldLabel.removeChild(category);oldLabel.remove();const state=controls(list,category,'directory'+i);const info=EPISODE_PRESENCE[state.series];const episode=document.createElement('select');episode.setAttribute('aria-label','Episódio para '+section.querySelector('h2').textContent);for(let n=1;n<=info.maxEpisode;n++)episode.add(new Option('Episódio '+n,String(n)));episode.value=String(info.knownUntil);const label=document.createElement('label');label.textContent='Até o episódio';label.append(episode);state.only.closest('.character-browse-controls').insertBefore(label,state.only.parentElement);state.episode=()=>Number(episode.value);episode.addEventListener('change',state.apply);state.apply()});
})();

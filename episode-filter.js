'use strict';
window.EpisodeFilter={
 has(series,id,episode){return EPISODE_PRESENCE[series]?.characters[id]?.includes(Number(episode))||false},
 checkbox(id,text,change){const label=document.createElement('label');label.className='episode-only-filter';const input=document.createElement('input');input.type='checkbox';input.id=id;input.addEventListener('change',change);label.append(input,document.createTextNode(text));return {label,input}},
 note:'Presença registrada nos trechos do resumo, incluindo menções.'
};

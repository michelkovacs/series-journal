/* Retratos da adaptação Netflix de 2024. */
const THREE_BODY_CAST = {"ye": [[1, "Rosalind Chao"]], "jin": [[1, "Jess Hong"]], "saul": [[1, "Jovan Adepo"]], "auggie": [[1, "Eiza González"]], "jack": [[1, "John Bradley"]], "will": [[1, "Alex Sharp"]], "shi": [[1, "Benedict Wong"]], "wade": [[1, "Liam Cunningham"]], "tatiana": [[1, "Marlo Kelly"]], "vera": [[1, "Vedette Lim"]], "mike": [[2, "Jonathan Pryce"]], "raj": [[1, "Saamer Usmani"]], "sophon": [[2, "Sea Shimooka"]], "ye-father": [[1, "Perry Yung"]], "lilian": [[8, "CCH Pounder"]]};
const castImages=new Map(),castFailures=new Set(),failedLocalPhotos=new Set();
function castFor(id){return THREE_BODY_CAST[id]?.filter(([first])=>first<=episode).at(-1)?.[1]||null}
function localPortrait(c){const src=THREE_BODY_LOCAL_PHOTOS[c.id]?.filter(([first])=>first<=episode).at(-1)?.[1];return src&&!failedLocalPhotos.has(src)?src:null}
function portraitSource(c){return portraits[c.id]||localPortrait(c)||castImages.get(castFor(c.id))||null}
function portraitDescription(c){if(portraits[c.id])return 'Retrato enviado por você';if(localPortrait(c))return 'Foto do personagem · incluída no site';const actor=castFor(c.id);return actor?`Retrato de ${actor} · intérprete de ${c.name} · TVmaze`:'Retrato não disponível para este episódio'}
function refreshPortraits(){graph();cards();if(selected)select(selected);refreshRecapImages();window.dispatchEvent(new Event('paper-portraits-updated'))}
async function loadCastPortraits(){
 const actors=[...new Set(chars.filter(c=>!localPortrait(c)&&!portraits[c.id]).map(c=>castFor(c.id)).filter(Boolean))];
 let cursor=0;
 async function worker(){while(cursor<actors.length){const actor=actors[cursor++];if(castImages.has(actor)||castFailures.has(actor))continue;
 try{const response=await fetch('https://api.tvmaze.com/search/people?q='+encodeURIComponent(actor),{signal:AbortSignal.timeout(12000)});if(!response.ok)throw Error('Retrato indisponível');const rows=await response.json();const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’']/g,'').toLowerCase();const person=rows.find(row=>normalize(row.person?.name||'')===normalize(actor))?.person;const url=person?.image?.medium||person?.image?.original;if(!url||new URL(url).hostname!=='static.tvmaze.com')throw Error('Sem foto identificada');await new Promise((resolve,reject)=>{const image=new Image();image.onload=resolve;image.onerror=reject;image.src=url});castImages.set(actor,url);refreshPortraits();}
 catch{castFailures.add(actor)}
 }}
 await Promise.all([worker(),worker(),worker()]);
 const current=chars.filter(c=>!localPortrait(c)&&!portraits[c.id]).map(c=>castFor(c.id)).filter(Boolean);const failed=current.filter(actor=>castFailures.has(actor));const status=document.getElementById('castPhotoStatus');if(status){status.textContent=failed.length?'Alguns retratos não carregaram. Você pode tentar novamente ou enviar uma foto pelo perfil.':'Retratos identificados do elenco via TVmaze, quando disponíveis. As fotos enviadas por você têm prioridade.';status.dataset.state=failed.length?'partial':'loaded'}
}
function retryCastPortraits(){castFailures.clear();loadCastPortraits()}

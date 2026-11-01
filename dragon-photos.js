/* Retratos editoriais dos intérpretes. A fase é escolhida pelo episódio,
   sem usar a lista de elenco das temporadas posteriores. */
const DRAGON_CAST = {
 viserys:[[1,'Paddy Considine']],rhaenyra:[[1,'Milly Alcock'],[6,"Emma D'Arcy"]],
 daemon:[[1,'Matt Smith']],alicent:[[1,'Emily Carey'],[6,'Olivia Cooke']],
 otto:[[1,'Rhys Ifans']],corlys:[[1,'Steve Toussaint']],rhaenys:[[1,'Eve Best']],
 criston:[[1,'Fabien Frankel']],aemma:[[1,'Sian Brooke']],mysaria:[[1,'Sonoya Mizuno']],
 laena:[[2,'Nova Foueillis-Mosé'],[5,'Savannah Steyn'],[6,'Nanna Blondell']],
 laenor:[[3,'Theo Nate'],[6,'John Macmillan']],aegon:[[3,null],[6,'Ty Tennant'],[8,'Tom Glynn-Carney']],
 lyonel:[[3,'Gavin Spokes']],harwin:[[3,'Ryan Corr']],larys:[[3,'Matthew Needham']],
 joffrey:[[5,'Solly McLeod']],jacaerys:[[6,'Leo Hart'],[8,'Harry Collett']],
 lucerys:[[6,'Harvey Sadler'],[8,'Elliot Grihault']],
 'joffrey-son':[[6,null],[8,'Oscar Eskinazi']],aemond:[[6,'Leo Ashton'],[8,'Ewan Mitchell']],
 helaena:[[6,'Evie Allen'],[8,'Phia Saban']],baela:[[6,'Shani Smethurst'],[8,'Bethany Antonia']],
 rhaena:[[6,'Eva Ossei-Gerning'],[8,'Phoebe Campbell']],vaemond:[[8,'Wil Johnson']],borros:[[10,'Roger Evans']]
};
const castImages=new Map(),castFailures=new Set(),failedLocalPhotos=new Set();
function castFor(id){return DRAGON_CAST[id]?.filter(([first])=>first<=episode).at(-1)?.[1]||null}
function localPortrait(c){const src=DRAGON_LOCAL_PHOTOS[c.id]?.filter(([first])=>first<=episode).at(-1)?.[1];return src&&!failedLocalPhotos.has(src)?src:null}
function portraitSource(c){return portraits[c.id]||localPortrait(c)||castImages.get(castFor(c.id))||null}
function portraitDescription(c){if(portraits[c.id])return 'Retrato enviado por você';if(localPortrait(c))return 'Foto do personagem · incluída no site';const actor=castFor(c.id);return actor?`Retrato de ${actor} · intérprete de ${c.name} · TVmaze`:'Fase infantil · retrato automático não disponível para este episódio'}
function refreshPortraits(){graph();cards();if(selected)select(selected);refreshRecapImages()}
async function loadCastPortraits(){
 const actors=[...new Set(chars.filter(c=>!localPortrait(c)&&!portraits[c.id]).map(c=>castFor(c.id)).filter(Boolean))];
 let cursor=0;
 async function worker(){while(cursor<actors.length){const actor=actors[cursor++];if(castImages.has(actor)||castFailures.has(actor))continue;
 try{const response=await fetch('https://api.tvmaze.com/search/people?q='+encodeURIComponent(actor),{signal:AbortSignal.timeout(12000)});if(!response.ok)throw Error('Retrato indisponível');const rows=await response.json();const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’']/g,'').toLowerCase();const person=rows.find(row=>normalize(row.person?.name||'')===normalize(actor))?.person;const url=person?.image?.medium||person?.image?.original;if(!url||new URL(url).hostname!=='static.tvmaze.com')throw Error('Sem foto identificada');await new Promise((resolve,reject)=>{const image=new Image();image.onload=resolve;image.onerror=reject;image.src=url});castImages.set(actor,url);refreshPortraits();}
 catch{castFailures.add(actor)}
 }}
 await Promise.all([worker(),worker(),worker()]);
 const current=chars.filter(c=>!localPortrait(c)&&!portraits[c.id]).map(c=>castFor(c.id)).filter(Boolean);const failed=current.filter(actor=>castFailures.has(actor));const status=document.getElementById('castPhotoStatus');if(status){status.textContent=failed.length?'As fotos incluídas no site estão disponíveis. Alguns retratos complementares não carregaram; você também pode enviar uma foto pelo perfil.':'Fotos dos personagens incluídas no site. Retratos complementares do elenco via TVmaze quando disponíveis.';status.dataset.state=failed.length?'partial':'loaded'}
}
function retryCastPortraits(){castFailures.clear();loadCastPortraits()}

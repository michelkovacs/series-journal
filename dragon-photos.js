/* Only confirmed photographs of the fictional characters, never actor portraits. */
const failedLocalPhotos=new Set();
function localPortrait(c){const src=DRAGON_LOCAL_PHOTOS[c.id]?.filter(([first])=>first<=episode).at(-1)?.[1];return src&&!failedLocalPhotos.has(src)?src:null}
function portraitSource(c){return portraits[c.id]||localPortrait(c)||null}
function portraitDescription(c){return portraits[c.id]?'Foto enviada por você':localPortrait(c)?(DRAGON_IMAGE_INFO[c.id]?.caption||'Foto do personagem na série'):'Foto do personagem ainda não disponível'}
function refreshPortraits(){graph();cards();if(selected)select(selected);refreshRecapImages();window.dispatchEvent(new Event('paper-portraits-updated'))}
function loadCastPortraits(){const status=document.getElementById('castPhotoStatus');if(status)status.textContent='Imagens dos personagens: cenas da série e ilustrações identificadas nas fichas.'}

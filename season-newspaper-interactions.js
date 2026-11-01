'use strict';
(() => {
  const host = document.getElementById('season-summary');
  const series = document.body.dataset.series;
  const data = SEASON_NEWSPAPERS[series];
  if (!host || !data) return;
  const records = series === 'dragon' ? DRAGON_DATA.characters : series === 'three-body' ? THREE_BODY_DATA.characters : chars;
  const local = series === 'dragon' ? DRAGON_LOCAL_PHOTOS : series === 'three-body' ? THREE_BODY_LOCAL_PHOTOS : {};
  const finalEpisode = series === 'dragon' ? 10 : series === 'three-body' ? 8 : 1;
  function el(tag, cls, text) { const n = document.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; return n; }
  function source(id) {
    if (series === 'noturno') return photos[id] || null;
    return portraits[id] || local[id]?.filter(([,src])=>src).at(-1)?.[1] || null;
  }
  function previewImage(c, cls) {
    const fallback = el('div', cls + ' paper-no-photo', c.name.split(' ').map(s=>s[0]).slice(0,2).join(''));
    fallback.setAttribute('role', 'img'); fallback.setAttribute('aria-label', `Foto indisponível de ${c.name}`);
    const src = source(c.id); if (!src) return fallback;
    const image = el('img', cls); image.src = src; image.alt = c.name; image.referrerPolicy = 'no-referrer'; image.onerror = () => image.replaceWith(fallback); return image;
  }
  // Illustrate an event only with its own named participants; never borrow another face.
  function renderIllustrations() {
  host.querySelectorAll('.paper-page').forEach((page, pageIndex) => {
    const items = data[pageIndex === 0 ? 'page1' : 'page2'];
    page.querySelectorAll('.paper-article').forEach((article, index) => {
      article.querySelector('.paper-event-figure')?.remove();
      const ids = items[index]?.illustrationCharacters || [];
      const people = ids.map(id=>records.find(c=>c.id===id)).filter(Boolean);
      const available = people.filter(c=>source(c.id));
      if (!available.length) return;
      const figure = el('figure', 'paper-event-figure');
      const images = el('div', 'paper-event-portraits');
      available.slice(0,2).forEach(c=>{
        const link = el('a', 'paper-character-photo-link'); link.href = '#graphview'; link.dataset.paperCharacter = c.id;
        link.setAttribute('aria-label', `Ver prévia de ${c.name}`); link.setAttribute('aria-haspopup','dialog');
        link.append(previewImage(c,'paper-event-photo')); images.append(link);
      });
      const caption=el('figcaption');
      available.forEach((c,i)=>{if(i)caption.append(document.createTextNode(' e '));const link=el('a','paper-character-link',c.name);link.href='#graphview';link.dataset.paperCharacter=c.id;link.setAttribute('aria-haspopup','dialog');caption.append(link)});
      caption.append(document.createTextNode(' · retratos ilustrativos; não é registro exato da cena.'));
      figure.append(images,caption);
      article.querySelector('h3').after(figure);
    });
  });
  }
  renderIllustrations();
  const aliases = new Map();
  function addAlias(text,id) { if (text && !aliases.has(text.toLocaleLowerCase('pt-BR'))) aliases.set(text.toLocaleLowerCase('pt-BR'),id); }
  records.forEach(c=>{addAlias(c.name,c.id);if(!['joffrey','joffrey-son','ye-father','wife','daughter','sophon'].includes(c.id))addAlias(c.name.split(' ')[0],c.id)});
  if (series === 'three-body') { addAlias('Ye','ye');addAlias('Evans','mike');addAlias('Shi','shi');addAlias('Clarence Shi','shi');addAlias('Da Shi','shi');addAlias('Sophon','sophon'); }
  if (series === 'noturno') { addAlias('Quinn','alex');addAlias('Nathan','nathan'); }
  const escape = text=>[...text].map(c=>/[\p{L}\p{N}\s]/u.test(c)?c:String.fromCharCode(92)+c).join('');
  const pattern = [...aliases.keys()].sort((a,b)=>b.length-a.length).map(escape).join('|');
  // Unicode boundaries avoid linking fragments of other words or names.
  const matcher = new RegExp(String.raw`(?<![\p{L}\p{N}_])(${pattern})(?![\p{L}\p{N}_])`,'giu');
  const walker = document.createTreeWalker(host.querySelector('.newspaper-spread'),NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement.closest('a,button,script,style')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});
  const texts=[];while(walker.nextNode())texts.push(walker.currentNode);
  for (const text of texts) {
    const matches=[...text.data.matchAll(matcher)]; if(!matches.length)continue;
    const fragment=document.createDocumentFragment();let offset=0;
    for(const match of matches){
      fragment.append(document.createTextNode(text.data.slice(offset,match.index)));
      const id=aliases.get(match[0].toLocaleLowerCase('pt-BR'));
      // Aegon in the dream refers to the Conqueror, not the prince's dossier.
      if(series==='dragon'&&id==='aegon'&&/sonho de\s*$/i.test(text.data.slice(0,match.index))){fragment.append(document.createTextNode(match[0]));}
      else {const link=el('a','paper-character-link',match[0]);link.href='#graphview';link.dataset.paperCharacter=id;link.setAttribute('aria-haspopup','dialog');link.setAttribute('aria-label',`Ver prévia de ${records.find(c=>c.id===id).name}`);fragment.append(link);}
      offset=match.index+match[0].length;
    }
    fragment.append(document.createTextNode(text.data.slice(offset)));text.replaceWith(fragment);
  }
  const dialog=el('dialog','paper-character-dialog');dialog.id='paper-character-dialog';dialog.setAttribute('aria-labelledby','paper-preview-name');document.body.append(dialog);
  let current=null;
  function renderPreview(id){
    const c=records.find(c=>c.id===id);if(!c)return;current=id;dialog.replaceChildren();
    const close=el('button','paper-preview-close','×');close.type='button';close.setAttribute('aria-label','Fechar prévia do personagem');close.onclick=()=>dialog.close();
    const name=el('h2','',c.name);name.id='paper-preview-name';
    const profile=el('a','paper-profile-link','Ver ficha do personagem →');profile.href='#graphview';
    profile.href=CharacterPages.url(id,finalEpisode);
    dialog.append(close,previewImage(c,'paper-preview-photo'),name,el('p','photo-note',`Ficha com informações até o episódio ${finalEpisode}.`),profile);
    if(!source(id))dialog.append(el('p','photo-note','Foto ainda não disponível. A ficha permite enviar um retrato.'));
  }
  host.addEventListener('click',e=>{const link=e.target.closest('[data-paper-character]');if(!link)return;e.preventDefault();renderPreview(link.dataset.paperCharacter);dialog.showModal();});
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  function updateImages(){renderIllustrations();if(dialog.open&&current)renderPreview(current)}
  window.addEventListener('noturno-portraits-updated',updateImages);
  window.addEventListener('paper-portraits-updated',updateImages);
  window.addEventListener('beforeprint',()=>{if(dialog.open)dialog.close()});
})();

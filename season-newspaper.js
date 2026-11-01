'use strict';
(() => {
  const host = document.getElementById('season-summary');
  const data = SEASON_NEWSPAPERS[document.body.dataset.series];
  if (!host || !data) return;
  function el(tag, cls, text) { const n = document.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; return n; }
  function masthead(number) {
    const top = el('div', 'paper-masthead');
    const meta = el('div', 'paper-meta'); meta.append(el('span', '', data.edition), el('span', '', `CADERNO ESPECIAL · ${number}/2`));
    top.append(meta, el('div', 'paper-name', 'Jornal das Séries'));
    const line = el('div', 'paper-series-line'); line.append(el('strong', '', data.title), el('span', '', number === 1 ? 'A HISTÓRIA' : 'DESFECHO & PERSPECTIVAS'));
    top.append(line); return top;
  }
  function article(item) {
    const a = el('article', 'paper-article'); a.append(el('h3', '', item.title));
    item.paragraphs.forEach(text => a.append(el('p', '', text))); return a;
  }
  const toolbar = el('div', 'newspaper-tools');
  const note = el('div'); note.append(el('span', 'tag', data.edition), el('p', '', data.coverage));
  const actions = el('div', 'newspaper-actions');
  const read = el('button', 'newspaper-read', data.edition.includes('PARCIAL') ? 'Ler edição parcial' : 'Ler resumo com spoilers');
  const print = el('button', 'newspaper-print', 'Imprimir / salvar PDF'); print.type = read.type = 'button';
  const spread = el('div', 'newspaper-spread'); spread.id = 'season-newspaper-pages'; spread.hidden = true;
  read.setAttribute('aria-controls', spread.id); read.setAttribute('aria-expanded', 'false');
  function reveal() { spread.hidden = false; read.textContent = 'Ocultar jornal'; read.setAttribute('aria-expanded', 'true'); }
  read.onclick = () => { if (spread.hidden) reveal(); else { spread.hidden = true; read.textContent = data.edition.includes('PARCIAL') ? 'Ler edição parcial' : 'Ler resumo com spoilers'; read.setAttribute('aria-expanded', 'false'); } };
  print.onclick = () => { reveal(); window.print(); };
  window.addEventListener('beforeprint', () => { if (!host.classList.contains('hidden')) reveal(); });
  actions.append(read, print); toolbar.append(note, actions); host.append(toolbar);
  const first = el('article', 'paper-page'); first.setAttribute('aria-label', 'Página 1 de 2: a história da temporada');
  first.append(masthead(1));
  if (data.edition.includes('PARCIAL')) first.append(el('div', 'paper-partial', 'EDIÇÃO PARCIAL · COBERTURA NARRATIVA ATÉ O EPISÓDIO 1'));
  first.append(el('h2', 'paper-headline', data.headline), el('p', 'paper-deck', data.deck));
  const lead = el('div', 'paper-lead'); const copy = el('div', 'paper-lead-copy'); data.lead.forEach(text => copy.append(el('p', '', text)));
  const figure = el('figure', 'paper-figure'); const image = el('img'); image.src = data.image; image.alt = data.imageAlt; image.decoding = 'async';
  figure.append(image, el('figcaption', '', data.imageCaption)); lead.append(copy, figure); first.append(lead);
  const columns = el('div', 'paper-columns'); data.page1.forEach(item => columns.append(article(item))); first.append(columns);
  const strip = el('div', 'paper-briefs'); data.strip.forEach(([label, text]) => { const item = el('div'); item.append(el('strong', '', label), el('p', '', text)); strip.append(item); });
  first.append(strip); spread.append(first);
  const second = el('article', 'paper-page'); second.setAttribute('aria-label', 'Página 2 de 2: desfecho e questões em aberto');
  second.append(masthead(2), el('h2', 'paper-headline paper-headline-secondary', data.page2Headline), el('p', 'paper-deck', data.page2Deck));
  const continuation = el('div', 'paper-columns'); data.page2.forEach(item => continuation.append(article(item))); second.append(continuation);
  const people = el('section', 'paper-people'); people.append(el('h3', 'paper-section-title', 'Quem move a história'));
  const cast = el('div', 'paper-cast'); data.cast.forEach(([name, role]) => { const c = el('div'); c.append(el('strong', '', name), el('p', '', role)); cast.append(c); }); people.append(cast); second.append(people);
  const questions = el('section', 'paper-questions'); questions.append(el('h3', 'paper-section-title', 'As perguntas que ficam'));
  const list = el('ol'); data.questions.forEach(q => list.append(el('li', '', q))); questions.append(list); second.append(questions);
  spread.append(second); host.append(spread);
})();

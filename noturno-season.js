'use strict';
(() => {
  const researchedOn = '2026-10-31';
  const schedule = [
    ['2026-10-30', 'Lázaro, vem para fora!'], ['2026-10-30', 'For Such a Time as This'],
    ['2026-11-06', null], ['2026-11-13', null], ['2026-11-20', null],
    ['2026-11-27', null], ['2026-12-04', null], ['2026-12-11', null],
    ['2026-12-18', null], ['2026-12-25', null]
  ].map(([date, title], index) => ({ number: index + 1, date, title, dossier: index === 0, released: index === 1 }));
  const byId = id => document.getElementById(id);
  const create = (tag, className, text) => {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (text !== undefined) e.textContent = text;
    return e;
  };
  const dateLabel = date => date.split('-').reverse().join('/');
  const releaseLabel = ep => ep.released ? 'Já lançado · resumo pendente' : ep.date > researchedOn ? 'Programado' : 'Estreia informada pela fonte';
  const tabs = ['graphview', 'recap', 'characters', 'places', 'mysteries'];
  const counts = ['nchars', 'nlinks', 'nplaces', 'nclues'];
  const originalCounts = counts.map(id => byId(id).textContent);
  let currentTab = 'graphview';
  const episodeSelect = byId('episode');
  episodeSelect.replaceChildren();
  episodeSelect.setAttribute('aria-label', 'Selecionar episódio de Noturno');
  for (const ep of schedule) {
    const option = create('option', '', `${String(ep.number).padStart(2, '0')} — ${ep.title || 'Episódio ' + ep.number}${ep.date > researchedOn ? ' · ' + dateLabel(ep.date) : ''}`);
    option.value = ep.number;
    episodeSelect.append(option);
  }
  const season = create('section', 'panel season-overview');
  season.setAttribute('aria-labelledby', 'season-title');
  const heading = create('h2', '', 'Temporada 1 · calendário dos 10 episódios');
  heading.id = 'season-title';
  season.append(heading, create('p', 'muted', 'Pesquisa em 31/10/2026: dois episódios na estreia; os demais, semanalmente até 25/12. O dossiê narrativo disponível é o do episódio 1.'));
  const grid = create('div', 'season-grid');
  const buttons = [];
  for (const ep of schedule) {
    const b = create('button', 'episode-card');
    b.type = 'button';
    b.append(create('strong', '', `EP ${String(ep.number).padStart(2, '0')}`), create('time', '', dateLabel(ep.date)), create('span', '', ep.title || 'Título a confirmar'), create('span', '', ep.dossier ? 'Dossiê disponível' : releaseLabel(ep)));
    b.querySelector('time').dateTime = ep.date;
    b.setAttribute('aria-label', `Episódio ${ep.number}${ep.title ? ', ' + ep.title : ''}, ${dateLabel(ep.date)}, ${ep.dossier ? 'dossiê disponível' : releaseLabel(ep)}`);
    b.onclick = () => { episodeSelect.value = ep.number; update(); };
    buttons.push(b);
    grid.append(b);
  }
  season.append(grid);
  const sources = create('details', 'season-sources');
  sources.append(create('summary', '', 'Fontes e limites desta atualização'));
  sources.append(create('p', '', 'Calendário consultado em uma fonte secundária pública, FreshCalendars (29/10/2026), que cita Apple TV Press. As datas dos episódios 3 a 10 foram calculadas pela fonte a partir da periodicidade semanal anunciada. Os comunicados da Apple estão vinculados abaixo; o acesso direto a eles está bloqueado neste ambiente.'));
  const links = [
    ['Calendário consultado · FreshCalendars (texto-fonte público)', 'https://github.com/mustafaozcaninfo/freshcalendars/blob/b8cd454ea4a6aad37e49622ba57d66c413f42e84/apps/news/src/content/articles/2026/10/nocturne-apple-tv-release-date-episode-schedule-october-30.md'],
    ['Apple TV Press · anúncio de estreia', 'https://www.apple.com/tv-pr/news/2026/07/apple-tvs-thrilling-new-crime-drama-nocturne-starring-liev-schreiber-zazie-beetz-and-stephen-graham-to-make-global-debut-on-friday-october-30/'],
    ['Apple TV Press · anúncio do trailer', 'https://www.apple.com/tv-pr/news/2026/09/apple-tv-unveils-trailer-for-nocturne-the-gripping-new-drama-led-by-liev-schreiber-and-zazie-beetz-and-stars-stephen-graham/']
  ];
  for (const [label, href] of links) { const a = create('a', '', label); a.href = href; a.target = '_blank'; a.rel = 'noopener noreferrer'; sources.append(a); }
  sources.append(create('p', '', 'O título do episódio 2, For Such a Time as This, e seu lançamento foram informados pelo usuário. Seu resumo e os títulos e resumos dos episódios 3 a 10 ainda não foram confirmados. O episódio 1 preserva o material fornecido originalmente. Informações dos livros não são tratadas como acontecimentos da adaptação.'));
  season.append(sources);
  document.querySelector('.statrow').after(season);
  const pending = create('section', 'panel pending-episode');
  pending.id = 'pendingEpisode';
  pending.hidden = true;
  pending.setAttribute('aria-live', 'polite');
  season.after(pending);
  function update() {
    const ep = schedule[Number(episodeSelect.value) - 1];
    buttons.forEach((b, i) => { b.classList.toggle('active', i === ep.number - 1); b.setAttribute('aria-pressed', String(i === ep.number - 1)); });
    document.querySelector('.intro small').textContent = `ARQUIVO ${String(ep.number).padStart(3, '0')} / EPISÓDIO ${ep.number}`;
    pending.hidden = ep.dossier;
    if (ep.dossier) {
      counts.forEach((id, i) => { byId(id).textContent = originalCounts[i]; });
      document.querySelector(`[data-tab="${currentTab}"]`).click();
      return;
    }
    tabs.forEach(id => byId(id).classList.add('hidden'));
    counts.forEach(id => { byId(id).textContent = '—'; });
    byId('pageTitle').textContent = `Episódio ${ep.number} · ${ep.title || (ep.date > researchedOn ? 'programado' : 'resumo em apuração')}`;
    byId('pageSubtitle').textContent = `${ep.released ? 'Já lançado · resumo pendente. ' : ''}Data informada: ${dateLabel(ep.date)}. Pesquisa em 31/10/2026. Sem perfil ou conexão posterior ao episódio 1 confirmados.`;
    pending.replaceChildren();
    pending.append(create('span', 'tag', `TEMPORADA 1 · EPISÓDIO ${ep.number}`), create('h2', '', ep.title || (ep.date > researchedOn ? 'Este capítulo ainda está programado' : 'O resumo deste capítulo ainda não foi confirmado')), create('p', 'muted', ep.released ? 'Este episódio já foi lançado. O resumo dos acontecimentos e as atualizações de personagens e conexões ainda estão pendentes de confirmação.' : ep.date > researchedOn ? `Lançamento previsto para ${dateLabel(ep.date)}, conforme o calendário consultado. Os acontecimentos serão incluídos quando houver material publicado e conferido.` : 'A fonte informa a estreia em 30/10/2026, mas não fornece o enredo do episódio. Os personagens e conexões do episódio anterior não são apresentados como se fossem deste capítulo.'));
    const label = create('label', 'recap-note-label', `Suas anotações · episódio ${ep.number}`);
    const notes = create('textarea', 'notes');
    notes.id = 'seasonEpisodeNotes'; label.htmlFor = notes.id;
    notes.placeholder = 'Registre suas impressões e hipóteses sobre este episódio…';
    const key = `noturno-season-notes-ep${ep.number}`;
    const status = create('p', 'photo-status'); status.setAttribute('role', 'status');
    try { notes.value = localStorage.getItem(key) || ''; } catch { status.textContent = 'Armazenamento indisponível.'; }
    notes.oninput = () => { try { localStorage.setItem(key, notes.value); status.textContent = 'Anotações salvas neste navegador.'; } catch { status.textContent = 'Não foi possível salvar neste navegador.'; } };
    pending.append(label, notes, status);
    const back = create('button', '', 'Abrir dossiê do episódio 1');
    back.onclick = () => { episodeSelect.value = '1'; update(); };
    pending.append(back);
  }
  document.querySelectorAll('[data-tab]').forEach(b => b.addEventListener('click', () => {
    currentTab = b.dataset.tab;
    if (episodeSelect.value !== '1') update();
  }));
  episodeSelect.onchange = update;
  update();
})();

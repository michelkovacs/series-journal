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
  const tabs = ['graphview', 'recap', 'season-summary', 'characters', 'places', 'mysteries'];
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
  const pending = create('section', 'panel pending-episode');
  pending.id = 'pendingEpisode';
  pending.hidden = true;
  pending.setAttribute('aria-live', 'polite');
  byId('graphview').before(pending);
  function update() {
    if (currentTab === 'season-summary') {
      pending.hidden = true;
      tabs.forEach(id => byId(id).classList.toggle('hidden', id !== currentTab));
      byId('pageTitle').textContent = 'Resumo da Temporada';
      byId('pageSubtitle').textContent = 'Edição parcial em duas páginas · conteúdo narrativo disponível até o episódio 1.';
      document.querySelector('.intro small').textContent = 'EDIÇÃO PARCIAL / TEMPORADA 1';
      episodeSelect.closest('label').hidden = true;
      return;
    }
    episodeSelect.closest('label').hidden = false;
    const ep = schedule[Number(episodeSelect.value) - 1];
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

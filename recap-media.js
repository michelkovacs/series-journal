'use strict';
window.RecapMedia = (() => {
  let showCharacters = false;
  function element(tag, className, text) {
    const n = document.createElement(tag);
    if (className) n.className = className;
    if (text !== undefined) n.textContent = text;
    return n;
  }
  function mountCharacterToggle(host) {
    host.classList.toggle('recap-show-characters', showCharacters);
    const existing = host.querySelector('.recap-display-controls');
    if (existing) {
      existing.querySelector('input').checked = showCharacters;
      return;
    }
    const details = host.querySelector('#recapDetails');
    if (!details || !details.querySelector('.recap-event')) return;
    const controls = element('div', 'recap-display-controls');
    const label = element('label', 'recap-characters-toggle');
    const checkbox = element('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'recapShowCharacters';
    checkbox.checked = showCharacters;
    checkbox.setAttribute('aria-controls', details.id);
    checkbox.addEventListener('change', () => {
      showCharacters = checkbox.checked;
      host.classList.toggle('recap-show-characters', showCharacters);
    });
    label.append(checkbox, document.createTextNode('Exibir personagens'));
    controls.append(label);
    details.before(controls);
  }
  function create(options) {
    const host = element('div', options.hero ? 'recap-hero-visual recap-adaptive-media' : 'recap-event-media recap-adaptive-media');
    function portraits() {
      host.replaceChildren();
      host.dataset.mediaKind = 'characters';
      const people = options.characters || [];
      const grid = element('div', 'recap-portrait-grid');
      function updatePortraitState() {
        const hasPhotos = !!grid.querySelector('img');
        host.dataset.hasPortraits = String(hasPhotos);
        const label = host.querySelector('.recap-media-label');
        if (label) label.textContent = 'Personagens envolvidos · retratos ilustrativos do trecho';
      }
      grid.dataset.count = Math.min(people.length, 4);
      for (const person of people.slice(0, 4)) {
        const figure = element('figure', 'recap-person');
        figure.dataset.character = person.id;
        const placeholder = element('div', 'recap-person-placeholder', person.name.split(' ').map(x => x[0]).slice(0, 2).join(''));
        placeholder.setAttribute('role', 'img');
        placeholder.setAttribute('aria-label', `Foto indisponível de ${person.name}`);
        const portraitLink=element(person.href?'a':'div','recap-person-portrait-link');if(person.href){portraitLink.href=person.href;portraitLink.setAttribute('aria-label',`Ver ficha de ${person.name}`)}
        if (person.src) {
          const image = element('img', 'recap-person-photo');
          image.alt = person.name;
          image.referrerPolicy = 'no-referrer';
          image.onerror = () => { image.replaceWith(placeholder); updatePortraitState(); };
          image.src = person.src;
          portraitLink.append(image);
        } else portraitLink.append(placeholder);
        const caption=element('figcaption');const name=element(person.href?'a':'span','',person.name);if(person.href)name.href=person.href;caption.append(name);figure.append(portraitLink,caption);
        grid.append(figure);
      }
      if (people.length) host.append(element('span', 'recap-media-label', 'Personagens envolvidos · retratos ilustrativos do trecho'),grid);
      else host.append(element('div', 'recap-series-title', options.seriesTitle), element('span', 'recap-media-label', 'Imagem indisponível'));
      updatePortraitState();
    }
    function series(index = 0) {
      const candidates = [options.seriesImage ? {src:options.seriesImage,alt:options.seriesAlt,caption:options.seriesCaption} : null, ...(options.seriesFallbacks || [])].filter(Boolean);
      const candidate = candidates[index];
      if (candidate) image(candidate.src, candidate.alt || `Imagem representativa de ${options.seriesTitle}`, candidate.caption || 'Imagem representativa da série · não é uma cena específica do episódio', () => series(index + 1), 'series');
      else portraits();
    }
    function image(src, alt, caption, onError, kind) {
      host.replaceChildren();
      host.dataset.mediaKind = kind;
      const img = element('img', 'recap-specific-photo');
      img.alt = alt;
      img.referrerPolicy = 'no-referrer';
      img.onerror = onError;
      img.src = src;
      host.append(img, element('span', 'recap-media-label', caption));
    }
    if (options.image) image(options.image, options.alt || 'Imagem do acontecimento', options.caption || 'Imagem do acontecimento', options.hero ? () => series() : portraits, 'specific');
    else if (options.hero) series();
    else portraits();
    return host;
  }
  return { create, mountCharacterToggle };
})();

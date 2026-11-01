'use strict';
(() => {
  const involved = [
    ['jurek'], ['karl','jurek'], ['michael','felicia'],
    ['jonah','nathan','alex','saga'], ['jonah','nathan'], ['jurek','jonah','alex']
  ];
  const seriesArt = 'https://www.apple.com/tv-pr/shows-and-films/n/nocturne/images/season-01/show-home-graphic-header/key-art-01/16x9/Apple_TV_Nocturne_key_art_graphic_header_16_9_show_home.jpg.large_2x.jpg';
  function people(ids) {
    return ids.map(id => chars.find(c => c.id === id)).filter(Boolean).map(c => ({
      id:c.id,name:c.name,src:customPhotos[c.id] || (c.id === 'jurek' ? 'assets/series/noturno-cast.webp' : photos[c.id]) || null
    }));
  }
  function refresh() {
    const hero = document.querySelector('#recap .recap-hero-visual');
    if (hero) hero.replaceWith(RecapMedia.create({
      hero:true,seriesTitle:'Noturno',seriesImage:seriesArt,
      seriesAlt:'Imagem de divulgação de Noturno',
      seriesFallbacks:[{src:'assets/series/noturno-cast.webp',alt:'Stephen Graham, intérprete de Jurek Walter em Noturno',caption:'Imagem representativa do elenco · Stephen Graham · foto Raph_PH / Wikimedia Commons, CC BY 4.0; recortada pela fonte'}],
      characters:people(['jonah','saga','jurek'])
    }));
    document.querySelectorAll('#recap .recap-event').forEach((card,index) => {
      const old = card.querySelector('.recap-event-media');
      if (old) old.replaceWith(RecapMedia.create({seriesTitle:'Noturno',characters:people(involved[index] || [])}));
    });
  }
  window.addEventListener('noturno-portraits-updated',refresh);
  refresh();
})();

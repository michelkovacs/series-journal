'use strict';
(() => {
  const involved = [
    ['jurek'], ['karl','jurek'], ['michael','felicia'],
    ['jonah','nathan','alex','saga'], ['jonah','nathan'], ['jurek','jonah','alex']
  ];
  const seriesArt = "https://m.media-amazon.com/images/S/pv-target-images/ef9425e1792b320dd0da4498623cbc24d749ee7081701b64263515291f6bcb41.jpg";
  function people(ids) {
    return ids.map(id => chars.find(c => c.id === id)).filter(Boolean).map(c => ({
      id:c.id,name:c.name,src:photos[c.id] || null
    }));
  }
  function refresh() {
    const hero = document.querySelector('#recap .recap-hero-visual');
    if (hero) hero.replaceWith(RecapMedia.create({
      hero:true,seriesTitle:'Noturno',seriesImage:seriesArt,
      seriesAlt:'Imagem de divulgação de Noturno',
      seriesFallbacks:[{src:'assets/series/noturno-mark.svg',alt:'Identidade visual do dossiê Noturno',caption:'Identidade visual do dossiê · fotografia da série indisponível'}],
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

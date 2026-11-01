'use strict';
(() => {
  const root=new URL('./',document.currentScript.src);
  const series=document.body.dataset.series;
  function url(id,episode,seriesId=series){const item=CHARACTER_DIRECTORY[seriesId]?.characters[id];if(!item)return new URL(CHARACTER_DIRECTORY[seriesId]?.page||'index.html',root).href;const out=new URL(item.path,root);const n=Number(episode||CHARACTER_DIRECTORY[seriesId].maxEpisode),ep=CHARACTER_DIRECTORY[seriesId].episodes?.find(e=>e.number===n);out.searchParams.set('temporada',String(ep?.season||1));out.searchParams.set('episodio',String(ep?.seasonEpisode||n));return out.href}
  window.CharacterPages={url};
})();

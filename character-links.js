'use strict';
(() => {
  const root=new URL('./',document.currentScript.src);
  const series=document.body.dataset.series;
  function url(id,episode,seriesId=series){const item=CHARACTER_DIRECTORY[seriesId]?.characters[id];if(!item)return new URL(CHARACTER_DIRECTORY[seriesId]?.page||'index.html',root).href;const out=new URL(item.path,root);out.searchParams.set('temporada','1');out.searchParams.set('episodio',String(episode||CHARACTER_DIRECTORY[seriesId].maxEpisode));return out.href}
  window.CharacterPages={url};
})();

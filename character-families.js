'use strict';
const HOUSE_DATA={
 images:{"targaryen":"assets/houses/detailed/targaryen.png","hightower":"assets/houses/detailed/hightower.png","velaryon":"assets/houses/detailed/velaryon.png","arryn":"assets/houses/detailed/arryn.png","strong":"assets/houses/detailed/strong.png","baratheon":"assets/houses/detailed/baratheon.png","cole":"assets/houses/detailed/cole.svg","lonmouth":"assets/houses/detailed/lonmouth.png"},
 houses:{targaryen:'Targaryen',hightower:'Hightower',velaryon:'Velaryon',arryn:'Arryn',strong:'Strong',baratheon:'Baratheon',cole:'Cole',lonmouth:'Lonmouth'},
 characters:{viserys:'targaryen',rhaenyra:'targaryen',daemon:'targaryen',alicent:'hightower',otto:'hightower',corlys:'velaryon',rhaenys:'targaryen',criston:'cole',aemma:'arryn',laena:'velaryon',laenor:'velaryon',aegon:'targaryen',lyonel:'strong',harwin:'strong',larys:'strong',joffrey:'lonmouth',jacaerys:'velaryon',lucerys:'velaryon','joffrey-son':'velaryon',aemond:'targaryen',helaena:'targaryen',baela:'targaryen',rhaena:'targaryen',vaemond:'velaryon',borros:'baratheon',hobert:'hightower',boremund:'baratheon','jaehaerys-elder':'targaryen','aegon-younger':'targaryen','viserys-younger':'targaryen',visenya:'targaryen',baelon:'targaryen','jaehaerys-younger':'targaryen',jaehaera:'targaryen'}
};
if(typeof document!=='undefined'){
 const familyRoot=new URL('./',document.currentScript.src);
 window.CharacterFamilies={
  house(id){return document.body.dataset.series==='dragon'?HOUSE_DATA.characters[id]:null},
  icon(house){if(!house)return null;const img=document.createElement('img');img.className='house-emblem';img.src=new URL(HOUSE_DATA.images[house],familyRoot).href;img.alt=`Emblema da Casa ${HOUSE_DATA.houses[house]}`;img.title=`Casa ${HOUSE_DATA.houses[house]}`;img.width=48;img.height=52;return img},
  url(house){return new URL(HOUSE_DATA.images[house],familyRoot).href}
 };
}

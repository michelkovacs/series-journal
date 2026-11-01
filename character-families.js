'use strict';
const HOUSE_DATA={
 houses:{targaryen:'Targaryen',hightower:'Hightower',velaryon:'Velaryon',arryn:'Arryn',strong:'Strong',baratheon:'Baratheon',cole:'Cole',lonmouth:'Lonmouth'},
 characters:{viserys:'targaryen',rhaenyra:'targaryen',daemon:'targaryen',alicent:'hightower',otto:'hightower',corlys:'velaryon',rhaenys:'targaryen',criston:'cole',aemma:'arryn',laena:'velaryon',laenor:'velaryon',aegon:'targaryen',lyonel:'strong',harwin:'strong',larys:'strong',joffrey:'lonmouth',jacaerys:'velaryon',lucerys:'velaryon','joffrey-son':'velaryon',aemond:'targaryen',helaena:'targaryen',baela:'targaryen',rhaena:'targaryen',vaemond:'velaryon',borros:'baratheon'}
};
if(typeof document!=='undefined'){
 const familyRoot=new URL('./',document.currentScript.src);
 window.CharacterFamilies={
  house(id){return document.body.dataset.series==='dragon'?HOUSE_DATA.characters[id]:null},
  icon(house){if(!house)return null;const img=document.createElement('img');img.className='house-emblem';img.src=new URL(`assets/houses/${house}.svg`,familyRoot).href;img.alt=`Emblema da Casa ${HOUSE_DATA.houses[house]}`;img.title=`Casa ${HOUSE_DATA.houses[house]}`;img.width=48;img.height=52;return img},
  url(house){return new URL(`assets/houses/${house}.svg`,familyRoot).href}
 };
}

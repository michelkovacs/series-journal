'use strict';
(() => {
  const root = new URL('./', document.currentScript.src);
  const key = 'series-journal-install';
  const cooldown = 7 * 24 * 60 * 60 * 1000;
  let deferred = null, panel = null, primary = null, help = null, closed = false;
  const standalone = () => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  function state() { try { return JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch { return {}; } }
  function save(value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
  function close(dismissed = true) { closed = true; if (panel) panel.hidden = true; if (dismissed) save({...state(),dismissedUntil:Date.now()+cooldown}); }
  function element(tag, cls, text) { const el=document.createElement(tag); if(cls)el.className=cls; if(text!==undefined)el.textContent=text; return el; }
  function manualInstructions() {
    const ua=navigator.userAgent;
    if(/iPad|iPhone|iPod/.test(ua)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1)) return 'No Safari, toque em Compartilhar e depois em “Adicionar à Tela de Início”. Confirme em “Adicionar”.';
    if(/Safari/.test(ua)&&!/Chrome|Chromium|Edg\//.test(ua)) return 'No Safari do Mac, abra Arquivo e escolha “Adicionar ao Dock”, se essa opção estiver disponível.';
    return 'Abra o menu do navegador e procure “Instalar página como app”, “Instalar este site como aplicativo” ou “Adicionar à tela inicial”. A disponibilidade depende do navegador.';
  }
  function show() {
    if(closed||standalone())return;
    const saved=state();if(saved.installed||saved.dismissedUntil>Date.now())return;
    if(panel){panel.hidden=false;return;}
    panel=element('aside','pwa-install');panel.id='pwaInstallPrompt';panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','false');panel.setAttribute('aria-labelledby','pwaInstallTitle');panel.setAttribute('aria-describedby','pwaInstallDescription');
    const closeButton=element('button','pwa-install-close','×');closeButton.type='button';closeButton.setAttribute('aria-label','Fechar convite de instalação');closeButton.onclick=()=>close();
    const heading=element('div','pwa-install-heading'),icon=element('img');icon.src=new URL('assets/pwa/icon-192.png',root).href;icon.alt='';icon.width=46;icon.height=46;
    const title=element('h2','',matchMedia('(max-width:760px)').matches?'Adicionar à tela inicial?':'Adicionar à área de trabalho?');title.id='pwaInstallTitle';heading.append(icon,title);
    const description=element('p','','Instale o Series Journal para abrir suas séries como um aplicativo.');description.id='pwaInstallDescription';
    const actions=element('div','pwa-install-actions');primary=element('button','pwa-install-primary',deferred?'Adicionar aplicativo':'Como adicionar');primary.type='button';
    const later=element('button','pwa-install-later','Agora não');later.type='button';later.onclick=()=>close();
    help=element('p','pwa-install-help');help.id='pwaInstallHelp';help.hidden=true;help.setAttribute('role','status');primary.setAttribute('aria-controls',help.id);
    primary.onclick=async()=>{
      if(!deferred){help.textContent=manualInstructions();help.hidden=false;return;}
      const prompt=deferred;deferred=null;primary.disabled=true;
      try { await prompt.prompt();const result=await prompt.userChoice;close(result.outcome!=='accepted'); }
      catch { primary.disabled=false;primary.textContent='Como adicionar';help.textContent=manualInstructions();help.hidden=false; }
    };
    actions.append(primary,later);panel.append(closeButton,heading,description,actions,help);document.body.append(panel);
    panel.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();close();}});
  }
  window.addEventListener('beforeinstallprompt',event=>{
    event.preventDefault();deferred=event;
    if(state().installed){save({});closed=false;}
    if(primary){primary.textContent='Adicionar aplicativo';primary.disabled=false;}
    show();
  });
  window.addEventListener('appinstalled',()=>{save({installed:true});close(false);});
  window.matchMedia('(display-mode: standalone)').addEventListener?.('change',()=>{if(standalone())close(false);});
  if('serviceWorker' in navigator && window.isSecureContext){
    navigator.serviceWorker.register(new URL('sw.js',root),{scope:root.pathname,updateViaCache:'none'}).catch(()=>{});
  }
  const start=()=>window.setTimeout(show,900);
  if(document.readyState==='complete')start();else window.addEventListener('load',start,{once:true});
})();

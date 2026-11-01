'use strict';
importScripts('./pwa-assets.js');
const ROOT = new URL('./', self.location.href);
const PREFIX = 'series-journal-';
const SHELL = PREFIX + 'shell-' + PWA_ASSETS.version;
const RUNTIME = PREFIX + 'pages-' + PWA_ASSETS.version;
const CORE = new Set(PWA_ASSETS.files.map(path=>new URL(path,ROOT).href));
function cacheKey(request){const url=new URL(request.url);url.search='';url.hash='';if(url.pathname.endsWith('/'))url.pathname+='index.html';return url.href;}
self.addEventListener('install',event=>{event.waitUntil((async()=>{const cache=await caches.open(SHELL);await cache.addAll(PWA_ASSETS.files.map(path=>new Request(new URL(path,ROOT),{cache:'reload'})));await self.skipWaiting();})());});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith(PREFIX)&&key!==SHELL&&key!==RUNTIME)await caches.delete(key);await self.clients.claim();})());});
async function store(key,response){
  try{const cache=await caches.open(CORE.has(key)?SHELL:RUNTIME);await cache.put(key,response);if(!CORE.has(key)){const keys=await cache.keys();for(const old of keys.slice(0,Math.max(0,keys.length-128)))await cache.delete(old);}}catch{}
}
self.addEventListener('fetch',event=>{
  const request=event.request,url=new URL(request.url);
  if(request.method!=='GET'||url.origin!==ROOT.origin||!url.pathname.startsWith(ROOT.pathname))return;
  event.respondWith((async()=>{
    const key=cacheKey(request),abort=new AbortController(),timer=request.mode==='navigate'?setTimeout(()=>abort.abort(),4500):null;
    try{
      const response=await fetch(request,{signal:abort.signal,cache:'no-cache'});
      if(response.ok){event.waitUntil(store(key,response.clone()));return response;}
      if(response.status<500)return response;
      throw new Error('Server unavailable');
    }catch{
      const shell=await caches.open(SHELL),runtime=await caches.open(RUNTIME);
      const cached=await shell.match(key)||await runtime.match(key);if(cached)return cached;
      if(request.mode==='navigate')return Response.redirect(new URL('offline.html',ROOT).href,302);
      return Response.error();
    }finally{clearTimeout(timer);}
  })());
});

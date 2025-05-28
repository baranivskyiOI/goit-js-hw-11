import{a as p,S as g,i as l}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y=p.create({baseURL:"https://pixabay.com/api/",params:{key:"50386790-558288da927f62b3f4194a21d"}});function h(s){return y.get("",{params:{q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}let n;const u=document.querySelector(".gallery"),f=document.querySelector(".loader");function b(s,r,a,o,e,t,i){return`
        <li class="card">
          <div class="img-container">
            <a href="${e}">
              <img class="card-image" src="${t}" alt="${i}" />
            </a>
          </div>
          <ul class="card-stats">
            <li><b>Likes</b><span>${r}</span></li>
            <li><b>Views</b><span>${a}</span></li>
            <li><b>Comments</b><span>${s}</span></li>
            <li><b>Downloads</b><span>${o}</span></li>
          </ul>
        </li>
    `}function L(s){return s.map(r=>{const{comments:a,likes:o,views:e,downloads:t,largeImageURL:i,webformatURL:m,tags:d}=r;return b(a,o,e,t,i,m,d)}).join(`
`)}function v(){u.innerHTML=""}function $(){f.classList.add("is-visible")}function w(){f.classList.remove("is-visible")}function x(s){v(),u.innerHTML=L(s),n?n.refresh():n=new g(".card a",{captionsData:"alt",captionDelay:250})}//!=============================================================
const c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();r&&($(),h(r).then(a=>{a.length||l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),x(a)}).catch(a=>{l.error({title:"Error",message:`${a}`})}).finally(()=>{w()}),c.reset())});
//# sourceMappingURL=index.js.map

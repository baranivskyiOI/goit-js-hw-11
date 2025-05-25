import{a as m,S as f,i as p}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g=m.create({baseURL:"https://pixabay.com/api/",params:{key:"50386790-558288da927f62b3f4194a21d"}});function y(r){return g.get("",{params:{q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data.hits)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");function h(r,s,o,i,e,t,a){return`
        <li class="card">
          <div class="img-container">
            <a href="${e}">
              <img class="card-image" src="${t}" alt="${a}" />
            </a>
          </div>
          <ul class="card-stats">
            <li><b>Likes</b><span>${s}</span></li>
            <li><b>Views</b><span>${o}</span></li>
            <li><b>Comments</b><span>${r}</span></li>
            <li><b>Downloads</b><span>${i}</span></li>
          </ul>
        </li>
    `}function b(r){return r.map(s=>{const{comments:o,likes:i,views:e,downloads:t,largeImageURL:a,webformatURL:u,tags:d}=s;return h(o,i,e,t,a,u,d)}).join(`
`)}function L(){l.innerHTML=""}function v(){c.classList.add("is-visible")}function w(){c.classList.remove("is-visible")}function $(r){L(),l.innerHTML=b(r)}//!=============================================================
const n=document.querySelector(".form"),x=new f(".card a",{captionsData:"alt",captionDelay:250});n.addEventListener("submit",r=>{r.preventDefault();const s=r.target.elements["search-text"].value.trim();v(),y(s).then(o=>{console.log(o),o.length||p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),$(o),x.refresh()}).catch(o=>{console.log(o)}).finally(()=>{w()}),n.reset()});
//# sourceMappingURL=index.js.map

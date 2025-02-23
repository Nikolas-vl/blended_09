import{a as l}from"./assets/vendor-BcYoTxAJ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const s=l.create({baseURL:"https://dummyjson.com"});async function p(e){try{return(await s.get("/products/",{params:{limit:100,skip:(e-1)*100}})).data}catch(t){console.log(t)}}async function m(e){try{return(await s.get(`/products/${e}`)).data}catch(t){console.log(t)}}async function f(e){try{return(await s.post("/products/add",e)).data}catch{}}async function y(e){try{return(await s.delete(`/products/${e}`)).data}catch(t){throw console.log(t),t}}function g(e){return e.map(({title:n,description:c,category:r,price:o,thumbnail:a})=>`<li>
        <h3>${n}</h3>
        <p>${c}</p>
        <p>${r}</p>
        <p>${o}</p>
        <img src="${a}" alt="${c}">
      </li>`).join("")}function h({id:e,title:t,description:n,category:c,price:r,thumbnail:o}){return`<li>
        <h3>${t}</h3>
        <p>${e}</p>
        <p>${n}</p>
        <p>${c}</p>
        <p>${r}</p>
        <img src="${o}" alt="${n}">
      </li>`}function P({title:e,description:t,price:n}){return`<li>
        <h3>${e}</h3>
        <p>${n}</p>
        <p>${t}</p>
      </li>`}const $=document.querySelector("#allProducts"),i=document.querySelector("#moreBtn");let d=1;i.addEventListener("click",async e=>{const t=await p(d);console.log(t),$.insertAdjacentHTML("beforeend",g(t.products)),t.total<t.skip+t.limit&&(i.style.display="none"),d+=1});const w=document.querySelector("#singleProductForm"),v=document.querySelector("#singleProduct");w.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.id.value.trim(),n=await m(t);v.insertAdjacentHTML("afterbegin",h(n))});const L=document.querySelector("#newProduct"),u=document.querySelector("#newProductSection");L.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.title.value.trim(),n=e.target.elements.description.value.trim(),c=e.target.elements.price.value.trim(),r={title:t,description:n,price:c};try{const o=await f(r);u.insertAdjacentHTML("afterbegin",P(o)),console.log(o)}catch(o){u.insertAdjacentHTML("afterbegin",o.message)}});const b=document.querySelector("#deletionProductForm");b.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.deletionId.value.trim();try{const n=await y(t);console.log(n),alert("SUCCESS ")}catch(n){alert(`ERROR ${n.message}`)}});
//# sourceMappingURL=index.js.map

!function(e){function t(t){for(var n,o,a=t[0],c=t[1],s=0,u=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(i&&i(t);u.length;)u.shift()()}var n={},r={2:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=a);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(e){return o.p+""+({0:"bootstrap-style",3:"vendors~bootstrap"}[e]||e)+"-chunk.js"}(e);var i=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}r[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var i=c;o(o.s=4)}([function(e,t,n){"use strict";function r(){const e=new XMLHttpRequest;e.open("GET","/nav/nav.html",!0),e.onload=function(){if(this.status>=200&&this.status<400){document.querySelector("#nav-placeholder").replaceWith(document.createRange().createContextualFragment(this.response));const e=Array.from(document.querySelectorAll(".nav-link")).filter(e=>e.href===window.location.href)[0],t=document.createElement("span");t.className="sr-only",t.textContent="(current)",e.appendChild(t),e.parentElement.classList.add("active")}},e.send()}n.d(t,"a",(function(){return r}))},,,,function(e,t,n){"use strict";n.r(t);var r=n(0);n.e(3).then(n.t.bind(null,1,7)),n.e(0).then(n.t.bind(null,2,7)),Object(r.a)();const o=new XMLHttpRequest;o.open("GET","https://api.github.com/users/SuniTheFish/repos",!0),o.onload=function(){if(this.status>=200&&this.status<400){const e=JSON.parse(this.response),t=document.querySelector("#git-projects");e.forEach(e=>{const n=document.createElement("div");n.className="card";const r=document.createElement("a");r.href=e.html_url,r.target="_blank";const o=document.createElement("h4");o.className="card-title my-0",o.textContent=e.name,r.appendChild(o),n.appendChild(r);const a=document.createElement("p");a.className="card-text",a.textContent=e.description||"(no description)",n.appendChild(a),t.appendChild(n)})}},o.send()}]);
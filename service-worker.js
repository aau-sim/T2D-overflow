if(!self.define){let e,n={};const o=(o,s)=>(o=new URL(o+".js",s).href,n[o]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=n,document.head.appendChild(e)}else e=o,importScripts(o),n()})).then((()=>{let e=n[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(s,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let i={};const t=e=>o(e,r),u={module:{uri:r},exports:i,require:t};n[r]=Promise.all(s.map((e=>u[e]||t(e)))).then((e=>(l(...e),i)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Type2Diabetes-simulator"}),self.skipWaiting(),e.precacheAndRoute([{url:"/ADAPT-T2D-Clone/css/about.55cec9c7.css",revision:null},{url:"/ADAPT-T2D-Clone/css/app.cd3eac0e.css",revision:null},{url:"/ADAPT-T2D-Clone/img/AAU_CENTER_WHITE_UK.e79b56db.png",revision:null},{url:"/ADAPT-T2D-Clone/index.html",revision:"86d288a76281967700d034fb524d6f96"},{url:"/ADAPT-T2D-Clone/js/SimWorker.ff80f62a.worker.js",revision:null},{url:"/ADAPT-T2D-Clone/js/about.bdaf78c5.js",revision:null},{url:"/ADAPT-T2D-Clone/js/app.4717150c.js",revision:null},{url:"/ADAPT-T2D-Clone/js/chunk-vendors.4c200c06.js",revision:null},{url:"/ADAPT-T2D-Clone/manifest.json",revision:"46c6fed09612007462f900e9d7b33a96"},{url:"/ADAPT-T2D-Clone/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>r(e,o),u={module:{uri:o},exports:l,require:t};s[o]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(n(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Type2Diabetes-simulator"}),self.skipWaiting(),e.precacheAndRoute([{url:"/T2D-GUI/css/about.55cec9c7.css",revision:null},{url:"/T2D-GUI/css/app.d7afd93f.css",revision:null},{url:"/T2D-GUI/img/AAU_CENTER_WHITE_UK.e79b56db.png",revision:null},{url:"/T2D-GUI/index.html",revision:"0b7c27b5be9451982a19d817545ca557"},{url:"/T2D-GUI/js/SimWorker.1ef864ce.worker.js",revision:null},{url:"/T2D-GUI/js/about.bdaf78c5.js",revision:null},{url:"/T2D-GUI/js/app.8b036ef2.js",revision:null},{url:"/T2D-GUI/js/chunk-vendors.4c200c06.js",revision:null},{url:"/T2D-GUI/manifest.json",revision:"46c6fed09612007462f900e9d7b33a96"},{url:"/T2D-GUI/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map

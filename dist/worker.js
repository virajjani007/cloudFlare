!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){const r=n(1);const o=JSON.stringify([{name:"url1",url:"https://linkur1"},{name:"url2",url:"https://linkur2"},{name:"url3",url:"https://linkur3"}],null,4);addEventListener("fetch",t=>{t.respondWith(async function(t){const e=new r;e.get(".*/links.*",t=>{JSON.stringify(o,{"content-type":"application/json;charset=UTF-8"})}),e.get("/",()=>new Response("Hello worker!"));return await e.route(t)}(t.request))})},function(t,e){const n=t=>e=>e.method.toLowerCase()===t.toLowerCase(),r=n("connect"),o=n("delete"),u=n("get"),s=n("head"),i=n("options"),l=n("patch"),a=n("post"),c=n("put"),d=n("trace"),h=t=>e=>{const n=new URL(e.url).pathname;return(n.match(t)||[])[0]===n};t.exports=class{constructor(){this.routes=[]}handle(t,e){return this.routes.push({conditions:t,handler:e}),this}connect(t,e){return this.handle([r,h(t)],e)}delete(t,e){return this.handle([o,h(t)],e)}get(t,e){return this.handle([u,h(t)],e)}head(t,e){return this.handle([s,h(t)],e)}options(t,e){return this.handle([i,h(t)],e)}patch(t,e){return this.handle([l,h(t)],e)}post(t,e){return this.handle([a,h(t)],e)}put(t,e){return this.handle([c,h(t)],e)}trace(t,e){return this.handle([d,h(t)],e)}all(t){return this.handle([],t)}route(t){const e=this.resolve(t);return e?e.handler(t):new Response("resource not found",{status:404,statusText:"not found",headers:{"content-type":"text/plain"}})}resolve(t){return this.routes.find(e=>!(e.conditions&&(!Array.isArray(e)||e.conditions.length))||("function"==typeof e.conditions?e.conditions(t):e.conditions.every(e=>e(t))))}}}]);
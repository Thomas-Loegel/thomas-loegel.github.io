(function(t){function e(e){for(var r,i,u=e[0],s=e[1],c=e[2],l=0,d=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"153ab2fd"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(t);var c=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"03be":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HeaderNav"),n("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[t._m(0),n("nav",{staticClass:"nav-menu",attrs:{id:"nav-menu"}},[n("ul",{staticClass:"nav-list"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1)])])])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"burger",attrs:{id:"burger"}},[n("div",{staticClass:"bar bar-1"}),n("div",{staticClass:"bar bar-2"},[t._v("menu")]),n("div",{staticClass:"bar bar-3"})])}],s={data:function(){return{name:"HeaderNav"}},mounted:function(){for(var t=document.querySelectorAll("#burger"),e=document.querySelector("#nav-menu"),n=0;n<t.length;n++)t[n].addEventListener("click",(function(){this.classList.contains("active")?(this.classList.remove("active"),e.classList.remove("active")):(this.classList.add("active"),e.classList.add("active"))}))}},c=s,l=(n("9b96"),n("2877")),f=Object(l["a"])(c,i,u,!1,null,"7cb342f8",null),d=f.exports,p={name:"App",components:{HeaderNav:d}},v=p,b=(n("5c0b"),Object(l["a"])(v,a,o,!1,null,null,null)),m=b.exports,h=(n("d3b7"),n("8c4f")),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main")},g=[],_={name:"Home",components:{}},w=_,j=Object(l["a"])(w,y,g,!1,null,null,null),O=j.exports;r["a"].use(h["a"]);var C=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],k=new h["a"]({routes:C}),x=k,P=n("2f62");r["a"].use(P["a"]);var E=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:x,store:E,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9b96":function(t,e,n){"use strict";n("03be")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.55bd2999.js.map
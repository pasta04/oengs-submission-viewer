(this["webpackJsonpoengus-submission-viewer"]=this["webpackJsonpoengus-submission-viewer"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),o=n.n(r),i=(n(9),n(1));n(10);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var d=c.a.createElement("path",{fill:"currentColor",d:"M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"}),u=function(e){var t=e.svgRef,n=e.title,a=s(e,["svgRef","title"]);return c.a.createElement("svg",l({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"film",className:"svg-inline--fa fa-film fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t},a),n?c.a.createElement("title",null,n):null,d)},v=c.a.forwardRef((function(e,t){return c.a.createElement(u,l({svgRef:t},e))})),m=(n.p,function(){var e=c.a.useState(!0),t=Object(i.a)(e,2),n=t[0],a=t[1],r=c.a.useState(""),o=Object(i.a)(r,2),l=o[0],s=o[1],d=c.a.useState([]),u=Object(i.a)(d,2),m=u[0],f=u[1],h=function(e,t){return function(){var n=document.getElementById("".concat(e,"_desc_").concat(t));if(n){var a=n.style;a.display="none"===a.display?"block":"none"}}};return c.a.useEffect((function(){var e=l;if(n){if(window.location.search){var t=window.location.search.match(/marathon=(.*)/);t&&2===(null===t||void 0===t?void 0:t.length)&&(s(t[1]),e=t[1])}a(!1)}e?fetch("https://oengus.io/api/marathon/".concat(e,"/game")).then((function(e){e.json().then((function(e){f(e)}))})):f([])}),[l]),c.a.createElement("div",{className:"App"},c.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"#282c34"}},c.a.createElement("select",{value:l,onChange:function(e){return s(e.target.value)}},c.a.createElement("option",{value:""},"-"),c.a.createElement("option",{value:"rta1kagawa"},"RTA 1n Kagawa Online"),c.a.createElement("option",{value:"mysrtafes"},"Mystery Dungeon RTA FES"),c.a.createElement("option",{value:"nagoya"},"Nagoya RTA Off meeting"))),c.a.createElement("div",{style:{textAlign:"left"}},m.map((function(e){return c.a.createElement("div",{key:e.id,style:{color:"#839496",backgroundColor:"#073642",margin:5,borderRadius:10,marginBottom:10,padding:5}},c.a.createElement("div",{onClick:h("game",e.id)},c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("div",{style:{width:70}},"\u30b2\u30fc\u30e0\uff1a"),c.a.createElement("div",{style:{width:"calc(100% - 70px)"}},e.name)),c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("div",{style:{width:70}},"\u8d70\u8005\uff1a"),c.a.createElement("div",{style:{width:"calc(100% - 70px)"}},e.user.usernameJapanese?e.user.usernameJapanese:e.user.username)),c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("div",{style:{width:70}},"\u6a5f\u7a2e\uff1a"),c.a.createElement("div",{style:{width:"calc(100% - 70px)"}},e.console)),c.a.createElement("div",{id:"game_desc_".concat(e.id),style:{display:"none",clear:"both"}},e.description)),c.a.createElement("hr",null),e.categories.map((function(e){return c.a.createElement("div",null,c.a.createElement("div",{onClick:h("category",e.id)},c.a.createElement("div",{key:e.id,style:{display:"flex"}},c.a.createElement("div",{style:{width:"calc(100% - 90px)"}},e.name),c.a.createElement("div",{style:{width:70}},function(e){var t="",n=e.match(/(\d+)H/);n&&2===n.length?t+="".concat(n[1],":").padStart(3,"0"):t+="00:";var a=e.match(/(\d+)M/);a&&2===a.length?t+="".concat(a[1],":").padStart(3,"0"):t+="00:";var c=e.match(/(\d+)S/);return c&&2===c.length?t+="".concat(c[1]).padStart(2,"0"):t+="00",t}(e.estimate)),c.a.createElement("div",{style:{width:20},onClick:function(e){return e.stopPropagation()}},c.a.createElement("a",{href:e.video,target:"_blank"},c.a.createElement(v,{style:{height:15,color:"#b58900"}})))),c.a.createElement("div",null,e.opponentDtos.map((function(t){return c.a.createElement("div",{key:e.id,style:{display:"flex"}},c.a.createElement("div",{style:{width:"calc(100% - 20px)"}},"\u30ec\u30fc\u30b9\uff1a",t.user.usernameJapanese?t.user.usernameJapanese:t.user.username),c.a.createElement("div",{style:{width:20}},c.a.createElement("a",{href:t.video,target:"_blank"},c.a.createElement(v,{style:{height:15,color:"#b58900"}}))))})))),c.a.createElement("div",{id:"category_desc_".concat(e.id),style:{display:"none",clear:"both"}},e.description),c.a.createElement("hr",{className:"categoryLine"}))})))}))))}),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(c.a.createElement(m,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");f?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(t,e)}))}}()}],[[4,1,2]]]);
//# sourceMappingURL=main.b58717b5.chunk.js.map
(this["webpackJsonpoengus-submission-viewer"]=this["webpackJsonpoengus-submission-viewer"]||[]).push([[0],{17:function(e,t,a){e.exports=a(26)},22:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),i=(a(22),a(7)),s=a(1),o=a(2),u=a.n(o),d=function(e){var t="",a=e.match(/(\d+)H/);a&&2===a.length?t+="".concat(a[1],":").padStart(3,"0"):t+="00:";var n=e.match(/(\d+)M/);n&&2===n.length?t+="".concat(n[1],":").padStart(3,"0"):t+="00:";var r=e.match(/(\d+)S/);return r&&2===r.length?t+="".concat(r[1]).padStart(2,"0"):t+="00",t},m=function(e,t){return t=(t=(t=(t=(t=(t=(t=t.replace(/yyyy/g,"".concat(e.getFullYear()))).replace(/MM/g,("0"+(e.getMonth()+1)).slice(-2))).replace(/dd/g,("0"+e.getDate()).slice(-2))).replace(/HH/g,("0"+e.getHours()).slice(-2))).replace(/mm/g,("0"+e.getMinutes()).slice(-2))).replace(/ss/g,("0"+e.getSeconds()).slice(-2))).replace(/SSS/g,("00"+e.getMilliseconds()).slice(-3))};function v(e,t){var a=e.map((function(e){return e[t]}));return e.filter((function(e,n){return a.indexOf(e[t])===n}))}a(8);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createElement("path",{fill:"currentColor",d:"M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"}),y=function(e){var t=e.svgRef,a=e.title,n=f(e,["svgRef","title"]);return r.a.createElement("svg",h({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"film",className:"svg-inline--fa fa-film fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t},n),a?r.a.createElement("title",null,a):null,p)},E=r.a.forwardRef((function(e,t){return r.a.createElement(y,h({svgRef:t},e))})),g=(a.p,a(16)),b=a.n(g),w=function(e){return r.a.createElement("div",{style:{height:"100%",width:1e3}},r.a.createElement("div",{style:{height:20,textAlign:"right"}},r.a.createElement("input",{type:"button",value:"\xd7",onClick:function(){return e.closeFunc()}})),r.a.createElement("div",{style:{height:"calc(100% - 50px)"}},r.a.createElement("div",{style:{fontSize:20}},e.marathon.name),r.a.createElement("div",null,"\u958b\u59cb\uff1a",m(new Date(e.marathon.startDate),"yyyy/MM/dd HH:mm")),r.a.createElement("div",null,"\u7d42\u4e86\uff1a",m(new Date(e.marathon.endDate),"yyyy/MM/dd HH:mm")),r.a.createElement("hr",null),r.a.createElement("div",{style:{overflowY:"scroll",height:"calc(100% - 80px)",textAlign:"initial",fontSize:"small"}},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:b()(e.marathon.description)}}))))},x=function(e){var t,a=r.a.useState([]),c=Object(s.a)(a,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){var t=[];if(0===e.schedule.lines.length)i([]);else{var a=new Date(e.schedule.lines[0].date);t.push({date:a}),a.setHours(0,0,0),e.schedule.lines.map((function(e){var n=new Date(e.date);n.setHours(0,0,0),a<n&&(t.push({date:n}),a=n),t.push(e)})),i(t)}}),[null===(t=e.schedule.lines[0])||void 0===t?void 0:t.id]),r.a.createElement("div",{className:"scheduleRoot"},r.a.createElement("div",{className:"scheduleHeader"},r.a.createElement("div",{className:"closeButton"},r.a.createElement("input",{type:"button",value:"\xd7",onClick:function(){return e.closeFunc()}})),r.a.createElement("div",{className:"scheduleTitle"},e.title),r.a.createElement("hr",null)),r.a.createElement("div",{className:"scheduleContent"},r.a.createElement("div",null,l.map((function(e,t){if(e.id){var a=e;return r.a.createElement("div",{className:"scheduleLine",key:t},r.a.createElement("div",{className:"scheduleMain"},r.a.createElement("div",{className:"scheduleDate"},m(new Date(a.date),"HH:mm")),r.a.createElement("div",{className:"scheduleGame"},a.gameName)),r.a.createElement("div",{className:"scheduleSub"},r.a.createElement("div",{className:"scheduleCategory"},a.categoryName),r.a.createElement("div",{className:"scheduleEst"},d(a.estimate))),r.a.createElement("div",{className:"scheduleSub"},r.a.createElement("hr",{className:"scheduleBorder"})),r.a.createElement("div",{className:"scheduleSub"},r.a.createElement("div",null,a.runners.map((function(e){return e.usernameJapanese?e.usernameJapanese:e.username})).join(" / "))))}var n=e;return r.a.createElement("div",{className:"scheduleDateLine"},m(n.date,"yyyy/MM/dd"))})))))},O="https://oengus.io/api/";function S(e){var t,a;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(fetch(e));case 2:return t=n.sent,n.next=5,u.a.awrap(t.json());case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}))}var k=function(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(O,"marathon"),t.next=3,u.a.awrap(S(e));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}))},N=function(){var e,t,a,n;return u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=new Date,t=e.toISOString(),e.setMonth(e.getMonth()+6),a=e.toISOString(),n="".concat(O,"marathon/forDates?start=").concat(t,"&end=").concat(a,"&zoneId=Asia/Tokyo"),r.next=7,u.a.awrap(S(n));case 7:return r.abrupt("return",r.sent);case 8:case"end":return r.stop()}}))},j=function(e){return S("".concat(O,"marathon/").concat(e))},D=function(e){return S("".concat(O,"marathon/").concat(e,"/game"))},C=function(e){return S("".concat(O,"marathon/").concat(e,"/selection"))},H=function(e){return S("".concat(O,"marathon/").concat(e,"/schedule"))},A=function(e,t,a){return function(){var n=document.getElementById("".concat(e,"_desc_").concat(t));if(n){var r=n.style;r.display=a||("none"===r.display?"block":"none")}}},M=function(){var e,t=r.a.useState([]),a=Object(s.a)(t,2),n=a[0],c=a[1],l=r.a.useState(!0),o=Object(s.a)(l,2),m=o[0],h=o[1],f=r.a.useState(""),p=Object(s.a)(f,2),y=p[0],g=p[1],b=r.a.useState(),O=Object(s.a)(b,2),S=O[0],M=O[1],T=r.a.useState([]),B=Object(s.a)(T,2),R=B[0],_=B[1],z=r.a.useState({id:0,lines:[]}),I=Object(s.a)(z,2),J=I[0],L=I[1],P=r.a.useState({}),U=Object(s.a)(P,2),W=U[0],F=U[1],V=r.a.useState(!1),K=Object(s.a)(V,2),Y=K[0],G=K[1],$=r.a.useState("submission"),q=Object(s.a)($,2),Q=q[0],X=q[1],Z=r.a.useState(!1),ee=Object(s.a)(Z,2),te=ee[0],ae=ee[1],ne=r.a.useState(""),re=Object(s.a)(ne,2),ce=re[0],le=re[1],ie=r.a.useState(!1),se=Object(s.a)(ie,2),oe=se[0],ue=se[1];r.a.useEffect((function(){!function(){var e,t,a,n;u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.a.awrap(k());case 3:return e=r.sent,r.next=6,u.a.awrap(N());case 6:t=r.sent,a=[].concat(Object(i.a)(e.live),Object(i.a)(e.open),Object(i.a)(e.next),Object(i.a)(t)),(n=v(a,"id")).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),c(n),r.next=15;break;case 13:r.prev=13,r.t0=r.catch(0);case 15:case"end":return r.stop()}}),null,null,[[0,13]])}()}),[]),r.a.useEffect((function(){ue(!0);var e=y;if(m){if(window.location.search){var t=window.location.search.match(/marathon=(.*)/);t&&2===(null===t||void 0===t?void 0:t.length)&&(g(t[1]),e=t[1])}h(!1)}if(!e)return M(void 0),le("\u30a4\u30d9\u30f3\u30c8\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),_([]),void ue(!1);le("\u30c7\u30fc\u30bf\u53d6\u5f97\u4e2d...");!function(e){var t,a,n,r;u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,le("\u30a4\u30d9\u30f3\u30c8\u60c5\u5831\u53d6\u5f97\u4e2d..."),c.next=4,u.a.awrap(j(e));case 4:return t=c.sent,M(t),le("\u5fdc\u52df\u60c5\u5831\u53d6\u5f97\u4e2d..."),c.next=9,u.a.awrap(D(e));case 9:if(a=c.sent,_(a),!t.selectionDone){c.next=17;break}return le("\u9078\u8003\u60c5\u5831\u53d6\u5f97\u4e2d..."),c.next=15,u.a.awrap(C(e));case 15:n=c.sent,F(n);case 17:if(!t.scheduleDone){c.next=23;break}return le("\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u60c5\u5831\u53d6\u5f97\u4e2d..."),c.next=21,u.a.awrap(H(e));case 21:r=c.sent,L(r);case 23:le("\u5fdc\u52df\u30b2\u30fc\u30e0\u6570\uff1a".concat(a.length)),c.next=29;break;case 26:c.prev=26,c.t0=c.catch(0),le("\u30c7\u30fc\u30bf\u53d6\u5f97\u3067\u30a8\u30e9\u30fc\u304c\u3042\u308a\u307e\u3057\u305f\u3002");case 29:return c.prev=29,ue(!1),c.finish(29);case 32:case"end":return c.stop()}}),null,null,[[0,26,29,32]])}(e)}),[y]);var de=function(){return X("submission")},me=r.a.useState(0),ve=Object(s.a)(me,2),he=ve[0],fe=ve[1];return r.a.createElement("div",{className:"App"},"marathonInfo"===Q&&S&&r.a.createElement("div",{className:"modal"},r.a.createElement(w,{marathon:S,closeFunc:de})),"schedule"===Q&&r.a.createElement("div",{className:"modal"},r.a.createElement(x,{title:null!==(e=null===S||void 0===S?void 0:S.name)&&void 0!==e?e:"",schedule:J,closeFunc:de})),"submission"===Q&&r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{style:{marginBottom:5}},r.a.createElement("select",{value:y,onChange:function(e){return g(e.target.value)},disabled:oe},r.a.createElement("option",{value:""},"-"),n.map((function(e,t){return r.a.createElement("option",{key:"".concat(e.id,"_").concat(t),value:e.id},e.name)})))),r.a.createElement("div",{style:{visibility:S?"visible":"hidden"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{style:{marginRight:10}},r.a.createElement("input",{type:"button",value:"\u6982\u8981",onClick:function(){return X("marathonInfo")}})),r.a.createElement("div",{style:{marginRight:10}},r.a.createElement("input",{type:"button",value:"\u4e00\u62ec\u958b\u9589",onClick:function(){var e=te?"none":"block",t=!0,a=!1,n=void 0;try{for(var r,c=R[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){var l=r.value;A("game",l.id,e)();var i=!0,s=!1,o=void 0;try{for(var u,d=l.categories[Symbol.iterator]();!(i=(u=d.next()).done);i=!0){var m=u.value;A("category",m.id,e)()}}catch(v){s=!0,o=v}finally{try{i||null==d.return||d.return()}finally{if(s)throw o}}}}catch(v){a=!0,n=v}finally{try{t||null==c.return||c.return()}finally{if(a)throw n}}ae(!te)}})),r.a.createElement("div",null,r.a.createElement("select",{style:{width:70},onChange:function(e){var t=Number(e.target.value);fe(t)},value:he},r.a.createElement("option",{value:0},"\u5fdc\u52df\u9806"),r.a.createElement("option",{value:1},"\u30b2\u30fc\u30e0\u540d-\u6607\u9806"),r.a.createElement("option",{value:2},"\u30b2\u30fc\u30e0\u540d-\u964d\u9806"))),r.a.createElement("div",{style:{visibility:(null===S||void 0===S?void 0:S.selectionDone)?"visible":"hidden"}},r.a.createElement("label",{style:{fontSize:12},htmlFor:"filter_check"},"\u5f53\u9078\u306e\u307f"),r.a.createElement("input",{id:"filter_check",type:"checkbox",onChange:function(){return G(!Y)},checked:Y}))),(null===S||void 0===S?void 0:S.scheduleDone)&&J.lines.length>0?r.a.createElement("div",{style:{margin:10}},r.a.createElement("input",{type:"button",value:"\u516c\u958b\u4e2d\u306e\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb",onClick:function(){return X("schedule")}})):"")),r.a.createElement("div",{style:{textAlign:"left",display:"flex",justifyContent:"center"}},r.a.createElement("div",{style:{display:"block",width:1e3}},r.a.createElement("div",{className:"message"},ce),R.sort((function(e,t){switch(he){case 1:return e.name>t.name?1:e.name<t.name?-1:0;case 2:return e.name<t.name?1:e.name>t.name?-1:0;default:return e.id>t.id?1:e.id<t.id?-1:0}})).map((function(e){var t="",a={TODO:0,VALIDATED:0,REJECTED:0,BONUS:0,BACKUP:0},n=!0,c=!1,l=void 0;try{for(var i,s=e.categories[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var o=i.value;W[o.id]?a[W[o.id].status]+=1:a.TODO+=1}}catch(m){c=!0,l=m}finally{try{n||null==s.return||s.return()}finally{if(c)throw l}}if(t=a.VALIDATED>0?"validated":a.BONUS>0?"bonus":a.BACKUP>0?"backup":a.TODO>0?"":"rejected",Y&&a.REJECTED===e.categories.length)return"";var u="\u2605\u53d6\u5f97\u5931\u6557\u2605";return e.user&&(u=e.user.usernameJapanese?e.user.usernameJapanese:e.user.username),r.a.createElement("div",{key:e.id,className:"submissionBase"},r.a.createElement("div",{className:t},r.a.createElement("div",{onClick:A("game",e.id)},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{width:70}},"\u30b2\u30fc\u30e0\uff1a"),r.a.createElement("div",{style:{width:"calc(100% - 70px)"}},e.name)),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{width:70}},"\u8d70\u8005\uff1a"),r.a.createElement("div",{style:{width:"calc(100% - 70px)"}},u)),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{width:70}},"\u6a5f\u7a2e\uff1a"),r.a.createElement("div",{style:{width:"calc(100% - 70px)"}},e.console))),r.a.createElement("div",{id:"game_desc_".concat(e.id),style:{display:"none",clear:"both"}},e.description)),r.a.createElement("hr",null),e.categories.map((function(e){var t=W[e.id]?W[e.id].status:"TODO";if(Y&&"REJECTED"===t)return"";var a=function(e){switch(e){case"VALIDATED":return"validated";case"REJECTED":return"rejected";case"BONUS":return"bonus";case"BACKUP":return"backup";default:return""}}(t);return r.a.createElement("div",{key:e.id,className:a},r.a.createElement("div",{onClick:A("category",e.id)},r.a.createElement("div",{key:e.id,style:{display:"flex"}},r.a.createElement("div",{className:"categoryName"},e.name),r.a.createElement("div",{style:{width:70}},d(e.estimate)),r.a.createElement("div",{style:{width:20},onClick:function(e){return e.stopPropagation()}},r.a.createElement("a",{href:e.video,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E,{style:{height:15,color:"#b58900"}})))),r.a.createElement("div",null,e.opponentDtos.map((function(t){var a="\u2605\u53d6\u5f97\u5931\u6557\u2605";return t.user&&(a=t.user.usernameJapanese?t.user.usernameJapanese:t.user.username),r.a.createElement("div",{key:"".concat(e.id,"_").concat(t.id),style:{display:"flex"}},r.a.createElement("div",{style:{width:"calc(100% - 20px)"}},e.type,"\uff1a",a),r.a.createElement("div",{style:{width:20}},r.a.createElement("a",{href:t.video,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E,{style:{height:15,color:"#b58900"}}))))})))),r.a.createElement("div",{id:"category_desc_".concat(e.id),style:{display:"none",clear:"both"}},e.description),r.a.createElement("hr",{className:"categoryLine"}))})))}))))))},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(M,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");T?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(t,e)}))}}()},8:function(e,t,a){}},[[17,1,2]]]);
//# sourceMappingURL=main.0f4eb624.chunk.js.map
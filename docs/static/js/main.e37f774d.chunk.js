(this["webpackJsonpoengus-submission-viewer"]=this["webpackJsonpoengus-submission-viewer"]||[]).push([[0],{18:function(e,t,a){e.exports=a(27)},23:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),l=(a(23),a(7)),s=a(1),o=a(17),u=a(2),d=a.n(u),m=function(e){var t="",a=e.match(/(\d+)H/);a&&2===a.length?t+="".concat(a[1],":").padStart(3,"0"):t+="00:";var n=e.match(/(\d+)M/);n&&2===n.length?t+="".concat(n[1],":").padStart(3,"0"):t+="00:";var r=e.match(/(\d+)S/);return r&&2===r.length?t+="".concat(r[1]).padStart(2,"0"):t+="00",t},v=function(e,t){return t=(t=(t=(t=(t=(t=(t=t.replace(/yyyy/g,"".concat(e.getFullYear()))).replace(/MM/g,("0"+(e.getMonth()+1)).slice(-2))).replace(/dd/g,("0"+e.getDate()).slice(-2))).replace(/HH/g,("0"+e.getHours()).slice(-2))).replace(/mm/g,("0"+e.getMinutes()).slice(-2))).replace(/ss/g,("0"+e.getSeconds()).slice(-2))).replace(/SSS/g,("00"+e.getMilliseconds()).slice(-3))};function f(e,t){var a=e.map((function(e){return e[t]}));return e.filter((function(e,n){return a.indexOf(e[t])===n}))}a(8);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var y=r.a.createElement("path",{fill:"currentColor",d:"M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"}),E=function(e){var t=e.svgRef,a=e.title,n=p(e,["svgRef","title"]);return r.a.createElement("svg",h({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"film",className:"svg-inline--fa fa-film fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t},n),a?r.a.createElement("title",null,a):null,y)},g=r.a.forwardRef((function(e,t){return r.a.createElement(E,h({svgRef:t},e))})),b=(a.p,a(16)),w=a.n(b),x=function(e){return r.a.createElement("div",{style:{height:"100%",width:1e3}},r.a.createElement("div",{style:{height:20,textAlign:"right"}},r.a.createElement("input",{type:"button",value:"\xd7",onClick:function(){return e.closeFunc()}})),r.a.createElement("div",{style:{height:"calc(100% - 50px)"}},r.a.createElement("div",{style:{fontSize:20}},e.marathon.name),r.a.createElement("div",null,"\u958b\u59cb\uff1a",v(new Date(e.marathon.startDate),"yyyy/MM/dd HH:mm")),r.a.createElement("div",null,"\u7d42\u4e86\uff1a",v(new Date(e.marathon.endDate),"yyyy/MM/dd HH:mm")),r.a.createElement("hr",null),r.a.createElement("div",{style:{overflowY:"scroll",height:"calc(100% - 80px)",textAlign:"initial",fontSize:"small"}},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:w()(e.marathon.description)}}))))},S=function(e){var t,a=r.a.useState([]),c=Object(s.a)(a,2),i=c[0],l=c[1];return Object(n.useEffect)((function(){var t=[];if(0===e.schedule.lines.length)l([]);else{var a=new Date(e.schedule.lines[0].date);t.push({date:a}),a.setHours(0,0,0),e.schedule.lines.map((function(e){var n=new Date(e.date);n.setHours(0,0,0),a<n&&(t.push({date:n}),a=n),t.push(e)})),l(t)}}),[null===(t=e.schedule.lines[0])||void 0===t?void 0:t.id]),r.a.createElement("div",{className:"scheduleRoot"},r.a.createElement("div",{className:"scheduleHeader"},r.a.createElement("div",{className:"closeButton"},r.a.createElement("input",{type:"button",value:"\xd7",onClick:function(){return e.closeFunc()}})),r.a.createElement("div",{className:"scheduleTitle"},e.title),r.a.createElement("hr",null)),r.a.createElement("div",{className:"scheduleContent"},r.a.createElement("div",null,i.map((function(e,t){if(e.id){var a=e,n=a.gameName,c=a.estimate;return a.setupBlock&&(n=a.setupBlockText?a.setupBlockText:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u30d6\u30ed\u30c3\u30af",c=a.setupTime),r.a.createElement("div",{className:"scheduleLine",key:t},r.a.createElement("div",{className:"scheduleMain"},r.a.createElement("div",{className:"scheduleDate"},v(new Date(a.date),"HH:mm")),r.a.createElement("div",{className:"scheduleGame"},n)),r.a.createElement("div",{className:"scheduleSub"},r.a.createElement("div",{className:"scheduleCategory"},a.categoryName),r.a.createElement("div",{className:"scheduleEst"},m(c))),r.a.createElement("div",{className:"scheduleSub"},r.a.createElement("hr",{className:"scheduleBorder"})),r.a.createElement("div",{className:"scheduleSub"},r.a.createElement("div",null,a.runners.map((function(e){return e.usernameJapanese?e.usernameJapanese:e.username})).join(" / "))))}var i=e;return r.a.createElement("div",{className:"scheduleDateLine"},v(i.date,"yyyy/MM/dd"))})))))},k="https://oengus.io/api/";function O(e){var t,a;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.a.awrap(fetch(e));case 2:return t=n.sent,n.next=5,d.a.awrap(t.json());case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}))}var N=function(){var e;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(k,"marathons"),t.next=3,d.a.awrap(O(e));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}))},j=function(){var e,t,a,n;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=new Date,t=e.toISOString(),e.setMonth(e.getMonth()+6),a=e.toISOString(),n="".concat(k,"marathons/forDates?start=").concat(t,"&end=").concat(a,"&zoneId=Asia/Tokyo"),r.next=7,d.a.awrap(O(n));case 7:return r.abrupt("return",r.sent);case 8:case"end":return r.stop()}}))},D=function(e){return O("".concat(k,"marathons/").concat(e))},C=function(e){var t,a,n;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t="".concat(k,"marathons/").concat(e,"/submissions"),r.next=3,d.a.awrap(O(t));case 3:return a=r.sent,n=[],a.map((function(e){e.games.map((function(t){var a=Object(o.a)({},t,{user:e.user});n.push(a)}))})),r.abrupt("return",n);case 7:case"end":return r.stop()}}))},H=function(e){return O("".concat(k,"marathons/").concat(e,"/selection"))},A=function(e){return O("".concat(k,"marathons/").concat(e,"/schedule"))},T=function(e,t,a){return function(){var n=document.getElementById("".concat(e,"_desc_").concat(t));if(n){var r=n.style;r.display=a||("none"===r.display?"block":"none")}}},M=function(){var e,t=r.a.useState([]),a=Object(s.a)(t,2),n=a[0],c=a[1],i=r.a.useState(!0),o=Object(s.a)(i,2),u=o[0],v=o[1],h=r.a.useState(""),p=Object(s.a)(h,2),y=p[0],E=p[1],b=r.a.useState(),w=Object(s.a)(b,2),k=w[0],O=w[1],M=r.a.useState([]),B=Object(s.a)(M,2),I=B[0],_=B[1],R=r.a.useState({id:0,lines:[]}),z=Object(s.a)(R,2),J=z[0],U=z[1],W=r.a.useState({}),P=Object(s.a)(W,2),L=P[0],F=P[1],V=r.a.useState(!1),K=Object(s.a)(V,2),G=K[0],Y=K[1],q=r.a.useState("submission"),$=Object(s.a)(q,2),Q=$[0],X=$[1],Z=r.a.useState(!1),ee=Object(s.a)(Z,2),te=ee[0],ae=ee[1],ne=r.a.useState(""),re=Object(s.a)(ne,2),ce=re[0],ie=re[1],le=r.a.useState(!1),se=Object(s.a)(le,2),oe=se[0],ue=se[1];r.a.useEffect((function(){!function(){var e,t,a,n;d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d.a.awrap(N());case 3:return e=r.sent,r.next=6,d.a.awrap(j());case 6:t=r.sent,a=[].concat(Object(l.a)(e.live),Object(l.a)(e.open),Object(l.a)(e.next),Object(l.a)(t)),(n=f(a,"id")).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),c(n),r.next=15;break;case 13:r.prev=13,r.t0=r.catch(0);case 15:case"end":return r.stop()}}),null,null,[[0,13]])}()}),[]),r.a.useEffect((function(){ue(!0);var e=y;if(u){if(window.location.search){var t=window.location.search.match(/marathon=(.*)/);t&&2===(null===t||void 0===t?void 0:t.length)&&(E(t[1]),e=t[1])}v(!1)}if(!e)return O(void 0),ie("\u30a4\u30d9\u30f3\u30c8\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),_([]),void ue(!1);ie("\u30c7\u30fc\u30bf\u53d6\u5f97\u4e2d...");!function(e){var t,a,n,r;d.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,ie("\u30a4\u30d9\u30f3\u30c8\u60c5\u5831\u53d6\u5f97\u4e2d..."),c.next=4,d.a.awrap(D(e));case 4:return t=c.sent,O(t),ie("\u5fdc\u52df\u60c5\u5831\u53d6\u5f97\u4e2d..."),c.next=9,d.a.awrap(C(e));case 9:if(a=c.sent,_(a),!t.selectionDone){c.next=17;break}return ie("\u9078\u8003\u60c5\u5831\u53d6\u5f97\u4e2d..."),c.next=15,d.a.awrap(H(e));case 15:n=c.sent,F(n);case 17:if(!t.scheduleDone){c.next=23;break}return ie("\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u60c5\u5831\u53d6\u5f97\u4e2d..."),c.next=21,d.a.awrap(A(e));case 21:r=c.sent,U(r);case 23:ie("\u5fdc\u52df\u30b2\u30fc\u30e0\u6570\uff1a".concat(a.length)),c.next=29;break;case 26:c.prev=26,c.t0=c.catch(0),ie("\u30c7\u30fc\u30bf\u53d6\u5f97\u3067\u30a8\u30e9\u30fc\u304c\u3042\u308a\u307e\u3057\u305f\u3002");case 29:return c.prev=29,ue(!1),c.finish(29);case 32:case"end":return c.stop()}}),null,null,[[0,26,29,32]])}(e)}),[y]);var de=function(){return X("submission")},me=r.a.useState(0),ve=Object(s.a)(me,2),fe=ve[0],he=ve[1];return r.a.createElement("div",{className:"App"},"marathonInfo"===Q&&k&&r.a.createElement("div",{className:"modal"},r.a.createElement(x,{marathon:k,closeFunc:de})),"schedule"===Q&&r.a.createElement("div",{className:"modal"},r.a.createElement(S,{title:null!==(e=null===k||void 0===k?void 0:k.name)&&void 0!==e?e:"",schedule:J,closeFunc:de})),"submission"===Q&&r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{style:{marginBottom:5}},r.a.createElement("select",{value:y,onChange:function(e){return E(e.target.value)},disabled:oe},r.a.createElement("option",{value:""},"-"),n.map((function(e,t){return r.a.createElement("option",{key:"".concat(e.id,"_").concat(t),value:e.id},e.name)})))),r.a.createElement("div",{style:{visibility:k?"visible":"hidden"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{style:{marginRight:10}},r.a.createElement("input",{type:"button",value:"\u6982\u8981",onClick:function(){return X("marathonInfo")}})),r.a.createElement("div",{style:{marginRight:10}},r.a.createElement("input",{type:"button",value:"\u4e00\u62ec\u958b\u9589",onClick:function(){var e=te?"none":"block",t=!0,a=!1,n=void 0;try{for(var r,c=I[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){var i=r.value;T("game",i.id,e)();var l=!0,s=!1,o=void 0;try{for(var u,d=i.categories[Symbol.iterator]();!(l=(u=d.next()).done);l=!0){var m=u.value;T("category",m.id,e)()}}catch(v){s=!0,o=v}finally{try{l||null==d.return||d.return()}finally{if(s)throw o}}}}catch(v){a=!0,n=v}finally{try{t||null==c.return||c.return()}finally{if(a)throw n}}ae(!te)}})),r.a.createElement("div",null,r.a.createElement("select",{style:{width:70},onChange:function(e){var t=Number(e.target.value);he(t)},value:fe},r.a.createElement("option",{value:0},"\u5fdc\u52df\u9806"),r.a.createElement("option",{value:1},"\u30b2\u30fc\u30e0\u540d-\u6607\u9806"),r.a.createElement("option",{value:2},"\u30b2\u30fc\u30e0\u540d-\u964d\u9806"))),r.a.createElement("div",{style:{visibility:(null===k||void 0===k?void 0:k.selectionDone)?"visible":"hidden"}},r.a.createElement("label",{style:{fontSize:12},htmlFor:"filter_check"},"\u5f53\u9078\u306e\u307f"),r.a.createElement("input",{id:"filter_check",type:"checkbox",onChange:function(){return Y(!G)},checked:G}))),(null===k||void 0===k?void 0:k.scheduleDone)&&J.lines.length>0?r.a.createElement("div",{style:{margin:10}},r.a.createElement("input",{type:"button",value:"\u516c\u958b\u4e2d\u306e\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb",onClick:function(){return X("schedule")}})):"")),r.a.createElement("div",{style:{textAlign:"left",display:"flex",justifyContent:"center"}},r.a.createElement("div",{style:{display:"block",width:1e3}},r.a.createElement("div",{className:"message"},ce),I.sort((function(e,t){switch(fe){case 1:return e.name>t.name?1:e.name<t.name?-1:0;case 2:return e.name<t.name?1:e.name>t.name?-1:0;default:return e.id>t.id?1:e.id<t.id?-1:0}})).map((function(e){var t="",a={TODO:0,VALIDATED:0,REJECTED:0,BONUS:0,BACKUP:0},n=!0,c=!1,i=void 0;try{for(var l,s=e.categories[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var o=l.value;L[o.id]?a[L[o.id].status]+=1:a.TODO+=1}}catch(d){c=!0,i=d}finally{try{n||null==s.return||s.return()}finally{if(c)throw i}}if(t=a.VALIDATED>0?"validated":a.BONUS>0?"bonus":a.BACKUP>0?"backup":a.TODO>0?"":"rejected",G&&a.REJECTED===e.categories.length)return"";var u="\u2605\u53d6\u5f97\u5931\u6557\u2605";return e.user&&(u=e.user.usernameJapanese?e.user.usernameJapanese:e.user.username),r.a.createElement("div",{key:e.id,className:"submissionBase"},r.a.createElement("div",{className:t},r.a.createElement("div",{onClick:T("game",e.id)},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{width:70}},"\u30b2\u30fc\u30e0\uff1a"),r.a.createElement("div",{style:{width:"calc(100% - 70px)"}},e.name)),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{width:70}},"\u8d70\u8005\uff1a"),r.a.createElement("div",{style:{width:"calc(100% - 70px)"}},u)),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{width:70}},"\u6a5f\u7a2e\uff1a"),r.a.createElement("div",{style:{width:"calc(100% - 70px)"}},e.console))),r.a.createElement("div",{id:"game_desc_".concat(e.id),style:{display:"none",clear:"both"}},e.description)),r.a.createElement("hr",null),e.categories.map((function(e){var t=L[e.id]?L[e.id].status:"TODO";if(G&&"REJECTED"===t)return"";var a=function(e){switch(e){case"VALIDATED":return"validated";case"REJECTED":return"rejected";case"BONUS":return"bonus";case"BACKUP":return"backup";default:return""}}(t);return r.a.createElement("div",{key:e.id,className:a},r.a.createElement("div",{onClick:T("category",e.id)},r.a.createElement("div",{key:e.id,style:{display:"flex"}},r.a.createElement("div",{className:"categoryName"},e.name),r.a.createElement("div",{style:{width:70}},m(e.estimate)),r.a.createElement("div",{style:{width:20},onClick:function(e){return e.stopPropagation()}},r.a.createElement("a",{href:e.video,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g,{style:{height:15,color:"#b58900"}})))),r.a.createElement("div",null,e.opponentDtos.map((function(t){var a="\u2605\u53d6\u5f97\u5931\u6557\u2605";return t.user&&(a=t.user.usernameJapanese?t.user.usernameJapanese:t.user.username),r.a.createElement("div",{key:"".concat(e.id,"_").concat(t.id),style:{display:"flex"}},r.a.createElement("div",{style:{width:"calc(100% - 20px)"}},e.type,"\uff1a",a),r.a.createElement("div",{style:{width:20}},r.a.createElement("a",{href:t.video,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g,{style:{height:15,color:"#b58900"}}))))})))),r.a.createElement("div",{id:"category_desc_".concat(e.id),style:{display:"none",clear:"both"}},e.description),r.a.createElement("hr",{className:"categoryLine"}))})))}))))))},B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.waiting&&t&&t.onUpdate&&t.onUpdate(e),e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _=function(e){var t=e.registration,a=Object(n.useState)(!!t.waiting),c=Object(s.a)(a,2),i=c[0],l=c[1];return i?r.a.createElement("div",{style:{width:"100%",background:"linear-gradient(180deg, #fe8ad1 0%, #eaa1cd 20%, #7fd6fd 70%, #a4f1e8 100%)"}},r.a.createElement("span",null,"\u66f4\u65b0\u304c\u3042\u308a\u307e\u3059"),r.a.createElement("button",{onClick:function(){var e;null===(e=t.waiting)||void 0===e||e.postMessage({type:"SKIP_WAITING"}),l(!1),window.location.reload()}},"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8")):r.a.createElement(r.a.Fragment,null)};i.a.render(r.a.createElement(M,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="./service-worker.js";B?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):I(t,e)}))}}({onSuccess:function(e){console.log("'ServiceWorker registration successful with scope: ".concat(e.scope))},onUpdate:function(e){e.waiting&&i.a.render(r.a.createElement(_,{registration:e}),document.querySelector(".SW-update-dialog"))}})},8:function(e,t,a){}},[[18,1,2]]]);
//# sourceMappingURL=main.e37f774d.chunk.js.map
(this["webpackJsonpncnc-calculator"]=this["webpackJsonpncnc-calculator"]||[]).push([[0],{197:function(e,t,c){},200:function(e,t,c){},253:function(e,t){},255:function(e,t){},264:function(e,t){},266:function(e,t){},291:function(e,t){},292:function(e,t){},297:function(e,t){},299:function(e,t){},306:function(e,t){},325:function(e,t){},387:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(190),s=c.n(r),o=(c(197),c(25)),u=c.n(o),j=c(191),l=c(47),i=c(13),b=c(23),O=(c(199),c(390)),p=c(391),f=c(192),x=c(394),h=c(392),d=c(395),m=c(393),v=(c(200),c(5)),k=["\uc6d4","\ud654","\uc218","\ubaa9","\uae08"],g=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};var w=function(){var e=Object(m.a)(["rememberValues"]),t=Object(b.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(a.username||""),o=Object(b.a)(s,2),w=o[0],y=o[1],S=Object(n.useState)(a.slackId||""),C=Object(b.a)(S,2),I=C[0],N=C[1],E=Object(n.useState)(a.values||{mon:0,tue:0,wed:0,thu:0,fri:0}),F=Object(b.a)(E,2),B=F[0],G=F[1],L=Object(n.useState)(a.personalValues||{mon:0,tue:0,wed:0,thu:0,fri:0}),T=Object(b.a)(L,2),P=T[0],V=T[1],D=Object(n.useState)(a.sum||{co:0,pers:0}),H=Object(b.a)(D,2),J=H[0],K=H[1],M=Object(n.useState)(a.calSum||{co:0,pers:0}),U=Object(b.a)(M,2),W=U[0],q=U[1],z=Object(n.useState)(a.slackToken||""),A=Object(b.a)(z,2),Q=A[0],R=A[1],X=function(e,t,c){K(Object(i.a)({},e)),q(Object(i.a)({},t)),r("sum",Object(i.a)({},e)),r("calSum",Object(i.a)({},t)),"personal"===c?r("personalValues",P):r("values",B)};Object(n.useEffect)((function(){var e=Object(i.a)(Object(i.a)({},J),{},{co:0}),t=Object(i.a)(Object(i.a)({},W),{},{co:0});Object.keys(B).forEach((function(c){if("number"===typeof B[c]&&!isNaN(B[c])){var n=B[c]-6e3;n<0&&(n=0),e.co+=B[c],t.co+=n}})),X(e,t,"coperation")}),[B]),Object(n.useEffect)((function(){var e=Object(i.a)(Object(i.a)({},J),{},{pers:0}),t=Object(i.a)(Object(i.a)({},W),{},{pers:0});Object.keys(P).forEach((function(c){"number"!==typeof P[c]||isNaN(P[c])||(P[c]>6e3?t.pers+=6e3:t.pers+=P[c],e.pers+=P[c])})),X(e,t,"personal")}),[P]);var Y=function(e,t,c){if("token"===t)return R(e),void r("slackToken",e);"personal"===c?V(Object(i.a)(Object(i.a)({},P),{},Object(l.a)({},t,e))):G(Object(i.a)(Object(i.a)({},B),{},Object(l.a)({},t,e)))},Z=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(e,t){return new(0,c(202).WebClient)(Q).chat.postMessage({channel:e,text:t})},e.prev=1,w){e.next=6;break}throw new Error("\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.");case 6:if(J.co||J.pers){e.next=10;break}throw new Error("\uc804\uc1a1\ud560 \ub0b4\uc6a9\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.");case 10:if(I){e.next=14;break}throw new Error("\uc2ac\ub799 \uc544\uc774\ub514\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694.");case 14:if(Q){e.next=16;break}throw new Error("\uc2ac\ub799 \ud1a0\ud070\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694.");case 16:e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(1),alert(e.t0.message),e.abrupt("return");case 22:if(t="",n="",J.pers>0&&(t="[\uac1c\uc778\uce74\ub4dc] ".concat(w," / \ucd1d\uc9c0\ucd9c: ").concat(J.pers," / \ud68c\uc0ac\ubd80\ub2f4: ").concat(W.pers)),J.co>0&&(n="[\ubc95\uc778\uce74\ub4dc] ".concat(w," / \ucd1d\uc9c0\ucd9c: ").concat(J.co," / \uac1c\uc778\ubd80\ub2f4: ").concat(W.co)),!window.confirm("".concat(t," \n").concat(n," \n\uc804\uc1a1\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"))){e.next=49;break}if(e.prev=27,!(J.pers>0)){e.next=33;break}return e.next=31,a("UKPCGGH0B","".concat(t,"         <@").concat(I,">"));case 31:return e.next=33,a(I,"".concat(t," \uc804\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4."));case 33:if(!(J.co>0)){e.next=38;break}return e.next=36,a("UKPCGGH0B","".concat(n,"         <@").concat(I,">"));case 36:return e.next=38,a(I,"".concat(n," \uc804\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4."));case 38:e.next=45;break;case 40:return e.prev=40,e.t1=e.catch(27),console.error(e.t1),alert("\uba54\uc2dc\uc9c0 \uc804\uc1a1 \uc2e4\ud328!"),e.abrupt("return");case 45:G({mon:0,tue:0,wed:0,thu:0,fri:0}),V({mon:0,tue:0,wed:0,thu:0,fri:0}),e.next=50;break;case 49:console.error("\uc804\uc1a1\ucde8\uc18c");case 50:case"end":return e.stop()}}),e,null,[[1,18],[27,40]])})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)(O.a,{className:"mt-2",children:Object(v.jsx)(p.a,{className:"justify-content-center align-self-center",children:Object(v.jsx)(f.a,{lg:6,children:Object(v.jsxs)(x.a,{bg:"Light",children:[Object(v.jsx)(x.a.Body,{children:Object(v.jsxs)(h.a.Group,{children:[Object(v.jsx)(h.a.Control,{type:"text",className:"mb-3",placeholder:"Slack Token",value:Q,onInput:function(e){return Y(e.target.value,"token")}}),Object(v.jsxs)(p.a,{children:[Object(v.jsx)(f.a,{children:Object(v.jsx)(h.a.Control,{type:"text",placeholder:"Slack ID",value:I,onInput:function(e){N(e.target.value),r("slackId",e.target.value)}})}),Object(v.jsx)(f.a,{children:Object(v.jsx)(h.a.Control,{type:"text",placeholder:"\uc774\ub984",value:w,onInput:function(e){y(e.target.value),r("username",e.target.value)}})})]}),Object(v.jsx)("hr",{}),Object(v.jsxs)(p.a,{children:[Object(v.jsxs)(f.a,{children:[Object(v.jsx)("p",{className:"text-center",children:"\ubc95\uc778"}),Object.keys(B).map((function(e,t){return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a.Label,{column:!0,lg:2,children:k[t]}),Object(v.jsx)(h.a.Control,{type:"number",value:B[e],onFocus:function(){return Y("",e)},onInput:function(t){return Y(parseInt(t.target.value),e)}})]})}))]}),Object(v.jsxs)(f.a,{children:[Object(v.jsx)("p",{className:"text-center",children:"\uac1c\uc778"}),Object.keys(B).map((function(e,t){return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a.Label,{column:!0,lg:2,children:k[t]}),Object(v.jsx)(h.a.Control,{type:"number",value:P[e],onFocus:function(){return Y("",e,"personal")},onInput:function(t){return Y(parseInt(t.target.value),e,"personal")}})]})}))]})]})]})}),Object(v.jsxs)(x.a.Footer,{children:[Object(v.jsxs)(p.a,{children:[Object(v.jsxs)(f.a,{children:[Object(v.jsxs)("p",{children:["[\ubc95\uc778\uce74\ub4dc] ",w]}),Object(v.jsxs)("p",{children:["\ucd1d\uc9c0\ucd9c\uc561: ",g(J.co)]}),Object(v.jsxs)("p",{children:["\uac1c\uc778\ubd80\ub2f4\uae08: ",g(W.co)]})]}),Object(v.jsxs)(f.a,{children:[Object(v.jsxs)("p",{children:["[\uac1c\uc778\uce74\ub4dc] ",w]}),Object(v.jsxs)("p",{children:["\ucd1d\uc9c0\ucd9c\uc561: ",g(J.pers)]}),Object(v.jsxs)("p",{children:["\ud68c\uc0ac\ubd80\ub2f4\uae08: ",g(W.pers)]})]})]}),Object(v.jsx)(d.a,{className:"my-4",onClick:Z,variant:"outline-success",block:!0,children:"\uc804\uc1a1"})]})]})})})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,396)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(w,{})}),document.getElementById("root")),y()}},[[387,1,2]]]);
//# sourceMappingURL=main.05abbb52.chunk.js.map
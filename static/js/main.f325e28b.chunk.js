(this["webpackJsonpncnc-calculator"]=this["webpackJsonpncnc-calculator"]||[]).push([[0],{197:function(e,t,n){},200:function(e,t,n){},253:function(e,t){},255:function(e,t){},264:function(e,t){},266:function(e,t){},291:function(e,t){},292:function(e,t){},297:function(e,t){},299:function(e,t){},306:function(e,t){},325:function(e,t){},387:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(191),s=n.n(r),o=(n(197),n(15)),u=n.n(o),l=n(48),i=n(47),j=n(13),b=n(21),p=(n(199),n(390)),O=n(391),f=n(192),h=n(394),x=n(392),d=n(395),m=n(393),v=(n(200),n(62)),k=n.n(v),g=n(1),w=["\uc6d4","\ud654","\uc218","\ubaa9","\uae08"],y=6e3,N=new Date,S=new Date;S.setFullYear(N.getFullYear()+1);var C={expires:S},I=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};var E=function(){var e=Object(m.a)(["rememberValues"]),t=Object(b.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(a.username||""),o=Object(b.a)(s,2),v=o[0],N=o[1],S=Object(c.useState)(a.textMessage||""),E=Object(b.a)(S,2),F=E[0],L=E[1],T=Object(c.useState)(a.slackId||""),A=Object(b.a)(T,2),B=A[0],M=A[1],D=Object(c.useState)(a.values||{mon:0,tue:0,wed:0,thu:0,fri:0}),G=Object(b.a)(D,2),V=G[0],J=G[1],K=Object(c.useState)(a.personalValues||{mon:0,tue:0,wed:0,thu:0,fri:0}),P=Object(b.a)(K,2),U=P[0],Y=P[1],z=Object(c.useState)(a.sum||{co:0,pers:0}),W=Object(b.a)(z,2),q=W[0],H=W[1],Q=Object(c.useState)(a.calSum||{co:0,pers:0}),R=Object(b.a)(Q,2),X=R[0],Z=R[1],$=Object(c.useState)(a.slackToken||""),_=Object(b.a)($,2),ee=_[0],te=_[1],ne=Object(c.useState)(a.isAuth||""),ce=Object(b.a)(ne,2),ae=ce[0],re=ce[1],se=Object(c.useState)(a.tossOpenAgree?parseInt(a.tossOpenAgree):1),oe=Object(b.a)(se,2),ue=oe[0],le=oe[1],ie=function(e,t,n){H(Object(j.a)({},e)),Z(Object(j.a)({},t)),r("sum",Object(j.a)({},e),C),r("calSum",Object(j.a)({},t),C),"personal"===n?r("personalValues",U,C):r("values",V,C)};Object(c.useEffect)((function(){console.log("TEST");var e=Object(j.a)(Object(j.a)({},q),{},{co:0}),t=Object(j.a)(Object(j.a)({},X),{},{co:0});Object.keys(V).forEach((function(n){if("number"===typeof V[n]&&!isNaN(V[n])){var c=V[n]-y;c<0&&(c=0),e.co+=V[n],t.co+=c}})),ie(e,t,"coperation")}),[V]),Object(c.useEffect)((function(){var e=Object(j.a)(Object(j.a)({},q),{},{pers:0}),t=Object(j.a)(Object(j.a)({},X),{},{pers:0});Object.keys(U).forEach((function(n){"number"!==typeof U[n]||isNaN(U[n])||(U[n]>y?t.pers+=y:t.pers+=U[n],e.pers+=U[n])})),ie(e,t,"personal")}),[U]);var je=function(e,t,n){if("token"===t)return te(e),void r("slackToken",e,C);"personal"===n?Y(Object(j.a)(Object(j.a)({},U),{},Object(i.a)({},t,e))):J(Object(j.a)(Object(j.a)({},V),{},Object(i.a)({},t,e)))};function be(e,t){return pe.apply(this,arguments)}function pe(){return(pe=Object(l.a)(u.a.mark((function e(t,c){var a,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n(219),r=a.WebClient,s=new r(ee),e.abrupt("return",s.chat.postMessage({channel:t,text:c}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Oe=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("https://toss.im/transfer-web/linkgen-api/link",{apiKey:"87489d67602649268f4372f91a91b03e",bankName:"\uae30\uc5c5",bankAccountNo:"54004018301018",message:v,amount:t});case 2:return n=e.sent,c=n.data.success.link,window.open(c),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,q.co||q.pers){e.next=3;break}throw new Error("\uc804\uc1a1\ud560 \ub0b4\uc6a9\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.");case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),alert(e.t0.message),e.abrupt("return");case 9:if(t="",q.pers>0&&(t+="[\uac1c\uc778\uce74\ub4dc] ".concat(v," / \ucd1d\uc9c0\ucd9c: ").concat(q.pers," / \ud68c\uc0ac\ubd80\ub2f4: ").concat(X.pers)),q.co>0&&(t&&(t+="\n"),t+="[\ubc95\uc778\uce74\ub4dc] ".concat(v," / \ucd1d\uc9c0\ucd9c: ").concat(q.co," / \uac1c\uc778\ubd80\ub2f4: ").concat(X.co)),F&&(t+="\n".concat(F)),!window.confirm("".concat(t,"\n\uc804\uc1a1\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"))){e.next=38;break}if(e.prev=14,!(q.pers>0||q.co>0)){e.next=25;break}if(n="",!(X.co>0&&ue)){e.next=21;break}return e.next=20,Oe(X.co);case 20:n=e.sent;case 21:return e.next=23,be("U021K8944CU","".concat(t,"\n<@").concat(B,">"));case 23:return e.next=25,be(B,"".concat(t," \uc804\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n").concat(n));case 25:J({mon:0,tue:0,wed:0,thu:0,fri:0}),Y({mon:0,tue:0,wed:0,thu:0,fri:0}),L(""),r("textMessage","",C),e.next=36;break;case 31:return e.prev=31,e.t1=e.catch(14),console.error(e.t1),alert("\uba54\uc2dc\uc9c0 \uc804\uc1a1 \uc2e4\ud328!"),e.abrupt("return");case 36:e.next=39;break;case 38:console.error("\uc804\uc1a1\ucde8\uc18c");case 39:case"end":return e.stop()}}),e,null,[[0,5],[14,31]])})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,v){e.next=5;break}throw new Error("\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.");case 5:if(B){e.next=9;break}throw new Error("\uc2ac\ub799 \uc544\uc774\ub514\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694.");case 9:if(ee){e.next=11;break}throw new Error("\uc2ac\ub799 \ud1a0\ud070\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694.");case 11:return e.next=13,be(B,"\uc778\uc99d\ub418\uc5c8\uc2b5\ub2c8\ub2e4.");case 13:console.log("done"),re(!0),r("isAuth",!0,C),e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(0),alert(e.t0.message),e.abrupt("return");case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}();return ae?Object(g.jsx)(p.a,{className:"mt-2",children:Object(g.jsx)(O.a,{className:"justify-content-center align-self-center",children:Object(g.jsx)(f.a,{lg:6,children:Object(g.jsxs)(h.a,{bg:"Light",children:[Object(g.jsx)(h.a.Body,{children:Object(g.jsxs)(x.a.Group,{children:[Object(g.jsxs)(O.a,{children:[Object(g.jsx)(x.a.Group,{className:"ml-3",controlId:"formBasicCheckbox",children:Object(g.jsx)(x.a.Check,{checked:!!ue,onChange:function(){var e=ue?0:1;le(e),r("tossOpenAgree",e,C)},type:"checkbox",label:"\ud1a0\uc2a4 \uc1a1\uae08 \uc5f4\uae30 (\ubaa8\ubc14\uc77c \uc804\uc6a9)"})}),Object(g.jsx)(d.a,{className:"ml-auto mr-3",style:{margin:0},size:"sm",onClick:function(){return re(!1)},variant:"outline-danger",children:"\uc815\ubcf4\uc218\uc815"})]}),Object(g.jsx)("hr",{}),Object(g.jsxs)(O.a,{children:[Object(g.jsxs)(f.a,{children:[Object(g.jsx)("p",{className:"text-center",children:"\ubc95\uc778"}),Object.keys(V).map((function(e,t){return Object(g.jsxs)("div",{children:[Object(g.jsx)(x.a.Label,{column:!0,lg:2,children:w[t]}),Object(g.jsx)(x.a.Control,{type:"number",value:V[e],onFocus:function(){return je("",e)},onInput:function(t){return je(parseInt(t.target.value),e)}})]},e)}))]}),Object(g.jsxs)(f.a,{children:[Object(g.jsx)("p",{className:"text-center",children:"\uac1c\uc778"}),Object.keys(V).map((function(e,t){return Object(g.jsxs)("div",{children:[Object(g.jsx)(x.a.Label,{column:!0,lg:2,children:w[t]}),Object(g.jsx)(x.a.Control,{type:"number",value:U[e],onFocus:function(){return je("",e,"personal")},onInput:function(t){return je(parseInt(t.target.value),e,"personal")}})]},e)}))]})]})]})}),Object(g.jsxs)(h.a.Footer,{children:[Object(g.jsxs)(O.a,{children:[Object(g.jsxs)(f.a,{children:[Object(g.jsxs)("p",{children:["[\ubc95\uc778\uce74\ub4dc] ",v]}),Object(g.jsxs)("p",{children:["\ucd1d\uc9c0\ucd9c\uc561: ",I(q.co)]}),Object(g.jsxs)("p",{children:["\uac1c\uc778\ubd80\ub2f4\uae08: ",I(X.co)]})]}),Object(g.jsxs)(f.a,{children:[Object(g.jsxs)("p",{children:["[\uac1c\uc778\uce74\ub4dc] ",v]}),Object(g.jsxs)("p",{children:["\ucd1d\uc9c0\ucd9c\uc561: ",I(q.pers)]}),Object(g.jsxs)("p",{children:["\ud68c\uc0ac\ubd80\ub2f4\uae08: ",I(X.pers)]})]})]}),Object(g.jsx)("hr",{}),Object(g.jsxs)(x.a.Group,{children:[Object(g.jsx)(x.a.Label,{children:"\ucd94\uac00\uc124\uba85"}),Object(g.jsx)(x.a.Control,{type:"text",value:F,placeholder:"\uc124\uba85\uc774 \ud544\uc694\ud55c \uacbd\uc6b0 \uc791\uc131\ud574\uc8fc\uc138\uc694.",onInput:function(e){return t=e.target.value,L(t),void r("textMessage",t,C);var t}})]}),Object(g.jsx)(d.a,{className:"my-4",onClick:fe,variant:"outline-success",block:!0,children:"\uc804\uc1a1"})]})]})})})}):Object(g.jsx)(p.a,{className:"mt-2",children:Object(g.jsx)(O.a,{className:"justify-content-center align-self-center",children:Object(g.jsx)(f.a,{lg:6,children:Object(g.jsx)(h.a,{bg:"Light",className:"mt-5",children:Object(g.jsx)(h.a.Body,{children:Object(g.jsxs)(x.a.Group,{children:[Object(g.jsx)(x.a.Control,{type:"text",className:"mb-3",placeholder:"Slack Token",value:ee,onInput:function(e){return je(e.target.value,"token")}}),Object(g.jsxs)(O.a,{children:[Object(g.jsx)(f.a,{children:Object(g.jsx)(x.a.Control,{type:"text",placeholder:"Slack ID",value:B,onInput:function(e){M(e.target.value),r("slackId",e.target.value,C)}})}),Object(g.jsx)(f.a,{children:Object(g.jsx)(x.a.Control,{type:"text",placeholder:"\uc774\ub984",value:v,onInput:function(e){N(e.target.value),r("username",e.target.value,C)}})})]}),Object(g.jsx)(d.a,{className:"my-4",onClick:he,variant:"outline-info",block:!0,children:"\uc778\uc99d"})]})})})})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,396)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(E,{})}),document.getElementById("root")),F()}},[[387,1,2]]]);
//# sourceMappingURL=main.f325e28b.chunk.js.map
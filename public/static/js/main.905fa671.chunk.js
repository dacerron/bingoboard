(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),i=n(4),a=n.n(i),s=(n(9),n(3)),r=(n.p,n(10),n(0));var u=function(t){var e=t.activities;return Object(r.jsx)(r.Fragment,{children:e.map((function(t){}))})};var l=function(){var t=Object(c.useState)(""),e=Object(s.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)([]),a=Object(s.a)(i,2),l=a[0],h=a[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("input",{types:"text",onChange:function(t){!function(t){o(t.target.value)}(t)},placeholder:"describe activity here"}),Object(r.jsx)("button",{type:"button",onClick:function(){fetch("http://localhost:8000/newActivity?desc="+n).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},children:"save"}),Object(r.jsx)("button",{type:"button",onClick:function(){fetch("http://localhost:8000/generateBoard").then((function(t){return console.log(t),t.json()})).then((function(t){console.log(t),h(t)})).catch((function(t){console.log(t)}))},children:"generateBoard"}),Object(r.jsx)(u,{activities:l})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),i(t),a(t)}))};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root")),h()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.905fa671.chunk.js.map
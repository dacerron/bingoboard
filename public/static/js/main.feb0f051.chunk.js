(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var c=n(2),o=n.n(c),i=n(30),a=n.n(i),r=(n(41),n(15)),s=(n.p,n(42),n(28)),u=n(67),l=n(23),j=n(68),b=n(69),h=(n(43),n(4)),d=Object(l.a)(j.a)((function(t){var e=t.theme;return Object(s.a)(Object(s.a)({},e.typography.body2),{},{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary})}));var p=function(t){var e=t.activities;return Object(h.jsx)("div",{className:"boardContainer",children:Object(h.jsx)(b.a,{sx:{flexGrow:1},children:Object(h.jsx)(u.a,{container:!0,spacing:2,children:e.map((function(t){return Object(h.jsx)(u.a,{item:!0,xs:4,sm:3,className:"gridCell",children:Object(h.jsx)(d,{children:t})})}))})})})};var f=function(){var t=Object(c.useState)(""),e=Object(r.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)([]),a=Object(r.a)(i,2),s=a[0],u=a[1];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("input",{types:"text",onChange:function(t){!function(t){o(t.target.value)}(t)},placeholder:"describe activity here"}),Object(h.jsx)("button",{type:"button",onClick:function(){fetch("http://192.168.0.17:8080/newActivity/"+n,{method:"GET"}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},children:"save"}),Object(h.jsx)("button",{type:"button",onClick:function(){fetch("http://192.168.0.17:8080/generateBoard",{mode:"cors"}).then((function(t){return console.log(t),t.json()})).then((function(t){console.log(t),u(t)})).catch((function(t){console.log(t)}))},children:"generateBoard"}),Object(h.jsx)(p,{activities:s})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),i(t),a(t)}))};a.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),g()}},[[48,1,2]]]);
//# sourceMappingURL=main.feb0f051.chunk.js.map
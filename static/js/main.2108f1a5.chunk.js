(this.webpackJsonpzartodo=this.webpackJsonpzartodo||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var c=e(1),o=e.n(c),i=e(6),r=e.n(i),u=(e(12),e(4)),s=e(7),a=(e(13),e(0));var d=function(){var t=Object(c.useState)([]),n=Object(s.a)(t,2),e=n[0],o=n[1],i=Object(c.useRef)();return console.log(i.current),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Todo App"}),Object(a.jsx)("input",{ref:i}),Object(a.jsx)("button",{onClick:function(){o([].concat(Object(u.a)(e),[i.current.value])),i.current.value=""},children:"Add"}),e.map((function(t,n){return Object(a.jsxs)("div",{children:[t,Object(a.jsx)("button",{onClick:function(t){!function(t){console.log("index is = > ",t);var n=Object(u.a)(e);console.log("new todo is => ",n),n.splice(t,1),o(n)}(n)},children:"Delete"}),Object(a.jsx)("button",{onClick:function(t){!function(t){var n=prompt("Edit your todo"),c=Object(u.a)(e);c[t]=n,o(c)}(n)},children:"Edit"})]},n)}))]})},j=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,16)).then((function(n){var e=n.getCLS,c=n.getFID,o=n.getFCP,i=n.getLCP,r=n.getTTFB;e(t),c(t),o(t),i(t),r(t)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root")),j()}},[[15,1,2]]]);
//# sourceMappingURL=main.2108f1a5.chunk.js.map
(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{25:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(7);var r=c(6);function a(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},33:function(e,t,c){},34:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(25),r=c(4),a=c(0),i=c(24),s=c(22),o=c(23),l=(c(33),c(5)),b=c(2),j=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],j=t[1],u=Object(a.useState)(210),m=Object(r.a)(u,2),d=m[0],O=m[1],f=Object(a.useState)(!1),p=Object(r.a)(f,2),v=p[0],_=p[1],h=Object(a.useState)(!1),x=Object(r.a)(h,2),g=x[0],y=x[1],N=Object(i.a)(),A=N.error,S=N.loading,w=N.getAllComics,k=N.clearError;Object(a.useEffect)((function(){E(d,!0)}),[]);var E=function(e,t){_(!t),k(),w(e).then(C)},C=function(e){var t=!1;e.length<8&&(t=!0),j([].concat(Object(n.a)(c),Object(n.a)(e))),O((function(e){return e+8})),_(!1),y(t)},I=A?Object(b.jsx)(s.a,{}):null,J=S?Object(b.jsx)(o.a,{}):null,F=function(e){var t=e.map((function(e,t){return Object(b.jsx)("li",{className:"comics__item",children:Object(b.jsxs)(l.b,{to:"/comics/".concat(e.id),children:[Object(b.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),Object(b.jsx)("div",{className:"comics__item-name",children:e.title}),Object(b.jsx)("div",{className:"comics__item-price",children:e.price})]})},t)}));return Object(b.jsx)("ul",{className:"comics__grid",children:t})}(c);return Object(b.jsxs)("div",{className:"comics__list",children:[I,J,F,Object(b.jsx)("button",{className:"button button__main button__long",onClick:function(){return E(d)},disabled:v,style:g?{display:"none"}:{display:"block"},children:Object(b.jsx)("div",{className:"inner",children:"load more"})})]})},u=(c(34),c.p+"static/media/Avengers.4065c8f9.png"),m=c.p+"static/media/Avengers_logo.9eaf2193.png",d=function(){return Object(b.jsxs)("div",{className:"app__banner",children:[Object(b.jsx)("img",{src:u,alt:"Avengers"}),Object(b.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(b.jsx)("br",{}),"Stay tuned!"]}),Object(b.jsx)("img",{src:m,alt:"Avengers logo"})]})};t.default=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{}),Object(b.jsx)(j,{})]})}}}]);
//# sourceMappingURL=5.651d59d3.chunk.js.map
import{_ as u,j as s,d as n,e as p,b as l,c as b,C as N,S as m,f as y,r as j,y as x}from"./index-C7dcxcLS.js";function i(){return i=Object.assign||function(r){for(var a=1;a<arguments.length;a++){var c=arguments[a];for(var t in c)Object.prototype.hasOwnProperty.call(c,t)&&(r[t]=c[t])}return r},i.apply(this,arguments)}function g(e){if(e==null)throw new TypeError("Cannot destructure "+e);return e}const S=e=>{var{className:r}=e,a=u(e,["className"]);return s.jsx("hr",n({className:p("tgui-8af0d10d5540c6cc",r)},a))},D=e=>{var r=i({},g(e));return l()==="ios"?s.jsx(N,n({},r)):s.jsx(m,n({level:"2"},r))},v=e=>{var{className:r,children:a,centered:c}=e,t=u(e,["className","children","centered"]);const o=l();return s.jsx("footer",b(n({className:p("tgui-dbb364e8ced00cc8",o==="ios"&&"tgui-8c4c6f82ba895475",c&&"tgui-8ebba379083b615a",r)},t),{children:s.jsx(D,{className:"tgui-67471b69da3e3062",children:a})}))},F=()=>{const e=l();return{Default:c=>{var t=i({},g(c));return e==="ios"?s.jsx(N,n({caps:!0},t)):s.jsx(m,n({level:"2",weight:"2"},t))},Large:c=>{var t=i({},g(c));return e==="ios"?s.jsx(m,n({level:"1",weight:"2"},t)):s.jsx(y,n({weight:"2"},t))}}},P=e=>{var{large:r,className:a,children:c}=e,t=u(e,["large","className","children"]);const o=l(),{Default:d,Large:f}=F(),h=r?f:d;return s.jsx("header",b(n({className:p("tgui-d0251b46536ac046",o==="ios"&&"tgui-b7217abb24e8763a",r&&"tgui-34fd1a25cc171439",a)},t),{children:s.jsx(h,{Component:"h1",className:"tgui-9c200683b316fde6",children:c})}))},_=e=>{var{header:r,footer:a,className:c,children:t}=e,o=u(e,["header","footer","className","children"]);const d=l(),f=x(r)?s.jsx(P,{children:r}):r,h=x(a)?s.jsx(v,{children:a}):a;return s.jsxs("section",b(n({className:p("tgui-3dfa44f9f78f9a22",d==="base"&&"tgui-8e15431b81f6601e",d==="ios"&&"tgui-97eca24324122dbc",c)},o),{children:[s.jsxs("div",{className:"tgui-db9be63c4fecf79b",children:[f,s.jsx("div",{className:"tgui-4b78bed6e925088e",children:j.Children.map(t,(C,w)=>s.jsxs(s.Fragment,{children:[C,w<j.Children.count(t)-1&&s.jsx(S,{className:"tgui-a6d406c4dc060899"})]}))})]}),h]}))};_.Header=P;_.Footer=v;export{_ as S,i as _,g as a,P as b};
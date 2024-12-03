import{t as d,j as e,x as P,p as i,y as f,C as S,r as N,_ as g,v as z,n as j,q as p,w as o,S as E,X as T}from"./index-DJ6RCx2I.js";function x(){return x=Object.assign||function(a){for(var r=1;r<arguments.length;r++){var c=arguments[r];for(var t in c)Object.prototype.hasOwnProperty.call(c,t)&&(a[t]=c[t])}return a},x.apply(this,arguments)}function w(s){if(s==null)throw new TypeError("Cannot destructure "+s);return s}const H=()=>{const a=d()==="ios";return{Title:t=>a?e.jsx(P,i({},t)):e.jsx(f,i({level:"1"},t)),Description:t=>a?e.jsx(S,i({},t)):e.jsx(f,i({level:"2"},t))}},M=N.forwardRef((s,a)=>{var{children:r,titleBadge:c,hint:t,subhead:n,subtitle:l,description:u,className:h,before:m,after:b,Component:v,hovered:C,multiline:y}=s,L=g(s,["children","titleBadge","hint","subhead","subtitle","description","className","before","after","Component","hovered","multiline"]);const R=d(),{Title:F,Description:O}=H(),W=o(r)||o(t)||o(c);return e.jsxs(z,j(i({ref:a,Component:v||"div",className:p("tgui-b8dfba0b5c3d054c",R==="ios"&&"tgui-7b5bccbb645b495f",C&&"tgui-7edaaf0c57797623",y&&"tgui-6c49dadccf648a5b",h)},L),{children:[o(m)&&e.jsx("div",{className:"tgui-aaa795d78c356ac1",children:m}),e.jsxs("div",{className:"tgui-8735a62be5a8b8a7",children:[o(n)&&e.jsx(f,{className:"tgui-46dd90b57ffed25f",level:"2",weight:"3",children:n}),W&&e.jsxs(F,{className:"tgui-a894f59f4c5ad72f",children:[o(r)&&e.jsx("span",{className:"tgui-1c6d7865a76a19bc",children:r}),o(t)&&e.jsx("span",{className:"tgui-bb909928b48f948b",children:t}),o(c)&&c]}),o(l)&&e.jsx(f,{className:"tgui-d528ef65a8b76273",level:"2",weight:"3",children:l}),o(u)&&e.jsx(O,{className:"tgui-fc059ed3ac5799a6",children:u})]}),o(b)&&e.jsx("div",{className:"tgui-56b2e897ed7ccb22",children:b})]}))}),q=s=>{var{size:a}=s,r=g(s,["size"]);return a==="l"?e.jsx(P,i({weight:"2"},r)):e.jsx(f,i({level:"2",weight:"2"},r))},I={filled:"tgui-8a1ca9efa24f4809",bezeled:"tgui-91bda9a36246a33c",plain:"tgui-48956537c34690db",gray:"tgui-93106efd6b6d66ee",outline:"tgui-e884e36ff1faa596",white:"tgui-ba6d30cc81e39ae5"},X={s:"tgui-13f23a224303ddaa",m:"tgui-1a16a49d89076ff4",l:"tgui-9cef742a22f195c9"},Q=N.forwardRef((s,a)=>{var{type:r,size:c="m",before:t,after:n,stretched:l,children:u,className:h,mode:m="filled",loading:b,Component:v="button"}=s,C=g(s,["type","size","before","after","stretched","children","className","mode","loading","Component"]);const y=d();return e.jsxs(z,j(i({ref:a,type:r||"button",Component:v,className:p("tgui-117e77cd385a9c8d",m&&I[m],c&&X[c],y==="ios"&&"tgui-55e8aa7f5cea2280",l&&"tgui-726846958fe7f4a0",b&&"tgui-490cb0f5ec4998f3",h)},C),{children:[b&&e.jsx(E,{className:"tgui-014f2b7d196b090d",size:"s"}),o(t)&&e.jsx("div",{className:"tgui-06cc94d03a7c4dd7",children:t}),e.jsx(q,{className:"tgui-5f6014c0f063b6de",size:c,children:u}),o(n)&&e.jsx("div",{className:"tgui-8310172a5320ab71",children:n})]}))}),U=s=>{var{className:a,children:r,Component:c="div"}=s,t=g(s,["className","children","Component"]);const n=d();return e.jsx(c,j(i({className:p("tgui-389a43acd684137a",n==="ios"&&"tgui-cfed40fe81d34ad5",a)},t),{children:r}))},A=s=>{var{className:a}=s,r=g(s,["className"]);return e.jsx("hr",i({className:p("tgui-8af0d10d5540c6cc",a)},r))},G=s=>{var a=x({},w(s));return d()==="ios"?e.jsx(S,i({},a)):e.jsx(f,i({level:"2"},a))},D=s=>{var{className:a,children:r,centered:c}=s,t=g(s,["className","children","centered"]);const n=d();return e.jsx("footer",j(i({className:p("tgui-dbb364e8ced00cc8",n==="ios"&&"tgui-8c4c6f82ba895475",c&&"tgui-8ebba379083b615a",a)},t),{children:e.jsx(G,{className:"tgui-67471b69da3e3062",children:r})}))},J=()=>{const s=d();return{Default:c=>{var t=x({},w(c));return s==="ios"?e.jsx(S,i({caps:!0},t)):e.jsx(f,i({level:"2",weight:"2"},t))},Large:c=>{var t=x({},w(c));return s==="ios"?e.jsx(f,i({level:"1",weight:"2"},t)):e.jsx(P,i({weight:"2"},t))}}},_=s=>{var{large:a,className:r,children:c}=s,t=g(s,["large","className","children"]);const n=d(),{Default:l,Large:u}=J(),h=a?u:l;return e.jsx("header",j(i({className:p("tgui-d0251b46536ac046",n==="ios"&&"tgui-b7217abb24e8763a",a&&"tgui-34fd1a25cc171439",r)},t),{children:e.jsx(h,{Component:"h1",className:"tgui-9c200683b316fde6",children:c})}))},B=s=>{var{header:a,footer:r,className:c,children:t}=s,n=g(s,["header","footer","className","children"]);const l=d(),u=T(a)?e.jsx(_,{children:a}):a,h=T(r)?e.jsx(D,{children:r}):r;return e.jsxs("section",j(i({className:p("tgui-3dfa44f9f78f9a22",l==="base"&&"tgui-8e15431b81f6601e",l==="ios"&&"tgui-97eca24324122dbc",c)},n),{children:[e.jsxs("div",{className:"tgui-db9be63c4fecf79b",children:[u,e.jsx("div",{className:"tgui-4b78bed6e925088e",children:N.Children.map(t,(m,b)=>e.jsxs(e.Fragment,{children:[m,b<N.Children.count(t)-1&&e.jsx(A,{className:"tgui-a6d406c4dc060899"})]}))})]}),h]}))};B.Header=_;B.Footer=D;export{Q as B,M as C,U as L,B as S,x as _,w as a,_ as b};

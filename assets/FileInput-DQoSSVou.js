import{_ as m,j as s,m as h,n as c,o as b,t as p,C as M,r as u,p as k,q as O,v as T}from"./index-DiiwTkhM.js";import{b as S,_ as V,a as A}from"./Section-DYTWTpqy.js";import{V as q}from"./VisuallyHidden-BaFZ998l.js";const H=e=>e<40?4:e<96?8:12,W={number:"tgui-562f7459d74103ea",dot:"tgui-4f69ed647e40e245"},Z={primary:"tgui-6e63faaa2b33f4ae",critical:"tgui-4b52474c713ffa7c",secondary:"tgui-0278f262d68294f0",gray:"tgui-0883e451f3707277",white:"tgui-6b3dbcedd9052940"},D=e=>{var{type:r,mode:t="primary",large:a,className:l,children:o}=e,n=m(e,["type","mode","large","className","children"]);const i=r==="number";return s.jsx("span",h(c({className:b("tgui-c8f4bcd1606fb026",W[r],Z[t],i&&a&&"tgui-c1a5e9170826a773",l)},n),{children:p(o)&&i&&s.jsxs(s.Fragment,{children:[a&&s.jsx(S,{Component:"span",level:"2",weight:"2",children:o}),!a&&s.jsx(M,{weight:"2",children:o})]})}))},G=e=>{var{type:r,className:t}=e,a=m(e,["type","className"]);return r!=="number"?(console.error('[ImageBadge]: Component supports only type="number"'),null):s.jsx(D,c({type:"number",className:b("tgui-e3bcc434a6ee9317",t)},a))},J=e=>{var{size:r=40,className:t,alt:a,crossOrigin:l,decoding:o,loading:n,referrerPolicy:i,sizes:y,src:d,srcSet:f,useMap:R,style:g,fallbackIcon:N,children:_,onLoad:x,onError:j}=e,B=m(e,["size","className","alt","crossOrigin","decoding","loading","referrerPolicy","sizes","src","srcSet","useMap","style","fallbackIcon","children","onLoad","onError"]);const[w,I]=u.useState(!1),[E,C]=u.useState(!1),P=d||f,F=(E||!P)&&u.isValidElement(N),L=v=>{w||(I(!0),C(!1),x==null||x(v))},z=v=>{I(!1),C(!0),j==null||j(v)};return s.jsxs("div",h(c({style:c({width:r,minWidth:r,height:r,borderRadius:(g==null?void 0:g.borderRadius)||H(r)},g),className:b("tgui-30d8642662534eb5",w&&"tgui-72bd4140eca37f53",t)},B),{children:[P&&s.jsx("img",{alt:a,className:"tgui-1191c597a64dbd25",crossOrigin:l,decoding:o,loading:n,referrerPolicy:i,sizes:y,src:d,srcSet:f,useMap:R,onLoad:L,onError:z}),F&&s.jsx("div",{className:"tgui-5ee2f1c6e1da49b5",children:N}),_]}))};J.Badge=G;const K=u.forwardRef((e,r)=>{var{mode:t="default",before:a,after:l,className:o,children:n,Component:i}=e,y=m(e,["mode","before","after","className","children","Component"]);const d=k(),f=d==="ios"?S:T;return s.jsxs(O,h(c({ref:r,Component:i||"button",className:b("tgui-a8ce18a8594cea9b",t==="destructive"&&"tgui-6e7ca796043fe6ca",d==="ios"&&"tgui-f464dba82cb8b46e",o)},y),{children:[p(a)&&a,p(n)&&s.jsx(f,{children:n}),p(l)&&l]}))}),Q=e=>{var r=V({},A(e));return s.jsx("svg",h(c({width:"28",height:"28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r),{children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.286 6.445c-2.342-2.307-6.19-2.307-8.53 0l-5.353 5.272a.99.99 0 0 1-1.388-1.41l5.352-5.272c3.112-3.065 8.196-3.065 11.307 0a7.598 7.598 0 0 1 0 10.885l-7.347 7.238c-2.355 2.32-6.198 2.32-8.553 0a5.762 5.762 0 0 1 0-8.253l7.381-7.27c1.585-1.56 4.141-1.632 5.814-.167a4.06 4.06 0 0 1 .082 6.068l-6.158 5.688a.99.99 0 0 1-1.343-1.454l6.16-5.687c.93-.859.91-2.29-.044-3.127a2.315 2.315 0 0 0-3.122.088l-7.381 7.27a3.784 3.784 0 0 0 0 5.435c1.584 1.56 4.191 1.56 5.775 0l7.348-7.238a5.62 5.62 0 0 0 0-8.066Z",fill:"currentColor"})}))},$=u.forwardRef((e,r)=>{var{label:t="Attach file",className:a,children:l}=e,o=m(e,["label","className","children"]);return s.jsxs("div",{ref:r,className:a,children:[l,s.jsxs(K,{Component:"label",before:s.jsx(Q,{}),children:[s.jsx(q,{children:s.jsx("input",c({type:"file",placeholder:t},o))}),t]})]})});export{D as B,$ as F,J as I};

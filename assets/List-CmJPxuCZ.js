import{_ as n,j as t,B as P,d as o,e as c,r as h,c as m,M as z,C as O,q as T,b as F}from"./index-DbMsnYKV.js";const q=e=>e<40?4:e<96?8:12,H=e=>{var{type:s,className:r}=e,a=n(e,["type","className"]);return s!=="number"?(console.error('[ImageBadge]: Component supports only type="number"'),null):t.jsx(P,o({type:"number",className:c("tgui-e3bcc434a6ee9317",r)},a))},C=e=>{var{size:s=40,className:r,alt:a,crossOrigin:l,decoding:i,loading:g,referrerPolicy:w,sizes:B,src:v,srcSet:d,useMap:E,style:u,fallbackIcon:y,children:L,onLoad:p,onError:f}=e,S=n(e,["size","className","alt","crossOrigin","decoding","loading","referrerPolicy","sizes","src","srcSet","useMap","style","fallbackIcon","children","onLoad","onError"]);const[N,j]=h.useState(!1),[k,x]=h.useState(!1),I=v||(d==null?void 0:d.length)!==0,A=(k||!I)&&h.isValidElement(y),R=b=>{N||(j(!0),x(!1),p==null||p(b))},M=b=>{j(!1),x(!0),f==null||f(b)};return t.jsxs("div",m(o({style:o({width:s,minWidth:s,height:s,borderRadius:(u==null?void 0:u.borderRadius)||q(s)},u),className:c("tgui-30d8642662534eb5",N&&"tgui-72bd4140eca37f53",r)},S),{children:[I&&t.jsx("img",{alt:a,className:"tgui-1191c597a64dbd25",crossOrigin:l,decoding:i,loading:g,referrerPolicy:w,sizes:B,src:v,srcSet:d,useMap:E,onLoad:R,onError:M}),A&&t.jsx("div",{className:"tgui-5ee2f1c6e1da49b5",children:y}),L]}))};C.Badge=H;const V=e=>{var{className:s,Component:r}=e,a=n(e,["className","Component"]);return t.jsx(z,m(o({},a),{className:c("tgui-e05fce4753086879",s),Component:r||"h5"}))},W=e=>{var{className:s,Component:r}=e,a=n(e,["className","Component"]);return t.jsx(z,m(o({},a),{Component:r||"h1",className:c("tgui-c6d7432a5c12debe",s)}))},_=e=>{var{size:s}=e,r=n(e,["size"]);return s?s<=28?t.jsx(O,o({level:s<=24?"2":"1",weight:"1",caps:!0},r)):s===40?t.jsx(V,o({weight:"2",caps:!0},r)):s===48?t.jsx(T,o({weight:"1",level:"3",caps:!0},r)):t.jsx(W,o({weight:"1",caps:!0},r)):null},D=e=>{var{type:s,className:r}=e,a=n(e,["type","className"]);if(s!=="number")throw new Error('[ImageBadge]: Component supports only type="number"');return t.jsx(P,o({type:"number",className:c("tgui-54214e0db34f53c3",r)},a))},G=e=>{var{className:s,style:r,acronym:a,fallbackIcon:l,size:i}=e,g=n(e,["className","style","acronym","fallbackIcon","size"]);return t.jsx(C,o({style:o({borderRadius:"50%"},r),className:c("tgui-91c5537b51b490a7",a&&"tgui-305551eb3f5abb68",s),fallbackIcon:a?t.jsx(_,{size:i,children:a}):l,size:i},g))};G.Badge=D;const K=e=>{var{className:s,children:r}=e,a=n(e,["className","children"]);const l=F();return t.jsx("div",m(o({className:c("tgui-389a43acd684137a",l==="ios"&&"tgui-cfed40fe81d34ad5",s)},a),{children:r}))};export{G as A,K as L};

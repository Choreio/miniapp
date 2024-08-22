import{o as l,j as a,B as R,v as o,w as i,r as m,q as p,Y as z,C as M,T as O,x as _,p as H,D as j,S as V,m as q}from"./index-C6RQBjW7.js";import{_ as D,a as W}from"./Input-B2kaQjut.js";const Y=e=>e<40?4:e<96?8:12,Z=e=>{var{type:s,className:r}=e,t=l(e,["type","className"]);return s!=="number"?(console.error('[ImageBadge]: Component supports only type="number"'),null):a.jsx(R,o({type:"number",className:i("tgui-e3bcc434a6ee9317",r)},t))},B=e=>{var{size:s=40,className:r,alt:t,crossOrigin:n,decoding:c,loading:d,referrerPolicy:b,sizes:h,src:f,srcSet:u,useMap:S,style:g,fallbackIcon:y,children:E,onLoad:v,onError:x}=e,A=l(e,["size","className","alt","crossOrigin","decoding","loading","referrerPolicy","sizes","src","srcSet","useMap","style","fallbackIcon","children","onLoad","onError"]);const[w,C]=m.useState(!1),[T,P]=m.useState(!1),I=f||(u==null?void 0:u.length)!==0,k=(T||!I)&&m.isValidElement(y),L=N=>{w||(C(!0),P(!1),v==null||v(N))},F=N=>{C(!1),P(!0),x==null||x(N)};return a.jsxs("div",p(o({style:o({width:s,minWidth:s,height:s,borderRadius:(g==null?void 0:g.borderRadius)||Y(s)},g),className:i("tgui-30d8642662534eb5",w&&"tgui-72bd4140eca37f53",r)},A),{children:[I&&a.jsx("img",{alt:t,className:"tgui-1191c597a64dbd25",crossOrigin:n,decoding:c,loading:d,referrerPolicy:b,sizes:h,src:f,srcSet:u,useMap:S,onLoad:L,onError:F}),k&&a.jsx("div",{className:"tgui-5ee2f1c6e1da49b5",children:y}),E]}))};B.Badge=Z;const G=e=>{var{className:s,Component:r}=e,t=l(e,["className","Component"]);return a.jsx(z,p(o({},t),{className:i("tgui-e05fce4753086879",s),Component:r||"h5"}))},J=e=>{var{className:s,Component:r}=e,t=l(e,["className","Component"]);return a.jsx(z,p(o({},t),{Component:r||"h1",className:i("tgui-c6d7432a5c12debe",s)}))},K=e=>{var{size:s}=e,r=l(e,["size"]);return s?s<=28?a.jsx(M,o({level:s<=24?"2":"1",weight:"1",caps:!0},r)):s===40?a.jsx(G,o({weight:"2",caps:!0},r)):s===48?a.jsx(O,o({weight:"1",level:"3",caps:!0},r)):a.jsx(J,o({weight:"1",caps:!0},r)):null},Q=e=>{var{type:s,className:r}=e,t=l(e,["type","className"]);if(s!=="number")throw new Error('[ImageBadge]: Component supports only type="number"');return a.jsx(R,o({type:"number",className:i("tgui-54214e0db34f53c3",r)},t))},U=e=>{var{className:s,style:r,acronym:t,fallbackIcon:n,size:c}=e,d=l(e,["className","style","acronym","fallbackIcon","size"]);return a.jsx(B,o({style:o({borderRadius:"50%"},r),className:i("tgui-91c5537b51b490a7",t&&"tgui-305551eb3f5abb68",s),fallbackIcon:t?a.jsx(K,{size:c,children:t}):n,size:c},d))};U.Badge=Q;const X=m.forwardRef((e,s)=>{var{mode:r="default",before:t,after:n,className:c,children:d,Component:b}=e,h=l(e,["mode","before","after","className","children","Component"]);const f=_(),u=f==="ios"?V:q;return a.jsxs(H,p(o({ref:s,Component:b||"button",className:i("tgui-a8ce18a8594cea9b",r==="destructive"&&"tgui-6e7ca796043fe6ca",f==="ios"&&"tgui-f464dba82cb8b46e",c)},h),{children:[j(t)&&t,j(d)&&a.jsx(u,{children:d}),j(n)&&n]}))}),$=m.forwardRef((e,s)=>{var{Component:r="span",className:t}=e,n=l(e,["Component","className"]);return a.jsx(r,p(o({},n),{ref:s,className:i("tgui-b9fd8cdf929947df",t)}))}),ee=e=>{var s=D({},W(e));return a.jsx("svg",p(o({width:"28",height:"28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s),{children:a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.286 6.445c-2.342-2.307-6.19-2.307-8.53 0l-5.353 5.272a.99.99 0 0 1-1.388-1.41l5.352-5.272c3.112-3.065 8.196-3.065 11.307 0a7.598 7.598 0 0 1 0 10.885l-7.347 7.238c-2.355 2.32-6.198 2.32-8.553 0a5.762 5.762 0 0 1 0-8.253l7.381-7.27c1.585-1.56 4.141-1.632 5.814-.167a4.06 4.06 0 0 1 .082 6.068l-6.158 5.688a.99.99 0 0 1-1.343-1.454l6.16-5.687c.93-.859.91-2.29-.044-3.127a2.315 2.315 0 0 0-3.122.088l-7.381 7.27a3.784 3.784 0 0 0 0 5.435c1.584 1.56 4.191 1.56 5.775 0l7.348-7.238a5.62 5.62 0 0 0 0-8.066Z",fill:"currentColor"})}))},ae=m.forwardRef((e,s)=>{var{label:r="Attach file",className:t,children:n}=e,c=l(e,["label","className","children"]);return a.jsxs("div",{ref:s,className:t,children:[n,a.jsxs(X,{Component:"label",before:a.jsx(ee,{}),children:[a.jsx($,{children:a.jsx("input",o({type:"file",placeholder:r},c))}),r]})]})});export{U as A,ae as F};

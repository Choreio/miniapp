import{_ as f,j as s,B as F,p as l,q as j,r as i,n as y,t as M,v as k,w as v,y as O,x as T}from"./index-DJ6RCx2I.js";import{_ as V,a as A}from"./Section-GC_IaaTE.js";import{V as q}from"./VisuallyHidden-BUI1MQ4o.js";const H=e=>e<40?4:e<96?8:12,W=e=>{var{type:r,className:a}=e,t=f(e,["type","className"]);return r!=="number"?(console.error('[ImageBadge]: Component supports only type="number"'),null):s.jsx(F,l({type:"number",className:j("tgui-e3bcc434a6ee9317",a)},t))},Z=e=>{var{size:r=40,className:a,alt:t,crossOrigin:o,decoding:n,loading:d,referrerPolicy:m,sizes:g,src:c,srcSet:u,useMap:R,style:p,fallbackIcon:N,children:S,onLoad:h,onError:b}=e,B=f(e,["size","className","alt","crossOrigin","decoding","loading","referrerPolicy","sizes","src","srcSet","useMap","style","fallbackIcon","children","onLoad","onError"]);const[w,I]=i.useState(!1),[C,_]=i.useState(!1),P=c||u,E=(C||!P)&&i.isValidElement(N),L=x=>{w||(I(!0),_(!1),h==null||h(x))},z=x=>{I(!1),_(!0),b==null||b(x)};return s.jsxs("div",y(l({style:l({width:r,minWidth:r,height:r,borderRadius:(p==null?void 0:p.borderRadius)||H(r)},p),className:j("tgui-30d8642662534eb5",w&&"tgui-72bd4140eca37f53",a)},B),{children:[P&&s.jsx("img",{alt:t,className:"tgui-1191c597a64dbd25",crossOrigin:o,decoding:n,loading:d,referrerPolicy:m,sizes:g,src:c,srcSet:u,useMap:R,onLoad:L,onError:z}),E&&s.jsx("div",{className:"tgui-5ee2f1c6e1da49b5",children:N}),S]}))};Z.Badge=W;const D=i.forwardRef((e,r)=>{var{mode:a="default",before:t,after:o,className:n,children:d,Component:m}=e,g=f(e,["mode","before","after","className","children","Component"]);const c=M(),u=c==="ios"?O:T;return s.jsxs(k,y(l({ref:r,Component:m||"button",className:j("tgui-a8ce18a8594cea9b",a==="destructive"&&"tgui-6e7ca796043fe6ca",c==="ios"&&"tgui-f464dba82cb8b46e",n)},g),{children:[v(t)&&t,v(d)&&s.jsx(u,{children:d}),v(o)&&o]}))}),G=e=>{var r=V({},A(e));return s.jsx("svg",y(l({width:"28",height:"28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r),{children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.286 6.445c-2.342-2.307-6.19-2.307-8.53 0l-5.353 5.272a.99.99 0 0 1-1.388-1.41l5.352-5.272c3.112-3.065 8.196-3.065 11.307 0a7.598 7.598 0 0 1 0 10.885l-7.347 7.238c-2.355 2.32-6.198 2.32-8.553 0a5.762 5.762 0 0 1 0-8.253l7.381-7.27c1.585-1.56 4.141-1.632 5.814-.167a4.06 4.06 0 0 1 .082 6.068l-6.158 5.688a.99.99 0 0 1-1.343-1.454l6.16-5.687c.93-.859.91-2.29-.044-3.127a2.315 2.315 0 0 0-3.122.088l-7.381 7.27a3.784 3.784 0 0 0 0 5.435c1.584 1.56 4.191 1.56 5.775 0l7.348-7.238a5.62 5.62 0 0 0 0-8.066Z",fill:"currentColor"})}))},U=i.forwardRef((e,r)=>{var{label:a="Attach file",className:t,children:o}=e,n=f(e,["label","className","children"]);return s.jsxs("div",{ref:r,className:t,children:[o,s.jsxs(D,{Component:"label",before:s.jsx(G,{}),children:[s.jsx(q,{children:s.jsx("input",l({type:"file",placeholder:a},n))}),a]})]})});export{U as F,Z as I};

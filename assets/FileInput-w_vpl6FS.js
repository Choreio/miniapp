import{_ as p,j as s,B as F,m as n,n as j,r as d,l as y,o as M,p as k,q as x,S as O,v as T}from"./index-B9LBRVgm.js";import{_ as V,a as A}from"./Input-jvhKZv9g.js";import{V as q}from"./VisuallyHidden-DAdq5KL1.js";const H=e=>e<40?4:e<96?8:12,W=e=>{var{type:r,className:a}=e,o=p(e,["type","className"]);return r!=="number"?(console.error('[ImageBadge]: Component supports only type="number"'),null):s.jsx(F,n({type:"number",className:j("tgui-e3bcc434a6ee9317",a)},o))},Z=e=>{var{size:r=40,className:a,alt:o,crossOrigin:t,decoding:c,loading:u,referrerPolicy:f,sizes:g,src:i,srcSet:l,useMap:R,style:m,fallbackIcon:N,children:S,onLoad:h,onError:b}=e,B=p(e,["size","className","alt","crossOrigin","decoding","loading","referrerPolicy","sizes","src","srcSet","useMap","style","fallbackIcon","children","onLoad","onError"]);const[I,w]=d.useState(!1),[C,_]=d.useState(!1),P=i||(l==null?void 0:l.length)!==0,E=(C||!P)&&d.isValidElement(N),L=v=>{I||(w(!0),_(!1),h==null||h(v))},z=v=>{w(!1),_(!0),b==null||b(v)};return s.jsxs("div",y(n({style:n({width:r,minWidth:r,height:r,borderRadius:(m==null?void 0:m.borderRadius)||H(r)},m),className:j("tgui-30d8642662534eb5",I&&"tgui-72bd4140eca37f53",a)},B),{children:[P&&s.jsx("img",{alt:o,className:"tgui-1191c597a64dbd25",crossOrigin:t,decoding:c,loading:u,referrerPolicy:f,sizes:g,src:i,srcSet:l,useMap:R,onLoad:L,onError:z}),E&&s.jsx("div",{className:"tgui-5ee2f1c6e1da49b5",children:N}),S]}))};Z.Badge=W;const D=d.forwardRef((e,r)=>{var{mode:a="default",before:o,after:t,className:c,children:u,Component:f}=e,g=p(e,["mode","before","after","className","children","Component"]);const i=M(),l=i==="ios"?O:T;return s.jsxs(k,y(n({ref:r,Component:f||"button",className:j("tgui-a8ce18a8594cea9b",a==="destructive"&&"tgui-6e7ca796043fe6ca",i==="ios"&&"tgui-f464dba82cb8b46e",c)},g),{children:[x(o)&&o,x(u)&&s.jsx(l,{children:u}),x(t)&&t]}))}),G=e=>{var r=V({},A(e));return s.jsx("svg",y(n({width:"28",height:"28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r),{children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.286 6.445c-2.342-2.307-6.19-2.307-8.53 0l-5.353 5.272a.99.99 0 0 1-1.388-1.41l5.352-5.272c3.112-3.065 8.196-3.065 11.307 0a7.598 7.598 0 0 1 0 10.885l-7.347 7.238c-2.355 2.32-6.198 2.32-8.553 0a5.762 5.762 0 0 1 0-8.253l7.381-7.27c1.585-1.56 4.141-1.632 5.814-.167a4.06 4.06 0 0 1 .082 6.068l-6.158 5.688a.99.99 0 0 1-1.343-1.454l6.16-5.687c.93-.859.91-2.29-.044-3.127a2.315 2.315 0 0 0-3.122.088l-7.381 7.27a3.784 3.784 0 0 0 0 5.435c1.584 1.56 4.191 1.56 5.775 0l7.348-7.238a5.62 5.62 0 0 0 0-8.066Z",fill:"currentColor"})}))},U=d.forwardRef((e,r)=>{var{label:a="Attach file",className:o,children:t}=e,c=p(e,["label","className","children"]);return s.jsxs("div",{ref:r,className:o,children:[t,s.jsxs(D,{Component:"label",before:s.jsx(G,{}),children:[s.jsx(q,{children:s.jsx("input",n({type:"file",placeholder:a},c))}),a]})]})});export{U as F,Z as I};

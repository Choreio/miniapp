import{D as f,j as e,y as S,n as i,S as g,C as F,r as N,o as p,A as L,m as j,p as h,I as l,K as H,L as D}from"./index-Dlqr7fNJ.js";const I=(...s)=>(...t)=>s.filter(a=>typeof a=="function").forEach(a=>a(...t));function v(){return v=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var c=arguments[a];for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r])}return t},v.apply(this,arguments)}function w(s){if(s==null)throw new TypeError("Cannot destructure "+s);return s}const _=()=>{const t=f()==="ios";return{Title:r=>t?e.jsx(S,i({},r)):e.jsx(g,i({level:"1"},r)),Description:r=>t?e.jsx(F,i({},r)):e.jsx(g,i({level:"2"},r))}},Z=N.forwardRef((s,t)=>{var{children:a,titleBadge:c,hint:r,subhead:o,subtitle:n,description:d,className:b,before:u,after:m,Component:y,hovered:x,multiline:C}=s,P=p(s,["children","titleBadge","hint","subhead","subtitle","description","className","before","after","Component","hovered","multiline"]);const T=f(),{Title:B,Description:z}=_(),W=l(a)||l(r)||l(c);return e.jsxs(L,j(i({ref:t,Component:y||"div",className:h("tgui-b8dfba0b5c3d054c",T==="ios"&&"tgui-7b5bccbb645b495f",x&&"tgui-7edaaf0c57797623",C&&"tgui-6c49dadccf648a5b",b)},P),{children:[l(u)&&e.jsx("div",{className:"tgui-aaa795d78c356ac1",children:u}),e.jsxs("div",{className:"tgui-8735a62be5a8b8a7",children:[l(o)&&e.jsx(g,{className:"tgui-46dd90b57ffed25f",level:"2",weight:"3",children:o}),W&&e.jsxs(B,{className:"tgui-a894f59f4c5ad72f",children:[l(a)&&e.jsx("span",{className:"tgui-1c6d7865a76a19bc",children:a}),l(r)&&e.jsx("span",{className:"tgui-bb909928b48f948b",children:r}),l(c)&&c]}),l(n)&&e.jsx(g,{className:"tgui-d528ef65a8b76273",level:"2",weight:"3",children:n}),l(d)&&e.jsx(z,{className:"tgui-fc059ed3ac5799a6",children:d})]}),l(m)&&e.jsx("div",{className:"tgui-56b2e897ed7ccb22",children:m})]}))}),A=s=>{var{size:t}=s,a=p(s,["size"]);return t==="l"?e.jsx(S,i({weight:"2"},a)):e.jsx(g,i({level:"2",weight:"2"},a))},K={filled:"tgui-8a1ca9efa24f4809",bezeled:"tgui-91bda9a36246a33c",plain:"tgui-48956537c34690db",gray:"tgui-93106efd6b6d66ee",outline:"tgui-e884e36ff1faa596",white:"tgui-ba6d30cc81e39ae5"},M={s:"tgui-13f23a224303ddaa",m:"tgui-1a16a49d89076ff4",l:"tgui-9cef742a22f195c9"},$=N.forwardRef((s,t)=>{var{type:a,size:c="m",before:r,after:o,stretched:n,children:d,className:b,mode:u="filled",loading:m,Component:y="button"}=s,x=p(s,["type","size","before","after","stretched","children","className","mode","loading","Component"]);const C=f();return e.jsxs(L,j(i({ref:t,type:a||"button",Component:y,className:h("tgui-117e77cd385a9c8d",u&&K[u],c&&M[c],C==="ios"&&"tgui-55e8aa7f5cea2280",n&&"tgui-726846958fe7f4a0",m&&"tgui-490cb0f5ec4998f3",b)},x),{children:[m&&e.jsx(H,{className:"tgui-014f2b7d196b090d",size:"s"}),l(r)&&e.jsx("div",{className:"tgui-06cc94d03a7c4dd7",children:r}),e.jsx(A,{className:"tgui-5f6014c0f063b6de",size:c,children:d}),l(o)&&e.jsx("div",{className:"tgui-8310172a5320ab71",children:o})]}))}),k=s=>{var{className:t,children:a}=s,c=p(s,["className","children"]);const r=f();return e.jsx("div",j(i({className:h("tgui-389a43acd684137a",r==="ios"&&"tgui-cfed40fe81d34ad5",t)},c),{children:a}))},q=s=>{var{className:t}=s,a=p(s,["className"]);return e.jsx("hr",i({className:h("tgui-8af0d10d5540c6cc",t)},a))},G=s=>{var t=v({},w(s));return f()==="ios"?e.jsx(F,i({},t)):e.jsx(g,i({level:"2"},t))},R=s=>{var{className:t,children:a,centered:c}=s,r=p(s,["className","children","centered"]);const o=f();return e.jsx("footer",j(i({className:h("tgui-dbb364e8ced00cc8",o==="ios"&&"tgui-8c4c6f82ba895475",c&&"tgui-8ebba379083b615a",t)},r),{children:e.jsx(G,{className:"tgui-67471b69da3e3062",children:a})}))},J=()=>{const s=f();return{Default:c=>{var r=v({},w(c));return s==="ios"?e.jsx(F,i({caps:!0},r)):e.jsx(g,i({level:"2",weight:"2"},r))},Large:c=>{var r=v({},w(c));return s==="ios"?e.jsx(g,i({level:"1",weight:"2"},r)):e.jsx(S,i({weight:"2"},r))}}},E=s=>{var{large:t,className:a,children:c}=s,r=p(s,["large","className","children"]);const o=f(),{Default:n,Large:d}=J(),b=t?d:n;return e.jsx("header",j(i({className:h("tgui-d0251b46536ac046",o==="ios"&&"tgui-b7217abb24e8763a",t&&"tgui-34fd1a25cc171439",a)},r),{children:e.jsx(b,{Component:"h1",className:"tgui-9c200683b316fde6",children:c})}))},O=s=>{var{header:t,footer:a,className:c,children:r}=s,o=p(s,["header","footer","className","children"]);const n=f(),d=D(t)?e.jsx(E,{children:t}):t,b=D(a)?e.jsx(R,{children:a}):a;return e.jsxs("section",j(i({className:h("tgui-3dfa44f9f78f9a22",n==="base"&&"tgui-8e15431b81f6601e",n==="ios"&&"tgui-97eca24324122dbc",c)},o),{children:[e.jsxs("div",{className:"tgui-db9be63c4fecf79b",children:[d,e.jsx("div",{className:"tgui-4b78bed6e925088e",children:N.Children.map(r,(u,m)=>e.jsxs(e.Fragment,{children:[u,m<N.Children.count(r)-1&&e.jsx(q,{className:"tgui-a6d406c4dc060899"})]}))})]}),b]}))};O.Header=E;O.Footer=R;const Q=s=>{var t=v({},w(s));return f()==="ios"?e.jsx(F,i({caps:!0},t)):e.jsx(g,i({level:"2",weight:"2"},t))},U={base:"tgui-8ca550c2fc85eff5",ios:"tgui-7707c5d942b7b9af"},V={default:"tgui-7584398855f80ae6",error:"tgui-41b168516bddcf4b",focused:"tgui-89277928456f0e30"},X=N.forwardRef((s,t)=>{var{status:a,header:c,before:r,after:o,disabled:n,children:d,className:b,onFocus:u,onBlur:m}=s,y=p(s,["status","header","before","after","disabled","children","className","onFocus","onBlur"]);const x=f(),[C,P]=N.useState(!1),T=a||(C?"focused":"default"),B=I(u,()=>{n||P(!0)}),z=I(m,()=>P(!1));return e.jsxs("div",{ref:t,className:h("tgui-92da7016c7125c02",U[x],V[T],n&&"tgui-4a83fef1f04acb0e"),"aria-disabled":n,children:[e.jsxs("label",j(i({"aria-disabled":n,className:h("tgui-0f5050defacbf813",b),onFocus:B,onBlur:z},y),{children:[l(r)&&e.jsx("div",{className:"tgui-8f04eff653cfa5e5",children:r}),d,l(o)&&e.jsx("div",{className:"tgui-16b3783d394bc7db",children:o})]})),l(c)&&x==="base"&&e.jsx(Q,{className:"tgui-9f9a52f695b85cc9",children:c})]})}),ee=s=>{var{type:t="text",header:a,before:c,after:r,status:o,className:n,disabled:d}=s,b=p(s,["type","header","before","after","status","className","disabled"]);const u=f(),m=u==="ios"?S:g;return e.jsx(X,{header:a,before:c,after:r,status:o,disabled:d,className:h("tgui-d9de1f32aee12a15",u==="ios"&&"tgui-9b2ad13855aef059",n),children:e.jsx(m,i({Component:"input",className:"tgui-c4863cd4c893a047",type:t,disabled:d},b))})};export{$ as B,Z as C,X as F,ee as I,k as L,O as S,v as _,w as a,I as c};
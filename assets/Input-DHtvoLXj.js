import{v as g,j as s,C as B,p as i,A as _,r as m,_ as F,q as h,o as I,x as b,z as w}from"./index-Ds-NZCBB.js";import{_ as C,a as R}from"./Section-DjlSGsqP.js";const N=(...e)=>(...a)=>e.filter(t=>typeof t=="function").forEach(t=>t(...a)),E=e=>{var a=C({},R(e));return g()==="ios"?s.jsx(B,i({caps:!0},a)):s.jsx(_,i({level:"2",weight:"2"},a))},T={base:"tgui-8ca550c2fc85eff5",ios:"tgui-7707c5d942b7b9af"},q={default:"tgui-7584398855f80ae6",error:"tgui-41b168516bddcf4b",focused:"tgui-89277928456f0e30"},z=m.forwardRef((e,a)=>{var{status:t,header:o,before:c,after:f,disabled:r,children:l,className:d,onFocus:n,onBlur:u}=e,p=F(e,["status","header","before","after","disabled","children","className","onFocus","onBlur"]);const x=g(),[y,j]=m.useState(!1),v=t||(y?"focused":"default"),P=N(n,()=>{r||j(!0)}),S=N(u,()=>j(!1));return s.jsxs("div",{ref:a,className:h("tgui-92da7016c7125c02",T[x],q[v],r&&"tgui-4a83fef1f04acb0e"),"aria-disabled":r,children:[s.jsxs("label",I(i({"aria-disabled":r,className:h("tgui-0f5050defacbf813",d),onFocus:P,onBlur:S},p),{children:[b(c)&&s.jsx("div",{className:"tgui-8f04eff653cfa5e5",children:c}),l,b(f)&&s.jsx("div",{className:"tgui-16b3783d394bc7db",children:f})]})),b(o)&&x==="base"&&s.jsx(E,{className:"tgui-9f9a52f695b85cc9",children:o})]})}),k=m.forwardRef((e,a)=>{var{type:t="text",header:o,before:c,after:f,status:r,className:l,disabled:d}=e,n=F(e,["type","header","before","after","status","className","disabled"]);const u=g(),p=u==="ios"?w:_;return s.jsx(z,{header:o,before:c,after:f,status:r,disabled:d,className:h("tgui-d9de1f32aee12a15",u==="ios"&&"tgui-9b2ad13855aef059",l),children:s.jsx(p,i({ref:a,Component:"input",className:"tgui-c4863cd4c893a047",type:t,disabled:d},n))})});export{z as F,k as I,N as c};
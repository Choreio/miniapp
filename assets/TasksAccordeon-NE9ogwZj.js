import{r as a,_ as m,j as n,o as u,p,q as f,V as v}from"./index-BUiYZjuV.js";import{c as I}from"./Input-DoBbYG2Y.js";import{_,a as A,C as g,L as k}from"./Section-tTaGadWZ.js";import{TaskMiniCard as w}from"./TaskCard-C8xH-u7E.js";import"./calcDistance-UWrR0_E3.js";import"./index-Beyn9D45.js";import"./MapContainerYandex-CPTKwLRG.js";import"./FileInput-Db5Sg5Zq.js";import"./VisuallyHidden-BEs0LH4r.js";import"./Avatar-CTiEabjx.js";const x=a.createContext({labelId:"",contentId:"",expanded:!1,onChange:()=>{}}),N=(e,o)=>e?o===null?"inherit":`${o.scrollHeight}px`:"0px",j=e=>{var{className:o,children:r}=e,s=m(e,["className","children"]);const c=a.useRef(null),{expanded:t,labelId:l,contentId:i}=a.useContext(x);return n.jsx("div",u(p({id:i,role:"region","aria-labelledby":l,"aria-hidden":!t,className:f("tgui-f23c0e195677169c",o)},s),{children:n.jsx("div",{ref:c,className:"tgui-947b927060015de8",style:{maxHeight:N(t,c.current)},children:r})}))},T=e=>{var o=_({},A(e));return n.jsx("svg",u(p({width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o),{children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.3 7.54a1 1 0 0 1 1.4 0l6.8 6.8 6.8-6.8a1 1 0 1 1 1.4 1.42l-7.5 7.5a1 1 0 0 1-1.4 0l-7.5-7.5a1 1 0 0 1 0-1.42Z",fill:"currentColor"})}))},C=e=>{var{after:o,onClick:r,children:s}=e,c=m(e,["after","onClick","children"]);const{expanded:t,labelId:l,contentId:i,onChange:d}=a.useContext(x),b=()=>d(!t);return n.jsx(g,u(p({id:l,"aria-expanded":t,"aria-controls":i,onClick:I(b,r),after:o||n.jsx(T,{className:f("tgui-60e7968097edfa6f",t&&"tgui-c900ecbd6d8d6d5e")})},c),{children:s}))},y=e=>{const o=a.useId(),r=e??`Accordion${o}`,s=`AccordionContent${e??o}`;return{labelId:r,contentId:s}},h=({id:e,expanded:o,onChange:r,children:s})=>{const{labelId:c,contentId:t}=y(e),l=v({labelId:c,contentId:t,expanded:o,onChange:r});return n.jsx(x.Provider,{value:l,children:s})};h.Summary=C;h.Content=j;const D=({tasks:e,title:o,mode:r,open:s=!1})=>{const[c,t]=a.useState(s),[l,i]=a.useState(e);return a.useEffect(()=>{i(e),console.log("Task lisk ("+o+"): Updated tasks"),console.log(e),console.log("Force reopen accordeon"),t(!1),setTimeout(()=>{t(!0)},100)},[e,o]),n.jsxs(h,{expanded:c,onChange:()=>t(d=>!d),children:[n.jsx(C,{children:o}),n.jsx(j,{children:n.jsxs(k,{children:[l.length===0&&n.jsx(g,{children:"No tasks"}),l.map(d=>n.jsx(w,{task:d,mode:r},d.id))]})})]})};export{D as TasksAccordeon};

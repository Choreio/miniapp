const __vite__fileDeps=["./MapPage-CyK4RzaE.js","./index-VFKkkdMM.js","./index-CvQTBs6Q.css","./GeolocationRequest-DnLnRJ7A.js","./Input-Cv6hzr2T.js","./TaskCard-Be8Kg7It.js","./FileInput-Bq4i_xfn.js","./TasksList-C58mlB9H.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{R as g,_ as f,J as k,c as r,d as T,r as i,s as _,h as v,j as e,P as w,T as A}from"./index-VFKkkdMM.js";import{G as R,S,a as u}from"./GeolocationRequest-DnLnRJ7A.js";import{S as y}from"./Input-Cv6hzr2T.js";const C=g.lazy(()=>f(()=>import("./MapPage-CyK4RzaE.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(({MapPage:t})=>({default:t}))),x=g.lazy(()=>f(()=>import("./TasksList-C58mlB9H.js"),__vite__mapDeps([7,1,2,4,5,3,6]),import.meta.url).then(({TasksList:t})=>({default:t}))),P=()=>{const t=k(),d=r(T),[l,j]=i.useState("list"),m=s=>{console.log("Changing mode"),j(s)},a=r(_),o=r(v),c=i.useMemo(()=>o.filter(s=>s.acceptedBy!==a.id&&s.status==="open"&&s.customer!==a.id),[o,a]),n=i.useMemo(()=>o.filter(s=>s.acceptedBy===a.id&&s.status==="active"),[o,a]);i.useEffect(()=>{console.log("Force redo accordeon"),h(!1),setTimeout(()=>{h(!0)},50)},[c,n]);const[p,h]=i.useState(!0);return t?d.available?e.jsx("div",{className:"md:container md:mx-auto",children:e.jsx(y,{className:"pt-4 h-full",header:e.jsxs("div",{className:"p-2 flex align-middle items-center justify-between w-full",children:[e.jsx(A,{className:"self-start",children:"Tasks"}),e.jsxs(S,{className:"w-40 h-8 self-end z-[0]",children:[e.jsx(u,{className:"w-4 h-8 align-middle p-1",selected:l==="list",onClick:()=>{m("list")},children:"List"}),e.jsx(u,{selected:l==="map",className:"w-4 h-8 align-middle p-1",onClick:()=>{m("map")},children:"Map"})]})]}),children:l==="list"?e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Accepted tasks",tasks:n,mode:"view",open:p}),e.jsx(x,{title:"Available tasks",tasks:c,mode:"view",open:p})]}):e.jsx(e.Fragment,{children:e.jsx(C,{parent:"Tasks",tasks:[...n,...c],position:d})})})}):e.jsx(R,{}):e.jsx(w,{header:"Oops",description:"Application was launched with missing init data",children:e.jsx("img",{alt:"Telegram sticker",src:"https://xelene.me/telegram.gif",style:{display:"block",width:"144px",height:"144px"}})})};export{P as TasksTab};

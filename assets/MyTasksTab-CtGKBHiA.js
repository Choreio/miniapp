const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TasksAccordeon-TARuNQgF.js","assets/index-DnE_Damd.js","assets/index-B8MpIlGA.css","assets/Input-Cp38j5Wi.js","assets/Section-BK6BBNvg.js","assets/TaskCard-D3QUARbC.js","assets/calcDistance-p9X9NEyQ.js","assets/index-BgBVDwCD.js","assets/MapContainerYandex-Cr5iP-8A.js","assets/FileInput-CEQE8qeQ.js","assets/VisuallyHidden-BJIpfARl.js","assets/Avatar-CD9uENVh.js"])))=>i.map(i=>d[i]);
import{R as u,D as f,c as r,s as p,G as T,r as a,d as k,j as s,T as x}from"./index-DnE_Damd.js";import{G as j}from"./GeolocationRequest-CAoq1sqA.js";import{S as A}from"./Section-BK6BBNvg.js";import"./MapContainerYandex-Cr5iP-8A.js";import"./Input-Cp38j5Wi.js";const n=u.lazy(()=>f(async()=>{const{TasksAccordeon:e}=await import("./TasksAccordeon-TARuNQgF.js");return{TasksAccordeon:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])).then(({TasksAccordeon:e})=>({default:e}))),g=()=>{const e=r(p),o=r(T),l=a.useMemo(()=>o.filter(t=>{var c;return((c=t.customer)==null?void 0:c.id)===e.id&&t.status!=="closed"}),[o,e]),d=a.useMemo(()=>o.filter(t=>{var c;return((c=t.customer)==null?void 0:c.id)===e.id&&t.status==="closed"}),[o,e]),[m,i]=a.useState(!0);return a.useEffect(()=>{console.log("Force redo accordeon"),i(!1),setTimeout(()=>{i(!0)},50)},[o]),r(k).available?s.jsxs("div",{className:"md:container md:mx-auto",children:[s.jsx("div",{className:"p-2 flex align-middle items-center justify-between w-full",children:s.jsx(x,{children:"My tasks"})}),s.jsxs(A,{className:"h-full",children:[s.jsx(n,{title:"Active tasks",tasks:l,mode:"edit",open:m}),s.jsx(n,{title:"Finished tasks",tasks:d,mode:"view"})]})]}):s.jsx(j,{})};export{g as MyTasksTab};

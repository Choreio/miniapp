const __vite__fileDeps=["./GeolocationRequest-7H_hP6we.js","./index-BUIFIREP.js","./index-lNRkx6TD.css","./Input-9a2PHrOu.js","./MapPage-CXlpj48R.js","./TaskCard-KAtREoFB.js","./index-C0fbcPTu.js","./FileInput-CMGqtNf-.js","./Avatar-BHWnWOiv.js","./TasksList-BRdjuMHC.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as t,R as E,_ as R,c as N,s as G,b as le,k as H,l as ae,j as e,T as V,C as g,m as ne,n as oe,h as re,d as ce,B as ie}from"./index-BUIFIREP.js";import{F as Z,b as de,G as me,S as he,a as U}from"./GeolocationRequest-7H_hP6we.js";import{I as ue,a as I,L as ge,Z as pe,M as xe}from"./index-C0fbcPTu.js";import{I as fe,F as je}from"./FileInput-CMGqtNf-.js";import{L as ve,I as A,C as O,B as F,S as Ce}from"./Input-9a2PHrOu.js";function Ne({title:n,titleId:p,...x},a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":p},x),n?t.createElement("title",{id:p},n):null,t.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z",clipRule:"evenodd"}))}const be=t.forwardRef(Ne),we=E.lazy(()=>R(()=>import("./GeolocationRequest-7H_hP6we.js").then(n=>n.c),__vite__mapDeps([0,1,2,3]),import.meta.url).then(({MapContainerYandex:n})=>({default:n}))),ke=({closeModal:n})=>{var D,z;const p=N(G),x=le(),[a,v]=t.useState(!1),[d,f]=t.useState(""),[i,b]=t.useState(""),[r,j]=t.useState(""),[m,C]=t.useState(),[o,w]=t.useState([]),[c,k]=t.useState({available:!1}),h=t.useMemo(()=>p.id,[p]),Y=()=>{var l,u;const s=JSON.parse(sessionStorage.getItem("saved-task")||"{}");try{f(s.title),b(s.desc),j(((l=s==null?void 0:s.reward)==null?void 0:l.split(" ")[0])||""),C((u=s==null?void 0:s.reward)==null?void 0:u.split(" ")[1]),w(s.attachments||[]),k(s.location)}catch{console.log("Cant parse saved task")}},M=t.useCallback((s,l,u,P,S,se,te)=>({id:Date.now().toString(),title:s,desc:l,reward:u+" "+P,attachments:S,location:se,customer:te,status:"open"}),[]),[T,y]=t.useState(N(H));t.useEffect(()=>{T&&(console.log("Restore created task"),Y())},[T]),t.useEffect(()=>{d.trim()!==""||i.trim()!==""||r.trim()!==""||(m||"").trim()!==""||o.length>0||c.available?(console.log("Changes made"),y(!0),sessionStorage.setItem("saved-task",JSON.stringify(M(d,i,r,m||"TON",o,c,h)))):(y(!1),sessionStorage.removeItem("saved-task"))},[d,i,r,m,o,c,h,M]),t.useEffect(()=>{console.log("Update changes store"),x(ae(T))},[T,x]);const J=s=>{const l=s.currentTarget.files;if(l&&(l==null?void 0:l.length)>0){const u=[];for(let S=0;S<l.length;S++)u.push(URL.createObjectURL(l[S]));w([...o||[],...u])}},_=s=>{const l=[...o];l.splice(s,1),w(l)},X=()=>{const s=document.getElementsByTagName("input");for(let u=0;u<s.length;u++)s[u].blur();if(d.trim().length===0||i.trim().length===0||r.length===0||(m||"")===""||!c.available)return v(!0);const l=M(d,i,r,m||"TON",o,c,h);x(oe(l)),y(!1),sessionStorage.removeItem("created-task"),n()},$=()=>{y(!1),sessionStorage.removeItem("saved-task"),n()},[K,L]=t.useState(!1),[Q,B]=t.useState(0),W=s=>{console.log("Open image fullscreen. Index: "+s),L(!0),B(s)},ee=()=>{console.log("Close image fullscreen"),L(!1),B(0)};return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx(V,{className:"text-center",children:"Task creation"}),T&&e.jsx("div",{className:"bg-yellow-400 text-center rounded-lg mb-1",children:"You have uncommited changes!!!"}),e.jsxs(ve,{className:"flex flex-col gap-2 h-full",children:[e.jsxs("div",{children:[e.jsxs(g,{level:"2",weight:"2",className:"pl-6 text-[--tg-theme-hint-color]",children:["Title",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx(A,{value:d,status:d.length===0&&a?"error":"default",placeholder:"Title...",onChange:s=>{const l=s.currentTarget.value;f(l)}}),e.jsx(g,{className:"pl-8 text-red-400",hidden:!(i.length===0&&a),children:"This field is required"})]}),e.jsxs("div",{children:[e.jsxs(g,{level:"2",weight:"2",className:"pl-6 text-[--tg-theme-hint-color]",children:["Description",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx(A,{placeholder:"Description...",value:i,status:i.length===0&&a?"error":"default",onChange:s=>b(s.currentTarget.value)}),e.jsx(g,{className:"pl-8 text-red-400",hidden:!(i.length===0&&a),children:"This field is required"})]}),e.jsxs("div",{children:[e.jsxs(g,{level:"2",weight:"2",className:"pl-6 text-[--tg-theme-hint-color]",children:["Reward",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsxs("div",{className:"flex items-center justify-stretch h-fit",children:[e.jsxs("div",{className:"w-2/5 h-full flex flex-col justify-between",children:[e.jsx(A,{placeholder:"Cost...",inputMode:"numeric",type:"number",status:r.length===0&&a?"error":"default",value:r||"",onChange:s=>{j(s.currentTarget.value)}}),e.jsx(g,{className:"pl-8 text-red-400",hidden:!(r.length===0&&a),children:"This field is required"})]}),e.jsxs("div",{className:"w-3/5 flex flex-col h-full justify-between",children:[e.jsxs(ue,{className:"h-12 items-center",children:[e.jsx(I,{onClick:()=>C("TON"),mode:m==="TON"?"bezeled":"plain",children:"TON"}),e.jsx(I,{onClick:()=>C("USDT"),mode:m==="USDT"?"bezeled":"plain",children:"USDT"}),e.jsx(I,{onClick:()=>C("BTC"),mode:m==="BTC"?"bezeled":"plain",children:"BTC"})]}),e.jsx(g,{className:"pl-8 text-red-400",hidden:!((m||"")===""&&a),children:"Please select currency"})]})]})]}),e.jsxs("div",{children:[e.jsx(g,{level:"2",weight:"2",className:"pl-6 text-[--tg-theme-hint-color]",children:"Attachments"}),e.jsx("div",{className:"p-2 grid grid-flow-row grid-cols-4 gap-2",children:o.map((s,l)=>e.jsxs("div",{className:"relative",children:[e.jsx(fe,{size:96,className:"w-full",src:s,onClick:()=>W(l)}),e.jsx(Z,{className:"absolute right-0 -top-2 w-6 h-6 border border-gray-500 rounded-full bg-gray-400 bg-opacity-55",onClick:()=>_(l)})]},l+"/"+s))}),o&&o.length>0&&o.map((s,l)=>e.jsx(O,{className:"pl-6",after:e.jsx(F,{mode:"plain",onClick:()=>_(l),children:"X"}),children:e.jsx(ne,{children:s})},l+s)),e.jsx(je,{multiple:!0,label:"Attach a new file",accept:"image/*",onChange:J})]}),e.jsxs("div",{children:[e.jsxs(g,{level:"2",weight:"2",className:"pl-6 text-[--tg-theme-hint-color]",children:["Address",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsxs("div",{className:"overflow-visible",children:[e.jsx(de,{status:!c.available&&a?"error":"default",geoposition:c||{available:!1},setGeoposition:s=>k(s)}),e.jsx(g,{className:"pl-8 text-red-400",hidden:!(i.length===0&&a),children:"This field is required"})]})]}),e.jsxs("div",{children:[e.jsx(g,{level:"2",weight:"2",className:"pl-6 text-[--tg-theme-hint-color]",children:"On map"}),e.jsx(O,{children:e.jsx(we,{available:c.available,type:"target",center:{latitude:Number(((D=c.latLong)==null?void 0:D.latitude)||52.518073),longitude:Number(((z=c.latLong)==null?void 0:z.longitude)||13.376139)}})})]})]})]}),e.jsx("div",{className:"sticky bottom-0 pt-8",children:e.jsxs("div",{className:"flex flex-row justify-center items-center",children:[e.jsx(F,{className:"bg-green-400 w-full",onClick:X,children:"Create"}),e.jsx(F,{className:"bg-red-400 w-full",onClick:$,children:"Cancel"})]})}),e.jsx(ge,{open:K,close:ee,controller:{closeOnPullDown:!0,closeOnBackdropClick:!0,closeOnPullUp:!0},index:Q,plugins:[pe],slides:o==null?void 0:o.map(s=>({src:s}))})]})},Te=({children:n,openModal:p,setOpenModal:x,closeModal:a,hidingModal:v,setHidingModal:d})=>e.jsx("div",{id:"pseudoModal",hidden:!p,className:"w-screen fixed top-[15%] bottom-0 bg-[--tg-theme-bg-color] overflow-y-scroll".concat(" ",v?"animate-bottomDisappear":"animate-bottomAppear"," ",p?"z-10":"-z-10"),style:{animationFillMode:"forward"},onAnimationEnd:()=>{if(v){const f=document.getElementById("pseudoModal");f&&(f.style.opacity="0"),x(!1),d(!1),console.log("Modal closed")}},children:e.jsxs("div",{className:"sticky -top-0 inset-0 z-[11] bg-[--tg-theme-bg-color]",children:[e.jsx(xe,{after:e.jsx(Z,{className:"text-[--tg-theme-plain-foreground] h-4",onClick:a})}),n]})}),Se=E.lazy(()=>R(()=>import("./MapPage-CXlpj48R.js"),__vite__mapDeps([4,1,2,0,3,5,6,7,8]),import.meta.url).then(({MapPage:n})=>({default:n}))),q=E.lazy(()=>R(()=>import("./TasksList-BRdjuMHC.js"),__vite__mapDeps([9,1,2,3,5,6,0,7,8]),import.meta.url).then(({TasksList:n})=>({default:n}))),Ee=()=>{const[n,p]=t.useState("list"),x=h=>{console.log("Changing mode"),p(h)},[a,v]=t.useState(!1),[d,f]=t.useState(!1),i=()=>{v(!0),console.log("Modal opened")},b=()=>{f(!0)},r=N(G),j=N(re),m=N(H),C=t.useMemo(()=>j.filter(h=>h.customer===r.id&&h.status!=="closed"),[j,r]),o=t.useMemo(()=>j.filter(h=>h.customer===r.id&&h.status==="closed"),[j,r]),[w,c]=t.useState(!0);t.useEffect(()=>{console.log("Force redo accordeon"),c(!1),setTimeout(()=>{c(!0)},50)},[j]);const k=N(ce);return k.available?e.jsxs("div",{className:"md:container md:mx-auto",children:[e.jsx(Ce,{className:"pt-4 h-full",header:e.jsxs("div",{className:"p-2 flex align-middle items-center justify-between w-full",children:[e.jsx(V,{className:"self-start",children:"Tasks"}),e.jsxs(he,{className:"w-40 h-8 self-end ",children:[e.jsx(U,{className:"w-4 h-8 align-middle p-1",onClick:()=>{x("list")},children:"List"}),e.jsx(U,{className:"w-4 h-8 align-middle p-1",onClick:()=>{x("map")},children:"Map"})]})]}),children:n==="list"?e.jsxs(e.Fragment,{children:[e.jsx(O,{disabled:a,before:e.jsxs("div",{children:[m&&e.jsx(ie,{className:"absolute z-50 top-1 left-1 bg-yellow-600",type:"number",children:"!"}),e.jsx(be,{className:"h-8 w-8"})]}),onClick:()=>{a||i()},children:"Create a new task"}),e.jsx(q,{title:"Active tasks",tasks:C,mode:"edit",open:w}),e.jsx(q,{title:"Finished tasks",tasks:o,mode:"view"})]}):e.jsx(e.Fragment,{children:e.jsx(Se,{parent:"MyTasks",tasks:C,position:k})})}),a&&e.jsx(Te,{openModal:a,setOpenModal:v,closeModal:b,hidingModal:d,setHidingModal:f,children:e.jsx(ke,{closeModal:b})})]}):e.jsx(me,{})};export{Ee as MyTasksTab};

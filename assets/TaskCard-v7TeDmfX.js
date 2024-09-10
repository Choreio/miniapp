import{r as a,e as C,f as pe,b as xe,V as S,j as s,B as je,G as be,d as we,s as ve,W as Ne,X as Ce,Y as ye,T as Te,C as B,Z as Fe,$ as Q,a0 as Ie}from"./index-ByNOcer-.js";import{c as De}from"./calcDistance-p9X9NEyQ.js";import{S as Ae,b as Ee,I as U}from"./Input-BmxBgZ7Y.js";import{F as b}from"./Field-R2GitiSo.js";import{I as Be,a as _,L as Le,Z as Oe}from"./index-Rgq7b0Cc.js";import{I as Me,F as Re,G as Ue,M as ke}from"./MapContainerYandex-Cq1tU_Nh.js";import{m as Pe}from"./proxy-CXc_OPS_.js";import{I as Ze,F as Ge}from"./FileInput-CSBdwFYU.js";import{C as ee,B as w,L as Ye}from"./List-DgIbQkPF.js";import{A as ze}from"./Avatar-Bn9mfJqc.js";import"./VisuallyHidden-hoLU1URk.js";function Je({title:c,titleId:r,...d},i){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":r},d),c?a.createElement("title",{id:r},c):null,a.createElement("path",{d:"M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"}))}const He=a.forwardRef(Je),ts=({task:c})=>{const r=C(pe),d=xe(),i=C(g=>S(g,c.id)),[e,u]=a.useState();return a.useEffect(()=>{var g;u(De((g=c.location)==null?void 0:g.latLong,r.latLong))},[r,c]),s.jsx(s.Fragment,{children:s.jsx(ee,{before:s.jsx(ze,{children:"CS"}),id:c.id,className:"w-full select-none",multiline:!1,description:c.desc,after:s.jsx("span",{children:c.reward.cost+" "+c.reward.currency}),titleBadge:i?s.jsx(je,{className:"bg-yellow-600",mode:"critical",type:"number",children:"!"}):s.jsx(s.Fragment,{}),subhead:e+" km",onClick:()=>d("/tasks/task/"+c.id),children:c.title})})},ls=()=>{var J,H,$,V,W,X,q;const c=be(),r=we(),d=C(ve),i=c.taskId||"-1",e=C(t=>Ne(t,i)),[u,g]=a.useState((e==null?void 0:e.title)||""),[h,y]=a.useState((e==null?void 0:e.desc)||""),[f,T]=a.useState(((J=e==null?void 0:e.reward)==null?void 0:J.cost)||0),[j,v]=a.useState(((H=e==null?void 0:e.reward)==null?void 0:H.currency)||"TON"),[p,N]=a.useState((e==null?void 0:e.attachments)||[]),[n,F]=a.useState((e==null?void 0:e.location)||{available:!1}),L=a.useMemo(()=>e==null?void 0:e.customer,[e]),I=a.useMemo(()=>(e==null?void 0:e.customer.id)===d.id,[e,d]),[k,se]=a.useState(!1),te=a.useCallback(()=>{var l,m;const t=JSON.parse(sessionStorage.getItem("edited-task-"+i)||"{}");try{g(t.title),y(t.desc),T(((l=t==null?void 0:t.reward)==null?void 0:l.cost)||0),v(((m=t==null?void 0:t.reward)==null?void 0:m.currency)||"TON"),N(t.attachments||[]),F(t.location)}catch{console.log("Cant parse saved task")}},[i]),O=a.useCallback(()=>{if(e)return{...e,title:u,desc:h,reward:{cost:f,currency:j},attachments:p,location:n}},[e,u,h,f,j,p,n]),[x,D]=a.useState(C(t=>S(t,i))||!1),[o,A]=a.useState(x||!1),[le,P]=a.useState(!1),ae=t=>{t.preventDefault(),console.log("Edit mode handler"),A(!0),x&&P(!0),o&&!x&&A(!1)};a.useEffect(()=>{var t,l;x||(console.log("Update fields on stored task change"),g((e==null?void 0:e.title)||""),y((e==null?void 0:e.desc)||""),T(((t=e==null?void 0:e.reward)==null?void 0:t.cost)||0),v(((l=e==null?void 0:e.reward)==null?void 0:l.currency)||"TON"),N((e==null?void 0:e.attachments)||[]),F((e==null?void 0:e.location)||{available:!1}))},[e,x]),a.useEffect(()=>{x&&(console.log("Restore edited task"),te())},[]),a.useEffect(()=>{u.trim()!==(e==null?void 0:e.title)||h.trim()!==e.desc||f!==e.reward.cost||(j||"").trim()!==e.reward.currency||p!==e.attachments||n!==e.location?(console.log("Changes made"),D(!0)):(console.log("No changes"),D(!1))},[e,u,h,f,j,p,n]),a.useEffect(()=>{x?(console.log("Save edited task state"),sessionStorage.setItem("edited-task-"+i,JSON.stringify(O())),r(Ce(i))):(console.log("Remove edited task state"),sessionStorage.removeItem("edited-task-"+i),r(ye(i)))},[i,x,r,O]);const ne=t=>{t.preventDefault();const l=t.currentTarget.files;if(console.log(l),l&&(l==null?void 0:l.length)>0){const m=[];for(let R=0;R<l.length;R++)m.push(URL.createObjectURL(l[R]));const K=p||[];console.log([...K,...m]),N([...K,...m])}},ie=t=>{const l=[...p];l.splice(t,1),N(l)},[ce,Z]=a.useState(!1),[re,G]=a.useState(0),oe=t=>{console.log("Open image fullscreen. Index: "+t),Z(!0),G(t)},de=()=>{console.log("Close image fullscreen"),Z(!1),G(0)},ue=async t=>{t.preventDefault(),E(!0),setTimeout(()=>{console.log("Do something after 2 secs"),r(Fe(i)),E(!1),history.back()},2e3)},[M,E]=a.useState(!1),[Y,z]=a.useState(!1),me=async t=>{e&&(t.preventDefault(),console.log("Clicked accept"),E(!0),setTimeout(()=>{console.log("Do something after 2 secs"),r(Q({id:e.id,status:"active",user:{id:d.id,name:(d.firstName+" "+d.lastName||"").trim()}})),E(!1),history.back()},2e3))},ge=async t=>{e&&(t.preventDefault(),console.log("Clicked dismiss"),z(!0),await setTimeout(()=>{console.log("Do something after 5 secs"),r(Q({id:e.id,status:"open",user:{id:d.id,name:(d.firstName+" "+d.lastName||"").trim()}})),z(!1),history.back()},2e3))},he=()=>{const t=document.getElementsByTagName("input");for(let m=0;m<t.length;m++)t[m].blur();if(u.trim().length===0||h.trim().length===0||f===0||!n.available)return se(!0);const l=O();l&&(console.log("Save edited task to Redux"),r(Ie(l)),D(!1),A(!1))},fe=()=>{var t,l;D(!1),A(!1),g((e==null?void 0:e.title)||""),y((e==null?void 0:e.desc)||""),T(((t=e==null?void 0:e.reward)==null?void 0:t.cost)||0),v(((l=e==null?void 0:e.reward)==null?void 0:l.currency)||"TON"),N((e==null?void 0:e.attachments)||[]),F((e==null?void 0:e.location)||{available:!1})};return e?s.jsx(Pe.div,{initial:{opacity:0,y:200},animate:{opacity:1,y:0},exit:{opacity:0,y:200},children:s.jsxs("div",{className:"flex flex-col gap-1 h-full",children:[s.jsxs("div",{className:"p-2 flex align-middle items-center justify-between w-full",children:[s.jsx(Te,{children:"Task details"}),s.jsx(w,{mode:"plain",onClick:()=>history.back(),children:"Back"})]}),s.jsxs(Ae,{header:s.jsxs("div",{className:"flex justify-between align-middle p-2",children:[s.jsxs(Ee,{children:["Task N",i]}),I&&s.jsx(Me,{className:"w-8 h-8 self-end".concat(" ",le?"animate-jiggle text-red-400":""),onClick:ae,onAnimationEnd:()=>{P(!1)},children:s.jsx(He,{})})]}),children:[x&&s.jsx("div",{className:"bg-yellow-400 text-center rounded-lg mb-1",children:"You have uncommited changes!!!"}),s.jsxs(Ye,{className:"flex flex-col gap-2 h-full",children:[s.jsx(b,{title:"Title",editMode:o,children:s.jsxs(s.Fragment,{children:[o?s.jsx(U,{value:u,status:u.length===0?"error":"default",placeholder:"Title...",onChange:t=>{const l=t.currentTarget.value;g(l)}}):u,s.jsx(B,{className:"pl-8 text-red-400",hidden:u.length!==0,children:"This field cant be empty"})]})}),s.jsx(b,{title:"Description",editMode:o,children:s.jsxs(s.Fragment,{children:[o?s.jsx(U,{placeholder:"Description...",value:h,status:h.length===0?"error":"default",onChange:t=>y(t.currentTarget.value)}):h,s.jsx(B,{className:"pl-8 text-red-400",hidden:h.length!==0,children:"This field cant be empty"})]})}),s.jsx(b,{title:"Reward",editMode:o,children:s.jsx(s.Fragment,{children:o?s.jsxs("div",{className:"flex items-center justify-stretch h-fit",children:[s.jsxs("div",{className:"w-2/5 h-full flex flex-col justify-between",children:[s.jsx(U,{placeholder:"Cost...",inputMode:"numeric",type:"number",status:f===0?"error":"default",value:f||"",onChange:t=>{T(Number(t.currentTarget.value))}}),s.jsx(B,{className:"pl-8 text-red-400",hidden:!(f===0&&k),children:"This field cant be empty"})]}),s.jsx("div",{className:"w-3/5 flex flex-col h-full justify-between",children:s.jsxs(Be,{className:"h-12 items-center",children:[s.jsx(_,{onClick:()=>v("TON"),mode:j==="TON"?"bezeled":"plain",children:"TON"}),s.jsx(_,{onClick:()=>v("USDT"),mode:j==="USDT"?"bezeled":"plain",children:"USDT"})]})})]}):f+" "+j})}),p&&p.length>0&&s.jsx(b,{title:"Attachments",children:s.jsx("div",{className:"pl-6 pr-6 p-2 grid grid-flow-row grid-cols-3 gap-2",children:p.map((t,l)=>s.jsxs("div",{className:"relative",children:[s.jsx(Ze,{size:96,src:t,onClick:()=>oe(l)}),o&&s.jsx(Re,{className:"absolute right-0 -top-2 w-6 h-6 border border-gray-500 rounded-full bg-gray-400 bg-opacity-55",onClick:()=>ie(l)})]},l+t))})}),o&&s.jsx(Ge,{multiple:!0,label:"Attach a new file",accept:"image/*",onChange:ne}),s.jsx(b,{title:"Customer",children:L==null?void 0:L.name}),s.jsx("div",{children:s.jsx(b,{title:"Address",editMode:o,children:s.jsxs(s.Fragment,{children:[o?s.jsxs(s.Fragment,{children:[s.jsx(ee,{multiline:!0,children:($=n==null?void 0:n.address)==null?void 0:$.formattedAdress}),s.jsx(Ue,{status:!n.available&&k?"error":"default",geoposition:n||{available:!1},setGeoposition:t=>F(t)})]}):(V=n==null?void 0:n.address)==null?void 0:V.formattedAdress,s.jsx(B,{className:"pl-8 text-red-400",hidden:n.available,children:"Please enter correct address"})]})})}),s.jsx("div",{className:"pb-8",children:s.jsx(b,{title:"On map",children:s.jsx(ke,{available:n.available,type:"target",center:{latitude:Number((W=n.latLong)==null?void 0:W.latitude),longitude:Number((X=n.latLong)==null?void 0:X.longitude)}})})})]}),s.jsxs("div",{className:"sticky bottom-24 w-full flex justify-around p-4",children:[!I&&s.jsxs(s.Fragment,{children:[e.status==="open"&&s.jsx(w,{className:"bg-green-600 w-2/6",onClick:me,loading:M,children:"Accept"}),e.status==="active"&&s.jsx(w,{className:"bg-red-600 w-2/6",onClick:ge,loading:Y,children:"Decline"})]}),I&&!o&&s.jsxs(s.Fragment,{children:[e.status==="open"&&s.jsx(w,{className:"bg-red-600 w-1/2",onClick:ue,loading:M,children:"Delete task"}),e.status==="active"&&s.jsx(w,{className:"bg-red-600 w-1/2",disabled:!0,children:"You cant delete active task"})]}),I&&o&&s.jsxs(s.Fragment,{children:[s.jsx(w,{className:"bg-green-600 w-2/6",onClick:he,loading:M,children:"Confirm"}),s.jsx(w,{className:"bg-red-600 w-2/6",onClick:fe,loading:Y,children:"Cancel"})]})]}),s.jsx(Le,{open:ce,controller:{closeOnPullDown:!0,closeOnBackdropClick:!0,closeOnPullUp:!0},close:de,index:re,plugins:[Oe],slides:(q=e==null?void 0:e.attachments)==null?void 0:q.map(t=>({src:t}))})]})]})}):s.jsx(s.Fragment,{children:"Task not found"})};export{ls as TaskCard,ts as TaskMiniCard};

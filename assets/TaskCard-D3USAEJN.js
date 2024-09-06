import{r as l,j as s,C as v,e as T,f as xe,b as pe,P as ee,B as je,A as be,d as we,s as Ce,Q as Ne,U as ve,V as Te,T as ye,W as Fe,X as _,Y as Ie}from"./index-B9LBRVgm.js";import{c as De}from"./calcDistance-p9X9NEyQ.js";import{C as k,B as w,S as Ae,b as Ee,L as Be,I as U}from"./Input-jvhKZv9g.js";import{I as Le,a as S,L as Oe,Z as Me}from"./index-CrDYuA-9.js";import{I as Re,F as Ue,G as ke,M as Pe}from"./MapContainerYandex-D6VphdGW.js";import{I as Ze,F as ze}from"./FileInput-w_vpl6FS.js";import{A as Ge}from"./Avatar-DE8BVreQ.js";import"./VisuallyHidden-DAdq5KL1.js";function Je({title:i,titleId:r,...o},n){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":r},o),i?l.createElement("title",{id:r},i):null,l.createElement("path",{d:"M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"}))}const Ye=l.forwardRef(Je),b=({title:i,children:r,editMode:o=!1})=>{const[n,e]=l.useState(!1);return s.jsxs("div",{children:[s.jsx(v,{level:"2",weight:"2",className:"pl-6 text-[--tg-theme-hint-color]",children:i}),o?r:s.jsx(k,{multiline:n,onClick:()=>e(d=>!d),children:r})]})},_e=({task:i})=>{const r=T(xe),o=pe(),n=T(g=>ee(g,i.id)),[e,d]=l.useState();return l.useEffect(()=>{var g;d(De((g=i.location)==null?void 0:g.latLong,r.latLong))},[r,i]),s.jsx(s.Fragment,{children:s.jsx(k,{before:s.jsx(Ge,{children:"CS"}),id:i.id,className:"w-full select-none",multiline:!1,description:i.desc,after:s.jsx("span",{children:i.reward.cost+" "+i.reward.currency}),titleBadge:n?s.jsx(je,{className:"bg-yellow-600",mode:"critical",type:"number",children:"!"}):s.jsx(s.Fragment,{}),subhead:e+" km",onClick:()=>o("/tasks/task/"+i.id),children:i.title})})},Se=()=>{var H,Q,V,W,X,$,q;const i=be(),r=we(),o=T(Ce),n=i.taskId||"-1",e=T(t=>Ne(t,n)),[d,g]=l.useState((e==null?void 0:e.title)||""),[h,y]=l.useState((e==null?void 0:e.desc)||""),[f,F]=l.useState(((H=e==null?void 0:e.reward)==null?void 0:H.cost)||0),[j,C]=l.useState(((Q=e==null?void 0:e.reward)==null?void 0:Q.currency)||"TON"),[x,N]=l.useState((e==null?void 0:e.attachments)||[]),[c,I]=l.useState((e==null?void 0:e.location)||{available:!1}),L=l.useMemo(()=>e==null?void 0:e.customer,[e]),D=l.useMemo(()=>(e==null?void 0:e.customer.id)===o.id,[e,o]),[P,se]=l.useState(!1),te=l.useCallback(()=>{var a,m;const t=JSON.parse(sessionStorage.getItem("edited-task-"+n)||"{}");try{g(t.title),y(t.desc),F(((a=t==null?void 0:t.reward)==null?void 0:a.cost)||0),C(((m=t==null?void 0:t.reward)==null?void 0:m.currency)||"TON"),N(t.attachments||[]),I(t.location)}catch{console.log("Cant parse saved task")}},[n]),O=l.useCallback(()=>{if(e)return{...e,title:d,desc:h,reward:{cost:f,currency:j},attachments:x,location:c}},[e,d,h,f,j,x,c]),[p,A]=l.useState(T(t=>ee(t,n))),[u,E]=l.useState(p||!1),[le,Z]=l.useState(!1),ae=t=>{t.preventDefault(),console.log("Edit mode handler"),E(!0),p&&Z(!0),u&&!p&&E(!1)};l.useEffect(()=>{var t,a;p||(console.log("Update fields on stored task change"),g((e==null?void 0:e.title)||""),y((e==null?void 0:e.desc)||""),F(((t=e==null?void 0:e.reward)==null?void 0:t.cost)||0),C(((a=e==null?void 0:e.reward)==null?void 0:a.currency)||"TON"),N((e==null?void 0:e.attachments)||[]),I((e==null?void 0:e.location)||{available:!1}))},[e]),l.useEffect(()=>{p&&(console.log("Restore edited task"),te())},[]),l.useEffect(()=>{d.trim()!==(e==null?void 0:e.title)||h.trim()!==e.desc||f!==e.reward.cost||(j||"").trim()!==e.reward.currency||x!==e.attachments||c!==e.location?(console.log("Changes made"),A(!0)):(console.log("No changes"),A(!1))},[e,d,h,f,j,x,c]),l.useEffect(()=>{p?(console.log("Save edited task state"),sessionStorage.setItem("edited-task-"+n,JSON.stringify(O())),r(ve(n))):(console.log("Remove edited task state"),sessionStorage.removeItem("edited-task-"+n),r(Te(n)))},[n,p,r,O]);const ne=t=>{t.preventDefault();const a=t.currentTarget.files;if(console.log(a),a&&(a==null?void 0:a.length)>0){const m=[];for(let R=0;R<a.length;R++)m.push(URL.createObjectURL(a[R]));const K=x||[];console.log([...K,...m]),N([...K,...m])}},ce=t=>{const a=[...x];a.splice(t,1),N(a)},[ie,z]=l.useState(!1),[re,G]=l.useState(0),oe=t=>{console.log("Open image fullscreen. Index: "+t),z(!0),G(t)},de=()=>{console.log("Close image fullscreen"),z(!1),G(0)},ue=async t=>{t.preventDefault(),B(!0),setTimeout(()=>{console.log("Do something after 2 secs"),r(Fe(n)),B(!1),history.back()},2e3)},[M,B]=l.useState(!1),[J,Y]=l.useState(!1),me=async t=>{e&&(t.preventDefault(),console.log("Clicked accept"),B(!0),setTimeout(()=>{console.log("Do something after 2 secs"),r(_({id:e.id,status:"active",user:{id:o.id,name:(o.firstName+" "+o.lastName||"").trim()}})),B(!1),history.back()},2e3))},ge=async t=>{e&&(t.preventDefault(),console.log("Clicked dismiss"),Y(!0),await setTimeout(()=>{console.log("Do something after 5 secs"),r(_({id:e.id,status:"open",user:{id:o.id,name:(o.firstName+" "+o.lastName||"").trim()}})),Y(!1),history.back()},2e3))},he=()=>{const t=document.getElementsByTagName("input");for(let m=0;m<t.length;m++)t[m].blur();if(d.trim().length===0||h.trim().length===0||f===0||!c.available)return se(!0);const a=O();a&&(console.log("Save edited task to Redux"),r(Ie(a)),A(!1),E(!1))},fe=()=>{var t,a;A(!1),E(!1),g((e==null?void 0:e.title)||""),y((e==null?void 0:e.desc)||""),F(((t=e==null?void 0:e.reward)==null?void 0:t.cost)||0),C(((a=e==null?void 0:e.reward)==null?void 0:a.currency)||"TON"),N((e==null?void 0:e.attachments)||[]),I((e==null?void 0:e.location)||{available:!1})};return e?s.jsxs("div",{className:"flex flex-col gap-1 h-full",children:[s.jsxs("div",{className:"p-2 flex align-middle items-center justify-between w-full",children:[s.jsx(ye,{children:"Task details"}),s.jsx(w,{mode:"plain",onClick:()=>history.back(),children:"Back"})]}),s.jsxs(Ae,{header:s.jsxs("div",{className:"flex justify-between align-middle p-2",children:[s.jsxs(Ee,{children:["Task N",n]}),D&&s.jsx(Re,{className:"w-8 h-8 self-end".concat(" ",le?"animate-jiggle text-red-400":""),onClick:ae,onAnimationEnd:()=>{Z(!1)},children:s.jsx(Ye,{})})]}),children:[p&&s.jsx("div",{className:"bg-yellow-400 text-center rounded-lg mb-1",children:"You have uncommited changes!!!"}),s.jsxs(Be,{className:"flex flex-col gap-2 h-full",children:[s.jsx(b,{title:"Title",editMode:u,children:s.jsxs(s.Fragment,{children:[u?s.jsx(U,{value:d,status:d.length===0?"error":"default",placeholder:"Title...",onChange:t=>{const a=t.currentTarget.value;g(a)}}):d,s.jsx(v,{className:"pl-8 text-red-400",hidden:d.length!==0,children:"This field cant be empty"})]})}),s.jsx(b,{title:"Description",editMode:u,children:s.jsxs(s.Fragment,{children:[u?s.jsx(U,{placeholder:"Description...",value:h,status:h.length===0?"error":"default",onChange:t=>y(t.currentTarget.value)}):h,s.jsx(v,{className:"pl-8 text-red-400",hidden:h.length!==0,children:"This field cant be empty"})]})}),s.jsx(b,{title:"Reward",editMode:u,children:s.jsx(s.Fragment,{children:u?s.jsxs("div",{className:"flex items-center justify-stretch h-fit",children:[s.jsxs("div",{className:"w-2/5 h-full flex flex-col justify-between",children:[s.jsx(U,{placeholder:"Cost...",inputMode:"numeric",type:"number",status:f===0?"error":"default",value:f||"",onChange:t=>{F(Number(t.currentTarget.value))}}),s.jsx(v,{className:"pl-8 text-red-400",hidden:!(f===0&&P),children:"This field cant be empty"})]}),s.jsx("div",{className:"w-3/5 flex flex-col h-full justify-between",children:s.jsxs(Le,{className:"h-12 items-center",children:[s.jsx(S,{onClick:()=>C("TON"),mode:j==="TON"?"bezeled":"plain",children:"TON"}),s.jsx(S,{onClick:()=>C("USDT"),mode:j==="USDT"?"bezeled":"plain",children:"USDT"})]})})]}):f+" "+j})}),x&&x.length>0&&s.jsx(b,{title:"Attachments",children:s.jsx("div",{className:"pl-6 pr-6 p-2 grid grid-flow-row grid-cols-3 gap-2",children:x.map((t,a)=>s.jsxs("div",{className:"relative",children:[s.jsx(Ze,{size:96,src:t,onClick:()=>oe(a)}),u&&s.jsx(Ue,{className:"absolute right-0 -top-2 w-6 h-6 border border-gray-500 rounded-full bg-gray-400 bg-opacity-55",onClick:()=>ce(a)})]},a+t))})}),u&&s.jsx(ze,{multiple:!0,label:"Attach a new file",accept:"image/*",onChange:ne}),s.jsx(b,{title:"Customer",children:L==null?void 0:L.name}),s.jsx("div",{children:s.jsx(b,{title:"Address",editMode:u,children:s.jsxs(s.Fragment,{children:[u?s.jsxs(s.Fragment,{children:[s.jsx(k,{multiline:!0,children:(V=c==null?void 0:c.address)==null?void 0:V.formattedAdress}),s.jsx(ke,{status:!c.available&&P?"error":"default",geoposition:c||{available:!1},setGeoposition:t=>I(t)})]}):(W=c==null?void 0:c.address)==null?void 0:W.formattedAdress,s.jsx(v,{className:"pl-8 text-red-400",hidden:c.available,children:"Please enter correct address"})]})})}),s.jsx("div",{className:"pb-8",children:s.jsx(b,{title:"On map",children:s.jsx(Pe,{available:c.available,type:"target",center:{latitude:Number((X=c.latLong)==null?void 0:X.latitude),longitude:Number(($=c.latLong)==null?void 0:$.longitude)}})})})]}),s.jsxs("div",{className:" w-full flex justify-around p-4 ",children:[!D&&s.jsxs(s.Fragment,{children:[e.status==="open"&&s.jsx(w,{className:"bg-green-600 w-2/6",onClick:me,loading:M,children:"Accept"}),e.status==="active"&&s.jsx(w,{className:"bg-red-600 w-2/6",onClick:ge,loading:J,children:"Decline"})]}),D&&!u&&s.jsx(s.Fragment,{children:e.status==="open"&&s.jsx(w,{className:"bg-red-600 w-1/2",onClick:ue,loading:M,children:"Delete task"})}),D&&u&&s.jsxs(s.Fragment,{children:[s.jsx(w,{className:"bg-green-600 w-2/6",onClick:he,loading:M,children:"Confirm"}),s.jsx(w,{className:"bg-red-600 w-2/6",onClick:fe,loading:J,children:"Cancel"})]})]}),s.jsx(Oe,{open:ie,controller:{closeOnPullDown:!0,closeOnBackdropClick:!0,closeOnPullUp:!0},close:de,index:re,plugins:[Me],slides:(q=e==null?void 0:e.attachments)==null?void 0:q.map(t=>({src:t}))})]})]}):s.jsx(s.Fragment,{children:"Task not found"})};export{Se as TaskCard,_e as TaskMiniCard};

import{r as i,j as e,C as j,G as he,b as ge,c as p,s as fe,Y as k,Z as xe,$ as pe,a0 as H,T as je,N as ve,d as we,u as be,B as Ne,I as q,a1 as ye,a2 as K,a3 as Ce}from"./index-CMxYK3Y4.js";import{c as ke}from"./calcDistance-UWrR0_E3.js";import{C as T,B as g,L as Q,S as Te,b as Ie}from"./Section-CwY1dcB3.js";import{I as Se,a as V,L as De,Z as Fe}from"./index-DD1-hFYb.js";import{I as Ae,G as Ee,M as Be}from"./MapContainerYandex-DFaemAag.js";import{I as Le,F as Oe}from"./FileInput-IuSZlHtd.js";import{I as C}from"./Input-BPvpFAEv.js";import{A as Me}from"./Avatar-tSefHeAL.js";import"./VisuallyHidden-CBzVaySu.js";function Re({title:c,titleId:r,...o},d){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:d,"aria-labelledby":r},o),c?i.createElement("title",{id:r},c):null,i.createElement("path",{d:"M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"}))}const Ue=i.forwardRef(Re),f=({type:c,title:r,children:o,editMode:d=!1})=>{const[u,h]=i.useState(!1);return e.jsxs("div",{children:[e.jsx(j,{level:"2",weight:"2",className:"pl-6 text-[--tg-theme-hint-color]",children:r}),d?o:e.jsx(T,{multiline:u,onClick:()=>{c==="text"&&h(n=>!n)},children:o})]})},Ke=({task:c})=>{const r=p(we),o=be(),d=p(n=>k(n,c.id)),[u,h]=i.useState();return i.useEffect(()=>{var n;h(ke((n=c.location)==null?void 0:n.latLong,r.latLong))},[r,c]),e.jsx(e.Fragment,{children:e.jsx(T,{before:e.jsx(Me,{children:"CS"}),id:c.id,className:"w-full select-none",multiline:!1,description:c.desc,after:e.jsx("span",{children:c.reward.cost+" "+c.reward.currency}),titleBadge:d?e.jsx(Ne,{className:"bg-yellow-600",mode:"critical",type:"number",children:"!"}):e.jsx(e.Fragment,{}),subhead:u+" km",onClick:()=>o("/tasks/task/"+c.id),children:c.title})})},Qe=()=>{var B,L,O,M,R,U,J,P,Z,G,Y,z,$;const c=he(),r=ge(),o=p(fe),d=c.taskId||"-1",[u,h]=i.useState(p(s=>k(s,d))||!1),[n,v]=i.useState(p(s=>k(s,d))||!1),a=p(s=>xe(s,d)),W=JSON.parse(sessionStorage.getItem("edited-task-"+d)||"{}"),[t,m]=i.useState(u?W:a),w=i.useMemo(()=>(a==null?void 0:a.customer.id)===o.id,[a,o]),[I,X]=i.useState(!1);i.useEffect(()=>{r(u?pe(d):H(d))},[u,d,r]),i.useEffect(()=>{t&&(JSON.stringify(a)!==JSON.stringify(t)?(sessionStorage.setItem("edited-task-"+t.id,JSON.stringify(t)),h(!0)):(h(!1),sessionStorage.removeItem("edited-task-"+t.id)))},[t,a]),i.useEffect(()=>{u||(console.log("Sync task"),m(a))},[a,u]);const[_,S]=i.useState(!1),ee=s=>{s.preventDefault(),console.log("Edit mode handler"),v(!0),u&&(q.isSupported()&&q.notificationOccurred("warning"),S(!0)),n&&!u&&v(!1)},te=s=>{if(t){s.preventDefault();const l=s.currentTarget.files;if(console.log(l),l&&(l==null?void 0:l.length)>0){const x=[];for(let y=0;y<l.length;y++)x.push(URL.createObjectURL(l[y]));const me=t.attachments||[];m({...t,attachments:[...me,...x]})}}},se=s=>{if(t){const l=[...t.attachments||[]];console.log(l),l.splice(s,1),console.log(l),m({...t,attachments:l})}},[ae,D]=i.useState(!1),[le,F]=i.useState(0),ne=s=>{console.log("Open image fullscreen. Index: "+s),D(!0),F(s)},ie=()=>{console.log("Close image fullscreen"),D(!1),F(0)},ce=async s=>{s.preventDefault(),b(!0),setTimeout(()=>{console.log("Do something after 2 secs"),r(ye(d)),b(!1),history.back()},2e3)},[N,b]=i.useState(!1),[A,E]=i.useState(!1),re=async s=>{a&&(s.preventDefault(),console.log("Clicked accept"),b(!0),setTimeout(()=>{console.log("Do something after 2 secs"),r(K({id:a.id,status:"active",user:{id:o.id,name:(o.firstName+" "+o.lastName||"").trim()}})),b(!1),history.back()},2e3))},oe=async s=>{a&&(s.preventDefault(),console.log("Clicked dismiss"),E(!0),await setTimeout(()=>{console.log("Do something after 5 secs"),r(K({id:a.id,status:"open",user:{id:o.id,name:(o.firstName+" "+o.lastName||"").trim()}})),E(!1),history.back()},2e3))},de=()=>{var l;const s=document.getElementsByTagName("input");for(let x=0;x<s.length;x++)s[x].blur();if(t){if(t.title.trim().length===0||t.desc.trim().length===0||t.reward.cost===0||!((l=t.location)!=null&&l.available))return X(!0);console.log("Save edited task to Redux"),r(Ce(t)),r(H(t.id)),h(!1),v(!1)}},ue=()=>{console.log("Changes canceled"),m(a),v(!1),h(!1)};return!a||!t?e.jsx(e.Fragment,{children:"Task not found"}):e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col gap-1 h-full",children:[u&&e.jsx("div",{className:"bg-yellow-400 text-center rounded-lg mb-1",children:"You have uncommited changes!!!"}),e.jsxs("div",{className:"p-2 flex align-middle items-center justify-between w-full",children:[e.jsx(je,{children:"Task details"}),e.jsx(g,{mode:"plain",onClick:()=>history.back(),children:"Back"})]}),e.jsx(Q,{children:e.jsx(Te,{header:e.jsxs("div",{className:"flex justify-between align-middle p-2",children:[e.jsxs(Ie,{children:["Task N",d]}),w&&e.jsx(Ae,{className:"w-8 h-8 self-end".concat(" ",_?"animate-jiggle text-red-400":""),onClick:ee,onAnimationEnd:()=>{S(!1)},children:e.jsx(Ue,{})})]}),children:e.jsxs(Q,{className:"flex flex-col gap-2 h-full",children:[e.jsx(f,{title:"Title",editMode:n,type:"text",children:e.jsxs(e.Fragment,{children:[n?e.jsx(C,{value:t.title,status:t.title.length===0?"error":void 0,placeholder:"Title...",onChange:s=>{const l=s.currentTarget.value;m({...t,title:l})}}):t.title,e.jsx(j,{className:"pl-8 text-red-400",hidden:t.title.length!==0,children:"This field cant be empty"})]})}),e.jsx(f,{title:"Description",editMode:n,type:"text",children:e.jsxs(e.Fragment,{children:[n?e.jsx(C,{placeholder:"Description...",value:t.desc,status:t.desc.length===0?"error":void 0,onChange:s=>m({...t,desc:s.currentTarget.value})}):t.desc,e.jsx(j,{className:"pl-8 text-red-400",hidden:t.desc.length!==0,children:"This field cant be empty"})]})}),e.jsx(f,{title:"Reward",editMode:n,type:"text",children:e.jsx(e.Fragment,{children:n?e.jsxs("div",{className:"flex items-center justify-stretch h-fit",children:[e.jsxs("div",{className:"w-2/5 h-full flex flex-col justify-between",children:[e.jsx(C,{placeholder:"Cost...",inputMode:"numeric",type:"number",status:t.reward.cost===0?"error":void 0,value:t.reward.cost||"",onChange:s=>{m({...t,reward:{...t.reward,cost:Number(s.currentTarget.value)}})}}),e.jsx(j,{className:"pl-8 text-red-400",hidden:!(t.reward.cost===0&&I),children:"This field cant be empty"})]}),e.jsx("div",{className:"w-3/5 flex flex-col h-full justify-between",children:e.jsxs(Se,{className:"h-12 items-center",children:[e.jsx(V,{onClick:()=>m({...t,reward:{...t.reward,currency:"TON"}}),mode:t.reward.currency==="TON"?"bezeled":"plain",children:"TON"}),e.jsx(V,{onClick:()=>m({...t,reward:{...t.reward,currency:"USDT"}}),mode:t.reward.currency==="USDT"?"bezeled":"plain",children:"USDT"})]})})]}):t.reward.cost+" "+t.reward.currency})}),t.attachments&&t.attachments.length>0&&e.jsx(f,{title:"Attachments",type:"other",children:e.jsx("div",{className:"pl-6 pr-6 p-2 grid grid-flow-row grid-cols-3 gap-2",children:t.attachments.map((s,l)=>e.jsxs("div",{className:"relative",children:[e.jsx(Le,{size:96,src:s,onClick:()=>ne(l)}),n&&e.jsx(ve,{className:"absolute right-0 -top-2 w-6 h-6 border border-gray-500 rounded-full bg-gray-400 bg-opacity-55",onClick:()=>se(l)})]},l+s))})}),n&&e.jsx(Oe,{multiple:!0,label:"Attach a new file",accept:"image/*",onChange:te}),e.jsx(f,{title:"Customer",type:"text",children:(B=t.customer)==null?void 0:B.name}),e.jsx("div",{children:e.jsx(f,{title:"Address",editMode:n,type:"other",children:e.jsxs(e.Fragment,{children:[n?e.jsxs(e.Fragment,{children:[e.jsx(T,{multiline:!0,children:(O=(L=t.location)==null?void 0:L.address)==null?void 0:O.formattedAdress}),e.jsx(Ee,{status:!((M=t.location)!=null&&M.available)&&I?"error":void 0,geoposition:t.location||{available:!1},setGeoposition:s=>m({...t,location:s})})]}):(U=(R=t.location)==null?void 0:R.address)==null?void 0:U.formattedAdress,e.jsx(j,{className:"pl-8 text-red-400",hidden:(J=t.location)==null?void 0:J.available,children:"Please enter correct address"})]})})}),e.jsx("div",{className:"pb-8",children:e.jsx(f,{title:"On map",type:"other",children:e.jsx(Be,{available:((P=t.location)==null?void 0:P.available)||!1,type:"target",center:{latitude:Number((G=(Z=t.location)==null?void 0:Z.latLong)==null?void 0:G.latitude),longitude:Number((z=(Y=t.location)==null?void 0:Y.latLong)==null?void 0:z.longitude)}})})})]})})}),e.jsxs("div",{className:"sticky bottom-24 pl-4 pr-4",children:[!w&&e.jsxs("div",{className:"flex flex-row justify-center items-center",children:[a.status==="open"&&e.jsx(g,{className:"bg-green-600 w-2/6",onClick:re,loading:N,children:"Accept"}),a.status==="active"&&e.jsx(g,{className:"bg-red-600 w-2/6",onClick:oe,loading:A,children:"Decline"})]}),w&&!n&&e.jsxs("div",{className:"flex flex-row justify-center items-center",children:[a.status==="open"&&e.jsx(g,{className:"bg-red-600 w-1/2",onClick:ce,loading:N,children:"Delete task"}),a.status==="active"&&e.jsx(g,{className:"bg-red-600 w-1/2",disabled:!0,children:"You cant delete active task"})]}),w&&n&&e.jsxs("div",{className:"flex flex-row justify-center items-center",children:[e.jsx(g,{className:"bg-green-600 w-2/6",onClick:de,loading:N,children:"Confirm"}),e.jsx(g,{className:"bg-red-600 w-2/6",onClick:ue,loading:A,children:"Cancel"})]})]})]}),e.jsx(De,{open:ae,controller:{closeOnPullDown:!0,closeOnBackdropClick:!0,closeOnPullUp:!0},close:ie,index:le,plugins:[Fe],slides:($=a==null?void 0:a.attachments)==null?void 0:$.map(s=>({src:s}))})]})};export{Qe as TaskCard,Ke as TaskMiniCard};

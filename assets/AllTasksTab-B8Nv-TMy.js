const __vite__fileDeps=["./TasksAccordeon-C1TxWVoM.js","./index-D-Qj-lJl.js","./index-QYmOunxA.css","./Input-BoOqM8We.js","./Section-Cn6Qtz-2.js","./TaskCard-B5-fpC64.js","./calcDistance-p9X9NEyQ.js","./Field-Db3tc4La.js","./index-CfGEDxuv.js","./MapContainerYandex-9HFYAOwQ.js","./proxy-b1n8KS0v.js","./FileInput-si5C4wIM.js","./VisuallyHidden-Bg2OKteN.js","./Avatar-BGt5ar8q.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{j as r,m as F,n as k,_ as V,q,p as O,x as se,y as Ne,r as l,z as Pe,A as Re,D as Te,w as pe,R as Me,F as Ae,G as ye,b as Le,e as te,s as Xe,H as De,f as _e,T as ke}from"./index-D-Qj-lJl.js";import{G as Ye,S as Ie,a as he}from"./GeolocationRequest-B_KGHNmg.js";import{c as _}from"./calcDistance-p9X9NEyQ.js";import{TasksMap as Ve}from"./TasksMap-BXv97S0I.js";import{_ as Be,a as Fe,S as He}from"./Section-Cn6Qtz-2.js";import{F as Ze}from"./Input-BoOqM8We.js";import{V as Oe}from"./VisuallyHidden-Bg2OKteN.js";import{I as me}from"./MapContainerYandex-9HFYAOwQ.js";const Y=(e,n,t)=>Math.max(n,Math.min(e,t)),We=e=>{var n=Be({},Fe(e));return r.jsx("svg",F(k({width:"20",height:"20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),{children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.29289 6.29289c.39053-.39052 1.02369-.39052 1.41422 0L10 11.5858l5.2929-5.29291c.3905-.39052 1.0237-.39052 1.4142 0 .3905.39053.3905 1.02369 0 1.41422l-6 5.99999c-.3905.3905-1.02368.3905-1.41421 0l-6-5.99999c-.39052-.39053-.39052-1.02369 0-1.41422Z",fill:"currentColor"})}))},$e=e=>{var{header:n,before:t,status:s,className:c}=e,u=V(e,["header","before","status","className"]);const d=q(),v=d==="ios"?se:Ne;return r.jsxs(Ze,{header:n,before:t,status:s,className:O("tgui-919c5658483cae11",d==="ios"&&"tgui-5edcb8465ee11055",c),children:[r.jsx(v,k({Component:"select",className:"tgui-a0742fd4c73756f7",multiple:!1},u)),r.jsx(We,{"aria-hidden":!0,className:"tgui-025a45d791e466f6"})]})};function B(e,n,t){const s=l.useRef(n);Pe(()=>{s.current=n},[n]);const c=l.useCallback(h=>s.current&&s.current(h),[]),u=l.useRef(()=>{}),d=l.useCallback(()=>{u.current(),u.current=()=>{}},[]),v=l.useCallback(h=>{if(!Re||(d(),!h))return;const b=k({},t);h.addEventListener(e,c,b),u.current=()=>h.removeEventListener(e,c,b)},[t,c,e,d]);return l.useEffect(()=>d,[d]),l.useMemo(()=>({add:v,remove:d}),[v,d])}const Ge=(e,n)=>({startX:e,startY:n,startT:new Date,duration:0,isPressed:!0,isY:!1,isX:!1,isSlideX:!1,isSlideY:!1,isSlide:!1,clientX:0,clientY:0,shiftX:0,shiftY:0,shiftXAbs:0,shiftYAbs:0}),ve=e=>e.clientX!=null?e.clientX:e.changedTouches&&e.changedTouches[0].clientX,xe=e=>e.clientY!=null?e.clientY:e.changedTouches&&e.changedTouches[0].clientY,re=()=>Re&&"ontouchstart"in window,ze=()=>re()?["touchstart","touchmove","touchend","touchcancel"]:["mousedown","mousemove","mouseup","mouseleave"],Ue=e=>{var{Component:n="div",onStart:t,onStartX:s,onStartY:c,onMove:u,onMoveX:d,onMoveY:v,onLeave:h,onEnter:b,onEnd:j,onEndX:R,onEndY:T,onClickCapture:S,usePointerHover:N,slideThreshold:g=5,useCapture:x=!1,noSlideClick:w=!1,stopPropagation:E=!1}=e,A=V(e,["Component","onStart","onStartX","onStartY","onMove","onMoveX","onMoveY","onLeave","onEnter","onEnd","onEndX","onEndY","onClickCapture","usePointerHover","slideThreshold","useCapture","noSlideClick","stopPropagation"]);const i=l.useMemo(ze,[]),f=l.useRef(!1),m=l.useRef(null),I=(a,p)=>{E&&a.stopPropagation(),p.forEach(M=>{var P,L,X;const D=Date.now()-((X=(L=m.current)===null||L===void 0||(P=L.startT)===null||P===void 0?void 0:P.getTime())!==null&&X!==void 0?X:0);M&&M(F(k({},m.current),{duration:D,originalEvent:a}))})},H={capture:x,passive:!1},W=[B(i[1],ae,H),B(i[2],o,H),B(i[3],o,H)],J=a=>{a&&W.forEach(p=>p.add(a))},K=()=>{W.forEach(a=>a.remove())},$=B(N?"pointerenter":"mouseenter",b),Z=B(N?"pointerleave":"mouseleave",h),Q=B(i[0],a=>{m.current=Ge(ve(a),xe(a)),I(a,[t,s,c]),J(re()?a.target:window.document)},{capture:x,passive:!1}),G=l.useRef();Pe(()=>{const a=G.current;a&&($.add(a),Z.add(a),Q.add(a))},[n]);function ae(a){var p;const{isPressed:M,isX:P,isY:L,startX:X=0,startY:D=0}=(p=m.current)!==null&&p!==void 0?p:{};if(M){var ee;const oe=ve(a),le=xe(a),ie=oe-X,ce=le-D,z=Math.abs(ie),U=Math.abs(ce);if(a.touches&&a.touches.length>1){o(a);return}if(!P&&!L){const ue=z>=g&&z>U,de=U>=g&&U>z,fe=ue&&(!!d||!!u),ge=de&&(!!v||!!u);m.current&&Object.assign(m.current,{isY:de,isX:ue,isSlideX:fe,isSlideY:ge,isSlide:fe||ge})}!((ee=m.current)===null||ee===void 0)&&ee.isSlide&&(Object.assign(m.current,{clientX:oe,clientY:le,shiftX:ie,shiftY:ce,shiftXAbs:z,shiftYAbs:U}),I(a,[u,m.current.isSlideX&&d,m.current.isSlideY&&v]))}}function o(a){var p;const{isPressed:M,isSlide:P,isSlideX:L,isSlideY:X}=(p=m.current)!==null&&p!==void 0?p:{};M&&I(a,[j,X&&T,L&&R]);const D=re();D&&P?f.current=!1:f.current=!!P,m.current={},D&&h&&h(a),K()}const C=a=>{const p=a.target;(p.tagName==="A"||p.tagName==="IMG")&&a.preventDefault()},y=a=>{if(!f.current){S&&S(a);return}w?(a.stopPropagation(),a.preventDefault()):S&&S(a),f.current=!1};return r.jsx(n,F(k({},A),{onDragStart:C,onClickCapture:y,ref:G}))},qe=({steps:e})=>{const n=q();return r.jsx(r.Fragment,{children:e.map(({isPassed:t,XCoordinate:s})=>r.jsx("div",{className:O("tgui-b632646f586ff14d",{"tgui-7951a89b824476b3":n==="ios","tgui-2b0a006b5a9ffd68":t}),style:{left:`${s}%`}},s))})},be=l.forwardRef((e,n)=>{var{className:t,inputProps:s,withTooltip:c}=e,u=V(e,["className","inputProps","withTooltip"]);const d=q();return r.jsx("span",F(k({className:O("tgui-83b7253102c6addc",d==="ios"&&"tgui-96f5864d281f94a8",t)},u),{children:r.jsx(Oe,F(k({},s),{Component:"input",type:"range",ref:n,className:O("tgui-abdeb837bfc726cb",t),"aria-orientation":"horizontal"}))}))}),Je=e=>{const{"aria-label":n,"aria-valuetext":t,"aria-labelledby":s}=e,c=V(e,["aria-label","aria-valuetext","aria-labelledby"]);return k({aria:{ariaLabel:n,ariaValueText:t,ariaLabelledBy:s}},c)},Se=e=>e&&["start","end"].includes(e.dataset.type||"")?e.dataset.type:null,Ke=e=>{if(Math.abs(e)<1){const t=e.toExponential().split("e-"),s=t[0].split(".")[1];return(s?s.length:0)+parseInt(t[1],10)}const n=e.toString().split(".")[1];return n?n.length:0},Qe=(e,n,t)=>{const s=Math.round((e-t)/n)*n+t;return Number(s.toFixed(Ke(n)))},et=(e,n,t,s)=>{if(s==null||s<=0)return Y(e,n,t);const c=Qe(e,s,n);return Y(c,n,t)},tt=(e,n,t,s={})=>{const c=(e-n[0])/(n[1]-n[0])*(t[1]-t[0])+t[0];return et(c,t[0],t[1],s.step)},ne=(e,n,t)=>(e-n)/(t-n)*100,we=(e,n,t,s,c)=>tt(e,[0,n],[t,s],{step:c}),je=(e,n,t,s,c)=>{const[u,d]=e;if(d===null)return[Y(n,t,s),null];switch(c){case"start":return n>d?[d,d]:[Y(n,t,s),d];case"end":return n<u?[u,u]:[u,Y(n,t,s)];case null:default:return e}},nt=(e,n,t)=>{const[s,c]=e;switch(t){case"start":return[n,c];case"end":return[s,n];case null:default:return e}},st=e=>e[1]!==null,Ee=.1,rt=(e,n,t)=>{if(t==="start"||t==="end")return t;const[s,c]=e,u=c!==null?s-Ee:s,d=c!==null?c+Ee:0;return Math.abs(u-n)<=Math.abs(d-n)?"start":"end"},at=e=>{var{step:n=1,min:t=0,max:s=100,value:c,multiple:u,defaultValue:d=u?[t,s]:t,disabled:v,getAriaLabel:h,getAriaValueText:b,onChange:j}=e,R=V(e,["step","min","max","value","multiple","defaultValue","disabled","getAriaLabel","getAriaValueText","onChange"]);const T=c!==void 0,[S,N]=l.useState(d),g=l.useMemo(()=>{const o=T?c:S;return Array.isArray(o)?[Y(o[0],t,s),Y(o[1],t,s)]:[Y(o,t,s),null]},[T,c,S,t,s]),[x,w]=g,E=u&&w!==null,A=l.useRef({dragging:null,startX:0,containerWidth:0}).current,i=l.useRef(null),f=l.useRef(null),m=l.useRef(null),I=(o,C)=>{v||Te(o[0],o[1])||(u?st(o)&&(!T&&N(o),j&&j(o,C)):(!T&&N(o[0]),j&&j(o[0],C)))},H=o=>{if(!i.current)return;const{left:C,width:y}=i.current.getBoundingClientRect();if(!(o.originalEvent.target instanceof HTMLElement))return;const a=Se(o.originalEvent.target),p=o.startX-C,M=we(p,y,t,s,n),P=rt(g,M,a);A.dragging=P,A.containerWidth=y,A.startX=p;const L=je(g,M,t,s,P),[X,D]=L;f.current&&(a==="start"||X!==x&&D===w)?(f.current.focus(),o.originalEvent.preventDefault()):m.current&&(a==="end"||D!==w&&X===x)&&(m.current.focus(),o.originalEvent.preventDefault()),I(L,o),o.originalEvent.stopPropagation()},W=o=>{const{startX:C,containerWidth:y,dragging:a}=A,{shiftX:p=0}=o,M=C+p,P=we(M,y,t,s,n);I(je(g,P,t,s,a),o),o.originalEvent.stopPropagation(),o.originalEvent.preventDefault()},J=o=>{A.dragging=null,o.originalEvent.stopPropagation()},K=o=>{I(nt(g,Number(o.target.value),Se(o.target)),o)},$=Je(R),{aria:Z}=$,Q=V($,["aria"]),G=o=>{const C=o?1:0;return{"data-type":o?"end":"start",step:n,min:t,value:o&&E?w:x,max:!o&&E?w:s,disabled:v,"aria-label":h?h(C):Z.ariaLabel,"aria-valuetext":b?b(x,C):Z.ariaValueText,"aria-labelledby":Z.ariaLabelledBy,onChange:K}};return{steps:(()=>{if(n===1)return;const o=[],C=Math.floor((s-t)/n);for(let y=0;y<=C;y+=1){const a=t+y*n,p=E?a>=x&&a<=w:a<=x;o.push({isPassed:p,XCoordinate:ne(a,t,s)})}return o})(),multiple:E,containerProps:Q,startValueInPercent:ne(x,t,s),endReversedValueInPercent:E?ne(w,t,s):0,thumbsContainerRef:i,thumbStartInputRef:f,thumbEndInputRef:m,handlePointerStart:H,handlePointerMove:W,handlePointerEnd:J,getInputProps:G}},ot=e=>{var{className:n,disabled:t,before:s,after:c}=e,u=V(e,["className","disabled","before","after"]);const d=q(),{steps:v,multiple:h,containerProps:b,startValueInPercent:j,endReversedValueInPercent:R,thumbsContainerRef:T,thumbStartInputRef:S,thumbEndInputRef:N,handlePointerStart:g,handlePointerMove:x,handlePointerEnd:w,getInputProps:E}=at(u);return r.jsxs("div",{className:O("tgui-717c3649db8d5af2",d==="ios"&&"tgui-d2e2a2e28ef0f746",t&&"tgui-c591a831de13ba23",n),children:[pe(s)&&r.jsx("div",{className:"tgui-6598607160233201",children:s}),r.jsxs(Ue,F(k({},b),{className:"tgui-35faba867393ce37",onStart:t?void 0:g,onMove:t?void 0:x,onEnd:t?void 0:w,children:[r.jsx("div",{className:"tgui-e11a455378c63b15",children:v!==void 0&&r.jsx(qe,{steps:v})}),r.jsx("div",{className:"tgui-4de4feff2dcc975c",style:h?{left:`${j}%`,right:`${100-R}%`}:{width:`${j}%`}}),r.jsxs("div",{ref:T,className:"tgui-7fe9f0fbc9771947",children:[r.jsx(be,{"data-type":"start",ref:S,style:{left:`${j}%`,zIndex:h&&j>=50?3:void 0},inputProps:E(!1)}),h&&r.jsx(be,{"data-type":"end",ref:N,style:{left:`${R}%`},inputProps:E(!0)})]})]})),pe(c)&&r.jsx("div",{className:"tgui-a56564bcfd4b56e5",children:c})]})};function lt({title:e,titleId:n,...t},s){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":n},t),e?l.createElement("title",{id:n},e):null,l.createElement("path",{fillRule:"evenodd",d:"M2.25 4.5A.75.75 0 0 1 3 3.75h14.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4.5A.75.75 0 0 1 3 8.25h9.75a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm15-.75A.75.75 0 0 1 18 9v10.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V9a.75.75 0 0 1 .75-.75Zm-15 5.25a.75.75 0 0 1 .75-.75h9.75a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"}))}const it=l.forwardRef(lt);function ct({title:e,titleId:n,...t},s){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":n},t),e?l.createElement("title",{id:n},e):null,l.createElement("path",{fillRule:"evenodd",d:"M2.25 4.5A.75.75 0 0 1 3 3.75h14.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm14.47 3.97a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 1 1-1.06 1.06L18 10.81V21a.75.75 0 0 1-1.5 0V10.81l-2.47 2.47a.75.75 0 1 1-1.06-1.06l3.75-3.75ZM2.25 9A.75.75 0 0 1 3 8.25h9.75a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm0 4.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"}))}const ut=l.forwardRef(ct),Ce=Me.lazy(()=>Ae(()=>import("./TasksAccordeon-C1TxWVoM.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url).then(({TasksAccordeon:e})=>({default:e}))),bt=()=>{const e=ye(),n=Le(),[t,s]=l.useState(e.mode||"list"),c=i=>{console.log("Changing mode"),s(i)};l.useEffect(()=>{n("tasks/all/"+t)},[n,t]);const[u,d]=l.useState(1),[v,h]=l.useState(1e3);l.useEffect(()=>{u<10?h(u*1e3):h(1/0)},[u]);const[b,j]=l.useState("default"),[R,T]=l.useState("desc"),S=te(Xe),N=te(De),g=te(_e),x=l.useMemo(()=>N.filter(i=>{var f,m;return((f=i.acceptedBy)==null?void 0:f.id)!==S.id&&i.status==="open"&&((m=i.customer)==null?void 0:m.id)!==S.id&&_(g.latLong,i.location.latLong)*1e3<=v}).sort((i,f)=>b==="default"?R==="asc"?(console.log("Default sorting ascending"),i.id<f.id?-1:i.id>f.id?1:0):(console.log("Default sorting descending"),i.id<f.id?1:i.id>f.id?-1:0):b==="distance"?R==="asc"?(console.log("Distance sorting ascending"),_(i.location.latLong,g.latLong)<_(f.location.latLong,g.latLong)?-1:_(i.location.latLong,g.latLong)>_(f.location.latLong,g.latLong)?1:0):(console.log("Distance sorting descending"),_(i.location.latLong,g.latLong)<_(f.location.latLong,g.latLong)?1:_(i.location.latLong,g.latLong)>_(f.location.latLong,g.latLong)?-1:0):b==="reward"?R==="asc"?(console.log("Reward sorting ascending"),console.log(i.reward.cost+" < "+f.reward),i.reward.cost<f.reward.cost?-1:i.reward.cost>f.reward.cost?1:0):(console.log("Reward sorting descending"),i.reward.cost<f.reward.cost?1:i.reward.cost>f.reward.cost?-1:0):0),[N,S,g,v,R,b]),w=l.useMemo(()=>N.filter(i=>{var f;return((f=i.acceptedBy)==null?void 0:f.id)===S.id&&i.status==="active"}),[N,S]),[E,A]=l.useState(!0);return l.useEffect(()=>{console.log("Force redo accordeon"),A(!1),setTimeout(()=>{A(!0)},50)},[x,w]),g.available?r.jsxs("div",{className:"md:container md:mx-auto",children:[r.jsxs("div",{className:"p-2 flex align-middle items-center justify-between w-full",children:[r.jsx(ke,{children:"Tasks around you"}),r.jsxs(Ie,{className:"w-40 h-10 self-end z-[0]",children:[r.jsx(he,{className:"w-4 h-8 align-middle p-1",selected:t==="list",onClick:()=>{c("list")},children:"List"}),r.jsx(he,{selected:t==="map",className:"w-4 h-8 align-middle p-1",onClick:()=>{c("map")},children:"Map"})]})]}),r.jsxs(He,{className:"h-full",children:[t==="list"&&r.jsxs("div",{className:"pl-4 pr-4 flex justify-between items-center w-full",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx(se,{children:"Sort by:"}),r.jsxs($e,{className:"h-8",value:b,onChange:i=>{j(i.currentTarget.value)},children:[r.jsx("option",{value:"default",children:"Default"}),r.jsx("option",{value:"distance",children:"Distance"}),r.jsx("option",{value:"reward",children:"Reward"})]})]}),r.jsx("div",{className:"flex items-center gap-4",children:R==="desc"?r.jsx(me,{className:"h-8 w-8",onClick:()=>T("asc"),children:r.jsx(it,{})}):r.jsx(me,{className:"h-8 w-8",onClick:()=>T("desc"),children:r.jsx(ut,{})})})]}),r.jsxs("div",{className:"pl-8 pt-4 pr-8",children:[r.jsxs(se,{className:"flex",children:["You are looking for tasks in ",v," meters from your current position"]}),r.jsx(ot,{value:u,min:1,max:10,onChange:i=>{console.log("Slider change!"),d(i)}})]}),t==="list"?r.jsxs(r.Fragment,{children:[r.jsx(Ce,{title:"Accepted tasks",tasks:w,mode:"view",open:E}),r.jsx(Ce,{title:"Available tasks",tasks:x,mode:"view",open:E})]}):r.jsx(r.Fragment,{children:r.jsx(Ve,{tasks:[...w,...x],radius:v})})]})]}):r.jsx(Ye,{})};export{bt as AllTasksTab};

import{r as n,_ as yt,q as Lt,j as Ce,v as gn,n as Nt,o as Ot,p as Rt,w as vn,C as En,U as bn,a2 as wn}from"./index-EkGw-ZPh.js";const Tt=n.createContext({}),xn={bezeled:"tgui-99a630d0096f2169",gray:"tgui-30bf4976f818e8bf"},Cn=e=>{var{mode:t="plain",className:r,text:o,children:i}=e,c=yt(e,["mode","className","text","children"]);const s=Lt(),{mode:l}=n.useContext(Tt),a=l||t;return Ce.jsxs(gn,Nt(Ot({Component:"button",className:Rt("tgui-c5545e0bc6105e48",s==="ios"&&"tgui-bf32cd3c110b8729",a!=="plain"&&xn[a],r)},c),{children:[i,vn(o)&&Ce.jsx(En,{className:"tgui-c0c9bf3b1a53a8a4",level:"1",weight:"2",children:o})]}))},_n=n.forwardRef((e,t)=>{var{mode:r,className:o,children:i}=e,c=yt(e,["mode","className","children"]);const s=Lt(),l=bn({mode:r});return Ce.jsx("div",Nt(Ot({ref:t,className:Rt("tgui-39e9f02ce4b4b950",s==="ios"&&"tgui-b3d7f75461a64b76",o)},c),{children:Ce.jsx(Tt.Provider,{value:l,children:i})}))});_n.Item=Cn;const kt="carousel",Dt="controller",Pn="navigation",Mn="no-scroll",ze="portal",In="root",At="toolbar",ft="zoom",De="loading",Ae="error",We="complete",Sn="placeholder",yn=e=>`active-slide-${e}`,Ln="fullsize",Be="flex_center",Nn="no_scroll",Wt="no_scroll_padding",Zt="slide_wrapper",On="slide_wrapper_interactive",ce="prev",se="next",ht="swipe",ue="close",$t="onPointerDown",Ft="onPointerMove",Vt="onPointerUp",Ut="onPointerLeave",Xt="onPointerCancel",He="onKeyDown",Rn="onKeyUp",Ke="onWheel",Tn="Escape",kn="ArrowLeft",Dn="ArrowRight",An="button",Ve="icon",Yt="contain",mt="cover",zt="Unknown action type",Bt="yarl__";function Q(...e){return[...e].filter(Boolean).join(" ")}function O(e){return`${Bt}${e}`}function Y(e){return`--${Bt}${e}`}function ge(e,t){return`${e}${t?`_${t}`:""}`}function je(e){return t=>ge(e,t)}function Wn(e,t){var r;return(r=e==null?void 0:e[t])!==null&&r!==void 0?r:t}function Ge(...e){return()=>{e.forEach(t=>{t()})}}function ne(e,t,r){return()=>{const o=n.useContext(r);if(!o)throw new Error(`${e} must be used within a ${t}.Provider`);return o}}function qe(){return typeof window<"u"}function Qe(e,t=0){const r=10**t;return Math.round((e+Number.EPSILON)*r)/r}function de(e){return e.type===void 0||e.type==="image"}function Je(e,t){return e.imageFit===mt||e.imageFit!==Yt&&t===mt}function Me(e){return typeof e=="string"?Number.parseInt(e,10):e}function _e(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=Me(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function Zn(e,t){const r=_e(t),o=r.percent!==void 0?e.width/100*r.percent:r.pixel;return{width:Math.max(e.width-2*o,0),height:Math.max(e.height-2*o,0)}}function $n(){return(qe()?window==null?void 0:window.devicePixelRatio:void 0)||1}function Ht(e,t){return t>0?(e%t+t)%t:0}function Kt(e){return e.length>0}function jt(e,t){return e[Ht(t,e.length)]}function Ue(e,t){return Kt(e)?jt(e,t):void 0}function Fn(e){return de(e)?e.src:void 0}function Vn(e,t,r){if(!r)return e;const{buttons:o,...i}=e,c=o.findIndex(l=>l===t),s=n.isValidElement(r)?n.cloneElement(r,{key:t},null):r;if(c>=0){const l=[...o];return l.splice(c,1,s),{buttons:l,...i}}return{buttons:[s,...o],...i}}function Un(e,t,r=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),r))}const Xn=Number(n.version.split(".")[0])>=19;function Yn(e){return{inert:Xn?e:e?"":void 0}}const Xe={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[ue]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:Yt,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function oe(e,t){return{name:e,component:t}}function $(e,t){return{module:e,children:t}}function Gt(e,t,r){return e.module.name===t?r(e):e.children?[$(e.module,e.children.flatMap(o=>{var i;return(i=Gt(o,t,r))!==null&&i!==void 0?i:[]}))]:[e]}function ae(e,t,r){return e.flatMap(o=>{var i;return(i=Gt(o,t,r))!==null&&i!==void 0?i:[]})}function zn(e,t=[],r=[]){let o=e;const i=m=>{const h=[...o];for(;h.length>0;){const p=h.pop();if((p==null?void 0:p.module.name)===m)return!0;p!=null&&p.children&&h.push(...p.children)}return!1},c=(m,h)=>{if(m===""){o=[$(h,o)];return}o=ae(o,m,p=>[$(h,[p])])},s=(m,h)=>{o=ae(o,m,p=>[$(p.module,[$(h,p.children)])])},l=(m,h,p)=>{o=ae(o,m,M=>{var w;return[$(M.module,[...p?[$(h)]:[],...(w=M.children)!==null&&w!==void 0?w:[],...p?[]:[$(h)]])]})},a=(m,h,p)=>{o=ae(o,m,M=>[...p?[$(h)]:[],M,...p?[]:[$(h)]])},u=m=>{s(Dt,m)},d=(m,h)=>{o=ae(o,m,p=>[$(h,p.children)])},f=m=>{o=ae(o,m,h=>h.children)},g=m=>{r.push(m)};return t.forEach(m=>{m({contains:i,addParent:c,append:s,addChild:l,addSibling:a,addModule:u,replace:d,remove:f,augment:g})}),{config:o,augmentation:m=>r.reduce((h,p)=>p(h),m)}}const qt=n.createContext(null),Ie=ne("useDocument","DocumentContext",qt);function Bn({nodeRef:e,children:t}){const r=n.useMemo(()=>{const o=c=>{var s;return((s=c||e.current)===null||s===void 0?void 0:s.ownerDocument)||document};return{getOwnerDocument:o,getOwnerWindow:c=>{var s;return((s=o(c))===null||s===void 0?void 0:s.defaultView)||window}}},[e]);return n.createElement(qt.Provider,{value:r},t)}const Qt=n.createContext(null),Se=ne("useEvents","EventsContext",Qt);function Hn({children:e}){const[t]=n.useState({});n.useEffect(()=>()=>{Object.keys(t).forEach(o=>delete t[o])},[t]);const r=n.useMemo(()=>{const o=(s,l)=>{var a;(a=t[s])===null||a===void 0||a.splice(0,t[s].length,...t[s].filter(u=>u!==l))};return{publish:(...[s,l])=>{var a;(a=t[s])===null||a===void 0||a.forEach(u=>u(l))},subscribe:(s,l)=>(t[s]||(t[s]=[]),t[s].push(l),()=>o(s,l)),unsubscribe:o}},[t]);return n.createElement(Qt.Provider,{value:r},e)}const Jt=n.createContext(null),H=ne("useLightboxProps","LightboxPropsContext",Jt);function Kn({children:e,...t}){return n.createElement(Jt.Provider,{value:t},e)}const en=n.createContext(null),re=ne("useLightboxState","LightboxStateContext",en),tn=n.createContext(null),jn=ne("useLightboxDispatch","LightboxDispatchContext",tn);function Gn(e,t){switch(t.type){case"swipe":{const{slides:r}=e,o=(t==null?void 0:t.increment)||0,i=e.globalIndex+o,c=Ht(i,r.length),s=Ue(r,c),l=o||t.duration?{increment:o,duration:t.duration,easing:t.easing}:void 0;return{slides:r,currentIndex:c,globalIndex:i,currentSlide:s,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Ue(t.slides,t.index)}:e;default:throw new Error(zt)}}function qn({slides:e,index:t,children:r}){const[o,i]=n.useReducer(Gn,{slides:e,currentIndex:t,globalIndex:t,currentSlide:Ue(e,t)});n.useEffect(()=>{i({type:"update",slides:e,index:t})},[e,t]);const c=n.useMemo(()=>({...o,state:o,dispatch:i}),[o,i]);return n.createElement(tn.Provider,{value:i},n.createElement(en.Provider,{value:c},r))}const nn=n.createContext(null),ye=ne("useTimeouts","TimeoutsContext",nn);function Qn({children:e}){const[t]=n.useState([]);n.useEffect(()=>()=>{t.forEach(o=>window.clearTimeout(o)),t.splice(0,t.length)},[t]);const r=n.useMemo(()=>{const o=s=>{t.splice(0,t.length,...t.filter(l=>l!==s))};return{setTimeout:(s,l)=>{const a=window.setTimeout(()=>{o(a),s()},l);return t.push(a),a},clearTimeout:s=>{s!==void 0&&(o(s),window.clearTimeout(s))}}},[t]);return n.createElement(nn.Provider,{value:r},e)}const et=n.forwardRef(function({label:t,className:r,icon:o,renderIcon:i,onClick:c,style:s,...l},a){const{styles:u,labels:d}=H(),f=Wn(d,t);return n.createElement("button",{ref:a,type:"button",title:f,"aria-label":f,className:Q(O(An),r),onClick:c,style:{...s,...u.button},...l},i?i():n.createElement(o,{className:O(Ve),style:u.icon}))});function Jn(e,t){const r=o=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...o},t);return r.displayName=e,r}function le(e,t){return Jn(e,n.createElement("g",{fill:"currentColor"},n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const eo=le("Close",n.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),to=le("Previous",n.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),no=le("Next",n.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),oo=le("Loading",n.createElement(n.Fragment,null,Array.from({length:8}).map((e,t,r)=>n.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/r.length*(t+1),transform:`rotate(${360/r.length*t}, 12, 12)`})))),ro=le("Error",n.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),J=qe()?n.useLayoutEffect:n.useEffect;function tt(){const[e,t]=n.useState(!1);return n.useEffect(()=>{var r,o;const i=(r=window.matchMedia)===null||r===void 0?void 0:r.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const c=s=>t(s.matches);return(o=i==null?void 0:i.addEventListener)===null||o===void 0||o.call(i,"change",c),()=>{var s;return(s=i==null?void 0:i.removeEventListener)===null||s===void 0?void 0:s.call(i,"change",c)}},[]),e}function io(e){let t=0,r=0,o=0;const c=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(c){const s=c[1].split(",").map(Me);s.length===6?(t=s[4],r=s[5]):s.length===16&&(t=s[12],r=s[13],o=s[14])}return{x:t,y:r,z:o}}function pt(e,t){const r=n.useRef(),o=n.useRef(),i=tt();return J(()=>{var c,s,l;if(e.current&&r.current!==void 0&&!i){const{keyframes:a,duration:u,easing:d,onfinish:f}=t(r.current,e.current.getBoundingClientRect(),io(e.current))||{};if(a&&u){(c=o.current)===null||c===void 0||c.cancel(),o.current=void 0;try{o.current=(l=(s=e.current).animate)===null||l===void 0?void 0:l.call(s,a,{duration:u,easing:d})}catch(g){console.error(g)}o.current&&(o.current.onfinish=()=>{o.current=void 0,f==null||f()})}}r.current=void 0}),{prepareAnimation:c=>{r.current=c},isAnimationPlaying:()=>{var c;return((c=o.current)===null||c===void 0?void 0:c.playState)==="running"}}}function on(){const e=n.useRef(null),t=n.useRef(),[r,o]=n.useState();return{setContainerRef:n.useCallback(c=>{e.current=c,t.current&&(t.current.disconnect(),t.current=void 0);const s=()=>{if(c){const l=window.getComputedStyle(c),a=u=>parseFloat(u)||0;o({width:Math.round(c.clientWidth-a(l.paddingLeft)-a(l.paddingRight)),height:Math.round(c.clientHeight-a(l.paddingTop)-a(l.paddingBottom))})}else o(void 0)};s(),c&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(s),t.current.observe(c))},[]),containerRef:e,containerRect:r}}function xe(){const e=n.useRef(),{setTimeout:t,clearTimeout:r}=ye();return n.useCallback((o,i)=>{r(e.current),e.current=t(o,i>0?i:0)},[t,r])}function T(e){const t=n.useRef(e);return J(()=>{t.current=e}),n.useCallback((...r)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...r)},[])}function gt(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Ye(e,t){return n.useMemo(()=>e==null&&t==null?null:r=>{gt(e,r),gt(t,r)},[e,t])}function co(e,t=!1){const r=n.useRef();J(()=>{t&&r.current&&(r.current=!1,e())},[t,e]);const o=n.useCallback(()=>{r.current=!0},[]),i=n.useCallback(()=>{r.current=!1},[]);return{onFocus:o,onBlur:i}}function nt(){const[e,t]=n.useState(!1);return J(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function so(){const[e]=n.useState({}),t=n.useCallback((i,c)=>{var s;(s=e[i])===null||s===void 0||s.forEach(l=>{c.isPropagationStopped()||l(c)})},[e]),r=n.useMemo(()=>({onPointerDown:i=>t($t,i),onPointerMove:i=>t(Ft,i),onPointerUp:i=>t(Vt,i),onPointerLeave:i=>t(Ut,i),onPointerCancel:i=>t(Xt,i),onKeyDown:i=>t(He,i),onKeyUp:i=>t(Rn,i),onWheel:i=>t(Ke,i)}),[t]),o=n.useCallback((i,c)=>(e[i]||(e[i]=[]),e[i].unshift(c),()=>{const s=e[i];s&&s.splice(0,s.length,...s.filter(l=>l!==c))}),[e]);return{registerSensors:r,subscribeSensors:o}}function vt(e,t){const r=n.useRef(0),o=xe(),i=T((...c)=>{r.current=Date.now(),e(c)});return n.useCallback((...c)=>{o(()=>{i(c)},t-(Date.now()-r.current))},[t,i,o])}const Ze=je("slide"),$e=je("slide_image");function Pe({slide:e,offset:t,render:r,rect:o,imageFit:i,imageProps:c,onClick:s,onLoad:l,onError:a,style:u}){var d,f,g,m,h,p,M;const[w,C]=n.useState(De),{publish:I}=Se(),{setTimeout:k}=ye(),x=n.useRef(null);n.useEffect(()=>{t===0&&I(yn(w))},[t,w,I]);const y=T(L=>{("decode"in L?L.decode():Promise.resolve()).catch(()=>{}).then(()=>{L.parentNode&&(C(We),k(()=>{l==null||l(L)},0))})}),S=n.useCallback(L=>{x.current=L,L!=null&&L.complete&&y(L)},[y]),R=n.useCallback(L=>{y(L.currentTarget)},[y]),v=T(()=>{C(Ae),a==null||a()}),_=Je(e,i),N=(L,z)=>Number.isFinite(L)?L:z,U=N(Math.max(...((f=(d=e.srcSet)===null||d===void 0?void 0:d.map(L=>L.width))!==null&&f!==void 0?f:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((g=x.current)===null||g===void 0?void 0:g.naturalWidth)||0),W=N(Math.max(...((h=(m=e.srcSet)===null||m===void 0?void 0:m.map(L=>L.height))!==null&&h!==void 0?h:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((p=x.current)===null||p===void 0?void 0:p.naturalHeight)||0),b=U&&W?{maxWidth:`min(${U}px, 100%)`,maxHeight:`min(${W}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},P=(M=e.srcSet)===null||M===void 0?void 0:M.sort((L,z)=>L.width-z.width).map(L=>`${L.src} ${L.width}w`).join(", "),Z=()=>o&&!_&&e.width&&e.height?o.height/e.height*e.width:Number.MAX_VALUE,D=P&&o&&qe()?`${Math.round(Math.min(Z(),o.width))}px`:void 0,{style:F,className:K,...ee}=c||{};return n.createElement(n.Fragment,null,n.createElement("img",{ref:S,onLoad:R,onError:v,onClick:s,draggable:!1,className:Q(O($e()),_&&O($e("cover")),w!==We&&O($e("loading")),K),style:{...b,...u,...F},...ee,alt:e.alt,sizes:D,srcSet:P,src:e.src}),w!==We&&n.createElement("div",{className:O(Ze(Sn))},w===De&&(r!=null&&r.iconLoading?r.iconLoading():n.createElement(oo,{className:Q(O(Ve),O(Ze(De)))})),w===Ae&&(r!=null&&r.iconError?r.iconError():n.createElement(ro,{className:Q(O(Ve),O(Ze(Ae)))}))))}const lo=n.forwardRef(function({className:t,children:r,...o},i){const c=n.useRef(null);return n.createElement(Bn,{nodeRef:c},n.createElement("div",{ref:Ye(i,c),className:Q(O("root"),t),...o},r))});var V;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(V||(V={}));function rn(e,t,r,o,i){n.useEffect(()=>i?()=>{}:Ge(e($t,t),e(Ft,r),e(Vt,o),e(Ut,o),e(Xt,o)),[e,t,r,o,i])}var j;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(j||(j={}));const Fe=30;function ao(e,t,r,o,i,c,s,l,a,u,d,f,g,m){const h=n.useRef(0),p=n.useRef([]),M=n.useRef(),w=n.useRef(0),C=n.useRef(j.NONE),I=n.useCallback(v=>{M.current===v.pointerId&&(M.current=void 0,C.current=j.NONE);const _=p.current;_.splice(0,_.length,..._.filter(N=>N.pointerId!==v.pointerId))},[]),k=n.useCallback(v=>{I(v),v.persist(),p.current.push(v)},[I]),x=T(v=>{k(v)}),y=(v,_)=>u&&v>_||a&&v<-_,S=T(v=>{if(p.current.find(_=>_.pointerId===v.pointerId)&&M.current===v.pointerId){const _=Date.now()-w.current,N=h.current;C.current===j.SWIPE?Math.abs(N)>.3*r||Math.abs(N)>5&&_<o?s(N,_):l(N):C.current===j.PULL&&(y(N,2*Fe)?g(N,_):m(N)),h.current=0,C.current=j.NONE}I(v)}),R=T(v=>{const _=p.current.find(N=>N.pointerId===v.pointerId);if(_){const N=M.current===v.pointerId;if(v.buttons===0){N&&h.current!==0?S(v):I(_);return}const U=v.clientX-_.clientX,W=v.clientY-_.clientY;if(M.current===void 0){const b=P=>{k(v),M.current=v.pointerId,w.current=Date.now(),C.current=P};Math.abs(U)>Math.abs(W)&&Math.abs(U)>Fe&&t(U)?(b(j.SWIPE),i()):Math.abs(W)>Math.abs(U)&&y(W,Fe)&&(b(j.PULL),d())}else N&&(C.current===j.SWIPE?(h.current=U,c(U)):C.current===j.PULL&&(h.current=W,f(W)))}});rn(e,x,R,S)}function uo({preventDefaultWheelX:e,preventDefaultWheelY:t}){const r=n.useRef(null),o=T(i=>{const c=Math.abs(i.deltaX)>Math.abs(i.deltaY);(c&&e||!c&&t||i.ctrlKey)&&i.preventDefault()});return n.useCallback(i=>{var c;i?i.addEventListener("wheel",o,{passive:!1}):(c=r.current)===null||c===void 0||c.removeEventListener("wheel",o),r.current=i},[o])}function fo(e,t,r,o,i,c,s,l,a){const u=n.useRef(0),d=n.useRef(0),f=n.useRef(),g=n.useRef(),m=n.useRef(0),h=n.useRef(),p=n.useRef(0),{setTimeout:M,clearTimeout:w}=ye(),C=n.useCallback(()=>{f.current&&(w(f.current),f.current=void 0)},[w]),I=n.useCallback(()=>{g.current&&(w(g.current),g.current=void 0)},[w]),k=T(()=>{e!==V.SWIPE&&(u.current=0,p.current=0,C(),I())});n.useEffect(k,[e,k]);const x=T(S=>{g.current=void 0,u.current===S&&a(u.current)}),y=T(S=>{if(S.ctrlKey||Math.abs(S.deltaY)>Math.abs(S.deltaX))return;const R=v=>{m.current=v,w(h.current),h.current=v>0?M(()=>{m.current=0,h.current=void 0},300):void 0};if(e===V.NONE){if(Math.abs(S.deltaX)<=1.2*Math.abs(m.current)){R(S.deltaX);return}if(!r(-S.deltaX))return;if(d.current+=S.deltaX,C(),Math.abs(d.current)>30)d.current=0,R(0),p.current=Date.now(),c();else{const v=d.current;f.current=M(()=>{f.current=void 0,v===d.current&&(d.current=0)},i)}}else if(e===V.SWIPE){let v=u.current-S.deltaX;if(v=Math.min(Math.abs(v),o)*Math.sign(v),u.current=v,s(v),I(),Math.abs(v)>.2*o){R(S.deltaX),l(v,Date.now()-p.current);return}g.current=M(()=>x(v),2*i)}else R(S.deltaX)});n.useEffect(()=>t(Ke,y),[t,y])}const Et=je("container"),cn=n.createContext(null),te=ne("useController","ControllerContext",cn);function ho({children:e,...t}){var r;const{carousel:o,animation:i,controller:c,on:s,styles:l,render:a}=t,{closeOnPullUp:u,closeOnPullDown:d,preventDefaultWheelX:f,preventDefaultWheelY:g}=c,[m,h]=n.useState(),p=re(),M=jn(),[w,C]=n.useState(V.NONE),I=n.useRef(0),k=n.useRef(0),x=n.useRef(1),{registerSensors:y,subscribeSensors:S}=so(),{subscribe:R,publish:v}=Se(),_=xe(),N=xe(),U=xe(),{containerRef:W,setContainerRef:b,containerRect:P}=on(),Z=Ye(uo({preventDefaultWheelX:f,preventDefaultWheelY:g}),b),D=n.useRef(null),F=Ye(D,void 0),{getOwnerDocument:K}=Ie(),ee=nt(),L=E=>(ee?-1:1)*(typeof E=="number"?E:1),z=T(()=>{var E;return(E=W.current)===null||E===void 0?void 0:E.focus()}),rt=T(()=>t),it=T(()=>p),ve=n.useCallback(E=>v(ce,E),[v]),Ee=n.useCallback(E=>v(se,E),[v]),fe=n.useCallback(()=>v(ue),[v]),Ne=E=>!(o.finite&&(L(E)>0&&p.currentIndex===0||L(E)<0&&p.currentIndex===p.slides.length-1)),ct=E=>{var A;I.current=E,(A=W.current)===null||A===void 0||A.style.setProperty(Y("swipe_offset"),`${Math.round(E)}px`)},Oe=E=>{var A,X;k.current=E,x.current=(()=>{const me=d&&E>0?E:u&&E<0?-E:0;return Math.min(Math.max(Qe(1-me/60*(1-.5),2),.5),1)})(),(A=W.current)===null||A===void 0||A.style.setProperty(Y("pull_offset"),`${Math.round(E)}px`),(X=W.current)===null||X===void 0||X.style.setProperty(Y("pull_opacity"),`${x.current}`)},{prepareAnimation:dn}=pt(D,(E,A,X)=>{if(D.current&&P)return{keyframes:[{transform:`translate(0, ${E.rect.y-A.y+X.y}px)`,opacity:E.opacity},{transform:"translate(0, 0)",opacity:1}],duration:E.duration,easing:i.easing.fade}}),st=(E,A)=>{if(u||d){Oe(E);let X=0;D.current&&(X=i.fade*(A?2:1),dn({rect:D.current.getBoundingClientRect(),opacity:x.current,duration:X})),U(()=>{Oe(0),C(V.NONE)},X),C(V.ANIMATION),A||fe()}},{prepareAnimation:fn,isAnimationPlaying:hn}=pt(D,(E,A,X)=>{var G;if(D.current&&P&&(!((G=p.animation)===null||G===void 0)&&G.duration)){const B=_e(o.spacing),me=(B.percent?B.percent*P.width/100:B.pixel)||0;return{keyframes:[{transform:`translate(${L(p.globalIndex-E.index)*(P.width+me)+E.rect.x-A.x+X.x}px, 0)`},{transform:"translate(0, 0)"}],duration:p.animation.duration,easing:p.animation.easing}}}),he=T(E=>{var A,X;const G=E.offset||0,B=G?i.swipe:(A=i.navigation)!==null&&A!==void 0?A:i.swipe,me=!G&&!hn()?i.easing.navigation:i.easing.swipe;let{direction:be}=E;const we=(X=E.count)!==null&&X!==void 0?X:1;let Re=V.ANIMATION,q=B*we;if(!be){const pe=P==null?void 0:P.width,dt=E.duration||0,ke=pe?B/pe*Math.abs(G):B;we!==0?(dt<ke?q=q/ke*Math.max(dt,ke/5):pe&&(q=B/pe*(pe-Math.abs(G))),be=L(G)>0?ce:se):q=B/2}let Te=0;be===ce?Ne(L(1))?Te=-we:(Re=V.NONE,q=B):be===se&&(Ne(L(-1))?Te=we:(Re=V.NONE,q=B)),q=Math.round(q),N(()=>{ct(0),C(V.NONE)},q),D.current&&fn({rect:D.current.getBoundingClientRect(),index:p.globalIndex}),C(Re),v(ht,{type:"swipe",increment:Te,duration:q,easing:me})});n.useEffect(()=>{var E,A;!((E=p.animation)===null||E===void 0)&&E.increment&&(!((A=p.animation)===null||A===void 0)&&A.duration)&&_(()=>M({type:"swipe",increment:0}),p.animation.duration)},[p.animation,M,_]);const lt=[S,Ne,(P==null?void 0:P.width)||0,i.swipe,()=>C(V.SWIPE),E=>ct(E),(E,A)=>he({offset:E,duration:A,count:1}),E=>he({offset:E,count:0})],mn=[()=>{d&&C(V.PULL)},E=>Oe(E),E=>st(E),E=>st(E,!0)];ao(...lt,u,d,...mn),fo(w,...lt);const at=T(()=>{c.focus&&K().querySelector(`.${O(ze)} .${O(Et())}`)&&z()});n.useEffect(at,[at]);const ut=T(()=>{var E;(E=s.view)===null||E===void 0||E.call(s,{index:p.currentIndex})});n.useEffect(ut,[p.globalIndex,ut]),n.useEffect(()=>Ge(R(ce,E=>he({direction:ce,...E})),R(se,E=>he({direction:se,...E})),R(ht,E=>M(E))),[R,he,M]);const pn=n.useMemo(()=>({prev:ve,next:Ee,close:fe,focus:z,slideRect:P?Zn(P,o.padding):{width:0,height:0},containerRect:P||{width:0,height:0},subscribeSensors:S,containerRef:W,setCarouselRef:F,toolbarWidth:m,setToolbarWidth:h}),[ve,Ee,fe,z,S,P,W,F,m,h,o.padding]);return n.useImperativeHandle(c.ref,()=>({prev:ve,next:Ee,close:fe,focus:z,getLightboxProps:rt,getLightboxState:it}),[ve,Ee,fe,z,rt,it]),n.createElement("div",{ref:Z,className:Q(O(Et()),O(Be)),style:{...w===V.SWIPE?{[Y("swipe_offset")]:`${Math.round(I.current)}px`}:null,...w===V.PULL?{[Y("pull_offset")]:`${Math.round(k.current)}px`,[Y("pull_opacity")]:`${x.current}`}:null,...c.touchAction!=="none"?{[Y("controller_touch_action")]:c.touchAction}:null,...l.container},...c.aria?{role:"presentation","aria-live":"polite"}:null,tabIndex:-1,...y},P&&n.createElement(cn.Provider,{value:pn},e,(r=a.controls)===null||r===void 0?void 0:r.call(a)))}const mo=oe(Dt,ho);function ie(e){return ge(kt,e)}function bt(e){return ge("slide",e)}function po({slide:e,offset:t}){const r=n.useRef(null),{currentIndex:o}=re(),{slideRect:i,close:c,focus:s}=te(),{render:l,carousel:{imageFit:a,imageProps:u},on:{click:d},controller:{closeOnBackdropClick:f},styles:{slide:g}}=H(),{getOwnerDocument:m}=Ie(),h=t!==0;n.useEffect(()=>{var w;h&&(!((w=r.current)===null||w===void 0)&&w.contains(m().activeElement))&&s()},[h,s,m]);const p=()=>{var w,C,I,k;let x=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:i});return!x&&de(e)&&(x=n.createElement(Pe,{slide:e,offset:t,render:l,rect:i,imageFit:a,imageProps:u,onClick:h?void 0:()=>d==null?void 0:d({index:o})})),x?n.createElement(n.Fragment,null,(C=l.slideHeader)===null||C===void 0?void 0:C.call(l,{slide:e}),((I=l.slideContainer)!==null&&I!==void 0?I:({children:y})=>y)({slide:e,children:x}),(k=l.slideFooter)===null||k===void 0?void 0:k.call(l,{slide:e})):null},M=w=>{const C=r.current,I=w.target instanceof HTMLElement?w.target:void 0;f&&I&&C&&(I===C||Array.from(C.children).find(k=>k===I)&&I.classList.contains(O(Zt)))&&c()};return n.createElement("div",{ref:r,className:Q(O(bt()),!h&&O(bt("current")),O(Be)),...Yn(h),onClick:M,style:g},p())}function go(){const e=H().styles.slide;return n.createElement("div",{className:O("slide"),style:e})}function vo({carousel:e}){const{slides:t,currentIndex:r,globalIndex:o}=re(),{setCarouselRef:i}=te(),c=_e(e.spacing),s=_e(e.padding),l=Un(e,t,1),a=[];if(Kt(t))for(let u=r-l;u<=r+l;u+=1){const d=jt(t,u),f=o-r+u,g=e.finite&&(u<0||u>t.length-1);a.push(g?{key:f}:{key:[`${f}`,Fn(d)].filter(Boolean).join("|"),offset:u-r,slide:d})}return n.createElement("div",{ref:i,className:Q(O(ie()),a.length>0&&O(ie("with_slides"))),style:{[`${Y(ie("slides_count"))}`]:a.length,[`${Y(ie("spacing_px"))}`]:c.pixel||0,[`${Y(ie("spacing_percent"))}`]:c.percent||0,[`${Y(ie("padding_px"))}`]:s.pixel||0,[`${Y(ie("padding_percent"))}`]:s.percent||0}},a.map(({key:u,slide:d,offset:f})=>d?n.createElement(po,{key:u,slide:d,offset:f}):n.createElement(go,{key:u})))}const Eo=oe(kt,vo);function sn(){const{carousel:e}=H(),{slides:t,currentIndex:r}=re(),o=t.length===0||e.finite&&r===0,i=t.length===0||e.finite&&r===t.length-1;return{prevDisabled:o,nextDisabled:i}}function bo(e){var t;const r=nt(),{publish:o}=Se(),{animation:i}=H(),{prevDisabled:c,nextDisabled:s}=sn(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,a=vt(()=>o(ce),l),u=vt(()=>o(se),l),d=T(f=>{switch(f.key){case Tn:o(ue);break;case kn:(r?s:c)||(r?u:a)();break;case Dn:(r?c:s)||(r?a:u)();break}});n.useEffect(()=>e(He,d),[e,d])}function wt({label:e,icon:t,renderIcon:r,action:o,onClick:i,disabled:c,style:s}){return n.createElement(et,{label:e,icon:t,renderIcon:r,className:O(`navigation_${o}`),disabled:c,onClick:i,style:s,...co(te().focus,c)})}function wo({render:{buttonPrev:e,buttonNext:t,iconPrev:r,iconNext:o},styles:i}){const{prev:c,next:s,subscribeSensors:l}=te(),{prevDisabled:a,nextDisabled:u}=sn();return bo(l),n.createElement(n.Fragment,null,e?e():n.createElement(wt,{label:"Previous",action:ce,icon:to,renderIcon:r,style:i.navigationPrev,disabled:a,onClick:c}),t?t():n.createElement(wt,{label:"Next",action:se,icon:no,renderIcon:o,style:i.navigationNext,disabled:u,onClick:s}))}const xo=oe(Pn,wo),xt=O(Nn),Co=O(Wt);function _o(e){return"style"in e}function Ct(e,t,r){const o=window.getComputedStyle(e),i=r?"padding-left":"padding-right",c=r?o.paddingLeft:o.paddingRight,s=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(Me(c)||0)+t}px`),()=>{s?e.style.setProperty(i,s):e.style.removeProperty(i)}}function Po({noScroll:{disabled:e},children:t}){const r=nt(),{getOwnerDocument:o,getOwnerWindow:i}=Ie();return n.useEffect(()=>{if(e)return()=>{};const c=[],s=i(),{body:l,documentElement:a}=o(),u=Math.round(s.innerWidth-a.clientWidth);if(u>0){c.push(Ct(l,u,r));const d=l.getElementsByTagName("*");for(let f=0;f<d.length;f+=1){const g=d[f];_o(g)&&s.getComputedStyle(g).getPropertyValue("position")==="fixed"&&!g.classList.contains(Co)&&c.push(Ct(g,u,r))}}return l.classList.add(xt),()=>{l.classList.remove(xt),c.forEach(d=>d())}},[r,e,o,i]),n.createElement(n.Fragment,null,t)}const Mo=oe(Mn,Po);function _t(e){return ge(ze,e)}function Pt(e,t,r){const o=e.getAttribute(t);return e.setAttribute(t,r),()=>{o?e.setAttribute(t,o):e.removeAttribute(t)}}function Io({children:e,animation:t,styles:r,className:o,on:i,portal:c,close:s}){const[l,a]=n.useState(!1),[u,d]=n.useState(!1),f=n.useRef([]),g=n.useRef(null),{setTimeout:m}=ye(),{subscribe:h}=Se(),M=tt()?0:t.fade;n.useEffect(()=>(a(!0),()=>{a(!1),d(!1)}),[]);const w=T(()=>{f.current.forEach(x=>x()),f.current=[]}),C=T(()=>{var x;d(!1),w(),(x=i.exiting)===null||x===void 0||x.call(i),m(()=>{var y;(y=i.exited)===null||y===void 0||y.call(i),s()},M)});n.useEffect(()=>h(ue,C),[h,C]);const I=T(x=>{var y,S,R;x.scrollTop,d(!0),(y=i.entering)===null||y===void 0||y.call(i);const v=(R=(S=x.parentNode)===null||S===void 0?void 0:S.children)!==null&&R!==void 0?R:[];for(let _=0;_<v.length;_+=1){const N=v[_];["TEMPLATE","SCRIPT","STYLE"].indexOf(N.tagName)===-1&&N!==x&&(f.current.push(Pt(N,"inert","")),f.current.push(Pt(N,"aria-hidden","true")))}f.current.push(()=>{var _,N;(N=(_=g.current)===null||_===void 0?void 0:_.focus)===null||N===void 0||N.call(_)}),m(()=>{var _;(_=i.entered)===null||_===void 0||_.call(i)},M)}),k=n.useCallback(x=>{x?I(x):w()},[I,w]);return l?wn.createPortal(n.createElement(lo,{ref:k,className:Q(o,O(_t()),O(Wt),u&&O(_t("open"))),role:"presentation","aria-live":"polite",style:{...t.fade!==Xe.animation.fade?{[Y("fade_animation_duration")]:`${M}ms`}:null,...t.easing.fade!==Xe.animation.easing.fade?{[Y("fade_animation_timing_function")]:t.easing.fade}:null,...r.root},onFocus:x=>{g.current||(g.current=x.relatedTarget)}},e),c.root||document.body):null}const So=oe(ze,Io);function yo({children:e}){return n.createElement(n.Fragment,null,e)}const Lo=oe(In,yo);function No(e){return ge(At,e)}function Oo({toolbar:{buttons:e},render:{buttonClose:t,iconClose:r},styles:o}){const{close:i,setToolbarWidth:c}=te(),{setContainerRef:s,containerRect:l}=on();J(()=>{c(l==null?void 0:l.width)},[c,l==null?void 0:l.width]);const a=()=>t?t():n.createElement(et,{key:ue,label:"Close",icon:eo,renderIcon:r,onClick:i});return n.createElement("div",{ref:s,style:o.toolbar,className:O(No())},e==null?void 0:e.map(u=>u===ue?a():u))}const Ro=oe(At,Oo);function ln(e,t){var r;return n.createElement(e.module.component,{key:e.module.name,...t},(r=e.children)===null||r===void 0?void 0:r.map(o=>ln(o,t)))}function To(e,t={}){const{easing:r,...o}=e,{easing:i,...c}=t;return{easing:{...r,...i},...o,...c}}function Go({carousel:e,animation:t,render:r,toolbar:o,controller:i,noScroll:c,on:s,plugins:l,slides:a,index:u,...d}){const{animation:f,carousel:g,render:m,toolbar:h,controller:p,noScroll:M,on:w,slides:C,index:I,plugins:k,...x}=Xe,{config:y,augmentation:S}=zn([$(So,[$(Mo,[$(mo,[$(Eo),$(Ro),$(xo)])])])],l||k),R=S({animation:To(f,t),carousel:{...g,...e},render:{...m,...r},toolbar:{...h,...o},controller:{...p,...i},noScroll:{...M,...c},on:{...w,...s},...x,...d});return R.open?n.createElement(Kn,{...R},n.createElement(qn,{slides:a||C,index:Me(u||I)},n.createElement(Qn,null,n.createElement(Hn,null,ln($(Lo,y),R))))):null}const ko={maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,scrollToZoom:!1},an=e=>({...ko,...e});function Do(e,t,r,o){const i=n.useRef(),c=n.useRef(),{zoom:s}=H().animation,l=tt(),a=T(()=>{var u,d,f;if((u=i.current)===null||u===void 0||u.cancel(),i.current=void 0,c.current&&(o!=null&&o.current)){try{i.current=(f=(d=o.current).animate)===null||f===void 0?void 0:f.call(d,[{transform:c.current},{transform:`scale(${e}) translateX(${t}px) translateY(${r}px)`}],{duration:l?0:s??500,easing:i.current?"ease-out":"ease-in-out"})}catch(g){console.error(g)}c.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return J(a,[e,t,r,a]),n.useCallback(()=>{c.current=o!=null&&o.current?window.getComputedStyle(o.current).transform:void 0},[o])}function Ao(e,t){const{on:r}=H(),o=T(()=>{var i;t||(i=r.zoom)===null||i===void 0||i.call(r,{zoom:e})});n.useEffect(o,[e,o])}function Le(){const{zoom:e}=H();return an(e)}function Wo(e,t){var r,o;let i={width:0,height:0},c={width:0,height:0};const{currentSlide:s}=re(),{imageFit:l}=H().carousel,{maxZoomPixelRatio:a}=Le();if(e&&s){const d={...s,...t};if(de(d)){const f=Je(d,l),g=Math.max(...(((r=d.srcSet)===null||r===void 0?void 0:r.map(h=>h.width))||[]).concat(d.width?[d.width]:[])),m=Math.max(...(((o=d.srcSet)===null||o===void 0?void 0:o.map(h=>h.height))||[]).concat(d.height?[d.height]:[]));g>0&&m>0&&e.width>0&&e.height>0&&(c=f?{width:Math.round(Math.min(g,e.width/e.height*m)),height:Math.round(Math.min(m,e.height/e.width*g))}:{width:g,height:m},c={width:c.width*a,height:c.height*a},i=f?{width:Math.min(e.width,c.width,g),height:Math.min(e.height,c.height,m)}:{width:Math.round(Math.min(e.width,e.height/m*g,g)),height:Math.round(Math.min(e.height,e.width/g*m,m))})}}const u=i.width?Math.max(Qe(c.width/i.width,5),1):1;return{imageRect:i,maxZoom:u}}function Mt(e,t){return((e.clientX-t.clientX)**2+(e.clientY-t.clientY)**2)**.5}function It(e,t,r=100,o=2){return e*Math.min(1+Math.abs(t/r),o)**Math.sign(t)}function Zo(e,t,r,o,i,c){const s=n.useRef([]),l=n.useRef(0),a=n.useRef(),{globalIndex:u}=re(),{getOwnerWindow:d}=Ie(),{containerRef:f,subscribeSensors:g}=te(),{keyboardMoveDistance:m,zoomInMultiplier:h,wheelZoomDistanceFactor:p,scrollToZoom:M,doubleTapDelay:w,doubleClickDelay:C,doubleClickMaxStops:I,pinchZoomDistanceFactor:k}=Le(),x=n.useCallback(b=>{if(f.current){const{pageX:P,pageY:Z}=b,{scrollX:D,scrollY:F}=d(),{left:K,top:ee,width:L,height:z}=f.current.getBoundingClientRect();return[P-K-D-L/2,Z-ee-F-z/2]}return[]},[f,d]),y=T(b=>{const P=()=>{b.preventDefault(),b.stopPropagation()};if(e>1){const F=(K,ee)=>{P(),i(K,ee)};b.key==="ArrowDown"?F(0,m):b.key==="ArrowUp"?F(0,-m):b.key==="ArrowLeft"?F(-m,0):b.key==="ArrowRight"&&F(m,0)}const Z=F=>{P(),o(F)},D=()=>b.getModifierState("Meta");b.key==="+"||b.key==="="&&D()?Z(e*h):b.key==="-"||b.key==="_"&&D()?Z(e/h):b.key==="0"&&D()&&Z(1)}),S=T(b=>{if((b.ctrlKey||M)&&Math.abs(b.deltaY)>Math.abs(b.deltaX)){b.stopPropagation(),o(It(e,-b.deltaY,p),!0,...x(b));return}e>1&&(b.stopPropagation(),M||i(b.deltaX,b.deltaY))}),R=n.useCallback(b=>{const P=s.current;P.splice(0,P.length,...P.filter(Z=>Z.pointerId!==b.pointerId))},[]),v=n.useCallback(b=>{R(b),b.persist(),s.current.push(b)},[R]),_=T(b=>{var P;const Z=s.current;if(b.pointerType==="mouse"&&b.buttons>1||!(!((P=c==null?void 0:c.current)===null||P===void 0)&&P.contains(b.target)))return;e>1&&b.stopPropagation();const{timeStamp:D}=b;Z.length===0&&D-l.current<(b.pointerType==="touch"?w:C)?(l.current=0,o(e!==t?e*Math.max(t**(1/I),h):1,!1,...x(b))):l.current=D,v(b),Z.length===2&&(a.current=Mt(Z[0],Z[1]))}),N=T(b=>{const P=s.current,Z=P.find(D=>D.pointerId===b.pointerId);if(P.length===2&&a.current){b.stopPropagation(),v(b);const D=Mt(P[0],P[1]),F=D-a.current;Math.abs(F)>0&&(o(It(e,F,k),!0,...P.map(K=>x(K)).reduce((K,ee)=>ee.map((L,z)=>K[z]+L/2))),a.current=D);return}e>1&&(b.stopPropagation(),Z&&(P.length===1&&i((Z.clientX-b.clientX)/e,(Z.clientY-b.clientY)/e),v(b)))}),U=n.useCallback(b=>{const P=s.current;P.length===2&&P.find(Z=>Z.pointerId===b.pointerId)&&(a.current=void 0),R(b)},[R]),W=n.useCallback(()=>{const b=s.current;b.splice(0,b.length),l.current=0,a.current=void 0},[]);rn(g,_,N,U,r),n.useEffect(W,[u,W]),n.useEffect(()=>r?()=>{}:Ge(W,g(He,y),g(Ke,S)),[r,g,W,y,S])}function $o(e,t,r){const[o,i]=n.useState(1),[c,s]=n.useState(0),[l,a]=n.useState(0),u=Do(o,c,l,r),{currentSlide:d,globalIndex:f}=re(),{containerRect:g,slideRect:m}=te(),{zoomInMultiplier:h}=Le(),p=d&&de(d)?d.src:void 0,M=!p||!(r!=null&&r.current);J(()=>{i(1),s(0),a(0)},[f,p]);const w=n.useCallback((y,S,R)=>{const v=R||o,_=c-(y||0),N=l-(S||0),U=(e.width*v-m.width)/2/v,W=(e.height*v-m.height)/2/v;s(Math.min(Math.abs(_),Math.max(U,0))*Math.sign(_)),a(Math.min(Math.abs(N),Math.max(W,0))*Math.sign(N))},[o,c,l,m,e.width,e.height]),C=n.useCallback((y,S,R,v)=>{const _=Qe(Math.min(Math.max(y+.001<t?y:t,1),t),5);_!==o&&(S||u(),w(R?R*(1/o-1/_):0,v?v*(1/o-1/_):0,_),i(_))},[o,t,w,u]),I=T(()=>{o>1&&(o>t&&C(t,!0),w())});J(I,[g.width,g.height,I]);const k=n.useCallback(()=>C(o*h),[o,h,C]),x=n.useCallback(()=>C(o/h),[o,h,C]);return{zoom:o,offsetX:c,offsetY:l,disabled:M,changeOffsets:w,changeZoom:C,zoomIn:k,zoomOut:x}}const un=n.createContext(null),ot=ne("useZoom","ZoomControllerContext",un);function Fo({children:e}){const[t,r]=n.useState(),{slideRect:o}=te(),{imageRect:i,maxZoom:c}=Wo(o,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:l,offsetY:a,disabled:u,changeZoom:d,changeOffsets:f,zoomIn:g,zoomOut:m}=$o(i,c,t==null?void 0:t.zoomWrapperRef);Ao(s,u),Zo(s,c,u,d,f,t==null?void 0:t.zoomWrapperRef);const h=n.useMemo(()=>({zoom:s,maxZoom:c,offsetX:l,offsetY:a,disabled:u,zoomIn:g,zoomOut:m,changeZoom:d}),[s,c,l,a,u,g,m,d]);n.useImperativeHandle(Le().ref,()=>h,[h]);const p=n.useMemo(()=>({...h,setZoomWrapper:r}),[h,r]);return n.createElement(un.Provider,{value:p},e)}const Vo=le("ZoomIn",n.createElement(n.Fragment,null,n.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),n.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),Uo=le("ZoomOut",n.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),St=n.forwardRef(function({zoomIn:t,onLoseFocus:r},o){const i=n.useRef(!1),c=n.useRef(!1),{zoom:s,maxZoom:l,zoomIn:a,zoomOut:u,disabled:d}=ot(),{render:f}=H(),g=d||(t?s>=l:s<=1);return n.useEffect(()=>{g&&i.current&&c.current&&r(),g||(i.current=!0)},[g,r]),n.createElement(et,{ref:o,disabled:g,label:t?"Zoom in":"Zoom out",icon:t?Vo:Uo,renderIcon:t?f.iconZoomIn:f.iconZoomOut,onClick:t?a:u,onFocus:()=>{c.current=!0},onBlur:()=>{c.current=!1}})});function Xo(){const e=n.useRef(null),t=n.useRef(null),{focus:r}=te(),o=n.useCallback(s=>{var l,a;!((l=s.current)===null||l===void 0)&&l.disabled?r():(a=s.current)===null||a===void 0||a.focus()},[r]),i=n.useCallback(()=>o(e),[o]),c=n.useCallback(()=>o(t),[o]);return n.createElement(n.Fragment,null,n.createElement(St,{zoomIn:!0,ref:e,onLoseFocus:c}),n.createElement(St,{ref:t,onLoseFocus:i}))}function Yo(){const{render:e}=H(),t=ot();return e.buttonZoom?n.createElement(n.Fragment,null,e.buttonZoom(t)):n.createElement(Xo,null)}function zo(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function Bo({current:e,preload:t},{type:r,source:o}){switch(r){case"fetch":return e?{current:e,preload:o}:{current:o};case"done":return o===t?{current:o}:{current:e,preload:t};default:throw new Error(zt)}}function Ho(e){var t,r;const[{current:o,preload:i},c]=n.useReducer(Bo,{}),{slide:s,rect:l,imageFit:a,render:u,interactive:d}=e,f=s.srcSet.sort((x,y)=>x.width-y.width),g=(t=s.width)!==null&&t!==void 0?t:f[f.length-1].width,m=(r=s.height)!==null&&r!==void 0?r:f[f.length-1].height,h=Je(s,a),p=Math.max(...f.map(x=>x.width)),M=Math.min((h?Math.max:Math.min)(l.width,g*(l.height/m)),p),w=$n(),C=T(()=>{var x;const y=(x=f.find(S=>S.width>=M*w))!==null&&x!==void 0?x:f[f.length-1];(!o||f.findIndex(S=>S.src===o)<f.findIndex(S=>S===y))&&c({type:"fetch",source:y.src})});J(C,[l.width,l.height,w,C]);const I=T(x=>c({type:"done",source:x})),k={WebkitTransform:d?"initial":"translateZ(0)"};return h||Object.assign(k,l.width/l.height<g/m?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),n.createElement(n.Fragment,null,i&&i!==o&&n.createElement(Pe,{key:"preload",...e,slide:{...s,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...k},onLoad:()=>I(i),render:{...u,iconLoading:()=>null,iconError:()=>null}}),o&&n.createElement(Pe,{key:"current",...e,slide:{...s,src:o,srcSet:void 0},style:k}))}function Ko({render:e,slide:t,offset:r,rect:o}){var i;const[c,s]=n.useState(),l=n.useRef(null),{zoom:a,maxZoom:u,offsetX:d,offsetY:f,setZoomWrapper:g}=ot(),m=a>1,{carousel:h,on:p}=H(),{currentIndex:M}=re();J(()=>r===0?(g({zoomWrapperRef:l,imageDimensions:c}),()=>g(void 0)):()=>{},[r,c,g]);let w=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:r,rect:o,zoom:a,maxZoom:u});if(!w&&de(t)){const C={slide:t,offset:r,rect:o,render:e,imageFit:h.imageFit,imageProps:h.imageProps,onClick:r===0?()=>{var I;return(I=p.click)===null||I===void 0?void 0:I.call(p,{index:M})}:void 0};w=zo(t)?n.createElement(Ho,{...C,slide:t,interactive:m,rect:r===0?{width:o.width*a,height:o.height*a}:o}):n.createElement(Pe,{onLoad:I=>s({width:I.naturalWidth,height:I.naturalHeight}),...C})}return w?n.createElement("div",{ref:l,className:Q(O(Ln),O(Be),O(Zt),m&&O(On)),style:r===0?{transform:`scale(${a}) translateX(${d}px) translateY(${f}px)`}:void 0},w):null}const qo=({augment:e,addModule:t})=>{e(({zoom:r,toolbar:o,render:i,controller:c,...s})=>{const l=an(r);return{zoom:l,toolbar:Vn(o,ft,n.createElement(Yo,null)),render:{...i,slide:a=>{var u;return de(a.slide)?n.createElement(Ko,{render:i,...a}):(u=i.slide)===null||u===void 0?void 0:u.call(i,a)}},controller:{...c,preventDefaultWheelY:l.scrollToZoom},...s}}),t(oe(ft,Fo))};export{_n as I,Go as L,qo as Z,Cn as a};

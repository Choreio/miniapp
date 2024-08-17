const __vite__fileDeps=["./MapContainerYandex-jR2kZOGx.js","./index-C7dcxcLS.js","./index-By2n5mV0.css","./MapContainerLeafets-BNgX921y.js","./MapContainerGoogle-DxgopLSm.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{z as te,r as C,A as Gt,j as y,c as X,d as H,_ as mt,e as lt,D as ee,F as ne,C as oe,R as xt,w as yt,J as se,P as ie,i as re,k as le,l as ce,q as ae,G as fe}from"./index-C7dcxcLS.js";import{L as Ot}from"./List-DeDa1ahv.js";import{I as ue}from"./Input-B6LaYHds.js";import{C as de,B as me}from"./Button-CA8pjaeo.js";import"./Section-Dr49_n6q.js";function et(t){return $t(t)?(t.nodeName||"").toLowerCase():"#document"}function _(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function V(t){var e;return(e=($t(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function $t(t){return t instanceof Node||t instanceof _(t).Node}function z(t){return t instanceof Element||t instanceof _(t).Element}function I(t){return t instanceof HTMLElement||t instanceof _(t).HTMLElement}function Et(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof _(t).ShadowRoot}function ot(t){const{overflow:e,overflowX:n,overflowY:o,display:s}=G(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(s)}function pe(t){return["table","td","th"].includes(et(t))}function vt(t){const e=bt(),n=G(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ge(t){let e=U(t);for(;I(e)&&!tt(e);){if(vt(e))return e;e=U(e)}return null}function bt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function tt(t){return["html","body","#document"].includes(et(t))}function G(t){return _(t).getComputedStyle(t)}function pt(t){return z(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function U(t){if(et(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Et(t)&&t.host||V(t);return Et(e)?e.host:e}function zt(t){const e=U(t);return tt(e)?t.ownerDocument?t.ownerDocument.body:t.body:I(e)&&ot(e)?e:zt(e)}function nt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=zt(t),r=s===((o=t.ownerDocument)==null?void 0:o.body),i=_(s);return r?e.concat(i,i.visualViewport||[],ot(s)?s:[],i.frameElement&&n?nt(i.frameElement):[]):e.concat(s,nt(s,[],n))}const he=({children:t})=>{const{portalContainer:e}=te();return e!=null&&e.current?Gt.createPortal(t,e.current):C.isValidElement(t)?t:null},we=["top","right","bottom","left"],Dt=["start","end"],Tt=we.reduce((t,e)=>t.concat(e,e+"-"+Dt[0],e+"-"+Dt[1]),[]),$=Math.min,M=Math.max,ct=Math.round,it=Math.floor,Y=t=>({x:t,y:t}),xe={left:"right",right:"left",bottom:"top",top:"bottom"},ye={start:"end",end:"start"};function wt(t,e,n){return M(t,$(e,n))}function K(t,e){return typeof t=="function"?t(e):t}function B(t){return t.split("-")[0]}function W(t){return t.split("-")[1]}function Bt(t){return t==="x"?"y":"x"}function Rt(t){return t==="y"?"height":"width"}function st(t){return["top","bottom"].includes(B(t))?"y":"x"}function At(t){return Bt(st(t))}function Ht(t,e,n){n===void 0&&(n=!1);const o=W(t),s=At(t),r=Rt(s);let i=s==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(i=ft(i)),[i,ft(i)]}function ve(t){const e=ft(t);return[at(t),e,at(e)]}function at(t){return t.replace(/start|end/g,e=>ye[e])}function be(t,e,n){const o=["left","right"],s=["right","left"],r=["top","bottom"],i=["bottom","top"];switch(t){case"top":case"bottom":return n?e?s:o:e?o:s;case"left":case"right":return e?r:i;default:return[]}}function Re(t,e,n,o){const s=W(t);let r=be(B(t),n==="start",o);return s&&(r=r.map(i=>i+"-"+s),e&&(r=r.concat(r.map(at)))),r}function ft(t){return t.replace(/left|right|bottom|top/g,e=>xe[e])}function Ae(t){return{top:0,right:0,bottom:0,left:0,...t}}function Vt(t){return typeof t!="number"?Ae(t):{top:t,right:t,bottom:t,left:t}}function ut(t){const{x:e,y:n,width:o,height:s}=t;return{width:o,height:s,top:n,left:e,right:e+o,bottom:n+s,x:e,y:n}}function St(t,e,n){let{reference:o,floating:s}=t;const r=st(e),i=At(e),c=Rt(i),l=B(e),a=r==="y",f=o.x+o.width/2-s.width/2,d=o.y+o.height/2-s.height/2,m=o[c]/2-s[c]/2;let u;switch(l){case"top":u={x:f,y:o.y-s.height};break;case"bottom":u={x:f,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:d};break;case"left":u={x:o.x-s.width,y:d};break;default:u={x:o.x,y:o.y}}switch(W(e)){case"start":u[i]-=m*(n&&a?-1:1);break;case"end":u[i]+=m*(n&&a?-1:1);break}return u}const Pe=async(t,e,n)=>{const{placement:o="bottom",strategy:s="absolute",middleware:r=[],platform:i}=n,c=r.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(e));let a=await i.getElementRects({reference:t,floating:e,strategy:s}),{x:f,y:d}=St(a,o,l),m=o,u={},p=0;for(let g=0;g<c.length;g++){const{name:w,fn:h}=c[g],{x,y:R,data:A,reset:v}=await h({x:f,y:d,initialPlacement:o,placement:m,strategy:s,middlewareData:u,rects:a,platform:i,elements:{reference:t,floating:e}});f=x??f,d=R??d,u={...u,[w]:{...u[w],...A}},v&&p<=50&&(p++,typeof v=="object"&&(v.placement&&(m=v.placement),v.rects&&(a=v.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:s}):v.rects),{x:f,y:d}=St(a,m,l)),g=-1)}return{x:f,y:d,placement:m,strategy:s,middlewareData:u}};async function gt(t,e){var n;e===void 0&&(e={});const{x:o,y:s,platform:r,rects:i,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:m=!1,padding:u=0}=K(e,t),p=Vt(u),w=c[m?d==="floating"?"reference":"floating":d],h=ut(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(w)))==null||n?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:a,rootBoundary:f,strategy:l})),x=d==="floating"?{x:o,y:s,width:i.floating.width,height:i.floating.height}:i.reference,R=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),A=await(r.isElement==null?void 0:r.isElement(R))?await(r.getScale==null?void 0:r.getScale(R))||{x:1,y:1}:{x:1,y:1},v=ut(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:R,strategy:l}):x);return{top:(h.top-v.top+p.top)/A.y,bottom:(v.bottom-h.bottom+p.bottom)/A.y,left:(h.left-v.left+p.left)/A.x,right:(v.right-h.right+p.right)/A.x}}const Ce=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:s,rects:r,platform:i,elements:c,middlewareData:l}=e,{element:a,padding:f=0}=K(t,e)||{};if(a==null)return{};const d=Vt(f),m={x:n,y:o},u=At(s),p=Rt(u),g=await i.getDimensions(a),w=u==="y",h=w?"top":"left",x=w?"bottom":"right",R=w?"clientHeight":"clientWidth",A=r.reference[p]+r.reference[u]-m[u]-r.floating[p],v=m[u]-r.reference[u],P=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a));let b=P?P[R]:0;(!b||!await(i.isElement==null?void 0:i.isElement(P)))&&(b=c.floating[R]||r.floating[p]);const O=A/2-v/2,S=b/2-g[p]/2-1,D=$(d[h],S),L=$(d[x],S),T=D,F=b-g[p]-L,N=b/2-g[p]/2+O,k=wt(T,N,F),j=!l.arrow&&W(s)!=null&&N!==k&&r.reference[p]/2-(N<T?D:L)-g[p]/2<0,E=j?N<T?N-T:N-F:0;return{[u]:m[u]+E,data:{[u]:k,centerOffset:N-k-E,...j&&{alignmentOffset:E}},reset:j}}});function Oe(t,e,n){return(t?[...n.filter(s=>W(s)===t),...n.filter(s=>W(s)!==t)]:n.filter(s=>B(s)===s)).filter(s=>t?W(s)===t||(e?at(s)!==s:!1):!0)}const Ee=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,s;const{rects:r,middlewareData:i,placement:c,platform:l,elements:a}=e,{crossAxis:f=!1,alignment:d,allowedPlacements:m=Tt,autoAlignment:u=!0,...p}=K(t,e),g=d!==void 0||m===Tt?Oe(d||null,u,m):m,w=await gt(e,p),h=((n=i.autoPlacement)==null?void 0:n.index)||0,x=g[h];if(x==null)return{};const R=Ht(x,r,await(l.isRTL==null?void 0:l.isRTL(a.floating)));if(c!==x)return{reset:{placement:g[0]}};const A=[w[B(x)],w[R[0]],w[R[1]]],v=[...((o=i.autoPlacement)==null?void 0:o.overflows)||[],{placement:x,overflows:A}],P=g[h+1];if(P)return{data:{index:h+1,overflows:v},reset:{placement:P}};const b=v.map(D=>{const L=W(D.placement);return[D.placement,L&&f?D.overflows.slice(0,2).reduce((T,F)=>T+F,0):D.overflows[0],D.overflows]}).sort((D,L)=>D[1]-L[1]),S=((s=b.filter(D=>D[2].slice(0,W(D[0])?2:3).every(L=>L<=0))[0])==null?void 0:s[0])||b[0][0];return S!==c?{data:{index:h+1,overflows:v},reset:{placement:S}}:{}}}},De=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:s,middlewareData:r,rects:i,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...w}=K(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const h=B(s),x=B(c)===c,R=await(l.isRTL==null?void 0:l.isRTL(a.floating)),A=m||(x||!g?[ft(c)]:ve(c));!m&&p!=="none"&&A.push(...Re(c,g,p,R));const v=[c,...A],P=await gt(e,w),b=[];let O=((o=r.flip)==null?void 0:o.overflows)||[];if(f&&b.push(P[h]),d){const T=Ht(s,i,R);b.push(P[T[0]],P[T[1]])}if(O=[...O,{placement:s,overflows:b}],!b.every(T=>T<=0)){var S,D;const T=(((S=r.flip)==null?void 0:S.index)||0)+1,F=v[T];if(F)return{data:{index:T,overflows:O},reset:{placement:F}};let N=(D=O.filter(k=>k.overflows[0]<=0).sort((k,j)=>k.overflows[1]-j.overflows[1])[0])==null?void 0:D.placement;if(!N)switch(u){case"bestFit":{var L;const k=(L=O.map(j=>[j.placement,j.overflows.filter(E=>E>0).reduce((E,Z)=>E+Z,0)]).sort((j,E)=>j[1]-E[1])[0])==null?void 0:L[0];k&&(N=k);break}case"initialPlacement":N=c;break}if(s!==N)return{reset:{placement:N}}}return{}}}};async function Te(t,e){const{placement:n,platform:o,elements:s}=t,r=await(o.isRTL==null?void 0:o.isRTL(s.floating)),i=B(n),c=W(n),l=st(n)==="y",a=["left","top"].includes(i)?-1:1,f=r&&l?-1:1,d=K(e,t);let{mainAxis:m,crossAxis:u,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return c&&typeof p=="number"&&(u=c==="end"?p*-1:p),l?{x:u*f,y:m*a}:{x:m*a,y:u*f}}const Se=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:s,y:r,placement:i,middlewareData:c}=e,l=await Te(e,t);return i===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:s+l.x,y:r+l.y,data:{...l,placement:i}}}}},Le=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:s}=e,{mainAxis:r=!0,crossAxis:i=!1,limiter:c={fn:w=>{let{x:h,y:x}=w;return{x:h,y:x}}},...l}=K(t,e),a={x:n,y:o},f=await gt(e,l),d=st(B(s)),m=Bt(d);let u=a[m],p=a[d];if(r){const w=m==="y"?"top":"left",h=m==="y"?"bottom":"right",x=u+f[w],R=u-f[h];u=wt(x,u,R)}if(i){const w=d==="y"?"top":"left",h=d==="y"?"bottom":"right",x=p+f[w],R=p-f[h];p=wt(x,p,R)}const g=c.fn({...e,[m]:u,[d]:p});return{...g,data:{x:g.x-n,y:g.y-o}}}}},ke=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:s,elements:r}=e,{apply:i=()=>{},...c}=K(t,e),l=await gt(e,c),a=B(n),f=W(n),d=st(n)==="y",{width:m,height:u}=o.floating;let p,g;a==="top"||a==="bottom"?(p=a,g=f===(await(s.isRTL==null?void 0:s.isRTL(r.floating))?"start":"end")?"left":"right"):(g=a,p=f==="end"?"top":"bottom");const w=u-l.top-l.bottom,h=m-l.left-l.right,x=$(u-l[p],w),R=$(m-l[g],h),A=!e.middlewareData.shift;let v=x,P=R;if(d?P=f||A?$(R,h):h:v=f||A?$(x,w):w,A&&!f){const O=M(l.left,0),S=M(l.right,0),D=M(l.top,0),L=M(l.bottom,0);d?P=m-2*(O!==0||S!==0?O+S:M(l.left,l.right)):v=u-2*(D!==0||L!==0?D+L:M(l.top,l.bottom))}await i({...e,availableWidth:P,availableHeight:v});const b=await s.getDimensions(r.floating);return m!==b.width||u!==b.height?{reset:{rects:!0}}:{}}}};function Ut(t){const e=G(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=I(t),r=s?t.offsetWidth:n,i=s?t.offsetHeight:o,c=ct(n)!==r||ct(o)!==i;return c&&(n=r,o=i),{width:n,height:o,$:c}}function Pt(t){return z(t)?t:t.contextElement}function q(t){const e=Pt(t);if(!I(e))return Y(1);const n=e.getBoundingClientRect(),{width:o,height:s,$:r}=Ut(e);let i=(r?ct(n.width):n.width)/o,c=(r?ct(n.height):n.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const Ne=Y(0);function Yt(t){const e=_(t);return!bt()||!e.visualViewport?Ne:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function je(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==_(t)?!1:e}function J(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),r=Pt(t);let i=Y(1);e&&(o?z(o)&&(i=q(o)):i=q(t));const c=je(r,n,o)?Yt(r):Y(0);let l=(s.left+c.x)/i.x,a=(s.top+c.y)/i.y,f=s.width/i.x,d=s.height/i.y;if(r){const m=_(r),u=o&&z(o)?_(o):o;let p=m,g=p.frameElement;for(;g&&o&&u!==p;){const w=q(g),h=g.getBoundingClientRect(),x=G(g),R=h.left+(g.clientLeft+parseFloat(x.paddingLeft))*w.x,A=h.top+(g.clientTop+parseFloat(x.paddingTop))*w.y;l*=w.x,a*=w.y,f*=w.x,d*=w.y,l+=R,a+=A,p=_(g),g=p.frameElement}}return ut({width:f,height:d,x:l,y:a})}const Me=[":popover-open",":modal"];function Ct(t){return Me.some(e=>{try{return t.matches(e)}catch{return!1}})}function _e(t){let{elements:e,rect:n,offsetParent:o,strategy:s}=t;const r=s==="fixed",i=V(o),c=e?Ct(e.floating):!1;if(o===i||c&&r)return n;let l={scrollLeft:0,scrollTop:0},a=Y(1);const f=Y(0),d=I(o);if((d||!d&&!r)&&((et(o)!=="body"||ot(i))&&(l=pt(o)),I(o))){const m=J(o);a=q(o),f.x=m.x+o.clientLeft,f.y=m.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+f.x,y:n.y*a.y-l.scrollTop*a.y+f.y}}function Fe(t){return Array.from(t.getClientRects())}function Xt(t){return J(V(t)).left+pt(t).scrollLeft}function We(t){const e=V(t),n=pt(t),o=t.ownerDocument.body,s=M(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=M(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let i=-n.scrollLeft+Xt(t);const c=-n.scrollTop;return G(o).direction==="rtl"&&(i+=M(e.clientWidth,o.clientWidth)-s),{width:s,height:r,x:i,y:c}}function Ie(t,e){const n=_(t),o=V(t),s=n.visualViewport;let r=o.clientWidth,i=o.clientHeight,c=0,l=0;if(s){r=s.width,i=s.height;const a=bt();(!a||a&&e==="fixed")&&(c=s.offsetLeft,l=s.offsetTop)}return{width:r,height:i,x:c,y:l}}function Ge(t,e){const n=J(t,!0,e==="fixed"),o=n.top+t.clientTop,s=n.left+t.clientLeft,r=I(t)?q(t):Y(1),i=t.clientWidth*r.x,c=t.clientHeight*r.y,l=s*r.x,a=o*r.y;return{width:i,height:c,x:l,y:a}}function Lt(t,e,n){let o;if(e==="viewport")o=Ie(t,n);else if(e==="document")o=We(V(t));else if(z(e))o=Ge(e,n);else{const s=Yt(t);o={...e,x:e.x-s.x,y:e.y-s.y}}return ut(o)}function Jt(t,e){const n=U(t);return n===e||!z(n)||tt(n)?!1:G(n).position==="fixed"||Jt(n,e)}function $e(t,e){const n=e.get(t);if(n)return n;let o=nt(t,[],!1).filter(c=>z(c)&&et(c)!=="body"),s=null;const r=G(t).position==="fixed";let i=r?U(t):t;for(;z(i)&&!tt(i);){const c=G(i),l=vt(i);!l&&c.position==="fixed"&&(s=null),(r?!l&&!s:!l&&c.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||ot(i)&&!l&&Jt(t,i))?o=o.filter(f=>f!==i):s=c,i=U(i)}return e.set(t,o),o}function ze(t){let{element:e,boundary:n,rootBoundary:o,strategy:s}=t;const i=[...n==="clippingAncestors"?Ct(e)?[]:$e(e,this._c):[].concat(n),o],c=i[0],l=i.reduce((a,f)=>{const d=Lt(e,f,s);return a.top=M(d.top,a.top),a.right=$(d.right,a.right),a.bottom=$(d.bottom,a.bottom),a.left=M(d.left,a.left),a},Lt(e,c,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Be(t){const{width:e,height:n}=Ut(t);return{width:e,height:n}}function He(t,e,n){const o=I(e),s=V(e),r=n==="fixed",i=J(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=Y(0);if(o||!o&&!r)if((et(e)!=="body"||ot(s))&&(c=pt(e)),o){const d=J(e,!0,r,e);l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}else s&&(l.x=Xt(s));const a=i.left+c.scrollLeft-l.x,f=i.top+c.scrollTop-l.y;return{x:a,y:f,width:i.width,height:i.height}}function ht(t){return G(t).position==="static"}function kt(t,e){return!I(t)||G(t).position==="fixed"?null:e?e(t):t.offsetParent}function Kt(t,e){const n=_(t);if(Ct(t))return n;if(!I(t)){let s=U(t);for(;s&&!tt(s);){if(z(s)&&!ht(s))return s;s=U(s)}return n}let o=kt(t,e);for(;o&&pe(o)&&ht(o);)o=kt(o,e);return o&&tt(o)&&ht(o)&&!vt(o)?n:o||ge(t)||n}const Ve=async function(t){const e=this.getOffsetParent||Kt,n=this.getDimensions,o=await n(t.floating);return{reference:He(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Ue(t){return G(t).direction==="rtl"}const Ye={convertOffsetParentRelativeRectToViewportRelativeRect:_e,getDocumentElement:V,getClippingRect:ze,getOffsetParent:Kt,getElementRects:Ve,getClientRects:Fe,getDimensions:Be,getScale:q,isElement:z,isRTL:Ue};function Xe(t,e){let n=null,o;const s=V(t);function r(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function i(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const{left:a,top:f,width:d,height:m}=t.getBoundingClientRect();if(c||e(),!d||!m)return;const u=it(f),p=it(s.clientWidth-(a+d)),g=it(s.clientHeight-(f+m)),w=it(a),x={rootMargin:-u+"px "+-p+"px "+-g+"px "+-w+"px",threshold:M(0,$(1,l))||1};let R=!0;function A(v){const P=v[0].intersectionRatio;if(P!==l){if(!R)return i();P?i(!1,P):o=setTimeout(()=>{i(!1,1e-7)},1e3)}R=!1}try{n=new IntersectionObserver(A,{...x,root:s.ownerDocument})}catch{n=new IntersectionObserver(A,x)}n.observe(t)}return i(!0),r}function Je(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=Pt(t),f=s||r?[...a?nt(a):[],...nt(e)]:[];f.forEach(h=>{s&&h.addEventListener("scroll",n,{passive:!0}),r&&h.addEventListener("resize",n)});const d=a&&c?Xe(a,n):null;let m=-1,u=null;i&&(u=new ResizeObserver(h=>{let[x]=h;x&&x.target===a&&u&&(u.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var R;(R=u)==null||R.observe(e)})),n()}),a&&!l&&u.observe(a),u.observe(e));let p,g=l?J(t):null;l&&w();function w(){const h=J(t);g&&(h.x!==g.x||h.y!==g.y||h.width!==g.width||h.height!==g.height)&&n(),g=h,p=requestAnimationFrame(w)}return n(),()=>{var h;f.forEach(x=>{s&&x.removeEventListener("scroll",n),r&&x.removeEventListener("resize",n)}),d==null||d(),(h=u)==null||h.disconnect(),u=null,l&&cancelAnimationFrame(p)}}const Ke=Se,Ze=Ee,Qe=Le,qe=De,tn=ke,Nt=Ce,en=(t,e,n)=>{const o=new Map,s={platform:Ye,...n},r={...s.platform,_c:o};return Pe(t,e,{...s,platform:r})};var rt=typeof document<"u"?C.useLayoutEffect:C.useEffect;function dt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,s;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!dt(t[o],e[o]))return!1;return!0}if(s=Object.keys(t),n=s.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,s[o]))return!1;for(o=n;o--!==0;){const r=s[o];if(!(r==="_owner"&&t.$$typeof)&&!dt(t[r],e[r]))return!1}return!0}return t!==t&&e!==e}function Zt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function jt(t,e){const n=Zt(t);return Math.round(e*n)/n}function Mt(t){const e=C.useRef(t);return rt(()=>{e.current=t}),e}function nn(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:s,elements:{reference:r,floating:i}={},transform:c=!0,whileElementsMounted:l,open:a}=t,[f,d]=C.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[m,u]=C.useState(o);dt(m,o)||u(o);const[p,g]=C.useState(null),[w,h]=C.useState(null),x=C.useCallback(E=>{E!==P.current&&(P.current=E,g(E))},[]),R=C.useCallback(E=>{E!==b.current&&(b.current=E,h(E))},[]),A=r||p,v=i||w,P=C.useRef(null),b=C.useRef(null),O=C.useRef(f),S=l!=null,D=Mt(l),L=Mt(s),T=C.useCallback(()=>{if(!P.current||!b.current)return;const E={placement:e,strategy:n,middleware:m};L.current&&(E.platform=L.current),en(P.current,b.current,E).then(Z=>{const Q={...Z,isPositioned:!0};F.current&&!dt(O.current,Q)&&(O.current=Q,Gt.flushSync(()=>{d(Q)}))})},[m,e,n,L]);rt(()=>{a===!1&&O.current.isPositioned&&(O.current.isPositioned=!1,d(E=>({...E,isPositioned:!1})))},[a]);const F=C.useRef(!1);rt(()=>(F.current=!0,()=>{F.current=!1}),[]),rt(()=>{if(A&&(P.current=A),v&&(b.current=v),A&&v){if(D.current)return D.current(A,v,T);T()}},[A,v,T,D,S]);const N=C.useMemo(()=>({reference:P,floating:b,setReference:x,setFloating:R}),[x,R]),k=C.useMemo(()=>({reference:A,floating:v}),[A,v]),j=C.useMemo(()=>{const E={position:n,left:0,top:0};if(!k.floating)return E;const Z=jt(k.floating,f.x),Q=jt(k.floating,f.y);return c?{...E,transform:"translate("+Z+"px, "+Q+"px)",...Zt(k.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:Z,top:Q}},[n,c,k.floating,f.x,f.y]);return C.useMemo(()=>({...f,update:T,refs:N,elements:k,floatingStyles:j}),[f,T,N,k,j])}const on=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:s}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?Nt({element:o.current,padding:s}).fn(n):{}:o?Nt({element:o,padding:s}).fn(n):{}}}},sn=(t,e)=>({...Ke(t),options:[t,e]}),rn=(t,e)=>({...Qe(t),options:[t,e]}),ln=(t,e)=>({...qe(t),options:[t,e]}),cn=(t,e)=>({...tn(t),options:[t,e]}),an=(t,e)=>({...Ze(t),options:[t,e]}),fn=(t,e)=>({...on(t),options:[t,e]}),un=(t,e={x:0,y:0},n=0,o=!1)=>{const s=r=>{const i={x:e.x||0,y:e.y||0};return o?n:i[r?"y":"x"]+n};return t.startsWith("top")?["bottom",{top:"100%",left:s(!1)}]:t.startsWith("right")?["left",{top:s(!0),left:0}]:t.startsWith("bottom")?[void 0,{bottom:"100%",left:s(!1)}]:["right",{top:s(!0),right:0}]},_t=22,Qt=6,dn=12,mn=1,Ft=Qt+mn,qt=t=>y.jsx("svg",X(H({width:_t,height:Ft,viewBox:`0 0 ${_t} ${Ft}`,xmlns:"http://www.w3.org/2000/svg"},t),{children:y.jsx("path",{d:"M10.804 0C6.387 0 6.94 6 .865 6h19.878c-6.074 0-5.521-6-9.939-6Z",fill:"currentColor"})})),pn={right:"tgui-6c3deae89ec68e99",bottom:"tgui-fed67e27ad8cb75f",left:"tgui-b27d1c4f6222569e"},gn=C.forwardRef((t,e)=>{var{style:n,offset:o,isStaticOffset:s,coords:r,placement:i="bottom",Icon:c=qt,className:l}=t,a=mt(t,["style","offset","isStaticOffset","coords","placement","Icon","className"]);const[f,d]=un(i,r,o,s);return y.jsx("div",X(H({ref:e,style:H({},d,n),className:lt("tgui-97a62789a70393d0",f&&pn[f],l)},a),{children:y.jsx(c,{className:"tgui-6ae8c47f9448321b"})}))}),hn={ancestorScroll:!0,ancestorResize:!0,elementResize:!1,animationFrame:!1},wn=(t,e,n,o=hn)=>{const{elementResize:s=!1}=o,r=mt(o,["elementResize"]),i=Je(t,e,n,X(H({},r),{elementResize:!1}));let c=null;if(s){let l=!0;c=new MutationObserver(()=>{l||n(),l=!1}),I(t)&&c.observe(t,{childList:!0,subtree:!0}),c.observe(e,{childList:!0,subtree:!0})}return()=>{c!==null&&(c.disconnect(),c=null),i()}},xn=t=>!t.startsWith("auto"),yn=t=>{const e=t.replace(/auto-|auto/,"");return e==="start"||e==="end"?e:null},vn=({placement:t="bottom-start",arrowRef:e=null,withArrow:n,arrowHeight:o,arrowPadding:s,sameWidth:r,offsetByMainAxis:i=0,offsetByCrossAxis:c=0,customMiddlewares:l})=>C.useMemo(()=>{const a=xn(t),f=[sn({crossAxis:c,mainAxis:n&&o?i+o:i})];return a?f.push(ln({fallbackAxisSideDirection:"start"})):f.push(an({alignment:yn(t)})),f.push(rn()),r&&f.push(cn({apply({rects:d,elements:m}){Object.assign(m.floating.style,{width:`${d.reference.width}px`})}})),l&&f.push(...l),n&&f.push(fn({element:e,padding:s})),{middlewares:f,strictPlacement:a?t:void 0}},[c,e,n,o,s,i,r,l,t]),bn=C.forwardRef((t,e)=>{var{placement:n="auto",sameWidth:o,offsetByMainAxis:s=8,offsetByCrossAxis:r=0,withArrow:i=!0,customMiddlewares:c,autoUpdateOnTargetResize:l=!1,arrowProps:a,ArrowIcon:f=qt,Component:d="div",style:m,targetRef:u,className:p,children:g}=t,w=mt(t,["placement","sameWidth","offsetByMainAxis","offsetByCrossAxis","withArrow","customMiddlewares","autoUpdateOnTargetResize","arrowProps","ArrowIcon","Component","style","targetRef","className","children"]);const[h,x]=C.useState(null),{strictPlacement:R,middlewares:A}=vn({placement:n,sameWidth:o,withArrow:i,arrowRef:h,arrowHeight:(a==null?void 0:a.height)||Qt,arrowPadding:(a==null?void 0:a.padding)||dn,offsetByMainAxis:s,offsetByCrossAxis:r,customMiddlewares:c}),{placement:v,refs:P,middlewareData:b,floatingStyles:O}=nn({placement:R,middleware:A,whileElementsMounted(...S){return wn(...S,{elementResize:l})}});return ee(()=>{P.setReference("current"in u?u.current:u)},[P.setReference,u]),y.jsx(he,{children:y.jsxs(d,X(H({},w),{ref:ne(e,P.setFloating),style:H({},m,O),className:lt("tgui-e9c83f4f150e5513",p),children:[i&&y.jsx(gn,X(H({},a),{coords:b.arrow,placement:v,ref:x,Icon:f})),g]}))})}),Rn=t=>{var{mode:e="light",children:n,className:o,arrowProps:s}=t,r=mt(t,["mode","children","className","arrowProps"]);return y.jsx(bn,X(H({withArrow:!0,arrowProps:X(H({},s),{className:lt("tgui-e0107e1e5ea5b9f3",s==null?void 0:s.className)}),className:lt("tgui-5638a4ef4e806d8c",e==="dark"&&"tgui-bc60ca772e3ae3c6",o)},r),{children:y.jsx(oe,{level:"1",children:n})}))},An=t=>{var n;let e=t.baseUrl+"?apikey="+t.apikey+"&geocode="+t.geocode+"&lang="+t.lang;return(n=t.params)==null||n.forEach(o=>{e+="&"+o.key+"="+o.value}),e},Pn=t=>{var n;let e=t.baseUrl+"?apikey="+t.apikey+"&text="+t.text+"&lang="+t.lang;return(n=t.params)==null||n.forEach(o=>{e+="&"+o.key+"="+o.value}),e},Cn=async(t,e)=>{const n=Pn({baseUrl:"https://suggest-maps.yandex.ru/v1/suggest",apikey:"18867515-d1cd-46d3-849d-09a2ebe25e4c",text:e,lang:t,params:[{key:"attrs",value:"uri"},{key:"results",value:"7"},{key:"print_address",value:"1"}]});return await fetch(n).then(o=>o.json()).then(o=>[...o.results.map(s=>({title:s.title.text,subtitle:s.subtitle.text,uri:s.uri}))])},On=async(t,e,n)=>{console.log(n);const o=An({baseUrl:"https://geocode-maps.yandex.ru/1.x/",apikey:"7ea07d84-43cf-44b9-8850-4bac0cea663f",geocode:e,lang:t,params:[{key:"results",value:"1"},{key:"format",value:"json"},n?{key:"uri",value:n}:{key:"kind",value:"house"}]});return await fetch(o).then(s=>s.json()).then(s=>s.response.GeoObjectCollection.featureMember.map(r=>{var i,c,l,a;return{available:!0,address:{formattedAdress:r.GeoObject.metaDataProperty.GeocoderMetaData.Address.formatted,country:(i=r.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.find(f=>f.kind==="country"))==null?void 0:i.name,city:(c=r.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.find(f=>f.kind==="locality"))==null?void 0:c.name,street:(l=r.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.find(f=>f.kind==="street"))==null?void 0:l.name,house:(a=r.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.find(f=>f.kind==="house"))==null?void 0:a.name},location:{longitude:r.GeoObject.Point.pos.split(" ")[0],latitude:r.GeoObject.Point.pos.split(" ")[1]}}}))},Wt=xt.lazy(()=>yt(()=>import("./MapContainerYandex-jR2kZOGx.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(({MapContainerYandex:t})=>({default:t}))),En=xt.lazy(()=>yt(()=>import("./MapContainerLeafets-BNgX921y.js"),__vite__mapDeps([3,1,2]),import.meta.url).then(({MapContainerLeafets:t})=>({default:t}))),Dn=xt.lazy(()=>yt(()=>import("./MapContainerGoogle-DxgopLSm.js"),__vite__mapDeps([4,1,2]),import.meta.url).then(({MapContainerGoogle:t})=>({default:t})));let It;const jn=({tasks:t,position:e})=>{var x,R,A,v,P;if(!se())return y.jsx(ie,{header:"Oops",description:"Application was launched with missing init data",children:y.jsx("img",{alt:"Telegram sticker",src:"https://xelene.me/telegram.gif",style:{display:"block",width:"144px",height:"144px"}})});const o=re(),s=le(ce),{available:r,location:i,address:c}=e,[l,a]=C.useState({available:!1,location:{latitude:"",longitude:""},address:{formattedAdress:"",country:"",city:"",street:"",house:""}}),f=C.createRef(),[d,m]=C.useState(""),[u,p]=C.useState([]),g=b=>{m(b.currentTarget.value),p([]),clearTimeout(It),b.currentTarget.value.length>0&&(It=setTimeout(()=>{Cn(s.languageCode||"en",d).then(O=>{console.log(O),p(O)})},500))},w=(b,O)=>{m(b),On(s.languageCode||"en",d,O).then(S=>{console.log(S),p([]),a(S[0])})},h=()=>{o(fe(l))};return y.jsxs("div",{className:"text-center",children:[r?y.jsxs(y.Fragment,{children:[y.jsxs("div",{children:["Current address: ",c==null?void 0:c.formattedAdress]}),y.jsxs("div",{className:"text-slate-400",children:["You are looking for tasks in"," 'сколько хочешь' ","meters from you"]}),y.jsxs("div",{className:"flex-col hidden",children:[y.jsx("span",{children:"Geolocation is available"}),y.jsxs("span",{children:["Latitude: ",i==null?void 0:i.latitude]}),y.jsxs("span",{children:["Longitude: ",i==null?void 0:i.longitude]})]})]}):y.jsxs(Ot,{children:[y.jsxs("div",{className:"flex flex-col gap-2 items-center w-full",ref:f,children:[y.jsx("span",{children:"Geolocation is not enabled"}),y.jsx("span",{children:"Please tell us where are you settled"}),y.jsx(ue,{value:d,placeholder:"Enter your address",onChange:g})]}),u.length>0&&y.jsx(Rn,{mode:"dark",targetRef:f,placement:"bottom",className:"w-full",children:y.jsx(Ot,{children:u.map((b,O)=>y.jsx(de,{onClick:()=>w(b.title,b.uri),subtitle:b.subtitle,children:b.title},O+":"+b))})}),l.available&&y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsx(ae,{children:"Chosen geolocation"}),y.jsxs("span",{children:["Address: ",(x=l.address)==null?void 0:x.formattedAdress]}),y.jsxs("span",{children:["Latitude, Longitude:"," ",((R=l.location)==null?void 0:R.latitude)+", "+((A=l.location)==null?void 0:A.longitude)]}),y.jsx(Wt,{type:"self",className:"p-2 w-full h-64 self-center",center:{latitude:Number((v=l.location)==null?void 0:v.latitude),longitude:Number((P=l.location)==null?void 0:P.longitude)}}),y.jsx(me,{onClick:h,children:"Confirm"})]})]}),i&&y.jsxs("div",{className:"flex flex-col gap-7",children:[y.jsx(C.Suspense,{fallback:y.jsx("div",{className:"w-full h-[--tg-viewport-width] bg-slate-300 rounded-full overflow-hidden"}),children:y.jsx(Wt,{type:"self",className:"p-2 w-full h-[--tg-viewport-width] overflow-hidden z-0",center:{latitude:Number(i.latitude),longitude:Number(i.longitude)},points:t.map(b=>({taskId:b.id,latitude:Number(b.location[0]),longitude:Number(b.location[1])})),radius:0})}),y.jsx(C.Suspense,{fallback:y.jsx("div",{className:"w-full h-[--tg-viewport-width] bg-slate-300 rounded-full overflow-hidden"}),children:y.jsx(Dn,{latitude:Number(i.latitude),longitude:Number(i.longitude),radius:0})}),y.jsx(C.Suspense,{fallback:y.jsx("div",{className:"w-full h-[--tg-viewport-width] bg-slate-300 rounded-full overflow-hidden"}),children:y.jsx(En,{latitude:Number(i.latitude),longitude:Number(i.longitude),radius:0})})]})]})};export{jn as MapPage};

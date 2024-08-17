import{g as J,R as b,r as s,A as Y,j as T}from"./index-C7dcxcLS.js";var $=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var o,r,i;if(Array.isArray(e)){if(o=e.length,o!=n.length)return!1;for(r=o;r--!==0;)if(!t(e[r],n[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(i=Object.keys(e),o=i.length,o!==Object.keys(n).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(n,i[r]))return!1;for(r=o;r--!==0;){var l=i[r];if(!t(e[l],n[l]))return!1}return!0}return e!==e&&n!==n};const q=J($);function W(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function X(t){var e=W(t,"string");return typeof e=="symbol"?e:String(e)}function _(){return _=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},_.apply(this,arguments)}function A(t,e){if(t==null)return{};var n={},o=Object.keys(t),r,i;for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}const I={NOT_LOADED:"NOT_LOADED",LOADING:"LOADING",LOADED:"LOADED",FAILED:"FAILED",AUTH_FAILURE:"AUTH_FAILURE"},Q="https://maps.googleapis.com/maps/api/js";class P{static async load(e,n){var o;const r=e.libraries?e.libraries.split(","):[],i=this.serializeParams(e);this.listeners.push(n),(o=window.google)!=null&&(o=o.maps)!=null&&o.importLibrary?(this.serializedApiParams||(this.loadingStatus=I.LOADED),this.notifyLoadingStatusListeners()):(this.serializedApiParams=i,this.initImportLibrary(e)),this.serializedApiParams&&this.serializedApiParams!==i&&console.warn("[google-maps-api-loader] The maps API has already been loaded with different parameters and will not be loaded again. Refresh the page for new values to have effect.");const l=["maps",...r];await Promise.all(l.map(a=>google.maps.importLibrary(a)))}static serializeParams(e){return[e.v,e.key,e.language,e.region,e.authReferrerPolicy,e.solutionChannel].join("/")}static initImportLibrary(e){if(window.google||(window.google={}),window.google.maps||(window.google.maps={}),window.google.maps.importLibrary){console.error("[google-maps-api-loader-internal]: initImportLibrary must only be called once");return}let n=null;const o=()=>n||(n=new Promise((r,i)=>{var l;const a=document.createElement("script"),f=new URLSearchParams;for(const[d,c]of Object.entries(e)){const h=d.replace(/[A-Z]/g,m=>"_"+m[0].toLowerCase());f.set(h,c)}f.set("loading","async"),f.set("callback","__googleMapsCallback__"),a.async=!0,a.src=Q+"?"+f.toString(),a.nonce=((l=document.querySelector("script[nonce]"))==null?void 0:l.nonce)||"",a.onerror=()=>{this.loadingStatus=I.FAILED,this.notifyLoadingStatusListeners(),i(new Error("The Google Maps JavaScript API could not load."))},window.__googleMapsCallback__=()=>{this.loadingStatus=I.LOADED,this.notifyLoadingStatusListeners(),r()},window.gm_authFailure=()=>{this.loadingStatus=I.AUTH_FAILURE,this.notifyLoadingStatusListeners()},this.loadingStatus=I.LOADING,this.notifyLoadingStatusListeners(),document.head.append(a)}),n);google.maps.importLibrary=r=>o().then(()=>google.maps.importLibrary(r))}static notifyLoadingStatusListeners(){for(const e of this.listeners)e(this.loadingStatus)}}P.loadingStatus=I.NOT_LOADED;P.serializedApiParams=void 0;P.listeners=[];const ee=["onLoad","apiKey","version","libraries"],te=["children"],ne="GMP_visgl_rgmlibrary_v1_default",k=b.createContext(null);function oe(){const[t,e]=s.useState({});return{mapInstances:t,addMapInstance:(i,l="default")=>{e(a=>_({},a,{[l]:i}))},removeMapInstance:(i="default")=>{e(l=>A(l,[i].map(X)))},clearMapInstances:()=>{e({})}}}function re(t){const{onLoad:e,apiKey:n,version:o,libraries:r=[]}=t,i=A(t,ee),[l,a]=s.useState(P.loadingStatus),[f,d]=s.useReducer((u,g)=>_({},u,{[g.name]:g.value}),{}),c=s.useMemo(()=>r==null?void 0:r.join(","),[r]),h=s.useMemo(()=>JSON.stringify(_({apiKey:n,version:o},i)),[n,o,i]),m=s.useCallback(async u=>{var g;if(f[u])return f[u];if(!((g=google)!=null&&(g=g.maps)!=null&&g.importLibrary))throw new Error("[api-provider-internal] importLibrary was called before google.maps.importLibrary was defined.");const p=await window.google.maps.importLibrary(u);return d({name:u,value:p}),p},[f]);return s.useEffect(()=>{(async()=>{try{const u=_({key:n},i);o&&(u.v=o),(c==null?void 0:c.length)>0&&(u.libraries=c),u.solutionChannel===void 0?u.solutionChannel=ne:u.solutionChannel===""&&delete u.solutionChannel,await P.load(u,g=>a(g));for(const g of["core","maps",...r])await m(g);e&&e()}catch(u){console.error("<ApiProvider> failed to load the Google Maps JavaScript API",u)}})()},[n,c,h]),{status:l,loadedLibraries:f,importLibrary:m}}const ie=t=>{const{children:e}=t,n=A(t,te),{mapInstances:o,addMapInstance:r,removeMapInstance:i,clearMapInstances:l}=oe(),{status:a,loadedLibraries:f,importLibrary:d}=re(n),c=s.useMemo(()=>({mapInstances:o,addMapInstance:r,removeMapInstance:i,clearMapInstances:l,status:a,loadedLibraries:f,importLibrary:d}),[o,r,i,l,a,f,d]);return b.createElement(k.Provider,{value:c},e)};function ae(t,e){for(const n of ce){const o=e[n],r=G[n];s.useEffect(()=>{if(!t||!o)return;const i=google.maps.event.addListener(t,r,l=>{o(se(r,t,l))});return()=>i.remove()},[t,r,o])}}function se(t,e,n){const o={type:t,map:e,detail:{},stoppable:!1,stop:()=>{}};if(le.includes(t)){const i=o,l=e.getCenter(),a=e.getZoom(),f=e.getHeading()||0,d=e.getTilt()||0,c=e.getBounds();return(!l||!c||!Number.isFinite(a))&&console.warn("[createEvent] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),i.detail={center:(l==null?void 0:l.toJSON())||{lat:0,lng:0},zoom:a||0,heading:f,tilt:d,bounds:(c==null?void 0:c.toJSON())||{north:90,east:180,south:-90,west:-180}},i}else if(ue.includes(t)){var r;if(!n)throw new Error("[createEvent] mouse events must provide a srcEvent");const i=o;return i.domEvent=n.domEvent,i.stoppable=!0,i.stop=()=>n.stop(),i.detail={latLng:((r=n.latLng)==null?void 0:r.toJSON())||null,placeId:n.placeId},i}return o}const G={onBoundsChanged:"bounds_changed",onCenterChanged:"center_changed",onClick:"click",onContextmenu:"contextmenu",onDblclick:"dblclick",onDrag:"drag",onDragend:"dragend",onDragstart:"dragstart",onHeadingChanged:"heading_changed",onIdle:"idle",onIsFractionalZoomEnabledChanged:"isfractionalzoomenabled_changed",onMapCapabilitiesChanged:"mapcapabilities_changed",onMapTypeIdChanged:"maptypeid_changed",onMousemove:"mousemove",onMouseout:"mouseout",onMouseover:"mouseover",onProjectionChanged:"projection_changed",onRenderingTypeChanged:"renderingtype_changed",onTilesLoaded:"tilesloaded",onTiltChanged:"tilt_changed",onZoomChanged:"zoom_changed",onCameraChanged:"bounds_changed"},le=["bounds_changed","center_changed","heading_changed","tilt_changed","zoom_changed"],ue=["click","contextmenu","dblclick","mousemove","mouseout","mouseover"],ce=Object.keys(G);function de(t,e){const n=s.useRef(void 0);(!n.current||!q(e,n.current))&&(n.current=e),s.useEffect(t,n.current)}const fe=new Set(["backgroundColor","clickableIcons","controlSize","disableDefaultUI","disableDoubleClickZoom","draggable","draggableCursor","draggingCursor","fullscreenControl","fullscreenControlOptions","gestureHandling","isFractionalZoomEnabled","keyboardShortcuts","mapTypeControl","mapTypeControlOptions","mapTypeId","maxZoom","minZoom","noClear","panControl","panControlOptions","restriction","rotateControl","rotateControlOptions","scaleControl","scaleControlOptions","scrollwheel","streetView","streetViewControl","streetViewControlOptions","styles","zoomControl","zoomControlOptions"]);function ge(t,e){const n={},o=Object.keys(e);for(const r of o)fe.has(r)&&(n[r]=e[r]);de(()=>{t&&t.setOptions(n)},[n])}function U(){var t;return((t=s.useContext(k))==null?void 0:t.status)||I.NOT_LOADED}function me(t,e){const{viewport:n,viewState:o}=e,r=!!n;return s.useLayoutEffect(()=>{if(!t||!o)return;const{latitude:i,longitude:l,bearing:a,pitch:f,zoom:d}=o;t.moveCamera({center:{lat:i,lng:l},heading:a,tilt:f,zoom:d+1})},[t,o]),r}function pe(t){return!t||typeof t!="object"||!("lat"in t&&"lng"in t)?!1:Number.isFinite(t.lat)&&Number.isFinite(t.lng)}function H(t){return pe(t)?t:t.toJSON()}function he(t,e,n){const o=n.center?H(n.center):null;let r=null,i=null;o&&Number.isFinite(o.lat)&&Number.isFinite(o.lng)&&(r=o.lat,i=o.lng);const l=Number.isFinite(n.zoom)?n.zoom:null,a=Number.isFinite(n.heading)?n.heading:null,f=Number.isFinite(n.tilt)?n.tilt:null;s.useLayoutEffect(()=>{if(!t)return;const d={};let c=!1;r!==null&&i!==null&&(e.current.center.lat!==r||e.current.center.lng!==i)&&(d.center={lat:r,lng:i},c=!0),l!==null&&e.current.zoom!==l&&(d.zoom=l,c=!0),a!==null&&e.current.heading!==a&&(d.heading=a,c=!0),f!==null&&e.current.tilt!==f&&(d.tilt=f,c=!0),c&&t.moveCamera(d)})}const ve=()=>{const t={position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:999,display:"flex",flexFlow:"column nowrap",textAlign:"center",justifyContent:"center",fontSize:".8rem",color:"rgba(0,0,0,0.6)",background:"#dddddd",padding:"1rem 1.5rem"};return b.createElement("div",{style:t},b.createElement("h2",null,"Error: AuthFailure"),b.createElement("p",null,"A problem with your API key prevents the map from rendering correctly. Please make sure the value of the ",b.createElement("code",null,"APIProvider.apiKey")," prop is correct. Check the error-message in the console for further details."))};function be(){const[t,e]=s.useState(null),n=s.useCallback(o=>e(o),[e]);return[t,n]}function B(){return U()===I.LOADED}function Ce(){const[,t]=s.useReducer(e=>e+1,0);return t}function ye(t,e){const n=t.getCenter(),o=t.getZoom(),r=t.getHeading()||0,i=t.getTilt()||0,l=t.getBounds();(!n||!l||!Number.isFinite(o))&&console.warn("[useTrackedCameraState] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),Object.assign(e.current,{center:(n==null?void 0:n.toJSON())||{lat:0,lng:0},zoom:o||0,heading:r,tilt:i})}function Ee(t){const e=Ce(),n=s.useRef({center:{lat:0,lng:0},heading:0,tilt:0,zoom:0});return s.useEffect(()=>{if(!t)return;const o=google.maps.event.addListener(t,"bounds_changed",()=>{ye(t,n),e()});return()=>o.remove()},[t,e]),n}const Le=["id","defaultBounds","defaultCenter","defaultZoom","defaultHeading","defaultTilt","reuseMaps"],we=["padding"];class z{static has(e){return this.entries[e]&&this.entries[e].length>0}static pop(e){return this.entries[e]&&this.entries[e].pop()||null}static push(e,n){this.entries[e]||(this.entries[e]=[]),this.entries[e].push(n)}}z.entries={};function Oe(t,e){const n=B(),[o,r]=s.useState(null),[i,l]=be(),a=Ee(o),{id:f,defaultBounds:d,defaultCenter:c,defaultZoom:h,defaultHeading:m,defaultTilt:u,reuseMaps:g}=t,p=A(t,Le),w=t.zoom!==void 0||t.defaultZoom!==void 0,M=t.center!==void 0||t.defaultCenter!==void 0;!d&&(!w||!M)&&console.warn("<Map> component is missing configuration. You have to provide zoom and center (via the `zoom`/`defaultZoom` and `center`/`defaultCenter` props) or specify the region to show using `defaultBounds`. See https://visgl.github.io/react-google-maps/docs/api-reference/components/map#required"),!p.center&&c&&(p.center=c),!p.zoom&&Number.isFinite(h)&&(p.zoom=h),!p.heading&&Number.isFinite(m)&&(p.heading=m),!p.tilt&&Number.isFinite(u)&&(p.tilt=u);for(const L of Object.keys(p))p[L]===void 0&&delete p[L];const E=s.useRef();return s.useEffect(()=>{if(!i||!n)return;const{addMapInstance:L,removeMapInstance:S}=e,O=t.mapId,y=O||"default";let C,v;if(g&&z.has(y)?(v=z.pop(y),C=v.getDiv(),i.appendChild(C),v.setOptions(p),setTimeout(()=>v.setCenter(v.getCenter()),0)):(C=document.createElement("div"),C.style.height="100%",i.appendChild(C),v=new google.maps.Map(C,p)),r(v),L(v,f),d){const{padding:N}=d,F=A(d,we);v.fitBounds(F,N)}else(!w||!M)&&v.fitBounds({east:180,west:-180,south:-90,north:90});if(E.current){const{mapId:N,cameraState:F}=E.current;N!==O&&v.setOptions(F)}return()=>{E.current={mapId:O,cameraState:a.current},C.remove(),g?z.push(y,v):google.maps.event.clearInstanceListeners(v),r(null),S(f)}},[i,n,f,t.mapId]),[o,l,a]}const Z=b.createContext(null),K=t=>{const{children:e,id:n,className:o,style:r}=t,i=s.useContext(k),l=U();if(!i)throw new Error("<Map> can only be used inside an <ApiProvider> component.");const[a,f,d]=Oe(t,i);he(a,d,t),ae(a,t),ge(a,t);const c=me(a,t),h=!!t.controlled;s.useEffect(()=>{if(a)return c&&a.setOptions({disableDefaultUI:!0}),(c||h)&&a.setOptions({gestureHandling:"none",keyboardShortcuts:!1}),()=>{a.setOptions({gestureHandling:t.gestureHandling,keyboardShortcuts:t.keyboardShortcuts})}},[a,c,h,t.gestureHandling,t.keyboardShortcuts]);const m=t.center?H(t.center):null;let u=null,g=null;m&&Number.isFinite(m.lat)&&Number.isFinite(m.lng)&&(u=m.lat,g=m.lng);const p=s.useMemo(()=>{var E,L,S,O,y;return{center:{lat:(E=u)!=null?E:0,lng:(L=g)!=null?L:0},zoom:(S=t.zoom)!=null?S:0,heading:(O=t.heading)!=null?O:0,tilt:(y=t.tilt)!=null?y:0}},[u,g,t.zoom,t.heading,t.tilt]);s.useLayoutEffect(()=>{if(!a||!h)return;a.moveCamera(p);const E=a.addListener("bounds_changed",()=>{a.moveCamera(p)});return()=>E.remove()},[a,h,p]);const w=s.useMemo(()=>_({width:"100%",height:"100%",position:"relative",zIndex:c?-1:0},r),[r,c]),M=s.useMemo(()=>({map:a}),[a]);return l===I.AUTH_FAILURE?b.createElement("div",{style:_({position:"relative"},o?{}:w),className:o},b.createElement(ve,null)):b.createElement("div",_({ref:f,"data-testid":"map",style:o?void 0:w,className:o},n?{id:n}:{}),a?b.createElement(Z.Provider,{value:M},e):null)};K.deckGLViewProps=!0;const R=new Set;function Ie(...t){const e=JSON.stringify(t);R.has(e)||(R.add(e),console.error(...t))}const V=(t=null)=>{const e=s.useContext(k),{map:n}=s.useContext(Z)||{};if(e===null)return Ie("useMap(): failed to retrieve APIProviderContext. Make sure that the <APIProvider> component exists and that the component you are calling `useMap()` from is a sibling of the <APIProvider>."),null;const{mapInstances:o}=e;return t!==null?o[t]||null:n||o.default||null};function _e(t){const e=B(),n=s.useContext(k);return s.useEffect(()=>{!e||!n||n.importLibrary(t)},[e,n,t]),(n==null?void 0:n.loadedLibraries[t])||null}function Me(t,e,n){if(e!=null&&typeof e!="object")throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");const o=t.style;if(n==null){if(e==null)return;for(const r in e)e.hasOwnProperty(r)&&j(o,r,e[r]);return}for(const r in n)n.hasOwnProperty(r)&&(e==null||!e.hasOwnProperty(r))&&(r.indexOf("--")===0?o.setProperty(r,""):r==="float"?o.cssFloat="":o[r]="");if(e!=null)for(const r in e){const i=e[r];e.hasOwnProperty(r)&&n[r]!==i&&j(o,r,i)}}function j(t,e,n){const o=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":o?t.setProperty(e,n):typeof n=="number"&&n!==0&&!Ae(e)?t[e]=n+"px":e==="float"?t.cssFloat=n:t[e]=(""+n).trim()}const Se=new Set(["animationIterationCount","aspectRatio","borderImageOutset","borderImageSlice","borderImageWidth","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","columns","flex","flexGrow","flexPositive","flexShrink","flexNegative","flexOrder","gridArea","gridRow","gridRowEnd","gridRowSpan","gridRowStart","gridColumn","gridColumnEnd","gridColumnSpan","gridColumnStart","fontWeight","lineClamp","lineHeight","opacity","order","orphans","scale","tabSize","widows","zIndex","zoom","fillOpacity","floodOpacity","stopOpacity","strokeDasharray","strokeDashoffset","strokeMiterlimit","strokeOpacity","strokeWidth"]);function Ae(t){return Se.has(t)}function D(t,e,n){s.useEffect(()=>{if(!t||!e||!n)return;const o=google.maps.event.addListener(t,e,n);return()=>o.remove()},[t,e,n])}function x(t,e,n){s.useEffect(()=>{t&&(t[e]=n)},[t,e,n])}const xe=b.createContext(null);function Pe(t){const[e,n]=s.useState(null),[o,r]=s.useState(null),i=s.useRef(null),l=V(),a=_e("marker"),{children:f,className:d,style:c,onClick:h,onDrag:m,onDragStart:u,onDragEnd:g,collisionBehavior:p,clickable:w,draggable:M,position:E,title:L,zIndex:S}=t,O=s.Children.count(f);return s.useEffect(()=>{if(!l||!a)return;const y=new a.AdvancedMarkerElement;y.map=l,n(y);let C=null;return O>0&&(C=document.createElement("div"),y.content=C,r(C)),()=>{var v;y.map=null,(v=C)==null||v.remove(),n(null),r(null)}},[l,a,O]),s.useEffect(()=>{!e||!e.content||(e.content.className=d||"")},[e,d]),x(o,"className",d??""),s.useEffect(()=>{o&&(Me(o,c||null,i.current),i.current=c||null)},[o,d,c]),x(e,"position",E),x(e,"title",L??""),x(e,"zIndex",S),x(e,"collisionBehavior",p),s.useEffect(()=>{e&&(M!==void 0?e.gmpDraggable=M:m||u||g?e.gmpDraggable=!0:e.gmpDraggable=!1)},[e,M,m,g,u]),s.useEffect(()=>{e&&(w!==void 0?e.gmpClickable=w:h?e.gmpClickable=!0:e.gmpClickable=!1)},[e,w,h]),D(e,"click",h),D(e,"drag",m),D(e,"dragstart",u),D(e,"dragend",g),[e,o]}s.forwardRef((t,e)=>{const{children:n}=t,[o,r]=Pe(t),i=s.useMemo(()=>o?{marker:o}:null,[o]);return s.useImperativeHandle(e,()=>o,[o]),r?b.createElement(xe.Provider,{value:i},Y.createPortal(n,r)):null});const ke=["onClick","onDrag","onDragStart","onDragEnd","onMouseOver","onMouseOut"];function De(t){const[e,n]=s.useState(null),o=V(),{onClick:r,onDrag:i,onDragStart:l,onDragEnd:a,onMouseOver:f,onMouseOut:d}=t,c=A(t,ke),{position:h,draggable:m}=c;return s.useEffect(()=>{if(!o){o===void 0&&console.error("<Marker> has to be inside a Map component.");return}const u=new google.maps.Marker(c);return u.setMap(o),n(u),()=>{u.setMap(null),n(null)}},[o]),s.useEffect(()=>{if(!e)return;const u=e,g=google.maps.event;return r&&g.addListener(u,"click",r),i&&g.addListener(u,"drag",i),l&&g.addListener(u,"dragstart",l),a&&g.addListener(u,"dragend",a),f&&g.addListener(u,"mouseover",f),d&&g.addListener(u,"mouseout",d),e.setDraggable(!!m),()=>{g.clearInstanceListeners(u)}},[e,m,r,i,l,a,f,d]),s.useEffect(()=>{e&&c&&e.setOptions(c)},[e,c]),s.useEffect(()=>{m||!h||!e||e.setPosition(h)},[m,h,e]),e}s.forwardRef((t,e)=>{const n=De(t);return s.useImperativeHandle(e,()=>n,[n]),b.createElement(b.Fragment,null)});var ze={VITE_YANDEX_GEOSUGGEST_API_KEY:"18867515-d1cd-46d3-849d-09a2ebe25e4c",VITE_YANDEX_GEOCODER_API_KEY:"7ea07d84-43cf-44b9-8850-4bac0cea663f",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Fe=({latitude:t,longitude:e})=>{const n=ze.GOOGLE_MAPS_API_KEY||"";return T.jsx(ie,{apiKey:n,children:T.jsx("div",{className:"p-2 w-full h-[--tg-viewport-width] overflow-hidden z-0",children:T.jsx(K,{className:"w-full h-[--tg-viewport-width] overflow-hidden z-0",defaultCenter:{lat:t,lng:e},defaultZoom:3,gestureHandling:"greedy",disableDefaultUI:!0})})})};export{Fe as MapContainerGoogle};
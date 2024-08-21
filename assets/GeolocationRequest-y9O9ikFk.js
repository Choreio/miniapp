import{o as q,j as d,A as re,m as $,n as Y,p as X,D as ae,C as ge,r as f,c as be,s as ye,F as je,G as ve,R as m,b as Oe,T as H,y as xe,H as Ee}from"./index-DYJjYIRZ.js";import{I as Ce,L as ie,C as ee,B as we}from"./Input-1JVYM8o-.js";const Ae={bezeled:"tgui-93cba8aff2e72079",plain:"tgui-08ef1486bc111162",gray:"tgui-2250ff52f0b5cf71",outline:"tgui-53781f3cf83e8be1"},Re={s:"tgui-b92d762e02762017",m:"tgui-024dfe77a8f2cfb0",l:"tgui-8ca1879e1128c105"},Ne=i=>{var{size:e="m",mode:t="bezeled",className:s,children:n}=i,a=q(i,["size","mode","className","children"]);return d.jsx(re,$(Y({Component:"button",className:X("tgui-dda0e80fdf796ba5",Ae[t],Re[e],s)},a),{children:n}))},_e=i=>{var{selected:e,className:t,children:s}=i,n=q(i,["selected","className","children"]);const a=ae();return d.jsx(re,$(Y({role:"tab",Component:"button",className:X("tgui-bbfb272d22eb23e8",a==="ios"&&"tgui-513fce1023cbbd63",t)},n),{children:d.jsx(ge,{weight:e?"2":"3",children:s})}))},ke=i=>{var{className:e,children:t}=i,s=q(i,["className","children"]);const n=ae(),a=f.Children.toArray(t),c=a.findIndex(r=>f.isValidElement(r)&&r.props.selected),u=`translateX(${100*c}%)`;return d.jsx("div",$(Y({role:"tablist",className:X("tgui-71259e3311d7116e",n==="ios"&&"tgui-16c6b1986a48e2b5",e)},s),{children:d.jsxs("div",{className:"tgui-b0a9057ab5d33005",children:[c>-1&&d.jsx("div",{"aria-hidden":!0,className:"tgui-31f461ccfea23ec3",style:{width:`${100/a.length}%`,transform:u}}),t]})}))};ke.Item=_e;function Pe({title:i,titleId:e,...t},s){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":e},t),i?f.createElement("title",{id:e},i):null,f.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const Te=f.forwardRef(Pe);let te;const Se=({geoposition:i,setGeoposition:e,status:t})=>{const s=be(ye),n=f.createRef(),[a,c]=f.useState(""),[u,r]=f.useState([]),[o,g]=f.useState(!1),[b,v]=f.useState(!1),O=()=>{v(!0)},x=()=>{v(!1)};f.useEffect(()=>{clearTimeout(te),a.length>0&&!o?te=setTimeout(()=>{je(s.languageCode||"en",a).then(h=>{console.log(h),r(h)}),O()},500):(r([]),x())},[a,o,s]);const w=h=>{const E=h.currentTarget.value;g(!1),c(E),r([]),x()};f.useEffect(()=>{x(),r([])},[i]);const I=(h,E)=>{console.log("Selected address"),c(h),g(!0),ve(s.languageCode||"en",a,E).then(k=>{console.log(k),e(k[0])}),x()},z=()=>{c(""),r([]),x()};return d.jsxs("div",{className:"relative overflow-visible self-stretch",ref:n,children:[d.jsx(Ce,{after:a.length>0&&d.jsx(Ne,{onClick:z,children:d.jsx(Te,{className:"w-4 h-4"})}),value:a,status:t,placeholder:"Enter your address",onChange:w,onBlur:x,onFocus:()=>{u.length>0&&O()}}),b&&d.jsx("div",{className:"top-22 absolute z-20 -mt-2 w-full",children:d.jsxs(ie,{className:"mr-8 ml-8 rounded-xl border border-solid border-gray-600 bg-[--tg-theme-secondary-bg-color]",children:[u.length>0&&u.map(h=>d.jsx("div",{onClick:E=>{E.preventDefault(),I(h.title,h.uri)},onTouchEnd:E=>{E.preventDefault(),I(h.title,h.uri)},children:d.jsx(ee,{className:"w-full",subtitle:h.subtitle,children:h.title})},h.uri)),u.length===0&&d.jsx(ee,{className:"w-full",children:"Not found"})]})})]})};function R(){return R=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},R.apply(this,arguments)}const ce=(i,e)=>{const t={};for(const s in i)e.indexOf(s)===-1&&(t[s]=i[s]);return t},le=m.createContext(null),V=m.createContext(null),Ie=i=>e=>m.createElement(V.Consumer,null,t=>m.createElement(i,R({parent:t},e))),Me=(i=[])=>{const[e,t]=f.useState(!1),s=f.useRef(i),n=(()=>{const c=f.useContext(le);if(c===null)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that hook useYMaps is inside <YMaps /> provider");return c})(),a=n.getApi();return f.useEffect(()=>{n.load().then(()=>Promise.all(s.current.map(n.loadModule))).then(()=>t(!0))},[]),e&&a?a:null},De=()=>{},Le=["onLoad","onError","modules","apiLoader"];function ue(i,e=!1,t=[]){return s=>{const{width:n,height:a,modules:c=[],onLoad:u=De}=s,r=Me(t.concat(c)),o=!e||!!r,g=ce(s,Le);return f.useEffect(()=>r?u(r):void 0,[r]),o?m.createElement(i,R({ymaps:r},g)):m.createElement("div",{style:{width:n,height:a}})}}const ze=typeof window<"u",se={lang:"ru_RU",load:"",ns:"",mode:"release"},Ue=i=>{const{version:e="2.1",enterprise:t=!1,query:s={lang:"ru_RU",load:"",ns:""},preload:n=!1,children:a}=i,c=f.useRef((u=>{const{query:r=se}=u,o=Date.now().toString(32),g=r.ns||"",b="__yandex-maps-api-onload__$$"+o,v="__yandex-maps-api-onerror__$$"+o,O=ze?window:{},x={};let w;const I=()=>g?O[g]:w,z=()=>{delete O[b],delete O[v]};return{load:()=>{if(I())return Promise.resolve(w);if(x[g])return x[g];const h={onload:b,onerror:v,...se,...r},E=Object.keys(h).map(P=>`${P}=${h[P]}`).join("&"),k=[`https://${u.enterprise?"enterprise.":""}api-maps.yandex.ru`,u.version,"?"+E].join("/");return x[g]=new Promise((P,W)=>{O[b]=C=>{z(),C.ready(()=>{w=C,P(C)})},O[v]=C=>{z(),W(C)},(C=>new Promise((M,J)=>{const A=document.createElement("script");A.type="text/javascript",A.onload=M,A.onerror=J,A.src=C,A.async=!0,document.head.appendChild(A)}))(k).catch(O[v])}),x[g]},getApi:I,loadModule:h=>new Promise((E,k)=>{w.modules.require(h).done(P=>{P.forEach(W=>{((C,M,J,A=!1)=>{const Z=typeof M=="string"?M.split("."):M.slice();let U,T=C;for(;Z.length>1;)U=Z.shift(),T[U]||(T[U]={}),T=T[U];const Q=Z[0];T[Q]=A===!0&&T[Q]||J})(w,h,W,!0)}),E(w)},k)})}})({version:e,enterprise:t,query:s,preload:n}));return f.useEffect(()=>{n&&c.current.load()},[c.current]),m.createElement(le.Provider,{value:c.current},a)},ne=/^on(?=[A-Z])/;function p(i){return Object.keys(i).reduce((e,t)=>{if(ne.test(t)){const s=t.replace(ne,"").toLowerCase();e._events[s]=i[t]}else e[t]=i[t];return e},{_events:{}})}function N(i,e,t){typeof t=="function"&&i.events.add(e,t)}function _(i,e,t){typeof t=="function"&&i.events.remove(e,t)}function S(i,e,t){Object.keys(Object.assign({},e,t)).forEach(s=>{e[s]!==t[s]&&(_(i,s,e[s]),N(i,s,t[s]))})}const de=i=>"default"+i.charAt(0).toUpperCase()+i.slice(1);function y(i,e){return i[e]!==void 0||i[de(e)]===void 0}function l(i,e,t){return(y(i,e)?i[e]:i[de(e)])||t}function j(i,e,t=null){if(i!==e){if(i&&("current"in i?i.current=null:typeof i=="function"&&i(null)),!e)return;"current"in e?e.current=t:typeof e=="function"&&e(t)}}function pe(i){const{width:e,height:t,style:s,className:n}=i;return s!==void 0||n!==void 0?Object.assign({},s&&{style:s},n&&{className:n}):{style:{width:e,height:t}}}class Ge extends m.Component{constructor(e){super(e),this.state={error:null,errorInfo:null}}componentDidCatch(e,t){const{onError:s=()=>{}}=this.props;s(e),this.setState({error:e,errorInfo:t})}render(){return this.state.error?null:this.props.children}}const fe=i=>({onError:e,...t})=>m.createElement(Ge,{onError:e},m.createElement(i,t));class D extends m.Component{constructor(){super(),this.instance=null,this.state={instance:null},this._parentElement=null,this._getRef=e=>{this._parentElement=e}}componentDidMount(){this.instance=D.mountObject(this._parentElement,this.props.ymaps.Map,this.props),this.setState({instance:this.instance})}componentDidUpdate(e){this.instance!==null&&D.updateObject(this.instance,e,this.props)}componentWillUnmount(){D.unmountObject(this.instance,this.props)}render(){const e=pe(this.props),t=p(this.props),s=ce(t,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return m.createElement(V.Provider,{value:this.state.instance},m.createElement("div",R({ref:this._getRef},e,s),this.props.children))}static mountObject(e,t,s){const{instanceRef:n,_events:a}=p(s),c=new t(e,l(s,"state"),l(s,"options"));return Object.keys(a).forEach(u=>N(c,u,a[u])),j(null,n,c),c}static updateObject(e,t,s){const{_events:n,instanceRef:a}=p(s),{_events:c,instanceRef:u}=p(t);if(y(s,"state")){const r=l(t,"state",{}),o=l(s,"state",{});r.type!==o.type&&e.setType(o.type),r.behaviors!==o.behaviors&&(r.behaviors&&e.behaviors.disable(r.behaviors),o.behaviors&&e.behaviors.enable(o.behaviors)),o.zoom&&r.zoom!==o.zoom&&e.setZoom(o.zoom),o.center&&r.center!==o.center&&e.setCenter(o.center),o.bounds&&r.bounds!==o.bounds&&e.setBounds(o.bounds)}if(y(s,"options")){const r=l(t,"options"),o=l(s,"options",{});r!==o&&e.options.set(o)}l(t,"width")===l(s,"width")&&l(t,"height")===l(s,"height")||e.container.fitToViewport(),S(e,c,n),j(u,a,e)}static unmountObject(e,t){const{instanceRef:s,_events:n}=p(t);e!==null&&(Object.keys(n).forEach(a=>_(e,a,n[a])),e.destroy(),j(s))}}const me=fe(ue(D,!0,["Map"]));me.defaultProps={width:320,height:240};class G extends m.Component{constructor(){super(),this.state={instance:null},this._parentElement=null,this._getRef=e=>{this._parentElement=e}}componentDidMount(){this._mounted=!0,this.props.ymaps.panorama.isSupported()&&G.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then(e=>this._mounted&&this.setState({instance:e}))}componentDidUpdate(e){this.state.instance!==null&&G.updateObject(this.state.instance,e,this.props)}componentWillUnmount(){this._mounted=!1,G.unmountObject(this.state.instance,this.props)}render(){const e=pe(this.props);return m.createElement("div",R({ref:this._getRef},e))}static mountObject(e,t,s){const{instanceRef:n,_events:a}=p(s),c=l(s,"point"),u=l(s,"locateOptions"),r=l(s,"options");return new Promise((o,g)=>{t.locate(c,u).done(b=>{if(b.length>0){const v=new t.Player(e,b[0],r);j(null,n,v),Object.keys(a).forEach(O=>N(v,O,a[O])),o(v)}},g)})}static updateObject(e,t,s){const{_events:n,instanceRef:a}=p(s),{_events:c,instanceRef:u}=p(t);if(y(s,"options")){const r=l(t,"options"),o=l(s,"options");r!==o&&e.options.set(o)}if(y(s,"point")){const r=l(s,"point"),o=l(t,"point"),g=l(s,"locateOptions");r!==o&&e.moveTo(r,g)}S(e,c,n),j(u,a,e)}static unmountObject(e,t){const{instanceRef:s,_events:n}=p(t);e!==null&&(Object.keys(n).forEach(a=>_(e,a,n[a])),j(s))}}class B extends m.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const e=B.mountControl(this.props.ymaps.control[this.props.name],this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){this.instance!==null&&B.updateControl(this.instance,e,this.props)}componentWillUnmount(){B.unmountControl(this.instance,this.props)}render(){return m.createElement(V.Provider,{value:this.state.instance},this.props.children)}static mountControl(e,t){const{instanceRef:s,parent:n,lazy:a,_events:c}=p(t),u=new e({data:l(t,"data"),options:l(t,"options"),state:l(t,"state"),mapTypes:l(t,"mapTypes"),lazy:a});if(Object.keys(c).forEach(r=>N(u,r,c[r])),n&&n.controls&&typeof n.controls.add=="function")n.controls.add(u);else{if(!n||!n.add||typeof n.add!="function")throw new Error(`No parent found to mount ${t.name}`);n.add(u)}return j(null,s,u),u}static updateControl(e,t,s){const{_events:n,instanceRef:a}=p(s),{_events:c,instanceRef:u}=p(t);if(y(s,"options")){const r=l(t,"options"),o=l(s,"options");r!==o&&e.options.set(o)}if(y(s,"data")){const r=l(t,"data"),o=l(s,"data");r!==o&&e.data.set(o)}if(y(s,"state")){const r=l(t,"state"),o=l(s,"state");r!==o&&e.state.set(o)}if(y(s,"mapTypes")){const r=l(t,"mapTypes"),o=l(s,"mapTypes");r!==o&&(e.removeAllMapTypes(),o.forEach(g=>e.addMapType(g)))}S(e,c,n),j(u,a,e)}static unmountControl(e,t){const{instanceRef:s,parent:n,_events:a}=p(t);e!==null&&(Object.keys(a).forEach(c=>_(e,c,a[c])),n.controls&&typeof n.controls.remove=="function"?n.controls.remove(e):n.remove&&typeof n.remove=="function"&&n.remove(e),j(s))}}class K extends m.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const e=K.mountObject(this.props.ymaps.Clusterer,this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){this.state.instance!==null&&K.updateObject(this.instance,e,this.props)}componentWillUnmount(){K.unmountObject(this.instance,this.props)}render(){return m.createElement(V.Provider,{value:this.state.instance},this.props.children)}static mountObject(e,t){const{instanceRef:s,parent:n,_events:a}=p(t),c=new e(l(t,"options"));if(Object.keys(a).forEach(u=>N(c,u,a[u])),n.geoObjects&&typeof n.geoObjects.add=="function")n.geoObjects.add(c);else{if(!n.add||typeof n.add!="function")throw new Error("No parent found to mount Clusterer");n.add(c)}return j(null,s,c),c}static updateObject(e,t,s){const{_events:n,instanceRef:a}=p(s),{_events:c,instanceRef:u}=p(t);if(y(s,"options")){const r=l(t,"options"),o=l(s,"options");r!==o&&e.options.set(o)}S(e,c,n),j(u,a,e)}static unmountObject(e,t){const{instanceRef:s,parent:n,_events:a}=p(t);e!==null&&(Object.keys(a).forEach(c=>_(e,c,a[c])),n.geoObjects&&typeof n.geoObjects.remove=="function"?n.geoObjects.remove(e):n.remove&&typeof n.remove=="function"&&n.remove(e),j(s))}}class F extends m.Component{constructor(){super(),this.state={instance:null}}componentDidMount(){const e=F.mountObject(this.props.ymaps.ObjectManager,this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){this.instance!==null&&F.updateObject(this.instance,e,this.props)}componentWillUnmount(){F.unmountObject(this.instance,this.props)}render(){return null}static mountObject(e,t){const{instanceRef:s,parent:n,_events:a}=p(t),c=l(t,"options",{}),u=l(t,"features",{}),r=l(t,"filter",null),o=l(t,"objects",{}),g=l(t,"clusters",{}),b=new e(c);if(b.add(u||[]),b.setFilter(r),b.objects.options.set(o),b.clusters.options.set(g),Object.keys(a).forEach(v=>N(b,v,a[v])),n.geoObjects&&typeof n.geoObjects.add=="function")n.geoObjects.add(b);else{if(!n.add||typeof n.add!="function")throw new Error("No parent found to mount ObjectManager");n.add(b)}return j(null,s,b),b}static updateObject(e,t,s){const{_events:n,instanceRef:a}=p(s),{_events:c,instanceRef:u}=p(t);if(y(s,"options")){const r=l(t,"options"),o=l(s,"options");r!==o&&e.options.set(o)}if(y(s,"objects")){const r=l(t,"objects"),o=l(s,"objects");r!==o&&e.objects.options.set(o)}if(y(s,"clusters")){const r=l(t,"clusters"),o=l(s,"clusters");r!==o&&e.clusters.options.set(o)}if(y(s,"filter")){const r=l(t,"filter"),o=l(s,"filter");r!==o&&e.setFilter(o)}if(y(s,"features")){const r=l(t,"features"),o=l(s,"features");r!==o&&(e.remove(r),e.add(o))}S(e,c,n),j(u,a,e)}static unmountObject(e,t){const{instanceRef:s,parent:n,_events:a}=p(t);e!==null&&(Object.keys(a).forEach(c=>_(e,c,a[c])),n.geoObjects&&typeof n.geoObjects.remove=="function"?n.geoObjects.remove(e):n.remove&&typeof n.remove=="function"&&n.remove(e),j(s))}}class L extends m.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const{name:e,ymaps:t,dangerZone:s}=this.props,n=L.mountObject(s&&typeof s.modifyConstructor=="function"?s.modifyConstructor(t[e]):t[e],this.props);this.instance=n,this.setState({instance:n})}componentDidUpdate(e){this.instance!==null&&L.updateObject(this.instance,e,this.props)}componentWillUnmount(){L.unmountObject(this.instance,this.props)}render(){return null}static mountObject(e,t){const{instanceRef:s,parent:n,_events:a}=p(t),c=new e(l(t,"geometry"),l(t,"properties"),l(t,"options"));if(Object.keys(a).forEach(u=>N(c,u,a[u])),n&&n.geoObjects&&typeof n.geoObjects.add=="function")n.geoObjects.add(c);else{if(!n||!n.add||typeof n.add!="function")throw new Error(`No parent found to mount ${t.name}`);n.add(c)}return j(null,s,c),c}static updateObject(e,t,s){const{_events:n,instanceRef:a}=p(s),{_events:c,instanceRef:u}=p(t);if(y(s,"geometry")){const r=l(t,"geometry",{}),o=l(s,"geometry",{});Array.isArray(o)&&o!==r?Array.isArray(o[0])&&typeof o[1]=="number"?(e.geometry.setCoordinates(o[0]),e.geometry.setRadius(o[1])):e.geometry.setCoordinates(o):typeof o=="object"&&(o.coordinates!==r.coordinates&&e.geometry.setCoordinates(o.coordinates),o.radius!==r.radius&&e.geometry.setRadius(o.radius))}if(y(s,"properties")){const r=l(t,"properties"),o=l(s,"properties");r!==o&&e.properties.set(o)}if(y(s,"options")){const r=l(t,"options"),o=l(s,"options");r!==o&&e.options.set(o)}S(e,c,n),j(u,a,e)}static unmountObject(e,t){const{instanceRef:s,parent:n,_events:a}=p(t);e!==null&&(Object.keys(a).forEach(c=>_(e,c,a[c])),n.geoObjects&&typeof n.geoObjects.remove=="function"?n.geoObjects.remove(e):n.remove&&typeof n.remove=="function"&&n.remove(e),j(s))}}var oe=fe(Ie(ue(i=>m.createElement(L,R({},i,{name:"Placemark"})),!0,["Placemark"])));const Be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAYAAADOMhxqAAAAAXNSR0IArs4c6QAAAZtJREFUOE+V079rFUEQwPHPXDAqJgpKiCKoKGKKKCL+QGzs5Floq00KKy3F1t5GLGwsBAVt1EZsBP8BGysJIaJFEhAkKCkkQhKTN3L37oJ5+J66sMXuzXd35jt74T9H/E/8Jk4HxRPaE/8IfipvuKzQ0na9gQZorfFa+TVdw2NDRix61KS0hJe4WkLBcorBMrpCKDCP8x1g0JgV05jCePAxOVzD35K7wh2pWC86eJVcwsp29nznobB1c7q5LD6QTzHRbWlVGIis8mhJbyKspiiM5LCvFruBcWGyBspi5qT9xCI5XKfYJTRMS2PNbkeUW7j3Z4DdwZfKz/oYHWL+Ry+g1LpW5d3RuiGu19P4TOytgZ+V+G6yq5I57Ks7vYBdfwOWm1ODmeRgXyDIrI8PppLxfsBJvKtmOCW9x/F+wNvgbNq5g4VZlPNEP6B0OYljeI5DKG/d6Lez3HKApZnaSmmnFdxOzvUAivuifUE6UgcM4QUu9gBiljxT/yxVTMGDNjd6AZPk0d+bOMCVNZ71AEa3NY+sCUii7Euz/gWH83ELgnv1NgAAAABJRU5ErkJggg==",he=({className:i,type:e,center:t,points:s})=>(f.useEffect(()=>{},[t]),d.jsx(Ue,{query:{lang:"en_US"},children:d.jsxs(me,{className:i,state:{center:[t.latitude,t.longitude],zoom:12.5,controls:["zoomControl","fullscreenControl"]},modules:["control.ZoomControl","control.FullscreenControl"],options:{autoFitToViewport:"always"},children:[d.jsx(oe,{id:"self",geometry:[t.latitude,t.longitude],options:e==="self"?{iconLayout:"default#image",iconImageClipRect:[[0,0],[12,24]],iconImageHref:Be,iconImageSize:[12,24],iconImageOffset:[-6,-12]}:{iconColor:"red"}}),s&&(s==null?void 0:s.length)>0&&s.map(n=>d.jsx(oe,{id:"taskNo"+n.taskId,geometry:[n.latitude,n.longitude]},n.taskId))]})})),Ve=Object.freeze(Object.defineProperty({__proto__:null,MapContainerYandex:he},Symbol.toStringTag,{value:"Module"})),We=()=>{var n,a,c,u,r;const i=Oe(),[e,t]=f.useState({available:!1,latLong:{latitude:"",longitude:""},address:{formattedAdress:"",country:"",city:"",street:"",house:""}}),s=()=>{i(Ee(e))};return d.jsxs(ie,{className:"overflow-visible bg-[--tg-theme-bg-color] mt-4",children:[d.jsxs("div",{className:"flex flex-col gap-4 p-4 text-center",children:[d.jsx(H,{children:"To provide accurate information we need your geolocation."}),d.jsx(xe,{children:"We cannot automatically determine your location, so please let us know where you are"})]}),d.jsx(Se,{geoposition:e,setGeoposition:t}),e.available&&d.jsxs("div",{className:"flex flex-col gap-4",children:[d.jsx(H,{children:"Chosen geolocation"}),d.jsxs("span",{children:["Address: ",(n=e.address)==null?void 0:n.formattedAdress]}),d.jsxs("span",{children:["Latitude, Longitude:"," ",((a=e.latLong)==null?void 0:a.latitude)+", "+((c=e.latLong)==null?void 0:c.longitude)]}),d.jsx(he,{type:"self",className:"p-2 w-full h-64 self-center",center:{latitude:Number((u=e.latLong)==null?void 0:u.latitude),longitude:Number((r=e.latLong)==null?void 0:r.longitude)}}),d.jsx(we,{onClick:s,children:"Confirm"})]})]})};export{Te as F,We as G,he as M,ke as S,_e as a,Se as b,Ve as c};
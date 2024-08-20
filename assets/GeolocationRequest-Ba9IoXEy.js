import{k as q,j as p,l as re,m as $,n as Y,o as X,p as ae,C as ge,r as h,c as be,s as ye,q as ve,v as je,R as f,b as Oe,T as H,w as xe,x as Ee}from"./index-GjoJI86j.js";import{I as we,L as ie,C as ee,B as Ce}from"./Input-BiNCPoNF.js";const Ae={bezeled:"tgui-93cba8aff2e72079",plain:"tgui-08ef1486bc111162",gray:"tgui-2250ff52f0b5cf71",outline:"tgui-53781f3cf83e8be1"},Re={s:"tgui-b92d762e02762017",m:"tgui-024dfe77a8f2cfb0",l:"tgui-8ca1879e1128c105"},Ne=i=>{var{size:e="m",mode:t="bezeled",className:s,children:n}=i,r=q(i,["size","mode","className","children"]);return p.jsx(re,$(Y({Component:"button",className:X("tgui-dda0e80fdf796ba5",Ae[t],Re[e],s)},r),{children:n}))},_e=i=>{var{selected:e,className:t,children:s}=i,n=q(i,["selected","className","children"]);const r=ae();return p.jsx(re,$(Y({role:"tab",Component:"button",className:X("tgui-bbfb272d22eb23e8",r==="ios"&&"tgui-513fce1023cbbd63",t)},n),{children:p.jsx(ge,{weight:e?"2":"3",children:s})}))},ke=i=>{var{className:e,children:t}=i,s=q(i,["className","children"]);const n=ae(),r=h.Children.toArray(t),c=r.findIndex(a=>h.isValidElement(a)&&a.props.selected),u=`translateX(${100*c}%)`;return p.jsx("div",$(Y({role:"tablist",className:X("tgui-71259e3311d7116e",n==="ios"&&"tgui-16c6b1986a48e2b5",e)},s),{children:p.jsxs("div",{className:"tgui-b0a9057ab5d33005",children:[c>-1&&p.jsx("div",{"aria-hidden":!0,className:"tgui-31f461ccfea23ec3",style:{width:`${100/r.length}%`,transform:u}}),t]})}))};ke.Item=_e;function Pe({title:i,titleId:e,...t},s){return h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":e},t),i?h.createElement("title",{id:e},i):null,h.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const Te=h.forwardRef(Pe);let te;const Ie=({geoposition:i,setGeoposition:e})=>{const t=be(ye),s=h.createRef(),[n,r]=h.useState(""),[c,u]=h.useState([]);h.useEffect(()=>{clearTimeout(te),n.length>0?te=setTimeout(()=>{ve(t.languageCode||"en",n).then(m=>{console.log(m),u(m)}),O()},500):(u([]),x())},[n]);const a=m=>{const E=m.currentTarget.value;r(E),u([]),x()};h.useEffect(()=>{x(),u([])},[i]);const o=(m,E)=>{console.log("Selected address"),r(m),je(t.languageCode||"en",n,E).then(T=>{console.log(T),e(T[0])}),x()},g=()=>{r(""),u([]),x()},[b,j]=h.useState(!1),O=()=>{j(!0)},x=()=>{j(!1)};return p.jsxs("div",{className:"relative overflow-visible self-stretch",ref:s,children:[p.jsx(we,{after:n.length>0&&p.jsx(Ne,{onClick:g,children:p.jsx(Te,{className:"w-4 h-4"})}),value:n,placeholder:"Enter your address",onChange:a,onBlur:x,onFocus:()=>{c.length>0&&O()}}),b&&p.jsx("div",{className:"top-22 absolute z-20 -mt-2 w-full",children:p.jsxs(ie,{className:"mr-8 ml-8 rounded-xl border border-solid border-gray-600 bg-[--tg-theme-secondary-bg-color]",children:[c.length>0&&c.map(m=>p.jsx("div",{onClick:E=>{E.preventDefault(),o(m.title,m.uri)},onTouchEnd:E=>{E.preventDefault(),o(m.title,m.uri)},children:p.jsx(ee,{className:"w-full",subtitle:m.subtitle,children:m.title})},m.uri)),c.length===0&&p.jsx(ee,{className:"w-full",children:"Not found"})]})})]})};function A(){return A=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},A.apply(this,arguments)}const ce=(i,e)=>{const t={};for(const s in i)e.indexOf(s)===-1&&(t[s]=i[s]);return t},le=f.createContext(null),K=f.createContext(null),Me=i=>e=>f.createElement(K.Consumer,null,t=>f.createElement(i,A({parent:t},e))),Se=(i=[])=>{const[e,t]=h.useState(!1),s=h.useRef(i),n=(()=>{const c=h.useContext(le);if(c===null)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that hook useYMaps is inside <YMaps /> provider");return c})(),r=n.getApi();return h.useEffect(()=>{n.load().then(()=>Promise.all(s.current.map(n.loadModule))).then(()=>t(!0))},[]),e&&r?r:null},De=()=>{},Le=["onLoad","onError","modules","apiLoader"];function ue(i,e=!1,t=[]){return s=>{const{width:n,height:r,modules:c=[],onLoad:u=De}=s,a=Se(t.concat(c)),o=!e||!!a,g=ce(s,Le);return h.useEffect(()=>a?u(a):void 0,[a]),o?f.createElement(i,A({ymaps:a},g)):f.createElement("div",{style:{width:n,height:r}})}}const ze=typeof window<"u",se={lang:"ru_RU",load:"",ns:"",mode:"release"},Ue=i=>{const{version:e="2.1",enterprise:t=!1,query:s={lang:"ru_RU",load:"",ns:""},preload:n=!1,children:r}=i,c=h.useRef((u=>{const{query:a=se}=u,o=Date.now().toString(32),g=a.ns||"",b="__yandex-maps-api-onload__$$"+o,j="__yandex-maps-api-onerror__$$"+o,O=ze?window:{},x={};let m;const E=()=>g?O[g]:m,T=()=>{delete O[b],delete O[j]};return{load:()=>{if(E())return Promise.resolve(m);if(x[g])return x[g];const I={onload:b,onerror:j,...se,...a},V=Object.keys(I).map(_=>`${_}=${I[_]}`).join("&"),W=[`https://${u.enterprise?"enterprise.":""}api-maps.yandex.ru`,u.version,"?"+V].join("/");return x[g]=new Promise((_,F)=>{O[b]=w=>{T(),w.ready(()=>{m=w,_(w)})},O[j]=w=>{T(),F(w)},(w=>new Promise((M,J)=>{const C=document.createElement("script");C.type="text/javascript",C.onload=M,C.onerror=J,C.src=w,C.async=!0,document.head.appendChild(C)}))(W).catch(O[j])}),x[g]},getApi:E,loadModule:I=>new Promise((V,W)=>{m.modules.require(I).done(_=>{_.forEach(F=>{((w,M,J,C=!1)=>{const Z=typeof M=="string"?M.split("."):M.slice();let L,k=w;for(;Z.length>1;)L=Z.shift(),k[L]||(k[L]={}),k=k[L];const Q=Z[0];k[Q]=C===!0&&k[Q]||J})(m,I,F,!0)}),V(m)},W)})}})({version:e,enterprise:t,query:s,preload:n}));return h.useEffect(()=>{n&&c.current.load()},[c.current]),f.createElement(le.Provider,{value:c.current},r)},ne=/^on(?=[A-Z])/;function d(i){return Object.keys(i).reduce((e,t)=>{if(ne.test(t)){const s=t.replace(ne,"").toLowerCase();e._events[s]=i[t]}else e[t]=i[t];return e},{_events:{}})}function R(i,e,t){typeof t=="function"&&i.events.add(e,t)}function N(i,e,t){typeof t=="function"&&i.events.remove(e,t)}function P(i,e,t){Object.keys(Object.assign({},e,t)).forEach(s=>{e[s]!==t[s]&&(N(i,s,e[s]),R(i,s,t[s]))})}const pe=i=>"default"+i.charAt(0).toUpperCase()+i.slice(1);function y(i,e){return i[e]!==void 0||i[pe(e)]===void 0}function l(i,e,t){return(y(i,e)?i[e]:i[pe(e)])||t}function v(i,e,t=null){if(i!==e){if(i&&("current"in i?i.current=null:typeof i=="function"&&i(null)),!e)return;"current"in e?e.current=t:typeof e=="function"&&e(t)}}function de(i){const{width:e,height:t,style:s,className:n}=i;return s!==void 0||n!==void 0?Object.assign({},s&&{style:s},n&&{className:n}):{style:{width:e,height:t}}}class Ge extends f.Component{constructor(e){super(e),this.state={error:null,errorInfo:null}}componentDidCatch(e,t){const{onError:s=()=>{}}=this.props;s(e),this.setState({error:e,errorInfo:t})}render(){return this.state.error?null:this.props.children}}const fe=i=>({onError:e,...t})=>f.createElement(Ge,{onError:e},f.createElement(i,t));class S extends f.Component{constructor(){super(),this.instance=null,this.state={instance:null},this._parentElement=null,this._getRef=e=>{this._parentElement=e}}componentDidMount(){this.instance=S.mountObject(this._parentElement,this.props.ymaps.Map,this.props),this.setState({instance:this.instance})}componentDidUpdate(e){this.instance!==null&&S.updateObject(this.instance,e,this.props)}componentWillUnmount(){S.unmountObject(this.instance,this.props)}render(){const e=de(this.props),t=d(this.props),s=ce(t,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return f.createElement(K.Provider,{value:this.state.instance},f.createElement("div",A({ref:this._getRef},e,s),this.props.children))}static mountObject(e,t,s){const{instanceRef:n,_events:r}=d(s),c=new t(e,l(s,"state"),l(s,"options"));return Object.keys(r).forEach(u=>R(c,u,r[u])),v(null,n,c),c}static updateObject(e,t,s){const{_events:n,instanceRef:r}=d(s),{_events:c,instanceRef:u}=d(t);if(y(s,"state")){const a=l(t,"state",{}),o=l(s,"state",{});a.type!==o.type&&e.setType(o.type),a.behaviors!==o.behaviors&&(a.behaviors&&e.behaviors.disable(a.behaviors),o.behaviors&&e.behaviors.enable(o.behaviors)),o.zoom&&a.zoom!==o.zoom&&e.setZoom(o.zoom),o.center&&a.center!==o.center&&e.setCenter(o.center),o.bounds&&a.bounds!==o.bounds&&e.setBounds(o.bounds)}if(y(s,"options")){const a=l(t,"options"),o=l(s,"options",{});a!==o&&e.options.set(o)}l(t,"width")===l(s,"width")&&l(t,"height")===l(s,"height")||e.container.fitToViewport(),P(e,c,n),v(u,r,e)}static unmountObject(e,t){const{instanceRef:s,_events:n}=d(t);e!==null&&(Object.keys(n).forEach(r=>N(e,r,n[r])),e.destroy(),v(s))}}const me=fe(ue(S,!0,["Map"]));me.defaultProps={width:320,height:240};class z extends f.Component{constructor(){super(),this.state={instance:null},this._parentElement=null,this._getRef=e=>{this._parentElement=e}}componentDidMount(){this._mounted=!0,this.props.ymaps.panorama.isSupported()&&z.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then(e=>this._mounted&&this.setState({instance:e}))}componentDidUpdate(e){this.state.instance!==null&&z.updateObject(this.state.instance,e,this.props)}componentWillUnmount(){this._mounted=!1,z.unmountObject(this.state.instance,this.props)}render(){const e=de(this.props);return f.createElement("div",A({ref:this._getRef},e))}static mountObject(e,t,s){const{instanceRef:n,_events:r}=d(s),c=l(s,"point"),u=l(s,"locateOptions"),a=l(s,"options");return new Promise((o,g)=>{t.locate(c,u).done(b=>{if(b.length>0){const j=new t.Player(e,b[0],a);v(null,n,j),Object.keys(r).forEach(O=>R(j,O,r[O])),o(j)}},g)})}static updateObject(e,t,s){const{_events:n,instanceRef:r}=d(s),{_events:c,instanceRef:u}=d(t);if(y(s,"options")){const a=l(t,"options"),o=l(s,"options");a!==o&&e.options.set(o)}if(y(s,"point")){const a=l(s,"point"),o=l(t,"point"),g=l(s,"locateOptions");a!==o&&e.moveTo(a,g)}P(e,c,n),v(u,r,e)}static unmountObject(e,t){const{instanceRef:s,_events:n}=d(t);e!==null&&(Object.keys(n).forEach(r=>N(e,r,n[r])),v(s))}}class U extends f.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const e=U.mountControl(this.props.ymaps.control[this.props.name],this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){this.instance!==null&&U.updateControl(this.instance,e,this.props)}componentWillUnmount(){U.unmountControl(this.instance,this.props)}render(){return f.createElement(K.Provider,{value:this.state.instance},this.props.children)}static mountControl(e,t){const{instanceRef:s,parent:n,lazy:r,_events:c}=d(t),u=new e({data:l(t,"data"),options:l(t,"options"),state:l(t,"state"),mapTypes:l(t,"mapTypes"),lazy:r});if(Object.keys(c).forEach(a=>R(u,a,c[a])),n&&n.controls&&typeof n.controls.add=="function")n.controls.add(u);else{if(!n||!n.add||typeof n.add!="function")throw new Error(`No parent found to mount ${t.name}`);n.add(u)}return v(null,s,u),u}static updateControl(e,t,s){const{_events:n,instanceRef:r}=d(s),{_events:c,instanceRef:u}=d(t);if(y(s,"options")){const a=l(t,"options"),o=l(s,"options");a!==o&&e.options.set(o)}if(y(s,"data")){const a=l(t,"data"),o=l(s,"data");a!==o&&e.data.set(o)}if(y(s,"state")){const a=l(t,"state"),o=l(s,"state");a!==o&&e.state.set(o)}if(y(s,"mapTypes")){const a=l(t,"mapTypes"),o=l(s,"mapTypes");a!==o&&(e.removeAllMapTypes(),o.forEach(g=>e.addMapType(g)))}P(e,c,n),v(u,r,e)}static unmountControl(e,t){const{instanceRef:s,parent:n,_events:r}=d(t);e!==null&&(Object.keys(r).forEach(c=>N(e,c,r[c])),n.controls&&typeof n.controls.remove=="function"?n.controls.remove(e):n.remove&&typeof n.remove=="function"&&n.remove(e),v(s))}}class G extends f.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const e=G.mountObject(this.props.ymaps.Clusterer,this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){this.state.instance!==null&&G.updateObject(this.instance,e,this.props)}componentWillUnmount(){G.unmountObject(this.instance,this.props)}render(){return f.createElement(K.Provider,{value:this.state.instance},this.props.children)}static mountObject(e,t){const{instanceRef:s,parent:n,_events:r}=d(t),c=new e(l(t,"options"));if(Object.keys(r).forEach(u=>R(c,u,r[u])),n.geoObjects&&typeof n.geoObjects.add=="function")n.geoObjects.add(c);else{if(!n.add||typeof n.add!="function")throw new Error("No parent found to mount Clusterer");n.add(c)}return v(null,s,c),c}static updateObject(e,t,s){const{_events:n,instanceRef:r}=d(s),{_events:c,instanceRef:u}=d(t);if(y(s,"options")){const a=l(t,"options"),o=l(s,"options");a!==o&&e.options.set(o)}P(e,c,n),v(u,r,e)}static unmountObject(e,t){const{instanceRef:s,parent:n,_events:r}=d(t);e!==null&&(Object.keys(r).forEach(c=>N(e,c,r[c])),n.geoObjects&&typeof n.geoObjects.remove=="function"?n.geoObjects.remove(e):n.remove&&typeof n.remove=="function"&&n.remove(e),v(s))}}class B extends f.Component{constructor(){super(),this.state={instance:null}}componentDidMount(){const e=B.mountObject(this.props.ymaps.ObjectManager,this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){this.instance!==null&&B.updateObject(this.instance,e,this.props)}componentWillUnmount(){B.unmountObject(this.instance,this.props)}render(){return null}static mountObject(e,t){const{instanceRef:s,parent:n,_events:r}=d(t),c=l(t,"options",{}),u=l(t,"features",{}),a=l(t,"filter",null),o=l(t,"objects",{}),g=l(t,"clusters",{}),b=new e(c);if(b.add(u||[]),b.setFilter(a),b.objects.options.set(o),b.clusters.options.set(g),Object.keys(r).forEach(j=>R(b,j,r[j])),n.geoObjects&&typeof n.geoObjects.add=="function")n.geoObjects.add(b);else{if(!n.add||typeof n.add!="function")throw new Error("No parent found to mount ObjectManager");n.add(b)}return v(null,s,b),b}static updateObject(e,t,s){const{_events:n,instanceRef:r}=d(s),{_events:c,instanceRef:u}=d(t);if(y(s,"options")){const a=l(t,"options"),o=l(s,"options");a!==o&&e.options.set(o)}if(y(s,"objects")){const a=l(t,"objects"),o=l(s,"objects");a!==o&&e.objects.options.set(o)}if(y(s,"clusters")){const a=l(t,"clusters"),o=l(s,"clusters");a!==o&&e.clusters.options.set(o)}if(y(s,"filter")){const a=l(t,"filter"),o=l(s,"filter");a!==o&&e.setFilter(o)}if(y(s,"features")){const a=l(t,"features"),o=l(s,"features");a!==o&&(e.remove(a),e.add(o))}P(e,c,n),v(u,r,e)}static unmountObject(e,t){const{instanceRef:s,parent:n,_events:r}=d(t);e!==null&&(Object.keys(r).forEach(c=>N(e,c,r[c])),n.geoObjects&&typeof n.geoObjects.remove=="function"?n.geoObjects.remove(e):n.remove&&typeof n.remove=="function"&&n.remove(e),v(s))}}class D extends f.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const{name:e,ymaps:t,dangerZone:s}=this.props,n=D.mountObject(s&&typeof s.modifyConstructor=="function"?s.modifyConstructor(t[e]):t[e],this.props);this.instance=n,this.setState({instance:n})}componentDidUpdate(e){this.instance!==null&&D.updateObject(this.instance,e,this.props)}componentWillUnmount(){D.unmountObject(this.instance,this.props)}render(){return null}static mountObject(e,t){const{instanceRef:s,parent:n,_events:r}=d(t),c=new e(l(t,"geometry"),l(t,"properties"),l(t,"options"));if(Object.keys(r).forEach(u=>R(c,u,r[u])),n&&n.geoObjects&&typeof n.geoObjects.add=="function")n.geoObjects.add(c);else{if(!n||!n.add||typeof n.add!="function")throw new Error(`No parent found to mount ${t.name}`);n.add(c)}return v(null,s,c),c}static updateObject(e,t,s){const{_events:n,instanceRef:r}=d(s),{_events:c,instanceRef:u}=d(t);if(y(s,"geometry")){const a=l(t,"geometry",{}),o=l(s,"geometry",{});Array.isArray(o)&&o!==a?Array.isArray(o[0])&&typeof o[1]=="number"?(e.geometry.setCoordinates(o[0]),e.geometry.setRadius(o[1])):e.geometry.setCoordinates(o):typeof o=="object"&&(o.coordinates!==a.coordinates&&e.geometry.setCoordinates(o.coordinates),o.radius!==a.radius&&e.geometry.setRadius(o.radius))}if(y(s,"properties")){const a=l(t,"properties"),o=l(s,"properties");a!==o&&e.properties.set(o)}if(y(s,"options")){const a=l(t,"options"),o=l(s,"options");a!==o&&e.options.set(o)}P(e,c,n),v(u,r,e)}static unmountObject(e,t){const{instanceRef:s,parent:n,_events:r}=d(t);e!==null&&(Object.keys(r).forEach(c=>N(e,c,r[c])),n.geoObjects&&typeof n.geoObjects.remove=="function"?n.geoObjects.remove(e):n.remove&&typeof n.remove=="function"&&n.remove(e),v(s))}}var oe=fe(Me(ue(i=>f.createElement(D,A({},i,{name:"Placemark"})),!0,["Placemark"])));const Be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAYAAADOMhxqAAAAAXNSR0IArs4c6QAAAZtJREFUOE+V079rFUEQwPHPXDAqJgpKiCKoKGKKKCL+QGzs5Floq00KKy3F1t5GLGwsBAVt1EZsBP8BGysJIaJFEhAkKCkkQhKTN3L37oJ5+J66sMXuzXd35jt74T9H/E/8Jk4HxRPaE/8IfipvuKzQ0na9gQZorfFa+TVdw2NDRix61KS0hJe4WkLBcorBMrpCKDCP8x1g0JgV05jCePAxOVzD35K7wh2pWC86eJVcwsp29nznobB1c7q5LD6QTzHRbWlVGIis8mhJbyKspiiM5LCvFruBcWGyBspi5qT9xCI5XKfYJTRMS2PNbkeUW7j3Z4DdwZfKz/oYHWL+Ry+g1LpW5d3RuiGu19P4TOytgZ+V+G6yq5I57Ks7vYBdfwOWm1ODmeRgXyDIrI8PppLxfsBJvKtmOCW9x/F+wNvgbNq5g4VZlPNEP6B0OYljeI5DKG/d6Lez3HKApZnaSmmnFdxOzvUAivuifUE6UgcM4QUu9gBiljxT/yxVTMGDNjd6AZPk0d+bOMCVNZ71AEa3NY+sCUii7Euz/gWH83ELgnv1NgAAAABJRU5ErkJggg==",he=({className:i,type:e,center:t,points:s})=>(h.useEffect(()=>{},[t]),p.jsx(Ue,{query:{lang:"en_US"},children:p.jsxs(me,{className:i,state:{center:[t.latitude,t.longitude],zoom:12.5,controls:["zoomControl","fullscreenControl"]},modules:["control.ZoomControl","control.FullscreenControl"],options:{autoFitToViewport:"always"},children:[p.jsx(oe,{id:"self",geometry:[t.latitude,t.longitude],options:e==="self"?{iconLayout:"default#image",iconImageClipRect:[[0,0],[12,24]],iconImageHref:Be,iconImageSize:[12,24],iconImageOffset:[-6,-12]}:{iconColor:"red"}}),s&&(s==null?void 0:s.length)>0&&s.map(n=>p.jsx(oe,{id:"taskNo"+n.taskId,geometry:[n.latitude,n.longitude]},n.taskId))]})})),We=Object.freeze(Object.defineProperty({__proto__:null,MapContainerYandex:he},Symbol.toStringTag,{value:"Module"})),Fe=()=>{var n,r,c,u,a;const i=Oe(),[e,t]=h.useState({available:!1,latLong:{latitude:"",longitude:""},address:{formattedAdress:"",country:"",city:"",street:"",house:""}}),s=()=>{i(Ee(e))};return p.jsxs(ie,{className:"overflow-visible bg-[--tg-theme-bg-color] mt-4",children:[p.jsxs("div",{className:"flex flex-col gap-4 p-4 text-center",children:[p.jsx(H,{children:"To provide accurate information we need your geolocation."}),p.jsx(xe,{children:"We cannot automatically determine your location, so please let us know where you are"})]}),p.jsx(Ie,{geoposition:e,setGeoposition:t}),e.available&&p.jsxs("div",{className:"flex flex-col gap-4",children:[p.jsx(H,{children:"Chosen geolocation"}),p.jsxs("span",{children:["Address: ",(n=e.address)==null?void 0:n.formattedAdress]}),p.jsxs("span",{children:["Latitude, Longitude:"," ",((r=e.latLong)==null?void 0:r.latitude)+", "+((c=e.latLong)==null?void 0:c.longitude)]}),p.jsx(he,{type:"self",className:"p-2 w-full h-64 self-center",center:{latitude:Number((u=e.latLong)==null?void 0:u.latitude),longitude:Number((a=e.latLong)==null?void 0:a.longitude)}}),p.jsx(Ce,{onClick:s,children:"Confirm"})]})]})};export{Te as F,Fe as G,he as M,ke as S,_e as a,Ie as b,We as c};

import{r as g,t as d,j as T}from"./index-BZro2TiA.js";function E(){return E=Object.assign?Object.assign.bind():function(p){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(p[n]=e[n])}return p},E.apply(this,arguments)}const X=(p,t)=>{const e={};for(const n in p)t.indexOf(n)===-1&&(e[n]=p[n]);return e},H=d.createContext(null),q=d.createContext(null),ot=p=>t=>d.createElement(q.Consumer,null,e=>d.createElement(p,E({parent:e},t))),rt=(p=[])=>{const[t,e]=g.useState(!1),n=g.useRef(p),s=(()=>{const a=g.useContext(H);if(a===null)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that hook useYMaps is inside <YMaps /> provider");return a})(),c=s.getApi();return g.useEffect(()=>{s.load().then(()=>Promise.all(n.current.map(s.loadModule))).then(()=>e(!0))},[]),t&&c?c:null},it=()=>{},at=["onLoad","onError","modules","apiLoader"];function K(p,t=!1,e=[]){return n=>{const{width:s,height:c,modules:a=[],onLoad:u=it}=n,r=rt(e.concat(a)),o=!t||!!r,h=X(n,at);return g.useEffect(()=>r?u(r):void 0,[r]),o?d.createElement(p,E({ymaps:r},h)):d.createElement("div",{style:{width:s,height:c}})}}const ct=typeof window<"u",J={lang:"ru_RU",load:"",ns:"",mode:"release"},pt=p=>{const{version:t="2.1",enterprise:e=!1,query:n={lang:"ru_RU",load:"",ns:""},preload:s=!1,children:c}=p,a=g.useRef((u=>{const{query:r=J}=u,o=Date.now().toString(32),h=r.ns||"",y="__yandex-maps-api-onload__$$"+o,b="__yandex-maps-api-onerror__$$"+o,v=ct?window:{},A={};let _;const V=()=>h?v[h]:_,Y=()=>{delete v[y],delete v[b]};return{load:()=>{if(V())return Promise.resolve(_);if(A[h])return A[h];const M={onload:y,onerror:b,...J,...r},L=Object.keys(M).map(C=>`${C}=${M[C]}`).join("&"),I=[`https://${u.enterprise?"enterprise.":""}api-maps.yandex.ru`,u.version,"?"+L].join("/");return A[h]=new Promise((C,Z)=>{v[y]=j=>{Y(),j.ready(()=>{_=j,C(j)})},v[b]=j=>{Y(),Z(j)},(j=>new Promise((P,F)=>{const O=document.createElement("script");O.type="text/javascript",O.onload=P,O.onerror=F,O.src=j,O.async=!0,document.head.appendChild(O)}))(I).catch(v[b])}),A[h]},getApi:V,loadModule:M=>new Promise((L,I)=>{_.modules.require(M).done(C=>{C.forEach(Z=>{((j,P,F,O=!1)=>{const B=typeof P=="string"?P.split("."):P.slice();let S,x=j;for(;B.length>1;)S=B.shift(),x[S]||(x[S]={}),x=x[S];const G=B[0];x[G]=O===!0&&x[G]||F})(_,M,Z,!0)}),L(_)},I)})}})({version:t,enterprise:e,query:n,preload:s}));return g.useEffect(()=>{s&&a.current.load()},[a.current]),d.createElement(H.Provider,{value:a.current},c)},Q=/^on(?=[A-Z])/;function l(p){return Object.keys(p).reduce((t,e)=>{if(Q.test(e)){const n=e.replace(Q,"").toLowerCase();t._events[n]=p[e]}else t[e]=p[e];return t},{_events:{}})}function w(p,t,e){typeof e=="function"&&p.events.add(t,e)}function R(p,t,e){typeof e=="function"&&p.events.remove(t,e)}function k(p,t,e){Object.keys(Object.assign({},t,e)).forEach(n=>{t[n]!==e[n]&&(R(p,n,t[n]),w(p,n,e[n]))})}const tt=p=>"default"+p.charAt(0).toUpperCase()+p.slice(1);function m(p,t){return p[t]!==void 0||p[tt(t)]===void 0}function i(p,t,e){return(m(p,t)?p[t]:p[tt(t)])||e}function f(p,t,e=null){if(p!==t){if(p&&("current"in p?p.current=null:typeof p=="function"&&p(null)),!t)return;"current"in t?t.current=e:typeof t=="function"&&t(e)}}function et(p){const{width:t,height:e,style:n,className:s}=p;return n!==void 0||s!==void 0?Object.assign({},n&&{style:n},s&&{className:s}):{style:{width:t,height:e}}}class ut extends d.Component{constructor(t){super(t),this.state={error:null,errorInfo:null}}componentDidCatch(t,e){const{onError:n=()=>{}}=this.props;n(t),this.setState({error:t,errorInfo:e})}render(){return this.state.error?null:this.props.children}}const nt=p=>({onError:t,...e})=>d.createElement(ut,{onError:t},d.createElement(p,e));class D extends d.Component{constructor(){super(),this.instance=null,this.state={instance:null},this._parentElement=null,this._getRef=t=>{this._parentElement=t}}componentDidMount(){this.instance=D.mountObject(this._parentElement,this.props.ymaps.Map,this.props),this.setState({instance:this.instance})}componentDidUpdate(t){this.instance!==null&&D.updateObject(this.instance,t,this.props)}componentWillUnmount(){D.unmountObject(this.instance,this.props)}render(){const t=et(this.props),e=l(this.props),n=X(e,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return d.createElement(q.Provider,{value:this.state.instance},d.createElement("div",E({ref:this._getRef},t,n),this.props.children))}static mountObject(t,e,n){const{instanceRef:s,_events:c}=l(n),a=new e(t,i(n,"state"),i(n,"options"));return Object.keys(c).forEach(u=>w(a,u,c[u])),f(null,s,a),a}static updateObject(t,e,n){const{_events:s,instanceRef:c}=l(n),{_events:a,instanceRef:u}=l(e);if(m(n,"state")){const r=i(e,"state",{}),o=i(n,"state",{});r.type!==o.type&&t.setType(o.type),r.behaviors!==o.behaviors&&(r.behaviors&&t.behaviors.disable(r.behaviors),o.behaviors&&t.behaviors.enable(o.behaviors)),o.zoom&&r.zoom!==o.zoom&&t.setZoom(o.zoom),o.center&&r.center!==o.center&&t.setCenter(o.center),o.bounds&&r.bounds!==o.bounds&&t.setBounds(o.bounds)}if(m(n,"options")){const r=i(e,"options"),o=i(n,"options",{});r!==o&&t.options.set(o)}i(e,"width")===i(n,"width")&&i(e,"height")===i(n,"height")||t.container.fitToViewport(),k(t,a,s),f(u,c,t)}static unmountObject(t,e){const{instanceRef:n,_events:s}=l(e);t!==null&&(Object.keys(s).forEach(c=>R(t,c,s[c])),t.destroy(),f(n))}}const st=nt(K(D,!0,["Map"]));st.defaultProps={width:320,height:240};class $ extends d.Component{constructor(){super(),this.state={instance:null},this._parentElement=null,this._getRef=t=>{this._parentElement=t}}componentDidMount(){this._mounted=!0,this.props.ymaps.panorama.isSupported()&&$.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then(t=>this._mounted&&this.setState({instance:t}))}componentDidUpdate(t){this.state.instance!==null&&$.updateObject(this.state.instance,t,this.props)}componentWillUnmount(){this._mounted=!1,$.unmountObject(this.state.instance,this.props)}render(){const t=et(this.props);return d.createElement("div",E({ref:this._getRef},t))}static mountObject(t,e,n){const{instanceRef:s,_events:c}=l(n),a=i(n,"point"),u=i(n,"locateOptions"),r=i(n,"options");return new Promise((o,h)=>{e.locate(a,u).done(y=>{if(y.length>0){const b=new e.Player(t,y[0],r);f(null,s,b),Object.keys(c).forEach(v=>w(b,v,c[v])),o(b)}},h)})}static updateObject(t,e,n){const{_events:s,instanceRef:c}=l(n),{_events:a,instanceRef:u}=l(e);if(m(n,"options")){const r=i(e,"options"),o=i(n,"options");r!==o&&t.options.set(o)}if(m(n,"point")){const r=i(n,"point"),o=i(e,"point"),h=i(n,"locateOptions");r!==o&&t.moveTo(r,h)}k(t,a,s),f(u,c,t)}static unmountObject(t,e){const{instanceRef:n,_events:s}=l(e);t!==null&&(Object.keys(s).forEach(c=>R(t,c,s[c])),f(n))}}class N extends d.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const t=N.mountControl(this.props.ymaps.control[this.props.name],this.props);this.instance=t,this.setState({instance:t})}componentDidUpdate(t){this.instance!==null&&N.updateControl(this.instance,t,this.props)}componentWillUnmount(){N.unmountControl(this.instance,this.props)}render(){return d.createElement(q.Provider,{value:this.state.instance},this.props.children)}static mountControl(t,e){const{instanceRef:n,parent:s,lazy:c,_events:a}=l(e),u=new t({data:i(e,"data"),options:i(e,"options"),state:i(e,"state"),mapTypes:i(e,"mapTypes"),lazy:c});if(Object.keys(a).forEach(r=>w(u,r,a[r])),s&&s.controls&&typeof s.controls.add=="function")s.controls.add(u);else{if(!s||!s.add||typeof s.add!="function")throw new Error(`No parent found to mount ${e.name}`);s.add(u)}return f(null,n,u),u}static updateControl(t,e,n){const{_events:s,instanceRef:c}=l(n),{_events:a,instanceRef:u}=l(e);if(m(n,"options")){const r=i(e,"options"),o=i(n,"options");r!==o&&t.options.set(o)}if(m(n,"data")){const r=i(e,"data"),o=i(n,"data");r!==o&&t.data.set(o)}if(m(n,"state")){const r=i(e,"state"),o=i(n,"state");r!==o&&t.state.set(o)}if(m(n,"mapTypes")){const r=i(e,"mapTypes"),o=i(n,"mapTypes");r!==o&&(t.removeAllMapTypes(),o.forEach(h=>t.addMapType(h)))}k(t,a,s),f(u,c,t)}static unmountControl(t,e){const{instanceRef:n,parent:s,_events:c}=l(e);t!==null&&(Object.keys(c).forEach(a=>R(t,a,c[a])),s.controls&&typeof s.controls.remove=="function"?s.controls.remove(t):s.remove&&typeof s.remove=="function"&&s.remove(t),f(n))}}class z extends d.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const t=z.mountObject(this.props.ymaps.Clusterer,this.props);this.instance=t,this.setState({instance:t})}componentDidUpdate(t){this.state.instance!==null&&z.updateObject(this.instance,t,this.props)}componentWillUnmount(){z.unmountObject(this.instance,this.props)}render(){return d.createElement(q.Provider,{value:this.state.instance},this.props.children)}static mountObject(t,e){const{instanceRef:n,parent:s,_events:c}=l(e),a=new t(i(e,"options"));if(Object.keys(c).forEach(u=>w(a,u,c[u])),s.geoObjects&&typeof s.geoObjects.add=="function")s.geoObjects.add(a);else{if(!s.add||typeof s.add!="function")throw new Error("No parent found to mount Clusterer");s.add(a)}return f(null,n,a),a}static updateObject(t,e,n){const{_events:s,instanceRef:c}=l(n),{_events:a,instanceRef:u}=l(e);if(m(n,"options")){const r=i(e,"options"),o=i(n,"options");r!==o&&t.options.set(o)}k(t,a,s),f(u,c,t)}static unmountObject(t,e){const{instanceRef:n,parent:s,_events:c}=l(e);t!==null&&(Object.keys(c).forEach(a=>R(t,a,c[a])),s.geoObjects&&typeof s.geoObjects.remove=="function"?s.geoObjects.remove(t):s.remove&&typeof s.remove=="function"&&s.remove(t),f(n))}}class W extends d.Component{constructor(){super(),this.state={instance:null}}componentDidMount(){const t=W.mountObject(this.props.ymaps.ObjectManager,this.props);this.instance=t,this.setState({instance:t})}componentDidUpdate(t){this.instance!==null&&W.updateObject(this.instance,t,this.props)}componentWillUnmount(){W.unmountObject(this.instance,this.props)}render(){return null}static mountObject(t,e){const{instanceRef:n,parent:s,_events:c}=l(e),a=i(e,"options",{}),u=i(e,"features",{}),r=i(e,"filter",null),o=i(e,"objects",{}),h=i(e,"clusters",{}),y=new t(a);if(y.add(u||[]),y.setFilter(r),y.objects.options.set(o),y.clusters.options.set(h),Object.keys(c).forEach(b=>w(y,b,c[b])),s.geoObjects&&typeof s.geoObjects.add=="function")s.geoObjects.add(y);else{if(!s.add||typeof s.add!="function")throw new Error("No parent found to mount ObjectManager");s.add(y)}return f(null,n,y),y}static updateObject(t,e,n){const{_events:s,instanceRef:c}=l(n),{_events:a,instanceRef:u}=l(e);if(m(n,"options")){const r=i(e,"options"),o=i(n,"options");r!==o&&t.options.set(o)}if(m(n,"objects")){const r=i(e,"objects"),o=i(n,"objects");r!==o&&t.objects.options.set(o)}if(m(n,"clusters")){const r=i(e,"clusters"),o=i(n,"clusters");r!==o&&t.clusters.options.set(o)}if(m(n,"filter")){const r=i(e,"filter"),o=i(n,"filter");r!==o&&t.setFilter(o)}if(m(n,"features")){const r=i(e,"features"),o=i(n,"features");r!==o&&(t.remove(r),t.add(o))}k(t,a,s),f(u,c,t)}static unmountObject(t,e){const{instanceRef:n,parent:s,_events:c}=l(e);t!==null&&(Object.keys(c).forEach(a=>R(t,a,c[a])),s.geoObjects&&typeof s.geoObjects.remove=="function"?s.geoObjects.remove(t):s.remove&&typeof s.remove=="function"&&s.remove(t),f(n))}}class U extends d.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const{name:t,ymaps:e,dangerZone:n}=this.props,s=U.mountObject(n&&typeof n.modifyConstructor=="function"?n.modifyConstructor(e[t]):e[t],this.props);this.instance=s,this.setState({instance:s})}componentDidUpdate(t){this.instance!==null&&U.updateObject(this.instance,t,this.props)}componentWillUnmount(){U.unmountObject(this.instance,this.props)}render(){return null}static mountObject(t,e){const{instanceRef:n,parent:s,_events:c}=l(e),a=new t(i(e,"geometry"),i(e,"properties"),i(e,"options"));if(Object.keys(c).forEach(u=>w(a,u,c[u])),s&&s.geoObjects&&typeof s.geoObjects.add=="function")s.geoObjects.add(a);else{if(!s||!s.add||typeof s.add!="function")throw new Error(`No parent found to mount ${e.name}`);s.add(a)}return f(null,n,a),a}static updateObject(t,e,n){const{_events:s,instanceRef:c}=l(n),{_events:a,instanceRef:u}=l(e);if(m(n,"geometry")){const r=i(e,"geometry",{}),o=i(n,"geometry",{});Array.isArray(o)&&o!==r?Array.isArray(o[0])&&typeof o[1]=="number"?(t.geometry.setCoordinates(o[0]),t.geometry.setRadius(o[1])):t.geometry.setCoordinates(o):typeof o=="object"&&(o.coordinates!==r.coordinates&&t.geometry.setCoordinates(o.coordinates),o.radius!==r.radius&&t.geometry.setRadius(o.radius))}if(m(n,"properties")){const r=i(e,"properties"),o=i(n,"properties");r!==o&&t.properties.set(o)}if(m(n,"options")){const r=i(e,"options"),o=i(n,"options");r!==o&&t.options.set(o)}k(t,a,s),f(u,c,t)}static unmountObject(t,e){const{instanceRef:n,parent:s,_events:c}=l(e);t!==null&&(Object.keys(c).forEach(a=>R(t,a,c[a])),s.geoObjects&&typeof s.geoObjects.remove=="function"?s.geoObjects.remove(t):s.remove&&typeof s.remove=="function"&&s.remove(t),f(n))}}var lt=nt(ot(K(p=>d.createElement(U,E({},p,{name:"Placemark"})),!0,["Placemark"])));const mt=({latitude:p,longitude:t})=>T.jsx(pt,{children:T.jsx("div",{children:T.jsx(st,{className:"p-4 w-full h-96 overflow-hidden",defaultState:{center:[p,t],zoom:14},children:T.jsx(lt,{geometry:[p,t]})})})});export{mt as MapContainer};

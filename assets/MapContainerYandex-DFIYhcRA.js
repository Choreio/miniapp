import{r as E,t as d,j as M}from"./index-CRP1Ks_-.js";function g(){return g=Object.assign?Object.assign.bind():function(c){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(c[n]=e[n])}return c},g.apply(this,arguments)}const X=(c,t)=>{const e={};for(const n in c)t.indexOf(n)===-1&&(e[n]=c[n]);return e},tt=d.createContext(null),S=d.createContext(null),et=c=>t=>d.createElement(S.Consumer,null,e=>d.createElement(c,g({parent:e},t))),rt=(c=[])=>{const[t,e]=E.useState(!1),n=E.useRef(c),o=(()=>{const a=E.useContext(tt);if(a===null)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that hook useYMaps is inside <YMaps /> provider");return a})(),p=o.getApi();return E.useEffect(()=>{o.load().then(()=>Promise.all(n.current.map(o.loadModule))).then(()=>e(!0))},[]),t&&p?p:null},it=()=>{},at=["onLoad","onError","modules","apiLoader"];function F(c,t=!1,e=[]){return n=>{const{width:o,height:p,modules:a=[],onLoad:u=it}=n,r=rt(e.concat(a)),s=!t||!!r,h=X(n,at);return E.useEffect(()=>r?u(r):void 0,[r]),s?d.createElement(c,g({ymaps:r},h)):d.createElement("div",{style:{width:o,height:p}})}}const ct=typeof window<"u",Q={lang:"ru_RU",load:"",ns:"",mode:"release"},pt=c=>{const{version:t="2.1",enterprise:e=!1,query:n={lang:"ru_RU",load:"",ns:""},preload:o=!1,children:p}=c,a=E.useRef((u=>{const{query:r=Q}=u,s=Date.now().toString(32),h=r.ns||"",y="__yandex-maps-api-onload__$$"+s,b="__yandex-maps-api-onerror__$$"+s,v=ct?window:{},z={};let R;const q=()=>h?v[h]:R,Y=()=>{delete v[y],delete v[b]};return{load:()=>{if(q())return Promise.resolve(R);if(z[h])return z[h];const P={onload:y,onerror:b,...Q,...r},W=Object.keys(P).map(A=>`${A}=${P[A]}`).join("&"),B=[`https://${u.enterprise?"enterprise.":""}api-maps.yandex.ru`,u.version,"?"+W].join("/");return z[h]=new Promise((A,J)=>{v[y]=j=>{Y(),j.ready(()=>{R=j,A(j)})},v[b]=j=>{Y(),J(j)},(j=>new Promise((D,V)=>{const O=document.createElement("script");O.type="text/javascript",O.onload=D,O.onerror=V,O.src=j,O.async=!0,document.head.appendChild(O)}))(B).catch(v[b])}),z[h]},getApi:q,loadModule:P=>new Promise((W,B)=>{R.modules.require(P).done(A=>{A.forEach(J=>{((j,D,V,O=!1)=>{const Z=typeof D=="string"?D.split("."):D.slice();let N,x=j;for(;Z.length>1;)N=Z.shift(),x[N]||(x[N]={}),x=x[N];const $=Z[0];x[$]=O===!0&&x[$]||V})(R,P,J,!0)}),W(R)},B)})}})({version:t,enterprise:e,query:n,preload:o}));return E.useEffect(()=>{o&&a.current.load()},[a.current]),d.createElement(tt.Provider,{value:a.current},p)},H=/^on(?=[A-Z])/;function l(c){return Object.keys(c).reduce((t,e)=>{if(H.test(e)){const n=e.replace(H,"").toLowerCase();t._events[n]=c[e]}else t[e]=c[e];return t},{_events:{}})}function w(c,t,e){typeof e=="function"&&c.events.add(t,e)}function C(c,t,e){typeof e=="function"&&c.events.remove(t,e)}function k(c,t,e){Object.keys(Object.assign({},t,e)).forEach(n=>{t[n]!==e[n]&&(C(c,n,t[n]),w(c,n,e[n]))})}const nt=c=>"default"+c.charAt(0).toUpperCase()+c.slice(1);function m(c,t){return c[t]!==void 0||c[nt(t)]===void 0}function i(c,t,e){return(m(c,t)?c[t]:c[nt(t)])||e}function f(c,t,e=null){if(c!==t){if(c&&("current"in c?c.current=null:typeof c=="function"&&c(null)),!t)return;"current"in t?t.current=e:typeof t=="function"&&t(e)}}function ot(c){const{width:t,height:e,style:n,className:o}=c;return n!==void 0||o!==void 0?Object.assign({},n&&{style:n},o&&{className:o}):{style:{width:t,height:e}}}class ut extends d.Component{constructor(t){super(t),this.state={error:null,errorInfo:null}}componentDidCatch(t,e){const{onError:n=()=>{}}=this.props;n(t),this.setState({error:t,errorInfo:e})}render(){return this.state.error?null:this.props.children}}const G=c=>({onError:t,...e})=>d.createElement(ut,{onError:t},d.createElement(c,e));class U extends d.Component{constructor(){super(),this.instance=null,this.state={instance:null},this._parentElement=null,this._getRef=t=>{this._parentElement=t}}componentDidMount(){this.instance=U.mountObject(this._parentElement,this.props.ymaps.Map,this.props),this.setState({instance:this.instance})}componentDidUpdate(t){this.instance!==null&&U.updateObject(this.instance,t,this.props)}componentWillUnmount(){U.unmountObject(this.instance,this.props)}render(){const t=ot(this.props),e=l(this.props),n=X(e,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return d.createElement(S.Provider,{value:this.state.instance},d.createElement("div",g({ref:this._getRef},t,n),this.props.children))}static mountObject(t,e,n){const{instanceRef:o,_events:p}=l(n),a=new e(t,i(n,"state"),i(n,"options"));return Object.keys(p).forEach(u=>w(a,u,p[u])),f(null,o,a),a}static updateObject(t,e,n){const{_events:o,instanceRef:p}=l(n),{_events:a,instanceRef:u}=l(e);if(m(n,"state")){const r=i(e,"state",{}),s=i(n,"state",{});r.type!==s.type&&t.setType(s.type),r.behaviors!==s.behaviors&&(r.behaviors&&t.behaviors.disable(r.behaviors),s.behaviors&&t.behaviors.enable(s.behaviors)),s.zoom&&r.zoom!==s.zoom&&t.setZoom(s.zoom),s.center&&r.center!==s.center&&t.setCenter(s.center),s.bounds&&r.bounds!==s.bounds&&t.setBounds(s.bounds)}if(m(n,"options")){const r=i(e,"options"),s=i(n,"options",{});r!==s&&t.options.set(s)}i(e,"width")===i(n,"width")&&i(e,"height")===i(n,"height")||t.container.fitToViewport(),k(t,a,o),f(u,p,t)}static unmountObject(t,e){const{instanceRef:n,_events:o}=l(e);t!==null&&(Object.keys(o).forEach(p=>C(t,p,o[p])),t.destroy(),f(n))}}const st=G(F(U,!0,["Map"]));st.defaultProps={width:320,height:240};class K extends d.Component{constructor(){super(),this.state={instance:null},this._parentElement=null,this._getRef=t=>{this._parentElement=t}}componentDidMount(){this._mounted=!0,this.props.ymaps.panorama.isSupported()&&K.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then(t=>this._mounted&&this.setState({instance:t}))}componentDidUpdate(t){this.state.instance!==null&&K.updateObject(this.state.instance,t,this.props)}componentWillUnmount(){this._mounted=!1,K.unmountObject(this.state.instance,this.props)}render(){const t=ot(this.props);return d.createElement("div",g({ref:this._getRef},t))}static mountObject(t,e,n){const{instanceRef:o,_events:p}=l(n),a=i(n,"point"),u=i(n,"locateOptions"),r=i(n,"options");return new Promise((s,h)=>{e.locate(a,u).done(y=>{if(y.length>0){const b=new e.Player(t,y[0],r);f(null,o,b),Object.keys(p).forEach(v=>w(b,v,p[v])),s(b)}},h)})}static updateObject(t,e,n){const{_events:o,instanceRef:p}=l(n),{_events:a,instanceRef:u}=l(e);if(m(n,"options")){const r=i(e,"options"),s=i(n,"options");r!==s&&t.options.set(s)}if(m(n,"point")){const r=i(n,"point"),s=i(e,"point"),h=i(n,"locateOptions");r!==s&&t.moveTo(r,h)}k(t,a,o),f(u,p,t)}static unmountObject(t,e){const{instanceRef:n,_events:o}=l(e);t!==null&&(Object.keys(o).forEach(p=>C(t,p,o[p])),f(n))}}class T extends d.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const t=T.mountControl(this.props.ymaps.control[this.props.name],this.props);this.instance=t,this.setState({instance:t})}componentDidUpdate(t){this.instance!==null&&T.updateControl(this.instance,t,this.props)}componentWillUnmount(){T.unmountControl(this.instance,this.props)}render(){return d.createElement(S.Provider,{value:this.state.instance},this.props.children)}static mountControl(t,e){const{instanceRef:n,parent:o,lazy:p,_events:a}=l(e),u=new t({data:i(e,"data"),options:i(e,"options"),state:i(e,"state"),mapTypes:i(e,"mapTypes"),lazy:p});if(Object.keys(a).forEach(r=>w(u,r,a[r])),o&&o.controls&&typeof o.controls.add=="function")o.controls.add(u);else{if(!o||!o.add||typeof o.add!="function")throw new Error(`No parent found to mount ${e.name}`);o.add(u)}return f(null,n,u),u}static updateControl(t,e,n){const{_events:o,instanceRef:p}=l(n),{_events:a,instanceRef:u}=l(e);if(m(n,"options")){const r=i(e,"options"),s=i(n,"options");r!==s&&t.options.set(s)}if(m(n,"data")){const r=i(e,"data"),s=i(n,"data");r!==s&&t.data.set(s)}if(m(n,"state")){const r=i(e,"state"),s=i(n,"state");r!==s&&t.state.set(s)}if(m(n,"mapTypes")){const r=i(e,"mapTypes"),s=i(n,"mapTypes");r!==s&&(t.removeAllMapTypes(),s.forEach(h=>t.addMapType(h)))}k(t,a,o),f(u,p,t)}static unmountControl(t,e){const{instanceRef:n,parent:o,_events:p}=l(e);t!==null&&(Object.keys(p).forEach(a=>C(t,a,p[a])),o.controls&&typeof o.controls.remove=="function"?o.controls.remove(t):o.remove&&typeof o.remove=="function"&&o.remove(t),f(n))}}class I extends d.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const t=I.mountObject(this.props.ymaps.Clusterer,this.props);this.instance=t,this.setState({instance:t})}componentDidUpdate(t){this.state.instance!==null&&I.updateObject(this.instance,t,this.props)}componentWillUnmount(){I.unmountObject(this.instance,this.props)}render(){return d.createElement(S.Provider,{value:this.state.instance},this.props.children)}static mountObject(t,e){const{instanceRef:n,parent:o,_events:p}=l(e),a=new t(i(e,"options"));if(Object.keys(p).forEach(u=>w(a,u,p[u])),o.geoObjects&&typeof o.geoObjects.add=="function")o.geoObjects.add(a);else{if(!o.add||typeof o.add!="function")throw new Error("No parent found to mount Clusterer");o.add(a)}return f(null,n,a),a}static updateObject(t,e,n){const{_events:o,instanceRef:p}=l(n),{_events:a,instanceRef:u}=l(e);if(m(n,"options")){const r=i(e,"options"),s=i(n,"options");r!==s&&t.options.set(s)}k(t,a,o),f(u,p,t)}static unmountObject(t,e){const{instanceRef:n,parent:o,_events:p}=l(e);t!==null&&(Object.keys(p).forEach(a=>C(t,a,p[a])),o.geoObjects&&typeof o.geoObjects.remove=="function"?o.geoObjects.remove(t):o.remove&&typeof o.remove=="function"&&o.remove(t),f(n))}}class L extends d.Component{constructor(){super(),this.state={instance:null}}componentDidMount(){const t=L.mountObject(this.props.ymaps.ObjectManager,this.props);this.instance=t,this.setState({instance:t})}componentDidUpdate(t){this.instance!==null&&L.updateObject(this.instance,t,this.props)}componentWillUnmount(){L.unmountObject(this.instance,this.props)}render(){return null}static mountObject(t,e){const{instanceRef:n,parent:o,_events:p}=l(e),a=i(e,"options",{}),u=i(e,"features",{}),r=i(e,"filter",null),s=i(e,"objects",{}),h=i(e,"clusters",{}),y=new t(a);if(y.add(u||[]),y.setFilter(r),y.objects.options.set(s),y.clusters.options.set(h),Object.keys(p).forEach(b=>w(y,b,p[b])),o.geoObjects&&typeof o.geoObjects.add=="function")o.geoObjects.add(y);else{if(!o.add||typeof o.add!="function")throw new Error("No parent found to mount ObjectManager");o.add(y)}return f(null,n,y),y}static updateObject(t,e,n){const{_events:o,instanceRef:p}=l(n),{_events:a,instanceRef:u}=l(e);if(m(n,"options")){const r=i(e,"options"),s=i(n,"options");r!==s&&t.options.set(s)}if(m(n,"objects")){const r=i(e,"objects"),s=i(n,"objects");r!==s&&t.objects.options.set(s)}if(m(n,"clusters")){const r=i(e,"clusters"),s=i(n,"clusters");r!==s&&t.clusters.options.set(s)}if(m(n,"filter")){const r=i(e,"filter"),s=i(n,"filter");r!==s&&t.setFilter(s)}if(m(n,"features")){const r=i(e,"features"),s=i(n,"features");r!==s&&(t.remove(r),t.add(s))}k(t,a,o),f(u,p,t)}static unmountObject(t,e){const{instanceRef:n,parent:o,_events:p}=l(e);t!==null&&(Object.keys(p).forEach(a=>C(t,a,p[a])),o.geoObjects&&typeof o.geoObjects.remove=="function"?o.geoObjects.remove(t):o.remove&&typeof o.remove=="function"&&o.remove(t),f(n))}}class _ extends d.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const{name:t,ymaps:e,dangerZone:n}=this.props,o=_.mountObject(n&&typeof n.modifyConstructor=="function"?n.modifyConstructor(e[t]):e[t],this.props);this.instance=o,this.setState({instance:o})}componentDidUpdate(t){this.instance!==null&&_.updateObject(this.instance,t,this.props)}componentWillUnmount(){_.unmountObject(this.instance,this.props)}render(){return null}static mountObject(t,e){const{instanceRef:n,parent:o,_events:p}=l(e),a=new t(i(e,"geometry"),i(e,"properties"),i(e,"options"));if(Object.keys(p).forEach(u=>w(a,u,p[u])),o&&o.geoObjects&&typeof o.geoObjects.add=="function")o.geoObjects.add(a);else{if(!o||!o.add||typeof o.add!="function")throw new Error(`No parent found to mount ${e.name}`);o.add(a)}return f(null,n,a),a}static updateObject(t,e,n){const{_events:o,instanceRef:p}=l(n),{_events:a,instanceRef:u}=l(e);if(m(n,"geometry")){const r=i(e,"geometry",{}),s=i(n,"geometry",{});Array.isArray(s)&&s!==r?Array.isArray(s[0])&&typeof s[1]=="number"?(t.geometry.setCoordinates(s[0]),t.geometry.setRadius(s[1])):t.geometry.setCoordinates(s):typeof s=="object"&&(s.coordinates!==r.coordinates&&t.geometry.setCoordinates(s.coordinates),s.radius!==r.radius&&t.geometry.setRadius(s.radius))}if(m(n,"properties")){const r=i(e,"properties"),s=i(n,"properties");r!==s&&t.properties.set(s)}if(m(n,"options")){const r=i(e,"options"),s=i(n,"options");r!==s&&t.options.set(s)}k(t,a,o),f(u,p,t)}static unmountObject(t,e){const{instanceRef:n,parent:o,_events:p}=l(e);t!==null&&(Object.keys(p).forEach(a=>C(t,a,p[a])),o.geoObjects&&typeof o.geoObjects.remove=="function"?o.geoObjects.remove(t):o.remove&&typeof o.remove=="function"&&o.remove(t),f(n))}}var lt=G(et(F(c=>d.createElement(_,g({},c,{name:"Circle"})),!0,["Circle"]))),dt=G(et(F(c=>d.createElement(_,g({},c,{name:"Placemark"})),!0,["Placemark"])));const mt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAYAAADOMhxqAAAAAXNSR0IArs4c6QAAAZtJREFUOE+V079rFUEQwPHPXDAqJgpKiCKoKGKKKCL+QGzs5Floq00KKy3F1t5GLGwsBAVt1EZsBP8BGysJIaJFEhAkKCkkQhKTN3L37oJ5+J66sMXuzXd35jt74T9H/E/8Jk4HxRPaE/8IfipvuKzQ0na9gQZorfFa+TVdw2NDRix61KS0hJe4WkLBcorBMrpCKDCP8x1g0JgV05jCePAxOVzD35K7wh2pWC86eJVcwsp29nznobB1c7q5LD6QTzHRbWlVGIis8mhJbyKspiiM5LCvFruBcWGyBspi5qT9xCI5XKfYJTRMS2PNbkeUW7j3Z4DdwZfKz/oYHWL+Ry+g1LpW5d3RuiGu19P4TOytgZ+V+G6yq5I57Ks7vYBdfwOWm1ODmeRgXyDIrI8PppLxfsBJvKtmOCW9x/F+wNvgbNq5g4VZlPNEP6B0OYljeI5DKG/d6Lez3HKApZnaSmmnFdxOzvUAivuifUE6UgcM4QUu9gBiljxT/yxVTMGDNjd6AZPk0d+bOMCVNZ71AEa3NY+sCUii7Euz/gWH83ELgnv1NgAAAABJRU5ErkJggg==",ht=({latitude:c,longitude:t,radius:e})=>M.jsx(pt,{children:M.jsx("div",{className:"p-2 w-full h-[--tg-viewport-width] overflow-hidden z-0",children:M.jsxs(st,{className:"flex w-full h-[--tg-viewport-width] overflow-hidden z-0",defaultState:{center:[c,t],zoom:12.5,controls:["zoomControl","fullscreenControl"]},modules:["control.ZoomControl","control.FullscreenControl"],options:{autoFitToViewport:"always"},children:[M.jsx(dt,{id:"self",geometry:[c,t],options:{iconLayout:"default#image",iconImageClipRect:[[0,0],[12,24]],iconImageHref:mt,iconImageSize:[12,24],iconImageOffset:[-6,-12]}}),M.jsx(lt,{geometry:[[c,t],e],options:{fillOpacity:.4,fillColor:"#dde6d5",strokeColor:"#a3b899"}})]})})});export{ht as MapContainerYandex};

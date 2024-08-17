import{r as O,R as d,j as N}from"./index-C7dcxcLS.js";function E(){return E=Object.assign?Object.assign.bind():function(p){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(p[n]=e[n])}return p},E.apply(this,arguments)}const H=(p,t)=>{const e={};for(const n in p)t.indexOf(n)===-1&&(e[n]=p[n]);return e},X=d.createContext(null),S=d.createContext(null),rt=p=>t=>d.createElement(S.Consumer,null,e=>d.createElement(p,E({parent:e},t))),it=(p=[])=>{const[t,e]=O.useState(!1),n=O.useRef(p),o=(()=>{const a=O.useContext(X);if(a===null)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that hook useYMaps is inside <YMaps /> provider");return a})(),c=o.getApi();return O.useEffect(()=>{o.load().then(()=>Promise.all(n.current.map(o.loadModule))).then(()=>e(!0))},[]),t&&c?c:null},at=()=>{},ct=["onLoad","onError","modules","apiLoader"];function tt(p,t=!1,e=[]){return n=>{const{width:o,height:c,modules:a=[],onLoad:u=at}=n,r=it(e.concat(a)),s=!t||!!r,h=H(n,ct);return O.useEffect(()=>r?u(r):void 0,[r]),s?d.createElement(p,E({ymaps:r},h)):d.createElement("div",{style:{width:o,height:c}})}}const pt=typeof window<"u",Y={lang:"ru_RU",load:"",ns:"",mode:"release"},ut=p=>{const{version:t="2.1",enterprise:e=!1,query:n={lang:"ru_RU",load:"",ns:""},preload:o=!1,children:c}=p,a=O.useRef((u=>{const{query:r=Y}=u,s=Date.now().toString(32),h=r.ns||"",y="__yandex-maps-api-onload__$$"+s,b="__yandex-maps-api-onerror__$$"+s,v=pt?window:{},U={};let w;const F=()=>h?v[h]:w,G=()=>{delete v[y],delete v[b]};return{load:()=>{if(F())return Promise.resolve(w);if(U[h])return U[h];const k={onload:y,onerror:b,...Y,...r},W=Object.keys(k).map(A=>`${A}=${k[A]}`).join("&"),B=[`https://${u.enterprise?"enterprise.":""}api-maps.yandex.ru`,u.version,"?"+W].join("/");return U[h]=new Promise((A,J)=>{v[y]=j=>{G(),j.ready(()=>{w=j,A(j)})},v[b]=j=>{G(),J(j)},(j=>new Promise((P,V)=>{const g=document.createElement("script");g.type="text/javascript",g.onload=P,g.onerror=V,g.src=j,g.async=!0,document.head.appendChild(g)}))(B).catch(v[b])}),U[h]},getApi:F,loadModule:k=>new Promise((W,B)=>{w.modules.require(k).done(A=>{A.forEach(J=>{((j,P,V,g=!1)=>{const Z=typeof P=="string"?P.split("."):P.slice();let K,x=j;for(;Z.length>1;)K=Z.shift(),x[K]||(x[K]={}),x=x[K];const q=Z[0];x[q]=g===!0&&x[q]||V})(w,k,J,!0)}),W(w)},B)})}})({version:t,enterprise:e,query:n,preload:o}));return O.useEffect(()=>{o&&a.current.load()},[a.current]),d.createElement(X.Provider,{value:a.current},c)},$=/^on(?=[A-Z])/;function l(p){return Object.keys(p).reduce((t,e)=>{if($.test(e)){const n=e.replace($,"").toLowerCase();t._events[n]=p[e]}else t[e]=p[e];return t},{_events:{}})}function C(p,t,e){typeof e=="function"&&p.events.add(t,e)}function R(p,t,e){typeof e=="function"&&p.events.remove(t,e)}function _(p,t,e){Object.keys(Object.assign({},t,e)).forEach(n=>{t[n]!==e[n]&&(R(p,n,t[n]),C(p,n,e[n]))})}const et=p=>"default"+p.charAt(0).toUpperCase()+p.slice(1);function m(p,t){return p[t]!==void 0||p[et(t)]===void 0}function i(p,t,e){return(m(p,t)?p[t]:p[et(t)])||e}function f(p,t,e=null){if(p!==t){if(p&&("current"in p?p.current=null:typeof p=="function"&&p(null)),!t)return;"current"in t?t.current=e:typeof t=="function"&&t(e)}}function nt(p){const{width:t,height:e,style:n,className:o}=p;return n!==void 0||o!==void 0?Object.assign({},n&&{style:n},o&&{className:o}):{style:{width:t,height:e}}}class lt extends d.Component{constructor(t){super(t),this.state={error:null,errorInfo:null}}componentDidCatch(t,e){const{onError:n=()=>{}}=this.props;n(t),this.setState({error:t,errorInfo:e})}render(){return this.state.error?null:this.props.children}}const ot=p=>({onError:t,...e})=>d.createElement(lt,{onError:t},d.createElement(p,e));class D extends d.Component{constructor(){super(),this.instance=null,this.state={instance:null},this._parentElement=null,this._getRef=t=>{this._parentElement=t}}componentDidMount(){this.instance=D.mountObject(this._parentElement,this.props.ymaps.Map,this.props),this.setState({instance:this.instance})}componentDidUpdate(t){this.instance!==null&&D.updateObject(this.instance,t,this.props)}componentWillUnmount(){D.unmountObject(this.instance,this.props)}render(){const t=nt(this.props),e=l(this.props),n=H(e,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return d.createElement(S.Provider,{value:this.state.instance},d.createElement("div",E({ref:this._getRef},t,n),this.props.children))}static mountObject(t,e,n){const{instanceRef:o,_events:c}=l(n),a=new e(t,i(n,"state"),i(n,"options"));return Object.keys(c).forEach(u=>C(a,u,c[u])),f(null,o,a),a}static updateObject(t,e,n){const{_events:o,instanceRef:c}=l(n),{_events:a,instanceRef:u}=l(e);if(m(n,"state")){const r=i(e,"state",{}),s=i(n,"state",{});r.type!==s.type&&t.setType(s.type),r.behaviors!==s.behaviors&&(r.behaviors&&t.behaviors.disable(r.behaviors),s.behaviors&&t.behaviors.enable(s.behaviors)),s.zoom&&r.zoom!==s.zoom&&t.setZoom(s.zoom),s.center&&r.center!==s.center&&t.setCenter(s.center),s.bounds&&r.bounds!==s.bounds&&t.setBounds(s.bounds)}if(m(n,"options")){const r=i(e,"options"),s=i(n,"options",{});r!==s&&t.options.set(s)}i(e,"width")===i(n,"width")&&i(e,"height")===i(n,"height")||t.container.fitToViewport(),_(t,a,o),f(u,c,t)}static unmountObject(t,e){const{instanceRef:n,_events:o}=l(e);t!==null&&(Object.keys(o).forEach(c=>R(t,c,o[c])),t.destroy(),f(n))}}const st=ot(tt(D,!0,["Map"]));st.defaultProps={width:320,height:240};class T extends d.Component{constructor(){super(),this.state={instance:null},this._parentElement=null,this._getRef=t=>{this._parentElement=t}}componentDidMount(){this._mounted=!0,this.props.ymaps.panorama.isSupported()&&T.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then(t=>this._mounted&&this.setState({instance:t}))}componentDidUpdate(t){this.state.instance!==null&&T.updateObject(this.state.instance,t,this.props)}componentWillUnmount(){this._mounted=!1,T.unmountObject(this.state.instance,this.props)}render(){const t=nt(this.props);return d.createElement("div",E({ref:this._getRef},t))}static mountObject(t,e,n){const{instanceRef:o,_events:c}=l(n),a=i(n,"point"),u=i(n,"locateOptions"),r=i(n,"options");return new Promise((s,h)=>{e.locate(a,u).done(y=>{if(y.length>0){const b=new e.Player(t,y[0],r);f(null,o,b),Object.keys(c).forEach(v=>C(b,v,c[v])),s(b)}},h)})}static updateObject(t,e,n){const{_events:o,instanceRef:c}=l(n),{_events:a,instanceRef:u}=l(e);if(m(n,"options")){const r=i(e,"options"),s=i(n,"options");r!==s&&t.options.set(s)}if(m(n,"point")){const r=i(n,"point"),s=i(e,"point"),h=i(n,"locateOptions");r!==s&&t.moveTo(r,h)}_(t,a,o),f(u,c,t)}static unmountObject(t,e){const{instanceRef:n,_events:o}=l(e);t!==null&&(Object.keys(o).forEach(c=>R(t,c,o[c])),f(n))}}class z extends d.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const t=z.mountControl(this.props.ymaps.control[this.props.name],this.props);this.instance=t,this.setState({instance:t})}componentDidUpdate(t){this.instance!==null&&z.updateControl(this.instance,t,this.props)}componentWillUnmount(){z.unmountControl(this.instance,this.props)}render(){return d.createElement(S.Provider,{value:this.state.instance},this.props.children)}static mountControl(t,e){const{instanceRef:n,parent:o,lazy:c,_events:a}=l(e),u=new t({data:i(e,"data"),options:i(e,"options"),state:i(e,"state"),mapTypes:i(e,"mapTypes"),lazy:c});if(Object.keys(a).forEach(r=>C(u,r,a[r])),o&&o.controls&&typeof o.controls.add=="function")o.controls.add(u);else{if(!o||!o.add||typeof o.add!="function")throw new Error(`No parent found to mount ${e.name}`);o.add(u)}return f(null,n,u),u}static updateControl(t,e,n){const{_events:o,instanceRef:c}=l(n),{_events:a,instanceRef:u}=l(e);if(m(n,"options")){const r=i(e,"options"),s=i(n,"options");r!==s&&t.options.set(s)}if(m(n,"data")){const r=i(e,"data"),s=i(n,"data");r!==s&&t.data.set(s)}if(m(n,"state")){const r=i(e,"state"),s=i(n,"state");r!==s&&t.state.set(s)}if(m(n,"mapTypes")){const r=i(e,"mapTypes"),s=i(n,"mapTypes");r!==s&&(t.removeAllMapTypes(),s.forEach(h=>t.addMapType(h)))}_(t,a,o),f(u,c,t)}static unmountControl(t,e){const{instanceRef:n,parent:o,_events:c}=l(e);t!==null&&(Object.keys(c).forEach(a=>R(t,a,c[a])),o.controls&&typeof o.controls.remove=="function"?o.controls.remove(t):o.remove&&typeof o.remove=="function"&&o.remove(t),f(n))}}class I extends d.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const t=I.mountObject(this.props.ymaps.Clusterer,this.props);this.instance=t,this.setState({instance:t})}componentDidUpdate(t){this.state.instance!==null&&I.updateObject(this.instance,t,this.props)}componentWillUnmount(){I.unmountObject(this.instance,this.props)}render(){return d.createElement(S.Provider,{value:this.state.instance},this.props.children)}static mountObject(t,e){const{instanceRef:n,parent:o,_events:c}=l(e),a=new t(i(e,"options"));if(Object.keys(c).forEach(u=>C(a,u,c[u])),o.geoObjects&&typeof o.geoObjects.add=="function")o.geoObjects.add(a);else{if(!o.add||typeof o.add!="function")throw new Error("No parent found to mount Clusterer");o.add(a)}return f(null,n,a),a}static updateObject(t,e,n){const{_events:o,instanceRef:c}=l(n),{_events:a,instanceRef:u}=l(e);if(m(n,"options")){const r=i(e,"options"),s=i(n,"options");r!==s&&t.options.set(s)}_(t,a,o),f(u,c,t)}static unmountObject(t,e){const{instanceRef:n,parent:o,_events:c}=l(e);t!==null&&(Object.keys(c).forEach(a=>R(t,a,c[a])),o.geoObjects&&typeof o.geoObjects.remove=="function"?o.geoObjects.remove(t):o.remove&&typeof o.remove=="function"&&o.remove(t),f(n))}}class L extends d.Component{constructor(){super(),this.state={instance:null}}componentDidMount(){const t=L.mountObject(this.props.ymaps.ObjectManager,this.props);this.instance=t,this.setState({instance:t})}componentDidUpdate(t){this.instance!==null&&L.updateObject(this.instance,t,this.props)}componentWillUnmount(){L.unmountObject(this.instance,this.props)}render(){return null}static mountObject(t,e){const{instanceRef:n,parent:o,_events:c}=l(e),a=i(e,"options",{}),u=i(e,"features",{}),r=i(e,"filter",null),s=i(e,"objects",{}),h=i(e,"clusters",{}),y=new t(a);if(y.add(u||[]),y.setFilter(r),y.objects.options.set(s),y.clusters.options.set(h),Object.keys(c).forEach(b=>C(y,b,c[b])),o.geoObjects&&typeof o.geoObjects.add=="function")o.geoObjects.add(y);else{if(!o.add||typeof o.add!="function")throw new Error("No parent found to mount ObjectManager");o.add(y)}return f(null,n,y),y}static updateObject(t,e,n){const{_events:o,instanceRef:c}=l(n),{_events:a,instanceRef:u}=l(e);if(m(n,"options")){const r=i(e,"options"),s=i(n,"options");r!==s&&t.options.set(s)}if(m(n,"objects")){const r=i(e,"objects"),s=i(n,"objects");r!==s&&t.objects.options.set(s)}if(m(n,"clusters")){const r=i(e,"clusters"),s=i(n,"clusters");r!==s&&t.clusters.options.set(s)}if(m(n,"filter")){const r=i(e,"filter"),s=i(n,"filter");r!==s&&t.setFilter(s)}if(m(n,"features")){const r=i(e,"features"),s=i(n,"features");r!==s&&(t.remove(r),t.add(s))}_(t,a,o),f(u,c,t)}static unmountObject(t,e){const{instanceRef:n,parent:o,_events:c}=l(e);t!==null&&(Object.keys(c).forEach(a=>R(t,a,c[a])),o.geoObjects&&typeof o.geoObjects.remove=="function"?o.geoObjects.remove(t):o.remove&&typeof o.remove=="function"&&o.remove(t),f(n))}}class M extends d.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const{name:t,ymaps:e,dangerZone:n}=this.props,o=M.mountObject(n&&typeof n.modifyConstructor=="function"?n.modifyConstructor(e[t]):e[t],this.props);this.instance=o,this.setState({instance:o})}componentDidUpdate(t){this.instance!==null&&M.updateObject(this.instance,t,this.props)}componentWillUnmount(){M.unmountObject(this.instance,this.props)}render(){return null}static mountObject(t,e){const{instanceRef:n,parent:o,_events:c}=l(e),a=new t(i(e,"geometry"),i(e,"properties"),i(e,"options"));if(Object.keys(c).forEach(u=>C(a,u,c[u])),o&&o.geoObjects&&typeof o.geoObjects.add=="function")o.geoObjects.add(a);else{if(!o||!o.add||typeof o.add!="function")throw new Error(`No parent found to mount ${e.name}`);o.add(a)}return f(null,n,a),a}static updateObject(t,e,n){const{_events:o,instanceRef:c}=l(n),{_events:a,instanceRef:u}=l(e);if(m(n,"geometry")){const r=i(e,"geometry",{}),s=i(n,"geometry",{});Array.isArray(s)&&s!==r?Array.isArray(s[0])&&typeof s[1]=="number"?(t.geometry.setCoordinates(s[0]),t.geometry.setRadius(s[1])):t.geometry.setCoordinates(s):typeof s=="object"&&(s.coordinates!==r.coordinates&&t.geometry.setCoordinates(s.coordinates),s.radius!==r.radius&&t.geometry.setRadius(s.radius))}if(m(n,"properties")){const r=i(e,"properties"),s=i(n,"properties");r!==s&&t.properties.set(s)}if(m(n,"options")){const r=i(e,"options"),s=i(n,"options");r!==s&&t.options.set(s)}_(t,a,o),f(u,c,t)}static unmountObject(t,e){const{instanceRef:n,parent:o,_events:c}=l(e);t!==null&&(Object.keys(c).forEach(a=>R(t,a,c[a])),o.geoObjects&&typeof o.geoObjects.remove=="function"?o.geoObjects.remove(t):o.remove&&typeof o.remove=="function"&&o.remove(t),f(n))}}var Q=ot(rt(tt(p=>d.createElement(M,E({},p,{name:"Placemark"})),!0,["Placemark"])));const dt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAYAAADOMhxqAAAAAXNSR0IArs4c6QAAAZtJREFUOE+V079rFUEQwPHPXDAqJgpKiCKoKGKKKCL+QGzs5Floq00KKy3F1t5GLGwsBAVt1EZsBP8BGysJIaJFEhAkKCkkQhKTN3L37oJ5+J66sMXuzXd35jt74T9H/E/8Jk4HxRPaE/8IfipvuKzQ0na9gQZorfFa+TVdw2NDRix61KS0hJe4WkLBcorBMrpCKDCP8x1g0JgV05jCePAxOVzD35K7wh2pWC86eJVcwsp29nznobB1c7q5LD6QTzHRbWlVGIis8mhJbyKspiiM5LCvFruBcWGyBspi5qT9xCI5XKfYJTRMS2PNbkeUW7j3Z4DdwZfKz/oYHWL+Ry+g1LpW5d3RuiGu19P4TOytgZ+V+G6yq5I57Ks7vYBdfwOWm1ODmeRgXyDIrI8PppLxfsBJvKtmOCW9x/F+wNvgbNq5g4VZlPNEP6B0OYljeI5DKG/d6Lez3HKApZnaSmmnFdxOzvUAivuifUE6UgcM4QUu9gBiljxT/yxVTMGDNjd6AZPk0d+bOMCVNZ71AEa3NY+sCUii7Euz/gWH83ELgnv1NgAAAABJRU5ErkJggg==",ft=({className:p,type:t,center:e,points:n})=>N.jsx(ut,{children:N.jsxs(st,{className:p,defaultState:{center:[e.latitude,e.longitude],zoom:12.5,controls:["zoomControl","fullscreenControl"]},modules:["control.ZoomControl","control.FullscreenControl"],options:{autoFitToViewport:"always"},children:[N.jsx(Q,{id:"self",geometry:[e.latitude,e.longitude],options:t==="self"?{iconLayout:"default#image",iconImageClipRect:[[0,0],[12,24]],iconImageHref:dt,iconImageSize:[12,24],iconImageOffset:[-6,-12]}:{iconColor:"red"}}),n&&(n==null?void 0:n.length)>0&&n.map(o=>N.jsx(Q,{id:"taskNo"+o.taskId,geometry:[o.latitude,o.longitude]},o.taskId))]})});export{ft as MapContainerYandex};
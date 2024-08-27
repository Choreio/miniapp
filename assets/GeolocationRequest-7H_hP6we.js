import{o as W,j as d,p as ae,q as F,v as J,w as Z,x as ie,C as ce,r as f,c as H,d as ve,s as ye,y as je,z as Oe,R as m,b as xe,T as ee,m as Ce,A as we}from"./index-BUIFIREP.js";import{I as Ee,L as le,C as te,B as Ae}from"./Input-9a2PHrOu.js";const Re={bezeled:"tgui-93cba8aff2e72079",plain:"tgui-08ef1486bc111162",gray:"tgui-2250ff52f0b5cf71",outline:"tgui-53781f3cf83e8be1"},Ne={s:"tgui-b92d762e02762017",m:"tgui-024dfe77a8f2cfb0",l:"tgui-8ca1879e1128c105"},ke=i=>{var{size:e="m",mode:s="bezeled",className:t,children:n}=i,r=W(i,["size","mode","className","children"]);return d.jsx(ae,F(J({Component:"button",className:Z("tgui-dda0e80fdf796ba5",Re[s],Ne[e],t)},r),{children:n}))},_e=i=>{var{withoutAnimation:e,visible:s,className:t,children:n}=i,r=W(i,["withoutAnimation","visible","className","children"]);return d.jsx("div",F(J({className:Z("tgui-97f2df57786b02dc",s&&"tgui-3eb6091f664c15d6",e&&"tgui-ecf101b3117a96c8",t)},r),{children:n}))},Pe=i=>{var{selected:e,className:s,children:t}=i,n=W(i,["selected","className","children"]);const r=ie();return d.jsx(ae,F(J({role:"tab",Component:"button",className:Z("tgui-bbfb272d22eb23e8",r==="ios"&&"tgui-513fce1023cbbd63",s)},n),{children:d.jsx(ce,{weight:e?"2":"3",children:t})}))},Te=i=>{var{className:e,children:s}=i,t=W(i,["className","children"]);const n=ie(),r=f.Children.toArray(s),c=r.findIndex(a=>f.isValidElement(a)&&a.props.selected),u=`translateX(${100*c}%)`;return d.jsx("div",F(J({role:"tablist",className:Z("tgui-71259e3311d7116e",n==="ios"&&"tgui-16c6b1986a48e2b5",e)},t),{children:d.jsxs("div",{className:"tgui-b0a9057ab5d33005",children:[c>-1&&d.jsx("div",{"aria-hidden":!0,className:"tgui-31f461ccfea23ec3",style:{width:`${100/r.length}%`,transform:u}}),s]})}))};Te.Item=Pe;function Se({title:i,titleId:e,...s},t){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":e},s),i?f.createElement("title",{id:e},i):null,f.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const Me=f.forwardRef(Se);let se;const Ie=({geoposition:i,setGeoposition:e,status:s})=>{const t=H(ve),n=H(ye),r=f.createRef(),[c,u]=f.useState(""),[a,o]=f.useState([]),[g,b]=f.useState(!1),[j,x]=f.useState(!1),R=()=>{x(!0)},O=()=>{x(!1)};f.useEffect(()=>{clearTimeout(se),c.length>0&&!g?se=setTimeout(()=>{je(n.languageCode||"en",c).then(h=>{console.log(h),o(h)}),R()},500):(o([]),O())},[c,g,n]);const z=h=>{const C=h.currentTarget.value;b(!1),u(C),o([]),O()};f.useEffect(()=>{O(),o([])},[i]);const M=(h,C)=>{console.log("Selected address"),u(h),b(!0),Oe(n.languageCode||"en",c,C).then(w=>{console.log(w),e(w[0])}),O()},N=()=>{u(""),o([]),O()};return d.jsxs("div",{className:"relative overflow-visible self-stretch",ref:r,children:[d.jsx(Ee,{after:c.length>0&&d.jsx(ke,{onClick:N,children:d.jsx(Me,{className:"w-4 h-4"})}),value:c,status:s,placeholder:"Enter your address",onChange:z,onBlur:O,onFocus:()=>{a.length>0&&R()}}),t.available&&d.jsx(ce,{className:"pl-8 text-[--tg-theme-link-color]",onClick:()=>{var h;e(t),u(((h=t==null?void 0:t.address)==null?void 0:h.formattedAdress)||""),b(!0)},children:"My address"}),j&&d.jsx("div",{className:"top-22 absolute z-20 -mt-2 w-full",children:d.jsxs(le,{className:"mr-8 ml-8 rounded-xl border border-solid border-gray-600 bg-[--tg-theme-secondary-bg-color]",children:[a.length>0&&a.map(h=>d.jsx("div",{onClick:C=>{C.preventDefault(),M(h.title,h.uri)},onTouchEnd:C=>{C.preventDefault(),M(h.title,h.uri)},children:d.jsx(te,{className:"w-full",subtitle:h.subtitle,children:h.title})},h.uri)),a.length===0&&d.jsx(te,{className:"w-full",children:"Not found"})]})})]})};function k(){return k=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(i[t]=s[t])}return i},k.apply(this,arguments)}const ue=(i,e)=>{const s={};for(const t in i)e.indexOf(t)===-1&&(s[t]=i[t]);return s},de=m.createContext(null),q=m.createContext(null),Le=i=>e=>m.createElement(q.Consumer,null,s=>m.createElement(i,k({parent:s},e))),De=(i=[])=>{const[e,s]=f.useState(!1),t=f.useRef(i),n=(()=>{const c=f.useContext(de);if(c===null)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that hook useYMaps is inside <YMaps /> provider");return c})(),r=n.getApi();return f.useEffect(()=>{n.load().then(()=>Promise.all(t.current.map(n.loadModule))).then(()=>s(!0))},[]),e&&r?r:null},ze=()=>{},Ue=["onLoad","onError","modules","apiLoader"];function pe(i,e=!1,s=[]){return t=>{const{width:n,height:r,modules:c=[],onLoad:u=ze}=t,a=De(s.concat(c)),o=!e||!!a,g=ue(t,Ue);return f.useEffect(()=>a?u(a):void 0,[a]),o?m.createElement(i,k({ymaps:a},g)):m.createElement("div",{style:{width:n,height:r}})}}const Be=typeof window<"u",ne={lang:"ru_RU",load:"",ns:"",mode:"release"},Ge=i=>{const{version:e="2.1",enterprise:s=!1,query:t={lang:"ru_RU",load:"",ns:""},preload:n=!1,children:r}=i,c=f.useRef((u=>{const{query:a=ne}=u,o=Date.now().toString(32),g=a.ns||"",b="__yandex-maps-api-onload__$$"+o,j="__yandex-maps-api-onerror__$$"+o,x=Be?window:{},R={};let O;const z=()=>g?x[g]:O,M=()=>{delete x[b],delete x[j]};return{load:()=>{if(z())return Promise.resolve(O);if(R[g])return R[g];const N={onload:b,onerror:j,...ne,...a},h=Object.keys(N).map(w=>`${w}=${N[w]}`).join("&"),C=[`https://${u.enterprise?"enterprise.":""}api-maps.yandex.ru`,u.version,"?"+h].join("/");return R[g]=new Promise((w,$)=>{x[b]=E=>{M(),E.ready(()=>{O=E,w(E)})},x[j]=E=>{M(),$(E)},(E=>new Promise((I,Y)=>{const A=document.createElement("script");A.type="text/javascript",A.onload=I,A.onerror=Y,A.src=E,A.async=!0,document.head.appendChild(A)}))(C).catch(x[j])}),R[g]},getApi:z,loadModule:N=>new Promise((h,C)=>{O.modules.require(N).done(w=>{w.forEach($=>{((E,I,Y,A=!1)=>{const X=typeof I=="string"?I.split("."):I.slice();let U,T=E;for(;X.length>1;)U=X.shift(),T[U]||(T[U]={}),T=T[U];const Q=X[0];T[Q]=A===!0&&T[Q]||Y})(O,N,$,!0)}),h(O)},C)})}})({version:e,enterprise:s,query:t,preload:n}));return f.useEffect(()=>{n&&c.current.load()},[c.current]),m.createElement(de.Provider,{value:c.current},r)},oe=/^on(?=[A-Z])/;function p(i){return Object.keys(i).reduce((e,s)=>{if(oe.test(s)){const t=s.replace(oe,"").toLowerCase();e._events[t]=i[s]}else e[s]=i[s];return e},{_events:{}})}function _(i,e,s){typeof s=="function"&&i.events.add(e,s)}function P(i,e,s){typeof s=="function"&&i.events.remove(e,s)}function S(i,e,s){Object.keys(Object.assign({},e,s)).forEach(t=>{e[t]!==s[t]&&(P(i,t,e[t]),_(i,t,s[t]))})}const fe=i=>"default"+i.charAt(0).toUpperCase()+i.slice(1);function v(i,e){return i[e]!==void 0||i[fe(e)]===void 0}function l(i,e,s){return(v(i,e)?i[e]:i[fe(e)])||s}function y(i,e,s=null){if(i!==e){if(i&&("current"in i?i.current=null:typeof i=="function"&&i(null)),!e)return;"current"in e?e.current=s:typeof e=="function"&&e(s)}}function me(i){const{width:e,height:s,style:t,className:n}=i;return t!==void 0||n!==void 0?Object.assign({},t&&{style:t},n&&{className:n}):{style:{width:e,height:s}}}class Ke extends m.Component{constructor(e){super(e),this.state={error:null,errorInfo:null}}componentDidCatch(e,s){const{onError:t=()=>{}}=this.props;t(e),this.setState({error:e,errorInfo:s})}render(){return this.state.error?null:this.props.children}}const he=i=>({onError:e,...s})=>m.createElement(Ke,{onError:e},m.createElement(i,s));class L extends m.Component{constructor(){super(),this.instance=null,this.state={instance:null},this._parentElement=null,this._getRef=e=>{this._parentElement=e}}componentDidMount(){this.instance=L.mountObject(this._parentElement,this.props.ymaps.Map,this.props),this.setState({instance:this.instance})}componentDidUpdate(e){this.instance!==null&&L.updateObject(this.instance,e,this.props)}componentWillUnmount(){L.unmountObject(this.instance,this.props)}render(){const e=me(this.props),s=p(this.props),t=ue(s,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return m.createElement(q.Provider,{value:this.state.instance},m.createElement("div",k({ref:this._getRef},e,t),this.props.children))}static mountObject(e,s,t){const{instanceRef:n,_events:r}=p(t),c=new s(e,l(t,"state"),l(t,"options"));return Object.keys(r).forEach(u=>_(c,u,r[u])),y(null,n,c),c}static updateObject(e,s,t){const{_events:n,instanceRef:r}=p(t),{_events:c,instanceRef:u}=p(s);if(v(t,"state")){const a=l(s,"state",{}),o=l(t,"state",{});a.type!==o.type&&e.setType(o.type),a.behaviors!==o.behaviors&&(a.behaviors&&e.behaviors.disable(a.behaviors),o.behaviors&&e.behaviors.enable(o.behaviors)),o.zoom&&a.zoom!==o.zoom&&e.setZoom(o.zoom),o.center&&a.center!==o.center&&e.setCenter(o.center),o.bounds&&a.bounds!==o.bounds&&e.setBounds(o.bounds)}if(v(t,"options")){const a=l(s,"options"),o=l(t,"options",{});a!==o&&e.options.set(o)}l(s,"width")===l(t,"width")&&l(s,"height")===l(t,"height")||e.container.fitToViewport(),S(e,c,n),y(u,r,e)}static unmountObject(e,s){const{instanceRef:t,_events:n}=p(s);e!==null&&(Object.keys(n).forEach(r=>P(e,r,n[r])),e.destroy(),y(t))}}const be=he(pe(L,!0,["Map"]));be.defaultProps={width:320,height:240};class B extends m.Component{constructor(){super(),this.state={instance:null},this._parentElement=null,this._getRef=e=>{this._parentElement=e}}componentDidMount(){this._mounted=!0,this.props.ymaps.panorama.isSupported()&&B.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then(e=>this._mounted&&this.setState({instance:e}))}componentDidUpdate(e){this.state.instance!==null&&B.updateObject(this.state.instance,e,this.props)}componentWillUnmount(){this._mounted=!1,B.unmountObject(this.state.instance,this.props)}render(){const e=me(this.props);return m.createElement("div",k({ref:this._getRef},e))}static mountObject(e,s,t){const{instanceRef:n,_events:r}=p(t),c=l(t,"point"),u=l(t,"locateOptions"),a=l(t,"options");return new Promise((o,g)=>{s.locate(c,u).done(b=>{if(b.length>0){const j=new s.Player(e,b[0],a);y(null,n,j),Object.keys(r).forEach(x=>_(j,x,r[x])),o(j)}},g)})}static updateObject(e,s,t){const{_events:n,instanceRef:r}=p(t),{_events:c,instanceRef:u}=p(s);if(v(t,"options")){const a=l(s,"options"),o=l(t,"options");a!==o&&e.options.set(o)}if(v(t,"point")){const a=l(t,"point"),o=l(s,"point"),g=l(t,"locateOptions");a!==o&&e.moveTo(a,g)}S(e,c,n),y(u,r,e)}static unmountObject(e,s){const{instanceRef:t,_events:n}=p(s);e!==null&&(Object.keys(n).forEach(r=>P(e,r,n[r])),y(t))}}class G extends m.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const e=G.mountControl(this.props.ymaps.control[this.props.name],this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){this.instance!==null&&G.updateControl(this.instance,e,this.props)}componentWillUnmount(){G.unmountControl(this.instance,this.props)}render(){return m.createElement(q.Provider,{value:this.state.instance},this.props.children)}static mountControl(e,s){const{instanceRef:t,parent:n,lazy:r,_events:c}=p(s),u=new e({data:l(s,"data"),options:l(s,"options"),state:l(s,"state"),mapTypes:l(s,"mapTypes"),lazy:r});if(Object.keys(c).forEach(a=>_(u,a,c[a])),n&&n.controls&&typeof n.controls.add=="function")n.controls.add(u);else{if(!n||!n.add||typeof n.add!="function")throw new Error(`No parent found to mount ${s.name}`);n.add(u)}return y(null,t,u),u}static updateControl(e,s,t){const{_events:n,instanceRef:r}=p(t),{_events:c,instanceRef:u}=p(s);if(v(t,"options")){const a=l(s,"options"),o=l(t,"options");a!==o&&e.options.set(o)}if(v(t,"data")){const a=l(s,"data"),o=l(t,"data");a!==o&&e.data.set(o)}if(v(t,"state")){const a=l(s,"state"),o=l(t,"state");a!==o&&e.state.set(o)}if(v(t,"mapTypes")){const a=l(s,"mapTypes"),o=l(t,"mapTypes");a!==o&&(e.removeAllMapTypes(),o.forEach(g=>e.addMapType(g)))}S(e,c,n),y(u,r,e)}static unmountControl(e,s){const{instanceRef:t,parent:n,_events:r}=p(s);e!==null&&(Object.keys(r).forEach(c=>P(e,c,r[c])),n.controls&&typeof n.controls.remove=="function"?n.controls.remove(e):n.remove&&typeof n.remove=="function"&&n.remove(e),y(t))}}class K extends m.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const e=K.mountObject(this.props.ymaps.Clusterer,this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){this.state.instance!==null&&K.updateObject(this.instance,e,this.props)}componentWillUnmount(){K.unmountObject(this.instance,this.props)}render(){return m.createElement(q.Provider,{value:this.state.instance},this.props.children)}static mountObject(e,s){const{instanceRef:t,parent:n,_events:r}=p(s),c=new e(l(s,"options"));if(Object.keys(r).forEach(u=>_(c,u,r[u])),n.geoObjects&&typeof n.geoObjects.add=="function")n.geoObjects.add(c);else{if(!n.add||typeof n.add!="function")throw new Error("No parent found to mount Clusterer");n.add(c)}return y(null,t,c),c}static updateObject(e,s,t){const{_events:n,instanceRef:r}=p(t),{_events:c,instanceRef:u}=p(s);if(v(t,"options")){const a=l(s,"options"),o=l(t,"options");a!==o&&e.options.set(o)}S(e,c,n),y(u,r,e)}static unmountObject(e,s){const{instanceRef:t,parent:n,_events:r}=p(s);e!==null&&(Object.keys(r).forEach(c=>P(e,c,r[c])),n.geoObjects&&typeof n.geoObjects.remove=="function"?n.geoObjects.remove(e):n.remove&&typeof n.remove=="function"&&n.remove(e),y(t))}}class V extends m.Component{constructor(){super(),this.state={instance:null}}componentDidMount(){const e=V.mountObject(this.props.ymaps.ObjectManager,this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){this.instance!==null&&V.updateObject(this.instance,e,this.props)}componentWillUnmount(){V.unmountObject(this.instance,this.props)}render(){return null}static mountObject(e,s){const{instanceRef:t,parent:n,_events:r}=p(s),c=l(s,"options",{}),u=l(s,"features",{}),a=l(s,"filter",null),o=l(s,"objects",{}),g=l(s,"clusters",{}),b=new e(c);if(b.add(u||[]),b.setFilter(a),b.objects.options.set(o),b.clusters.options.set(g),Object.keys(r).forEach(j=>_(b,j,r[j])),n.geoObjects&&typeof n.geoObjects.add=="function")n.geoObjects.add(b);else{if(!n.add||typeof n.add!="function")throw new Error("No parent found to mount ObjectManager");n.add(b)}return y(null,t,b),b}static updateObject(e,s,t){const{_events:n,instanceRef:r}=p(t),{_events:c,instanceRef:u}=p(s);if(v(t,"options")){const a=l(s,"options"),o=l(t,"options");a!==o&&e.options.set(o)}if(v(t,"objects")){const a=l(s,"objects"),o=l(t,"objects");a!==o&&e.objects.options.set(o)}if(v(t,"clusters")){const a=l(s,"clusters"),o=l(t,"clusters");a!==o&&e.clusters.options.set(o)}if(v(t,"filter")){const a=l(s,"filter"),o=l(t,"filter");a!==o&&e.setFilter(o)}if(v(t,"features")){const a=l(s,"features"),o=l(t,"features");a!==o&&(e.remove(a),e.add(o))}S(e,c,n),y(u,r,e)}static unmountObject(e,s){const{instanceRef:t,parent:n,_events:r}=p(s);e!==null&&(Object.keys(r).forEach(c=>P(e,c,r[c])),n.geoObjects&&typeof n.geoObjects.remove=="function"?n.geoObjects.remove(e):n.remove&&typeof n.remove=="function"&&n.remove(e),y(t))}}class D extends m.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const{name:e,ymaps:s,dangerZone:t}=this.props,n=D.mountObject(t&&typeof t.modifyConstructor=="function"?t.modifyConstructor(s[e]):s[e],this.props);this.instance=n,this.setState({instance:n})}componentDidUpdate(e){this.instance!==null&&D.updateObject(this.instance,e,this.props)}componentWillUnmount(){D.unmountObject(this.instance,this.props)}render(){return null}static mountObject(e,s){const{instanceRef:t,parent:n,_events:r}=p(s),c=new e(l(s,"geometry"),l(s,"properties"),l(s,"options"));if(Object.keys(r).forEach(u=>_(c,u,r[u])),n&&n.geoObjects&&typeof n.geoObjects.add=="function")n.geoObjects.add(c);else{if(!n||!n.add||typeof n.add!="function")throw new Error(`No parent found to mount ${s.name}`);n.add(c)}return y(null,t,c),c}static updateObject(e,s,t){const{_events:n,instanceRef:r}=p(t),{_events:c,instanceRef:u}=p(s);if(v(t,"geometry")){const a=l(s,"geometry",{}),o=l(t,"geometry",{});Array.isArray(o)&&o!==a?Array.isArray(o[0])&&typeof o[1]=="number"?(e.geometry.setCoordinates(o[0]),e.geometry.setRadius(o[1])):e.geometry.setCoordinates(o):typeof o=="object"&&(o.coordinates!==a.coordinates&&e.geometry.setCoordinates(o.coordinates),o.radius!==a.radius&&e.geometry.setRadius(o.radius))}if(v(t,"properties")){const a=l(s,"properties"),o=l(t,"properties");a!==o&&e.properties.set(o)}if(v(t,"options")){const a=l(s,"options"),o=l(t,"options");a!==o&&e.options.set(o)}S(e,c,n),y(u,r,e)}static unmountObject(e,s){const{instanceRef:t,parent:n,_events:r}=p(s);e!==null&&(Object.keys(r).forEach(c=>P(e,c,r[c])),n.geoObjects&&typeof n.geoObjects.remove=="function"?n.geoObjects.remove(e):n.remove&&typeof n.remove=="function"&&n.remove(e),y(t))}}var re=he(Le(pe(i=>m.createElement(D,k({},i,{name:"Placemark"})),!0,["Placemark"])));const Ve="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAYAAADOMhxqAAAAAXNSR0IArs4c6QAAAZtJREFUOE+V079rFUEQwPHPXDAqJgpKiCKoKGKKKCL+QGzs5Floq00KKy3F1t5GLGwsBAVt1EZsBP8BGysJIaJFEhAkKCkkQhKTN3L37oJ5+J66sMXuzXd35jt74T9H/E/8Jk4HxRPaE/8IfipvuKzQ0na9gQZorfFa+TVdw2NDRix61KS0hJe4WkLBcorBMrpCKDCP8x1g0JgV05jCePAxOVzD35K7wh2pWC86eJVcwsp29nznobB1c7q5LD6QTzHRbWlVGIis8mhJbyKspiiM5LCvFruBcWGyBspi5qT9xCI5XKfYJTRMS2PNbkeUW7j3Z4DdwZfKz/oYHWL+Ry+g1LpW5d3RuiGu19P4TOytgZ+V+G6yq5I57Ks7vYBdfwOWm1ODmeRgXyDIrI8PppLxfsBJvKtmOCW9x/F+wNvgbNq5g4VZlPNEP6B0OYljeI5DKG/d6Lez3HKApZnaSmmnFdxOzvUAivuifUE6UgcM4QUu9gBiljxT/yxVTMGDNjd6AZPk0d+bOMCVNZ71AEa3NY+sCUii7Euz/gWH83ELgnv1NgAAAABJRU5ErkJggg==",ge=({available:i,className:e,type:s,center:t,points:n})=>(f.useEffect(()=>{},[t]),d.jsx(Ge,{query:{lang:"en_US"},children:i?d.jsxs(be,{className:e,state:{center:[t.latitude,t.longitude],zoom:12.5,controls:["zoomControl","fullscreenControl"]},modules:["control.ZoomControl","control.FullscreenControl"],options:{autoFitToViewport:"always"},children:[d.jsx(re,{id:"self",geometry:[t.latitude,t.longitude],options:s==="self"?{iconLayout:"default#image",iconImageClipRect:[[0,0],[12,24]],iconImageHref:Ve,iconImageSize:[12,24],iconImageOffset:[-6,-12]}:{iconColor:"red"}}),n&&(n==null?void 0:n.length)>0&&n.map(r=>d.jsx(re,{id:"taskNo"+r.taskId,geometry:[r.latitude,r.longitude],onClick:r.onBubbleClick},r.taskId))]}):d.jsx(_e,{visible:!0,className:"w-96 h-48"})})),Je=Object.freeze(Object.defineProperty({__proto__:null,MapContainerYandex:ge},Symbol.toStringTag,{value:"Module"})),Ze=()=>{var n,r,c,u,a;const i=xe(),[e,s]=f.useState({available:!1,latLong:{latitude:"",longitude:""},address:{formattedAdress:"",country:"",city:"",street:"",house:""}}),t=()=>{i(we(e))};return d.jsxs(le,{className:"overflow-visible bg-[--tg-theme-bg-color] mt-4",children:[d.jsxs("div",{className:"flex flex-col gap-4 p-4 text-center",children:[d.jsx(ee,{children:"To provide accurate information we need your geolocation."}),d.jsx(Ce,{children:"We cannot automatically determine your location, so please let us know where you are"})]}),d.jsx(Ie,{geoposition:e,setGeoposition:s}),e.available&&d.jsxs("div",{className:"flex flex-col gap-4",children:[d.jsx(ee,{children:"Chosen geolocation"}),d.jsxs("span",{children:["Address: ",(n=e.address)==null?void 0:n.formattedAdress]}),d.jsxs("span",{children:["Latitude, Longitude:"," ",((r=e.latLong)==null?void 0:r.latitude)+", "+((c=e.latLong)==null?void 0:c.longitude)]}),d.jsx(ge,{available:e.available,type:"self",className:"p-2 w-full h-64 self-center",center:{latitude:Number((u=e.latLong)==null?void 0:u.latitude),longitude:Number((a=e.latLong)==null?void 0:a.longitude)}}),d.jsx(Ae,{onClick:t,children:"Confirm"})]})]})};export{Me as F,Ze as G,ge as M,Te as S,Pe as a,Ie as b,Je as c};

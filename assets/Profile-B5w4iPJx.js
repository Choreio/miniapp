import{r as l,_ as w,b as L,j as e,T as B,c as E,h as v,d as N,e as k,S as F,f as O,J as M,P as J,i as G,t as H,k as f,s as _,l as z,m as q,n as K,E as V,o as W,p as Y,q as Z,C as x,B as $,v as Q}from"./index-DbMsnYKV.js";import{_ as X,a as ee,B as C,S as b,C as g}from"./Section-BOM-Wog2.js";import{L as ae,A as se}from"./List-CmJPxuCZ.js";import{I as te}from"./Input-DN_3xv1c.js";import"./function-ChqatQlo.js";const le=l.forwardRef((r,n)=>{var{mode:d="default",before:t,after:o,className:i,children:p,Component:m}=r,y=w(r,["mode","before","after","className","children","Component"]);const s=L(),h=s==="ios"?F:O;return e.jsxs(B,E(N({ref:n,Component:m||"button",className:k("tgui-a8ce18a8594cea9b",d==="destructive"&&"tgui-6e7ca796043fe6ca",s==="ios"&&"tgui-f464dba82cb8b46e",i)},y),{children:[v(t)&&t,v(p)&&e.jsx(h,{children:p}),v(o)&&o]}))}),re=l.forwardRef((r,n)=>{var{Component:d="span",className:t}=r,o=w(r,["Component","className"]);return e.jsx(d,E(N({},o),{ref:n,className:k("tgui-b9fd8cdf929947df",t)}))}),ne=r=>{var n=X({},ee(r));return e.jsx("svg",E(N({width:"28",height:"28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),{children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.286 6.445c-2.342-2.307-6.19-2.307-8.53 0l-5.353 5.272a.99.99 0 0 1-1.388-1.41l5.352-5.272c3.112-3.065 8.196-3.065 11.307 0a7.598 7.598 0 0 1 0 10.885l-7.347 7.238c-2.355 2.32-6.198 2.32-8.553 0a5.762 5.762 0 0 1 0-8.253l7.381-7.27c1.585-1.56 4.141-1.632 5.814-.167a4.06 4.06 0 0 1 .082 6.068l-6.158 5.688a.99.99 0 0 1-1.343-1.454l6.16-5.687c.93-.859.91-2.29-.044-3.127a2.315 2.315 0 0 0-3.122.088l-7.381 7.27a3.784 3.784 0 0 0 0 5.435c1.584 1.56 4.191 1.56 5.775 0l7.348-7.238a5.62 5.62 0 0 0 0-8.066Z",fill:"currentColor"})}))},oe=l.forwardRef((r,n)=>{var{label:d="Attach file",className:t,children:o}=r,i=w(r,["label","className","children"]);return e.jsxs("div",{ref:n,className:t,children:[o,e.jsxs(le,{Component:"label",before:e.jsx(ne,{}),children:[e.jsx(re,{children:e.jsx("input",N({type:"file",placeholder:d},i))}),d]})]})}),ie=""+new URL("avatar_placeholder_black-DRyce69K.png",import.meta.url).href,ce=""+new URL("avatar_placeholder_white-CbxutB7M.png",import.meta.url).href,j=[{sector:"personal",name:"photoUrl",displayName:"Avatar",editable:!0},{sector:"personal",name:"username",displayName:"Username",editable:!0},{sector:"personal",name:"email",displayName:"Email",editable:!0},{sector:"personal",name:"fullName",displayName:"Full name",editable:!0},{sector:"system",name:"id",displayName:"Inner ID",editable:!1},{sector:"system",name:"tg_id",displayName:"Telegram ID",editable:!1},{sector:"others",name:"languageCode",displayName:"Locale",editable:!1},{sector:"others",name:"role",displayName:"User Role",editable:!1}],de=[{sector:"geolocation",name:"available",displayName:"Geoposition enabled",editable:!1},{sector:"geolocation",name:"latitude",displayName:"Latitude",editable:!1},{sector:"geolocation",name:"longitude",displayName:"Longitude",editable:!1},{sector:"geolocation",name:"formattedAdress",displayName:"FormattedAddress",editable:!1},{sector:"geolocation",name:"country",displayName:"Country name",editable:!1},{sector:"geolocation",name:"city",displayName:"City name",editable:!1},{sector:"geolocation",name:"street",displayName:"Street name",editable:!1},{sector:"geolocation",name:"house",displayName:"House No",editable:!1}],ge=()=>{if(!M())return e.jsx(J,{header:"Oops",description:"Application was launched with missing init data",children:e.jsx("img",{alt:"Telegram sticker",src:"https://xelene.me/telegram.gif",style:{display:"block",width:"144px",height:"144px"}})});const n=G(),d=H(),[t,o]=l.useState(f(_)),[i,p]=l.useState(f(_)),m=f(z),y=f(q),[s,h]=l.useState(i?y:m),u=f(K),[P,R]=l.useState({available:u.available,...u.location,...u.address});l.useEffect(()=>{R({available:u.available,...u.location,...u.address})},[u]);const[S,U]=l.useState([]);if(!s)return e.jsx(V,{children:"Something went wrong with user"});l.useEffect(()=>{n(W(i))},[i]),l.useEffect(()=>{JSON.stringify(m)!==JSON.stringify(s)?(n(Y(s)),U(j.map(a=>s[a.name]!==m[a.name]?a.name:"")),p(!0)):(p(!1),U([]))},[s]),l.useEffect(()=>{i||(console.log("Sync user"),h(m))},[m]);const A=a=>{a.preventDefault(),console.log("Edit mode handler"),o(!0),t&&!i&&o(!1)},D=a=>{a.preventDefault(),console.log("Avatar change");const c=a.currentTarget.files;c&&h({...s,photoUrl:URL.createObjectURL(c[0])})},I=a=>{a.preventDefault(),console.log("Changes saved"),n(Q(s)),o(!1),p(!1)},T=a=>{a.preventDefault(),console.log("Changes canceled"),h(m),o(!1),p(!1)};return e.jsxs("div",{className:"md:container md:mx-auto pt-2",children:[i&&e.jsx("div",{className:"bg-yellow-400 text-center rounded-lg mb-1",children:"You have uncommited changes!!!"}),e.jsxs("div",{className:"p-2 flex align-middle items-center justify-between w-full",children:[e.jsx(Z,{children:"My profile"}),e.jsx(C,{mode:"plain",onClick:A,children:"Edit"})]}),e.jsxs(ae,{className:"flex flex-col h-full gap-8",children:[e.jsx(b,{header:"Personal Info",children:j.filter(a=>a.sector==="personal").map(a=>e.jsxs("div",{children:[e.jsx(x,{level:"1",weight:"2",className:"p-6 text-[--tg-theme-hint-color]",children:a.displayName}),a.name==="photoUrl"&&e.jsxs(g,{after:a.editable&&t&&e.jsx(oe,{id:"input_file",onChange:D,accept:"image/png, image/jpeg"}),children:[S.includes(a.name)&&e.jsx($,{type:"number",mode:"critical",large:!0,className:"absolute left-2 top-2 z-10",children:"Edited"}),e.jsx(se,{size:96,src:s.photoUrl?s.photoUrl:d.isDark?ce:ie})]}),a.name!=="photoUrl"&&e.jsx(e.Fragment,{children:t&&a.editable?e.jsx(te,{readOnly:!(t&&a.editable),status:S.includes(a.name)?"error":"default",inputMode:"text",placeholder:a.displayName,value:s[a.name],onChange:c=>{switch(a.name){case"username":h({...s,username:c.currentTarget.value});break;case"email":h({...s,email:c.currentTarget.value});break;case"fullName":h({...s,fullName:c.currentTarget.value});break}}}):e.jsx(g,{children:s[a.name]})})]},a.name))}),e.jsx(b,{header:"System Info",children:j.filter(a=>a.sector==="system").map(a=>e.jsxs("div",{children:[e.jsx(x,{level:"1",weight:"2",className:"pl-6 text-[--tg-theme-hint-color]",children:a.displayName}),e.jsx(g,{children:s[a.name]})]},a.name))}),e.jsx(b,{header:"Other Info",children:j.filter(a=>a.sector==="others").map(a=>e.jsxs("div",{children:[e.jsx(x,{level:"1",weight:"2",className:"p-6 text-[--tg-theme-hint-color]",children:a.displayName}),e.jsx(g,{children:s[a.name]})]},a.name))}),e.jsx(b,{header:"Geolocation Info",children:de.map(a=>{var c;return e.jsxs("div",{children:[e.jsx(x,{level:"1",weight:"2",className:"p-6 text-[--tg-theme-hint-color]",children:a.displayName}),e.jsx(g,{children:(c=P[a.name])==null?void 0:c.toString()})]},a.name)})})]}),t&&e.jsx("div",{className:"sticky bottom-1",children:e.jsxs("div",{className:"flex flex-row justify-center items-center",children:[e.jsx(C,{className:"bg-green-400 w-full",onClick:I,children:"Confirm"}),e.jsx(C,{className:"bg-red-400 w-full",onClick:T,children:"Cancel"})]})})]})};export{ge as Profile};

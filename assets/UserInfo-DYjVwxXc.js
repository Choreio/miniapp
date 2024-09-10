import{d as T,t as B,r as t,e as g,i as S,s as O,f as R,h as _,j as a,E as J,T as M,C as f,B as P,k as G}from"./index-ByNOcer-.js";import{B as b,L as z,C as d}from"./List-DgIbQkPF.js";import{S as x,I as H}from"./Input-BmxBgZ7Y.js";import{F as K}from"./FileInput-CSBdwFYU.js";import{A as W}from"./Avatar-Bn9mfJqc.js";import"./VisuallyHidden-hoLU1URk.js";const Y=""+new URL("avatar_placeholder_black-DRyce69K.png",import.meta.url).href,$=""+new URL("avatar_placeholder_white-CbxutB7M.png",import.meta.url).href,N=[{sector:"personal",name:"photoUrl",displayName:"Avatar",editable:!0},{sector:"personal",name:"username",displayName:"Username",editable:!0},{sector:"personal",name:"email",displayName:"Email",editable:!0},{sector:"personal",name:"firstName",displayName:"First name",editable:!0},{sector:"personal",name:"lastName",displayName:"Last name",editable:!0},{sector:"system",name:"id",displayName:"Inner ID",editable:!1},{sector:"system",name:"tg_id",displayName:"Telegram ID",editable:!1},{sector:"others",name:"languageCode",displayName:"Locale",editable:!1},{sector:"others",name:"role",displayName:"User Role",editable:!1}],q=[{sector:"geolocation",name:"available",displayName:"Geoposition enabled",editable:!1},{sector:"geolocation",name:"latitude",displayName:"Latitude",editable:!1},{sector:"geolocation",name:"longitude",displayName:"Longitude",editable:!1},{sector:"geolocation",name:"formattedAdress",displayName:"FormattedAddress",editable:!1},{sector:"geolocation",name:"country",displayName:"Country name",editable:!1},{sector:"geolocation",name:"city",displayName:"City name",editable:!1},{sector:"geolocation",name:"street",displayName:"Street name",editable:!1},{sector:"geolocation",name:"house",displayName:"House No",editable:!1}],se=()=>{const y=T(),E=B(),[m,u]=t.useState(g(S)),[r,h]=t.useState(g(S)),o=g(O),U=JSON.parse(sessionStorage.getItem("saved-user")||"{}"),[s,i]=t.useState(r?U:o),c=g(R),[w,k]=t.useState({available:c.available,...c.latLong,...c.address});t.useEffect(()=>{k({available:c.available,...c.latLong,...c.address})},[c]);const[j,v]=t.useState([]);t.useEffect(()=>{y(_(r))},[r,y]),t.useEffect(()=>{s&&(JSON.stringify(o)!==JSON.stringify(s)?(sessionStorage.setItem("saved-user",JSON.stringify(s)),v(N.map(e=>s[e.name]!==o[e.name]?e.name:"")),h(!0)):(h(!1),sessionStorage.removeItem("saved-user"),v([])))},[s,o]),t.useEffect(()=>{r||(console.log("Sync user"),i(o))},[o,r]);const[I,C]=t.useState(!1),L=e=>{e.preventDefault(),console.log("Edit mode handler"),u(!0),r&&C(!0),m&&!r&&u(!1)},A=e=>{if(s){e.preventDefault(),console.log("Avatar change");const l=e.currentTarget.files;l&&i({...s,photoUrl:URL.createObjectURL(l[0])})}},D=e=>{s&&(e.preventDefault(),console.log("Changes saved"),y(G(s)),u(!1),h(!1))},F=e=>{e.preventDefault(),console.log("Changes canceled"),i(o),u(!1),h(!1)},[n,p]=t.useState(!1);return s?a.jsxs("div",{className:"md:container md:mx-auto",children:[r&&a.jsx("div",{className:"bg-yellow-400 text-center rounded-lg mb-1",children:"You have uncommited changes!!!"}),a.jsxs("div",{className:"p-2 flex align-middle items-center justify-between w-full",children:[a.jsx(M,{children:"My profile"}),a.jsx(b,{mode:"plain",onClick:L,className:I?"animate-jiggle text-red-400":"",onAnimationEnd:()=>{C(!1)},children:"Edit"})]}),a.jsxs(z,{className:"flex flex-col h-full gap-8",children:[a.jsx(x,{header:"Personal Info",children:N.filter(e=>e.sector==="personal").map(e=>a.jsxs("div",{children:[a.jsx(f,{level:"1",weight:"2",className:"p-6 text-[--tg-theme-hint-color]",children:e.displayName}),e.name==="photoUrl"&&a.jsxs(d,{after:e.editable&&m&&a.jsx(K,{id:"input_file",onChange:A,accept:"image/png, image/jpeg"}),children:[j.includes(e.name)&&a.jsx(P,{type:"number",mode:"critical",large:!0,className:"absolute left-2 top-2 z-10",children:"Edited"}),a.jsx(W,{size:96,src:s.photoUrl?s.photoUrl:E.isDark?$:Y})]}),e.name!=="photoUrl"&&a.jsx(a.Fragment,{children:m&&e.editable?a.jsx(H,{readOnly:!(m&&e.editable),status:j.includes(e.name)?"error":"default",inputMode:"text",placeholder:e.displayName,value:s[e.name],onChange:l=>{switch(e.name){case"username":i({...s,username:l.currentTarget.value});break;case"email":i({...s,email:l.currentTarget.value});break;case"firstName":i({...s,firstName:l.currentTarget.value});break;case"lastName":i({...s,lastName:l.currentTarget.value});break}}}):a.jsx(d,{multiline:n,onClick:()=>p(!n),children:s[e.name]})})]},e.name))}),a.jsx(x,{header:"System Info",children:N.filter(e=>e.sector==="system").map(e=>a.jsxs("div",{children:[a.jsx(f,{level:"1",weight:"2",className:"pl-6 text-[--tg-theme-hint-color]",children:e.displayName}),a.jsx(d,{multiline:n,onClick:()=>p(!n),children:s[e.name]})]},e.name))}),a.jsx(x,{header:"Other Info",children:N.filter(e=>e.sector==="others").map(e=>a.jsxs("div",{children:[a.jsx(f,{level:"1",weight:"2",className:"p-6 text-[--tg-theme-hint-color]",children:e.displayName}),a.jsx(d,{multiline:n,onClick:()=>p(!n),children:s[e.name]})]},e.name))}),a.jsx(x,{header:"Geolocation Info",children:q.map(e=>{var l;return a.jsxs("div",{children:[a.jsx(f,{level:"1",weight:"2",className:"p-6 text-[--tg-theme-hint-color]",children:e.displayName}),a.jsx(d,{multiline:n,onClick:()=>p(!n),children:(l=w[e.name])==null?void 0:l.toString()})]},e.name)})})]}),m&&a.jsx("div",{className:"sticky bottom-24",children:a.jsxs("div",{className:"flex flex-row justify-center items-center",children:[a.jsx(b,{className:"bg-green-400 w-full",onClick:D,children:"Confirm"}),a.jsx(b,{className:"bg-red-400 w-full",onClick:F,children:"Cancel"})]})})]}):a.jsx(J,{children:"Something went wrong with user"})};export{se as UserInfo};

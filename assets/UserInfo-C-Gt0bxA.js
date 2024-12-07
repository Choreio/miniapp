import{b as O,r as t,c as g,i as S,s as T,d as B,e as _,j as a,E as J,T as M,C as f,z as P,$ as E,f as R}from"./index-DiiwTkhM.js";import{B as b,L as z,S as x,C as m}from"./Section-DYTWTpqy.js";import{F as G,B as $}from"./FileInput-DQoSSVou.js";import{A as H}from"./Avatar-hU1ca7qu.js";import{I as K}from"./Input-BpU-p-6y.js";import"./VisuallyHidden-BaFZ998l.js";const W="/miniapp/assets/avatar_placeholder_black-DRyce69K.png",Y="/miniapp/assets/avatar_placeholder_white-CbxutB7M.png",N=[{sector:"personal",name:"photoUrl",displayName:"Avatar",editable:!0},{sector:"personal",name:"username",displayName:"Username",editable:!0},{sector:"personal",name:"email",displayName:"Email",editable:!0},{sector:"personal",name:"firstName",displayName:"First name",editable:!0},{sector:"personal",name:"lastName",displayName:"Last name",editable:!0},{sector:"system",name:"id",displayName:"Inner ID",editable:!1},{sector:"system",name:"tg_id",displayName:"Telegram ID",editable:!1},{sector:"others",name:"languageCode",displayName:"Locale",editable:!1},{sector:"others",name:"role",displayName:"User Role",editable:!1}],q=[{sector:"geolocation",name:"available",displayName:"Geoposition enabled",editable:!1},{sector:"geolocation",name:"latitude",displayName:"Latitude",editable:!1},{sector:"geolocation",name:"longitude",displayName:"Longitude",editable:!1},{sector:"geolocation",name:"formattedAdress",displayName:"FormattedAddress",editable:!1},{sector:"geolocation",name:"country",displayName:"Country name",editable:!1},{sector:"geolocation",name:"city",displayName:"City name",editable:!1},{sector:"geolocation",name:"street",displayName:"Street name",editable:!1},{sector:"geolocation",name:"house",displayName:"House No",editable:!1}],se=()=>{const y=O(),[d,u]=t.useState(g(S)),[r,p]=t.useState(g(S)),i=g(T),w=JSON.parse(sessionStorage.getItem("saved-user")||"{}"),[s,o]=t.useState(r?w:i),c=g(B),[U,k]=t.useState({available:c.available,...c.latLong,...c.address});t.useEffect(()=>{k({available:c.available,...c.latLong,...c.address})},[c]);const[j,v]=t.useState([]);t.useEffect(()=>{y(_(r))},[r,y]),t.useEffect(()=>{s&&(JSON.stringify(i)!==JSON.stringify(s)?(sessionStorage.setItem("saved-user",JSON.stringify(s)),v(N.map(e=>s[e.name]!==i[e.name]?e.name:"")),p(!0)):(p(!1),sessionStorage.removeItem("saved-user"),v([])))},[s,i]),t.useEffect(()=>{r||(console.log("Sync user"),o(i))},[i,r]);const[I,C]=t.useState(!1),L=e=>{e.preventDefault(),console.log("Edit mode handler"),u(!0),r&&(E.isSupported()&&E.notificationOccurred("warning"),C(!0)),d&&!r&&u(!1)},A=e=>{if(s){e.preventDefault(),console.log("Avatar change");const l=e.currentTarget.files;l&&o({...s,photoUrl:URL.createObjectURL(l[0])})}},D=e=>{s&&(e.preventDefault(),console.log("Changes saved"),y(R(s)),u(!1),p(!1))},F=e=>{e.preventDefault(),console.log("Changes canceled"),o(i),u(!1),p(!1)},[n,h]=t.useState(!1);return s?a.jsxs("div",{children:[r&&a.jsx("div",{className:"bg-yellow-400 text-center rounded-lg mb-1",children:"You have uncommited changes!!!"}),a.jsxs("div",{className:"p-2 flex align-middle items-center justify-between w-full",children:[a.jsx(M,{children:"My profile"}),a.jsx(b,{mode:"plain",onClick:L,className:I?"animate-jiggle text-red-400":"",onAnimationEnd:()=>{C(!1)},children:"Edit"})]}),a.jsxs(z,{className:"flex flex-col h-full gap-8",children:[a.jsx(x,{header:"Personal Info",children:N.filter(e=>e.sector==="personal").map(e=>a.jsxs("div",{children:[a.jsx(f,{level:"1",weight:"2",className:"p-6 text-[--tg-theme-hint-color]",children:e.displayName}),e.name==="photoUrl"&&a.jsxs(m,{after:e.editable&&d&&a.jsx(G,{id:"input_file",onChange:A,accept:"image/png, image/jpeg"}),children:[j.includes(e.name)&&a.jsx($,{type:"number",mode:"critical",large:!0,className:"absolute left-2 top-2 z-10",children:"Edited"}),a.jsx(H,{size:96,src:s.photoUrl?s.photoUrl:P.isDark()?Y:W})]}),e.name!=="photoUrl"&&a.jsx(a.Fragment,{children:d&&e.editable?a.jsx(K,{readOnly:!(d&&e.editable),status:j.includes(e.name)?"error":"default",inputMode:"text",placeholder:e.displayName,value:s[e.name],onChange:l=>{switch(e.name){case"username":o({...s,username:l.currentTarget.value});break;case"email":o({...s,email:l.currentTarget.value});break;case"firstName":o({...s,firstName:l.currentTarget.value});break;case"lastName":o({...s,lastName:l.currentTarget.value});break}}}):a.jsx(m,{multiline:n,onClick:()=>h(!n),children:s[e.name]})})]},e.name))}),a.jsx(x,{header:"System Info",children:N.filter(e=>e.sector==="system").map(e=>a.jsxs("div",{children:[a.jsx(f,{level:"1",weight:"2",className:"pl-6 text-[--tg-theme-hint-color]",children:e.displayName}),a.jsx(m,{multiline:n,onClick:()=>h(!n),children:s[e.name]})]},e.name))}),a.jsx(x,{header:"Other Info",children:N.filter(e=>e.sector==="others").map(e=>a.jsxs("div",{children:[a.jsx(f,{level:"1",weight:"2",className:"p-6 text-[--tg-theme-hint-color]",children:e.displayName}),a.jsx(m,{multiline:n,onClick:()=>h(!n),children:s[e.name]})]},e.name))}),a.jsx(x,{header:"Geolocation Info",children:q.map(e=>{var l;return a.jsxs("div",{children:[a.jsx(f,{level:"1",weight:"2",className:"p-6 text-[--tg-theme-hint-color]",children:e.displayName}),a.jsx(m,{multiline:n,onClick:()=>h(!n),children:(l=U[e.name])==null?void 0:l.toString()})]},e.name)})})]}),d&&a.jsx("div",{className:"sticky bottom-24 pl-4 pr-4",children:a.jsxs("div",{className:"flex flex-row justify-center items-center",children:[a.jsx(b,{className:"bg-green-400 w-full",onClick:D,children:"Confirm"}),a.jsx(b,{className:"bg-red-400 w-full",onClick:F,children:"Cancel"})]})})]}):a.jsx(J,{children:"Something went wrong with user"})};export{se as UserInfo};
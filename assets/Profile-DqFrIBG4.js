import{J as F,b as O,t as P,r as t,c as g,i as C,s as T,d as B,e as R,j as a,P as J,E as _,T as M,C as f,B as G,f as z}from"./index-VFKkkdMM.js";import{B as b,L as H,S as x,C as m,I as K}from"./Input-Cv6hzr2T.js";import{F as W,A as Y}from"./FileInput-Bq4i_xfn.js";const $=""+new URL("avatar_placeholder_black-DRyce69K.png",import.meta.url).href,q=""+new URL("avatar_placeholder_white-CbxutB7M.png",import.meta.url).href,y=[{sector:"personal",name:"photoUrl",displayName:"Avatar",editable:!0},{sector:"personal",name:"username",displayName:"Username",editable:!0},{sector:"personal",name:"email",displayName:"Email",editable:!0},{sector:"personal",name:"fullName",displayName:"Full name",editable:!0},{sector:"system",name:"id",displayName:"Inner ID",editable:!1},{sector:"system",name:"tg_id",displayName:"Telegram ID",editable:!1},{sector:"others",name:"languageCode",displayName:"Locale",editable:!1},{sector:"others",name:"role",displayName:"User Role",editable:!1}],Q=[{sector:"geolocation",name:"available",displayName:"Geoposition enabled",editable:!1},{sector:"geolocation",name:"latitude",displayName:"Latitude",editable:!1},{sector:"geolocation",name:"longitude",displayName:"Longitude",editable:!1},{sector:"geolocation",name:"formattedAdress",displayName:"FormattedAddress",editable:!1},{sector:"geolocation",name:"country",displayName:"Country name",editable:!1},{sector:"geolocation",name:"city",displayName:"City name",editable:!1},{sector:"geolocation",name:"street",displayName:"Street name",editable:!1},{sector:"geolocation",name:"house",displayName:"House No",editable:!1}],ee=()=>{const S=F(),N=O(),w=P(),[d,h]=t.useState(g(C)),[r,u]=t.useState(g(C)),i=g(T),E=JSON.parse(sessionStorage.getItem("saved-user")||"{}"),[s,c]=t.useState(r?E:i),o=g(B),[U,k]=t.useState({available:o.available,...o.latLong,...o.address});t.useEffect(()=>{k({available:o.available,...o.latLong,...o.address})},[o]);const[j,v]=t.useState([]);t.useEffect(()=>{N(R(r))},[r,N]),t.useEffect(()=>{s&&(JSON.stringify(i)!==JSON.stringify(s)?(sessionStorage.setItem("saved-user",JSON.stringify(s)),v(y.map(e=>s[e.name]!==i[e.name]?e.name:"")),u(!0)):(u(!1),sessionStorage.removeItem("saved-user"),v([])))},[s,i]),t.useEffect(()=>{r||(console.log("Sync user"),c(i))},[i,r]);const I=e=>{e.preventDefault(),console.log("Edit mode handler"),h(!0),d&&!r&&h(!1)},L=e=>{if(s){e.preventDefault(),console.log("Avatar change");const l=e.currentTarget.files;l&&c({...s,photoUrl:URL.createObjectURL(l[0])})}},A=e=>{s&&(e.preventDefault(),console.log("Changes saved"),N(z(s)),h(!1),u(!1))},D=e=>{e.preventDefault(),console.log("Changes canceled"),c(i),h(!1),u(!1)},[n,p]=t.useState(!1);return S?s?a.jsxs("div",{className:"md:container md:mx-auto pt-2",children:[r&&a.jsx("div",{className:"bg-yellow-400 text-center rounded-lg mb-1",children:"You have uncommited changes!!!"}),a.jsxs("div",{className:"p-2 flex align-middle items-center justify-between w-full",children:[a.jsx(M,{children:"My profile"}),a.jsx(b,{mode:"plain",onClick:I,children:"Edit"})]}),a.jsxs(H,{className:"flex flex-col h-full gap-8",children:[a.jsx(x,{header:"Personal Info",children:y.filter(e=>e.sector==="personal").map(e=>a.jsxs("div",{children:[a.jsx(f,{level:"1",weight:"2",className:"p-6 text-[--tg-theme-hint-color]",children:e.displayName}),e.name==="photoUrl"&&a.jsxs(m,{after:e.editable&&d&&a.jsx(W,{id:"input_file",onChange:L,accept:"image/png, image/jpeg"}),children:[j.includes(e.name)&&a.jsx(G,{type:"number",mode:"critical",large:!0,className:"absolute left-2 top-2 z-10",children:"Edited"}),a.jsx(Y,{size:96,src:s.photoUrl?s.photoUrl:w.isDark?q:$})]}),e.name!=="photoUrl"&&a.jsx(a.Fragment,{children:d&&e.editable?a.jsx(K,{readOnly:!(d&&e.editable),status:j.includes(e.name)?"error":"default",inputMode:"text",placeholder:e.displayName,value:s[e.name],onChange:l=>{switch(e.name){case"username":c({...s,username:l.currentTarget.value});break;case"email":c({...s,email:l.currentTarget.value});break;case"fullName":c({...s,fullName:l.currentTarget.value});break}}}):a.jsx(m,{multiline:n,onClick:()=>p(!n),children:s[e.name]})})]},e.name))}),a.jsx(x,{header:"System Info",children:y.filter(e=>e.sector==="system").map(e=>a.jsxs("div",{children:[a.jsx(f,{level:"1",weight:"2",className:"pl-6 text-[--tg-theme-hint-color]",children:e.displayName}),a.jsx(m,{multiline:n,onClick:()=>p(!n),children:s[e.name]})]},e.name))}),a.jsx(x,{header:"Other Info",children:y.filter(e=>e.sector==="others").map(e=>a.jsxs("div",{children:[a.jsx(f,{level:"1",weight:"2",className:"p-6 text-[--tg-theme-hint-color]",children:e.displayName}),a.jsx(m,{multiline:n,onClick:()=>p(!n),children:s[e.name]})]},e.name))}),a.jsx(x,{header:"Geolocation Info",children:Q.map(e=>{var l;return a.jsxs("div",{children:[a.jsx(f,{level:"1",weight:"2",className:"p-6 text-[--tg-theme-hint-color]",children:e.displayName}),a.jsx(m,{multiline:n,onClick:()=>p(!n),children:(l=U[e.name])==null?void 0:l.toString()})]},e.name)})})]}),d&&a.jsx("div",{className:"sticky bottom-1",children:a.jsxs("div",{className:"flex flex-row justify-center items-center",children:[a.jsx(b,{className:"bg-green-400 w-full",onClick:A,children:"Confirm"}),a.jsx(b,{className:"bg-red-400 w-full",onClick:D,children:"Cancel"})]})})]}):a.jsx(_,{children:"Something went wrong with user"}):a.jsx(J,{header:"Oops",description:"Application was launched with missing init data",children:a.jsx("img",{alt:"Telegram sticker",src:"https://xelene.me/telegram.gif",style:{display:"block",width:"144px",height:"144px"}})})};export{ee as Profile};

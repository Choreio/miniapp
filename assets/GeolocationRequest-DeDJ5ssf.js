import{_ as m,v as p,j as e,n as b,o as h,p as g,q as x,C as f,r as d,d as j,T as u,z as v,K as N}from"./index-CxKkgm4H.js";import{G as y,M as C}from"./MapContainerYandex-BpYBRbek.js";import{L as G,B as L}from"./Section-Irb3Rn6-.js";const w=t=>{var{selected:s,className:o,children:n}=t,l=m(t,["selected","className","children"]);const a=p();return e.jsx(b,h(g({role:"tab",Component:"button",className:x("tgui-bbfb272d22eb23e8",a==="ios"&&"tgui-513fce1023cbbd63",o)},l),{children:e.jsx(f,{weight:s?"2":"3",children:n})}))},_=t=>{var{className:s,children:o}=t,n=m(t,["className","children"]);const l=p(),a=d.Children.toArray(o),r=a.findIndex(i=>d.isValidElement(i)&&i.props.selected),c=`translateX(${100*r}%)`;return e.jsx("div",h(g({role:"tablist",className:x("tgui-71259e3311d7116e",l==="ios"&&"tgui-16c6b1986a48e2b5",s)},n),{children:e.jsxs("div",{className:"tgui-b0a9057ab5d33005",children:[r>-1&&e.jsx("div",{"aria-hidden":!0,className:"tgui-31f461ccfea23ec3",style:{width:`${100/a.length}%`,transform:c}}),o]})}))};_.Item=w;const S=()=>{var l,a,r,c,i;const t=j(),[s,o]=d.useState({available:!1,latLong:{latitude:"",longitude:""},address:{formattedAdress:"",country:"",city:"",street:"",house:""}}),n=()=>{t(N(s))};return e.jsxs(G,{className:"overflow-visible bg-[--tg-theme-bg-color] mt-4",children:[e.jsxs("div",{className:"flex flex-col gap-4 p-4 text-center",children:[e.jsx(u,{children:"To provide accurate information we need your geolocation."}),e.jsx(v,{children:"We cannot automatically determine your location, so please let us know where you are"})]}),e.jsx(y,{geoposition:s,setGeoposition:o}),s.available&&e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(u,{children:"Chosen geolocation"}),e.jsxs("span",{children:["Address: ",(l=s.address)==null?void 0:l.formattedAdress]}),e.jsxs("span",{children:["Latitude, Longitude:"," ",((a=s.latLong)==null?void 0:a.latitude)+", "+((r=s.latLong)==null?void 0:r.longitude)]}),e.jsx(C,{available:s.available,type:"self",className:"p-2 w-full h-64 self-center",center:{latitude:Number((c=s.latLong)==null?void 0:c.latitude),longitude:Number((i=s.latLong)==null?void 0:i.longitude)}}),e.jsx(L,{onClick:n,children:"Confirm"})]})]})};export{S as G,_ as S,w as a};

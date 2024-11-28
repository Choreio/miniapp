import{c,d as u,u as p,j as e,r as m}from"./index-CD5OBiba.js";import{G as x}from"./GeolocationRequest-BrLl8U8R.js";import{M as f}from"./MapContainerYandex-CaZYqg7v.js";import"./Section-Yl5zceUz.js";import"./Input-D56nivfP.js";const N=({tasks:r,radius:d=0})=>{const{available:a,latLong:t,address:i}=c(u),n=p();return a?e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{children:["Current address: ",i==null?void 0:i.formattedAdress]}),e.jsxs("div",{className:"flex-col hidden",children:[e.jsx("span",{children:"Geolocation is available"}),e.jsxs("span",{children:["Latitude: ",t==null?void 0:t.latitude]}),e.jsxs("span",{children:["Longitude: ",t==null?void 0:t.longitude]})]}),t&&e.jsx("div",{className:"flex flex-col gap-7",children:e.jsx(m.Suspense,{fallback:e.jsx("div",{className:"w-full h-[--tg-viewport-width] bg-slate-300 rounded-full overflow-hidden"}),children:e.jsx(f,{available:a,type:"self",className:"p-2 w-full h-[--tg-viewport-width] overflow-hidden z-0",center:{latitude:Number(t.latitude),longitude:Number(t.longitude)},points:r.map(s=>{var l,o;return{taskId:s.id,latitude:Number((l=s.location.latLong)==null?void 0:l.latitude),longitude:Number((o=s.location.latLong)==null?void 0:o.longitude),onBubbleClick:()=>{n("/tasks/task/"+s.id)}}}),radius:d})})})]}):e.jsx(x,{})};export{N as TasksMap};

import{r as t,c,b as o,j as s,O as i}from"./index-BOnYdaJs.js";import{T as d,a as n}from"./Tabbar-COvd-t6Y.js";function h({title:e,titleId:a,...r},l){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":a},r),e?t.createElement("title",{id:a},e):null,t.createElement("path",{d:"M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z"}))}const m=t.forwardRef(h);function w({title:e,titleId:a,...r},l){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":a},r),e?t.createElement("title",{id:a},e):null,t.createElement("path",{d:"M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z"}))}const u=t.forwardRef(w);function x({title:e,titleId:a,...r},l){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":a},r),e?t.createElement("title",{id:a},e):null,t.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z",clipRule:"evenodd"}))}const f=t.forwardRef(x),b=()=>{const e=c(),a=o();return s.jsxs("div",{children:[s.jsx("div",{className:"pb-12",children:s.jsx(i,{})}),s.jsxs(d,{children:[s.jsx(n,{text:"Tasks",selected:e.pathname==="/tasks/all/list",onClick:()=>a("/tasks/all/list"),children:s.jsx(u,{className:"h-7 w-7"})}),s.jsx(n,{text:"New task",selected:e.pathname==="/tasks/create",onClick:()=>a("/tasks/create"),children:s.jsx(f,{className:"h-8 w-8"})}),s.jsx(n,{text:"My tasks",selected:e.pathname==="/tasks/my/list",onClick:()=>a("/tasks/my/list"),children:s.jsx(m,{className:"h-7 w-7"})})]})]})};export{b as TasksPage};

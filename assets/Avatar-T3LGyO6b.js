import{_ as n,j as r,a1 as i,n as p,p as c,o,C as b,T as g,B as j}from"./index-B8PaqVDj.js";import{I as d}from"./FileInput-BzuWWlvH.js";const f=e=>{var{className:s,Component:a}=e,t=n(e,["className","Component"]);return r.jsx(i,p(o({},t),{className:c("tgui-e05fce4753086879",s),Component:a||"h5"}))},y=e=>{var{className:s,Component:a}=e,t=n(e,["className","Component"]);return r.jsx(i,p(o({},t),{Component:a||"h1",className:c("tgui-c6d7432a5c12debe",s)}))},N=e=>{var{size:s}=e,a=n(e,["size"]);return s?s<=28?r.jsx(b,o({level:s<=24?"2":"1",weight:"1",caps:!0},a)):s===40?r.jsx(f,o({weight:"2",caps:!0},a)):s===48?r.jsx(g,o({weight:"1",level:"3",caps:!0},a)):r.jsx(y,o({weight:"1",caps:!0},a)):null},x=e=>{var{type:s,className:a}=e,t=n(e,["type","className"]);if(s!=="number")throw new Error('[ImageBadge]: Component supports only type="number"');return r.jsx(j,o({type:"number",className:c("tgui-54214e0db34f53c3",a)},t))},h=e=>{var{className:s,style:a,acronym:t,fallbackIcon:m,size:l}=e,u=n(e,["className","style","acronym","fallbackIcon","size"]);return r.jsx(d,o({style:o({borderRadius:"50%"},a),className:c("tgui-91c5537b51b490a7",t&&"tgui-305551eb3f5abb68",s),fallbackIcon:t?r.jsx(N,{size:l,children:t}):m,size:l},u))};h.Badge=x;export{h as A};

import{c as a,d as r}from"./render.6d9e07d4.js";import{c as t,h as l}from"./index.69897b4a.js";var p=a({name:"QToolbarTitle",props:{shrink:Boolean},setup(o,{slots:e}){const s=t(()=>"q-toolbar__title ellipsis"+(o.shrink===!0?" col-shrink":""));return()=>l("div",{class:s.value},r(e.default))}}),c=a({name:"QToolbar",props:{inset:Boolean},setup(o,{slots:e}){const s=t(()=>"q-toolbar row no-wrap items-center"+(o.inset===!0?" q-toolbar--inset":""));return()=>l("div",{class:s.value},r(e.default))}});export{c as Q,p as a};
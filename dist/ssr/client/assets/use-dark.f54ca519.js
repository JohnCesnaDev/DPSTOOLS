import{c as s,d as t}from"./render.d340d1e0.js";import{e as r,h as l}from"./index.0ffeee01.js";var u=s({name:"QToolbarTitle",props:{shrink:Boolean},setup(a,{slots:e}){const o=r(()=>"q-toolbar__title ellipsis"+(a.shrink===!0?" col-shrink":""));return()=>l("div",{class:o.value},t(e.default))}}),c=s({name:"QToolbar",props:{inset:Boolean},setup(a,{slots:e}){const o=r(()=>"q-toolbar row no-wrap items-center"+(a.inset===!0?" q-toolbar--inset":""));return()=>l("div",{class:o.value},t(e.default))}});const p={dark:{type:Boolean,default:null}};function d(a,e){return r(()=>a.dark===null?e.dark.isActive:a.dark)}export{c as Q,d as a,u as b,p as u};
var F=Object.defineProperty,Q=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var y=(e,l,a)=>l in e?F(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,p=(e,l)=>{for(var a in l||(l={}))B.call(l,a)&&y(e,a,l[a]);if(h)for(var a of h(l))k.call(l,a)&&y(e,a,l[a]);return e},_=(e,l)=>Q(e,S(l));import{u as T,a as D,Q as C,b as q}from"./use-dark.a3287d65.js";import{u as V,a as I,Q as w,b as E}from"./QTable.3f0223e0.js";import{d as N,a as O}from"./QBtn.3a61197d.js";import{Q as x}from"./QCard.2aa048ed.js";import{e as v,h as d,T as P,g as U,r as c,E as $,F as i,D as z,O as f,G as s,I as A}from"./index.506c2682.js";import{c as L}from"./render.82eb6b75.js";import{Q as R}from"./QPage.38a6af11.js";import{api as j}from"./axios.756a264a.js";import"./QItem.78de25a6.js";var G=L({name:"QInnerLoading",props:_(p(p({},T),V),{showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]}),setup(e,{slots:l}){const a=U(),o=D(e,a.proxy.$q),{transition:m,transitionStyle:g}=I(e,v(()=>e.showing)),u=v(()=>"q-inner-loading absolute-full column flex-center"+(o.value===!0?" q-inner-loading--dark":"")),b=v(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function r(){const n=[d(N,{size:e.size,color:e.color})];return e.label!==void 0&&n.push(d("div",{class:b.value,style:e.labelStyle},[e.label])),n}function t(){return e.showing===!0?d("div",{class:u.value,style:g.value},l.default!==void 0?l.default():r()):null}return()=>d(P,{name:m.value,appear:!0},t)}});const H={class:"row items-start q-gutter-md"},J=A(" Commande "),K={style:{margin:"15px"}},M={class:"col column q-gutter-md"},W=A("Article"),X={style:{margin:"15px"}},oe={setup(e){const l=c([]),a=c(),o=c(),m=c(!1),g=[{name:"fournisseur",required:!0,align:"left",label:"Fournisseur",headerStyle:"width: 90px",field:r=>r.COFOU},{name:"cobc",required:!0,align:"left",label:"Commande",headerStyle:"width: 90px",field:"COBC"},{name:"naf",required:!0,align:"left",label:"Affaire",headerStyle:"width: 70px",field:"NAF"},{name:"article",required:!0,align:"left",label:"Arcticle",field:"ART"},{name:"desa1",required:!0,align:"left",label:"Descriptif 1",field:"DESA1"},{name:"desa2",required:!0,align:"left",label:"Descriptif 2",field:"DESA2"},{name:"desa3",required:!0,align:"left",label:"Descriptif 3",field:"DESA3"},{name:"quantite",required:!0,align:"left",label:"Quantit\xE9",headerStyle:"width: 90px",field:"QTE"}];function u(r){r=="BC"?o.value="":r=="AFF"&&(a.value="")}function b(){if(o.value||a.value){const r=a.value,t=o.value;j.get("/BC",{params:{BC:r,AFF:t}}).then(function(n){l.value=n.data}).catch(function(n){alert(n)}).then(function(){})}}return(r,t)=>(z(),$(R,{class:"flex flex-center"},{default:i(()=>[f("div",H,[s(x,{class:"shadow-10 q-card--bordered",style:{height:"800px"}},{default:i(()=>[s(C,null,{default:i(()=>[s(q,null,{default:i(()=>[J]),_:1})]),_:1}),f("div",K,[f("div",M,[s(w,{outlined:"",type:"number",label:"Commande","stack-label":"",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=n=>a.value=n),onFocus:t[1]||(t[1]=n=>u("BC"))},null,8,["modelValue"]),s(w,{outlined:"",type:"number",label:"Affaire","stack-label":"",modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=n=>o.value=n),onFocus:t[3]||(t[3]=n=>u("AFF"))},null,8,["modelValue"]),s(O,{onClick:b,color:"primary",label:"Recherche"})])])]),_:1}),s(x,{class:"shadow-10 q-card--bordered",style:{height:"800px","min-width":"1000px"}},{default:i(()=>[s(C,null,{default:i(()=>[s(q,null,{default:i(()=>[W]),_:1})]),_:1}),f("div",X,[s(E,{class:"my-sticky-header-table",style:{height:"715px"},flat:"",bordered:"",rows:l.value,columns:g,"row-key":"article",separator:"cell","rows-per-page-options":[0],"virtual-scroll":"",selected:r.selected,"onUpdate:selected":t[4]||(t[4]=n=>r.selected=n),loading:m.value},{loading:i(()=>[s(G,{showing:"",color:"primary"})]),_:1},8,["rows","selected","loading"])])]),_:1})])]),_:1}))}};export{oe as default};

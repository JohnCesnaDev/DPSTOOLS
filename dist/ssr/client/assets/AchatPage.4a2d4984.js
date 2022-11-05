var w=Object.defineProperty,x=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var y=(e,l,a)=>l in e?w(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,v=(e,l)=>{for(var a in l||(l={}))S.call(l,a)&&y(e,a,l[a]);if(_)for(var a of _(l))k.call(l,a)&&y(e,a,l[a]);return e},C=(e,l)=>x(e,B(l));import{u as T,a as D,Q as h,b as q}from"./use-dark.146f1239.js";import{u as V,a as I,Q as F,b as E}from"./QTable.cc11e080.js";import{d as N,a as O}from"./QBtn.4173284b.js";import{Q as A}from"./QCard.a81ff7f2.js";import{e as p,h as d,T as P,g as U,r as c,E as $,F as o,D as z,O as f,G as s,I as Q}from"./index.bdeef9a6.js";import{c as L}from"./render.44ca4160.js";import{Q as R}from"./QPage.583e55fa.js";import{api as j}from"./axios.c67ba24d.js";import"./QItem.4e496d80.js";var G=L({name:"QInnerLoading",props:C(v(v({},T),V),{showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]}),setup(e,{slots:l}){const a=U(),i=D(e,a.proxy.$q),{transition:m,transitionStyle:g}=I(e,p(()=>e.showing)),u=p(()=>"q-inner-loading absolute-full column flex-center"+(i.value===!0?" q-inner-loading--dark":"")),b=p(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function r(){const n=[d(N,{size:e.size,color:e.color})];return e.label!==void 0&&n.push(d("div",{class:b.value,style:e.labelStyle},[e.label])),n}function t(){return e.showing===!0?d("div",{class:u.value,style:g.value},l.default!==void 0?l.default():r()):null}return()=>d(P,{name:m.value,appear:!0},t)}});const H={class:"row items-start q-gutter-md"},J=Q(" Commande "),K={style:{margin:"15px"}},M={class:"col column q-gutter-md"},W=Q("Article"),X={style:{margin:"15px"}},ie={setup(e){const l=c([]),a=c(),i=c(),m=c(!1),g=[{name:"fournisseur",required:!0,align:"left",label:"Fournisseur",field:r=>r.COFOU},{name:"cobc",required:!0,align:"left",label:"Commande Fournisseur",field:"COBC"},{name:"naf",required:!0,align:"left",label:"Affaire",field:"NAF"},{name:"article",required:!0,align:"left",label:"Arcticle",field:"ART"},{name:"desa1",required:!0,align:"left",label:"Descriptif 1",field:"DESA1"},{name:"desa2",required:!0,align:"left",label:"Descriptif 2",field:"DESA2"},{name:"desa3",required:!0,align:"left",label:"Descriptif 3",field:"DESA3"},{name:"quantite",required:!0,align:"left",label:"Quantit\xE9",field:"QTE"}];function u(r){r=="BC"?i.value="":r=="AFF"&&(a.value="")}function b(){if(i.value||a.value){const r=a.value,t=i.value;j.get("/BC",{params:{BC:r,AFF:t}}).then(function(n){l.value=n.data}).catch(function(n){alert(n)}).then(function(){})}}return(r,t)=>(z(),$(R,{class:"flex flex-center"},{default:o(()=>[f("div",H,[s(A,{class:"shadow-10 q-card--bordered",style:{height:"800px"}},{default:o(()=>[s(h,null,{default:o(()=>[s(q,null,{default:o(()=>[J]),_:1})]),_:1}),f("div",K,[f("div",M,[s(F,{outlined:"",type:"number",label:"Commande","stack-label":"",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=n=>a.value=n),onFocus:t[1]||(t[1]=n=>u("BC"))},null,8,["modelValue"]),s(F,{outlined:"",type:"number",label:"Affaire","stack-label":"",modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=n=>i.value=n),onFocus:t[3]||(t[3]=n=>u("AFF"))},null,8,["modelValue"]),s(O,{onClick:b,color:"primary",label:"Recherche"})])])]),_:1}),s(A,{class:"shadow-10 q-card--bordered",style:{height:"800px","min-width":"1000px"}},{default:o(()=>[s(h,null,{default:o(()=>[s(q,null,{default:o(()=>[W]),_:1})]),_:1}),f("div",X,[s(E,{class:"my-sticky-header-table",style:{height:"715px"},flat:"",bordered:"",rows:l.value,columns:g,"row-key":"article",separator:"cell","rows-per-page-options":[0],"virtual-scroll":"",selected:r.selected,"onUpdate:selected":t[4]||(t[4]=n=>r.selected=n),loading:m.value},{loading:o(()=>[s(G,{showing:"",color:"primary"})]),_:1},8,["rows","selected","loading"])])]),_:1})])]),_:1}))}};export{ie as default};

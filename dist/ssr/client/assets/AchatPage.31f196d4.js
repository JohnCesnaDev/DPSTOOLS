var A=Object.defineProperty,S=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var h=(e,l,a)=>l in e?A(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,b=(e,l)=>{for(var a in l||(l={}))T.call(l,a)&&h(e,a,l[a]);if(_)for(var a of _(l))D.call(l,a)&&h(e,a,l[a]);return e},y=(e,l)=>S(e,k(l));import{a as V,d as B,p as q,q as C}from"./QItem.96a0862e.js";import{u as F,a as I,Q,b as w,c as E}from"./QTable.3b1f44df.js";import{d as N,a as O}from"./QBtn.4d46c0af.js";import{e as p,h as d,T as P,g as U,r as u,E as z,F as s,D as L,O as c,G as n,I as x}from"./index.13971b35.js";import{c as R}from"./render.5b580624.js";import{Q as $}from"./QPage.f9cc3ede.js";import{api as j}from"./axios.ccb6494b.js";var G=R({name:"QInnerLoading",props:y(b(b({},V),F),{showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]}),setup(e,{slots:l}){const a=U(),o=B(e,a.proxy.$q),{transition:f,transitionStyle:m}=I(e,p(()=>e.showing)),g=p(()=>"q-inner-loading absolute-full column flex-center"+(o.value===!0?" q-inner-loading--dark":"")),r=p(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function t(){const v=[d(N,{size:e.size,color:e.color})];return e.label!==void 0&&v.push(d("div",{class:r.value,style:e.labelStyle},[e.label])),v}function i(){return e.showing===!0?d("div",{class:g.value,style:m.value},l.default!==void 0?l.default():t()):null}return()=>d(P,{name:f.value,appear:!0},i)}});const H={class:"row items-start q-gutter-md"},J=x(" Commande "),K={style:{margin:"10px"}},M={class:"col column q-gutter-sm"},W=x("Article"),X={style:{margin:"15px"}},se={setup(e){const l=u([]),a=u(),o=u(),f=u(!1),m=[{name:"fournisseur",required:!0,align:"left",label:"Fournisseur",field:r=>r.COFOU},{name:"naf",required:!0,align:"left",label:"Affaire",field:"NAF"},{name:"article",required:!0,align:"left",label:"Arcticle",field:"ART"},{name:"desa1",required:!0,align:"left",label:"Descriptif 1",field:"DESA1"},{name:"desa2",required:!0,align:"left",label:"Descriptif 2",field:"DESA2"},{name:"desa3",required:!0,align:"left",label:"Descriptif 3",field:"DESA3"},{name:"quantite",required:!0,align:"left",label:"Quantit\xE9",field:"QTE"}];function g(){const r=a.value;j.get("/BC",{params:{id:r}}).then(function(t){l.value=t.data}).catch(function(t){alert(t)}).then(function(){})}return(r,t)=>(L(),z($,{class:"flex flex-center"},{default:s(()=>[c("div",H,[n(w,{class:"shadow-10 q-card--bordered",style:{height:"800px"}},{default:s(()=>[n(q,null,{default:s(()=>[n(C,null,{default:s(()=>[J]),_:1})]),_:1}),c("div",K,[c("div",M,[n(Q,{outlined:"",type:"number",label:"Commande","stack-label":"",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=i=>a.value=i)},null,8,["modelValue"]),n(Q,{outlined:"",type:"number",label:"Affaire","stack-label":"",modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=i=>o.value=i),disable:""},null,8,["modelValue"]),n(O,{onClick:g,color:"primary",label:"Recherche"})])])]),_:1}),n(w,{class:"shadow-10 q-card--bordered",style:{height:"800px","min-width":"1000px"}},{default:s(()=>[n(q,null,{default:s(()=>[n(C,null,{default:s(()=>[W]),_:1})]),_:1}),c("div",X,[n(E,{class:"my-sticky-header-table",style:{height:"715px"},flat:"",bordered:"",rows:l.value,columns:m,"row-key":"article",separator:"cell","rows-per-page-options":[0],"virtual-scroll":"",selected:r.selected,"onUpdate:selected":t[2]||(t[2]=i=>r.selected=i),loading:f.value},{loading:s(()=>[n(G,{showing:"",color:"primary"})]),_:1},8,["rows","selected","loading"])])]),_:1})])]),_:1}))}};export{se as default};

import{Q as m,a as c}from"./QToolbar.0e15cd89.js";import{Q as p,a as _}from"./QTable.38bb5f37.js";import{a as y}from"./QBtn.c6638eff.js";import{Q as g}from"./QCard.33140f1b.js";import{Q as w}from"./QInnerLoading.03a59763.js";import{Q as x}from"./QPage.cca79e10.js";import{api as A}from"./axios.2f4f34d7.js";import{r as s,E as F,F as r,D as q,O as n,G as a,I as b}from"./index.601e6d44.js";import"./render.7c018b54.js";import"./use-dark.40211699.js";import"./QItem.327b5a9b.js";import"./create-uploader-component.95daf45f.js";import"./format.2a3572e1.js";const C={class:"row items-start q-gutter-md"},Q=b(" Commande "),B={style:{margin:"15px"}},D={class:"col column q-gutter-md"},S=b("Article"),V={style:{margin:"15px"}},H={setup(T){const u=s([]),i=s(),o=s(),d=s(!1),h=[{name:"fournisseur",required:!0,align:"left",label:"Fournisseur",headerStyle:"width: 90px",field:e=>e.COFOU},{name:"cobc",required:!0,align:"left",label:"Commande",headerStyle:"width: 90px",field:"COBC"},{name:"naf",required:!0,align:"left",label:"Affaire",headerStyle:"width: 70px",field:"NAF"},{name:"date",required:!0,align:"left",label:"Date",headerStyle:"width: 70px",field:"DATE",format:(e,l)=>`${e.substring(6,8)}/${e.substring(4,6)}/${e.substring(0,4)}`},{name:"delai",required:!0,align:"left",label:"Delai",headerStyle:"width: 70px",field:"DELAI",format:(e,l)=>`${e.substring(6,8)}/${e.substring(4,6)}/${e.substring(0,4)}`},{name:"article",required:!0,align:"left",label:"Arcticle",field:"ART"},{name:"desa1",required:!0,align:"left",label:"Descriptif 1",field:"DESA1"},{name:"desa2",required:!0,align:"left",label:"Descriptif 2",field:"DESA2"},{name:"desa3",required:!0,align:"left",label:"Descriptif 3",field:"DESA3"},{name:"quantite",required:!0,align:"left",label:"Quantit\xE9",headerStyle:"width: 90px",field:"QTE"}];function f(e){e=="BC"?o.value="":e=="AFF"&&(i.value="")}function v(){if(o.value||i.value){d.value=!0;const e=i.value,l=o.value;A.get("/BC",{params:{BC:e,AFF:l}}).then(function(t){u.value=t.data,d.value=!1}).catch(function(t){alert(t)}).then(function(){})}}return(e,l)=>(q(),F(x,{class:"flex flex-center"},{default:r(()=>[n("div",C,[a(g,{class:"shadow-10 q-card--bordered",style:{height:"800px"}},{default:r(()=>[a(m,null,{default:r(()=>[a(c,null,{default:r(()=>[Q]),_:1})]),_:1}),n("div",B,[n("div",D,[a(p,{outlined:"",type:"number",label:"Commande","stack-label":"",modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=t=>i.value=t),onFocus:l[1]||(l[1]=t=>f("BC"))},null,8,["modelValue"]),a(p,{outlined:"",type:"number",label:"Affaire","stack-label":"",modelValue:o.value,"onUpdate:modelValue":l[2]||(l[2]=t=>o.value=t),onFocus:l[3]||(l[3]=t=>f("AFF"))},null,8,["modelValue"]),a(y,{onClick:v,color:"primary",label:"Recherche"})])])]),_:1}),a(g,{class:"shadow-10 q-card--bordered",style:{height:"800px","min-width":"1000px"}},{default:r(()=>[a(m,null,{default:r(()=>[a(c,null,{default:r(()=>[S]),_:1})]),_:1}),n("div",V,[a(_,{class:"my-sticky-header-table",style:{height:"715px"},flat:"",bordered:"",rows:u.value,columns:h,"row-key":"article",separator:"cell","rows-per-page-options":[0],"virtual-scroll":"",selected:e.selected,"onUpdate:selected":l[4]||(l[4]=t=>e.selected=t),loading:d.value},{loading:r(()=>[a(w,{showing:"",color:"primary"})]),_:1},8,["rows","selected","loading"])])]),_:1})])]),_:1}))}};export{H as default};
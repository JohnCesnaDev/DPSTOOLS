import{Q as m,a as f}from"./QToolbar.0e15cd89.js";import{Q as c,a as _}from"./QTable.38bb5f37.js";import{a as y}from"./QBtn.c6638eff.js";import{Q as p}from"./QCard.33140f1b.js";import{Q as F}from"./QInnerLoading.03a59763.js";import{Q as x}from"./QPage.cca79e10.js";import{api as C}from"./axios.2f4f34d7.js";import{r as s,E as Q,F as r,D as w,O as n,G as a,I as g}from"./index.601e6d44.js";import"./render.7c018b54.js";import"./use-dark.40211699.js";import"./QItem.327b5a9b.js";import"./create-uploader-component.95daf45f.js";import"./format.2a3572e1.js";const A={class:"row items-start q-gutter-md"},q=g(" Commande "),B={style:{margin:"15px"}},V={class:"col column q-gutter-md"},D=g("Article"),k={style:{margin:"15px"}},H={setup(S){const d=s([]),o=s(),i=s(),v=s(!1),b=[{name:"fournisseur",required:!0,align:"left",label:"Fournisseur",headerStyle:"width: 90px",field:t=>t.COFOU},{name:"cobc",required:!0,align:"left",label:"Commande",headerStyle:"width: 90px",field:"COBC"},{name:"naf",required:!0,align:"left",label:"Affaire",headerStyle:"width: 70px",field:"NAF"},{name:"article",required:!0,align:"left",label:"Arcticle",field:"ART"},{name:"desa1",required:!0,align:"left",label:"Descriptif 1",field:"DESA1"},{name:"desa2",required:!0,align:"left",label:"Descriptif 2",field:"DESA2"},{name:"desa3",required:!0,align:"left",label:"Descriptif 3",field:"DESA3"},{name:"quantite",required:!0,align:"left",label:"Quantit\xE9",headerStyle:"width: 90px",field:"QTE"}];function u(t){t=="BC"?i.value="":t=="AFF"&&(o.value="")}function h(){if(i.value||o.value){const t=o.value,e=i.value;C.get("/BC",{params:{BC:t,AFF:e}}).then(function(l){d.value=l.data}).catch(function(l){alert(l)}).then(function(){})}}return(t,e)=>(w(),Q(x,{class:"flex flex-center"},{default:r(()=>[n("div",A,[a(p,{class:"shadow-10 q-card--bordered",style:{height:"800px"}},{default:r(()=>[a(m,null,{default:r(()=>[a(f,null,{default:r(()=>[q]),_:1})]),_:1}),n("div",B,[n("div",V,[a(c,{outlined:"",type:"number",label:"Commande","stack-label":"",modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l),onFocus:e[1]||(e[1]=l=>u("BC"))},null,8,["modelValue"]),a(c,{outlined:"",type:"number",label:"Affaire","stack-label":"",modelValue:i.value,"onUpdate:modelValue":e[2]||(e[2]=l=>i.value=l),onFocus:e[3]||(e[3]=l=>u("AFF"))},null,8,["modelValue"]),a(y,{onClick:h,color:"primary",label:"Recherche"})])])]),_:1}),a(p,{class:"shadow-10 q-card--bordered",style:{height:"800px","min-width":"1000px"}},{default:r(()=>[a(m,null,{default:r(()=>[a(f,null,{default:r(()=>[D]),_:1})]),_:1}),n("div",k,[a(_,{class:"my-sticky-header-table",style:{height:"715px"},flat:"",bordered:"",rows:d.value,columns:b,"row-key":"article",separator:"cell","rows-per-page-options":[0],"virtual-scroll":"",selected:t.selected,"onUpdate:selected":e[4]||(e[4]=l=>t.selected=l),loading:v.value},{loading:r(()=>[a(F,{showing:"",color:"primary"})]),_:1},8,["rows","selected","loading"])])]),_:1})])]),_:1}))}};export{H as default};
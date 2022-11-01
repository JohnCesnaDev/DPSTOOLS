var x=Object.create;var c=Object.defineProperty;var H=Object.getOwnPropertyDescriptor;var Q=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols,U=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var R=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))P.call(r,t)&&R(e,t,r[t]);if(y)for(var t of y(r))V.call(r,t)&&R(e,t,r[t]);return e};var J=(e,r)=>()=>(e&&(r=e(e=0)),r);var S=(e,r)=>{for(var t in r)c(e,t,{get:r[t],enumerable:!0})},$=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of Q(r))!P.call(e,s)&&s!==t&&c(e,s,{get:()=>r[s],enumerable:!(n=H(r,s))||n.enumerable});return e};var l=(e,r,t)=>(t=e!=null?x(U(e)):{},$(r||!e||!e.__esModule?c(t,"default",{value:e,enumerable:!0}):t,e)),z=e=>$(c({},"__esModule",{value:!0}),e);var D={};S(D,{default:()=>te});var F,te,j=J(()=>{F=require("quasar/wrappers"),te=(0,F.ssrMiddleware)(({app:e,resolve:r,render:t,serve:n})=>{e.get(r.urlPath("*"),(s,o)=>{o.setHeader("Content-Type","text/html"),t({req:s,res:o}).then(i=>{o.send(i)}).catch(i=>{i.url?i.code?o.redirect(i.code,i.url):o.redirect(i.url):i.code===404?o.status(404).send("404 | Page Not Found"):o.status(500).send("500 | Internal Server Error")})})})});var le={};S(le,{default:()=>ce});module.exports=z(le);var a=require("path"),k=require("vue/server-renderer"),A=l(require("./render-template.js")),f=l(require("./quasar.manifest.json")),q=l(require("./server/server-entry.js"));var g=l(require("express")),b=l(require("compression"));function C(){let e=(0,g.default)();e.disable("x-powered-by");var r=require("cors");e.use(r());let t=require("odbc");return e.get("/BC",(n,s)=>{let o=n.query.id;console.log(o),console.log(parseInt(o)),console.time("obdc"),o!==null&&(t.pool("DSN=HFSQL",(i,d)=>{if(i)return;console.time("query");let de=d.query("SELECT COFOU,NAF,COCLI,ART,DESA1,DESA2,DESA3,QTE FROM DETAILBC LEFT JOIN BC ON DETAILBC.COBC = BC.COBC where BC.COBC=2330",(v,ue)=>{v&&console.log(v)});console.timeEnd("query")}),console.timeEnd("obdc"))}),e.use((0,b.default)()),e}async function O({app:e,port:r,isReady:t}){return await t(),await e.listen(r,()=>{console.log("Server listening at port "+r)})}var G=1e3*60*60*24*30;function T(e,r){return g.default.static(e,u({maxAge:G},r))}var K=/\.js$/,W=/\.css$/,X=/\.woff$/,Y=/\.woff2$/,Z=/\.gif$/,ee=/\.jpe?g$/,re=/\.png$/;function h(e){return K.test(e)===!0?`<link rel="modulepreload" href="${e}" crossorigin>`:W.test(e)===!0?`<link rel="stylesheet" href="${e}">`:X.test(e)===!0?`<link rel="preload" href="${e}" as="font" type="font/woff" crossorigin>`:Y.test(e)===!0?`<link rel="preload" href="${e}" as="font" type="font/woff2" crossorigin>`:Z.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/gif">`:ee.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/jpeg">`:re.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/png">`:""}function E(e){return Promise.all([Promise.resolve().then(()=>(j(),D))]).then(async r=>{let t=r.map(n=>n.default);for(let n=0;n<t.length;n++)try{await t[n](e)}catch(s){console.error("[Quasar SSR] middleware error:",s);return}})}var oe=process.env.PORT||3e3,ne=/\/\//g,p="/",L=p==="/"?e=>e||"/":e=>e?(p+e).replace(ne,"/"):p,B=__dirname,_=(0,a.join)(__dirname,"client");function I(){return(0,a.join)(_,...arguments)}function se(e){let r="",t=new Set;return e.forEach(n=>{let s=f.default[n];s!==void 0&&s.forEach(o=>{if(t.has(o)===!0)return;t.add(o);let i=(0,a.basename)(o);if(f.default[i]!==void 0)for(let d of f.default[i])r+=h(d),t.add(d);r+=h(o)})}),r}async function ie(e){let r=[];Object.assign(e,{_meta:{},onRendered:t=>{r.push(t)}});try{let t=await(0,q.default)(e),n=await(0,k.renderToString)(t,e);return r.forEach(s=>{s()}),typeof e.rendered=="function"&&e.rendered(),e._meta.runtimePageContent=n,e._meta.endingHeadTags+=se(e.modules),(0,A.default)(e)}catch(t){throw t}}var M=(e,r={})=>T(I(e),r),m={port:oe,resolve:{urlPath:L,root(){return(0,a.join)(B,...arguments)},public:I},publicPath:p,folders:{root:B,public:_},render:e=>ie(e),serve:{static:M}},w=C(m);m.app=w;w.use(L("/"),M("."));var N=()=>E(m),ae=(e,r,t)=>N().then(()=>w(e,r,t)),ce=O(u({isReady:N,ssrHandler:ae},m));0&&(module.exports={});

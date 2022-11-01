var Q=Object.create;var c=Object.defineProperty;var J=Object.getOwnPropertyDescriptor;var U=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,V=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var S=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))P.call(r,t)&&S(e,t,r[t]);if(R)for(var t of R(r))z.call(r,t)&&S(e,t,r[t]);return e};var G=(e,r)=>()=>(e&&(r=e(e=0)),r);var O=(e,r)=>{for(var t in r)c(e,t,{get:r[t],enumerable:!0})},$=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of U(r))!P.call(e,o)&&o!==t&&c(e,o,{get:()=>r[o],enumerable:!(n=J(r,o))||n.enumerable});return e};var d=(e,r,t)=>(t=e!=null?Q(V(e)):{},$(r||!e||!e.__esModule?c(t,"default",{value:e,enumerable:!0}):t,e)),K=e=>$(c({},"__esModule",{value:!0}),e);var j={};O(j,{default:()=>ne});var F,ne,B=G(()=>{F=require("quasar/wrappers"),ne=(0,F.ssrMiddleware)(({app:e,resolve:r,render:t,serve:n})=>{e.get(r.urlPath("*"),(o,s)=>{s.setHeader("Content-Type","text/html"),t({req:o,res:s}).then(i=>{s.send(i)}).catch(i=>{i.url?i.code?s.redirect(i.code,i.url):s.redirect(i.url):i.code===404?s.status(404).send("404 | Page Not Found"):s.status(500).send("500 | Internal Server Error")})})})});var ue={};O(ue,{default:()=>le});module.exports=K(ue);var a=require("path"),A=require("vue/server-renderer"),L=d(require("./render-template.js")),p=d(require("./quasar.manifest.json")),_=d(require("./server/server-entry.js"));var g=d(require("express")),b=d(require("compression"));function C(){let e=(0,g.default)();e.disable("x-powered-by");var r=require("cors");e.use(r());let t=require("odbc");return e.get("/BC:id",(n,o)=>{let s=n.params.id;console.log(parseInt(s)),console.time("obdc"),t.pool("DSN=HFSQL",(i,l)=>{if(i)return;console.time("query");let H=l.query("SELECT COFOU,COCLI,ART,DESA1,DESA2,DESA3,QTE FROM DETAILBC LEFT JOIN BC ON DETAILBC.COBC = BC.COBC where BC.COBC=2330",(v,y)=>(v&&console.log(v),console.log(y),y));o=JSON.stringify(H),console.timeEnd("query")}),console.timeEnd("obdc")}),e.use((0,b.default)()),e}async function T({app:e,port:r,isReady:t}){return await t(),await e.listen(r,()=>{console.log("Server listening at port "+r)})}var W=1e3*60*60*24*30;function D(e,r){return g.default.static(e,u({maxAge:W},r))}var X=/\.js$/,Y=/\.css$/,Z=/\.woff$/,ee=/\.woff2$/,re=/\.gif$/,te=/\.jpe?g$/,oe=/\.png$/;function h(e){return X.test(e)===!0?`<link rel="modulepreload" href="${e}" crossorigin>`:Y.test(e)===!0?`<link rel="stylesheet" href="${e}">`:Z.test(e)===!0?`<link rel="preload" href="${e}" as="font" type="font/woff" crossorigin>`:ee.test(e)===!0?`<link rel="preload" href="${e}" as="font" type="font/woff2" crossorigin>`:re.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/gif">`:te.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/jpeg">`:oe.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/png">`:""}function E(e){return Promise.all([Promise.resolve().then(()=>(B(),j))]).then(async r=>{let t=r.map(n=>n.default);for(let n=0;n<t.length;n++)try{await t[n](e)}catch(o){console.error("[Quasar SSR] middleware error:",o);return}})}var se=process.env.PORT||3e3,ie=/\/\//g,f="/",q=f==="/"?e=>e||"/":e=>e?(f+e).replace(ie,"/"):f,k=__dirname,I=(0,a.join)(__dirname,"client");function M(){return(0,a.join)(I,...arguments)}function ae(e){let r="",t=new Set;return e.forEach(n=>{let o=p.default[n];o!==void 0&&o.forEach(s=>{if(t.has(s)===!0)return;t.add(s);let i=(0,a.basename)(s);if(p.default[i]!==void 0)for(let l of p.default[i])r+=h(l),t.add(l);r+=h(s)})}),r}async function ce(e){let r=[];Object.assign(e,{_meta:{},onRendered:t=>{r.push(t)}});try{let t=await(0,_.default)(e),n=await(0,A.renderToString)(t,e);return r.forEach(o=>{o()}),typeof e.rendered=="function"&&e.rendered(),e._meta.runtimePageContent=n,e._meta.endingHeadTags+=ae(e.modules),(0,L.default)(e)}catch(t){throw t}}var N=(e,r={})=>D(M(e),r),m={port:se,resolve:{urlPath:q,root(){return(0,a.join)(k,...arguments)},public:M},publicPath:f,folders:{root:k,public:I},render:e=>ce(e),serve:{static:N}},w=C(m);m.app=w;w.use(q("/"),N("."));var x=()=>E(m),de=(e,r,t)=>x().then(()=>w(e,r,t)),le=T(u({isReady:x,ssrHandler:de},m));0&&(module.exports={});

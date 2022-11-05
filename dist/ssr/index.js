var J=Object.create;var u=Object.defineProperty;var U=Object.getOwnPropertyDescriptor;var V=Object.getOwnPropertyNames,O=Object.getOwnPropertySymbols,z=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var R=(e,r,t)=>r in e?u(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))v.call(r,t)&&R(e,t,r[t]);if(O)for(var t of O(r))G.call(r,t)&&R(e,t,r[t]);return e};var K=(e,r)=>()=>(e&&(r=e(e=0)),r);var B=(e,r)=>{for(var t in r)u(e,t,{get:r[t],enumerable:!0})},T=(e,r,t,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of V(r))!v.call(e,o)&&o!==t&&u(e,o,{get:()=>r[o],enumerable:!(i=U(r,o))||i.enumerable});return e};var d=(e,r,t)=>(t=e!=null?J(z(e)):{},T(r||!e||!e.__esModule?u(t,"default",{value:e,enumerable:!0}):t,e)),W=e=>T(u({},"__esModule",{value:!0}),e);var L={};B(L,{default:()=>se});var D,se,k=K(()=>{D=require("quasar/wrappers"),se=(0,D.ssrMiddleware)(({app:e,resolve:r,render:t,serve:i})=>{e.get(r.urlPath("*"),(o,s)=>{s.setHeader("Content-Type","text/html"),t({req:o,res:s}).then(n=>{s.send(n)}).catch(n=>{n.url?n.code?s.redirect(n.code,n.url):s.redirect(n.url):n.code===404?s.status(404).send("404 | Page Not Found"):s.status(500).send("500 | Internal Server Error")})})})});var fe={};B(fe,{default:()=>de});module.exports=W(fe);var c=require("path"),j=require("vue/server-renderer"),N=d(require("./render-template.js")),m=d(require("./quasar.manifest.json")),_=d(require("./server/server-entry.js"));var C=d(require("express")),A=d(require("compression"));function P(){let e=(0,C.default)();e.disable("x-powered-by");var r=require("cors");e.use(r());let t=require("odbc");e.get("/BC",(o,s)=>{let n=parseInt(o.query.BC),a=parseInt(o.query.AFF);console.log("bc = "+n),console.log("aff = "+n),(n!==null||a!==null)&&t.pool("DSN=HFSQL",(f,S)=>{f||(n!=""&&n!=null?console.log("BC ok"):a!=""&&a!=null&&console.log("AFF ok"))})}),e.get("/BCAFF",(o,s)=>{let n=parseInt(o.query.id);n!==null&&t.pool("DSN=HFSQL",(a,f)=>{let S=-1;a||(f.query("SELECT COBC FROM DETAILBC where NAF = "+n,(l,E)=>{l&&console.log(l),S=E}),commande!=-1&&f.query("SELECT COFOU,NAF,COCLI,ART,DESA1,DESA2,DESA3,QTE FROM DETAILBC LEFT JOIN BC ON DETAILBC.COBC = BC.COBC where BC.COBC= (SELECT COBC FROM DETAILBC where NAF = "+n+")",(l,E)=>{l&&console.log(l),s.end(i(E))}))})});function i(o){if(o!==void 0)return JSON.stringify(o,(s,n)=>typeof n=="bigint"?`${n}#bigint`:n).replace(/"(-?\d+)#bigint"/g,(s,n)=>n)}return e.use((0,A.default)()),e}async function b({app:e,port:r,isReady:t}){return await t(),await e.listen(r,()=>{console.log("Server listening at port "+r)})}var X=1e3*60*60*24*30;function $(e,r){return C.default.static(e,p({maxAge:X},r))}var Y=/\.js$/,Z=/\.css$/,ee=/\.woff$/,re=/\.woff2$/,te=/\.gif$/,ne=/\.jpe?g$/,oe=/\.png$/;function F(e){return Y.test(e)===!0?`<link rel="modulepreload" href="${e}" crossorigin>`:Z.test(e)===!0?`<link rel="stylesheet" href="${e}">`:ee.test(e)===!0?`<link rel="preload" href="${e}" as="font" type="font/woff" crossorigin>`:re.test(e)===!0?`<link rel="preload" href="${e}" as="font" type="font/woff2" crossorigin>`:te.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/gif">`:ne.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/jpeg">`:oe.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/png">`:""}function w(e){return Promise.all([Promise.resolve().then(()=>(k(),L))]).then(async r=>{let t=r.map(i=>i.default);for(let i=0;i<t.length;i++)try{await t[i](e)}catch(o){console.error("[Quasar SSR] middleware error:",o);return}})}var ie=process.env.PORT||3e3,ae=/\/\//g,g="/",M=g==="/"?e=>e||"/":e=>e?(g+e).replace(ae,"/"):g,I=__dirname,q=(0,c.join)(__dirname,"client");function H(){return(0,c.join)(q,...arguments)}function ce(e){let r="",t=new Set;return e.forEach(i=>{let o=m.default[i];o!==void 0&&o.forEach(s=>{if(t.has(s)===!0)return;t.add(s);let n=(0,c.basename)(s);if(m.default[n]!==void 0)for(let a of m.default[n])r+=F(a),t.add(a);r+=F(s)})}),r}async function le(e){let r=[];Object.assign(e,{_meta:{},onRendered:t=>{r.push(t)}});try{let t=await(0,_.default)(e),i=await(0,j.renderToString)(t,e);return r.forEach(o=>{o()}),typeof e.rendered=="function"&&e.rendered(),e._meta.runtimePageContent=i,e._meta.endingHeadTags+=ce(e.modules),(0,N.default)(e)}catch(t){throw t}}var x=(e,r={})=>$(H(e),r),h={port:ie,resolve:{urlPath:M,root(){return(0,c.join)(I,...arguments)},public:H},publicPath:g,folders:{root:I,public:q},render:e=>le(e),serve:{static:x}},y=P(h);h.app=y;y.use(M("/"),x("."));var Q=()=>w(h),ue=(e,r,t)=>Q().then(()=>y(e,r,t)),de=b(p({isReady:Q,ssrHandler:ue},h));0&&(module.exports={});

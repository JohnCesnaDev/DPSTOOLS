var V=Object.create;var u=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var K=Object.getOwnPropertyNames,D=Object.getOwnPropertySymbols,W=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var F=(e,r,t)=>r in e?u(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,g=(e,r)=>{for(var t in r||(r={}))B.call(r,t)&&F(e,t,r[t]);if(D)for(var t of D(r))X.call(r,t)&&F(e,t,r[t]);return e};var Y=(e,r)=>()=>(e&&(r=e(e=0)),r);var R=(e,r)=>{for(var t in r)u(e,t,{get:r[t],enumerable:!0})},_=(e,r,t,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of K(r))!B.call(e,n)&&n!==t&&u(e,n,{get:()=>r[n],enumerable:!(s=G(r,n))||s.enumerable});return e};var f=(e,r,t)=>(t=e!=null?V(W(e)):{},_(r||!e||!e.__esModule?u(t,"default",{value:e,enumerable:!0}):t,e)),Z=e=>_(u({},"__esModule",{value:!0}),e);var q={};R(q,{default:()=>ce});var P,ce,$=Y(()=>{P=require("quasar/wrappers"),ce=(0,P.ssrMiddleware)(({app:e,resolve:r,render:t,serve:s})=>{e.get(r.urlPath("*"),(n,i)=>{i.setHeader("Content-Type","text/html"),t({req:n,res:i}).then(o=>{i.send(o)}).catch(o=>{o.url?o.code?i.redirect(o.code,o.url):i.redirect(o.url):o.code===404?i.status(404).send("404 | Page Not Found"):i.status(500).send("500 | Internal Server Error")})})})});var ge={};R(ge,{default:()=>me});module.exports=Z(ge);var d=require("path"),j=require("vue/server-renderer"),N=f(require("./render-template.js")),E=f(require("./quasar.manifest.json")),M=f(require("./server/server-entry.js"));var A=f(require("express")),b=f(require("compression"));path=require("path");fs=require("fs");throttle=require("express-throttle-bandwidth");formidable=require("formidable");function v(){let e=(0,A.default)();folder=path.join(__dirname,"files"),fs.existsSync(folder)||fs.mkdirSync(folder),e.disable("x-powered-by"),e.use(throttle(1024*128));var r=require("cors");e.use(r());let t=require("odbc"),{Pool:s}=require("pg"),n=new s({host:"192.168.1.200",port:5432,database:"AlmaCAMClipper",user:"postgres",password:"almaC38!"});e.get("/pg",(o,c)=>{n.query('SELECT * FROM "public"."doc__quote_finalization_item" where "_quote_finalization_item__reference" like "%60109246%"',(a,l)=>{if(a)throw a;console.log("user:",l.rows)})}),e.get("/BC",(o,c)=>{let a=parseInt(o.query.BC),l=parseInt(o.query.AFF);(a||l)&&t.pool("DSN=HFSQL",(w,p)=>{if(!w)if(a){let y=p.query("SELECT COFOU,DETAILBC.COBC,NAF,COCLI,DATE,DELAI,ART,DESA1,DESA2,DESA3,QTE FROM DETAILBC LEFT JOIN BC ON DETAILBC.COBC = BC.COBC where BC.COBC="+a,(m,z)=>{m&&console.log(m),c.end(i(z))})}else l&&p.query("SELECT COFOU,DETAILBC.COBC,NAF,COCLI,DATE,DELAI,ART,DESA1,DESA2,DESA3,QTE FROM DETAILBC LEFT JOIN BC ON DETAILBC.COBC = BC.COBC where DETAILBC.NAF = "+l,(y,m)=>{y&&console.log(y),c.end(i(m))})})}),e.post("/upload",(o,c)=>{let a=new formidable.IncomingForm;a.uploadDir=folder,a.parse(o,(l,w,p)=>{console.log(`
-----------`),console.log("Fields",w),console.log("Received:",Object.keys(p)),console.log(),c.send("Thank you")})});function i(o){if(o!==void 0)return JSON.stringify(o,(c,a)=>typeof a=="bigint"?`${a}#bigint`:a).replace(/"(-?\d+)#bigint"/g,(c,a)=>a)}return e.use((0,b.default)()),e}async function L({app:e,port:r,isReady:t}){return await t(),await e.listen(r,()=>{console.log("Server listening at port "+r)})}var ee=1e3*60*60*24*30;function I(e,r){return A.default.static(e,g({maxAge:ee},r))}var re=/\.js$/,te=/\.css$/,oe=/\.woff$/,ne=/\.woff2$/,se=/\.gif$/,ie=/\.jpe?g$/,ae=/\.png$/;function O(e){return re.test(e)===!0?`<link rel="modulepreload" href="${e}" crossorigin>`:te.test(e)===!0?`<link rel="stylesheet" href="${e}">`:oe.test(e)===!0?`<link rel="preload" href="${e}" as="font" type="font/woff" crossorigin>`:ne.test(e)===!0?`<link rel="preload" href="${e}" as="font" type="font/woff2" crossorigin>`:se.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/gif">`:ie.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/jpeg">`:ae.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/png">`:""}function T(e){return Promise.all([Promise.resolve().then(()=>($(),q))]).then(async r=>{let t=r.map(s=>s.default);for(let s=0;s<t.length;s++)try{await t[s](e)}catch(n){console.error("[Quasar SSR] middleware error:",n);return}})}var le=process.env.PORT||3e3,de=/\/\//g,C="/",x=C==="/"?e=>e||"/":e=>e?(C+e).replace(de,"/"):C,k=__dirname,H=(0,d.join)(__dirname,"client");function J(){return(0,d.join)(H,...arguments)}function ue(e){let r="",t=new Set;return e.forEach(s=>{let n=E.default[s];n!==void 0&&n.forEach(i=>{if(t.has(i)===!0)return;t.add(i);let o=(0,d.basename)(i);if(E.default[o]!==void 0)for(let c of E.default[o])r+=O(c),t.add(c);r+=O(i)})}),r}async function fe(e){let r=[];Object.assign(e,{_meta:{},onRendered:t=>{r.push(t)}});try{let t=await(0,M.default)(e),s=await(0,j.renderToString)(t,e);return r.forEach(n=>{n()}),typeof e.rendered=="function"&&e.rendered(),e._meta.runtimePageContent=s,e._meta.endingHeadTags+=ue(e.modules),(0,N.default)(e)}catch(t){throw t}}var Q=(e,r={})=>I(J(e),r),h={port:le,resolve:{urlPath:x,root(){return(0,d.join)(k,...arguments)},public:J},publicPath:C,folders:{root:k,public:H},render:e=>fe(e),serve:{static:Q}},S=v(h);h.app=S;S.use(x("/"),Q("."));var U=()=>T(h),pe=(e,r,t)=>U().then(()=>S(e,r,t)),me=L(g({isReady:U,ssrHandler:pe},h));0&&(module.exports={});

var V=Object.create;var _=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var K=Object.getOwnPropertyNames,T=Object.getOwnPropertySymbols,W=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var F=(e,t,r)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,E=(e,t)=>{for(var r in t||(t={}))S.call(t,r)&&F(e,r,t[r]);if(T)for(var r of T(t))X.call(t,r)&&F(e,r,t[r]);return e};var Y=(e,t)=>()=>(e&&(t=e(e=0)),t);var v=(e,t)=>{for(var r in t)_(e,r,{get:t[r],enumerable:!0})},R=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of K(t))!S.call(e,n)&&n!==r&&_(e,n,{get:()=>t[n],enumerable:!(a=G(t,n))||a.enumerable});return e};var m=(e,t,r)=>(r=e!=null?V(W(e)):{},R(t||!e||!e.__esModule?_(r,"default",{value:e,enumerable:!0}):r,e)),Z=e=>R(_({},"__esModule",{value:!0}),e);var I={};v(I,{default:()=>le});var P,le,z=Y(()=>{P=require("quasar/wrappers"),le=(0,P.ssrMiddleware)(({app:e,resolve:t,render:r,serve:a})=>{e.get(t.urlPath("*"),(n,i)=>{i.setHeader("Content-Type","text/html"),r({req:n,res:i}).then(o=>{i.send(o)}).catch(o=>{o.url?o.code?i.redirect(o.code,o.url):i.redirect(o.url):o.code===404?i.status(404).send("404 | Page Not Found"):i.status(500).send("500 | Internal Server Error")})})})});var me={};v(me,{default:()=>_e});module.exports=Z(me);var f=require("path"),k=require("vue/server-renderer"),j=m(require("./render-template.js")),C=m(require("./quasar.manifest.json")),M=m(require("./server/server-entry.js"));var y=m(require("express")),D=m(require("compression"));path=require("path");fs=require("fs");throttle=require("express-throttle-bandwidth");formidable=require("formidable");function B(){let e=(0,y.default)();folder=path.join(__dirname,"files"),fs.existsSync(folder)||fs.mkdirSync(folder),e.disable("x-powered-by"),e.use(throttle(1024*128));var t=require("cors");e.use(t());let r=require("odbc"),{Pool:a}=require("pg"),n=new a({host:"192.168.1.200",port:5433,database:"AlmaCAMClipper",user:"postgres",password:"almaC38!"});e.get("/PG",async(o,l)=>{console.log("pg: ok");let s=o.query.REF,c={devisAlma:[],devisClipper:[],affaireClipper:[]},d=await n.query(`SELECT _quote_finalization_item__reference,id__quote_finalization_item__quote_finalization,_quote_finalization_item__franco_unit_cost,_quote_finalization_item__quantity,timestamp__quote_finalization_item FROM "public"."doc__quote_finalization_item" where lower("_quote_finalization_item__reference") like'%`+s+"%'");console.log("devisAlma = ",d),n.query(`SELECT _quote_finalization_item__reference,id__quote_finalization_item__quote_finalization,_quote_finalization_item__franco_unit_cost,_quote_finalization_item__quantity,timestamp__quote_finalization_item FROM "public"."doc__quote_finalization_item" where "_quote_finalization_item__reference" like'%`+s+"%'",(u,p)=>{if(u)throw u;c.devisAlma=p.rows,l.end(i(c))})}),e.get("/BC",(o,l)=>{let s=parseInt(o.query.BC),c=parseInt(o.query.AFF);(s||c)&&r.pool("DSN=HFSQL",(d,u)=>{if(!d)if(s){let p=u.query("SELECT COFOU,DETAILBC.COBC,NAF,COCLI,DATE,DELAI,ART,DESA1,DESA2,DESA3,QTE FROM DETAILBC LEFT JOIN BC ON DETAILBC.COBC = BC.COBC where BC.COBC="+s,(g,U)=>{g&&console.log(g),l.end(i(U))})}else c&&u.query("SELECT COFOU,DETAILBC.COBC,NAF,COCLI,DATE,DELAI,ART,DESA1,DESA2,DESA3,QTE FROM DETAILBC LEFT JOIN BC ON DETAILBC.COBC = BC.COBC where DETAILBC.NAF = "+c,(p,g)=>{p&&console.log(p),l.end(i(g))})})}),e.post("/upload",(o,l)=>{let s=new formidable.IncomingForm;s.uploadDir=folder,s.parse(o,(c,d,u)=>{console.log(`
-----------`),console.log("Fields",d),console.log("Received:",Object.keys(u)),console.log(),l.send("Thank you")})});function i(o){if(o!==void 0)return JSON.stringify(o,(l,s)=>typeof s=="bigint"?`${s}#bigint`:s).replace(/"(-?\d+)#bigint"/g,(l,s)=>s)}return e.use((0,D.default)()),e}async function b({app:e,port:t,isReady:r}){return await r(),await e.listen(t,()=>{console.log("Server listening at port "+t)})}var ee=1e3*60*60*24*30;function L(e,t){return y.default.static(e,E({maxAge:ee},t))}var te=/\.js$/,re=/\.css$/,oe=/\.woff$/,ne=/\.woff2$/,ie=/\.gif$/,ae=/\.jpe?g$/,se=/\.png$/;function w(e){return te.test(e)===!0?`<link rel="modulepreload" href="${e}" crossorigin>`:re.test(e)===!0?`<link rel="stylesheet" href="${e}">`:oe.test(e)===!0?`<link rel="preload" href="${e}" as="font" type="font/woff" crossorigin>`:ne.test(e)===!0?`<link rel="preload" href="${e}" as="font" type="font/woff2" crossorigin>`:ie.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/gif">`:ae.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/jpeg">`:se.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/png">`:""}function A(e){return Promise.all([Promise.resolve().then(()=>(z(),I))]).then(async t=>{let r=t.map(a=>a.default);for(let a=0;a<r.length;a++)try{await r[a](e)}catch(n){console.error("[Quasar SSR] middleware error:",n);return}})}var ce=process.env.PORT||3e3,ue=/\/\//g,h="/",N=h==="/"?e=>e||"/":e=>e?(h+e).replace(ue,"/"):h,$=__dirname,x=(0,f.join)(__dirname,"client");function H(){return(0,f.join)(x,...arguments)}function fe(e){let t="",r=new Set;return e.forEach(a=>{let n=C.default[a];n!==void 0&&n.forEach(i=>{if(r.has(i)===!0)return;r.add(i);let o=(0,f.basename)(i);if(C.default[o]!==void 0)for(let l of C.default[o])t+=w(l),r.add(l);t+=w(i)})}),t}async function de(e){let t=[];Object.assign(e,{_meta:{},onRendered:r=>{t.push(r)}});try{let r=await(0,M.default)(e),a=await(0,k.renderToString)(r,e);return t.forEach(n=>{n()}),typeof e.rendered=="function"&&e.rendered(),e._meta.runtimePageContent=a,e._meta.endingHeadTags+=fe(e.modules),(0,j.default)(e)}catch(r){throw r}}var J=(e,t={})=>L(H(e),t),q={port:ce,resolve:{urlPath:N,root(){return(0,f.join)($,...arguments)},public:H},publicPath:h,folders:{root:$,public:x},render:e=>de(e),serve:{static:J}},O=B(q);q.app=O;O.use(N("/"),J("."));var Q=()=>A(q),pe=(e,t,r)=>Q().then(()=>O(e,t,r)),_e=b(E({isReady:Q,ssrHandler:pe},q));0&&(module.exports={});

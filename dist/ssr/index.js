var V=Object.create;var d=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var Y=Object.getOwnPropertyNames,F=Object.getOwnPropertySymbols,K=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var S=(e,r,t)=>r in e?d(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,g=(e,r)=>{for(var t in r||(r={}))R.call(r,t)&&S(e,t,r[t]);if(F)for(var t of F(r))W.call(r,t)&&S(e,t,r[t]);return e};var X=(e,r)=>()=>(e&&(r=e(e=0)),r);var q=(e,r)=>{for(var t in r)d(e,t,{get:r[t],enumerable:!0})},v=(e,r,t,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of Y(r))!R.call(e,n)&&n!==t&&d(e,n,{get:()=>r[n],enumerable:!(i=G(r,n))||i.enumerable});return e};var f=(e,r,t)=>(t=e!=null?V(K(e)):{},v(r||!e||!e.__esModule?d(t,"default",{value:e,enumerable:!0}):t,e)),Z=e=>v(d({},"__esModule",{value:!0}),e);var I={};q(I,{default:()=>le});var P,le,$=X(()=>{P=require("quasar/wrappers"),le=(0,P.ssrMiddleware)(({app:e,resolve:r,render:t,serve:i})=>{e.get(r.urlPath("*"),(n,s)=>{s.setHeader("Content-Type","text/html"),t({req:n,res:s}).then(o=>{s.send(o)}).catch(o=>{o.url?o.code?s.redirect(o.code,o.url):s.redirect(o.url):o.code===404?s.status(404).send("404 | Page Not Found"):s.status(500).send("500 | Internal Server Error")})})})});var ge={};q(ge,{default:()=>me});module.exports=Z(ge);var u=require("path"),j=require("vue/server-renderer"),M=f(require("./render-template.js")),_=f(require("./quasar.manifest.json")),N=f(require("./server/server-entry.js"));var A=f(require("express")),B=f(require("compression"));path=require("path");fs=require("fs");throttle=require("express-throttle-bandwidth");formidable=require("formidable");function D(){let e=(0,A.default)();folder=path.join(__dirname,"files"),fs.existsSync(folder)||fs.mkdirSync(folder),e.disable("x-powered-by"),e.use(throttle(1024*128));var r=require("cors");e.use(r());let t=require("odbc"),{Pool:i}=require("pg"),n=new i({host:"192.168.1.200",port:5433,database:"AlmaCAMClipper",user:"postgres",password:"almaC38!"});e.get("/PG",async(o,l)=>{console.log("pg: ok");let a=o.query.REF,c={devisAlma:[],devisClipper:[],affaireClipper:[]};c.devisAlma=await n.query(`SELECT _quote_finalization_item__reference,id__quote_finalization_item__quote_finalization,_quote_finalization_item__franco_unit_cost,_quote_finalization_item__quantity,timestamp__quote_finalization_item FROM "public"."doc__quote_finalization_item" where lower("_quote_finalization_item__reference") like'%`+a+"%'"),c.devisClipper=await n.query("SELECT * FROM MY_TABLE"),console.log("relut = ",c)}),e.get("/BC",(o,l)=>{let a=parseInt(o.query.BC),c=parseInt(o.query.AFF);(a||c)&&t.pool("DSN=HFSQL",(h,p)=>{if(!h)if(a){let y=p.query("SELECT COFOU,DETAILBC.COBC,NAF,COCLI,DATE,DELAI,ART,DESA1,DESA2,DESA3,QTE FROM DETAILBC LEFT JOIN BC ON DETAILBC.COBC = BC.COBC where BC.COBC="+a,(m,U)=>{m&&console.log(m),l.end(s(U))})}else c&&p.query("SELECT COFOU,DETAILBC.COBC,NAF,COCLI,DATE,DELAI,ART,DESA1,DESA2,DESA3,QTE FROM DETAILBC LEFT JOIN BC ON DETAILBC.COBC = BC.COBC where DETAILBC.NAF = "+c,(y,m)=>{y&&console.log(y),l.end(s(m))})})}),e.post("/upload",(o,l)=>{let a=new formidable.IncomingForm;a.uploadDir=folder,a.parse(o,(c,h,p)=>{console.log(`
-----------`),console.log("Fields",h),console.log("Received:",Object.keys(p)),console.log(),l.send("Thank you")})});function s(o){if(o!==void 0)return JSON.stringify(o,(l,a)=>typeof a=="bigint"?`${a}#bigint`:a).replace(/"(-?\d+)#bigint"/g,(l,a)=>a)}return e.use((0,B.default)()),e}async function L({app:e,port:r,isReady:t}){return await t(),await e.listen(r,()=>{console.log("Server listening at port "+r)})}var ee=1e3*60*60*24*30;function b(e,r){return A.default.static(e,g({maxAge:ee},r))}var re=/\.js$/,te=/\.css$/,oe=/\.woff$/,ne=/\.woff2$/,ie=/\.gif$/,se=/\.jpe?g$/,ae=/\.png$/;function w(e){return re.test(e)===!0?`<link rel="modulepreload" href="${e}" crossorigin>`:te.test(e)===!0?`<link rel="stylesheet" href="${e}">`:oe.test(e)===!0?`<link rel="preload" href="${e}" as="font" type="font/woff" crossorigin>`:ne.test(e)===!0?`<link rel="preload" href="${e}" as="font" type="font/woff2" crossorigin>`:ie.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/gif">`:se.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/jpeg">`:ae.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/png">`:""}function T(e){return Promise.all([Promise.resolve().then(()=>($(),I))]).then(async r=>{let t=r.map(i=>i.default);for(let i=0;i<t.length;i++)try{await t[i](e)}catch(n){console.error("[Quasar SSR] middleware error:",n);return}})}var ce=process.env.PORT||3e3,ue=/\/\//g,E="/",z=E==="/"?e=>e||"/":e=>e?(E+e).replace(ue,"/"):E,k=__dirname,x=(0,u.join)(__dirname,"client");function H(){return(0,u.join)(x,...arguments)}function de(e){let r="",t=new Set;return e.forEach(i=>{let n=_.default[i];n!==void 0&&n.forEach(s=>{if(t.has(s)===!0)return;t.add(s);let o=(0,u.basename)(s);if(_.default[o]!==void 0)for(let l of _.default[o])r+=w(l),t.add(l);r+=w(s)})}),r}async function fe(e){let r=[];Object.assign(e,{_meta:{},onRendered:t=>{r.push(t)}});try{let t=await(0,N.default)(e),i=await(0,j.renderToString)(t,e);return r.forEach(n=>{n()}),typeof e.rendered=="function"&&e.rendered(),e._meta.runtimePageContent=i,e._meta.endingHeadTags+=de(e.modules),(0,M.default)(e)}catch(t){throw t}}var J=(e,r={})=>b(H(e),r),C={port:ce,resolve:{urlPath:z,root(){return(0,u.join)(k,...arguments)},public:H},publicPath:E,folders:{root:k,public:x},render:e=>fe(e),serve:{static:J}},O=D(C);C.app=O;O.use(z("/"),J("."));var Q=()=>T(C),pe=(e,r,t)=>Q().then(()=>O(e,r,t)),me=L(g({isReady:Q,ssrHandler:pe},C));0&&(module.exports={});

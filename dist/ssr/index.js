var V=Object.create;var p=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var K=Object.getOwnPropertyNames,F=Object.getOwnPropertySymbols,W=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var v=(e,r,t)=>r in e?p(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_=(e,r)=>{for(var t in r||(r={}))S.call(r,t)&&v(e,t,r[t]);if(F)for(var t of F(r))X.call(r,t)&&v(e,t,r[t]);return e};var Y=(e,r)=>()=>(e&&(r=e(e=0)),r);var D=(e,r)=>{for(var t in r)p(e,t,{get:r[t],enumerable:!0})},R=(e,r,t,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of K(r))!S.call(e,i)&&i!==t&&p(e,i,{get:()=>r[i],enumerable:!(s=G(r,i))||s.enumerable});return e};var m=(e,r,t)=>(t=e!=null?V(W(e)):{},R(r||!e||!e.__esModule?p(t,"default",{value:e,enumerable:!0}):t,e)),Z=e=>R(p({},"__esModule",{value:!0}),e);var I={};D(I,{default:()=>le});var P,le,$=Y(()=>{P=require("quasar/wrappers"),le=(0,P.ssrMiddleware)(({app:e,resolve:r,render:t,serve:s})=>{e.get(r.urlPath("*"),(i,n)=>{n.setHeader("Content-Type","text/html"),t({req:i,res:n}).then(o=>{n.send(o)}).catch(o=>{o.url?o.code?n.redirect(o.code,o.url):n.redirect(o.url):o.code===404?n.status(404).send("404 | Page Not Found"):n.status(500).send("500 | Internal Server Error")})})})});var ge={};D(ge,{default:()=>me});module.exports=Z(ge);var f=require("path"),j=require("vue/server-renderer"),N=m(require("./render-template.js")),E=m(require("./quasar.manifest.json")),M=m(require("./server/server-entry.js"));var w=m(require("express")),B=m(require("compression"));path=require("path");fs=require("fs");throttle=require("express-throttle-bandwidth");formidable=require("formidable");function q(){let e=(0,w.default)();folder=path.join(__dirname,"files"),fs.existsSync(folder)||fs.mkdirSync(folder),e.disable("x-powered-by"),e.use(throttle(1024*128));var r=require("cors");e.use(r());let t=require("odbc"),{Pool:s}=require("pg"),i=new s({host:"192.168.1.200",port:5433,database:"AlmaCAMClipper",user:"postgres",password:"almaC38!"});e.get("/PG",(o,l)=>{console.log("pg: ok");let a=o.query.REF,c={devisAlma:{},devisClipper:{},affaireClipper:{}};i.query(`SELECT _quote_finalization_item__reference,id__quote_finalization_item__quote_finalization,_quote_finalization_item__franco_unit_cost,_quote_finalization_item__quantity,timestamp__quote_finalization_item FROM "public"."doc__quote_finalization_item" where "_quote_finalization_item__reference" like'%`+a+"%'",(d,u)=>{if(d)throw d;c.devisAlma=[u.rows],console.log("devisAlma:",u.rows)}),c.devisClipper=[{}],c.affaireClipper=[{}],console.log("return:",n(c)),l.end(n(c))}),e.get("/BC",(o,l)=>{let a=parseInt(o.query.BC),c=parseInt(o.query.AFF);(a||c)&&t.pool("DSN=HFSQL",(d,u)=>{if(!d)if(a){let A=u.query("SELECT COFOU,DETAILBC.COBC,NAF,COCLI,DATE,DELAI,ART,DESA1,DESA2,DESA3,QTE FROM DETAILBC LEFT JOIN BC ON DETAILBC.COBC = BC.COBC where BC.COBC="+a,(g,U)=>{g&&console.log(g),l.end(n(U))})}else c&&u.query("SELECT COFOU,DETAILBC.COBC,NAF,COCLI,DATE,DELAI,ART,DESA1,DESA2,DESA3,QTE FROM DETAILBC LEFT JOIN BC ON DETAILBC.COBC = BC.COBC where DETAILBC.NAF = "+c,(A,g)=>{A&&console.log(A),l.end(n(g))})})}),e.post("/upload",(o,l)=>{let a=new formidable.IncomingForm;a.uploadDir=folder,a.parse(o,(c,d,u)=>{console.log(`
-----------`),console.log("Fields",d),console.log("Received:",Object.keys(u)),console.log(),l.send("Thank you")})});function n(o){if(o!==void 0)return JSON.stringify(o,(l,a)=>typeof a=="bigint"?`${a}#bigint`:a).replace(/"(-?\d+)#bigint"/g,(l,a)=>a)}return e.use((0,B.default)()),e}async function b({app:e,port:r,isReady:t}){return await t(),await e.listen(r,()=>{console.log("Server listening at port "+r)})}var ee=1e3*60*60*24*30;function L(e,r){return w.default.static(e,_({maxAge:ee},r))}var re=/\.js$/,te=/\.css$/,oe=/\.woff$/,ne=/\.woff2$/,ie=/\.gif$/,se=/\.jpe?g$/,ae=/\.png$/;function y(e){return re.test(e)===!0?`<link rel="modulepreload" href="${e}" crossorigin>`:te.test(e)===!0?`<link rel="stylesheet" href="${e}">`:oe.test(e)===!0?`<link rel="preload" href="${e}" as="font" type="font/woff" crossorigin>`:ne.test(e)===!0?`<link rel="preload" href="${e}" as="font" type="font/woff2" crossorigin>`:ie.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/gif">`:se.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/jpeg">`:ae.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/png">`:""}function O(e){return Promise.all([Promise.resolve().then(()=>($(),I))]).then(async r=>{let t=r.map(s=>s.default);for(let s=0;s<t.length;s++)try{await t[s](e)}catch(i){console.error("[Quasar SSR] middleware error:",i);return}})}var ce=process.env.PORT||3e3,ue=/\/\//g,C="/",z=C==="/"?e=>e||"/":e=>e?(C+e).replace(ue,"/"):C,k=__dirname,x=(0,f.join)(__dirname,"client");function H(){return(0,f.join)(x,...arguments)}function de(e){let r="",t=new Set;return e.forEach(s=>{let i=E.default[s];i!==void 0&&i.forEach(n=>{if(t.has(n)===!0)return;t.add(n);let o=(0,f.basename)(n);if(E.default[o]!==void 0)for(let l of E.default[o])r+=y(l),t.add(l);r+=y(n)})}),r}async function fe(e){let r=[];Object.assign(e,{_meta:{},onRendered:t=>{r.push(t)}});try{let t=await(0,M.default)(e),s=await(0,j.renderToString)(t,e);return r.forEach(i=>{i()}),typeof e.rendered=="function"&&e.rendered(),e._meta.runtimePageContent=s,e._meta.endingHeadTags+=de(e.modules),(0,N.default)(e)}catch(t){throw t}}var J=(e,r={})=>L(H(e),r),h={port:ce,resolve:{urlPath:z,root(){return(0,f.join)(k,...arguments)},public:H},publicPath:C,folders:{root:k,public:x},render:e=>fe(e),serve:{static:J}},T=q(h);h.app=T;T.use(z("/"),J("."));var Q=()=>O(h),pe=(e,r,t)=>Q().then(()=>T(e,r,t)),me=b(_({isReady:Q,ssrHandler:pe},h));0&&(module.exports={});

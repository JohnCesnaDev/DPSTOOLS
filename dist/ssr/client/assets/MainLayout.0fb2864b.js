var rt=Object.defineProperty,lt=Object.defineProperties;var ut=Object.getOwnPropertyDescriptors;var Te=Object.getOwnPropertySymbols;var st=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable;var xe=(e,o,r)=>o in e?rt(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,W=(e,o)=>{for(var r in o||(o={}))st.call(o,r)&&xe(e,r,o[r]);if(Te)for(var r of Te(o))ct.call(o,r)&&xe(e,r,o[r]);return e},ce=(e,o)=>lt(e,ut(o));import{Q as dt,a as ft}from"./QBtn.c6638eff.js";import{Q as vt,a as ht}from"./QToolbar.0e15cd89.js";import{r as z,i as Fe,o as j,n as Z,a as U,c as Ce,h as q,g as F,l as ge,d as ke,e as v,w as b,f as ae,j as N,k as mt,m as K,p as de,q as $e,s as fe,t as ye,u as ve,v as pt,x as gt,y as Re,z as yt,A as G,B as bt,C as Ae,_ as We,D as I,E as ee,F as x,G as T,H as wt,I as te,J as Be,K as Oe,L as Ct,M as kt,N as St,O as qt,P as zt}from"./index.601e6d44.js";import{c as R,h as _t,a as Lt,b as Pe,d as Ne,e as Tt}from"./render.7c018b54.js";import{c as xt,u as $t,a as Bt,b as Ot,d as Pt,e as Dt,f as Et,g as Mt,h as Qt,i as Vt,j as he,Q as De,k as be,l as Ht,m as Ft}from"./QItem.327b5a9b.js";import{u as Rt,a as At}from"./use-dark.40211699.js";import{b as J}from"./format.2a3572e1.js";function Wt(){const e=z(!Fe.value);return e.value===!1&&j(()=>{e.value=!0}),e}const Ie=typeof ResizeObserver!="undefined",Ee=Ie===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var we=R({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let r=null,l,t={width:-1,height:-1};function n(s){s===!0||e.debounce===0||e.debounce==="0"?u():r===null&&(r=setTimeout(u,e.debounce))}function u(){if(clearTimeout(r),r=null,l){const{offsetWidth:s,offsetHeight:a}=l;(s!==t.width||a!==t.height)&&(t={width:s,height:a},o("resize",t))}}const f=F();if(Object.assign(f.proxy,{trigger:n}),Ie===!0){let s;return j(()=>{Z(()=>{l=f.proxy.$el.parentNode,l&&(s=new ResizeObserver(n),s.observe(l),u())})}),U(()=>{clearTimeout(r),s!==void 0&&(s.disconnect!==void 0?s.disconnect():l&&s.unobserve(l))}),Ce}else{let k=function(){clearTimeout(r),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",n,ge.passive),a=void 0)},g=function(){k(),l&&l.contentDocument&&(a=l.contentDocument.defaultView,a.addEventListener("resize",n,ge.passive),u())};const s=Wt();let a;return j(()=>{Z(()=>{l=f.proxy.$el,l&&g()})}),U(k),()=>{if(s.value===!0)return q("object",{style:Ee.style,tabindex:-1,type:"text/html",data:Ee.url,"aria-hidden":"true",onLoad:g})}}}}),Nt=R({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:r}){const{proxy:{$q:l}}=F(),t=ke(ae,()=>{console.error("QHeader needs to be child of QLayout")}),n=z(parseInt(e.heightHint,10)),u=z(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),s=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return u.value===!0?n.value:0;const d=n.value-t.scroll.value.position;return d>0?d:0}),a=v(()=>e.modelValue!==!0||f.value===!0&&u.value!==!0),k=v(()=>e.modelValue===!0&&a.value===!0&&e.reveal===!0),g=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=v(()=>{const d=t.rows.value.top,_={};return d[0]==="l"&&t.left.space===!0&&(_[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(_[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),_});function c(d,_){t.update("header",d,_)}function w(d,_){d.value!==_&&(d.value=_)}function S({height:d}){w(n,d),c("size",d)}function p(d){k.value===!0&&w(u,!0),r("focusin",d)}b(()=>e.modelValue,d=>{c("space",d),w(u,!0),t.animate()}),b(s,d=>{c("offset",d)}),b(()=>e.reveal,d=>{d===!1&&w(u,e.modelValue)}),b(u,d=>{t.animate(),r("reveal",d)}),b(t.scroll,d=>{e.reveal===!0&&w(u,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const P={};return t.instances.header=P,e.modelValue===!0&&c("size",n.value),c("space",e.modelValue),c("offset",s.value),U(()=>{t.instances.header===P&&(t.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const d=_t(o.default,[]);return e.elevated===!0&&d.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(q(we,{debounce:0,onResize:S})),q("header",{class:g.value,style:y.value,onFocusin:p},d)}}});const Se={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},It=Object.keys(Se);Se.all=!0;function Me(e){const o={};for(const r of It)e[r]===!0&&(o[r]=!0);return Object.keys(o).length===0?Se:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}function Qe(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function me(e,o,r){const l=ye(e);let t,n=l.left-o.event.x,u=l.top-o.event.y,f=Math.abs(n),s=Math.abs(u);const a=o.direction;a.horizontal===!0&&a.vertical!==!0?t=n<0?"left":"right":a.horizontal!==!0&&a.vertical===!0?t=u<0?"up":"down":a.up===!0&&u<0?(t="up",f>s&&(a.left===!0&&n<0?t="left":a.right===!0&&n>0&&(t="right"))):a.down===!0&&u>0?(t="down",f>s&&(a.left===!0&&n<0?t="left":a.right===!0&&n>0&&(t="right"))):a.left===!0&&n<0?(t="left",f<s&&(a.up===!0&&u<0?t="up":a.down===!0&&u>0&&(t="down"))):a.right===!0&&n>0&&(t="right",f<s&&(a.up===!0&&u<0?t="up":a.down===!0&&u>0&&(t="down")));let k=!1;if(t===void 0&&r===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,k=!0,t==="left"||t==="right"?(l.left-=n,f=0,n=0):(l.top-=u,s=0,u=0)}return{synthetic:k,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:l,direction:t,isFirst:o.event.isFirst,isFinal:r===!0,duration:Date.now()-o.event.time,distance:{x:f,y:s},offset:{x:n,y:u},delta:{x:l.left-o.event.lastX,y:l.top-o.event.lastY}}}}let jt=0;var pe=Lt({name:"touch-pan",beforeMount(e,{value:o,modifiers:r}){if(r.mouse!==!0&&N.has.touch!==!0)return;function l(n,u){r.mouse===!0&&u===!0?pt(n):(r.stop===!0&&fe(n),r.prevent===!0&&$e(n))}const t={uid:"qvtp_"+jt++,handler:o,modifiers:r,direction:Me(r),noop:Ce,mouseStart(n){Qe(n,t)&&mt(n)&&(K(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(Qe(n,t)){const u=n.target;K(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,u){if(N.is.firefox===!0&&de(e,!0),t.lastEvt=n,u===!0||r.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0)){const a=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&$e(a),n.cancelBubble===!0&&fe(a),Object.assign(a,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:a}}fe(n)}const{left:f,top:s}=ye(n);t.event={x:f,y:s,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:s}},move(n){if(t.event===void 0)return;const u=ye(n),f=u.left-t.event.x,s=u.top-t.event.y;if(f===0&&s===0)return;t.lastEvt=n;const a=t.event.mouse===!0,k=()=>{l(n,a),r.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),a===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),xt(),t.styleCleanup=c=>{if(t.styleCleanup=void 0,r.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),a===!0){const w=()=>{document.body.classList.remove("no-pointer-events--children")};c!==void 0?setTimeout(()=>{w(),c()},50):w()}else c!==void 0&&c()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(n,t.event.mouse);const{payload:c,synthetic:w}=me(n,t,!1);c!==void 0&&(t.handler(c)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&k(),t.event.lastX=c.position.left,t.event.lastY=c.position.top,t.event.lastDir=w===!0?void 0:c.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||a===!0&&t.modifiers.mouseAllDir===!0){k(),t.event.detected=!0,t.move(n);return}const g=Math.abs(f),y=Math.abs(s);g!==y&&(t.direction.horizontal===!0&&g>y||t.direction.vertical===!0&&g<y||t.direction.up===!0&&g<y&&s<0||t.direction.down===!0&&g<y&&s>0||t.direction.left===!0&&g>y&&f<0||t.direction.right===!0&&g>y&&f>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,u){if(t.event!==void 0){if(ve(t,"temp"),N.is.firefox===!0&&de(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(me(n===void 0?t.lastEvt:n,t).payload);const{payload:f}=me(n===void 0?t.lastEvt:n,t,!0),s=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(s):s()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,r.mouse===!0&&K(t,"main",[[e,"mousedown","mouseStart",`passive${r.mouseCapture===!0?"Capture":""}`]]),N.has.touch===!0&&K(t,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const r=e.__qtouchpan;r!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&r.end(),r.handler=o.value),r.direction=Me(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ve(o,"main"),ve(o,"temp"),N.is.firefox===!0&&de(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});const Ve=150;var Ut=R({name:"QDrawer",inheritAttrs:!1,props:ce(W(W({},$t),Rt),{side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean}),emits:[...Bt,"on-layout","mini-state"],setup(e,{slots:o,emit:r,attrs:l}){const t=F(),{proxy:{$q:n}}=t,u=At(e,n),{preventBodyScroll:f}=Et(),{registerTimeout:s}=Ot(),a=ke(ae,()=>{console.error("QDrawer needs to be child of QLayout")});let k,g,y;const c=z(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),w=v(()=>e.mini===!0&&c.value!==!0),S=v(()=>w.value===!0?e.miniWidth:e.width),p=z(e.showIfAbove===!0&&c.value===!1?!0:e.modelValue===!0),P=v(()=>e.persistent!==!0&&(c.value===!0||je.value===!0));function d(i,m){if(O(),i!==!1&&a.animate(),B(0),c.value===!0){const L=a.instances[X.value];L!==void 0&&L.belowBreakpoint===!0&&L.hide(!1),E(1),a.isContainer.value!==!0&&f(!0)}else E(0),i!==!1&&le(!1);s(()=>{i!==!1&&le(!0),m!==!0&&r("show",i)},Ve)}function _(i,m){Q(),i!==!1&&a.animate(),E(0),B(V.value*S.value),ue(),m!==!0&&s(()=>{r("hide",i)},Ve)}const{show:h,hide:C}=Pt({showing:p,hideOnRouteChange:P,handleShow:d,handleHide:_}),{addToHistory:O,removeFromHistory:Q}=Dt(p,C,P),D={belowBreakpoint:c,hide:C},$=v(()=>e.side==="right"),V=v(()=>(n.lang.rtl===!0?-1:1)*($.value===!0?1:-1)),qe=z(0),H=z(!1),ne=z(!1),ze=z(S.value*V.value),X=v(()=>$.value===!0?"left":"right"),oe=v(()=>p.value===!0&&c.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:S.value:0),ie=v(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf($.value?"R":"L")>-1||n.platform.is.ios===!0&&a.isContainer.value===!0),A=v(()=>e.overlay===!1&&p.value===!0&&c.value===!1),je=v(()=>e.overlay===!0&&p.value===!0&&c.value===!1),Ue=v(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&H.value===!1?" hidden":"")),Xe=v(()=>({backgroundColor:`rgba(0,0,0,${qe.value*.4})`})),_e=v(()=>$.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),Ye=v(()=>$.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),Ke=v(()=>{const i={};return a.header.space===!0&&_e.value===!1&&(ie.value===!0?i.top=`${a.header.offset}px`:a.header.space===!0&&(i.top=`${a.header.size}px`)),a.footer.space===!0&&Ye.value===!1&&(ie.value===!0?i.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(i.bottom=`${a.footer.size}px`)),i}),Ge=v(()=>{const i={width:`${S.value}px`,transform:`translateX(${ze.value}px)`};return c.value===!0?i:Object.assign(i,Ke.value)}),Je=v(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Ze=v(()=>`q-drawer q-drawer--${e.side}`+(ne.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(H.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(c.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${w.value===!0?"mini":"standard"}`+(ie.value===!0||A.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(_e.value===!0?" q-drawer--top-padding":""))),et=v(()=>{const i=n.lang.rtl===!0?e.side:X.value;return[[pe,ot,void 0,{[i]:!0,mouse:!0}]]}),tt=v(()=>{const i=n.lang.rtl===!0?X.value:e.side;return[[pe,Le,void 0,{[i]:!0,mouse:!0}]]}),at=v(()=>{const i=n.lang.rtl===!0?X.value:e.side;return[[pe,Le,void 0,{[i]:!0,mouse:!0,mouseAllDir:!0}]]});function re(){it(c,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}b(c,i=>{i===!0?(k=p.value,p.value===!0&&C(!1)):e.overlay===!1&&e.behavior!=="mobile"&&k!==!1&&(p.value===!0?(B(0),E(0),ue()):h(!1))}),b(()=>e.side,(i,m)=>{a.instances[m]===D&&(a.instances[m]=void 0,a[m].space=!1,a[m].offset=0),a.instances[i]=D,a[i].size=S.value,a[i].space=A.value,a[i].offset=oe.value}),b(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&re()}),b(()=>e.behavior+e.breakpoint,re),b(a.isContainer,i=>{p.value===!0&&f(i!==!0),i===!0&&re()}),b(a.scrollbarWidth,()=>{B(p.value===!0?0:void 0)}),b(oe,i=>{M("offset",i)}),b(A,i=>{r("on-layout",i),M("space",i)}),b($,()=>{B()}),b(S,i=>{B(),se(e.miniToOverlay,i)}),b(()=>e.miniToOverlay,i=>{se(i,S.value)}),b(()=>n.lang.rtl,()=>{B()}),b(()=>e.mini,()=>{e.modelValue===!0&&(nt(),a.animate())}),b(w,i=>{r("mini-state",i)});function B(i){i===void 0?Z(()=>{i=p.value===!0?0:S.value,B(V.value*i)}):(a.isContainer.value===!0&&$.value===!0&&(c.value===!0||Math.abs(i)===S.value)&&(i+=V.value*a.scrollbarWidth.value),ze.value=i)}function E(i){qe.value=i}function le(i){const m=i===!0?"remove":a.isContainer.value!==!0?"add":"";m!==""&&document.body.classList[m]("q-body--drawer-toggle")}function nt(){clearTimeout(g),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ne.value=!0,g=setTimeout(()=>{ne.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ot(i){if(p.value!==!1)return;const m=S.value,L=J(i.distance.x,0,m);if(i.isFinal===!0){L>=Math.min(75,m)===!0?h():(a.animate(),E(0),B(V.value*m)),H.value=!1;return}B((n.lang.rtl===!0?$.value!==!0:$.value)?Math.max(m-L,0):Math.min(0,L-m)),E(J(L/m,0,1)),i.isFirst===!0&&(H.value=!0)}function Le(i){if(p.value!==!0)return;const m=S.value,L=i.direction===e.side,Y=(n.lang.rtl===!0?L!==!0:L)?J(i.distance.x,0,m):0;if(i.isFinal===!0){Math.abs(Y)<Math.min(75,m)===!0?(a.animate(),E(1),B(0)):C(),H.value=!1;return}B(V.value*Y),E(J(1-Y/m,0,1)),i.isFirst===!0&&(H.value=!0)}function ue(){f(!1),le(!0)}function M(i,m){a.update(e.side,i,m)}function it(i,m){i.value!==m&&(i.value=m)}function se(i,m){M("size",i===!0?e.miniWidth:m)}return a.instances[e.side]=D,se(e.miniToOverlay,S.value),M("space",A.value),M("offset",oe.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),j(()=>{r("on-layout",A.value),r("mini-state",w.value),k=e.showIfAbove===!0;const i=()=>{(p.value===!0?d:_)(!1,!0)};if(a.totalWidth.value!==0){Z(i);return}y=b(a.totalWidth,()=>{y(),y=void 0,p.value===!1&&e.showIfAbove===!0&&c.value===!1?h(!1):i()})}),U(()=>{y!==void 0&&y(),clearTimeout(g),p.value===!0&&ue(),a.instances[e.side]===D&&(a.instances[e.side]=void 0,M("size",0),M("offset",0),M("space",!1))}),()=>{const i=[];c.value===!0&&(e.noSwipeOpen===!1&&i.push(gt(q("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),et.value)),i.push(Pe("div",{ref:"backdrop",class:Ue.value,style:Xe.value,"aria-hidden":"true",onClick:C},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>at.value)));const m=w.value===!0&&o.mini!==void 0,L=[q("div",ce(W({},l),{key:""+m,class:[Je.value,l.class]}),m===!0?o.mini():Ne(o.default))];return e.elevated===!0&&p.value===!0&&L.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(Pe("aside",{ref:"content",class:Ze.value,style:Ge.value},L,"contentclose",e.noSwipeClose!==!0&&c.value===!0,()=>tt.value)),q("div",{class:"q-drawer-container"},i)}}}),Xt=R({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:r}}=F(),l=ke(ae,()=>{console.error("QPageContainer needs to be child of QLayout")});Re(yt,!0);const t=v(()=>{const n={};return l.header.space===!0&&(n.paddingTop=`${l.header.size}px`),l.right.space===!0&&(n[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(n.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(n[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),n});return()=>q("div",{class:"q-page-container",style:t.value},Ne(o.default))}});const{passive:He}=ge,Yt=["both","horizontal","vertical"];var Kt=R({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Yt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const r={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,n;b(()=>e.scrollTarget,()=>{s(),f()});function u(){l!==null&&l();const g=Math.max(0,Qt(t)),y=Vt(t),c={top:g-r.position.top,left:y-r.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const w=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";r.position={top:g,left:y},r.directionChanged=r.direction!==w,r.delta=c,r.directionChanged===!0&&(r.direction=w,r.inflectionPoint=r.position),o("scroll",W({},r))}function f(){t=Mt(n,e.scrollTarget),t.addEventListener("scroll",a,He),a(!0)}function s(){t!==void 0&&(t.removeEventListener("scroll",a,He),t=void 0)}function a(g){if(g===!0||e.debounce===0||e.debounce==="0")u();else if(l===null){const[y,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];l=()=>{c(y),l=null}}}const k=F();return j(()=>{n=k.proxy.$el.parentNode,f()}),U(()=>{l!==null&&l(),s()}),Object.assign(k.proxy,{trigger:a,getPosition:()=>r}),Ce}}),Gt=R({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:r}){const{proxy:{$q:l}}=F(),t=z(null),n=z(l.screen.height),u=z(e.container===!0?0:l.screen.width),f=z({position:0,direction:"down",inflectionPoint:0}),s=z(0),a=z(Fe.value===!0?0:he()),k=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),g=v(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),y=v(()=>a.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),c=v(()=>a.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function w(h){if(e.container===!0||document.qScrollPrevented!==!0){const C={position:h.position.top,direction:h.direction,directionChanged:h.directionChanged,inflectionPoint:h.inflectionPoint.top,delta:h.delta.top};f.value=C,e.onScroll!==void 0&&r("scroll",C)}}function S(h){const{height:C,width:O}=h;let Q=!1;n.value!==C&&(Q=!0,n.value=C,e.onScrollHeight!==void 0&&r("scroll-height",C),P()),u.value!==O&&(Q=!0,u.value=O),Q===!0&&e.onResize!==void 0&&r("resize",h)}function p({height:h}){s.value!==h&&(s.value=h,P())}function P(){if(e.container===!0){const h=n.value>s.value?he():0;a.value!==h&&(a.value=h)}}let d;const _={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:n,containerHeight:s,scrollbarWidth:a,totalWidth:v(()=>u.value+a.value),rows:v(()=>{const h=e.view.toLowerCase().split(" ");return{top:h[0].split(""),middle:h[1].split(""),bottom:h[2].split("")}}),header:G({size:0,offset:0,space:!1}),right:G({size:300,offset:0,space:!1}),footer:G({size:0,offset:0,space:!1}),left:G({size:300,offset:0,space:!1}),scroll:f,animate(){d!==void 0?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),d=void 0},155)},update(h,C,O){_[h][C]=O}};if(Re(ae,_),he()>0){let O=function(){h=null,C.classList.remove("hide-scrollbar")},Q=function(){if(h===null){if(C.scrollHeight>l.screen.height)return;C.classList.add("hide-scrollbar")}else clearTimeout(h);h=setTimeout(O,300)},D=function($){h!==null&&$==="remove"&&(clearTimeout(h),O()),window[`${$}EventListener`]("resize",Q)},h=null;const C=document.body;b(()=>e.container!==!0?"add":"remove",D),e.container!==!0&&D("add"),bt(()=>{D("remove")})}return()=>{const h=Tt(o.default,[q(Kt,{onScroll:w}),q(we,{onResize:S})]),C=q("div",{class:k.value,style:g.value,ref:e.container===!0?void 0:t},h);return e.container===!0?q("div",{class:"q-layout-container overflow-hidden",ref:t},[q(we,{onResize:p}),q("div",{class:"absolute-full",style:y.value},[q("div",{class:"scroll",style:c.value},[C])])]):C}}});const Jt=Ae({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Zt(e,o,r,l,t,n){return I(),ee(Ht,{clickable:"",tag:"a",to:e.link},{default:x(()=>[e.icon?(I(),ee(De,{key:0,avatar:""},{default:x(()=>[T(dt,{name:e.icon},null,8,["name"])]),_:1})):wt("",!0),T(De,null,{default:x(()=>[T(be,null,{default:x(()=>[te(Be(e.title),1)]),_:1}),T(be,{caption:""},{default:x(()=>[te(Be(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"])}var ea=We(Jt,[["render",Zt]]);const ta=[{title:"Acceuil",caption:"page d'aceuil",icon:"home",link:"acceuil"},{title:"Blog",caption:"Blog DPS",icon:"shopping_cart",link:"blog"},{title:"Achat",caption:"Commande fournisseur",icon:"shopping_cart",link:"achat"},{title:"Devis",caption:"Commande fournisseur",icon:"shopping_cart",link:"devis"},{title:"Debit Tube",caption:"Calcul Debit Tube",icon:"carpenter",link:"tube"},{title:"Poid T\xF4le",caption:"Calcul Poid T\xF4le",icon:"scale",link:"poid"}],aa=Ae({name:"MainLayout",components:{EssentialLink:ea},setup(){const e=z(!1);return{essentialLinks:ta,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),na=te("DPS Tools"),oa=qt("div",null,"V0.0.5",-1),ia=te("Menu");function ra(e,o,r,l,t,n){const u=Oe("EssentialLink"),f=Oe("router-view");return I(),ee(Gt,{view:"hHh Lpr lFf"},{default:x(()=>[T(Nt,{elevated:""},{default:x(()=>[T(vt,null,{default:x(()=>[T(ft,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),T(ht,null,{default:x(()=>[na]),_:1}),oa]),_:1})]),_:1}),T(Ut,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=s=>e.leftDrawerOpen=s),"show-if-above":"",bordered:""},{default:x(()=>[T(Ft,null,{default:x(()=>[T(be,{header:""},{default:x(()=>[ia]),_:1}),(I(!0),Ct(St,null,kt(e.essentialLinks,s=>(I(),ee(u,zt({key:s.title},s),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),T(Xt,{style:{background:"grey"}},{default:x(()=>[T(f)]),_:1})]),_:1})}var pa=We(aa,[["render",ra]]);export{pa as default};

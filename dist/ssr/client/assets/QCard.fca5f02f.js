var Ae=Object.defineProperty,Be=Object.defineProperties;var Ee=Object.getOwnPropertyDescriptors;var ce=Object.getOwnPropertySymbols;var $e=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;var fe=(e,t,l)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,V=(e,t)=>{for(var l in t||(t={}))$e.call(t,l)&&fe(e,l,t[l]);if(ce)for(var l of ce(t))Oe.call(t,l)&&fe(e,l,t[l]);return e},Z=(e,t)=>Be(e,Ee(t));import{d as Pe,w as j,a as le,X as Ie,g as X,e as b,h as y,r as T,Y as Te,Z as je,$ as ze,v as De,n as H,a0 as Ne,a1 as Le,o as we,i as Ue,q as G,T as Ze,a2 as Ke,s as ve}from"./index.f6a029c7.js";import{d as Qe,e as He,Q as me,f as We}from"./QBtn.95cc568b.js";import{b as Xe,u as Se,a as Me}from"./format.bace913d.js";import{c as de,f as Ye,d as Y}from"./render.96116371.js";function Je({validate:e,resetValidation:t,requiresQForm:l}){const u=Pe(Ie,!1);if(u!==!1){const{props:f,proxy:h}=X();Object.assign(h,{validate:e,resetValidation:t}),j(()=>f.disable,v=>{v===!0?(typeof t=="function"&&t(),u.unbindComponent(h)):u.bindComponent(h)}),f.disable!==!0&&u.bindComponent(h),le(()=>{f.disable!==!0&&u.unbindComponent(h)})}else l===!0&&console.error("Parent QForm not found on useFormChild()!")}const ge=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,he=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,be=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ee=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,te=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ye={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),hexColor:e=>ge.test(e),hexaColor:e=>he.test(e),hexOrHexaColor:e=>be.test(e),rgbColor:e=>ee.test(e),rgbaColor:e=>te.test(e),rgbOrRgbaColor:e=>ee.test(e)||te.test(e),hexOrRgbColor:e=>ge.test(e)||ee.test(e),hexaOrRgbaColor:e=>he.test(e)||te.test(e),anyColor:e=>be.test(e)||ee.test(e)||te.test(e)},Ge={};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(e=>{Ge["[object "+e+"]"]=e.toLowerCase()});const et=Z(V({},Qe),{min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean}),ue=50,qe=2*ue,Fe=qe*Math.PI,tt=Math.round(Fe*1e3)/1e3;de({name:"QCircularProgress",props:Z(V({},et),{value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean}),setup(e,{slots:t}){const{proxy:{$q:l}}=X(),u=He(e),f=b(()=>{const M=(l.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(l.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-M}deg)`:`rotate3d(0, 0, 1, ${M-90}deg)`}}),h=b(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),v=b(()=>qe/(1-e.thickness/2)),S=b(()=>`${v.value/2} ${v.value/2} ${v.value} ${v.value}`),p=b(()=>Xe(e.value,e.min,e.max)),k=b(()=>Fe*(1-(p.value-e.min)/(e.max-e.min))),A=b(()=>e.thickness/2*v.value);function F({thickness:M,offset:B,color:E,cls:L}){return y("circle",{class:"q-circular-progress__"+L+(E!==void 0?` text-${E}`:""),style:h.value,fill:"transparent",stroke:"currentColor","stroke-width":M,"stroke-dasharray":tt,"stroke-dashoffset":B,cx:v.value,cy:v.value,r:ue})}return()=>{const M=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&M.push(y("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:ue-A.value/2,cx:v.value,cy:v.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&M.push(F({cls:"track",thickness:A.value,offset:0,color:e.trackColor})),M.push(F({cls:"circle",thickness:A.value,offset:k.value,color:e.color}));const B=[y("svg",{class:"q-circular-progress__svg",style:f.value,viewBox:S.value,"aria-hidden":"true"},M)];return e.showValue===!0&&B.push(y("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},t.default!==void 0?t.default():[y("div",p.value)])),y("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:u.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:p.value},Ye(t.internal,B))}}});const at=["rejected"],rt=[...at,"start","finish","added","removed"],lt=()=>!0;function nt(e){const t={};return e.forEach(l=>{t[l]=lt}),t}nt(rt);let oe,ae=0;const O=new Array(256);for(let e=0;e<256;e++)O[e]=(e+256).toString(16).substr(1);const ot=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const l=new Uint8Array(t);return e.getRandomValues(l),l}}return t=>{const l=[];for(let u=t;u>0;u--)l.push(Math.floor(Math.random()*256));return l}})(),ke=4096;function ut(){(oe===void 0||ae+16>ke)&&(ae=0,oe=ot(ke));const e=Array.prototype.slice.call(oe,ae,ae+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,O[e[0]]+O[e[1]]+O[e[2]]+O[e[3]]+"-"+O[e[4]]+O[e[5]]+"-"+O[e[6]]+O[e[7]]+"-"+O[e[8]]+O[e[9]]+"-"+O[e[10]]+O[e[11]]+O[e[12]]+O[e[13]]+O[e[14]]+O[e[15]]}const it=[!0,!1,"ondemand"],st={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>it.includes(e)}};function dt(e,t){const{props:l,proxy:u}=X(),f=T(!1),h=T(null),v=T(null);Je({validate:E,resetValidation:B});let S=0,p;const k=b(()=>l.rules!==void 0&&l.rules!==null&&l.rules.length>0),A=b(()=>l.disable!==!0&&k.value===!0),F=b(()=>l.error===!0||f.value===!0),M=b(()=>typeof l.errorMessage=="string"&&l.errorMessage.length>0?l.errorMessage:h.value);j(()=>l.modelValue,()=>{L()}),j(()=>l.reactiveRules,I=>{I===!0?p===void 0&&(p=j(()=>l.rules,()=>{L(!0)})):p!==void 0&&(p(),p=void 0)},{immediate:!0}),j(e,I=>{I===!0?v.value===null&&(v.value=!1):v.value===!1&&(v.value=!0,A.value===!0&&l.lazyRules!=="ondemand"&&t.value===!1&&R())});function B(){S++,t.value=!1,v.value=null,f.value=!1,h.value=null,R.cancel()}function E(I=l.modelValue){if(A.value!==!0)return!0;const z=++S;t.value!==!0&&l.lazyRules!==!0&&(v.value=!0);const P=(q,r)=>{f.value!==q&&(f.value=q);const n=r||void 0;h.value!==n&&(h.value=n),t.value=!1},$=[];for(let q=0;q<l.rules.length;q++){const r=l.rules[q];let n;if(typeof r=="function"?n=r(I):typeof r=="string"&&ye[r]!==void 0&&(n=ye[r](I)),n===!1||typeof n=="string")return P(!0,n),!1;n!==!0&&n!==void 0&&$.push(n)}return $.length===0?(P(!1),!0):(t.value=!0,Promise.all($).then(q=>{if(q===void 0||Array.isArray(q)===!1||q.length===0)return z===S&&P(!1),!0;const r=q.find(n=>n===!1||typeof n=="string");return z===S&&P(r!==void 0,r),r===void 0},q=>(z===S&&(console.error(q),P(!0)),!1)))}function L(I){A.value===!0&&l.lazyRules!=="ondemand"&&(v.value===!0||l.lazyRules!==!0&&I!==!0)&&R()}const R=Te(E,0);return le(()=>{p!==void 0&&p(),R.cancel()}),Object.assign(u,{resetValidation:B,validate:E}),je(u,"hasError",()=>F.value),{isDirtyModel:v,hasRules:k,hasError:F,errorMessage:M,validate:E,resetValidation:B}}const pe=/^on[A-Z]/;function ct(e,t){const l={listeners:T({}),attributes:T({})};function u(){const f={},h={};for(const v in e)v!=="class"&&v!=="style"&&pe.test(v)===!1&&(f[v]=e[v]);for(const v in t.props)pe.test(v)===!0&&(h[v]=t.props[v]);l.attributes.value=f,l.listeners.value=h}return ze(u),u(),l}let W=[],J=[];function Re(e){J=J.filter(t=>t!==e)}function Bt(e){Re(e),J.push(e)}function Et(e){Re(e),J.length===0&&W.length>0&&(W[W.length-1](),W=[])}function Ve(e){J.length===0?e():W.push(e)}function ft(e){W=W.filter(t=>t!==e)}function ie(e){return e===void 0?`f_${ut()}`:e}function se(e){return e!=null&&(""+e).length>0}const vt=Z(V(V({},Se),st),{label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]}),mt=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function gt(){const{props:e,attrs:t,proxy:l,vnode:u}=X();return{isDark:Me(e,l.$q),editable:b(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:T(!1),focused:T(!1),hasPopupOpen:!1,splitAttrs:ct(t,u),targetUid:T(ie(e.for)),rootRef:T(null),targetRef:T(null),controlRef:T(null)}}function ht(e){const{props:t,emit:l,slots:u,attrs:f,proxy:h}=X(),{$q:v}=h;let S;e.hasValue===void 0&&(e.hasValue=b(()=>se(t.modelValue))),e.emitValue===void 0&&(e.emitValue=a=>{l("update:modelValue",a)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:s,onFocusout:d}),Object.assign(e,{clearValue:i,onControlFocusin:s,onControlFocusout:d,focus:n}),e.computedCounter===void 0&&(e.computedCounter=b(()=>{if(t.counter!==!1){const a=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,m=t.maxlength!==void 0?t.maxlength:t.maxValues;return a+(m!==void 0?" / "+m:"")}}));const{isDirtyModel:p,hasRules:k,hasError:A,errorMessage:F,resetValidation:M}=dt(e.focused,e.innerLoading),B=e.floatingLabel!==void 0?b(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):b(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),E=b(()=>t.bottomSlots===!0||t.hint!==void 0||k.value===!0||t.counter===!0||t.error!==null),L=b(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),R=b(()=>`q-field row no-wrap items-start q-field--${L.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(B.value===!0?" q-field--float":"")+(z.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(A.value===!0?" q-field--error":"")+(A.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&E.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),I=b(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(A.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),z=b(()=>t.labelSlot===!0||t.label!==void 0),P=b(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&A.value!==!0?` text-${t.labelColor}`:"")),$=b(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:B.value,modelValue:t.modelValue,emitValue:e.emitValue})),q=b(()=>{const a={for:e.targetUid.value};return t.disable===!0?a["aria-disabled"]="true":t.readonly===!0&&(a["aria-readonly"]="true"),a});j(()=>t.for,a=>{e.targetUid.value=ie(a)});function r(){const a=document.activeElement;let m=e.targetRef!==void 0&&e.targetRef.value;m&&(a===null||a.id!==e.targetUid.value)&&(m.hasAttribute("tabindex")===!0||(m=m.querySelector("[tabindex]")),m&&m!==a&&m.focus({preventScroll:!0}))}function n(){Ve(r)}function c(){ft(r);const a=document.activeElement;a!==null&&e.rootRef.value.contains(a)&&a.blur()}function s(a){clearTimeout(S),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,l("focus",a))}function d(a,m){clearTimeout(S),S=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,l("blur",a)),m!==void 0&&m())})}function i(a){De(a),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),l("update:modelValue",null),l("clear",t.modelValue),H(()=>{M(),v.platform.is.mobile!==!0&&(p.value=!1)})}function x(){const a=[];return u.prepend!==void 0&&a.push(y("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:G},u.prepend())),a.push(y("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),A.value===!0&&t.noErrorIcon===!1&&a.push(D("error",[y(me,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?a.push(D("inner-loading-append",u.loading!==void 0?u.loading():[y(We,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&a.push(D("inner-clearable-append",[y(me,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:i})])),u.append!==void 0&&a.push(y("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:G},u.append())),e.getInnerAppend!==void 0&&a.push(D("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&a.push(e.getControlChild()),a}function g(){const a=[];return t.prefix!==void 0&&t.prefix!==null&&a.push(y("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&a.push(e.getShadowControl()),e.getControl!==void 0?a.push(e.getControl()):u.rawControl!==void 0?a.push(u.rawControl()):u.control!==void 0&&a.push(y("div",Z(V({ref:e.targetRef,class:"q-field__native row"},e.splitAttrs.attributes.value),{"data-autofocus":t.autofocus===!0||void 0}),u.control($.value))),z.value===!0&&a.push(y("div",{class:P.value},Y(u.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&a.push(y("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),a.concat(Y(u.default))}function C(){let a,m;A.value===!0?F.value!==null?(a=[y("div",{role:"alert"},F.value)],m=`q--slot-error-${F.value}`):(a=Y(u.error),m="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(a=[y("div",t.hint)],m=`q--slot-hint-${t.hint}`):(a=Y(u.hint),m="q--slot-hint"));const o=t.counter===!0||u.counter!==void 0;if(t.hideBottomSpace===!0&&o===!1&&a===void 0)return;const w=y("div",{key:m,class:"q-field__messages col"},a);return y("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale")},[t.hideBottomSpace===!0?w:y(Ze,{name:"q-transition--field-message"},()=>w),o===!0?y("div",{class:"q-field__counter"},u.counter!==void 0?u.counter():e.computedCounter.value):null])}function D(a,m){return m===null?null:y("div",{key:a,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},m)}Object.assign(h,{focus:n,blur:c});let U=!1;return Ne(()=>{U=!0}),Le(()=>{U===!0&&t.autofocus===!0&&h.focus()}),we(()=>{Ue.value===!0&&t.for===void 0&&(e.targetUid.value=ie()),t.autofocus===!0&&h.focus()}),le(()=>{clearTimeout(S)}),function(){const m=e.getControl===void 0&&u.control===void 0?V(Z(V({},e.splitAttrs.attributes.value),{"data-autofocus":t.autofocus}),q.value):q.value;return y("label",V({ref:e.rootRef,class:[R.value,f.class],style:f.style},m),[u.before!==void 0?y("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:G},u.before()):null,y("div",{class:"q-field__inner relative-position col self-stretch"},[y("div",V({ref:e.controlRef,class:I.value,tabindex:-1},e.controlEvents),x()),E.value===!0?C():null]),u.after!==void 0?y("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:G},u.after()):null])}}const xe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},re={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},_e=Object.keys(re);_e.forEach(e=>{re[e].regex=new RegExp(re[e].pattern)});const bt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+_e.join("")+"])|(.)","g"),Ce=/[.*+?^${}()|[\]\\]/g,_=String.fromCharCode(1),yt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function kt(e,t,l,u){let f,h,v,S;const p=T(null),k=T(F());function A(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}j(()=>e.type+e.autogrow,B),j(()=>e.mask,r=>{if(r!==void 0)E(k.value,!0);else{const n=$(k.value);B(),e.modelValue!==n&&t("update:modelValue",n)}}),j(()=>e.fillMask+e.reverseFillMask,()=>{p.value===!0&&E(k.value,!0)}),j(()=>e.unmaskedValue,()=>{p.value===!0&&E(k.value)});function F(){if(B(),p.value===!0){const r=z($(e.modelValue));return e.fillMask!==!1?q(r):r}return e.modelValue}function M(r){if(r<f.length)return f.slice(-r);let n="",c=f;const s=c.indexOf(_);if(s>-1){for(let d=r-c.length;d>0;d--)n+=_;c=c.slice(0,s)+n+c.slice(s)}return c}function B(){if(p.value=e.mask!==void 0&&e.mask.length>0&&A(),p.value===!1){S=void 0,f="",h="";return}const r=xe[e.mask]===void 0?e.mask:xe[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",c=n.replace(Ce,"\\$&"),s=[],d=[],i=[];let x=e.reverseFillMask===!0,g="",C="";r.replace(bt,(m,o,w,Q,K)=>{if(Q!==void 0){const N=re[Q];i.push(N),C=N.negate,x===!0&&(d.push("(?:"+C+"+)?("+N.pattern+"+)?(?:"+C+"+)?("+N.pattern+"+)?"),x=!1),d.push("(?:"+C+"+)?("+N.pattern+")?")}else if(w!==void 0)g="\\"+(w==="\\"?"":w),i.push(w),s.push("([^"+g+"]+)?"+g+"?");else{const N=o!==void 0?o:K;g=N==="\\"?"\\\\\\\\":N.replace(Ce,"\\\\$&"),i.push(N),s.push("([^"+g+"]+)?"+g+"?")}});const D=new RegExp("^"+s.join("")+"("+(g===""?".":"[^"+g+"]")+"+)?$"),U=d.length-1,a=d.map((m,o)=>o===0&&e.reverseFillMask===!0?new RegExp("^"+c+"*"+m):o===U?new RegExp("^"+m+"("+(C===""?".":C)+"+)?"+(e.reverseFillMask===!0?"$":c+"*")):new RegExp("^"+m));v=i,S=m=>{const o=D.exec(m);o!==null&&(m=o.slice(1).join(""));const w=[],Q=a.length;for(let K=0,N=m;K<Q;K++){const ne=a[K].exec(N);if(ne===null)break;N=N.slice(ne.shift().length),w.push(...ne)}return w.length>0?w.join(""):m},f=i.map(m=>typeof m=="string"?m:_).join(""),h=f.split(_).join(n)}function E(r,n,c){const s=u.value,d=s.selectionEnd,i=s.value.length-d,x=$(r);n===!0&&B();const g=z(x),C=e.fillMask!==!1?q(g):g,D=k.value!==C;s.value!==C&&(s.value=C),D===!0&&(k.value=C),document.activeElement===s&&H(()=>{if(C===h){const a=e.reverseFillMask===!0?h.length:0;s.setSelectionRange(a,a,"forward");return}if(c==="insertFromPaste"&&e.reverseFillMask!==!0){const a=d-1;R.right(s,a,a);return}if(["deleteContentBackward","deleteContentForward"].indexOf(c)>-1){const a=e.reverseFillMask===!0?d===0?C.length>g.length?1:0:Math.max(0,C.length-(C===h?0:Math.min(g.length,i)+1))+1:d;s.setSelectionRange(a,a,"forward");return}if(e.reverseFillMask===!0)if(D===!0){const a=Math.max(0,C.length-(C===h?0:Math.min(g.length,i+1)));a===1&&d===1?s.setSelectionRange(a,a,"forward"):R.rightReverse(s,a,a)}else{const a=C.length-i;s.setSelectionRange(a,a,"backward")}else if(D===!0){const a=Math.max(0,f.indexOf(_),Math.min(g.length,d)-1);R.right(s,a,a)}else{const a=d-1;R.right(s,a,a)}});const U=e.unmaskedValue===!0?$(C):C;String(e.modelValue)!==U&&l(U,!0)}function L(r,n,c){const s=z($(r.value));n=Math.max(0,f.indexOf(_),Math.min(s.length,n)),r.setSelectionRange(n,c,"forward")}const R={left(r,n,c,s){const d=f.slice(n-1).indexOf(_)===-1;let i=Math.max(0,n-1);for(;i>=0;i--)if(f[i]===_){n=i,d===!0&&n++;break}if(i<0&&f[n]!==void 0&&f[n]!==_)return R.right(r,0,0);n>=0&&r.setSelectionRange(n,s===!0?c:n,"backward")},right(r,n,c,s){const d=r.value.length;let i=Math.min(d,c+1);for(;i<=d;i++)if(f[i]===_){c=i;break}else f[i-1]===_&&(c=i);if(i>d&&f[c-1]!==void 0&&f[c-1]!==_)return R.left(r,d,d);r.setSelectionRange(s?n:c,c,"forward")},leftReverse(r,n,c,s){const d=M(r.value.length);let i=Math.max(0,n-1);for(;i>=0;i--)if(d[i-1]===_){n=i;break}else if(d[i]===_&&(n=i,i===0))break;if(i<0&&d[n]!==void 0&&d[n]!==_)return R.rightReverse(r,0,0);n>=0&&r.setSelectionRange(n,s===!0?c:n,"backward")},rightReverse(r,n,c,s){const d=r.value.length,i=M(d),x=i.slice(0,c+1).indexOf(_)===-1;let g=Math.min(d,c+1);for(;g<=d;g++)if(i[g-1]===_){c=g,c>0&&x===!0&&c--;break}if(g>d&&i[c-1]!==void 0&&i[c-1]!==_)return R.leftReverse(r,d,d);r.setSelectionRange(s===!0?n:c,c,"forward")}};function I(r){if(Ke(r)===!0)return;const n=u.value,c=n.selectionStart,s=n.selectionEnd;if(r.keyCode===37||r.keyCode===39){const d=R[(r.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];r.preventDefault(),d(n,c,s,r.shiftKey)}else r.keyCode===8&&e.reverseFillMask!==!0&&c===s?R.left(n,c,s,!0):r.keyCode===46&&e.reverseFillMask===!0&&c===s&&R.rightReverse(n,c,s,!0)}function z(r){if(r==null||r==="")return"";if(e.reverseFillMask===!0)return P(r);const n=v;let c=0,s="";for(let d=0;d<n.length;d++){const i=r[c],x=n[d];if(typeof x=="string")s+=x,i===x&&c++;else if(i!==void 0&&x.regex.test(i))s+=x.transform!==void 0?x.transform(i):i,c++;else return s}return s}function P(r){const n=v,c=f.indexOf(_);let s=r.length-1,d="";for(let i=n.length-1;i>=0&&s>-1;i--){const x=n[i];let g=r[s];if(typeof x=="string")d=x+d,g===x&&s--;else if(g!==void 0&&x.regex.test(g))do d=(x.transform!==void 0?x.transform(g):g)+d,s--,g=r[s];while(c===i&&g!==void 0&&x.regex.test(g));else return d}return d}function $(r){return typeof r!="string"||S===void 0?typeof r=="number"?S(""+r):r:S(r)}function q(r){return h.length-r.length<=0?r:e.reverseFillMask===!0&&r.length>0?h.slice(0,-r.length)+r:r+h.slice(r.length)}return{innerValue:k,hasMask:p,moveCursorForPaste:L,updateMaskValue:E,onMaskedKeydown:I}}const pt={name:String};function $t(e={}){return(t,l,u)=>{t[l](y("input",V({class:"hidden"+(u||"")},e.value)))}}function xt(e){return b(()=>e.name||e.for)}function Ct(e,t){function l(){const u=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(u)===u&&("length"in u?Array.from(u):[u]).forEach(h=>{f.items.add(h)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?b(()=>{if(e.type==="file")return l()}):b(l)}const wt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,St=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Mt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;function qt(e){return function(l){if(l.type==="compositionend"||l.type==="change"){if(l.target.composing!==!0)return;l.target.composing=!1,e(l)}else l.type==="compositionupdate"?typeof l.data=="string"&&wt.test(l.data)===!1&&St.test(l.data)===!1&&Mt.test(l.data)===!1&&(l.target.composing=!1):l.target.composing=!0}}var Ot=de({name:"QInput",inheritAttrs:!1,props:Z(V(V(V({},vt),yt),pt),{modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]}),emits:[...mt,"paste","change"],setup(e,{emit:t,attrs:l}){const u={};let f=NaN,h,v,S,p;const k=T(null),A=xt(e),{innerValue:F,hasMask:M,moveCursorForPaste:B,updateMaskValue:E,onMaskedKeydown:L}=kt(e,t,x,k),R=Ct(e,!0),I=b(()=>se(F.value)),z=qt(i),P=gt(),$=b(()=>e.type==="textarea"||e.autogrow===!0),q=b(()=>$.value===!0||["text","search","url","tel","password"].includes(e.type)),r=b(()=>{const o=Z(V({},P.splitAttrs.listeners.value),{onInput:i,onPaste:d,onChange:C,onBlur:D,onFocus:ve});return o.onCompositionstart=o.onCompositionupdate=o.onCompositionend=z,M.value===!0&&(o.onKeydown=L),e.autogrow===!0&&(o.onAnimationend=g),o}),n=b(()=>{const o=Z(V({tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:A.value},P.splitAttrs.attributes.value),{id:P.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0});return $.value===!1&&(o.type=e.type),e.autogrow===!0&&(o.rows=1),o});j(()=>e.type,()=>{k.value&&(k.value.value=e.modelValue)}),j(()=>e.modelValue,o=>{if(M.value===!0){if(v===!0&&(v=!1,String(o)===f))return;E(o)}else F.value!==o&&(F.value=o,e.type==="number"&&u.hasOwnProperty("value")===!0&&(h===!0?h=!1:delete u.value));e.autogrow===!0&&H(g)}),j(()=>e.autogrow,o=>{o===!0?H(g):k.value!==null&&l.rows>0&&(k.value.style.height="auto")}),j(()=>e.dense,()=>{e.autogrow===!0&&H(g)});function c(){Ve(()=>{const o=document.activeElement;k.value!==null&&k.value!==o&&(o===null||o.id!==P.targetUid.value)&&k.value.focus({preventScroll:!0})})}function s(){k.value!==null&&k.value.select()}function d(o){if(M.value===!0&&e.reverseFillMask!==!0){const w=o.target;B(w,w.selectionStart,w.selectionEnd)}t("paste",o)}function i(o){if(!o||!o.target||o.target.composing===!0)return;if(e.type==="file"){t("update:modelValue",o.target.files);return}const w=o.target.value;if(M.value===!0)E(w,!1,o.inputType);else if(x(w),q.value===!0&&o.target===document.activeElement){const{selectionStart:Q,selectionEnd:K}=o.target;Q!==void 0&&K!==void 0&&H(()=>{o.target===document.activeElement&&w.indexOf(o.target.value)===0&&o.target.setSelectionRange(Q,K)})}e.autogrow===!0&&g()}function x(o,w){p=()=>{e.type!=="number"&&u.hasOwnProperty("value")===!0&&delete u.value,e.modelValue!==o&&f!==o&&(w===!0&&(v=!0),t("update:modelValue",o),H(()=>{f===o&&(f=NaN)})),p=void 0},e.type==="number"&&(h=!0,u.value=o),e.debounce!==void 0?(clearTimeout(S),u.value=o,S=setTimeout(p,e.debounce)):p()}function g(){const o=k.value;if(o!==null){const w=o.parentNode.style;w.marginBottom=o.scrollHeight-1+"px",o.style.height="1px",o.style.height=o.scrollHeight+"px",w.marginBottom=""}}function C(o){z(o),clearTimeout(S),p!==void 0&&p(),t("change",o.target.value)}function D(o){o!==void 0&&ve(o),clearTimeout(S),p!==void 0&&p(),h=!1,v=!1,delete u.value,e.type!=="file"&&setTimeout(()=>{k.value!==null&&(k.value.value=F.value!==void 0?F.value:"")})}function U(){return u.hasOwnProperty("value")===!0?u.value:F.value!==void 0?F.value:""}le(()=>{D()}),we(()=>{e.autogrow===!0&&g()}),Object.assign(P,{innerValue:F,fieldClass:b(()=>`q-${$.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:b(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:k,emitValue:x,hasValue:I,floatingLabel:b(()=>I.value===!0||se(e.displayValue)),getControl:()=>y($.value===!0?"textarea":"input",V(V(V({ref:k,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle},n.value),r.value),e.type!=="file"?{value:U()}:R.value)),getShadowControl:()=>y("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+($.value===!0?"":" text-no-wrap")},[y("span",{class:"invisible"},U()),y("span",e.shadowText)])});const a=ht(P),m=X();return Object.assign(m.proxy,{focus:c,select:s,getNativeElement:()=>k.value}),a}}),Pt=de({name:"QCard",props:Z(V({},Se),{tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean}),setup(e,{slots:t}){const l=X(),u=Me(e,l.proxy.$q),f=b(()=>"q-card"+(u.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>y(e.tag,{class:f.value},Y(t.default))}});export{Ot as Q,Pt as a,mt as b,ht as c,gt as d,Bt as e,Ve as f,pt as g,xt as h,se as i,qt as j,$t as k,Et as r,vt as u};

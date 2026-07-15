(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();var Ko={exports:{}},al={},Go={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rr=Symbol.for("react.element"),ac=Symbol.for("react.portal"),uc=Symbol.for("react.fragment"),cc=Symbol.for("react.strict_mode"),dc=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),mc=Symbol.for("react.context"),pc=Symbol.for("react.forward_ref"),hc=Symbol.for("react.suspense"),gc=Symbol.for("react.memo"),vc=Symbol.for("react.lazy"),Rs=Symbol.iterator;function xc(e){return e===null||typeof e!="object"?null:(e=Rs&&e[Rs]||e["@@iterator"],typeof e=="function"?e:null)}var Xo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yo=Object.assign,Jo={};function hn(e,t,n){this.props=e,this.context=t,this.refs=Jo,this.updater=n||Xo}hn.prototype.isReactComponent={};hn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zo(){}Zo.prototype=hn.prototype;function Bi(e,t,n){this.props=e,this.context=t,this.refs=Jo,this.updater=n||Xo}var Ui=Bi.prototype=new Zo;Ui.constructor=Bi;Yo(Ui,hn.prototype);Ui.isPureReactComponent=!0;var As=Array.isArray,ea=Object.prototype.hasOwnProperty,Vi={current:null},ta={key:!0,ref:!0,__self:!0,__source:!0};function na(e,t,n){var r,l={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)ea.call(t,r)&&!ta.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:rr,type:e,key:s,ref:o,props:l,_owner:Vi.current}}function yc(e,t){return{$$typeof:rr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qi(e){return typeof e=="object"&&e!==null&&e.$$typeof===rr}function wc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $s=/\/+/g;function Sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wc(""+e.key):t.toString(36)}function Cr(e,t,n,r,l){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case rr:case ac:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Sl(o,0):r,As(l)?(n="",e!=null&&(n=e.replace($s,"$&/")+"/"),Cr(l,t,n,"",function(d){return d})):l!=null&&(Qi(l)&&(l=yc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace($s,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",As(e))for(var a=0;a<e.length;a++){s=e[a];var u=r+Sl(s,a);o+=Cr(s,t,n,u,l)}else if(u=xc(e),typeof u=="function")for(e=u.call(e),a=0;!(s=e.next()).done;)s=s.value,u=r+Sl(s,a++),o+=Cr(s,t,n,u,l);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ur(e,t,n){if(e==null)return e;var r=[],l=0;return Cr(e,r,"","",function(s){return t.call(n,s,l++)}),r}function jc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},_r={transition:null},kc={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:_r,ReactCurrentOwner:Vi};function ra(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:ur,forEach:function(e,t,n){ur(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ur(e,function(){t++}),t},toArray:function(e){return ur(e,function(t){return t})||[]},only:function(e){if(!Qi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=hn;O.Fragment=uc;O.Profiler=dc;O.PureComponent=Bi;O.StrictMode=cc;O.Suspense=hc;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kc;O.act=ra;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yo({},e.props),l=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Vi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)ea.call(t,u)&&!ta.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:rr,type:e.type,key:l,ref:s,props:r,_owner:o}};O.createContext=function(e){return e={$$typeof:mc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fc,_context:e},e.Consumer=e};O.createElement=na;O.createFactory=function(e){var t=na.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:pc,render:e}};O.isValidElement=Qi;O.lazy=function(e){return{$$typeof:vc,_payload:{_status:-1,_result:e},_init:jc}};O.memo=function(e,t){return{$$typeof:gc,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=_r.transition;_r.transition={};try{e()}finally{_r.transition=t}};O.unstable_act=ra;O.useCallback=function(e,t){return pe.current.useCallback(e,t)};O.useContext=function(e){return pe.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};O.useEffect=function(e,t){return pe.current.useEffect(e,t)};O.useId=function(){return pe.current.useId()};O.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return pe.current.useMemo(e,t)};O.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};O.useRef=function(e){return pe.current.useRef(e)};O.useState=function(e){return pe.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return pe.current.useTransition()};O.version="18.3.1";Go.exports=O;var T=Go.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc=T,Sc=Symbol.for("react.element"),bc=Symbol.for("react.fragment"),Cc=Object.prototype.hasOwnProperty,_c=Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zc={key:!0,ref:!0,__self:!0,__source:!0};function la(e,t,n){var r,l={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Cc.call(t,r)&&!zc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Sc,type:e,key:s,ref:o,props:l,_owner:_c.current}}al.Fragment=bc;al.jsx=la;al.jsxs=la;Ko.exports=al;var i=Ko.exports,ia={exports:{}},be={},sa={exports:{}},oa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,M){var D=_.length;_.push(M);e:for(;0<D;){var $=D-1>>>1,F=_[$];if(0<l(F,M))_[$]=M,_[D]=F,D=$;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var M=_[0],D=_.pop();if(D!==M){_[0]=D;e:for(var $=0,F=_.length,ne=F>>>1;$<ne;){var De=2*($+1)-1,xn=_[De],Ve=De+1,_t=_[Ve];if(0>l(xn,D))Ve<F&&0>l(_t,xn)?(_[$]=_t,_[Ve]=D,$=Ve):(_[$]=xn,_[De]=D,$=De);else if(Ve<F&&0>l(_t,D))_[$]=_t,_[Ve]=D,$=Ve;else break e}}return M}function l(_,M){var D=_.sortIndex-M.sortIndex;return D!==0?D:_.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],d=[],h=1,g=null,p=3,y=!1,x=!1,j=!1,P=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var M=n(d);M!==null;){if(M.callback===null)r(d);else if(M.startTime<=_)r(d),M.sortIndex=M.expirationTime,t(u,M);else break;M=n(d)}}function v(_){if(j=!1,m(_),!x)if(n(u)!==null)x=!0,st(S);else{var M=n(d);M!==null&&J(v,M.startTime-_)}}function S(_,M){x=!1,j&&(j=!1,c(k),k=-1),y=!0;var D=p;try{for(m(M),g=n(u);g!==null&&(!(g.expirationTime>M)||_&&!L());){var $=g.callback;if(typeof $=="function"){g.callback=null,p=g.priorityLevel;var F=$(g.expirationTime<=M);M=e.unstable_now(),typeof F=="function"?g.callback=F:g===n(u)&&r(u),m(M)}else r(u);g=n(u)}if(g!==null)var ne=!0;else{var De=n(d);De!==null&&J(v,De.startTime-M),ne=!1}return ne}finally{g=null,p=D,y=!1}}var w=!1,b=null,k=-1,C=5,z=-1;function L(){return!(e.unstable_now()-z<C)}function V(){if(b!==null){var _=e.unstable_now();z=_;var M=!0;try{M=b(!0,_)}finally{M?W():(w=!1,b=null)}}else w=!1}var W;if(typeof f=="function")W=function(){f(V)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,Ue=Me.port2;Me.port1.onmessage=V,W=function(){Ue.postMessage(null)}}else W=function(){P(V,0)};function st(_){b=_,w||(w=!0,W())}function J(_,M){k=P(function(){_(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,st(S))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var D=p;p=M;try{return _()}finally{p=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,M){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var D=p;p=_;try{return M()}finally{p=D}},e.unstable_scheduleCallback=function(_,M,D){var $=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?$+D:$):D=$,_){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=D+F,_={id:h++,callback:M,priorityLevel:_,startTime:D,expirationTime:F,sortIndex:-1},D>$?(_.sortIndex=D,t(d,_),n(u)===null&&_===n(d)&&(j?(c(k),k=-1):j=!0,J(v,D-$))):(_.sortIndex=F,t(u,_),x||y||(x=!0,st(S))),_},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(_){var M=p;return function(){var D=p;p=M;try{return _.apply(this,arguments)}finally{p=D}}}})(oa);sa.exports=oa;var Ec=sa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc=T,Se=Ec;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var aa=new Set,Fn={};function Ft(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(Fn[e]=t,e=0;e<t.length;e++)aa.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,Lc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fs={},Hs={};function Pc(e){return Xl.call(Hs,e)?!0:Xl.call(Fs,e)?!1:Lc.test(e)?Hs[e]=!0:(Fs[e]=!0,!1)}function Ic(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mc(e,t,n,r){if(t===null||typeof t>"u"||Ic(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,l,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wi=/[\-:]([a-z])/g;function qi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wi,qi);oe[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wi,qi);oe[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wi,qi);oe[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ki(e,t,n,r){var l=oe.hasOwnProperty(t)?oe[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mc(t,n,l,r)&&(n=null),r||l===null?Pc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cr=Symbol.for("react.element"),Ut=Symbol.for("react.portal"),Vt=Symbol.for("react.fragment"),Gi=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),ua=Symbol.for("react.provider"),ca=Symbol.for("react.context"),Xi=Symbol.for("react.forward_ref"),Jl=Symbol.for("react.suspense"),Zl=Symbol.for("react.suspense_list"),Yi=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),da=Symbol.for("react.offscreen"),Bs=Symbol.iterator;function yn(e){return e===null||typeof e!="object"?null:(e=Bs&&e[Bs]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,bl;function _n(e){if(bl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bl=t&&t[1]||""}return`
`+bl+e}var Cl=!1;function _l(e,t){if(!e||Cl)return"";Cl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),s=r.stack.split(`
`),o=l.length-1,a=s.length-1;1<=o&&0<=a&&l[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==s[a]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{Cl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_n(e):""}function Dc(e){switch(e.tag){case 5:return _n(e.type);case 16:return _n("Lazy");case 13:return _n("Suspense");case 19:return _n("SuspenseList");case 0:case 2:case 15:return e=_l(e.type,!1),e;case 11:return e=_l(e.type.render,!1),e;case 1:return e=_l(e.type,!0),e;default:return""}}function ei(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vt:return"Fragment";case Ut:return"Portal";case Yl:return"Profiler";case Gi:return"StrictMode";case Jl:return"Suspense";case Zl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ca:return(e.displayName||"Context")+".Consumer";case ua:return(e._context.displayName||"Context")+".Provider";case Xi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yi:return t=e.displayName||null,t!==null?t:ei(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return ei(e(t))}catch{}}return null}function Oc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ei(t);case 8:return t===Gi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rc(e){var t=fa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function dr(e){e._valueTracker||(e._valueTracker=Rc(e))}function ma(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ar(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ti(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Us(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pa(e,t){t=t.checked,t!=null&&Ki(e,"checked",t,!1)}function ni(e,t){pa(e,t);var n=kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ri(e,t.type,n):t.hasOwnProperty("defaultValue")&&ri(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ri(e,t,n){(t!=="number"||Ar(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zn=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function li(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(zn(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kt(n)}}function ha(e,t){var n=kt(t.value),r=kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ws(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ga(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ii(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ga(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fr,va=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fr=fr||document.createElement("div"),fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ac=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){Ac.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function xa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function ya(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=xa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var $c=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function si(e,t){if(t){if($c[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function oi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ai=null;function Ji(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ui=null,nn=null,rn=null;function qs(e){if(e=sr(e)){if(typeof ui!="function")throw Error(N(280));var t=e.stateNode;t&&(t=ml(t),ui(e.stateNode,e.type,t))}}function wa(e){nn?rn?rn.push(e):rn=[e]:nn=e}function ja(){if(nn){var e=nn,t=rn;if(rn=nn=null,qs(e),t)for(e=0;e<t.length;e++)qs(t[e])}}function ka(e,t){return e(t)}function Na(){}var zl=!1;function Sa(e,t,n){if(zl)return e(t,n);zl=!0;try{return ka(e,t,n)}finally{zl=!1,(nn!==null||rn!==null)&&(Na(),ja())}}function Bn(e,t){var n=e.stateNode;if(n===null)return null;var r=ml(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var ci=!1;if(tt)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){ci=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{ci=!1}function Fc(e,t,n,r,l,s,o,a,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var Pn=!1,$r=null,Fr=!1,di=null,Hc={onError:function(e){Pn=!0,$r=e}};function Bc(e,t,n,r,l,s,o,a,u){Pn=!1,$r=null,Fc.apply(Hc,arguments)}function Uc(e,t,n,r,l,s,o,a,u){if(Bc.apply(this,arguments),Pn){if(Pn){var d=$r;Pn=!1,$r=null}else throw Error(N(198));Fr||(Fr=!0,di=d)}}function Ht(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ba(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ks(e){if(Ht(e)!==e)throw Error(N(188))}function Vc(e){var t=e.alternate;if(!t){if(t=Ht(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var s=l.alternate;if(s===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===n)return Ks(l),e;if(s===r)return Ks(l),t;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=l,r=s;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=s;break}if(a===r){o=!0,r=l,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=l;break}if(a===r){o=!0,r=s,n=l;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Ca(e){return e=Vc(e),e!==null?_a(e):null}function _a(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_a(e);if(t!==null)return t;e=e.sibling}return null}var za=Se.unstable_scheduleCallback,Gs=Se.unstable_cancelCallback,Qc=Se.unstable_shouldYield,Wc=Se.unstable_requestPaint,Y=Se.unstable_now,qc=Se.unstable_getCurrentPriorityLevel,Zi=Se.unstable_ImmediatePriority,Ea=Se.unstable_UserBlockingPriority,Hr=Se.unstable_NormalPriority,Kc=Se.unstable_LowPriority,Ta=Se.unstable_IdlePriority,ul=null,Ke=null;function Gc(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(ul,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:Jc,Xc=Math.log,Yc=Math.LN2;function Jc(e){return e>>>=0,e===0?32:31-(Xc(e)/Yc|0)|0}var mr=64,pr=4194304;function En(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Br(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=En(a):(s&=o,s!==0&&(r=En(s)))}else o=n&~l,o!==0?r=En(o):s!==0&&(r=En(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,s=t&-t,l>=s||l===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),l=1<<n,r|=e[n],t&=~l;return r}function Zc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Fe(s),a=1<<o,u=l[o];u===-1?(!(a&n)||a&r)&&(l[o]=Zc(a,t)):u<=t&&(e.expiredLanes|=a),s&=~a}}function fi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function La(){var e=mr;return mr<<=1,!(mr&4194240)&&(mr=64),e}function El(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function td(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Fe(n),s=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~s}}function es(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var A=0;function Pa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ia,ts,Ma,Da,Oa,mi=!1,hr=[],pt=null,ht=null,gt=null,Un=new Map,Vn=new Map,ct=[],nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xs(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":gt=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function jn(e,t,n,r,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[l]},t!==null&&(t=sr(t),t!==null&&ts(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function rd(e,t,n,r,l){switch(t){case"focusin":return pt=jn(pt,e,t,n,r,l),!0;case"dragenter":return ht=jn(ht,e,t,n,r,l),!0;case"mouseover":return gt=jn(gt,e,t,n,r,l),!0;case"pointerover":var s=l.pointerId;return Un.set(s,jn(Un.get(s)||null,e,t,n,r,l)),!0;case"gotpointercapture":return s=l.pointerId,Vn.set(s,jn(Vn.get(s)||null,e,t,n,r,l)),!0}return!1}function Ra(e){var t=Tt(e.target);if(t!==null){var n=Ht(t);if(n!==null){if(t=n.tag,t===13){if(t=ba(n),t!==null){e.blockedOn=t,Oa(e.priority,function(){Ma(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ai=r,n.target.dispatchEvent(r),ai=null}else return t=sr(n),t!==null&&ts(t),e.blockedOn=n,!1;t.shift()}return!0}function Ys(e,t,n){zr(e)&&n.delete(t)}function ld(){mi=!1,pt!==null&&zr(pt)&&(pt=null),ht!==null&&zr(ht)&&(ht=null),gt!==null&&zr(gt)&&(gt=null),Un.forEach(Ys),Vn.forEach(Ys)}function kn(e,t){e.blockedOn===t&&(e.blockedOn=null,mi||(mi=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,ld)))}function Qn(e){function t(l){return kn(l,e)}if(0<hr.length){kn(hr[0],e);for(var n=1;n<hr.length;n++){var r=hr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pt!==null&&kn(pt,e),ht!==null&&kn(ht,e),gt!==null&&kn(gt,e),Un.forEach(t),Vn.forEach(t),n=0;n<ct.length;n++)r=ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ct.length&&(n=ct[0],n.blockedOn===null);)Ra(n),n.blockedOn===null&&ct.shift()}var ln=it.ReactCurrentBatchConfig,Ur=!0;function id(e,t,n,r){var l=A,s=ln.transition;ln.transition=null;try{A=1,ns(e,t,n,r)}finally{A=l,ln.transition=s}}function sd(e,t,n,r){var l=A,s=ln.transition;ln.transition=null;try{A=4,ns(e,t,n,r)}finally{A=l,ln.transition=s}}function ns(e,t,n,r){if(Ur){var l=pi(e,t,n,r);if(l===null)$l(e,t,r,Vr,n),Xs(e,r);else if(rd(l,e,t,n,r))r.stopPropagation();else if(Xs(e,r),t&4&&-1<nd.indexOf(e)){for(;l!==null;){var s=sr(l);if(s!==null&&Ia(s),s=pi(e,t,n,r),s===null&&$l(e,t,r,Vr,n),s===l)break;l=s}l!==null&&r.stopPropagation()}else $l(e,t,r,null,n)}}var Vr=null;function pi(e,t,n,r){if(Vr=null,e=Ji(r),e=Tt(e),e!==null)if(t=Ht(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ba(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vr=e,null}function Aa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qc()){case Zi:return 1;case Ea:return 4;case Hr:case Kc:return 16;case Ta:return 536870912;default:return 16}default:return 16}}var ft=null,rs=null,Er=null;function $a(){if(Er)return Er;var e,t=rs,n=t.length,r,l="value"in ft?ft.value:ft.textContent,s=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[s-r];r++);return Er=l.slice(e,1<r?1-r:void 0)}function Tr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gr(){return!0}function Js(){return!1}function Ce(e){function t(n,r,l,s,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gr:Js,this.isPropagationStopped=Js,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gr)},persist:function(){},isPersistent:gr}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ls=Ce(gn),ir=G({},gn,{view:0,detail:0}),od=Ce(ir),Tl,Ll,Nn,cl=G({},ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?(Tl=e.screenX-Nn.screenX,Ll=e.screenY-Nn.screenY):Ll=Tl=0,Nn=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:Ll}}),Zs=Ce(cl),ad=G({},cl,{dataTransfer:0}),ud=Ce(ad),cd=G({},ir,{relatedTarget:0}),Pl=Ce(cd),dd=G({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),fd=Ce(dd),md=G({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pd=Ce(md),hd=G({},gn,{data:0}),eo=Ce(hd),gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xd[e])?!!t[e]:!1}function is(){return yd}var wd=G({},ir,{key:function(e){if(e.key){var t=gd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(e){return e.type==="keypress"?Tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jd=Ce(wd),kd=G({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),to=Ce(kd),Nd=G({},ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),Sd=Ce(Nd),bd=G({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cd=Ce(bd),_d=G({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zd=Ce(_d),Ed=[9,13,27,32],ss=tt&&"CompositionEvent"in window,In=null;tt&&"documentMode"in document&&(In=document.documentMode);var Td=tt&&"TextEvent"in window&&!In,Fa=tt&&(!ss||In&&8<In&&11>=In),no=" ",ro=!1;function Ha(e,t){switch(e){case"keyup":return Ed.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ba(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function Ld(e,t){switch(e){case"compositionend":return Ba(t);case"keypress":return t.which!==32?null:(ro=!0,no);case"textInput":return e=t.data,e===no&&ro?null:e;default:return null}}function Pd(e,t){if(Qt)return e==="compositionend"||!ss&&Ha(e,t)?(e=$a(),Er=rs=ft=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fa&&t.locale!=="ko"?null:t.data;default:return null}}var Id={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Id[e.type]:t==="textarea"}function Ua(e,t,n,r){wa(r),t=Qr(t,"onChange"),0<t.length&&(n=new ls("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mn=null,Wn=null;function Md(e){eu(e,0)}function dl(e){var t=Kt(e);if(ma(t))return e}function Dd(e,t){if(e==="change")return t}var Va=!1;if(tt){var Il;if(tt){var Ml="oninput"in document;if(!Ml){var io=document.createElement("div");io.setAttribute("oninput","return;"),Ml=typeof io.oninput=="function"}Il=Ml}else Il=!1;Va=Il&&(!document.documentMode||9<document.documentMode)}function so(){Mn&&(Mn.detachEvent("onpropertychange",Qa),Wn=Mn=null)}function Qa(e){if(e.propertyName==="value"&&dl(Wn)){var t=[];Ua(t,Wn,e,Ji(e)),Sa(Md,t)}}function Od(e,t,n){e==="focusin"?(so(),Mn=t,Wn=n,Mn.attachEvent("onpropertychange",Qa)):e==="focusout"&&so()}function Rd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(Wn)}function Ad(e,t){if(e==="click")return dl(t)}function $d(e,t){if(e==="input"||e==="change")return dl(t)}function Fd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:Fd;function qn(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Xl.call(t,l)||!Be(e[l],t[l]))return!1}return!0}function oo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ao(e,t){var n=oo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oo(n)}}function Wa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qa(){for(var e=window,t=Ar();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ar(e.document)}return t}function os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hd(e){var t=qa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wa(n.ownerDocument.documentElement,n)){if(r!==null&&os(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,s=Math.min(r.start,l);r=r.end===void 0?s:Math.min(r.end,l),!e.extend&&s>r&&(l=r,r=s,s=l),l=ao(n,s);var o=ao(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bd=tt&&"documentMode"in document&&11>=document.documentMode,Wt=null,hi=null,Dn=null,gi=!1;function uo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gi||Wt==null||Wt!==Ar(r)||(r=Wt,"selectionStart"in r&&os(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dn&&qn(Dn,r)||(Dn=r,r=Qr(hi,"onSelect"),0<r.length&&(t=new ls("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wt)))}function vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:vr("Animation","AnimationEnd"),animationiteration:vr("Animation","AnimationIteration"),animationstart:vr("Animation","AnimationStart"),transitionend:vr("Transition","TransitionEnd")},Dl={},Ka={};tt&&(Ka=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function fl(e){if(Dl[e])return Dl[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ka)return Dl[e]=t[n];return e}var Ga=fl("animationend"),Xa=fl("animationiteration"),Ya=fl("animationstart"),Ja=fl("transitionend"),Za=new Map,co="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function St(e,t){Za.set(e,t),Ft(t,[e])}for(var Ol=0;Ol<co.length;Ol++){var Rl=co[Ol],Ud=Rl.toLowerCase(),Vd=Rl[0].toUpperCase()+Rl.slice(1);St(Ud,"on"+Vd)}St(Ga,"onAnimationEnd");St(Xa,"onAnimationIteration");St(Ya,"onAnimationStart");St("dblclick","onDoubleClick");St("focusin","onFocus");St("focusout","onBlur");St(Ja,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function fo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Uc(r,t,void 0,e),e.currentTarget=null}function eu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==s&&l.isPropagationStopped())break e;fo(l,a,d),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,d=a.currentTarget,a=a.listener,u!==s&&l.isPropagationStopped())break e;fo(l,a,d),s=u}}}if(Fr)throw e=di,Fr=!1,di=null,e}function B(e,t){var n=t[ji];n===void 0&&(n=t[ji]=new Set);var r=e+"__bubble";n.has(r)||(tu(t,e,2,!1),n.add(r))}function Al(e,t,n){var r=0;t&&(r|=4),tu(n,e,r,t)}var xr="_reactListening"+Math.random().toString(36).slice(2);function Kn(e){if(!e[xr]){e[xr]=!0,aa.forEach(function(n){n!=="selectionchange"&&(Qd.has(n)||Al(n,!1,e),Al(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xr]||(t[xr]=!0,Al("selectionchange",!1,t))}}function tu(e,t,n,r){switch(Aa(t)){case 1:var l=id;break;case 4:l=sd;break;default:l=ns}n=l.bind(null,t,n,e),l=void 0,!ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function $l(e,t,n,r,l){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Tt(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Sa(function(){var d=s,h=Ji(n),g=[];e:{var p=Za.get(e);if(p!==void 0){var y=ls,x=e;switch(e){case"keypress":if(Tr(n)===0)break e;case"keydown":case"keyup":y=jd;break;case"focusin":x="focus",y=Pl;break;case"focusout":x="blur",y=Pl;break;case"beforeblur":case"afterblur":y=Pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Sd;break;case Ga:case Xa:case Ya:y=fd;break;case Ja:y=Cd;break;case"scroll":y=od;break;case"wheel":y=zd;break;case"copy":case"cut":case"paste":y=pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=to}var j=(t&4)!==0,P=!j&&e==="scroll",c=j?p!==null?p+"Capture":null:p;j=[];for(var f=d,m;f!==null;){m=f;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,c!==null&&(v=Bn(f,c),v!=null&&j.push(Gn(f,v,m)))),P)break;f=f.return}0<j.length&&(p=new y(p,x,null,n,h),g.push({event:p,listeners:j}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==ai&&(x=n.relatedTarget||n.fromElement)&&(Tt(x)||x[nt]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=d,x=x?Tt(x):null,x!==null&&(P=Ht(x),x!==P||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=d),y!==x)){if(j=Zs,v="onMouseLeave",c="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(j=to,v="onPointerLeave",c="onPointerEnter",f="pointer"),P=y==null?p:Kt(y),m=x==null?p:Kt(x),p=new j(v,f+"leave",y,n,h),p.target=P,p.relatedTarget=m,v=null,Tt(h)===d&&(j=new j(c,f+"enter",x,n,h),j.target=m,j.relatedTarget=P,v=j),P=v,y&&x)t:{for(j=y,c=x,f=0,m=j;m;m=Bt(m))f++;for(m=0,v=c;v;v=Bt(v))m++;for(;0<f-m;)j=Bt(j),f--;for(;0<m-f;)c=Bt(c),m--;for(;f--;){if(j===c||c!==null&&j===c.alternate)break t;j=Bt(j),c=Bt(c)}j=null}else j=null;y!==null&&mo(g,p,y,j,!1),x!==null&&P!==null&&mo(g,P,x,j,!0)}}e:{if(p=d?Kt(d):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var S=Dd;else if(lo(p))if(Va)S=$d;else{S=Rd;var w=Od}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Ad);if(S&&(S=S(e,d))){Ua(g,S,n,h);break e}w&&w(e,p,d),e==="focusout"&&(w=p._wrapperState)&&w.controlled&&p.type==="number"&&ri(p,"number",p.value)}switch(w=d?Kt(d):window,e){case"focusin":(lo(w)||w.contentEditable==="true")&&(Wt=w,hi=d,Dn=null);break;case"focusout":Dn=hi=Wt=null;break;case"mousedown":gi=!0;break;case"contextmenu":case"mouseup":case"dragend":gi=!1,uo(g,n,h);break;case"selectionchange":if(Bd)break;case"keydown":case"keyup":uo(g,n,h)}var b;if(ss)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Qt?Ha(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Fa&&n.locale!=="ko"&&(Qt||k!=="onCompositionStart"?k==="onCompositionEnd"&&Qt&&(b=$a()):(ft=h,rs="value"in ft?ft.value:ft.textContent,Qt=!0)),w=Qr(d,k),0<w.length&&(k=new eo(k,e,null,n,h),g.push({event:k,listeners:w}),b?k.data=b:(b=Ba(n),b!==null&&(k.data=b)))),(b=Td?Ld(e,n):Pd(e,n))&&(d=Qr(d,"onBeforeInput"),0<d.length&&(h=new eo("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:d}),h.data=b))}eu(g,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,s=l.stateNode;l.tag===5&&s!==null&&(l=s,s=Bn(e,n),s!=null&&r.unshift(Gn(e,s,l)),s=Bn(e,t),s!=null&&r.push(Gn(e,s,l))),e=e.return}return r}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mo(e,t,n,r,l){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,l?(u=Bn(n,s),u!=null&&o.unshift(Gn(n,u,a))):l||(u=Bn(n,s),u!=null&&o.push(Gn(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Wd=/\r\n?/g,qd=/\u0000|\uFFFD/g;function po(e){return(typeof e=="string"?e:""+e).replace(Wd,`
`).replace(qd,"")}function yr(e,t,n){if(t=po(t),po(e)!==t&&n)throw Error(N(425))}function Wr(){}var vi=null,xi=null;function yi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wi=typeof setTimeout=="function"?setTimeout:void 0,Kd=typeof clearTimeout=="function"?clearTimeout:void 0,ho=typeof Promise=="function"?Promise:void 0,Gd=typeof queueMicrotask=="function"?queueMicrotask:typeof ho<"u"?function(e){return ho.resolve(null).then(e).catch(Xd)}:wi;function Xd(e){setTimeout(function(){throw e})}function Fl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Qn(t)}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function go(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),qe="__reactFiber$"+vn,Xn="__reactProps$"+vn,nt="__reactContainer$"+vn,ji="__reactEvents$"+vn,Yd="__reactListeners$"+vn,Jd="__reactHandles$"+vn;function Tt(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=go(e);e!==null;){if(n=e[qe])return n;e=go(e)}return t}e=n,n=e.parentNode}return null}function sr(e){return e=e[qe]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function ml(e){return e[Xn]||null}var ki=[],Gt=-1;function bt(e){return{current:e}}function U(e){0>Gt||(e.current=ki[Gt],ki[Gt]=null,Gt--)}function H(e,t){Gt++,ki[Gt]=e.current,e.current=t}var Nt={},de=bt(Nt),xe=bt(!1),Dt=Nt;function un(e,t){var n=e.type.contextTypes;if(!n)return Nt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},s;for(s in n)l[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ye(e){return e=e.childContextTypes,e!=null}function qr(){U(xe),U(de)}function vo(e,t,n){if(de.current!==Nt)throw Error(N(168));H(de,t),H(xe,n)}function nu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(N(108,Oc(e)||"Unknown",l));return G({},n,r)}function Kr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nt,Dt=de.current,H(de,e),H(xe,xe.current),!0}function xo(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=nu(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,U(xe),U(de),H(de,e)):U(xe),H(xe,n)}var Ye=null,pl=!1,Hl=!1;function ru(e){Ye===null?Ye=[e]:Ye.push(e)}function Zd(e){pl=!0,ru(e)}function Ct(){if(!Hl&&Ye!==null){Hl=!0;var e=0,t=A;try{var n=Ye;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,pl=!1}catch(l){throw Ye!==null&&(Ye=Ye.slice(e+1)),za(Zi,Ct),l}finally{A=t,Hl=!1}}return null}var Xt=[],Yt=0,Gr=null,Xr=0,ze=[],Ee=0,Ot=null,Je=1,Ze="";function zt(e,t){Xt[Yt++]=Xr,Xt[Yt++]=Gr,Gr=e,Xr=t}function lu(e,t,n){ze[Ee++]=Je,ze[Ee++]=Ze,ze[Ee++]=Ot,Ot=e;var r=Je;e=Ze;var l=32-Fe(r)-1;r&=~(1<<l),n+=1;var s=32-Fe(t)+l;if(30<s){var o=l-l%5;s=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Je=1<<32-Fe(t)+l|n<<l|r,Ze=s+e}else Je=1<<s|n<<l|r,Ze=e}function as(e){e.return!==null&&(zt(e,1),lu(e,1,0))}function us(e){for(;e===Gr;)Gr=Xt[--Yt],Xt[Yt]=null,Xr=Xt[--Yt],Xt[Yt]=null;for(;e===Ot;)Ot=ze[--Ee],ze[Ee]=null,Ze=ze[--Ee],ze[Ee]=null,Je=ze[--Ee],ze[Ee]=null}var Ne=null,ke=null,Q=!1,$e=null;function iu(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,ke=vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:Je,overflow:Ze}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,ke=null,!0):!1;default:return!1}}function Ni(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Si(e){if(Q){var t=ke;if(t){var n=t;if(!yo(e,t)){if(Ni(e))throw Error(N(418));t=vt(n.nextSibling);var r=Ne;t&&yo(e,t)?iu(r,n):(e.flags=e.flags&-4097|2,Q=!1,Ne=e)}}else{if(Ni(e))throw Error(N(418));e.flags=e.flags&-4097|2,Q=!1,Ne=e}}}function wo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function wr(e){if(e!==Ne)return!1;if(!Q)return wo(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yi(e.type,e.memoizedProps)),t&&(t=ke)){if(Ni(e))throw su(),Error(N(418));for(;t;)iu(e,t),t=vt(t.nextSibling)}if(wo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=Ne?vt(e.stateNode.nextSibling):null;return!0}function su(){for(var e=ke;e;)e=vt(e.nextSibling)}function cn(){ke=Ne=null,Q=!1}function cs(e){$e===null?$e=[e]:$e.push(e)}var ef=it.ReactCurrentBatchConfig;function Sn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var l=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=l.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function jr(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jo(e){var t=e._init;return t(e._payload)}function ou(e){function t(c,f){if(e){var m=c.deletions;m===null?(c.deletions=[f],c.flags|=16):m.push(f)}}function n(c,f){if(!e)return null;for(;f!==null;)t(c,f),f=f.sibling;return null}function r(c,f){for(c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function l(c,f){return c=jt(c,f),c.index=0,c.sibling=null,c}function s(c,f,m){return c.index=m,e?(m=c.alternate,m!==null?(m=m.index,m<f?(c.flags|=2,f):m):(c.flags|=2,f)):(c.flags|=1048576,f)}function o(c){return e&&c.alternate===null&&(c.flags|=2),c}function a(c,f,m,v){return f===null||f.tag!==6?(f=Kl(m,c.mode,v),f.return=c,f):(f=l(f,m),f.return=c,f)}function u(c,f,m,v){var S=m.type;return S===Vt?h(c,f,m.props.children,v,m.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===at&&jo(S)===f.type)?(v=l(f,m.props),v.ref=Sn(c,f,m),v.return=c,v):(v=Rr(m.type,m.key,m.props,null,c.mode,v),v.ref=Sn(c,f,m),v.return=c,v)}function d(c,f,m,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Gl(m,c.mode,v),f.return=c,f):(f=l(f,m.children||[]),f.return=c,f)}function h(c,f,m,v,S){return f===null||f.tag!==7?(f=Mt(m,c.mode,v,S),f.return=c,f):(f=l(f,m),f.return=c,f)}function g(c,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Kl(""+f,c.mode,m),f.return=c,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case cr:return m=Rr(f.type,f.key,f.props,null,c.mode,m),m.ref=Sn(c,null,f),m.return=c,m;case Ut:return f=Gl(f,c.mode,m),f.return=c,f;case at:var v=f._init;return g(c,v(f._payload),m)}if(zn(f)||yn(f))return f=Mt(f,c.mode,m,null),f.return=c,f;jr(c,f)}return null}function p(c,f,m,v){var S=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:a(c,f,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case cr:return m.key===S?u(c,f,m,v):null;case Ut:return m.key===S?d(c,f,m,v):null;case at:return S=m._init,p(c,f,S(m._payload),v)}if(zn(m)||yn(m))return S!==null?null:h(c,f,m,v,null);jr(c,m)}return null}function y(c,f,m,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return c=c.get(m)||null,a(f,c,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case cr:return c=c.get(v.key===null?m:v.key)||null,u(f,c,v,S);case Ut:return c=c.get(v.key===null?m:v.key)||null,d(f,c,v,S);case at:var w=v._init;return y(c,f,m,w(v._payload),S)}if(zn(v)||yn(v))return c=c.get(m)||null,h(f,c,v,S,null);jr(f,v)}return null}function x(c,f,m,v){for(var S=null,w=null,b=f,k=f=0,C=null;b!==null&&k<m.length;k++){b.index>k?(C=b,b=null):C=b.sibling;var z=p(c,b,m[k],v);if(z===null){b===null&&(b=C);break}e&&b&&z.alternate===null&&t(c,b),f=s(z,f,k),w===null?S=z:w.sibling=z,w=z,b=C}if(k===m.length)return n(c,b),Q&&zt(c,k),S;if(b===null){for(;k<m.length;k++)b=g(c,m[k],v),b!==null&&(f=s(b,f,k),w===null?S=b:w.sibling=b,w=b);return Q&&zt(c,k),S}for(b=r(c,b);k<m.length;k++)C=y(b,c,k,m[k],v),C!==null&&(e&&C.alternate!==null&&b.delete(C.key===null?k:C.key),f=s(C,f,k),w===null?S=C:w.sibling=C,w=C);return e&&b.forEach(function(L){return t(c,L)}),Q&&zt(c,k),S}function j(c,f,m,v){var S=yn(m);if(typeof S!="function")throw Error(N(150));if(m=S.call(m),m==null)throw Error(N(151));for(var w=S=null,b=f,k=f=0,C=null,z=m.next();b!==null&&!z.done;k++,z=m.next()){b.index>k?(C=b,b=null):C=b.sibling;var L=p(c,b,z.value,v);if(L===null){b===null&&(b=C);break}e&&b&&L.alternate===null&&t(c,b),f=s(L,f,k),w===null?S=L:w.sibling=L,w=L,b=C}if(z.done)return n(c,b),Q&&zt(c,k),S;if(b===null){for(;!z.done;k++,z=m.next())z=g(c,z.value,v),z!==null&&(f=s(z,f,k),w===null?S=z:w.sibling=z,w=z);return Q&&zt(c,k),S}for(b=r(c,b);!z.done;k++,z=m.next())z=y(b,c,k,z.value,v),z!==null&&(e&&z.alternate!==null&&b.delete(z.key===null?k:z.key),f=s(z,f,k),w===null?S=z:w.sibling=z,w=z);return e&&b.forEach(function(V){return t(c,V)}),Q&&zt(c,k),S}function P(c,f,m,v){if(typeof m=="object"&&m!==null&&m.type===Vt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case cr:e:{for(var S=m.key,w=f;w!==null;){if(w.key===S){if(S=m.type,S===Vt){if(w.tag===7){n(c,w.sibling),f=l(w,m.props.children),f.return=c,c=f;break e}}else if(w.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===at&&jo(S)===w.type){n(c,w.sibling),f=l(w,m.props),f.ref=Sn(c,w,m),f.return=c,c=f;break e}n(c,w);break}else t(c,w);w=w.sibling}m.type===Vt?(f=Mt(m.props.children,c.mode,v,m.key),f.return=c,c=f):(v=Rr(m.type,m.key,m.props,null,c.mode,v),v.ref=Sn(c,f,m),v.return=c,c=v)}return o(c);case Ut:e:{for(w=m.key;f!==null;){if(f.key===w)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(c,f.sibling),f=l(f,m.children||[]),f.return=c,c=f;break e}else{n(c,f);break}else t(c,f);f=f.sibling}f=Gl(m,c.mode,v),f.return=c,c=f}return o(c);case at:return w=m._init,P(c,f,w(m._payload),v)}if(zn(m))return x(c,f,m,v);if(yn(m))return j(c,f,m,v);jr(c,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(c,f.sibling),f=l(f,m),f.return=c,c=f):(n(c,f),f=Kl(m,c.mode,v),f.return=c,c=f),o(c)):n(c,f)}return P}var dn=ou(!0),au=ou(!1),Yr=bt(null),Jr=null,Jt=null,ds=null;function fs(){ds=Jt=Jr=null}function ms(e){var t=Yr.current;U(Yr),e._currentValue=t}function bi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){Jr=e,ds=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(ds!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(Jr===null)throw Error(N(308));Jt=e,Jr.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var Lt=null;function ps(e){Lt===null?Lt=[e]:Lt.push(e)}function uu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,ps(t)):(n.next=l.next,l.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ut=!1;function hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,rt(e,n)}return l=r.interleaved,l===null?(t.next=t,ps(r)):(t.next=l.next,l.next=t),r.interleaved=t,rt(e,n)}function Lr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,es(e,n)}}function ko(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?l=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?l=s=t:s=s.next=t}else l=s=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zr(e,t,n,r){var l=e.updateQueue;ut=!1;var s=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=u))}if(s!==null){var g=l.baseState;o=0,h=d=u=null,a=s;do{var p=a.lane,y=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,j=a;switch(p=t,y=n,j.tag){case 1:if(x=j.payload,typeof x=="function"){g=x.call(y,g,p);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=j.payload,p=typeof x=="function"?x.call(y,g,p):x,p==null)break e;g=G({},g,p);break e;case 2:ut=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=y,u=g):h=h.next=y,o|=p;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;p=a,a=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(h===null&&(u=g),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else s===null&&(l.shared.lanes=0);At|=o,e.lanes=o,e.memoizedState=g}}function No(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(N(191,l));l.call(r)}}}var or={},Ge=bt(or),Yn=bt(or),Jn=bt(or);function Pt(e){if(e===or)throw Error(N(174));return e}function gs(e,t){switch(H(Jn,t),H(Yn,e),H(Ge,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ii(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ii(t,e)}U(Ge),H(Ge,t)}function fn(){U(Ge),U(Yn),U(Jn)}function du(e){Pt(Jn.current);var t=Pt(Ge.current),n=ii(t,e.type);t!==n&&(H(Yn,e),H(Ge,n))}function vs(e){Yn.current===e&&(U(Ge),U(Yn))}var q=bt(0);function el(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bl=[];function xs(){for(var e=0;e<Bl.length;e++)Bl[e]._workInProgressVersionPrimary=null;Bl.length=0}var Pr=it.ReactCurrentDispatcher,Ul=it.ReactCurrentBatchConfig,Rt=0,K=null,ee=null,re=null,tl=!1,On=!1,Zn=0,tf=0;function ae(){throw Error(N(321))}function ys(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function ws(e,t,n,r,l,s){if(Rt=s,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pr.current=e===null||e.memoizedState===null?sf:of,e=n(r,l),On){s=0;do{if(On=!1,Zn=0,25<=s)throw Error(N(301));s+=1,re=ee=null,t.updateQueue=null,Pr.current=af,e=n(r,l)}while(On)}if(Pr.current=nl,t=ee!==null&&ee.next!==null,Rt=0,re=ee=K=null,tl=!1,t)throw Error(N(300));return e}function js(){var e=Zn!==0;return Zn=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?K.memoizedState=re=e:re=re.next=e,re}function Ie(){if(ee===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=re===null?K.memoizedState:re.next;if(t!==null)re=t,ee=e;else{if(e===null)throw Error(N(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?K.memoizedState=re=e:re=re.next=e}return re}function er(e,t){return typeof t=="function"?t(e):t}function Vl(e){var t=Ie(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=ee,l=r.baseQueue,s=n.pending;if(s!==null){if(l!==null){var o=l.next;l.next=s.next,s.next=o}r.baseQueue=l=s,n.pending=null}if(l!==null){s=l.next,r=r.baseState;var a=o=null,u=null,d=s;do{var h=d.lane;if((Rt&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=g,o=r):u=u.next=g,K.lanes|=h,At|=h}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=a,Be(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do s=l.lane,K.lanes|=s,At|=s,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ql(e){var t=Ie(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,s=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do s=e(s,o.action),o=o.next;while(o!==l);Be(s,t.memoizedState)||(ve=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function fu(){}function mu(e,t){var n=K,r=Ie(),l=t(),s=!Be(r.memoizedState,l);if(s&&(r.memoizedState=l,ve=!0),r=r.queue,ks(gu.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,tr(9,hu.bind(null,n,r,l,t),void 0,null),le===null)throw Error(N(349));Rt&30||pu(n,t,l)}return l}function pu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hu(e,t,n,r){t.value=n,t.getSnapshot=r,vu(t)&&xu(e)}function gu(e,t,n){return n(function(){vu(t)&&xu(e)})}function vu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function xu(e){var t=rt(e,1);t!==null&&He(t,e,1,-1)}function So(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},t.queue=e,e=e.dispatch=lf.bind(null,K,e),[t.memoizedState,e]}function tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yu(){return Ie().memoizedState}function Ir(e,t,n,r){var l=We();K.flags|=e,l.memoizedState=tr(1|t,n,void 0,r===void 0?null:r)}function hl(e,t,n,r){var l=Ie();r=r===void 0?null:r;var s=void 0;if(ee!==null){var o=ee.memoizedState;if(s=o.destroy,r!==null&&ys(r,o.deps)){l.memoizedState=tr(t,n,s,r);return}}K.flags|=e,l.memoizedState=tr(1|t,n,s,r)}function bo(e,t){return Ir(8390656,8,e,t)}function ks(e,t){return hl(2048,8,e,t)}function wu(e,t){return hl(4,2,e,t)}function ju(e,t){return hl(4,4,e,t)}function ku(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nu(e,t,n){return n=n!=null?n.concat([e]):null,hl(4,4,ku.bind(null,t,e),n)}function Ns(){}function Su(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ys(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bu(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ys(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cu(e,t,n){return Rt&21?(Be(n,t)||(n=La(),K.lanes|=n,At|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function nf(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{A=n,Ul.transition=r}}function _u(){return Ie().memoizedState}function rf(e,t,n){var r=wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zu(e))Eu(t,n);else if(n=uu(e,t,n,r),n!==null){var l=me();He(n,e,r,l),Tu(n,t,r)}}function lf(e,t,n){var r=wt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zu(e))Eu(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(l.hasEagerState=!0,l.eagerState=a,Be(a,o)){var u=t.interleaved;u===null?(l.next=l,ps(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=uu(e,t,l,r),n!==null&&(l=me(),He(n,e,r,l),Tu(n,t,r))}}function zu(e){var t=e.alternate;return e===K||t!==null&&t===K}function Eu(e,t){On=tl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,es(e,n)}}var nl={readContext:Pe,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},sf={readContext:Pe,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:bo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ir(4194308,4,ku.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ir(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ir(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rf.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:So,useDebugValue:Ns,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=So(!1),t=e[0];return e=nf.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,l=We();if(Q){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),le===null)throw Error(N(349));Rt&30||pu(r,t,n)}l.memoizedState=n;var s={value:n,getSnapshot:t};return l.queue=s,bo(gu.bind(null,r,s,e),[e]),r.flags|=2048,tr(9,hu.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=We(),t=le.identifierPrefix;if(Q){var n=Ze,r=Je;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},of={readContext:Pe,useCallback:Su,useContext:Pe,useEffect:ks,useImperativeHandle:Nu,useInsertionEffect:wu,useLayoutEffect:ju,useMemo:bu,useReducer:Vl,useRef:yu,useState:function(){return Vl(er)},useDebugValue:Ns,useDeferredValue:function(e){var t=Ie();return Cu(t,ee.memoizedState,e)},useTransition:function(){var e=Vl(er)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:fu,useSyncExternalStore:mu,useId:_u,unstable_isNewReconciler:!1},af={readContext:Pe,useCallback:Su,useContext:Pe,useEffect:ks,useImperativeHandle:Nu,useInsertionEffect:wu,useLayoutEffect:ju,useMemo:bu,useReducer:Ql,useRef:yu,useState:function(){return Ql(er)},useDebugValue:Ns,useDeferredValue:function(e){var t=Ie();return ee===null?t.memoizedState=e:Cu(t,ee.memoizedState,e)},useTransition:function(){var e=Ql(er)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:fu,useSyncExternalStore:mu,useId:_u,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ci(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gl={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),l=wt(e),s=et(r,l);s.payload=t,n!=null&&(s.callback=n),t=xt(e,s,l),t!==null&&(He(t,e,l,r),Lr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),l=wt(e),s=et(r,l);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=xt(e,s,l),t!==null&&(He(t,e,l,r),Lr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=wt(e),l=et(n,r);l.tag=2,t!=null&&(l.callback=t),t=xt(e,l,r),t!==null&&(He(t,e,r,n),Lr(t,e,r))}};function Co(e,t,n,r,l,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!qn(n,r)||!qn(l,s):!0}function Lu(e,t,n){var r=!1,l=Nt,s=t.contextType;return typeof s=="object"&&s!==null?s=Pe(s):(l=ye(t)?Dt:de.current,r=t.contextTypes,s=(r=r!=null)?un(e,l):Nt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=s),t}function _o(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gl.enqueueReplaceState(t,t.state,null)}function _i(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},hs(e);var s=t.contextType;typeof s=="object"&&s!==null?l.context=Pe(s):(s=ye(t)?Dt:de.current,l.context=un(e,s)),l.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ci(e,t,s,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&gl.enqueueReplaceState(l,l.state,null),Zr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function mn(e,t){try{var n="",r=t;do n+=Dc(r),r=r.return;while(r);var l=n}catch(s){l=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:l,digest:null}}function Wl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var uf=typeof WeakMap=="function"?WeakMap:Map;function Pu(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ll||(ll=!0,Ai=r),zi(e,t)},n}function Iu(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){zi(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zi(e,t),typeof r!="function"&&(yt===null?yt=new Set([this]):yt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function zo(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new uf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Nf.bind(null,e,t,n),t.then(e,e))}function Eo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function To(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,xt(n,t,1))),n.lanes|=1),e)}var cf=it.ReactCurrentOwner,ve=!1;function fe(e,t,n,r){t.child=e===null?au(t,null,n,r):dn(t,e.child,n,r)}function Lo(e,t,n,r,l){n=n.render;var s=t.ref;return sn(t,l),r=ws(e,t,n,r,s,l),n=js(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,lt(e,t,l)):(Q&&n&&as(t),t.flags|=1,fe(e,t,r,l),t.child)}function Po(e,t,n,r,l){if(e===null){var s=n.type;return typeof s=="function"&&!Ls(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Mu(e,t,s,r,l)):(e=Rr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&l)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qn,n(o,r)&&e.ref===t.ref)return lt(e,t,l)}return t.flags|=1,e=jt(s,r),e.ref=t.ref,e.return=t,t.child=e}function Mu(e,t,n,r,l){if(e!==null){var s=e.memoizedProps;if(qn(s,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=s,(e.lanes&l)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,lt(e,t,l)}return Ei(e,t,n,r,l)}function Du(e,t,n){var r=t.pendingProps,l=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(en,je),je|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(en,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,H(en,je),je|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,H(en,je),je|=r;return fe(e,t,l,n),t.child}function Ou(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ei(e,t,n,r,l){var s=ye(n)?Dt:de.current;return s=un(t,s),sn(t,l),n=ws(e,t,n,r,s,l),r=js(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,lt(e,t,l)):(Q&&r&&as(t),t.flags|=1,fe(e,t,n,l),t.child)}function Io(e,t,n,r,l){if(ye(n)){var s=!0;Kr(t)}else s=!1;if(sn(t,l),t.stateNode===null)Mr(e,t),Lu(t,n,r),_i(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Pe(d):(d=ye(n)?Dt:de.current,d=un(t,d));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==d)&&_o(t,o,r,d),ut=!1;var p=t.memoizedState;o.state=p,Zr(t,r,o,l),u=t.memoizedState,a!==r||p!==u||xe.current||ut?(typeof h=="function"&&(Ci(t,n,h,r),u=t.memoizedState),(a=ut||Co(t,n,a,r,p,u,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,cu(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Re(t.type,a),o.props=d,g=t.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Pe(u):(u=ye(n)?Dt:de.current,u=un(t,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==g||p!==u)&&_o(t,o,r,u),ut=!1,p=t.memoizedState,o.state=p,Zr(t,r,o,l);var x=t.memoizedState;a!==g||p!==x||xe.current||ut?(typeof y=="function"&&(Ci(t,n,y,r),x=t.memoizedState),(d=ut||Co(t,n,d,r,p,x,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ti(e,t,n,r,s,l)}function Ti(e,t,n,r,l,s){Ou(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&xo(t,n,!1),lt(e,t,s);r=t.stateNode,cf.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=dn(t,e.child,null,s),t.child=dn(t,null,a,s)):fe(e,t,a,s),t.memoizedState=r.state,l&&xo(t,n,!0),t.child}function Ru(e){var t=e.stateNode;t.pendingContext?vo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vo(e,t.context,!1),gs(e,t.containerInfo)}function Mo(e,t,n,r,l){return cn(),cs(l),t.flags|=256,fe(e,t,n,r),t.child}var Li={dehydrated:null,treeContext:null,retryLane:0};function Pi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Au(e,t,n){var r=t.pendingProps,l=q.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),H(q,l&1),e===null)return Si(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yl(o,r,0,null),e=Mt(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Pi(n),t.memoizedState=Li,e):Ss(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return df(e,t,o,r,a,l,n);if(s){s=r.fallback,o=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=jt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?s=jt(a,s):(s=Mt(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Pi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Li,r}return s=e.child,e=s.sibling,r=jt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ss(e,t){return t=yl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function kr(e,t,n,r){return r!==null&&cs(r),dn(t,e.child,null,n),e=Ss(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function df(e,t,n,r,l,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Wl(Error(N(422))),kr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,l=t.mode,r=yl({mode:"visible",children:r.children},l,0,null),s=Mt(s,l,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&dn(t,e.child,null,o),t.child.memoizedState=Pi(o),t.memoizedState=Li,s);if(!(t.mode&1))return kr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(N(419)),r=Wl(s,r,void 0),kr(e,t,o,r)}if(a=(o&e.childLanes)!==0,ve||a){if(r=le,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==s.retryLane&&(s.retryLane=l,rt(e,l),He(r,e,l,-1))}return Ts(),r=Wl(Error(N(421))),kr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Sf.bind(null,e),l._reactRetry=t,null):(e=s.treeContext,ke=vt(l.nextSibling),Ne=t,Q=!0,$e=null,e!==null&&(ze[Ee++]=Je,ze[Ee++]=Ze,ze[Ee++]=Ot,Je=e.id,Ze=e.overflow,Ot=t),t=Ss(t,r.children),t.flags|=4096,t)}function Do(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bi(e.return,t,n)}function ql(e,t,n,r,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=l)}function $u(e,t,n){var r=t.pendingProps,l=r.revealOrder,s=r.tail;if(fe(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Do(e,n,t);else if(e.tag===19)Do(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(q,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&el(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ql(t,!1,l,n,s);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&el(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ql(t,!0,n,null,s);break;case"together":ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),At|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ff(e,t,n){switch(t.tag){case 3:Ru(t),cn();break;case 5:du(t);break;case 1:ye(t.type)&&Kr(t);break;case 4:gs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;H(Yr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?Au(e,t,n):(H(q,q.current&1),e=lt(e,t,n),e!==null?e.sibling:null);H(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $u(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),H(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Du(e,t,n)}return lt(e,t,n)}var Fu,Ii,Hu,Bu;Fu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ii=function(){};Hu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Pt(Ge.current);var s=null;switch(n){case"input":l=ti(e,l),r=ti(e,r),s=[];break;case"select":l=G({},l,{value:void 0}),r=G({},r,{value:void 0}),s=[];break;case"textarea":l=li(e,l),r=li(e,r),s=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}si(n,r);var o;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var a=l[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Fn.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(a=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Fn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&B("scroll",e),s||a===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};Bu=function(e,t,n,r){n!==r&&(t.flags|=4)};function bn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function mf(e,t,n){var r=t.pendingProps;switch(us(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return ye(t.type)&&qr(),ue(t),null;case 3:return r=t.stateNode,fn(),U(xe),U(de),xs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(Hi($e),$e=null))),Ii(e,t),ue(t),null;case 5:vs(t);var l=Pt(Jn.current);if(n=t.type,e!==null&&t.stateNode!=null)Hu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return ue(t),null}if(e=Pt(Ge.current),wr(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[qe]=t,r[Xn]=s,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(l=0;l<Tn.length;l++)B(Tn[l],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Us(r,s),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},B("invalid",r);break;case"textarea":Qs(r,s),B("invalid",r)}si(n,s),l=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&yr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&yr(r.textContent,a,e),l=["children",""+a]):Fn.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":dr(r),Vs(r,s,!0);break;case"textarea":dr(r),Ws(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Wr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ga(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[qe]=t,e[Xn]=r,Fu(e,t,!1,!1),t.stateNode=e;e:{switch(o=oi(n,r),n){case"dialog":B("cancel",e),B("close",e),l=r;break;case"iframe":case"object":case"embed":B("load",e),l=r;break;case"video":case"audio":for(l=0;l<Tn.length;l++)B(Tn[l],e);l=r;break;case"source":B("error",e),l=r;break;case"img":case"image":case"link":B("error",e),B("load",e),l=r;break;case"details":B("toggle",e),l=r;break;case"input":Us(e,r),l=ti(e,r),B("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=G({},r,{value:void 0}),B("invalid",e);break;case"textarea":Qs(e,r),l=li(e,r),B("invalid",e);break;default:l=r}si(n,l),a=l;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?ya(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&va(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Hn(e,u):typeof u=="number"&&Hn(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fn.hasOwnProperty(s)?u!=null&&s==="onScroll"&&B("scroll",e):u!=null&&Ki(e,s,u,o))}switch(n){case"input":dr(e),Vs(e,r,!1);break;case"textarea":dr(e),Ws(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?tn(e,!!r.multiple,s,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Wr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)Bu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Pt(Jn.current),Pt(Ge.current),wr(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(s=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:yr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yr(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return ue(t),null;case 13:if(U(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&ke!==null&&t.mode&1&&!(t.flags&128))su(),cn(),t.flags|=98560,s=!1;else if(s=wr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(N(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[qe]=t}else cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),s=!1}else $e!==null&&(Hi($e),$e=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?te===0&&(te=3):Ts())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return fn(),Ii(e,t),e===null&&Kn(t.stateNode.containerInfo),ue(t),null;case 10:return ms(t.type._context),ue(t),null;case 17:return ye(t.type)&&qr(),ue(t),null;case 19:if(U(q),s=t.memoizedState,s===null)return ue(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)bn(s,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=el(e),o!==null){for(t.flags|=128,bn(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(q,q.current&1|2),t.child}e=e.sibling}s.tail!==null&&Y()>pn&&(t.flags|=128,r=!0,bn(s,!1),t.lanes=4194304)}else{if(!r)if(e=el(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Q)return ue(t),null}else 2*Y()-s.renderingStartTime>pn&&n!==1073741824&&(t.flags|=128,r=!0,bn(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Y(),t.sibling=null,n=q.current,H(q,r?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return Es(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function pf(e,t){switch(us(t),t.tag){case 1:return ye(t.type)&&qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(),U(xe),U(de),xs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vs(t),null;case 13:if(U(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(q),null;case 4:return fn(),null;case 10:return ms(t.type._context),null;case 22:case 23:return Es(),null;case 24:return null;default:return null}}var Nr=!1,ce=!1,hf=typeof WeakSet=="function"?WeakSet:Set,E=null;function Zt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Mi(e,t,n){try{n()}catch(r){X(e,t,r)}}var Oo=!1;function gf(e,t){if(vi=Ur,e=qa(),os(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,d=0,h=0,g=e,p=null;t:for(;;){for(var y;g!==n||l!==0&&g.nodeType!==3||(a=o+l),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(y=g.firstChild)!==null;)p=g,g=y;for(;;){if(g===e)break t;if(p===n&&++d===l&&(a=o),p===s&&++h===r&&(u=o),(y=g.nextSibling)!==null)break;g=p,p=g.parentNode}g=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xi={focusedElem:e,selectionRange:n},Ur=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var j=x.memoizedProps,P=x.memoizedState,c=t.stateNode,f=c.getSnapshotBeforeUpdate(t.elementType===t.type?j:Re(t.type,j),P);c.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(v){X(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return x=Oo,Oo=!1,x}function Rn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var s=l.destroy;l.destroy=void 0,s!==void 0&&Mi(t,n,s)}l=l.next}while(l!==r)}}function vl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Di(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Uu(e){var t=e.alternate;t!==null&&(e.alternate=null,Uu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[Xn],delete t[ji],delete t[Yd],delete t[Jd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vu(e){return e.tag===5||e.tag===3||e.tag===4}function Ro(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(Oi(e,t,n),e=e.sibling;e!==null;)Oi(e,t,n),e=e.sibling}function Ri(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ri(e,t,n),e=e.sibling;e!==null;)Ri(e,t,n),e=e.sibling}var ie=null,Ae=!1;function ot(e,t,n){for(n=n.child;n!==null;)Qu(e,t,n),n=n.sibling}function Qu(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(ul,n)}catch{}switch(n.tag){case 5:ce||Zt(n,t);case 6:var r=ie,l=Ae;ie=null,ot(e,t,n),ie=r,Ae=l,ie!==null&&(Ae?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(Ae?(e=ie,n=n.stateNode,e.nodeType===8?Fl(e.parentNode,n):e.nodeType===1&&Fl(e,n),Qn(e)):Fl(ie,n.stateNode));break;case 4:r=ie,l=Ae,ie=n.stateNode.containerInfo,Ae=!0,ot(e,t,n),ie=r,Ae=l;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var s=l,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Mi(n,t,o),l=l.next}while(l!==r)}ot(e,t,n);break;case 1:if(!ce&&(Zt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}ot(e,t,n);break;case 21:ot(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,ot(e,t,n),ce=r):ot(e,t,n);break;default:ot(e,t,n)}}function Ao(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hf),t.forEach(function(r){var l=bf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Oe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ie=a.stateNode,Ae=!1;break e;case 3:ie=a.stateNode.containerInfo,Ae=!0;break e;case 4:ie=a.stateNode.containerInfo,Ae=!0;break e}a=a.return}if(ie===null)throw Error(N(160));Qu(s,o,l),ie=null,Ae=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){X(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wu(t,e),t=t.sibling}function Wu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),Qe(e),r&4){try{Rn(3,e,e.return),vl(3,e)}catch(j){X(e,e.return,j)}try{Rn(5,e,e.return)}catch(j){X(e,e.return,j)}}break;case 1:Oe(t,e),Qe(e),r&512&&n!==null&&Zt(n,n.return);break;case 5:if(Oe(t,e),Qe(e),r&512&&n!==null&&Zt(n,n.return),e.flags&32){var l=e.stateNode;try{Hn(l,"")}catch(j){X(e,e.return,j)}}if(r&4&&(l=e.stateNode,l!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&pa(l,s),oi(a,o);var d=oi(a,s);for(o=0;o<u.length;o+=2){var h=u[o],g=u[o+1];h==="style"?ya(l,g):h==="dangerouslySetInnerHTML"?va(l,g):h==="children"?Hn(l,g):Ki(l,h,g,d)}switch(a){case"input":ni(l,s);break;case"textarea":ha(l,s);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?tn(l,!!s.multiple,y,!1):p!==!!s.multiple&&(s.defaultValue!=null?tn(l,!!s.multiple,s.defaultValue,!0):tn(l,!!s.multiple,s.multiple?[]:"",!1))}l[Xn]=s}catch(j){X(e,e.return,j)}}break;case 6:if(Oe(t,e),Qe(e),r&4){if(e.stateNode===null)throw Error(N(162));l=e.stateNode,s=e.memoizedProps;try{l.nodeValue=s}catch(j){X(e,e.return,j)}}break;case 3:if(Oe(t,e),Qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(j){X(e,e.return,j)}break;case 4:Oe(t,e),Qe(e);break;case 13:Oe(t,e),Qe(e),l=e.child,l.flags&8192&&(s=l.memoizedState!==null,l.stateNode.isHidden=s,!s||l.alternate!==null&&l.alternate.memoizedState!==null||(_s=Y())),r&4&&Ao(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(d=ce)||h,Oe(t,e),ce=d):Oe(t,e),Qe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(E=e,h=e.child;h!==null;){for(g=E=h;E!==null;){switch(p=E,y=p.child,p.tag){case 0:case 11:case 14:case 15:Rn(4,p,p.return);break;case 1:Zt(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(j){X(r,n,j)}}break;case 5:Zt(p,p.return);break;case 22:if(p.memoizedState!==null){Fo(g);continue}}y!==null?(y.return=p,E=y):Fo(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{l=g.stateNode,d?(s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=xa("display",o))}catch(j){X(e,e.return,j)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(j){X(e,e.return,j)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Oe(t,e),Qe(e),r&4&&Ao(e);break;case 21:break;default:Oe(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vu(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Hn(l,""),r.flags&=-33);var s=Ro(e);Ri(e,s,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ro(e);Oi(e,a,o);break;default:throw Error(N(161))}}catch(u){X(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vf(e,t,n){E=e,qu(e)}function qu(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var l=E,s=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Nr;if(!o){var a=l.alternate,u=a!==null&&a.memoizedState!==null||ce;a=Nr;var d=ce;if(Nr=o,(ce=u)&&!d)for(E=l;E!==null;)o=E,u=o.child,o.tag===22&&o.memoizedState!==null?Ho(l):u!==null?(u.return=o,E=u):Ho(l);for(;s!==null;)E=s,qu(s),s=s.sibling;E=l,Nr=a,ce=d}$o(e)}else l.subtreeFlags&8772&&s!==null?(s.return=l,E=s):$o(e)}}function $o(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||vl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&No(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}No(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Qn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ce||t.flags&512&&Di(t)}catch(p){X(t,t.return,p)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Fo(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Ho(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vl(4,t)}catch(u){X(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){X(t,l,u)}}var s=t.return;try{Di(t)}catch(u){X(t,s,u)}break;case 5:var o=t.return;try{Di(t)}catch(u){X(t,o,u)}}}catch(u){X(t,t.return,u)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var xf=Math.ceil,rl=it.ReactCurrentDispatcher,bs=it.ReactCurrentOwner,Le=it.ReactCurrentBatchConfig,R=0,le=null,Z=null,se=0,je=0,en=bt(0),te=0,nr=null,At=0,xl=0,Cs=0,An=null,ge=null,_s=0,pn=1/0,Xe=null,ll=!1,Ai=null,yt=null,Sr=!1,mt=null,il=0,$n=0,$i=null,Dr=-1,Or=0;function me(){return R&6?Y():Dr!==-1?Dr:Dr=Y()}function wt(e){return e.mode&1?R&2&&se!==0?se&-se:ef.transition!==null?(Or===0&&(Or=La()),Or):(e=A,e!==0||(e=window.event,e=e===void 0?16:Aa(e.type)),e):1}function He(e,t,n,r){if(50<$n)throw $n=0,$i=null,Error(N(185));lr(e,n,r),(!(R&2)||e!==le)&&(e===le&&(!(R&2)&&(xl|=n),te===4&&dt(e,se)),we(e,r),n===1&&R===0&&!(t.mode&1)&&(pn=Y()+500,pl&&Ct()))}function we(e,t){var n=e.callbackNode;ed(e,t);var r=Br(e,e===le?se:0);if(r===0)n!==null&&Gs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Gs(n),t===1)e.tag===0?Zd(Bo.bind(null,e)):ru(Bo.bind(null,e)),Gd(function(){!(R&6)&&Ct()}),n=null;else{switch(Pa(r)){case 1:n=Zi;break;case 4:n=Ea;break;case 16:n=Hr;break;case 536870912:n=Ta;break;default:n=Hr}n=tc(n,Ku.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ku(e,t){if(Dr=-1,Or=0,R&6)throw Error(N(327));var n=e.callbackNode;if(on()&&e.callbackNode!==n)return null;var r=Br(e,e===le?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=sl(e,r);else{t=r;var l=R;R|=2;var s=Xu();(le!==e||se!==t)&&(Xe=null,pn=Y()+500,It(e,t));do try{jf();break}catch(a){Gu(e,a)}while(!0);fs(),rl.current=s,R=l,Z!==null?t=0:(le=null,se=0,t=te)}if(t!==0){if(t===2&&(l=fi(e),l!==0&&(r=l,t=Fi(e,l))),t===1)throw n=nr,It(e,0),dt(e,r),we(e,Y()),n;if(t===6)dt(e,r);else{if(l=e.current.alternate,!(r&30)&&!yf(l)&&(t=sl(e,r),t===2&&(s=fi(e),s!==0&&(r=s,t=Fi(e,s))),t===1))throw n=nr,It(e,0),dt(e,r),we(e,Y()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Et(e,ge,Xe);break;case 3:if(dt(e,r),(r&130023424)===r&&(t=_s+500-Y(),10<t)){if(Br(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=wi(Et.bind(null,e,ge,Xe),t);break}Et(e,ge,Xe);break;case 4:if(dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Fe(r);s=1<<o,o=t[o],o>l&&(l=o),r&=~s}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xf(r/1960))-r,10<r){e.timeoutHandle=wi(Et.bind(null,e,ge,Xe),r);break}Et(e,ge,Xe);break;case 5:Et(e,ge,Xe);break;default:throw Error(N(329))}}}return we(e,Y()),e.callbackNode===n?Ku.bind(null,e):null}function Fi(e,t){var n=An;return e.current.memoizedState.isDehydrated&&(It(e,t).flags|=256),e=sl(e,t),e!==2&&(t=ge,ge=n,t!==null&&Hi(t)),e}function Hi(e){ge===null?ge=e:ge.push.apply(ge,e)}function yf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],s=l.getSnapshot;l=l.value;try{if(!Be(s(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dt(e,t){for(t&=~Cs,t&=~xl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function Bo(e){if(R&6)throw Error(N(327));on();var t=Br(e,0);if(!(t&1))return we(e,Y()),null;var n=sl(e,t);if(e.tag!==0&&n===2){var r=fi(e);r!==0&&(t=r,n=Fi(e,r))}if(n===1)throw n=nr,It(e,0),dt(e,t),we(e,Y()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Et(e,ge,Xe),we(e,Y()),null}function zs(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(pn=Y()+500,pl&&Ct())}}function $t(e){mt!==null&&mt.tag===0&&!(R&6)&&on();var t=R;R|=1;var n=Le.transition,r=A;try{if(Le.transition=null,A=1,e)return e()}finally{A=r,Le.transition=n,R=t,!(R&6)&&Ct()}}function Es(){je=en.current,U(en)}function It(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kd(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(us(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qr();break;case 3:fn(),U(xe),U(de),xs();break;case 5:vs(r);break;case 4:fn();break;case 13:U(q);break;case 19:U(q);break;case 10:ms(r.type._context);break;case 22:case 23:Es()}n=n.return}if(le=e,Z=e=jt(e.current,null),se=je=t,te=0,nr=null,Cs=xl=At=0,ge=An=null,Lt!==null){for(t=0;t<Lt.length;t++)if(n=Lt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=l,r.next=o}n.pending=r}Lt=null}return e}function Gu(e,t){do{var n=Z;try{if(fs(),Pr.current=nl,tl){for(var r=K.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}tl=!1}if(Rt=0,re=ee=K=null,On=!1,Zn=0,bs.current=null,n===null||n.return===null){te=1,nr=t,Z=null;break}e:{var s=e,o=n.return,a=n,u=t;if(t=se,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=a,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Eo(o);if(y!==null){y.flags&=-257,To(y,o,a,s,t),y.mode&1&&zo(s,d,t),t=y,u=d;var x=t.updateQueue;if(x===null){var j=new Set;j.add(u),t.updateQueue=j}else x.add(u);break e}else{if(!(t&1)){zo(s,d,t),Ts();break e}u=Error(N(426))}}else if(Q&&a.mode&1){var P=Eo(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),To(P,o,a,s,t),cs(mn(u,a));break e}}s=u=mn(u,a),te!==4&&(te=2),An===null?An=[s]:An.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var c=Pu(s,u,t);ko(s,c);break e;case 1:a=u;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(yt===null||!yt.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var v=Iu(s,a,t);ko(s,v);break e}}s=s.return}while(s!==null)}Ju(n)}catch(S){t=S,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function Xu(){var e=rl.current;return rl.current=nl,e===null?nl:e}function Ts(){(te===0||te===3||te===2)&&(te=4),le===null||!(At&268435455)&&!(xl&268435455)||dt(le,se)}function sl(e,t){var n=R;R|=2;var r=Xu();(le!==e||se!==t)&&(Xe=null,It(e,t));do try{wf();break}catch(l){Gu(e,l)}while(!0);if(fs(),R=n,rl.current=r,Z!==null)throw Error(N(261));return le=null,se=0,te}function wf(){for(;Z!==null;)Yu(Z)}function jf(){for(;Z!==null&&!Qc();)Yu(Z)}function Yu(e){var t=ec(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?Ju(e):Z=t,bs.current=null}function Ju(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=pf(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,Z=null;return}}else if(n=mf(n,t,je),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);te===0&&(te=5)}function Et(e,t,n){var r=A,l=Le.transition;try{Le.transition=null,A=1,kf(e,t,n,r)}finally{Le.transition=l,A=r}return null}function kf(e,t,n,r){do on();while(mt!==null);if(R&6)throw Error(N(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(td(e,s),e===le&&(Z=le=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sr||(Sr=!0,tc(Hr,function(){return on(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Le.transition,Le.transition=null;var o=A;A=1;var a=R;R|=4,bs.current=null,gf(e,n),Wu(n,e),Hd(xi),Ur=!!vi,xi=vi=null,e.current=n,vf(n),Wc(),R=a,A=o,Le.transition=s}else e.current=n;if(Sr&&(Sr=!1,mt=e,il=l),s=e.pendingLanes,s===0&&(yt=null),Gc(n.stateNode),we(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ll)throw ll=!1,e=Ai,Ai=null,e;return il&1&&e.tag!==0&&on(),s=e.pendingLanes,s&1?e===$i?$n++:($n=0,$i=e):$n=0,Ct(),null}function on(){if(mt!==null){var e=Pa(il),t=Le.transition,n=A;try{if(Le.transition=null,A=16>e?16:e,mt===null)var r=!1;else{if(e=mt,mt=null,il=0,R&6)throw Error(N(331));var l=R;for(R|=4,E=e.current;E!==null;){var s=E,o=s.child;if(E.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(E=d;E!==null;){var h=E;switch(h.tag){case 0:case 11:case 15:Rn(8,h,s)}var g=h.child;if(g!==null)g.return=h,E=g;else for(;E!==null;){h=E;var p=h.sibling,y=h.return;if(Uu(h),h===d){E=null;break}if(p!==null){p.return=y,E=p;break}E=y}}}var x=s.alternate;if(x!==null){var j=x.child;if(j!==null){x.child=null;do{var P=j.sibling;j.sibling=null,j=P}while(j!==null)}}E=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,E=o;else e:for(;E!==null;){if(s=E,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Rn(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,E=c;break e}E=s.return}}var f=e.current;for(E=f;E!==null;){o=E;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,E=m;else e:for(o=f;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vl(9,a)}}catch(S){X(a,a.return,S)}if(a===o){E=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,E=v;break e}E=a.return}}if(R=l,Ct(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(ul,e)}catch{}r=!0}return r}finally{A=n,Le.transition=t}}return!1}function Uo(e,t,n){t=mn(n,t),t=Pu(e,t,1),e=xt(e,t,1),t=me(),e!==null&&(lr(e,1,t),we(e,t))}function X(e,t,n){if(e.tag===3)Uo(e,e,n);else for(;t!==null;){if(t.tag===3){Uo(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yt===null||!yt.has(r))){e=mn(n,e),e=Iu(t,e,1),t=xt(t,e,1),e=me(),t!==null&&(lr(t,1,e),we(t,e));break}}t=t.return}}function Nf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(se&n)===n&&(te===4||te===3&&(se&130023424)===se&&500>Y()-_s?It(e,0):Cs|=n),we(e,t)}function Zu(e,t){t===0&&(e.mode&1?(t=pr,pr<<=1,!(pr&130023424)&&(pr=4194304)):t=1);var n=me();e=rt(e,t),e!==null&&(lr(e,t,n),we(e,n))}function Sf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zu(e,n)}function bf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Zu(e,n)}var ec;ec=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,ff(e,t,n);ve=!!(e.flags&131072)}else ve=!1,Q&&t.flags&1048576&&lu(t,Xr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mr(e,t),e=t.pendingProps;var l=un(t,de.current);sn(t,n),l=ws(null,t,r,e,l,n);var s=js();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(s=!0,Kr(t)):s=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,hs(t),l.updater=gl,t.stateNode=l,l._reactInternals=t,_i(t,r,e,n),t=Ti(null,t,r,!0,s,n)):(t.tag=0,Q&&s&&as(t),fe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Mr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=_f(r),e=Re(r,e),l){case 0:t=Ei(null,t,r,e,n);break e;case 1:t=Io(null,t,r,e,n);break e;case 11:t=Lo(null,t,r,e,n);break e;case 14:t=Po(null,t,r,Re(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Ei(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Io(e,t,r,l,n);case 3:e:{if(Ru(t),e===null)throw Error(N(387));r=t.pendingProps,s=t.memoizedState,l=s.element,cu(e,t),Zr(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){l=mn(Error(N(423)),t),t=Mo(e,t,r,n,l);break e}else if(r!==l){l=mn(Error(N(424)),t),t=Mo(e,t,r,n,l);break e}else for(ke=vt(t.stateNode.containerInfo.firstChild),Ne=t,Q=!0,$e=null,n=au(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cn(),r===l){t=lt(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return du(t),e===null&&Si(t),r=t.type,l=t.pendingProps,s=e!==null?e.memoizedProps:null,o=l.children,yi(r,l)?o=null:s!==null&&yi(r,s)&&(t.flags|=32),Ou(e,t),fe(e,t,o,n),t.child;case 6:return e===null&&Si(t),null;case 13:return Au(e,t,n);case 4:return gs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Lo(e,t,r,l,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,s=t.memoizedProps,o=l.value,H(Yr,r._currentValue),r._currentValue=o,s!==null)if(Be(s.value,o)){if(s.children===l.children&&!xe.current){t=lt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=et(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),bi(s.return,n,t),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bi(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}fe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,sn(t,n),l=Pe(l),r=r(l),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,l=Re(r,t.pendingProps),l=Re(r.type,l),Po(e,t,r,l,n);case 15:return Mu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Mr(e,t),t.tag=1,ye(r)?(e=!0,Kr(t)):e=!1,sn(t,n),Lu(t,r,l),_i(t,r,l,n),Ti(null,t,r,!0,e,n);case 19:return $u(e,t,n);case 22:return Du(e,t,n)}throw Error(N(156,t.tag))};function tc(e,t){return za(e,t)}function Cf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new Cf(e,t,n,r)}function Ls(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _f(e){if(typeof e=="function")return Ls(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xi)return 11;if(e===Yi)return 14}return 2}function jt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rr(e,t,n,r,l,s){var o=2;if(r=e,typeof e=="function")Ls(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Vt:return Mt(n.children,l,s,t);case Gi:o=8,l|=8;break;case Yl:return e=Te(12,n,t,l|2),e.elementType=Yl,e.lanes=s,e;case Jl:return e=Te(13,n,t,l),e.elementType=Jl,e.lanes=s,e;case Zl:return e=Te(19,n,t,l),e.elementType=Zl,e.lanes=s,e;case da:return yl(n,l,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ua:o=10;break e;case ca:o=9;break e;case Xi:o=11;break e;case Yi:o=14;break e;case at:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Te(o,n,t,l),t.elementType=e,t.type=r,t.lanes=s,t}function Mt(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function yl(e,t,n,r){return e=Te(22,e,r,t),e.elementType=da,e.lanes=n,e.stateNode={isHidden:!1},e}function Kl(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function Gl(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ps(e,t,n,r,l,s,o,a,u){return e=new zf(e,t,n,a,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Te(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hs(s),e}function Ef(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ut,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nc(e){if(!e)return Nt;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(ye(n))return nu(e,n,t)}return t}function rc(e,t,n,r,l,s,o,a,u){return e=Ps(n,r,!0,e,l,s,o,a,u),e.context=nc(null),n=e.current,r=me(),l=wt(n),s=et(r,l),s.callback=t??null,xt(n,s,l),e.current.lanes=l,lr(e,l,r),we(e,r),e}function wl(e,t,n,r){var l=t.current,s=me(),o=wt(l);return n=nc(n),t.context===null?t.context=n:t.pendingContext=n,t=et(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xt(l,t,o),e!==null&&(He(e,l,o,s),Lr(e,l,o)),o}function ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vo(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Is(e,t){Vo(e,t),(e=e.alternate)&&Vo(e,t)}function Tf(){return null}var lc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ms(e){this._internalRoot=e}jl.prototype.render=Ms.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));wl(e,t,null,null)};jl.prototype.unmount=Ms.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$t(function(){wl(null,e,null,null)}),t[nt]=null}};function jl(e){this._internalRoot=e}jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Da();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ct.length&&t!==0&&t<ct[n].priority;n++);ct.splice(n,0,e),n===0&&Ra(e)}};function Ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qo(){}function Lf(e,t,n,r,l){if(l){if(typeof r=="function"){var s=r;r=function(){var d=ol(o);s.call(d)}}var o=rc(t,r,e,0,null,!1,!1,"",Qo);return e._reactRootContainer=o,e[nt]=o.current,Kn(e.nodeType===8?e.parentNode:e),$t(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var d=ol(u);a.call(d)}}var u=Ps(e,0,!1,null,null,!1,!1,"",Qo);return e._reactRootContainer=u,e[nt]=u.current,Kn(e.nodeType===8?e.parentNode:e),$t(function(){wl(t,u,n,r)}),u}function Nl(e,t,n,r,l){var s=n._reactRootContainer;if(s){var o=s;if(typeof l=="function"){var a=l;l=function(){var u=ol(o);a.call(u)}}wl(t,o,e,l)}else o=Lf(n,t,e,l,r);return ol(o)}Ia=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=En(t.pendingLanes);n!==0&&(es(t,n|1),we(t,Y()),!(R&6)&&(pn=Y()+500,Ct()))}break;case 13:$t(function(){var r=rt(e,1);if(r!==null){var l=me();He(r,e,1,l)}}),Is(e,1)}};ts=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=me();He(t,e,134217728,n)}Is(e,134217728)}};Ma=function(e){if(e.tag===13){var t=wt(e),n=rt(e,t);if(n!==null){var r=me();He(n,e,t,r)}Is(e,t)}};Da=function(){return A};Oa=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};ui=function(e,t,n){switch(t){case"input":if(ni(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ml(r);if(!l)throw Error(N(90));ma(r),ni(r,l)}}}break;case"textarea":ha(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};ka=zs;Na=$t;var Pf={usingClientEntryPoint:!1,Events:[sr,Kt,ml,wa,ja,zs]},Cn={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},If={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ca(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance||Tf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!br.isDisabled&&br.supportsFiber)try{ul=br.inject(If),Ke=br}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pf;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ds(t))throw Error(N(200));return Ef(e,t,null,n)};be.createRoot=function(e,t){if(!Ds(e))throw Error(N(299));var n=!1,r="",l=lc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ps(e,1,!1,null,null,n,!1,r,l),e[nt]=t.current,Kn(e.nodeType===8?e.parentNode:e),new Ms(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Ca(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return $t(e)};be.hydrate=function(e,t,n){if(!kl(t))throw Error(N(200));return Nl(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!Ds(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,l=!1,s="",o=lc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=rc(t,null,e,1,n??null,l,!1,s,o),e[nt]=t.current,Kn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new jl(t)};be.render=function(e,t,n){if(!kl(t))throw Error(N(200));return Nl(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!kl(e))throw Error(N(40));return e._reactRootContainer?($t(function(){Nl(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};be.unstable_batchedUpdates=zs;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!kl(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Nl(e,t,n,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function ic(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic)}catch(e){console.error(e)}}ic(),ia.exports=be;var Mf=ia.exports,sc,Wo=Mf;sc=Wo.createRoot,Wo.hydrateRoot;const oc=T.createContext(),Df={student:{id:"std_01",name:"Nguyễn Văn Học",email:"hocvien@lms.edu.vn",role:"student",avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80",xp:450,certificates:[{id:"cert_00",courseTitle:"Nhập môn Lập trình Web",date:"15/06/2026",code:"LMS-WEB-789"}]},teacher:{id:"tch_01",name:"Trần Thị Giảng",email:"giangvien@lms.edu.vn",role:"teacher",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",title:"Giảng viên cao cấp"},admin:{id:"adm_01",name:"Admin LMS",email:"admin@lms.edu.vn",role:"admin",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",title:"Quản trị hệ thống"}},Of=[{id:"course_js",title:"Lập trình Javascript Cơ bản đến Nâng cao",description:"Làm chủ ngôn ngữ lập trình phổ biến nhất thế giới từ con số 0. Học về ES6, Asynchronous, DOM và cơ bản về Node.js.",thumbnail:"linear-gradient(135deg, #f6d365 0%, #fda085 100%)",duration:"40 giờ",enrolledCount:154,rating:4.8,lessons:[{id:"js_l1",title:"Bài 1: Giới thiệu về Javascript và Biến",duration:"15 phút",videoUrl:"https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-computer-34281-large.mp4",content:"Trong bài này, chúng ta sẽ làm quen với Javascript, cách nhúng JS vào trang web và cách khai báo các loại biến var, let, const.",quiz:{id:"quiz_js_l1",title:"Trắc nghiệm: Biến trong Javascript",questions:[{id:"q1",text:"Khai báo biến nào dưới đây có phạm vi khối (block scope)?",options:["var","let và const","Chỉ const","Tất cả các phương án trên"],correctIndex:1},{id:"q2",text:"Biến khai báo bằng từ khóa `const` có thể gán lại giá trị mới không?",options:["Có, gán bình thường","Có, nếu ở trong chế độ Strict Mode","Không, giá trị là hằng số","Chỉ gán được số, không gán được chuỗi"],correctIndex:2}]}},{id:"js_l2",title:"Bài 2: Hàm và Arrow Function",duration:"22 phút",videoUrl:"https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-programmer-typing-on-a-keyboard-40431-large.mp4",content:"Học cách định nghĩa hàm, tham số truyền vào, giá trị trả về và cú pháp Arrow Function cực kỳ tiện lợi trong ES6.",quiz:{id:"quiz_js_l2",title:"Trắc nghiệm: Hàm và Arrow Function",questions:[{id:"q1",text:"Cú pháp nào viết Arrow Function đúng?",options:["const sum = (a, b) => a + b;","function sum = (a, b) => { return a + b };","const sum => (a, b) { a + b };","const sum = function(a, b) => a + b;"],correctIndex:0}]}},{id:"js_l3",title:"Bài 3: Xử lý bất đồng bộ với Promise và Async/Await",duration:"30 phút",videoUrl:"https://assets.mixkit.co/videos/preview/mixkit-code-code-on-a-computer-screen-40742-large.mp4",content:"Tìm hiểu cơ chế bất đồng bộ của Javascript, cách giải quyết Callback Hell bằng Promise và cú pháp hiện đại Async/Await.",quiz:{id:"quiz_js_l3",title:"Trắc nghiệm: Bất đồng bộ trong Javascript",questions:[{id:"q1",text:"Từ khóa `await` chỉ được sử dụng ở đâu?",options:["Bên trong bất kỳ hàm nào","Bên trong hàm có từ khóa `async`","Ngoài cùng của file script","Bên trong vòng lặp for"],correctIndex:1}]}}]},{id:"course_ui",title:"Thiết kế Giao diện Web Cao cấp (UI/UX)",description:"Học cách tư duy trải nghiệm người dùng, nguyên lý thiết kế màu sắc, typography và thực hành tạo giao diện web sang xịn mịn.",thumbnail:"linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",duration:"28 giờ",enrolledCount:98,rating:4.9,lessons:[{id:"ui_l1",title:"Bài 1: Nguyên lý thiết kế Visual Hierarchy",duration:"18 phút",videoUrl:"https://assets.mixkit.co/videos/preview/mixkit-designer-working-on-a-digital-tablet-39981-large.mp4",content:"Học cách dẫn dắt mắt người dùng đọc thông tin theo thứ tự ưu tiên bằng cách điều chỉnh kích thước, màu sắc và khoảng trắng.",quiz:{id:"quiz_ui_l1",title:"Trắc nghiệm: Visual Hierarchy",questions:[{id:"q1",text:"Yếu tố nào có ảnh hưởng mạnh nhất đến sự chú ý của người dùng trên trang?",options:["Kích thước và độ tương phản màu sắc","Độ dài của văn bản","Font chữ serif cổ điển","Vị trí ở góc dưới cùng bên phải"],correctIndex:0}]}},{id:"ui_l2",title:"Bài 2: Ứng dụng Glassmorphism và Hiệu ứng Đổ bóng",duration:"25 phút",videoUrl:"https://assets.mixkit.co/videos/preview/mixkit-web-designer-working-on-his-workspace-42289-large.mp4",content:"Hướng dẫn sử dụng backdrop-filter trong CSS kết hợp đổ bóng mềm mịn để tạo giao diện kính mờ cao cấp.",quiz:{id:"quiz_ui_l2",title:"Trắc nghiệm: Glassmorphism",questions:[{id:"q1",text:"Thuộc tính CSS nào là cốt lõi để tạo hiệu ứng kính mờ (Glassmorphism)?",options:["filter: blur()","backdrop-filter: blur()","box-shadow: inset","opacity: 0.5"],correctIndex:1}]}}]},{id:"course_ai",title:"Xây dựng AI Agent với Python",description:"Học cách tích hợp mô hình ngôn ngữ lớn (LLM), thiết lập công cụ (tools) cho agent và lập trình các vòng lặp phản hồi tự trị.",thumbnail:"linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)",duration:"35 giờ",enrolledCount:120,rating:4.95,lessons:[{id:"ai_l1",title:"Bài 1: Kiến trúc tổng quan của AI Agent",duration:"20 phút",videoUrl:"https://assets.mixkit.co/videos/preview/mixkit-user-interface-of-a-futuristic-computer-screen-43029-large.mp4",content:"Hiểu về cách một Agent hoạt động: Nhận thức (Perception) -> Suy nghĩ (Reasoning / Planning) -> Hành động (Action).",quiz:{id:"quiz_ai_l1",title:"Trắc nghiệm: Kiến trúc AI Agent",questions:[{id:"q1",text:'Thành phần nào đóng vai trò là "não bộ" lập kế hoạch của AI Agent?',options:["Database","Mô hình Ngôn ngữ Lớn (LLM)","API bên ngoài","Giao diện đồ họa (GUI)"],correctIndex:1}]}}]}],Rf=[{id:"sub_01",studentId:"std_01",studentName:"Nguyễn Văn Học",courseId:"course_js",courseTitle:"Lập trình Javascript Cơ bản đến Nâng cao",lessonId:"js_l1",lessonTitle:"Bài 1: Giới thiệu về Javascript và Biến",submittedAt:"2026-07-15T10:00:00Z",answers:[1,2],score:10,feedback:"Bài làm rất tốt, hiểu bài sâu sắc và trả lời chính xác tất cả câu hỏi.",status:"graded"},{id:"sub_02",studentId:"std_02",studentName:"Phạm Minh Trí",courseId:"course_js",courseTitle:"Lập trình Javascript Cơ bản đến Nâng cao",lessonId:"js_l1",lessonTitle:"Bài 1: Giới thiệu về Javascript và Biến",submittedAt:"2026-07-15T12:30:00Z",answers:[0,2],score:null,feedback:null,status:"pending"},{id:"sub_03",studentId:"std_03",studentName:"Hoàng Lan Anh",courseId:"course_ui",courseTitle:"Thiết kế Giao diện Web Cao cấp (UI/UX)",lessonId:"ui_l1",lessonTitle:"Bài 1: Nguyên lý thiết kế Visual Hierarchy",submittedAt:"2026-07-15T14:15:00Z",answers:[0],score:null,feedback:null,status:"pending"}],Af=[{id:"class_js01",name:"Lớp Lập trình Javascript - JS-01",teacher:"Trần Thị Giảng",courseId:"course_js",schedule:"Thứ 2, 4, 6 (19:30 - 21:30)",students:[{id:"std_01",name:"Nguyễn Văn Học",progress:66,averageScore:10},{id:"std_02",name:"Phạm Minh Trí",progress:33,averageScore:7},{id:"std_04",name:"Lê Hữu Đạt",progress:0,averageScore:null}]},{id:"class_ui02",name:"Lớp UI/UX Thiết kế Web - UI-02",teacher:"Trần Thị Giảng",courseId:"course_ui",schedule:"Thứ 3, 5, Bảy (18:00 - 20:00)",students:[{id:"std_03",name:"Hoàng Lan Anh",progress:50,averageScore:9},{id:"std_05",name:"Trần Bảo Ngọc",progress:100,averageScore:9.5}]}],$f=({children:e})=>{const[t,n]=T.useState(()=>{const w=localStorage.getItem("lms_user");return w?JSON.parse(w):null}),[r,l]=T.useState(()=>localStorage.getItem("lms_view")||"login"),[s,o]=T.useState(()=>{const w=localStorage.getItem("lms_courses");return w?JSON.parse(w):Of}),[a,u]=T.useState(()=>{const w=localStorage.getItem("lms_submissions");return w?JSON.parse(w):Rf}),[d,h]=T.useState(()=>{const w=localStorage.getItem("lms_classes");return w?JSON.parse(w):Af}),[g,p]=T.useState(()=>localStorage.getItem("lms_active_course")||"course_js"),[y,x]=T.useState(()=>localStorage.getItem("lms_active_lesson")||"js_l1");T.useEffect(()=>{localStorage.setItem("lms_user",t?JSON.stringify(t):""),t?localStorage.setItem("lms_view",r):localStorage.setItem("lms_view","login")},[t,r]),T.useEffect(()=>{localStorage.setItem("lms_courses",JSON.stringify(s))},[s]),T.useEffect(()=>{localStorage.setItem("lms_submissions",JSON.stringify(a))},[a]),T.useEffect(()=>{localStorage.setItem("lms_classes",JSON.stringify(d))},[d]),T.useEffect(()=>{localStorage.setItem("lms_active_course",g)},[g]),T.useEffect(()=>{localStorage.setItem("lms_active_lesson",y)},[y]);const j=w=>{const b=Df[w];n(b),l(w==="student"?"dashboard":w==="teacher"?"classes":"reports")},P=()=>{n(null),l("login")},c=(w,b)=>{const k=s.map(C=>{if(C.id===w){const z=C.lessons.map(W=>W.id===b?{...W,completed:!0}:W),L=z.filter(W=>W.completed).length,V=Math.round(L/z.length*100);return{...C,lessons:z,progress:V}}return C});if(o(k),t&&t.role==="student"){const C={...t,xp:t.xp+50};n(C)}},f=(w,b,k)=>{if(!t)return;const C=s.find(J=>J.id===w),z=C==null?void 0:C.lessons.find(J=>J.id===b);if(!z||!z.quiz)return;let L=0;z.quiz.questions.forEach((J,_)=>{k[_]===J.correctIndex&&L++});const V=z.quiz.questions.length,W=Math.round(L/V*10),Me={id:`sub_${Date.now()}`,studentId:t.id,studentName:t.name,courseId:w,courseTitle:C.title,lessonId:b,lessonTitle:z.title,submittedAt:new Date().toISOString(),answers:k,score:W,feedback:"Hệ thống tự động chấm điểm bài trắc nghiệm.",status:"graded"},Ue=[Me,...a];u(Ue);const st=s.map(J=>{var _;if(J.id===w){const M=J.lessons.map(F=>F.id===b?{...F,completed:!0}:F),D=M.filter(F=>F.completed).length,$=Math.round(D/M.length*100);if($===100&&!((_=t.certificates)==null?void 0:_.some(ne=>ne.courseTitle===J.title))){const ne={id:`cert_${Date.now()}`,courseTitle:J.title,date:new Date().toLocaleDateString("vi-VN"),code:`LMS-${J.id.substring(7).toUpperCase()}-${Math.floor(100+Math.random()*900)}`},De={...t,xp:t.xp+200,certificates:[...t.certificates||[],ne]};n(De)}return{...J,lessons:M,progress:$}}return J});return o(st),Me},m=(w,b,k)=>{const C=a.map(z=>z.id===w?{...z,score:parseFloat(b),feedback:k,status:"graded"}:z);u(C)},v=w=>{const b={id:`course_${Date.now()}`,rating:5,enrolledCount:0,progress:0,lessons:[],...w};o([...s,b])},S=(w,b)=>{const k=s.map(C=>{if(C.id===w){const z={id:`les_${Date.now()}`,completed:!1,...b};return{...C,lessons:[...C.lessons,z]}}return C});o(k)};return i.jsx(oc.Provider,{value:{currentUser:t,currentView:r,setCurrentView:l,courses:s,submissions:a,classes:d,activeCourseId:g,setActiveCourseId:p,activeLessonId:y,setActiveLessonId:x,login:j,logout:P,markLessonComplete:c,submitQuiz:f,gradeSubmission:m,addCourse:v,addLesson:S},children:e})},_e=()=>T.useContext(oc);function Ff(){const{currentUser:e,currentView:t,setCurrentView:n}=_e();if(!e)return null;const r=e.role,o=r==="student"?[{id:"dashboard",label:"Tổng quan học tập",icon:i.jsxs("svg",{className:"nav-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[i.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),i.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),i.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}),i.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"})]})},{id:"courses",label:"Khóa học của tôi",icon:i.jsx("svg",{className:"nav-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5V3.5A2.5 2.5 0 0 1 6.5 1M20 3v19H6.5"})})},{id:"study",label:"Trang học bài",icon:i.jsxs("svg",{className:"nav-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[i.jsx("polygon",{points:"23 7 16 12 23 17 23 7"}),i.jsx("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})]})},{id:"results",label:"Kết quả học tập",icon:i.jsx("svg",{className:"nav-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})})}]:[{id:"classes",label:"Quản lý lớp học",icon:i.jsxs("svg",{className:"nav-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[i.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),i.jsx("circle",{cx:"9",cy:"7",r:"4"}),i.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),i.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})},{id:"course-builder",label:"Tạo nội dung khóa học",icon:i.jsx("svg",{className:"nav-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("path",{d:"M12 5v14M5 12h14"})})},{id:"grading",label:"Chấm bài",icon:i.jsxs("svg",{className:"nav-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[i.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),i.jsx("polyline",{points:"14 2 14 8 20 8"}),i.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),i.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),i.jsx("polyline",{points:"10 9 9 9 8 9"})]})},{id:"reports",label:"Báo cáo trung tâm",icon:i.jsxs("svg",{className:"nav-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[i.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),i.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),i.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"14"})]})}];return i.jsxs("aside",{className:"lms-sidebar",children:[i.jsxs("div",{className:"sidebar-logo",children:[i.jsx("span",{className:"logo-icon",children:"▲"}),i.jsx("h2",{children:"LMS Portal"})]}),i.jsxs("nav",{className:"sidebar-nav",children:[i.jsx("div",{className:"nav-section-title",children:r==="student"?"Học viên":r==="teacher"?"Giảng viên":"Quản lý - Admin"}),o.map(a=>i.jsxs("button",{className:`nav-item ${t===a.id?"active":""}`,onClick:()=>n(a.id),children:[a.icon,i.jsx("span",{children:a.label})]},a.id))]}),i.jsx("div",{className:"sidebar-footer",children:i.jsxs("div",{className:"user-mini-profile",children:[i.jsx("img",{src:e.avatar,alt:"Avatar",className:"user-avatar-mini"}),i.jsxs("div",{className:"user-info-mini",children:[i.jsx("div",{className:"user-name-mini",children:e.name}),i.jsx("div",{className:"user-email-mini",children:e.email})]})]})}),i.jsx("style",{children:`
        .lms-sidebar {
          width: var(--sidebar-width);
          background: rgba(10, 11, 20, 0.95);
          backdrop-filter: var(--glass-blur);
          border-right: 1px solid var(--border-glass);
          display: flex;
          flex-direction: column;
          padding: 1.5rem 1rem;
          height: 100vh;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 1rem 2rem;
        }

        .logo-icon {
          font-size: 1.5rem;
          color: var(--color-primary-hover);
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0px); }
        }

        .sidebar-logo h2 {
          font-size: 1.5rem;
          margin-bottom: 0;
          background: linear-gradient(to right, #fff, var(--color-primary-hover));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }

        .nav-section-title {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          padding: 0.5rem 1rem;
          margin-top: 1rem;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid transparent;
          background: transparent;
          color: var(--text-muted);
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          transition: var(--transition-smooth);
          text-align: left;
          width: 100%;
        }

        .nav-item:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.03);
        }

        .nav-item.active {
          color: #fff;
          background: var(--color-primary-glow);
          border-color: rgba(139, 92, 246, 0.2);
        }

        .nav-item.active .nav-icon {
          color: var(--color-primary-hover);
        }

        .nav-icon {
          width: 1.25rem;
          height: 1.25rem;
          transition: var(--transition-smooth);
        }

        .sidebar-footer {
          border-top: 1px solid var(--border-glass);
          padding-top: 1.5rem;
          margin-top: auto;
        }

        .user-mini-profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.02);
        }

        .user-avatar-mini {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          object-fit: cover;
          border: 1.5px solid var(--color-primary);
        }

        .user-info-mini {
          overflow: hidden;
          flex: 1;
        }

        .user-name-mini {
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .user-email-mini {
          font-size: 0.75rem;
          color: var(--text-muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 768px) {
          .lms-sidebar {
            width: 100%;
            height: auto;
            border-right: none;
            border-bottom: 1px solid var(--border-glass);
            padding: 1rem;
            position: relative;
          }
          .sidebar-logo {
            padding-bottom: 1rem;
          }
          .sidebar-nav {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.25rem;
          }
          .nav-item {
            padding: 0.5rem 0.75rem;
            width: auto;
            font-size: 0.85rem;
          }
          .sidebar-footer {
            display: none;
          }
        }
      `})]})}function Hf(){const{currentUser:e,currentView:t,logout:n,login:r}=_e(),[l,s]=T.useState(!1);if(!e)return null;const a={dashboard:"Tổng quan học tập",courses:"Khóa học của tôi",study:"Trang học bài",results:"Kết quả học tập",classes:"Quản lý lớp học","course-builder":"Tạo nội dung khóa học",grading:"Chấm bài",reports:"Báo cáo trung tâm"}[t]||"LMS Portal";return i.jsxs("header",{className:"lms-navbar",children:[i.jsx("div",{className:"nav-left",children:i.jsx("h1",{className:"nav-view-title",children:a})}),i.jsxs("div",{className:"nav-right",children:[i.jsxs("div",{className:"role-switcher-container",children:[i.jsxs("button",{className:"btn btn-secondary btn-sm switch-role-btn",onClick:()=>s(!l),children:[i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"btn-icon",children:[i.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),i.jsx("circle",{cx:"9",cy:"7",r:"4"}),i.jsx("path",{d:"M17 11l2 2 4-4"})]}),i.jsx("span",{children:"Đổi Vai Trò"})]}),l&&i.jsxs("div",{className:"role-dropdown glass-card animate-fade-in",children:[i.jsx("div",{className:"dropdown-header",children:"Chọn tài khoản Demo"}),i.jsx("button",{className:`dropdown-item ${e.role==="student"?"active":""}`,onClick:()=>{r("student"),s(!1)},children:"Học viên (Nguyễn Văn Học)"}),i.jsx("button",{className:`dropdown-item ${e.role==="teacher"?"active":""}`,onClick:()=>{r("teacher"),s(!1)},children:"Giảng viên (Trần Thị Giảng)"}),i.jsx("button",{className:`dropdown-item ${e.role==="admin"?"active":""}`,onClick:()=>{r("admin"),s(!1)},children:"Quản trị viên (Admin LMS)"})]})]}),i.jsxs("div",{className:"user-profile-badge",children:[i.jsx("img",{src:e.avatar,alt:e.name,className:"navbar-avatar"}),i.jsxs("div",{className:"navbar-user-meta",children:[i.jsx("span",{className:"navbar-username",children:e.name}),i.jsx("span",{className:`badge ${e.role==="student"?"badge-primary":e.role==="teacher"?"badge-success":"badge-warning"}`,children:e.role==="student"?"Học viên":e.role==="teacher"?"Giảng viên":"Admin"})]})]}),i.jsx("button",{className:"btn btn-secondary logout-btn",onClick:n,title:"Đăng xuất",children:i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"btn-icon",children:[i.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),i.jsx("polyline",{points:"16 17 21 12 16 7"}),i.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]})})]}),i.jsx("style",{children:`
        .lms-navbar {
          height: var(--navbar-height);
          background: rgba(10, 11, 20, 0.5);
          backdrop-filter: var(--glass-blur);
          border-bottom: 1px solid var(--border-glass);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2.5rem;
          position: sticky;
          top: 0;
          z-index: 9;
        }

        .nav-view-title {
          font-size: 1.5rem;
          margin-bottom: 0;
          background: #fff;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .role-switcher-container {
          position: relative;
        }

        .switch-role-btn {
          font-size: 0.85rem;
          padding: 0.5rem 1rem;
        }

        .btn-icon {
          width: 1rem;
          height: 1rem;
        }

        .role-dropdown {
          position: absolute;
          right: 0;
          top: calc(100% + 10px);
          width: 250px;
          padding: 0.75rem 0.5rem;
          border-color: rgba(139, 92, 246, 0.25);
          z-index: 100;
        }

        .dropdown-header {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          padding: 0.5rem 0.75rem 0.25rem;
          border-bottom: 1px solid var(--border-glass);
          margin-bottom: 0.5rem;
        }

        .dropdown-item {
          width: 100%;
          text-align: left;
          padding: 0.65rem 0.75rem;
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-body);
          font-size: 0.875rem;
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: var(--transition-smooth);
        }

        .dropdown-item:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
        }

        .dropdown-item.active {
          color: var(--color-primary-hover);
          background: var(--color-primary-glow);
          font-weight: 600;
        }

        .user-profile-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-right: 1rem;
          border-right: 1px solid var(--border-glass);
        }

        .navbar-avatar {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          object-fit: cover;
          border: 1.5px solid var(--color-secondary);
        }

        .navbar-user-meta {
          display: flex;
          flex-direction: column;
        }

        .navbar-username {
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff;
        }

        .logout-btn {
          padding: 0.5rem;
          width: 2.25rem;
          height: 2.25rem;
        }

        @media (max-width: 768px) {
          .lms-navbar {
            padding: 0 1rem;
          }
          .nav-view-title {
            font-size: 1.2rem;
          }
          .navbar-user-meta {
            display: none;
          }
          .user-profile-badge {
            border-right: none;
            padding-right: 0;
          }
        }
      `})]})}function Bf(){const{login:e}=_e(),[t,n]=T.useState("student"),[r,l]=T.useState("••••••••"),s=a=>a==="student"?"hocvien@lms.edu.vn":a==="teacher"?"giangvien@lms.edu.vn":"admin@lms.edu.vn",o=a=>{a.preventDefault(),e(t)};return i.jsxs("div",{className:"login-container",children:[i.jsx("div",{className:"login-backdrop"}),i.jsxs("div",{className:"login-card glass-card animate-fade-in",children:[i.jsxs("div",{className:"login-header",children:[i.jsx("div",{className:"login-logo",children:"▲"}),i.jsx("h1",{children:"ANTIGRAVITY LMS"}),i.jsx("p",{children:"Hệ thống Quản lý Học tập & Đào tạo thông minh"})]}),i.jsxs("div",{className:"role-tabs",children:[i.jsx("button",{type:"button",className:`role-tab ${t==="student"?"active":""}`,onClick:()=>n("student"),children:"Học viên"}),i.jsx("button",{type:"button",className:`role-tab ${t==="teacher"?"active":""}`,onClick:()=>n("teacher"),children:"Giảng viên"}),i.jsx("button",{type:"button",className:`role-tab ${t==="admin"?"active":""}`,onClick:()=>n("admin"),children:"Admin"})]}),i.jsxs("form",{onSubmit:o,className:"login-form",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Tài khoản demo"}),i.jsx("input",{type:"email",className:"form-input",value:s(t),disabled:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Mật khẩu"}),i.jsx("input",{type:"password",className:"form-input",value:r,onChange:a=>l(a.target.value)})]}),i.jsx("button",{type:"submit",className:"btn btn-primary login-submit-btn",children:"Đăng Nhập Ngay"})]}),i.jsx("div",{className:"login-footer",children:i.jsx("p",{children:"Chọn vai trò mong muốn ở tab trên để trải nghiệm thử tài khoản demo."})})]}),i.jsx("style",{children:`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .login-backdrop {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--color-primary-hover) 0%, rgba(139, 92, 246, 0) 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          filter: blur(80px);
          opacity: 0.35;
          z-index: 1;
          pointer-events: none;
        }

        .login-card {
          width: 100%;
          max-width: 480px;
          z-index: 2;
          border-color: rgba(255, 255, 255, 0.1);
        }

        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .login-logo {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
          animation: pulse 2.5s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.05); filter: brightness(1.2); }
          100% { transform: scale(1); filter: brightness(1); }
        }

        .login-card h1 {
          font-size: 1.8rem;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }

        .role-tabs {
          display: flex;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          padding: 0.25rem;
          border-radius: var(--radius-md);
          margin-bottom: 2rem;
        }

        .role-tab {
          flex: 1;
          padding: 0.65rem 1rem;
          border: none;
          background: transparent;
          color: var(--text-muted);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: var(--transition-smooth);
        }

        .role-tab:hover {
          color: #fff;
        }

        .role-tab.active {
          color: #fff;
          background: var(--color-primary-glow);
          border: 1px solid rgba(139, 92, 246, 0.2);
        }

        .login-submit-btn {
          width: 100%;
          padding: 0.85rem;
          margin-top: 1rem;
        }

        .login-footer {
          text-align: center;
          margin-top: 1.5rem;
          font-size: 0.8rem;
        }
      `})]})}function qo(){const{currentUser:e,courses:t,setCurrentView:n,setActiveCourseId:r,setActiveLessonId:l}=_e(),s=t.length,o=t.filter(p=>p.progress===100).length;t.filter(p=>p.progress>0&&p.progress<100).length;const u=(()=>{for(const p of t)if(p.progress<100){const y=p.lessons.find(x=>!x.completed)||p.lessons[0];if(y)return{course:p,lesson:y}}return null})(),d=(p,y)=>{r(p),l(y),n("study")},h=[{day:"T2",mins:45},{day:"T3",mins:90},{day:"T4",mins:30},{day:"T5",mins:120},{day:"T6",mins:60},{day:"T7",mins:15},{day:"CN",mins:80}],g=120;return i.jsxs("div",{className:"dashboard-grid animate-fade-in",children:[i.jsxs("div",{className:"welcome-banner glass-card col-span-3",children:[i.jsxs("div",{className:"welcome-text",children:[i.jsxs("h2",{children:["Chào mừng quay trở lại, ",e.name,"! 👋"]}),i.jsxs("p",{children:["Hôm nay là một ngày tuyệt vời để tiếp thu kiến thức mới. Bạn đã tích lũy được ",i.jsxs("strong",{children:[e.xp," XP"]}),"."]}),u&&i.jsxs("button",{className:"btn btn-accent continue-btn",onClick:()=>d(u.course.id,u.lesson.id),children:["Học tiếp: ",u.lesson.title," (",u.course.title,")"]})]}),i.jsxs("div",{className:"welcome-avatar-container",children:[i.jsx("div",{className:"glowing-ring"}),i.jsx("img",{src:e.avatar,alt:"User Avatar",className:"welcome-avatar"})]})]}),i.jsxs("div",{className:"stats-card glass-card interactive",children:[i.jsx("div",{className:"stats-icon text-primary",children:"📘"}),i.jsx("div",{className:"stats-num",children:s}),i.jsx("div",{className:"stats-label",children:"Khóa Học Đăng Ký"})]}),i.jsxs("div",{className:"stats-card glass-card interactive",children:[i.jsx("div",{className:"stats-icon text-success",children:"🏆"}),i.jsx("div",{className:"stats-num",children:o}),i.jsx("div",{className:"stats-label",children:"Khóa Học Hoàn Thành"})]}),i.jsxs("div",{className:"stats-card glass-card interactive",children:[i.jsx("div",{className:"stats-icon text-warning",children:"⚡"}),i.jsxs("div",{className:"stats-num",children:[e.xp," XP"]}),i.jsx("div",{className:"stats-label",children:"Điểm Tích Lũy"})]}),i.jsxs("div",{className:"chart-section-card glass-card col-span-2",children:[i.jsxs("div",{className:"card-header-flex",children:[i.jsx("h3",{children:"Thời gian học trong tuần"}),i.jsx("span",{className:"badge badge-success",children:"Tuần này"})]}),i.jsx("div",{className:"bar-chart-container",children:h.map((p,y)=>{const x=p.mins/g*150;return i.jsxs("div",{className:"bar-wrapper",children:[i.jsxs("div",{className:"bar-tooltip",children:[p.mins," phút"]}),i.jsx("div",{className:"chart-bar",style:{height:`${x}px`}}),i.jsx("span",{className:"bar-label",children:p.day})]},y)})})]}),i.jsxs("div",{className:"goals-section-card glass-card",children:[i.jsx("h3",{children:"Tiến trình tổng quan"}),i.jsxs("div",{className:"radial-progress-wrapper",children:[i.jsxs("svg",{className:"radial-progress-svg",viewBox:"0 0 100 100",children:[i.jsx("circle",{className:"radial-bg",cx:"50",cy:"50",r:"40"}),i.jsx("circle",{className:"radial-fill",cx:"50",cy:"50",r:"40",strokeDasharray:"251.2",strokeDashoffset:251.2-251.2*(o/(s||1))})]}),i.jsxs("div",{className:"radial-inner-text",children:[i.jsxs("span",{className:"percentage",children:[Math.round(o/(s||1)*100),"%"]}),i.jsx("span",{className:"label",children:"Hoàn thành"})]})]}),i.jsx("div",{className:"course-progress-list",children:t.map(p=>i.jsxs("div",{className:"mini-course-progress",children:[i.jsxs("div",{className:"mini-course-info",children:[i.jsx("span",{children:p.title}),i.jsxs("span",{className:"font-bold",children:[p.progress,"%"]})]}),i.jsx("div",{className:"progress-container",children:i.jsx("div",{className:"progress-bar",style:{width:`${p.progress}%`}})})]},p.id))})]}),i.jsxs("div",{className:"notifications-card glass-card col-span-3",children:[i.jsx("h3",{children:"Thông báo từ giảng viên"}),i.jsxs("div",{className:"notifications-list",children:[i.jsxs("div",{className:"notif-item",children:[i.jsx("div",{className:"notif-avatar",children:"👩‍🏫"}),i.jsxs("div",{className:"notif-body",children:[i.jsxs("div",{className:"notif-header",children:[i.jsx("strong",{children:"Cô Trần Thị Giảng"}),i.jsx("span",{className:"notif-time",children:"1 giờ trước"})]}),i.jsx("p",{children:"Chào cả lớp, cô đã hoàn thành chấm điểm cho bài tập JavaScript Bài 1. Các em vui lòng vào trang Kết quả học tập để xem chi tiết nhận xét nhé!"})]})]}),i.jsxs("div",{className:"notif-item",children:[i.jsx("div",{className:"notif-avatar",children:"📢"}),i.jsxs("div",{className:"notif-body",children:[i.jsxs("div",{className:"notif-header",children:[i.jsx("strong",{children:"Hệ thống LMS"}),i.jsx("span",{className:"notif-time",children:"Hôm qua"})]}),i.jsx("p",{children:'Khóa học mới "Xây dựng AI Agent với Python" vừa được bổ sung chương mới. Hãy tham gia ngay để không bỏ lỡ các công nghệ Agentic tiên tiến nhất!'})]})]})]})]}),i.jsx("style",{children:`
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .col-span-2 {
          grid-column: span 2;
        }

        .col-span-3 {
          grid-column: span 3;
        }

        .welcome-banner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%);
          border-color: rgba(139, 92, 246, 0.25);
          position: relative;
          overflow: hidden;
        }

        .welcome-text {
          max-width: 70%;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          z-index: 2;
        }

        .welcome-text h2 {
          font-size: 2.2rem;
        }

        .continue-btn {
          margin-top: 1rem;
          align-self: flex-start;
        }

        .welcome-avatar-container {
          position: relative;
          z-index: 2;
        }

        .welcome-avatar {
          width: 6.5rem;
          height: 6.5rem;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #fff;
          box-shadow: 0 0 25px rgba(139, 92, 246, 0.5);
        }

        .glowing-ring {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          filter: blur(8px);
          opacity: 0.6;
          animation: spin 8s linear infinite;
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        /* Stats Cards */
        .stats-card {
          text-align: center;
          padding: 1.5rem;
        }

        .stats-icon {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .stats-num {
          font-size: 2.5rem;
          font-weight: 800;
          color: #fff;
          font-family: var(--font-heading);
        }

        .stats-label {
          color: var(--text-muted);
          font-size: 0.875rem;
          font-weight: 600;
        }

        /* Charts */
        .card-header-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .bar-chart-container {
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          height: 180px;
          padding-top: 2rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .bar-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 40px;
          position: relative;
        }

        .chart-bar {
          width: 24px;
          background: linear-gradient(180deg, var(--color-primary-hover) 0%, var(--color-primary) 100%);
          border-radius: 6px 6px 0 0;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
          cursor: pointer;
        }

        .chart-bar:hover {
          background: linear-gradient(180deg, var(--color-secondary-hover) 0%, var(--color-secondary) 100%);
          box-shadow: 0 4px 15px rgba(6, 182, 212, 0.5);
        }

        .chart-bar:hover + .bar-label {
          color: #fff;
        }

        .bar-wrapper:hover .bar-tooltip {
          opacity: 1;
          transform: translateY(0) translateX(-50%);
        }

        .bar-tooltip {
          position: absolute;
          bottom: calc(100% + 5px);
          left: 50%;
          transform: translateY(10px) translateX(-50%);
          background: rgba(10, 11, 20, 0.9);
          border: 1px solid var(--border-glass);
          color: #fff;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: var(--transition-smooth);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          z-index: 10;
        }

        .bar-label {
          margin-top: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        /* Radial Progress */
        .radial-progress-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 140px;
          height: 140px;
          margin: 1.5rem auto;
        }

        .radial-progress-svg {
          transform: rotate(-90deg);
          width: 100%;
          height: 100%;
        }

        .radial-bg {
          fill: none;
          stroke: rgba(255, 255, 255, 0.04);
          stroke-width: 8;
        }

        .radial-fill {
          fill: none;
          stroke: url(#radial-gradient-id); /* CSS variables fallback */
          stroke: var(--color-primary);
          stroke-width: 8;
          stroke-linecap: round;
          transition: stroke-dashoffset 0.8s ease-out;
        }

        .radial-inner-text {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .radial-inner-text .percentage {
          font-size: 1.8rem;
          font-weight: 800;
          color: #fff;
          font-family: var(--font-heading);
        }

        .radial-inner-text .label {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
          text-transform: uppercase;
        }

        .course-progress-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .mini-course-progress {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .mini-course-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* Notifications */
        .notifications-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 1rem;
        }

        .notif-item {
          display: flex;
          gap: 1rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .notif-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .notif-avatar {
          font-size: 1.8rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          width: 3.2rem;
          height: 3.2rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .notif-body {
          flex: 1;
        }

        .notif-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.25rem;
        }

        .notif-time {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .notif-body p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
          .col-span-2, .col-span-3 {
            grid-column: span 1;
          }
        }
      `})]})}function Uf(){const{courses:e,setCurrentView:t,setActiveCourseId:n,setActiveLessonId:r}=_e(),[l,s]=T.useState("all"),o=e.filter(u=>l==="all"?!0:l==="in-progress"?u.progress>0&&u.progress<100:l==="completed"?u.progress===100:!0),a=u=>{var h,g;n(u.id);const d=((h=u.lessons)==null?void 0:h.find(p=>!p.completed))||((g=u.lessons)==null?void 0:g[0]);d&&r(d.id),t("study")};return i.jsxs("div",{className:"courses-view-container animate-fade-in",children:[i.jsxs("div",{className:"courses-header",children:[i.jsx("p",{children:"Tìm và tiếp tục hành trình học tập của bạn"}),i.jsxs("div",{className:"filter-buttons",children:[i.jsxs("button",{className:`btn btn-sm ${l==="all"?"btn-primary":"btn-secondary"}`,onClick:()=>s("all"),children:["Tất cả (",e.length,")"]}),i.jsxs("button",{className:`btn btn-sm ${l==="in-progress"?"btn-primary":"btn-secondary"}`,onClick:()=>s("in-progress"),children:["Đang học (",e.filter(u=>u.progress>0&&u.progress<100).length,")"]}),i.jsxs("button",{className:`btn btn-sm ${l==="completed"?"btn-primary":"btn-secondary"}`,onClick:()=>s("completed"),children:["Đã hoàn thành (",e.filter(u=>u.progress===100).length,")"]})]})]}),i.jsxs("div",{className:"courses-grid",children:[o.map(u=>{var d;return i.jsxs("div",{className:"course-card glass-card interactive",children:[i.jsx("div",{className:"course-image-hero",style:{background:u.thumbnail},children:i.jsx("div",{className:"course-duration",children:u.duration})}),i.jsxs("div",{className:"course-card-body",children:[i.jsxs("div",{className:"course-card-meta",children:[i.jsxs("span",{className:"course-rating",children:["⭐ ",u.rating]}),i.jsxs("span",{className:"course-students",children:["👥 ",u.enrolledCount," học viên"]})]}),i.jsx("h3",{children:u.title}),i.jsx("p",{className:"course-desc",children:u.description}),i.jsxs("div",{className:"course-progress-section",children:[i.jsxs("div",{className:"course-progress-header",children:[i.jsx("span",{children:"Tiến độ học"}),i.jsxs("strong",{children:[u.progress||0,"%"]})]}),i.jsx("div",{className:"progress-container",children:i.jsx("div",{className:"progress-bar",style:{width:`${u.progress||0}%`}})})]}),i.jsxs("div",{className:"course-card-footer",children:[i.jsxs("span",{className:"lesson-count",children:["📚 ",((d=u.lessons)==null?void 0:d.length)||0," bài học"]}),i.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>a(u),children:u.progress===100?"Học lại":u.progress>0?"Học tiếp":"Bắt đầu học"})]})]})]},u.id)}),o.length===0&&i.jsxs("div",{className:"empty-courses-state glass-card col-span-3",children:[i.jsx("div",{className:"empty-state-icon",children:"📂"}),i.jsx("h3",{children:"Không tìm thấy khóa học"}),i.jsx("p",{children:"Bạn không có khóa học nào khớp với bộ lọc này."})]})]}),i.jsx("style",{children:`
        .courses-view-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .courses-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-glass);
          padding-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .filter-buttons {
          display: flex;
          gap: 0.5rem;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .course-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .course-image-hero {
          height: 180px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .course-duration {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          background: rgba(10, 11, 20, 0.8);
          border: 1px solid var(--border-glass);
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          color: #fff;
          font-weight: 600;
        }

        .course-card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 1rem;
        }

        .course-card-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .course-card h3 {
          font-size: 1.25rem;
          line-height: 1.3;
          margin-bottom: 0;
        }

        .course-desc {
          font-size: 0.875rem;
          color: var(--text-muted);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .course-progress-section {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .course-progress-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .course-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border-glass);
          padding-top: 1rem;
          margin-top: auto;
        }

        .lesson-count {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .empty-courses-state {
          text-align: center;
          padding: 4rem 2rem;
          grid-column: span 3;
        }

        .empty-state-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        @media (max-width: 1024px) {
          .courses-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .empty-courses-state {
            grid-column: span 2;
          }
        }

        @media (max-width: 640px) {
          .courses-grid {
            grid-template-columns: 1fr;
          }
          .empty-courses-state {
            grid-column: span 1;
          }
          .courses-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]})}function Vf(){var k,C,z;const{courses:e,activeCourseId:t,activeLessonId:n,setActiveLessonId:r,setCurrentView:l,markLessonComplete:s}=_e(),[o,a]=T.useState("desc"),[u,d]=T.useState(""),[h,g]=T.useState(""),p=T.useRef(null),[y,x]=T.useState(!1),j=e.find(L=>L.id===t)||e[0],P=((k=j==null?void 0:j.lessons)==null?void 0:k.find(L=>L.id===n))||((C=j==null?void 0:j.lessons)==null?void 0:C[0]),[c,f]=T.useState([{id:1,user:"Trần Văn Nam",text:"Thầy ơi, chỗ khai báo hằng số const đối với Object thì có đổi được thuộc tính bên trong không ạ?",replies:[{user:"Giảng viên",text:"Có nhé em, ta có thể đổi thuộc tính Object nhưng không gán lại Object đó sang Object khác được."}]},{id:2,user:"Lê Thị Mai",text:"Video bài giảng rất trực quan, cảm ơn trung tâm!",replies:[]}]);T.useEffect(()=>{if(P){const L=localStorage.getItem(`note_${j.id}_${P.id}`)||"";g(L)}},[t,n,P,j.id]);const m=L=>{const V=L.target.value;g(V),localStorage.setItem(`note_${j.id}_${P.id}`,V)},v=L=>{if(L.preventDefault(),!u.trim())return;const V={id:Date.now(),user:"Nguyễn Văn Học",text:u,replies:[]};f([...c,V]),d("")},S=()=>{p.current&&(y?p.current.pause():p.current.play().catch(L=>console.log("Video play error:",L)),x(!y))},w=L=>{r(L),x(!1)},b=()=>{l("quiz")};return!j||!P?i.jsxs("div",{className:"glass-card animate-fade-in text-center p-8",children:[i.jsx("h3",{children:"Không tìm thấy khóa học hoạt động"}),i.jsx("p",{children:"Vui lòng quay lại danh sách khóa học và chọn học một khóa."}),i.jsx("button",{className:"btn btn-primary mt-4",onClick:()=>l("courses"),children:"Đến trang Khóa học"})]}):i.jsxs("div",{className:"study-layout animate-fade-in",children:[i.jsxs("div",{className:"study-left-panel",children:[i.jsxs("div",{className:"video-player-container glass-card",children:[i.jsx("video",{ref:p,src:P.videoUrl,className:"lesson-video",loop:!0,muted:!0,playsInline:!0}),i.jsxs("div",{className:"video-overlay-controls",onClick:S,children:[!y&&i.jsx("div",{className:"play-button-glowing",children:i.jsx("svg",{viewBox:"0 0 24 24",className:"play-icon",children:i.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})})}),i.jsxs("div",{className:"video-bottom-bar",onClick:L=>L.stopPropagation(),children:[i.jsx("button",{className:"control-btn",onClick:S,children:y?"⏸ Tạm dừng":"▶ Phát"}),i.jsx("div",{className:"video-progress-dummy",children:i.jsx("div",{className:"video-progress-fill",style:{width:y?"35%":"15%"}})}),i.jsx("span",{className:"video-time",children:P.duration})]})]})]}),i.jsxs("div",{className:"lesson-heading",children:[i.jsx("h2",{children:P.title}),i.jsxs("div",{className:"lesson-actions",children:[i.jsx("button",{className:`btn ${P.completed?"btn-secondary":"btn-success"}`,onClick:()=>s(j.id,P.id),children:P.completed?"✓ Đã hoàn thành":"Đánh dấu hoàn thành"}),P.quiz&&i.jsx("button",{className:"btn btn-primary",onClick:b,children:"📝 Làm Bài Tập Trắc Nghiệm"})]})]}),i.jsxs("div",{className:"interaction-tabs-container glass-card",children:[i.jsxs("div",{className:"tabs-header",children:[i.jsx("button",{className:`tab-title ${o==="desc"?"active":""}`,onClick:()=>a("desc"),children:"Mô tả bài học"}),i.jsxs("button",{className:`tab-title ${o==="qa"?"active":""}`,onClick:()=>a("qa"),children:["Hỏi đáp (",c.length,")"]}),i.jsx("button",{className:`tab-title ${o==="notes"?"active":""}`,onClick:()=>a("notes"),children:"Ghi chú cá nhân"})]}),i.jsxs("div",{className:"tabs-content",children:[o==="desc"&&i.jsxs("div",{className:"tab-desc-view",children:[i.jsx("p",{children:P.content||"Nội dung bài học đang được cập nhật..."}),i.jsxs("div",{className:"additional-resources",children:[i.jsx("h4",{children:"Tài liệu đính kèm"}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsxs("a",{href:"#download-slide",children:["📄 Slide bài giảng bài ",P.title.split(" ")[1],".pdf"]})}),i.jsx("li",{children:i.jsx("a",{href:"#download-code",children:"💻 Source code thực hành bài học.zip"})})]})]})]}),o==="qa"&&i.jsxs("div",{className:"tab-qa-view",children:[i.jsxs("form",{onSubmit:v,className:"qa-form",children:[i.jsx("input",{type:"text",className:"form-input",placeholder:"Đặt câu hỏi về bài học này...",value:u,onChange:L=>d(L.target.value)}),i.jsx("button",{type:"submit",className:"btn btn-secondary btn-sm",children:"Gửi"})]}),i.jsx("div",{className:"qa-list",children:c.map(L=>i.jsxs("div",{className:"qa-item",children:[i.jsxs("div",{className:"qa-user-meta",children:[i.jsx("strong",{children:L.user}),i.jsx("span",{className:"badge badge-primary",children:"Học viên"})]}),i.jsx("p",{className:"qa-text",children:L.text}),L.replies.map((V,W)=>i.jsxs("div",{className:"qa-reply",children:[i.jsxs("strong",{children:[V.user," ⭐️"]}),i.jsx("p",{children:V.text})]},W))]},L.id))})]}),o==="notes"&&i.jsxs("div",{className:"tab-notes-view",children:[i.jsx("p",{className:"mb-2 text-sm text-muted",children:"Ghi chú tự động được lưu trữ trên trình duyệt của bạn."}),i.jsx("textarea",{className:"form-input form-textarea",placeholder:"Gõ ghi chú bài học vào đây...",value:h,onChange:m})]})]})]})]}),i.jsx("div",{className:"study-right-panel",children:i.jsxs("div",{className:"playlist-card glass-card",children:[i.jsxs("div",{className:"playlist-header",children:[i.jsx("h3",{children:"Nội dung khóa học"}),i.jsxs("span",{className:"badge badge-primary",children:[j.progress,"% Hoàn thành"]})]}),i.jsxs("div",{className:"playlist-lessons-list",children:[i.jsx("div",{className:"playlist-section-title",children:"Chương 1: Khởi động"}),(z=j.lessons)==null?void 0:z.map((L,V)=>i.jsxs("button",{className:`playlist-lesson-item ${L.id===n?"active":""} ${L.completed?"completed":""}`,onClick:()=>w(L.id),children:[i.jsxs("div",{className:"playlist-lesson-left",children:[i.jsx("div",{className:"playlist-play-indicator",children:L.completed?"✓":V+1}),i.jsxs("div",{className:"playlist-lesson-meta",children:[i.jsx("span",{className:"lesson-title-text",children:L.title}),i.jsxs("span",{className:"lesson-duration-text",children:["⏱ ",L.duration]})]})]}),L.quiz&&i.jsx("span",{className:"quiz-badge-icon",children:"📝"})]},L.id))]})]})}),i.jsx("style",{children:`
        .study-layout {
          display: grid;
          grid-template-columns: 2.2fr 1fr;
          gap: 2rem;
          align-items: start;
        }

        .study-left-panel {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .video-player-container {
          padding: 0;
          overflow: hidden;
          position: relative;
          aspect-ratio: 16 / 9;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          border-color: rgba(255, 255, 255, 0.05);
        }

        .lesson-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-overlay-controls {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          cursor: pointer;
          background: rgba(0, 0, 0, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .video-overlay-controls:hover {
          background: rgba(0, 0, 0, 0.45);
        }

        .play-button-glowing {
          width: 4.5rem;
          height: 4.5rem;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.7);
          animation: float 3s ease-in-out infinite;
        }

        .play-icon {
          width: 1.8rem;
          height: 1.8rem;
          fill: #fff;
          margin-left: 5px;
        }

        .video-bottom-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%);
          padding: 1.5rem 1.5rem 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .control-btn {
          background: transparent;
          border: none;
          color: #fff;
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
        }

        .video-progress-dummy {
          flex: 1;
          height: 5px;
          background: rgba(255, 255, 255, 0.25);
          border-radius: 999px;
          overflow: hidden;
        }

        .video-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          transition: width 0.3s ease;
        }

        .video-time {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .lesson-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .lesson-heading h2 {
          margin-bottom: 0;
        }

        .lesson-actions {
          display: flex;
          gap: 0.75rem;
        }

        .interaction-tabs-container {
          padding: 0;
        }

        .tabs-header {
          display: flex;
          border-bottom: 1px solid var(--border-glass);
        }

        .tab-title {
          background: transparent;
          border: none;
          padding: 1.25rem 2rem;
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: var(--transition-smooth);
          border-bottom: 2px solid transparent;
        }

        .tab-title:hover {
          color: #fff;
        }

        .tab-title.active {
          color: var(--color-primary-hover);
          border-color: var(--color-primary);
        }

        .tabs-content {
          padding: 2rem;
        }

        .additional-resources {
          margin-top: 2rem;
          border-top: 1px solid var(--border-glass);
          padding-top: 1.5rem;
        }

        .additional-resources h4 {
          margin-bottom: 1rem;
        }

        .additional-resources ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .additional-resources a {
          color: var(--color-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          transition: var(--transition-smooth);
        }

        .additional-resources a:hover {
          color: var(--color-secondary-hover);
          text-decoration: underline;
        }

        /* QA Tab */
        .qa-form {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .qa-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .qa-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1rem;
        }

        .qa-user-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .qa-text {
          color: #fff;
          font-size: 0.9rem;
        }

        .qa-reply {
          margin-top: 1rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-glass);
          padding-left: 1.5rem;
          border-left: 2px solid var(--color-primary);
        }

        .qa-reply p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* Playlist */
        .playlist-card {
          position: sticky;
          top: 100px;
        }

        .playlist-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-glass);
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
        }

        .playlist-lessons-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .playlist-section-title {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          padding: 0.25rem 0.5rem;
        }

        .playlist-lesson-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid transparent;
          background: transparent;
          cursor: pointer;
          transition: var(--transition-smooth);
          width: 100%;
          text-align: left;
        }

        .playlist-lesson-item:hover {
          background: rgba(255,255,255,0.03);
        }

        .playlist-lesson-item.active {
          background: var(--color-primary-glow);
          border-color: rgba(139, 92, 246, 0.15);
        }

        .playlist-lesson-item.active .lesson-title-text {
          color: var(--color-primary-hover);
          font-weight: 600;
        }

        .playlist-lesson-left {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .playlist-play-indicator {
          width: 1.75rem;
          height: 1.75rem;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          color: var(--text-muted);
          transition: var(--transition-smooth);
        }

        .playlist-lesson-item.completed .playlist-play-indicator {
          background: var(--color-success-bg);
          color: var(--color-success);
        }

        .playlist-lesson-meta {
          display: flex;
          flex-direction: column;
        }

        .lesson-title-text {
          font-size: 0.875rem;
          color: #fff;
        }

        .lesson-duration-text {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .quiz-badge-icon {
          font-size: 0.9rem;
        }

        @media (max-width: 1024px) {
          .study-layout {
            grid-template-columns: 1fr;
          }
          .playlist-card {
            position: relative;
            top: 0;
          }
        }
      `})]})}function Qf(){var b;const{courses:e,activeCourseId:t,activeLessonId:n,submitQuiz:r,setCurrentView:l}=_e(),s=e.find(k=>k.id===t),o=(b=s==null?void 0:s.lessons)==null?void 0:b.find(k=>k.id===n),a=o==null?void 0:o.quiz,[u,d]=T.useState({}),[h,g]=T.useState(0),[p,y]=T.useState(!1),[x,j]=T.useState(null),[P,c]=T.useState(900);T.useEffect(()=>{if(p||P<=0)return;const k=setInterval(()=>{c(C=>C-1)},1e3);return()=>clearInterval(k)},[P,p]);const f=k=>{const C=Math.floor(k/60).toString().padStart(2,"0"),z=(k%60).toString().padStart(2,"0");return`${C}:${z}`},m=(k,C)=>{p||d({...u,[k]:C})},v=()=>{if(!a)return;const k=a.questions.map((z,L)=>u[L]!==void 0?u[L]:-1),C=r(t,n,k);j(C),y(!0)};if(!a)return i.jsxs("div",{className:"glass-card animate-fade-in text-center p-8",children:[i.jsx("h3",{children:"Bài học này không có bài tập trắc nghiệm"}),i.jsx("button",{className:"btn btn-primary mt-4",onClick:()=>l("study"),children:"Quay lại học bài"})]});const S=a.questions[h],w=(h+1)/a.questions.length*100;return i.jsxs("div",{className:"quiz-container animate-fade-in",children:[i.jsxs("div",{className:"quiz-header glass-card",children:[i.jsxs("div",{className:"quiz-header-top",children:[i.jsxs("div",{children:[i.jsx("span",{className:"badge badge-primary",children:s.title}),i.jsx("h2",{children:a.title})]}),i.jsxs("div",{className:"quiz-timer",children:[i.jsx("span",{className:"timer-icon",children:"⏳"}),i.jsx("span",{className:`timer-text ${P<60?"warning-pulse":""}`,children:p?"Đã nộp bài":f(P)})]})]}),i.jsxs("div",{className:"quiz-progress-section",children:[i.jsxs("div",{className:"quiz-progress-text",children:[i.jsxs("span",{children:["Câu hỏi ",h+1," / ",a.questions.length]}),i.jsxs("span",{children:["Tiến độ câu hỏi: ",Math.round(w),"%"]})]}),i.jsx("div",{className:"progress-container",children:i.jsx("div",{className:"progress-bar",style:{width:`${w}%`}})})]})]}),i.jsxs("div",{className:"quiz-body-layout",children:[i.jsx("div",{className:"quiz-questions-panel",children:p?i.jsxs("div",{className:"results-panel glass-card",children:[i.jsxs("div",{className:"score-summary",children:[i.jsxs("div",{className:"score-circle",children:[i.jsx("span",{className:"score-number",children:x==null?void 0:x.score}),i.jsx("span",{className:"score-label",children:"/10 Điểm"})]}),i.jsx("h3",{children:(x==null?void 0:x.score)>=8?"Xuất sắc! 🎉":(x==null?void 0:x.score)>=5?"Đạt yêu cầu 👍":"Chưa đạt 😢"}),i.jsx("p",{children:x==null?void 0:x.feedback}),i.jsxs("div",{className:"result-actions",children:[i.jsx("button",{className:"btn btn-primary",onClick:()=>l("study"),children:"Quay lại Học Bài"}),i.jsx("button",{className:"btn btn-secondary",onClick:()=>l("results"),children:"Xem bảng điểm của tôi"})]})]}),i.jsxs("div",{className:"review-section",children:[i.jsx("h3",{children:"Xem lại câu trả lời"}),a.questions.map((k,C)=>{const z=x==null?void 0:x.answers[C],L=z===k.correctIndex;return i.jsxs("div",{className:`review-item ${L?"correct-review":"wrong-review"}`,children:[i.jsxs("h4",{children:["Câu ",C+1,": ",k.text]}),i.jsx("div",{className:"review-options",children:k.options.map((V,W)=>{const Me=z===W,Ue=k.correctIndex===W;return i.jsxs("div",{className:`review-option-bubble ${Ue?"correct-bubble":Me?"wrong-bubble":""}`,children:[i.jsxs("span",{children:[String.fromCharCode(65+W),". ",V]}),Ue&&i.jsx("span",{className:"indicator-icon",children:"✓ Đáp án đúng"}),Me&&!Ue&&i.jsx("span",{className:"indicator-icon",children:"✗ Lựa chọn của bạn"})]},W)})})]},C)})]})]}):i.jsxs("div",{className:"question-card glass-card",children:[i.jsx("div",{className:"question-text",children:i.jsxs("h3",{children:["Câu ",h+1,": ",S.text]})}),i.jsx("div",{className:"options-list",children:S.options.map((k,C)=>{const z=u[h]===C;return i.jsxs("button",{className:`option-item ${z?"selected":""}`,onClick:()=>m(h,C),children:[i.jsx("span",{className:"option-letter",children:String.fromCharCode(65+C)}),i.jsx("span",{className:"option-text",children:k})]},C)})}),i.jsxs("div",{className:"question-navigation",children:[i.jsx("button",{className:"btn btn-secondary",disabled:h===0,onClick:()=>g(k=>k-1),children:"◀ Câu trước"}),h<a.questions.length-1?i.jsx("button",{className:"btn btn-primary",disabled:u[h]===void 0,onClick:()=>g(k=>k+1),children:"Câu tiếp theo ▶"}):i.jsx("button",{className:"btn btn-accent",onClick:v,children:"Nộp bài thi 🚀"})]})]})}),i.jsx("div",{className:"quiz-sidebar-panel",children:i.jsxs("div",{className:"question-map-card glass-card",children:[i.jsx("h3",{children:"Bản đồ câu hỏi"}),i.jsx("div",{className:"question-grid",children:a.questions.map((k,C)=>{const z=u[C]!==void 0,L=h===C;return i.jsx("button",{className:`map-number ${L?"active":""} ${z?"answered":""} ${p?(x==null?void 0:x.answers[C])===a.questions[C].correctIndex?"correct":"wrong":""}`,onClick:()=>g(C),children:C+1},C)})}),!p&&i.jsxs("div",{className:"map-legend",children:[i.jsxs("div",{className:"legend-item",children:[i.jsx("span",{className:"dot active"}),"Đang làm"]}),i.jsxs("div",{className:"legend-item",children:[i.jsx("span",{className:"dot answered"}),"Đã chọn"]}),i.jsxs("div",{className:"legend-item",children:[i.jsx("span",{className:"dot"}),"Chưa làm"]})]})]})})]}),i.jsx("style",{children:`
        .quiz-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .quiz-header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .quiz-timer {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-md);
        }

        .timer-text {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.2rem;
          color: var(--color-secondary);
        }

        .warning-pulse {
          color: var(--color-error);
          animation: pulse 1s infinite;
        }

        .quiz-progress-section {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .quiz-progress-text {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .quiz-body-layout {
          display: grid;
          grid-template-columns: 2.2fr 1fr;
          gap: 2rem;
          align-items: start;
        }

        /* Question Card */
        .question-card {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .options-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .option-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          border: 1px solid var(--border-glass);
          background: rgba(255,255,255,0.02);
          border-radius: var(--radius-md);
          color: var(--text-muted);
          font-family: var(--font-body);
          font-size: 1rem;
          cursor: pointer;
          transition: var(--transition-smooth);
          width: 100%;
          text-align: left;
        }

        .option-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
          color: #fff;
        }

        .option-item.selected {
          border-color: var(--color-primary);
          background: var(--color-primary-glow);
          color: #fff;
        }

        .option-letter {
          width: 2rem;
          height: 2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          transition: var(--transition-smooth);
        }

        .option-item.selected .option-letter {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: #fff;
        }

        .question-navigation {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid var(--border-glass);
          padding-top: 1.5rem;
        }

        /* Results panel */
        .results-panel {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .score-summary {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .score-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: var(--color-primary-glow);
          border: 3px solid var(--color-primary);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 25px rgba(139, 92, 246, 0.3);
        }

        .score-number {
          font-size: 2.8rem;
          font-weight: 800;
          color: #fff;
          font-family: var(--font-heading);
          line-height: 1;
        }

        .score-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 600;
        }

        .result-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .review-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .review-item {
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-glass);
        }

        .correct-review {
          border-color: rgba(16, 185, 129, 0.25);
          background: rgba(16, 185, 129, 0.02);
        }

        .wrong-review {
          border-color: rgba(239, 68, 68, 0.25);
          background: rgba(239, 68, 68, 0.02);
        }

        .review-options {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .review-option-bubble {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          background: rgba(0,0,0,0.2);
        }

        .correct-bubble {
          border-color: var(--color-success);
          background: rgba(16, 185, 129, 0.1);
          color: #fff;
        }

        .wrong-bubble {
          border-color: var(--color-error);
          background: rgba(239, 68, 68, 0.1);
          color: #fff;
        }

        .indicator-icon {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        /* Question map */
        .question-map-card {
          position: sticky;
          top: 100px;
        }

        .question-map-card h3 {
          margin-bottom: 1.5rem;
        }

        .question-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .map-number {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-glass);
          background: rgba(255,255,255,0.02);
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .map-number:hover {
          border-color: rgba(255, 255, 255, 0.15);
          color: #fff;
        }

        .map-number.active {
          border-color: var(--color-primary);
          color: #fff;
        }

        .map-number.answered {
          background: rgba(139, 92, 246, 0.1);
          border-color: rgba(139, 92, 246, 0.4);
          color: var(--color-primary-hover);
        }

        .map-number.correct {
          background: var(--color-success-bg);
          border-color: var(--color-success);
          color: var(--color-success);
        }

        .map-number.wrong {
          background: var(--color-error-bg);
          border-color: var(--color-error);
          color: var(--color-error);
        }

        .map-legend {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          border-top: 1px solid var(--border-glass);
          padding-top: 1rem;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
        }

        .dot.active {
          background: var(--color-primary);
          box-shadow: 0 0 10px var(--color-primary);
        }

        .dot.answered {
          background: var(--color-primary-hover);
        }

        @media (max-width: 1024px) {
          .quiz-body-layout {
            grid-template-columns: 1fr;
          }
          .question-map-card {
            position: relative;
            top: 0;
          }
        }
      `})]})}function Wf(){const{currentUser:e,submissions:t,courses:n}=_e(),[r,l]=T.useState(null),s=t.filter(d=>d.studentId===(e==null?void 0:e.id)),o=s.filter(d=>d.score!==null),a=o.length>0?(o.reduce((d,h)=>d+h.score,0)/o.length).toFixed(1):"N/A",u=(e==null?void 0:e.certificates)||[];return i.jsxs("div",{className:"results-view-layout animate-fade-in",children:[i.jsxs("div",{className:"overview-stats-grid col-span-3",children:[i.jsxs("div",{className:"stats-card glass-card",children:[i.jsx("div",{className:"stats-icon text-success",children:"📈"}),i.jsx("div",{className:"stats-num",children:a}),i.jsx("div",{className:"stats-label",children:"Điểm Trung Bình Trắc Nghiệm"})]}),i.jsxs("div",{className:"stats-card glass-card",children:[i.jsx("div",{className:"stats-icon text-primary",children:"📝"}),i.jsx("div",{className:"stats-num",children:s.length}),i.jsx("div",{className:"stats-label",children:"Bài Tập Đã Nộp"})]}),i.jsxs("div",{className:"stats-card glass-card",children:[i.jsx("div",{className:"stats-icon text-warning",children:"🎓"}),i.jsx("div",{className:"stats-num",children:u.length}),i.jsx("div",{className:"stats-label",children:"Chứng Chỉ Nhận Được"})]})]}),i.jsxs("div",{className:"transcript-section glass-card",children:[i.jsx("h3",{children:"Bảng điểm chi tiết"}),i.jsx("div",{className:"table-container",children:i.jsxs("table",{className:"lms-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Khóa Học / Bài Học"}),i.jsx("th",{children:"Thời Gian Nộp"}),i.jsx("th",{children:"Trạng Thái"}),i.jsx("th",{children:"Điểm Số"}),i.jsx("th",{children:"Nhận Xét"})]})}),i.jsxs("tbody",{children:[s.map(d=>i.jsxs("tr",{children:[i.jsxs("td",{children:[i.jsx("div",{className:"sub-course-title",children:d.courseTitle}),i.jsx("div",{className:"sub-lesson-title",children:d.lessonTitle})]}),i.jsx("td",{children:new Date(d.submittedAt).toLocaleString("vi-VN")}),i.jsx("td",{children:i.jsx("span",{className:`badge ${d.status==="graded"?"badge-success":"badge-warning"}`,children:d.status==="graded"?"Đã chấm":"Chờ chấm"})}),i.jsx("td",{children:i.jsx("strong",{className:"sub-score",children:d.score!==null?`${d.score}/10`:"-"})}),i.jsx("td",{className:"sub-feedback",children:d.feedback||"Chưa có nhận xét."})]},d.id)),s.length===0&&i.jsx("tr",{children:i.jsx("td",{colSpan:"5",className:"text-center",children:"Bạn chưa thực hiện bài tập nào."})})]})]})})]}),i.jsxs("div",{className:"certificates-section glass-card",children:[i.jsx("h3",{children:"Chứng chỉ của bạn"}),i.jsx("p",{className:"mb-4",children:"Hoàn thành 100% khóa học để nhận chứng chỉ chính thức."}),i.jsxs("div",{className:"cert-grid",children:[u.map(d=>i.jsxs("div",{className:"cert-mini-card glass-card interactive",onClick:()=>l(d),children:[i.jsx("div",{className:"cert-mini-badge",children:"🎓"}),i.jsx("h4",{children:d.courseTitle}),i.jsxs("p",{children:["Mã số: ",d.code]}),i.jsxs("span",{className:"cert-date",children:["Cấp ngày: ",d.date]})]},d.id)),u.length===0&&i.jsxs("div",{className:"empty-cert-state",children:[i.jsx("span",{children:"🔒"}),i.jsx("p",{children:"Chưa có chứng chỉ nào. Hoàn thành toàn bộ bài học trong một khóa học để mở khóa chứng chỉ."})]})]})]}),r&&i.jsx("div",{className:"cert-modal-backdrop",onClick:()=>l(null),children:i.jsxs("div",{className:"cert-modal-content glass-card animate-fade-in",onClick:d=>d.stopPropagation(),children:[i.jsx("button",{className:"close-modal-btn",onClick:()=>l(null),children:"×"}),i.jsx("div",{className:"certificate-design",children:i.jsxs("div",{className:"cert-border",children:[i.jsx("div",{className:"cert-logo",children:"ANTIGRAVITY ACADEMY"}),i.jsx("div",{className:"cert-title",children:"CHỨNG CHỈ HOÀN THÀNH"}),i.jsx("div",{className:"cert-subtitle",children:"Chứng nhận học viên"}),i.jsx("div",{className:"cert-recipient-name",children:e.name}),i.jsxs("div",{className:"cert-description",children:["Đã hoàn thành xuất sắc khóa học chuyên sâu",i.jsx("h3",{children:r.courseTitle}),"với các tiêu chuẩn đào tạo công nghệ cao cấp."]}),i.jsxs("div",{className:"cert-footer-row",children:[i.jsxs("div",{className:"cert-signature-block",children:[i.jsx("div",{className:"cert-sig-line",children:"Antigravity AI"}),i.jsx("span",{children:"Ban Giám Đốc Học Viện"})]}),i.jsxs("div",{className:"cert-meta-block",children:[i.jsxs("div",{children:["Ngày cấp: ",r.date]}),i.jsxs("div",{children:["Mã xác minh: ",r.code]})]})]})]})}),i.jsx("div",{className:"modal-actions",children:i.jsx("button",{className:"btn btn-primary",onClick:()=>alert("Đang tải xuống chứng chỉ PDF giả lập..."),children:"📥 Tải xuống PDF"})})]})}),i.jsx("style",{children:`
        .results-view-layout {
          display: grid;
          grid-template-columns: 2fr 1.2fr;
          gap: 2rem;
        }

        .overview-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 0.5rem;
        }

        .transcript-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .sub-course-title {
          font-weight: 600;
          color: #fff;
        }

        .sub-lesson-title {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .sub-score {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          color: var(--color-secondary-hover);
        }

        .sub-feedback {
          font-size: 0.875rem;
          color: var(--text-muted);
          max-width: 300px;
        }

        /* Certificates Section */
        .certificates-section {
          height: fit-content;
        }

        .cert-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cert-mini-card {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          cursor: pointer;
        }

        .cert-mini-badge {
          font-size: 1.8rem;
        }

        .cert-mini-card h4 {
          font-size: 1rem;
          margin: 0;
        }

        .cert-mini-card p {
          font-size: 0.75rem;
          margin: 0;
        }

        .cert-date {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .empty-cert-state {
          text-align: center;
          padding: 2.5rem 1rem;
          border: 1px dashed var(--border-glass);
          border-radius: var(--radius-md);
          color: var(--text-muted);
        }

        .empty-cert-state span {
          font-size: 2rem;
          display: block;
          margin-bottom: 0.5rem;
        }

        .empty-cert-state p {
          font-size: 0.85rem;
        }

        /* Certificate Modal */
        .cert-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .cert-modal-content {
          width: 90%;
          max-width: 800px;
          padding: 2rem;
          background: #11131f;
          border-color: rgba(255, 255, 255, 0.15);
          position: relative;
        }

        .close-modal-btn {
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          font-size: 2rem;
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .close-modal-btn:hover {
          color: #fff;
        }

        .certificate-design {
          background: radial-gradient(circle, #1a1c2e 0%, #0d0f19 100%);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 2rem;
          color: #fff;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        .cert-border {
          border: 2px solid rgba(255, 255, 255, 0.05);
          padding: 3rem 2rem;
          border-radius: var(--radius-sm);
          position: relative;
        }

        .cert-logo {
          font-family: var(--font-heading);
          font-weight: 800;
          letter-spacing: 0.1em;
          color: var(--color-primary-hover);
          margin-bottom: 2rem;
        }

        .cert-title {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.5rem;
        }

        .cert-subtitle {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .cert-recipient-name {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--color-secondary-hover);
          margin-bottom: 2rem;
          text-decoration: underline;
        }

        .cert-description {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 500px;
          margin: 0 auto 3rem;
          line-height: 1.8;
        }

        .cert-description h3 {
          color: #fff;
          font-size: 1.5rem;
          margin: 0.5rem 0;
        }

        .cert-footer-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 0 2rem;
        }

        .cert-signature-block {
          text-align: left;
        }

        .cert-sig-line {
          font-family: 'Great Vibes', cursive, sans-serif;
          font-size: 1.5rem;
          border-bottom: 1px solid var(--border-glass);
          padding-bottom: 0.5rem;
          margin-bottom: 0.25rem;
          color: var(--color-primary-hover);
        }

        .cert-signature-block span {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .cert-meta-block {
          text-align: right;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .modal-actions {
          display: flex;
          justify-content: center;
          margin-top: 1.5rem;
        }

        @media (max-width: 1024px) {
          .results-view-layout {
            grid-template-columns: 1fr;
          }
          .overview-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function qf(){var P;const{classes:e,courses:t}=_e(),[n,r]=T.useState((P=e[0])==null?void 0:P.id),[l,s]=T.useState(!1),[o,a]=T.useState(""),[u,d]=T.useState(e),h=u.find(c=>c.id===n),g=t.find(c=>c.id===(h==null?void 0:h.courseId)),[p,y]=T.useState(()=>{const c={};return e.forEach(f=>{c[f.id]={},f.students.forEach(m=>{c[f.id][m.id]=!0})}),c}),x=(c,f)=>{y({...p,[c]:{...p[c],[f]:!p[c][f]}})},j=c=>{if(c.preventDefault(),!o.trim()||!h)return;const f={id:`std_${Date.now()}`,name:o,progress:0,averageScore:null},m=u.map(v=>v.id===h.id?{...v,students:[...v.students,f]}:v);d(m),y({...p,[h.id]:{...p[h.id],[f.id]:!0}}),a(""),s(!1)};return i.jsxs("div",{className:"classroom-layout animate-fade-in",children:[i.jsxs("div",{className:"classroom-sidebar glass-card",children:[i.jsx("h3",{children:"Danh sách lớp học"}),i.jsx("div",{className:"classroom-list",children:u.map(c=>i.jsxs("button",{className:`class-item-btn ${c.id===n?"active":""}`,onClick:()=>r(c.id),children:[i.jsx("div",{className:"class-item-title",children:c.name}),i.jsxs("div",{className:"class-item-meta",children:["Sĩ số: ",c.students.length," học viên"]})]},c.id))})]}),h&&i.jsxs("div",{className:"classroom-details",children:[i.jsxs("div",{className:"class-header-card glass-card",children:[i.jsxs("div",{className:"class-header-info",children:[i.jsx("h2",{children:h.name}),i.jsxs("p",{children:["Môn học: ",i.jsx("strong",{children:g==null?void 0:g.title})]}),i.jsxs("p",{children:["Lịch học: ",i.jsxs("span",{children:["⏱ ",h.schedule]})]})]}),i.jsx("div",{className:"class-header-actions",children:i.jsx("button",{className:"btn btn-primary",onClick:()=>s(!0),children:"+ Thêm học viên"})})]}),i.jsxs("div",{className:"class-roster-card glass-card",children:[i.jsx("h3",{children:"Danh sách học viên & Tiến trình"}),i.jsx("div",{className:"table-container",children:i.jsxs("table",{className:"lms-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Học viên"}),i.jsx("th",{children:"Tiến trình khóa học"}),i.jsx("th",{children:"Điểm TB"}),i.jsx("th",{children:"Điểm danh hôm nay"})]})}),i.jsx("tbody",{children:h.students.map(c=>{var m;const f=((m=p[h.id])==null?void 0:m[c.id])!==!1;return i.jsxs("tr",{children:[i.jsx("td",{children:i.jsxs("div",{className:"student-profile-cell",children:[i.jsx("span",{className:"student-icon",children:"👤"}),i.jsx("span",{children:c.name})]})}),i.jsx("td",{children:i.jsxs("div",{className:"progress-cell",children:[i.jsxs("span",{children:[c.progress,"%"]}),i.jsx("div",{className:"progress-container",children:i.jsx("div",{className:"progress-bar",style:{width:`${c.progress}%`}})})]})}),i.jsx("td",{children:i.jsx("strong",{className:"score-text",children:c.averageScore!==null?`${c.averageScore}/10`:"-"})}),i.jsx("td",{children:i.jsx("button",{className:`btn btn-sm ${f?"btn-success":"btn-secondary"}`,onClick:()=>x(h.id,c.id),children:f?"✓ Có mặt":"✗ Vắng mặt"})})]},c.id)})})]})})]}),i.jsxs("div",{className:"class-analytics-grid",children:[i.jsxs("div",{className:"glass-card",children:[i.jsx("h3",{children:"Thống kê điểm danh hôm nay"}),i.jsxs("div",{className:"attendance-percentage-radial",children:[i.jsxs("svg",{viewBox:"0 0 100 100",className:"radial-progress-svg",children:[i.jsx("circle",{className:"radial-bg",cx:"50",cy:"50",r:"40"}),i.jsx("circle",{className:"radial-fill",cx:"50",cy:"50",r:"40",strokeDasharray:"251.2",strokeDashoffset:251.2-251.2*(Object.values(p[h.id]||{}).filter(Boolean).length/(h.students.length||1))})]}),i.jsxs("div",{className:"radial-inner-text",children:[i.jsxs("span",{className:"percentage",children:[Math.round(Object.values(p[h.id]||{}).filter(Boolean).length/(h.students.length||1)*100),"%"]}),i.jsx("span",{className:"label",children:"Hiện diện"})]})]})]}),i.jsxs("div",{className:"glass-card",children:[i.jsx("h3",{children:"Phân bổ tiến trình học tập"}),i.jsxs("div",{className:"progress-histogram",children:[i.jsxs("div",{className:"histogram-bar-item",children:[i.jsx("div",{className:"hist-bar",style:{height:`${h.students.filter(c=>c.progress>=80).length/h.students.length*120}px`}}),i.jsx("span",{className:"hist-label",children:"Xuất sắc (>80%)"})]}),i.jsxs("div",{className:"histogram-bar-item",children:[i.jsx("div",{className:"hist-bar",style:{height:`${h.students.filter(c=>c.progress>=40&&c.progress<80).length/h.students.length*120}px`}}),i.jsx("span",{className:"hist-label",children:"Khá (40-80%)"})]}),i.jsxs("div",{className:"histogram-bar-item",children:[i.jsx("div",{className:"hist-bar",style:{height:`${h.students.filter(c=>c.progress<40).length/h.students.length*120}px`}}),i.jsx("span",{className:"hist-label",children:"Yếu (<40%)"})]})]})]})]})]}),l&&i.jsx("div",{className:"cert-modal-backdrop",onClick:()=>s(!1),children:i.jsxs("div",{className:"cert-modal-content glass-card animate-fade-in",style:{maxWidth:"400px"},onClick:c=>c.stopPropagation(),children:[i.jsx("button",{className:"close-modal-btn",onClick:()=>s(!1),children:"×"}),i.jsx("h3",{children:"Thêm học viên vào lớp"}),i.jsxs("form",{onSubmit:j,className:"login-form mt-4",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Tên học viên"}),i.jsx("input",{type:"text",className:"form-input",placeholder:"Nhập họ và tên...",value:o,onChange:c=>a(c.target.value),required:!0,autoFocus:!0})]}),i.jsx("div",{className:"modal-actions mt-4",children:i.jsx("button",{type:"submit",className:"btn btn-primary",children:"Xác nhận thêm"})})]})]})}),i.jsx("style",{children:`
        .classroom-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2rem;
          align-items: start;
        }

        .classroom-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          height: fit-content;
        }

        .classroom-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .class-item-btn {
          width: 100%;
          text-align: left;
          padding: 1rem;
          border-radius: var(--radius-md);
          background: transparent;
          border: 1px solid transparent;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .class-item-btn:hover {
          background: rgba(255, 255, 255, 0.03);
        }

        .class-item-btn.active {
          background: var(--color-primary-glow);
          border-color: rgba(139, 92, 246, 0.2);
        }

        .class-item-title {
          font-weight: 600;
          color: #fff;
          font-family: var(--font-heading);
        }

        .class-item-meta {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .classroom-details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .class-header-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%);
        }

        .class-header-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .student-profile-cell {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .student-icon {
          width: 2rem;
          height: 2rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-glass);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .progress-cell {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          max-width: 250px;
        }

        .score-text {
          color: var(--color-secondary-hover);
          font-family: var(--font-heading);
        }

        .class-analytics-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2rem;
        }

        .attendance-percentage-radial {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 120px;
          height: 120px;
          margin: 1rem auto 0;
        }

        .progress-histogram {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          height: 120px;
          border-bottom: 1px solid var(--border-glass);
          padding-top: 1rem;
        }

        .histogram-bar-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 80px;
        }

        .hist-bar {
          width: 32px;
          background: linear-gradient(180deg, var(--color-secondary-hover) 0%, var(--color-secondary) 100%);
          border-radius: 4px 4px 0 0;
          box-shadow: 0 4px 15px rgba(6, 182, 212, 0.2);
          transition: height 0.5s ease-out;
        }

        .hist-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.5rem;
          text-align: center;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .classroom-layout {
            grid-template-columns: 1fr;
          }
          .class-analytics-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Kf(){var Ve,_t,Os;const{courses:e,addCourse:t,addLesson:n}=_e(),[r,l]=T.useState(((Ve=e[0])==null?void 0:Ve.id)||""),[s,o]=T.useState(!1),[a,u]=T.useState(!1),[d,h]=T.useState(""),[g,p]=T.useState(""),[y,x]=T.useState("20 giờ"),[j,P]=T.useState("linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"),[c,f]=T.useState(""),[m,v]=T.useState("15 phút"),[S,w]=T.useState("https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-computer-34281-large.mp4"),[b,k]=T.useState(""),[C,z]=T.useState(!1),[L,V]=T.useState(""),[W,Me]=T.useState(""),[Ue,st]=T.useState(""),[J,_]=T.useState(""),[M,D]=T.useState(""),[$,F]=T.useState(0),ne=e.find(I=>I.id===r),De=I=>{I.preventDefault(),d.trim()&&(t({title:d,description:g,duration:y,thumbnail:j}),h(""),p(""),o(!1),alert("Khóa học mới đã được tạo thành công!"))},xn=I=>{if(I.preventDefault(),!c.trim()||!r)return;let ar=null;C&&L.trim()&&(ar={id:`quiz_${Date.now()}`,title:`Trắc nghiệm: ${c}`,questions:[{id:`q_${Date.now()}`,text:L,options:[W,Ue,J,M].filter(Boolean),correctIndex:parseInt($)}]}),n(r,{title:c,duration:m,videoUrl:S,content:b,quiz:ar}),f(""),k(""),z(!1),V(""),Me(""),st(""),_(""),D(""),u(!1),alert("Bài học mới đã được thêm thành công!")};return i.jsxs("div",{className:"builder-layout animate-fade-in",children:[i.jsx("div",{className:"builder-header-bar glass-card col-span-3",children:i.jsxs("div",{className:"builder-select-row",children:[i.jsxs("div",{className:"form-group mb-0",children:[i.jsx("label",{className:"form-label",children:"Chọn khóa học cần biên soạn"}),i.jsx("select",{className:"form-select",value:r,onChange:I=>l(I.target.value),children:e.map(I=>i.jsx("option",{value:I.id,children:I.title},I.id))})]}),i.jsx("button",{className:"btn btn-accent",onClick:()=>o(!0),children:"+ Khóa học mới"})]})}),i.jsx("div",{className:"builder-workspace-grid",children:ne?i.jsxs("div",{className:"outline-card glass-card",children:[i.jsxs("div",{className:"outline-header",children:[i.jsx("h3",{children:"Đề cương khóa học"}),i.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>u(!0),children:"+ Thêm bài học"})]}),i.jsxs("div",{className:"outline-meta",children:[i.jsx("div",{className:"course-gradient-preview",style:{background:ne.thumbnail}}),i.jsxs("div",{children:[i.jsx("h4",{children:ne.title}),i.jsx("p",{children:ne.description}),i.jsxs("span",{children:["⏱ Tổng thời lượng: ",ne.duration]})]})]}),i.jsxs("div",{className:"lessons-outline-list",children:[i.jsxs("h4",{children:["Danh mục bài học (",((_t=ne.lessons)==null?void 0:_t.length)||0,")"]}),(Os=ne.lessons)==null?void 0:Os.map((I,ar)=>i.jsxs("div",{className:"outline-lesson-item",children:[i.jsxs("div",{className:"les-outline-meta",children:[i.jsx("span",{className:"les-idx",children:ar+1}),i.jsxs("div",{children:[i.jsx("div",{className:"les-name",children:I.title}),i.jsxs("span",{className:"les-dur",children:["Thời lượng: ",I.duration]})]})]}),i.jsxs("div",{className:"les-badges",children:[I.quiz&&i.jsx("span",{className:"badge badge-success",children:"Có trắc nghiệm"}),i.jsx("span",{className:"badge badge-primary",children:"Video"})]})]},I.id)),(!ne.lessons||ne.lessons.length===0)&&i.jsx("div",{className:"empty-lessons-state",children:"Chưa có bài học nào. Hãy nhấp nút thêm bài học phía trên."})]})]}):i.jsx("div",{className:"glass-card text-center p-8",children:i.jsx("h3",{children:"Vui lòng chọn hoặc tạo mới một khóa học"})})}),s&&i.jsx("div",{className:"cert-modal-backdrop",onClick:()=>o(!1),children:i.jsxs("div",{className:"cert-modal-content glass-card animate-fade-in",style:{maxWidth:"500px"},onClick:I=>I.stopPropagation(),children:[i.jsx("button",{className:"close-modal-btn",onClick:()=>o(!1),children:"×"}),i.jsx("h3",{children:"Tạo khóa học mới"}),i.jsxs("form",{onSubmit:De,className:"login-form mt-4",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Tên khóa học"}),i.jsx("input",{type:"text",className:"form-input",placeholder:"Ví dụ: Lập trình Python ứng dụng...",value:d,onChange:I=>h(I.target.value),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Mô tả ngắn"}),i.jsx("textarea",{className:"form-input form-textarea",placeholder:"Mô tả nội dung cốt lõi của khóa học...",value:g,onChange:I=>p(I.target.value),required:!0})]}),i.jsxs("div",{className:"grid-2 mb-4",children:[i.jsxs("div",{className:"form-group mb-0",children:[i.jsx("label",{className:"form-label",children:"Thời lượng dự kiến"}),i.jsx("input",{type:"text",className:"form-input",value:y,onChange:I=>x(I.target.value)})]}),i.jsxs("div",{className:"form-group mb-0",children:[i.jsx("label",{className:"form-label",children:"Tone màu (Gradient)"}),i.jsxs("select",{className:"form-select",value:j,onChange:I=>P(I.target.value),children:[i.jsx("option",{value:"linear-gradient(135deg, #f6d365 0%, #fda085 100%)",children:"Sun Gold"}),i.jsx("option",{value:"linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",children:"Sky Blue"}),i.jsx("option",{value:"linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)",children:"Silver Light"}),i.jsx("option",{value:"linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",children:"Warm Pink"})]})]})]}),i.jsx("div",{className:"modal-actions",children:i.jsx("button",{type:"submit",className:"btn btn-primary",children:"Xác nhận Tạo"})})]})]})}),a&&i.jsx("div",{className:"cert-modal-backdrop",onClick:()=>u(!1),children:i.jsxs("div",{className:"cert-modal-content glass-card animate-fade-in",style:{maxWidth:"650px",maxHeight:"90vh",overflowY:"auto"},onClick:I=>I.stopPropagation(),children:[i.jsx("button",{className:"close-modal-btn",onClick:()=>u(!1),children:"×"}),i.jsx("h3",{children:"Thêm bài học mới"}),i.jsxs("form",{onSubmit:xn,className:"login-form mt-4",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Tên bài học"}),i.jsx("input",{type:"text",className:"form-input",placeholder:"Ví dụ: Bài 1: Giới thiệu cú pháp cơ bản",value:c,onChange:I=>f(I.target.value),required:!0})]}),i.jsxs("div",{className:"grid-2",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Thời lượng phát"}),i.jsx("input",{type:"text",className:"form-input",value:m,onChange:I=>v(I.target.value)})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Link video bài giảng (MP4)"}),i.jsx("input",{type:"text",className:"form-input",value:S,onChange:I=>w(I.target.value)})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Nội dung chi tiết"}),i.jsx("textarea",{className:"form-input form-textarea",placeholder:"Nhập nội dung giảng dạy tóm tắt của video...",value:b,onChange:I=>k(I.target.value)})]}),i.jsxs("div",{className:"quiz-creator-section mb-4",children:[i.jsxs("div",{className:"flex-checkbox mb-2",children:[i.jsx("input",{type:"checkbox",id:"hasQuiz",checked:C,onChange:I=>z(I.target.checked)}),i.jsx("label",{htmlFor:"hasQuiz",className:"form-label inline ml-2 cursor-pointer",children:"Đính kèm bài trắc nghiệm nhanh cho bài học này"})]}),C&&i.jsxs("div",{className:"quiz-creator-fields glass-card p-4 mt-2",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Câu hỏi trắc nghiệm"}),i.jsx("input",{type:"text",className:"form-input",placeholder:"Nhập câu hỏi...",value:L,onChange:I=>V(I.target.value),required:C})]}),i.jsxs("div",{className:"grid-2",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Đáp án A"}),i.jsx("input",{type:"text",className:"form-input",value:W,onChange:I=>Me(I.target.value),required:C})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Đáp án B"}),i.jsx("input",{type:"text",className:"form-input",value:Ue,onChange:I=>st(I.target.value),required:C})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Đáp án C"}),i.jsx("input",{type:"text",className:"form-input",value:J,onChange:I=>_(I.target.value)})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Đáp án D"}),i.jsx("input",{type:"text",className:"form-input",value:M,onChange:I=>D(I.target.value)})]})]}),i.jsxs("div",{className:"form-group mb-0",children:[i.jsx("label",{className:"form-label",children:"Đáp án đúng"}),i.jsxs("select",{className:"form-select",value:$,onChange:I=>F(I.target.value),children:[i.jsx("option",{value:0,children:"Đáp án A"}),i.jsx("option",{value:1,children:"Đáp án B"}),i.jsx("option",{value:2,children:"Đáp án C"}),i.jsx("option",{value:3,children:"Đáp án D"})]})]})]})]}),i.jsx("div",{className:"modal-actions",children:i.jsx("button",{type:"submit",className:"btn btn-primary",children:"Thêm bài học"})})]})]})}),i.jsx("style",{children:`
        .builder-layout {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .builder-select-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .builder-workspace-grid {
          display: grid;
          grid-template-columns: 1fr;
        }

        .outline-card {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .outline-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .outline-meta {
          display: flex;
          gap: 1.5rem;
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-glass);
          padding: 1.25rem;
          border-radius: var(--radius-md);
        }

        .course-gradient-preview {
          width: 100px;
          height: 100px;
          border-radius: var(--radius-sm);
        }

        .lessons-outline-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .outline-lesson-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-glass);
          background: rgba(255,255,255,0.01);
        }

        .les-outline-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .les-idx {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: var(--text-muted);
        }

        .les-name {
          font-weight: 600;
          color: #fff;
        }

        .les-dur {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .les-badges {
          display: flex;
          gap: 0.5rem;
        }

        .empty-lessons-state {
          text-align: center;
          padding: 2rem;
          color: var(--text-muted);
          border: 1px dashed var(--border-glass);
          border-radius: var(--radius-md);
        }

        .flex-checkbox {
          display: flex;
          align-items: center;
        }

        .flex-checkbox input {
          width: 1.2rem;
          height: 1.2rem;
          cursor: pointer;
        }

        .quiz-creator-fields {
          border-color: rgba(6, 182, 212, 0.25);
          background: rgba(6, 182, 212, 0.02);
        }
      `})]})}function Gf(){var f;const{submissions:e,courses:t,gradeSubmission:n}=_e(),[r,l]=T.useState("pending"),[s,o]=T.useState(null),[a,u]=T.useState(10),[d,h]=T.useState(""),g=e.filter(m=>r==="all"?!0:m.status===r),p=e.find(m=>m.id===s),y=t.find(m=>m.id===(p==null?void 0:p.courseId)),x=(f=y==null?void 0:y.lessons)==null?void 0:f.find(m=>m.id===(p==null?void 0:p.lessonId)),j=x==null?void 0:x.quiz,P=m=>{o(m.id),u(m.score!==null?m.score:10),h(m.feedback||"")},c=m=>{m.preventDefault(),s&&(n(s,a,d),alert(`Đã chấm điểm thành công cho học viên ${p.studentName}!`),o(null))};return i.jsxs("div",{className:"grading-layout animate-fade-in",children:[i.jsxs("div",{className:"grading-inbox glass-card",children:[i.jsxs("div",{className:"inbox-header",children:[i.jsx("h3",{children:"Hộp thư bài tập nộp"}),i.jsxs("div",{className:"filter-buttons mt-2",children:[i.jsxs("button",{className:`btn btn-sm ${r==="pending"?"btn-primary":"btn-secondary"}`,onClick:()=>{l("pending"),o(null)},children:["Chờ chấm (",e.filter(m=>m.status==="pending").length,")"]}),i.jsxs("button",{className:`btn btn-sm ${r==="graded"?"btn-primary":"btn-secondary"}`,onClick:()=>{l("graded"),o(null)},children:["Đã chấm (",e.filter(m=>m.status==="graded").length,")"]})]})]}),i.jsxs("div",{className:"inbox-list",children:[g.map(m=>i.jsxs("button",{className:`inbox-item-btn ${m.id===s?"active":""}`,onClick:()=>P(m),children:[i.jsxs("div",{className:"inbox-item-row-top",children:[i.jsx("strong",{children:m.studentName}),i.jsx("span",{className:"inbox-item-time",children:new Date(m.submittedAt).toLocaleDateString("vi-VN")})]}),i.jsx("div",{className:"inbox-item-course",children:m.courseTitle}),i.jsx("div",{className:"inbox-item-lesson",children:m.lessonTitle}),i.jsx("div",{className:"inbox-item-footer",children:i.jsx("span",{className:`badge ${m.status==="graded"?"badge-success":"badge-warning"}`,children:m.status==="graded"?`Điểm: ${m.score}`:"Chờ chấm"})})]},m.id)),g.length===0&&i.jsx("div",{className:"empty-inbox-state",children:"Hộp thư trống. Không có bài nộp nào phù hợp."})]})]}),i.jsx("div",{className:"grading-workspace",children:p?i.jsxs("div",{className:"workspace-flex",children:[i.jsxs("div",{className:"student-work-card glass-card",children:[i.jsxs("div",{className:"workspace-header",children:[i.jsx("h3",{children:"Chi tiết bài làm"}),i.jsxs("span",{className:"badge badge-primary",children:["Bài nộp #",p.id.split("_")[1]]})]}),i.jsxs("div",{className:"student-metadata",children:[i.jsxs("p",{children:["Học viên: ",i.jsx("strong",{children:p.studentName})]}),i.jsxs("p",{children:["Khóa học: ",i.jsx("span",{children:p.courseTitle})]}),i.jsxs("p",{children:["Bài học: ",i.jsx("span",{children:p.lessonTitle})]}),i.jsxs("p",{children:["Nộp lúc: ",i.jsx("span",{children:new Date(p.submittedAt).toLocaleString("vi-VN")})]})]}),j?i.jsxs("div",{className:"grading-questions-list",children:[i.jsx("h4",{children:"Đáp án học viên chọn"}),j.questions.map((m,v)=>{const S=p.answers[v],w=S===m.correctIndex;return i.jsxs("div",{className:`grading-question-item ${w?"correct":"wrong"}`,children:[i.jsxs("h5",{children:["Câu ",v+1,": ",m.text]}),i.jsxs("div",{className:"grading-answers-comparison mt-2",children:[i.jsxs("p",{children:["Học viên chọn: ",i.jsxs("strong",{children:[String.fromCharCode(65+S),". ",m.options[S]||"Chưa trả lời"]})]}),i.jsxs("p",{children:["Đáp án đúng: ",i.jsxs("span",{className:"text-success",children:[String.fromCharCode(65+m.correctIndex),". ",m.options[m.correctIndex]]})]})]})]},v)})]}):i.jsx("div",{className:"grading-questions-list",children:i.jsxs("p",{children:["Đáp án học viên đã nộp: ",JSON.stringify(p.answers)]})})]}),i.jsxs("div",{className:"grading-editor-card glass-card",children:[i.jsx("h3",{children:"Chấm điểm & Nhận xét"}),i.jsxs("form",{onSubmit:c,className:"login-form mt-4",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Điểm số (Thang điểm 10)"}),i.jsxs("div",{className:"score-slider-container",children:[i.jsx("input",{type:"range",min:"0",max:"10",step:"0.5",className:"score-range-slider",value:a,onChange:m=>u(parseFloat(m.target.value))}),i.jsx("div",{className:"score-display-glowing",children:a})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Nhận xét chi tiết"}),i.jsx("textarea",{className:"form-input form-textarea",placeholder:"Viết nhận xét của bạn về bài làm này...",value:d,onChange:m=>h(m.target.value),required:!0})]}),i.jsx("button",{type:"submit",className:"btn btn-primary w-full",children:"Lưu điểm số & Gửi phản hồi"})]})]})]}):i.jsxs("div",{className:"empty-workspace-card glass-card",children:[i.jsx("span",{children:"👈"}),i.jsx("h3",{children:"Chọn một bài nộp bên danh sách trái để bắt đầu chấm điểm."})]})}),i.jsx("style",{children:`
        .grading-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 2rem;
          align-items: start;
        }

        .grading-inbox {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          height: fit-content;
        }

        .inbox-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          max-height: 550px;
          overflow-y: auto;
        }

        .inbox-item-btn {
          width: 100%;
          text-align: left;
          padding: 1rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .inbox-item-btn:hover {
          border-color: rgba(255,255,255,0.1);
          background: rgba(255, 255, 255, 0.04);
        }

        .inbox-item-btn.active {
          border-color: var(--color-primary);
          background: var(--color-primary-glow);
        }

        .inbox-item-row-top {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: #fff;
          margin-bottom: 0.25rem;
        }

        .inbox-item-time {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .inbox-item-course {
          font-weight: 600;
          color: #fff;
          font-size: 0.85rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .inbox-item-lesson {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .empty-inbox-state {
          text-align: center;
          padding: 2rem;
          color: var(--text-muted);
          border: 1px dashed var(--border-glass);
          border-radius: var(--radius-md);
          font-size: 0.85rem;
        }

        /* Workspace */
        .grading-workspace {
          min-height: 500px;
        }

        .workspace-flex {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .student-metadata {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-glass);
          padding: 1rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .grading-questions-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .grading-question-item {
          padding: 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-glass);
        }

        .grading-question-item.correct {
          border-color: rgba(16, 185, 129, 0.2);
          background: rgba(16, 185, 129, 0.02);
        }

        .grading-question-item.wrong {
          border-color: rgba(239, 68, 68, 0.2);
          background: rgba(239, 68, 68, 0.02);
        }

        .grading-answers-comparison {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .score-slider-container {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .score-range-slider {
          flex: 1;
          height: 6px;
          border-radius: 999px;
          background: rgba(255,255,255,0.1);
          accent-color: var(--color-primary);
        }

        .score-display-glowing {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          background: var(--color-primary-glow);
          border: 2px solid var(--color-primary);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
        }

        .empty-workspace-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 5rem 2rem;
          text-align: center;
          color: var(--text-muted);
        }

        .empty-workspace-card span {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        @media (max-width: 1024px) {
          .grading-layout {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Xf(){const{courses:e,classes:t,submissions:n}=_e(),r="1,245,000,000đ",l=372,s=4.88,o=[{month:"T1",amount:150},{month:"T2",amount:180},{month:"T3",amount:120},{month:"T4",amount:240},{month:"T5",amount:270},{month:"T6",amount:285}],a=u=>{alert(`Hệ thống đang xuất tệp báo cáo định dạng ${u}. Tải xuống sẽ bắt đầu tự động...`)};return i.jsxs("div",{className:"analytics-view animate-fade-in",children:[i.jsxs("div",{className:"analytics-stats-grid",children:[i.jsxs("div",{className:"stats-card glass-card",children:[i.jsx("div",{className:"stats-icon text-accent",children:"💰"}),i.jsx("div",{className:"stats-num",children:r}),i.jsx("div",{className:"stats-label",children:"Tổng doanh thu kỳ này"})]}),i.jsxs("div",{className:"stats-card glass-card",children:[i.jsx("div",{className:"stats-icon text-primary",children:"👥"}),i.jsx("div",{className:"stats-num",children:l}),i.jsx("div",{className:"stats-label",children:"Học viên hoạt động"})]}),i.jsxs("div",{className:"stats-card glass-card",children:[i.jsx("div",{className:"stats-icon text-success",children:"🏫"}),i.jsx("div",{className:"stats-num",children:t.length}),i.jsx("div",{className:"stats-label",children:"Lớp học vận hành"})]}),i.jsxs("div",{className:"stats-card glass-card",children:[i.jsx("div",{className:"stats-icon text-warning",children:"⭐️"}),i.jsx("div",{className:"stats-num",children:s}),i.jsx("div",{className:"stats-label",children:"Điểm đánh giá trung bình"})]})]}),i.jsxs("div",{className:"analytics-charts-row",children:[i.jsxs("div",{className:"glass-card col-span-2",children:[i.jsxs("div",{className:"card-header-flex",children:[i.jsx("h3",{children:"Tăng trưởng doanh thu 2026 (triệu VND)"}),i.jsxs("div",{className:"export-actions",children:[i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>a("Excel"),children:"Excel"}),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>a("PDF"),children:"PDF"})]})]}),i.jsxs("div",{className:"revenue-chart-svg-container",children:[i.jsxs("svg",{viewBox:"0 0 500 180",className:"chart-line-svg",children:[i.jsx("defs",{children:i.jsxs("linearGradient",{id:"chartGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[i.jsx("stop",{offset:"0%",stopColor:"var(--color-secondary)",stopOpacity:"0.4"}),i.jsx("stop",{offset:"100%",stopColor:"var(--color-secondary)",stopOpacity:"0"})]})}),i.jsx("line",{x1:"40",y1:"30",x2:"480",y2:"30",stroke:"rgba(255,255,255,0.03)",strokeWidth:"1"}),i.jsx("line",{x1:"40",y1:"80",x2:"480",y2:"80",stroke:"rgba(255,255,255,0.03)",strokeWidth:"1"}),i.jsx("line",{x1:"40",y1:"130",x2:"480",y2:"130",stroke:"rgba(255,255,255,0.03)",strokeWidth:"1"}),i.jsx("path",{d:"M 40 150 L 40 75 L 128 60 L 216 90 L 304 30 L 392 15 L 480 8 L 480 150 Z",fill:"url(#chartGradient)"}),i.jsx("path",{d:"M 40 75 L 128 60 L 216 90 L 304 30 L 392 15 L 480 8",fill:"none",stroke:"var(--color-secondary)",strokeWidth:"3",strokeLinecap:"round"}),i.jsx("circle",{cx:"40",cy:"75",r:"5",fill:"var(--color-secondary)",stroke:"#fff",strokeWidth:"1.5"}),i.jsx("circle",{cx:"128",cy:"60",r:"5",fill:"var(--color-secondary)",stroke:"#fff",strokeWidth:"1.5"}),i.jsx("circle",{cx:"216",cy:"90",r:"5",fill:"var(--color-secondary)",stroke:"#fff",strokeWidth:"1.5"}),i.jsx("circle",{cx:"304",cy:"30",r:"5",fill:"var(--color-secondary)",stroke:"#fff",strokeWidth:"1.5"}),i.jsx("circle",{cx:"392",cy:"15",r:"5",fill:"var(--color-secondary)",stroke:"#fff",strokeWidth:"1.5"}),i.jsx("circle",{cx:"480",cy:"8",r:"5",fill:"var(--color-secondary)",stroke:"#fff",strokeWidth:"1.5"})]}),i.jsx("div",{className:"svg-x-axis",children:o.map((u,d)=>i.jsx("span",{style:{left:`${40+d*88}px`},children:u.month},d))})]})]}),i.jsxs("div",{className:"glass-card",children:[i.jsx("h3",{children:"Thống kê lượt đăng ký khóa học"}),i.jsx("div",{className:"analytics-progress-list mt-4",children:e.map(u=>{const h=u.enrolledCount/200*100;return i.jsxs("div",{className:"analytics-prog-item",children:[i.jsxs("div",{className:"prog-item-info",children:[i.jsx("span",{children:u.title}),i.jsxs("strong",{children:[u.enrolledCount," học viên"]})]}),i.jsx("div",{className:"progress-container",children:i.jsx("div",{className:"progress-bar",style:{width:`${h}%`}})})]},u.id)})})]})]}),i.jsxs("div",{className:"teachers-report-card glass-card",children:[i.jsx("h3",{children:"Báo cáo hiệu suất giảng dạy & Đánh giá"}),i.jsx("div",{className:"table-container mt-4",children:i.jsxs("table",{className:"lms-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Giảng viên"}),i.jsx("th",{children:"Số lớp quản lý"}),i.jsx("th",{children:"Tổng học viên"}),i.jsx("th",{children:"Tỷ lệ hoàn thành"}),i.jsx("th",{children:"Đánh giá trung bình"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsxs("td",{children:[i.jsx("strong",{children:"Trần Thị Giảng"}),i.jsx("div",{className:"text-xs text-muted",children:"Giảng viên cao cấp"})]}),i.jsx("td",{children:"2 lớp"}),i.jsx("td",{children:"80 học viên"}),i.jsx("td",{children:i.jsx("span",{className:"badge badge-success",children:"88%"})}),i.jsx("td",{children:"⭐️ 4.9/5.0"})]}),i.jsxs("tr",{children:[i.jsxs("td",{children:[i.jsx("strong",{children:"Nguyễn Văn Dạy"}),i.jsx("div",{className:"text-xs text-muted",children:"Trợ giảng"})]}),i.jsx("td",{children:"1 lớp"}),i.jsx("td",{children:"35 học viên"}),i.jsx("td",{children:i.jsx("span",{className:"badge badge-primary",children:"76%"})}),i.jsx("td",{children:"⭐️ 4.7/5.0"})]})]})]})})]}),i.jsx("style",{children:`
        .analytics-view {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .analytics-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .analytics-charts-row {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }

        .revenue-chart-svg-container {
          padding-top: 1.5rem;
          position: relative;
          height: 200px;
        }

        .chart-line-svg {
          width: 100%;
          height: 150px;
          overflow: visible;
        }

        .svg-x-axis {
          position: absolute;
          bottom: 10px;
          left: 0;
          right: 0;
          display: flex;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .svg-x-axis span {
          position: absolute;
          transform: translateX(-50%);
        }

        .analytics-progress-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .analytics-prog-item {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .prog-item-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .prog-item-info span {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 200px;
        }

        @media (max-width: 1200px) {
          .analytics-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .analytics-charts-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .analytics-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Yf(){const{currentUser:e,currentView:t}=_e();if(!e)return i.jsx(Bf,{});const n=()=>{switch(t){case"dashboard":return i.jsx(qo,{});case"courses":return i.jsx(Uf,{});case"study":return i.jsx(Vf,{});case"quiz":return i.jsx(Qf,{});case"results":return i.jsx(Wf,{});case"classes":return i.jsx(qf,{});case"course-builder":return i.jsx(Kf,{});case"grading":return i.jsx(Gf,{});case"reports":return i.jsx(Xf,{});default:return i.jsx(qo,{})}};return i.jsxs("div",{className:"lms-layout",children:[i.jsx(Ff,{}),i.jsxs("div",{className:"lms-content-wrapper",children:[i.jsx(Hf,{}),i.jsx("main",{className:"lms-main",children:n()})]})]})}function Jf(){return i.jsx($f,{children:i.jsx(Yf,{})})}sc(document.getElementById("root")).render(i.jsx(T.StrictMode,{children:i.jsx(Jf,{})}));

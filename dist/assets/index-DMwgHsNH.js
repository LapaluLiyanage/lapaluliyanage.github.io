(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function q0(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var xd={exports:{}},Xo={},Sd={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function ly(){if(__)return pt;__=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function _(U,ne,xe){this.props=U,this.context=ne,this.refs=M,this.updater=xe||y}_.prototype.isReactComponent={},_.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function S(){}S.prototype=_.prototype;function R(U,ne,xe){this.props=U,this.context=ne,this.refs=M,this.updater=xe||y}var I=R.prototype=new S;I.constructor=R,E(I,_.prototype),I.isPureReactComponent=!0;var A=Array.isArray,b=Object.prototype.hasOwnProperty,N={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function T(U,ne,xe){var Le,Ie={},Ge=null,le=null;if(ne!=null)for(Le in ne.ref!==void 0&&(le=ne.ref),ne.key!==void 0&&(Ge=""+ne.key),ne)b.call(ne,Le)&&!D.hasOwnProperty(Le)&&(Ie[Le]=ne[Le]);var de=arguments.length-2;if(de===1)Ie.children=xe;else if(1<de){for(var Ee=Array(de),Je=0;Je<de;Je++)Ee[Je]=arguments[Je+2];Ie.children=Ee}if(U&&U.defaultProps)for(Le in de=U.defaultProps,de)Ie[Le]===void 0&&(Ie[Le]=de[Le]);return{$$typeof:a,type:U,key:Ge,ref:le,props:Ie,_owner:N.current}}function L(U,ne){return{$$typeof:a,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function O(U){return typeof U=="object"&&U!==null&&U.$$typeof===a}function B(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(xe){return ne[xe]})}var W=/\/+/g;function J(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?B(""+U.key):ne.toString(36)}function z(U,ne,xe,Le,Ie){var Ge=typeof U;(Ge==="undefined"||Ge==="boolean")&&(U=null);var le=!1;if(U===null)le=!0;else switch(Ge){case"string":case"number":le=!0;break;case"object":switch(U.$$typeof){case a:case e:le=!0}}if(le)return le=U,Ie=Ie(le),U=Le===""?"."+J(le,0):Le,A(Ie)?(xe="",U!=null&&(xe=U.replace(W,"$&/")+"/"),z(Ie,ne,xe,"",function(Je){return Je})):Ie!=null&&(O(Ie)&&(Ie=L(Ie,xe+(!Ie.key||le&&le.key===Ie.key?"":(""+Ie.key).replace(W,"$&/")+"/")+U)),ne.push(Ie)),1;if(le=0,Le=Le===""?".":Le+":",A(U))for(var de=0;de<U.length;de++){Ge=U[de];var Ee=Le+J(Ge,de);le+=z(Ge,ne,xe,Ee,Ie)}else if(Ee=g(U),typeof Ee=="function")for(U=Ee.call(U),de=0;!(Ge=U.next()).done;)Ge=Ge.value,Ee=Le+J(Ge,de++),le+=z(Ge,ne,xe,Ee,Ie);else if(Ge==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return le}function Q(U,ne,xe){if(U==null)return U;var Le=[],Ie=0;return z(U,Le,"","",function(Ge){return ne.call(xe,Ge,Ie++)}),Le}function ue(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(xe){(U._status===0||U._status===-1)&&(U._status=1,U._result=xe)},function(xe){(U._status===0||U._status===-1)&&(U._status=2,U._result=xe)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var K={current:null},$={transition:null},j={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:$,ReactCurrentOwner:N};function Z(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:Q,forEach:function(U,ne,xe){Q(U,function(){ne.apply(this,arguments)},xe)},count:function(U){var ne=0;return Q(U,function(){ne++}),ne},toArray:function(U){return Q(U,function(ne){return ne})||[]},only:function(U){if(!O(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},pt.Component=_,pt.Fragment=t,pt.Profiler=s,pt.PureComponent=R,pt.StrictMode=i,pt.Suspense=d,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,pt.act=Z,pt.cloneElement=function(U,ne,xe){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Le=E({},U.props),Ie=U.key,Ge=U.ref,le=U._owner;if(ne!=null){if(ne.ref!==void 0&&(Ge=ne.ref,le=N.current),ne.key!==void 0&&(Ie=""+ne.key),U.type&&U.type.defaultProps)var de=U.type.defaultProps;for(Ee in ne)b.call(ne,Ee)&&!D.hasOwnProperty(Ee)&&(Le[Ee]=ne[Ee]===void 0&&de!==void 0?de[Ee]:ne[Ee])}var Ee=arguments.length-2;if(Ee===1)Le.children=xe;else if(1<Ee){de=Array(Ee);for(var Je=0;Je<Ee;Je++)de[Je]=arguments[Je+2];Le.children=de}return{$$typeof:a,type:U.type,key:Ie,ref:Ge,props:Le,_owner:le}},pt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:o,_context:U},U.Consumer=U},pt.createElement=T,pt.createFactory=function(U){var ne=T.bind(null,U);return ne.type=U,ne},pt.createRef=function(){return{current:null}},pt.forwardRef=function(U){return{$$typeof:c,render:U}},pt.isValidElement=O,pt.lazy=function(U){return{$$typeof:p,_payload:{_status:-1,_result:U},_init:ue}},pt.memo=function(U,ne){return{$$typeof:h,type:U,compare:ne===void 0?null:ne}},pt.startTransition=function(U){var ne=$.transition;$.transition={};try{U()}finally{$.transition=ne}},pt.unstable_act=Z,pt.useCallback=function(U,ne){return K.current.useCallback(U,ne)},pt.useContext=function(U){return K.current.useContext(U)},pt.useDebugValue=function(){},pt.useDeferredValue=function(U){return K.current.useDeferredValue(U)},pt.useEffect=function(U,ne){return K.current.useEffect(U,ne)},pt.useId=function(){return K.current.useId()},pt.useImperativeHandle=function(U,ne,xe){return K.current.useImperativeHandle(U,ne,xe)},pt.useInsertionEffect=function(U,ne){return K.current.useInsertionEffect(U,ne)},pt.useLayoutEffect=function(U,ne){return K.current.useLayoutEffect(U,ne)},pt.useMemo=function(U,ne){return K.current.useMemo(U,ne)},pt.useReducer=function(U,ne,xe){return K.current.useReducer(U,ne,xe)},pt.useRef=function(U){return K.current.useRef(U)},pt.useState=function(U){return K.current.useState(U)},pt.useSyncExternalStore=function(U,ne,xe){return K.current.useSyncExternalStore(U,ne,xe)},pt.useTransition=function(){return K.current.useTransition()},pt.version="18.3.1",pt}var v_;function gp(){return v_||(v_=1,Sd.exports=ly()),Sd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function uy(){if(x_)return Xo;x_=1;var a=gp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,v={},g=null,y=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(y=d.ref);for(p in d)i.call(d,p)&&!o.hasOwnProperty(p)&&(v[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)v[p]===void 0&&(v[p]=d[p]);return{$$typeof:e,type:c,key:g,ref:y,props:v,_owner:s.current}}return Xo.Fragment=t,Xo.jsx=u,Xo.jsxs=u,Xo}var S_;function cy(){return S_||(S_=1,xd.exports=uy()),xd.exports}var X=cy(),hi=gp();const fy=q0(hi);var Pu={},yd={exports:{}},Qn={},Md={exports:{}},Ed={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function dy(){return y_||(y_=1,(function(a){function e($,j){var Z=$.length;$.push(j);e:for(;0<Z;){var U=Z-1>>>1,ne=$[U];if(0<s(ne,j))$[U]=j,$[Z]=ne,Z=U;else break e}}function t($){return $.length===0?null:$[0]}function i($){if($.length===0)return null;var j=$[0],Z=$.pop();if(Z!==j){$[0]=Z;e:for(var U=0,ne=$.length,xe=ne>>>1;U<xe;){var Le=2*(U+1)-1,Ie=$[Le],Ge=Le+1,le=$[Ge];if(0>s(Ie,Z))Ge<ne&&0>s(le,Ie)?($[U]=le,$[Ge]=Z,U=Ge):($[U]=Ie,$[Le]=Z,U=Le);else if(Ge<ne&&0>s(le,Z))$[U]=le,$[Ge]=Z,U=Ge;else break e}}return j}function s($,j){var Z=$.sortIndex-j.sortIndex;return Z!==0?Z:$.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;a.unstable_now=function(){return o.now()}}else{var u=Date,c=u.now();a.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,v=null,g=3,y=!1,E=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I($){for(var j=t(h);j!==null;){if(j.callback===null)i(h);else if(j.startTime<=$)i(h),j.sortIndex=j.expirationTime,e(d,j);else break;j=t(h)}}function A($){if(M=!1,I($),!E)if(t(d)!==null)E=!0,ue(b);else{var j=t(h);j!==null&&K(A,j.startTime-$)}}function b($,j){E=!1,M&&(M=!1,S(T),T=-1),y=!0;var Z=g;try{for(I(j),v=t(d);v!==null&&(!(v.expirationTime>j)||$&&!B());){var U=v.callback;if(typeof U=="function"){v.callback=null,g=v.priorityLevel;var ne=U(v.expirationTime<=j);j=a.unstable_now(),typeof ne=="function"?v.callback=ne:v===t(d)&&i(d),I(j)}else i(d);v=t(d)}if(v!==null)var xe=!0;else{var Le=t(h);Le!==null&&K(A,Le.startTime-j),xe=!1}return xe}finally{v=null,g=Z,y=!1}}var N=!1,D=null,T=-1,L=5,O=-1;function B(){return!(a.unstable_now()-O<L)}function W(){if(D!==null){var $=a.unstable_now();O=$;var j=!0;try{j=D(!0,$)}finally{j?J():(N=!1,D=null)}}else N=!1}var J;if(typeof R=="function")J=function(){R(W)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,Q=z.port2;z.port1.onmessage=W,J=function(){Q.postMessage(null)}}else J=function(){_(W,0)};function ue($){D=$,N||(N=!0,J())}function K($,j){T=_(function(){$(a.unstable_now())},j)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function($){$.callback=null},a.unstable_continueExecution=function(){E||y||(E=!0,ue(b))},a.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<$?Math.floor(1e3/$):5},a.unstable_getCurrentPriorityLevel=function(){return g},a.unstable_getFirstCallbackNode=function(){return t(d)},a.unstable_next=function($){switch(g){case 1:case 2:case 3:var j=3;break;default:j=g}var Z=g;g=j;try{return $()}finally{g=Z}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function($,j){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=g;g=$;try{return j()}finally{g=Z}},a.unstable_scheduleCallback=function($,j,Z){var U=a.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?U+Z:U):Z=U,$){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=Z+ne,$={id:p++,callback:j,priorityLevel:$,startTime:Z,expirationTime:ne,sortIndex:-1},Z>U?($.sortIndex=Z,e(h,$),t(d)===null&&$===t(h)&&(M?(S(T),T=-1):M=!0,K(A,Z-U))):($.sortIndex=ne,e(d,$),E||y||(E=!0,ue(b))),$},a.unstable_shouldYield=B,a.unstable_wrapCallback=function($){var j=g;return function(){var Z=g;g=j;try{return $.apply(this,arguments)}finally{g=Z}}}})(Ed)),Ed}var M_;function hy(){return M_||(M_=1,Md.exports=dy()),Md.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function py(){if(E_)return Qn;E_=1;var a=gp(),e=hy();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function o(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function g(n){return d.call(v,n)?!0:d.call(p,n)?!1:h.test(n)?v[n]=!0:(p[n]=!0,!1)}function y(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,l,f){if(r===null||typeof r>"u"||y(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(n,r,l,f,m,x,C){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=x,this.removeEmptyString=C}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];_[r]=new M(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,R);_[r]=new M(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,R);_[r]=new M(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,R);_[r]=new M(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function I(n,r,l,f){var m=_.hasOwnProperty(r)?_[r]:null;(m!==null?m.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,l,m,f)&&(l=null),f||m===null?g(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(r=m.attributeName,f=m.attributeNamespace,l===null?n.removeAttribute(r):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var A=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,b=Symbol.for("react.element"),N=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),B=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),$=Symbol.iterator;function j(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var Z=Object.assign,U;function ne(n){if(U===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);U=r&&r[1]||""}return`
`+U+n}var xe=!1;function Le(n,r){if(!n||xe)return"";xe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(fe){var f=fe}Reflect.construct(n,[],r)}else{try{r.call()}catch(fe){f=fe}n.call(r.prototype)}else{try{throw Error()}catch(fe){f=fe}n()}}catch(fe){if(fe&&f&&typeof fe.stack=="string"){for(var m=fe.stack.split(`
`),x=f.stack.split(`
`),C=m.length-1,k=x.length-1;1<=C&&0<=k&&m[C]!==x[k];)k--;for(;1<=C&&0<=k;C--,k--)if(m[C]!==x[k]){if(C!==1||k!==1)do if(C--,k--,0>k||m[C]!==x[k]){var V=`
`+m[C].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=C&&0<=k);break}}}finally{xe=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ne(n):""}function Ie(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Le(n.type,!1),n;case 11:return n=Le(n.type.render,!1),n;case 1:return n=Le(n.type,!0),n;default:return""}}function Ge(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case N:return"Portal";case L:return"Profiler";case T:return"StrictMode";case J:return"Suspense";case z:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case O:return(n._context.displayName||"Context")+".Provider";case W:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Q:return r=n.displayName||null,r!==null?r:Ge(n.type)||"Memo";case ue:r=n._payload,n=n._init;try{return Ge(n(r))}catch{}}return null}function le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ge(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function de(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ee(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Je(n){var r=Ee(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,x=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(C){f=""+C,x.call(this,C)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(C){f=""+C},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ke(n){n._valueTracker||(n._valueTracker=Je(n))}function ut(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=Ee(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function Ht(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ct(n,r){var l=r.checked;return Z({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function mt(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=de(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Nt(n,r){r=r.checked,r!=null&&I(n,"checked",r,!1)}function ft(n,r){Nt(n,r);var l=de(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Jt(n,r.type,l):r.hasOwnProperty("defaultValue")&&Jt(n,r.type,de(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ut(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Jt(n,r,l){(r!=="number"||Ht(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var un=Array.isArray;function Lt(n,r,l,f){if(n=n.options,r){r={};for(var m=0;m<l.length;m++)r["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=r.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&f&&(n[l].defaultSelected=!0)}else{for(l=""+de(l),r=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,f&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function Gt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return Z({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Y(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(un(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:de(l)}}function hn(n,r){var l=de(r.value),f=de(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function wt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function F(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?F(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ee,oe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,m){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,m)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ee=ee||document.createElement("div"),ee.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ee.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function he(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ae=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Ae.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Me[r]=Me[n]})});function pe(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Me.hasOwnProperty(n)&&Me[n]?(""+r).trim():r+"px"}function ge(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=pe(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,m):n[l]=m}}var be=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(n,r){if(r){if(be[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Pe(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function Ke(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var et=null,it=null,H=null;function Re(n){if(n=Po(n)){if(typeof et!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Xl(r),et(n.stateNode,n.type,r))}}function me(n){it?H?H.push(n):H=[n]:it=n}function Ce(){if(it){var n=it,r=H;if(H=it=null,Re(n),r)for(n=0;n<r.length;n++)Re(r[n])}}function Oe(n,r){return n(r)}function _e(){}var Ze=!1;function Ye(n,r,l){if(Ze)return n(r,l);Ze=!0;try{return Oe(n,r,l)}finally{Ze=!1,(it!==null||H!==null)&&(_e(),Ce())}}function At(n,r){var l=n.stateNode;if(l===null)return null;var f=Xl(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var yt=!1;if(c)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){yt=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{yt=!1}function yi(n,r,l,f,m,x,C,k,V){var fe=Array.prototype.slice.call(arguments,3);try{r.apply(l,fe)}catch(Se){this.onError(Se)}}var ys=!1,sa=null,Ms=!1,Es=null,Vc={onError:function(n){ys=!0,sa=n}};function Rl(n,r,l,f,m,x,C,k,V){ys=!1,sa=null,yi.apply(Vc,arguments)}function Cl(n,r,l,f,m,x,C,k,V){if(Rl.apply(this,arguments),ys){if(ys){var fe=sa;ys=!1,sa=null}else throw Error(t(198));Ms||(Ms=!0,Es=fe)}}function zn(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function aa(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function lo(n){if(zn(n)!==n)throw Error(t(188))}function bl(n){var r=n.alternate;if(!r){if(r=zn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var m=l.return;if(m===null)break;var x=m.alternate;if(x===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===x.child){for(x=m.child;x;){if(x===l)return lo(m),n;if(x===f)return lo(m),r;x=x.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=x;else{for(var C=!1,k=m.child;k;){if(k===l){C=!0,l=m,f=x;break}if(k===f){C=!0,f=m,l=x;break}k=k.sibling}if(!C){for(k=x.child;k;){if(k===l){C=!0,l=x,f=m;break}if(k===f){C=!0,f=x,l=m;break}k=k.sibling}if(!C)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Ts(n){return n=bl(n),n!==null?uo(n):null}function uo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=uo(n);if(r!==null)return r;n=n.sibling}return null}var ws=e.unstable_scheduleCallback,co=e.unstable_cancelCallback,Pl=e.unstable_shouldYield,Hc=e.unstable_requestPaint,qt=e.unstable_now,Gc=e.unstable_getCurrentPriorityLevel,fo=e.unstable_ImmediatePriority,ho=e.unstable_UserBlockingPriority,P=e.unstable_NormalPriority,G=e.unstable_LowPriority,ce=e.unstable_IdlePriority,re=null,te=null;function Ue(n){if(te&&typeof te.onCommitFiberRoot=="function")try{te.onCommitFiberRoot(re,n,void 0,(n.current.flags&128)===128)}catch{}}var Ne=Math.clz32?Math.clz32:je,De=Math.log,We=Math.LN2;function je(n){return n>>>=0,n===0?32:31-(De(n)/We|0)|0}var at=64,lt=4194304;function Ve(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function gt(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,m=n.suspendedLanes,x=n.pingedLanes,C=l&268435455;if(C!==0){var k=C&~m;k!==0?f=Ve(k):(x&=C,x!==0&&(f=Ve(x)))}else C=l&~m,C!==0?f=Ve(C):x!==0&&(f=Ve(x));if(f===0)return 0;if(r!==0&&r!==f&&(r&m)===0&&(m=f&-f,x=r&-r,m>=x||m===16&&(x&4194240)!==0))return r;if((f&4)!==0&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-Ne(r),m=1<<l,f|=n[l],r&=~m;return f}function en(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,m=n.expirationTimes,x=n.pendingLanes;0<x;){var C=31-Ne(x),k=1<<C,V=m[C];V===-1?((k&l)===0||(k&f)!==0)&&(m[C]=en(k,r)):V<=r&&(n.expiredLanes|=k),x&=~k}}function Pt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function pn(){var n=at;return at<<=1,(at&4194240)===0&&(at=64),n}function Be(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function an(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ne(r),n[r]=l}function _t(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-Ne(l),x=1<<m;r[m]=0,f[m]=-1,n[m]=-1,l&=~x}}function Pn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-Ne(l),m=1<<f;m&r|n[f]&r&&(n[f]|=r),l&=~m}}var dt=0;function Oi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var _r,Rt,Wt,ki,Dt,Mi=!1,Bi=[],zi=null,Vr=null,Hr=null,po=new Map,mo=new Map,Gr=[],Px="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function em(n,r){switch(n){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":po.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(r.pointerId)}}function go(n,r,l,f,m,x){return n===null||n.nativeEvent!==x?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:x,targetContainers:[m]},r!==null&&(r=Po(r),r!==null&&Rt(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function Lx(n,r,l,f,m){switch(r){case"focusin":return zi=go(zi,n,r,l,f,m),!0;case"dragenter":return Vr=go(Vr,n,r,l,f,m),!0;case"mouseover":return Hr=go(Hr,n,r,l,f,m),!0;case"pointerover":var x=m.pointerId;return po.set(x,go(po.get(x)||null,n,r,l,f,m)),!0;case"gotpointercapture":return x=m.pointerId,mo.set(x,go(mo.get(x)||null,n,r,l,f,m)),!0}return!1}function tm(n){var r=As(n.target);if(r!==null){var l=zn(r);if(l!==null){if(r=l.tag,r===13){if(r=aa(l),r!==null){n.blockedOn=r,Dt(n.priority,function(){Wt(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ll(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Xc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);we=f,l.target.dispatchEvent(f),we=null}else return r=Po(l),r!==null&&Rt(r),n.blockedOn=l,!1;r.shift()}return!0}function nm(n,r,l){Ll(n)&&l.delete(r)}function Nx(){Mi=!1,zi!==null&&Ll(zi)&&(zi=null),Vr!==null&&Ll(Vr)&&(Vr=null),Hr!==null&&Ll(Hr)&&(Hr=null),po.forEach(nm),mo.forEach(nm)}function _o(n,r){n.blockedOn===r&&(n.blockedOn=null,Mi||(Mi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Nx)))}function vo(n){function r(m){return _o(m,n)}if(0<Bi.length){_o(Bi[0],n);for(var l=1;l<Bi.length;l++){var f=Bi[l];f.blockedOn===n&&(f.blockedOn=null)}}for(zi!==null&&_o(zi,n),Vr!==null&&_o(Vr,n),Hr!==null&&_o(Hr,n),po.forEach(r),mo.forEach(r),l=0;l<Gr.length;l++)f=Gr[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<Gr.length&&(l=Gr[0],l.blockedOn===null);)tm(l),l.blockedOn===null&&Gr.shift()}var oa=A.ReactCurrentBatchConfig,Nl=!0;function Dx(n,r,l,f){var m=dt,x=oa.transition;oa.transition=null;try{dt=1,Wc(n,r,l,f)}finally{dt=m,oa.transition=x}}function Ix(n,r,l,f){var m=dt,x=oa.transition;oa.transition=null;try{dt=4,Wc(n,r,l,f)}finally{dt=m,oa.transition=x}}function Wc(n,r,l,f){if(Nl){var m=Xc(n,r,l,f);if(m===null)uf(n,r,f,Dl,l),em(n,f);else if(Lx(m,n,r,l,f))f.stopPropagation();else if(em(n,f),r&4&&-1<Px.indexOf(n)){for(;m!==null;){var x=Po(m);if(x!==null&&_r(x),x=Xc(n,r,l,f),x===null&&uf(n,r,f,Dl,l),x===m)break;m=x}m!==null&&f.stopPropagation()}else uf(n,r,f,null,l)}}var Dl=null;function Xc(n,r,l,f){if(Dl=null,n=Ke(f),n=As(n),n!==null)if(r=zn(n),r===null)n=null;else if(l=r.tag,l===13){if(n=aa(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Dl=n,null}function im(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gc()){case fo:return 1;case ho:return 4;case P:case G:return 16;case ce:return 536870912;default:return 16}default:return 16}}var Wr=null,Yc=null,Il=null;function rm(){if(Il)return Il;var n,r=Yc,l=r.length,f,m="value"in Wr?Wr.value:Wr.textContent,x=m.length;for(n=0;n<l&&r[n]===m[n];n++);var C=l-n;for(f=1;f<=C&&r[l-f]===m[x-f];f++);return Il=m.slice(n,1<f?1-f:void 0)}function Ul(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Fl(){return!0}function sm(){return!1}function oi(n){function r(l,f,m,x,C){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=x,this.target=C,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(l=n[k],this[k]=l?l(x):x[k]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Fl:sm,this.isPropagationStopped=sm,this}return Z(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),r}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qc=oi(la),xo=Z({},la,{view:0,detail:0}),Ux=oi(xo),$c,Kc,So,Ol=Z({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==So&&(So&&n.type==="mousemove"?($c=n.screenX-So.screenX,Kc=n.screenY-So.screenY):Kc=$c=0,So=n),$c)},movementY:function(n){return"movementY"in n?n.movementY:Kc}}),am=oi(Ol),Fx=Z({},Ol,{dataTransfer:0}),Ox=oi(Fx),kx=Z({},xo,{relatedTarget:0}),jc=oi(kx),Bx=Z({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),zx=oi(Bx),Vx=Z({},la,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Hx=oi(Vx),Gx=Z({},la,{data:0}),om=oi(Gx),Wx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qx(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Yx[n])?!!r[n]:!1}function Zc(){return qx}var $x=Z({},xo,{key:function(n){if(n.key){var r=Wx[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ul(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Xx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(n){return n.type==="keypress"?Ul(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ul(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Kx=oi($x),jx=Z({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lm=oi(jx),Zx=Z({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),Qx=oi(Zx),Jx=Z({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),eS=oi(Jx),tS=Z({},Ol,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),nS=oi(tS),iS=[9,13,27,32],Qc=c&&"CompositionEvent"in window,yo=null;c&&"documentMode"in document&&(yo=document.documentMode);var rS=c&&"TextEvent"in window&&!yo,um=c&&(!Qc||yo&&8<yo&&11>=yo),cm=" ",fm=!1;function dm(n,r){switch(n){case"keyup":return iS.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ua=!1;function sS(n,r){switch(n){case"compositionend":return hm(r);case"keypress":return r.which!==32?null:(fm=!0,cm);case"textInput":return n=r.data,n===cm&&fm?null:n;default:return null}}function aS(n,r){if(ua)return n==="compositionend"||!Qc&&dm(n,r)?(n=rm(),Il=Yc=Wr=null,ua=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return um&&r.locale!=="ko"?null:r.data;default:return null}}var oS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pm(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!oS[n.type]:r==="textarea"}function mm(n,r,l,f){me(f),r=Hl(r,"onChange"),0<r.length&&(l=new qc("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var Mo=null,Eo=null;function lS(n){Dm(n,0)}function kl(n){var r=pa(n);if(ut(r))return n}function uS(n,r){if(n==="change")return r}var gm=!1;if(c){var Jc;if(c){var ef="oninput"in document;if(!ef){var _m=document.createElement("div");_m.setAttribute("oninput","return;"),ef=typeof _m.oninput=="function"}Jc=ef}else Jc=!1;gm=Jc&&(!document.documentMode||9<document.documentMode)}function vm(){Mo&&(Mo.detachEvent("onpropertychange",xm),Eo=Mo=null)}function xm(n){if(n.propertyName==="value"&&kl(Eo)){var r=[];mm(r,Eo,n,Ke(n)),Ye(lS,r)}}function cS(n,r,l){n==="focusin"?(vm(),Mo=r,Eo=l,Mo.attachEvent("onpropertychange",xm)):n==="focusout"&&vm()}function fS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return kl(Eo)}function dS(n,r){if(n==="click")return kl(r)}function hS(n,r){if(n==="input"||n==="change")return kl(r)}function pS(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Vi=typeof Object.is=="function"?Object.is:pS;function To(n,r){if(Vi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(r,m)||!Vi(n[m],r[m]))return!1}return!0}function Sm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ym(n,r){var l=Sm(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Sm(l)}}function Mm(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Mm(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Em(){for(var n=window,r=Ht();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Ht(n.document)}return r}function tf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function mS(n){var r=Em(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Mm(l.ownerDocument.documentElement,l)){if(f!==null&&tf(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,x=Math.min(f.start,m);f=f.end===void 0?x:Math.min(f.end,m),!n.extend&&x>f&&(m=f,f=x,x=m),m=ym(l,x);var C=ym(l,f);m&&C&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),x>f?(n.addRange(r),n.extend(C.node,C.offset)):(r.setEnd(C.node,C.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var gS=c&&"documentMode"in document&&11>=document.documentMode,ca=null,nf=null,wo=null,rf=!1;function Tm(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;rf||ca==null||ca!==Ht(f)||(f=ca,"selectionStart"in f&&tf(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),wo&&To(wo,f)||(wo=f,f=Hl(nf,"onSelect"),0<f.length&&(r=new qc("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=ca)))}function Bl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var fa={animationend:Bl("Animation","AnimationEnd"),animationiteration:Bl("Animation","AnimationIteration"),animationstart:Bl("Animation","AnimationStart"),transitionend:Bl("Transition","TransitionEnd")},sf={},wm={};c&&(wm=document.createElement("div").style,"AnimationEvent"in window||(delete fa.animationend.animation,delete fa.animationiteration.animation,delete fa.animationstart.animation),"TransitionEvent"in window||delete fa.transitionend.transition);function zl(n){if(sf[n])return sf[n];if(!fa[n])return n;var r=fa[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in wm)return sf[n]=r[l];return n}var Am=zl("animationend"),Rm=zl("animationiteration"),Cm=zl("animationstart"),bm=zl("transitionend"),Pm=new Map,Lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(n,r){Pm.set(n,r),o(r,[n])}for(var af=0;af<Lm.length;af++){var of=Lm[af],_S=of.toLowerCase(),vS=of[0].toUpperCase()+of.slice(1);Xr(_S,"on"+vS)}Xr(Am,"onAnimationEnd"),Xr(Rm,"onAnimationIteration"),Xr(Cm,"onAnimationStart"),Xr("dblclick","onDoubleClick"),Xr("focusin","onFocus"),Xr("focusout","onBlur"),Xr(bm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function Nm(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,Cl(f,r,void 0,n),n.currentTarget=null}function Dm(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],m=f.event;f=f.listeners;e:{var x=void 0;if(r)for(var C=f.length-1;0<=C;C--){var k=f[C],V=k.instance,fe=k.currentTarget;if(k=k.listener,V!==x&&m.isPropagationStopped())break e;Nm(m,k,fe),x=V}else for(C=0;C<f.length;C++){if(k=f[C],V=k.instance,fe=k.currentTarget,k=k.listener,V!==x&&m.isPropagationStopped())break e;Nm(m,k,fe),x=V}}}if(Ms)throw n=Es,Ms=!1,Es=null,n}function zt(n,r){var l=r[mf];l===void 0&&(l=r[mf]=new Set);var f=n+"__bubble";l.has(f)||(Im(r,n,2,!1),l.add(f))}function lf(n,r,l){var f=0;r&&(f|=4),Im(l,n,f,r)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Ro(n){if(!n[Vl]){n[Vl]=!0,i.forEach(function(l){l!=="selectionchange"&&(xS.has(l)||lf(l,!1,n),lf(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Vl]||(r[Vl]=!0,lf("selectionchange",!1,r))}}function Im(n,r,l,f){switch(im(r)){case 1:var m=Dx;break;case 4:m=Ix;break;default:m=Wc}l=m.bind(null,r,l,n),m=void 0,!yt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),f?m!==void 0?n.addEventListener(r,l,{capture:!0,passive:m}):n.addEventListener(r,l,!0):m!==void 0?n.addEventListener(r,l,{passive:m}):n.addEventListener(r,l,!1)}function uf(n,r,l,f,m){var x=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var C=f.tag;if(C===3||C===4){var k=f.stateNode.containerInfo;if(k===m||k.nodeType===8&&k.parentNode===m)break;if(C===4)for(C=f.return;C!==null;){var V=C.tag;if((V===3||V===4)&&(V=C.stateNode.containerInfo,V===m||V.nodeType===8&&V.parentNode===m))return;C=C.return}for(;k!==null;){if(C=As(k),C===null)return;if(V=C.tag,V===5||V===6){f=x=C;continue e}k=k.parentNode}}f=f.return}Ye(function(){var fe=x,Se=Ke(l),ye=[];e:{var ve=Pm.get(n);if(ve!==void 0){var ze=qc,Xe=n;switch(n){case"keypress":if(Ul(l)===0)break e;case"keydown":case"keyup":ze=Kx;break;case"focusin":Xe="focus",ze=jc;break;case"focusout":Xe="blur",ze=jc;break;case"beforeblur":case"afterblur":ze=jc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=Ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=Qx;break;case Am:case Rm:case Cm:ze=zx;break;case bm:ze=eS;break;case"scroll":ze=Ux;break;case"wheel":ze=nS;break;case"copy":case"cut":case"paste":ze=Hx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=lm}var qe=(r&4)!==0,on=!qe&&n==="scroll",se=qe?ve!==null?ve+"Capture":null:ve;qe=[];for(var q=fe,ae;q!==null;){ae=q;var Te=ae.stateNode;if(ae.tag===5&&Te!==null&&(ae=Te,se!==null&&(Te=At(q,se),Te!=null&&qe.push(Co(q,Te,ae)))),on)break;q=q.return}0<qe.length&&(ve=new ze(ve,Xe,null,l,Se),ye.push({event:ve,listeners:qe}))}}if((r&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",ve&&l!==we&&(Xe=l.relatedTarget||l.fromElement)&&(As(Xe)||Xe[vr]))break e;if((ze||ve)&&(ve=Se.window===Se?Se:(ve=Se.ownerDocument)?ve.defaultView||ve.parentWindow:window,ze?(Xe=l.relatedTarget||l.toElement,ze=fe,Xe=Xe?As(Xe):null,Xe!==null&&(on=zn(Xe),Xe!==on||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(ze=null,Xe=fe),ze!==Xe)){if(qe=am,Te="onMouseLeave",se="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(qe=lm,Te="onPointerLeave",se="onPointerEnter",q="pointer"),on=ze==null?ve:pa(ze),ae=Xe==null?ve:pa(Xe),ve=new qe(Te,q+"leave",ze,l,Se),ve.target=on,ve.relatedTarget=ae,Te=null,As(Se)===fe&&(qe=new qe(se,q+"enter",Xe,l,Se),qe.target=ae,qe.relatedTarget=on,Te=qe),on=Te,ze&&Xe)t:{for(qe=ze,se=Xe,q=0,ae=qe;ae;ae=da(ae))q++;for(ae=0,Te=se;Te;Te=da(Te))ae++;for(;0<q-ae;)qe=da(qe),q--;for(;0<ae-q;)se=da(se),ae--;for(;q--;){if(qe===se||se!==null&&qe===se.alternate)break t;qe=da(qe),se=da(se)}qe=null}else qe=null;ze!==null&&Um(ye,ve,ze,qe,!1),Xe!==null&&on!==null&&Um(ye,on,Xe,qe,!0)}}e:{if(ve=fe?pa(fe):window,ze=ve.nodeName&&ve.nodeName.toLowerCase(),ze==="select"||ze==="input"&&ve.type==="file")var Qe=uS;else if(pm(ve))if(gm)Qe=hS;else{Qe=fS;var tt=cS}else(ze=ve.nodeName)&&ze.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Qe=dS);if(Qe&&(Qe=Qe(n,fe))){mm(ye,Qe,l,Se);break e}tt&&tt(n,ve,fe),n==="focusout"&&(tt=ve._wrapperState)&&tt.controlled&&ve.type==="number"&&Jt(ve,"number",ve.value)}switch(tt=fe?pa(fe):window,n){case"focusin":(pm(tt)||tt.contentEditable==="true")&&(ca=tt,nf=fe,wo=null);break;case"focusout":wo=nf=ca=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,Tm(ye,l,Se);break;case"selectionchange":if(gS)break;case"keydown":case"keyup":Tm(ye,l,Se)}var nt;if(Qc)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else ua?dm(n,l)&&(st="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(st="onCompositionStart");st&&(um&&l.locale!=="ko"&&(ua||st!=="onCompositionStart"?st==="onCompositionEnd"&&ua&&(nt=rm()):(Wr=Se,Yc="value"in Wr?Wr.value:Wr.textContent,ua=!0)),tt=Hl(fe,st),0<tt.length&&(st=new om(st,n,null,l,Se),ye.push({event:st,listeners:tt}),nt?st.data=nt:(nt=hm(l),nt!==null&&(st.data=nt)))),(nt=rS?sS(n,l):aS(n,l))&&(fe=Hl(fe,"onBeforeInput"),0<fe.length&&(Se=new om("onBeforeInput","beforeinput",null,l,Se),ye.push({event:Se,listeners:fe}),Se.data=nt))}Dm(ye,r)})}function Co(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Hl(n,r){for(var l=r+"Capture",f=[];n!==null;){var m=n,x=m.stateNode;m.tag===5&&x!==null&&(m=x,x=At(n,l),x!=null&&f.unshift(Co(n,x,m)),x=At(n,r),x!=null&&f.push(Co(n,x,m))),n=n.return}return f}function da(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Um(n,r,l,f,m){for(var x=r._reactName,C=[];l!==null&&l!==f;){var k=l,V=k.alternate,fe=k.stateNode;if(V!==null&&V===f)break;k.tag===5&&fe!==null&&(k=fe,m?(V=At(l,x),V!=null&&C.unshift(Co(l,V,k))):m||(V=At(l,x),V!=null&&C.push(Co(l,V,k)))),l=l.return}C.length!==0&&n.push({event:r,listeners:C})}var SS=/\r\n?/g,yS=/\u0000|\uFFFD/g;function Fm(n){return(typeof n=="string"?n:""+n).replace(SS,`
`).replace(yS,"")}function Gl(n,r,l){if(r=Fm(r),Fm(n)!==r&&l)throw Error(t(425))}function Wl(){}var cf=null,ff=null;function df(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var hf=typeof setTimeout=="function"?setTimeout:void 0,MS=typeof clearTimeout=="function"?clearTimeout:void 0,Om=typeof Promise=="function"?Promise:void 0,ES=typeof queueMicrotask=="function"?queueMicrotask:typeof Om<"u"?function(n){return Om.resolve(null).then(n).catch(TS)}:hf;function TS(n){setTimeout(function(){throw n})}function pf(n,r){var l=r,f=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){n.removeChild(m),vo(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);vo(r)}function Yr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function km(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var ha=Math.random().toString(36).slice(2),Qi="__reactFiber$"+ha,bo="__reactProps$"+ha,vr="__reactContainer$"+ha,mf="__reactEvents$"+ha,wS="__reactListeners$"+ha,AS="__reactHandles$"+ha;function As(n){var r=n[Qi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[vr]||l[Qi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=km(n);n!==null;){if(l=n[Qi])return l;n=km(n)}return r}n=l,l=n.parentNode}return null}function Po(n){return n=n[Qi]||n[vr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function pa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Xl(n){return n[bo]||null}var gf=[],ma=-1;function qr(n){return{current:n}}function Vt(n){0>ma||(n.current=gf[ma],gf[ma]=null,ma--)}function Bt(n,r){ma++,gf[ma]=n.current,n.current=r}var $r={},Ln=qr($r),qn=qr(!1),Rs=$r;function ga(n,r){var l=n.type.contextTypes;if(!l)return $r;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var m={},x;for(x in l)m[x]=r[x];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function $n(n){return n=n.childContextTypes,n!=null}function Yl(){Vt(qn),Vt(Ln)}function Bm(n,r,l){if(Ln.current!==$r)throw Error(t(168));Bt(Ln,r),Bt(qn,l)}function zm(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in r))throw Error(t(108,le(n)||"Unknown",m));return Z({},l,f)}function ql(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||$r,Rs=Ln.current,Bt(Ln,n),Bt(qn,qn.current),!0}function Vm(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=zm(n,r,Rs),f.__reactInternalMemoizedMergedChildContext=n,Vt(qn),Vt(Ln),Bt(Ln,n)):Vt(qn),Bt(qn,l)}var xr=null,$l=!1,_f=!1;function Hm(n){xr===null?xr=[n]:xr.push(n)}function RS(n){$l=!0,Hm(n)}function Kr(){if(!_f&&xr!==null){_f=!0;var n=0,r=dt;try{var l=xr;for(dt=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}xr=null,$l=!1}catch(m){throw xr!==null&&(xr=xr.slice(n+1)),ws(fo,Kr),m}finally{dt=r,_f=!1}}return null}var _a=[],va=0,Kl=null,jl=0,Ei=[],Ti=0,Cs=null,Sr=1,yr="";function bs(n,r){_a[va++]=jl,_a[va++]=Kl,Kl=n,jl=r}function Gm(n,r,l){Ei[Ti++]=Sr,Ei[Ti++]=yr,Ei[Ti++]=Cs,Cs=n;var f=Sr;n=yr;var m=32-Ne(f)-1;f&=~(1<<m),l+=1;var x=32-Ne(r)+m;if(30<x){var C=m-m%5;x=(f&(1<<C)-1).toString(32),f>>=C,m-=C,Sr=1<<32-Ne(r)+m|l<<m|f,yr=x+n}else Sr=1<<x|l<<m|f,yr=n}function vf(n){n.return!==null&&(bs(n,1),Gm(n,1,0))}function xf(n){for(;n===Kl;)Kl=_a[--va],_a[va]=null,jl=_a[--va],_a[va]=null;for(;n===Cs;)Cs=Ei[--Ti],Ei[Ti]=null,yr=Ei[--Ti],Ei[Ti]=null,Sr=Ei[--Ti],Ei[Ti]=null}var li=null,ui=null,Xt=!1,Hi=null;function Wm(n,r){var l=Ci(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Xm(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,li=n,ui=Yr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,li=n,ui=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Cs!==null?{id:Sr,overflow:yr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=Ci(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,li=n,ui=null,!0):!1;default:return!1}}function Sf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function yf(n){if(Xt){var r=ui;if(r){var l=r;if(!Xm(n,r)){if(Sf(n))throw Error(t(418));r=Yr(l.nextSibling);var f=li;r&&Xm(n,r)?Wm(f,l):(n.flags=n.flags&-4097|2,Xt=!1,li=n)}}else{if(Sf(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xt=!1,li=n}}}function Ym(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;li=n}function Zl(n){if(n!==li)return!1;if(!Xt)return Ym(n),Xt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!df(n.type,n.memoizedProps)),r&&(r=ui)){if(Sf(n))throw qm(),Error(t(418));for(;r;)Wm(n,r),r=Yr(r.nextSibling)}if(Ym(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){ui=Yr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}ui=null}}else ui=li?Yr(n.stateNode.nextSibling):null;return!0}function qm(){for(var n=ui;n;)n=Yr(n.nextSibling)}function xa(){ui=li=null,Xt=!1}function Mf(n){Hi===null?Hi=[n]:Hi.push(n)}var CS=A.ReactCurrentBatchConfig;function Lo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var m=f,x=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(C){var k=m.refs;C===null?delete k[x]:k[x]=C},r._stringRef=x,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Ql(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function $m(n){var r=n._init;return r(n._payload)}function Km(n){function r(se,q){if(n){var ae=se.deletions;ae===null?(se.deletions=[q],se.flags|=16):ae.push(q)}}function l(se,q){if(!n)return null;for(;q!==null;)r(se,q),q=q.sibling;return null}function f(se,q){for(se=new Map;q!==null;)q.key!==null?se.set(q.key,q):se.set(q.index,q),q=q.sibling;return se}function m(se,q){return se=is(se,q),se.index=0,se.sibling=null,se}function x(se,q,ae){return se.index=ae,n?(ae=se.alternate,ae!==null?(ae=ae.index,ae<q?(se.flags|=2,q):ae):(se.flags|=2,q)):(se.flags|=1048576,q)}function C(se){return n&&se.alternate===null&&(se.flags|=2),se}function k(se,q,ae,Te){return q===null||q.tag!==6?(q=hd(ae,se.mode,Te),q.return=se,q):(q=m(q,ae),q.return=se,q)}function V(se,q,ae,Te){var Qe=ae.type;return Qe===D?Se(se,q,ae.props.children,Te,ae.key):q!==null&&(q.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ue&&$m(Qe)===q.type)?(Te=m(q,ae.props),Te.ref=Lo(se,q,ae),Te.return=se,Te):(Te=Mu(ae.type,ae.key,ae.props,null,se.mode,Te),Te.ref=Lo(se,q,ae),Te.return=se,Te)}function fe(se,q,ae,Te){return q===null||q.tag!==4||q.stateNode.containerInfo!==ae.containerInfo||q.stateNode.implementation!==ae.implementation?(q=pd(ae,se.mode,Te),q.return=se,q):(q=m(q,ae.children||[]),q.return=se,q)}function Se(se,q,ae,Te,Qe){return q===null||q.tag!==7?(q=Os(ae,se.mode,Te,Qe),q.return=se,q):(q=m(q,ae),q.return=se,q)}function ye(se,q,ae){if(typeof q=="string"&&q!==""||typeof q=="number")return q=hd(""+q,se.mode,ae),q.return=se,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case b:return ae=Mu(q.type,q.key,q.props,null,se.mode,ae),ae.ref=Lo(se,null,q),ae.return=se,ae;case N:return q=pd(q,se.mode,ae),q.return=se,q;case ue:var Te=q._init;return ye(se,Te(q._payload),ae)}if(un(q)||j(q))return q=Os(q,se.mode,ae,null),q.return=se,q;Ql(se,q)}return null}function ve(se,q,ae,Te){var Qe=q!==null?q.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return Qe!==null?null:k(se,q,""+ae,Te);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case b:return ae.key===Qe?V(se,q,ae,Te):null;case N:return ae.key===Qe?fe(se,q,ae,Te):null;case ue:return Qe=ae._init,ve(se,q,Qe(ae._payload),Te)}if(un(ae)||j(ae))return Qe!==null?null:Se(se,q,ae,Te,null);Ql(se,ae)}return null}function ze(se,q,ae,Te,Qe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return se=se.get(ae)||null,k(q,se,""+Te,Qe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case b:return se=se.get(Te.key===null?ae:Te.key)||null,V(q,se,Te,Qe);case N:return se=se.get(Te.key===null?ae:Te.key)||null,fe(q,se,Te,Qe);case ue:var tt=Te._init;return ze(se,q,ae,tt(Te._payload),Qe)}if(un(Te)||j(Te))return se=se.get(ae)||null,Se(q,se,Te,Qe,null);Ql(q,Te)}return null}function Xe(se,q,ae,Te){for(var Qe=null,tt=null,nt=q,st=q=0,yn=null;nt!==null&&st<ae.length;st++){nt.index>st?(yn=nt,nt=null):yn=nt.sibling;var Ct=ve(se,nt,ae[st],Te);if(Ct===null){nt===null&&(nt=yn);break}n&&nt&&Ct.alternate===null&&r(se,nt),q=x(Ct,q,st),tt===null?Qe=Ct:tt.sibling=Ct,tt=Ct,nt=yn}if(st===ae.length)return l(se,nt),Xt&&bs(se,st),Qe;if(nt===null){for(;st<ae.length;st++)nt=ye(se,ae[st],Te),nt!==null&&(q=x(nt,q,st),tt===null?Qe=nt:tt.sibling=nt,tt=nt);return Xt&&bs(se,st),Qe}for(nt=f(se,nt);st<ae.length;st++)yn=ze(nt,se,st,ae[st],Te),yn!==null&&(n&&yn.alternate!==null&&nt.delete(yn.key===null?st:yn.key),q=x(yn,q,st),tt===null?Qe=yn:tt.sibling=yn,tt=yn);return n&&nt.forEach(function(rs){return r(se,rs)}),Xt&&bs(se,st),Qe}function qe(se,q,ae,Te){var Qe=j(ae);if(typeof Qe!="function")throw Error(t(150));if(ae=Qe.call(ae),ae==null)throw Error(t(151));for(var tt=Qe=null,nt=q,st=q=0,yn=null,Ct=ae.next();nt!==null&&!Ct.done;st++,Ct=ae.next()){nt.index>st?(yn=nt,nt=null):yn=nt.sibling;var rs=ve(se,nt,Ct.value,Te);if(rs===null){nt===null&&(nt=yn);break}n&&nt&&rs.alternate===null&&r(se,nt),q=x(rs,q,st),tt===null?Qe=rs:tt.sibling=rs,tt=rs,nt=yn}if(Ct.done)return l(se,nt),Xt&&bs(se,st),Qe;if(nt===null){for(;!Ct.done;st++,Ct=ae.next())Ct=ye(se,Ct.value,Te),Ct!==null&&(q=x(Ct,q,st),tt===null?Qe=Ct:tt.sibling=Ct,tt=Ct);return Xt&&bs(se,st),Qe}for(nt=f(se,nt);!Ct.done;st++,Ct=ae.next())Ct=ze(nt,se,st,Ct.value,Te),Ct!==null&&(n&&Ct.alternate!==null&&nt.delete(Ct.key===null?st:Ct.key),q=x(Ct,q,st),tt===null?Qe=Ct:tt.sibling=Ct,tt=Ct);return n&&nt.forEach(function(oy){return r(se,oy)}),Xt&&bs(se,st),Qe}function on(se,q,ae,Te){if(typeof ae=="object"&&ae!==null&&ae.type===D&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case b:e:{for(var Qe=ae.key,tt=q;tt!==null;){if(tt.key===Qe){if(Qe=ae.type,Qe===D){if(tt.tag===7){l(se,tt.sibling),q=m(tt,ae.props.children),q.return=se,se=q;break e}}else if(tt.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ue&&$m(Qe)===tt.type){l(se,tt.sibling),q=m(tt,ae.props),q.ref=Lo(se,tt,ae),q.return=se,se=q;break e}l(se,tt);break}else r(se,tt);tt=tt.sibling}ae.type===D?(q=Os(ae.props.children,se.mode,Te,ae.key),q.return=se,se=q):(Te=Mu(ae.type,ae.key,ae.props,null,se.mode,Te),Te.ref=Lo(se,q,ae),Te.return=se,se=Te)}return C(se);case N:e:{for(tt=ae.key;q!==null;){if(q.key===tt)if(q.tag===4&&q.stateNode.containerInfo===ae.containerInfo&&q.stateNode.implementation===ae.implementation){l(se,q.sibling),q=m(q,ae.children||[]),q.return=se,se=q;break e}else{l(se,q);break}else r(se,q);q=q.sibling}q=pd(ae,se.mode,Te),q.return=se,se=q}return C(se);case ue:return tt=ae._init,on(se,q,tt(ae._payload),Te)}if(un(ae))return Xe(se,q,ae,Te);if(j(ae))return qe(se,q,ae,Te);Ql(se,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,q!==null&&q.tag===6?(l(se,q.sibling),q=m(q,ae),q.return=se,se=q):(l(se,q),q=hd(ae,se.mode,Te),q.return=se,se=q),C(se)):l(se,q)}return on}var Sa=Km(!0),jm=Km(!1),Jl=qr(null),eu=null,ya=null,Ef=null;function Tf(){Ef=ya=eu=null}function wf(n){var r=Jl.current;Vt(Jl),n._currentValue=r}function Af(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function Ma(n,r){eu=n,Ef=ya=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Kn=!0),n.firstContext=null)}function wi(n){var r=n._currentValue;if(Ef!==n)if(n={context:n,memoizedValue:r,next:null},ya===null){if(eu===null)throw Error(t(308));ya=n,eu.dependencies={lanes:0,firstContext:n}}else ya=ya.next=n;return r}var Ps=null;function Rf(n){Ps===null?Ps=[n]:Ps.push(n)}function Zm(n,r,l,f){var m=r.interleaved;return m===null?(l.next=l,Rf(r)):(l.next=m.next,m.next=l),r.interleaved=l,Mr(n,f)}function Mr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var jr=!1;function Cf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qm(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Er(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Zr(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,(Et&2)!==0){var m=f.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),f.pending=r,Mr(n,l)}return m=f.interleaved,m===null?(r.next=r,Rf(f)):(r.next=m.next,m.next=r),f.interleaved=r,Mr(n,l)}function tu(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,Pn(n,l)}}function Jm(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var C={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?m=x=C:x=x.next=C,l=l.next}while(l!==null);x===null?m=x=r:x=x.next=r}else m=x=r;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:x,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function nu(n,r,l,f){var m=n.updateQueue;jr=!1;var x=m.firstBaseUpdate,C=m.lastBaseUpdate,k=m.shared.pending;if(k!==null){m.shared.pending=null;var V=k,fe=V.next;V.next=null,C===null?x=fe:C.next=fe,C=V;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,k=Se.lastBaseUpdate,k!==C&&(k===null?Se.firstBaseUpdate=fe:k.next=fe,Se.lastBaseUpdate=V))}if(x!==null){var ye=m.baseState;C=0,Se=fe=V=null,k=x;do{var ve=k.lane,ze=k.eventTime;if((f&ve)===ve){Se!==null&&(Se=Se.next={eventTime:ze,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Xe=n,qe=k;switch(ve=r,ze=l,qe.tag){case 1:if(Xe=qe.payload,typeof Xe=="function"){ye=Xe.call(ze,ye,ve);break e}ye=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=qe.payload,ve=typeof Xe=="function"?Xe.call(ze,ye,ve):Xe,ve==null)break e;ye=Z({},ye,ve);break e;case 2:jr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,ve=m.effects,ve===null?m.effects=[k]:ve.push(k))}else ze={eventTime:ze,lane:ve,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Se===null?(fe=Se=ze,V=ye):Se=Se.next=ze,C|=ve;if(k=k.next,k===null){if(k=m.shared.pending,k===null)break;ve=k,k=ve.next,ve.next=null,m.lastBaseUpdate=ve,m.shared.pending=null}}while(!0);if(Se===null&&(V=ye),m.baseState=V,m.firstBaseUpdate=fe,m.lastBaseUpdate=Se,r=m.shared.interleaved,r!==null){m=r;do C|=m.lane,m=m.next;while(m!==r)}else x===null&&(m.shared.lanes=0);Ds|=C,n.lanes=C,n.memoizedState=ye}}function eg(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var No={},Ji=qr(No),Do=qr(No),Io=qr(No);function Ls(n){if(n===No)throw Error(t(174));return n}function bf(n,r){switch(Bt(Io,r),Bt(Do,n),Bt(Ji,No),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:w(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=w(r,n)}Vt(Ji),Bt(Ji,r)}function Ea(){Vt(Ji),Vt(Do),Vt(Io)}function tg(n){Ls(Io.current);var r=Ls(Ji.current),l=w(r,n.type);r!==l&&(Bt(Do,n),Bt(Ji,l))}function Pf(n){Do.current===n&&(Vt(Ji),Vt(Do))}var $t=qr(0);function iu(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Lf=[];function Nf(){for(var n=0;n<Lf.length;n++)Lf[n]._workInProgressVersionPrimary=null;Lf.length=0}var ru=A.ReactCurrentDispatcher,Df=A.ReactCurrentBatchConfig,Ns=0,Kt=null,mn=null,xn=null,su=!1,Uo=!1,Fo=0,bS=0;function Nn(){throw Error(t(321))}function If(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Vi(n[l],r[l]))return!1;return!0}function Uf(n,r,l,f,m,x){if(Ns=x,Kt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ru.current=n===null||n.memoizedState===null?DS:IS,n=l(f,m),Uo){x=0;do{if(Uo=!1,Fo=0,25<=x)throw Error(t(301));x+=1,xn=mn=null,r.updateQueue=null,ru.current=US,n=l(f,m)}while(Uo)}if(ru.current=lu,r=mn!==null&&mn.next!==null,Ns=0,xn=mn=Kt=null,su=!1,r)throw Error(t(300));return n}function Ff(){var n=Fo!==0;return Fo=0,n}function er(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?Kt.memoizedState=xn=n:xn=xn.next=n,xn}function Ai(){if(mn===null){var n=Kt.alternate;n=n!==null?n.memoizedState:null}else n=mn.next;var r=xn===null?Kt.memoizedState:xn.next;if(r!==null)xn=r,mn=n;else{if(n===null)throw Error(t(310));mn=n,n={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},xn===null?Kt.memoizedState=xn=n:xn=xn.next=n}return xn}function Oo(n,r){return typeof r=="function"?r(n):r}function Of(n){var r=Ai(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=mn,m=f.baseQueue,x=l.pending;if(x!==null){if(m!==null){var C=m.next;m.next=x.next,x.next=C}f.baseQueue=m=x,l.pending=null}if(m!==null){x=m.next,f=f.baseState;var k=C=null,V=null,fe=x;do{var Se=fe.lane;if((Ns&Se)===Se)V!==null&&(V=V.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),f=fe.hasEagerState?fe.eagerState:n(f,fe.action);else{var ye={lane:Se,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};V===null?(k=V=ye,C=f):V=V.next=ye,Kt.lanes|=Se,Ds|=Se}fe=fe.next}while(fe!==null&&fe!==x);V===null?C=f:V.next=k,Vi(f,r.memoizedState)||(Kn=!0),r.memoizedState=f,r.baseState=C,r.baseQueue=V,l.lastRenderedState=f}if(n=l.interleaved,n!==null){m=n;do x=m.lane,Kt.lanes|=x,Ds|=x,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function kf(n){var r=Ai(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,m=l.pending,x=r.memoizedState;if(m!==null){l.pending=null;var C=m=m.next;do x=n(x,C.action),C=C.next;while(C!==m);Vi(x,r.memoizedState)||(Kn=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),l.lastRenderedState=x}return[x,f]}function ng(){}function ig(n,r){var l=Kt,f=Ai(),m=r(),x=!Vi(f.memoizedState,m);if(x&&(f.memoizedState=m,Kn=!0),f=f.queue,Bf(ag.bind(null,l,f,n),[n]),f.getSnapshot!==r||x||xn!==null&&xn.memoizedState.tag&1){if(l.flags|=2048,ko(9,sg.bind(null,l,f,m,r),void 0,null),Sn===null)throw Error(t(349));(Ns&30)!==0||rg(l,r,m)}return m}function rg(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Kt.updateQueue,r===null?(r={lastEffect:null,stores:null},Kt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function sg(n,r,l,f){r.value=l,r.getSnapshot=f,og(r)&&lg(n)}function ag(n,r,l){return l(function(){og(r)&&lg(n)})}function og(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Vi(n,l)}catch{return!0}}function lg(n){var r=Mr(n,1);r!==null&&Yi(r,n,1,-1)}function ug(n){var r=er();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:n},r.queue=n,n=n.dispatch=NS.bind(null,Kt,n),[r.memoizedState,n]}function ko(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=Kt.updateQueue,r===null?(r={lastEffect:null,stores:null},Kt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function cg(){return Ai().memoizedState}function au(n,r,l,f){var m=er();Kt.flags|=n,m.memoizedState=ko(1|r,l,void 0,f===void 0?null:f)}function ou(n,r,l,f){var m=Ai();f=f===void 0?null:f;var x=void 0;if(mn!==null){var C=mn.memoizedState;if(x=C.destroy,f!==null&&If(f,C.deps)){m.memoizedState=ko(r,l,x,f);return}}Kt.flags|=n,m.memoizedState=ko(1|r,l,x,f)}function fg(n,r){return au(8390656,8,n,r)}function Bf(n,r){return ou(2048,8,n,r)}function dg(n,r){return ou(4,2,n,r)}function hg(n,r){return ou(4,4,n,r)}function pg(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function mg(n,r,l){return l=l!=null?l.concat([n]):null,ou(4,4,pg.bind(null,r,n),l)}function zf(){}function gg(n,r){var l=Ai();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&If(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function _g(n,r){var l=Ai();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&If(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function vg(n,r,l){return(Ns&21)===0?(n.baseState&&(n.baseState=!1,Kn=!0),n.memoizedState=l):(Vi(l,r)||(l=pn(),Kt.lanes|=l,Ds|=l,n.baseState=!0),r)}function PS(n,r){var l=dt;dt=l!==0&&4>l?l:4,n(!0);var f=Df.transition;Df.transition={};try{n(!1),r()}finally{dt=l,Df.transition=f}}function xg(){return Ai().memoizedState}function LS(n,r,l){var f=ts(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},Sg(n))yg(r,l);else if(l=Zm(n,r,l,f),l!==null){var m=Hn();Yi(l,n,f,m),Mg(l,r,f)}}function NS(n,r,l){var f=ts(n),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(Sg(n))yg(r,m);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var C=r.lastRenderedState,k=x(C,l);if(m.hasEagerState=!0,m.eagerState=k,Vi(k,C)){var V=r.interleaved;V===null?(m.next=m,Rf(r)):(m.next=V.next,V.next=m),r.interleaved=m;return}}catch{}finally{}l=Zm(n,r,m,f),l!==null&&(m=Hn(),Yi(l,n,f,m),Mg(l,r,f))}}function Sg(n){var r=n.alternate;return n===Kt||r!==null&&r===Kt}function yg(n,r){Uo=su=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Mg(n,r,l){if((l&4194240)!==0){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,Pn(n,l)}}var lu={readContext:wi,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useInsertionEffect:Nn,useLayoutEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useMutableSource:Nn,useSyncExternalStore:Nn,useId:Nn,unstable_isNewReconciler:!1},DS={readContext:wi,useCallback:function(n,r){return er().memoizedState=[n,r===void 0?null:r],n},useContext:wi,useEffect:fg,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,au(4194308,4,pg.bind(null,r,n),l)},useLayoutEffect:function(n,r){return au(4194308,4,n,r)},useInsertionEffect:function(n,r){return au(4,2,n,r)},useMemo:function(n,r){var l=er();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=er();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=LS.bind(null,Kt,n),[f.memoizedState,n]},useRef:function(n){var r=er();return n={current:n},r.memoizedState=n},useState:ug,useDebugValue:zf,useDeferredValue:function(n){return er().memoizedState=n},useTransition:function(){var n=ug(!1),r=n[0];return n=PS.bind(null,n[1]),er().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=Kt,m=er();if(Xt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),Sn===null)throw Error(t(349));(Ns&30)!==0||rg(f,r,l)}m.memoizedState=l;var x={value:l,getSnapshot:r};return m.queue=x,fg(ag.bind(null,f,x,n),[n]),f.flags|=2048,ko(9,sg.bind(null,f,x,l,r),void 0,null),l},useId:function(){var n=er(),r=Sn.identifierPrefix;if(Xt){var l=yr,f=Sr;l=(f&~(1<<32-Ne(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=Fo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=bS++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},IS={readContext:wi,useCallback:gg,useContext:wi,useEffect:Bf,useImperativeHandle:mg,useInsertionEffect:dg,useLayoutEffect:hg,useMemo:_g,useReducer:Of,useRef:cg,useState:function(){return Of(Oo)},useDebugValue:zf,useDeferredValue:function(n){var r=Ai();return vg(r,mn.memoizedState,n)},useTransition:function(){var n=Of(Oo)[0],r=Ai().memoizedState;return[n,r]},useMutableSource:ng,useSyncExternalStore:ig,useId:xg,unstable_isNewReconciler:!1},US={readContext:wi,useCallback:gg,useContext:wi,useEffect:Bf,useImperativeHandle:mg,useInsertionEffect:dg,useLayoutEffect:hg,useMemo:_g,useReducer:kf,useRef:cg,useState:function(){return kf(Oo)},useDebugValue:zf,useDeferredValue:function(n){var r=Ai();return mn===null?r.memoizedState=n:vg(r,mn.memoizedState,n)},useTransition:function(){var n=kf(Oo)[0],r=Ai().memoizedState;return[n,r]},useMutableSource:ng,useSyncExternalStore:ig,useId:xg,unstable_isNewReconciler:!1};function Gi(n,r){if(n&&n.defaultProps){r=Z({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Vf(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:Z({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var uu={isMounted:function(n){return(n=n._reactInternals)?zn(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=Hn(),m=ts(n),x=Er(f,m);x.payload=r,l!=null&&(x.callback=l),r=Zr(n,x,m),r!==null&&(Yi(r,n,m,f),tu(r,n,m))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=Hn(),m=ts(n),x=Er(f,m);x.tag=1,x.payload=r,l!=null&&(x.callback=l),r=Zr(n,x,m),r!==null&&(Yi(r,n,m,f),tu(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Hn(),f=ts(n),m=Er(l,f);m.tag=2,r!=null&&(m.callback=r),r=Zr(n,m,f),r!==null&&(Yi(r,n,f,l),tu(r,n,f))}};function Eg(n,r,l,f,m,x,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,x,C):r.prototype&&r.prototype.isPureReactComponent?!To(l,f)||!To(m,x):!0}function Tg(n,r,l){var f=!1,m=$r,x=r.contextType;return typeof x=="object"&&x!==null?x=wi(x):(m=$n(r)?Rs:Ln.current,f=r.contextTypes,x=(f=f!=null)?ga(n,m):$r),r=new r(l,x),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=uu,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=x),r}function wg(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&uu.enqueueReplaceState(r,r.state,null)}function Hf(n,r,l,f){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},Cf(n);var x=r.contextType;typeof x=="object"&&x!==null?m.context=wi(x):(x=$n(r)?Rs:Ln.current,m.context=ga(n,x)),m.state=n.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Vf(n,r,x,l),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&uu.enqueueReplaceState(m,m.state,null),nu(n,l,m,f),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function Ta(n,r){try{var l="",f=r;do l+=Ie(f),f=f.return;while(f);var m=l}catch(x){m=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:r,stack:m,digest:null}}function Gf(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Wf(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var FS=typeof WeakMap=="function"?WeakMap:Map;function Ag(n,r,l){l=Er(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){gu||(gu=!0,sd=f),Wf(n,r)},l}function Rg(n,r,l){l=Er(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;l.payload=function(){return f(m)},l.callback=function(){Wf(n,r)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){Wf(n,r),typeof f!="function"&&(Jr===null?Jr=new Set([this]):Jr.add(this));var C=r.stack;this.componentDidCatch(r.value,{componentStack:C!==null?C:""})}),l}function Cg(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new FS;var m=new Set;f.set(r,m)}else m=f.get(r),m===void 0&&(m=new Set,f.set(r,m));m.has(l)||(m.add(l),n=jS.bind(null,n,r,l),r.then(n,n))}function bg(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Pg(n,r,l,f,m){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Er(-1,1),r.tag=2,Zr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var OS=A.ReactCurrentOwner,Kn=!1;function Vn(n,r,l,f){r.child=n===null?jm(r,null,l,f):Sa(r,n.child,l,f)}function Lg(n,r,l,f,m){l=l.render;var x=r.ref;return Ma(r,m),f=Uf(n,r,l,f,x,m),l=Ff(),n!==null&&!Kn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,Tr(n,r,m)):(Xt&&l&&vf(r),r.flags|=1,Vn(n,r,f,m),r.child)}function Ng(n,r,l,f,m){if(n===null){var x=l.type;return typeof x=="function"&&!dd(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=x,Dg(n,r,x,f,m)):(n=Mu(l.type,null,f,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(x=n.child,(n.lanes&m)===0){var C=x.memoizedProps;if(l=l.compare,l=l!==null?l:To,l(C,f)&&n.ref===r.ref)return Tr(n,r,m)}return r.flags|=1,n=is(x,f),n.ref=r.ref,n.return=r,r.child=n}function Dg(n,r,l,f,m){if(n!==null){var x=n.memoizedProps;if(To(x,f)&&n.ref===r.ref)if(Kn=!1,r.pendingProps=f=x,(n.lanes&m)!==0)(n.flags&131072)!==0&&(Kn=!0);else return r.lanes=n.lanes,Tr(n,r,m)}return Xf(n,r,l,f,m)}function Ig(n,r,l){var f=r.pendingProps,m=f.children,x=n!==null?n.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Aa,ci),ci|=l;else{if((l&1073741824)===0)return n=x!==null?x.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Bt(Aa,ci),ci|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:l,Bt(Aa,ci),ci|=f}else x!==null?(f=x.baseLanes|l,r.memoizedState=null):f=l,Bt(Aa,ci),ci|=f;return Vn(n,r,m,l),r.child}function Ug(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Xf(n,r,l,f,m){var x=$n(l)?Rs:Ln.current;return x=ga(r,x),Ma(r,m),l=Uf(n,r,l,f,x,m),f=Ff(),n!==null&&!Kn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,Tr(n,r,m)):(Xt&&f&&vf(r),r.flags|=1,Vn(n,r,l,m),r.child)}function Fg(n,r,l,f,m){if($n(l)){var x=!0;ql(r)}else x=!1;if(Ma(r,m),r.stateNode===null)fu(n,r),Tg(r,l,f),Hf(r,l,f,m),f=!0;else if(n===null){var C=r.stateNode,k=r.memoizedProps;C.props=k;var V=C.context,fe=l.contextType;typeof fe=="object"&&fe!==null?fe=wi(fe):(fe=$n(l)?Rs:Ln.current,fe=ga(r,fe));var Se=l.getDerivedStateFromProps,ye=typeof Se=="function"||typeof C.getSnapshotBeforeUpdate=="function";ye||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(k!==f||V!==fe)&&wg(r,C,f,fe),jr=!1;var ve=r.memoizedState;C.state=ve,nu(r,f,C,m),V=r.memoizedState,k!==f||ve!==V||qn.current||jr?(typeof Se=="function"&&(Vf(r,l,Se,f),V=r.memoizedState),(k=jr||Eg(r,l,k,f,ve,V,fe))?(ye||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(r.flags|=4194308)):(typeof C.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=V),C.props=f,C.state=V,C.context=fe,f=k):(typeof C.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{C=r.stateNode,Qm(n,r),k=r.memoizedProps,fe=r.type===r.elementType?k:Gi(r.type,k),C.props=fe,ye=r.pendingProps,ve=C.context,V=l.contextType,typeof V=="object"&&V!==null?V=wi(V):(V=$n(l)?Rs:Ln.current,V=ga(r,V));var ze=l.getDerivedStateFromProps;(Se=typeof ze=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(k!==ye||ve!==V)&&wg(r,C,f,V),jr=!1,ve=r.memoizedState,C.state=ve,nu(r,f,C,m);var Xe=r.memoizedState;k!==ye||ve!==Xe||qn.current||jr?(typeof ze=="function"&&(Vf(r,l,ze,f),Xe=r.memoizedState),(fe=jr||Eg(r,l,fe,f,ve,Xe,V)||!1)?(Se||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(f,Xe,V),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(f,Xe,V)),typeof C.componentDidUpdate=="function"&&(r.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof C.componentDidUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=Xe),C.props=f,C.state=Xe,C.context=V,f=fe):(typeof C.componentDidUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),f=!1)}return Yf(n,r,l,f,x,m)}function Yf(n,r,l,f,m,x){Ug(n,r);var C=(r.flags&128)!==0;if(!f&&!C)return m&&Vm(r,l,!1),Tr(n,r,x);f=r.stateNode,OS.current=r;var k=C&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&C?(r.child=Sa(r,n.child,null,x),r.child=Sa(r,null,k,x)):Vn(n,r,k,x),r.memoizedState=f.state,m&&Vm(r,l,!0),r.child}function Og(n){var r=n.stateNode;r.pendingContext?Bm(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Bm(n,r.context,!1),bf(n,r.containerInfo)}function kg(n,r,l,f,m){return xa(),Mf(m),r.flags|=256,Vn(n,r,l,f),r.child}var qf={dehydrated:null,treeContext:null,retryLane:0};function $f(n){return{baseLanes:n,cachePool:null,transitions:null}}function Bg(n,r,l){var f=r.pendingProps,m=$t.current,x=!1,C=(r.flags&128)!==0,k;if((k=C)||(k=n!==null&&n.memoizedState===null?!1:(m&2)!==0),k?(x=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),Bt($t,m&1),n===null)return yf(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(C=f.children,n=f.fallback,x?(f=r.mode,x=r.child,C={mode:"hidden",children:C},(f&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=C):x=Eu(C,f,0,null),n=Os(n,f,l,null),x.return=r,n.return=r,x.sibling=n,r.child=x,r.child.memoizedState=$f(l),r.memoizedState=qf,n):Kf(r,C));if(m=n.memoizedState,m!==null&&(k=m.dehydrated,k!==null))return kS(n,r,C,f,k,m,l);if(x){x=f.fallback,C=r.mode,m=n.child,k=m.sibling;var V={mode:"hidden",children:f.children};return(C&1)===0&&r.child!==m?(f=r.child,f.childLanes=0,f.pendingProps=V,r.deletions=null):(f=is(m,V),f.subtreeFlags=m.subtreeFlags&14680064),k!==null?x=is(k,x):(x=Os(x,C,l,null),x.flags|=2),x.return=r,f.return=r,f.sibling=x,r.child=f,f=x,x=r.child,C=n.child.memoizedState,C=C===null?$f(l):{baseLanes:C.baseLanes|l,cachePool:null,transitions:C.transitions},x.memoizedState=C,x.childLanes=n.childLanes&~l,r.memoizedState=qf,f}return x=n.child,n=x.sibling,f=is(x,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function Kf(n,r){return r=Eu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function cu(n,r,l,f){return f!==null&&Mf(f),Sa(r,n.child,null,l),n=Kf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function kS(n,r,l,f,m,x,C){if(l)return r.flags&256?(r.flags&=-257,f=Gf(Error(t(422))),cu(n,r,C,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(x=f.fallback,m=r.mode,f=Eu({mode:"visible",children:f.children},m,0,null),x=Os(x,m,C,null),x.flags|=2,f.return=r,x.return=r,f.sibling=x,r.child=f,(r.mode&1)!==0&&Sa(r,n.child,null,C),r.child.memoizedState=$f(C),r.memoizedState=qf,x);if((r.mode&1)===0)return cu(n,r,C,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var k=f.dgst;return f=k,x=Error(t(419)),f=Gf(x,f,void 0),cu(n,r,C,f)}if(k=(C&n.childLanes)!==0,Kn||k){if(f=Sn,f!==null){switch(C&-C){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|C))!==0?0:m,m!==0&&m!==x.retryLane&&(x.retryLane=m,Mr(n,m),Yi(f,n,m,-1))}return fd(),f=Gf(Error(t(421))),cu(n,r,C,f)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=ZS.bind(null,n),m._reactRetry=r,null):(n=x.treeContext,ui=Yr(m.nextSibling),li=r,Xt=!0,Hi=null,n!==null&&(Ei[Ti++]=Sr,Ei[Ti++]=yr,Ei[Ti++]=Cs,Sr=n.id,yr=n.overflow,Cs=r),r=Kf(r,f.children),r.flags|=4096,r)}function zg(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),Af(n.return,r,l)}function jf(n,r,l,f,m){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=l,x.tailMode=m)}function Vg(n,r,l){var f=r.pendingProps,m=f.revealOrder,x=f.tail;if(Vn(n,r,f.children,l),f=$t.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zg(n,l,r);else if(n.tag===19)zg(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(Bt($t,f),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(l=r.child,m=null;l!==null;)n=l.alternate,n!==null&&iu(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=r.child,r.child=null):(m=l.sibling,l.sibling=null),jf(r,!1,m,l,x);break;case"backwards":for(l=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&iu(n)===null){r.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}jf(r,!0,l,null,x);break;case"together":jf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function fu(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Tr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Ds|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=is(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=is(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function BS(n,r,l){switch(r.tag){case 3:Og(r),xa();break;case 5:tg(r);break;case 1:$n(r.type)&&ql(r);break;case 4:bf(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,m=r.memoizedProps.value;Bt(Jl,f._currentValue),f._currentValue=m;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(Bt($t,$t.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Bg(n,r,l):(Bt($t,$t.current&1),n=Tr(n,r,l),n!==null?n.sibling:null);Bt($t,$t.current&1);break;case 19:if(f=(l&r.childLanes)!==0,(n.flags&128)!==0){if(f)return Vg(n,r,l);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Bt($t,$t.current),f)break;return null;case 22:case 23:return r.lanes=0,Ig(n,r,l)}return Tr(n,r,l)}var Hg,Zf,Gg,Wg;Hg=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Zf=function(){},Gg=function(n,r,l,f){var m=n.memoizedProps;if(m!==f){n=r.stateNode,Ls(Ji.current);var x=null;switch(l){case"input":m=ct(n,m),f=ct(n,f),x=[];break;case"select":m=Z({},m,{value:void 0}),f=Z({},f,{value:void 0}),x=[];break;case"textarea":m=Gt(n,m),f=Gt(n,f),x=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=Wl)}$e(l,f);var C;l=null;for(fe in m)if(!f.hasOwnProperty(fe)&&m.hasOwnProperty(fe)&&m[fe]!=null)if(fe==="style"){var k=m[fe];for(C in k)k.hasOwnProperty(C)&&(l||(l={}),l[C]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(s.hasOwnProperty(fe)?x||(x=[]):(x=x||[]).push(fe,null));for(fe in f){var V=f[fe];if(k=m!=null?m[fe]:void 0,f.hasOwnProperty(fe)&&V!==k&&(V!=null||k!=null))if(fe==="style")if(k){for(C in k)!k.hasOwnProperty(C)||V&&V.hasOwnProperty(C)||(l||(l={}),l[C]="");for(C in V)V.hasOwnProperty(C)&&k[C]!==V[C]&&(l||(l={}),l[C]=V[C])}else l||(x||(x=[]),x.push(fe,l)),l=V;else fe==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,k=k?k.__html:void 0,V!=null&&k!==V&&(x=x||[]).push(fe,V)):fe==="children"?typeof V!="string"&&typeof V!="number"||(x=x||[]).push(fe,""+V):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(s.hasOwnProperty(fe)?(V!=null&&fe==="onScroll"&&zt("scroll",n),x||k===V||(x=[])):(x=x||[]).push(fe,V))}l&&(x=x||[]).push("style",l);var fe=x;(r.updateQueue=fe)&&(r.flags|=4)}},Wg=function(n,r,l,f){l!==f&&(r.flags|=4)};function Bo(n,r){if(!Xt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function Dn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function zS(n,r,l){var f=r.pendingProps;switch(xf(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(r),null;case 1:return $n(r.type)&&Yl(),Dn(r),null;case 3:return f=r.stateNode,Ea(),Vt(qn),Vt(Ln),Nf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(Zl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Hi!==null&&(ld(Hi),Hi=null))),Zf(n,r),Dn(r),null;case 5:Pf(r);var m=Ls(Io.current);if(l=r.type,n!==null&&r.stateNode!=null)Gg(n,r,l,f,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return Dn(r),null}if(n=Ls(Ji.current),Zl(r)){f=r.stateNode,l=r.type;var x=r.memoizedProps;switch(f[Qi]=r,f[bo]=x,n=(r.mode&1)!==0,l){case"dialog":zt("cancel",f),zt("close",f);break;case"iframe":case"object":case"embed":zt("load",f);break;case"video":case"audio":for(m=0;m<Ao.length;m++)zt(Ao[m],f);break;case"source":zt("error",f);break;case"img":case"image":case"link":zt("error",f),zt("load",f);break;case"details":zt("toggle",f);break;case"input":mt(f,x),zt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},zt("invalid",f);break;case"textarea":Y(f,x),zt("invalid",f)}$e(l,x),m=null;for(var C in x)if(x.hasOwnProperty(C)){var k=x[C];C==="children"?typeof k=="string"?f.textContent!==k&&(x.suppressHydrationWarning!==!0&&Gl(f.textContent,k,n),m=["children",k]):typeof k=="number"&&f.textContent!==""+k&&(x.suppressHydrationWarning!==!0&&Gl(f.textContent,k,n),m=["children",""+k]):s.hasOwnProperty(C)&&k!=null&&C==="onScroll"&&zt("scroll",f)}switch(l){case"input":ke(f),Ut(f,x,!0);break;case"textarea":ke(f),wt(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=Wl)}f=m,r.updateQueue=f,f!==null&&(r.flags|=4)}else{C=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=F(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=C.createElement(l,{is:f.is}):(n=C.createElement(l),l==="select"&&(C=n,f.multiple?C.multiple=!0:f.size&&(C.size=f.size))):n=C.createElementNS(n,l),n[Qi]=r,n[bo]=f,Hg(n,r,!1,!1),r.stateNode=n;e:{switch(C=Pe(l,f),l){case"dialog":zt("cancel",n),zt("close",n),m=f;break;case"iframe":case"object":case"embed":zt("load",n),m=f;break;case"video":case"audio":for(m=0;m<Ao.length;m++)zt(Ao[m],n);m=f;break;case"source":zt("error",n),m=f;break;case"img":case"image":case"link":zt("error",n),zt("load",n),m=f;break;case"details":zt("toggle",n),m=f;break;case"input":mt(n,f),m=ct(n,f),zt("invalid",n);break;case"option":m=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},m=Z({},f,{value:void 0}),zt("invalid",n);break;case"textarea":Y(n,f),m=Gt(n,f),zt("invalid",n);break;default:m=f}$e(l,m),k=m;for(x in k)if(k.hasOwnProperty(x)){var V=k[x];x==="style"?ge(n,V):x==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&oe(n,V)):x==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&he(n,V):typeof V=="number"&&he(n,""+V):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(s.hasOwnProperty(x)?V!=null&&x==="onScroll"&&zt("scroll",n):V!=null&&I(n,x,V,C))}switch(l){case"input":ke(n),Ut(n,f,!1);break;case"textarea":ke(n),wt(n);break;case"option":f.value!=null&&n.setAttribute("value",""+de(f.value));break;case"select":n.multiple=!!f.multiple,x=f.value,x!=null?Lt(n,!!f.multiple,x,!1):f.defaultValue!=null&&Lt(n,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=Wl)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Dn(r),null;case 6:if(n&&r.stateNode!=null)Wg(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=Ls(Io.current),Ls(Ji.current),Zl(r)){if(f=r.stateNode,l=r.memoizedProps,f[Qi]=r,(x=f.nodeValue!==l)&&(n=li,n!==null))switch(n.tag){case 3:Gl(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Gl(f.nodeValue,l,(n.mode&1)!==0)}x&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Qi]=r,r.stateNode=f}return Dn(r),null;case 13:if(Vt($t),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xt&&ui!==null&&(r.mode&1)!==0&&(r.flags&128)===0)qm(),xa(),r.flags|=98560,x=!1;else if(x=Zl(r),f!==null&&f.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Qi]=r}else xa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Dn(r),x=!1}else Hi!==null&&(ld(Hi),Hi=null),x=!0;if(!x)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||($t.current&1)!==0?gn===0&&(gn=3):fd())),r.updateQueue!==null&&(r.flags|=4),Dn(r),null);case 4:return Ea(),Zf(n,r),n===null&&Ro(r.stateNode.containerInfo),Dn(r),null;case 10:return wf(r.type._context),Dn(r),null;case 17:return $n(r.type)&&Yl(),Dn(r),null;case 19:if(Vt($t),x=r.memoizedState,x===null)return Dn(r),null;if(f=(r.flags&128)!==0,C=x.rendering,C===null)if(f)Bo(x,!1);else{if(gn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(C=iu(n),C!==null){for(r.flags|=128,Bo(x,!1),f=C.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)x=l,n=f,x.flags&=14680066,C=x.alternate,C===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=C.childLanes,x.lanes=C.lanes,x.child=C.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=C.memoizedProps,x.memoizedState=C.memoizedState,x.updateQueue=C.updateQueue,x.type=C.type,n=C.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Bt($t,$t.current&1|2),r.child}n=n.sibling}x.tail!==null&&qt()>Ra&&(r.flags|=128,f=!0,Bo(x,!1),r.lanes=4194304)}else{if(!f)if(n=iu(C),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Bo(x,!0),x.tail===null&&x.tailMode==="hidden"&&!C.alternate&&!Xt)return Dn(r),null}else 2*qt()-x.renderingStartTime>Ra&&l!==1073741824&&(r.flags|=128,f=!0,Bo(x,!1),r.lanes=4194304);x.isBackwards?(C.sibling=r.child,r.child=C):(l=x.last,l!==null?l.sibling=C:r.child=C,x.last=C)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=qt(),r.sibling=null,l=$t.current,Bt($t,f?l&1|2:l&1),r):(Dn(r),null);case 22:case 23:return cd(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(ci&1073741824)!==0&&(Dn(r),r.subtreeFlags&6&&(r.flags|=8192)):Dn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function VS(n,r){switch(xf(r),r.tag){case 1:return $n(r.type)&&Yl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ea(),Vt(qn),Vt(Ln),Nf(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Pf(r),null;case 13:if(Vt($t),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));xa()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Vt($t),null;case 4:return Ea(),null;case 10:return wf(r.type._context),null;case 22:case 23:return cd(),null;case 24:return null;default:return null}}var du=!1,In=!1,HS=typeof WeakSet=="function"?WeakSet:Set,He=null;function wa(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){tn(n,r,f)}else l.current=null}function Qf(n,r,l){try{l()}catch(f){tn(n,r,f)}}var Xg=!1;function GS(n,r){if(cf=Nl,n=Em(),tf(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var C=0,k=-1,V=-1,fe=0,Se=0,ye=n,ve=null;t:for(;;){for(var ze;ye!==l||m!==0&&ye.nodeType!==3||(k=C+m),ye!==x||f!==0&&ye.nodeType!==3||(V=C+f),ye.nodeType===3&&(C+=ye.nodeValue.length),(ze=ye.firstChild)!==null;)ve=ye,ye=ze;for(;;){if(ye===n)break t;if(ve===l&&++fe===m&&(k=C),ve===x&&++Se===f&&(V=C),(ze=ye.nextSibling)!==null)break;ye=ve,ve=ye.parentNode}ye=ze}l=k===-1||V===-1?null:{start:k,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(ff={focusedElem:n,selectionRange:l},Nl=!1,He=r;He!==null;)if(r=He,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,He=n;else for(;He!==null;){r=He;try{var Xe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var qe=Xe.memoizedProps,on=Xe.memoizedState,se=r.stateNode,q=se.getSnapshotBeforeUpdate(r.elementType===r.type?qe:Gi(r.type,qe),on);se.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var ae=r.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){tn(r,r.return,Te)}if(n=r.sibling,n!==null){n.return=r.return,He=n;break}He=r.return}return Xe=Xg,Xg=!1,Xe}function zo(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&n)===n){var x=m.destroy;m.destroy=void 0,x!==void 0&&Qf(r,l,x)}m=m.next}while(m!==f)}}function hu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function Jf(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Yg(n){var r=n.alternate;r!==null&&(n.alternate=null,Yg(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Qi],delete r[bo],delete r[mf],delete r[wS],delete r[AS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function qg(n){return n.tag===5||n.tag===3||n.tag===4}function $g(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||qg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ed(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Wl));else if(f!==4&&(n=n.child,n!==null))for(ed(n,r,l),n=n.sibling;n!==null;)ed(n,r,l),n=n.sibling}function td(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(td(n,r,l),n=n.sibling;n!==null;)td(n,r,l),n=n.sibling}var An=null,Wi=!1;function Qr(n,r,l){for(l=l.child;l!==null;)Kg(n,r,l),l=l.sibling}function Kg(n,r,l){if(te&&typeof te.onCommitFiberUnmount=="function")try{te.onCommitFiberUnmount(re,l)}catch{}switch(l.tag){case 5:In||wa(l,r);case 6:var f=An,m=Wi;An=null,Qr(n,r,l),An=f,Wi=m,An!==null&&(Wi?(n=An,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):An.removeChild(l.stateNode));break;case 18:An!==null&&(Wi?(n=An,l=l.stateNode,n.nodeType===8?pf(n.parentNode,l):n.nodeType===1&&pf(n,l),vo(n)):pf(An,l.stateNode));break;case 4:f=An,m=Wi,An=l.stateNode.containerInfo,Wi=!0,Qr(n,r,l),An=f,Wi=m;break;case 0:case 11:case 14:case 15:if(!In&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var x=m,C=x.destroy;x=x.tag,C!==void 0&&((x&2)!==0||(x&4)!==0)&&Qf(l,r,C),m=m.next}while(m!==f)}Qr(n,r,l);break;case 1:if(!In&&(wa(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(k){tn(l,r,k)}Qr(n,r,l);break;case 21:Qr(n,r,l);break;case 22:l.mode&1?(In=(f=In)||l.memoizedState!==null,Qr(n,r,l),In=f):Qr(n,r,l);break;default:Qr(n,r,l)}}function jg(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new HS),r.forEach(function(f){var m=QS.bind(null,n,f);l.has(f)||(l.add(f),f.then(m,m))})}}function Xi(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var x=n,C=r,k=C;e:for(;k!==null;){switch(k.tag){case 5:An=k.stateNode,Wi=!1;break e;case 3:An=k.stateNode.containerInfo,Wi=!0;break e;case 4:An=k.stateNode.containerInfo,Wi=!0;break e}k=k.return}if(An===null)throw Error(t(160));Kg(x,C,m),An=null,Wi=!1;var V=m.alternate;V!==null&&(V.return=null),m.return=null}catch(fe){tn(m,r,fe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Zg(r,n),r=r.sibling}function Zg(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Xi(r,n),tr(n),f&4){try{zo(3,n,n.return),hu(3,n)}catch(qe){tn(n,n.return,qe)}try{zo(5,n,n.return)}catch(qe){tn(n,n.return,qe)}}break;case 1:Xi(r,n),tr(n),f&512&&l!==null&&wa(l,l.return);break;case 5:if(Xi(r,n),tr(n),f&512&&l!==null&&wa(l,l.return),n.flags&32){var m=n.stateNode;try{he(m,"")}catch(qe){tn(n,n.return,qe)}}if(f&4&&(m=n.stateNode,m!=null)){var x=n.memoizedProps,C=l!==null?l.memoizedProps:x,k=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{k==="input"&&x.type==="radio"&&x.name!=null&&Nt(m,x),Pe(k,C);var fe=Pe(k,x);for(C=0;C<V.length;C+=2){var Se=V[C],ye=V[C+1];Se==="style"?ge(m,ye):Se==="dangerouslySetInnerHTML"?oe(m,ye):Se==="children"?he(m,ye):I(m,Se,ye,fe)}switch(k){case"input":ft(m,x);break;case"textarea":hn(m,x);break;case"select":var ve=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!x.multiple;var ze=x.value;ze!=null?Lt(m,!!x.multiple,ze,!1):ve!==!!x.multiple&&(x.defaultValue!=null?Lt(m,!!x.multiple,x.defaultValue,!0):Lt(m,!!x.multiple,x.multiple?[]:"",!1))}m[bo]=x}catch(qe){tn(n,n.return,qe)}}break;case 6:if(Xi(r,n),tr(n),f&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,x=n.memoizedProps;try{m.nodeValue=x}catch(qe){tn(n,n.return,qe)}}break;case 3:if(Xi(r,n),tr(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{vo(r.containerInfo)}catch(qe){tn(n,n.return,qe)}break;case 4:Xi(r,n),tr(n);break;case 13:Xi(r,n),tr(n),m=n.child,m.flags&8192&&(x=m.memoizedState!==null,m.stateNode.isHidden=x,!x||m.alternate!==null&&m.alternate.memoizedState!==null||(rd=qt())),f&4&&jg(n);break;case 22:if(Se=l!==null&&l.memoizedState!==null,n.mode&1?(In=(fe=In)||Se,Xi(r,n),In=fe):Xi(r,n),tr(n),f&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!Se&&(n.mode&1)!==0)for(He=n,Se=n.child;Se!==null;){for(ye=He=Se;He!==null;){switch(ve=He,ze=ve.child,ve.tag){case 0:case 11:case 14:case 15:zo(4,ve,ve.return);break;case 1:wa(ve,ve.return);var Xe=ve.stateNode;if(typeof Xe.componentWillUnmount=="function"){f=ve,l=ve.return;try{r=f,Xe.props=r.memoizedProps,Xe.state=r.memoizedState,Xe.componentWillUnmount()}catch(qe){tn(f,l,qe)}}break;case 5:wa(ve,ve.return);break;case 22:if(ve.memoizedState!==null){e_(ye);continue}}ze!==null?(ze.return=ve,He=ze):e_(ye)}Se=Se.sibling}e:for(Se=null,ye=n;;){if(ye.tag===5){if(Se===null){Se=ye;try{m=ye.stateNode,fe?(x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(k=ye.stateNode,V=ye.memoizedProps.style,C=V!=null&&V.hasOwnProperty("display")?V.display:null,k.style.display=pe("display",C))}catch(qe){tn(n,n.return,qe)}}}else if(ye.tag===6){if(Se===null)try{ye.stateNode.nodeValue=fe?"":ye.memoizedProps}catch(qe){tn(n,n.return,qe)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;Se===ye&&(Se=null),ye=ye.return}Se===ye&&(Se=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:Xi(r,n),tr(n),f&4&&jg(n);break;case 21:break;default:Xi(r,n),tr(n)}}function tr(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(qg(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(he(m,""),f.flags&=-33);var x=$g(n);td(n,x,m);break;case 3:case 4:var C=f.stateNode.containerInfo,k=$g(n);ed(n,k,C);break;default:throw Error(t(161))}}catch(V){tn(n,n.return,V)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function WS(n,r,l){He=n,Qg(n)}function Qg(n,r,l){for(var f=(n.mode&1)!==0;He!==null;){var m=He,x=m.child;if(m.tag===22&&f){var C=m.memoizedState!==null||du;if(!C){var k=m.alternate,V=k!==null&&k.memoizedState!==null||In;k=du;var fe=In;if(du=C,(In=V)&&!fe)for(He=m;He!==null;)C=He,V=C.child,C.tag===22&&C.memoizedState!==null?t_(m):V!==null?(V.return=C,He=V):t_(m);for(;x!==null;)He=x,Qg(x),x=x.sibling;He=m,du=k,In=fe}Jg(n)}else(m.subtreeFlags&8772)!==0&&x!==null?(x.return=m,He=x):Jg(n)}}function Jg(n){for(;He!==null;){var r=He;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:In||hu(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!In)if(l===null)f.componentDidMount();else{var m=r.elementType===r.type?l.memoizedProps:Gi(r.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&eg(r,x,f);break;case 3:var C=r.updateQueue;if(C!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}eg(r,C,l)}break;case 5:var k=r.stateNode;if(l===null&&r.flags&4){l=k;var V=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var fe=r.alternate;if(fe!==null){var Se=fe.memoizedState;if(Se!==null){var ye=Se.dehydrated;ye!==null&&vo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}In||r.flags&512&&Jf(r)}catch(ve){tn(r,r.return,ve)}}if(r===n){He=null;break}if(l=r.sibling,l!==null){l.return=r.return,He=l;break}He=r.return}}function e_(n){for(;He!==null;){var r=He;if(r===n){He=null;break}var l=r.sibling;if(l!==null){l.return=r.return,He=l;break}He=r.return}}function t_(n){for(;He!==null;){var r=He;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{hu(4,r)}catch(V){tn(r,l,V)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var m=r.return;try{f.componentDidMount()}catch(V){tn(r,m,V)}}var x=r.return;try{Jf(r)}catch(V){tn(r,x,V)}break;case 5:var C=r.return;try{Jf(r)}catch(V){tn(r,C,V)}}}catch(V){tn(r,r.return,V)}if(r===n){He=null;break}var k=r.sibling;if(k!==null){k.return=r.return,He=k;break}He=r.return}}var XS=Math.ceil,pu=A.ReactCurrentDispatcher,nd=A.ReactCurrentOwner,Ri=A.ReactCurrentBatchConfig,Et=0,Sn=null,cn=null,Rn=0,ci=0,Aa=qr(0),gn=0,Vo=null,Ds=0,mu=0,id=0,Ho=null,jn=null,rd=0,Ra=1/0,wr=null,gu=!1,sd=null,Jr=null,_u=!1,es=null,vu=0,Go=0,ad=null,xu=-1,Su=0;function Hn(){return(Et&6)!==0?qt():xu!==-1?xu:xu=qt()}function ts(n){return(n.mode&1)===0?1:(Et&2)!==0&&Rn!==0?Rn&-Rn:CS.transition!==null?(Su===0&&(Su=pn()),Su):(n=dt,n!==0||(n=window.event,n=n===void 0?16:im(n.type)),n)}function Yi(n,r,l,f){if(50<Go)throw Go=0,ad=null,Error(t(185));an(n,l,f),((Et&2)===0||n!==Sn)&&(n===Sn&&((Et&2)===0&&(mu|=l),gn===4&&ns(n,Rn)),Zn(n,f),l===1&&Et===0&&(r.mode&1)===0&&(Ra=qt()+500,$l&&Kr()))}function Zn(n,r){var l=n.callbackNode;Ft(n,r);var f=gt(n,n===Sn?Rn:0);if(f===0)l!==null&&co(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&co(l),r===1)n.tag===0?RS(i_.bind(null,n)):Hm(i_.bind(null,n)),ES(function(){(Et&6)===0&&Kr()}),l=null;else{switch(Oi(f)){case 1:l=fo;break;case 4:l=ho;break;case 16:l=P;break;case 536870912:l=ce;break;default:l=P}l=f_(l,n_.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function n_(n,r){if(xu=-1,Su=0,(Et&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Ca()&&n.callbackNode!==l)return null;var f=gt(n,n===Sn?Rn:0);if(f===0)return null;if((f&30)!==0||(f&n.expiredLanes)!==0||r)r=yu(n,f);else{r=f;var m=Et;Et|=2;var x=s_();(Sn!==n||Rn!==r)&&(wr=null,Ra=qt()+500,Us(n,r));do try{$S();break}catch(k){r_(n,k)}while(!0);Tf(),pu.current=x,Et=m,cn!==null?r=0:(Sn=null,Rn=0,r=gn)}if(r!==0){if(r===2&&(m=Pt(n),m!==0&&(f=m,r=od(n,m))),r===1)throw l=Vo,Us(n,0),ns(n,f),Zn(n,qt()),l;if(r===6)ns(n,f);else{if(m=n.current.alternate,(f&30)===0&&!YS(m)&&(r=yu(n,f),r===2&&(x=Pt(n),x!==0&&(f=x,r=od(n,x))),r===1))throw l=Vo,Us(n,0),ns(n,f),Zn(n,qt()),l;switch(n.finishedWork=m,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:Fs(n,jn,wr);break;case 3:if(ns(n,f),(f&130023424)===f&&(r=rd+500-qt(),10<r)){if(gt(n,0)!==0)break;if(m=n.suspendedLanes,(m&f)!==f){Hn(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=hf(Fs.bind(null,n,jn,wr),r);break}Fs(n,jn,wr);break;case 4:if(ns(n,f),(f&4194240)===f)break;for(r=n.eventTimes,m=-1;0<f;){var C=31-Ne(f);x=1<<C,C=r[C],C>m&&(m=C),f&=~x}if(f=m,f=qt()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*XS(f/1960))-f,10<f){n.timeoutHandle=hf(Fs.bind(null,n,jn,wr),f);break}Fs(n,jn,wr);break;case 5:Fs(n,jn,wr);break;default:throw Error(t(329))}}}return Zn(n,qt()),n.callbackNode===l?n_.bind(null,n):null}function od(n,r){var l=Ho;return n.current.memoizedState.isDehydrated&&(Us(n,r).flags|=256),n=yu(n,r),n!==2&&(r=jn,jn=l,r!==null&&ld(r)),n}function ld(n){jn===null?jn=n:jn.push.apply(jn,n)}function YS(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],x=m.getSnapshot;m=m.value;try{if(!Vi(x(),m))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ns(n,r){for(r&=~id,r&=~mu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Ne(r),f=1<<l;n[l]=-1,r&=~f}}function i_(n){if((Et&6)!==0)throw Error(t(327));Ca();var r=gt(n,0);if((r&1)===0)return Zn(n,qt()),null;var l=yu(n,r);if(n.tag!==0&&l===2){var f=Pt(n);f!==0&&(r=f,l=od(n,f))}if(l===1)throw l=Vo,Us(n,0),ns(n,r),Zn(n,qt()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Fs(n,jn,wr),Zn(n,qt()),null}function ud(n,r){var l=Et;Et|=1;try{return n(r)}finally{Et=l,Et===0&&(Ra=qt()+500,$l&&Kr())}}function Is(n){es!==null&&es.tag===0&&(Et&6)===0&&Ca();var r=Et;Et|=1;var l=Ri.transition,f=dt;try{if(Ri.transition=null,dt=1,n)return n()}finally{dt=f,Ri.transition=l,Et=r,(Et&6)===0&&Kr()}}function cd(){ci=Aa.current,Vt(Aa)}function Us(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,MS(l)),cn!==null)for(l=cn.return;l!==null;){var f=l;switch(xf(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Yl();break;case 3:Ea(),Vt(qn),Vt(Ln),Nf();break;case 5:Pf(f);break;case 4:Ea();break;case 13:Vt($t);break;case 19:Vt($t);break;case 10:wf(f.type._context);break;case 22:case 23:cd()}l=l.return}if(Sn=n,cn=n=is(n.current,null),Rn=ci=r,gn=0,Vo=null,id=mu=Ds=0,jn=Ho=null,Ps!==null){for(r=0;r<Ps.length;r++)if(l=Ps[r],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,x=l.pending;if(x!==null){var C=x.next;x.next=m,f.next=C}l.pending=f}Ps=null}return n}function r_(n,r){do{var l=cn;try{if(Tf(),ru.current=lu,su){for(var f=Kt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}su=!1}if(Ns=0,xn=mn=Kt=null,Uo=!1,Fo=0,nd.current=null,l===null||l.return===null){gn=1,Vo=r,cn=null;break}e:{var x=n,C=l.return,k=l,V=r;if(r=Rn,k.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var fe=V,Se=k,ye=Se.tag;if((Se.mode&1)===0&&(ye===0||ye===11||ye===15)){var ve=Se.alternate;ve?(Se.updateQueue=ve.updateQueue,Se.memoizedState=ve.memoizedState,Se.lanes=ve.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var ze=bg(C);if(ze!==null){ze.flags&=-257,Pg(ze,C,k,x,r),ze.mode&1&&Cg(x,fe,r),r=ze,V=fe;var Xe=r.updateQueue;if(Xe===null){var qe=new Set;qe.add(V),r.updateQueue=qe}else Xe.add(V);break e}else{if((r&1)===0){Cg(x,fe,r),fd();break e}V=Error(t(426))}}else if(Xt&&k.mode&1){var on=bg(C);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),Pg(on,C,k,x,r),Mf(Ta(V,k));break e}}x=V=Ta(V,k),gn!==4&&(gn=2),Ho===null?Ho=[x]:Ho.push(x),x=C;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var se=Ag(x,V,r);Jm(x,se);break e;case 1:k=V;var q=x.type,ae=x.stateNode;if((x.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(Jr===null||!Jr.has(ae)))){x.flags|=65536,r&=-r,x.lanes|=r;var Te=Rg(x,k,r);Jm(x,Te);break e}}x=x.return}while(x!==null)}o_(l)}catch(Qe){r=Qe,cn===l&&l!==null&&(cn=l=l.return);continue}break}while(!0)}function s_(){var n=pu.current;return pu.current=lu,n===null?lu:n}function fd(){(gn===0||gn===3||gn===2)&&(gn=4),Sn===null||(Ds&268435455)===0&&(mu&268435455)===0||ns(Sn,Rn)}function yu(n,r){var l=Et;Et|=2;var f=s_();(Sn!==n||Rn!==r)&&(wr=null,Us(n,r));do try{qS();break}catch(m){r_(n,m)}while(!0);if(Tf(),Et=l,pu.current=f,cn!==null)throw Error(t(261));return Sn=null,Rn=0,gn}function qS(){for(;cn!==null;)a_(cn)}function $S(){for(;cn!==null&&!Pl();)a_(cn)}function a_(n){var r=c_(n.alternate,n,ci);n.memoizedProps=n.pendingProps,r===null?o_(n):cn=r,nd.current=null}function o_(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=zS(l,r,ci),l!==null){cn=l;return}}else{if(l=VS(l,r),l!==null){l.flags&=32767,cn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gn=6,cn=null;return}}if(r=r.sibling,r!==null){cn=r;return}cn=r=n}while(r!==null);gn===0&&(gn=5)}function Fs(n,r,l){var f=dt,m=Ri.transition;try{Ri.transition=null,dt=1,KS(n,r,l,f)}finally{Ri.transition=m,dt=f}return null}function KS(n,r,l,f){do Ca();while(es!==null);if((Et&6)!==0)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=l.lanes|l.childLanes;if(_t(n,x),n===Sn&&(cn=Sn=null,Rn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||_u||(_u=!0,f_(P,function(){return Ca(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=Ri.transition,Ri.transition=null;var C=dt;dt=1;var k=Et;Et|=4,nd.current=null,GS(n,l),Zg(l,n),mS(ff),Nl=!!cf,ff=cf=null,n.current=l,WS(l),Hc(),Et=k,dt=C,Ri.transition=x}else n.current=l;if(_u&&(_u=!1,es=n,vu=m),x=n.pendingLanes,x===0&&(Jr=null),Ue(l.stateNode),Zn(n,qt()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)m=r[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(gu)throw gu=!1,n=sd,sd=null,n;return(vu&1)!==0&&n.tag!==0&&Ca(),x=n.pendingLanes,(x&1)!==0?n===ad?Go++:(Go=0,ad=n):Go=0,Kr(),null}function Ca(){if(es!==null){var n=Oi(vu),r=Ri.transition,l=dt;try{if(Ri.transition=null,dt=16>n?16:n,es===null)var f=!1;else{if(n=es,es=null,vu=0,(Et&6)!==0)throw Error(t(331));var m=Et;for(Et|=4,He=n.current;He!==null;){var x=He,C=x.child;if((He.flags&16)!==0){var k=x.deletions;if(k!==null){for(var V=0;V<k.length;V++){var fe=k[V];for(He=fe;He!==null;){var Se=He;switch(Se.tag){case 0:case 11:case 15:zo(8,Se,x)}var ye=Se.child;if(ye!==null)ye.return=Se,He=ye;else for(;He!==null;){Se=He;var ve=Se.sibling,ze=Se.return;if(Yg(Se),Se===fe){He=null;break}if(ve!==null){ve.return=ze,He=ve;break}He=ze}}}var Xe=x.alternate;if(Xe!==null){var qe=Xe.child;if(qe!==null){Xe.child=null;do{var on=qe.sibling;qe.sibling=null,qe=on}while(qe!==null)}}He=x}}if((x.subtreeFlags&2064)!==0&&C!==null)C.return=x,He=C;else e:for(;He!==null;){if(x=He,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:zo(9,x,x.return)}var se=x.sibling;if(se!==null){se.return=x.return,He=se;break e}He=x.return}}var q=n.current;for(He=q;He!==null;){C=He;var ae=C.child;if((C.subtreeFlags&2064)!==0&&ae!==null)ae.return=C,He=ae;else e:for(C=q;He!==null;){if(k=He,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:hu(9,k)}}catch(Qe){tn(k,k.return,Qe)}if(k===C){He=null;break e}var Te=k.sibling;if(Te!==null){Te.return=k.return,He=Te;break e}He=k.return}}if(Et=m,Kr(),te&&typeof te.onPostCommitFiberRoot=="function")try{te.onPostCommitFiberRoot(re,n)}catch{}f=!0}return f}finally{dt=l,Ri.transition=r}}return!1}function l_(n,r,l){r=Ta(l,r),r=Ag(n,r,1),n=Zr(n,r,1),r=Hn(),n!==null&&(an(n,1,r),Zn(n,r))}function tn(n,r,l){if(n.tag===3)l_(n,n,l);else for(;r!==null;){if(r.tag===3){l_(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Jr===null||!Jr.has(f))){n=Ta(l,n),n=Rg(r,n,1),r=Zr(r,n,1),n=Hn(),r!==null&&(an(r,1,n),Zn(r,n));break}}r=r.return}}function jS(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=Hn(),n.pingedLanes|=n.suspendedLanes&l,Sn===n&&(Rn&l)===l&&(gn===4||gn===3&&(Rn&130023424)===Rn&&500>qt()-rd?Us(n,0):id|=l),Zn(n,r)}function u_(n,r){r===0&&((n.mode&1)===0?r=1:(r=lt,lt<<=1,(lt&130023424)===0&&(lt=4194304)));var l=Hn();n=Mr(n,r),n!==null&&(an(n,r,l),Zn(n,l))}function ZS(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),u_(n,l)}function QS(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),u_(n,l)}var c_;c_=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||qn.current)Kn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Kn=!1,BS(n,r,l);Kn=(n.flags&131072)!==0}else Kn=!1,Xt&&(r.flags&1048576)!==0&&Gm(r,jl,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;fu(n,r),n=r.pendingProps;var m=ga(r,Ln.current);Ma(r,l),m=Uf(null,r,f,n,m,l);var x=Ff();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,$n(f)?(x=!0,ql(r)):x=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Cf(r),m.updater=uu,r.stateNode=m,m._reactInternals=r,Hf(r,f,n,l),r=Yf(null,r,f,!0,x,l)):(r.tag=0,Xt&&x&&vf(r),Vn(null,r,m,l),r=r.child),r;case 16:f=r.elementType;e:{switch(fu(n,r),n=r.pendingProps,m=f._init,f=m(f._payload),r.type=f,m=r.tag=ey(f),n=Gi(f,n),m){case 0:r=Xf(null,r,f,n,l);break e;case 1:r=Fg(null,r,f,n,l);break e;case 11:r=Lg(null,r,f,n,l);break e;case 14:r=Ng(null,r,f,Gi(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Gi(f,m),Xf(n,r,f,m,l);case 1:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Gi(f,m),Fg(n,r,f,m,l);case 3:e:{if(Og(r),n===null)throw Error(t(387));f=r.pendingProps,x=r.memoizedState,m=x.element,Qm(n,r),nu(r,f,null,l);var C=r.memoizedState;if(f=C.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){m=Ta(Error(t(423)),r),r=kg(n,r,f,l,m);break e}else if(f!==m){m=Ta(Error(t(424)),r),r=kg(n,r,f,l,m);break e}else for(ui=Yr(r.stateNode.containerInfo.firstChild),li=r,Xt=!0,Hi=null,l=jm(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(xa(),f===m){r=Tr(n,r,l);break e}Vn(n,r,f,l)}r=r.child}return r;case 5:return tg(r),n===null&&yf(r),f=r.type,m=r.pendingProps,x=n!==null?n.memoizedProps:null,C=m.children,df(f,m)?C=null:x!==null&&df(f,x)&&(r.flags|=32),Ug(n,r),Vn(n,r,C,l),r.child;case 6:return n===null&&yf(r),null;case 13:return Bg(n,r,l);case 4:return bf(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=Sa(r,null,f,l):Vn(n,r,f,l),r.child;case 11:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Gi(f,m),Lg(n,r,f,m,l);case 7:return Vn(n,r,r.pendingProps,l),r.child;case 8:return Vn(n,r,r.pendingProps.children,l),r.child;case 12:return Vn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,m=r.pendingProps,x=r.memoizedProps,C=m.value,Bt(Jl,f._currentValue),f._currentValue=C,x!==null)if(Vi(x.value,C)){if(x.children===m.children&&!qn.current){r=Tr(n,r,l);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var k=x.dependencies;if(k!==null){C=x.child;for(var V=k.firstContext;V!==null;){if(V.context===f){if(x.tag===1){V=Er(-1,l&-l),V.tag=2;var fe=x.updateQueue;if(fe!==null){fe=fe.shared;var Se=fe.pending;Se===null?V.next=V:(V.next=Se.next,Se.next=V),fe.pending=V}}x.lanes|=l,V=x.alternate,V!==null&&(V.lanes|=l),Af(x.return,l,r),k.lanes|=l;break}V=V.next}}else if(x.tag===10)C=x.type===r.type?null:x.child;else if(x.tag===18){if(C=x.return,C===null)throw Error(t(341));C.lanes|=l,k=C.alternate,k!==null&&(k.lanes|=l),Af(C,l,r),C=x.sibling}else C=x.child;if(C!==null)C.return=x;else for(C=x;C!==null;){if(C===r){C=null;break}if(x=C.sibling,x!==null){x.return=C.return,C=x;break}C=C.return}x=C}Vn(n,r,m.children,l),r=r.child}return r;case 9:return m=r.type,f=r.pendingProps.children,Ma(r,l),m=wi(m),f=f(m),r.flags|=1,Vn(n,r,f,l),r.child;case 14:return f=r.type,m=Gi(f,r.pendingProps),m=Gi(f.type,m),Ng(n,r,f,m,l);case 15:return Dg(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Gi(f,m),fu(n,r),r.tag=1,$n(f)?(n=!0,ql(r)):n=!1,Ma(r,l),Tg(r,f,m),Hf(r,f,m,l),Yf(null,r,f,!0,n,l);case 19:return Vg(n,r,l);case 22:return Ig(n,r,l)}throw Error(t(156,r.tag))};function f_(n,r){return ws(n,r)}function JS(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ci(n,r,l,f){return new JS(n,r,l,f)}function dd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ey(n){if(typeof n=="function")return dd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===W)return 11;if(n===Q)return 14}return 2}function is(n,r){var l=n.alternate;return l===null?(l=Ci(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Mu(n,r,l,f,m,x){var C=2;if(f=n,typeof n=="function")dd(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case D:return Os(l.children,m,x,r);case T:C=8,m|=8;break;case L:return n=Ci(12,l,r,m|2),n.elementType=L,n.lanes=x,n;case J:return n=Ci(13,l,r,m),n.elementType=J,n.lanes=x,n;case z:return n=Ci(19,l,r,m),n.elementType=z,n.lanes=x,n;case K:return Eu(l,m,x,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case O:C=10;break e;case B:C=9;break e;case W:C=11;break e;case Q:C=14;break e;case ue:C=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Ci(C,l,r,m),r.elementType=n,r.type=f,r.lanes=x,r}function Os(n,r,l,f){return n=Ci(7,n,f,r),n.lanes=l,n}function Eu(n,r,l,f){return n=Ci(22,n,f,r),n.elementType=K,n.lanes=l,n.stateNode={isHidden:!1},n}function hd(n,r,l){return n=Ci(6,n,null,r),n.lanes=l,n}function pd(n,r,l){return r=Ci(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function ty(n,r,l,f,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Be(0),this.expirationTimes=Be(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Be(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function md(n,r,l,f,m,x,C,k,V){return n=new ty(n,r,l,k,V),r===1?(r=1,x===!0&&(r|=8)):r=0,x=Ci(3,null,null,r),n.current=x,x.stateNode=n,x.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cf(x),n}function ny(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function d_(n){if(!n)return $r;n=n._reactInternals;e:{if(zn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if($n(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if($n(l))return zm(n,l,r)}return r}function h_(n,r,l,f,m,x,C,k,V){return n=md(l,f,!0,n,m,x,C,k,V),n.context=d_(null),l=n.current,f=Hn(),m=ts(l),x=Er(f,m),x.callback=r??null,Zr(l,x,m),n.current.lanes=m,an(n,m,f),Zn(n,f),n}function Tu(n,r,l,f){var m=r.current,x=Hn(),C=ts(m);return l=d_(l),r.context===null?r.context=l:r.pendingContext=l,r=Er(x,C),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=Zr(m,r,C),n!==null&&(Yi(n,m,C,x),tu(n,m,C)),C}function wu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function p_(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function gd(n,r){p_(n,r),(n=n.alternate)&&p_(n,r)}function iy(){return null}var m_=typeof reportError=="function"?reportError:function(n){console.error(n)};function _d(n){this._internalRoot=n}Au.prototype.render=_d.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Tu(n,r,null,null)},Au.prototype.unmount=_d.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Is(function(){Tu(null,n,null,null)}),r[vr]=null}};function Au(n){this._internalRoot=n}Au.prototype.unstable_scheduleHydration=function(n){if(n){var r=ki();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Gr.length&&r!==0&&r<Gr[l].priority;l++);Gr.splice(l,0,n),l===0&&tm(n)}};function vd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ru(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function g_(){}function ry(n,r,l,f,m){if(m){if(typeof f=="function"){var x=f;f=function(){var fe=wu(C);x.call(fe)}}var C=h_(r,f,n,0,null,!1,!1,"",g_);return n._reactRootContainer=C,n[vr]=C.current,Ro(n.nodeType===8?n.parentNode:n),Is(),C}for(;m=n.lastChild;)n.removeChild(m);if(typeof f=="function"){var k=f;f=function(){var fe=wu(V);k.call(fe)}}var V=md(n,0,!1,null,null,!1,!1,"",g_);return n._reactRootContainer=V,n[vr]=V.current,Ro(n.nodeType===8?n.parentNode:n),Is(function(){Tu(r,V,l,f)}),V}function Cu(n,r,l,f,m){var x=l._reactRootContainer;if(x){var C=x;if(typeof m=="function"){var k=m;m=function(){var V=wu(C);k.call(V)}}Tu(r,C,n,m)}else C=ry(l,r,n,m,f);return wu(C)}_r=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Ve(r.pendingLanes);l!==0&&(Pn(r,l|1),Zn(r,qt()),(Et&6)===0&&(Ra=qt()+500,Kr()))}break;case 13:Is(function(){var f=Mr(n,1);if(f!==null){var m=Hn();Yi(f,n,1,m)}}),gd(n,1)}},Rt=function(n){if(n.tag===13){var r=Mr(n,134217728);if(r!==null){var l=Hn();Yi(r,n,134217728,l)}gd(n,134217728)}},Wt=function(n){if(n.tag===13){var r=ts(n),l=Mr(n,r);if(l!==null){var f=Hn();Yi(l,n,r,f)}gd(n,r)}},ki=function(){return dt},Dt=function(n,r){var l=dt;try{return dt=n,r()}finally{dt=l}},et=function(n,r,l){switch(r){case"input":if(ft(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var m=Xl(f);if(!m)throw Error(t(90));ut(f),ft(f,m)}}}break;case"textarea":hn(n,l);break;case"select":r=l.value,r!=null&&Lt(n,!!l.multiple,r,!1)}},Oe=ud,_e=Is;var sy={usingClientEntryPoint:!1,Events:[Po,pa,Xl,me,Ce,ud]},Wo={findFiberByHostInstance:As,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ay={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ts(n),n===null?null:n.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance||iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bu.isDisabled&&bu.supportsFiber)try{re=bu.inject(ay),te=bu}catch{}}return Qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sy,Qn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vd(r))throw Error(t(200));return ny(n,r,null,l)},Qn.createRoot=function(n,r){if(!vd(n))throw Error(t(299));var l=!1,f="",m=m_;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=md(n,1,!1,null,null,l,!1,f,m),n[vr]=r.current,Ro(n.nodeType===8?n.parentNode:n),new _d(r)},Qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ts(r),n=n===null?null:n.stateNode,n},Qn.flushSync=function(n){return Is(n)},Qn.hydrate=function(n,r,l){if(!Ru(r))throw Error(t(200));return Cu(null,n,r,!0,l)},Qn.hydrateRoot=function(n,r,l){if(!vd(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,x="",C=m_;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(C=l.onRecoverableError)),r=h_(r,null,n,1,l??null,m,!1,x,C),n[vr]=r.current,Ro(n),f)for(n=0;n<f.length;n++)l=f[n],m=l._getVersion,m=m(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,m]:r.mutableSourceEagerHydrationData.push(l,m);return new Au(r)},Qn.render=function(n,r,l){if(!Ru(r))throw Error(t(200));return Cu(null,n,r,!1,l)},Qn.unmountComponentAtNode=function(n){if(!Ru(n))throw Error(t(40));return n._reactRootContainer?(Is(function(){Cu(null,null,n,!1,function(){n._reactRootContainer=null,n[vr]=null})}),!0):!1},Qn.unstable_batchedUpdates=ud,Qn.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!Ru(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Cu(n,r,l,!1,f)},Qn.version="18.3.1-next-f1338f8080-20240426",Qn}var T_;function my(){if(T_)return yd.exports;T_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),yd.exports=py(),yd.exports}var w_;function gy(){if(w_)return Pu;w_=1;var a=my();return Pu.createRoot=a.createRoot,Pu.hydrateRoot=a.hydrateRoot,Pu}var _y=gy();const vy=q0(_y);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _p="186",xy=0,A_=1,Sy=2,lc=1,yy=2,tl=3,Js=0,ti=1,Dr=2,Ur=0,al=1,R_=2,C_=3,b_=4,My=5,Ga=100,Ey=101,Ty=102,wy=103,Ay=104,Ry=200,Cy=201,by=202,Py=203,$0=204,K0=205,Ly=206,Ny=207,Dy=208,Iy=209,Uy=210,Fy=211,Oy=212,ky=213,By=214,dh=0,hh=1,ph=2,cl=3,mh=4,gh=5,_h=6,vh=7,j0=0,zy=1,Vy=2,fr=0,Z0=1,Q0=2,J0=3,ev=4,tv=5,nv=6,iv=7,rv=300,ea=301,Qa=302,Td=303,wd=304,Ic=306,xh=1e3,Ir=1001,Sh=1002,Cn=1003,Hy=1004,Lu=1005,kn=1006,Ad=1007,Ys=1008,Di=1009,sv=1010,av=1011,fl=1012,vp=1013,hr=1014,lr=1015,pr=1016,xp=1017,Sp=1018,dl=1020,ov=35902,lv=35899,uv=1021,cv=1022,ji=1023,Or=1026,qs=1027,fv=1028,yp=1029,ta=1030,Mp=1031,Ep=1033,uc=33776,cc=33777,fc=33778,dc=33779,yh=35840,Mh=35841,Eh=35842,Th=35843,wh=36196,Ah=37492,Rh=37496,Ch=37488,bh=37489,vc=37490,Ph=37491,Lh=37808,Nh=37809,Dh=37810,Ih=37811,Uh=37812,Fh=37813,Oh=37814,kh=37815,Bh=37816,zh=37817,Vh=37818,Hh=37819,Gh=37820,Wh=37821,Xh=36492,Yh=36494,qh=36495,$h=36283,Kh=36284,xc=36285,jh=36286,Gy=3200,P_=0,Wy=1,fs="",Li="srgb",Sc="srgb-linear",yc="linear",It="srgb",Rd=7680,Xy=519,Yy=512,qy=513,$y=514,Tp=515,Ky=516,jy=517,wp=518,Zy=519,Qy=35044,L_="300 es",ur=2e3,Mc=2001;function Jy(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ec(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function eM(){const a=Ec("canvas");return a.style.display="block",a}const N_={};function D_(...a){const e="THREE."+a.shift();console.log(e,...a)}function dv(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function rt(...a){a=dv(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function bt(...a){a=dv(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function qa(...a){const e=a.join(" ");e in N_||(N_[e]=!0,rt(...a))}function tM(a,e,t){return new Promise(function(i,s){function o(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:s();break;case a.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const nM={[dh]:hh,[ph]:_h,[mh]:vh,[cl]:gh,[hh]:dh,[_h]:ph,[vh]:mh,[gh]:cl};class ia{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,u=s.length;o<u;o++)s[o].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hc=Math.PI/180,Zh=180/Math.PI;function Ml(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Un[a&255]+Un[a>>8&255]+Un[a>>16&255]+Un[a>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]).toLowerCase()}function xt(a,e,t){return Math.max(e,Math.min(t,a))}function iM(a,e){return(a%e+e)%e}function Cd(a,e,t){return(1-t)*a+t*e}function Yo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:case Uint8ClampedArray:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Kp=class Kp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*i-u*s+e.x,this.y=o*s+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kp.prototype.isVector2=!0;let Mt=Kp;class so{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,u,c){let d=i[s+0],h=i[s+1],p=i[s+2],v=i[s+3],g=o[u+0],y=o[u+1],E=o[u+2],M=o[u+3];if(v!==M||d!==g||h!==y||p!==E){let _=d*g+h*y+p*E+v*M;_<0&&(g=-g,y=-y,E=-E,M=-M,_=-_);let S=1-c;if(_<.9995){const R=Math.acos(_),I=Math.sin(R);S=Math.sin(S*R)/I,c=Math.sin(c*R)/I,d=d*S+g*c,h=h*S+y*c,p=p*S+E*c,v=v*S+M*c}else{d=d*S+g*c,h=h*S+y*c,p=p*S+E*c,v=v*S+M*c;const R=1/Math.sqrt(d*d+h*h+p*p+v*v);d*=R,h*=R,p*=R,v*=R}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,i,s,o,u){const c=i[s],d=i[s+1],h=i[s+2],p=i[s+3],v=o[u],g=o[u+1],y=o[u+2],E=o[u+3];return e[t]=c*E+p*v+d*y-h*g,e[t+1]=d*E+p*g+h*v-c*y,e[t+2]=h*E+p*y+c*g-d*v,e[t+3]=p*E-c*v-d*g-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(i/2),p=c(s/2),v=c(o/2),g=d(i/2),y=d(s/2),E=d(o/2);switch(u){case"XYZ":this._x=g*p*v+h*y*E,this._y=h*y*v-g*p*E,this._z=h*p*E+g*y*v,this._w=h*p*v-g*y*E;break;case"YXZ":this._x=g*p*v+h*y*E,this._y=h*y*v-g*p*E,this._z=h*p*E-g*y*v,this._w=h*p*v+g*y*E;break;case"ZXY":this._x=g*p*v-h*y*E,this._y=h*y*v+g*p*E,this._z=h*p*E+g*y*v,this._w=h*p*v-g*y*E;break;case"ZYX":this._x=g*p*v-h*y*E,this._y=h*y*v+g*p*E,this._z=h*p*E-g*y*v,this._w=h*p*v+g*y*E;break;case"YZX":this._x=g*p*v+h*y*E,this._y=h*y*v+g*p*E,this._z=h*p*E-g*y*v,this._w=h*p*v-g*y*E;break;case"XZY":this._x=g*p*v-h*y*E,this._y=h*y*v-g*p*E,this._z=h*p*E+g*y*v,this._w=h*p*v+g*y*E;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],v=t[10],g=i+c+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(p-d)*y,this._y=(o-h)*y,this._z=(u-s)*y}else if(i>c&&i>v){const y=2*Math.sqrt(1+i-c-v);this._w=(p-d)/y,this._x=.25*y,this._y=(s+u)/y,this._z=(o+h)/y}else if(c>v){const y=2*Math.sqrt(1+c-i-v);this._w=(o-h)/y,this._x=(s+u)/y,this._y=.25*y,this._z=(d+p)/y}else{const y=2*Math.sqrt(1+v-i-c);this._w=(u-s)/y,this._x=(o+h)/y,this._y=(d+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+u*c+s*h-o*d,this._y=s*p+u*d+o*c-i*h,this._z=o*p+u*h+i*d-s*c,this._w=u*p-i*c-s*d-o*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,o=e._z,u=e._w,c=this.dot(e);c<0&&(i=-i,s=-s,o=-o,u=-u,c=-c);let d=1-t;if(c<.9995){const h=Math.acos(c),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+i*t,this._y=this._y*d+s*t,this._z=this._z*d+o*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+s*t,this._z=this._z*d+o*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const jp=class jp{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(I_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(I_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,u=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*u,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*u,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*s-c*i),p=2*(c*t-o*s),v=2*(o*i-u*t);return this.x=t+d*h+u*v-c*p,this.y=i+d*p+c*h-o*v,this.z=s+d*v+o*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,u=t.x,c=t.y,d=t.z;return this.x=s*d-o*c,this.y=o*u-i*d,this.z=i*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bd.copy(this).projectOnVector(e),this.sub(bd)}reflect(e){return this.sub(bd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jp.prototype.isVector3=!0;let ie=jp;const bd=new ie,I_=new so,Zp=class Zp{constructor(e,t,i,s,o,u,c,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,u,c,d,h)}set(e,t,i,s,o,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=o,p[5]=d,p[6]=i,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,u=i[0],c=i[3],d=i[6],h=i[1],p=i[4],v=i[7],g=i[2],y=i[5],E=i[8],M=s[0],_=s[3],S=s[6],R=s[1],I=s[4],A=s[7],b=s[2],N=s[5],D=s[8];return o[0]=u*M+c*R+d*b,o[3]=u*_+c*I+d*N,o[6]=u*S+c*A+d*D,o[1]=h*M+p*R+v*b,o[4]=h*_+p*I+v*N,o[7]=h*S+p*A+v*D,o[2]=g*M+y*R+E*b,o[5]=g*_+y*I+E*N,o[8]=g*S+y*A+E*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-i*o*p+i*c*d+s*o*h-s*u*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],v=p*u-c*h,g=c*d-p*o,y=h*o-u*d,E=t*v+i*g+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=v*M,e[1]=(s*h-p*i)*M,e[2]=(c*i-s*u)*M,e[3]=g*M,e[4]=(p*t-s*d)*M,e[5]=(s*o-c*t)*M,e[6]=y*M,e[7]=(i*d-h*t)*M,e[8]=(u*t-i*o)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,u,c){const d=Math.cos(o),h=Math.sin(o);return this.set(i*d,i*h,-i*(d*u+h*c)+u+e,-s*h,s*d,-s*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return qa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pd.makeScale(e,t)),this}rotate(e){return qa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pd.makeRotation(-e)),this}translate(e,t){return qa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zp.prototype.isMatrix3=!0;let ot=Zp;const Pd=new ot,U_=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F_=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rM(){const a={enabled:!0,workingColorSpace:Sc,spaces:{},convert:function(s,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===It&&(s.r=Fr(s.r),s.g=Fr(s.g),s.b=Fr(s.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(s.r=$a(s.r),s.g=$a(s.g),s.b=$a(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fs?yc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,u){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return qa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return qa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[Sc]:{primaries:e,whitePoint:i,transfer:yc,toXYZ:U_,fromXYZ:F_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Li},outputColorSpaceConfig:{drawingBufferColorSpace:Li}},[Li]:{primaries:e,whitePoint:i,transfer:It,toXYZ:U_,fromXYZ:F_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Li}}}),a}const vt=rM();function Fr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function $a(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ba;class sM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ba===void 0&&(ba=Ec("canvas")),ba.width=e.width,ba.height=e.height;const s=ba.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ba}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ec("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let u=0;u<o.length;u++)o[u]=Fr(o[u]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fr(t[i]/255)*255):t[i]=Fr(t[i]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aM=0;class Ap{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Ml(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?o.push(Ld(s[u].image)):o.push(Ld(s[u]))}else o=Ld(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function Ld(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?sM.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let oM=0;const Nd=new ie;class Wn extends ia{constructor(e=Wn.DEFAULT_IMAGE,t=Wn.DEFAULT_MAPPING,i=Ir,s=Ir,o=kn,u=Ys,c=ji,d=Di,h=Wn.DEFAULT_ANISOTROPY,p=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Ml(),this.name="",this.source=new Ap(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nd).x}get height(){return this.source.getSize(Nd).y}get depth(){return this.source.getSize(Nd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xh:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case Sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xh:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case Sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=rv;Wn.DEFAULT_ANISOTROPY=1;const Qp=class Qp{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*s+u[12]*o,this.y=u[1]*t+u[5]*i+u[9]*s+u[13]*o,this.z=u[2]*t+u[6]*i+u[10]*s+u[14]*o,this.w=u[3]*t+u[7]*i+u[11]*s+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const d=e.elements,h=d[0],p=d[4],v=d[8],g=d[1],y=d[5],E=d[9],M=d[2],_=d[6],S=d[10];if(Math.abs(p-g)<.01&&Math.abs(v-M)<.01&&Math.abs(E-_)<.01){if(Math.abs(p+g)<.1&&Math.abs(v+M)<.1&&Math.abs(E+_)<.1&&Math.abs(h+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(h+1)/2,A=(y+1)/2,b=(S+1)/2,N=(p+g)/4,D=(v+M)/4,T=(E+_)/4;return I>A&&I>b?I<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(I),s=N/i,o=D/i):A>b?A<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(A),i=N/s,o=T/s):b<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(b),i=D/o,s=T/o),this.set(i,s,o,t),this}let R=Math.sqrt((_-E)*(_-E)+(v-M)*(v-M)+(g-p)*(g-p));return Math.abs(R)<.001&&(R=1),this.x=(_-E)/R,this.y=(v-M)/R,this.z=(g-p)/R,this.w=Math.acos((h+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qp.prototype.isVector4=!0;let nn=Qp;class lM extends ia{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},o=new Wn(s),u=i.count;for(let c=0;c<u;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ap(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends lM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hv extends Wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uM extends Wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Dc=class Dc{constructor(e,t,i,s,o,u,c,d,h,p,v,g,y,E,M,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,u,c,d,h,p,v,g,y,E,M,_)}set(e,t,i,s,o,u,c,d,h,p,v,g,y,E,M,_){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=s,S[1]=o,S[5]=u,S[9]=c,S[13]=d,S[2]=h,S[6]=p,S[10]=v,S[14]=g,S[3]=y,S[7]=E,S[11]=M,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Pa.setFromMatrixColumn(e,0).length(),o=1/Pa.setFromMatrixColumn(e,1).length(),u=1/Pa.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,u=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s),p=Math.cos(o),v=Math.sin(o);if(e.order==="XYZ"){const g=u*p,y=u*v,E=c*p,M=c*v;t[0]=d*p,t[4]=-d*v,t[8]=h,t[1]=y+E*h,t[5]=g-M*h,t[9]=-c*d,t[2]=M-g*h,t[6]=E+y*h,t[10]=u*d}else if(e.order==="YXZ"){const g=d*p,y=d*v,E=h*p,M=h*v;t[0]=g+M*c,t[4]=E*c-y,t[8]=u*h,t[1]=u*v,t[5]=u*p,t[9]=-c,t[2]=y*c-E,t[6]=M+g*c,t[10]=u*d}else if(e.order==="ZXY"){const g=d*p,y=d*v,E=h*p,M=h*v;t[0]=g-M*c,t[4]=-u*v,t[8]=E+y*c,t[1]=y+E*c,t[5]=u*p,t[9]=M-g*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const g=u*p,y=u*v,E=c*p,M=c*v;t[0]=d*p,t[4]=E*h-y,t[8]=g*h+M,t[1]=d*v,t[5]=M*h+g,t[9]=y*h-E,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const g=u*d,y=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=M-g*v,t[8]=E*v+y,t[1]=v,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=y*v+E,t[10]=g-M*v}else if(e.order==="XZY"){const g=u*d,y=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=-v,t[8]=h*p,t[1]=g*v+M,t[5]=u*p,t[9]=y*v-E,t[2]=E*v-y,t[6]=c*p,t[10]=M*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cM,e,fM)}lookAt(e,t,i){const s=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),ss.crossVectors(i,fi),ss.lengthSq()===0&&(Math.abs(i.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),ss.crossVectors(i,fi)),ss.normalize(),Nu.crossVectors(fi,ss),s[0]=ss.x,s[4]=Nu.x,s[8]=fi.x,s[1]=ss.y,s[5]=Nu.y,s[9]=fi.y,s[2]=ss.z,s[6]=Nu.z,s[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,u=i[0],c=i[4],d=i[8],h=i[12],p=i[1],v=i[5],g=i[9],y=i[13],E=i[2],M=i[6],_=i[10],S=i[14],R=i[3],I=i[7],A=i[11],b=i[15],N=s[0],D=s[4],T=s[8],L=s[12],O=s[1],B=s[5],W=s[9],J=s[13],z=s[2],Q=s[6],ue=s[10],K=s[14],$=s[3],j=s[7],Z=s[11],U=s[15];return o[0]=u*N+c*O+d*z+h*$,o[4]=u*D+c*B+d*Q+h*j,o[8]=u*T+c*W+d*ue+h*Z,o[12]=u*L+c*J+d*K+h*U,o[1]=p*N+v*O+g*z+y*$,o[5]=p*D+v*B+g*Q+y*j,o[9]=p*T+v*W+g*ue+y*Z,o[13]=p*L+v*J+g*K+y*U,o[2]=E*N+M*O+_*z+S*$,o[6]=E*D+M*B+_*Q+S*j,o[10]=E*T+M*W+_*ue+S*Z,o[14]=E*L+M*J+_*K+S*U,o[3]=R*N+I*O+A*z+b*$,o[7]=R*D+I*B+A*Q+b*j,o[11]=R*T+I*W+A*ue+b*Z,o[15]=R*L+I*J+A*K+b*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],v=e[6],g=e[10],y=e[14],E=e[3],M=e[7],_=e[11],S=e[15],R=d*y-h*g,I=c*y-h*v,A=c*g-d*v,b=u*y-h*p,N=u*g-d*p,D=u*v-c*p;return t*(M*R-_*I+S*A)-i*(E*R-_*b+S*N)+s*(E*I-M*b+S*D)-o*(E*A-M*N+_*D)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[1],u=e[5],c=e[9],d=e[2],h=e[6],p=e[10];return t*(u*p-c*h)-i*(o*p-c*d)+s*(o*h-u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],v=e[9],g=e[10],y=e[11],E=e[12],M=e[13],_=e[14],S=e[15],R=t*c-i*u,I=t*d-s*u,A=t*h-o*u,b=i*d-s*c,N=i*h-o*c,D=s*h-o*d,T=p*M-v*E,L=p*_-g*E,O=p*S-y*E,B=v*_-g*M,W=v*S-y*M,J=g*S-y*_,z=R*J-I*W+A*B+b*O-N*L+D*T;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/z;return e[0]=(c*J-d*W+h*B)*Q,e[1]=(s*W-i*J-o*B)*Q,e[2]=(M*D-_*N+S*b)*Q,e[3]=(g*N-v*D-y*b)*Q,e[4]=(d*O-u*J-h*L)*Q,e[5]=(t*J-s*O+o*L)*Q,e[6]=(_*A-E*D-S*I)*Q,e[7]=(p*D-g*A+y*I)*Q,e[8]=(u*W-c*O+h*T)*Q,e[9]=(i*O-t*W-o*T)*Q,e[10]=(E*N-M*A+S*R)*Q,e[11]=(v*A-p*N-y*R)*Q,e[12]=(c*L-u*B-d*T)*Q,e[13]=(t*B-i*L+s*T)*Q,e[14]=(M*I-E*b-_*R)*Q,e[15]=(p*b-v*I+g*R)*Q,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,u=e.x,c=e.y,d=e.z,h=o*u,p=o*c;return this.set(h*u+i,h*c-s*d,h*d+s*c,0,h*c+s*d,p*c+i,p*d-s*u,0,h*d-s*c,p*d+s*u,o*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,u){return this.set(1,i,o,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,u=t._y,c=t._z,d=t._w,h=o+o,p=u+u,v=c+c,g=o*h,y=o*p,E=o*v,M=u*p,_=u*v,S=c*v,R=d*h,I=d*p,A=d*v,b=i.x,N=i.y,D=i.z;return s[0]=(1-(M+S))*b,s[1]=(y+A)*b,s[2]=(E-I)*b,s[3]=0,s[4]=(y-A)*N,s[5]=(1-(g+S))*N,s[6]=(_+R)*N,s[7]=0,s[8]=(E+I)*D,s[9]=(_-R)*D,s[10]=(1-(g+M))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinantAffine();if(o===0)return i.set(1,1,1),t.identity(),this;let u=Pa.set(s[0],s[1],s[2]).length();const c=Pa.set(s[4],s[5],s[6]).length(),d=Pa.set(s[8],s[9],s[10]).length();o<0&&(u=-u),qi.copy(this);const h=1/u,p=1/c,v=1/d;return qi.elements[0]*=h,qi.elements[1]*=h,qi.elements[2]*=h,qi.elements[4]*=p,qi.elements[5]*=p,qi.elements[6]*=p,qi.elements[8]*=v,qi.elements[9]*=v,qi.elements[10]*=v,t.setFromRotationMatrix(qi),i.x=u,i.y=c,i.z=d,this}makePerspective(e,t,i,s,o,u,c=ur,d=!1){const h=this.elements,p=2*o/(t-e),v=2*o/(i-s),g=(t+e)/(t-e),y=(i+s)/(i-s);let E,M;if(d)E=o/(u-o),M=u*o/(u-o);else if(c===ur)E=-(u+o)/(u-o),M=-2*u*o/(u-o);else if(c===Mc)E=-u/(u-o),M=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,o,u,c=ur,d=!1){const h=this.elements,p=2/(t-e),v=2/(i-s),g=-(t+e)/(t-e),y=-(i+s)/(i-s);let E,M;if(d)E=1/(u-o),M=u/(u-o);else if(c===ur)E=-2/(u-o),M=-(u+o)/(u-o);else if(c===Mc)E=-1/(u-o),M=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Dc.prototype.isMatrix4=!0;let sn=Dc;const Pa=new ie,qi=new sn,cM=new ie(0,0,0),fM=new ie(1,1,1),ss=new ie,Nu=new ie,fi=new ie,O_=new sn,k_=new so;class na{constructor(e=0,t=0,i=0,s=na.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],u=s[4],c=s[8],d=s[1],h=s[5],p=s[9],v=s[2],g=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,o),this._z=0);break;case"ZXY":this._x=Math.asin(xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,o)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,y),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return O_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(O_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return k_.setFromEuler(this),this.setFromQuaternion(k_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}na.DEFAULT_ORDER="XYZ";class pv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dM=0;const B_=new ie,La=new so,Ar=new sn,Du=new ie,qo=new ie,hM=new ie,pM=new so,z_=new ie(1,0,0),V_=new ie(0,1,0),H_=new ie(0,0,1),G_={type:"added"},mM={type:"removed"},Na={type:"childadded",child:null},Dd={type:"childremoved",child:null};class Xn extends ia{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new ie,t=new na,i=new so,s=new ie(1,1,1);function o(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new sn},normalMatrix:{value:new ot}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return La.setFromAxisAngle(e,t),this.quaternion.multiply(La),this}rotateOnWorldAxis(e,t){return La.setFromAxisAngle(e,t),this.quaternion.premultiply(La),this}rotateX(e){return this.rotateOnAxis(z_,e)}rotateY(e){return this.rotateOnAxis(V_,e)}rotateZ(e){return this.rotateOnAxis(H_,e)}translateOnAxis(e,t){return B_.copy(e).applyQuaternion(this.quaternion),this.position.add(B_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(z_,e)}translateY(e){return this.translateOnAxis(V_,e)}translateZ(e){return this.translateOnAxis(H_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Du.copy(e):Du.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt(qo,Du,this.up):Ar.lookAt(Du,qo,this.up),this.quaternion.setFromRotationMatrix(Ar),s&&(Ar.extractRotation(s.matrixWorld),La.setFromRotationMatrix(Ar),this.quaternion.premultiply(La.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(G_),Na.child=e,this.dispatchEvent(Na),Na.child=null):bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mM),Dd.child=e,this.dispatchEvent(Dd),Dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(G_),Na.child=e,this.dispatchEvent(Na),Na.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,hM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,pM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*s,o[13]+=i-o[1]*t-o[5]*i-o[9]*s,o[14]+=s-o[2]*t-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const v=d[h];o(e.shapes,v)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(o(e.materials,this.material[d]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];s.animations.push(o(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),v=u(e.shapes),g=u(e.skeletons),y=u(e.animations),E=u(e.nodes);c.length>0&&(i.geometries=c),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),v.length>0&&(i.shapes=v),g.length>0&&(i.skeletons=g),y.length>0&&(i.animations=y),E.length>0&&(i.nodes=E)}return i.object=s,i;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Xn.DEFAULT_UP=new ie(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Iu extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gM={type:"move"};class Id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Iu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Iu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Iu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const M of e.hand.values()){const _=t.getJointPose(M,i),S=this._getHandJoint(h,M);_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=_.radius),S.visible=_!==null}const p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=p.position.distanceTo(v.position),y=.02,E=.005;h.inputState.pinching&&g>y+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=y-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(gM)))}return c!==null&&(c.visible=s!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Iu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Uu={h:0,s:0,l:0};function Ud(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=vt.workingColorSpace){if(e=iM(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,u=2*i-o;this.r=Ud(u,o,e+1/3),this.g=Ud(u,o,e),this.b=Ud(u,o,e-1/3)}return vt.colorSpaceToWorking(this,s),this}setStyle(e,t=Li){function i(o){o!==void 0&&parseFloat(o)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Li){const i=mv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}copyLinearToSRGB(e){return this.r=$a(e.r),this.g=$a(e.g),this.b=$a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Li){return vt.workingToColorSpace(Fn.copy(this),e),Math.round(xt(Fn.r*255,0,255))*65536+Math.round(xt(Fn.g*255,0,255))*256+Math.round(xt(Fn.b*255,0,255))}getHexString(e=Li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,s=Fn.g,o=Fn.b,u=Math.max(i,s,o),c=Math.min(i,s,o);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const v=u-c;switch(h=p<=.5?v/(u+c):v/(2-u-c),u){case i:d=(s-o)/v+(s<o?6:0);break;case s:d=(o-i)/v+2;break;case o:d=(i-s)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Li){vt.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,i=Fn.g,s=Fn.b;return e!==Li?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(Uu);const i=Cd(as.h,Uu.h,t),s=Cd(as.s,Uu.s,t),o=Cd(as.l,Uu.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Tt;Tt.NAMES=mv;class _M extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new na,this.environmentIntensity=1,this.environmentRotation=new na,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $i=new ie,Rr=new ie,Fd=new ie,Cr=new ie,Da=new ie,Ia=new ie,W_=new ie,Od=new ie,kd=new ie,Bd=new ie,zd=new nn,Vd=new nn,Hd=new nn;class Ii{constructor(e=new ie,t=new ie,i=new ie){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),$i.subVectors(e,t),s.cross($i);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){$i.subVectors(s,t),Rr.subVectors(i,t),Fd.subVectors(e,t);const u=$i.dot($i),c=$i.dot(Rr),d=$i.dot(Fd),h=Rr.dot(Rr),p=Rr.dot(Fd),v=u*h-c*c;if(v===0)return o.set(0,0,0),null;const g=1/v,y=(h*d-c*p)*g,E=(u*p-c*d)*g;return o.set(1-y-E,E,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Cr)===null?!1:Cr.x>=0&&Cr.y>=0&&Cr.x+Cr.y<=1}static getInterpolation(e,t,i,s,o,u,c,d){return this.getBarycoord(e,t,i,s,Cr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,Cr.x),d.addScaledVector(u,Cr.y),d.addScaledVector(c,Cr.z),d)}static getInterpolatedAttribute(e,t,i,s,o,u){return zd.setScalar(0),Vd.setScalar(0),Hd.setScalar(0),zd.fromBufferAttribute(e,t),Vd.fromBufferAttribute(e,i),Hd.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(zd,o.x),u.addScaledVector(Vd,o.y),u.addScaledVector(Hd,o.z),u}static isFrontFacing(e,t,i,s){return $i.subVectors(i,t),Rr.subVectors(e,t),$i.cross(Rr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Rr.subVectors(this.a,this.b),$i.cross(Rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return Ii.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let u,c;Da.subVectors(s,i),Ia.subVectors(o,i),Od.subVectors(e,i);const d=Da.dot(Od),h=Ia.dot(Od);if(d<=0&&h<=0)return t.copy(i);kd.subVectors(e,s);const p=Da.dot(kd),v=Ia.dot(kd);if(p>=0&&v<=p)return t.copy(s);const g=d*v-p*h;if(g<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(i).addScaledVector(Da,u);Bd.subVectors(e,o);const y=Da.dot(Bd),E=Ia.dot(Bd);if(E>=0&&y<=E)return t.copy(o);const M=y*h-d*E;if(M<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(i).addScaledVector(Ia,c);const _=p*E-y*v;if(_<=0&&v-p>=0&&y-E>=0)return W_.subVectors(o,s),c=(v-p)/(v-p+(y-E)),t.copy(s).addScaledVector(W_,c);const S=1/(_+M+g);return u=M*S,c=g*S,t.copy(i).addScaledVector(Da,u).addScaledVector(Ia,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class El{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=o.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Ki):Ki.fromBufferAttribute(o,u),Ki.applyMatrix4(e.matrixWorld),this.expandByPoint(Ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fu.copy(i.boundingBox)),Fu.applyMatrix4(e.matrixWorld),this.union(Fu)}const s=e.children;for(let o=0,u=s.length;o<u;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),Ou.subVectors(this.max,$o),Ua.subVectors(e.a,$o),Fa.subVectors(e.b,$o),Oa.subVectors(e.c,$o),os.subVectors(Fa,Ua),ls.subVectors(Oa,Fa),ks.subVectors(Ua,Oa);let t=[0,-os.z,os.y,0,-ls.z,ls.y,0,-ks.z,ks.y,os.z,0,-os.x,ls.z,0,-ls.x,ks.z,0,-ks.x,-os.y,os.x,0,-ls.y,ls.x,0,-ks.y,ks.x,0];return!Gd(t,Ua,Fa,Oa,Ou)||(t=[1,0,0,0,1,0,0,0,1],!Gd(t,Ua,Fa,Oa,Ou))?!1:(ku.crossVectors(os,ls),t=[ku.x,ku.y,ku.z],Gd(t,Ua,Fa,Oa,Ou))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const br=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Ki=new ie,Fu=new El,Ua=new ie,Fa=new ie,Oa=new ie,os=new ie,ls=new ie,ks=new ie,$o=new ie,Ou=new ie,ku=new ie,Bs=new ie;function Gd(a,e,t,i,s){for(let o=0,u=a.length-3;o<=u;o+=3){Bs.fromArray(a,o);const c=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),d=e.dot(Bs),h=t.dot(Bs),p=i.dot(Bs);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const fn=new ie,Bu=new Mt;let vM=0;class dr extends ia{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qy,this.updateRanges=[],this.gpuType=lr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bu.fromBufferAttribute(this,t),Bu.applyMatrix3(e),this.setXY(t,Bu.x,Bu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Yo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),i=Jn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),i=Jn(i,this.array),s=Jn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),i=Jn(i,this.array),s=Jn(s,this.array),o=Jn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class gv extends dr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _v extends dr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class En extends dr{constructor(e,t,i){super(new Float32Array(e),t,i)}}const xM=new El,Ko=new ie,Wd=new ie;class Tl{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xM.setFromPoints(e).getCenter(i);let s=0;for(let o=0,u=e.length;o<u;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const t=Ko.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ko,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(Wd)),this.expandByPoint(Ko.copy(e.center).sub(Wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let SM=0;const bi=new sn,Xd=new Xn,ka=new ie,di=new El,jo=new El,Mn=new ie;class Yn extends ia{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jy(e)?_v:gv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ot().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,i){return bi.makeTranslation(e,t,i),this.applyMatrix4(bi),this}scale(e,t,i){return bi.makeScale(e,t,i),this.applyMatrix4(bi),this}lookAt(e){return Xd.lookAt(e),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ka).negate(),this.translate(ka.x,ka.y,ka.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,o=e.length;s<o;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new En(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new El);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];di.setFromBufferAttribute(o),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const i=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const c=t[o];jo.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(di.min,jo.min),di.expandByPoint(Mn),Mn.addVectors(di.max,jo.max),di.expandByPoint(Mn)):(di.expandByPoint(jo.min),di.expandByPoint(jo.max))}di.getCenter(i);let s=0;for(let o=0,u=e.count;o<u;o++)Mn.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Mn));if(t)for(let o=0,u=t.length;o<u;o++){const c=t[o],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)Mn.fromBufferAttribute(c,h),d&&(ka.fromBufferAttribute(e,h),Mn.add(ka)),s=Math.max(s,i.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==i.count)&&(u=new dr(new Float32Array(4*i.count),4),this.setAttribute("tangent",u));const c=[],d=[];for(let T=0;T<i.count;T++)c[T]=new ie,d[T]=new ie;const h=new ie,p=new ie,v=new ie,g=new Mt,y=new Mt,E=new Mt,M=new ie,_=new ie;function S(T,L,O){h.fromBufferAttribute(i,T),p.fromBufferAttribute(i,L),v.fromBufferAttribute(i,O),g.fromBufferAttribute(o,T),y.fromBufferAttribute(o,L),E.fromBufferAttribute(o,O),p.sub(h),v.sub(h),y.sub(g),E.sub(g);const B=1/(y.x*E.y-E.x*y.y);isFinite(B)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(B),_.copy(v).multiplyScalar(y.x).addScaledVector(p,-E.x).multiplyScalar(B),c[T].add(M),c[L].add(M),c[O].add(M),d[T].add(_),d[L].add(_),d[O].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,L=R.length;T<L;++T){const O=R[T],B=O.start,W=O.count;for(let J=B,z=B+W;J<z;J+=3)S(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const I=new ie,A=new ie,b=new ie,N=new ie;function D(T){b.fromBufferAttribute(s,T),N.copy(b);const L=c[T];I.copy(L),I.sub(b.multiplyScalar(b.dot(L))).normalize(),A.crossVectors(N,L);const B=A.dot(d[T])<0?-1:1;u.setXYZW(T,I.x,I.y,I.z,B)}for(let T=0,L=R.length;T<L;++T){const O=R[T],B=O.start,W=O.count;for(let J=B,z=B+W;J<z;J+=3)D(e.getX(J+0)),D(e.getX(J+1)),D(e.getX(J+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new dr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,y=i.count;g<y;g++)i.setXYZ(g,0,0,0);const s=new ie,o=new ie,u=new ie,c=new ie,d=new ie,h=new ie,p=new ie,v=new ie;if(e)for(let g=0,y=e.count;g<y;g+=3){const E=e.getX(g+0),M=e.getX(g+1),_=e.getX(g+2);s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,M),u.fromBufferAttribute(t,_),p.subVectors(u,o),v.subVectors(s,o),p.cross(v),c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,_),c.add(p),d.add(p),h.add(p),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(_,h.x,h.y,h.z)}else for(let g=0,y=t.count;g<y;g+=3)s.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),p.subVectors(u,o),v.subVectors(s,o),p.cross(v),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,v=c.normalized,g=new h.constructor(d.length*p);let y=0,E=0;for(let M=0,_=d.length;M<_;M++){c.isInterleavedBufferAttribute?y=d[M]*c.data.stride+c.offset:y=d[M]*p;for(let S=0;S<p;S++)g[E++]=h[y++]}return new dr(g,p,v)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yn,i=this.index.array,s=this.attributes;for(const c in s){const d=s[c],h=e(d,i);t.setAttribute(c,h)}const o=this.morphAttributes;for(const c in o){const d=[],h=o[c];for(let p=0,v=h.length;p<v;p++){const g=h[p],y=e(g,i);d.push(y)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let v=0,g=h.length;v<g;v++){const y=h[v];p.push(y.toJSON(e.data))}p.length>0&&(s[d]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(t))}const o=e.morphAttributes;for(const h in o){const p=[],v=o[h];for(let g=0,y=v.length;g<y;g++)p.push(v[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yd=new ie,yM=new ie,MM=new ot;class cs{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Yd.subVectors(i,t).cross(yM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Yd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||MM.getNormalMatrix(e),s=this.coplanarPoint(Yd).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let EM=0;class ao extends ia{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=al,this.side=Js,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$0,this.blendDst=K0,this.blendEquation=Ga,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rd,this.stencilZFail=Rd,this.stencilZPass=Rd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const u=[];for(const c in o){const d=o[c];delete d.metadata,u.push(d)}return u}if(t){const o=s(e.textures),u=s(e.images);o.length>0&&(i.textures=o),u.length>0&&(i.images=u)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new cs().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Mt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Pr=new ie,qd=new ie,zu=new ie,Vu=new ie;class Rp{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pr.copy(this.origin).addScaledVector(this.direction,t),Pr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){qd.copy(e).add(t).multiplyScalar(.5),zu.copy(t).sub(e).normalize(),Vu.copy(this.origin).sub(qd);const o=e.distanceTo(t)*.5,u=-this.direction.dot(zu),c=Vu.dot(this.direction),d=-Vu.dot(zu),h=Vu.lengthSq(),p=Math.abs(1-u*u);let v,g,y,E;if(p>0)if(v=u*d-c,g=u*c-d,E=o*p,v>=0)if(g>=-E)if(g<=E){const M=1/p;v*=M,g*=M,y=v*(v+u*g+2*c)+g*(u*v+g+2*d)+h}else g=o,v=Math.max(0,-(u*g+c)),y=-v*v+g*(g+2*d)+h;else g=-o,v=Math.max(0,-(u*g+c)),y=-v*v+g*(g+2*d)+h;else g<=-E?(v=Math.max(0,-(-u*o+c)),g=v>0?-o:Math.min(Math.max(-o,-d),o),y=-v*v+g*(g+2*d)+h):g<=E?(v=0,g=Math.min(Math.max(-o,-d),o),y=g*(g+2*d)+h):(v=Math.max(0,-(u*o+c)),g=v>0?o:Math.min(Math.max(-o,-d),o),y=-v*v+g*(g+2*d)+h);else g=u>0?-o:o,v=Math.max(0,-(u*g+c)),y=-v*v+g*(g+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(qd).addScaledVector(zu,g),y}intersectSphere(e,t){if(e.radius<0)return null;Pr.subVectors(e.center,this.origin);const i=Pr.dot(this.direction),s=Pr.dot(Pr)-i*i,o=e.radius*e.radius;if(s>o)return null;const u=Math.sqrt(o-s),c=i-u,d=i+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(i=(e.min.x-g.x)*h,s=(e.max.x-g.x)*h):(i=(e.max.x-g.x)*h,s=(e.min.x-g.x)*h),p>=0?(o=(e.min.y-g.y)*p,u=(e.max.y-g.y)*p):(o=(e.max.y-g.y)*p,u=(e.min.y-g.y)*p),i>u||o>s||((o>i||isNaN(i))&&(i=o),(u<s||isNaN(s))&&(s=u),v>=0?(c=(e.min.z-g.z)*v,d=(e.max.z-g.z)*v):(c=(e.max.z-g.z)*v,d=(e.min.z-g.z)*v),i>d||c>s)||((c>i||i!==i)&&(i=c),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Pr)!==null}intersectTriangle(e,t,i,s,o){const u=this.origin,c=this.direction,d=c.x,h=c.y,p=c.z,v=e.x-u.x,g=e.y-u.y,y=e.z-u.z,E=t.x-u.x,M=t.y-u.y,_=t.z-u.z,S=i.x-u.x,R=i.y-u.y,I=i.z-u.z,A=Math.abs(d),b=Math.abs(h),N=Math.abs(p);let D,T,L,O,B,W,J,z,Q,ue,K,$;if(A>=b&&A>=N?(L=d,W=v,Q=E,$=S,d>=0?(D=h,T=p,O=g,B=y,J=M,z=_,ue=R,K=I):(D=p,T=h,O=y,B=g,J=_,z=M,ue=I,K=R)):b>=N?(L=h,W=g,Q=M,$=R,h>=0?(D=p,T=d,O=y,B=v,J=_,z=E,ue=I,K=S):(D=d,T=p,O=v,B=y,J=E,z=_,ue=S,K=I)):(L=p,W=y,Q=_,$=I,p>=0?(D=d,T=h,O=v,B=g,J=E,z=M,ue=S,K=R):(D=h,T=d,O=g,B=v,J=M,z=E,ue=R,K=S)),L===0)return null;const j=D/L,Z=T/L,U=1/L,ne=O-j*W,xe=B-Z*W,Le=J-j*Q,Ie=z-Z*Q,Ge=ue-j*$,le=K-Z*$,de=Ge*Ie-le*Le,Ee=ne*le-xe*Ge,Je=Le*xe-Ie*ne;if(s){if(de<0||Ee<0||Je<0)return null}else if((de<0||Ee<0||Je<0)&&(de>0||Ee>0||Je>0))return null;const ke=de+Ee+Je;if(ke===0)return null;const ut=U*(de*W+Ee*Q+Je*$);return(ke>0?ut<0:ut>0)?null:this.at(ut/ke,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vv extends ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new na,this.combine=j0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const X_=new sn,zs=new Rp,Hu=new Tl,Y_=new ie,Gu=new ie,Wu=new ie,Xu=new ie,$d=new ie,Yu=new ie,q_=new ie,qu=new ie;class kr extends Xn{constructor(e=new Yn,t=new vv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(o&&c){Yu.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const p=c[d],v=o[d];p!==0&&($d.fromBufferAttribute(v,e),u?Yu.addScaledVector($d,p):Yu.addScaledVector($d.sub(t),p))}t.add(Yu)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hu.copy(i.boundingSphere),Hu.applyMatrix4(o),zs.copy(e.ray).recast(e.near),!(Hu.containsPoint(zs.origin)===!1&&(zs.intersectSphere(Hu,Y_)===null||zs.origin.distanceToSquared(Y_)>(e.far-e.near)**2))&&(X_.copy(o).invert(),zs.copy(e.ray).applyMatrix4(X_),!(i.boundingBox!==null&&zs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zs)))}_computeIntersections(e,t,i){let s;const o=this.geometry,u=this.material,c=o.index,d=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,v=o.attributes.normal,g=o.groups,y=o.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=g.length;E<M;E++){const _=g[E],S=u[_.materialIndex],R=Math.max(_.start,y.start),I=Math.min(c.count,Math.min(_.start+_.count,y.start+y.count));for(let A=R,b=I;A<b;A+=3){const N=c.getX(A),D=c.getX(A+1),T=c.getX(A+2);s=$u(this,S,e,i,h,p,v,N,D,T),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(c.count,y.start+y.count);for(let _=E,S=M;_<S;_+=3){const R=c.getX(_),I=c.getX(_+1),A=c.getX(_+2);s=$u(this,u,e,i,h,p,v,R,I,A),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,M=g.length;E<M;E++){const _=g[E],S=u[_.materialIndex],R=Math.max(_.start,y.start),I=Math.min(d.count,Math.min(_.start+_.count,y.start+y.count));for(let A=R,b=I;A<b;A+=3){const N=A,D=A+1,T=A+2;s=$u(this,S,e,i,h,p,v,N,D,T),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(d.count,y.start+y.count);for(let _=E,S=M;_<S;_+=3){const R=_,I=_+1,A=_+2;s=$u(this,u,e,i,h,p,v,R,I,A),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function TM(a,e,t,i,s,o,u,c){let d;if(e.side===ti?d=i.intersectTriangle(u,o,s,!0,c):d=i.intersectTriangle(s,o,u,e.side===Js,c),d===null)return null;qu.copy(c),qu.applyMatrix4(a.matrixWorld);const h=t.ray.origin.distanceTo(qu);return h<t.near||h>t.far?null:{distance:h,point:qu.clone(),object:a}}function $u(a,e,t,i,s,o,u,c,d,h){a.getVertexPosition(c,Gu),a.getVertexPosition(d,Wu),a.getVertexPosition(h,Xu);const p=TM(a,e,t,i,Gu,Wu,Xu,q_);if(p){const v=new ie;Ii.getBarycoord(q_,Gu,Wu,Xu,v),s&&(p.uv=Ii.getInterpolatedAttribute(s,c,d,h,v,new Mt)),o&&(p.uv1=Ii.getInterpolatedAttribute(o,c,d,h,v,new Mt)),u&&(p.normal=Ii.getInterpolatedAttribute(u,c,d,h,v,new ie),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:c,b:d,c:h,normal:new ie,materialIndex:0};Ii.getNormal(Gu,Wu,Xu,g.normal),p.face=g,p.barycoord=v}return p}class wM extends Wn{constructor(e=null,t=1,i=1,s,o,u,c,d,h=Cn,p=Cn,v,g){super(null,u,c,d,h,p,s,o,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vs=new Tl,AM=new Mt(.5,.5),Ku=new ie;class xv{constructor(e=new cs,t=new cs,i=new cs,s=new cs,o=new cs,u=new cs){this.planes=[e,t,i,s,o,u]}set(e,t,i,s,o,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(o),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ur,i=!1){const s=this.planes,o=e.elements,u=o[0],c=o[1],d=o[2],h=o[3],p=o[4],v=o[5],g=o[6],y=o[7],E=o[8],M=o[9],_=o[10],S=o[11],R=o[12],I=o[13],A=o[14],b=o[15];if(s[0].setComponents(h-u,y-p,S-E,b-R).normalize(),s[1].setComponents(h+u,y+p,S+E,b+R).normalize(),s[2].setComponents(h+c,y+v,S+M,b+I).normalize(),s[3].setComponents(h-c,y-v,S-M,b-I).normalize(),i)s[4].setComponents(d,g,_,A).normalize(),s[5].setComponents(h-d,y-g,S-_,b-A).normalize();else if(s[4].setComponents(h-d,y-g,S-_,b-A).normalize(),t===ur)s[5].setComponents(h+d,y+g,S+_,b+A).normalize();else if(t===Mc)s[5].setComponents(d,g,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);const t=AM.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ku.x=s.normal.x>0?e.max.x:e.min.x,Ku.y=s.normal.y>0?e.max.y:e.min.y,Ku.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ku)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qh extends ao{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tc=new ie,wc=new ie,$_=new sn,Zo=new Rp,ju=new Tl,Kd=new ie,K_=new ie;class RM extends Xn{constructor(e=new Yn,t=new Qh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)Tc.fromBufferAttribute(t,s-1),wc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Tc.distanceTo(wc);e.setAttribute("lineDistance",new En(i,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ju.copy(i.boundingSphere),ju.applyMatrix4(s),ju.radius+=o,e.ray.intersectsSphere(ju)===!1)return;$_.copy(s).invert(),Zo.copy(e.ray).applyMatrix4($_);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=this.isLineSegments?2:1,p=i.index,g=i.attributes.position;if(p!==null){const y=Math.max(0,u.start),E=Math.min(p.count,u.start+u.count);for(let M=y,_=E-1;M<_;M+=h){const S=p.getX(M),R=p.getX(M+1),I=Zu(this,e,Zo,d,S,R,M);I&&t.push(I)}if(this.isLineLoop){const M=p.getX(E-1),_=p.getX(y),S=Zu(this,e,Zo,d,M,_,E-1);S&&t.push(S)}}else{const y=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let M=y,_=E-1;M<_;M+=h){const S=Zu(this,e,Zo,d,M,M+1,M);S&&t.push(S)}if(this.isLineLoop){const M=Zu(this,e,Zo,d,E-1,y,E-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function Zu(a,e,t,i,s,o,u){const c=a.geometry.attributes.position;if(Tc.fromBufferAttribute(c,s),wc.fromBufferAttribute(c,o),t.distanceSqToSegment(Tc,wc,Kd,K_)>i)return;Kd.applyMatrix4(a.matrixWorld);const h=e.ray.origin.distanceTo(Kd);if(!(h<e.near||h>e.far))return{distance:h,point:K_.clone().applyMatrix4(a.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:a}}const j_=new ie,Z_=new ie;class Q_ extends RM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,o=t.count;s<o;s+=2)j_.fromBufferAttribute(t,s),Z_.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+j_.distanceTo(Z_);e.setAttribute("lineDistance",new En(i,1))}else rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sv extends ao{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const J_=new sn,Jh=new Rp,Qu=new Tl,Ju=new ie;class CM extends Xn{constructor(e=new Yn,t=new Sv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qu.copy(i.boundingSphere),Qu.applyMatrix4(s),Qu.radius+=o,e.ray.intersectsSphere(Qu)===!1)return;J_.copy(s).invert(),Jh.copy(e.ray).applyMatrix4(J_);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=i.index,v=i.attributes.position;if(h!==null){const g=Math.max(0,u.start),y=Math.min(h.count,u.start+u.count);for(let E=g,M=y;E<M;E++){const _=h.getX(E);Ju.fromBufferAttribute(v,_),e0(Ju,_,d,s,e,t,this)}}else{const g=Math.max(0,u.start),y=Math.min(v.count,u.start+u.count);for(let E=g,M=y;E<M;E++)Ju.fromBufferAttribute(v,E),e0(Ju,E,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function e0(a,e,t,i,s,o,u){const c=Jh.distanceSqToPoint(a);if(c<t){const d=new ie;Jh.closestPointToPoint(a,d),d.applyMatrix4(i);const h=s.ray.origin.distanceTo(d);if(h<s.near||h>s.far)return;o.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class yv extends Wn{constructor(e=[],t=ea,i,s,o,u,c,d,h,p){super(e,t,i,s,o,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hl extends Wn{constructor(e,t,i=hr,s,o,u,c=Cn,d=Cn,h,p=Or,v=1){if(p!==Or&&p!==qs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,s,o,u,c,d,p,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ap(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class bM extends hl{constructor(e,t=hr,i=ea,s,o,u=Cn,c=Cn,d,h=Or){const p={width:e,height:e,depth:1},v=[p,p,p,p,p,p];super(e,e,t,i,s,o,u,c,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mv extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wl extends Yn{constructor(e=1,t=1,i=1,s=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:u};const c=this;s=Math.floor(s),o=Math.floor(o),u=Math.floor(u);const d=[],h=[],p=[],v=[];let g=0,y=0;E("z","y","x",-1,-1,i,t,e,u,o,0),E("z","y","x",1,-1,i,t,-e,u,o,1),E("x","z","y",1,1,e,i,t,s,u,2),E("x","z","y",1,-1,e,i,-t,s,u,3),E("x","y","z",1,-1,e,t,i,s,o,4),E("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(d),this.setAttribute("position",new En(h,3)),this.setAttribute("normal",new En(p,3)),this.setAttribute("uv",new En(v,2));function E(M,_,S,R,I,A,b,N,D,T,L){const O=A/D,B=b/T,W=A/2,J=b/2,z=N/2,Q=D+1,ue=T+1;let K=0,$=0;const j=new ie;for(let Z=0;Z<ue;Z++){const U=Z*B-J;for(let ne=0;ne<Q;ne++){const xe=ne*O-W;j[M]=xe*R,j[_]=U*I,j[S]=z,h.push(j.x,j.y,j.z),j[M]=0,j[_]=0,j[S]=N>0?1:-1,p.push(j.x,j.y,j.z),v.push(ne/D),v.push(1-Z/T),K+=1}}for(let Z=0;Z<T;Z++)for(let U=0;U<D;U++){const ne=g+U+Q*Z,xe=g+U+Q*(Z+1),Le=g+(U+1)+Q*(Z+1),Ie=g+(U+1)+Q*Z;d.push(ne,xe,Ie),d.push(xe,Le,Ie),$+=6}c.addGroup(y,$,L),y+=$,g+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Cp extends Yn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const o=[],u=[];c(s),h(i),p(),this.setAttribute("position",new En(o,3)),this.setAttribute("normal",new En(o.slice(),3)),this.setAttribute("uv",new En(u,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function c(R){const I=new ie,A=new ie,b=new ie;for(let N=0;N<t.length;N+=3)y(t[N+0],I),y(t[N+1],A),y(t[N+2],b),d(I,A,b,R)}function d(R,I,A,b){const N=b+1,D=[];for(let T=0;T<=N;T++){D[T]=[];const L=R.clone().lerp(A,T/N),O=I.clone().lerp(A,T/N),B=N-T;for(let W=0;W<=B;W++)W===0&&T===N?D[T][W]=L:D[T][W]=L.clone().lerp(O,W/B)}for(let T=0;T<N;T++)for(let L=0;L<2*(N-T)-1;L++){const O=Math.floor(L/2);L%2===0?(g(D[T][O+1]),g(D[T+1][O]),g(D[T][O])):(g(D[T][O+1]),g(D[T+1][O+1]),g(D[T+1][O]))}}function h(R){const I=new ie;for(let A=0;A<o.length;A+=3)I.x=o[A+0],I.y=o[A+1],I.z=o[A+2],I.normalize().multiplyScalar(R),o[A+0]=I.x,o[A+1]=I.y,o[A+2]=I.z}function p(){const R=new ie;for(let I=0;I<o.length;I+=3){R.x=o[I+0],R.y=o[I+1],R.z=o[I+2];const A=_(R)/2/Math.PI+.5,b=S(R)/Math.PI+.5;u.push(A,1-b)}E(),v()}function v(){for(let R=0;R<u.length;R+=6){const I=u[R+0],A=u[R+2],b=u[R+4],N=Math.max(I,A,b),D=Math.min(I,A,b);N>.9&&D<.1&&(I<.2&&(u[R+0]+=1),A<.2&&(u[R+2]+=1),b<.2&&(u[R+4]+=1))}}function g(R){o.push(R.x,R.y,R.z)}function y(R,I){const A=R*3;I.x=e[A+0],I.y=e[A+1],I.z=e[A+2]}function E(){const R=new ie,I=new ie,A=new ie,b=new ie,N=new Mt,D=new Mt,T=new Mt;for(let L=0,O=0;L<o.length;L+=9,O+=6){R.set(o[L+0],o[L+1],o[L+2]),I.set(o[L+3],o[L+4],o[L+5]),A.set(o[L+6],o[L+7],o[L+8]),N.set(u[O+0],u[O+1]),D.set(u[O+2],u[O+3]),T.set(u[O+4],u[O+5]),b.copy(R).add(I).add(A).divideScalar(3);const B=_(b);M(N,O+0,R,B),M(D,O+2,I,B),M(T,O+4,A,B)}}function M(R,I,A,b){b<0&&R.x===1&&(u[I]=R.x-1),A.x===0&&A.z===0&&(u[I]=b/2/Math.PI+.5)}function _(R){return Math.atan2(R.z,-R.x)}function S(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cp(e.vertices,e.indices,e.radius,e.detail)}}const ec=new ie,tc=new ie,jd=new ie,nc=new Ii;class t0 extends Yn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),o=Math.cos(hc*t),u=e.getIndex(),c=e.getAttribute("position"),d=u?u.count:c.count,h=[0,0,0],p=["a","b","c"],v=new Array(3),g={},y=[];for(let E=0;E<d;E+=3){u?(h[0]=u.getX(E),h[1]=u.getX(E+1),h[2]=u.getX(E+2)):(h[0]=E,h[1]=E+1,h[2]=E+2);const{a:M,b:_,c:S}=nc;if(M.fromBufferAttribute(c,h[0]),_.fromBufferAttribute(c,h[1]),S.fromBufferAttribute(c,h[2]),nc.getNormal(jd),v[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,v[1]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,v[2]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let R=0;R<3;R++){const I=(R+1)%3,A=v[R],b=v[I],N=nc[p[R]],D=nc[p[I]],T=`${A}_${b}`,L=`${b}_${A}`;L in g&&g[L]?(jd.dot(g[L].normal)<=o&&(y.push(N.x,N.y,N.z),y.push(D.x,D.y,D.z)),g[L]=null):T in g||(g[T]={index0:h[R],index1:h[I],normal:jd.clone()})}}for(const E in g)if(g[E]){const{index0:M,index1:_}=g[E];ec.fromBufferAttribute(c,M),tc.fromBufferAttribute(c,_),y.push(ec.x,ec.y,ec.z),y.push(tc.x,tc.y,tc.z)}this.setAttribute("position",new En(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class bp extends Cp{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bp(e.radius,e.detail)}}class Uc extends Yn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,u=t/2,c=Math.floor(i),d=Math.floor(s),h=c+1,p=d+1,v=e/c,g=t/d,y=[],E=[],M=[],_=[];for(let S=0;S<p;S++){const R=S*g-u;for(let I=0;I<h;I++){const A=I*v-o;E.push(A,-R,0),M.push(0,0,1),_.push(I/c),_.push(1-S/d)}}for(let S=0;S<d;S++)for(let R=0;R<c;R++){const I=R+h*S,A=R+h*(S+1),b=R+1+h*(S+1),N=R+1+h*S;y.push(I,A,N),y.push(A,b,N)}this.setIndex(y),this.setAttribute("position",new En(E,3)),this.setAttribute("normal",new En(M,3)),this.setAttribute("uv",new En(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pp extends Yn{constructor(e=1,t=.4,i=12,s=48,o=Math.PI*2,u=0,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:o,thetaStart:u,thetaLength:c},i=Math.floor(i),s=Math.floor(s);const d=[],h=[],p=[],v=[],g=new ie,y=new ie,E=new ie;for(let M=0;M<=i;M++){const _=u+M/i*c;for(let S=0;S<=s;S++){const R=S/s*o;y.x=(e+t*Math.cos(_))*Math.cos(R),y.y=(e+t*Math.cos(_))*Math.sin(R),y.z=t*Math.sin(_),h.push(y.x,y.y,y.z),g.x=e*Math.cos(R),g.y=e*Math.sin(R),E.subVectors(y,g).normalize(),p.push(E.x,E.y,E.z),v.push(S/s),v.push(M/i)}}for(let M=1;M<=i;M++)for(let _=1;_<=s;_++){const S=(s+1)*M+_-1,R=(s+1)*(M-1)+_-1,I=(s+1)*(M-1)+_,A=(s+1)*M+_;d.push(S,R,A),d.push(R,I,A)}this.setIndex(d),this.setAttribute("position",new En(h,3)),this.setAttribute("normal",new En(p,3)),this.setAttribute("uv",new En(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ja(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const s=a[t][i];if(n0(s))s.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(n0(s[0])){const o=[];for(let u=0,c=s.length;u<c;u++)o[u]=s[u].clone();e[t][i]=o}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Gn(a){const e={};for(let t=0;t<a.length;t++){const i=Ja(a[t]);for(const s in i)e[s]=i[s]}return e}function n0(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function PM(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Ev(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const LM={clone:Ja,merge:Gn};var NM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mr extends ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NM,this.fragmentShader=DM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ja(e.uniforms),this.uniformsGroups=PM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Tt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Mt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new ie().fromArray(s.value);break;case"v4":this.uniforms[i].value=new nn().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ot().fromArray(s.value);break;case"m4":this.uniforms[i].value=new sn().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class IM extends mr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class UM extends ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FM extends ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ic=new ie,rc=new so,nr=new ie;class Tv extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=ur,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ic,rc,nr),nr.x===1&&nr.y===1&&nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,rc,nr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ic,rc,nr),nr.x===1&&nr.y===1&&nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,rc,nr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const us=new ie,i0=new Mt,r0=new Mt;class Ni extends Tv{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zh*2*Math.atan(Math.tan(hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,i0,r0),t.subVectors(r0,i0)}setViewOffset(e,t,i,s,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;o+=u.offsetX*s/d,t-=u.offsetY*i/h,s*=u.width/d,i*=u.height/h}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wv extends Tv{constructor(e=-1,t=1,i=1,s=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,u=i+e,c=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ba=-90,za=1;class OM extends Xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ni(Ba,za,e,t);s.layers=this.layers,this.add(s);const o=new Ni(Ba,za,e,t);o.layers=this.layers,this.add(o);const u=new Ni(Ba,za,e,t);u.layers=this.layers,this.add(u);const c=new Ni(Ba,za,e,t);c.layers=this.layers,this.add(c);const d=new Ni(Ba,za,e,t);d.layers=this.layers,this.add(d);const h=new Ni(Ba,za,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,u,c,d]=t;for(const h of t)this.remove(h);if(e===ur)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Mc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,c,d,h,p]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(v,g,y),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class kM extends Ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class BM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,rt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Jp=class Jp{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=s,this}};Jp.prototype.isMatrix2=!0;let s0=Jp;function a0(a,e,t,i){const s=zM(i);switch(t){case uv:return a*e;case fv:return a*e/s.components*s.byteLength;case yp:return a*e/s.components*s.byteLength;case ta:return a*e*2/s.components*s.byteLength;case Mp:return a*e*2/s.components*s.byteLength;case cv:return a*e*3/s.components*s.byteLength;case ji:return a*e*4/s.components*s.byteLength;case Ep:return a*e*4/s.components*s.byteLength;case uc:case cc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case fc:case dc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Mh:case Th:return Math.max(a,16)*Math.max(e,8)/4;case yh:case Eh:return Math.max(a,8)*Math.max(e,8)/2;case wh:case Ah:case Ch:case bh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Rh:case vc:case Ph:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case kh:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Bh:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case zh:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Hh:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Xh:case Yh:case qh:return Math.ceil(a/4)*Math.ceil(e/4)*16;case $h:case Kh:return Math.ceil(a/4)*Math.ceil(e/4)*8;case xc:case jh:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zM(a){switch(a){case Di:case sv:return{byteLength:1,components:1};case fl:case av:case pr:return{byteLength:2,components:1};case xp:case Sp:return{byteLength:2,components:4};case hr:case vp:case lr:return{byteLength:4,components:1};case ov:case lv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_p}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_p);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Av(){let a=null,e=!1,t=null,i=null;function s(o,u){i=a.requestAnimationFrame(s),t(o,u)}return{start:function(){e!==!0&&t!==null&&a!==null&&(i=a.requestAnimationFrame(s),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){a=o}}}function VM(a){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,v=h.byteLength,g=a.createBuffer();a.bindBuffer(d,g),a.bufferData(d,h,p),c.onUploadCallback();let y;if(h instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=a.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=a.SHORT;else if(h instanceof Uint32Array)y=a.UNSIGNED_INT;else if(h instanceof Int32Array)y=a.INT;else if(h instanceof Int8Array)y=a.BYTE;else if(h instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:v}}function i(c,d,h){const p=d.array,v=d.updateRanges;if(a.bindBuffer(h,c),v.length===0)a.bufferSubData(h,0,p);else{v.sort((y,E)=>y.start-E.start);let g=0;for(let y=1;y<v.length;y++){const E=v[g],M=v[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++g,v[g]=M)}v.length=g+1;for(let y=0,E=v.length;y<E;y++){const M=v[y];a.bufferSubData(h,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(a.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,c,d),h.version=c.version}}return{get:s,remove:o,update:u}}var HM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,WM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$M=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,KM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ZM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,pE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vE="gl_FragColor = linearToOutputTexel( gl_FragColor );",xE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ME=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,IE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,UE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,XE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,QE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_T=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,vT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ST=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ET=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,RT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$T=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ZT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,QT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,o1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,u1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:HM,alphahash_pars_fragment:GM,alphamap_fragment:WM,alphamap_pars_fragment:XM,alphatest_fragment:YM,alphatest_pars_fragment:qM,aomap_fragment:$M,aomap_pars_fragment:KM,batching_pars_vertex:jM,batching_vertex:ZM,begin_vertex:QM,beginnormal_vertex:JM,bsdfs:eE,iridescence_fragment:tE,bumpmap_pars_fragment:nE,clipping_planes_fragment:iE,clipping_planes_pars_fragment:rE,clipping_planes_pars_vertex:sE,clipping_planes_vertex:aE,color_fragment:oE,color_pars_fragment:lE,color_pars_vertex:uE,color_vertex:cE,common:fE,cube_uv_reflection_fragment:dE,defaultnormal_vertex:hE,displacementmap_pars_vertex:pE,displacementmap_vertex:mE,emissivemap_fragment:gE,emissivemap_pars_fragment:_E,colorspace_fragment:vE,colorspace_pars_fragment:xE,envmap_fragment:SE,envmap_common_pars_fragment:yE,envmap_pars_fragment:ME,envmap_pars_vertex:EE,envmap_physical_pars_fragment:IE,envmap_vertex:TE,fog_vertex:wE,fog_pars_vertex:AE,fog_fragment:RE,fog_pars_fragment:CE,gradientmap_pars_fragment:bE,lightmap_pars_fragment:PE,lights_lambert_fragment:LE,lights_lambert_pars_fragment:NE,lights_pars_begin:DE,lights_toon_fragment:UE,lights_toon_pars_fragment:FE,lights_phong_fragment:OE,lights_phong_pars_fragment:kE,lights_physical_fragment:BE,lights_physical_pars_fragment:zE,lights_fragment_begin:VE,lights_fragment_maps:HE,lights_fragment_end:GE,lightprobes_pars_fragment:WE,logdepthbuf_fragment:XE,logdepthbuf_pars_fragment:YE,logdepthbuf_pars_vertex:qE,logdepthbuf_vertex:$E,map_fragment:KE,map_pars_fragment:jE,map_particle_fragment:ZE,map_particle_pars_fragment:QE,metalnessmap_fragment:JE,metalnessmap_pars_fragment:eT,morphinstance_vertex:tT,morphcolor_vertex:nT,morphnormal_vertex:iT,morphtarget_pars_vertex:rT,morphtarget_vertex:sT,normal_fragment_begin:aT,normal_fragment_maps:oT,normal_pars_fragment:lT,normal_pars_vertex:uT,normal_vertex:cT,normalmap_pars_fragment:fT,clearcoat_normal_fragment_begin:dT,clearcoat_normal_fragment_maps:hT,clearcoat_pars_fragment:pT,iridescence_pars_fragment:mT,opaque_fragment:gT,packing:_T,premultiplied_alpha_fragment:vT,project_vertex:xT,dithering_fragment:ST,dithering_pars_fragment:yT,roughnessmap_fragment:MT,roughnessmap_pars_fragment:ET,shadowmap_pars_fragment:TT,shadowmap_pars_vertex:wT,shadowmap_vertex:AT,shadowmask_pars_fragment:RT,skinbase_vertex:CT,skinning_pars_vertex:bT,skinning_vertex:PT,skinnormal_vertex:LT,specularmap_fragment:NT,specularmap_pars_fragment:DT,tonemapping_fragment:IT,tonemapping_pars_fragment:UT,transmission_fragment:FT,transmission_pars_fragment:OT,uv_pars_fragment:kT,uv_pars_vertex:BT,uv_vertex:zT,worldpos_vertex:VT,background_vert:HT,background_frag:GT,backgroundCube_vert:WT,backgroundCube_frag:XT,cube_vert:YT,cube_frag:qT,depth_vert:$T,depth_frag:KT,distance_vert:jT,distance_frag:ZT,equirect_vert:QT,equirect_frag:JT,linedashed_vert:e1,linedashed_frag:t1,meshbasic_vert:n1,meshbasic_frag:i1,meshlambert_vert:r1,meshlambert_frag:s1,meshmatcap_vert:a1,meshmatcap_frag:o1,meshnormal_vert:l1,meshnormal_frag:u1,meshphong_vert:c1,meshphong_frag:f1,meshphysical_vert:d1,meshphysical_frag:h1,meshtoon_vert:p1,meshtoon_frag:m1,points_vert:g1,points_frag:_1,shadow_vert:v1,shadow_frag:x1,sprite_vert:S1,sprite_frag:y1},Fe={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},ar={basic:{uniforms:Gn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Gn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Gn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Gn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Gn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Gn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Gn([Fe.points,Fe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Gn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Gn([Fe.common,Fe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Gn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Gn([Fe.sprite,Fe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Gn([Fe.common,Fe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Gn([Fe.lights,Fe.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};ar.physical={uniforms:Gn([ar.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const sc={r:0,b:0,g:0},M1=new sn,Rv=new ot;Rv.set(-1,0,0,0,1,0,0,0,1);function E1(a,e,t,i,s,o){const u=new Tt(0);let c=s===!0?0:1,d,h,p=null,v=0,g=null;function y(R){let I=R.isScene===!0?R.background:null;if(I&&I.isTexture){const A=R.backgroundBlurriness>0;I=e.get(I,A)}return I}function E(R){let I=!1;const A=y(R);A===null?_(u,c):A&&A.isColor&&(_(A,1),I=!0);const b=a.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(a.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function M(R,I){const A=y(I);A&&(A.isCubeTexture||A.mapping===Ic)?(h===void 0&&(h=new kr(new wl(1,1,1),new mr({name:"BackgroundCubeMaterial",uniforms:Ja(ar.backgroundCube.uniforms),vertexShader:ar.backgroundCube.vertexShader,fragmentShader:ar.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,N,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(M1.makeRotationFromEuler(I.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Rv),h.material.toneMapped=vt.getTransfer(A.colorSpace)!==It,(p!==A||v!==A.version||g!==a.toneMapping)&&(h.material.needsUpdate=!0,p=A,v=A.version,g=a.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(d===void 0&&(d=new kr(new Uc(2,2),new mr({name:"BackgroundMaterial",uniforms:Ja(ar.background.uniforms),vertexShader:ar.background.vertexShader,fragmentShader:ar.background.fragmentShader,side:Js,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=A,d.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,d.material.toneMapped=vt.getTransfer(A.colorSpace)!==It,A.matrixAutoUpdate===!0&&A.updateMatrix(),d.material.uniforms.uvTransform.value.copy(A.matrix),(p!==A||v!==A.version||g!==a.toneMapping)&&(d.material.needsUpdate=!0,p=A,v=A.version,g=a.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function _(R,I){R.getRGB(sc,Ev(a)),t.buffers.color.setClear(sc.r,sc.g,sc.b,I,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,I=1){u.set(R),c=I,_(u,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,_(u,c)},render:E,addToRenderList:M,dispose:S}}function T1(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},s=g(null);let o=s,u=!1;function c(B,W,J,z,Q){let ue=!1;const K=v(B,z,J,W);o!==K&&(o=K,h(o.object)),ue=y(B,z,J,Q),ue&&E(B,z,J,Q),Q!==null&&e.update(Q,a.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,A(B,W,J,z),Q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function d(){return a.createVertexArray()}function h(B){return a.bindVertexArray(B)}function p(B){return a.deleteVertexArray(B)}function v(B,W,J,z){const Q=z.wireframe===!0;let ue=i[W.id];ue===void 0&&(ue={},i[W.id]=ue);const K=B.isInstancedMesh===!0?B.id:0;let $=ue[K];$===void 0&&($={},ue[K]=$);let j=$[J.id];j===void 0&&(j={},$[J.id]=j);let Z=j[Q];return Z===void 0&&(Z=g(d()),j[Q]=Z),Z}function g(B){const W=[],J=[],z=[];for(let Q=0;Q<t;Q++)W[Q]=0,J[Q]=0,z[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:J,attributeDivisors:z,object:B,attributes:{},index:null}}function y(B,W,J,z){const Q=o.attributes,ue=W.attributes;let K=0;const $=J.getAttributes();for(const j in $)if($[j].location>=0){const U=Q[j];let ne=ue[j];if(ne===void 0&&(j==="instanceMatrix"&&B.instanceMatrix&&(ne=B.instanceMatrix),j==="instanceColor"&&B.instanceColor&&(ne=B.instanceColor)),U===void 0||U.attribute!==ne||ne&&U.data!==ne.data)return!0;K++}return o.attributesNum!==K||o.index!==z}function E(B,W,J,z){const Q={},ue=W.attributes;let K=0;const $=J.getAttributes();for(const j in $)if($[j].location>=0){let U=ue[j];U===void 0&&(j==="instanceMatrix"&&B.instanceMatrix&&(U=B.instanceMatrix),j==="instanceColor"&&B.instanceColor&&(U=B.instanceColor));const ne={};ne.attribute=U,U&&U.data&&(ne.data=U.data),Q[j]=ne,K++}o.attributes=Q,o.attributesNum=K,o.index=z}function M(){const B=o.newAttributes;for(let W=0,J=B.length;W<J;W++)B[W]=0}function _(B){S(B,0)}function S(B,W){const J=o.newAttributes,z=o.enabledAttributes,Q=o.attributeDivisors;J[B]=1,z[B]===0&&(a.enableVertexAttribArray(B),z[B]=1),Q[B]!==W&&(a.vertexAttribDivisor(B,W),Q[B]=W)}function R(){const B=o.newAttributes,W=o.enabledAttributes;for(let J=0,z=W.length;J<z;J++)W[J]!==B[J]&&(a.disableVertexAttribArray(J),W[J]=0)}function I(B,W,J,z,Q,ue,K){K===!0?a.vertexAttribIPointer(B,W,J,Q,ue):a.vertexAttribPointer(B,W,J,z,Q,ue)}function A(B,W,J,z){M();const Q=z.attributes,ue=J.getAttributes(),K=W.defaultAttributeValues;for(const $ in ue){const j=ue[$];if(j.location>=0){let Z=Q[$];if(Z===void 0&&($==="instanceMatrix"&&B.instanceMatrix&&(Z=B.instanceMatrix),$==="instanceColor"&&B.instanceColor&&(Z=B.instanceColor)),Z!==void 0){const U=Z.normalized,ne=Z.itemSize,xe=e.get(Z);if(xe===void 0)continue;const Le=xe.buffer,Ie=xe.type,Ge=xe.bytesPerElement,le=Ie===a.INT||Ie===a.UNSIGNED_INT||Z.gpuType===vp;if(Z.isInterleavedBufferAttribute){const de=Z.data,Ee=de.stride,Je=Z.offset;if(de.isInstancedInterleavedBuffer){for(let ke=0;ke<j.locationSize;ke++)S(j.location+ke,de.meshPerAttribute);B.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ke=0;ke<j.locationSize;ke++)_(j.location+ke);a.bindBuffer(a.ARRAY_BUFFER,Le);for(let ke=0;ke<j.locationSize;ke++)I(j.location+ke,ne/j.locationSize,Ie,U,Ee*Ge,(Je+ne/j.locationSize*ke)*Ge,le)}else{if(Z.isInstancedBufferAttribute){for(let de=0;de<j.locationSize;de++)S(j.location+de,Z.meshPerAttribute);B.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let de=0;de<j.locationSize;de++)_(j.location+de);a.bindBuffer(a.ARRAY_BUFFER,Le);for(let de=0;de<j.locationSize;de++)I(j.location+de,ne/j.locationSize,Ie,U,ne*Ge,ne/j.locationSize*de*Ge,le)}}else if(K!==void 0){const U=K[$];if(U!==void 0)switch(U.length){case 2:a.vertexAttrib2fv(j.location,U);break;case 3:a.vertexAttrib3fv(j.location,U);break;case 4:a.vertexAttrib4fv(j.location,U);break;default:a.vertexAttrib1fv(j.location,U)}}}}R()}function b(){L();for(const B in i){const W=i[B];for(const J in W){const z=W[J];for(const Q in z){const ue=z[Q];for(const K in ue)p(ue[K].object),delete ue[K];delete z[Q]}}delete i[B]}}function N(B){if(i[B.id]===void 0)return;const W=i[B.id];for(const J in W){const z=W[J];for(const Q in z){const ue=z[Q];for(const K in ue)p(ue[K].object),delete ue[K];delete z[Q]}}delete i[B.id]}function D(B){for(const W in i){const J=i[W];for(const z in J){const Q=J[z];if(Q[B.id]===void 0)continue;const ue=Q[B.id];for(const K in ue)p(ue[K].object),delete ue[K];delete Q[B.id]}}}function T(B){for(const W in i){const J=i[W],z=B.isInstancedMesh===!0?B.id:0,Q=J[z];if(Q!==void 0){for(const ue in Q){const K=Q[ue];for(const $ in K)p(K[$].object),delete K[$];delete Q[ue]}delete J[z],Object.keys(J).length===0&&delete i[W]}}}function L(){O(),u=!0,o!==s&&(o=s,h(o.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:L,resetDefaultState:O,dispose:b,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:_,disableUnusedAttributes:R}}function w1(a,e,t){let i;function s(d){i=d}function o(d,h){a.drawArrays(i,d,h),t.update(h,i,1)}function u(d,h,p){p!==0&&(a.drawArraysInstanced(i,d,h,p),t.update(h,i,p))}function c(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,h,0,p);let g=0;for(let y=0;y<p;y++)g+=h[y];t.update(g,i,1)}this.setMode=s,this.render=o,this.renderInstances=u,this.renderMultiDraw=c}function A1(a,e,t,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=a.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(D){return!(D!==ji&&i.convert(D)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const T=D===pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Di&&D!==lr&&!T&&i.convert(D)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))}function d(D){if(D==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(rt("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_TEXTURE_SIZE),_=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),R=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),I=a.getParameter(a.MAX_VARYING_VECTORS),A=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),b=a.getParameter(a.MAX_SAMPLES),N=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:R,maxVaryings:I,maxFragmentUniforms:A,maxSamples:b,samples:N}}function R1(a){const e=this;let t=null,i=0,s=!1,o=!1;const u=new cs,c=new ot,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||i!==0||s;return s=g,i=v.length,y},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(v,g){t=p(v,g,0)},this.setState=function(v,g,y){const E=v.clippingPlanes,M=v.clipIntersection,_=v.clipShadows,S=a.get(v);if(!s||E===null||E.length===0||o&&!_)o?p(null):h();else{const R=o?0:i,I=R*4;let A=S.clippingState||null;d.value=A,A=p(E,g,I,y);for(let b=0;b!==I;++b)A[b]=t[b];S.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(v,g,y,E){const M=v!==null?v.length:0;let _=null;if(M!==0){if(_=d.value,E!==!0||_===null){const S=y+M*4,R=g.matrixWorldInverse;c.getNormalMatrix(R),(_===null||_.length<S)&&(_=new Float32Array(S));for(let I=0,A=y;I!==M;++I,A+=4)u.copy(v[I]).applyMatrix4(R,c),u.normal.toArray(_,A),_[A+3]=u.constant}d.value=_,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,_}}const Wa=4,C1=6,b1=20,P1=256,Qo=new wv,o0=new Tt;let Zd=null,Qd=0,Jd=0,eh=!1;const L1=new ie,Hs=new ie;class l0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,o={}){const{size:u=256,position:c=L1}=o;Zd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,s,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=f0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zd,Qd,Jd),this._renderer.xr.enabled=eh,e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ea||e.mapping===Qa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:pr,format:ji,colorSpace:Sc,depthBuffer:!1},s=u0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=u0(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=N1(o)),this._blurMaterial=I1(o,e,t),this._ggxMaterial=D1(o,e,t)}return s}_compileMaterial(e){const t=new kr(new Yn,e);this._renderer.compile(t,Qo)}_sceneToCubeUV(e,t,i,s,o){const d=new Ni(90,1,t,i),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(o0),v.toneMapping=fr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kr(new wl,new vv({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,_=M.material;let S=!1;const R=e.background;R?R.isColor&&(_.color.copy(R),e.background=null,S=!0):(_.color.copy(o0),S=!0);for(let I=0;I<6;I++){const A=I%3;A===0?(d.up.set(0,h[I],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+p[I],o.y,o.z)):A===1?(d.up.set(0,0,h[I]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+p[I],o.z)):(d.up.set(0,h[I],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+p[I]));const b=this._cubeSize;Va(s,A*b,I>2?b:0,b,b),v.setRenderTarget(s),S&&v.render(M,d),v.render(e,d)}v.toneMapping=y,v.autoClear=g,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ea||e.mapping===Qa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=f0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c0());const o=s?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=o;const c=o.uniforms;c.envMap.value=e;const d=this._cubeSize;Va(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(u,Qo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,o=this._pingPongRenderTarget,u=this._ggxMaterial,c=this._lodMeshes[i];c.material=u;const d=u.uniforms,h=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-p*p),g=h*1.25,y=v*g,{_lodMax:E}=this,M=this._sizeLods[i],_=3*M*(i>E-Wa?i-E+Wa:0),S=4*(this._cubeSize-M);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=E-t,Va(o,_,S,3*M,2*M),s.setRenderTarget(o),s.render(c,Qo),d.envMap.value=o.texture,d.roughness.value=0,d.mipInt.value=E-i,Va(e,_,S,3*M,2*M),s.setRenderTarget(e),s.render(c,Qo)}_blur(e,t,i,s){const o=this._pingPongRenderTarget,u=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,o,t,i,u),this._blurPass(o,e,i,i,u)}_blurPass(e,t,i,s,o){const u=this._renderer,c=this._blurMaterial,d=this._lodMeshes[s];d.material=c;const h=c.uniforms;h.envMap.value=e.texture,h.sigma.value=o,h.mipInt.value=this._lodMax-i;const p=this._sizeLods[s],v=3*p*(s>this._lodMax-Wa?s-this._lodMax+Wa:0),g=4*(this._cubeSize-p);Va(t,v,g,3*p,2*p),u.setRenderTarget(t),u.render(d,Qo)}}function N1(a){const e=[],t=[];let i=a;const s=a-Wa+1+C1;for(let o=0;o<s;o++){const u=Math.pow(2,i);e.push(u);const c=1/(u-2),d=-c,h=1+c,p=[d,d,h,d,h,h,d,d,h,h,d,h],v=6,g=6,y=3,E=new Float32Array(y*g*v),M=new Float32Array(y*g*v);for(let S=0;S<v;S++){const R=S%3*2/3-1,I=S>2?0:-1,A=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];E.set(A,y*g*S);for(let b=0;b<g;b++){const N=p[b*2]*2-1,D=p[b*2+1]*2-1;S===0?Hs.set(1,D,N):S===1?Hs.set(-N,1,-D):S===2?Hs.set(-N,D,1):S===3?Hs.set(-1,D,-N):S===4?Hs.set(-N,-1,D):Hs.set(N,D,-1),Hs.toArray(M,(S*g+b)*y)}}const _=new Yn;_.setAttribute("position",new dr(E,y)),_.setAttribute("outputDirection",new dr(M,y)),t.push(new kr(_,null)),i>Wa&&i--}return{lodMeshes:t,sizeLods:e}}function u0(a,e,t){const i=new Zi(a,e,t);return i.texture.mapping=Ic,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Va(a,e,t,i,s){a.viewport.set(e,t,i,s),a.scissor.set(e,t,i,s)}function D1(a,e,t){return new mr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:P1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function I1(a,e,t){return new mr({name:"SphericalGaussianBlur",defines:{SAMPLES:b1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Fc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function c0(){return new mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function f0(){return new mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Fc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Cv extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new yv(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new wl(5,5,5),o=new mr({name:"CubemapFromEquirect",uniforms:Ja(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:Ur});o.uniforms.tEquirect.value=t;const u=new kr(s,o),c=t.minFilter;return t.minFilter===Ys&&(t.minFilter=kn),new OM(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,s);e.setRenderTarget(o)}}function U1(a){let e=new WeakMap,t=new WeakMap,i=null;function s(g,y=!1){return g==null?null:y?u(g):o(g)}function o(g){if(g&&g.isTexture){const y=g.mapping;if(y===Td||y===wd)if(e.has(g)){const E=e.get(g).texture;return c(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const M=new Cv(E.height);return M.fromEquirectangularTexture(a,g),e.set(g,M),g.addEventListener("dispose",h),c(M.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const y=g.mapping,E=y===Td||y===wd,M=y===ea||y===Qa;if(E||M){let _=t.get(g);const S=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return i===null&&(i=new l0(a)),_=E?i.fromEquirectangular(g,_):i.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,t.set(g,_),_.texture;if(_!==void 0)return _.texture;{const R=g.image;return E&&R&&R.height>0||M&&R&&d(R)?(i===null&&(i=new l0(a)),_=E?i.fromEquirectangular(g):i.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,t.set(g,_),g.addEventListener("dispose",p),_.texture):null}}}return g}function c(g,y){return y===Td?g.mapping=ea:y===wd&&(g.mapping=Qa),g}function d(g){let y=0;const E=6;for(let M=0;M<E;M++)g[M]!==void 0&&y++;return y===E}function h(g){const y=g.target;y.removeEventListener("dispose",h);const E=e.get(y);E!==void 0&&(e.delete(y),E.dispose())}function p(g){const y=g.target;y.removeEventListener("dispose",p);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function v(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:v}}function F1(a){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=a.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&qa("WebGLRenderer: "+i+" extension not supported."),s}}}function O1(a,e,t,i){const s={},o=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete s[g.id];const y=o.get(g);y&&(e.remove(y),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(v,g){return s[g.id]===!0||(g.addEventListener("dispose",u),s[g.id]=!0,t.memory.geometries++),g}function d(v){const g=v.attributes;for(const y in g)e.update(g[y],a.ARRAY_BUFFER)}function h(v){const g=[],y=v.index,E=v.attributes.position;let M=0;if(E===void 0)return;if(y!==null){const R=y.array;M=y.version;for(let I=0,A=R.length;I<A;I+=3){const b=R[I+0],N=R[I+1],D=R[I+2];g.push(b,N,N,D,D,b)}}else{const R=E.array;M=E.version;for(let I=0,A=R.length/3-1;I<A;I+=3){const b=I+0,N=I+1,D=I+2;g.push(b,N,N,D,D,b)}}const _=new(E.count>=65535?_v:gv)(g,1);_.version=M;const S=o.get(v);S&&e.remove(S),o.set(v,_)}function p(v){const g=o.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&h(v)}else h(v);return o.get(v)}return{get:c,update:d,getWireframeAttribute:p}}function k1(a,e,t){let i;function s(v){i=v}let o,u;function c(v){o=v.type,u=v.bytesPerElement}function d(v,g){a.drawElements(i,g,o,v*u),t.update(g,i,1)}function h(v,g,y){y!==0&&(a.drawElementsInstanced(i,g,o,v*u,y),t.update(g,i,y))}function p(v,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,o,v,0,y);let M=0;for(let _=0;_<y;_++)M+=g[_];t.update(M,i,1)}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p}function B1(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,u,c){switch(t.calls++,u){case a.TRIANGLES:t.triangles+=c*(o/3);break;case a.LINES:t.lines+=c*(o/2);break;case a.LINE_STRIP:t.lines+=c*(o-1);break;case a.LINE_LOOP:t.lines+=c*o;break;case a.POINTS:t.points+=c*o;break;default:bt("WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function z1(a,e,t){const i=new WeakMap,s=new nn;function o(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=p!==void 0?p.length:0;let g=i.get(c);if(g===void 0||g.count!==v){let O=function(){T.dispose(),i.delete(c),c.removeEventListener("dispose",O)};var y=O;g!==void 0&&g.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,_=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],I=c.morphAttributes.color||[];let A=0;E===!0&&(A=1),M===!0&&(A=2),_===!0&&(A=3);let b=c.attributes.position.count*A,N=1;b>e.maxTextureSize&&(N=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const D=new Float32Array(b*N*4*v),T=new hv(D,b,N,v);T.type=lr,T.needsUpdate=!0;const L=A*4;for(let B=0;B<v;B++){const W=S[B],J=R[B],z=I[B],Q=b*N*4*B;for(let ue=0;ue<W.count;ue++){const K=ue*L;E===!0&&(s.fromBufferAttribute(W,ue),D[Q+K+0]=s.x,D[Q+K+1]=s.y,D[Q+K+2]=s.z,D[Q+K+3]=0),M===!0&&(s.fromBufferAttribute(J,ue),D[Q+K+4]=s.x,D[Q+K+5]=s.y,D[Q+K+6]=s.z,D[Q+K+7]=0),_===!0&&(s.fromBufferAttribute(z,ue),D[Q+K+8]=s.x,D[Q+K+9]=s.y,D[Q+K+10]=s.z,D[Q+K+11]=z.itemSize===4?s.w:1)}}g={count:v,texture:T,size:new Mt(b,N)},i.set(c,g),c.addEventListener("dispose",O)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(a,"morphTexture",u.morphTexture,t);else{let E=0;for(let _=0;_<h.length;_++)E+=h[_];const M=c.morphTargetsRelative?1:1-E;d.getUniforms().setValue(a,"morphTargetBaseInfluence",M),d.getUniforms().setValue(a,"morphTargetInfluences",h)}d.getUniforms().setValue(a,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}return{update:o}}function V1(a,e,t,i,s){let o=new WeakMap;function u(h){const p=s.render.frame,v=h.geometry,g=e.get(h,v);if(o.get(g)!==p&&(e.update(g),o.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==p&&(t.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,a.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const y=h.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return g}function c(){o=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:u,dispose:c}}const H1={[Z0]:"LINEAR_TONE_MAPPING",[Q0]:"REINHARD_TONE_MAPPING",[J0]:"CINEON_TONE_MAPPING",[ev]:"ACES_FILMIC_TONE_MAPPING",[nv]:"AGX_TONE_MAPPING",[iv]:"NEUTRAL_TONE_MAPPING",[tv]:"CUSTOM_TONE_MAPPING"};function G1(a,e,t,i,s,o){const u=new Zi(e,t,{type:a,depthBuffer:s,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let c=null,d=null;const h=new Yn;h.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new En([0,2,0,0,2,0],2));const p=new IM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new kr(h,p),g=new wv(-1,1,1,-1,0,1);let y=null,E=null,M=!1,_,S=null,R=[],I=!1;this.setSize=function(A,b){u.setSize(A,b),c!==null&&c.setSize(A,b),d!==null&&d.setSize(A,b);for(let N=0;N<R.length;N++){const D=R[N];D.setSize&&D.setSize(A,b)}},this.setEffects=function(A){R=A,I=R.length>0&&R[0].isRenderPass===!0;const b=u.width,N=u.height;R.length>0&&c===null&&(c=new Zi(b,N,{type:pr,depthBuffer:!1,stencilBuffer:!1}),d=new Zi(b,N,{type:pr,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<R.length;D++){const T=R[D];T.setSize&&T.setSize(b,N)}},this.begin=function(A,b){if(M||A.toneMapping===fr&&R.length===0)return!1;if(S=b,b!==null){const N=b.width,D=b.height;(u.width!==N||u.height!==D)&&this.setSize(N,D)}return I===!1&&A.setRenderTarget(u),_=A.toneMapping,A.toneMapping=fr,!0},this.hasRenderPass=function(){return I},this.end=function(A,b){A.toneMapping=_,M=!0;let N=u,D=c;for(let T=0;T<R.length;T++){const L=R[T];L.enabled!==!1&&(L.render(A,D,N,b),L.needsSwap!==!1&&(N=D,D=D===c?d:c))}if(y!==A.outputColorSpace||E!==A.toneMapping){y=A.outputColorSpace,E=A.toneMapping,p.defines={},vt.getTransfer(y)===It&&(p.defines.SRGB_TRANSFER="");const T=H1[E];T&&(p.defines[T]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=N.texture,A.setRenderTarget(S),A.render(v,g),S=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.dispose(),c!==null&&c.dispose(),d!==null&&d.dispose(),h.dispose(),p.dispose()}}const bv=new Wn,ep=new hl(1,1),Pv=new hv,Lv=new uM,Nv=new yv,d0=[],h0=[],p0=new Float32Array(16),m0=new Float32Array(9),g0=new Float32Array(4);function oo(a,e,t){const i=a[0];if(i<=0||i>0)return a;const s=e*t;let o=d0[s];if(o===void 0&&(o=new Float32Array(s),d0[s]=o),e!==0){i.toArray(o,0);for(let u=1,c=0;u!==e;++u)c+=t,a[u].toArray(o,c)}return o}function _n(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function vn(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function Oc(a,e){let t=h0[e];t===void 0&&(t=new Int32Array(e),h0[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function W1(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function X1(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;a.uniform2fv(this.addr,e),vn(t,e)}}function Y1(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;a.uniform3fv(this.addr,e),vn(t,e)}}function q1(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;a.uniform4fv(this.addr,e),vn(t,e)}}function $1(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,i))return;g0.set(i),a.uniformMatrix2fv(this.addr,!1,g0),vn(t,i)}}function K1(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,i))return;m0.set(i),a.uniformMatrix3fv(this.addr,!1,m0),vn(t,i)}}function j1(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,i))return;p0.set(i),a.uniformMatrix4fv(this.addr,!1,p0),vn(t,i)}}function Z1(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Q1(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;a.uniform2iv(this.addr,e),vn(t,e)}}function J1(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;a.uniform3iv(this.addr,e),vn(t,e)}}function ew(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;a.uniform4iv(this.addr,e),vn(t,e)}}function tw(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function nw(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;a.uniform2uiv(this.addr,e),vn(t,e)}}function iw(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;a.uniform3uiv(this.addr,e),vn(t,e)}}function rw(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;a.uniform4uiv(this.addr,e),vn(t,e)}}function sw(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s);let o;this.type===a.SAMPLER_2D_SHADOW?(ep.compareFunction=t.isReversedDepthBuffer()?wp:Tp,o=ep):o=bv,t.setTexture2D(e||o,s)}function aw(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Lv,s)}function ow(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Nv,s)}function lw(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Pv,s)}function uw(a){switch(a){case 5126:return W1;case 35664:return X1;case 35665:return Y1;case 35666:return q1;case 35674:return $1;case 35675:return K1;case 35676:return j1;case 5124:case 35670:return Z1;case 35667:case 35671:return Q1;case 35668:case 35672:return J1;case 35669:case 35673:return ew;case 5125:return tw;case 36294:return nw;case 36295:return iw;case 36296:return rw;case 35678:case 36198:case 36298:case 36306:case 35682:return sw;case 35679:case 36299:case 36307:return aw;case 35680:case 36300:case 36308:case 36293:return ow;case 36289:case 36303:case 36311:case 36292:return lw}}function cw(a,e){a.uniform1fv(this.addr,e)}function fw(a,e){const t=oo(e,this.size,2);a.uniform2fv(this.addr,t)}function dw(a,e){const t=oo(e,this.size,3);a.uniform3fv(this.addr,t)}function hw(a,e){const t=oo(e,this.size,4);a.uniform4fv(this.addr,t)}function pw(a,e){const t=oo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function mw(a,e){const t=oo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function gw(a,e){const t=oo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function _w(a,e){a.uniform1iv(this.addr,e)}function vw(a,e){a.uniform2iv(this.addr,e)}function xw(a,e){a.uniform3iv(this.addr,e)}function Sw(a,e){a.uniform4iv(this.addr,e)}function yw(a,e){a.uniform1uiv(this.addr,e)}function Mw(a,e){a.uniform2uiv(this.addr,e)}function Ew(a,e){a.uniform3uiv(this.addr,e)}function Tw(a,e){a.uniform4uiv(this.addr,e)}function ww(a,e,t){const i=this.cache,s=e.length,o=Oc(t,s);_n(i,o)||(a.uniform1iv(this.addr,o),vn(i,o));let u;this.type===a.SAMPLER_2D_SHADOW?u=ep:u=bv;for(let c=0;c!==s;++c)t.setTexture2D(e[c]||u,o[c])}function Aw(a,e,t){const i=this.cache,s=e.length,o=Oc(t,s);_n(i,o)||(a.uniform1iv(this.addr,o),vn(i,o));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||Lv,o[u])}function Rw(a,e,t){const i=this.cache,s=e.length,o=Oc(t,s);_n(i,o)||(a.uniform1iv(this.addr,o),vn(i,o));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||Nv,o[u])}function Cw(a,e,t){const i=this.cache,s=e.length,o=Oc(t,s);_n(i,o)||(a.uniform1iv(this.addr,o),vn(i,o));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||Pv,o[u])}function bw(a){switch(a){case 5126:return cw;case 35664:return fw;case 35665:return dw;case 35666:return hw;case 35674:return pw;case 35675:return mw;case 35676:return gw;case 5124:case 35670:return _w;case 35667:case 35671:return vw;case 35668:case 35672:return xw;case 35669:case 35673:return Sw;case 5125:return yw;case 36294:return Mw;case 36295:return Ew;case 36296:return Tw;case 35678:case 36198:case 36298:case 36306:case 35682:return ww;case 35679:case 36299:case 36307:return Aw;case 35680:case 36300:case 36308:case 36293:return Rw;case 36289:case 36303:case 36311:case 36292:return Cw}}class Pw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=uw(t.type)}}class Lw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bw(t.type)}}class Nw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,u=s.length;o!==u;++o){const c=s[o];c.setValue(e,t[c.id],i)}}}const th=/(\w+)(\])?(\[|\.)?/g;function _0(a,e){a.seq.push(e),a.map[e.id]=e}function Dw(a,e,t){const i=a.name,s=i.length;for(th.lastIndex=0;;){const o=th.exec(i),u=th.lastIndex;let c=o[1];const d=o[2]==="]",h=o[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===s){_0(t,h===void 0?new Pw(c,a,e):new Lw(c,a,e));break}else{let v=t.map[c];v===void 0&&(v=new Nw(c),_0(t,v)),t=v}}}class pc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<i;++u){const c=e.getActiveUniform(t,u),d=e.getUniformLocation(t,c.name);Dw(c,d,this)}const s=[],o=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(u):o.push(u);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,u=t.length;o!==u;++o){const c=t[o],d=i[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const u=e[s];u.id in t&&i.push(u)}return i}}function v0(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const Iw=37297;let Uw=0;function Fw(a,e){const t=a.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=s;u<o;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}const x0=new ot;function Ow(a){vt._getMatrix(x0,vt.workingColorSpace,a);const e=`mat3( ${x0.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(a)){case yc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function S0(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),o=(a.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+Fw(a.getShaderSource(e),c)}else return o}function kw(a,e){const t=Ow(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Bw={[Z0]:"Linear",[Q0]:"Reinhard",[J0]:"Cineon",[ev]:"ACESFilmic",[nv]:"AgX",[iv]:"Neutral",[tv]:"Custom"};function zw(a,e){const t=Bw[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ac=new ie;function Vw(){vt.getLuminanceCoefficients(ac);const a=ac.x.toFixed(4),e=ac.y.toFixed(4),t=ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hw(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function Gw(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ww(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=a.getActiveAttrib(e,s),u=o.name;let c=1;o.type===a.FLOAT_MAT2&&(c=2),o.type===a.FLOAT_MAT3&&(c=3),o.type===a.FLOAT_MAT4&&(c=4),t[u]={type:o.type,location:a.getAttribLocation(e,u),locationSize:c}}return t}function nl(a){return a!==""}function y0(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function M0(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xw=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(a){return a.replace(Xw,qw)}const Yw=new Map;function qw(a,e){let t=ht[e];if(t===void 0){const i=Yw.get(e);if(i!==void 0)t=ht[i],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tp(t)}const $w=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function E0(a){return a.replace($w,Kw)}function Kw(a,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function T0(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const jw={[lc]:"SHADOWMAP_TYPE_PCF",[tl]:"SHADOWMAP_TYPE_VSM"};function Zw(a){return jw[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Qw={[ea]:"ENVMAP_TYPE_CUBE",[Qa]:"ENVMAP_TYPE_CUBE",[Ic]:"ENVMAP_TYPE_CUBE_UV"};function Jw(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":Qw[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const eA={[Qa]:"ENVMAP_MODE_REFRACTION"};function tA(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":eA[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nA={[j0]:"ENVMAP_BLENDING_MULTIPLY",[zy]:"ENVMAP_BLENDING_MIX",[Vy]:"ENVMAP_BLENDING_ADD"};function iA(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":nA[a.combine]||"ENVMAP_BLENDING_NONE"}function rA(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function sA(a,e,t,i){const s=a.getContext(),o=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=Zw(t),h=Jw(t),p=tA(t),v=iA(t),g=rA(t),y=Hw(t),E=Gw(o),M=s.createProgram();let _,S,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(nl).join(`
`),_.length>0&&(_+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(nl).join(`
`),S.length>0&&(S+=`
`)):(_=[T0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),S=[T0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fr?"#define TONE_MAPPING":"",t.toneMapping!==fr?ht.tonemapping_pars_fragment:"",t.toneMapping!==fr?zw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,kw("linearToOutputTexel",t.outputColorSpace),Vw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nl).join(`
`)),u=tp(u),u=y0(u,t),u=M0(u,t),c=tp(c),c=y0(c,t),c=M0(c,t),u=E0(u),c=E0(c),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,S=["#define varying in",t.glslVersion===L_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===L_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const I=R+_+u,A=R+S+c,b=v0(s,s.VERTEX_SHADER,I),N=v0(s,s.FRAGMENT_SHADER,A);s.attachShader(M,b),s.attachShader(M,N),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function D(B){if(a.debug.checkShaderErrors){const W=s.getProgramInfoLog(M)||"",J=s.getShaderInfoLog(b)||"",z=s.getShaderInfoLog(N)||"",Q=W.trim(),ue=J.trim(),K=z.trim();let $=!0,j=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if($=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,M,b,N);else{const Z=S0(s,b,"vertex"),U=S0(s,N,"fragment");bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Q+`
`+Z+`
`+U)}else Q!==""?rt("WebGLProgram: Program Info Log:",Q):(ue===""||K==="")&&(j=!1);j&&(B.diagnostics={runnable:$,programLog:Q,vertexShader:{log:ue,prefix:_},fragmentShader:{log:K,prefix:S}})}s.deleteShader(b),s.deleteShader(N),T=new pc(s,M),L=Ww(s,M)}let T;this.getUniforms=function(){return T===void 0&&D(this),T};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(M,Iw)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uw++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=N,this}let aA=0;class oA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new lA(e),t.set(e,i)),i}}class lA{constructor(e){this.id=aA++,this.code=e,this.usedTimes=0}}function uA(a){return a===ta||a===vc||a===xc}function cA(a,e,t,i,s,o){const u=new pv,c=new oA,d=new Set,h=[],p=new Map,v=i.logarithmicDepthBuffer;let g=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return d.add(T),T===0?"uv":`uv${T}`}function M(T,L,O,B,W,J){const z=B.fog,Q=W.geometry,ue=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,K=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,$=e.get(T.envMap||ue,K),j=$&&$.mapping===Ic?$.image.height:null,Z=y[T.type];T.precision!==null&&(g=i.getMaxPrecision(T.precision),g!==T.precision&&rt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const U=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ne=U!==void 0?U.length:0;let xe=0;Q.morphAttributes.position!==void 0&&(xe=1),Q.morphAttributes.normal!==void 0&&(xe=2),Q.morphAttributes.color!==void 0&&(xe=3);let Le,Ie,Ge,le;if(Z){const At=ar[Z];Le=At.vertexShader,Ie=At.fragmentShader}else{Le=T.vertexShader,Ie=T.fragmentShader;const At=c.getVertexShaderStage(T),yt=c.getFragmentShaderStage(T);c.update(T,At,yt),Ge=At.id,le=yt.id}const de=a.getRenderTarget(),Ee=a.state.buffers.depth.getReversed(),Je=W.isInstancedMesh===!0,ke=W.isBatchedMesh===!0,ut=!!T.map,Ht=!!T.matcap,ct=!!$,mt=!!T.aoMap,Nt=!!T.lightMap,ft=!!T.bumpMap&&T.wireframe===!1,Ut=!!T.normalMap,Jt=!!T.displacementMap,un=!!T.emissiveMap,Lt=!!T.metalnessMap,Gt=!!T.roughnessMap,Y=T.anisotropy>0,hn=T.clearcoat>0,wt=T.dispersion>0,F=T.retroreflectivity>0,w=T.iridescence>0,ee=T.sheen>0,oe=T.transmission>0,he=Y&&!!T.anisotropyMap,Me=hn&&!!T.clearcoatMap,Ae=hn&&!!T.clearcoatNormalMap,pe=hn&&!!T.clearcoatRoughnessMap,ge=w&&!!T.iridescenceMap,be=w&&!!T.iridescenceThicknessMap,$e=ee&&!!T.sheenColorMap,Pe=ee&&!!T.sheenRoughnessMap,we=!!T.specularMap,Ke=!!T.specularColorMap,et=!!T.specularIntensityMap,it=oe&&!!T.transmissionMap,H=oe&&!!T.thicknessMap,Re=!!T.gradientMap,me=!!T.alphaMap,Ce=T.alphaTest>0,Oe=!!T.alphaHash,_e=!!T.extensions;let Ze=fr;T.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Ze=a.toneMapping);const Ye={shaderID:Z,shaderType:T.type,shaderName:T.name,vertexShader:Le,fragmentShader:Ie,defines:T.defines,customVertexShaderID:Ge,customFragmentShaderID:le,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:ke,batchingColor:ke&&W._colorsTexture!==null,instancing:Je,instancingColor:Je&&W.instanceColor!==null,instancingMorph:Je&&W.morphTexture!==null,outputColorSpace:de===null?a.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:ut,matcap:Ht,envMap:ct,envMapMode:ct&&$.mapping,envMapCubeUVHeight:j,aoMap:mt,lightMap:Nt,bumpMap:ft,normalMap:Ut,displacementMap:Jt,emissiveMap:un,normalMapObjectSpace:Ut&&T.normalMapType===Wy,normalMapTangentSpace:Ut&&T.normalMapType===P_,packedNormalMap:Ut&&T.normalMapType===P_&&uA(T.normalMap.format),metalnessMap:Lt,roughnessMap:Gt,anisotropy:Y,anisotropyMap:he,clearcoat:hn,clearcoatMap:Me,clearcoatNormalMap:Ae,clearcoatRoughnessMap:pe,dispersion:wt,retroreflection:F,iridescence:w,iridescenceMap:ge,iridescenceThicknessMap:be,sheen:ee,sheenColorMap:$e,sheenRoughnessMap:Pe,specularMap:we,specularColorMap:Ke,specularIntensityMap:et,transmission:oe,transmissionMap:it,thicknessMap:H,gradientMap:Re,opaque:T.transparent===!1&&T.blending===al&&T.alphaToCoverage===!1,alphaMap:me,alphaTest:Ce,alphaHash:Oe,combine:T.combine,mapUv:ut&&E(T.map.channel),aoMapUv:mt&&E(T.aoMap.channel),lightMapUv:Nt&&E(T.lightMap.channel),bumpMapUv:ft&&E(T.bumpMap.channel),normalMapUv:Ut&&E(T.normalMap.channel),displacementMapUv:Jt&&E(T.displacementMap.channel),emissiveMapUv:un&&E(T.emissiveMap.channel),metalnessMapUv:Lt&&E(T.metalnessMap.channel),roughnessMapUv:Gt&&E(T.roughnessMap.channel),anisotropyMapUv:he&&E(T.anisotropyMap.channel),clearcoatMapUv:Me&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:be&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&E(T.sheenRoughnessMap.channel),specularMapUv:we&&E(T.specularMap.channel),specularColorMapUv:Ke&&E(T.specularColorMap.channel),specularIntensityMapUv:et&&E(T.specularIntensityMap.channel),transmissionMapUv:it&&E(T.transmissionMap.channel),thicknessMapUv:H&&E(T.thicknessMap.channel),alphaMapUv:me&&E(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ut||Y),vertexNormals:!!Q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Q.attributes.uv&&(ut||me),fog:!!z,useFog:T.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Q.attributes.normal===void 0&&Ut===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ee,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:xe,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&O.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ze,decodeVideoTexture:ut&&T.map.isVideoTexture===!0&&vt.getTransfer(T.map.colorSpace)===It,decodeVideoTextureEmissive:un&&T.emissiveMap.isVideoTexture===!0&&vt.getTransfer(T.emissiveMap.colorSpace)===It,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Dr,flipSided:T.side===ti,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:_e&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&T.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ye.vertexUv1s=d.has(1),Ye.vertexUv2s=d.has(2),Ye.vertexUv3s=d.has(3),d.clear(),Ye}function _(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const O in T.defines)L.push(O),L.push(T.defines[O]);return T.isRawShaderMaterial===!1&&(S(L,T),R(L,T),L.push(a.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function S(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numSunLights),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numSunLightShadows),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function R(T,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.retroreflection&&u.enable(24),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function I(T){const L=y[T.type];let O;if(L){const B=ar[L];O=LM.clone(B.uniforms)}else O=T.uniforms;return O}function A(T,L){let O=p.get(L);return O!==void 0?++O.usedTimes:(O=new sA(a,L,T,s),h.push(O),p.set(L,O)),O}function b(T){if(--T.usedTimes===0){const L=h.indexOf(T);h[L]=h[h.length-1],h.pop(),p.delete(T.cacheKey),T.destroy()}}function N(T){c.remove(T)}function D(){c.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:I,acquireProgram:A,releaseProgram:b,releaseShaderCache:N,programs:h,dispose:D}}function fA(){let a=new WeakMap;function e(u){return a.has(u)}function t(u){let c=a.get(u);return c===void 0&&(c={},a.set(u,c)),c}function i(u){a.delete(u)}function s(u,c,d){a.get(u)[c]=d}function o(){a=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:o}}function dA(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function w0(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function A0(){const a=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function u(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function c(g,y,E,M,_,S){let R=a[e];return R===void 0?(R={id:g.id,object:g,geometry:y,material:E,materialVariant:u(g),groupOrder:M,renderOrder:g.renderOrder,z:_,group:S},a[e]=R):(R.id=g.id,R.object=g,R.geometry=y,R.material=E,R.materialVariant=u(g),R.groupOrder=M,R.renderOrder=g.renderOrder,R.z=_,R.group=S),e++,R}function d(g,y,E,M,_,S,R){R.reversedDepth===!0&&(_=-_);const I=c(g,y,E,M,_,S);E.transmission>0?i.push(I):E.transparent===!0?s.push(I):t.push(I)}function h(g,y,E,M,_,S){const R=c(g,y,E,M,_,S);E.transmission>0?i.unshift(R):E.transparent===!0?s.unshift(R):t.unshift(R)}function p(g,y){t.length>1&&t.sort(g||dA),i.length>1&&i.sort(y||w0),s.length>1&&s.sort(y||w0)}function v(){for(let g=e,y=a.length;g<y;g++){const E=a[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:d,unshift:h,finish:v,sort:p}}function hA(){let a=new WeakMap;function e(i,s){const o=a.get(i);let u;return o===void 0?(u=new A0,a.set(i,[u])):s>=o.length?(u=new A0,o.push(u)):u=o[s],u}function t(){a=new WeakMap}return{get:e,dispose:t}}function pA(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ie,color:new Tt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return a[e.id]=t,t}}}function mA(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let gA=0;function _A(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function vA(a){const e=new pA,t=mA(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new ie);const s=new ie,o=new sn,u=new sn;function c(h){let p=0,v=0,g=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let y=0,E=0,M=0,_=0,S=0,R=0,I=0,A=0,b=0,N=0,D=0,T=0,L=0,O=0;h.sort(_A);for(let W=0,J=h.length;W<J;W++){const z=h[W],Q=z.color,ue=z.intensity,K=z.distance;let $=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===ta?$=z.shadow.map.texture:$=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)p+=Q.r*ue,v+=Q.g*ue,g+=Q.b*ue;else if(z.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(z.sh.coefficients[j],ue);O++}else if(z.isSunLight){const j=e.get(z);if(j.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Z=z.shadow,U=t.get(z);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[E]=U,i.sunShadowMap[E]=$;const ne=Z.getViewportCount();for(let xe=0;xe<ne;xe++)i.sunShadowMatrix[M+xe]=Z.getMatrix(xe),i.sunShadowCascade[M+xe]=Z._cascadeData[xe];M+=ne,E++}i.sun[y]=j,y++}else if(z.isDirectionalLight){const j=e.get(z);if(j.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Z=z.shadow,U=t.get(z);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,i.directionalShadow[_]=U,i.directionalShadowMap[_]=$,i.directionalShadowMatrix[_]=z.shadow.matrix,b++}i.directional[_]=j,_++}else if(z.isSpotLight){const j=e.get(z);j.position.setFromMatrixPosition(z.matrixWorld),j.color.copy(Q).multiplyScalar(ue),j.distance=K,j.coneCos=Math.cos(z.angle),j.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),j.decay=z.decay,i.spot[R]=j;const Z=z.shadow;if(z.map&&(i.spotLightMap[T]=z.map,T++,Z.updateMatrices(z),z.castShadow&&L++),i.spotLightMatrix[R]=Z.matrix,z.castShadow){const U=t.get(z);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,i.spotShadow[R]=U,i.spotShadowMap[R]=$,D++}R++}else if(z.isRectAreaLight){const j=e.get(z);j.color.copy(Q).multiplyScalar(ue),j.halfWidth.set(z.width*.5,0,0),j.halfHeight.set(0,z.height*.5,0),i.rectArea[I]=j,I++}else if(z.isPointLight){const j=e.get(z);if(j.color.copy(z.color).multiplyScalar(z.intensity),j.distance=z.distance,j.decay=z.decay,z.castShadow){const Z=z.shadow,U=t.get(z);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,U.shadowCameraNear=Z.camera.near,U.shadowCameraFar=Z.camera.far,i.pointShadow[S]=U,i.pointShadowMap[S]=$,i.pointShadowMatrix[S]=z.shadow.matrix,N++}i.point[S]=j,S++}else if(z.isHemisphereLight){const j=e.get(z);j.skyColor.copy(z.color).multiplyScalar(ue),j.groundColor.copy(z.groundColor).multiplyScalar(ue),i.hemi[A]=j,A++}}I>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=v,i.ambient[2]=g;const B=i.hash;(B.sunLength!==y||B.directionalLength!==_||B.pointLength!==S||B.spotLength!==R||B.rectAreaLength!==I||B.hemiLength!==A||B.numSunShadows!==E||B.numDirectionalShadows!==b||B.numPointShadows!==N||B.numSpotShadows!==D||B.numSpotMaps!==T||B.numLightProbes!==O)&&(i.sun.length=y,i.directional.length=_,i.spot.length=R,i.rectArea.length=I,i.point.length=S,i.hemi.length=A,i.sunShadow.length=E,i.sunShadowMap.length=E,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=N,i.pointShadowMap.length=N,i.pointShadowMatrix.length=N,i.spotShadow.length=D,i.spotShadowMap.length=D,i.spotLightMatrix.length=D+T-L,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=O,B.sunLength=y,B.directionalLength=_,B.pointLength=S,B.spotLength=R,B.rectAreaLength=I,B.hemiLength=A,B.numSunShadows=E,B.numDirectionalShadows=b,B.numPointShadows=N,B.numSpotShadows=D,B.numSpotMaps=T,B.numLightProbes=O,i.version=gA++)}function d(h,p){let v=0,g=0,y=0,E=0,M=0,_=0;const S=p.matrixWorldInverse;for(let R=0,I=h.length;R<I;R++){const A=h[R];if(A.isSunLight){const b=i.sun[v];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(S),v++}else if(A.isDirectionalLight){const b=i.directional[g];b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(S),g++}else if(A.isSpotLight){const b=i.spot[E];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(S),E++}else if(A.isRectAreaLight){const b=i.rectArea[M];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(S),u.identity(),o.copy(A.matrixWorld),o.premultiply(S),u.extractRotation(o),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),M++}else if(A.isPointLight){const b=i.point[y];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(S),y++}else if(A.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(S),_++}}}return{setup:c,setupView:d,state:i}}function R0(a){const e=new vA(a),t=[],i=[],s=[];function o(g){v.camera=g,t.length=0,i.length=0,s.length=0}function u(g){t.push(g)}function c(g){i.push(g)}function d(g){s.push(g)}function h(){e.setup(t)}function p(g){e.setupView(t,g)}const v={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:v,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:c,pushLightProbeGrid:d}}function xA(a){let e=new WeakMap;function t(s,o=0){const u=e.get(s);let c;return u===void 0?(c=new R0(a),e.set(s,[c])):o>=u.length?(c=new R0(a),u.push(c)):c=u[o],c}function i(){e=new WeakMap}return{get:t,dispose:i}}const SA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,MA=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],EA=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],C0=new sn,Jo=new ie,nh=new ie;function TA(a,e,t){let i=new xv;const s=new Mt,o=new Mt,u=new nn,c=new UM,d=new FM,h={},p=t.maxTextureSize,v={[Js]:ti,[ti]:Js,[Dr]:Dr},g=new mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:SA,fragmentShader:yA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new Yn;E.setAttribute("position",new dr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new kr(E,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lc;let S=this.type;this.render=function(N,D,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||N.length===0)return;this.type===yy&&(rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=lc);const L=a.getRenderTarget(),O=a.getActiveCubeFace(),B=a.getActiveMipmapLevel(),W=a.state;W.setBlending(Ur),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const J=S!==this.type;J&&D.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(Q=>Q.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,Q=N.length;z<Q;z++){const ue=N[z],K=ue.shadow;if(K===void 0){rt("WebGLShadowMap:",ue,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const $=K.getFrameExtents();s.multiply($),o.copy(K.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/$.x),s.x=o.x*$.x,K.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/$.y),s.y=o.y*$.y,K.mapSize.y=o.y));const j=a.state.buffers.depth.getReversed();if(K.camera._reversedDepth=j,K.map===null||J===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===tl){if(ue.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Zi(s.x,s.y,{format:ta,type:pr,minFilter:kn,magFilter:kn,generateMipmaps:!1}),K.map.texture.name=ue.name+".shadowMap",K.map.depthTexture=new hl(s.x,s.y,lr),K.map.depthTexture.name=ue.name+".shadowMapDepth",K.map.depthTexture.format=Or,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Cn,K.map.depthTexture.magFilter=Cn}else ue.isPointLight?(K.map=new Cv(s.x),K.map.depthTexture=new bM(s.x,hr)):(K.map=new Zi(s.x,s.y),K.map.depthTexture=new hl(s.x,s.y,hr)),K.map.depthTexture.name=ue.name+".shadowMap",K.map.depthTexture.format=Or,this.type===lc?(K.map.depthTexture.compareFunction=j?wp:Tp,K.map.depthTexture.minFilter=kn,K.map.depthTexture.magFilter=kn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Cn,K.map.depthTexture.magFilter=Cn);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);const Z=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();ue.isPointLight!==!0&&K.updateMatrices(ue,T);for(let U=0;U<Z;U++){const ne=K.getCamera(U);if(ue.isPointLight){const xe=K.camera,Le=K.matrix,Ie=ue.distance||xe.far;Ie!==xe.far&&(xe.far=Ie,xe.updateProjectionMatrix()),Jo.setFromMatrixPosition(ue.matrixWorld),xe.position.copy(Jo),nh.copy(xe.position),nh.add(MA[U]),xe.up.copy(EA[U]),xe.lookAt(nh),xe.updateMatrixWorld(),Le.makeTranslation(-Jo.x,-Jo.y,-Jo.z),C0.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),K._frustum.setFromProjectionMatrix(C0,xe.coordinateSystem,xe.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)a.setRenderTarget(K.map,U),a.clear();else{U===0&&(a.setRenderTarget(K.map),a.clear());const xe=K.getViewport(U);u.set(o.x*xe.x,o.y*xe.y,o.x*xe.z,o.y*xe.w),W.viewport(u)}i=K.getFrustum(U),A(D,T,ne,ue,this.type)}K.isPointLightShadow!==!0&&this.type===tl&&R(K,T),K.needsUpdate=!1}S=this.type,_.needsUpdate=!1,a.setRenderTarget(L,O,B)};function R(N,D){const T=e.update(M);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null?N.mapPass=new Zi(s.x,s.y,{format:ta,type:pr}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value.set(N.map.width,N.map.height),g.uniforms.radius.value=N.radius,a.setRenderTarget(N.mapPass),a.clear(),a.renderBufferDirect(D,null,T,g,M,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value.set(N.map.width,N.map.height),y.uniforms.radius.value=N.radius,a.setRenderTarget(N.map),a.clear(),a.renderBufferDirect(D,null,T,y,M,null)}function I(N,D,T,L){let O=null;const B=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(B!==void 0)O=B;else if(O=T.isPointLight===!0?d:c,a.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const W=O.uuid,J=D.uuid;let z=h[W];z===void 0&&(z={},h[W]=z);let Q=z[J];Q===void 0&&(Q=O.clone(),z[J]=Q,D.addEventListener("dispose",b)),O=Q}if(O.visible=D.visible,O.wireframe=D.wireframe,L===tl?O.side=D.shadowSide!==null?D.shadowSide:D.side:O.side=D.shadowSide!==null?D.shadowSide:v[D.side],O.alphaMap=D.alphaMap,O.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,O.map=D.map,O.clipShadows=D.clipShadows,O.clippingPlanes=D.clippingPlanes,O.clipIntersection=D.clipIntersection,O.displacementMap=D.displacementMap,O.displacementScale=D.displacementScale,O.displacementBias=D.displacementBias,O.wireframeLinewidth=D.wireframeLinewidth,O.linewidth=D.linewidth,T.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const W=a.properties.get(O);W.light=T}return O}function A(N,D,T,L,O){if(N.visible===!1)return;if(N.layers.test(D.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&O===tl)&&(!N.frustumCulled||N.intersectsFrustum(i))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const J=e.update(N),z=N.material;if(Array.isArray(z)){const Q=J.groups;for(let ue=0,K=Q.length;ue<K;ue++){const $=Q[ue],j=z[$.materialIndex];if(j&&j.visible){const Z=I(N,j,L,O);N.onBeforeShadow(a,N,D,T,J,Z,$),a.renderBufferDirect(T,null,J,Z,N,$),N.onAfterShadow(a,N,D,T,J,Z,$)}}}else if(z.visible){const Q=I(N,z,L,O);N.onBeforeShadow(a,N,D,T,J,Q,null),a.renderBufferDirect(T,null,J,Q,N,null),N.onAfterShadow(a,N,D,T,J,Q,null)}}const W=N.children;for(let J=0,z=W.length;J<z;J++)A(W[J],D,T,L,O)}function b(N){N.target.removeEventListener("dispose",b);for(const T in h){const L=h[T],O=N.target.uuid;O in L&&(L[O].dispose(),delete L[O])}}}function wA(a,e){function t(){let H=!1;const Re=new nn;let me=null;const Ce=new nn(0,0,0,0);return{setMask:function(Oe){me!==Oe&&!H&&(a.colorMask(Oe,Oe,Oe,Oe),me=Oe)},setLocked:function(Oe){H=Oe},setClear:function(Oe,_e,Ze,Ye,At){At===!0&&(Oe*=Ye,_e*=Ye,Ze*=Ye),Re.set(Oe,_e,Ze,Ye),Ce.equals(Re)===!1&&(a.clearColor(Oe,_e,Ze,Ye),Ce.copy(Re))},reset:function(){H=!1,me=null,Ce.set(-1,0,0,0)}}}function i(){let H=!1,Re=!1,me=null,Ce=null,Oe=null;return{setReversed:function(_e){if(Re!==_e){const Ze=e.get("EXT_clip_control");_e?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Re=_e;const Ye=Oe;Oe=null,this.setClear(Ye)}},getReversed:function(){return Re},setTest:function(_e){_e?de(a.DEPTH_TEST):Ee(a.DEPTH_TEST)},setMask:function(_e){me!==_e&&!H&&(a.depthMask(_e),me=_e)},setFunc:function(_e){if(Re&&(_e=nM[_e]),Ce!==_e){switch(_e){case dh:a.depthFunc(a.NEVER);break;case hh:a.depthFunc(a.ALWAYS);break;case ph:a.depthFunc(a.LESS);break;case cl:a.depthFunc(a.LEQUAL);break;case mh:a.depthFunc(a.EQUAL);break;case gh:a.depthFunc(a.GEQUAL);break;case _h:a.depthFunc(a.GREATER);break;case vh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ce=_e}},setLocked:function(_e){H=_e},setClear:function(_e){Oe!==_e&&(Oe=_e,Re&&(_e=1-_e),a.clearDepth(_e))},reset:function(){H=!1,me=null,Ce=null,Oe=null,Re=!1}}}function s(){let H=!1,Re=null,me=null,Ce=null,Oe=null,_e=null,Ze=null,Ye=null,At=null;return{setTest:function(yt){H||(yt?de(a.STENCIL_TEST):Ee(a.STENCIL_TEST))},setMask:function(yt){Re!==yt&&!H&&(a.stencilMask(yt),Re=yt)},setFunc:function(yt,wn,yi){(me!==yt||Ce!==wn||Oe!==yi)&&(a.stencilFunc(yt,wn,yi),me=yt,Ce=wn,Oe=yi)},setOp:function(yt,wn,yi){(_e!==yt||Ze!==wn||Ye!==yi)&&(a.stencilOp(yt,wn,yi),_e=yt,Ze=wn,Ye=yi)},setLocked:function(yt){H=yt},setClear:function(yt){At!==yt&&(a.clearStencil(yt),At=yt)},reset:function(){H=!1,Re=null,me=null,Ce=null,Oe=null,_e=null,Ze=null,Ye=null,At=null}}}const o=new t,u=new i,c=new s,d=new WeakMap,h=new WeakMap;let p={},v={},g={},y=new WeakMap,E=[],M=null,_=!1,S=null,R=null,I=null,A=null,b=null,N=null,D=null,T=new Tt(0,0,0),L=0,O=!1,B=null,W=null,J=null,z=null,Q=null;const ue=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,$=0;const j=a.getParameter(a.VERSION);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=$>=2);let Z=null,U={};const ne=a.getParameter(a.SCISSOR_BOX),xe=a.getParameter(a.VIEWPORT),Le=new nn().fromArray(ne),Ie=new nn().fromArray(xe);function Ge(H,Re,me,Ce){const Oe=new Uint8Array(4),_e=a.createTexture();a.bindTexture(H,_e),a.texParameteri(H,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(H,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ze=0;Ze<me;Ze++)H===a.TEXTURE_3D||H===a.TEXTURE_2D_ARRAY?a.texImage3D(Re,0,a.RGBA,1,1,Ce,0,a.RGBA,a.UNSIGNED_BYTE,Oe):a.texImage2D(Re+Ze,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Oe);return _e}const le={};le[a.TEXTURE_2D]=Ge(a.TEXTURE_2D,a.TEXTURE_2D,1),le[a.TEXTURE_CUBE_MAP]=Ge(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[a.TEXTURE_2D_ARRAY]=Ge(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),le[a.TEXTURE_3D]=Ge(a.TEXTURE_3D,a.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),c.setClear(0),de(a.DEPTH_TEST),u.setFunc(cl),ft(!1),Ut(A_),de(a.CULL_FACE),mt(Ur);function de(H){p[H]!==!0&&(a.enable(H),p[H]=!0)}function Ee(H){p[H]!==!1&&(a.disable(H),p[H]=!1)}function Je(H,Re){return g[H]!==Re?(a.bindFramebuffer(H,Re),g[H]=Re,H===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=Re),H===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=Re),!0):!1}function ke(H,Re){let me=E,Ce=!1;if(H){me=y.get(Re),me===void 0&&(me=[],y.set(Re,me));const Oe=H.textures;if(me.length!==Oe.length||me[0]!==a.COLOR_ATTACHMENT0){for(let _e=0,Ze=Oe.length;_e<Ze;_e++)me[_e]=a.COLOR_ATTACHMENT0+_e;me.length=Oe.length,Ce=!0}}else me[0]!==a.BACK&&(me[0]=a.BACK,Ce=!0);Ce&&a.drawBuffers(me)}function ut(H){return M!==H?(a.useProgram(H),M=H,!0):!1}const Ht={[Ga]:a.FUNC_ADD,[Ey]:a.FUNC_SUBTRACT,[Ty]:a.FUNC_REVERSE_SUBTRACT};Ht[wy]=a.MIN,Ht[Ay]=a.MAX;const ct={[Ry]:a.ZERO,[Cy]:a.ONE,[by]:a.SRC_COLOR,[$0]:a.SRC_ALPHA,[Uy]:a.SRC_ALPHA_SATURATE,[Dy]:a.DST_COLOR,[Ly]:a.DST_ALPHA,[Py]:a.ONE_MINUS_SRC_COLOR,[K0]:a.ONE_MINUS_SRC_ALPHA,[Iy]:a.ONE_MINUS_DST_COLOR,[Ny]:a.ONE_MINUS_DST_ALPHA,[Fy]:a.CONSTANT_COLOR,[Oy]:a.ONE_MINUS_CONSTANT_COLOR,[ky]:a.CONSTANT_ALPHA,[By]:a.ONE_MINUS_CONSTANT_ALPHA};function mt(H,Re,me,Ce,Oe,_e,Ze,Ye,At,yt){if(H===Ur){_===!0&&(Ee(a.BLEND),_=!1);return}if(_===!1&&(de(a.BLEND),_=!0),H!==My){if(H!==S||yt!==O){if((R!==Ga||b!==Ga)&&(a.blendEquation(a.FUNC_ADD),R=Ga,b=Ga),yt)switch(H){case al:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case R_:a.blendFunc(a.ONE,a.ONE);break;case C_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case b_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:bt("WebGLState: Invalid blending: ",H);break}else switch(H){case al:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case R_:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case C_:bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case b_:bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:bt("WebGLState: Invalid blending: ",H);break}I=null,A=null,N=null,D=null,T.set(0,0,0),L=0,S=H,O=yt}return}Oe=Oe||Re,_e=_e||me,Ze=Ze||Ce,(Re!==R||Oe!==b)&&(a.blendEquationSeparate(Ht[Re],Ht[Oe]),R=Re,b=Oe),(me!==I||Ce!==A||_e!==N||Ze!==D)&&(a.blendFuncSeparate(ct[me],ct[Ce],ct[_e],ct[Ze]),I=me,A=Ce,N=_e,D=Ze),(Ye.equals(T)===!1||At!==L)&&(a.blendColor(Ye.r,Ye.g,Ye.b,At),T.copy(Ye),L=At),S=H,O=!1}function Nt(H,Re){H.side===Dr?Ee(a.CULL_FACE):de(a.CULL_FACE);let me=H.side===ti;Re&&(me=!me),ft(me),H.blending===al&&H.transparent===!1?mt(Ur):mt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),o.setMask(H.colorWrite);const Ce=H.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),un(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?de(a.SAMPLE_ALPHA_TO_COVERAGE):Ee(a.SAMPLE_ALPHA_TO_COVERAGE)}function ft(H){B!==H&&(H?a.frontFace(a.CW):a.frontFace(a.CCW),B=H)}function Ut(H){H!==xy?(de(a.CULL_FACE),H!==W&&(H===A_?a.cullFace(a.BACK):H===Sy?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ee(a.CULL_FACE),W=H}function Jt(H){H!==J&&(K&&a.lineWidth(H),J=H)}function un(H,Re,me){H?(de(a.POLYGON_OFFSET_FILL),(z!==Re||Q!==me)&&(z=Re,Q=me,u.getReversed()&&(Re=-Re),a.polygonOffset(Re,me))):Ee(a.POLYGON_OFFSET_FILL)}function Lt(H){H?de(a.SCISSOR_TEST):Ee(a.SCISSOR_TEST)}function Gt(H){H===void 0&&(H=a.TEXTURE0+ue-1),Z!==H&&(a.activeTexture(H),Z=H)}function Y(H,Re,me){me===void 0&&(Z===null?me=a.TEXTURE0+ue-1:me=Z);let Ce=U[me];Ce===void 0&&(Ce={type:void 0,texture:void 0},U[me]=Ce),(Ce.type!==H||Ce.texture!==Re)&&(Z!==me&&(a.activeTexture(me),Z=me),a.bindTexture(H,Re||le[H]),Ce.type=H,Ce.texture=Re)}function hn(){const H=U[Z];H!==void 0&&H.type!==void 0&&(a.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function wt(){try{a.compressedTexImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function F(){try{a.compressedTexImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function w(){try{a.texSubImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function ee(){try{a.texSubImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function oe(){try{a.compressedTexSubImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function he(){try{a.compressedTexSubImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function Me(){try{a.texStorage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function Ae(){try{a.texStorage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function pe(){try{a.texImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function ge(){try{a.texImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function be(H){return v[H]!==void 0?v[H]:a.getParameter(H)}function $e(H,Re){v[H]!==Re&&(a.pixelStorei(H,Re),v[H]=Re)}function Pe(H){Le.equals(H)===!1&&(a.scissor(H.x,H.y,H.z,H.w),Le.copy(H))}function we(H){Ie.equals(H)===!1&&(a.viewport(H.x,H.y,H.z,H.w),Ie.copy(H))}function Ke(H,Re){let me=h.get(Re);me===void 0&&(me=new WeakMap,h.set(Re,me));let Ce=me.get(H);Ce===void 0&&(Ce=a.getUniformBlockIndex(Re,H.name),me.set(H,Ce))}function et(H,Re){const Ce=h.get(Re).get(H);d.get(Re)!==Ce&&(a.uniformBlockBinding(Re,Ce,H.__bindingPointIndex),d.set(Re,Ce))}function it(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),p={},v={},Z=null,U={},g={},y=new WeakMap,E=[],M=null,_=!1,S=null,R=null,I=null,A=null,b=null,N=null,D=null,T=new Tt(0,0,0),L=0,O=!1,B=null,W=null,J=null,z=null,Q=null,Le.set(0,0,a.canvas.width,a.canvas.height),Ie.set(0,0,a.canvas.width,a.canvas.height),o.reset(),u.reset(),c.reset()}return{buffers:{color:o,depth:u,stencil:c},enable:de,disable:Ee,bindFramebuffer:Je,drawBuffers:ke,useProgram:ut,setBlending:mt,setMaterial:Nt,setFlipSided:ft,setCullFace:Ut,setLineWidth:Jt,setPolygonOffset:un,setScissorTest:Lt,activeTexture:Gt,bindTexture:Y,unbindTexture:hn,compressedTexImage2D:wt,compressedTexImage3D:F,texImage2D:pe,texImage3D:ge,pixelStorei:$e,getParameter:be,updateUBOMapping:Ke,uniformBlockBinding:et,texStorage2D:Me,texStorage3D:Ae,texSubImage2D:w,texSubImage3D:ee,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:Pe,viewport:we,reset:it}}function AA(a,e,t,i,s,o,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Mt,p=new WeakMap,v=new Set;let g;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(F,w){return E?new OffscreenCanvas(F,w):Ec("canvas")}function _(F,w,ee){let oe=1;const he=wt(F);if((he.width>ee||he.height>ee)&&(oe=ee/Math.max(he.width,he.height)),oe<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Me=Math.floor(oe*he.width),Ae=Math.floor(oe*he.height);g===void 0&&(g=M(Me,Ae));const pe=w?M(Me,Ae):g;return pe.width=Me,pe.height=Ae,pe.getContext("2d").drawImage(F,0,0,Me,Ae),rt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Me+"x"+Ae+")."),pe}else return"data"in F&&rt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),F;return F}function S(F){return F.generateMipmaps}function R(F){a.generateMipmap(F)}function I(F){return F.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?a.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function A(F,w,ee,oe,he,Me=!1){if(F!==null){if(a[F]!==void 0)return a[F];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ae;oe&&(Ae=e.get("EXT_texture_norm16"),Ae||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=w;if(w===a.RED&&(ee===a.FLOAT&&(pe=a.R32F),ee===a.HALF_FLOAT&&(pe=a.R16F),ee===a.UNSIGNED_BYTE&&(pe=a.R8),ee===a.UNSIGNED_SHORT&&Ae&&(pe=Ae.R16_EXT),ee===a.SHORT&&Ae&&(pe=Ae.R16_SNORM_EXT)),w===a.RED_INTEGER&&(ee===a.UNSIGNED_BYTE&&(pe=a.R8UI),ee===a.UNSIGNED_SHORT&&(pe=a.R16UI),ee===a.UNSIGNED_INT&&(pe=a.R32UI),ee===a.BYTE&&(pe=a.R8I),ee===a.SHORT&&(pe=a.R16I),ee===a.INT&&(pe=a.R32I)),w===a.RG&&(ee===a.FLOAT&&(pe=a.RG32F),ee===a.HALF_FLOAT&&(pe=a.RG16F),ee===a.UNSIGNED_BYTE&&(pe=a.RG8),ee===a.UNSIGNED_SHORT&&Ae&&(pe=Ae.RG16_EXT),ee===a.SHORT&&Ae&&(pe=Ae.RG16_SNORM_EXT)),w===a.RG_INTEGER&&(ee===a.UNSIGNED_BYTE&&(pe=a.RG8UI),ee===a.UNSIGNED_SHORT&&(pe=a.RG16UI),ee===a.UNSIGNED_INT&&(pe=a.RG32UI),ee===a.BYTE&&(pe=a.RG8I),ee===a.SHORT&&(pe=a.RG16I),ee===a.INT&&(pe=a.RG32I)),w===a.RGB_INTEGER&&(ee===a.UNSIGNED_BYTE&&(pe=a.RGB8UI),ee===a.UNSIGNED_SHORT&&(pe=a.RGB16UI),ee===a.UNSIGNED_INT&&(pe=a.RGB32UI),ee===a.BYTE&&(pe=a.RGB8I),ee===a.SHORT&&(pe=a.RGB16I),ee===a.INT&&(pe=a.RGB32I)),w===a.RGBA_INTEGER&&(ee===a.UNSIGNED_BYTE&&(pe=a.RGBA8UI),ee===a.UNSIGNED_SHORT&&(pe=a.RGBA16UI),ee===a.UNSIGNED_INT&&(pe=a.RGBA32UI),ee===a.BYTE&&(pe=a.RGBA8I),ee===a.SHORT&&(pe=a.RGBA16I),ee===a.INT&&(pe=a.RGBA32I)),w===a.RGB&&(ee===a.UNSIGNED_SHORT&&Ae&&(pe=Ae.RGB16_EXT),ee===a.SHORT&&Ae&&(pe=Ae.RGB16_SNORM_EXT),ee===a.UNSIGNED_INT_5_9_9_9_REV&&(pe=a.RGB9_E5),ee===a.UNSIGNED_INT_10F_11F_11F_REV&&(pe=a.R11F_G11F_B10F)),w===a.RGBA){const ge=Me?yc:vt.getTransfer(he);ee===a.FLOAT&&(pe=a.RGBA32F),ee===a.HALF_FLOAT&&(pe=a.RGBA16F),ee===a.UNSIGNED_BYTE&&(pe=ge===It?a.SRGB8_ALPHA8:a.RGBA8),ee===a.UNSIGNED_SHORT&&Ae&&(pe=Ae.RGBA16_EXT),ee===a.SHORT&&Ae&&(pe=Ae.RGBA16_SNORM_EXT),ee===a.UNSIGNED_SHORT_4_4_4_4&&(pe=a.RGBA4),ee===a.UNSIGNED_SHORT_5_5_5_1&&(pe=a.RGB5_A1)}return(pe===a.R16F||pe===a.R32F||pe===a.RG16F||pe===a.RG32F||pe===a.RGBA16F||pe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function b(F,w){let ee;return F?w===null||w===hr||w===dl?ee=a.DEPTH24_STENCIL8:w===lr?ee=a.DEPTH32F_STENCIL8:w===fl&&(ee=a.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===hr||w===dl?ee=a.DEPTH_COMPONENT24:w===lr?ee=a.DEPTH_COMPONENT32F:w===fl&&(ee=a.DEPTH_COMPONENT16),ee}function N(F,w){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==Cn&&F.minFilter!==kn?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function D(F){const w=F.target;w.removeEventListener("dispose",D),L(w),w.isVideoTexture&&p.delete(w),w.isHTMLTexture&&v.delete(w)}function T(F){const w=F.target;w.removeEventListener("dispose",T),B(w)}function L(F){const w=i.get(F);if(w.__webglInit===void 0)return;const ee=F.source,oe=y.get(ee);if(oe){const he=oe[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&O(F),Object.keys(oe).length===0&&y.delete(ee)}i.remove(F)}function O(F){const w=i.get(F);a.deleteTexture(w.__webglTexture);const ee=F.source,oe=y.get(ee);delete oe[w.__cacheKey],u.memory.textures--}function B(F){const w=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(w.__webglFramebuffer[oe]))for(let he=0;he<w.__webglFramebuffer[oe].length;he++)a.deleteFramebuffer(w.__webglFramebuffer[oe][he]);else a.deleteFramebuffer(w.__webglFramebuffer[oe]);w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer[oe])}else{if(Array.isArray(w.__webglFramebuffer))for(let oe=0;oe<w.__webglFramebuffer.length;oe++)a.deleteFramebuffer(w.__webglFramebuffer[oe]);else a.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&a.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let oe=0;oe<w.__webglColorRenderbuffer.length;oe++)w.__webglColorRenderbuffer[oe]&&a.deleteRenderbuffer(w.__webglColorRenderbuffer[oe]);w.__webglDepthRenderbuffer&&a.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ee=F.textures;for(let oe=0,he=ee.length;oe<he;oe++){const Me=i.get(ee[oe]);Me.__webglTexture&&(a.deleteTexture(Me.__webglTexture),u.memory.textures--),i.remove(ee[oe])}i.remove(F)}let W=0;function J(){W=0}function z(){return W}function Q(F){W=F}function ue(){const F=W;return F>=s.maxTextures&&rt("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,F}function K(F){const w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function $(F,w){const ee=i.get(F);if(F.isVideoTexture&&Y(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&ee.__version!==F.version){const oe=F.image;if(oe===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(ee,F,w);return}}else F.isExternalTexture&&(ee.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,ee.__webglTexture,a.TEXTURE0+w)}function j(F,w){const ee=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ee.__version!==F.version){Ee(ee,F,w);return}else F.isExternalTexture&&(ee.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,ee.__webglTexture,a.TEXTURE0+w)}function Z(F,w){const ee=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ee.__version!==F.version){Ee(ee,F,w);return}t.bindTexture(a.TEXTURE_3D,ee.__webglTexture,a.TEXTURE0+w)}function U(F,w){const ee=i.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&ee.__version!==F.version){Je(ee,F,w);return}t.bindTexture(a.TEXTURE_CUBE_MAP,ee.__webglTexture,a.TEXTURE0+w)}const ne={[xh]:a.REPEAT,[Ir]:a.CLAMP_TO_EDGE,[Sh]:a.MIRRORED_REPEAT},xe={[Cn]:a.NEAREST,[Hy]:a.NEAREST_MIPMAP_NEAREST,[Lu]:a.NEAREST_MIPMAP_LINEAR,[kn]:a.LINEAR,[Ad]:a.LINEAR_MIPMAP_NEAREST,[Ys]:a.LINEAR_MIPMAP_LINEAR},Le={[Yy]:a.NEVER,[Zy]:a.ALWAYS,[qy]:a.LESS,[Tp]:a.LEQUAL,[$y]:a.EQUAL,[wp]:a.GEQUAL,[Ky]:a.GREATER,[jy]:a.NOTEQUAL};function Ie(F,w){if(w.type===lr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===kn||w.magFilter===Ad||w.magFilter===Lu||w.magFilter===Ys||w.minFilter===kn||w.minFilter===Ad||w.minFilter===Lu||w.minFilter===Ys)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(F,a.TEXTURE_WRAP_S,ne[w.wrapS]),a.texParameteri(F,a.TEXTURE_WRAP_T,ne[w.wrapT]),(F===a.TEXTURE_3D||F===a.TEXTURE_2D_ARRAY)&&a.texParameteri(F,a.TEXTURE_WRAP_R,ne[w.wrapR]),a.texParameteri(F,a.TEXTURE_MAG_FILTER,xe[w.magFilter]),a.texParameteri(F,a.TEXTURE_MIN_FILTER,xe[w.minFilter]),w.compareFunction&&(a.texParameteri(F,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(F,a.TEXTURE_COMPARE_FUNC,Le[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Cn||w.minFilter!==Lu&&w.minFilter!==Ys||w.type===lr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");a.texParameterf(F,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ge(F,w){let ee=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",D));const oe=w.source;let he=y.get(oe);he===void 0&&(he={},y.set(oe,he));const Me=K(w);if(Me!==F.__cacheKey){he[Me]===void 0&&(he[Me]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),he[Me].usedTimes++;const Ae=he[F.__cacheKey];Ae!==void 0&&(he[F.__cacheKey].usedTimes--,Ae.usedTimes===0&&O(w)),F.__cacheKey=Me,F.__webglTexture=he[Me].texture}return ee}function le(F,w,ee){return Math.floor(Math.floor(F/ee)/w)}function de(F,w,ee,oe){const Me=F.updateRanges;if(Me.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,w.width,w.height,ee,oe,w.data);else{Me.sort(($e,Pe)=>$e.start-Pe.start);let Ae=0;for(let $e=1;$e<Me.length;$e++){const Pe=Me[Ae],we=Me[$e],Ke=Pe.start+Pe.count,et=le(we.start,w.width,4),it=le(Pe.start,w.width,4);we.start<=Ke+1&&et===it&&le(we.start+we.count-1,w.width,4)===et?Pe.count=Math.max(Pe.count,we.start+we.count-Pe.start):(++Ae,Me[Ae]=we)}Me.length=Ae+1;const pe=t.getParameter(a.UNPACK_ROW_LENGTH),ge=t.getParameter(a.UNPACK_SKIP_PIXELS),be=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,w.width);for(let $e=0,Pe=Me.length;$e<Pe;$e++){const we=Me[$e],Ke=Math.floor(we.start/4),et=Math.ceil(we.count/4),it=Ke%w.width,H=Math.floor(Ke/w.width),Re=et,me=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,it),t.pixelStorei(a.UNPACK_SKIP_ROWS,H),t.texSubImage2D(a.TEXTURE_2D,0,it,H,Re,me,ee,oe,w.data)}F.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,pe),t.pixelStorei(a.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(a.UNPACK_SKIP_ROWS,be)}}function Ee(F,w,ee){let oe=a.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(oe=a.TEXTURE_2D_ARRAY),w.isData3DTexture&&(oe=a.TEXTURE_3D);const he=Ge(F,w),Me=w.source;t.bindTexture(oe,F.__webglTexture,a.TEXTURE0+ee);const Ae=i.get(Me);if(Me.version!==Ae.__version||he===!0){if(t.activeTexture(a.TEXTURE0+ee),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const me=vt.getPrimaries(vt.workingColorSpace),Ce=w.colorSpace===fs?null:vt.getPrimaries(w.colorSpace),Oe=w.colorSpace===fs||me===Ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment);let ge=_(w.image,!1,s.maxTextureSize);ge=hn(w,ge);const be=o.convert(w.format,w.colorSpace),$e=o.convert(w.type);let Pe=A(w.internalFormat,be,$e,w.normalized,w.colorSpace,w.isVideoTexture);Ie(oe,w);let we;const Ke=w.mipmaps,et=w.isVideoTexture!==!0,it=Ae.__version===void 0||he===!0,H=Me.dataReady,Re=N(w,ge);if(w.isDepthTexture)Pe=b(w.format===qs,w.type),it&&(et?t.texStorage2D(a.TEXTURE_2D,1,Pe,ge.width,ge.height):t.texImage2D(a.TEXTURE_2D,0,Pe,ge.width,ge.height,0,be,$e,null));else if(w.isDataTexture)if(Ke.length>0){et&&it&&t.texStorage2D(a.TEXTURE_2D,Re,Pe,Ke[0].width,Ke[0].height);for(let me=0,Ce=Ke.length;me<Ce;me++)we=Ke[me],et?H&&t.texSubImage2D(a.TEXTURE_2D,me,0,0,we.width,we.height,be,$e,we.data):t.texImage2D(a.TEXTURE_2D,me,Pe,we.width,we.height,0,be,$e,we.data);w.generateMipmaps=!1}else et?(it&&t.texStorage2D(a.TEXTURE_2D,Re,Pe,ge.width,ge.height),H&&de(w,ge,be,$e)):t.texImage2D(a.TEXTURE_2D,0,Pe,ge.width,ge.height,0,be,$e,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){et&&it&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Re,Pe,Ke[0].width,Ke[0].height,ge.depth);for(let me=0,Ce=Ke.length;me<Ce;me++)if(we=Ke[me],w.format!==ji)if(be!==null)if(et){if(H)if(w.layerUpdates.size>0){const Oe=a0(we.width,we.height,w.format,w.type);for(const _e of w.layerUpdates){const Ze=we.data.subarray(_e*Oe/we.data.BYTES_PER_ELEMENT,(_e+1)*Oe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,me,0,0,_e,we.width,we.height,1,be,Ze)}}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,me,0,0,0,we.width,we.height,ge.depth,be,we.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,me,Pe,we.width,we.height,ge.depth,0,we.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?H&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,me,0,0,0,we.width,we.height,ge.depth,be,$e,we.data):t.texImage3D(a.TEXTURE_2D_ARRAY,me,Pe,we.width,we.height,ge.depth,0,be,$e,we.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{et&&it&&t.texStorage2D(a.TEXTURE_2D,Re,Pe,Ke[0].width,Ke[0].height);for(let me=0,Ce=Ke.length;me<Ce;me++)we=Ke[me],w.format!==ji?be!==null?et?H&&t.compressedTexSubImage2D(a.TEXTURE_2D,me,0,0,we.width,we.height,be,we.data):t.compressedTexImage2D(a.TEXTURE_2D,me,Pe,we.width,we.height,0,we.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?H&&t.texSubImage2D(a.TEXTURE_2D,me,0,0,we.width,we.height,be,$e,we.data):t.texImage2D(a.TEXTURE_2D,me,Pe,we.width,we.height,0,be,$e,we.data)}else if(w.isDataArrayTexture)if(et){if(it&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Re,Pe,ge.width,ge.height,ge.depth),H)if(w.layerUpdates.size>0){const me=a0(ge.width,ge.height,w.format,w.type);for(const Ce of w.layerUpdates){const Oe=ge.data.subarray(Ce*me/ge.data.BYTES_PER_ELEMENT,(Ce+1)*me/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ce,ge.width,ge.height,1,be,$e,Oe)}w.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,be,$e,ge.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Pe,ge.width,ge.height,ge.depth,0,be,$e,ge.data);else if(w.isData3DTexture)et?(it&&t.texStorage3D(a.TEXTURE_3D,Re,Pe,ge.width,ge.height,ge.depth),H&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,be,$e,ge.data)):t.texImage3D(a.TEXTURE_3D,0,Pe,ge.width,ge.height,ge.depth,0,be,$e,ge.data);else if(w.isFramebufferTexture){if(it)if(et)t.texStorage2D(a.TEXTURE_2D,Re,Pe,ge.width,ge.height);else{let me=ge.width,Ce=ge.height;for(let Oe=0;Oe<Re;Oe++)t.texImage2D(a.TEXTURE_2D,Oe,Pe,me,Ce,0,be,$e,null),me>>=1,Ce>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in a){const me=a.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ge.parentNode!==me){me.appendChild(ge),v.add(w),me.onpaint=Ce=>{const Oe=Ce.changedElements;for(const _e of v)Oe.includes(_e.image)&&(_e.needsUpdate=!0)},me.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,ge);else{const Oe=a.RGBA,_e=a.RGBA,Ze=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Oe,_e,Ze,ge)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(et&&it){const me=wt(Ke[0]);t.texStorage2D(a.TEXTURE_2D,Re,Pe,me.width,me.height)}for(let me=0,Ce=Ke.length;me<Ce;me++)we=Ke[me],et?H&&t.texSubImage2D(a.TEXTURE_2D,me,0,0,be,$e,we):t.texImage2D(a.TEXTURE_2D,me,Pe,be,$e,we);w.generateMipmaps=!1}else if(et){if(it){const me=wt(ge);t.texStorage2D(a.TEXTURE_2D,Re,Pe,me.width,me.height)}H&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,be,$e,ge)}else t.texImage2D(a.TEXTURE_2D,0,Pe,be,$e,ge);S(w)&&R(oe),Ae.__version=Me.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function Je(F,w,ee){if(w.image.length!==6)return;const oe=Ge(F,w),he=w.source;t.bindTexture(a.TEXTURE_CUBE_MAP,F.__webglTexture,a.TEXTURE0+ee);const Me=i.get(he);if(he.version!==Me.__version||oe===!0){t.activeTexture(a.TEXTURE0+ee);const Ae=vt.getPrimaries(vt.workingColorSpace),pe=w.colorSpace===fs?null:vt.getPrimaries(w.colorSpace),ge=w.colorSpace===fs||Ae===pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const be=w.isCompressedTexture||w.image[0].isCompressedTexture,$e=w.image[0]&&w.image[0].isDataTexture,Pe=[];for(let _e=0;_e<6;_e++)!be&&!$e?Pe[_e]=_(w.image[_e],!0,s.maxCubemapSize):Pe[_e]=$e?w.image[_e].image:w.image[_e],Pe[_e]=hn(w,Pe[_e]);const we=Pe[0],Ke=o.convert(w.format,w.colorSpace),et=o.convert(w.type),it=A(w.internalFormat,Ke,et,w.normalized,w.colorSpace),H=w.isVideoTexture!==!0,Re=Me.__version===void 0||oe===!0,me=he.dataReady;let Ce=N(w,we);Ie(a.TEXTURE_CUBE_MAP,w);let Oe;if(be){H&&Re&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Ce,it,we.width,we.height);for(let _e=0;_e<6;_e++){Oe=Pe[_e].mipmaps;for(let Ze=0;Ze<Oe.length;Ze++){const Ye=Oe[Ze];w.format!==ji?Ke!==null?H?me&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ze,0,0,Ye.width,Ye.height,Ke,Ye.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ze,it,Ye.width,Ye.height,0,Ye.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?me&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ze,0,0,Ye.width,Ye.height,Ke,et,Ye.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ze,it,Ye.width,Ye.height,0,Ke,et,Ye.data)}}}else{if(Oe=w.mipmaps,H&&Re){Oe.length>0&&Ce++;const _e=wt(Pe[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Ce,it,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if($e){H?me&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Pe[_e].width,Pe[_e].height,Ke,et,Pe[_e].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,it,Pe[_e].width,Pe[_e].height,0,Ke,et,Pe[_e].data);for(let Ze=0;Ze<Oe.length;Ze++){const At=Oe[Ze].image[_e].image;H?me&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ze+1,0,0,At.width,At.height,Ke,et,At.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ze+1,it,At.width,At.height,0,Ke,et,At.data)}}else{H?me&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ke,et,Pe[_e]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,it,Ke,et,Pe[_e]);for(let Ze=0;Ze<Oe.length;Ze++){const Ye=Oe[Ze];H?me&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ze+1,0,0,Ke,et,Ye.image[_e]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ze+1,it,Ke,et,Ye.image[_e])}}}S(w)&&R(a.TEXTURE_CUBE_MAP),Me.__version=he.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function ke(F,w,ee,oe,he,Me){const Ae=o.convert(ee.format,ee.colorSpace),pe=o.convert(ee.type),ge=A(ee.internalFormat,Ae,pe,ee.normalized,ee.colorSpace),be=i.get(w),$e=i.get(ee);if($e.__renderTarget=w,!be.__hasExternalTextures){const Pe=Math.max(1,w.width>>Me),we=Math.max(1,w.height>>Me);he===a.TEXTURE_3D||he===a.TEXTURE_2D_ARRAY?t.texImage3D(he,Me,ge,Pe,we,w.depth,0,Ae,pe,null):t.texImage2D(he,Me,ge,Pe,we,0,Ae,pe,null)}t.bindFramebuffer(a.FRAMEBUFFER,F),Gt(w)?c.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,oe,he,$e.__webglTexture,0,Lt(w)):(he===a.TEXTURE_2D||he>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,oe,he,$e.__webglTexture,Me),t.bindFramebuffer(a.FRAMEBUFFER,null)}function ut(F,w,ee){if(a.bindRenderbuffer(a.RENDERBUFFER,F),w.depthBuffer){const oe=w.depthTexture,he=oe&&oe.isDepthTexture?oe.type:null,Me=b(w.stencilBuffer,he),Ae=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Gt(w)?c.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Lt(w),Me,w.width,w.height):ee?a.renderbufferStorageMultisample(a.RENDERBUFFER,Lt(w),Me,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,Me,w.width,w.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ae,a.RENDERBUFFER,F)}else{const oe=w.textures;for(let he=0;he<oe.length;he++){const Me=oe[he],Ae=o.convert(Me.format,Me.colorSpace),pe=o.convert(Me.type),ge=A(Me.internalFormat,Ae,pe,Me.normalized,Me.colorSpace);Gt(w)?c.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Lt(w),ge,w.width,w.height):ee?a.renderbufferStorageMultisample(a.RENDERBUFFER,Lt(w),ge,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,ge,w.width,w.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ht(F,w,ee){const oe=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=i.get(w.depthTexture);if(he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),oe){if(he.__webglInit===void 0&&(he.__webglInit=!0,w.depthTexture.addEventListener("dispose",D)),he.__webglTexture===void 0){he.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,he.__webglTexture),Ie(a.TEXTURE_CUBE_MAP,w.depthTexture);const be=o.convert(w.depthTexture.format),$e=o.convert(w.depthTexture.type);let Pe;w.depthTexture.format===Or?Pe=a.DEPTH_COMPONENT24:w.depthTexture.format===qs&&(Pe=a.DEPTH24_STENCIL8);for(let we=0;we<6;we++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Pe,w.width,w.height,0,be,$e,null)}}else $(w.depthTexture,0);const Me=he.__webglTexture,Ae=Lt(w),pe=oe?a.TEXTURE_CUBE_MAP_POSITIVE_X+ee:a.TEXTURE_2D,ge=w.depthTexture.format===qs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(w.depthTexture.format===Or)Gt(w)?c.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ge,pe,Me,0,Ae):a.framebufferTexture2D(a.FRAMEBUFFER,ge,pe,Me,0);else if(w.depthTexture.format===qs)Gt(w)?c.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ge,pe,Me,0,Ae):a.framebufferTexture2D(a.FRAMEBUFFER,ge,pe,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ct(F){const w=i.get(F),ee=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){const oe=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),oe){const he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,oe.removeEventListener("dispose",he)};oe.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=oe}if(F.depthTexture&&!w.__autoAllocateDepthBuffer)if(ee)for(let oe=0;oe<6;oe++)Ht(w.__webglFramebuffer[oe],F,oe);else{const oe=F.texture.mipmaps;oe&&oe.length>0?Ht(w.__webglFramebuffer[0],F,0):Ht(w.__webglFramebuffer,F,0)}else if(ee){w.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[oe]),w.__webglDepthbuffer[oe]===void 0)w.__webglDepthbuffer[oe]=a.createRenderbuffer(),ut(w.__webglDepthbuffer[oe],F,!1);else{const he=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer[oe];a.bindRenderbuffer(a.RENDERBUFFER,Me),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,Me)}}else{const oe=F.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=a.createRenderbuffer(),ut(w.__webglDepthbuffer,F,!1);else{const he=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Me),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,Me)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function mt(F,w,ee){const oe=i.get(F);w!==void 0&&ke(oe.__webglFramebuffer,F,F.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ee!==void 0&&ct(F)}function Nt(F){const w=F.texture,ee=i.get(F),oe=i.get(w);F.addEventListener("dispose",T);const he=F.textures,Me=F.isWebGLCubeRenderTarget===!0,Ae=he.length>1;if(Ae||(oe.__webglTexture===void 0&&(oe.__webglTexture=a.createTexture()),oe.__version=w.version,u.memory.textures++),Me){ee.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer[pe]=[];for(let ge=0;ge<w.mipmaps.length;ge++)ee.__webglFramebuffer[pe][ge]=a.createFramebuffer()}else ee.__webglFramebuffer[pe]=a.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)ee.__webglFramebuffer[pe]=a.createFramebuffer()}else ee.__webglFramebuffer=a.createFramebuffer();if(Ae)for(let pe=0,ge=he.length;pe<ge;pe++){const be=i.get(he[pe]);be.__webglTexture===void 0&&(be.__webglTexture=a.createTexture(),u.memory.textures++)}if(F.samples>0&&Gt(F)===!1){ee.__webglMultisampledFramebuffer=a.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const ge=he[pe];ee.__webglColorRenderbuffer[pe]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ee.__webglColorRenderbuffer[pe]);const be=o.convert(ge.format,ge.colorSpace),$e=o.convert(ge.type),Pe=A(ge.internalFormat,be,$e,ge.normalized,ge.colorSpace,F.isXRRenderTarget===!0),we=Lt(F);a.renderbufferStorageMultisample(a.RENDERBUFFER,we,Pe,F.width,F.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.RENDERBUFFER,ee.__webglColorRenderbuffer[pe])}a.bindRenderbuffer(a.RENDERBUFFER,null),F.depthBuffer&&(ee.__webglDepthRenderbuffer=a.createRenderbuffer(),ut(ee.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Me){t.bindTexture(a.TEXTURE_CUBE_MAP,oe.__webglTexture),Ie(a.TEXTURE_CUBE_MAP,w);for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ke(ee.__webglFramebuffer[pe][ge],F,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else ke(ee.__webglFramebuffer[pe],F,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);S(w)&&R(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let pe=0,ge=he.length;pe<ge;pe++){const be=he[pe],$e=i.get(be);let Pe=a.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Pe=F.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Pe,$e.__webglTexture),Ie(Pe,be),ke(ee.__webglFramebuffer,F,be,a.COLOR_ATTACHMENT0+pe,Pe,0),S(be)&&R(Pe)}t.unbindTexture()}else{let pe=a.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(pe=F.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(pe,oe.__webglTexture),Ie(pe,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ke(ee.__webglFramebuffer[ge],F,w,a.COLOR_ATTACHMENT0,pe,ge);else ke(ee.__webglFramebuffer,F,w,a.COLOR_ATTACHMENT0,pe,0);S(w)&&R(pe),t.unbindTexture()}F.depthBuffer&&ct(F)}function ft(F){const w=F.textures;for(let ee=0,oe=w.length;ee<oe;ee++){const he=w[ee];if(S(he)){const Me=I(F),Ae=i.get(he).__webglTexture;t.bindTexture(Me,Ae),R(Me),t.unbindTexture()}}}const Ut=[],Jt=[];function un(F){if(F.samples>0){if(Gt(F)===!1){const w=F.textures,ee=F.width,oe=F.height;let he=a.COLOR_BUFFER_BIT;const Me=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ae=i.get(F),pe=w.length>1;if(pe)for(let be=0;be<w.length;be++)t.bindFramebuffer(a.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+be,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Ae.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+be,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const ge=F.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let be=0;be<w.length;be++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(he|=a.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(he|=a.STENCIL_BUFFER_BIT)),pe){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ae.__webglColorRenderbuffer[be]);const $e=i.get(w[be]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,$e,0)}a.blitFramebuffer(0,0,ee,oe,0,0,ee,oe,he,a.NEAREST),d===!0&&(Ut.length=0,Jt.length=0,Ut.push(a.COLOR_ATTACHMENT0+be),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(Ut.push(Me),Jt.push(Me),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Jt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),pe)for(let be=0;be<w.length;be++){t.bindFramebuffer(a.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+be,a.RENDERBUFFER,Ae.__webglColorRenderbuffer[be]);const $e=i.get(w[be]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Ae.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+be,a.TEXTURE_2D,$e,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&d){const w=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[w])}}}function Lt(F){return Math.min(s.maxSamples,F.samples)}function Gt(F){const w=i.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Y(F){const w=u.render.frame;p.get(F)!==w&&(p.set(F,w),F.update())}function hn(F,w){const ee=F.colorSpace,oe=F.format,he=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ee!==Sc&&ee!==fs&&(vt.getTransfer(ee)===It?(oe!==ji||he!==Di)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):bt("WebGLTextures: Unsupported texture color space:",ee)),w}function wt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=ue,this.resetTextureUnits=J,this.getTextureUnits=z,this.setTextureUnits=Q,this.setTexture2D=$,this.setTexture2DArray=j,this.setTexture3D=Z,this.setTextureCube=U,this.rebindTextures=mt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function RA(a,e){function t(i,s=fs){let o;const u=vt.getTransfer(s);if(i===Di)return a.UNSIGNED_BYTE;if(i===xp)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Sp)return a.UNSIGNED_SHORT_5_5_5_1;if(i===ov)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===lv)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===sv)return a.BYTE;if(i===av)return a.SHORT;if(i===fl)return a.UNSIGNED_SHORT;if(i===vp)return a.INT;if(i===hr)return a.UNSIGNED_INT;if(i===lr)return a.FLOAT;if(i===pr)return a.HALF_FLOAT;if(i===uv)return a.ALPHA;if(i===cv)return a.RGB;if(i===ji)return a.RGBA;if(i===Or)return a.DEPTH_COMPONENT;if(i===qs)return a.DEPTH_STENCIL;if(i===fv)return a.RED;if(i===yp)return a.RED_INTEGER;if(i===ta)return a.RG;if(i===Mp)return a.RG_INTEGER;if(i===Ep)return a.RGBA_INTEGER;if(i===uc||i===cc||i===fc||i===dc)if(u===It)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===uc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===uc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yh||i===Mh||i===Eh||i===Th)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===yh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Eh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Th)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wh||i===Ah||i===Rh||i===Ch||i===bh||i===vc||i===Ph)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===wh||i===Ah)return u===It?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Rh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ch)return o.COMPRESSED_R11_EAC;if(i===bh)return o.COMPRESSED_SIGNED_R11_EAC;if(i===vc)return o.COMPRESSED_RG11_EAC;if(i===Ph)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Lh||i===Nh||i===Dh||i===Ih||i===Uh||i===Fh||i===Oh||i===kh||i===Bh||i===zh||i===Vh||i===Hh||i===Gh||i===Wh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Lh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ih)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xh||i===Yh||i===qh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Xh)return u===It?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$h||i===Kh||i===xc||i===jh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===$h)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Kh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dl?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const CA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Mv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new mr({vertexShader:CA,fragmentShader:bA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kr(new Uc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LA extends ia{constructor(e,t){super();const i=this;let s=null,o=1,u=null,c="local-floor",d=1,h=null,p=null,v=null,g=null,y=null,E=null;const M=typeof XRWebGLBinding<"u",_=new PA,S={},R=t.getContextAttributes();let I=null,A=null;const b=[],N=[],D=new Mt;let T=null,L=null;const O=new Ni;O.viewport=new nn;const B=new Ni;B.viewport=new nn;const W=[O,B],J=new kM;let z=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let de=b[le];return de===void 0&&(de=new Id,b[le]=de),de.getTargetRaySpace()},this.getControllerGrip=function(le){let de=b[le];return de===void 0&&(de=new Id,b[le]=de),de.getGripSpace()},this.getHand=function(le){let de=b[le];return de===void 0&&(de=new Id,b[le]=de),de.getHandSpace()};function ue(le){const de=N.indexOf(le.inputSource);if(de===-1)return;const Ee=b[de];Ee!==void 0&&(Ee.update(le.inputSource,le.frame,h||u),Ee.dispatchEvent({type:le.type,data:le.inputSource}))}function K(){s.removeEventListener("select",ue),s.removeEventListener("selectstart",ue),s.removeEventListener("selectend",ue),s.removeEventListener("squeeze",ue),s.removeEventListener("squeezestart",ue),s.removeEventListener("squeezeend",ue),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",$);for(let le=0;le<b.length;le++){const de=N[le];de!==null&&(N[le]=null,b[le].disconnect(de))}z=null,Q=null,_.reset();for(const le in S)delete S[le];if(e.setRenderTarget(I),y=null,g=null,v=null,s=null,A=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(D.width,D.height,!1),L!==null){const le=L.camera;le.fov=L.fov,le.zoom=L.zoom,le.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){o=le,i.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){c=le,i.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(le){h=le},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&M&&(v=new XRWebGLBinding(s,t)),v},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(I=e.getRenderTarget(),s.addEventListener("select",ue),s.addEventListener("selectstart",ue),s.addEventListener("selectend",ue),s.addEventListener("squeeze",ue),s.addEventListener("squeezestart",ue),s.addEventListener("squeezeend",ue),s.addEventListener("end",K),s.addEventListener("inputsourceschange",$),R.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(D),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Je=null,ke=null;R.depth&&(ke=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=R.stencil?qs:Or,Je=R.stencil?dl:hr);const ut={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:o};v=this.getBinding(),g=v.createProjectionLayer(ut),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),A=new Zi(g.textureWidth,g.textureHeight,{format:ji,type:Di,depthTexture:new hl(g.textureWidth,g.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Ee={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),A=new Zi(y.framebufferWidth,y.framebufferHeight,{format:ji,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await s.requestReferenceSpace(c),Ge.setContext(s),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(le){for(let de=0;de<le.removed.length;de++){const Ee=le.removed[de],Je=N.indexOf(Ee);Je>=0&&(N[Je]=null,b[Je].disconnect(Ee))}for(let de=0;de<le.added.length;de++){const Ee=le.added[de];let Je=N.indexOf(Ee);if(Je===-1){for(let ut=0;ut<b.length;ut++)if(ut>=N.length){N.push(Ee),Je=ut;break}else if(N[ut]===null){N[ut]=Ee,Je=ut;break}if(Je===-1)break}const ke=b[Je];ke&&ke.connect(Ee)}}const j=new ie,Z=new ie;function U(le,de,Ee){j.setFromMatrixPosition(de.matrixWorld),Z.setFromMatrixPosition(Ee.matrixWorld);const Je=j.distanceTo(Z),ke=de.projectionMatrix.elements,ut=Ee.projectionMatrix.elements,Ht=ke[14]/(ke[10]-1),ct=ke[14]/(ke[10]+1),mt=(ke[9]+1)/ke[5],Nt=(ke[9]-1)/ke[5],ft=(ke[8]-1)/ke[0],Ut=(ut[8]+1)/ut[0],Jt=Ht*ft,un=Ht*Ut,Lt=Je/(-ft+Ut),Gt=Lt*-ft;if(de.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Gt),le.translateZ(Lt),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),ke[10]===-1)le.projectionMatrix.copy(de.projectionMatrix),le.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Y=Ht+Lt,hn=ct+Lt,wt=Jt-Gt,F=un+(Je-Gt),w=mt*ct/hn*Y,ee=Nt*ct/hn*Y;le.projectionMatrix.makePerspective(wt,F,w,ee,Y,hn),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function ne(le,de){de===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(de.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let de=le.near,Ee=le.far;_.texture!==null&&(_.depthNear>0&&(de=_.depthNear),_.depthFar>0&&(Ee=_.depthFar)),J.near=B.near=O.near=de,J.far=B.far=O.far=Ee,(z!==J.near||Q!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),z=J.near,Q=J.far),J.layers.mask=le.layers.mask|6,O.layers.mask=J.layers.mask&-5,B.layers.mask=J.layers.mask&-3;const Je=le.parent,ke=J.cameras;ne(J,Je);for(let ut=0;ut<ke.length;ut++)ne(ke[ut],Je);ke.length===2?U(J,O,B):J.projectionMatrix.copy(O.projectionMatrix),L===null&&le.isPerspectiveCamera&&(L={camera:le,fov:le.fov,zoom:le.zoom}),xe(le,J,Je)};function xe(le,de,Ee){Ee===null?le.matrix.copy(de.matrixWorld):(le.matrix.copy(Ee.matrixWorld),le.matrix.invert(),le.matrix.multiply(de.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(de.projectionMatrix),le.projectionMatrixInverse.copy(de.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Zh*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&y===null))return d},this.setFoveation=function(le){d=le,g!==null&&(g.fixedFoveation=le),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=le)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(J)},this.getCameraTexture=function(le){return S[le]};let Le=null;function Ie(le,de){if(p=de.getViewerPose(h||u),E=de,p!==null){const Ee=p.views;y!==null&&(e.setRenderTargetFramebuffer(A,y.framebuffer),e.setRenderTarget(A));let Je=!1;Ee.length!==J.cameras.length&&(J.cameras.length=0,Je=!0);for(let ct=0;ct<Ee.length;ct++){const mt=Ee[ct];let Nt=null;if(y!==null)Nt=y.getViewport(mt);else{const Ut=v.getViewSubImage(g,mt);Nt=Ut.viewport,ct===0&&(e.setRenderTargetTextures(A,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(A))}let ft=W[ct];ft===void 0&&(ft=new Ni,ft.layers.enable(ct),ft.viewport=new nn,W[ct]=ft),ft.matrix.fromArray(mt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(mt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),ct===0&&(J.matrix.copy(ft.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Je===!0&&J.cameras.push(ft)}const ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){v=i.getBinding();const ct=v.getDepthInformation(Ee[0]);ct&&ct.isValid&&ct.texture&&_.init(ct,s.renderState)}if(ke&&ke.includes("camera-access")&&M){e.state.unbindTexture(),v=i.getBinding();for(let ct=0;ct<Ee.length;ct++){const mt=Ee[ct].camera;if(mt){let Nt=S[mt];Nt||(Nt=new Mv,S[mt]=Nt);const ft=v.getCameraImage(mt);Nt.sourceTexture=ft}}}}for(let Ee=0;Ee<b.length;Ee++){const Je=N[Ee],ke=b[Ee];Je!==null&&ke!==void 0&&ke.update(Je,de,h||u)}Le&&Le(le,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),E=null}const Ge=new Av;Ge.setAnimationLoop(Ie),this.setAnimationLoop=function(le){Le=le},this.dispose=function(){}}}const NA=new sn,Dv=new ot;Dv.set(-1,0,0,0,1,0,0,0,1);function DA(a,e){function t(_,S){_.matrixAutoUpdate===!0&&_.updateMatrix(),S.value.copy(_.matrix)}function i(_,S){S.color.getRGB(_.fogColor.value,Ev(a)),S.isFog?(_.fogNear.value=S.near,_.fogFar.value=S.far):S.isFogExp2&&(_.fogDensity.value=S.density)}function s(_,S,R,I,A){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(_,S):S.isMeshLambertMaterial?(o(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(_,S),v(_,S)):S.isMeshPhongMaterial?(o(_,S),p(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(_,S),g(_,S),S.isMeshPhysicalMaterial&&y(_,S,A)):S.isMeshMatcapMaterial?(o(_,S),E(_,S)):S.isMeshDepthMaterial?o(_,S):S.isMeshDistanceMaterial?(o(_,S),M(_,S)):S.isMeshNormalMaterial?o(_,S):S.isLineBasicMaterial?(u(_,S),S.isLineDashedMaterial&&c(_,S)):S.isPointsMaterial?d(_,S,R,I):S.isSpriteMaterial?h(_,S):S.isShadowMaterial?(_.color.value.copy(S.color),_.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(_,S){_.opacity.value=S.opacity,S.color&&_.diffuse.value.copy(S.color),S.emissive&&_.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.bumpMap&&(_.bumpMap.value=S.bumpMap,t(S.bumpMap,_.bumpMapTransform),_.bumpScale.value=S.bumpScale,S.side===ti&&(_.bumpScale.value*=-1)),S.normalMap&&(_.normalMap.value=S.normalMap,t(S.normalMap,_.normalMapTransform),_.normalScale.value.copy(S.normalScale),S.side===ti&&_.normalScale.value.negate()),S.displacementMap&&(_.displacementMap.value=S.displacementMap,t(S.displacementMap,_.displacementMapTransform),_.displacementScale.value=S.displacementScale,_.displacementBias.value=S.displacementBias),S.emissiveMap&&(_.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,_.emissiveMapTransform)),S.specularMap&&(_.specularMap.value=S.specularMap,t(S.specularMap,_.specularMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest);const R=e.get(S),I=R.envMap,A=R.envMapRotation;I&&(_.envMap.value=I,_.envMapRotation.value.setFromMatrix4(NA.makeRotationFromEuler(A)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Dv),_.reflectivity.value=S.reflectivity,_.ior.value=S.ior,_.refractionRatio.value=S.refractionRatio),S.lightMap&&(_.lightMap.value=S.lightMap,_.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,_.lightMapTransform)),S.aoMap&&(_.aoMap.value=S.aoMap,_.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,_.aoMapTransform))}function u(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform))}function c(_,S){_.dashSize.value=S.dashSize,_.totalSize.value=S.dashSize+S.gapSize,_.scale.value=S.scale}function d(_,S,R,I){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.size.value=S.size*R,_.scale.value=I*.5,S.map&&(_.map.value=S.map,t(S.map,_.uvTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function h(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.rotation.value=S.rotation,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function p(_,S){_.specular.value.copy(S.specular),_.shininess.value=Math.max(S.shininess,1e-4)}function v(_,S){S.gradientMap&&(_.gradientMap.value=S.gradientMap)}function g(_,S){_.metalness.value=S.metalness,S.metalnessMap&&(_.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,_.metalnessMapTransform)),_.roughness.value=S.roughness,S.roughnessMap&&(_.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,_.roughnessMapTransform)),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)}function y(_,S,R){_.ior.value=S.ior,S.sheen>0&&(_.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),_.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(_.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,_.sheenColorMapTransform)),S.sheenRoughnessMap&&(_.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,_.sheenRoughnessMapTransform))),S.clearcoat>0&&(_.clearcoat.value=S.clearcoat,_.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(_.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,_.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(_.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ti&&_.clearcoatNormalScale.value.negate())),S.dispersion>0&&(_.dispersion.value=S.dispersion),S.retroreflectivity>0&&(_.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(_.iridescence.value=S.iridescence,_.iridescenceIOR.value=S.iridescenceIOR,_.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(_.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,_.iridescenceMapTransform)),S.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),S.transmission>0&&(_.transmission.value=S.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(_.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,_.transmissionMapTransform)),_.thickness.value=S.thickness,S.thicknessMap&&(_.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=S.attenuationDistance,_.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(_.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(_.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=S.specularIntensity,_.specularColor.value.copy(S.specularColor),S.specularColorMap&&(_.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,_.specularColorMapTransform)),S.specularIntensityMap&&(_.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,S){S.matcap&&(_.matcap.value=S.matcap)}function M(_,S){const R=e.get(S).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function IA(a,e,t,i){let s={},o={},u=[];const c=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function d(A,b){const N=b.program;i.uniformBlockBinding(A,N)}function h(A,b){let N=s[A.id];N===void 0&&(_(A),N=p(A),s[A.id]=N,A.addEventListener("dispose",R));const D=b.program;i.updateUBOMapping(A,D);const T=e.render.frame;o[A.id]!==T&&(g(A),o[A.id]=T)}function p(A){const b=v();A.__bindingPointIndex=b;const N=a.createBuffer(),D=A.__size,T=A.usage;return a.bindBuffer(a.UNIFORM_BUFFER,N),a.bufferData(a.UNIFORM_BUFFER,D,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,b,N),N}function v(){for(let A=0;A<c;A++)if(u.indexOf(A)===-1)return u.push(A),A;return bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const b=s[A.id],N=A.uniforms,D=A.__cache;a.bindBuffer(a.UNIFORM_BUFFER,b);for(let T=0,L=N.length;T<L;T++){const O=N[T];if(Array.isArray(O))for(let B=0,W=O.length;B<W;B++)y(O[B],T,B,D);else y(O,T,0,D)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(A,b,N,D){if(M(A,b,N,D)===!0){const T=A.__offset,L=A.value;if(Array.isArray(L)){let O=0;for(let B=0;B<L.length;B++){const W=L[B],J=S(W);E(W,A.__data,O),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(O+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(L,A.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,A.__data)}}function E(A,b,N){typeof A=="number"||typeof A=="boolean"?b[0]=A:A.isMatrix3?(b[0]=A.elements[0],b[1]=A.elements[1],b[2]=A.elements[2],b[3]=0,b[4]=A.elements[3],b[5]=A.elements[4],b[6]=A.elements[5],b[7]=0,b[8]=A.elements[6],b[9]=A.elements[7],b[10]=A.elements[8],b[11]=0):ArrayBuffer.isView(A)?b.set(new A.constructor(A.buffer,A.byteOffset,b.length)):A.toArray(b,N)}function M(A,b,N,D){const T=A.value,L=b+"_"+N;if(D[L]===void 0)return typeof T=="number"||typeof T=="boolean"?D[L]=T:ArrayBuffer.isView(T)?D[L]=T.slice():D[L]=T.clone(),!0;{const O=D[L];if(typeof T=="number"||typeof T=="boolean"){if(O!==T)return D[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(O.equals(T)===!1)return O.copy(T),!0}}return!1}function _(A){const b=A.uniforms;let N=0;const D=16;for(let L=0,O=b.length;L<O;L++){const B=Array.isArray(b[L])?b[L]:[b[L]];for(let W=0,J=B.length;W<J;W++){const z=B[W],Q=Array.isArray(z.value)?z.value:[z.value];for(let ue=0,K=Q.length;ue<K;ue++){const $=Q[ue],j=S($),Z=N%D,U=Z%j.boundary,ne=Z+U;N+=U,ne!==0&&D-ne<j.storage&&(N+=D-ne),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=N,N+=j.storage}}}const T=N%D;return T>0&&(N+=D-T),A.__size=N,A.__cache={},this}function S(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(b.boundary=16,b.storage=A.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",A),b}function R(A){const b=A.target;b.removeEventListener("dispose",R);const N=u.indexOf(b.__bindingPointIndex);u.splice(N,1),a.deleteBuffer(s[b.id]),delete s[b.id],delete o[b.id]}function I(){for(const A in s)a.deleteBuffer(s[A]);u=[],s={},o={}}return{bind:d,update:h,dispose:I}}const UA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ir=null;function FA(){return ir===null&&(ir=new wM(UA,16,16,ta,pr),ir.name="DFG_LUT",ir.minFilter=kn,ir.magFilter=kn,ir.wrapS=Ir,ir.wrapT=Ir,ir.generateMipmaps=!1,ir.needsUpdate=!0),ir}class OA{constructor(e={}){const{canvas:t=eM(),context:i=null,depth:s=!0,stencil:o=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Di}=e;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=u;const M=y,_=new Set([Ep,Mp,yp]),S=new Set([Di,hr,fl,dl,xp,Sp]),R=new Uint32Array(4),I=new Int32Array(4),A=new ie;let b=null,N=null;const D=[],T=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let B=!1,W=null,J=null,z=null,Q=null;this._outputColorSpace=Li;let ue=0,K=0,$=null,j=-1,Z=null;const U=new nn,ne=new nn;let xe=null;const Le=new Tt(0);let Ie=0,Ge=t.width,le=t.height,de=1,Ee=null,Je=null;const ke=new nn(0,0,Ge,le),ut=new nn(0,0,Ge,le);let Ht=!1;const ct=new xv;let mt=!1,Nt=!1;const ft=new sn,Ut=new ie,Jt=new nn,un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function Gt(){return $===null?de:1}let Y=i;function hn(P,G){return t.getContext(P,G)}let wt,F,w,ee,oe,he,Me,Ae,pe,ge,be,$e,Pe,we,Ke,et,it,H,Re,me,Ce,Oe,_e;try{const P={alpha:!0,depth:s,stencil:o,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_p}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",wn,!1),Y===null){const G="webgl2";if(Y=hn(G,P),Y===null)throw hn(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(P){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",wn,!1),bt("WebGLRenderer: "+P.message),P}function Ze(){wt=new F1(Y),wt.init(),Ce=new RA(Y,wt),F=new A1(Y,wt,e,Ce),w=new wA(Y,wt),F.reversedDepthBuffer&&g&&w.buffers.depth.setReversed(!0),J=Y.createFramebuffer(),z=Y.createFramebuffer(),Q=Y.createFramebuffer(),ee=new B1(Y),oe=new fA,he=new AA(Y,wt,w,oe,F,Ce,ee),Me=new U1(O),Ae=new VM(Y),Oe=new T1(Y,Ae),pe=new O1(Y,Ae,ee,Oe),ge=new V1(Y,pe,Ae,Oe,ee),H=new z1(Y,F,he),Ke=new R1(oe),be=new cA(O,Me,wt,F,Oe,Ke),$e=new DA(O,oe),Pe=new hA,we=new xA(wt),it=new E1(O,Me,w,ge,E,d),et=new TA(O,ge,F),_e=new IA(Y,ee,F,w),Re=new w1(Y,wt,ee),me=new k1(Y,wt,ee),ee.programs=be.programs,O.capabilities=F,O.extensions=wt,O.properties=oe,O.renderLists=Pe,O.shadowMap=et,O.state=w,O.info=ee}M!==Di&&(L=new G1(M,t.width,t.height,c,s,o));const Ye=new LA(O,Y);this.xr=Ye,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const P=wt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=wt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(P){P!==void 0&&(de=P,this.setSize(Ge,le,!1))},this.getSize=function(P){return P.set(Ge,le)},this.setSize=function(P,G,ce=!0){if(Ye.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=P,le=G,t.width=Math.floor(P*de),t.height=Math.floor(G*de),ce===!0&&(t.style.width=P+"px",t.style.height=G+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(Ge*de,le*de).floor()},this.setDrawingBufferSize=function(P,G,ce){Ge=P,le=G,de=ce,t.width=Math.floor(P*ce),t.height=Math.floor(G*ce),this.setViewport(0,0,P,G)},this.setEffects=function(P){if(M===Di){bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let G=0;G<P.length;G++)if(P[G].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(U)},this.getViewport=function(P){return P.copy(ke)},this.setViewport=function(P,G,ce,re){P.isVector4?ke.set(P.x,P.y,P.z,P.w):ke.set(P,G,ce,re),w.viewport(U.copy(ke).multiplyScalar(de).round())},this.getScissor=function(P){return P.copy(ut)},this.setScissor=function(P,G,ce,re){P.isVector4?ut.set(P.x,P.y,P.z,P.w):ut.set(P,G,ce,re),w.scissor(ne.copy(ut).multiplyScalar(de).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(P){w.setScissorTest(Ht=P)},this.setOpaqueSort=function(P){Ee=P},this.setTransparentSort=function(P){Je=P},this.getClearColor=function(P){return P.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(P=!0,G=!0,ce=!0){let re=0;if(P){let te=!1;if($!==null){const Ue=$.texture.format;te=_.has(Ue)}if(te){const Ue=$.texture.type,Ne=S.has(Ue),De=it.getClearColor(),We=it.getClearAlpha(),je=De.r,at=De.g,lt=De.b;Ne?(R[0]=je,R[1]=at,R[2]=lt,R[3]=We,Y.clearBufferuiv(Y.COLOR,0,R)):(I[0]=je,I[1]=at,I[2]=lt,I[3]=We,Y.clearBufferiv(Y.COLOR,0,I))}else re|=Y.COLOR_BUFFER_BIT}G&&(re|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(re|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&Y.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),W=P},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",wn,!1),it.dispose(),Pe.dispose(),we.dispose(),oe.dispose(),Me.dispose(),ge.dispose(),Oe.dispose(),_e.dispose(),be.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",Rl),Ye.removeEventListener("sessionend",Cl),zn.stop()};function At(P){P.preventDefault(),D_("WebGLRenderer: Context Lost."),B=!0}function yt(){D_("WebGLRenderer: Context Restored."),B=!1;const P=ee.autoReset,G=et.enabled,ce=et.autoUpdate,re=et.needsUpdate,te=et.type;Ze(),ee.autoReset=P,et.enabled=G,et.autoUpdate=ce,et.needsUpdate=re,et.type=te}function wn(P){bt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function yi(P){const G=P.target;G.removeEventListener("dispose",yi),ys(G)}function ys(P){sa(P),oe.remove(P)}function sa(P){const G=oe.get(P).programs;G!==void 0&&(G.forEach(function(ce){be.releaseProgram(ce)}),P.isShaderMaterial&&be.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,ce,re,te,Ue){G===null&&(G=un);const Ne=te.isMesh&&te.matrixWorld.determinantAffine()<0,De=qt(P,G,ce,re,te);w.setMaterial(re,Ne);let We=ce.index,je=1;if(re.wireframe===!0){if(We=pe.getWireframeAttribute(ce),We===void 0)return;je=2}const at=ce.drawRange,lt=ce.attributes.position;let Ve=at.start*je,gt=(at.start+at.count)*je;Ue!==null&&(Ve=Math.max(Ve,Ue.start*je),gt=Math.min(gt,(Ue.start+Ue.count)*je)),We!==null?(Ve=Math.max(Ve,0),gt=Math.min(gt,We.count)):lt!=null&&(Ve=Math.max(Ve,0),gt=Math.min(gt,lt.count));const en=gt-Ve;if(en<0||en===1/0)return;Oe.setup(te,re,De,ce,We);let Ft,Pt=Re;if(We!==null&&(Ft=Ae.get(We),Pt=me,Pt.setIndex(Ft)),te.isMesh)re.wireframe===!0?(w.setLineWidth(re.wireframeLinewidth*Gt()),Pt.setMode(Y.LINES)):Pt.setMode(Y.TRIANGLES);else if(te.isLine){let pn=re.linewidth;pn===void 0&&(pn=1),w.setLineWidth(pn*Gt()),te.isLineSegments?Pt.setMode(Y.LINES):te.isLineLoop?Pt.setMode(Y.LINE_LOOP):Pt.setMode(Y.LINE_STRIP)}else te.isPoints?Pt.setMode(Y.POINTS):te.isSprite&&Pt.setMode(Y.TRIANGLES);if(te.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const pn=te._multiDrawStarts,Be=te._multiDrawCounts,an=te._multiDrawCount,_t=We?Ae.get(We).bytesPerElement:1,Pn=oe.get(re).currentProgram.getUniforms();for(let dt=0;dt<an;dt++)Pn.setValue(Y,"_gl_DrawID",dt),Pt.render(pn[dt]/_t,Be[dt])}else if(te.isInstancedMesh)Pt.renderInstances(Ve,en,te.count);else if(ce.isInstancedBufferGeometry){const pn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Be=Math.min(ce.instanceCount,pn);Pt.renderInstances(Ve,en,Be)}else Pt.render(Ve,en)};function Ms(P,G,ce,re){W!==null&&P.isNodeMaterial&&W.setObject(re,P),mt===!0&&Ke.setState(P,ce,!1),P.transparent===!0&&P.side===Dr&&P.forceSinglePass===!1?(P.side=ti,P.needsUpdate=!0,ws(P,G,re),P.side=Js,P.needsUpdate=!0,ws(P,G,re),P.side=Dr):ws(P,G,re)}this.compile=function(P,G,ce=null){ce===null&&(ce=P),W!==null&&W.renderStart(P,G,ce),N=we.get(ce),N.init(G),T.push(N),ce.traverseVisible(function(te){te.isLight&&te.layers.test(G.layers)&&(N.pushLight(te),te.castShadow&&N.pushShadow(te))}),P!==ce&&P.traverseVisible(function(te){te.isLight&&te.layers.test(G.layers)&&(N.pushLight(te),te.castShadow&&N.pushShadow(te))}),N.setupLights(),W!==null&&W.updateLights(N.state.lightsArray),Nt=this.localClippingEnabled,mt=Ke.init(this.clippingPlanes,Nt),mt===!0&&Ke.setGlobalState(this.clippingPlanes,G),W!==null&&et.render(N.state.shadowsArray,ce,G);const re=new Set;return P.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ue=te.material;if(Ue)if(Array.isArray(Ue))for(let Ne=0;Ne<Ue.length;Ne++){const De=Ue[Ne];Ms(De,ce,G,te),re.add(De)}else Ms(Ue,ce,G,te),re.add(Ue)}),N=T.pop(),W!==null&&W.renderEnd(),re},this.compileAsync=function(P,G,ce=null){const re=this.compile(P,G,ce);return new Promise(te=>{function Ue(){if(re.forEach(function(Ne){const We=oe.get(Ne).currentProgram;(We===void 0||We.isReady())&&re.delete(Ne)}),re.size===0){te(P);return}setTimeout(Ue,10)}wt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Es=null;function Vc(P){Es&&Es(P)}function Rl(){zn.stop()}function Cl(){zn.start()}const zn=new Av;zn.setAnimationLoop(Vc),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(P){Es=P,Ye.setAnimationLoop(P),P===null?zn.stop():zn.start()},Ye.addEventListener("sessionstart",Rl),Ye.addEventListener("sessionend",Cl),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;W!==null&&W.renderStart(P,G);const ce=Ye.enabled===!0&&Ye.isPresenting===!0,re=L!==null&&($===null||ce)&&L.begin(O,$);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(G),G=Ye.getCamera()),P.isScene===!0&&P.onBeforeRender(O,P,G,$),N=we.get(P,T.length),N.init(G),N.state.textureUnits=he.getTextureUnits(),T.push(N),ft.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ct.setFromProjectionMatrix(ft,ur,G.reversedDepth),Nt=this.localClippingEnabled,mt=Ke.init(this.clippingPlanes,Nt),b=Pe.get(P,D.length),b.init(),D.push(b),Ye.enabled===!0&&Ye.isPresenting===!0){const Ne=O.xr.getDepthSensingMesh();Ne!==null&&aa(Ne,G,-1/0,O.sortObjects)}aa(P,G,0,O.sortObjects),b.finish(),W!==null&&W.updateLights(N.state.lightsArray),O.sortObjects===!0&&b.sort(Ee,Je),Lt=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,Lt&&it.addToRenderList(b,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&Ke.beginShadows();const te=N.state.shadowsArray;if(et.render(te,P,G),mt===!0&&Ke.endShadows(),(re&&L.hasRenderPass())===!1){const Ne=b.opaque,De=b.transmissive;if(N.setupLights(),G.isArrayCamera){const We=G.cameras;if(De.length>0)for(let je=0,at=We.length;je<at;je++){const lt=We[je];bl(Ne,De,P,lt)}Lt&&it.render(P);for(let je=0,at=We.length;je<at;je++){const lt=We[je];lo(b,P,lt,lt.viewport)}}else De.length>0&&bl(Ne,De,P,G),Lt&&it.render(P),lo(b,P,G)}$!==null&&K===0&&(he.updateMultisampleRenderTarget($),he.updateRenderTargetMipmap($)),re&&L.end(O),P.isScene===!0&&P.onAfterRender(O,P,G),Oe.resetDefaultState(),j=-1,Z=null,T.pop(),T.length>0?(N=T[T.length-1],he.setTextureUnits(N.state.textureUnits),mt===!0&&Ke.setGlobalState(O.clippingPlanes,N.state.camera)):N=null,D.pop(),D.length>0?b=D[D.length-1]:b=null,W!==null&&W.renderEnd()};function aa(P,G,ce,re){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)ce=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLightProbeGrid)N.pushLightProbeGrid(P);else if(P.isLight)N.pushLight(P),P.castShadow&&N.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(ct)){re&&Jt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ft);const Ne=ge.update(P),De=P.material;De.visible&&b.push(P,Ne,De,ce,Jt.z,null,G)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(ct))){const Ne=ge.update(P),De=P.material;if(re&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Jt.copy(P.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Jt.copy(Ne.boundingSphere.center)),Jt.applyMatrix4(P.matrixWorld).applyMatrix4(ft)),Array.isArray(De)){const We=Ne.groups;for(let je=0,at=We.length;je<at;je++){const lt=We[je],Ve=De[lt.materialIndex];Ve&&Ve.visible&&b.push(P,Ne,Ve,ce,Jt.z,lt,G)}}else De.visible&&b.push(P,Ne,De,ce,Jt.z,null,G)}}const Ue=P.children;for(let Ne=0,De=Ue.length;Ne<De;Ne++)aa(Ue[Ne],G,ce,re)}function lo(P,G,ce,re){const{opaque:te,transmissive:Ue,transparent:Ne}=P;N.setupLightsView(ce),mt===!0&&Ke.setGlobalState(O.clippingPlanes,ce),re&&w.viewport(U.copy(re)),te.length>0&&Ts(te,G,ce),Ue.length>0&&Ts(Ue,G,ce),Ne.length>0&&Ts(Ne,G,ce),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function bl(P,G,ce,re){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[re.id]===void 0){const Ve=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[re.id]=new Zi(1,1,{generateMipmaps:!0,type:Ve?pr:Di,minFilter:Ys,samples:Math.max(4,F.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const Ue=N.state.transmissionRenderTarget[re.id],Ne=re.viewport||U;Ue.setSize(Ne.z*O.transmissionResolutionScale,Ne.w*O.transmissionResolutionScale);const De=O.getRenderTarget(),We=O.getActiveCubeFace(),je=O.getActiveMipmapLevel();O.setRenderTarget(Ue),O.getClearColor(Le),Ie=O.getClearAlpha(),Ie<1&&O.setClearColor(16777215,.5),O.clear(),Lt&&it.render(ce);const at=O.toneMapping;O.toneMapping=fr;const lt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),N.setupLightsView(re),mt===!0&&Ke.setGlobalState(O.clippingPlanes,re),Ts(P,ce,re),he.updateMultisampleRenderTarget(Ue),he.updateRenderTargetMipmap(Ue),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let gt=0,en=G.length;gt<en;gt++){const Ft=G[gt],{object:Pt,geometry:pn,material:Be,group:an}=Ft;if(Be.side===Dr&&Pt.layers.test(re.layers)){const _t=Be.side;Be.side=ti,Be.needsUpdate=!0,uo(Pt,ce,re,pn,Be,an),Be.side=_t,Be.needsUpdate=!0,Ve=!0}}Ve===!0&&(he.updateMultisampleRenderTarget(Ue),he.updateRenderTargetMipmap(Ue))}O.setRenderTarget(De,We,je),O.setClearColor(Le,Ie),lt!==void 0&&(re.viewport=lt),O.toneMapping=at}function Ts(P,G,ce){const re=G.isScene===!0?G.overrideMaterial:null;for(let te=0,Ue=P.length;te<Ue;te++){const Ne=P[te],{object:De,geometry:We,group:je}=Ne;let at=Ne.material;at.allowOverride===!0&&re!==null&&(at=re),De.layers.test(ce.layers)&&uo(De,G,ce,We,at,je)}}function uo(P,G,ce,re,te,Ue){W!==null&&te.isNodeMaterial&&W.setObject(P,te),P.onBeforeRender(O,G,ce,re,te,Ue),P.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),te.onBeforeRender(O,G,ce,re,P,Ue),te.transparent===!0&&te.side===Dr&&te.forceSinglePass===!1?(te.side=ti,te.needsUpdate=!0,O.renderBufferDirect(ce,G,re,te,P,Ue),te.side=Js,te.needsUpdate=!0,O.renderBufferDirect(ce,G,re,te,P,Ue),te.side=Dr):O.renderBufferDirect(ce,G,re,te,P,Ue),P.onAfterRender(O,G,ce,re,te,Ue)}function ws(P,G,ce){G.isScene!==!0&&(G=un);const re=oe.get(P),te=N.state.lights,Ue=N.state.shadowsArray,Ne=te.state.version,De=be.getParameters(P,te.state,Ue,G,ce,N.state.lightProbeGridArray),We=be.getProgramCacheKey(De);let je=re.programs;re.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?G.environment:null,re.fog=G.fog;const at=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;re.envMap=Me.get(P.envMap||re.environment,at),re.envMapRotation=re.environment!==null&&P.envMap===null?G.environmentRotation:P.envMapRotation,je===void 0&&(P.addEventListener("dispose",yi),je=new Map,re.programs=je);let lt=je.get(We);if(lt!==void 0){if(re.currentProgram===lt&&re.lightsStateVersion===Ne)return Pl(P,De),lt}else De.uniforms=be.getUniforms(P),W!==null&&P.isNodeMaterial&&W.build(P,ce,De),P.onBeforeCompile(De,O),lt=be.acquireProgram(De,We),je.set(We,lt),re.uniforms=De.uniforms;const Ve=re.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ve.clippingPlanes=Ke.uniform),Pl(P,De),re.needsLights=fo(P),re.lightsStateVersion=Ne,re.needsLights&&(Ve.ambientLightColor.value=te.state.ambient,Ve.lightProbe.value=te.state.probe,Ve.sunLights.value=te.state.sun,Ve.sunLightShadows.value=te.state.sunShadow,Ve.directionalLights.value=te.state.directional,Ve.directionalLightShadows.value=te.state.directionalShadow,Ve.spotLights.value=te.state.spot,Ve.spotLightShadows.value=te.state.spotShadow,Ve.rectAreaLights.value=te.state.rectArea,Ve.ltc_1.value=te.state.rectAreaLTC1,Ve.ltc_2.value=te.state.rectAreaLTC2,Ve.pointLights.value=te.state.point,Ve.pointLightShadows.value=te.state.pointShadow,Ve.hemisphereLights.value=te.state.hemi,Ve.sunShadowMatrix.value=te.state.sunShadowMatrix,Ve.sunShadowCascade.value=te.state.sunShadowCascade,Ve.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ve.spotLightMatrix.value=te.state.spotLightMatrix,Ve.spotLightMap.value=te.state.spotLightMap,Ve.pointShadowMatrix.value=te.state.pointShadowMatrix),re.lightProbeGrid=N.state.lightProbeGridArray.length>0,re.currentProgram=lt,re.uniformsList=null,lt}function co(P){if(P.uniformsList===null){const G=P.currentProgram.getUniforms();P.uniformsList=pc.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function Pl(P,G){const ce=oe.get(P);ce.outputColorSpace=G.outputColorSpace,ce.batching=G.batching,ce.batchingColor=G.batchingColor,ce.instancing=G.instancing,ce.instancingColor=G.instancingColor,ce.instancingMorph=G.instancingMorph,ce.skinning=G.skinning,ce.morphTargets=G.morphTargets,ce.morphNormals=G.morphNormals,ce.morphColors=G.morphColors,ce.morphTargetsCount=G.morphTargetsCount,ce.numClippingPlanes=G.numClippingPlanes,ce.numIntersection=G.numClipIntersection,ce.vertexAlphas=G.vertexAlphas,ce.vertexTangents=G.vertexTangents,ce.toneMapping=G.toneMapping}function Hc(P,G){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;A.setFromMatrixPosition(G.matrixWorld);for(let ce=0,re=P.length;ce<re;ce++){const te=P[ce];if(te.texture!==null&&te.boundingBox.containsPoint(A))return te}return null}function qt(P,G,ce,re,te){G.isScene!==!0&&(G=un),he.resetTextureUnits();const Ue=G.fog,Ne=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?G.environment:null,De=$===null?O.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:vt.workingColorSpace,We=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,je=Me.get(re.envMap||Ne,We),at=re.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,lt=!!ce.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ve=!!ce.morphAttributes.position,gt=!!ce.morphAttributes.normal,en=!!ce.morphAttributes.color;let Ft=fr;re.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ft=O.toneMapping);const Pt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,pn=Pt!==void 0?Pt.length:0,Be=oe.get(re),an=N.state.lights;if(mt===!0&&(Nt===!0||P!==Z)){const Dt=P===Z&&re.id===j;Ke.setState(re,P,Dt)}let _t=!1;re.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==an.state.version||Be.outputColorSpace!==De||te.isBatchedMesh&&Be.batching===!1||!te.isBatchedMesh&&Be.batching===!0||te.isBatchedMesh&&Be.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Be.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Be.instancing===!1||!te.isInstancedMesh&&Be.instancing===!0||te.isSkinnedMesh&&Be.skinning===!1||!te.isSkinnedMesh&&Be.skinning===!0||te.isInstancedMesh&&Be.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Be.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Be.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Be.instancingMorph===!1&&te.morphTexture!==null||Be.envMap!==je||re.fog===!0&&Be.fog!==Ue||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ke.numPlanes||Be.numIntersection!==Ke.numIntersection)||Be.vertexAlphas!==at||Be.vertexTangents!==lt||Be.morphTargets!==Ve||Be.morphNormals!==gt||Be.morphColors!==en||Be.toneMapping!==Ft||Be.morphTargetsCount!==pn||!!Be.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Be.__version=re.version);let Pn=Be.currentProgram;_t===!0&&(Pn=ws(re,G,te),W&&re.isNodeMaterial&&W.onUpdateProgram(re,Pn,Be));let dt=!1,Oi=!1,_r=!1;const Rt=Pn.getUniforms(),Wt=Be.uniforms;if(w.useProgram(Pn.program)&&(dt=!0,Oi=!0,_r=!0),re.id!==j&&(j=re.id,Oi=!0),Be.needsLights){const Dt=Hc(N.state.lightProbeGridArray,te);Be.lightProbeGrid!==Dt&&(Be.lightProbeGrid=Dt,Oi=!0)}if(dt||Z!==P){w.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Rt.setValue(Y,"projectionMatrix",P.projectionMatrix),Rt.setValue(Y,"viewMatrix",P.matrixWorldInverse);const Mi=Rt.map.cameraPosition;Mi!==void 0&&Mi.setValue(Y,Ut.setFromMatrixPosition(P.matrixWorld)),F.logarithmicDepthBuffer&&Rt.setValue(Y,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Rt.setValue(Y,"isOrthographic",P.isOrthographicCamera===!0),Z!==P&&(Z=P,Oi=!0,_r=!0)}if(Be.needsLights&&(an.state.sunShadowMap.length>0&&Rt.setValue(Y,"sunShadowMap",an.state.sunShadowMap,he),an.state.directionalShadowMap.length>0&&Rt.setValue(Y,"directionalShadowMap",an.state.directionalShadowMap,he),an.state.spotShadowMap.length>0&&Rt.setValue(Y,"spotShadowMap",an.state.spotShadowMap,he),an.state.pointShadowMap.length>0&&Rt.setValue(Y,"pointShadowMap",an.state.pointShadowMap,he)),te.isSkinnedMesh){Rt.setOptional(Y,te,"bindMatrix"),Rt.setOptional(Y,te,"bindMatrixInverse");const Dt=te.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Rt.setValue(Y,"boneTexture",Dt.boneTexture,he))}te.isBatchedMesh&&(Rt.setOptional(Y,te,"batchingTexture"),Rt.setValue(Y,"batchingTexture",te._matricesTexture,he),Rt.setOptional(Y,te,"batchingIdTexture"),Rt.setValue(Y,"batchingIdTexture",te._indirectTexture,he),Rt.setOptional(Y,te,"batchingColorTexture"),te._colorsTexture!==null&&Rt.setValue(Y,"batchingColorTexture",te._colorsTexture,he));const ki=ce.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&H.update(te,ce,Pn),(Oi||Be.receiveShadow!==te.receiveShadow)&&(Be.receiveShadow=te.receiveShadow,Rt.setValue(Y,"receiveShadow",te.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&G.environment!==null&&(Wt.envMapIntensity.value=G.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=FA()),Oi){if(Rt.setValue(Y,"toneMappingExposure",O.toneMappingExposure),Be.needsLights&&Gc(Wt,_r),Ue&&re.fog===!0&&$e.refreshFogUniforms(Wt,Ue),$e.refreshMaterialUniforms(Wt,re,de,le,N.state.transmissionRenderTarget[P.id]),Be.needsLights&&Be.lightProbeGrid){const Dt=Be.lightProbeGrid;Wt.probesSH.value=Dt.texture,Wt.probesMin.value.copy(Dt.boundingBox.min),Wt.probesMax.value.copy(Dt.boundingBox.max),Wt.probesResolution.value.copy(Dt.resolution)}pc.upload(Y,co(Be),Wt,he)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(pc.upload(Y,co(Be),Wt,he),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Rt.setValue(Y,"center",te.center),Rt.setValue(Y,"modelViewMatrix",te.modelViewMatrix),Rt.setValue(Y,"normalMatrix",te.normalMatrix),Rt.setValue(Y,"modelMatrix",te.matrixWorld),re.uniformsGroups!==void 0){const Dt=re.uniformsGroups;for(let Mi=0,Bi=Dt.length;Mi<Bi;Mi++){const zi=Dt[Mi];_e.update(zi,Pn),_e.bind(zi,Pn)}}return Pn}function Gc(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.sunLights.needsUpdate=G,P.sunLightShadows.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function fo(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(P,G,ce){const re=oe.get(P);re.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),oe.get(P.texture).__webglTexture=G,oe.get(P.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ce,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,G){const ce=oe.get(P);ce.__webglFramebuffer=G,ce.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(P,G=0,ce=0){$=P,ue=G,K=ce;let re=null,te=!1,Ue=!1;if(P){const De=oe.get(P);if(De.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(Y.FRAMEBUFFER,De.__webglFramebuffer),U.copy(P.viewport),ne.copy(P.scissor),xe=P.scissorTest,w.viewport(U),w.scissor(ne),w.setScissorTest(xe),j=-1;return}else if(De.__webglFramebuffer===void 0)he.setupRenderTarget(P);else if(De.__hasExternalTextures)he.rebindTextures(P,oe.get(P.texture).__webglTexture,oe.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const at=P.depthTexture;if(De.__boundDepthTexture!==at){if(at!==null&&oe.has(at)&&(P.width!==at.image.width||P.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(P)}}const We=P.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ue=!0);const je=oe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(je[G])?re=je[G][ce]:re=je[G],te=!0):P.samples>0&&he.useMultisampledRTT(P)===!1?re=oe.get(P).__webglMultisampledFramebuffer:Array.isArray(je)?re=je[ce]:re=je,U.copy(P.viewport),ne.copy(P.scissor),xe=P.scissorTest}else U.copy(ke).multiplyScalar(de).floor(),ne.copy(ut).multiplyScalar(de).floor(),xe=Ht;if(ce!==0&&(re=J),w.bindFramebuffer(Y.FRAMEBUFFER,re)&&w.drawBuffers(P,re),w.viewport(U),w.scissor(ne),w.setScissorTest(xe),te){const De=oe.get(P.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+G,De.__webglTexture,ce)}else if(Ue){const De=G;for(let We=0;We<P.textures.length;We++){const je=oe.get(P.textures[We]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+We,je.__webglTexture,ce,De)}}else if(P!==null&&ce!==0){const De=oe.get(P.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,De.__webglTexture,ce)}j=-1};function ho(P){const G=oe.get(P);return(G.__readFormat!==P.format||G.__readType!==P.type)&&(G.__readFormat=P.format,G.__readType=P.type,G.__formatReadable=F.textureFormatReadable(P.format),G.__typeReadable=F.textureTypeReadable(P.type)),G}this.readRenderTargetPixels=function(P,G,ce,re,te,Ue,Ne,De=0){if(!(P&&P.isWebGLRenderTarget)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=oe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(We=We[Ne]),We){w.bindFramebuffer(Y.FRAMEBUFFER,We);try{const je=P.textures[De],at=je.format,lt=je.type;P.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+De);const Ve=ho(je);if(Ve.__formatReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-re&&ce>=0&&ce<=P.height-te&&Y.readPixels(G,ce,re,te,Ce.convert(at),Ce.convert(lt),Ue)}finally{const je=$!==null?oe.get($).__webglFramebuffer:null;w.bindFramebuffer(Y.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(P,G,ce,re,te,Ue,Ne,De=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=oe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(We=We[Ne]),We)if(G>=0&&G<=P.width-re&&ce>=0&&ce<=P.height-te){w.bindFramebuffer(Y.FRAMEBUFFER,We);const je=P.textures[De],at=je.format,lt=je.type;P.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+De);const Ve=ho(je);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,gt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ue.byteLength,Y.STREAM_READ),Y.readPixels(G,ce,re,te,Ce.convert(at),Ce.convert(lt),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const en=$!==null?oe.get($).__webglFramebuffer:null;w.bindFramebuffer(Y.FRAMEBUFFER,en);const Ft=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await tM(Y,Ft,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,gt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ue),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(gt),Y.deleteSync(Ft),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,G=null,ce=0){const re=Math.pow(2,-ce),te=Math.floor(P.image.width*re),Ue=Math.floor(P.image.height*re),Ne=G!==null?G.x:0,De=G!==null?G.y:0;he.setTexture2D(P,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ce,0,0,Ne,De,te,Ue),w.unbindTexture()},this.copyTextureToTexture=function(P,G,ce=null,re=null,te=0,Ue=0){let Ne,De,We,je,at,lt,Ve,gt,en;const Ft=P.isCompressedTexture?P.mipmaps[Ue]:P.image;if(ce!==null)Ne=ce.max.x-ce.min.x,De=ce.max.y-ce.min.y,We=ce.isBox3?ce.max.z-ce.min.z:1,je=ce.min.x,at=ce.min.y,lt=ce.isBox3?ce.min.z:0;else{const Wt=Math.pow(2,-te);Ne=Math.floor(Ft.width*Wt),De=Math.floor(Ft.height*Wt),P.isDataArrayTexture?We=Ft.depth:P.isData3DTexture?We=Math.floor(Ft.depth*Wt):We=1,je=0,at=0,lt=0}re!==null?(Ve=re.x,gt=re.y,en=re.z):(Ve=0,gt=0,en=0);const Pt=Ce.convert(G.format),pn=Ce.convert(G.type);let Be;G.isData3DTexture?(he.setTexture3D(G,0),Be=Y.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(he.setTexture2DArray(G,0),Be=Y.TEXTURE_2D_ARRAY):(he.setTexture2D(G,0),Be=Y.TEXTURE_2D),w.activeTexture(Y.TEXTURE0),w.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,G.flipY),w.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),w.pixelStorei(Y.UNPACK_ALIGNMENT,G.unpackAlignment);const an=w.getParameter(Y.UNPACK_ROW_LENGTH),_t=w.getParameter(Y.UNPACK_IMAGE_HEIGHT),Pn=w.getParameter(Y.UNPACK_SKIP_PIXELS),dt=w.getParameter(Y.UNPACK_SKIP_ROWS),Oi=w.getParameter(Y.UNPACK_SKIP_IMAGES);w.pixelStorei(Y.UNPACK_ROW_LENGTH,Ft.width),w.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ft.height),w.pixelStorei(Y.UNPACK_SKIP_PIXELS,je),w.pixelStorei(Y.UNPACK_SKIP_ROWS,at),w.pixelStorei(Y.UNPACK_SKIP_IMAGES,lt);const _r=P.isDataArrayTexture||P.isData3DTexture,Rt=G.isDataArrayTexture||G.isData3DTexture;if(P.isDepthTexture){const Wt=oe.get(P),ki=oe.get(G),Dt=oe.get(Wt.__renderTarget),Mi=oe.get(ki.__renderTarget);w.bindFramebuffer(Y.READ_FRAMEBUFFER,Dt.__webglFramebuffer),w.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Bi=0;Bi<We;Bi++)_r&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,oe.get(P).__webglTexture,te,lt+Bi),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,oe.get(G).__webglTexture,Ue,en+Bi)),Y.blitFramebuffer(je,at,Ne,De,Ve,gt,Ne,De,Y.DEPTH_BUFFER_BIT,Y.NEAREST);w.bindFramebuffer(Y.READ_FRAMEBUFFER,null),w.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(te!==0||P.isRenderTargetTexture||oe.has(P)){const Wt=oe.get(P),ki=oe.get(G);w.bindFramebuffer(Y.READ_FRAMEBUFFER,z),w.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Q);for(let Dt=0;Dt<We;Dt++)_r?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Wt.__webglTexture,te,lt+Dt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Wt.__webglTexture,te),Rt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ki.__webglTexture,Ue,en+Dt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,ki.__webglTexture,Ue),te!==0?Y.blitFramebuffer(je,at,Ne,De,Ve,gt,Ne,De,Y.COLOR_BUFFER_BIT,Y.NEAREST):Rt?Y.copyTexSubImage3D(Be,Ue,Ve,gt,en+Dt,je,at,Ne,De):Y.copyTexSubImage2D(Be,Ue,Ve,gt,je,at,Ne,De);w.bindFramebuffer(Y.READ_FRAMEBUFFER,null),w.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Rt?P.isDataTexture||P.isData3DTexture?Y.texSubImage3D(Be,Ue,Ve,gt,en,Ne,De,We,Pt,pn,Ft.data):G.isCompressedArrayTexture?Y.compressedTexSubImage3D(Be,Ue,Ve,gt,en,Ne,De,We,Pt,Ft.data):Y.texSubImage3D(Be,Ue,Ve,gt,en,Ne,De,We,Pt,pn,Ft):P.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ue,Ve,gt,Ne,De,Pt,pn,Ft.data):P.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ue,Ve,gt,Ft.width,Ft.height,Pt,Ft.data):Y.texSubImage2D(Y.TEXTURE_2D,Ue,Ve,gt,Ne,De,Pt,pn,Ft);w.pixelStorei(Y.UNPACK_ROW_LENGTH,an),w.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,_t),w.pixelStorei(Y.UNPACK_SKIP_PIXELS,Pn),w.pixelStorei(Y.UNPACK_SKIP_ROWS,dt),w.pixelStorei(Y.UNPACK_SKIP_IMAGES,Oi),Ue===0&&G.generateMipmaps&&Y.generateMipmap(Be),w.unbindTexture()},this.initRenderTarget=function(P){oe.get(P).__webglFramebuffer===void 0&&he.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?he.setTextureCube(P,0):P.isData3DTexture?he.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?he.setTexture2DArray(P,0):he.setTexture2D(P,0),w.unbindTexture()},this.resetState=function(){ue=0,K=0,$=null,w.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}function Lr(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Iv(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},pl={duration:.5,overwrite:!1,delay:0},Lp,bn,Yt,Ui=1e8,kt=1/Ui,np=Math.PI*2,kA=np/4,BA=0,Uv=Math.sqrt,zA=Math.cos,VA=Math.sin,Tn=function(e){return typeof e=="string"},rn=function(e){return typeof e=="function"},Br=function(e){return typeof e=="number"},Np=function(e){return typeof e>"u"},gr=function(e){return typeof e=="object"},ni=function(e){return e!==!1},Dp=function(){return typeof window<"u"},oc=function(e){return rn(e)||Tn(e)},Fv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Bn=Array.isArray,HA=/random\([^)]+\)/g,GA=/,\s*/g,b0=/(?:-?\.?\d|\.)+/gi,Ov=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ih=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kv=/[+-]=-?[.\d]+/,WA=/[^,'"\[\]\s]+/gi,XA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Zt,sr,ip,Ip,xi={},Ac={},Bv,zv=function(e){return(Ac=eo(e,xi))&&ai},Up=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ml=function(e,t){return!t&&console.warn(e)},Vv=function(e,t){return e&&(xi[e]=t)&&Ac&&(Ac[e]=t)||xi},gl=function(){return 0},YA={suppressEvents:!0,isStart:!0,kill:!1},mc={suppressEvents:!0,kill:!1},qA={suppressEvents:!0},Fp={},ms=[],rp={},Hv,pi={},rh={},P0=30,gc=[],Op="",kp=function(e){var t=e[0],i,s;if(gr(t)||rn(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(s=gc.length;s--&&!gc[s].targetTest(t););i=gc[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new cx(e[s],i)))||e.splice(s,1);return e},Ks=function(e){return e._gsap||kp(Fi(e))[0]._gsap},Gv=function(e,t,i){return(i=e[t])&&rn(i)?e[t]():Np(i)&&e.getAttribute&&e.getAttribute(t)||i},ii=function(e,t){return(e=e.split(",")).forEach(t)||e},ln=function(e){return Math.round(e*1e5)/1e5||0},jt=function(e){return Math.round(e*1e7)/1e7||0},Ka=function(e,t){var i=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+s:i==="-"?e-s:i==="*"?e*s:e/s},$A=function(e,t){for(var i=t.length,s=0;e.indexOf(t[s])<0&&++s<i;);return s<i},Rc=function(){var e=ms.length,t=ms.slice(0),i,s;for(rp={},ms.length=0,i=0;i<e;i++)s=t[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Bp=function(e){return!!(e._initted||e._startAt||e.add)},Wv=function(e,t,i,s){ms.length&&!bn&&Rc(),e.render(t,i,!!(bn&&t<0&&Bp(e))),ms.length&&!bn&&Rc()},Xv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(WA).length<2?t:Tn(e)?e.trim():e},Yv=function(e){return e},Si=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},KA=function(e){return function(t,i){for(var s in i)s in t||s==="duration"&&e||s==="ease"||(t[s]=i[s])}},eo=function(e,t){for(var i in t)e[i]=t[i];return e},L0=function a(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=gr(t[i])?a(e[i]||(e[i]={}),t[i]):t[i]);return e},Cc=function(e,t){var i={},s;for(s in e)s in t||(i[s]=e[s]);return i},ol=function(e){var t=e.parent||Zt,i=e.keyframes?KA(Bn(e.keyframes)):Si;if(ni(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},jA=function(e,t){for(var i=e.length,s=i===t.length;s&&i--&&e[i]===t[i];);return i<0},qv=function(e,t,i,s,o){var u=e[s],c;if(o)for(c=t[o];u&&u[o]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[s]=t,t._prev=u,t.parent=t._dp=e,t},kc=function(e,t,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var o=t._prev,u=t._next;o?o._next=u:e[i]===t&&(e[i]=u),u?u._prev=o:e[s]===t&&(e[s]=o),t._next=t._prev=t.parent=null},_s=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},js=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},ZA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},sp=function(e,t,i,s){return e._startAt&&(bn?e._startAt.revert(mc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},QA=function a(e){return!e||e._ts&&a(e.parent)},N0=function(e){return e._repeat?to(e._tTime,e=e.duration()+e._rDelay)*e:0},to=function(e,t){var i=Math.floor(e=jt(e/t));return e&&i===e?i-1:i},bc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Bc=function(e){return e._end=jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||kt)||0))},zc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=jt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Bc(e),i._dirty||js(i,e)),e},$v=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=bc(e.rawTime(),t),(!t._dur||Al(0,t.totalDuration(),i)-t._tTime>kt)&&t.render(i,!0)),js(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-kt}},or=function(e,t,i,s){return t.parent&&_s(t),t._start=jt((Br(i)?i:i||e!==Zt?Pi(e,i,t):e._time)+t._delay),t._end=jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),qv(e,t,"_first","_last",e._sort?"_start":0),ap(t)||(e._recent=t),s||$v(e,t),e._ts<0&&zc(e,e._tTime),e},Kv=function(e,t){return(xi.ScrollTrigger||Up("scrollTrigger",t))&&xi.ScrollTrigger.create(t,e)},jv=function(e,t,i,s,o){if(Vp(e,t,o),!e._initted)return 1;if(!i&&e._pt&&!bn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Hv!==mi.frame)return ms.push(e),e._lazy=[o,s],1},JA=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},ap=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},eR=function(e,t,i,s){var o=e.ratio,u=t<0||!t&&(!e._start&&JA(e)&&!(!e._initted&&ap(e))||(e._ts<0||e._dp._ts<0)&&!ap(e))?0:1,c=e._rDelay,d=0,h,p,v;if(c&&e._repeat&&(d=Al(0,e._tDur,t),p=to(d,c),e._yoyo&&p&1&&(u=1-u),p!==to(e._tTime,c)&&(o=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==o||bn||s||e._zTime===kt||!t&&e._zTime){if(!e._initted&&jv(e,t,s,i,d))return;for(v=e._zTime,e._zTime=t||(i?kt:0),i||(i=t&&!v),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=d,h=e._pt;h;)h.r(u,h.d),h=h._next;t<0&&sp(e,t,i,!0),e._onUpdate&&!i&&gi(e,"onUpdate"),d&&e._repeat&&!i&&e.parent&&gi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&_s(e,1),!i&&!bn&&(gi(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},tR=function(e,t,i){var s;if(i>t)for(s=e._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},no=function(e,t,i,s){var o=e._repeat,u=jt(t)||0,c=e._tTime/e._tDur;return c&&!s&&(e._time*=u/e._dur),e._dur=u,e._tDur=o?o<0?1e10:jt(u*(o+1)+e._rDelay*o):u,c>0&&!s&&zc(e,e._tTime=e._tDur*c),e.parent&&Bc(e),i||js(e.parent,e),e},D0=function(e){return e instanceof ei?js(e):no(e,e._dur)},nR={_start:0,endTime:gl,totalDuration:gl},Pi=function a(e,t,i){var s=e.labels,o=e._recent||nR,u=e.duration()>=Ui?o.endTime(!1):e._dur,c,d,h;return Tn(t)&&(isNaN(t)||t in s)?(d=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),d==="<"||d===">"?(c>=0&&(t=t.replace(/=/,"")),(d==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?o:i).totalDuration()/100:1)):c<0?(t in s||(s[t]=u),s[t]):(d=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&i&&(d=d/100*(Bn(i)?i[0]:i).totalDuration()),c>1?a(e,t.substr(0,c-1),i)+d:u+d)):t==null?u:+t},ll=function(e,t,i){var s=Br(t[1]),o=(s?2:1)+(e<2?0:1),u=t[o],c,d;if(s&&(u.duration=t[1]),u.parent=i,e){for(c=u,d=i;d&&!("immediateRender"in c);)c=d.vars.defaults||{},d=ni(d.vars.inherit)&&d.parent;u.immediateRender=ni(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[o-1]}return new dn(t[0],u,t[o+1])},Ss=function(e,t){return e||e===0?t(e):t},Al=function(e,t,i){return i<e?e:i>t?t:i},On=function(e,t){return!Tn(e)||!(t=XA.exec(e))?"":t[1]},iR=function(e,t,i){return Ss(i,function(s){return Al(e,t,s)})},op=[].slice,Zv=function(e,t){return e&&gr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&gr(e[0]))&&!e.nodeType&&e!==sr},rR=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(s){var o;return Tn(s)&&!t||Zv(s,1)?(o=i).push.apply(o,Fi(s)):i.push(s)})||i},Fi=function(e,t,i){return Yt&&!t&&Yt.selector?Yt.selector(e):Tn(e)&&!i&&(ip||!io())?op.call((t||Ip).querySelectorAll(e),0):Bn(e)?rR(e,i):Zv(e)?op.call(e,0):e?[e]:[]},lp=function(e){return e=Fi(e)[0]||ml("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Fi(t,i.querySelectorAll?i:i===e?ml("Invalid scope")||Ip.createElement("div"):e)}},Qv=function(e){return e.sort(function(){return .5-Math.random()})},Jv=function(e){if(rn(e))return e;var t=gr(e)?e:{each:e},i=Zs(t.ease),s=t.from||0,o=parseFloat(t.base)||0,u={},c=s>0&&s<1,d=isNaN(s)||c,h=t.axis,p=s,v=s;return Tn(s)?p=v={center:.5,edges:.5,end:1}[s]||0:!c&&d&&(p=s[0],v=s[1]),function(g,y,E){var M=(E||t).length,_=u[M],S,R,I,A,b,N,D,T,L;if(!_){if(L=t.grid==="auto"?0:(t.grid||[1,Ui])[1],!L){for(D=-Ui;D<(D=E[L++].getBoundingClientRect().left)&&L<M;);L<M&&L--}for(_=u[M]=[],S=d?Math.min(L,M)*p-.5:s%L,R=L===Ui?0:d?M*v/L-.5:s/L|0,D=0,T=Ui,N=0;N<M;N++)I=N%L-S,A=R-(N/L|0),_[N]=b=h?Math.abs(h==="y"?A:I):Uv(I*I+A*A),b>D&&(D=b),b<T&&(T=b);s==="random"&&Qv(_),_.max=D-T,_.min=T,_.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(L>M?M-1:h?h==="y"?M/L:L:Math.max(L,M/L))||0)*(s==="edges"?-1:1),_.b=M<0?o-M:o,_.u=On(t.amount||t.each)||0,i=i&&M<0?_R(i):i}return M=(_[g]-_.min)/_.max||0,jt(_.b+(i?i(M):M)*_.v)+_.u}},up=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var s=jt(Math.round(parseFloat(i)/e)*e*t);return(s-s%1)/t+(Br(i)?0:On(i))}},ex=function(e,t){var i=Bn(e),s,o;return!i&&gr(e)&&(s=i=e.radius||Ui,e.values?(e=Fi(e.values),(o=!Br(e[0]))&&(s*=s)):e=up(e.increment)),Ss(t,i?rn(e)?function(u){return o=e(u),Math.abs(o-u)<=s?o:u}:function(u){for(var c=parseFloat(o?u.x:u),d=parseFloat(o?u.y:0),h=Ui,p=0,v=e.length,g,y;v--;)o?(g=e[v].x-c,y=e[v].y-d,g=g*g+y*y):g=Math.abs(e[v]-c),g<h&&(h=g,p=v);return p=!s||h<=s?e[p]:u,o||p===u||Br(u)?p:p+On(u)}:up(e))},tx=function(e,t,i,s){return Ss(Bn(e)?!t:i===!0?!!(i=0):!s,function(){return Bn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*s)/s})},sR=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(s){return t.reduce(function(o,u){return u(o)},s)}},aR=function(e,t){return function(i){return e(parseFloat(i))+(t||On(i))}},oR=function(e,t,i){return ix(e,t,0,1,i)},nx=function(e,t,i){return Ss(i,function(s){return e[~~t(s)]})},lR=function a(e,t,i){var s=t-e;return Bn(e)?nx(e,a(0,e.length),t):Ss(i,function(o){return(s+(o-e)%s)%s+e})},uR=function a(e,t,i){var s=t-e,o=s*2;return Bn(e)?nx(e,a(0,e.length-1),t):Ss(i,function(u){return u=(o+(u-e)%o)%o||0,e+(u>s?o-u:u)})},_l=function(e){return e.replace(HA,function(t){var i=t.indexOf("[")+1,s=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(GA);return tx(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},ix=function(e,t,i,s,o){var u=t-e,c=s-i;return Ss(o,function(d){return i+((d-e)/u*c||0)})},cR=function a(e,t,i,s){var o=isNaN(e+t)?0:function(y){return(1-y)*e+y*t};if(!o){var u=Tn(e),c={},d,h,p,v,g;if(i===!0&&(s=1)&&(i=null),u)e={p:e},t={p:t};else if(Bn(e)&&!Bn(t)){for(p=[],v=e.length,g=v-2,h=1;h<v;h++)p.push(a(e[h-1],e[h]));v--,o=function(E){E*=v;var M=Math.min(g,~~E);return p[M](E-M)},i=t}else s||(e=eo(Bn(e)?[]:{},e));if(!p){for(d in t)zp.call(c,e,d,"get",t[d]);o=function(E){return Wp(E,c)||(u?e.p:e)}}}return Ss(i,o)},I0=function(e,t,i){var s=e.labels,o=Ui,u,c,d;for(u in s)c=s[u]-t,c<0==!!i&&c&&o>(c=Math.abs(c))&&(d=u,o=c);return d},gi=function(e,t,i){var s=e.vars,o=s[t],u=Yt,c=e._ctx,d,h,p;if(o)return d=s[t+"Params"],h=s.callbackScope||e,i&&ms.length&&Rc(),c&&(Yt=c),p=d?o.apply(h,d):o.call(h),Yt=u,p},il=function(e){return _s(e),e.scrollTrigger&&e.scrollTrigger.kill(!!bn),e.progress()<1&&gi(e,"onInterrupt"),e},Ya,rx=[],sx=function(e){if(e)if(e=!e.name&&e.default||e,Dp()||e.headless){var t=e.name,i=rn(e),s=t&&!i&&e.init?function(){this._props=[]}:e,o={init:gl,render:Wp,add:zp,kill:RR,modifier:AR,rawVars:0},u={targetTest:0,get:0,getSetter:Gp,aliases:{},register:0};if(io(),e!==s){if(pi[t])return;Si(s,Si(Cc(e,o),u)),eo(s.prototype,eo(o,Cc(e,u))),pi[s.prop=t]=s,e.targetTest&&(gc.push(s),Fp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Vv(t,s),e.register&&e.register(ai,s,ri)}else rx.push(e)},Ot=255,rl={aqua:[0,Ot,Ot],lime:[0,Ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ot],navy:[0,0,128],white:[Ot,Ot,Ot],olive:[128,128,0],yellow:[Ot,Ot,0],orange:[Ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ot,0,0],pink:[Ot,192,203],cyan:[0,Ot,Ot],transparent:[Ot,Ot,Ot,0]},sh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ot+.5|0},ax=function(e,t,i){var s=e?Br(e)?[e>>16,e>>8&Ot,e&Ot]:0:rl.black,o,u,c,d,h,p,v,g,y,E;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),rl[e])s=rl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+o+o+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&Ot,s&Ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&Ot,e&Ot]}else if(e.substr(0,3)==="hsl"){if(s=E=e.match(b0),!t)d=+s[0]%360/360,h=+s[1]/100,p=+s[2]/100,u=p<=.5?p*(h+1):p+h-p*h,o=p*2-u,s.length>3&&(s[3]*=1),s[0]=sh(d+1/3,o,u),s[1]=sh(d,o,u),s[2]=sh(d-1/3,o,u);else if(~e.indexOf("="))return s=e.match(Ov),i&&s.length<4&&(s[3]=1),s}else s=e.match(b0)||rl.transparent;s=s.map(Number)}return t&&!E&&(o=s[0]/Ot,u=s[1]/Ot,c=s[2]/Ot,v=Math.max(o,u,c),g=Math.min(o,u,c),p=(v+g)/2,v===g?d=h=0:(y=v-g,h=p>.5?y/(2-v-g):y/(v+g),d=v===o?(u-c)/y+(u<c?6:0):v===u?(c-o)/y+2:(o-u)/y+4,d*=60),s[0]=~~(d+.5),s[1]=~~(h*100+.5),s[2]=~~(p*100+.5)),i&&s.length<4&&(s[3]=1),s},ox=function(e){var t=[],i=[],s=-1;return e.split(gs).forEach(function(o){var u=o.match(Xa)||[];t.push.apply(t,u),i.push(s+=u.length+1)}),t.c=i,t},U0=function(e,t,i){var s="",o=(e+s).match(gs),u=t?"hsla(":"rgba(",c=0,d,h,p,v;if(!o)return e;if(o=o.map(function(g){return(g=ax(g,t,1))&&u+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),i&&(p=ox(e),d=i.c,d.join(s)!==p.c.join(s)))for(h=e.replace(gs,"1").split(Xa),v=h.length-1;c<v;c++)s+=h[c]+(~d.indexOf(c)?o.shift()||u+"0,0,0,0)":(p.length?p:o.length?o:i).shift());if(!h)for(h=e.split(gs),v=h.length-1;c<v;c++)s+=h[c]+o[c];return s+h[v]},gs=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in rl)a+="|"+e+"\\b";return new RegExp(a+")","gi")})(),fR=/hsl[a]?\(/,lx=function(e){var t=e.join(" "),i;if(gs.lastIndex=0,gs.test(t))return i=fR.test(t),e[1]=U0(e[1],i),e[0]=U0(e[0],i,ox(e[1])),!0},vl,mi=(function(){var a=Date.now,e=500,t=33,i=a(),s=i,o=1e3/240,u=o,c=[],d,h,p,v,g,y,E=function M(_){var S=a()-s,R=_===!0,I,A,b,N;if((S>e||S<0)&&(i+=S-t),s+=S,b=s-i,I=b-u,(I>0||R)&&(N=++v.frame,g=b-v.time*1e3,v.time=b=b/1e3,u+=I+(I>=o?4:o-I),A=1),R||(d=h(M)),A)for(y=0;y<c.length;y++)c[y](b,g,N,_)};return v={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(_){return g/(1e3/(_||60))},wake:function(){Bv&&(!ip&&Dp()&&(sr=ip=window,Ip=sr.document||{},xi.gsap=ai,(sr.gsapVersions||(sr.gsapVersions=[])).push(ai.version),zv(Ac||sr.GreenSockGlobals||!sr.gsap&&sr||{}),rx.forEach(sx)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&v.sleep(),h=p||function(_){return setTimeout(_,u-v.time*1e3+1|0)},vl=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(d),vl=0,h=gl},lagSmoothing:function(_,S){e=_||1/0,t=Math.min(S||33,e)},fps:function(_){o=1e3/(_||240),u=v.time*1e3+o},add:function(_,S,R){var I=S?function(A,b,N,D){_(A,b,N,D),v.remove(I)}:_;return v.remove(_),c[R?"unshift":"push"](I),io(),I},remove:function(_,S){~(S=c.indexOf(_))&&c.splice(S,1)&&y>=S&&y--},_listeners:c},v})(),io=function(){return!vl&&mi.wake()},St={},dR=/^[\d.\-M][\d.\-,\s]/,hR=/["']/g,pR=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),s=i[0],o=1,u=i.length,c,d,h;o<u;o++)d=i[o],c=o!==u-1?d.lastIndexOf(","):d.length,h=d.substr(0,c),t[s]=isNaN(h)?h.replace(hR,"").trim():+h,s=d.substr(c+1).trim();return t},mR=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<i?e.indexOf(")",i+1):i)},gR=function(e){var t=(e+"").split("("),i=St[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[pR(t[1])]:mR(e).split(",").map(Xv)):St._CE&&dR.test(e)?St._CE("",e):i},_R=function(e){return function(t){return 1-e(1-t)}},Zs=function(e,t){return e&&(rn(e)?e:St[e]||gR(e))||t},ra=function(e,t,i,s){i===void 0&&(i=function(d){return 1-t(1-d)}),s===void 0&&(s=function(d){return d<.5?t(d*2)/2:1-t((1-d)*2)/2});var o={easeIn:t,easeOut:i,easeInOut:s},u;return ii(e,function(c){St[c]=xi[c]=o,St[u=c.toLowerCase()]=i;for(var d in o)St[u+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=St[c+"."+d]=o[d]}),o},ux=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ah=function a(e,t,i){var s=t>=1?t:1,o=(i||(e?.3:.45))/(t<1?t:1),u=o/np*(Math.asin(1/s)||0),c=function(p){return p===1?1:s*Math.pow(2,-10*p)*VA((p-u)*o)+1},d=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:ux(c);return o=np/o,d.config=function(h,p){return a(e,h,p)},d},oh=function a(e,t){t===void 0&&(t=1.70158);var i=function(u){return u?--u*u*((t+1)*u+t)+1:0},s=e==="out"?i:e==="in"?function(o){return 1-i(1-o)}:ux(i);return s.config=function(o){return a(e,o)},s};ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;ra(a+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});St.Linear.easeNone=St.none=St.Linear.easeIn;ra("Elastic",ah("in"),ah("out"),ah());(function(a,e){var t=1/e,i=2*t,s=2.5*t,o=function(c){return c<t?a*c*c:c<i?a*Math.pow(c-1.5/e,2)+.75:c<s?a*(c-=2.25/e)*c+.9375:a*Math.pow(c-2.625/e,2)+.984375};ra("Bounce",function(u){return 1-o(1-u)},o)})(7.5625,2.75);ra("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});ra("Circ",function(a){return-(Uv(1-a*a)-1)});ra("Sine",function(a){return a===1?1:-zA(a*kA)+1});ra("Back",oh("in"),oh("out"),oh());St.SteppedEase=St.steps=xi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,s=e+(t?0:1),o=t?1:0,u=1-kt;return function(c){return((s*Al(0,u,c)|0)+o)*i}}};pl.ease=St["quad.out"];ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Op+=a+","+a+"Params,"});var cx=function(e,t){this.id=BA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Gv,this.set=t?t.getSetter:Gp},xl=(function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,no(this,+t.duration,1,1),this.data=t.data,Yt&&(this._ctx=Yt,Yt.data.push(this)),vl||mi.wake()}var e=a.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,no(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,s){if(io(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(zc(this,i),!o._dp||o.parent||$v(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&or(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===kt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Wv(this,i,s)),this},e.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+N0(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},e.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+N0(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,s){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*o,s):this._repeat?to(this._tTime,o)+1:1},e.timeScale=function(i,s){if(!arguments.length)return this._rts===-kt?0:this._rts;if(this._rts===i)return this;var o=this.parent&&this._ts?bc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-kt?0:this._rts,this.totalTime(Al(-Math.abs(this._delay),this.totalDuration(),o),s!==!1),Bc(this),ZA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(io(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==kt&&(this._tTime-=kt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=jt(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&or(s,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ni(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bc(s.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=qA);var s=bn;return bn=i,Bp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),bn=s,this},e.globalTime=function(i){for(var s=this,o=arguments.length?i:s.rawTime();s;)o=s._start+o/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):o},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,D0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,D0(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,s){return this.totalTime(Pi(this,i),ni(s))},e.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,ni(s)),this._dur||(this._zTime=-kt),this},e.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},e.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-kt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-kt,this},e.isActive=function(){var i=this.parent||this._dp,s=this._start,o;return!!(!i||this._ts&&this._initted&&i.isActive()&&(o=i.rawTime(!0))>=s&&o<this.endTime(!0)-kt)},e.eventCallback=function(i,s,o){var u=this.vars;return arguments.length>1?(s?(u[i]=s,o&&(u[i+"Params"]=o),i==="onUpdate"&&(this._onUpdate=s)):delete u[i],this):u[i]},e.then=function(i){var s=this,o=s._prom;return new Promise(function(u){var c=rn(i)?i:Yv,d=function(){var p=s.then;s.then=null,o&&o(),rn(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=p),u(c),s.then=p};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?d():s._prom=d})},e.kill=function(){il(this)},a})();Si(xl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-kt,_prom:0,_ps:!1,_rts:1});var ei=(function(a){Iv(e,a);function e(i,s){var o;return i===void 0&&(i={}),o=a.call(this,i)||this,o.labels={},o.smoothChildTiming=!!i.smoothChildTiming,o.autoRemoveChildren=!!i.autoRemoveChildren,o._sort=ni(i.sortChildren),Zt&&or(i.parent||Zt,Lr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),i.scrollTrigger&&Kv(Lr(o),i.scrollTrigger),o}var t=e.prototype;return t.to=function(s,o,u){return ll(0,arguments,this),this},t.from=function(s,o,u){return ll(1,arguments,this),this},t.fromTo=function(s,o,u,c){return ll(2,arguments,this),this},t.set=function(s,o,u){return o.duration=0,o.parent=this,ol(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new dn(s,o,Pi(this,u),1),this},t.call=function(s,o,u){return or(this,dn.delayedCall(0,s,o),u)},t.staggerTo=function(s,o,u,c,d,h,p){return u.duration=o,u.stagger=u.stagger||c,u.onComplete=h,u.onCompleteParams=p,u.parent=this,new dn(s,u,Pi(this,d)),this},t.staggerFrom=function(s,o,u,c,d,h,p){return u.runBackwards=1,ol(u).immediateRender=ni(u.immediateRender),this.staggerTo(s,o,u,c,d,h,p)},t.staggerFromTo=function(s,o,u,c,d,h,p,v){return c.startAt=u,ol(c).immediateRender=ni(c.immediateRender),this.staggerTo(s,o,c,d,h,p,v)},t.render=function(s,o,u){var c=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=s<=0?0:jt(s),v=this._zTime<0!=s<0&&(this._initted||!h),g,y,E,M,_,S,R,I,A,b,N,D;if(this!==Zt&&p>d&&s>=0&&(p=d),p!==this._tTime||u||v){if(c!==this._time&&h&&(p+=this._time-c,s+=this._time-c),g=p,A=this._start,I=this._ts,S=!I,v&&(h||(c=this._zTime),(s||!o)&&(this._zTime=s)),this._repeat){if(N=this._yoyo,_=h+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(_*100+s,o,u);if(g=jt(p%_),p===d?(M=this._repeat,g=h):(b=jt(p/_),M=~~b,M&&M===b&&(g=h,M--),g>h&&(g=h)),b=to(this._tTime,_),!c&&this._tTime&&b!==M&&this._tTime-b*_-this._dur<=0&&(b=M),N&&M&1&&(g=h-g,D=1),M!==b&&!this._lock){var T=N&&b&1,L=T===(N&&M&1);if(M<b&&(T=!T),c=T?0:p%h?h:p,this._lock=1,this.render(c||(D?0:jt(M*_)),o,!h)._lock=0,this._tTime=p,!o&&this.parent&&gi(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1,b=M),c&&c!==this._time||S!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,L&&(this._lock=2,c=T?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!S)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=tR(this,jt(c),jt(g)),R&&(p-=g-(g=R._start))),this._tTime=p,this._time=g,this._act=!!I,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,c=0),!c&&p&&h&&!o&&!b&&(gi(this,"onStart"),this._tTime!==p))return this;if(g>=c&&s>=0)for(y=this._first;y;){if(E=y._next,(y._act||g>=y._start)&&y._ts&&R!==y){if(y.parent!==this)return this.render(s,o,u);if(y.render(y._ts>0?(g-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(g-y._start)*y._ts,o,u),g!==this._time||!this._ts&&!S){R=0,E&&(p+=this._zTime=-kt);break}}y=E}else{y=this._last;for(var O=s<0?s:g;y;){if(E=y._prev,(y._act||O<=y._end)&&y._ts&&R!==y){if(y.parent!==this)return this.render(s,o,u);if(y.render(y._ts>0?(O-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(O-y._start)*y._ts,o,u||bn&&Bp(y)),g!==this._time||!this._ts&&!S){R=0,E&&(p+=this._zTime=O?-kt:kt);break}}y=E}}if(R&&!o&&(this.pause(),R.render(g>=c?0:-kt)._zTime=g>=c?1:-1,this._ts))return this._start=A,Bc(this),this.render(s,o,u);this._onUpdate&&!o&&gi(this,"onUpdate",!0),(p===d&&this._tTime>=this.totalDuration()||!p&&c)&&(A===this._start||Math.abs(I)!==Math.abs(this._ts))&&(this._lock||((s||!h)&&(p===d&&this._ts>0||!p&&this._ts<0)&&_s(this,1),!o&&!(s<0&&!c)&&(p||c||!d)&&(gi(this,p===d&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<d&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,o){var u=this;if(Br(o)||(o=Pi(this,o,s)),!(s instanceof xl)){if(Bn(s))return s.forEach(function(c){return u.add(c,o)}),this;if(Tn(s))return this.addLabel(s,o);if(rn(s))s=dn.delayedCall(0,s);else return this}return this!==s?or(this,s,o):this},t.getChildren=function(s,o,u,c){s===void 0&&(s=!0),o===void 0&&(o=!0),u===void 0&&(u=!0),c===void 0&&(c=-Ui);for(var d=[],h=this._first;h;)h._start>=c&&(h instanceof dn?o&&d.push(h):(u&&d.push(h),s&&d.push.apply(d,h.getChildren(!0,o,u)))),h=h._next;return d},t.getById=function(s){for(var o=this.getChildren(1,1,1),u=o.length;u--;)if(o[u].vars.id===s)return o[u]},t.remove=function(s){return Tn(s)?this.removeLabel(s):rn(s)?this.killTweensOf(s):(s.parent===this&&kc(this,s),s===this._recent&&(this._recent=this._last),js(this))},t.totalTime=function(s,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=jt(mi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),a.prototype.totalTime.call(this,s,o),this._forcing=0,this):this._tTime},t.addLabel=function(s,o){return this.labels[s]=Pi(this,o),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,o,u){var c=dn.delayedCall(0,o||gl,u);return c.data="isPause",this._hasPause=1,or(this,c,Pi(this,s))},t.removePause=function(s){var o=this._first;for(s=Pi(this,s);o;)o._start===s&&o.data==="isPause"&&_s(o),o=o._next},t.killTweensOf=function(s,o,u){for(var c=this.getTweensOf(s,u),d=c.length;d--;)ds!==c[d]&&c[d].kill(s,o);return this},t.getTweensOf=function(s,o){for(var u=[],c=Fi(s),d=this._first,h=Br(o),p;d;)d instanceof dn?$A(d._targets,c)&&(h?(!ds||d._initted&&d._ts)&&d.globalTime(0)<=o&&d.globalTime(d.totalDuration())>o:!o||d.isActive())&&u.push(d):(p=d.getTweensOf(c,o)).length&&u.push.apply(u,p),d=d._next;return u},t.tweenTo=function(s,o){o=o||{};var u=this,c=Pi(u,s),d=o,h=d.startAt,p=d.onStart,v=d.onStartParams,g=d.immediateRender,y,E=dn.to(u,Si({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:o.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale())||kt,onStart:function(){if(u.pause(),!y){var _=o.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale());E._dur!==_&&no(E,_,0,1).render(E._time,!0,!0),y=1}p&&p.apply(E,v||[])}},o));return g?E.render(0):E},t.tweenFromTo=function(s,o,u){return this.tweenTo(o,Si({startAt:{time:Pi(this,s)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),I0(this,Pi(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),I0(this,Pi(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+kt)},t.shiftChildren=function(s,o,u){u===void 0&&(u=0);var c=this._first,d=this.labels,h;for(s=jt(s);c;)c._start>=u&&(c._start+=s,c._end+=s),c=c._next;if(o)for(h in d)d[h]>=u&&(d[h]+=s);return js(this)},t.invalidate=function(s){var o=this._first;for(this._lock=0;o;)o.invalidate(s),o=o._next;return a.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var o=this._first,u;o;)u=o._next,this.remove(o),o=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),js(this)},t.totalDuration=function(s){var o=0,u=this,c=u._last,d=Ui,h,p,v;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(v=u.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>d&&u._sort&&c._ts&&!u._lock?(u._lock=1,or(u,c,p-c._delay,1)._lock=0):d=p,p<0&&c._ts&&(o-=p,(!v&&!u._dp||v&&v.smoothChildTiming)&&(u._start+=jt(p/u._ts),u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),d=0),c._end>o&&c._ts&&(o=c._end),c=h;no(u,u===Zt&&u._time>o?u._time:o,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(s){if(Zt._ts&&(Wv(Zt,bc(s,Zt)),Hv=mi.frame),mi.frame>=P0){P0+=vi.autoSleep||120;var o=Zt._first;if((!o||!o._ts)&&vi.autoSleep&&mi._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||mi.sleep()}}},e})(xl);Si(ei.prototype,{_lock:0,_hasPause:0,_forcing:0});var vR=function(e,t,i,s,o,u,c){var d=new ri(this._pt,e,t,0,1,gx,null,o),h=0,p=0,v,g,y,E,M,_,S,R;for(d.b=i,d.e=s,i+="",s+="",(S=~s.indexOf("random("))&&(s=_l(s)),u&&(R=[i,s],u(R,e,t),i=R[0],s=R[1]),g=i.match(ih)||[];v=ih.exec(s);)E=v[0],M=s.substring(h,v.index),y?y=(y+1)%5:M.substr(-5)==="rgba("&&(y=1),E!==g[p++]&&(_=parseFloat(g[p-1])||0,d._pt={_next:d._pt,p:M||p===1?M:",",s:_,c:E.charAt(1)==="="?Ka(_,E)-_:parseFloat(E)-_,m:y&&y<4?Math.round:0},h=ih.lastIndex);return d.c=h<s.length?s.substring(h,s.length):"",d.fp=c,(kv.test(s)||S)&&(d.e=0),this._pt=d,d},zp=function(e,t,i,s,o,u,c,d,h,p){rn(s)&&(s=s(o||0,e,u));var v=e[t],g=i!=="get"?i:rn(v)?h?e[t.indexOf("set")||!rn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():v,y=rn(v)?h?ER:px:Hp,E;if(Tn(s)&&(~s.indexOf("random(")&&(s=_l(s)),s.charAt(1)==="="&&(E=Ka(g,s)+(On(g)||0),(E||E===0)&&(s=E))),!p||g!==s||cp)return!isNaN(g*s)&&s!==""?(E=new ri(this._pt,e,t,+g||0,s-(g||0),typeof v=="boolean"?wR:mx,0,y),h&&(E.fp=h),c&&E.modifier(c,this,e),this._pt=E):(!v&&!(t in e)&&Up(t,s),vR.call(this,e,t,g,s,y,d||vi.stringFilter,h))},xR=function(e,t,i,s,o){if(rn(e)&&(e=ul(e,o,t,i,s)),!gr(e)||e.style&&e.nodeType||Bn(e)||Fv(e))return Tn(e)?ul(e,o,t,i,s):e;var u={},c;for(c in e)u[c]=ul(e[c],o,t,i,s);return u},fx=function(e,t,i,s,o,u){var c,d,h,p;if(pi[e]&&(c=new pi[e]).init(o,c.rawVars?t[e]:xR(t[e],s,o,u,i),i,s,u)!==!1&&(i._pt=d=new ri(i._pt,o,e,0,1,c.render,c,0,c.priority),i!==Ya))for(h=i._ptLookup[i._targets.indexOf(o)],p=c._props.length;p--;)h[c._props[p]]=d;return c},ds,cp,Vp=function a(e,t,i){var s=e.vars,o=s.ease,u=s.startAt,c=s.immediateRender,d=s.lazy,h=s.onUpdate,p=s.runBackwards,v=s.yoyoEase,g=s.keyframes,y=s.autoRevert,E=e._dur,M=e._startAt,_=e._targets,S=e.parent,R=S&&S.data==="nested"?S.vars.targets:_,I=e._overwrite==="auto"&&!Lp,A=e.timeline,b=s.easeReverse||v,N,D,T,L,O,B,W,J,z,Q,ue,K,$;if(A&&(!g||!o)&&(o="none"),e._ease=Zs(o,pl.ease),e._rEase=b&&(Zs(b)||e._ease),e._from=!A&&!!s.runBackwards,e._from&&(e.ratio=1),!A||g&&!s.stagger){if(J=_[0]?Ks(_[0]).harness:0,K=J&&s[J.prop],N=Cc(s,Fp),M&&(M._zTime<0&&M.progress(1),t<0&&p&&c&&!y?M.render(-1,!0):M.revert(p&&E?mc:YA),M._lazy=0),u){if(_s(e._startAt=dn.set(_,Si({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!M&&ni(d),startAt:null,delay:0,onUpdate:h&&function(){return gi(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn||!c&&!y)&&e._startAt.revert(mc),c&&E&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(p&&E&&!M){if(t&&(c=!1),T=Si({overwrite:!1,data:"isFromStart",lazy:c&&!M&&ni(d),immediateRender:c,stagger:0,parent:S},N),K&&(T[J.prop]=K),_s(e._startAt=dn.set(_,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn?e._startAt.revert(mc):e._startAt.render(-1,!0)),e._zTime=t,!c)a(e._startAt,kt,kt);else if(!t)return}for(e._pt=e._ptCache=0,d=E&&ni(d)||d&&!E,D=0;D<_.length;D++){if(O=_[D],W=O._gsap||kp(_)[D]._gsap,e._ptLookup[D]=Q={},rp[W.id]&&ms.length&&Rc(),ue=R===_?D:R.indexOf(O),J&&(z=new J).init(O,K||N,e,ue,R)!==!1&&(e._pt=L=new ri(e._pt,O,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(j){Q[j]=L}),z.priority&&(B=1)),!J||K)for(T in N)pi[T]&&(z=fx(T,N,e,ue,O,R))?z.priority&&(B=1):Q[T]=L=zp.call(e,O,T,"get",N[T],ue,R,0,s.stringFilter);e._op&&e._op[D]&&e.kill(O,e._op[D]),I&&e._pt&&(ds=e,Zt.killTweensOf(O,Q,e.globalTime(t)),$=!e.parent,ds=0),e._pt&&d&&(rp[W.id]=1)}B&&_x(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!$,g&&t<=0&&A.render(Ui,!0,!0)},SR=function(e,t,i,s,o,u,c,d){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,v,g,y;if(!h)for(h=e._ptCache[t]=[],g=e._ptLookup,y=e._targets.length;y--;){if(p=g[y][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return cp=1,e.vars[t]="+=0",Vp(e,c),cp=0,d?ml(t+" not eligible for reset. Try splitting into individual properties"):1;h.push(p)}for(y=h.length;y--;)v=h[y],p=v._pt||v,p.s=(s||s===0)&&!o?s:p.s+(s||0)+u*p.c,p.c=i-p.s,v.e&&(v.e=ln(i)+On(v.e)),v.b&&(v.b=p.s+On(v.b))},yR=function(e,t){var i=e[0]?Ks(e[0]).harness:0,s=i&&i.aliases,o,u,c,d;if(!s)return t;o=eo({},t);for(u in s)if(u in o)for(d=s[u].split(","),c=d.length;c--;)o[d[c]]=o[u];return o},MR=function(e,t,i,s){var o=t.ease||s||"power1.inOut",u,c;if(Bn(t))c=i[e]||(i[e]=[]),t.forEach(function(d,h){return c.push({t:h/(t.length-1)*100,v:d,e:o})});else for(u in t)c=i[u]||(i[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:o})},ul=function(e,t,i,s,o){return rn(e)?e.call(t,i,s,o):Tn(e)&&~e.indexOf("random(")?_l(e):e},dx=Op+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",hx={};ii(dx+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return hx[a]=1});var dn=(function(a){Iv(e,a);function e(i,s,o,u){var c;typeof s=="number"&&(o.duration=s,s=o,o=null),c=a.call(this,u?s:ol(s))||this;var d=c.vars,h=d.duration,p=d.delay,v=d.immediateRender,g=d.stagger,y=d.overwrite,E=d.keyframes,M=d.defaults,_=d.scrollTrigger,S=s.parent||Zt,R=(Bn(i)||Fv(i)?Br(i[0]):"length"in s)?[i]:Fi(i),I,A,b,N,D,T,L,O;if(c._targets=R.length?kp(R):ml("GSAP target "+i+" not found. https://gsap.com",!vi.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=y,E||g||oc(h)||oc(p)){s=c.vars;var B=s.easeReverse||s.yoyoEase;if(I=c.timeline=new ei({data:"nested",defaults:M||{},targets:S&&S.data==="nested"?S.vars.targets:R}),I.kill(),I.parent=I._dp=Lr(c),I._start=0,g||oc(h)||oc(p)){if(N=R.length,L=g&&Jv(g),gr(g))for(D in g)~dx.indexOf(D)&&(O||(O={}),O[D]=g[D]);for(A=0;A<N;A++)b=Cc(s,hx),b.stagger=0,B&&(b.easeReverse=B),O&&eo(b,O),T=R[A],b.duration=+ul(h,Lr(c),A,T,R),b.delay=(+ul(p,Lr(c),A,T,R)||0)-c._delay,!g&&N===1&&b.delay&&(c._delay=p=b.delay,c._start+=p,b.delay=0),I.to(T,b,L?L(A,T,R):0),I._ease=St.none;I.duration()?h=p=0:c.timeline=0}else if(E){ol(Si(I.vars.defaults,{ease:"none"})),I._ease=Zs(E.ease||s.ease||"none");var W=0,J,z,Q;if(Bn(E))E.forEach(function(ue){return I.to(R,ue,">")}),I.duration();else{b={};for(D in E)D==="ease"||D==="easeEach"||MR(D,E[D],b,E.easeEach);for(D in b)for(J=b[D].sort(function(ue,K){return ue.t-K.t}),W=0,A=0;A<J.length;A++)z=J[A],Q={ease:z.e,duration:(z.t-(A?J[A-1].t:0))/100*h},Q[D]=z.v,I.to(R,Q,W),W+=Q.duration;I.duration()<h&&I.to({},{duration:h-I.duration()})}}h||c.duration(h=I.duration())}else c.timeline=0;return y===!0&&!Lp&&(ds=Lr(c),Zt.killTweensOf(R),ds=0),or(S,Lr(c),o),s.reversed&&c.reverse(),s.paused&&c.paused(!0),(v||!h&&!E&&c._start===jt(S._time)&&ni(v)&&QA(Lr(c))&&S.data!=="nested")&&(c._tTime=-kt,c.render(Math.max(0,-p)||0)),_&&Kv(Lr(c),_),c}var t=e.prototype;return t.render=function(s,o,u){var c=this._time,d=this._tDur,h=this._dur,p=s<0,v=s>d-kt&&!p?d:s<kt?0:s,g,y,E,M,_,S,R,I;if(!h)eR(this,s,o,u);else if(v!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(g=v,I=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(M*100+s,o,u);if(g=jt(v%M),v===d?(E=this._repeat,g=h):(_=jt(v/M),E=~~_,E&&E===_?(g=h,E--):g>h&&(g=h)),S=this._yoyo&&E&1,S&&(g=h-g),_=to(this._tTime,M),g===c&&!u&&this._initted&&E===_)return this._tTime=v,this;E!==_&&this.vars.repeatRefresh&&!S&&!this._lock&&g!==M&&this._initted&&(this._lock=u=1,this.render(jt(M*E),!0).invalidate()._lock=0)}if(!this._initted){if(jv(this,p?s:g,u,o,v))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&E!==_))return this;if(h!==this._dur)return this.render(s,o,u)}if(this._rEase){var A=g<c;if(A!==this._inv){var b=A?c:h-c;this._inv=A,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=c,this._invRecip=b?(A?-1:1)/b:0,this._invScale=A?-this.ratio:1-this.ratio,this._invEase=A?this._rEase:this._ease}this.ratio=R=this._invRatio+this._invScale*this._invEase((g-this._invTime)*this._invRecip)}else this.ratio=R=this._ease(g/h);if(this._from&&(this.ratio=R=1-R),this._tTime=v,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),!c&&v&&!o&&!_&&(gi(this,"onStart"),this._tTime!==v))return this;for(y=this._pt;y;)y.r(R,y.d),y=y._next;I&&I.render(s<0?s:I._dur*I._ease(g/this._dur),o,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!o&&(p&&sp(this,s,o,u),gi(this,"onUpdate")),this._repeat&&E!==_&&this.vars.onRepeat&&!o&&this.parent&&gi(this,"onRepeat"),(v===this._tDur||!v)&&this._tTime===v&&(p&&!this._onUpdate&&sp(this,s,!0,!0),(s||!h)&&(v===this._tDur&&this._ts>0||!v&&this._ts<0)&&_s(this,1),!o&&!(p&&!c)&&(v||c||S)&&(gi(this,v===d?"onComplete":"onReverseComplete",!0),this._prom&&!(v<d&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),a.prototype.invalidate.call(this,s)},t.resetTo=function(s,o,u,c,d){vl||mi.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Vp(this,h),p=this._ease(h/this._dur),SR(this,s,o,u,c,p,h,d)?this.resetTo(s,o,u,c,1):(zc(this,0),this.parent||qv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,o){if(o===void 0&&(o="all"),!s&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?il(this):this.scrollTrigger&&this.scrollTrigger.kill(!!bn),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,o,ds&&ds.vars.overwrite!==!0)._first||il(this),this.parent&&u!==this.timeline.totalDuration()&&no(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,d=s?Fi(s):c,h=this._ptLookup,p=this._pt,v,g,y,E,M,_,S;if((!o||o==="all")&&jA(c,d))return o==="all"&&(this._pt=0),il(this);for(v=this._op=this._op||[],o!=="all"&&(Tn(o)&&(M={},ii(o,function(R){return M[R]=1}),o=M),o=yR(c,o)),S=c.length;S--;)if(~d.indexOf(c[S])){g=h[S],o==="all"?(v[S]=o,E=g,y={}):(y=v[S]=v[S]||{},E=o);for(M in E)_=g&&g[M],_&&((!("kill"in _.d)||_.d.kill(M)===!0)&&kc(this,_,"_pt"),delete g[M]),y!=="all"&&(y[M]=1)}return this._initted&&!this._pt&&p&&il(this),this},e.to=function(s,o){return new e(s,o,arguments[2])},e.from=function(s,o){return ll(1,arguments)},e.delayedCall=function(s,o,u,c){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:o,onReverseComplete:o,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(s,o,u){return ll(2,arguments)},e.set=function(s,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(s,o)},e.killTweensOf=function(s,o,u){return Zt.killTweensOf(s,o,u)},e})(xl);Si(dn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ii("staggerTo,staggerFrom,staggerFromTo",function(a){dn[a]=function(){var e=new ei,t=op.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var Hp=function(e,t,i){return e[t]=i},px=function(e,t,i){return e[t](i)},ER=function(e,t,i,s){return e[t](s.fp,i)},TR=function(e,t,i){return e.setAttribute(t,i)},Gp=function(e,t){return rn(e[t])?px:Np(e[t])&&e.setAttribute?TR:Hp},mx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},wR=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},gx=function(e,t){var i=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+s,i=i._next;s+=t.c}t.set(t.t,t.p,s,t)},Wp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},AR=function(e,t,i,s){for(var o=this._pt,u;o;)u=o._next,o.p===s&&o.modifier(e,t,i),o=u},RR=function(e){for(var t=this._pt,i,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?kc(this,t,"_pt"):t.dep||(i=1),t=s;return!i},CR=function(e,t,i,s){s.mSet(e,t,s.m.call(s.tween,i,s.mt),s)},_x=function(e){for(var t=e._pt,i,s,o,u;t;){for(i=t._next,s=o;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:u)?t._prev._next=t:o=t,(t._next=s)?s._prev=t:u=t,t=i}e._pt=o},ri=(function(){function a(t,i,s,o,u,c,d,h,p){this.t=i,this.s=o,this.c=u,this.p=s,this.r=c||mx,this.d=d||this,this.set=h||Hp,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(i,s,o){this.mSet=this.mSet||this.set,this.set=CR,this.m=i,this.mt=o,this.tween=s},a})();ii(Op+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(a){return Fp[a]=1});xi.TweenMax=xi.TweenLite=dn;xi.TimelineLite=xi.TimelineMax=ei;Zt=new ei({sortChildren:!1,defaults:pl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});vi.stringFilter=lx;var Qs=[],_c={},bR=[],F0=0,PR=0,lh=function(e){return(_c[e]||bR).map(function(t){return t()})},fp=function(){var e=Date.now(),t=[];e-F0>2&&(lh("matchMediaInit"),Qs.forEach(function(i){var s=i.queries,o=i.conditions,u,c,d,h;for(c in s)u=sr.matchMedia(s[c]).matches,u&&(d=1),u!==o[c]&&(o[c]=u,h=1);h&&(i.revert(),d&&t.push(i))}),lh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),F0=e,lh("matchMedia"))},vx=(function(){function a(t,i){this.selector=i&&lp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=PR++,t&&this.add(t)}var e=a.prototype;return e.add=function(i,s,o){rn(i)&&(o=s,s=i,i=rn);var u=this,c=function(){var h=Yt,p=u.selector,v;return h&&h!==u&&h.data.push(u),o&&(u.selector=lp(o)),Yt=u,v=s.apply(u,arguments),rn(v)&&u._r.push(v),Yt=h,u.selector=p,u.isReverted=!1,v};return u.last=c,i===rn?c(u,function(d){return u.add(null,d)}):i?u[i]=c:c},e.ignore=function(i){var s=Yt;Yt=null,i(this),Yt=s},e.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof a?i.push.apply(i,s.getTweens()):s instanceof dn&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,s){var o=this;if(i?(function(){for(var c=o.getTweens(),d=o.data.length,h;d--;)h=o.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,v){return v.g-p.g||-1/0}).forEach(function(p){return p.t.revert(i)}),d=o.data.length;d--;)h=o.data[d],h instanceof ei?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof dn)&&h.revert&&h.revert(i);o._r.forEach(function(p){return p(i,o)}),o.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),s)for(var u=Qs.length;u--;)Qs[u].id===this.id&&Qs.splice(u,1)},e.revert=function(i){this.kill(i||{})},a})(),LR=(function(){function a(t){this.contexts=[],this.scope=t,Yt&&Yt.data.push(this)}var e=a.prototype;return e.add=function(i,s,o){gr(i)||(i={matches:i});var u=new vx(0,o||this.scope),c=u.conditions={},d,h,p;Yt&&!u.selector&&(u.selector=Yt.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=i;for(h in i)h==="all"?p=1:(d=sr.matchMedia(i[h]),d&&(Qs.indexOf(u)<0&&Qs.push(u),(c[h]=d.matches)&&(p=1),d.addListener?d.addListener(fp):d.addEventListener("change",fp)));return p&&s(u,function(v){return u.add(null,v)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},a})(),Pc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(s){return sx(s)})},timeline:function(e){return new ei(e)},getTweensOf:function(e,t){return Zt.getTweensOf(e,t)},getProperty:function(e,t,i,s){Tn(e)&&(e=Fi(e)[0]);var o=Ks(e||{}).get,u=i?Yv:Xv;return i==="native"&&(i=""),e&&(t?u((pi[t]&&pi[t].get||o)(e,t,i,s)):function(c,d,h){return u((pi[c]&&pi[c].get||o)(e,c,d,h))})},quickSetter:function(e,t,i){if(e=Fi(e),e.length>1){var s=e.map(function(p){return ai.quickSetter(p,t,i)}),o=s.length;return function(p){for(var v=o;v--;)s[v](p)}}e=e[0]||{};var u=pi[t],c=Ks(e),d=c.harness&&(c.harness.aliases||{})[t]||t,h=u?function(p){var v=new u;Ya._pt=0,v.init(e,i?p+i:p,Ya,0,[e]),v.render(1,v),Ya._pt&&Wp(1,Ya)}:c.set(e,d);return u?h:function(p){return h(e,d,i?p+i:p,c,1)}},quickTo:function(e,t,i){var s,o=ai.to(e,Si((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),u=function(d,h,p){return o.resetTo(t,d,h,p)};return u.tween=o,u},isTweening:function(e){return Zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Zs(e.ease,pl.ease)),L0(pl,e||{})},config:function(e){return L0(vi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,s=e.plugins,o=e.defaults,u=e.extendTimeline;(s||"").split(",").forEach(function(c){return c&&!pi[c]&&!xi[c]&&ml(t+" effect requires "+c+" plugin.")}),rh[t]=function(c,d,h){return i(Fi(c),Si(d||{},o),h)},u&&(ei.prototype[t]=function(c,d,h){return this.add(rh[t](c,gr(d)?d:(h=d)&&{},this),h)})},registerEase:function(e,t){St[e]=Zs(t)},parseEase:function(e,t){return arguments.length?Zs(e,t):St},getById:function(e){return Zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ei(e),s,o;for(i.smoothChildTiming=ni(e.smoothChildTiming),Zt.remove(i),i._dp=0,i._time=i._tTime=Zt._time,s=Zt._first;s;)o=s._next,(t||!(!s._dur&&s instanceof dn&&s.vars.onComplete===s._targets[0]))&&or(i,s,s._start-s._delay),s=o;return or(Zt,i,0),i},context:function(e,t){return e?new vx(e,t):Yt},matchMedia:function(e){return new LR(e)},matchMediaRefresh:function(){return Qs.forEach(function(e){var t=e.conditions,i,s;for(s in t)t[s]&&(t[s]=!1,i=1);i&&e.revert()})||fp()},addEventListener:function(e,t){var i=_c[e]||(_c[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=_c[e],s=i&&i.indexOf(t);s>=0&&i.splice(s,1)},utils:{wrap:lR,wrapYoyo:uR,distribute:Jv,random:tx,snap:ex,normalize:oR,getUnit:On,clamp:iR,splitColor:ax,toArray:Fi,selector:lp,mapRange:ix,pipe:sR,unitize:aR,interpolate:cR,shuffle:Qv},install:zv,effects:rh,ticker:mi,updateRoot:ei.updateRoot,plugins:pi,globalTimeline:Zt,core:{PropTween:ri,globals:Vv,Tween:dn,Timeline:ei,Animation:xl,getCache:Ks,_removeLinkedListItem:kc,reverting:function(){return bn},context:function(e){return e&&Yt&&(Yt.data.push(e),e._ctx=Yt),Yt},suppressOverwrites:function(e){return Lp=e}}};ii("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Pc[a]=dn[a]});mi.add(ei.updateRoot);Ya=Pc.to({},{duration:0});var NR=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},DR=function(e,t){var i=e._targets,s,o,u;for(s in t)for(o=i.length;o--;)u=e._ptLookup[o][s],u&&(u=u.d)&&(u._pt&&(u=NR(u,s)),u&&u.modifier&&u.modifier(t[s],e,i[o],s))},uh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,o,u){u._onInit=function(c){var d,h;if(Tn(o)&&(d={},ii(o,function(p){return d[p]=1}),o=d),t){d={};for(h in o)d[h]=t(o[h]);o=d}DR(c,o)}}}},ai=Pc.registerPlugin({name:"attr",init:function(e,t,i,s,o){var u,c,d;this.tween=i;for(u in t)d=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(d||0)+"",t[u],s,o,0,0,u),c.op=u,c.b=d,this._props.push(u)},render:function(e,t){for(var i=t._pt;i;)bn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},uh("roundProps",up),uh("modifiers"),uh("snap",ex))||Pc;dn.version=ei.version=ai.version="3.15.0";Bv=1;Dp()&&io();St.Power0;St.Power1;St.Power2;St.Power3;St.Power4;St.Linear;St.Quad;St.Cubic;St.Quart;St.Quint;St.Strong;St.Elastic;St.Back;St.SteppedEase;St.Bounce;St.Sine;St.Expo;St.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var O0,hs,ja,Xp,$s,k0,Yp,IR=function(){return typeof window<"u"},zr={},Xs=180/Math.PI,Za=Math.PI/180,Ha=Math.atan2,B0=1e8,qp=/([A-Z])/g,UR=/(left|right|width|margin|padding|x)/i,FR=/[\s,\(]\S/,cr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},dp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},OR=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kR=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},BR=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},zR=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},xx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Sx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},VR=function(e,t,i){return e.style[t]=i},HR=function(e,t,i){return e.style.setProperty(t,i)},GR=function(e,t,i){return e._gsap[t]=i},WR=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},XR=function(e,t,i,s,o){var u=e._gsap;u.scaleX=u.scaleY=i,u.renderTransform(o,u)},YR=function(e,t,i,s,o){var u=e._gsap;u[t]=i,u.renderTransform(o,u)},Qt="transform",si=Qt+"Origin",qR=function a(e,t){var i=this,s=this.target,o=s.style,u=s._gsap;if(e in zr&&o){if(this.tfm=this.tfm||{},e!=="transform")e=cr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return i.tfm[c]=Nr(s,c)}):this.tfm[e]=u.x?u[e]:Nr(s,e),e===si&&(this.tfm.zOrigin=u.zOrigin);else return cr.transform.split(",").forEach(function(c){return a.call(i,c,t)});if(this.props.indexOf(Qt)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(si,t,"")),e=Qt}(o||t)&&this.props.push(e,t,o[e])},yx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},$R=function(){var e=this.props,t=this.target,i=t.style,s=t._gsap,o,u;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?i[e[o]]=e[o+2]:i.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(qp,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=Yp(),(!o||!o.isStart)&&!i[Qt]&&(yx(i),s.zOrigin&&i[si]&&(i[si]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},Mx=function(e,t){var i={target:e,props:[],revert:$R,save:qR};return e._gsap||ai.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return i.save(s)}),i},Ex,hp=function(e,t){var i=hs.createElementNS?hs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hs.createElement(e);return i&&i.style?i:hs.createElement(e)},_i=function a(e,t,i){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(qp,"-$1").toLowerCase())||s.getPropertyValue(t)||!i&&a(e,ro(t)||t,1)||""},z0="O,Moz,ms,Ms,Webkit".split(","),ro=function(e,t,i){var s=t||$s,o=s.style,u=5;if(e in o&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(z0[u]+e in o););return u<0?null:(u===3?"ms":u>=0?z0[u]:"")+e},pp=function(){IR()&&window.document&&(O0=window,hs=O0.document,ja=hs.documentElement,$s=hp("div")||{style:{}},hp("div"),Qt=ro(Qt),si=Qt+"Origin",$s.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ex=!!ro("perspective"),Yp=ai.core.reverting,Xp=1)},V0=function(e){var t=e.ownerSVGElement,i=hp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),o;s.style.display="block",i.appendChild(s),ja.appendChild(i);try{o=s.getBBox()}catch{}return i.removeChild(s),ja.removeChild(i),o},H0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Tx=function(e){var t,i;try{t=e.getBBox()}catch{t=V0(e),i=1}return t&&(t.width||t.height)||i||(t=V0(e)),t&&!t.width&&!t.x&&!t.y?{x:+H0(e,["x","cx","x1"])||0,y:+H0(e,["y","cy","y1"])||0,width:0,height:0}:t},wx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Tx(e))},vs=function(e,t){if(t){var i=e.style,s;t in zr&&t!==si&&(t=Qt),i.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(s==="--"?t:t.replace(qp,"-$1").toLowerCase())):i.removeAttribute(t)}},ps=function(e,t,i,s,o,u){var c=new ri(e._pt,t,i,0,1,u?Sx:xx);return e._pt=c,c.b=s,c.e=o,e._props.push(i),c},G0={deg:1,rad:1,turn:1},KR={grid:1,flex:1},xs=function a(e,t,i,s){var o=parseFloat(i)||0,u=(i+"").trim().substr((o+"").length)||"px",c=$s.style,d=UR.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(d?"Width":"Height"),v=100,g=s==="px",y=s==="%",E,M,_,S;if(s===u||!o||G0[s]||G0[u])return o;if(u!=="px"&&!g&&(o=a(e,t,i,"px")),S=e.getCTM&&wx(e),(y||u==="%")&&(zr[t]||~t.indexOf("adius")))return E=S?e.getBBox()[d?"width":"height"]:e[p],ln(y?o/E*v:o/100*E);if(c[d?"width":"height"]=v+(g?u:s),M=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!h?e:e.parentNode,S&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===hs||!M.appendChild)&&(M=hs.body),_=M._gsap,_&&y&&_.width&&d&&_.time===mi.time&&!_.uncache)return ln(o/_.width*v);if(y&&(t==="height"||t==="width")){var R=e.style[t];e.style[t]=v+s,E=e[p],R?e.style[t]=R:vs(e,t)}else(y||u==="%")&&!KR[_i(M,"display")]&&(c.position=_i(e,"position")),M===e&&(c.position="static"),M.appendChild($s),E=$s[p],M.removeChild($s),c.position="absolute";return d&&y&&(_=Ks(M),_.time=mi.time,_.width=M[p]),ln(g?E*o/v:E&&o?v/E*o:0)},Nr=function(e,t,i,s){var o;return Xp||pp(),t in cr&&t!=="transform"&&(t=cr[t],~t.indexOf(",")&&(t=t.split(",")[0])),zr[t]&&t!=="transform"?(o=yl(e,s),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:Nc(_i(e,si))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||s||~(o+"").indexOf("calc("))&&(o=Lc[t]&&Lc[t](e,t,i)||_i(e,t)||Gv(e,t)||(t==="opacity"?1:0))),i&&!~(o+"").trim().indexOf(" ")?xs(e,t,o,i)+i:o},jR=function(e,t,i,s){if(!i||i==="none"){var o=ro(t,e,1),u=o&&_i(e,o,1);u&&u!==i?(t=o,i=u):t==="borderColor"&&(i=_i(e,"borderTopColor"))}var c=new ri(this._pt,e.style,t,0,1,gx),d=0,h=0,p,v,g,y,E,M,_,S,R,I,A,b;if(c.b=i,c.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=_i(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=e.style[t],e.style[t]=s,s=_i(e,t)||s,M?e.style[t]=M:vs(e,t)),p=[i,s],lx(p),i=p[0],s=p[1],g=i.match(Xa)||[],b=s.match(Xa)||[],b.length){for(;v=Xa.exec(s);)_=v[0],R=s.substring(d,v.index),E?E=(E+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(E=1),_!==(M=g[h++]||"")&&(y=parseFloat(M)||0,A=M.substr((y+"").length),_.charAt(1)==="="&&(_=Ka(y,_)+A),S=parseFloat(_),I=_.substr((S+"").length),d=Xa.lastIndex-I.length,I||(I=I||vi.units[t]||A,d===s.length&&(s+=I,c.e+=I)),A!==I&&(y=xs(e,t,M,I)||0),c._pt={_next:c._pt,p:R||h===1?R:",",s:y,c:S-y,m:E&&E<4||t==="zIndex"?Math.round:0});c.c=d<s.length?s.substring(d,s.length):""}else c.r=t==="display"&&s==="none"?Sx:xx;return kv.test(s)&&(c.e=0),this._pt=c,c},W0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ZR=function(e){var t=e.split(" "),i=t[0],s=t[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(e=i,i=s,s=e),t[0]=W0[i]||i,t[1]=W0[s]||s,t.join(" ")},QR=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,s=i.style,o=t.u,u=i._gsap,c,d,h;if(o==="all"||o===!0)s.cssText="",d=1;else for(o=o.split(","),h=o.length;--h>-1;)c=o[h],zr[c]&&(d=1,c=c==="transformOrigin"?si:Qt),vs(i,c);d&&(vs(i,Qt),u&&(u.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",yl(i,1),u.uncache=1,yx(s)))}},Lc={clearProps:function(e,t,i,s,o){if(o.data!=="isFromStart"){var u=e._pt=new ri(e._pt,t,i,0,0,QR);return u.u=s,u.pr=-10,u.tween=o,e._props.push(i),1}}},Sl=[1,0,0,1,0,0],Ax={},Rx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},X0=function(e){var t=_i(e,Qt);return Rx(t)?Sl:t.substr(7).match(Ov).map(ln)},$p=function(e,t){var i=e._gsap||Ks(e),s=e.style,o=X0(e),u,c,d,h;return i.svg&&e.getAttribute("transform")?(d=e.transform.baseVal.consolidate().matrix,o=[d.a,d.b,d.c,d.d,d.e,d.f],o.join(",")==="1,0,0,1,0,0"?Sl:o):(o===Sl&&!e.offsetParent&&e!==ja&&!i.svg&&(d=s.display,s.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,c=e.nextElementSibling,ja.appendChild(e)),o=X0(e),d?s.display=d:vs(e,"display"),h&&(c?u.insertBefore(e,c):u?u.appendChild(e):ja.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},mp=function(e,t,i,s,o,u){var c=e._gsap,d=o||$p(e,!0),h=c.xOrigin||0,p=c.yOrigin||0,v=c.xOffset||0,g=c.yOffset||0,y=d[0],E=d[1],M=d[2],_=d[3],S=d[4],R=d[5],I=t.split(" "),A=parseFloat(I[0])||0,b=parseFloat(I[1])||0,N,D,T,L;i?d!==Sl&&(D=y*_-E*M)&&(T=A*(_/D)+b*(-M/D)+(M*R-_*S)/D,L=A*(-E/D)+b*(y/D)-(y*R-E*S)/D,A=T,b=L):(N=Tx(e),A=N.x+(~I[0].indexOf("%")?A/100*N.width:A),b=N.y+(~(I[1]||I[0]).indexOf("%")?b/100*N.height:b)),s||s!==!1&&c.smooth?(S=A-h,R=b-p,c.xOffset=v+(S*y+R*M)-S,c.yOffset=g+(S*E+R*_)-R):c.xOffset=c.yOffset=0,c.xOrigin=A,c.yOrigin=b,c.smooth=!!s,c.origin=t,c.originIsAbsolute=!!i,e.style[si]="0px 0px",u&&(ps(u,c,"xOrigin",h,A),ps(u,c,"yOrigin",p,b),ps(u,c,"xOffset",v,c.xOffset),ps(u,c,"yOffset",g,c.yOffset)),e.setAttribute("data-svg-origin",A+" "+b)},yl=function(e,t){var i=e._gsap||new cx(e);if("x"in i&&!t&&!i.uncache)return i;var s=e.style,o=i.scaleX<0,u="px",c="deg",d=getComputedStyle(e),h=_i(e,si)||"0",p,v,g,y,E,M,_,S,R,I,A,b,N,D,T,L,O,B,W,J,z,Q,ue,K,$,j,Z,U,ne,xe,Le,Ie;return p=v=g=M=_=S=R=I=A=0,y=E=1,i.svg=!!(e.getCTM&&wx(e)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(s[Qt]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[Qt]!=="none"?d[Qt]:"")),s.scale=s.rotate=s.translate="none"),D=$p(e,i.svg),i.svg&&(i.uncache?($=e.getBBox(),h=i.xOrigin-$.x+"px "+(i.yOrigin-$.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),mp(e,K||h,!!K||i.originIsAbsolute,i.smooth!==!1,D)),b=i.xOrigin||0,N=i.yOrigin||0,D!==Sl&&(B=D[0],W=D[1],J=D[2],z=D[3],p=Q=D[4],v=ue=D[5],D.length===6?(y=Math.sqrt(B*B+W*W),E=Math.sqrt(z*z+J*J),M=B||W?Ha(W,B)*Xs:0,R=J||z?Ha(J,z)*Xs+M:0,R&&(E*=Math.abs(Math.cos(R*Za))),i.svg&&(p-=b-(b*B+N*J),v-=N-(b*W+N*z))):(Ie=D[6],xe=D[7],Z=D[8],U=D[9],ne=D[10],Le=D[11],p=D[12],v=D[13],g=D[14],T=Ha(Ie,ne),_=T*Xs,T&&(L=Math.cos(-T),O=Math.sin(-T),K=Q*L+Z*O,$=ue*L+U*O,j=Ie*L+ne*O,Z=Q*-O+Z*L,U=ue*-O+U*L,ne=Ie*-O+ne*L,Le=xe*-O+Le*L,Q=K,ue=$,Ie=j),T=Ha(-J,ne),S=T*Xs,T&&(L=Math.cos(-T),O=Math.sin(-T),K=B*L-Z*O,$=W*L-U*O,j=J*L-ne*O,Le=z*O+Le*L,B=K,W=$,J=j),T=Ha(W,B),M=T*Xs,T&&(L=Math.cos(T),O=Math.sin(T),K=B*L+W*O,$=Q*L+ue*O,W=W*L-B*O,ue=ue*L-Q*O,B=K,Q=$),_&&Math.abs(_)+Math.abs(M)>359.9&&(_=M=0,S=180-S),y=ln(Math.sqrt(B*B+W*W+J*J)),E=ln(Math.sqrt(ue*ue+Ie*Ie)),T=Ha(Q,ue),R=Math.abs(T)>2e-4?T*Xs:0,A=Le?1/(Le<0?-Le:Le):0),i.svg&&(K=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Rx(_i(e,Qt)),K&&e.setAttribute("transform",K))),Math.abs(R)>90&&Math.abs(R)<270&&(o?(y*=-1,R+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,R+=R<=0?180:-180)),t=t||i.uncache,i.x=p-((i.xPercent=p&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+u,i.y=v-((i.yPercent=v&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-v)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+u,i.z=g+u,i.scaleX=ln(y),i.scaleY=ln(E),i.rotation=ln(M)+c,i.rotationX=ln(_)+c,i.rotationY=ln(S)+c,i.skewX=R+c,i.skewY=I+c,i.transformPerspective=A+u,(i.zOrigin=parseFloat(h.split(" ")[2])||!t&&i.zOrigin||0)&&(s[si]=Nc(h)),i.xOffset=i.yOffset=0,i.force3D=vi.force3D,i.renderTransform=i.svg?eC:Ex?Cx:JR,i.uncache=0,i},Nc=function(e){return(e=e.split(" "))[0]+" "+e[1]},ch=function(e,t,i){var s=On(t);return ln(parseFloat(t)+parseFloat(xs(e,"x",i+"px",s)))+s},JR=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Cx(e,t)},Gs="0deg",el="0px",Ws=") ",Cx=function(e,t){var i=t||this,s=i.xPercent,o=i.yPercent,u=i.x,c=i.y,d=i.z,h=i.rotation,p=i.rotationY,v=i.rotationX,g=i.skewX,y=i.skewY,E=i.scaleX,M=i.scaleY,_=i.transformPerspective,S=i.force3D,R=i.target,I=i.zOrigin,A="",b=S==="auto"&&e&&e!==1||S===!0;if(I&&(v!==Gs||p!==Gs)){var N=parseFloat(p)*Za,D=Math.sin(N),T=Math.cos(N),L;N=parseFloat(v)*Za,L=Math.cos(N),u=ch(R,u,D*L*-I),c=ch(R,c,-Math.sin(N)*-I),d=ch(R,d,T*L*-I+I)}_!==el&&(A+="perspective("+_+Ws),(s||o)&&(A+="translate("+s+"%, "+o+"%) "),(b||u!==el||c!==el||d!==el)&&(A+=d!==el||b?"translate3d("+u+", "+c+", "+d+") ":"translate("+u+", "+c+Ws),h!==Gs&&(A+="rotate("+h+Ws),p!==Gs&&(A+="rotateY("+p+Ws),v!==Gs&&(A+="rotateX("+v+Ws),(g!==Gs||y!==Gs)&&(A+="skew("+g+", "+y+Ws),(E!==1||M!==1)&&(A+="scale("+E+", "+M+Ws),R.style[Qt]=A||"translate(0, 0)"},eC=function(e,t){var i=t||this,s=i.xPercent,o=i.yPercent,u=i.x,c=i.y,d=i.rotation,h=i.skewX,p=i.skewY,v=i.scaleX,g=i.scaleY,y=i.target,E=i.xOrigin,M=i.yOrigin,_=i.xOffset,S=i.yOffset,R=i.forceCSS,I=parseFloat(u),A=parseFloat(c),b,N,D,T,L;d=parseFloat(d),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,d+=p),d||h?(d*=Za,h*=Za,b=Math.cos(d)*v,N=Math.sin(d)*v,D=Math.sin(d-h)*-g,T=Math.cos(d-h)*g,h&&(p*=Za,L=Math.tan(h-p),L=Math.sqrt(1+L*L),D*=L,T*=L,p&&(L=Math.tan(p),L=Math.sqrt(1+L*L),b*=L,N*=L)),b=ln(b),N=ln(N),D=ln(D),T=ln(T)):(b=v,T=g,N=D=0),(I&&!~(u+"").indexOf("px")||A&&!~(c+"").indexOf("px"))&&(I=xs(y,"x",u,"px"),A=xs(y,"y",c,"px")),(E||M||_||S)&&(I=ln(I+E-(E*b+M*D)+_),A=ln(A+M-(E*N+M*T)+S)),(s||o)&&(L=y.getBBox(),I=ln(I+s/100*L.width),A=ln(A+o/100*L.height)),L="matrix("+b+","+N+","+D+","+T+","+I+","+A+")",y.setAttribute("transform",L),R&&(y.style[Qt]=L)},tC=function(e,t,i,s,o){var u=360,c=Tn(o),d=parseFloat(o)*(c&&~o.indexOf("rad")?Xs:1),h=d-s,p=s+h+"deg",v,g;return c&&(v=o.split("_")[1],v==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-u)),v==="cw"&&h<0?h=(h+u*B0)%u-~~(h/u)*u:v==="ccw"&&h>0&&(h=(h-u*B0)%u-~~(h/u)*u)),e._pt=g=new ri(e._pt,t,i,s,h,OR),g.e=p,g.u="deg",e._props.push(i),g},Y0=function(e,t){for(var i in t)e[i]=t[i];return e},nC=function(e,t,i){var s=Y0({},i._gsap),o="perspective,force3D,transformOrigin,svgOrigin",u=i.style,c,d,h,p,v,g,y,E;s.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),u[Qt]=t,c=yl(i,1),vs(i,Qt),i.setAttribute("transform",h)):(h=getComputedStyle(i)[Qt],u[Qt]=t,c=yl(i,1),u[Qt]=h);for(d in zr)h=s[d],p=c[d],h!==p&&o.indexOf(d)<0&&(y=On(h),E=On(p),v=y!==E?xs(i,d,h,E):parseFloat(h),g=parseFloat(p),e._pt=new ri(e._pt,c,d,v,g-v,dp),e._pt.u=E||0,e._props.push(d));Y0(c,s)};ii("padding,margin,Width,Radius",function(a,e){var t="Top",i="Right",s="Bottom",o="Left",u=(e<3?[t,i,s,o]:[t+o,t+i,s+i,s+o]).map(function(c){return e<2?a+c:"border"+c+a});Lc[e>1?"border"+a:a]=function(c,d,h,p,v){var g,y;if(arguments.length<4)return g=u.map(function(E){return Nr(c,E,h)}),y=g.join(" "),y.split(g[0]).length===5?g[0]:y;g=(p+"").split(" "),y={},u.forEach(function(E,M){return y[E]=g[M]=g[M]||g[(M-1)/2|0]}),c.init(d,y,v)}});var bx={name:"css",register:pp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,s,o){var u=this._props,c=e.style,d=i.vars.startAt,h,p,v,g,y,E,M,_,S,R,I,A,b,N,D,T,L;Xp||pp(),this.styles=this.styles||Mx(e),T=this.styles.props,this.tween=i;for(M in t)if(M!=="autoRound"&&(p=t[M],!(pi[M]&&fx(M,t,i,s,e,o)))){if(y=typeof p,E=Lc[M],y==="function"&&(p=p.call(i,s,e,o),y=typeof p),y==="string"&&~p.indexOf("random(")&&(p=_l(p)),E)E(this,e,M,p,i)&&(D=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(M)+"").trim(),p+="",gs.lastIndex=0,gs.test(h)||(_=On(h),S=On(p),S?_!==S&&(h=xs(e,M,h,S)+S):_&&(p+=_)),this.add(c,"setProperty",h,p,s,o,0,0,M),u.push(M),T.push(M,0,c[M]);else if(y!=="undefined"){if(d&&M in d?(h=typeof d[M]=="function"?d[M].call(i,s,e,o):d[M],Tn(h)&&~h.indexOf("random(")&&(h=_l(h)),On(h+"")||h==="auto"||(h+=vi.units[M]||On(Nr(e,M))||""),(h+"").charAt(1)==="="&&(h=Nr(e,M))):h=Nr(e,M),g=parseFloat(h),R=y==="string"&&p.charAt(1)==="="&&p.substr(0,2),R&&(p=p.substr(2)),v=parseFloat(p),M in cr&&(M==="autoAlpha"&&(g===1&&Nr(e,"visibility")==="hidden"&&v&&(g=0),T.push("visibility",0,c.visibility),ps(this,c,"visibility",g?"inherit":"hidden",v?"inherit":"hidden",!v)),M!=="scale"&&M!=="transform"&&(M=cr[M],~M.indexOf(",")&&(M=M.split(",")[0]))),I=M in zr,I){if(this.styles.save(M),L=p,y==="string"&&p.substring(0,6)==="var(--"){if(p=_i(e,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var O=e.style.perspective;e.style.perspective=p,p=_i(e,"perspective"),O?e.style.perspective=O:vs(e,"perspective")}v=parseFloat(p)}if(A||(b=e._gsap,b.renderTransform&&!t.parseTransform||yl(e,t.parseTransform),N=t.smoothOrigin!==!1&&b.smooth,A=this._pt=new ri(this._pt,c,Qt,0,1,b.renderTransform,b,0,-1),A.dep=1),M==="scale")this._pt=new ri(this._pt,b,"scaleY",b.scaleY,(R?Ka(b.scaleY,R+v):v)-b.scaleY||0,dp),this._pt.u=0,u.push("scaleY",M),M+="X";else if(M==="transformOrigin"){T.push(si,0,c[si]),p=ZR(p),b.svg?mp(e,p,0,N,0,this):(S=parseFloat(p.split(" ")[2])||0,S!==b.zOrigin&&ps(this,b,"zOrigin",b.zOrigin,S),ps(this,c,M,Nc(h),Nc(p)));continue}else if(M==="svgOrigin"){mp(e,p,1,N,0,this);continue}else if(M in Ax){tC(this,b,M,g,R?Ka(g,R+p):p);continue}else if(M==="smoothOrigin"){ps(this,b,"smooth",b.smooth,p);continue}else if(M==="force3D"){b[M]=p;continue}else if(M==="transform"){nC(this,p,e);continue}}else M in c||(M=ro(M)||M);if(I||(v||v===0)&&(g||g===0)&&!FR.test(p)&&M in c)_=(h+"").substr((g+"").length),v||(v=0),S=On(p)||(M in vi.units?vi.units[M]:_),_!==S&&(g=xs(e,M,h,S)),this._pt=new ri(this._pt,I?b:c,M,g,(R?Ka(g,R+v):v)-g,!I&&(S==="px"||M==="zIndex")&&t.autoRound!==!1?zR:dp),this._pt.u=S||0,I&&L!==p?(this._pt.b=h,this._pt.e=L,this._pt.r=BR):_!==S&&S!=="%"&&(this._pt.b=h,this._pt.r=kR);else if(M in c)jR.call(this,e,M,h,R?R+p:p);else if(M in e)this.add(e,M,h||e[M],R?R+p:p,s,o);else if(M!=="parseTransform"){Up(M,p);continue}I||(M in c?T.push(M,0,c[M]):typeof e[M]=="function"?T.push(M,2,e[M]()):T.push(M,1,h||e[M])),u.push(M)}}D&&_x(this)},render:function(e,t){if(t.tween._time||!Yp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Nr,aliases:cr,getSetter:function(e,t,i){var s=cr[t];return s&&s.indexOf(",")<0&&(t=s),t in zr&&t!==si&&(e._gsap.x||Nr(e,"x"))?i&&k0===i?t==="scale"?WR:GR:(k0=i||{})&&(t==="scale"?XR:YR):e.style&&!Np(e.style[t])?VR:~t.indexOf("-")?HR:Gp(e,t)},core:{_removeProperty:vs,_getMatrix:$p}};ai.utils.checkPrefix=ro;ai.core.getStyleSaver=Mx;(function(a,e,t,i){var s=ii(a+","+e+","+t,function(o){zr[o]=1});ii(e,function(o){vi.units[o]="deg",Ax[o]=1}),cr[s[13]]=a+","+e,ii(i,function(o){var u=o.split(":");cr[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){vi.units[a]="px"});ai.registerPlugin(bx);var sl=ai.registerPlugin(bx)||ai;sl.core.Tween;const fh="LapaluLiyanage",iC=[{id:"home",label:"POSTER"},{id:"about",label:"DNA"},{id:"education",label:"EDUCATION"},{id:"skills",label:"SKILLS"},{id:"projects",label:"PROJECTS"},{id:"music",label:"MUSIC"},{id:"contact",label:"CONTACT"}],rC=["React.js","JavaScript","Python","Node.js","Java","Tailwind","AI Agents","SQL","Git","Figma"],sC=[{num:"3rd",label:"YEAR OF STUDY"},{num:"4+",label:"LIVE PERFORMANCES"},{num:"SE",label:"MAJOR FIELD"},{num:"01",label:"BAND — FASTUNES"}],aC=[{when:"2022",title:"Started BSc Software Engineering",sub:"Rajarata University of Sri Lanka · Faculty of Applied Sciences"},{when:"2023",title:"Pioneered Open Mic on campus",sub:"Fastunes in Rusl · Vol 1.0 and Vol 2.0"},{when:"2024",title:"AI agents and full-stack builds",sub:"PEAS study assistant, campus event portal, search agent simulator"},{when:"NOW",title:"Year 3 · building and performing",sub:"Open mic series headliner · content for Instagram and TikTok"}],oC=["Data Structures","Algorithms","Software Architecture","Artificial Intelligence","Machine Learning","Database Systems","Operating Systems","Web Technologies","Object Oriented Programming","Software Project Management"],lC=["Core member and performer — Fastunes in Rusl","Founded the campus open mic series (Vol 1.0 → 3.0)","Closing ceremony performance — FASEXPLORE Exhibition","Self-taught React, Node and AI agent design"],uC=[{cat:"Frontend",items:[{name:"React.js",level:85},{name:"HTML / CSS",level:90},{name:"JavaScript",level:80},{name:"Tailwind CSS",level:78}]},{cat:"Backend",items:[{name:"Node.js",level:75},{name:"Python",level:82},{name:"Java",level:70},{name:"Express.js",level:72}]},{cat:"AI / Data",items:[{name:"Machine Learning",level:68},{name:"AI Agents / PEAS",level:75},{name:"SQL / Databases",level:73},{name:"Data Structures",level:80}]},{cat:"Tools & DevOps",items:[{name:"Git / GitHub",level:85},{name:"VS Code",level:90},{name:"Linux / CLI",level:70},{name:"Figma",level:65}]}],cC=[{title:"AI Study Assistant",desc:"Intelligent study companion with PEAS-based agent architecture, exam mode and spaced repetition for university students.",tags:["React","Python","AI","PEAS"]},{title:"Fastunes Band Platform",desc:"Full-stack platform for Fastunes in Rusl — event scheduling, open mic registration, performance archive.",tags:["React","Node.js","MongoDB"]},{title:"Campus Event Portal",desc:"Event management for Rajarata University with real-time RSVP, notification engine and an admin dashboard.",tags:["JavaScript","Express","MySQL"]},{title:"Search Agent Simulator",desc:"Visual simulator for classic search algorithms — step-through states, heuristics and cost comparison.",tags:["Python","React","Algorithms"]}],fC=[{name:"lapaluliyanage.github.io",url:"https://github.com/LapaluLiyanage/lapaluliyanage.github.io",desc:"Personal portfolio — React + Vite, deployed to GitHub Pages at lapalu.me.",meta:"JAVASCRIPT · ★ 0 · LIVE"},{name:"ai-study-assistant",url:"https://github.com/LapaluLiyanage",desc:"PEAS-based study agent with exam mode and spaced repetition.",meta:"PYTHON · ★ 0 · REPO"},{name:"fastunes-platform",url:"https://github.com/LapaluLiyanage",desc:"Band platform for Fastunes in Rusl — events, open mic sign-ups, archive.",meta:"REACT · ★ 0 · REPO"}],dC=[{no:"01",title:"Open Mic Vol 1.0",sub:"Fastunes in Rusl · Rajarata University",tag:"FIRST NIGHT"},{no:"02",title:"Open Mic Vol 2.0",sub:"Fastunes in Rusl · Pioneered the concept on campus",tag:"SOLD OUT"},{no:"03",title:"Open Mic Vol 3.0",sub:"Fastunes in Rusl · Series headliner",tag:"HEADLINE"},{no:"04",title:"FASEXPLORE Exhibition",sub:"Closing ceremony performance",tag:"CLOSING SET"}],hC=[{kind:"PHOTO",label:"open mic vol 1.0 — stage"},{kind:"VIDEO",label:"vol 2.0 full set clip"},{kind:"PHOTO",label:"band portrait — fastunes"},{kind:"VIDEO",label:"fasexplore closing song"},{kind:"PHOTO",label:"crowd, vol 3.0"},{kind:"PHOTO",label:"backstage / rehearsal"}],pC=[{label:"GITHUB",url:"https://github.com/LapaluLiyanage"},{label:"LINKEDIN",url:"https://www.linkedin.com/in/lapalu-liyanage/"},{label:"INSTAGRAM",url:"https://www.instagram.com/lapalu_s/"},{label:"TIKTOK",url:"https://www.tiktok.com/@lapalu_0"}],rr="#c2f24a";function mC(){const[a,e]=hi.useState("home"),[t,i]=hi.useState(null),[s,o]=hi.useState([]),u=hi.useRef(null),c=hi.useRef(null),d=hi.useRef(!1),h=hi.useRef(null),p=hi.useCallback((_=40)=>{setTimeout(()=>{const S=h.current?h.current.querySelectorAll("[data-anim]"):[];S.length&&sl.fromTo(S,{y:26,opacity:0},{y:0,opacity:1,duration:.7,stagger:.05,ease:"power3.out",overwrite:!0}),(h.current?h.current.querySelectorAll("[data-bar]"):[]).forEach(I=>sl.fromTo(I,{scaleX:0},{scaleX:1,duration:1,ease:"power3.out",transformOrigin:"left center"}))},_)},[]),v=hi.useCallback(_=>{if(d.current||_===a)return;const S=c.current;if(!S){e(_),window.scrollTo(0,0);return}d.current=!0,sl.timeline({onComplete:()=>d.current=!1}).set(S,{display:"block",transformOrigin:"bottom center",scaleY:0}).to(S,{scaleY:1,duration:.42,ease:"power4.inOut"}).add(()=>{e(_),window.scrollTo(0,0)}).to(S,{scaleY:0,transformOrigin:"top center",duration:.5,ease:"power4.inOut",delay:.06}).set(S,{display:"none"}).add(()=>p(30))},[a,p]);hi.useEffect(()=>{let _=!1;return(async()=>{try{const[S,R]=await Promise.all([fetch(`https://api.github.com/users/${fh}`).then(A=>A.json()),fetch(`https://api.github.com/users/${fh}/repos?sort=updated&per_page=40`).then(A=>A.json())]),I=Array.isArray(R)?R.filter(A=>!A.fork).slice(0,9):[];_||(i(S&&S.login?S:null),o(I))}catch{}})(),()=>{_=!0}},[]),hi.useEffect(()=>{p(120)},[p]),hi.useEffect(()=>{let _=!1,S;const R=u.current;if(!R)return;const I=R.clientWidth||window.innerWidth,A=R.clientHeight||window.innerHeight,b=new _M,N=new Ni(55,I/A,.1,100);N.position.z=12;const D=new OA({alpha:!0,antialias:!0});D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.setSize(I,A),R.appendChild(D.domElement);const T=new Tt(rr),L=900,O=new Float32Array(L*3);for(let U=0;U<L;U++){const ne=6+Math.random()*9,xe=Math.random()*Math.PI*2,Le=Math.acos(2*Math.random()-1);O[U*3]=ne*Math.sin(Le)*Math.cos(xe),O[U*3+1]=ne*Math.sin(Le)*Math.sin(xe)*.7,O[U*3+2]=ne*Math.cos(Le)}const B=new Yn;B.setAttribute("position",new dr(O,3));const W=new CM(B,new Sv({color:T,size:.05,transparent:!0,opacity:.55}));b.add(W);const J=new Q_(new t0(new bp(4.6,1)),new Qh({color:T,transparent:!0,opacity:.12}));b.add(J);const z=new Q_(new t0(new Pp(2.6,.9,8,14)),new Qh({color:7304547,transparent:!0,opacity:.22}));z.rotation.x=1.1,b.add(z);let Q=0,ue=0;const K=U=>{Q=U.clientX/window.innerWidth-.5,ue=U.clientY/window.innerHeight-.5};window.addEventListener("pointermove",K);const $=()=>{const U=R.clientWidth||window.innerWidth,ne=R.clientHeight||window.innerHeight;N.aspect=U/ne,N.updateProjectionMatrix(),D.setSize(U,ne)};window.addEventListener("resize",$);const j=new BM,Z=()=>{if(_)return;const U=j.getElapsedTime();W.rotation.y=U*.03,W.rotation.x=Math.sin(U*.1)*.12,J.rotation.y=U*.07,J.rotation.x=U*.04,z.rotation.z=U*.12,N.position.x+=(Q*2.2-N.position.x)*.04,N.position.y+=(-ue*1.6-N.position.y)*.04,N.lookAt(0,0,0),D.render(b,N),S=requestAnimationFrame(Z)};return Z(),sl.fromTo(R,{opacity:0},{opacity:.9,duration:1.6,ease:"power2.out"}),()=>{_=!0,cancelAnimationFrame(S),window.removeEventListener("pointermove",K),window.removeEventListener("resize",$),D.dispose(),B.dispose(),D.domElement.parentNode&&D.domElement.parentNode.removeChild(D.domElement)}},[]);const g=s.length?s.map(_=>({name:_.name,url:_.html_url,desc:_.description||"No description yet — open the repo to read the code.",meta:[_.language||"CODE",`★ ${_.stargazers_count||0}`,new Date(_.pushed_at||_.updated_at).toISOString().slice(0,7)].join(" · ").toUpperCase()})):fC,y=t!=null&&t.public_repos?String(t.public_repos):String(s.length||12),E=t?t.login:fh,M=t?[`${t.public_repos} REPOS`,`${t.followers} FOLLOWERS`,(t.location||"SRI LANKA").toUpperCase()].join(" · "):"LIVE FROM THE GITHUB API";return X.jsxs("div",{className:"pf-page",children:[X.jsx("div",{ref:u,className:"pf-bg"}),X.jsx("div",{ref:c,className:"pf-wipe"}),X.jsxs("nav",{className:"pf-nav",children:[X.jsxs("button",{className:"pf-logo",onClick:()=>v("home"),children:[X.jsx("span",{className:"pf-dot"}),"LAPALU.ME"]}),X.jsx("div",{className:"pf-navlinks",children:iC.map(_=>X.jsx("button",{className:`pf-navlink${a===_.id?" active":""}`,onClick:()=>v(_.id),children:_.label},_.id))})]}),X.jsxs("main",{className:"pf-main",ref:h,children:[a==="home"&&X.jsxs("div",{children:[X.jsxs("section",{className:"pf-hero",children:[X.jsxs("div",{"data-anim":"",children:[X.jsx("div",{className:"pf-eyebrow",children:"// PORTFOLIO — SRI LANKA"}),X.jsxs("h1",{className:"pf-h1",children:["LAPALU",X.jsx("br",{}),X.jsx("span",{className:"pf-h1-outline",children:"LIYANAGE"})]}),X.jsxs("div",{className:"pf-role-row",children:[X.jsx("span",{className:"pf-role",children:"SOFTWARE ENGINEER"}),X.jsx("span",{className:"pf-role-sep"}),X.jsx("span",{className:"pf-role2",children:"MUSICIAN"})]}),X.jsx("p",{className:"pf-bio",children:"Building intelligent systems by day, performing on stage by night. 3rd year Software Engineering at Rajarata University of Sri Lanka."})]}),X.jsxs("div",{"data-anim":"",className:"pf-photo-wrap",children:[X.jsx("div",{className:"pf-photo-glow"}),X.jsx("div",{className:"pf-photo-badge",children:X.jsx("span",{children:"FASTUNES"})}),X.jsxs("div",{className:"pf-photo-frame",children:[X.jsx("img",{src:"/avatar.jpg",alt:"Lapalu Liyanage"}),X.jsx("div",{className:"pf-photo-fade"}),X.jsx("div",{className:"pf-photo-caption",children:"EST. RAJARATA · SRI LANKA"})]})]})]}),X.jsx("div",{className:"pf-hint",children:"// SELECT A BLOCK — EACH OPENS ITS OWN PAGE"}),X.jsxs("section",{className:"pf-block-grid",children:[X.jsxs("button",{className:"pf-block pf-block-wide",onClick:()=>v("about"),"data-anim":"",children:[X.jsxs("div",{className:"pf-block-head",children:[X.jsx("h2",{className:"pf-block-title pf-block-title-lg",children:"Creative DNA"}),X.jsx("span",{className:"pf-block-arrow",children:"↗"})]}),X.jsxs("div",{className:"pf-stat-row",children:[X.jsxs("div",{children:[X.jsx("div",{className:"pf-stat-num ac",children:"3rd"}),X.jsx("div",{className:"pf-stat-label",children:"YEAR OF STUDY"})]}),X.jsxs("div",{children:[X.jsx("div",{className:"pf-stat-num",children:"4+"}),X.jsx("div",{className:"pf-stat-label",children:"LIVE SHOWS"})]}),X.jsxs("div",{children:[X.jsx("div",{className:"pf-stat-num",children:y}),X.jsx("div",{className:"pf-stat-label",children:"PUBLIC REPOS"})]})]}),X.jsx("p",{className:"pf-p",children:"An engineer who found a second language in music. I build AI agents, full-stack apps and campus platforms — then take the stage with Fastunes in Rusl, the open-mic culture we started at university."})]}),X.jsxs("button",{className:"pf-block",onClick:()=>v("education"),"data-anim":"",children:[X.jsxs("div",{className:"pf-block-head",children:[X.jsx("h2",{className:"pf-block-title",children:"Education"}),X.jsx("span",{className:"pf-block-arrow",children:"↗"})]}),X.jsxs("div",{className:"pf-mini-body",children:["BSc (Hons) Software Engineering",X.jsx("br",{}),"Rajarata University of Sri Lanka",X.jsx("br",{}),"Faculty of Applied Sciences"]}),X.jsx("div",{className:"pf-mini-tag",children:"2022 — PRESENT · YEAR 3"})]}),X.jsxs("button",{className:"pf-block",onClick:()=>v("skills"),"data-anim":"",children:[X.jsxs("div",{className:"pf-block-head",children:[X.jsx("h2",{className:"pf-block-title",children:"Skills"}),X.jsx("span",{className:"pf-block-arrow",children:"↗"})]}),X.jsx("div",{className:"pf-chip-row",children:rC.map(_=>X.jsx("span",{className:"pf-chip",children:_},_))})]}),X.jsxs("button",{className:"pf-block pf-block-wide",onClick:()=>v("projects"),"data-anim":"",children:[X.jsxs("div",{className:"pf-block-head",children:[X.jsx("h2",{className:"pf-block-title",children:"Projects · Live from GitHub"}),X.jsx("span",{className:"pf-block-arrow",children:"↗"})]}),X.jsx("div",{className:"pf-mini-repo-grid",children:g.slice(0,3).map(_=>X.jsxs("div",{className:"pf-mini-repo",children:[X.jsx("div",{className:"pf-mini-repo-name",children:_.name}),X.jsx("div",{className:"pf-mini-repo-meta",children:_.meta})]},_.name))})]}),X.jsxs("button",{className:"pf-block pf-block-alt",onClick:()=>v("music"),"data-anim":"",children:[X.jsxs("div",{className:"pf-block-head",children:[X.jsx("h2",{className:"pf-block-title",children:"Music"}),X.jsx("span",{className:"pf-block-arrow",children:"↗"})]}),X.jsx("div",{className:"pf-mini-body",children:"Fastunes in Rusl — open mic series, exhibition closings, and the photo & video album from every night on stage."}),X.jsx("div",{className:"pf-mini-tag",children:"4 SETS · ALBUM INSIDE"})]}),X.jsxs("button",{className:"pf-block pf-block-cta",onClick:()=>v("contact"),"data-anim":"",children:[X.jsxs("div",{className:"pf-block-head",children:[X.jsx("h2",{className:"pf-block-title",children:"Contact"}),X.jsx("span",{className:"pf-block-arrow",children:"↗"})]}),X.jsxs("div",{className:"pf-contact-mono",children:["lapaluliyanage@gmail.com",X.jsx("br",{}),"0774680396"]})]})]})]}),a==="about"&&X.jsxs("div",{children:[X.jsx("button",{className:"pf-back",onClick:()=>v("home"),children:"← BACK TO POSTER"}),X.jsxs("h1",{"data-anim":"",className:"pf-sub-h1",children:["Creative",X.jsx("br",{}),X.jsx("span",{className:"ac",style:{color:rr},children:"DNA"})]}),X.jsxs("div",{className:"pf-two-col",children:[X.jsxs("div",{"data-anim":"",children:[X.jsxs("p",{className:"pf-lead",children:["I am a third-year Software Engineering undergraduate at ",X.jsx("span",{className:"ac",style:{color:rr},children:"Rajarata University of Sri Lanka"}),", passionate about building intelligent systems — AI agents, full-stack platforms, and tools that make campus life work better."]}),X.jsxs("p",{className:"pf-body-p",children:["As a core member and performer of ",X.jsx("span",{className:"ac",style:{color:rr},children:"Fastunes in Rusl"}),", I helped pioneer the open mic concept on campus — from the very first night to packed-house closing ceremonies. Music taught me timing, and engineering taught me structure; I use both in everything I ship."]}),X.jsx("p",{className:"pf-body-p",children:"Off-stage I create content for Instagram and TikTok — always at the intersection of tech and art."})]}),X.jsx("div",{"data-anim":"",className:"pf-stat-grid",children:sC.map(_=>X.jsxs("div",{className:"pf-stat-card",children:[X.jsx("div",{className:"num",children:_.num}),X.jsx("div",{className:"label",children:_.label})]},_.label))})]}),X.jsxs("div",{"data-anim":"",className:"pf-journey-wrap",children:[X.jsx("div",{className:"pf-label",children:"// JOURNEY"}),aC.map(_=>X.jsxs("div",{className:"pf-journey-row",children:[X.jsx("div",{className:"pf-journey-when",children:_.when}),X.jsxs("div",{children:[X.jsx("div",{className:"pf-journey-title",children:_.title}),X.jsx("div",{className:"pf-journey-sub",children:_.sub})]})]},_.when+_.title))]})]}),a==="education"&&X.jsxs("div",{children:[X.jsx("button",{className:"pf-back",onClick:()=>v("home"),children:"← BACK TO POSTER"}),X.jsxs("h1",{"data-anim":"",className:"pf-sub-h1",children:["Edu",X.jsx("span",{style:{color:rr},children:"cation"})]}),X.jsxs("div",{"data-anim":"",className:"pf-edu-card",children:[X.jsx("div",{className:"pf-edu-date",children:"2022 — PRESENT"}),X.jsx("h2",{className:"pf-edu-title",children:"BSc (Hons) Software Engineering"}),X.jsx("div",{className:"pf-edu-sub",children:"Rajarata University of Sri Lanka · Faculty of Applied Sciences · Currently Year 3"})]}),X.jsxs("div",{className:"pf-edu-grid",children:[X.jsxs("div",{"data-anim":"",className:"pf-edu-panel",children:[X.jsx("div",{className:"pf-label",children:"// CORE COURSEWORK"}),X.jsx("div",{className:"pf-chip-row",style:{marginTop:0},children:oC.map(_=>X.jsx("span",{className:"pf-course-chip",children:_},_))})]}),X.jsxs("div",{"data-anim":"",className:"pf-edu-panel",children:[X.jsx("div",{className:"pf-label",children:"// BEYOND THE CURRICULUM"}),lC.map(_=>X.jsx("div",{className:"pf-extra-row",children:_},_))]})]})]}),a==="skills"&&X.jsxs("div",{children:[X.jsx("button",{className:"pf-back",onClick:()=>v("home"),children:"← BACK TO POSTER"}),X.jsxs("h1",{"data-anim":"",className:"pf-sub-h1",children:["Skill",X.jsx("span",{style:{color:rr},children:"set"})]}),X.jsx("div",{className:"pf-skill-grid",children:uC.map(_=>X.jsxs("div",{"data-anim":"",className:"pf-edu-panel",children:[X.jsx("h2",{className:"pf-skill-cat-title",children:_.cat}),_.items.map(S=>X.jsxs("div",{className:"pf-skill-item",children:[X.jsxs("div",{className:"pf-skill-item-head",children:[X.jsx("span",{children:S.name}),X.jsxs("span",{children:[S.level,"%"]})]}),X.jsx("div",{className:"pf-skill-track",children:X.jsx("div",{"data-bar":"",className:"pf-skill-bar",style:{width:`${S.level}%`}})})]},S.name))]},_.cat))})]}),a==="projects"&&X.jsxs("div",{children:[X.jsx("button",{className:"pf-back",onClick:()=>v("home"),children:"← BACK TO POSTER"}),X.jsxs("h1",{"data-anim":"",className:"pf-sub-h1",children:["Pro",X.jsx("span",{style:{color:rr},children:"jects"})]}),X.jsxs("div",{"data-anim":"",className:"pf-gh-bar",children:[X.jsxs("div",{className:"pf-gh-login",children:["@",E]}),X.jsx("div",{className:"pf-gh-stats",children:M}),X.jsx("a",{href:"https://github.com/LapaluLiyanage",target:"_blank",rel:"noopener noreferrer",className:"pf-gh-open",children:"OPEN GITHUB ↗"})]}),X.jsx("div",{className:"pf-label",style:{margin:"clamp(28px, 4vw, 44px) 0 16px"},children:"// LIVE REPOSITORIES"}),X.jsx("div",{className:"pf-repo-grid",children:g.map(_=>X.jsxs("a",{href:_.url,target:"_blank",rel:"noopener noreferrer","data-anim":"",className:"pf-repo-card",children:[X.jsx("div",{className:"pf-repo-name",children:_.name}),X.jsx("div",{className:"pf-repo-desc",children:_.desc}),X.jsx("div",{className:"pf-repo-meta",children:_.meta})]},_.name))}),X.jsx("div",{className:"pf-label",style:{margin:"clamp(32px, 5vw, 56px) 0 16px"},children:"// SELECTED WORK"}),X.jsx("div",{className:"pf-featured-grid",children:cC.map(_=>X.jsxs("div",{"data-anim":"",className:"pf-featured-card",children:[X.jsx("h3",{className:"pf-featured-title",children:_.title}),X.jsx("p",{className:"pf-featured-desc",children:_.desc}),X.jsx("div",{className:"pf-tag-row",children:_.tags.map(S=>X.jsx("span",{className:"pf-tag",children:S},S))})]},_.title))})]}),a==="music"&&X.jsxs("div",{children:[X.jsx("button",{className:"pf-back",onClick:()=>v("home"),children:"← BACK TO POSTER"}),X.jsxs("h1",{"data-anim":"",className:"pf-sub-h1",children:["Mu",X.jsx("span",{style:{color:rr},children:"sic"})]}),X.jsxs("p",{"data-anim":"",className:"pf-lead",style:{maxWidth:"60ch",marginTop:22},children:["As a founding performer of ",X.jsx("span",{style:{color:rr},children:"Fastunes in Rusl"}),", I helped build a music culture at Rajarata University — from the first open mic to packed-house closing ceremonies."]}),X.jsx("div",{className:"pf-label",style:{margin:"clamp(28px, 4vw, 44px) 0 16px"},children:"// SETLIST"}),dC.map(_=>X.jsxs("div",{"data-anim":"",className:"pf-gig-row",children:[X.jsx("div",{className:"pf-gig-no",children:_.no}),X.jsxs("div",{children:[X.jsx("div",{className:"pf-gig-title",children:_.title}),X.jsx("div",{className:"pf-gig-sub",children:_.sub})]}),X.jsx("div",{className:"pf-gig-tag",children:_.tag})]},_.no)),X.jsx("div",{className:"pf-label",style:{margin:"clamp(32px, 5vw, 56px) 0 16px"},children:"// PHOTO & VIDEO ALBUM"}),X.jsx("div",{className:"pf-album-grid",children:hC.map(_=>X.jsxs("div",{"data-anim":"",className:"pf-album-tile",children:[X.jsx("div",{className:"pf-album-kind",children:_.kind}),X.jsx("div",{className:"pf-album-label",children:_.label})]},_.label))}),X.jsx("div",{className:"pf-album-hint",children:"drop your performance photos and clips into these slots"})]}),a==="contact"&&X.jsxs("div",{children:[X.jsx("button",{className:"pf-back",onClick:()=>v("home"),children:"← BACK TO POSTER"}),X.jsxs("h1",{"data-anim":"",className:"pf-sub-h1",children:["Let's",X.jsx("br",{}),X.jsx("span",{style:{color:rr},children:"Build"})]}),X.jsxs("div",{className:"pf-contact-grid",children:[X.jsxs("a",{href:"mailto:lapaluliyanage@gmail.com","data-anim":"",className:"pf-contact-email",children:[X.jsx("div",{className:"pf-contact-label",children:"EMAIL"}),X.jsx("div",{className:"pf-contact-value",children:"lapaluliyanage@gmail.com"})]}),X.jsxs("a",{href:"tel:0774680396","data-anim":"",className:"pf-contact-phone",children:[X.jsx("div",{className:"pf-contact-label",children:"PHONE"}),X.jsx("div",{className:"pf-contact-value",children:"0774680396"}),X.jsx("div",{className:"pf-contact-tz",children:"SRI LANKA · GMT+5:30"})]})]}),X.jsx("div",{className:"pf-social-grid",children:pC.map(_=>X.jsxs("a",{href:_.url,target:"_blank",rel:"noopener noreferrer","data-anim":"",className:"pf-social-card",children:[X.jsx("span",{className:"pf-social-label",children:_.label}),X.jsx("span",{className:"pf-social-arrow",children:"↗"})]},_.label))})]}),X.jsxs("div",{className:"pf-footer",children:[X.jsx("span",{children:"© 2026 LAPALU LIYANAGE"}),X.jsx("span",{children:"SOFTWARE ENGINEER + MUSICIAN"})]})]})]})}vy.createRoot(document.getElementById("root")).render(X.jsx(fy.StrictMode,{children:X.jsx(mC,{})}));

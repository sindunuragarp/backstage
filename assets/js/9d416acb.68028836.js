/*! For license information please see 9d416acb.68028836.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[769295],{64295:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>i});var n=r(824246),o=r(511151);const u={id:"plugin-explore-common.getexploretoolsrequest",title:"GetExploreToolsRequest",description:"API reference for GetExploreToolsRequest"},c=void 0,s={id:"reference/plugin-explore-common.getexploretoolsrequest",title:"GetExploreToolsRequest",description:"API reference for GetExploreToolsRequest",source:"@site/../docs/reference/plugin-explore-common.getexploretoolsrequest.md",sourceDirName:"reference",slug:"/reference/plugin-explore-common.getexploretoolsrequest",permalink:"/docs/reference/plugin-explore-common.getexploretoolsrequest",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-explore-common.getexploretoolsrequest.md",tags:[],version:"current",frontMatter:{id:"plugin-explore-common.getexploretoolsrequest",title:"GetExploreToolsRequest",description:"API reference for GetExploreToolsRequest"}},l={},i=[];function a(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-explore-common",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-explore-common"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-explore-common.getexploretoolsrequest",children:(0,n.jsx)(t.code,{children:"GetExploreToolsRequest"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export type GetExploreToolsRequest = {\n    filter?: ExploreToolFilter;\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"References:"})," ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-explore-common.exploretoolfilter",children:"ExploreToolFilter"})]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,u={},i=null,a=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(a=t.ref),t)c.call(t,n)&&!l.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:i,ref:a,props:u,_owner:s.current}}t.Fragment=u,t.jsx=i,t.jsxs=i},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function _(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function x(){}function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=_.prototype;var g=b.prototype=new x;g.constructor=b,m(g,_.prototype),g.isPureReactComponent=!0;var v=Array.isArray,E=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var o,u={},c=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(c=""+t.key),t)E.call(t,o)&&!j.hasOwnProperty(o)&&(u[o]=t[o]);var l=arguments.length-2;if(1===l)u.children=n;else if(1<l){for(var i=Array(l),a=0;a<l;a++)i[a]=arguments[a+2];u.children=i}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===u[o]&&(u[o]=l[o]);return{$$typeof:r,type:e,key:c,ref:s,props:u,_owner:S.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var w=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,u,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return c=c(l=e),e=""===u?"."+C(l,0):u,v(c)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),$(c,t,o,"",(function(e){return e}))):null!=c&&(k(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||l&&l.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),t.push(c)),1;if(l=0,u=""===u?".":u+":",v(e))for(var i=0;i<e.length;i++){var a=u+C(s=e[i],i);l+=$(s,t,o,a,c)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),i=0;!(s=e.next()).done;)l+=$(s=s.value,t,o,a=u+C(s,i++),c);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function q(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},T={transition:null},I={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:T,ReactCurrentOwner:S};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=_,t.Fragment=o,t.Profiler=c,t.PureComponent=b,t.StrictMode=u,t.Suspense=a,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),u=e.key,c=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,s=S.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(i in t)E.call(t,i)&&!j.hasOwnProperty(i)&&(o[i]=void 0===t[i]&&void 0!==l?l[i]:t[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){l=Array(i);for(var a=0;a<i;a++)l[a]=arguments[a+2];o.children=l}return{$$typeof:r,type:e.type,key:u,ref:c,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=R,t.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:q}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,r){return P.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,r){return P.current.useReducer(e,t,r)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return P.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return P.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>s,ah:()=>u});var n=r(667294);const o=n.createContext({});function u(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||c:u(e),n.createElement(o.Provider,{value:s},t)}}}]);
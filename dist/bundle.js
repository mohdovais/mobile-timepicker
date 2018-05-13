!function(){"use strict";var e={},t=[],n=[];function o(o,r){var i,a,s,l,u=n;for(l=arguments.length;l-- >2;)t.push(arguments[l]);for(r&&null!=r.children&&(t.length||t.push(r.children),delete r.children);t.length;)if((a=t.pop())&&void 0!==a.pop)for(l=a.length;l--;)t.push(a[l]);else"boolean"==typeof a&&(a=null),(s="function"!=typeof o)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(s=!1)),s&&i?u[u.length-1]+=a:u===n?u=[a]:u.push(a),i=s;var c=new function(){};return c.nodeName=o,c.children=u,c.attributes=null==r?void 0:r,c.key=null==r?void 0:r.key,void 0!==e.vnode&&e.vnode(c),c}function r(e,t){for(var n in t)e[n]=t[n];return e}var i="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,a=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,s=[];function l(t){!t._dirty&&(t._dirty=!0)&&1==s.push(t)&&(e.debounceRendering||i)(u)}function u(){var e,t=s;for(s=[];e=t.pop();)e._dirty&&E(e)}function c(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function p(e){var t=r({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===a.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var s=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,h,s):e.removeEventListener(t,h,s),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var l=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(l?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function h(t){return this._listeners[t.type](e.event&&e.event(t)||t)}var d=[],m=0,y=!1,g=!1;function b(){for(var t;t=d.pop();)e.afterMount&&e.afterMount(t),t.componentDidMount&&t.componentDidMount()}function _(e,t,n,o,r,i){m++||(y=null!=r&&void 0!==r.ownerSVGElement,g=null!=e&&!("__preactattr_"in e));var a=k(e,t,n,o,i);return r&&a.parentNode!==r&&r.appendChild(a),--m||(g=!1,i||b()),a}function k(e,t,n,o,r){var i=e,a=y;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),C(e,!0))),i.__preactattr_=!0,i;var s,l,u=t.nodeName;if("function"==typeof u)return function(e,t,n,o){var r=e&&e._component,i=r,a=e,s=r&&e._componentConstructor===t.nodeName,l=s,u=p(t);for(;r&&!l&&(r=r._parentComponent);)l=r.constructor===t.nodeName;r&&l&&(!o||r._component)?(T(r,u,3,n,o),e=r.base):(i&&!s&&(P(i),e=a=null),r=w(t.nodeName,u,n),e&&!r.nextBase&&(r.nextBase=e,a=null),T(r,u,1,n,o),e=r.base,a&&e!==a&&(a._component=null,C(a,!1)));return e}(e,t,n,o);if(y="svg"===u||"foreignObject"!==u&&y,u=String(u),(!e||!c(e,u))&&(s=u,(l=y?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,i=l,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),C(e,!0)}var h=i.firstChild,d=i.__preactattr_,m=t.children;if(null==d){d=i.__preactattr_={};for(var b=i.attributes,_=b.length;_--;)d[b[_].name]=b[_].value}return!g&&m&&1===m.length&&"string"==typeof m[0]&&null!=h&&void 0!==h.splitText&&null==h.nextSibling?h.nodeValue!=m[0]&&(h.nodeValue=m[0]):(m&&m.length||null!=h)&&function(e,t,n,o,r){var i,a,s,l,u,p=e.childNodes,v=[],h={},d=0,m=0,y=p.length,g=0,b=t?t.length:0;if(0!==y)for(var _=0;_<y;_++){var S=p[_],x=S.__preactattr_,w=b&&x?S._component?S._component.__key:x.key:null;null!=w?(d++,h[w]=S):(x||(void 0!==S.splitText?!r||S.nodeValue.trim():r))&&(v[g++]=S)}if(0!==b)for(var _=0;_<b;_++){l=t[_],u=null;var w=l.key;if(null!=w)d&&void 0!==h[w]&&(u=h[w],h[w]=void 0,d--);else if(!u&&m<g)for(i=m;i<g;i++)if(void 0!==v[i]&&(N=a=v[i],E=r,"string"==typeof(T=l)||"number"==typeof T?void 0!==N.splitText:"string"==typeof T.nodeName?!N._componentConstructor&&c(N,T.nodeName):E||N._componentConstructor===T.nodeName)){u=a,v[i]=void 0,i===g-1&&g--,i===m&&m++;break}u=k(u,l,n,o),s=p[_],u&&u!==e&&u!==s&&(null==s?e.appendChild(u):u===s.nextSibling?f(s):e.insertBefore(u,s))}var N,T,E;if(d)for(var _ in h)void 0!==h[_]&&C(h[_],!1);for(;m<=g;)void 0!==(u=v[g--])&&C(u,!1)}(i,m,n,o,g||null!=d.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||v(e,o,n[o],n[o]=void 0,y);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||v(e,o,n[o],n[o]=t[o],y)}(i,t.attributes,d),y=a,i}function C(e,t){var n=e._component;n?P(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||f(e),S(e))}function S(e){for(e=e.lastChild;e;){var t=e.previousSibling;C(e,!0),e=t}}var x={};function w(e,t,n){var o,r=x[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),M.call(o,t,n)):((o=new M(t,n)).constructor=e,o.render=N),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function N(e,t,n){return this.constructor(e,n)}function T(t,n,o,r,i){t._disable||(t._disable=!0,(t.__ref=n.ref)&&delete n.ref,(t.__key=n.key)&&delete n.key,!t.base||i?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),r&&r!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=r),t.prevProps||(t.prevProps=t.props),t.props=n,t._disable=!1,0!==o&&(1!==o&&!1===e.syncComponentUpdates&&t.base?l(t):E(t,1,i)),t.__ref&&t.__ref(t))}function E(t,n,o,i){if(!t._disable){var a,s,l,u=t.props,c=t.state,f=t.context,v=t.prevProps||u,h=t.prevState||c,y=t.prevContext||f,g=t.base,k=t.nextBase,S=g||k,x=t._component,N=!1;if(g&&(t.props=v,t.state=h,t.context=y,2!==n&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(u,c,f)?N=!0:t.componentWillUpdate&&t.componentWillUpdate(u,c,f),t.props=u,t.state=c,t.context=f),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!N){a=t.render(u,c,f),t.getChildContext&&(f=r(r({},f),t.getChildContext()));var M,D,L=a&&a.nodeName;if("function"==typeof L){var O=p(a);(s=x)&&s.constructor===L&&O.key==s.__key?T(s,O,1,f,!1):(M=s,t._component=s=w(L,O,f),s.nextBase=s.nextBase||k,s._parentComponent=t,T(s,O,0,f,!1),E(s,1,o,!0)),D=s.base}else l=S,(M=x)&&(l=t._component=null),(S||1===n)&&(l&&(l._component=null),D=_(l,a,f,o||!g,S&&S.parentNode,!0));if(S&&D!==S&&s!==x){var j=S.parentNode;j&&D!==j&&(j.replaceChild(D,S),M||(S._component=null,C(S,!1)))}if(M&&P(M),t.base=D,D&&!i){for(var I=t,A=t;A=A._parentComponent;)(I=A).base=D;D._component=I,D._componentConstructor=I.constructor}}if(!g||o?d.unshift(t):N||(t.componentDidUpdate&&t.componentDidUpdate(v,h,y),e.afterUpdate&&e.afterUpdate(t)),null!=t._renderCallbacks)for(;t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);m||i||b()}}function P(t){e.beforeUnmount&&e.beforeUnmount(t);var n=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var o=t._component;o?P(o):n&&(n.__preactattr_&&n.__preactattr_.ref&&n.__preactattr_.ref(null),t.nextBase=n,f(n),function(e){var t=e.constructor.name;(x[t]||(x[t]=[])).push(e)}(t),S(n)),t.__ref&&t.__ref(null)}function M(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}r(M.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=r({},n)),r(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),l(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),E(this,2)},render:function(){}});var D=function(e){return o("button",{className:"button-field",onClick:e.onClick},o("label",null,e.label),o("div",null,e.children))},L=(function(){function e(e){this.value=e}function t(t){var n,o;function r(n,o){try{var a=t[n](o),s=a.value;s instanceof e?Promise.resolve(s.value).then(function(e){r("next",e)},function(e){r("throw",e)}):i(a.done?"return":"normal",a.value)}catch(e){i("throw",e)}}function i(e,t){switch(e){case"return":n.resolve({value:t,done:!0});break;case"throw":n.reject(t);break;default:n.resolve({value:t,done:!1})}(n=n.next)?r(n.key,n.arg):o=null}this._invoke=function(e,t){return new Promise(function(i,a){var s={key:e,arg:t,resolve:i,reject:a,next:null};o?o=o.next=s:(n=o=s,r(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),j=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},I=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},A=void 0!==window.ontouchstart,U=A?"touchend":"mouseup";function V(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}var B=function(e){function t(e){L(this,t);var n=I(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setRef=function(e){return n.el=e},n.autoScroll=n.autoScroll.bind(n),n.track=n.track.bind(n),n.onTouchStart=n.onTouchStart.bind(n),n.onTouchMove=n.onTouchMove.bind(n),n.onTouchEnd=n.onTouchEnd.bind(n),n.onDocumentTouchEnd=n.onDocumentTouchEnd.bind(n),n.listeners=n.getListeners(),n.state={selectedIndex:0,offset:0},n}return j(t,M),O(t,[{key:"componentDidMount",value:function(){for(var e=this.el.firstElementChild,t=e.firstElementChild.offsetHeight,n=e.childElementCount,o=this.props.store,r=0,i=o.length,a=0;r<i;r++)if(o[r].value===this.props.value){a=r;break}var s=t*a;this.pickerState={offset:s,min:0,max:(n-3)*t,snap:t,count:n,timestamp:Date.now(),reference:void 0,velocity:void 0,amplitude:void 0,frame:void 0,ticker:void 0,target:void 0},this.addEventListener(e,this.listeners),this.scroller=e,this.setState(function(e){return Object.assign({},e,{offset:s,selectedIndex:a})})}},{key:"render",value:function(){var e=this.props.store,t=this.state,n=t.selectedIndex,r="transform: translate3d(0px, -"+t.offset+"px, 0px)";return o("div",{className:"picker",ref:this.setRef},o("ul",{className:"picker-scroller",style:r},o("li",{key:"key-start"}," "),e.map(function(e,t){return o("li",{key:e.value,className:n===t&&"selected"},e.label)}),o("li",{key:"key-end"}," ")))}},{key:"componentWillUnmount",value:function(){this.removeEventListeners(this.scroller,this.listeners)}},{key:"getValue",value:function(){var e=this.pickerState;return this.props.store[e.offset/e.snap]}},{key:"onIdle",value:function(){this.props.onChange(this.getValue())}},{key:"addEventListener",value:function(e,t){var n=e.addEventListener.bind(e);for(var o in document.addEventListener(U,this.onDocumentTouchEnd),t)n(o,t[o])}},{key:"removeEventListeners",value:function(e,t){var n=e.removeEventListener.bind(e);for(var o in document.removeEventListener(U,this.onDocumentTouchEnd),t)n(o,t[o])}},{key:"getListeners",value:function(){var e={};return e[A?"touchstart":"mousedown"]=this.onTouchStart,e[A?"touchmove":"mousemove"]=this.onTouchMove,e[U]=this.onTouchEnd,e}},{key:"onTouchStart",value:function(e){return this.stopEvent(e),this.pressed=!0,this.initDrag(V(e)),!1}},{key:"onTouchMove",value:function(e){return this.stopEvent(e),this.pressed&&(this.drag=!0,this.startDrag(V(e))),!1}},{key:"onTouchEnd",value:function(e){return this.stopEvent(e),this.drag?this.stopDrag():this.onClick(e),this.pressed=this.drag=!1}},{key:"onDocumentTouchEnd",value:function(){this.drag&&(this.stopDrag(),this.pressed=this.drag=!1)}},{key:"onClick",value:function(e){var t=e.target,n=this.pickerState,o=Array.prototype.indexOf.call(t.parentElement.children,t)-1,r=o*n.snap;o<0||o>n.count-3||(n.offset=r,this.setState(function(e){return Object.assign({},e,{selectedIndex:o,offset:r})},this.onIdle))}},{key:"stopEvent",value:function(e){e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation()}},{key:"scroll",value:function(e){var t=this.pickerState,n=t.max,o=t.min,r=e>n?n:e<o?o:e;t.offset=r,this.setState(function(e){return Object.assign({},e,{offset:r,selectedIndex:Math.round(r/t.snap)})})}},{key:"track",value:function(){var e=this.pickerState,t=Date.now(),n=t-e.timestamp,o=1e3*(e.offset-e.frame)/(1+n);e.timestamp=t,e.frame=e.offset,e.velocity=.8*o+.2*e.velocity}},{key:"autoScroll",value:function(){var e,t,n=this.pickerState;n.amplitude&&(e=Date.now()-n.timestamp,(t=-n.amplitude*Math.exp(-e/325))>5||t<-5?(this.scroll(n.target+t),requestAnimationFrame(this.autoScroll)):(this.scroll(n.target),this.onIdle()))}},{key:"initDrag",value:function(e){var t=this.pickerState;t.reference=e,t.velocity=0,t.amplitude=0,t.frame=t.offset,t.timestamp=Date.now(),clearInterval(t.ticker),t.ticker=setInterval(this.track,100)}},{key:"startDrag",value:function(e){var t=this.pickerState,n=t.reference-e;(n>2||n<-2)&&(t.reference=e,this.scroll(t.offset+n))}},{key:"stopDrag",value:function(){var e=this.pickerState;clearInterval(e.ticker),e.target=e.offset,(e.velocity>10||e.velocity<-10)&&(e.amplitude=.8*e.velocity,e.target=e.offset+e.amplitude),e.target=Math.round(e.target/e.snap)*e.snap,e.amplitude=e.target-e.offset,e.timestamp=Date.now(),requestAnimationFrame(this.autoScroll)}}]),t}();var H,W,R,z=[1,2,3,4,5,6,7,8,9,10,11,12].map(function(e){return{label:e<10?"0"+e:e.toString(),value:e}}),q=function(e){for(var t=e&&parseInt(e.step)||5,n=[],o=0;o<60;o+=t)n.push({label:o<10?"0"+o:o.toString(),value:o});return n}(),F=[{label:"am",value:"am"},{label:"pm",value:"pm"}],Y=function(e){return e<10?"0"+e:e.toString()},$=function(e){function t(e){L(this,t);var n=I(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.onHourChange=n.onHourChange.bind(n),n.onMinutesChange=n.onMinutesChange.bind(n),n.onAmPMChange=n.onAmPMChange.bind(n);var o=(e.time||"0:0").split(":").map(function(e){return parseInt(e)}),r=o[0]||0;return n.state={hours:r<12?r||12:r-12,minutes:o[1]||0,ampm:r<12?"am":"pm"},n}return j(t,M),O(t,[{key:"shouldComponentUpdate",value:function(e,t){var n=e.onChange;return t===this.state||("function"==typeof n&&n(this.rawToValue(t)),!1)}},{key:"render",value:function(){var e=this.state;return o("div",{className:"time-picker"},o("div",{className:"time-picker-toolbar"},o("button",{type:"button",onClick:this.props.onCancel},"Cancel"),o("span",null,this.props.label),o("button",{type:"button",onClick:this.onSave.bind(this)},"Done")),o("div",{className:"time-picker-pickers"},o(B,{store:z,value:e.hours,onChange:this.onHourChange}),o(B,{store:q,value:e.minutes,onChange:this.onMinutesChange}),o(B,{store:F,value:e.ampm,onChange:this.onAmPMChange})))}},{key:"onHourChange",value:function(e){this.setAsyncState("hours",e.value)}},{key:"onMinutesChange",value:function(e){this.setAsyncState("minutes",e.value)}},{key:"onAmPMChange",value:function(e){this.setAsyncState("ampm",e.value)}},{key:"setAsyncState",value:function(e,t){this.setState(function(n){return Object.assign({},n,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,t))})}},{key:"rawToValue",value:function(e){var t=void 0;return t=12===e.hours?"am"===e.ampm?-12:0:"am"===e.ampm?0:12,Y(e.hours+t)+":"+Y(e.minutes)}},{key:"onSave",value:function(){var e=this.props.onSave;"function"==typeof e&&e(this.rawToValue(this.state))}}]),t}(),G=function(e){return o("div",{class:"popover"},o("div",{class:"popover-bg"}),o("div",{class:"popover-content"},e.children))},J=function(e){function t(e){L(this,t);var n=I(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.togglePop=n.togglePop.bind(n),n.state={editing:!1,value:e.value},n}return j(t,M),O(t,[{key:"render",value:function(){return o("div",null,o(D,{label:this.props.label,onClick:this.togglePop},o("div",null,this.state.value)),this.getPop(this.state.editing))}},{key:"getPop",value:function(e){if(e)return o(G,null,o($,{time:this.state.value,label:this.props.label,onCancel:this.togglePop,onSave:this.onChange.bind(this)}))}},{key:"togglePop",value:function(){this.setState(function(e){return Object.assign({},e,{editing:!e.editing})})}},{key:"onChange",value:function(e){this.setState(function(t){return Object.assign({},t,{editing:!1,value:e})})}}]),t}();H=o(J,{label:"Start Time",value:"14:45",onChange:function(e){console.log(e)}}),W=document.body,_(R,H,{},!1,W,!1)}();
//# sourceMappingURL=bundle.js.map

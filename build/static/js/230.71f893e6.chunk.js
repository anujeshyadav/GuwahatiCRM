/*! For license information please see 230.71f893e6.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[230,327],{1033:function(e,t,n){"use strict";var r=n(26),a=n(1),o=n.n(a),i=n(904),l=n(905),c=n(894),s=n(244),u=n(5),d=n(40);t.a=function(e){var t,n,m=e.onDropdownChange,f=e.onSubmit,h=Object(a.useState)([]),v=Object(r.a)(h,2),p=v[0],g=v[1],y=Object(a.useState)({}),b=Object(r.a)(y,2),E=b[0],w=b[1],S=Object(a.useState)(""),N=Object(r.a)(S,2),x=N[0],j=N[1],O=Object(a.useState)(""),D=Object(r.a)(O,2),L=(D[0],D[1]),k=localStorage.getItem("AllSuper");Object(a.useEffect)((function(){console.log("a");var e=JSON.parse(localStorage.getItem("userData"));w(e);var t=JSON.parse(localStorage.getItem("AllSuper"));(null===t||void 0===t?void 0:t.length)?g(t):Object(d.jd)(u.ud).then((function(e){localStorage.setItem("AllSuper",JSON.stringify(null===e||void 0===e?void 0:e.SuperAdmin)),g(null===e||void 0===e?void 0:e.SuperAdmin)})).catch((function(e){console.log(e)}))}),[k]);return console.log(x),o.a.createElement("div",null,o.a.createElement(i.a,null,"MASTER"===(null===E||void 0===E||null===(t=E.rolename)||void 0===t?void 0:t.roleName)&&"MASTER"===(null===E||void 0===E||null===(n=E.rolename)||void 0===n?void 0:n.roleName)&&o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,null,o.a.createElement(c.a,{className:"mb-1",value:x,onChange:function(e){var t,n=null===(t=e.target.options[e.target.selectedIndex].getAttribute("data-name"))||void 0===t?void 0:t.split(" ")[0],r=e.target.options[e.target.selectedIndex].getAttribute("data-name");j(n),L(n),m(r)},type:"select"},o.a.createElement("option",null,"--select SuperAdmin--"),p&&(null===p||void 0===p?void 0:p.map((function(e,t){return o.a.createElement("option",{"data-name":"".concat(null===e||void 0===e?void 0:e._id," ").concat(null===e||void 0===e?void 0:e.database),value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.firstName," ",null===e||void 0===e?void 0:e.lastName)}))))),o.a.createElement(l.a,{lg:"2",sm:"2",md:"2"},o.a.createElement(s.a,{className:"mb-1",onClick:function(e){e.preventDefault(),f(e)},color:"primary"},"Submit")))))}},1143:function(e,t,n){"use strict";var r=n(10),a=n(12),o=n(1),i=n.n(o),l=n(2),c=n.n(l),s=n(8),u=n.n(s),d=n(7),m=["className","cssModule","type","size","color","children","tag"],f={tag:d.tagPropType,type:c.a.string,size:c.a.string,color:c.a.string,className:c.a.string,cssModule:c.a.object,children:c.a.string},h=function(e){var t=e.className,n=e.cssModule,o=e.type,l=e.size,c=e.color,s=e.children,f=e.tag,h=Object(a.a)(e,m),v=Object(d.mapToCssModules)(u()(t,!!l&&"spinner-"+o+"-"+l,"spinner-"+o,!!c&&"text-"+c),n);return i.a.createElement(f,Object(r.a)({role:"status"},h,{className:v}),s&&i.a.createElement("span",{className:Object(d.mapToCssModules)("sr-only",n)},s))};h.propTypes=f,h.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=h},2088:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(24),o=n(26),i=n(1),l=n.n(i),c=n(1143),s=n(904),u=n(905),d=n(244),m=n(907),f=n(908),h=n(40),v=n(85),p=n(5),g=n(72),y=n.n(g);function b(){b=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,n){return e[t]=n}}function s(e,t,n,a){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),l=new O(a||[]);return r(i,"_invoke",{value:S(e,n,l)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=s;var d={};function m(){}function f(){}function h(){}var v={};c(v,o,(function(){return this}));var p=Object.getPrototypeOf,g=p&&p(p(D([])));g&&g!==t&&n.call(g,o)&&(v=g);var y=h.prototype=m.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t((function(a,i){!function r(a,o,i,l){var c=u(e[a],e,o);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function S(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=N(i,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function N(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=u(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function D(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=h,r(y,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:f,configurable:!0}),f.displayName=c(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(w.prototype),c(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new w(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(y),c(y,l,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=D,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:D(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}t.default=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),n=t[0],g=t[1],E=Object(i.useState)([]),w=Object(o.a)(E,2),S=w[0],N=w[1],x=Object(i.useState)([]),j=Object(o.a)(x,2),O=j[0],D=j[1],L=Object(i.useState)([]),k=Object(o.a)(L,2),C=k[0],P=k[1],I=Object(i.useState)(!1),_=Object(o.a)(I,2),A=_[0],R=_[1],z=Object(i.useState)(null),F=Object(o.a)(z,2),G=(F[0],F[1]);Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData")),t="".concat(p.jc,"/").concat(null===e||void 0===e?void 0:e.database);Object(h.jd)(t).then((function(e){var t,n=null===e||void 0===e||null===(t=e.Department)||void 0===t?void 0:t.filter((function(e){return"Active"==(null===e||void 0===e?void 0:e.status)}));D(n)})).catch((function(e){console.log(e)})),M()}),[]);var M=function(){var e=JSON.parse(localStorage.getItem("userData"));Object(h.tb)(null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.database).then((function(t){var n,r,a,o=null===t||void 0===t||null===(n=t.Role)||void 0===n?void 0:n.filter((function(e){return 0==(null===e||void 0===e?void 0:e.assign)&&"SuperAdmin"!=(null===e||void 0===e?void 0:e.roleName)&&"Admin"!=(null===e||void 0===e?void 0:e.roleName)})),i=null===e||void 0===e||null===(r=e.rolename)||void 0===r?void 0:r.position;null===t||void 0===t||null===(a=t.Role)||void 0===a||a.filter((function(e,t){return(null===e||void 0===e?void 0:e.position)>i}));P(o)})).catch((function(e){console.log(e)}))},T=function(){var e=Object(r.a)(b().mark((function e(){var t,r,a;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("userData")),R(!0),r=null===S||void 0===S?void 0:S.map((function(e,t){return{roleName:null===e||void 0===e?void 0:e.roleName,database:null===e||void 0===e?void 0:e.database,roleId:null===e||void 0===e?void 0:e._id,rolePosition:null===e||void 0===e?void 0:e.createdPosition}})),a={created_by:null===t||void 0===t?void 0:t._id,database:null===t||void 0===t?void 0:t.database,departmentName:n,roles:r},e.next=6,Object(h.kd)(p.Rc,a).then((function(e){console.log(e),N([]),R(!1),y()("Roles Assigned Successfully"),M()})).catch((function(e){R(!1),console.log(e),y()("Something went wrong")}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(A)return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:"20rem"}},l.a.createElement(c.a,{style:{height:"4rem",width:"4rem"},color:"primary"},"Loading..."));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card p-3"},l.a.createElement(s.a,null,l.a.createElement(u.a,null),l.a.createElement(u.a,{lg:"2",sm:"2",md:"2",ms:"12"},l.a.createElement(v.b,{render:function(e){var t=e.history;return l.a.createElement(d.a,{style:{cursor:"pointer",backgroundColor:"#39cccc",color:"white",fontWeight:"600"},className:" float-right",color:"#39cccc",onClick:function(){return t.push("/app/freshlist/account/CreateHeirarchy")}},"View Hierarchy")}})),l.a.createElement(u.a,{lg:"2",sm:"2",md:"2",ms:"12"},l.a.createElement(v.b,{render:function(e){var t=e.history;return l.a.createElement(d.a,{style:{cursor:"pointer",backgroundColor:"#39cccc",color:"white",fontWeight:"600"},className:" float-right",color:"#39cccc",onClick:function(){return t.push("/app/Ajgroup/account/EditTeamRolePosition")}},"Edit Hierarchy")}})),l.a.createElement(u.a,{lg:"2"},l.a.createElement(v.b,{render:function(e){var t=e.history;return l.a.createElement(d.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",onClick:function(){return t.goBack()}}," ","Back")}}))),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("h3",{className:"mb-3 mt-2"},l.a.createElement("strong",null,"Assign Roles to Department"))),l.a.createElement(s.a,null,l.a.createElement(u.a,{lg:"4",sm:"6",md:"4"},l.a.createElement(m.a,null,"Select Department:"),l.a.createElement("select",{id:"departments",className:"form-control",onChange:function(e){var t=e.target.value;g(t)},value:n},l.a.createElement("option",{value:""},"--Select Department--"),O&&(null===O||void 0===O?void 0:O.map((function(e,t){return l.a.createElement("option",{key:null===e||void 0===e?void 0:e._id,value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.departmentName)})))))),l.a.createElement("br",null),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("h3",{className:"mb-3"},C&&C?l.a.createElement(l.a.Fragment,null,l.a.createElement("strong",null,"Choose Roles")):l.a.createElement(l.a.Fragment,null,l.a.createElement("strong",null,"No Roles Found")))),l.a.createElement(s.a,null,C.map((function(e,t){var n,r;return l.a.createElement(u.a,{lg:"6",sm:"12",md:"6"},l.a.createElement("div",{key:null===e||void 0===e?void 0:e._id,className:"form-label-group d-flex justify-content-space-between"},l.a.createElement("input",{className:"mt-1",required:!0,type:"checkbox",style:{marginRight:"3px",height:"22px",width:"22px"},id:e,value:e,onChange:function(){return function(e,t){G(t);var n=Object(a.a)(S);(null===n||void 0===n?void 0:n.includes(e))?null===n||void 0===n||n.splice(n.indexOf(e),1):n.push(e),N(n)}(e,t)}}),l.a.createElement("span",{className:"mb-1 ml-1",style:{marginRight:"20px",fontSize:"25px"}},(null===e||void 0===e||null===(n=e.roleName)||void 0===n?void 0:n.length)>12?l.a.createElement(l.a.Fragment,null,null===e||void 0===e||null===(r=e.roleName)||void 0===r?void 0:r.slice(0,18),".."):l.a.createElement(l.a.Fragment,null,null===e||void 0===e?void 0:e.roleName)),l.a.createElement("span",{className:"input",style:{position:"absolute",right:20,width:"100px"}},l.a.createElement(f.a,{onChange:function(t){return function(e,t,n){var r=Object(a.a)(S);r[null===S||void 0===S?void 0:S.indexOf(t)].createdPosition=Number(e.target.value),N(r)}(t,e)},placeholder:"Ex. 1 or 2 or 3",type:"number"}))))}))),l.a.createElement("div",{className:"d-flex justify-content-center mt-3"},l.a.createElement(d.a,{color:"primary",onClick:T,disabled:!n||0===S.length},"Assign Roles"))))}},3212:function(e,t,n){"use strict";n.r(t);var r=n(24),a=n(60),o=n(4),i=n(16),l=n(17),c=n(100),s=n(18),u=n(19),d=n(1),m=n.n(d),f=n(14),h=n(1143),v=n(904),p=n(905),g=n(912),y=n(244),b=n(916),E=n(911),w=n(922),S=n(900),N=n(899),x=n(908),j=n(923),O=n(902),D=n(903),L=n(906),k=n(907),C=n(78),P=(n(233),n(6)),I=n(132),_=n(936),A=(n(946),n(323)),R=(n(27),n(929),n(232),n(72)),z=n.n(R),F=n(85),G=n(40),M=n(971),T=n(1033),V=n(5);n(2088);function J(){J=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function s(e,t,n,a){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),l=new j(a||[]);return r(i,"_invoke",{value:w(e,n,l)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=s;var d={};function m(){}function f(){}function h(){}var v={};c(v,o,(function(){return this}));var p=Object.getPrototypeOf,g=p&&p(p(O([])));g&&g!==t&&n.call(g,o)&&(v=g);var y=h.prototype=m.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t((function(a,i){!function r(a,o,i,l){var c=u(e[a],e,o);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function w(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return D()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=S(i,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function S(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=u(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:D}}function D(){return{value:void 0,done:!0}}return f.prototype=h,r(y,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:f,configurable:!0}),f.displayName=c(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),c(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new E(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),c(y,l,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}var W=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var r,l;return Object(i.a)(this,n),(l=t.call(this,e)).removeFormFields=function(e,t){console.log(e,t),z()("Warning","Sure You Want to Delete it",{buttons:{cancel:"cancel",catch:{text:"Delete ",value:"delete"}}}).then((function(n){switch(n){case"delete":Object(G.hd)(V.Ab,null===e||void 0===e?void 0:e.Id).then((function(e){console.log(e);var n=l.state.formValues;n.splice(t,1),l.setState({formValues:n})})).catch((function(e){console.log(e)}))}}))},l.handleSubmit=function(){var e=Object(o.a)(J().mark((function e(t){var n,r,a,o,i,c;return J().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.setState({Loading:!0}),t.preventDefault(),n=JSON.parse(localStorage.getItem("userData")),r=[],r=l.state.DepartmentPresent?null===(a=l.state.formValues)||void 0===a?void 0:a.map((function(e,t){return{departmentName:null===e||void 0===e?void 0:e.DepartmentName,departmentDesc:null===e||void 0===e?void 0:e.Description,database:null===n||void 0===n?void 0:n.database,departmentId:(null===e||void 0===e?void 0:e.Id)?null===e||void 0===e?void 0:e.Id:null,created_by:null===n||void 0===n?void 0:n._id}})):null===(o=l.state.formValues)||void 0===o?void 0:o.map((function(e,t){return{departmentName:null===e||void 0===e?void 0:e.DepartmentName,departmentDesc:null===e||void 0===e?void 0:e.Description,database:null===n||void 0===n?void 0:n.database,departmentId:(null===e||void 0===e?void 0:e.Id)?null===e||void 0===e?void 0:e.Id:null,created_by:null===n||void 0===n?void 0:n._id}})),i={Departments:r},c=V.C,e.next=9,Object(G.kd)(c,i).then((function(e){l.setState({Loading:!1}),z()("Departments Created"),localStorage.setItem("CompanyDepartments",JSON.stringify(i))})).catch((function(e){l.setState({Loading:!1}),console.log(e)}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l.handleShowDepartment=function(){var e=JSON.parse(localStorage.getItem("userData")),t="".concat(V.jc,"/").concat(null===e||void 0===e?void 0:e.database);Object(G.jd)(t).then((function(e){var t,n=null===e||void 0===e||null===(t=e.Department)||void 0===t?void 0:t.filter((function(e){return"Active"==(null===e||void 0===e?void 0:e.status)}));if(n){var r=null===n||void 0===n?void 0:n.map((function(e,t){return{DepartmentName:null===e||void 0===e?void 0:e.departmentName,Description:null===e||void 0===e?void 0:e.departmentDesc,Id:null===e||void 0===e?void 0:e._id}}));(null===r||void 0===r?void 0:r.length)&&l.setState({DepartmentPresent:!0}),l.setState({formValues:r})}})).catch((function(e){console.log(e)}))},l.toggleModal=function(){l.setState((function(e){return{modal:!e.modal}}))},l.onGridReady=function(e){l.gridApi=e.api,l.gridColumnApi=e.columnApi,l.setState({currenPageSize:l.gridApi.paginationGetCurrentPage()+1,getPageSize:l.gridApi.paginationGetPageSize(),totalPages:l.gridApi.paginationGetTotalPages()})},l.updateSearchQuery=function(e){l.gridApi.setQuickFilter(e)},l.filterSize=function(e){l.gridApi&&(l.gridApi.paginationSetPageSize(Number(e)),l.setState({currenPageSize:e,getPageSize:e}))},l.handleParentSubmit=function(e){e.preventDefault(),l.setState({MasterRoleList:!1});var t=JSON.parse(localStorage.getItem("SuperadminIdByMaster")),n=t.split(" ")[0],r=t.split(" ")[1];l.Apicalling(n,r,!1)},l.handleDropdownChange=function(e){localStorage.setItem("SuperadminIdByMaster",JSON.stringify(e))},l.state={rowData:[],isOpen:!1,formValues:[{DepartmentName:"",Description:""}],modal:!1,DepartmentName:"",InsiderPermissions:{},userData:{},paginationPageSize:20,Position:0,MasterShow:!1,DepartmentPresent:!1,MasterRoleList:!1,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Role Name",field:"roleName",filter:!0,resizable:!0,width:160,cellRendererFramework:function(e){var t;return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("div",{className:""},m.a.createElement("span",null,null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.roleName)))}},{headerName:"Role desc",field:"desc",filter:!0,resizable:!0,width:230,cellRendererFramework:function(e){var t;return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("div",{className:""},m.a.createElement("span",null,null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.desc)))}},(r={headerName:"Actions",field:"sortorder"},Object(a.a)(r,"field","transactions"),Object(a.a)(r,"width",200),Object(a.a)(r,"cellRendererFramework",(function(e){var t,n,r,a,o,i;return m.a.createElement("div",{className:"actions cursor-pointer"},l.state.userData&&(null===(t=l.state.userData)||void 0===t?void 0:t._id)==(null===e||void 0===e||null===(n=e.data)||void 0===n||null===(r=n.createdBy)||void 0===r?void 0:r._id)?m.a.createElement(m.a.Fragment,null,(null===(a=l.state.userData)||void 0===a?void 0:a._id)==(null===e||void 0===e||null===(o=e.data)||void 0===o||null===(i=o.createdBy)||void 0===i?void 0:i._id)&&m.a.createElement(m.a.Fragment,null,l.state.InsiderPermissions&&l.state.InsiderPermissions.Edit&&m.a.createElement(F.b,{render:function(t){var n=t.history;return m.a.createElement("span",{style:{border:"1px solid white",padding:"10px",borderRadius:"30px",backgroundColor:"rgb(212, 111, 16)",marginLeft:"3px"}},m.a.createElement(f.B,{className:"",size:"20px",color:"white",onClick:function(){var t;return n.push({pathname:"/app/freshlist/account/editRole/".concat(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t._id),data:e})}}))}}))):m.a.createElement(m.a.Fragment,null,l.state.MasterShow&&l.state.MasterShow&&m.a.createElement(F.b,{render:function(t){var n=t.history;return m.a.createElement("span",{style:{border:"1px solid white",padding:"10px",borderRadius:"30px",backgroundColor:"rgb(212, 111, 16)",marginLeft:"3px"}},m.a.createElement(f.B,{className:"",size:"20px",color:"white",onClick:function(){var t;return n.push({pathname:"/app/freshlist/account/editRole/".concat(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t._id),data:e})}}))}})))})),r)]},l.handleSubmit=l.handleSubmit.bind(Object(c.a)(l)),l}return Object(l.a)(n,[{key:"handleChange",value:function(e,t){var n=this.state.formValues;n[e][t.target.name]=t.target.value,this.setState({formValues:n})}},{key:"addFormFields",value:function(){this.setState({formValues:[].concat(Object(r.a)(this.state.formValues),[{DepartmentName:"",Description:""}])})}},{key:"Apicalling",value:function(){var e=Object(o.a)(J().mark((function e(t,n,r){var a=this;return J().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({Loading:!0}),!r){e.next=6;break}return e.next=4,Object(G.id)(V.Ic,t).then((function(e){console.log(null===e||void 0===e?void 0:e.Role),a.setState({Loading:!1}),a.setState({rowData:null===e||void 0===e?void 0:e.Role})})).catch((function(e){a.setState({Loading:!1}),a.setState({rowData:[]}),console.log(e)}));case 4:e.next=8;break;case 6:return e.next=8,Object(G.tb)(t,n).then((function(e){a.setState({Loading:!1}),a.setState({rowData:null===e||void 0===e?void 0:e.Role})})).catch((function(e){a.setState({Loading:!1}),a.setState({rowData:[]}),console.log(e)}));case 8:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(o.a)(J().mark((function e(){var t,n,r,a,o;return J().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.handleShowDepartment(),r=JSON.parse(localStorage.getItem("userData")),this.setState({Position:null===r||void 0===r?void 0:r.rolename.rank}),this.setState({userData:r}),"MASTER"===(null===r||void 0===r||null===(t=r.rolename)||void 0===t?void 0:t.roleName)&&(this.setState({MasterShow:!0}),this.setState({MasterRoleList:!0})),a="MASTER"==(null===r||void 0===r||null===(n=r.rolename)||void 0===n?void 0:n.roleName),o=Object(M.a)("Create User"),this.setState({InsiderPermissions:o}),e.next=10,this.Apicalling(null===r||void 0===r?void 0:r._id,null===r||void 0===r?void 0:r.database,a);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(e){var t=this,n=this.gridApi.getSelectedRows();z()("Warning","Sure You Want to Delete it",{buttons:{cancel:"cancel",catch:{text:"Delete ",value:"delete"}}}).then((function(r){switch(r){case"delete":var a=new FormData;a.append("user_id",e),t.gridApi.updateRowData({remove:n}),P.a.post("/userdelete",a).then((function(e){}))}}))}},{key:"render",value:function(){var e,t,n,r,a,o,i,l=this;if(this.state.Loading)return m.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:"20rem"}},m.a.createElement(h.a,{style:{height:"4rem",width:"4rem"},color:"primary"},"Loading..."));var c=this.state,s=c.rowData,u=c.columnDefs,d=c.defaultColDef;return m.a.createElement(v.a,{className:"app-user-list"},m.a.createElement(p.a,{sm:"12"},m.a.createElement(g.a,null,m.a.createElement(v.a,{className:"mt-2 mx-2 mr-2"},m.a.createElement(p.a,{lg:"1",md:"1",sm:"6",xs:"12"},m.a.createElement("h3",{className:"float-left",style:{fontWeight:"600"}},"Role List")),this.state.MasterShow&&m.a.createElement(p.a,null,m.a.createElement(T.a,{onDropdownChange:this.handleDropdownChange,onSubmit:this.handleParentSubmit})),this.state.InsiderPermissions&&(null===(e=this.state.InsiderPermissions)||void 0===e?void 0:e.Create)&&m.a.createElement(p.a,{lg:"2",md:"2",sm:"2"},m.a.createElement("div",{className:"d-flex justify-content-end"},m.a.createElement(F.b,{render:function(e){var t=e.history;return m.a.createElement(y.a,{style:{cursor:"pointer",backgroundColor:"#39cccc",color:"white",fontWeight:"600"},className:" float-right mb-1",color:"#39cccc",onClick:function(){return t.push("/app/freshlist/account/addRoleNew")}},m.a.createElement(f.D,{size:15})," Role")}}))),this.state.InsiderPermissions&&(null===(t=this.state.InsiderPermissions)||void 0===t?void 0:t.Create)&&m.a.createElement(p.a,{lg:"2",sm:"2"},m.a.createElement("div",{className:"d-flex justify-content-end"},m.a.createElement(F.b,{render:function(e){var t=e.history;return m.a.createElement(y.a,{style:{cursor:"pointer",backgroundColor:"#39cccc",color:"white",fontWeight:"600"},className:" float-right mb-1",color:"#39cccc",onClick:function(){t.push("/app/Ajgroup/account/DepartmentRoleAssign")}},"Role Assignment")}}))),this.state.InsiderPermissions&&(null===(n=this.state.InsiderPermissions)||void 0===n?void 0:n.Create)&&m.a.createElement(p.a,{lg:"2",sm:"2"},m.a.createElement("div",{className:"d-flex justify-content-end"},m.a.createElement(F.b,{render:function(e){e.history;return m.a.createElement(y.a,{style:{cursor:"pointer",backgroundColor:"#39cccc",color:"white",fontWeight:"600"},className:" float-right mb-1",color:"#39cccc",onClick:function(){l.toggleModal()}},"Department")}}))),this.state.InsiderPermissions&&(null===(r=this.state.InsiderPermissions)||void 0===r?void 0:r.View)&&m.a.createElement(m.a.Fragment,null,m.a.createElement(p.a,{lg:"2",sm:"2",md:"2",ms:"12"},m.a.createElement(F.b,{render:function(e){var t=e.history;return m.a.createElement(y.a,{style:{cursor:"pointer",backgroundColor:"#39cccc",color:"white",fontWeight:"600"},className:" float-right",color:"#39cccc",onClick:function(){return t.push("/app/freshlist/account/CreateHeirarchy")}},"View Hierarchy")}})))),this.state.InsiderPermissions&&(null===(a=this.state.InsiderPermissions)||void 0===a?void 0:a.View)&&m.a.createElement(b.a,{style:{marginTop:"-1.5rem"}},null===this.state.rowData?null:m.a.createElement("div",{className:"ag-theme-material w-100 my-1 ag-grid-table"},m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},m.a.createElement("div",{className:"mb-1"},m.a.createElement(E.a,{className:"p-1 ag-dropdown"},m.a.createElement(w.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,m.a.createElement(A.a,{className:"ml-50",size:15})),m.a.createElement(S.a,{right:!0},m.a.createElement(N.a,{tag:"div",onClick:function(){return l.filterSize(20)}},"20"),m.a.createElement(N.a,{tag:"div",onClick:function(){return l.filterSize(50)}},"50"),m.a.createElement(N.a,{tag:"div",onClick:function(){return l.filterSize(100)}},"100"),m.a.createElement(N.a,{tag:"div",onClick:function(){return l.filterSize(134)}},"134")))),m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},m.a.createElement("div",{className:"table-input mr-1"},m.a.createElement(x.a,{placeholder:"Search here...",onChange:function(e){return l.updateSearchQuery(e.target.value)},value:this.state.value})),this.state.InsiderPermissions&&(null===(o=this.state.InsiderPermissions)||void 0===o?void 0:o.Download)&&m.a.createElement("div",{className:"export-btn"},m.a.createElement(y.a.Ripple,{color:"primary",onClick:function(){return l.gridApi.exportDataAsCsv()}},"Export as CSV")))),m.a.createElement(I.a.Consumer,{className:"ag-theme-alpine"},(function(e){return m.a.createElement(_.AgGridReact,{id:"myAgGrid",gridOptions:l.gridOptions,rowSelection:"multiple",defaultColDef:d,columnDefs:u,rowData:s,onGridReady:l.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:l.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===e.state.direction,ref:l.gridRef,domLayout:"autoHeight"})})))))),m.a.createElement(j.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:this.props.className,style:{maxWidth:"1050px"}},m.a.createElement(O.a,{toggle:this.toggleModal},"Add Department"),m.a.createElement(D.a,{className:"modalbodyhead"},m.a.createElement("div",{className:"d-flex justify-content-center mb-2"},m.a.createElement("b",null,m.a.createElement("h3",null,"Create Your Departments"))),m.a.createElement(L.a,{onSubmit:this.handleSubmit},null===(i=this.state.formValues)||void 0===i?void 0:i.map((function(e,t){return m.a.createElement(v.a,{key:t},m.a.createElement(p.a,{lg:"4",sm:"6",md:"4",className:"mb-2"},m.a.createElement(k.a,{className:"mb-1"},"Create Department"),m.a.createElement(x.a,{required:!0,placeholder:"Department Name",name:"DepartmentName",value:e.DepartmentName||"",onChange:function(e){return l.handleChange(t,e)},type:"text"})),m.a.createElement(p.a,{lg:"4",sm:"6",md:"4",className:"mb-2"},m.a.createElement(k.a,{className:"mb-1"}," Description"),m.a.createElement("textarea",{className:"form-control",rows:2,required:!0,placeholder:"Department Description",name:"Description",value:e.Description||"",onChange:function(e){return l.handleChange(t,e)},type:"text"})),m.a.createElement(p.a,{lg:"4",sm:"6",md:"4",className:""},m.a.createElement("div",{className:"mt-4"},t?m.a.createElement(y.a,{color:"danger",type:"button",className:"button remove",onClick:function(){return l.removeFormFields(e,t)}},"Remove"):null,m.a.createElement(y.a,{color:"primary",className:"button add ml-1",type:"button",onClick:function(){return l.addFormFields()}},"Add"))))})),m.a.createElement("div",{className:"d-flex justify-content-center mt-1"},m.a.createElement(y.a,{type:"submit",color:"primary"},"Submit"))))))}}]),n}(m.a.Component);W.contextType=C.a,t.default=W},971:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(1);var r=function(e){var t,n,r=JSON.parse(localStorage.getItem("userData")),a=null===r||void 0===r||null===(t=r.rolename)||void 0===t||null===(n=t.rolePermission)||void 0===n?void 0:n.find((function(t){return(null===t||void 0===t?void 0:t.pagename)==e}));return{View:null===a||void 0===a?void 0:a.permission.includes("View"),Create:null===a||void 0===a?void 0:a.permission.includes("Create"),Edit:null===a||void 0===a?void 0:a.permission.includes("Edit"),Delete:null===a||void 0===a?void 0:a.permission.includes("Delete"),Download:null===a||void 0===a?void 0:a.permission.includes("Download")}}}}]);
//# sourceMappingURL=230.71f893e6.chunk.js.map
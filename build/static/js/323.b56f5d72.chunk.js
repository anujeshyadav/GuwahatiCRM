/*! For license information please see 323.b56f5d72.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[323],{3175:function(e,t,n){"use strict";n.r(t);var l=n(24),a=n(4),o=n(60),r=n(9),i=n(26),u=n(1),c=n.n(u),d=n(233),v=n.n(d),m=n(912),s=n(904),p=n(905),f=n(244),g=n(916),b=n(906),h=n(943),y=n(907),E=n(894),O=n(908),_=n(137),j=n.n(_),x=(n(27),n(170)),w=n.n(x),C=(n(234),n(926)),N=n(927),S=n(928),k=n(134),F=n(932),L=n.n(F),D=n(85),T=n(73),G=n.n(T),R=(n(645),n(40)),A=(n(232),n(68)),I=n(5);function P(){P=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,l=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",r=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(S){u=function(e,t,n){return e[t]=n}}function c(e,t,n,a){var o=t&&t.prototype instanceof m?t:m,r=Object.create(o.prototype),i=new w(a||[]);return l(r,"_invoke",{value:O(e,n,i)}),r}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=c;var v={};function m(){}function s(){}function p(){}var f={};u(f,o,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(C([])));b&&b!==t&&n.call(b,o)&&(f=b);var h=p.prototype=m.prototype=Object.create(f);function y(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var a;l(this,"_invoke",{value:function(l,o){function r(){return new t((function(a,r){!function l(a,o,r,i){var u=d(e[a],e,o);if("throw"!==u.type){var c=u.arg,v=c.value;return v&&"object"==typeof v&&n.call(v,"__await")?t.resolve(v.__await).then((function(e){l("next",e,r,i)}),(function(e){l("throw",e,r,i)})):t.resolve(v).then((function(e){c.value=e,r(c)}),(function(e){return l("throw",e,r,i)}))}i(u.arg)}(l,o,a,r)}))}return a=a?a.then(r,r):r()}})}function O(e,t,n){var l="suspendedStart";return function(a,o){if("executing"===l)throw new Error("Generator is already running");if("completed"===l){if("throw"===a)throw o;return N()}for(n.method=a,n.arg=o;;){var r=n.delegate;if(r){var i=_(r,n);if(i){if(i===v)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===l)throw l="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);l="executing";var u=d(e,t,n);if("normal"===u.type){if(l=n.done?"completed":"suspendedYield",u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(l="completed",n.method="throw",n.arg=u.arg)}}}function _(e,t){var n=t.method,l=e.iterator[n];if(void 0===l)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=d(l,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,v;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,v):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function C(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var l=-1,a=function t(){for(;++l<e.length;)if(n.call(e,l))return t.value=e[l],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return s.prototype=p,l(h,"constructor",{value:p,configurable:!0}),l(p,"constructor",{value:s,configurable:!0}),s.displayName=u(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===s||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,u(e,i,"GeneratorFunction")),e.prototype=Object.create(h),e},e.awrap=function(e){return{__await:e}},y(E.prototype),u(E.prototype,r,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,l,a,o){void 0===o&&(o=Promise);var r=new E(c(t,n,l,a),o);return e.isGeneratorFunction(n)?r:r.next().then((function(e){return e.done?e.value:r.next()}))},y(h),u(h,i,"Generator"),u(h,o,(function(){return this})),u(h,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var l in t)n.push(l);return n.reverse(),function e(){for(;n.length;){var l=n.pop();if(l in t)return e.value=l,e.done=!1,e}return e.done=!0,e}},e.values=C,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function l(n,l){return r.type="throw",r.arg=e,t.next=n,l&&(t.method="next",t.arg=void 0),!!l}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],r=o.completion;if("root"===o.tryLoc)return l("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return l(o.catchLoc,!0);if(this.prev<o.finallyLoc)return l(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return l(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return l(o.finallyLoc)}}}},abrupt:function(e,t){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var r=o?o.completion:{};return r.type=e,r.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(r)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var l=n.completion;if("throw"===l.type){var a=l.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:C(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),v}},e}var J=[];t.default=function(){var e=Object(u.useState)([]),t=Object(i.a)(e,2),n=t[0],d=t[1],_=Object(u.useState)([]),x=Object(i.a)(_,2),F=x[0],T=x[1],Y=Object(u.useState)([]),M=Object(i.a)(Y,2),W=M[0],K=M[1],V=Object(u.useState)([]),q=Object(i.a)(V,2),B=q[0],H=q[1],U=Object(u.useState)({}),z=Object(i.a)(U,2),Z=z[0],$=z[1],Q=Object(u.useState)(null),X=Object(i.a)(Q,2),ee=X[0],te=X[1],ne=Object(u.useState)({}),le=Object(i.a)(ne,2),ae=le[0],oe=le[1],re=Object(u.useState)({}),ie=Object(i.a)(re,2),ue=ie[0],ce=ie[1],de=Object(u.useState)([]),ve=Object(i.a)(de,2),me=ve[0],se=ve[1],pe=Object(u.useState)({}),fe=Object(i.a)(pe,2),ge=fe[0],be=fe[1],he=Object(u.useState)([]),ye=Object(i.a)(he,2),Ee=ye[0],Oe=ye[1],_e=Object(u.useState)([]),je=Object(i.a)(_e,2),xe=je[0],we=je[1],Ce=Object(u.useState)(""),Ne=Object(i.a)(Ce,2),Se=Ne[0],ke=Ne[1],Fe=Object(u.useState)("Create"),Le=Object(i.a)(Fe,2),De=Le[0],Te=Le[1],Ge=Object(u.useState)(""),Re=Object(i.a)(Ge,2),Ae=Re[0],Ie=Re[1],Pe=Object(u.useState)({}),Je=Object(i.a)(Pe,2),Ye=(Je[0],Je[1],Object(u.useContext)(A.a)),Me=Object(D.g)(),We=Object(D.i)(),Ke=function(e,t,n){var l=e.target,a=l.name,i=l.value,u=l.checked;ke(n),"checkbox"==t?be(Object(r.a)(Object(r.a)({},ge),{},Object(o.a)({},a,u))):"number"==t?/^\d{0,10}$/.test(i)&&(be(Object(r.a)(Object(r.a)({},ge),{},Object(o.a)({},a,i))),Ie("")):"file"==t?e.target.files&&be(Object(r.a)(Object(r.a)({},ge),{},Object(o.a)({},a,e.target.files[0]))):i.length<=10?(be(Object(r.a)(Object(r.a)({},ge),{},Object(o.a)({},a,i))),Ie("")):be(Object(r.a)(Object(r.a)({},ge),{},Object(o.a)({},a,i)))};Object(u.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){new Date(e.timestamp).toLocaleString();ge.Geotagging="".concat(e.coords.latitude,",").concat(e.coords.longitude)}),(function(e){G()("Error: ".concat(e))}),{timeout:1e4,enableHighAccuracy:!0}):G()("Error: Geolocation not found")}),[]),Object(u.useEffect)((function(){0==(null===We||void 0===We?void 0:We.id)?Te("Create"):(Te("Edit"),Object(R.id)(I.Yd,null===We||void 0===We?void 0:We.id).then((function(e){var t,n=null===e||void 0===e?void 0:e.Customer[0];be(n);var l=null===n||void 0===n||null===(t=n.assignTransporter)||void 0===t?void 0:t.map((function(e){return null===e||void 0===e?void 0:e.id}));if((null===l||void 0===l?void 0:l.length)&&se(l),null===n||void 0===n?void 0:n.Country){var a,o=null===C.a||void 0===C.a||null===(a=C.a.getAllCountries())||void 0===a?void 0:a.filter((function(e,t){return(null===e||void 0===e?void 0:e.name)==(null===n||void 0===n?void 0:n.Country)}));if($(o),null===n||void 0===n?void 0:n.State){var r,i,u=null===N.a||void 0===N.a||null===(r=N.a.getStatesOfCountry(null===(i=o[0])||void 0===i?void 0:i.isoCode))||void 0===r?void 0:r.filter((function(e,t){return(null===e||void 0===e?void 0:e.name)==(null===n||void 0===n?void 0:n.State)}));if(oe(u),console.log(u),null===n||void 0===n?void 0:n.City){var c,d,v,m=null===(c=S.a.getCitiesOfState(null===(d=u[0])||void 0===d?void 0:d.countryCode,null===(v=u[0])||void 0===v?void 0:v.isoCode))||void 0===c?void 0:c.filter((function(e,t){return(null===e||void 0===e?void 0:e.name)==(null===n||void 0===n?void 0:n.City)}));ce(m)}}}(null===n||void 0===n?void 0:n.status)&&(ge.status=null===n||void 0===n?void 0:n.status)})).catch((function(e){console.log(e)})));var e=JSON.parse(localStorage.getItem("userData"));Object(R.id)(I.Y,null===e||void 0===e?void 0:e.database).then((function(e){var t=null===e||void 0===e?void 0:e.Transporter;(null===t||void 0===t?void 0:t.length)&&(K(t),H(t))})).catch((function(e){console.log(e)}))}),[]),Object(u.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));Object(R.id)(I.Wd,null===e||void 0===e?void 0:e.database).then((function(e){var t,n=null===e||void 0===e||null===(t=e.CustomerGroup)||void 0===t?void 0:t.filter((function(e){return"Active"==(null===e||void 0===e?void 0:e.status)}));we(n)})).catch((function(e){console.log(e)})),Object(R.tb)(null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.database).then((function(e){var t,n=null===e||void 0===e||null===(t=e.Role)||void 0===t?void 0:t.filter((function(e,t){var n,l;return null===e||void 0===e||null===(n=e.roleName)||void 0===n||null===(l=n.toLowerCase())||void 0===l?void 0:l.includes("customer")}));T(n)})).catch((function(e){console.log(e),G()("Roles List Not found")}))}),[]),Object(u.useEffect)((function(){Object(R.p)().then((function(e){var t,n,l,a,o,r=v.a.xml2json(e.data,{compact:!0,spaces:2});console.log(null===(t=JSON.parse(r))||void 0===t?void 0:t.CreateCustomer),d(null===(n=JSON.parse(r))||void 0===n||null===(l=n.CreateCustomer)||void 0===l?void 0:l.input),Oe(null===(a=JSON.parse(r))||void 0===a||null===(o=a.CreateCustomer)||void 0===o?void 0:o.MyDropDown)})).catch((function(e){console.log(e),G()("Something Went Wrong")}))}),[]);var Ve=function(){var e=Object(a.a)(P().mark((function e(t){var l,a,o;return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),null===ee&&void 0==ee){e.next=8;break}return(l=new FormData).append("file",ee),e.next=6,Object(R.gd)(I.i,l).then((function(e){G()("".concat(null===e||void 0===e?void 0:e.message))})).catch((function(e){console.log(e),G()("Something Went Wrong")}));case 6:e.next=17;break;case 8:a=JSON.parse(localStorage.getItem("userData")),o=new FormData,null===Ee||void 0===Ee||Ee.map((function(e,t){var n,l,a,r;o.append("".concat(null===e||void 0===e||null===(n=e.dropdown)||void 0===n||null===(l=n.name)||void 0===l?void 0:l._text),ge[null===e||void 0===e||null===(a=e.dropdown)||void 0===a||null===(r=a.name)||void 0===r?void 0:r._text])})),null===n||void 0===n||n.map((function(e,t){var n,l,a,r,i,u;if("text"==(null===e||void 0===e||null===(n=e.type)||void 0===n||null===(l=n._attributes)||void 0===l?void 0:l.type))if("transporter_detail"==(null===e||void 0===e?void 0:e.name._text)){if(o.append("".concat(null===e||void 0===e?void 0:e.name._text),ge[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text]),"other"==ge.transporter_detail){var c=null===W||void 0===W?void 0:W.map((function(e){return{id:null===e||void 0===e?void 0:e._id}}));o.append("assignTransporter",JSON.stringify(c))}}else o.append("".concat(null===e||void 0===e?void 0:e.name._text),ge[null===e||void 0===e||null===(u=e.name)||void 0===u?void 0:u._text]);else if("file"==(null===e||void 0===e||null===(a=e.type)||void 0===a||null===(r=a._attributes)||void 0===r?void 0:r.type)){var d,v,m,s,p,f;if("Shopphoto"==(null===e||void 0===e||null===(d=e.name)||void 0===d?void 0:d._text))null===(m=ge[null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s._text])||void 0===m||m.map((function(t,n){var l;o.append("file",ge[null===e||void 0===e||null===(l=e.name)||void 0===l?void 0:l._text][n])}));if("photo"==(null===e||void 0===e||null===(v=e.name)||void 0===v?void 0:v._text))null===(p=ge[null===e||void 0===e||null===(f=e.name)||void 0===f?void 0:f._text])||void 0===p||p.map((function(t,n){var l;o.append("files",ge[null===e||void 0===e||null===(l=e.name)||void 0===l?void 0:l._text][n])}))}else{var g,b,h,y;o.append("".concat(null===e||void 0===e||null===(g=e.name)||void 0===g?void 0:g._text),ge[null===e||void 0===e||null===(b=e.name)||void 0===b?void 0:b._text]&&ge[null===e||void 0===e||null===(h=e.name)||void 0===h?void 0:h._text]?ge[null===e||void 0===e||null===(y=e.name)||void 0===y?void 0:y._text]:null)}})),o.append("status",null===ge||void 0===ge?void 0:ge.status),o.append("database",null===a||void 0===a?void 0:a.database),o.append("rolename",null===ge||void 0===ge?void 0:ge.rolename),navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){new Date(e.timestamp).toLocaleString();o.append("latitude",e.coords.latitude),o.append("longitude",e.coords.longitude)}),(function(e){G()("Error: ".concat(e))}),{timeout:1e4,enableHighAccuracy:!0}):G()("Error: Geolocation not found"),Ae||Object(R.o)(o).then((function(e){console.log(e),be({}),e.status&&(Me.goBack(),G()("Customer Created Successfully"))})).catch((function(e){console.log(e.response),G()("something Went Wrong")}));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),qe=function(e,t){se(e),console.log(e)},Be=function(e,t){console.log(e),se(e)};return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(m.a,null,c.a.createElement(s.a,{className:"m-2"},c.a.createElement(p.a,{lg:"2",md:"2"},c.a.createElement("h1",{className:"float-left"},De&&De," Customer")),c.a.createElement(p.a,null),c.a.createElement(p.a,{lg:"2",md:"2"},c.a.createElement("div",{className:"float-right"},c.a.createElement(D.b,{render:function(e){var t=e.history;return c.a.createElement(f.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",onClick:function(){return t.push("/app/SoftNumen/CustomerSearch")}}," ","Back")}}))),c.a.createElement(p.a,{lg:"2",md:"2"},c.a.createElement("div",{className:"float-right"},c.a.createElement(D.b,{render:function(e){var t=e.history;return c.a.createElement(f.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",onClick:function(){return t.push("/app/ajgroup/house/CustomerGroupList")}}," ","+ Customer Group")}})))),c.a.createElement(g.a,null,c.a.createElement(b.a,{className:"m-1",onSubmit:Ve},c.a.createElement(s.a,{className:"mb-2"},c.a.createElement(p.a,{lg:"4",md:"4"},c.a.createElement(h.a,null,c.a.createElement(y.a,{className:"mb-1"},"Role List *"),c.a.createElement(E.a,{required:!0,type:"select",name:"rolename",value:ge.rolename,onChange:function(e){var t,n,l=null===(t=e.target.options[e.target.selectedIndex].getAttribute("data-name"))||void 0===t?void 0:t.split(" ");be(Object(r.a)(Object(r.a)({},ge),{},(n={},Object(o.a)(n,"rolename",e.target.value),Object(o.a)(n,"roleName",l[1]),n)))}},c.a.createElement("option",null,"--select Role--"),F&&(null===F||void 0===F?void 0:F.length)&&(null===F||void 0===F?void 0:F.map((function(e,t){return c.a.createElement("option",{"data-name":"".concat(null===e||void 0===e?void 0:e.position," ").concat(null===e||void 0===e?void 0:e.roleName),value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.roleName)})))))),Ee&&Ee?c.a.createElement(c.a.Fragment,null,null===Ee||void 0===Ee?void 0:Ee.map((function(e,t){var n,l,a,o,r,i,u,d,v,m,s,f,g,b,O,_,j,x,w,C,N,S;return(null===ge||void 0===ge?void 0:ge.roleName)&&"Transporter"==(null===ge||void 0===ge?void 0:ge.roleName)?"Select Party Type"==(null===e||void 0===e||null===(n=e.dropdown)||void 0===n||null===(l=n.label)||void 0===l?void 0:l._text)?null:c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,null,c.a.createElement(y.a,{className:"mb-1"},(null===e||void 0===e||null===(a=e.dropdown)||void 0===a||null===(o=a.label)||void 0===o?void 0:o._text)&&(null===e||void 0===e||null===(r=e.dropdown)||void 0===r||null===(i=r.label)||void 0===i?void 0:i._text)),c.a.createElement(E.a,{required:!0,type:"select",name:null===e||void 0===e||null===(u=e.dropdown)||void 0===u||null===(d=u.name)||void 0===d?void 0:d._text,value:ge[null===e||void 0===e||null===(v=e.dropdown)||void 0===v||null===(m=v.name)||void 0===m?void 0:m._text],onChange:Ke},c.a.createElement("option",{value:""},"--Select --"),null===e||void 0===e||null===(s=e.dropdown)||void 0===s||null===(f=s.option)||void 0===f?void 0:f.map((function(e,t){var n,l;return c.a.createElement("option",{key:t,value:null===e||void 0===e||null===(n=e._attributes)||void 0===n?void 0:n.value},null===e||void 0===e||null===(l=e._attributes)||void 0===l?void 0:l.value)})))))):c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,null,c.a.createElement(y.a,{className:"mb-1"},(null===e||void 0===e||null===(g=e.dropdown)||void 0===g||null===(b=g.label)||void 0===b?void 0:b._text)&&(null===e||void 0===e||null===(O=e.dropdown)||void 0===O||null===(_=O.label)||void 0===_?void 0:_._text)),c.a.createElement(E.a,{required:!0,type:"select",name:null===e||void 0===e||null===(j=e.dropdown)||void 0===j||null===(x=j.name)||void 0===x?void 0:x._text,value:ge[null===e||void 0===e||null===(w=e.dropdown)||void 0===w||null===(C=w.name)||void 0===C?void 0:C._text],onChange:Ke},c.a.createElement("option",{value:""},"--Select --"),null===e||void 0===e||null===(N=e.dropdown)||void 0===N||null===(S=N.option)||void 0===S?void 0:S.map((function(e,t){var n,l;return c.a.createElement("option",{key:t,value:null===e||void 0===e||null===(n=e._attributes)||void 0===n?void 0:n.value},null===e||void 0===e||null===(l=e._attributes)||void 0===l?void 0:l.value)}))))))}))):null,n&&(null===n||void 0===n?void 0:n.map((function(e,t){var n,a,i,u,d,v,m,s,f,g;if("Category"==(null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text))return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,null,c.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(v=e.label)||void 0===v?void 0:v._text," *"),c.a.createElement(E.a,{value:null===ge||void 0===ge||null===(m=ge.ele)||void 0===m||null===(s=m.name)||void 0===s?void 0:s._text,onChange:function(t){var n;be(Object(r.a)(Object(r.a)({},ge),{},Object(o.a)({},null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,t.target.value)))},type:"select"},c.a.createElement("option",null,"--Select Category--"),xe&&(null===xe||void 0===xe?void 0:xe.map((function(e,t){return c.a.createElement("option",{key:null===e||void 0===e?void 0:e._id,value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.groupName)})))),Se===t?c.a.createElement(c.a.Fragment,null,Ae&&c.a.createElement("span",{style:{color:"red"}},Ae)):c.a.createElement(c.a.Fragment,null))));if((null===ge||void 0===ge?void 0:ge.Registration_Type)&&"Unregistered"==(null===ge||void 0===ge?void 0:ge.Registration_Type)&&(null===e||void 0===e||null===(f=e.label)||void 0===f?void 0:f._text.includes("GST Number")))return null;if((null===e||void 0===e||null===(a=e.label)||void 0===a?void 0:a._text)&&(null===e||void 0===e||null===(i=e.label)||void 0===i||null===(u=i._text)||void 0===u||null===(d=u.toLowerCase())||void 0===d?void 0:d.includes("transporter")))return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,null,c.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(g=e.label)||void 0===g?void 0:g._text),c.a.createElement(E.a,{value:ge.transporter_detail,onChange:function(t){var n;"other"==t.target.value&&function(e){var t=Object(l.a)(B);J=[],null===t||void 0===t||t.map((function(e){var t;null===e||void 0===e||null===(t=e.City)||void 0===t||t.map((function(t){var n;(null===t||void 0===t?void 0:t.name.includes(null===ge||void 0===ge?void 0:ge.City))&&(null===(n=J)||void 0===n||n.push(e))}))})),K(J)}(t.target.value),be(Object(r.a)(Object(r.a)({},ge),{},Object(o.a)({},null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,t.target.value)))},type:"select"},c.a.createElement("option",null,"--Select Transporter Type--"),c.a.createElement("option",{value:"Local"},"Local"),c.a.createElement("option",{value:"other"},"Other")),Se===t?c.a.createElement(c.a.Fragment,null,Ae&&c.a.createElement("span",{style:{color:"red"}},Ae)):c.a.createElement(c.a.Fragment,null))),(null===ge||void 0===ge?void 0:ge.transporter_detail)&&"other"==(null===ge||void 0===ge?void 0:ge.transporter_detail)?c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,null,c.a.createElement(y.a,{className:"mb-1"},"Transporter List"),c.a.createElement(j.a,{required:!0,isObject:"false",options:W,selectedValues:me&&me,onSelect:qe,onRemove:Be,displayValue:"firstName"}),Se===t?c.a.createElement(c.a.Fragment,null,Ae&&c.a.createElement("span",{style:{color:"red"}},Ae)):c.a.createElement(c.a.Fragment,null)))):null);var b,_,x,F,D,T,G,R,A,I,P,Y,M,V,q,H,U,z,Q,X,ee,te,ne,le,re,ie,de,ve,se,pe,fe,he,ye,Ee,Oe,_e,je,we,Ce,Ne,Fe,Le,De,Te,Ge,Re,Ie;L()("2022-08-05T12:00:00").tz("America/New_York").format("D MMM, YYYY HH:mm");return(null===e||void 0===e?void 0:e.phoneinput)?c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,null,c.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(b=e.label)||void 0===b?void 0:b._text),c.a.createElement(w.a,{inputClass:"myphoneinput",country:"us",onKeyDown:function(t){var n,l;"number"==(null===e||void 0===e||null===(n=e.type)||void 0===n||null===(l=n._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(_=e.name)||void 0===_?void 0:_._text,value:ge[null===e||void 0===e||null===(x=e.name)||void 0===x?void 0:x._text],onChange:function(t){var n;be(Object(r.a)(Object(r.a)({},ge),{},Object(o.a)({},null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,t)))}}),Se===t?c.a.createElement(c.a.Fragment,null,Ae&&c.a.createElement("span",{style:{color:"red"}},Ae)):c.a.createElement(c.a.Fragment,null)))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(F=e.label._text)||void 0===F?void 0:F.includes("ountry"))?c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,null,c.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(G=e.label)||void 0===G?void 0:G._text),c.a.createElement(k.a,{inputClass:"countryclass",className:"countryclassnw",options:C.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:Z,onChange:function(e){$(e),be(Object(r.a)(Object(r.a)({},ge),{},Object(o.a)({},"Country",null===e||void 0===e?void 0:e.name)))}}),Se===t?c.a.createElement(c.a.Fragment,null,Ae&&c.a.createElement("span",{style:{color:"red"}},Ae)):c.a.createElement(c.a.Fragment,null))):(null===e||void 0===e||null===(D=e.label._text)||void 0===D?void 0:D.includes("tate"))?c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,null,c.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(R=e.label)||void 0===R?void 0:R._text),c.a.createElement(k.a,{options:null===N.a||void 0===N.a?void 0:N.a.getStatesOfCountry(null===Z||void 0===Z?void 0:Z.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:ae,onChange:function(e){oe(e),be(Object(r.a)(Object(r.a)({},ge),{},Object(o.a)({},"State",null===e||void 0===e?void 0:e.name)))}}),Se===t?c.a.createElement(c.a.Fragment,null,Ae&&c.a.createElement("span",{style:{color:"red"}},Ae)):c.a.createElement(c.a.Fragment,null))):(null===e||void 0===e||null===(T=e.label._text)||void 0===T?void 0:T.includes("ity"))?c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,null,c.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(A=e.label)||void 0===A?void 0:A._text),c.a.createElement(k.a,{options:null===S.a||void 0===S.a?void 0:S.a.getCitiesOfState(null===ae||void 0===ae?void 0:ae.countryCode,null===ae||void 0===ae?void 0:ae.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:ue,onChange:function(e){var t;ce(e),be(Object(r.a)(Object(r.a)({},ge),{},(t={},Object(o.a)(t,"City",null===e||void 0===e?void 0:e.name),Object(o.a)(t,"transporter_detail","Local"),t)))}}),Se===t?c.a.createElement(c.a.Fragment,null,Ae&&c.a.createElement("span",{style:{color:"red"}},Ae)):c.a.createElement(c.a.Fragment,null))):c.a.createElement(c.a.Fragment,null,"date"==(null===e||void 0===e||null===(I=e.type)||void 0===I||null===(P=I._attributes)||void 0===P?void 0:P.type)?c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,{key:t},c.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(Y=e.label)||void 0===Y?void 0:Y._text),c.a.createElement(O.a,{onKeyDown:function(t){var n,l;"number"==(null===e||void 0===e||null===(n=e.type)||void 0===n||null===(l=n._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(M=e.type)||void 0===M||null===(V=M._attributes)||void 0===V?void 0:V.type,placeholder:null===e||void 0===e||null===(q=e.placeholder)||void 0===q?void 0:q._text,name:null===e||void 0===e||null===(H=e.name)||void 0===H?void 0:H._text,dateFormat:null===Ye||void 0===Ye||null===(U=Ye.UserInformatio)||void 0===U?void 0:U.dateFormat,value:L()(ge[null===e||void 0===e||null===(z=e.name)||void 0===z?void 0:z._text]).tz(null===Ye||void 0===Ye||null===(Q=Ye.UserInformatio)||void 0===Q?void 0:Q.timeZone).format(null===Ye||void 0===Ye||null===(X=Ye.UserInformatio)||void 0===X?void 0:X.dateFormat),onChange:function(n){var l,a;return Ke(n,null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type,t)}}),Se===t?c.a.createElement(c.a.Fragment,null,Ae&&c.a.createElement("span",{style:{color:"red"}},Ae)):c.a.createElement(c.a.Fragment,null)))):c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,{key:t},c.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(ee=e.label)||void 0===ee?void 0:ee._text),c.a.createElement(O.a,{onKeyDown:function(t){var n,l;"number"==(null===e||void 0===e||null===(n=e.type)||void 0===n||null===(l=n._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(te=e.type)||void 0===te||null===(ne=te._attributes)||void 0===ne?void 0:ne.type,placeholder:null===e||void 0===e||null===(le=e.placeholder)||void 0===le?void 0:le._text,name:null===e||void 0===e||null===(re=e.name)||void 0===re?void 0:re._text,value:ge[null===e||void 0===e||null===(ie=e.name)||void 0===ie?void 0:ie._text],onChange:function(n){var l,a;return Ke(n,null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type,t)}}),Se===t?c.a.createElement(c.a.Fragment,null,Ae&&c.a.createElement("span",{style:{color:"red"}},Ae)):c.a.createElement(c.a.Fragment,null))))):c.a.createElement(c.a.Fragment,null,(null===e||void 0===e?void 0:e.number)?c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,{key:t},c.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(de=e.label)||void 0===de?void 0:de._text),c.a.createElement(O.a,{onWheel:function(e){e.preventDefault()},onKeyDown:function(t){var n,l;"number"==(null===e||void 0===e||null===(n=e.type)||void 0===n||null===(l=n._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(ve=e.type)||void 0===ve||null===(se=ve._attributes)||void 0===se?void 0:se.type,placeholder:null===e||void 0===e||null===(pe=e.placeholder)||void 0===pe?void 0:pe._text,name:null===e||void 0===e||null===(fe=e.name)||void 0===fe?void 0:fe._text,value:ge[null===e||void 0===e||null===(he=e.name)||void 0===he?void 0:he._text],onChange:function(n){var l,a;return Ke(n,null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type,t)}}),Se===t?c.a.createElement(c.a.Fragment,null,Ae&&c.a.createElement("span",{style:{color:"red"}},Ae)):c.a.createElement(c.a.Fragment,null)))):c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,{key:t},(null===e||void 0===e||null===(ye=e.type)||void 0===ye||null===(Ee=ye._attributes)||void 0===Ee?void 0:Ee.type)&&"file"==(null===e||void 0===e||null===(Oe=e.type)||void 0===Oe||null===(_e=Oe._attributes)||void 0===_e?void 0:_e.type)?c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(je=e.label)||void 0===je?void 0:je._text),c.a.createElement(O.a,{multiple:!0,className:"form-control",type:null===e||void 0===e||null===(we=e.type)||void 0===we||null===(Ce=we._attributes)||void 0===Ce?void 0:Ce.type,placeholder:null===e||void 0===e||null===(Ne=e.placeholder)||void 0===Ne?void 0:Ne._text,name:null===e||void 0===e||null===(Fe=e.name)||void 0===Fe?void 0:Fe._text,onChange:function(n){var l,a;!function(e,t,n){var l=e.target,a=l.name,i=(l.value,l.checked,Array.from(e.target.files));ke(n),be(Object(r.a)(Object(r.a)({},ge),{},Object(o.a)({},a,i)))}(n,null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a||a.type,t)}}),Se===t?c.a.createElement(c.a.Fragment,null,Ae&&c.a.createElement("span",{style:{color:"red"}},Ae)):c.a.createElement(c.a.Fragment,null)):c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(Le=e.label)||void 0===Le?void 0:Le._text),c.a.createElement(O.a,{className:"form-control",onKeyDown:function(t){var n,l;"number"==(null===e||void 0===e||null===(n=e.type)||void 0===n||null===(l=n._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(De=e.type)||void 0===De||null===(Te=De._attributes)||void 0===Te?void 0:Te.type,placeholder:null===e||void 0===e||null===(Ge=e.placeholder)||void 0===Ge?void 0:Ge._text,name:null===e||void 0===e||null===(Re=e.name)||void 0===Re?void 0:Re._text,value:ge[null===e||void 0===e||null===(Ie=e.name)||void 0===Ie?void 0:Ie._text],onChange:function(n){var l,a;Ke(n,null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type,t)}}),Se===t?c.a.createElement(c.a.Fragment,null,Ae&&c.a.createElement("span",{style:{color:"red"}},Ae)):c.a.createElement(c.a.Fragment,null)))))})))),c.a.createElement(s.a,{className:"mt-2"},c.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},c.a.createElement(y.a,{className:"mb-0"},"Status"),c.a.createElement("div",{className:"form-label-group",onChange:function(e){be(Object(r.a)(Object(r.a)({},ge),{},Object(o.a)({},"status",e.target.value)))}},c.a.createElement("input",{checked:"Active"==ge.status,style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),c.a.createElement("span",{style:{marginRight:"20px"}},"Active"),c.a.createElement("input",{checked:"Deactive"==ge.status,style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),c.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),c.a.createElement(s.a,null,c.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit"))),c.a.createElement(b.a,{className:"m-1",onSubmit:Ve},c.a.createElement("hr",null),c.a.createElement(s.a,null,c.a.createElement(p.a,{lg:"12",md:"12",sm:"12"},c.a.createElement(y.a,null,"OR")),c.a.createElement(p.a,{lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,null,c.a.createElement(y.a,null,"Bulk Import"),c.a.createElement(O.a,{className:"form-control",type:"file",placeholder:"",name:"BulkImport",onChange:function(e){te(e.target.files[0])}})))),c.a.createElement(s.a,null,c.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Import")))))))}},943:function(e,t,n){"use strict";var l=n(10),a=n(12),o=n(1),r=n.n(o),i=n(2),u=n.n(i),c=n(8),d=n.n(c),v=n(7),m=["className","cssModule","row","disabled","check","inline","tag"],s={children:u.a.node,row:u.a.bool,check:u.a.bool,inline:u.a.bool,disabled:u.a.bool,tag:v.tagPropType,className:u.a.string,cssModule:u.a.object},p=function(e){var t=e.className,n=e.cssModule,o=e.row,i=e.disabled,u=e.check,c=e.inline,s=e.tag,p=Object(a.a)(e,m),f=Object(v.mapToCssModules)(d()(t,!!o&&"row",u?"form-check":"form-group",!(!u||!c)&&"form-check-inline",!(!u||!i)&&"disabled"),n);return"fieldset"===s&&(p.disabled=i),r.a.createElement(s,Object(l.a)({},p,{className:f}))};p.propTypes=s,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=323.b56f5d72.chunk.js.map
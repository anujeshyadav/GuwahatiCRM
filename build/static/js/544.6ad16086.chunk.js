/*! For license information please see 544.6ad16086.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[544],{3152:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(9),o=n(24),i=n(25),l=n(1),c=n.n(l),u=(n(233),n(913)),s=n(905),d=n(906),m=n(244),v=n(917),f=n(907),p=n(908),h=n(909),y=(n(234),n(135)),b=n.n(y),g=(n(232),n(43)),E=n(85),O=n(5),j=n(73),N=n.n(j);function w(){w=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(P){c=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),l=new x(a||[]);return r(i,"_invoke",{value:O(e,n,l)}),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=u;var d={};function m(){}function v(){}function f(){}var p={};c(p,o,(function(){return this}));var h=Object.getPrototypeOf,y=h&&h(h(L([])));y&&y!==t&&n.call(y,o)&&(p=y);var b=f.prototype=m.prototype=Object.create(p);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t((function(a,i){!function r(a,o,i,l){var c=s(e[a],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function O(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return _()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=j(i,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function j(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return v.prototype=f,r(b,"constructor",{value:f,configurable:!0}),r(f,"constructor",{value:v,configurable:!0}),v.displayName=c(f,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,l,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},g(E.prototype),c(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new E(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(b),c(b,l,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}var S=[],x=[],L=[];t.default=function(e){var t=Object(l.useState)(""),n=Object(i.a)(t,2),y=(n[0],n[1]),j=Object(l.useState)(""),_=Object(i.a)(j,2),P=(_[0],_[1],Object(l.useState)("")),k=Object(i.a)(P,2),q=k[0],T=(k[1],Object(l.useState)([])),Q=Object(i.a)(T,2),D=Q[0],I=Q[1],C=Object(l.useState)([]),G=Object(i.a)(C,2),R=G[0],z=G[1],F=Object(l.useState)([]),A=Object(i.a)(F,2),J=A[0],U=A[1],V=Object(l.useState)(""),M=Object(i.a)(V,2),Y=M[0],B=M[1],W=Object(l.useState)(0),H=Object(i.a)(W,2),K=H[0],X=H[1],Z=Object(l.useState)(0),$=Object(i.a)(Z,2),ee=($[0],$[1],Object(l.useState)({})),te=Object(i.a)(ee,2),ne=te[0],re=te[1],ae=Object(l.useState)(""),oe=Object(i.a)(ae,2),ie=oe[0],le=oe[1],ce=Object(l.useState)([{productId:"",availableQty:"",qty:1,price:"",totalprice:"",unitQty:"",Size:"",unitType:""}]),ue=Object(i.a)(ce,2),se=ue[0],de=ue[1],me=Object(E.g)(),ve=function(e,t,n){if(!(n>=e.target.value))return null;y(t);var r=e.target,a=r.name,i=r.value,l=Object(o.a)(se);l[t][a]=i;var c=0;l.length>0&&(c=(null===l||void 0===l?void 0:l.map((function(e){return console.log(e.qty*e.price),l[t].totalprice=e.qty*e.price,e.qty*e.price}))).reduce((function(e,t){return e+t})),console.log("GrandTotal",c)),de(l),X(c),console.log(S)},fe=function(e,t,n){var r=e.target,a=r.name,i=r.value;if(Number(i)<=n&&Number(0!=i)){y(t);var l=Object(o.a)(se);l[t][a]=Number(i);var c=0;if(l.length>0)c=(null===l||void 0===l?void 0:l.map((function(e){return S[t]=e.Size*e.qty*e.price,l[t].totalprice=e.Size*e.qty*e.price,e.Size*e.qty*e.price}))).reduce((function(e,t){return e+t}));de(l),X(c)}},pe=function(){var e=Object(r.a)(w().mark((function e(t,n,r){var i,l;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return JSON.parse(localStorage.getItem("userData")),x.push(n),i="".concat(O.Fe).concat(null===n||void 0===n?void 0:n.warehouse,"/"),e.next=5,Object(g.hd)(i,null===n||void 0===n?void 0:n._id).then((function(e){console.log(null===e||void 0===e?void 0:e.currentStock),l=null===e||void 0===e?void 0:e.currentStock})).catch((function(e){console.log(e),N()("something went Wrong")}));case 5:de((function(e){var t,i=Object(o.a)(e),c=Object(a.a)({},i[r]);return c.price=n.Product_MRP,c.productId=n._id,c.availableQty=null===(t=l)||void 0===t?void 0:t.currentStock,i[r]=c,i}));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){}),[se,S]),Object(l.useEffect)((function(){JSON.parse(localStorage.getItem("userData"))._id;var e=JSON.parse(localStorage.getItem("userData"));Object(g.Qb)(null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.database).then((function(e){var t,n=null===e||void 0===e||null===(t=e.Product)||void 0===t?void 0:t.filter((function(e){return"Product"==(null===e||void 0===e?void 0:e.addProductType)}));I(n)})).catch((function(e){console.log(e)})),Object(g.l)(null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.database).then((function(e){var t=null===e||void 0===e?void 0:e.Customer;(null===t||void 0===t?void 0:t.length)&&U(t)})).catch((function(e){console.log(e)})),Object(g.Dc)(null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.database).then((function(e){z(e.Unit)})).catch((function(e){console.log(e)}))}),[]),Object(l.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));re(e)}),[]);var he=function(){de([].concat(Object(o.a)(se),[{product:"",productId:"",availableQty:"",qty:1,price:"",totalprice:""}]))},ye=function(e){var t=Object(o.a)(se);null===t||void 0===t||t.splice(e,1),S.splice(e,1);var n=null===S||void 0===S?void 0:S.reduce((function(e,t){return e+t}));X(n),de(t)},be=function(e,t,n){console.log(e)};return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(u.a,null,c.a.createElement(s.a,{className:"m-2"},c.a.createElement(d.a,{className:""},c.a.createElement("div",null,c.a.createElement("h1",{className:""},"Place Order"))),c.a.createElement(d.a,{className:""},c.a.createElement("div",{className:"d-flex justify-content-end"},c.a.createElement(m.a,{className:"btn float-right",color:"warning",onClick:function(){return me.push("/app/AjGroup/order/placeOrderList")}},"Back")))),c.a.createElement(v.a,null,c.a.createElement(f.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),console.log("Final ",se);var t=ne.firstName+" "+(null===ne||void 0===ne?void 0:ne.lastName),n={userId:null===ne||void 0===ne?void 0:ne._id,fullName:t,address:null===ne||void 0===ne?void 0:ne.Address,grandTotal:K+.05*K+.18*K,MobileNo:null===ne||void 0===ne?void 0:ne.mobileNumber,country:null===ne||void 0===ne?void 0:ne.Country,state:null===ne||void 0===ne?void 0:ne.State,city:null===ne||void 0===ne?void 0:ne.City,orderItems:se,DateofDelivery:ie,partyId:Y};q?N()("Error occured while Entering Details"):Object(g.fc)(n).then((function(e){N()("Order Place Successfully"),me.push("/app/AjGroup/order/placeOrderList")})).catch((function(e){console.log(e)}))}},c.a.createElement(s.a,null,c.a.createElement(d.a,{className:"mb-1",lg:"4",md:"4",sm:"12"},c.a.createElement("div",{className:""},c.a.createElement(p.a,null,"Choose Party"),c.a.createElement(b.a,{required:!0,selectionLimit:1,isObject:"false",options:J,onSelect:function(e,t){return function(e,t,n){B(null===t||void 0===t?void 0:t._id)}(0,t)},onRemove:be,displayValue:"firstName"}))),c.a.createElement(d.a,{className:"mb-1",lg:"4",md:"4",sm:"12"},c.a.createElement("div",{className:""},c.a.createElement(p.a,null,"Expected Delivery Date"),c.a.createElement(h.a,{required:!0,type:"date",name:"DateofDelivery",value:ie,onChange:function(e){return le(e.target.value)}})))),se&&(null===se||void 0===se?void 0:se.map((function(e,t){return c.a.createElement(s.a,{className:"",key:t},c.a.createElement(d.a,{className:"mb-1"},c.a.createElement("div",{className:""},c.a.createElement(p.a,null,"ProductName"),c.a.createElement(b.a,{required:!0,selectionLimit:1,isObject:"false",options:D,onSelect:function(e,n){return pe(e,n,t)},onRemove:function(e,t){be(e)},displayValue:"Product_Title"}))),c.a.createElement(d.a,{className:"mb-1"},c.a.createElement("div",{className:""},c.a.createElement(p.a,null,"Available Size"),c.a.createElement(h.a,{type:"number",name:"availableQty",placeholder:"availableQty",value:null===e||void 0===e?void 0:e.availableQty,onChange:function(e){return ve(e,t)}}))),c.a.createElement(d.a,{className:"mb-1"},c.a.createElement("div",{className:""},c.a.createElement(p.a,null,"Required Qty"),c.a.createElement(h.a,{type:"number",name:"qty",placeholder:"Req_Qty",autocomplete:"off",value:null===e||void 0===e?void 0:e.qty,onChange:function(n){return fe(n,t,null===e||void 0===e?void 0:e.availableQty)}}))),c.a.createElement(d.a,{className:"mb-1"},c.a.createElement("div",{className:""},c.a.createElement(p.a,null,"Choose Unit"),c.a.createElement(b.a,{required:!0,selectionLimit:1,isObject:"false",options:R,onSelect:function(e,n){return function(e,t,n){L.push(t),de((function(e){var r=Object(o.a)(e),i=Object(a.a)({},r[n]);i.Size=t.unitQty,i.unitType=t.primaryUnit,r[n]=i;var l=(null===e||void 0===e?void 0:e.map((function(e,t){var a,o;r[n].totalprice=(null===e||void 0===e?void 0:e.qty)*e.price*(null===(a=L[t])||void 0===a?void 0:a.unitQty);var i=(null===e||void 0===e?void 0:e.price)*e.qty*(null===(o=L[t])||void 0===o?void 0:o.unitQty);return S[n]=i,i}))).reduce((function(e,t){return e+t}));return X(l),r}))}(0,n,t)},onRemove:function(e,t){be(e)},displayValue:"primaryUnit"}))),c.a.createElement(d.a,{className:"mb-1"},c.a.createElement("div",{className:""},c.a.createElement(p.a,null,"Price"),c.a.createElement(h.a,{type:"number",name:"price",readOnly:!0,placeholder:"Price",value:e.price}))),c.a.createElement(d.a,{className:"mb-1"},c.a.createElement("div",{className:""},c.a.createElement(p.a,null,"Total Price"),c.a.createElement(h.a,{type:"number",name:"totalprice",readOnly:!0,placeholder:"TtlPrice",value:e.Size*e.price*e.qty}))),c.a.createElement(d.a,{className:"d-flex mt-1 abb"},c.a.createElement("div",{className:"btnStyle"},t?c.a.createElement(m.a,{type:"button",color:"danger",className:"button remove ",onClick:function(){return ye(t)}},"-"):null),c.a.createElement("div",{className:"btnStyle"},c.a.createElement(m.a,{className:"ml-1 mb-1",color:"primary",type:"button",onClick:function(){return he()}},"+"))))}))),c.a.createElement(s.a,null,c.a.createElement(d.a,{className:"mb-1",lg:"12",md:"12",sm:"12"},c.a.createElement("div",{className:" d-flex justify-content-end"},c.a.createElement("ul",{className:"subtotal"},c.a.createElement("li",null,c.a.createElement(p.a,{className:""},"SubTotal : ",c.a.createElement("strong",null,K))),c.a.createElement("li",null,c.a.createElement(p.a,{className:""},"Shipping Cost :"," ",c.a.createElement("strong",null,"RS ",.05*K))),c.a.createElement("li",null,c.a.createElement(p.a,{className:""},"Tax: ",c.a.createElement("strong",null,"RS ",.18*K))),c.a.createElement("li",null," ",c.a.createElement(p.a,{className:"pr-5"},"Grand Total :"," ",c.a.createElement("strong",null,K+.05*K+.18*K))))))),c.a.createElement(s.a,null,c.a.createElement(d.a,null,c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement(m.a.Ripple,{color:"primary",type:"submit",className:"mt-2"},"Submit")))))))))}}}]);
//# sourceMappingURL=544.6ad16086.chunk.js.map
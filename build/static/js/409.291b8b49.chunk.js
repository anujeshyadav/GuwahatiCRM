/*! For license information please see 409.291b8b49.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[409],{3091:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(26),l=n(1),o=n.n(l),i=n(910),c=n(914),u=n(902),d=n(903),v=n(244),s=n(905),m=n(892),f=n(906),h=n(907),p=n(893),E=n(85),y=n(54),g=n(6),b=n(72),N=n.n(b);function O(){O=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},l=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var l=t&&t.prototype instanceof s?t:s,o=Object.create(l.prototype),i=new _(r||[]);return a(o,"_invoke",{value:N(e,n,i)}),o}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=u;var v={};function s(){}function m(){}function f(){}var h={};c(h,l,(function(){return this}));var p=Object.getPrototypeOf,E=p&&p(p(x([])));E&&E!==t&&n.call(E,l)&&(h=E);var y=f.prototype=s.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;a(this,"_invoke",{value:function(a,l){function o(){return new t((function(r,o){!function a(r,l,o,i){var c=d(e[r],e,l);if("throw"!==c.type){var u=c.arg,v=u.value;return v&&"object"==typeof v&&n.call(v,"__await")?t.resolve(v.__await).then((function(e){a("next",e,o,i)}),(function(e){a("throw",e,o,i)})):t.resolve(v).then((function(e){u.value=e,o(u)}),(function(e){return a("throw",e,o,i)}))}i(c.arg)}(a,l,r,o)}))}return r=r?r.then(o,o):o()}})}function N(e,t,n){var a="suspendedStart";return function(r,l){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw l;return L()}for(n.method=r,n.arg=l;;){var o=n.delegate;if(o){var i=j(o,n);if(i){if(i===v)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=d(e,t,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}function j(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var r=d(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,v;var l=r.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,v):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function x(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=f,a(y,"constructor",{value:f,configurable:!0}),a(f,"constructor",{value:m,configurable:!0}),m.displayName=c(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,a,r,l){void 0===l&&(l=Promise);var o=new b(u(t,n,a,r),l);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},g(y),c(y,i,"Generator"),c(y,l,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=x,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return o.type="throw",o.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],o=l.completion;if("root"===l.tryLoc)return a("end");if(l.tryLoc<=this.prev){var i=n.call(l,"catchLoc"),c=n.call(l,"finallyLoc");if(i&&c){if(this.prev<l.catchLoc)return a(l.catchLoc,!0);if(this.prev<l.finallyLoc)return a(l.finallyLoc)}else if(i){if(this.prev<l.catchLoc)return a(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return a(l.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;S(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),v}},e}var j=[],w=[];t.default=function(){var e,t,n,b,S,_,x,L=Object(l.useState)([]),k=Object(r.a)(L,2),P=k[0],F=k[1],C=Object(l.useState)([]),A=Object(r.a)(C,2),D=A[0],I=A[1],T=Object(l.useState)([]),G=Object(r.a)(T,2),J=G[0],H=G[1],U=Object(l.useState)([]),B=Object(r.a)(U,2),R=(B[0],B[1]),M=Object(l.useState)([]),W=Object(r.a)(M,2),Y=W[0],q=W[1],z=Object(l.useState)(!1),K=Object(r.a)(z,2),Q=K[0],V=K[1],X=Object(l.useState)(!1),Z=Object(r.a)(X,2),$=Z[0],ee=Z[1],te=Object(l.useState)({}),ne=Object(r.a)(te,2),ae=ne[0],re=ne[1],le=Object(l.useState)([]),oe=Object(r.a)(le,2),ie=(oe[0],oe[1]),ce=Object(l.useState)(!1),ue=Object(r.a)(ce,2),de=ue[0],ve=ue[1],se=Object(l.useState)(!1),me=Object(r.a)(se,2),fe=(me[0],me[1]),he=Object(l.useState)(!1),pe=Object(r.a)(he,2),Ee=pe[0],ye=pe[1],ge=Object(l.useState)(!1),be=Object(r.a)(ge,2),Ne=(be[0],be[1]),Oe=Object(l.useState)(""),je=Object(r.a)(Oe,2),we=je[0],Se=je[1],_e=Object(l.useState)(""),xe=Object(r.a)(_e,2),Le=xe[0],ke=xe[1],Pe=Object(l.useState)(""),Fe=Object(r.a)(Pe,2),Ce=(Fe[0],Fe[1]),Ae=Object(l.useState)([]),De=Object(r.a)(Ae,2),Ie=De[0],Te=De[1],Ge=Object(l.useState)([]),Je=Object(r.a)(Ge,2),He=Je[0],Ue=Je[1],Be=function(){var e=JSON.parse(localStorage.getItem("userData"));Object(y.id)(g.f,null===e||void 0===e?void 0:e.database).then((function(e){var t;null===e||void 0===e||null===(t=e.User)||void 0===t||t.filter((function(e,t){return!(null===e||void 0===e?void 0:e.created_by)}));Ue(null===e||void 0===e?void 0:e.User)})).catch((function(e){console.log(e)}))};Object(l.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));Be(),Object(y.id)(g.Jb,null===e||void 0===e?void 0:e.database).then((function(e){F(null===e||void 0===e?void 0:e.Department)})).catch((function(e){console.log(e)}))}),[]);var Re=function(){var e=Object(a.a)(O().mark((function e(t){var n,a,r,l;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=null===ae||void 0===ae?void 0:ae._id,r=null===(n=j)||void 0===n?void 0:n.map((function(e,t){return{id:null===e||void 0===e?void 0:e._id}})),l={parentId:a,childs:r},e.next=6,Object(y.kd)(g.Bd,l).then((function(e){fe(!1),Be(),I([]),H([]),Se(""),q([]),ee(!1),Te([]),j=[],N()("Assigned Successfully")})).catch((function(e){fe(!1),N()("Something Went Wrong"),console.log(e)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(Y),o.a.createElement("div",null,o.a.createElement(i.a,null,o.a.createElement(c.a,null,o.a.createElement("div",{className:" m-2"},o.a.createElement(u.a,{className:""},o.a.createElement(d.a,null,o.a.createElement("h1",null,"Assign Team To Parent Node")),o.a.createElement(d.a,{lg:"2",md:"2"},o.a.createElement("div",{className:"float-right"},o.a.createElement(E.b,{render:function(e){var t=e.history;return o.a.createElement(v.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",onClick:function(){return t.goBack()}}," ","Back")}}))))),o.a.createElement("div",{className:" m-2"},o.a.createElement(u.a,{className:""},o.a.createElement(d.a,{lg:"3",md:"3"},o.a.createElement(s.a,null,"Select Department"),o.a.createElement(m.a,{value:D,onChange:function(e){if(e.target.value?V(!0):V(!1),"All_Dept_Heads"==e.target.value){var t;w=[],V(!1),null===P||void 0===P||P.map((function(e,t){var n;null===e||void 0===e||null===(n=e.roles)||void 0===n||n.forEach((function(e,t){var n;1==(null===e||void 0===e?void 0:e.rolePosition)&&(null===(n=w)||void 0===n||n.push(e))}))})),R(w);var n=[];null===(t=w)||void 0===t||t.map((function(e,t){null===He||void 0===He||He.forEach((function(t,a){var r,l;(null===t||void 0===t||null===(r=t.rolename)||void 0===r?void 0:r._id)==(null===e||void 0===e||null===(l=e.roleId)||void 0===l?void 0:l._id)&&n.push(t)}))})),I(e.target.value),q(n),(null===n||void 0===n?void 0:n.length)&&ee(!0);var a=JSON.parse(localStorage.getItem("userData"));H([a])}else{var r,l=null===P||void 0===P?void 0:P.filter((function(t,n){return(null===t||void 0===t?void 0:t._id)==e.target.value}));I(null===(r=l[0])||void 0===r?void 0:r.roles)}},type:"select"},o.a.createElement("option",{value:""},"--Select Department--"),o.a.createElement("option",{value:"All_Dept_Heads"},"All Department Head"),P&&(null===P||void 0===P?void 0:P.map((function(e,t){var n;return o.a.createElement("option",{"data-name":"".concat(null===e||void 0===e?void 0:e._id," ").concat(null===e||void 0===e?void 0:e.database),value:null===e||void 0===e?void 0:e._id},null===e||void 0===e||null===(n=e.departmentName)||void 0===n?void 0:n.departmentName)}))))),Q&&Q&&o.a.createElement(d.a,{lg:"3",md:"3"},o.a.createElement(s.a,null,"Select Parent Role"),o.a.createElement(m.a,{value:we,onChange:function(e){var t,n,a=null===(t=e.target.options[e.target.selectedIndex].getAttribute("data-name"))||void 0===t?void 0:t.split(" ");1===a[0]&&Ne(!0);var r=a.slice(2).join(" "),l=[];l="Sales Person"==r?null===He||void 0===He?void 0:He.filter((function(e){var t;return"Customer"==(null===e||void 0===e||null===(t=e.rolename)||void 0===t?void 0:t.roleName)})):null===D||void 0===D?void 0:D.filter((function(e){return(null===e||void 0===e?void 0:e.rolePosition)==Number(a[0])+1}));var o=null===He||void 0===He?void 0:He.filter((function(e){var t;return(null===e||void 0===e||null===(t=e.rolename)||void 0===t?void 0:t._id)==a[1]}));if(H(o),Se(e.target.value),ke(r),Ce(a[1]),null===(n=l)||void 0===n?void 0:n.length){var i=[];"Sales Person"==r?(q(l),ye(!0),ee(!0),Te(l)):(i=null===He||void 0===He?void 0:He.filter((function(e){var t,n,a;return(null===e||void 0===e||null===(t=e.rolename)||void 0===t?void 0:t._id)==(null===(n=l[0])||void 0===n||null===(a=n.roleId)||void 0===a?void 0:a._id)})),q(i),ee(!0),ye(!1),Te(l))}else Te([]),q([]),ve(!0),ee(!1)},type:"select"},o.a.createElement("option",{value:""},"--Select Role--"),D&&(null===D||void 0===D?void 0:D.map((function(e,t){var n;return o.a.createElement("option",{"data-name":"".concat(null===e||void 0===e?void 0:e.rolePosition," ").concat(null===e||void 0===e||null===(n=e.roleId)||void 0===n?void 0:n._id," ").concat(null===e||void 0===e?void 0:e.roleName),value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.roleName," (Position-",null===e||void 0===e?void 0:e.rolePosition,")")}))))),$&&$?o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{lg:"3",md:"3"},o.a.createElement(s.a,null,"Next Child"),o.a.createElement(f.a,{readOnly:!0,type:"text",value:(null===(e=Ie[0])||void 0===e?void 0:e.roleName)&&(null===(t=Ie[0])||void 0===t?void 0:t.roleName)})),j&&(null===(n=j)||void 0===n?void 0:n.length)>0&&o.a.createElement(d.a,{lg:"3",md:"3"},o.a.createElement(v.a,{color:"primary",onClick:function(e){return Re(e)},className:"mt-2"},"Submit"))):o.a.createElement(o.a.Fragment,null,de&&de&&o.a.createElement(d.a,{lg:"3",md:"3"},o.a.createElement(s.a,{style:{color:"red"}},"No Next Child Found"),o.a.createElement(f.a,{readOnly:!0,type:"text",value:"No Child Found"}))))),o.a.createElement("hr",null),o.a.createElement("div",{className:"p-2"},o.a.createElement(u.a,null,J&&(null===J||void 0===J?void 0:J.length)>0&&o.a.createElement(d.a,{lg:"6",md:"6",sm:"6"},o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement("h2",null,o.a.createElement("strong",null,Le&&Le?o.a.createElement(o.a.Fragment,null," ",Le," (Parent)"):"Head"," ","Users List"))),o.a.createElement("div",{className:"p-1",style:{borderRight:"1px solid black"}},o.a.createElement(h.a,{className:"table_heading",style:{cursor:"pointer"},responsive:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"#"),o.a.createElement("th",null,"Assigned To"),o.a.createElement("th",null,"First Name"),o.a.createElement("th",null,"Last Name"),o.a.createElement("th",null,"Mobile Number"),o.a.createElement("th",null,"email"),o.a.createElement("th",null,"State"),o.a.createElement("th",null,"City"))),o.a.createElement("tbody",null,J&&(null===J||void 0===J?void 0:J.length)?o.a.createElement(o.a.Fragment,null,J&&(null===J||void 0===J?void 0:J.map((function(e,t){var n,a,r,l;return o.a.createElement("tr",{key:null===e||void 0===e?void 0:e._id},o.a.createElement("th",{scope:"row"},o.a.createElement(f.a,{name:"Parent",value:"checkbox1",type:"radio",onClick:function(t){re(e)}})),o.a.createElement("td",null,(null===e||void 0===e||null===(n=e.created_by)||void 0===n?void 0:n.firstName)&&(null===e||void 0===e||null===(a=e.created_by)||void 0===a?void 0:a.firstName)&&o.a.createElement(p.a,{color:"primary"},o.a.createElement("strong",null,(null===e||void 0===e||null===(r=e.created_by)||void 0===r?void 0:r.firstName)&&(null===e||void 0===e||null===(l=e.created_by)||void 0===l?void 0:l.firstName)))),o.a.createElement("td",null,null===e||void 0===e?void 0:e.firstName),o.a.createElement("td",null,null===e||void 0===e?void 0:e.lastName),o.a.createElement("td",null,null===e||void 0===e?void 0:e.mobileNumber),o.a.createElement("td",null,null===e||void 0===e?void 0:e.email),o.a.createElement("td",null,null===e||void 0===e?void 0:e.State),o.a.createElement("td",null,null===e||void 0===e?void 0:e.City))})))):null)))),Y&&(null===Y||void 0===Y?void 0:Y.length)>0&&o.a.createElement(d.a,{lg:"6",md:"6",sm:"6"},o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement("h2",null,o.a.createElement("strong",null,(null===(b=Ie[0])||void 0===b?void 0:b.roleName)&&(null===(S=Ie[0])||void 0===S?void 0:S.roleName)?o.a.createElement(o.a.Fragment,null," ",(null===(_=Ie[0])||void 0===_?void 0:_.roleName)&&(null===(x=Ie[0])||void 0===x?void 0:x.roleName),"(child)"):o.a.createElement(o.a.Fragment,null,Ee&&Ee?"Party":"All Dept Head")," ","Users List"))),o.a.createElement("div",{className:"p-1"},o.a.createElement(h.a,{className:"table_heading",style:{cursor:"pointer"},responsive:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"#"),o.a.createElement("th",null,"Assigned To"),o.a.createElement("th",null,"First Name"),o.a.createElement("th",null,"Last Name"),o.a.createElement("th",null,"Mobile Number"),o.a.createElement("th",null,"email"),o.a.createElement("th",null,"State"),o.a.createElement("th",null,"City"))),o.a.createElement("tbody",null,Y&&(null===Y||void 0===Y?void 0:Y.map((function(e,t){var n,a,r,l;return o.a.createElement("tr",{key:null===e||void 0===e?void 0:e._id},o.a.createElement("th",{scope:"row"}," ",(null===e||void 0===e||null===(n=e.created_by)||void 0===n?void 0:n.firstName)&&(null===e||void 0===e||null===(a=e.created_by)||void 0===a?void 0:a.firstName)?null:o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{value:"checkbox1",type:"checkbox",onClick:function(t){return function(e,t){if(t.target.checked)j.push(e),ie(e);else{var n,a=null===(n=j)||void 0===n?void 0:n.indexOf(e);ie(j.splice(a,1))}}(e,t)}}))),o.a.createElement("td",null,o.a.createElement(p.a,{color:"primary"},o.a.createElement("strong",null,(null===e||void 0===e||null===(r=e.created_by)||void 0===r?void 0:r.firstName)&&(null===e||void 0===e||null===(l=e.created_by)||void 0===l?void 0:l.firstName)))),o.a.createElement("td",null,null===e||void 0===e?void 0:e.firstName),o.a.createElement("td",null,null===e||void 0===e?void 0:e.lastName),o.a.createElement("td",null,null===e||void 0===e?void 0:e.mobileNumber),o.a.createElement("td",null,null===e||void 0===e?void 0:e.email),o.a.createElement("td",null,null===e||void 0===e?void 0:e.State),o.a.createElement("td",null,null===e||void 0===e?void 0:e.City))}))))))))))))}}}]);
//# sourceMappingURL=409.291b8b49.chunk.js.map
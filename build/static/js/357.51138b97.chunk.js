/*! For license information please see 357.51138b97.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[357],{3231:function(e,t,r){"use strict";r.r(t),r.d(t,"AddType",(function(){return j}));var n=r(24),a=r(4),o=r(60),i=r(16),c=r(17),l=r(100),u=r(18),s=r(19),h=r(1),f=r.n(h),d=r(912),p=r(904),m=r(905),v=r(244),y=r(916),g=r(906),b=r(943),w=r(907),E=r(908),x=(r(27),r(6)),L=r(85),N=r(72),S=r.n(N);function O(){O=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(T){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),c=new S(a||[]);return n(i,"_invoke",{value:E(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(T){return{type:"throw",arg:T}}}e.wrap=u;var h={};function f(){}function d(){}function p(){}var m={};l(m,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==t&&r.call(y,o)&&(m=y);var g=p.prototype=f.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t((function(a,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}})}function E(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=p,n(g,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),l(g,c,"Generator"),l(g,o,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var j=function(e){Object(u.a)(r,e);var t=Object(s.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this,e)).onChangeHandler3=function(e){n.setState({selectedFile3:e.target.files}),n.setState({selectedName3:e.target.files[0].name}),console.log(e.target.files)},n.changeHandler1=function(e){n.setState({status:e.target.value})},n.changeHandler=function(e){n.setState(Object(o.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){var t,r;e.preventDefault();var a=JSON.parse(localStorage.getItem("userData"));console.log(null===a||void 0===a||null===(t=a.Userinfo)||void 0===t?void 0:t.id);var o=new FormData;o.append("user_id",null===a||void 0===a||null===(r=a.Userinfo)||void 0===r?void 0:r.id),o.append("product_type",n.state.TypeName),o.append("description",n.state.Description),o.append("status","Active"),x.a.post("/addproducttype",o).then((function(e){var t;(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.success)&&(n.setState({TypeName:""}),n.setState({Description:""}),S()("Success!","You Data has been Submitted","success"))})).catch((function(e){console.log(e)}))},n.state={TypeName:"",Brand:"",Brandlist:"",Description:"",Price:"",stock:"",Regularprice:"",formValues:[{PName:"",price:""}],DiscountPrice:"",Addmore:!1,rowData:[],description:"",variety:"",shipmentfee:"",Tags:"",taxrate:"",status:"",selectedFile3:null,selectedName3:""},n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var e=Object(a.a)(O().mark((function e(){var t=this;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/getcategory").then((function(e){var r,n=null===(r=e.data.data)||void 0===r?void 0:r.category;t.setState({rowData:n})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e,t){var r=this.state.formValues;r[e][t.target.name]=t.target.value,this.setState({formValues:r})}},{key:"addFormFields",value:function(){this.setState({formValues:[].concat(Object(n.a)(this.state.formValues),[{PName:"",price:""}])}),this.handleSubmit()}},{key:"removeFormFields",value:function(e){var t=this.state.formValues;t.splice(e,1),this.setState({formValues:t})}},{key:"handleSubmit",value:function(){console.log(this.state.formValues)}},{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement(d.a,null,f.a.createElement("h1",{className:"p-2 "},"Add Type here"),f.a.createElement(p.a,{className:"m-2"},f.a.createElement(m.a,null,f.a.createElement("h2",null,"Enter Information")),f.a.createElement(m.a,null,f.a.createElement(L.b,{render:function(e){var t=e.history;return f.a.createElement(v.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/house/Typelist")}},"Back")}}))),f.a.createElement(y.a,null,f.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},f.a.createElement(p.a,{className:"mb-2"},f.a.createElement(m.a,{lg:"6",md:"6"},f.a.createElement(b.a,null,f.a.createElement(w.a,null," Add Type"),f.a.createElement(E.a,{type:"text",placeholder:"Title",name:"TypeName",bsSize:"lg",value:this.state.TypeName,onChange:this.changeHandler}))),f.a.createElement(m.a,{lg:"6",md:"6"},f.a.createElement(b.a,null,f.a.createElement(w.a,null,"Description"),f.a.createElement(E.a,{type:"text",placeholder:"Title",name:"Description",bsSize:"lg",value:this.state.Description,onChange:this.changeHandler})))),f.a.createElement(p.a,null,f.a.createElement(m.a,null,f.a.createElement(v.a.Ripple,{color:"primary",type:"submit",className:"mx-3 mb-1"},"Add Type")))))))}}]),r}(h.Component);t.default=j},943:function(e,t,r){"use strict";var n=r(10),a=r(12),o=r(1),i=r.n(o),c=r(2),l=r.n(c),u=r(8),s=r.n(u),h=r(7),f=["className","cssModule","row","disabled","check","inline","tag"],d={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:h.tagPropType,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,r=e.cssModule,o=e.row,c=e.disabled,l=e.check,u=e.inline,d=e.tag,p=Object(a.a)(e,f),m=Object(h.mapToCssModules)(s()(t,!!o&&"row",l?"form-check":"form-group",!(!l||!u)&&"form-check-inline",!(!l||!c)&&"disabled"),r);return"fieldset"===d&&(p.disabled=c),i.a.createElement(d,Object(n.a)({},p,{className:m}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=357.51138b97.chunk.js.map
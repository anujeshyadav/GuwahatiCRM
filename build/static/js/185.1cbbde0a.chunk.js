/*! For license information please see 185.1cbbde0a.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[185],{1005:function(e,t,r){},2934:function(e,t,r){"use strict";r.r(t);var a=r(5),n=r(947),i=r(55),o=r(16),l=r(17),c=r(18),s=r(19),u=r(1),d=r.n(u),f=r(881),h=r(891),m=r(892),p=r(899),g=r(903),v=r(893),y=r(894),w=r(895),b=r(173),E=r(898),S=r(909),x=r(887),N=r(886),z=(r(1005),r(9)),k=r(123),P=r(922),j=(r(944),r(359)),L=r(312),O=r(25),C=(r(920),r(918),r(161)),D=r.n(C);function _(){_=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(j){c=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof f?t:f,o=Object.create(i.prototype),l=new z(n||[]);return a(o,"_invoke",{value:E(e,r,l)}),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}e.wrap=s;var d={};function f(){}function h(){}function m(){}var p={};c(p,i,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(k([])));v&&v!==t&&r.call(v,i)&&(p=v);var y=m.prototype=f.prototype=Object.create(p);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;a(this,"_invoke",{value:function(a,i){function o(){return new t((function(n,o){!function a(n,i,o,l){var c=u(e[n],e,i);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,o,l)}),(function(e){a("throw",e,o,l)})):t.resolve(d).then((function(e){s.value=e,o(s)}),(function(e){return a("throw",e,o,l)}))}l(c.arg)}(a,i,n,o)}))}return n=n?n.then(o,o):o()}})}function E(e,t,r){var a="suspendedStart";return function(n,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw i;return P()}for(r.method=n,r.arg=i;;){var o=r.delegate;if(o){var l=S(o,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var c=u(e,t,r);if("normal"===c.type){if(a=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a="completed",r.method="throw",r.arg=c.arg)}}}function S(e,t){var r=t.method,a=e.iterator[r];if(void 0===a)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var n=u(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function k(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,n=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return h.prototype=m,a(y,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:h,configurable:!0}),h.displayName=c(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,a,n,i){void 0===i&&(i=Promise);var o=new b(s(t,r,a,n),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(y),c(y,l,"Generator"),c(y,i,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var a in t)r.push(a);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=k,z.prototype={constructor:z,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return o.type="throw",o.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;N(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}var A=function(e){Object(c.a)(r,e);var t=Object(s.a)(r);function r(){var e,a;Object(o.a)(this,r);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return(a=t.call.apply(t,[this].concat(c))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Order ID ",field:"orderId",filter:!0,resizable:!0,width:120,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",null,d.a.createElement("span",null,e.data.orderId)))}},{headerName:"Email",field:"email",filter:!0,resizable:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",null,d.a.createElement("span",null,e.data.email)))}},{headerName:"Phone",field:"phone",filter:!0,resizable:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",null,d.a.createElement("span",null,e.data.phone_no)))}},{headerName:"Zone",field:"zone",filter:!0,resizable:!0,width:150,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",null,d.a.createElement("span",null,e.data.order_zone)))}},{headerName:"Delivery Address",field:"delivery_address",filter:!0,resizable:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",null,d.a.createElement("span",null,e.data.delivery_add)))}},{headerName:"Permitions",field:"permitions",filter:!0,width:100,cellRendererFramework:function(e){return d.a.createElement(f.a,{type:"switch",className:"mr-1",id:"primary",name:"primary",inline:!0,onChange:a.handleSwitchChange})}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Canceled"===e.value?d.a.createElement("div",{className:"badge badge-pill bg-danger"},e.data.status):null}},(e={headerName:"Actions",field:"sortorder"},Object(i.a)(e,"field","transactions"),Object(i.a)(e,"width",100),Object(i.a)(e,"cellRendererFramework",(function(e){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(j.a,{className:"mr-50",size:"25px",color:"green",onClick:function(){return O.a.push("/app/freshlist/order/viewCanceled/".concat(e.data._id))}}))})),e)]},a.onGridReady=function(e){a.gridApi=e.api,a.gridColumnApi=e.columnApi,a.setState({currenPageSize:a.gridApi.paginationGetCurrentPage()+1,getPageSize:a.gridApi.paginationGetPageSize(),totalPages:a.gridApi.paginationGetTotalPages()})},a.updateSearchQuery=function(e){a.gridApi.setQuickFilter(e)},a.filterSize=function(e){a.gridApi&&(a.gridApi.paginationSetPageSize(Number(e)),a.setState({currenPageSize:e,getPageSize:e}))},a.onChangeHandler=function(e){a.setState({selectedFile:e.target.files[0]}),a.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},a.onChangeHandler=function(e){a.setState({selectedFile:e.target.files}),a.setState({selectedName:e.target.files.name}),console.log(e.target.files)},a.changeHandler1=function(e){a.setState({status:e.target.value})},a.changeHandler=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("banner_title",a.state.banner_title),t.append("bannertype",a.state.bannertype),t.append("status",a.state.status);var r,i=Object(n.a)(a.state.selectedFile);try{for(i.s();!(r=i.n()).done;){var o=r.value;null!==a.state.selectedFile&&t.append("banner_img",o,o.name)}}catch(h){i.e(h)}finally{i.f()}var l,c=Object(n.a)(t.values());try{for(c.s();!(l=c.n()).done;){var s=l.value;console.log(s)}}catch(h){c.e(h)}finally{c.f()}var u,d=Object(n.a)(t.keys());try{for(d.s();!(u=d.n()).done;){var f=u.value;console.log(f)}}catch(h){d.e(h)}finally{d.f()}z.a.post("/addbanner",t).then((function(e){console.log(e),D()("Successful!","You clicked the button!","success"),a.props.history.push("/app/freshlist/banner/bannerList")})).catch((function(e){console.log(e)}))},a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=Object(a.a)(_().mark((function e(){var t=this;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("/admin/canceled_order").then((function(e){var r=e.data.data;t.setState({rowData:r})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(a.a)(_().mark((function e(t){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,z.a.get("/admin/del_order/".concat(t)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,r=t.rowData,a=t.columnDefs,n=t.defaultColDef;return d.a.createElement(h.a,{className:"app-user-list"},d.a.createElement(m.a,{sm:"12"},d.a.createElement("h2",null," Select Date Range"),d.a.createElement(p.a,null,d.a.createElement(g.a,null,d.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},d.a.createElement(h.a,null,d.a.createElement(m.a,{lg:"3",className:"mb-2"},d.a.createElement(y.a,null,"All"),d.a.createElement(w.a,{required:!0,type:"select",name:"bannertype",placeholder:"",value:this.state.bannertype,onChange:this.changeHandler},d.a.createElement("option",{value:"select"},"--Select--"),d.a.createElement("option",{value:"All"},"All"),d.a.createElement("option",{value:"In-house"},"In-house"),d.a.createElement("option",{value:"Seller"},"Seller"))),d.a.createElement(m.a,{lg:"3",className:"mb-2"},d.a.createElement(y.a,null,"Start Date"),d.a.createElement(w.a,{required:!0,type:"date",name:"bannertype",placeholder:"",value:this.state.bannertype,onChange:this.changeHandler})),d.a.createElement(m.a,{lg:"3",className:"mb-2"},d.a.createElement(y.a,null,"End Date"),d.a.createElement(w.a,{required:!0,type:"date",name:"bannertype",placeholder:"",value:this.state.bannertype,onChange:this.changeHandler})),d.a.createElement(m.a,{lg:"3",className:"mb-2"},d.a.createElement(b.a.Ripple,{className:"bt",color:"primary",type:"submit"},"Show Data"))))))),d.a.createElement(m.a,{sm:"12"},d.a.createElement(p.a,null,d.a.createElement(h.a,{className:"m-2"},d.a.createElement(m.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Canceled List"))),d.a.createElement(g.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(E.a,{className:"p-1 ag-dropdown"},d.a.createElement(S.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(L.a,{className:"ml-50",size:15})),d.a.createElement(x.a,{right:!0},d.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(w.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(b.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(k.a.Consumer,null,(function(t){return d.a.createElement(P.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:a,rowData:r,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),r}(d.a.Component);t.default=A},918:function(e,t,r){},947:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(126);function n(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(a.a)(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,i,o=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw i}}}}}}]);
//# sourceMappingURL=185.1cbbde0a.chunk.js.map
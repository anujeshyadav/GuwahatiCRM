/*! For license information please see 336.7763be18.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[336],{3250:function(e,t,r){"use strict";r.r(t);var n=r(4),a=r(60),i=r(16),o=r(17),l=r(18),c=r(19),u=r(1),s=r.n(u),d=r(904),f=r(905),h=r(912),m=r(244),p=r(916),g=r(911),v=r(922),y=r(900),w=r(899),E=r(908),b=r(6),x=r(133),S=r(936),N=r(367),k=r(502),P=r(323),L=r(27),z=(r(929),r(232),r(85));r(983);function O(){O=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(z){c=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var i=t&&t.prototype instanceof f?t:f,o=Object.create(i.prototype),l=new k(a||[]);return n(o,"_invoke",{value:b(e,r,l)}),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(z){return{type:"throw",arg:z}}}e.wrap=u;var d={};function f(){}function h(){}function m(){}var p={};c(p,i,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(P([])));v&&v!==t&&r.call(v,i)&&(p=v);var y=m.prototype=f.prototype=Object.create(p);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var a;n(this,"_invoke",{value:function(n,i){function o(){return new t((function(a,o){!function n(a,i,o,l){var c=s(e[a],e,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,l)}),(function(e){n("throw",e,o,l)})):t.resolve(d).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,l)}))}l(c.arg)}(n,i,a,o)}))}return a=a?a.then(o,o):o()}})}function b(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return L()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var l=x(o,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function P(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=m,n(y,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:h,configurable:!0}),h.displayName=c(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new E(u(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(y),c(y,l,"Generator"),c(y,i,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}var _=function(e){Object(l.a)(r,e);var t=Object(c.a)(r);function r(){var e,n;Object(i.a)(this,r);for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return(n=t.call.apply(t,[this].concat(l))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:80,filter:!0},{headerName:"Bundle Title",field:"thumbnail_img",filter:!0,width:80,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.category_name))}},{headerName:"Add Product",field:"image",filter:!0,width:80,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.category_name))}},{headerName:"Date",field:"image",filter:!0,width:80,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.category_name))}},{headerName:"Units Status",field:"image",filter:!0,width:80,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.category_name))}},{headerName:"Discount Option",field:"category_name",filter:!0,width:190,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.category_name))}},{headerName:"Add Discount",field:"title",filter:!0,width:80,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement("span",null,e.data.title))}},{headerName:"Sort Order",field:"url",filter:!0,width:80,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement("span",null,e.data.url))}},{headerName:"Status",field:"status",filter:!0,width:80,cellRendererFramework:function(e){return"true"===e.value?s.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"false"===e.value?s.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},(e={headerName:"Actions",field:"sortorder"},Object(a.a)(e,"field","transactions"),Object(a.a)(e,"width",150),Object(a.a)(e,"cellRendererFramework",(function(e){return s.a.createElement("div",{className:"actions cursor-pointer"},s.a.createElement(N.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return L.a.push("/app/freshlist/bundle/editBundle/".concat(e.data._id))}}),s.a.createElement(k.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t=n.gridApi.getSelectedRows();n.runthisfunction(e.data._id),n.gridApi.updateRowData({remove:t})}}))})),e)]},n.onGridReady=function(e){n.gridApi=e.api,n.gridColumnApi=e.columnApi,n.setState({currenPageSize:n.gridApi.paginationGetCurrentPage()+1,getPageSize:n.gridApi.paginationGetPageSize(),totalPages:n.gridApi.paginationGetTotalPages()})},n.updateSearchQuery=function(e){n.gridApi.setQuickFilter(e)},n.filterSize=function(e){n.gridApi&&(n.gridApi.paginationSetPageSize(Number(e)),n.setState({currenPageSize:e,getPageSize:e}))},n}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=Object(n.a)(O().mark((function e(){var t=this;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/admin/getallcategory").then((function(e){var r=e.data.data;console.log(r),t.setState({rowData:r})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(n.a)(O().mark((function e(t){return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,b.a.delete("/admin/del_one_category/".concat(t)).then((function(e){console.log(e)}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,r=t.rowData,n=t.columnDefs,a=t.defaultColDef;return console.log(r),s.a.createElement(d.a,{className:"app-user-list"},s.a.createElement(f.a,{sm:"12"}),s.a.createElement(f.a,{sm:"12"},s.a.createElement(h.a,null,s.a.createElement(d.a,{className:"m-2"},s.a.createElement(f.a,null,s.a.createElement("h1",{sm:"6",className:"float-left"},"Bundle List")),s.a.createElement(f.a,null,s.a.createElement(z.b,{render:function(e){var t=e.history;return s.a.createElement(m.a,{className:"btn btn-primary float-right",color:"primary",onClick:function(){return t.push("/app/freshlist/bundle/addBundle")}},"Add Bundle")}}))),s.a.createElement(p.a,null,null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(g.a,{className:"p-1 ag-dropdown"},s.a.createElement(v.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(P.a,{className:"ml-50",size:15})),s.a.createElement(y.a,{right:!0},s.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(E.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(m.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(x.a.Consumer,null,(function(t){return s.a.createElement(S.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:a,columnDefs:n,rowData:r,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),r}(s.a.Component);t.default=_},984:function(e,t){}}]);
//# sourceMappingURL=336.7763be18.chunk.js.map
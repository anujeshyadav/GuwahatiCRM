/*! For license information please see 440.2618bac2.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[440],{3258:function(e,t,r){"use strict";r.r(t);var a=r(4),n=r(16),i=r(17),o=r(18),l=r(19),c=r(1),u=r.n(c),s=r(895),d=r(904),f=r(905),h=r(912),p=r(244),m=r(916),v=r(911),g=r(922),y=r(900),w=r(899),E=r(908),S=(r(69),r(133)),b=r(936),P=r(370),x=r(323),N=(r(27),r(929),r(232),r(85)),D=r(6),_=r(73),C=r.n(_);function k(){k=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(C){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var i=t&&t.prototype instanceof f?t:f,o=Object.create(i.prototype),l=new N(n||[]);return a(o,"_invoke",{value:S(e,r,l)}),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(C){return{type:"throw",arg:C}}}e.wrap=u;var d={};function f(){}function h(){}function p(){}var m={};c(m,i,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(D([])));g&&g!==t&&r.call(g,i)&&(m=g);var y=p.prototype=f.prototype=Object.create(m);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;a(this,"_invoke",{value:function(a,i){function o(){return new t((function(n,o){!function a(n,i,o,l){var c=s(e[n],e,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,o,l)}),(function(e){a("throw",e,o,l)})):t.resolve(d).then((function(e){u.value=e,o(u)}),(function(e){return a("throw",e,o,l)}))}l(c.arg)}(a,i,n,o)}))}return n=n?n.then(o,o):o()}})}function S(e,t,r){var a="suspendedStart";return function(n,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw i;return _()}for(r.method=n,r.arg=i;;){var o=r.delegate;if(o){var l=b(o,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var c=s(e,t,r);if("normal"===c.type){if(a=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a="completed",r.method="throw",r.arg=c.arg)}}}function b(e,t){var r=t.method,a=e.iterator[r];if(void 0===a)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var n=s(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function D(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,n=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=p,a(y,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:h,configurable:!0}),h.displayName=c(p,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,a,n,i){void 0===i&&(i=Promise);var o=new E(u(t,r,a,n),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(y),c(y,l,"Generator"),c(y,i,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var a in t)r.push(a);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=D,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return o.type="throw",o.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;x(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:D(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}var L=function(e){Object(o.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(n.a)(this,r);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={rowData:[],paginationPageSize:20,CurrentDate:"",Show:!1,StartDate:"",EndDate:"",currenPageSize:"",filteredRowData:[],Productlist:[],originalRowData:[],productFilterText:"",SelectedProduct:"",getPageSize:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:80,filter:!0},{headerName:"PoNo",field:"po_no",filter:!0,width:120,cellRendererFramework:function(e){var t;return u.a.createElement("div",null,u.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.po_no))}},{headerName:"Product Name",field:"product_name",filter:!0,width:200,cellRendererFramework:function(e){var t;return u.a.createElement("div",{className:"d-flex flex-wrap"},u.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.product_name))}},{headerName:"OrderStatus",field:"order_status",filter:!0,width:160,cellRendererFramework:function(e){var t;return u.a.createElement("div",null,u.a.createElement(s.a,{color:"success"},null===(t=e.data)||void 0===t?void 0:t.order_status))}},{headerName:"Branch Code",field:"display_code",filter:!0,width:160,cellRendererFramework:function(e){var t;return u.a.createElement("div",null,u.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.display_code))}},{headerName:"suppliername",field:"supplier_name",filter:!0,width:180,cellRendererFramework:function(e){var t;return u.a.createElement("div",null,u.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.supplier_name))}},{headerName:"total",field:"total",filter:!0,width:140,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement(s.a,{color:"success"},e.data.total))}},{headerName:"createddate",field:"created_date",filter:!0,width:200,cellRendererFramework:function(e){var t;return u.a.createElement("div",null,u.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.created_date))}},{headerName:"Actions",width:150,cellRendererFramework:function(e){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(N.b,{render:function(t){var r=t.history;return u.a.createElement(P.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return r.push({pathname:"/app/freshlist/cart/ViewoneFinalreport",state:e.data})}})}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e.handleProductWiseReport=function(t){var r,a;t.preventDefault();var n=JSON.parse(localStorage.getItem("userData")),i=new FormData;i.append("user_id",null===n||void 0===n||null===(r=n.Userinfo)||void 0===r?void 0:r.id),i.append("role",null===n||void 0===n||null===(a=n.Userinfo)||void 0===a?void 0:a.role),i.append("product_id",e.state.SelectedProduct),i.append("from_date ",e.state.StartDate),i.append("to_date",e.state.EndDate),e.state.SelectedProduct?D.a.post("/getReportProductWise",i).then((function(t){var r,a,n,i,o=null===t||void 0===t||null===(r=t.data)||void 0===r?void 0:r.data;(console.log(null===(a=t.data)||void 0===a?void 0:a.data),"Record Not Found."===(null===(n=t.data)||void 0===n?void 0:n.message))?(C()("".concat(null===(i=t.data)||void 0===i?void 0:i.message)),e.setState({rowData:""})):(e.setState({Show:!0}),e.setState({rowData:o}))})).catch((function(e){var t,r;console.log(null===(t=e.response)||void 0===t?void 0:t.data.message),C()("".concat(null===(r=e.response)||void 0===r?void 0:r.data.message))})):C()("Warning","Select Product first")},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=Object(a.a)(k().mark((function e(){var t,r,a,n,i,o,l,c=this;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new Date).toISOString(),this.setState({CurrentDate:n.split("T")[0]}),i=JSON.parse(localStorage.getItem("userData")),o=null===i||void 0===i||null===(t=i.role)||void 0===t?void 0:t.find((function(e){return"Product Wise"===(null===e||void 0===e?void 0:e.pageName)})),this.setState({Viewpermisson:null===o||void 0===o?void 0:o.permission.includes("View")}),this.setState({Createpermisson:null===o||void 0===o?void 0:o.permission.includes("Create")}),this.setState({Editpermisson:null===o||void 0===o?void 0:o.permission.includes("Edit")}),this.setState({Deletepermisson:null===o||void 0===o?void 0:o.permission.includes("Delete")}),(l=new FormData).append("user_id",null===i||void 0===i||null===(r=i.Userinfo)||void 0===r?void 0:r.id),l.append("role",null===i||void 0===i||null===(a=i.Userinfo)||void 0===a?void 0:a.role),e.next=13,D.a.post("/getReportProductList",l).then((function(e){var t,r=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data;c.setState({Productlist:r})})).catch((function(e){}));case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,r=t.Show,a=(t.filteredRowData,t.Productlist),n=t.rowData,i=t.columnDefs,o=t.defaultColDef;return u.a.createElement(d.a,{className:"app-user-list"},u.a.createElement(f.a,{sm:"12"}),u.a.createElement(f.a,{sm:"12"},u.a.createElement(h.a,null,u.a.createElement(d.a,{className:"m-2"},u.a.createElement(f.a,{sm:"4",lg:"4",md:"4"},u.a.createElement("h1",{className:"float-left"},"Product Wise Report")),u.a.createElement(f.a,{lg:"2",sm:"2",md:"2"},u.a.createElement("label",null,"Start Date:"),u.a.createElement("input",{onChange:function(t){e.setState({StartDate:t.target.value})},className:"form-control",type:"date",id:"start",name:"trip-start",pattern:"\\d{4}-\\d{2}-\\d{2}",min:"2019-01-01",max:this.state.CurrentDate&&this.state.CurrentDate})),u.a.createElement(f.a,{lg:"2",sm:"2",md:"2"},u.a.createElement("label",null,"End Date:"),u.a.createElement("input",{onChange:function(t){e.setState({EndDate:t.target.value})},className:"form-control",type:"date",id:"start",name:"trip-start",pattern:"\\d{4}-\\d{2}-\\d{2}",min:"2019-01-01",max:this.state.CurrentDate&&this.state.CurrentDate})),u.a.createElement(f.a,{lg:"2",sm:"2",md:"2"},u.a.createElement("label",{onChange:function(t){e.setState({SelectedProduct:t.target.value})}},"Choose a Product:"),u.a.createElement("select",{onChange:function(t){return e.setState({SelectedProduct:t.target.value})},className:"form-control",name:"cars",id:"cars"},u.a.createElement("option",{value:"not Selected"},"--Select User--"),null===a||void 0===a?void 0:a.map((function(e,t){return u.a.createElement("option",{key:t,value:e.id},e.title)})))),u.a.createElement(f.a,{lg:"2",className:"d-flex justify-content-end"},u.a.createElement(p.a,{className:"mt-2",onClick:function(t){return e.handleProductWiseReport(t)},color:"primary"},"Submit"))),r?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(v.a,{className:"p-1 ag-dropdown"},u.a.createElement(g.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(x.a,{className:"ml-50",size:15})),u.a.createElement(y.a,{right:!0},u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(E.a,{placeholder:"search...",onChange:function(t){e.updateSearchQuery(t.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(p.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(S.a.Consumer,null,(function(t){return u.a.createElement(b.AgGridReact,{rowHeight:100,gridOptions:{},rowSelection:"multiple",defaultColDef:o,columnDefs:i,rowData:n,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})}))))):null)))}}]),r}(u.a.Component);t.default=L}}]);
//# sourceMappingURL=440.2618bac2.chunk.js.map
/*! For license information please see 386.a8011104.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[386],{3011:function(e,t,r){"use strict";r.r(t);var n=r(5),a=r(55),i=r(16),o=r(17),l=r(18),c=r(19),s=r(1),u=r.n(s),d=r(893),f=r(894),h=r(901),p=r(237),v=r(905),m=r(900),g=r(911),y=r(889),w=r(888),E=r(897),b=r(80),S=r(91),x=r.n(S),N=r(923),D=r(359),L=r(494),k=r(315),P=r(6),z=r(124);r(26),r(921),r(224);function C(){C=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(P){c=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var i=t&&t.prototype instanceof f?t:f,o=Object.create(i.prototype),l=new D(a||[]);return n(o,"_invoke",{value:b(e,r,l)}),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(P){return{type:"throw",arg:P}}}e.wrap=s;var d={};function f(){}function h(){}function p(){}var v={};c(v,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(L([])));g&&g!==t&&r.call(g,i)&&(v=g);var y=p.prototype=f.prototype=Object.create(v);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var a;n(this,"_invoke",{value:function(n,i){function o(){return new t((function(a,o){!function n(a,i,o,l){var c=u(e[a],e,i);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,l)}),(function(e){n("throw",e,o,l)})):t.resolve(d).then((function(e){s.value=e,o(s)}),(function(e){return n("throw",e,o,l)}))}l(c.arg)}(n,i,a,o)}))}return a=a?a.then(o,o):o()}})}function b(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return k()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var l=S(o,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function S(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=p,n(y,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:h,configurable:!0}),h.displayName=c(p,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new E(s(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(y),c(y,l,"Generator"),c(y,i,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}var O=function(e){Object(l.a)(r,e);var t=Object(c.a)(r);function r(){var e,n;Object(i.a)(this,r);for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return(n=t.call.apply(t,[this].concat(l))).state={rowData:[],Viewpermisson:null,Editpermisson:null,Createpermisson:null,Deletepermisson:null,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"WareHouseName",field:"WareHouseName",filter:!0,width:200,cellRendererFramework:function(e){var t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.category_name))}},{headerName:"Mobile",field:"mobile",filter:!0,width:200,cellRendererFramework:function(e){var t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.category_name))}},{headerName:"Email",field:"Email",filter:!0,width:200,cellRendererFramework:function(e){var t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.category_name))}},{headerName:"Status",field:"status",filter:!0,width:100,cellRendererFramework:function(e){return"Active"===e.data.status?u.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Deactive"===e.data.status?u.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},(e={headerName:"Actions",field:"sortorder"},Object(a.a)(e,"field","transactions"),Object(a.a)(e,"width",150),Object(a.a)(e,"cellRendererFramework",(function(e){return u.a.createElement("div",{className:"actions cursor-pointer"},n.state.Editpermisson&&u.a.createElement(b.b,{render:function(t){var r=t.history;return u.a.createElement(D.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){var t;return r.push("/app/freshlist/category/editCategory/".concat(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.id))}})}}),n.state.Deletepermisson&&u.a.createElement(b.b,{render:function(t){t.history;return u.a.createElement(L.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t;n.runthisfunction(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.id)}})}}))})),e)]},n.onGridReady=function(e){n.gridApi=e.api,n.gridColumnApi=e.columnApi,n.setState({currenPageSize:n.gridApi.paginationGetCurrentPage()+1,getPageSize:n.gridApi.paginationGetPageSize(),totalPages:n.gridApi.paginationGetTotalPages()})},n.updateSearchQuery=function(e){n.gridApi.setQuickFilter(e)},n.filterSize=function(e){n.gridApi&&(n.gridApi.paginationSetPageSize(Number(e)),n.setState({currenPageSize:e,getPageSize:e}))},n}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=Object(n.a)(C().mark((function e(){var t,r,n,a,i,o,l=this;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.parse(localStorage.getItem("userData")),i=null===a||void 0===a||null===(t=a.role)||void 0===t?void 0:t.find((function(e){return"Category List"===(null===e||void 0===e?void 0:e.pageName)})),this.setState({Viewpermisson:null===i||void 0===i?void 0:i.permission.includes("View")}),this.setState({Createpermisson:null===i||void 0===i?void 0:i.permission.includes("Create")}),this.setState({Editpermisson:null===i||void 0===i?void 0:i.permission.includes("Edit")}),this.setState({Deletepermisson:null===i||void 0===i?void 0:i.permission.includes("Delete")}),(o=new FormData).append("user_id",null===a||void 0===a||null===(r=a.Userinfo)||void 0===r?void 0:r.id),o.append("role",null===a||void 0===a||null===(n=a.Userinfo)||void 0===n?void 0:n.role),e.next=11,P.a.post("/getcategory",o).then((function(e){var t,r=null===(t=e.data.data)||void 0===t?void 0:t.category;console.log(r),r&&l.setState({rowData:r})}));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(n.a)(C().mark((function e(t){var r,n=this;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),r=this.gridApi.getSelectedRows(),x()("Warning","Sure You Want to Delete it",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"delete"}}}).then((function(e){var a,i;switch(e){case"delete":var o=new FormData,l=JSON.parse(localStorage.getItem("userData"));o.append("user_id",null===l||void 0===l||null===(a=l.Userinfo)||void 0===a?void 0:a.id),o.append("role",null===l||void 0===l||null===(i=l.Userinfo)||void 0===i?void 0:i.role),o.append("tablename","category"),o.append("delete_id",t),P.a.post("/deleterecord",o).then((function(e){var t;console.log(null===e||void 0===e?void 0:e.data.message),(null===e||void 0===e?void 0:e.data.success)&&(x()("Success","Category Deleted Successfully"),n.gridApi.updateRowData({remove:r})),(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.success)||(console.log("object"),x()("Error","".concat(null===e||void 0===e?void 0:e.data.message)))})).catch((function(e){console.log(e)}))}}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,r=t.rowData,n=t.columnDefs,a=t.defaultColDef;return u.a.createElement(d.a,{className:"app-user-list"},u.a.createElement(f.a,{sm:"12"}),u.a.createElement(f.a,{sm:"12"},u.a.createElement(h.a,null,u.a.createElement(d.a,{className:"m-2"},u.a.createElement(f.a,null,u.a.createElement("h1",{sm:"6",className:"float-left"},"DamageReport List")),u.a.createElement(f.a,null,u.a.createElement(p.a,{style:{cursor:"pointer"},className:"btn btn-primary float-right",onClick:function(){return e.props.history.push("/app/softNumen/warehouse/CreateWareHouse")}},"+ Add DamageReport"))),u.a.createElement(v.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(m.a,{className:"p-1 ag-dropdown"},u.a.createElement(g.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(k.a,{className:"ml-50",size:15})),u.a.createElement(y.a,{right:!0},u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(E.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(p.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(z.a.Consumer,null,(function(t){return u.a.createElement(N.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:a,columnDefs:n,rowData:r,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),r}(u.a.Component);t.default=O}}]);
//# sourceMappingURL=386.a8011104.chunk.js.map
/*! For license information please see 496.d15dca81.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[496],{2976:function(e,t,r){"use strict";r.r(t);var a=r(4),n=r(60),i=r(17),o=r(18),l=r(19),c=r(20),s=r(1),u=r.n(s),d=r(902),h=r(903),f=r(910),m=r(905),g=r(892),v=r(244),p=r(914),y=r(909),w=r(920),b=r(898),E=r(897),S=r(906),N=(r(5),r(68),r(131)),x=r(933),C=r(366),L=r(501),k=r(322),O=(r(27),r(927),r(232),r(84)),P=r(54),z=r(96),j=r.n(z);function D(){D=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(O){c=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof h?t:h,o=Object.create(i.prototype),l=new C(n||[]);return a(o,"_invoke",{value:E(e,r,l)}),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(O){return{type:"throw",arg:O}}}e.wrap=s;var d={};function h(){}function f(){}function m(){}var g={};c(g,i,(function(){return this}));var v=Object.getPrototypeOf,p=v&&v(v(L([])));p&&p!==t&&r.call(p,i)&&(g=p);var y=m.prototype=h.prototype=Object.create(g);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;a(this,"_invoke",{value:function(a,i){function o(){return new t((function(n,o){!function a(n,i,o,l){var c=u(e[n],e,i);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,o,l)}),(function(e){a("throw",e,o,l)})):t.resolve(d).then((function(e){s.value=e,o(s)}),(function(e){return a("throw",e,o,l)}))}l(c.arg)}(a,i,n,o)}))}return n=n?n.then(o,o):o()}})}function E(e,t,r){var a="suspendedStart";return function(n,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw i;return k()}for(r.method=n,r.arg=i;;){var o=r.delegate;if(o){var l=S(o,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var c=u(e,t,r);if("normal"===c.type){if(a=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a="completed",r.method="throw",r.arg=c.arg)}}}function S(e,t){var r=t.method,a=e.iterator[r];if(void 0===a)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var n=u(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function L(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,n=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=m,a(y,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:f,configurable:!0}),f.displayName=c(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,a,n,i){void 0===i&&(i=Promise);var o=new b(s(t,r,a,n),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(y),c(y,l,"Generator"),c(y,i,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var a in t)r.push(a);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=L,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return o.type="throw",o.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;x(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}var A=function(e){Object(l.a)(r,e);var t=Object(c.a)(r);function r(){var e,a;Object(i.a)(this,r);for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return(a=t.call.apply(t,[this].concat(l))).state={rowData:[],CatList:[],paginationPageSize:20,currenPageSize:"",category:"NA",Show:!1,getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Image",field:"image",filter:!0,width:100,cellRendererFramework:function(e){var t,r;return u.a.createElement(u.a.Fragment,null,(null===(t=e.data)||void 0===t?void 0:t.image)&&u.a.createElement("img",{className:"rounded-circle mr-50",src:"http://64.227.162.41:5000/Images/".concat(null===(r=e.data)||void 0===r?void 0:r.image),alt:"user avatar",height:"40",width:"40"}))}},{headerName:"Name",field:"name",filter:!0,width:200,cellRendererFramework:function(e){var t;return u.a.createElement("div",{className:"d-flex align-items-center"},u.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.name))}},{headerName:"description",field:"description",filter:!0,width:200,cellRendererFramework:function(e){var t;return u.a.createElement("div",{className:"d-flex align-items-center"},u.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.description))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){var t,r,a;return"Active"===(null===(t=e.data)||void 0===t?void 0:t.status)?u.a.createElement("div",{className:"badge badge-pill badge-success"},null===(r=e.data)||void 0===r?void 0:r.status):"Inactive"===(null===(a=e.data)||void 0===a?void 0:a.status)?u.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},(e={headerName:"Actions",field:"sortorder"},Object(n.a)(e,"field","transactions"),Object(n.a)(e,"width",150),Object(n.a)(e,"cellRendererFramework",(function(e){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(O.b,{render:function(t){var r=t.history;return u.a.createElement(C.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return r.push("/app/freshlist/subcategory/editSubCategory/".concat(a.state.category,"/").concat(e.data._id))}})}}),u.a.createElement(O.b,{render:function(t){t.history;return u.a.createElement(L.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){a.runthisfunction(e.data._id)}})}}))})),e)]},a.onGridReady=function(e){a.gridApi=e.api,a.gridColumnApi=e.columnApi,a.setState({currenPageSize:a.gridApi.paginationGetCurrentPage()+1,getPageSize:a.gridApi.paginationGetPageSize(),totalPages:a.gridApi.paginationGetTotalPages()})},a.updateSearchQuery=function(e){a.gridApi.setQuickFilter(e)},a.filterSize=function(e){a.gridApi&&(a.gridApi.paginationSetPageSize(Number(e)),a.setState({currenPageSize:e,getPageSize:e}))},a.handleShowSubCat=function(e){if(e.preventDefault(),"NA"!=a.state.category){var t,r,n,i=null===(t=a.state.CatList)||void 0===t?void 0:t.filter((function(e,t){return(null===e||void 0===e?void 0:e._id)==a.state.category}));console.log(null===(r=i[0])||void 0===r?void 0:r.subcategories),a.setState({rowData:null===(n=i[0])||void 0===n?void 0:n.subcategories}),a.setState({Show:!0})}else j()("Select Category")},a.changeHandler=function(e){a.setState(Object(n.a)({},e.target.name,e.target.value))},a}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=Object(a.a)(D().mark((function e(){var t,r,a,n,i=this;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=JSON.parse(localStorage.getItem("userData")),a=null===r||void 0===r||null===(t=r.role)||void 0===t?void 0:t.find((function(e){return"Category List"===(null===e||void 0===e?void 0:e.pageName)})),this.setState({Viewpermisson:null===a||void 0===a?void 0:a.permission.includes("View")}),this.setState({Createpermisson:null===a||void 0===a?void 0:a.permission.includes("Create")}),this.setState({Editpermisson:null===a||void 0===a?void 0:a.permission.includes("Edit")}),this.setState({Deletepermisson:null===a||void 0===a?void 0:a.permission.includes("Delete")}),n=JSON.parse(localStorage.getItem("userData")),e.next=9,Object(P.d)(null===n||void 0===n?void 0:n._id,null===n||void 0===n?void 0:n.database).then((function(e){var t;console.log(e),(null===e||void 0===e||null===(t=e.Category)||void 0===t?void 0:t.length)&&i.setState({CatList:null===e||void 0===e?void 0:e.Category})})).catch((function(e){console.log(e)}));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(a.a)(D().mark((function e(t){var r=this;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),Object(P.hb)(this.state.category,t).then((function(e){var t=r.gridApi.getSelectedRows();r.gridApi.updateRowData({remove:t}),j()("SubCategory Deleted Successfully")})).catch((function(e){console.log(e),j()("Something went wrong")}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this,r=this.state,a=r.rowData,n=r.columnDefs,i=r.defaultColDef,o=r.Show;return u.a.createElement(d.a,{className:"app-user-list"},u.a.createElement(h.a,{sm:"12"}),u.a.createElement(h.a,{sm:"12"},u.a.createElement(f.a,null,u.a.createElement(d.a,{className:"mt-2 ml-2 mr-2"},u.a.createElement(h.a,{lg:"5",md:"5",xs:"12"},u.a.createElement("h1",{sm:"6",className:"float-left",style:{fontWeight:"600"}},"SubCategory List")),u.a.createElement(h.a,{lg:"3",md:"3",className:"mb-2"},u.a.createElement(m.a,null," Select Category *"),u.a.createElement(g.a,{required:!0,type:"select",placeholder:"Select Category",name:"category",value:this.state.category,onChange:this.changeHandler},u.a.createElement("option",{value:"NA"},"--Select Category--"),null===(e=this.state.CatList)||void 0===e?void 0:e.map((function(e){return u.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.name)})))),u.a.createElement(h.a,{lg:"2",md:"2",className:"mb-2"},u.a.createElement(v.a,{style:{cursor:"pointer",backgroundColor:"#39cccc",color:"white",fontWeight:"600"},className:"btn float-right mt-1",color:"#39cccc",onClick:this.handleShowSubCat},"Submit")),u.a.createElement(h.a,null,u.a.createElement(O.b,{render:function(e){var t=e.history;return u.a.createElement(v.a,{style:{cursor:"pointer",backgroundColor:"#39cccc",color:"white",fontWeight:"600"},className:"btn float-right mt-1 ",color:"#39cccc",onClick:function(){return t.push("/app/freshlist/subcategory/addSubCategory")}},"+ SubCategory")}}))),o?u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(y.a,{className:"p-1 ag-dropdown"},u.a.createElement(w.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(k.a,{className:"ml-50",size:15})),u.a.createElement(b.a,{right:!0},u.a.createElement(E.a,{tag:"div",onClick:function(){return t.filterSize(20)}},"20"),u.a.createElement(E.a,{tag:"div",onClick:function(){return t.filterSize(50)}},"50"),u.a.createElement(E.a,{tag:"div",onClick:function(){return t.filterSize(100)}},"100"),u.a.createElement(E.a,{tag:"div",onClick:function(){return t.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(S.a,{placeholder:"search...",onChange:function(e){return t.updateSearchQuery(e.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(v.a.Ripple,{color:"primary",onClick:function(){return t.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(N.a.Consumer,null,(function(e){return u.a.createElement(x.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:a,onGridReady:t.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:t.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===e.state.direction})}))))):null)))}}]),r}(u.a.Component);t.default=A}}]);
//# sourceMappingURL=496.d15dca81.chunk.js.map
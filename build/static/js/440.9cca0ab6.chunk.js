/*! For license information please see 440.9cca0ab6.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[440],{2992:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a(55),i=a(16),l=a(17),o=a(18),s=a(19),c=a(1),u=a.n(c),d=a(881),m=a(890),h=a(891),p=a(898),g=a(173),v=a(902),f=a(897),E=a(908),y=a(886),b=a(885),w=a(894),S=a(909),N=a(888),x=a(889),C=a(892),_=a(893),P=a(880),D=a(9),L=(a(64),a(1103)),O=a(123),k=a(921),B=a(358),z=a(311),A=(a(25),a(919),a(917),a(1749)),j=a(78),T=a(161),M=a.n(T);function R(){R=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r=Object.defineProperty||function(e,t,a){e[t]=a.value},n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function s(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(D){s=function(e,t,a){return e[t]=a}}function c(e,t,a,n){var i=t&&t.prototype instanceof m?t:m,l=Object.create(i.prototype),o=new C(n||[]);return r(l,"_invoke",{value:w(e,a,o)}),l}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(D){return{type:"throw",arg:D}}}e.wrap=c;var d={};function m(){}function h(){}function p(){}var g={};s(g,i,(function(){return this}));var v=Object.getPrototypeOf,f=v&&v(v(_([])));f&&f!==t&&a.call(f,i)&&(g=f);var E=p.prototype=m.prototype=Object.create(g);function y(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;r(this,"_invoke",{value:function(r,i){function l(){return new t((function(n,l){!function r(n,i,l,o){var s=u(e[n],e,i);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,l,o)}),(function(e){r("throw",e,l,o)})):t.resolve(d).then((function(e){c.value=e,l(c)}),(function(e){return r("throw",e,l,o)}))}o(s.arg)}(r,i,n,l)}))}return n=n?n.then(l,l):l()}})}function w(e,t,a){var r="suspendedStart";return function(n,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw i;return P()}for(a.method=n,a.arg=i;;){var l=a.delegate;if(l){var o=S(l,a);if(o){if(o===d)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var s=u(e,t,a);if("normal"===s.type){if(r=a.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r="completed",a.method="throw",a.arg=s.arg)}}}function S(e,t){var a=t.method,r=e.iterator[a];if(void 0===r)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),d;var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function _(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return h.prototype=p,r(E,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:h,configurable:!0}),h.displayName=s(p,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,o,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},y(b.prototype),s(b.prototype,l,(function(){return this})),e.AsyncIterator=b,e.async=function(t,a,r,n,i){void 0===i&&(i=Promise);var l=new b(c(t,a,r,n),i);return e.isGeneratorFunction(a)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},y(E),s(E,o,"Generator"),s(E,i,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var r in t)a.push(r);return a.reverse(),function e(){for(;a.length;){var r=a.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=_,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return l.type="throw",l.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],l=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var o=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(o&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var l=i?i.completion:{};return l.type=e,l.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;x(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:_(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),d}},e}new L.ToWords({localeCode:"en-IN",converterOptions:{currency:!0,ignoreDecimal:!1,ShowMyBill:!1,ignoreZeroCurrency:!1,doNotAddOnly:!1,currencyOptions:{name:"Rupee",plural:"Rupees",symbol:"\u20b9",fractionalUnit:{name:"Paisa",plural:"Paise",symbol:""}}}});var F=[],G=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e,r;Object(i.a)(this,a);for(var l=arguments.length,o=new Array(l),s=0;s<l;s++)o[s]=arguments[s];return(r=t.call.apply(t,[this].concat(o))).state={AllbillMerged:[],rowData:[],Applied_Charges:{},paginationPageSize:20,currenPageSize:"",Billtoposition:"Left",shipto:"right",logoposition:"Left",ButtonText:"Submit",Mergebilllength:"",modal:!1,sgst:"",discount:"",ViewBill:!0,wordsNumber:"",cgst:"",otherCharges:"",deliveryCharges:"",PrintData:{},Viewpermisson:null,Editpermisson:null,Createpermisson:null,Deletepermisson:null,getPageSize:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:80,filter:!0},{headerName:"Add Bills",width:160,filter:!0,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center justify-content-center cursor-pointer"},u.a.createElement("div",null,u.a.createElement("span",null,u.a.createElement("input",{type:"checkbox",className:"customcheckbox",onClick:function(t){r.handleMultipleBillsAdd(null===e||void 0===e?void 0:e.data,t.target.checked)}}))))}},{headerName:"Status",field:"order_status",filter:!0,width:160,cellRendererFramework:function(e){var t,a,r,n,i,l;return"Completed"===(null===(t=e.data)||void 0===t?void 0:t.order_status)?u.a.createElement("div",{className:"badge badge-pill badge-success"},"Completed"):"Pending"===(null===(a=e.data)||void 0===a?void 0:a.order_status)?u.a.createElement("div",{className:"badge badge-pill badge-warning"},null===(r=e.data)||void 0===r?void 0:r.order_status):"Inprogress"===(null===(n=e.data)||void 0===n?void 0:n.order_status)?u.a.createElement("div",{className:"badge badge-pill bg-primary"},"Inprogress"):"canceled"===(null===(i=e.data)||void 0===i?void 0:i.order_status)?u.a.createElement("div",{className:"badge badge-pill bg-danger"},e.data.order_status):"Completed"===(null===(l=e.data)||void 0===l?void 0:l.order_status)?u.a.createElement("div",{className:"badge badge-pill bg-success"},"Completed"):null}},{headerName:"order_id",field:"order_id",filter:!0,resizable:!0,width:150,cellRendererFramework:function(e){var t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("div",null,u.a.createElement("span",null,null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.order_id)))}},{headerName:"username",field:"user_full_name",filter:!0,resizable:!0,width:150,cellRendererFramework:function(e){var t;return u.a.createElement("div",{className:"d-flex align-items-center justify-content-center cursor-pointer"},u.a.createElement("div",null,u.a.createElement("span",null,null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.user_full_name)))}},{headerName:"supplier_name",field:"supplier_name",filter:!0,resizable:!0,width:210,cellRendererFramework:function(e){var t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("div",null,u.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.supplier_name)))}},(e={headerName:"Actions",field:"sortorder"},Object(n.a)(e,"field","transactions"),Object(n.a)(e,"width",120),Object(n.a)(e,"cellRendererFramework",(function(e){return u.a.createElement("div",{className:"actions cursor-pointer"},r.state.Viewpermisson&&u.a.createElement(j.b,{render:function(t){var a=t.history;return u.a.createElement(B.a,{className:"mr-50",size:"25px",color:"green",onClick:function(){var t;return a.push("/app/freshlist/order/EditCompletedorders/".concat(null===(t=e.data)||void 0===t?void 0:t.order_id))}})}}))})),e),{headerName:"total",field:"total",filter:!0,resizable:!0,width:160,cellRendererFramework:function(e){var t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("div",null,u.a.createElement(d.a,{color:"success"},null===(t=e.data)||void 0===t?void 0:t.total)))}},{headerName:"order Creation date",field:"order_date",filter:!0,resizable:!0,width:230,cellRendererFramework:function(e){var t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("div",null,u.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.order_date)))}}]},r.handleMultipleBillsAdd=function(e,t){r.setState({PrintData:e});var a=JSON.parse(localStorage.getItem("userData"));if(t){var n,i;F.push({order_id:null===e||void 0===e?void 0:e.order_id,user_id:null===a||void 0===a||null===(n=a.Userinfo)||void 0===n?void 0:n.id,role:null===a||void 0===a||null===(i=a.Userinfo)||void 0===i?void 0:i.role})}else{var l=F.findIndex((function(t){return(null===t||void 0===t?void 0:t.order_id)===(null===e||void 0===e?void 0:e.order_id)}));F.splice(l,1)}r.setState({Mergebilllength:null===F||void 0===F?void 0:F.length})},r.MergeBillNow=function(e){e.preventDefault(),r.toggleModal()},r.handleSubmit=function(e){if(e.preventDefault(),r.setState({ButtonText:"InProcess"}),r.state.sgst&&r.state.cgst){var t,a,n=JSON.parse(localStorage.getItem("userData")),i=new FormData;i.append("user_id",null===n||void 0===n||null===(t=n.Userinfo)||void 0===t?void 0:t.id),i.append("order_id",JSON.stringify(F)),i.append("role",null===n||void 0===n||null===(a=n.Userinfo)||void 0===a?void 0:a.role),i.append("sgst",r.state.sgst),i.append("cgst",r.state.cgst),i.append("discount_value",r.state.discount),i.append("delivery_charges",r.state.deliveryCharges),i.append("other_charges",r.state.otherCharges),D.a.post("/createmergebillapi",i).then((function(e){var t,a,n,i,l,o;r.setState({Applied_Charges:null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.applied_charges}),r.setState({AllbillMerged:null===(n=e.data.data)||void 0===n?void 0:n.items}),r.setState({ViewBill:!0});var s=(new L.ToWords).convert(Number(null===(i=e.data)||void 0===i||null===(l=i.data)||void 0===l||null===(o=l.applied_charges)||void 0===o?void 0:o.grandtotal),{currency:!0});r.setState({wordsNumber:s})})).catch((function(e){console.log(e),r.setState({ButtonText:"Submit"})}))}else r.setState({ButtonText:"Submit"}),M()("Enter Values in field")},r.handleBillDownload=function(e){r.setState({PrintData:e});var t=(new L.ToWords).convert(Number(e.sub_total),{currency:!0});r.setState({wordsNumber:t}),r.toggleModal()},r.toggleModal=function(){r.setState((function(e){return{modal:!e.modal}}))},r.toggleModalclose=function(){r.setState({modal:!1}),r.setState({ShowMyBill:!1})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t={imagePosition:r.state.logoposition,billTo:r.state.Billtoposition,shipto:r.state.shipto};t.billTo==t.shipto?M()("Can not set Bill to and Ship to on one Same side"):(localStorage.setItem("billUI",JSON.stringify(t)),r.setState({ShowMyBill:!0}))},r.onGridReady=function(e){r.gridApi=e.api,r.gridColumnApi=e.columnApi,r.setState({currenPageSize:r.gridApi.paginationGetCurrentPage()+1,getPageSize:r.gridApi.paginationGetPageSize(),totalPages:r.gridApi.paginationGetTotalPages()})},r.updateSearchQuery=function(e){r.gridApi.setQuickFilter(e)},r.filterSize=function(e){r.gridApi&&(r.gridApi.paginationSetPageSize(Number(e)),r.setState({currenPageSize:e,getPageSize:e}))},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(R().mark((function e(){var t,a,r,n,i,l,o,s=this;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse(localStorage.getItem("userData")),(i=JSON.parse(localStorage.getItem("billUI")))&&(this.setState({logoposition:null===i||void 0===i?void 0:i.imagePosition}),this.setState({Billtoposition:null===i||void 0===i?void 0:i.billTo}),this.setState({shipto:null===i||void 0===i?void 0:i.shipto})),l=null===n||void 0===n||null===(t=n.role)||void 0===t?void 0:t.find((function(e){return"invoice Generator"===(null===e||void 0===e?void 0:e.pageName)})),this.setState({Viewpermisson:null===l||void 0===l?void 0:l.permission.includes("View")}),this.setState({Createpermisson:null===l||void 0===l?void 0:l.permission.includes("Create")}),this.setState({Editpermisson:null===l||void 0===l?void 0:l.permission.includes("Edit")}),this.setState({Deletepermisson:null===l||void 0===l?void 0:l.permission.includes("Delete")}),(o=new FormData).append("user_id",null===n||void 0===n||null===(a=n.Userinfo)||void 0===a?void 0:a.id),o.append("role",null===n||void 0===n||null===(r=n.Userinfo)||void 0===r?void 0:r.role),e.next=13,D.a.post("/getallcompleteorders",o).then((function(e){var t=e.data.data;s.setState({rowData:t})})).catch((function(e){console.log(e)}));case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(r.a)(R().mark((function e(t){return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.delete("/admin/del_subcategory/".concat(t)).then((function(e){console.log(e)}),(function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,r=t.columnDefs,n=t.defaultColDef;return u.a.createElement(m.a,{className:"app-user-list"},u.a.createElement(h.a,{sm:"12"}),u.a.createElement(h.a,{sm:"12"},u.a.createElement(p.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(h.a,null,u.a.createElement("h1",{sm:"6",className:"float-left"},"Generate invoice")),u.a.createElement(h.a,null,u.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:this.MergeBillNow},"Create Invoice"))),u.a.createElement(v.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(f.a,{className:"p-1 ag-dropdown"},u.a.createElement(E.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(z.a,{className:"ml-50",size:15})),u.a.createElement(y.a,{right:!0},u.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(w.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(g.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(O.a.Consumer,null,(function(t){return u.a.createElement(k.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))),u.a.createElement(S.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:this.props.className,style:{maxWidth:"1050px"}},u.a.createElement(N.a,{toggle:this.toggleModalclose},"Download Bill"),u.a.createElement(x.a,null,this.state.ShowMyBill&&this.state.ShowMyBill?u.a.createElement(u.a.Fragment,null,this.state.ViewBill&&this.state.ViewBill?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{style:{width:"100%"},className:""},u.a.createElement(A.a,{PrintData:this.state.PrintData,Applied_Charges:this.state.Applied_Charges,AllbillMerged:this.state.AllbillMerged,wordsNumber:this.state.wordsNumber,sgst:this.state.sgst,cgst:this.state.cgst,deliveryCharges:this.state.deliveryCharges,otherCharges:this.state.otherCharges,discount:this.state.discount,AddedBill:F}))):u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{style:{width:"100%"},className:""},u.a.createElement(C.a,{onSubmit:function(t){return e.handleSubmit(t)}},u.a.createElement(m.a,{className:"main div heading px-3 py-3"},u.a.createElement(h.a,{lg:"6",className:"mb-2"},u.a.createElement(_.a,null,"SGST"),u.a.createElement("select",{required:!0,className:"form-control",value:this.state.sgst,onChange:this.changeHandler,name:"sgst"},u.a.createElement("option",{value:"not selected"},"--Select--"),u.a.createElement("option",{value:"5"},"5%"),u.a.createElement("option",{value:"9"},"9%"),u.a.createElement("option",{value:"12"},"12%"))),u.a.createElement(h.a,{lg:"6",className:"mb-2"},u.a.createElement(_.a,null,"CGST"),u.a.createElement("select",{required:!0,className:"form-control",name:"cgst",placeholder:"Enter CGST",value:this.state.cgst,onChange:this.changeHandler},u.a.createElement("option",{value:"not selected"},"--Select--"),u.a.createElement("option",{value:"5"},"5%"),u.a.createElement("option",{value:"9"},"9%"),u.a.createElement("option",{value:"12"},"12%"))),u.a.createElement(h.a,{lg:"6"},u.a.createElement(_.a,{className:"mt-2"},"Other Charges"),u.a.createElement(w.a,{type:"number",name:"otherCharges",placeholder:"Enter Other Charges",value:this.state.otherCharges,onChange:this.changeHandler})),u.a.createElement(h.a,{lg:"6"},u.a.createElement(_.a,{className:"mt-2"},"Delivery Charges"),u.a.createElement(w.a,{type:"number",name:"deliveryCharges",placeholder:"Enter Delivery Charges",value:this.state.deliveryCharges,onChange:this.changeHandler})),u.a.createElement(h.a,{lg:"6"},u.a.createElement(_.a,{className:"mt-2"},"Discount "),u.a.createElement(w.a,{type:"number",name:"discount",placeholder:"Enter discount value",value:this.state.discount,onChange:this.changeHandler}))),u.a.createElement(m.a,null,u.a.createElement(h.a,{lg:"12",className:"mt-2 mb-2"},u.a.createElement("div",{className:"d-flex justify-content-center"},u.a.createElement(g.a,{disabled:"InProcess"===this.state.ButtonText,color:"primary",type:"submit"},this.state.ButtonText)))))))):u.a.createElement(u.a.Fragment,null,u.a.createElement(C.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(m.a,{className:"mb-2"},u.a.createElement(h.a,{lg:"4",md:"4",className:"mb-2"},u.a.createElement(_.a,null,"Logo Position"),u.a.createElement(P.a,{type:"select",placeholder:"Select Type",name:"logoposition",value:this.state.logoposition,onChange:this.changeHandler},u.a.createElement("option",null,"---Select---"),u.a.createElement("option",{value:"Left"},"Left"),u.a.createElement("option",{value:"right"},"Right"))),u.a.createElement(h.a,{lg:"4",md:"4",className:"mb-2"},u.a.createElement(_.a,null,"ship to position"),u.a.createElement(P.a,{type:"select",placeholder:"Select Type",name:"shipto",value:this.state.shipto,onChange:this.changeHandler},u.a.createElement("option",null,"---Select---"),u.a.createElement("option",{value:"Left"},"Left"),u.a.createElement("option",{value:"right"},"Right")),u.a.createElement("span",null,this.state.shipto==this.state.Billtoposition?u.a.createElement("span",{style:{color:"red"}},"Bill to and ship to cannot be same"):null)),u.a.createElement(h.a,{lg:"4",md:"4",className:"mb-2"},u.a.createElement(_.a,null,"Bill to position"),u.a.createElement(P.a,{type:"select",placeholder:"Select Type",name:"Billtoposition",value:this.state.Billtoposition,onChange:this.changeHandler},u.a.createElement("option",null,"---Select---"),u.a.createElement("option",{value:"Left"},"Left"),u.a.createElement("option",{value:"right"},"Right")),u.a.createElement("span",null,this.state.shipto==this.state.Billtoposition?u.a.createElement("span",{style:{color:"red"}},"Bill to and ship to cannot be same"):null))),u.a.createElement(m.a,null,u.a.createElement(h.a,null,u.a.createElement("div",{className:"d-flex justify-content-center"},u.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit")))))))))}}]),a}(u.a.Component);t.default=G}}]);
//# sourceMappingURL=440.9cca0ab6.chunk.js.map
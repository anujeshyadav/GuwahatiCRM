/*! For license information please see 316.6b613dac.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[316],{3075:function(e,t,r){"use strict";r.r(t);var n=r(55),a=r(26),i=r(5),o=r(16),l=r(17),c=r(18),s=r(19),u=r(1),d=r.n(u),f=r(891),h=r(892),p=r(899),v=r(903),m=r(898),g=r(909),y=r(887),w=r(886),b=r(90),E=r(630),S=r.n(E),x=r(9),O=r(123),P=r(922),z=(r(943),r(358)),L=r(355),j=r(490),D=r(311),N=(r(920),r(918),r(161)),k=r.n(N),_=r(78),A=r(79);function G(){G=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(j){c=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var i=t&&t.prototype instanceof f?t:f,o=Object.create(i.prototype),l=new P(a||[]);return n(o,"_invoke",{value:E(e,r,l)}),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}e.wrap=s;var d={};function f(){}function h(){}function p(){}var v={};c(v,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(z([])));g&&g!==t&&r.call(g,i)&&(v=g);var y=p.prototype=f.prototype=Object.create(v);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var a;n(this,"_invoke",{value:function(n,i){function o(){return new t((function(a,o){!function n(a,i,o,l){var c=u(e[a],e,i);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,l)}),(function(e){n("throw",e,o,l)})):t.resolve(d).then((function(e){s.value=e,o(s)}),(function(e){return n("throw",e,o,l)}))}l(c.arg)}(n,i,a,o)}))}return a=a?a.then(o,o):o()}})}function E(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return L()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var l=S(o,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function S(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function z(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=p,n(y,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:h,configurable:!0}),h.displayName=c(p,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new b(s(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(y),c(y,l,"Generator"),c(y,i,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=z,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:z(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}var C=function(e){Object(c.a)(r,e);var t=Object(s.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={rowData:[],Viewpermisson:null,Editpermisson:null,Createpermisson:null,Deletepermisson:null,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=Object(i.a)(G().mark((function e(){var t,r,i,o,l,c,s=this;return G().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(A.vb)().then((function(e){var t,r,i,o=[],l=[],c=S.a.xml2json(e.data,{compact:!0,spaces:2});console.log(JSON.parse(c).Policy);var u=null===(t=JSON.parse(c).Policy)||void 0===t||null===(r=t.DropdownModel)||void 0===r?void 0:r.dropdown;if(null===u||void 0===u?void 0:u.length)o=null===u||void 0===u?void 0:u.map((function(e){return console.log(e),{headerName:null===e||void 0===e?void 0:e.label,field:null===e||void 0===e?void 0:e.name,filter:!0,sortable:!0}}));else l=[{headerName:null===u||void 0===u?void 0:u.label._text,field:null===u||void 0===u?void 0:u.name._text,filter:!0,sortable:!0}];var f=[].concat(Object(a.a)(l),Object(a.a)(o));console.log(f);var h=[(i={headerName:"Actions",field:"sortorder"},Object(n.a)(i,"field","transactions"),Object(n.a)(i,"width",190),Object(n.a)(i,"cellRendererFramework",(function(e){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(_.b,{render:function(e){e.history;return d.a.createElement(z.a,{className:"mr-50",size:"25px",color:"green"})}}),d.a.createElement(_.b,{render:function(e){e.history;return d.a.createElement(L.a,{className:"mr-50",size:"25px",color:"blue"})}}),d.a.createElement(_.b,{render:function(){return d.a.createElement(j.a,{className:"mr-50",size:"25px",color:"red"})}}))})),i)].concat(Object(a.a)(f));console.log(null===u||void 0===u?void 0:u.option),s.setState({columnDefs:h}),s.setState({rowData:null===u||void 0===u?void 0:u.option})})).catch((function(e){console.log(e)})),o=JSON.parse(localStorage.getItem("userData")),l=null===o||void 0===o||null===(t=o.role)||void 0===t?void 0:t.find((function(e){return"Role List"===(null===e||void 0===e?void 0:e.pageName)})),this.setState({Viewpermisson:null===l||void 0===l?void 0:l.permission.includes("View")}),this.setState({Createpermisson:null===l||void 0===l?void 0:l.permission.includes("Create")}),this.setState({Editpermisson:null===l||void 0===l?void 0:l.permission.includes("Edit")}),this.setState({Deletepermisson:null===l||void 0===l?void 0:l.permission.includes("Delete")}),(c=new FormData).append("user_id",null===o||void 0===o||null===(r=o.Userinfo)||void 0===r?void 0:r.id),c.append("role",null===o||void 0===o||null===(i=o.Userinfo)||void 0===i?void 0:i.role),e.next=12,x.a.post("/getrolelist",c).then((function(e){var t,r=Object.values(null===(t=e.data)||void 0===t?void 0:t.data);s.setState({rowData:r})})).catch((function(e){}));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(e){var t=this,r=this.gridApi.getSelectedRows();k()("Warning","Sure You Want to Delete it",{buttons:{cancel:"cancel",catch:{text:"Delete ",value:"delete"}}}).then((function(n){switch(n){case"delete":var a=new FormData;a.append("user_id",e),t.gridApi.updateRowData({remove:r}),x.a.post("/userdelete",a).then((function(e){}))}}))}},{key:"render",value:function(){var e=this,t=this.state,r=t.rowData,n=t.columnDefs,a=t.defaultColDef;return d.a.createElement(f.a,{className:"app-user-list"},d.a.createElement(h.a,{sm:"12"},d.a.createElement(p.a,null,d.a.createElement(f.a,{className:"m-2"},d.a.createElement(h.a,null,d.a.createElement("h1",{className:"float-left"}," Search Inspections "))),d.a.createElement(v.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(m.a,{className:"p-1 ag-dropdown"},d.a.createElement(g.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(D.a,{className:"ml-50",size:15})),d.a.createElement(y.a,{right:!0},d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134"))))),d.a.createElement(O.a.Consumer,null,(function(t){return d.a.createElement(P.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:a,columnDefs:n,rowData:r,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),r}(d.a.Component);C.contextType=b.a,t.default=C},918:function(e,t,r){}}]);
//# sourceMappingURL=316.6b613dac.chunk.js.map
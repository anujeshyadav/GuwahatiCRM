/*! For license information please see 503.e7278927.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[503],{3181:function(e,t,n){"use strict";n.r(t);var r=n(60),i=n(24),o=n(4),a=n(16),l=n(17),c=n(18),u=n(19),s=n(1),d=n.n(s),f=n(904),h=n(905),v=n(912),p=n(916),m=n(911),g=n(922),y=n(900),w=n(899),b=n(78),E=n(233),S=n.n(E),x=(n(6),n(132)),P=n(936),O=(n(946),n(370)),N=n(367),j=n(502),z=n(323),L=(n(27),n(929),n(232),n(72)),D=n.n(L),_=n(85),k=n(40);function A(){A=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(z){c=function(e,t,n){return e[t]=n}}function u(e,t,n,i){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),l=new O(i||[]);return r(a,"_invoke",{value:E(e,n,l)}),a}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(z){return{type:"throw",arg:z}}}e.wrap=u;var d={};function f(){}function h(){}function v(){}var p={};c(p,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(N([])));g&&g!==t&&n.call(g,o)&&(p=g);var y=v.prototype=f.prototype=Object.create(p);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var i;r(this,"_invoke",{value:function(r,o){function a(){return new t((function(i,a){!function r(i,o,a,l){var c=s(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,a,l)}),(function(e){r("throw",e,a,l)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,l)}))}l(c.arg)}(r,o,i,a)}))}return i=i?i.then(a,a):a()}})}function E(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return j()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var l=S(a,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function S(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=s(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,d;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=v,r(y,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:h,configurable:!0}),h.displayName=c(v,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),c(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new b(u(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(y),c(y,l,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=N,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}var C=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={rowData:[],Viewpermisson:null,Editpermisson:null,Createpermisson:null,Deletepermisson:null,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(A().mark((function e(){var t,n,o,a=this;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(k.Pb)().then((function(e){var t,n,o,l=[],c=[],u=S.a.xml2json(e.data,{compact:!0,spaces:2});console.log(JSON.parse(u).Policy);var s=null===(t=JSON.parse(u).Policy)||void 0===t?void 0:t.input,f=null===s||void 0===s?void 0:s.map((function(e){var t,n;return{headerName:null===e||void 0===e||null===(t=e.label)||void 0===t?void 0:t._text,field:null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,filter:!0,sortable:!0}})),h=null===(n=JSON.parse(u).Policy)||void 0===n?void 0:n.MyDropDown;if(null===h||void 0===h?void 0:h.length)l=null===h||void 0===h?void 0:h.map((function(e){var t,n,r,i;return{headerName:null===e||void 0===e||null===(t=e.dropdown)||void 0===t||null===(n=t.label)||void 0===n?void 0:n._text,field:null===e||void 0===e||null===(r=e.dropdown)||void 0===r||null===(i=r.name)||void 0===i?void 0:i._text,filter:!0,sortable:!0}}));else{var v,p,m,g,y,w;c=[{headerName:null===(v=ele)||void 0===v||null===(p=v.dropdown)||void 0===p||null===(m=p.label)||void 0===m?void 0:m._text,field:null===(g=ele)||void 0===g||null===(y=g.dropdown)||void 0===y||null===(w=y.name)||void 0===w?void 0:w._text,filter:!0,sortable:!0}]}var b=[].concat(Object(i.a)(f),Object(i.a)(c),Object(i.a)(l));console.log(b);var E=[(o={headerName:"Actions",field:"sortorder"},Object(r.a)(o,"field","transactions"),Object(r.a)(o,"width",190),Object(r.a)(o,"cellRendererFramework",(function(e){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(_.b,{render:function(e){e.history;return d.a.createElement(O.a,{className:"mr-50",size:"25px",color:"green"})}}),d.a.createElement(_.b,{render:function(e){e.history;return d.a.createElement(N.a,{className:"mr-50",size:"25px",color:"blue"})}}),d.a.createElement(_.b,{render:function(){return d.a.createElement(j.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t;a.runthisfunction(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t._id)}})}}))})),o)].concat(Object(i.a)(b));a.setState({columnDefs:E}),Object(k.Nb)().then((function(e){console.log(null===e||void 0===e?void 0:e.Policy),a.setState({rowData:null===e||void 0===e?void 0:e.Policy})})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)})),n=JSON.parse(localStorage.getItem("userData")),o=null===n||void 0===n||null===(t=n.role)||void 0===t?void 0:t.find((function(e){return"Role List"===(null===e||void 0===e?void 0:e.pageName)})),this.setState({Viewpermisson:null===o||void 0===o?void 0:o.permission.includes("View")}),this.setState({Createpermisson:null===o||void 0===o?void 0:o.permission.includes("Create")}),this.setState({Editpermisson:null===o||void 0===o?void 0:o.permission.includes("Edit")}),this.setState({Deletepermisson:null===o||void 0===o?void 0:o.permission.includes("Delete")});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(e){var t=this,n=this.gridApi.getSelectedRows();D()("Warning","Sure You Want to Delete it",{buttons:{cancel:"cancel",catch:{text:"Delete ",value:"delete"}}}).then((function(r){switch(r){case"delete":Object(k.ab)(e).then((function(e){t.gridApi.updateRowData({remove:n}),console.log(e)})).catch((function(e){console.log(e)}))}}))}},{key:"render",value:function(){var e,t,n,r=this,i=this.state,o=i.rowData,a=i.columnDefs,l=i.defaultColDef;return d.a.createElement(f.a,{className:"app-user-list"},d.a.createElement(h.a,{sm:"12"},d.a.createElement(v.a,null,d.a.createElement(f.a,{className:"m-2"},d.a.createElement(h.a,null,d.a.createElement("h1",{className:"float-left"},"Search Policy"))),d.a.createElement(p.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(m.a,{className:"p-1 ag-dropdown"},d.a.createElement(g.a,null,this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",(null===(e=this.state.rowData)||void 0===e?void 0:e.length)-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:null===(t=this.state.rowData)||void 0===t?void 0:t.length," ","of ",null===(n=this.state.rowData)||void 0===n?void 0:n.length,d.a.createElement(z.a,{className:"ml-50",size:15})),d.a.createElement(y.a,{right:!0},d.a.createElement(w.a,{tag:"div",onClick:function(){return r.filterSize(20)}},"20"),d.a.createElement(w.a,{tag:"div",onClick:function(){return r.filterSize(50)}},"50"),d.a.createElement(w.a,{tag:"div",onClick:function(){return r.filterSize(100)}},"100"),d.a.createElement(w.a,{tag:"div",onClick:function(){return r.filterSize(134)}},"134"))))),d.a.createElement(x.a.Consumer,null,(function(e){return d.a.createElement(P.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:l,columnDefs:a,rowData:o,onGridReady:r.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:r.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===e.state.direction})})))))))}}]),n}(d.a.Component);C.contextType=b.a,t.default=C}}]);
//# sourceMappingURL=503.e7278927.chunk.js.map
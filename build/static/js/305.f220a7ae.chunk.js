/*! For license information please see 305.f220a7ae.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[305],{1022:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(1);var n=function(e){var t,r,n=JSON.parse(localStorage.getItem("userData")),a=null===n||void 0===n||null===(t=n.rolename)||void 0===t||null===(r=t.rolePermission)||void 0===r?void 0:r.find((function(t){return(null===t||void 0===t?void 0:t.pagename)===e}));return{View:null===a||void 0===a?void 0:a.permission.includes("View"),Create:null===a||void 0===a?void 0:a.permission.includes("Create"),Edit:null===a||void 0===a?void 0:a.permission.includes("Edit"),Delete:null===a||void 0===a?void 0:a.permission.includes("Delete")}}},3113:function(e,t,r){"use strict";r.r(t);var n=r(4),a=r(59),i=r(16),o=r(17),c=r(18),l=r(19),s=r(1),u=r.n(s),d=r(13),f=r(901),h=r(902),p=r(909),m=r(243),v=r(913),g=r(908),y=r(919),w=r(897),E=r(896),b=r(76),x=(r(232),r(6)),S=r(130),P=r(931),N=(r(939),r(321)),z=(r(26),r(926),r(231),r(95)),L=r.n(z),k=r(83),O=r(53),j=r(1022);function D(){D=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(k){l=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var i=t&&t.prototype instanceof f?t:f,o=Object.create(i.prototype),c=new N(a||[]);return n(o,"_invoke",{value:b(e,r,c)}),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=s;var d={};function f(){}function h(){}function p(){}var m={};l(m,i,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(z([])));g&&g!==t&&r.call(g,i)&&(m=g);var y=p.prototype=f.prototype=Object.create(m);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var a;n(this,"_invoke",{value:function(n,i){function o(){return new t((function(a,o){!function n(a,i,o,c){var l=u(e[a],e,i);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,c)}),(function(e){n("throw",e,o,c)})):t.resolve(d).then((function(e){s.value=e,o(s)}),(function(e){return n("throw",e,o,c)}))}c(l.arg)}(n,i,a,o)}))}return a=a?a.then(o,o):o()}})}function b(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return L()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var c=x(o,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function z(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=p,n(y,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:h,configurable:!0}),h.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(E.prototype),l(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new E(s(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(y),l(y,c,"Generator"),l(y,i,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=z,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;P(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:z(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}var C=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){var e,n;Object(i.a)(this,r);for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return(n=t.call.apply(t,[this].concat(c))).state={rowData:[],InsiderPermissions:{},paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Role Name",field:"roleName",filter:!0,resizable:!0,width:160,cellRendererFramework:function(e){var t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("div",{className:""},u.a.createElement("span",null,null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.roleName)))}},{headerName:"Role desc",field:"desc",filter:!0,resizable:!0,width:230,cellRendererFramework:function(e){var t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("div",{className:""},u.a.createElement("span",null,null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.desc)))}},(e={headerName:"Actions",field:"sortorder"},Object(a.a)(e,"field","transactions"),Object(a.a)(e,"width",200),Object(a.a)(e,"cellRendererFramework",(function(e){return u.a.createElement("div",{className:"actions cursor-pointer"},n.state.InsiderPermissions&&n.state.InsiderPermissions.Edit&&u.a.createElement(k.b,{render:function(t){var r=t.history;return u.a.createElement("span",{style:{border:"1px solid white",padding:"10px",borderRadius:"30px",backgroundColor:"rgb(212, 111, 16)",marginLeft:"3px"}},u.a.createElement(d.z,{className:"",size:"20px",color:"white",onClick:function(){var t;return r.push({pathname:"/app/freshlist/account/editRole/".concat(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t._id),data:e})}}))}}))})),e)]},n.onGridReady=function(e){n.gridApi=e.api,n.gridColumnApi=e.columnApi,n.setState({currenPageSize:n.gridApi.paginationGetCurrentPage()+1,getPageSize:n.gridApi.paginationGetPageSize(),totalPages:n.gridApi.paginationGetTotalPages()})},n.updateSearchQuery=function(e){n.gridApi.setQuickFilter(e)},n.filterSize=function(e){n.gridApi&&(n.gridApi.paginationSetPageSize(Number(e)),n.setState({currenPageSize:e,getPageSize:e}))},n}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=Object(n.a)(D().mark((function e(){var t,r,n,a,i,o=this;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(O.ob)().then((function(e){console.log(null===e||void 0===e?void 0:e.Role),o.setState({rowData:null===e||void 0===e?void 0:e.Role})})).catch((function(e){console.log(e)})),n=Object(j.a)("Create User"),console.log(n),this.setState({InsiderPermissions:n}),a=JSON.parse(localStorage.getItem("userData")),(i=new FormData).append("user_id",null===a||void 0===a||null===(t=a.Userinfo)||void 0===t?void 0:t.id),i.append("role",null===a||void 0===a||null===(r=a.Userinfo)||void 0===r?void 0:r.role),e.next=10,x.a.post("/getrolelist",i).then((function(e){var t,r=Object.values(null===(t=e.data)||void 0===t?void 0:t.data);o.setState({rowData:r})})).catch((function(e){}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(e){var t=this,r=this.gridApi.getSelectedRows();L()("Warning","Sure You Want to Delete it",{buttons:{cancel:"cancel",catch:{text:"Delete ",value:"delete"}}}).then((function(n){switch(n){case"delete":var a=new FormData;a.append("user_id",e),t.gridApi.updateRowData({remove:r}),x.a.post("/userdelete",a).then((function(e){}))}}))}},{key:"render",value:function(){var e,t,r=this,n=this.state,a=n.rowData,i=n.columnDefs,o=n.defaultColDef;return u.a.createElement(f.a,{className:"app-user-list"},u.a.createElement(h.a,{sm:"12"},u.a.createElement(p.a,null,u.a.createElement(f.a,{className:"mt-2 mx-2 mr-2"},u.a.createElement(h.a,{lg:"6",md:"6",sm:"6",xs:"12"},u.a.createElement("h1",{className:"float-left",style:{fontWeight:"600"}},"Created Role List")),u.a.createElement(h.a,{lg:"2",md:"2",sm:"2",xs:"12"}),this.state.InsiderPermissions&&(null===(e=this.state.InsiderPermissions)||void 0===e?void 0:e.Create)&&u.a.createElement(h.a,{lg:"2",md:"2",sm:"2",xs:"12"},u.a.createElement("div",{className:"d-flex justify-content-end"},u.a.createElement(k.b,{render:function(e){var t=e.history;return u.a.createElement(m.a,{style:{cursor:"pointer",backgroundColor:"#39cccc",color:"white",fontWeight:"600"},className:" float-right mb-1",color:"#39cccc",onClick:function(){return t.push("/app/freshlist/account/addRoleNew")}},u.a.createElement(d.B,{size:15})," Create Role")}}))),this.state.InsiderPermissions&&(null===(t=this.state.InsiderPermissions)||void 0===t?void 0:t.Create)&&u.a.createElement(h.a,{lg:"2",sm:"2",md:"2",ms:"12"},u.a.createElement(k.b,{render:function(e){var t=e.history;return u.a.createElement(m.a,{style:{cursor:"pointer",backgroundColor:"#39cccc",color:"white",fontWeight:"600"},className:" float-right",color:"#39cccc",onClick:function(){return t.push("/app/freshlist/account/CreateHeirarchy")}},u.a.createElement(d.B,{size:15})," Hierarchy")}}))),u.a.createElement(v.a,{style:{marginTop:"-1.5rem"}},null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-1 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(g.a,{className:"p-1 ag-dropdown"},u.a.createElement(y.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(N.a,{className:"ml-50",size:15})),u.a.createElement(w.a,{right:!0},u.a.createElement(E.a,{tag:"div",onClick:function(){return r.filterSize(20)}},"20"),u.a.createElement(E.a,{tag:"div",onClick:function(){return r.filterSize(50)}},"50"),u.a.createElement(E.a,{tag:"div",onClick:function(){return r.filterSize(100)}},"100"),u.a.createElement(E.a,{tag:"div",onClick:function(){return r.filterSize(134)}},"134"))))),u.a.createElement(S.a.Consumer,null,(function(e){return u.a.createElement(P.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:o,columnDefs:i,rowData:a,onGridReady:r.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:r.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===e.state.direction})})))))))}}]),r}(u.a.Component);C.contextType=b.a,t.default=C}}]);
//# sourceMappingURL=305.f220a7ae.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[336],{3252:function(e,t,a){"use strict";a.r(t);var n=a(24),i=a(16),l=a(17),r=a(18),o=a(19),s=a(1),d=a.n(s),c=a(895),u=a(904),m=a(905),g=a(912),p=a(943),f=a(907),v=a(244),h=a(916),S=a(911),E=a(922),w=a(900),b=a(899),N=a(908),D=a(135),y=a.n(D),z=(a(68),a(132)),A=a(936),P=a(323),k=(a(27),a(929),a(232),a(6)),C=a(72),R=a.n(C),x=[],B=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={rowData:[],userDataList:[],mainRole:"",userid:"",BudgetValue:"",paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Name",field:"full_name",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement("span",null,e.data.full_name))}},{headerName:"Assigned Budget",field:"budget",filter:!0,width:220,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex mt-1 align-items-center cursor-pointer"},d.a.createElement(c.a,{color:"success"},e.data.budget))}},{headerName:"Remaining Budget",field:"remaining_budget",filter:!0,width:220,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex mt-1 align-items-center cursor-pointer"},d.a.createElement(c.a,{color:"warning"},e.data.remaining_budget))}},{headerName:"Assigned Date",field:"created_date",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement("span",null,e.data.created_date))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e.handleAssignBudget=function(t){var a;t.preventDefault();var i=JSON.parse(localStorage.getItem("userData")),l=new FormData,r=Object(n.a)(new Set(x));l.append("user_id",null===i||void 0===i||null===(a=i.Userinfo)||void 0===a?void 0:a.id),l.append("budget",e.state.BudgetValue),l.append("assign_user_id",JSON.stringify(r)),e.state.BudgetValue>0?k.a.post("/addbudget",l).then((function(t){R()("Budget Assigned Successfully"),console.log(t.data),e.setState({BudgetValue:""}),e.setState({userid:""}),window.location.reload(),e.componentDidMount()})).catch((function(e){console.log(e)})):R()("Something is Missing. Enter details before Submit")},e.onRemove=function(e,t){console.log(t)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e,t,a,n,i,l=this,r=JSON.parse(localStorage.getItem("userData"));this.setState({mainRole:null===r||void 0===r||null===(e=r.Userinfo)||void 0===e?void 0:e.role});var o=null===r||void 0===r||null===(t=r.role)||void 0===t?void 0:t.find((function(e){return"Budget List"===(null===e||void 0===e?void 0:e.pageName)}));console.log(o),this.setState({Viewpermisson:null===o||void 0===o?void 0:o.permission.includes("View")}),this.setState({Createpermisson:null===o||void 0===o?void 0:o.permission.includes("Create")}),this.setState({Editpermisson:null===o||void 0===o?void 0:o.permission.includes("Edit")}),this.setState({Deletepermisson:null===o||void 0===o?void 0:o.permission.includes("Delete")});var s=new FormData;s.append("role",null===r||void 0===r||null===(a=r.Userinfo)||void 0===a?void 0:a.role),s.append("user_id",null===r||void 0===r||null===(n=r.Userinfo)||void 0===n?void 0:n.id),k.a.post("/getAllUsersBuget",s).then((function(e){var t;console.log(e.data.data);var a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data;l.setState({rowData:a})})).catch((function(e){console.log(e)}));var d=new FormData;d.append("user_id",null===r||void 0===r||null===(i=r.Userinfo)||void 0===i?void 0:i.id),d.append("role","User"),k.a.post("/getUserlistforBudget",d).then((function(e){var t,a,n=null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.users;l.setState({userDataList:n})})).catch((function(e){}))}},{key:"onSelect",value:function(e,t){if(console.log(e),e.length)for(var a=0;a<e.length;a++)x.push(e[a].id)}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,i=t.defaultColDef;return d.a.createElement(u.a,{className:"app-user-list"},d.a.createElement(m.a,{sm:"12"},d.a.createElement(g.a,null,d.a.createElement(u.a,{className:"m-2"},d.a.createElement(m.a,{lg:"4",md:"4",sm:"4"},d.a.createElement("h1",{sm:"4",className:""},"Budget List")),"Super Admin"===this.state.mainRole&&d.a.createElement(d.a.Fragment,null,d.a.createElement(m.a,null,d.a.createElement("label",{className:"selectClient"},"Add Amount"),d.a.createElement("input",{onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},onChange:function(t){e.setState({BudgetValue:t.target.value})},className:"form-control",type:"number"})),d.a.createElement(m.a,null,d.a.createElement(p.a,null,d.a.createElement(f.a,null,"Select A User"),d.a.createElement(y.a,{required:!0,options:this.state.userDataList,selectedValues:this.state.selectedValue,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"username"}))),d.a.createElement(m.a,null,d.a.createElement("div",{className:"d-flex justify-content-center"},d.a.createElement(v.a,{title:"Select user and Amount for Submit",color:"primary",className:"custom-button mt-2",onClick:function(t){e.handleAssignBudget(t)}},"Assign Now"))))),d.a.createElement(h.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(S.a,{className:"p-1 ag-dropdown"},d.a.createElement(E.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(P.a,{className:"ml-50",size:15})),d.a.createElement(w.a,{right:!0},d.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(N.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(v.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(z.a.Consumer,null,(function(t){return d.a.createElement(A.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(d.a.Component);t.default=B},943:function(e,t,a){"use strict";var n=a(10),i=a(12),l=a(1),r=a.n(l),o=a(2),s=a.n(o),d=a(8),c=a.n(d),u=a(7),m=["className","cssModule","row","disabled","check","inline","tag"],g={children:s.a.node,row:s.a.bool,check:s.a.bool,inline:s.a.bool,disabled:s.a.bool,tag:u.tagPropType,className:s.a.string,cssModule:s.a.object},p=function(e){var t=e.className,a=e.cssModule,l=e.row,o=e.disabled,s=e.check,d=e.inline,g=e.tag,p=Object(i.a)(e,m),f=Object(u.mapToCssModules)(c()(t,!!l&&"row",s?"form-check":"form-group",!(!s||!d)&&"form-check-inline",!(!s||!o)&&"disabled"),a);return"fieldset"===g&&(p.disabled=o),r.a.createElement(g,Object(n.a)({},p,{className:f}))};p.propTypes=g,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=336.771d516b.chunk.js.map
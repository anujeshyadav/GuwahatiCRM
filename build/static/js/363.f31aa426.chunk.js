(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[363],{3110:function(e,t,a){"use strict";a.r(t);var n=a(55),r=a(16),l=a(17),i=a(18),o=a(19),s=a(1),d=a.n(s),c=a(884),u=a(893),m=a(894),p=a(901),v=a(237),f=a(905),g=a(900),h=a(911),S=a(889),E=a(888),w=a(897),D=(a(65),a(124)),N=a(923),b=a(362),C=a(315),y=(a(26),a(921),a(224),a(79)),z=a(6),P=a(90),_=a.n(P),k=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e,l;Object(r.a)(this,a);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(l=t.call.apply(t,[this].concat(o))).state={rowData:[],Userlist:[],paginationPageSize:20,currenPageSize:"",SelectedBranch:"",CurrentDate:"",Show:!1,StartDate:"",EndDate:"",getPageSize:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:80,filter:!0},{headerName:"PoNo",field:"po_no",filter:!0,width:120,cellRendererFramework:function(e){var t;return d.a.createElement("div",null,d.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.po_no))}},{headerName:"OrderStatus",field:"order_status",filter:!0,width:160,cellRendererFramework:function(e){var t;return d.a.createElement("div",null,d.a.createElement(c.a,{color:"success"},null===(t=e.data)||void 0===t?void 0:t.order_status))}},{headerName:"Branch Code",field:"display_code",filter:!0,width:160,cellRendererFramework:function(e){var t;return d.a.createElement("div",null,d.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.display_code))}},{headerName:"Created by",field:"created_by_full_name",filter:!0,width:180,cellRendererFramework:function(e){var t;return d.a.createElement("div",null,d.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.created_by_full_name))}},{headerName:"suppliername",field:"supplier_name",filter:!0,width:160,cellRendererFramework:function(e){var t;return d.a.createElement("div",null,d.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.supplier_name))}},{headerName:"total",field:"total",filter:!0,width:120,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement(c.a,{color:"success"},e.data.total))}},{headerName:"createddate",field:"created_date",filter:!0,width:200,cellRendererFramework:function(e){var t;return d.a.createElement("div",null,d.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.created_date))}},(e={headerName:"Actions",field:"sortorder"},Object(n.a)(e,"field","transactions"),Object(n.a)(e,"width",150),Object(n.a)(e,"cellRendererFramework",(function(e){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(y.b,{render:function(t){var a=t.history;return d.a.createElement(b.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return a.push({pathname:"/app/freshlist/cart/ViewoneFinalreport",state:e.data})}})}}))})),e)]},l.onGridReady=function(e){l.gridApi=e.api,l.gridColumnApi=e.columnApi,l.setState({currenPageSize:l.gridApi.paginationGetCurrentPage()+1,getPageSize:l.gridApi.paginationGetPageSize(),totalPages:l.gridApi.paginationGetTotalPages()})},l.updateSearchQuery=function(e){l.gridApi.setQuickFilter(e)},l.filterSize=function(e){l.gridApi&&(l.gridApi.paginationSetPageSize(Number(e)),l.setState({currenPageSize:e,getPageSize:e}))},l.handleBranchWiseReport=function(e){var t,a;e.preventDefault();var n=JSON.parse(localStorage.getItem("userData")),r=new FormData;r.append("user_id",null===n||void 0===n||null===(t=n.Userinfo)||void 0===t?void 0:t.id),r.append("role",null===n||void 0===n||null===(a=n.Userinfo)||void 0===a?void 0:a.role),r.append("client_id",l.state.SelectedBranch),r.append("from_date ",l.state.StartDate),r.append("to_date",l.state.EndDate),z.a.post("/reportApi",r).then((function(e){var t,a,n,r,i=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data;(console.log(null===(a=e.data)||void 0===a?void 0:a.message),"Record Not Found."===(null===(n=e.data)||void 0===n?void 0:n.message))?(_()("".concat(null===(r=e.data)||void 0===r?void 0:r.message)),l.setState({rowData:""})):(l.setState({Show:!0}),l.setState({rowData:i}))})).catch((function(e){var t,a;console.log(null===(t=e.response)||void 0===t?void 0:t.data.message),_()("".concat(null===(a=e.response)||void 0===a?void 0:a.data.message))}))},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e,t,a,n=this,r=(new Date).toISOString();this.setState({CurrentDate:r.split("T")[0]});var l=JSON.parse(localStorage.getItem("userData"));console.log(l.role);var i=null===l||void 0===l||null===(e=l.role)||void 0===e?void 0:e.find((function(e){return"Branch Wise"===(null===e||void 0===e?void 0:e.pageName)}));console.log(i),this.setState({Viewpermisson:null===i||void 0===i?void 0:i.permission.includes("View")}),this.setState({Createpermisson:null===i||void 0===i?void 0:i.permission.includes("Create")}),this.setState({Editpermisson:null===i||void 0===i?void 0:i.permission.includes("Edit")}),this.setState({Deletepermisson:null===i||void 0===i?void 0:i.permission.includes("Delete")});var o=new FormData;o.append("user_id",null===l||void 0===l||null===(t=l.Userinfo)||void 0===t?void 0:t.id),o.append("role",null===l||void 0===l||null===(a=l.Userinfo)||void 0===a?void 0:a.role),z.a.post("/getReportUserlist",o).then((function(e){var t,a,r,l;console.log(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.users);var i=null===e||void 0===e||null===(r=e.data)||void 0===r||null===(l=r.data)||void 0===l?void 0:l.users.filter((function(e){return"User"===e.role}));n.setState({Userlist:i})})).catch((function(e){}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.Show,n=t.rowData,r=t.columnDefs,l=t.defaultColDef,i=t.Userlist;return d.a.createElement(u.a,{className:"app-user-list"},d.a.createElement(m.a,{sm:"12"},d.a.createElement(p.a,null,d.a.createElement(u.a,{className:"m-2"},d.a.createElement(m.a,{sm:"4",lg:"4",md:"4"},d.a.createElement("h1",{className:"float-left"},"Branch Wise Report")),d.a.createElement(m.a,{lg:"2",sm:"2",md:"2"},d.a.createElement("label",{for:"start"},"Start Date:"),d.a.createElement("input",{onChange:function(t){e.setState({StartDate:t.target.value})},className:"form-control",type:"date",id:"start",name:"trip-start",pattern:"\\d{4}-\\d{2}-\\d{2}",min:"2019-01-01",max:this.state.CurrentDate&&this.state.CurrentDate})),d.a.createElement(m.a,{lg:"2",sm:"2",md:"2"},d.a.createElement("label",{for:"start"},"End Date:"),d.a.createElement("input",{onChange:function(t){e.setState({EndDate:t.target.value})},className:"form-control",type:"date",id:"start",name:"trip-start",pattern:"\\d{4}-\\d{2}-\\d{2}",min:"2019-01-01",max:this.state.CurrentDate&&this.state.CurrentDate})),d.a.createElement(m.a,{lg:"2",sm:"2",md:"2"},d.a.createElement("label",{for:"cars"},"Choose a Branch:"),d.a.createElement("select",{onChange:function(t){return e.setState({SelectedBranch:t.target.value})},className:"form-control",name:"cars",id:"cars"},d.a.createElement("option",{value:"not Selected"},"--Select User--"),null===i||void 0===i?void 0:i.map((function(e,t){return d.a.createElement("option",{key:t,value:e.id},e.full_name)})))),d.a.createElement(m.a,{lg:"2",className:"d-flex justify-content-end"},d.a.createElement(v.a,{className:"mt-2",onClick:function(t){return e.handleBranchWiseReport(t)},color:"primary"},"Submit"))),a?d.a.createElement(d.a.Fragment,null,d.a.createElement(f.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(g.a,{className:"p-1 ag-dropdown"},d.a.createElement(h.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(C.a,{className:"ml-50",size:15})),d.a.createElement(S.a,{right:!0},d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(w.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(v.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(D.a.Consumer,null,(function(t){return d.a.createElement(N.AgGridReact,{rowSelection:"multiple",defaultColDef:l,columnDefs:r,rowData:n,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})}))))):null)))}}]),a}(d.a.Component);t.default=k}}]);
//# sourceMappingURL=363.f31aa426.chunk.js.map
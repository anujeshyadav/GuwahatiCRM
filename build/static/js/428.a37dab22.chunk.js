(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[428],{3153:function(e,t,a){"use strict";a.r(t);var r=a(60),n=a(16),i=a(17),l=a(18),c=a(19),s=a(1),o=a.n(s),u=a(904),m=a(905),d=a(912),g=a(244),p=a(916),f=a(911),h=a(922),E=a(900),b=a(899),S=a(908),v=(a(69),a(133)),w=a(936),z=a(367),P=a(502),N=a(323),A=a(27),C=(a(929),a(232),a(85)),y=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e,i;Object(n.a)(this,a);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return(i=t.call.apply(t,[this].concat(c))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Attribute Name",field:"customerId",filter:!0,width:200,cellRendererFramework:function(e){return o.a.createElement("div",null,o.a.createElement("span",null,e.data.customerId))}},(e={headerName:"Actions",field:"sortorder"},Object(r.a)(e,"field","transactions"),Object(r.a)(e,"width",150),Object(r.a)(e,"cellRendererFramework",(function(e){return o.a.createElement("div",{className:"actions cursor-pointer"},o.a.createElement(z.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return A.a.push("/app/customer/editCustomer")}}),o.a.createElement(P.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t=i.gridApi.getSelectedRows();i.runthisfunction(e.data._id),i.gridApi.updateRowData({remove:t})}}))})),e)]},i.onGridReady=function(e){i.gridApi=e.api,i.gridColumnApi=e.columnApi,i.setState({currenPageSize:i.gridApi.paginationGetCurrentPage()+1,getPageSize:i.gridApi.paginationGetPageSize(),totalPages:i.gridApi.paginationGetTotalPages()})},i.updateSearchQuery=function(e){i.gridApi.setQuickFilter(e)},i.filterSize=function(e){i.gridApi&&(i.gridApi.paginationSetPageSize(Number(e)),i.setState({currenPageSize:e,getPageSize:e}))},i}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,r=t.columnDefs,n=t.defaultColDef;return console.log(a),o.a.createElement(u.a,{className:"app-user-list"},o.a.createElement(m.a,{sm:"12"}),o.a.createElement(m.a,{sm:"12"},o.a.createElement(d.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(m.a,null,o.a.createElement("h1",{sm:"6",className:"float-left"},"Product Attribute List")),o.a.createElement(m.a,null,o.a.createElement(g.a,{style:{marginRight:"-22rem"},className:" btn btn-danger float-right",onClick:function(){return A.a.push("/app/freshlist/attribute/ProductAttributeList")}},"Back")),o.a.createElement(m.a,null,o.a.createElement(C.b,{render:function(e){var t=e.history;return o.a.createElement(g.a,{className:"btn btn-primary float-right",onClick:function(){return t.push("/app/freshlist/attribute/addProductAttribute")}},"Add New")}}))),o.a.createElement(p.a,null,null===this.state.rowData?null:o.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},o.a.createElement("div",{className:"mb-1"},o.a.createElement(f.a,{className:"p-1 ag-dropdown"},o.a.createElement(h.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,o.a.createElement(N.a,{className:"ml-50",size:15})),o.a.createElement(E.a,{right:!0},o.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),o.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),o.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),o.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},o.a.createElement("div",{className:"table-input mr-1"},o.a.createElement(S.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),o.a.createElement("div",{className:"export-btn"},o.a.createElement(g.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),o.a.createElement(v.a.Consumer,null,(function(t){return o.a.createElement(w.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(o.a.Component);t.default=y}}]);
//# sourceMappingURL=428.a37dab22.chunk.js.map
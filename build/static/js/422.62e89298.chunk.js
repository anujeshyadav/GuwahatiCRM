(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[422],{2909:function(e,a,t){"use strict";t.r(a);var r=t(16),i=t(17),n=t(18),l=t(19),c=t(1),s=t.n(c),d=t(901),o=t(902),u=t(909),m=t(243),g=t(913),p=t(908),f=t(919),h=t(897),v=t(896),E=t(905),w=(t(6),t(130)),S=t(931),b=t(365),N=t(500),z=t(321),P=t(26),A=(t(926),t(83)),y=(t(231),function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Image",field:"product_img",filter:!1,width:120,cellRendererFramework:function(e){var a;return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("img",{className:"rounded-circle  mr-4",src:null===(a=e.data)||void 0===a?void 0:a.product_img,alt:" brand",height:"40",width:"40"}))}},{headerName:"Title",field:"product",filter:!0,width:200,cellRendererFramework:function(e){var a;return s.a.createElement("div",{className:""},s.a.createElement("span",null,null===(a=e.data.product)||void 0===a?void 0:a.item_name))}},{headerName:"Duration",field:"product_price",filter:!0,width:120,cellRendererFramework:function(e){return s.a.createElement("div",{className:""},s.a.createElement("span",null,e.data.product_price))}},{headerName:"Active Product",field:"product_qty",filter:!0,width:120,cellRendererFramework:function(e){return s.a.createElement("div",{className:" mr-4"},s.a.createElement("span",null,e.data.product_qty))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Active"===e.value?s.a.createElement("div",{className:"badge badge-pill badge-success "},e.data.status):"Inactive"===e.value?s.a.createElement("div",{className:"badge badge-pill badge-danger"},e.data.status):null}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return s.a.createElement("div",{className:"actions cursor-pointer"},s.a.createElement(b.a,{className:"mr-50",size:15,onClick:function(){return P.a.push("/app/freshlist/flashSale/editFlashSale/".concat(a.data._id))}}),s.a.createElement(N.a,{size:15,onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,i=a.defaultColDef;return s.a.createElement(d.a,{className:"app-user-list"},s.a.createElement(o.a,{sm:"12"}),s.a.createElement(o.a,{sm:"12"},s.a.createElement(u.a,null,s.a.createElement(d.a,{className:"m-2"},s.a.createElement(o.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"DealOfDay")),s.a.createElement(o.a,null,s.a.createElement(A.b,{render:function(e){var a=e.history;return s.a.createElement(m.a,{className:"btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/flashSale/addFlashSale")}},"Add Product")}}))),s.a.createElement(g.a,null,null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(p.a,{className:"p-1 ag-dropdown"},s.a.createElement(f.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(z.a,{className:"ml-50",size:15})),s.a.createElement(h.a,{right:!0},s.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(E.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(m.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(w.a.Consumer,null,(function(a){return s.a.createElement(S.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(s.a.Component));a.default=y}}]);
//# sourceMappingURL=422.62e89298.chunk.js.map
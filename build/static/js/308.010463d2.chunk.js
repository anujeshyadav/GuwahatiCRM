(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[308],{3243:function(e,t,a){"use strict";a.r(t);var n=a(55),r=a(16),l=a(17),i=a(18),c=a(19),s=a(1),o=a.n(s),u=a(891),d=a(892),m=a(899),g=a(903),p=a(898),f=a(909),h=a(887),E=a(886),v=(a(64),a(123)),S=a(922),b=a(490),w=a(311),z=(a(25),a(920),a(918),a(893)),y=a(894),N=a(895),P=a(173),D=a(9),A=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(r.a)(this,a),(l=t.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",l.state.name),t.append("sortorder",l.state.sortorder),t.append("desc",l.state.desc),t.append("status",l.state.status),t.append("product_img",l.state.selectedFile,l.state.selectedName),D.a.post(" /addproductcategory",t).then((function(e){console.log(e),l.props.history.push("/app/category/category")})).catch((function(e){console.log(e)}))},l.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",product_img:"",status:""},l}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Add New Deal"),o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement(u.a,{className:"m-1"},o.a.createElement(d.a,null,o.a.createElement("h2",null,"Feature Deal"))),o.a.createElement(g.a,null,o.a.createElement(z.a,{onSubmit:this.submitHandler},o.a.createElement(u.a,{className:"mb-1"},o.a.createElement(d.a,{lg:"12"},o.a.createElement(y.a,null,"Add New Deal"),o.a.createElement(N.a,{required:!0,type:"select",name:"bannertype",placeholder:"Enter Identity Type",value:this.state.bannertype,onChange:this.changeHandler},o.a.createElement("option",{value:"select"},"--Select--"),o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2 "),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4 ")))),o.a.createElement(u.a,{style:{float:"right"}},o.a.createElement(P.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 "},"Add")))))))}}]),a}(s.Component),C=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e,l;Object(r.a)(this,a);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return(l=t.call.apply(t,[this].concat(c))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Name",field:"customerId",filter:!0,width:200,cellRendererFramework:function(e){return o.a.createElement("div",null,o.a.createElement("span",null,e.data.customerId))}},{headerName:"Prize",field:"mobile",filter:!0,width:200,cellRendererFramework:function(e){return o.a.createElement("div",null,o.a.createElement("span",null,e.data.mobile))}},(e={headerName:"Actions",field:"sortorder"},Object(n.a)(e,"field","transactions"),Object(n.a)(e,"width",100),Object(n.a)(e,"cellRendererFramework",(function(e){return o.a.createElement("div",{className:"actions cursor-pointer"},o.a.createElement(b.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t=l.gridApi.getSelectedRows();l.runthisfunction(e.data._id),l.gridApi.updateRowData({remove:t})}}))})),e)]},l.onGridReady=function(e){l.gridApi=e.api,l.gridColumnApi=e.columnApi,l.setState({currenPageSize:l.gridApi.paginationGetCurrentPage()+1,getPageSize:l.gridApi.paginationGetPageSize(),totalPages:l.gridApi.paginationGetTotalPages()})},l.updateSearchQuery=function(e){l.gridApi.setQuickFilter(e)},l.filterSize=function(e){l.gridApi&&(l.gridApi.paginationSetPageSize(Number(e)),l.setState({currenPageSize:e,getPageSize:e}))},l}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,r=t.defaultColDef;return console.log(a),o.a.createElement(u.a,{className:"app-user-list"},o.a.createElement(d.a,{sm:"12"},o.a.createElement(d.a,null,o.a.createElement("h1",{sm:"12"},o.a.createElement(A,null)))),o.a.createElement(d.a,{sm:"12"},o.a.createElement(m.a,null,o.a.createElement(g.a,null,o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement("h3",{className:"float-left"},"Product Table"))),null===this.state.rowData?null:o.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},o.a.createElement("div",{className:"mb-1"},o.a.createElement(p.a,{className:"p-1 ag-dropdown"},o.a.createElement(f.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,o.a.createElement(w.a,{className:"ml-50",size:15})),o.a.createElement(h.a,{right:!0},o.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),o.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),o.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),o.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134"))))),o.a.createElement(v.a.Consumer,null,(function(t){return o.a.createElement(S.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(o.a.Component);t.default=C},918:function(e,t,a){}}]);
//# sourceMappingURL=308.010463d2.chunk.js.map
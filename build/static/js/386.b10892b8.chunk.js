(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[386],{1721:function(e,a,t){"use strict";t.r(a),t.d(a,"ReviewTable",(function(){return y}));var n=t(55),l=t(16),r=t(17),c=t(18),s=t(19),o=t(1),m=t.n(o),u=t(893),i=t(901),d=t(894),p=t(897),h=t(905),E=t(895),g=t(896),v=t(883),f=t(238),b=t(6),y=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",r.state.name),a.append("sortorder",r.state.sortorder),a.append("desc",r.state.desc),a.append("status",r.state.status),a.append("product_img",r.state.selectedFile,r.state.selectedName),b.a.post(" /addproductcategory",a).then((function(e){console.log(e),r.props.history.push("/app/category/category")})).catch((function(e){console.log(e)}))},r.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",product_img:"",status:""},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement(u.a,null,m.a.createElement("h1",{className:"float-left"},"Customer Review List")),m.a.createElement("div",null,m.a.createElement(i.a,null,m.a.createElement(u.a,{className:"m-1"},m.a.createElement(d.a,null,m.a.createElement("h3",{"col-sm-6":!0,className:"float-left"},"Review Table")),m.a.createElement("div",{className:"table-input mr-1"},m.a.createElement(p.a,{placeholder:"search by Product...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value}))),m.a.createElement(h.a,null,m.a.createElement(E.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(u.a,{className:"mb-2"},m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(g.a,null,"Choose Product"),m.a.createElement(v.a,{type:"select",name:"type",value:this.state.type,onChange:this.changeHandler},m.a.createElement("option",null,"---Select Product---"),m.a.createElement("option",{value:"1"},"1"),m.a.createElement("option",{value:"2"},"2"),m.a.createElement("option",{value:"3"},"3"))),m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(g.a,null,"Choose Customer"),m.a.createElement(v.a,{type:"select",name:"desc",value:this.state.desc,onChange:this.changeHandler},m.a.createElement("option",null,"---Select Product---"),m.a.createElement("option",{value:"1"},"1"),m.a.createElement("option",{value:"2"},"2"),m.a.createElement("option",{value:"3"},"3"))),m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(g.a,null,"From"),m.a.createElement(p.a,{required:!0,type:"date",name:"date",placeholder:"Enter Date",value:this.state.date,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(g.a,null,"To"),m.a.createElement(p.a,{required:!0,type:"date",name:"date",placeholder:"Enter Date",value:this.state.date,onChange:this.changeHandler}))),m.a.createElement("div",{style:{float:"right"},className:"table-input mr-1"},m.a.createElement(f.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))))))}}]),t}(o.Component);a.default=y}}]);
//# sourceMappingURL=386.b10892b8.chunk.js.map
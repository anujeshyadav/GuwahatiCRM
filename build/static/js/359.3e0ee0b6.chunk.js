(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[359],{3057:function(e,t,a){"use strict";a.r(t),a.d(t,"AddProductAttribute",(function(){return N}));var n=a(55),l=a(16),r=a(17),s=a(18),c=a(19),u=a(1),d=a.n(u),m=a(901),i=a(893),o=a(894),p=a(238),b=a(905),h=a(895),f=a(896),g=a(897),E=a(26),v=a(6),N=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",r.state.name),t.append("sortorder",r.state.sortorder),t.append("desc",r.state.desc),t.append("status",r.state.status),null!==r.state.selectedFile&&t.append("brand_img",r.state.selectedFile,r.state.selectedName),v.a.post("/addbrand",t).then((function(e){console.log(e),r.props.history.push("/app/freshlist/attribute/productAttributeList")})).catch((function(e){console.log(e)}))},r.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",brand_img:"",status:""},r}return Object(r.a)(a,[{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement(m.a,null,d.a.createElement(i.a,{className:"m-2"},d.a.createElement(o.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Attribute")),d.a.createElement(o.a,null,d.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return E.a.push("/app/freshlist/brand/brandList")}},"Back"))),d.a.createElement(b.a,null,d.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},d.a.createElement(i.a,{className:"mb-2"},d.a.createElement(o.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(f.a,null,"Name"),d.a.createElement(g.a,{type:"text",placeholder:"Attribute Name",name:"name",value:this.state.name,onChange:this.changeHandler}))),d.a.createElement(i.a,null,d.a.createElement(p.a.Ripple,{color:"danger",type:"submit",className:"mr-1 mb-1"},"Add Attribute"))))))}}]),a}(u.Component);t.default=N}}]);
//# sourceMappingURL=359.3e0ee0b6.chunk.js.map
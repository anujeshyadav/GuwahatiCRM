(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[403],{3050:function(e,t,a){"use strict";a.r(t),a.d(t,"EditProductAttribute",(function(){return N}));var n=a(55),l=a(16),r=a(17),s=a(18),c=a(19),u=a(1),m=a.n(u),i=a(898),o=a(890),d=a(891),p=a(173),b=a(902),h=a(892),f=a(893),g=a(894),E=a(25),v=a(9),N=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",r.state.name),t.append("sortorder",r.state.sortorder),t.append("desc",r.state.desc),t.append("status",r.state.status),null!==r.state.selectedFile&&t.append("brand_img",r.state.selectedFile,r.state.selectedName),v.a.post("/addbrand",t).then((function(e){console.log(e),r.props.history.push("/app/freshlist/attribute/productAttributeList")})).catch((function(e){console.log(e)}))},r.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",brand_img:"",status:""},r}return Object(r.a)(a,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(i.a,null,m.a.createElement(o.a,{className:"m-2"},m.a.createElement(d.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Update Attribute")),m.a.createElement(d.a,null,m.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return E.a.push("/app/freshlist/attribute/productAttributeList")}},"Back"))),m.a.createElement(b.a,null,m.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(o.a,{className:"mb-2"},m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(f.a,null,"Name"),m.a.createElement(g.a,{type:"text",placeholder:"Customer Name",name:"name",value:this.state.name,onChange:this.changeHandler}))),m.a.createElement(o.a,null,m.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update Brand"))))))}}]),a}(u.Component);t.default=N}}]);
//# sourceMappingURL=403.55a8d716.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[401],{3024:function(e,a,t){"use strict";t.r(a),t.d(a,"EditProductType",(function(){return S}));var n=t(55),l=t(16),s=t(17),r=t(18),c=t(19),i=t(1),m=t.n(i),d=t(898),o=t(890),u=t(891),p=t(173),h=t(902),g=t(892),v=t(893),b=t(894),E=(t(25),t(9)),f=t(78),y=t(161),N=t.n(y),S=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.handleChange=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){var a;e.preventDefault();var t=JSON.parse(localStorage.getItem("userData")),n=new FormData;n.append("user_id",null===t||void 0===t||null===(a=t.Userinfo)||void 0===a?void 0:a.id),n.append("brand_name",s.state.brandname),n.append("description",s.state.desc),n.append("status",s.state.status),E.a.post("/addbrand",n).then((function(e){var a,t;console.log(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.success),(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.success)&&(N()("Sucess","Brand Added Successfully"),s.setState({brandname:""}),s.setState({desc:""}),s.setState({status:""}),s.setState({selectedFile:""}))})).catch((function(e){console.log(e)}))},s.state={brandname:"",desc:"",brand_img:"",status:"",selectedFile:null,selectedName:""},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e,a=(null===(e=this.props)||void 0===e?void 0:e.match.params).id;console.log(a)}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(d.a,null,m.a.createElement(o.a,{className:"m-2"},m.a.createElement(u.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Product Type")),m.a.createElement(u.a,null,m.a.createElement(f.b,{render:function(e){var a=e.history;return m.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/Producttype/BodyStyleList")}},"Back")}}))),m.a.createElement(h.a,null,m.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(o.a,{className:"mb-2"},m.a.createElement(u.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(v.a,null,"Title"),m.a.createElement(b.a,{type:"text",placeholder:"Branch Name",name:"brandname",value:this.state.brandname,onChange:this.changeHandler})),m.a.createElement(u.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(v.a,null,"Description"),m.a.createElement(b.a,{type:"textarea",placeholder:"Description",name:"desc",value:this.state.desc,onChange:this.changeHandler})),m.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},m.a.createElement(v.a,{className:"mb-1"},"Status"),m.a.createElement("div",{className:"form-label-group",onChange:this.handleChange},m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),m.a.createElement("span",{style:{marginRight:"20px"}},"Active"),m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),m.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),m.a.createElement(o.a,null,m.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 mx-1"},"Add"))))))}}]),t}(i.Component);a.default=S}}]);
//# sourceMappingURL=401.60cf87c4.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[375],{3051:function(e,a,t){"use strict";t.r(a),t.d(a,"AddEngineType",(function(){return S}));var n=t(59),l=t(16),s=t(17),r=t(18),c=t(19),m=t(1),i=t.n(m),d=t(909),u=t(901),o=t(902),p=t(243),g=t(913),h=t(903),v=t(904),b=t(905),E=(t(26),t(6)),f=t(83),y=t(95),N=t.n(y),S=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.handleChange=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){var a;e.preventDefault();var t=JSON.parse(localStorage.getItem("userData")),n=new FormData;n.append("user_id",null===t||void 0===t||null===(a=t.Userinfo)||void 0===a?void 0:a.id),n.append("brand_name",s.state.brandname),n.append("description",s.state.desc),n.append("status",s.state.status),E.a.post("/addbrand",n).then((function(e){var a,t;console.log(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.success),(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.success)&&(N()("Sucess","Brand Added Successfully"),s.setState({brandname:""}),s.setState({desc:""}),s.setState({status:""}),s.setState({selectedFile:""}))})).catch((function(e){console.log(e)}))},s.state={brandname:"",desc:"",brand_img:"",status:"",selectedFile:null,selectedName:""},s}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(o.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Engine")),i.a.createElement(o.a,null,i.a.createElement(f.b,{render:function(e){var a=e.history;return i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/Producttype/EngineType")}},"Back")}}))),i.a.createElement(g.a,null,i.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,{className:"mb-2"},i.a.createElement(o.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(v.a,null,"Title"),i.a.createElement(b.a,{type:"text",placeholder:"Branch Name",name:"brandname",value:this.state.brandname,onChange:this.changeHandler})),i.a.createElement(o.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(v.a,null,"Description"),i.a.createElement(b.a,{type:"textarea",placeholder:"Description",name:"desc",value:this.state.desc,onChange:this.changeHandler})),i.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},i.a.createElement(v.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:this.handleChange},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),i.a.createElement(u.a,null,i.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 mx-1"},"Add"))))))}}]),t}(m.Component);a.default=S}}]);
//# sourceMappingURL=375.8d8b8761.chunk.js.map
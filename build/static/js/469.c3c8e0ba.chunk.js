(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[469],{3223:function(e,t,a){"use strict";a.r(t),a.d(t,"AddProduct",(function(){return S}));var n=a(60),l=a(16),r=a(17),s=a(18),i=a(19),c=a(1),u=a.n(c),o=a(912),d=a(904),m=a(905),p=a(244),v=a(916),h=a(906),g=a(907),y=a(908),f=(a(27),a(6)),E=a(85),b=a(72),N=a.n(b),S=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){var t;e.preventDefault();var a=JSON.parse(localStorage.getItem("userData")),n=new FormData;n.append("user_id",null===a||void 0===a?void 0:a.Userinfo.id),n.append("product_id",r.state.productid),n.append("qty",r.state.quantity),n.append("category_id",null===(t=r.props.location.state)||void 0===t?void 0:t.category_id),n.append("client_id",r.state.User),f.a.post("/assign_to_client",n).then((function(e){N()("Success","Sucessfully Assigned to client"),console.log(e),r.setState({User:""}),r.setState({productid:""}),r.setState({quantity:""})})).catch((function(e){console.log(e.response)}))},r.state={productid:"",userid:"",User:"",quantity:"",productName:[],AssignRole:"",rowData:[],category_name:"",type:"",feature:"",status:"",selectedFile1:null,selectedName1:"",selectedFile2:null,selectedName2:"",selectedFile3:null,selectedName3:"",selectedFile4:null,selectedName4:""},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;this.setState({productid:t}),f.a.get("/getuserlist").then((function(t){var a,n,l,r;console.log(null===t||void 0===t||null===(a=t.data)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.users);var s=null===t||void 0===t||null===(l=t.data)||void 0===l||null===(r=l.data)||void 0===r?void 0:r.users;e.setState({rowData:s})}))}},{key:"render",value:function(){var e;return u.a.createElement("div",null,u.a.createElement(o.a,null,u.a.createElement(d.a,{className:"m-2"},u.a.createElement(m.a,null,u.a.createElement("h2",null,"Assign To Client")),u.a.createElement(m.a,null,u.a.createElement(E.b,{render:function(e){var t=e.history;return u.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/house/assigntoclient")}},"Back")}}))),u.a.createElement(v.a,null,u.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(d.a,{className:"mb-2"},u.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1 "},u.a.createElement(g.a,null,"Client List"),u.a.createElement(y.a,{required:!0,type:"select",name:"User",placeholder:"Enter Iden Type",value:this.state.User,onChange:this.changeHandler},u.a.createElement("option",{value:"12ROW"},"--Selecte--"),this.state.rowData&&(null===(e=this.state.rowData)||void 0===e?void 0:e.map((function(e,t){return u.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.full_name)}))))),u.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1 "},u.a.createElement(g.a,null,"Quantity"),u.a.createElement(y.a,{required:!0,type:"number",name:"quantity",placeholder:"Enter Quantity...",value:this.state.quantity,onChange:this.changeHandler}))),u.a.createElement(d.a,null,u.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mx-1 mb-1"},"Assign To Client"))))))}}]),a}(c.Component);t.default=S}}]);
//# sourceMappingURL=469.c3c8e0ba.chunk.js.map
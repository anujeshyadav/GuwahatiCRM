(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[322],{2969:function(e,a,t){"use strict";t.r(a),t.d(a,"AddCategory",(function(){return H}));var l=t(60),n=t(17),s=t(18),c=t(19),r=t(20),i=t(1),o=t.n(i),m=t(910),d=t(902),u=t(903),g=t(244),p=t(914),f=t(904),h=t(937),b=t(905),y=t(906),E=t(892),v=(t(27),t(5),t(84)),N=t(96),C=t.n(N),S=t(54),H=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).onChangeHandler1=function(e){s.setState({selectedFile1:e.target.files[0]}),s.setState({selectedName1:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler2=function(e){s.setState({selectedFile2:e.target.files[0]}),s.setState({selectedName2:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler3=function(e){s.setState({selectedFile3:e.target.files[0]}),s.setState({selectedName3:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler4=function(e){s.setState({selectedFile4:e.target.files[0]}),s.setState({selectedName4:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var a=JSON.parse(localStorage.getItem("userData")),t=new FormData;t.append("created_by",null===a||void 0===a?void 0:a._id),t.append("name",s.state.category_name),t.append("description",s.state.feature),t.append("status",s.state.status),s.state.selectedFile1&&t.append("file",s.state.selectedFile1),Object(S.l)(t).then((function(e){s.props.history.push("/app/freshlist/category/categoryList"),C()("Success!","Category Created","Success")})).catch((function(e){console.log(e)}))},s.state={category_name:"",type:"",feature:"",status:"",selectedFile1:null,selectedName1:"",selectedFile2:null,selectedName2:"",selectedFile3:null,selectedName3:"",selectedFile4:null,selectedName4:""},s}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement(d.a,{className:"m-2"},o.a.createElement(u.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Category")),o.a.createElement(u.a,null,o.a.createElement(v.b,{render:function(e){var a=e.history;return o.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/category/categoryList")}},"Back")}}))),o.a.createElement(p.a,null,o.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(d.a,{className:"mb-2"},o.a.createElement(u.a,{lg:"4",md:"4"},o.a.createElement(h.a,null,o.a.createElement(b.a,null,"Category Name"),o.a.createElement(y.a,{type:"text",placeholder:"Category Name",name:"category_name",value:this.state.category_name,onChange:this.changeHandler}))),o.a.createElement(u.a,{lg:"4",md:"4"},o.a.createElement(h.a,null,o.a.createElement(b.a,null,"Category Image "),o.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler1}))),o.a.createElement(u.a,{lg:"4",md:"4",className:"mb-2"},o.a.createElement(b.a,null,"Description"),o.a.createElement("textarea",{type:"text",className:"form-control",name:"feature",value:this.state.feature,onChange:this.changeHandler})),o.a.createElement(u.a,{lg:"12",md:"12",sm:"12",className:"mb-2 mt-1"},o.a.createElement(b.a,{className:"mb-0"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:this.changeHandler1},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),o.a.createElement(d.a,null,o.a.createElement(u.a,null,o.a.createElement("div",{className:"d-flex justify-content-start"},o.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:""},"+ Add"))))))))}}]),t}(i.Component);a.default=H},937:function(e,a,t){"use strict";var l=t(10),n=t(12),s=t(1),c=t.n(s),r=t(2),i=t.n(r),o=t(9),m=t.n(o),d=t(7),u=["className","cssModule","row","disabled","check","inline","tag"],g={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,s=e.row,r=e.disabled,i=e.check,o=e.inline,g=e.tag,p=Object(n.a)(e,u),f=Object(d.mapToCssModules)(m()(a,!!s&&"row",i?"form-check":"form-group",!(!i||!o)&&"form-check-inline",!(!i||!r)&&"disabled"),t);return"fieldset"===g&&(p.disabled=r),c.a.createElement(g,Object(l.a)({},p,{className:f}))};p.propTypes=g,p.defaultProps={tag:"div"},a.a=p}}]);
//# sourceMappingURL=322.7034587d.chunk.js.map
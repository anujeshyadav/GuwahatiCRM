(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[339],{3038:function(e,t,a){"use strict";a.r(t),a.d(t,"AddCategory",(function(){return j}));var l=a(60),n=a(16),s=a(17),c=a(18),r=a(19),i=a(1),o=a.n(i),m=a(912),d=a(904),u=a(905),g=a(244),h=a(916),p=a(906),f=a(943),v=a(907),y=a(908),b=a(894),E=(a(27),a(6),a(85)),N=a(73),C=a.n(N),S=a(40),k=a(5),j=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).onChangeHandler1=function(e){s.setState({selectedFile1:e.target.files[0]}),s.setState({selectedName1:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler2=function(e){s.setState({selectedFile2:e.target.files[0]}),s.setState({selectedName2:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler3=function(e){s.setState({selectedFile3:e.target.files[0]}),s.setState({selectedName3:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler4=function(e){s.setState({selectedFile4:e.target.files[0]}),s.setState({selectedName4:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var t=s.props.match.params.id,a=(JSON.parse(localStorage.getItem("userData")),new FormData);a.append("name",s.state.category_name),a.append("description",s.state.feature),a.append("status",s.state.status),s.state.selectedFile1&&a.append("file",s.state.selectedFile1),Object(S.Gc)(t,a).then((function(e){s.props.history.push("/app/freshlist/category/categoryList"),C()("Success!","Category Updated","Success")})).catch((function(e){console.log(e),C()("Something went Wrong")}))},s.state={category_name:"",type:"",feature:"",file:"",status:"",selectedFile1:null,selectedName1:"",selectedFile2:null,selectedName2:"",selectedFile3:null,selectedName3:"",selectedFile4:null,selectedName4:""},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;Object(S.Sc)(t).then((function(t){console.log(null===t||void 0===t?void 0:t.Category);var a=null===t||void 0===t?void 0:t.Category;console.log(null===a||void 0===a?void 0:a.image),e.setState({category_name:null===a||void 0===a?void 0:a.name,feature:null===a||void 0===a?void 0:a.description,status:null===a||void 0===a?void 0:a.status,file:null===a||void 0===a?void 0:a.image})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement(d.a,{className:"m-2"},o.a.createElement(u.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Category")),o.a.createElement(u.a,null,o.a.createElement(E.b,{render:function(e){var t=e.history;return o.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/category/categoryList")}},"Back")}}))),o.a.createElement(h.a,null,o.a.createElement(p.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(d.a,{className:"mb-2"},o.a.createElement(u.a,{lg:"4",md:"4"},o.a.createElement(f.a,null,o.a.createElement(v.a,null,"Category Name"),o.a.createElement(y.a,{type:"text",placeholder:"Category Name",name:"category_name",value:this.state.category_name,onChange:this.changeHandler}))),o.a.createElement(u.a,{lg:"4",md:"4"},o.a.createElement(f.a,null,o.a.createElement(v.a,null,"Category Image "),o.a.createElement(b.a,{type:"file",onChange:this.onChangeHandler1}))),o.a.createElement(u.a,{lg:"4",md:"4",className:"mb-2"},o.a.createElement(v.a,null,"Description"),o.a.createElement("textarea",{type:"text",className:"form-control",name:"feature",value:this.state.feature,onChange:this.changeHandler})),o.a.createElement(u.a,{lg:"4",md:"4",className:"mb-2"},this.state.file&&o.a.createElement("img",{style:{borderRadius:"8px"},src:"".concat(k.fc,"/Images/").concat(this.state.file),alt:"",height:"100",width:"100"})),o.a.createElement(u.a,{lg:"12",md:"12",sm:"12",className:"mb-2 mt-1"},o.a.createElement(v.a,{className:"mb-0"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:this.changeHandler1},o.a.createElement("input",{checked:"Active"==this.state.status,style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{checked:"Deactive"==this.state.status,style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),o.a.createElement(d.a,null,o.a.createElement(u.a,null,o.a.createElement("div",{className:"d-flex justify-content-start"},o.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:""},"+ Add"))))))))}}]),a}(i.Component);t.default=j},943:function(e,t,a){"use strict";var l=a(10),n=a(12),s=a(1),c=a.n(s),r=a(2),i=a.n(r),o=a(8),m=a.n(o),d=a(7),u=["className","cssModule","row","disabled","check","inline","tag"],g={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},h=function(e){var t=e.className,a=e.cssModule,s=e.row,r=e.disabled,i=e.check,o=e.inline,g=e.tag,h=Object(n.a)(e,u),p=Object(d.mapToCssModules)(m()(t,!!s&&"row",i?"form-check":"form-group",!(!i||!o)&&"form-check-inline",!(!i||!r)&&"disabled"),a);return"fieldset"===g&&(h.disabled=r),c.a.createElement(g,Object(l.a)({},h,{className:p}))};h.propTypes=g,h.defaultProps={tag:"div"},t.a=h}}]);
//# sourceMappingURL=339.801fb970.chunk.js.map
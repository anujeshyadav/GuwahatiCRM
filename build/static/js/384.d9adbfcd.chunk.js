(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[384],{2872:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return k}));var l=t(55),n=t(16),r=t(17),s=t(18),c=t(19),m=t(1),i=t.n(m),o=t(891),u=t(892),d=t(653),h=t(119),p=t(899),E=t(173),g=t(903),b=t(893),v=t(939),f=t(894),y=t(895),N=t(9),H=(t(25),t(78)),k=(t(161),function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(l.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=r.props.match.params.id;console.log(a),N.a.post("/admin/edit_order/".concat(a),r.state).then((function(e){console.log(e),r.props.history.push("/app/softNumen/order/placeorder")})).catch((function(e){console.log(e.response.data)}))},r.state={name:"",email:"",mobile:"",delivery_zone:"",status:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;N.a.get("/user/getviewone/".concat(a)).then((function(a){console.log("getviewone",a.data.data),e.setState({name:a.data.data.name,email:a.data.data.email,mobile:a.data.data.mobile,delivery_zone:a.data.data.delivery_zone,status:a.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(o.a,null,i.a.createElement(u.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(d.a,{listTag:"div"},i.a.createElement(h.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(h.a,{href:"/app/freshlist/hubs/hubList",tag:"a"},"Customer List"),i.a.createElement(h.a,{active:!0},"Edit Customer List"))))),i.a.createElement(p.a,null,i.a.createElement(o.a,{className:"m-2"},i.a.createElement(u.a,null,i.a.createElement("h1",{className:"float-left"},"Edit Resource List")),i.a.createElement(u.a,null,i.a.createElement(H.b,{render:function(e){var a=e.history;return i.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/hubs/hubList")}},"Back")}}))),i.a.createElement(g.a,null,i.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(o.a,null,i.a.createElement(u.a,{lg:"5",md:"5",className:"ml-2"},i.a.createElement(v.a,null,i.a.createElement(f.a,null,"Hub Name"),i.a.createElement(y.a,{type:"text",placeholder:"Hub Name",name:"username",value:this.state.username,onChange:this.changeHandler}))),i.a.createElement(u.a,{lg:"5",md:"5",className:"ml-2"},i.a.createElement(v.a,null,i.a.createElement(f.a,null,"Email"),i.a.createElement(y.a,{type:"email",placeholder:"Enter Email",name:"email",value:this.state.email,onChange:this.changeHandler}))),i.a.createElement(u.a,{lg:"5",md:"5",className:"ml-2"},i.a.createElement(v.a,null,i.a.createElement(f.a,null,"Mobile"),i.a.createElement(y.a,{type:"number",placeholder:"Enter Mobile",name:"mobile",value:this.state.mobile,onChange:this.changeHandler}))),i.a.createElement(u.a,{lg:"5",md:"5",className:"ml-2"},i.a.createElement(v.a,null,i.a.createElement(f.a,null,"Delivery Zone"),i.a.createElement(y.a,{type:"text",placeholder:"Delivery Zone",name:"delivery_zone",value:this.state.delivery_zone,onChange:this.changeHandler}))),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},i.a.createElement(f.a,{className:"mb-1"},i.a.createElement("h4",null,"Status")),i.a.createElement("div",{className:"form-label-group",onChange:this.changeHandler1},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"true"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"false"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),i.a.createElement(o.a,null,i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a.Ripple,{color:"primary",type:"submit",className:"mr-2 mb-1"},"Update")))))))}}]),t}(m.Component))},939:function(e,a,t){"use strict";var l=t(7),n=t(12),r=t(1),s=t.n(r),c=t(2),m=t.n(c),i=t(6),o=t.n(i),u=t(4),d=["className","cssModule","row","disabled","check","inline","tag"],h={children:m.a.node,row:m.a.bool,check:m.a.bool,inline:m.a.bool,disabled:m.a.bool,tag:u.tagPropType,className:m.a.string,cssModule:m.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.row,c=e.disabled,m=e.check,i=e.inline,h=e.tag,p=Object(n.a)(e,d),E=Object(u.mapToCssModules)(o()(a,!!r&&"row",m?"form-check":"form-group",!(!m||!i)&&"form-check-inline",!(!m||!c)&&"disabled"),t);return"fieldset"===h&&(p.disabled=c),s.a.createElement(h,Object(l.a)({},p,{className:E}))};p.propTypes=h,p.defaultProps={tag:"div"},a.a=p}}]);
//# sourceMappingURL=384.d9adbfcd.chunk.js.map
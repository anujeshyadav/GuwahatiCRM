(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[186],{1084:function(e,a,t){"use strict";var n=t(6),s=t(12),c=t(1),l=t.n(c),o=t(2),r=t.n(o),i=t(5),m=t.n(i),p=t(4),u=["className","cssModule","fluid","tag"],d={tag:p.tagPropType,fluid:r.a.oneOfType([r.a.bool,r.a.string]),className:r.a.string,cssModule:r.a.object},b=function(e){var a=e.className,t=e.cssModule,c=e.fluid,o=e.tag,r=Object(s.a)(e,u),i="container";!0===c?i="container-fluid":c&&(i="container-"+c);var d=Object(p.mapToCssModules)(m()(a,i),t);return l.a.createElement(o,Object(n.a)({},r,{className:d}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},1554:function(e,a,t){e.exports=t.p+"static/media/glogo.5f6d14a9.png"},3120:function(e,a,t){"use strict";t.r(a);var n=t(55),s=t(16),c=t(17),l=t(18),o=t(19),r=t(1),i=t.n(r),m=t(1084),p=t(890),u=t(891),d=t(898),b=t(899),h=t(892),f=t(893),g=t(939),v=t(894),E=t(173),k=(t(998),t(1554)),N=t.n(k),y=t(64),j=t.n(y),x=t(25),O=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var c;return Object(s.a)(this,t),(c=a.call(this,e)).otpHandler=function(e){e.preventDefault(),console.log(c.state),j.a.post("http://35.154.86.59/api/admin/adminverifyOtp",{mobile:c.state.mobile,otp:c.state.otpnumber}).then((function(e){console.log(e),null!=e.data.token&&""!==e.data.token&&void 0!=e.data.token&&(localStorage.setItem("auth-admintoken",e.data.token),c.props.history.push("/pages/newPassword"))})).catch((function(e){console.log(e.status),console.log(e.response)}))},c.handlechange=function(e){e.preventDefault(),c.setState(Object(n.a)({},e.target.name,e.target.value))},c.changeHandler=function(e){e.preventDefault(),c.setState(Object(n.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault(),c.setState({otp:!1}),j.a.post("http://35.154.86.59/api/admin/adminsendotp",{mobile:c.state.mobile}).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},c.state={mobile:"",otp:!0,otpnumber:"",token:""},c}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,null,this.state.otp?i.a.createElement(p.a,{className:"m-0 justify-content-center"},i.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},i.a.createElement(u.a,{lg:"8",md:"12",className:"p-1"},i.a.createElement(d.a,{className:"rounded-0  px-2 pb-3 login-tabs-container"},i.a.createElement(b.a,{className:"pb-1 justify-content-center"},i.a.createElement("img",{src:N.a,class:"img-fluid",alt:"..."}),i.a.createElement("br",null)),i.a.createElement(h.a,{onSubmit:this.submitHandler},i.a.createElement(f.a,null,"Mobile No."),i.a.createElement(g.a,{className:"form-label-group"},i.a.createElement(v.a,{type:"number",placeholder:"Mobile No.",required:!0,name:"mobile",value:this.state.mobile,onChange:this.changeHandler})),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement(E.a.Ripple,{color:"primary",outline:!0,onClick:function(){x.a.push("/pages/login")}},"Login"),i.a.createElement(E.a.Ripple,{color:"primary",type:"submit"},"Submit"))))))):i.a.createElement(p.a,{className:"m-0 justify-content-center"},i.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},i.a.createElement(u.a,{lg:"8",md:"12",className:"p-1"},i.a.createElement(d.a,{className:"rounded-0  px-2 pb-3 login-tabs-container"},i.a.createElement(b.a,{className:"pb-1 justify-content-center"},i.a.createElement("img",{src:N.a,class:"img-fluid",alt:"..."}),i.a.createElement("br",null)),i.a.createElement(h.a,{onSubmit:this.otpHandler},i.a.createElement(f.a,null,"Enter OTP"),i.a.createElement(g.a,{className:"form-label-group"},i.a.createElement(v.a,{type:"number",name:"otpnumber",placeholder:"OTP No",value:this.state.otpnumber,onChange:this.handlechange})),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement(E.a.Ripple,{color:"primary",type:"submit"},"Verify"))))))))}}]),t}(i.a.Component);a.default=O},939:function(e,a,t){"use strict";var n=t(6),s=t(12),c=t(1),l=t.n(c),o=t(2),r=t.n(o),i=t(5),m=t.n(i),p=t(4),u=["className","cssModule","row","disabled","check","inline","tag"],d={children:r.a.node,row:r.a.bool,check:r.a.bool,inline:r.a.bool,disabled:r.a.bool,tag:p.tagPropType,className:r.a.string,cssModule:r.a.object},b=function(e){var a=e.className,t=e.cssModule,c=e.row,o=e.disabled,r=e.check,i=e.inline,d=e.tag,b=Object(s.a)(e,u),h=Object(p.mapToCssModules)(m()(a,!!c&&"row",r?"form-check":"form-group",!(!r||!i)&&"form-check-inline",!(!r||!o)&&"disabled"),t);return"fieldset"===d&&(b.disabled=o),l.a.createElement(d,Object(n.a)({},b,{className:h}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},998:function(e,a,t){"use strict";var n=t(16),s=t(17),c=t(18),l=t(19),o=t(1),r=t.n(o),i=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},r.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),r.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},r.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),r.a.createElement("span",null,this.props.label))}}]),t}(r.a.Component);a.a=i}}]);
//# sourceMappingURL=186.17744afd.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[226],{1022:function(e,a,t){"use strict";var n=t(16),s=t(17),r=t(18),l=t(19),c=t(1),o=t.n(c),i=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},o.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),o.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},o.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),o.a.createElement("span",null,this.props.label))}}]),t}(o.a.Component);a.a=i},1237:function(e,a,t){"use strict";var n=t(9),s=t(11),r=t(1),l=t.n(r),c=t(2),o=t.n(c),i=t(8),m=t.n(i),u=t(5),p=["className","cssModule","fluid","tag"],d={tag:u.tagPropType,fluid:o.a.oneOfType([o.a.bool,o.a.string]),className:o.a.string,cssModule:o.a.object},h=function(e){var a=e.className,t=e.cssModule,r=e.fluid,c=e.tag,o=Object(s.a)(e,p),i="container";!0===r?i="container-fluid":r&&(i="container-"+r);var d=Object(u.mapToCssModules)(m()(a,i),t);return l.a.createElement(c,Object(n.a)({},o,{className:d}))};h.propTypes=d,h.defaultProps={tag:"div"},a.a=h},3307:function(e,a,t){"use strict";t.r(a);var n=t(16),s=t(17),r=t(18),l=t(19),c=t(1),o=t.n(c),i=t(1237),m=t(901),u=t(902),p=t(909),d=t(910),h=t(903),f=t(936),b=t(904),g=t(905),v=t(243),E=t(244),y=t.n(E),N=t(1022),k=t(320),j=t(33),C=t(70),x=t(26),w=(t(655),t(656),t(67),t(264));C.apps.length||C.initializeApp(w.a);var O=C.auth(),P=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={email:"",password:"",name:"",confirmPass:""},e.handleRegister=function(a){a.preventDefault(),e.props.signupWithFirebase(e.state.email,e.state.password,e.state.name)},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(i.a,null,o.a.createElement(m.a,{className:"m-0 justify-content-center"},o.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},o.a.createElement(u.a,{lg:"8",md:"12",className:"p-1"},o.a.createElement(p.a,{className:"rounded-0  px-2 pb-3 login-tabs-container"},o.a.createElement(d.a,{className:"pb-1 justify-content-center"},o.a.createElement("img",{src:y.a,class:"img-fluid",alt:"..."}),o.a.createElement("br",null)),o.a.createElement(h.a,{onSubmit:this.handleRegister},o.a.createElement(f.a,{className:"form-label-group position-relative has-icon-left"},o.a.createElement("div",{class:"form-group"},o.a.createElement(b.a,null,"Name"),o.a.createElement(g.a,{type:"text",class:"form-control mt-1 mb-3",placeholder:"Name",value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})},required:!0,name:"name"}))),o.a.createElement(f.a,{className:"form-label-group position-relative has-icon-left"},o.a.createElement("div",{class:"form-group"},o.a.createElement(b.a,null,"Gmail"),o.a.createElement(g.a,{type:"text",placeholder:"Email",value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})},required:!0,name:"email"}))),o.a.createElement(f.a,{className:"form-label-group position-relative has-icon-left"},o.a.createElement("div",{class:"form-group"},o.a.createElement(b.a,null,"Password"),o.a.createElement(g.a,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})},required:!0}))),o.a.createElement(f.a,{className:"form-label-group"},o.a.createElement("div",{class:"form-group"},o.a.createElement(b.a,null,"Confirm Password"),o.a.createElement(g.a,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPass,onChange:function(a){return e.setState({confirmPass:a.target.value})}}))),o.a.createElement(f.a,null,o.a.createElement(N.a,{color:"primary",icon:o.a.createElement(k.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement(v.a.Ripple,{onClick:function(){return x.a.push("/pages/login")},color:"primary",outline:!0},"Login"),o.a.createElement(v.a.Ripple,{color:"primary",type:"submit"},"Register"))))))))}}]),t}(o.a.Component);a.default=Object(j.b)((function(e){return{values:e.auth.register}}),{signupWithFirebase:function(e,a,t){return function(n){var s=null;O.createUserWithEmailAndPassword(e,a).then((function(e){O.onAuthStateChanged((function(a){e.user.updateProfile({displayName:t}),a&&(s=a.email,n({type:"SIGNUP_WITH_EMAIL",payload:{email:s,name:t,isSignedIn:!0}}),n({type:"LOGIN_WITH_EMAIL",payload:{email:s,name:t}}))})),x.a.push("/")})).catch((function(e){console.log(e.message)}))}}})(P)},936:function(e,a,t){"use strict";var n=t(9),s=t(11),r=t(1),l=t.n(r),c=t(2),o=t.n(c),i=t(8),m=t.n(i),u=t(5),p=["className","cssModule","row","disabled","check","inline","tag"],d={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},h=function(e){var a=e.className,t=e.cssModule,r=e.row,c=e.disabled,o=e.check,i=e.inline,d=e.tag,h=Object(s.a)(e,p),f=Object(u.mapToCssModules)(m()(a,!!r&&"row",o?"form-check":"form-group",!(!o||!i)&&"form-check-inline",!(!o||!c)&&"disabled"),t);return"fieldset"===d&&(h.disabled=c),l.a.createElement(d,Object(n.a)({},h,{className:f}))};h.propTypes=d,h.defaultProps={tag:"div"},a.a=h}}]);
//# sourceMappingURL=226.903e59f7.chunk.js.map
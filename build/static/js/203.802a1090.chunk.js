/*! For license information please see 203.802a1090.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[203],{1013:function(e,t,a){"use strict";var n=a(16),r=a(17),o=a(18),l=a(19),s=a(1),i=a.n(s),c=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},i.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),i.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},i.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),i.a.createElement("span",null,this.props.label))}}]),a}(i.a.Component);t.a=c},2344:function(e,t,a){},3167:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(7),o=a(59),l=a(16),s=a(17),i=a(18),c=a(19),m=a(1),u=a.n(m),d=a(901),p=a(902),h=a(909),f=a(892),v=a(903),g=a(911),y=a(904),E=a(905),N=a(936),b=a(243),C=a(920),w=a(899),x=a(900),S=a(891),L=a(131),O=a(924),k=a(923),j=a(925),D=a(1013),P=a(320),I=a(132),A=a(95),_=a.n(A),F=a(53),U=(a(2344),a(76));a(929);function H(){H=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(k){i=function(e,t,a){return e[t]=a}}function c(e,t,a,r){var o=t&&t.prototype instanceof d?t:d,l=Object.create(o.prototype),s=new S(r||[]);return n(l,"_invoke",{value:b(e,a,s)}),l}function m(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(k){return{type:"throw",arg:k}}}e.wrap=c;var u={};function d(){}function p(){}function h(){}var f={};i(f,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(L([])));g&&g!==t&&a.call(g,o)&&(f=g);var y=h.prototype=d.prototype=Object.create(f);function E(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){var r;n(this,"_invoke",{value:function(n,o){function l(){return new t((function(r,l){!function n(r,o,l,s){var i=m(e[r],e,o);if("throw"!==i.type){var c=i.arg,u=c.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,l,s)}),(function(e){n("throw",e,l,s)})):t.resolve(u).then((function(e){c.value=e,l(c)}),(function(e){return n("throw",e,l,s)}))}s(i.arg)}(n,o,r,l)}))}return r=r?r.then(l,l):l()}})}function b(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return O()}for(a.method=r,a.arg=o;;){var l=a.delegate;if(l){var s=C(l,a);if(s){if(s===u)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var i=m(e,t,a);if("normal"===i.type){if(n=a.done?"completed":"suspendedYield",i.arg===u)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(n="completed",a.method="throw",a.arg=i.arg)}}}function C(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,C(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),u;var r=m(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=h,n(y,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:p,configurable:!0}),p.displayName=i(h,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,i(e,s,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(N.prototype),i(N.prototype,l,(function(){return this})),e.AsyncIterator=N,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var l=new N(c(t,a,n,r),o);return e.isGeneratorFunction(a)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},E(y),i(y,s,"Generator"),i(y,o,(function(){return this})),i(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return l.type="throw",l.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],l=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),i=a.call(o,"finallyLoc");if(s&&i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;x(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:L(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var T=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).toggleModal=function(){s.setState((function(e){return{modal:!e.modal}}))},s.onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name})},s.handleCountryChange=function(e){s.setState({selectedCountry:e})},s.handleStateChange=function(e){s.setState({selectedState:e})},s.handleCityChange=function(e){s.setState({selectedCity:e})},s.changeHandler=function(e){s.setState(Object(o.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),s.setState({Loading:"Loading..."});var t=JSON.parse(localStorage.getItem("userData")),a=new FormData;a.append("name",s.state.name),a.append("email",s.state.email),s.state.password&&a.append("Password",s.state.password),a.append("cnfmPassword",s.state.cnfmPassword),s.state.password?s.state.password==s.state.cnfmPassword?Object(F.kb)(null===t||void 0===t?void 0:t.accountId,a).then((function(e){var t;console.log(e);var a=Object(r.a)(Object(r.a)({},null===e||void 0===e?void 0:e.updateUser[0]),null===e||void 0===e?void 0:e.user);null===(t=s.context)||void 0===t||t.setUserInformatio(a),localStorage.setItem("userData",JSON.stringify(a)),(null===e||void 0===e?void 0:e.status)&&(_()("Success!","Updated Successfully","success"),s.setState({Loading:"Submit"}))})).catch((function(e){_()("Error!","Something went Wrong","error"),s.setState({Loading:"Submit"}),console.log(e.response)})):(_()("Password Does Not Match"),s.setState({Loading:"Submit"})):Object(F.kb)(null===t||void 0===t?void 0:t.accountId,a).then((function(e){var t;console.log(e);var a=Object(r.a)(Object(r.a)({},null===e||void 0===e?void 0:e.updateUser[0]),null===e||void 0===e?void 0:e.user);null===(t=s.context)||void 0===t||t.setUserInformatio(a),localStorage.setItem("userData",JSON.stringify(a)),(null===e||void 0===e?void 0:e.status)&&(_()("Success!","Updated Successfully","success"),s.setState({Loading:"Submit"}))})).catch((function(e){console.log("object"),_()("Error!","Something went Wrong","error"),console.log(e.response),s.setState({Loading:"Submit"})}))},s.HandleUploadLogo=function(){var e=Object(n.a)(H().mark((function e(t){var a,n;return H().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=JSON.parse(localStorage.getItem("userData")),(n=new FormData).append("created_by",null===a||void 0===a?void 0:a._id),n.append("email",s.state.email),n.append("name",s.state.companyName),n.append("mobileNo",s.state.CompanyNumber),n.append("file",s.state.Companylogo),n.append("gstNo",s.state.gstNumber),n.append("address",s.state.CompanyAddress),n.append("signature",s.state.Signature),e.next=13,Object(F.E)(n).then((function(e){console.log(e),_()("Company Details are Added Successfully")})).catch((function(e){console.log(e)}));case 13:console.log(s.state.Loading),s.toggleModal();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.state={firstName:"",lastName:"",modal:!1,Createmode:!1,Loading:"Submit",selectedCountry:null,selectedState:null,selectedCity:null,name:"",LoginData:{},Companylogo:{},CompanyDetails:{},CompanyAddress:"",Signature:{},formData:"",CompanyNumber:"",gstNumber:"",companyName:"",email:"",cnfmPassword:"",password:""},s}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a,n;this.state.selectedCountry!==t.selectedCountry&&(console.log(this.state.selectedCountry),console.log(null===(a=this.state.selectedCountry)||void 0===a?void 0:a.isoCode),console.log(null===O.a||void 0===O.a?void 0:O.a.getStatesOfCountry(null===(n=this.state.selectedCountry)||void 0===n?void 0:n.isoCode)))}},{key:"componentDidMount",value:function(){var e=Object(n.a)(H().mark((function e(){var t,a,n=this;return H().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,JSON.parse(localStorage.getItem("userData"));case 2:return a=e.sent,this.setState({LoginData:a}),this.setState({name:null===a||void 0===a?void 0:a.name,email:null===a||void 0===a?void 0:a.email,cnfmPassword:null===a||void 0===a||null===(t=a.Userinfo)||void 0===t?void 0:t.password}),e.next=7,Object(F.Bc)(null===a||void 0===a?void 0:a._id).then((function(e){n.setState({CompanyDetails:null===e||void 0===e?void 0:e.CompanyDetail})})).catch((function(e){console.log(e)}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,a,r,o,l,s,i,c,m,A,_,F,U,T,M,G,q,J,z,V,R,W,B,Y=this;console.log(this.context);var K=this.state,Q=K.selectedCountry,X=K.selectedState,Z=K.selectedCity;return u.a.createElement(u.a.Fragment,null,u.a.createElement(I.a,{breadCrumbTitle:"Profile",breadCrumbParent:"Pages",breadCrumbActive:"Profile"}),u.a.createElement("div",{id:"user-profile"},u.a.createElement(d.a,{className:"m-0 justify-content-center"},u.a.createElement(p.a,{lg:"4",md:"4",xl:"4",sm:"12"},u.a.createElement(h.a,{className:"bg-authentication rounded-0 mb-0 w-100"},u.a.createElement("div",{className:"profile-img text-center st-1"},u.a.createElement("ul",{style:{listStyleType:"none"},className:"lst-1 usrdatlist"},u.a.createElement("li",{className:"lst-2 p-1"},"FirstName:",u.a.createElement("span",{className:"lst-3"},u.a.createElement("strong",null,null===(e=this.context)||void 0===e?void 0:e.UserInformatio.firstName))),u.a.createElement("li",{className:"lst-2 p-1"},"LastName:",u.a.createElement("span",{className:"lst-3"},u.a.createElement("strong",null,null===(t=this.context)||void 0===t?void 0:t.UserInformatio.lastName))),u.a.createElement("li",{className:"lst-2 p-1"},"Email:",u.a.createElement("span",{className:"lst-3"},u.a.createElement("strong",null,null===(a=this.context)||void 0===a||null===(r=a.UserInformatio)||void 0===r?void 0:r.email))),u.a.createElement("li",{className:"lst-2 p-1"},"Country:",u.a.createElement("span",{className:"lst-3"},u.a.createElement("strong",null,null===(o=this.context)||void 0===o||null===(l=o.UserInformatio)||void 0===l?void 0:l.Country))),u.a.createElement("li",{className:"lst-2 p-1"},"State:",u.a.createElement("span",{className:"lst-3"},u.a.createElement("strong",null,null===(s=this.context)||void 0===s||null===(i=s.UserInformatio)||void 0===i?void 0:i.State))),u.a.createElement("li",{className:"lst-2 p-1"},"City:",u.a.createElement("span",{className:"lst-3"},u.a.createElement("strong",null,null===(c=this.context)||void 0===c||null===(m=c.UserInformatio)||void 0===m?void 0:m.City))))))),u.a.createElement(p.a,{sm:"12",xl:"8",lg:"8",md:"8",className:"d-flex justify-content-center"},u.a.createElement(h.a,{className:"bg-authentication rounded-0 mb-0 w-100"},u.a.createElement(d.a,{className:"container p-2"},u.a.createElement(p.a,null,u.a.createElement("span",{className:"mb-2 mt-2"},"Edit Profile")),u.a.createElement(p.a,null,u.a.createElement(f.a,{color:"primary",onClick:function(e){e.preventDefault(),Y.setState({Addcolor:!0})},style:{cursor:"pointer"},className:"mb-1"},"Choose Background color"),this.state.Addcolor&&this.state.Addcolor&&u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"mt-1"},u.a.createElement("input",{onChange:function(e){var t;localStorage.setItem("UserDefinedcoler",e.target.value),null===(t=Y.context)||void 0===t||t.SetmyCustomColor(e.target.value)},type:"color",className:""}),u.a.createElement(f.a,{className:"mx-3",color:"primary",onClick:function(e){e.preventDefault(),Y.setState({Addcolor:!1})}},"Submit")))),1==(null===(A=this.state.LoginData)||void 0===A||null===(_=A.rolename)||void 0===_?void 0:_.position)?u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,null,u.a.createElement("div",{className:"d-flex justify-content-end"},u.a.createElement(f.a,{style:{cursor:"pointer"},className:"",onClick:function(e){e.preventDefault(),Y.toggleModal(),Y.setState({Createmode:!1})},color:"primary"},"Add Company Details"),u.a.createElement(f.a,{onClick:function(){var e=Object(n.a)(H().mark((function e(t){return H().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),Y.toggleModal(),Y.setState({Createmode:!0});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),color:"primary",className:" ml-3"},"View")))):null),u.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement("div",{className:"st-2"},u.a.createElement(g.a,null),u.a.createElement(d.a,{className:"m-0"},u.a.createElement(p.a,{sm:"12",lg:"6",md:"6",className:"p-1"},u.a.createElement(y.a,null,"FirstName"),u.a.createElement(E.a,{type:"text",name:"firstName",placeholder:"FirstName",value:this.state.firstName,onChange:this.changeHandler})),u.a.createElement(p.a,{sm:"12",lg:"6",md:"6",className:"p-1"},u.a.createElement(y.a,null,"LastName"),u.a.createElement(E.a,{type:"text",name:"lastName",placeholder:"LastName",value:this.state.name,onChange:this.changeHandler})),u.a.createElement(p.a,{sm:"12",lg:"6",md:"6",className:"p-1"},u.a.createElement(y.a,null,"Email"),u.a.createElement(E.a,{type:"email",name:"email",placeholder:"email",value:this.state.email,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",sm:"12"},u.a.createElement(N.a,null,u.a.createElement(y.a,null,"Select Country"),u.a.createElement(L.a,{options:k.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:Q,onChange:this.handleCountryChange}))),u.a.createElement(p.a,{lg:"6",md:"6",sm:"12"},u.a.createElement(N.a,null,u.a.createElement(y.a,null,"Select State"),u.a.createElement(L.a,{options:null===O.a||void 0===O.a?void 0:O.a.getStatesOfCountry(null===Q||void 0===Q?void 0:Q.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:X,onChange:this.handleStateChange}))),u.a.createElement(p.a,{lg:"6",md:"6",sm:"12"},u.a.createElement(N.a,null,u.a.createElement(y.a,null,"Select City"),u.a.createElement(L.a,{options:j.a.getCitiesOfState(null===X||void 0===X?void 0:X.countryCode,null===X||void 0===X?void 0:X.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:Z,onChange:this.handleCityChange}))),u.a.createElement(p.a,{sm:"12",lg:"6",md:"6",className:"p-1"},u.a.createElement(y.a,null,"Password"),u.a.createElement(E.a,{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.changeHandler})),u.a.createElement(p.a,{sm:"12",lg:"6",md:"6",className:"p-1"},u.a.createElement(y.a,null,"Confirm Password"),u.a.createElement(E.a,{type:"password",name:"cnfmPassword",placeholder:"Reset password",value:this.state.cnfmPassword,onChange:this.changeHandler}))),u.a.createElement(d.a,null,u.a.createElement(p.a,null,u.a.createElement(D.a,{color:"primary",className:"mb-1 mx-1",icon:u.a.createElement(P.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0}))),u.a.createElement("div",{className:"d-flex justify-content-between"},u.a.createElement(b.a.Ripple,{color:"primary",type:"submit"},this.state.Loading)))))))),u.a.createElement(C.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:this.props.className,style:{maxWidth:"1050px"}},u.a.createElement(w.a,{toggle:this.toggleModal},"Add Company Details"),u.a.createElement(x.a,null,this.state.Createmode&&this.state.Createmode?u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",null,"Existing Details"),u.a.createElement("div",{className:"p-1"},"Name: ",null===(F=this.state.CompanyDetails)||void 0===F?void 0:F.name),u.a.createElement("div",{className:"p-1"},"GST Number: ",null===(U=this.state.CompanyDetails)||void 0===U?void 0:U.gstNo),u.a.createElement("div",{className:"p-1"},"Address: ",null===(T=this.state.CompanyDetails)||void 0===T?void 0:T.address),u.a.createElement("div",{className:"p-1"},"mobileNo: ",null===(M=this.state.CompanyDetails)||void 0===M?void 0:M.mobileNo),u.a.createElement("div",{className:"p-1"},"Email: ",null===(G=this.state.CompanyDetails)||void 0===G?void 0:G.email),u.a.createElement("div",{className:"p-1"},"Logo:"," ",(null===(q=this.state.CompanyDetails)||void 0===q?void 0:q.logo)&&u.a.createElement("img",{width:100,className:"mx-1",height:80,src:"http://64.227.162.41:5000/Images/".concat(null===(J=this.state.CompanyDetails)||void 0===J?void 0:J.logo),alt:"NA"})),u.a.createElement("div",{className:"p-1"},"signature:"," ",(null===(z=this.state.CompanyDetails)||void 0===z?void 0:z.signature)&&(null===(V=this.state.CompanyDetails)||void 0===V?void 0:V.signature)&&u.a.createElement("img",{className:"mx-1",width:60,height:60,src:"http://64.227.162.41:5000/Images/".concat(null===(R=this.state.CompanyDetails)||void 0===R?void 0:R.signature),alt:"NA"}))):u.a.createElement(u.a.Fragment,null,1==(null===(W=this.state.LoginData)||void 0===W||null===(B=W.rolename)||void 0===B?void 0:B.position)?u.a.createElement(u.a.Fragment,null,u.a.createElement(h.a,{className:"bg-authentication rounded-0 mb-0 w-100"},u.a.createElement(v.a,{className:"p-1",onSubmit:this.HandleUploadLogo},u.a.createElement("div",{className:"st-2"},u.a.createElement(g.a,null,u.a.createElement("h4",{className:"mb-3"},"Add Company Details")),u.a.createElement(d.a,{className:"m-0"},u.a.createElement(p.a,{sm:"12",lg:"6",md:"6",className:"p-1"},u.a.createElement(y.a,null,"signature"),u.a.createElement(S.a,{required:!0,type:"file",placeholder:"Signature",onChange:function(e){return Y.setState({Signature:e.target.files[0]})}})),u.a.createElement(p.a,{sm:"12",lg:"6",md:"6",className:"p-1"},u.a.createElement(y.a,null,"Company Logo"),u.a.createElement(S.a,{required:!0,type:"file",placeholder:"Companylogo",onChange:function(e){return Y.setState({Companylogo:e.target.files[0]})}})),u.a.createElement(p.a,{sm:"12",lg:"6",md:"6",className:"p-1"},u.a.createElement(y.a,null,"Company Address"),u.a.createElement("textarea",{required:!0,type:"textarea",className:"form-control",name:"CompanyAddress",placeholder:"Company Address",value:this.state.CompanyAddress,onChange:this.changeHandler})),u.a.createElement(p.a,{sm:"12",lg:"6",md:"6",className:"p-1"},u.a.createElement(y.a,null,"Company Name"),u.a.createElement("input",{required:!0,type:"text",className:"form-control",name:"companyName",placeholder:"Company Address",value:this.state.companyName,onChange:this.changeHandler})),u.a.createElement(p.a,{sm:"12",lg:"6",md:"6",className:"p-1"},u.a.createElement(y.a,null,"Company Number"),u.a.createElement(E.a,{required:!0,type:"text",className:"formControl",name:"CompanyNumber",placeholder:"Company Number",value:this.state.CompanyNumber,onChange:this.changeHandler})),u.a.createElement(p.a,{sm:"12",lg:"6",md:"6",className:"p-1"},u.a.createElement(y.a,null,"Company Email"),u.a.createElement(E.a,{required:!0,type:"email",className:"form-control",name:"email",placeholder:"email",value:this.state.email,onChange:this.changeHandler})),u.a.createElement(p.a,{sm:"12",lg:"6",md:"6",className:"p-1"},u.a.createElement(y.a,null,"GST Number"),u.a.createElement(E.a,{required:!0,name:"gstNumber",className:"from-control",placeholder:"gstNumber",value:this.state.gstNumber,onChange:this.changeHandler}))),u.a.createElement(d.a,null,u.a.createElement(p.a,null,u.a.createElement(D.a,{color:"primary",className:"mb-1 mx-1",icon:u.a.createElement(P.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0}))),u.a.createElement("div",{className:"d-flex justify-content-center"},u.a.createElement(b.a.Ripple,{color:"primary",type:"submit"},this.state.Loading)))))):null))))}}]),a}(u.a.Component);T.contextType=U.a,t.default=T},936:function(e,t,a){"use strict";var n=a(9),r=a(11),o=a(1),l=a.n(o),s=a(2),i=a.n(s),c=a(8),m=a.n(c),u=a(5),d=["className","cssModule","row","disabled","check","inline","tag"],p={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},h=function(e){var t=e.className,a=e.cssModule,o=e.row,s=e.disabled,i=e.check,c=e.inline,p=e.tag,h=Object(r.a)(e,d),f=Object(u.mapToCssModules)(m()(t,!!o&&"row",i?"form-check":"form-group",!(!i||!c)&&"form-check-inline",!(!i||!s)&&"disabled"),a);return"fieldset"===p&&(h.disabled=s),l.a.createElement(p,Object(n.a)({},h,{className:f}))};h.propTypes=p,h.defaultProps={tag:"div"},t.a=h}}]);
//# sourceMappingURL=203.802a1090.chunk.js.map
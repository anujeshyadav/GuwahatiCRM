(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[332],{2899:function(e,a,t){"use strict";t.r(a),t.d(a,"AddDriver",(function(){return F}));var n=t(965),l=t(59),r=t(16),s=t(17),c=t(18),m=t(19),i=t(1),d=t.n(i),o=t(902),u=t(909),g=t(901),p=t(243),h=t(913),f=t(903),E=t(904),y=t(905),b=t(891),N=(t(26),t(6)),v=t(83),C=t(95),S=t.n(C),F=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var s;return Object(r.a)(this,t),(s=a.call(this,e)).onChangeHandler1=function(e){s.setState({selectedFile1:e.target.files[0]}),s.setState({selectedName1:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler2=function(e){s.setState({selectedFile2:e.target.files[0]}),s.setState({selectedName2:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler3=function(e){s.setState({selectedFile3:e.target.files[0]}),s.setState({selectedName3:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler4=function(e){s.setState({selectedFile4:e.target.files[0]}),s.setState({selectedName4:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler5=function(e){s.setState({selectedFile5:e.target.files[0]}),s.setState({selectedName5:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler6=function(e){s.setState({selectedFile6:e.target.files[0]}),s.setState({selectedName6:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("firstname",s.state.firstname),a.append("lastname",s.state.lastname),a.append("identity_type",s.state.identity_type),a.append("phone_no",s.state.phone_no),a.append("address",s.state.address),a.append("email",s.state.email),a.append("password",s.state.password),a.append("adhar_card_img",s.state.selectedFile1,s.state.selectedName1),a.append("driver_img",s.state.selectedFile2,s.state.selectedName2),a.append("identity_img",s.state.selectedFile3,s.state.selectedName3),a.append("regis_cardImg",s.state.selectedFile4,s.state.selectedName4),a.append("insuranceImg",s.state.selectedFile5,s.state.selectedName5),a.append("licenseImg",s.state.selectedFile6,s.state.selectedName6);var t,l=Object(n.a)(a.values());try{for(l.s();!(t=l.n()).done;){var r=t.value;console.log(r)}}catch(c){l.e(c)}finally{l.f()}N.a.post("/admin/add_drive",a).then((function(e){console.log(e.data.data),"success"==e.data.msg&&(S()("Success!","Submitted Successfully","success"),s.props.history.push("/app/freshlist/driver/driverList"))})).catch((function(e){console.log(e.response.data)}))},s.state={firstname:"",lastname:"",identity_type:"",phone_no:"",address:"",email:"",password:"",selectedFile1:null,selectedName1:"",selectedFile2:null,selectedName2:"",selectedFile3:null,selectedName3:"",selectedFile4:null,selectedName4:"",selectedFile5:null,selectedName5:"",selectedFile6:null,selectedName6:""},s}return Object(s.a)(t,[{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement(o.a,{sm:"12"},d.a.createElement(o.a,null,d.a.createElement("div",null,d.a.createElement(u.a,null,d.a.createElement(g.a,{className:"m-2"},d.a.createElement(o.a,null,d.a.createElement("h1",null,"Add Driver")),d.a.createElement(o.a,null,d.a.createElement(v.b,{render:function(e){var a=e.history;return d.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/driver/driverList")}},"Back")}}))),d.a.createElement(h.a,null,d.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},d.a.createElement(g.a,{className:"mb-2"},d.a.createElement(o.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(E.a,null,"First Name"),d.a.createElement(y.a,{required:!0,type:"text",name:"firstname",placeholder:"First Name",value:this.state.firstname,onChange:this.changeHandler})),d.a.createElement(o.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(E.a,null,"Last Name"),d.a.createElement(y.a,{required:!0,type:"text",name:"lastname",placeholder:"Last Name",value:this.state.lastname,onChange:this.changeHandler})),d.a.createElement(o.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(E.a,null,"Identity Type"),d.a.createElement(y.a,{type:"select",name:"identity_type",placeholder:"Enter Identity Type",value:this.state.identity_type,onChange:this.changeHandler},d.a.createElement("option",{value:"Driving License"},"Driving License"),d.a.createElement("option",{value:"PanCard"},"Pan Card"),d.a.createElement("option",{value:"PassPort"},"Passport"))),d.a.createElement(o.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(E.a,null,"Identity Type Image"),d.a.createElement(b.a,{required:!0,type:"file",onChange:this.onChangeHandler3})),d.a.createElement(o.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(E.a,null,"Phone No."),d.a.createElement(y.a,{required:!0,type:"tel",maxLength:"10",name:"phone_no",placeholder:"Phone No",value:this.state.phone_no,onChange:this.changeHandler})),d.a.createElement(o.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(E.a,null,"Address"),d.a.createElement(y.a,{required:!0,type:"text",name:"address",placeholder:"Address",value:this.state.address,onChange:this.changeHandler})),d.a.createElement(o.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(E.a,null,"Aadhar Card Image"),d.a.createElement(b.a,{required:!0,type:"file",onChange:this.onChangeHandler1})),d.a.createElement(o.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(E.a,null,"Driver Image"),d.a.createElement(b.a,{required:!0,type:"file",onChange:this.onChangeHandler2}))),d.a.createElement(g.a,{className:"mt-2 mb-1"},d.a.createElement(o.a,null,"Account Information")),d.a.createElement(g.a,{className:"mb-2"},d.a.createElement(o.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(E.a,null,"Email"),d.a.createElement(y.a,{required:!0,type:"email",placeholder:"Email","aria-autocomplete":"none"})),d.a.createElement(o.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(E.a,null,"Password"),d.a.createElement(y.a,{required:!0,autoComplete:"none",type:"password",name:"password",placeholder:" Password",value:this.state.password,onChange:this.changeHandler}))),d.a.createElement(g.a,{className:"mt-2 mb-1"},d.a.createElement(o.a,null,"Vehicle Information")),d.a.createElement(g.a,{className:"mb-2"},d.a.createElement(o.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(E.a,null,"Registration Card Image"),d.a.createElement(b.a,{required:!0,type:"file",onChange:this.onChangeHandler4})),d.a.createElement(o.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(E.a,null,"Insurance Policy Image"),d.a.createElement(b.a,{required:!0,type:"file",onChange:this.onChangeHandler5})),d.a.createElement(o.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(E.a,null,"License Image"),d.a.createElement(b.a,{required:!0,type:"file",onChange:this.onChangeHandler6}))),d.a.createElement(g.a,{style:{float:"right"}},d.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 "},"Submit")))))))))}}]),t}(i.Component);a.default=F},965:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(133);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r,s=!0,c=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return s=e.done,e},e:function(e){c=!0,r=e},f:function(){try{s||null==l.return||l.return()}finally{if(c)throw r}}}}}}]);
//# sourceMappingURL=332.1c6fb510.chunk.js.map
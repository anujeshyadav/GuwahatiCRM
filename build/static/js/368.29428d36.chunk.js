(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[368],{2876:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a(947),l=a(55),r=a(16),s=a(17),c=a(18),i=a(19),o=a(1),m=a.n(o),u=a(899),d=a(900),p=a(901),b=a(903),f=a(893),h=a(891),g=a(892),v=a(894),y=a(895),E=a(881),N=a(173),S=a(9),B=a(161),H=a.n(B),j=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler=function(e){s.setState({selectedFile:e.target.files}),s.setState({selectedName:e.target.files.name}),console.log(e.target.files)},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("banner_title",s.state.banner_title),t.append("bannertype",s.state.bannertype),t.append("status",s.state.status);var a,l=Object(n.a)(s.state.selectedFile);try{for(l.s();!(a=l.n()).done;){var r=a.value;null!==s.state.selectedFile&&t.append("banner_img",r,r.name)}}catch(p){l.e(p)}finally{l.f()}var c,i=Object(n.a)(t.values());try{for(i.s();!(c=i.n()).done;){var o=c.value;console.log(o)}}catch(p){i.e(p)}finally{i.f()}var m,u=Object(n.a)(t.keys());try{for(u.s();!(m=u.n()).done;){var d=m.value;console.log(d)}}catch(p){u.e(p)}finally{u.f()}S.a.post("/addbanner",t).then((function(e){console.log(e),H()("Successful!","You clicked the button!","success"),s.props.history.push("/app/freshlist/banner/bannerList")})).catch((function(e){console.log(e)}))},s.state={banner_title:"",banner_img:"",bannertype:"",selectedFile:void 0,selectedName:"",status:""},s}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(p.a,null,"New Banner")),m.a.createElement(b.a,null,m.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(h.a,null,m.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Banner URL"),m.a.createElement(y.a,{required:!0,type:"text",name:"banner_title",placeholder:"Enter Banner URL",value:this.state.banner_title,onChange:this.changeHandler})),m.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Banner Title"),m.a.createElement(y.a,{required:!0,type:"text",name:"banner_title",placeholder:"Enter Banner Title",value:this.state.banner_title,onChange:this.changeHandler})),m.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Banner image"),m.a.createElement(E.a,{type:"file",multiple:!0,onChange:this.onChangeHandler})),m.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Banner Type"),m.a.createElement(E.a,{required:!0,type:"select",name:"bannertype",placeholder:"Enter Banner Type",value:this.state.bannertype,onChange:this.changeHandler},m.a.createElement("option",{value:"select"},"--Select--"),m.a.createElement("option",{value:"AB"},"AB"),m.a.createElement("option",{value:"PV"},"PV")))),m.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,{className:"mb-1"},"Status"),m.a.createElement("div",{className:"form-label-group",onChange:function(t){return e.changeHandler1(t)}},m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),m.a.createElement("span",{style:{marginRight:"20px"}},"Active"),m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),m.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),m.a.createElement(h.a,null,m.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(N.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Banner")))))))}}]),a}(o.Component)},947:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(126);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r,s=!0,c=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return s=e.done,e},e:function(e){c=!0,r=e},f:function(){try{s||null==l.return||l.return()}finally{if(c)throw r}}}}}}]);
//# sourceMappingURL=368.29428d36.chunk.js.map
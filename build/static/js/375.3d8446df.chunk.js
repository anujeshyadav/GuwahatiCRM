(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[375],{2944:function(e,t,a){"use strict";a.r(t),a.d(t,"CreateAttribute",(function(){return S}));var n=a(941),l=a(55),r=a(16),c=a(17),o=a(18),s=a(19),i=a(1),u=a.n(i),m=a(898),d=a(890),p=a(891),h=a(173),f=a(902),v=a(892),E=a(893),g=a(894),b=a(25),y=a(9),S=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).onChangeHandler=function(e){c.setState({selectedFile:e.target.files[0]}),c.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},c.changeHandler1=function(e){c.setState({status:e.target.value})},c.changeHandler=function(e){c.setState(Object(l.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("category_name",c.state.category_name),t.append("desc",c.state.desc),t.append("status",c.state.status),null!==c.state.selectedFile&&t.append("image",c.state.selectedFile,c.state.selectedName);var a,l=Object(n.a)(t.values());try{for(l.s();!(a=l.n()).done;){var r=a.value;console.log(r)}}catch(o){l.e(o)}finally{l.f()}y.a.post("/admin/addcategory",t).then((function(e){console.log(e),c.props.history.push("/app/freshlist/category/categoryList")})).catch((function(e){console.log(e)}))},c.state={category_name:"",selectedFile:null,selectedName:"",desc:"",image:"",status:""},c}return Object(c.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(m.a,null,u.a.createElement(d.a,{className:"m-2"},u.a.createElement(p.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"CreateAttribute")),u.a.createElement(p.a,null,u.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return b.a.push("/app/freshlist/options/AttributeList")}},"Back"))),u.a.createElement(f.a,null,u.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(d.a,{className:"mb-2"},u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},u.a.createElement(E.a,null,"Weight"),u.a.createElement(g.a,{required:!0,type:"select",name:"weight",placeholder:"Enter Iden Type",value:this.state.weight,onChange:this.changeHandler},u.a.createElement("option",{value:"select"},"--Select--"),u.a.createElement("option",{value:"1KG"},"1KG"),u.a.createElement("option",{value:"2KG"},"2KG"),u.a.createElement("option",{value:"3KG"},"3KG"),u.a.createElement("option",{value:"5KG"},"5KG"))),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},u.a.createElement(E.a,null,"Volume"),u.a.createElement(g.a,{required:!0,type:"select",name:"volume",placeholder:"Enter Iden Type",value:this.state.volume,onChange:this.changeHandler},u.a.createElement("option",{value:"select"},"--Select--"),u.a.createElement("option",{value:"1L"},"1L"),u.a.createElement("option",{value:"2L"},"2L"),u.a.createElement("option",{value:"3L"},"3L"),u.a.createElement("option",{value:"5L"},"5L"))),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},u.a.createElement(E.a,null,"Pisces"),u.a.createElement(g.a,{required:!0,type:"select",name:"pisces",placeholder:"Enter Iden Type",value:this.state.pisces,onChange:this.changeHandler},u.a.createElement("option",{value:"select"},"--Select--"),u.a.createElement("option",{value:"1"},"1"),u.a.createElement("option",{value:"2"},"2"),u.a.createElement("option",{value:"3"},"3")))),u.a.createElement(d.a,null,u.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit"))))))}}]),a}(i.Component);t.default=S},941:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(126);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r,c=!0,o=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return c=e.done,e},e:function(e){o=!0,r=e},f:function(){try{c||null==l.return||l.return()}finally{if(o)throw r}}}}}}]);
//# sourceMappingURL=375.3d8446df.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[266],{1220:function(e,a,t){"use strict";var n=t(9),l=t(11),c=t(1),s=t.n(c),r=t(2),m=t.n(r),o=t(8),u=t.n(o),i=t(5),h=["className","cssModule","tag","size"],p={tag:i.tagPropType,size:m.a.string,className:m.a.string,cssModule:m.a.object},d=function(e){var a=e.className,t=e.cssModule,c=e.tag,r=e.size,m=Object(l.a)(e,h),o=Object(i.mapToCssModules)(u()(a,"input-group",r?"input-group-"+r:null),t);return s.a.createElement(c,Object(n.a)({},m,{className:o}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},1221:function(e,a,t){"use strict";var n=t(9),l=t(11),c=t(1),s=t.n(c),r=t(2),m=t.n(r),o=t(8),u=t.n(o),i=t(5),h=["className","cssModule","tag"],p={tag:i.tagPropType,className:m.a.string,cssModule:m.a.object},d=function(e){var a=e.className,t=e.cssModule,c=e.tag,r=Object(l.a)(e,h),m=Object(i.mapToCssModules)(u()(a,"input-group-text"),t);return s.a.createElement(c,Object(n.a)({},r,{className:m}))};d.propTypes=p,d.defaultProps={tag:"span"},a.a=d},3072:function(e,a,t){"use strict";t.r(a),t.d(a,"AddBatch",(function(){return k}));var n=t(59),l=t(16),c=t(17),s=t(18),r=t(19),m=t(1),o=t.n(m),u=t(909),i=t(901),h=t(902),p=t(243),d=t(913),b=t(903),g=t(904),f=t(905),E=t(1220),y=t(1221),N=(t(26),t(6)),v=t(83),k=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(e){var c;return Object(l.a)(this,t),(c=a.call(this,e)).changeHandler=function(e){c.setState(Object(n.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault(),console.log(c.state),N.a.post("/admin/addbatch",c.state).then((function(e){console.log(e),c.props.history.push("/app/freshlist/batch/batchList")})).catch((function(e){console.log(e)}))},c.state={batch:"",rack_no:"",shelf_life:"",expiry_date:"",stock:"",notify:""},c}return Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement(i.a,{className:"m-2"},o.a.createElement(h.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Batch")),o.a.createElement(h.a,null,o.a.createElement(v.b,{render:function(e){var a=e.history;return o.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/batch/batchList")}},"Back")}}))),o.a.createElement(d.a,null,o.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(i.a,{className:"mb-2"},o.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(g.a,null,"Batch"),o.a.createElement(f.a,{type:"number",placeholder:"Batch",name:"batch",value:this.state.batch,onChange:this.changeHandler})),o.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(g.a,null,"Rack Number"),o.a.createElement(f.a,{type:"number",placeholder:"Rack Number",name:"rack_no",value:this.state.rack_no,onChange:this.changeHandler})),o.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(g.a,null,"Shelf Life"),o.a.createElement(E.a,null,o.a.createElement(y.a,null,"Days"),o.a.createElement(f.a,{type:"number",placeholder:"Shelf Life",name:"shelf_life",value:this.state.shelf_life,onChange:this.changeHandler}))),o.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(g.a,null,"Expiry Date"),o.a.createElement(f.a,{type:"text",placeholder:"Expiry Date",name:"expiry_date",value:this.state.expiry_date,onChange:this.changeHandler})),o.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(g.a,null,"Stock"),o.a.createElement(f.a,{type:"number",placeholder:"stock",name:"stock",value:this.state.stock,onChange:this.changeHandler})),o.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(g.a,null,"Notify"),o.a.createElement(f.a,{type:"number",placeholder:"Notify",name:"notify",value:this.state.notify,onChange:this.changeHandler}))),o.a.createElement(i.a,null,o.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add"))))))}}]),t}(m.Component);a.default=k}}]);
//# sourceMappingURL=266.3edaba55.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[206],{1041:function(e,a,t){},3050:function(e,a,t){"use strict";t.r(a);var n=t(16),l=t(17),c=t(18),r=t(19),m=t(1),s=t.n(m),i=t(891),u=t(892),o=t(899),d=t(173),E=t(903),h=(t(25),t(1041),t(918),t(9)),v=t(78),b=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={data:{}},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;h.a.get("/admin/viewone_brand/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e,a,t,n;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement(i.a,null,s.a.createElement(u.a,{sm:"12"})),s.a.createElement(o.a,{className:"overflow-hidden app-ecommerce-details"},s.a.createElement(i.a,{className:"m-2"},s.a.createElement(u.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View")),s.a.createElement(u.a,null,s.a.createElement(v.b,{render:function(e){var a=e.history;return s.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/brand/brandList")}},"Back")}}))),s.a.createElement(E.a,{className:"pb-0"},s.a.createElement(i.a,{className:"m-2"},s.a.createElement(u.a,{sm:"12",className:"my-1"},s.a.createElement(i.a,{className:"m-3"},s.a.createElement(u.a,{sm:"4"},s.a.createElement("img",{src:null===(e=this.state.data)||void 0===e?void 0:e.image,alt:"aaa",width:"200",height:"200"})),s.a.createElement(u.a,{sm:"8"},s.a.createElement(i.a,{className:"m-2"},s.a.createElement(u.a,null,s.a.createElement("h6",null,"Brand Name")),s.a.createElement(u.a,null,s.a.createElement("h6",null,s.a.createElement("b",null,null===(a=this.state.data)||void 0===a?void 0:a.brand_name)))),s.a.createElement(i.a,{className:"m-2"},s.a.createElement(u.a,null,s.a.createElement("h6",null,"Description")),s.a.createElement(u.a,null,s.a.createElement("h6",null,s.a.createElement("b",null,null===(t=this.state.data)||void 0===t?void 0:t.desc)))),s.a.createElement(i.a,{className:"m-2"},s.a.createElement(u.a,null,s.a.createElement("h6",null,"Status")),s.a.createElement(u.a,null,s.a.createElement("h6",null,s.a.createElement("b",null,null===(n=this.state.data)||void 0===n?void 0:n.status))))))))))))}}]),t}(s.a.Component);a.default=b},918:function(e,a,t){}}]);
//# sourceMappingURL=206.2187b52d.chunk.js.map
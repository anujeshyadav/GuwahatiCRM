(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[499],{3181:function(e,a,t){"use strict";t.r(a);var l=t(16),s=t(17),n=t(18),c=t(19),m=t(1),r=t.n(m),i=t(901),d=t(902),o=t(909),u=t(243),E=t(913),f=t(898),v=t(6),N=(t(231),t(26)),h=function(e){Object(n.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).state={data:{}},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;v.a.get("/admin/getoneadmin/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(d.a,{sm:"12"},r.a.createElement(o.a,null,r.a.createElement(i.a,{className:"m-2"},r.a.createElement(d.a,null,r.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Profile Detail")),r.a.createElement(d.a,null,r.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return N.a.push("/app/freshlist/customer/customerList")}},"Back"))),r.a.createElement(E.a,null,r.a.createElement(i.a,{className:"mx-0",col:"12"},r.a.createElement(d.a,{className:"pl-0",sm:"12",lg:"6"},r.a.createElement(f.a,{className:"d-sm-flex d-block"},r.a.createElement(f.a,{className:"mt-md-1 mt-0",left:!0},null===(e=this.state.data)||void 0===e||null===(a=e.image)||void 0===a?void 0:a.map((function(e){return r.a.createElement("img",{className:"border-black m-0",src:e,alt:"user avatar",height:"400"})}))),r.a.createElement(f.a,{body:!0},r.a.createElement(i.a,{className:"ml-4"},r.a.createElement(d.a,{sm:"9",md:"12",lg:"12"},r.a.createElement("div",{className:"users-page-view-table"},r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Name"),r.a.createElement("div",{className:"text-truncate"},r.a.createElement("span",null,this.state.data.name))),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Email"),r.a.createElement("div",{className:"text-truncate"},r.a.createElement("span",null,this.state.data.email))),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Mobile no"),r.a.createElement("div",{className:"text-truncate"},r.a.createElement("span",null,this.state.data.mobile))),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Country"),r.a.createElement("div",{className:"text-truncate"},r.a.createElement("span",null,this.state.data.country))),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"State"),r.a.createElement("div",{className:"text-truncate"},r.a.createElement("span",null,this.state.data.state))),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"City"),r.a.createElement("div",{className:"text-truncate"},r.a.createElement("span",null,this.state.data.city))),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"password"),r.a.createElement("div",{className:"text-truncate"},r.a.createElement("span",null,this.state.data.password))),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"cnfmPassword"),r.a.createElement("div",{className:"text-truncate"},r.a.createElement("span",null,this.state.data.cnfmPassword)))),r.a.createElement("div",{className:"users-page-view-table"},r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Status"),r.a.createElement("div",null,this.state.data.status))))))))))))))}}]),t}(r.a.Component);a.default=h}}]);
//# sourceMappingURL=499.5aa24e67.chunk.js.map
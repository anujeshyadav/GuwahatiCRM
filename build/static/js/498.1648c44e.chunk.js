(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[498],{2938:function(e,t,a){"use strict";a.r(t);a(60),a(9);var l=a(26),o=a(1),n=a.n(o),c=a(912),i=a(904),r=a(905),u=a(916),d=a(906),s=a(943),m=a(907),v=a(908),p=a(244),b=a(233),f=a.n(b),E=a(1989),g=a.n(E),O=a(927),h=(a(27),a(6)),j=a(40),y=void 0;t.default=function(){var e,t,a,b,E,S=Object(o.useState)({hub_name:"",desc:"",email:"",phone:"",address:"",d_zone:"",cat:"",subcat:"",status:""}),N=Object(l.a)(S,2),_=N[0],x=(N[1],Object(o.useState)(null)),k=Object(l.a)(x,2),J=k[0],P=(k[1],Object(o.useState)(null)),w=Object(l.a)(P,2),C=(w[0],w[1],Object(o.useState)(null)),R=Object(l.a)(C,2),D=(R[0],R[1],Object(o.useState)({})),L=Object(l.a)(D,2),M=L[0],z=L[1],A=Object(o.useState)({}),H=Object(l.a)(A,2),X=H[0],q=H[1];Object(o.useEffect)((function(){Object(j.r)().then((function(e){console.log(e.data);var t=f.a.xml2json(e.data,{compact:!0,spaces:2});console.log(JSON.parse(t)),z(JSON.parse(t)),q(JSON.parse(t)),g.a.parseString(null===e||void 0===e?void 0:e.data,(function(e,t){e?console.error("Error parsing XML:",e):console.log(t.ProductRgistration)}))})).catch((function(e){console.log(e)}))}),[]),Object(o.useEffect)((function(){console.log(J),console.log(null===J||void 0===J?void 0:J.isoCode),console.log(null===O.a||void 0===O.a?void 0:O.a.getStatesOfCountry(null===J||void 0===J?void 0:J.isoCode))}),[J]);return n.a.createElement("div",null,n.a.createElement(c.a,null,n.a.createElement(i.a,{className:"m-2"},n.a.createElement(r.a,null,n.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Create Part"))),n.a.createElement(u.a,null,n.a.createElement(d.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),console.log("submitHandler",_),h.a.post("/admin/addcategory",_).then((function(e){console.log(e),y.props.history.push("/app/freshlist/order/orderList")})).catch((function(e){console.log(e)}))}},n.a.createElement(i.a,{className:"mb-2"},M&&(null===(e=M.ProductRgistration)||void 0===e||null===(t=e.input)||void 0===t?void 0:t.map((function(e,t){var a,l,o,c,i;return n.a.createElement(r.a,{key:t,lg:"6",md:"6",sm:"12"},n.a.createElement(s.a,null,n.a.createElement(m.a,null,null===e||void 0===e||null===(a=e.label)||void 0===a?void 0:a._text),n.a.createElement(v.a,{type:null===e||void 0===e||null===(l=e.type)||void 0===l||null===(o=l._attributes)||void 0===o?void 0:o.type,name:null===e||void 0===e||null===(c=e.name)||void 0===c?void 0:c._text,placeholder:null===e||void 0===e||null===(i=e.placeholder)||void 0===i?void 0:i._text})))}))),X&&(null===X||void 0===X||null===(a=X.ProductRgistration)||void 0===a||null===(b=a.MyDropdown)||void 0===b||null===(E=b.dropdown)||void 0===E?void 0:E.map((function(e,t){var a;return console.log(e),n.a.createElement(r.a,{lg:"6",md:"6"},n.a.createElement(m.a,null,null===e||void 0===e||null===(a=e.label)||void 0===a?void 0:a._text),n.a.createElement("select",{key:t,className:"form-control",name:null===e||void 0===e?void 0:e.name._text},n.a.createElement("option",{value:""},"Select an option"),null===e||void 0===e?void 0:e.option.map((function(e,t){var a;return n.a.createElement("option",{key:t,value:null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.value},null===e||void 0===e?void 0:e._text)}))))})))),n.a.createElement(i.a,{className:"m-2"},n.a.createElement(p.a,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Part"))))))}}}]);
//# sourceMappingURL=498.1648c44e.chunk.js.map
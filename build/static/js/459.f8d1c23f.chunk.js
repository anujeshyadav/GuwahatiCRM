(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[459],{3006:function(e,t,a){"use strict";a.r(t);var l=a(24),n=a(1),c=a.n(n),r=(a(232),a(909)),s=a(901),m=a(902),u=a(243),o=a(913),i=a(903),d=a(904),E=a(891),b=(a(233),a(83)),p=(a(231),a(53));t.default=function(e){var t=Object(n.useState)(-1),a=Object(l.a)(t,2),f=(a[0],a[1],Object(n.useState)("")),g=Object(l.a)(f,2),v=g[0],h=(g[1],Object(n.useState)("")),j=Object(l.a)(h,2),O=j[0],y=j[1],N=Object(n.useState)(""),S=Object(l.a)(N,2),C=S[0],k=S[1],w=(Object(b.i)(),Object(b.h)());Object(n.useEffect)((function(){console.log(w.state),y(w.state.status),k(w.state)}),[]);return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(r.a,null,c.a.createElement(s.a,{className:"m-2"},c.a.createElement(m.a,{className:""},c.a.createElement("div",null,c.a.createElement("h2",{className:""},"Change Pending Order Status"))),c.a.createElement(m.a,null,c.a.createElement("div",{className:"float-right"},c.a.createElement(b.b,{render:function(e){var t=e.history;return c.a.createElement(u.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",size:"sm",onClick:function(){return t.goBack()}},"Back")}})))),c.a.createElement(o.a,null,c.a.createElement(i.a,{className:"m-1",onSubmit:function(e){e.preventDefault();var t={status:O};v?swal("Error occured while Entering Details"):Object(p.Qb)(t,C._id).then((function(e){console.log(e),swal("Status changed Successfully")})).catch((function(e){console.log(e)}))}},c.a.createElement(s.a,null,c.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(d.a,null,"Status"),c.a.createElement(E.a,{required:!0,type:"select",placeholder:"City",name:"city",value:O,onChange:function(e){console.log(e.target.value),y(e.target.value)}},c.a.createElement("option",{value:"pending"},"Pending"),c.a.createElement("option",{value:"cancelled"},"Cancelled"),c.a.createElement("option",{value:"completed"},"Completed"))),c.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement(u.a.Ripple,{color:"primary",type:"submit",className:"mt-2"},"Submit")))))))))}}}]);
//# sourceMappingURL=459.f8d1c23f.chunk.js.map
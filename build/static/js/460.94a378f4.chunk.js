(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[460],{3010:function(e,a,t){"use strict";t.r(a);var l=t(24),c=t(1),n=t.n(c),r=(t(232),t(909)),s=t(901),m=t(902),u=t(243),o=t(913),i=t(903),d=t(904),E=t(891),b=(t(233),t(83)),p=(t(231),t(53));a.default=function(e){var a=Object(c.useState)(""),t=Object(l.a)(a,2),f=t[0],v=(t[1],Object(c.useState)("")),h=Object(l.a)(v,2),g=h[0],y=h[1],O=Object(c.useState)(""),j=Object(l.a)(O,2),N=j[0],S=j[1],k=(Object(b.i)(),Object(b.h)());Object(c.useEffect)((function(){console.log(k.state),y(k.state.status),S(k.state)}),[]);return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement(r.a,null,n.a.createElement(s.a,{className:"m-2"},n.a.createElement(m.a,{className:""},n.a.createElement("div",null,n.a.createElement("h2",{className:""},"Edit Purchase Order Status"))),n.a.createElement(m.a,null,n.a.createElement("div",{className:"float-right"},n.a.createElement(b.b,{render:function(e){var a=e.history;return n.a.createElement(u.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",size:"sm",onClick:function(){return a.goBack()}},"Back")}})))),n.a.createElement(o.a,null,n.a.createElement(i.a,{className:"m-1",onSubmit:function(e){e.preventDefault();var a={status:g};f?swal("Error occured while Entering Details"):Object(p.Ob)(a,N._id).then((function(e){console.log(e),swal("Status changed Successfully")})).catch((function(e){console.log(e)}))}},n.a.createElement(s.a,null,n.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},n.a.createElement(d.a,null,"Status"),n.a.createElement(E.a,{required:!0,type:"select",placeholder:"City",name:"city",value:g,onChange:function(e){console.log(e.target.value),y(e.target.value)}},n.a.createElement("option",{value:"pending"},"pending"),n.a.createElement("option",{value:"cancelled"},"cancelled"),n.a.createElement("option",{value:"completed"},"completed"))),n.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement(u.a.Ripple,{color:"primary",type:"submit",className:"mt-2"},"Submit")))))))))}}}]);
//# sourceMappingURL=460.94a378f4.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[350],{2922:function(e,a,t){"use strict";t.r(a);var l=t(25),c=t(24),n=t(1),r=t.n(n),o=t(909),u=t(901),s=t(902),m=t(243),d=t(913),i=t(903),b=t(904),v=t(905),E=t(936),p=(t(233),t(83)),f=(t(231),t(53));a.default=function(e){var a,t=Object(n.useState)(-1),j=Object(c.a)(t,2),O=(j[0],j[1]),N=Object(n.useState)(""),g=Object(c.a)(N,2),h=(g[0],g[1],Object(n.useState)("")),y=Object(c.a)(h,2),S=(y[0],y[1],Object(n.useState)("")),P=Object(c.a)(S,2),T=P[0],k=(P[1],Object(n.useState)("")),I=Object(c.a)(k,2),w=(I[0],I[1],Object(n.useState)(0)),C=Object(c.a)(w,2),R=C[0],_=C[1],M=Object(n.useState)({}),q=Object(c.a)(M,2),x=(q[0],q[1]),G=Object(n.useState)({}),H=Object(c.a)(G,2),J=(H[0],H[1]),z=Object(n.useState)(""),D=Object(c.a)(z,2),F=D[0],B=D[1],Q=(Object(p.i)(),Object(p.h)()),A=Object(n.useState)([{product:"",productId:"",availableQty:"",qty:1,price:"",grandTotal:""}]),K=Object(c.a)(A,2),L=K[0],U=K[1],V=function(e){console.log(e.target.value),B(e.target.value)},W=function(e,a){O(a);var t=e.target,c=t.name,n=t.value,r=null===L||void 0===L?void 0:L.orderItems,o=Object(l.a)(r);o[a][c]=n,console.log(o),U(o)};Object(n.useEffect)((function(){if(U(Q.state),console.log(Q.state),B(Q.state.fullName),x(null===Q||void 0===Q?void 0:Q.state),null===Q||void 0===Q?void 0:Q.state){var e=null===Q||void 0===Q?void 0:Q.state.orderItems.reduce((function(e,a){return e+a.product.Product_MRP}),0);_(e)}else{var a=null===Q||void 0===Q?void 0:Q.state.orderItems.reduce((function(e,a){return e+a.product.Product_MRP}),0);_(a)}}),[]),Object(n.useEffect)((function(){U(Q.state),x(null===Q||void 0===Q?void 0:Q.state)}),[L]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));J(e)}),[]);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(u.a,{className:"m-2"},r.a.createElement(s.a,{className:""},r.a.createElement("div",null,r.a.createElement("h1",{className:""},"Edit PlaceOrder"))),r.a.createElement(s.a,null,r.a.createElement("div",{className:"float-right"},r.a.createElement(p.b,{render:function(e){var a=e.history;return r.a.createElement(m.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",size:"sm",onClick:function(){return a.goBack()}},"Back")}})))),r.a.createElement(d.a,null,r.a.createElement(i.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),console.log(L,L.orderItems);var a=L.orderItems.map((function(e){var a;return{productId:null===e||void 0===e||null===(a=e.product)||void 0===a?void 0:a._id,qty:Number(null===e||void 0===e?void 0:e.qty)}})),t={fullName:F,orderItems:a};console.log(t),T?swal("Error occured while Entering Details"):Object(f.Jb)(t,L._id).then((function(e){console.log(e),swal("PlaceOrder  Edit Successfully")})).catch((function(e){console.log(e)}))}},r.a.createElement(s.a,{className:"mb-1",lg:"4",md:"4",sm:"12"},r.a.createElement("div",{className:""},r.a.createElement(b.a,null,"FullName"),r.a.createElement(v.a,{required:!0,type:"text",name:"FullName",placeholder:"FullName",value:F,onChange:V}))),L&&(null===L||void 0===L||null===(a=L.orderItems)||void 0===a?void 0:a.map((function(e,a){var t;return r.a.createElement(u.a,{className:"",key:a},r.a.createElement(s.a,{className:"mb-1"},r.a.createElement("div",{className:""},r.a.createElement(b.a,null,"Product Name"),r.a.createElement(v.a,{type:"text",placeholder:"ProductName",name:"Product_Title",disabled:!0,value:e.product.Product_Title,onChange:function(e){return V(e)}}))),r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(b.a,null,"Price"),r.a.createElement(v.a,{type:"number",disabled:!0,placeholder:"Price",name:"Product_MRP",value:null===(t=e.product)||void 0===t?void 0:t.Product_MRP}))),r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(b.a,null,"Size"),r.a.createElement(v.a,{type:"number",placeholder:"Size",name:"qty",value:e.qty,onChange:function(e){return W(e,a)}}))),r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(b.a,null,"GST Rate"),r.a.createElement(v.a,{type:"number",placeholder:"GST Rate",disabled:!0,name:"GSTRate",value:e.product["GST Rate"]}))),r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(b.a,null,"HST Code"),r.a.createElement(v.a,{type:"number",placeholder:"HSTCode",name:"HSTCode",disabled:!0,value:e.product.HSN_Code}))))}))),r.a.createElement(u.a,null,r.a.createElement(s.a,{className:"mb-1",lg:"12",md:"12",sm:"12"},r.a.createElement("div",{className:" d-flex justify-content-end"},r.a.createElement(b.a,{className:"pr-5"},"Grand Total : ",r.a.createElement("stron",null,R))))),r.a.createElement(u.a,null,r.a.createElement(s.a,null,r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(m.a.Ripple,{color:"primary",type:"submit",className:"mt-2"},"Submit")))))))))}},936:function(e,a,t){"use strict";var l=t(9),c=t(11),n=t(1),r=t.n(n),o=t(2),u=t.n(o),s=t(8),m=t.n(s),d=t(5),i=["className","cssModule","row","disabled","check","inline","tag"],b={children:u.a.node,row:u.a.bool,check:u.a.bool,inline:u.a.bool,disabled:u.a.bool,tag:d.tagPropType,className:u.a.string,cssModule:u.a.object},v=function(e){var a=e.className,t=e.cssModule,n=e.row,o=e.disabled,u=e.check,s=e.inline,b=e.tag,v=Object(c.a)(e,i),E=Object(d.mapToCssModules)(m()(a,!!n&&"row",u?"form-check":"form-group",!(!u||!s)&&"form-check-inline",!(!u||!o)&&"disabled"),t);return"fieldset"===b&&(v.disabled=o),r.a.createElement(b,Object(l.a)({},v,{className:E}))};v.propTypes=b,v.defaultProps={tag:"div"},a.a=v}}]);
//# sourceMappingURL=350.b8dcfd07.chunk.js.map
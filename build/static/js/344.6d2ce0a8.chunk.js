(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[344],{2925:function(e,a,t){"use strict";t.r(a);var l=t(25),n=t(24),c=t(1),r=t.n(c),o=(t(232),t(909)),u=t(901),s=t(902),m=t(243),i=t(913),d=t(903),b=t(904),E=t(905),v=t(936),p=(t(233),t(83)),f=(t(231),t(53));a.default=function(e){var a,t=Object(c.useState)(-1),O=Object(n.a)(t,2),j=(O[0],O[1]),g=Object(c.useState)(""),N=Object(n.a)(g,2),h=(N[0],N[1],Object(c.useState)("")),y=Object(n.a)(h,2),S=(y[0],y[1],Object(c.useState)("")),T=Object(n.a)(S,2),k=T[0],P=(T[1],Object(c.useState)("")),w=Object(n.a)(P,2),C=(w[0],w[1],Object(c.useState)(0)),I=Object(n.a)(C,2),q=I[0],x=I[1],G=Object(c.useState)({}),R=Object(n.a)(G,2),_=(R[0],R[1]),H=Object(c.useState)({}),M=Object(n.a)(H,2),z=(M[0],M[1]),D=Object(c.useState)(""),F=Object(n.a)(D,2),J=F[0],B=F[1],Q=(Object(p.i)(),Object(p.h)()),A=Object(c.useState)([{product:"",productId:"",availableQty:"",qty:1,price:"",grandTotal:""}]),K=Object(n.a)(A,2),L=K[0],U=K[1],V=function(e){console.log(e.target.value),B(e.target.value)},W=function(e,a){j(a);var t=e.target,n=t.name,c=t.value,r=null===L||void 0===L?void 0:L.orderItems,o=Object(l.a)(r);o[a][n]=c,console.log(o),U(o)};Object(c.useEffect)((function(){var e;U(Q.state),console.log(Q.state),B(Q.state.fullName),_(null===Q||void 0===Q?void 0:Q.state),x(null===Q||void 0===Q||null===(e=Q.state)||void 0===e?void 0:e.grandTotal)}),[]),Object(c.useEffect)((function(){U(Q.state),_(null===Q||void 0===Q?void 0:Q.state)}),[L]),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));z(e)}),[]);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(u.a,{className:"m-2"},r.a.createElement(s.a,{className:""},r.a.createElement("div",null,r.a.createElement("h1",{className:""},"Edit Order"))),r.a.createElement(s.a,null,r.a.createElement("div",{className:"float-right"},r.a.createElement(p.b,{render:function(e){var a=e.history;return r.a.createElement(m.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",size:"sm",onClick:function(){return a.goBack()}},"Back")}})))),r.a.createElement(i.a,null,r.a.createElement(d.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),console.log(L,L.orderItems);var a=L.orderItems.map((function(e){var a;return{productId:null===e||void 0===e||null===(a=e.product)||void 0===a?void 0:a._id,qty:Number(null===e||void 0===e?void 0:e.qty)}})),t={fullName:J,orderItems:a};console.log(t),k?swal("Error occured while Entering Details"):Object(f.Pb)(t,L._id).then((function(e){console.log(e),swal("Order  Edit Successfully")})).catch((function(e){console.log(e)}))}},r.a.createElement(s.a,{className:"mb-1",lg:"4",md:"4",sm:"12"},r.a.createElement("div",{className:""},r.a.createElement(b.a,null,"FullName"),r.a.createElement(E.a,{required:!0,type:"text",name:"FullName",placeholder:"FullName",value:J,onChange:V}))),L&&(null===L||void 0===L||null===(a=L.orderItems)||void 0===a?void 0:a.map((function(e,a){return r.a.createElement(u.a,{className:"",key:a},r.a.createElement(s.a,{className:"mb-1"},r.a.createElement("div",{className:""},r.a.createElement(b.a,null,"Product Name"),r.a.createElement(E.a,{type:"text",placeholder:"ProductName",name:"Product_Title",readOnly:!0,value:e.product.Product_Title,onChange:function(e){return V(e)}}))),r.a.createElement(s.a,null,r.a.createElement(v.a,null,r.a.createElement(b.a,null,"Price"),r.a.createElement(E.a,{type:"number",readOnly:!0,placeholder:"Price",name:"Price",value:e.price}))),r.a.createElement(s.a,null,r.a.createElement(v.a,null,r.a.createElement(b.a,null,"Size"),r.a.createElement(E.a,{type:"number",placeholder:"Size",name:"qty",value:e.qty,onChange:function(e){return W(e,a)}}))),r.a.createElement(s.a,null,r.a.createElement(v.a,null,r.a.createElement(b.a,null,"GST Rate"),r.a.createElement(E.a,{type:"number",placeholder:"GST Rate",name:"GSTRate",value:e.product["GST Rate"]}))),r.a.createElement(s.a,null,r.a.createElement(v.a,null,r.a.createElement(b.a,null,"HST Code"),r.a.createElement(E.a,{type:"number",placeholder:"HSTCode",name:"HSTCode",value:e.product.HSN_Code}))))}))),r.a.createElement(u.a,null,r.a.createElement(s.a,{className:"mb-1",lg:"12",md:"12",sm:"12"},r.a.createElement("div",{className:" d-flex justify-content-end"},r.a.createElement(b.a,{className:"pr-5"},"Grand Total : ",r.a.createElement("stron",null,q))))),r.a.createElement(u.a,null,r.a.createElement(s.a,null,r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(m.a.Ripple,{color:"primary",type:"submit",className:"mt-2"},"Submit")))))))))}},936:function(e,a,t){"use strict";var l=t(9),n=t(11),c=t(1),r=t.n(c),o=t(2),u=t.n(o),s=t(8),m=t.n(s),i=t(5),d=["className","cssModule","row","disabled","check","inline","tag"],b={children:u.a.node,row:u.a.bool,check:u.a.bool,inline:u.a.bool,disabled:u.a.bool,tag:i.tagPropType,className:u.a.string,cssModule:u.a.object},E=function(e){var a=e.className,t=e.cssModule,c=e.row,o=e.disabled,u=e.check,s=e.inline,b=e.tag,E=Object(n.a)(e,d),v=Object(i.mapToCssModules)(m()(a,!!c&&"row",u?"form-check":"form-group",!(!u||!s)&&"form-check-inline",!(!u||!o)&&"disabled"),t);return"fieldset"===b&&(E.disabled=o),r.a.createElement(b,Object(l.a)({},E,{className:v}))};E.propTypes=b,E.defaultProps={tag:"div"},a.a=E}}]);
//# sourceMappingURL=344.6d2ce0a8.chunk.js.map
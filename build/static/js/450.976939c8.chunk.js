(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[450],{3012:function(e,t,a){"use strict";a.r(t);var l=a(25),n=a(24),r=a(1),c=a.n(r),o=(a(232),a(909)),u=a(901),i=a(902),s=a(243),d=a(913),m=a(903),v=a(904),b=a(905),E=(a(233),a(83)),f=(a(231),a(53));t.default=function(e){var t=Object(r.useState)(""),a=Object(n.a)(t,2),p=(a[0],a[1]),O=Object(r.useState)(""),y=Object(n.a)(O,2),j=y[0],N=(y[1],Object(r.useState)([])),g=Object(n.a)(N,2),h=(g[0],g[1]),S=Object(r.useState)(0),_=Object(n.a)(S,2),P=_[0],I=_[1],Q=Object(r.useState)({}),R=Object(n.a)(Q,2),k=(R[0],R[1]),x=Object(r.useState)({}),w=Object(n.a)(x,2),J=(w[0],w[1]),q=Object(r.useState)([]),D=Object(n.a)(q,2),T=(D[0],D[1]),C=(Object(E.i)(),Object(E.h)()),B=Object(r.useState)([{productId:"",Product_Title:"",Qty_Sales:"",Qty_Return:0,Product_Price:""}]),z=Object(n.a)(B,2),F=z[0],G=z[1],K=function(e,t){p(t);var a=e.target,n=a.name,r=a.value,c=Object(l.a)(F);c[t][n]=r,G(c)};Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("OrderList")).orderItems;if(null===C||void 0===C?void 0:C.state){G(null===C||void 0===C?void 0:C.state.orderItems);var t=null===C||void 0===C?void 0:C.state.orderItems.reduce((function(e,t){return e+t.price}),0);I(t),localStorage.setItem("EditoneProduct",null===C||void 0===C?void 0:C.state),k(null===C||void 0===C?void 0:C.state)}else{G(e);var a=null===C||void 0===C?void 0:C.state.orderItems.reduce((function(e,t){return e+t.price}),0);I(a)}}),[]),Object(r.useEffect)((function(){}),[F]),Object(r.useEffect)((function(){Object(f.F)().then((function(e){T(null===e||void 0===e?void 0:e.SalesPerson)})).catch((function(e){return console.log(e)})),Object(f.Kb)().then((function(e){h(null===e||void 0===e?void 0:e.Product)})).catch((function(e){console.log(e)}))}),[]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));console.log(e),J(e)}),[]);return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(o.a,null,c.a.createElement(u.a,{className:"m-2"},c.a.createElement(i.a,{className:""},c.a.createElement("div",null,c.a.createElement("h1",{className:""},"Sales Return"))),c.a.createElement(i.a,null,c.a.createElement("div",{className:"float-right"},c.a.createElement(E.b,{render:function(e){var t=e.history;return c.a.createElement(s.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"danger",size:"sm",onClick:function(){return t.goBack()}},"Back")}})))),c.a.createElement(d.a,null,c.a.createElement(m.a,{className:"m-1",onSubmit:function(e){var t;e.preventDefault(),console.log(F);var a=JSON.parse(localStorage.getItem("userData"));console.log(a);var l=null===F||void 0===F?void 0:F.map((function(e,t){var a;return{productId:null===e||void 0===e||null===(a=e.product)||void 0===a?void 0:a._id,Qty_Sales:null===e||void 0===e?void 0:e.qty,Qty_Return:Number(null===e||void 0===e?void 0:e.returnQty),Product_Price:null===e||void 0===e?void 0:e.price}})),n={userId:null===a||void 0===a?void 0:a._id,returnItems:l,mobileNumber:null===a||void 0===a?void 0:a.mobileNumber,email:a.email,Return_amount:P,orderId:null===C||void 0===C||null===(t=C.state)||void 0===t?void 0:t._id,created_by:null===a||void 0===a?void 0:a._id};j?swal("Error occured while Entering Details"):Object(f.Rb)(n).then((function(e){swal("Sales Returned Successfully"),console.log(e)})).catch((function(e){console.log(e)}))}},F&&(null===F||void 0===F?void 0:F.map((function(e,t){var a;return c.a.createElement(u.a,{className:"",key:t},c.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},c.a.createElement("div",{className:""},c.a.createElement(v.a,null,"Product Name"),c.a.createElement(b.a,{type:"text",name:"Product_Title",readOnly:!0,placeholder:"Product Name",value:null===e||void 0===e||null===(a=e.product)||void 0===a?void 0:a.Product_Title}))),c.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},c.a.createElement("div",{className:""},c.a.createElement(v.a,null,"Price"),c.a.createElement(b.a,{type:"text",name:"price",readOnly:!0,placeholder:"Price",value:null===e||void 0===e?void 0:e.price}))),c.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},c.a.createElement("div",{className:""},c.a.createElement(v.a,null,"Purchased Quantity"),c.a.createElement(b.a,{type:"number",readOnly:!0,name:"qty",placeholder:"Req_Qty",value:null===e||void 0===e?void 0:e.qty,onChange:function(e){return K(e,t)}}))),c.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},c.a.createElement("div",{className:""},c.a.createElement(v.a,null,"Return Quantity"),c.a.createElement(b.a,{type:"number",name:"returnQty",placeholder:"Return Quantity",value:F.returnQty,onChange:function(e){return K(e,t)}}))))}))),c.a.createElement(u.a,null,c.a.createElement(i.a,{className:"mb-1",lg:"12",md:"12",sm:"12"},c.a.createElement("div",{className:" d-flex justify-content-end"},c.a.createElement(v.a,{className:"pr-5"},"Grand Total : ",c.a.createElement("stron",null,P))))),c.a.createElement(u.a,null,c.a.createElement(i.a,null,c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement(s.a.Ripple,{color:"primary",type:"submit",className:"mt-2"},"Submit")))))))))}}}]);
//# sourceMappingURL=450.976939c8.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[485],{3094:function(e,t,a){"use strict";a.r(t);var l=a(24),n=a(26),r=a(1),c=a.n(r),o=(a(233),a(912)),u=a(904),d=a(905),i=a(244),s=a(916),m=a(906),v=a(907),b=a(908),E=(a(234),a(85)),f=(a(232),a(40));t.default=function(e){var t=Object(r.useState)(""),a=Object(n.a)(t,2),O=(a[0],a[1]),p=Object(r.useState)(""),y=Object(n.a)(p,2),g=y[0],N=(y[1],Object(r.useState)([])),j=Object(n.a)(N,2),h=(j[0],j[1]),P=Object(r.useState)(0),S=Object(n.a)(P,2),I=S[0],_=S[1],R=Object(r.useState)({}),Q=Object(n.a)(R,2),J=(Q[0],Q[1]),k=Object(r.useState)({}),x=Object(n.a)(k,2),w=(x[0],x[1]),D=Object(r.useState)([]),q=Object(n.a)(D,2),T=(q[0],q[1]),C=(Object(E.i)(),Object(E.h)()),M=Object(r.useState)([{productId:"",Product_Title:"",Qty_Sales:"",Qty_Return:0,Product_Price:""}]),B=Object(n.a)(M,2),z=B[0],G=B[1],H=function(e,t){O(t);var a=e.target,n=a.name,r=a.value,c=Object(l.a)(z);c[t][n]=r,G(c)};Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("OrderList")).orderItems;if(null===C||void 0===C?void 0:C.state){var t;G(null===C||void 0===C?void 0:C.state.orderItems),console.log("test",null===C||void 0===C?void 0:C.state.orderItems);var a=null===C||void 0===C||null===(t=C.state.orderItems)||void 0===t?void 0:t.reduce((function(e,t){var a;return e+(null===(a=t.productId)||void 0===a?void 0:a.Product_MRP)}),0);_(a),localStorage.setItem("EditoneProduct",null===C||void 0===C?void 0:C.state),J(null===C||void 0===C?void 0:C.state)}else{var l;G(e);var n=null===C||void 0===C||null===(l=C.state.orderItems)||void 0===l?void 0:l.reduce((function(e,t){var a;return e+(null===(a=t.productId)||void 0===a?void 0:a.Product_MRP)}),0);_(n)}}),[]),Object(r.useEffect)((function(){}),[z]),Object(r.useEffect)((function(){Object(f.H)().then((function(e){T(null===e||void 0===e?void 0:e.SalesPerson)})).catch((function(e){return console.log(e)}));var e=JSON.parse(localStorage.getItem("userData"));Object(f.Rb)(null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.database).then((function(e){h(null===e||void 0===e?void 0:e.Product)})).catch((function(e){console.log(e)}))}),[]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));w(e)}),[]);return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(o.a,null,c.a.createElement(u.a,{className:"m-2"},c.a.createElement(d.a,{className:""},c.a.createElement("div",null,c.a.createElement("h1",{className:""},"PlaceOrder Return"))),c.a.createElement(d.a,null,c.a.createElement("div",{className:"float-right"},c.a.createElement(E.b,{render:function(e){var t=e.history;return c.a.createElement(i.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"danger",size:"sm",onClick:function(){return t.goBack()}},"Back")}})))),c.a.createElement(s.a,null,c.a.createElement(m.a,{className:"m-1",onSubmit:function(e){var t;e.preventDefault(),console.log(z);var a=JSON.parse(localStorage.getItem("userData"));console.log(a);var l=null===z||void 0===z?void 0:z.map((function(e,t){var a;return{productId:null===e||void 0===e||null===(a=e.productId)||void 0===a?void 0:a._id,Qty_Sales:null===e||void 0===e?void 0:e.qty,Qty_Return:Number(null===e||void 0===e?void 0:e.returnQty),Product_Price:null===e||void 0===e?void 0:e.price}})),n={userId:null===a||void 0===a?void 0:a._id,returnItems:l,mobileNumber:null===a||void 0===a?void 0:a.mobileNumber,email:a.email,Return_amount:I,orderId:null===C||void 0===C||null===(t=C.state)||void 0===t?void 0:t._id};g?swal("Error occured while Entering Details"):Object(f.Jb)(n).then((function(e){swal(" PlaceOrder Returned Successfully")})).catch((function(e){console.log(e)}))}},z&&(null===z||void 0===z?void 0:z.map((function(e,t){var a,l;return console.log(e),c.a.createElement(u.a,{className:"",key:t},c.a.createElement(d.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},c.a.createElement("div",{className:""},c.a.createElement(v.a,null,"Product Name"),c.a.createElement(b.a,{type:"text",name:"Product_Title",readOnly:!0,placeholder:"Product Name",value:null===e||void 0===e||null===(a=e.productId)||void 0===a?void 0:a.Product_Title}))),c.a.createElement(d.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},c.a.createElement("div",{className:""},c.a.createElement(v.a,null,"Price"),c.a.createElement(b.a,{type:"text",name:"price",readOnly:!0,placeholder:"Price",value:null===e||void 0===e||null===(l=e.productId)||void 0===l?void 0:l.Product_MRP}))),c.a.createElement(d.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},c.a.createElement("div",{className:""},c.a.createElement(v.a,null,"Purchased Quantity"),c.a.createElement(b.a,{type:"number",readOnly:!0,name:"qty",placeholder:"Req_Qty",value:null===e||void 0===e?void 0:e.qty,onChange:function(e){return H(e,t)}}))),c.a.createElement(d.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},c.a.createElement("div",{className:""},c.a.createElement(v.a,null,"Return Quantity"),c.a.createElement(b.a,{type:"number",name:"returnQty",placeholder:"Return Quantity",value:z.returnQty,onChange:function(e){return H(e,t)}}))))}))),c.a.createElement(u.a,null,c.a.createElement(d.a,{className:"mb-1",lg:"12",md:"12",sm:"12"},c.a.createElement("div",{className:" d-flex justify-content-end"},c.a.createElement(v.a,{className:"pr-5"},"Grand Total :"," ",c.a.createElement("stron",null,I&&I))))),c.a.createElement(u.a,null,c.a.createElement(d.a,null,c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement(i.a.Ripple,{color:"primary",type:"submit",className:"mt-2"},"Submit")))))))))}}}]);
//# sourceMappingURL=485.6bb1a5f0.chunk.js.map
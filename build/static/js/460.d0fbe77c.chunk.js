(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[460],{3015:function(e,t,a){"use strict";a.r(t);var l=a(25),n=a(24),r=a(1),c=a.n(r),o=(a(232),a(909)),u=a(901),i=a(902),d=a(243),s=a(913),m=a(903),v=a(904),b=a(905),E=(a(233),a(83)),f=(a(231),a(53));t.default=function(e){var t=Object(r.useState)(""),a=Object(n.a)(t,2),p=(a[0],a[1]),O=Object(r.useState)(""),y=Object(n.a)(O,2),g=y[0],N=(y[1],Object(r.useState)([])),j=Object(n.a)(N,2),h=(j[0],j[1]),S=Object(r.useState)(0),P=Object(n.a)(S,2),_=P[0],I=P[1],R=Object(r.useState)({}),Q=Object(n.a)(R,2),k=(Q[0],Q[1]),x=Object(r.useState)({}),w=Object(n.a)(x,2),J=(w[0],w[1]),q=Object(r.useState)([]),D=Object(n.a)(q,2),T=(D[0],D[1]),C=(Object(E.i)(),Object(E.h)()),M=Object(r.useState)([{productId:"",Product_Title:"",Qty_Sales:"",Qty_Return:0,Product_Price:""}]),B=Object(n.a)(M,2),G=B[0],z=B[1],L=function(e,t){p(t);var a=e.target,n=a.name,r=a.value,c=Object(l.a)(G);c[t][n]=r,z(c)};Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("OrderList")).orderItems;if(null===C||void 0===C?void 0:C.state){z(null===C||void 0===C?void 0:C.state.orderItems);var t=null===C||void 0===C?void 0:C.state.orderItems.reduce((function(e,t){return e+t.product.Product_MRP}),0);I(t),localStorage.setItem("EditoneProduct",null===C||void 0===C?void 0:C.state),k(null===C||void 0===C?void 0:C.state)}else{z(e);var a=null===C||void 0===C?void 0:C.state.orderItems.reduce((function(e,t){return e+t.product.Product_MRP}),0);console.log(a),I(a)}}),[]),Object(r.useEffect)((function(){}),[G]),Object(r.useEffect)((function(){Object(f.G)().then((function(e){T(null===e||void 0===e?void 0:e.SalesPerson)})).catch((function(e){return console.log(e)})),Object(f.Pb)().then((function(e){h(null===e||void 0===e?void 0:e.Product)})).catch((function(e){console.log(e)}))}),[]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));console.log(e),J(e)}),[]);return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(o.a,null,c.a.createElement(u.a,{className:"m-2"},c.a.createElement(i.a,{className:""},c.a.createElement("div",null,c.a.createElement("h1",{className:""},"Sales Return"))),c.a.createElement(i.a,null,c.a.createElement("div",{className:"float-right"},c.a.createElement(E.b,{render:function(e){var t=e.history;return c.a.createElement(d.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"danger",size:"sm",onClick:function(){return t.goBack()}},"Back")}})))),c.a.createElement(s.a,null,c.a.createElement(m.a,{className:"m-1",onSubmit:function(e){var t;e.preventDefault(),console.log(G);var a=JSON.parse(localStorage.getItem("userData"));console.log(a);var l=null===G||void 0===G?void 0:G.map((function(e,t){var a;return{productId:null===e||void 0===e||null===(a=e.product)||void 0===a?void 0:a._id,Qty_Sales:null===e||void 0===e?void 0:e.qty,Qty_Return:Number(null===e||void 0===e?void 0:e.returnQty),Product_Price:null===e||void 0===e?void 0:e.price}})),n={userId:null===a||void 0===a?void 0:a._id,returnItems:l,mobileNumber:null===a||void 0===a?void 0:a.mobileNumber,email:a.email,Return_amount:_,orderId:null===C||void 0===C||null===(t=C.state)||void 0===t?void 0:t._id,created_by:null===a||void 0===a?void 0:a._id};g?swal("Error occured while Entering Details"):Object(f.Wb)(n).then((function(e){swal("Sales Returned Successfully"),console.log(e)})).catch((function(e){console.log(e)}))}},G&&(null===G||void 0===G?void 0:G.map((function(e,t){var a,l;return console.log(e),c.a.createElement(u.a,{className:"",key:t},c.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},c.a.createElement("div",{className:""},c.a.createElement(v.a,null,"Product Name"),c.a.createElement(b.a,{type:"text",name:"Product_Title",readOnly:!0,placeholder:"Product Name",value:null===e||void 0===e||null===(a=e.product)||void 0===a?void 0:a.Product_Title}))),c.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},c.a.createElement("div",{className:""},c.a.createElement(v.a,null,"Price"),c.a.createElement(b.a,{type:"text",name:"price",readOnly:!0,placeholder:"Price",value:null===e||void 0===e||null===(l=e.product)||void 0===l?void 0:l.Product_MRP}))),c.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},c.a.createElement("div",{className:""},c.a.createElement(v.a,null,"Purchased Quantity"),c.a.createElement(b.a,{type:"number",readOnly:!0,name:"qty",placeholder:"Req_Qty",value:null===e||void 0===e?void 0:e.qty,onChange:function(e){return L(e,t)}}))),c.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},c.a.createElement("div",{className:""},c.a.createElement(v.a,null,"Return Quantity"),c.a.createElement(b.a,{type:"number",name:"returnQty",placeholder:"Return Quantity",value:G.returnQty,onChange:function(e){return L(e,t)}}))))}))),c.a.createElement(u.a,null,c.a.createElement(i.a,{className:"mb-1",lg:"12",md:"12",sm:"12"},c.a.createElement("div",{className:" d-flex justify-content-end"},c.a.createElement(v.a,{className:"pr-5"},"Grand Total :",c.a.createElement("strong",null,_&&"NaN"==_?0:_))))),c.a.createElement(u.a,null,c.a.createElement(i.a,null,c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement(d.a.Ripple,{color:"primary",type:"submit",className:"mt-2"},"Submit")))))))))}}}]);
//# sourceMappingURL=460.d0fbe77c.chunk.js.map
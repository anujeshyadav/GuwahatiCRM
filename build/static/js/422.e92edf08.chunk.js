(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[422],{2987:function(e,t,a){"use strict";a.r(t);var l=a(8),n=a(25),c=a(24),r=a(1),i=a.n(r),o=(a(226),a(80)),u=(a(26),a(901)),s=a(893),m=a(894),d=a(238),v=a(905),b=a(895),p=a(896),E=a(897),f=(a(227),a(164)),y=a.n(f),N=(a(225),a(56)),O=[],j=[],S=[];t.default=function(e){var t=Object(r.useState)(""),a=Object(c.a)(t,2),f=(a[0],a[1]),g=Object(r.useState)(""),h=Object(c.a)(g,2),q=(h[0],h[1],Object(r.useState)("")),z=Object(c.a)(q,2),P=z[0],C=(z[1],Object(r.useState)([])),Q=Object(c.a)(C,2),D=Q[0],I=Q[1],T=Object(r.useState)([]),k=Object(c.a)(T,2),R=k[0],_=k[1],x=Object(r.useState)(""),w=Object(c.a)(x,2),U=w[0],J=w[1],L=Object(r.useState)([]),A=Object(c.a)(L,2),V=A[0],M=A[1],B=Object(r.useState)(0),G=Object(c.a)(B,2),F=G[0],H=G[1],K=Object(r.useState)(0),W=Object(c.a)(K,2),X=(W[0],W[1],Object(r.useState)({})),Y=Object(c.a)(X,2),Z=Y[0],$=Y[1],ee=Object(r.useState)(""),te=Object(c.a)(ee,2),ae=te[0],le=te[1],ne=Object(r.useState)([{productId:"",availableQty:"",qty:1,price:"",totalprice:"",Size:"",unitType:""}]),ce=Object(c.a)(ne,2),re=ce[0],ie=ce[1],oe=function(e,t,a){f(t),console.log(re);var l=e.target,c=l.name,r=l.value,i=Object(n.a)(re);i[t][c]=Number(r);var o=0;i.length>0&&(o=(null===i||void 0===i?void 0:i.map((function(e){return console.log(e.qty*e.price),O[t]=e.Size*e.qty*e.price,i[t].totalprice=e.Size*e.qty*e.price,e.Size*e.qty*e.price}))).reduce((function(e,t){return e+t})));console.log(i),ie(i),H(o)},ue=null===re||void 0===re?void 0:re.reduce((function(e,t){return e+t.totalprice}),0);console.log(ue);Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"))._id;Object(N.Ib)(e).then((function(e){console.log(null===e||void 0===e?void 0:e.Product),I(null===e||void 0===e?void 0:e.Product)})).catch((function(e){console.log(e)})),Object(N.t)(e).then((function(e){_(e.Party)})).catch((function(e){console.log(e)})),Object(N.pc)(e).then((function(e){console.log(e.Unit),M(e.Unit)})).catch((function(e){console.log(e)}))}),[]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));$(e)}),[]);var se=function(){ie([].concat(Object(n.a)(re),[{productId:"",availableQty:"",qty:1,price:"",totalprice:"",unitQty:"",unitType:""}]))},me=function(e){var t=Object(n.a)(re);t.splice(e,1),O.splice(e,1);var a=O.reduce((function(e,t){return e+t}),0);H(a),ie(t)},de=function(e,t,a){console.log(e),console.log(a)};return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(s.a,{className:"m-2"},i.a.createElement(m.a,{className:""},i.a.createElement("div",null,i.a.createElement("h1",{className:""},"Create Sales Order"))),i.a.createElement(m.a,null,i.a.createElement(o.b,{render:function(e){var t=e.history;return i.a.createElement(d.a,{className:"btn float-right",color:"danger",size:"sm",onClick:function(){return t.push("/app/softnumen/order/orderList")}},"Back")}}))),i.a.createElement(v.a,null,i.a.createElement(b.a,{className:"m-1",onSubmit:function(e){e.preventDefault();var t=(null===Z||void 0===Z?void 0:Z.firstName)+" "+(null===Z||void 0===Z?void 0:Z.lastName),a={userId:null===Z||void 0===Z?void 0:Z._id,fullName:t,address:null===Z||void 0===Z?void 0:Z.currentAddress,grandTotal:F,MobileNo:null===Z||void 0===Z?void 0:Z.mobileNumber,country:null===Z||void 0===Z?void 0:Z.Country,state:null===Z||void 0===Z?void 0:Z.State,city:null===Z||void 0===Z?void 0:Z.City,orderItems:re,DateofDelivery:ae,partyId:U};console.log(a),P?swal("Error occured while Entering Details"):Object(N.Tb)(ObjOrder).then((function(e){swal("Order Created Successfully")})).catch((function(e){console.log(e)}))}},i.a.createElement(s.a,null,i.a.createElement(m.a,{className:"mb-1",lg:"4",md:"4",sm:"12"},i.a.createElement("div",{className:""},i.a.createElement(p.a,null,"Choose Party"),i.a.createElement(y.a,{required:!0,selectionLimit:1,isObject:"false",options:R,onSelect:function(e,t){return function(e,t,a){J(t._id)}(0,t)},onRemove:de,displayValue:"firstName"}))),i.a.createElement(m.a,{className:"mb-1",lg:"4",md:"4",sm:"12"},i.a.createElement("div",{className:""},i.a.createElement(p.a,null,"Expected Delivery Date"),i.a.createElement(E.a,{required:!0,type:"date",name:"DateofDelivery",value:ae,onChange:function(e){return le(e.target.value)}}))),i.a.createElement(m.a,{className:"mb-1",lg:"4",md:"4",sm:"12"})),re&&(null===re||void 0===re?void 0:re.map((function(e,t){return i.a.createElement(s.a,{className:"",key:t},console.log(e),i.a.createElement(m.a,{className:"mb-1"},i.a.createElement("div",{className:""},i.a.createElement(p.a,null,"ProductName"),i.a.createElement(y.a,{required:!0,selectionLimit:1,isObject:"false",options:D,onSelect:function(e,a){return function(e,t,a){j.push(t),ie((function(e){var c=Object(n.a)(e),r=Object(l.a)({},c[a]);return r.price=t.Product_MRP,r.productId=t._id,r.availableQty=t.Size,c[a]=r,c}))}(0,a,t)},onRemove:function(e,a){de(e,0,t)},displayValue:"Product_Title"}))),i.a.createElement(m.a,{className:"mb-1"},i.a.createElement("div",{className:""},i.a.createElement(p.a,null,"Available Size"),i.a.createElement(E.a,{type:"number",disabled:!0,name:"availableQty",placeholder:"AvailableSize",value:null===e||void 0===e?void 0:e.availableQty}))),i.a.createElement(m.a,{className:"mb-1"},i.a.createElement("div",{className:""},i.a.createElement(p.a,null,"Required Size"),i.a.createElement(E.a,{type:"number",name:"qty",min:0,placeholder:"Req_Qty",required:!0,autocomplete:"off",value:null===e||void 0===e?void 0:e.qty,onChange:function(a){return oe(a,t,null===e||void 0===e||e.availableQty)}}))),i.a.createElement(m.a,{className:"mb-1"},i.a.createElement("div",{className:""},i.a.createElement(p.a,null,"Choose Unit"),i.a.createElement(y.a,{required:!0,selectionLimit:1,isObject:"false",options:V,onSelect:function(e,a){return function(e,t,a){S.push(t),ie((function(e){var c=Object(n.a)(e),r=Object(l.a)({},c[a]);r.Size=t.unitQty,r.unitType=t.primaryUnit,c[a]=r;var i=(null===e||void 0===e?void 0:e.map((function(e,t){var l,n;c[a].totalprice=(null===e||void 0===e?void 0:e.qty)*e.price*(null===(l=S[t])||void 0===l?void 0:l.unitQty);var r=(null===e||void 0===e?void 0:e.price)*e.qty*(null===(n=S[t])||void 0===n?void 0:n.unitQty);return O[a]=r,r}))).reduce((function(e,t){return e+t}));return console.log(i),H(i),c}))}(0,a,t)},onRemove:function(e,a){de(e,0,t)},displayValue:"primaryUnit"}))),i.a.createElement(m.a,{className:"mb-1"},i.a.createElement("div",{className:""},i.a.createElement(p.a,null,"Price"),i.a.createElement(E.a,{type:"number",name:"price",disabled:!0,placeholder:"Price",value:e.price}))),i.a.createElement(m.a,{className:"mb-1"},i.a.createElement("div",{className:""},i.a.createElement(p.a,null,"Total Price"),i.a.createElement(E.a,{type:"number",name:"totalprice",disabled:!0,placeholder:"TtlPrice",value:e.Size*e.price*e.qty}))),i.a.createElement(m.a,{className:"d-flex mt-1 abb"},i.a.createElement("div",{className:"btnStyle"},t?i.a.createElement(d.a,{type:"button",color:"danger",className:"button remove ",size:"sm",onClick:function(){return me(t)}},"-"):null),i.a.createElement("div",{className:"btnStyle"},i.a.createElement(d.a,{className:"ml-1 mb-1",color:"primary",type:"button",size:"sm",onClick:function(){return se()}},"+"))))}))),i.a.createElement(s.a,null,i.a.createElement(m.a,{className:"mb-1",lg:"12",md:"12",sm:"12"},i.a.createElement("div",{className:" d-flex justify-content-end"},i.a.createElement("ul",{className:"subtotal"},i.a.createElement("li",null,i.a.createElement(p.a,{className:"pr-5"},"Grand Total:",i.a.createElement("span",{className:"p-2"},F&&"NaN"==F?0:F))))))),i.a.createElement(s.a,null,i.a.createElement(m.a,null,i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement(d.a.Ripple,{color:"primary",type:"submit",className:"mt-2"},"Submit")))))))))}}}]);
//# sourceMappingURL=422.e92edf08.chunk.js.map
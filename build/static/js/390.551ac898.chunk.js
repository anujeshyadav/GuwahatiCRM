(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[390],{3080:function(e,t,a){"use strict";a.r(t);var n=a(7),l=a(25),c=a(24),r=a(1),o=a.n(r),i=a(909),u=a(901),s=a(902),m=a(243),d=a(913),v=a(903),b=a(904),p=a(905),E=(a(233),a(134)),f=a.n(E),g=(a(231),a(53)),O=a(83),y=[],j=[];t.default=function(e){var t=Object(r.useState)(""),a=Object(c.a)(t,2),E=(a[0],a[1]),N=Object(r.useState)(""),h=Object(c.a)(N,2),S=h[0],P=h[1],q=Object(r.useState)(""),D=Object(c.a)(q,2),_=D[0],C=D[1],R=Object(r.useState)(""),k=Object(c.a)(R,2),I=k[0],T=(k[1],Object(r.useState)([])),w=Object(c.a)(T,2),x=w[0],J=w[1],M=Object(r.useState)([]),Q=Object(c.a)(M,2),A=(Q[0],Q[1]),B=Object(r.useState)(""),F=Object(c.a)(B,2),L=F[0],V=F[1],G=Object(r.useState)(0),K=Object(c.a)(G,2),z=(K[0],K[1]),H=Object(r.useState)(0),U=Object(c.a)(H,2),W=U[0],X=U[1],Y=Object(r.useState)({}),Z=Object(c.a)(Y,2),$=Z[0],ee=Z[1],te=Object(r.useState)([]),ae=Object(c.a)(te,2),ne=(ae[0],ae[1]),le=Object(r.useState)([]),ce=Object(c.a)(le,2),re=ce[0],oe=ce[1],ie=Object(r.useState)([{product:"",productId:"",availableQty:"",qty:1,price:"",totalprice:"",Salespersonname:"",targetstartDate:"",targetEndDate:""}]),ue=Object(c.a)(ie,2),se=ue[0],me=ue[1],de=function(e,t){E(t);var a=e.target,n=a.name,c=a.value,r=Object(l.a)(se);r[t][n]=c;var o=0;r.length>0&&(o=(null===r||void 0===r?void 0:r.map((function(e){return y[t]=e.qty*e.price,r[t].totalprice=e.qty*e.price,e.qty*e.price}))).reduce((function(e,t){return e+t})));me(r),X(o)},ve=function(e,t,a){j.splice(a,1);var n=(null===se||void 0===se?void 0:se.map((function(e,n){var l,c;console.log((null===e||void 0===e?void 0:e.qty)*(null===(l=t[n])||void 0===l?void 0:l.Product_MRP));var r=(null===e||void 0===e?void 0:e.qty)*(null===(c=j[n])||void 0===c?void 0:c.Product_MRP);return y[a]=r,r}))).reduce((function(e,t){return e+t}));X(n||0)},be=function(e,t,a){j.push(t),me((function(e){var c=Object(l.a)(e),r=Object(n.a)({},c[a]);r.price=null===t||void 0===t?void 0:t.Product_MRP,r.productId=null===t||void 0===t?void 0:t._id,c[a]=r;var o=(null===e||void 0===e?void 0:e.map((function(e,t){var n,l=(null===e||void 0===e?void 0:e.qty)*(null===(n=j[t])||void 0===n?void 0:n.Product_MRP);return y[a]=l,l}))).reduce((function(e,t){return e+t}));return X(o),r.totalprice=o,c}));var c=Object(l.a)(se).map((function(e){e.totalprice}));z(c)};Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));Object(g.i)(null===e||void 0===e?void 0:e._id).then((function(e){oe(null===e||void 0===e?void 0:e.adminDetails)})).catch((function(e){return console.log(e)})),Object(g.F)().then((function(e){ne(null===e||void 0===e?void 0:e.SalesPerson)})).catch((function(e){return console.log(e)})),Object(g.Kb)(e._id).then((function(e){J(null===e||void 0===e?void 0:e.Product)})).catch((function(e){console.log(e)})),Object(g.t)().then((function(e){A(e.Party)})).catch((function(e){console.log(e)}))}),[]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));ee(e)}),[]);var pe=function(){me([].concat(Object(l.a)(se),[{product:"",productId:"",availableQty:"",qty:1,price:"",totalprice:"",Salespersonname:"",targetstartDate:"",targetEndDate:""}]))},Ee=function(e){var t=Object(l.a)(se);t.splice(e,1),y.splice(e,1);var a=y.reduce((function(e,t){return e+t}));X(a),me(t)};return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(i.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(s.a,{className:""},o.a.createElement("div",null,o.a.createElement("h1",{className:""},"Create Target"))),o.a.createElement(s.a,null,o.a.createElement("div",{className:"float-right"},o.a.createElement(O.b,{render:function(e){var t=e.history;return o.a.createElement(m.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",onClick:function(){return t.goBack()}},"Back")}})))),o.a.createElement(d.a,null,o.a.createElement(v.a,{className:"m-1",onSubmit:function(e){e.preventDefault();var t=null===se||void 0===se?void 0:se.map((function(e,t){return{productId:null===e||void 0===e?void 0:e.productId,qtyAssign:Number(null===e||void 0===e?void 0:e.qty),price:null===e||void 0===e?void 0:e.price,totalPrice:null===e||void 0===e?void 0:e.totalprice}}));if(null===L||void 0===L?void 0:L._id){var a={startDate:S,endDate:_,grandTotal:W,salesPersonId:null===L||void 0===L?void 0:L._id,products:t,created_by:null===$||void 0===$?void 0:$._id};I?swal("Error occured while Entering Details"):Object(g.J)(a).then((function(e){swal("Target Created Successfully")})).catch((function(e){console.log(e)}))}else swal("Error","Choose Sales Person First")}},o.a.createElement(u.a,null,o.a.createElement(s.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:""},o.a.createElement(b.a,null,"Choose Sales Person"),o.a.createElement(f.a,{required:!0,selectionLimit:1,isObject:"false",options:re,onSelect:function(e,t){V(t)},onRemove:function(e,t,a){console.log(e),console.log(a)},displayValue:"firstName"}))),o.a.createElement(s.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:""},o.a.createElement(b.a,null,"Start date"),o.a.createElement(p.a,{required:!0,type:"date",name:"targetEndDate",value:S,onChange:function(e){return P(e.target.value)}}))),o.a.createElement(s.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:""},o.a.createElement(b.a,null,"End Date"),o.a.createElement(p.a,{required:!0,type:"date",name:"targetstartDate",value:_,onChange:function(e){return C(e.target.value)}})))),se&&(null===se||void 0===se?void 0:se.map((function(e,t){return o.a.createElement(u.a,{className:"",key:t},o.a.createElement(s.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:""},o.a.createElement(b.a,null,"Product Name"),o.a.createElement(f.a,{required:!0,selectionLimit:1,isObject:"false",options:x,onSelect:function(e,a){return be(0,a,t)},onRemove:function(e,a){ve(0,a,t)},displayValue:"Product_Title"}))),o.a.createElement(s.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:""},o.a.createElement(b.a,null,"Quantity Assign"),o.a.createElement(p.a,{type:"number",name:"qty",min:0,autoComplete:"off",placeholder:"Req_Qty",value:null===e||void 0===e?void 0:e.qty,onChange:function(e){return de(e,t)}}))),o.a.createElement(s.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:""},o.a.createElement(b.a,null,"Price"),o.a.createElement(p.a,{type:"number",name:"price",readOnly:!0,placeholder:"Price",value:e.price}))),o.a.createElement(s.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:""},o.a.createElement(b.a,null,"Total Price"),o.a.createElement(p.a,{type:"number",name:"totalprice",readOnly:!0,placeholder:"TtlPrice",value:e.price*(null===e||void 0===e?void 0:e.qty)}))),o.a.createElement(s.a,{className:"d-flex mt-1 abb",lg:"3",md:"3",sm:"12"},o.a.createElement("div",{className:"btnStyle"},t?o.a.createElement(m.a,{type:"button",color:"danger",className:"button remove ",onClick:function(){return Ee(t)}},"- Remove"):null),o.a.createElement("div",{className:"btnStyle"},o.a.createElement(m.a,{className:"ml-1 mb-1",color:"primary",type:"button",onClick:function(){return pe()}},"+ Add"))))}))),o.a.createElement(u.a,null,o.a.createElement(s.a,{className:"mb-1",lg:"12",md:"12",sm:"12"},o.a.createElement("div",{className:" d-flex justify-content-end"},o.a.createElement(b.a,{className:"pr-5"},"Grand Total : ",o.a.createElement("strong",null,W))))),o.a.createElement(u.a,null,o.a.createElement(s.a,null,o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement(m.a.Ripple,{color:"primary",type:"submit",className:"mt-2"},"Submit")))))))))}}}]);
//# sourceMappingURL=390.551ac898.chunk.js.map
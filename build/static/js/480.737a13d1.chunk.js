(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[480],{3079:function(e,t,a){"use strict";a.r(t);var n=a(60),l=a(9),o=a(26),m=a(1),r=a.n(m),u=(a(233),a(85)),c=(a(27),a(912)),i=a(904),d=a(905),v=a(244),s=a(916),E=a(906),b=a(907),y=a(894),p=a(908),g=(a(234),a(135)),N=a.n(g),h=(a(232),a(40)),O=a(5),f=a(72),j=a.n(f);t.default=function(e){var t=Object(m.useState)(""),a=Object(o.a)(t,2),g=a[0],f=(a[1],Object(m.useState)("")),P=Object(o.a)(f,2),S=P[0],C=P[1],T=Object(m.useState)([]),I=Object(o.a)(T,2),q=I[0],A=I[1],k=Object(m.useState)("Create"),x=Object(o.a)(k,2),D=x[0],B=x[1],w=Object(m.useState)({}),J=Object(o.a)(w,2),_=J[0],M=J[1],W=Object(m.useState)(""),z=Object(o.a)(W,2),R=z[0],V=z[1],F=Object(m.useState)(0),G=Object(o.a)(F,2),L=(G[0],G[1],Object(m.useState)({})),Q=Object(o.a)(L,2),U=Q[0],H=Q[1],K=Object(m.useState)({}),X=Object(o.a)(K,2),Y=X[0],Z=X[1],$=Object(m.useState)([{productId:"",availableQty:"",qty:1,price:"",Size:"",unitType:"",totalprice:""}]),ee=Object(o.a)($,2),te=(ee[0],ee[1],Object(u.g)()),ae=Object(u.i)();Object(m.useEffect)((function(){console.log(null===ae||void 0===ae?void 0:ae.id);var e=null===ae||void 0===ae?void 0:ae.id;0==e?B("Create"):(B("Edit"),Object(h.id)(O.be,e).then((function(e){var t,a,n=null===e||void 0===e?void 0:e.Product;M(null===n||void 0===n?void 0:n.partyId),V(null===n||void 0===n||null===(t=n.partyId)||void 0===t?void 0:t._id);var l={Paymentmode:null===n||void 0===n?void 0:n.paymentMode,PaymentType:null===n||void 0===n?void 0:n.paymentType,Amount:null===n||void 0===n?void 0:n.amount,Date:null===n||void 0===n||null===(a=n.createdAt)||void 0===a?void 0:a.split("T")[0],Note:null===n||void 0===n?void 0:n.note,Title:null===n||void 0===n?void 0:n.title,InstrumentNumber:null===n||void 0===n?void 0:n.instrumentNo};C(null===n||void 0===n?void 0:n.paymentType),Z(l)})).catch((function(e){console.log(e)})));var t=JSON.parse(localStorage.getItem("userData"));Object(h.m)(null===t||void 0===t?void 0:t._id,null===t||void 0===t?void 0:t.database).then((function(e){var t=null===e||void 0===e?void 0:e.Customer;(null===t||void 0===t?void 0:t.length)&&A(t)})).catch((function(e){console.log(e)}))}),[]),Object(m.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));H(e)}),[]);console.log(Y);var ne=function(e){var t=e.target,a=t.name,o=t.value;Z(Object(l.a)(Object(l.a)({},Y),{},Object(n.a)({},a,o)))};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(i.a,{className:"m-2"},r.a.createElement(d.a,{className:""},r.a.createElement("div",null,r.a.createElement("h1",{className:""},D&&D," Payment"))),r.a.createElement(d.a,null,r.a.createElement(u.b,{render:function(e){var t=e.history;return r.a.createElement(v.a,{className:"btn float-right",color:"danger",size:"sm",onClick:function(){return t.goBack()}},"Back")}}))),r.a.createElement(s.a,null,r.a.createElement(E.a,{className:"m-1",onSubmit:function(e){e.preventDefault();var t=null===ae||void 0===ae?void 0:ae.id,a={created_by:null===U||void 0===U?void 0:U._id,paymentType:null===Y||void 0===Y?void 0:Y.PaymentType,paymentMode:null===Y||void 0===Y?void 0:Y.Paymentmode,partyId:R||null,amount:(null===Y||void 0===Y?void 0:Y.Amount)?Number(null===Y||void 0===Y?void 0:Y.Amount):null,instrumentNo:(null===Y||void 0===Y?void 0:Y.InstrumentNumber)?null===Y||void 0===Y?void 0:Y.InstrumentNumber:null,note:(null===Y||void 0===Y?void 0:Y.Note)?null===Y||void 0===Y?void 0:Y.Note:null,title:(null===Y||void 0===Y?void 0:Y.Title)?null===Y||void 0===Y?void 0:Y.Title:null,database:null===U||void 0===U?void 0:U.database,type:"Payment"};0==t?g?j()("Error occured while Entering Details"):Object(h.kd)(O.J,a).then((function(e){j()("Added Successfully"),te.goBack()})).catch((function(e){j()("Somthing went Wrong"),console.log(e)})):Object(h.ld)(O.Gd,t,a).then((function(e){console.log(e),te.goBack(),j()("Updated Successfully")})).catch((function(e){console.log(e),j()("Something Went Wrong")}))}},r.a.createElement(i.a,null,r.a.createElement(d.a,{className:"mb-1",lg:"4",md:"4",sm:"12"},r.a.createElement(b.a,null,"Choose Paymen Mode"),r.a.createElement(y.a,{required:!0,value:null===Y||void 0===Y?void 0:Y.Paymentmode,name:"Paymentmode",onChange:ne,type:"select"},r.a.createElement("option",null,"--Select--"),r.a.createElement("option",{value:"Cash"},"Cash"),r.a.createElement("option",{value:"Bank"},"Bank"))),r.a.createElement(d.a,{className:"mb-1",lg:"4",md:"4",sm:"12"},r.a.createElement(b.a,null,"Choose Payment Type"),r.a.createElement(y.a,{required:!0,value:null===Y||void 0===Y?void 0:Y.PaymentType,name:"PaymentType",onChange:function(e){C(e.target.value),ne(e)},type:"select"},r.a.createElement("option",null,"--Select--"),r.a.createElement("option",{value:"partyPayment"},"Party Payment"),r.a.createElement("option",{value:"otherPayment"},"Other Payment")))),S&&"partyPayment"==S&&r.a.createElement(i.a,null,r.a.createElement(d.a,{className:"mb-1",lg:"4",md:"4",sm:"12"},r.a.createElement("div",{className:""},r.a.createElement(b.a,null,"Choose Party"),r.a.createElement(N.a,{required:!0,selectedValues:[_],selectionLimit:1,isObject:"false",options:q,onSelect:function(e,t){return function(e,t){V(null===t||void 0===t?void 0:t._id)}(0,t)},onRemove:function(e,t,a){console.log(e)},displayValue:"OwnerName"}))),(null===Y||void 0===Y?void 0:Y.Paymentmode)&&"Bank"==(null===Y||void 0===Y?void 0:Y.Paymentmode)&&r.a.createElement(d.a,{className:"mb-1",lg:"4",md:"4",sm:"12"},r.a.createElement(b.a,null,"Instrument/Trx Number *"),r.a.createElement(p.a,{required:!0,placeholder:"Enter Instrument Number",type:"text",value:null===Y||void 0===Y?void 0:Y.InstrumentNumber,name:"InstrumentNumber",onChange:ne})),r.a.createElement(d.a,{className:"mb-1",lg:"4",md:"4",sm:"12"},r.a.createElement(b.a,null,"Amount"),r.a.createElement(p.a,{required:!0,placeholder:"Enter Amount",type:"number",value:null===Y||void 0===Y?void 0:Y.Amount,name:"Amount",onChange:ne})),r.a.createElement(d.a,{className:"mb-1",lg:"4",md:"4",sm:"12"},r.a.createElement(b.a,null,"Date"),r.a.createElement(p.a,{required:!0,type:"date",value:null===Y||void 0===Y?void 0:Y.Date,name:"Date",onChange:ne})),r.a.createElement(d.a,{className:"mb-1",lg:"4",md:"4",sm:"12"},r.a.createElement(b.a,null,"Note :"),r.a.createElement("textarea",{required:!0,type:"text",placeholder:"Enter Notes ...",className:"form-control",value:null===Y||void 0===Y?void 0:Y.Note,name:"Note",onChange:ne}))),S&&"otherPayment"==S&&r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(d.a,{className:"mb-1",lg:"4",md:"4",sm:"12"},r.a.createElement(b.a,null,"Title"),r.a.createElement(p.a,{required:!0,type:"text",placeholder:"Enter Title ",name:"Title",value:null===Y||void 0===Y?void 0:Y.Title,onChange:ne})),(null===Y||void 0===Y?void 0:Y.Paymentmode)&&"Bank"==(null===Y||void 0===Y?void 0:Y.Paymentmode)&&r.a.createElement(d.a,{className:"mb-1",lg:"4",md:"4",sm:"12"},r.a.createElement(b.a,null,"Instrument/Trx Number *"),r.a.createElement(p.a,{required:!0,placeholder:"Enter Instrument Number",type:"text",value:null===Y||void 0===Y?void 0:Y.InstrumentNumber,name:"InstrumentNumber",onChange:ne})),r.a.createElement(d.a,{className:"mb-1",lg:"4",md:"4",sm:"12"},r.a.createElement(b.a,null,"Amount"),r.a.createElement(p.a,{required:!0,type:"number",placeholder:"Enter Amount",value:null===Y||void 0===Y?void 0:Y.Amount,name:"Amount",onChange:ne})),r.a.createElement(d.a,{className:"mb-1",lg:"4",md:"4",sm:"12"},r.a.createElement(b.a,null,"Date"),r.a.createElement(p.a,{required:!0,type:"date",value:null===Y||void 0===Y?void 0:Y.Date,name:"Date",onChange:ne})),r.a.createElement(d.a,{className:"mb-1",lg:"4",md:"4",sm:"12"},r.a.createElement(b.a,null,"Note :"),r.a.createElement("textarea",{required:!0,type:"text",placeholder:"Enter Note...",className:"form-control",value:null===Y||void 0===Y?void 0:Y.Note,name:"Note",onChange:ne})))),r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(v.a.Ripple,{color:"primary",type:"submit",className:"mt-2"},"Submit")))))))))}}}]);
//# sourceMappingURL=480.737a13d1.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[312],{2988:function(e,a,t){"use strict";t.r(a);var l=t(24),n=t(25),c=t(1),r=t.n(c),o=t(901),u=t(893),s=t(894),m=t(237),d=t(905),i=t(895),b=t(896),E=t(897),v=t(941),p=(t(226),t(79)),f=(t(224),t(56));a.default=function(e){var a,t=Object(c.useState)(-1),h=Object(n.a)(t,2),N=(h[0],h[1]),g=Object(c.useState)(""),j=Object(n.a)(g,2),O=j[0],y=(j[1],Object(c.useState)(0)),S=Object(n.a)(y,2),T=S[0],k=S[1],P=Object(c.useState)({}),w=Object(n.a)(P,2),C=(w[0],w[1]),I=Object(c.useState)({}),q=Object(n.a)(I,2),x=(q[0],q[1]),G=Object(c.useState)(""),R=Object(n.a)(G,2),_=R[0],H=R[1],M=(Object(p.i)(),Object(p.h)()),z=Object(c.useState)([{product:"",productId:"",availableQty:"",qty:1,price:"",grandTotal:""}]),D=Object(n.a)(z,2),F=D[0],J=D[1],B=function(e){console.log(e.target.value),H(e.target.value)},Q=function(e,a){N(a);var t=e.target,n=t.name,c=t.value,r=null===F||void 0===F?void 0:F.orderItems,o=Object(l.a)(r);o[a][n]=c,console.log(o),J(o)};Object(c.useEffect)((function(){var e;J(M.state),H(M.state.fullName),C(null===M||void 0===M?void 0:M.state),k(null===M||void 0===M||null===(e=M.state)||void 0===e?void 0:e.grandTotal)}),[]),Object(c.useEffect)((function(){J(M.state),C(null===M||void 0===M?void 0:M.state)}),[F]),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));x(e)}),[]);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(u.a,{className:"m-2"},r.a.createElement(s.a,{className:""},r.a.createElement("div",null,r.a.createElement("h1",{className:""},"Edit PurchaseOrder"))),r.a.createElement(s.a,null,r.a.createElement("div",{className:"float-right"},r.a.createElement(p.b,{render:function(e){var a=e.history;return r.a.createElement(m.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",size:"sm",onClick:function(){return a.goBack()}},"Back")}})))),r.a.createElement(d.a,null,r.a.createElement(i.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),console.log(F,F.orderItems);var a=F.orderItems.map((function(e){var a;return{productId:null===e||void 0===e||null===(a=e.product)||void 0===a?void 0:a._id,qty:Number(null===e||void 0===e?void 0:e.qty)}})),t={fullName:_,orderItems:a};console.log(t),O?swal("Error occured while Entering Details"):Object(f.Ib)(t,F._id).then((function(e){console.log(e),swal("PurchaseOrder  Edited Successfully")})).catch((function(e){console.log(e)}))}},r.a.createElement(s.a,{className:"mb-1",lg:"4",md:"4",sm:"12"},r.a.createElement("div",{className:""},r.a.createElement(b.a,null,"FullName"),r.a.createElement(E.a,{required:!0,type:"text",name:"FullName",placeholder:"FullName",value:_,onChange:B}))),F&&(null===F||void 0===F||null===(a=F.orderItems)||void 0===a?void 0:a.map((function(e,a){return r.a.createElement(u.a,{className:"",key:a},r.a.createElement(s.a,{className:"mb-1"},r.a.createElement("div",{className:""},r.a.createElement(b.a,null,"Product Name"),r.a.createElement(E.a,{type:"text",placeholder:"ProductName",name:"Product_Title",disabled:!0,value:e.product.Product_Title,onChange:function(e){return B(e)}}))),r.a.createElement(s.a,null,r.a.createElement(v.a,null,r.a.createElement(b.a,null,"Price"),r.a.createElement(E.a,{type:"number",disabled:!0,placeholder:"Price",name:"Price",value:e.price}))),r.a.createElement(s.a,null,r.a.createElement(v.a,null,r.a.createElement(b.a,null,"Size"),r.a.createElement(E.a,{type:"number",placeholder:"Size",name:"qty",value:e.qty,onChange:function(e){return Q(e,a)}}))),r.a.createElement(s.a,null,r.a.createElement(v.a,null,r.a.createElement(b.a,null,"GST Rate"),r.a.createElement(E.a,{type:"number",placeholder:"GST Rate",disabled:!0,name:"GSTRate",value:e.product["GST Rate"]}))),r.a.createElement(s.a,null,r.a.createElement(v.a,null,r.a.createElement(b.a,null,"HST Code"),r.a.createElement(E.a,{type:"number",placeholder:"HSTCode",name:"HSTCode",disabled:!0,value:e.product.HSN_Code}))))}))),r.a.createElement(u.a,null,r.a.createElement(s.a,{className:"mb-1",lg:"12",md:"12",sm:"12"},r.a.createElement("div",{className:" d-flex justify-content-end"},r.a.createElement(b.a,{className:"pr-5"},"Grand Total : ",r.a.createElement("stron",null,T))))),r.a.createElement(u.a,null,r.a.createElement(s.a,null,r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(m.a.Ripple,{color:"primary",type:"submit",className:"mt-2"},"Submit")))))))))}},941:function(e,a,t){"use strict";var l=t(9),n=t(12),c=t(1),r=t.n(c),o=t(2),u=t.n(o),s=t(8),m=t.n(s),d=t(4),i=["className","cssModule","row","disabled","check","inline","tag"],b={children:u.a.node,row:u.a.bool,check:u.a.bool,inline:u.a.bool,disabled:u.a.bool,tag:d.tagPropType,className:u.a.string,cssModule:u.a.object},E=function(e){var a=e.className,t=e.cssModule,c=e.row,o=e.disabled,u=e.check,s=e.inline,b=e.tag,E=Object(n.a)(e,i),v=Object(d.mapToCssModules)(m()(a,!!c&&"row",u?"form-check":"form-group",!(!u||!s)&&"form-check-inline",!(!u||!o)&&"disabled"),t);return"fieldset"===b&&(E.disabled=o),r.a.createElement(b,Object(l.a)({},E,{className:v}))};E.propTypes=b,E.defaultProps={tag:"div"},a.a=E}}]);
//# sourceMappingURL=312.b9cc7131.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[378],{2853:function(e,t,l){"use strict";l.r(t);var a=l(55),o=l(7),n=l(25),i=l(1),u=l.n(i),r=l(901),c=l(893),d=l(894),s=l(905),v=l(895),m=l(943),p=l(896),b=l(897),g=l(883),f=l(237),O=l(225),E=l.n(O),j=l(1709),h=l.n(j),y=l(918),S=(l(26),l(6)),C=l(56),_=void 0;t.default=function(){var e,t,l,O,j,w,x,N,R,D,J,M,k,L,z,H,P,X=Object(i.useState)({hub_name:"",desc:"",email:"",phone:"",address:"",d_zone:"",cat:"",subcat:"",status:""}),q=Object(n.a)(X,2),A=q[0],B=(q[1],Object(i.useState)(null)),F=Object(n.a)(B,2),G=F[0],I=(F[1],Object(i.useState)(null)),K=Object(n.a)(I,2),Q=(K[0],K[1],Object(i.useState)({})),T=Object(n.a)(Q,2),U=T[0],V=T[1],W=Object(i.useState)(null),Y=Object(n.a)(W,2),Z=(Y[0],Y[1],Object(i.useState)({})),$=Object(n.a)(Z,2),ee=$[0],te=$[1],le=Object(i.useState)({}),ae=Object(n.a)(le,2),oe=ae[0],ne=ae[1];Object(i.useEffect)((function(){Object(C.R)().then((function(e){var t=E.a.xml2json(e.data,{compact:!0,spaces:2});console.log(JSON.parse(t)),te(JSON.parse(t)),ne(JSON.parse(t)),h.a.parseString(null===e||void 0===e?void 0:e.data,(function(e,t){e?console.error("Error parsing XML:",e):console.log(t.ProductRgistration)}))})).catch((function(e){console.log(e)}))}),[]),Object(i.useEffect)((function(){console.log(G),console.log(null===G||void 0===G?void 0:G.isoCode),console.log(null===y.a||void 0===y.a?void 0:y.a.getStatesOfCountry(null===G||void 0===G?void 0:G.isoCode))}),[G]);var ie=function(e){var t=e.target,l=t.name,n=t.value;V(Object(o.a)(Object(o.a)({},U),{},Object(a.a)({},l,n)))};return u.a.createElement("div",null,u.a.createElement(r.a,null,u.a.createElement(c.a,{className:"m-2"},u.a.createElement(d.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Customer Registration"))),u.a.createElement(s.a,null,u.a.createElement(v.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),console.log("submitHandler",A),S.a.post("/admin/addcategory",A).then((function(e){console.log(e),_.props.history.push("/app/freshlist/order/orderList")})).catch((function(e){console.log(e)}))}},u.a.createElement(c.a,{className:"mb-2"},ee&&(null===(e=ee.CustomerRegistration)||void 0===e||null===(t=e.input)||void 0===t?void 0:t.map((function(e,t){var l,a,o,n,i;return u.a.createElement(d.a,{key:t,lg:"6",md:"6",sm:"12"},u.a.createElement(m.a,null,u.a.createElement(p.a,null,null===e||void 0===e||null===(l=e.label)||void 0===l?void 0:l._text),u.a.createElement(b.a,{type:null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.type,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:U[null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text],placeholder:null===e||void 0===e||null===(i=e.placeholder)||void 0===i?void 0:i._text,onChange:ie})))}))),u.a.createElement(d.a,{lg:"6",md:"6"},u.a.createElement(p.a,null,oe&&(null===oe||void 0===oe||null===(l=oe.CustomerRegistration)||void 0===l||null===(O=l.MyDropdown)||void 0===O||null===(j=O.dropdown)||void 0===j||null===(w=j.label)||void 0===w?void 0:w._text)),u.a.createElement(g.a,{type:"select",className:"form-control",name:null===oe||void 0===oe||null===(x=oe.CustomerRegistration)||void 0===x||null===(N=x.MyDropdown)||void 0===N||null===(R=N.dropdown)||void 0===R||null===(D=R.name)||void 0===D?void 0:D._text,value:U[null===oe||void 0===oe||null===(J=oe.CustomerRegistration)||void 0===J||null===(M=J.MyDropdown)||void 0===M||null===(k=M.dropdown)||void 0===k||null===(L=k.name)||void 0===L?void 0:L._text],onChange:ie},u.a.createElement("option",{value:""},"Select an option"),null===oe||void 0===oe||null===(z=oe.CustomerRegistration)||void 0===z||null===(H=z.MyDropdown)||void 0===H||null===(P=H.dropdown)||void 0===P?void 0:P.option.map((function(e,t){var l,a;return u.a.createElement("option",{key:t,value:null===e||void 0===e||null===(l=e._attributes)||void 0===l?void 0:l.value},null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.value)}))))),u.a.createElement(c.a,{className:"m-2"},u.a.createElement(f.a,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Customer Registration"))))))}}}]);
//# sourceMappingURL=378.db46a25d.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[291],{3018:function(e,t,a){"use strict";a.r(t);var l=a(55),n=a(7),c=a(25),o=a(1),r=a.n(o),i=a(225),s=a.n(i),u=(a(162),a(164)),d=a.n(u),m=a(901),b=a(893),v=a(894),p=a(237),O=a(905),j=a(895),f=a(896),g=a(943),h=a(897),E=a(91),S=a.n(E),y=a(80),N=(a(226),a(26),a(633),a(56)),k=(a(224),[{id:1,state_title:"Clothing & Apparel."},{id:2,state_title:"Footwear & Shoes."},{id:3,state_title:"Electronics & Gadgets."}]);t.default=function(){var e,t,a=Object(o.useState)({}),i=Object(c.a)(a,2),u=i[0],E=i[1],_=Object(o.useState)({}),w=Object(c.a)(_,2),x=(w[0],w[1],Object(o.useState)({})),C=Object(c.a)(x,2),J=(C[0],C[1],Object(o.useState)({})),M=Object(c.a)(J,2),U=(M[0],M[1],Object(o.useState)([])),P=Object(c.a)(U,2),D=(P[0],P[1]),F=Object(o.useState)({}),R=Object(c.a)(F,2),T=R[0],q=R[1],A=Object(o.useState)(""),B=Object(c.a)(A,2),G=B[0],I=B[1],L=Object(o.useState)(""),V=Object(c.a)(L,2),X=V[0],$=V[1],z=Object(o.useState)({}),H=Object(c.a)(z,2);H[0],H[1];Object(o.useEffect)((function(){Object(N.M)().then((function(e){var t=s.a.xml2json(e.data,{compact:!0,spaces:2});console.log(JSON.parse(t).CreateUnit),E(JSON.parse(t))})).catch((function(e){console.log(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(b.a,{className:"m-2"},r.a.createElement(v.a,null,r.a.createElement("h1",{className:"float-left"},"Create Unit")),r.a.createElement(v.a,null,r.a.createElement(y.b,{render:function(e){var t=e.history;return r.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/softNumen/Unit/UnitList")}},"Back")}}))),r.a.createElement(O.a,null,r.a.createElement(j.a,{className:"m-1",onSubmit:function(e){if(e.preventDefault(),console.log(T),X)S()("Error occured while Entering Details");else{var t=JSON.parse(localStorage.getItem("userData"));T.created_by=null===t||void 0===t?void 0:t._id,Object(N.Xb)(T).then((function(e){console.log(e),e.status&&S()("".concat(e.message))})).catch((function(e){console.log(e)}))}}},r.a.createElement(b.a,{className:"mb-2"},r.a.createElement(v.a,{lg:"3",md:"3",sm:"12"},r.a.createElement(f.a,null,"Select Product"),r.a.createElement(d.a,{required:!0,showCheckbox:"true",isObject:"false",options:k,onSelect:function(e){D(e),console.log("Selected:",e)},onRemove:function(e){D(e),console.log("Removed:",e)},displayValue:"state_title"})),u&&(null===u||void 0===u||null===(e=u.CreateUnit)||void 0===e||null===(t=e.input)||void 0===t?void 0:t.map((function(e,t){var a,c,o,i,s,u;return r.a.createElement(v.a,{key:t,lg:"3",md:"3",sm:"12"},r.a.createElement(g.a,{key:t},r.a.createElement(f.a,null,null===e||void 0===e||null===(a=e.label)||void 0===a?void 0:a._text),r.a.createElement(h.a,{type:null===e||void 0===e||null===(c=e.type)||void 0===c||null===(o=c._attributes)||void 0===o?void 0:o.type,placeholder:null===e||void 0===e||null===(i=e.placeholder)||void 0===i?void 0:i._text,name:null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s._text,value:T[null===e||void 0===e||null===(u=e.name)||void 0===u?void 0:u._text],onChange:function(a){var c,o;return function(e,t,a){var c=e.target,o=c.name,r=c.value;console.log(r),I(a),"number"==t?/^\d{0,10}$/.test(r)?(q(Object(n.a)(Object(n.a)({},T),{},Object(l.a)({},o,r))),$("")):$("Please enter a valid number with a maximum length of 10 digits"):r.length<=10?(q(Object(n.a)(Object(n.a)({},T),{},Object(l.a)({},o,r))),$("")):q(Object(n.a)(Object(n.a)({},T),{},Object(l.a)({},o,r)))}(a,null===e||void 0===e||null===(c=e.type)||void 0===c||null===(o=c._attributes)||void 0===o?void 0:o.type,t)}}),G===t?r.a.createElement(r.a.Fragment,null,X&&r.a.createElement("span",{style:{color:"red"}},X)):r.a.createElement(r.a.Fragment,null)))})))),r.a.createElement("hr",null),r.a.createElement(b.a,null,r.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}},943:function(e,t,a){"use strict";var l=a(9),n=a(12),c=a(1),o=a.n(c),r=a(2),i=a.n(r),s=a(8),u=a.n(s),d=a(4),m=["className","cssModule","row","disabled","check","inline","tag"],b={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},v=function(e){var t=e.className,a=e.cssModule,c=e.row,r=e.disabled,i=e.check,s=e.inline,b=e.tag,v=Object(n.a)(e,m),p=Object(d.mapToCssModules)(u()(t,!!c&&"row",i?"form-check":"form-group",!(!i||!s)&&"form-check-inline",!(!i||!r)&&"disabled"),a);return"fieldset"===b&&(v.disabled=r),o.a.createElement(b,Object(l.a)({},v,{className:p}))};v.propTypes=b,v.defaultProps={tag:"div"},t.a=v}}]);
//# sourceMappingURL=291.b7ea3942.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[368],{3302:function(e,a,n){"use strict";n.r(a);var t=n(25),l=n(1),r=n.n(l),c=function(){return'<WhStockXml>\n \n     <input>\n         <label>ProductName</label>\n         <type type="text"></type>\n         <name>ProductName</name>\n         <placeholder>Enter ProductName</placeholder>\n     </input>\n \n     <input>\n         <label>InStock</label>\n         <type type="text"></type>\n         <name>InStock</name>\n         <placeholder>Enter InStock</placeholder>\n     </input>\n \n     <input>\n         <label>Damage</label>\n         <type type="text"></type>\n         <name>damage</name>\n         <number>yes</number>\n         <placeholder>Enter Damage</placeholder>\n     </input>\n     <input>\n         <label>Pending Delivery</label>\n         <type type="text"></type>\n         <name>PendingDelivery</name>\n         <number>yes</number>\n         <placeholder>Enter Pending Delivery</placeholder>\n     </input>\n </WhStockXml>'},o=n(233),i=n.n(o),m=n(910),u=n(902),s=n(903),d=n(244),p=n(914),b=n(904),v=n(937),h=n(905),y=n(906),E=n(84);a.default=function(){var e=Object(l.useState)([]),a=Object(t.a)(e,2),n=a[0],o=a[1];return Object(l.useEffect)((function(){var e,a,n=c(),t=i.a.xml2json(n,{compact:!0,spaces:2});console.log(JSON.parse(t).WhStockXml.input),o(null===(e=JSON.parse(t))||void 0===e||null===(a=e.WhStockXml)||void 0===a?void 0:a.input)}),[]),r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(u.a,{className:"m-2"},r.a.createElement(s.a,null,r.a.createElement("h1",{className:"float-left"},"WarehouseStock")),r.a.createElement(s.a,null,r.a.createElement(E.b,{render:function(e){var a=e.history;return r.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/softNumen/Unit/UnitList")}},"Back")}}))),r.a.createElement(p.a,null,r.a.createElement(b.a,{className:"m-1"},r.a.createElement(u.a,{className:"mb-2"},n&&(null===n||void 0===n?void 0:n.map((function(e,a){var n,t,l,c,o;return r.a.createElement(s.a,{lg:"4",md:"4",sm:"12"},r.a.createElement(v.a,null,r.a.createElement(h.a,null,null===e||void 0===e||null===(n=e.label)||void 0===n?void 0:n._text),r.a.createElement(y.a,{type:null===e||void 0===e||null===(t=e.type)||void 0===t||null===(l=t._attributes)||void 0===l?void 0:l.type,placeholder:null===e||void 0===e||null===(c=e.placeholder)||void 0===c?void 0:c._text,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text})))})))),r.a.createElement("hr",null),r.a.createElement(u.a,null,r.a.createElement(d.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit"))))))}},937:function(e,a,n){"use strict";var t=n(10),l=n(12),r=n(1),c=n.n(r),o=n(2),i=n.n(o),m=n(9),u=n.n(m),s=n(7),d=["className","cssModule","row","disabled","check","inline","tag"],p={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:s.tagPropType,className:i.a.string,cssModule:i.a.object},b=function(e){var a=e.className,n=e.cssModule,r=e.row,o=e.disabled,i=e.check,m=e.inline,p=e.tag,b=Object(l.a)(e,d),v=Object(s.mapToCssModules)(u()(a,!!r&&"row",i?"form-check":"form-group",!(!i||!m)&&"form-check-inline",!(!i||!o)&&"disabled"),n);return"fieldset"===p&&(b.disabled=o),c.a.createElement(p,Object(t.a)({},b,{className:v}))};b.propTypes=p,b.defaultProps={tag:"div"},a.a=b}}]);
//# sourceMappingURL=368.bb63b2aa.chunk.js.map
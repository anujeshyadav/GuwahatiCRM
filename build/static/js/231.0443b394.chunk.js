(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[231],{3003:function(e,a,t){"use strict";t.r(a);var n=t(55),l=t(7),o=t(45),c=t(1),u=t.n(c),r=t(629),i=t.n(r),s=t(898),m=t(890),d=t(891),v=t(173),b=t(902),p=t(892),E=t(939),f=t(893),h=t(894),j=t(161),O=t.n(j),g=t(78),y=t(162),k=t.n(y),x=(t(631),t(25),t(630),t(79));t(917),t(90);a.default=function(){var e,a,t=Object(c.useState)({}),r=Object(o.a)(t,2),j=r[0],y=r[1],N=Object(c.useState)({}),_=Object(o.a)(N,2),w=_[0],S=_[1],C=Object(c.useState)(""),F=Object(o.a)(C,2),D=F[0],W=F[1],J=Object(c.useState)(""),M=Object(o.a)(J,2),H=M[0],P=M[1],T=Object(c.useState)({}),K=Object(o.a)(T,2);K[0],K[1];Object(c.useEffect)((function(){Object(x.J)().then((function(e){var a=i.a.xml2json(e.data,{compact:!0,spaces:2});y(JSON.parse(a))})).catch((function(e){console.log(e)}))}),[]);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(s.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(d.a,null,u.a.createElement("h1",{className:"float-left"},"Create WareHouse")),u.a.createElement(d.a,null,u.a.createElement(g.b,{render:function(e){var a=e.history;return u.a.createElement(v.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/softNumen/system/WareHouseListSoft")}},"Back")}}))),u.a.createElement(b.a,null,u.a.createElement(p.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),H?O()("Error occured while Entering Details"):Object(x.C)(w).then((function(e){e.status&&(S({WarehouseName:"",mobileno:"",email:""}),O()("Warehouse  ".concat(e.message)))})).catch((function(e){console.log(e)}))}},u.a.createElement(m.a,{className:"mb-2"},j&&(null===j||void 0===j||null===(e=j.AddWareHouse)||void 0===e||null===(a=e.input)||void 0===a?void 0:a.map((function(e,a){var t,o,c,r,i,s,m,v,b;return(null===e||void 0===e?void 0:e.phoneinput)?u.a.createElement(u.a.Fragment,null,u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,{key:a,lg:"6",md:"6",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(f.a,null,null===e||void 0===e||null===(t=e.label)||void 0===t?void 0:t._text),u.a.createElement(k.a,{inputClass:"myphoneinput",country:"us",onKeyDown:function(a){var t,n;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type)&&["e","E","+","-"].includes(a.key)&&a.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:w[null===e||void 0===e||null===(c=e.name)||void 0===c?void 0:c._text],onChange:function(a){var t;S(Object(l.a)(Object(l.a)({},w),{},Object(n.a)({},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text,a)))}}),D===a?u.a.createElement(u.a.Fragment,null,H&&u.a.createElement("span",{style:{color:"red"}},H)):u.a.createElement(u.a.Fragment,null))))):u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,{key:a,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(f.a,null,null===e||void 0===e||null===(r=e.label)||void 0===r?void 0:r._text),u.a.createElement(h.a,{onKeyDown:function(a){var t,n;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type)&&["e","E","+","-"].includes(a.key)&&a.preventDefault()},type:null===e||void 0===e||null===(i=e.type)||void 0===i||null===(s=i._attributes)||void 0===s?void 0:s.type,placeholder:null===e||void 0===e||null===(m=e.placeholder)||void 0===m?void 0:m._text,name:null===e||void 0===e||null===(v=e.name)||void 0===v?void 0:v._text,value:w[null===e||void 0===e||null===(b=e.name)||void 0===b?void 0:b._text],onChange:function(t){var o,c;return function(e,a,t){var o=e.target,c=o.name,u=o.value;W(t),"number"==a?/^\d{0,10}$/.test(u)?(S(Object(l.a)(Object(l.a)({},w),{},Object(n.a)({},c,u))),P("")):P("Please enter a valid number with a maximum length of 10 digits"):u.length<=10?(S(Object(l.a)(Object(l.a)({},w),{},Object(n.a)({},c,u))),P("")):S(Object(l.a)(Object(l.a)({},w),{},Object(n.a)({},c,u)))}(t,null===e||void 0===e||null===(o=e.type)||void 0===o||null===(c=o._attributes)||void 0===c?void 0:c.type,a)}}),D===a?u.a.createElement(u.a.Fragment,null,H&&u.a.createElement("span",{style:{color:"red"}},H)):u.a.createElement(u.a.Fragment,null))))})))),u.a.createElement("hr",null),u.a.createElement(m.a,null,u.a.createElement(v.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}},917:function(e,a,t){},939:function(e,a,t){"use strict";var n=t(6),l=t(12),o=t(1),c=t.n(o),u=t(2),r=t.n(u),i=t(5),s=t.n(i),m=t(4),d=["className","cssModule","row","disabled","check","inline","tag"],v={children:r.a.node,row:r.a.bool,check:r.a.bool,inline:r.a.bool,disabled:r.a.bool,tag:m.tagPropType,className:r.a.string,cssModule:r.a.object},b=function(e){var a=e.className,t=e.cssModule,o=e.row,u=e.disabled,r=e.check,i=e.inline,v=e.tag,b=Object(l.a)(e,d),p=Object(m.mapToCssModules)(s()(a,!!o&&"row",r?"form-check":"form-group",!(!r||!i)&&"form-check-inline",!(!r||!u)&&"disabled"),t);return"fieldset"===v&&(b.disabled=u),c.a.createElement(v,Object(n.a)({},b,{className:p}))};b.propTypes=v,b.defaultProps={tag:"div"},a.a=b}}]);
//# sourceMappingURL=231.0443b394.chunk.js.map
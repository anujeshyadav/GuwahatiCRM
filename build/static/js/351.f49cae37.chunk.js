(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[351],{3105:function(e,t,l){"use strict";l.r(t);var a=l(60),n=l(9),o=l(26),i=l(1),u=l.n(i),r=l(233),c=l.n(r),d=(l(135),l(912)),v=l(904),m=l(905),s=l(244),b=l(906),p=l(943),y=l(907),E=l(908),g=(l(27),l(170)),f=l.n(g),O=(l(234),l(926)),j=l(927),h=l(928),_=l(133),x=l(931),k=l.n(x),C=l(85),w=l(72),F=l.n(w),S=l(40),N=(l(232),l(78));t.default=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),l=t[0],r=t[1],g=Object(i.useState)([]),x=Object(o.a)(g,2),w=(x[0],x[1],Object(i.useState)({})),D=Object(o.a)(w,2),M=D[0],I=D[1],J=Object(i.useState)({}),R=Object(o.a)(J,2),Y=R[0],K=R[1],L=Object(i.useState)({}),P=Object(o.a)(L,2),T=P[0],A=P[1],H=Object(i.useState)({}),U=Object(o.a)(H,2),V=U[0],z=U[1],B=Object(i.useState)([]),W=Object(o.a)(B,2),Z=(W[0],W[1]),$=Object(i.useState)(""),q=Object(o.a)($,2),G=q[0],Q=q[1],X=Object(i.useState)(""),ee=Object(o.a)(X,2),te=ee[0],le=ee[1],ae=Object(i.useState)({}),ne=Object(o.a)(ae,2),oe=(ne[0],ne[1],Object(i.useContext)(N.a)),ie=function(e,t,l){var o=e.target,i=o.name,u=o.value,r=o.checked;Q(l),"checkbox"==t?z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},i,r))):"number"==t?/^\d{0,10}$/.test(u)?(z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},i,u))),le("")):le("Please enter a valid number with a maximum length of 10 digits"):u.length<=10?(z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},i,u))),le("")):z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},i,u)))};Object(i.useEffect)((function(){console.log(V)}),[V]),Object(i.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){var t=e.coords;t.latitude,t.longitude,console.log(e.coords)}),(function(e){F()("error",e)}),{enableHighAccuracy:!0}):F()("Your Browser does not support Location")}),[]),Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));Object(S.D)().then((function(e){var t,l,a,n,o,i,u=c.a.xml2json(e.data,{compact:!0,spaces:2});r(null===(t=JSON.parse(u))||void 0===t||null===(l=t.RowMaterialConfig)||void 0===l?void 0:l.input),console.log(u),console.log(null===(a=JSON.parse(u))||void 0===a||null===(n=a.RowMaterialConfig)||void 0===n?void 0:n.MyDropdown),Z(null===(o=JSON.parse(u))||void 0===o||null===(i=o.RowMaterialConfig)||void 0===i?void 0:i.MyDropdown)})).catch((function(e){console.log(e)})),console.log(null===e||void 0===e?void 0:e._id),V.created_by=null===e||void 0===e?void 0:e._id}),[]);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(v.a,{className:"m-2"},u.a.createElement(m.a,null,u.a.createElement("h1",{className:"float-left"},"Inword Row Create")),u.a.createElement(m.a,null,u.a.createElement("div",{className:"float-right"},u.a.createElement(C.b,{render:function(e){var t=e.history;return u.a.createElement(s.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",onClick:function(){return t.push("/app/softNumen/warehouse/RawMaterialInward")}}," ","Back")}})))),u.a.createElement("div",{className:"px-1 "},u.a.createElement(b.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),console.log(V),Object(S.od)(V).then((function(e){z({}),e.status&&F()("Created Successfully")})).catch((function(e){console.log(e)}))}},u.a.createElement(v.a,{className:"mb-2"},l&&(null===l||void 0===l?void 0:l.map((function(e,t){var l,o,i,r,c,d,v,s,b,g,x,C,w,F,S,N,D,J,R,L,P,H,U,B,W,Z,$,q,Q,X,ee,le,ae,ne,ue,re,ce,de;k()("2022-08-05T12:00:00").tz("America/New_York").format("D MMM, YYYY HH:mm");return(null===e||void 0===e?void 0:e.phoneinput)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(p.a,null,u.a.createElement(y.a,null,null===e||void 0===e||null===(l=e.label)||void 0===l?void 0:l._text),u.a.createElement(f.a,{inputClass:"myphoneinput",country:"in",onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:V[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],onChange:function(t){var l;z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},null===e||void 0===e||null===(l=e.name)||void 0===l?void 0:l._text,t)))}}),G===t?u.a.createElement(u.a.Fragment,null,te&&u.a.createElement("span",{style:{color:"red"}},te)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(r=e.label._text)||void 0===r?void 0:r.includes("ountry"))?u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(p.a,null,u.a.createElement(y.a,null,null===e||void 0===e||null===(v=e.label)||void 0===v?void 0:v._text),u.a.createElement(_.a,{inputClass:"countryclass",className:"countryclassnw",options:O.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:M,onChange:function(e){I(e),z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},"Country",null===e||void 0===e?void 0:e.name)))}}),G===t?u.a.createElement(u.a.Fragment,null,te&&u.a.createElement("span",{style:{color:"red"}},te)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(c=e.label._text)||void 0===c?void 0:c.includes("tate"))?u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(p.a,null,u.a.createElement(y.a,null,null===e||void 0===e||null===(s=e.label)||void 0===s?void 0:s._text),u.a.createElement(_.a,{options:null===j.a||void 0===j.a?void 0:j.a.getStatesOfCountry(null===M||void 0===M?void 0:M.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:Y,onChange:function(e){K(e),z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},"State",null===e||void 0===e?void 0:e.name)))}}),G===t?u.a.createElement(u.a.Fragment,null,te&&u.a.createElement("span",{style:{color:"red"}},te)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(d=e.label._text)||void 0===d?void 0:d.includes("ity"))?u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(p.a,null,u.a.createElement(y.a,null,null===e||void 0===e||null===(b=e.label)||void 0===b?void 0:b._text),u.a.createElement(_.a,{options:null===h.a||void 0===h.a?void 0:h.a.getCitiesOfState(null===Y||void 0===Y?void 0:Y.countryCode,null===Y||void 0===Y?void 0:Y.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:T,onChange:function(e){A(e),z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},"City",null===e||void 0===e?void 0:e.name)))}}),G===t?u.a.createElement(u.a.Fragment,null,te&&u.a.createElement("span",{style:{color:"red"}},te)):u.a.createElement(u.a.Fragment,null))):u.a.createElement(u.a.Fragment,null,"date"==(null===e||void 0===e||null===(g=e.type)||void 0===g||null===(x=g._attributes)||void 0===x?void 0:x.type)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(p.a,{key:t},u.a.createElement(y.a,null,null===e||void 0===e||null===(C=e.label)||void 0===C?void 0:C._text),u.a.createElement(E.a,{onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(w=e.type)||void 0===w||null===(F=w._attributes)||void 0===F?void 0:F.type,placeholder:null===e||void 0===e||null===(S=e.placeholder)||void 0===S?void 0:S._text,name:null===e||void 0===e||null===(N=e.name)||void 0===N?void 0:N._text,dateFormat:null===oe||void 0===oe||null===(D=oe.UserInformatio)||void 0===D?void 0:D.dateFormat,value:k()(V[null===e||void 0===e||null===(J=e.name)||void 0===J?void 0:J._text]).tz(null===oe||void 0===oe||null===(R=oe.UserInformatio)||void 0===R?void 0:R.timeZone).format(null===oe||void 0===oe||null===(L=oe.UserInformatio)||void 0===L?void 0:L.dateFormat),onChange:function(l){var a,n;return ie(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),G===t?u.a.createElement(u.a.Fragment,null,te&&u.a.createElement("span",{style:{color:"red"}},te)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(p.a,{key:t},u.a.createElement(y.a,null,null===e||void 0===e||null===(P=e.label)||void 0===P?void 0:P._text),u.a.createElement(E.a,{onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(H=e.type)||void 0===H||null===(U=H._attributes)||void 0===U?void 0:U.type,placeholder:null===e||void 0===e||null===(B=e.placeholder)||void 0===B?void 0:B._text,name:null===e||void 0===e||null===(W=e.name)||void 0===W?void 0:W._text,value:V[null===e||void 0===e||null===(Z=e.name)||void 0===Z?void 0:Z._text],onChange:function(l){var a,n;return ie(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),G===t?u.a.createElement(u.a.Fragment,null,te&&u.a.createElement("span",{style:{color:"red"}},te)):u.a.createElement(u.a.Fragment,null))))):u.a.createElement(u.a.Fragment,null,(null===e||void 0===e?void 0:e.number)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(p.a,{key:t},u.a.createElement(y.a,null,null===e||void 0===e||null===($=e.label)||void 0===$?void 0:$._text),u.a.createElement(E.a,{onWheel:function(e){e.preventDefault()},onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(q=e.type)||void 0===q||null===(Q=q._attributes)||void 0===Q?void 0:Q.type,placeholder:null===e||void 0===e||null===(X=e.placeholder)||void 0===X?void 0:X._text,name:null===e||void 0===e||null===(ee=e.name)||void 0===ee?void 0:ee._text,value:V[null===e||void 0===e||null===(le=e.name)||void 0===le?void 0:le._text],onChange:function(l){var a,n;return ie(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),G===t?u.a.createElement(u.a.Fragment,null,te&&u.a.createElement("span",{style:{color:"red"}},te)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(p.a,{key:t},u.a.createElement(y.a,null,null===e||void 0===e||null===(ae=e.label)||void 0===ae?void 0:ae._text),u.a.createElement(E.a,{onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(ne=e.type)||void 0===ne||null===(ue=ne._attributes)||void 0===ue?void 0:ue.type,placeholder:null===e||void 0===e||null===(re=e.placeholder)||void 0===re?void 0:re._text,name:null===e||void 0===e||null===(ce=e.name)||void 0===ce?void 0:ce._text,value:V[null===e||void 0===e||null===(de=e.name)||void 0===de?void 0:de._text],onChange:function(l){var a,n;ie(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),G===t?u.a.createElement(u.a.Fragment,null,te&&u.a.createElement("span",{style:{color:"red"}},te)):u.a.createElement(u.a.Fragment,null))))})))),u.a.createElement("hr",null),u.a.createElement(v.a,null,u.a.createElement(s.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}},943:function(e,t,l){"use strict";var a=l(10),n=l(12),o=l(1),i=l.n(o),u=l(2),r=l.n(u),c=l(8),d=l.n(c),v=l(7),m=["className","cssModule","row","disabled","check","inline","tag"],s={children:r.a.node,row:r.a.bool,check:r.a.bool,inline:r.a.bool,disabled:r.a.bool,tag:v.tagPropType,className:r.a.string,cssModule:r.a.object},b=function(e){var t=e.className,l=e.cssModule,o=e.row,u=e.disabled,r=e.check,c=e.inline,s=e.tag,b=Object(n.a)(e,m),p=Object(v.mapToCssModules)(d()(t,!!o&&"row",r?"form-check":"form-group",!(!r||!c)&&"form-check-inline",!(!r||!u)&&"disabled"),l);return"fieldset"===s&&(b.disabled=u),i.a.createElement(s,Object(a.a)({},b,{className:p}))};b.propTypes=s,b.defaultProps={tag:"div"},t.a=b}}]);
//# sourceMappingURL=351.f49cae37.chunk.js.map
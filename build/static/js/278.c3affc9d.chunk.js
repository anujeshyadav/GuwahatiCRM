(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[278],{943:function(e,l,t){"use strict";var a=t(9),n=t(12),o=t(1),i=t.n(o),u=t(2),d=t.n(u),r=t(8),c=t.n(r),v=t(4),m=["className","cssModule","row","disabled","check","inline","tag"],s={children:d.a.node,row:d.a.bool,check:d.a.bool,inline:d.a.bool,disabled:d.a.bool,tag:v.tagPropType,className:d.a.string,cssModule:d.a.object},b=function(e){var l=e.className,t=e.cssModule,o=e.row,u=e.disabled,d=e.check,r=e.inline,s=e.tag,b=Object(n.a)(e,m),p=Object(v.mapToCssModules)(c()(l,!!o&&"row",d?"form-check":"form-group",!(!d||!r)&&"form-check-inline",!(!d||!u)&&"disabled"),t);return"fieldset"===s&&(b.disabled=u),i.a.createElement(s,Object(a.a)({},b,{className:p}))};b.propTypes=s,b.defaultProps={tag:"div"},l.a=b},996:function(e,l,t){"use strict";t.r(l);var a=t(55),n=t(7),o=t(25),i=t(1),u=t.n(i),d=t(225),r=t.n(d),c=t(901),v=t(895),m=t(893),s=t(894),b=t(943),p=t(896),y=t(883),E=t(897),g=(t(26),t(162)),f=t.n(g),O=(t(226),t(917)),j=t(918),h=t(919),_=t(125),x=t(924),C=t.n(x),k=t(91),F=t.n(k),S=(t(633),t(56)),w=(t(224),t(74));l.default=function(e){var l=e.ViewOneData,t=Object(i.useState)([]),d=Object(o.a)(t,2),g=d[0],x=d[1],k=Object(i.useState)({}),D=Object(o.a)(k,2),N=D[0],R=D[1],U=Object(i.useState)({}),A=Object(o.a)(U,2),J=A[0],K=A[1],L=Object(i.useState)({}),M=Object(o.a)(L,2),V=M[0],I=M[1],P=Object(i.useState)({}),T=Object(o.a)(P,2),q=T[0],z=T[1],W=Object(i.useState)({}),Z=Object(o.a)(W,2),$=Z[0],B=Z[1],G=Object(i.useState)(""),H=Object(o.a)(G,2),Q=H[0],X=H[1],Y=Object(i.useState)(""),ee=Object(o.a)(Y,2),le=ee[0],te=ee[1],ae=Object(i.useState)({}),ne=Object(o.a)(ae,2),oe=(ne[0],ne[1],Object(i.useContext)(w.a)),ie=function(e,l,t){var o=e.target,i=o.name,u=o.value,d=o.checked;X(t),"checkbox"==l?z(Object(n.a)(Object(n.a)({},q),{},Object(a.a)({},i,d))):"number"==l?/^\d{0,10}$/.test(u)?(z(Object(n.a)(Object(n.a)({},q),{},Object(a.a)({},i,u))),te("")):te("Please enter a valid number with a maximum length of 10 digits"):u.length<=10?(z(Object(n.a)(Object(n.a)({},q),{},Object(a.a)({},i,u))),te("")):z(Object(n.a)(Object(n.a)({},q),{},Object(a.a)({},i,u)))};Object(i.useEffect)((function(){console.log(q)}),[q]),Object(i.useEffect)((function(){if(z(l),console.log(l),Object(S.mb)().then((function(e){B(null===e||void 0===e?void 0:e.Role)})).catch((function(e){console.log(e),F()("Roles List Not found")})),null===l||void 0===l?void 0:l.Country){var e,t=null===O.a||void 0===O.a||null===(e=O.a.getAllCountries())||void 0===e?void 0:e.filter((function(e,t){return(null===e||void 0===e?void 0:e.name)==(null===l||void 0===l?void 0:l.Country)}));if(R(t),null===l||void 0===l?void 0:l.State){var a,n,o=null===j.a||void 0===j.a||null===(a=j.a.getStatesOfCountry(null===(n=t[0])||void 0===n?void 0:n.isoCode))||void 0===a?void 0:a.filter((function(e,t){return(null===e||void 0===e?void 0:e.name)==(null===l||void 0===l?void 0:l.State)}));if(K(o),console.log(o),null===l||void 0===l?void 0:l.City){var i,u,d,c=null===(i=h.a.getCitiesOfState(null===(u=o[0])||void 0===u?void 0:u.countryCode,null===(d=o[0])||void 0===d?void 0:d.isoCode))||void 0===i?void 0:i.filter((function(e,t){return(null===e||void 0===e?void 0:e.name)==(null===l||void 0===l?void 0:l.City)}));I(c)}}}(null===l||void 0===l?void 0:l.status)&&(q.status=null===l||void 0===l?void 0:l.status),Object(S.l)().then((function(e){var l,t,a,n,o=r.a.xml2json(e.data,{compact:!0,spaces:2});console.log(null===(l=JSON.parse(o))||void 0===l||null===(t=l.CreateUser)||void 0===t?void 0:t.input),x(null===(a=JSON.parse(o))||void 0===a||null===(n=a.CreateUser)||void 0===n?void 0:n.input),B(JSON.parse(o))})).catch((function(e){console.log(e)}))}),[]);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(c.a,null,u.a.createElement(v.a,{className:"mr-1 ml-1",onSubmit:function(e){e.preventDefault(),console.log(q),le?F()("Error occured while Entering Details"):Object(S.j)(q).then((function(e){z({}),e.status&&(window.location.reload(),F()("User Created Successfully"))})).catch((function(e){console.log(e)}))}},u.a.createElement(m.a,{className:"mb-2"},u.a.createElement(s.a,{lg:"4",md:"4"},u.a.createElement(b.a,null,u.a.createElement(p.a,null,"Selected Role"),u.a.createElement(y.a,{disabled:!0,required:!0,type:"select",name:"rolename",value:q.rolename},u.a.createElement("option",null,"--select Role--"),$&&(null===$||void 0===$?void 0:$.length)&&(null===$||void 0===$?void 0:$.map((function(e,l){return u.a.createElement("option",{value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.roleName)})))))),g&&(null===g||void 0===g?void 0:g.map((function(e,l){var t,o,i,d,r,c,v,m,y,g,x,k,F,S,w,D,U,A,L,M,P,T,W,Z,$,B,G,H,X,Y,ee,te,ae,ne,ue,de,re,ce;return(null===e||void 0===e?void 0:e.phoneinput)?u.a.createElement(u.a.Fragment,null,u.a.createElement(s.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(b.a,null,u.a.createElement(p.a,null,null===e||void 0===e||null===(t=e.label)||void 0===t?void 0:t._text),u.a.createElement(f.a,{disabled:!0,inputClass:"myphoneinput",country:"in",onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:q[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],onChange:function(l){var t;z(Object(n.a)(Object(n.a)({},q),{},Object(a.a)({},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text,l)))}}),Q===l?u.a.createElement(u.a.Fragment,null,le&&u.a.createElement("span",{style:{color:"red"}},le)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(d=e.label._text)||void 0===d?void 0:d.includes("ountry"))?(console.log(e),u.a.createElement(s.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(b.a,null,u.a.createElement(p.a,null,null===e||void 0===e||null===(v=e.label)||void 0===v?void 0:v._text),u.a.createElement(_.a,{disabled:!0,inputClass:"countryclass",className:"countryclassnw",options:O.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:N,onChange:function(e){R(e),z(Object(n.a)(Object(n.a)({},q),{},Object(a.a)({},"Country",null===e||void 0===e?void 0:e.name)))}}),Q===l?u.a.createElement(u.a.Fragment,null,le&&u.a.createElement("span",{style:{color:"red"}},le)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e||null===(r=e.label._text)||void 0===r?void 0:r.includes("tate"))?u.a.createElement(s.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(b.a,null,u.a.createElement(p.a,null,null===e||void 0===e||null===(m=e.label)||void 0===m?void 0:m._text),u.a.createElement(_.a,{disabled:!0,options:null===j.a||void 0===j.a?void 0:j.a.getStatesOfCountry(null===N||void 0===N?void 0:N.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:J,onChange:function(e){K(e),z(Object(n.a)(Object(n.a)({},q),{},Object(a.a)({},"State",null===e||void 0===e?void 0:e.name)))}}),Q===l?u.a.createElement(u.a.Fragment,null,le&&u.a.createElement("span",{style:{color:"red"}},le)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(c=e.label._text)||void 0===c?void 0:c.includes("ity"))?u.a.createElement(s.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(b.a,null,u.a.createElement(p.a,null,null===e||void 0===e||null===(y=e.label)||void 0===y?void 0:y._text),u.a.createElement(_.a,{disabled:!0,options:null===h.a||void 0===h.a?void 0:h.a.getCitiesOfState(null===J||void 0===J?void 0:J.countryCode,null===J||void 0===J?void 0:J.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:V,onChange:function(e){I(e),z(Object(n.a)(Object(n.a)({},q),{},Object(a.a)({},"City",null===e||void 0===e?void 0:e.name)))}}),Q===l?u.a.createElement(u.a.Fragment,null,le&&u.a.createElement("span",{style:{color:"red"}},le)):u.a.createElement(u.a.Fragment,null))):u.a.createElement(u.a.Fragment,null,"date"==(null===e||void 0===e||null===(g=e.type)||void 0===g||null===(x=g._attributes)||void 0===x?void 0:x.type)?u.a.createElement(u.a.Fragment,null,u.a.createElement(s.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(b.a,{key:l},u.a.createElement(p.a,null,null===e||void 0===e||null===(k=e.label)||void 0===k?void 0:k._text),u.a.createElement(E.a,{disabled:!0,onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(F=e.type)||void 0===F||null===(S=F._attributes)||void 0===S?void 0:S.type,placeholder:null===e||void 0===e||null===(w=e.placeholder)||void 0===w?void 0:w._text,name:null===e||void 0===e||null===(D=e.name)||void 0===D?void 0:D._text,dateFormat:null===oe||void 0===oe||null===(U=oe.UserInformatio)||void 0===U?void 0:U.dateFormat,value:C()(q[null===e||void 0===e||null===(A=e.name)||void 0===A?void 0:A._text]).tz(null===oe||void 0===oe||null===(L=oe.UserInformatio)||void 0===L?void 0:L.timeZone).format(null===oe||void 0===oe||null===(M=oe.UserInformatio)||void 0===M?void 0:M.dateFormat),onChange:function(t){var a,n;return ie(t,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,l)}}),Q===l?u.a.createElement(u.a.Fragment,null,le&&u.a.createElement("span",{style:{color:"red"}},le)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(u.a.Fragment,null,u.a.createElement(s.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(b.a,{key:l},u.a.createElement(p.a,null,null===e||void 0===e||null===(P=e.label)||void 0===P?void 0:P._text),u.a.createElement(E.a,{disabled:!0,onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(T=e.type)||void 0===T||null===(W=T._attributes)||void 0===W?void 0:W.type,placeholder:null===e||void 0===e||null===(Z=e.placeholder)||void 0===Z?void 0:Z._text,name:null===e||void 0===e||null===($=e.name)||void 0===$?void 0:$._text,value:q[null===e||void 0===e||null===(B=e.name)||void 0===B?void 0:B._text],onChange:function(t){var a,n;return ie(t,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,l)}}),Q===l?u.a.createElement(u.a.Fragment,null,le&&u.a.createElement("span",{style:{color:"red"}},le)):u.a.createElement(u.a.Fragment,null))))):u.a.createElement(u.a.Fragment,null,(null===e||void 0===e?void 0:e.number)?u.a.createElement(u.a.Fragment,null,u.a.createElement(s.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(b.a,{key:l},u.a.createElement(p.a,null,null===e||void 0===e||null===(G=e.label)||void 0===G?void 0:G._text),u.a.createElement(E.a,{disabled:!0,onWheel:function(e){e.preventDefault()},onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(H=e.type)||void 0===H||null===(X=H._attributes)||void 0===X?void 0:X.type,placeholder:null===e||void 0===e||null===(Y=e.placeholder)||void 0===Y?void 0:Y._text,name:null===e||void 0===e||null===(ee=e.name)||void 0===ee?void 0:ee._text,value:q[null===e||void 0===e||null===(te=e.name)||void 0===te?void 0:te._text],onChange:function(t){var a,n;return ie(t,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,l)}}),Q===l?u.a.createElement(u.a.Fragment,null,le&&u.a.createElement("span",{style:{color:"red"}},le)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(s.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(b.a,{key:l},u.a.createElement(p.a,null,null===e||void 0===e||null===(ae=e.label)||void 0===ae?void 0:ae._text),u.a.createElement(E.a,{disabled:!0,onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(ne=e.type)||void 0===ne||null===(ue=ne._attributes)||void 0===ue?void 0:ue.type,placeholder:null===e||void 0===e||null===(de=e.placeholder)||void 0===de?void 0:de._text,name:null===e||void 0===e||null===(re=e.name)||void 0===re?void 0:re._text,value:q[null===e||void 0===e||null===(ce=e.name)||void 0===ce?void 0:ce._text],onChange:function(t){var a,n;ie(t,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,l)}}),Q===l?u.a.createElement(u.a.Fragment,null,le&&u.a.createElement("span",{style:{color:"red"}},le)):u.a.createElement(u.a.Fragment,null))))})))),u.a.createElement(s.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},u.a.createElement(p.a,{className:"mb-0"},"Status"),u.a.createElement("div",{className:"form-label-group"},u.a.createElement("input",{disabled:!0,checked:"Active"==q.status,style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{checked:"Deactive"==q.status,disabled:!0,style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Deactive"))),u.a.createElement("hr",null)))))}}}]);
//# sourceMappingURL=278.c3affc9d.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[236],{918:function(e,l,t){},941:function(e,l,t){"use strict";var a=t(7),n=t(12),o=t(1),i=t.n(o),u=t(2),d=t.n(u),r=t(6),c=t.n(r),v=t(4),m=["className","cssModule","row","disabled","check","inline","tag"],s={children:d.a.node,row:d.a.bool,check:d.a.bool,inline:d.a.bool,disabled:d.a.bool,tag:v.tagPropType,className:d.a.string,cssModule:d.a.object},b=function(e){var l=e.className,t=e.cssModule,o=e.row,u=e.disabled,d=e.check,r=e.inline,s=e.tag,b=Object(n.a)(e,m),p=Object(v.mapToCssModules)(c()(l,!!o&&"row",d?"form-check":"form-group",!(!d||!r)&&"form-check-inline",!(!d||!u)&&"disabled"),t);return"fieldset"===s&&(b.disabled=u),i.a.createElement(s,Object(a.a)({},b,{className:p}))};b.propTypes=s,b.defaultProps={tag:"div"},l.a=b},993:function(e,l,t){"use strict";t.r(l);var a=t(55),n=t(8),o=t(45),i=t(1),u=t.n(i),d=t(630),r=t.n(d),c=t(899),v=t(891),m=t(892),s=t(903),b=t(893),p=t(941),E=t(894),y=t(895),g=(t(25),t(162)),f=t.n(g),O=(t(631),t(915)),j=t(916),h=t(917),_=t(124),x=t(924),C=t.n(x),k=t(161),F=t.n(k),S=(t(632),t(79)),w=(t(918),t(90));l.default=function(e){var l=e.ViewOneData,t=Object(i.useState)([]),d=Object(o.a)(t,2),g=d[0],x=d[1],k=Object(i.useState)({}),D=Object(o.a)(k,2),N=D[0],M=D[1],U=Object(i.useState)({}),A=Object(o.a)(U,2),J=A[0],K=A[1],V=Object(i.useState)({}),Y=Object(o.a)(V,2),R=Y[0],T=Y[1],I=Object(i.useState)({}),L=Object(o.a)(I,2),P=L[0],z=L[1],H=Object(i.useState)({}),W=Object(o.a)(H,2),Z=(W[0],W[1]),$=Object(i.useState)(""),q=Object(o.a)($,2),B=q[0],G=q[1],Q=Object(i.useState)(""),X=Object(o.a)(Q,2),ee=X[0],le=X[1],te=Object(i.useState)({}),ae=Object(o.a)(te,2),ne=(ae[0],ae[1],Object(i.useContext)(w.a)),oe=function(e,l,t){var o=e.target,i=o.name,u=o.value,d=o.checked;G(t),"checkbox"==l?z(Object(n.a)(Object(n.a)({},P),{},Object(a.a)({},i,d))):"number"==l?/^\d{0,10}$/.test(u)?(z(Object(n.a)(Object(n.a)({},P),{},Object(a.a)({},i,u))),le("")):le("Please enter a valid number with a maximum length of 10 digits"):u.length<=10?(z(Object(n.a)(Object(n.a)({},P),{},Object(a.a)({},i,u))),le("")):z(Object(n.a)(Object(n.a)({},P),{},Object(a.a)({},i,u)))};Object(i.useEffect)((function(){console.log(P)}),[P]),Object(i.useEffect)((function(){if(z(l),console.log(l),null===l||void 0===l?void 0:l.Country){var e,t=null===O.a||void 0===O.a||null===(e=O.a.getAllCountries())||void 0===e?void 0:e.filter((function(e,t){return(null===e||void 0===e?void 0:e.name)==(null===l||void 0===l?void 0:l.Country)}));if(M(t),null===l||void 0===l?void 0:l.State){var a,n,o=null===j.a||void 0===j.a||null===(a=j.a.getStatesOfCountry(null===(n=t[0])||void 0===n?void 0:n.isoCode))||void 0===a?void 0:a.filter((function(e,t){return(null===e||void 0===e?void 0:e.name)==(null===l||void 0===l?void 0:l.State)}));if(K(o),console.log(o),null===l||void 0===l?void 0:l.City){var i,u,d,c=null===(i=h.a.getCitiesOfState(null===(u=o[0])||void 0===u?void 0:u.countryCode,null===(d=o[0])||void 0===d?void 0:d.isoCode))||void 0===i?void 0:i.filter((function(e,t){return(null===e||void 0===e?void 0:e.name)==(null===l||void 0===l?void 0:l.City)}));T(c)}}}(null===l||void 0===l?void 0:l.status)&&(P.status=null===l||void 0===l?void 0:l.status),Object(S.k)().then((function(e){var l,t,a,n,o=r.a.xml2json(e.data,{compact:!0,spaces:2});console.log(null===(l=JSON.parse(o))||void 0===l||null===(t=l.CreateUser)||void 0===t?void 0:t.input),x(null===(a=JSON.parse(o))||void 0===a||null===(n=a.CreateUser)||void 0===n?void 0:n.input),Z(JSON.parse(o))})).catch((function(e){console.log(e)}))}),[]);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(c.a,null,u.a.createElement(v.a,{className:"m-2"},u.a.createElement(m.a,null,u.a.createElement("h1",{className:"float-left"},"View User")),u.a.createElement(m.a,null,u.a.createElement("div",{className:"float-right"}))),u.a.createElement(s.a,null,u.a.createElement(b.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),console.log(P),ee?F()("Error occured while Entering Details"):Object(S.i)(P).then((function(e){z({}),e.status&&(window.location.reload(),F()("User Created Successfully"))})).catch((function(e){console.log(e)}))}},u.a.createElement(v.a,{className:"mb-2"},g&&(null===g||void 0===g?void 0:g.map((function(e,l){var t,o,i,d,r,c,v,s,b,g,x,k,F,S,w,D,U,A,V,Y,I,L,H,W,Z,$,q,G,Q,X,le,te,ae,ie,ue,de,re,ce;C()("2022-08-05T12:00:00").tz("America/New_York").format("D MMM, YYYY HH:mm");return(null===e||void 0===e?void 0:e.phoneinput)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(p.a,null,u.a.createElement(E.a,null,null===e||void 0===e||null===(t=e.label)||void 0===t?void 0:t._text),u.a.createElement(f.a,{disabled:!0,inputClass:"myphoneinput",country:"in",onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:P[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],onChange:function(l){var t;z(Object(n.a)(Object(n.a)({},P),{},Object(a.a)({},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text,l)))}}),B===l?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(d=e.label._text)||void 0===d?void 0:d.includes("ountry"))?(console.log(e),u.a.createElement(m.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(p.a,null,u.a.createElement(E.a,null,null===e||void 0===e||null===(v=e.label)||void 0===v?void 0:v._text),u.a.createElement(_.a,{disabled:!0,inputClass:"countryclass",className:"countryclassnw",options:O.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:N,onChange:function(e){M(e),z(Object(n.a)(Object(n.a)({},P),{},Object(a.a)({},"Country",null===e||void 0===e?void 0:e.name)))}}),B===l?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e||null===(r=e.label._text)||void 0===r?void 0:r.includes("tate"))?u.a.createElement(m.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(p.a,null,u.a.createElement(E.a,null,null===e||void 0===e||null===(s=e.label)||void 0===s?void 0:s._text),u.a.createElement(_.a,{disabled:!0,options:null===j.a||void 0===j.a?void 0:j.a.getStatesOfCountry(null===N||void 0===N?void 0:N.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:J,onChange:function(e){K(e),z(Object(n.a)(Object(n.a)({},P),{},Object(a.a)({},"State",null===e||void 0===e?void 0:e.name)))}}),B===l?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(c=e.label._text)||void 0===c?void 0:c.includes("ity"))?u.a.createElement(m.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(p.a,null,u.a.createElement(E.a,null,null===e||void 0===e||null===(b=e.label)||void 0===b?void 0:b._text),u.a.createElement(_.a,{disabled:!0,options:null===h.a||void 0===h.a?void 0:h.a.getCitiesOfState(null===J||void 0===J?void 0:J.countryCode,null===J||void 0===J?void 0:J.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:R,onChange:function(e){T(e),z(Object(n.a)(Object(n.a)({},P),{},Object(a.a)({},"City",null===e||void 0===e?void 0:e.name)))}}),B===l?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null))):u.a.createElement(u.a.Fragment,null,"date"==(null===e||void 0===e||null===(g=e.type)||void 0===g||null===(x=g._attributes)||void 0===x?void 0:x.type)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(p.a,{key:l},u.a.createElement(E.a,null,null===e||void 0===e||null===(k=e.label)||void 0===k?void 0:k._text),u.a.createElement(y.a,{disabled:!0,onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(F=e.type)||void 0===F||null===(S=F._attributes)||void 0===S?void 0:S.type,placeholder:null===e||void 0===e||null===(w=e.placeholder)||void 0===w?void 0:w._text,name:null===e||void 0===e||null===(D=e.name)||void 0===D?void 0:D._text,dateFormat:null===ne||void 0===ne||null===(U=ne.UserInformatio)||void 0===U?void 0:U.dateFormat,value:C()(P[null===e||void 0===e||null===(A=e.name)||void 0===A?void 0:A._text]).tz(null===ne||void 0===ne||null===(V=ne.UserInformatio)||void 0===V?void 0:V.timeZone).format(null===ne||void 0===ne||null===(Y=ne.UserInformatio)||void 0===Y?void 0:Y.dateFormat),onChange:function(t){var a,n;return oe(t,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,l)}}),B===l?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(p.a,{key:l},u.a.createElement(E.a,null,null===e||void 0===e||null===(I=e.label)||void 0===I?void 0:I._text),u.a.createElement(y.a,{disabled:!0,onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(L=e.type)||void 0===L||null===(H=L._attributes)||void 0===H?void 0:H.type,placeholder:null===e||void 0===e||null===(W=e.placeholder)||void 0===W?void 0:W._text,name:null===e||void 0===e||null===(Z=e.name)||void 0===Z?void 0:Z._text,value:P[null===e||void 0===e||null===($=e.name)||void 0===$?void 0:$._text],onChange:function(t){var a,n;return oe(t,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,l)}}),B===l?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null))))):u.a.createElement(u.a.Fragment,null,(null===e||void 0===e?void 0:e.number)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(p.a,{key:l},u.a.createElement(E.a,null,null===e||void 0===e||null===(q=e.label)||void 0===q?void 0:q._text),u.a.createElement(y.a,{disabled:!0,onWheel:function(e){e.preventDefault()},onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(G=e.type)||void 0===G||null===(Q=G._attributes)||void 0===Q?void 0:Q.type,placeholder:null===e||void 0===e||null===(X=e.placeholder)||void 0===X?void 0:X._text,name:null===e||void 0===e||null===(le=e.name)||void 0===le?void 0:le._text,value:P[null===e||void 0===e||null===(te=e.name)||void 0===te?void 0:te._text],onChange:function(t){var a,n;return oe(t,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,l)}}),B===l?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(m.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(p.a,{key:l},u.a.createElement(E.a,null,null===e||void 0===e||null===(ae=e.label)||void 0===ae?void 0:ae._text),u.a.createElement(y.a,{disabled:!0,onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(ie=e.type)||void 0===ie||null===(ue=ie._attributes)||void 0===ue?void 0:ue.type,placeholder:null===e||void 0===e||null===(de=e.placeholder)||void 0===de?void 0:de._text,name:null===e||void 0===e||null===(re=e.name)||void 0===re?void 0:re._text,value:P[null===e||void 0===e||null===(ce=e.name)||void 0===ce?void 0:ce._text],onChange:function(t){var a,n;oe(t,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,l)}}),B===l?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null))))})))),u.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},u.a.createElement(E.a,{className:"mb-0"},"Status"),u.a.createElement("div",{className:"form-label-group"},u.a.createElement("input",{disabled:!0,checked:"Active"==P.status,style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{checked:"Deactive"==P.status,disabled:!0,style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Deactive"))),u.a.createElement("hr",null))))))}}}]);
//# sourceMappingURL=236.8e3a583b.chunk.js.map
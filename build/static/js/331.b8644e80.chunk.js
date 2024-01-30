(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[331],{943:function(e,l,t){"use strict";var a=t(10),n=t(12),o=t(1),i=t.n(o),u=t(2),d=t.n(u),r=t(8),v=t.n(r),c=t(7),m=["className","cssModule","row","disabled","check","inline","tag"],s={children:d.a.node,row:d.a.bool,check:d.a.bool,inline:d.a.bool,disabled:d.a.bool,tag:c.tagPropType,className:d.a.string,cssModule:d.a.object},b=function(e){var l=e.className,t=e.cssModule,o=e.row,u=e.disabled,d=e.check,r=e.inline,s=e.tag,b=Object(n.a)(e,m),p=Object(c.mapToCssModules)(v()(l,!!o&&"row",d?"form-check":"form-group",!(!d||!r)&&"form-check-inline",!(!d||!u)&&"disabled"),t);return"fieldset"===s&&(b.disabled=u),i.a.createElement(s,Object(a.a)({},b,{className:p}))};b.propTypes=s,b.defaultProps={tag:"div"},l.a=b},968:function(e,l,t){"use strict";t.r(l);var a=t(60),n=t(9),o=t(26),i=t(1),u=t.n(i),d=t(233),r=t.n(d),v=t(912),c=t(906),m=t(904),s=t(905),b=t(943),p=t(907),y=t(908),E=(t(27),t(170)),g=t.n(E),f=(t(234),t(926)),O=t(927),j=t(928),h=t(133),_=t(931),x=t.n(_),C=t(72),k=t.n(C),F=(t(645),t(40)),S=(t(232),t(78));l.default=function(e){var l,t,d,E,_=e.ViewOneData,C=Object(i.useState)([]),N=Object(o.a)(C,2),D=N[0],w=N[1],R=Object(i.useState)({}),J=Object(o.a)(R,2),U=J[0],A=J[1],K=Object(i.useState)({}),I=Object(o.a)(K,2),L=I[0],M=I[1],V=Object(i.useState)({}),P=Object(o.a)(V,2),T=P[0],z=P[1],W=Object(i.useState)({}),Z=Object(o.a)(W,2),$=Z[0],q=Z[1],B=Object(i.useState)({}),G=Object(o.a)(B,2),H=(G[0],G[1]),Q=Object(i.useState)(""),X=Object(o.a)(Q,2),Y=X[0],ee=X[1],le=Object(i.useState)(""),te=Object(o.a)(le,2),ae=te[0],ne=te[1],oe=Object(i.useState)({}),ie=Object(o.a)(oe,2),ue=(ie[0],ie[1],Object(i.useContext)(S.a)),de=function(e,l,t){var o=e.target,i=o.name,u=o.value,d=o.checked;ee(t),"checkbox"==l?q(Object(n.a)(Object(n.a)({},$),{},Object(a.a)({},i,d))):"number"==l?/^\d{0,10}$/.test(u)?(q(Object(n.a)(Object(n.a)({},$),{},Object(a.a)({},i,u))),ne("")):ne("Please enter a valid number with a maximum length of 10 digits"):u.length<=10?(q(Object(n.a)(Object(n.a)({},$),{},Object(a.a)({},i,u))),ne("")):q(Object(n.a)(Object(n.a)({},$),{},Object(a.a)({},i,u)))};Object(i.useEffect)((function(){console.log($)}),[$]),Object(i.useEffect)((function(){q(_),console.log(_);var e=JSON.parse(localStorage.getItem("userData"));if(Object(F.tb)(null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.database).then((function(e){H(null===e||void 0===e?void 0:e.Role)})).catch((function(e){console.log(e),k()("Roles List Not found")})),null===_||void 0===_?void 0:_.Country){var l,t=null===f.a||void 0===f.a||null===(l=f.a.getAllCountries())||void 0===l?void 0:l.filter((function(e,l){return(null===e||void 0===e?void 0:e.name)==(null===_||void 0===_?void 0:_.Country)}));if(A(t),null===_||void 0===_?void 0:_.State){var a,n,o=null===O.a||void 0===O.a||null===(a=O.a.getStatesOfCountry(null===(n=t[0])||void 0===n?void 0:n.isoCode))||void 0===a?void 0:a.filter((function(e,l){return(null===e||void 0===e?void 0:e.name)==(null===_||void 0===_?void 0:_.State)}));if(M(o),console.log(o),null===_||void 0===_?void 0:_.City){var i,u,d,v=null===(i=j.a.getCitiesOfState(null===(u=o[0])||void 0===u?void 0:u.countryCode,null===(d=o[0])||void 0===d?void 0:d.isoCode))||void 0===i?void 0:i.filter((function(e,l){return(null===e||void 0===e?void 0:e.name)==(null===_||void 0===_?void 0:_.City)}));z(v)}}}(null===_||void 0===_?void 0:_.status)&&($.status=null===_||void 0===_?void 0:_.status),Object(F.k)().then((function(e){var l,t,a,n,o=r.a.xml2json(e.data,{compact:!0,spaces:2});console.log(null===(l=JSON.parse(o))||void 0===l||null===(t=l.CreateUser)||void 0===t?void 0:t.input),w(null===(a=JSON.parse(o))||void 0===a||null===(n=a.CreateUser)||void 0===n?void 0:n.input),H(JSON.parse(o))})).catch((function(e){console.log(e)}))}),[]);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(v.a,null,u.a.createElement(c.a,{className:"mr-1 ml-1",onSubmit:function(e){e.preventDefault(),console.log($),ae?k()("Error occured while Entering Details"):Object(F.i)($).then((function(e){q({}),e.status&&(window.location.reload(),k()("User Created Successfully"))})).catch((function(e){console.log(e)}))}},u.a.createElement(m.a,{className:"mb-2"},u.a.createElement(s.a,{lg:"4",md:"4"},u.a.createElement(b.a,null,u.a.createElement(p.a,null,"Role Name-",u.a.createElement("strong",null,(null===$||void 0===$||null===(l=$.rolename)||void 0===l?void 0:l.roleName)&&(null===$||void 0===$||null===(t=$.rolename)||void 0===t?void 0:t.roleName))),u.a.createElement(y.a,{readOnly:!0,value:(null===$||void 0===$||null===(d=$.rolename)||void 0===d?void 0:d.roleName)&&(null===$||void 0===$||null===(E=$.rolename)||void 0===E?void 0:E.roleName)}))),D&&(null===D||void 0===D?void 0:D.map((function(e,l){var t,o,i,d,r,v,c,m,E,_,C,k,F,S,N,D,w,R,J,K,I,V,P,W,Z,B,G,H,Q,X,ee,le,te,ne,oe,ie,re,ve;return(null===e||void 0===e?void 0:e.phoneinput)?u.a.createElement(u.a.Fragment,null,u.a.createElement(s.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(b.a,null,u.a.createElement(p.a,null,null===e||void 0===e||null===(t=e.label)||void 0===t?void 0:t._text),u.a.createElement(g.a,{disabled:!0,inputClass:"myphoneinput",country:"in",onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:$[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],onChange:function(l){var t;q(Object(n.a)(Object(n.a)({},$),{},Object(a.a)({},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text,l)))}}),Y===l?u.a.createElement(u.a.Fragment,null,ae&&u.a.createElement("span",{style:{color:"red"}},ae)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(d=e.label._text)||void 0===d?void 0:d.includes("ountry"))?(console.log(e),u.a.createElement(s.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(b.a,null,u.a.createElement(p.a,null,null===e||void 0===e||null===(c=e.label)||void 0===c?void 0:c._text),u.a.createElement(h.a,{disabled:!0,inputClass:"countryclass",className:"countryclassnw",options:f.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:U,onChange:function(e){A(e),q(Object(n.a)(Object(n.a)({},$),{},Object(a.a)({},"Country",null===e||void 0===e?void 0:e.name)))}}),Y===l?u.a.createElement(u.a.Fragment,null,ae&&u.a.createElement("span",{style:{color:"red"}},ae)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e||null===(r=e.label._text)||void 0===r?void 0:r.includes("tate"))?u.a.createElement(s.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(b.a,null,u.a.createElement(p.a,null,null===e||void 0===e||null===(m=e.label)||void 0===m?void 0:m._text),u.a.createElement(h.a,{disabled:!0,options:null===O.a||void 0===O.a?void 0:O.a.getStatesOfCountry(null===U||void 0===U?void 0:U.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:L,onChange:function(e){M(e),q(Object(n.a)(Object(n.a)({},$),{},Object(a.a)({},"State",null===e||void 0===e?void 0:e.name)))}}),Y===l?u.a.createElement(u.a.Fragment,null,ae&&u.a.createElement("span",{style:{color:"red"}},ae)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(v=e.label._text)||void 0===v?void 0:v.includes("ity"))?u.a.createElement(s.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(b.a,null,u.a.createElement(p.a,null,null===e||void 0===e||null===(E=e.label)||void 0===E?void 0:E._text),u.a.createElement(h.a,{disabled:!0,options:null===j.a||void 0===j.a?void 0:j.a.getCitiesOfState(null===L||void 0===L?void 0:L.countryCode,null===L||void 0===L?void 0:L.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:T,onChange:function(e){z(e),q(Object(n.a)(Object(n.a)({},$),{},Object(a.a)({},"City",null===e||void 0===e?void 0:e.name)))}}),Y===l?u.a.createElement(u.a.Fragment,null,ae&&u.a.createElement("span",{style:{color:"red"}},ae)):u.a.createElement(u.a.Fragment,null))):u.a.createElement(u.a.Fragment,null,"date"==(null===e||void 0===e||null===(_=e.type)||void 0===_||null===(C=_._attributes)||void 0===C?void 0:C.type)?u.a.createElement(u.a.Fragment,null,u.a.createElement(s.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(b.a,{key:l},u.a.createElement(p.a,null,null===e||void 0===e||null===(k=e.label)||void 0===k?void 0:k._text),u.a.createElement(y.a,{disabled:!0,onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(F=e.type)||void 0===F||null===(S=F._attributes)||void 0===S?void 0:S.type,placeholder:null===e||void 0===e||null===(N=e.placeholder)||void 0===N?void 0:N._text,name:null===e||void 0===e||null===(D=e.name)||void 0===D?void 0:D._text,dateFormat:null===ue||void 0===ue||null===(w=ue.UserInformatio)||void 0===w?void 0:w.dateFormat,value:x()($[null===e||void 0===e||null===(R=e.name)||void 0===R?void 0:R._text]).tz(null===ue||void 0===ue||null===(J=ue.UserInformatio)||void 0===J?void 0:J.timeZone).format(null===ue||void 0===ue||null===(K=ue.UserInformatio)||void 0===K?void 0:K.dateFormat),onChange:function(t){var a,n;return de(t,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,l)}}),Y===l?u.a.createElement(u.a.Fragment,null,ae&&u.a.createElement("span",{style:{color:"red"}},ae)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(u.a.Fragment,null,u.a.createElement(s.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(b.a,{key:l},u.a.createElement(p.a,null,null===e||void 0===e||null===(I=e.label)||void 0===I?void 0:I._text),u.a.createElement(y.a,{disabled:!0,onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(V=e.type)||void 0===V||null===(P=V._attributes)||void 0===P?void 0:P.type,placeholder:null===e||void 0===e||null===(W=e.placeholder)||void 0===W?void 0:W._text,name:null===e||void 0===e||null===(Z=e.name)||void 0===Z?void 0:Z._text,value:$[null===e||void 0===e||null===(B=e.name)||void 0===B?void 0:B._text],onChange:function(t){var a,n;return de(t,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,l)}}),Y===l?u.a.createElement(u.a.Fragment,null,ae&&u.a.createElement("span",{style:{color:"red"}},ae)):u.a.createElement(u.a.Fragment,null))))):u.a.createElement(u.a.Fragment,null,(null===e||void 0===e?void 0:e.number)?u.a.createElement(u.a.Fragment,null,u.a.createElement(s.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(b.a,{key:l},u.a.createElement(p.a,null,null===e||void 0===e||null===(G=e.label)||void 0===G?void 0:G._text),u.a.createElement(y.a,{disabled:!0,onWheel:function(e){e.preventDefault()},onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(H=e.type)||void 0===H||null===(Q=H._attributes)||void 0===Q?void 0:Q.type,placeholder:null===e||void 0===e||null===(X=e.placeholder)||void 0===X?void 0:X._text,name:null===e||void 0===e||null===(ee=e.name)||void 0===ee?void 0:ee._text,value:$[null===e||void 0===e||null===(le=e.name)||void 0===le?void 0:le._text],onChange:function(t){var a,n;return de(t,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,l)}}),Y===l?u.a.createElement(u.a.Fragment,null,ae&&u.a.createElement("span",{style:{color:"red"}},ae)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(s.a,{key:l,lg:"4",md:"4",sm:"12"},u.a.createElement(b.a,{key:l},u.a.createElement(p.a,null,null===e||void 0===e||null===(te=e.label)||void 0===te?void 0:te._text),u.a.createElement(y.a,{disabled:!0,onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(ne=e.type)||void 0===ne||null===(oe=ne._attributes)||void 0===oe?void 0:oe.type,placeholder:null===e||void 0===e||null===(ie=e.placeholder)||void 0===ie?void 0:ie._text,name:null===e||void 0===e||null===(re=e.name)||void 0===re?void 0:re._text,value:$[null===e||void 0===e||null===(ve=e.name)||void 0===ve?void 0:ve._text],onChange:function(t){var a,n;de(t,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,l)}}),Y===l?u.a.createElement(u.a.Fragment,null,ae&&u.a.createElement("span",{style:{color:"red"}},ae)):u.a.createElement(u.a.Fragment,null))))})))),u.a.createElement(s.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},u.a.createElement(p.a,{className:"mb-0"},"Status"),u.a.createElement("div",{className:"form-label-group"},u.a.createElement("input",{disabled:!0,checked:"Active"==$.status,style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{checked:"Deactive"==$.status,disabled:!0,style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Deactive"))),u.a.createElement("hr",null)))))}}}]);
//# sourceMappingURL=331.b8644e80.chunk.js.map
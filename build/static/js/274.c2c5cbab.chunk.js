(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[274],{3069:function(e,t,l){"use strict";l.r(t);var a=l(55),n=l(8),o=l(24),i=l(1),u=l.n(i),d=l(226),r=l.n(d),c=l(901),v=l(893),m=l(894),s=l(238),p=l(905),b=l(895),E=l(930),y=l(896),g=l(883),f=l(897),O=(l(26),l(162)),_=l.n(O),j=(l(227),l(917)),h=l(918),x=l(919),C=l(125),N=l(924),k=l.n(N),F=l(80),S=l(91),D=l.n(S),w=(l(633),l(56)),M=(l(225),l(74));t.default=function(){var e,t,l,d,O=Object(i.useState)([]),N=Object(o.a)(O,2),S=N[0],A=N[1],J=Object(i.useState)({}),K=Object(o.a)(J,2),R=K[0],Y=K[1],I=Object(i.useState)({}),L=Object(o.a)(I,2),P=L[0],T=L[1],H=Object(i.useState)({}),U=Object(o.a)(H,2),V=U[0],W=U[1],q=Object(i.useState)({}),z=Object(o.a)(q,2),B=z[0],G=z[1],Z=Object(i.useState)({}),$=Object(o.a)(Z,2),Q=$[0],X=$[1],ee=Object(i.useState)(""),te=Object(o.a)(ee,2),le=te[0],ae=te[1],ne=Object(i.useState)(""),oe=Object(o.a)(ne,2),ie=oe[0],ue=oe[1],de=Object(i.useState)({}),re=Object(o.a)(de,2),ce=(re[0],re[1],Object(i.useContext)(M.a)),ve=function(e,t,l){var o=e.target,i=o.name,u=o.value,d=o.checked;ae(l),"checkbox"==t?G(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},i,d))):"number"==t?/^\d{0,10}$/.test(u)&&(G(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},i,u))),ue("")):"file"==t?e.target.files&&G(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},i,e.target.files[0]))):u.length<=10?(G(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},i,u))),ue("")):G(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},i,u)))};Object(i.useEffect)((function(){console.log(B)}),[B]),Object(i.useEffect)((function(){Object(w.q)().then((function(e){var t,l,a,n,o,i,u=r.a.xml2json(e.data,{compact:!0,spaces:2});console.log(null===(t=JSON.parse(u))||void 0===t?void 0:t.CreateCustomer),A(null===(l=JSON.parse(u))||void 0===l||null===(a=l.CreateCustomer)||void 0===a?void 0:a.input),X(null===(n=JSON.parse(u))||void 0===n||null===(o=n.CreateCustomer)||void 0===o||null===(i=o.MyDropDown)||void 0===i?void 0:i.dropdown)})).catch((function(e){console.log(e),D()("Something Went Wrong")}))}),[]);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(c.a,null,u.a.createElement(v.a,{className:"m-2"},u.a.createElement(m.a,null,u.a.createElement("h1",{className:"float-left"},"Create Customer")),u.a.createElement(m.a,null,u.a.createElement("div",{className:"float-right"},u.a.createElement(F.b,{render:function(e){var t=e.history;return u.a.createElement(s.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",onClick:function(){return t.push("/app/SoftNumen/CustomerSearch")}}," ","Back")}})))),u.a.createElement(p.a,null,u.a.createElement(b.a,{className:"m-1",onSubmit:function(e){var t,l,a;e.preventDefault();var n=JSON.parse(localStorage.getItem("userData")),o=new FormData;null===S||void 0===S||S.map((function(e,t){var l,a,n,i,u;if("text"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type))o.append("".concat(null===e||void 0===e?void 0:e.name._text),B[null===e||void 0===e||null===(u=e.name)||void 0===u?void 0:u._text]);else if("file"==(null===e||void 0===e||null===(n=e.type)||void 0===n||null===(i=n._attributes)||void 0===i?void 0:i.type)){var d,r,c,v,m,s;if("Shopphoto"==(null===e||void 0===e||null===(d=e.name)||void 0===d?void 0:d._text))null===(c=B[null===e||void 0===e||null===(v=e.name)||void 0===v?void 0:v._text])||void 0===c||c.map((function(t,l){var a;o.append("file",B[null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text][l])}));if("photo"==(null===e||void 0===e||null===(r=e.name)||void 0===r?void 0:r._text))null===(m=B[null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s._text])||void 0===m||m.map((function(t,l){var a;o.append("files",B[null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text][l])}))}else{var p;o.append("".concat(null===e||void 0===e?void 0:e.name._text),B[null===e||void 0===e||null===(p=e.name)||void 0===p?void 0:p._text])}})),o.append("".concat(null===Q||void 0===Q||null===(t=Q.name)||void 0===t?void 0:t._text),B[null===Q||void 0===Q||null===(l=Q.name)||void 0===l?void 0:l._text]),o.append("status",B.status),o.append("created_by",null===n||void 0===n?void 0:n._id),o.append("rolename",null===n||void 0===n||null===(a=n.rolename)||void 0===a?void 0:a._id),navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){new Date(e.timestamp).toLocaleString();o.append("latitude",e.coords.latitude),o.append("longitude",e.coords.longitude)}),(function(e){D()("Error: ".concat(e))}),{timeout:1e4,enableHighAccuracy:!0}):D()("Error: Geolocation not found"),o.forEach((function(e,t){})),ie||Object(w.p)(o).then((function(e){console.log(e),G({}),e.status&&D()("Customer Created Successfully")})).catch((function(e){console.log(e.response),D()("Please Fill correct details")}))}},u.a.createElement(v.a,{className:"mb-2"},Q&&u.a.createElement(m.a,{lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"mb-1"},Q&&(null===Q||void 0===Q||null===(e=Q.label)||void 0===e?void 0:e._text)),u.a.createElement(g.a,{required:!0,type:"select",name:null===Q||void 0===Q||null===(t=Q.name)||void 0===t?void 0:t._text,value:B[null===Q||void 0===Q||null===(l=Q.name)||void 0===l?void 0:l._text],onChange:ve},u.a.createElement("option",{value:""},"--Select --"),null===Q||void 0===Q||null===(d=Q.option)||void 0===d?void 0:d.map((function(e,t){var l,a;return u.a.createElement("option",{key:t,value:null===e||void 0===e||null===(l=e._attributes)||void 0===l?void 0:l.value},null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.value)}))))),S&&(null===S||void 0===S?void 0:S.map((function(e,t){var l,o,i,d,r,c,v,s,p,b,g,O,N,F,S,D,w,M,A,J,K,I,L,H,U,q,z,Z,$,Q,X,ee,te,ne,oe,ue,de,re,me,se,pe,be,Ee,ye,ge,fe,Oe;k()("2022-08-05T12:00:00").tz("America/New_York").format("D MMM, YYYY HH:mm");return(null===e||void 0===e?void 0:e.phoneinput)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(l=e.label)||void 0===l?void 0:l._text),u.a.createElement(_.a,{inputClass:"myphoneinput",country:"us",onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:B[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],onChange:function(t){var l;G(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},null===e||void 0===e||null===(l=e.name)||void 0===l?void 0:l._text,t)))}}),le===t?u.a.createElement(u.a.Fragment,null,ie&&u.a.createElement("span",{style:{color:"red"}},ie)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(d=e.label._text)||void 0===d?void 0:d.includes("ountry"))?u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(v=e.label)||void 0===v?void 0:v._text),u.a.createElement(C.a,{inputClass:"countryclass",className:"countryclassnw",options:j.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:R,onChange:function(e){Y(e),G(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},"Country",null===e||void 0===e?void 0:e.name)))}}),le===t?u.a.createElement(u.a.Fragment,null,ie&&u.a.createElement("span",{style:{color:"red"}},ie)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(r=e.label._text)||void 0===r?void 0:r.includes("tate"))?u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(s=e.label)||void 0===s?void 0:s._text),u.a.createElement(C.a,{options:null===h.a||void 0===h.a?void 0:h.a.getStatesOfCountry(null===R||void 0===R?void 0:R.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:P,onChange:function(e){T(e),G(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},"State",null===e||void 0===e?void 0:e.name)))}}),le===t?u.a.createElement(u.a.Fragment,null,ie&&u.a.createElement("span",{style:{color:"red"}},ie)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(c=e.label._text)||void 0===c?void 0:c.includes("ity"))?u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(p=e.label)||void 0===p?void 0:p._text),u.a.createElement(C.a,{options:null===x.a||void 0===x.a?void 0:x.a.getCitiesOfState(null===P||void 0===P?void 0:P.countryCode,null===P||void 0===P?void 0:P.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:V,onChange:function(e){W(e),G(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},"City",null===e||void 0===e?void 0:e.name)))}}),le===t?u.a.createElement(u.a.Fragment,null,ie&&u.a.createElement("span",{style:{color:"red"}},ie)):u.a.createElement(u.a.Fragment,null))):u.a.createElement(u.a.Fragment,null,"date"==(null===e||void 0===e||null===(b=e.type)||void 0===b||null===(g=b._attributes)||void 0===g?void 0:g.type)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,{key:t},u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(O=e.label)||void 0===O?void 0:O._text),u.a.createElement(f.a,{onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(N=e.type)||void 0===N||null===(F=N._attributes)||void 0===F?void 0:F.type,placeholder:null===e||void 0===e||null===(S=e.placeholder)||void 0===S?void 0:S._text,name:null===e||void 0===e||null===(D=e.name)||void 0===D?void 0:D._text,dateFormat:null===ce||void 0===ce||null===(w=ce.UserInformatio)||void 0===w?void 0:w.dateFormat,value:k()(B[null===e||void 0===e||null===(M=e.name)||void 0===M?void 0:M._text]).tz(null===ce||void 0===ce||null===(A=ce.UserInformatio)||void 0===A?void 0:A.timeZone).format(null===ce||void 0===ce||null===(J=ce.UserInformatio)||void 0===J?void 0:J.dateFormat),onChange:function(l){var a,n;return ve(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),le===t?u.a.createElement(u.a.Fragment,null,ie&&u.a.createElement("span",{style:{color:"red"}},ie)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,{key:t},u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(K=e.label)||void 0===K?void 0:K._text),u.a.createElement(f.a,{onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(I=e.type)||void 0===I||null===(L=I._attributes)||void 0===L?void 0:L.type,placeholder:null===e||void 0===e||null===(H=e.placeholder)||void 0===H?void 0:H._text,name:null===e||void 0===e||null===(U=e.name)||void 0===U?void 0:U._text,value:B[null===e||void 0===e||null===(q=e.name)||void 0===q?void 0:q._text],onChange:function(l){var a,n;return ve(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),le===t?u.a.createElement(u.a.Fragment,null,ie&&u.a.createElement("span",{style:{color:"red"}},ie)):u.a.createElement(u.a.Fragment,null))))):u.a.createElement(u.a.Fragment,null,(null===e||void 0===e?void 0:e.number)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,{key:t},u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(z=e.label)||void 0===z?void 0:z._text),u.a.createElement(f.a,{onWheel:function(e){e.preventDefault()},onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(Z=e.type)||void 0===Z||null===($=Z._attributes)||void 0===$?void 0:$.type,placeholder:null===e||void 0===e||null===(Q=e.placeholder)||void 0===Q?void 0:Q._text,name:null===e||void 0===e||null===(X=e.name)||void 0===X?void 0:X._text,value:B[null===e||void 0===e||null===(ee=e.name)||void 0===ee?void 0:ee._text],onChange:function(l){var a,n;return ve(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),le===t?u.a.createElement(u.a.Fragment,null,ie&&u.a.createElement("span",{style:{color:"red"}},ie)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,{key:t},(null===e||void 0===e||null===(te=e.type)||void 0===te||null===(ne=te._attributes)||void 0===ne?void 0:ne.type)&&"file"==(null===e||void 0===e||null===(oe=e.type)||void 0===oe||null===(ue=oe._attributes)||void 0===ue?void 0:ue.type)?u.a.createElement(u.a.Fragment,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(de=e.label)||void 0===de?void 0:de._text),u.a.createElement(f.a,{multiple:!0,className:"form-control",type:null===e||void 0===e||null===(re=e.type)||void 0===re||null===(me=re._attributes)||void 0===me?void 0:me.type,placeholder:null===e||void 0===e||null===(se=e.placeholder)||void 0===se?void 0:se._text,name:null===e||void 0===e||null===(pe=e.name)||void 0===pe?void 0:pe._text,onChange:function(l){var o,i;!function(e,t,l){var o=e.target,i=o.name,u=(o.value,o.checked,Array.from(e.target.files));ae(l),G(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},i,u)))}(l,null===e||void 0===e||null===(o=e.type)||void 0===o||null===(i=o._attributes)||void 0===i||i.type,t)}}),le===t?u.a.createElement(u.a.Fragment,null,ie&&u.a.createElement("span",{style:{color:"red"}},ie)):u.a.createElement(u.a.Fragment,null)):u.a.createElement(u.a.Fragment,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(be=e.label)||void 0===be?void 0:be._text),u.a.createElement(f.a,{className:"form-control",onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(Ee=e.type)||void 0===Ee||null===(ye=Ee._attributes)||void 0===ye?void 0:ye.type,placeholder:null===e||void 0===e||null===(ge=e.placeholder)||void 0===ge?void 0:ge._text,name:null===e||void 0===e||null===(fe=e.name)||void 0===fe?void 0:fe._text,value:B[null===e||void 0===e||null===(Oe=e.name)||void 0===Oe?void 0:Oe._text],onChange:function(l){var a,n;ve(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),le===t?u.a.createElement(u.a.Fragment,null,ie&&u.a.createElement("span",{style:{color:"red"}},ie)):u.a.createElement(u.a.Fragment,null)))))})))),u.a.createElement("hr",null),u.a.createElement(v.a,{className:"mt-2"},u.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},u.a.createElement(y.a,{className:"mb-0"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:function(e){G(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},"status",e.target.value)))}},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),u.a.createElement(v.a,null,u.a.createElement(s.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}},930:function(e,t,l){"use strict";var a=l(9),n=l(12),o=l(1),i=l.n(o),u=l(2),d=l.n(u),r=l(7),c=l.n(r),v=l(4),m=["className","cssModule","row","disabled","check","inline","tag"],s={children:d.a.node,row:d.a.bool,check:d.a.bool,inline:d.a.bool,disabled:d.a.bool,tag:v.tagPropType,className:d.a.string,cssModule:d.a.object},p=function(e){var t=e.className,l=e.cssModule,o=e.row,u=e.disabled,d=e.check,r=e.inline,s=e.tag,p=Object(n.a)(e,m),b=Object(v.mapToCssModules)(c()(t,!!o&&"row",d?"form-check":"form-group",!(!d||!r)&&"form-check-inline",!(!d||!u)&&"disabled"),l);return"fieldset"===s&&(p.disabled=u),i.a.createElement(s,Object(a.a)({},p,{className:b}))};p.propTypes=s,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=274.c2c5cbab.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[233],{3066:function(e,t,l){"use strict";l.r(t);var a=l(55),n=l(8),o=l(45),i=l(1),u=l.n(i),r=l(630),d=l.n(r),c=l(899),v=l(891),m=l(892),s=l(173),p=l(903),b=l(893),E=l(941),y=l(894),f=l(881),g=l(895),O=(l(25),l(162)),_=l.n(O),j=(l(631),l(915)),h=l(916),x=l(917),C=l(124),N=l(924),k=l.n(N),F=l(78),S=l(161),D=l.n(S),w=(l(632),l(79)),M=(l(918),l(90));t.default=function(){var e,t,l,r,O=Object(i.useState)([]),N=Object(o.a)(O,2),S=N[0],R=N[1],A=Object(i.useState)({}),J=Object(o.a)(A,2),K=J[0],Y=J[1],T=Object(i.useState)({}),I=Object(o.a)(T,2),L=I[0],P=I[1],U=Object(i.useState)({}),V=Object(o.a)(U,2),W=V[0],z=V[1],H=Object(i.useState)({}),q=Object(o.a)(H,2),B=q[0],Z=q[1],$=Object(i.useState)({}),G=Object(o.a)($,2),Q=G[0],X=G[1],ee=Object(i.useState)(""),te=Object(o.a)(ee,2),le=te[0],ae=te[1],ne=Object(i.useState)(""),oe=Object(o.a)(ne,2),ie=oe[0],ue=oe[1],re=Object(i.useState)({}),de=Object(o.a)(re,2),ce=(de[0],de[1],Object(i.useContext)(M.a)),ve=function(e,t,l){var o=e.target,i=o.name,u=o.value,r=o.checked;ae(l),"checkbox"==t?Z(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},i,r))):"number"==t?/^\d{0,10}$/.test(u)&&(Z(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},i,u))),ue("")):"file"==t?e.target.files&&Z(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},i,e.target.files[0]))):u.length<=10?(Z(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},i,u))),ue("")):Z(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},i,u)))};Object(i.useEffect)((function(){console.log(B)}),[B]),Object(i.useEffect)((function(){Object(w.p)().then((function(e){var t,l,a,n,o,i,u=d.a.xml2json(e.data,{compact:!0,spaces:2});console.log(null===(t=JSON.parse(u))||void 0===t?void 0:t.CreateCustomer),R(null===(l=JSON.parse(u))||void 0===l||null===(a=l.CreateCustomer)||void 0===a?void 0:a.input),X(null===(n=JSON.parse(u))||void 0===n||null===(o=n.CreateCustomer)||void 0===o||null===(i=o.MyDropDown)||void 0===i?void 0:i.dropdown)})).catch((function(e){console.log(e),D()("Something Went Wrong")}))}),[]);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(c.a,null,u.a.createElement(v.a,{className:"m-2"},u.a.createElement(m.a,null,u.a.createElement("h1",{className:"float-left"},"Create Customer")),u.a.createElement(m.a,null,u.a.createElement("div",{className:"float-right"},u.a.createElement(F.b,{render:function(e){var t=e.history;return u.a.createElement(s.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",onClick:function(){return t.push("/app/SoftNumen/CustomerSearch")}}," ","Back")}})))),u.a.createElement(p.a,null,u.a.createElement(b.a,{className:"m-1",onSubmit:function(e){var t,l;e.preventDefault();var a=new FormData;null===S||void 0===S||S.map((function(e,t){var l,n,o,i,u;if("text"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(n=l._attributes)||void 0===n?void 0:n.type))a.append("".concat(null===e||void 0===e?void 0:e.name._text),B[null===e||void 0===e||null===(u=e.name)||void 0===u?void 0:u._text]);else if("file"==(null===e||void 0===e||null===(o=e.type)||void 0===o||null===(i=o._attributes)||void 0===i?void 0:i.type)){var r,d,c,v,m,s;if("Shopphoto"==(null===e||void 0===e||null===(r=e.name)||void 0===r?void 0:r._text))null===(c=B[null===e||void 0===e||null===(v=e.name)||void 0===v?void 0:v._text])||void 0===c||c.map((function(t,l){var n;a.append("file",B[null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text][l])}));if("photo"==(null===e||void 0===e||null===(d=e.name)||void 0===d?void 0:d._text))null===(m=B[null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s._text])||void 0===m||m.map((function(t,l){var n;a.append("files",B[null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text][l])}))}else{var p;a.append("".concat(null===e||void 0===e?void 0:e.name._text),B[null===e||void 0===e||null===(p=e.name)||void 0===p?void 0:p._text])}})),a.append("".concat(null===Q||void 0===Q||null===(t=Q.name)||void 0===t?void 0:t._text),B[null===Q||void 0===Q||null===(l=Q.name)||void 0===l?void 0:l._text]),a.append("status",B.status),a.forEach((function(e,t){})),ie?D()("Error occured while Entering Details"):Object(w.o)(a).then((function(e){console.log(e),Z({}),e.status&&D()("Customer Created Successfully")})).catch((function(e){console.log(e.response),D()("Please Fill correct details")}))}},u.a.createElement(v.a,{className:"mb-2"},Q&&u.a.createElement(m.a,{lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"mb-1"},Q&&(null===Q||void 0===Q||null===(e=Q.label)||void 0===e?void 0:e._text)),u.a.createElement(f.a,{required:!0,type:"select",name:null===Q||void 0===Q||null===(t=Q.name)||void 0===t?void 0:t._text,value:B[null===Q||void 0===Q||null===(l=Q.name)||void 0===l?void 0:l._text],onChange:ve},u.a.createElement("option",{value:""},"--Select Role--"),null===Q||void 0===Q||null===(r=Q.option)||void 0===r?void 0:r.map((function(e,t){var l,a;return u.a.createElement("option",{key:t,value:null===e||void 0===e||null===(l=e._attributes)||void 0===l?void 0:l.value},null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.value)}))))),S&&(null===S||void 0===S?void 0:S.map((function(e,t){var l,o,i,r,d,c,v,s,p,b,f,O,N,F,S,D,w,M,R,A,J,T,I,U,V,H,q,$,G,Q,X,ee,te,ne,oe,ue,re,de,me,se,pe,be,Ee,ye,fe,ge,Oe;k()("2022-08-05T12:00:00").tz("America/New_York").format("D MMM, YYYY HH:mm");return(null===e||void 0===e?void 0:e.phoneinput)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(l=e.label)||void 0===l?void 0:l._text),u.a.createElement(_.a,{inputClass:"myphoneinput",country:"us",onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:B[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],onChange:function(t){var l;Z(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},null===e||void 0===e||null===(l=e.name)||void 0===l?void 0:l._text,t)))}}),le===t?u.a.createElement(u.a.Fragment,null,ie&&u.a.createElement("span",{style:{color:"red"}},ie)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(r=e.label._text)||void 0===r?void 0:r.includes("ountry"))?u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(v=e.label)||void 0===v?void 0:v._text),u.a.createElement(C.a,{inputClass:"countryclass",className:"countryclassnw",options:j.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:K,onChange:function(e){Y(e),Z(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},"Country",null===e||void 0===e?void 0:e.name)))}}),le===t?u.a.createElement(u.a.Fragment,null,ie&&u.a.createElement("span",{style:{color:"red"}},ie)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(d=e.label._text)||void 0===d?void 0:d.includes("tate"))?u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(s=e.label)||void 0===s?void 0:s._text),u.a.createElement(C.a,{options:null===h.a||void 0===h.a?void 0:h.a.getStatesOfCountry(null===K||void 0===K?void 0:K.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:L,onChange:function(e){P(e),Z(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},"State",null===e||void 0===e?void 0:e.name)))}}),le===t?u.a.createElement(u.a.Fragment,null,ie&&u.a.createElement("span",{style:{color:"red"}},ie)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(c=e.label._text)||void 0===c?void 0:c.includes("ity"))?u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(p=e.label)||void 0===p?void 0:p._text),u.a.createElement(C.a,{options:null===x.a||void 0===x.a?void 0:x.a.getCitiesOfState(null===L||void 0===L?void 0:L.countryCode,null===L||void 0===L?void 0:L.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:W,onChange:function(e){z(e),Z(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},"City",null===e||void 0===e?void 0:e.name)))}}),le===t?u.a.createElement(u.a.Fragment,null,ie&&u.a.createElement("span",{style:{color:"red"}},ie)):u.a.createElement(u.a.Fragment,null))):u.a.createElement(u.a.Fragment,null,"date"==(null===e||void 0===e||null===(b=e.type)||void 0===b||null===(f=b._attributes)||void 0===f?void 0:f.type)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,{key:t},u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(O=e.label)||void 0===O?void 0:O._text),u.a.createElement(g.a,{onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(N=e.type)||void 0===N||null===(F=N._attributes)||void 0===F?void 0:F.type,placeholder:null===e||void 0===e||null===(S=e.placeholder)||void 0===S?void 0:S._text,name:null===e||void 0===e||null===(D=e.name)||void 0===D?void 0:D._text,dateFormat:null===ce||void 0===ce||null===(w=ce.UserInformatio)||void 0===w?void 0:w.dateFormat,value:k()(B[null===e||void 0===e||null===(M=e.name)||void 0===M?void 0:M._text]).tz(null===ce||void 0===ce||null===(R=ce.UserInformatio)||void 0===R?void 0:R.timeZone).format(null===ce||void 0===ce||null===(A=ce.UserInformatio)||void 0===A?void 0:A.dateFormat),onChange:function(l){var a,n;return ve(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),le===t?u.a.createElement(u.a.Fragment,null,ie&&u.a.createElement("span",{style:{color:"red"}},ie)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,{key:t},u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(J=e.label)||void 0===J?void 0:J._text),u.a.createElement(g.a,{onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(T=e.type)||void 0===T||null===(I=T._attributes)||void 0===I?void 0:I.type,placeholder:null===e||void 0===e||null===(U=e.placeholder)||void 0===U?void 0:U._text,name:null===e||void 0===e||null===(V=e.name)||void 0===V?void 0:V._text,value:B[null===e||void 0===e||null===(H=e.name)||void 0===H?void 0:H._text],onChange:function(l){var a,n;return ve(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),le===t?u.a.createElement(u.a.Fragment,null,ie&&u.a.createElement("span",{style:{color:"red"}},ie)):u.a.createElement(u.a.Fragment,null))))):u.a.createElement(u.a.Fragment,null,(null===e||void 0===e?void 0:e.number)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,{key:t},u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(q=e.label)||void 0===q?void 0:q._text),u.a.createElement(g.a,{onWheel:function(e){e.preventDefault()},onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===($=e.type)||void 0===$||null===(G=$._attributes)||void 0===G?void 0:G.type,placeholder:null===e||void 0===e||null===(Q=e.placeholder)||void 0===Q?void 0:Q._text,name:null===e||void 0===e||null===(X=e.name)||void 0===X?void 0:X._text,value:B[null===e||void 0===e||null===(ee=e.name)||void 0===ee?void 0:ee._text],onChange:function(l){var a,n;return ve(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),le===t?u.a.createElement(u.a.Fragment,null,ie&&u.a.createElement("span",{style:{color:"red"}},ie)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,{key:t},(null===e||void 0===e||null===(te=e.type)||void 0===te||null===(ne=te._attributes)||void 0===ne?void 0:ne.type)&&"file"==(null===e||void 0===e||null===(oe=e.type)||void 0===oe||null===(ue=oe._attributes)||void 0===ue?void 0:ue.type)?u.a.createElement(u.a.Fragment,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(re=e.label)||void 0===re?void 0:re._text),u.a.createElement(g.a,{multiple:!0,className:"form-control",type:null===e||void 0===e||null===(de=e.type)||void 0===de||null===(me=de._attributes)||void 0===me?void 0:me.type,placeholder:null===e||void 0===e||null===(se=e.placeholder)||void 0===se?void 0:se._text,name:null===e||void 0===e||null===(pe=e.name)||void 0===pe?void 0:pe._text,onChange:function(l){var o,i;!function(e,t,l){var o=e.target,i=o.name,u=(o.value,o.checked,Array.from(e.target.files));ae(l),Z(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},i,u)))}(l,null===e||void 0===e||null===(o=e.type)||void 0===o||null===(i=o._attributes)||void 0===i||i.type,t)}}),le===t?u.a.createElement(u.a.Fragment,null,ie&&u.a.createElement("span",{style:{color:"red"}},ie)):u.a.createElement(u.a.Fragment,null)):u.a.createElement(u.a.Fragment,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(be=e.label)||void 0===be?void 0:be._text),u.a.createElement(g.a,{className:"form-control",onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(Ee=e.type)||void 0===Ee||null===(ye=Ee._attributes)||void 0===ye?void 0:ye.type,placeholder:null===e||void 0===e||null===(fe=e.placeholder)||void 0===fe?void 0:fe._text,name:null===e||void 0===e||null===(ge=e.name)||void 0===ge?void 0:ge._text,value:B[null===e||void 0===e||null===(Oe=e.name)||void 0===Oe?void 0:Oe._text],onChange:function(l){var a,n;ve(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),le===t?u.a.createElement(u.a.Fragment,null,ie&&u.a.createElement("span",{style:{color:"red"}},ie)):u.a.createElement(u.a.Fragment,null)))))})))),u.a.createElement("hr",null),u.a.createElement(v.a,{className:"mt-2"},u.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},u.a.createElement(y.a,{className:"mb-0"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:function(e){Z(Object(n.a)(Object(n.a)({},B),{},Object(a.a)({},"status",e.target.value)))}},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),u.a.createElement(v.a,null,u.a.createElement(s.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}},918:function(e,t,l){},941:function(e,t,l){"use strict";var a=l(7),n=l(12),o=l(1),i=l.n(o),u=l(2),r=l.n(u),d=l(6),c=l.n(d),v=l(4),m=["className","cssModule","row","disabled","check","inline","tag"],s={children:r.a.node,row:r.a.bool,check:r.a.bool,inline:r.a.bool,disabled:r.a.bool,tag:v.tagPropType,className:r.a.string,cssModule:r.a.object},p=function(e){var t=e.className,l=e.cssModule,o=e.row,u=e.disabled,r=e.check,d=e.inline,s=e.tag,p=Object(n.a)(e,m),b=Object(v.mapToCssModules)(c()(t,!!o&&"row",r?"form-check":"form-group",!(!r||!d)&&"form-check-inline",!(!r||!u)&&"disabled"),l);return"fieldset"===s&&(p.disabled=u),i.a.createElement(s,Object(a.a)({},p,{className:b}))};p.propTypes=s,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=233.fab51d24.chunk.js.map
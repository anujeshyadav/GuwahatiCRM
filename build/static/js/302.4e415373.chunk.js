(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[302],{3286:function(e,t,l){"use strict";l.r(t);var a=l(59),n=l(7),o=l(24),i=l(1),u=l.n(i),r=l(232),d=l.n(r),c=l(909),v=l(901),m=l(902),s=l(243),p=l(913),b=l(903),y=l(936),E=l(904),f=l(905),g=(l(26),l(168)),O=l.n(g),j=(l(233),l(923)),h=l(924),_=l(925),x=l(131),k=l(929),C=l.n(k),F=l(83),N=l(95),S=l.n(N),D=(l(643),l(53)),w=(l(231),l(76));t.default=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),l=t[0],r=t[1],g=Object(i.useState)({}),k=Object(o.a)(g,2),N=k[0],M=k[1],A=Object(i.useState)({}),K=Object(o.a)(A,2),R=K[0],Y=K[1],J=Object(i.useState)({}),T=Object(o.a)(J,2),z=T[0],I=T[1],L=Object(i.useState)({}),P=Object(o.a)(L,2),U=P[0],V=P[1],H=Object(i.useState)({}),B=Object(o.a)(H,2),G=(B[0],B[1],Object(i.useState)("")),W=Object(o.a)(G,2),Z=W[0],$=W[1],q=Object(i.useState)(""),Q=Object(o.a)(q,2),X=Q[0],ee=Q[1],te=Object(i.useState)({}),le=Object(o.a)(te,2),ae=(le[0],le[1],Object(i.useContext)(w.a)),ne=function(e,t,l){var o=e.target,i=o.name,u=o.value,r=o.checked;$(l),"checkbox"==t?V(Object(n.a)(Object(n.a)({},U),{},Object(a.a)({},i,r))):"number"==t?/^\d{0,10}$/.test(u)&&(V(Object(n.a)(Object(n.a)({},U),{},Object(a.a)({},i,u))),ee("")):"file"==t?e.target.files&&V(Object(n.a)(Object(n.a)({},U),{},Object(a.a)({},i,e.target.files[0]))):u.length<=10?(V(Object(n.a)(Object(n.a)({},U),{},Object(a.a)({},i,u))),ee("")):V(Object(n.a)(Object(n.a)({},U),{},Object(a.a)({},i,u)))};Object(i.useEffect)((function(){console.log(U)}),[U]),Object(i.useEffect)((function(){Object(D.z)().then((function(e){var t,l,a;console.log(null===e||void 0===e?void 0:e.data);var n=d.a.xml2json(null===e||void 0===e?void 0:e.data,{compact:!0,spaces:2});console.log(null===(t=JSON.parse(n))||void 0===t?void 0:t.Createsalesman),r(null===(l=JSON.parse(n))||void 0===l||null===(a=l.Createsalesman)||void 0===a?void 0:a.input)})).catch((function(e){console.log(e)}))}),[]);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(c.a,null,u.a.createElement(v.a,{className:"m-2"},u.a.createElement(m.a,null,u.a.createElement("h1",{className:"float-left"},"Create Sales Man")),u.a.createElement(m.a,null,u.a.createElement("div",{className:"float-right"},u.a.createElement(F.b,{render:function(e){var t=e.history;return u.a.createElement(s.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",onClick:function(){return t.push("/app/SoftNumen/CreateSalesMan")}}," ","Back")}})))),u.a.createElement(p.a,null,u.a.createElement(b.a,{className:"m-1",onSubmit:function(e){e.preventDefault();var t=new FormData;null===l||void 0===l||l.map((function(e,l){var a,n,o,i,u;if("text"==(null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type))t.append("".concat(null===e||void 0===e?void 0:e.name._text),U[null===e||void 0===e||null===(u=e.name)||void 0===u?void 0:u._text]);else if("file"==(null===e||void 0===e||null===(o=e.type)||void 0===o||null===(i=o._attributes)||void 0===i?void 0:i.type)){var r,d,c,v,m,s;if("Shopphoto"==(null===e||void 0===e||null===(r=e.name)||void 0===r?void 0:r._text))null===(c=U[null===e||void 0===e||null===(v=e.name)||void 0===v?void 0:v._text])||void 0===c||c.map((function(l,a){var n;t.append("file",U[null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text][a])}));if("photo"==(null===e||void 0===e||null===(d=e.name)||void 0===d?void 0:d._text))null===(m=U[null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s._text])||void 0===m||m.map((function(l,a){var n;t.append("files",U[null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text][a])}))}else t.append("status",U.status)})),t.forEach((function(e,t){console.log(t,e)})),X?S()("Error occured while Entering Details"):Object(D.G)(t).then((function(e){console.log(e),e.status&&(window.location.reload(),S()("Sales Person Created Successfully"))})).catch((function(e){console.log(e.response)}))}},u.a.createElement(v.a,{className:"mb-2"},l&&(null===l||void 0===l?void 0:l.map((function(e,t){var l,o,i,r,d,c,v,s,p,b,g,k,F,S,D,w,A,K,J,T,L,P,H,B,G,W,q,Q,ee,te,le,oe,ie,ue,re,de,ce,ve,me,se,pe,be,ye,Ee,fe,ge,Oe;C()("2022-08-05T12:00:00").tz("America/New_York").format("D MMM, YYYY HH:mm");return(null===e||void 0===e?void 0:e.phoneinput)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(E.a,{className:"mb-1"},null===e||void 0===e||null===(l=e.label)||void 0===l?void 0:l._text),u.a.createElement(O.a,{inputClass:"myphoneinput",country:"in",onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:U[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],onChange:function(t){var l;V(Object(n.a)(Object(n.a)({},U),{},Object(a.a)({},null===e||void 0===e||null===(l=e.name)||void 0===l?void 0:l._text,t)))}}),Z===t?u.a.createElement(u.a.Fragment,null,X&&u.a.createElement("span",{style:{color:"red"}},X)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(r=e.label._text)||void 0===r?void 0:r.includes("ountry"))?(console.log(e),u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(E.a,{className:"mb-1"},null===e||void 0===e||null===(v=e.label)||void 0===v?void 0:v._text),u.a.createElement(x.a,{inputClass:"countryclass",className:"countryclassnw",options:j.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:N,onChange:function(e){M(e),V(Object(n.a)(Object(n.a)({},U),{},Object(a.a)({},"Country",null===e||void 0===e?void 0:e.name)))}}),Z===t?u.a.createElement(u.a.Fragment,null,X&&u.a.createElement("span",{style:{color:"red"}},X)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e||null===(d=e.label._text)||void 0===d?void 0:d.includes("tate"))?u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(E.a,{className:"mb-1"},null===e||void 0===e||null===(s=e.label)||void 0===s?void 0:s._text),u.a.createElement(x.a,{options:null===h.a||void 0===h.a?void 0:h.a.getStatesOfCountry(null===N||void 0===N?void 0:N.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:R,onChange:function(e){Y(e),V(Object(n.a)(Object(n.a)({},U),{},Object(a.a)({},"State",null===e||void 0===e?void 0:e.name)))}}),Z===t?u.a.createElement(u.a.Fragment,null,X&&u.a.createElement("span",{style:{color:"red"}},X)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(c=e.label._text)||void 0===c?void 0:c.includes("ity"))?u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(E.a,{className:"mb-1"},null===e||void 0===e||null===(p=e.label)||void 0===p?void 0:p._text),u.a.createElement(x.a,{options:null===_.a||void 0===_.a?void 0:_.a.getCitiesOfState(null===R||void 0===R?void 0:R.countryCode,null===R||void 0===R?void 0:R.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:z,onChange:function(e){I(e),V(Object(n.a)(Object(n.a)({},U),{},Object(a.a)({},"City",null===e||void 0===e?void 0:e.name)))}}),Z===t?u.a.createElement(u.a.Fragment,null,X&&u.a.createElement("span",{style:{color:"red"}},X)):u.a.createElement(u.a.Fragment,null))):u.a.createElement(u.a.Fragment,null,"date"==(null===e||void 0===e||null===(b=e.type)||void 0===b||null===(g=b._attributes)||void 0===g?void 0:g.type)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(y.a,{key:t},u.a.createElement(E.a,{className:"mb-1"},null===e||void 0===e||null===(k=e.label)||void 0===k?void 0:k._text),u.a.createElement(f.a,{onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(F=e.type)||void 0===F||null===(S=F._attributes)||void 0===S?void 0:S.type,placeholder:null===e||void 0===e||null===(D=e.placeholder)||void 0===D?void 0:D._text,name:null===e||void 0===e||null===(w=e.name)||void 0===w?void 0:w._text,dateFormat:null===ae||void 0===ae||null===(A=ae.UserInformatio)||void 0===A?void 0:A.dateFormat,value:C()(U[null===e||void 0===e||null===(K=e.name)||void 0===K?void 0:K._text]).tz(null===ae||void 0===ae||null===(J=ae.UserInformatio)||void 0===J?void 0:J.timeZone).format(null===ae||void 0===ae||null===(T=ae.UserInformatio)||void 0===T?void 0:T.dateFormat),onChange:function(l){var a,n;return ne(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),Z===t?u.a.createElement(u.a.Fragment,null,X&&u.a.createElement("span",{style:{color:"red"}},X)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(y.a,{key:t},u.a.createElement(E.a,{className:"mb-1"},null===e||void 0===e||null===(L=e.label)||void 0===L?void 0:L._text),u.a.createElement(f.a,{onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(P=e.type)||void 0===P||null===(H=P._attributes)||void 0===H?void 0:H.type,placeholder:null===e||void 0===e||null===(B=e.placeholder)||void 0===B?void 0:B._text,name:null===e||void 0===e||null===(G=e.name)||void 0===G?void 0:G._text,value:U[null===e||void 0===e||null===(W=e.name)||void 0===W?void 0:W._text],onChange:function(l){var a,n;return ne(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),Z===t?u.a.createElement(u.a.Fragment,null,X&&u.a.createElement("span",{style:{color:"red"}},X)):u.a.createElement(u.a.Fragment,null))))):u.a.createElement(u.a.Fragment,null,(null===e||void 0===e?void 0:e.number)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(y.a,{key:t},u.a.createElement(E.a,{className:"mb-1"},null===e||void 0===e||null===(q=e.label)||void 0===q?void 0:q._text),u.a.createElement(f.a,{onWheel:function(e){e.preventDefault()},onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(Q=e.type)||void 0===Q||null===(ee=Q._attributes)||void 0===ee?void 0:ee.type,placeholder:null===e||void 0===e||null===(te=e.placeholder)||void 0===te?void 0:te._text,name:null===e||void 0===e||null===(le=e.name)||void 0===le?void 0:le._text,value:U[null===e||void 0===e||null===(oe=e.name)||void 0===oe?void 0:oe._text],onChange:function(l){var a,n;return ne(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),Z===t?u.a.createElement(u.a.Fragment,null,X&&u.a.createElement("span",{style:{color:"red"}},X)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(y.a,{key:t},(null===e||void 0===e||null===(ie=e.type)||void 0===ie||null===(ue=ie._attributes)||void 0===ue?void 0:ue.type)&&"file"==(null===e||void 0===e||null===(re=e.type)||void 0===re||null===(de=re._attributes)||void 0===de?void 0:de.type)?u.a.createElement(u.a.Fragment,null,u.a.createElement(E.a,{className:"mb-1"},null===e||void 0===e||null===(ce=e.label)||void 0===ce?void 0:ce._text),u.a.createElement(f.a,{multiple:!0,className:"form-control",type:null===e||void 0===e||null===(ve=e.type)||void 0===ve||null===(me=ve._attributes)||void 0===me?void 0:me.type,placeholder:null===e||void 0===e||null===(se=e.placeholder)||void 0===se?void 0:se._text,name:null===e||void 0===e||null===(pe=e.name)||void 0===pe?void 0:pe._text,onChange:function(l){var o,i;!function(e,t,l){var o=e.target,i=o.name,u=(o.value,o.checked,Array.from(e.target.files));$(l),V(Object(n.a)(Object(n.a)({},U),{},Object(a.a)({},i,u)))}(l,null===e||void 0===e||null===(o=e.type)||void 0===o||null===(i=o._attributes)||void 0===i||i.type,t)}}),Z===t?u.a.createElement(u.a.Fragment,null,X&&u.a.createElement("span",{style:{color:"red"}},X)):u.a.createElement(u.a.Fragment,null)):u.a.createElement(u.a.Fragment,null,u.a.createElement(E.a,{className:"mb-1"},null===e||void 0===e||null===(be=e.label)||void 0===be?void 0:be._text),u.a.createElement(f.a,{className:"form-control",onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(ye=e.type)||void 0===ye||null===(Ee=ye._attributes)||void 0===Ee?void 0:Ee.type,placeholder:null===e||void 0===e||null===(fe=e.placeholder)||void 0===fe?void 0:fe._text,name:null===e||void 0===e||null===(ge=e.name)||void 0===ge?void 0:ge._text,value:U[null===e||void 0===e||null===(Oe=e.name)||void 0===Oe?void 0:Oe._text],onChange:function(l){var a,n;ne(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),Z===t?u.a.createElement(u.a.Fragment,null,X&&u.a.createElement("span",{style:{color:"red"}},X)):u.a.createElement(u.a.Fragment,null)))))})))),u.a.createElement("hr",null),u.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},u.a.createElement(E.a,{className:"mb-0"},"Status"),u.a.createElement("div",null,u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active",className:"form-label-group",onChange:function(e){V(Object(n.a)(Object(n.a)({},U),{},Object(a.a)({},"status","Active")))}}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive",onChange:function(e){V(Object(n.a)(Object(n.a)({},U),{},Object(a.a)({},"status","Deactive")))}}),u.a.createElement("span",{style:{marginRight:"3px"}},"Deactive"))),u.a.createElement(v.a,null,u.a.createElement(s.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}},936:function(e,t,l){"use strict";var a=l(9),n=l(11),o=l(1),i=l.n(o),u=l(2),r=l.n(u),d=l(8),c=l.n(d),v=l(5),m=["className","cssModule","row","disabled","check","inline","tag"],s={children:r.a.node,row:r.a.bool,check:r.a.bool,inline:r.a.bool,disabled:r.a.bool,tag:v.tagPropType,className:r.a.string,cssModule:r.a.object},p=function(e){var t=e.className,l=e.cssModule,o=e.row,u=e.disabled,r=e.check,d=e.inline,s=e.tag,p=Object(n.a)(e,m),b=Object(v.mapToCssModules)(c()(t,!!o&&"row",r?"form-check":"form-group",!(!r||!d)&&"form-check-inline",!(!r||!u)&&"disabled"),l);return"fieldset"===s&&(p.disabled=u),i.a.createElement(s,Object(a.a)({},p,{className:b}))};p.propTypes=s,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=302.4e415373.chunk.js.map
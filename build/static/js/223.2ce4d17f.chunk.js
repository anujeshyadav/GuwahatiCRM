(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[223],{3233:function(e,t,l){"use strict";l.r(t);var a=l(55),n=l(7),o=l(45),i=l(1),u=l.n(i),r=l(629),c=l.n(r),d=l(898),v=l(890),m=l(891),s=l(173),p=l(902),b=l(892),y=l(939),E=l(893),f=l(894),g=(l(25),l(162)),O=l.n(g),j=(l(631),l(914)),h=l(915),_=l(916),x=l(124),k=l(923),C=l.n(k),F=l(78),N=l(161),S=l.n(N),D=(l(630),l(79)),w=(l(917),l(90));t.default=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),l=t[0],r=t[1],g=Object(i.useState)({}),k=Object(o.a)(g,2),N=k[0],M=k[1],A=Object(i.useState)({}),K=Object(o.a)(A,2),R=K[0],Y=K[1],J=Object(i.useState)({}),T=Object(o.a)(J,2),I=T[0],L=T[1],P=Object(i.useState)({}),U=Object(o.a)(P,2),V=U[0],z=U[1],H=Object(i.useState)({}),B=Object(o.a)(H,2),W=(B[0],B[1],Object(i.useState)("")),Z=Object(o.a)(W,2),$=Z[0],q=Z[1],G=Object(i.useState)(""),Q=Object(o.a)(G,2),X=Q[0],ee=Q[1],te=Object(i.useState)({}),le=Object(o.a)(te,2),ae=(le[0],le[1],Object(i.useContext)(w.a)),ne=function(e,t,l){var o=e.target,i=o.name,u=o.value,r=o.checked;q(l),"checkbox"==t?z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},i,r))):"number"==t?/^\d{0,10}$/.test(u)&&(z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},i,u))),ee("")):"file"==t?e.target.files&&z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},i,e.target.files[0]))):u.length<=10?(z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},i,u))),ee("")):z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},i,u)))};Object(i.useEffect)((function(){console.log(V)}),[V]),Object(i.useEffect)((function(){Object(D.y)().then((function(e){var t,l,a;console.log(null===e||void 0===e?void 0:e.data);var n=c.a.xml2json(null===e||void 0===e?void 0:e.data,{compact:!0,spaces:2});console.log(null===(t=JSON.parse(n))||void 0===t?void 0:t.Createsalesman),r(null===(l=JSON.parse(n))||void 0===l||null===(a=l.Createsalesman)||void 0===a?void 0:a.input)})).catch((function(e){console.log(e)}))}),[]);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(v.a,{className:"m-2"},u.a.createElement(m.a,null,u.a.createElement("h1",{className:"float-left"},"Create Sales Man")),u.a.createElement(m.a,null,u.a.createElement("div",{className:"float-right"},u.a.createElement(F.b,{render:function(e){var t=e.history;return u.a.createElement(s.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",onClick:function(){return t.push("/app/SoftNumen/CreateSalesMan")}}," ","Back")}})))),u.a.createElement(p.a,null,u.a.createElement(b.a,{className:"m-1",onSubmit:function(e){e.preventDefault();var t=new FormData;null===l||void 0===l||l.map((function(e,l){var a,n,o,i,u;if("text"==(null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type))t.append("".concat(null===e||void 0===e?void 0:e.name._text),V[null===e||void 0===e||null===(u=e.name)||void 0===u?void 0:u._text]);else if("file"==(null===e||void 0===e||null===(o=e.type)||void 0===o||null===(i=o._attributes)||void 0===i?void 0:i.type)){var r,c,d,v,m,s;if("Shopphoto"==(null===e||void 0===e||null===(r=e.name)||void 0===r?void 0:r._text))null===(d=V[null===e||void 0===e||null===(v=e.name)||void 0===v?void 0:v._text])||void 0===d||d.map((function(l,a){var n;t.append("file",V[null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text][a])}));if("photo"==(null===e||void 0===e||null===(c=e.name)||void 0===c?void 0:c._text))null===(m=V[null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s._text])||void 0===m||m.map((function(l,a){var n;t.append("files",V[null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text][a])}))}else t.append("status",V.status)})),t.forEach((function(e,t){console.log(t,e)})),X?S()("Error occured while Entering Details"):Object(D.E)(t).then((function(e){console.log(e),e.status&&(window.location.reload(),S()("Sales Person Created Successfully"))})).catch((function(e){console.log(e.response)}))}},u.a.createElement(v.a,{className:"mb-2"},l&&(null===l||void 0===l?void 0:l.map((function(e,t){var l,o,i,r,c,d,v,s,p,b,g,k,F,S,D,w,A,K,J,T,P,U,H,B,W,Z,G,Q,ee,te,le,oe,ie,ue,re,ce,de,ve,me,se,pe,be,ye,Ee,fe,ge,Oe;C()("2022-08-05T12:00:00").tz("America/New_York").format("D MMM, YYYY HH:mm");return(null===e||void 0===e?void 0:e.phoneinput)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(E.a,{className:"mb-1"},null===e||void 0===e||null===(l=e.label)||void 0===l?void 0:l._text),u.a.createElement(O.a,{inputClass:"myphoneinput",country:"in",onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:V[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],onChange:function(t){var l;z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},null===e||void 0===e||null===(l=e.name)||void 0===l?void 0:l._text,t)))}}),$===t?u.a.createElement(u.a.Fragment,null,X&&u.a.createElement("span",{style:{color:"red"}},X)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(r=e.label._text)||void 0===r?void 0:r.includes("ountry"))?(console.log(e),u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(E.a,{className:"mb-1"},null===e||void 0===e||null===(v=e.label)||void 0===v?void 0:v._text),u.a.createElement(x.a,{inputClass:"countryclass",className:"countryclassnw",options:j.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:N,onChange:function(e){M(e),z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},"Country",null===e||void 0===e?void 0:e.name)))}}),$===t?u.a.createElement(u.a.Fragment,null,X&&u.a.createElement("span",{style:{color:"red"}},X)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e||null===(c=e.label._text)||void 0===c?void 0:c.includes("tate"))?u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(E.a,{className:"mb-1"},null===e||void 0===e||null===(s=e.label)||void 0===s?void 0:s._text),u.a.createElement(x.a,{options:null===h.a||void 0===h.a?void 0:h.a.getStatesOfCountry(null===N||void 0===N?void 0:N.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:R,onChange:function(e){Y(e),z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},"State",null===e||void 0===e?void 0:e.name)))}}),$===t?u.a.createElement(u.a.Fragment,null,X&&u.a.createElement("span",{style:{color:"red"}},X)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(d=e.label._text)||void 0===d?void 0:d.includes("ity"))?u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(E.a,{className:"mb-1"},null===e||void 0===e||null===(p=e.label)||void 0===p?void 0:p._text),u.a.createElement(x.a,{options:null===_.a||void 0===_.a?void 0:_.a.getCitiesOfState(null===R||void 0===R?void 0:R.countryCode,null===R||void 0===R?void 0:R.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:I,onChange:function(e){L(e),z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},"City",null===e||void 0===e?void 0:e.name)))}}),$===t?u.a.createElement(u.a.Fragment,null,X&&u.a.createElement("span",{style:{color:"red"}},X)):u.a.createElement(u.a.Fragment,null))):u.a.createElement(u.a.Fragment,null,"date"==(null===e||void 0===e||null===(b=e.type)||void 0===b||null===(g=b._attributes)||void 0===g?void 0:g.type)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(y.a,{key:t},u.a.createElement(E.a,{className:"mb-1"},null===e||void 0===e||null===(k=e.label)||void 0===k?void 0:k._text),u.a.createElement(f.a,{onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(F=e.type)||void 0===F||null===(S=F._attributes)||void 0===S?void 0:S.type,placeholder:null===e||void 0===e||null===(D=e.placeholder)||void 0===D?void 0:D._text,name:null===e||void 0===e||null===(w=e.name)||void 0===w?void 0:w._text,dateFormat:null===ae||void 0===ae||null===(A=ae.UserInformatio)||void 0===A?void 0:A.dateFormat,value:C()(V[null===e||void 0===e||null===(K=e.name)||void 0===K?void 0:K._text]).tz(null===ae||void 0===ae||null===(J=ae.UserInformatio)||void 0===J?void 0:J.timeZone).format(null===ae||void 0===ae||null===(T=ae.UserInformatio)||void 0===T?void 0:T.dateFormat),onChange:function(l){var a,n;return ne(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),$===t?u.a.createElement(u.a.Fragment,null,X&&u.a.createElement("span",{style:{color:"red"}},X)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(y.a,{key:t},u.a.createElement(E.a,{className:"mb-1"},null===e||void 0===e||null===(P=e.label)||void 0===P?void 0:P._text),u.a.createElement(f.a,{onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(U=e.type)||void 0===U||null===(H=U._attributes)||void 0===H?void 0:H.type,placeholder:null===e||void 0===e||null===(B=e.placeholder)||void 0===B?void 0:B._text,name:null===e||void 0===e||null===(W=e.name)||void 0===W?void 0:W._text,value:V[null===e||void 0===e||null===(Z=e.name)||void 0===Z?void 0:Z._text],onChange:function(l){var a,n;return ne(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),$===t?u.a.createElement(u.a.Fragment,null,X&&u.a.createElement("span",{style:{color:"red"}},X)):u.a.createElement(u.a.Fragment,null))))):u.a.createElement(u.a.Fragment,null,(null===e||void 0===e?void 0:e.number)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(y.a,{key:t},u.a.createElement(E.a,{className:"mb-1"},null===e||void 0===e||null===(G=e.label)||void 0===G?void 0:G._text),u.a.createElement(f.a,{onWheel:function(e){e.preventDefault()},onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(Q=e.type)||void 0===Q||null===(ee=Q._attributes)||void 0===ee?void 0:ee.type,placeholder:null===e||void 0===e||null===(te=e.placeholder)||void 0===te?void 0:te._text,name:null===e||void 0===e||null===(le=e.name)||void 0===le?void 0:le._text,value:V[null===e||void 0===e||null===(oe=e.name)||void 0===oe?void 0:oe._text],onChange:function(l){var a,n;return ne(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),$===t?u.a.createElement(u.a.Fragment,null,X&&u.a.createElement("span",{style:{color:"red"}},X)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(m.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(y.a,{key:t},(null===e||void 0===e||null===(ie=e.type)||void 0===ie||null===(ue=ie._attributes)||void 0===ue?void 0:ue.type)&&"file"==(null===e||void 0===e||null===(re=e.type)||void 0===re||null===(ce=re._attributes)||void 0===ce?void 0:ce.type)?u.a.createElement(u.a.Fragment,null,u.a.createElement(E.a,{className:"mb-1"},null===e||void 0===e||null===(de=e.label)||void 0===de?void 0:de._text),u.a.createElement(f.a,{multiple:!0,className:"form-control",type:null===e||void 0===e||null===(ve=e.type)||void 0===ve||null===(me=ve._attributes)||void 0===me?void 0:me.type,placeholder:null===e||void 0===e||null===(se=e.placeholder)||void 0===se?void 0:se._text,name:null===e||void 0===e||null===(pe=e.name)||void 0===pe?void 0:pe._text,onChange:function(l){var o,i;!function(e,t,l){var o=e.target,i=o.name,u=(o.value,o.checked,Array.from(e.target.files));q(l),z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},i,u)))}(l,null===e||void 0===e||null===(o=e.type)||void 0===o||null===(i=o._attributes)||void 0===i||i.type,t)}}),$===t?u.a.createElement(u.a.Fragment,null,X&&u.a.createElement("span",{style:{color:"red"}},X)):u.a.createElement(u.a.Fragment,null)):u.a.createElement(u.a.Fragment,null,u.a.createElement(E.a,{className:"mb-1"},null===e||void 0===e||null===(be=e.label)||void 0===be?void 0:be._text),u.a.createElement(f.a,{className:"form-control",onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(ye=e.type)||void 0===ye||null===(Ee=ye._attributes)||void 0===Ee?void 0:Ee.type,placeholder:null===e||void 0===e||null===(fe=e.placeholder)||void 0===fe?void 0:fe._text,name:null===e||void 0===e||null===(ge=e.name)||void 0===ge?void 0:ge._text,value:V[null===e||void 0===e||null===(Oe=e.name)||void 0===Oe?void 0:Oe._text],onChange:function(l){var a,n;ne(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),$===t?u.a.createElement(u.a.Fragment,null,X&&u.a.createElement("span",{style:{color:"red"}},X)):u.a.createElement(u.a.Fragment,null)))))})))),u.a.createElement("hr",null),u.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},u.a.createElement(E.a,{className:"mb-0"},"Status"),u.a.createElement("div",null,u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active",className:"form-label-group",onChange:function(e){z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},"status","Active")))}}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive",onChange:function(e){z(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},"status","Deactive")))}}),u.a.createElement("span",{style:{marginRight:"3px"}},"Deactive"))),u.a.createElement(v.a,null,u.a.createElement(s.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}},917:function(e,t,l){},939:function(e,t,l){"use strict";var a=l(6),n=l(12),o=l(1),i=l.n(o),u=l(2),r=l.n(u),c=l(5),d=l.n(c),v=l(4),m=["className","cssModule","row","disabled","check","inline","tag"],s={children:r.a.node,row:r.a.bool,check:r.a.bool,inline:r.a.bool,disabled:r.a.bool,tag:v.tagPropType,className:r.a.string,cssModule:r.a.object},p=function(e){var t=e.className,l=e.cssModule,o=e.row,u=e.disabled,r=e.check,c=e.inline,s=e.tag,p=Object(n.a)(e,m),b=Object(v.mapToCssModules)(d()(t,!!o&&"row",r?"form-check":"form-group",!(!r||!c)&&"form-check-inline",!(!r||!u)&&"disabled"),l);return"fieldset"===s&&(p.disabled=u),i.a.createElement(s,Object(a.a)({},p,{className:b}))};p.propTypes=s,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=223.2ce4d17f.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[203],{1462:function(e,t,l){"use strict";l(1)},3068:function(e,t,l){"use strict";l.r(t);var a=l(55),n=l(8),o=l(45),i=l(1),u=l.n(i),r=l(630),c=l.n(r),d=l(899),m=l(891),v=l(892),s=l(173),b=l(903),p=l(893),E=l(941),y=l(894),g=l(895),f=(l(25),l(162)),O=l.n(f),j=(l(631),l(915)),h=l(916),_=l(917),x=l(124),k=l(924),C=l.n(k),F=l(78),N=(l(1462),l(161)),S=l.n(N),D=(l(632),l(79)),w=(l(918),l(90));t.default=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),l=t[0],r=t[1],f=Object(i.useState)({}),k=Object(o.a)(f,2),N=k[0],M=k[1],A=Object(i.useState)({}),J=Object(o.a)(A,2),K=J[0],R=J[1],Y=Object(i.useState)({}),T=Object(o.a)(Y,2),I=T[0],L=T[1],U=Object(i.useState)({}),V=Object(o.a)(U,2),W=V[0],z=V[1],B=Object(i.useState)({}),H=Object(o.a)(B,2),P=(H[0],H[1]),Z=Object(i.useState)(""),$=Object(o.a)(Z,2),q=$[0],G=$[1],Q=Object(i.useState)(""),X=Object(o.a)(Q,2),ee=X[0],te=X[1],le=Object(i.useState)({}),ae=Object(o.a)(le,2),ne=(ae[0],ae[1],Object(i.useContext)(w.a)),oe=function(e,t,l){var o=e.target,i=o.name,u=o.value,r=o.checked;G(l),"checkbox"==t?z(Object(n.a)(Object(n.a)({},W),{},Object(a.a)({},i,r))):"number"==t?/^\d{0,10}$/.test(u)&&(z(Object(n.a)(Object(n.a)({},W),{},Object(a.a)({},i,u))),te("")):"file"==t?e.target.files&&z(Object(n.a)(Object(n.a)({},W),{},Object(a.a)({},i,e.target.files[0]))):u.length<=10?(z(Object(n.a)(Object(n.a)({},W),{},Object(a.a)({},i,u))),te("")):z(Object(n.a)(Object(n.a)({},W),{},Object(a.a)({},i,u)))};Object(i.useEffect)((function(){console.log(W)}),[W]),Object(i.useEffect)((function(){Object(D.x)().then((function(e){var t,l,a,n,o,i,u=c.a.xml2json(e.data,{compact:!0,spaces:2});console.log(null===(t=JSON.parse(u))||void 0===t?void 0:t.Createsalesmanager),r(null===(l=JSON.parse(u))||void 0===l||null===(a=l.Createsalesmanager)||void 0===a?void 0:a.input),P(null===(n=JSON.parse(u))||void 0===n||null===(o=n.CreateCustomer)||void 0===o||null===(i=o.MyDropDown)||void 0===i?void 0:i.dropdown)})).catch((function(e){console.log(e),S()("Something Went Wrong")}))}),[]);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(v.a,null,u.a.createElement("h1",{className:"float-left"},"Create Dispatch")),u.a.createElement(v.a,null,u.a.createElement("div",{className:"float-right"},u.a.createElement(F.b,{render:function(e){var t=e.history;return u.a.createElement(s.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",onClick:function(){return t.goBack()}}," ","Back")}})))),u.a.createElement(b.a,null,u.a.createElement(p.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),ee?S()("Error occured while Entering Details"):Object(D.F)(W).then((function(e){console.log(e),e.status&&S()("SalesManager Created Successfully")})).catch((function(e){console.log(e.response)}))}},u.a.createElement(m.a,{className:"mb-2"},l&&(null===l||void 0===l?void 0:l.map((function(e,t){var l,o,i,r,c,d,m,s,b,p,f,k,F,S,D,w,A,J,Y,T,U,V,B,H,P,Z,$,Q,X,te,le,ae,ie,ue,re,ce,de,me,ve,se,be,pe,Ee,ye,ge,fe,Oe;C()("2022-08-05T12:00:00").tz("America/New_York").format("D MMM, YYYY HH:mm");return(null===e||void 0===e?void 0:e.phoneinput)?u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(l=e.label)||void 0===l?void 0:l._text),u.a.createElement(O.a,{inputClass:"myphoneinput",country:"in",onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:W[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],onChange:function(t){var l;z(Object(n.a)(Object(n.a)({},W),{},Object(a.a)({},null===e||void 0===e||null===(l=e.name)||void 0===l?void 0:l._text,t)))}}),q===t?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(r=e.label._text)||void 0===r?void 0:r.includes("ountry"))?(console.log(e),u.a.createElement(v.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(m=e.label)||void 0===m?void 0:m._text),u.a.createElement(x.a,{inputClass:"countryclass",className:"countryclassnw",options:j.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:N,onChange:function(e){M(e),z(Object(n.a)(Object(n.a)({},W),{},Object(a.a)({},"Country",null===e||void 0===e?void 0:e.name)))}}),q===t?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e||null===(c=e.label._text)||void 0===c?void 0:c.includes("tate"))?u.a.createElement(v.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(s=e.label)||void 0===s?void 0:s._text),u.a.createElement(x.a,{options:null===h.a||void 0===h.a?void 0:h.a.getStatesOfCountry(null===N||void 0===N?void 0:N.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:K,onChange:function(e){R(e),z(Object(n.a)(Object(n.a)({},W),{},Object(a.a)({},"State",null===e||void 0===e?void 0:e.name)))}}),q===t?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(d=e.label._text)||void 0===d?void 0:d.includes("ity"))?u.a.createElement(v.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(b=e.label)||void 0===b?void 0:b._text),u.a.createElement(x.a,{options:null===_.a||void 0===_.a?void 0:_.a.getCitiesOfState(null===K||void 0===K?void 0:K.countryCode,null===K||void 0===K?void 0:K.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:I,onChange:function(e){L(e),z(Object(n.a)(Object(n.a)({},W),{},Object(a.a)({},"City",null===e||void 0===e?void 0:e.name)))}}),q===t?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null))):u.a.createElement(u.a.Fragment,null,"date"==(null===e||void 0===e||null===(p=e.type)||void 0===p||null===(f=p._attributes)||void 0===f?void 0:f.type)?u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,{key:t},u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(k=e.label)||void 0===k?void 0:k._text),u.a.createElement(g.a,{onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(F=e.type)||void 0===F||null===(S=F._attributes)||void 0===S?void 0:S.type,placeholder:null===e||void 0===e||null===(D=e.placeholder)||void 0===D?void 0:D._text,name:null===e||void 0===e||null===(w=e.name)||void 0===w?void 0:w._text,dateFormat:null===ne||void 0===ne||null===(A=ne.UserInformatio)||void 0===A?void 0:A.dateFormat,value:C()(W[null===e||void 0===e||null===(J=e.name)||void 0===J?void 0:J._text]).tz(null===ne||void 0===ne||null===(Y=ne.UserInformatio)||void 0===Y?void 0:Y.timeZone).format(null===ne||void 0===ne||null===(T=ne.UserInformatio)||void 0===T?void 0:T.dateFormat),onChange:function(l){var a,n;return oe(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),q===t?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,{key:t},u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(U=e.label)||void 0===U?void 0:U._text),u.a.createElement(g.a,{onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(V=e.type)||void 0===V||null===(B=V._attributes)||void 0===B?void 0:B.type,placeholder:null===e||void 0===e||null===(H=e.placeholder)||void 0===H?void 0:H._text,name:null===e||void 0===e||null===(P=e.name)||void 0===P?void 0:P._text,value:W[null===e||void 0===e||null===(Z=e.name)||void 0===Z?void 0:Z._text],onChange:function(l){var a,n;return oe(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),q===t?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null))))):u.a.createElement(u.a.Fragment,null,(null===e||void 0===e?void 0:e.number)?u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,{key:t},u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===($=e.label)||void 0===$?void 0:$._text),u.a.createElement(g.a,{onWheel:function(e){e.preventDefault()},onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(Q=e.type)||void 0===Q||null===(X=Q._attributes)||void 0===X?void 0:X.type,placeholder:null===e||void 0===e||null===(te=e.placeholder)||void 0===te?void 0:te._text,name:null===e||void 0===e||null===(le=e.name)||void 0===le?void 0:le._text,value:W[null===e||void 0===e||null===(ae=e.name)||void 0===ae?void 0:ae._text],onChange:function(l){var a,n;return oe(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),q===t?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(v.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,{key:t},(null===e||void 0===e||null===(ie=e.type)||void 0===ie||null===(ue=ie._attributes)||void 0===ue?void 0:ue.type)&&"file"==(null===e||void 0===e||null===(re=e.type)||void 0===re||null===(ce=re._attributes)||void 0===ce?void 0:ce.type)?u.a.createElement(u.a.Fragment,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(de=e.label)||void 0===de?void 0:de._text),u.a.createElement(g.a,{multiple:!0,className:"form-control",type:null===e||void 0===e||null===(me=e.type)||void 0===me||null===(ve=me._attributes)||void 0===ve?void 0:ve.type,placeholder:null===e||void 0===e||null===(se=e.placeholder)||void 0===se?void 0:se._text,name:null===e||void 0===e||null===(be=e.name)||void 0===be?void 0:be._text,onChange:function(l){var o,i;!function(e,t,l){var o=e.target,i=o.name,u=(o.value,o.checked,Array.from(e.target.files));G(l),z(Object(n.a)(Object(n.a)({},W),{},Object(a.a)({},i,u)))}(l,null===e||void 0===e||null===(o=e.type)||void 0===o||null===(i=o._attributes)||void 0===i||i.type,t)}}),q===t?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null)):u.a.createElement(u.a.Fragment,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(pe=e.label)||void 0===pe?void 0:pe._text),u.a.createElement(g.a,{className:"form-control",onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(Ee=e.type)||void 0===Ee||null===(ye=Ee._attributes)||void 0===ye?void 0:ye.type,placeholder:null===e||void 0===e||null===(ge=e.placeholder)||void 0===ge?void 0:ge._text,name:null===e||void 0===e||null===(fe=e.name)||void 0===fe?void 0:fe._text,value:W[null===e||void 0===e||null===(Oe=e.name)||void 0===Oe?void 0:Oe._text],onChange:function(l){var a,n;oe(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),q===t?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null)))))})))),u.a.createElement("hr",null),u.a.createElement(v.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},u.a.createElement(y.a,{className:"mb-0"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:function(e){z(Object(n.a)(Object(n.a)({},W),{},Object(a.a)({},"status",e.target.value)))}},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Deactive"))),u.a.createElement(m.a,null,u.a.createElement(s.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}},918:function(e,t,l){},941:function(e,t,l){"use strict";var a=l(7),n=l(12),o=l(1),i=l.n(o),u=l(2),r=l.n(u),c=l(6),d=l.n(c),m=l(4),v=["className","cssModule","row","disabled","check","inline","tag"],s={children:r.a.node,row:r.a.bool,check:r.a.bool,inline:r.a.bool,disabled:r.a.bool,tag:m.tagPropType,className:r.a.string,cssModule:r.a.object},b=function(e){var t=e.className,l=e.cssModule,o=e.row,u=e.disabled,r=e.check,c=e.inline,s=e.tag,b=Object(n.a)(e,v),p=Object(m.mapToCssModules)(d()(t,!!o&&"row",r?"form-check":"form-group",!(!r||!c)&&"form-check-inline",!(!r||!u)&&"disabled"),l);return"fieldset"===s&&(b.disabled=u),i.a.createElement(s,Object(a.a)({},b,{className:p}))};b.propTypes=s,b.defaultProps={tag:"div"},t.a=b}}]);
//# sourceMappingURL=203.e5e90232.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[321],{2994:function(e,t,l){"use strict";l.r(t);var a=l(59),n=l(7),o=l(24),i=l(1),u=l.n(i),c=l(232),r=l.n(c),d=l(901),m=l(902),v=l(243),s=l(909),b=l(913),p=l(903),E=l(936),g=l(904),y=l(891),f=l(905),O=(l(26),l(168)),j=l.n(O),h=(l(233),l(923)),x=l(924),C=l(925),_=l(131),N=l(83),k=l(95),S=l.n(k),w=(l(643),l(53)),F=l(169),A=l(935),D=l(28),R=(l(231),l(76));t.default=function(){var e,t,l,c,O,k,M,J,P,V,T,z,B,L,q,K,W,Y,$,G,H,I,Q,U=Object(i.useState)({}),X=Object(o.a)(U,2),Z=X[0],ee=X[1],te=Object(i.useState)({}),le=Object(o.a)(te,2),ae=le[0],ne=le[1],oe=Object(i.useState)({}),ie=Object(o.a)(oe,2),ue=ie[0],ce=ie[1],re=Object(i.useState)(""),de=Object(o.a)(re,2),me=de[0],ve=de[1],se=Object(i.useState)(""),be=Object(o.a)(se,2),pe=be[0],Ee=be[1],ge=Object(i.useState)({}),ye=Object(o.a)(ge,2),fe=(ye[0],ye[1],Object(i.useContext)(R.a),function(e,t,l){var o=e.target,i=o.name,u=o.value,c=o.checked;ve(l),"checkbox"==t?ne(Object(n.a)(Object(n.a)({},ae),{},Object(a.a)({},i,c))):"number"==t?/^\d{0,10}$/.test(u)?(ne(Object(n.a)(Object(n.a)({},ae),{},Object(a.a)({},i,u))),Ee("")):Ee("Please enter a valid number with a maximum length of 10 digits"):u.length<=10?(ne(Object(n.a)(Object(n.a)({},ae),{},Object(a.a)({},i,u))),Ee("")):ne(Object(n.a)(Object(n.a)({},ae),{},Object(a.a)({},i,u)))});Object(i.useEffect)((function(){console.log(ae)}),[ae]),Object(i.useEffect)((function(){Object(w.l)().then((function(e){var t,l,a,n=r.a.xml2json(e.data,{compact:!0,spaces:2});console.log(JSON.parse(n));null===(t=JSON.parse(n))||void 0===t||null===(l=t.CreateAccount)||void 0===l||null===(a=l.input[14].permissions)||void 0===a||a.role;ee(JSON.parse(n)),ce(JSON.parse(n))})).catch((function(e){console.log(e)}))}),[]);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(m.a,null,u.a.createElement(N.b,{render:function(e){var t=e.history;return u.a.createElement(v.a,{className:" float-right",color:"danger",onClick:function(){return t.goBack()}},"Back")}}))),u.a.createElement(s.a,null,u.a.createElement(d.a,{className:"m-2"},u.a.createElement(m.a,null,u.a.createElement("h1",{className:"float-left"},"Create Support"))),u.a.createElement(b.a,null,u.a.createElement(p.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),pe?S()("Error occured while Entering Details"):Object(w.j)(ae).then((function(e){e.status&&(ne({}),window.location.reload(),S()("Acccont Created Successfully"))})).catch((function(e){console.log(e)}))}},u.a.createElement(d.a,{className:"mb-2"},u.a.createElement(m.a,{lg:"6",md:"6"},u.a.createElement(E.a,null,u.a.createElement(g.a,null,null===(e=ue.CreateAccount)||void 0===e||null===(t=e.MyDropdown)||void 0===t||null===(l=t.dropdown)||void 0===l||null===(c=l.label)||void 0===c?void 0:c._text),u.a.createElement(y.a,{required:!0,type:"select",name:null===(O=ue.CreateAccount)||void 0===O||null===(k=O.MyDropdown)||void 0===k||null===(M=k.dropdown)||void 0===M||null===(J=M.name)||void 0===J?void 0:J._text,value:ae[null===(P=ue.CreateAccount)||void 0===P||null===(V=P.MyDropdown)||void 0===V||null===(T=V.dropdown)||void 0===T||null===(z=T.name)||void 0===z?void 0:z._text],onChange:fe},u.a.createElement("option",{value:""},"--Select Role--"),null===ue||void 0===ue||null===(B=ue.CreateAccount)||void 0===B||null===(L=B.MyDropdown)||void 0===L||null===(q=L.dropdown)||void 0===q?void 0:q.option.map((function(e,t){var l,a;return u.a.createElement("option",{key:t,value:null===e||void 0===e||null===(l=e._attributes)||void 0===l?void 0:l.value},null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.value)}))))),Z&&(null===Z||void 0===Z||null===(K=Z.CreateAccount)||void 0===K||null===(W=K.input)||void 0===W?void 0:W.map((function(e,t){var l,o,i,c,r,d,v,s,b,p,y,O,N,k,S,w,F,A;if(null===e||void 0===e?void 0:e.role){var D,R,M,J=null===e||void 0===e||null===(D=e.role)||void 0===D?void 0:D.find((function(e){var t;return"WARRANTY APPROVER"===(null===(t=e._attributes)||void 0===t?void 0:t.name)}));null===J||void 0===J||null===(R=J.permissions)||void 0===R?void 0:R._text.includes("View"),null===J||void 0===J||null===(M=J.permissions)||void 0===M?void 0:M._text.includes("Edit")}return(null===e||void 0===e?void 0:e.phoneinput)?u.a.createElement(u.a.Fragment,null,u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"6",md:"6",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(g.a,null,null===e||void 0===e||null===(l=e.label)||void 0===l?void 0:l._text),u.a.createElement(j.a,{inputClass:"myphoneinput",country:"us",onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:ae[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],onChange:function(t){var l;ne(Object(n.a)(Object(n.a)({},ae),{},Object(a.a)({},null===e||void 0===e||null===(l=e.name)||void 0===l?void 0:l._text,t)))}}),me===t?u.a.createElement(u.a.Fragment,null,pe&&u.a.createElement("span",{style:{color:"red"}},pe)):u.a.createElement(u.a.Fragment,null))))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(p=e.label._text)||void 0===p?void 0:p.includes("ountry"))?u.a.createElement(m.a,{key:t,lg:"6",md:"6",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(g.a,null,null===e||void 0===e||null===(N=e.label)||void 0===N?void 0:N._text),u.a.createElement(_.a,{inputClass:"countryclass",className:"countryclassnw",options:h.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:ae.country,onChange:function(e){ne(Object(n.a)(Object(n.a)({},ae),{},Object(a.a)({},"country",e)))}}),me===t?u.a.createElement(u.a.Fragment,null,pe&&u.a.createElement("span",{style:{color:"red"}},pe)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(y=e.label._text)||void 0===y?void 0:y.includes("tate"))?u.a.createElement(m.a,{key:t,lg:"6",md:"6",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(g.a,null,null===e||void 0===e||null===(k=e.label)||void 0===k?void 0:k._text),u.a.createElement(_.a,{options:null===x.a||void 0===x.a?void 0:x.a.getStatesOfCountry(null===ae||void 0===ae||null===(S=ae.country)||void 0===S?void 0:S.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:ae.State,onChange:function(e){ne(Object(n.a)(Object(n.a)({},ae),{},Object(a.a)({},"State",e)))}}),me===t?u.a.createElement(u.a.Fragment,null,pe&&u.a.createElement("span",{style:{color:"red"}},pe)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(O=e.label._text)||void 0===O?void 0:O.includes("ity"))?u.a.createElement(m.a,{key:t,lg:"6",md:"6",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(g.a,null,null===e||void 0===e||null===(w=e.label)||void 0===w?void 0:w._text),u.a.createElement(_.a,{options:null===C.a||void 0===C.a?void 0:C.a.getCitiesOfState(null===ae||void 0===ae||null===(F=ae.State)||void 0===F?void 0:F.countryCode,null===ae||void 0===ae||null===(A=ae.State)||void 0===A?void 0:A.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:ae.City,onChange:function(e){ne(Object(n.a)(Object(n.a)({},ae),{},Object(a.a)({},"City",e)))}}),me===t?u.a.createElement(u.a.Fragment,null,pe&&u.a.createElement("span",{style:{color:"red"}},pe)):u.a.createElement(u.a.Fragment,null))):void 0:u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"6",md:"6",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(g.a,null,null===e||void 0===e||null===(c=e.label)||void 0===c?void 0:c._text),u.a.createElement(f.a,{onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(r=e.type)||void 0===r||null===(d=r._attributes)||void 0===d?void 0:d.type,placeholder:null===e||void 0===e||null===(v=e.placeholder)||void 0===v?void 0:v._text,name:null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s._text,value:ae[null===e||void 0===e||null===(b=e.name)||void 0===b?void 0:b._text],onChange:function(l){var a,n;return fe(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),me===t?u.a.createElement(u.a.Fragment,null,pe&&u.a.createElement("span",{style:{color:"red"}},pe)):u.a.createElement(u.a.Fragment,null))))}))),u.a.createElement("div",{className:"container"},u.a.createElement(g.a,{className:"py-1"},"Notification"),u.a.createElement("div",null,Z&&(null===Z||void 0===Z||null===(Y=Z.CreateAccount)||void 0===Y||null===($=Y.CheckBox)||void 0===$||null===(G=$.input)||void 0===G?void 0:G.map((function(e,t){var l,a,n,o,i;return u.a.createElement(u.a.Fragment,null,u.a.createElement("span",{key:t,className:"mx-2"},u.a.createElement(f.a,{style:{marginRight:"3px"},type:null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type,name:null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,onChange:function(e){return fe(e,"checkbox")}})," ",u.a.createElement("span",{className:"mt-1 mx-1",style:{marginRight:"40px"}},"Whatsapp"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?u.a.createElement(D.s,{className:"mx-1",color:"#59CE72",size:25}):u.a.createElement(u.a.Fragment,null,"SMS"==(null===(i=e.label)||void 0===i?void 0:i._text)?u.a.createElement(u.a.Fragment,null,u.a.createElement(A.c,{size:30})):u.a.createElement(u.a.Fragment,null,u.a.createElement(F.a,{className:"",size:30}))))))})))))),u.a.createElement("hr",null),u.a.createElement(d.a,{className:"mt-2 "},u.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(g.a,{className:""},u.a.createElement("h4",null,"Status")),u.a.createElement("div",{className:"form-label-group mx-1"},Z&&(null===Z||void 0===Z||null===(H=Z.CreateAccount)||void 0===H||null===(I=H.Radiobutton)||void 0===I||null===(Q=I.input)||void 0===Q?void 0:Q.map((function(e,t){var l,a,n,o,i;return u.a.createElement(E.a,{key:t},u.a.createElement(f.a,{key:t,style:{marginRight:"3px"},required:!0,type:null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type,name:null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,value:"".concat("Active"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?"Active":"Deactive"),onChange:fe})," ",u.a.createElement("span",{className:"mx-1 mt-1",style:{marginRight:"20px"}},null===e||void 0===e||null===(i=e.label)||void 0===i?void 0:i._text))})))))),u.a.createElement(d.a,null,u.a.createElement(v.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}},936:function(e,t,l){"use strict";var a=l(9),n=l(11),o=l(1),i=l.n(o),u=l(2),c=l.n(u),r=l(8),d=l.n(r),m=l(5),v=["className","cssModule","row","disabled","check","inline","tag"],s={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:m.tagPropType,className:c.a.string,cssModule:c.a.object},b=function(e){var t=e.className,l=e.cssModule,o=e.row,u=e.disabled,c=e.check,r=e.inline,s=e.tag,b=Object(n.a)(e,v),p=Object(m.mapToCssModules)(d()(t,!!o&&"row",c?"form-check":"form-group",!(!c||!r)&&"form-check-inline",!(!c||!u)&&"disabled"),l);return"fieldset"===s&&(b.disabled=u),i.a.createElement(s,Object(a.a)({},b,{className:p}))};b.propTypes=s,b.defaultProps={tag:"div"},t.a=b}}]);
//# sourceMappingURL=321.8016c8dc.chunk.js.map
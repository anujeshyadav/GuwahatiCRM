(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[444],{2999:function(e,t,l){"use strict";l.r(t);var a=l(55),n=l(7),o=l(25),i=l(1),u=l.n(i),c=l(225),r=l.n(c),d=l(901),v=l(893),m=l(894),s=l(905),b=l(895),p=l(943),E=l(896),g=l(883),y=l(897),O=l(237),j=(l(26),l(162)),f=l.n(j),x=(l(226),l(917)),h=l(918),_=l(919),C=l(125),N=l(91),S=l.n(N),w=(l(633),l(56)),k=l(947),F=l(945),A=l(62),D=(l(224),l(74));t.default=function(){var e,t,l,c,j,N,R,J,M,V,z,L,P,q,K,T,W,B,Y,$,G,H,I,Q=Object(i.useState)({}),U=Object(o.a)(Q,2),X=U[0],Z=U[1],ee=Object(i.useState)({}),te=Object(o.a)(ee,2),le=te[0],ae=te[1],ne=Object(i.useState)({}),oe=Object(o.a)(ne,2),ie=oe[0],ue=oe[1],ce=Object(i.useState)({}),re=Object(o.a)(ce,2),de=re[0],ve=re[1],me=Object(i.useState)({}),se=Object(o.a)(me,2),be=se[0],pe=se[1],Ee=Object(i.useState)({}),ge=Object(o.a)(Ee,2),ye=ge[0],Oe=ge[1],je=Object(i.useState)(""),fe=Object(o.a)(je,2),xe=fe[0],he=fe[1],_e=Object(i.useState)(""),Ce=Object(o.a)(_e,2),Ne=Ce[0],Se=Ce[1],we=Object(i.useState)({}),ke=Object(o.a)(we,2),Fe=(ke[0],ke[1],Object(i.useContext)(D.a),function(e,t,l){var o=e.target,i=o.name,u=o.value,c=o.checked;he(l),"checkbox"==t?pe(Object(n.a)(Object(n.a)({},be),{},Object(a.a)({},i,c))):"number"==t?/^\d{0,10}$/.test(u)?(pe(Object(n.a)(Object(n.a)({},be),{},Object(a.a)({},i,u))),Se("")):Se("Please enter a valid number with a maximum length of 10 digits"):u.length<=10?(pe(Object(n.a)(Object(n.a)({},be),{},Object(a.a)({},i,u))),Se("")):pe(Object(n.a)(Object(n.a)({},be),{},Object(a.a)({},i,u)))});Object(i.useEffect)((function(){console.log(be)}),[be]),Object(i.useEffect)((function(){Object(w.l)().then((function(e){var t,l,a,n=r.a.xml2json(e.data,{compact:!0,spaces:2});console.log(JSON.parse(n));null===(t=JSON.parse(n))||void 0===t||null===(l=t.CreateAccount)||void 0===l||null===(a=l.input[14].permissions)||void 0===a||a.role;Z(JSON.parse(n)),Oe(JSON.parse(n))})).catch((function(e){console.log(e)}))}),[]);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(v.a,{className:"m-2"},u.a.createElement(m.a,null,u.a.createElement("h1",{className:"float-left"},"Add Tax"))),u.a.createElement(s.a,null,u.a.createElement(b.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),Ne?S()("Error occured while Entering Details"):Object(w.j)(be).then((function(e){console.log(e),e.status&&(pe(null),window.location.reload(),S()("Acccont Created Successfully"))})).catch((function(e){console.log(e)}))}},u.a.createElement(v.a,{className:"mb-2"},u.a.createElement(m.a,{lg:"6",md:"6"},u.a.createElement(p.a,null,u.a.createElement(E.a,null,null===(e=ye.CreateAccount)||void 0===e||null===(t=e.MyDropdown)||void 0===t||null===(l=t.dropdown)||void 0===l||null===(c=l.label)||void 0===c?void 0:c._text),u.a.createElement(g.a,{required:!0,type:"select",name:null===(j=ye.CreateAccount)||void 0===j||null===(N=j.MyDropdown)||void 0===N||null===(R=N.dropdown)||void 0===R||null===(J=R.name)||void 0===J?void 0:J._text,value:be[null===(M=ye.CreateAccount)||void 0===M||null===(V=M.MyDropdown)||void 0===V||null===(z=V.dropdown)||void 0===z||null===(L=z.name)||void 0===L?void 0:L._text],onChange:Fe},u.a.createElement("option",{value:""},"--Select Role--"),null===ye||void 0===ye||null===(P=ye.CreateAccount)||void 0===P||null===(q=P.MyDropdown)||void 0===q||null===(K=q.dropdown)||void 0===K?void 0:K.option.map((function(e,t){var l,a;return u.a.createElement("option",{key:t,value:null===e||void 0===e||null===(l=e._attributes)||void 0===l?void 0:l.value},null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.value)}))))),X&&(null===X||void 0===X||null===(T=X.CreateAccount)||void 0===T||null===(W=T.input)||void 0===W?void 0:W.map((function(e,t){var l,o,i,c,r,d,v,s,b,g,O,j,N,S,w;if(null===e||void 0===e?void 0:e.role){var k,F,A,D=null===e||void 0===e||null===(k=e.role)||void 0===k?void 0:k.find((function(e){var t;return"WARRANTY APPROVER"===(null===(t=e._attributes)||void 0===t?void 0:t.name)}));null===D||void 0===D||null===(F=D.permissions)||void 0===F?void 0:F._text.includes("View"),null===D||void 0===D||null===(A=D.permissions)||void 0===A?void 0:A._text.includes("Edit")}return(null===e||void 0===e?void 0:e.phoneinput)?u.a.createElement(u.a.Fragment,null,u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"6",md:"6",sm:"12"},u.a.createElement(p.a,null,u.a.createElement(E.a,null,null===e||void 0===e||null===(l=e.label)||void 0===l?void 0:l._text),u.a.createElement(f.a,{inputClass:"myphoneinput",country:"us",onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:be[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],onChange:function(t){var l;pe(Object(n.a)(Object(n.a)({},be),{},Object(a.a)({},null===e||void 0===e||null===(l=e.name)||void 0===l?void 0:l._text,t)))}}),xe===t?u.a.createElement(u.a.Fragment,null,Ne&&u.a.createElement("span",{style:{color:"red"}},Ne)):u.a.createElement(u.a.Fragment,null))))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(g=e.label._text)||void 0===g?void 0:g.includes("ountry"))?u.a.createElement(m.a,{key:t,lg:"6",md:"6",sm:"12"},u.a.createElement(p.a,null,u.a.createElement(E.a,null,null===e||void 0===e||null===(N=e.label)||void 0===N?void 0:N._text),u.a.createElement(C.a,{inputClass:"countryclass",className:"countryclassnw",options:x.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:le,onChange:function(e){ae(e),pe(Object(n.a)(Object(n.a)({},be),{},Object(a.a)({},"country",null===e||void 0===e?void 0:e.name)))}}),xe===t?u.a.createElement(u.a.Fragment,null,Ne&&u.a.createElement("span",{style:{color:"red"}},Ne)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(O=e.label._text)||void 0===O?void 0:O.includes("tate"))?u.a.createElement(m.a,{key:t,lg:"6",md:"6",sm:"12"},u.a.createElement(p.a,null,u.a.createElement(E.a,null,null===e||void 0===e||null===(S=e.label)||void 0===S?void 0:S._text),u.a.createElement(C.a,{options:null===h.a||void 0===h.a?void 0:h.a.getStatesOfCountry(null===le||void 0===le?void 0:le.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:ie,onChange:function(e){ue(e),pe(Object(n.a)(Object(n.a)({},be),{},Object(a.a)({},"State",null===e||void 0===e?void 0:e.name)))}}),xe===t?u.a.createElement(u.a.Fragment,null,Ne&&u.a.createElement("span",{style:{color:"red"}},Ne)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(j=e.label._text)||void 0===j?void 0:j.includes("ity"))?u.a.createElement(m.a,{key:t,lg:"6",md:"6",sm:"12"},u.a.createElement(p.a,null,u.a.createElement(E.a,null,null===e||void 0===e||null===(w=e.label)||void 0===w?void 0:w._text),u.a.createElement(C.a,{options:null===_.a||void 0===_.a?void 0:_.a.getCitiesOfState(null===ie||void 0===ie?void 0:ie.countryCode,null===ie||void 0===ie?void 0:ie.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:de,onChange:function(e){ve(e),pe(Object(n.a)(Object(n.a)({},be),{},Object(a.a)({},"City",null===e||void 0===e?void 0:e.name)))}}),xe===t?u.a.createElement(u.a.Fragment,null,Ne&&u.a.createElement("span",{style:{color:"red"}},Ne)):u.a.createElement(u.a.Fragment,null))):void 0:u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:t,lg:"6",md:"6",sm:"12"},u.a.createElement(p.a,null,u.a.createElement(E.a,null,null===e||void 0===e||null===(c=e.label)||void 0===c?void 0:c._text),u.a.createElement(y.a,{onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(r=e.type)||void 0===r||null===(d=r._attributes)||void 0===d?void 0:d.type,placeholder:null===e||void 0===e||null===(v=e.placeholder)||void 0===v?void 0:v._text,name:null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s._text,value:be[null===e||void 0===e||null===(b=e.name)||void 0===b?void 0:b._text],onChange:function(l){var a,n;return Fe(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),xe===t?u.a.createElement(u.a.Fragment,null,Ne&&u.a.createElement("span",{style:{color:"red"}},Ne)):u.a.createElement(u.a.Fragment,null))))}))),u.a.createElement("div",{className:"container"},u.a.createElement(E.a,{className:"py-1"},"Notification"),u.a.createElement("div",null,X&&(null===X||void 0===X||null===(B=X.CreateAccount)||void 0===B||null===(Y=B.CheckBox)||void 0===Y||null===($=Y.input)||void 0===$?void 0:$.map((function(e,t){var l,a,n,o,i;return u.a.createElement(u.a.Fragment,null,u.a.createElement("span",{key:t,className:"mx-2"},u.a.createElement(y.a,{style:{marginRight:"3px"},type:null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type,name:null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,onChange:function(e){return Fe(e,"checkbox")}})," ",u.a.createElement("span",{className:"mt-1 mx-1",style:{marginRight:"40px"}},"Whatsapp"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?u.a.createElement(A.l,{className:"mx-1",color:"#59CE72",size:25}):u.a.createElement(u.a.Fragment,null,"SMS"==(null===(i=e.label)||void 0===i?void 0:i._text)?u.a.createElement(u.a.Fragment,null,u.a.createElement(F.c,{size:30})):u.a.createElement(u.a.Fragment,null,u.a.createElement(k.a,{className:"",size:30}))))))})))))),u.a.createElement("hr",null),u.a.createElement(v.a,{className:"mt-2 "},u.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(E.a,{className:""},u.a.createElement("h4",null,"Status")),u.a.createElement("div",{className:"form-label-group mx-1"},X&&(null===X||void 0===X||null===(G=X.CreateAccount)||void 0===G||null===(H=G.Radiobutton)||void 0===H||null===(I=H.input)||void 0===I?void 0:I.map((function(e,t){var l,a,n,o,i;return u.a.createElement(p.a,{key:t},u.a.createElement(y.a,{key:t,style:{marginRight:"3px"},required:!0,type:null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type,name:null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,value:"".concat("Active"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?"Active":"Deactive"),onChange:Fe})," ",u.a.createElement("span",{className:"mx-1 mt-1",style:{marginRight:"20px"}},null===e||void 0===e||null===(i=e.label)||void 0===i?void 0:i._text))})))))),u.a.createElement(v.a,null,u.a.createElement(O.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}}}]);
//# sourceMappingURL=444.a4eb4f37.chunk.js.map
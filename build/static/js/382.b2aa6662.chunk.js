(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[382],{3005:function(e,l,t){"use strict";t.r(l);var a=t(55),n=t(7),o=t(25),i=t(1),u=t.n(i),d=t(225),r=t.n(d),c=t(901),v=t(893),m=t(894),s=t(905),p=t(895),b=t(943),E=t(896),y=t(883),g=t(897),O=t(237),j=t(162),x=t.n(j),f=(t(226),t(917)),_=t(918),h=t(919),C=t(125),w=(t(91),t(224),t(947)),N=t(945),S=t(62),k=t(74),F=t(56);l.default=function(){var e,l,t,d,j,D,Q,R,M,A,J,V,q,z,L,P,K,W,B,G,T,Y,$,H,I,U,X,Z,ee,le,te,ae,ne,oe,ie,ue,de,re,ce=Object(i.useState)({}),ve=Object(o.a)(ce,2),me=ve[0],se=ve[1],pe=Object(i.useState)({}),be=Object(o.a)(pe,2),Ee=be[0],ye=be[1],ge=Object(i.useState)({}),Oe=Object(o.a)(ge,2),je=Oe[0],xe=Oe[1],fe=Object(i.useState)(""),_e=Object(o.a)(fe,2),he=_e[0],Ce=_e[1],we=Object(i.useState)(""),Ne=Object(o.a)(we,2),Se=Ne[0],ke=Ne[1],Fe=Object(i.useState)({}),De=Object(o.a)(Fe,2),Qe=(De[0],De[1],Object(i.useState)({})),Re=Object(o.a)(Qe,2),Me=Re[0],Ae=Re[1],Je=Object(i.useState)({}),Ve=Object(o.a)(Je,2),qe=Ve[0],ze=Ve[1],Le=Object(i.useState)({}),Pe=Object(o.a)(Le,2),Ke=Pe[0],We=Pe[1],Be=(Object(i.useContext)(k.a),function(e,l,t){var o=e.target,i=o.name,u=o.value,d=o.checked;Ce(t),"checkbox"==l?ye(Object(n.a)(Object(n.a)({},Ee),{},Object(a.a)({},i,d))):"number"==l?/^\d{0,10}$/.test(u)?(ye(Object(n.a)(Object(n.a)({},Ee),{},Object(a.a)({},i,u))),ke("")):ke("Please enter a valid number with a maximum length of 10 digits"):u.length<=10?(ye(Object(n.a)(Object(n.a)({},Ee),{},Object(a.a)({},i,u))),ke("")):ye(Object(n.a)(Object(n.a)({},Ee),{},Object(a.a)({},i,u)))});Object(i.useEffect)((function(){}),[Ee]),Object(i.useEffect)((function(){Object(F.Gc)().then((function(e){var l=r.a.xml2json(e.data,{compact:!0,spaces:2});console.log(JSON.parse(l)),se(JSON.parse(l)),xe(JSON.parse(l))})).catch((function(e){console.log(e)}))}),[]);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(c.a,null,u.a.createElement(v.a,{className:"m-2"},u.a.createElement(m.a,null,u.a.createElement("h1",{className:"float-left"},"Create Quote"))),u.a.createElement(s.a,null,u.a.createElement(p.a,{className:"m-1",onSubmit:function(e){}},u.a.createElement(v.a,{className:"mb-2"},u.a.createElement(m.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,u.a.createElement(E.a,null,null===(e=je.CreateQuote)||void 0===e||null===(l=e.MyDropdown1)||void 0===l||null===(t=l.dropdown)||void 0===t||null===(d=t.label)||void 0===d?void 0:d._text),u.a.createElement(y.a,{required:!0,type:"select",name:null===(j=je.CreateQuote)||void 0===j||null===(D=j.MyDropdown1)||void 0===D||null===(Q=D.dropdown)||void 0===Q||null===(R=Q.name)||void 0===R?void 0:R._text,value:Ee[null===(M=je.CreateQuote)||void 0===M||null===(A=M.MyDropdown1)||void 0===A||null===(J=A.dropdown)||void 0===J||null===(V=J.name)||void 0===V?void 0:V._text],onChange:Be},u.a.createElement("option",{value:""},"--Select Code--"),null===je||void 0===je||null===(q=je.CreateQuote)||void 0===q||null===(z=q.MyDropdown1)||void 0===z||null===(L=z.dropdown)||void 0===L?void 0:L.option.map((function(e,l){var t,a;return u.a.createElement("option",{key:l,value:null===e||void 0===e||null===(t=e._attributes)||void 0===t?void 0:t.value},null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.value)}))))),u.a.createElement(m.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,u.a.createElement(E.a,null,null===(P=je.CreateQuote)||void 0===P||null===(K=P.MyDropdown)||void 0===K||null===(W=K.dropdown)||void 0===W||null===(B=W.label)||void 0===B?void 0:B._text),u.a.createElement(y.a,{required:!0,type:"select",name:null===(G=je.CreateQuote)||void 0===G||null===(T=G.MyDropdown)||void 0===T||null===(Y=T.dropdown)||void 0===Y||null===($=Y.name)||void 0===$?void 0:$._text,value:Ee[null===(H=je.CreateQuote)||void 0===H||null===(I=H.MyDropdown)||void 0===I||null===(U=I.dropdown)||void 0===U||null===(X=U.name)||void 0===X?void 0:X._text],onChange:Be},u.a.createElement("option",{value:""},"--Select Role--"),null===je||void 0===je||null===(Z=je.CreateQuote)||void 0===Z||null===(ee=Z.MyDropdown)||void 0===ee||null===(le=ee.dropdown)||void 0===le?void 0:le.option.map((function(e,l){var t,a;return u.a.createElement("option",{key:l,value:null===e||void 0===e||null===(t=e._attributes)||void 0===t?void 0:t.value},null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.value)}))))),me&&(null===me||void 0===me||null===(te=me.CreateQuote)||void 0===te||null===(ae=te.input)||void 0===ae?void 0:ae.map((function(e,l){var t,o,i,d,r,c,v,s,p,y,O,j,w,N,S;if(null===e||void 0===e?void 0:e.role){var k,F,D,Q=null===e||void 0===e||null===(k=e.role)||void 0===k?void 0:k.find((function(e){var l;return"WARRANTY APPROVER"===(null===(l=e._attributes)||void 0===l?void 0:l.name)}));null===Q||void 0===Q||null===(F=Q.permissions)||void 0===F?void 0:F._text.includes("View"),null===Q||void 0===Q||null===(D=Q.permissions)||void 0===D?void 0:D._text.includes("Edit")}return(null===e||void 0===e?void 0:e.phoneinput)?u.a.createElement(u.a.Fragment,null,u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:l,lg:"6",md:"6",sm:"12"},u.a.createElement(b.a,null,u.a.createElement(E.a,null,null===e||void 0===e||null===(t=e.label)||void 0===t?void 0:t._text),u.a.createElement(x.a,{inputClass:"myphoneinput",country:"us",onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:Ee[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],onChange:function(l){var t;ye(Object(n.a)(Object(n.a)({},Ee),{},Object(a.a)({},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text,l)))}}),he===l?u.a.createElement(u.a.Fragment,null,Se&&u.a.createElement("span",{style:{color:"red"}},Se)):u.a.createElement(u.a.Fragment,null))))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(y=e.label._text)||void 0===y?void 0:y.includes("ountry"))?u.a.createElement(m.a,{key:l,lg:"6",md:"6",sm:"12"},u.a.createElement(b.a,null,u.a.createElement(E.a,null,null===e||void 0===e||null===(w=e.label)||void 0===w?void 0:w._text),u.a.createElement(C.a,{inputClass:"countryclass",className:"countryclassnw",options:f.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:Me,onChange:function(e){Ae(e),ye(Object(n.a)(Object(n.a)({},Ee),{},Object(a.a)({},"country",null===e||void 0===e?void 0:e.name)))}}),he===l?u.a.createElement(u.a.Fragment,null,Se&&u.a.createElement("span",{style:{color:"red"}},Se)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(O=e.label._text)||void 0===O?void 0:O.includes("tate"))?u.a.createElement(m.a,{key:l,lg:"6",md:"6",sm:"12"},u.a.createElement(b.a,null,u.a.createElement(E.a,null,null===e||void 0===e||null===(N=e.label)||void 0===N?void 0:N._text),u.a.createElement(C.a,{options:null===_.a||void 0===_.a?void 0:_.a.getStatesOfCountry(null===Me||void 0===Me?void 0:Me.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:qe,onChange:function(e){ze(e),ye(Object(n.a)(Object(n.a)({},Ee),{},Object(a.a)({},"State",null===e||void 0===e?void 0:e.name)))}}),he===l?u.a.createElement(u.a.Fragment,null,Se&&u.a.createElement("span",{style:{color:"red"}},Se)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(j=e.label._text)||void 0===j?void 0:j.includes("ity"))?u.a.createElement(m.a,{key:l,lg:"6",md:"6",sm:"12"},u.a.createElement(b.a,null,u.a.createElement(E.a,null,null===e||void 0===e||null===(S=e.label)||void 0===S?void 0:S._text),u.a.createElement(C.a,{options:null===h.a||void 0===h.a?void 0:h.a.getCitiesOfState(null===qe||void 0===qe?void 0:qe.countryCode,null===qe||void 0===qe?void 0:qe.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:Ke,onChange:function(e){We(e),ye(Object(n.a)(Object(n.a)({},Ee),{},Object(a.a)({},"City",null===e||void 0===e?void 0:e.name)))}}),he===l?u.a.createElement(u.a.Fragment,null,Se&&u.a.createElement("span",{style:{color:"red"}},Se)):u.a.createElement(u.a.Fragment,null))):void 0:u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:l,lg:"6",md:"6",sm:"12"},u.a.createElement(b.a,null,u.a.createElement(E.a,null,null===e||void 0===e||null===(d=e.label)||void 0===d?void 0:d._text),u.a.createElement(g.a,{onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(r=e.type)||void 0===r||null===(c=r._attributes)||void 0===c?void 0:c.type,placeholder:null===e||void 0===e||null===(v=e.placeholder)||void 0===v?void 0:v._text,name:null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s._text,value:Ee[null===e||void 0===e||null===(p=e.name)||void 0===p?void 0:p._text],onChange:function(t){var a,n;return Be(t,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,l)}}),he===l?u.a.createElement(u.a.Fragment,null,Se&&u.a.createElement("span",{style:{color:"red"}},Se)):u.a.createElement(u.a.Fragment,null))))}))),u.a.createElement("div",{className:"container"},u.a.createElement(E.a,{className:"py-1"},"Notification"),u.a.createElement("div",null,me&&(null===me||void 0===me||null===(ne=me.CreateQuote)||void 0===ne||null===(oe=ne.CheckBox)||void 0===oe||null===(ie=oe.input)||void 0===ie?void 0:ie.map((function(e,l){var t,a,n,o,i;return u.a.createElement(u.a.Fragment,null,u.a.createElement("span",{key:l,className:"mx-2"},u.a.createElement(g.a,{style:{marginRight:"3px"},type:null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type,name:null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,onChange:function(e){return Be(e,"checkbox")}})," ",u.a.createElement("span",{className:"mt-1 mx-1",style:{marginRight:"40px"}},"Whatsapp"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?u.a.createElement(S.l,{className:"mx-1",color:"#59CE72",size:25}):u.a.createElement(u.a.Fragment,null,"SMS"==(null===(i=e.label)||void 0===i?void 0:i._text)?u.a.createElement(u.a.Fragment,null,u.a.createElement(N.c,{size:30})):u.a.createElement(u.a.Fragment,null,u.a.createElement(w.a,{className:"",size:30}))))))})))))),u.a.createElement("hr",null),u.a.createElement(v.a,{className:"mt-2 "},u.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(E.a,{className:""},u.a.createElement("h4",null,"Status")),u.a.createElement("div",{className:"form-label-group mx-1"},me&&(null===me||void 0===me||null===(ue=me.CreateQuote)||void 0===ue||null===(de=ue.Radiobutton)||void 0===de||null===(re=de.input)||void 0===re?void 0:re.map((function(e,l){var t,a,n,o,i;return u.a.createElement(b.a,{key:l},u.a.createElement(g.a,{key:l,style:{marginRight:"3px"},required:!0,type:null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type,name:null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,value:"".concat("Active"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?"Active":"Deactive"),onChange:Be})," ",u.a.createElement("span",{className:"mx-1 mt-1",style:{marginRight:"20px"}},null===e||void 0===e||null===(i=e.label)||void 0===i?void 0:i._text))})))))),u.a.createElement(v.a,null,u.a.createElement(O.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}}}]);
//# sourceMappingURL=382.b2aa6662.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[296],{2987:function(e,t,l){"use strict";l.r(t);var a=l(55),n=l(8),o=l(45),i=l(1),u=l.n(i),c=l(630),r=l.n(c),d=l(891),v=l(892),m=l(173),s=l(899),p=l(903),E=l(893),b=l(939),y=l(894),g=l(881),O=l(895),f=(l(25),l(162)),x=l.n(f),j=(l(631),l(915)),h=l(916),_=l(917),C=l(124),N=l(78),S=l(161),k=l.n(S),w=(l(632),l(79)),F=l(946),A=l(941),D=l(61),R=(l(918),l(90));t.default=function(){var e,t,l,c,f,S,J,M,V,z,B,L,P,q,K,W,T,Y,$,G,H,I,Q,U=Object(i.useState)({}),X=Object(o.a)(U,2),Z=X[0],ee=X[1],te=Object(i.useState)({}),le=Object(o.a)(te,2),ae=le[0],ne=le[1],oe=Object(i.useState)({}),ie=Object(o.a)(oe,2),ue=ie[0],ce=ie[1],re=Object(i.useState)(""),de=Object(o.a)(re,2),ve=de[0],me=de[1],se=Object(i.useState)(""),pe=Object(o.a)(se,2),Ee=pe[0],be=pe[1],ye=Object(i.useState)({}),ge=Object(o.a)(ye,2),Oe=(ge[0],ge[1],Object(i.useContext)(R.a),function(e,t,l){var o=e.target,i=o.name,u=o.value,c=o.checked;me(l),"checkbox"==t?ne(Object(n.a)(Object(n.a)({},ae),{},Object(a.a)({},i,c))):"number"==t?/^\d{0,10}$/.test(u)?(ne(Object(n.a)(Object(n.a)({},ae),{},Object(a.a)({},i,u))),be("")):be("Please enter a valid number with a maximum length of 10 digits"):u.length<=10?(ne(Object(n.a)(Object(n.a)({},ae),{},Object(a.a)({},i,u))),be("")):ne(Object(n.a)(Object(n.a)({},ae),{},Object(a.a)({},i,u)))});Object(i.useEffect)((function(){console.log(ae)}),[ae]),Object(i.useEffect)((function(){Object(w.k)().then((function(e){var t,l,a,n=r.a.xml2json(e.data,{compact:!0,spaces:2});console.log(JSON.parse(n));null===(t=JSON.parse(n))||void 0===t||null===(l=t.CreateAccount)||void 0===l||null===(a=l.input[14].permissions)||void 0===a||a.role;ee(JSON.parse(n)),ce(JSON.parse(n))})).catch((function(e){console.log(e)}))}),[]);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(v.a,null,u.a.createElement(N.b,{render:function(e){var t=e.history;return u.a.createElement(m.a,{className:" float-right",color:"danger",onClick:function(){return t.goBack()}},"Back")}}))),u.a.createElement(s.a,null,u.a.createElement(d.a,{className:"m-2"},u.a.createElement(v.a,null,u.a.createElement("h1",{className:"float-left"},"Create Support"))),u.a.createElement(p.a,null,u.a.createElement(E.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),Ee?k()("Error occured while Entering Details"):Object(w.i)(ae).then((function(e){e.status&&(ne({}),window.location.reload(),k()("Acccont Created Successfully"))})).catch((function(e){console.log(e)}))}},u.a.createElement(d.a,{className:"mb-2"},u.a.createElement(v.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,null===(e=ue.CreateAccount)||void 0===e||null===(t=e.MyDropdown)||void 0===t||null===(l=t.dropdown)||void 0===l||null===(c=l.label)||void 0===c?void 0:c._text),u.a.createElement(g.a,{required:!0,type:"select",name:null===(f=ue.CreateAccount)||void 0===f||null===(S=f.MyDropdown)||void 0===S||null===(J=S.dropdown)||void 0===J||null===(M=J.name)||void 0===M?void 0:M._text,value:ae[null===(V=ue.CreateAccount)||void 0===V||null===(z=V.MyDropdown)||void 0===z||null===(B=z.dropdown)||void 0===B||null===(L=B.name)||void 0===L?void 0:L._text],onChange:Oe},u.a.createElement("option",{value:""},"--Select Role--"),null===ue||void 0===ue||null===(P=ue.CreateAccount)||void 0===P||null===(q=P.MyDropdown)||void 0===q||null===(K=q.dropdown)||void 0===K?void 0:K.option.map((function(e,t){var l,a;return u.a.createElement("option",{key:t,value:null===e||void 0===e||null===(l=e._attributes)||void 0===l?void 0:l.value},null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.value)}))))),Z&&(null===Z||void 0===Z||null===(W=Z.CreateAccount)||void 0===W||null===(T=W.input)||void 0===T?void 0:T.map((function(e,t){var l,o,i,c,r,d,m,s,p,E,g,f,N,S,k,w,F,A;if(null===e||void 0===e?void 0:e.role){var D,R,J,M=null===e||void 0===e||null===(D=e.role)||void 0===D?void 0:D.find((function(e){var t;return"WARRANTY APPROVER"===(null===(t=e._attributes)||void 0===t?void 0:t.name)}));null===M||void 0===M||null===(R=M.permissions)||void 0===R?void 0:R._text.includes("View"),null===M||void 0===M||null===(J=M.permissions)||void 0===J?void 0:J._text.includes("Edit")}return(null===e||void 0===e?void 0:e.phoneinput)?u.a.createElement(u.a.Fragment,null,u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{key:t,lg:"6",md:"6",sm:"12"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,null===e||void 0===e||null===(l=e.label)||void 0===l?void 0:l._text),u.a.createElement(x.a,{inputClass:"myphoneinput",country:"us",onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:ae[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],onChange:function(t){var l;ne(Object(n.a)(Object(n.a)({},ae),{},Object(a.a)({},null===e||void 0===e||null===(l=e.name)||void 0===l?void 0:l._text,t)))}}),ve===t?u.a.createElement(u.a.Fragment,null,Ee&&u.a.createElement("span",{style:{color:"red"}},Ee)):u.a.createElement(u.a.Fragment,null))))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(E=e.label._text)||void 0===E?void 0:E.includes("ountry"))?u.a.createElement(v.a,{key:t,lg:"6",md:"6",sm:"12"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,null===e||void 0===e||null===(N=e.label)||void 0===N?void 0:N._text),u.a.createElement(C.a,{inputClass:"countryclass",className:"countryclassnw",options:j.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:ae.country,onChange:function(e){ne(Object(n.a)(Object(n.a)({},ae),{},Object(a.a)({},"country",e)))}}),ve===t?u.a.createElement(u.a.Fragment,null,Ee&&u.a.createElement("span",{style:{color:"red"}},Ee)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(g=e.label._text)||void 0===g?void 0:g.includes("tate"))?u.a.createElement(v.a,{key:t,lg:"6",md:"6",sm:"12"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,null===e||void 0===e||null===(S=e.label)||void 0===S?void 0:S._text),u.a.createElement(C.a,{options:null===h.a||void 0===h.a?void 0:h.a.getStatesOfCountry(null===ae||void 0===ae||null===(k=ae.country)||void 0===k?void 0:k.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:ae.State,onChange:function(e){ne(Object(n.a)(Object(n.a)({},ae),{},Object(a.a)({},"State",e)))}}),ve===t?u.a.createElement(u.a.Fragment,null,Ee&&u.a.createElement("span",{style:{color:"red"}},Ee)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(f=e.label._text)||void 0===f?void 0:f.includes("ity"))?u.a.createElement(v.a,{key:t,lg:"6",md:"6",sm:"12"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,null===e||void 0===e||null===(w=e.label)||void 0===w?void 0:w._text),u.a.createElement(C.a,{options:null===_.a||void 0===_.a?void 0:_.a.getCitiesOfState(null===ae||void 0===ae||null===(F=ae.State)||void 0===F?void 0:F.countryCode,null===ae||void 0===ae||null===(A=ae.State)||void 0===A?void 0:A.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:ae.City,onChange:function(e){ne(Object(n.a)(Object(n.a)({},ae),{},Object(a.a)({},"City",e)))}}),ve===t?u.a.createElement(u.a.Fragment,null,Ee&&u.a.createElement("span",{style:{color:"red"}},Ee)):u.a.createElement(u.a.Fragment,null))):void 0:u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{key:t,lg:"6",md:"6",sm:"12"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,null===e||void 0===e||null===(c=e.label)||void 0===c?void 0:c._text),u.a.createElement(O.a,{onKeyDown:function(t){var l,a;"number"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(r=e.type)||void 0===r||null===(d=r._attributes)||void 0===d?void 0:d.type,placeholder:null===e||void 0===e||null===(m=e.placeholder)||void 0===m?void 0:m._text,name:null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s._text,value:ae[null===e||void 0===e||null===(p=e.name)||void 0===p?void 0:p._text],onChange:function(l){var a,n;return Oe(l,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,t)}}),ve===t?u.a.createElement(u.a.Fragment,null,Ee&&u.a.createElement("span",{style:{color:"red"}},Ee)):u.a.createElement(u.a.Fragment,null))))}))),u.a.createElement("div",{className:"container"},u.a.createElement(y.a,{className:"py-1"},"Notification"),u.a.createElement("div",null,Z&&(null===Z||void 0===Z||null===(Y=Z.CreateAccount)||void 0===Y||null===($=Y.CheckBox)||void 0===$||null===(G=$.input)||void 0===G?void 0:G.map((function(e,t){var l,a,n,o,i;return u.a.createElement(u.a.Fragment,null,u.a.createElement("span",{key:t,className:"mx-2"},u.a.createElement(O.a,{style:{marginRight:"3px"},type:null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type,name:null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,onChange:function(e){return Oe(e,"checkbox")}})," ",u.a.createElement("span",{className:"mt-1 mx-1",style:{marginRight:"40px"}},"Whatsapp"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?u.a.createElement(D.m,{className:"mx-1",color:"#59CE72",size:25}):u.a.createElement(u.a.Fragment,null,"SMS"==(null===(i=e.label)||void 0===i?void 0:i._text)?u.a.createElement(u.a.Fragment,null,u.a.createElement(A.c,{size:30})):u.a.createElement(u.a.Fragment,null,u.a.createElement(F.a,{className:"",size:30}))))))})))))),u.a.createElement("hr",null),u.a.createElement(d.a,{className:"mt-2 "},u.a.createElement(v.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,{className:""},u.a.createElement("h4",null,"Status")),u.a.createElement("div",{className:"form-label-group mx-1"},Z&&(null===Z||void 0===Z||null===(H=Z.CreateAccount)||void 0===H||null===(I=H.Radiobutton)||void 0===I||null===(Q=I.input)||void 0===Q?void 0:Q.map((function(e,t){var l,a,n,o,i;return u.a.createElement(b.a,{key:t},u.a.createElement(O.a,{key:t,style:{marginRight:"3px"},required:!0,type:null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type,name:null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,value:"".concat("Active"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?"Active":"Deactive"),onChange:Oe})," ",u.a.createElement("span",{className:"mx-1 mt-1",style:{marginRight:"20px"}},null===e||void 0===e||null===(i=e.label)||void 0===i?void 0:i._text))})))))),u.a.createElement(d.a,null,u.a.createElement(m.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}},918:function(e,t,l){}}]);
//# sourceMappingURL=296.6ac60363.chunk.js.map
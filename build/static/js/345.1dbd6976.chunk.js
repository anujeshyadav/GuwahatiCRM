(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[345],{3121:function(e,l,t){"use strict";t.r(l);var n=t(59),a=t(7),o=t(25),i=t(24),u=t(1),d=t.n(u),r=t(232),v=t.n(r),m=t(909),c=t(901),s=t(902),p=t(913),E=t(903),y=t(936),b=t(904),g=t(891),x=t(905),_=t(243),f=(t(26),t(168)),h=t.n(f),F=(t(233),t(95)),O=t.n(F),N=(t(231),t(53)),k=t(169),j=t(934),C=t(28),w=t(76);l.default=function(){var e,l,t,r,f,F,D,R,S,A,I,K,V,P,J,M,T,z,W,q,Y,B,U,$,G,H,L,Q,X=Object(u.useState)({}),Z=Object(i.a)(X,2),ee=Z[0],le=Z[1],te=Object(u.useState)({}),ne=Object(i.a)(te,2),ae=ne[0],oe=ne[1],ie=Object(u.useState)({}),ue=Object(i.a)(ie,2),de=ue[0],re=ue[1],ve=Object(u.useState)(""),me=Object(i.a)(ve,2),ce=me[0],se=me[1],pe=Object(u.useState)(""),Ee=Object(i.a)(pe,2),ye=Ee[0],be=Ee[1],ge=Object(u.useState)({}),xe=Object(i.a)(ge,2),_e=(xe[0],xe[1],Object(u.useContext)(w.a),Object(u.useState)([{name:JSON.parse(localStorage.getItem("userData")).UserName,userRole:JSON.parse(localStorage.getItem("userData")).Role,comment:"",time:new Date}])),fe=Object(i.a)(_e,2),he=fe[0],Fe=fe[1],Oe=Object(u.useState)([{files:[]}]),Ne=Object(i.a)(Oe,2),ke=Ne[0],je=Ne[1],Ce={userName:JSON.parse(localStorage.getItem("userData")).UserName,Role:JSON.parse(localStorage.getItem("userData")).Role,comment:"",time:(new Date).toString()},we=function(e,l,t){var o=e.target,i=o.name,u=o.value,d=o.checked;se(t),"checkbox"==l?oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},i,d))):"number"==l?/^\d{0,10}$/.test(u)?(oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},i,u))),be("")):be("Please enter a valid number with a maximum length of 10 digits"):u.length<=10?(oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},i,u))),be("")):oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},i,u)))};Object(u.useEffect)((function(){}),[ae]),Object(u.useEffect)((function(){Object(N.yb)().then((function(e){var l,t,n,a=v.a.xml2json(e.data,{compact:!0,spaces:2});console.log(null===(l=JSON.parse(a))||void 0===l?void 0:l.Inspection),le(null===(t=JSON.parse(a))||void 0===t?void 0:t.Inspection),re(null===(n=JSON.parse(a))||void 0===n?void 0:n.Inspection)})).catch((function(e){console.log(e)}))}),[]);return d.a.createElement("div",null,d.a.createElement("div",null,d.a.createElement(m.a,null,d.a.createElement(c.a,{className:"m-2"},d.a.createElement(s.a,{className:""},d.a.createElement("div",null,d.a.createElement("h1",{className:""},"Create Inspections")),d.a.createElement("div",null,d.a.createElement("span",null,"Inspections Id")," ",d.a.createElement("span",null,"#")))),d.a.createElement(p.a,null,d.a.createElement(E.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),ye?O()("Error occured while Entering Details"):CreateAccountSave(ae).then((function(e){e.status&&(oe({}),window.location.reload(),O()("Acccont Created Successfully"))})).catch((function(e){console.log(e)}))}},d.a.createElement("h3",{className:"mb-2"},de&&(null===de||void 0===de||null===(e=de.InspectionDoneat)||void 0===e||null===(l=e.heading)||void 0===l?void 0:l._text)),d.a.createElement(c.a,{className:"mb-2"},de&&(null===de||void 0===de||null===(t=de.InspectionDoneat)||void 0===t||null===(r=t.MyDropDown)||void 0===r?void 0:r.map((function(e,l){var t,n,a,o,i,u,r;return d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{lg:"6",md:"6",key:l},d.a.createElement(y.a,null,d.a.createElement(b.a,null,null===e||void 0===e||null===(t=e.dropdown)||void 0===t||null===(n=t.label)||void 0===n?void 0:n._text),d.a.createElement(g.a,{required:!0,type:"select",name:null===e||void 0===e||null===(a=e.dropdown)||void 0===a||null===(o=a.name)||void 0===o?void 0:o._text,value:ae[null===e||void 0===e||null===(i=e.dropdown)||void 0===i||null===(u=i.name)||void 0===u?void 0:u._text],onChange:we},d.a.createElement("option",{value:""},"--Select---"),null===(r=e.dropdown.option)||void 0===r?void 0:r.map((function(e,l){var t,n;return d.a.createElement("option",{key:l,value:null===e||void 0===e||null===(t=e._attributes)||void 0===t?void 0:t.value},null===e||void 0===e||null===(n=e._attributes)||void 0===n?void 0:n.value)}))))))}))),de&&(null===de||void 0===de||null===(f=de.InspectionDoneat)||void 0===f||null===(F=f.input)||void 0===F?void 0:F.map((function(e,l){if(null===e||void 0===e?void 0:e.role){var t,o,i,u=null===e||void 0===e||null===(t=e.role)||void 0===t?void 0:t.find((function(e){var l;return"WARRANTY APPROVER"===(null===(l=e._attributes)||void 0===l?void 0:l.name)}));View=null===u||void 0===u||null===(o=u.permissions)||void 0===o?void 0:o._text.includes("View"),Edit=null===u||void 0===u||null===(i=u.permissions)||void 0===i?void 0:i._text.includes("Edit")}var r,v,m,c,p,E,g,_,f,F,O,N,k,j,C,w,D,R,S,A,I,K;return(null===e||void 0===e?void 0:e.phoneinput)?(null===e||void 0===e?void 0:e.Readonly)?d.a.createElement(d.a.Fragment,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(y.a,null,d.a.createElement(b.a,null,null===e||void 0===e||null===(r=e.label)||void 0===r?void 0:r._text),d.a.createElement(h.a,{disabled:!0,inputClass:"myphoneinput",country:"us",onKeyDown:function(l){var t,n;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(v=e.name)||void 0===v?void 0:v._text,value:ae[null===e||void 0===e||null===(m=e.name)||void 0===m?void 0:m._text],onChange:function(l){var t;oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text,l)))}}),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null))))):d.a.createElement(d.a.Fragment,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(y.a,null,d.a.createElement(b.a,null,null===e||void 0===e||null===(c=e.label)||void 0===c?void 0:c._text),d.a.createElement(h.a,{inputClass:"myphoneinput",country:"us",onKeyDown:function(l){var t,n;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(p=e.name)||void 0===p?void 0:p._text,value:ae[null===e||void 0===e||null===(E=e.name)||void 0===E?void 0:E._text],onChange:function(l){var t;oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text,l)))}}),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null))))):(null===e||void 0===e?void 0:e.Readonly)?"checkbox"==(null===e||void 0===e||null===(g=e.type._attributes)||void 0===g?void 0:g.type)?d.a.createElement(d.a.Fragment,null,d.a.createElement(b.a,{className:"mx-1"},null===e||void 0===e||null===(_=e.heading)||void 0===_?void 0:_._text),d.a.createElement(s.a,{key:l,lg:"12",md:"12",sm:"12"},d.a.createElement(y.a,null,d.a.createElement(x.a,{disabled:!0,className:"mx-1",type:null===e||void 0===e||null===(f=e.type._attributes)||void 0===f?void 0:f.type,name:null===e||void 0===e||null===(F=e.name)||void 0===F?void 0:F._text,placeholder:null===e||void 0===e?void 0:e.name._text,value:ae[null===e||void 0===e||null===(O=e.name)||void 0===O?void 0:O._text]}),d.a.createElement("span",{className:"mx-3 py-1"},null===e||void 0===e||null===(N=e.value)||void 0===N?void 0:N._text),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null)))):d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(b.a,null,null===e||void 0===e||null===(k=e.label)||void 0===k?void 0:k._text),d.a.createElement(y.a,null,d.a.createElement(x.a,{disabled:!0,className:"form-control",type:null===e||void 0===e||null===(j=e.type._attributes)||void 0===j?void 0:j.type,name:null===e||void 0===e||null===(C=e.name)||void 0===C?void 0:C._text,placeholder:null===e||void 0===e?void 0:e.name._text,value:ae[null===e||void 0===e||null===(w=e.name)||void 0===w?void 0:w._text]}),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null)))):d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(y.a,null,d.a.createElement(b.a,null,null===e||void 0===e||null===(D=e.label)||void 0===D?void 0:D._text),d.a.createElement(x.a,{onKeyDown:function(l){var t,n;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(R=e.type)||void 0===R||null===(S=R._attributes)||void 0===S?void 0:S.type,placeholder:null===e||void 0===e||null===(A=e.placeholder)||void 0===A?void 0:A._text,name:null===e||void 0===e||null===(I=e.name)||void 0===I?void 0:I._text,value:ae[null===e||void 0===e||null===(K=e.name)||void 0===K?void 0:K._text],onChange:function(t){var n,a;return we(t,null===e||void 0===e||null===(n=e.type)||void 0===n||null===(a=n._attributes)||void 0===a?void 0:a.type,l)}}),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null))))})))),d.a.createElement("h3",{className:"mb-2"},de&&(null===de||void 0===de||null===(D=de.InspectiondoneOn)||void 0===D||null===(R=D.heading)||void 0===R?void 0:R._text)),d.a.createElement(c.a,null,de&&(null===de||void 0===de||null===(S=de.InspectiondoneOn)||void 0===S||null===(A=S.input)||void 0===A?void 0:A.map((function(e,l){if(null===e||void 0===e?void 0:e.role){var t,o,i,u=null===e||void 0===e||null===(t=e.role)||void 0===t?void 0:t.find((function(e){var l;return"WARRANTY APPROVER"===(null===(l=e._attributes)||void 0===l?void 0:l.name)}));View=null===u||void 0===u||null===(o=u.permissions)||void 0===o?void 0:o._text.includes("View"),Edit=null===u||void 0===u||null===(i=u.permissions)||void 0===i?void 0:i._text.includes("Edit")}var r,v,m,c,p,E,g,_,f,F,O,N,k,j,C,w,D,R,S,A,I,K;return(null===e||void 0===e?void 0:e.phoneinput)?(null===e||void 0===e?void 0:e.Readonly)?d.a.createElement(d.a.Fragment,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(y.a,null,d.a.createElement(b.a,null,null===e||void 0===e||null===(r=e.label)||void 0===r?void 0:r._text),d.a.createElement(h.a,{disabled:!0,inputClass:"myphoneinput",country:"us",onKeyDown:function(l){var t,n;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(v=e.name)||void 0===v?void 0:v._text,value:ae[null===e||void 0===e||null===(m=e.name)||void 0===m?void 0:m._text],onChange:function(l){var t;oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text,l)))}}),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null))))):d.a.createElement(d.a.Fragment,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(y.a,null,d.a.createElement(b.a,null,null===e||void 0===e||null===(c=e.label)||void 0===c?void 0:c._text),d.a.createElement(h.a,{inputClass:"myphoneinput",country:"us",onKeyDown:function(l){var t,n;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(p=e.name)||void 0===p?void 0:p._text,value:ae[null===e||void 0===e||null===(E=e.name)||void 0===E?void 0:E._text],onChange:function(l){var t;oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text,l)))}}),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null))))):(null===e||void 0===e?void 0:e.Readonly)?"checkbox"==(null===e||void 0===e||null===(g=e.type._attributes)||void 0===g?void 0:g.type)?d.a.createElement(d.a.Fragment,null,d.a.createElement(b.a,{className:"mx-1"},null===e||void 0===e||null===(_=e.heading)||void 0===_?void 0:_._text),d.a.createElement(s.a,{key:l,lg:"12",md:"12",sm:"12"},d.a.createElement(y.a,null,d.a.createElement(x.a,{disabled:!0,className:"mx-1",type:null===e||void 0===e||null===(f=e.type._attributes)||void 0===f?void 0:f.type,name:null===e||void 0===e||null===(F=e.name)||void 0===F?void 0:F._text,placeholder:null===e||void 0===e?void 0:e.name._text,value:ae[null===e||void 0===e||null===(O=e.name)||void 0===O?void 0:O._text]}),d.a.createElement("span",{className:"mx-3 py-1"},null===e||void 0===e||null===(N=e.value)||void 0===N?void 0:N._text),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null)))):d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(b.a,null,null===e||void 0===e||null===(k=e.label)||void 0===k?void 0:k._text),d.a.createElement(y.a,null,d.a.createElement(x.a,{disabled:!0,className:"form-control",type:null===e||void 0===e||null===(j=e.type._attributes)||void 0===j?void 0:j.type,name:null===e||void 0===e||null===(C=e.name)||void 0===C?void 0:C._text,placeholder:null===e||void 0===e?void 0:e.name._text,value:ae[null===e||void 0===e||null===(w=e.name)||void 0===w?void 0:w._text]}),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null)))):d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(y.a,null,d.a.createElement(b.a,null,null===e||void 0===e||null===(D=e.label)||void 0===D?void 0:D._text),d.a.createElement(x.a,{onKeyDown:function(l){var t,n;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(R=e.type)||void 0===R||null===(S=R._attributes)||void 0===S?void 0:S.type,placeholder:null===e||void 0===e||null===(A=e.placeholder)||void 0===A?void 0:A._text,name:null===e||void 0===e||null===(I=e.name)||void 0===I?void 0:I._text,value:ae[null===e||void 0===e||null===(K=e.name)||void 0===K?void 0:K._text],onChange:function(t){var n,a;return we(t,null===e||void 0===e||null===(n=e.type)||void 0===n||null===(a=n._attributes)||void 0===a?void 0:a.type,l)}}),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null))))})))),d.a.createElement(c.a,null,de&&(null===de||void 0===de||null===(I=de.inspectionDoneby)||void 0===I||null===(K=I.MyDropDown)||void 0===K?void 0:K.map((function(e,l){var t,n,a,o,i,u,r;return d.a.createElement(s.a,{lg:"6",md:"6",key:l},d.a.createElement(y.a,null,d.a.createElement(b.a,null,null===e||void 0===e||null===(t=e.dropdown)||void 0===t||null===(n=t.label)||void 0===n?void 0:n._text),d.a.createElement(g.a,{required:!0,type:"select",name:null===e||void 0===e||null===(a=e.dropdown)||void 0===a||null===(o=a.name)||void 0===o?void 0:o._text,value:ae[null===e||void 0===e||null===(i=e.dropdown)||void 0===i||null===(u=i.name)||void 0===u?void 0:u._text],onChange:we},d.a.createElement("option",{value:""},"--Select---"),null===(r=e.dropdown.option)||void 0===r?void 0:r.map((function(e,l){var t,n;return d.a.createElement("option",{key:l,value:null===e||void 0===e||null===(t=e._attributes)||void 0===t?void 0:t.value},null===e||void 0===e||null===(n=e._attributes)||void 0===n?void 0:n.value)})))))}))),de&&(null===de||void 0===de||null===(V=de.inspectionDoneby)||void 0===V||null===(P=V.input)||void 0===P?void 0:P.map((function(e,l){if(null===e||void 0===e?void 0:e.role){var t,o,i,u=null===e||void 0===e||null===(t=e.role)||void 0===t?void 0:t.find((function(e){var l;return"WARRANTY APPROVER"===(null===(l=e._attributes)||void 0===l?void 0:l.name)}));View=null===u||void 0===u||null===(o=u.permissions)||void 0===o?void 0:o._text.includes("View"),Edit=null===u||void 0===u||null===(i=u.permissions)||void 0===i?void 0:i._text.includes("Edit")}var r,v,m,c,p,E,g,_,f,F,O,N,k,j,C,w,D,R,S,A,I,K;return(null===e||void 0===e?void 0:e.phoneinput)?(null===e||void 0===e?void 0:e.Readonly)?d.a.createElement(d.a.Fragment,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(y.a,null,d.a.createElement(b.a,null,null===e||void 0===e||null===(r=e.label)||void 0===r?void 0:r._text),d.a.createElement(h.a,{disabled:!0,inputClass:"myphoneinput",country:"us",onKeyDown:function(l){var t,n;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(v=e.name)||void 0===v?void 0:v._text,value:ae[null===e||void 0===e||null===(m=e.name)||void 0===m?void 0:m._text],onChange:function(l){var t;oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text,l)))}}),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null))))):d.a.createElement(d.a.Fragment,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(y.a,null,d.a.createElement(b.a,null,null===e||void 0===e||null===(c=e.label)||void 0===c?void 0:c._text),d.a.createElement(h.a,{inputClass:"myphoneinput",country:"us",onKeyDown:function(l){var t,n;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(p=e.name)||void 0===p?void 0:p._text,value:ae[null===e||void 0===e||null===(E=e.name)||void 0===E?void 0:E._text],onChange:function(l){var t;oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text,l)))}}),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null))))):(null===e||void 0===e?void 0:e.Readonly)?"checkbox"==(null===e||void 0===e||null===(g=e.type._attributes)||void 0===g?void 0:g.type)?d.a.createElement(d.a.Fragment,null,d.a.createElement(b.a,{className:"mx-1"},null===e||void 0===e||null===(_=e.heading)||void 0===_?void 0:_._text),d.a.createElement(s.a,{key:l,lg:"12",md:"12",sm:"12"},d.a.createElement(y.a,null,d.a.createElement(x.a,{disabled:!0,className:"mx-1",type:null===e||void 0===e||null===(f=e.type._attributes)||void 0===f?void 0:f.type,name:null===e||void 0===e||null===(F=e.name)||void 0===F?void 0:F._text,placeholder:null===e||void 0===e?void 0:e.name._text,value:ae[null===e||void 0===e||null===(O=e.name)||void 0===O?void 0:O._text]}),d.a.createElement("span",{className:"mx-3 py-1"},null===e||void 0===e||null===(N=e.value)||void 0===N?void 0:N._text),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null)))):d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(b.a,null,null===e||void 0===e||null===(k=e.label)||void 0===k?void 0:k._text),d.a.createElement(y.a,null,d.a.createElement(x.a,{disabled:!0,className:"form-control",type:null===e||void 0===e||null===(j=e.type._attributes)||void 0===j?void 0:j.type,name:null===e||void 0===e||null===(C=e.name)||void 0===C?void 0:C._text,placeholder:null===e||void 0===e?void 0:e.name._text,value:ae[null===e||void 0===e||null===(w=e.name)||void 0===w?void 0:w._text]}),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null)))):d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(y.a,null,d.a.createElement(b.a,null,null===e||void 0===e||null===(D=e.label)||void 0===D?void 0:D._text),d.a.createElement(x.a,{onKeyDown:function(l){var t,n;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(R=e.type)||void 0===R||null===(S=R._attributes)||void 0===S?void 0:S.type,placeholder:null===e||void 0===e||null===(A=e.placeholder)||void 0===A?void 0:A._text,name:null===e||void 0===e||null===(I=e.name)||void 0===I?void 0:I._text,value:ae[null===e||void 0===e||null===(K=e.name)||void 0===K?void 0:K._text],onChange:function(t){var n,a;return we(t,null===e||void 0===e||null===(n=e.type)||void 0===n||null===(a=n._attributes)||void 0===a?void 0:a.type,l)}}),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null))))})))),d.a.createElement(c.a,null,de&&(null===de||void 0===de||null===(J=de.soldby)||void 0===J||null===(M=J.MyDropDown)||void 0===M?void 0:M.map((function(e,l){var t,n,a,o,i,u,r;return d.a.createElement(s.a,{lg:"6",md:"6",key:l},d.a.createElement(y.a,null,d.a.createElement(b.a,null,null===e||void 0===e||null===(t=e.dropdown)||void 0===t||null===(n=t.label)||void 0===n?void 0:n._text),d.a.createElement(g.a,{required:!0,type:"select",name:null===e||void 0===e||null===(a=e.dropdown)||void 0===a||null===(o=a.name)||void 0===o?void 0:o._text,value:ae[null===e||void 0===e||null===(i=e.dropdown)||void 0===i||null===(u=i.name)||void 0===u?void 0:u._text],onChange:we},d.a.createElement("option",{value:""},"--Select---"),null===(r=e.dropdown.option)||void 0===r?void 0:r.map((function(e,l){var t,n;return d.a.createElement("option",{key:l,value:null===e||void 0===e||null===(t=e._attributes)||void 0===t?void 0:t.value},null===e||void 0===e||null===(n=e._attributes)||void 0===n?void 0:n.value)})))))}))),de&&(null===de||void 0===de||null===(T=de.soldby)||void 0===T||null===(z=T.input)||void 0===z?void 0:z.map((function(e,l){if(null===e||void 0===e?void 0:e.role){var t,o,i,u=null===e||void 0===e||null===(t=e.role)||void 0===t?void 0:t.find((function(e){var l;return"WARRANTY APPROVER"===(null===(l=e._attributes)||void 0===l?void 0:l.name)}));View=null===u||void 0===u||null===(o=u.permissions)||void 0===o?void 0:o._text.includes("View"),Edit=null===u||void 0===u||null===(i=u.permissions)||void 0===i?void 0:i._text.includes("Edit")}var r,v,m,c,p,E,g,_,f,F,O,N,k,j,C,w,D,R,S,A,I,K;return(null===e||void 0===e?void 0:e.phoneinput)?(null===e||void 0===e?void 0:e.Readonly)?d.a.createElement(d.a.Fragment,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(y.a,null,d.a.createElement(b.a,null,null===e||void 0===e||null===(r=e.label)||void 0===r?void 0:r._text),d.a.createElement(h.a,{disabled:!0,inputClass:"myphoneinput",country:"us",onKeyDown:function(l){var t,n;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(v=e.name)||void 0===v?void 0:v._text,value:ae[null===e||void 0===e||null===(m=e.name)||void 0===m?void 0:m._text],onChange:function(l){var t;oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text,l)))}}),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null))))):d.a.createElement(d.a.Fragment,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(y.a,null,d.a.createElement(b.a,null,null===e||void 0===e||null===(c=e.label)||void 0===c?void 0:c._text),d.a.createElement(h.a,{inputClass:"myphoneinput",country:"us",onKeyDown:function(l){var t,n;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(p=e.name)||void 0===p?void 0:p._text,value:ae[null===e||void 0===e||null===(E=e.name)||void 0===E?void 0:E._text],onChange:function(l){var t;oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text,l)))}}),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null))))):(null===e||void 0===e?void 0:e.Readonly)?"checkbox"==(null===e||void 0===e||null===(g=e.type._attributes)||void 0===g?void 0:g.type)?d.a.createElement(d.a.Fragment,null,d.a.createElement(b.a,{className:"mx-1"},null===e||void 0===e||null===(_=e.heading)||void 0===_?void 0:_._text),d.a.createElement(s.a,{key:l,lg:"12",md:"12",sm:"12"},d.a.createElement(y.a,null,d.a.createElement(x.a,{disabled:!0,className:"mx-1",type:null===e||void 0===e||null===(f=e.type._attributes)||void 0===f?void 0:f.type,name:null===e||void 0===e||null===(F=e.name)||void 0===F?void 0:F._text,placeholder:null===e||void 0===e?void 0:e.name._text,value:ae[null===e||void 0===e||null===(O=e.name)||void 0===O?void 0:O._text]}),d.a.createElement("span",{className:"mx-3 py-1"},null===e||void 0===e||null===(N=e.value)||void 0===N?void 0:N._text),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null)))):d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(b.a,null,null===e||void 0===e||null===(k=e.label)||void 0===k?void 0:k._text),d.a.createElement(y.a,null,d.a.createElement(x.a,{disabled:!0,className:"form-control",type:null===e||void 0===e||null===(j=e.type._attributes)||void 0===j?void 0:j.type,name:null===e||void 0===e||null===(C=e.name)||void 0===C?void 0:C._text,placeholder:null===e||void 0===e?void 0:e.name._text,value:ae[null===e||void 0===e||null===(w=e.name)||void 0===w?void 0:w._text]}),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null)))):d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(y.a,null,d.a.createElement(b.a,null,null===e||void 0===e||null===(D=e.label)||void 0===D?void 0:D._text),d.a.createElement(x.a,{onKeyDown:function(l){var t,n;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(R=e.type)||void 0===R||null===(S=R._attributes)||void 0===S?void 0:S.type,placeholder:null===e||void 0===e||null===(A=e.placeholder)||void 0===A?void 0:A._text,name:null===e||void 0===e||null===(I=e.name)||void 0===I?void 0:I._text,value:ae[null===e||void 0===e||null===(K=e.name)||void 0===K?void 0:K._text],onChange:function(t){var n,a;return we(t,null===e||void 0===e||null===(n=e.type)||void 0===n||null===(a=n._attributes)||void 0===a?void 0:a.type,l)}}),ce===l?d.a.createElement(d.a.Fragment,null,ye&&d.a.createElement("span",{style:{color:"red"}},ye)):d.a.createElement(d.a.Fragment,null))))})))),d.a.createElement(c.a,null,d.a.createElement("div",{className:"container"},d.a.createElement(b.a,{className:"py-1"},"Notification"),d.a.createElement("div",null,ee&&(null===ee||void 0===ee||null===(W=ee.Inspection)||void 0===W||null===(q=W.CheckBox)||void 0===q||null===(Y=q.input)||void 0===Y?void 0:Y.map((function(e,l){var t,n,a,o,i;return d.a.createElement(d.a.Fragment,null,d.a.createElement("span",{key:l,className:"mx-2"},d.a.createElement(x.a,{style:{marginRight:"3px"},type:null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type,name:null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text,onChange:function(e){return we(e,"checkbox")}})," ",d.a.createElement("span",{className:"mt-1 mx-1",style:{marginRight:"40px"}},"Whatsapp"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?d.a.createElement(C.s,{className:"mx-1",color:"#59CE72",size:25}):d.a.createElement(d.a.Fragment,null,"SMS"==(null===(i=e.label)||void 0===i?void 0:i._text)?d.a.createElement(d.a.Fragment,null,d.a.createElement(j.c,{size:30})):d.a.createElement(d.a.Fragment,null,d.a.createElement(k.a,{className:"",size:30}))))))}))),ee&&(null===ee||void 0===ee||null===(B=ee.Radiobutton)||void 0===B||null===(U=B.input)||void 0===U?void 0:U.map((function(e,l){var t,n,a,o,i;return d.a.createElement(y.a,{key:l},d.a.createElement("div",{className:"mx-1"},d.a.createElement(x.a,{className:"",key:l,style:{marginRight:"3px"},required:!0,type:null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type,name:null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text,value:"".concat("Active"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?"Active":"Deactive"),onChange:we})," ",d.a.createElement("span",{className:"mx-1 mt-1",style:{marginRight:"20px"}},null===e||void 0===e||null===(i=e.label)||void 0===i?void 0:i._text)))})))))),ke.map((function(e,l){return d.a.createElement(c.a,{className:"my-2"},d.a.createElement(s.a,{lg:"6",md:"6",sm:"12",key:l},d.a.createElement(x.a,{type:"file",multiple:!0,onChange:function(e){return function(e,l){var t=Object(o.a)(ke),n=l.target.files;t[e].files=n,je(t)}(l,e)}})),d.a.createElement(s.a,{className:"d-flex ",lg:"3",md:"3",sm:"12"},d.a.createElement("div",null,l?d.a.createElement(_.a,{type:"button",className:"btn btn-danger",onClick:function(){return function(e){var l=Object(o.a)(ke);l.splice(e,1),je(l)}(l)}},"-"):null),d.a.createElement("div",null,d.a.createElement(_.a,{className:"ml-1",color:"primary",type:"button",onClick:function(){je([].concat(Object(o.a)(ke),[{files:[]}]))}},"+"))))})),d.a.createElement("hr",null),d.a.createElement(c.a,{className:"mt-2 "},d.a.createElement(s.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(b.a,{className:""},d.a.createElement("h4",null,"Status")),d.a.createElement("div",{className:"form-label-group mx-1"},ee&&(null===ee||void 0===ee||null===($=ee.Inspection)||void 0===$||null===(G=$.Radiobutton)||void 0===G||null===(H=G.input)||void 0===H?void 0:H.map((function(e,l){var t,n,a,o,i;return d.a.createElement(y.a,{key:l},d.a.createElement(x.a,{key:l,style:{marginRight:"3px"},required:!0,type:null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type,name:null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text,value:"".concat("Active"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?"Active":"Deactive"),onChange:we})," ",d.a.createElement("span",{className:"mx-1 mt-1",style:{marginRight:"20px"}},null===e||void 0===e||null===(i=e.label)||void 0===i?void 0:i._text))})))))),d.a.createElement("div",{className:"container"},d.a.createElement(b.a,{className:"py-1"},"Notification"),d.a.createElement("div",null,ee&&(null===ee||void 0===ee||null===(L=ee.CheckBox)||void 0===L||null===(Q=L.input)||void 0===Q?void 0:Q.map((function(e,l){var t,n,a,o,i;return d.a.createElement(d.a.Fragment,null,d.a.createElement("span",{key:l,className:"mx-2"},d.a.createElement(x.a,{style:{marginRight:"3px"},type:null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type,name:null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text,onChange:function(e){return we(e,"checkbox")}})," ",d.a.createElement("span",{className:"mt-1 mx-1",style:{marginRight:"40px"}},"Whatsapp"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?d.a.createElement(C.s,{className:"mx-1",color:"#59CE72",size:25}):d.a.createElement(d.a.Fragment,null,"SMS"==(null===(i=e.label)||void 0===i?void 0:i._text)?d.a.createElement(d.a.Fragment,null,d.a.createElement(j.c,{size:30})):d.a.createElement(d.a.Fragment,null,d.a.createElement(k.a,{className:"",size:30}))))))}))))),d.a.createElement(c.a,null,d.a.createElement(_.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit"))),he&&(null===he||void 0===he?void 0:he.map((function(e,l){return d.a.createElement(d.a.Fragment,null,d.a.createElement(c.a,{key:l,className:"my-2"},d.a.createElement(s.a,{lg:"6",md:"6",sm:"12"},d.a.createElement(b.a,null,"Comment"),d.a.createElement(x.a,{type:"textarea",name:"comment",placeholder:"Comment",value:e.comment||"",onChange:function(e){return function(e,l){var t=Object(o.a)(he);t[e][l.target.name]=l.target.value,Fe(t)}(l,e)}})),d.a.createElement(s.a,{className:"d-flex mt-2",lg:"3",md:"3",sm:"12"},d.a.createElement("div",null,l?d.a.createElement(_.a,{type:"button",className:"btn btn-danger",onClick:function(){return function(e){var l=Object(o.a)(he);l.splice(e,1),Fe(l)}(l)}},"-"):null),d.a.createElement("div",null,d.a.createElement(_.a,{className:"ml-1 ",color:"primary",type:"button",onClick:function(){Fe([].concat(Object(o.a)(he),[Ce]))}},"+")))))}))),d.a.createElement(_.a,{className:"ml-1 ",color:"primary",onClick:function(e){alert("Comment Submitt ")}},"Submit Comment")))))}},936:function(e,l,t){"use strict";var n=t(9),a=t(11),o=t(1),i=t.n(o),u=t(2),d=t.n(u),r=t(8),v=t.n(r),m=t(5),c=["className","cssModule","row","disabled","check","inline","tag"],s={children:d.a.node,row:d.a.bool,check:d.a.bool,inline:d.a.bool,disabled:d.a.bool,tag:m.tagPropType,className:d.a.string,cssModule:d.a.object},p=function(e){var l=e.className,t=e.cssModule,o=e.row,u=e.disabled,d=e.check,r=e.inline,s=e.tag,p=Object(a.a)(e,c),E=Object(m.mapToCssModules)(v()(l,!!o&&"row",d?"form-check":"form-group",!(!d||!r)&&"form-check-inline",!(!d||!u)&&"disabled"),t);return"fieldset"===s&&(p.disabled=u),i.a.createElement(s,Object(n.a)({},p,{className:E}))};p.propTypes=s,p.defaultProps={tag:"div"},l.a=p}}]);
//# sourceMappingURL=345.1dbd6976.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[193],{1252:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var a=[{title:"Dashboard",TabName:[{title:"Dashboard",permission:["View"]}]},{title:"Customers",TabName:[{title:"Create Customer",permission:["View","Create","Edit","Delete"]},{title:"Customer Registration",permission:["View","Create","Edit","Delete"]},{title:"Customer List",permission:["View","Create","Edit","Delete"]},{title:"Assign Role",permission:["View","Create","Edit","Delete"]},{title:"Role List",permission:["View","Create","Edit","Delete"]}]},{title:"System Managment",TabName:[{title:"Spare Part",permission:["View","Create","Edit","Delete"]},{title:"Orders",permission:["View","Create","Edit","Delete"]},{title:"Parts Catelog",permission:["View","Create","Edit","Delete"]},{title:"Scrutiny/inspections",permission:["View","Create","Edit","Delete"]},{title:"Invoice/Billing",permission:["View","Create","Edit","Delete"]},{title:"supports",permission:["View","Create","Edit","Delete"]},{title:"Service",permission:["View","Create","Edit","Delete"]}]},{title:"WAREHOUSE",TabName:[{title:"Create Warehouse",permission:["View","Create","Edit","Delete"]}]},{title:"Quotation",TabName:[{title:"Add Supplier",permission:["View","Create","Edit","Delete"]},{title:"Create Quote",permission:["View","Create","Edit","Delete"]},{title:"Edit Notes",permission:["View","Create","Edit","Delete"]},{title:"Debit Notes",permission:["View","Create","Edit","Delete"]}]},{title:"Product Managment",TabName:[{title:"Product Registration",permission:["View","Create","Edit","Delete"]},{title:"Product Search",permission:["View","Create","Edit","Delete"]},{title:"Attribute",permission:["View","Create","Edit","Delete"]}]},{title:"Parts",TabName:[{title:"Scheduler Time",permission:["View","Create","Edit","Delete"]},{title:"Parts List",permission:["View","Create","Edit","Delete"]},{title:"Parts Catalogue",permission:["View","Create","Edit","Delete"]},{title:"Product Type",permission:["View","Create","Edit","Delete"]},{title:"Model Type",permission:["View","Create","Edit","Delete"]},{title:"Variant",permission:["View","Create","Edit","Delete"]},{title:"Engine Type",permission:["View","Create","Edit","Delete"]},{title:"Valves",permission:["View","Create","Edit","Delete"]},{title:"Body Style",permission:["View","Create","Edit","Delete"]},{title:"Colors",permission:["View","Create","Edit","Delete"]},{title:"Product Name",permission:["View","Create","Edit","Delete"]}]},{title:"Order Management",TabName:[{title:"Place Order",permission:["View","Create","Edit","Delete"]},{title:"Order Pending",permission:["View","Create","Edit","Delete"]},{title:"Order Received List",permission:["View","Create","Edit","Delete"]},{title:"Completed Order List",permission:["View","Create","Edit","Delete"]},{title:"Rejected",permission:["View","Create","Edit","Delete"]},{title:"Return",permission:["View","Create","Edit","Delete"]},{title:"Canceled",permission:["View","Create","Edit","Delete"]},{title:"Payment Gateway",permission:["View","Create","Edit","Delete"]},{title:"Order Tracking",permission:["View","Create","Edit","Delete"]}]},{title:"BILLINGS",TabName:[{title:"Purchase invoices",permission:["View","Create","Edit","Delete"]},{title:"Merge invoices",permission:["View","Create","Edit","Delete"]},{title:"Add tax",permission:["View","Create","Edit","Delete"]},{title:"Courier/Shipping Charges",permission:["View","Create","Edit","Delete"]},{title:"Payment Status",permission:["View","Create","Edit","Delete"]},{title:"Payment completed",permission:["View","Create","Edit","Delete"]}]},{title:"Warranty Claims",TabName:[{title:"OEM Warranty",permission:["View","Create","Edit","Delete"]},{title:"Supplier Warranty",permission:["View","Create","Edit","Delete"]}]},{title:"Stock Management",TabName:[{title:"Stock Report",permission:["View","Create","Edit","Delete"]},{title:"Stock Transfer",permission:["View","Create","Edit","Delete"]}]},{title:"Ticketing",TabName:[{title:"Service Request",permission:["View","Create","Edit","Delete"]},{title:"Draft Service",permission:["View","Create","Edit","Delete"]},{title:"Pending Service",permission:["View","Create","Edit","Delete"]},{title:"Completed Service",permission:["View","Create","Edit","Delete"]},{title:"Transfer Service",permission:["View","Create","Edit","Delete"]},{title:"Cancelled Service",permission:["View","Create","Edit","Delete"]},{title:"Rejected Service",permission:["View","Create","Edit","Delete"]}]},{title:"Reports Management",TabName:[{title:"Admin Report",permission:["View","Create","Edit","Delete"]},{title:"Customer Report",permission:["View","Create","Edit","Delete"]},{title:"Staff Report",permission:["View","Create","Edit","Delete"]},{title:"Transaction Report",permission:["View","Create","Edit","Delete"]},{title:"Product Report",permission:["View","Create","Edit","Delete"]},{title:"Earning Report",permission:["View","Create","Edit","Delete"]}]},{title:"Promotion Management",TabName:[{title:"Promotion",permission:["View","Create","Edit","Delete"]},{title:"Discount&Coupon",permission:["View","Create","Edit","Delete"]}]},{title:"Media Status Management",TabName:[{title:"LivestreamStatus",permission:["View","Create","Edit","Delete"]},{title:"ChatStatus",permission:["View","Create","Edit","Delete"]}]}]},3231:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return N}));var a=i(1),r=i.n(a),l=i(941),n=i(45),s=i(890),o=i(891),c=i(898),m=i(173),d=i(892),u=i(893),p=i(894),E=i(909),v=i(888),C=i(889),f=i(895),w=i(1252),g=i(9),D=i(161),b=i.n(D),V=i(78);i(917),i(79),i(629);function y(e){var t,i=Object(a.useState)(""),D=Object(n.a)(i,2),y=D[0],N=D[1],h=Object(a.useState)(""),S=Object(n.a)(h,2),O=S[0],x=S[1],R=Object(a.useState)([]),j=Object(n.a)(R,2),k=j[0],T=j[1],P=Object(a.useState)(""),L=Object(n.a)(P,2),M=L[0],A=L[1],I=Object(a.useState)(!1),_=Object(n.a)(I,2),B=_[0],F=_[1],W=Object(a.useState)(!1),J=Object(n.a)(W,2),q=J[0],z=J[1],G=Object(a.useState)({}),H=Object(n.a)(G,2),Q=H[0],U=(H[1],Object(a.useState)({})),K=Object(n.a)(U,2),X=(K[0],K[1],function(){return z(!q)}),Y=function(e,t,i,a,r){if(t){k.map((function(e,t){if((null===e||void 0===e?void 0:e.pagename)===a){if(k[t].permission.includes(i));else k[t].permission.push(i)}else{var r=k.find((function(e,t){return e.pagename===a}));if(!1===((null===r||void 0===r?void 0:r.pagename)===a)){var l=k.concat({pagename:a,permission:[i]});T(l)}}}));if(k.length<1){var l=k.concat({pagename:a,permission:[i]});T(l)}}else null===k||void 0===k||k.map((function(e,t){var r=null===e||void 0===e?void 0:e.pagename;a===r&&(null===e||void 0===e||e.permission.splice(null===e||void 0===e?void 0:e.permission.indexOf(i),1)),0===(null===e||void 0===e?void 0:e.permission.length)&&k.splice(t,1)}))};Object(a.useEffect)((function(){console.log(k)}),[k]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{className:""},r.a.createElement(o.a,{xl:12},r.a.createElement(c.a,null,r.a.createElement(s.a,{className:"m-2"},r.a.createElement(o.a,null,r.a.createElement("h1",{className:"float-left"},"Create Role")),r.a.createElement(o.a,null,r.a.createElement("div",{className:"float-right"},r.a.createElement(V.b,{render:function(e){var t=e.history;return r.a.createElement(m.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",onClick:function(){return t.push("/app/Trupee/account/RoleList")}}," ","Back")}})))),r.a.createElement("div",{className:"container"}),r.a.createElement(d.a,{onSubmit:function(e){var t;e.preventDefault();var i=JSON.parse(localStorage.getItem("userData")),a=new FormData;a.append("user_id",null===i||void 0===i||null===(t=i.Userinfo)||void 0===t?void 0:t.id),a.set("role_name",O),a.set("description",y),a.set("selectedarray",JSON.stringify(k)),g.a.post("/addroles",a).then((function(e){console.log(e),b()("Success","Role Created"),T(""),N(""),x("");var t,i=document.getElementsByName("check"),a=Object(l.a)(i);try{for(a.s();!(t=a.n()).done;){t.value.checked=!1}}catch(r){a.e(r)}finally{a.f()}})).catch((function(e){console.log(e)}))}},r.a.createElement("div",{className:"container mt-5"},r.a.createElement(s.a,{className:"mb-3 container"},r.a.createElement(o.a,null,r.a.createElement(u.a,null,"Enter Role Name*"),r.a.createElement(p.a,{value:O,onChange:function(e){return x(e.target.value)},type:"text",placeholder:"Enter Role Name",className:"form-control inputs"})),r.a.createElement(o.a,null,r.a.createElement(u.a,null,"Enter Role Description * "),r.a.createElement(p.a,{required:!0,value:y,onChange:function(e){return N(e.target.value)},type:"text",placeholder:"Enter Role Desc.."})))),r.a.createElement("section",{className:"mt-5 container"},r.a.createElement(s.a,{className:"gy-0 container"},w.a&&(null===w.a||void 0===w.a?void 0:w.a.map((function(e,t){var i;return r.a.createElement(o.a,{key:t,style:{borderRadius:"12px",height:"".concat(B&&M===t?"400px":"40px")},className:"customcol gy-0 mb-2 ",lg:"12",md:"12",sm:"12"},r.a.createElement(s.a,{style:{lineHeight:"44px",borderRadius:"6px",background:"#f7f7f8"},className:"roleheading"},r.a.createElement(o.a,{className:"gy-2",lg:"4",sm:"4",md:"4"},r.a.createElement("div",{className:"align-item-center"},r.a.createElement("input",{className:"mt-1",name:"check",id:"head_".concat(null===e||void 0===e?void 0:e.title),onClick:function(i){!function(e,t){F(e),A(t)}(i.target.checked,t),Y(i.target.value,i.target.checked,"parentPermit",null===e||void 0===e?void 0:e.title)},style:{height:"19px",width:"26px"},type:"checkbox"}),r.a.createElement("span",{className:"mx-3 gy-0"},null===e||void 0===e?void 0:e.title))),r.a.createElement(o.a,{className:"gy-2"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("span",{className:"mx-3"}," View"))),r.a.createElement(o.a,{className:"gy-2"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("span",{className:"mx-3"}," Create"))),r.a.createElement(o.a,{className:"gy-2"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("span",{className:"mx-3"}," Edit"))),r.a.createElement(o.a,{className:"gy-2"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("span",{className:"mx-3"}," Delete")))),B&&M===t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"gy-2 mt-2"},null===e||void 0===e||null===(i=e.TabName)||void 0===i?void 0:i.map((function(e,t){var i;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{key:t,className:""},r.a.createElement(o.a,{lg:"4",sm:"4",md:"4"},r.a.createElement("h6",{className:"mt-1"}," ",null===e||void 0===e?void 0:e.title)),null===e||void 0===e||null===(i=e.permission)||void 0===i?void 0:i.map((function(t,i){return r.a.createElement(o.a,{key:i,lg:"2",md:"2",sm:"2"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("input",{name:"check",id:"item_".concat(t),onClick:function(i){Y(i.target.value,i.target.checked,t,e.title)},style:{height:"19px",width:"26px"},type:"checkbox"})))}))))}))))):null)})))),r.a.createElement(s.a,null,r.a.createElement(o.a,null,r.a.createElement("div",{className:"d-flex justify-content-center mb-2"},r.a.createElement(m.a,{type:"submit",style:{cursor:"pointer"},color:"primary"},"Submit"))))))))),r.a.createElement(E.a,Object.assign({fullscreen:"xl",size:"lg",backdrop:!1,isOpen:q,toggle:X},e),r.a.createElement(v.a,{toggle:X},"Role List"),r.a.createElement(C.a,null,r.a.createElement("div",{className:"modalheaderaddrol p-1"},r.a.createElement("h3",null,"Role List"),r.a.createElement(f.a,{className:"tableofrole",bordered:!0,borderless:!0,hover:!0,responsive:!0,size:"sm",striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"S.No."),r.a.createElement("th",null,"Role Name"))),r.a.createElement("tbody",null,Q&&(null===Q||void 0===Q||null===(t=Q.option)||void 0===t?void 0:t.map((function(e,t){return r.a.createElement("tr",{className:"tabletr",onClick:function(t){return function(e){var t;x(null===e||void 0===e||null===(t=e._attributes)||void 0===t?void 0:t.value),X()}(e)},style:{cursor:"pointer"},key:t},r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",null,null===e||void 0===e?void 0:e._text))})))))))))}function N(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement(y,null)))}},917:function(e,t,i){},941:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var a=i(126);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(a.a)(e))){var t=0,i=function(){};return{s:i,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l,n=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return n=e.done,e},e:function(e){s=!0,l=e},f:function(){try{n||null==r.return||r.return()}finally{if(s)throw l}}}}}}]);
//# sourceMappingURL=193.cc15c55b.chunk.js.map
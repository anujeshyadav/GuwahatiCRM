(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[181,219],{1039:function(e,a,t){},1057:function(e,a,t){"use strict";var n=t(16),l=t(17),c=t(18),r=t(19),o=t(1),m=t.n(o),s=t(901),i=t(902),u=t(903),d=t(905),b=t(893),v=t(894),E=t(1034),f=t.n(E),p=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={basic:new Date,timeLimit:new Date,preloaded:new Date},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.basic,n=a.timeLimit;return m.a.createElement(s.a,null,m.a.createElement(i.a,null,m.a.createElement(u.a,null,"Timepickers")),m.a.createElement(d.a,null,m.a.createElement(b.a,null,m.a.createElement(v.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Basic 24hrs"),m.a.createElement(f.a,{className:"form-control",value:t,options:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"},onChange:function(a){e.setState({basic:a})}})),m.a.createElement(v.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Limit"),m.a.createElement(f.a,{className:"form-control",value:n,options:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",minTime:"16:00",maxTime:"22:30"},onChange:function(a){e.setState({timeLimit:a})}})),m.a.createElement(v.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Preloaded"),m.a.createElement(f.a,{className:"form-control",options:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",defaultDate:"13:45"},onChange:function(a){e.setState({preloaded:a})}})))))}}]),t}(m.a.Component);a.a=p},1206:function(e,a,t){"use strict";t.r(a);var n=t(16),l=t(17),c=t(18),r=t(19),o=t(1),m=t.n(o),s=t(893),i=t(894),u=t(126),d=t(901),b=t(902),v=t(903),E=t(905),f=t(1034),p=t.n(f),g=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={basicPicker:new Date,dateTimePicker:new Date,humanFriendly:new Date,minMax:new Date,disabledRange:new Date,multipleDates:new Date,rangePicker:new Date,weekNum:new Date,inlinePicker:new Date},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.basicPicker,n=a.dateTimePicker,l=a.humanFriendly,c=a.minMax,r=a.disabledRange,o=a.multipleDates,u=a.rangePicker,f=a.weekNum,g=a.inlinePicker;return m.a.createElement(d.a,null,m.a.createElement(b.a,null,m.a.createElement(v.a,null,"Datepickers")),m.a.createElement(E.a,null,m.a.createElement(s.a,null,m.a.createElement(i.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Basic"),m.a.createElement(p.a,{className:"form-control",value:t,onChange:function(a){e.setState({basicPicker:a})}})),m.a.createElement(i.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Date & Time"),m.a.createElement(p.a,{options:{minDate:"today",altInput:!0,altFormat:"m-j-Y H:i:S"},className:"form-control","data-enable-time":!0,value:n,onChange:function(a){e.setState({dateTimePicker:a})}})),m.a.createElement(i.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Human Friendly"),m.a.createElement(p.a,{className:"form-control",value:l,options:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"},onChange:function(a){e.setState({humanFriendly:a})}})),m.a.createElement(i.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Min & Max Dates"),m.a.createElement(p.a,{className:"form-control",value:c,options:{minDate:"today",maxDate:(new Date).fp_incr(14)},onChange:function(a){e.setState({minMax:a})}})),m.a.createElement(i.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Disabled Range"),m.a.createElement(p.a,{className:"form-control",value:r,options:{dateFormat:"Y-m-d",disable:[{from:"2020-02-01",to:"2020-02-10"},{from:"2020-02-20",to:"2020-02-25"}]},onChange:function(a){e.setState({disabledRange:a})}})),m.a.createElement(i.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Multiple Dates"),m.a.createElement(p.a,{className:"form-control",value:o,options:{mode:"multiple"},onChange:function(a){e.setState({multipleDates:a})}})),m.a.createElement(i.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Range"),m.a.createElement(p.a,{value:u,className:"form-control",options:{mode:"range"}})),m.a.createElement(i.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Preloaded Range"),m.a.createElement(p.a,{className:"form-control",options:{mode:"range",defaultDate:["2020-02-01","2020-02-15"]},onChange:function(a){e.setState({preloadRange:a})}})),m.a.createElement(i.a,{className:"mb-md-0 mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Week Numbers"),m.a.createElement(p.a,{className:"form-control",value:f,options:{weekNumbers:!0},onChange:function(a){e.setState({weekNum:a})}})),m.a.createElement(i.a,{md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Inline"),m.a.createElement(p.a,{className:"form-control",value:g,options:{inline:!0},onChange:function(a){e.setState({inlinePicker:a})}})))))}}]),t}(m.a.Component),N=t(1057),h=(t(1209),t(1039),function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(u.a,{breadCrumbTitle:"Date & Time Picker",breadCrumbParent:"Form Elements",breadCrumbActive:"Date & Time Picker"}),m.a.createElement(s.a,null,m.a.createElement(i.a,{sm:"12"},m.a.createElement(g,null)),m.a.createElement(i.a,{sm:"12"},m.a.createElement(N.a,null))))}}]),t}(m.a.Component));a.default=h},3061:function(e,a,t){"use strict";t.r(a);t(55);var n=t(7),l=t(24),c=t(25),r=t(1),o=t.n(r),m=(t(225),t(901)),s=t(893),i=t(894),u=t(237),d=t(905),b=t(895),v=t(896),E=t(897),f=(t(162),t(226),t(1034),t(164)),p=t.n(f),g=(t(224),t(56)),N=(t(1057),t(1206),t(80)),h=[],j=[];a.default=function(e){var a=Object(r.useState)({}),t=Object(c.a)(a,2),f=(t[0],t[1],Object(r.useState)("")),y=Object(c.a)(f,2),O=(y[0],y[1]),S=Object(r.useState)(""),D=Object(c.a)(S,2),P=D[0],k=D[1],C=Object(r.useState)(""),x=Object(c.a)(C,2),w=x[0],T=x[1],q=Object(r.useState)(""),R=Object(c.a)(q,2),F=(R[0],R[1],Object(r.useState)("")),M=Object(c.a)(F,2),I=M[0],_=(M[1],Object(r.useState)([])),A=Object(c.a)(_,2),H=A[0],L=A[1],B=Object(r.useState)([]),J=Object(c.a)(B,2),Q=(J[0],J[1]),Y=Object(r.useState)(""),G=Object(c.a)(Y,2),V=G[0],W=G[1],z=Object(r.useState)(0),K=Object(c.a)(z,2),U=K[0],X=K[1],Z=Object(r.useState)({}),$=Object(c.a)(Z,2),ee=($[0],$[1]),ae=Object(r.useState)(!1),te=Object(c.a)(ae,2),ne=(te[0],te[1],Object(r.useState)("")),le=Object(c.a)(ne,2),ce=(le[0],le[1],Object(r.useState)(!1)),re=Object(c.a)(ce,2),oe=(re[0],re[1],Object(r.useState)([])),me=Object(c.a)(oe,2),se=me[0],ie=me[1],ue=Object(r.useState)([{product:"",productId:"",availableQty:"",qty:1,price:"",totalprice:"",Salespersonname:"",targetstartDate:"",targetEndDate:"",discount:"",Shipping:"",tax:"",grandTotal:""}]),de=Object(c.a)(ue,2),be=de[0],ve=de[1],Ee=function(e,a){O(a);var t=e.target,n=t.name,c=t.value,r=Object(l.a)(be);r[a][n]=c,console.log(h);var o=0;r.length>0&&(o=(null===r||void 0===r?void 0:r.map((function(e){return console.log(e.qty*e.price),h[a]=e.qty*e.price,r[a].totalprice=e.qty*e.price,e.qty*e.price}))).reduce((function(e,a){return e+a})),console.log("GrandTotal",o));ve(r),X(o)},fe=function(e,a,t){j.splice(t,1);var n=(null===be||void 0===be?void 0:be.map((function(e,n){var l,c;console.log((null===e||void 0===e?void 0:e.qty)*(null===(l=a[n])||void 0===l?void 0:l.Product_MRP));var r=(null===e||void 0===e?void 0:e.qty)*(null===(c=j[n])||void 0===c?void 0:c.Product_MRP);return h[t]=r,r}))).reduce((function(e,a){return e+a}));X(n)},pe=function(e,a,t){j.push(a),ve((function(e){var c=Object(l.a)(e),r=Object(n.a)({},c[t]);r.price=null===a||void 0===a?void 0:a.Product_MRP,r.productId=null===a||void 0===a?void 0:a._id,c[t]=r;var o=(null===e||void 0===e?void 0:e.map((function(e,n){var l,c;console.log((null===e||void 0===e?void 0:e.qty)*(null===(l=a[n])||void 0===l?void 0:l.Product_MRP));var r=(null===e||void 0===e?void 0:e.qty)*(null===(c=j[n])||void 0===c?void 0:c.Product_MRP);return h[t]=r,r}))).reduce((function(e,a){return e+a}));return X(o),c})),be.map((function(e){return console.log(e.totalprice)}))};Object(r.useEffect)((function(){console.log(be),console.log(h),console.log(V),console.log(P),console.log(w)}),[be,w]),Object(r.useEffect)((function(){Object(g.F)().then((function(e){console.log(null===e||void 0===e?void 0:e.SalesPerson),ie(null===e||void 0===e?void 0:e.SalesPerson)})).catch((function(e){return console.log(e)})),Object(g.Hb)().then((function(e){L(null===e||void 0===e?void 0:e.Product)})).catch((function(e){console.log(e)})),Object(g.t)().then((function(e){Q(e.Party)})).catch((function(e){console.log(e)}))}),[]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));console.log(e),ee(e)}),[]);var ge=function(){ve([].concat(Object(l.a)(be),[{product:"",productId:"",availableQty:"",qty:1,price:"",totalprice:"",Salespersonname:"",targetstartDate:"",targetEndDate:"",discount:"",Shipping:"",tax:"",grandTotal:""}]))},Ne=function(e){var a=Object(l.a)(be);a.splice(e,1),h.splice(e,1);var t=h.reduce((function(e,a){return e+a}));X(t),ve(a)};return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement(s.a,{className:"m-2"},o.a.createElement(i.a,{className:""},o.a.createElement("div",null,o.a.createElement("h1",{className:""},"Create Target"))),o.a.createElement(i.a,null,o.a.createElement("div",{className:"float-right"},o.a.createElement(N.b,{render:function(e){var a=e.history;return o.a.createElement(u.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",onClick:function(){return a.goBack()}}," ","Back")}})))),o.a.createElement(d.a,null,o.a.createElement(b.a,{className:"m-1",onSubmit:function(e){var a;e.preventDefault();var t=null===be||void 0===be?void 0:be.map((function(e,a){return console.log(e),{productId:null===e||void 0===e?void 0:e.productId,qtyAssign:null===e||void 0===e?void 0:e.qty,price:null===e||void 0===e?void 0:e.price,totalPrice:null===e||void 0===e?void 0:e.totalprice}})),n={startDate:P,endDate:w,grandTotal:U,salesPersonId:null===(a=V[0])||void 0===a?void 0:a._id,products:t};I?swal("Error occured while Entering Details"):Object(g.J)(n).then((function(e){swal("Target Created Successfully"),console.log(e)})).catch((function(e){console.log(e)}))}},o.a.createElement(s.a,null,o.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:""},o.a.createElement(v.a,null,"Choose Sales Person"),o.a.createElement(p.a,{required:!0,selectionLimit:1,isObject:"false",options:se,onSelect:function(e,a){W(e)},onRemove:function(e,a,t){console.log(e),console.log(t)},displayValue:"firstName"}))),o.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:""},o.a.createElement(v.a,null,"Start date"),o.a.createElement(E.a,{required:!0,type:"date",name:"targetEndDate",placeholder:"Date of Delivery",value:P,onChange:function(e){return k(e.target.value)}}))),o.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:""},o.a.createElement(v.a,null,"End Date"),o.a.createElement(E.a,{required:!0,type:"date",name:"targetstartDate",placeholder:"Date of Delivery",value:w,onChange:function(e){return T(e.target.value)}})))),be&&(null===be||void 0===be?void 0:be.map((function(e,a){return o.a.createElement(s.a,{className:"",key:a},o.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:""},o.a.createElement(v.a,null,"Product Name"),o.a.createElement(p.a,{required:!0,selectionLimit:1,isObject:"false",options:H,onSelect:function(e,t){return pe(0,t,a)},onRemove:function(e,t){fe(0,t,a)},displayValue:"Product_Title"}))),o.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:""},o.a.createElement(v.a,null,"Quantity Assign"),o.a.createElement(E.a,{type:"number",name:"qty",placeholder:"Req_Qty",value:null===e||void 0===e?void 0:e.qty,onChange:function(e){return Ee(e,a)}}))),o.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:""},o.a.createElement(v.a,null,"Price"),o.a.createElement(E.a,{type:"number",name:"price",readOnly:!0,placeholder:"Price",value:e.price}))),o.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:""},o.a.createElement(v.a,null,"Total Price"),o.a.createElement(E.a,{type:"number",name:"totalprice",readOnly:!0,placeholder:"TtlPrice",value:e.price*(null===e||void 0===e?void 0:e.qty)}))),o.a.createElement(i.a,{className:"d-flex mt-1 abb",lg:"3",md:"3",sm:"12"},o.a.createElement("div",{className:"btnStyle"},a?o.a.createElement(u.a,{type:"button",color:"danger",className:"button remove ",onClick:function(){return Ne(a)}},"- Remove"):null),o.a.createElement("div",{className:"btnStyle"},o.a.createElement(u.a,{className:"ml-1 mb-1",color:"primary",type:"button",onClick:function(){return ge()}},"+ Add"))))}))),o.a.createElement(s.a,null),o.a.createElement(s.a,null,o.a.createElement(i.a,{className:"mb-1",lg:"12",md:"12",sm:"12"},o.a.createElement("div",{className:" d-flex justify-content-end"},o.a.createElement(v.a,{className:"pr-5"},"Grand Total : ",o.a.createElement("stron",null,U))))),o.a.createElement(s.a,null,o.a.createElement(i.a,null,o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement(u.a.Ripple,{color:"primary",type:"submit",className:"mt-2"},"Submit")))))))))}}}]);
//# sourceMappingURL=181.0f5e1eb0.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[201],{1035:function(e,t,a){},1693:function(e,t,a){},3193:function(e,t,a){"use strict";a.r(t);var n=a(26),l=a(45),r=a(1),c=a.n(r),o=a(7),i=(a(1693),a(173)),u=function(e){var t=e.imageSrc,a=Object(r.useState)(1),n=Object(l.a)(a,2),u=n[0],m=n[1],s=Object(r.useState)({x:0,y:0}),d=Object(l.a)(s,2),v=d[0],E=d[1];Object(r.useEffect)((function(){var e=function(e){e.deltaY>0?e.shiftKey?m((function(e){return e>.1?e-.2:e})):m((function(e){return e>.2?e-.1:e})):e.deltaY<0&&(e.shiftKey?m((function(e){return e+.2})):m((function(e){return e+.1})))};return window.addEventListener("wheel",e),function(){window.removeEventListener("wheel",e)}}),[]);var f=function(e){"up"===e?E((function(e){return Object(o.a)(Object(o.a)({},e),{},{y:e.y-15})})):"down"===e?E((function(e){return Object(o.a)(Object(o.a)({},e),{},{y:e.y+15})})):"left"===e?E((function(e){return Object(o.a)(Object(o.a)({},e),{},{x:e.x-15})})):"right"===e&&E((function(e){return Object(o.a)(Object(o.a)({},e),{},{x:e.x+15})}))};return c.a.createElement("div",{className:"image-zoom-container"},c.a.createElement("div",{className:"zoom-controls"},c.a.createElement(i.a,{size:"sm",onClick:function(){m((function(e){return e+.1}))},color:"primary",outline:!0},c.a.createElement("strong",null,"+")),c.a.createElement(i.a,{size:"sm",onClick:function(){m((function(e){return e>.2?e-.1:e}))},color:"primary",outline:!0},c.a.createElement("strong",null,"-")),c.a.createElement(i.a,{size:"sm",onClick:function(){return f("up")},color:"primary",outline:!0},c.a.createElement("strong",null,"\u2191")),c.a.createElement(i.a,{size:"sm",onClick:function(){return f("down")},color:"primary",outline:!0},c.a.createElement("strong",null,"\u2193")),c.a.createElement(i.a,{size:"sm",onClick:function(){return f("left")},color:"primary",outline:!0},c.a.createElement("strong",null,"\u2190")),c.a.createElement(i.a,{size:"sm",onClick:function(){return f("right")},color:"primary",outline:!0},c.a.createElement("strong",null,"\u2192")),c.a.createElement(i.a,{size:"sm",onClick:function(){m(1),E({x:5,y:0})},color:"primary",outline:!0},c.a.createElement("strong",null,"Reset"))),c.a.createElement("div",{className:"image-zoom"},c.a.createElement("img",{src:t,alt:"Image",style:{transform:"scale(".concat(u,") translate(").concat(v.x,"px, ").concat(v.y,"px)"),width:"100%"},onClick:function(e){var t=e.target.getBoundingClientRect(),a=e.clientX-t.left,n=e.clientY-t.top,l=(a-t.width/2)*(u-1),r=(n-t.height/2)*(u-1);m(2),E((function(e){return{x:e.x-l,y:e.y-r}}))}})))},m=a(890),s=a(891),d=a(652),v=a(119),E=a(898),f=a(899),g=a(900),p=a(895),b=a(897),y=a(908),h=a(881),O=a(163),j=a(79),x=a(61),N=(a(1035),a(90)),C=a(152),w=a(161),k=a.n(w);a(923);t.default=function(){var e,t,a,o=Object(r.useState)(""),w=Object(l.a)(o,2),S=w[0],_=w[1],z=Object(r.useState)([]),P=Object(l.a)(z,2),F=P[0],I=P[1],D=Object(r.useState)({}),q=Object(l.a)(D,2),J=q[0],Q=q[1],K=Object(r.useState)([]),Y=Object(l.a)(K,2),A=Y[0],H=Y[1],L=Object(r.useState)([]),R=Object(l.a)(L,2),U=(R[0],R[1]),B=Object(r.useState)(!1),W=Object(l.a)(B,2),X=W[0],$=W[1],G=Object(r.useState)([]),M=Object(l.a)(G,2),T=(M[0],M[1]),V=Object(r.useState)(0),Z=Object(l.a)(V,2),ee=(Z[0],Z[1]),te=Object(r.useState)(!1),ae=Object(l.a)(te,2),ne=(ae[0],ae[1]),le=Object(r.useState)([]),re=Object(l.a)(le,2),ce=(re[0],re[1]),oe=Object(r.useState)(null===A||void 0===A?void 0:A.map((function(e){return{quantity:0,elementData:e}}))),ie=Object(l.a)(oe,2),ue=ie[0],me=ie[1],se=Object(r.useContext)(N.a);return Object(r.useEffect)((function(){Object(j.ib)().then((function(e){console.log(null===e||void 0===e?void 0:e.Parts_Catalogue),Q(null===e||void 0===e?void 0:e.Parts_Catalogue);var t=Object.keys(null===e||void 0===e?void 0:e.Parts_Catalogue);_(0),H(null===e||void 0===e?void 0:e.Parts_Catalogue[t[0]]),U(null===e||void 0===e?void 0:e.Parts_Catalogue[t[0]]),I(t)})).catch((function(e){console.log(e)}))}),[]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));Object(j.c)(null===e||void 0===e?void 0:e._id).then((function(e){console.log(null===e||void 0===e?void 0:e.cart),T(null===e||void 0===e?void 0:e.cart);var t=null===A||void 0===A?void 0:A.map((function(t){var a,n=null===e||void 0===e||null===(a=e.cart)||void 0===a?void 0:a.find((function(e){var a;return(null===e||void 0===e||null===(a=e.product)||void 0===a?void 0:a._id)===t._id}));return n?null===n||void 0===n?void 0:n.quantity:0}));console.log(t),me(t)})).catch((function(e){var t;if(console.log(e.response),null===e||void 0===e||null===(t=e.response.data)||void 0===t?void 0:t.message){var a=new Array(null===A||void 0===A?void 0:A.length).fill(0);me(a)}}))}),[A]),c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,null),c.a.createElement(m.a,null,c.a.createElement(s.a,null,c.a.createElement(d.a,null,c.a.createElement(v.a,null,c.a.createElement("a",null,"Home")),c.a.createElement(v.a,null,c.a.createElement("a",null,F[S]))))),c.a.createElement(m.a,null,!X&&c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{className:"mb-2",lg:"3",md:"3",sm:"3",xs:"12"},c.a.createElement("div",{className:"collapse-bordered collapse-border mb-3"},null===F||void 0===F?void 0:F.map((function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{style:{backgroundColor:"".concat(S===t?"#055761":""),color:"".concat(S===t?"white":"")},className:"collapse-border-item",key:t,onClick:function(){return function(e,t){e&&$(!0),H(J[e]),U(J[e]),_(t)}(e,t)}},c.a.createElement(f.a,{className:"cardheadercustme"},c.a.createElement(g.a,{className:"lead collapse-title "},c.a.createElement("div",{className:""},c.a.createElement(m.a,null,c.a.createElement(s.a,null,c.a.createElement("div",{className:"arrowdowandup"},c.a.createElement("div",{className:"d-flex"},c.a.createElement("span",{style:{backgroundColor:"".concat(S===t?"#055761":""),color:"".concat(S===t?"white":"")}},e.substring(0,15)),S===t?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"ml-2"},c.a.createElement(O.a,{className:"aiarrow "}))):c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"ml-2"},c.a.createElement(O.e,{className:"aiarrow"}))))))))))))}))))),c.a.createElement(s.a,{lg:X?"8":"5",md:X?"8":"5",sm:X?"8":"5",xs:"12"},c.a.createElement("div",{className:"d-flex justify-content-start"},X?c.a.createElement(x.f,{style:{cursor:"pointer"},onClick:function(){return $(!1)},size:"25px",fill:"#055761",className:""}):""),A&&A?c.a.createElement(c.a.Fragment,null,c.a.createElement(u,{imageSrc:null===(e=A[0])||void 0===e?void 0:e.Part_Image})):c.a.createElement(c.a.Fragment,null,c.a.createElement(u,{imageSrc:"https://res.cloudinary.com/dc7hzwpbm/image/upload/v1683461876/software_development.jpg"}))),c.a.createElement(s.a,{lg:"4",md:"4",sm:"4",xs:"12"},c.a.createElement("div",{style:{height:window.innerHeight-150},className:"tableheadingmy"},c.a.createElement(p.a,{bordered:!0,hover:!0,striped:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,"Part Name"),c.a.createElement("th",null,"Part Price(",void 0!==(null===se||void 0===se||null===(t=se.UserInformatio)||void 0===t?void 0:t.currency)?c.a.createElement(c.a.Fragment,null,null===se||void 0===se||null===(a=se.UserInformatio)||void 0===a?void 0:a.currency.split("_")[1]):c.a.createElement(c.a.Fragment,null,"$"),")"),c.a.createElement("th",null,"Part Number"),c.a.createElement("th",null,"Qty"),c.a.createElement("th",null,"Add to Cart "),c.a.createElement("th",null,"Part Quantity"))),c.a.createElement("tbody",null,A&&(null===A||void 0===A?void 0:A.map((function(e,t){return c.a.createElement("tr",{key:e._id},c.a.createElement("th",{scope:"row"},t+1),c.a.createElement("td",null,e.Part_Name),c.a.createElement("td",null,((null===se||void 0===se?void 0:se.Currencyconvert)*e.Part_Price).toFixed(2)),c.a.createElement("td",null,e.Part_Number),c.a.createElement("td",null,c.a.createElement("span",{className:"d-flex"},c.a.createElement(i.a,{style:{padding:"7px 8px"},className:"minusbutton",color:"primary",size:"sm",onClick:function(){return e=t,void me((function(t){var a=Object(n.a)(t);return a[e]>0&&(a[e]-=1),a}));var e}},"-"),c.a.createElement("div",{className:"inputheading"},c.a.createElement("input",{style:{width:"40px"},type:"number",name:"cart",min:"0",value:ue[t],onChange:function(e){handleQuantityChange(t,e.target.value)},onKeyDown:function(e){["e","E","+","-"].includes(e.key)&&e.preventDefault()},maxlength:"4",size:"2"}))," ",c.a.createElement(i.a,{onClick:function(){return e=t,void me((function(t){var a=Object(n.a)(t);return a[e]+=1,a}));var e},style:{padding:"7px 8px"},color:"primary",size:"sm"},c.a.createElement("strong",null,"+")))),c.a.createElement("td",null,c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{width:"71px"},className:"addtocart d-flex"},ue[t]>0?c.a.createElement(c.a.Fragment,null,c.a.createElement(C.b,{title:" click here to add Cart",onClick:function(){return function(e,t){var a=JSON.parse(localStorage.getItem("userData"));ne(!0),ue[e]>0&&(ce((function(l){var r=Object(n.a)(l);ee((function(t){return t+ue[e]}));var c=r.findIndex((function(t){var a;return(null===t||void 0===t||null===(a=t.product)||void 0===a?void 0:a._id)===A[e]._id})),o={userId:null===a||void 0===a?void 0:a.accountId,productId:null===t||void 0===t?void 0:t._id,quantity:ue[e]};return console.log(o),Object(j.a)(o).then((function(e){console.log(e.data),ne(!1);var t=JSON.parse(localStorage.getItem("userData"));Object(j.c)(null===t||void 0===t?void 0:t._id).then((function(e){null===se||void 0===se||se.setPartsCatalougueCart(null===e||void 0===e?void 0:e.cart)})).catch((function(e){console.log(e.response)}))})).catch((function(e){var t,a,n,l;(console.log(e.response),null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message)&&k()("Warning","".concat(null===(n=e.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.message))})),-1!==c?r[c].quantity+=ue[e]:r.push({product:A[e],quantity:ue[e]}),r})),me((function(e){return Object(n.a)(e)})))}(t,e)},style:{cursor:"pointer"},color:"green",size:40})):null,c.a.createElement(b.a,{className:"dropdown-notification nav-item"},c.a.createElement(y.a,{tag:"a",className:"nav-link nav-link-label"},c.a.createElement(x.a,{color:"#055761",size:25}),c.a.createElement(h.a,{style:{position:"absolute",top:"-1px",right:"-2px"},pill:!0,color:"primary",className:"badge-up cartbadgecatalougue"},ue[t])))))),c.a.createElement("td",null,e.Part_Qty))})))))))),c.a.createElement(m.a,null))}}}]);
//# sourceMappingURL=201.ad771889.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[189],{1056:function(e,t,a){"use strict";var n=a(16),o=a(17),l=a(18),r=a(19),i=a(1),s=a.n(i),c=a(901),m=a(902),u=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement(c.a,{className:"mb-2"},s.a.createElement(m.a,{sm:"12",className:"ml-50"},s.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?s.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):s.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),a}(s.a.Component);t.a=u},2792:function(e,t,a){(function(a){var n,o,l;o=[],void 0===(l="function"===typeof(n=function(){"use strict";function t(e,t,a){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){i(n.response,t,a)},n.onerror=function(){console.error("could not download file")},n.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,r=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),i=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(e,a,r){var i=l.URL||l.webkitURL,s=document.createElement("a");a=a||e.name||"download",s.download=a,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?o(s):n(s.href)?t(e,a,r):o(s,s.target="_blank")):(s.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(s.href)}),4e4),setTimeout((function(){o(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,l){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,l),a);else if(n(e))t(e,a,l);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout((function(){o(r)}))}}:function(e,a,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return t(e,a,n);var i="application/octet-stream"===e.type,s=/constructor/i.test(l.HTMLElement)||l.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&s||r)&&"undefined"!=typeof FileReader){var m=new FileReader;m.onloadend=function(){var e=m.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},m.readAsDataURL(e)}else{var u=l.URL||l.webkitURL,d=u.createObjectURL(e);o?o.location=d:location.href=d,o=null,setTimeout((function(){u.revokeObjectURL(d)}),4e4)}});l.saveAs=i.saveAs=i,e.exports=i})?n.apply(t,o):n)||(e.exports=l)}).call(this,a(39))},3206:function(e,t,a){"use strict";a.r(t);var n=a(16),o=a(17),l=a(18),r=a(19),i=a(1),s=a.n(i),c=a(32),m=a.n(c),u=a(1056),d=a(901),f=a(902),p=a(909),h=a(913),b=a(243),w=a(905),g=a(906),v=a(920),E=a(899),y=a(900),x=a(936),k=a(891),C=a(907),L=a(466),S=a(937),N=a.n(S),j=a(2792),M=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={data:[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",website:"hildegard.org"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",website:"anastasia.net"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",website:"ramiro.info"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",website:"kale.biz"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",website:"demarco.info"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",website:"ola.org"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",website:"elvis.io"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",website:"jacynthe.com"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",website:"conrad.com"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",website:"ambrose.net"}],filteredData:[],value:"",modal:!1,fileName:"",fileFormat:"xlsx"},e.toggleModal=function(){e.setState({modal:!e.state.modal})},e.handleFilter=function(t){var a=e.state.data,n=[],o=t.target.value;e.setState({value:o}),o.length&&(n=a.filter((function(e){var t=e.name.toLowerCase().startsWith(o.toLowerCase())||e.email.toLowerCase().startsWith(o.toLowerCase())||e.website.toLowerCase().startsWith(o.toLowerCase())||e.id.toString().toLowerCase().startsWith(o.toLowerCase()),a=e.name.toLowerCase().includes(o.toLowerCase())||e.email.toLowerCase().includes(o.toLowerCase())||e.website.toLowerCase().includes(o.toLowerCase())||e.id.toString().toLowerCase().includes(o.toLowerCase());return t||(!t&&a?a:null)})),e.setState({value:o,filteredData:n}))},e.handleExport=function(){e.toggleModal();var t=m.a.findDOMNode(e.tableRef),a=e.state.fileFormat.length?e.state.fileFormat:"xlsx",n=N.a.utils.table_to_book(t,{sheet:"Sheet JS"}),o=N.a.write(n,{bookType:a,bookSST:!0,type:"binary"}),l=e.state.fileFormat.length&&e.state.fileFormat.length?"".concat(e.state.fileName,".").concat(e.state.fileFormat):e.state.fileName.length?"".concat(e.state.fileName,".xlsx"):e.state.fileFormat.length?"excel-sheet.".concat(e.state.fileFormat):"excel-sheet.xlsx";return j.saveAs(new Blob([function(e){for(var t=new ArrayBuffer(e.length),a=new Uint8Array(t),n=0;n<e.length;n++)a[n]=255&e.charCodeAt(n);return t}(o)],{type:"application/octet-stream"}),l)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=(this.state.value?this.state.filteredData:this.state.data).map((function(e){return s.a.createElement("tr",{key:e.id},s.a.createElement("td",null,e.email),s.a.createElement("td",null,e.name),s.a.createElement("td",null,e.website),s.a.createElement("td",null,e.id))}));return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{title:"XLSX",subTitle:"Xlsx is a parser and writer for various spreadsheet formats",link:"https://github.com/AdeleD/react-paginate"}),s.a.createElement(d.a,{className:"export-component"},s.a.createElement(f.a,{sm:"12"},s.a.createElement(p.a,null,s.a.createElement(h.a,null,s.a.createElement(d.a,null,s.a.createElement(f.a,{sm:"12"},s.a.createElement("div",{className:"d-flex justify-content-between flex-wrap"},s.a.createElement(b.a.Ripple,{color:"primary",onClick:this.toggleModal},"Export"),s.a.createElement("div",{className:"filter position-relative has-icon-left"},s.a.createElement(w.a,{type:"text",value:this.state.value,onChange:function(t){return e.handleFilter(t)}}),s.a.createElement("div",{className:"form-control-position"},s.a.createElement(L.a,{size:15}))))),s.a.createElement(f.a,{sm:"12"},s.a.createElement(g.a,{innerRef:function(t){return e.tableRef=t},className:"table-hover-animation mt-2",responsive:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Email"),s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Website"),s.a.createElement("th",null,"Rank"))),s.a.createElement("tbody",null,t)))))))),s.a.createElement(v.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:"modal-dialog-centered"},s.a.createElement(E.a,{toggle:this.toggleModal},"Export To Excel"),s.a.createElement(y.a,null,s.a.createElement(x.a,null,s.a.createElement(w.a,{type:"text",value:this.state.fileName,onChange:function(t){return e.setState({fileName:t.target.value})},placeholder:"Enter File Name"})),s.a.createElement(x.a,null,s.a.createElement(k.a,{type:"select",id:"selectFileFormat",name:"customSelect",value:this.state.fileFormat,onChange:function(t){return e.setState({fileFormat:t.target.value})}},s.a.createElement("option",null,"xlsx"),s.a.createElement("option",null,"csv"),s.a.createElement("option",null,"txt")))),s.a.createElement(C.a,null,s.a.createElement(b.a,{color:"primary",onClick:this.handleExport},"Export"),s.a.createElement(b.a,{color:"flat-danger",onClick:this.toggleModal},"Cancel"))))}}]),a}(s.a.Component);t.default=M},932:function(e,t){},936:function(e,t,a){"use strict";var n=a(9),o=a(11),l=a(1),r=a.n(l),i=a(2),s=a.n(i),c=a(8),m=a.n(c),u=a(5),d=["className","cssModule","row","disabled","check","inline","tag"],f={children:s.a.node,row:s.a.bool,check:s.a.bool,inline:s.a.bool,disabled:s.a.bool,tag:u.tagPropType,className:s.a.string,cssModule:s.a.object},p=function(e){var t=e.className,a=e.cssModule,l=e.row,i=e.disabled,s=e.check,c=e.inline,f=e.tag,p=Object(o.a)(e,d),h=Object(u.mapToCssModules)(m()(t,!!l&&"row",s?"form-check":"form-group",!(!s||!c)&&"form-check-inline",!(!s||!i)&&"disabled"),a);return"fieldset"===f&&(p.disabled=i),r.a.createElement(f,Object(n.a)({},p,{className:h}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},942:function(e,t){},943:function(e,t){}}]);
//# sourceMappingURL=189.53727b28.chunk.js.map
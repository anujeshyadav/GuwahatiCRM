(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[347],{1179:function(t,e,n){t.exports=function(){"use strict";function t(t,e){if(t)for(var n in t)({}).hasOwnProperty.call(t,n)&&e(n,t[n])}var e={unstyled:"p","header-one":"h1","header-two":"h2","header-three":"h3","header-four":"h4","header-five":"h5","header-six":"h6","unordered-list-item":"ul","ordered-list-item":"ol",blockquote:"blockquote",code:"pre"};function n(t){return t&&e[t]}function a(e){var n="";return t(e,(function(t,e){e&&(n+="".concat(t,":").concat(e,";"))})),n}function r(t,e){var n={};return t.COLOR[e]&&(n.COLOR=t.COLOR[e]),t.BGCOLOR[e]&&(n.BGCOLOR=t.BGCOLOR[e]),t.FONTSIZE[e]&&(n.FONTSIZE=t.FONTSIZE[e]),t.FONTFAMILY[e]&&(n.FONTFAMILY=t.FONTFAMILY[e]),t.UNDERLINE[e]&&(n.UNDERLINE=!0),t.ITALIC[e]&&(n.ITALIC=!0),t.BOLD[e]&&(n.BOLD=!0),t.STRIKETHROUGH[e]&&(n.STRIKETHROUGH=!0),t.CODE[e]&&(n.CODE=!0),t.SUBSCRIPT[e]&&(n.SUBSCRIPT=!0),t.SUPERSCRIPT[e]&&(n.SUPERSCRIPT=!0),n}function o(t,e,n){var a=!0;return n>0&&n<t.length?e.forEach((function(e){a=a&&t[e][n]===t[e][n-1]})):a=!1,a}function c(t,e,n,a){var r=t[e];if("function"===typeof a){var o=a(r,n);if(o)return o}if("MENTION"===r.type)return'<a href="'.concat(r.data.url,'" class="wysiwyg-mention" data-mention data-value="').concat(r.data.value,'">').concat(n,"</a>");if("LINK"===r.type){var c=r.data.targetOption||"_self";return'<a href="'.concat(r.data.url,'" target="').concat(c,'">').concat(n,"</a>")}if("IMAGE"===r.type){var s=r.data.alignment;return s&&s.length?'<div style="text-align:'.concat(s,';"><img src="').concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/></div>'):'<img src="'.concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/>')}return"EMBEDDED_LINK"===r.type?'<iframe width="'.concat(r.data.width,'" height="').concat(r.data.height,'" src="').concat(r.data.src,'" frameBorder="0"></iframe>'):n}function s(t,e,n,a){var c=[],s=Array.from(t.text);if(s.length>0)for(var i,l=function(t){var e=t.text,n=t.inlineStyleRanges,a={BOLD:new Array(e.length),ITALIC:new Array(e.length),UNDERLINE:new Array(e.length),STRIKETHROUGH:new Array(e.length),CODE:new Array(e.length),SUPERSCRIPT:new Array(e.length),SUBSCRIPT:new Array(e.length),COLOR:new Array(e.length),BGCOLOR:new Array(e.length),FONTSIZE:new Array(e.length),FONTFAMILY:new Array(e.length),length:e.length};return n&&n.length>0&&n.forEach((function(t){for(var e=t.offset,n=e+t.length,r=e;r<n;r+=1)0===t.style.indexOf("color-")?a.COLOR[r]=t.style.substring(6):0===t.style.indexOf("bgcolor-")?a.BGCOLOR[r]=t.style.substring(8):0===t.style.indexOf("fontsize-")?a.FONTSIZE[r]=t.style.substring(9):0===t.style.indexOf("fontfamily-")?a.FONTFAMILY[r]=t.style.substring(11):a[t.style]&&(a[t.style][r]=!0)})),a}(t),u=n;u<a;u+=1)u!==n&&o(l,e,u)?(i.text.push(s[u]),i.end=u+1):(i={styles:r(l,u),text:[s[u]],start:u,end:u+1},c.push(i));return c}function i(e,n){var a=s(e,["BOLD","ITALIC","UNDERLINE","STRIKETHROUGH","CODE","SUPERSCRIPT","SUBSCRIPT"],n.start,n.end),r="";return a.forEach((function(e){r+=function(e){var n=e.styles,a=function(t){return t&&t.length>0?t.map((function(t){switch(t){case"\n":return"<br>";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return t}})).join(""):""}(e.text);return t(n,(function(t,e){a=function(t,e){return"BOLD"===t?"<strong>".concat(e,"</strong>"):"ITALIC"===t?"<em>".concat(e,"</em>"):"UNDERLINE"===t?"<ins>".concat(e,"</ins>"):"STRIKETHROUGH"===t?"<del>".concat(e,"</del>"):"CODE"===t?"<code>".concat(e,"</code>"):"SUPERSCRIPT"===t?"<sup>".concat(e,"</sup>"):"SUBSCRIPT"===t?"<sub>".concat(e,"</sub>"):e}(t,a)})),a}(e)})),r=function(t,e){if(t&&(t.COLOR||t.BGCOLOR||t.FONTSIZE||t.FONTFAMILY)){var n='style="';return t.COLOR&&(n+="color: ".concat(t.COLOR,";")),t.BGCOLOR&&(n+="background-color: ".concat(t.BGCOLOR,";")),t.FONTSIZE&&(n+="font-size: ".concat(t.FONTSIZE).concat(/^\d+$/.test(t.FONTSIZE)?"px":"",";")),t.FONTFAMILY&&(n+="font-family: ".concat(t.FONTFAMILY,";")),"<span ".concat(n+='"',">").concat(e,"</span>")}return e}(n.styles,r)}function l(t,e,n,a){var r=[],o=function(t,e){var n=[],a=0,r=t.entityRanges.map((function(t){return{offset:t.offset,length:t.length,key:t.key,type:"ENTITY"}}));return(r=(r=r.concat(function(t,e){var n=[];if(e)for(var a=0,r=0,o=t,c=e.trigger||"#",s=e.separator||" ";o.length>0&&r>=0;)if(o[0]===c?(r=0,a=0,o=o.substr(c.length)):(r=o.indexOf(s+c))>=0&&(o=o.substr(r+(s+c).length),a+=r+s.length),r>=0){var i=o.indexOf(s)>=0?o.indexOf(s):o.length,l=o.substr(0,i);l&&l.length>0&&n.push({offset:a,length:l.length+c.length,type:"HASHTAG"}),a+=c.length}return n}(t.text,e))).sort((function(t,e){return t.offset-e.offset}))).forEach((function(t){t.offset>a&&n.push({start:a,end:t.offset}),n.push({start:t.offset,end:t.offset+t.length,entityKey:t.key,type:t.type}),a=t.offset+t.length})),a<t.text.length&&n.push({start:a,end:t.text.length}),n}(t,n);return o.forEach((function(n,l){var u=function(t,e,n,a){var r=[];s(t,["COLOR","BGCOLOR","FONTSIZE","FONTFAMILY"],n.start,n.end).forEach((function(e){r.push(i(t,e))}));var o=r.join("");return"ENTITY"===n.type?void 0!==n.entityKey&&null!==n.entityKey&&(o=c(e,n.entityKey,o,a)):"HASHTAG"===n.type&&(o='<a href="'.concat(o,'" class="wysiwyg-hashtag">').concat(o,"</a>")),o}(t,e,n,a);0===l&&(u=function(t){if(t){for(var e=t,n=0;n<e.length&&" "===t[n];n+=1)e=e.replace(" ","&nbsp;");return e}return t}(u)),l===o.length-1&&(u=function(t){if(t){for(var e=t,n=e.length-1;n>=0&&" "===e[n];n-=1)e="".concat(e.substring(0,n),"&nbsp;").concat(e.substring(n+1));return e}return t}(u)),r.push(u)})),r.join("")}function u(t,e,r,o,c){var s,i=[],h=[];return t.forEach((function(t){var f=!1;if(s?s.type!==t.type?(i.push("</".concat(n(s.type),">\n")),i.push("<".concat(n(t.type),">\n"))):s.depth===t.depth?h&&h.length>0&&(i.push(u(h,e,r,o,c)),h=[]):(f=!0,h.push(t)):i.push("<".concat(n(t.type),">\n")),!f){i.push("<li");var d=a(t.data);d&&i.push(' style="'.concat(d,'"')),o&&i.push(' dir = "auto"'),i.push(">"),i.push(l(t,e,r,c)),i.push("</li>\n"),s=t}})),h&&h.length>0&&i.push(u(h,e,r,o,c)),i.push("</".concat(n(s.type),">\n")),i.join("")}return function(t,e,r,o){var s=[];if(t){var i=t.blocks,h=t.entityMap;if(i&&i.length>0){var f=[];if(i.forEach((function(t){if("unordered-list-item"===(p=t.type)||"ordered-list-item"===p)f.push(t);else{if(f.length>0){var i=u(f,h,e,o);s.push(i),f=[]}var d=function(t,e,r,o,s){var i=[];if(function(t){return t.entityRanges.length>0&&(void 0===(e=t.text)||null===e||0===e.length||0===e.trim().length||"atomic"===t.type);var e}(t))i.push(c(e,t.entityRanges[0].key,void 0,s));else{var u=n(t.type);if(u){i.push("<".concat(u));var h=a(t.data);h&&i.push(' style="'.concat(h,'"')),o&&i.push(' dir = "auto"'),i.push(">"),i.push(l(t,e,r,s)),i.push("</".concat(u,">"))}}return i.push("\n"),i.join("")}(t,h,e,r,o);s.push(d)}var p})),f.length>0){var d=u(f,h,e,r,o);s.push(d),f=[]}}}return s.join("")}}()},3171:function(t,e,n){"use strict";n.r(e),n.d(e,"AddNotification",(function(){return T}));var a=n(59),r=n(16),o=n(17),c=n(18),s=n(19),i=n(1),l=n.n(i),u=n(909),h=n(901),f=n(902),d=n(243),p=n(913),g=n(903),O=n(904),y=n(26),m=n(6),E=n(1184),v=n(1185),I=(n(1162),n(1179)),R=n.n(I),T=function(t){Object(c.a)(n,t);var e=Object(s.a)(n);function n(t){var o;return Object(r.a)(this,n),(o=e.call(this,t)).onEditorStateChange=function(t){o.setState({editorState:t,desc:R()(Object(E.convertToRaw)(t.getCurrentContent()))})},o.onChangeHandler=function(t){o.setState({selectedFile:t.target.files[0]}),o.setState({selectedName:t.target.files[0].name}),console.log(t.target.files[0])},o.changeHandler1=function(t){o.setState({status:t.target.value})},o.changeHandler=function(t){o.setState(Object(a.a)({},t.target.name,t.target.value))},o.submitHandler=function(t){t.preventDefault();var e=new FormData;e.append("name",o.state.name),e.append("sortorder",o.state.sortorder),e.append("desc",o.state.desc),e.append("status",o.state.status),null!==o.state.selectedFile&&e.append("brand_img",o.state.selectedFile,o.state.selectedName),m.a.post("/addbrand",e).then((function(t){console.log(t),o.props.history.push("/app/freshlist/notif/Notification")})).catch((function(t){console.log(t)}))},o.state={desc:"",editorState:E.EditorState.createEmpty()},o}return Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(h.a,{className:"m-2"},l.a.createElement(f.a,null,l.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Notification")),l.a.createElement(f.a,null,l.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return y.a.push("/app/freshlist/notif/Notification")}},"Back"))),l.a.createElement(p.a,null,l.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},l.a.createElement(h.a,{className:"mb-2"},l.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(O.a,null,"Descripition"),l.a.createElement(v.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange}),l.a.createElement("br",null),l.a.createElement(d.a,{color:"primary"},"Add New T&C")))))))}}]),n}(i.Component);e.default=T}}]);
//# sourceMappingURL=347.773d11d6.chunk.js.map
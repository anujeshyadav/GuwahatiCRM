(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[259],{1152:function(e,a,t){"use strict";var n=t(16),l=t(17),r=t(18),c=t(19),s=t(1),o=t.n(s),m=t(242),i=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).closeChip=function(e){e.target.closest(".chip").remove()},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"chip ".concat(this.props.className," ").concat(this.props.color?"chip-".concat(this.props.color):null)},o.a.createElement("div",{className:"chip-body"},!this.props.avatarImg&&this.props.avatarText||!this.props.avatarImg&&this.props.avatarIcon?o.a.createElement("div",{className:"avatar ".concat(this.props.avatarColor?"bg-".concat(this.props.avatarColor):null)},o.a.createElement("div",{className:"avatar-content"},this.props.avatarText?this.props.avatarText:null,this.props.avatarIcon?this.props.avatarIcon:null)):this.props.avatarImg?o.a.createElement("div",{className:"avatar"},o.a.createElement("img",{src:this.props.avatarImg,alt:"chipImg",height:"20",width:"20"})):null,o.a.createElement("div",{className:"chip-text"},this.props.text),this.props.closable?o.a.createElement("div",{className:"chip-closable",onClick:function(a){return e.closeChip(a)}},this.props.closableIcon?this.props.closableIcon:o.a.createElement(m.a,null)):null))}}]),t}(o.a.Component);a.a=i},3192:function(e,a,t){"use strict";t.r(a);var n=t(16),l=t(17),r=t(18),c=t(19),s=t(1),o=t.n(s),m=t(891),i=t(892),p=t(125),u=t(899),v=t(900),E=t(901),h=t(902),b=t(883),g=t(884),C=t(903),x=t(904),d=t(905),f=t(6),N=t.n(f),T=t(1152),I=t(359),y=t(329),j=t(509),A=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Chip from "./ChipComponent"\nimport { User } from "react-feather"\nclass chipDefault extends React.Component {\n\n  render() {\n    return(\n      <Chip className="mr-1" text="Base Chip" />\n      <Chip className="mr-1" avatarText="RX" text="Avatar Text" />\n      <Chip className="mr-1" avatarIcon={<User />} text="Avatar Icon" />\n      <Chip className="mr-1" avatarImg={chipImg} text="Avatar Image" />\n      <Chip text="Chip Closable" closable />\n    )}\n}\nexport default chipDefault\n')),k=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Chip from "./ChipComponent"\nimport { User } from "react-feather"\nclass chipColors extends React.Component {\n\n  render() {\n    return(\n      <Chip className="mr-1" color="success" avatarText="RX" text="Avatar Text" />\n      <Chip className="mr-1" color="info" avatarIcon={<User />} text="Avatar Icon" />\n      <Chip className="mr-1" color="warning" avatarImg={chipImg} text="Avatar Image" />\n      <Chip color="danger" text="Chip Closable" closable />\n    )}\n}\nexport default chipColors\n')),w=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Chip from "./ChipComponent"\nimport { User } from "react-feather"\n\nclass chipAvatarColors extends React.Component {\n\n  render() {\n    return(\n      <Chip className="mr-1" avatarColor="primary" avatarText="RX" text="Avatar Text" />\n      <Chip className="mr-1" avatarColor="success" avatarText="VS" text="Avatar Text" />\n      <Chip className="mr-1" avatarColor="info" avatarIcon={<User />} text="Avatar Text" />\n      <Chip className="mr-1" avatarColor="danger" avatarIcon={<User />} text="Avatar Text" />\n      <Chip avatarColor="warning" avatarIcon={<User />} text="Avatar Text" />\n    )}\n}\nexport default chipAvatarColors\n')),O=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Chip from "./ChipComponent"\nimport { User, Mail, Share, Slash, Battery, Edit } from "react-feather"\n\nclass chipIcons extends React.Component {\n\n  render() {\n    return(\n      <Chip className="mr-1" avatarIcon={<User />} text="User Icon" />\n      <Chip className="mr-1" avatarColor="primary" avatarIcon={<Share />} text="Share Icon" />\n      <Chip className="mr-1" avatarColor="success" avatarIcon={<Mail />} text="Mail Icon" />\n      <Chip className="mr-1" avatarColor="danger" avatarIcon={<Slash />} text="Block Icon" />\n      <Chip className="mr-1" avatarColor="warning" avatarIcon={<Battery />} text="Battery Icon" />\n      <Chip className="mr-1" avatarColor="info" avatarIcon={<Edit />} text="Edit Icon" />\n    )}\n}\nexport default chipIcons\n')),S=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Chip from "./ChipComponent"\n\nclass chipClosable extends React.Component {\n\n  render() {\n    return(\n      <Chip className="mr-1" text="Dribble" closable />\n      <Chip className="mr-1" text="Github" closable />\n      <Chip className="mr-1" text="Behance" closable />\n      <Chip className="mr-1" text="ReactJS" closable />\n      <Chip text="Vuexy" closable />\n    )}\n}\nexport default chipClosable\n')),R=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Chip from "./ChipComponent"\nimport { Trash, Trash2, MinusCircle, Delete } from "react-feather"\n\nclass ChipClosableIcons extends React.Component {\n  render() {\n    return(\n      <Chip className="mr-1" text="Dribble" closableIcon={<Trash />} closable />\n      <Chip className="mr-1" text="Github" closableIcon={<Trash2 />} closable />\n      <Chip className="mr-1" text="Behance" closableIcon={<Delete />} closable />\n      <Chip className="mr-1" text="ReactJS" closableIcon={<MinusCircle />} closable />\n    )}\n}\nexport default ChipClosableIcons\n')),B=t(92),U=t.n(B),z=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null,o.a.createElement(v.a,null,o.a.createElement(E.a,null,"Default"),o.a.createElement("div",{className:"views"},o.a.createElement(h.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(g.a,{className:N()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(I.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(g.a,{className:N()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(C.a,null,o.a.createElement("p",null,"Chips helps you represent simple data with Various options."),o.a.createElement(x.a,{activeTab:this.state.activeTab},o.a.createElement(d.a,{tabId:"1"},o.a.createElement(T.a,{className:"mr-1",text:"Basic Chip"}),o.a.createElement(T.a,{className:"mr-1",avatarText:"RX",text:"Avatar Text"}),o.a.createElement(T.a,{className:"mr-1",avatarIcon:o.a.createElement(j.a,null),text:"Avatar Icon"}),o.a.createElement(T.a,{className:"mr-1",avatarImg:U.a,text:"Avatar Image"}),o.a.createElement(T.a,{text:"Chip Closable",closable:!0})),o.a.createElement(d.a,{className:"component-code",tabId:"2"},A)))))}}]),t}(o.a.Component),D=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null,o.a.createElement(v.a,null,o.a.createElement(E.a,null,"Colors"),o.a.createElement("div",{className:"views"},o.a.createElement(h.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(g.a,{className:N()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(I.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(g.a,{className:N()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(C.a,null,o.a.createElement("p",null,"Use prop"," ",o.a.createElement("code",null,"color=[primary | success | danger | info | warning ]")," ","to create a colored chip."),o.a.createElement(x.a,{activeTab:this.state.activeTab},o.a.createElement(d.a,{tabId:"1"},o.a.createElement(T.a,{className:"mr-1",color:"primary",text:"Primary Chip"}),o.a.createElement(T.a,{className:"mr-1",color:"success",avatarText:"RX",text:"Avatar Text"}),o.a.createElement(T.a,{className:"mr-1",color:"info",avatarIcon:o.a.createElement(j.a,null),text:"Avatar Icon"}),o.a.createElement(T.a,{className:"mr-1",color:"warning",avatarImg:U.a,text:"Avatar Image"}),o.a.createElement(T.a,{color:"danger",text:"Chip Closable",closable:!0})),o.a.createElement(d.a,{className:"component-code",tabId:"2"},k)))))}}]),t}(o.a.Component),F=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null,o.a.createElement(v.a,null,o.a.createElement(E.a,null,"Avatar Colors"),o.a.createElement("div",{className:"views"},o.a.createElement(h.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(g.a,{className:N()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(I.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(g.a,{className:N()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(C.a,null,o.a.createElement("p",null,"Use prop"," ",o.a.createElement("code",null,"avatarColor=[primary | success | danger | info | warning | dark]")," ","to create a colored avatar chip."),o.a.createElement(x.a,{activeTab:this.state.activeTab},o.a.createElement(d.a,{tabId:"1"},o.a.createElement(T.a,{className:"mr-1",avatarColor:"primary",avatarText:"RX",text:"Avatar Text"}),o.a.createElement(T.a,{className:"mr-1",avatarColor:"success",avatarText:"VS",text:"Avatar Text"}),o.a.createElement(T.a,{className:"mr-1",avatarColor:"info",avatarIcon:o.a.createElement(j.a,null),text:"Avatar Text"}),o.a.createElement(T.a,{className:"mr-1",avatarColor:"danger",avatarIcon:o.a.createElement(j.a,null),text:"Avatar Text"}),o.a.createElement(T.a,{avatarColor:"warning",avatarIcon:o.a.createElement(j.a,null),text:"Avatar Text"})),o.a.createElement(d.a,{className:"component-code",tabId:"2"},w)))))}}]),t}(o.a.Component),M=t(461),J=t(403),P=t(471),V=t(295),X=t(356),G=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null,o.a.createElement(v.a,null,o.a.createElement(E.a,null,"Icons"),o.a.createElement("div",{className:"views"},o.a.createElement(h.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(g.a,{className:N()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(I.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(g.a,{className:N()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(C.a,null,o.a.createElement("p",null,"Use prop ",o.a.createElement("code",null,"avatarIcon")," add icon to avatar."),o.a.createElement(x.a,{activeTab:this.state.activeTab},o.a.createElement(d.a,{tabId:"1"},o.a.createElement(T.a,{className:"mr-1",avatarIcon:o.a.createElement(j.a,null),text:"User Icon"}),o.a.createElement(T.a,{className:"mr-1",avatarColor:"primary",avatarIcon:o.a.createElement(M.a,null),text:"Share Icon"}),o.a.createElement(T.a,{className:"mr-1",avatarColor:"success",avatarIcon:o.a.createElement(J.a,null),text:"Mail Icon"}),o.a.createElement(T.a,{className:"mr-1",avatarColor:"danger",avatarIcon:o.a.createElement(P.a,null),text:"Block Icon"}),o.a.createElement(T.a,{className:"mr-1",avatarColor:"warning",avatarIcon:o.a.createElement(V.a,null),text:"Battery Icon"}),o.a.createElement(T.a,{className:"mr-1",avatarColor:"info",avatarIcon:o.a.createElement(X.a,null),text:"Edit Icon"})),o.a.createElement(d.a,{className:"component-code",tabId:"2"},O)))))}}]),t}(o.a.Component),Z=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null,o.a.createElement(v.a,null,o.a.createElement(E.a,null,"Chips Closable"),o.a.createElement("div",{className:"views"},o.a.createElement(h.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(g.a,{className:N()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(I.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(g.a,{className:N()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(C.a,null,o.a.createElement("p",null,"Use prop ",o.a.createElement("code",null,"closable")," to make your chips closable."),o.a.createElement(x.a,{activeTab:this.state.activeTab},o.a.createElement(d.a,{tabId:"1"},o.a.createElement(T.a,{className:"mr-1",text:"Dribble",closable:!0}),o.a.createElement(T.a,{className:"mr-1",text:"Github",closable:!0}),o.a.createElement(T.a,{className:"mr-1",text:"Behance",closable:!0}),o.a.createElement(T.a,{className:"mr-1",text:"ReactJS",closable:!0}),o.a.createElement(T.a,{text:"Vuexy",closable:!0})),o.a.createElement(d.a,{className:"component-code",tabId:"2"},S)))))}}]),t}(o.a.Component),$=t(492),Y=t(491),q=t(348),H=t(415),K=t(522),L=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null,o.a.createElement(v.a,null,o.a.createElement(E.a,null,"Customized Closeable Icon"),o.a.createElement("div",{className:"views"},o.a.createElement(h.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(g.a,{className:N()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(I.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(g.a,{className:N()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(C.a,null,o.a.createElement("p",null,"You can use prop ",o.a.createElement("code",null,"closableIcon")," with prop"," ",o.a.createElement("code",null,"closable")," to create a chip with customized close icon."),o.a.createElement(x.a,{activeTab:this.state.activeTab},o.a.createElement(d.a,{tabId:"1"},o.a.createElement(T.a,{className:"mr-1",text:"Dribble",closableIcon:o.a.createElement($.a,null),closable:!0}),o.a.createElement(T.a,{className:"mr-1",text:"Github",closableIcon:o.a.createElement(Y.a,null),closable:!0}),o.a.createElement(T.a,{className:"mr-1",text:"Behance",closableIcon:o.a.createElement(q.a,null),closable:!0}),o.a.createElement(T.a,{className:"mr-1",text:"ReactJS",closableIcon:o.a.createElement(H.a,null),closable:!0}),o.a.createElement(T.a,{text:"Vuexy",closableIcon:o.a.createElement(K.a,null),closable:!0})),o.a.createElement(d.a,{className:"component-code",tabId:"2"},R," ")))))}}]),t}(o.a.Component),Q=t(998),W=t.n(Q),_=(t(997),function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){W.a.highlightAll()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{breadCrumbTitle:"Chips",breadCrumbParent:"Extra Components",breadCrumbActive:"Chips"}),o.a.createElement(m.a,null,o.a.createElement(i.a,{sm:"12"},o.a.createElement(z,null)),o.a.createElement(i.a,{sm:"12"},o.a.createElement(D,null)),o.a.createElement(i.a,{sm:"12"},o.a.createElement(F,null)),o.a.createElement(i.a,{sm:"12"},o.a.createElement(G,null)),o.a.createElement(i.a,{sm:"12"},o.a.createElement(Z,null)),o.a.createElement(i.a,{sm:"12"},o.a.createElement(L,null))))}}]),t}(o.a.Component));a.default=_},997:function(e,a){!function(e){var a=e.util.clone(e.languages.javascript),t="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function n(e,a){return e=e.replace(/<S>/g,(function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"})).replace(/<BRACES>/g,(function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"})).replace(/<SPREAD>/g,(function(){return t})),RegExp(e,a)}t=n(t).source,e.languages.jsx=e.languages.extend("markup",a),e.languages.jsx.tag.pattern=n("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=a.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:n("<SPREAD>"),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:n("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var l=function e(a){return a?"string"==typeof a?a:"string"==typeof a.content?a.content:a.content.map(e).join(""):""},r=function a(t){for(var n=[],r=0;r<t.length;r++){var c=t[r],s=!1;if("string"!=typeof c&&("tag"===c.type&&c.content[0]&&"tag"===c.content[0].type?"</"===c.content[0].content[0].content?n.length>0&&n[n.length-1].tagName===l(c.content[0].content[1])&&n.pop():"/>"===c.content[c.content.length-1].content||n.push({tagName:l(c.content[0].content[1]),openedBraces:0}):n.length>0&&"punctuation"===c.type&&"{"===c.content?n[n.length-1].openedBraces++:n.length>0&&n[n.length-1].openedBraces>0&&"punctuation"===c.type&&"}"===c.content?n[n.length-1].openedBraces--:s=!0),(s||"string"==typeof c)&&n.length>0&&0===n[n.length-1].openedBraces){var o=l(c);r<t.length-1&&("string"==typeof t[r+1]||"plain-text"===t[r+1].type)&&(o+=l(t[r+1]),t.splice(r+1,1)),r>0&&("string"==typeof t[r-1]||"plain-text"===t[r-1].type)&&(o=l(t[r-1])+o,t.splice(r-1,1),r--),t[r]=new e.Token("plain-text",o,null,o)}c.content&&"string"!=typeof c.content&&a(c.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||r(e.tokens)}))}(Prism)}}]);
//# sourceMappingURL=259.8923e77c.chunk.js.map
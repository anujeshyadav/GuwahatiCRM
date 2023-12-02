(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[357],{3185:function(e,a,t){"use strict";t.r(a);var n=t(16),r=t(17),c=t(18),l=t(19),s=t(1),o=t.n(s),m=t(891),i=t(892),u=t(125),g=t(899),p=t(900),v=t(901),E=t(902),b=t(883),d=t(884),f=t(903),h=t(904),N=t(905),T=t(6),A=t.n(T),x=t(358),y=t(328),j=t(377),C=t(882),k=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:A()("avatar ".concat(this.props.color?"bg-".concat(this.props.color):null,"  ").concat(this.props.className),{"avatar-sm":this.props.size&&"sm"===this.props.size,"avatar-lg":this.props.size&&"lg"===this.props.size,"avatar-xl":this.props.size&&"xl"===this.props.size})},!1===this.props.img||void 0===this.props.img?o.a.createElement("span",{className:A()("avatar-content",{"position-relative":this.props.badgeUp})},this.props.content?this.props.content:null,this.props.icon?o.a.createElement("div",{className:"avatar-icon"},this.props.icon):null,this.props.badgeUp?o.a.createElement(C.a,{color:this.props.badgeColor?this.props.badgeColor:"primary",className:"badge-sm badge-up",pill:!0},this.props.badgeText?this.props.badgeText:"0"):null):o.a.createElement("img",{src:this.props.img,alt:"avatarImg",height:this.props.imgHeight&&!this.props.size?this.props.imgHeight:32,width:this.props.imgWidth&&!this.props.size?this.props.imgWidth:32}),this.props.status?o.a.createElement("span",{className:"avatar-status-".concat(this.props.status)}):null)}}]),t}(o.a.Component),w=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport { GitHub } from "react-feather"\nimport avatarImg from "../../../assets/img/portrait/small/avatar-s-20.jpg"\n\nclass AvatarDefault extends React.Component {\n\n  render() {\n    return(\n      <Avatar className="mr-1" icon={<GitHub />} />\n      <Avatar className="mr-1" content="LD" />\n      <Avatar className="mr-1" content="Luisd" />\n      <Avatar img={avatarImg} />\n    )}}\n\nexport default AvatarDefault\n')),z=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport { GitHub } from "react-feather"\nimport avatarImg from "../../../assets/img/portrait/small/avatar-s-20.jpg"\n\nclass AvatarSizes extends React.Component {\n\n  render() {\n    return(\n        <Avatar className="mr-1" icon={<GitHub />} size="sm" />\n        <Avatar className="mr-1" content="LD" />\n        <Avatar className="mr-1" img={avatarImg} size="lg" />\n        <Avatar img={avatarImg} size="xl" />\n    )}\n}\nexport default AvatarSizes\n')),O=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nclass AvatarColors extends React.Component {\n\n  render() {\n    return(\n      <Avatar color="primary" className="mr-1" content="R" />\n      <Avatar color="success" className="mr-1" content="E" />\n      <Avatar color="danger" className="mr-1" content="A" />\n      <Avatar color="info" className="mr-1" content="C" />\n      <Avatar color="warning" className="mr-1" content="T" />\n      <Avatar color="dark" content="X" />\n    )}\n}\nexport default AvatarColors\n')),I=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport { Badge } from "reactstrap"\nimport { Facebook, Instagram, Twitter } from "react-feather"\n\nclass AvatarBadge extends React.Component {\n\n  render() {\n    return(\n      <Avatar className="mr-1" color="primary" icon={<Facebook />} badgeText="7" badgeColor="danger" badgeUp />\n      <Avatar className="mr-1" icon={<Twitter />} color="info" badgeText="6" badgeColor="danger" badgeUp />\n      <Avatar icon={<Instagram />} color="success" badgeText="6" badgeColor="danger" badgeUp />\n    )}\n}\nexport default AvatarBadge\n')),S=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport {\n  Eye,\n  Code,\n  GitHub,\n  Calendar,\n  Inbox,\n  Camera,\n  Award\n} from "react-feather"\n\nclass AvatarIcons extends React.Component {\n\n  render() {\n    return(\n      <Avatar color="primary" className="mr-1" icon={<GitHub />} />\n      <Avatar color="success" className="mr-1" icon={<Calendar />} />\n      <Avatar color="danger" className="mr-1" icon={<Inbox />} />\n      <Avatar color="info" className="mr-1" icon={<Camera />} />\n      <Avatar color="warning" icon={<Award />} />\n    )}\n}\nexport default AvatarIcons\n')),R=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport { GitHub } from "react-feather"\nimport avatarImg from "../../../assets/img/portrait/small/avatar-s-20.jpg"\n\nclass AvatarStatus extends React.Component {\n\n  render() {\n    return(\n      <Avatar className="mr-1" icon={<GitHub />} status="online" />\n      <Avatar className="mr-1" content="LD" status="offline" />\n      <Avatar className="mr-1" content="Luisd" status="away" />\n      <Avatar className="mr-1" img={avatarImg} status="busy" />\n    )\n  }\n}\nexport default AvatarStatus\n')),B=t(130),U=t.n(B),D=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,"Default"),o.a.createElement("div",{className:"views"},o.a.createElement(E.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(x.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use Vuexy's Avatar component and pass ",o.a.createElement("code",null,"icon")," or"," ",o.a.createElement("code",null,"content")," or ",o.a.createElement("code",null,"img")," to create an avatar."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(N.a,{tabId:"1"},o.a.createElement(k,{className:"mr-1",icon:o.a.createElement(j.a,null)}),o.a.createElement(k,{className:"mr-1",content:"LD"}),o.a.createElement(k,{className:"mr-1",content:"Luisd"}),o.a.createElement(k,{img:U.a})),o.a.createElement(N.a,{className:"component-code",tabId:"2"},w)))))}}]),t}(o.a.Component),H=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,"Sizes"),o.a.createElement("div",{className:"views"},o.a.createElement(E.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(x.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,"size=[sm | lg | xl]")," prop to change avatar's size."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(N.a,{tabId:"1"},o.a.createElement(k,{className:"mr-1",icon:o.a.createElement(j.a,null),size:"sm"}),o.a.createElement(k,{className:"mr-1",content:"LD"}),o.a.createElement(k,{className:"mr-1",img:U.a,size:"lg"}),o.a.createElement(k,{img:U.a,size:"xl"})),o.a.createElement(N.a,{className:"component-code",tabId:"2"},z)))))}}]),t}(o.a.Component),L=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,"Colors"),o.a.createElement("div",{className:"views"},o.a.createElement(E.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(x.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use prop"," ",o.a.createElement("code",null,"color=[primary | success | danger | info | warning | dark]")," ","to change background color of your avatar."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(N.a,{tabId:"1"},o.a.createElement(k,{color:"primary",className:"mr-1",content:"V"}),o.a.createElement(k,{color:"success",className:"mr-1",content:"U"}),o.a.createElement(k,{color:"danger",className:"mr-1",content:"E"}),o.a.createElement(k,{color:"info",className:"mr-1",content:"X"}),o.a.createElement(k,{color:"warning",className:"mr-1",content:"Y"}),o.a.createElement(k,{color:"dark",content:"X"})),o.a.createElement(N.a,{className:"component-code",tabId:"2"},O)))))}}]),t}(o.a.Component),F=t(359),G=t(497),P=t(389),X=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,"Badge"),o.a.createElement("div",{className:"views"},o.a.createElement(E.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(x.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"You can add notification label to avatar by passing"," ",o.a.createElement("code",null,"badgeUp"),"prop as true and ",o.a.createElement("code",null,"badgeText"),","," ",o.a.createElement("code",null,"badgeColor=[primary | success | danger | info | warning | dark]"),"."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(N.a,{tabId:"1"},o.a.createElement(k,{className:"mr-1",color:"primary",icon:o.a.createElement(F.a,null),badgeText:"7",badgeColor:"danger",badgeUp:!0}),o.a.createElement(k,{className:"mr-1",color:"info",icon:o.a.createElement(G.a,null),badgeText:"6",badgeColor:"danger",badgeUp:!0}),o.a.createElement(k,{icon:o.a.createElement(P.a,null),color:"success",badgeText:"6",badgeColor:"danger",badgeUp:!0})),o.a.createElement(N.a,{className:"component-code",tabId:"2"},I)))))}}]),t}(o.a.Component),J=t(304),V=t(387),W=t(306),Y=t(290),Z=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,"Icons"),o.a.createElement("div",{className:"views"},o.a.createElement(E.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(x.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use prop ",o.a.createElement("code",null,"icon")," to create avatar with icon."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(N.a,{tabId:"1"},o.a.createElement(k,{color:"primary",className:"mr-1",icon:o.a.createElement(j.a,null)}),o.a.createElement(k,{color:"success",className:"mr-1",icon:o.a.createElement(J.a,null)}),o.a.createElement(k,{color:"danger",className:"mr-1",icon:o.a.createElement(V.a,null)}),o.a.createElement(k,{color:"info",className:"mr-1",icon:o.a.createElement(W.a,null)}),o.a.createElement(k,{color:"warning",icon:o.a.createElement(Y.a,null)})),o.a.createElement(N.a,{className:"component-code",tabId:"2"},S)))))}}]),t}(o.a.Component),$=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,"Status"),o.a.createElement("div",{className:"views"},o.a.createElement(E.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(x.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"use prop",o.a.createElement("code",null,"status=[online | offline | away | busy]")," to create avatar with status."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(N.a,{tabId:"1"},o.a.createElement(k,{className:"mr-1",icon:o.a.createElement(j.a,null),status:"online"}),o.a.createElement(k,{className:"mr-1",content:"LD",status:"offline"}),o.a.createElement(k,{className:"mr-1",content:"Luisd",status:"away"}),o.a.createElement(k,{className:"mr-1",img:U.a,status:"busy"})),o.a.createElement(N.a,{className:"component-code",tabId:"2"},R)))))}}]),t}(o.a.Component),M=t(998),q=t.n(M),K=(t(997),function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"componentDidMount",value:function(){q.a.highlightAll()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{breadCrumbTitle:"Avatar",breadCrumbParent:"Extra Components",breadCrumbActive:"Avatar"}),o.a.createElement(m.a,{className:"match-height"},o.a.createElement(i.a,{xl:"6",lg:"12"},o.a.createElement(D,null)),o.a.createElement(i.a,{xl:"6",lg:"12"},o.a.createElement(H,null)),o.a.createElement(i.a,{xl:"6",lg:"12"},o.a.createElement(L,null)),o.a.createElement(i.a,{xl:"6",lg:"12"},o.a.createElement(X,null)),o.a.createElement(i.a,{xl:"6",lg:"12"},o.a.createElement(Z,null)),o.a.createElement(i.a,{xl:"6",lg:"12"},o.a.createElement($,null))))}}]),t}(o.a.Component));a.default=K},997:function(e,a){!function(e){var a=e.util.clone(e.languages.javascript),t="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function n(e,a){return e=e.replace(/<S>/g,(function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"})).replace(/<BRACES>/g,(function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"})).replace(/<SPREAD>/g,(function(){return t})),RegExp(e,a)}t=n(t).source,e.languages.jsx=e.languages.extend("markup",a),e.languages.jsx.tag.pattern=n("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=a.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:n("<SPREAD>"),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:n("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var r=function e(a){return a?"string"==typeof a?a:"string"==typeof a.content?a.content:a.content.map(e).join(""):""},c=function a(t){for(var n=[],c=0;c<t.length;c++){var l=t[c],s=!1;if("string"!=typeof l&&("tag"===l.type&&l.content[0]&&"tag"===l.content[0].type?"</"===l.content[0].content[0].content?n.length>0&&n[n.length-1].tagName===r(l.content[0].content[1])&&n.pop():"/>"===l.content[l.content.length-1].content||n.push({tagName:r(l.content[0].content[1]),openedBraces:0}):n.length>0&&"punctuation"===l.type&&"{"===l.content?n[n.length-1].openedBraces++:n.length>0&&n[n.length-1].openedBraces>0&&"punctuation"===l.type&&"}"===l.content?n[n.length-1].openedBraces--:s=!0),(s||"string"==typeof l)&&n.length>0&&0===n[n.length-1].openedBraces){var o=r(l);c<t.length-1&&("string"==typeof t[c+1]||"plain-text"===t[c+1].type)&&(o+=r(t[c+1]),t.splice(c+1,1)),c>0&&("string"==typeof t[c-1]||"plain-text"===t[c-1].type)&&(o=r(t[c-1])+o,t.splice(c-1,1),c--),t[c]=new e.Token("plain-text",o,null,o)}l.content&&"string"!=typeof l.content&&a(l.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||c(e.tokens)}))}(Prism)}}]);
//# sourceMappingURL=357.c43ae1cc.chunk.js.map
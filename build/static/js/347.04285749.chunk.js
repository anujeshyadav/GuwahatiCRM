(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[347],{3178:function(e,a,t){"use strict";t.r(a);var n=t(16),i=t(17),r=t(18),l=t(19),c=t(1),d=t.n(c),s=t(890),m=t(891),v=t(125),o=t(898),u=t(899),E=t(900),g=t(901),p=t(882),b=t(883),N=t(902),f=t(903),h=t(904),x=t(5),T=t.n(x),y=t(358),j=t(328),C=d.a.createElement("pre",null,d.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\n\nclass DividerDefault extends React.Component {\n\n  render() {\n    return(\n      <div>\n        <p>\n          Ut enim ad minim veniam, quis nostrud exercitation ullamco\n          laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n          irure dolor in reprehenderit in voluptate velit esse cillum\n          dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n          cupidatat non proident, sunt in culpa qui officia deserunt\n          mollit anim id est laborum.\n        </p>\n        <hr />\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed\n          do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </p>\n      </div>\n    )\n  }\n}\nexport default DividerDefault\n')),D=d.a.createElement("pre",null,d.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\n\nclass DividerText extends React.Component {\n\n  render() {\n    return(\n      <div className="divider">\n        <div className="divider-text">My Text</div>\n      </div>\n    )\n  }\n}\nexport default DividerText\n')),k=d.a.createElement("pre",null,d.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\n\nclass DividerPosition extends React.Component {\n\n  render() {\n    return(\n      <div className="divider divider-left">\n        <div className="divider-text">Left</div>\n      </div>\n\n      <div className="divider divider-left-center">\n        <div className="divider-text">Left Center</div>\n      </div>\n\n      <div className="divider">\n        <div className="divider-text">Center(Default)</div>\n      </div>\n\n      <div className="divider divider-right-center">\n        <div className="divider-text">Right Center</div>\n      </div>\n\n      <div className="divider divider-right">\n        <div className="divider-text">Right</div>\n      </div>\n    )\n  }\n}\nexport default DividerPosition\n')),O=d.a.createElement("pre",null,d.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\n\nclass DividerColors extends React.Component {\n\n  render() {\n    return(\n      <div className="divider">\n        <div className="divider-text">Default</div>\n      </div>\n      <div className="divider divider-primary">\n        <div className="divider-text">Primary</div>\n      </div>\n      <div className="divider divider-success">\n        <div className="divider-text">Success</div>\n      </div>\n      <div className="divider divider-danger">\n        <div className="divider-text">Danger</div>\n      </div>\n      <div className="divider divider-info">\n        <div className="divider-text">Info</div>\n      </div>\n      <div className="divider divider-warning">\n        <div className="divider-text">Warning</div>\n      </div>\n      <div className="divider divider-light">\n        <div className="divider-text">Light</div>\n      </div>\n      <div className="divider divider-dark">\n        <div className="divider-text">Dark</div>\n      </div>\n    )\n  }\n}\nexport default DividerColors\n')),S=d.a.createElement("pre",null,d.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {\n  ArrowDown,\n  Star,\n  Check,\n  XCircle,\n  Clock\n} from "react-feather"\nclass DividerIcons extends React.Component {\n\n  render() {\n    return(\n      <div className="divider divider-left">\n        <div className="divider-text">\n          <ArrowDown />\n        </div>\n      </div>\n\n      <div className="divider divider-left-center">\n        <div className="divider-text">\n          <Star />\n        </div>\n      </div>\n\n      <div className="divider">\n        <div className="divider-text">\n          <Check />\n        </div>\n      </div>\n\n      <div className="divider divider-right-center">\n        <div className="divider-text">\n          <XCircle />\n        </div>\n      </div>\n\n      <div className="divider divider-right">\n        <div className="divider-text">\n          <Clock />\n        </div>\n      </div>\n    )\n  }\n}\nexport default DividerIcons\n')),w=d.a.createElement("pre",null,d.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\n\nclass DividerStyle extends React.Component {\n\n  render() {\n    return(\n      <div>\n      <div className="divider divider-dotted">\n        <div className="divider-text">Dotted</div>\n      </div>\n\n      <div className="divider divider-dashed">\n        <div className="divider-text">Dashed</div>\n      </div>\n\n      <div className="divider">\n        <div className="divider-text">Solid</div>\n      </div>\n      </div>\n    )\n  }\n}\nexport default DividerStyle\n')),R=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement(o.a,null,d.a.createElement(u.a,null,d.a.createElement(E.a,null,"Default"),d.a.createElement("div",{className:"views"},d.a.createElement(g.a,{tabs:!0},d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},d.a.createElement(y.a,{size:15}))),d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},d.a.createElement(j.a,{size:15})))))),d.a.createElement(N.a,null,d.a.createElement("p",null,"You can add a line to divide your section using"," ",d.a.createElement("code",null,"<hr />")," tag."),d.a.createElement(f.a,{activeTab:this.state.activeTab},d.a.createElement(h.a,{tabId:"1"},d.a.createElement("p",null,"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),d.a.createElement("hr",null),d.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),d.a.createElement(h.a,{className:"component-code",tabId:"2"},C)))))}}]),t}(d.a.Component),A=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement(o.a,null,d.a.createElement(u.a,null,d.a.createElement(E.a,null,"Text"),d.a.createElement("div",{className:"views"},d.a.createElement(g.a,{tabs:!0},d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},d.a.createElement(y.a,{size:15}))),d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},d.a.createElement(j.a,{size:15})))))),d.a.createElement(N.a,null,d.a.createElement("p",null,"Use class ",d.a.createElement("code",null,".divider")," as wrapper for"," ",d.a.createElement("code",null,".divider-text")," to create a divider text"),d.a.createElement(f.a,{activeTab:this.state.activeTab},d.a.createElement(h.a,{tabId:"1"},d.a.createElement("div",{className:"divider"},d.a.createElement("div",{className:"divider-text"},"My Text"))),d.a.createElement(h.a,{className:"component-code",tabId:"2"},D)))))}}]),t}(d.a.Component),I=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement(o.a,null,d.a.createElement(u.a,null,d.a.createElement(E.a,null,"Text Position"),d.a.createElement("div",{className:"views"},d.a.createElement(g.a,{tabs:!0},d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},d.a.createElement(y.a,{size:15}))),d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},d.a.createElement(j.a,{size:15})))))),d.a.createElement(N.a,null,d.a.createElement("p",null,"Use class"," ",d.a.createElement("code",null,".divider-[left | left-center | right | right-center]")," ","with ",d.a.createElement("code",null,".divider")," to set text position."),d.a.createElement(f.a,{activeTab:this.state.activeTab},d.a.createElement(h.a,{tabId:"1"},d.a.createElement("div",{className:"divider divider-left"},d.a.createElement("div",{className:"divider-text"},"Left")),d.a.createElement("div",{className:"divider divider-left-center"},d.a.createElement("div",{className:"divider-text"},"Left Center")),d.a.createElement("div",{className:"divider"},d.a.createElement("div",{className:"divider-text"},"Center(Default)")),d.a.createElement("div",{className:"divider divider-right-center"},d.a.createElement("div",{className:"divider-text"},"Right Center")),d.a.createElement("div",{className:"divider divider-right"},d.a.createElement("div",{className:"divider-text"},"Right"))),d.a.createElement(h.a,{className:"component-code",tabId:"2"},k)))))}}]),t}(d.a.Component),z=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement(o.a,null,d.a.createElement(u.a,null,d.a.createElement(E.a,null,"Colors"),d.a.createElement("div",{className:"views"},d.a.createElement(g.a,{tabs:!0},d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},d.a.createElement(y.a,{size:15}))),d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},d.a.createElement(j.a,{size:15})))))),d.a.createElement(N.a,null,d.a.createElement("p",null,"Use class ",d.a.createElement("code",null,".divider-[color-name]")," to change color of divider"),d.a.createElement(f.a,{activeTab:this.state.activeTab},d.a.createElement(h.a,{tabId:"1"},d.a.createElement("div",{className:"divider"},d.a.createElement("div",{className:"divider-text"},"Default")),d.a.createElement("div",{className:"divider divider-primary"},d.a.createElement("div",{className:"divider-text"},"Primary")),d.a.createElement("div",{className:"divider divider-success"},d.a.createElement("div",{className:"divider-text"},"Success")),d.a.createElement("div",{className:"divider divider-danger"},d.a.createElement("div",{className:"divider-text"},"Danger")),d.a.createElement("div",{className:"divider divider-info"},d.a.createElement("div",{className:"divider-text"},"Info")),d.a.createElement("div",{className:"divider divider-warning"},d.a.createElement("div",{className:"divider-text"},"Warning")),d.a.createElement("div",{className:"divider divider-light"},d.a.createElement("div",{className:"divider-text"},"Light")),d.a.createElement("div",{className:"divider divider-dark"},d.a.createElement("div",{className:"divider-text"},"Dark"))),d.a.createElement(h.a,{className:"component-code",tabId:"2"},O)))))}}]),t}(d.a.Component),B=t(281),q=t(476),P=t(310),L=t(521),F=t(321),U=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement(o.a,null,d.a.createElement(u.a,null,d.a.createElement(E.a,null,"Icons"),d.a.createElement("div",{className:"views"},d.a.createElement(g.a,{tabs:!0},d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},d.a.createElement(y.a,{size:15}))),d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},d.a.createElement(j.a,{size:15})))))),d.a.createElement(N.a,null,d.a.createElement(f.a,{activeTab:this.state.activeTab},d.a.createElement(h.a,{tabId:"1"},d.a.createElement("div",{className:"divider divider-left"},d.a.createElement("div",{className:"divider-text"},d.a.createElement(B.a,null))),d.a.createElement("div",{className:"divider divider-left-center"},d.a.createElement("div",{className:"divider-text"},d.a.createElement(q.a,null))),d.a.createElement("div",{className:"divider"},d.a.createElement("div",{className:"divider-text"},d.a.createElement(P.a,null))),d.a.createElement("div",{className:"divider divider-right-center"},d.a.createElement("div",{className:"divider-text"},d.a.createElement(L.a,null))),d.a.createElement("div",{className:"divider divider-right"},d.a.createElement("div",{className:"divider-text"},d.a.createElement(F.a,null)))),d.a.createElement(h.a,{className:"component-code",tabId:"2"},S)))))}}]),t}(d.a.Component),M=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement(o.a,null,d.a.createElement(u.a,null,d.a.createElement(E.a,null,"Styles"),d.a.createElement("div",{className:"views"},d.a.createElement(g.a,{tabs:!0},d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},d.a.createElement(y.a,{size:15}))),d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},d.a.createElement(j.a,{size:15})))))),d.a.createElement(N.a,null,d.a.createElement("p",null,"use class ",d.a.createElement("code",null,".divider-[dotted | dashed]")," to change divider style. solid is default style you don't have to add any class for it."),d.a.createElement(f.a,{activeTab:this.state.activeTab},d.a.createElement(h.a,{tabId:"1"},d.a.createElement("div",{className:"divider divider-dotted"},d.a.createElement("div",{className:"divider-text"},"Dotted")),d.a.createElement("div",{className:"divider divider-dashed"},d.a.createElement("div",{className:"divider-text"},"Dashed")),d.a.createElement("div",{className:"divider"},d.a.createElement("div",{className:"divider-text"},"Solid"))),d.a.createElement(h.a,{className:"component-code",tabId:"2"},w)))))}}]),t}(d.a.Component),J=t(997),W=t.n(J),X=(t(996),function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){W.a.highlightAll()}},{key:"render",value:function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement(v.a,{breadCrumbTitle:"Divider",breadCrumbParent:"Extra Components",breadCrumbActive:"Divider"}),d.a.createElement(s.a,null,d.a.createElement(m.a,{sm:"12"},d.a.createElement(R,null)),d.a.createElement(m.a,{sm:"12"},d.a.createElement(A,null)),d.a.createElement(m.a,{sm:"12"},d.a.createElement(I,null)),d.a.createElement(m.a,{sm:"12"},d.a.createElement(z,null)),d.a.createElement(m.a,{sm:"12"},d.a.createElement(U,null)),d.a.createElement(m.a,{sm:"12"},d.a.createElement(M,null))))}}]),t}(d.a.Component));a.default=X},996:function(e,a){!function(e){var a=e.util.clone(e.languages.javascript),t="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function n(e,a){return e=e.replace(/<S>/g,(function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"})).replace(/<BRACES>/g,(function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"})).replace(/<SPREAD>/g,(function(){return t})),RegExp(e,a)}t=n(t).source,e.languages.jsx=e.languages.extend("markup",a),e.languages.jsx.tag.pattern=n("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=a.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:n("<SPREAD>"),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:n("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var i=function e(a){return a?"string"==typeof a?a:"string"==typeof a.content?a.content:a.content.map(e).join(""):""},r=function a(t){for(var n=[],r=0;r<t.length;r++){var l=t[r],c=!1;if("string"!=typeof l&&("tag"===l.type&&l.content[0]&&"tag"===l.content[0].type?"</"===l.content[0].content[0].content?n.length>0&&n[n.length-1].tagName===i(l.content[0].content[1])&&n.pop():"/>"===l.content[l.content.length-1].content||n.push({tagName:i(l.content[0].content[1]),openedBraces:0}):n.length>0&&"punctuation"===l.type&&"{"===l.content?n[n.length-1].openedBraces++:n.length>0&&n[n.length-1].openedBraces>0&&"punctuation"===l.type&&"}"===l.content?n[n.length-1].openedBraces--:c=!0),(c||"string"==typeof l)&&n.length>0&&0===n[n.length-1].openedBraces){var d=i(l);r<t.length-1&&("string"==typeof t[r+1]||"plain-text"===t[r+1].type)&&(d+=i(t[r+1]),t.splice(r+1,1)),r>0&&("string"==typeof t[r-1]||"plain-text"===t[r-1].type)&&(d=i(t[r-1])+d,t.splice(r-1,1),r--),t[r]=new e.Token("plain-text",d,null,d)}l.content&&"string"!=typeof l.content&&a(l.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||r(e.tokens)}))}(Prism)}}]);
//# sourceMappingURL=347.04285749.chunk.js.map
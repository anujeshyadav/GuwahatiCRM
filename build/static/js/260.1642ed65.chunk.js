(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[260],{1011:function(e,a){!function(e){var a=e.util.clone(e.languages.javascript),t="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function r(e,a){return e=e.replace(/<S>/g,(function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"})).replace(/<BRACES>/g,(function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"})).replace(/<SPREAD>/g,(function(){return t})),RegExp(e,a)}t=r(t).source,e.languages.jsx=e.languages.extend("markup",a),e.languages.jsx.tag.pattern=r("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=a.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:r("<SPREAD>"),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:r("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var n=function e(a){return a?"string"==typeof a?a:"string"==typeof a.content?a.content:a.content.map(e).join(""):""},l=function a(t){for(var r=[],l=0;l<t.length;l++){var s=t[l],c=!1;if("string"!=typeof s&&("tag"===s.type&&s.content[0]&&"tag"===s.content[0].type?"</"===s.content[0].content[0].content?r.length>0&&r[r.length-1].tagName===n(s.content[0].content[1])&&r.pop():"/>"===s.content[s.content.length-1].content||r.push({tagName:n(s.content[0].content[1]),openedBraces:0}):r.length>0&&"punctuation"===s.type&&"{"===s.content?r[r.length-1].openedBraces++:r.length>0&&r[r.length-1].openedBraces>0&&"punctuation"===s.type&&"}"===s.content?r[r.length-1].openedBraces--:c=!0),(c||"string"==typeof s)&&r.length>0&&0===r[r.length-1].openedBraces){var o=n(s);l<t.length-1&&("string"==typeof t[l+1]||"plain-text"===t[l+1].type)&&(o+=n(t[l+1]),t.splice(l+1,1)),l>0&&("string"==typeof t[l-1]||"plain-text"===t[l-1].type)&&(o=n(t[l-1])+o,t.splice(l-1,1),l--),t[l]=new e.Token("plain-text",o,null,o)}s.content&&"string"!=typeof s.content&&a(s.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||l(e.tokens)}))}(Prism)},1235:function(e,a,t){"use strict";var r=t(9),n=t(10),l=t(11),s=t(1),c=t.n(s),o=t(2),i=t.n(o),m=t(8),u=t.n(m),g=t(5),p=["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barStyle","barAriaValueText","barAriaLabelledBy"];function v(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?v(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var d={children:i.a.node,bar:i.a.bool,multi:i.a.bool,tag:g.tagPropType,value:i.a.oneOfType([i.a.string,i.a.number]),min:i.a.oneOfType([i.a.string,i.a.number]),max:i.a.oneOfType([i.a.string,i.a.number]),animated:i.a.bool,striped:i.a.bool,color:i.a.string,className:i.a.string,barClassName:i.a.string,cssModule:i.a.object,style:i.a.object,barStyle:i.a.object,barAriaValueText:i.a.string,barAriaLabelledBy:i.a.string},E=function(e){var a=e.children,t=e.className,n=e.barClassName,s=e.cssModule,o=e.value,i=e.min,m=e.max,v=e.animated,d=e.striped,E=e.color,f=e.bar,h=e.multi,P=e.tag,N=e.style,T=e.barStyle,y=e.barAriaValueText,x=e.barAriaLabelledBy,j=Object(l.a)(e,p),O=Object(g.toNumber)(o)/Object(g.toNumber)(m)*100,w=Object(g.mapToCssModules)(u()(t,"progress"),s),C={className:Object(g.mapToCssModules)(u()("progress-bar",f&&t||n,v?"progress-bar-animated":null,E?"bg-"+E:null,d||v?"progress-bar-striped":null),s),style:b(b(b({},f?N:{}),T),{},{width:O+"%"}),role:"progressbar","aria-valuenow":o,"aria-valuemin":i,"aria-valuemax":m,"aria-valuetext":y,"aria-labelledby":x,children:a};return f?c.a.createElement(P,Object(r.a)({},j,C)):c.a.createElement(P,Object(r.a)({},j,{style:N,className:w}),h?a:c.a.createElement("div",C))};E.propTypes=d,E.defaultProps={tag:"div",value:0,min:0,max:100,style:{},barStyle:{}},a.a=E},3239:function(e,a,t){"use strict";t.r(a);var r=t(16),n=t(17),l=t(18),s=t(19),c=t(1),o=t.n(c),i=t(901),m=t(902),u=t(132),g=t(909),p=t(910),v=t(911),b=t(912),d=t(893),E=t(894),f=t(913),h=t(914),P=t(915),N=t(1235),T=t(8),y=t.n(T),x=t(368),j=t(338),O=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Progress} from "reactstrap"\n\nclass ProgressBasic extends React.Component {\n\n  render() {\n    return(\n      <div className="text-center">0%</div>\n      <Progress />\n      <div className="text-center">25%</div>\n      <Progress value="25" />\n      <div className="text-center">50%</div>\n      <Progress value={50} />\n      <div className="text-center">75%</div>\n      <Progress value={75} />\n      <div className="text-center">100%</div>\n      <Progress value="100" />\n    )\n  }\n}\nexport default ProgressBasic\n')),w=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Progress} from "reactstrap"\n\nclass ProgressColored extends React.Component {\n\n  render() {\n    return(\n      <Progress value={2 * 5} />\n      <Progress color="success" value="25" />\n      <Progress color="info" value={50} />\n      <Progress color="warning" value={75} />\n      <Progress color="danger" value="100" />\n      <Progress multi>\n        <Progress bar value="15" />\n        <Progress bar color="success" value="30" />\n        <Progress bar color="info" value="25" />\n        <Progress bar color="warning" value="20" />\n        <Progress bar color="danger" value="5" />\n      </Progress>\n    )\n  }\n}\nexport default ProgressColored\n')),C=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Progress} from "reactstrap"\n\nclass ProgressLabeled extends React.Component {\n\n  render() {\n    return(\n      <Progress className="progress-lg" value="25" color="danger">\n        25%\n      </Progress>\n      <Progress className="progress-lg" value={50} color="warning">\n        1/2\n      </Progress>\n      <Progress className="progress-lg" value={75} color="info">\n        You\'re almost there!\n      </Progress>\n      <Progress className="progress-lg" color="success" value="100">\n        You did it!\n      </Progress>\n    )\n  }\n}\nexport default ProgressLabeled\n')),S=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Progress} from "reactstrap"\n\nclass ProgressStriped extends React.Component {\n\n  render() {\n    return(\n      <Progress striped value={2 * 5} />\n      <Progress striped color="success" value="25" />\n      <Progress striped color="info" value={50} />\n      <Progress striped color="warning" value={75} />\n      <Progress striped color="danger" value="100" />\n    )\n  }\n}\nexport default ProgressStriped\n')),k=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Progress} from "reactstrap"\n\nclass ProgressAnimated extends React.Component {\n\n  render() {\n    return(\n      <Progress animated value={2 * 5} />\n      <Progress animated color="success" value="25" />\n      <Progress animated color="info" value={50} />\n      <Progress animated color="warning" value={75} />\n      <Progress animated color="danger" value="100" />\n    )\n  }\n}\nexport default ProgressAnimated\n')),A=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Progress} from "reactstrap"\n\nclass ProgressSizes extends React.Component {\n\n  render() {\n    return(\n      <Progress className="progress-xl" value={20} color="primary" />\n      <Progress className="progress-lg" value={40} color="success" />\n      <Progress className="progress-md" value={60} color="danger" />\n      <Progress className="progress-sm" value={80} color="info" />\n    )\n  }\n}\nexport default ProgressSizes\n')),R=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,"Basic Progress"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(E.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(x.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(E.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(j.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(P.a,{tabId:"1"},o.a.createElement("div",{className:"text-center"},"0%"),o.a.createElement(N.a,null),o.a.createElement("div",{className:"text-center"},"25%"),o.a.createElement(N.a,{value:"25"}),o.a.createElement("div",{className:"text-center"},"50%"),o.a.createElement(N.a,{value:50}),o.a.createElement("div",{className:"text-center"},"75%"),o.a.createElement(N.a,{value:75}),o.a.createElement("div",{className:"text-center"},"100%"),o.a.createElement(N.a,{value:"100"})),o.a.createElement(P.a,{className:"component-code",tabId:"2"},O)))))}}]),t}(o.a.Component),z=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,"Colored Progress"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(E.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(x.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(E.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(j.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,"color")," attribute with progress to change progress color. To create a multi colored progress wrap all of your progresses in with ",o.a.createElement("code",null,"multi")," attribute."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(P.a,{tabId:"1"},o.a.createElement(N.a,{value:10}),o.a.createElement(N.a,{color:"success",value:"25"}),o.a.createElement(N.a,{color:"info",value:50}),o.a.createElement(N.a,{color:"warning",value:75}),o.a.createElement(N.a,{color:"danger",value:"100"}),o.a.createElement(N.a,{multi:!0},o.a.createElement(N.a,{bar:!0,value:"15"}),o.a.createElement(N.a,{bar:!0,color:"success",value:"30"}),o.a.createElement(N.a,{bar:!0,color:"info",value:"25"}),o.a.createElement(N.a,{bar:!0,color:"warning",value:"20"}),o.a.createElement(N.a,{bar:!0,color:"danger",value:"5"}))),o.a.createElement(P.a,{className:"component-code",tabId:"2"},w)))))}}]),t}(o.a.Component),B=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,"Labeled Progress"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(E.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(x.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(E.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(j.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Add text between progress tag to create a labeled progress bar."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(P.a,{tabId:"1"},o.a.createElement(N.a,{className:"progress-lg",value:"25",color:"danger"},"25%"),o.a.createElement(N.a,{className:"progress-lg",value:50,color:"warning"},"1/2"),o.a.createElement(N.a,{className:"progress-lg",value:75,color:"info"},"You're almost there!"),o.a.createElement(N.a,{className:"progress-lg",value:85,color:"primary"},"Keep it up..."),o.a.createElement(N.a,{className:"progress-lg",color:"success",value:"100"},"You did it!")),o.a.createElement(P.a,{className:"component-code",tabId:"2"},C)))))}}]),t}(o.a.Component),I=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,"Striped Progress"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(E.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(x.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(E.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(j.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,"strpied")," attribute with progress to create a striped progress bar."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(P.a,{tabId:"1"},o.a.createElement(N.a,{className:"progress-lg",striped:!0,value:10}),o.a.createElement(N.a,{className:"progress-lg",striped:!0,color:"success",value:"25"}),o.a.createElement(N.a,{className:"progress-lg",striped:!0,color:"info",value:50}),o.a.createElement(N.a,{className:"progress-lg",striped:!0,color:"warning",value:75}),o.a.createElement(N.a,{className:"progress-lg",striped:!0,color:"danger",value:"100"})),o.a.createElement(P.a,{className:"component-code",tabId:"2"},S)))))}}]),t}(o.a.Component),D=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,"Animated Progress"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(E.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(x.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(E.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(j.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,"animated")," attribute with progress to animate progress bar."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(P.a,{tabId:"1"},o.a.createElement(N.a,{className:"progress-xl",animated:!0,value:10}),o.a.createElement(N.a,{className:"progress-xl",animated:!0,color:"success",value:"25"}),o.a.createElement(N.a,{className:"progress-xl",animated:!0,color:"info",value:50}),o.a.createElement(N.a,{className:"progress-xl",animated:!0,color:"warning",value:75}),o.a.createElement(N.a,{className:"progress-xl",animated:!0,color:"danger",value:"100"})),o.a.createElement(P.a,{className:"component-code",tabId:"2"},k)))))}}]),t}(o.a.Component),F=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,"Progress Sizes"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(E.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(x.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(E.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(j.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"you can use class ",o.a.createElement("code",null,".progress-[sm|md|lg|xl]")," with"," ",o.a.createElement("code",null,"progress")," tag to change size of your progress bar."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(P.a,{tabId:"1"},o.a.createElement(N.a,{className:"progress-xl",value:20,color:"primary"}),o.a.createElement(N.a,{className:"progress-lg",value:40,color:"success"}),o.a.createElement(N.a,{className:"progress-md",value:60,color:"danger"}),o.a.createElement(N.a,{className:"progress-sm",value:80,color:"info"})),o.a.createElement(P.a,{className:"component-code",tabId:"2"},A)))))}}]),t}(o.a.Component),L=t(1013),M=t.n(L),Y=(t(1011),function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"componentDidMount",value:function(){M.a.highlightAll()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{breadCrumbTitle:"Progress",breadCrumbParent:"Components",breadCrumbActive:"Progress"}),o.a.createElement(i.a,null,o.a.createElement(m.a,{xl:"6",lg:"12"},o.a.createElement(R,null)),o.a.createElement(m.a,{xl:"6",lg:"12"},o.a.createElement(z,null)),o.a.createElement(m.a,{xl:"6",lg:"12"},o.a.createElement(B,null)),o.a.createElement(m.a,{xl:"6",lg:"12"},o.a.createElement(I,null)),o.a.createElement(m.a,{xl:"6",lg:"12"},o.a.createElement(D,null)),o.a.createElement(m.a,{xl:"6",lg:"12"},o.a.createElement(F,null))))}}]),t}(o.a.Component));a.default=Y}}]);
//# sourceMappingURL=260.1642ed65.chunk.js.map
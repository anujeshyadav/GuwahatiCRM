(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[212],{1135:function(e,t){!function(e){var t=e.util.clone(e.languages.javascript),a="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function n(e,t){return e=e.replace(/<S>/g,(function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"})).replace(/<BRACES>/g,(function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"})).replace(/<SPREAD>/g,(function(){return a})),RegExp(e,t)}a=n(a).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=n("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:n("<SPREAD>"),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:n("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var o=function e(t){return t?"string"==typeof t?t:"string"==typeof t.content?t.content:t.content.map(e).join(""):""},r=function t(a){for(var n=[],r=0;r<a.length;r++){var l=a[r],c=!1;if("string"!=typeof l&&("tag"===l.type&&l.content[0]&&"tag"===l.content[0].type?"</"===l.content[0].content[0].content?n.length>0&&n[n.length-1].tagName===o(l.content[0].content[1])&&n.pop():"/>"===l.content[l.content.length-1].content||n.push({tagName:o(l.content[0].content[1]),openedBraces:0}):n.length>0&&"punctuation"===l.type&&"{"===l.content?n[n.length-1].openedBraces++:n.length>0&&n[n.length-1].openedBraces>0&&"punctuation"===l.type&&"}"===l.content?n[n.length-1].openedBraces--:c=!0),(c||"string"==typeof l)&&n.length>0&&0===n[n.length-1].openedBraces){var i=o(l);r<a.length-1&&("string"==typeof a[r+1]||"plain-text"===a[r+1].type)&&(i+=o(a[r+1]),a.splice(r+1,1)),r>0&&("string"==typeof a[r-1]||"plain-text"===a[r-1].type)&&(i=o(a[r-1])+i,a.splice(r-1,1),r--),a[r]=new e.Token("plain-text",i,null,i)}l.content&&"string"!=typeof l.content&&t(l.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||r(e.tokens)}))}(Prism)},1544:function(e,t,a){"use strict";var n=a(10),o=a(1),r=a.n(o),l=a(8),c=a.n(l),i=a(190),p=function(e){var t=c()("popover","show",e.popperClassName),a=c()("popover-inner",e.innerClassName);return r.a.createElement(i.a,Object(n.a)({},e,{popperClassName:t,innerClassName:a}))};p.propTypes=i.b,p.defaultProps={placement:"right",placementPrefix:"bs-popover",trigger:"click"},t.a=p},1936:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(11),o=a(10),r=a(3),l=a(21),c=a(1),i=a.n(c),p=a(2),s=a.n(p),m=a(1544),u=a(7);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var d=["defaultOpen"],v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return i.a.createElement(m.a,Object(o.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(u.omit)(this.props,d)))},t}(c.Component);v.propTypes=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({defaultOpen:s.a.bool},m.a.propTypes)},1937:function(e,t,a){"use strict";var n=a(10),o=a(12),r=a(1),l=a.n(r),c=a(2),i=a.n(c),p=a(8),s=a.n(p),m=a(7),u=["className","cssModule","tag"],g={tag:m.tagPropType,className:i.a.string,cssModule:i.a.object},d=function(e){var t=e.className,a=e.cssModule,r=e.tag,c=Object(o.a)(e,u),i=Object(m.mapToCssModules)(s()(t,"popover-header"),a);return l.a.createElement(r,Object(n.a)({},c,{className:i}))};d.propTypes=g,d.defaultProps={tag:"h3"},t.a=d},1938:function(e,t,a){"use strict";var n=a(10),o=a(12),r=a(1),l=a.n(r),c=a(2),i=a.n(c),p=a(8),s=a.n(p),m=a(7),u=["className","cssModule","tag"],g={tag:m.tagPropType,className:i.a.string,cssModule:i.a.object},d=function(e){var t=e.className,a=e.cssModule,r=e.tag,c=Object(o.a)(e,u),i=Object(m.mapToCssModules)(s()(t,"popover-body"),a);return l.a.createElement(r,Object(n.a)({},c,{className:i}))};d.propTypes=g,d.defaultProps={tag:"div"},t.a=d},3348:function(e,t,a){"use strict";a.r(t);var n=a(16),o=a(17),r=a(18),l=a(19),c=a(1),i=a.n(c),p=a(904),s=a(905),m=a(134),u=a(912),g=a(913),d=a(914),v=a(915),b=a(896),E=a(897),h=a(916),f=a(917),y=a(918),P=a(244),k=a(1544),O=a(1937),T=a(1938),B=a(8),j=a.n(B),C=a(370),N=a(340),w=i.a.createElement("pre",null,i.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button,  Popover, PopoverHeader, PopoverBody,} from "reactstrap"\n\nclass PopoverControlled extends React.Component {\n\n  state = {\n    popoverOpen: false\n  }\n\n  togglePopover = () => {\n    this.setState({\n      popoverOpen: !this.state.popoverOpen\n    })\n  }\n\n  render() {\n    return(\n      <Button color="primary" outline id="controlledPopover">\n        Controlled\n      </Button>\n      <Popover\n        placement="top"\n        target="controlledPopover"\n        isOpen={this.state.popoverOpen}\n        toggle={this.togglePopover}\n      >\n        <PopoverHeader>Controlled Popover</PopoverHeader>\n        <PopoverBody>\n          Macaroon chocolate candy. I love carrot cake gingerbread\n          cake lemon drops. Muffin sugar plum marzipan pie.\n        </PopoverBody>\n      </Popover>\n    )\n  }\n}\nexport default PopoverControlled\n')),x=i.a.createElement("pre",null,i.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button,  UncontrolledPopover, PopoverHeader, PopoverBody,} from "reactstrap"\n\nclass PopoverUncontrolled extends React.Component {\n\n  render() {\n    return(\n      <Button color="primary" outline id="uncontrolledPopover">\n        Controlled\n      </Button>\n      <UncontrolledPopover placement="top" target="uncontrolledPopover">\n        <PopoverHeader>Uncontrolled Popover</PopoverHeader>\n        <PopoverBody>\n          Macaroon chocolate candy. I love carrot cake gingerbread\n          cake lemon drops. Muffin sugar plum marzipan pie.\n        </PopoverBody>\n      </UncontrolledPopover>\n    )\n  }\n}\nexport default PopoverUncontrolled\n')),R=i.a.createElement("pre",null,i.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button,  UncontrolledPopover, PopoverHeader, PopoverBody,} from "reactstrap"\n\nclass PopoverPositions extends React.Component {\n\n  render() {\n    return(\n      <Button\n      color="primary"\n      outline\n      id="popTop"\n      className="mr-1 mb-1"\n    >\n      Top\n    </Button>\n    <UncontrolledPopover placement="top" target="popTop">\n      <PopoverHeader>Popover Top</PopoverHeader>\n      <PopoverBody>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit.\n        Doloremque, cumque.\n      </PopoverBody>\n    </UncontrolledPopover>\n\n    <Button\n      color="primary"\n      outline\n      id="popRight"\n      className="mr-1 mb-1"\n    >\n      Right\n    </Button>\n    <UncontrolledPopover placement="right" target="popRight">\n      <PopoverHeader>Popover Right</PopoverHeader>\n      <PopoverBody>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit.\n        Doloremque, cumque.\n      </PopoverBody>\n    </UncontrolledPopover>\n\n    <Button\n      color="primary"\n      outline\n      id="popBottom"\n      className="mr-1 mb-1"\n    >\n      Bottom\n    </Button>\n    <UncontrolledPopover placement="bottom" target="popBottom">\n      <PopoverHeader>Popover Bottom</PopoverHeader>\n      <PopoverBody>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit.\n        Doloremque, cumque.\n      </PopoverBody>\n    </UncontrolledPopover>\n\n    <Button\n      color="primary"\n      outline\n      id="popLeft"\n      className="mr-1 mb-1"\n    >\n      Left\n    </Button>\n    <UncontrolledPopover placement="left" target="popLeft">\n      <PopoverHeader>Popover Left</PopoverHeader>\n      <PopoverBody>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit.\n        Doloremque, cumque.\n      </PopoverBody>\n    </UncontrolledPopover>\n    )\n  }\n}\nexport default PopoverPositions\n')),U=i.a.createElement("pre",null,i.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button,  UncontrolledPopover, PopoverHeader, PopoverBody,} from "reactstrap"\n\nclass PopoverTriggers extends React.Component {\n\n  render() {\n    return(\n      <Button\n      color="primary"\n      outline\n      id="popFocus"\n      className="mr-1 mb-1"\n    >\n      Focus\n    </Button>\n    <UncontrolledPopover\n      trigger="focus"\n      placement="top"\n      target="popFocus"\n    >\n      <PopoverHeader>Focus Trigger</PopoverHeader>\n      <PopoverBody>\n        Focusing on the trigging element makes this popover appear.\n        Blurring (clicking away) makes it disappear. You cannot\n        select this text as the popover will disappear when you try.\n      </PopoverBody>\n    </UncontrolledPopover>\n\n    <Button\n      color="primary"\n      outline\n      id="popClick"\n      className="mr-1 mb-1"\n    >\n      Click\n    </Button>\n    <UncontrolledPopover\n      trigger="click"\n      placement="top"\n      target="popClick"\n    >\n      <PopoverHeader>Click Trigger</PopoverHeader>\n      <PopoverBody>\n        Clicking on the triggering element makes this popover\n        appear. Clicking on it again will make it disappear. You can\n        select this text, but clicking away (somewhere other than\n        the triggering element) will not dismiss this popover.\n      </PopoverBody>\n    </UncontrolledPopover>\n\n    <Button\n      trigger="legacy"\n      color="primary"\n      outline\n      id="popLegacy"\n      className="mr-1"\n    >\n      Legacy\n    </Button>\n    <UncontrolledPopover placement="top" target="popLegacy">\n      <PopoverHeader>Legacy Trigger</PopoverHeader>\n      <PopoverBody>\n        Legacy is a reactstrap special trigger value (outside of\n        bootstrap\'s spec/standard). Before reactstrap correctly\n        supported click and focus, it had a hybrid which was very\n        useful and has been brought back as trigger="legacy". One\n        advantage of the legacy trigger is that it allows the\n        popover text to be selected while also closing when clicking\n        outside the triggering element and popover itself.\n      </PopoverBody>\n    </UncontrolledPopover>\n    )\n  }\n}\nexport default PopoverTriggers\n')),L=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={activeTab:"1",popoverOpen:!1},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e.togglePopover=function(){e.setState({popoverOpen:!e.state.popoverOpen})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(g.a,null,i.a.createElement(d.a,null,"Controlled Popover"),i.a.createElement("div",{className:"views"},i.a.createElement(v.a,{tabs:!0},i.a.createElement(b.a,null,i.a.createElement(E.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},i.a.createElement(C.a,{size:15}))),i.a.createElement(b.a,null,i.a.createElement(E.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},i.a.createElement(N.a,{size:15})))))),i.a.createElement(h.a,null,i.a.createElement("p",null,"For controlled Popover you'll have to manage state of component.controlled Popover require ",i.a.createElement("code",null,"isOpen")," and"," ",i.a.createElement("code",null,"toggle")," props to work."),i.a.createElement(f.a,{activeTab:this.state.activeTab},i.a.createElement(y.a,{className:"justify-content-center d-flex",tabId:"1"},i.a.createElement(P.a.Ripple,{color:"primary",outline:!0,id:"controlledPopover"},"Controlled"),i.a.createElement(k.a,{placement:"top",target:"controlledPopover",isOpen:this.state.popoverOpen,toggle:this.togglePopover},i.a.createElement(O.a,null,"Controlled Popover"),i.a.createElement(T.a,null,"Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."))),i.a.createElement(y.a,{className:"component-code",tabId:"2"},w)))))}}]),a}(i.a.Component),H=a(1936),S=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(g.a,null,i.a.createElement(d.a,null,"Uncontrolled Popover"),i.a.createElement("div",{className:"views"},i.a.createElement(v.a,{tabs:!0},i.a.createElement(b.a,null,i.a.createElement(E.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},i.a.createElement(C.a,{size:15}))),i.a.createElement(b.a,null,i.a.createElement(E.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},i.a.createElement(N.a,{size:15})))))),i.a.createElement(h.a,null,i.a.createElement("p",null,"You can create an uncontrolled popover without having to manage state. All you have to do is wrap your content inside UncontrolledPopover tag."),i.a.createElement(f.a,{activeTab:this.state.activeTab},i.a.createElement(y.a,{className:"justify-content-center d-flex",tabId:"1"},i.a.createElement(P.a,{color:"primary",outline:!0,id:"uncontrolledPopover"},"Uncontrolled"),i.a.createElement(H.a,{placement:"top",target:"uncontrolledPopover"},i.a.createElement(O.a,null,"Uncontrolled Popover"),i.a.createElement(T.a,null,"Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."))),i.a.createElement(y.a,{className:"component-code",tabId:"2"},x)))))}}]),a}(i.a.Component),q=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(g.a,null,i.a.createElement(d.a,null,"Popover Positions"),i.a.createElement("div",{className:"views"},i.a.createElement(v.a,{tabs:!0},i.a.createElement(b.a,null,i.a.createElement(E.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},i.a.createElement(C.a,{size:15}))),i.a.createElement(b.a,null,i.a.createElement(E.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},i.a.createElement(N.a,{size:15})))))),i.a.createElement(h.a,null,i.a.createElement("p",null,"Use attribute ",i.a.createElement("code",null,"placement")," to place you popover at desired position."),i.a.createElement(f.a,{activeTab:this.state.activeTab},i.a.createElement(y.a,{tabId:"1"},i.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},i.a.createElement(P.a.Ripple,{color:"primary",outline:!0,id:"popTop"},"Top"),i.a.createElement(H.a,{placement:"top",target:"popTop"},i.a.createElement(O.a,null,"Popover Top"),i.a.createElement(T.a,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."))),i.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},i.a.createElement(P.a.Ripple,{color:"primary",outline:!0,id:"popRight"},"Right"),i.a.createElement(H.a,{placement:"right",target:"popRight"},i.a.createElement(O.a,null,"Popover Right"),i.a.createElement(T.a,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."))),i.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},i.a.createElement(P.a.Ripple,{color:"primary",outline:!0,id:"popBottom"},"Bottom"),i.a.createElement(H.a,{placement:"bottom",target:"popBottom"},i.a.createElement(O.a,null,"Popover Bottom"),i.a.createElement(T.a,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."))),i.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},i.a.createElement(P.a.Ripple,{color:"primary",outline:!0,id:"popLeft"},"Left"),i.a.createElement(H.a,{placement:"left",target:"popLeft"},i.a.createElement(O.a,null,"Popover Left"),i.a.createElement(T.a,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.")))),i.a.createElement(y.a,{className:"component-code",tabId:"2"},R)))))}}]),a}(i.a.Component),M=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(g.a,null,i.a.createElement(d.a,null,"Popover Triggers"),i.a.createElement("div",{className:"views"},i.a.createElement(v.a,{tabs:!0},i.a.createElement(b.a,null,i.a.createElement(E.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},i.a.createElement(C.a,{size:15}))),i.a.createElement(b.a,null,i.a.createElement(E.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},i.a.createElement(N.a,{size:15})))))),i.a.createElement(h.a,null,i.a.createElement("p",null,"Use attribute ",i.a.createElement("code",null,"trigger")," for various trigger options.Trigger each popover to see information about the trigger."),i.a.createElement(f.a,{activeTab:this.state.activeTab},i.a.createElement(y.a,{tabId:"1"},i.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},i.a.createElement(P.a.Ripple,{color:"primary",outline:!0,id:"popFocus"},"Focus"),i.a.createElement(H.a,{trigger:"focus",placement:"top",target:"popFocus"},i.a.createElement(O.a,null,"Focus Trigger"),i.a.createElement(T.a,null,"Focusing on the trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You cannot select this text as the popover will disappear when you try."))),i.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},i.a.createElement(P.a.Ripple,{color:"primary",outline:!0,id:"popClick"},"Click"),i.a.createElement(H.a,{trigger:"click",placement:"top",target:"popClick"},i.a.createElement(O.a,null,"Click Trigger"),i.a.createElement(T.a,null,"Clicking on the triggering element makes this popover appear. Clicking on it again will make it disappear. You can select this text, but clicking away (somewhere other than the triggering element) will not dismiss this popover."))),i.a.createElement("div",{className:"d-inline-block mb-1"},i.a.createElement(P.a.Ripple,{trigger:"legacy",color:"primary",outline:!0,id:"popLegacy"},"Legacy"),i.a.createElement(H.a,{placement:"top",target:"popLegacy"},i.a.createElement(O.a,null,"Legacy Trigger"),i.a.createElement(T.a,null,'Legacy is a reactstrap special trigger value (outside of bootstrap\'s spec/standard). Before reactstrap correctly supported click and focus, it had a hybrid which was very useful and has been brought back as trigger="legacy". One advantage of the legacy trigger is that it allows the popover text to be selected while also closing when clicking outside the triggering element and popover itself.')))),i.a.createElement(y.a,{className:"component-code",tabId:"2"},U)))))}}]),a}(i.a.Component),A=a(1136),D=a.n(A),F=(a(1135),function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){D.a.highlightAll()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{breadCrumbTitle:"Popovers",breadCrumbParent:"Components",breadCrumbActive:"Popovers"}),i.a.createElement(p.a,null,i.a.createElement(s.a,{md:"6",sm:"12"},i.a.createElement(L,null)),i.a.createElement(s.a,{md:"6",sm:"12"},i.a.createElement(S,null))),i.a.createElement(p.a,null,i.a.createElement(s.a,{sm:"12"},i.a.createElement(q,null)),i.a.createElement(s.a,{sm:"12"},i.a.createElement(M,null))))}}]),a}(i.a.Component));t.default=F}}]);
//# sourceMappingURL=212.a0adce6d.chunk.js.map
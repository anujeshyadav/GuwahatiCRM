(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[355],{3191:function(e,t,a){"use strict";a.r(t);var n=a(16),l=a(17),s=a(18),i=a(19),r=a(1),c=a.n(r),o=a(891),m=a(892),u=a(125),g=a(899),p=a(900),E=a(901),f=a(902),v=a(883),d=a(884),b=a(903),h=a(904),C=a(905),T=a(359),j=a(329),y=a(6),A=a.n(y),S=a(228),x=c.a.createElement("pre",null,c.a.createElement("code",{className:"language-jsx"},'import React from "react"\nimport AutoComplete from "./AutoCompleteBasic"\n\nclass AutoCompleteBasic extends React.Component {\n  state = {\n    suggestions: [\n      {\n        title: "React.js"\n      },\n      {\n        title: "Angular.js"\n      },\n      {\n        title: "Javascript"\n      }\n      ...\n    ]\n  }\n\n  render() {\n    return(\n        <AutoComplete suggestions={this.state.suggestions} \n        className="form-control" \n        filterKey="title" \n        suggestionLimit={4} \n        defaultSuggestions={true}\n      />\n    )}}\n\nexport default AutoCompleteBasic\n')),N=c.a.createElement("pre",null,c.a.createElement("code",{className:"language-jsx"},'import React from "react"\nimport AutoComplete from "./AutoCompleteBasic"\n\nclass AutoCompleteSections extends React.Component {\n  state = {\n    suggestions: [\n      {\n        groupTitle: "1970s",\n        data: [\n          {\n            title: "C",\n          }\n        ]\n      },\n      {\n        groupTitle: "1980s",\n        data: [\n          {\n            title: "C++",\n          },\n          {\n            title: "Perl",\n          }\n        ]\n      },\n      ...\n    ]\n  }\n\n  render() {\n    return(\n        <AutoComplete suggestions={this.state.suggestions} \n        suggestions={this.state.suggestions}\n        className="form-control"\n        filterKey="title"\n        filterHeaderKey="groupTitle"\n        grouped={true}\n      />\n    )}}\n\nexport default AutoCompleteSections\n')),k=c.a.createElement("pre",null,c.a.createElement("code",{className:"language-jsx"},'import React from "react"\nimport AutoComplete from "./AutoCompleteBasic"\n\nclass AutoCompleteAjax extends React.Component {\n  state = {\n    suggestions: []\n  }\n\n  componentDidMount() {\n    axios\n      .get("/api/autocomplete/data")\n      .then(response =>\n        this.setState({ suggestions: response.data.autoComplete })\n      )\n  }\n\n  render() {\n    return(\n        <AutoComplete suggestions={this.state.suggestions} \n        suggestions={this.state.suggestions}\n        className="form-control"\n        filterKey="title"\n        suggestionLimit={4}\n      />\n    )}}\n\nexport default AutoCompleteAjax\n')),O=c.a.createElement("pre",null,c.a.createElement("code",{className:"language-jsx"},'import React from "react"\nimport AutoComplete from "./AutoCompleteBasic"\nimport img1 from "../../../assets/img/portrait/small/avatar-s-1.jpg"\nimport img2 from "../../../assets/img/portrait/small/avatar-s-2.jpg"\nimport img3 from "../../../assets/img/portrait/small/avatar-s-3.jpg"      \nimport img4 from "../../../assets/img/portrait/small/avatar-s-4.jpg"      \nimport img5 from "../../../assets/img/portrait/small/avatar-s-5.jpg"      \nimport img6 from "../../../assets/img/portrait/small/avatar-s-6.jpg"      \n\nclass AutoCompleteRender extends React.Component {\n  state = {\n    suggestions: [\n      {\n        name: "Jake Shelton",\n        img: img1\n      },\n      {\n        name: "Edith Baldwin",\n        img: img2\n      },\n      {\n        name: "Jennifer Wolfe",\n        img: img3\n      },\n      {\n        name: "Emily Washington",\n        img: img4\n      },\n      {\n        name: "Heather Green",\n        img: img6\n      },\n      {\n        name: "Brian Moore",\n        img: img5\n      }\n    ]\n  }\n\n  render() {\n    return(\n        <AutoComplete\n          suggestions={this.state.suggestions}\n          className="form-control"\n          filterKey="name"\n          customRender={(\n            suggestion,\n            i,\n            filteredData,\n            activeSuggestion,\n            onSuggestionItemClick,\n            onSuggestionItemHover\n          ) => (\n            <li\n              className={classnames("suggestion-item", {\n                active:\n                  filteredData.indexOf(suggestion) === activeSuggestion\n              })}\n              key={i}\n              onMouseEnter={() =>\n                onSuggestionItemHover(filteredData.indexOf(suggestion))\n              }\n              onClick={e => {\n                onSuggestionItemClick(null, e)\n              }}\n            >\n              <img\n                src={suggestion.img}\n                alt={suggestion.name}\n                height="32"\n                width="32"\n                className="mr-1"\n              />\n              <span>{suggestion.name}</span>\n            </li>\n          )}\n        />\n    )}}\n\nexport default AutoCompleteRender\n')),R=c.a.createElement("pre",null,c.a.createElement("code",{className:"language-jsx"},'import React from "react"\nimport AutoComplete from "./AutoCompleteBasic"\n\nclass AutoCompleteDefaultSuggestions extends React.Component {\n  state = {\n    suggestions: [\n      {\n        title: "React.js"\n      },\n      {\n        title: "Angular.js"\n      },\n      {\n        title: "Javascript"\n      }\n      ...\n    ]\n  }\n\n  render() {\n    return(\n        <AutoComplete\n        suggestions={this.state.suggestions}\n        className="form-control"\n        filterKey="title"\n        suggestionLimit={4}\n        defaultSuggestions={true}\n      />\n    )}}\n\nexport default AutoCompleteDefaultSuggestions\n')),B=c.a.createElement("pre",null,c.a.createElement("code",{className:"language-jsx"},'import React from "react"\nimport AutoComplete from "./AutoCompleteBasic"\n\nclass AutoCompleteSearchLimit extends React.Component {\n  state = {\n    suggestions: [\n      {\n        title: "React.js"\n      },\n      {\n        title: "Angular.js"\n      },\n      {\n        title: "Javascript"\n      }\n      ...\n    ]\n  }\n\n  render() {\n    return(\n        <AutoComplete\n        suggestions={this.state.suggestions}\n        className="form-control"\n        filterKey="title"\n        suggestionLimit={2}\n      />\n    )}}\n\nexport default AutoCompleteSearchLimit\n')),w=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={activeTab:"1",suggestions:[{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(E.a,null,"Basic"),c.a.createElement("div",{className:"views"},c.a.createElement(f.a,{tabs:!0},c.a.createElement(v.a,null,c.a.createElement(d.a,{className:A()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},c.a.createElement(T.a,{size:15}))),c.a.createElement(v.a,null,c.a.createElement(d.a,{className:A()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},c.a.createElement(j.a,{size:15})))))),c.a.createElement(b.a,null,c.a.createElement(h.a,{activeTab:this.state.activeTab},c.a.createElement(C.a,{tabId:"1"},c.a.createElement(S.a,{suggestions:this.state.suggestions,className:"form-control",filterKey:"title",suggestionLimit:4,placeholder:"Type 'a'"})),c.a.createElement(C.a,{className:"component-code",tabId:"2"},x)))))}}]),a}(c.a.Component),I=a(64),L=a.n(I),P=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={activeTab:"1",suggestions:[]},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;L.a.get("/api/autocomplete/data").then((function(t){return e.setState({suggestions:t.data.autoComplete})}))}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(E.a,null,"Ajax"),c.a.createElement("div",{className:"views"},c.a.createElement(f.a,{tabs:!0},c.a.createElement(v.a,null,c.a.createElement(d.a,{className:A()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},c.a.createElement(T.a,{size:15}))),c.a.createElement(v.a,null,c.a.createElement(d.a,{className:A()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},c.a.createElement(j.a,{size:15})))))),c.a.createElement(b.a,null,c.a.createElement(h.a,{activeTab:this.state.activeTab},c.a.createElement(C.a,{tabId:"1"},c.a.createElement(S.a,{suggestions:this.state.suggestions,className:"form-control",filterKey:"title",suggestionLimit:4,placeholder:"Search for any of the top 250 IMDB movies"})),c.a.createElement(C.a,{className:"component-code",tabId:"2"},k)))))}}]),a}(c.a.Component),H=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={activeTab:"1",suggestions:[{groupTitle:"1970s",data:[{title:"C"}]},{groupTitle:"1980s",data:[{title:"C++"},{title:"Perl"}]},{groupTitle:"1990s",data:[{title:"Haskell"},{title:"Python"},{title:"Java"},{title:"Javascript"},{title:"PHP"},{title:"Ruby"}]},{groupTitle:"2000s",data:[{title:"C#"},{title:"Scala"},{title:"Clojure"},{title:"Go"}]},{groupTitle:"2010s",data:[{title:"Elm"}]}]},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(E.a,null,"Sections"),c.a.createElement("div",{className:"views"},c.a.createElement(f.a,{tabs:!0},c.a.createElement(v.a,null,c.a.createElement(d.a,{className:A()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},c.a.createElement(T.a,{size:15}))),c.a.createElement(v.a,null,c.a.createElement(d.a,{className:A()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},c.a.createElement(j.a,{size:15})))))),c.a.createElement(b.a,null,c.a.createElement(h.a,{activeTab:this.state.activeTab},c.a.createElement(C.a,{tabId:"1"},c.a.createElement(S.a,{suggestions:this.state.suggestions,className:"form-control",filterKey:"title",filterHeaderKey:"groupTitle",grouped:!0,placeholder:"Type 'c'"})),c.a.createElement(C.a,{className:"component-code",tabId:"2"},N)))))}}]),a}(c.a.Component),J=a(127),K=a.n(J),z=a(92),D=a.n(z),M=a(80),F=a.n(M),W=a(102),G=a.n(W),V=a(226),Z=a.n(V),$=a(68),q=a.n($),Q=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={activeTab:"1",suggestions:[{name:"Jake Shelton",img:K.a},{name:"Edith Baldwin",img:D.a},{name:"Jennifer Wolfe",img:F.a},{name:"Emily Washington",img:G.a},{name:"Heather Green",img:q.a},{name:"Brian Moore",img:Z.a}]},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(E.a,null,"Custom Render"),c.a.createElement("div",{className:"views"},c.a.createElement(f.a,{tabs:!0},c.a.createElement(v.a,null,c.a.createElement(d.a,{className:A()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},c.a.createElement(T.a,{size:15}))),c.a.createElement(v.a,null,c.a.createElement(d.a,{className:A()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},c.a.createElement(j.a,{size:15})))))),c.a.createElement(b.a,null,c.a.createElement(h.a,{activeTab:this.state.activeTab},c.a.createElement(C.a,{tabId:"1"},c.a.createElement(S.a,{suggestions:this.state.suggestions,className:"form-control",filterKey:"name",placeholder:"Type 'a'",customRender:function(e,t,a,n,l,s){return c.a.createElement("li",{className:A()("suggestion-item",{active:a.indexOf(e)===n}),key:t,onMouseEnter:function(){return s(a.indexOf(e))},onClick:function(e){l(null,e)}},c.a.createElement("img",{src:e.img,alt:e.name,height:"32",width:"32",className:"mr-1"}),c.a.createElement("span",null,e.name))}})),c.a.createElement(C.a,{className:"component-code",tabId:"2"},O)))))}}]),a}(c.a.Component),U=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={activeTab:"1",suggestions:[{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(E.a,null,"Default Suggestions"),c.a.createElement("div",{className:"views"},c.a.createElement(f.a,{tabs:!0},c.a.createElement(v.a,null,c.a.createElement(d.a,{className:A()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},c.a.createElement(T.a,{size:15}))),c.a.createElement(v.a,null,c.a.createElement(d.a,{className:A()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},c.a.createElement(j.a,{size:15})))))),c.a.createElement(b.a,null,c.a.createElement(h.a,{activeTab:this.state.activeTab},c.a.createElement(C.a,{tabId:"1"},c.a.createElement(S.a,{suggestions:this.state.suggestions,className:"form-control",filterKey:"title",suggestionLimit:4,defaultSuggestions:!0,placeholder:"Type 'a'"})),c.a.createElement(C.a,{className:"component-code",tabId:"2"},R)))))}}]),a}(c.a.Component),X=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={activeTab:"1",suggestions:[{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{className:"mb-sm-0 mb-5"},c.a.createElement(p.a,null,c.a.createElement(E.a,null,"Search Limit"),c.a.createElement("div",{className:"views"},c.a.createElement(f.a,{tabs:!0},c.a.createElement(v.a,null,c.a.createElement(d.a,{className:A()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},c.a.createElement(T.a,{size:15}))),c.a.createElement(v.a,null,c.a.createElement(d.a,{className:A()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},c.a.createElement(j.a,{size:15})))))),c.a.createElement(b.a,{className:"pb-sm-2 pb-5"},c.a.createElement(h.a,{activeTab:this.state.activeTab},c.a.createElement(C.a,{tabId:"1"},c.a.createElement(S.a,{suggestions:this.state.suggestions,className:"form-control",filterKey:"title",suggestionLimit:2,placeholder:"Type 'a'"})),c.a.createElement(C.a,{className:"component-code",tabId:"2"},B)))))}}]),a}(c.a.Component),Y=a(998),_=a.n(Y),ee=(a(997),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){_.a.highlightAll()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{breadCrumbTitle:"Auto Complete",breadCrumbParent:"Extra Components",breadCrumbActive:"Auto Complete"}),c.a.createElement(o.a,null,c.a.createElement(m.a,{xl:"6",lg:"12"},c.a.createElement(w,null)),c.a.createElement(m.a,{xl:"6",lg:"12"},c.a.createElement(H,null)),c.a.createElement(m.a,{xl:"6",lg:"12"},c.a.createElement(P,null)),c.a.createElement(m.a,{xl:"6",lg:"12"},c.a.createElement(Q,null)),c.a.createElement(m.a,{xl:"6",lg:"12"},c.a.createElement(U,null)),c.a.createElement(m.a,{xl:"6",lg:"12"},c.a.createElement(X,null))))}}]),a}(c.a.Component));t.default=ee},997:function(e,t){!function(e){var t=e.util.clone(e.languages.javascript),a="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function n(e,t){return e=e.replace(/<S>/g,(function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"})).replace(/<BRACES>/g,(function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"})).replace(/<SPREAD>/g,(function(){return a})),RegExp(e,t)}a=n(a).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=n("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:n("<SPREAD>"),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:n("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var l=function e(t){return t?"string"==typeof t?t:"string"==typeof t.content?t.content:t.content.map(e).join(""):""},s=function t(a){for(var n=[],s=0;s<a.length;s++){var i=a[s],r=!1;if("string"!=typeof i&&("tag"===i.type&&i.content[0]&&"tag"===i.content[0].type?"</"===i.content[0].content[0].content?n.length>0&&n[n.length-1].tagName===l(i.content[0].content[1])&&n.pop():"/>"===i.content[i.content.length-1].content||n.push({tagName:l(i.content[0].content[1]),openedBraces:0}):n.length>0&&"punctuation"===i.type&&"{"===i.content?n[n.length-1].openedBraces++:n.length>0&&n[n.length-1].openedBraces>0&&"punctuation"===i.type&&"}"===i.content?n[n.length-1].openedBraces--:r=!0),(r||"string"==typeof i)&&n.length>0&&0===n[n.length-1].openedBraces){var c=l(i);s<a.length-1&&("string"==typeof a[s+1]||"plain-text"===a[s+1].type)&&(c+=l(a[s+1]),a.splice(s+1,1)),s>0&&("string"==typeof a[s-1]||"plain-text"===a[s-1].type)&&(c=l(a[s-1])+c,a.splice(s-1,1),s--),a[s]=new e.Token("plain-text",c,null,c)}i.content&&"string"!=typeof i.content&&t(i.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||s(e.tokens)}))}(Prism)}}]);
//# sourceMappingURL=355.f4772300.chunk.js.map
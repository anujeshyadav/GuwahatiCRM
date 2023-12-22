(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[296],{1011:function(e,a){!function(e){var a=e.util.clone(e.languages.javascript),n="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function t(e,a){return e=e.replace(/<S>/g,(function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"})).replace(/<BRACES>/g,(function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"})).replace(/<SPREAD>/g,(function(){return n})),RegExp(e,a)}n=t(n).source,e.languages.jsx=e.languages.extend("markup",a),e.languages.jsx.tag.pattern=t("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=a.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:t("<SPREAD>"),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:t("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var l=function e(a){return a?"string"==typeof a?a:"string"==typeof a.content?a.content:a.content.map(e).join(""):""},i=function a(n){for(var t=[],i=0;i<n.length;i++){var c=n[i],r=!1;if("string"!=typeof c&&("tag"===c.type&&c.content[0]&&"tag"===c.content[0].type?"</"===c.content[0].content[0].content?t.length>0&&t[t.length-1].tagName===l(c.content[0].content[1])&&t.pop():"/>"===c.content[c.content.length-1].content||t.push({tagName:l(c.content[0].content[1]),openedBraces:0}):t.length>0&&"punctuation"===c.type&&"{"===c.content?t[t.length-1].openedBraces++:t.length>0&&t[t.length-1].openedBraces>0&&"punctuation"===c.type&&"}"===c.content?t[t.length-1].openedBraces--:r=!0),(r||"string"==typeof c)&&t.length>0&&0===t[t.length-1].openedBraces){var o=l(c);i<n.length-1&&("string"==typeof n[i+1]||"plain-text"===n[i+1].type)&&(o+=l(n[i+1]),n.splice(i+1,1)),i>0&&("string"==typeof n[i-1]||"plain-text"===n[i-1].type)&&(o=l(n[i-1])+o,n.splice(i-1,1),i--),n[i]=new e.Token("plain-text",o,null,o)}c.content&&"string"!=typeof c.content&&a(c.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||i(e.tokens)}))}(Prism)},3240:function(e,a,n){"use strict";n.r(a);var t=n(16),l=n(17),i=n(18),c=n(19),r=n(1),o=n.n(r),s=n(901),d=n(902),m=n(132),u=n(909),g=n(910),p=n(911),h=n(912),b=n(893),f=n(894),E=n(913),y=n(914),M=n(915),k=n(898),v=n(8),w=n.n(v),j=n(368),C=n(338),T=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Media} from "reactstrap"\n\nclass MediaLeft extends React.Component {\n\n  render() {\n    return(\n      <div className="media-list">\n      <Media>\n        <Media left href="#">\n          <Media\n            object\n            src={mediaImg1}\n            height="64"\n            width="64"\n            alt="Generic placeholder image"\n          />\n        </Media>\n        <Media body>\n          <Media heading>Cookie candy</Media>\n          Cookie candy drag\xe9e marzipan gingerbread pie pudding.\n          Brownie fruitcake wafer bonbon gummi bears apple pie.\n          Brownie lemon drops chocolate cake donut croissant cotton\n          candy.\n        </Media>\n      </Media>\n\n      <Media>\n        <Media left href="#">\n          <Media\n            object\n            src={mediaImg2}\n            height="64"\n            width="64"\n            alt="Generic placeholder image"\n          />\n        </Media>\n        <Media body>\n          <Media heading>Cookie candy</Media>\n          Cookie candy drag\xe9e marzipan gingerbread pie pudding.\n          Brownie fruitcake wafer bonbon gummi bears apple pie.\n          Brownie lemon drops chocolate cake donut croissant cotton\n          candy.\n        </Media>\n      </Media>\n\n      <Media>\n        <Media left href="#">\n          <Media\n            object\n            src={mediaImg3}\n            height="64"\n            width="64"\n            alt="Generic placeholder image"\n          />\n        </Media>\n        <Media body>\n          <Media heading>Cookie candy</Media>\n          Cookie candy drag\xe9e marzipan gingerbread pie pudding.\n          Brownie fruitcake wafer bonbon gummi bears apple pie.\n          Brownie lemon drops chocolate cake donut croissant cotton\n          candy.\n        </Media>\n      </Media>\n    </div>\n    )\n  }\n}\nexport default MediaLeft\n')),N=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Media} from "reactstrap"\n\nclass MediaRight extends React.Component {\n\n  render() {\n    return(\n      <div className="media-list">\n      <Media>\n        <Media body>\n          <Media heading>Oat cake</Media>\n          Oat cake topping oat cake jelly souffl\xe9 donut jelly-o\n          tootsie roll. Candy sweet cake. Tiramisu cookie toffee\n          donut. Chocolate pie croissant gummi bears muffin dessert\n          chocolate.\n        </Media>\n        <Media right href="#">\n          <Media\n            className="rounded-circle"\n            object\n            src={mediaImg1}\n            height="64"\n            width="64"\n            alt="Generic placeholder image"\n          />\n        </Media>\n      </Media>\n\n      <Media>\n        <Media body>\n          <Media heading>Jelly chocolate cake</Media>\n          Jelly chocolate cake lemon drops halvah drag\xe9e caramels\n          jelly-o biscuit. Fruitcake jelly beans marzipan sesame\n          snaps.Jelly beans cake chocolate cake gummi bears\n          lollipop.\n        </Media>\n        <Media right href="#">\n          <Media\n            className="rounded-circle"\n            object\n            src={mediaImg2}\n            height="64"\n            width="64"\n            alt="Generic placeholder image"\n          />\n        </Media>\n      </Media>\n\n      <Media>\n        <Media body>\n          <Media heading>Pudding marshmallow</Media>Pudding\n          marshmallow cheesecake. Chocolate cake apple pie jelly-o\n          bear claw ice cream sugar plum biscuit. Lemon drops\n          brownie biscuit jelly-o biscuit gummies.\n        </Media>\n        <Media right href="#">\n          <Media\n            className="rounded-circle"\n            object\n            src={mediaImg3}\n            height="64"\n            width="64"\n            alt="Generic placeholder image"\n          />\n        </Media>\n      </Media>\n    </div>\n    )\n  }\n}\nexport default MediaRight\n')),B=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Media} from "reactstrap"\n\nclass mediaLeftBordered extends React.Component {\n\n  render() {\n    return(\n      <div className="media-list media-bordered">\n      <Media>\n        <Media left href="#">\n          <Media\n            object\n            src={mediaImg1}\n            height="64"\n            width="64"\n            alt="Generic placeholder image"\n          />\n        </Media>\n        <Media body>\n          <Media heading>Cookie candy</Media>\n          Cookie candy drag\xe9e marzipan gingerbread pie pudding.\n          Brownie fruitcake wafer bonbon gummi bears apple pie.\n          Brownie lemon drops chocolate cake donut croissant cotton\n          candy.\n        </Media>\n      </Media>\n\n      <Media>\n        <Media left href="#">\n          <Media\n            object\n            src={mediaImg2}\n            height="64"\n            width="64"\n            alt="Generic placeholder image"\n          />\n        </Media>\n        <Media body>\n          <Media heading>Cookie candy</Media>\n          Cookie candy drag\xe9e marzipan gingerbread pie pudding.\n          Brownie fruitcake wafer bonbon gummi bears apple pie.\n          Brownie lemon drops chocolate cake donut croissant cotton\n          candy.\n        </Media>\n      </Media>\n\n      <Media>\n        <Media left href="#">\n          <Media\n            object\n            src={mediaImg3}\n            height="64"\n            width="64"\n            alt="Generic placeholder image"\n          />\n        </Media>\n        <Media body>\n          <Media heading>Cookie candy</Media>\n          Cookie candy drag\xe9e marzipan gingerbread pie pudding.\n          Brownie fruitcake wafer bonbon gummi bears apple pie.\n          Brownie lemon drops chocolate cake donut croissant cotton\n          candy.\n        </Media>\n      </Media>\n    </div>\n    )\n  }\n}\nexport default mediaLeftBordered\n')),x=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Media} from "reactstrap"\n\nclass MediaRightBordered extends React.Component {\n\n  render() {\n    return(\n      <div className="media-list media-bordered">\n      <Media>\n        <Media body>\n          <Media heading>Oat cake</Media>\n          Oat cake topping oat cake jelly souffl\xe9 donut jelly-o\n          tootsie roll. Candy sweet cake. Tiramisu cookie toffee\n          donut. Chocolate pie croissant gummi bears muffin dessert\n          chocolate.\n        </Media>\n        <Media right href="#">\n          <Media\n            className="rounded-circle"\n            object\n            src={mediaImg1}\n            height="64"\n            width="64"\n            alt="Generic placeholder image"\n          />\n        </Media>\n      </Media>\n\n      <Media>\n        <Media body>\n          <Media heading>Jelly chocolate cake</Media>\n          Jelly chocolate cake lemon drops halvah drag\xe9e caramels\n          jelly-o biscuit. Fruitcake jelly beans marzipan sesame\n          snaps.Jelly beans cake chocolate cake gummi bears\n          lollipop.\n        </Media>\n        <Media right href="#">\n          <Media\n            className="rounded-circle"\n            object\n            src={mediaImg2}\n            height="64"\n            width="64"\n            alt="Generic placeholder image"\n          />\n        </Media>\n      </Media>\n\n      <Media>\n        <Media body>\n          <Media heading>Pudding marshmallow</Media>Pudding\n          marshmallow cheesecake. Chocolate cake apple pie jelly-o\n          bear claw ice cream sugar plum biscuit. Lemon drops\n          brownie biscuit jelly-o biscuit gummies.\n        </Media>\n        <Media right href="#">\n          <Media\n            className="rounded-circle"\n            object\n            src={mediaImg3}\n            height="64"\n            width="64"\n            alt="Generic placeholder image"\n          />\n        </Media>\n      </Media>\n    </div>\n    )\n  }\n}\nexport default MediaRightBordered\n')),O=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Media} from "reactstrap"\n\nclass MediaNested extends React.Component {\n\n  render() {\n    return(\n      <div className="media-list">\n        <Media>\n          <Media left href="#">\n            <Media\n              object\n              src={mediaImg1}\n              alt="Generic placeholder image"\n            />\n          </Media>\n        <Media body>\n          <Media heading>Media heading</Media>\n          Cras sit amet nibh libero, in gravida nulla. Nulla vel\n          metus scelerisque ante sollicitudin commodo. Cras purus\n          odio, vestibulum in vulputate at, tempus viverra turpis.\n          Fusce condimentum nunc ac nisi vulputate fringilla. Donec\n          lacinia congue felis in faucibus.\n          <Media>\n            <Media left href="#">\n              <Media\n                object\n                src={mediaImg2}\n                alt="Generic placeholder image"\n              />\n            </Media>\n            <Media body>\n              <Media heading>Nested media heading</Media>\n              Cras sit amet nibh libero, in gravida nulla. Nulla vel\n              metus scelerisque ante sollicitudin commodo. Cras\n              purus odio, vestibulum in vulputate at, tempus viverra\n              turpis. Fusce condimentum nunc ac nisi vulputate\n              fringilla. Donec lacinia congue felis in faucibus.\n            </Media>\n          </Media>\n        </Media>\n      </Media>\n    </div>\n    )\n  }\n}\nexport default MediaNested\n')),G=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Media} from "reactstrap"\n\nclass MediaVertical extends React.Component {\n\n  render() {\n    return(\n      <div className="media-list">\n        <Media>\n          <Media left href="#">\n            <Media\n              object\n              src={mediaImg1}\n              height="64"\n              width="64"\n              alt="Generic placeholder image"\n            />\n          </Media>\n          <Media body>\n            <Media heading>Cookie candy</Media>\n            <p>\n              Chocolate bar apple pie lollipop pastry candy canes.\n              Candy souffl\xe9 brownie toffee tootsie roll. Brownie lemon\n              drops chocolate cake donut croissant cotton candy ice\n              cream. Chocolate pudding jelly beans powder carrot cake\n              pastry. Sweet candy drag\xe9e cake brownie cheesecake jelly\n              beans tart lemon drops. Liquorice cake fruitcake drag\xe9e\n              sesame snaps candy canes biscuit pastry.\n            </p>\n            <p>\n              Cookie caramels brownie carrot cake macaroon brownie\n              pastry. Donut powder croissant tootsie roll cake\n              cupcake. Cake tart icing jelly-o ice cream tootsie roll\n              bear claw toffee brownie. Sugar plum danish muffin gummi\n              bears. Bonbon chocolate bar candy canes sugar plum pie\n              gingerbread wafer chupa chups gummi bears. Carrot cake\n              oat cake jujubes cookie. Marzipan topping jelly brownie\n              bear claw. Bonbon gummies fruitcake liquorice tart\n              sesame snaps.\n            </p>\n          </Media>\n        </Media>\n\n        <Media>\n          <Media left href="#" className="align-self-center">\n            <Media\n              object\n              src={mediaImg2}\n              height="64"\n              width="64"\n              alt="Generic placeholder image"\n              middle\n            />\n          </Media>\n          <Media body>\n            <Media heading>Tootsie roll dessert</Media>\n            <p>\n              Tootsie roll dessert tart candy canes ice cream\n              gingerbread cookie. Jelly jelly-o bear claw bear claw\n              halvah. Biscuit icing pastry tootsie roll gingerbread\n              croissant chupa chups.\n            </p>\n            <p>\n              Drag\xe9e topping chocolate drag\xe9e icing gingerbread. Ice\n              cream jujubes pie sweet roll sweet roll marshmallow\n              powder. Cotton candy dessert apple pie chocolate cake\n              dessert lemon drops topping gingerbread biscuit. Sugar\n              plum tootsie roll sweet gummi bears souffl\xe9 cake gummies\n              lollipop jelly beans. Gummies sugar plum apple pie apple\n              pie cake bear claw. Jelly beans gingerbread biscuit\n              lollipop.\n            </p>\n          </Media>\n        </Media>\n\n      <Media>\n        <Media left href="#" className="align-self-end">\n          <Media\n            object\n            src={mediaImg3}\n            height="64"\n            width="64"\n            alt="Generic placeholder image"\n            bottom\n          />\n        </Media>\n        <Media body>\n          <Media heading>Jelly chocolate cake</Media>\n          <p>\n            Jelly chocolate cake lemon drops halvah drag\xe9e caramels\n            jelly-o biscuit. Fruitcake jelly beans marzipan sesame\n            snaps.Jelly beans cake chocolate cake gummi bears\n            lollipop.\n          </p>\n          <p>\n            Sweet sesame snaps drag\xe9e chocolate tiramisu cotton\n            candy sweet roll bonbon dessert. Chocolate cake tiramisu\n            drag\xe9e. Carrot cake pudding marshmallow fruitcake carrot\n            cake. Cotton candy pastry chocolate bar. Apple pie\n            sesame snaps macaroon muffin cookie toffee bonbon\n            gummies candy canes. Souffl\xe9 chocolate bar souffl\xe9 tart\n            fruitcake muffin. Macaroon sweet roll apple pie jelly\n            beans powder pudding.\n          </p>\n        </Media>\n      </Media>\n    </div>\n    )\n  }\n}\nexport default MediaVertical\n')),I=n(85),J=n.n(I),z=n(109),S=n.n(z),R=n(235),A=n.n(R),F=function(e){Object(i.a)(n,e);var a=Object(c.a)(n);function n(){var e;Object(t.a)(this,n);for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null,o.a.createElement(g.a,null,o.a.createElement(p.a,null,"Left Aligned Media Objects"),o.a.createElement("div",{className:"views"},o.a.createElement(h.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(f.a,{className:w()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(j.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(f.a,{className:w()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(C.a,{size:15})))))),o.a.createElement(E.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,"left")," attribute with media tag to align you media to left."),o.a.createElement(y.a,{activeTab:this.state.activeTab},o.a.createElement(M.a,{tabId:"1"},o.a.createElement("div",{className:"media-list"},o.a.createElement(k.a,null,o.a.createElement(k.a,{left:!0,href:"#"},o.a.createElement(k.a,{object:!0,src:J.a,height:"64",width:"64",alt:"Generic placeholder image"})),o.a.createElement(k.a,{body:!0},o.a.createElement(k.a,{heading:!0},"Cookie candy"),"Cookie candy drag\xe9e marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie. Brownie lemon drops chocolate cake donut croissant cotton candy.")),o.a.createElement(k.a,null,o.a.createElement(k.a,{left:!0,href:"#"},o.a.createElement(k.a,{object:!0,src:S.a,height:"64",width:"64",alt:"Generic placeholder image"})),o.a.createElement(k.a,{body:!0},o.a.createElement(k.a,{heading:!0},"Tootsie roll dessert"),"Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah. Biscuit icing pastry tootsie roll gingerbread croissant chupa chups.")),o.a.createElement(k.a,null,o.a.createElement(k.a,{left:!0,href:"#"},o.a.createElement(k.a,{object:!0,src:A.a,height:"64",width:"64",alt:"Generic placeholder image"})),o.a.createElement(k.a,{body:!0},o.a.createElement(k.a,{heading:!0},"Jelly chocolate cake"),"Jelly chocolate cake lemon drops halvah drag\xe9e caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly beans cake chocolate cake gummi bears lollipop.")))),o.a.createElement(M.a,{className:"component-code",tabId:"2"},T)))))}}]),n}(o.a.Component),P=n(136),D=n.n(P),L=n(71),q=n.n(L),U=n(238),W=n.n(U),V=function(e){Object(i.a)(n,e);var a=Object(c.a)(n);function n(){var e;Object(t.a)(this,n);for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null,o.a.createElement(g.a,null,o.a.createElement(p.a,null,"Right Aligned Media With Round Images"),o.a.createElement("div",{className:"views"},o.a.createElement(h.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(f.a,{className:w()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(j.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(f.a,{className:w()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(C.a,{size:15})))))),o.a.createElement(E.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,"right")," attribute with media tag to align you media to right."),o.a.createElement(y.a,{activeTab:this.state.activeTab},o.a.createElement(M.a,{tabId:"1"},o.a.createElement("div",{className:"media-list"},o.a.createElement(k.a,null,o.a.createElement(k.a,{body:!0},o.a.createElement(k.a,{heading:!0},"Oat cake"),"Oat cake topping oat cake jelly souffl\xe9 donut jelly-o tootsie roll. Candy sweet cake. Tiramisu cookie toffee donut. Chocolate pie croissant gummi bears muffin dessert chocolate."),o.a.createElement(k.a,{right:!0,href:"#"},o.a.createElement(k.a,{className:"rounded-circle",object:!0,src:D.a,height:"64",width:"64",alt:"Generic placeholder image"}))),o.a.createElement(k.a,null,o.a.createElement(k.a,{body:!0},o.a.createElement(k.a,{heading:!0},"Jelly chocolate cake"),"Jelly chocolate cake lemon drops halvah drag\xe9e caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly beans cake chocolate cake gummi bears lollipop Fruitcake."),o.a.createElement(k.a,{right:!0,href:"#"},o.a.createElement(k.a,{className:"rounded-circle",object:!0,src:q.a,height:"64",width:"64",alt:"Generic placeholder image"}))),o.a.createElement(k.a,null,o.a.createElement(k.a,{body:!0},o.a.createElement(k.a,{heading:!0},"Pudding marshmallow"),"Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon drops brownie biscuit jelly-o biscuit gummies."),o.a.createElement(k.a,{right:!0,href:"#"},o.a.createElement(k.a,{className:"rounded-circle",object:!0,src:W.a,height:"64",width:"64",alt:"Generic placeholder image"}))))),o.a.createElement(M.a,{className:"component-code",tabId:"2"},N)))))}}]),n}(o.a.Component),Z=n(174),$=n.n(Z),H=n(138),K=n.n(H),Q=n(175),X=n.n(Q),Y=function(e){Object(i.a)(n,e);var a=Object(c.a)(n);function n(){var e;Object(t.a)(this,n);for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null,o.a.createElement(g.a,null,o.a.createElement(p.a,null,"Left Aligned Media Bordered"),o.a.createElement("div",{className:"views"},o.a.createElement(h.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(f.a,{className:w()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(j.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(f.a,{className:w()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(C.a,{size:15})))))),o.a.createElement(E.a,null,o.a.createElement("p",null,"Wrap your medias with ",o.a.createElement("code",null,".media-bordered")," to create a bordered media."),o.a.createElement(y.a,{activeTab:this.state.activeTab},o.a.createElement(M.a,{tabId:"1"},o.a.createElement("div",{className:"media-list media-bordered"},o.a.createElement(k.a,null,o.a.createElement(k.a,{left:!0,href:"#"},o.a.createElement(k.a,{object:!0,src:$.a,height:"64",width:"64",alt:"Generic placeholder image"})),o.a.createElement(k.a,{body:!0},o.a.createElement(k.a,{heading:!0},"Cookie candy"),"Cookie candy drag\xe9e marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie. Brownie lemon drops chocolate cake donut croissant cotton candy.")),o.a.createElement(k.a,null,o.a.createElement(k.a,{left:!0,href:"#"},o.a.createElement(k.a,{object:!0,src:K.a,height:"64",width:"64",alt:"Generic placeholder image"})),o.a.createElement(k.a,{body:!0},o.a.createElement(k.a,{heading:!0},"Tootsie roll dessert"),"Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah. Biscuit icing pastry tootsie roll gingerbread croissant chupa chups.")),o.a.createElement(k.a,null,o.a.createElement(k.a,{left:!0,href:"#"},o.a.createElement(k.a,{object:!0,src:X.a,height:"64",width:"64",alt:"Generic placeholder image"})),o.a.createElement(k.a,{body:!0},o.a.createElement(k.a,{heading:!0},"Jelly chocolate cake"),"Jelly chocolate cake lemon drops halvah drag\xe9e caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly beans cake chocolate cake gummi bears lollipop.")))),o.a.createElement(M.a,{className:"component-code",tabId:"2"},B)))))}}]),n}(o.a.Component),_=n(99),ee=n.n(_),ae=n(648),ne=n.n(ae),te=n(142),le=n.n(te),ie=function(e){Object(i.a)(n,e);var a=Object(c.a)(n);function n(){var e;Object(t.a)(this,n);for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null,o.a.createElement(g.a,null,o.a.createElement(p.a,null,"Right Aligned Media Border"),o.a.createElement("div",{className:"views"},o.a.createElement(h.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(f.a,{className:w()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(j.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(f.a,{className:w()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(C.a,{size:15})))))),o.a.createElement(E.a,null,o.a.createElement("p",null,"Wrap your medias with ",o.a.createElement("code",null,".media-bordered")," to create a bordered media."),o.a.createElement(y.a,{activeTab:this.state.activeTab},o.a.createElement(M.a,{tabId:"1"},o.a.createElement("div",{className:"media-list media-bordered"},o.a.createElement(k.a,null,o.a.createElement(k.a,{body:!0},o.a.createElement(k.a,{heading:!0},"Oat cake"),"Oat cake topping oat cake jelly souffl\xe9 donut jelly-o tootsie roll. Candy sweet cake. Tiramisu cookie toffee donut. Chocolate pie croissant gummi bears muffin dessert chocolate."),o.a.createElement(k.a,{right:!0,href:"#"},o.a.createElement(k.a,{className:"rounded-circle",object:!0,src:ee.a,height:"64",width:"64",alt:"Generic placeholder image"}))),o.a.createElement(k.a,null,o.a.createElement(k.a,{body:!0},o.a.createElement(k.a,{heading:!0},"Jelly chocolate cake"),"Jelly chocolate cake lemon drops halvah drag\xe9e caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly beans cake chocolate cake gummi bears lollipop Fruitcake."),o.a.createElement(k.a,{right:!0,href:"#"},o.a.createElement(k.a,{className:"rounded-circle",object:!0,src:ne.a,height:"64",width:"64",alt:"Generic placeholder image"}))),o.a.createElement(k.a,null,o.a.createElement(k.a,{body:!0},o.a.createElement(k.a,{heading:!0},"Pudding marshmallow"),"Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon drops brownie biscuit jelly-o biscuit gummies."),o.a.createElement(k.a,{right:!0,href:"#"},o.a.createElement(k.a,{className:"rounded-circle",object:!0,src:le.a,height:"64",width:"64",alt:"Generic placeholder image"}))))),o.a.createElement(M.a,{className:"component-code",tabId:"2"},x)))))}}]),n}(o.a.Component),ce=n(97),re=n.n(ce),oe=function(e){Object(i.a)(n,e);var a=Object(c.a)(n);function n(){var e;Object(t.a)(this,n);for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null,o.a.createElement(g.a,null,o.a.createElement(p.a,null,"Nested Media Objects"),o.a.createElement("div",{className:"views"},o.a.createElement(h.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(f.a,{className:w()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(j.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(f.a,{className:w()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(C.a,{size:15})))))),o.a.createElement(E.a,null,o.a.createElement("p",null,"Add an extra media inside of your ",o.a.createElement("code",null,"MediaBody")," to create a nested media."),o.a.createElement(y.a,{activeTab:this.state.activeTab},o.a.createElement(M.a,{tabId:"1"},o.a.createElement("div",{className:"media-list"},o.a.createElement(k.a,null,o.a.createElement(k.a,{left:!0,href:"#"},o.a.createElement(k.a,{object:!0,src:D.a,alt:"Generic placeholder image",height:"64",width:"64"})),o.a.createElement(k.a,{body:!0},o.a.createElement(k.a,{heading:!0},"Media heading"),"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",o.a.createElement(k.a,null,o.a.createElement(k.a,{left:!0,href:"#"},o.a.createElement(k.a,{object:!0,src:re.a,alt:"Generic placeholder image",height:"64",width:"64"})),o.a.createElement(k.a,{body:!0},o.a.createElement(k.a,{heading:!0},"Nested media heading"),"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.")))))),o.a.createElement(M.a,{className:"component-code",tabId:"2"},O)))))}}]),n}(o.a.Component),se=function(e){Object(i.a)(n,e);var a=Object(c.a)(n);function n(){var e;Object(t.a)(this,n);for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null,o.a.createElement(g.a,null,o.a.createElement(p.a,null,"Media alignment"),o.a.createElement("div",{className:"views"},o.a.createElement(h.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(f.a,{className:w()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(j.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(f.a,{className:w()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(C.a,{size:15})))))),o.a.createElement(E.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,".align-self-[center/end]")," classes to vertically align your media"),o.a.createElement(y.a,{activeTab:this.state.activeTab},o.a.createElement(M.a,{tabId:"1"},o.a.createElement("div",{className:"media-list media-bordered"},o.a.createElement(k.a,null,o.a.createElement(k.a,{left:!0,href:"#"},o.a.createElement(k.a,{object:!0,src:K.a,height:"64",width:"64",alt:"Generic placeholder image"})),o.a.createElement(k.a,{body:!0},o.a.createElement(k.a,{heading:!0},"Cookie candy"),o.a.createElement("p",null,"Chocolate bar apple pie lollipop pastry candy canes. Candy souffl\xe9 brownie toffee tootsie roll. Brownie lemon drops chocolate cake donut croissant cotton candy ice cream. Chocolate pudding jelly beans powder carrot cake pastry. Sweet candy drag\xe9e cake brownie cheesecake jelly beans tart lemon drops. Liquorice cake fruitcake drag\xe9e sesame snaps candy canes biscuit pastry."),o.a.createElement("p",null,"Cookie caramels brownie carrot cake macaroon brownie pastry. Donut powder croissant tootsie roll cake cupcake. Cake tart icing jelly-o ice cream tootsie roll bear claw toffee brownie. Sugar plum danish muffin gummi bears. Bonbon chocolate bar candy canes sugar plum pie gingerbread wafer chupa chups gummi bears. Carrot cake oat cake jujubes cookie. Marzipan topping jelly brownie bear claw. Bonbon gummies fruitcake liquorice tart sesame snaps."))),o.a.createElement(k.a,null,o.a.createElement(k.a,{left:!0,href:"#",className:"align-self-center"},o.a.createElement(k.a,{object:!0,src:re.a,height:"64",width:"64",alt:"Generic placeholder image",middle:!0})),o.a.createElement(k.a,{body:!0},o.a.createElement(k.a,{heading:!0},"Tootsie roll dessert"),o.a.createElement("p",null,"Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah. Biscuit icing pastry tootsie roll gingerbread croissant chupa chups."),o.a.createElement("p",null,"Drag\xe9e topping chocolate drag\xe9e icing gingerbread. Ice cream jujubes pie sweet roll sweet roll marshmallow powder. Cotton candy dessert apple pie chocolate cake dessert lemon drops topping gingerbread biscuit. Sugar plum tootsie roll sweet gummi bears souffl\xe9 cake gummies lollipop jelly beans. Gummies sugar plum apple pie apple pie cake bear claw. Jelly beans gingerbread biscuit lollipop."))),o.a.createElement(k.a,null,o.a.createElement(k.a,{left:!0,href:"#",className:"align-self-end"},o.a.createElement(k.a,{object:!0,src:A.a,height:"64",width:"64",alt:"Generic placeholder image",bottom:!0})),o.a.createElement(k.a,{body:!0},o.a.createElement(k.a,{heading:!0},"Jelly chocolate cake"),o.a.createElement("p",null,"Jelly chocolate cake lemon drops halvah drag\xe9e caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly beans cake chocolate cake gummi bears lollipop."),o.a.createElement("p",null,"Sweet sesame snaps drag\xe9e chocolate tiramisu cotton candy sweet roll bonbon dessert. Chocolate cake tiramisu drag\xe9e. Carrot cake pudding marshmallow fruitcake carrot cake. Cotton candy pastry chocolate bar. Apple pie sesame snaps macaroon muffin cookie toffee bonbon gummies candy canes. Souffl\xe9 chocolate bar souffl\xe9 tart fruitcake muffin. Macaroon sweet roll apple pie jelly beans powder pudding."))))),o.a.createElement(M.a,{className:"component-code",tabId:"2"},G)))))}}]),n}(o.a.Component),de=n(1013),me=n.n(de),ue=(n(1011),function(e){Object(i.a)(n,e);var a=Object(c.a)(n);function n(){return Object(t.a)(this,n),a.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){me.a.highlightAll()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{breadCrumbTitle:"Media Object",breadCrumbParent:"Components",breadCrumbActive:"Media Object"}),o.a.createElement(s.a,null,o.a.createElement(d.a,{xl:"6",sm:"12"},o.a.createElement(F,null)),o.a.createElement(d.a,{xl:"6",sm:"12"},o.a.createElement(V,null)),o.a.createElement(d.a,{xl:"6",sm:"12"},o.a.createElement(Y,null)),o.a.createElement(d.a,{xl:"6",sm:"12"},o.a.createElement(ie,null)),o.a.createElement(d.a,{sm:"12"},o.a.createElement(oe,null)),o.a.createElement(d.a,{sm:"12"},o.a.createElement(se,null))))}}]),n}(o.a.Component));a.default=ue}}]);
//# sourceMappingURL=296.30536f0f.chunk.js.map
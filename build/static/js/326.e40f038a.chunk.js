(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[326],{1022:function(e,t,a){},2942:function(e,t,a){"use strict";a.r(t);var n=a(16),o=a(17),r=a(18),s=a(19),i=a(1),l=a.n(i),c=a(898),d=a(890),m=a(891),u=a(173),p=a(902),b=a(892),h=(a(1035),a(1045)),f=a(1046),E=a(1042),C=a.n(E),N=(a(1028),a(1022),a(9)),S=(a(25),a(161)),y=a.n(S),g=a(78),k=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).onEditorStateChange=function(e){o.setState({editorState:e,description:C()(Object(h.convertToRaw)(e.getCurrentContent()))})},o.submitHandler=function(e){e.preventDefault(),N.a.post("/addTermscondition",o.state).then((function(e){console.log(e),o.props.history.push("/app/termsAndCondition/tAndCList"),y()("Good job!","You clicked the button!","success")})).catch((function(e){console.log(e)}))},o.state={description:"",editorState:h.EditorState.createEmpty()},o}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(c.a,null,l.a.createElement(d.a,{className:"m-2"},l.a.createElement(m.a,null,l.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Term And Condition")),l.a.createElement(m.a,null,l.a.createElement(g.b,{render:function(e){var t=e.history;return l.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/termsAndCondition/TAndCList")}},"Back")}}))),l.a.createElement(p.a,null,l.a.createElement(b.a,{onSubmit:this.submitHandler},l.a.createElement(f.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}),l.a.createElement("br",null),l.a.createElement(u.a,{color:"primary"},"Add New T&C"))))}}]),a}(l.a.Component);t.default=k}}]);
//# sourceMappingURL=326.e40f038a.chunk.js.map
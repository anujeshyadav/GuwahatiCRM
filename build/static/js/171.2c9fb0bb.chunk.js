/*! For license information please see 171.2c9fb0bb.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[171],{1202:function(t,e,a){"use strict";var n=a(1203),r=a.n(n),s=a(81),i=a.n(s),o=a(23),c=a.n(o),l=a(1),u=a.n(l),h={position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"},d={zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},p={position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},m={zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},f={zIndex:1,position:"fixed",top:0,bottom:0},v=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={sidebarWidth:e.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchCurrentX:null,dragSupported:!1},a.overlayClicked=a.overlayClicked.bind(c()(c()(a))),a.onTouchStart=a.onTouchStart.bind(c()(c()(a))),a.onTouchMove=a.onTouchMove.bind(c()(c()(a))),a.onTouchEnd=a.onTouchEnd.bind(c()(c()(a))),a.onScroll=a.onScroll.bind(c()(c()(a))),a.saveSidebarRef=a.saveSidebarRef.bind(c()(c()(a))),a}i()(e,t);var a=e.prototype;return a.componentDidMount=function(){var t=/iPad|iPhone|iPod/.test(navigator?navigator.userAgent:"");this.setState({dragSupported:"object"===typeof window&&"ontouchstart"in window&&!t}),this.saveSidebarWidth()},a.componentDidUpdate=function(){this.isTouching()||this.saveSidebarWidth()},a.onTouchStart=function(t){if(!this.isTouching()){var e=t.targetTouches[0];this.setState({touchIdentifier:e.identifier,touchStartX:e.clientX,touchCurrentX:e.clientX})}},a.onTouchMove=function(t){if(this.isTouching())for(var e=0;e<t.targetTouches.length;e++)if(t.targetTouches[e].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:t.targetTouches[e].clientX});break}},a.onTouchEnd=function(){if(this.isTouching()){var t=this.touchSidebarWidth();(this.props.open&&t<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&t>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})}},a.onScroll=function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})},a.inCancelDistanceOnScroll=function(){return this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<20:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<20},a.isTouching=function(){return null!==this.state.touchIdentifier},a.overlayClicked=function(){this.props.open&&this.props.onSetOpen(!1)},a.saveSidebarWidth=function(){var t=this.sidebar.offsetWidth;t!==this.state.sidebarWidth&&this.setState({sidebarWidth:t})},a.saveSidebarRef=function(t){this.sidebar=t},a.touchSidebarWidth=function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)},a.render=function(){var t,e=r()({},d,this.props.styles.sidebar),a=r()({},p,this.props.styles.content),n=r()({},m,this.props.styles.overlay),s=this.state.dragSupported&&this.props.touch,i=this.isTouching(),o={className:this.props.rootClassName,style:r()({},h,this.props.styles.root),role:"navigation",id:this.props.rootId},c=this.props.shadow&&(i||this.props.open||this.props.docked);if(this.props.pullRight?(e.right=0,e.transform="translateX(100%)",e.WebkitTransform="translateX(100%)",c&&(e.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(e.left=0,e.transform="translateX(-100%)",e.WebkitTransform="translateX(-100%)",c&&(e.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),i){var l=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(e.transform="translateX("+100*(1-l)+"%)",e.WebkitTransform="translateX("+100*(1-l)+"%)"):(e.transform="translateX(-"+100*(1-l)+"%)",e.WebkitTransform="translateX(-"+100*(1-l)+"%)"),n.opacity=l,n.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(e.transform="translateX(0%)",e.WebkitTransform="translateX(0%)"),this.props.pullRight?a.right=this.state.sidebarWidth+"px":a.left=this.state.sidebarWidth+"px"):this.props.open&&(e.transform="translateX(0%)",e.WebkitTransform="translateX(0%)",n.opacity=1,n.visibility="visible");if(!i&&this.props.transitions||(e.transition="none",e.WebkitTransition="none",a.transition="none",n.transition="none"),s)if(this.props.open)o.onTouchStart=this.onTouchStart,o.onTouchMove=this.onTouchMove,o.onTouchEnd=this.onTouchEnd,o.onTouchCancel=this.onTouchEnd,o.onScroll=this.onScroll;else{var v=r()({},f,this.props.styles.dragHandle);v.width=this.props.touchHandleWidth,this.props.pullRight?v.right=0:v.left=0,t=u.a.createElement("div",{style:v,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return u.a.createElement("div",o,u.a.createElement("div",{className:this.props.sidebarClassName,style:e,ref:this.saveSidebarRef,id:this.props.sidebarId},this.props.sidebar),u.a.createElement("div",{className:this.props.overlayClassName,style:n,onClick:this.overlayClicked,id:this.props.overlayId}),u.a.createElement("div",{className:this.props.contentClassName,style:a,id:this.props.contentId},t,this.props.children))},e}(l.Component);v.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0},e.a=v},1203:function(t,e,a){var n=a(34);t.exports=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),r.forEach((function(e){n(t,e,a[e])}))}return t},t.exports.__esModule=!0,t.exports.default=t.exports},2356:function(t,e,a){},3204:function(t,e,a){"use strict";a.r(e);var n=a(16),r=a(17),s=a(18),i=a(19),o=a(1),c=a.n(o),l=a(1202),u=a(123),h=a(5),d=a(882),p=a(899),m=a(939),f=a(895),v=a(241),g=a(456),b=a(56),y=a.n(b),E=a(31),S=a(64),N=a.n(S),w=function(){return function(t){N.a.get("api/app/chat/chats").then((function(e){t({type:"GET_CONTACTS",contacts:e.data.contacts,chats:e.data.chats})})).catch((function(t){return console.log(t)}))}},C=a(103),k=a.n(C);function x(){x=function(){return t};var t={},e=Object.prototype,a=e.hasOwnProperty,n=Object.defineProperty||function(t,e,a){t[e]=a.value},r="function"==typeof Symbol?Symbol:{},s=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function c(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(j){c=function(t,e,a){return t[e]=a}}function l(t,e,a,r){var s=e&&e.prototype instanceof d?e:d,i=Object.create(s.prototype),o=new k(r||[]);return n(i,"_invoke",{value:S(t,a,o)}),i}function u(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(j){return{type:"throw",arg:j}}}t.wrap=l;var h={};function d(){}function p(){}function m(){}var f={};c(f,s,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(T([])));g&&g!==e&&a.call(g,s)&&(f=g);var b=m.prototype=d.prototype=Object.create(f);function y(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var r;n(this,"_invoke",{value:function(n,s){function i(){return new e((function(r,i){!function n(r,s,i,o){var c=u(t[r],t,s);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==typeof h&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,o)}),(function(t){n("throw",t,i,o)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,o)}))}o(c.arg)}(n,s,r,i)}))}return r=r?r.then(i,i):i()}})}function S(t,e,a){var n="suspendedStart";return function(r,s){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw s;return O()}for(a.method=r,a.arg=s;;){var i=a.delegate;if(i){var o=N(i,a);if(o){if(o===h)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=u(t,e,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}function N(t,e){var a=e.method,n=t.iterator[a];if(void 0===n)return e.delegate=null,"throw"===a&&t.iterator.return&&(e.method="return",e.arg=void 0,N(t,e),"throw"===e.method)||"return"!==a&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+a+"' method")),h;var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var s=r.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function T(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=m,n(b,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:p,configurable:!0}),p.displayName=c(m,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,o,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},y(E.prototype),c(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,a,n,r,s){void 0===s&&(s=Promise);var i=new E(l(e,a,n,r),s);return t.isGeneratorFunction(a)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(b),c(b,o,"Generator"),c(b,s,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),a=[];for(var n in e)a.push(n);return a.reverse(),function t(){for(;a.length;){var n=a.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=T,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(a,n){return i.type="throw",i.arg=t,e.next=a,n&&(e.method="next",e.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r],i=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var o=a.call(s,"catchLoc"),c=a.call(s,"finallyLoc");if(o&&c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(o){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var s=r;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var i=s?s.completion:{};return i.type=t,i.arg=e,s?(this.method="next",this.next=s.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),C(a),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var n=a.completion;if("throw"===n.type){var r=n.arg;C(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:T(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),h}},t}var T=function(t){Object(s.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={chatsContacts:[],contacts:[],messages:[],status:null,value:""},t.getChatContents=function(){t.props.getChats(),t.props.getContactChats()},t.handleOnChange=function(e){t.setState({value:e.target.value}),t.props.searchContacts(e.target.value)},t}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=Object(h.a)(x().mark((function t(){return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getChatContents();case 2:this.setState({chatsContacts:this.props.chat.chatContacts,contacts:this.props.chat.contacts,chats:this.props.chat.chats,status:this.props.chat.status});case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state,a=e.contacts,n=e.chatsContacts,r=e.chats,s=e.status,i=e.value,o=i.length?this.props.chat.filteredContacts:a,l=i.length?this.props.chat.filteredChats:n,u=o.length>0?o.map((function(e){return c.a.createElement("li",{key:e.uid,onClick:function(){t.props.handleActiveChat(e.uid,e,r[e.uid]),t.props.markSeenAllMessages(e.uid),t.props.mainSidebar(!1)}},c.a.createElement("div",{className:"pr-1"},c.a.createElement("span",{className:"avatar avatar-md m-0"},c.a.createElement("img",{src:e.photoURL,alt:e.displayName,height:"38",width:"38"}))),c.a.createElement("div",{className:"user-chat-info"},c.a.createElement("div",{className:"contact-info"},c.a.createElement("h5",{className:"text-bold-600 mb-0"},e.displayName),c.a.createElement("p",{className:"truncate"},e.about))))})):null,h=l&&Array.isArray(l)?l.map((function(e){var a=r[e.uid]&&r[e.uid].msg?r[e.uid].msg.slice(-1)[0]:null,n=new Date(a&&a.time?a.time:null),s=n.toLocaleString("default",{month:"short"}),i=n.getDate(),o=r[e.uid]&&r[e.uid].msg?r[e.uid].msg.filter((function(t){return!1===t.isSeen&&!0!==t.isSent})).length:null,l=void 0!==r[e.uid]?r[e.uid]:null;return c.a.createElement("li",{key:e.uid,onClick:function(){t.props.handleActiveChat(e.uid,e,l),t.props.mainSidebar(!1),t.props.markSeenAllMessages(e.uid)},className:"".concat(t.props.activeChatID===e.uid?"active":"")},c.a.createElement("div",{className:"pr-1"},c.a.createElement("span",{className:"avatar avatar-md m-0"},c.a.createElement("img",{src:e.photoURL,alt:e.displayName,height:"38",width:"38"}))),c.a.createElement("div",{className:"user-chat-info"},c.a.createElement("div",{className:"contact-info"},c.a.createElement("h5",{className:"text-bold-600 mb-0"},e.displayName),c.a.createElement("p",{className:"truncate"},a?a.textContent:e.about)),c.a.createElement("div",{className:"contact-meta d-flex- flex-column"},c.a.createElement("span",{className:"float-right mb-25"},s+" "+i),o>0?c.a.createElement("div",{className:"unseen-msg"},c.a.createElement(d.a,{className:"badge-md float-right",color:"primary",pill:!0},o)):null)))})):null;return c.a.createElement(p.a,{className:"sidebar-content h-100"},c.a.createElement("span",{className:"sidebar-close-icon",onClick:function(){return t.props.mainSidebar(!1)}},c.a.createElement(v.a,{size:15})),c.a.createElement("div",{className:"chat-fixed-search"},c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("div",{className:"sidebar-profile-toggle position-relative d-inline-flex"},c.a.createElement("div",{className:"avatar",onClick:function(){return t.props.handleUserSidebar("open")}},c.a.createElement("img",{src:k.a,alt:"User Profile",height:"40",width:"40"}),c.a.createElement("span",{className:"dnd"===s?"avatar-status-busy":"away"===s?"avatar-status-away":"offline"===s?"avatar-status-offline":"avatar-status-online"}))),c.a.createElement(m.a,{className:"position-relative has-icon-left mx-1 my-0 w-100"},c.a.createElement(f.a,{className:"round",type:"text",placeholder:"Search contact or start a new chat",onChange:function(e){return t.handleOnChange(e)},value:i}),c.a.createElement("div",{className:"form-control-position"},c.a.createElement(g.a,{size:15}))))),c.a.createElement(y.a,{className:"chat-user-list list-group",options:{wheelPropagation:!1}},c.a.createElement("h3",{className:"primary p-1 mb-0"},"Chats"),c.a.createElement("ul",{className:"chat-users-list-wrapper media-list"},h),c.a.createElement("h3",{className:"primary p-1 mb-0"},"Contacts"),c.a.createElement("ul",{className:"chat-users-list-wrapper media-list"},u)))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.chat.chatContacts.length!==e.chatContacts||t.chat.contacts.length!==e.contacts||t.chat.chats.length!==e.chats||t.chat.status!==e.status?{chatsContacts:t.chat.chatContacts,contacts:t.chat.contacts,chats:t.chat.chats,status:t.chat.status}:null}}]),a}(c.a.Component),O=Object(E.b)((function(t){return{chat:t.chatApp.chats}}),{getChats:w,getContactChats:function(){return function(t){N.a.get("api/app/chat/chat-contacts").then((function(e){t({type:"GET_CHAT_CONTACTS",chats:e.data})})).catch((function(t){return console.log(t)}))}},searchContacts:function(t){return function(e){e({type:"SEARCH_CONTACTS",query:t})}},markSeenAllMessages:function(t){return function(e){N.a.post("/api/apps/chat/mark-all-seen/",{contactId:t}).then((function(a){e({type:"MARK_AS_SEEN",id:t})})).catch((function(t){return console.log(t)}))}}})(T),j=a(30),P=a.n(j),D=a(173),A=a(409),W=a(407),X=a(476),L=a(457),U=function(t){Object(s.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={msg:"",activeUser:null,activeChat:null},t.handleSendMessage=function(e,a,n){n.length>0&&(t.props.sendMessage(e,a,n),t.setState({msg:""}))},t.handleTime=function(t,e){var a=new Date(Date.parse(t)),n=new Date(Date.parse(e));return a.getFullYear()===n.getFullYear()&&a.getMonth()===n.getMonth()&&a.getDate()===n.getDate()},t.scrollToBottom=function(){var e=P.a.findDOMNode(t.chatArea);e.scrollTop=e.scrollHeight},t}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var t=this,e=this.state.activeUser,a=e&&e.uid?e.uid:null,n=e&&e.uid?this.props.chat.chats[a]:null,r=n&&void 0!==n&&n.msg?n.msg.map((function(a,r){return c.a.createElement(c.a.Fragment,{key:r},function(){if(r>0&&!t.handleTime(a.time,n.msg[r-1].time))return c.a.createElement("div",{className:"divider"},c.a.createElement("div",{className:"divider-text"},(new Date).getDate()+" "+(new Date).toLocaleString("default",{month:"short"})))}(),c.a.createElement("div",{className:"chat ".concat(!0!==a.isSent?"chat-left":"chat-right")},r>0?!0===a.isSent&&!0!==n.msg[r-1].isSent?c.a.createElement("div",{className:"chat-avatar"},c.a.createElement("div",{className:"avatar m-0"},c.a.createElement("img",{src:k.a,alt:"chat avatar",height:"40",width:"40"}))):!0!==a.isSent?c.a.createElement("div",{className:"chat-avatar"},c.a.createElement("div",{className:"avatar m-0"},c.a.createElement("img",{src:e.photoURL,alt:"chat avatar",height:"40",width:"40"}))):"":c.a.createElement("div",{className:"chat-avatar"},c.a.createElement("div",{className:"avatar m-0"},c.a.createElement("img",{src:a.isSent?k.a:e.photoURL,alt:"chat avatar",height:"40",width:"40"}))),c.a.createElement("div",{className:"chat-body"},c.a.createElement("div",{className:"chat-content"},a.textContent))))})):null;return c.a.createElement("div",{className:"content-right"},c.a.createElement("div",{className:"chat-app-window"},c.a.createElement("div",{className:"start-chat-area ".concat(null!==e?"d-none":"d-flex")},c.a.createElement("span",{className:"mb-1 start-chat-icon"},c.a.createElement(A.a,{size:50})),c.a.createElement("h4",{className:"py-50 px-1 sidebar-toggle start-chat-text",onClick:function(){if(!1!==t.props.mql.matches)return null;t.props.mainSidebar(!0)}},"Start Conversation")),c.a.createElement("div",{className:"active-chat ".concat(null===e?"d-none":"d-block")},c.a.createElement("div",{className:"chat_navbar"},c.a.createElement("header",{className:"chat_header d-flex justify-content-between align-items-center p-1"},c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("div",{className:"sidebar-toggle d-block d-lg-none mr-1",onClick:function(){return t.props.mainSidebar(!0)}},c.a.createElement(W.a,{size:24})),c.a.createElement("div",{className:"avatar user-profile-toggle m-0 m-0 mr-1",onClick:function(){return t.props.handleReceiverSidebar("open")}},c.a.createElement("img",{src:null!==e?e.photoURL:"",alt:null!==e?e.displayName:"",height:"40",width:"40"}),c.a.createElement("span",{className:"\n                    ".concat(null!==e&&"do not disturb"===e.status?"avatar-status-busy":null!==e&&"away"===e.status?"avatar-status-away":null!==e&&"offline"===e.status?"avatar-status-offline":"avatar-status-online","\n                    ")})),c.a.createElement("h6",{className:"mb-0"},null!==e?e.displayName:"")),c.a.createElement("span",{className:"favorite",onClick:function(){n&&t.props.togglePinned(e.uid,!n.isPinned)}},c.a.createElement(X.a,{size:22,stroke:n&&!0===n.isPinned?"#FF9F43":"#626262"})))),c.a.createElement(y.a,{className:"user-chats",options:{wheelPropagation:!1},ref:function(e){t.chatArea=e}},c.a.createElement("div",{className:"chats"},r)),c.a.createElement("div",{className:"chat-app-form"},c.a.createElement("form",{className:"chat-app-input d-flex align-items-center",onSubmit:function(a){a.preventDefault(),t.handleSendMessage(e.uid,!1,t.state.msg,e)}},c.a.createElement(f.a,{type:"text",className:"message mr-1 ml-50",placeholder:"Type your message",value:this.state.msg,onChange:function(e){e.preventDefault(),t.setState({msg:e.target.value})}}),c.a.createElement(D.a,{color:"primary"},c.a.createElement(L.a,{className:"d-lg-none",size:15}),c.a.createElement("span",{className:"d-lg-block d-none"},"Send")))))))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.activeUser!==e.activeChat||t.activeChat!==e.activeChat?{activeUser:t.activeUser,activeChat:t.activeChat}:null}}]),a}(c.a.Component),M=Object(E.b)((function(t){return{chat:t.chatApp.chats}}),{togglePinned:function(t,e){return function(a){N.a.post("/api/apps/chat/set-pinned/",{contactId:t,value:e}).then((function(n){a({type:"SET_PINNED",id:t,value:e})})).catch((function(t){return console.log(t)}))}},sendMessage:function(t,e,a){return a.length>0?function(n){var r={textContent:a,isSent:!0,isSeen:!1,time:(new Date).toString()};N.a.post("/api/app/chat/send-message",{contactId:t,message:r,isPinned:e}).then((function(s){n({type:"SEND_MESSAGE",msg:r,id:t,isPinned:e,text:a}),n(w())})).catch((function(t){return console.log(t)}))}:void 0}})(U),_=function(t){Object(s.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={activeUser:null},t}return Object(r.a)(a,[{key:"render",value:function(){var t=this,e=this.state.activeUser;return c.a.createElement("div",{className:"user-profile-sidebar ".concat(this.props.receiverProfile?"show":null)},c.a.createElement("header",{className:"user-profile-header"},c.a.createElement("span",{className:"close-icon",onClick:function(){return t.props.handleReceiverSidebar("close")}},c.a.createElement(v.a,{size:24})),c.a.createElement("div",{className:"header-profile-sidebar"},c.a.createElement("div",{className:"avatar"},c.a.createElement("img",{src:null!==e?e.photoURL:null,alt:null!==e?e.displayName:null,height:"66",width:"66"}),c.a.createElement("span",{className:"".concat(null!==e&&"do not disturb"===e.status?"avatar-status-busy":null!==e&&"away"===e.status?"avatar-status-away":null!==e&&"offline"===e.status?"avatar-status-offline":"avatar-status-online"," avatar-status-lg")})),c.a.createElement("h4",{className:"chat-user-name"},null!==e?e.displayName:null))),c.a.createElement(y.a,{className:"user-profile-sidebar-area p-2",options:{wheelPropagation:!1}},c.a.createElement("h6",null,"About"),c.a.createElement("p",null,null!==e?e.about:null)))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.activeUser!==e.activeUser?{activeUser:t.activeUser}:null}}]),a}(c.a.Component),R=a(53),I=function(t){Object(s.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={value:"Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",status:null},t}return Object(r.a)(a,[{key:"render",value:function(){var t=this,e=this.state.status;return c.a.createElement("div",{className:"chat-profile-sidebar ".concat(this.props.userProfile?"show":null)},c.a.createElement("header",{className:"chat-profile-header"},c.a.createElement("div",{className:"close-icon",onClick:function(){return t.props.handleUserSidebar("close")}},c.a.createElement(v.a,{size:24})),c.a.createElement("div",{className:"header-profile-sidebar"},c.a.createElement("div",{className:"avatar"},c.a.createElement("img",{src:k.a,alt:"User Profile",height:"66",width:"66"}),c.a.createElement("span",{className:"".concat("offline"===e?"avatar-status-offline":"dnd"===e?"avatar-status-busy":"away"===e?"avatar-status-away":"avatar-status-online"," avatar-status-lg")})),c.a.createElement("h4",{className:"chat-user-name"},"John Doe"))),c.a.createElement("div",{className:"profile-sidebar-area"},c.a.createElement(y.a,{className:"scroll-area",options:{wheelPropagation:!1}},c.a.createElement("h6",null,"About"),c.a.createElement("div",{className:"about-user"},c.a.createElement(f.a,{type:"textarea",name:"text",id:"userAbout",rows:"5",value:this.state.value,maxLength:"120",onChange:function(e){return t.setState({value:e.target.value})}}),c.a.createElement("small",{className:"counter-value float-right"},"".concat(this.state.value.length," / 120"))),c.a.createElement("h3",{className:"mt-3"},"Status"),c.a.createElement("ul",{className:"list-unstyled user-status mb-0"},c.a.createElement("li",{className:"pb-50"},c.a.createElement(R.a,{label:"Active",color:"success",defaultChecked:!0,name:"userStatus",onClick:function(){return t.props.changeStatus("active")}})),c.a.createElement("li",{className:"pb-50"},c.a.createElement(R.a,{label:"Do Not Disturb",color:"danger",defaultChecked:!1,name:"userStatus",onClick:function(){return t.props.changeStatus("dnd")}})),c.a.createElement("li",{className:"pb-50"},c.a.createElement(R.a,{label:"Away",color:"warning",defaultChecked:!1,name:"userStatus",onClick:function(){return t.props.changeStatus("away")}})),c.a.createElement("li",{className:"pb-50"},c.a.createElement(R.a,{label:"Offline",color:"secondary",defaultChecked:!1,name:"userStatus",onClick:function(){return t.props.changeStatus("offline")}}))))))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.chat.status!==e.status?{status:t.chat.status}:null}}]),a}(c.a.Component),F=Object(E.b)((function(t){return{chat:t.chatApp.chats}}),{changeStatus:function(t){return function(e){e({type:"CHANGE_STATUS",status:t})}}})(I),G=(a(2356),window.matchMedia("(min-width: 992px)")),z=function(t){Object(s.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={userProfile:!1,sidebarDocked:G.matches,sidebarOpen:!1,activeChatID:null,activeChat:null,activeUser:null,receiverProfile:!1,userSidebar:!1},t.handleUserSidebar=function(e){"open"===e?t.setState({userProfile:!0}):t.setState({userProfile:!1})},t.handleActiveChat=function(e,a,n){t.setState({activeChatID:e,activeUser:a,activeChat:n})},t.onSetSidebarOpen=function(e){t.setState({sidebarOpen:e})},t.mediaQueryChanged=function(){t.setState({sidebarDocked:G.matches,sidebarOpen:!1})},t.handleReceiverSidebar=function(e){"open"===e?t.setState({receiverProfile:!0}):t.setState({receiverProfile:!1})},t.handleUserSidebar=function(e){"open"===e?t.setState({userSidebar:!0}):t.setState({userSidebar:!1})},t}return Object(r.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){G.addListener(this.mediaQueryChanged)}},{key:"componentWillUnmount",value:function(){G.removeListener(this.mediaQueryChanged)}},{key:"render",value:function(){var t=this;return c.a.createElement("div",{className:"chat-application position-relative"},c.a.createElement("div",{className:"chat-overlay ".concat(this.state.receiverProfile||this.state.userSidebar||this.state.sidebarOpen?"show":"d-none"),onClick:function(){t.handleReceiverSidebar("close"),t.handleUserSidebar("close"),t.onSetSidebarOpen(!1)}}),c.a.createElement(u.a.Consumer,null,(function(e){return c.a.createElement(l.a,{sidebar:c.a.createElement(O,{activeChatID:t.state.activeChatID,handleActiveChat:t.handleActiveChat,handleUserSidebar:t.handleUserSidebar,mainSidebar:t.onSetSidebarOpen}),docked:t.state.sidebarDocked,open:t.state.sidebarOpen,touch:!1,sidebarClassName:"chat-sidebar",contentClassName:"sidebar-children d-none",pullRight:"rtl"===e.state.direction},'""')})),c.a.createElement(F,{userProfile:this.state.userSidebar,handleUserSidebar:this.handleUserSidebar}),c.a.createElement(M,{activeChat:this.state.activeChat,activeUser:this.state.activeUser,handleReceiverSidebar:this.handleReceiverSidebar,mainSidebar:this.onSetSidebarOpen,mql:G,handleActiveChat:this.handleActiveChat}),c.a.createElement(_,{activeUser:this.state.activeUser,receiverProfile:this.state.receiverProfile,handleReceiverSidebar:this.handleReceiverSidebar}))}}]),a}(c.a.Component);e.default=z},939:function(t,e,a){"use strict";var n=a(7),r=a(12),s=a(1),i=a.n(s),o=a(2),c=a.n(o),l=a(6),u=a.n(l),h=a(4),d=["className","cssModule","row","disabled","check","inline","tag"],p={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:h.tagPropType,className:c.a.string,cssModule:c.a.object},m=function(t){var e=t.className,a=t.cssModule,s=t.row,o=t.disabled,c=t.check,l=t.inline,p=t.tag,m=Object(r.a)(t,d),f=Object(h.mapToCssModules)(u()(e,!!s&&"row",c?"form-check":"form-group",!(!c||!l)&&"form-check-inline",!(!c||!o)&&"disabled"),a);return"fieldset"===p&&(m.disabled=o),i.a.createElement(p,Object(n.a)({},m,{className:f}))};m.propTypes=p,m.defaultProps={tag:"div"},e.a=m}}]);
//# sourceMappingURL=171.2c9fb0bb.chunk.js.map
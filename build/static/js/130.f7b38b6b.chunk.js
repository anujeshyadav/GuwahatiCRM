(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[130],{1211:function(e,t,n){"use strict";var a=n(10),i=n(7),r=n(12),s=n(3),c=n(20),o=n(1),l=n.n(o),d=n(2),u=n.n(d),m=n(6),p=n.n(m),g=n(128),h=n(4),v=["in","children","cssModule","slide","tag","className"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={startAnimation:!1},n.onEnter=n.onEnter.bind(Object(s.a)(n)),n.onEntering=n.onEntering.bind(Object(s.a)(n)),n.onExit=n.onExit.bind(Object(s.a)(n)),n.onExiting=n.onExiting.bind(Object(s.a)(n)),n.onExited=n.onExited.bind(Object(s.a)(n)),n}Object(c.a)(t,e);var n=t.prototype;return n.onEnter=function(e,t){this.setState({startAnimation:!1}),this.props.onEnter(e,t)},n.onEntering=function(e,t){var n=e.offsetHeight;return this.setState({startAnimation:!0}),this.props.onEntering(e,t),n},n.onExit=function(e){this.setState({startAnimation:!1}),this.props.onExit(e)},n.onExiting=function(e){this.setState({startAnimation:!0}),e.dispatchEvent(new CustomEvent("slide.bs.carousel")),this.props.onExiting(e)},n.onExited=function(e){e.dispatchEvent(new CustomEvent("slid.bs.carousel")),this.props.onExited(e)},n.render=function(){var e=this,t=this.props,n=t.in,a=t.children,s=t.cssModule,c=t.slide,o=t.tag,d=t.className,u=Object(r.a)(t,v);return l.a.createElement(g.Transition,Object(i.a)({},u,{enter:c,exit:c,in:n,onEnter:this.onEnter,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var n=e.context.direction,i=t===h.TransitionStatuses.ENTERED||t===h.TransitionStatuses.EXITING,r=(t===h.TransitionStatuses.ENTERING||t===h.TransitionStatuses.EXITING)&&e.state.startAnimation&&("right"===n?"carousel-item-left":"carousel-item-right"),c=t===h.TransitionStatuses.ENTERING&&("right"===n?"carousel-item-next":"carousel-item-prev"),u=Object(h.mapToCssModules)(p()(d,"carousel-item",i&&"active",r,c),s);return l.a.createElement(o,{className:u},a)}))},t}(l.a.Component);E.propTypes=x(x({},g.Transition.propTypes),{},{tag:h.tagPropType,in:u.a.bool,cssModule:u.a.object,children:u.a.node,slide:u.a.bool,className:u.a.string}),E.defaultProps=x(x({},g.Transition.defaultProps),{},{tag:"div",timeout:h.TransitionTimeouts.Carousel,slide:!0}),E.contextTypes={direction:u.a.string},t.a=E},1288:function(e,t,n){"use strict";var a=n(3),i=n(20),r=n(1),s=n.n(r),c=n(2),o=n.n(c),l=n(6),d=n.n(l),u=n(1211),m=n(4),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleKeyPress=n.handleKeyPress.bind(Object(a.a)(n)),n.renderItems=n.renderItems.bind(Object(a.a)(n)),n.hoverStart=n.hoverStart.bind(Object(a.a)(n)),n.hoverEnd=n.hoverEnd.bind(Object(a.a)(n)),n.handleTouchStart=n.handleTouchStart.bind(Object(a.a)(n)),n.handleTouchEnd=n.handleTouchEnd.bind(Object(a.a)(n)),n.touchStartX=0,n.touchStartY=0,n.state={activeIndex:n.props.activeIndex,direction:"right",indicatorClicked:!1},n}Object(i.a)(t,e);var n=t.prototype;return n.getChildContext=function(){return{direction:this.state.direction}},n.componentDidMount=function(){"carousel"===this.props.ride&&this.setInterval(),document.addEventListener("keyup",this.handleKeyPress)},t.getDerivedStateFromProps=function(e,t){var n=null,a=t.activeIndex,i=t.direction,r=t.indicatorClicked;return e.activeIndex!==a&&(e.activeIndex===a+1?i="right":e.activeIndex===a-1?i="left":e.activeIndex<a?i=r?"left":"right":e.activeIndex!==a&&(i=r?"right":"left"),n={activeIndex:e.activeIndex,direction:i,indicatorClicked:!1}),n},n.componentDidUpdate=function(e,t){t.activeIndex!==this.state.activeIndex&&this.setInterval(this.props)},n.componentWillUnmount=function(){this.clearInterval(),document.removeEventListener("keyup",this.handleKeyPress)},n.setInterval=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){void 0===e&&(e=this.props),this.clearInterval(),e.interval&&(this.cycleInterval=setInterval((function(){e.next()}),parseInt(e.interval,10)))})),n.clearInterval=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){clearInterval(this.cycleInterval)})),n.hoverStart=function(){var e;("hover"===this.props.pause&&this.clearInterval(),this.props.mouseEnter)&&(e=this.props).mouseEnter.apply(e,arguments)},n.hoverEnd=function(){var e;("hover"===this.props.pause&&this.setInterval(),this.props.mouseLeave)&&(e=this.props).mouseLeave.apply(e,arguments)},n.handleKeyPress=function(e){this.props.keyboard&&(37===e.keyCode?this.props.previous():39===e.keyCode&&this.props.next())},n.handleTouchStart=function(e){this.props.enableTouch&&(this.touchStartX=e.changedTouches[0].screenX,this.touchStartY=e.changedTouches[0].screenY)},n.handleTouchEnd=function(e){if(this.props.enableTouch){var t=e.changedTouches[0].screenX,n=e.changedTouches[0].screenY,a=Math.abs(this.touchStartX-t);a<Math.abs(this.touchStartY-n)||a<40||(t<this.touchStartX?this.props.next():this.props.previous())}},n.renderItems=function(e,t){var n=this,a=this.props.slide;return s.a.createElement("div",{className:t},e.map((function(e,t){var i=t===n.state.activeIndex;return s.a.cloneElement(e,{in:i,slide:a})})))},n.render=function(){var e=this,t=this.props,n=t.cssModule,a=t.slide,i=t.className,r=Object(m.mapToCssModules)(d()(i,"carousel",a&&"slide"),n),c=Object(m.mapToCssModules)(d()("carousel-inner"),n),o=this.props.children.filter((function(e){return null!==e&&void 0!==e&&"boolean"!==typeof e}));if(o.every((function(e){return e.type===u.a})))return s.a.createElement("div",{className:r,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd},this.renderItems(o,c));if(o[0]instanceof Array){var l=o[0],p=o[1],g=o[2];return s.a.createElement("div",{className:r,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd},this.renderItems(l,c),p,g)}var h=o[0],v=s.a.cloneElement(h,{onClickHandler:function(t){"function"===typeof h.props.onClickHandler&&e.setState({indicatorClicked:!0},(function(){return h.props.onClickHandler(t)}))}}),f=o[1],x=o[2],E=o[3];return s.a.createElement("div",{className:r,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},v,this.renderItems(f,c),x,E)},t}(s.a.Component);p.propTypes={activeIndex:o.a.number,next:o.a.func.isRequired,previous:o.a.func.isRequired,keyboard:o.a.bool,pause:o.a.oneOf(["hover",!1]),ride:o.a.oneOf(["carousel"]),interval:o.a.oneOfType([o.a.number,o.a.string,o.a.bool]),children:o.a.array,mouseEnter:o.a.func,mouseLeave:o.a.func,slide:o.a.bool,cssModule:o.a.object,className:o.a.string,enableTouch:o.a.bool},p.defaultProps={interval:5e3,pause:"hover",keyboard:!0,slide:!0,enableTouch:!0},p.childContextTypes={direction:o.a.string},t.a=p},1289:function(e,t,n){"use strict";var a=n(1),i=n.n(a),r=n(2),s=n.n(r),c=n(6),o=n.n(c),l=n(4),d=function(e){var t=e.captionHeader,n=e.captionText,a=e.cssModule,r=e.className,s=Object(l.mapToCssModules)(o()(r,"carousel-caption","d-none","d-md-block"),a);return i.a.createElement("div",{className:s},i.a.createElement("h3",null,t),i.a.createElement("p",null,n))};d.propTypes={captionHeader:s.a.node,captionText:s.a.node.isRequired,cssModule:s.a.object,className:s.a.string},t.a=d},1290:function(e,t,n){"use strict";var a=n(1),i=n.n(a),r=n(2),s=n.n(r),c=n(6),o=n.n(c),l=n(4),d=function(e){var t=e.items,n=e.activeIndex,a=e.cssModule,r=e.onClickHandler,s=e.className,c=Object(l.mapToCssModules)(o()(s,"carousel-indicators"),a),d=t.map((function(e,t){var s=Object(l.mapToCssModules)(o()({active:n===t}),a);return i.a.createElement("li",{key:""+(e.key||Object.values(e).join("")),onClick:function(e){e.preventDefault(),r(t)},className:s})}));return i.a.createElement("ol",{className:c},d)};d.propTypes={items:s.a.array.isRequired,activeIndex:s.a.number.isRequired,cssModule:s.a.object,onClickHandler:s.a.func.isRequired,className:s.a.string},t.a=d},1291:function(e,t,n){"use strict";var a=n(1),i=n.n(a),r=n(2),s=n.n(r),c=n(6),o=n.n(c),l=n(4),d=function(e){var t=e.direction,n=e.onClickHandler,a=e.cssModule,r=e.directionText,s=e.className,c=Object(l.mapToCssModules)(o()(s,"carousel-control-"+t),a),d=Object(l.mapToCssModules)(o()("carousel-control-"+t+"-icon"),a),u=Object(l.mapToCssModules)(o()("sr-only"),a);return i.a.createElement("a",{className:c,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:function(e){e.preventDefault(),n()}},i.a.createElement("span",{className:d,"aria-hidden":"true"}),i.a.createElement("span",{className:u},r||t))};d.propTypes={direction:s.a.oneOf(["prev","next"]).isRequired,onClickHandler:s.a.func.isRequired,cssModule:s.a.object,directionText:s.a.string,className:s.a.string},t.a=d},1294:function(e,t,n){e.exports=n.p+"static/media/05.f45463a1.jpg"},1539:function(e,t,n){"use strict";var a=n(7),i=n(12),r=n(3),s=n(20),c=n(1),o=n.n(c),l=n(2),d=n.n(l),u=n(1288),m=n(1211),p=n(1291),g=n(1290),h=n(1289),v=["defaultActiveIndex","autoPlay","indicators","controls","items","goToIndex"],f={items:d.a.array.isRequired,indicators:d.a.bool,controls:d.a.bool,autoPlay:d.a.bool,defaultActiveIndex:d.a.number,activeIndex:d.a.number,next:d.a.func,previous:d.a.func,goToIndex:d.a.func},x=function(e){function t(t){var n;return(n=e.call(this,t)||this).animating=!1,n.state={activeIndex:t.defaultActiveIndex||0},n.next=n.next.bind(Object(r.a)(n)),n.previous=n.previous.bind(Object(r.a)(n)),n.goToIndex=n.goToIndex.bind(Object(r.a)(n)),n.onExiting=n.onExiting.bind(Object(r.a)(n)),n.onExited=n.onExited.bind(Object(r.a)(n)),n}Object(s.a)(t,e);var n=t.prototype;return n.onExiting=function(){this.animating=!0},n.onExited=function(){this.animating=!1},n.next=function(){if(!this.animating){var e=this.state.activeIndex===this.props.items.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}},n.previous=function(){if(!this.animating){var e=0===this.state.activeIndex?this.props.items.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}},n.goToIndex=function(e){this.animating||this.setState({activeIndex:e})},n.render=function(){var e=this,t=this.props,n=(t.defaultActiveIndex,t.autoPlay),r=t.indicators,s=t.controls,c=t.items,l=t.goToIndex,d=Object(i.a)(t,v),f=this.state.activeIndex,x=c.map((function(t){var n=t.key||t.src;return o.a.createElement(m.a,{onExiting:e.onExiting,onExited:e.onExited,key:n},o.a.createElement("img",{className:"d-block w-100",src:t.src,alt:t.altText}),o.a.createElement(h.a,{captionText:t.caption,captionHeader:t.header||t.caption}))}));return o.a.createElement(u.a,Object(a.a)({activeIndex:f,next:this.next,previous:this.previous,ride:n?"carousel":void 0},d),r&&o.a.createElement(g.a,{items:c,activeIndex:d.activeIndex||f,onClickHandler:l||this.goToIndex}),x,s&&o.a.createElement(p.a,{direction:"prev",directionText:"Previous",onClickHandler:d.previous||this.previous}),s&&o.a.createElement(p.a,{direction:"next",directionText:"Next",onClickHandler:d.next||this.next}))},t}(c.Component);x.propTypes=f,x.defaultProps={controls:!0,indicators:!0,autoPlay:!0},t.a=x},1555:function(e,t,n){e.exports=n.p+"static/media/01.68c25447.jpg"},1556:function(e,t,n){e.exports=n.p+"static/media/02.28f1f6c1.jpg"},1557:function(e,t,n){e.exports=n.p+"static/media/04.142989c0.jpg"},1811:function(e,t,n){e.exports=n.p+"static/media/03.f098ec19.jpg"},1812:function(e,t,n){e.exports=n.p+"static/media/06.788aa261.jpg"},3188:function(e,t,n){"use strict";n.r(t);var a=n(16),i=n(17),r=n(18),s=n(19),c=n(1),o=n.n(c),l=n(891),d=n(892),u=n(125),m=n(1211),p=n(899),g=n(900),h=n(901),v=n(902),f=n(883),x=n(884),E=n(903),b=n(904),I=n(905),T=n(1288),C=n(1290),j=n(1291),S=n(6),y=n.n(S),k=n(358),O=n(328),N=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {\n  Carousel,\n  CarouselItem,\n  CarouselControl,\n  CarouselIndicators\n} from "reactstrap"\nimport sliderImage1 from "../../../assets/img/slider/01.jpg"\nimport sliderImage2 from "../../../assets/img/slider/02.jpg"\nimport sliderImage3 from "../../../assets/img/slider/03.jpg"\n\nconst images = [\n  {\n    src: sliderImage1,\n    id: 1\n  },\n  {\n    src: sliderImage2,\n    id: 2\n  },\n  {\n    src: sliderImage3,\n    id: 3\n  }\n]\n\nclass CarouselBasic extends React.Component {\n  state = {\n    activeIndex: 0\n  }\n\n  onExiting = () => {\n    this.animating = true\n  }\n\n  onExited = () => {\n    this.animating = false\n  }\n\n  next = () => {\n    if (this.animating) return\n    const nextIndex =\n      this.state.activeIndex === images.length - 1\n        ? 0\n        : this.state.activeIndex + 1\n    this.setState({ activeIndex: nextIndex })\n  }\n\n  previous = () => {\n    if (this.animating) return\n    const nextIndex =\n      this.state.activeIndex === images.length - 1\n        ? 0\n        : this.state.activeIndex - 1\n    this.setState({ activeIndex: nextIndex })\n  }\n\n  goToIndex = newIndex => {\n    if (this.animating) return\n    this.setState({ activeIndex: newIndex })\n  }\n\n  render() {\n    const { activeIndex } = this.state\n\n    const slides = images.map(item => {\n      return (\n        <CarouselItem\n          onExiting={this.onExiting}\n          onExited={this.onExited}\n          key={item.id}\n        >\n          <img src={item.src} className="img-fluid" alt={item.id} />\n        </CarouselItem>\n      )\n    })\n    return (\n      <React.Fragment>\n        <Carousel\n            activeIndex={activeIndex}\n            next={this.next}\n            previous={this.previous}\n        >\n            <CarouselIndicators\n            items={images}\n            activeIndex={activeIndex}\n            onClickHandler={this.goToIndex}\n            />\n            {slides}\n            <CarouselControl\n            direction="prev"\n            directionText="Previous"\n            onClickHandler={this.previous}\n            />\n            <CarouselControl\n            direction="next"\n            directionText="Next"\n            onClickHandler={this.next}\n            />\n        </Carousel>\n    </React.Fragment>\n    )\n  }\n}\nexport default CarouselBasic\n\n    ')),R=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {\n  Carousel,\n  CarouselItem,\n  CarouselControl,\n  CarouselIndicators,\n  CarouselCaption\n} from "reactstrap"\nimport sliderImage1 from "../../../assets/img/slider/03.jpg"\nimport sliderImage2 from "../../../assets/img/slider/04.jpg"\nimport sliderImage3 from "../../../assets/img/slider/05.jpg"\n\nconst images = [\n  {\n      src: sliderImage1,\n      id: 1,\n      header: "Slide 1",\n      caption: "Cupcake ipsum dolor sit amet toffee lemon drops bonbon."\n  },\n  {\n      src: sliderImage2,\n      id: 2,\n      header: "Slide 2",\n      caption: "Cheesecake caramels wafer pie lollipop."\n  },\n  {\n      src: sliderImage3,\n      id: 3,\n      header: "Slide 3",\n      caption: "Candy canes toffee gummies souffl\xe9 fruitcake drag\xe9e icing."\n  }\n]\n\nclass CarouselCaption extends React.Component {\n  state = {\n    activeIndex: 0\n  }\n\n  onExiting = () => {\n    this.animating = true\n  }\n\n  onExited = () => {\n    this.animating = false\n  }\n\n  next = () => {\n    if (this.animating) return\n    const nextIndex =\n      this.state.activeIndex === images.length - 1\n        ? 0\n        : this.state.activeIndex + 1\n    this.setState({ activeIndex: nextIndex })\n  }\n\n  previous = () => {\n    if (this.animating) return\n    const nextIndex =\n      this.state.activeIndex === images.length - 1\n        ? 0\n        : this.state.activeIndex - 1\n    this.setState({ activeIndex: nextIndex })\n  }\n\n  goToIndex = newIndex => {\n    if (this.animating) return\n    this.setState({ activeIndex: newIndex })\n  }\n\n  render() {\n    const { activeIndex } = this.state\n\n    const slides = images.map(item => {\n      return (\n        <CarouselItem\n          onExiting={this.onExiting}\n          onExited={this.onExited}\n          key={item.id}\n        >\n          <img src={item.src} className="img-fluid" alt={item.id} />\n          <CarouselCaption captionText={item.caption} captionHeader={item.header} />\n        </CarouselItem>\n      )\n    })\n    return (\n      <React.Fragment>\n        <Carousel\n            activeIndex={activeIndex}\n            next={this.next}\n            previous={this.previous}\n        >\n            <CarouselIndicators\n            items={images}\n            activeIndex={activeIndex}\n            onClickHandler={this.goToIndex}\n            />\n            {slides}\n            <CarouselControl\n            direction="prev"\n            directionText="Previous"\n            onClickHandler={this.previous}\n            />\n            <CarouselControl\n            direction="next"\n            directionText="Next"\n            onClickHandler={this.next}\n            />\n        </Carousel>\n    </React.Fragment>\n    )\n  }\n}\nexport default CarouselCaption\n\n    ')),w=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport { UncontrolledCarousel } from "reactstrap"\nimport sliderImage1 from "../../../assets/img/slider/03.jpg"\nimport sliderImage2 from "../../../assets/img/slider/04.jpg"\nimport sliderImage3 from "../../../assets/img/slider/05.jpg"\n\nconst images = [\n  {\n      src: sliderImage1,\n      id: 1,\n      header: "Slide 1",\n      caption: "Cupcake ipsum dolor sit amet toffee lemon drops bonbon."\n  },\n  {\n      src: sliderImage2,\n      id: 2,\n      header: "Slide 2",\n      caption: "Cheesecake caramels wafer pie lollipop."\n  },\n  {\n      src: sliderImage3,\n      id: 3,\n      header: "Slide 3",\n      caption: "Candy canes toffee gummies souffl\xe9 fruitcake drag\xe9e icing."\n  }\n]\n\nclass CarouselUncontrolled extends React.Component {\n  state = {\n    activeTab: "1",\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <UncontrolledCarousel items={images} />\n    </React.Fragment>\n    )\n  }\n}\nexport default CarouselUncontrolled\n\n        ')),H=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport { UncontrolledCarousel } from "reactstrap"\nimport sliderImage1 from "../../../assets/img/slider/05.jpg"\nimport sliderImage2 from "../../../assets/img/slider/02.jpg"\nimport sliderImage3 from "../../../assets/img/slider/03.jpg"\n\nconst images = [\n  {\n      src: sliderImage1,\n      id: 1,\n      header: "Slide 1",\n      caption: "Cupcake ipsum dolor sit amet toffee lemon drops bonbon."\n  },\n  {\n      src: sliderImage2,\n      id: 2,\n      header: "Slide 2",\n      caption: "Cheesecake caramels wafer pie lollipop."\n  },\n  {\n      src: sliderImage3,\n      id: 3,\n      header: "Slide 3",\n      caption: "Candy canes toffee gummies souffl\xe9 fruitcake drag\xe9e icing."\n  }\n]\n\nclass CarouselInterval extends React.Component {\n  state = {\n    activeTab: "1",\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <UncontrolledCarousel interval="500" items={images} />\n    </React.Fragment>\n    )\n  }\n}\nexport default CarouselInterval')),P=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport { UncontrolledCarousel } from "reactstrap"\nimport sliderImage1 from "../../../assets/img/slider/05.jpg"\nimport sliderImage2 from "../../../assets/img/slider/01.jpg"\nimport sliderImage3 from "../../../assets/img/slider/03.jpg"\n\nconst images = [\n  {\n      src: sliderImage1,\n      id: 1,\n      header: "Slide 1",\n      caption: "Cupcake ipsum dolor sit amet toffee lemon drops bonbon."\n  },\n  {\n      src: sliderImage2,\n      id: 2,\n      header: "Slide 2",\n      caption: "Cheesecake caramels wafer pie lollipop."\n  },\n  {\n      src: sliderImage3,\n      id: 3,\n      header: "Slide 3",\n      caption: "Candy canes toffee gummies souffl\xe9 fruitcake drag\xe9e icing."\n  }\n]\n\nclass CarouselKeyboard extends React.Component {\n  state = {\n    activeTab: "1",\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <UncontrolledCarousel keyboard={false} items={images} />\n    </React.Fragment>\n    )\n  }\n}\nexport default CarouselKeyboard\n\n            ')),M=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport { UncontrolledCarousel } from "reactstrap"\nimport sliderImage1 from "../../../assets/img/slider/05.jpg"\nimport sliderImage2 from "../../../assets/img/slider/01.jpg"\nimport sliderImage3 from "../../../assets/img/slider/03.jpg"\n\nconst images = [\n  {\n      src: sliderImage1,\n      id: 1,\n      header: "Slide 1",\n      caption: "Cupcake ipsum dolor sit amet toffee lemon drops bonbon."\n  },\n  {\n      src: sliderImage2,\n      id: 2,\n      header: "Slide 2",\n      caption: "Cheesecake caramels wafer pie lollipop."\n  },\n  {\n      src: sliderImage3,\n      id: 3,\n      header: "Slide 3",\n      caption: "Candy canes toffee gummies souffl\xe9 fruitcake drag\xe9e icing."\n  }\n]\n\nclass CarouselKeyboard extends React.Component {\n  state = {\n    activeTab: "1",\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <UncontrolledCarousel pause items={images} />\n    </React.Fragment>\n    )\n  }\n}\nexport default CarouselPause')),A=n(1555),F=n.n(A),U=n(1556),B=n.n(U),D=n(1811),z=n.n(D),K=[{src:F.a,id:1},{src:B.a,id:2},{src:z.a,id:3}],q=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={activeTab:"1",activeIndex:0},e.onExiting=function(){e.animating=!0},e.onExited=function(){e.animating=!1},e.next=function(){if(!e.animating){var t=e.state.activeIndex===K.length-1?0:e.state.activeIndex+1;e.setState({activeIndex:t})}},e.previous=function(){if(!e.animating){var t=0===e.state.activeIndex?K.length-1:e.state.activeIndex-1;e.setState({activeIndex:t})}},e.goToIndex=function(t){e.animating||e.setState({activeIndex:t})},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.activeIndex,n=K.map((function(t){return o.a.createElement(m.a,{onExiting:e.onExiting,onExited:e.onExited,key:t.id},o.a.createElement("img",{src:t.src,className:"img-fluid",alt:t.id}))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(h.a,null,"Basic Example"),o.a.createElement("div",{className:"views"},o.a.createElement(v.a,{tabs:!0},o.a.createElement(f.a,null,o.a.createElement(x.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(k.a,{size:15}))),o.a.createElement(f.a,null,o.a.createElement(x.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(O.a,{size:15})))))),o.a.createElement(E.a,null,o.a.createElement(b.a,{activeTab:this.state.activeTab},o.a.createElement(I.a,{tabId:"1"},o.a.createElement(T.a,{activeIndex:t,next:this.next,previous:this.previous},o.a.createElement(C.a,{items:K,activeIndex:t,onClickHandler:this.goToIndex}),n,o.a.createElement(j.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),o.a.createElement(j.a,{direction:"next",directionText:"Next",onClickHandler:this.next}))),o.a.createElement(I.a,{className:"component-code",tabId:"2"},N)))))}}]),n}(o.a.Component),L=n(1289),X=n(1557),Y=n.n(X),G=n(1294),J=n.n(G),Z=[{src:z.a,id:1,header:"Slide 1",caption:"Cupcake ipsum dolor sit amet toffee lemon drops bonbon."},{src:Y.a,id:2,header:"Slide 2",caption:"Cheesecake caramels wafer pie lollipop."},{src:J.a,id:3,header:"Slide 3",caption:"Candy canes toffee gummies souffl\xe9 fruitcake drag\xe9e icing."}],$=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={activeTab:"1",activeIndex:0},e.onExiting=function(){e.animating=!0},e.onExited=function(){e.animating=!1},e.next=function(){if(!e.animating){var t=e.state.activeIndex===Z.length-1?0:e.state.activeIndex+1;e.setState({activeIndex:t})}},e.previous=function(){if(!e.animating){var t=0===e.state.activeIndex?Z.length-1:e.state.activeIndex-1;e.setState({activeIndex:t})}},e.goToIndex=function(t){e.animating||e.setState({activeIndex:t})},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.activeIndex,n=Z.map((function(t){return o.a.createElement(m.a,{onExiting:e.onExiting,onExited:e.onExited,key:t.id},o.a.createElement("img",{src:t.src,className:"img-fluid",alt:t.id}),o.a.createElement(L.a,{captionText:t.caption,captionHeader:t.header}))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(h.a,null,"Captions Example"),o.a.createElement("div",{className:"views"},o.a.createElement(v.a,{tabs:!0},o.a.createElement(f.a,null,o.a.createElement(x.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(k.a,{size:15}))),o.a.createElement(f.a,null,o.a.createElement(x.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(O.a,{size:15})))))),o.a.createElement(E.a,null,o.a.createElement(b.a,{activeTab:this.state.activeTab},o.a.createElement(I.a,{tabId:"1"},o.a.createElement(T.a,{activeIndex:t,next:this.next,previous:this.previous},o.a.createElement(C.a,{items:Z,activeIndex:t,onClickHandler:this.goToIndex}),n,o.a.createElement(j.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),o.a.createElement(j.a,{direction:"next",directionText:"Next",onClickHandler:this.next}))),o.a.createElement(I.a,{className:"component-code",tabId:"2"},R)))))}}]),n}(o.a.Component),W=n(1539),Q=n(1812),V=n.n(Q),_=[{src:V.a,altText:"Slide 1",caption:"Slide 1",header:"Slide 1 Header"},{src:B.a,altText:"Slide 2",caption:"Slide 2",header:"Slide 2 Header"},{src:J.a,altText:"Slide 3",caption:"Slide 3",header:"Slide 3 Header"}],ee=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(h.a,null,"Uncontrolled Example"),o.a.createElement("div",{className:"views"},o.a.createElement(v.a,{tabs:!0},o.a.createElement(f.a,null,o.a.createElement(x.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(k.a,{size:15}))),o.a.createElement(f.a,null,o.a.createElement(x.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(O.a,{size:15})))))),o.a.createElement(E.a,null,o.a.createElement("p",null,"You don't have to manage state with"," ",o.a.createElement("code",null,"UncontrolledCarousel")," all you have to do is return it with your content."),o.a.createElement(b.a,{activeTab:this.state.activeTab},o.a.createElement(I.a,{tabId:"1"},o.a.createElement(W.a,{items:_})),o.a.createElement(I.a,{className:"component-code",tabId:"2"},w)))))}}]),n}(o.a.Component),te=[{src:J.a,id:1,altText:"Slide 1",caption:"Slide 1",header:"Slide 1 Header"},{src:Y.a,id:2,altText:"Slide 2",caption:"Slide 2",header:"Slide 2 Header"},{src:F.a,id:3,altText:"Slide 3",caption:"Slide 3",header:"Slide 3 Header"}],ne=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(h.a,null,"Interval Example"),o.a.createElement("div",{className:"views"},o.a.createElement(v.a,{tabs:!0},o.a.createElement(f.a,null,o.a.createElement(x.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(k.a,{size:15}))),o.a.createElement(f.a,null,o.a.createElement(x.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(O.a,{size:15})))))),o.a.createElement(E.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,"Interval")," attribute to set interval between slides. default interval is ",o.a.createElement("strong",null,"5000"),"."),o.a.createElement(b.a,{activeTab:this.state.activeTab},o.a.createElement(I.a,{tabId:"1"},o.a.createElement(W.a,{items:te,interval:"500"})),o.a.createElement(I.a,{className:"component-code",tabId:"2"},H)))))}}]),n}(o.a.Component),ae=[{src:Y.a,id:1,altText:"Slide 1",caption:"Slide 1",header:"Slide 1 Header"},{src:F.a,id:2,altText:"Slide 2",caption:"Slide 2",header:"Slide 2 Header"},{src:J.a,id:3,altText:"Slide 3",caption:"Slide 3",header:"Slide 3 Header"}],ie=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(h.a,null,"Keyboard Example"),o.a.createElement("div",{className:"views"},o.a.createElement(v.a,{tabs:!0},o.a.createElement(f.a,null,o.a.createElement(x.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(k.a,{size:15}))),o.a.createElement(f.a,null,o.a.createElement(x.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(O.a,{size:15})))))),o.a.createElement(E.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,"Keyboard")," attribute to control carousel with keyboard default is ",o.a.createElement("code",null,"true"),"."),o.a.createElement(b.a,{activeTab:this.state.activeTab},o.a.createElement(I.a,{tabId:"1"},o.a.createElement(W.a,{items:ae,keyboard:!1})),o.a.createElement(I.a,{className:"component-code",tabId:"2"},P)))))}}]),n}(o.a.Component),re=[{src:B.a,id:1,altText:"Slide 1",caption:"Slide 1",header:"Slide 1 Header"},{src:V.a,id:2,altText:"Slide 2",caption:"Slide 2",header:"Slide 2 Header"},{src:J.a,id:3,altText:"Slide 3",caption:"Slide 3",header:"Slide 3 Header"}],se=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(h.a,null,"Pause Example"),o.a.createElement("div",{className:"views"},o.a.createElement(v.a,{tabs:!0},o.a.createElement(f.a,null,o.a.createElement(x.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(k.a,{size:15}))),o.a.createElement(f.a,null,o.a.createElement(x.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(O.a,{size:15})))))),o.a.createElement(E.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,"Pause")," attribute to pause carousel on hover."),o.a.createElement(b.a,{activeTab:this.state.activeTab},o.a.createElement(I.a,{tabId:"1"},o.a.createElement(W.a,{items:re,pause:"hover"})),o.a.createElement(I.a,{className:"component-code",tabId:"2"},M)))))}}]),n}(o.a.Component),ce=n(998),oe=n.n(ce),le=(n(997),function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){oe.a.highlightAll()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{breadCrumbTitle:"Carousel",breadCrumbParent:"Components",breadCrumbActive:"Carousel"}),o.a.createElement(l.a,null,o.a.createElement(d.a,{md:"6",sm:"12"},o.a.createElement(q,null)),o.a.createElement(d.a,{md:"6",sm:"12"},o.a.createElement($,null)),o.a.createElement(d.a,{md:"6",sm:"12"},o.a.createElement(ee,null)),o.a.createElement(d.a,{md:"6",sm:"12"},o.a.createElement(ne,null)),o.a.createElement(d.a,{md:"6",sm:"12"},o.a.createElement(ie,null)),o.a.createElement(d.a,{md:"6",sm:"12"},o.a.createElement(se,null))))}}]),n}(o.a.Component));t.default=le},997:function(e,t){!function(e){var t=e.util.clone(e.languages.javascript),n="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function a(e,t){return e=e.replace(/<S>/g,(function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"})).replace(/<BRACES>/g,(function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"})).replace(/<SPREAD>/g,(function(){return n})),RegExp(e,t)}n=a(n).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=a("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:a("<SPREAD>"),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:a("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var i=function e(t){return t?"string"==typeof t?t:"string"==typeof t.content?t.content:t.content.map(e).join(""):""},r=function t(n){for(var a=[],r=0;r<n.length;r++){var s=n[r],c=!1;if("string"!=typeof s&&("tag"===s.type&&s.content[0]&&"tag"===s.content[0].type?"</"===s.content[0].content[0].content?a.length>0&&a[a.length-1].tagName===i(s.content[0].content[1])&&a.pop():"/>"===s.content[s.content.length-1].content||a.push({tagName:i(s.content[0].content[1]),openedBraces:0}):a.length>0&&"punctuation"===s.type&&"{"===s.content?a[a.length-1].openedBraces++:a.length>0&&a[a.length-1].openedBraces>0&&"punctuation"===s.type&&"}"===s.content?a[a.length-1].openedBraces--:c=!0),(c||"string"==typeof s)&&a.length>0&&0===a[a.length-1].openedBraces){var o=i(s);r<n.length-1&&("string"==typeof n[r+1]||"plain-text"===n[r+1].type)&&(o+=i(n[r+1]),n.splice(r+1,1)),r>0&&("string"==typeof n[r-1]||"plain-text"===n[r-1].type)&&(o=i(n[r-1])+o,n.splice(r-1,1),r--),n[r]=new e.Token("plain-text",o,null,o)}s.content&&"string"!=typeof s.content&&t(s.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||r(e.tokens)}))}(Prism)}}]);
//# sourceMappingURL=130.f7b38b6b.chunk.js.map
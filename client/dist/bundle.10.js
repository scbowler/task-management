(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{393:function(e,t,n){"use strict";var o=n(2),r=n.n(o);t.a=function(e){var t=e.children;return r.a.createElement("h1",{className:"center main-text"},t)}},394:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var o=n(2),r=n.n(o);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(){var e,n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=i(this,(e=l(t)).call.apply(e,[this].concat(r)))).getRef=function(e){var t=n.props.getRef;"function"==typeof t&&t(e),n.button=e},n}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.type,o=void 0===n?"submit":n,a=e.color,c=void 0===a?"yellow darken-3":a,i=e.id,l=void 0===i?null:i,s=e.onClick,u=void 0===s?function(){}:s;return r.a.createElement("button",{ref:this.getRef,className:"btn waves-effect waves-light ".concat(c),id:l,onClick:u,type:o},t)}}])&&c(n.prototype,a),t}()},395:function(e,t,n){"use strict";var o=n(2),r=n.n(o);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(396);var p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=l(this,s(t).call(this,e))).labelClick=function(){n.setState({className:"active"}),n.input.focus()},n.getRef=function(e){var t=n.props.getRef;"function"==typeof t&&t(e),n.input=e},n.state={className:""},n}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,o.Component),n=t,(a=[{key:"componentDidMount",value:function(){this.props.input.value&&this.setState({className:"active"})}},{key:"componentDidUpdate",value:function(e){this.state.className||e.input.value||!this.props.input.value||this.setState({className:"active"})}},{key:"handleFocus",value:function(){var e=this.props.input.onFocus;this.setState({className:"active"}),e.apply(this,arguments)}},{key:"handleBlur",value:function(){var e=this.props.input,t=e.value,n=e.onBlur;""===t&&this.setState({className:""}),n.apply(this,arguments)}},{key:"render",value:function(){var e=this.props,t=e.center,n=e.col,o=e.height,a=e.input,i=e.label,l=e.type,s=e.className,u=e.disabled,p=e.autoComplete,f=e.preText,d=e.postText,y=e.inputClass,m=e.errorAlign,b=e.errorHeight,h=e.meta,v=h.error,w=h.touched,g=e.noError,j={height:o||null,textAlign:t?"center":"initial"};return r.a.createElement("div",{className:"col ".concat(n||"s12")},r.a.createElement("span",null,f||""),r.a.createElement("div",{className:"input-field ".concat(s||""," ").concat(f||d?"inline":"")},r.a.createElement("input",c({},a,{type:l||"text",style:j,disabled:u,ref:this.getRef,className:y||"",autoComplete:p||"off",onFocus:this.handleFocus.bind(this),onBlur:this.handleBlur.bind(this)})),r.a.createElement("label",{onClick:this.labelClick,className:this.state.className},i)),r.a.createElement("span",null,d||""),g?null:r.a.createElement("p",{style:{minHeight:b||22},className:"".concat(m||"center","-align orange-text text-darken-3")},w&&v))}}])&&i(n.prototype,a),t}();t.a=p},396:function(e,t,n){var o=n(397);"string"==typeof o&&(o=[[e.i,o,""]]);n(73)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},397:function(e,t,n){(e.exports=n(72)(!1)).push([e.i,"input {\n  color: #fff; }\n\ninput:not([type]):focus:not([readonly]),\ninput[type=text]:not(.browser-default):focus:not([readonly]),\ninput[type=password]:not(.browser-default):focus:not([readonly]),\ninput[type=email]:not(.browser-default):focus:not([readonly]),\ninput[type=url]:not(.browser-default):focus:not([readonly]),\ninput[type=time]:not(.browser-default):focus:not([readonly]),\ninput[type=date]:not(.browser-default):focus:not([readonly]),\ninput[type=datetime]:not(.browser-default):focus:not([readonly]),\ninput[type=datetime-local]:not(.browser-default):focus:not([readonly]),\ninput[type=tel]:not(.browser-default):focus:not([readonly]),\ninput[type=number]:not(.browser-default):focus:not([readonly]),\ninput[type=search]:not(.browser-default):focus:not([readonly]),\n.select-wrapper input.select-dropdown:focus,\ntextarea.materialize-textarea:focus:not([readonly]) {\n  border-bottom: 1px solid #f9a825 !important;\n  -webkit-box-shadow: 0 1px 0 0 #f9a825 !important;\n  box-shadow: 0 1px 0 0 #f9a825 !important; }\n\ninput:not([type]):focus:not([readonly]) + label,\ninput[type=text]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=password]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=email]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=url]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=time]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=date]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=datetime]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=datetime-local]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=tel]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=number]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=search]:not(.browser-default):focus:not([readonly]) + label,\ntextarea.materialize-textarea:focus:not([readonly]) + label,\n.input-field .lfz-select li:not(.disabled):not(.optgroup) > span {\n  color: #f9a825 !important; }\n\n.color-picker .icon {\n  border-radius: 50%;\n  color: white;\n  font-size: 25px;\n  height: 50px;\n  line-height: 50px;\n  margin: auto;\n  width: 50px; }\n",""])},400:function(e,t,n){"use strict";var o=n(416),r="http://localhost:9050",a={path:"/ws",query:{token:localStorage.getItem("taskToken")}};o(r,a),t.a=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:r,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return o(e===r?r:r+e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){var o,r,a;o=e,a=n[r=t],r in o?Object.defineProperty(o,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[r]=a})}return e}({},a,t))}},412:function(e,t,n){var o=n(413);"string"==typeof o&&(o=[[e.i,o,""]]);n(73)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},413:function(e,t,n){(e.exports=n(72)(!1)).push([e.i,".projects-container {\n  text-align: center; }\n\n.project-view {\n  padding-top: 68px; }\n  .project-view .project-content {\n    padding-left: 10px; }\n\n.project-settings-container {\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  height: 100vh;\n  left: 0;\n  overflow: auto;\n  padding: 25px 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 997; }\n  .project-settings-container .project-settings-content {\n    background-color: #ababab;\n    margin: auto;\n    padding: 0 20px;\n    width: 80%; }\n    .project-settings-container .project-settings-content .collection .collection-item {\n      background-color: #ababab; }\n    .project-settings-container .project-settings-content .user-info {\n      padding-top: 4px; }\n",""])},425:function(e,t){},463:function(e,t,n){var o=n(464);"string"==typeof o&&(o=[[e.i,o,""]]);n(73)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},464:function(e,t,n){(e.exports=n(72)(!1)).push([e.i,"div.project-card {\n  background-color: #515151;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  display: inline-block;\n  filter: brightness(0.7);\n  margin: 15px;\n  min-height: 200px;\n  position: relative;\n  text-align: left;\n  transition-duration: 200ms;\n  vertical-align: top;\n  width: 320px; }\n  div.project-card:hover {\n    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);\n    filter: brightness(1); }\n  div.project-card .card-title {\n    background-color: #212121;\n    color: #f9a825;\n    font-size: 1.5em;\n    font-weight: bold;\n    overflow: hidden;\n    padding: 8px 12px;\n    text-overflow: ellipsis;\n    text-transform: uppercase;\n    white-space: nowrap; }\n  div.project-card .card-contents {\n    padding: 16px; }\n  div.project-card.new-project {\n    opacity: 0.5; }\n    div.project-card.new-project:hover {\n      opacity: 1; }\n  div.project-card .new-project-contents {\n    display: flex;\n    height: 150px;\n    text-align: center; }\n    div.project-card .new-project-contents i {\n      font-size: 5em;\n      margin: auto; }\n  div.project-card .card-footer {\n    bottom: 0;\n    padding: 8px;\n    position: absolute;\n    text-align: center;\n    transition-duration: 250ms;\n    width: 100%;\n    z-index: 1; }\n    div.project-card .card-footer i {\n      position: relative;\n      top: 3px; }\n    div.project-card .card-footer:hover {\n      background-color: #212121; }\n      div.project-card .card-footer:hover i {\n        color: red; }\n  div.project-card .time {\n    bottom: 0;\n    left: 5px;\n    position: absolute; }\n    div.project-card .time .material-icons {\n      font-size: 13px;\n      vertical-align: text-top; }\n  div.project-card .created-by {\n    bottom: 0;\n    position: absolute;\n    right: 5px; }\n    div.project-card .created-by span {\n      color: #9f9f9f; }\n",""])},465:function(e,t,n){var o=n(466);"string"==typeof o&&(o=[[e.i,o,""]]);n(73)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},466:function(e,t,n){(e.exports=n(72)(!1)).push([e.i,".modal-container {\n  background-color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  left: 0;\n  height: 100vh;\n  overflow: scroll;\n  padding: 20px 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1000; }\n  .modal-container .modal-content {\n    background-color: #515151;\n    margin: auto;\n    width: 80%; }\n",""])},484:function(e,t,n){"use strict";n.r(t);var o=n(2),r=n.n(o),a=n(71),c=n(400),i=n(393),l=n(497),s=n(4);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(463);var y=function(e){function t(){var e,n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,(e=f(t)).call.apply(e,[this].concat(r)))).goToProject=function(){var e=n.props,t=e.history,o=e.match,r=e.pid;t.push("".concat(o.path,"/").concat(r))},n.deleteProject=function(e){e.stopPropagation(),console.log("Delete Project:",n.props.pid)},n}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.description,n=e.isOwner,o=e.name,a=e.time,c=e.user;return r.a.createElement("div",{className:"project-card",onClick:this.goToProject},r.a.createElement("div",{className:"card-title"},o),r.a.createElement("div",{className:"card-contents"},t),n?r.a.createElement("div",{className:"card-footer",onClick:this.deleteProject},r.a.createElement("i",{className:"material-icons"},"delete")):null,r.a.createElement("div",{className:"time"},r.a.createElement("small",null,r.a.createElement("i",{className:"material-icons"},"timelapse")," ",Object(s.formatTime)(a))),r.a.createElement("div",{className:"created-by"},r.a.createElement("small",null,r.a.createElement("span",null,"Created By:")," ",c)))}}])&&p(n.prototype,a),t}(),m=Object(l.a)(y),b=n(494),h=n(492),v=n(74),w=n(394),g=n(395);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(465);var P=function(e){function t(){var e,n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=function(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,(e=x(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},n.open=function(){return n.setState({isOpen:!0})},n.close=function(){var e=n.props.cancel;"function"==typeof close&&e(),n.setState({isOpen:!1})},n}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,o.Component),n=t,(a=[{key:"componentDidUpdate",value:function(e){var t=e.cancelRef,n=this.props.cancelRef;!t&&n&&n.addEventListener("click",this.close)}},{key:"render",value:function(){var e=r.a.createElement(w.a,{onClick:this.open},this.props.text||"Open"),t=this.state.isOpen,n=this.props,a=n.children,c=n.openElement,i=void 0===c?e:c;return t?r.a.createElement(o.Fragment,null,r.a.createElement("div",{className:"modal-container",onClick:this.close},r.a.createElement("div",{className:"modal-content",onClick:function(e){return e.stopPropagation()}},a)),i):r.a.createElement("span",{onClick:this.open},i)}}])&&O(n.prototype,a),t}();function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t,n,o,r,a,c){try{var i=e[a](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(o,r)}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){function t(){var e,n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=function(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,(e=_(t)).call.apply(e,[this].concat(r)))).state={cancelRef:null},n.createNewProject=function(){var e,t=(e=regeneratorRuntime.mark(function e(t){var o,r,a,c,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.props,r=o.createNewProject,a=o.history,c=o.match.path,e.next=3,r(t);case 3:(i=e.sent)&&a.push("".concat(c,"/").concat(i));case 5:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(o,r){var a=e.apply(t,n);function c(e){N(a,o,r,c,i,"next",e)}function i(e){N(a,o,r,c,i,"throw",e)}c(void 0)})});return function(e){return t.apply(this,arguments)}}(),n.resetNewProjectForm=function(){var e=n.props,t=e.clearProjectErrors,o=e.reset;t(),o()},n}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,o.Component),n=t,(a=[{key:"render",value:function(){var e=this,t=this.props,n=t.createErrors,o=t.handleSubmit,a=r.a.createElement("div",{className:"project-card new-project"},r.a.createElement("div",{className:"card-title"},"New Project"),r.a.createElement("div",{className:"new-project-contents"},r.a.createElement("i",{className:"material-icons"},"add")));return r.a.createElement(P,{cancel:this.resetNewProjectForm,cancelRef:this.state.cancelRef,openElement:a},r.a.createElement(i.a,null,"New Project"),r.a.createElement("form",{className:"row",onSubmit:o(this.createNewProject)},r.a.createElement("div",{className:"col s12 m8 offset-m2"},r.a.createElement("div",{className:"row"},r.a.createElement(b.a,{size:"s12 m8 offset-m2",name:"name",label:"Project Name",component:g.a}),r.a.createElement(b.a,{size:"s12 m8 offset-m2",name:"description",label:"Project Description",component:g.a})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s6"},r.a.createElement(w.a,{getRef:function(t){return e.setState({cancelRef:t})},color:"orange darken-4",id:"close-modal",type:"button"},"Cancel")),r.a.createElement("div",{className:"col s6"},r.a.createElement(w.a,null,"Create Project"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 right-align"},n.map(function(e){return r.a.createElement("p",{key:e,className:"orange-text text-darken-3"},e)}))))))}}])&&S(n.prototype,a),t}(),T=Object(a.b)(function(e){return{createErrors:e.projects.createErrors}},{clearProjectErrors:v.i,createNewProject:v.n})(Object(h.a)({form:"new-project-error"})(Object(l.a)(R)));function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function D(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(412);var I=function(e){function t(e){var n;return function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),(n=function(e,t){return!t||"object"!==z(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,F(t).call(this,e))).socket=Object(c.a)("/user-".concat(e.userPid)),n.socket.on("update-projects",function(){e.getAllProjects()}),n}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,o.Component),n=t,(a=[{key:"componentWillUnmount",value:function(){this.socket.off()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.clearProject,n=e.getAllProjects;t(),n()}},{key:"renderProjects",value:function(){var e=this.props,t=e.isOwner,n=e.list;return n?n.length?n.map(function(e){return r.a.createElement(m,A({key:e.pid,isOwner:t},e))}):r.a.createElement("h5",{className:"center"},"No Current Projects"):r.a.createElement("h5",{className:"center"},"Projects Loading...")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(i.a,null,"Projects"),r.a.createElement("div",{className:"projects-container"},this.renderProjects(),r.a.createElement(T,null)))}}])&&D(n.prototype,a),t}();t.default=Object(a.b)(function(e){var t=e.projects,n=t.isOwner;return{list:t.list,userPid:e.user.info.pid,isOwner:n}},{clearProject:v.h,getAllProjects:v.u})(I)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{393:function(e,t,n){"use strict";var r=n(2),a=n.n(r);t.a=function(e){var t=e.children;return a.a.createElement("h1",{className:"center main-text"},t)}},394:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(2),a=n.n(r);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(){var e,n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=c(this,(e=s(t)).call.apply(e,[this].concat(a)))).getRef=function(e){var t=n.props.getRef;"function"==typeof t&&t(e),n.button=e},n}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,r.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.type,r=void 0===n?"submit":n,o=e.color,i=void 0===o?"yellow darken-3":o,c=e.id,s=void 0===c?null:c,l=e.onClick,u=void 0===l?function(){}:l;return a.a.createElement("button",{ref:this.getRef,className:"btn waves-effect waves-light ".concat(i),id:s,onClick:u,type:r},t)}}])&&i(n.prototype,o),t}()},432:function(e,t,n){var r=n(476);"string"==typeof r&&(r=[[e.i,r,""]]);n(73)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(e.exports=r.locals)},476:function(e,t,n){(e.exports=n(72)(!1)).push([e.i,".edit-container {\n  position: relative; }\n  .edit-container .edit-form {\n    position: relative; }\n  .edit-container .input-buttons {\n    position: absolute;\n    text-align: center;\n    width: 100%; }\n    .edit-container .input-buttons button {\n      font-size: 2em;\n      margin: 0 15px; }\n  .edit-container .handle-close {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh; }\n\n.edit-content {\n  cursor: pointer;\n  position: relative; }\n  .edit-content .edit-icon {\n    display: none;\n    margin-left: 10px;\n    position: absolute; }\n  .edit-content:hover .edit-icon {\n    color: #5d5d5d;\n    display: inline; }\n\n.edit-header-container {\n  margin-bottom: 39px; }\n\n.edit-header-content {\n  color: #f9a825; }\n\n.edit-text-content {\n  margin-bottom: 58px; }\n",""])},477:function(e,t,n){var r=n(478);"string"==typeof r&&(r=[[e.i,r,""]]);n(73)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(e.exports=r.locals)},478:function(e,t,n){(e.exports=n(72)(!1)).push([e.i,".collaborators .collaborator-badges {\n  padding: 0 25px; }\n",""])},479:function(e,t,n){var r=n(480);"string"==typeof r&&(r=[[e.i,r,""]]);n(73)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(e.exports=r.locals)},480:function(e,t,n){(e.exports=n(72)(!1)).push([e.i,".time-tracking .active-timer {\n  background-color: #515151;\n  margin: 15px;\n  padding: 15px; }\n  .time-tracking .active-timer .time {\n    font-size: 2em;\n    margin: .5em 0;\n    text-align: center; }\n\n.time-tracking .time-tracking-display .time-action {\n  margin: 10px 0;\n  text-align: center; }\n\n.time-tracking .time-tracking-display .total-tracked .total-time {\n  background-color: #515151;\n  font-size: 3em;\n  margin: 0 15px;\n  padding: 10px;\n  text-align: center; }\n",""])},481:function(e,t,n){var r=n(482);"string"==typeof r&&(r=[[e.i,r,""]]);n(73)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(e.exports=r.locals)},482:function(e,t,n){(e.exports=n(72)(!1)).push([e.i,".full-task {\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  left: 0;\n  height: 100vh;\n  overflow: auto;\n  padding: 20px 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 997; }\n  .full-task .empty-card {\n    background-color: #515151;\n    margin: 15px;\n    padding: 10px 5px; }\n  .full-task .task-contents {\n    background-color: #ababab;\n    margin: auto;\n    width: 80%;\n    overflow: hidden; }\n    .full-task .task-contents h1 {\n      font-size: 2.5rem; }\n    .full-task .task-contents .task-body {\n      position: relative; }\n      .full-task .task-contents .task-body h5 {\n        color: #f9a825; }\n      .full-task .task-contents .task-body .delete-icon {\n        cursor: pointer;\n        position: absolute;\n        right: 10px;\n        top: 10px; }\n        .full-task .task-contents .task-body .delete-icon:hover {\n          color: red; }\n      .full-task .task-contents .task-body .messages .input-field label {\n        color: #7d7d7d; }\n      .full-task .task-contents .task-body .project-link {\n        color: #7d7d7d;\n        cursor: pointer;\n        margin-bottom: 40px; }\n        .full-task .task-contents .task-body .project-link:hover {\n          color: #fff; }\n      .full-task .task-contents .task-body .scroll-container {\n        overflow-x: hidden;\n        overflow-y: auto; }\n      .full-task .task-contents .task-body .task-info .row:not(.title) {\n        background-color: #515151;\n        margin-bottom: 10px;\n        padding: 5px; }\n        .full-task .task-contents .task-body .task-info .row:not(.title) b {\n          color: #8e8e8e; }\n",""])},493:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(71),i=n(400),c=n(74);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(432);var m=function(e){function t(){var e,n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=function(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,(e=f(t)).call.apply(e,[this].concat(a)))).state={editable:!1,value:""},n.cancel=function(){n.setState({editable:!1,value:n.props.content})},n.sendData=function(){var e,t=(e=regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=n.props.send,!(a=n.state.value)){e.next=8;break}if("function"==typeof r)return e.next=7,r(a);e.next=8;break;case 7:n.setEditable(!1);case 8:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){l(o,r,a,i,c,"next",e)}function c(e){l(o,r,a,i,c,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}(),n.keyboardSubmit=function(e){"Enter"===e.key&&e.shiftKey&&n.sendData(e)},n.setEditable=function(e){return n.setState({editable:e})},n.toggleEditable=function(){return n.setEditable(!n.state.editable)},n}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r.Component),n=t,(o=[{key:"componentDidUpdate",value:function(e,t){var n=e.content,r=t.editable,a=this.props.content,o=this.state.editable;n!==a&&this.setState({value:a}),!r&&o&&this.textarea.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.defaultContent,r=t.className,o=t.content,i=this.state,c=i.editable,s=i.value;return c?a.a.createElement("div",{className:"edit-container edit-header-container input-field"},a.a.createElement("div",{className:"handle-close",onClick:this.cancel}),a.a.createElement("form",{className:"edit-form edit-header-form",onSubmit:this.sendData},a.a.createElement("input",{onKeyPress:this.keyboardSubmit,ref:function(t){return e.textarea=t},onChange:function(t){var n=t.target;return e.setState({value:n.value})},className:"materialize-textarea ".concat(r||""),type:"text",value:s||""}),a.a.createElement("div",{className:"right"},a.a.createElement("small",null,"Press ",a.a.createElement("kbd",null,"Enter")," to Submit")),a.a.createElement("div",{className:"input-buttons"},a.a.createElement("button",{className:"btn btn-floating red",type:"button",onClick:this.cancel},a.a.createElement("i",{className:"material-icons"},"clear")),a.a.createElement("button",{className:"btn btn-floating green"},a.a.createElement("i",{className:"material-icons"},"done"))))):a.a.createElement("h1",{onClick:this.toggleEditable,className:"edit-content edit-header-content ".concat(r||"")},o||n||"Click to edit"," ",a.a.createElement("i",{className:"material-icons edit-icon"},"edit"))}}])&&u(n.prototype,o),t}();function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){var e,n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=function(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,(e=h(t)).call.apply(e,[this].concat(a)))).state={editable:!1,value:""},n.cancel=function(){n.setState({editable:!1,value:n.props.content})},n.sendData=function(){var e,t=(e=regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=n.props.send,!(a=n.state.value)){e.next=8;break}if("function"==typeof r)return e.next=7,r(a);e.next=8;break;case 7:n.setEditable(!1);case 8:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){b(o,r,a,i,c,"next",e)}function c(e){b(o,r,a,i,c,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}(),n.keyboardSubmit=function(e){"Enter"===e.key&&e.shiftKey&&n.sendData(e)},n.setEditable=function(e){return n.setState({editable:e})},n.toggleEditable=function(){return n.setEditable(!n.state.editable)},n}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.Component),n=t,(o=[{key:"componentDidUpdate",value:function(e,t){var n=e.content,r=t.editable,a=this.props.content,o=this.state.editable;n!==a&&this.setState({value:a}),!r&&o&&this.textarea.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.defaultContent,r=t.className,o=t.content,i=this.state,c=i.editable,s=i.value;return c?a.a.createElement("div",{className:"edit-container edit-text-container input-field"},a.a.createElement("div",{className:"handle-close",onClick:this.cancel}),a.a.createElement("form",{className:"edit-form edit-text-form",onSubmit:this.sendData},a.a.createElement("textarea",{onKeyPress:this.keyboardSubmit,ref:function(t){return e.textarea=t},onChange:function(t){var n=t.target;return e.setState({value:n.value})},className:"materialize-textarea ".concat(r||""),type:"text",value:s||""}),a.a.createElement("div",{className:"right"},a.a.createElement("small",null,a.a.createElement("kbd",null,"Shift")," + ",a.a.createElement("kbd",null,"Enter")," to Submit")),a.a.createElement("div",{className:"input-buttons"},a.a.createElement("button",{className:"btn btn-floating red",type:"button",onClick:this.cancel},a.a.createElement("i",{className:"material-icons"},"clear")),a.a.createElement("button",{className:"btn btn-floating green"},a.a.createElement("i",{className:"material-icons"},"done"))))):a.a.createElement("p",{onClick:this.toggleEditable,className:"edit-content edit-text-content ".concat(r||"")},o||n||"Click to edit"," ",a.a.createElement("i",{className:"material-icons edit-icon"},"edit"))}}])&&v(n.prototype,o),t}(),k=n(393),E=n(494),w=n(492),O=n(395),N=function(e){var t=e.created,n=e.author,r=e.message;return a.a.createElement("div",{className:"task-message-container z-depth-2"},a.a.createElement("div",{className:"task-message-content"},a.a.createElement("div",{className:"message"},r),a.a.createElement("div",{className:"info"},new Date(t).toLocaleString()," BY: ",n)))};function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(e){var n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),(n=function(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,T(t).call(this,e))).sendMessage=function(e){var t=e.message;n.socket.emit("new-message",{taskId:n.props.taskId,text:t}),n.props.reset()},n.state={messages:[],status:"connecting..."};var r=e.taskId;return n.socket=Object(i.a)("/msgs-".concat(r)),n.socket.on("connect",function(){n.updateStatus("connected")}),n.socket.on("update-messages",function(e){var t=e.messages;n.setState({messages:t})}),n}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,r.Component),n=t,(o=[{key:"updateStatus",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";this.setState({status:e})}},{key:"componentWillUnmount",value:function(){this.socket.close()}},{key:"renderMessages",value:function(){var e=this.state.messages;return e&&e.length?e.map(function(e){var t=e.author,n=e.createdAt,r=e.message,o=e.pid;return a.a.createElement(N,{key:o,author:t,created:n,message:r})}):a.a.createElement("h5",{className:"center empty-card white-text z-depth-2"},"No Messages For This task")}},{key:"render",value:function(){var e=this.props.handleSubmit,t=this.state.status;return a.a.createElement("div",{className:"col s12 messages"},a.a.createElement("h5",null,"Messages ",a.a.createElement("small",{className:"grey-text text-lighten-2"},t)),a.a.createElement("form",{onSubmit:e(this.sendMessage)},a.a.createElement("div",{className:"row"},a.a.createElement(E.a,{name:"message",label:"New Message",component:O.a,noError:!0}))),this.renderMessages())}}])&&S(n.prototype,o),t}(),C=Object(w.a)({form:"new-task-message"})(_),P=n(431),R=n(394);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var U=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,z(t).apply(this,arguments))}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,r.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.initSelect()}},{key:"initSelect",value:function(){M.FormSelect.init(this.select)}},{key:"componentDidUpdate",value:function(e){var t=e.input,n=e.options,r=this.props,a=r.input,o=r.options;(t.value.length&&!a.value.length||n.length!==o.length)&&this.initSelect()}},{key:"render",value:function(){var e=this,t=this.props,n=t.defaultOption,r=void 0===n?"Choose your option":n,o=t.input,i=t.meta,c=i.error,s=i.touched,l=t.multiple,u=void 0!==l&&l,f=t.options,p=(void 0===f?[]:f).map(function(e){var t=e.text,n=e.value;return a.a.createElement("option",{key:n,value:n},t)});return a.a.createElement("div",{className:"input-field col s12"},a.a.createElement("select",I({ref:function(t){return e.select=t}},o,{multiple:u}),a.a.createElement("option",{value:"",disabled:!0},r),p),a.a.createElement("p",{className:"red-text text-darken-2"},a.a.createElement("b",null,s&&c)))}}])&&D(n.prototype,o),t}();function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function W(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){F(o,r,a,i,c,"next",e)}function c(e){F(o,r,a,i,c,"throw",e)}i(void 0)})}}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(477);var V=function(e){function t(){var e,n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=function(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,(e=J(t)).call.apply(e,[this].concat(a)))).handleAddCollaborators=function(){var e=W(regeneratorRuntime.mark(function e(t){var r,a,o,i,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.collaborators,a=n.props,o=a.addTaskCollaborators,i=a.reset,c=a.taskId,e.next=4,o(c,r);case 4:n.updateCollaborators(),i();case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n}var n,o,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,r.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e=this;this.updateCollaborators(),this.props.socket.on("update-collaborators",function(){e.updateCollaborators()})}},{key:"componentWillUnmount",value:function(){this.props.clearTaskCollaborators()}},{key:"handleRemoveCollaborator",value:(c=W(regeneratorRuntime.mark(function e(t){var n,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props,r=n.deleteCollaborator,a=n.taskId,e.next=3,r(a,t);case 3:this.updateCollaborators();case 4:case"end":return e.stop()}},e,this)})),function(e){return c.apply(this,arguments)})},{key:"handleToggleBadgeMenu",value:function(e){var t=this.props,n=t.current;(0,t.toggleBadgeMenu)(e,n)}},{key:"toggleLead",value:(i=W(regeneratorRuntime.mark(function e(t){var n,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props,r=n.taskId,a=n.toggleCollaboratorLead,e.next=3,a(r,t);case 3:this.updateCollaborators();case 4:case"end":return e.stop()}},e,this)})),function(e){return i.apply(this,arguments)})},{key:"updateCollaborators",value:function(){var e=this.props,t=e.getTaskAvailableCollaborators,n=e.getTaskCollaborators,r=e.taskId;n(r),t(r)}},{key:"render",value:function(){var e=this,t=this.props,n=t.available,r=t.current,o=t.handleSubmit,i=r.map(function(t,n){var r=t.color,o=t.id,i=t.initials,c=t.isLead,s=t.name,l=t.open;return a.a.createElement(P.a,{key:o,color:r,initials:i,isLead:c,name:s,onClick:function(){return e.handleToggleBadgeMenu(n)},open:l},a.a.createElement("li",{onClick:function(){return e.toggleLead(o)}},c?"Remove Lead":"Make Lead"),a.a.createElement("li",{onClick:function(){return e.handleRemoveCollaborator(o)}},"Remove"))});return a.a.createElement("div",{className:"collaborators"},a.a.createElement("div",{className:"row"},a.a.createElement("h5",{className:"col s12"},"Collaborators"),a.a.createElement("div",{className:"col s12 collaborator-badges"},i)),a.a.createElement("form",{onSubmit:o(this.handleAddCollaborators),className:"row"},a.a.createElement(E.a,{component:U,defaultOption:"Select Collaborators to Add",name:"collaborators",multiple:!0,options:n}),a.a.createElement("div",{className:"col s12"},a.a.createElement(R.a,null,"Add Collaborators"))))}}])&&K(n.prototype,o),t}();V=Object(o.b)(function(e){var t=e.taskCollaborators;return{available:t.available,current:t.current}},{addTaskCollaborators:c.e,clearTaskCollaborators:c.k,deleteCollaborator:c.q,getTaskAvailableCollaborators:c.z,getTaskCollaborators:c.A,toggleBadgeMenu:c.I,toggleCollaboratorLead:c.J})(V);var Y=Object(w.a)({form:"add-collaborators",initialValues:{collaborators:[]},validate:function(e){return e.collaborators.length?{}:{collaborators:"Please select collaborators to add"}}})(V),G=function(e){var t=e.createdAt,n=e.createdBy,r=e.list,o=e.name,i=e.project,c=e.updatedAt;return a.a.createElement("div",{className:"task-info no-mb-rows"},a.a.createElement("div",{className:"row title"},a.a.createElement("h5",{className:"col s12"},"Info")),a.a.createElement("div",{className:"row z-depth-2"},a.a.createElement("div",{className:"col s4 right-align"},a.a.createElement("b",null,"Project: ")),a.a.createElement("div",{className:"col s8"},i)),a.a.createElement("div",{className:"row z-depth-2"},a.a.createElement("div",{className:"col s4 right-align"},a.a.createElement("b",null,"List: ")),a.a.createElement("div",{className:"col s8"},r)),a.a.createElement("div",{className:"row z-depth-2"},a.a.createElement("div",{className:"col s4 right-align"},a.a.createElement("b",null,"Task: ")),a.a.createElement("div",{className:"col s8"},o)),a.a.createElement("div",{className:"row z-depth-2"},a.a.createElement("div",{className:"col s4 right-align"},a.a.createElement("b",null,"Created By: ")),a.a.createElement("div",{className:"col s8"},n)),a.a.createElement("div",{className:"row z-depth-2"},a.a.createElement("div",{className:"col s4 right-align"},a.a.createElement("b",null,"Created: ")),a.a.createElement("div",{className:"col s8"},new Date(t).toLocaleString())),a.a.createElement("div",{className:"row z-depth-2"},a.a.createElement("div",{className:"col s4 right-align"},a.a.createElement("b",null,"Updated: ")),a.a.createElement("div",{className:"col s8"},new Date(c).toLocaleString())))},H=n(4);function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var te=function(e){function t(){var e,n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=function(e,t){return!t||"object"!==Q(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,(e=$(t)).call.apply(e,[this].concat(a)))).state={elapsed:n.getElapsed()},n.handleStop=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){X(o,r,a,i,c,"next",e)}function c(e){X(o,r,a,i,c,"throw",e)}i(void 0)})}}(regeneratorRuntime.mark(function e(){var t,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=n.props,r=t.stop,a=t.trackingId,clearInterval(n.interval),r(a);case 3:case"end":return e.stop()}},e,this)})),n.update=function(){n.setState({elapsed:n.getElapsed()})},n}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(t,r.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.interval=setInterval(this.update,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"getElapsed",value:function(){return(new Date).getTime()-this.props.start}},{key:"render",value:function(){var e=this.props,t=e.isOwner,n=e.user;return a.a.createElement("div",{className:"active-timer z-depth-2"},a.a.createElement("div",{className:"right-align"},n),a.a.createElement("div",{className:"time"},Object(H.formatTime)(this.state.elapsed)),a.a.createElement("div",{className:"center"},t&&a.a.createElement(R.a,{color:"btn-small red darken-2",onClick:this.handleStop},"STOP")))}}])&&Z(n.prototype,o),t}(),ne=Object(o.b)(null,{completeTimeTracking:c.m})(te);function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ae(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function oe(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){ae(o,r,a,i,c,"next",e)}function c(e){ae(o,r,a,i,c,"throw",e)}i(void 0)})}}function ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function se(e,t){return(se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(479);var le=function(e){function t(){var e,n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=function(e,t){return!t||"object"!==re(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,(e=ce(t)).call.apply(e,[this].concat(a)))).state={currentAccruing:0,hasActive:!0},n.updateAccruing=function(){var e=n.props.running,t=0,r=!1;clearTimeout(n.timeout),e.length&&(e.map(function(e){e.isOwner&&(r=!0),t+=(new Date).getTime()-e.start}),n.timeout=setTimeout(n.updateAccruing,1e3/e.length)),n.setState({currentAccruing:t,hasActive:r})},n.createNewTimeTracking=oe(regeneratorRuntime.mark(function e(){var t,r,a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props,r=t.clearWidget,a=t.newTimeTracking,o=t.taskId,r(),e.next=4,a(o);case 4:n.getTracking();case 5:case"end":return e.stop()}},e,this)})),n.stopActiveTimer=function(){var e=oe(regeneratorRuntime.mark(function e(t){var r,a,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.props,a=r.clearWidget,o=r.completeTimeTracking,i=r.taskId,a(),e.next=4,o(i,t);case 4:n.getTracking();case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&se(e,t)}(t,r.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e=this;this.getTracking(),this.props.socket.on("time-tracking-update",function(){e.getTracking()})}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"getTracking",value:(i=oe(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getTaskTimeTracking(this.props.taskId);case 2:this.updateAccruing();case 3:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{key:"renderActiveTimers",value:function(){var e=this,t=this.props,n=t.running,r=t.taskId;return n?n.length?n.map(function(t){return a.a.createElement(ne,{isOwner:t.isOwner,key:t.start,start:t.start,stop:e.stopActiveTimer,taskId:r,trackingId:t.pid,user:t.user})}):a.a.createElement("p",{className:"empty-card z-depth-2"},"No Active Timers"):a.a.createElement("p",null,"Loading Active Timers...")}},{key:"render",value:function(){var e=this.props.total,t=this.state,n=t.currentAccruing,r=t.hasActive;return a.a.createElement("div",{className:"time-tracking"},a.a.createElement("div",{className:"row"},a.a.createElement("h5",{className:"col s12"},"Time Tracking")),a.a.createElement("div",{className:"row time-tracking-display"},a.a.createElement("div",{className:"col s12 total-tracked"},a.a.createElement("h6",{className:"center"},"Total Tracked Time"),a.a.createElement("div",{className:"total-time z-depth-2"},Object(H.formatTime)(e+n))),a.a.createElement("div",{className:"col s12 time-action"},!r&&a.a.createElement(R.a,{onClick:this.createNewTimeTracking,color:"btn-small green darken-2"},"Start New Timer"))),a.a.createElement("div",{className:"row time-tracking-active"},a.a.createElement("div",{className:"col s12 center"},a.a.createElement("h6",null,"Active Timers"),this.renderActiveTimers())))}}])&&ie(n.prototype,o),t}(),ue=Object(o.b)(function(e){var t=e.timeTracking;return{completed:t.completed,running:t.running,total:t.total}},{clearWidget:c.l,completeTimeTracking:c.m,getTaskTimeTracking:c.B,newTimeTracking:c.F})(le);function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function me(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){pe(o,r,a,i,c,"next",e)}function c(e){pe(o,r,a,i,c,"throw",e)}i(void 0)})}}function de(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function be(e){return(be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ve(e,t){return(ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(481);var he=function(e){function t(e){var n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),(n=function(e,t){return!t||"object"!==fe(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,be(t).call(this,e))).close=function(){var e=n.props,t=e.history,r=e.match.params;t.push("/projects/".concat(r.project_id))},n.deleteTask=me(regeneratorRuntime.mark(function e(){var t,r,a,o,i,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props,r=t.deleteSingleTask,a=t.flagListForUpdate,o=t.history,i=t.match.params,c=t.task.listId,e.next=3,r(i.task_id);case 3:a(c),o.push("/projects/".concat(i.project_id));case 5:case"end":return e.stop()}},e,this)})),n.updateTask=function(){var e=me(regeneratorRuntime.mark(function e(t,r){var a,o,i,c,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props,o=a.flagListForUpdate,i=a.match.params,c=a.task.listId,s=a.updateTask,"name"===t&&o(c),e.next=4,s(t,i.task_id,r);case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}();var r=e.clearTask,a=e.getTask,o=e.match.params;return n.socket=Object(i.a)("/task-".concat(o.task_id)),n.socket.on("task-deleted",function(){r()}),n.socket.on("update-task",function(){a(o.task_id)}),n}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ve(e,t)}(t,r.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e=this.props;(0,e.getTask)(e.match.params.task_id)}},{key:"componentWillUnmount",value:function(){this.socket.off(),this.socket.close()}},{key:"renderTask",value:function(){var e=this,t=this.props,n=t.isProjectOwner,o=t.task,i=void 0===o?{}:o,c=t.match.params;if(null===i)return a.a.createElement(r.Fragment,null,a.a.createElement(k.a,null,"Task Deleted"),a.a.createElement("h5",{onClick:this.close,className:"project-link center"},"Return to Project"));var s={listId:i.listId,taskId:c.task_id,projectId:c.project_id,socket:this.socket};return a.a.createElement(r.Fragment,null,i.isOwner||n?a.a.createElement("i",{onClick:this.deleteTask,className:"delete-icon material-icons"},"delete"):null,a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col m7 s12"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col s12"},a.a.createElement(m,{send:function(t){return e.updateTask("name",t)},className:"center",content:i.name,defaultContent:"Click to add a title"})),a.a.createElement("div",{className:"col s12"},a.a.createElement(g,{send:function(t){return e.updateTask("description",t)},className:"center",content:i.description,defaultContent:"Click to add a description"}))),a.a.createElement(C,{task:i,taskId:c.task_id})),a.a.createElement("div",{className:"col m5 s12 info"},a.a.createElement("div",{className:"scroll-container no-mb-rows"},a.a.createElement(Y,s),a.a.createElement(ue,s),a.a.createElement("div",{className:"row"},a.a.createElement("h5",{className:"col s12"},"Related Tasks")),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col s12"},"Related task stuff here")),a.a.createElement(G,i)))))}},{key:"render",value:function(){return a.a.createElement("div",{onClick:this.close,className:"full-task"},a.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"task-contents"},a.a.createElement("div",{className:"task-body"},this.renderTask())))}}])&&de(n.prototype,o),t}();t.default=Object(o.b)(function(e){var t=e.tasks,n=e.projects;return{task:t.single,isProjectOwner:n.isOwner}},{clearTask:c.j,deleteSingleTask:c.s,flagListForUpdate:c.t,getTask:c.y,updateTask:c.K})(he)}}]);
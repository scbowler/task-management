(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{405:function(t,e,n){"use strict";var o=n(2),r=n.n(o),c=n(71),u=n(74);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}e.a=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"/account/sign-in",n=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],a=function(c){function u(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),l(this,f(u).apply(this,arguments))}var a,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(u,o.Component),a=u,(s=[{key:"componentDidMount",value:function(){this.checkAuth()}},{key:"componentDidUpdate",value:function(){this.checkAuth()}},{key:"checkAuth",value:function(){var t=this.props,o=t.auth,r=t.clearAuthRedirect,c=t.history,u=t.redirect;o!==n?c.push(e):u&&(r(),c.push(u))}},{key:"render",value:function(){return r.a.createElement(t,this.props)}}])&&i(a.prototype,s),u}();return Object(c.b)(function(t){var e=t.user,n=void 0===e?{}:e;return{auth:n.auth,redirect:n.redirect}},{clearAuthRedirect:u.f})(a)}},489:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n.n(o),c=n(498),u=n(486),a=n(69),i=n(405);e.default=function(t){var e=t.match.path;return r.a.createElement(c.a,null,r.a.createElement(u.a,{path:"".concat(e,"/profile"),component:Object(i.a)(Object(a.a)({load:function(){return n.e(7).then(n.bind(null,435))},name:"account_profile"}))}),r.a.createElement(u.a,{path:"".concat(e,"/sign-in"),component:Object(a.a)({load:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,436))},name:"account_sign_in"})}),r.a.createElement(u.a,{path:"".concat(e,"/sign-up"),component:Object(a.a)({load:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,485))},name:"account_sign_up"})}),r.a.createElement(u.a,{component:Object(a.a)({load:function(){return n.e(1).then(n.bind(null,177))},name:"not-found"})}))}}}]);
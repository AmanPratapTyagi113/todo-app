(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(t,e,r){},31:function(t,e,r){t.exports=r(40)},40:function(t,e,r){"use strict";r.r(e);var n=r(9),o=r.n(n),a=r(26),i=r.n(a),c=r(21),u=r(3),l=r(10),s=r(29),f=r(27),h=(r(24),function(t){var e=t.todo,r=t.toggleComplete,n=t.deleteTodo;return o.a.createElement("li",{className:"todo.completed ?  liComplete: li"},o.a.createElement("div",{className:"row"},o.a.createElement("p",{onClick:function(){return r(e)},className:"textComplete"},e.text)),o.a.createElement("button",{className:"button2",onClick:function(){return n(e.id)}},o.a.createElement(f.a,null)))}),p=r(28),d=r(15),m=Object(p.a)({apiKey:"AIzaSyBIRVDGsVo5kLSpz45nUiziQvK3uJxgrLs",authDomain:"todo-app-5c40b.firebaseapp.com",projectId:"todo-app-5c40b",storageBucket:"todo-app-5c40b.appspot.com",messagingSenderId:"299613338663",appId:"1:299613338663:web:a0ca43da7df75a1bc0a202"}),v=Object(d.e)(m);function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var s={};function f(){}function h(){}function p(){}var d={};c(d,o,function(){return this});var m=Object.getPrototypeOf,v=m&&m(m(L([])));v&&v!==e&&r.call(v,o)&&(d=v);var g=p.prototype=f.prototype=Object.create(d);function b(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=p,c(g,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),c(w.prototype,a,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(g),c(g,i,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var g=function(){var t=Object(n.useState)([]),e=Object(l.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)(""),f=Object(l.a)(i,2),p=f[0],m=f[1],g=function(){var t=Object(u.a)(y().mark(function t(e){return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(e),""!==p){t.next=4;break}return alert("Pleas enter a valid todo"),t.abrupt("return");case 4:return t.next=6,Object(d.a)(Object(d.b)(v,"todos"),{text:p,completed:!1});case 6:m("");case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();Object(n.useEffect)(function(){var t=Object(d.g)(Object(d.b)(v,"todos")),e=Object(d.f)(t,function(t){var e=[];t.forEach(function(t){e.push(Object(c.a)({},t.data(),{id:t.id}))}),a(e)});return function(){return e()}},[]);var b=function(){var t=Object(u.a)(y().mark(function t(e){return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.h)(Object(d.d)(v,"todos",e.id),{completed:!e.completed});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=Object(u.a)(y().mark(function t(e){return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.c)(Object(d.d)(v,"todos",e));case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),E=new Date;return o.a.createElement("div",{className:"bg"},o.a.createElement("div",{className:"container"},o.a.createElement("h3",{className:"heading"},"Todo App"),o.a.createElement("div",{className:"date"},o.a.createElement("p",null,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][E.getDay()],","),o.a.createElement("p",null,E.getDate()),o.a.createElement("p",null,["January","February","March","April","May","June","July","August","September","Octobar","November","December"][E.getMonth()]),o.a.createElement("p",null,E.getFullYear())),o.a.createElement("form",{onSubmit:g,className:"form"},o.a.createElement("input",{value:p,onChange:function(t){return m(t.target.value)},className:"input",type:"text",placeholder:"Add Todo"}),o.a.createElement("button",{className:"button"},o.a.createElement(s.a,{size:25}))),o.a.createElement("ul",null,r.map(function(t,e){return o.a.createElement(h,{key:e,todo:t,toggleComplete:b,deleteTodo:w})})),r.length<1?null:o.a.createElement("p",{className:"count"},"You have ".concat(r.length," todos"))))};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)))}},[[31,2,1]]]);
//# sourceMappingURL=main.f1273f69.chunk.js.map
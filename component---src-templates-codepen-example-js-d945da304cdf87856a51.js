webpackJsonp([37677945298892],{202:function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n(2),u=(r(a),n(7)),p=r(u),s=n(4),f={backgroundColor:s.colors.brand,color:s.colors.black,padding:"10px 25px",whiteSpace:"nowrap",transition:"background-color 0.2s ease-out",outline:0,border:"none",cursor:"pointer",":hover":{backgroundColor:s.colors.white},display:"inline-block",fontSize:16},d=function(e){function t(){return i(this,t),l(this,e.apply(this,arguments))}return c(t,e),t.prototype.componentDidMount=function(){this.codepenForm.submit()},t.prototype.render=function(){var e=this,t=this.props.pathContext,n=t.action,r=t.payload;return o.createElement(p.default,null,o.createElement("h1",null,"Redirecting to Codepen..."),o.createElement("form",{style:{paddingBottom:"50px"},ref:function(t){e.codepenForm=t},action:n,method:"POST"},o.createElement("input",{type:"hidden",name:"data",value:r}),o.createElement("p",null,"Not automatically redirecting?",o.createElement("br",null),o.createElement("br",null),o.createElement("input",{style:f,type:"submit",value:"Click here"}))))},t}(a.Component);t.default=d,e.exports=t.default}).call(t,n(3))}});
//# sourceMappingURL=component---src-templates-codepen-example-js-d945da304cdf87856a51.js.map
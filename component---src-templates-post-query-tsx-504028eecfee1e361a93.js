(self.webpackChunkswordman=self.webpackChunkswordman||[]).push([[205],{67228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},23646:function(e,t,r){var n=r(67228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},69100:function(e,t,r){var n=r(99489),o=r(57067);function c(t,r,a){return o()?(e.exports=c=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=c=function(e,t,r){var o=[null];o.push.apply(o,t);var c=new(Function.bind.apply(e,o));return r&&n(c,r.prototype),c},e.exports.__esModule=!0,e.exports.default=e.exports),c.apply(null,arguments)}e.exports=c,e.exports.__esModule=!0,e.exports.default=e.exports},57067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},46860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(23646),o=r(46860),c=r(60379),a=r(98206);e.exports=function(e){return n(e)||o(e)||c(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},60379:function(e,t,r){var n=r(67228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},92102:function(e,t,r){var n=r(92632);e.exports={MDXRenderer:n}},92632:function(e,t,r){var n=r(69100),o=r(319),c=r(59713),a=r(37316),u=["scope","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(67294),p=r(64983).mdx,f=r(76948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,c=a(e,u),s=f(t),d=i.useMemo((function(){if(!r)return null;var e=l({React:i,mdx:p},s),t=Object.keys(e),c=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(c)))}),[r,t]);return i.createElement(d,l({},c))}},94203:function(e,t,r){"use strict";var n=r(4942),o=r(70977),c=r(67294),a=r(1597),u=r(15853),s=r(64555);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.Z=function(e){var t=e.tags,r=(0,u.Z)(),i=r.tagsPath,p=r.basePath;return(0,o.tZ)(c.Fragment,null,t.map((function(e,t){return(0,o.tZ)(c.Fragment,{key:e.slug},!!t&&", ",(0,o.tZ)(a.Link,{sx:function(e){var t;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},null===(t=e.styles)||void 0===t?void 0:t.a)},to:(0,s.Z)("/"+p+"/"+i+"/"+e.slug)},e.name))})))}},3265:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(67294),o=r(14123),c=r(92102),a=r(41789),u=r(94203),s=r(71069),l=function(e){e.post;return null},i=["32px","16px","8px","4px"].map((function(e){return"rgba(0, 0, 0, 0.15) 0px "+e+" "+e+" 0px"})),p=function(e){var t,r,p,f=e.data.post;return n.createElement(a.Z,null,n.createElement(s.Z,{title:f.title,description:f.description?f.description:f.excerpt,image:f.banner?null===(t=f.banner)||void 0===t||null===(r=t.childImageSharp)||void 0===r||null===(p=r.resize)||void 0===p?void 0:p.src:void 0,pathname:f.slug,canonicalUrl:f.canonicalUrl}),n.createElement(o.X6,{as:"h1",variant:"styles.h1"},f.title),n.createElement("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},n.createElement("time",null,f.date),f.tags&&n.createElement(n.Fragment,null," — ",n.createElement(u.Z,{tags:f.tags})),f.timeToRead&&" — ",f.timeToRead&&n.createElement("span",null,f.timeToRead," min read")),n.createElement("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],boxShadow:i.join(", ")},variant:"layout.content"}},n.createElement(c.MDXRenderer,null,f.body)),n.createElement(l,{post:f}))};var f=function(e){var t=Object.assign({},e);return n.createElement(p,t)}}}]);
//# sourceMappingURL=component---src-templates-post-query-tsx-504028eecfee1e361a93.js.map
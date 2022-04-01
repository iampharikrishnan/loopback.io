"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[1103],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,y=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?o.createElement(y,i(i({ref:t},p),{},{components:r})):o.createElement(y,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9063:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return f}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],s={title:"How to reuse custom LoopBack Repository code",date:new Date("2020-06-02T00:00:00.000Z"),authors:"bajtos",slug:"2020-share-repository-code",tags:["Feature","Repository"]},c=void 0,l={permalink:"/blog/2020-share-repository-code",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2020/2020-06-02-share-repository-code.md",source:"@site/blog/2020/2020-06-02-share-repository-code.md",title:"How to reuse custom LoopBack Repository code",description:"Originally published on strongloop.com",date:"2020-06-02T00:00:00.000Z",formattedDate:"June 2, 2020",tags:[{label:"Feature",permalink:"/blog/tags/feature"},{label:"Repository",permalink:"/blog/tags/repository"}],readingTime:6.09,truncated:!0,authors:[{name:"Miroslav Bajto\u0161",title:"LoopBack Maintainer",url:"http://github.com/bajtos",imageURL:"https://avatars.githubusercontent.com/u/1140553",key:"bajtos"}],frontMatter:{title:"How to reuse custom LoopBack Repository code",date:"2020-06-02T00:00:00.000Z",authors:"bajtos",slug:"2020-share-repository-code",tags:["Feature","Repository"]},prevItem:{title:"LoopBack 4 May 2020 Milestone Update",permalink:"/blog/may-2020-milestone"},nextItem:{title:"LoopBack - Taking Express to the Next Level",permalink:"/blog/express-to-loopback"}},p={authorsImageUrls:[void 0]},u=[],m={toc:u};function f(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Originally published on ",(0,a.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,a.kt)("p",null,"When building a LoopBack 4 application, we often need to tweak or improve the default data access behavior provided by the framework. It's usually desirable to apply the same set of customizations for multiple models, possibly across several microservices. In this post, I'd like to share a few tips and tricks for reusing such repository code."))}f.isMDXComponent=!0}}]);
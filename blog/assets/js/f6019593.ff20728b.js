"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[2793],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(p,".").concat(h)]||d[h]||s[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1623:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return u},toc:function(){return s},default:function(){return h}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Building an Online Game With LoopBack 4 - Wrap-Up (Part 7)",date:new Date("2019-11-20T00:00:00.000Z"),authors:"wenbo",slug:"building-an-online-game-with-loopback-4-pt7",tags:["how-to"]},p=void 0,c={permalink:"/blog/building-an-online-game-with-loopback-4-pt7",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2019/2019-11-20-building-an-online-game-with-loopback-4-pt7.md",source:"@site/blog/2019/2019-11-20-building-an-online-game-with-loopback-4-pt7.md",title:"Building an Online Game With LoopBack 4 - Wrap-Up (Part 7)",description:"Part 7: Wrap-Up",date:"2019-11-20T00:00:00.000Z",formattedDate:"November 20, 2019",tags:[{label:"how-to",permalink:"/blog/tags/how-to"}],readingTime:2.205,truncated:!0,authors:[{name:"Wen Bo",title:"LoopBack Maintainer",url:"https://github.com/gobackhuoxing",imageURL:"https://avatars.githubusercontent.com/u/22156589",key:"wenbo"}],frontMatter:{title:"Building an Online Game With LoopBack 4 - Wrap-Up (Part 7)",date:"2019-11-20T00:00:00.000Z",authors:"wenbo",slug:"building-an-online-game-with-loopback-4-pt7",tags:["how-to"]},prevItem:{title:"Going Cloud Native with LoopBack 4",permalink:"/blog/going-cloud-native-with-loopback-4"},nextItem:{title:"CASCONxEVOKE Conference Recap for LoopBack",permalink:"/blog/cascon-evoke-2019"}},u={authorsImageUrls:[void 0]},s=[{value:"Part 7: Wrap-Up",id:"part-7-wrap-up",children:[{value:"In This Episode",id:"in-this-episode",children:[],level:3},{value:"What We Have Achieved",id:"what-we-have-achieved",children:[],level:3}],level:2}],d={toc:s};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"part-7-wrap-up"},"Part 7: Wrap-Up"),(0,a.kt)("h3",{id:"in-this-episode"},"In This Episode"),(0,a.kt)("p",null,"This is the final episode of this series. We've used LoopBack 4 to build an online web text-based adventure game. We've built the foundation with LoopBack, and I am going to summarize what we have achieved so far, and how can you apply all of this to your own project. "),(0,a.kt)("h3",{id:"what-we-have-achieved"},"What We Have Achieved"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/building-online-game-with-loopback-4-pt1/"},"episode 1"),", we created a simple APIs. You can do the same to create a start point for your own project, for example, a student registration system which has a ",(0,a.kt)("inlineCode",{parentName:"p"},"student")," model with properties like ",(0,a.kt)("inlineCode",{parentName:"p"},"studentId"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"major"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"course"),". Then we connected our project to MongoDB. You have the freedom to choose any database you want. LB4 supports most databases very well."))}h.isMDXComponent=!0}}]);
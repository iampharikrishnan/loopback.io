"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[1876],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),g=a,f=s["".concat(u,".").concat(g)]||s[g]||m[g]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9689:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return p},toc:function(){return m},default:function(){return g}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"LoopBack 4 2020 Q2 Overview",date:new Date("2020-07-14T00:00:00.000Z"),authors:"agnes512",slug:"loopback-4-2020-q2-overview",tags:["Quarterly update"]},u=void 0,c={permalink:"/blog/loopback-4-2020-q2-overview",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2020/2020-07-14-loopback-q2-overview.md",source:"@site/blog/2020/2020-07-14-loopback-q2-overview.md",title:"LoopBack 4 2020 Q2 Overview",description:"Originally published on strongloop.com",date:"2020-07-14T00:00:00.000Z",formattedDate:"July 14, 2020",tags:[{label:"Quarterly update",permalink:"/blog/tags/quarterly-update"}],readingTime:7.055,truncated:!0,authors:[{name:"Agnes Lin",title:"LoopBack Maintainer",url:"https://github.com/agnes512",imageURL:"https://avatars3.githubusercontent.com/u/50331796",key:"agnes512"}],frontMatter:{title:"LoopBack 4 2020 Q2 Overview",date:"2020-07-14T00:00:00.000Z",authors:"agnes512",slug:"loopback-4-2020-q2-overview",tags:["Quarterly update"]},prevItem:{title:"Community Q&A Monthly Digest - Jun 2020",permalink:"/blog/2020-Jun-slack-qa"},nextItem:{title:"LoopBack 4 June 2020 Milestone Update",permalink:"/blog/june-2020-milestone"}},p={authorsImageUrls:[void 0]},m=[],s={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Originally published on ",(0,o.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,o.kt)("p",null,"Over the recent months, this global pandemic has affected our lives in different ways; we hope you all stay safe during these difficult times. The LoopBack team has adapted to new ways of working, including virtually and in new settings. Even though it could be challenging sometimes, we are glad that we were able to complete most of our Q2 plan. Thanks to all the support from the team and the community!"),(0,o.kt)("p",null,"Here's a brief look at the Q2 summary:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#migration-guide"},"Migration Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#enhancing-documentation"},"Enhancing Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#leveraging-authentication-system"},"Leveraging Authentication System")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#apic/lb4-integration"},"APIC/LB4 Integration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#other-highlights"},"Other Highlights")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#building-loopBack-community"},"Building LoopBack Community"))))}g.isMDXComponent=!0}}]);
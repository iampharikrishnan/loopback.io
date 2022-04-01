"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7047],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||r;return n?o.createElement(d,i(i({ref:t},s),{},{components:n})):o.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7941:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return s},toc:function(){return u},default:function(){return m}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],p={title:"What's New in LoopBack 4 Authentication 2.0",date:new Date("2019-07-03T00:00:00.000Z"),authors:"emonddr",slug:"loopback-4-authentication-updates",tags:["feature","authentication"]},l=void 0,c={permalink:"/blog/loopback-4-authentication-updates",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2019/2019-07-03-loopback-4-authentication-updates.md",source:"@site/blog/2019/2019-07-03-loopback-4-authentication-updates.md",title:"What's New in LoopBack 4 Authentication 2.0",description:"Originally published on strongloop.com",date:"2019-07-03T00:00:00.000Z",formattedDate:"July 3, 2019",tags:[{label:"feature",permalink:"/blog/tags/feature"},{label:"authentication",permalink:"/blog/tags/authentication"}],readingTime:1.935,truncated:!0,authors:[{name:"Dominique Emond",title:"LoopBack Maintainer",url:"https://github.com/emonddr",imageURL:"https://avatars0.githubusercontent.com/u/6864736",key:"emonddr"}],frontMatter:{title:"What's New in LoopBack 4 Authentication 2.0",date:"2019-07-03T00:00:00.000Z",authors:"emonddr",slug:"loopback-4-authentication-updates",tags:["feature","authentication"]},prevItem:{title:"LoopBack 4 June 2019 Milestone Update",permalink:"/blog/loopback-june-2019-milestone"},nextItem:{title:"Building an Online Game With LoopBack 4 - User Authentication and Role-Based Access Control (Part 4)",permalink:"/blog/building-an-online-game-with-loopback-4-pt4"}},s={authorsImageUrls:[void 0]},u=[{value:"Looking for User References",id:"looking-for-user-references",children:[],level:2},{value:"Call to Action",id:"call-to-action",children:[],level:2}],h={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Originally published on ",(0,r.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,r.kt)("p",null,"We've refactored the authentication component to be more extensible and easier to use."),(0,r.kt)("p",null,"Now you can secure your endpoints with both ",(0,r.kt)("a",{parentName:"p",href:"http://www.passportjs.org/"},"passport-based"),"  and ",(0,r.kt)("inlineCode",{parentName:"p"},"LoopBack native")," authentication strategies that implement the interface ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/apidocs.authentication.authenticationstrategy.html"},"AuthenticationStrategy"),"."),(0,r.kt)("p",null,"The new design greatly simplifies the effort of application developers and extension developers since they now only need to focus on binding strategies to the application without having to understand/modify the strategy resolver or the action provider."),(0,r.kt)("p",null,"The core of the authentication component is available in ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@loopback/authentication"},"@loopback/authentication")," version ",(0,r.kt)("inlineCode",{parentName:"p"},"2.x"),", and the passport-based capabilities are now available in ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@loopback/authentication-passport"},"@loopback/authentication-passport"),"."),(0,r.kt)("p",null,"Here is a ",(0,r.kt)("strong",{parentName:"p"},"high level")," overview of the authentication component."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://loopback.io/pages/en/lb4/imgs/authentication_overview_highlevel.png",alt:"authentication_overview_highlevel"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A decorator to express an authentication requirement on controller methods"),(0,r.kt)("li",{parentName:"ul"},"A provider to access method-level authentication metadata"),(0,r.kt)("li",{parentName:"ul"},"An action in the REST sequence to enforce authentication"),(0,r.kt)("li",{parentName:"ul"},"An extension point to discover all authentication strategies and handle the delegation")),(0,r.kt)("p",null,"Detailed documentation about the design and usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"@loopback/authentication@2.x")," can be found ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Loopback-component-authentication.html"},"here"),"."),(0,r.kt)("p",null,"As an ",(0,r.kt)("strong",{parentName:"p"},"application developer"),", you only need 3 steps to secure your endpoints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Decorate the endpoints of a controller with the ",(0,r.kt)("inlineCode",{parentName:"li"},"@authenticate(strategyName, options?)")," decorator"),(0,r.kt)("li",{parentName:"ul"},"Insert the authentication action in a custom sequence "),(0,r.kt)("li",{parentName:"ul"},"Register the authentication strategy")),(0,r.kt)("p",null,"As an ",(0,r.kt)("strong",{parentName:"p"},"extension developer"),", you can ",(0,r.kt)("strong",{parentName:"p"},"contribute")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"LoopBack native")," authentication strategy by following the steps in ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Loopback-component-authentication.html#creating-a-custom-authentication-strategy"},"Creating a Custom Authentication Strategy"),", or a ",(0,r.kt)("inlineCode",{parentName:"p"},"passport-based")," authentication strategy by following the steps in ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@loopback/authentication-passport"},"Wrapping a Passport-based Strategy with the Passport Strategy Adapter"),"."),(0,r.kt)("p",null,"A tutorial and reference implementation on how to add JWT authentication to a LoopBack 4 application using ",(0,r.kt)("inlineCode",{parentName:"p"},"@loopback/authentication@2.x")," can be found ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Authentication-Tutorial.html"},"here"),". It involves an updated version of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback4-example-shopping"},"example shopping cart application"),"."),(0,r.kt)("h2",{id:"looking-for-user-references"},"Looking for User References"),(0,r.kt)("p",null,"As you might be aware, our ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io/"},"loopback.io")," web site has a brand new look. We're rebuilding the ",(0,r.kt)("inlineCode",{parentName:"p"},'"Who\'s using LoopBack"')," section to showcase our users and the use cases. If you would like to be a part of it, see the details in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/3047"},"this GitHub issue"),"."),(0,r.kt)("h2",{id:"call-to-action"},"Call to Action"),(0,r.kt)("p",null,"LoopBack's future success depends on you. We appreciate your continuous support and engagement to make LoopBack even better and meaningful for your API creation experience. Please join us and help the project by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues"},"Reporting issues"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md"},"Contributing")," code and documentation."),(0,r.kt)("li",{parentName:"ul"},"Opening a pull request on one of our ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/labels/good%20first%20issue"},'"good first issues"'),"."),(0,r.kt)("li",{parentName:"ul"},"Joining our ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/110"},"user group"),".")))}m.isMDXComponent=!0}}]);
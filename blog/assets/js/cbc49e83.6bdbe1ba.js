"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9788],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(o),m=a,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||r;return o?n.createElement(d,i(i({ref:t},c),{},{components:o})):n.createElement(d,i({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},6595:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return m}});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),i=["components"],l={title:"LoopBack 4 2019 Q2 Overview",date:new Date("2019-07-17T00:00:00.000Z"),authors:"dhmlau",slug:"loopback-4-2019-q2-overview",tags:["Quarterly update"]},p=void 0,s={permalink:"/blog/loopback-4-2019-q2-overview",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2019/2019-07-17-q2-overview.md",source:"@site/blog/2019/2019-07-17-q2-overview.md",title:"LoopBack 4 2019 Q2 Overview",description:"Originally published on strongloop.com",date:"2019-07-17T00:00:00.000Z",formattedDate:"July 17, 2019",tags:[{label:"Quarterly update",permalink:"/blog/tags/quarterly-update"}],readingTime:4.04,truncated:!0,authors:[{name:"Diana Lau",title:"LoopBack Maintainer",url:"https://github.com/dhmlau",imageURL:"https://avatars2.githubusercontent.com/u/25489897",key:"dhmlau"}],frontMatter:{title:"LoopBack 4 2019 Q2 Overview",date:"2019-07-17T00:00:00.000Z",authors:"dhmlau",slug:"loopback-4-2019-q2-overview",tags:["Quarterly update"]},prevItem:{title:"Building an Online Game With LoopBack 4 - Deploying our Application to Kubernetes on IBM Cloud (Part 5)",permalink:"/blog/building-an-online-game-with-loopback-4-pt5"},nextItem:{title:"LoopBack 4 June 2019 Milestone Update",permalink:"/blog/loopback-june-2019-milestone"}},c={authorsImageUrls:[void 0]},u=[{value:"Authentication",id:"authentication",children:[],level:3},{value:"Authorization",id:"authorization",children:[],level:3},{value:"Inclusion of Related Models",id:"inclusion-of-related-models",children:[],level:3},{value:"Architectural Improvements",id:"architectural-improvements",children:[],level:3},{value:"Migration",id:"migration",children:[],level:3},{value:"Internal Tooling and CI",id:"internal-tooling-and-ci",children:[],level:3},{value:"New Look and Feel on LoopBack Web Site",id:"new-look-and-feel-on-loopback-web-site",children:[],level:3},{value:"What&#39;s Next?",id:"whats-next",children:[],level:2},{value:"Previous Milestone Blogs",id:"previous-milestone-blogs",children:[],level:2},{value:"Call for Action",id:"call-for-action",children:[],level:2}],h={toc:u};function m(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Originally published on ",(0,r.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,r.kt)("p",null,"For the past few months, we have been focusing on the following stories: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#authentication"},"Authentication"),": released a new ",(0,r.kt)("inlineCode",{parentName:"li"},"@loopback/authentication")," 2.0 version."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#authorization"},"Authorization"),": ability to add authorization through interceptors."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inclusion_of_related_models"},"Inclusion of related models"),": set up foundation in ",(0,r.kt)("inlineCode",{parentName:"li"},"repository-json-schema")," package."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#architectural_improvements"},"Architectural improvements"),": introduction of lifecycle observers and interceptors."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#migration"},"Migration"),": allows you to migrate incrementally."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#internal_tooling_and_ci"},"Internal tooling and CI"),": Support Node.js 12, reduce build time, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_look_and_feel_on_loopBack_web_site"},"New Look and Feel on LoopBack Web Site"),": published a new look on the ",(0,r.kt)("a",{parentName:"li",href:"https://loopback.io"},"loopback.io")," web site.")),(0,r.kt)("p",null,"We have a monthly blog reviewing what we've done in each milestone. To stay tuned, don't forget to follow us on Twitter ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/@StrongLoop"},"@StrongLoop"),"."),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"We have recently released ",(0,r.kt)("inlineCode",{parentName:"p"},"@loopback/authentication")," 2.0. Now you can secure your endpoints with both passport-based and LoopBack native authentication strategies that implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthenticationStrategy")," interface. Our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback4-example-shopping"},"shopping app example")," has also been updated accordingly to include this capability. More details can be found in this ",(0,r.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/loopback-4-authentication-updates/"},"authentication updates blog post"),"."),(0,r.kt)("h3",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,"Besides ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Loopback-component-authorization.html"},"creating an authorization component")," to add authorization in your LoopBack 4 application, you can now do so by using interceptors. ",(0,r.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/building-an-online-game-with-loopback-4-pt4/"},"This tutorial")," shows how to do it from end to end."),(0,r.kt)("h3",{id:"inclusion-of-related-models"},"Inclusion of Related Models"),(0,r.kt)("p",null,"We have set up the foundation for inclusion of related models. We made improvements in our ",(0,r.kt)("inlineCode",{parentName:"p"},"repository-json-schema")," package to provide the base for inclusion. We updated our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/todo-list/"},(0,r.kt)("inlineCode",{parentName:"a"},"TodoList")," example")," to describe navigational properties. The approach we used is a temporary approach to demonstrate how inclusion would work. You can clone the example to check it out."),(0,r.kt)("h3",{id:"architectural-improvements"},"Architectural Improvements"),(0,r.kt)("p",null,"As one of the major architectural improvements, the concept of interceptor was introduced. Interceptors are reusable functions that provide aspect-oriented logic around method invocations. They can be applied for various uses. See the ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Interceptors.html"},"interceptors docs page")," for more details."),(0,r.kt)("p",null,"Besides the interceptor, LoopBack 4 now has a basic life cycle support. It allows registration of life cycle observers and actions, and there is a command line interface and a booter to make this even easier."),(0,r.kt)("p",null,"In addition, extensibility has been a great advancement for LoopBack 4. We've added decorator functions to allow you to ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Extension-point-and-extensions.html"},"add extensions even more easily"),"."),(0,r.kt)("h3",{id:"migration"},"Migration"),(0,r.kt)("p",null,"If you have existing LoopBack 3 applications, it's a good time to start looking into how to migrate them to LoopBack 4. You can do this incrementally by mounting your LB3 application to LoopBack 4. Read ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Migrating-from-LoopBack-3.html"},"this docs page")," for steps on how to do that."),(0,r.kt)("h3",{id:"internal-tooling-and-ci"},"Internal Tooling and CI"),(0,r.kt)("p",null,"There has been a lot of enhancement in our tooling. We covered a new major release (v2.0) of ",(0,r.kt)("inlineCode",{parentName:"p"},"@loopback/build")," in our ",(0,r.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/loopback-june-2019-milestone/"},"June milestone blog"),". "),(0,r.kt)("p",null,"We have also introduced the concept of experimental features to LoopBack development. The goal is to be able to release experimental features quickly for early feedback while maintaining high code quality on our production-ready code. For details, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/blob/labs/base/LABS.md"},"https://github.com/strongloop/loopback-next/blob/labs/base/LABS.md"),". "),(0,r.kt)("p",null,"Additionally, we have put tremendous effort into fixing the CI errors on the connectors, so that we can help land PRs from the community more quickly and more confidently. We've also reduced the build time in loopback-next which improves our development efficiency."),(0,r.kt)("p",null,"Lastly, Node.js 12 support has been added to the LoopBack 3 and LoopBack 4 core. The next step is to add Node.js 12 support to the connectors. "),(0,r.kt)("h3",{id:"new-look-and-feel-on-loopback-web-site"},"New Look and Feel on LoopBack Web Site"),(0,r.kt)("p",null,"Our web site ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io"},"loopback.io")," now has a new look! We have moved the ",(0,r.kt)("a",{parentName:"p",href:"https://v4.loopback.io"},"LoopBack 4 web site")," content back to our main web site."),(0,r.kt)("p",null,'We have rebuilt the "Who\'s using LoopBack" section to showcase our users. If you would like to be a part of it, see the details in ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/3047"},"this GitHub issue"),"."),(0,r.kt)("h2",{id:"whats-next"},"What's Next?"),(0,r.kt)("p",null,"We'd like to hear from you! Our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/docs/ROADMAP.md"},"Q3 roadmap")," started with a pull request. We'll continue to create future roadmaps in the form of a PR, so feel free to chime in!"),(0,r.kt)("p",null,"For the next 3 months, we'd like to focus on the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Continue with the Q2 stories. e.g. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/3242"},"Authentication"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/538"},"Authorization")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/1352"},"Inclusion of related models"),"."),(0,r.kt)("li",{parentName:"ul"},"Feature parity gap. e.g. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/2036"},"Declarative support")),(0,r.kt)("li",{parentName:"ul"},"Internal tooling/infrastructure: e.g. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/3072"},"support Node.js 12 in connectors"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/3161"},"reduce build time"),", etc."),(0,r.kt)("li",{parentName:"ul"},"Juggler-next: If time permits, we'd like to start looking into the infrastructure to prepare us to work on juggler-next.")),(0,r.kt)("h2",{id:"previous-milestone-blogs"},"Previous Milestone Blogs"),(0,r.kt)("p",null,"There are too many features added and bug fixes that cannot be captured here. Check out our previously published monthly milestone blog posts in Q2 for more details: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://strongloop.com/strongblog/april-2019-milestone/"},"April 2019")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://strongloop.com/strongblog/may-2019-milestone/"},"May 2019")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://strongloop.com/strongblog/loopback-june-2019-milestone/"},"June 2019"))),(0,r.kt)("h2",{id:"call-for-action"},"Call for Action"),(0,r.kt)("p",null,"LoopBack's future success depends on you. We appreciate your continuous support and engagement to make LoopBack even better and meaningful for your API creation experience. Please join us and help the project by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues"},"Reporting issues"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md"},"Contributing"),"\ncode and documentation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/labels/good%20first%20issue"},'Opening a pull request on one of our "good first issues"'),".")))}m.isMDXComponent=!0}}]);
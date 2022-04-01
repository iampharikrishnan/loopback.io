"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[3965],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(o),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return o?n.createElement(h,r(r({ref:t},c),{},{components:o})):n.createElement(h,r({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=o[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4284:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return m}});var n=o(7462),a=o(3366),i=(o(7294),o(3905)),r=["components"],l={title:"LoopBack 4 June 2019 Milestone Update",date:new Date("2019-07-09T00:00:00.000Z"),authors:"nabdelgadir",slug:"loopback-june-2019-milestone",tags:["Milestone update"]},p=void 0,s={permalink:"/blog/loopback-june-2019-milestone",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2019/2019-07-09-loopback-june-milestone.md",source:"@site/blog/2019/2019-07-09-loopback-june-milestone.md",title:"LoopBack 4 June 2019 Milestone Update",description:"Originally published on strongloop.com",date:"2019-07-09T00:00:00.000Z",formattedDate:"July 9, 2019",tags:[{label:"Milestone update",permalink:"/blog/tags/milestone-update"}],readingTime:7.785,truncated:!0,authors:[{name:"Nora Abdelgadir",title:"LoopBack Maintainer",url:"https://github.com/nabdelgadir",imageURL:"https://avatars0.githubusercontent.com/u/42985749",key:"nabdelgadir"}],frontMatter:{title:"LoopBack 4 June 2019 Milestone Update",date:"2019-07-09T00:00:00.000Z",authors:"nabdelgadir",slug:"loopback-june-2019-milestone",tags:["Milestone update"]},prevItem:{title:"LoopBack 4 2019 Q2 Overview",permalink:"/blog/loopback-4-2019-q2-overview"},nextItem:{title:"What's New in LoopBack 4 Authentication 2.0",permalink:"/blog/loopback-4-authentication-updates"}},c={authorsImageUrls:[void 0]},u=[{value:"Version 2.0.0 of <code>@loopback/build</code>",id:"version-200-of-loopbackbuild",children:[],level:2},{value:"Replacing <code>strong-docs</code> with <code>tsdocs</code>",id:"replacing-strong-docs-with-tsdocs",children:[],level:2},{value:"Jest and <code>@loopback/testlab</code>",id:"jest-and-loopbacktestlab",children:[],level:2},{value:"Authentication",id:"authentication",children:[],level:2},{value:"Inclusion of Related Models",id:"inclusion-of-related-models",children:[{value:"<code>getJsonSchema</code> Enhancement",id:"getjsonschema-enhancement",children:[],level:3},{value:"Navigation Properties Added to TodoList Example",id:"navigation-properties-added-to-todolist-example",children:[],level:3}],level:2},{value:"Partial Updates via <code>PATCH</code>",id:"partial-updates-via-patch",children:[],level:2},{value:"New GitHub Issue Templates",id:"new-github-issue-templates",children:[],level:2},{value:"CLI Improvement",id:"cli-improvement",children:[],level:2},{value:"New Team Member",id:"new-team-member",children:[],level:2},{value:"Other Changes",id:"other-changes",children:[],level:2},{value:"Looking for User References",id:"looking-for-user-references",children:[],level:2},{value:"What&#39;s Next?",id:"whats-next",children:[],level:2},{value:"Call to Action",id:"call-to-action",children:[],level:2}],d={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Originally published on ",(0,i.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,i.kt)("p",null,"As the temperature gets warmer the LoopBack team is spending this summer releasing hot deliverables. In June we focused on various enhancements such as releasing version 2.0.0 of ",(0,i.kt)("inlineCode",{parentName:"p"},"@loopback/build"),", replacing ",(0,i.kt)("inlineCode",{parentName:"p"},"strong-docs"),", and improving ",(0,i.kt)("inlineCode",{parentName:"p"},"@loopback/testlab"),". We also focused on authentication, inclusion of related models, and other improvements. You can see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/3035"},"June milestone")," for an overview of what we have worked on, and read on for more details."),(0,i.kt)("h2",{id:"version-200-of-loopbackbuild"},"Version 2.0.0 of ",(0,i.kt)("inlineCode",{parentName:"h2"},"@loopback/build")),(0,i.kt)("p",null,"In the past months, we have significantly evolved our build tooling. The last major change was the switch from ",(0,i.kt)("inlineCode",{parentName:"p"},"tslint")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint")," for linting. We decided it's time to clean up the code, remove unused parts and release a new major version."),(0,i.kt)("p",null,"The release introduced the following breaking changes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lb-apidocs")," helper is no longer available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lb-tslint")," helper is no longer available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lb-tsc")," is no longer choosing ",(0,i.kt)("inlineCode",{parentName:"li"},"outDir")," for you, you have to specify it explicitly."),(0,i.kt)("li",{parentName:"ul"},"It is no longer possible to the specify compilation target via a non-option argument like ",(0,i.kt)("inlineCode",{parentName:"li"},"lb-tsc es2017"),".")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/blob/master/packages/build/CHANGELOG.md#200-2019-06-17"},"release notes")," for more details and instructions on migrating your existing projects."),(0,i.kt)("p",null,"As part of these changes, we removed vulnerable dependencies and thus ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")," in newly scaffolded projects reports zero vulnerabilities \ud83c\udf89."),(0,i.kt)("h2",{id:"replacing-strong-docs-with-tsdocs"},"Replacing ",(0,i.kt)("inlineCode",{parentName:"h2"},"strong-docs")," with ",(0,i.kt)("inlineCode",{parentName:"h2"},"tsdocs")),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3055"},"PR#3055"),", we replaced ",(0,i.kt)("inlineCode",{parentName:"p"},"strong-docs")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"@loopback/tsdocs"),". We use ",(0,i.kt)("inlineCode",{parentName:"p"},"@loopback/tsdocs")," to generate markdown files on our website. With this change, we changed the home for our API docs; you can visit the ",(0,i.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/apidocs.index.html"},"new home")," on our website to see the docs. "),(0,i.kt)("p",null,"This change was a breaking change: as mentioned before, ",(0,i.kt)("inlineCode",{parentName:"p"},"lb-apidocs")," is no longer available for use, as it was removed as part of this PR. For alternate solutions, you can use Microsoft's ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@microsoft/api-extractor"},"api-extractor")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@microsoft/api-documenter"},"api-documenter"),"."),(0,i.kt)("p",null,"On the brighter side, by removing ",(0,i.kt)("inlineCode",{parentName:"p"},"strong-docs")," we also removed dependencies on 3rd party modules that have known security vulnerabilities but are no longer maintained."),(0,i.kt)("h2",{id:"jest-and-loopbacktestlab"},"Jest and ",(0,i.kt)("inlineCode",{parentName:"h2"},"@loopback/testlab")),(0,i.kt)("p",null,"We improved our testing helpers to support Jest testing framework."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3013"},"PR#3013")," fixed typings for ",(0,i.kt)("inlineCode",{parentName:"p"},"itSkippedOnTravis")," to remove an implicit dependency on Mocha typings, which was causing conflicts when using our testlab from Jest.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3040"},"PR#3040")," introduced a more generic helper ",(0,i.kt)("inlineCode",{parentName:"p"},"skipOnTravis")," which supports any BDD verbs like ",(0,i.kt)("inlineCode",{parentName:"p"},"describe")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"it"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"skipOnTravis(it, 'does something', async () => {\n  // the test code\n});\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3138"},"PR#3138")," added even more generic helper ",(0,i.kt)("inlineCode",{parentName:"p"},"skipIf")," that allows you to skip a test case or a test suite on arbitrary condition."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"skipIf(someCondition, it, 'does something', async () => {\n  // the test code\n});\n")))),(0,i.kt)("p",null,"We are also looking into ways to migrate our test suite from Mocha to Jest. Stay tuned for updates!"),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback4-example-shopping/pull/120"},"PR#120"),", the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback4-example-shopping"},"shopping cart application")," was updated to utilize the latest authentication package ",(0,i.kt)("inlineCode",{parentName:"p"},"@loopback/authentication2.x"),". You can read more about our latest authentication package in our blog ",(0,i.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/loopback-4-authentication-updates/"},"What's New in LoopBack 4 Authentication 2.0"),"."),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/2977"},"PR#2977"),", we introduced some new documentation to the authentication package we've been updating these past few months. See ",(0,i.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Loopback-component-authentication.html"},"Authentication")," for details."),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3046"},"PR#3046"),", a new authentication tutorial on ",(0,i.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Authentication-Tutorial.html"},"How to secure your LoopBack 4 application with JWT authentication")," was added."),(0,i.kt)("p",null,"We released the new adapter for passport-based strategies as ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@loopback/authentication-passport"},(0,i.kt)("inlineCode",{parentName:"a"},"@loopback/authentication-passport")),"; now you can follow the guide in ",(0,i.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Loopback-component-authentication.html"},"Use Passport-based Strategies")," to learn how to create and register a passport strategy and plug it into the authentication system."),(0,i.kt)("h2",{id:"inclusion-of-related-models"},"Inclusion of Related Models"),(0,i.kt)("h3",{id:"getjsonschema-enhancement"},(0,i.kt)("inlineCode",{parentName:"h3"},"getJsonSchema")," Enhancement"),(0,i.kt)("p",null,"A community user, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/samarpanB"},"@samarpanB"),", has contributed ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/2975"},"PR#2975")," adding a new option ",(0,i.kt)("inlineCode",{parentName:"p"},"includeRelations")," to the helper ",(0,i.kt)("inlineCode",{parentName:"p"},"getJsonSchema"),". When the option is enabled, the helper adds navigational properties for inclusion of related models in the emitted model schema."),(0,i.kt)("h3",{id:"navigation-properties-added-to-todolist-example"},"Navigation Properties Added to TodoList Example"),(0,i.kt)("p",null,"As part of our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/1352"},"Inclusion of Related Models Epic"),", we updated our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/todo-list"},"TodoList example")," to also include navigational properties. After the work done in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3171"},"PR#3171"),", now when getting a ",(0,i.kt)("inlineCode",{parentName:"p"},"Todo")," with an inclusion filter, its included ",(0,i.kt)("inlineCode",{parentName:"p"},"TodoList")," will be a part of the response and vice versa."),(0,i.kt)("p",null,"When you call ",(0,i.kt)("inlineCode",{parentName:"p"},"GET todos/2"),", you get the following response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1,\n  "title": "Take over the galaxy",\n  "desc": "MWAHAHAHAHAHAHAHAHAHAHAHAHAMWAHAHAHAHAHAHAHAHAHAHAHAHA",\n  "todoListId": 1\n}\n')),(0,i.kt)("p",null,"And now when you call ",(0,i.kt)("inlineCode",{parentName:"p"},"GET todos/2")," with the filter ",(0,i.kt)("inlineCode",{parentName:"p"},"{include: [{relation: 'todo-lists'}]}"),", you get the following response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1,\n  "title": "Take over the galaxy",\n  "desc": "MWAHAHAHAHAHAHAHAHAHAHAHAHAMWAHAHAHAHAHAHAHAHAHAHAHAHA",\n  "todoListId": 1,\n  "todoList": {\n    "id": 1,\n    "title": "Sith lord\'s check list"\n  }\n}\n')),(0,i.kt)("p",null,"You can check out the new full example by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"lb4 example todo-list"),"."),(0,i.kt)("h2",{id:"partial-updates-via-patch"},"Partial Updates via ",(0,i.kt)("inlineCode",{parentName:"h2"},"PATCH")),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3199"},"PR#3199"),", we enabled added a ",(0,i.kt)("inlineCode",{parentName:"p"},"partial")," option for ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonSchemaOptions"),". This addition allowed us to emit schema where all the model properties are optional. By doing this, this lets us to now do ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH")," requests without having to include all required properties in the request body."),(0,i.kt)("p",null,"For example, before when trying to update a ",(0,i.kt)("inlineCode",{parentName:"p"},"Todo")," from our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/todo"},(0,i.kt)("inlineCode",{parentName:"a"},"Todo")," example"),", you'd have to include the ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," property in the request body:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PATCH todos/1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "title": "Take over the galaxy", \n   "desc": "get the resources ready" \n}\n')),(0,i.kt)("p",null,"But now even though ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," is still required, it is optional when doing a ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH")," request. So now the following is a valid request body to pass to the following request:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PATCH todos/1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "desc": "get the resources ready" \n}\n')),(0,i.kt)("p",null,"All newly created projects generated through the CLI will allow partial updates through ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH"),"."),(0,i.kt)("h2",{id:"new-github-issue-templates"},"New GitHub Issue Templates"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3202"},"PR#3202"),", we updated the GitHub issues template, so that when you open a new issue, you're taken to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/new/choose"},"a page")," (see image below) where you can choose the type of issue to open. The options we offer are: bug report, feature request, question, and security vulnerability. With these new more specific templates, it will be easier for the team to go through and understand new issues. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Issue template",src:o(489).Z,width:"1466",height:"800"})),(0,i.kt)("h2",{id:"cli-improvement"},"CLI Improvement"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/2989"},"PR#2989"),", we made some improvements to the CLI:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Changed/unified the naming convention to eliminate bugs causing by the input. See the ",(0,i.kt)("a",{parentName:"li",href:"https://loopback.io/doc/en/lb4/Command-line-interface.html#naming-convention"},"naming conventions")," we follow in LoopBack 4."),(0,i.kt)("li",{parentName:"ul"},"Added a prompt message to warn/notify users the change to their inputs and file names in advance. For example:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ lb4 controller\n? Controller class name: todo\n$ Controller Todo will be created in src/controllers/todo.controller.ts\n")))),(0,i.kt)("p",null,"We also made some fixes to our ",(0,i.kt)("inlineCode",{parentName:"p"},"lb4 discover")," command: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/pull/3127"},"PR#3127"),", we fixed a bug so that the prompt exits properly when using the command."),(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/pull/3015/"},"PR#3015"),", community member ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/samarpanB"},"@samarpanB")," contributed a fix that would properly stringify ",(0,i.kt)("inlineCode",{parentName:"li"},"modelSettings")," that go into the ",(0,i.kt)("inlineCode",{parentName:"li"},"@model")," decorator."),(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/pull/3115"},"PR#3115"),", community member ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/marvinirwin"},"@marvinirwin")," contributed a fix that makes the ",(0,i.kt)("inlineCode",{parentName:"li"},"schema")," field in ",(0,i.kt)("inlineCode",{parentName:"li"},"modelSettings")," use the owner of the schema.")),(0,i.kt)("h2",{id:"new-team-member"},"New Team Member"),(0,i.kt)("p",null,"We have a new addition to our LoopBack team: Agnes (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/agnes512"},"@agnes512 on GitHub"),") has joined the team as our intern for the next year. She has already contributed improvements to our documentation, our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-connector-cloudant/"},(0,i.kt)("inlineCode",{parentName:"a"},"cloudant")," connector"),", our CLI, and more. We're happy to have her on our team and look forward to see what she accomplishes in the future."),(0,i.kt)("h2",{id:"other-changes"},"Other Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We introduced a shared test suite that allows us to test any Repository implementation against any supported connector, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultCrudRepository")," against ",(0,i.kt)("inlineCode",{parentName:"li"},"loopback-connector-mongodb"),". This suite will help us to catch database-specific problems that went undiscovered so far. See ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/pull/3079"},"PR#3097"),"."),(0,i.kt)("li",{parentName:"ul"},"We reworked the ",(0,i.kt)("inlineCode",{parentName:"li"},"cloudant")," connector test setup so that both juggler versions 3.x and 4.x are triggered. So far connectors ",(0,i.kt)("inlineCode",{parentName:"li"},"mongodb"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"postgresql"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"kv-redis"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"cloudant")," run the shared tests. See ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-connector-cloudant/pull/206"},"PR#206"),"."),(0,i.kt)("li",{parentName:"ul"},"We honoured the arguments for another two LoopBack 3 CLI commands: ",(0,i.kt)("inlineCode",{parentName:"li"},"lb remote-method")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"lb middleware"),". See ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/strongloop/generator-loopback/pull/410"},"PR#410"),"."),(0,i.kt)("li",{parentName:"ul"},"We deprecated the ",(0,i.kt)("inlineCode",{parentName:"li"},"@loopback/openapi-v3-types")," package. See ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/pull/3220"},"PR#3220"),"."),(0,i.kt)("li",{parentName:"ul"},"We improved the documentation for our ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback4-example-shopping"},"shopping cart application"),". See ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback4-example-shopping/pull/183"},"PR#183"),".")),(0,i.kt)("p",null,"We have finished the migration from GreenKeeper to RenovateBot and added documentation for LoopBack developers describing how to work with RenovateBot's pull requests. Learn more in the new section ",(0,i.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/contrib/code-contrib-lb4.html#renovate-bot"},"Renovate bot")," in our documentation for developers."),(0,i.kt)("p",null,"We have upgraded our eslint-related infrastructure to eslint version 6 and added few more rules to the default eslint config to catch even more programming errors:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md"},"no-floating-promise")," to detect & reject usage of Promise-like values in statements without handling their errors appropriately. We used to have this rule enabled in our old tslint-based setup but had to switch it temporarily off because it was not available in typescript-eslint until recently."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eslint.org/docs/rules/no-prototype-builtins"},"no-prototype-builtins")," to detect code that can introduce Prototype Poisoning vulnerability. This rule was promoted to recommended rules in eslint version 6."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eslint.org/docs/rules/require-atomic-updates"},"require-atomic-updates")," to report assignments to variables or properties where a race condition may be introduced. This rule was promoted to recommended rules in eslint version 6.")),(0,i.kt)("h2",{id:"looking-for-user-references"},"Looking for User References"),(0,i.kt)("p",null,"As you might be aware, the ",(0,i.kt)("a",{parentName:"p",href:"https://loopback.io/"},"loopback.io")," website has a brand new look. We'd like to rebuild the \"Who's using LoopBack\" section and showcase our users and their use cases. If you would like to be a part of it, see the details in this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/3047"},"GitHub issue"),"."),(0,i.kt)("h2",{id:"whats-next"},"What's Next?"),(0,i.kt)("p",null,"If you're interested in what we're working on next, you can check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/3241"},"July milestone"),"."),(0,i.kt)("h2",{id:"call-to-action"},"Call to Action"),(0,i.kt)("p",null,"LoopBack's future success depends on you. We appreciate your continuous support and engagement to make LoopBack even better and meaningful for your API creation experience. Please join us and help the project by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues"},"Reporting issues"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md"},"Contributing")," code and documentation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/labels/good%20first%20issue"},'Opening a pull request on one of our "good first issues"'),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/110"},"Joining")," our user group.")))}m.isMDXComponent=!0},489:function(e,t,o){t.Z=o.p+"assets/images/issue-template-8b8bafaa4921091d611520948a0d42bb.png"}}]);
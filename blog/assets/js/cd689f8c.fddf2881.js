"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[1600],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6398:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return d},default:function(){return u}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],l={title:"LoopBack 4 March 2019 Milestone Update",date:new Date("2019-04-09T00:00:00.000Z"),authors:"jannyhou",slug:"march-2019-milestone",tags:["Milestone update"]},p=void 0,s={permalink:"/blog/march-2019-milestone",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2019/2019-04-09-march-milestone.md",source:"@site/blog/2019/2019-04-09-march-milestone.md",title:"LoopBack 4 March 2019 Milestone Update",description:"We landed an outstanding number of code contributions in March, making for a very productive month! We merged 63 PRs in total, and 10 out of them are from the community. Cheers!",date:"2019-04-09T00:00:00.000Z",formattedDate:"April 9, 2019",tags:[{label:"Milestone update",permalink:"/blog/tags/milestone-update"}],readingTime:6.435,truncated:!0,authors:[{name:"Janny Hou",title:"LoopBack Maintainer",url:"https://github.com/jannyhou",imageURL:"https://avatars2.githubusercontent.com/u/12554153",key:"jannyhou"}],frontMatter:{title:"LoopBack 4 March 2019 Milestone Update",date:"2019-04-09T00:00:00.000Z",authors:"jannyhou",slug:"march-2019-milestone",tags:["Milestone update"]},prevItem:{title:"LoopBack 4 2019 Q1 Overview",permalink:"/blog/loopback-4-2019-q1-overview"},nextItem:{title:"Experimenting with Plain JavaScript Programming in LoopBack 4",permalink:"/blog/loopback4-javascript-experience"}},c={authorsImageUrls:[void 0]},d=[{value:"Migration from LoopBack 3 to LoopBack 4",id:"migration-from-loopback-3-to-loopback-4",children:[],level:2},{value:"Extension Pattern Example",id:"extension-pattern-example",children:[],level:2},{value:"Context Improvement",id:"context-improvement",children:[],level:2},{value:"Relations",id:"relations",children:[],level:2},{value:"Authentication and Authorization",id:"authentication-and-authorization",children:[],level:2},{value:"Inclusion of Related Models",id:"inclusion-of-related-models",children:[],level:2},{value:"Partial Update",id:"partial-update",children:[],level:2},{value:"JavaScript Experience",id:"javascript-experience",children:[],level:2},{value:"Other Updates",id:"other-updates",children:[],level:2},{value:"Community Contributions",id:"community-contributions",children:[],level:2},{value:"Call to Action",id:"call-to-action",children:[],level:2}],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We landed an outstanding number of code contributions in March, making for a very productive month! We merged 63 PRs in total, and 10 out of them are from the community. Cheers!"),(0,i.kt)("p",null,"The team was able to make good progress of the epics we are focusing on, like LB3 to LB4 migration, adding ",(0,i.kt)("inlineCode",{parentName:"p"},"@loopback/context")," features, JavaScript experience, the authentication system, and describing model properties to be more flexible. Read more to see the details of our achievements in March."),(0,i.kt)("h2",{id:"migration-from-loopback-3-to-loopback-4"},"Migration from LoopBack 3 to LoopBack 4"),(0,i.kt)("p",null,"We started to incrementally work on the migration stories created from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/2318"},"PoC PR"),". This month we implemented the Express router to allow LoopBack 4 app developers to add arbitrary set of Express routes and provide OpenAPI specifications. You can call ",(0,i.kt)("inlineCode",{parentName:"p"},"mountExpressRouter")," on either the app level or the rest server level to mount external routes. For details please check the ",(0,i.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Routes.html#mounting-an-express-router"},"router's documentation"),"."),(0,i.kt)("h2",{id:"extension-pattern-example"},"Extension Pattern Example"),(0,i.kt)("p",null,"As a framework built on top of the IoC (Inversion of Control) and DI (Dependency Injection), the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.eclipse.org/FAQ_What_are_extensions_and_extension_points%3F"},"extension point")," is commonly used in LoopBack 4 to declare contracts for extension contributors to plug-in components. The existing usages of extension point include the request body parser and the boot strapper. It is also needed for supporting multiple authentication strategies. Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/greeter-extension"},"greeter extension point")," to learn the best practice of registering an extension point along with its extensions. "),(0,i.kt)("h2",{id:"context-improvement"},"Context Improvement"),(0,i.kt)("p",null,"The discussion and review of a series of context enhancement PRs keeps moving. This month we landed the PR that implemented the context view feature. A context view is created to track artifacts and is able to watch the come and go bindings. More details can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Context.html#context-view"},"Context document"),"."),(0,i.kt)("p",null,"We have also enforced the dependency injection for bindings with the ",(0,i.kt)("inlineCode",{parentName:"p"},"SINGLETON")," scope to make sure their dependencies can only be resolved from the owner context and its ancestors, but ",(0,i.kt)("strong",{parentName:"p"},"NOT")," from any of the child contexts. This is required as the value for a singleton binding is shared in the subtree rooted at the context where the binding is contained. Dependencies for a singleton cannot be resolved from a child context which is not visible and it may be recycled. See ",(0,i.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Dependency-injection.html#dependency-injection-for-bindings-with-different-scopes"},"the Dependency Injection documentations")," for more details."),(0,i.kt)("p",null,"Now users can specify the scope in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@bind")," decorator when annotating an artifact class with ",(0,i.kt)("inlineCode",{parentName:"p"},"@bind"),". The application level bindings are improved by honoring more configurations in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@bind")," decorator. Now users could specify the binding scope and the namespace of tags as the inputs of ",(0,i.kt)("inlineCode",{parentName:"p"},"@bind"),". Details can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Binding.html#configure-binding-attributes-for-a-class"},"the binding document"),"."),(0,i.kt)("h2",{id:"relations"},"Relations"),(0,i.kt)("p",null,"We solved the self relation issue and created corresponding test cases as the reference usage. You can check ",(0,i.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/BelongsTo-relation.html#handling-recursive-relations"},"the documentation for handling recursive relations")," to learn how to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"hasMany")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"belongsTo")," relation to the same entity."),(0,i.kt)("h2",{id:"authentication-and-authorization"},"Authentication and Authorization"),(0,i.kt)("p",null,"Before writing the extension point for plugging in different authentication strategies, we decided to do some investigation of the popular authentication mechanisms and adopted the user scenario driven development. This is to make sure the abstractions for services are common enough. The design documents for our authentication system can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/blob/master/packages/authentication/docs/authentication-system.md"},"here"),". The document begins with illustrating a LoopBack 4 application that supports multiple authentication approaches and finally divides the responsibilities among different artifacts. The abstractions we created in March are two interfaces for the user service and the token service in ",(0,i.kt)("inlineCode",{parentName:"p"},"@loopback/authentication"),"."),(0,i.kt)("h2",{id:"inclusion-of-related-models"},"Inclusion of Related Models"),(0,i.kt)("p",null,"The initial inclusion spike left us a question: how to distinguish the navigational property from the normal model properties? This month we had a PoC to demonstrate describing the navigational model properties with a new interface along with how to generate the corresponding OpenAPI schema."),(0,i.kt)("p",null,"The proposed solution has two major parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"At TypeScript level, we will introduce a new interface to describe navigational properties and a new type to describe data object holding both own properties and navigational properties. For example, when a ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," model has many ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," instances:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Navigation properties of the Category model.\ninterface CategoryRelations {\n  products?: ProductWithRelations[];\n  }\n\n// Category's own properties and navigation properties.\nexport type CategoryWithRelations = Category & CategoryRelations;\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When decorating controller methods with OpenAPI metadata, we need to include navigational properties in the schema generated from the model definition. This will be achieved by replacing ",(0,i.kt)("inlineCode",{parentName:"p"},"x-ts-type")," extension with a call of a new helper function ",(0,i.kt)("inlineCode",{parentName:"p"},"getModelSchemaRef")," with a new flag ",(0,i.kt)("inlineCode",{parentName:"p"},"includeRelations"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-diff"}," schema: {\n   type: 'array',\n-   items: {'x-ts-type': Category},\n+   items: getModelSchemaRef(Category, {includeRelations: true})\n   },\n }\n")))),(0,i.kt)("p",null,"Under the hood, ",(0,i.kt)("inlineCode",{parentName:"p"},"getModelSchemaRef")," will create a new OpenAPI Schema describing both own and navigational properties of the given model and give the schema a unique title so that we can reference it from multiple places."),(0,i.kt)("p",null,"Please check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/2592"},"PR 2592")," for more details and the discussions we had. And the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/2152#issuecomment-475575548"},"follow-up stories")," are created as our next target."),(0,i.kt)("h2",{id:"partial-update"},"Partial Update"),(0,i.kt)("p",null,"While researching options for describing navigational model properties, Miroslav realized that the proposed solution is easy to extend to support other kinds of schema generated from model."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To describe request body of a ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH")," request, we can introduce a new ",(0,i.kt)("inlineCode",{parentName:"p"},"getModelSchemaRef")," flag called ",(0,i.kt)("inlineCode",{parentName:"p"},"partial"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"schema: getModelSchemaRef(Category, {partial: true}),\n")),(0,i.kt)("p",{parentName:"li"},"At TypeScript level, such data object can be described using TypeScript's ",(0,i.kt)("inlineCode",{parentName:"p"},"Partial")," type:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"obj: Partial<Category>\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To exclude certain properties from ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," request (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," that will be generated by the database), we can introduce another new flag called ",(0,i.kt)("inlineCode",{parentName:"p"},"exclude"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"schema: getModelSchemaRef(TodoList, {exclude: ['id']}),\n")),(0,i.kt)("p",{parentName:"li"},"At TypeScript level, such data object can be described using ",(0,i.kt)("inlineCode",{parentName:"p"},"Pick")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Exclude")," types:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"obj: Pick<TodoList, Exclude<keyof Category, 'id'>>\n")))),(0,i.kt)("p",null,"Once these two new flags are implemented, we will be able to fix validation of request bodies to correctly enforce required properties for operations like ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT"),", and treat all properties as optional for ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH")," operations."),(0,i.kt)("p",null,"You can find more details in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/2646"},"PR 2646"),", and the follow-up stories are outlined ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/2646#issuecomment-477503186"},"here"),"."),(0,i.kt)("h2",{id:"javascript-experience"},"JavaScript Experience"),(0,i.kt)("p",null,"After a thorough exploration and discussion of writing the LoopBack 4 application in Javascript this month, we summarized our findings and achievements in our ",(0,i.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/loopback4-javascript-experience/"},'"Experimenting with Plain JavaScript Programming in LoopBack 4"')," blog post. It talks about the LoopBack 4 artifacts that we are able to create in JavaScript and also the limitations. A plan of subsequent stories is included in the blog."),(0,i.kt)("h2",{id:"other-updates"},"Other Updates"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"LoopBack 3 improvement: Now we allow people to define a model property called ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," instead of having ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," as a preserved word. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback/issues/4131"},"Link"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We added the steps to call SOAP services by running ",(0,i.kt)("inlineCode",{parentName:"p"},"lb4 service"),", see the ",(0,i.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Calling-other-APIs-and-web-services.html"},"document for calling other APIs"),". ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'There have been several conference and meet-up events happened over the last year, so we added a new section "Presentations" in the ',(0,i.kt)("a",{parentName:"p",href:"https://v4.loopback.io/resources.html"},"resources page")," to display the videos.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add operationId based on the controller and method names. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/2533"},"Link"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Make sure the ",(0,i.kt)("inlineCode",{parentName:"p"},"basePath")," is included in the url of ",(0,i.kt)("inlineCode",{parentName:"p"},"RestServer"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/2560"},"Link")))),(0,i.kt)("h2",{id:"community-contributions"},"Community Contributions"),(0,i.kt)("p",null,"Here is a summary of the contributions from our community in March. We appreciate all your attention and help!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," method for the ",(0,i.kt)("inlineCode",{parentName:"p"},"HasOne")," relation. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/commit/5936fb9c7224a024f7d406e8f05894cce460a4d4"},"Link"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Support specifying the type of nested properties as a model. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/commit/d298ec898f3c52224a1844c5e41f0d52cd7ff569"},"Link"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Allow the model's id property to be a number for supporting the composed key. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/commit/71292e9ac1b3d89ebfe284a659264cbb83dbe814"},"Link"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Update the mocha configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"@loopback/build"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/commit/c3d800700b253e97316fd0871641ea80fcb457f3"},"Link")))),(0,i.kt)("h2",{id:"call-to-action"},"Call to Action"),(0,i.kt)("p",null,"LoopBack's future success depends on you. We appreciate your continuous support and engagement to make LoopBack even better and meaningful for your API creation experience. Please join us and help the project by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues"},"Reporting issues"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md"},"Contributing"),"\ncode and documentation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/labels/good%20first%20issue"},'Opening a pull request on one of our "good first issues"'),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/110"},"Joining")," our user group.")))}u.isMDXComponent=!0}}]);
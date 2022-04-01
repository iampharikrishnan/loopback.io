"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6534],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1833:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Building an Online Game With LoopBack 4 - Deploying our Application to Kubernetes on IBM Cloud (Part 5)",date:new Date("2019-07-24T00:00:00.000Z"),authors:"wenbo",slug:"building-an-online-game-with-loopback-4-pt5",tags:["how-to"]},p=void 0,s={permalink:"/blog/building-an-online-game-with-loopback-4-pt5",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2019/2019-07-24-building-an-online-game-with-loopback-4-pt5.md",source:"@site/blog/2019/2019-07-24-building-an-online-game-with-loopback-4-pt5.md",title:"Building an Online Game With LoopBack 4 - Deploying our Application to Kubernetes on IBM Cloud (Part 5)",description:"Originally published on strongloop.com",date:"2019-07-24T00:00:00.000Z",formattedDate:"July 24, 2019",tags:[{label:"how-to",permalink:"/blog/tags/how-to"}],readingTime:8.805,truncated:!0,authors:[{name:"Wen Bo",title:"LoopBack Maintainer",url:"https://github.com/gobackhuoxing",imageURL:"https://avatars.githubusercontent.com/u/22156589",key:"wenbo"}],frontMatter:{title:"Building an Online Game With LoopBack 4 - Deploying our Application to Kubernetes on IBM Cloud (Part 5)",date:"2019-07-24T00:00:00.000Z",authors:"wenbo",slug:"building-an-online-game-with-loopback-4-pt5",tags:["how-to"]},prevItem:{title:"Learning LoopBack 4 Interceptors (Part 1) - Global Interceptors",permalink:"/blog/loopback4-interceptors-part1"},nextItem:{title:"LoopBack 4 2019 Q2 Overview",permalink:"/blog/loopback-4-2019-q2-overview"}},u={authorsImageUrls:[void 0]},c=[{value:"Part 5: Deploying our Application to Kubernetes on IBM Cloud",id:"part-5-deploying-our-application-to-kubernetes-on-ibm-cloud",children:[{value:"In This Episode",id:"in-this-episode",children:[],level:3},{value:"Introduction",id:"introduction",children:[],level:3},{value:"Previously on Building an Online Game With LoopBack 4",id:"previously-on-building-an-online-game-with-loopback-4",children:[],level:3},{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Adding Docker Feature",id:"adding-docker-feature",children:[],level:3},{value:"Building Docker Image",id:"building-docker-image",children:[],level:3},{value:"Pushing Docker image to IBM Cloud.",id:"pushing-docker-image-to-ibm-cloud",children:[],level:3},{value:"Creating Kubernetes Cluster",id:"creating-kubernetes-cluster",children:[],level:3},{value:"Setting up MongoDB and Deploying our Project to Kubernetes",id:"setting-up-mongodb-and-deploying-our-project-to-kubernetes",children:[],level:3},{value:"Applying This to Your Own Project",id:"applying-this-to-your-own-project",children:[],level:3},{value:"What&#39;s Next?",id:"whats-next",children:[],level:3}],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Originally published on ",(0,a.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,a.kt)("h2",{id:"part-5-deploying-our-application-to-kubernetes-on-ibm-cloud"},"Part 5: Deploying our Application to Kubernetes on IBM Cloud"),(0,a.kt)("h3",{id:"in-this-episode"},"In This Episode"),(0,a.kt)("p",null,"Now that our project has basic features that allow us to create our own characters and log in, it's time to deploy it to cloud! So, we will first run our project in Docker and then push it to Kubernetes cluster on IBM Cloud."),(0,a.kt)("p",null,"Docker images are lightweight, portable, and self-sufficient. Once you create a Docker image, you can run it almost everywhere. On the other hand, Kubernetes will handle those high level concepts such as storage, network and scale-up."),(0,a.kt)("p",null,"You can check ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gobackhuoxing/first-web-game-lb4/tree/part5/firstgame"},"here")," for the code from this episode."),(0,a.kt)("h3",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this series, I\u2019m going to help you learn LoopBack 4 and how to use it to easily build your own API and web project. We\u2019ll create a new project I\u2019ve been thinking about: an online web text-based adventure game. In this game, you can create your own account to build characters, fight monsters and find treasures. You will be able to control your character to take a variety of actions: attacking enemies, casting spells, and getting loot. This game also allows multiple players to log in and play with their friends."),(0,a.kt)("h3",{id:"previously-on-building-an-online-game-with-loopback-4"},"Previously on Building an Online Game With LoopBack 4"),(0,a.kt)("p",null,"In last episode, we covered how to combine your self-defined authorization strategies and services with ",(0,a.kt)("inlineCode",{parentName:"p"},"@loopback/authentication")," and how to apply it to your API."),(0,a.kt)("p",null,"Here are the previous episodes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://strongloop.com/strongblog/building-online-game-with-loopback-4-pt1/"},"Part 1: Building a Simple LoopBack Project With MongoDB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://strongloop.com/strongblog/building-an-online-game-with-loopback-4-pt2/"},"Part 2: Generating Universally Unique ID and Managing Models Relationships")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://strongloop.com/strongblog/building-an-online-game-with-loopback-4-pt3/"},"Part 3: Customizing APIs in Controller")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://strongloop.com/strongblog/building-an-online-game-with-loopback-4-pt4/"},"Part 4: User Authentication and Role-Based Access Control"))),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes")),(0,a.kt)("li",{parentName:"ul"},"Sign up for ",(0,a.kt)("a",{parentName:"li",href:"https://www.ibm.com/cloud/"},"IBM Cloud"))),(0,a.kt)("p",null,"You don't have to fully understand those concepts before we start. I will show you how to use them step by step."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=4ht22ReBjno"},"The Illustrated Children's Guide to Kubernetes")," is a wonderful video on YouTube that can give you a clear idea of what is Kubernetes."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/deploying_to_ibm_cloud_kubernetes.html#prerequisite"},"Deploying to Kubernetes on IBM Cloud")," is a tutorial on the official LoopBack 4 website. Because our project is a bit different and uses MongoDB, we need to set up MongoDB on cloud and connect our project to it."),(0,a.kt)("h3",{id:"adding-docker-feature"},"Adding Docker Feature"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/building-online-game-with-loopback-4-pt1/"},"Episode 1"),", we disabled Docker when we created our project. Now we need to manually add the Docker feature."),(0,a.kt)("p",null,"In your project root, create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# Check out https://hub.docker.com/_/node to select a new base image\nFROM node:10-slim\n\n# Set to a non-root built-in user `node`\nUSER node\n\n# Create app directory (with user `node`)\nRUN mkdir -p /home/node/app\n\nWORKDIR /home/node/app\n\n# Install app dependencies\n# A wildcard is used to ensure both package.json AND package-lock.json are copied\n# where available (npm@5+)\nCOPY --chown=node package*.json ./\n\nRUN npm install\n\n# Bundle app source code\nCOPY --chown=node . .\n\nRUN npm run build\n\n# Bind to all network interfaces so that it can be mapped to the host OS\nENV HOST=0.0.0.0 PORT=3000\n\nEXPOSE ${PORT}\nCMD [ "node", "." ]\n')),(0,a.kt)("p",null,"Then create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},".dockerignore"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"node_modules\nnpm-debug.log\n/dist\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," and",(0,a.kt)("inlineCode",{parentName:"p"},".dockerignore")," are two Docker-related files that are provided by LoopBack 4. We will use them to create a Docker image."),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", add two lines under ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts"),". Those are the commands to build and run Docker image."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"docker:build": "docker build -t firstgame .",\n"docker:run": "docker run -p 3000:3000 -d firstgame",\n')),(0,a.kt)("h3",{id:"building-docker-image"},"Building Docker Image"),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/get-started"},"Docker")," if you haven't already."),(0,a.kt)("p",null,"Run this command to create Docker image."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run docker:build\n")),(0,a.kt)("p",null,"If it succeeds, you will see:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Successfully built 0b2c1ff52a2e\nSuccessfully tagged firstgame:latest\n")),(0,a.kt)("p",null,"Run this command to show all images:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker image ls\n")),(0,a.kt)("p",null,"You should see two images like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"REPOSITORY          TAG                 IMAGE ID            CREATED              SIZE\nfirstgame           latest              0b2c1ff52a2e        44 seconds ago       430MB\nnode                10-slim             a41b78200d6f        6 days ago           148MB\n")),(0,a.kt)("p",null,"Now, our image is ready to run. Run this command to create a container. A container is a running instance of an image."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run docker:run\n")),(0,a.kt)("p",null,"Run this command to show all running containers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker ps\n")),(0,a.kt)("p",null,"You will see:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                    NAMES\n88cc8acfbeea        firstgame           "node ."            5 minutes ago       Up 5 minutes        0.0.0.0:3000->3000/tcp   friendly_archimedes\n')),(0,a.kt)("p",null,"Because we didn't specify container's name, Docker randomly assigned one for it."),(0,a.kt)("p",null,"Run this command to see the log output of your container. Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<container id>")," with your container id. In my case, it is ",(0,a.kt)("inlineCode",{parentName:"p"},"88cc8acfbeea"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker logs <container id>\n")),(0,a.kt)("p",null,"You should see something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Server is running at http://127.0.0.1:3000\nTry http://127.0.0.1:3000/ping\n")),(0,a.kt)("p",null,"Now, you should be able to open the API explorer: ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:3000/explorer/"},"http://127.0.0.1:3000/explorer/")),(0,a.kt)("p",null,"If everything is fine, run this command to stop the image."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker stop <container id>\n")),(0,a.kt)("p",null,"We are now ready to push our Docker image to cloud."),(0,a.kt)("h3",{id:"pushing-docker-image-to-ibm-cloud"},"Pushing Docker image to IBM Cloud."),(0,a.kt)("p",null,"Sign up for ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/login"},"IBM Cloud")," and install ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/cli/reference/ibmcloud?topic=cloud-cli-ibmcloud-cli#ibmcloud-cli"},"IBM Cloud CLI"),"."),(0,a.kt)("p",null,"Run this command to login IBM Cloud."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ibmcloud login\n")),(0,a.kt)("p",null,"If you are using a federated IBM ID, use this command instead: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ibmcloud login -sso\n")),(0,a.kt)("p",null,"If you logged in successfully, you will see something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"API endpoint:      https://cloud.ibm.com\nRegion:            us-east\nUser:              wenbo.sun@ibm.com\nAccount:           IBM (114e44f826b74008a2afbf099e6b3561)\nResource group:    Default\nCF API endpoint:\nOrg:\nSpace:\n")),(0,a.kt)("p",null,"Log in to IBM Cloud Container Registry. This is where we store our Docker image."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ibmcloud cr login\n")),(0,a.kt)("p",null,"If this succeeds, you will see something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Logging in to 'us.icr.io'...\nLogged in to 'us.icr.io'.\n")),(0,a.kt)("p",null,"This is the container registry region you logged into."),(0,a.kt)("p",null,"After we log in, let's create a new namespace for our project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ibmcloud cr namespace-add my-lb4-namespace\n")),(0,a.kt)("p",null,"You can run ",(0,a.kt)("inlineCode",{parentName:"p"},"ibmcloud cr namespace-list")," to show all of your namespaces."),(0,a.kt)("p",null,"Run this command to tag the local docker image with the IBM Cloud container registry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker tag <image_name>:<tag> <container_registry_region>/<my_namespace>/<new_image_repo>:<new_tag>\n")),(0,a.kt)("p",null,"In my case, this command will look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker tag firstgame:latest us.icr.io/my-lb4-namespace/firstgame-repo:1.0\n")),(0,a.kt)("p",null,"Then push the local image to the container registry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker push us.icr.io/my-lb4-namespace/firstgame-repo:1.0\n")),(0,a.kt)("p",null,"You will see something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"The push refers to repository [us.icr.io/my-lb4-namespace/firstgame-repo]\n8f77245a867e: Pushed\nf3f824dbea6d: Pushed\n637a53e1e6ed: Pushing [==============================>                    ]  144.1MB/236.6MB\n69d1baa1ae3c: Pushed\n30cea096009e: Pushed\n344e2d688289: Pushed\n61cb38befba5: Pushed\naa5a12ea4279: Pushed\n6270adb5794c: Pushed\n")),(0,a.kt)("p",null,"When it is done, run the following command to show images on your container registry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ibmcloud cr image-list\n")),(0,a.kt)("p",null,"You should see this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"REPOSITORY                                     TAG   DIGEST         NAMESPACE             CREATED      SIZE     SECURITY STATUS\nus.icr.io/my-lb4-namespace/firstgame-repo      1.0   3c853b97ffec   my-lb4-namespace      1 hour ago   144 MB   No Issues\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SECURITY STATUS")," shows ",(0,a.kt)("inlineCode",{parentName:"p"},"No Issues"),". If you get issues here, you may want to check ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/va?topic=va-va_index#va_index"},"Managing image security with Vulnerability Advisor")," for more related information."),(0,a.kt)("p",null,"Lastly, run this command to build Docker image on the container registry. Don't forget the ",(0,a.kt)("inlineCode",{parentName:"p"}," .")," at the end."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ibmcloud cr build -t us.icr.io/my-lb4-namespace/firstgame-repo:1.0 .\n")),(0,a.kt)("h3",{id:"creating-kubernetes-cluster"},"Creating Kubernetes Cluster"),(0,a.kt)("p",null,"If you don't have a Kubernetes Cluster yet, login to your IBM Cloud in browser and go to ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/kubernetes/catalog/cluster/create"},"https://cloud.ibm.com/kubernetes/catalog/cluster/create")," to create a free cluster. It may take a while."),(0,a.kt)("p",null,"When it is done, run this command to point to Kubernetes cluster. My cluster name is ",(0,a.kt)("inlineCode",{parentName:"p"},"firstgame-cluster"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ibmcloud cs cluster-config <Cluster Name>\n")),(0,a.kt)("p",null,"You will see something like this. Copy and run the last line."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"OK\nThe configuration for firstgame-cluster was downloaded successfully.\n\nExport environment variables to start using Kubernetes.\n\nexport KUBECONFIG=/Users/xiaocase/.bluemix/plugins/container-service/clusters/firstgame-cluster/kube-config-hou02-firstgame-cluster.yml\n")),(0,a.kt)("p",null,"Run this command to verify your cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get nodes\n")),(0,a.kt)("p",null,"You should see something like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME          STATUS    ROLES     AGE       VERSION\n10.47.84.60   Ready     <none>    5d        v1.13.6+IKS\n")),(0,a.kt)("p",null,"Now your cluster is ready to use."),(0,a.kt)("h3",{id:"setting-up-mongodb-and-deploying-our-project-to-kubernetes"},"Setting up MongoDB and Deploying our Project to Kubernetes"),(0,a.kt)("p",null,"Because our project is using MongoDB, we need to set up a MongoDB container and our project container in one Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod/"},"pod"),". A Kubernetes pod is a group of one or more containers. Containers in the same pod will share storage and network."),(0,a.kt)("p",null,"Let's first create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"first-game.yaml")," in our project root. We will use this ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml")," file to specify containers and pod. Check ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/"},"here")," for more information about Kubernetes ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: firstgame\nspec:\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        run: firstgame\n    spec:\n      containers:\n        - name: fg\n          image: us.icr.io/my-lb4-namespace/firstgame-repo:1.0\n          ports:\n            - containerPort: 3000\n        - name: db\n          image: mongo\n          ports:\n            - containerPort: 27017\n")),(0,a.kt)("p",null,"As you can see, we have two containers. ",(0,a.kt)("inlineCode",{parentName:"p"},"fg")," is for our project. ",(0,a.kt)("inlineCode",{parentName:"p"},"db")," is for MongoDB. They will be running in the same pod so they can share network and talk to each other."),(0,a.kt)("p",null,"Run this command to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml")," file to create containers and pod:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create -f first-game.yaml\n")),(0,a.kt)("p",null,"You will see something like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'deployment.extensions "firstgame" deleted\nwenbo:firstgame wenbo$ kubectl create -f first-game.yaml\ndeployment.extensions "firstgame" created\n')),(0,a.kt)("p",null,"Run this command to verify our pod is running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get pods\n")),(0,a.kt)("p",null,"If succeeds, you will see this. The ",(0,a.kt)("inlineCode",{parentName:"p"},"2/2")," means there are two containers running in this pod."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                         READY     STATUS    RESTARTS   AGE\nfirstgame-85ccbd5496-6nmvt   2/2       Running   0          1m\n")),(0,a.kt)("p",null,"Now our application is running on Kubernetes. The next step is to expose it to the public."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl expose deployment firstgame --type=NodePort --port=3000 --name=firstgame-service --target-port=3000\n")),(0,a.kt)("p",null,"You should see this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'service "firstgame-service" exposed\n')),(0,a.kt)("p",null,"Run this command to get NodePort for this service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl describe service firstgame-service\n")),(0,a.kt)("p",null,"You should see:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Name:                     firstgame-service\nNamespace:                default\nLabels:                   run=firstgame\nAnnotations:              <none>\nSelector:                 run=firstgame\nType:                     NodePort\nIP:                       172.21.59.175\nPort:                     <unset>  3000/TCP\nTargetPort:               3000/TCP\nNodePort:                 <unset>  30776/TCP\nEndpoints:                172.30.234.135:3000\nSession Affinity:         None\nExternal Traffic Policy:  Cluster\nEvents:                   <none>\n")),(0,a.kt)("p",null,"In my case, the NodePort is ",(0,a.kt)("inlineCode",{parentName:"p"},"30776"),"."),(0,a.kt)("p",null,"The last thing we need is the IP address of our cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ibmcloud ks workers firstgame-cluster\n")),(0,a.kt)("p",null,"You will get something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ID                                                     Public IP         Private IP      Machine Type   State    Status   Zone    Version\nkube-bkrq1svd0l5j9p3147ng-mycluster-default-000000e0   173.193.106.101   10.76.216.103   free           normal   Ready    hou02   1.13.8_1529\n")),(0,a.kt)("p",null,"My cluster IP address is ",(0,a.kt)("inlineCode",{parentName:"p"},"173.193.106.101"),"."),(0,a.kt)("p",null,"Now we should be able to access to our application via ",(0,a.kt)("a",{parentName:"p",href:"http://173.193.106.101:30776"},"http://173.193.106.101:30776")),(0,a.kt)("h3",{id:"applying-this-to-your-own-project"},"Applying This to Your Own Project"),(0,a.kt)("p",null,"In this episode, we covered how to deploy our project with Docker and Kubernetes on IBM Cloud. Once you create a Docker image, you can run it almost everywhere. You can also push your own project image to other cloud like AWS, Azure, and Google Cloud. It should be very easy."),(0,a.kt)("h3",{id:"whats-next"},"What's Next?"),(0,a.kt)("p",null,"Next time, we will create a simply front-end UI for our project and do a quick demo."),(0,a.kt)("p",null,"In the meantime, learn more about LoopBack in ",(0,a.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/tag_LoopBack.html"},"past blogs"),"."))}m.isMDXComponent=!0}}]);
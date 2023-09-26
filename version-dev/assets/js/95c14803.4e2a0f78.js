"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62971],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7896),i=(n(2784),n(30876));const a={sidebar_position:4,sidebar_title:"Vue",title:"Vue"},o=void 0,l={unversionedId:"installation/vue",id:"installation/vue",title:"Vue",description:"There is no guarantee that the core functionality is fully covered by the Vue wrappers.",source:"@site/docs/installation/vue.md",sourceDirName:"installation",slug:"/installation/vue",permalink:"/version-dev/docs/installation/vue",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/installation/vue.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_title:"Vue",title:"Vue"},sidebar:"mySidebar",previous:{title:"Web Components",permalink:"/version-dev/docs/installation/javascript"},next:{title:"Blazor",permalink:"/version-dev/docs/installation/blazor"}},s={},p=[{value:"Install dependencies",id:"install-dependencies",level:3},{value:"npm",id:"npm",level:4},{value:"yarn",id:"yarn",level:4},{value:"Usage",id:"usage",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Experimental disclaimer",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"There is no guarantee that the core functionality is fully covered by the Vue wrappers.\nBug reports and feature requests related to Vue can only be handled with low priority.\nNevertheless feedback of any kind will be helpful.")),(0,i.kt)("h3",{id:"install-dependencies"},"Install dependencies"),(0,i.kt)("p",null,"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"@siemens/ix-vue")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@siemens/ix-icons")," using a package manager:"),(0,i.kt)("h4",{id:"npm"},"npm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm i -S @siemens/ix-vue @siemens/ix-icons\n")),(0,i.kt)("h4",{id:"yarn"},"yarn"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add @siemens/ix-vue@latest @siemens/ix-icons\n")),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import '@siemens/ix/dist/siemens-ix/siemens-ix.css';\n\nimport { createApp } from 'vue';\nimport { ixPlugin } from '@siemens/ix-vue';\nimport Root from './App.vue';\n\nconst app = createApp(App);\n\napp.use(ixPlugin);\n\napp.mount('#root');\n")))}u.isMDXComponent=!0}}]);
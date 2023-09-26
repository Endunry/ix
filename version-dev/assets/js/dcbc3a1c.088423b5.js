"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95483],{30876:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var i=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},A=Object.keys(e);for(i=0;i<A.length;i++)t=A[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(i=0;i<A.length;i++)t=A[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var r=i.createContext({}),l=function(e){var n=i.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return i.createElement(r.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,A=e.originalType,r=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,u=p["".concat(r,".").concat(d)]||p[d]||m[d]||A;return t?i.createElement(u,a(a({ref:n},s),{},{components:t})):i.createElement(u,a({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var A=t.length,a=new Array(A);a[0]=p;var g={};for(var r in n)hasOwnProperty.call(n,r)&&(g[r]=n[r]);g.originalType=e,g.mdxType="string"==typeof e?e:o,a[1]=g;for(var l=2;l<A;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},35167:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>m,frontMatter:()=>A,metadata:()=>g,toc:()=>l});var i=t(7896),o=(t(2784),t(30876));const A={sidebar_position:0,sidebar_title:"Updating to v2",title:"Updating to v2"},a="Updating to v2.0.0",g={unversionedId:"migration/2_0_0/index",id:"migration/2_0_0/index",title:"Updating to v2",description:"Welcome to the migration guide for upgrading from Siemens iX v1 to v2.",source:"@site/docs/migration/2_0_0/index.md",sourceDirName:"migration/2_0_0",slug:"/migration/2_0_0/",permalink:"/version-dev/docs/migration/2_0_0/",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/migration/2_0_0/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_title:"Updating to v2",title:"Updating to v2"},sidebar:"mySidebar",previous:{title:"Content Security Policy Nonces",permalink:"/version-dev/docs/installation/csp"},next:{title:"Core UI 6.5.0 to Siemens iX v1",permalink:"/version-dev/docs/migration/core-ui"}},r={},l=[{value:"Breaking changes in v2.0.0",id:"breaking-changes-in-v200",level:2},{value:"Removed icon font @siemens/ix-icons",id:"removed-icon-font-siemensix-icons",level:3},{value:"Custom icon support for @siemens/ix, @siemens/ix-react, @siemens/ix-angular and @siemens/ix-vue",id:"custom-icon-support-for-siemensix-siemensix-react-siemensix-angular-and-siemensix-vue",level:3},{value:"Move @siemens/ix-icons from &quot;dependencies&quot; to &quot;peerDependencies&quot;",id:"move-siemensix-icons-from-dependencies-to-peerdependencies",level:3},{value:"Other changes",id:"other-changes",level:2},{value:"Shadow DOM",id:"shadow-dom",level:3},{value:"New default theme",id:"new-default-theme",level:3},{value:"Updates in ix-basic-navigation and ix-menu",id:"updates-in-ix-basic-navigation-and-ix-menu",level:3},{value:"Replacement of Bootstrap Modal parts with iX modal components",id:"replacement-of-bootstrap-modal-parts-with-ix-modal-components",level:3},{value:"Spinner animation",id:"spinner-animation",level:3},{value:"Added",id:"added",level:2},{value:"New component ix-menu-category",id:"new-component-ix-menu-category",level:3},{value:"Multiple screen layouts within ix-basic-navigation",id:"multiple-screen-layouts-within-ix-basic-navigation",level:3},{value:"Preparation for removing Bootstrap as dependency",id:"preparation-for-removing-bootstrap-as-dependency",level:2},{value:"Questions \u2753\ud83d\ude4b\u200d\u2640\ufe0f",id:"questions-\ufe0f",level:2}],s={toc:l};function m(e){let{components:n,...A}=e;return(0,o.kt)("wrapper",(0,i.Z)({},s,A,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"updating-to-v200"},"Updating to v2.0.0"),(0,o.kt)("p",null,"Welcome to the migration guide for upgrading from Siemens iX v1 to v2.\nThis guide introduces all major changes. This includes, inter alia, the switch from offering an icon font to a SVG based implementation, changes and extensions to the ix-menu and the migration of our components to Shadow DOM. "),(0,o.kt)("h2",{id:"breaking-changes-in-v200"},"Breaking changes in v2.0.0"),(0,o.kt)("p",null,"You can find a list of all breaking changes ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/siemens/ix/blob/main/BREAKING_CHANGES.md#v200"},"here"),".\nThe most important breaking changes result from the switch to an SVG based implementation for icons:"),(0,o.kt)("h3",{id:"removed-icon-font-siemensix-icons"},"Removed icon font @siemens/ix-icons"),(0,o.kt)("p",null,"The internal implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"@siemens/ix-icons")," changed from icon font to a ",(0,o.kt)("inlineCode",{parentName:"p"},"SVG")," based implementation.\nThis shouldn't have any direct impact on your application."),(0,o.kt)("h3",{id:"custom-icon-support-for-siemensix-siemensix-react-siemensix-angular-and-siemensix-vue"},"Custom icon support for @siemens/ix, @siemens/ix-react, @siemens/ix-angular and @siemens/ix-vue"),(0,o.kt)("p",null,"You can now provide custom icons as inline SVG or via relative/absolute path to the asset."),(0,o.kt)("p",null,"Example of a custom icon via path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'  <ix-icon name="./assets/my-icon.svg"></ix-icon>\n  <ix-icon name="https://my.example.cdn.address/assets/my-icon.svg"></ix-icon>\n')),(0,o.kt)("p",null,"There are some constraints for using custom icons. For more information please refer to the guide in the documentation ",(0,o.kt)("a",{parentName:"p",href:"/version-dev/docs/icon-library/icons"},"here"),"."),(0,o.kt)("h3",{id:"move-siemensix-icons-from-dependencies-to-peerdependencies"},'Move @siemens/ix-icons from "dependencies" to "peerDependencies"'),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@siemens/ix-icons")," is no longer a direct dependency of ",(0,o.kt)("inlineCode",{parentName:"p"},"@siemens/ix"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@siemens/ix-react"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@siemens/ix-angular")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@siemens/ix-vue"),"."),(0,o.kt)("p",null,"If you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"@siemens/ix-react"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@siemens/ix-angular")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@siemens/ix-vue"),", you don't have to adapt any code.\nIf you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"@siemens/ix")," directly, you must define the custom elements of the ",(0,o.kt)("inlineCode",{parentName:"p"},"@siemens/ix-icons")," package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { defineCustomElements } from '@siemens/ix-icons/loader';\n\n(async () => {\n  await defineCustomElements();\n})();\n")),(0,o.kt)("p",null,"For more information check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/siemens/ix-icons"},"@siemens/ix-icons repository"),"."),(0,o.kt)("h2",{id:"other-changes"},"Other changes"),(0,o.kt)("h3",{id:"shadow-dom"},"Shadow DOM"),(0,o.kt)("p",null,"We are excited to announce that we have migrated all our components to Shadow DOM. This migration brings several benefits and enhancements to the functionality and performance of our library."),(0,o.kt)("p",null,"Here are the key advantages of migrating to Shadow DOM components:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Interoperability"),": Shadow DOM provides encapsulation for components, isolating their styles and markup within a dedicated DOM subtree. This ensures predictable and maintainable styling, while enabling seamless integration of self-contained and reusable components into various projects without conflicts or interference with existing styles and functionality.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Improved Performance"),": Shadow DOM components have better performance due to the browser's optimized rendering of the encapsulated DOM subtree. This results in faster initial rendering and improved overall responsiveness of the components."))),(0,o.kt)("p",null,"Please note that as part of this migration, some changes may be required in your codebase if you were relying on direct manipulation or styling of our components. We recommend reviewing our updated documentation and examples. This can facilitate a smooth transition so that you can take full advantage of the benefits offered by Shadow DOM components."),(0,o.kt)("h3",{id:"new-default-theme"},"New default theme"),(0,o.kt)("p",null,"We replaced the old theme with a more modern looking theme."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Old:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ix theme old",src:t(28921).Z,width:"328",height:"241"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"New:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ix theme new",src:t(55985).Z,width:"327",height:"237"})),(0,o.kt)("h3",{id:"updates-in-ix-basic-navigation-and-ix-menu"},"Updates in ix-basic-navigation and ix-menu"),(0,o.kt)("p",null,"In the latest version of ",(0,o.kt)("inlineCode",{parentName:"p"},"ix-basic-navigation"),", we have changed handling of menu items that are overflowing outside the menu container. Previously, when there were too many items, users had to click on a dropdown to see the hidden ones, resulting in a suboptimal experience.\nNow the list of menu items will scroll vertically to prevent overflow.\nThis ensures that all menu items remain contained within the menu, offering a more intuitive and visually consistent experience."),(0,o.kt)("h3",{id:"replacement-of-bootstrap-modal-parts-with-ix-modal-components"},"Replacement of Bootstrap Modal parts with iX modal components"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Old:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'  <div class="modal-header>My Header</div>\n  <div class="modal-body">My Content</div>\n  <div class="modal-footer">\n    <ix-button>Save</ix-button>\n    <ix-button>Cancel</ix-button>\n  </div>\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"New:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"  <ix-modal-header>My Header</ix-modal-header>\n  <ix-modal-content>My Content</ix-modal-content>\n  <ix-modal-footer>\n    <ix-button>Save</ix-button>\n    <ix-button>Cancel</ix-button>\n  </ix-modal-footer>\n")),(0,o.kt)("h3",{id:"spinner-animation"},"Spinner animation"),(0,o.kt)("p",null,"We replaced the previous animation with a cleaner and more refined alternative."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Spinner",src:t(66519).Z,width:"214",height:"432"})),(0,o.kt)("h2",{id:"added"},"Added"),(0,o.kt)("h3",{id:"new-component-ix-menu-category"},"New component ix-menu-category"),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"ix-menu-category")," there is a new addition to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ix-menu")," that enables the creation of a second level of navigation within the ",(0,o.kt)("inlineCode",{parentName:"p"},"ix-menu")," component. Through the ",(0,o.kt)("inlineCode",{parentName:"p"},"ix-menu-category"),", you can organize your menu items into categories, providing a hierarchical structure for your menu navigation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<ix-menu-category label="AI Configuration" icon="rocket">\n  <ix-menu-item>Nested Item 1</ix-menu-item>\n  <ix-menu-item>Nested Item 2</ix-menu-item>\n</ix-menu-category>\n')),(0,o.kt)("h3",{id:"multiple-screen-layouts-within-ix-basic-navigation"},"Multiple screen layouts within ix-basic-navigation"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ix-basic-navigation")," introduces new layout breakpoints that affect the display and behavior of the menu component based on the screen size. These breakpoints provide a responsive and adaptive menu layout for different devices and screen resolutions."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Menu Layout",src:t(7645).Z,width:"1292",height:"866"})),(0,o.kt)("p",null,"With the updated version of ",(0,o.kt)("inlineCode",{parentName:"p"},"ix-menu"),", you have the flexibility to choose which layout breakpoints you want to support. You can specify the supported modes using the ",(0,o.kt)("inlineCode",{parentName:"p"},"breakpoints")," property. This allows you to customize the menu's behavior and appearance according to your specific requirements."),(0,o.kt)("p",null,"Here you can see all available breakpoints and how they affect ",(0,o.kt)("inlineCode",{parentName:"p"},"ix-menu"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sm"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"only screen and (min-width: 36em)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Menu not visible"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"md"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"only screen and (min-width: 48em)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Menu is visible but has to be expanded to see it fully"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"lg"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"only screen and (min-width: 62em)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Shows the menu as pinned and in its full width"),(0,o.kt)("li",{parentName:"ul"},"The underlying content will be shifted to the right to be fully accessible")))),(0,o.kt)("p",null,"These breakpoints enable the menu to adapt its layout and behavior according to the available screen real estate, ensuring optimal visibility and usability for different screen sizes."),(0,o.kt)("p",null,"In addition, you can specify which layout modes should be enabled for your menu by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"breakpoints")," property. For example, if you want to support only the small and medium viewports, you can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"breakpoints")," property as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<ix-basic-navigation breakpoints={['sm', 'lg']}>\n  <ix-menu>\n    \x3c!-- Menu items and categories --\x3e\n  </ix-menu>\n</ix-basic-navigation>\n")),(0,o.kt)("h2",{id:"preparation-for-removing-bootstrap-as-dependency"},"Preparation for removing Bootstrap as dependency"),(0,o.kt)("p",null,"One goal of the ",(0,o.kt)("a",{parentName:"p",href:"#shadow-dom"},"Shadow DOM")," refactoring was to make all ix components interoperable. Therefore, we have decided that we no longer want to depend on any third party CSS framework.\nIn the past, we relied on bootstrap which is no longer necessary. By removing bootstrap from the list of peer dependencies we will provide you with the flexibility to choose any one of the available CSS frameworks without running into conflicts."),(0,o.kt)("p",null,"As for now, bootstrap is still a part of our library, but we are planning to drop it entirely in a future release."),(0,o.kt)("p",null,"If you want to check if your application is still working smoothly without bootstrap, you can already test this by loading the new ",(0,o.kt)("inlineCode",{parentName:"p"},"core CSS")," file."),(0,o.kt)("p",null,"A detailed description can be found ",(0,o.kt)("a",{parentName:"p",href:"./../../guidelines/theme#applying-only-one-theme-to-reduce-build-size"},"here"),"."),(0,o.kt)("h2",{id:"questions-\ufe0f"},"Questions \u2753\ud83d\ude4b\u200d\u2640\ufe0f"),(0,o.kt)("p",null,"Don't forget to check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/siemens/ix/blob/main/BREAKING_CHANGES.md"},"Breaking Changes guide"),"."),(0,o.kt)("p",null,"If you have further questions or you are facing any problems during migration please ",(0,o.kt)("a",{parentName:"p",href:"https://community.siemens.com/c/ix/"},"contact us over our forum"),"."))}m.isMDXComponent=!0},7645:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/capture_layout_feature-51c76f3913a7a82f30edb343b2c417f7.gif"},66519:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/spinner-83e12560a71ab1949e8dc28838d4c8db.gif"},55985:(e,n,t)=>{t.d(n,{Z:()=>i});const i="data:image/png;base64,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oAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFeAcLQ79lSOAAKKAOGo4NCEAAJ2BQhHu2NP5QggoAgQjgoOTQggYFcgrV5uo912y6dyBBBAIFqAmWO0C88igIBxAcLR+AFA+QggEC1AOEa78CwCCBgXIByNHwCUjwAC0QKEY7QLzyKAgHEBwtH4AUD5CCAQLUA4RrvwLAIIGBcgHI0fAJSPAALRAoRjtAvPIoCAcQHC0fgBQPkIIBAtQDhGu/AsAggYFyAcjR8AlI8AAtEC/w+5cDfl5xagPQAAAABJRU5ErkJggg=="},28921:(e,n,t)=>{t.d(n,{Z:()=>i});const i="data:image/png;base64,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"}}]);
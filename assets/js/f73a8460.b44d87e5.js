"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97809],{32466:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(97458),s=t(16436),a=t(91604);const r={},o=void 0,l={id:"auto-generated/ix-blind/events",title:"events",description:"",source:"@site/docs/auto-generated/ix-blind/events.md",sourceDirName:"auto-generated/ix-blind",slug:"/auto-generated/ix-blind/events",permalink:"/docs/auto-generated/ix-blind/events",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-blind/events.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function m(e){return(0,i.jsx)(a.Z,{attributes:[{name:"collapsedChange",description:"Collapsed state changed",definition:[{name:"Detail",value:"boolean"}],tags:[]}]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m()}},30473:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(97458),s=t(16436),a=t(91604);const r={},o=void 0,l={id:"auto-generated/ix-blind/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-blind/props.md",sourceDirName:"auto-generated/ix-blind",slug:"/auto-generated/ix-blind/props",permalink:"/docs/auto-generated/ix-blind/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-blind/props.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function m(e){return(0,i.jsx)(a.Z,{attributes:[{name:"collapsed",description:"Collapsed state",definition:[{name:"Attribute",value:"collapsed"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"icon",description:"Optional icon to be displayed next to the header label",definition:[{name:"Attribute",value:"icon"},{name:"Type",value:"string"},{name:"Default"}],tags:[{type:"since",message:"1.5.0"}]},{name:"label",description:"Label of blind",definition:[{name:"Attribute",value:"label"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"sublabel",description:"Secondary label inside blind header",definition:[{name:"Attribute",value:"sublabel"},{name:"Type",value:"string"},{name:"Default"}],tags:[{type:"since",message:"2.0.0"}]},{name:"variant",description:"Blind variant",definition:[{name:"Attribute",value:"variant"},{name:"Type",value:'"alarm" \uff5c "critical" \uff5c "info" \uff5c "insight" \uff5c "neutral" \uff5c "notification" \uff5c "outline" \uff5c "primary" \uff5c "success" \uff5c "warning"'},{name:"Default",value:"'insight'"}],tags:[{type:"since",message:"2.0.0"}]}]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m()}},4242:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>x,default:()=>b,frontMatter:()=>h,metadata:()=>g,toc:()=>j});var i=t(97458),s=t(16436),a=t(80235),r=(t(36088),t(12658),t(30473)),o=t(32466);function l(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Blinds are UI controls that allow the users to hide or reveal content by clicking on a control element. Blinds can display a large amount of content in a compact space or present information in an organized and hierarchical way. Blinds reduce the user's cognitive load by removing clutter and less important information from an interface. We typically don't use blinds if the content is central to the user's task due to its reduced visibility and accessibility."}),"\n",(0,i.jsx)(n.p,{children:"Blinds consist of a header section on the top and a content section below. The header section contains a chevron on the left followed by the blind's label. Within the content section, content can be placed freely."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/figma/wEptRgAezDU1z80Cn3eZ0o_2_2.png",alt:"Blind overview"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Header section"}),"\n",(0,i.jsx)(n.li,{children:"Content section"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,i.jsxs)(n.p,{children:["Multiple blinds can be placed below each other to create an accordion. The recommended distance between the blinds is ",(0,i.jsx)(n.code,{children:"0.5rem"}),". Typically, only one blind can be opened within an accordion but users can be allowed to open multiple blinds at a time."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/figma/wEptRgAezDU1z80Cn3eZ0o_2_655.png",alt:"Accordion"})}),"\n",(0,i.jsx)(n.h2,{id:"variants",children:"Variants"}),"\n",(0,i.jsx)(n.p,{children:"Multiple blind variants are available:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Filled"}),": Default variant"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Outline"}),": Variant for lower visual emphasis"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Primary"}),": Variant for high visual emphasis"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"State-related variants"}),": Alarm, critical, warning, success, info, neutral"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/figma/wEptRgAezDU1z80Cn3eZ0o_929_47485.png",alt:"Blind variants"})}),"\n",(0,i.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Icon"}),": Blinds can, but don't have to, include an icon in the header section. The icon is positioned before the blind label."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Sublabel"}),": A secondary label can be placed within the header section. The sublabel gives additional information about the blind's content."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Header action"}),": The header section can contain an action area. We typically use the action area to include one or two buttons for actions directly related to the blind, e.g. to delete the blind or to navigate to additional content."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"behavior-in-context",children:"Behavior in context"}),"\n",(0,i.jsx)(n.p,{children:"The user expands and collapses the blind by pressing anywhere in the header section. When the blind is expanded, content below the blind is moved downwards."}),"\n",(0,i.jsx)(n.h2,{id:"states",children:"States"}),"\n",(0,i.jsx)(n.p,{children:"For all blind variants, a default, hover, active and focused state is available."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/figma/wEptRgAezDU1z80Cn3eZ0o_2_352.png",alt:"Blind states"})}),"\n",(0,i.jsx)(n.h2,{id:"dos-and-donts",children:"Dos and don'ts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Do stay within the recommended number of blinds - between 3 and 7"}),"\n",(0,i.jsx)(n.li,{children:"Don't use multi-line text in the header. The header section has a fixed height for single-line text entries"}),"\n",(0,i.jsx)(n.li,{children:"Don't change the position of the chevron icon and the blind's label in the header"}),"\n",(0,i.jsx)(n.li,{children:"Don't use a blind if there is only a single category to be displayed"}),"\n",(0,i.jsx)(n.li,{children:"Don't use blinds to display hierarchically structured files or objects - rather use a tree for such cases"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-patterns",children:"Related patterns:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/controls/tabs",children:"Tabs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/controls/tree",children:"Tree"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/controls/workflow",children:"Workflow"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}var d=t(76840),m=t(1541);function u(e){const n={h3:"h3",h4:"h4",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.Z,{name:"blind",height:"16rem",examplesByName:!0}),"\n",(0,i.jsx)(n.h3,{id:"header-actions",children:"Header actions"}),"\n",(0,i.jsx)(d.h,{message:"1.5.0"}),"\n",(0,i.jsx)(m.Z,{name:"blind-header-actions",height:"16rem",examplesByName:!0}),"\n",(0,i.jsx)(d.h,{message:"2.0.0"}),"\n",(0,i.jsx)(m.Z,{name:"blind-variants",height:"16rem",examplesByName:!0}),"\n",(0,i.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h4,{id:"props",children:"Props"}),"\n",(0,i.jsx)(r.default,{}),"\n",(0,i.jsx)(n.h4,{id:"events",children:"Events"}),"\n",(0,i.jsx)(o.default,{})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}const h={},x="Blind",g={id:"controls/blind",title:"Blind",description:"",source:"@site/docs/controls/blind.md",sourceDirName:"controls",slug:"/controls/blind",permalink:"/docs/controls/blind",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/blind.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Avatar",permalink:"/docs/controls/avatar"},next:{title:"Breadcrumb",permalink:"/docs/controls/breadcrumb"}},f={},j=[];function v(e){const n={h1:"h1",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"blind",children:"Blind"}),"\n",(0,i.jsx)(a.Z,{styleguide:c,code:p})]})}function b(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}},91604:(e,n,t)=>{t.d(n,{Z:()=>r});t(52983);var i=t(76840),s=t(97458);function a(e){return(0,s.jsxs)("div",{className:"row with--border",children:[(0,s.jsx)("div",{className:"col-sm-6",children:(0,s.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((n=>(0,s.jsx)(i.h,{message:n.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((n=>(0,s.jsx)(i.Q,{message:n.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,s.jsx)("div",{className:"col-sm-6",children:(0,s.jsxs)("div",{className:"ApiTable__Content",children:[(0,s.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,s.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,s.jsxs)("div",{className:"row Attribute",children:[(0,s.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,s.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,s.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,s.jsxs)("div",{className:"row with--border",children:[(0,s.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,s.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,s.jsx)(a,{attribute:e},e.name)))]})}},76840:(e,n,t)=>{t.d(n,{Q:()=>s,h:()=>a});t(52983);var i=t(97458);function s(e){return(0,i.jsxs)("div",{className:"ApiTableTag",children:[(0,i.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,i.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function a(e){return(0,i.jsx)("div",{className:"ApiTableTag",children:(0,i.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},69718:(e,n,t)=>{t.d(n,{Z:()=>c});var i=t(59891),s=t(42603),a=t(77272),r=t(52983),o=t(17995),l=t(97458);function c(e){const n=(0,a.Z)(),[t]=(0,r.useState)(!1),c=(0,s.Z)("/"),[d,m]=(0,r.useState)(""),[u,p]=(0,r.useState)((0,o.V)(n)),{preferredVersion:h}=(0,i.J)();return(0,r.useEffect)((()=>{const n=h?.name;m(void 0===n||"current"===n?c+`webcomponent-examples/dist/preview-examples/${e.name}.html`:c+`versioned_examples/version-${n}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[c,h?.name,e.name]),(0,r.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(n);document.body.classList.forEach((n=>{n.includes("theme-")&&(e=n)})),p(e)},t=new MutationObserver((()=>e()));return t.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{t.disconnect()}}),[]),(0,l.jsx)(l.Fragment,{children:t?(0,l.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",h?.name]}):(0,l.jsx)("iframe",{src:`${d}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},80235:(e,n,t)=>{t.d(n,{Z:()=>c});var i=t(50756),s=t(14517),a=t(52983),r=t(97458);const o="docusaurus.ix.general.tab";const l=e=>{const[n,t]=(0,a.useState)(function(){const e=window.localStorage.getItem(o);return e&&("styleguide"===(n=e)||"code"===n)?e:"styleguide";var n}()),i=e=>{t(e),function(e){window.localStorage.setItem(o,e)}(e)},s=e[n];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"Docs__Tabs",children:[(0,r.jsx)(d,{name:"UX guidelines",active:"styleguide"===n,onClick:()=>i("styleguide"),children:(0,r.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 2C18.0228 2 22.5 6.47715 22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2ZM4.56189 11C5.01314 7.38128 7.88128 4.51314 11.5 4.06189V6H13.5V4.06189C17.1187 4.51314 19.9869 7.38128 20.4381 11H18.5V13H20.4381C19.9869 16.6187 17.1187 19.4869 13.5 19.9381V18H11.5V19.9381C7.88128 19.4869 5.01314 16.6187 4.56189 13H6.5V11H4.56189ZM11 10.5L17.5 7L14 13.5L7.5 17L11 10.5ZM13.5 12C13.5 12.5523 13.0523 13 12.5 13C11.9477 13 11.5 12.5523 11.5 12C11.5 11.4477 11.9477 11 12.5 11C13.0523 11 13.5 11.4477 13.5 12Z"})})}),(0,r.jsx)(d,{name:"Development",active:"code"===n,onClick:()=>i("code"),children:(0,r.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.0168 6.52423L13.0849 6.00659L9.97911 17.5977L11.911 18.1153L15.0168 6.52423ZM7.45711 6.79042L8.87132 8.20463L5.07921 11.9975L8.87132 15.7904L7.45711 17.2046L2.25 11.9975L7.45711 6.79042ZM17.5342 6.79216L16.12 8.20637L19.9121 11.9993L16.12 15.7922L17.5342 17.2064L22.7413 11.9993L17.5342 6.79216Z",fill:"inherit"})})})]}),(0,r.jsx)("div",{className:"Docs__Tabs__Content",children:(0,r.jsx)(s,{})})]})},c=e=>(0,r.jsx)(i.Z,{children:()=>(0,r.jsx)(l,{...e})});function d(e){return(0,r.jsxs)("div",{onClick:e.onClick,className:(0,s.Z)("Doc_Tab",{active:e.active}),children:[e.children,e.name]})}},1541:(e,n,t)=>{t.d(n,{Z:()=>C});var i=t(42603),s=t(62278),a=t(67498),r=t(13510),o=t(52983);let l=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});var c=t(69718);const d={Files_Toolbar:"Files_Toolbar_Sh51"};var m=t(14455);function u(e,n){return e.replace(/\"<VERSION>\"/g,`"${n}"`)}function p(e){const n=s.CT.getCurrentTheme().replace("brand","classic");return e.replace(/(<body class=")[^"]*(")/,`$1${n}$2`)}async function h(e){const n=await Promise.all(e.map((e=>fetch(e))));return Promise.all(n.map((e=>e.text())))}async function x(e){let{name:n,framework:t,files:i,baseUrl:s,version:a}=e;const r=a||"latest";return t===l.REACT?async function(e,n,t){const[i,s,a,r,o]=await h([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[l]=n,c={};n.forEach((e=>{let{filename:n,source:t}=e;c[`src/${n}`]=t})),m.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...c,"public/index.html":p(s),"src/index.tsx":a,"src/App.tsx":i.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${l.filename.substring(0,l.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":u(r,t),"tsconfig.json":o,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${l.filename}`})}(s,i,r):t===l.ANGULAR?async function(e,n,t,i){const[s,a,r,o,l,c,d,x,g,f,j]=await h([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),v=[];t.forEach((e=>{let{filename:n,source:t}=e;/@Component/gms.test(t)&&v.push(n)}));const b=`\n    ${v.map(((e,n)=>`import COMPONENT_${n} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${v.map(((e,n)=>`COMPONENT_${n}`))}\n    ];\n  `,w={};t.forEach((e=>{let{filename:n,source:t}=e;w[`src/app/${n}`]=t})),m.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":b,"src/app/app.component.css":s,"src/app/app.component.html":a,"src/app/app.component.ts":r,"src/app/app.module.ts":o,"src/index.html":p(l),"src/main.ts":c,"src/styles.css":d,"angular.json":x,"package.json":u(g,i),"tsconfig.app.json":f,"tsconfig.json":j,...w}},{openFile:`src/app/${n}.ts`})}(s,n,i,r):t===l.JAVASCRIPT?async function(e,n,t){const[i,s,a]=await h([`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[r,...o]=n,l={};var c;o.forEach((e=>{l[`src/${e.filename}`]=e.source})),m.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...l,"src/index.html":p((c=r.raw,c.replace(/(<script type="module" src=")[^"]*(">)/,"$1./main.js$2"))),"src/main.js":i,"package.json":u(s,t),"vite.config.ts":a}},{openFile:["src/index.html"]})}(s,i,r):t===l.VUE?async function(e,n,t){const[i,s,a,r,o,l,c]=await h([`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),[d]=n,x={};n.forEach((e=>{let{filename:n,source:t}=e;x[`src/${n}`]=t})),m.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...x,"index.html":p(s),"src/main.ts":a,"src/App.vue":i.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${d.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":c,"package.json":u(r,t),"tsconfig.json":o,"vite.config.ts":l,".stackblitzrc":'{\n          "startCommand": "yarn run dev"\n        }'}},{openFile:`src/${d.filename}`})}(s,i,r):void 0}var g=t(77272),f=t(97458);function j(e){return e.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim()}function v(e,n){const t=e.match(n);if(t&&2===t.length){const[t,i]=e.split(n);return j(i.split("\n").map((e=>e.replace(/[ ]{4}/,""))).join("\n").trim())}return""}function b(e){const n=v(e,/<!-- Preview code -->/g);if(n){const t=v(e,/<!-- Sources -->/g);return t?"\x3c!-- Include in header --\x3e\n"+t+"\n\x3c!-- Include in header --\x3e\n\n"+n:n}return j(e)}async function w(e,n,t){let i="web-components";return n===l.ANGULAR&&(i="angular"),n===l.REACT&&(i="react"),n===l.VUE&&(i="vue"),Promise.all(t.map((async n=>{try{const t=await async function(e){console.log("FETCH SOURCE FROM",e);const n=await fetch(`${e}.txt`),t=await n.text();return console.log(t),!t||t?.includes('<div id="__docusaurus"></div>')||t?.includes("Page Not Found")?null:t}(`${e}/previews/${i}/${n}`);return t?{filename:n,source:b(t),raw:t}:null}catch(t){console.warn(t)}})))}function y(e){return e.endsWith(".html")?"html":e.endsWith(".ts")?"ts":e.endsWith(".tsx")||e.endsWith(".vue")?"tsx":void 0}function $(e){const[n,t]=(0,o.useState)(!0),s=(0,i.Z)("/auto-generated"),[c,d]=(0,o.useState)([]),[m,u]=(0,o.useState)(0);return(0,o.useEffect)((()=>{if(e.examplesByName){let n=[];return e.framework===l.ANGULAR&&(n=[`${e.name}.ts`,`${e.name}.html`]),e.framework===l.JAVASCRIPT&&(n=[`${e.name}.html`]),e.framework===l.REACT&&(n=[`${e.name}.tsx`]),e.framework===l.VUE&&(n=[`${e.name}.vue`]),t(!0),void w(s,e.framework,n).then((e=>{d(e.filter((e=>e))),t(!1)}))}if(e.files&&e.files[e.framework]){const n=e.files[e.framework];t(!0),w(s,e.framework,n).then((e=>{d(e.filter((e=>e))),t(!1)}))}}),[e.framework]),(0,o.useEffect)((()=>{e.onSourceCodeFetched(c)}),[c]),n?(0,f.jsx)(a.lL,{}):0===c.length?(0,f.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"}):1===c.length?(0,f.jsx)(r.Z,{language:y(c[0].filename),children:c[0].source}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Vp,{children:c.map(((e,n)=>(0,f.jsx)(a.t3,{onClick:()=>u(n),children:e.filename},e.filename+"."+n)))}),(0,f.jsx)(r.Z,{language:y(c[m].filename),children:c[m].source})]})}function C(e){const[n,t]=(0,o.useState)(l.PREVIEW),r=(0,i.Z)("/"),m=(0,i.Z)("/img"),u=(0,i.Z)("/webcomponent-examples/dist/preview-examples"),[p,h]=(0,o.useState)([]),j=(0,g.Z)().siteConfig.customFields.playgroundVersion,v=n=>!!e.examplesByName||!!e.files[n];return(0,f.jsxs)("div",{children:[(0,f.jsxs)(a.Vp,{children:[(0,f.jsx)(a.t3,{onClick:()=>t(l.PREVIEW),children:"Preview"}),v(l.ANGULAR)&&(0,f.jsx)(a.t3,{onClick:()=>t(l.ANGULAR),children:"Angular"}),v(l.REACT)&&(0,f.jsx)(a.t3,{onClick:()=>t(l.REACT),children:"React"}),v(l.VUE)&&(0,f.jsx)(a.t3,{onClick:()=>t(l.VUE),children:"Vue"}),v(l.JAVASCRIPT)&&(0,f.jsx)(a.t3,{onClick:()=>t(l.JAVASCRIPT),children:"Javascript"}),(0,f.jsx)("div",{className:d.Files_Toolbar,children:n===l.PREVIEW?(0,f.jsx)(a.AN,{ghost:!0,size:"16",icon:"open-external",onClick:()=>{const n=s.CT.getCurrentTheme(),t=e.noMargin?"&no-margin=true":"";window.open(`${u}/${e.name}.html?theme=${n}${t}`)}}):(0,f.jsxs)(f.Fragment,{children:[!e.disableStackBlitz&&(0,f.jsx)(a.AN,{ghost:!0,size:"16",icon:`${m}/stackblitz.svg`,onClick:()=>{x({baseUrl:r,files:p,framework:n,name:e.name,version:j})}}),(0,f.jsx)(a.AN,{ghost:!0,size:"16",icon:`${m}/github.svg`,onClick:()=>{window.open(`https://github.com/${function(e){let n="html";return e===l.ANGULAR&&(n="angular"),e===l.REACT&&(n="react"),e===l.VUE&&(n="vue"),`siemens/ix/tree/main/packages/${n}-test-app`}(n)}`)}})]})})]}),n===l.PREVIEW?(0,f.jsx)(c.Z,{...e}):null,n!==l.PREVIEW?(0,f.jsx)($,{onSourceCodeFetched:e=>h(e),framework:n,name:e.name,files:e.files,examplesByName:e.examplesByName}):null]})}},12658:(e,n,t)=>{t(36088),t(13424),t(52983),t(69718),t(97458)}}]);
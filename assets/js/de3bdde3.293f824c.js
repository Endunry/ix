"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1407],{4391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(97458),r=n(16436),s=n(91604);const a={},o=void 0,c={id:"auto-generated/ix-breadcrumb-item/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-breadcrumb-item/props.md",sourceDirName:"auto-generated/ix-breadcrumb-item",slug:"/auto-generated/ix-breadcrumb-item/props",permalink:"/docs/auto-generated/ix-breadcrumb-item/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-breadcrumb-item/props.md",tags:[],version:"current",frontMatter:{}},l={},d=[];function u(e){return(0,i.jsx)(s.Z,{attributes:[{name:"icon",description:"Icon to be displayed next ot the label",definition:[{name:"Attribute",value:"icon"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"label",description:"Breadcrumb label",definition:[{name:"Attribute",value:"label"},{name:"Type",value:"string"},{name:"Default"}],tags:[]}]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u()}},42833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(97458),r=n(16436),s=n(91604);const a={},o=void 0,c={id:"auto-generated/ix-breadcrumb/events",title:"events",description:"",source:"@site/docs/auto-generated/ix-breadcrumb/events.md",sourceDirName:"auto-generated/ix-breadcrumb",slug:"/auto-generated/ix-breadcrumb/events",permalink:"/docs/auto-generated/ix-breadcrumb/events",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-breadcrumb/events.md",tags:[],version:"current",frontMatter:{}},l={},d=[];function u(e){return(0,i.jsx)(s.Z,{attributes:[{name:"itemClick",description:"Crumb item clicked event",definition:[{name:"Detail",value:"string"}],tags:[]},{name:"nextClick",description:"Next item clicked event",definition:[{name:"Detail",value:"{ event: UIEvent; item: string; }"}],tags:[]}]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u()}},78708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(97458),r=n(16436),s=n(91604);const a={},o=void 0,c={id:"auto-generated/ix-breadcrumb/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-breadcrumb/props.md",sourceDirName:"auto-generated/ix-breadcrumb",slug:"/auto-generated/ix-breadcrumb/props",permalink:"/docs/auto-generated/ix-breadcrumb/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-breadcrumb/props.md",tags:[],version:"current",frontMatter:{}},l={},d=[];function u(e){return(0,i.jsx)(s.Z,{attributes:[{name:"ariaLabelPreviousButton",description:"Accessibility label for the dropdown button (ellipsis icon) used to access the dropdown list\nwith conditionally hidden previous items",definition:[{name:"Attribute",value:"aria-label-previous-button"},{name:"Type",value:"string"},{name:"Default",value:"'previous'"}],tags:[{type:"since",message:"2.0.0"}]},{name:"ghost",description:"Ghost breadcrumbs will not show solid backgrounds on individual crumbs unless there is a mouse event (e.g. hover)",definition:[{name:"Attribute",value:"ghost"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"nextItems",description:"Items will be accessible through a dropdown",definition:[{name:"Attribute"},{name:"Type",value:"string[]"},{name:"Default",value:"[]"}],tags:[]},{name:"visibleItemCount",description:"Excess items will get hidden inside of dropdown",definition:[{name:"Attribute",value:"visible-item-count"},{name:"Type",value:"number"},{name:"Default",value:"9"}],tags:[]}]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u()}},64009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>j,frontMatter:()=>h,metadata:()=>g,toc:()=>x});var i=n(97458),r=n(16436),s=n(80235);function a(e){const t={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Breadcrumb navigation is a UI control that allows users to track their location within an application and easily navigate to previous or child pages.\nBreadcrumbs make the structure of applications transparent to users. We typically use breadcrumbs in applications that have a deep hierarchy of pages or content. This helps users understand where they are within applications, and makes it easier to navigate to pages further along the navigation tree. As a general rule, we use breadcrumbs for information architecture with more than two levels, but not as a replacement for an application's main navigation. If the information structure is extremely complex, we often consider using a tree instead of a breadcrumb."}),"\n",(0,i.jsx)(t.p,{children:"Breadcrumb items are interactive. Users navigate to their respective location by pressing the item. Each item contains a breadcrumb label. All items in the breadcrumb path are always followed by a chevron icon except for the last item."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/figma/wEptRgAezDU1z80Cn3eZ0o_20_8463.png",alt:"Breadcrumb overview"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Breadcrumb item"}),"\n",(0,i.jsx)(t.li,{children:"Separator"}),"\n",(0,i.jsx)(t.li,{children:"Dropdown"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"variants",children:"Variants"}),"\n",(0,i.jsx)(t.p,{children:"Breadcrumbs are available as a ghost and solid variant. Both variants differ in font and fill color but interact in the same pattern. We typically use the ghost variant to create a lower visual emphasis for users."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/figma/wEptRgAezDU1z80Cn3eZ0o_20_352.png",alt:"Breadcrumb variants"})}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Icon"}),": Breadcrumb items can, but don't have to, include an icon. The icon is positioned before the breadcrumb label. Icons can be included for each item or only for specific items (e.g. the root item)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Show child items on last item"}),":  By default, the last item of the breadcrumb doesn't offer any user interaction. An interactive item variant is available which allows the user to browse to child pages of the current page. Pressing the item triggers a dropdown listing all child elements."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Visible item count"}),": By default, breadcrumbs display a limited number of items. This number can be adjusted."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"behavior-in-context",children:"Behavior in context"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Population"}),": As a general rule, we populate breadcrumbs location-based to reflect the hierarchy of the application and the location of the user within it. We always include the current location in the breadcrumb."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Overflow"}),": If the number of items exceeds the defined limit, items are hidden within a dropdown menu at the beginning of the path. The dropdown menu is triggered by pressing the respective item. The truncation is visualized with an ellipsis. The overflow behavior can also be triggered if the available space does not allow the complete display of the breadcrumb in one line."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Text truncation"}),": Truncation is applied to individual breadcrumb items if the maximum width of the breadcrumb item is exceeded. The label name is truncated with an ellipsis."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Placement"}),": We typically place breadcrumbs at the top left side of the page/content area, below the header and above the page title."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"states",children:"States"}),"\n",(0,i.jsx)(t.p,{children:"Interactive items can take one of four states: Default, hover, active and focused. Non-interactive items are always in default state."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/figma/wEptRgAezDU1z80Cn3eZ0o_120_7463.png",alt:"States of breadcrumb items"})}),"\n",(0,i.jsx)(t.h2,{id:"dos-and-donts",children:"Dos and don'ts"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Do label each item, i.e. use more than icons"}),"\n",(0,i.jsx)(t.li,{children:"Do use single-line text entries as breadcrumb items have a fixed height"}),"\n",(0,i.jsxs)(t.li,{children:["Don't use breadcrumbs to display a multistep process (use the ",(0,i.jsx)(t.a,{href:"/docs/controls/workflow",children:"workflow"})," control instead)"]}),"\n",(0,i.jsx)(t.li,{children:"Don't show multiple breadcrumbs on one screen, e.g. in a content area and in a drawer"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-patterns",children:"Related patterns:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/controls/dropdown",children:"Dropdown"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/controls/application-frame/basic-navigation",children:"Basic navigation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/controls/application-frame/map-navigation",children:"Map navigation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/controls/workflow",children:"Workflow"})}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}var c=n(78708),l=n(42833),d=n(4391),u=n(1541);function m(e){const t={h2:"h2",h3:"h3",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.Z,{name:"breadcrumb",height:"8rem",examplesByName:!0}),"\n",(0,i.jsx)(t.h3,{id:"truncate",children:"Truncate"}),"\n",(0,i.jsx)(u.Z,{name:"breadcrumb-truncate",height:"10rem",hideInitalCodePreview:!0,examplesByName:!0}),"\n",(0,i.jsx)(t.h3,{id:"lazy-loaded-next-items",children:"Lazy loaded next items"}),"\n",(0,i.jsx)(u.Z,{name:"breadcrumb-next-items",height:"8rem",hideInitalCodePreview:!0,examplesByName:!0}),"\n",(0,i.jsx)(t.h2,{id:"properties-ix-breadcrumb",children:"Properties (ix-breadcrumb)"}),"\n",(0,i.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,i.jsx)(c.default,{}),"\n",(0,i.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,i.jsx)(l.default,{}),"\n",(0,i.jsx)(t.h2,{id:"properties-ix-breadcrumb-item",children:"Properties (ix-breadcrumb-item)"}),"\n",(0,i.jsx)(t.h3,{id:"props-1",children:"Props"}),"\n",(0,i.jsx)(d.default,{})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}const h={},f="Breadcrumb",g={id:"controls/breadcrumb",title:"Breadcrumb",description:"",source:"@site/docs/controls/breadcrumb.md",sourceDirName:"controls",slug:"/controls/breadcrumb",permalink:"/docs/controls/breadcrumb",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/breadcrumb.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Blind",permalink:"/docs/controls/blind"},next:{title:"Button",permalink:"/docs/controls/buttons/button"}},b={},x=[];function v(e){const t={h1:"h1",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"breadcrumb",children:"Breadcrumb"}),"\n",(0,i.jsx)(s.Z,{styleguide:o,code:p})]})}function j(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}},14455:(e,t,n)=>{n.d(t,{Z:()=>A});const i=300,r="https://stackblitz.com",s=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],a=["project","search","ports","settings"],o=["light","dark"],c=["editor","preview"],l={clickToLoad:e=>u("ctl",e),devToolsHeight:e=>m("devtoolsheight",e),forceEmbedLayout:e=>u("embed",e),hideDevTools:e=>u("hidedevtools",e),hideExplorer:e=>u("hideExplorer",e),hideNavigation:e=>u("hideNavigation",e),openFile:e=>h("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>p("sidebarView",e,a),startScript:e=>h("startScript",e),terminalHeight:e=>m("terminalHeight",e),theme:e=>p("theme",e,o),view:e=>p("view",e,c),zenMode:e=>u("zenMode",e)};function d(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&l.hasOwnProperty(e)?l[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function u(e,t){return!0===t?`${e}=1`:""}function m(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function p(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function h(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function f(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function g(e,t){return`${x(t)}${e}${d(t)}`}function b(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${x(n)}${e}${d(n)}`}function x(e={}){return("string"==typeof e.origin?e.origin:r).replace(/\/$/,"")}function v(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${i}`,r=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),r?e.setAttribute("width",r):e.setAttribute("style","width:100%;")}(t,n),e.replaceWith(t)}function j(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function w(e){return e&&!1===e.newWindow?"_self":"_blank"}class y{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,i)=>{const r=f();this.pending[r]={resolve:n,reject:i},this.port.postMessage({type:e,payload:{...t,__reqid:r}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:i,__success:r,__error:s}=n;this.pending[i]&&(r?this.pending[i].resolve(this.cleanResult(n)):this.pending[i].reject(s?`${t}: ${s}`:t),delete this.pending[i])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class _{constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new y(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const E=[];class ${constructor(e){this.id=f(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new _(n[0],t.payload),e(this.vm),r())},i=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function r(){window.clearInterval(a),window.removeEventListener("message",n)}window.addEventListener("message",n),i();let s=0;const a=window.setInterval((()=>{if(this.vm)r();else{if(s>=20)return r(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void E.forEach(((e,t)=>{e.id===this.id&&E.splice(t,1)}));s++,i()}}),500)})),E.push(this)}}const T=e=>{const t=e instanceof Element?"element":"id";return E.find((n=>n[t]===e))??null};function N({template:e,title:t,description:n,dependencies:i,files:r,settings:a}){if(!s.includes(e)){const e=s.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const o=[],c=(e,t,n="")=>{o.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};c("project[title]",t),"string"==typeof n&&n.length>0&&c("project[description]",n),c("project[template]",e,"javascript"),i&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):c("project[dependencies]",JSON.stringify(i))),a&&c("project[settings]",JSON.stringify(a)),Object.entries(r).forEach((([e,t])=>{c(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...o),l}function C(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return(T(e)??new $(e)).pending}const A={connect:C,embedGithubProject:function(e,t,n){const i=j(e),r=document.createElement("iframe");return r.src=b(`/github/${t}`,n),v(i,r,n),C(r)},embedProject:function(e,t,n){const i=j(e),r=function(e,t){const n=N(e);return n.action=b("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),s=document.createElement("iframe");return v(i,s,n),s.contentDocument?.write(r),C(s)},embedProjectId:function(e,t,n){const i=j(e),r=document.createElement("iframe");return r.src=b(`/edit/${t}`,n),v(i,r,n),C(r)},openGithubProject:function(e,t){const n=g(`/github/${e}`,t),i=w(t);window.open(n,i)},openProject:function(e,t){!function(e,t){const n=N(e);n.action=g("/run",t),n.target=w(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=g(`/edit/${e}`,t),i=w(t);window.open(n,i)}}},91604:(e,t,n)=>{n.d(t,{Z:()=>a});n(52983);var i=n(76840),r=n(97458);function s(e){return(0,r.jsxs)("div",{className:"row with--border",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,r.jsx)(i.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,r.jsx)(i.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"ApiTable__Content",children:[(0,r.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,r.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,r.jsxs)("div",{className:"row Attribute",children:[(0,r.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,r.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const a=function(e){return(0,r.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,r.jsxs)("div",{className:"row with--border",children:[(0,r.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,r.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,r.jsx)(s,{attribute:e},e.name)))]})}},76840:(e,t,n)=>{n.d(t,{Q:()=>r,h:()=>s});n(52983);var i=n(97458);function r(e){return(0,i.jsxs)("div",{className:"ApiTableTag",children:[(0,i.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,i.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,i.jsx)("div",{className:"ApiTableTag",children:(0,i.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},69718:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(59891),r=n(42603),s=n(77272),a=n(52983),o=n(17995),c=n(97458);function l(e){const t=(0,s.Z)(),[n]=(0,a.useState)(!1),l=(0,r.Z)("/"),[d,u]=(0,a.useState)(""),[m,p]=(0,a.useState)((0,o.V)(t)),{preferredVersion:h}=(0,i.J)();return(0,a.useEffect)((()=>{const t=h?.name;u(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,h?.name,e.name]),(0,a.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),p(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),(0,c.jsx)(c.Fragment,{children:n?(0,c.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",h?.name]}):(0,c.jsx)("iframe",{src:`${d}?theme=${e.theme?e.theme:m}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},80235:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(50756),r=n(14517),s=n(52983),a=n(97458);const o="docusaurus.ix.general.tab";const c=e=>{const[t,n]=(0,s.useState)(function(){const e=window.localStorage.getItem(o);return e&&("styleguide"===(t=e)||"code"===t)?e:"styleguide";var t}()),i=e=>{n(e),function(e){window.localStorage.setItem(o,e)}(e)},r=e[t];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"Docs__Tabs",children:[(0,a.jsx)(d,{name:"UX guidelines",active:"styleguide"===t,onClick:()=>i("styleguide"),children:(0,a.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 2C18.0228 2 22.5 6.47715 22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2ZM4.56189 11C5.01314 7.38128 7.88128 4.51314 11.5 4.06189V6H13.5V4.06189C17.1187 4.51314 19.9869 7.38128 20.4381 11H18.5V13H20.4381C19.9869 16.6187 17.1187 19.4869 13.5 19.9381V18H11.5V19.9381C7.88128 19.4869 5.01314 16.6187 4.56189 13H6.5V11H4.56189ZM11 10.5L17.5 7L14 13.5L7.5 17L11 10.5ZM13.5 12C13.5 12.5523 13.0523 13 12.5 13C11.9477 13 11.5 12.5523 11.5 12C11.5 11.4477 11.9477 11 12.5 11C13.0523 11 13.5 11.4477 13.5 12Z"})})}),(0,a.jsx)(d,{name:"Development",active:"code"===t,onClick:()=>i("code"),children:(0,a.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.0168 6.52423L13.0849 6.00659L9.97911 17.5977L11.911 18.1153L15.0168 6.52423ZM7.45711 6.79042L8.87132 8.20463L5.07921 11.9975L8.87132 15.7904L7.45711 17.2046L2.25 11.9975L7.45711 6.79042ZM17.5342 6.79216L16.12 8.20637L19.9121 11.9993L16.12 15.7922L17.5342 17.2064L22.7413 11.9993L17.5342 6.79216Z",fill:"inherit"})})})]}),(0,a.jsx)("div",{className:"Docs__Tabs__Content",children:(0,a.jsx)(r,{})})]})},l=e=>(0,a.jsx)(i.Z,{children:()=>(0,a.jsx)(c,{...e})});function d(e){return(0,a.jsxs)("div",{onClick:e.onClick,className:(0,r.Z)("Doc_Tab",{active:e.active}),children:[e.children,e.name]})}},1541:(e,t,n)=>{n.d(t,{Z:()=>E});var i=n(42603),r=n(62278),s=n(67498),a=n(13510),o=n(52983);let c=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});var l=n(69718);const d={Files_Toolbar:"Files_Toolbar_Sh51"};var u=n(14455);function m(e,t){return e.replace(/\"<VERSION>\"/g,`"${t}"`)}function p(e){const t=r.CT.getCurrentTheme().replace("brand","classic");return e.replace(/(<body class=")[^"]*(")/,`$1${t}$2`)}async function h(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function f(e){let{name:t,framework:n,files:i,baseUrl:r,version:s}=e;const a=s||"latest";return n===c.REACT?async function(e,t,n){const[i,r,s,a,o]=await h([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[c]=t,l={};t.forEach((e=>{let{filename:t,source:n}=e;l[`src/${t}`]=n})),u.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...l,"public/index.html":p(r),"src/index.tsx":s,"src/App.tsx":i.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${c.filename.substring(0,c.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":m(a,n),"tsconfig.json":o,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${c.filename}`})}(r,i,a):n===c.ANGULAR?async function(e,t,n,i){const[r,s,a,o,c,l,d,f,g,b,x]=await h([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),v=[];n.forEach((e=>{let{filename:t,source:n}=e;/@Component/gms.test(n)&&v.push(t)}));const j=`\n    ${v.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${v.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,w={};n.forEach((e=>{let{filename:t,source:n}=e;w[`src/app/${t}`]=n})),u.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":j,"src/app/app.component.css":r,"src/app/app.component.html":s,"src/app/app.component.ts":a,"src/app/app.module.ts":o,"src/index.html":p(c),"src/main.ts":l,"src/styles.css":d,"angular.json":f,"package.json":m(g,i),"tsconfig.app.json":b,"tsconfig.json":x,...w}},{openFile:`src/app/${t}.ts`})}(r,t,i,a):n===c.JAVASCRIPT?async function(e,t,n){const[i,r,s]=await h([`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[a,...o]=t,c={};var l;o.forEach((e=>{c[`src/${e.filename}`]=e.source})),u.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...c,"src/index.html":p((l=a.raw,l.replace(/(<script type="module" src=")[^"]*(">)/,"$1./main.js$2"))),"src/main.js":i,"package.json":m(r,n),"vite.config.ts":s}},{openFile:["src/index.html"]})}(r,i,a):n===c.VUE?async function(e,t,n){const[i,r,s,a,o,c,l]=await h([`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),[d]=t,f={};t.forEach((e=>{let{filename:t,source:n}=e;f[`src/${t}`]=n})),u.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...f,"index.html":p(r),"src/main.ts":s,"src/App.vue":i.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${d.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":l,"package.json":m(a,n),"tsconfig.json":o,"vite.config.ts":c,".stackblitzrc":'{\n          "startCommand": "yarn run dev"\n        }'}},{openFile:`src/${d.filename}`})}(r,i,a):void 0}var g=n(77272),b=n(97458);function x(e){return e.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim()}function v(e,t){const n=e.match(t);if(n&&2===n.length){const[n,i]=e.split(t);return x(i.split("\n").map((e=>e.replace(/[ ]{4}/,""))).join("\n").trim())}return""}function j(e){const t=v(e,/<!-- Preview code -->/g);if(t){const n=v(e,/<!-- Sources -->/g);return n?"\x3c!-- Include in header --\x3e\n"+n+"\n\x3c!-- Include in header --\x3e\n\n"+t:t}return x(e)}async function w(e,t,n){let i="web-components";return t===c.ANGULAR&&(i="angular"),t===c.REACT&&(i="react"),t===c.VUE&&(i="vue"),Promise.all(n.map((async t=>{try{const n=await async function(e){console.log("FETCH SOURCE FROM",e);const t=await fetch(`${e}.txt`),n=await t.text();return console.log(n),!n||n?.includes('<div id="__docusaurus"></div>')||n?.includes("Page Not Found")?null:n}(`${e}/previews/${i}/${t}`);return n?{filename:t,source:j(n),raw:n}:null}catch(n){console.warn(n)}})))}function y(e){return e.endsWith(".html")?"html":e.endsWith(".ts")?"ts":e.endsWith(".tsx")||e.endsWith(".vue")?"tsx":void 0}function _(e){const[t,n]=(0,o.useState)(!0),r=(0,i.Z)("/auto-generated"),[l,d]=(0,o.useState)([]),[u,m]=(0,o.useState)(0);return(0,o.useEffect)((()=>{if(e.examplesByName){let t=[];return e.framework===c.ANGULAR&&(t=[`${e.name}.ts`,`${e.name}.html`]),e.framework===c.JAVASCRIPT&&(t=[`${e.name}.html`]),e.framework===c.REACT&&(t=[`${e.name}.tsx`]),e.framework===c.VUE&&(t=[`${e.name}.vue`]),n(!0),void w(r,e.framework,t).then((e=>{d(e.filter((e=>e))),n(!1)}))}if(e.files&&e.files[e.framework]){const t=e.files[e.framework];n(!0),w(r,e.framework,t).then((e=>{d(e.filter((e=>e))),n(!1)}))}}),[e.framework]),(0,o.useEffect)((()=>{e.onSourceCodeFetched(l)}),[l]),t?(0,b.jsx)(s.lL,{}):0===l.length?(0,b.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"}):1===l.length?(0,b.jsx)(a.Z,{language:y(l[0].filename),children:l[0].source}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s.Vp,{children:l.map(((e,t)=>(0,b.jsx)(s.t3,{onClick:()=>m(t),children:e.filename},e.filename+"."+t)))}),(0,b.jsx)(a.Z,{language:y(l[u].filename),children:l[u].source})]})}function E(e){const[t,n]=(0,o.useState)(c.PREVIEW),a=(0,i.Z)("/"),u=(0,i.Z)("/img"),m=(0,i.Z)("/webcomponent-examples/dist/preview-examples"),[p,h]=(0,o.useState)([]),x=(0,g.Z)().siteConfig.customFields.playgroundVersion,v=t=>!!e.examplesByName||!!e.files[t];return(0,b.jsxs)("div",{children:[(0,b.jsxs)(s.Vp,{children:[(0,b.jsx)(s.t3,{onClick:()=>n(c.PREVIEW),children:"Preview"}),v(c.ANGULAR)&&(0,b.jsx)(s.t3,{onClick:()=>n(c.ANGULAR),children:"Angular"}),v(c.REACT)&&(0,b.jsx)(s.t3,{onClick:()=>n(c.REACT),children:"React"}),v(c.VUE)&&(0,b.jsx)(s.t3,{onClick:()=>n(c.VUE),children:"Vue"}),v(c.JAVASCRIPT)&&(0,b.jsx)(s.t3,{onClick:()=>n(c.JAVASCRIPT),children:"Javascript"}),(0,b.jsx)("div",{className:d.Files_Toolbar,children:t===c.PREVIEW?(0,b.jsx)(s.AN,{ghost:!0,size:"16",icon:"open-external",onClick:()=>{const t=r.CT.getCurrentTheme(),n=e.noMargin?"&no-margin=true":"";window.open(`${m}/${e.name}.html?theme=${t}${n}`)}}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s.AN,{ghost:!0,size:"16",icon:`${u}/stackblitz.svg`,onClick:()=>{f({baseUrl:a,files:p,framework:t,name:e.name,version:x})}}),(0,b.jsx)(s.AN,{ghost:!0,size:"16",icon:`${u}/github.svg`,onClick:()=>{window.open(`https://github.com/${function(e){let t="html";return e===c.ANGULAR&&(t="angular"),e===c.REACT&&(t="react"),e===c.VUE&&(t="vue"),`siemens/ix/tree/main/packages/${t}-test-app`}(t)}`)}})]})})]}),t===c.PREVIEW?(0,b.jsx)(l.Z,{...e}):null,t!==c.PREVIEW?(0,b.jsx)(_,{onSourceCodeFetched:e=>h(e),framework:t,name:e.name,files:e.files,examplesByName:e.examplesByName}):null]})}}}]);
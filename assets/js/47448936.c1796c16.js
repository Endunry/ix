"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79389],{47110:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=a(97458),n=a(16436),s=a(91604);const r={},d=void 0,o={id:"auto-generated/ix-drawer/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-drawer/props.md",sourceDirName:"auto-generated/ix-drawer",slug:"/auto-generated/ix-drawer/props",permalink:"/docs/auto-generated/ix-drawer/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-drawer/props.md",tags:[],version:"current",frontMatter:{}},c={},l=[];function u(e){return(0,i.jsx)(s.Z,{attributes:[{name:"closeOnClickOutside",description:"Fired in case of an outside click during drawer showed state",definition:[{name:"Attribute",value:"close-on-click-outside"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"fullHeight",description:"Render the drawer with maximum height",definition:[{name:"Attribute",value:"full-height"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"maxWidth",description:"Max width interpreted as REM",definition:[{name:"Attribute",value:"max-width"},{name:"Type",value:"number"},{name:"Default",value:"28"}],tags:[]},{name:"minWidth",description:"Min width interpreted as REM",definition:[{name:"Attribute",value:"min-width"},{name:"Type",value:"number"},{name:"Default",value:"16"}],tags:[]},{name:"show",description:"Show or hide the drawer",definition:[{name:"Attribute",value:"show"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"width",description:"Width interpreted as REM if not set to 'auto'",definition:[{name:"Attribute",value:"width"},{name:"Type",value:'"auto" \uff5c number'},{name:"Default",value:"this.minWidth"}],tags:[]}]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u()}},91604:(e,t,a)=>{a.d(t,{Z:()=>r});a(52983);var i=a(76840),n=a(97458);function s(e){return(0,n.jsxs)("div",{className:"row with--border",children:[(0,n.jsx)("div",{className:"col-sm-6",children:(0,n.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,n.jsx)(i.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,n.jsx)(i.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,n.jsx)("div",{className:"col-sm-6",children:(0,n.jsxs)("div",{className:"ApiTable__Content",children:[(0,n.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,n.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,n.jsxs)("div",{className:"row Attribute",children:[(0,n.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,n.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,n.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,n.jsxs)("div",{className:"row with--border",children:[(0,n.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,n.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,n.jsx)(s,{attribute:e},e.name)))]})}},76840:(e,t,a)=>{a.d(t,{Q:()=>n,h:()=>s});a(52983);var i=a(97458);function n(e){return(0,i.jsxs)("div",{className:"ApiTableTag",children:[(0,i.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,i.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,i.jsx)("div",{className:"ApiTableTag",children:(0,i.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,t,a)=>{a.d(t,{Z:()=>d,a:()=>r});var i=a(52983);const n={},s=i.createContext(n);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
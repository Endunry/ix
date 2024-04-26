"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53666],{58624:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(97458),i=a(16436),s=a(91604);const r={},o=void 0,l={id:"auto-generated/ix-toggle/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-toggle/props.md",sourceDirName:"auto-generated/ix-toggle",slug:"/auto-generated/ix-toggle/props",permalink:"/docs/auto-generated/ix-toggle/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-toggle/props.md",tags:[],version:"current",frontMatter:{}},d={},c=[];function u(e){return(0,n.jsx)(s.Z,{attributes:[{name:"checked",description:"Whether the slide-toggle element is checked or not.",definition:[{name:"Attribute",value:"checked"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"disabled",description:"Whether the slide-toggle element is disabled or not.",definition:[{name:"Attribute",value:"disabled"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"hideText",description:"Hide `on` and `off` text",definition:[{name:"Attribute",value:"hide-text"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"indeterminate",description:"If true the control is in indeterminate state",definition:[{name:"Attribute",value:"indeterminate"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"textIndeterminate",description:"Text for indeterminate state",definition:[{name:"Attribute",value:"text-indeterminate"},{name:"Type",value:"string"},{name:"Default",value:"'Mixed'"}],tags:[]},{name:"textOff",description:"Text for off state",definition:[{name:"Attribute",value:"text-off"},{name:"Type",value:"string"},{name:"Default",value:"'Off'"}],tags:[]},{name:"textOn",description:"Text for on state",definition:[{name:"Attribute",value:"text-on"},{name:"Type",value:"string"},{name:"Default",value:"'On'"}],tags:[]}]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u()}},91604:(e,t,a)=>{a.d(t,{Z:()=>r});a(52983);var n=a(76840),i=a(97458);function s(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,i.jsx)(n.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,i.jsx)(n.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(s,{attribute:e},e.name)))]})}},76840:(e,t,a)=>{a.d(t,{Q:()=>i,h:()=>s});a(52983);var n=a(97458);function i(e){return(0,n.jsxs)("div",{className:"ApiTableTag",children:[(0,n.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,n.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,n.jsx)("div",{className:"ApiTableTag",children:(0,n.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var n=a(52983);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
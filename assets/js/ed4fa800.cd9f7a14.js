"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19060],{85503:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(97458),i=a(16436),s=a(91604);const o={},r=void 0,l={id:"auto-generated/ix-button/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-button/props.md",sourceDirName:"auto-generated/ix-button",slug:"/auto-generated/ix-button/props",permalink:"/docs/auto-generated/ix-button/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-button/props.md",tags:[],version:"current",frontMatter:{}},u={},c=[];function d(e){return(0,n.jsx)(s.Z,{attributes:[{name:"disabled",description:"Disable the button",definition:[{name:"Attribute",value:"disabled"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"ghost",description:"Button with no background or outline",definition:[{name:"Attribute",value:"ghost"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"icon",description:"Icon name",definition:[{name:"Attribute",value:"icon"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"loading",description:"Loading button",definition:[{name:"Attribute",value:"loading"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[{type:"since",message:"2.0.0"}]},{name:"outline",description:"Outline button",definition:[{name:"Attribute",value:"outline"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"type",description:"Type of the button",definition:[{name:"Attribute",value:"type"},{name:"Type",value:'"button" \uff5c "submit"'},{name:"Default",value:"'button'"}],tags:[]},{name:"variant",description:"Button variant",definition:[{name:"Attribute",value:"variant"},{name:"Type",value:'"primary" \uff5c "secondary"'},{name:"Default",value:"'primary'"}],tags:[]}]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d()}},91604:(e,t,a)=>{a.d(t,{Z:()=>o});a(52983);var n=a(76840),i=a(97458);function s(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,i.jsx)(n.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,i.jsx)(n.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const o=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(s,{attribute:e},e.name)))]})}},76840:(e,t,a)=>{a.d(t,{Q:()=>i,h:()=>s});a(52983);var n=a(97458);function i(e){return(0,n.jsxs)("div",{className:"ApiTableTag",children:[(0,n.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,n.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,n.jsx)("div",{className:"ApiTableTag",children:(0,n.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>o});var n=a(52983);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
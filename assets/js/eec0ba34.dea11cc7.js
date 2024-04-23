"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55899],{92929:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=t(97458),i=t(16436),s=t(91604);const r={},c=void 0,l={id:"auto-generated/ix-expanding-search/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-expanding-search/props.md",sourceDirName:"auto-generated/ix-expanding-search",slug:"/auto-generated/ix-expanding-search/props",permalink:"/docs/auto-generated/ix-expanding-search/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-expanding-search/props.md",tags:[],version:"current",frontMatter:{}},o={},d=[];function u(e){return(0,n.jsx)(s.Z,{attributes:[{name:"fullWidth",description:"If true the search field will fill all available horizontal space of it's parent container when expanded.",definition:[{name:"Attribute",value:"full-width"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[{type:"since",message:"1.6.0"}]},{name:"icon",description:"Search icon",definition:[{name:"Attribute",value:"icon"},{name:"Type",value:"string"},{name:"Default",value:"'search'"}],tags:[]},{name:"placeholder",description:"Placeholder text",definition:[{name:"Attribute",value:"placeholder"},{name:"Type",value:"string"},{name:"Default",value:"'Enter text here'"}],tags:[]},{name:"value",description:"Default value",definition:[{name:"Attribute",value:"value"},{name:"Type",value:"string"},{name:"Default",value:"''"}],tags:[]}]})}function m(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u()}},91604:(e,a,t)=>{t.d(a,{Z:()=>r});t(52983);var n=t(76840),i=t(97458);function s(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((a=>(0,i.jsx)(n.h,{message:a.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((a=>(0,i.jsx)(n.Q,{message:a.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(s,{attribute:e},e.name)))]})}},76840:(e,a,t)=>{t.d(a,{Q:()=>i,h:()=>s});t(52983);var n=t(97458);function i(e){return(0,n.jsxs)("div",{className:"ApiTableTag",children:[(0,n.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,n.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,n.jsx)("div",{className:"ApiTableTag",children:(0,n.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,a,t)=>{t.d(a,{Z:()=>c,a:()=>r});var n=t(52983);const i={},s=n.createContext(i);function r(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);
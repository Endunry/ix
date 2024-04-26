"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68931],{19123:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=t(97458),i=t(16436),s=t(91604);const r={},o=void 0,c={id:"auto-generated/ix-layout-grid/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-layout-grid/props.md",sourceDirName:"auto-generated/ix-layout-grid",slug:"/auto-generated/ix-layout-grid/props",permalink:"/docs/auto-generated/ix-layout-grid/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-layout-grid/props.md",tags:[],version:"current",frontMatter:{}},l={},d=[];function u(e){return(0,n.jsx)(s.Z,{attributes:[{name:"columns",description:"Overwrite the default number of columns. Choose between 2 and 12 columns.",definition:[{name:"Attribute",value:"columns"},{name:"Type",value:"number"},{name:"Default",value:"12"}],tags:[]},{name:"gap",description:"Grid gap",definition:[{name:"Attribute",value:"gap"},{name:"Type",value:'"12" \uff5c "16" \uff5c "24" \uff5c "8"'},{name:"Default",value:"'24'"}],tags:[]},{name:"noMargin",description:"The grid will not have any horizontal padding",definition:[{name:"Attribute",value:"no-margin"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]}]})}function m(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u()}},91604:(e,a,t)=>{t.d(a,{Z:()=>r});t(52983);var n=t(76840),i=t(97458);function s(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((a=>(0,i.jsx)(n.h,{message:a.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((a=>(0,i.jsx)(n.Q,{message:a.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(s,{attribute:e},e.name)))]})}},76840:(e,a,t)=>{t.d(a,{Q:()=>i,h:()=>s});t(52983);var n=t(97458);function i(e){return(0,n.jsxs)("div",{className:"ApiTableTag",children:[(0,n.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,n.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,n.jsx)("div",{className:"ApiTableTag",children:(0,n.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>r});var n=t(52983);const i={},s=n.createContext(i);function r(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);
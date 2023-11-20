"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58623,71716],{30876:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>p});var r=t(2784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(t),p=i,v=d["".concat(c,".").concat(p)]||d[p]||b[p]||a;return t?r.createElement(v,l(l({ref:n},s),{},{components:t})):r.createElement(v,l({ref:n},s))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71716:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=t(7896),i=(t(2784),t(30876));const a={},l=void 0,o={unversionedId:"auto-generated/previews/vue/blind-variants",id:"auto-generated/previews/vue/blind-variants",title:"blind-variants",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/blind-variants.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/blind-variants",permalink:"/docs/auto-generated/previews/vue/blind-variants",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/blind-variants.md",tags:[],version:"current",frontMatter:{}},c={},u=[],s={toc:u};function b(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport { IxBlind } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxBlind icon="bulb" label="Insight" sublabel="sublabel">\n    <div>Insight content</div>\n  </IxBlind>\n  <IxBlind variant="outline" icon="bulb" label="Outline" sublabel="sublabel">\n    <div>Outline content</div>\n  </IxBlind>\n  <IxBlind icon="bulb" variant="alarm" label="Alarm" sublabel="sublabel">\n    <div>Alarm content</div>\n  </IxBlind>\n  <IxBlind icon="bulb" variant="critical" label="Critical" sublabel="sublabel">\n    <div>Critical content</div>\n  </IxBlind>\n  <IxBlind icon="bulb" variant="warning" label="Warning" sublabel="sublabel">\n    <div>Warning content</div>\n  </IxBlind>\n  <IxBlind icon="bulb" variant="info" label="Info" sublabel="sublabel">\n    <div>Info content</div>\n  </IxBlind>\n  <IxBlind icon="bulb" variant="success" label="Success" sublabel="sublabel">\n    <div>Success content</div>\n  </IxBlind>\n  <IxBlind icon="bulb" variant="neutral" label="Neutral" sublabel="sublabel">\n    <div>Neutral content</div>\n  </IxBlind>\n</template>\n\n')))}b.isMDXComponent=!0}}]);
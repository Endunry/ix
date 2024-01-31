"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26354,54002],{30876:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(7896),o=(t(2784),t(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/vue/application-header",id:"auto-generated/previews/vue/application-header",title:"application-header",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/application-header.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/application-header",permalink:"/version-dev/docs/auto-generated/previews/vue/application-header",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/application-header.md",tags:[],version:"current",frontMatter:{}},p={},l=[],u={toc:l};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport {\n  IxApplicationHeader,\n  IxAvatar,\n  IxDropdownButton,\n  IxDropdownItem,\n  IxIconButton,\n} from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxApplicationHeader name="My Application">\n    <div className="placeholder-logo" slot="logo"></div>\n\n    <IxIconButton ghost icon="checkboxes"></IxIconButton>\n    <IxIconButton ghost icon="checkboxes"></IxIconButton>\n    <IxIconButton ghost icon="checkboxes"></IxIconButton>\n\n    <IxDropdownButton variant="secondary" label="Select config" ghost>\n      <IxDropdownItem label="Config 1"></IxDropdownItem>\n      <IxDropdownItem label="Config 2"></IxDropdownItem>\n      <IxDropdownItem label="Config 3"></IxDropdownItem>\n    </IxDropdownButton>\n\n    <IxAvatar username="John Doe" extra="Administrator">\n      <IxDropdownItem label="Action 1"></IxDropdownItem>\n      <IxDropdownItem label="Action 2"></IxDropdownItem>\n    </IxAvatar>\n  </IxApplicationHeader>\n</template>\n\n')))}s.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88818],{88818:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var n=r(7896),a=(r(2784),r(30876));const o={},s=void 0,d={unversionedId:"auto-generated/previews/vue/drawer",id:"auto-generated/previews/vue/drawer",title:"drawer",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/drawer.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/drawer",permalink:"/version-dev/docs/auto-generated/previews/vue/drawer",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/drawer.md",tags:[],version:"current",frontMatter:{}},i={},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxButton, IxDrawer } from \'@siemens/ix-vue\';\nimport { ref } from \'vue\';\n\nconst show = ref(false);\n<\/script>\n\n<template>\n  <IxDrawer closeOnClickOutside :show="show" @drawerClose="show = false">\n    <span>Some content of drawer</span>\n  </IxDrawer>\n  <IxButton @click="show = !show">Toggle drawer</IxButton>\n</template>\n')))}p.isMDXComponent=!0}}]);
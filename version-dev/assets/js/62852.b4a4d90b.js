"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62852],{62852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(7896),a=(r(2784),r(30876));const o={},s=void 0,i={unversionedId:"auto-generated/previews/vue/drawer-full-height",id:"auto-generated/previews/vue/drawer-full-height",title:"drawer-full-height",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/drawer-full-height.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/drawer-full-height",permalink:"/version-dev/docs/auto-generated/previews/vue/drawer-full-height",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/drawer-full-height.md",tags:[],version:"current",frontMatter:{}},u={},d=[],l={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxButton, IxDrawer } from \'@siemens/ix-vue\';\nimport { ref } from \'vue\';\n\nconst show = ref(false);\n<\/script>\n\n<template>\n  <IxDrawer\n    closeOnClickOutside\n    fullHeight\n    :show="show"\n    @drawerClose="show = false"\n  >\n    <span>Some content of drawer</span>\n  </IxDrawer>\n  <IxButton @click="show = !show">Toggle drawer</IxButton>\n</template>\n')))}c.isMDXComponent=!0}}]);
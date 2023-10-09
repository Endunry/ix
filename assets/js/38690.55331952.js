"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38690],{38690:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>u,metadata:()=>i,toc:()=>s});var o=e(7896),a=(e(2784),e(30876));const u={},l=void 0,i={unversionedId:"auto-generated/previews/vue/button-loading",id:"auto-generated/previews/vue/button-loading",title:"button-loading",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/button-loading.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/button-loading",permalink:"/docs/auto-generated/previews/vue/button-loading",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/button-loading.md",tags:[],version:"current",frontMatter:{}},r={},s=[],g={toc:s};function c(n){let{components:t,...e}=n;return(0,a.kt)("wrapper",(0,o.Z)({},g,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxButton, IxIconButton } from \'@siemens/ix-vue\';\nimport { ref } from \'vue\';\n\nlet toggle1 = ref(false);\nlet toggle2 = ref(false);\nlet toggle3 = ref(false);\n\nfunction load(value: string) {\n  if (value === \'1\') toggle1.value = true;\n  if (value === \'2\') toggle2.value = true;\n  if (value === \'3\') toggle3.value = true;\n\n  setTimeout(() => {\n    if (value === \'1\') toggle1.value = false;\n    if (value === \'2\') toggle2.value = false;\n    if (value === \'3\') toggle3.value = false;\n  }, 2500);\n}\n<\/script>\n\n<template>\n  <div>\n    <IxButton\n      :loading="toggle1"\n      @click="load(\'1\')"\n      class="m-1"\n      outline\n      variant="primary"\n    >\n      Button\n    </IxButton>\n    <IxButton\n      :loading="toggle2"\n      @click="load(\'2\')"\n      class="m-1"\n      outline\n      icon="star"\n      variant="primary"\n    >\n      Button\n    </IxButton>\n    <IxIconButton\n      :loading="toggle3"\n      @click="load(\'3\')"\n      class="m-1"\n      outline\n      icon="star"\n      variant="primary"\n    ></IxIconButton>\n    <IxButton loading class="m-1" outline variant="primary"> Button </IxButton>\n    <IxIconButton loading class="m-1" outline variant="primary"></IxIconButton>\n  </div>\n</template>\n')))}c.isMDXComponent=!0}}]);
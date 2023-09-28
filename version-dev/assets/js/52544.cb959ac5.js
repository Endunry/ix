"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52544],{52544:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(7896),s=(t(2784),t(30876));const o={},r=void 0,i={unversionedId:"auto-generated/previews/vue/input-search",id:"auto-generated/previews/vue/input-search",title:"input-search",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/input-search.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/input-search",permalink:"/version-dev/docs/auto-generated/previews/vue/input-search",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/input-search.md",tags:[],version:"current",frontMatter:{}},u={},p=[],c={toc:p};function d(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxIcon, IxIconButton, IxInputGroup } from \'@siemens/ix-vue\';\nimport { ref } from \'vue\';\n\nconst text = ref(\'\');\n\nfunction clearInput() {\n  text.value = \'\';\n}\n<\/script>\n\n<template>\n  <form className="needs-validation m-2">\n    <IxInputGroup>\n      <span slot="input-start">\n        <IxIcon name="search" size="16"></IxIcon>\n      </span>\n      <input\n        id="input-string"\n        type="string"\n\n        v-model="text"\n      />\n      <span slot="input-end">\n        <IxIconButton\n          @click="clearInput"\n          id="clear-button"\n          icon="clear"\n          ghost\n          size="16"\n          :style="[text === \'\' ? { display: \'none\' } : { display: \'block\' }]"\n        ></IxIconButton>\n      </span>\n    </IxInputGroup>\n  </form>\n</template>\n')))}d.isMDXComponent=!0}}]);
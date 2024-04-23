"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9159],{36545:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var o=t(97458),a=t(16436);const i={},r=void 0,u={id:"auto-generated/previews/vue/button-loading",title:"button-loading",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/button-loading.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/button-loading",permalink:"/docs/auto-generated/previews/vue/button-loading",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/button-loading.md",tags:[],version:"current",frontMatter:{}},l={},s=[];function c(n){const e={code:"code",pre:"pre",...(0,a.a)(),...n.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-html",children:'\x3c!--\n * SPDX-FileCopyrightText: 2024 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport { IxButton, IxIconButton } from \'@siemens/ix-vue\';\nimport { ref } from \'vue\';\n\nlet toggle1 = ref(false);\nlet toggle2 = ref(false);\nlet toggle3 = ref(false);\n\nfunction load(value: string) {\n  if (value === \'1\') toggle1.value = true;\n  if (value === \'2\') toggle2.value = true;\n  if (value === \'3\') toggle3.value = true;\n\n  setTimeout(() => {\n    if (value === \'1\') toggle1.value = false;\n    if (value === \'2\') toggle2.value = false;\n    if (value === \'3\') toggle3.value = false;\n  }, 2500);\n}\n<\/script>\n\n<template>\n  <div>\n    <IxButton\n      :loading="toggle1"\n      @click="load(\'1\')"\n      class="m-1"\n      outline\n      variant="primary"\n    >\n      Button\n    </IxButton>\n    <IxButton\n      :loading="toggle2"\n      @click="load(\'2\')"\n      class="m-1"\n      outline\n      icon="star"\n      variant="primary"\n    >\n      Button\n    </IxButton>\n    <IxIconButton\n      :loading="toggle3"\n      @click="load(\'3\')"\n      class="m-1"\n      outline\n      icon="star"\n      variant="primary"\n    ></IxIconButton>\n    <IxButton loading class="m-1" outline variant="primary"> Button </IxButton>\n    <IxIconButton loading class="m-1" outline variant="primary"></IxIconButton>\n  </div>\n</template>\n\n'})})}function d(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}},16436:(n,e,t)=>{t.d(e,{Z:()=>u,a:()=>r});var o=t(52983);const a={},i=o.createContext(a);function r(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function u(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);
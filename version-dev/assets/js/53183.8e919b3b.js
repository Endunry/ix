"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53183],{53183:(o,a,r)=>{r.r(a),r.d(a,{assets:()=>x,contentTitle:()=>t,default:()=>l,frontMatter:()=>e,metadata:()=>y,toc:()=>i});var p=r(7896),n=(r(2784),r(30876));const e={},t=void 0,y={unversionedId:"auto-generated/previews/vue/grid-padding",id:"auto-generated/previews/vue/grid-padding",title:"grid-padding",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/grid-padding.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/grid-padding",permalink:"/version-dev/docs/auto-generated/previews/vue/grid-padding",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/grid-padding.md",tags:[],version:"current",frontMatter:{}},x={},i=[],I={toc:i};function l(o){let{components:a,...r}=o;return(0,n.kt)("wrapper",(0,p.Z)({},I,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport { IxCol, IxLayoutGrid, IxRow, IxTypography } from \'@siemens/ix-vue\';\n<\/script>\n\n<style scoped>\nix-layout-grid {\n  margin-bottom: 1rem;\n}\n\nix-col {\n  background-color: var(--theme-color-primary);\n  border: var(--theme-std-bdr-2);\n  text-align: center;\n  color: var(--theme-color-inv-contrast-text);\n}\n\n.example-parent {\n  padding-top: 1rem;\n  padding-bottom: 0.25rem;\n  background-color: var(--theme-color-info-40);\n}\n</style>\n\n<template>\n  <div class="example-parent">\n    <h4>Grid with margin</h4>\n    <IxLayoutGrid>\n      <IxRow>\n        <IxCol><IxTypography format="display">1</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">2</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">3</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">4</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">5</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">6</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">7</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">8</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">9</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">10</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">11</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">12</IxTypography></IxCol>\n      </IxRow>\n    </IxLayoutGrid>\n\n    <h4>Grid without margin</h4>\n    <IxLayoutGrid noMargin>\n      <IxRow>\n        <IxCol><IxTypography format="display">1</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">2</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">3</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">4</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">5</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">6</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">7</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">8</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">9</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">10</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">11</IxTypography></IxCol>\n        <IxCol><IxTypography format="display">12</IxTypography></IxCol>\n      </IxRow>\n    </IxLayoutGrid>\n  </div>\n</template>\n\n\n')))}l.isMDXComponent=!0}}]);
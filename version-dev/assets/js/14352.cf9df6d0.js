"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14352],{14352:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=t(7896),a=(t(2784),t(30876));const s={},o=void 0,i={unversionedId:"auto-generated/previews/react/slider-error",id:"auto-generated/previews/react/slider-error",title:"slider-error",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/slider-error.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/slider-error",permalink:"/version-dev/docs/auto-generated/previews/react/slider-error",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/slider-error.md",tags:[],version:"current",frontMatter:{}},d={},c=[],l={toc:c};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxSlider } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <>\n      <IxSlider trace trace-reference={50} marker={[0, 25, 50, 75, 100]} error>\n        <span slot="label-start">0</span>\n        <span slot="label-end">100</span>\n      </IxSlider>\n\n      <IxSlider\n        min={0}\n        max={50}\n        step={10}\n        trace\n        trace-reference={10}\n        marker={[0, 10, 20, 30, 40, 50]}\n        error={\'Error message\'}\n      >\n        <span slot="label-start">0</span>\n        <span slot="label-end">100</span>\n      </IxSlider>\n    </>\n  );\n};\n')))}p.isMDXComponent=!0}}]);
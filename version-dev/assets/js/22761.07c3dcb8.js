"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22761],{22761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7896),a=(n(2784),n(30876));const r={},i=void 0,s={unversionedId:"auto-generated/previews/react/loading",id:"auto-generated/previews/react/loading",title:"loading",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/loading.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/loading",permalink:"/version-dev/docs/auto-generated/previews/react/loading",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/loading.md",tags:[],version:"current",frontMatter:{}},d={},c=[],u={toc:c};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { showModalLoading } from '@siemens/ix';\nimport { IxButton } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  const startLoading = () => {\n    let count = 0;\n    const progress = showModalLoading('Loading 0/2');\n    const interval = setInterval(() => {\n      count++;\n      progress.update(`Loading ${count}/2`);\n\n      if (count === 2) {\n        progress.finish('Done');\n        clearInterval(interval);\n      }\n    }, 1000);\n  };\n  return <IxButton onClick={() => startLoading()}>Show loading</IxButton>;\n};\n")))}l.isMDXComponent=!0}}]);
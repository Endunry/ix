"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53130],{53130:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var o=n(7896),s=(n(2784),n(30876));const i={},a=void 0,r={unversionedId:"auto-generated/previews/react/toast-position",id:"auto-generated/previews/react/toast-position",title:"toast-position",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/toast-position.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/toast-position",permalink:"/docs/auto-generated/previews/react/toast-position",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/toast-position.md",tags:[],version:"current",frontMatter:{}},c={},u=[],p={toc:u};function d(t){let{components:e,...n}=t;return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { setToastPosition, ToastPosition } from '@siemens/ix';\nimport { IxButton, showToast } from '@siemens/ix-react';\nimport React, { useEffect } from 'react';\n\nfunction useToastPosition(position: ToastPosition) {\n  useEffect(() => {\n    setToastPosition(position);\n  }, []);\n}\n\nexport default () => {\n  useToastPosition('top-right');\n\n  return (\n    <>\n      <IxButton\n        onClick={() => {\n          showToast({\n            message: 'My toast message!',\n          });\n        }}\n      >\n        Trigger toast\n      </IxButton>\n    </>\n  );\n};\n\n")))}d.isMDXComponent=!0}}]);
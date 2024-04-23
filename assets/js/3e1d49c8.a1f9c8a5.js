"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22416],{24703:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=r(97458),o=r(16436);const s={},a=void 0,i={id:"auto-generated/previews/react/slider-error",title:"slider-error",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/slider-error.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/slider-error",permalink:"/docs/auto-generated/previews/react/slider-error",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/slider-error.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function l(e){const n={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'/*\n * SPDX-FileCopyrightText: 2024 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxSlider } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <>\n      <IxSlider trace trace-reference={50} marker={[0, 25, 50, 75, 100]} error>\n        <span slot="label-start">0</span>\n        <span slot="label-end">100</span>\n      </IxSlider>\n\n      <IxSlider\n        min={0}\n        max={50}\n        step={10}\n        trace\n        trace-reference={10}\n        marker={[0, 10, 20, 30, 40, 50]}\n        error={\'Error message\'}\n      >\n        <span slot="label-start">0</span>\n        <span slot="label-end">100</span>\n      </IxSlider>\n    </>\n  );\n};\n\n'})})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},16436:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var t=r(52983);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
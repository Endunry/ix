"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69772],{93247:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var o=t(97458),i=t(16436);const r={},s=void 0,c={id:"auto-generated/previews/web-component/input-search",title:"input-search",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/input-search.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/input-search",permalink:"/docs/auto-generated/previews/web-component/input-search",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/input-search.md",tags:[],version:"current",frontMatter:{}},a={},u=[];function p(n){const e={code:"code",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-html\x3c!--",children:'SPDX-FileCopyrightText: 2024 Siemens AG\n\nSPDX-License-Identifier: MIT\n--\x3e\n\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>Input Search example</title>\n  </head>\n  <body class="theme-brand-dark">\n    <form class="needs-validation m-2">\n      <ix-input-group>\n        <span slot="input-start">\n          <ix-icon name="search" size="16"></ix-icon>\n        </span>\n        <input onInput="toggleClear()" id="input-string" type="string" />\n        <span slot="input-end">\n          <ix-icon-button\n            id="clear-button"\n            icon="clear"\n            ghost="{true}"\n            size="16"\n            onClick="{clearInput()}"\n          ></ix-icon-button>\n        </span>\n      </ix-input-group>\n    </form>\n    <script>\n      toggleClear();\n      function clearInput() {\n        document.getElementById(\'input-string\').value = \'\';\n        toggleClear();\n      }\n\n      function toggleClear() {\n        const hasContent = document.getElementById(\'input-string\').value !== \'\';\n        document.getElementById(\'clear-button\').style.display = hasContent\n          ? \'block\'\n          : \'none\';\n      }\n    <\/script>\n    <script type="module" src="./init.js"><\/script>\n  </body>\n</html>\n\n'})})}function l(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},16436:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>s});var o=t(52983);const i={},r=o.createContext(i);function s(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);
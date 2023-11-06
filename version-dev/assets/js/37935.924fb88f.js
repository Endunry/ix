"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37935],{37935:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var t=o(7896),r=(o(2784),o(30876));const i={},d=void 0,a={unversionedId:"auto-generated/previews/angular/dropdown-submenu.ts",id:"auto-generated/previews/angular/dropdown-submenu.ts",title:"dropdown-submenu.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/dropdown-submenu.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/dropdown-submenu.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/dropdown-submenu.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/dropdown-submenu.ts.md",tags:[],version:"current",frontMatter:{}},s={},u=[],p={toc:u};function m(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-button #trigger>Open</ix-button>\n    <ix-dropdown [ixDropdownTrigger]="trigger">\n      <ix-dropdown-item #submenu label="Submenu"></ix-dropdown-item>\n      <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>\n      <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>\n      <ix-dropdown-item icon="bulb" label="Item 3"></ix-dropdown-item>\n    </ix-dropdown>\n    <ix-dropdown [ixDropdownTrigger]="submenu" placement="right-start">\n      <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>\n      <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>\n    </ix-dropdown>\n  `,\n})\nexport default class DropdownSubmenu {}\n\n')))}m.isMDXComponent=!0}}]);
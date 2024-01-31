"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66243],{66243:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=t(7896),s=(t(2784),t(30876));const o={},a=void 0,r={unversionedId:"auto-generated/previews/angular/tile.ts",id:"auto-generated/previews/angular/tile.ts",title:"tile.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/tile.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/tile.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/tile.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/tile.ts.md",tags:[],version:"current",frontMatter:{}},l={},d=[],c={toc:d};function u(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-tile size="small">92.8 \xb0C</ix-tile>\n\n    <ix-tile size="medium" class="mr-1">\n      <div slot="header">Tile header</div>\n      <div class="text-l">92.8 \xb0C</div>\n    </ix-tile>\n\n    <ix-tile size="big">\n      <div\n        class="d-flex flex-grow-1 align-items-center justify-content-between"\n        slot="header"\n      >\n        Tile header\n        <ix-icon-button ghost icon="context-menu"></ix-icon-button>\n      </div>\n      <div slot="subheader">Temperature</div>\n      <div\n        style="\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        align-items: flex-end;\n        justify-content: space-between;\n      "\n      >\n        <span>92.8 \xb0C</span>\n      </div>\n      <div\n        class="d-flex h-100 align-items-center justify-content-end"\n        slot="footer"\n      >\n        <ix-button ghost slot="footer">\n          <ix-icon name="chevron-right-small"></ix-icon>Details\n        </ix-button>\n      </div>\n    </ix-tile>\n  `,\n})\nexport default class Tile {}\n\n')))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76405,57128],{30876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,d=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(d,c(c({ref:t},m),{},{components:n})):r.createElement(d,c({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7896),o=(n(2784),n(30876));const a={},c=void 0,i={unversionedId:"auto-generated/previews/angular/theme-switcher.ts",id:"auto-generated/previews/angular/theme-switcher.ts",title:"theme-switcher.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/theme-switcher.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/theme-switcher.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/theme-switcher.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/theme-switcher.ts.md",tags:[],version:"current",frontMatter:{}},s={},l=[],m={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\nimport { themeSwitcher } from '@siemens/ix';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './theme-switcher.html',\n  styles: [\n    `\n      ix-col {\n        align-items: center;\n        height: 2.5rem;\n      }\n    `,\n  ],\n})\nexport default class ThemeSwitcherExample {\n  themes = ['theme-classic-light', 'theme-classic-dark'];\n  selectedTheme = this.themes[1];\n\n  constructor() {}\n\n  onItemSelectionChange(event: Event) {\n    const customEvent = event as CustomEvent<string | string[]>;\n    const newTheme = customEvent.detail[0];\n    themeSwitcher.setTheme(newTheme);\n    this.selectedTheme = newTheme;\n  }\n\n  toggleMode() {\n    themeSwitcher.toggleMode();\n  }\n\n  onSystemMode({ target }: Event) {\n    if ((target as HTMLInputElement).checked) {\n      themeSwitcher.setVariant();\n      return;\n    }\n\n    themeSwitcher.setTheme(this.selectedTheme);\n  }\n}\n")))}u.isMDXComponent=!0}}]);
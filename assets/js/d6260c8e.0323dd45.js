"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36699,38542],{30876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(n),m=o,b=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(b,i(i({ref:t},l),{},{components:n})):r.createElement(b,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},38542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,p={unversionedId:"auto-generated/previews/angular/dropdown-button-icon.ts",id:"auto-generated/previews/angular/dropdown-button-icon.ts",title:"dropdown-button-icon.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/dropdown-button-icon.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/dropdown-button-icon.ts",permalink:"/docs/auto-generated/previews/angular/dropdown-button-icon.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/dropdown-button-icon.ts.md",tags:[],version:"current",frontMatter:{}},c={},d=[],l={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-dropdown-button-icon\',\n  template: `\n    <ix-dropdown-button label="" variant="primary" icon="checkboxes">\n      <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n    </ix-dropdown-button>\n    <ix-dropdown-button label="" variant="primary" outline icon="checkboxes">\n      <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n    </ix-dropdown-button>\n    <ix-dropdown-button label="" variant="primary" ghost icon="checkboxes">\n      <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n    </ix-dropdown-button>\n    <ix-dropdown-button label="" variant="primary" disabled icon="checkboxes">\n    </ix-dropdown-button>\n  `,\n})\nexport class Dropdown {}\n')))}u.isMDXComponent=!0}}]);
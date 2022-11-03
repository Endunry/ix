"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4841],{30876:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,f=m["".concat(d,".").concat(u)]||m[u]||s[u]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22108:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(7896),a=(t(2784),t(30876));const o={},i=void 0,c={unversionedId:"auto-generated/previews/web-component/tree-custom",id:"auto-generated/previews/web-component/tree-custom",title:"tree-custom",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/tree-custom.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/tree-custom",permalink:"/docs/auto-generated/previews/web-component/tree-custom",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/tree-custom.md",tags:[],version:"current",frontMatter:{}},d={},l=[],p={toc:l};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\n<div style=\"height: 8rem; width: 100%\">\n  <ix-button id=\"expand\" ghost style=\"margin-bottom: 2rem\"\n    >Expand Tree</ix-button\n  >\n  <ix-tree root=\"root\" id=\"tree\"></ix-tree>\n</div>\n\n<script type=\"text/javascript\">\n  (async function () {\n    await window.customElements.whenDefined('ix-tree');\n    const tree = document.getElementById('tree');\n\n    const expandButton = document.getElementById('expand');\n    expandButton.addEventListener('click', () => {\n      tree.context = {\n        sample: {\n          isExpanded: true,\n          isSelected: false,\n        },\n        'sample-child-2': {\n          isSelected: true,\n          isExpanded: false,\n        },\n      };\n    });\n\n    tree.renderItem = (index, item, dataList, context, update) => {\n      const el = document.createElement('ix-tree-item');\n      el.hasChildren = item.hasChildren;\n      el.context = context[item.id];\n\n      const div = document.createElement('div');\n      div.style.display = 'flex';\n\n      const name = document.createElement('span');\n      const icon = document.createElement('ix-icon');\n      icon.name = item.data.icon;\n      icon.style.marginRight = '0.5rem';\n\n      div.appendChild(icon);\n      div.appendChild(name);\n\n      name.innerText = item.data.name;\n\n      el.appendChild(div);\n\n      update((updateTreeItem) => {\n        name.innerText = updateTreeItem.data.name;\n      });\n\n      return el;\n    };\n\n    tree.model = {\n      root: {\n        id: 'root',\n        data: null,\n        hasChildren: true,\n        children: ['sample'],\n      },\n      sample: {\n        id: 'sample',\n        data: {\n          name: 'Sample',\n          icon: 'star',\n        },\n        hasChildren: true,\n        children: ['sample-child-1', 'sample-child-2'],\n      },\n      'sample-child-1': {\n        id: 'sample-child-1',\n        data: {\n          name: 'Sample Child 1',\n          icon: 'cut',\n        },\n        hasChildren: false,\n        children: [],\n      },\n      'sample-child-2': {\n        id: 'sample-child-2',\n        data: {\n          name: 'Sample Child 2',\n          icon: 'print',\n        },\n        hasChildren: false,\n        children: [],\n      },\n    };\n  })();\n<\/script>\n")))}s.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71871,67003,71822,81501,66570,504,2491],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=i,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14091:(e,t,n)=>{n.d(t,{Z:()=>_});var r=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],i={clickToLoad:function(e){return o("ctl",e)},devToolsHeight:function(e){return s("devtoolsheight",e)},forceEmbedLayout:function(e){return o("embed",e)},hideDevTools:function(e){return o("hidedevtools",e)},hideExplorer:function(e){return o("hideExplorer",e)},hideNavigation:function(e){return o("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return s("terminalHeight",e)},theme:function(e){return l("theme",["light","dark"],e)},view:function(e){return l("view",["preview","editor"],e)}};function a(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&i.hasOwnProperty(t)?i[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function o(e,t){return!0===t?e+"=1":""}function s(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function l(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function c(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function u(e,t){return""+m(t)+e+a(t)}function d(e,t){var n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),""+m(n)+e+a(n)}function m(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function p(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t){t&&"object"==typeof t&&(Object.hasOwnProperty.call(t,"height")&&(e.height=""+t.height),Object.hasOwnProperty.call(t,"width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}(t,n),e.parentNode.replaceChild(t,e)}function f(e){if("string"==typeof e){var t=document.getElementById(e);if(!t)throw new Error("Could not find element with id '"+e+"'");return t}if(e instanceof HTMLElement)return e;throw new Error("Invalid element: "+e)}function v(e){return e&&!1===e.newWindow?"_self":"_blank"}function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var h=function(){function e(e){this.port=void 0,this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}var t=e.prototype;return t.request=function(e){var t=this,n=e.type,r=e.payload,i=c();return new Promise((function(e,a){t.pending[i]={resolve:e,reject:a},t.port.postMessage({type:n,payload:g({},r,{__reqid:i})})}))},t.messageListener=function(e){var t;if("string"==typeof(null==(t=e.data.payload)?void 0:t.__reqid)){var n=e.data,r=n.type,i=n.payload,a=i.__reqid,o=i.__error;this.pending[a]&&(i.__success?this.pending[a].resolve(function(e){var t=g({},e);return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}(i)):this.pending[a].reject(o?r+": "+o:r),delete this.pending[a])}},e}(),w=function(){function e(e,t){var n=this;this._rdc=void 0,this.editor={openFile:function(e){return n._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})},setCurrentFile:function(e){return n._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}})},setTheme:function(e){return n._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}})},setView:function(e){return n._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}})},showSidebar:function(e){return void 0===e&&(e=!0),n._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})}},this.preview={origin:"",getUrl:function(){return n._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((function(e){var t;return null!=(t=null==e?void 0:e.url)?t:null}))},setUrl:function(e){if(void 0===e&&(e="/"),"string"!=typeof e||!e.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+e+"'");return n._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new h(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}var t=e.prototype;return t.applyFsDiff=function(e){var t=function(e){return null!==e&&"object"==typeof e};if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},t.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},t.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},e}(),b=[],y=function(e){var t=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=c(),this.element=e,this.pending=new Promise((function(e,n){var r=function(n){var r=n.data;"SDK_INIT_SUCCESS"===(null==r?void 0:r.action)&&r.id===t.id&&(t.vm=new w(n.ports[0],r.payload),e(t.vm),a())},i=function(){var e;null==(e=t.element.contentWindow)||e.postMessage({action:"SDK_INIT",id:t.id},"*")};function a(){window.clearInterval(s),window.removeEventListener("message",r)}window.addEventListener("message",r),i();var o=0,s=window.setInterval((function(){if(t.vm)a();else{if(o>=20)return a(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void b.forEach((function(e,n){e.id===t.id&&b.splice(n,1)}));o++,i()}}),500)})),b.push(this)};function x(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function E(e){if(!r.includes(e.template)){var t=r.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,i=document.createElement("form");return i.method="POST",i.setAttribute("style","display:none!important;"),i.appendChild(x("project[title]",e.title)),i.appendChild(x("project[description]",e.description)),i.appendChild(x("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):i.appendChild(x("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&i.appendChild(x("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&i.appendChild(x("project[files]["+t+"]",e.files[t]))})),i}function T(e){var t,n,r,i;return null!=e&&e.contentWindow?(null!=(i=(n=e)instanceof Element?"element":"id",t=null!=(r=b.find((function(e){return e[i]===n})))?r:null)?t:new y(e)).pending:Promise.reject("Provided element is not an iframe.")}var _={connect:T,embedGithubProject:function(e,t,n){var r=f(e),i=document.createElement("iframe");return i.src=d("/github/"+t,n),p(r,i,n),T(i)},embedProject:function(e,t,n){var r,i=f(e),a=function(e,t){var n=E(e);return n.action=d("/run",t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('"+n.id+"').submit();<\/script></body></html>"}(t,n),o=document.createElement("iframe");return p(i,o,n),null==(r=o.contentDocument)||r.write(a),T(o)},embedProjectId:function(e,t,n){var r=f(e),i=document.createElement("iframe");return i.src=d("/edit/"+t,n),p(r,i,n),T(i)},openGithubProject:function(e,t){var n=u("/github/"+e,t),r=v(t);window.open(n,r)},openProject:function(e,t){!function(e,t){var n=E(e);n.action=u("/run",t),n.target=v(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){var n=u("/edit/"+e,t),r=v(t);window.open(n,r)}}},2176:(e,t,n)=>{n.d(t,{Z:()=>o});var r,i=n(2784);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const o=e=>{let{title:t,titleId:n,...o}=e;return i.createElement("svg",a({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},o),t?i.createElement("title",{id:n},t):null,r||(r=i.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))}},63483:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2784),i=n(731);function a(e){var t,n,a,o,s,l,c,u;return r.createElement("div",{className:"row with--border"},r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(n=e.attribute)||null==(a=n.tags)?void 0:a.filter((e=>"since"===e.type)).map((t=>{var n;return r.createElement(i.h,{message:t.message,key:`Tag_Since_${null==e||null==(n=e.attribute)?void 0:n.name}`})})),null==e||null==(o=e.attribute)||null==(s=o.tags)?void 0:s.filter((e=>"deprecated"===e.type)).map((t=>{var n;return r.createElement(i.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(n=e.attribute)?void 0:n.name}`})})))),r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"ApiTable__Content"},r.createElement("span",{className:"Attribute__Description"},null==e||null==(l=e.attribute)?void 0:l.description),r.createElement("div",{className:"container-fluid"},null==e||null==(c=e.attribute)||null==(u=c.definition)?void 0:u.map((e=>r.createElement("div",{className:"row Attribute",key:e.name},r.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),r.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const o=function(e){var t;return r.createElement("div",{className:"container-fluid ApiTable"},r.createElement("div",{className:"row with--border"},r.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),r.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>r.createElement(a,{attribute:e,key:e.name}))))}},731:(e,t,n)=>{n.d(t,{Q:()=>i,h:()=>a});var r=n(2784);function i(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),r.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function a(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag"},"Since ",e.message))}},77942:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(37949),i=n(90077),a=n(37614),o=n(2784),s=n(90943);function l(e){const t=(0,a.Z)(),[n]=(0,o.useState)(!1),l=(0,i.Z)("/"),[c,u]=(0,o.useState)(""),[d,m]=(0,o.useState)((0,s.V)(t)),{preferredVersion:p}=(0,r.J)();return(0,o.useEffect)((()=>{const t=null==p?void 0:p.name;u(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,null==p?void 0:p.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,s.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),o.createElement(o.Fragment,null,n?o.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==p?void 0:p.name):o.createElement("iframe",{src:`${c}?theme=${e.theme?e.theme:d}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},6404:(e,t,n)=>{n.d(t,{Z:()=>x});var r,i=n(7267),a=n(90077),o=n(53849),s=n(2176),l=n(2784);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}const u=e=>{let{title:t,titleId:n,...i}=e;return l.createElement("svg",c({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},i),t?l.createElement("title",{id:n},t):null,r||(r=l.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var d=n(77942);let m;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview"}(m||(m={}));var p=n(14091);const f="https://github.com/siemens/ix/tree/main/packages";function v(e){let{name:t,framework:n}=e;const r=function(e){let{name:t,framework:n}=e;return n===m.ANGULAR?`${f}/angular-test-app/src/preview-examples/${t}.ts`:n===m.JAVASCRIPT?`${f}/html-test-app/src/preview-examples/${t}.html`:n===m.REACT?`${f}/react-test-app/src/preview-examples/${t}.tsx`:n===m.VUE?`${f}/vue-test-app/src/preview-examples/${t}.vue`:void 0}({framework:n,name:t});window.open(r,"_blank")}async function g(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function h(e){let{name:t,framework:n,files:r,baseUrl:i}=e;const a=await async function(e,t,n){const r=[];return(await g(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{r.push({filename:n[t],sourceCode:e})})),r}(i,n,r);return n===m.REACT?async function(e,t){const[n,r,i,a,o]=await g([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[s]=t,l={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;l[`src/${t}`]=n})),p.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...l,"public/index.html":r,"src/index.tsx":i,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${s.filename.substring(0,s.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":a,"tsconfig.json":o,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${s.filename}`})}(i,a):n===m.ANGULAR?async function(e,t,n){const[r,i,a,o,s,l,c,u,d,m,f]=await g([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),v=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&v.push(t)}));const h=`\n    ${v.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${v.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,w={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;w[`src/app/${t}`]=n})),p.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":h,"src/app/app.component.css":r,"src/app/app.component.html":i,"src/app/app.component.ts":a,"src/app/app.module.ts":o,"src/index.html":s,"src/main.ts":l,"src/styles.css":c,"angular.json":u,"package.json":d,"tsconfig.app.json":m,"tsconfig.json":f,...w}},{openFile:`src/app/${t}.ts`})}(i,t,a):n===m.JAVASCRIPT?async function(e,t){const[n,r,i,a]=await g([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[o,...s]=t,l={};s.forEach((e=>{l[`src/${e.filename}`]=e.sourceCode})),p.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...l,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",o.sourceCode),"src/main.js":r,"package.json":i,"vite.config.ts":a}},{openFile:["src/index.html"]})}(i,a):n===m.VUE?async function(e,t){const[n,r,i,a,o,s,l]=await g([`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),[c]=t,u={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;u[`src/${t}`]=n})),p.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...u,"index.html":r,"src/main.ts":i,"src/App.vue":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${c.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":l,"package.json":a,"tsconfig.json":o,"vite.config.ts":s,".stackblitzrc":'{\n          "startCommand": "yarn run dev"\n        }'}},{openFile:`src/${c.filename}`})}(i,a):void 0}function w(e){let{name:t,framework:n}=e;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>v({name:t,framework:n})},l.createElement(s.Z,null))}function b(e){let{name:t,files:n,framework:r,baseUrl:i}=e;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>h({name:t,files:n,framework:r,baseUrl:i})},l.createElement(u,null))}function y(e){const[t,n]=(0,l.useState)(e.files[0].filename);return l.createElement(l.Fragment,null,l.createElement(o.Vp,null,e.files.map((e=>{e.node;return l.createElement(o.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const r=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return r?l.createElement(r,null):null}())}function x(e){let{name:t,height:n,noMargin:r,theme:s,frameworks:c,availableFrameworks:u}=e;const{pathname:p}=(0,i.TH)(),f=(0,a.Z)("/"),[v,g]=(0,l.useState)(!0),[h,x]=(0,l.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||m.PREVIEW}(u)),[E,T]=(0,l.useState)();(0,l.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(p+t)),[t,p]);(0,l.useEffect)((()=>{const e={};c&&(Object.keys(c).forEach((n=>{if("function"==typeof c[n]){let r=t;n===m.REACT&&(r=r.concat(".tsx")),n===m.JAVASCRIPT&&(r=r.concat(".html")),n===m.ANGULAR&&(r=r.concat(".ts")),n===m.VUE&&(r=r.concat(".vue")),e[n]=[{filename:r,node:c[n]({})}]}"object"==typeof c[n]&&(e[n]||(e[n]=[]),Object.keys(c[n]).forEach((t=>{e[n].push({filename:t,node:c[n][t]})})))})),T(e))}),[c,T]);const _=e=>{x(e)};function j(e){return u?0===u.length||u.includes(e):Object.keys(c).some((t=>t===e))}return l.createElement("div",{className:"Playground"},v?l.createElement(l.Fragment,null,l.createElement("div",{className:"Playground__Toolbar Location__Bottom"},l.createElement(o.Vp,null,l.createElement(o.t3,{selected:h===m.PREVIEW,onClick:()=>_(m.PREVIEW)},"Preview"),j(m.ANGULAR)?l.createElement(o.t3,{selected:h===m.ANGULAR,onClick:()=>_(m.ANGULAR)},"Angular"):null,j(m.REACT)?l.createElement(o.t3,{selected:h===m.REACT,onClick:()=>_(m.REACT)},"React"):null,j(m.JAVASCRIPT)?l.createElement(o.t3,{selected:h===m.JAVASCRIPT,onClick:()=>_(m.JAVASCRIPT)},"JavaScript"):null,j(m.VUE)?l.createElement(o.t3,{selected:h===m.VUE,onClick:()=>_(m.VUE)},"Vue"):null),l.createElement("div",{className:"Playground__Toolbar__Actions"},h!==m.PREVIEW?l.createElement(l.Fragment,null,l.createElement(w,{name:t,framework:h}),l.createElement(b,{name:t,framework:h,baseUrl:f,files:E?h===m.PREVIEW?[]:E[h].map((e=>e.filename)):[]})):null)),function(){if(h===m.PREVIEW)return l.createElement(d.Z,{name:t,height:n,noMargin:r,theme:s});if(!E||!E[h])return null;if(1===E[h].length){const[{node:e}]=E[h];return e}return l.createElement(y,{files:E[h]})}()):null)}},29603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7896),i=(n(2784),n(30876));const a={},o=void 0,s={unversionedId:"auto-generated/ix-tile/events",id:"auto-generated/ix-tile/events",title:"events",description:"No events available for this component.",source:"@site/docs/auto-generated/ix-tile/events.md",sourceDirName:"auto-generated/ix-tile",slug:"/auto-generated/ix-tile/events",permalink:"/docs/auto-generated/ix-tile/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-tile/events.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No events available for this component."))}d.isMDXComponent=!0},95960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7896),i=(n(2784),n(30876)),a=n(63483);const o={},s=void 0,l={unversionedId:"auto-generated/ix-tile/props",id:"auto-generated/ix-tile/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-tile/props.md",sourceDirName:"auto-generated/ix-tile",slug:"/auto-generated/ix-tile/props",permalink:"/docs/auto-generated/ix-tile/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-tile/props.md",tags:[],version:"current",frontMatter:{}},c={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{attributes:[{name:"size",description:"Size of the tile - one of 'small', 'medium' or 'large'",definition:[{name:"Attribute",value:"size"},{name:"Type",value:'"big" \uff5c "medium" \uff5c "small"'},{name:"Default",value:"'medium'"}],tags:[]}],mdxType:"ApiTable"}))}m.isMDXComponent=!0},66243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7896),i=(n(2784),n(30876));const a={},o=void 0,s={unversionedId:"auto-generated/previews/angular/tile.ts",id:"auto-generated/previews/angular/tile.ts",title:"tile.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/tile.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/tile.ts",permalink:"/docs/auto-generated/previews/angular/tile.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/tile.ts.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-tile size="small">92.8 \xb0C</ix-tile>\n\n    <ix-tile size="medium" class="mr-1">\n      <div slot="header">Tile header</div>\n      <div class="text-l">92.8 \xb0C</div>\n    </ix-tile>\n\n    <ix-tile size="big">\n      <div\n        class="d-flex flex-grow-1 align-items-center justify-content-between"\n        slot="header"\n      >\n        Tile header\n        <ix-icon-button ghost icon="context-menu"></ix-icon-button>\n      </div>\n      <div slot="subheader">Temperature</div>\n      <div\n        style="\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        align-items: flex-end;\n        justify-content: space-between;\n      "\n      >\n        <span>92.8 \xb0C</span>\n      </div>\n      <div\n        class="d-flex h-100 align-items-center justify-content-end"\n        slot="footer"\n      >\n        <ix-button ghost slot="footer">\n          <ix-icon name="chevron-right-small"></ix-icon>Details\n        </ix-button>\n      </div>\n    </ix-tile>\n  `,\n})\nexport default class Tile {}\n')))}d.isMDXComponent=!0},88185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7896),i=(n(2784),n(30876));const a={},o=void 0,s={unversionedId:"auto-generated/previews/react/tile",id:"auto-generated/previews/react/tile",title:"tile",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/tile.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/tile",permalink:"/docs/auto-generated/previews/react/tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/tile.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxButton, IxIcon, IxIconButton, IxTile } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <div className="example">\n      <IxTile size="small">92.8 \xb0C</IxTile>\n\n      <IxTile size="medium" className="mr-1">\n        <div slot="header">Tile header</div>\n        <div className="text-l">92.8 \xb0C</div>\n      </IxTile>\n\n      <IxTile size="big">\n        <div\n          className="d-flex flex-grow-1 align-items-center justify-content-between"\n          slot="header"\n        >\n          Tile header\n          <IxIconButton ghost icon="context-menu"></IxIconButton>\n        </div>\n        <div slot="subheader">Temperature</div>\n        <div\n          style={{\n            display: \'flex\',\n            flexDirection: \'column\',\n            height: \'100%\',\n            alignItems: \'flex-end\',\n            justifyContent: \'space-between\',\n          }}\n        >\n          <span>92.8 \xb0C</span>\n        </div>\n        <div\n          className="d-flex h-100 align-items-center justify-content-end"\n          slot="footer"\n        >\n          <IxButton ghost slot="footer">\n            <IxIcon name="chevron-right-small"></IxIcon>Details\n          </IxButton>\n        </div>\n      </IxTile>\n    </div>\n  );\n};\n')))}d.isMDXComponent=!0},29572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7896),i=(n(2784),n(30876));const a={},o=void 0,s={unversionedId:"auto-generated/previews/vue/tile",id:"auto-generated/previews/vue/tile",title:"tile",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/tile.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/tile",permalink:"/docs/auto-generated/previews/vue/tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/tile.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxButton, IxIcon, IxIconButton, IxTile } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <div className="example">\n    <IxTile size="small">92.8 \xb0C</IxTile>\n\n    <IxTile size="medium" className="mr-1">\n      <div slot="header">Tile header</div>\n      <div className="text-l">92.8 \xb0C</div>\n    </IxTile>\n\n    <IxTile size="big">\n      <div\n        className="d-flex flex-grow-1 align-items-center justify-content-between"\n        slot="header"\n      >\n        Tile header\n        <IxIconButton ghost icon="context-menu"></IxIconButton>\n      </div>\n      <div slot="subheader">Temperature</div>\n      <div\n        style="\n          display: flex;\n          flex-direction: column;\n          height: 100%;\n          align-items: flex-end;\n          justify-content: space-between;\n        "\n      >\n        <span>92.8 \xb0C</span>\n      </div>\n      <div\n        className="d-flex h-100 align-items-center justify-content-end"\n        slot="footer"\n      >\n        <IxButton ghost slot="footer">\n          <IxIcon name="chevron-right-small"></IxIcon>Details\n        </IxButton>\n      </div>\n    </IxTile>\n  </div>\n</template>\n')))}d.isMDXComponent=!0},90191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7896),i=(n(2784),n(30876));const a={},o=void 0,s={unversionedId:"auto-generated/previews/web-component/tile",id:"auto-generated/previews/web-component/tile",title:"tile",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/tile.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/tile",permalink:"/docs/auto-generated/previews/web-component/tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/tile.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ix-tile size="small">92.8 \xb0C</ix-tile>\n\n<ix-tile size="medium" class="mr-1">\n  <div slot="header">Tile header</div>\n  <div class="text-l">92.8 \xb0C</div>\n</ix-tile>\n\n<ix-tile size="big">\n  <div\n    class="d-flex flex-grow-1 align-items-center justify-content-between"\n    slot="header"\n  >\n    Tile header\n    <ix-icon-button ghost icon="context-menu"></ix-icon-button>\n  </div>\n  <div slot="subheader">Temperature</div>\n  <div\n    style="\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      align-items: flex-end;\n      justify-content: space-between;\n    "\n  >\n    <span>92.8 \xb0C</span>\n  </div>\n  <div\n    class="d-flex h-100 align-items-center justify-content-end"\n    slot="footer"\n  >\n    <ix-button ghost slot="footer">\n      <ix-icon name="chevron-right-small"></ix-icon>Details\n    </ix-button>\n  </div>\n</ix-tile>\n')))}d.isMDXComponent=!0},61065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>p,default:()=>w,frontMatter:()=>m,metadata:()=>f,toc:()=>g});var r=n(7896),i=(n(2784),n(30876)),a=n(6404),o=n(95960),s=n(29603),l=n(90191),c=n(88185),u=n(66243),d=n(29572);const m={},p="Tile",f={unversionedId:"controls/tile",id:"controls/tile",title:"Tile",description:"Usage",source:"@site/docs/controls/tile.md",sourceDirName:"controls",slug:"/controls/tile",permalink:"/docs/controls/tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/tile.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Text area",permalink:"/docs/controls/textarea"},next:{title:"Time picker",permalink:"/docs/controls/time-picker"}},v={},g=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],h={toc:g};function w(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tile"},"Tile"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(a.Z,{name:"tile",height:"22rem",frameworks:{react:c.default,angular:u.default,javascript:l.default,vue:d.default},mdxType:"Playground"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"props"},"Props"),(0,i.kt)(o.default,{mdxType:"Props"}),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)(s.default,{mdxType:"Events"}))}w.isMDXComponent=!0}}]);
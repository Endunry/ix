"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46669],{91410:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var i=n(97458),t=n(16436);const l={sidebar_position:0},c="Themes",o={id:"guidelines/theme",title:"Themes",description:"Siemens Industrial Experience supports theming for all of its components.",source:"@site/docs/guidelines/theme.md",sourceDirName:"guidelines",slug:"/guidelines/theme",permalink:"/docs/guidelines/theme",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/guidelines/theme.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"mySidebar",previous:{title:"Shadows",permalink:"/docs/theming/shadow"},next:{title:"Theme Switching",permalink:"/docs/guidelines/theme-switching"}},a={},r=[{value:"Using the old classic theme",id:"using-the-old-classic-theme",level:2},{value:"Siemens AG Corporate Brand Theme",id:"siemens-ag-corporate-brand-theme",level:2},{value:"How to set a theme",id:"how-to-set-a-theme",level:2},{value:"Applying only one theme to reduce build size",id:"applying-only-one-theme-to-reduce-build-size",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"themes",children:"Themes"}),"\n",(0,i.jsx)(s.p,{children:"Siemens Industrial Experience supports theming for all of its components."}),"\n",(0,i.jsx)(s.p,{children:"Everyone can use the two embedded themes that already ship with Siemens Industrial Experience:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Classic light (theme-classic-light)"}),"\n",(0,i.jsx)(s.li,{children:"Classic dark (theme-classic-dark)"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"You can also create your own themes in order to customize the design system to your own brand."}),"\n",(0,i.jsx)(s.p,{children:"Siemens AG applications should utilize the exclusive Siemens AG Corporate Brand Theme."}),"\n",(0,i.jsx)(s.h2,{id:"using-the-old-classic-theme",children:"Using the old classic theme"}),"\n",(0,i.jsx)(s.p,{children:"The original classic theme was deprecated in favor of an updated version that is more easily maintainable for us.\nThe legacy theme is still available but no longer part of the main CSS file. In order to still apply it to your app you have to load it manually.\nThis can be done in various ways."}),"\n",(0,i.jsx)(s.p,{children:"The simplest way is to use the bundler/loader and just import the legacy styles inside of your global stylesheet."}),"\n",(0,i.jsx)(s.p,{children:"e.g. styles.css:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"@import '@siemens/ix/dist-css/theme/legacy-classic-dark.css';\n@import '@siemens/ix/dist-css/theme/legacy-classic-light.css';\n"})}),"\n",(0,i.jsx)(s.p,{children:"If this step is done you can set the theme name class on the body tag:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'<html>\n  \x3c!-- Framework related imports --\x3e\n  \x3c!--  --\x3e\n  <body class="theme-legacy-classic-dark"></body>\n</html>\n'})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"deprecated"})," Legacy Classic light (theme-legacy-classic-light)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"deprecated"})," Legacy Classic dark (theme-legacy-classic-dark)"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"siemens-ag-corporate-brand-theme",children:"Siemens AG Corporate Brand Theme"}),"\n",(0,i.jsxs)("div",{className:"siemens-brand-section",children:[(0,i.jsx)(s.p,{children:"The Siemens AG Corporate Brand Theme is exclusively available to official Siemens AG products where it should always be used as the default theme to reflect the latest Siemens AG Corporate Brand guidelines."}),(0,i.jsxs)(s.p,{children:["Siemens AG employees can access the Corporate Brand Theme at ",(0,i.jsx)(s.a,{href:"https://code.siemens.com/siemens-ix/ix-brand-theme",children:(0,i.jsx)(s.strong,{children:"https://code.siemens.com/siemens-ix/ix-brand-theme"})}),"."]})]}),"\n",(0,i.jsx)(s.h2,{id:"how-to-set-a-theme",children:"How to set a theme"}),"\n",(0,i.jsxs)(s.p,{children:["The default theme is ",(0,i.jsx)(s.code,{children:"theme-classic-dark"}),". To set a different theme change the ",(0,i.jsx)(s.code,{children:"class"})," attribute of the ",(0,i.jsx)(s.code,{children:"<body>"})," tag to contain e.g. ",(0,i.jsx)(s.code,{children:"theme-classic-light"})," instead of ",(0,i.jsx)(s.code,{children:"theme-classic-dark"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'<html>\n  \x3c!-- Framework related imports --\x3e\n  \x3c!--  --\x3e\n  <body class="theme-classic-light"></body>\n</html>\n'})}),"\n",(0,i.jsx)(s.h2,{id:"applying-only-one-theme-to-reduce-build-size",children:"Applying only one theme to reduce build size"}),"\n",(0,i.jsxs)(s.p,{children:["Importing ",(0,i.jsx)(s.code,{children:"siemens-ix-core.css"})," will load core related functionalities only, without preloading any theme or bootstrap."]}),"\n",(0,i.jsx)(s.p,{children:"You can load a specific theme by importing the corresponding CSS file."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"Import CSS"})})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",children:"// Load only the core parts\nimport '@siemens/ix/dist/siemens-ix/siemens-ix-core.css';\n\n// Load theme\nimport '@siemens/ix/dist/siemens-ix/theme/classic-light.css';\nimport '@siemens/ix/dist/siemens-ix/theme/classic-dark.css';\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"Set theme"})})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'<body class="theme-classic-dark">\n  ...\n</body>\n'})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},16436:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>c});var i=n(52983);const t={},l=i.createContext(t);function c(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68626],{68626:(e,t,o)=>{o.r(t),o.d(t,{ix_tile:()=>h});var r=o(8823);const h=class{constructor(e){(0,r.r)(this,e),this.size="medium",this.hasHeaderSlot=!1,this.hasFooterSlot=!1}handleHeaderSlotChange(){this.hasHeaderSlot=!!this.hostElement.querySelector('[slot="header"]')}handleFooterSlotChange(){this.hasFooterSlot=!!this.hostElement.querySelector('[slot="footer"]')}render(){return(0,r.h)(r.H,{class:{"tile-small":"small"===this.size,"tile-medium":"medium"===this.size,"tile-big":"big"===this.size}},(0,r.h)("div",{class:{"tile-header":!0,"has-content":this.hasHeaderSlot}},(0,r.h)("slot",{name:"header",onSlotchange:()=>this.handleHeaderSlotChange()})),(0,r.h)("div",{class:"tile-subheader"},(0,r.h)("slot",{name:"subheader"})),(0,r.h)("div",{class:"tile-content"},(0,r.h)("slot",null)),(0,r.h)("div",{class:{"tile-footer":!0,"has-content":this.hasFooterSlot}},(0,r.h)("slot",{name:"footer",onSlotchange:()=>this.handleFooterSlotChange()})))}get hostElement(){return(0,r.g)(this)}};h.style=":host{min-width:11.937rem;max-width:11.937rem;width:11.937rem;display:flex;flex-direction:column;border:1px solid var(--theme-tile--border);border-radius:var(--theme-tile--border-radius);background-color:var(--theme-color-2);color:var(--theme-color-std-text);box-shadow:var(--theme-tile--box-shadow)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tile-header{display:flex;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}:host .tile-header,:host .tile-subheader,:host .tile-content,:host .tile-footer{padding:0 1rem}:host .tile-header,:host .tile-content{flex-grow:1}:host .tile-header.has-content{display:flex;height:2.5rem;max-height:2.5rem;-webkit-padding-end:0.5rem;padding-inline-end:0.5rem}:host .tile-subheader{color:var(--theme-btn-invisible-secondary--color);flex-grow:0}:host .tile-footer.has-content{-webkit-border-before:1px solid var(--theme-color-1);border-block-start:1px solid var(--theme-color-1);height:2.5rem}:host(.tile-small){height:2.5rem;min-height:2.5rem;max-height:2.5rem}:host(.tile-medium){height:5rem;min-height:5rem;max-height:5rem}:host(.tile-big){height:10rem;min-height:10rem;max-height:10rem}:host(:active),:host(:focus-visible),:host(:visited){outline:none}"}}]);
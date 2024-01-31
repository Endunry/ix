"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82165],{82165:(e,t,i)=>{i.r(t),i.d(t,{ix_select:()=>l});var o=i(83804),s=i(53831);var n=function(e,t,i,o){var s,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(l=(n<3?s(l):n>3?s(t,i,l):s(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};const l=class{constructor(e){(0,o.r)(this,e),this.valueChange=(0,o.c)(this,"valueChange",7),this.itemSelectionChange=(0,o.c)(this,"itemSelectionChange",7),this.inputChange=(0,o.c)(this,"inputChange",7),this.addItem=(0,o.c)(this,"addItem",7),this.selectedIndices=void 0,this.value=void 0,this.allowClear=!1,this.mode="single",this.editable=!1,this.disabled=!1,this.readonly=!1,this.i18nPlaceholder="Select an option",this.i18nPlaceholderEditable="Type of select option",this.i18nSelectListHeader="Please select an option",this.i18nNoMatches="No matches",this.hideListHeader=!1,this.dropdownShow=!1,this.selectedLabels=void 0,this.dropdownWrapperRef=void 0,this.dropdownAnchor=void 0,this.isDropdownEmpty=!1,this.hasFocus=!1,this.navigationItem=void 0,this.inputFilterText=void 0,this.inputValue=void 0}get items(){return[...Array.from(this.hostElement.querySelectorAll("ix-select-item")),...Array.from(this.hostElement.shadowRoot.querySelectorAll("ix-select-item"))]}get selectedItems(){return this.items.filter((e=>e.selected))}get addItemButton(){return this.hostElement.shadowRoot.querySelector(".add-item")}get isSingleMode(){return"single"===this.mode}get isMultipleMode(){return"multiple"===this.mode}get isEveryDropdownItemHidden(){return this.items.every((e=>e.classList.contains("d-none")))}watchSelectedIndices(e){this.value=e,this.updateSelection()}watchValue(e){this.selectedIndices=e,this.updateSelection()}onItemClicked(e){const t=e.detail;this.itemClick(t)}itemClick(e){this.value=this.toggleValue(e),this.updateSelection(),this.emitValueChange()}emitAddItem(e){if(""===e.trim())return;const t=document.createElement("ix-select-item");t.value=e,t.label=e,this.addItemRef.appendChild(t),this.clearInput(),this.itemClick(e),this.addItem.emit(e)}toggleValue(e){if(!this.isMultipleMode)return e;if(!this.value)return[e];let t=this.value;return Array.isArray(t)||(t=[t]),t.includes(e)?t.filter((t=>t!==e)):[...t,e]}updateSelection(){var e;let t=[];this.value&&(t=Array.isArray(this.value)?[...this.value]:[this.value]),this.items.forEach((e=>{e.selected=t.some((t=>t===e.value))})),this.selectedLabels=this.selectedItems.map((e=>e.label)),this.isSingleMode?this.inputValue=(null===(e=this.selectedLabels)||void 0===e?void 0:e.length)?this.selectedLabels[0]:null:this.inputValue=null}emitValueChange(){this.valueChange.emit(this.value),this.value?this.itemSelectionChange.emit(Array.isArray(this.value)?this.value:[this.value]):this.itemSelectionChange.emit(null)}componentDidLoad(){this.inputRef.addEventListener("input",(()=>{this.dropdownShow=!0,this.inputChange.emit(this.inputRef.value)}))}componentWillLoad(){this.selectedIndices&&!this.value&&(this.value=this.selectedIndices),this.updateSelection()}onLabelChange(e){e.preventDefault(),e.stopImmediatePropagation(),this.updateSelection()}disconnectedCallback(){this.labelMutationObserver&&this.labelMutationObserver.disconnect()}itemExists(e){return this.items.find((t=>t.label===e))}dropdownVisibilityChanged(e){this.dropdownShow=e.detail,this.hasFocus=e.detail,e.detail?(this.inputRef.focus(),this.inputRef.select(),this.removeHiddenFromItems(),this.isDropdownEmpty=this.isEveryDropdownItemHidden):this.navigationItem=void 0}async onKeyDown(e){"ArrowDown"!==e.code&&"ArrowUp"!==e.code||this.onArrowNavigation(e,e.code),this.dropdownShow&&("Enter"!==e.code&&"NumpadEnter"!==e.code||await this.onEnterNavigation(),"Escape"===e.code&&(this.dropdownShow=!1))}async onEnterNavigation(){var e,t;this.isMultipleMode||(this.editable&&!this.itemExists(this.inputFilterText)&&(this.emitAddItem(this.inputFilterText),this.navigationItem=this.items[this.items.length-1]),null===(e=this.navigationItem)||void 0===e||e.onItemClick(),await(null===(t=this.dropdownRef)||void 0===t?void 0:t.updatePosition()),this.isSingleMode&&!this.editable&&(this.dropdownShow=!1))}onArrowNavigation(e,t){e.preventDefault(),e.stopPropagation(),this.dropdownShow=!0;const i=this.items.filter((e=>!e.classList.contains("d-none")));if(void 0===this.navigationItem)return void this.applyFocusTo(i[0]);let o=i.findIndex((e=>e===this.navigationItem));"ArrowDown"===t?o++:o--;const s=i[o];this.applyFocusTo(s)}applyFocusTo(e){e&&(this.navigationItem=e,setTimeout((()=>{e.shadowRoot.querySelector("ix-dropdown-item").shadowRoot.querySelector("button").focus()})))}filterItemsWithTypeahead(){this.inputFilterText=this.inputRef.value,this.isSingleMode&&this.inputFilterText===this.selectedLabels[0]||(this.inputFilterText?this.items.forEach((e=>{e.classList.remove("d-none"),e.label.toLowerCase().includes(this.inputFilterText.toLowerCase())||e.classList.add("d-none")})):this.removeHiddenFromItems(),this.isDropdownEmpty=this.isEveryDropdownItemHidden)}removeHiddenFromItems(){this.items.forEach((e=>{e.classList.remove("d-none")}))}clearInput(){this.inputRef.value="",this.inputFilterText=""}clear(){this.clearInput(),this.selectedLabels=[],this.value=[],this.valueChange.emit(null),this.dropdownShow=!1}onInputBlur(e){this.editable||this.isSingleMode||this.dropdownShow||"multiple"===this.mode||(e.target.value=this.selectedLabels)}placeholderValue(){return this.editable?this.i18nPlaceholderEditable:this.readonly?"":this.i18nPlaceholder}isAddItemVisible(){return!this.itemExists(this.inputFilterText)&&this.editable&&this.inputFilterText}render(){var e,t,i;return(0,o.h)(o.H,null,(0,o.h)("div",{class:{select:!0,disabled:this.disabled,readonly:this.readonly},ref:e=>{this.dropdownAnchor=e,this.editable||(this.dropdownWrapperRef=e)}},(0,o.h)("div",{class:"input-container"},(0,o.h)("div",{class:"chips"},this.isMultipleMode?null===(e=this.selectedItems)||void 0===e?void 0:e.map((e=>(0,o.h)("ix-filter-chip",{disabled:this.disabled||this.readonly,key:e.value,onCloseClick:t=>{t.preventDefault(),t.stopPropagation(),this.itemClick(e.value)}},e.label))):"",(0,o.h)("div",{class:"trigger"},(0,o.h)("input",{autocomplete:"off","data-testid":"input",disabled:this.disabled,readOnly:this.readonly,type:"text",class:{"allow-clear":this.allowClear&&!!(null===(t=this.selectedLabels)||void 0===t?void 0:t.length)},placeholder:this.placeholderValue(),value:this.inputValue,ref:e=>this.inputRef=e,onBlur:e=>this.onInputBlur(e),onFocus:()=>{this.navigationItem=void 0},onInput:()=>this.filterItemsWithTypeahead(),onKeyDown:e=>this.onKeyDown(e)}),this.allowClear&&((null===(i=this.selectedLabels)||void 0===i?void 0:i.length)||this.inputFilterText)?(0,o.h)("ix-icon-button",{class:"clear",icon:"clear",ghost:!0,oval:!0,size:"16",onClick:e=>{e.preventDefault(),e.stopPropagation(),this.clear()}}):null,this.disabled||this.readonly?null:(0,o.h)("ix-icon-button",{"data-select-dropdown":!0,class:{"dropdown-visible":this.dropdownShow},icon:"chevron-down-small",ghost:!0,ref:e=>{this.editable&&(this.dropdownWrapperRef=e)}}))))),(0,o.h)("ix-dropdown",{ref:e=>this.dropdownRef=e,show:this.dropdownShow,closeBehavior:this.isMultipleMode?"outside":"both",class:{"d-none":this.disabled||this.readonly},anchor:this.dropdownAnchor,trigger:this.dropdownWrapperRef,onShowChanged:e=>this.dropdownVisibilityChanged(e),placement:"bottom-start",overwriteDropdownStyle:async()=>({minWidth:`${this.hostElement.clientWidth}px`})},(0,o.h)("div",{class:{"select-list-header":!0,hidden:this.hideListHeader||this.isDropdownEmpty},title:this.i18nSelectListHeader},this.i18nSelectListHeader),(0,o.h)("slot",null),(0,o.h)("div",{ref:e=>this.addItemRef=e,class:"d-contents"}),this.isAddItemVisible()?(0,o.h)("ix-dropdown-item",{"data-testid":"add-item",icon:"plus",class:{"add-item":!0},label:this.inputFilterText,onItemClick:e=>{e.preventDefault(),e.stopPropagation(),this.emitAddItem(this.inputFilterText)}}):null,this.isDropdownEmpty&&!this.editable?(0,o.h)("div",{class:"select-list-header"},this.i18nNoMatches):""))}get hostElement(){return(0,o.g)(this)}static get watchers(){return{selectedIndices:["watchSelectedIndices"],value:["watchValue"]}}};n([(0,s.O)("keydown",(e=>e.dropdownShow))],l.prototype,"onKeyDown",null),l.style=":host{display:inline-block;position:relative;min-height:2rem;height:auto;border-radius:var(--theme-input--border-radius)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .d-none{display:none}:host .select{position:relative;display:flex;align-items:center;background-color:var(--theme-input--background);border:var(--theme-input--border-thickness) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);padding:0 0 0 0.5rem;box-shadow:var(--theme-inset-shadow-1) !important}:host .select:not(.disabled):not(:disabled){cursor:pointer}:host .select:not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover)}:host .select:focus-within{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline:1px solid #119fff;outline-offset:var(--theme-input--focus--outline-offset)}:host .select.readonly{box-shadow:none !important;border:none;border-radius:0px;border-bottom:var(--theme-input--border-thickness) solid var(--theme-color-weak-bdr)}:host .select.readonly,:host .select.readonly:hover,:host .select.readonly:active{background-color:transparent !important}:host .select.readonly:focus,:host .select.readonly:focus-within,:host .select.readonly:focus-visible{outline:none}:host .select.readonly input{color:var(--theme-color-weak-text)}:host .select.readonly input:focus,:host .select.readonly input:focus-visible{outline:none}:host .hidden{display:none !important}:host .trigger{display:flex;align-items:center;flex-grow:1;height:100%}:host .input-container{display:flex;position:relative;align-items:flex-start;width:100%;height:100%}:host .input-container .chips{position:relative;display:flex;align-items:center;flex-wrap:wrap;height:100%;max-height:3.5rem;flex-grow:1;overflow-y:auto}:host .input-container .chips>ix-filter-chip{margin:0.1rem}:host .input-container input{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);background:transparent;height:1.75rem;width:100%}:host .input-container input,:host .input-container input:hover,:host .input-container input:focus-visible{border:none;outline:none}:host .input-container input::-moz-placeholder{color:var(--theme-input-select-icon--color)}:host .input-container input::placeholder{color:var(--theme-input-select-icon--color)}:host .input-container input.hide-placeholder::-moz-placeholder{opacity:0}:host .input-container input.hide-placeholder::placeholder{opacity:0}:host .dropdown-visible{--ix-icon-button-color:var(--theme-color-dynamic--hover)}:host .add-item{display:flex;justify-content:flex-start;align-items:center;position:relative;width:100%}:host .select-list-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;height:2rem;color:var(--theme-select-list-item-hint--color);margin:0 0.5rem 0 1rem}"},53831:(e,t,i)=>{i.d(t,{O:()=>n});var o=i(83804);const s={target:"window",defaultEnabled:!0};function n(e,t){return(i,n)=>{const{componentWillLoad:l,componentWillRender:r,disconnectedCallback:a}=i;t&&(i.componentWillRender=function(){var e;return null===(e=(0,o.g)(this)[`__ix__${n}`])||void 0===e||e.enable(t(this)),r&&r.call(this)}),i.componentWillLoad=function(){const t=function(e,t){void 0===t&&(t={});const i=Object.assign(Object.assign({},s),t);let o;const n=e=>{o(e)},l={on:e=>{o=e},isEnabled:i.defaultEnabled,enable:t=>{l.isEnabled=t,t?addEventListener(e,n):removeEventListener(e,n)},destroy:()=>{l.enable(!1)}};return l.enable(i.defaultEnabled),l}(e),i=(0,o.g)(this),r=this[n];return i[`__ix__${n}`]=t,t.on(r.bind(this)),l&&l.call(this)},i.disconnectedCallback=function(){var e;const t=(0,o.g)(this);return t&&t[`__ix__${n}`]&&(null===(e=t[`__ix__${n}`])||void 0===e||e.destroy(),t[`__ix__${n}`]=null),a&&a.call(this)}}}}}]);
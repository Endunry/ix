import { r as registerInstance, h, H as Host } from "./index.65a05af8.js";
const dividerCss = ":host{display:block;position:relative;width:100%;border-bottom:0.0625rem solid var(--theme-color-x-weak-bdr);margin:0.25rem 0px}";
const IxDividerStyle0 = dividerCss;
const Divider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null);
  }
};
Divider.style = IxDividerStyle0;
export {
  Divider as ix_divider
};
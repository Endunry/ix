import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from "./index.b385ac31.js";
const workflowStepCss = ":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .step{display:flex;flex-direction:column;align-items:center;background-color:var(--theme-workflow-step--background);border-radius:var(--theme-workflow--border-radius);width:auto;padding:1.125rem 0 0.5rem 0;height:4rem;width:12.75rem}:host .step .wrapper{display:flex;width:100%;align-items:center;justify-content:center;position:relative}:host .step .wrapper .line{width:100%;height:0.125rem;background-color:var(--theme-workflow-step-icon-default--color)}:host .step .wrapper .line.first,:host .step .wrapper .line.last{width:50%;margin:0 0 0 auto}:host .step .wrapper .line.last{margin:0 auto 0 0}:host .step .wrapper .line.single{width:0}:host .step .wrapper .line.selected{background-color:var(--theme-workflow-step-icon-default--color--selected)}:host .step .wrapper .line.done{background-color:var(--theme-workflow-step-icon-done--color)}:host .step .wrapper .line.done.selected{background-color:var(--theme-workflow-step-icon-done--color--selected)}:host .step .wrapper .line.warning{background-color:var(--theme-color-warning)}:host .step .wrapper .line.success{background-color:var(--theme-color-success)}:host .step .wrapper .line.error{background-color:var(--theme-color-alarm)}:host .step .wrapper .iconWrapper{display:flex;align-items:center;justify-content:center;position:absolute}:host .step .wrapper .iconWrapper .absolute{position:absolute}:host .step .text{margin-top:1rem;width:auto;padding:0 0.5rem}:host .step.vertical{flex-direction:row;padding:0}:host .step.vertical .wrapper{width:auto;padding-left:1.125rem;height:4rem}:host .step.vertical .wrapper .line{width:0.125rem;height:100%}:host .step.vertical .wrapper .line.first,:host .step.vertical .wrapper .line.last{height:50%;margin:auto 0 0 0}:host .step.vertical .wrapper .line.last{margin:0 0 auto 0}:host .step.vertical .wrapper .line.single{width:0}:host .step.vertical .text{margin-top:0;margin-left:1rem;padding:0}:host .step.clickable:hover{background-color:var(--theme-workflow-step--background--hover)}:host .step.clickable:active{background-color:var(--theme-workflow-step--background--active)}:host .step:focus-visible{outline:1px solid var(--focus--border-color);border-radius:0}:host .step.selected{background-color:var(--theme-workflow-step--background--selected)}:host .step.disabled{background-color:var(--theme-workflow-step--background--disabled)}:host .step.disabled .line{background-color:var(--theme-workflow-step-icon-default--color--disabled) !important}:host .step.disabled .text{color:var(--theme-workflow-step--color--disabled)}";
const IxWorkflowStepStyle0 = workflowStepCss;
const WorkflowStep = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectedChanged = createEvent(this, "selectedChanged", 7);
    this.vertical = false;
    this.disabled = false;
    this.status = "open";
    this.clickable = false;
    this.selected = false;
    this.position = "undefined";
    this.iconName = "circle";
    this.iconColor = "workflow-step-icon-default--color";
  }
  selectedHandler() {
    const selectedStyle = this.selected ? "--selected" : "";
    if (this.status === "open") {
      this.iconName = this.selected ? "circle-dot" : "circle";
      this.iconColor = `workflow-step-icon-default--color${selectedStyle}`;
    }
    if (this.status === "done" && !this.disabled) {
      this.iconColor = `workflow-step-icon-done--color${selectedStyle}`;
    }
  }
  watchPropHandler() {
    switch (this.status) {
      case "open":
        this.iconName = "circle";
        this.iconColor = "workflow-step-icon-default--color";
        break;
      case "success":
        this.iconName = "success";
        this.iconColor = "color-success";
        break;
      case "done":
        this.iconName = "success";
        this.iconColor = "workflow-step-icon-done--color";
        break;
      case "warning":
        this.iconName = "warning";
        this.iconColor = "color-warning";
        break;
      case "error":
        this.iconName = "error";
        this.iconColor = "color-alarm";
        break;
      default:
        this.iconName = "circle";
        break;
    }
    if (this.disabled) {
      this.iconColor = "workflow-step-icon-success--color--disabled";
    }
  }
  componentDidLoad() {
    this.watchPropHandler();
    this.selectedHandler();
    this.customIconSlot = !!this.hostElement.querySelector('[slot="custom-icon"]');
  }
  onStepClick() {
    if (!this.disabled && this.clickable) {
      this.selectedChanged.emit(this.hostElement);
    }
  }
  render() {
    const icons = !this.customIconSlot ? h(Fragment, null, h("ix-icon", { color: "color-1", name: this.iconName === "warning" ? "triangle-filled" : "circle-filled", class: "absolute", size: "24" }), h("ix-icon", { color: this.iconColor, name: this.iconName, class: "absolute", size: "24" })) : null;
    return h(Host, { key: "0c1ae249e2401ecd186a857b6a10278f1824f23f", onClick: () => this.onStepClick() }, h("div", { key: "5003746f3fcc5ea90d45080bbb96a54510b19000", tabIndex: 0, class: {
      step: true,
      selected: this.selected,
      vertical: this.vertical,
      disabled: this.disabled,
      clickable: this.clickable && !this.disabled
    } }, h("div", { key: "904168a320bb5541ad8813103f6776d778817ba6", class: "wrapper" }, h("div", { key: "33110f36d11d6b320eec36385f6d6c6b7b7cdb24", class: {
      line: true,
      selected: this.selected,
      [this.status]: true,
      [this.position]: true
    } }), h("div", { key: "9c467e5b239d3e1ea91ddbcde54aa12242e850ae", class: "iconWrapper" }, icons, h("slot", { key: "a88d8ee859688b53d6b7dd8b75d18f93acc7d14e", name: "custom-icon" }))), h("div", { key: "620897ff49a072d107568dd72ad159c122f9bf08", class: "text" }, h("slot", { key: "e0da9718614380acc3ae4183ec4f571e29982dfa" }))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "selected": ["selectedHandler"],
      "disabled": ["watchPropHandler"],
      "status": ["watchPropHandler"]
    };
  }
};
WorkflowStep.style = IxWorkflowStepStyle0;
export {
  WorkflowStep as ix_workflow_step
};

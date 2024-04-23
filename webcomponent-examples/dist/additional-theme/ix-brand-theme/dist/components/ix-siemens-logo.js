import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const siemensLogoCss = ":host{display:inline-block}:host .logo>path{fill:var(--theme-app-header-logo--color)}";
const IxSiemensLogoStyle0 = siemensLogoCss;

const SiemensLogo = /*@__PURE__*/ proxyCustomElement(class SiemensLogo extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '7ce0cad052d258948015c5e1b58225368e8765c0' }, h("svg", { key: '7e2dcf5fe97b6ad0f56aa6402ccd8e5b076c0e6d', class: "logo", width: "76", height: "12", viewBox: "0 0 76 12", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: '50558cf4dacc5baa9123529118726bc529df28d9', d: "M.497 11.545v-2.27c1.292.407 2.435.61 3.43.61 1.373 0 2.06-.363 2.06-1.088 0-.27-.1-.498-.3-.682-.206-.195-.73-.466-1.573-.812C2.6 6.68 1.614 6.15 1.156 5.71.561 5.132.264 4.402.264 3.52c0-1.137.433-2.003 1.3-2.598.855-.59 1.97-.885 3.346-.885.758 0 1.854.14 3.289.419v2.183C7.132 2.213 6.141 2 5.225 2c-1.289 0-1.933.354-1.933 1.064 0 .265.13.481.39.649.216.136.811.422 1.785.86C6.87 5.198 7.804 5.739 8.27 6.2c.552.546.828 1.253.828 2.12 0 1.244-.541 2.194-1.624 2.849-.877.53-2.014.795-3.411.795-1.18 0-2.368-.139-3.565-.418zM10.91.237h3.211V11.73h-3.21V.237zm6.155 11.494V.237H25.3v2.079h-5.14V4.91h4.474v1.896H20.16v2.728h5.272v2.196h-8.367zm10.463 0V.237h4.163l2.892 7.344L37.547.237h3.954V11.73h-3.044V3.593l-3.37 8.255h-1.99L29.79 3.593v8.138h-2.262zm16.918 0V.237h8.234v2.079h-5.14V4.91h4.475v1.896H47.54v2.728h5.273v2.196h-8.368zm10.48 0V.237h3.721l3.948 7.694V.237h2.261V11.73h-3.615l-4.053-7.798v7.798h-2.262zm12.21-.186v-2.27c1.28.407 2.424.61 3.43.61 1.373 0 2.059-.363 2.059-1.088a.903.903 0 0 0-.29-.682c-.207-.195-.734-.466-1.582-.812-1.508-.617-2.495-1.147-2.958-1.592-.594-.573-.891-1.306-.891-2.2 0-1.13.432-1.994 1.299-2.59.855-.59 1.97-.884 3.346-.884.774 0 1.776.123 3.005.37l.284.049v2.183C73.77 2.213 72.776 2 71.856 2c-1.284 0-1.925.354-1.925 1.064 0 .265.13.481.389.649.206.13.804.417 1.794.86 1.392.624 2.324 1.165 2.793 1.625.553.547.829 1.254.829 2.12 0 1.245-.539 2.195-1.616 2.85-.882.53-2.022.795-3.419.795-1.18 0-2.37-.139-3.565-.418z", fill: "#FFF", "fill-rule": "evenodd", "fill-opacity": ".85" }))));
    }
    static get style() { return IxSiemensLogoStyle0; }
}, [1, "ix-siemens-logo"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-siemens-logo"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-siemens-logo":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SiemensLogo);
            }
            break;
    } });
}

const IxSiemensLogo = SiemensLogo;
const defineCustomElement = defineCustomElement$1;

export { IxSiemensLogo, defineCustomElement };

//# sourceMappingURL=ix-siemens-logo.js.map
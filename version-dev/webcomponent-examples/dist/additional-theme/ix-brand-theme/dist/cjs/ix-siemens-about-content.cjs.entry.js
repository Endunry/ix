'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b3c85302.js');

/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
const languageRegister = {
  'cn/zh': {
    path: '/cn/zh.html',
    legals: {
      general: 'https://new.siemens.com/cn/zh/general/legal.html',
      privacy: 'https://new.siemens.com/cn/zh/general/privacy-notice.html',
      cookie: 'https://new.siemens.com/cn/zh/general/cookie-notice.html',
      terms: 'https://new.siemens.com/cn/zh/general/terms-of-use.html',
      digital: 'http://beian.miit.gov.cn/',
    },
  },
  'global/es': {
    path: '/global/es/general/legal.html',
    legals: {
      general: 'https://new.siemens.com/global/es/general/legal.html',
      privacy: 'https://new.siemens.com/global/es/general/aviso-de-privacidad-de-datos.html',
      cookie: 'https://new.siemens.com/global/es/general/aviso-sobre-el-uso-de-cookies.html',
      terms: 'https://new.siemens.com/global/es/general/condiciones-de-uso.html',
      digital: 'https://new.siemens.com/global/es/general/digital-id.html',
    },
  },
  'global/en': {
    path: '/global/en/general/legal.html',
    legals: {
      general: 'https://new.siemens.com/global/en/general/legal.html',
      privacy: 'https://new.siemens.com/global/en/general/privacy-notice.html',
      cookie: 'https://new.siemens.com/global/en/general/cookie-notice.html',
      terms: 'https://new.siemens.com/global/en/general/terms-of-use.html',
      digital: 'https://new.siemens.com/global/en/general/digital-id.html',
    },
  },
  'de/de': {
    path: '/de/de.html',
    legals: {
      general: 'https://new.siemens.com/de/de/general/legal.html',
      privacy: 'https://new.siemens.com/de/de/general/datenschutz.html',
      cookie: 'https://new.siemens.com/de/de/general/cookie-richtlinien.html',
      terms: 'https://new.siemens.com/de/de/general/nutzungsbedingungen.html',
      digital: 'https://new.siemens.com/de/de/general/digitales-zertifikat.html',
    },
  },
};
const resolveLink = (value, type) => {
  return languageRegister[value].legals[type];
};

const siemensAboutContentCss = ":host{display:block}:host #cui-imprint .cui-imprint-product-name{margin-bottom:1rem}:host #cui-imprint .cui-imprint-product-description{margin-bottom:2rem}:host #cui-imprint .cui-imprint-product-name,:host #cui-imprint .cui-imprint-product-description{font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-1);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-lg);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host #cui-imprint .cui-imprint-link-container{display:flex;align-items:center;height:2rem}";

const SiemensAboutContent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.applicationName = undefined;
    this.applicationDescription = '';
    this.imprintLanguage = 'global/en';
    this.copyrightYears = '1996 - 2022';
    this.i18nCorporateLabel = 'Corporate Information';
    this.i18nPrivacyNoticeLabel = 'Privacy Notice';
    this.i18nTermsOfUseLabel = 'Terms of Use';
    this.i18nCookieNoticeLabel = 'Cookie Notice';
    this.i18nDigitalId = 'Digital ID';
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { id: "cui-imprint" }, index.h("div", { class: "cui-imprint-product-name" }, this.applicationName, index.h("br", null), "\u00A9 Siemens ", this.copyrightYears), index.h("div", { class: {
        'd-none': !this.applicationDescription,
        'cui-imprint-product-description': true,
      } }, this.applicationDescription), index.h("div", { class: "cui-imprint-link-container" }, index.h("a", { href: resolveLink(this.imprintLanguage, 'general'), target: "_blank" }, index.h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nCorporateLabel)), index.h("div", { class: "cui-imprint-link-container" }, index.h("a", { href: resolveLink(this.imprintLanguage, 'privacy'), target: "_blank" }, index.h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nPrivacyNoticeLabel)), index.h("div", { class: "cui-imprint-link-container" }, index.h("a", { href: resolveLink(this.imprintLanguage, 'terms'), target: "_blank" }, index.h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nTermsOfUseLabel)), index.h("div", { class: "cui-imprint-link-container" }, index.h("a", { href: resolveLink(this.imprintLanguage, 'cookie'), target: "_blank" }, index.h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nCookieNoticeLabel)), index.h("div", { class: "cui-imprint-link-container" }, index.h("a", { href: resolveLink(this.imprintLanguage, 'digital'), target: "_blank" }, index.h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nDigitalId))), index.h("slot", null)));
  }
};
SiemensAboutContent.style = siemensAboutContentCss;

exports.ix_siemens_about_content = SiemensAboutContent;

//# sourceMappingURL=ix-siemens-about-content.cjs.entry.js.map
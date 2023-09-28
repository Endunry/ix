import { _ as __vitePreload, e as __variableDynamicImportRuntimeHelper } from "./index.6624141a.js";
function applyPolyfills() {
  var promises = [];
  if (typeof window !== "undefined") {
    var win2 = window;
    if (!win2.customElements || win2.Element && (!win2.Element.prototype.closest || !win2.Element.prototype.matches || !win2.Element.prototype.remove || !win2.Element.prototype.getRootNode)) {
      promises.push(__vitePreload(() => import(
        /* webpackChunkName: "polyfills-dom" */
        "./dom-64ac48b5.c5443daf.js"
      ), true ? [] : void 0, import.meta.url));
    }
    var checkIfURLIsSupported = function() {
      try {
        var u = new URL("b", "http://a");
        u.pathname = "c%20d";
        return u.href === "http://a/c%20d" && u.searchParams;
      } catch (e) {
        return false;
      }
    };
    if ("function" !== typeof Object.assign || !Object.entries || !Array.prototype.find || !Array.prototype.includes || !String.prototype.startsWith || !String.prototype.endsWith || win2.NodeList && !win2.NodeList.prototype.forEach || !win2.fetch || !checkIfURLIsSupported() || typeof WeakMap == "undefined") {
      promises.push(__vitePreload(() => import(
        /* webpackChunkName: "polyfills-core-js" */
        "./core-js-de462567.d150e7a7.js"
      ), true ? ["core-js-de462567.d150e7a7.js","_commonjsHelpers-dd6fe9fb.362cc8ba.js"] : void 0, import.meta.url).then(function(n) {
        return n.c;
      }));
    }
  }
  return Promise.all(promises);
}
const NAMESPACE = "ix-icons";
let scopeId;
let hostTagName;
let isSvgMode = false;
let queuePending = false;
const createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
const uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
const HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
const EMPTY_OBJ = {};
const SVG_NS = "http://www.w3.org/2000/svg";
const HTML_NS = "http://www.w3.org/1999/xhtml";
const isDef = (v) => v != null;
const isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};
function queryNonceMetaTagContent(doc2) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc2.head) === null || _a === void 0 ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) === null || _b === void 0 ? void 0 : _b.getAttribute("content")) !== null && _c !== void 0 ? _c : void 0;
}
const h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i = 0; i < c.length; i++) {
      child = c[i];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  return vnode;
};
const newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  return vnode;
};
const Host = {};
const isHost = (node) => node && node.$tag$ === Host;
const parsePropertyValue = (propValue, propType) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 1) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
const emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
const rootAppliedStyles = /* @__PURE__ */ new WeakMap();
const registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
  var _a;
  let scopeId2 = getScopeId(cmpMeta);
  const style = styles.get(scopeId2);
  styleContainerNode = styleContainerNode.nodeType === 11 ? styleContainerNode : doc;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        {
          {
            styleElm = doc.createElement("style");
            styleElm.innerHTML = style;
          }
          const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector("link"));
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
    }
  }
  return scopeId2;
};
const attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta);
  if (flags & 10) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
  }
  endAttachStyles();
};
const getScopeId = (cmp, mode) => "sc-" + cmp.$tagName$;
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
  if (oldValue !== newValue) {
    let isProp = isMemberInElement(elm, memberName);
    memberName.toLowerCase();
    if (memberName === "class") {
      const classList = elm.classList;
      const oldClasses = parseClassList(oldValue);
      const newClasses = parseClassList(newValue);
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    } else if (memberName === "style") {
      {
        for (const prop in oldValue) {
          if (!newValue || newValue[prop] == null) {
            if (prop.includes("-")) {
              elm.style.removeProperty(prop);
            } else {
              elm.style[prop] = "";
            }
          }
        }
      }
      for (const prop in newValue) {
        if (!oldValue || newValue[prop] !== oldValue[prop]) {
          if (prop.includes("-")) {
            elm.style.setProperty(prop, newValue[prop]);
          } else {
            elm.style[prop] = newValue[prop];
          }
        }
      }
    } else {
      const isComplex = isComplexType(newValue);
      if ((isProp || isComplex && newValue !== null) && !isSvg) {
        try {
          if (!elm.tagName.includes("-")) {
            const n = newValue == null ? "" : newValue;
            if (memberName === "list") {
              isProp = false;
            } else if (oldValue == null || elm[memberName] != n) {
              elm[memberName] = n;
            }
          } else {
            elm[memberName] = newValue;
          }
        } catch (e) {
        }
      }
      if (newValue == null || newValue === false) {
        if (newValue !== false || elm.getAttribute(memberName) === "") {
          {
            elm.removeAttribute(memberName);
          }
        }
      } else if ((!isProp || flags & 4 || isSvg) && !isComplex) {
        newValue = newValue === true ? "" : newValue;
        {
          elm.setAttribute(memberName, newValue);
        }
      }
    }
  }
};
const parseClassListRegex = /\s/;
const parseClassList = (value) => !value ? [] : value.split(parseClassListRegex);
const updateElement = (oldVnode, newVnode, isSvgMode2, memberName) => {
  const elm = newVnode.$elm$.nodeType === 11 && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || EMPTY_OBJ;
  const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
  {
    for (memberName in oldVnodeAttrs) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode2, newVnode.$flags$);
      }
    }
  }
  for (memberName in newVnodeAttrs) {
    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode2, newVnode.$flags$);
  }
};
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i = 0;
  let elm;
  let childNode;
  {
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    elm = newVNode2.$elm$ = doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, newVNode2.$tag$);
    if (isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    if (isDef(scopeId) && elm["s-si"] !== scopeId) {
      elm.classList.add(elm["s-si"] = scopeId);
    }
    if (newVNode2.$children$) {
      for (i = 0; i < newVNode2.$children$.length; ++i) {
        childNode = createElm(oldParentVNode, newVNode2, i);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
    {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  return elm;
};
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        containerElm.insertBefore(childNode, before);
      }
    }
  }
};
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnode = vnodes[startIdx]) {
      elm = vnode.$elm$;
      elm.remove();
    }
  }
};
const updateChildren = (parentElm, oldCh, newVNode2, newCh) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode)) {
      patch(oldStartVnode, newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode)) {
      patch(oldEndVnode, newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode)) {
      patch(oldStartVnode, newEndVnode);
      parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode)) {
      patch(oldEndVnode, newStartVnode);
      parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode2, newCh, newStartIdx, newEndIdx);
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
const isSameVnode = (leftVNode, rightVNode) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    return true;
  }
  return false;
};
const patch = (oldVNode, newVNode2) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  {
    {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      {
        updateElement(oldVNode, newVNode2, isSvgMode);
      }
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren);
    } else if (newChildren !== null) {
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (oldChildren !== null) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    }
    if (isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  }
};
const renderVdom = (hostRef, renderFnResults) => {
  const hostElm = hostRef.$hostElement$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm;
  {
    scopeId = hostElm["s-sc"];
  }
  patch(oldVNode, rootVnode);
};
const attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    ancestorComponent["s-p"].push(new Promise((r) => hostRef.$onRenderResolve$ = r));
  }
};
const scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16;
  }
  if (hostRef.$flags$ & 4) {
    hostRef.$flags$ |= 512;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  return writeTask(dispatch);
};
const dispatchHooks = (hostRef, isInitialLoad) => {
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$;
  let promise;
  endSchedule();
  return then(promise, () => updateComponent(hostRef, instance, isInitialLoad));
};
const updateComponent = async (hostRef, instance, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = elm["s-p"];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4;
      childrenPromises.length = 0;
    }
  }
};
const callRender = (hostRef, instance, elm) => {
  try {
    instance = instance.render();
    {
      hostRef.$flags$ &= ~16;
    }
    {
      hostRef.$flags$ |= 2;
    }
    {
      {
        {
          renderVdom(hostRef, instance);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
const postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const ancestorComponent = hostRef.$ancestorComponent$;
  if (!(hostRef.$flags$ & 64)) {
    hostRef.$flags$ |= 64;
    {
      addHydratedFlag(elm);
    }
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    endPostUpdate();
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= ~(4 | 512);
  }
};
const appDidLoad = (who) => {
  {
    addHydratedFlag(doc.documentElement);
  }
  nextTick(() => emitEvent(win, "appload", { detail: { namespace: NAMESPACE } }));
};
const safeCall = (instance, method, arg) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e);
    }
  }
  return void 0;
};
const then = (promise, thenFn) => {
  return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const addHydratedFlag = (elm) => elm.classList.add("hydrated");
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  const elm = hostRef.$hostElement$;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$;
  newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (instance) {
      if (cmpMeta.$watchers$ && flags & 128) {
        const watchMethods = cmpMeta.$watchers$[propName];
        if (watchMethods) {
          watchMethods.map((watchMethodName) => {
            try {
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e) {
              consoleError(e, elm);
            }
          });
        }
      }
      if ((flags & (2 | 16)) === 2) {
        scheduleUpdate(hostRef, false);
      }
    }
  }
};
const proxyComponent = (Cstr, cmpMeta, flags) => {
  if (cmpMeta.$members$) {
    if (Cstr.watchers) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries(cmpMeta.$members$);
    const prototype = Cstr.prototype;
    members.map(([memberName, [memberFlags]]) => {
      if (memberFlags & 31 || flags & 2 && memberFlags & 32) {
        Object.defineProperty(prototype, memberName, {
          get() {
            return getValue(this, memberName);
          },
          set(newValue) {
            setValue(this, memberName, newValue, cmpMeta);
          },
          configurable: true,
          enumerable: true
        });
      }
    });
    if (flags & 1) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, _oldValue, newValue) {
        plt.jmp(() => {
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName)) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && this[propName] == newValue) {
            return;
          }
          this[propName] = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
        });
      };
      Cstr.observedAttributes = members.filter(([_, m]) => m[0] & 15).map(([propName, m]) => {
        const attrName = m[1] || propName;
        attrNameToPropName.set(attrName, propName);
        return attrName;
      });
    }
  }
  return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
  if ((hostRef.$flags$ & 32) === 0) {
    {
      hostRef.$flags$ |= 32;
      Cstr = loadModule(cmpMeta);
      if (Cstr.then) {
        const endLoad = uniqueTime();
        Cstr = await Cstr;
        endLoad();
      }
      if (!Cstr.isProxied) {
        {
          cmpMeta.$watchers$ = Cstr.watchers;
        }
        proxyComponent(Cstr, cmpMeta, 2);
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
      {
        hostRef.$flags$ |= 8;
      }
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e);
      }
      {
        hostRef.$flags$ &= ~8;
      }
      {
        hostRef.$flags$ |= 128;
      }
      endNewInstance();
      fireConnectedCallback(hostRef.$lazyInstance$);
    }
    if (Cstr.style) {
      let style = Cstr.style;
      const scopeId2 = getScopeId(cmpMeta);
      if (!styles.has(scopeId2)) {
        const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
        registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1));
        endRegisterStyles();
      }
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
};
const fireConnectedCallback = (instance) => {
  {
    safeCall(instance, "connectedCallback");
  }
};
const connectedCallback = (elm) => {
  if ((plt.$flags$ & 1) === 0) {
    const hostRef = getHostRef(elm);
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1)) {
      hostRef.$flags$ |= 1;
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      fireConnectedCallback(hostRef.$lazyInstance$);
    }
    endConnected();
  }
};
const disconnectedCallback = (elm) => {
  if ((plt.$flags$ & 1) === 0) {
    getHostRef(elm);
  }
};
const bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements = win.customElements;
  const head = doc.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const visibilityStyle = /* @__PURE__ */ doc.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", doc.baseURI).href;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      {
        cmpMeta.$watchers$ = {};
      }
      const tagName = cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        constructor(self) {
          super(self);
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1) {
            {
              {
                self.attachShadow({ mode: "open" });
              }
            }
          }
        }
        connectedCallback() {
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
        }
        componentOnReady() {
          return getHostRef(this).$onReadyPromise$;
        }
      };
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements.get(tagName)) {
        cmpTags.push(tagName);
        customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1));
      }
    });
  });
  {
    visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
    visibilityStyle.setAttribute("data-styles", "");
    const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
    if (nonce != null) {
      visibilityStyle.setAttribute("nonce", nonce);
    }
    head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map((host) => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};
const setNonce = (nonce) => plt.$nonce$ = nonce;
const hostRefs = /* @__PURE__ */ new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
const registerHost = (elm, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: elm,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    elm["s-p"] = [];
    elm["s-rc"] = [];
  }
  return hostRefs.set(elm, hostRef);
};
const isMemberInElement = (elm, memberName) => memberName in elm;
const consoleError = (e, el) => (0, console.error)(e, el);
const cmpModules = /* @__PURE__ */ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  const module = cmpModules.get(bundleId);
  if (module) {
    return module[exportName];
  }
  if (!hmrVersionId || !BUILD.hotModuleReplacement) {
    const processMod = (importedModule) => {
      cmpModules.set(bundleId, importedModule);
      return importedModule[exportName];
    };
    switch (bundleId) {
      case "ix-icon":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-icon.entry-5065bd80.19ca2e60.js"
        ), true ? ["ix-icon.entry-5065bd80.19ca2e60.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url).then(processMod, consoleError);
    }
  }
  return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./ix-action-card.entry.js": () => __vitePreload(() => import("./ix-action-card.entry.4151533d.js"), true ? ["ix-action-card.entry.4151533d.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-application-header.entry.js": () => __vitePreload(() => import("./ix-application-header.entry.ec0c294e.js"), true ? ["ix-application-header.entry.ec0c294e.js","index.6624141a.js","index.93cad09a.css","menu-service-5555b4fa.dde89574.js","breakpoints-b76e9f27.198519d0.js","typed-event-a230184a.ccfb44d2.js"] : void 0, import.meta.url), "./ix-application-sidebar.entry.js": () => __vitePreload(() => import("./ix-application-sidebar.entry.6773dd4f.js"), true ? ["ix-application-sidebar.entry.6773dd4f.js","index.6624141a.js","index.93cad09a.css","anime.es-185e9087.87a18bcc.js","animation-268dce50.df0d8da4.js"] : void 0, import.meta.url), "./ix-application.entry.js": () => __vitePreload(() => import("./ix-application.entry.d3399c22.js"), true ? ["ix-application.entry.d3399c22.js","index.6624141a.js","index.93cad09a.css","context-6a3bc77f.0b0e7e06.js","typed-event-a230184a.ccfb44d2.js","menu-service-5555b4fa.dde89574.js","breakpoints-b76e9f27.198519d0.js","shadow-dom-b9df3d9b.b432e56b.js","theme-switcher-9ede3823.43047733.js"] : void 0, import.meta.url), "./ix-avatar_2.entry.js": () => __vitePreload(() => import("./ix-avatar_2.entry.a96728d7.js"), true ? ["ix-avatar_2.entry.a96728d7.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-basic-navigation.entry.js": () => __vitePreload(() => import("./ix-basic-navigation.entry.a5970386.js"), true ? ["ix-basic-navigation.entry.a5970386.js","index.6624141a.js","index.93cad09a.css","context-6a3bc77f.0b0e7e06.js","typed-event-a230184a.ccfb44d2.js","menu-service-5555b4fa.dde89574.js","breakpoints-b76e9f27.198519d0.js"] : void 0, import.meta.url), "./ix-blind.entry.js": () => __vitePreload(() => import("./ix-blind.entry.bd2c191c.js"), true ? ["ix-blind.entry.bd2c191c.js","index.6624141a.js","index.93cad09a.css","anime.es-185e9087.87a18bcc.js","a11y-d5dd20ad.071fa6c7.js"] : void 0, import.meta.url), "./ix-breadcrumb-item.entry.js": () => __vitePreload(() => import("./ix-breadcrumb-item.entry.83fe9693.js"), true ? ["ix-breadcrumb-item.entry.83fe9693.js","index.6624141a.js","index.93cad09a.css","anime.es-185e9087.87a18bcc.js","base-button-6aa05157.8119ae7b.js","a11y-d5dd20ad.071fa6c7.js"] : void 0, import.meta.url), "./ix-breadcrumb.entry.js": () => __vitePreload(() => import("./ix-breadcrumb.entry.6fa4ffb4.js"), true ? ["ix-breadcrumb.entry.6fa4ffb4.js","index.6624141a.js","index.93cad09a.css","a11y-d5dd20ad.071fa6c7.js","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url), "./ix-burger-menu.entry.js": () => __vitePreload(() => import("./ix-burger-menu.entry.38afea7a.js"), true ? ["ix-burger-menu.entry.38afea7a.js","index.6624141a.js","index.93cad09a.css","base-button-6aa05157.8119ae7b.js","a11y-d5dd20ad.071fa6c7.js"] : void 0, import.meta.url), "./ix-button.entry.js": () => __vitePreload(() => import("./ix-button.entry.d45eced4.js"), true ? ["ix-button.entry.d45eced4.js","index.6624141a.js","index.93cad09a.css","base-button-6aa05157.8119ae7b.js"] : void 0, import.meta.url), "./ix-card-accordion_2.entry.js": () => __vitePreload(() => import("./ix-card-accordion_2.entry.ad34b28f.js"), true ? ["ix-card-accordion_2.entry.ad34b28f.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-card-list.entry.js": () => __vitePreload(() => import("./ix-card-list.entry.02356797.js"), true ? ["ix-card-list.entry.02356797.js","index.6624141a.js","index.93cad09a.css","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url), "./ix-card_2.entry.js": () => __vitePreload(() => import("./ix-card_2.entry.8aed77b1.js"), true ? ["ix-card_2.entry.8aed77b1.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-category-filter.entry.js": () => __vitePreload(() => import("./ix-category-filter.entry.eac3a903.js"), true ? ["ix-category-filter.entry.eac3a903.js","index.6624141a.js","index.93cad09a.css","base-button-6aa05157.8119ae7b.js","logical-filter-operator-92531263.182856a9.js"] : void 0, import.meta.url), "./ix-chip.entry.js": () => __vitePreload(() => import("./ix-chip.entry.2a49fdac.js"), true ? ["ix-chip.entry.2a49fdac.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-col.entry.js": () => __vitePreload(() => import("./ix-col.entry.95ee7d55.js"), true ? ["ix-col.entry.95ee7d55.js","index.6624141a.js","index.93cad09a.css","breakpoints-b76e9f27.198519d0.js"] : void 0, import.meta.url), "./ix-content-header.entry.js": () => __vitePreload(() => import("./ix-content-header.entry.b40f5f7e.js"), true ? ["ix-content-header.entry.b40f5f7e.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-content.entry.js": () => __vitePreload(() => import("./ix-content.entry.9256965c.js"), true ? ["ix-content.entry.9256965c.js","index.6624141a.js","index.93cad09a.css","shadow-dom-b9df3d9b.b432e56b.js"] : void 0, import.meta.url), "./ix-css-grid-item.entry.js": () => __vitePreload(() => import("./ix-css-grid-item.entry.00203cbe.js"), true ? ["ix-css-grid-item.entry.00203cbe.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-css-grid.entry.js": () => __vitePreload(() => import("./ix-css-grid.entry.988ee082.js"), true ? ["ix-css-grid.entry.988ee082.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-date-picker_2.entry.js": () => __vitePreload(() => import("./ix-date-picker_2.entry.bd562bfc.js"), true ? ["ix-date-picker_2.entry.bd562bfc.js","index.6624141a.js","index.93cad09a.css","_commonjsHelpers-dd6fe9fb.362cc8ba.js"] : void 0, import.meta.url), "./ix-date-time-card.entry.js": () => __vitePreload(() => import("./ix-date-time-card.entry.3571355d.js"), true ? ["ix-date-time-card.entry.3571355d.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-datetime-picker.entry.js": () => __vitePreload(() => import("./ix-datetime-picker.entry.d60858d5.js"), true ? ["ix-datetime-picker.entry.d60858d5.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-divider.entry.js": () => __vitePreload(() => import("./ix-divider.entry.8f5ff4da.js"), true ? ["ix-divider.entry.8f5ff4da.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-drawer.entry.js": () => __vitePreload(() => import("./ix-drawer.entry.139622d2.js"), true ? ["ix-drawer.entry.139622d2.js","index.6624141a.js","index.93cad09a.css","anime.es-185e9087.87a18bcc.js"] : void 0, import.meta.url), "./ix-dropdown-button.entry.js": () => __vitePreload(() => import("./ix-dropdown-button.entry.87693b81.js"), true ? ["ix-dropdown-button.entry.87693b81.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-dropdown-header.entry.js": () => __vitePreload(() => import("./ix-dropdown-header.entry.dc491465.js"), true ? ["ix-dropdown-header.entry.dc491465.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-dropdown-item.entry.js": () => __vitePreload(() => import("./ix-dropdown-item.entry.ab87e6be.js"), true ? ["ix-dropdown-item.entry.ab87e6be.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-dropdown-quick-actions.entry.js": () => __vitePreload(() => import("./ix-dropdown-quick-actions.entry.f002a443.js"), true ? ["ix-dropdown-quick-actions.entry.f002a443.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-dropdown.entry.js": () => __vitePreload(() => import("./ix-dropdown.entry.435b349a.js"), true ? ["ix-dropdown.entry.435b349a.js","index.6624141a.js","index.93cad09a.css","floating-ui.dom.esm-cbe44820.60534149.js"] : void 0, import.meta.url), "./ix-empty-state.entry.js": () => __vitePreload(() => import("./ix-empty-state.entry.ed3589a8.js"), true ? ["ix-empty-state.entry.ed3589a8.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-event-list-item.entry.js": () => __vitePreload(() => import("./ix-event-list-item.entry.23c45484.js"), true ? ["ix-event-list-item.entry.23c45484.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-event-list.entry.js": () => __vitePreload(() => import("./ix-event-list.entry.2bdad5c3.js"), true ? ["ix-event-list.entry.2bdad5c3.js","index.6624141a.js","index.93cad09a.css","mutation-observer-7d01bbea.e6c38b94.js","rwd.util-cfc2ea72.925cc3e0.js"] : void 0, import.meta.url), "./ix-expanding-search.entry.js": () => __vitePreload(() => import("./ix-expanding-search.entry.e5a8fd8d.js"), true ? ["ix-expanding-search.entry.e5a8fd8d.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-filter-chip_2.entry.js": () => __vitePreload(() => import("./ix-filter-chip_2.entry.dd399f8f.js"), true ? ["ix-filter-chip_2.entry.dd399f8f.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-flip-tile-content.entry.js": () => __vitePreload(() => import("./ix-flip-tile-content.entry.d8243d63.js"), true ? ["ix-flip-tile-content.entry.d8243d63.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-flip-tile.entry.js": () => __vitePreload(() => import("./ix-flip-tile.entry.e4710b81.js"), true ? ["ix-flip-tile.entry.e4710b81.js","index.6624141a.js","index.93cad09a.css","mutation-observer-7d01bbea.e6c38b94.js","flip-tile-state-db31345f.fa15ac0c.js"] : void 0, import.meta.url), "./ix-form-field.entry.js": () => __vitePreload(() => import("./ix-form-field.entry.0566cc49.js"), true ? ["ix-form-field.entry.0566cc49.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-group-context-menu_2.entry.js": () => __vitePreload(() => import("./ix-group-context-menu_2.entry.49628d01.js"), true ? ["ix-group-context-menu_2.entry.49628d01.js","index.6624141a.js","index.93cad09a.css","shadow-dom-b9df3d9b.b432e56b.js"] : void 0, import.meta.url), "./ix-group.entry.js": () => __vitePreload(() => import("./ix-group.entry.23e1d8ab.js"), true ? ["ix-group.entry.23e1d8ab.js","index.6624141a.js","index.93cad09a.css","mutation-observer-7d01bbea.e6c38b94.js","shadow-dom-b9df3d9b.b432e56b.js"] : void 0, import.meta.url), "./ix-icon-button_2.entry.js": () => __vitePreload(() => import("./ix-icon-button_2.entry.1d31619b.js"), true ? ["ix-icon-button_2.entry.1d31619b.js","index.6624141a.js","index.93cad09a.css","base-icon-button-8fed3895.5cb1415f.js","base-button-6aa05157.8119ae7b.js"] : void 0, import.meta.url), "./ix-icon-toggle-button.entry.js": () => __vitePreload(() => import("./ix-icon-toggle-button.entry.34af1f4f.js"), true ? ["ix-icon-toggle-button.entry.34af1f4f.js","index.6624141a.js","index.93cad09a.css","base-icon-button-8fed3895.5cb1415f.js","base-button-6aa05157.8119ae7b.js","a11y-d5dd20ad.071fa6c7.js"] : void 0, import.meta.url), "./ix-input-group.entry.js": () => __vitePreload(() => import("./ix-input-group.entry.1cbd65d8.js"), true ? ["ix-input-group.entry.1cbd65d8.js","index.6624141a.js","index.93cad09a.css","shadow-dom-b9df3d9b.b432e56b.js"] : void 0, import.meta.url), "./ix-key-value-list.entry.js": () => __vitePreload(() => import("./ix-key-value-list.entry.759bca0b.js"), true ? ["ix-key-value-list.entry.759bca0b.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-key-value.entry.js": () => __vitePreload(() => import("./ix-key-value.entry.da463d23.js"), true ? ["ix-key-value.entry.da463d23.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-kpi.entry.js": () => __vitePreload(() => import("./ix-kpi.entry.2193283e.js"), true ? ["ix-kpi.entry.2193283e.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-layout-grid.entry.js": () => __vitePreload(() => import("./ix-layout-grid.entry.05c8f85b.js"), true ? ["ix-layout-grid.entry.05c8f85b.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-link-button.entry.js": () => __vitePreload(() => import("./ix-link-button.entry.de239a3d.js"), true ? ["ix-link-button.entry.de239a3d.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-map-navigation-overlay.entry.js": () => __vitePreload(() => import("./ix-map-navigation-overlay.entry.70c4b326.js"), true ? ["ix-map-navigation-overlay.entry.70c4b326.js","index.6624141a.js","index.93cad09a.css","anime.es-185e9087.87a18bcc.js"] : void 0, import.meta.url), "./ix-map-navigation.entry.js": () => __vitePreload(() => import("./ix-map-navigation.entry.1712313b.js"), true ? ["ix-map-navigation.entry.1712313b.js","index.6624141a.js","index.93cad09a.css","anime.es-185e9087.87a18bcc.js","context-6a3bc77f.0b0e7e06.js","typed-event-a230184a.ccfb44d2.js"] : void 0, import.meta.url), "./ix-menu-about-item.entry.js": () => __vitePreload(() => import("./ix-menu-about-item.entry.f326e287.js"), true ? ["ix-menu-about-item.entry.f326e287.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-menu-about-news.entry.js": () => __vitePreload(() => import("./ix-menu-about-news.entry.117b41eb.js"), true ? ["ix-menu-about-news.entry.117b41eb.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-menu-about.entry.js": () => __vitePreload(() => import("./ix-menu-about.entry.3f9ac8f6.js"), true ? ["ix-menu-about.entry.3f9ac8f6.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-menu-avatar.entry.js": () => __vitePreload(() => import("./ix-menu-avatar.entry.ec8aceb3.js"), true ? ["ix-menu-avatar.entry.ec8aceb3.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-menu-category.entry.js": () => __vitePreload(() => import("./ix-menu-category.entry.e3ce13dd.js"), true ? ["ix-menu-category.entry.e3ce13dd.js","index.6624141a.js","index.93cad09a.css","anime.es-185e9087.87a18bcc.js","context-6a3bc77f.0b0e7e06.js","typed-event-a230184a.ccfb44d2.js","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url), "./ix-menu-item.entry.js": () => __vitePreload(() => import("./ix-menu-item.entry.dbeae238.js"), true ? ["ix-menu-item.entry.dbeae238.js","index.6624141a.js","index.93cad09a.css","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url), "./ix-menu-settings-item.entry.js": () => __vitePreload(() => import("./ix-menu-settings-item.entry.233ec221.js"), true ? ["ix-menu-settings-item.entry.233ec221.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-menu-settings.entry.js": () => __vitePreload(() => import("./ix-menu-settings.entry.2d5edf1d.js"), true ? ["ix-menu-settings.entry.2d5edf1d.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-menu.entry.js": () => __vitePreload(() => import("./ix-menu.entry.f94e28a8.js"), true ? ["ix-menu.entry.f94e28a8.js","index.6624141a.js","index.93cad09a.css","anime.es-185e9087.87a18bcc.js","context-6a3bc77f.0b0e7e06.js","typed-event-a230184a.ccfb44d2.js","menu-service-5555b4fa.dde89574.js","breakpoints-b76e9f27.198519d0.js","rwd.util-cfc2ea72.925cc3e0.js","theme-switcher-9ede3823.43047733.js"] : void 0, import.meta.url), "./ix-message-bar.entry.js": () => __vitePreload(() => import("./ix-message-bar.entry.20dc7f55.js"), true ? ["ix-message-bar.entry.20dc7f55.js","index.6624141a.js","index.93cad09a.css","anime.es-185e9087.87a18bcc.js"] : void 0, import.meta.url), "./ix-modal-content.entry.js": () => __vitePreload(() => import("./ix-modal-content.entry.efe0651b.js"), true ? ["ix-modal-content.entry.efe0651b.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-modal-example.entry.js": () => __vitePreload(() => import("./ix-modal-example.entry.bc96f0a3.js"), true ? ["ix-modal-example.entry.bc96f0a3.js","index.6624141a.js","index.93cad09a.css","animation-268dce50.df0d8da4.js","modal-68c6d3f6.b6b54fe0.js","typed-event-a230184a.ccfb44d2.js"] : void 0, import.meta.url), "./ix-modal-footer.entry.js": () => __vitePreload(() => import("./ix-modal-footer.entry.f8fce1bf.js"), true ? ["ix-modal-footer.entry.f8fce1bf.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-modal-header.entry.js": () => __vitePreload(() => import("./ix-modal-header.entry.c43288d6.js"), true ? ["ix-modal-header.entry.c43288d6.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-modal-loading.entry.js": () => __vitePreload(() => import("./ix-modal-loading.entry.27679d19.js"), true ? ["ix-modal-loading.entry.27679d19.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-modal.entry.js": () => __vitePreload(() => import("./ix-modal.entry.6bc02e99.js"), true ? ["ix-modal.entry.6bc02e99.js","index.6624141a.js","index.93cad09a.css","anime.es-185e9087.87a18bcc.js","a11y-d5dd20ad.071fa6c7.js","animation-268dce50.df0d8da4.js"] : void 0, import.meta.url), "./ix-pagination.entry.js": () => __vitePreload(() => import("./ix-pagination.entry.81b9cdfd.js"), true ? ["ix-pagination.entry.81b9cdfd.js","index.6624141a.js","index.93cad09a.css","base-button-6aa05157.8119ae7b.js","a11y-d5dd20ad.071fa6c7.js"] : void 0, import.meta.url), "./ix-pill.entry.js": () => __vitePreload(() => import("./ix-pill.entry.36b10440.js"), true ? ["ix-pill.entry.36b10440.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-push-card.entry.js": () => __vitePreload(() => import("./ix-push-card.entry.7f0442b4.js"), true ? ["ix-push-card.entry.7f0442b4.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-row.entry.js": () => __vitePreload(() => import("./ix-row.entry.465fe5d5.js"), true ? ["ix-row.entry.465fe5d5.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-select.entry.js": () => __vitePreload(() => import("./ix-select.entry.884899be.js"), true ? ["ix-select.entry.884899be.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-slider.entry.js": () => __vitePreload(() => import("./ix-slider.entry.1de2b167.js"), true ? ["ix-slider.entry.1de2b167.js","index.6624141a.js","index.93cad09a.css","a11y-d5dd20ad.071fa6c7.js"] : void 0, import.meta.url), "./ix-split-button-item.entry.js": () => __vitePreload(() => import("./ix-split-button-item.entry.f94e261a.js"), true ? ["ix-split-button-item.entry.f94e261a.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-split-button.entry.js": () => __vitePreload(() => import("./ix-split-button.entry.a32c1f2c.js"), true ? ["ix-split-button.entry.a32c1f2c.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-tab-item_2.entry.js": () => __vitePreload(() => import("./ix-tab-item_2.entry.fd07adf4.js"), true ? ["ix-tab-item_2.entry.fd07adf4.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-tile.entry.js": () => __vitePreload(() => import("./ix-tile.entry.99fb121e.js"), true ? ["ix-tile.entry.99fb121e.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-toast-container.entry.js": () => __vitePreload(() => import("./ix-toast-container.entry.7ac39896.js"), true ? ["ix-toast-container.entry.7ac39896.js","index.6624141a.js","index.93cad09a.css","typed-event-a230184a.ccfb44d2.js"] : void 0, import.meta.url), "./ix-toast.entry.js": () => __vitePreload(() => import("./ix-toast.entry.ed865956.js"), true ? ["ix-toast.entry.ed865956.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-toggle-button.entry.js": () => __vitePreload(() => import("./ix-toggle-button.entry.ca654f2f.js"), true ? ["ix-toggle-button.entry.ca654f2f.js","index.6624141a.js","index.93cad09a.css","base-button-6aa05157.8119ae7b.js","a11y-d5dd20ad.071fa6c7.js"] : void 0, import.meta.url), "./ix-toggle.entry.js": () => __vitePreload(() => import("./ix-toggle.entry.372db1e3.js"), true ? ["ix-toggle.entry.372db1e3.js","index.6624141a.js","index.93cad09a.css","a11y-d5dd20ad.071fa6c7.js"] : void 0, import.meta.url), "./ix-tooltip.entry.js": () => __vitePreload(() => import("./ix-tooltip.entry.c91ae084.js"), true ? ["ix-tooltip.entry.c91ae084.js","index.6624141a.js","index.93cad09a.css","floating-ui.dom.esm-cbe44820.60534149.js"] : void 0, import.meta.url), "./ix-tree-item.entry.js": () => __vitePreload(() => import("./ix-tree-item.entry.dcbdeb80.js"), true ? ["ix-tree-item.entry.dcbdeb80.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-tree.entry.js": () => __vitePreload(() => import("./ix-tree.entry.4674a9ed.js"), true ? ["ix-tree.entry.4674a9ed.js","index.6624141a.js","index.93cad09a.css","_commonjsHelpers-dd6fe9fb.362cc8ba.js"] : void 0, import.meta.url), "./ix-typography.entry.js": () => __vitePreload(() => import("./ix-typography.entry.6a4d97f0.js"), true ? ["ix-typography.entry.6a4d97f0.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-upload.entry.js": () => __vitePreload(() => import("./ix-upload.entry.944f55f2.js"), true ? ["ix-upload.entry.944f55f2.js","index.6624141a.js","index.93cad09a.css","upload-file-state-532a36d3.458c962a.js"] : void 0, import.meta.url), "./ix-validation-tooltip.entry.js": () => __vitePreload(() => import("./ix-validation-tooltip.entry.42fef6bc.js"), true ? ["ix-validation-tooltip.entry.42fef6bc.js","index.6624141a.js","index.93cad09a.css","floating-ui.dom.esm-cbe44820.60534149.js"] : void 0, import.meta.url), "./ix-workflow-step.entry.js": () => __vitePreload(() => import("./ix-workflow-step.entry.addca6a6.js"), true ? ["ix-workflow-step.entry.addca6a6.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url), "./ix-workflow-steps.entry.js": () => __vitePreload(() => import("./ix-workflow-steps.entry.27f258a4.js"), true ? ["ix-workflow-steps.entry.27f258a4.js","index.6624141a.js","index.93cad09a.css","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url), "./my-component.entry.js": () => __vitePreload(() => import("./my-component.entry.cc921e75.js"), true ? ["my-component.entry.cc921e75.js","index.6624141a.js","index.93cad09a.css"] : void 0, import.meta.url) }), `./${bundleId}.entry.js${""}`).then((importedModule) => {
    {
      cmpModules.set(bundleId, importedModule);
    }
    return importedModule[exportName];
  }, consoleError);
};
const styles = /* @__PURE__ */ new Map();
const win = typeof window !== "undefined" ? window : {};
const doc = win.document || { head: {} };
const plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
const promiseResolve = (v) => Promise.resolve(v);
const supportsConstructableStylesheets = /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})();
const queueDomReads = [];
const queueDomWrites = [];
const queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
const consume = (queue) => {
  for (let i = 0; i < queue.length; i++) {
    try {
      queue[i](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
const flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
const nextTick = (cb) => promiseResolve().then(cb);
const writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);
const patchEsm = () => {
  return promiseResolve();
};
const defineCustomElements = (win2, options) => {
  if (typeof window === "undefined")
    return Promise.resolve();
  return patchEsm().then(() => {
    return bootstrapLazy([["ix-icon", [[1, "ix-icon", { "size": [1], "color": [1], "name": [1], "svgContent": [32] }]]]], options);
  });
};
const index_es2017 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  applyPolyfills,
  setNonce,
  defineCustomElements
});
export {
  Host as H,
  h,
  index_es2017 as i,
  registerInstance as r
};
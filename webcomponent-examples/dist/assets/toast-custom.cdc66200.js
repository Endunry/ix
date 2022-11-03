import "./index.c7eba843.js";
import { t as toast } from "./index.4e694bc2.js";
import "./init.eaa5d190.js";
import "./logical-filter-operator-1bf83315.1b3b3530.js";
import "./flip-tile-state-28a1f8ce.23318fa9.js";
import "./modal-8ed87a6c.eb630bb3.js";
import "./typed-event-dd6c83dd.77656892.js";
import "./anime.es-185e9087.87a18bcc.js";
import "./animation-b667a4c4.18fe34bf.js";
import "./upload-file-state-631bb8a2.5434751f.js";
(async function() {
  await window.customElements.whenDefined("ix-toast-container");
  document.getElementById("toastButton").addEventListener("click", async () => {
    const customModal = document.createElement("div");
    const template = document.getElementById("custom-toast");
    const templateContent = template.content;
    customModal.appendChild(templateContent);
    const instance = await toast({
      message: customModal
    });
    customModal.querySelector("ix-button").addEventListener("click", () => {
      instance.close();
    });
  });
})();

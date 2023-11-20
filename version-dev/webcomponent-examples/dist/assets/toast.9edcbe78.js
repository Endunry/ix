import "./index.d3e048f1.js";
import { t as toast } from "./index.48367bdf.js";
import "./init.c43b35ae.js";
import "./logical-filter-operator-92531263.182856a9.js";
import "./flip-tile-state-db31345f.fa15ac0c.js";
import "./upload-file-state-532a36d3.458c962a.js";
import "./modal-68c6d3f6.b6b54fe0.js";
import "./typed-event-a230184a.ccfb44d2.js";
import "./animation-268dce50.df0d8da4.js";
import "./theme-switcher-9ede3823.43047733.js";
(async function() {
  await window.customElements.whenDefined("ix-toast-container");
  document.getElementById("toastButton").addEventListener("click", () => {
    toast({
      message: "My toast message!"
    });
  });
})();
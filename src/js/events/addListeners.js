import { state } from "../state.js";
import { renderUI } from "../render/renderUI.js";
import { dom } from "../dom.js";
export function addListeners() {
  dom.categoryListElement.addEventListener("click", (event) => {
    const card = event.target.closest("[data-action=select-category]");
    if (!card) return;
    if (card.dataset.categoryId === state.selectedCategoryID) {
      state.selectedCategoryID = null;
      state.selectedItemID = null;
      return;
    }
    state.selectedCategoryID = card.dataset.categoryId;
    state.selectedItemID = null;
    renderUI();
  });
  dom.menuElement.addEventListener("click", (event) => {
    const item = event.target.closest("[data-action=select-item]");
    if (!item) return;
    if (state.selectedItemID === item.dataset.itemId) {
      state.selectedItemID = null;
    } else {
      state.selectedCategoryID = item.dataset.categoryId;
      state.selectedItemID = item.dataset.itemId;
    }
    renderUI();
  });
  dom.editButton.addEventListener("click", () => {
    document.body.dataset.mode =
      document.body.dataset.mode === "edit" ? "view" : "edit";
  });
}

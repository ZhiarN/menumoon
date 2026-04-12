import { state } from "../state/store.js";
import { dom } from "../utils/dom.js";
import { updateState } from "../actions/updateState.js";
export function addListeners() {
  if (dom.categoryListElement) {
    dom.categoryListElement.addEventListener("click", (event) => {
      const category = event.target.closest("[data-action=select-category]");
      if (!category) return;
      if (category.dataset.categoryId === state.selectedCategoryID) {
        updateState({
          selectedCategoryID: null,
          selectedItemID: null,
        });
        return;
      }
      updateState({
        selectedCategoryID: category.dataset.categoryId,
        selectedItemID: null,
      });
    });
  } else {
    console.warn("categoryListElement missing, category clicks disabled.");
  }
  if (dom.menuElement) {
    dom.menuElement.addEventListener("click", (event) => {
      const item = event.target.closest("[data-action=select-item]");
      if (!item) return;
      if (state.selectedItemID === item.dataset.itemId) {
        updateState({ selectedItemID: null });
      } else {
        updateState({ selectedItemID: item.dataset.itemId });
      }
    });
  } else {
    console.warn("menuElement missing, menu clicks disabled.");
  }
  if (dom.editButton) {
    dom.editButton.addEventListener("click", () => {
      updateState({ isEditMode: !state.isEditMode });
    });
  } else {
    console.warn("editButton missing, edit mode toggling disabled.");
  }
}

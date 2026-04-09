import { renderCategories } from "./renderCategories.js";
import { renderMenu } from "./renderMenu.js";
import { state } from "../state/store.js";
export function renderUI() {
  document.body.dataset.mode = state.isEditMode ? "edit" : "view";
  const selectedCategory =
    state.categories.find((cat) => cat.id === state.selectedCategoryID) ||
    state.categories[0];
  renderCategories(state?.categories ?? []);

  renderMenu(selectedCategory?.items ?? []);
}

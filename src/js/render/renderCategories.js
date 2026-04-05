import { state } from "../state.js";
import { dom } from "../dom.js";
export function renderCategories() {
  if (!Array.isArray(state.categories) || state.categories.length === 0) {
    dom.categoryNavElement.textContent = "NO CATEGORIES TO SHOW";
    return;
  }
  dom.categoryListElement.innerHTML = state.categories
    .map(
      (cat) => `
      <li class="category-list__item">
        <button
        data-category-id="${cat.id}"
        class="category-list__button ${cat.id === state.selectedCategoryID ? "is-selected" : ""} ${cat.id === state.selectedCategoryID && state.editModeOn ? "is-editing" : ""}"
        data-action="select-category"
        >
        <img class="category-list__image" src="${cat.image}" alt="${cat.name} category">
        <span class="category-list__name">${cat.name}</span>
        </button>
      </li>`,
    )
    .join("");
}

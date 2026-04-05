import { state } from "../state.js";
import { categoryListElement } from "../dom.js";
export function renderCategories() {
  const categoryNavElement = document.querySelector(".category-nav");
  if (!Array.isArray(state.categories) || state.categories.length === 0) {
    categoryNavElement.textContent = "NO CATEGORIES TO SHOW";
    return;
  }
  categoryListElement.innerHTML = state.categories
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

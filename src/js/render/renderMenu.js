import { state } from "../state.js";
import { menuElement } from "../dom.js";
export function renderMenu() {
  if (state.selectedCategoryID == null)
    return (menuElement.textContent = "NO ITEM TO SHOW");
  const category = state.categories.find(
    (cat) => cat.id === state.selectedCategoryID,
  );
  if (!category || !category.items || category.items.length === 0) {
    menuElement.textContent = "NO ITEM TO SHOW";
    return;
  }
  menuElement.innerHTML = category.items
    .map(
      (item) => `
  <article class="item-card" data-category-id="${state.selectedCategoryID}" data-item-id="${item.id}" data-action="select-item">
  <img alt="${item.name}" class="item-card__image" src="${item.image}">
  <div class="item-card__info">
  <h3 class="item-card__name">${item.name}</h3>
  <data class="item-card__price" value="${item.price}">${item.price} IRT</data>
  </div>
  </article>`,
    )
    .join("");
}

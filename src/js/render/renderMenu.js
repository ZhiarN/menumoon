import { state } from "../state.js";
import { dom } from "../dom.js";
export function renderMenu() {
  if (state.selectedCategoryID == null)
    return (dom.menuElement.textContent = "NO ITEM TO SHOW");
  const category = state.categories.find(
    (cat) => cat.id === state.selectedCategoryID,
  );
  if (!category || !category.items || category.items.length === 0) {
    dom.menuElement.textContent = "NO ITEM TO SHOW";
    return;
  }
  dom.menuElement.innerHTML = category.items
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

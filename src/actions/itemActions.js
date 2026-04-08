import { state } from "../state/stpre.js";
import { renderUI } from "../render/renderUI.js";
export function removeItem() {
  if (state.selectedItemID == null) return alert("No Item Selected");
  const category = state.categories.find(
    (cat) => cat.id === state.selectedCategoryID,
  );
  const index = category.items.findIndex(
    (item) => item.id === state.selectedItemID,
  );
  if (index === -1) return;
  category.items.splice(index, 1);
  state.selectedItemID = null;
  renderUI();
}

export function addItem(newItemName, newItemPrice, newItemImage) {
  if (state.selectedCategoryID == null) {
    alert("No Category Selected");
    return;
  }
  const category = state.categories.find(
    (cat) => cat.id === state.selectedCategoryID,
  );

  const newItem = {
    id: `${category.id}_item${category.items.length + 1}`,
    name: newItemName,
    price: newItemPrice,
    image: newItemImage,
  };

  category.items.push(newItem);
  renderUI();
}

import { state } from "../state.js";
import { menuElement } from "../dom.js";
import { renderUI } from "../render/renderUI.js";
export function removeCategory() {
  if (state.selectedCategoryID == null) return alert("No Category Selected");
  const category = state.categories.findIndex(
    (cat) => cat.id === state.selectedCategoryID,
  );
  if (category == -1) return;
  state.categories.splice(category, 1);
  state.selectedCategoryID = null;
  menuElement.innerHTML = "";
  renderUI();
}

export function addCategory(newName, newImage) {
  const newCategory = {
    id: `cat${state.categories.length + 1}`,
    name: newName,
    image: newImage,
    items: [],
  };
  state.categories.push(newCategory);
  renderUI();
}

import { renderUI } from "../render/renderUI.js";
import { menuStore } from "../state/menuStore.js";
import { state } from "../state/store.js";

export function removeCategory(categoryId) {
	if (categoryId == null) return console.error("No category element selected for removing.");
	const index = menuStore.categories.findIndex(
		(cat) => cat.id === categoryId
	);
	if (index === -1) return;
	menuStore.categories.splice(index, 1);
	state.editingCategoryID = null;
	renderUI();
}

export function addCategory(newName, newImage) {
	const newCategory = {
		id: crypto.randomUUID(),
		name: newName,
		image: newImage,
	};
	menuStore.categories.push(newCategory);
	renderUI();
}

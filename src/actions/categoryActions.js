import { renderUI } from "../render/renderUI.js";
import { state } from "../state/store.js";

export function removeCategory(categoryId) {
	if (categoryId == null) return console.error("No category element selected for removing.");
	const index = state.categories.findIndex(
		(cat) => cat.id === categoryId
	);
	if (index === -1) return;
	state.categories.splice(index, 1);
	state.editingCategoryID = null;
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

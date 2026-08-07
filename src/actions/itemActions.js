import { renderUI } from "../render/renderUI.js";
import { state } from "../state/store.js";
export function removeItem(categoryId, itemId) {
	if (!itemId || !categoryId) {
		console.error("No category or item selected.");
		return;
	}
	const category = state.categories.find(
		(cat) => cat.id === categoryId,
	);
	if (!category) return;
	const index = category.items.findIndex(
		(item) => item.id === itemId
	);
	if (index === -1) return;
	category.items.splice(index, 1);
	state.editingItemID = null;
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

import { renderUI } from "../render/renderUI.js";
import { menuStore } from "../state/menuStore.js";
import { state } from "../state/store.js";

export function removeItem(itemId) {
	if (!itemId) {
		console.error("No category or item selected.");
		return;
	}
	const index = menuStore.items.findIndex(
		(item) => item.id === itemId
	);
	if (index === -1) return;
	menuStore.items.splice(index, 1);
	state.editingItemID = null;
	renderUI();
}

export function addItem(newItemName, newItemPrice, newItemImage) {
	const categoryId = state.selectedCategoryID;
	const newItem = {
		id: crypto.randomUUID(),
		categoryId: categoryId,
		name: String(newItemName),
		price: Number(newItemPrice),
		image: String(newItemImage),
	};

	menuStore.items.push(newItem);
	renderUI();
	
}

import { ItemCard } from "../components/ItemCard/ItemCard.js";
import { state } from "../state/store.js";
import { dom } from "../utils/dom.js";
export function renderMenu(items) {
	if (!dom.menuElement) {
		console.error("menuElement missing");
		return;
	}
	const frag = document.createDocumentFragment();
	if (!Array.isArray(items) || items.length === 0) {
		const emptyItemsState = document.createElement("p")
		emptyItemsState.textContent = "NO ITEM TO SHOW";
		frag.append(emptyItemsState)
	} else {
for (const item of items) {
		frag.append(ItemCard(item));
	}
	}
	
	if (state.isEditMode) {
		const addItemCard = dom.addNewButtonTemplate.content.cloneNode(true).firstElementChild;
		addItemCard.dataset.action = "open-new-item-modal";
		frag.append(addItemCard)
		
	}
	dom.menuElement.replaceChildren(frag);
	
}

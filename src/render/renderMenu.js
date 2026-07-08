import { ItemCard } from "../components/ItemCard/ItemCard.js";
import { dom } from "../utils/dom.js";
export function renderMenu(items) {
	if (!dom.menuElement) {
		console.error("menuElement missing");
		return;
	}
	if (!Array.isArray(items) || items.length === 0) {
		dom.menuElement.textContent = "NO ITEM TO SHOW";
		return;
	}
	const frag = document.createDocumentFragment();
	for (const item of items) {
		frag.append(ItemCard(item));
	}
	dom.menuElement.replaceChildren(frag);
}

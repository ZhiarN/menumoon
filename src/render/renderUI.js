import { menuStore } from "../state/menuStore.js";
import { state } from "../state/store.js";
import { renderCategories } from "./renderCategories.js";
import { renderMenu } from "./renderMenu.js";

export function renderUI() {
	const categories = menuStore?.categories;
	if (!categories) return console.error("Menu is empty. default menu failed to load.")
		renderCategories(menuStore.categories);
	const selectedCategory =
	menuStore.categories.find((cat) => cat.id === state.selectedCategoryID) ||
	menuStore.categories[0];
		if (!selectedCategory) {
			renderMenu([]);
			return;
		}

		const items = menuStore.items?.filter(item => item.categoryId === selectedCategory.id);
	renderMenu(items);
}

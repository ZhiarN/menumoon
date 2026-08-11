import { menuStore } from "../state/menuStore.js";
import { state } from "../state/store.js";
import { renderCategories } from "./renderCategories.js";
import { renderMenu } from "./renderMenu.js";

export function renderUI() {
	console.log(menuStore)
	const selectedCategory =
		menuStore.find((cat) => cat.id === state.selectedCategoryID) ||
		menuStore[0];

	renderCategories(menuStore ?? []);
	renderMenu(selectedCategory?.items ?? []);
}

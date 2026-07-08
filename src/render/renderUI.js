import { state } from "../state/store.js";
import { renderCategories } from "./renderCategories.js";
import { renderMenu } from "./renderMenu.js";

export function renderUI() {
	const selectedCategory =
		state.categories.find((cat) => cat.id === state.selectedCategoryID) ||
		state.categories[0];
	renderCategories(state?.categories ?? []);

	renderMenu(selectedCategory?.items ?? []);
}

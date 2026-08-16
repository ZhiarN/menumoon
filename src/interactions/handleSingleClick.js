import { removeCategory } from "../actions/categoryActions.js";
import {removeItem} from "../actions/itemActions.js"
import { updateState } from "../actions/updateState.js";
import { state } from "../state/store.js";
export function handleSingleClick(card) {
	const action = card.dataset.action;
	switch (action) {
		case "select-category": {
			const id = card.dataset.categoryId;
			const isSame = id === state.selectedCategoryID;
			updateState({
				selectedCategoryID: isSame ? null : id,
				selectedItemID: null,
			});
			return;
		}

		case "select-item": {
			const id = card.dataset.itemId;
			const isSame = id === state.selectedItemID;

			state.selectedItemID = isSame ? "null" : id;
			return;
		}
		case "remove-category": {
			removeCategory(state.editingCategoryID);
			return;
		}

		case "remove-item": {
			removeItem(state.editingItemID);
			return;
		}

		default:
			return;
	}
}

import { removeCategory } from "../actions/categoryActions.js";
import {removeItem} from "../actions/itemActions.js"
import { openNewCategoryModal } from "../actions/openNewCategoryModal.js";
import { openItemModal } from "../actions/openItemModal.js";
import { updateState } from "../actions/updateState.js";
import { state } from "../state/store.js";
import openNewItemModal from "../actions/openNewItemModal.js";
export function handleSingleClick(card) {
	const action = card.dataset.action;
	switch (action) {
		case "select-category": {
			const id = card.dataset.categoryId;
			const isSame = id === state.selectedCategoryID;
			if (isSame) return;
			updateState({
				selectedCategoryID: id,
				selectedItemID: null,
			});
			return;
		}

		case "select-item": {
			const id = card.dataset.itemId;
			const isSame = id === state.selectedItemID;
			if (isSame) return;
			updateState({
			selectedItemID : id,
			});
			return;
		}
		case "remove-category": {
			removeCategory(state.editingCategoryID);
			const dialog = document.body.querySelector("dialog");
			dialog.close()
			dialog.remove()
			return;
		}

		case "remove-item": {
			removeItem(state.editingItemID);
			const dialog = document.body.querySelector("dialog");
			dialog.close()
			dialog.remove()
			return;
		}
		case "open-new-category-modal": {
			openNewCategoryModal();
			return;
		}
		case "open-new-item-modal": {
			openNewItemModal();
			return;
		}

		default:
			return;
	}
}

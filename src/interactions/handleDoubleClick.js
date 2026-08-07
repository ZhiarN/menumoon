import { openCategoryModal } from "../actions/openCategoryModal.js";
import { openItemModal } from "../actions/openItemModal.js";
import { updateState } from "../actions/updateState.js";
import { state } from "../state/store.js";

export function handleDoubleClick(card) {
	if (!state.isEditMode) return;
	const action = card.dataset.action;
	if (action === "select-category") {
		openCategoryModal(card);
		updateState({editingCategoryID: card.dataset.categoryId})
		return;
	}
	if (action === "select-item") {
		openItemModal(card);
		updateState({editingItemID: card.dataset.itemId,
			editingCategoryID: card.dataset.categoryId
		});
		return;
	}
}

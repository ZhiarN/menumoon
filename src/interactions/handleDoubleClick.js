import { state } from "../state/store.js";
import { openItemModal } from "../actions/openItemModal.js";
import { openCategoryModal } from "../actions/openCategoryModal.js";
import { CARD_SCHEMA } from "../utils/CardSchema.js";

export function handleDoubleClick(card) {
  if (!state.isEditMode) return;
  const action = card.dataset.action;
  if (action === CARD_SCHEMA.CATEGORY.action) {
    openCategoryModal(card);
    return;
  }
  if (action === CARD_SCHEMA.ITEM.action) {
    console.log("MODAL");
    openItemModal(card);
    return;
  }
}

import { state } from "../state/store.js";
import { updateState } from "../actions/updateState.js";
import { CARD_SCHEMA } from "../utils/CardSchema.js";

export function handleSingleClick(card) {
  const action = card.dataset.action;

  switch (action) {
    case "select-category": {
      const id = CARD_SCHEMA.CATEGORY.idKey;
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

    default:
      return;
  }
}

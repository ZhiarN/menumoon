import { menuStore } from "../state/menuStore.js";
import { state } from "../state/store.js";
export function toggleEditmode() {
	state.isEditMode = !state.isEditMode;
	document.body.dataset.mode = state.isEditMode ? "edit" : "view";
}

import { state } from "../state/store.js";
import { toggleCreateButtons } from "./toggleCreateButtons.js";
export function toggleEditmode() {
	state.isEditMode = !state.isEditMode;
	document.body.dataset.mode = state.isEditMode ? "edit" : "view";
	toggleCreateButtons();
}

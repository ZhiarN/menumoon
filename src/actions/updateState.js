import { renderUI } from "../render/renderUI.js";
import { state } from "../state/store.js";
export function updateState(patch) {
	Object.assign(state, patch);
	renderUI();
}

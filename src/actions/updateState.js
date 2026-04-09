import { state } from "../state/store.js";
import { renderUI } from "../render/renderUI.js";
export function updateState(patch) {
  Object.assign(state, patch);
  renderUI();
}

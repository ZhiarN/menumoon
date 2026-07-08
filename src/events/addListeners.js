// listeners/addListeners.js

import { handleDoubleClick } from "../interactions/handleDoubleClick.js";
import { handleSingleClick } from "../interactions/handleSingleClick.js";
import { detectClick } from "../utils/detectClick.js";
import { dom } from "../utils/dom.js";
import { toggleEditmode } from "../utils/toggleEditmode.js";
export function addListeners() {
	dom.appRoot.addEventListener("click", (event) => {
		const target = event.target.closest("[data-action]");

		if (!target) return;

		const action = target.dataset.action;

		if (action === "toggle-edit") {
			toggleEditmode();
			return;
		}

		detectClick(target, handleSingleClick, handleDoubleClick);
	});
}

import { STORAGE_KEY } from "../data/storageKey.js";
import { handleDoubleClick } from "../interactions/handleDoubleClick.js";
import { handleSingleClick } from "../interactions/handleSingleClick.js";
import { detectClick } from "../utils/detectClick.js";
import { repository } from "../data/repository.js";
import { toggleEditmode } from "../utils/toggleEditmode.js";
import { dom } from "../utils/dom.js";
import { menuStore } from "../state/menuStore.js";

export function addListeners() {
	dom.appRoot.addEventListener("click", (event) => {
		const target = event.target.closest("[data-action]");

		if (!target) return;

		const action = target.dataset.action;

		if (action === "toggle-edit") {
			toggleEditmode();
			return;
		}

		if (action === "save-changes") {
			repository.saveMenu(STORAGE_KEY, menuStore)
			console.log("Menu saved to database.")
		}

		detectClick(target, handleSingleClick, handleDoubleClick);
	});
}

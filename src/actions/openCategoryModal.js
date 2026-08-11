import { dom } from "../utils/dom.js";
export function openCategoryModal(card) {
	const template = dom.categoryModalTemplate;
	const dialog = template.content.cloneNode(true).firstElementChild;
	const el = {
		root: dialog,
		categoryName: dialog.querySelector("[data-fill=name]"),
	};
	const close = () => {
		dialog.close();
		document.getElementById("category-modal")?.remove();
	};
	dialog.querySelector(".modal-close").addEventListener("click", close);
	dialog.querySelector(".modal-cancel").addEventListener("click", close);
	if (card) {
		el.categoryName.value = card.dataset.categoryName;
	}

	document.body.appendChild(el.root);
	document.getElementById("category-modal").showModal();
}

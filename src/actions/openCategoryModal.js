import { dom } from "../utils/dom.js";
export function openCategoryModal(card) {
	console.log(Object.keys(card));
	document.querySelector(".category-modal")?.remove();
	const template = dom.categoryModalTemplate;
	const dialog = template.content.cloneNode(true).firstElementChild;
	const el = {
		root: dialog,
		categoryName: dialog.querySelector("[data-fill=name]"),
	};
	const close = () => dialog.close();
	dialog.querySelector(".modal-close").addEventListener("click", close);
	dialog.querySelector(".modal-cancel").addEventListener("click", close);
	if (card) {
		el.categoryName.value = card.dataset.categoryName;
	}

	document.body.appendChild(el.root);
	document.querySelector(".category-modal").showModal();
}

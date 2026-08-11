import { dom } from "../utils/dom.js";
export function openItemModal(card) {
	const template = dom.itemModalTemplate;
	const dialog = template.content.cloneNode(true).firstElementChild;
	const el = {
		root: dialog,
		itemName: dialog.querySelector("[data-fill=name]"),
		itemPrice: dialog.querySelector("[data-fill=price]"),
	};
	el.itemName.value = card.dataset.itemName;
	el.itemPrice.value = card.dataset.itemPrice;

	const close = () => {
		dialog.close();
		document.getElementById("item-modal").remove();
	};
	dialog.querySelector(".modal-close").addEventListener("click", close);
	dialog.querySelector(".modal-cancel").addEventListener("click", close);
	document.body.appendChild(el.root);
	document.getElementById("item-modal").showModal();
}

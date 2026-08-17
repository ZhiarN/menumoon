import { dom } from "../utils/dom.js";
import { fileToDataURL } from "../utils/fileToDataURL.js";
import { updateItem } from "./updateItem.js";
export function openItemModal(card) {
	const template = dom.itemModalTemplate;
	const dialog = template.content.cloneNode(true).firstElementChild;
	const modal = {
		root: dialog,
		itemImageInput: dialog.querySelector("[data-fill=image]"),
		itemImagePreview: dialog.querySelector(".image-preview"),
		itemNameInput: dialog.querySelector("[data-fill=name]"),
		itemPriceInput: dialog.querySelector("[data-fill=price]"),
	};
	if (card) {
	modal.itemNameInput.value = card.dataset.itemName;
	modal.itemPriceInput.value = card.dataset.itemPrice;
	modal.itemImagePreview.src = card.querySelector(".item-card__image").src;
	}
	modal.itemImageInput.addEventListener("change", () => {
		const file = modal.itemImageInput.files[0];
		modal.itemImagePreview.src = URL.createObjectURL(file)
	})

	const close = () => {
		dialog.close();
		dialog.remove();
	};
	dialog.querySelector(".modal-close").addEventListener("click", close);
	dialog.querySelector(".modal-cancel").addEventListener("click", close);
	dialog.addEventListener("submit", async (event) => {
		event.preventDefault();
		const file = modal.itemImageInput.files[0];
		const newImageUrl = await fileToDataURL(file);
		const newName = modal.itemNameInput.value;
		const newPrice = modal.itemPriceInput.value;
		updateItem(card.dataset.itemId, newName, newPrice, newImageUrl)
		close();
	})
	document.body.appendChild(dialog);
	dialog.showModal();
}

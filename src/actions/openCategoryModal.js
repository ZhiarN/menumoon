import { dom } from "../utils/dom.js";
import { fileToDataURL } from "../utils/fileToDataURL.js";
import { updateCategory } from "./updateCategory.js";
export function openCategoryModal(card) {
	const template = dom.categoryModalTemplate;
	const dialog = template.content.cloneNode(true).firstElementChild;
	    const modal = {
        root: dialog,
        modalTitle: dialog.querySelector("#category-modal-title"),
        categoryNameInput: dialog.querySelector("[data-fill=name]"),
        submitButton: dialog.querySelector(".modal-submit"),
		imageInput: dialog.querySelector("#category-image-input"),
		imagePreview: dialog.querySelector(".image-preview")
    };
	if (card) {
		modal.categoryNameInput.value = card.dataset.categoryName;
		const imageUrl = card.querySelector(".category-card__image").src;
		modal.imagePreview.src = imageUrl ;
	}
	modal.imageInput.addEventListener("change", () => {
		const file = modal.imageInput.files[0];
		if (!file) return;
		const imageUrl = URL.createObjectURL(file);
		modal.imagePreview.src = imageUrl;
		modal.imagePreview.onload = () => {
			URL.revokeObjectURL(imageUrl)
		}
	})
	modal.modalTitle.textContent = "Edit Category";
	modal.submitButton.textContent = "Update";

	const close = () => {
		dialog.close();
		dialog.remove();
	};
	
	dialog.querySelector(".modal-close").addEventListener("click", close);
	dialog.querySelector(".modal-cancel").addEventListener("click", close);

	dialog.addEventListener("submit", async (event) => {
		event.preventDefault();
		const file = modal.imageInput.files[0];
		const newName = modal.categoryNameInput.value
    	const newImageUrl = file ? await fileToDataURL(file) : undefined;
		updateCategory(card.dataset.categoryId, newName, newImageUrl)
		close();
	})

	document.body.appendChild(dialog);
	dialog.showModal();
}

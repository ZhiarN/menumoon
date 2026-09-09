import { dom } from "../utils/dom.js";
import { fileToDataURL } from "../utils/fileToDataURL.js";
import { addCategory } from "./categoryActions.js";
export function openNewCategoryModal() {
    const template = dom.categoryModalTemplate;
    const dialog = template.content.cloneNode(true).firstElementChild;
    const modal = {
        root: dialog,
        modalTitle: dialog.querySelector("#category-modal-title"),
        categoryName: dialog.querySelector("[data-fill=name]"),
        submitButton: dialog.querySelector(".modal-submit"),
        trashIcon: dialog.querySelector(".trash-icon"),
        imageInput: dialog.querySelector("#category-image-input"),
		imagePreview: dialog.querySelector(".image-preview")
    };
    modal.imageInput.addEventListener("change", () => {
		const file = modal.imageInput.files[0];
		if (!file) return;
		modal.imagePreview.src = URL.createObjectURL(file);
	})
    modal.modalTitle.textContent = "Add Category";
    modal.submitButton.textContent = "Create";
    modal.trashIcon.hidden = true;
    const close = () => {
        dialog.close();
        dialog.remove();
    };
    dialog.querySelector(".modal-close").addEventListener("click", close);
    dialog.querySelector(".modal-cancel").addEventListener("click", close);
    dialog.addEventListener("submit", async (event) => {
        event.preventDefault();
        const file = modal.imageInput.files[0];
        const image = await fileToDataURL(file);
        const name = modal.categoryName.value
        addCategory(name, image);
        close();
    })
    document.body.appendChild(dialog);
    dialog.showModal();
}

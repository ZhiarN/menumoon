import { dom } from "../utils/dom";
import {addItem} from "../actions/itemActions.js";
import {fileToDataURL} from "../utils/fileToDataURL.js";
import { state } from "../state/store.js";

export default function openNewItemModal() {
    if (!state.selectedCategoryID) {
        console.error("Select a category to add an item to...");
        return;
    }
const dialog = dom.itemModalTemplate.content.cloneNode(true).firstElementChild;
    const modal = {
        root: dialog,
        modalTitle: dialog.querySelector("#item-modal-title"),
        itemName: dialog.querySelector("[data-fill=name]"),
        itemPrice: dialog.querySelector("[data-fill=price"),
        submitButton: dialog.querySelector(".modal-submit"),
        trashIcon: dialog.querySelector(".trash-icon"),
        imageInput: dialog.querySelector("#item-image-input"),
        imagePreview: dialog.querySelector(".image-preview")
    };
    modal.imageInput.addEventListener("change", () => {
        const file = modal.imageInput.files[0];
        if (!file) return;
        modal.imagePreview.src = URL.createObjectURL(file);
    })
    modal.modalTitle.textContent = "Add Item";
    modal.submitButton.textContent = "Create";
    modal.trashIcon.hidden   = true;
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

        const name = modal.itemName.value;
        const price = modal.itemPrice.value;
        addItem(name, price, image)
                close();
    })
document.body.appendChild(dialog)
dialog.showModal();
}
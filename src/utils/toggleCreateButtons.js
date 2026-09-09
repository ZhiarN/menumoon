import { state } from "../state/store";
import { dom } from "./dom";

export function toggleCreateButtons() {
    const existingButton = document.querySelectorAll(".add-button");
    console.log(existingButton)
    if (state.isEditMode) {
        if (existingButton.length > 0) return;
        const template = dom.addNewButtonTemplate;
    const addCateogryCard = template.content.cloneNode(true).firstElementChild;
    const addItemCard = template.content.cloneNode(true).firstElementChild;
    addItemCard.dataset.action = "open-new-item-modal";
    dom.categoryListElement.append(addCateogryCard)
    dom.menuElement.append(addItemCard)
    
    }
    else {
existingButton.forEach((button) => {
    button.remove();
})
    }
    
}
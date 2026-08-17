import { renderUI } from "../render/renderUI";
import { menuStore } from "../state/menuStore";

export function updateCategory(categoryId, newName, newImageUrl) {
    if (!categoryId) {
        console.error("No category id!")
        return;
    }
    if (!newName && !newImageUrl) {
        console.log("No new information provided. Update changed nothing.")
        return;
    }
    const category = menuStore.categories.find(category => category.id === categoryId);
    category.name = newName;
    category.image = newImageUrl;
    renderUI();
}   
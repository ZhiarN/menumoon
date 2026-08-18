import { renderUI } from "../render/renderUI";
import { menuStore } from "../state/menuStore";

export function updateCategory(categoryId, newName, newImageUrl) {
    const category = menuStore.categories.find(category => category.id === categoryId);
    if (!category) {
        console.error("Category not found!")
        return;
    }
    category.name = newName;
    if (newImageUrl !== undefined) {
    category.image = newImageUrl;

    }
    renderUI();
}   
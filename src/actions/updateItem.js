import { renderUI } from "../render/renderUI";
import { menuStore } from "../state/menuStore";

export function updateItem(itemId, newName, newPrice, newImageUrl) {
    const item = menuStore.items.find(item => item.id === itemId);
    if (!item) {
        return;
    }
    item.name = newName;
    item.price = newPrice;
    if (newImageUrl !== undefined) {
    item.image = newImageUrl;
    }
    renderUI()
}
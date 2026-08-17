import { renderUI } from "../render/renderUI";
import { menuStore } from "../state/menuStore";

export function updateItem(itemId, newName, newPrice, newImageUrl) {
    const item = menuStore.items.find(item => item.id === itemId);
    item.name = newName;
    item.price = newPrice;
    item.image = newImageUrl;
    renderUI()
}
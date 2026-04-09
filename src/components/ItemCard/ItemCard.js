import { dom } from "../../utils/dom.js";
export function ItemCard(item) {
  const { id, name, price, image } = item;
  const template = dom.itemTemplate;
  const card = template.content.cloneNode(true).firstElementChild;
  const el = {
    root: card,
    img: card.querySelector(".item-card__image"),
    name: card.querySelector(".item-card__name"),
    price: card.querySelector(".item-card__price"),
  };
  if (!el.root || !el.img || !el.name || !el.price) {
    throw new Error("ItemCard template is missing required elements");
  }
  el.root.setAttribute("data-item-id", id);
  el.root.dataset.action = "select-item";
  el.img.src = image || "/src/media/item-placeholder.webp";
  el.img.alt = name;
  el.name.textContent = name;
  const priceValue = Number(price) || 0;
  el.price.textContent = priceValue.toLocaleString();
  return el.root;
}

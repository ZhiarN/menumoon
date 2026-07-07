import { dom } from "../../utils/dom.js";
export function CategoryCard(category) {
  const { id, image, name } = category;
  const template = dom.categoryTemplate;
  if (!template) throw new Error("CategoryCard template not found!");
  const card = template.content.cloneNode(true).firstElementChild;
  const el = {
    root: card,
    categoryCard: card.querySelector(".category-card"),
    img: card.querySelector(".category-card__image"),
    name: card.querySelector(".category-card__name"),
  };
  if (!el.root || !el.categoryCard || !el.img || !el.name) {
    throw new Error("CategoryCard template is missing required elelemnts");
  }
  el.categoryCard.setAttribute("data-category-id", id);
  el.img.src = image || "/src/media/category-placeholder.webp";
  el.img.alt = name;
  el.name.textContent = name;
  return el.root;
}

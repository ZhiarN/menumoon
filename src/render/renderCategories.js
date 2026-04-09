import { CategoryCard } from "../components/CategoryCard/CategoryCard.js";
import { dom } from "../utils/dom.js";
export function renderCategories(categories) {
  if (!dom.categoryListElement) {
    console.error("categoryListElement missing");
    return;
  }
  if (!Array.isArray(categories) || categories.length === 0) {
    dom.categoryListElement.textContent = "NO CATEGORY INFORMATION STORED";
    return;
  }
  const frag = document.createDocumentFragment();
  for (const category of categories) {
    frag.append(CategoryCard(category));
  }
  dom.categoryListElement.replaceChildren(frag);
}

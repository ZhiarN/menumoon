const categoryListDiv = document.querySelector(".categoryList");
const menuDiv = document.querySelector(".menu");
let categoryID;
const categories = [
  {
    id: "cat1",
    name: "Main Dish",
    items: [
      { id: "item1", name: "Steak", price: 20 },
      { id: "item2", name: "Erbazzone", price: 20 },
    ],
    image: "media/categoryIconDefault.svg",
  },
  {
    id: "cat2",
    name: "Fast Food",
    image: "media/categoryIconDefault.svg",
    items: [],
  },
  {
    id: "cat3",
    name: "Burgers",
    image: "media/categoryIconDefault.svg",
    items: [],
  },
  {
    id: "cat4",
    name: "Sandwiches",
    image: "media/categoryIconDefault.svg",
    items: [],
  },
  {
    id: "cat5",
    name: "Beverages",
    image: "media/categoryIconDefault.svg",
    items: [],
  },
  {
    id: "cat6",
    name: "Pasta",
    image: "media/categoryIconDefault.svg",
    items: [],
  },
  {
    id: "cat7",
    name: "Breakfast",
    image: "media/categoryIconDefault.svg",
    items: [],
  },
  {
    id: "cat8",
    name: "Dessert",
    image: "media/categoryIconDefault.svg",
    items: [],
  },
];
renderCategories(categories);
categoryListDiv.addEventListener("click", (event) => {
  target = event.target.closest("div");
  if (!target.classList.contains("categoryItemCard")) return;
  selectCategory(target);
});
function selectCategory(target) {
  const isSelected = target.classList.contains("selected");
  const selectedCategory = document.querySelector(".selected");
  categoryID = target.dataset.id;
  console.log("ID: " + categoryID);
  if (isSelected) {
    target.classList.remove("selected");
  } else {
    if (selectedCategory) {
      selectedCategory.classList.remove("selected");
    }
    target.classList.add("selected");
  }
}

function renderCategories(categories) {
  categoryListDiv.innerHTML = "";
  categories.forEach((category) => {
    const catContainer = document.createElement("div");
    catContainer.className = "categoryItemCard";
    catContainer.dataset.id = category.id;
    const img = document.createElement("img");
    img.className = "categoryImg";
    img.src = category.image;
    img.alt = category.name;
    const title = document.createElement("p");
    title.className = "categoryTitle";
    title.textContent = category.name;
    catContainer.appendChild(img);
    catContainer.appendChild(title);
    categoryListDiv.appendChild(catContainer);
  });
}

const categoryListDiv = document.querySelector(".categoryList");
const menuDiv = document.querySelector(".menu");
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
  const card = event.target.closest(".categoryItemCard");
  if (!card) return;
  selectCategory(card.dataset.id);
});
function selectCategory(categoryID) {
  const selectedCategoryId = categoryID
  document.querySelectorAll(".categoryItemCard").forEach(card => {
    card.classList.toggle("selected", card.dataset.id === selectedCategoryId);
  });
  
  };

function renderMenuItems(categoryID) {
menuDiv.innerHTML = ""
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

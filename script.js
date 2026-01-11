const categoryListDiv = document.querySelector(".categoryList");
const menuDiv = document.querySelector(".menu");
const wrapper = document.querySelector(".wrapper");
const categories = [
  {
    id: "cat1",
    name: "Main Dish",
    items: [
      {
        id: "item1",
        name: "Steak",
        price: 20,
        image: "media/categoryIconDefault.svg",
      },
      {
        id: "item2",
        name: "Erbazzone",
        price: 20,
        image: "media/categoryIconDefault.svg",
      },
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
const state = {
  currentUserID: null,
  selectedCategoryId: null,
};

renderCategories(categories);
categoryListDiv.addEventListener("click", (event) => {
  const card = event.target.closest(".categoryCard");
  state.selectedCategoryId = card.dataset.id;
  console.log(state.selectedCategoryId);
  if (!card) return;
  selectCategory(state.selectedCategoryId);
});

function selectCategory() {
  document.querySelectorAll(".categoryCard").forEach((card) => {
    card.classList.toggle(
      "selected",
      card.dataset.id === state.selectedCategoryId
    );
  });
  renderMenuItems(state.selectedCategoryId);
}

function renderCategories(categories) {
  categoryListDiv.innerHTML = "";
  categories.forEach((category) => {
    const catContainer = document.createElement("div");
    catContainer.className = "categoryCard";
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

function renderMenuItems(categoryID) {
  menuDiv.innerHTML = "";
  const category = categories.find((cat) => cat.id === categoryID);
  if (!category || category.items.length === 0) {
    menuDiv.textContent = "No items available";
    return;
  }
  category.items.forEach((item) => {
    const itemCard = document.createElement("div");
    itemCard.className = "menuItem";
    itemCard.dataset.id = item.id;
    const itemImg = document.createElement("img");
    itemImg.className = "itemImg";
    itemImg.src = item.image;
    itemImg.alt = item.name;
    const itemTitle = document.createElement("p");
    itemTitle.className = "itemTitle";
    itemTitle.textContent = item.name;
    const itemPrice = document.createElement("span");
    itemPrice.className = "itemPrice";
    itemPrice.textContent = item.price;
    itemCard.appendChild(itemImg);
    itemCard.appendChild(itemTitle);
    itemCard.appendChild(itemPrice);
    menuDiv.appendChild(itemCard);
  });
}

function editMode() {
  const editPanel = document.createElement("aside");
  editPanel.className = "editPanel glass";
  const newCategoryDiv = document.createElement("div");
  newCategoryDiv.className = "newCategoryPanel";
  const addCategoryButton = document.createElement("button");
  addCategoryButton.className = "addCategoryBtn";
  addCategoryButton.textContent = "Add Category";
  const newCategoryName = document.createElement("input");
  newCategoryName.className = "inputBox";
  newCategoryName.placeholder = "New Category Name";
  const newCategoryID = document.createElement("input");
  newCategoryID.className = "inputBox";
  newCategoryID.placeholder = "New Category ID";
  const newCategoryIMG = document.createElement("input");
  newCategoryIMG.className = "inputBox";
  newCategoryIMG.placeholder = "New Category IM URL";
  newCategoryDiv.appendChild(addCategoryButton);
  newCategoryDiv.appendChild(newCategoryName);
  newCategoryDiv.appendChild(newCategoryID);
  newCategoryDiv.appendChild(newCategoryIMG);
  editPanel.appendChild(newCategoryDiv);
  addCategoryButton.addEventListener("click", function (name, id, img) {
    name = newCategoryName.value;
    id = newCategoryID.value;
    img = newCategoryIMG.value;
    const newCategory = {
      id: id,
      name: name,
      image: img,
      items: [],
    };

    categories.push(newCategory);
    renderCategories(categories);
  });
  const deleteCategoryDiv = document.createElement("div");
  deleteCategoryDiv.className = "removeCategoryPanel";
  const categoryDropdown = document.createElement("select");
  categoryDropdown.className = "categoryDropdown";
  categories.forEach((category) => {
    const dropdownItem = document.createElement("option");
    dropdownItem.dataset.id = category.id;
    dropdownItem.textContent = category.name;
    dropdownItem.className = "dropdownItem";
    categoryDropdown.appendChild(dropdownItem);
    deleteCategoryDiv.appendChild(categoryDropdown);
    editPanel.appendChild(deleteCategoryDiv);
    wrapper.appendChild(editPanel);
  });
  const removeButton = document.createElement("button");
  removeButton.className = "removeCategoryBtn";
  removeButton.textContent = "Delete Category";
  deleteCategoryDiv.appendChild(removeButton);
}
editMode();

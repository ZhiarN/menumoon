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
  if (!card) return;
  if (card.dataset.id === state.selectedCategoryId) {
    card.classList.remove("selected");
    state.selectedCategoryId = null;
    return;
  }
  state.selectedCategoryId = card.dataset.id;
  console.log(state.selectedCategoryId);
  selectCategory();
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

function renderCategories() {
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
  if (document.querySelector(".editPanel")) return;
  const editPanel = document.createElement("aside");
  editPanel.className = "editPanel glass";
  //New Category
  const newCategoryDiv = document.createElement("div");
  newCategoryDiv.className = "newCategoryPanel";
  const addCategoryButton = document.createElement("button");
  addCategoryButton.className = "addCategoryBtn";
  addCategoryButton.textContent = "Add Category";
  const newCategoryName = document.createElement("input");
  newCategoryName.className = "inputBox";
  newCategoryName.placeholder = "New Category Name";
  newCategoryName.id = "newCategoryName";
  const newCategoryIMG = document.createElement("input");
  newCategoryIMG.className = "inputBox";
  newCategoryIMG.placeholder = "IMG Path"
  newCategoryIMG.id = "newCategoryIMG";
  addCategoryButton.addEventListener("click", function (name, id, img) {
    name = newCategoryName.value;
    id = createCategoryID();
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
  //Delete Category
  const deleteCategoryDiv = document.createElement("div");
  deleteCategoryDiv.className = "removeCategoryPanel";

  //List
  const menuTreeList = document.createElement("dl");
  menuTreeList.className = "menuTree";
  categories.forEach((category) => {
    const dropdownItem = document.createElement("option");
    dropdownItem.dataset.id = category.id;
    dropdownItem.textContent = category.name;
    dropdownItem.className = "dropdownItem";
    const categoryTree = document.createElement("dt");
    menuTreeList.appendChild(categoryTree);
    categoryTree.textContent = category.name;
    categoryTree.className = "listCategory";
    category.items.forEach((item) => {
      const itemTree = document.createElement("dd");
      itemTree.className = "listItem";
      itemTree.textContent = item.name;
      menuTreeList.appendChild(itemTree);
    });
  });
  const removeButton = document.createElement("button");
  removeButton.className = "removeCategoryBtn";
  removeButton.textContent = "Delete Category";
  //Add to DOM
  deleteCategoryDiv.appendChild(removeButton);
  newCategoryDiv.appendChild(addCategoryButton);
  newCategoryDiv.appendChild(newCategoryName);
  newCategoryDiv.appendChild(newCategoryIMG);
  editPanel.appendChild(deleteCategoryDiv);
  editPanel.appendChild(newCategoryDiv);
  editPanel.appendChild(menuTreeList);
  wrapper.appendChild(editPanel);
  removeButton.addEventListener("click", removeCategory);
}
function createCategoryID() {
  return `cat${categories.length + 1}`;
}

function removeCategory() {
  if (state.selectedCategoryId == null)
    return alert("No Category Selected");
  const category = categories.findIndex(
    cat => cat.id === state.selectedCategoryId
  );
  if (category == -1) return;
  console.log(category)
  categories.splice(category, 1);
  state.selectedCategoryId = null;
  renderCategories(categories);
}

function renderUI() {
  renderCategories();
  renderMenuItems;
  
}
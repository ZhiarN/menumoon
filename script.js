const categoryListDiv = document.querySelector(".categoryList");
const menuDiv = document.querySelector(".menu");
const wrapper = document.querySelector(".main");
const categories = [
  {
    id: "cat1",
    name: "Main Dish",
    items: [
      {
        id: "cat1_item1",
        name: "Steak",
        price: 20,
        image: "media/categoryIconDefault.svg",
      },
      {
        id: "cat1_item2",
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
    items: [{
        id: "cat2_item1",
        name: "Fries",
        price: 20,
        image: "media/categoryIconDefault.svg",
      },
    {
        id: "cat2_item2",
        name: "Hot Dog",
        price: 20,
        image: "media/categoryIconDefault.svg",
      }],
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
  selectedItemID: null,
  editModeOn: false,
};
document
  .querySelector(".editModeToggleButton")
  .addEventListener("click", function () {
    const editPanel = document.querySelector(".editPanel");
    if (state.editModeOn === true) {
      wrapper.removeChild(editPanel);
      document.querySelectorAll(".editModeSelected").forEach((elem) => {
        elem.classList.remove("editModeSelected")
        elem.classList.add("selected")
      })
      state.editModeOn = false;
      
    } else {
      editMode();
      document.querySelectorAll(".selected").forEach((elem) => {
        elem.classList.remove("selected")
        elem.classList.add("editModeSelected")
      })
      state.editModeOn = true;
    }
  });
renderCategories(categories);
categoryListDiv.addEventListener("click", (event) => {
  const card = event.target.closest(".categoryCard");
  if (!card) return;
  if (card.dataset.id === state.selectedCategoryId) {
    card.classList.remove("selected");
    card.classList.remove("editModeSelected")
    state.selectedCategoryId = null;
    state.selectedItemID = null;
    menuDiv.innerHTML = "";
    return;
  }
  state.selectedCategoryId = card.dataset.id;
  selectCategory();
});

function selectCategory() {
  document.querySelectorAll(".categoryCard").forEach((card) => {
    if (state.selectedCategoryId === card.dataset.id) {
    card.classList.add(
      state.editModeOn ? "editModeSelected" : "selected"
    );
    } else {
      card.classList.remove(state.editModeOn ? "editModeSelected" : "selected")}

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

function renderMenuItems() {
  menuDiv.innerHTML = "";
  const category = categories.find(
    (cat) => cat.id === state.selectedCategoryId
  );

  if (!category || category.items.length === 0) {
    menuDiv.textContent = "No items available";
    return;
  }

  category.items.forEach((item) => {
    const itemCard = document.createElement("div");
    itemCard.className = "menuItem";
    itemCard.dataset.id = item.id;

if (item.id === state.selectedItemID) {
      itemCard.classList.add(
        state.editModeOn ? "editModeSelected" : "selected"
      );
    }
    
    const itemImgDiv = document.createElement("div");
    itemImgDiv.className = "itemImgWrapper"

    const itemImg = document.createElement("img");
    itemImg.className = "itemImg";
    itemImg.src = item.image;
    itemImg.alt = item.name;

    const itemInfoDiv = document.createElement("div");
    itemInfoDiv.className = "itemInfoWrapper";

    const itemTitle = document.createElement("p");
    itemTitle.className = "itemTitle";
    itemTitle.textContent = item.name;

    const itemPrice = document.createElement("span");
    itemPrice.className = "itemPrice";
    itemPrice.textContent = item.price;

    itemImgDiv.appendChild(itemImg)
    itemInfoDiv.appendChild(itemTitle);
    itemInfoDiv.appendChild(itemPrice);
    itemCard.appendChild(itemImgDiv);
    itemCard.appendChild(itemInfoDiv);
    menuDiv.appendChild(itemCard);
  });
}

function editMode() {
  if (document.querySelector(".editPanel")) return;
  const editPanel = document.createElement("aside");
  editPanel.className = "editPanel glass";
  //Category Edit
  const categoryEditDiv = document.createElement("div");
  categoryEditDiv.className = "modifyPanel";
  const addCategoryButton = document.createElement("button");
  addCategoryButton.className = "modifyBtns";
  addCategoryButton.textContent = "Add Category";
  const newCategoryName = document.createElement("input");
  newCategoryName.className = "input";
  newCategoryName.placeholder = "Name";
  newCategoryName.id = "newCategoryName";
  const newCategoryIMG = document.createElement("input");
  newCategoryIMG.className = "input";
  newCategoryIMG.placeholder = "IMG Path";
  newCategoryIMG.id = "newCategoryIMG";
  addCategoryButton.addEventListener("click", addCategory);
  const removeCategoryButton = document.createElement("button");
  removeCategoryButton.className = "modifyBtns";
  removeCategoryButton.textContent = "Remove Category";
  categoryEditDiv.appendChild(newCategoryName);
  categoryEditDiv.appendChild(newCategoryIMG);
  categoryEditDiv.appendChild(addCategoryButton);
  categoryEditDiv.appendChild(removeCategoryButton);

  //Items Edit
  const itemEditDiv = document.createElement("div");
  itemEditDiv.className = "modifyPanel";
  const addItemButton = document.createElement("button");
  addItemButton.className = "modifyBtns";
  addItemButton.textContent = "Add Item";
  const removeItemButton = document.createElement("button")
removeItemButton.className = "modifyBtns";
removeItemButton.textContent = "Remove Item";
  const newItemName = document.createElement("input");
  newItemName.className = "input";
  newItemName.id = "newItemName";
  newItemName.placeholder = "Item Name"
  const newItemPrice = document.createElement("input");
  newItemPrice.className = "input";
  newItemPrice.id = "newItemPrice";
  newItemPrice.placeholder = "Item Price";
  const newItemIMG = document.createElement("input");
  newItemIMG.className = "input";
  newItemIMG.id = "newItemIMG";
  newItemIMG.placeholder = "IMG Path";
  itemEditDiv.appendChild(newItemName);
  itemEditDiv.appendChild(newItemPrice);
  itemEditDiv.appendChild(newItemIMG);
  itemEditDiv.appendChild(addItemButton);
  itemEditDiv.appendChild(removeItemButton);
  addItemButton.addEventListener("click", addItem);

  //Add to DOM
  
  editPanel.appendChild(categoryEditDiv);
  editPanel.appendChild(itemEditDiv);
  wrapper.appendChild(editPanel);
  removeCategoryButton.addEventListener("click", removeCategory);
  removeItemButton.addEventListener("click", removeItem)
menuDiv.addEventListener("click", (event) => {
  const card = event.target.closest(".menuItem");
  if (!card) return;
  state.selectedItemID = card.dataset.id;
  renderMenuItems();
});
  renderList();
}
function removeItem() {
  if (state.selectedItemID == null) return alert("No Item Selected");
const category = categories.find((cat) => cat.id === state.selectedCategoryId);
  const index = category.items.findIndex((item) => item.id === state.selectedItemID);
  if (index === -1) return;
  category.items.splice(index, 1)
    state.selectedItemID = null;
renderMenuItems();
renderList();
}
function createCategoryID() {
  return `cat${categories.length + 1}`;
}

function removeCategory() {
  if (state.selectedCategoryId == null) return alert("No Category Selected");
  const category = categories.findIndex(
    (cat) => cat.id === state.selectedCategoryId
  );
  if (category == -1) return;
  categories.splice(category, 1);
  state.selectedCategoryId = null;
  menuDiv.innerHTML = "";
  renderCategories(categories);
  renderList();
}

function renderList() {
  const editPanel = document.querySelector(".editPanel");
  const menuTree = document.querySelector(".menuTree");
  if (menuTree) {
    editPanel.removeChild(menuTree);
  }
  const menuTreeList = document.createElement("dl");
  menuTreeList.className = "menuTree";
  categories.forEach((category) => {
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
  editPanel.appendChild(menuTreeList);
}

function addCategory() {
  const newCategory = {
    id: `cat${categories.length + 1}`,
    name: newCategoryName.value,
    image: newCategoryIMG.value,
    items: [],
  };

  categories.push(newCategory);
  renderCategories(categories);
  renderList();
}

function addItem() {
  if (state.selectedCategoryId === null) {
    alert("No Category Selected");
    return;
  }
  const category = categories.find(
    (cat) => cat.id === state.selectedCategoryId
  );

  const newItem = {
    id: `${category.id}_item${category.items.length + 1}`,
    name: newItemName.value,
    price: newItemPrice.value,
    image: newItemIMG.value,
  };

  category.items.push(newItem);
  renderMenuItems();
  renderList();
}

const appRoot = document.querySelector(`[data-component="root"]`);
const editButton = document.querySelector(`[data-action="toggle-edit"]`);
const state = {
 categories: [
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
        image: "media/categoryIconDefault.svg"},
],
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

  },
],
  currentUserID: null,
  selectedCategoryID: null,
  selectedItemID: null,
  editModeOn: false,
};
function addListeners() {
  const categoryListElement = document.querySelector(`[data-component="category-list"]`);
  const menuElement = document.querySelector(`[data-component=menu-items]`)
  categoryListElement.addEventListener("click", (event) => {
  
  const card = event.target.closest("[data-action=select-category]");
  if (!card) return;
  if (card.dataset.categoryId === state.selectedCategoryID) {
    state.selectedCategoryID = null;
    state.selectedItemID = null;
    return;
  }
  state.selectedCategoryID = card.dataset.categoryId;
  state.selectedItemID = null;
  renderUI();
});
menuElement.addEventListener("click", (event) => {
  const item = event.target.closest("[data-action=select-item]");
  if (!item) return;
  if (state.selectedItemID === item.dataset.itemId) {
state.selectedItemID = null;
  } else {
    state.selectedCategoryID = item.dataset.categoryId;
      state.selectedItemID = item.dataset.itemId;
  }
})
}
addListeners();

function renderUI() {
  const categoryNavElement = document.querySelector(".category-nav");
  if ( !Array.isArray(state.categories)|| state.categories.length === 0) {
  categoryNavElement.textContent = "NO CATEGORIES TO SHOW";
 return;
};
  function renderCategories() {
    const categoryListElement = document.querySelector(`[data-component="category-list"]`);
    categoryListElement.innerHTML = state.categories.map((cat) => `

      <li class="category-list__item">
        <button
        data-category-id="${cat.id}"
        class="category-list__button ${cat.id === state.selectedCategoryID ? 'is-selected' : ''} ${cat.id === state.selectedCategoryID && state.editModeOn? 'is-editing' : ''}"
        data-action="select-category"
        >
        <img class="category-list__image" src="${cat.image}" alt="${cat.name} category">
        <span class="category-list__name">${cat.name}</span>
        </button>
      </li>`).join('');
}; renderCategories();

function rendermenu() {
  const menuElement = document.querySelector(`[data-component="menu-items"]`);
  if (state.selectedCategoryID == null) return menuElement.textContent = "NO ITEM TO SHOW";
  const category = state.categories.find((cat) => cat.id === state.selectedCategoryID);
if (!category || !category.items || category.items.length === 0) {
   menuElement.textContent = "NO ITEM TO SHOW";
   return;
}
  menuElement.innerHTML = category.items.map((item) => `
  <article class="item-card" data-category-id="${state.selectedCategoryID}" data-item-id="${item.id}" data-action="select-item">
  <img alt="${item.name}" class="item-card__image" src="${item.image}">
  <div class="item-card__info">
  <h3 class="item-card__name">${item.name}</h3>
  <data class="item-card__price" value="${item.price}">${item.price} IRT</data>
  </div>
  </article>`).join('');

};
rendermenu();
}
renderUI();
// function editMode() {
//   if (document.querySelector(".editPanel")) return;
//   const editPanel = document.createElement("aside");
//   editPanel.className = "edit-panel glass";
//   //Category Edit
//   const categoryEditDiv = document.createElement("div");
//   categoryEditDiv.className = "modifyPanel";
//   const addCategoryButton = document.createElement("button");
//   addCategoryButton.className = "modifyBtns";
//   addCategoryButton.textContent = "Add Category";
//   const newCategoryName = document.createElement("input");
//   newCategoryName.className = "input";
//   newCategoryName.placeholder = "Name";
//   newCategoryName.id = "newCategoryName";
//   const newCategoryIMG = document.createElement("input");
//   newCategoryIMG.className = "input";
//   newCategoryIMG.placeholder = "IMG Path";
//   newCategoryIMG.id = "newCategoryIMG";
//   addCategoryButton.addEventListener("click", addCategory);
//   const removeCategoryButton = document.createElement("button");
//   removeCategoryButton.className = "modifyBtns";
//   removeCategoryButton.textContent = "Remove Category";
//   categoryEditDiv.appendChild(newCategoryName);
//   categoryEditDiv.appendChild(newCategoryIMG);
//   categoryEditDiv.appendChild(addCategoryButton);
//   categoryEditDiv.appendChild(removeCategoryButton);

//   //Items Edit
//   const itemEditDiv = document.createElement("div");
//   itemEditDiv.className = "modifyPanel";
//   const addItemButton = document.createElement("button");
//   addItemButton.className = "modifyBtns";
//   addItemButton.textContent = "Add Item";
//   const removeItemButton = document.createElement("button")
// removeItemButton.className = "modifyBtns";
// removeItemButton.textContent = "Remove Item";
//   const newItemName = document.createElement("input");
//   newItemName.className = "input";
//   newItemName.id = "newItemName";
//   newItemName.placeholder = "Item Name"
//   const newItemPrice = document.createElement("input");
//   newItemPrice.className = "input";
//   newItemPrice.id = "newItemPrice";
//   newItemPrice.placeholder = "Item Price";
//   const newItemIMG = document.createElement("input");
//   newItemIMG.className = "input";
//   newItemIMG.id = "newItemIMG";
//   newItemIMG.placeholder = "IMG Path";
//   itemEditDiv.appendChild(newItemName);
//   itemEditDiv.appendChild(newItemPrice);
//   itemEditDiv.appendChild(newItemIMG);
//   itemEditDiv.appendChild(addItemButton);
//   itemEditDiv.appendChild(removeItemButton);
//   addItemButton.addEventListener("click", addItem);

//   //Add to DOM
  
//   editPanel.appendChild(categoryEditDiv);
//   editPanel.appendChild(itemEditDiv);
//   appRoot.appendChild(editPanel);
//   removeCategoryButton.addEventListener("click", removeCategory);
//   removeItemButton.addEventListener("click", removeItem);
//   renderList();
// }
// function removeItem() {
//   if (state.selectedItemID == null) return alert("No Item Selected");
// const category = categories.find((cat) => cat.id === state.selectedCategoryID);
//   const index = category.items.findIndex((item) => item.id === state.selectedItemID);
//   if (index === -1) return;
//   category.items.splice(index, 1)
//     state.selectedItemID = null;
// rendermenuElementItems();
// renderList();
// }


// function removeCategory() {
//   if (state.selectedCategoryID == null) return alert("No Category Selected");
//   const category = categories.findIndex(
//     (cat) => cat.id === state.selectedCategoryID
//   );
//   if (category == -1) return;
//   categories.splice(category, 1);
//   state.selectedCategoryID = null;
//   menuElement.innerHTML = "";
//   renderCategories(categories);
//   renderList();
// }

// function renderList() {
//   const editPanel = document.querySelector(".editPanel");
//   const menuElementTree = document.querySelector(".menuElementTree");
//   if (menuElementTree) {
//     editPanel.removeChild(menuElementTree);
//   }
//   const menuElementTreeList = document.createElement("dl");
//   menuElementTreeList.className = "menuElementTree";
//   categories.forEach((category) => {
//     const categoryTree = document.createElement("dt");
//     menuElementTreeList.appendChild(categoryTree);
//     categoryTree.textContent = category.name;
//     categoryTree.className = "listCategory";
//     category.items.forEach((item) => {
//       const itemTree = document.createElement("dd");
//       itemTree.className = "listItem";
//       itemTree.textContent = item.name;
//       menuElementTreeList.appendChild(itemTree);
//     });
//   });
//   editPanel.appendChild(menuElementTreeList);
// }

// function addCategory() {
//   const newCategory = {
//     id: `cat${categories.length + 1}`,
//     name: newCategoryName.value,
//     image: newCategoryIMG.value,
//     items: [],
//   };

//   categories.push(newCategory);
//   renderCategories(categories);
//   renderList();
// }

// function addItem() {
//   if (state.selectedCategoryID === null) {
//     alert("No Category Selected");
//     return;
//   }
//   const category = categories.find(
//     (cat) => cat.id === state.selectedCategoryID
//   );

//   const newItem = {
//     id: `${category.id}_item${category.items.length + 1}`,
//     name: newItemName.value,
//     price: newItemPrice.value,
//     image: newItemIMG.value,
//   };

//   category.items.push(newItem);
//   rendermenuElementItems();
//   renderList();
// }
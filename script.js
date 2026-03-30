const appRoot = document.querySelector(`[data-component="root"]`);
const editButton = document.querySelector(`[data-action="toggle-edit"]`);
  const menuElement = document.querySelector(`[data-component="menu-items"]`);

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
};

function renderCategories() {
    const categoryNavElement = document.querySelector(".category-nav");
  if ( !Array.isArray(state.categories)|| state.categories.length === 0) {
  categoryNavElement.textContent = "NO CATEGORIES TO SHOW";
 return;
};
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
}; 

function renderMenu() {
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
function startApp() {
  addListeners();
  renderUI();
}
function renderUI() {
renderCategories();
renderMenu();
};

function removeItem() {
  if (state.selectedItemID == null) return alert("No Item Selected");
const category = state.categories.find((cat) => cat.id === state.selectedCategoryID);
  const index = category.items.findIndex((item) => item.id === state.selectedItemID);
  if (index === -1) return;
  category.items.splice(index, 1)
    state.selectedItemID = null;
renderUI();
};
function removeCategory() {
  if (state.selectedCategoryID == null) return alert("No Category Selected");
  const category = state.categories.findIndex(
    (cat) => cat.id === state.selectedCategoryID
  );
  if (category == -1) return;
  state.categories.splice(category, 1);
  state.selectedCategoryID = null;
  menuElement.innerHTML = "";
  renderUI();
};

function addCategory(newName, newImage) {
  const newCategory = {
    id: `cat${state.categories.length + 1}`,
    name: newName,
    image: newImage,
    items: [],
  };
  state.categories.push(newCategory);
  renderUI();
};

function addItem(newItemName, newItemPrice, newItemImage) {
  if (state.selectedCategoryID == null) {
    alert("No Category Selected");
    return;
  }
  const category = state.categories.find(
    (cat) => cat.id === state.selectedCategoryID
  );

  const newItem = {
    id: `${category.id}_item${category.items.length + 1}`,
    name: newItemName,
    price: newItemPrice,
    image: newItemImage,
  };

  category.items.push(newItem);
  renderUI();
};
startApp();
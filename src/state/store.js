export const state = {
  categories: [
    {
      id: "cat1",
      name: "Main Dish",
      items: [
        {
          id: "cat1_item1",
          name: "Steak",
          price: 20,
          image: "../src/../src/media/categoryIconDefault.svg",
        },
        {
          id: "cat1_item2",
          name: "Erbazzone",
          price: 20,
          image: "../src/media/categoryIconDefault.svg",
        },
      ],
      image: "../src/media/categoryIconDefault.svg",
    },
    {
      id: "cat2",
      name: "Fast Food",
      image: "../src/media/categoryIconDefault.svg",
      items: [
        {
          id: "cat2_item1",
          name: "Fries",
          price: 20,
          image: "../src/media/categoryIconDefault.svg",
        },
        {
          id: "cat2_item2",
          name: "Hot Dog",
          price: 20,
          image: "../src/media/categoryIconDefault.svg",
        },
      ],
    },
    {
      id: "cat3",
      name: "Burgers",
      image: "../src/media/categoryIconDefault.svg",
      items: [],
    },
    {
      id: "cat4",
      name: "Sandwiches",
      image: "../src/media/categoryIconDefault.svg",
      items: [],
    },
    {
      id: "cat5",
      name: "Beverages",
      image: "../src/media/categoryIconDefault.svg",
      items: [],
    },
    {
      id: "cat6",
      name: "Pasta",
      image: "../src/media/categoryIconDefault.svg",
      items: [],
    },
    {
      id: "cat7",
      name: "Breakfast",
      image: "../src/media/categoryIconDefault.svg",
      items: [],
    },
    {
      id: "cat8",
      name: "Dessert",
      image: "../src/media/categoryIconDefault.svg",
    },
  ],
  currentUserID: null,
  selectedCategoryID: null,
  selectedItemID: null,
  editModeOn: false,
};

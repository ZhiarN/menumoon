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
      items: [
        {
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
        },
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

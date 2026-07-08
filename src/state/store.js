export const state = {
  categories: [
    {
      id: "cat1",
      name: "Main Dish",
      image: "/media/categoryIconDefault.svg",
      items: [
        {
          id: "cat1_item1",
          name: "Grilled Ribeye Steak",
          price: 28,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat1_item2",
          name: "Roasted Chicken with Herbs",
          price: 19,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat1_item3",
          name: "Pan-Seared Salmon",
          price: 24,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat1_item4",
          name: "Beef Stroganoff",
          price: 21,
          image: "/media/categoryIconDefault.svg",
        },
      ],
    },
    {
      id: "cat2",
      name: "Fast Food",
      image: "/media/categoryIconDefault.svg",
      items: [
        {
          id: "cat2_item1",
          name: "French Fries",
          price: 5,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat2_item2",
          name: "Hot Dog",
          price: 7,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat2_item3",
          name: "Chicken Nuggets",
          price: 8,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat2_item4",
          name: "Onion Rings",
          price: 6,
          image: "/media/categoryIconDefault.svg",
        },
      ],
    },
    {
      id: "cat3",
      name: "Burgers",
      image: "/media/categoryIconDefault.svg",
      items: [
        {
          id: "cat3_item1",
          name: "Classic Cheeseburger",
          price: 11,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat3_item2",
          name: "Bacon BBQ Burger",
          price: 13,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat3_item3",
          name: "Mushroom Swiss Burger",
          price: 12,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat3_item4",
          name: "Double Beef Burger",
          price: 15,
          image: "/media/categoryIconDefault.svg",
        },
      ],
    },
    {
      id: "cat4",
      name: "Sandwiches",
      image: "/media/categoryIconDefault.svg",
      items: [
        {
          id: "cat4_item1",
          name: "Club Sandwich",
          price: 10,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat4_item2",
          name: "Grilled Chicken Sandwich",
          price: 11,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat4_item3",
          name: "Philly Cheesesteak",
          price: 14,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat4_item4",
          name: "Tuna Melt",
          price: 9,
          image: "/media/categoryIconDefault.svg",
        },
      ],
    },
    {
      id: "cat5",
      name: "Beverages",
      image: "/media/categoryIconDefault.svg",
      items: [
        {
          id: "cat5_item1",
          name: "Coca-Cola",
          price: 3,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat5_item2",
          name: "Fresh Orange Juice",
          price: 5,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat5_item3",
          name: "Iced Coffee",
          price: 4,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat5_item4",
          name: "Mineral Water",
          price: 2,
          image: "/media/categoryIconDefault.svg",
        },
      ],
    },
    {
      id: "cat6",
      name: "Pasta",
      image: "/media/categoryIconDefault.svg",
      items: [
        {
          id: "cat6_item1",
          name: "Spaghetti Bolognese",
          price: 14,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat6_item2",
          name: "Fettuccine Alfredo",
          price: 13,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat6_item3",
          name: "Penne Arrabbiata",
          price: 12,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat6_item4",
          name: "Lasagna",
          price: 15,
          image: "/media/categoryIconDefault.svg",
        },
      ],
    },
    {
      id: "cat7",
      name: "Breakfast",
      image: "/media/categoryIconDefault.svg",
      items: [
        {
          id: "cat7_item1",
          name: "Pancakes with Maple Syrup",
          price: 9,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat7_item2",
          name: "Omelette with Cheese",
          price: 8,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat7_item3",
          name: "Avocado Toast",
          price: 10,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat7_item4",
          name: "Breakfast Burrito",
          price: 11,
          image: "/media/categoryIconDefault.svg",
        },
      ],
    },
    {
      id: "cat8",
      name: "Dessert",
      image: "/media/categoryIconDefault.svg",
      items: [
        {
          id: "cat8_item1",
          name: "Chocolate Lava Cake",
          price: 7,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat8_item2",
          name: "Cheesecake",
          price: 6,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat8_item3",
          name: "Ice Cream Sundae",
          price: 5,
          image: "/media/categoryIconDefault.svg",
        },
        {
          id: "cat8_item4",
          name: "Apple Pie",
          price: 6,
          image: "/media/categoryIconDefault.svg",
        },
      ],
    },
  ],
  currentUserID: null,
  selectedCategoryID: null,
  selectedItemID: null,
  isEditMode: false,
};

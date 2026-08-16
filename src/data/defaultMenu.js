export const defaultMenu = {
    categories: [
        {
            id: "cat1",
            name: "Skewered Dishes",
            image: "/media/kabab.webp"
        },
         {
            id: "cat2",
            name: "Stews",
            image: "/media/ghorme.webp"
        }

    ],
    items: [
        {
            id: "item1",
            categoryId: "cat1",
            name: "Kabab",
            image: "/media/kabab.webp",
            price: 10
        },
        {
            id: "item2",
            categoryId: "cat1",
            name: "Jooje",
            image: "/media/jooje.webp",
            price: 8
        },
         {
            id: "item3",
            categoryId: "cat2",
            name: "Ghorme Sabzi",
            image: "/media/ghorme.webp",
            price: 10
        },
                {
            id: "item4",
            categoryId: "cat2",
            name: "Fesenjan",
            image: "/media/fesenjan.webp",
            price: 12
        }
    ]
}

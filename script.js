const body = document.querySelector("body");
let categories = document.querySelector(".categories");
let categoryID;
const menu = document.querySelector(".menu");
let target;
categories.addEventListener("click", (event) => {
target = event.target.closest("div");
if (!target.classList.contains("categoryItemCard")) return;
    selectCategory(target);
});
    function selectCategory(target) {
        const isSelected = target.classList.contains("selected");
        const selectedCategory = document.querySelector(".selected");
        const isCategory = target.classList.contains("categoryItemCard");
        categoryID = target.id;
        console.log("ID: " + categoryID);
        if (!isCategory) return;
        if (isSelected) {
            target.classList.remove("selected");
        }
        else {
            if (selectedCategory) {
                selectedCategory.classList.remove("selected");
            }
            target.classList.add("selected");
        }
    }

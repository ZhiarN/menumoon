const body = document.querySelector("body");
let categories = document.querySelector(".categories");
let categoryID;
const menu = document.querySelector(".menu");
let target;
// document.onreadystatechange = function () {
//   if (document.readyState !== "complete") {
//     document.querySelector("body").style.visibility = "hidden";
//     document.querySelector("#loading").style.visibility = "visible";
//   } else {
//     document.querySelector("#loading").style.display = "none";
//     document.querySelector("body").style.visibility = "visible";
//   }
// };
categories.addEventListener("click", (event) => {
target = event.target.closest("div");
if (!target.classList.contains("categoryItemCard")) return;
    selectCategory(target);
})

    function selectCategory(target) {
        const isSelected = target.classList.contains("selected");
        const selectedCategory = document.querySelector(".selected");
        const isCategory = target.classList.contains("categoryItemCard");
        categoryID = target.id;
        console.log("ID: " + categoryID)
        if (!isCategory) return;
        if (isSelected) {
            target.classList.remove("selected");
        }

        else {
            if (selectedCategory) {
                selectedCategory.classList.remove("selected")
            }
            target.classList.add("selected");
            
            
           

        }
    }
    // if 
    // let item = {
    //     uID: uniqueItemID,
    //     name: itemName,
    //     img: itemIMG,
    //     price: itemPrice,
    //     allergens: itemAllergens,
    //     category: itemCategory,

    // }
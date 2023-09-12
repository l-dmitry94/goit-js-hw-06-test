const categoriesList = document.querySelector("#categories");
const categoriesItem = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach(item => {
    const itemHeaderContent = item.querySelector("h2").textContent;
    console.log(`Category: ${itemHeaderContent}`);
    const itemElements = item.querySelectorAll("ul li");
    console.log(`Elements: ${itemElements.length}`);
})
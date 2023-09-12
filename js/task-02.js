const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
const arrIngredients = [];

ingredients.forEach(ingredient => {
  const newElement = document.createElement("li");
  newElement.textContent = ingredient;
  newElement.classList.add("item");
  arrIngredients.push(newElement);
})

ingredientsList.append(...arrIngredients);

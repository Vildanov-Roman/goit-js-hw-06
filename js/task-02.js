const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const textLi = document.getElementById("ingredients");
const foodIngredients = ingredients.forEach(ingredient => {  
  const items = document.createElement("li");
  items.classList.add('item');
  textLi.append(items);  
  items.textContent = ingredient;
});

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const textLi = document.querySelector("#ingredients");
const arrLi = [];

ingredients.forEach(ingredient => {  
  const item = document.createElement("li");
  item.classList.add('item');  
  item.textContent = ingredient;
  arrLi.push(item)
});

textLi.append(...arrLi);


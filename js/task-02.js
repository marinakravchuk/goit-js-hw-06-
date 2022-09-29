const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




const ingredientList = document.createElement("li");
ingredientList.textContent = `{ingredients[0]}`;
ingredientList.classList.add("item") ;

console.log(ingredientList);


const newList = [];


ingredients.forEach((element) => {
const ingredientList = document.createElement("li");
ingredientList.textContent = `${element}`;
ingredientList.classList.add("item") ;
return newList.push(ingredientList);
});
console.log(newList);



const ingredientsRef = document.querySelector("#ingredients");
ingredientsRef.append(...newList);
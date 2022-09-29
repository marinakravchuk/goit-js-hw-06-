const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);


categories.forEach (element => {

const titleCategory = element.querySelector("h2");
console.log(`Category: ${titleCategory.textContent}`);

const numberElements = element.querySelectorAll("li");
console.log(`Elements: ${numberElements.length}`);
}); 



/* 
console.log(`Category: ${titleCategory.textContent} \nElements: ${numberElements.length}`)
*/



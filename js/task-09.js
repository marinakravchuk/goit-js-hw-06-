
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


const textColor = document.querySelector('span.color');
const buttonColor = document.querySelector('button[type="button"]');


buttonColor.addEventListener('click', getColor)
 

function getColor()  {
  document.body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
};



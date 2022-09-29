function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const textColor = document.querySelector('span.color');
const buttonColor = document.querySelector('button[type="button"]');


buttonColor.addEventListener('click', getColor)
 

function getColor()  {
  let newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  textColor.textContent = newColor;
};


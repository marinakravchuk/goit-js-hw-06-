function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  getCreateBtn : document.querySelector('button[data-create]'),
  getDestroyBtn : document.querySelector('button[data-destroy]'),
  getInputNumber :document.querySelector('input[type="number"]'),
  boxDivs : document.querySelector('#boxes'),
}

refs.getCreateBtn.addEventListener('click', createBoxes);
refs.getDestroyBtn.addEventListener('click', destroyFunc);

function createBoxes () {
  const items = [];
  for (let i = 0; i < refs.getInputNumber.value; i += 1) {
    const color = getRandomHexColor();
    const item = document.createElement('div');
    item.style.width = `${20 + i * 10}px`;
    item.style.height = `${20 + i * 10}px`;
    item.style.backgroundColor = color;
    items.push(item);
  };
  refs.boxDivs.append(...items);
  console.log(items);
};

function destroyFunc () {
  refs.boxDivs.remove()
};
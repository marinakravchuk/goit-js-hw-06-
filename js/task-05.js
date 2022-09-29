let nameInput = document.querySelector('#name-input');
let nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInputFocus);

function onInputFocus(event) {
    nameOutput.textContent=event.currentTarget.value;
} 

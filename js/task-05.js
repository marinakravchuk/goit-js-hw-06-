let nameInput = document.querySelector('#name-input');
let nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInputFocus);

function onInputFocus(event) {
    if (nameInput.value === '') {
       nameOutput.textContent  = 'Anonymous'
    } else {
        nameOutput.textContent=event.currentTarget.value;

    }
} ;




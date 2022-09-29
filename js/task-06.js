const validationInput =  document.querySelector('#validation-input');
const lengthReg = validationInput.dataset.length;

  const inputBlur = (event) => {
    const isValid = Number(lengthReg) === event.currentTarget.value.length;

    if (isValid) {
        validationInput.classList.add("valid");
        validationInput.classList.remove("invalid");
    } else {
        validationInput.classList.remove("valid");
        validationInput.classList.add("invalid");
       
      }
  };


validationInput.addEventListener('blur',  inputBlur );






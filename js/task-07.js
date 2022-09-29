const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

textRef.style.fontSize = `${inputRef.value}px`;
inputRef.addEventListener("input", handleText);

function handleText(event) {
    console.log(event.currentTarget.value);
    textRef.style.fontSize = `${event.currentTarget.value}px`;
}



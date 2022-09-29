let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBTN = document.querySelector('[data-action="increment"]');

function handelClickDown() {
    
    counterValue-=1;
        document.getElementById("value").innerHTML = counterValue;
    }


function handelClickUp() {
    
    counterValue+=1;
        document.getElementById("value").innerHTML = counterValue;
    }


decrementBtn.addEventListener('click', handelClickDown);

incrementBTN.addEventListener('click', handelClickUp);

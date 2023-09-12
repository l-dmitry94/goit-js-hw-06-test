const counterBlock = document.querySelector("#counter");
const valueOutput = counterBlock.querySelector("#value");
const decrementBtn = counterBlock.querySelector("button[data-action='decrement']");
const incrementBtn = counterBlock.querySelector("button[data-action='increment']");
let counter = 0;

const decrement = () => {
    if (counter <= 0)
        counter = 0;
    else {
        counter--;
    }
    valueOutput.textContent = counter;
    saveValue(counter);
}

const increment = () => {
    counter++;
    valueOutput.textContent = counter;
    saveValue(counter);
}

const LOCALSTORAGE_KEY = 'counter-value';

const saveValue = (counter) => {
    localStorage.setItem(LOCALSTORAGE_KEY, counter.toString());
}

const restoreValue = () => {
    const currentValueItem = localStorage.getItem(LOCALSTORAGE_KEY);
    if (currentValueItem !== null) {
        counter = parseInt(currentValueItem, 10);
        valueOutput.textContent = counter;
    }
}

restoreValue();

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
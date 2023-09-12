const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const inputState = () => {
    const defaultName = "Anonymous";
    let newName = "";

    if(inputName.value === "") {
        outputName.textContent = defaultName;
    }
    else {
        newName = inputName.value;
        outputName.textContent = newName;
        saveInput(newName);
    }
}

const LOCALSTORAGE_KEY = "input-text";

const saveInput = (newName) => {
    localStorage.setItem(LOCALSTORAGE_KEY, newName);
}

const restoreInput = () => {
    const currentInput = localStorage.getItem(LOCALSTORAGE_KEY);
    inputName.value = currentInput;
    outputName.textContent = currentInput;
}

inputName.addEventListener("input", inputState);
restoreInput();

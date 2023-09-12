const validationInput = document.querySelector("#validation-input");

const blurInput = () => {
    const inputLength = Number(validationInput.getAttribute("data-length"));

    if(validationInput.value.length === inputLength) {
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
        saveInput(validationInput);
    }

    else {
        validationInput.classList.remove("valid");
        validationInput.classList.add("invalid");
        saveInput(validationInput);
    }
}

const LOCALSTORAGE_KEY = "input-value";

const saveInput = (element) => {
    localStorage.setItem(LOCALSTORAGE_KEY, element.value);
}

const restoreInput = () => {
    const currentInput = localStorage.getItem(LOCALSTORAGE_KEY);
    validationInput.value = currentInput;
}

validationInput.addEventListener("blur", blurInput);
restoreInput();
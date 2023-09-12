const rangeInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const LOCALSTORAGE_KEY = "size-text";

const changeSizeText = () => {
    text.style.fontSize = `${rangeInput.value}px`;
    saveSizeText(text.style.fontSize);
}

const saveSizeText = (element) => {
    localStorage.setItem(LOCALSTORAGE_KEY, element.toString());
}

const restoreSizeText = () => {
    const currentSizeText = localStorage.getItem(LOCALSTORAGE_KEY);
    text.style.fontSize = currentSizeText;
    rangeInput.value = Number.parseInt(currentSizeText);
}

rangeInput.addEventListener("input", changeSizeText);
restoreSizeText();
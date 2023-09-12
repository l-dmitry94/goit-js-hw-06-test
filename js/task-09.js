function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const backLink = body.querySelector(".back-link");
const widgetBlock = body.querySelector(".widget");
const colorSpan = widgetBlock.querySelector(".color");
const changeColorBtn = widgetBlock.querySelector(".change-color");
const LOCALSTORAGE_KEY = "current-color";

const changeColor = () => {
  colorSpan.textContent = getRandomHexColor();
  body.style.backgroundColor = colorSpan.textContent;
  saveColor(colorSpan.textContent);
}

const saveColor = color => {
  localStorage.setItem(LOCALSTORAGE_KEY, color);
}

const restoreColor = () => {
  const currentColor = localStorage.getItem(LOCALSTORAGE_KEY);
  if(currentColor){
    colorSpan.textContent = currentColor;
    body.style.backgroundColor = currentColor;
  }

  else {
    colorSpan.textContent = "-";
  }
  
}

const removeColor = () => {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

changeColorBtn.addEventListener("click", changeColor);
backLink.addEventListener("click", removeColor);
restoreColor();
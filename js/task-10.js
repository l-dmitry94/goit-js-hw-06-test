function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsBlock = document.querySelector("#controls");
const boxesBlock = document.querySelector("#boxes");
const inputNumber = controlsBlock.querySelector("input");
const createBtn = controlsBlock.querySelector("[data-create]");
const destroyBtn = controlsBlock.querySelector("[data-destroy]");
const LOCALSTORAGE_KEY = "boxes-current-amount";

const createBoxes = amount => {
  const boxesObj = {
    amount: inputNumber.value,
    box: ""
  }
  let size = 30;

  for (let i = 0; i < boxesObj.amount; i++) {
    boxesObj.box += `<div style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()}"></div>`;
    size += 10;
  }

  boxesBlock.innerHTML = boxesObj.box;
  saveBoxes(boxesObj);
}

const destroyBoxes = () => {
  boxesBlock.innerHTML = "";
  localStorage.removeItem(LOCALSTORAGE_KEY);
  inputNumber.value = "";
}

const saveBoxes = element => {
  try {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(element));
  }
  catch (error) {
    console.log("Set state error: ", error.message)
  }
}

const restoreBoxes = () => {
  try {
    const currentBoxes = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (currentBoxes && currentBoxes.box) {
      boxesBlock.innerHTML = currentBoxes.box;
      inputNumber.value = currentBoxes.amount;
    }
  }
  catch(error) {
    console.log("Get state error: ", error.message)
  }

}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
restoreBoxes();
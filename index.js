let inputVal = document.querySelector(" #number");
let power = document.querySelector(" #power");
const button = document.querySelector("button");
const solution = document.querySelector(".solution");
button.addEventListener("click", raise);

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function raise() {
  let value = inputVal.value;
  let powerup = power.value;
  if (value && powerup) {
    let calValue = value ** powerup;
    solution.innerHTML = calValue;
  } else {
    createModal();
    // localStorage.clear();
  }

  inputVal.value = "";
  power.value = "";
  let join;

  if (localStorage.getItem("store") === null) {
    jion = [];
  } else {
    jion = JSON.parse(localStorage.getItem("store"));
  }
  jion.push(value, powerup);

  localStorage.setItem("store", JSON.stringify(jion));
}
const storageValue = JSON.parse(localStorage.getItem("store"));

window.addEventListener("DOMContentLoaded", function () {
  inputVal.value = storageValue[2];
  power.value = storageValue[3];
});

let modal = document.querySelector(".modal");

function createModal() {
  modal.classList.add("modal-show");
}

modal.addEventListener("click", function () {
  modal.classList.remove("modal-show");
});

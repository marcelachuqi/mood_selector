"use strict";
const app = document.querySelector(".app_js");
const select = document.querySelector(".select_js");
const happy = document.querySelector(".option_happy");
const sad = document.querySelector(".option_sad");
const update = document.querySelector(".update");
const selected = document.querySelector(".selected_js");

function updateFace() {
  const selectValue = select.value;
  if (selectValue === "happy") {
    selected.innerHTML = ":)";
  } else {
    selected.innerHTML = ":(";
  }
}

function setColor() {
  app.classList.remove("yellow");
  app.classList.remove("orange");
}

function setNewColor() {
  setColor();
  const number = Math.round(Math.random() * 100);
  if (number % 2 === 0) {
    app.classList.add("yellow");
  } else {
    app.classList.add("orange");
  }
  console.log(number);
}

function handleClickUpdate(event) {
  event.preventDefault();
  updateFace();
  setNewColor();
}

update.addEventListener("click", handleClickUpdate);

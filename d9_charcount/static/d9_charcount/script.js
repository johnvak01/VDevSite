const inputField = document.querySelector(".input");
const outputField = document.querySelector(".output");

inputField.addEventListener("keyup",updateOutput );

function updateOutput(e){
  outputField.innerHTML = inputField.value.length;
}

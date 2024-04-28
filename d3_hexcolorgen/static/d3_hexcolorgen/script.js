const generate = document.querySelector(".generate");
const hexNumber = document.querySelector(".hexNumber");
function hexGen(){
  let color = "#"+Math.random().toString(16).substring(2,8);
  hexNumber.innerHTML = color;
  document.body.style.backgroundColor = color;
 console.log(color);
}


generate.addEventListener("click",hexGen);
hexGen();

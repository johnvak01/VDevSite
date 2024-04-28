const generate = document.querySelector(".generate");
const hexNumber = document.querySelector(".hexNumber");

function hexGen(){
    const hexNum = Math.floor(Math.random()*16);
    hexNumber.innerHTML = hexNum ;

}

generate.addEventListener("click",hexGen);
hexGen();

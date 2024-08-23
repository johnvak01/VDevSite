const keys = document.getElementsByTagName("li");
const result = document.querySelector("p");
const clear = document.querySelector(".clear");

clear.addEventListener("click",clearResult);

for(let i=0;i<keys.length;i++){
  console.log(keys[i]);
  if(keys[i].innerHTML === "="){keys[i].addEventListener("click",Calculate)}
  else{keys[i].addEventListener("click",addToValue(i))}i
}


function Calculate(){
  return (result.innerHTML=eval(result.innerHTML));
}

function clearResult(){result.innerHTML=""}

function addToValue(i){
  return ()=>{
    result.innerHTML+=keys[i].innerHTML;
  }
}

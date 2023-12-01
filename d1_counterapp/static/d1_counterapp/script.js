const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click",(e) => {
  if(e.target.classList.contains("add")){
    console.log("+1\n");
    count.innerHTML++;
  }
  else if(e.target.classList.contains("subtract")){
    console.log("-1\n");
    count.innerHTML--;
  
  }
  else if(e.target.classList.contains("reset")){
    console.log("reset\n");
    count.innerHTML=0;
  }
  setColor();
});

function setColor(){
  if(count.innerHTML > 0){
    count.style.color="yellow";
  }
  
  else if(count.innerHTML < 0){
    count.style.color="orangered";
  }
  
  else if(count.innerHTML == 0){
    count.style.color="#FFF";
  }
  
}

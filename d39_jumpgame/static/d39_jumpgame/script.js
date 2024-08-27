const hero = document.querySelector(".hero");
const villain = document.querySelector(".villain");
const hero_boy = document.querySelector(".hero-boy");

const jump = () => {
  if(hero.classList != "animate"){
    hero.classList.add("animate");
    villain.style.animation = "move 1s infinite";
  }
  setTimeout(()=>{hero.classList.remove("animate");},500);
}

document.addEventListener("keydown",(e)=>{
  if(e.code == "Space"){
    jump();
  }

});

let isAlive = setInterval(()=>{
  let hero_top = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
  let villain_left = parseInt(window.getComputedStyle(villain).getPropertyValue("left"));

  if(villain_left < 50 && hero_top > 65 ){
    villain.style.animation = "none";
    alert("Game Over Man! It's Game Over!");
  }
});




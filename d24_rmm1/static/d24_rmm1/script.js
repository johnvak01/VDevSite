const links = document.querySelectorAll(".nav-list li a");
for(link of links){
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e){
  e.preventDefault();
  
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({behavior: "smooth"});
  
  console.log(window.innerWidth);
  if(window.innerWidth < 600){
  hideMenu();
  }

}

const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".bi-list");
const close = document.querySelector(".bi-x");

const showMenu = ()=>{
  hamburger.style.display="none";
  close.style.transform="translateY(-5px)";
  menu.style.transform="TranslateY(0)";
}

const hideMenu = ()=>{
  hamburger.style.display="block";
  close.style.transform="translateY(-20rem)";
  menu.style.transform="TranslateY(-200rem)";
}

hamburger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);
window.addEventListener("resize",()=>{if(window.innerWidth>600){hamburger.style.display="none";close.style.transform="transformY(-200rem)";}else{hamburger.style.display="block";}});

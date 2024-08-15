const links = document.querySelectorAll(".nav-list li a");
for(link of links){
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e){
  e.preventDefault();

  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({behavior: "smooth"});
}

let nlinteract = false;

window.addEventListener("scroll",()=>{
  const header = document.querySelector("header");
  const progressBar = document.querySelector(".progress");
  const scrollIndicator = document.querySelector(".scroll-indicator");
  header.classList.toggle("sticky",window.scrollY > 0);
  const current_state= document.body.scrollTop || document.documentElement.scrollTop;
  const page_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scroll_percent = (current_state/page_height)*100;

  if(window.scrollY > 0){

    progressBar.style.visibility = "visible";
    scrollIndicator.style.visibility = "visible";
    progressBar.style.width = scroll_percent+"%";
  }else{
    progressBar.style.visibility = "hidden";
    scrollIndicator.style.visibility = "hidden";
  } 
  
  if(scroll_percent>=75 && nlinteract === false){
    const newsletter = document.querySelector(".newsletter");
    newsletter.style.transform = "TranslateX(0)";
  }
});

const newsclose = document.querySelector(".bi-x");
newsclose.addEventListener("click",()=>{
    const newsletter = document.querySelector(".newsletter");
    newsletter.style.transform = "TranslateX(-100%)";
  nlinteract = true;
  console.log("closed");
});



const links = document.querySelectorAll(".nav-list li a");
for(link of links){
  link.addEventListener("click", smoothScroll);
  
}

const nav_list = document.querySelector(".nav-list");
nav_list.addEventListener("click",updateActive);

function smoothScroll(e){
  e.preventDefault();

  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({behavior: "smooth"});
}

window.addEventListener("scroll",()=>{
  const header = document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY > 0);
  
});

function updateActive(e){
  const nav_link = e.target.parentElement;
  if(nav_link.classList.contains("link")){
    nav_list.querySelector(".active").classList.remove("active");
    nav_link.classList.add("active");
  }
}

const scroll_btn = document.querySelector(".top");
const root_el = document.documentElement;

document.addEventListener("scroll", showButton);
scroll_btn.addEventListener("click", ScrollToTop);

function showButton(){
  const scrollTotal=root_el.scrollHeight - root_el.clientHeight;
  if(root_el.scrollTop/scrollTotal > 0.3){
    scroll_btn.classList.add("show_button");
  }else{
    scroll_btn.classList.remove("show_button");
  }
}

function ScrollToTop(e){
e.preventDefault();
  root_el.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

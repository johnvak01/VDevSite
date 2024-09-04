const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const autoScroll=false;
let slideInterval;

const NextSlide = function(){
  const current=document.querySelector(".current");
  current.classList.remove("current");
  if(current.nextElementSibling){
    current.nextElementSibling.classList.add("current");
  }else{
    slides[0].classList.add("current");
  }
  auto();
}
const PrevSlide = function(){
  const current=document.querySelector(".current");
  current.classList.remove("current");
  if(current.previousElementSibling){
    current.previousElementSibling.classList.add("current");
  }else{
    slides[slides.length-1].classList.add("current");
  }
  auto();
}

next.addEventListener("click",()=>{NextSlide();});
prev.addEventListener("click",()=>{PrevSlide();});

function auto() {
  clearInterval(slideInterval);
  slideInterval=setInterval(NextSlide,5000);}

auto();

const btns = document.querySelectorAll(".btn");
const text = document.querySelector(".text");

btns.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
    const filter = e.target.dataset.link;
    //const filter = e.target.getAttribute("data-link");
    
    console.log(filter);
    if(filter=="home"){
    text.textContent = "HomePage"
    }
    else if(filter=="contact"){
    text.textContent = "ContactPage"
    }
    else if(filter=="about"){
    text.textContent = "AboutPage"
    }
  });
});


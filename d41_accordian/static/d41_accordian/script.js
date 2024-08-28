const acc = document.querySelectorAll(".accordian");

for(let x = 0; x < acc.length;x++){
  acc[x].addEventListener("click",function(){
    //this.classList.toggle(".active");
    const desc = this.nextElementSibling;
    
    const allDesc = document.querySelectorAll(".desc");
    const activeAcc = document.getElementsByClassName("accordian active"); 
    if(desc.style.maxHeight){
      desc.style.maxHeight = null;
      this.classList.remove("active");
    }else{
      for(let i = 0; i<allDesc.length;i++){
        allDesc[i].style.maxHeight = null;
      }
      desc.style.maxHeight = desc.scrollHeight + "px";
    }
  })
}

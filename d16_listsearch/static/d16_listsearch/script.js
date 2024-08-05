const input = document.getElementById("search");
input.addEventListener("keyup",adjustList);

function adjustList(){
  const inputval=input.value;
  const li = document.getElementsByTagName("li");

  for(i=0;i<li.length;i++){
    if(li[i].innerHTML.toLowerCase().includes(inputval)){
      li[i].style.display="block";
    }else{
      li[i].style.display="none";

    }

    
  }
}


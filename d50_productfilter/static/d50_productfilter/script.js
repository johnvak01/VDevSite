const filters = document.querySelectorAll(".btn");
const products = document.querySelectorAll(".product");
const empty_msg = document.querySelector(".no-result");
const search = document.getElementById("search");
const titles = document.querySelectorAll(".product h2");

search.addEventListener("keyup",SearchFilter);

for(let x=0; x<filters.length;x++){
  filters[x].addEventListener("click",function(e){
    e.preventDefault();
    const remove_target = document.querySelector(".active");
    remove_target.classList.remove("active");
    this.classList.add("active");
    FilterProducts(this.dataset.filter);
  });
}



function FilterProducts(filter){
  let isEmpty=true;
  for(let x = 0; x<products.length;x++){
    products[x].classList.remove("show");
    if(filter=="all"){
      products[x].classList.add("show");
      isEmpty=false;
    }else if(products[x].classList.contains(filter)){
      products[x].classList.add("show");
      isEmpty=false;
    }
    
  }
  SearchFilter(search.value);


  if(isEmpty){
    empty_msg.classList.add("show");
  } else{
    empty_msg.classList.remove("show");
  }
  

}
FilterProducts("all");

//search filter

function SearchFilter(e){
  titles.forEach(function(t){
    if(!t.innerHTML.toLowerCase().includes(search.value)){
      t.parentNode.parentNode.classList.remove("show");
    }
  });  
}





const button = document.querySelector("#checkbtn"),output=document.querySelector("#output");

button.addEventListener("click",checkVowels);

function checkVowels(){
  let input = document.querySelector(".input-text").value.toLowerCase();
  console.log(input);
  let count = 0;
  for(let x=0;x<input.length;x++){
    if(input[x].match(/([a,e,i,o,u])/)){
      count++;
    }
    
  }
  console.log(count);
  output.innerHTML = `the text ${input.toUpperCase()} has  ${count} vowels`
}

const button = document.querySelector(".button"), 
  output= document.querySelector(".output");

button.addEventListener("click",checkPalindrome);

function checkPalindrome(){

  const input = document.querySelector(".input-text").value;
  let inputLength = input.length;
  let firstHalf = input.substring(0,Math.floor(inputLength/2)).toLowerCase();
  let secondHalf = input.substring(Math.ceil(inputLength/2), inputLength).toLowerCase();

  secondHalf = secondHalf.split("").reverse().join("");
  if(firstHalf==secondHalf){
    output.innerHTML = `${input} IS a Palindrome`;
  } else{
    output.innerHTML = `${input} is NOT a Palindrome`;
  }


  console.log(firstHalf);
  console.log(secondHalf);
}

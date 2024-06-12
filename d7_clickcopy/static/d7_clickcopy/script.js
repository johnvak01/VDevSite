const copyButton = document.querySelector("#cpybtn"),
  copyCode = document.querySelector(".copycode");

copyButton.addEventListener("click", copyClick);

function copyClick (e){
  e.preventDefault();

  navigator.clipboard.writeText(copyCode.value).then( ()=>{
      copyButton.textContent = "Copied!";
      setTimeout(() => {
        copyButton.textContent = "Click to Copy"
      },3000);
  });
  
}
  

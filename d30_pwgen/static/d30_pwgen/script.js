const upper_opt = "ABCDEFGHIFKLMNOPQRSTUVWXYZ";
const lower_opt = "abcdefghijklmnopqrstufwxyz";
const num_opt = "0123456789"
const sym_opt = "!@#$%^&*-_=+";

const length = document.getElementById("length-field");
const upper = document.getElementById("uc-check");
const lower = document.getElementById("lc-check");
const sym = document.getElementById("sym-check"); 
const num = document.getElementById("num-check"); 

const copybtn = document.getElementById("cpy-btn");
const submitbtn = document.getElementById("submit-btn");
const outputtxt = document.getElementById("output-text");

submitbtn.addEventListener("click",GeneratePassword);

function GeneratePassword(e){
  let all_opt = "";
  if(upper.checked){all_opt+=upper_opt}
  if(lower.checked){all_opt+=lower_opt}
  if(num.checked){all_opt+=num_opt}
  if(sym.checked){all_opt+=sym_opt}

  console.log(all_opt);

  let password = "";
  for(let x=0;x<length.value;x++){
   password += all_opt[Math.floor(Math.random()*all_opt.length)];
  }
  
  outputtxt.value = password;
}

copybtn.addEventListener("click",CopyPassword);

function CopyPassword(){
  if(outputtxt.value==""){alert("Please Generate a Password");}
  else{
    outputtxt.select();
    document.execCommand("copy");
    alert("password has been copied");
  }
}

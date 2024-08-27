// --Convert Celsius to--
// f = (x * 1.8) + 32;
// k = x + 273.15;

// -- Convert Fah to --
// c = (x - 32) / 1.8;
// k = (x - 32) / 1.8 + 273.15;

// -- Conver Kelvin to --
// f = (x - 273.15) * 1.8 + 32;
// c = parseFloat(x) - 273.15;

const F = document.getElementById("F");
const C = document.getElementById("C");
const K = document.getElementById("K");
const form = document.querySelector("form");

form.addEventListener("input", convertTemp);

function convertTemp(e){
  let x = e.target.value;
  if(e.target.id == "F"){
    C.value = (x-32) / 1.8;
    K.value = parseFloat(C.value) + 273.15 ;
  }
  else if(e.target.id == "C"){
    F.value = (x * 1.8)+32 ;
    K.value = parseFloat(C.value) + 273.15 ;
  }
  else if(e.target.id == "K"){
    F.value = ((x - 273.15)*1.8)+32;
    C.value = parseFloat(K.value) - 273.15 ;
  }
}

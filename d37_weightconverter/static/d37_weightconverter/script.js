// -- From pounds to --
// kilograms = x / 2.2046;
// grams = x / 0.0022046;
// ounces = x * 16;

// -- From Kilogram to --
// pounds = x * 2.2046;
// grams = x * 1000;
// ounces = x * 35.274;

// -- From Gram to --
// kilograms = x / 1000;
//   pounds = x * 0.0022046;
//   ounces = x * 0.035274;

// -- From Ounce to --
// kilograms = x / 35.274;
// grams = x / 0.035274;
// pounds = x * 0.0625;

const lb = document.getElementById("lb");
const kg = document.getElementById("kg");
const g = document.getElementById("g");
const oz = document.getElementById("oz");
const form = document.querySelector("form");

form.addEventListener("input",convertWeight);

function convertWeight(e){
  let x = e.target.value;
  if(e.target.id == "lb"){
    kg.value = x/2.2046;
    g.value = x/0.0022046;
    oz.value = x*16;
  }
  else if(e.target.id == "kg"){
    lb.value = x * 2.2046;
    g.value = x * 1000;
    oz.value = x * 35.274;
  }
  else if(e.target.id == "g"){
    lb.value = x * 0.0022046;
    kg.value = x / 1000;
    oz.value = x * 0.035274;
  }
  else if(e.target.id == "oz"){
    lb.value = x * 0.0625;
    kg.value = x / 35.274;
    g.value = x / 0.035274;
  }
}

//bmi = kg/(m^2)
//normal - 18.5 - 24.9
//underweight < 18.5
//Overweight - 25-29.9
//obese - 30+

const calc_btn = document.getElementById("calc-btn");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const result = document.getElementById("result");
const reset = document.getElementById("reset");

calc_btn.addEventListener("click", calculateBMI);
reset.addEventListener("click",resetForm);
function calculateBMI(e){
  e.preventDefault();
  if(weight.value=="" || isNaN(weight.value) || isNaN(height.value) || height.value==""){
    alert("Please Fill out all fields correctly");
    return false;
  }

  let BMI = (weight.value/(Math.pow(height.value, 2) * 0.0001)).toFixed(1);
  let category;
  if(BMI < 18.5){
    category="Under-Weight";
    result.style.backgroundColor = "pink";
  }
  else if(BMI >= 18.5 && BMI < 25){
    category="Normal Weight";
    result.style.backgroundColor = "green";
  }
  else if(BMI >= 25 && BMI < 30){
    category="Over-Weight";
    result.style.backgroundColor = "orange";
  }
  else{
    category="Obese";
    result.style.backgroundColor = "red";
  }
  result.innerText = `${BMI} - ${category}` 
  reset.style.display="block";
}

function resetForm(e){
  e.preventDefault();
  reset.style.display="none";
  result.innerText="";
  weight.value="";
  height.value="";
}

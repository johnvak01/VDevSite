const bill = document.getElementById("bill");
const rate = document.getElementById("rate");
const btn_submit = document.getElementById("btn_submit");
const final_tip = document.getElementById("final_tip");
const final_bill = document.getElementById("final_bill");
const error_text = document.getElementById("error");

btn_submit.addEventListener("click", calculateTip)


function calculateTip(){
  //run checks
  if(bill.value === "" || rate.value === ""){
    error_text.innerText="Enter Bill and Rate Service to Determine Tip";
    error_text.style.display="block";
    const c = setTimeout(()=>{
      error_text.style.display="none";
    }, 3000);
  } else if(isNaN(bill.value)){
    error_text.innerText="Please provide a Number for the bill";
    error_text.style.display="block";
    const c = setTimeout(()=>{
      error_text.style.display="none";
    }, 3000);
  }

  // calculate and present
  let bill_value = Number(bill.value);
  console.log(bill_value);
  let rate_value= rate.value;
  console.log(rate_value);
  
  final_tip.innerText =` Tip Amount: $${(bill_value * rate_value).toFixed(2)}`;
  console.log(bill_value );
  final_bill.innerText = `Bill Amount: $${(bill_value + bill_value*rate_value).toFixed(2)}`; 
}

const form = document.querySelector("form");
const input = document.querySelector("input");
const array_output = document.querySelector("h2 + p");
const test_output = document.getElementById("results");

form.addEventListener("submit", ExpandArray);

function ExpandArray(e){
  e.preventDefault();
  let page_array = JSON.parse(array_output.innerHTML);
  page_array.push(input.value);
  array_output.innerHTML = JSON.stringify(page_array);

  RunTests(page_array);
}

function RunTests(testArray){
  
  let output = "";
  let tests = [AreInteger, AreOrdered, Includes1, ReturnInt, HasLetter,SortedArray,FindPositive,WhereOne,  PlusUltra, PlusOne,InverseArray,MissingLast, MissingFirst,AddZero];
  tests.forEach((test)=>{
    let test_result = test(testArray);
    output += `<li class="result">${test_result[0]}: ${test_result[1]}</li>`;
  });
 
  test_output.innerHTML = output;

}

//tests-------------------------------------
function AreInteger(array){
  let int_array =[];
  array.forEach((i)=>{
    int_array.push(Number(i));
  }); 
  return ["Are Integers", int_array.every(Number.isInteger)]
}

function AreOrdered(array){
  let int_array = [];
  let ordered = true;

  array.forEach((e,i,a)=>{
    int_array.push(Number(e));
    if(array[i] > array[i+1]){
      ordered = false
    }
  });
  return ["Are Ordered", ordered]
}

function Includes1(array){
  return ["Includes 1",array.includes("1")];
}

function ReturnInt(array){
  let total_int = array.filter((e)=>{
    let element = Number(e);
    return Number.isInteger(element);
  })
  return ["Integers Only Array", total_int]
}

function HasLetter(array){
  
  return ["Has a Letter", array.some((e)=>{
    for(let x = 0; x<array.length;x++){
      if(array[x].match(/[a-z]|[A-Z]/)){
        return true;
      }
    }
    return false;
  })];
}

function SortedArray(array){
  array.sort((a,b)=>{
    return a-b;
  });
  return ["Sorted Array", JSON.stringify(array)];
}

function PlusUltra(array){
  return ["Array Plus Ultra", JSON.stringify(array.concat(["Plus"], ["Ultra!!!"]))]; }

function PlusOne(array){
  let plus_one = array.map((e)=>{return e+1;});
  return ["Array Plus One", JSON.stringify(plus_one)];
}

function MissingLast(array){
  array.pop(); 
  return ["Array Missing Last", JSON.stringify(array)];
}

function InverseArray(array){
  return["Reversed Array",JSON.stringify(array.reverse())];
}

function MissingFirst(array){
  array.shift();
  return ["Array Missing First",JSON.stringify(array)];
}

function AddZero(array){
  array.unshift("0");
  return ["Array with Zero", JSON.stringify(array)];
}

function FindPositive(array){
  let value = false;   
  if(array.find((e)=>{return Number(e)>0;})){
    value=true;
  } 
  return ["Found Positive Number", value];

}

function WhereOne(array){
  return["One Index", array.findIndex((e)=>{return e==1})];
}

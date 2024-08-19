
window.localStorage.setItem("lastName","Hutch");
window.localStorage.setItem("firstName","John");

const person={
  firstName: "Maddie",
  lastname: "Smith",
  place: "Timpuktu",
  age: 1
}
window.localStorage.setItem("User",JSON.stringify(person));

const fruits =["pineapple","mango","apple"];
window.localStorage.setItem("fruits",JSON.stringify(fruits));

console.log(localStorage.getItem("User"));
localStorage.removeItem("fruits");

console.log(localStorage.key(1));

localStorage.clear();



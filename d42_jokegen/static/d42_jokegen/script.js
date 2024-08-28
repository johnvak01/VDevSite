const btn = document.querySelector(".btn");
const output = document.querySelector("p");

btn.addEventListener("click", getJoke);

//function getJoke(){
// const url = "https://api.chucknorris.io/jokes/random";
//  fetch(url)
//    .then((response)=>{return response.json();})
//      .then((data)=>{
//        console.log(data);
//        output.innerHTML = data.value;
//      });
//}
async function getJoke(){
  try{
    const url = "https://api.chucknorris.io/jokes/random";
    const response = await fetch(url);
    const data = await response.json();
    output.innerHTML = data.value;
  } catch(error){
    console.log(error.message);
  }
}

const button = document.getElementById("btn");
button.addEventListener("click", getUsers);

function getUsers(e){
  e.preventDefault();
  const httpRq = new XMLHttpRequest();
  httpRq.open("GET", "http://127.0.0.1:8000/d13_httpprototype/GetJSON",true);
  httpRq.onload = function(){
    if(this.status === 200 ){
      console.log(this.responseText);
      const users = JSON.parse(this.responseText);
      
      let output = "<h1>Users<h1>";
      
      users.forEach(function(user){
        output+=
        `
        <hr>
        <h2> User ${user.id} - ${user.name}: Age ${user.age}</h2>
        `
      })
      document.getElementById("users").innerHTML = output;


    } else{
      console.log(this.responseText);
    }
  }
  httpRq.send();
}

const buttonbtr = document.getElementById("btnbtr");
buttonbtr.addEventListener("click", getUsersBetter);

function getUsersBetter(e){
  e.preventDefault();
    
  fetch("http://127.0.1:8000/d13_httpprototype/GetJSON")
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
  
    let output = "<h1>Users<h1>";
    data.forEach(function(user){
      output+=
      `
      <hr>
      <h2> User ${user.id} - ${user.name}: Age ${user.age}</h2>
      `
    });
    document.getElementById("usersbtr").innerHTML = output;
  });






}


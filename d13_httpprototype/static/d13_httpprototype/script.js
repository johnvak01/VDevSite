const button = document.getElementById("btn");
button.addEventListener("click", getUsers);

function getUsers(e){
  e.preventDefault();
  const httpRq = new XMLHttpRequest();
  httpRq.open("GET", "http://127.0.0.1:8000/d13_httpprototype/GetJSON",true);
  httpRq.onload = function(){
    if(this.status === 200 ){
      console.log(this.responseText);
    } else{
      console.log(this.responseText);
    }
  }
  httpRq.send();
}


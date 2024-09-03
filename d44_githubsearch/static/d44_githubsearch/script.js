import * as variables from "./variables.js"

variables.form.addEventListener("submit",(e)=>{
  e.preventDefault();
  //let user = variables.search.value.split(" ").join("");
  let user = variables.search.value.replace(/\s+/g,"");

  //let user = variables.search.value.split(" ").join("");
  if(user==""){ErrorMessage("Please Enter a User to search for into the Text Field.");} 
  else{
    variables.form.reset();
    GetUser(user);
  }
});

function ErrorMessage(msg){
  variables.alert_box.style.display="block";  
  variables.alert_msg.innerHTML=msg;  
}

async function GetUser(user){
  console.log(user);
  const response = await fetch(variables.ApiUrl+user);
  if(!response.ok){ErrorMessage("User Not Found");return false;}
  const data = await response.json();
  DisplayData(data);
  GetRepos();
}

function DisplayData(data){
  variables.alert_box.style.display="none";  
  console.log(data);
  variables.profile.innerHTML = `<img src="${data.avatar_url}" alt="image" class="img-thumbnail rounded-circle"></img>
              <h2>${data.name}</h2>
              <div class="d-grid">
                <a href="${data.url}" target="_blank" rel="noopener" class="btn btn-outline-secondary">
                  View Profile
                </a>
              </div>
              <p class="pt-5">
                <span >Followers: ${data.followers}</span>
                <span> Following: ${data.following}</span>
              </p>
              <p>Repos: ${data.public_repos}</p>
              <p>
                <i class="bi bi-geo-alt-fill"></i>
                ${data.location}
              </p>
`

}

function GetRepos(getRepos){

}

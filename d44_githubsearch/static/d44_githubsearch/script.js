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
  variables.profile.innerHTML = "";
  variables.repos.innerHTML=""; 
  variables.repo_title.style.display="none";
}

async function GetUser(user){
  console.log(user);
  const response = await fetch(variables.ApiUrl+user);
  if(!response.ok){ErrorMessage("User Not Found");return false;}
  const data = await response.json();
  DisplayData(data);
  GetRepos(user);
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
`;
}

async function GetRepos(user){
  console.log(user);
  
  variables.repo_title.style.display="block";
  const response = await fetch(variables.ApiUrl+user+"/repos");
  if(!response.ok){ErrorMessage("User Not Found");return false;}
  let data = await response.json();
  console.log(data);

  let html = data.map((x)=>{
    return `<div class="col repo">
                <div class="border rounded p-3">
                  <p><a href="${x.url}" target="_blank" rel="noopener">${x.name}</a></p>
                  <p>Stars:${x.stargazers_count} | Watchers:${x.watchers} | Forks: ${x.forks} </p>
                </div>
              </div>`;
  });
  console.log(html);
  variables.repos.innerHTML=html.slice(0,8).join("");
  
  /*
  for(let x = 0; x < Math.min(data.length, 6);x++){
    console.log(x);
    html += `<div class="col repo">
                <div class="border rounded p-3">
                  <p><a href="${data[x].url}" target="_blank" rel="noopener">${data[x].name}</a></p>
                  <p>Stars:${data[x].stargazers_count} | Watchers:${data[x].watchers} | Forks: ${data[x].forks} </p>
                </div>
              </div>`
  }
 variables.repos.innerHTML=html;  */
}


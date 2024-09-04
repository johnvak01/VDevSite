const search_fld = document.querySelector("input");
const form = document.querySelector("form");
const search_results = document.querySelector(".results");
const alert_msg = document.querySelector(".alert");
const line = document.querySelector("hr");
const api_url = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";

form.addEventListener("submit", getResults);

async function getResults(e){
  e.preventDefault();
  let search_value = search_fld.value;
  if(search_value == ""){
    ErrorMsg("Please input a Search-Term");
    return false;
  }

  let response = await fetch(api_url+search_fld.value);
  let results =  await response.json();
  console.log(results);
  
  if(results.query.search.length == 0){
    ErrorMsg("No Results Found");
    return false;
  }
  
  DisplayResults(results)
}

function ErrorMsg(msg){
  alert_msg.textContent="msg";
  alert_msg.classList.remove("hide");
  line.classList.remove("hide");
  search_results.innerHTML = "";
}

function DisplayResults(results){
  
  alert_msg.classList.add("hide");
  line.classList.add("hide");
  let output = "";
  let url = "https://en.wikipedia.org/?curid="
  results.query.search.forEach((x)=>{
    output+=`
      <div class="result p-2">
                <a href="${url + x.pageid}" target="_blank" ref="noopener" class="h3 fw-bold">${x.title}</a>
                <br>
                <a href="${url+x.pageid}" target="_blank" ref="noopener" class="fs-5 text-success">${url+x.pageid}</a>
                <p class="fs-5">${x.snippet}</p>
                </div>`;
  });
  console.log(output);
  search_results.innerHTML = output;
  }

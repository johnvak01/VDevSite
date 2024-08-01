const btn = document.querySelector(".get-quotes");
btn.addEventListener("click",getQuotesFetch);
const number = document.getElementById("number");

function getQuotesAjax(e){
  e.preventDefault();

  if(number.value.length == 0){
  return alert("please enter a number");
  }
  const quote_request = new XMLHttpRequest();
  quote_request.open("GET", "https://type.fit/api/quotes", true)
  
  quote_request.onload = function(){
    if(this.status === 200){
      console.log(this.responseText);
      const responseText = JSON.parse(this.responseText);
      
      arrayShuffle(responseText);

      let output = "";
      for(let x = 0; x < number.value; x++){  
        console.log(responseText[x]);;
        output += `<li>Quote: ${responseText[x].text}<br> - ${responseText[x].author}</li><hr>`;
        output = output.replace("type.fit", '');

        if(x==responseText.length-1){
          document.getElementById("quotes").innerHTML = output;
          return alert(`I've no more Quotes to give.\nMy Quotes have runneth dry.\nI've tried to go Quote shopping, \nbut there's no more Quotes to buy.`);
        }
      }
      document.getElementById("quotes").innerHTML = output;
    }
    else
    {
    console.log(this.status)
    }
  }
  quote_request.send();
}

function arrayShuffle(passedArray){
  for(let i = passedArray.length-1; i > 0;i--){
  
  let randomIndex = Math.floor(Math.random() * i);
  let tempValue = passedArray[i];
  passedArray[i] = passedArray[randomIndex];
  passedArray[randomIndex] = tempValue;

  }
  return passedArray;
}


function getQuotesFetch(e){
  e.preventDefault();
  if(number.value.length == 0){
    return alert("please enter a number");
  }
  fetch("https://type.fit/api/quotes")
    .then(function(response){
      return response.json();
    }  
    )
    .then(
      function(response){
      
      console.log(JSON.stringify(response)

      arrayShuffle(response);

      let output = "";
      for(let x = 0; x < number.value; x++){  
        console.log(response[x]);;
        output += `<li>Quote: ${response[x].text}<br> - ${response[x].author}</li><hr>`;
        output = output.replace("type.fit", '');

        if(x==response.length-1){
          document.getElementById("quotes").innerHTML = output;
          return alert(`I've no more Quotes to give.\nMy Quotes have runneth dry.\nI've tried to go Quote shopping, \nbut there's no more Quotes to buy.`);
        }
      }
      document.getElementById("quotes").innerHTML = output;
      }
    );
}

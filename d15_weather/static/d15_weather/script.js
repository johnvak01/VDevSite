const api = {
  key:"",
  base: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");

btn.addEventListener("click",CheckWeather);

function CheckWeather(e){
  e.preventDefault();

  if(e.type=="click"){
  getData(search.value);
  }

}

function getData(value){
 fetch(`${api.base}weather?q=${search.value}&units=imperial&appid=${api.key}`)
  .then(
    response => {
      return response.json();
    }
  )
  .then(displayData
    
  );
}

function displayData(response){
  console.log(response);
  const errormsg = document.querySelector(".error");
  errormsg.innerHTML = ""; 
  if(response.cod === "404"){
    errormsg.innerHTML = "Error. Check city is valid and try again."
    search.value = "";
  }
  else{
    const city = document.querySelector(".city");
    const time = document.querySelector(".time");
    const temp = document.querySelector(".temp");
    const weather = document.querySelector(".weather");
    const temp_range = document.querySelector(".temp_range");
    const weather_icon = document.querySelector(".weather_icon");

    city.innerHTML = `${response.name}, ${response.sys.country}`;
    const today=new Date();
    time.innerHTML = dateFunction(today);
    temp.innerHTML = `Temp: ${Math.round(response.main.temp)}F`;
    weather.innerHTML = `Weather: ${response.weather[0].main}`;
    temp_range.innerHTML = `Temperature Range: ${Math.round(response.main.temp_min)}F to ${Math.round(response.main.temp_max)}F`;
    let iconUrl = "http://openweathermap.org/img/w/";
    weather_icon.src = iconUrl + response.weather[0].icon + ".png";
    search.value = "";
  }
}

function dateFunction(d){
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`
}

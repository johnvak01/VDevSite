const userlocation = document.getElementById("location");
const button = document.querySelector(".btn");


function showPosition(position){
  console.log("test2");
}

button.addEventListener("click", () => {
  console.log("test");
  console.log("test2");
  navigator.geolocation.getCurrentPosition(
    (position)=>{console.log("success");
      userlocation.innerHTML=
        `Latitude: ${position.coords.latitude} <br>
         Longitude: ${position.coords.longitude}` ;
    },
    ()=>{console.log("failure");},
    {timeout:1000, enableHighAccuracy:false}
  )
}
);


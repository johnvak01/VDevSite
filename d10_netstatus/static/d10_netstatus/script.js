//window.addEventListener("load", (event)=>{
//  const statusValue = document.getElementById("statusValue");
//  statusValue.textContent = navigator.onLine ? "Online" : "Offline";
//});

//v2

const imageOnline = document.getElementById("online-img");
const imageOffline = document.getElementById("offline-img");
const statusValue = document.getElementById("statusValue");
const BGColor = document.getElementById("main");

setInterval(connectionStatus,5000);


async function connectionStatus(){
  try{
    const fetchResult = await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/800px-Tux.svg.png?time'+(new Date()).getTime());
  
    console.log("image recieved");
    BGColor.classList.add("online");
    imageOnline.style.display="inline";
    imageOffline.style.display="none";
    statusValue.textContent = "Online"
  
    return fetchResult.status > 200 && fetchResult.status < 300;
  }
  catch(error){
    
    console.log("offline" + error);
    BGColor.classList.remove("online");

    imageOnline.style.display="none";
    imageOffline.style.display="inline";

    statusValue.textContent = "Offline"
  }
}



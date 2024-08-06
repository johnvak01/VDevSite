let time_min = 10;
let time_sec = time_min*60;

const countdown = document.getElementById("clock");


function StartCountdown(){
  const c = setInterval(
    ()=>{
      if(time_sec > 0){
        time_sec--;
        const days = Math.floor(time_sec/(3600*24));
        const hours = Math.floor(time_sec/(3600))%24;
        const mins = Math.floor(time_sec/(60))%60;
        const secs = Math.floor(time_sec%60);
        
        countdown.textContent = `Days ${days} : Hrs ${format(hours)} : Mins ${format(mins)} : Secs ${format(secs)}`;
      }
      else{
        clearInterval(c);
        countdown.textContent = "Countdown has ended";
      }
    }, 1000
  );
}


function format(time){
  return time < 10 ? `0${time}`: time;
}

StartCountdown();

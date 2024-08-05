let current_year = 2020;
const today=new Date(); 
while (today.getFullYear()>= current_year){
  current_year++;
  console.log(current_year);
}


let target_time = `1 Jan ${current_year}`;
const countdown = document.getElementById("clock");
const c = setInterval(()=>{
  const end_date = new Date(target_time);
  const current_date = new Date();
  const difference =(end_date - current_date)/1000;
  
  const days = Math.floor(difference/(3600*24));
  const hours = Math.floor(difference/(3600))%24;
  const mins = Math.floor(difference/(60))%60;
  const secs = Math.floor(difference%60);
   
  countdown.textContent = `Days ${days} : Hrs ${format(hours)} : Mins ${format(mins)} : Secs ${format(secs)}`;
  if(difference < 0){
    countdown.textContent="Happy New Year!"
    clearInterval(c);
  }

},1000);

function format(time){
  return time < 10 ? `0${time}`: time;
}

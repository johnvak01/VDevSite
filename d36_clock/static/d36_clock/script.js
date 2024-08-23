const date_display = document.querySelector(".date");
const time_display = document.querySelector(".time");

setInterval(updateTime,1000);

function updateTime(){
  let today = new Date();
  date_display.innerHTML=getDate(today);
  time_display.innerHTML=getTime(today);

}

function getTime(d){
  let am = "AM";
  let hour = d.getMinutes();
  if(hour > 12){
    hour-12;
    am="PM"
  }else if(hour === 0 ){
    hour = 12;
  }
  return `${formatTime(d.getHours())}:${formatTime(hour)}:${formatTime(d.getSeconds())} ${am}`;

}

function getDate(d){
  let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"];
  
  let days=[
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri"]

  let tday=days[d.getDay()];
  let tdate=d.getDate();
  let tmonth=months[d.getMonth()];
  let tyear=d.getFullYear();

  return `${tday}, ${formatTime(tdate)} ${tmonth} ${tyear} `;
}

function formatTime(num){
    return num > 10 ? num : `0${num}`;
}

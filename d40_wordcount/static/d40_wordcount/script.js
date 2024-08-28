const character = document.querySelector(".character");
const word_count = document.querySelector(".word-count");
const words_remaining = document.querySelector(".words-remaining");
const read_time = document.querySelector(".read-time");
const input = document.querySelector("textarea");
const word_limit = 1000;

input.addEventListener("keydown", limitLength);
input.addEventListener("keyup", reCalculate);
function reCalculate(){
  character.innerHTML=input.value.length;
  let words = input.value.match(/\b[-?(\w+)?]+\b/gi);
 
  if(word_count){
  word_count.innerHTML=words.length;
  words_remaining.innerHTML = word_limit-parseInt(word_count.innerHTML);
  }
  else{
    word_count.innerHTML=0;
  }

  // Reading Time
  let wpm = 225
  if(word_count){
    let sec=Math.floor((words.length * 60 )/wpm);
    let min = 0;
    if (sec > 59){
      min=Math.floor(sec/60);
      sec = sec-(min*60)
    }
    read_time.innerHTML=`${min}m, ${sec}s`


  }
}

function limitLength(e){
  console.log(e.code);
  if(parseInt(word_count.innerHTML) > word_limit - 1 && (e.code != "Backspace" && e.code != "Delete")){
    e.preventDefault();
    console.log("blocked");
  }
}

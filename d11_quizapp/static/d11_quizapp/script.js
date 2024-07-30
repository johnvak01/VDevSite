class Question{
  constructor(text, choices, answers){
    this.text = text;
    this.choices = choices;
    this.answer = answers;
  }
  isCorrectAnswer(choice){
      return this.answer === choice;
  }
  
}

class Quiz {
  constructor(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }
  getQuestionByIndex(){
    return this.questions[this.questionIndex];
  }
  guessAnswer(answer){
    if(this.getQuestionByIndex().isCorrectAnswer(answer)){
      this.score++;
    }
    this.questionIndex++;  
  }
  isEnded(){
    return this.questionIndex === this.questions.length;
  }
}

function displayQuestion(){
  if(newquiz.isEnded()){
   showScores(); 
  }
  else{
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = newquiz.getQuestionByIndex().text;
    let choices = newquiz.getQuestionByIndex().choices;
    for(let i=0;i<choices.length;i++){
      let choiceElement = document.getElementById("btn-"+i);
      choiceElement.innerHTML = choices[i];     
      addGuessTrigger("btn-"+i, choices[i]);
    }
    showProgress();
  }
}

function showScores(){
  let questionButtons = document.querySelector(".buttons");
  questionButtons.style.display = "none";
  let questionTitle = document.getElementById("question");
  questionTitle.style.display = "none";
  let questionCounter = document.getElementById("q-counter");
  questionCounter.style.display = "none";
  let timeCounter = document.getElementById("t-counter");
  timeCounter.style.display = "none";
  
  let finalScore = document.getElementById("score");
  finalScore.style.display = "flex";
  finalScore.innerHTML = `You Scored ${newquiz.score} out of ${newquiz.questions.length}`;
  let retakeButton = document.getElementById("retake");
  retakeButton.style.display = "flex";
}

function showProgress(){
  let currentQuestionIndex = newquiz.questionIndex + 1;
  let progressElement= document.getElementById("q-counter");
  progressElement.innerHTML = `You're on Question ${currentQuestionIndex} of ${newquiz.questions.length}`;
  
}

function addGuessTrigger(id, guess){
  let button = document.getElementById(id);
  button.onclick = function(){
    newquiz.guessAnswer(guess);
    displayQuestion();
  }
}

function Refresh(){
  location.reload();
}

let quizQuestions = [
  new Question("What does the Dorn say?",["Moo","NOt CANON","Boy","No"],"No"),
  new Question("What does the Raven Guard say?",["Caw","NOT CANON","Boy","No"],"Caw"),
  new Question("What does the Salamander say?",["Vulkan LIVES!","NOT CANON","Boy","No"],"Vulkan LIVES!"),
  new Question("What does the Blood Angel say?",["Sanguinious!","NOT CANON","Boy","No"],"Sanguinious!")
  ]
; 

let newquiz = new Quiz(quizQuestions);

displayQuestion();

let countdown_timer = document.getElementById("t-counter");
let time_limit=1;
let current_time = time_limit * 3600;
let display_time = current_time/60;

function startCountdown(){
    let quizTimer = setInterval(function(){
      if(display_time<0){
        clearInterval(quizTimer);
        showScores();
      }
      else{
        display_time--;
        let sec = Math.floor(display_time % 60);
        let min = Math.floor(display_time / 60) % 60;
        countdown_timer.innerHTML = `Time ${min}:${sec}`;
      }
    },1000);
}
startCountdown();

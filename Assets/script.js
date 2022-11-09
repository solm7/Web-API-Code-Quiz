function start() {
  var show = document.querySelector(".hide");
  console.log(show);
  show.className = "grid";
  var startButton = document.querySelector("#start-button");
  startButton.className = "hide";
  var nextButton = document.querySelector("#next-button");
  nextButton.className = "grid";
  setTime();
  console.log("Updated fix");
}

function nextQuestion() {
  if (count < questions.length) {
    count++;

    var question = questions[count];
    var questionTag = document.querySelector("#question");
    questionTag.innerHTML = question.Question;
    var buttonTags = document.querySelector("#answer-buttons").children;
    console.log(buttonTags);
    var answer1 = buttonTags[0];
    var answer2 = buttonTags[1];
    var answer3 = buttonTags[2];
    var answer4 = buttonTags[3];
    answer1.innerHTML = question.Answer1;
    answer2.innerHTML = question.Answer2;
    answer3.innerHTML = question.Answer3;
    answer4.innerHTML = question.Answer4;
    console.log(count);
  }
}
if (count === 3) {
  var studentGrade = {
    Grade: score,
  };
  localStorage.setItem("TotalScore", JSON.stringify(studentGrade));
  var answerButtons = document.querySelector("#answer-buttons");
  answerButtons.className = "hide";
}
var questions = [
  {
    Question: "Which is an HTML element?",
    Answer1: "Rock",
    Answer2: "Paper",
    Answer3: "Sciccors",
    Answer4: "Div",

    correctAnswer: "Div",
  },
  {
    Question: "Which is a Coding Language?",
    Answer1: "Basketball",
    Answer2: "Soccer",
    Answer3: "CSS",
    Answer4: "Football",

    correctAnswer: "CSS",
  },
  {
    Question: "Which language is Dynamic?",
    Answer1: "Spanish",
    Answer2: "Portuguese",
    Answer3: "JavaScript",
    Answer4: "HTML",

    correctAnswer: "JavaScript",
  },
];
var count = 0;
var nextButton = document.querySelector("#next-button");
nextButton.addEventListener("click", nextQuestion);

//Function determining if answer is Correct
function selectAnswer(element) {
  var selectedAnswer = element.innerHTML;
  var question = questions[count];
  if (question.correctAnswer === selectedAnswer) {
    alert("Correct!");
    score++;
    var keepScore = document.querySelector("#Score");
    keepScore.innerHTML = "Total Score " + (score / 3) * 100;
  } else {
    alert("Incorrect!");
    secondsLeft = secondsLeft - 4;
  }
  console.log(selectedAnswer);
  console.log(question.correctAnswer);
}
var timeEl = document.querySelector("#Time");
//Timer Function
var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left in quiz.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      var answerButtons = document.querySelector("#answer-buttons");
      answerButtons.className = "hide";
    }
  }, 1000);
}
var buttonTags = document.querySelector("#answer-buttons").children;
console.log(buttonTags);
var answer1 = buttonTags[0];
var answer2 = buttonTags[1];
var answer3 = buttonTags[2];
var answer4 = buttonTags[3];

var score = 0;

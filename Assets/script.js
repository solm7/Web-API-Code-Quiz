function start() {
    var show = document.querySelector(".hide")
    console.log(show)
    show.className = "grid"
    var startButton = document.querySelector("#start-button")
    startButton.className = "hide"

}

function nextQuestion() {
    var questions = [{
        Question: "Which is a HTML element?",
        Answer1: "Rock",
        Answer2: "Paper",
        Answer3: "Scissors",
        Answer4: "Div",
    }, {
        Question: "Which is a Coding Language?",
        Answer1: "Basketball",
        Answer2: "Soccer",
        Answer3: "CSS",
        Answer4: "Football",
    },
    {
        Question: "Which language is Dynamic?",
        Answer1: "Spanish",
        Answer2: "Portuguese",
        Answer3: "JavaScript",
        Answer4: "HTML",
    }];

}


function selectAnswer() {
    var button = document.querySelector(".button")
    button.items(3)

}

let timerEl = document.getElementById('timer');
let startBtn = document.getElementById('button');
let questionsEl = document.getElementById('questions');
let resultsEl = document.getElementById('final__results');
let answerABtn = document.getElementById('answerA');
let answerBBtn = document.getElementById('answerB');
let answerCBtn = document.getElementById('answerC');
let answerDBtn = document.getElementById('answerD');
let testing = document.getElementById('testing');
let statusBox = document.getElementById('statusBox');
let textBlock = document.getElementById('text-block');
let quizBody = document.getElementById('codingQuiz');


let quizQuestions = [{
    question: "Which of these tags is a self closing tag?",
    a: "<div>",
    b: "<img>",
    c: "<header>",
    d: "<body>",
    correctAnswer: "b"
},
{
    question: "What makes an img tag unique?",
    a: "It closes by itself",
    b: "It has an ALT attribute",
    c: "It has an HREF in it",
    d: "It has an SRC in it",
    correctAnswer: "b"
},
{
    question: "How many types of heading does an HTML contain?",
    a: "5",
    b: "6",
    c: "7",
    d: "8",
    correctAnswer: "b"
},
{
    question: "Which of these tags is used to display content in tabular form?",
    a: "<td>",
    b: "<caption>",
    c: "<colgroup>",
    d: "<table>",
    correctAnswer: "d"
},
{
    question: "Do all HTML tags have an end tag?",
    a: "yes",
    b: "no",
    c: "maybe",
    d: "Who knows",
    correctAnswer: "b"
},
];

let timer;
let losses = 0;
let wins = 0;
let won = false;
var questionsIndex = quizQuestions.length;
var currentQuestionIndex = 0;

// Questions appear and it has 4 options to choose from, 
function htmlQuestions() {

    if (currentQuestionIndex === questionsIndex) {
        return finalResults();
    }

    var currentQuestion = quizQuestions[currentQuestionIndex];

    questionsEl.textContent = currentQuestion.question.toString();
    answerABtn.textContent = currentQuestion.a.toString();
    answerBBtn.textContent = currentQuestion.b.toString();
    answerCBtn.textContent = currentQuestion.c.toString();
    answerDBtn.textContent = currentQuestion.d.toString();
    console.log('currentQuestion', currentQuestion = quizQuestions[currentQuestionIndex]);

}

let correctAnswer;

function verifyAnswers(answer) {
    console.log('verifyAnswers function ran');
    console.log('quizQuestions[currentQuestionIndex]', quizQuestions[currentQuestionIndex]);
    correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
    console.log('verifyAnswer', verifyAnswers);

    if (answer === correctAnswer && currentQuestionIndex !== questionsIndex) {
        timer += 5;
        wins++;
        statusBox.innerHTML = 'Correct! Let us go for another right answer! You gained 5 seconds'

        currentQuestionIndex++;
        htmlQuestions();
    } else if (answer !== correctAnswer && currentQuestionIndex !== questionsIndex) {
        statusBox.innerHTML = 'Not Correct! Try again for a correct answer on the question above. You lost 5 seconds'
        timer -= 5;
        looses++;
        console.log('timerValue', timer);

        currentQuestionIndex++;
        htmlQuestions();
    } else {
        finalResults();
    }
}

function initTimer() {
    console.log('init Timer hit');
    timer = 3;
    won = false;

    var timerInterval = setInterval(function () {
        timer--;
        let msg = "seconds left until quiz is over!";
        timerEl.textContent = timer + " " + msg;

        if (timer <= 0) {
            console.log('hit zero');
            losses++;
            clearInterval(timerInterval);
            finalResults();
            textBlock.classList.remove('display-block');
            textBlock.classList.add('display-none');
        }
    }, 1000);
};

function startQuiz() {
    console.log("start Quiz", startQuiz);
    htmlQuestions()
    initTimer();
    startBtn.classList.add('display-none');
    textBlock.classList.add('display-block');

}

let answerBtns = document.querySelectorAll('.answerBtn');

answerBtns.forEach((button) => {
    console.log('button clicked');
    button.addEventListener('click', (e) => {
        let answerSelected = e.target.dataset.answer;
        console.log('answerSelected', answerSelected);
        verifyAnswers(answerSelected);
    });
});

let finalScores = document.getElementById('final__results');
let initialsDiv = document.getElementById('initials');
let scoresDiv = document.getElementById('scores');

// Function for displaying final scores after game is over, here you can input initial and save 
function finalScoreinput() {
    console.log(finalScoreinput);
    quizBody.style.display = "none";
    finalScores.style.display = "flex";
    initialsDiv.value = "";
    scoresDiv.textContent = "You got " + wins + " out of " + quizQuestions.length + " correct!";
}


// function for showing final resultss, user can save initials and score 

function finalResults() {
    console.log("Final Results function hit");
    finalScoreinput();

    // currentUrl = window.location.href;
    // console.log(currentUrl);
    // currentUrl.replace('index', 'finalresults');
    // window.location.href = currentUrl;

}


startBtn.addEventListener("click", startQuiz);
console.log("button activated");



// List of variables targeting html elements used later on 
let timerEl = document.getElementById('timer');
let startBtn = document.getElementById('start__button');
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

// Array of quiz questions and answers (I have it hidden to save space)
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

// Global variables used in below functions
let timer;
let lost = 0;
let wins = 0;
let won = false;
var questionsIndex = quizQuestions.length;
var currentQuestionIndex = 0;

// Questions appear and it has 4 options to choose from, 
function htmlQuestions() {

    // Check to see if we are at the last index, if it is we go to final results
    if (currentQuestionIndex === questionsIndex) {
        return finalResults();
    }

    // Functions runs every time unless we are on the last question
    var currentQuestion = quizQuestions[currentQuestionIndex];

    // grabbing the different parts of the array as appropriate and adding them to the appropriate button
    questionsEl.textContent = currentQuestion.question.toString();
    answerABtn.textContent = currentQuestion.a.toString();
    answerBBtn.textContent = currentQuestion.b.toString();
    answerCBtn.textContent = currentQuestion.c.toString();
    answerDBtn.textContent = currentQuestion.d.toString();

};

let correctAnswer;

// function runs to verify if the button selected is true or false
function verifyAnswers(answer) {
    correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

    // if the answer is correct, add 5 seconds to the timer and give a message
    // then run htmlQuestions() functions to generate new question
    if (answer === correctAnswer && currentQuestionIndex !== questionsIndex) {
        timer += 5;
        statusBox.innerHTML = 'Correct! Let us go for another right answer! You gained 5 seconds';
        currentQuestionIndex++;
        htmlQuestions();

        // if not correct, remove 5 seconds and give a message
        // then run htmlQuestions() functions to generate new question
    } else if (answer !== correctAnswer && currentQuestionIndex !== questionsIndex) {
        statusBox.innerHTML = 'Not Correct! Try again for a correct answer on the question above. You lost 5 seconds';
        timer -= 5;
        currentQuestionIndex++;
        htmlQuestions();

        //  otherwise run the finalResults function
    } else {
        finalResults();
    }
};

// function initTimer() that runs the timer
function initTimer() {
    timer = 60;
    won = false;

    var timerInterval = setInterval(function () {
        timer--;
        let msg = "seconds left until quiz is over!";
        timerEl.textContent = timer + " " + msg;

        // if the timer hits 0 they lost, clear timer and run the final results function. Also, remove the questions block
        if (timer <= 0) {
            lost++;
            clearInterval(timerInterval);
            finalResults();
            textBlock.classList.remove('display-block');
            textBlock.classList.add('display-none');
        }
    }, 1000);
};

// this hides the start button and shows the text block for the questions when the quiz starts, starts the timer and starts the htmlQuestions() function 
function startQuiz() {
    htmlQuestions()
    initTimer();
    startBtn.classList.add('display-none');
    textBlock.classList.add('display-block');

};

let answerBtns = document.querySelectorAll('.answerBtn');

// This attaches a click event to each answer button to run the verifyAnswers function onclick
answerBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        let answerSelected = e.target.dataset.answer;

        verifyAnswers(answerSelected);
    });
});

// function for showing final resultss, user can save initials and score 

function finalResults() {
    console.log("Final Results function hit");
    // adding scores to win if the timer is greater than 0
    if (timer > 0) {
        wins++;

        // add scores to the lost if the timer is 0
    } else {
        lost++;

    }
    // Need something here to send the final wins and lost to local storage 
    localStorage.setItem("wins", JSON.stringify(wins));
    localStorage.setItem("lost", JSON.stringify(lost));
    localStorage.setItem("timer", JSON.stringify(timer));
    window.location.href = "finalresults.html"

};

// When you click the start button the startQuiz function is triggered
startBtn.addEventListener("click", startQuiz);



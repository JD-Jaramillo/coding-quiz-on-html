let finalScores = document.getElementById('final__results');
let initialsInput = document.getElementById('initials__input');
let savedIntitals = document.getElementById('savedInitials');
let savedHighScore = document.getElementById('savedHighScore');
var playAgainBtn = document.getElementById('play__again');
var clearScoresBtn = document.getElementById('clear__scores');
var submitBtn = document.getElementById('submit__button');

var winPoints = JSON.parse(localStorage.getItem("wins"));
var lostPoints = JSON.parse(localStorage.getItem("lost"));
var currentHighScore = JSON.parse(localStorage.getItem("timer"));

// Function for submitting initials and startign High scores
function initiateHighScores() {
    console.log(inititateHighScores);

    if (initialsInput.value === "") {
        initialsInput.value = "Initials cannot be blank"
        return false;
    } else {
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var player = initialsInput.value.trim();
        var currentHighScore = {
            name: player,
            score: currentHighScore
        };
    }
}

// Function for displaying final scores after game is over, here you can input initial a
function finalScoreInput() {
    console.log(finalScoreInput);

    var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    savedIntitals.textContent = initialsInput +
        savedHighscores.textContent = "You got a score of " + timer;
}

// Need this for user to be able to return to game 
function returnToGame() {
    console.log('returnToGame', returnToGame)
    window.location.href = "index.html"
}

function clearScores() {
    console.log('clearScores', clearScores)
    // need this to clear scores in the local storage
    window.localStorage.clear();
    initialsDiv.textContent = "";
    scoresDiv.textContent = "";
};

submitBtn.addEventListener("click", initiateHighScores);
console.log('submit button', submitBtn);
playAgainBtn.addEventListener("click", returnToGame);
console.log('play again button', playAgainBtn);
clearScoresBtn.addEventListener("click", clearScores);
console.log('clear scores button', clearScoresBtn);

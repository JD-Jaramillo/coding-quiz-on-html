let finalScores = document.getElementById('final__results');
let initialsInput = document.getElementById('initials__input');
let savedIntitals = document.getElementById('savedInitials');
let allSavedIntitals = document.getElementById('allSavedInitials');
let savedHighScore = document.getElementById('savedHighScore');
var playAgainBtn = document.getElementById('play__again');
var clearScoresBtn = document.getElementById('clear__scores');
var submitBtn = document.getElementById('submit__button');

var currentHighScore = JSON.parse(localStorage.getItem("timer"));

// Function for submitting initials and starting High scores
function initiateCurrentScores() {
    console.log(inititateHighScores);

    if (initialsInput.value === "") {
        initialsInput.value = "Initials cannot be blank"
        return false;
    } else {
        var player = initialsInput.value.trim();
        var showCurrentHighScore = {
            name: player,
            score: currentHighScore,
        };
        finalScoreInput();
    }
}


// Function for displaying final scores after game is over and you have submited your initials inthe function above
function finalScoreInput() {
    console.log(finalScoreInput);

    var savedWins = document.getElementById('savedWins');
    var savedLost = document.getElementById('savedLost');
    var winPoints = JSON.parse(localStorage.getItem("wins"));
    var lostPoints = JSON.parse(localStorage.getItem("lost"));
    var allSavedInitials = JSON.parse(localStorage.getItem("savedInitials")) || [];

    allSavedIntitals.textContent = initialsInput + allSavedInitials;
    savedHighscore.textContent = "You got a score of " + currentHighScore;
    savedWins.textContent = winPoints;
    savedLost.textContent = lostPoints;

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
    allSavedIntitals.textContent = "";
    savedHighscore.textContent = "";
};



submitBtn.addEventListener("click", initiateCurrentScores);
console.log('submit button', submitBtn);

playAgainBtn.addEventListener("click", returnToGame);
console.log('play again button', playAgainBtn);

clearScoresBtn.addEventListener("click", clearScores);
console.log('clear scores button', clearScoresBtn);

// List of variables targetign HTML elements used later on 
let finalScores = document.getElementById('final__results');
let initialsInput = document.getElementById('initials__input');
let savedIntitals = document.getElementById('savedInitials');
let allSavedIntitals = document.getElementById('allSavedInitials');
let savedHighScore = document.getElementById('savedHighScore');
var playAgainBtn = document.getElementById('play__again');
var clearScoresBtn = document.getElementById('clear__scores');
var submitBtn = document.getElementById('submit__button');

var currentHighScore = JSON.parse(localStorage.getItem("timer")) || [];

// Function for displaying final scores after game is over and you have submited your initials
function initiateCurrentScores() {

    if (initialsInput.value === "") {
        alert('Initials cannot be blank');
        return false;
    } else {
        // Variables added for the Sore Stats table to work, getting the wins and losses from local storage
        var savedWins = document.getElementById('savedWins');
        var savedLost = document.getElementById('savedLost');
        var winPoints = JSON.parse(localStorage.getItem("wins"));
        var lostPoints = JSON.parse(localStorage.getItem("lost"));

        allSavedIntitals.textContent = initialsInput.value.trim();
        savedHighScore.textContent = currentHighScore;
        savedWins.textContent = winPoints;
        savedLost.textContent = lostPoints;
    }
}


// Need this for user to be able to return to game 
function returnToGame() {
    window.location.href = "index.html"
}

function clearScores() {
    // need this to clear scores in the local storage
    window.localStorage.clear();
    allSavedIntitals.textContent = "";
    savedHighScore.textContent = "";
};


// This are the click event listeners for the 3 buttons that run this page, with the submit button initain the currentScores function
submitBtn.addEventListener("click", initiateCurrentScores);
// Button allows user to retutn to game
playAgainBtn.addEventListener("click", returnToGame);
// Button allows user to clear scores 
clearScoresBtn.addEventListener("click", clearScores);
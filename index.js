var compChoice;
var userChoice;
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var wrongGuesses = [];

function tesadufiHerfSech () {
    var min = 97;
    var max = 123;

    var reqem = Math.floor(Math.random() * (max - min) + min);
    var herf = String.fromCharCode(reqem);

    console.log(herf)
    return herf;

}

function resetGame () {
    guessesLeft = 9;
    wrongGuesses = [];
    compChoice = tesadufiHerfSech();

}

function showGameStats () {
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
    document.querySelector("#wrong-guesses").innerHTML = wrongGuesses;
}

function startGame (e) {
    userChoice = e.key;
    if(!compChoice){
        compChoice = tesadufiHerfSech();
    }
    if(userChoice !== compChoice){
        wrongGuesses.push(userChoice);
        guessesLeft--;
    }else{
        resetGame();
        wins++;
    }
    if(guessesLeft == 0){
        losses++;
        resetGame()
    }
    showGameStats();
    
}

window.onkeypress = startGame;

showGameStats();
let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio ("music.mp3")
const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
   document.getElementById("newGameButton").style.display = "none";
   document.getElementById("gamearea").style.display = "none";
};

const startGame = () => {

    document.getElementById("welcomeScreen").style.display = "none";
   document.getElementById("gamearea").style.display = "block";
};

//reload the page   

const newGameBegin = () => {
    audio.play();
    window.location.reload();
};

// start new game

const startNewGame = () => {
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled", true);
}


// main login of our app
const compareGuess = () => {
    audio.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;

    // check the value low or high


    if (userGuess.length < maxGuess) {
       if(userNumber > computerGuess) {
        userGuessUpdate.innerHTML = "Your guess is High 😮";
        userNumberUpdate.value = "";
       } else if  (userNumber < computerGuess)   {
        userGuessUpdate.innerHTML = "Your guess is low 😔";
        userNumberUpdate.value = "";
       } else {
        userGuessUpdate.innerHTML = "It's Correct 😊";
        userNumberUpdate.value = "";
        startNewGame();
       }
    }  else {
       if(userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `You Loose!! correct number was ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        } else if  (userNumber < computerGuess)   {
            userGuessUpdate.innerHTML = `You Loose!! correct number was ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        } else {
            userGuessUpdate.innerHTML = "It's Correct 😊";
            userNumberUpdate.value = "";
            startNewGame();
        }

    }

       document.getElementById("attempts").innerHTML = userGuess.length;
};




const easyMode = () => {
    audio.play();
    maxGuess = 10;
    startGame();
};

const hardMode = () => {
    audio.play();
    maxGuess = 5;
    startGame();
};


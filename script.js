const roundNo = document.querySelector("#roundNo");
const reset = document.querySelector("#reset");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let choice = ["rock", "paper", "scissors"];
let gameCount = 0;
let playerScore = 0;
let computerScore = 0;
let computerSelection = null;
let playerSelection = null;
let text = null;
let gameOf = null;

roundNo.addEventListener("click", () => {
    if (isNaN(gameOf) == true || gameCount >= gameOf) {
        gameOf = null;
        getGame();
    } else {
        getGame();
    }
});

function getGame() {
    if (gameOf == null) {
        gameOf = parseInt(prompt('Input number of times to play.'));
        getGame();
    } else if (gameOf < 0) {
        gameOf = parseInt(prompt('If only we could go back in time, we should look to the future anyways, Input a positive number.'));
        getGame();
    } else if (gameOf === 0) {
        gameOf = parseInt(prompt('I know we can beat the bots, Input a number greater than 0.'));
        getGame();
    } else if (gameOf > 10) {
        gameOf = parseInt(prompt('We might be here a while, lets try 10 rounds or less.'));
        getGame();
    } else { }
}

function erase() {
    gameCount = 0;
    playerScore = 0;
    computerScore = 0;
    gameOf = null;
    document.getElementById("para").innerHTML = '';
}

reset.addEventListener("click", () => {
    erase();
});

function computerPlay() {
    let computerPick = choice[Math.floor(Math.random() * choice.length)];
    return computerPick
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
        return "You win!";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a tie, Try again!";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a tie, Try again!";
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a tie, Try again!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats Paper";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats Rock";
    } else {
        return "Pick either Rock, Paper or Scissors!";
    }
}

function roundResult() {
    if (text == "You win!") {
        gameCount += 1;
        playerScore += 1;
    } else if (text == "It's a tie, Try again!") {
        gameCount += 1;
    } else if (text == "You lose! Paper beats Rock") {
        gameCount += 1;
        computerScore += 1;
    } else if (text == "You lose! Scissors beats Paper") {
        gameCount += 1;
        computerScore += 1;
    } else if (text == "You lose! Rock beats Scissors") {
        gameCount += 1;
        computerScore += 1;
    } else if (text == "Pick either Rock, Paper or Scissors!") {
        gameCount += 0;
    }
}

function winner() {
    if (playerScore > computerScore) {
        return "Player"
    } else {
        return "Computer"
    }
}

function addText(text) {
    let para = document.createElement("p");
    let node = document.createTextNode(text);
    para.appendChild(node);
    let element = document.getElementById("para");
    element.prepend(para);
}

rock.addEventListener("click", () => {
    if (gameOf == null || isNaN(gameOf) == true || gameCount >= gameOf) {
        text = "Click Number of rounds to set game limit and begin game.";
        addText(text);
        gameOf = null;
    } else {
        playerSelection = "rock";
        computerSelection = computerPlay();
        text = playRound(playerSelection, computerSelection);
        addText(text);
        roundResult(text);
        gameEnd();
    }
});

paper.addEventListener("click", () => {
    if (gameOf == null || isNaN(gameOf) == true || gameCount >= gameOf) {
        text = "Click Number of rounds to set game limit and begin game.";
        addText(text);
        gameOf = null;
    } else {
        playerSelection = "paper";
        computerSelection = computerPlay();
        text = playRound(playerSelection, computerSelection);
        addText(text);
        roundResult(text);
        gameEnd();
    }
});

scissors.addEventListener("click", () => {
    if (gameOf == null || isNaN(gameOf) == true || gameCount >= gameOf) {
        text = "Click Number of rounds to set game limit and begin game.";
        addText(text);
        gameOf = null;
    } else {
        playerSelection = "scissors";
        computerSelection = computerPlay();
        text = playRound(playerSelection, computerSelection);
        addText(text);
        roundResult(text);
        gameEnd();
    }
});

function gameEnd() {
    if ((gameCount === gameOf) && (playerScore != computerScore)) {
        let text = "Scores: Player = " + playerScore + ", Computer = " + computerScore + ".";
        addText(text);
        alert("The winner is " + winner() + ".");
        erase;
    } else if ((gameCount === gameOf) && (playerScore == computerScore)) {
        let text = "Scores: Player = " + playerScore + ", Computer = " + computerScore + ".";
        addText(text);
        alert("It's a tie!. Play again.")
        erase;
    }
}
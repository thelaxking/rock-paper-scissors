let choice = ["rock", "paper", "scissors"];
let playerChoice = null;
let gameCount = 0;
let playerScore = 0;
let computerScore = 0;
let computerSelection = null;
let playerSelection = null;
let result = null;
let gameOf = null;

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
    if (result == "You win!") {
        gameCount += 1;
        playerScore += 1;
    } else if (result == "It's a tie, Try again!") {
        gameCount += 1;
    } else if (result == "You lose! Paper beats Rock") {
        gameCount += 1;
        computerScore += 1;
    } else if (result == "You lose! Scissors beats Paper") {
        gameCount += 1;
        computerScore += 1;
    } else if (result == "You lose! Rock beats Scissors") {
        gameCount += 1;
        computerScore += 1;
    } else if (result == "Pick either Rock, Paper or Scissors!") {
        gameCount += 0;
    } else {
        return "Opps! something went wrong here :("
    }
}

function winner() {
    if (playerScore > computerScore) {
        return "Player"
    } else {
        return "Computer"
    }
}

function reset() {
    gameCount = 0;
    playerScore = 0;
    computerScore = 0;
    playerChoice = null;
    gameOf = null;
}

function start() {
    gameOf = parseInt(prompt('Input number of times to play'));
    game();
}

function game() {
    if (gameCount < gameOf) {
        playerChoice = prompt('Input Rock, Paper or Scissors');
        playerSelection = playerChoice.toLowerCase();
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        result = playRound(playerSelection, computerSelection);
        roundResult(result);
        game();
    } else if ((gameCount === gameOf) && (playerScore != computerScore)) {
        alert("The winner is " + winner() + ".");
        console.log("Scores: Player = " + playerScore + ", Computer = " + computerScore + ".");
        reset();
    } else if ((gameCount === gameOf) && (playerScore == computerScore)) {
        alert("It's a tie!. Play again.")
        console.log("Scores: Player = " + playerScore + ", Computer = " + computerScore + ".");
        reset();
    } else {
        return "Opps! something went wrong here :(";
        reset();
    }
}
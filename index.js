function getComputerChoice() {
    let myArray = [
        "rock",
        "paper",
        "scissors"
    ];
    let computerChoice = myArray[Math.floor(Math.random()*myArray.length)];
    return computerChoice
}

let computerScore = 0;
let playerScore = 0;

function playRound() {
    let playerSelection = prompt("What's your choice - rock, paper, or scissors?")
    playerSelection = playerSelection.toLowerCase().trim();
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        alert("It's a tie!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You lose! Paper covers rock!")
        return computerScore++
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You win! Rock smashes scissors!")
        return playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You win! Paper covers rock!")
        return playerScore++
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("You lose! Scissors cut paper!")
        return computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("You lose! Rock smashes scissors!")
        return computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You win! Scissors cut paper!")
        return playerScore++;
    }
}

function game() {
    alert("Let's play rock, paper, scissors! Best out of 5 wins!")
    for (let i = 1; i <= 5; i++) {
        playRound()
    }
    if (computerScore > playerScore) {
        alert(`Computer: ${computerScore}, You: ${playerScore} --- You lose!`)
    } else if (playerScore > computerScore) {
        alert(`Computer: ${computerScore}, You: ${playerScore} --- You win!`)
    } else if (computerScore === playerScore) {
        alert(`Computer: ${computerScore}, You: ${playerScore} --- It's a tie!!!`)
    }
}

game()
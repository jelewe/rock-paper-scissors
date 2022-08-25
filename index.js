function getComputerChoice() {
    let myArray = [
        "rock",
        "paper",
        "scissors"
    ];
    let computerChoice = myArray[Math.floor(Math.random()*myArray.length)];
    return computerChoice
}

function playRound() {
    let playerSelection = prompt("What's your choice - rock, paper, or scissors?")
    playerSelection = playerSelection.toLowerCase().trim();
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        alert("It's a tie!");
        return 0;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You lose! Paper covers rock!")
        return -1;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You win! Rock smashes scissors!")
        return 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You win! Paper covers rock!")
        return 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("You lose! Scissors cut paper!")
        return -1;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("You lose! Rock smashes scissors!")
        return -1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You win! Scissors cut paper!")
        return 1;
    }
}

function game() {
    alert("Let's play rock, paper, scissors! Best score out of 5 rounds is the winner!")
    for (let i = 1; i <= 5; i++) {
        playRound()
    }
}

game()
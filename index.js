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
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You lose! Paper covers rock!")
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You win! Rock smashes scissors!")
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You win! Paper covers rock!")
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("You lose! Scissors cut paper!")
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("You lose! Rock smashes scissors!")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You win! Scissors cut paper!")
    }
}

playRound()
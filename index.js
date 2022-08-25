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
    } else {
        alert("You lose!")
    }
}

playRound()
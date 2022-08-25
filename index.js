function getComputerChoice() {
    let myArray = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    let computerChoice = myArray[Math.floor(Math.random()*myArray.length)];
    return computerChoice
}

console.log(getComputerChoice())

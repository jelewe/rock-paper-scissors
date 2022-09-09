const computerChoiceDiv = document.querySelector('.computerDiv');
const resultsDiv = document.querySelector('.outcomeDiv');
const scoreDiv = document.querySelector('.scoreDiv');

let computerScore = 0;
let playerScore = 0;

/*this codeblock gets player choice from button click & calls playRound & getComputerChoice*/
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors")
rock.addEventListener('click', function() {
    playRound('rock', getComputerChoice());
  });
  paper.addEventListener('click', function() {
    playRound('paper', getComputerChoice());
  });
  scissors.addEventListener('click', function() {
    playRound('scissors', getComputerChoice());
  });

/* This function randomly picks rock, paper, or scissors */ 
function getComputerChoice() { 
    let computerChoice ="";
    let myArray = [
        "rock",
        "paper",
        "scissors"
    ];
    computerChoice = myArray[Math.floor(Math.random()*myArray.length)];
    computerChoiceDiv.textContent = `Computer chose ${computerChoice}...`;
    return computerChoice;
};

/* This function cycles thru one round of gameplay */ 
function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        resultsDiv.textContent = "It's a tie!";
        scoreDiv.textContent = `Computer: ${computerScore}, You: ${playerScore}`;
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        resultsDiv.textContent  = "You lose! Paper covers rock!";
        scoreDiv.textContent = `Computer: ${computerScore}, You: ${playerScore}`;
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore++;
        resultsDiv.textContent  = "You win! Rock smashes scissors!";
        scoreDiv.textContent = `Computer: ${computerScore}, You: ${playerScore}`;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        resultsDiv.textContent  = "You win! Paper covers rock!";
        scoreDiv.textContent = `Computer: ${computerScore}, You: ${playerScore}`;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        resultsDiv.textContent = "You lose! Scissors cut paper!";
        scoreDiv.textContent = `Computer: ${computerScore}, You: ${playerScore}`;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        resultsDiv.textContent = "You lose! Rock smashes scissors!";
        scoreDiv.textContent = `Computer: ${computerScore}, You: ${playerScore}`;
    } else  {
        playerScore++;
        resultsDiv.textContent = "You win! Scissors cut paper!";
        scoreDiv.textContent = `Computer: ${computerScore}, You: ${playerScore}`;
    };
    game()
};

function game() {
    if (playerScore === 5 || computerScore ===5) {
        if (computerScore === 5) {
            scoreDiv.innerText = `GAME OVER! 
            Computer: ${computerScore}, You: ${playerScore}`;
        } else {
            scoreDiv.innerText = `YOU ARE THE CHAMPION! 
            Computer: ${computerScore}, You: ${playerScore}`;
        }
        playerScore = 0;
        computerScore = 0;
    }
};
